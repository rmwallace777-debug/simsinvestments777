import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const GHL_TOKEN = process.env.GHL_API_TOKEN || '';
const GHL_LOCATION = '3hM1yVflAe1LZ75pZJIs';
const GHL_API = 'https://services.leadconnectorhq.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessName, website, city, source } = body;

    if (!name || !email || !businessName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Store lead locally (best-effort on Vercel)
    try {
      const leadsDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(leadsDir)) fs.mkdirSync(leadsDir, { recursive: true });
      const lead = { name, email, businessName, website: website || '', city: city || '', source: source || 'website', timestamp: new Date().toISOString() };
      const filePath = path.join(leadsDir, 'leads.json');
      let leads: any[] = [];
      if (fs.existsSync(filePath)) {
        try { leads = JSON.parse(fs.readFileSync(filePath, 'utf-8')); } catch {}
      }
      leads.push(lead);
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
    } catch {}

    // Try GHL first
    if (GHL_TOKEN) {
      try {
        const firstName = (name || '').split(' ')[0] || 'Lead';
        const lastName = (name || '').split(' ').slice(1).join(' ') || '';
        const ghlRes = await fetch(`${GHL_API}/contacts/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GHL_TOKEN}`,
            'Content-Type': 'application/json',
            'Version': 'v3',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            locationId: GHL_LOCATION,
            firstName, lastName, email,
            companyName: businessName,
            tags: ['audit-campaign', 'website-lead'],
            customFields: [{ key: 'contact.audit_score', field_value: 'Pending' }],
            source: 'website',
            city: city || '',
          }),
        });
        if (ghlRes.ok) {
          return NextResponse.json({ success: true, message: 'Lead captured in GHL', ghl_connected: true });
        }
        // GHL failed — fall through to email
      } catch (err) {
        console.error('GHL error:', err);
      }
    }

    // Fallback: email notification
    try {
      const emailPass = process.env.EMAIL_PASS;
      if (emailPass) {
        const transporter = nodemailer.createTransport({
          host: 'mail.privateemail.com',
          port: 587,
          secure: false,
          auth: { user: 'robert@simsinvestments777.com', pass: emailPass },
        });
        await transporter.sendMail({
          from: '"Sims Website" <robert@simsinvestments777.com>',
          to: 'robert@simsinvestments777.com',
          subject: `New Lead: ${name} — ${businessName}`,
          html: `<h2>New Lead</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Business:</b> ${businessName}</p><p><b>City:</b> ${city || 'N/A'}</p>`,
        });
        return NextResponse.json({ success: true, message: 'Lead captured via email', ghl_connected: false });
      }
    } catch (err) {
      console.error('Email error:', err);
    }

    return NextResponse.json({ success: true, message: 'Lead saved locally', ghl_connected: false });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

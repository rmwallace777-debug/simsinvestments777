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

    // Store lead locally
    const leadsDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    const lead = {
      name, email, businessName,
      website: website || '',
      city: city || '',
      source: source || 'website',
      timestamp: new Date().toISOString(),
    };

    const filePath = path.join(leadsDir, 'leads.json');
    let leads: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        leads = JSON.parse(content);
      } catch {}
    }
    leads.push(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    // Create contact in GHL directly
    let ghlCreated = false;
    if (GHL_TOKEN) {
      try {
        const firstName = (name || '').split(' ')[0] || 'Lead';
        const lastName = (name || '').split(' ').slice(1).join(' ') || '';

        const ghlResponse = await fetch(`${GHL_API}/contacts/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GHL_TOKEN}`,
            'Content-Type': 'application/json',
            'Version': 'v3',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            locationId: GHL_LOCATION,
            firstName,
            lastName,
            email,
            companyName: businessName,
            tags: ['audit-campaign', 'website-lead'],
            customFields: [
              { key: 'contact.audit_score', field_value: 'Pending' },
            ],
            source: 'website',
            city: city || '',
          }),
        });

        if (ghlResponse.ok) {
          ghlCreated = true;
        } else {
          const errText = await ghlResponse.text();
          console.error('GHL create contact failed:', errText);
        }
      } catch (err) {
        console.error('GHL API error:', err);
      }
    }

    // If GHL isn't available, send email notification
    if (!ghlCreated) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'mail.privateemail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'robert@simsinvestments777.com',
            pass: process.env.EMAIL_PASS || '',
          },
        });

        await transporter.sendMail({
          from: '"Sims Website" <robert@simsinvestments777.com>',
          to: 'robert@simsinvestments777.com',
          subject: `New Lead: ${name} — ${businessName}`,
          html: `
            <h2>New Website Lead</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business:</strong> ${businessName}</p>
            <p><strong>Website:</strong> ${website || 'N/A'}</p>
            <p><strong>City:</strong> ${city || 'N/A'}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Time:</strong> ${lead.timestamp}</p>
          `,
        });
      } catch (emailErr) {
        console.error('Email notification failed:', emailErr);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      ghl_connected: ghlCreated,
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessName, website, city, source } = body;

    // Validate required fields
    if (!name || !email || !businessName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Store lead in a JSON file (no DB needed for MVP)
    const leadsDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    const lead = {
      name,
      email,
      businessName,
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

    // Forward to GHL webhook
    try {
      const ghlBody = {
        firstName: (name || '').split(' ')[0],
        lastName: (name || '').split(' ').slice(1).join(' '),
        email,
        company: businessName,
        website,
        city,
        source: source || 'website',
      };
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ghlBody),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
    } catch (err) {
      // Webhook is optional - don't fail if server is down
    }

    return NextResponse.json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

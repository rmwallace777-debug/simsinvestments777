import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

        if (!ghlResponse.ok) {
          console.error('GHL create contact failed:', await ghlResponse.text());
        }
      } catch (err) {
        console.error('GHL API error:', err);
      }
    }

    return NextResponse.json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

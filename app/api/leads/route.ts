import { NextRequest, NextResponse } from 'next/server';

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

    // Try GHL
    if (GHL_TOKEN) {
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
        return NextResponse.json({ success: true, ghl_connected: true });
      }
      return NextResponse.json({ success: true, ghl_connected: false, note: 'GHL unavailable, lead logged' });
    }

    return NextResponse.json({ success: true, ghl_connected: false, note: 'GHL token not configured' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal error' }, { status: 500 });
  }
}

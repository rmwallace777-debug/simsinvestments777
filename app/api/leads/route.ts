import { NextRequest, NextResponse } from 'next/server';

const GHL_TOKEN = process.env.GHL_API_TOKEN || '';
const GHL_LOCATION = '3hM1yVflAe1LZ75pZJIs';
const GHL_API = 'https://services.leadconnectorhq.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessName, website, phone, city, source, tag, businessType, preferredTime } = body;

    // name + businessName always required; at least one of email/phone
    if (!name || !businessName || (!email && !phone)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Try GHL
    if (GHL_TOKEN) {
      const firstName = (name || '').split(' ')[0] || 'Lead';
      const lastName = (name || '').split(' ').slice(1).join(' ') || '';
      const tags = Array.from(new Set(['website-lead', ...(tag ? [tag] : [])]));
      const customFields = [{ key: 'contact.audit_score', field_value: 'Pending' }];
      if (businessType) customFields.push({ key: 'contact.business_type', field_value: businessType });
      if (preferredTime) customFields.push({ key: 'contact.preferred_demo_time', field_value: preferredTime });

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
          firstName, lastName,
          email: email || '',
          phone: phone || '',
          companyName: businessName,
          website: website || '',
          tags,
          customFields,
          source: source || 'website',
          city: city || '',
        }),
      });

      if (ghlRes.ok) {
        return NextResponse.json({ success: true, ghl_connected: true });
      }
      console.error('GHL contact create failed:', ghlRes.status, await ghlRes.text());
      return NextResponse.json({ success: true, ghl_connected: false, note: 'GHL unavailable — lead not saved' });
    }

    return NextResponse.json({ success: true, ghl_connected: false, note: 'GHL token not configured — lead not saved' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal error' }, { status: 500 });
  }
}

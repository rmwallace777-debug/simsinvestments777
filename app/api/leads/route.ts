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

    return NextResponse.json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

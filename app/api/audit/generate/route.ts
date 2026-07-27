import { NextRequest, NextResponse } from 'next/server';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const AUDIT_SCRIPT = '/home/ubuntu/winged_agents/wing_b/subwings/bw/scripts/audit_tool.py';
const OUTPUT_DIR = '/tmp/audits';

export async function POST(req: NextRequest) {
  try {
    const { name, email, businessName, city } = await req.json();
    
    if (!businessName || !city || !email) {
      return NextResponse.json({ error: 'Missing required fields: businessName, city, email' }, { status: 400 });
    }

    // Ensure output dir exists
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const timestamp = Date.now();
    const outputFile = path.join(OUTPUT_DIR, `audit_${timestamp}.txt`);
    const pdfFile = path.join(OUTPUT_DIR, `audit_${timestamp}.pdf`);

    // Run the audit tool
    const cmd = `python3 "${AUDIT_SCRIPT}" "${businessName}" "${city}" --email "${email}" --output "${outputFile}"`;
    execSync(cmd, { timeout: 30000, cwd: '/home/ubuntu/winged_agents' });

    // Check if output was generated
    if (!fs.existsSync(outputFile)) {
      throw new Error('Audit script did not produce output');
    }

    const reportText = fs.readFileSync(outputFile, 'utf-8');

    // Send email with results
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
      from: '"Robert Wallace" <robert@simsinvestments777.com>',
      to: email,
      subject: `Your Digital Audit for ${businessName} is Ready`,
      text: `Hi ${name || 'there'},\n\nYour digital audit for ${businessName} in ${city} is complete.\n\n${reportText}\n\n---\nRobert Wallace\nSims Investment Management Services, LLC\nsimsinvestments777.com`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#f59e0b">Your Digital Audit is Ready</h2>
        <p>Hi ${name || 'there'},</p>
        <p>We've analyzed <strong>${businessName}</strong> in <strong>${city}</strong>. Here's your report:</p>
        <pre style="background:#f5f5f5;padding:16px;border-radius:8px;font-size:13px;white-space:pre-wrap">${reportText.slice(0, 3000)}</pre>
        <p style="margin-top:24px">Want to fix these issues? <a href="https://simsinvestments777.com/reputation-pricing" style="color:#f59e0b;font-weight:bold">View our plans →</a></p>
        <hr style="margin-top:24px;border:none;border-top:1px solid #eee">
        <p style="color:#666;font-size:12px">Robert Wallace | Sims Investment Management Services, LLC<br>
        simsinvestments777.com</p>
      </div>`,
    });

    return NextResponse.json({
      success: true,
      message: `Audit generated and emailed to ${email}`,
    });

  } catch (err: any) {
    console.error('Audit generation error:', err);
    return NextResponse.json({
      success: false,
      error: err.message || 'Failed to generate audit',
    }, { status: 500 });
  }
}

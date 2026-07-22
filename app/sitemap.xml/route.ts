import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const baseUrl = 'https://simsinvestments777.com';
  
  const staticPages = [
    { loc: baseUrl, priority: '1.0', freq: 'weekly' },
    { loc: `${baseUrl}/services`, priority: '0.9', freq: 'monthly' },
    { loc: `${baseUrl}/pricing`, priority: '0.9', freq: 'monthly' },
    { loc: `${baseUrl}/reputation-pricing`, priority: '0.9', freq: 'monthly' },
    { loc: `${baseUrl}/fix-guide`, priority: '0.8', freq: 'weekly' },
    { loc: `${baseUrl}/blog`, priority: '0.8', freq: 'weekly' },
    { loc: `${baseUrl}/free-audit`, priority: '0.9', freq: 'monthly' },
    { loc: `${baseUrl}/about`, priority: '0.6', freq: 'monthly' },
    { loc: `${baseUrl}/contact`, priority: '0.5', freq: 'monthly' },
  ];

  const blogDir = path.join(process.cwd(), 'content', 'blog');
  let blogUrls = '';
  if (fs.existsSync(blogDir)) {
    blogUrls = fs.readdirSync(blogDir)
      .filter(f => f.endsWith('.mdx'))
      .map(f => {
        let lastmod = '';
        try {
          const { data } = matter(fs.readFileSync(path.join(blogDir, f), 'utf-8'));
          if (data.date) lastmod = new Date(data.date).toISOString().split('T')[0];
        } catch {}
        const slug = f.replace('.mdx', '');
        return `  <url><loc>${baseUrl}/blog/${slug}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<changefreq>monthly</changefreq><priority>0.6</priority></url>`;
      })
      .join('\n');
  }

  const staticUrls = staticPages.map(p =>
    `  <url><loc>${p.loc}</loc><changefreq>${p.freq}</changefreq><priority>${p.priority}</priority></url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}

import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://simsinvestments777.com';

  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/reputation-pricing`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/fix-guide`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/free-audit`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${baseUrl}/cookies`, changeFrequency: 'yearly' as const, priority: 0.2 },
  ];

  const blogDir = path.join(process.cwd(), 'content', 'blog');
  let blogPosts: MetadataRoute.Sitemap = [];

  if (fs.existsSync(blogDir)) {
    blogPosts = fs.readdirSync(blogDir)
      .filter(f => f.endsWith('.mdx'))
      .map(f => {
        let lastMod = new Date('2026-07-22');
        try {
          const raw = fs.readFileSync(path.join(blogDir, f), 'utf-8');
          const { data } = matter(raw);
          if (data.date) lastMod = new Date(data.date);
        } catch {}
        return {
          url: `${baseUrl}/blog/${f.replace('.mdx', '')}`,
          lastModified: lastMod,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        };
      });
  }

  return [...staticPages, ...blogPosts];
}

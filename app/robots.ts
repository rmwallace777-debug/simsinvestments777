import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/privacy', '/terms', '/cookies', '/api/'] },
    sitemap: 'https://simsinvestments777.com/sitemap.xml',
  };
}

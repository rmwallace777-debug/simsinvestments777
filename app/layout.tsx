import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = 'https://simsinvestments777.com';

export const metadata: Metadata = {
  title: {
    default: 'Sims Investment Management | B2B Lead Generation & Google Review Management',
    template: '%s | Sims Investment Management',
  },
  description:
    'Dominate your local market with data-driven B2B lead generation and Google review management. Serving Texas businesses with proven results since 2020.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Sims Investment Management',
    title: 'Sims Investment Management | B2B Lead Generation & Google Review Management',
    description: 'Dominate your local market with data-driven B2B lead generation and Google review management.',
    url: siteUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sims Investment Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sims Investment Management',
    description: 'Data-driven B2B lead generation and reputation management for Texas businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: '#0a0e1a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Sims Investment Management Services, LLC',
              description: 'B2B Lead Generation and Google Review Management services for Texas businesses.',
              url: siteUrl,
              telephone: '+19034445555',
              email: 'robert@simsinvestments777.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Paris',
                addressRegion: 'TX',
                postalCode: '75460',
                addressCountry: 'US',
              },
              founder: {
                '@type': 'Person',
                name: 'Robert Wallace',
              },
              priceRange: '$297 - $1,497',
              image: `${siteUrl}/og-image.png`,
              openingHours: 'Mo-Fr 09:00-17:00',
              areaServed: [
                { '@type': 'City', name: 'Paris' },
                { '@type': 'State', name: 'Texas' },
              ],
            }),
          }}
        />
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Sims Investment Management Services, LLC',
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+19034445555',
                contactType: 'sales',
                email: 'robert@simsinvestments777.com',
                availableLanguage: ['English'],
              },
              sameAs: [
                'https://twitter.com/simsinvestments',
                'https://linkedin.com/company/simsinvestments',
              ],
            }),
          }}
        />
        {/* WebSite schema with search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Sims Investment Management',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${siteUrl}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}

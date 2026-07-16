import { FadeIn } from '@/components/Animations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          <div className="space-y-6 text-sm text-slate-400 leading-relaxed">
            <p>Last updated: January 1, 2025</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand how you use our site, and improve your experience.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">2. How We Use Cookies</h2>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (Google Analytics)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">3. Third-Party Cookies</h2>
            <p>We use Google Analytics to analyze website traffic. Google may set cookies on your device for this purpose. You can learn more about Google&apos;s privacy practices at their Privacy Policy page.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">4. Managing Cookies</h2>
            <p>You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that blocking essential cookies may affect website functionality.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">5. Contact</h2>
            <p>
              For questions about our cookie policy:<br />
              Email: robert@simsinvestments777.com
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

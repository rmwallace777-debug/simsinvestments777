import { FadeIn } from '@/components/Animations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-sm leading-relaxed">
            <p>Last updated: January 1, 2025</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">1. Introduction</h2>
            <p>
              Sims Investment Management Services, LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, phone number, business name, and website URL when you fill out our forms.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referral sources.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze site traffic.</li>
            </ul>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">4. Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">5. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information</li>
              <li>Opt out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">7. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:<br />
              Email: robert@simsinvestments777.com<br />
              Address: Paris, Texas 75460
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

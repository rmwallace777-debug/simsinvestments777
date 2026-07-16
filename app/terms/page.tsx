import { FadeIn } from '@/components/Animations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="space-y-6 text-sm text-slate-400 leading-relaxed">
            <p>Last updated: January 1, 2025</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the Sims Investment Management Services, LLC website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">2. Services Description</h2>
            <p>Sims Investment Management Services, LLC provides B2B lead generation and Google review management services. The specific scope, deliverables, and pricing are outlined in individual service agreements.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use our services in compliance with all applicable laws</li>
              <li>Not engage in any activity that could harm our systems or reputation</li>
            </ul>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">4. Payment Terms</h2>
            <p>Services are billed monthly. Payment is due upon receipt of invoice. Late payments may result in service suspension. All fees are non-refundable unless otherwise specified in your service agreement.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">5. Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on our website are owned by Sims Investment Management Services, LLC. You may not reproduce, distribute, or create derivative works without our express written consent.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
            <p>Sims Investment Management Services, LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability is limited to the amount you have paid us in the preceding 12 months.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">7. Termination</h2>
            <p>Either party may terminate services with 30 days written notice. We reserve the right to terminate access for violation of these terms.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">8. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Lamar County, Texas.</p>

            <h2 className="text-white text-lg font-semibold mt-8 mb-3">9. Contact</h2>
            <p>
              For questions about these terms:<br />
              Email: robert@simsinvestments777.com<br />
              Address: Paris, Texas 75460
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

import { FadeIn } from '@/components/Animations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Sims Investment Management',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-8">Last updated: August 2, 2026</p>
          <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">1. Who We Are</h2>
              <p>
                Sims Investment Management Services, LLC ("we," "our," "us") operates simsinvestments777.com
                and provides digital marketing services including reputation management, lead generation,
                and AI receptionist solutions. This policy explains what information we collect and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Contact information:</strong> name, email address, phone number, business name</li>
                <li><strong>Account information:</strong> billing details processed by Stripe (we never store card numbers)</li>
                <li><strong>Service data:</strong> Google Business Profile details you connect, targeting criteria for lead generation, website and business information needed to deliver our services</li>
                <li><strong>Communications:</strong> messages you send us by email, SMS, or chat</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To deliver the services you subscribed to (review requests, lead delivery, AI receptionist)</li>
                <li>To process payments and manage your subscription</li>
                <li>To communicate with you about your account and services (transactional SMS and email)</li>
                <li>To send marketing communications only if you have opted in (e.g., via our website chat widget)</li>
                <li>To improve our products and support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">4. SMS &amp; Messaging</h2>
              <p>
                We send SMS messages for service delivery and account purposes. Marketing texts are only sent
                to numbers that have opted in through our website chat widget or an equivalent consent
                mechanism. Reply <strong>STOP</strong> at any time to unsubscribe from text messages.
                Message and data rates may apply.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">5. Payments</h2>
              <p>
                Payments are processed by Stripe. We do not store or have access to your full card details.
                Your payment information is governed by Stripe's privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">6. Third-Party Services</h2>
              <p>
                We use trusted service providers to run our platform, including GoHighLevel (CRM and
                automation), Stripe (payments), Vercel (hosting), and Mailgun (email delivery). Each provider
                processes data only to provide its service to us.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">7. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information at any time
                by contacting us at{' '}
                <a href="mailto:robert@simsinvestments777.com" className="text-blue-400 underline">robert@simsinvestments777.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">8. Contact</h2>
              <p>
                Sims Investment Management Services, LLC · Paris, TX<br />
                Email:{' '}
                <a href="mailto:robert@simsinvestments777.com" className="text-blue-400 underline">robert@simsinvestments777.com</a>
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

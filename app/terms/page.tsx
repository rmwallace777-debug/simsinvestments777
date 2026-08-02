import { FadeIn } from '@/components/Animations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Sims Investment Management',
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-8">Last updated: August 2, 2026</p>
          <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">1. Agreement</h2>
              <p>
                By purchasing or subscribing to any service from Sims Investment Management Services, LLC
                ("we," "our," "us"), you agree to these Terms of Service. If you do not agree, do not subscribe.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">2. Our Services</h2>
              <p>
                We provide digital marketing services, including: <strong>Reputation Management</strong>{' '}
                (review requests, Google Business Profile optimization, review monitoring and responses),{' '}
                <strong>Lead Generation</strong> (qualified business leads delivered per your targeting
                criteria), and <strong>AI Receptionist</strong> (AI voice and chat agents that answer calls,
                capture leads, and book appointments). Services are delivered through our automated platform.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">3. Subscriptions &amp; Billing</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Plans are billed monthly in advance and renew automatically until cancelled.</li>
                <li>You may cancel at any time; cancellation takes effect at the end of the current billing period. No partial-month refunds.</li>
                <li>Prices are subject to change with at least 30 days' notice.</li>
                <li>Usage-based fees (SMS, email, AI minutes) may apply and are billed with your subscription.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">4. Your Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate business information and grant the access needed to deliver services (e.g., Google Business Profile connection).</li>
                <li>Only request reviews in compliance with Google's review policies — reviews must be solicited universally, without incentives, gating, or pressure.</li>
                <li>You are responsible for the use of your account and the leads we deliver.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">5. No Guarantees</h2>
              <p>
                We work diligently to deliver results, but we do not guarantee specific outcomes such as a
                particular number of reviews, rankings, or leads. Marketing performance depends on factors
                outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">6. Termination</h2>
              <p>
                We may suspend or terminate your access for violation of these terms, non-payment, or
                conduct that harms our platform or other customers. You may cancel anytime through your
                account or by emailing us.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, our total liability for any claim arising from these
                services is limited to the amount you paid us in the 30 days before the claim.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Texas, USA, without regard to conflict
                of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mt-8 mb-3">9. Contact</h2>
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

import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for B2B lead generation and Google review management. Plans start at $297/month. No hidden fees, cancel anytime.',
};

const plans = [
  {
    name: 'Reputation Starter',
    price: '$297',
    period: '/month',
    description: 'Build a strong foundation. Perfect for businesses that need more reviews and a complete Google profile.',
    features: [
      'Review generation campaigns — 15-30 new reviews/month',
      'Google Business Profile optimization',
      'AI-powered review response management',
      'Weekly reputation monitoring & alerts',
      'Monthly reputation score report',
      'Email support',
    ],
    cta: 'Fix My Reputation',
    popular: false,
  },
  {
    name: 'Reputation Growth',
    price: '$697',
    period: '/month',
    description: 'Everything in Starter plus directory cleanup and tech stack setup. For businesses ready to dominate local search.',
    features: [
      'Everything in Reputation Starter',
      'Directory listing cleanup & monitoring',
      'Website tech stack setup (Analytics, Pixel, GTM)',
      'Competitor reputation tracking',
      'Review response for all platforms',
      'Priority email + phone support',
      'Monthly strategy review',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Reputation Pro',
    price: '$1,497',
    period: '/month',
    description: 'Full-service partnership. We manage your entire online presence so you can focus on running your business.',
    features: [
      'Everything in Reputation Growth',
      'AI phone agent for review requests',
      'Custom reputation website & landing pages',
      'Lead generation add-on included',
      'Real-time dashboard & analytics',
      'Dedicated account manager',
      'Same-day priority support',
    ],
    cta: 'Go Pro',
    popular: false,
  },
];

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. All plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We specialize in B2B service businesses: plumbing, HVAC, roofing, construction, dental, medical, legal, and professional services throughout Texas.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most clients see their first qualified leads within 2-3 weeks. Review management results typically show within 30-60 days as new reviews accumulate.',
  },
  {
    q: 'Can I combine both services?',
    a: 'Absolutely. We recommend combining lead generation with review management for maximum impact. Our Growth plan includes both services.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees. Your first month covers onboarding and campaign setup. We are transparent about our pricing.',
  },
  {
    q: 'What if I am not satisfied?',
    a: 'Your satisfaction is guaranteed. If you are not seeing results after 60 days, we will work with you to adjust the strategy or part ways — no hard feelings.',
  },
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            No hidden fees. No long-term contracts. Just results-driven growth services that scale with your business.
          </p>
        </FadeIn>

        {/* Pricing Tiers */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div className={`glass-card rounded-2xl p-8 relative ${plan.popular ? 'border-teal-500/40 teal-glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/free-audit"
                  className={`block text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500 teal-glow'
                      : 'border border-white/[0.1] text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Add-ons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Add-On Services</h2>
          <p className="text-slate-400">Enhance your plan with these optional add-ons.</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'Lead Generation Add-On', price: '$497/mo', desc: 'Add B2B lead generation to any reputation plan. Get qualified leads delivered weekly.' },
            { title: 'AI Phone Agent', price: '$397/mo', desc: 'AI-powered phone agent that handles review requests, appointment scheduling, and FAQs.' },
            { title: 'Google Ads Management', price: '$397/mo', desc: 'Targeted local ad campaigns to drive traffic while your reputation grows.' },
          ].map((addon) => (
            <StaggerItem key={addon.title}>
              <div className="glass-card rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-1">{addon.title}</h3>
                <p className="text-teal-400 font-bold text-lg mb-2">{addon.price}</p>
                <p className="text-sm text-slate-400">{addon.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="glass-card rounded-xl group">
                <summary className="flex items-center justify-between px-6 py-4 text-white font-medium cursor-pointer list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-slate-400 mb-8">Book a free strategy call and we will help you find the perfect plan.</p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

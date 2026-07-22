import BuyButton from '@/components/BuyButton';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Check, Star, ThumbsUp, TrendingUp, Shield, Search, Phone, Globe, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Reputation Management | Pricing & Plans',
  description: 'Fix your online presence with our reputation management services. Google reviews, GBP optimization, directory cleanup, and tech setup. Plans start at $297/month.',
};

const plans = [
  {
    name: 'Reputation Starter',
    price: '$297',
    period: '/month',
    description: 'Build a strong online foundation. Perfect for businesses that need more reviews and a complete Google profile.',
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
    description: 'Everything in Starter plus directory cleanup and tech stack setup. Ready to dominate local search.',
    features: [
      'Everything in Reputation Starter',
      'Directory listing cleanup & monitoring',
      'Website tech stack setup (Analytics, Pixel, GTM)',
      'Competitor reputation tracking',
      'Review response management for all platforms',
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
      'AI phone agent for automated review requests',
      'Custom reputation landing page',
      'Lead generation add-on included',
      'Real-time reputation dashboard',
      'Dedicated account manager',
      'Same-day priority support',
    ],
    cta: 'Go Pro',
    popular: false,
  },
];

const faqs = [
  {
    q: 'How long until I see more reviews?',
    a: 'Most clients see their first new review within 2 weeks of launch. By month 2, you should have 15-30 new reviews consistently.',
  },
  {
    q: 'Do you respond to negative reviews?',
    a: 'Yes. We craft professional, empathetic responses to negative reviews that show you care about customer satisfaction. All negative review responses are sent for your approval before posting.',
  },
  {
    q: 'Can I combine this with lead generation?',
    a: 'Absolutely. Many clients add our lead generation services. Growth and Pro plans already include lead gen capabilities, or you can add it to any plan.',
  },
  {
    q: 'What if I am not satisfied?',
    a: 'Your satisfaction is guaranteed. If you are not seeing results after 60 days, we will adjust the strategy or part ways — no hard feelings. Month-to-month, cancel anytime.',
  },
  {
    q: 'How is the reputation score calculated?',
    a: 'We analyze your Google Business Profile, review volume and sentiment, website tech stack, directory listing accuracy, and overall digital footprint. Your score updates monthly.',
  },
];

export default function ReputationPricingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-4">
            Online Reputation Management
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Fix Your Online <span className="gradient-text">Reputation</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Your customers search for you before they buy. We make sure what they find is great reviews, accurate info, and a professional online presence.
          </p>
        </FadeIn>

        {/* How Audit Maps to Services */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <h2 className="text-xl font-bold text-white text-center mb-6">How Your Audit Score Maps to Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Low Reputation Score?</p>
                  <p className="text-xs text-slate-400">We generate authentic reviews and manage responses to build trust fast.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Incomplete GBP?</p>
                  <p className="text-xs text-slate-400">We optimize photos, hours, services, and categories for full visibility.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Search className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Poor Listings Accuracy?</p>
                  <p className="text-xs text-slate-400">We clean up your NAP across 13+ directories so customers can find you.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">No Tracking Installed?</p>
                  <p className="text-xs text-slate-400">We install Google Analytics, Meta Pixel, and GTM to measure every visitor.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Pricing Tiers */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div className={`glass-card rounded-2xl p-8 relative ${plan.popular ? 'border-amber-500/40 amber-glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-xs font-semibold text-white">
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
                      <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>

                <BuyButton
                  planId={`reputation-${plan.name.toLowerCase().replace('reputation ', '')}`}
                  label={plan.cta}
                  popular={plan.popular}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">How Reputation Management Works</h2>
          <p className="text-slate-400">Our proven process delivers real, measurable results.</p>
        </FadeIn>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { step: '01', title: 'Audit', desc: 'We analyze your current online presence and identify gaps.' },
            { step: '02', title: 'Strategy', desc: 'We build a plan to fix each issue — reviews, listings, tech.' },
            { step: '03', title: 'Execute', desc: 'Our system runs review campaigns, responds to feedback, and tracks changes daily.' },
            { step: '04', title: 'Report', desc: 'Monthly score reports show exactly how your reputation is improving.' },
          ].map((item) => (
            <div key={item.step} className="glass-card rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-400 font-bold text-sm">{item.step}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fix Guide Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">Every Issue We Check — And How We Fix It</h2>
          <p className="text-slate-400 mb-6">
            Our complete fix guide breaks down every audit issue with the exact fix and which plan includes it.
          </p>
          <Link
            href="/fix-guide"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            See the Fix Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
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
            <h2 className="text-2xl font-bold text-white mb-4">Start Fixing Your Reputation Today</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Get your free digital audit and see exactly where your online presence needs work.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Get Your Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

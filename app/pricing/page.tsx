import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Check, ArrowRight, HelpCircle, Star, TrendingUp, Globe, Search } from 'lucide-react';
import type { Metadata } from 'next';
import BuyButton from '@/components/BuyButton';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for B2B lead generation and reputation management. Plans start at $297/month. No hidden fees, cancel anytime.',
};

const repPlans = [
  {
    name: 'Reputation Starter',
    price: '$297',
    period: '/month',
    description: 'Build a strong online foundation. Perfect for businesses that need more reviews and a complete Google profile.',
    features: [
      'Review generation campaigns — 15-30 new reviews/month',
      'Google Business Profile optimization',
      'AI-powered review response management',
      'SMS-enabled business number setup',
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
      'Directory listing cleanup & monitoring (15+ platforms)',
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
      'Google Ads & Meta Pixel conversion tracking',
      'Lead generation add-on included',
      'Real-time reputation dashboard',
      'Dedicated account manager',
      'Same-day priority support',
    ],
    cta: 'Go Pro',
    popular: false,
  },
];

const leadPlans = [
  {
    name: 'Starter',
    price: '$297',
    period: '/month',
    description: 'Perfect for small businesses looking to get their first steady stream of leads.',
    features: [
      '50 qualified B2B leads/month',
      'Basic prospect research',
      'Email outreach campaigns',
      'Weekly lead reports',
      'Email support',
      '1 strategy call/month',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$697',
    period: '/month',
    description: 'For growing businesses ready to scale their pipeline.',
    features: [
      '100 qualified B2B leads/month',
      'Deep prospect research',
      'Email + LinkedIn outreach',
      'Weekly pipeline reports',
      '2 strategy calls/month',
      'Priority email + phone support',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$1,497',
    period: '/month',
    description: 'Full-service growth partnership for businesses serious about dominating their market.',
    features: [
      '200+ qualified B2B leads/month',
      'Premium prospect research',
      'Email + LinkedIn + phone outreach',
      'Real-time dashboard access',
      'Weekly strategy calls',
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
    q: 'Which service should I start with?',
    a: 'If you need more reviews and a better online presence, start with Reputation Management. If you need a steady flow of new customer leads, start with Lead Generation. Many clients combine both — our Growth and Pro plans are designed for that.',
  },
  {
    q: 'How long until I see results?',
    a: 'Reputation management: first new reviews within 2 weeks, measurable improvement in 30-60 days. Lead generation: first qualified leads within 2-3 weeks.',
  },
  {
    q: 'Can I combine both services?',
    a: 'Absolutely. Many clients combine reputation management with lead generation for maximum impact. Our Reputation Pro plan includes lead generation capabilities.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees. Your first month covers onboarding and campaign setup.',
  },
  {
    q: 'What if I am not satisfied?',
    a: 'Your satisfaction is guaranteed. If you are not seeing results after 60 days, we will adjust the strategy or part ways — no hard feelings.',
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
            Two services. One goal: growing your business. Pick the service that fits your needs, or combine both for maximum impact.
          </p>
        </FadeIn>
      </section>

      {/* Tabbed Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Tabs defaultValue="reputation" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white/[0.04] border border-white/[0.06] p-1 rounded-xl">
              <TabsTrigger
                value="reputation"
                className="px-6 py-2.5 text-sm font-medium rounded-lg data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400 data-[state=inactive]:text-slate-400 transition-all"
              >
                <Star className="w-4 h-4 mr-2 inline-block" />
                Reputation Management
              </TabsTrigger>
              <TabsTrigger
                value="leads"
                className="px-6 py-2.5 text-sm font-medium rounded-lg data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400 data-[state=inactive]:text-slate-400 transition-all"
              >
                <TrendingUp className="w-4 h-4 mr-2 inline-block" />
                B2B Lead Generation
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reputation">
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {repPlans.map((plan) => (
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
          </TabsContent>

          <TabsContent value="leads">
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {leadPlans.map((plan) => (
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
          </TabsContent>
        </Tabs>
      </section>

      {/* Fix Guide Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We run a free digital audit that checks <strong className="text-white">5 categories</strong> with 
            <strong className="text-white"> 12+ issues</strong>. Our fix guide shows exactly what we find 
            and which plan fixes each issue — no guesswork, no upsells.
          </p>
        </FadeIn>
        <FadeIn className="text-center">
          <Link
            href="/fix-guide"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            See Everything We Fix
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
            <h2 className="text-2xl font-bold text-white mb-4">Start With a Free Audit</h2>
            <p className="text-slate-400 mb-8">Not sure which service fits? We will analyze your online presence and recommend the right plan — no obligation.</p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

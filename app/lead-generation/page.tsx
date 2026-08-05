import BuyButton from '@/components/BuyButton';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Check, TrendingUp, Phone, Target, Search, Globe, BarChart3, Zap, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Generation for Contractors & Local Businesses',
  description: 'Done-for-you lead generation for HVAC, plumbing, and service businesses. AI receptionist answers 24/7, Google review generation, and local search domination. Plans from $297/month.',
};

const plans = [
  {
    name: 'Lead Gen Starter',
    price: '$297',
    period: '/month',
    description: 'A steady stream of new customers without you touching the marketing. Perfect for small service businesses getting started.',
    features: [
      'AI receptionist — answers every call 24/7',
      'Missed call text-back automation',
      'Google Business Profile optimization',
      'Review generation campaigns',
      'Monthly lead report',
      'Email support',
    ],
    cta: 'Start Getting Leads',
    popular: false,
  },
  {
    name: 'Lead Gen Growth',
    price: '$697',
    period: '/month',
    description: 'Everything in Starter plus proactive outreach that fills your calendar with booked jobs.',
    features: [
      'Everything in Lead Gen Starter',
      'Targeted SMS outreach campaigns',
      'Automated follow-up sequences (24/48/72h)',
      'AI appointment booking & confirmations',
      'Competitor tracking',
      'Priority phone support',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Lead Gen Pro',
    price: '$1,497',
    period: '/month',
    description: 'Full-funnel lead generation: calls answered, leads nurtured, jobs booked — all while you work.',
    features: [
      'Everything in Lead Gen Growth',
      'AI voice agent with your business brain',
      'Post-call nurture for every lead',
      'Reputation management included',
      'Website lead capture (if you have a site)',
      'Dedicated account manager',
      'Same-day priority support',
    ],
    cta: 'Go Pro',
    popular: false,
  },
];

const faqs = [
  {
    q: 'What does a lead actually cost me?',
    a: 'Through our done-for-you system, most clients pay a flat monthly rate instead of per-click or per-lead fees. Compare that to Google Ads, where the average HVAC lead costs $104–$231 — every lead our system captures is included in your plan.',
  },
  {
    q: 'I answer my own calls. Why do I need an AI receptionist?',
    a: 'You answer calls during business hours. The after-hours call — the 9 PM emergency — is the most expensive call you will never take. Our AI answers in 2 seconds, 24/7, books the appointment, and texts a confirmation. That is a booked job at 8 AM.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Most clients see their first booked jobs within the first two weeks. Review generation starts working immediately — new reviews within the first month. Lead volume compounds as your reputation and local ranking grow.',
  },
  {
    q: 'Do I have to sign a long contract?',
    a: 'No. Month-to-month, cancel anytime. If you are not seeing results after 60 days, we will adjust the strategy or part ways — no hard feelings.',
  },
  {
    q: 'Can I combine this with a website?',
    a: 'Absolutely. A website makes you findable in "near me" searches — and the customers who find you through your website cost $0 to acquire. Many clients start with lead gen and add our Site-in-a-Day website ($1,250 one-time + $119/mo) to close the loop.',
  },
];

const stats = [
  { value: '$9.12', label: 'average cost per click in HVAC ads' },
  { value: '$104–231', label: 'what one paid lead costs competitors' },
  { value: '$0', label: 'what a lead from your own presence costs' },
  { value: '2 seconds', label: 'our AI answers, 24/7' },
];

export default function LeadGenerationPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-4">
            B2B Lead Generation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Your Customers Are Searching. <span className="gradient-text">We Make Sure They Find You.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Done-for-you lead generation for HVAC, plumbing, and service businesses. Every call answered, every lead followed up, every job booked — while you run the truck.
          </p>
        </FadeIn>

        {/* The Cost of a Missed Lead */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <h2 className="text-xl font-bold text-white text-center mb-8">The Math Nobody Tells You</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{s.value}</div>
                  <p className="text-xs text-slate-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 text-center mt-8 max-w-2xl mx-auto">
              Your competitor pays <strong className="text-white">$104–$231 for every lead</strong> they buy through ads. Every call our system answers and every customer who finds you organically costs <strong className="text-white">$0</strong>. A flat monthly rate beats a per-click war every time.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Simple Plans, Real Leads</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Pick the level of automation that fits your business. Every plan is month-to-month — cancel anytime.</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div className={`glass-card rounded-2xl p-8 relative h-full ${plan.popular ? 'border-teal-500/40' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <BuyButton planId={plan.name === 'Lead Gen Growth' ? 'leadgen-growth' : plan.name === 'Lead Gen Pro' ? 'leadgen-pro' : 'leadgen-starter'} label={plan.cta} popular={plan.popular} color="teal" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">How It Works</h2>
        </FadeIn>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Phone, title: '1. The Call Comes In', text: 'Day or night, our AI receptionist answers in 2 seconds — never a voicemail, never a missed job.' },
            { icon: Target, title: '2. The Lead Is Captured', text: 'Every caller gets booked, confirmed by text, and added to your follow-up system automatically.' },
            { icon: Zap, title: '3. Follow-Up Happens on Autopilot', text: '24/48/72-hour nurture sequences keep you top-of-mind until the job is booked.' },
            { icon: BarChart3, title: '4. You Get Paid', text: 'A monthly report shows every call, every lead, every booked job — the ROI, in black and white.' },
          ].map((step) => (
            <div key={step.title} className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
        </FadeIn>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="glass-card rounded-2xl p-6 group">
              <summary className="text-white font-medium cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-slate-500 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-sm text-slate-400 leading-relaxed mt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="glass-card rounded-2xl p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Not Sure Which Plan Fits?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Run a free digital audit and see exactly where your leads are leaking — missed calls, invisible local ranking, thin reviews. The fix guide shows what each plan fixes.
          </p>
          <Link href="/free-audit" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:from-teal-400 hover:to-teal-500 transition-all">
            Get Your Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}

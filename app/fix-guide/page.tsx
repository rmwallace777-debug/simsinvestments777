import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  Check, ArrowRight, Star, ThumbsUp, TrendingUp, Search, Smartphone, 
  Globe, MessageSquare, BarChart3, Target, Layers, Shield, Zap, HelpCircle,
  Camera, Clock, MapPin, ExternalLink
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Fix — Complete Service Guide',
  description: 'Every issue our free audit finds and exactly how we fix each one. See how your plan maps to real results.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a digital audit check?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our digital audit checks 5 categories: Business Details (SMS, hosting, chat, review replies), Techno Stack (Analytics, Tag Manager, Ads tracking, Pixel), Google Business Profile (photos, hours, services, Q&A), Directory Listings (NAP consistency across 15+ platforms), and Reputation & Reviews (volume, sentiment, response rate).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does reputation management cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our plans start at $297/month for the Starter plan (review management, GBP optimization, SMS setup), $697/month for Growth (adds analytics, directory cleanup, competitor tracking), and $1,497/month for Pro (adds chat widget, ad tracking, AI phone agent).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see improvements within 30 days. Review volume typically increases 2-3x in the first month. SEO improvements from GBP optimization and directory cleanup show results in 60-90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do most businesses score 35%?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most service businesses haven\'t had time to focus on their online presence. Common issues include: no SMS-enabled phone (90% of businesses), no reply to reviews (95%), no Google Analytics (65%), inconsistent directory listings (85%), and incomplete Google Business Profiles (80%).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need the Pro plan to start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Starter plan ($297/month) covers the highest-impact fixes: review management, Google Business Profile optimization, and SMS number setup. You can upgrade as your needs grow.',
      },
    },
  ],
};

const issueCategories = [
  {
    id: 'business-details',
    title: 'Business Details',
    icon: Globe,
    color: 'teal',
    weight: '35% of score',
    issues: [
      {
        problem: 'Phone Not SMS-Enabled',
        found: '90% of businesses',
        fix: 'Set up a free Google Voice number or SMS-enabled business line. Update on GBP + all directories.',
        why: '9/10 consumers want to text businesses. No SMS = lost calls to competitors.',
        plans: ['starter', 'growth', 'pro'],
      },
      {
        problem: 'Poor Website Hosting',
        found: '70% of businesses',
        fix: 'Migrate to recognized host (SiteGround, WP Engine, LeadConnector). Install SSL, optimize speed.',
        why: 'Google buries sites it can\'t identify. Undetected hosts = poor rankings.',
        plans: ['growth', 'pro'],
      },
      {
        problem: 'No Chat Widget',
        found: '85% of businesses',
        fix: 'Install Tawk.to (free) or GHL built-in chat. Auto-greeting + after-hours auto-responder.',
        why: 'Chat converts 40% more visitors. Customers expect instant answers.',
        plans: ['pro'],
      },
      {
        problem: 'Not Replying to Reviews',
        found: '95% of businesses',
        fix: 'AI Review Responder drafts professional replies to every review within 24 hours.',
        why: '89% of consumers prefer businesses that reply. Google rewards responsiveness.',
        plans: ['starter', 'growth', 'pro'],
      },
    ],
  },
  {
    id: 'techno-stack',
    title: 'Techno Stack',
    icon: BarChart3,
    color: 'teal',
    weight: '20% of score',
    issues: [
      {
        problem: 'No Google Analytics',
        found: '65% of businesses',
        fix: 'Create GA4 property, install tracking code. Set up events: calls, forms, chat.',
        why: 'You can\'t improve what you don\'t measure. Analytics shows what marketing works.',
        plans: ['growth', 'pro'],
      },
      {
        problem: 'No Google Tag Manager',
        found: '80% of businesses',
        fix: 'Create GTM container, install snippet. Migrate all tracking codes into GTM.',
        why: 'GTM lets you add tracking without editing website code. Essential for marketing ops.',
        plans: ['growth', 'pro'],
      },
      {
        problem: 'No Google Ads Conversion Tracking',
        found: '90% of ad spenders',
        fix: 'Install Ads conversion tag via GTM. Set up call tracking for phone conversions.',
        why: 'No conversion tracking = 30-50% of ad spend is blind. You don\'t know what works.',
        plans: ['pro'],
      },
      {
        problem: 'No Meta (Facebook) Pixel',
        found: '75% of businesses',
        fix: 'Create Meta Pixel, install via GTM. Set up retargeting events.',
        why: 'Meta Pixel enables showing ads to people who already visited your site.',
        plans: ['growth', 'pro'],
      },
    ],
  },
  {
    id: 'gbp',
    title: 'Google Business Profile',
    icon: MapPin,
    color: 'amber',
    weight: '15% of score',
    issues: [
      {
        problem: 'Missing Photos',
        found: '60% of profiles',
        fix: 'Upload 20+ high-quality photos: logo, storefront, team, work examples.',
        why: 'Profiles with 20+ photos get 2x more views.',
        plans: ['starter', 'growth', 'pro'],
      },
      {
        problem: 'Incomplete Services & Categories',
        found: '70% of profiles',
        fix: 'List all services with pricing. Add primary + 3+ secondary categories.',
        why: 'Missing categories = invisible in those service searches.',
        plans: ['starter', 'growth', 'pro'],
      },
      {
        problem: 'Inaccurate Hours',
        found: '40% of profiles',
        fix: 'Set accurate hours including holidays. Enable popular times data.',
        why: 'Wrong hours = frustrated customers calling after closing.',
        plans: ['starter', 'growth', 'pro'],
      },
      {
        problem: 'No Q&A or Products',
        found: '85% of profiles',
        fix: 'Add pre-written Q&A answers. List products/services with descriptions.',
        why: 'Controls the narrative. Customers see professional, prepared answers.',
        plans: ['starter', 'growth', 'pro'],
      },
    ],
  },
  {
    id: 'listings',
    title: 'Directory Listings',
    icon: Layers,
    color: 'amber',
    weight: '15% of score',
    issues: [
      {
        problem: 'Inconsistent NAP Across 15+ Directories',
        found: '85% of businesses',
        fix: 'Audit and correct Google, Yelp, Facebook, Bing, Apple Maps, YellowPages, Nextdoor, Angi, HomeAdvisor, and 7+ more.',
        why: 'Inconsistent Name/Address/Phone = Google sees conflicting signals = lower local rankings.',
        plans: ['growth', 'pro'],
      },
    ],
  },
  {
    id: 'reputation',
    title: 'Reputation & Reviews',
    icon: Star,
    color: 'amber',
    weight: '15% of score',
    issues: [
      {
        problem: 'Too Few Reviews',
        found: 'Average: 12 reviews',
        fix: 'Review generation system with direct links, QR codes, automated follow-up.',
        why: 'Businesses with 50+ reviews get 3x more calls.',
        plans: ['starter', 'growth', 'pro'],
      },
      {
        problem: 'Negative Reviews Unanswered',
        found: '90% with negatives',
        fix: 'AI Review Responder generates professional resolution responses within 24 hours.',
        why: '30% of customers update their review after a good response. Unaddressed negatives cost you customers.',
        plans: ['starter', 'growth', 'pro'],
      },
    ],
  },
];

const planColors = {
  starter: { border: 'border-teal-500/30', bg: 'bg-teal-500/10', text: 'text-teal-400', glow: 'teal-glow' },
  growth: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'amber-glow' },
  pro: { border: 'border-rose-500/30', bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'rose-glow' },
};

export default function FixGuidePage() {
  return (
    <div className="pt-24 pb-16">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-4">
            What We Fix
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            See What Your Audit <span className="gradient-text">Actually Means</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Our free audit checks <strong className="text-white">5 categories</strong> with <strong className="text-white">12+ specific issues</strong>.
            Here is exactly what we find and exactly how we fix each one.
          </p>
        </FadeIn>

        {/* Average Score Card */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Average Score Across Texas Service Businesses</p>
                <p className="text-3xl font-bold text-white">35% <span className="text-base font-normal text-slate-500">out of 100%</span></p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Most businesses are leaving <strong className="text-white">50-80% of their online potential</strong> on the table.
              The highest we have seen is 56%. Even a score of 50%+ means significant room for improvement.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Issue Categories */}
      {issueCategories.map((category) => (
        <section key={category.id} id={category.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
          <FadeIn className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-xl bg-${category.color}-500/10 flex items-center justify-center`}>
                <category.icon className={`w-5 h-5 text-${category.color}-400`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                <p className="text-xs text-slate-500">Worth ~{category.weight} of your total audit score</p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {category.issues.map((issue) => (
              <FadeIn key={issue.problem}>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-semibold mb-1">{issue.problem}</h3>
                      <p className="text-xs text-slate-500">Found in {issue.found}</p>
                    </div>
                    <div className="flex gap-1.5">
                      {(['starter', 'growth', 'pro'] as const).map((plan) => {
                        const included = issue.plans.includes(plan);
                        const colors = planColors[plan];
                        return (
                          <span
                            key={plan}
                            className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${
                              included
                                ? `${colors.border} ${colors.bg} ${colors.text}`
                                : 'border-white/[0.05] text-slate-600 bg-white/[0.02]'
                            }`}
                          >
                            {plan}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">The Fix</p>
                      <p className="text-sm text-slate-300">{issue.fix}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Why It Matters</p>
                      <p className="text-sm text-slate-300">{issue.why}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      ))}

      {/* Plan Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Which Plan Fixes What?</h2>
          <p className="text-slate-400">Every issue maps to a specific plan level. No upsells — just the right fix for your business.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '$297',
              desc: 'Fix your reputation foundation. Get more reviews, respond to everything, optimize your Google profile.',
              color: 'teal',
              features: ['Review reply automation', 'Review generation system', 'GBP full optimization', 'SMS number setup', 'Weekly monitoring', 'Monthly report'],
              link: '/reputation-pricing',
            },
            {
              name: 'Growth',
              price: '$697',
              desc: 'Everything in Starter + directory cleanup, analytics setup, and tech stack installation.',
              color: 'amber',
              popular: true,
              features: ['Everything in Starter', 'Google Analytics + GTM setup', 'Meta Pixel installation', 'Directory cleanup (15+ platforms)', 'Competitor tracking', 'Priority support'],
              link: '/reputation-pricing',
            },
            {
              name: 'Pro',
              price: '$1,497',
              desc: 'Full-service partnership. Chat widget, ad tracking, AI phone agent, custom landing page.',
              color: 'rose',
              features: ['Everything in Growth', 'Chat widget installation', 'Google Ads conversion tracking', 'AI phone agent', 'Custom landing page', 'Same-day priority support'],
              link: '/reputation-pricing',
            },
          ].map((plan) => (
            <FadeIn key={plan.name}>
              <div className={`glass-card rounded-2xl p-8 relative ${plan.popular ? 'border-amber-500/40 amber-glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-xs font-semibold text-white whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="text-sm text-slate-400 mb-6">{plan.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.color === 'teal' ? 'text-teal-400' : plan.color === 'amber' ? 'text-amber-400' : 'text-rose-400'
                      }`} />
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.link}
                  className={`block text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 amber-glow'
                      : 'border border-white/[0.1] text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  See Full Plan
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to See Your Score?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Get a free digital audit. We will tell you exactly where you stand and recommend the right fix.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
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

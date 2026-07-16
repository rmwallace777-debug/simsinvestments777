import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { ArrowRight, Target, Search, Mail, Phone, MessageSquare, Star, ThumbsUp, TrendingUp, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'B2B Lead Generation and Google Review Management services for Texas businesses. Data-driven, proven results starting at $297/month.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Two powerful services designed to work in tandem. Fill your pipeline with qualified B2B leads while building a reputation that makes closing deals effortless.
          </p>
        </FadeIn>
      </section>

      {/* Lead Generation Service */}
      <section id="lead-generation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-4">
              Service 01
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              B2B Lead Generation
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Stop wasting time on cold calls that go nowhere. Our AI-powered lead generation system identifies, qualifies, and engages high-value B2B prospects in your target market — delivering a steady stream of sales-ready meetings.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: Search, title: 'AI Prospect Discovery', desc: 'We use AI to scan thousands of data points and identify businesses that match your ideal customer profile.' },
                { icon: Mail, title: 'Multi-Channel Outreach', desc: 'Personalized email sequences, LinkedIn engagement, and follow-up calls — automated and optimized for response rates.' },
                { icon: Phone, title: 'Lead Qualification', desc: 'Every lead is vetted through our 3-point qualification process before it ever reaches your inbox.' },
                { icon: TrendingUp, title: 'Pipeline Analytics', desc: 'Weekly reports with pipeline value, conversion rates, and actionable recommendations to improve performance.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
            >
              Start Generating Leads
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="glass-card rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-navy-800/50 rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Monthly Qualified Leads</p>
                    <p className="text-2xl font-bold text-white">40-80</p>
                  </div>
                  <Target className="w-8 h-8 text-teal-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-navy-800/50 rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Avg. Response Rate</p>
                    <p className="text-2xl font-bold text-white">28%</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-teal-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-navy-800/50 rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Avg. Deal Size</p>
                    <p className="text-2xl font-bold text-white">$2,400</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-teal-400" />
                </div>
              </div>
              <div className="mt-6 p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                <p className="text-sm text-teal-400 font-medium">
                  Starting at <span className="font-bold">$297/month</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Diagram */}
      <section className="py-16 border-y border-white/[0.06] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-slate-400">Our proven 4-step process delivers consistent results.</p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn your business, target market, and ideal customer profile in depth.' },
              { step: '02', title: 'Strategy', desc: 'We build a custom outreach playbook tailored to your industry and goals.' },
              { step: '03', title: 'Execution', desc: 'Our team runs multi-channel campaigns while you focus on closing deals.' },
              { step: '04', title: 'Optimize', desc: 'We analyze results weekly and tweak strategy to maximize performance.' },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-400 font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Management Service */}
      <section id="review-management" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="glass-card rounded-2xl p-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-navy-800/50 rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Average Rating Increase</p>
                    <p className="text-2xl font-bold text-white">+0.8 ★</p>
                  </div>
                  <Star className="w-8 h-8 text-amber-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-navy-800/50 rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">New Reviews Per Month</p>
                    <p className="text-2xl font-bold text-white">15-30</p>
                  </div>
                  <ThumbsUp className="w-8 h-8 text-amber-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-navy-800/50 rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Click-Through Lift</p>
                    <p className="text-2xl font-bold text-white">+45%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-amber-400" />
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <p className="text-sm text-amber-400 font-medium">
                  Starting at <span className="font-bold">$297/month</span>
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-4">
                Service 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Google Review Management
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Your Google reviews are often the first thing potential customers see. We help you build a steady stream of authentic 5-star reviews that boost your local SEO, build trust, and outshine competitors.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Star, title: 'Review Generation Campaigns', desc: 'Automated, personalized review requests sent at the perfect moment — right after a positive customer interaction.' },
                  { icon: Shield, title: 'Review Response Management', desc: 'We craft professional responses to every review — positive ones get amplified, negative ones get resolved.' },
                  { icon: ThumbsUp, title: 'Competitor Monitoring', desc: 'Track competitor review trends and identify opportunities to differentiate your business.' },
                  { icon: TrendingUp, title: 'Local SEO Boost', desc: 'More positive reviews = higher Google Maps ranking = more organic leads. The math is simple.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all"
              >
                Boost Your Reputation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Anchor */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Not Sure Which Plan Fits?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Every business is different. View our pricing page for detailed plan comparisons, or grab a free audit and let us recommend the perfect setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.05] transition-all duration-200"
              >
                Free Pipeline Audit
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

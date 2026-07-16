import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { ArrowRight, TrendingUp, Star, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-navy-950 to-navy-950 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
                <Zap className="w-3 h-3" />
                Trusted by 50+ Texas Businesses
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Stop Chasing Leads.{' '}
                <span className="gradient-text">Let Them Come to You.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
                We help Texas service businesses generate a steady stream of qualified B2B leads and build a reputation that makes customers choose you every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
                >
                  Get Your Free Pipeline Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.05] transition-all duration-200"
                >
                  See How It Works
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-navy-950 flex items-center justify-center text-[10px] text-white font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-navy-950 flex items-center justify-center text-[10px] text-white font-bold">
                    +12
                  </div>
                </div>
                <div className="text-sm text-slate-400">
                  <span className="text-white font-semibold">50+</span> businesses trust us
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-sm text-slate-400 ml-1">4.9/5</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="right">
              <div className="relative">
                {/* Dashboard mockup */}
                <div className="glass-card rounded-2xl p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-slate-500 ml-2">Pipeline Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-navy-800/50 rounded-lg">
                      <div>
                        <p className="text-sm text-slate-400">Monthly Leads</p>
                        <p className="text-2xl font-bold text-white">247</p>
                      </div>
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        +32%
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-navy-800/50 rounded-lg">
                      <div>
                        <p className="text-sm text-slate-400">Conversion Rate</p>
                        <p className="text-2xl font-bold text-white">18.4%</p>
                      </div>
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        +5.2%
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-navy-800/50 rounded-lg">
                      <div>
                        <p className="text-sm text-slate-400">Avg. Rating</p>
                        <p className="text-2xl font-bold text-white">4.9 ★</p>
                      </div>
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        +0.3
                      </div>
                    </div>
                    <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-lg">
                      <p className="text-sm text-teal-400 font-medium">New: 12 leads from pipeline audit this week</p>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-[60px]" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400/10 rounded-full blur-[80px]" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="gradient-text">Grow</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Two powerful services designed to work together — fill your pipeline and build a reputation that converts.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'B2B Lead Generation',
                desc: 'We identify and qualify high-value B2B prospects in your area using AI-powered targeting and multi-channel outreach.',
                features: ['AI-powered prospect discovery', 'Multi-channel outreach (email, LinkedIn, calls)', 'Verified contact data', 'Weekly pipeline reports'],
              },
              {
                icon: Star,
                title: 'Google Review Management',
                desc: 'Turn satisfied customers into a steady stream of 5-star reviews that boost your local SEO and social proof.',
                features: ['Review generation campaigns', 'Smart review request timing', 'Response management', 'Competitor monitoring'],
              },
              {
                icon: BarChart3,
                title: 'Analytics & Reporting',
                desc: 'Know exactly what is working with transparent dashboards and weekly performance reports delivered to your inbox.',
                features: ['Real-time pipeline tracking', 'Conversion analytics', 'ROI reporting', 'Monthly strategy calls'],
              },
            ].map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="glass-card rounded-2xl p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-16 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">Trusted by businesses across Texas</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {['Plumbing Pro TX', 'Dallas Dental Group', 'Houston HVAC Co', 'Austin Roofing'].map((name) => (
              <div key={name} className="text-slate-400 text-lg font-semibold tracking-tight">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Sims Investment transformed our lead generation. We went from 10 leads a month to over 60 in just 90 days. The ROI has been incredible.',
                author: 'Mike Thompson',
                role: 'Owner, Thompson Plumbing Solutions',
                rating: 5,
              },
              {
                quote: 'Our Google reviews went from 23 to 87 in 4 months. The difference in customer trust is night and day. Best investment we have made.',
                author: 'Sarah Chen',
                role: 'CEO, Chen Dental Group',
                rating: 5,
              },
              {
                quote: 'The free pipeline audit alone was worth it. They found gaps in our process that we had no idea existed. We signed up on the spot.',
                author: 'James Rodriguez',
                role: 'President, Rodriguez Roofing & Construction',
                rating: 5,
              },
            ].map((t) => (
              <StaggerItem key={t.author}>
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold text-sm">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{t.author}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-navy-950 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="glass-card rounded-3xl p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Fill Your Pipeline?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Start with a free pipeline audit. We will analyze your current lead generation and show you exactly where the opportunities are — no obligation.
              </p>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
              >
                Get Your Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-slate-500 mt-4">Free assessment • No obligation • 24-hour turnaround</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

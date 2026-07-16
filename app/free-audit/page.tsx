import AuditForm from '@/components/AuditForm';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { CheckCircle, TrendingUp, Users, BarChart3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Pipeline Audit',
  description: 'Get a free, no-obligation audit of your current lead generation pipeline. We will analyze your online presence and identify growth opportunities.',
};

export default function FreeAuditPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
                Free Assessment
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Get Your Free{' '}
                <span className="gradient-text">Pipeline Audit</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We will analyze your current lead generation setup, review your website, social media presence, and competitor landscape — then deliver a personalized roadmap with actionable recommendations. No strings attached.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: 'Deep-dive analysis of your current pipeline' },
                  { icon: TrendingUp, text: 'Identify 3-5 quick wins you can implement today' },
                  { icon: Users, text: 'Competitor analysis — see what your competitors are doing' },
                  { icon: BarChart3, text: 'Personalized ROI projections for your business' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-1">Start Your Free Audit</h2>
              <p className="text-sm text-slate-400 mb-6">
                Fill out the form and we will be in touch within 24 hours.
              </p>
              <AuditForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Zero Risk',
              desc: 'No commitment required. If you do not like what you see, walk away. Simple as that.',
            },
            {
              title: 'Fast Turnaround',
              desc: 'Most audits are delivered within 24-48 hours. We do not keep you waiting.',
            },
            {
              title: 'Actionable Insights',
              desc: 'Every recommendation comes with a clear implementation plan and expected impact.',
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does the audit take?', a: 'Most audits are completed within 24-48 hours after you submit your information. Complex cases may take up to 72 hours.' },
              { q: 'What do you analyze?', a: 'We review your website, Google Business Profile, social media presence, current lead generation methods, competitor landscape, and local SEO standing.' },
              { q: 'Is there any obligation?', a: 'None at all. The audit is completely free with no strings attached. If you decide to work with us, great. If not, you keep the insights.' },
              { q: 'What if I am not in Texas?', a: 'While we primarily serve Texas businesses, we can still provide valuable insights for any location. Submit your info and we will let you know.' },
            ].map((faq) => (
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
    </div>
  );
}

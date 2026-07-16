import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Target, Shield, Heart, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sims Investment Management Services, LLC — our mission, our team, and why Texas businesses trust us for lead generation and reputation management.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              We Help Texas Businesses <span className="gradient-text">Grow</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Sims Investment Management Services, LLC was founded on a simple belief: every local business deserves access to the same powerful growth tools that big corporations use.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Based in Paris, Texas, we understand the unique challenges that Texas service businesses face. We combine AI-powered technology with old-fashioned relationship-building to deliver results that matter.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                Founded 2020
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                50+ Clients
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                4.9 ★ Avg Rating
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">RW</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Robert Wallace</h3>
              <p className="text-teal-400 text-sm font-medium mb-4">Founder & CEO</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                &ldquo;I started Sims Investment Management because I saw too many great Texas businesses struggling to get found online. My mission is to level the playing field.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Target, title: 'Results First', desc: 'We are measured by the leads we generate and the reviews we earn. Everything we do is tied to measurable outcomes.' },
            { icon: Shield, title: 'Radical Transparency', desc: 'Weekly reports, open dashboards, honest communication. You will always know exactly what is happening.' },
            { icon: Heart, title: 'Local Commitment', desc: 'We are a Texas business serving Texas businesses. We understand the local market because we live in it.' },
            { icon: Award, title: 'Continuous Improvement', desc: 'The digital landscape changes fast. We invest constantly in new tools, techniques, and training to stay ahead.' },
          ].map((v) => (
            <StaggerItem key={v.title}>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="glass-card rounded-3xl p-10 lg:p-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Sims Investment Management?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'AI-Powered, Human-Delivered', desc: 'We use cutting-edge AI to identify and qualify leads, but real humans craft every message and manage every relationship.' },
                { title: 'Texas-Based, Texas-Proud', desc: 'We know the Texas market because we are part of it. No generic national playbooks — just strategies that work here.' },
                { title: 'Proven ROI', desc: 'Our average client sees a 5x+ return on their investment within the first 90 days. We do not get paid unless you get results.' },
                { title: 'Full-Service Partnership', desc: 'We are not just a vendor. We become an extension of your team — showing up, taking ownership, and driving growth together.' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

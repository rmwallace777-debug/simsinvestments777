import ReceptionistForm from '@/components/ReceptionistForm';
import CheckoutButton from '@/components/CheckoutButton';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { PhoneCall, CalendarCheck, ShieldCheck, Clock, ArrowRight, MessageSquareText, Zap, CheckCircle2, Headset } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Receptionist for Small Business — 24/7 Call Answering',
  description:
    'Never miss another call. Our AI receptionist answers in seconds, books appointments, and sends text reminders — 24/7, for one flat monthly price. Watch a free 2-minute demo.',
};

export default function ReceptionistPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
              <Zap className="w-3 h-3" />
              24/7 AI Receptionist — Now Live
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Never Miss{' '}
              <span className="gradient-text">Another Call.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
              Our AI receptionist answers every call in seconds, books appointments,
              and never puts customers on hold. See it live — free 2-minute demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
              >
                Watch It Answer Your Phone
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.05] transition-all duration-200"
              >
                See Pricing
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {[
                { icon: Clock, text: 'Answers in ~2 seconds' },
                { icon: PhoneCall, text: '24/7 coverage' },
                { icon: ShieldCheck, text: 'No contracts' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-slate-400">
                  <item.icon className="w-4 h-4 text-teal-400" />
                  {item.text}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="right">
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-500 ml-2">Incoming Call — 9:47 PM</span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-navy-800/50 rounded-lg border border-teal-500/20">
                    <p className="text-xs text-slate-500 mb-2">AI RECEPTIONIST</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      &quot;Thank you for calling Acme Plumbing! This is Ava, the virtual receptionist.
                      Are you calling about a repair, a new install, or maintenance today?&quot;
                    </p>
                  </div>
                  <div className="p-4 bg-navy-800/50 rounded-lg">
                    <p className="text-xs text-slate-500 mb-2">CUSTOMER</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      &quot;My water heater is leaking — I need someone out tomorrow.&quot;
                    </p>
                  </div>
                  <div className="p-4 bg-teal-500/10 border border-teal-500/20 rounded-lg">
                    <p className="text-xs text-teal-400 font-medium mb-2">AI RECEPTIONIST</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      &quot;I can get a technician out tomorrow between 8 and 11 AM. I&apos;ll text you a
                      confirmation and the tech will text when they&apos;re on the way. You&apos;re booked!&quot;
                    </p>
                  </div>
                  <div className="p-3 bg-navy-800/50 rounded-lg flex items-center gap-3">
                    <MessageSquareText className="w-4 h-4 text-teal-400" />
                    <p className="text-xs text-slate-400">
                      Booked + confirmed via SMS · job saved while the owner slept
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-[60px]" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400/10 rounded-full blur-[80px]" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-white/[0.06] py-10 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: '2 sec', label: 'average answer time' },
            { value: '24/7', label: 'coverage — nights, weekends, holidays' },
            { value: '$0', label: 'setup fees · no contracts' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything a Front Desk Does, <span className="gradient-text">24/7</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No voicemail. No missed jobs. No customers hanging up and calling your competitor.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: PhoneCall,
              title: 'Answers Every Call, 24/7',
              desc: 'After hours, weekends, holidays — every call is answered in seconds. Not one lead goes to voicemail.',
            },
            {
              icon: CalendarCheck,
              title: 'Books & Confirms via SMS',
              desc: 'Schedules appointments, sends text confirmations and reminders, and follows up automatically so nobody falls through the cracks.',
            },
            {
              icon: Headset,
              title: 'Transfers & Escalates',
              desc: 'Routes callers to you when you are available, and pages your on-call tech for emergencies. You stay in control.',
            },
          ].map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="glass-card rounded-2xl p-8 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Live in <span className="gradient-text">One Day</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No new equipment. No software to learn. Works with the phone number you already have.
          </p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'We build it from your business info', desc: 'Send us your services, hours, and phone number. We build your AI receptionist to sound like your business — in about 5 minutes.' },
            { step: '02', title: 'Forward your number (or add a chat widget)', desc: 'One call-forwarding setting on your existing phone, or a chat widget on your website. That is the whole setup.' },
            { step: '03', title: 'It answers, books, and texts — you get the summary', desc: 'Every call handled, every appointment confirmed by SMS, and a clean summary of the day in your inbox.' },
          ].map((item) => (
            <StaggerItem key={item.step}>
              <div className="glass-card rounded-2xl p-8 h-full relative">
                <span className="absolute top-6 right-6 text-4xl font-bold text-teal-500/15">{item.step}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Demo form */}
      <section id="demo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hear It Answer <span className="gradient-text">YOUR Phone</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              In a 2-minute live demo, we&apos;ll show you exactly how your business would
              handle after-hours calls — and how many jobs you&apos;re missing right now.
            </p>
            <div className="space-y-4">
              {[
                'See it answer calls with YOUR business name and services',
                'Watch it book a real appointment and send an SMS confirmation',
                'Know exactly what each missed call is costing you today',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-1">Request Your 2-Minute Demo</h3>
              <p className="text-sm text-slate-400 mb-6">
                We&apos;ll text you to schedule it — usually same day.
              </p>
              <ReceptionistForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, <span className="gradient-text">Flat Pricing</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No per-minute fees. No overage charges. One flat monthly price.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <StaggerItem>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold text-white mb-1">AI Receptionist</h3>
              <p className="text-sm text-slate-400 mb-6">Voice + chat · everything a front desk does</p>
              <p className="text-4xl font-bold text-white mb-6">
                $497<span className="text-base font-normal text-slate-400">/mo</span>
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  '24/7 call answering in ~2 seconds',
                  'Appointment booking + SMS confirmations',
                  'Call transfer + on-call paging',
                  'Website chat widget',
                  'Daily call summary to your inbox',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <CheckoutButton
                planId="receptionist"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
              >
                Start Now — $497/mo
              </CheckoutButton>
              <a href="#demo" className="block text-center text-sm text-slate-400 hover:text-teal-400 mt-3">
                or see a live demo first →
              </a>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-2xl p-8 h-full border-teal-500/30">
              <div className="inline-flex px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-4">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Full System</h3>
              <p className="text-sm text-slate-400 mb-6">Receptionist + dashboard + review follow-up</p>
              <p className="text-4xl font-bold text-white mb-6">
                $997<span className="text-base font-normal text-slate-400">/mo</span>
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Everything in AI Receptionist',
                  'Call analytics dashboard & recordings',
                  'Automatic review requests after jobs',
                  'AI responses to Google reviews',
                  'Priority setup — live same day',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <CheckoutButton
                planId="receptionist-pro"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
              >
                Start Now — $997/mo
              </CheckoutButton>
              <a href="#demo" className="block text-center text-sm text-slate-400 hover:text-teal-400 mt-3">
                or see a live demo first →
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
        <p className="text-center text-sm text-slate-400 mt-6">
          No contracts. No setup fees. Cancel anytime.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Does it work with my current phone number?', a: 'Yes. You just forward your existing number to the AI receptionist (or add a chat widget to your site). No new equipment, no number change, no software to learn.' },
              { q: 'What happens if there is an emergency?', a: 'The AI recognizes emergencies and can page your on-call technician immediately, or transfer the caller straight to you. You set the rules.' },
              { q: 'What if a customer wants to talk to a real person?', a: 'The AI transfers them to you instantly when you are available. It never traps callers — it just makes sure nobody gets voicemail.' },
              { q: 'How fast is setup?', a: 'We build your AI receptionist in about 5 minutes. Most businesses are live the same day.' },
              { q: 'Can I cancel anytime?', a: 'Yes. There are no contracts and no setup fees. You can cancel with a single message.' },
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

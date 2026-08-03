import { FadeIn } from '@/components/Animations';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Request Received',
  description: 'Your AI receptionist demo request is in. We will text you to schedule your 2-minute demo.',
  robots: { index: false, follow: false },
};

export default function ReceptionistThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <FadeIn className="max-w-lg w-full text-center">
        <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-teal-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your Demo Request Is <span className="gradient-text">In</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          We&apos;ll text you within the next few hours to schedule your 2-minute demo.
          In it, you&apos;ll hear your AI receptionist answer calls and book appointments
          for your business.
        </p>
        <div className="space-y-3 text-left mb-10">
          {[
            'Keep your phone nearby — the text comes from your business number',
            'The demo takes 2 minutes. No pressure, no obligation',
            'You will see exactly how many calls you are missing right now',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </FadeIn>
    </div>
  );
}

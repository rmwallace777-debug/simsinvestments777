import Link from 'next/link';
import { FadeIn } from '@/components/Animations';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmed — Welcome!',
  description: 'Your subscription has been activated. Check your email for your receipt and next steps.',
};

export default function CheckoutSuccessPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-teal-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Welcome Aboard! 🎉
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Your subscription is confirmed.
          </p>
          <p className="text-slate-500 mb-8 text-sm">
            Check your inbox — you will receive a receipt and next steps within minutes.
            If you do not see it, check your spam folder.
          </p>

          <div className="glass-card rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-white font-semibold mb-3">What Happens Next</h3>
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 text-teal-400 text-xs font-bold">1</span>
                <span>We will run your free audit report (if not already done)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 text-teal-400 text-xs font-bold">2</span>
                <span>Our system starts monitoring your Google reviews immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 text-teal-400 text-xs font-bold">3</span>
                <span>You will receive your first reputation score report within 7 days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 text-teal-400 text-xs font-bold">4</span>
                <span>We schedule your onboarding call to review your custom strategy</span>
              </li>
            </ol>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}

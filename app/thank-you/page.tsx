import Link from 'next/link';
import { FadeIn } from '@/components/Animations';
import { CheckCircle, ArrowRight, Mail, Clock, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You — Your Free Audit Is Being Processed',
  description: 'Your free digital audit request has been received. We will email your personalized report within 24 hours.',
};

export default function ThankYouPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-teal-400" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Free Audit Is On Its Way!
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            We are analyzing your online presence and will email your personalized report shortly.
          </p>

          {/* What Happens Next */}
          <div className="glass-card rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-white font-semibold mb-4 text-center">What Happens Next</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">We Analyze Your Profile</p>
                  <p className="text-xs text-slate-400">Our system checks your GBP, reviews, directory listings, analytics, and competitors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">Check Your Inbox</p>
                  <p className="text-xs text-slate-400">Your personalized audit report with your score and fix recommendations will arrive within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">Review Your Results</p>
                  <p className="text-xs text-slate-400">See exactly where you stand and which fixes will have the biggest impact — starting at $297/mo.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mb-6">
            Did not receive the email? Check your spam folder or{' '}
            <a href="mailto:robert@simsinvestments777.com" className="text-teal-400 hover:underline">
              contact us
            </a>.
          </p>

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

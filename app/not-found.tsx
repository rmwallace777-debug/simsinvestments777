import Link from 'next/link';
import { FadeIn } from '@/components/Animations';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <FadeIn className="text-center max-w-lg">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Looks like you have wandered off the beaten path. This page does not exist, but we can help you find your way back to growing your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.05] transition-all"
          >
            Free Pipeline Audit
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}

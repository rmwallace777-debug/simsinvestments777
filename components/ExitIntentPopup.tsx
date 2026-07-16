'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 0) {
        triggered = true;
        setShow(true);
      }
    };

    // Show after 30 seconds as fallback
    const timer = setTimeout(() => {
      if (!triggered && !localStorage.getItem('exit-popup-dismissed')) {
        triggered = true;
        setShow(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem('exit-popup-dismissed', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Wait! Get 5 Free Leads</h3>
              <p className="text-sm text-slate-400">
                Enter your email and we&apos;ll send you 5 verified B2B leads in your area — completely free.
              </p>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                await fetch('/api/leads', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    businessName: formData.get('businessName'),
                    website: '',
                    city: formData.get('city'),
                    source: 'exit-intent-popup',
                  }),
                });
                form.innerHTML = '<p class="text-teal-400 text-center font-medium">Check your inbox for your free leads! 🎉</p>';
                setTimeout(dismiss, 2000);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2.5 bg-navy-800 border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2.5 bg-navy-800 border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 text-sm"
              />
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                required
                className="w-full px-4 py-2.5 bg-navy-800 border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 text-sm"
              />
              <input
                type="text"
                name="city"
                placeholder="Your City"
                required
                className="w-full px-4 py-2.5 bg-navy-800 border border-white/[0.08] rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 text-sm"
              />
              <button
                type="submit"
                className="w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
              >
                Send My Free Leads
              </button>
              <p className="text-xs text-slate-500 text-center">No spam. Unsubscribe anytime.</p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useState } from 'react';

export default function AuditForm({ source = 'free-audit' }: { source?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        website: formData.get('website'),
        city: formData.get('city'),
        source,
      }),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 glass-card rounded-2xl">
        <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h3>
        <p className="text-slate-400">
          Check your inbox — your free pipeline audit is on its way. We&apos;ll review your current lead generation setup and send personalized recommendations within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
            Full Name <span className="text-teal-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 bg-navy-800 border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
            Email Address <span className="text-teal-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@yourbusiness.com"
            className="w-full px-4 py-3 bg-navy-800 border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-1.5">
          Business Name <span className="text-teal-400">*</span>
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          required
          placeholder="Acme Plumbing LLC"
          className="w-full px-4 py-3 bg-navy-800 border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all text-sm"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-1.5">
            Website URL
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://yourbusiness.com"
            className="w-full px-4 py-3 bg-navy-800 border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all text-sm"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-1.5">
            City <span className="text-teal-400">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            placeholder="Paris, TX"
            className="w-full px-4 py-3 bg-navy-800 border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all text-sm"
          />
        </div>
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="w-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl hover:from-teal-400 hover:to-teal-500 teal-glow transition-all duration-200"
        >
          Get Your Free Pipeline Audit
        </button>
        <p className="text-xs text-slate-500 text-center mt-3">
          No spam. Your information is safe with us.
        </p>
      </div>
    </form>
  );
}

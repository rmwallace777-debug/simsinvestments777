'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BuyButtonProps {
  planId: string;
  label: string;
  popular?: boolean;
  color?: 'amber' | 'emerald' | 'teal' | 'sky';
}

const BUTTON_COLORS: Record<string, string> = {
  amber: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500',
  emerald: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500',
  teal: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-400 hover:to-teal-500',
  sky: 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-400 hover:to-sky-500',
};

export default function BuyButton({ planId, label, popular, color }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const baseClass = color
    ? BUTTON_COLORS[color]
    : popular
      ? BUTTON_COLORS.amber
      : 'border border-white/[0.1] text-slate-300 hover:bg-white/[0.05]';

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`block w-full text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 ${baseClass} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? 'Processing...' : label}
    </button>
  );
}

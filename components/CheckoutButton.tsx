'use client';

import { useState } from 'react';

export default function CheckoutButton({
  planId,
  children,
  className = '',
}: {
  planId: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

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
        alert('Checkout is temporarily unavailable — please request a demo instead.');
      }
    } catch {
      alert('Checkout is temporarily unavailable — please request a demo instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading} className={className}>
      {loading ? 'Opening checkout…' : children}
    </button>
  );
}

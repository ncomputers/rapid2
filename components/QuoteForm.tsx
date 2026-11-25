'use client';

import React, { useState } from 'react';

const field =
  'w-full px-4 py-3 rounded-lg border border-surface-line bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm';

export default function QuoteForm({ model }: { model: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.get('name'),
          phone: f.get('phone'),
          service: `Price request: ${model}`,
          message: `Product: ${model}\nQuantity: ${f.get('quantity')}`,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={submit} className="p-6 rounded-xl bg-surface-soft border border-surface-line space-y-4">
      <h2 className="text-xl font-bold text-ink">Ask Price</h2>
      <div className="space-y-1">
        <label htmlFor="quote-name" className="text-sm font-semibold text-ink">Name</label>
        <input id="quote-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div className="space-y-1">
        <label htmlFor="quote-phone" className="text-sm font-semibold text-ink">Phone</label>
        <input id="quote-phone" name="phone" type="tel" required minLength={10} autoComplete="tel" className={field} />
      </div>
      <div className="space-y-1">
        <label htmlFor="quote-quantity" className="text-sm font-semibold text-ink">Quantity</label>
        <input id="quote-quantity" name="quantity" type="number" min={1} defaultValue={1} className={field} />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Get Price'}
      </button>
      <p role="status" className="text-sm">
        {status === 'success' && <span className="text-green-700">Thank you. We will contact you with a price.</span>}
        {status === 'error' && <span className="text-red-700">Could not send. Please call +91 98285 19299.</span>}
      </p>
    </form>
  );
}

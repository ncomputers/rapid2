'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { categories, products, productSlug } from '@/lib/products';

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

export default function ProductBrowser() {
  const [query, setQuery] = useState('');
  const words = query.split(/\s+/).map(norm).filter(Boolean);
  const matches = products.filter((p) => {
    const title = categories.find((c) => c.id === p.category)!.title;
    const text = norm(`${p.brand} ${p.model} ${p.desc} ${title}`);
    return words.every((w) => text.includes(w));
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <label htmlFor="product-search" className="block text-sm font-semibold text-ink mb-1">
          Search products
        </label>
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Brand or model, e.g. FortiGate 60F"
          className="w-full max-w-xl px-4 py-3 rounded-lg border border-surface-line focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
        <p role="status" className="text-sm text-muted mt-2">
          {matches.length
            ? `${matches.length} products`
            : 'Not listed here. Contact us and we will check it for you.'}
        </p>
      </div>
      {categories.map((c) => {
        const items = matches.filter((p) => p.category === c.id);
        if (!items.length) return null;
        return (
          <section key={c.id} id={c.id} className="py-12 bg-surface-soft border-t border-surface-line scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">{c.title}</h2>
              <p className="text-sm text-muted mt-2 mb-6">{c.intro}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((p) => (
                  <li key={p.model}>
                    <Link
                      href={`/products/${productSlug(p.model)}`}
                      prefetch={false}
                      className="flex items-center justify-between gap-3 h-full px-4 py-3 rounded-lg bg-white border border-surface-line hover:border-primary transition-colors"
                    >
                      <span className="font-semibold text-ink text-sm">{p.model}</span>
                      <span className="text-xs font-bold text-primary whitespace-nowrap">Ask Price</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}

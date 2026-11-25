import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { categories, products, productSlug, type ProductCategory } from '@/lib/products';

export default function ProductGrid({ category }: { category: ProductCategory }) {
  const service = categories.find((c) => c.id === category)!.service;
  const items = products.filter((p) => p.category === category);
  const brands = [...new Set(items.map((p) => p.brand))];

  return (
    <div className="space-y-10">
      {brands.map((brand) => (
        <div key={brand}>
          <h3 className="text-lg font-bold text-ink mb-4">{brand}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items
              .filter((p) => p.brand === brand)
              .map((p) => (
                <div
                  key={p.model}
                  className="p-6 rounded-xl bg-white border border-surface-line flex flex-col justify-between gap-5"
                >
                  <div className="space-y-2">
                    {p.image && (
                      <Image
                        src={`/products/${p.image}`}
                        alt={p.model}
                        width={400}
                        height={300}
                        unoptimized
                        className="w-full h-44 object-contain mb-4"
                      />
                    )}
                    <h4 className="text-base font-bold text-ink">
                      <Link href={`/products/${productSlug(p.model)}`} prefetch={false} className="hover:text-primary">
                        {p.model}
                      </Link>
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/contact?service=${service}&product=${encodeURIComponent(p.model)}`}
                      aria-label={`Ask price for ${p.model}`}
                      rel="nofollow"
                      prefetch={false}
                      className="px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Ask Price
                    </Link>
                    <a
                      href={`https://wa.me/919828519299?text=${encodeURIComponent(`Hello Rapid Corp, please share the price of ${p.model}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Message us about ${p.model}`}
                      className="px-4 py-2.5 rounded-lg border border-surface-line text-ink text-sm font-semibold hover:bg-surface-soft transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
      <p className="text-xs text-muted">
        Brand and product names belong to their respective owners. Images are for reference.
        Availability and specifications are confirmed in your quotation.
      </p>
    </div>
  );
}

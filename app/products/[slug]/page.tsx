import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MessageCircle, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import QuoteForm from '@/components/QuoteForm';
import { buyingNotes, categories, products, productSlug } from '@/lib/products';
import { SITE_URL } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: productSlug(p.model) }));
}

type Props = { params: Promise<{ slug: string }> };

const find = (slug: string) => products.find((p) => productSlug(p.model) === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = find(slug);
  if (!p) return {};
  const title = `${p.model} Price in Udaipur`;
  const description = `Ask for the ${p.model} price in Udaipur. ${p.desc} Supply and support from Rapid Corp.`;
  const url = `${SITE_URL}/products/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ['/og-image.png'] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = find(slug);
  if (!p) notFound();
  const category = categories.find((c) => c.id === p.category)!;
  const others = products.filter((x) => x.category === p.category && x.model !== p.model);
  const related = [...others.filter((x) => x.brand === p.brand), ...others.filter((x) => x.brand !== p.brand)].slice(0, 9);
  const crumbs = [
    { name: 'Home', item: SITE_URL },
    { name: 'Products', item: `${SITE_URL}/products` },
    { name: p.model, item: `${SITE_URL}/products/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c })),
        }}
      />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: p.model }]} />
      <section className="py-10 sm:py-14 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">
                {p.brand} · {category.title}
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">{p.model} Price in Udaipur</h1>
              <p className="text-base sm:text-lg text-muted leading-relaxed">{p.desc}</p>
            </div>
            {p.image && (
              <Image
                src={`/products/${p.image}`}
                alt={p.model}
                width={600}
                height={450}
                unoptimized
                className="w-full max-w-lg h-72 object-contain"
              />
            )}
            <div>
              <h2 className="text-xl font-bold text-ink mb-3">Share this for an accurate price</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted">
                {buyingNotes[p.category].map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-ink">Supply and support</h2>
              <p className="text-muted leading-relaxed">
                We can quote {p.model} on its own or with setup and maintenance. If another model suits you better or
                this one is not available, we will suggest an alternative.{' '}
                <Link href={`/services/${category.service}`} className="text-primary font-semibold hover:underline">
                  See our related service
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <QuoteForm model={p.model} />
            <a
              href={`https://wa.me/919828519299?text=${encodeURIComponent(`Hello Rapid Corp, please share the price of ${p.model}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 rounded-lg border border-surface-line text-ink font-semibold text-sm hover:bg-surface-soft transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
            <a
              href="tel:+919828519299"
              className="w-full px-6 py-3 rounded-lg border border-surface-line text-ink font-semibold text-sm hover:bg-surface-soft transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> +91 98285 19299
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-surface-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-ink mb-6">Similar products</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r) => (
              <li key={r.model}>
                <Link
                  href={`/products/${productSlug(r.model)}`}
                  prefetch={false}
                  className="block h-full p-5 rounded-xl bg-white border border-surface-line hover:border-primary transition-colors"
                >
                  <span className="block font-bold text-ink">{r.model}</span>
                  <span className="block text-sm text-muted mt-1">{r.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted mt-8">
            Brand and product names belong to their respective owners. Availability and specifications are confirmed in
            your quotation.
          </p>
        </div>
      </section>
    </>
  );
}

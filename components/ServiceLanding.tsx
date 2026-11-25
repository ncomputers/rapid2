import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductGrid from '@/components/ProductGrid';
import RelatedServices from '@/components/RelatedServices';
import type { ProductCategory } from '@/lib/products';
import { SITE_URL } from '@/lib/site';

interface ServiceLandingProps {
  slug: string;
  label: string;
  h1: string;
  intro: string;
  cta: string;
  featuresTitle: string;
  features: { title: string; desc: string }[];
  productsTitle: string;
  category: ProductCategory;
  guideTitle: string;
  guide: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: React.ComponentProps<typeof RelatedServices>['related'];
}

export default function ServiceLanding(p: ServiceLandingProps) {
  const url = `${SITE_URL}/services/${p.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: p.label,
        description: p.intro,
        provider: { '@type': 'LocalBusiness', name: 'Rapid Corp', telephone: '+91-9828519299', url: SITE_URL },
        areaServed: { '@type': 'City', name: 'Udaipur' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: p.label, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: p.label }]} />

      <section className="bg-gradient-to-b from-primary-soft/40 to-white py-16 sm:py-20 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">{p.h1}</h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">{p.intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?service=${p.slug}`}
                className="px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <span>{p.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#products"
                className="px-6 py-3.5 rounded-lg bg-white border border-surface-line text-ink font-semibold text-sm hover:bg-surface-soft transition-colors"
              >
                See Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-10">{p.featuresTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {p.features.map((f) => (
              <div key={f.title} className="p-8 rounded-xl bg-surface-soft border border-surface-line space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-8">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-surface-soft border-b border-surface-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-10">{p.productsTitle}</h2>
          <ProductGrid category={p.category} />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-surface-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-8">{p.guideTitle}</h2>
          <dl className="space-y-6">
            {p.guide.map((g) => (
              <div key={g.title}>
                <dt className="text-base font-bold text-ink">{g.title}</dt>
                <dd className="text-sm text-muted leading-relaxed mt-1">{g.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-surface-tint border-b border-surface-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {p.faqs.map((f) => (
              <div key={f.q} className="bg-white p-6 rounded-xl border border-surface-line">
                <h3 className="text-base font-bold text-ink mb-2">{f.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentId={p.slug} related={p.related} />
    </>
  );
}

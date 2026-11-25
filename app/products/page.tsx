import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductBrowser from '@/components/ProductBrowser';
import { categories } from '@/lib/products';
import { SITE_URL } from '@/lib/site';

const title = 'Firewall, WiFi, CCTV & IT Products in Udaipur';
const description =
  'Browse firewalls, WiFi, switches, biometric machines, CCTV, laptops, servers, UPS and printers available through Rapid Corp in Udaipur. Ask for a price on any product.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: { title, description, url: `${SITE_URL}/products`, images: ['/og-image.png'] },
};

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Products' }]} />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
            IT &amp; Security Products in Udaipur
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-3xl">
            We have Dell, HP, Lenovo, Cisco, Fortinet, Sophos, Canon, Epson and more. Pick a product and use Ask Price. We reply with a quotation, including installation if you need it.
            Looking for another model? Ask us.
          </p>
          <nav aria-label="Product categories" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="px-4 py-2 rounded-full bg-primary-soft text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                {c.title}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <ProductBrowser />
    </>
  );
}

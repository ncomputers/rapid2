import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Laptop, Server, HardDrive, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Enterprise Hardware Procurement & Supply in Udaipur | Rapid Corp',
  description:
    'Sourcing and deployment of commercial laptops, desktops, 1U/2U rack servers, switches, and UPS systems from Dell, HP, Lenovo, and Cisco in Udaipur.',
  keywords: [
    'hardware procurement Udaipur',
    'commercial laptops Udaipur',
    'server procurement Rajasthan',
    'enterprise IT hardware supply',
  ],
  alternates: {
    canonical: `${SITE_URL}/services/hardware-procurement`,
  },
};

export default function HardwareProcurementPage() {
  const hardwareCategories = [
    {
      title: 'Commercial Laptops & Workstations',
      desc: 'Bulk procurement of Dell Latitude, HP ProBook/EliteBook, and Lenovo ThinkPad machines with Windows 11 Pro pre-configured for your domain.',
    },
    {
      title: 'Enterprise Rack Servers & Storage',
      desc: 'Custom-built 1U, 2U, and 4U rack servers with Intel Xeon / AMD EPYC processors, hot-swappable drives, and redundant power supplies.',
    },
    {
      title: 'Networking Switches & Routers',
      desc: 'Managed PoE+ switches, edge routers, and optical fiber patch cords from Cisco, Aruba, Ubiquiti, and TP-Link Omada.',
    },
    {
      title: 'Power Backup & Industrial UPS',
      desc: 'Online double-conversion UPS systems from APC and Eaton ensuring your server racks and cameras never reboot during voltage sags.',
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Hardware Procurement' },
        ]}
      />

      <section className="bg-gradient-to-b from-primary-soft/40 to-white py-16 sm:py-20 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-bold">
              <Laptop className="w-4 h-4" />
              <span>Direct Sourcing &amp; Deployment</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
              Enterprise IT Hardware Procurement in Udaipur
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              We source, test, configure, and install genuine commercial-grade IT equipment with full manufacturer warranties and local on-site replacement support.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?service=hardware-procurement"
                className="px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <span>Request Hardware Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-12">
            Procurement Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-soft border border-surface-line space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices
        currentId="hardware-procurement"
        related={[
          {
            id: 'it-infrastructure',
            title: 'IT Infrastructure & Structured Cabling',
            slug: '/services/it-infrastructure',
            desc: 'Turnkey cabling, Wi-Fi 6 APs, server racks, and optical fiber backbones.',
            iconName: 'network',
          },
          {
            id: 'managed-it-amc',
            title: 'Managed IT & AMC Support Contracts',
            slug: '/services/managed-it-amc',
            desc: 'Annual maintenance contracts keeping all your workstations and servers running with zero downtime.',
            iconName: 'wrench',
          },
        ]}
      />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Network, CheckCircle2, Server, Wifi, Cpu, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Enterprise IT Infrastructure & Structured Cabling in Udaipur | Rapid Corp',
  description:
    'Professional IT infrastructure design in Udaipur: Cat6 structured cabling, enterprise Wi-Fi 6, Windows/Linux server setups, optical fiber backbones, and network rack dressing.',
  keywords: [
    'IT infrastructure Udaipur',
    'structured cabling Udaipur',
    'server setup Rajasthan',
    'enterprise Wi-Fi installation',
    'network rack dressing',
    'LAN WAN deployment',
  ],
  alternates: {
    canonical: 'https://rapidcorp.in/services/it-infrastructure',
  },
  openGraph: {
    title: 'Enterprise IT Infrastructure & Structured Cabling in Udaipur · Rapid Corp',
    description:
      'Turnkey enterprise networking, server installation, and structured cabling for corporate offices, hotels, and manufacturing plants in Rajasthan.',
    url: 'https://rapidcorp.in/services/it-infrastructure',
    images: ['/og-image.png'],
  },
};

export default function ITInfrastructurePage() {
  const features = [
    {
      title: 'End-to-End Structured Cabling',
      desc: 'High-grade Cat6/Cat6A and single/multi-mode optical fiber cabling. Includes fluked certification, numbered port labeling, and clean server rack termination.',
    },
    {
      title: 'Enterprise Mesh Wi-Fi 6',
      desc: 'Seamless zero-handoff Wi-Fi roaming across sprawling properties, hotels, and corporate campuses with captive portal authentication and guest isolation.',
    },
    {
      title: 'Windows & Linux Server Deployment',
      desc: 'Installation and hardening of Active Directory Domain Controllers, DNS/DHCP servers, file sharing clusters, and virtualization with VMware or Proxmox.',
    },
    {
      title: 'VLAN Segmentation & Switching',
      desc: 'Managed Layer-2 and Layer-3 switch configurations to separate VoIP traffic, CCTV streams, and corporate databases for peak security and bandwidth.',
    },
  ];

  const faqs = [
    {
      q: 'Do you provide cable certification reports?',
      a: 'Yes. Every structured cabling installation is tested with certified cable analyzers, and clients receive complete port-by-port documentation and labeling diagrams.',
    },
    {
      q: 'Can you migrate our messy existing server racks without extended downtime?',
      a: 'Yes. We specialize in scheduled after-hours rack re-dressing, wire tracing, and switch replacements during designated maintenance windows.',
    },
    {
      q: 'What hardware brands do you configure and deploy?',
      a: 'As an independent multi-brand systems integrator, we deploy, configure, and maintain hardware from industry leaders including Cisco, Ubiquiti UniFi, TP-Link Omada, Dell PowerEdge, and HP ProLiant — procuring genuine units through authorized national distribution channels with official manufacturer warranties.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://rapidcorp.in/services/it-infrastructure#service',
        name: 'Enterprise IT Infrastructure & Structured Cabling',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Rapid Corp',
          telephone: '+91-9828519299',
          url: 'https://rapidcorp.in',
        },
        areaServed: {
          '@type': 'City',
          name: 'Udaipur',
        },
        description:
          'Turnkey enterprise networking, server installation, optical fiber backbones, and structured cabling in Udaipur, Rajasthan.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rapidcorp.in',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://rapidcorp.in/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'IT Infrastructure',
            item: 'https://rapidcorp.in/services/it-infrastructure',
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: 'IT Infrastructure & Cabling' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-soft/40 to-white py-16 sm:py-20 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-bold">
              <Network className="w-4 h-4" />
              <span>Core Enterprise Service</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
              Enterprise IT Infrastructure &amp; Structured Cabling in Udaipur
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              We engineer dependable network backbones, organize server racks, and deploy high-speed Wi-Fi so your organization operates with zero connectivity bottlenecks.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?service=it-infrastructure"
                className="px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <span>Schedule a Site Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919828519299"
                className="px-6 py-3.5 rounded-lg bg-white border border-surface-line text-ink font-semibold text-sm hover:bg-surface-soft transition-colors"
              >
                Direct Call: +91 98285 19299
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-12">
            Technical Capabilities &amp; Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-soft border border-surface-line space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-ink">{feat.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-8">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-surface-tint border-b border-surface-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-surface-line">
                <h3 className="text-base font-bold text-ink mb-2">{faq.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        currentId="it-infrastructure"
        related={[
          {
            id: 'hardware-procurement',
            title: 'Enterprise Hardware Procurement',
            slug: '/services/hardware-procurement',
            desc: 'Dell, HP, and Cisco commercial desktops, rack servers, and managed PoE+ switches sourced with official warranties.',
            iconName: 'laptop',
          },
          {
            id: 'managed-it-amc',
            title: 'Managed IT & AMC Support Contracts',
            slug: '/services/managed-it-amc',
            desc: 'Proactive preventative visits, remote helpdesk, and guaranteed 2-hour on-site dispatch across Udaipur.',
            iconName: 'wrench',
          },
        ]}
      />
    </>
  );
}

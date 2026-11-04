import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, Video, CheckCircle2, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Commercial CCTV Installation & Security Solutions in Udaipur | Rapid Corp',
  description:
    'High-definition IP CCTV camera installation, AI motion analytics, perimeter surveillance, and biometric access control systems for enterprises and hotels in Udaipur.',
  keywords: [
    'CCTV installation Udaipur',
    'commercial security cameras Udaipur',
    'biometric access control Rajasthan',
    'NVR setup',
    'AI surveillance system',
    'perimeter security Udaipur',
  ],
  alternates: {
    canonical: 'https://rapidcorp.in/services/cctv-surveillance',
  },
  openGraph: {
    title: 'Commercial CCTV Installation & Security Solutions in Udaipur · Rapid Corp',
    description:
      'Professional enterprise CCTV camera installation, biometric attendance systems, and 24/7 video security monitoring in Udaipur.',
    url: 'https://rapidcorp.in/services/cctv-surveillance',
    images: ['/og-image.png'],
  },
};

export default function CCTVSurveillancePage() {
  const capabilities = [
    {
      title: 'Commercial IP Surveillance Cameras',
      desc: 'High-definition 4K and 5MP motorized varifocal cameras with color night vision, wide dynamic range (WDR), and vandal-resistant IK10 enclosures.',
    },
    {
      title: 'Centralized NVR & Redundant Storage',
      desc: 'High-throughput Network Video Recorders configured with enterprise RAID 5/6 hard drives for 30 to 90 days of continuous recording retention.',
    },
    {
      title: 'Biometric Access Control & Attendance',
      desc: 'Facial recognition, fingerprint scanners, and RFID card readers seamlessly integrated with HR payroll software and automated electromagnetic door locks.',
    },
    {
      title: 'AI Smart Analytics & Perimeter Alarms',
      desc: 'Line-crossing detection, intrusion zone alerts, vehicle license plate recognition (ANPR), and instant push notifications to mobile devices.',
    },
  ];

  const faqs = [
    {
      q: 'Can I view the camera feeds remotely from my mobile phone?',
      a: 'Yes. We set up encrypted mobile access and PC client applications with secure P2P and DDNS so authorized executives can view live and recorded feeds anywhere.',
    },
    {
      q: 'Do you offer annual maintenance contracts (AMC) for existing camera setups?',
      a: 'Yes. We inspect, repair, and maintain third-party CCTV setups, replacing damaged baluns, testing power supplies, and adjusting angles.',
    },
    {
      q: 'Which camera brands do you supply, install and service?',
      a: 'We are an independent multi-brand security systems integrator. We source, install, and service genuine commercial surveillance hardware from Hikvision, CP PLUS, Dahua, Matrix Comsec, and Honeywell — backed by official manufacturer warranties and authorized national distribution.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://rapidcorp.in/services/cctv-surveillance#service',
        name: 'Commercial CCTV Installation & Electronic Security',
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
          'Turnkey commercial CCTV installation, biometric access control, and video surveillance systems in Udaipur, Rajasthan.',
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
            name: 'CCTV Surveillance',
            item: 'https://rapidcorp.in/services/cctv-surveillance',
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
          { label: 'CCTV Surveillance & Biometrics' },
        ]}
      />

      <section className="bg-gradient-to-b from-primary-soft/40 to-white py-16 sm:py-20 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-bold">
              <Shield className="w-4 h-4" />
              <span>Security Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
              Commercial CCTV Installation &amp; Access Control in Udaipur
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Protect your business premises, inventory, and staff with high-definition IP camera networks, AI perimeter detection, and smart biometric access.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?service=cctv-surveillance"
                className="px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <span>Request Security Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-12">
            Surveillance &amp; Security Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-soft border border-surface-line space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-ink">{cap.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-8">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <RelatedServices
        currentId="cctv-surveillance"
        related={[
          {
            id: 'managed-it-amc',
            title: 'Managed IT & CCTV AMC Contracts',
            slug: '/services/managed-it-amc',
            desc: 'Scheduled preventative maintenance, quarterly camera lens cleaning, and 2-hour on-site dispatch.',
            iconName: 'wrench',
          },
          {
            id: 'advanced-solutions',
            title: 'AI Video Analytics & Automation',
            slug: '/services/advanced-solutions',
            desc: 'Computer-vision PPE helmet detection, retail heatmaps, and instant WhatsApp security event alerts.',
            iconName: 'cpu',
          },
        ]}
      />
    </>
  );
}

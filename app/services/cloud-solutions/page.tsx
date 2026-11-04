import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cloud, Database, HardDrive, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'Cloud Migrations & Data Backup Solutions in Udaipur | Rapid Corp',
  description:
    'Seamless corporate email migrations to Google Workspace & Microsoft 365, on-premise NAS storage setup, and automated offsite disaster recovery in Udaipur.',
  keywords: [
    'Google Workspace migration Udaipur',
    'Microsoft 365 deployment Rajasthan',
    'NAS storage setup Udaipur',
    'cloud disaster recovery',
  ],
  alternates: {
    canonical: 'https://rapidcorp.in/services/cloud-solutions',
  },
};

export default function CloudSolutionsPage() {
  const points = [
    {
      title: 'Google Workspace & Microsoft 365 Deployment',
      desc: 'Expert migration of corporate domains, MX records, legacy IMAP/POP3 inboxes, and calendar integration with zero lost emails.',
    },
    {
      title: 'Centralized NAS Storage Servers',
      desc: 'Synology & QNAP network storage deployment with RAID redundancy, user permission tiers, and encrypted internal file sharing.',
    },
    {
      title: 'Automated Cloud Disaster Recovery',
      desc: 'Immutable, versioned cloud backups protecting your accounting databases, Tally data, and design files from ransomware corruption.',
    },
    {
      title: 'Secure Remote Work VPNs',
      desc: 'Site-to-site and client-to-site encrypted VPN tunnels allowing branch offices and remote directors to securely access internal resources.',
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Cloud & Data Backup' },
        ]}
      />

      <section className="bg-gradient-to-b from-primary-soft/40 to-white py-16 sm:py-20 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-bold">
              <Cloud className="w-4 h-4" />
              <span>Cloud &amp; Storage Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
              Cloud Migrations &amp; Data Backup Solutions in Udaipur
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Transition your business to reliable cloud productivity suites while keeping mission-critical financial and operational data backed up and ransomware-proof.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?service=cloud-solutions"
                className="px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <span>Request Cloud Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-12">
            Storage &amp; Cloud Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {points.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-soft border border-surface-line space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-8">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices
        currentId="cloud-solutions"
        related={[
          {
            id: 'it-infrastructure',
            title: 'Enterprise IT Infrastructure & Cabling',
            slug: '/services/it-infrastructure',
            desc: 'High-speed local networking, fiber backbones, and server rack installations.',
            iconName: 'network',
          },
          {
            id: 'hardware-procurement',
            title: 'Hardware Procurement & Supply',
            slug: '/services/hardware-procurement',
            desc: 'Dell, HP, and Lenovo commercial laptops, desktops, and enterprise storage racks.',
            iconName: 'laptop',
          },
        ]}
      />
    </>
  );
}

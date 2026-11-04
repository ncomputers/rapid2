import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Clock, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Annual Maintenance Contracts (AMC) & Managed IT Services in Udaipur | Rapid Corp',
  description:
    'SLA-backed IT AMC contracts in Udaipur: 24/7 network monitoring, preventative hardware maintenance, guaranteed on-site engineer dispatches, and emergency troubleshooting.',
  keywords: [
    'IT AMC Udaipur',
    'Annual Maintenance Contract Rajasthan',
    'managed IT support Udaipur',
    'computer AMC services',
    'server maintenance Udaipur',
  ],
  alternates: {
    canonical: 'https://rapidcorp.in/services/managed-it-amc',
  },
};

export default function ManagedITAMCPage() {
  const amcTiers = [
    {
      title: 'Multi-Vendor Hardware Support',
      desc: 'We support mixed IT and CCTV ecosystems across all major equipment brands (Cisco, Hikvision, Dell, HP) without requiring you to replace functioning hardware.',
    },
    {
      title: 'Preventative Scheduled Maintenance',
      desc: 'Regular scheduled monthly visits to inspect server health, clean computer dust filters, verify backup integrity, and update operating system patches.',
    },
    {
      title: 'Guaranteed Emergency On-Site Response',
      desc: 'Under 2-hour on-site dispatch across Udaipur industrial hubs (Sukher, Madri, Nokha, Gudli, Goverdhan Vilas) for critical outages, server crashes, or switch failures.',
    },
    {
      title: 'Remote Helpdesk & Ticket Tracking',
      desc: 'Instant remote desktop assistance for staff issues, email setup, printer sharing, and firewall rule adjustments.',
    },
    {
      title: 'Asset Inventory & Health Audits',
      desc: 'Comprehensive tracking of all corporate IT assets, warranty expiration alerts, and quarterly hardware performance reports.',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft/40 to-white py-16 sm:py-20 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-bold">
              <Wrench className="w-4 h-4" />
              <span>Dedicated Support Contracts</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
              Annual Maintenance Contracts (AMC) &amp; Managed IT in Udaipur
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Eliminate unexpected downtime with our proactive maintenance plans, guaranteed engineer SLAs, and dedicated helpdesk support.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <span>Get Customized AMC Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-12">
            What Our IT AMC Support Covers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amcTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-soft border border-surface-line space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-ink">{tier.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-8">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

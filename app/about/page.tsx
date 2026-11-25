import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, CheckCircle, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Rapid Corp — Independent IT Partner in Udaipur, Rajasthan',
  description:
    'Founded in 2016 by Manish Patel, Rapid Corp is an independent multi-brand IT infrastructure and electronic security systems integrator with a 13-person team in Udaipur.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  const stats = [
    { value: '2016', label: 'Year Established' },
    { value: '13', label: 'In-House Engineers' },
    { value: '500+', label: 'Deployments Across Rajasthan' },
    { value: '99.9%', label: 'Guaranteed Network Uptime' },
  ];

  const pillars = [
    {
      title: 'Independent Multi-Brand Integrator',
      desc: 'We are an independent engineering firm not tied to single-brand sales targets. We objectively design and deploy the best combination of hardware (Cisco, Ubiquiti, Hikvision, Dell, HP) tailored to your operational requirements.',
    },
    {
      title: '100% Genuine Equipment Sourcing',
      desc: 'Every switch, cable roll, server, and camera is sourced directly through authorized national distribution channels (Ingram Micro, Redington, Savex) with official manufacturer warranties and GST compliance.',
    },
    {
      title: 'Direct Engineering Accountability',
      desc: 'We never outsource cabling, camera mounting, or server setups to unvetted subcontractors. Our own 13-person full-time team owns every cable run from audit to termination.',
    },
    {
      title: 'Rapid On-Site Response (Under 2 Hours)',
      desc: 'Based at 100ft Road Nokha in Udaipur, our field engineers arrive on-site with tools, diagnostic testers, and spare modules within 2 hours across industrial zones (Sukher, Madri, Nokha, Gudli).',
    },
    {
      title: 'Multi-Vendor AMC Support',
      desc: 'Over 85% of our installation clients transition directly into ongoing Annual Maintenance Contracts (AMC). We maintain your mixed-brand equipment without requiring you to replace functioning hardware.',
    },
  ];

  return (
    <div className="bg-white">
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Intro */}
        <div className="max-w-3xl space-y-6">
          <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-wider">
            Our Story &amp; Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
            A single-point IT partner for businesses where uptime matters.
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Rapid Corp was founded in 2016 in Udaipur by Manish Patel to solve a persistent corporate headache: having to deal with five different uncoordinated vendors for cabling, Wi-Fi, cameras, firewalls, and server maintenance.
          </p>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Today, our 13-person engineering team delivers end-to-end IT infrastructure design, deployment, and ongoing SLA maintenance for manufacturing plants, luxury hotels, schools, hospitals, and corporate headquarters across Rajasthan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-surface-soft border border-surface-line">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm font-bold text-ink">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Core Principles */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            How We Are Built Differently
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface-tint border border-surface-line space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-8">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Box */}
        <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Visit Our Udaipur Headquarters</h3>
            <p className="text-primary-soft text-sm sm:text-base max-w-xl">
              Rapid Corp · 100ft Road, Nokha, Udaipur, Rajasthan 313001. Drop in for a coffee and discuss your IT roadmap with our team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-lg bg-white text-primary font-bold text-sm shadow-lg hover:bg-surface-soft transition-colors shrink-0"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

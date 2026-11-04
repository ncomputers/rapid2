import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Factory, Hotel, Hospital, GraduationCap, Building2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Solutions — IT & Security by Sector | Rapid Corp Udaipur',
  description:
    'Tailored IT infrastructure, surveillance, and AMC support for Manufacturing plants, Hotels & Resorts, Hospitals, and Corporate Offices in Udaipur.',
  alternates: {
    canonical: 'https://rapidcorp.in/industries',
  },
};

export default function IndustriesPage() {
  const sectors = [
    {
      icon: Factory,
      name: 'Manufacturing & Industrial Facilities',
      desc: 'Marble processing units, mineral extraction plants, and automated assembly floors requiring dust-proof industrial switches, long-range optical fiber runs, and perimeter intrusion CCTV.',
    },
    {
      icon: Hotel,
      name: 'Hospitality, Heritage Resorts & Hotels',
      desc: 'Udaipur luxury hotels and resorts demanding 100% guest Wi-Fi coverage across stone walls, discreet aesthetic camera placement, and high-bandwidth conference streaming.',
    },
    {
      icon: Hospital,
      name: 'Healthcare, Hospitals & Diagnostics',
      desc: 'Strict zero-downtime medical network infrastructure, biometric restricted-room access for pharmacies/labs, and encrypted PACS imaging storage backups.',
    },
    {
      icon: GraduationCap,
      name: 'Schools, Universities & Campuses',
      desc: 'High-density classroom Wi-Fi, content filtering firewalls to prevent unauthorized browsing, and campus-wide IP surveillance covering entrances and buses.',
    },
    {
      icon: Building2,
      name: 'Corporate Offices & BFSI',
      desc: 'Clean structured cabling under modular workstation floors, VoIP telephony setup, unified threat management (UTM) firewalls, and automated employee attendance.',
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-surface-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-wider">
            Sector Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Built for Sectors Where Downtime Matters
          </h1>
          <p className="text-base sm:text-lg text-muted">
            We adapt network architecture and camera hardware to the real-world operational challenges of Rajasthan industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-surface-line shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-soft text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-ink">{sec.name}</h2>
                  <p className="text-sm text-muted leading-relaxed">{sec.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-surface-line">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    <span>Discuss Your Sector Needs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

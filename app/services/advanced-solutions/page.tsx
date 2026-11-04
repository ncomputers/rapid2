import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, Eye, Code2, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Video Analytics & Python Automation in Udaipur | Rapid Corp',
  description:
    'Custom AI computer vision CCTV analytics, PPE helmet detection, retail footfall counting, and tailored Python automation scripts in Udaipur, Rajasthan.',
  keywords: [
    'AI video analytics Udaipur',
    'computer vision CCTV',
    'PPE compliance detection',
    'people counting camera Rajasthan',
    'Python automation Udaipur',
  ],
  alternates: {
    canonical: 'https://rapidcorp.in/services/advanced-solutions',
  },
};

export default function AdvancedSolutionsPage() {
  const aiSolutions = [
    {
      title: 'Industrial PPE & Safety Detection',
      desc: 'Real-time computer vision algorithms detecting whether factory workers are wearing mandatory safety helmets, reflective jackets, and eye protection.',
    },
    {
      title: 'Automated People Counting & Heatmaps',
      desc: 'Retail and hospitality analytics measuring accurate customer footfall, peak store hours, and queue wait times using existing IP cameras.',
    },
    {
      title: 'Automated Instant WhatsApp Alerts',
      desc: 'Direct integration of security triggers, motion events, and critical sensor readings into private WhatsApp and Telegram notification groups.',
    },
    {
      title: 'Bespoke Python Data Pipelines',
      desc: 'Custom automation scripts bridging legacy ERP databases, attendance punch machines, and automated daily executive email digests.',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-primary-soft/40 to-white py-16 sm:py-20 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-bold">
              <Cpu className="w-4 h-4" />
              <span>Cutting-Edge Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
              AI Video Analytics &amp; Automation in Udaipur
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Supercharge your existing cameras with computer vision intelligence, automated compliance enforcement, and bespoke Python workflows.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <span>Discuss a Custom Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-12">
            AI Analytics &amp; Automation Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((item, idx) => (
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
    </>
  );
}

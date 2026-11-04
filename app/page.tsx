import React from 'react';
import Link from 'next/link';
import {
  Shield,
  Network,
  Wrench,
  Cloud,
  Laptop,
  Cpu,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  Users,
  Award,
} from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export default function HomePage() {
  const services = [
    {
      icon: Network,
      title: 'IT Infrastructure & Networking',
      slug: '/services/it-infrastructure',
      desc: 'Structured cabling, LAN/WAN setup, high-density Wi-Fi, and enterprise Windows & Linux server administration.',
    },
    {
      icon: Shield,
      title: 'CCTV Surveillance & Security',
      slug: '/services/cctv-surveillance',
      desc: 'Commercial IP cameras, AI motion detection, perimeter security, and biometric access control systems.',
    },
    {
      icon: Wrench,
      title: 'Managed IT & AMC Support',
      slug: '/services/managed-it-amc',
      desc: 'Guaranteed SLA response times, proactive remote monitoring, routine maintenance, and on-site field engineers.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Data Backup',
      slug: '/services/cloud-solutions',
      desc: 'Google Workspace, Microsoft 365, centralized NAS storage, and automated disaster recovery pipelines.',
    },
    {
      icon: Laptop,
      title: 'Hardware Procurement',
      slug: '/services/hardware-procurement',
      desc: 'Enterprise desktops, high-performance laptops, rack servers, managed switches, and licensed peripherals.',
    },
    {
      icon: Cpu,
      title: 'Advanced AI Solutions',
      slug: '/services/advanced-solutions',
      desc: 'Computer-vision CCTV monitoring, PPE compliance detection, people counting, and custom Python automation.',
    },
  ];

  const stats = [
    { value: '2016', label: 'Founded in Udaipur', desc: 'A decade of IT excellence' },
    { value: '13', label: 'In-House Engineers', desc: 'No outsourcing, direct accountability' },
    { value: '99.9%', label: 'Network Uptime SLA', desc: 'Backed by robust AMC support' },
    { value: '< 2 hrs', label: 'Local On-Site Response', desc: 'Field teams across Rajasthan' },
  ];

  const processSteps = [
    { step: '01', title: 'Consultation & Site Audit', desc: 'We inspect your physical premises, cable pathways, and bandwidth demands.' },
    { step: '02', title: 'Architecture & BOQ Design', desc: 'You receive a complete bill of quantities with transparent, itemized equipment costs.' },
    { step: '03', title: 'Professional Deployment', desc: 'Neat rack dressing, cable labeling, camera focusing, and firewall configuration.' },
    { step: '04', title: 'Testing & Handover', desc: 'Stress testing, failover checks, documentation handover, and staff training.' },
    { step: '05', title: '24/7 Monitoring & AMC', desc: 'Continuous health checks and guaranteed SLA response for ongoing peace of mind.' },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService', 'ITService'],
        '@id': 'https://rapidcorp.in/#organization',
        name: 'Rapid Corp',
        url: 'https://rapidcorp.in',
        logo: 'https://rapidcorp.in/og-image.png',
        image: 'https://rapidcorp.in/og-image.png',
        description:
          'Rapid Corp is an independent enterprise IT infrastructure and multi-brand security systems integrator providing networking, CCTV, firewalls, and AMC support in Udaipur, Rajasthan.',
        telephone: '+91-9828519299',
        email: 'admin@rapidcorp.in',
        priceRange: '₹₹',
        foundingDate: '2016',
        founder: {
          '@type': 'Person',
          name: 'Manish Patel',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '100ft Road, Nokha',
          addressLocality: 'Udaipur',
          addressRegion: 'Rajasthan',
          postalCode: '313001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 24.5854,
          longitude: 73.7125,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:30',
            closes: '19:00',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://rapidcorp.in/#website',
        url: 'https://rapidcorp.in',
        name: 'Rapid Corp',
        publisher: {
          '@id': 'https://rapidcorp.in/#organization',
        },
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaData} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/50 via-white to-white py-16 sm:py-24 border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs sm:text-sm font-bold border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span>Independent Multi-Brand Integrator · Udaipur, Rajasthan</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-tight">
                Reliable <span className="text-primary">IT Infrastructure &amp; Security</span> for Modern Businesses.
              </h1>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                Rapid Corp is a Udaipur-based independent IT infrastructure and electronic security systems integrator. We design, deploy, and maintain commercial networking, server clusters, CCTV surveillance, firewalls, and AI-enabled monitoring — backed by guaranteed AMC support.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-surface-line text-ink font-semibold text-sm sm:text-base hover:bg-surface-soft hover:text-primary transition-colors"
                >
                  <span>Explore All Services</span>
                </Link>
              </div>
            </div>

            {/* Right Value Box */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-line shadow-xl space-y-6">
                <h3 className="text-lg font-bold text-ink border-b border-surface-line pb-4 flex items-center justify-between">
                  <span>Why Enterprises Choose Us</span>
                  <Award className="w-5 h-5 text-primary" />
                </h3>
                <ul className="space-y-4">
                  {[
                    'Independent Multi-Brand Integrator — Objective recommendations, zero single-brand sales quotas',
                    '100% Genuine Commercial Hardware — Sourced via authorized national distribution channels with official manufacturer warranty',
                    'Prioritized Local Field Response — Under 2-hour dispatch across Udaipur industrial hubs (Sukher, Madri, Nokha, Gudli)',
                    'Comprehensive Multi-Vendor AMC — Maintenance for your existing mixed equipment without forced replacements',
                    'TIA/EIA & IP67 Standards — Fluke-tested structured cabling, labeled ports, and certified terminations',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-ink/90">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-surface-soft rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted font-medium">Need immediate on-site help?</div>
                    <div className="text-sm font-bold text-ink">+91 98285 19299</div>
                  </div>
                  <a
                    href="tel:+919828519299"
                    className="p-2.5 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
                    aria-label="Call Rapid Corp"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand & Hardware Ecosystem Showcase (Safe, Honest Multi-Brand Framing) */}
      <section className="py-8 bg-surface-soft border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left shrink-0">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">
                Multi-Brand Deployment Specialist
              </div>
              <div className="text-sm text-muted font-medium mt-0.5">
                Hardware &amp; platforms we expertly configure, deploy &amp; maintain:
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4">
              {[
                { name: 'Cisco', cat: 'Networking' },
                { name: 'Ubiquiti UniFi', cat: 'Wi-Fi & Routing' },
                { name: 'Hikvision', cat: 'CCTV & Biometrics' },
                { name: 'CP PLUS', cat: 'Surveillance' },
                { name: 'Dell Technologies', cat: 'Servers & Desktops' },
                { name: 'HP Enterprise', cat: 'Servers & Workstations' },
                { name: 'Fortinet', cat: 'Firewall & Security' },
                { name: 'Microsoft 365', cat: 'Cloud Suites' },
                { name: 'Google Workspace', cat: 'Cloud Email' },
                { name: 'Synology', cat: 'NAS Storage' },
              ].map((brand, bIdx) => (
                <div
                  key={bIdx}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-surface-line shadow-sm text-center"
                >
                  <div className="text-xs font-bold text-ink">{brand.name}</div>
                  <div className="text-[10px] text-muted">{brand.cat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-surface-soft border border-surface-line">
                <div className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm font-bold text-ink mt-1">{s.label}</div>
                <div className="text-xs text-muted mt-0.5">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-surface-tint border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-wider">
              Complete Enterprise IT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Six Core Service Pillars for Modern Infrastructure
            </h2>
            <p className="text-base text-muted">
              From the structured cabling inside your walls to the high-definition cameras guarding your perimeter — we deliver integrated solutions with single-vendor accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-surface-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-soft text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ink group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{srv.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-surface-line">
                    <Link
                      href={srv.slug}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors"
                    >
                      <span>Explore Capabilities</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-b border-surface-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Five Steps from Initial Audit to 24/7 Operations
            </h2>
            <p className="text-base text-muted">
              A transparent, engineering-led deployment process that eliminates unexpected downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface-soft border border-surface-line flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-primary/30 mb-3">{p.step}</div>
                  <h4 className="text-base font-bold text-ink mb-2">{p.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to upgrade your enterprise IT or surveillance systems?
          </h2>
          <p className="text-base sm:text-lg text-primary-soft max-w-2xl mx-auto">
            Book a complimentary physical site inspection with our senior network engineers in Udaipur. We review your cables, routers, firewalls, and cameras.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-white text-primary font-bold text-base shadow-lg hover:bg-surface-soft transition-colors"
            >
              Schedule Free Site Audit
            </Link>
            <a
              href="tel:+919828519299"
              className="px-8 py-4 rounded-lg bg-primary-dark text-white font-bold text-base border border-white/20 hover:bg-primary-dark/80 transition-colors"
            >
              Call +91 98285 19299
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

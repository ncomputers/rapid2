import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Network,
  Shield,
  Wrench,
  Cloud,
  Laptop,
  Cpu,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Enterprise IT Services & Security Solutions in Udaipur | Rapid Corp',
  description:
    'Comprehensive enterprise IT services in Udaipur: Structured Cabling, Server Deployment, Commercial CCTV, Firewall Security, Managed AMC, Cloud Migrations, and Hardware.',
  alternates: {
    canonical: 'https://rapidcorp.in/services',
  },
};

export default function ServicesPage() {
  const servicePillars = [
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure & Structured Cabling',
      icon: Network,
      desc: 'Complete enterprise local area networks (LAN), wide area networks (WAN), optical fiber backbones, and server rack installations.',
      deliverables: [
        'Cat6 / Cat6A structured cabling with patch panel dressing',
        'High-density mesh Wi-Fi solutions for offices and hotels',
        'Windows & Linux server deployment (Active Directory, DNS, DHCP)',
        'Managed core and access switch configurations with VLAN segmentation',
      ],
    },
    {
      id: 'cctv-surveillance',
      title: 'CCTV Surveillance & Access Control',
      icon: Shield,
      desc: 'High-definition IP surveillance cameras, remote NVR monitoring, perimeter intrusion detection, and biometric attendance integration.',
      deliverables: [
        '4K & 5MP motorized varifocal IP cameras with night vision',
        'Network Video Recorder (NVR) setup with RAID storage redundancy',
        'Biometric fingerprint and facial-recognition door locks',
        'Centralized control room video wall setups',
      ],
    },
    {
      id: 'managed-it-amc',
      title: 'Managed IT & Annual Maintenance Contracts (AMC)',
      icon: Wrench,
      desc: 'Proactive 24/7 IT system maintenance, scheduled preventative audits, and rapid on-site emergency engineer dispatches.',
      deliverables: [
        'Customized SLA packages (Bronze, Silver, Gold AMC plans)',
        'Guaranteed 2-hour on-site dispatch time across Udaipur',
        'Automated health checks for servers, firewalls, and routers',
        'Quarterly hardware dusting, thermal inspection, and firmware patching',
      ],
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Migrations & Data Backup',
      icon: Cloud,
      desc: 'Seamless enterprise migrations to Google Workspace, Microsoft 365, on-premise Network Attached Storage (NAS), and off-site cloud backups.',
      deliverables: [
        'Secure email migration to Google Workspace and Microsoft 365',
        'Synology & QNAP NAS deployment for centralized team storage',
        'Automated encrypted off-site cloud disaster recovery',
        'Zero-data-loss ransomware protection workflows',
      ],
    },
    {
      id: 'hardware-procurement',
      title: 'Hardware Procurement & Configuration',
      icon: Laptop,
      desc: 'Direct sourcing of business-grade laptops, workstations, rack servers, and networking accessories with manufacturer warranty.',
      deliverables: [
        'Dell, HP, and Lenovo commercial desktops and laptops',
        'Custom-configured 1U/2U rack servers with ECC memory',
        'Online UPS systems and power redundancy units',
        'Genuine software licensing (Windows Server, Antivirus, Office)',
      ],
    },
    {
      id: 'advanced-solutions',
      title: 'Advanced AI & Automation Solutions',
      icon: Cpu,
      desc: 'Custom computer-vision monitoring, PPE compliance detection, heat-mapping, people-counting, and internal Python automation.',
      deliverables: [
        'Automated helmet and safety vest detection on factory floors',
        'Retail visitor footfall and heat-map analytics',
        'Automated alert notifications via WhatsApp and Telegram bots',
        'Bespoke Python scripting for legacy system integration',
      ],
    },
  ];

  return (
    <div className="bg-surface-tint">
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-wider">
            Capabilities Overview
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Enterprise IT &amp; Security Services
          </h1>
          <p className="text-base sm:text-lg text-muted">
            Explore our six engineering pillars designed to eliminate IT friction, secure your facility, and maintain business continuity.
          </p>
        </div>

        <div className="space-y-12">
          {servicePillars.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-surface-line shadow-sm hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-ink">{srv.title}</h2>
                  <p className="text-muted leading-relaxed text-sm sm:text-base">
                    {srv.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/services/${srv.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
                    >
                      <span>View Full Service Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-surface-soft rounded-xl p-6 border border-surface-line space-y-3">
                  <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2">
                    Core Technical Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  );
}

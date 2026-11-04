import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'IT Infrastructure & Networking', href: '/services/it-infrastructure' },
    { label: 'CCTV Surveillance & Security', href: '/services/cctv-surveillance' },
    { label: 'Managed IT & AMC Support', href: '/services/managed-it-amc' },
    { label: 'Cloud & Data Backup', href: '/services/cloud-solutions' },
    { label: 'Hardware & Procurement', href: '/services/hardware-procurement' },
    { label: 'Advanced AI & Automation', href: '/services/advanced-solutions' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'All Services', href: '/services' },
    { label: 'Industries Served', href: '/industries' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-ink text-white pt-16 pb-12 border-t border-ink-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg bg-primary text-white font-extrabold text-lg flex items-center justify-center">
                R
              </span>
              <span className="font-extrabold tracking-tight text-white text-lg">
                RAPID CORP
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Udaipur-based enterprise IT infrastructure and electronic security solutions company. Founded in 2016, our 13-person engineering team designs, deploys, and maintains mission-critical systems across Rajasthan.
            </p>
            <div className="pt-2 text-xs text-accent font-medium">
              ISO-grade deployments · Comprehensive AMC Support
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white hover:underline flex items-center gap-1.5 transition-colors"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company &amp; Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Udaipur Headquarters
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>100ft Road, Nokha, Udaipur, Rajasthan 313001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+919828519299"
                  className="hover:text-white transition-colors"
                >
                  +91 98285 19299
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:admin@rapidcorp.in"
                  className="hover:text-white transition-colors"
                >
                  admin@rapidcorp.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} Rapid Corp. All rights reserved. Built in Udaipur, Rajasthan.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

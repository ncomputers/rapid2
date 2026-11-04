'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown, Network, Shield, Wrench, Cloud, Laptop, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const servicesList = [
    {
      label: 'IT Infrastructure & Cabling',
      href: '/services/it-infrastructure',
      desc: 'Structured cabling, optical fiber, rack dressing',
      icon: Network,
    },
    {
      label: 'CCTV Surveillance & Biometrics',
      href: '/services/cctv-surveillance',
      desc: '4K commercial cameras, access control, NVRs',
      icon: Shield,
    },
    {
      label: 'Managed IT & AMC Support',
      href: '/services/managed-it-amc',
      desc: '2-hour response, preventive visits, helpdesk',
      icon: Wrench,
    },
    {
      label: 'Cloud & Data Backup',
      href: '/services/cloud-solutions',
      desc: 'Google Workspace, M365, NAS storage servers',
      icon: Cloud,
    },
    {
      label: 'Hardware Procurement',
      href: '/services/hardware-procurement',
      desc: 'Commercial desktops, laptops, servers, switches',
      icon: Laptop,
    },
    {
      label: 'Advanced AI & Automation',
      href: '/services/advanced-solutions',
      desc: 'Computer vision analytics & custom Python scripts',
      icon: Cpu,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-surface-line'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-lg bg-primary text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            R
          </span>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-ink text-base sm:text-lg leading-tight">
              RAPID CORP
            </span>
            <span className="text-[10px] tracking-wider font-semibold text-muted uppercase">
              IT &amp; Security Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
              pathname === '/'
                ? 'text-primary bg-primary-soft'
                : 'text-ink/80 hover:text-primary hover:bg-surface-soft'
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <div className="flex items-center">
              <Link
                href="/services"
                className={`px-3.5 py-2 rounded-l-md text-sm font-semibold transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-primary bg-primary-soft'
                    : 'text-ink/80 hover:text-primary hover:bg-surface-soft'
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesDropdown(!servicesDropdown)}
                aria-expanded={servicesDropdown}
                aria-label="Toggle services menu"
                className={`p-2 rounded-r-md transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-primary bg-primary-soft'
                    : 'text-ink/60 hover:text-primary hover:bg-surface-soft'
                }`}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dropdown Menu */}
            {servicesDropdown && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-surface-line p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 border-b border-surface-line mb-1 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-muted uppercase tracking-wider">
                    Our 6 Core Capabilities
                  </span>
                  <Link
                    href="/services"
                    onClick={() => setServicesDropdown(false)}
                    className="text-[11px] font-bold text-primary hover:underline"
                  >
                    View All
                  </Link>
                </div>
                <div className="space-y-1">
                  {servicesList.map((srv) => {
                    const Icon = srv.icon;
                    return (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-soft transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-primary-soft text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-ink group-hover:text-primary transition-colors">
                            {srv.label}
                          </div>
                          <div className="text-[11px] text-muted line-clamp-1">{srv.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
              pathname === '/about'
                ? 'text-primary bg-primary-soft'
                : 'text-ink/80 hover:text-primary hover:bg-surface-soft'
            }`}
          >
            About
          </Link>

          <Link
            href="/industries"
            className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
              pathname === '/industries'
                ? 'text-primary bg-primary-soft'
                : 'text-ink/80 hover:text-primary hover:bg-surface-soft'
            }`}
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors ${
              pathname === '/contact'
                ? 'text-primary bg-primary-soft'
                : 'text-ink/80 hover:text-primary hover:bg-surface-soft'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-md shadow-primary/20 hover:bg-primary-dark transition-all hover:gap-2.5"
          >
            <span>Get Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg text-ink hover:bg-surface-soft transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-surface-line px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3.5 py-2.5 rounded-md text-base font-semibold ${
              pathname === '/' ? 'text-primary bg-primary-soft' : 'text-ink hover:bg-surface-soft'
            }`}
          >
            Home
          </Link>

          {/* Mobile Services Section */}
          <div className="py-1">
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={`block px-3.5 py-2.5 rounded-md text-base font-semibold ${
                pathname === '/services' ? 'text-primary bg-primary-soft' : 'text-ink hover:bg-surface-soft'
              }`}
            >
              Services Overview
            </Link>
            <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-surface-line ml-3 mt-1">
              {servicesList.map((srv) => (
                <Link
                  key={srv.href}
                  href={srv.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1.5 rounded-md text-xs font-medium text-muted hover:text-primary hover:bg-surface-soft"
                >
                  {srv.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`block px-3.5 py-2.5 rounded-md text-base font-semibold ${
              pathname === '/about' ? 'text-primary bg-primary-soft' : 'text-ink hover:bg-surface-soft'
            }`}
          >
            About
          </Link>

          <Link
            href="/industries"
            onClick={() => setIsOpen(false)}
            className={`block px-3.5 py-2.5 rounded-md text-base font-semibold ${
              pathname === '/industries' ? 'text-primary bg-primary-soft' : 'text-ink hover:bg-surface-soft'
            }`}
          >
            Industries
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-3.5 py-2.5 rounded-md text-base font-semibold ${
              pathname === '/contact' ? 'text-primary bg-primary-soft' : 'text-ink hover:bg-surface-soft'
            }`}
          >
            Contact
          </Link>

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-white font-semibold text-center shadow-md shadow-primary/20 hover:bg-primary-dark transition-colors"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

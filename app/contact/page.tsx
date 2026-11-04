'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'IT Infrastructure',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formspree.io/f/xrbqrroa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: 'IT Infrastructure',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (_) {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-surface-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Let&apos;s talk about your IT or security project.
          </h1>
          <p className="text-base sm:text-lg text-muted">
            Whether you need a full enterprise network overhaul, a commercial CCTV setup, or dependable AMC support — our engineering team in Udaipur is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-surface-line shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-ink">Headquarters &amp; Direct Lines</h2>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-ink">Office Address</div>
                    <div className="text-muted">100ft Road, Nokha, Udaipur, Rajasthan 313001, India</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-ink">Direct Telephone</div>
                    <a href="tel:+919828519299" className="text-primary font-semibold hover:underline">
                      +91 98285 19299
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-ink">Official Email</div>
                    <a href="mailto:admin@rapidcorp.in" className="text-primary font-semibold hover:underline">
                      admin@rapidcorp.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-ink">Operational Hours</div>
                    <div className="text-muted">Monday – Saturday: 9:30 AM – 7:00 PM IST</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 space-y-3">
              <div className="text-lg font-bold">Fast-Track WhatsApp Discussion</div>
              <p className="text-sm text-primary-soft">
                Need a quick quote or have an emergency outage? Message Manish Patel and our field team directly.
              </p>
              <a
                href="https://wa.me/919828519299?text=Hello%20Rapid%20Corp%2C%20I%20have%20an%20inquiry%20regarding%20IT%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2.5 rounded-lg bg-white text-primary font-bold text-sm hover:bg-surface-soft transition-colors"
              >
                Chat on WhatsApp (+91 98285 19299)
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-surface-line shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-ink">Send an Inquiry or Project Brief</h2>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Thank you for your message!</div>
                    <div>Our senior engineer will review your requirements and respond within 24 hours.</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Submission issue.</div>
                    <div>Please email us directly at admin@rapidcorp.in or call +91 98285 19299.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-ink uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-4 py-3 rounded-lg border border-surface-line bg-surface-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="company" className="text-xs font-bold text-ink uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Lakecity Textiles Pvt Ltd"
                      className="w-full px-4 py-3 rounded-lg border border-surface-line bg-surface-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-ink uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-surface-line bg-surface-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-bold text-ink uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-surface-line bg-surface-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="service" className="text-xs font-bold text-ink uppercase tracking-wider">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-line bg-surface-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                  >
                    <option value="IT Infrastructure">IT Infrastructure &amp; Networking</option>
                    <option value="CCTV Surveillance">CCTV Surveillance &amp; Biometrics</option>
                    <option value="Managed IT & AMC">Managed IT &amp; AMC Contract</option>
                    <option value="Cloud Solutions">Cloud &amp; Storage Backup</option>
                    <option value="Hardware Procurement">Hardware Procurement</option>
                    <option value="Advanced AI">Advanced AI &amp; Automation</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-ink uppercase tracking-wider">
                    Project Details &amp; Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current setup, number of users/cameras, or what challenge you're looking to solve..."
                    className="w-full px-4 py-3 rounded-lg border border-surface-line bg-surface-soft focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-all disabled:opacity-50 inline-flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

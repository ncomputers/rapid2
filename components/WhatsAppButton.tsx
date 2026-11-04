'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-white text-ink border border-surface-line shadow-lg flex items-center justify-center hover:bg-surface-soft hover:text-primary transition-all duration-200"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919828519299?text=Hello%20Rapid%20Corp%2C%20I%20would%20like%20to%20discuss%20an%20IT%20or%20security%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rapid Corp on WhatsApp"
        className="w-13 h-13 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20ba59] flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}

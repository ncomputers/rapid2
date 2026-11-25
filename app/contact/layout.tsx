import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us: IT & Security Company in Udaipur',
  description:
    'Contact Rapid Corp in Udaipur for networking, firewall, CCTV, WiFi, biometric and IT AMC prices. Call +91 98285 19299 or send an inquiry.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

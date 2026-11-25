import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_URL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rapid Corp — IT Infrastructure & Security Solutions, Udaipur',
    template: '%s | Rapid Corp',
  },
  description:
    'Rapid Corp is a Udaipur-based IT infrastructure and security solutions company. We design, deploy and maintain enterprise networking, servers, CCTV, firewalls and AI-enabled monitoring — backed by strong AMC support.',
  keywords: [
    'IT infrastructure Udaipur',
    'networking Udaipur',
    'CCTV surveillance Udaipur',
    'firewall security Rajasthan',
    'server setup',
    'IT AMC contract',
    'managed IT services',
    'Rapid Corp',
    'Manish Patel',
  ],
  authors: [{ name: 'Rapid Corp' }],
  creator: 'Rapid Corp',
  publisher: 'Rapid Corp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Rapid Corp',
    title: 'Rapid Corp — IT Infrastructure & Security Solutions, Udaipur',
    description:
      'Enterprise networking, servers, CCTV surveillance, firewalls and AMC support in Udaipur, Rajasthan. Founded 2016.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rapid Corp — IT Infrastructure and Security Solutions in Udaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapid Corp — IT Infrastructure & Security Solutions, Udaipur',
    description:
      'Enterprise networking, servers, CCTV surveillance, firewalls and AMC support in Udaipur, Rajasthan.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/og-image.png',
    apple: '/og-image.png',
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Udaipur',
    'geo.position': '24.5854;73.7125',
    ICBM: '24.5854, 73.7125',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-ink antialiased">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

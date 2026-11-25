import type { Metadata } from 'next';
import ServiceLanding from '@/components/ServiceLanding';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: "WiFi Installation in Udaipur for Offices & Hotels",
  description: "Office, hotel, school and factory WiFi installation in Udaipur. Ubiquiti UniFi, TP-Link Omada and Aruba access points with site survey and support.",
  keywords: [
  "WiFi installation Udaipur",
  "hotel WiFi Udaipur",
  "office WiFi setup Udaipur",
  "access point installation Udaipur"
],
  alternates: { canonical: `${SITE_URL}/services/wifi-solutions` },
  openGraph: {
    title: "WiFi Installation in Udaipur for Offices & Hotels",
    description: "Office, hotel, school and factory WiFi installation in Udaipur. Ubiquiti UniFi, TP-Link Omada and Aruba access points with site survey and support.",
    url: `${SITE_URL}/services/wifi-solutions`,
    images: ['/og-image.png'],
  },
};

export default function Page() {
  return (
    <ServiceLanding
      slug="wifi-solutions"
      label={"WiFi Solutions"}
      h1={"WiFi Installation for Offices & Hotels in Udaipur"}
      intro={"Fix weak signal, slow speed and dropped calls. We survey your building, place access points correctly and set up one managed WiFi network for staff and guests."}
      cta={"Book a WiFi Survey"}
      featuresTitle={"What We Do"}
      features={[
  {
    title: "Site survey",
    desc: "We check walls, floors, distance and user load to decide where access points should go."
  },
  {
    title: "Hotel and guest WiFi",
    desc: "Guest login, speed limits and separation of guest traffic from billing and office systems."
  },
  {
    title: "Roaming across the property",
    desc: "One network name with access points tuned so devices move between them smoothly."
  },
  {
    title: "Cabling and PoE switching",
    desc: "Cat6 cabling, PoE switches and labelled racks so access points need only one cable."
  }
]}
      productsTitle={"Access Points: Ask for Price"}
      category={"wifi"}
      guideTitle={"Why WiFi Is Slow and How to Fix It"}
      guide={[
  {
    title: "Too few access points",
    desc: "Thick stone walls, common in older Udaipur buildings, weaken signal. Extra well-placed access points work better than one powerful router."
  },
  {
    title: "Repeaters instead of cable",
    desc: "Wireless repeaters share airtime and reduce speed. Cabled access points avoid this."
  },
  {
    title: "Everyone on one network",
    desc: "Guests, cameras and billing systems should be separated with VLANs."
  },
  {
    title: "Channel overlap",
    desc: "Neighbouring access points on the same channel slow each other down. Channel planning fixes this."
  }
]}
      faqs={[
  {
    q: "How much does office or hotel WiFi cost in Udaipur?",
    a: "It depends on the area, number of rooms, access point model and cabling. Use Ask Price or request a survey for a quotation."
  },
  {
    q: "How many access points does my hotel need?",
    a: "It depends on wall thickness, room layout and guest count. A site survey gives a reliable number."
  },
  {
    q: "Can you improve our existing WiFi without replacing everything?",
    a: "Often, yes. Changing placement, channels or cabling may be enough, and we reuse working equipment where practical."
  },
  {
    q: "Which WiFi brands do you install?",
    a: "Ubiquiti UniFi, TP-Link Omada, Aruba Instant On and Cisco are common choices, selected by budget and building."
  }
]}
      related={[
  {
    id: "it-infrastructure",
    title: "IT Infrastructure & Cabling",
    slug: "/services/it-infrastructure",
    desc: "Structured cabling, fiber, server racks and switching.",
    iconName: "network"
  },
  {
    id: "firewall-security",
    title: "Firewall & Network Security",
    slug: "/services/firewall-security",
    desc: "Firewall supply, setup, VPN and licence renewal.",
    iconName: "shield"
  }
]}
    />
  );
}

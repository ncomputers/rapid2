import type { Metadata } from 'next';
import ServiceLanding from '@/components/ServiceLanding';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: "Firewall Dealer & Installation in Udaipur: Sophos, Fortinet",
  description: "Sophos, Fortinet, SonicWall and WatchGuard firewall supply, installation, VPN setup and licence renewal in Udaipur. Ask for a price on any model.",
  keywords: [
  "firewall dealer Udaipur",
  "Sophos firewall Udaipur",
  "Fortinet firewall Udaipur",
  "firewall installation Udaipur",
  "network security Udaipur"
],
  alternates: { canonical: `${SITE_URL}/services/firewall-security` },
  openGraph: {
    title: "Firewall Dealer & Installation in Udaipur: Sophos, Fortinet",
    description: "Sophos, Fortinet, SonicWall and WatchGuard firewall supply, installation, VPN setup and licence renewal in Udaipur. Ask for a price on any model.",
    url: `${SITE_URL}/services/firewall-security`,
    images: ['/og-image.png'],
  },
};

export default function Page() {
  return (
    <ServiceLanding
      slug="firewall-security"
      label={"Firewall & Network Security"}
      h1={"Firewall Supply & Installation in Udaipur"}
      intro={"We help you pick the right firewall, then supply, configure and support it. Choose from Sophos, Fortinet, SonicWall and WatchGuard for offices, hotels, hospitals, schools and factories."}
      cta={"Get a Firewall Quote"}
      featuresTitle={"What We Do"}
      features={[
  {
    title: "Right-size the firewall",
    desc: "We check your users, internet lines, branches and VPN needs before recommending a model."
  },
  {
    title: "Installation and policies",
    desc: "Internet failover, web and application control, guest separation and user-wise rules."
  },
  {
    title: "VPN for branches and remote staff",
    desc: "Site-to-site VPN between offices and secure access for people working from home."
  },
  {
    title: "Licence renewal and support",
    desc: "Subscription renewal, firmware updates, backups and rule changes, with AMC available."
  }
]}
      productsTitle={"Firewall Models: Ask for Price"}
      category={"firewall"}
      guideTitle={"How to Choose a Firewall"}
      guide={[
  {
    title: "Count devices, not just people",
    desc: "Phones, cameras, printers and guest devices all use the firewall. Include them when sizing."
  },
  {
    title: "Compare speed with security switched on",
    desc: "Basic firewall speed is always higher than speed with threat protection and HTTPS inspection enabled. Size using the second figure."
  },
  {
    title: "Budget for the licence",
    desc: "Most protection features need a yearly or multi-year subscription. Ask for hardware and licence as separate lines."
  },
  {
    title: "Plan for growth",
    desc: "Leave room for new staff, faster internet and extra branches over the next three to five years."
  }
]}
      faqs={[
  {
    q: "What is the price of a firewall in Udaipur?",
    a: "It depends on the model, the licence type and how many years you take. Use Ask Price on any model and we will send a quotation."
  },
  {
    q: "Which is better, Sophos or Fortinet?",
    a: "Both are established business firewalls. The right choice depends on your size, VPN needs, reporting needs and renewal budget, so we can quote both side by side."
  },
  {
    q: "Can you renew my existing firewall licence?",
    a: "Yes. Share the model and serial number, and we will confirm the renewal options available."
  },
  {
    q: "Does a small office need a firewall?",
    a: "If you keep customer data, run Tally or ERP, use VPN or share files on a server, a business firewall adds protection that a basic internet router usually does not."
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
    id: "managed-it-amc",
    title: "Managed IT & AMC Support",
    slug: "/services/managed-it-amc",
    desc: "Annual maintenance and on-site support for your IT systems.",
    iconName: "wrench"
  }
]}
    />
  );
}

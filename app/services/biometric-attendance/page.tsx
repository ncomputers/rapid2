import type { Metadata } from 'next';
import ServiceLanding from '@/components/ServiceLanding';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: "Biometric Attendance Machine & Access Control in Udaipur",
  description: "Face and fingerprint attendance machines and door access control in Udaipur. eSSL, Matrix COSEC and ZKTeco supply, installation and support.",
  keywords: [
  "biometric attendance machine Udaipur",
  "face attendance machine Udaipur",
  "access control system Udaipur",
  "door lock system office Udaipur"
],
  alternates: { canonical: `${SITE_URL}/services/biometric-attendance` },
  openGraph: {
    title: "Biometric Attendance Machine & Access Control in Udaipur",
    description: "Face and fingerprint attendance machines and door access control in Udaipur. eSSL, Matrix COSEC and ZKTeco supply, installation and support.",
    url: `${SITE_URL}/services/biometric-attendance`,
    images: ['/og-image.png'],
  },
};

export default function Page() {
  return (
    <ServiceLanding
      slug="biometric-attendance"
      label={"Biometric Attendance & Access Control"}
      h1={"Biometric Attendance & Access Control in Udaipur"}
      intro={"Face, fingerprint and card systems for staff attendance and door security. We supply, install and train your team in offices, factories, schools and hotels."}
      cta={"Get a Biometric Quote"}
      featuresTitle={"What We Do"}
      features={[
  {
    title: "Face and fingerprint attendance",
    desc: "Devices chosen for your staff count, lighting and working conditions."
  },
  {
    title: "Door access control",
    desc: "Electromagnetic locks, exit switches and card or face entry for restricted areas."
  },
  {
    title: "Attendance software setup",
    desc: "Shifts, holidays, reports and data export for payroll."
  },
  {
    title: "Multiple locations",
    desc: "Central reporting for branches and plants where the device and software support it."
  }
]}
      productsTitle={"Attendance & Access Devices: Ask for Price"}
      category={"biometric"}
      guideTitle={"How to Choose a Device"}
      guide={[
  {
    title: "Face or fingerprint",
    desc: "Face works well where hands are wet, dusty or worn, such as factories and kitchens. Fingerprint suits smaller offices."
  },
  {
    title: "Check user capacity",
    desc: "Pick a device with room for more staff than you have today."
  },
  {
    title: "Attendance only, or doors too",
    desc: "Door control also needs a lock, power supply and exit switch, so mention it when asking for a price."
  },
  {
    title: "Indoor or outdoor",
    desc: "For gates and dusty areas, ask for a device with a suitable IP rating."
  }
]}
      faqs={[
  {
    q: "What is the price of a biometric attendance machine in Udaipur?",
    a: "It depends on face or fingerprint type, user capacity, software and installation. Use Ask Price on any model for a quotation."
  },
  {
    q: "Can it connect with payroll software?",
    a: "Many devices can export or integrate attendance data. Tell us your payroll software and we will confirm before you buy."
  },
  {
    q: "Can one device do attendance and open the door?",
    a: "Many can, when fitted with a compatible lock and power supply."
  },
  {
    q: "Do you repair or maintain existing machines?",
    a: "Share the brand and model. We can check it and offer repair, replacement or AMC."
  }
]}
      related={[
  {
    id: "cctv-surveillance",
    title: "CCTV Surveillance",
    slug: "/services/cctv-surveillance",
    desc: "Commercial camera installation, recorders and remote viewing.",
    iconName: "shield"
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

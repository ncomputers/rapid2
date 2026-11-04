import React from 'react';
import Link from 'next/link';
import { ArrowRight, Network, Shield, Wrench, Cloud, Laptop, Cpu } from 'lucide-react';

interface RelatedServiceItem {
  id: string;
  title: string;
  slug: string;
  desc: string;
  iconName: 'network' | 'shield' | 'wrench' | 'cloud' | 'laptop' | 'cpu';
}

const iconMap = {
  network: Network,
  shield: Shield,
  wrench: Wrench,
  cloud: Cloud,
  laptop: Laptop,
  cpu: Cpu,
};

interface RelatedServicesProps {
  currentId: string;
  related: RelatedServiceItem[];
}

export default function RelatedServices({ related }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-white border-t border-surface-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Complementary Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mt-1">
              Explore Related Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
          >
            <span>View All Enterprise Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {related.map((item) => {
            const Icon = iconMap[item.iconName] || Network;
            return (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-surface-soft border border-surface-line hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-surface-line text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ink group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-surface-line/70">
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors"
                  >
                    <span>Learn About {item.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Globe } from 'lucide-react';

const reasons = [
  {
    title: 'Enterprise Standards',
    description: 'Code quality, security practices, and documentation that meet Fortune 500 expectations.',
    icon: Shield,
  },
  {
    title: 'Fast Time-to-Value',
    description: 'Agile delivery with clear milestones. Ship features in weeks, not months.',
    icon: Zap,
  },
  {
    title: 'Senior Talent',
    description: 'Engineers with 5+ years of experience. No junior-only teams.',
    icon: Users,
  },
  {
    title: 'Global-Ready',
    description: 'Solutions that scale across regions, currencies, and compliance requirements.',
    icon: Globe,
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-5 sm:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Built for enterprises that demand reliability, speed, and long-term partnership.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <reason.icon className="mx-auto h-12 w-12 text-brand-primary" />
              <h3 className="mt-4 font-semibold text-text-primary">{reason.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

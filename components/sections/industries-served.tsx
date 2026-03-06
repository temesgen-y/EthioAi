'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Heart,
  Landmark,
  ShoppingCart,
  Truck,
  Factory,
} from 'lucide-react';

const industries = [
  {
    name: 'Financial Services',
    description: 'Secure, compliant systems for banks, fintech, and insurers.',
    icon: Landmark,
  },
  {
    name: 'Healthcare',
    description: 'HIPAA-aware platforms for clinics, hospitals, and pharma.',
    icon: Heart,
  },
  {
    name: 'Retail & E‑commerce',
    description: 'Omnichannel commerce and inventory optimization.',
    icon: ShoppingCart,
  },
  {
    name: 'Logistics',
    description: 'Route optimization, fleet management, supply chain visibility.',
    icon: Truck,
  },
  {
    name: 'Manufacturing',
    description: 'IoT integration, predictive maintenance, production analytics.',
    icon: Factory,
  },
  {
    name: 'Enterprise',
    description: 'Internal tools, workflows, and process automation.',
    icon: Building2,
  },
];

export function IndustriesServed() {
  return (
    <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-5 sm:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Domain expertise across regulated and high-stakes sectors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex gap-3 rounded-lg border border-border bg-surface-card p-4 sm:gap-4 sm:p-6"
            >
              <industry.icon className="h-10 w-10 shrink-0 text-brand-primary" />
              <div>
                <h3 className="font-semibold text-text-primary">{industry.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/industries"
            className="text-sm font-medium text-brand-primary hover:underline"
          >
            View all industries →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

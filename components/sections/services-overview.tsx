'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Custom Software',
    description: 'Tailored applications built for your exact requirements. Scalable, maintainable, production-ready.',
    href: '/services/custom-software',
    icon: Code2,
  },
  {
    title: 'AI Development',
    description: 'Intelligent systems that automate decisions, optimize operations, and unlock new capabilities.',
    href: '/services/ai-development',
    icon: Brain,
  },
  {
    title: 'Machine Learning',
    description: 'Data-driven models that predict, classify, and recommend—powered by proven ML frameworks.',
    href: '/services/machine-learning',
    icon: Cpu,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform apps for iOS and Android. Performance-first, user-centric.',
    href: '/services/mobile-development',
    icon: Smartphone,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesOverview() {
  return (
    <section className="border-y border-border bg-background px-4 py-16 sm:px-5 sm:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            Our Core Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Four pillars of engineering excellence. Each delivered with enterprise standards.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-6 sm:grid-cols-2 lg:gap-8 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Link
                href={service.href}
                className="group block rounded-lg border border-border bg-surface-card p-6 transition-all hover:border-brand-primary/30 hover:shadow-lg"
              >
                <service.icon className="h-10 w-10 text-brand-primary" />
                <h3 className="mt-4 text-lg font-semibold text-text-primary group-hover:text-brand-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-primary group-hover:underline">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

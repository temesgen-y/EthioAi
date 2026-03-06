'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    description: 'Requirements gathering, scope definition, and technical feasibility.',
    icon: Search,
  },
  {
    title: 'Design',
    description: 'Architecture, UX flows, and system design documentation.',
    icon: Palette,
  },
  {
    title: 'Development',
    description: 'Iterative builds with weekly demos and feedback loops.',
    icon: Code,
  },
  {
    title: 'Deployment',
    description: 'CI/CD, monitoring, and production rollout.',
    icon: Rocket,
  },
  {
    title: 'Support',
    description: 'Maintenance, optimization, and continuous improvement.',
    icon: Headphones,
  },
];

export function Process() {
  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-5 sm:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            From concept to production—transparent, predictable, and efficient.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              <step.icon className="h-12 w-12 text-brand-primary" />
              <h3 className="mt-4 font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 max-w-[200px] text-sm text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

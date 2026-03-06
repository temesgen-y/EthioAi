'use client';

import { motion } from 'framer-motion';

const models = [
  {
    title: 'Fixed Scope',
    description: 'Clear deliverables, fixed timeline and budget. Ideal for well-defined projects.',
  },
  {
    title: 'Time & Materials',
    description: 'Flexible scope with hourly or monthly billing. Best for evolving requirements.',
  },
  {
    title: 'Dedicated Team',
    description: 'Embedded engineers who work exclusively on your product. Long-term partnerships.',
  },
];

export function EngagementModels() {
  return (
    <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-5 sm:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Engagement Models
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Choose the structure that fits your needs.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-border bg-surface-card p-6"
            >
              <h3 className="font-semibold text-text-primary">{model.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

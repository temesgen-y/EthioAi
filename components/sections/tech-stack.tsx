'use client';

import { motion } from 'framer-motion';

const technologies = [
  ['TypeScript', 'Python', 'Rust', 'Go'],
  ['React', 'Next.js', 'Node.js', 'FastAPI'],
  ['PostgreSQL', 'Redis', 'Vector DBs'],
  ['TensorFlow', 'PyTorch', 'Hugging Face'],
  ['AWS', 'GCP', 'Vercel', 'Docker', 'Kubernetes'],
];

export function TechStack() {
  return (
    <section className="border-y border-border bg-background px-4 py-16 sm:px-5 sm:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Modern, proven tools. No vendor lock-in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.flat().map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

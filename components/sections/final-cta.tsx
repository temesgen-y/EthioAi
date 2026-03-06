'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-5 sm:py-24 md:px-6 md:py-28 lg:px-8 lg:py-32">
      <div className="gradient-accent absolute inset-0 -z-10" />
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
        >
          Ready to build something great?
        </motion.h2>
        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-text-secondary"
        >
          Tell us about your project. We respond within 24 hours.
        </motion.p>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Button size="xl" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-5 sm:py-24 md:px-6 md:py-28 lg:px-8 lg:py-32">
      <div className="gradient-accent absolute inset-0 -z-10" />
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-text-primary xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
        >
          Enterprise-Grade AI
          <br />
          <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            & Custom Software Engineering
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base text-text-secondary sm:mt-6 sm:text-lg"
        >
          We build scalable, intelligent solutions for businesses across Africa and beyond.
          From AI systems to custom software—delivered with precision and reliability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <Button size="xl" asChild>
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

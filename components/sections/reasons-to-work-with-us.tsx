'use client';

import { motion } from 'framer-motion';
import {
  Settings,
  Users,
  Award,
  TrendingUp,
  Globe,
  Target,
  Zap,
  Heart,
} from 'lucide-react';

const reasons = [
  {
    title: 'Practically Experienced',
    description:
      "From management and communication to technology and finance, we've assembled top professionals dedicated to propelling your business forward.",
    icon: Settings,
    variant: 'primary' as const,
  },
  {
    title: 'Trusted Partners',
    description:
      'Our company is established to promote sustainable business development by offering an integrated service to our clients.',
    icon: Users,
    variant: 'accent' as const,
  },
  {
    title: 'Qualified Professionals',
    description:
      'Our team is made up of young and talented professionals with outstanding academic background, who have diverse skills in their respective fields.',
    icon: Award,
    variant: 'accent' as const,
  },
  {
    title: 'Promoting Digital Jobs',
    description:
      'Our impact outsourcing amenities are built to help ambitious organizations achieve more with talented Pro talent from Africa.',
    icon: TrendingUp,
    variant: 'accent' as const,
  },
  {
    title: 'International Expertise',
    description:
      'We provide our customers with a complete full cycle of consulting services and tailored solutions specific to their needs.',
    icon: Globe,
    variant: 'primary' as const,
  },
  {
    title: 'Responsive Actions',
    description:
      'Our business center is created to encourage entrepreneurship in our society through a variety of services to assist our clients.',
    icon: Target,
    variant: 'primary' as const,
  },
  {
    title: 'Innovation Focus',
    description:
      'We work with entrepreneurs and companies that make a significant difference to our society through innovative solutions.',
    icon: Zap,
    variant: 'primary' as const,
  },
  {
    title: 'Empowering Women',
    description:
      'We actively support and empower women entrepreneurs, fostering diversity and inclusion in the business ecosystem.',
    icon: Heart,
    variant: 'primary' as const,
  },
];

export function ReasonsToWorkWithUs() {
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
            Reasons to Work With Us
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-text-secondary">
            We bring together expertise, innovation, and dedication to help your
            business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                  reason.variant === 'primary'
                    ? 'bg-brand-primary/15 text-brand-primary'
                    : 'bg-brand-accent/15 text-brand-accent'
                }`}
              >
                <reason.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary">{reason.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

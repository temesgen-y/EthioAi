'use client';

import Image from 'next/image';
import { Handshake, Users2, Cpu, Lightbulb, Shield, Plus, X } from 'lucide-react';
import { useState } from 'react';

const items = [
  {
    id: 'commitment',
    title: 'Long-term Commitment',
    description:
      'We believe meaningful value can be provided through long-term commitment. We don\'t want to be an extension of your team, we strive to be a part of it until your vision becomes reality.',
    icon: Handshake,
  },
  {
    id: 'understanding',
    title: 'Great Understanding',
    description:
      'We take time to deeply understand your business, goals, and challenges. Our team immerses itself in your context to deliver solutions that truly fit.',
    icon: Users2,
  },
  {
    id: 'technologies',
    title: 'Cutting Edge Technologies',
    description:
      'We leverage the latest tools, frameworks, and platforms to build modern, scalable solutions that stand the test of time.',
    icon: Cpu,
  },
  {
    id: 'team',
    title: 'Experienced Team',
    description:
      'Our senior engineers and specialists bring years of industry experience to every project, ensuring high-quality deliverables.',
    icon: Lightbulb,
  },
  {
    id: 'quality',
    title: 'Best Quality Service',
    description:
      'We deliver excellence in every engagement, adhering to the highest standards and best practices in software development.',
    icon: Shield,
  },
];

export function WhyMereb() {
  const [openId, setOpenId] = useState<string | null>('commitment');

  return (
    <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Why EthioAITech
        </h2>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modern office workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-surface-dark sm:h-32 sm:w-32" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-brand-accent sm:h-32 sm:w-32" />
          </div>

          <div className="flex flex-col gap-3">
            {items.map((item) => {
              const isOpen = openId === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? 'border-brand-accent bg-brand-accent'
                      : 'border-border bg-surface-card'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                  >
                    <span className="flex items-center gap-3">
                      <Icon
                        className={`h-6 w-6 shrink-0 ${
                          isOpen ? 'text-text-inverse' : 'text-text-primary'
                        }`}
                      />
                      <span
                        className={`font-semibold ${
                          isOpen ? 'text-text-inverse' : 'text-text-primary'
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                    {isOpen ? (
                      <X className="h-5 w-5 shrink-0 text-text-inverse" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-text-secondary" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-text-inverse/20 px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
                      <p className="text-sm text-text-inverse/95">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

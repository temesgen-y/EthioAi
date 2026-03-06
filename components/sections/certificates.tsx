'use client';

import { Shield } from 'lucide-react';
import { useRef, useState } from 'react';

const certificates = [
  {
    title: 'Website Hacking / Penetration Testing',
    issuer: 'Security Certification',
  },
  {
    title: 'ISTQB Certified Tester Foundation Level',
    issuer: 'ISTQB',
  },
  {
    title: 'IBM UX Experience',
    issuer: 'IBM & Coursera',
  },
  {
    title: 'Google UX Design Certificate',
    issuer: 'Google',
  },
  {
    title: 'Interaction Design Foundation',
    issuer: 'IxDF',
  },
  {
    title: 'Clutch Top Company',
    issuer: 'Clutch 2024',
  },
  {
    title: 'Best Web Developers',
    issuer: 'Expertise.com 2023',
  },
  {
    title: 'Best Web Development',
    issuer: 'Clutch Community 2024',
  },
  {
    title: 'Best Web Developers',
    issuer: 'Expertise.com 2024',
  },
  {
    title: 'Best Web Development Company',
    issuer: 'Clutch Icon Honoree 2024',
  },
];

export function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollPosition(maxScroll > 0 ? scrollLeft / maxScroll : 0);
    }
  };

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Certificates
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border"
            style={{ scrollbarWidth: 'thin' }}
          >
            {certificates.map((cert) => (
              <div
                key={`${cert.title}-${cert.issuer}`}
                className="flex w-48 shrink-0 snap-center flex-col items-center justify-center rounded-xl border border-border bg-surface-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10">
                  <Shield className="h-8 w-8 text-brand-primary" />
                </div>
                <p className="mt-4 text-center text-xs font-semibold uppercase leading-tight text-text-primary">
                  {cert.title}
                </p>
                <p className="mt-1 text-center text-xs text-text-secondary">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-1.5">
            {[0, 1, 2].map((i) => {
              const isActive =
                (i === 0 && scrollPosition < 0.4) ||
                (i === 1 && scrollPosition >= 0.4 && scrollPosition < 0.7) ||
                (i === 2 && scrollPosition >= 0.7);
              return (
                <div
                  key={i}
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    isActive ? 'bg-brand-accent' : 'bg-border'
                  }`}
                  aria-hidden
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

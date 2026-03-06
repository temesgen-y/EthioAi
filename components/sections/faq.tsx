'use client';

import { FileStack, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: '1',
    question: 'What is custom software development?',
    answer:
      'Custom software development involves building tailor-made applications designed to meet your specific business requirements. Unlike off-the-shelf solutions, custom software is built from the ground up to fit your workflows, integrate with your existing systems, and scale with your growth.',
  },
  {
    id: '2',
    question: 'What is the difference between AI, machine learning, and traditional software?',
    answer:
      'Traditional software follows predefined rules. Machine learning enables systems to learn from data and improve over time. AI encompasses ML and broader capabilities like natural language processing and computer vision to automate decisions and mimic human-like intelligence.',
  },
  {
    id: '3',
    question: 'How long does a typical custom software project take?',
    answer:
      'Project timelines vary based on scope and complexity. A minimum viable product (MVP) can take 8–12 weeks, while enterprise systems may require several months. We work in agile sprints with regular demos so you can track progress and adjust priorities.',
  },
  {
    id: '4',
    question: 'What technologies do you use for mobile app development?',
    answer:
      'We build native iOS (Swift) and Android (Kotlin) apps, as well as cross-platform solutions using React Native or Flutter. The choice depends on your performance needs, budget, and whether you need platform-specific features.',
  },
  {
    id: '5',
    question: 'How do you ensure the quality and security of your solutions?',
    answer:
      'We follow enterprise standards including automated testing, code reviews, security audits, and adherence to OWASP guidelines. Our QA processes include unit, integration, and end-to-end testing before deployment.',
  },
  {
    id: '6',
    question: 'Can you integrate with our existing systems?',
    answer:
      'Yes. We design solutions that integrate with your current stack—whether that\'s ERPs, CRMs, databases, or APIs. We use REST, GraphQL, webhooks, and event-driven architectures to ensure seamless connectivity.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15">
            <FileStack className="h-5 w-5 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            FAQ
          </h2>
        </div>

        <div className="divide-y divide-border">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-text-primary">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-brand-accent">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-12 text-text-secondary">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

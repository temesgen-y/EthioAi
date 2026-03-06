import Link from 'next/link';
import { Code2, Brain, Cpu, Smartphone } from 'lucide-react';
import { Certificates } from '@/components/sections/certificates';
import { FAQ } from '@/components/sections/faq';
import { JsonLd } from '@/components/seo/json-ld';
import { getServicesPageSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Services',
  description:
    'Custom software, AI development, machine learning, mobile development. Enterprise-grade services from Addis Ababa.',
  path: '/services',
  keywords: [
    'AI development',
    'custom software development',
    'machine learning solutions',
    'mobile app development',
  ],
  ogTitle: 'AI Development & Custom Software Services | EthioTech AI Solutions',
});

const services = [
  {
    title: 'Custom Software',
    description:
      'Tailored applications built for your exact requirements. Scalable, maintainable, production-ready.',
    href: '/services/custom-software',
    icon: Code2,
  },
  {
    title: 'AI Development',
    description:
      'Intelligent systems that automate decisions, optimize operations, and unlock new capabilities.',
    href: '/services/ai-development',
    icon: Brain,
  },
  {
    title: 'Machine Learning',
    description:
      'Data-driven models that predict, classify, and recommend—powered by proven ML frameworks.',
    href: '/services/machine-learning',
    icon: Cpu,
  },
  {
    title: 'Mobile Development',
    description:
      'Native and cross-platform apps for iOS and Android. Performance-first, user-centric.',
    href: '/services/mobile-development',
    icon: Smartphone,
  },
];

export default function ServicesPage() {
  const { serviceSchema, faqSchema } = getServicesPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Four pillars of engineering excellence. Each delivered with
            enterprise standards and production-grade quality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex gap-6 rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <service.icon className="h-12 w-12 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary">
                  {service.title}
                </h2>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Certificates />

      <FAQ />
    </>
  );
}

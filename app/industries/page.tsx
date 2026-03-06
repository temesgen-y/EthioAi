import Link from 'next/link';
import {
  Landmark,
  Heart,
  ShoppingCart,
  Truck,
  Factory,
  Building2,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Industries',
  description:
    'Enterprise AI for financial services, healthcare, retail, logistics, manufacturing. Domain expertise across regulated sectors.',
  path: '/industries',
  keywords: ['AI for healthcare', 'fintech software', 'enterprise AI'],
  ogTitle: 'Industries We Serve | EthioTech AI Solutions',
});

const industries = [
  {
    name: 'Financial Services',
    description:
      'Secure, compliant systems for banks, fintech, and insurers. We build transaction processing, fraud detection, regulatory reporting, and customer-facing platforms with full audit trails.',
    icon: Landmark,
  },
  {
    name: 'Healthcare',
    description:
      'HIPAA-aware platforms for clinics, hospitals, and pharma. Electronic health records, telemedicine, scheduling, and analytics—all designed for privacy and reliability.',
    icon: Heart,
  },
  {
    name: 'Retail & E-commerce',
    description:
      'Omnichannel commerce, inventory optimization, and personalized experiences. We integrate with POS, ERP, and payment systems to create seamless buyer journeys.',
    icon: ShoppingCart,
  },
  {
    name: 'Logistics',
    description:
      'Route optimization, fleet management, and supply chain visibility. Real-time tracking, predictive ETAs, and automated dispatching for operations at scale.',
    icon: Truck,
  },
  {
    name: 'Manufacturing',
    description:
      'IoT integration, predictive maintenance, and production analytics. Connect machines, monitor quality, and optimize throughput with real-time dashboards.',
    icon: Factory,
  },
  {
    name: 'Enterprise',
    description:
      'Internal tools, workflows, and process automation. Custom CRMs, project management systems, and integrations that replace spreadsheets and manual work.',
    icon: Building2,
  },
];

export default function IndustriesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Industries
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Domain expertise across regulated and high-stakes sectors. We
          understand compliance, workflows, and the technology that drives your
          industry. Explore our{' '}
          <Link href="/services" className="font-medium text-primary hover:underline">
            AI development
          </Link>
          ,{' '}
          <Link href="/services/custom-software" className="font-medium text-primary hover:underline">
            custom software
          </Link>
          , and{' '}
          <Link href="/services/machine-learning" className="font-medium text-primary hover:underline">
            machine learning
          </Link>{' '}
          services.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8"
          >
            <industry.icon className="h-12 w-12 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              {industry.name}
            </h2>
            <p className="flex-1 text-muted-foreground">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 border-t border-border pt-12 text-center">
        <p className="text-muted-foreground">
          Ready to transform your industry?{' '}
          <Link href="/services" className="font-medium text-primary hover:underline">
            View our services
          </Link>{' '}
          or{' '}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            get in touch
          </Link>
          .
        </p>
      </div>
    </div>
    </>
  );
}

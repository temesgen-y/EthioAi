import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/contact-form';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Contact',
  description:
    'Contact EthioTech AI Solutions. AI development, custom software, enterprise consulting. Addis Ababa & Frankfurt. Response within 24 hours.',
  path: '/contact',
  keywords: ['contact AI development company', 'software consulting Ethiopia'],
  ogTitle: 'Contact Us | EthioTech AI Solutions',
});

const contactOffices = [
  {
    city: 'Addis Ababa',
    address: 'Bole Road, Addis Ababa, Ethiopia',
    email: 'contact@ethiotech.ai',
    phone: '+251 11 123 4567',
    hours: '09:00 AM - 18:00 PM',
  },
  {
    city: 'Frankfurt',
    address: 'Sachsenhausen Süd, Frankfurt am Main, Germany',
    email: 'contact@ethiotech.ai',
    phone: '+251 11 123 4567',
    hours: '09:00 AM - 18:00 PM',
  },
];

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="gradient-accent absolute inset-0 -z-10" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-secondary">
              <li>
                <Link href="/" className="transition-colors hover:text-text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-primary">Contact Us</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Enterprise-grade AI and custom software engineering. Get in touch for your next project.
          </p>
        </div>
      </section>

      <section className="bg-surface-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                Leave a message
              </h2>
              <p className="mt-2 text-text-secondary">
                Tell us about your project. We respond within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="border-l-4 border-brand-primary pl-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  Get in touch
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-text-primary">
                  Visit one of our offices or reach us online
                </h2>
                <p className="mt-4 text-text-secondary">
                  We deliver enterprise-grade AI and custom software solutions
                  for businesses across Africa and beyond. Connect with our team
                  to discuss your next project.
                </p>
              </div>

              <div className="mt-10 space-y-8">
                {contactOffices.map((office) => (
                  <div
                    key={office.city}
                    className="rounded-lg border border-border bg-surface-background p-6"
                  >
                    <h3 className="font-semibold text-text-primary">{office.city}</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex gap-3 text-sm text-text-secondary">
                        <MapPin className="h-5 w-5 shrink-0 text-brand-primary" />
                        <span>{office.address}</span>
                      </li>
                      <li className="flex gap-3 text-sm text-text-secondary">
                        <Mail className="h-5 w-5 shrink-0 text-brand-primary" />
                        <a
                          href={`mailto:${office.email}`}
                          className="transition-colors hover:text-brand-primary"
                        >
                          {office.email}
                        </a>
                      </li>
                      <li className="flex gap-3 text-sm text-text-secondary">
                        <Phone className="h-5 w-5 shrink-0 text-brand-primary" />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, '')}`}
                          className="transition-colors hover:text-brand-primary"
                        >
                          {office.phone}
                        </a>
                      </li>
                      <li className="flex gap-3 text-sm text-text-secondary">
                        <Clock className="h-5 w-5 shrink-0 text-brand-primary" />
                        <span>{office.hours}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] w-full overflow-hidden bg-surface-muted">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=38.72%2C9.00%2C38.78%2C9.06&layer=mapnik"
          className="h-full w-full border-0"
          title="Office location - Addis Ababa"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

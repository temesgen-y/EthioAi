import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Target,
  Lightbulb,
  Users,
  Shield,
  Zap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { Testimonials } from '@/components/sections/testimonials';
import { WhyMereb } from '@/components/sections/why-mereb';
import { JsonLd } from '@/components/seo/json-ld';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'About',
  description:
    'EthioTech AI Solutions: Leading AI and software engineering in Ethiopia since 2014. Mission, vision, leadership, client success.',
  path: '/about',
  keywords: ['AI company Ethiopia', 'software company Addis Ababa'],
  ogTitle: 'About EthioTech AI Solutions | AI & Software Engineering',
});

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="gradient-accent absolute inset-0 -z-10" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            About EthioTech AI Solutions
          </h1>
          <p className="mt-2 text-sm text-text-secondary sm:text-base">
            Enterprise AI &amp; Software Engineering in Ethiopia
          </p>
          <nav className="mt-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm text-text-secondary">
              <li>
                <Link href="/" className="transition-colors hover:text-text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-primary">About EthioTech AI Solutions</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                About Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Driving Digital Innovation Since 2014
              </h2>
              <p className="mt-6 text-text-secondary">
                EthioTech AI Solutions is a leading software development company
                based in Ethiopia, delivering world-class technology solutions to
                clients across the globe. Our team of skilled engineers,
                designers, and strategists work together to transform businesses
                through innovative software and AI.
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: 'lg' }), 'mt-8 inline-flex')}
              >
                Get in Touch
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                About EthioTech
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Driving Business Growth with AI &amp; Software Excellence
              </h2>
              <p className="mt-6 text-text-secondary">
                EthioTech AI Solutions is a trusted partner for businesses seeking
                to streamline operations and boost efficiency through technology.
                We specialize in{' '}
                <Link href="/services/custom-software" className="font-medium text-brand-primary hover:underline">
                  custom software development
                </Link>
                ,{' '}
                <Link href="/services/ai-development" className="font-medium text-brand-primary hover:underline">
                  AI solutions
                </Link>
                ,{' '}
                <Link href="/services/machine-learning" className="font-medium text-brand-primary hover:underline">
                  machine learning
                </Link>
                , and IT-enabled services, allowing companies to focus on growth
                while we handle the technical complexity. See{' '}
                <Link href="/industries" className="font-medium text-brand-primary hover:underline">
                  industries we serve
                </Link>
                .
              </p>
              <p className="mt-6 text-text-secondary">
                Our expertise extends beyond borders, with a presence in Addis
                Ababa, Ethiopia, enabling us to serve international clients with
                seamless software and AI solutions. By leveraging cutting-edge
                technology and industry best practices, we help businesses achieve
                their core objectives while we manage operational and technical
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary">
                <Target className="h-6 w-6 text-text-inverse" />
              </div>
              <h2 className="mt-6 text-xl font-bold text-text-primary">
                Our Mission
              </h2>
              <p className="mt-4 text-text-secondary">
                To empower organizations worldwide with innovative technology
                solutions that drive growth, efficiency, and competitive
                advantage. We are committed to delivering exceptional software
                that makes a real difference.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary">
                <Target className="h-6 w-6 text-text-inverse" />
              </div>
              <h2 className="mt-6 text-xl font-bold text-text-primary">
                Our Vision
              </h2>
              <p className="mt-4 text-text-secondary">
                To become Africa&apos;s premier technology partner, recognized
                globally for excellence in software development and digital
                innovation. We aspire to lead the continent&apos;s tech
                transformation.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface-card p-6">
              <Lightbulb className="h-12 w-12 text-brand-primary" />
              <h3 className="mt-4 font-bold text-text-primary">Innovation</h3>
              <p className="mt-2 text-sm text-text-secondary">
                We embrace new technologies and creative solutions to solve
                complex challenges.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-card p-6">
              <Users className="h-12 w-12 text-brand-primary" />
              <h3 className="mt-4 font-bold text-text-primary">Collaboration</h3>
              <p className="mt-2 text-sm text-text-secondary">
                We work closely with our clients as partners, fostering
                transparency and trust.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-card p-6">
              <Shield className="h-12 w-12 text-brand-primary" />
              <h3 className="mt-4 font-bold text-text-primary">Quality</h3>
              <p className="mt-2 text-sm text-text-secondary">
                We deliver excellence in every project, adhering to the highest
                industry standards.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-card p-6">
              <Zap className="h-12 w-12 text-brand-primary" />
              <h3 className="mt-4 font-bold text-text-primary">Agility</h3>
              <p className="mt-2 text-sm text-text-secondary">
                We adapt quickly to changing requirements and deliver solutions
                on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Mubarek Mohammed',
                role: 'CEO & Founder',
                image:
                  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
                initials: null,
              },
              {
                name: 'Abas Usman',
                role: 'CTO',
                image:
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
                initials: null,
              },
              {
                name: 'Masresha Yayeh',
                role: 'Senior Software Engineer',
                image: null,
                initials: 'BB',
              },
              {
                name: 'Micheal Taye',
                role: 'Design Director',
                image: null,
                initials: 'HT',
              },
              {
                name: 'Michael Taye',
                role: 'Project Lead',
                image: null,
                initials: 'MT',
              },
              {
                name: 'Tsega Amare',
                role: 'Senior Developer',
                image: null,
                initials: 'TA',
              },
              {
                name: 'Yonas Haile',
                role: 'DevOps Lead',
                image: null,
                initials: 'YH',
              },
              {
                name: 'Tigist Alemayehu',
                role: 'QA Manager',
                image: null,
                initials: 'TA',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl border border-border bg-surface-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-brand-accent/20 text-lg font-semibold text-brand-primary">
                      {member.initials}
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-center font-bold text-text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 text-center text-sm text-text-secondary">
                  {member.role}
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="text-text-secondary transition-colors hover:text-brand-primary"
                    aria-label={`${member.name} on Facebook`}
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-text-secondary transition-colors hover:text-brand-primary"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-text-secondary transition-colors hover:text-brand-primary"
                    aria-label={`${member.name} on Instagram`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-text-secondary transition-colors hover:text-brand-primary"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <WhyMereb />
    </>
  );
}

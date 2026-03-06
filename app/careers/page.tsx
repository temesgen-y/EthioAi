import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Mountain, MapPin, ThumbsUp, TrendingUp } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Careers',
  description:
    'Join EthioTech AI Solutions. Senior engineers and AI specialists in Addis Ababa. Enterprise-grade software with global impact.',
  path: '/careers',
  keywords: ['AI jobs Ethiopia', 'software engineer jobs Addis Ababa', 'tech careers Africa'],
  ogTitle: 'Careers | EthioTech AI Solutions',
});

const openRoles = [
  { title: 'Node.js Developer', location: 'Addis Ababa, Ethiopia', type: 'Full Time' },
  { title: 'UI/UX Designer', location: 'Remote', type: 'Full Time' },
  { title: 'QA Engineer', location: 'Addis Ababa, Ethiopia', type: 'Full Time' },
  { title: 'Digital Marketer', location: 'Remote', type: 'Part Time' },
  { title: 'Project Manager', location: 'Addis Ababa, Ethiopia', type: 'Full Time' },
  { title: 'Frontend Developer', location: 'Addis Ababa, Ethiopia', type: 'Full Time' },
  { title: 'Python Developer', location: 'Addis Ababa, Ethiopia', type: 'Full Time' },
  { title: 'Sales Executive', location: 'Addis Ababa, Ethiopia', type: 'Full Time' },
  { title: 'HR Trainee', location: 'Addis Ababa, Ethiopia', type: 'Part Time' },
];

const benefits = [
  {
    icon: Building2,
    title: 'Young and chilled out',
    description: 'A vibrant, collaborative culture where innovation thrives.',
  },
  {
    icon: Mountain,
    title: 'Ample Growth Opportunities',
    description: 'Chart your path with learning, mentorship, and career advancement.',
  },
  {
    icon: ThumbsUp,
    title: 'Be Proud of your work',
    description: 'Ship production-grade solutions that make a real impact.',
  },
  {
    icon: TrendingUp,
    title: 'Make the best version of yourself',
    description: 'Grow with challenging projects and a supportive team.',
  },
];

export default function CareersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="careers-hero relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-surface-dark" />
        <div className="careers-hero-hex absolute inset-0" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-text-inverse sm:text-5xl lg:text-6xl">
            We&apos;re Hiring!
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-inverse/90">
            We recruit individuals with the potential to contribute their skills,
            diversity, and talents to a work culture shaped by mutual respect.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-brand-primary text-text-inverse hover:bg-brand-primary/90"
            >
              <Link href="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-card px-4 py-20 sm:px-6 lg:px-8">
        <div className="careers-decorative absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-border-subtle opacity-30" />
        <div className="careers-decorative absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-brand-accent/20 opacity-40" />
        <div className="relative mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Why EthioTech?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-text-secondary">
            We are a digitally native company that helps organizations reinvent
            themselves to create a way forward and unleash their potential. We are
            the place where innovation, design and engineering meet scale.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <item.icon className="h-12 w-12 text-brand-primary" />
                <h3 className="mt-4 font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-text-primary">
              Open Positions
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              We are always looking for talented engineers. If you do not see a
              role that fits, we still want to hear from you. Send your resume
              and a brief note about your interests.
            </p>
            <Button asChild className="mt-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-card px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-border-subtle opacity-30" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-brand-accent/20 opacity-40" />
        <div className="relative mx-auto max-w-6xl space-y-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                Culture and Core Values
              </h2>
              <p className="mt-6 text-text-secondary">
                We are obsessed about our customers and are guided only by user
                love. At EthioTech we are transparent about the big picture and
                how each of us contributes to it. Here we like being resourceful
                and prioritize impact over hours. When you join, you&apos;ll
                witness how we are fiercely conscious about quality and work
                towards creating a legacy.
              </p>
              <Button asChild className="mt-8">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team hands collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                Why work with us
              </h2>
              <p className="mt-6 text-text-secondary">
                EthioTech is for you, if you&apos;d like to build a truly
                disruptive product that solves a real problem for remote hybrid
                companies and teams. You&apos;ll get to work with world-beaters
                and learn from industry leaders. We love making time for deep
                work, hate micro-management and encourage bold honest
                conversations across teams.
              </p>
              <Button asChild className="mt-8">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-card px-4 pt-8 pb-20 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-border-subtle opacity-30" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-brand-accent/20 opacity-40" />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center gap-6 py-6">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Open Roles
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col rounded-xl border border-border bg-surface-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-text-primary">{role.title}</h3>
                  <span className="shrink-0 rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-text-inverse">
                    {role.type}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{role.location}</span>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-medium text-brand-primary transition-colors hover:text-brand-accent hover:underline"
                >
                  View & Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-accent px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Don&apos;t See the Right Role?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
          We&apos;re always looking for exceptional talent. Send us your resume
          and we&apos;ll reach out when we have a position that matches your
          skills.
        </p>
        <Button
          asChild
          className="mt-10"
        >
          <Link href="/contact">
            Submit General Application
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </>
  );
}

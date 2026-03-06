import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/seo/json-ld';
import { getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Projects',
  description:
    'Featured projects: ERP, healthcare, e-commerce, fintech. Enterprise software and AI solutions by EthioTech AI Solutions.',
  path: '/projects',
  keywords: ['AI project portfolio', 'enterprise software projects'],
  ogTitle: 'Featured Projects | EthioTech AI Solutions',
});

const projects = [
  {
    title: 'Enterprise Resource Planning',
    category: 'Enterprise Software',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    description:
      'A comprehensive ERP solution for mid to large enterprises, streamlining operations and reporting.',
  },
  {
    title: 'Healthcare Management Platform',
    category: 'Healthcare',
    technologies: ['Next.js', 'Python', 'AWS'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    description:
      'HIPAA-compliant platform for patient records, scheduling, and care coordination.',
  },
  {
    title: 'E-Commerce Marketplace',
    category: 'Retail',
    technologies: ['Vue.js', 'Go', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    description:
      'Scalable marketplace enabling multi-vendor sales with real-time inventory and payments.',
  },
  {
    title: 'FinTech Payment Gateway',
    category: 'Finance',
    technologies: ['TypeScript', 'Rust', 'Kubernetes'],
    image:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
    description:
      'High-performance payment processing with fraud detection and multi-currency support.',
  },
  {
    title: 'Logistics Tracking System',
    category: 'Supply Chain',
    technologies: ['React', 'Python', 'Redis'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    description:
      'Real-time fleet and shipment tracking with route optimization and delivery analytics.',
  },
];

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="contact-hero relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-inverse/90">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-text-inverse"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-inverse">Projects</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight text-text-inverse sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-inverse/90">
            Showcasing our latest work and successful client partnerships.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-xl border border-border bg-surface-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary">
                    {project.category}
                  </span>
                  <h2 className="mt-3 font-bold text-text-primary">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm text-text-secondary">
                    {project.technologies.join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

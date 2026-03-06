import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getRelatedServices } from '@/lib/internal-links';

interface ServicePageTemplateProps {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  processSteps: { title: string; description: string }[];
  engagementModels: { title: string; description: string }[];
  slug?: string;
}

export function ServicePageTemplate({
  title,
  problem,
  solution,
  techStack,
  processSteps,
  engagementModels,
  slug = 'custom-software',
}: ServicePageTemplateProps) {
  const relatedServices = getRelatedServices(slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
      <p className="mt-4 text-muted-foreground">
        Enterprise-grade delivery with production standards.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">The Problem</h2>
        <p className="mt-4 text-muted-foreground">{problem}</p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">Our Solution</h2>
        <p className="mt-4 text-muted-foreground">{solution}</p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">Technology Stack</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">Architecture</h2>
        <div className="mt-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-muted/30">
          <span className="text-sm text-muted-foreground">
            Architecture diagram placeholder
          </span>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">Process</h2>
        <ul className="mt-4 space-y-4">
          {processSteps.map((step) => (
            <li key={step.title}>
              <h3 className="font-medium text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">Engagement Models</h2>
        <div className="mt-4 space-y-4">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="rounded-lg border border-border p-4"
            >
              <h3 className="font-medium text-foreground">{model.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 flex flex-col items-center gap-6">
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: 'lg' }), 'inline-flex')}
        >
          Start a Project
        </Link>
        <nav aria-label="Related services">
          <p className="mb-3 text-center text-sm text-muted-foreground">
            Explore our other services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm font-medium text-primary hover:underline"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </nav>
      </section>
    </article>
  );
}

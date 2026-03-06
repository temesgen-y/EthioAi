'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const PROJECTS_PER_PAGE = 3;

const projects = [
  {
    title: 'Enterprise Resource Planning',
    category: 'Enterprise Software',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    href: '/projects',
  },
  {
    title: 'Healthcare Management Platform',
    category: 'Healthcare',
    technologies: ['Next.js', 'Python', 'AWS'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    href: '/projects',
  },
  {
    title: 'E-Commerce Marketplace',
    category: 'Retail',
    technologies: ['Vue.js', 'Go', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    href: '/projects',
  },
  {
    title: 'FinTech Payment Gateway',
    category: 'Finance',
    technologies: ['TypeScript', 'Rust', 'Kubernetes'],
    image:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
    href: '/projects',
  },
  {
    title: 'Logistics Tracking System',
    category: 'Supply Chain',
    technologies: ['React', 'Python', 'Redis'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    href: '/projects',
  },
];

export function FeaturedProjects() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = projects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  );

  return (
    <section className="border-y border-border bg-surface-card px-4 py-16 sm:px-5 sm:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Showcasing our latest work and successful client partnerships
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <AnimatePresence mode="wait">
            {paginatedProjects.map((project, i) => (
            <motion.article
              key={`${currentPage}-${project.title}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-xl border border-border bg-surface-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded bg-surface-muted px-3 py-1 text-xs font-medium text-text-secondary">
                  {project.category}
                </span>
                <h3 className="mt-3 font-bold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {project.technologies.join(' · ')}
                </p>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-card text-text-secondary transition-colors hover:border-brand-accent hover:text-brand-accent disabled:opacity-50 disabled:hover:border-border disabled:hover:text-text-secondary"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentPage(i)}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors',
                    i === currentPage
                      ? 'bg-brand-accent text-text-inverse'
                      : 'border border-border bg-surface-card text-text-secondary hover:border-brand-accent hover:text-brand-accent'
                  )}
                  aria-label={`Go to page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-card text-text-secondary transition-colors hover:border-brand-accent hover:text-brand-accent disabled:opacity-50 disabled:hover:border-border disabled:hover:text-text-secondary"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'inline-flex items-center'
            )}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

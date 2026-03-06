import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/sections/service-page-template';
import { JsonLd } from '@/components/seo/json-ld';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Custom Software Development',
  description:
    'Tailored applications built for your exact requirements. Scalable, maintainable, production-ready. Enterprise custom software from Ethiopia.',
  path: '/services/custom-software',
  keywords: ['custom software development', 'enterprise software'],
  ogTitle: 'Custom Software Development | EthioTech AI Solutions',
});

export default function CustomSoftwarePage() {
  const serviceSchema = getServiceSchema({
    name: 'Custom Software Development',
    description:
      'Tailored applications built for your exact requirements. Scalable, maintainable, production-ready.',
    path: '/services/custom-software',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Custom Software Development', url: '/services/custom-software' },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ServicePageTemplate
      slug="custom-software"
      title="Custom Software Development"
      problem="Off-the-shelf software rarely fits. You need systems that match your workflows, integrate with your stack, and scale with your business—without the rigidity of packaged solutions."
      solution="We design and build custom applications from the ground up. Every feature, integration, and workflow is tailored to your requirements. Code is clean, documented, and maintainable. Deployments are automated. You own the IP."
      techStack={[
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'AWS/GCP',
      ]}
      processSteps={[
        {
          title: 'Discovery & Scoping',
          description: 'Deep dive into requirements, constraints, and success metrics.',
        },
        {
          title: 'Architecture & Design',
          description: 'System design, data models, and technical specifications.',
        },
        {
          title: 'Iterative Development',
          description: 'Sprint-based delivery with demos and feedback loops.',
        },
        {
          title: 'Testing & QA',
          description: 'Automated tests, security review, and performance validation.',
        },
        {
          title: 'Deployment & Handoff',
          description: 'Production rollout, documentation, and knowledge transfer.',
        },
      ]}
      engagementModels={[
        {
          title: 'Fixed Scope',
          description:
            'Fixed deliverables, timeline, and budget. Ideal for well-defined projects.',
        },
        {
          title: 'Time & Materials',
          description:
            'Flexible scope with transparent hourly billing. Best for evolving needs.',
        },
        {
          title: 'Dedicated Team',
          description:
            'Embedded engineers who work exclusively on your product.',
        },
      ]}
    />
    </>
  );
}

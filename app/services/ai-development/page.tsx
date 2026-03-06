import { ServicePageTemplate } from '@/components/sections/service-page-template';
import { JsonLd } from '@/components/seo/json-ld';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'AI Development',
  description:
    'AI development services in Ethiopia. Intelligent systems that automate decisions, optimize operations. Enterprise AI solutions.',
  path: '/services/ai-development',
  keywords: ['AI development', 'enterprise AI services'],
  ogTitle: 'AI Development | EthioTech AI Solutions',
});

export default function AIDevelopmentPage() {
  const serviceSchema = getServiceSchema({
    name: 'AI Development',
    description:
      'Intelligent systems that automate decisions, optimize operations, and unlock new capabilities.',
    path: '/services/ai-development',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AI Development', url: '/services/ai-development' },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
    <ServicePageTemplate
      slug="ai-development"
      title="AI Development"
      problem="Manual processes slow you down. Decisions that could be automated remain in human hands. You have data but lack the systems to turn it into actionable intelligence—without building an internal AI team."
      solution="We build AI-powered systems that integrate into your workflows. From chatbots and document understanding to recommendation engines and process automation—we design, train, and deploy production-ready AI that delivers measurable ROI."
      techStack={[
        'Python',
        'TensorFlow',
        'PyTorch',
        'LangChain',
        'OpenAI API',
        'Vector DBs',
      ]}
      processSteps={[
        {
          title: 'Use Case Analysis',
          description: 'Identify high-impact opportunities and feasibility assessment.',
        },
        {
          title: 'Data & Model Design',
          description: 'Data pipelines, model selection, and training strategy.',
        },
        {
          title: 'Development & Integration',
          description: 'Build, fine-tune, and integrate AI into your systems.',
        },
        {
          title: 'Evaluation & Optimization',
          description: 'Accuracy, latency, and cost optimization.',
        },
        {
          title: 'Deployment & Monitoring',
          description: 'Production deployment with ongoing monitoring and iteration.',
        },
      ]}
      engagementModels={[
        {
          title: 'Proof of Concept',
          description:
            'Validate feasibility and ROI before full-scale investment.',
        },
        {
          title: 'End-to-End Build',
          description:
            'Full development from concept to production deployment.',
        },
        {
          title: 'AI Augmentation',
          description:
            'Enhance existing products with AI capabilities.',
        },
      ]}
    />
    </>
  );
}

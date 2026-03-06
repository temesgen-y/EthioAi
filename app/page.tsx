import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { IndustriesServed } from '@/components/sections/industries-served';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { generatePageMetadata } from '@/lib/seo';

const TechStack = dynamic(() =>
  import('@/components/sections/tech-stack').then((m) => ({ default: m.TechStack }))
);
const Process = dynamic(() =>
  import('@/components/sections/process').then((m) => ({ default: m.Process }))
);
const EngagementModels = dynamic(() =>
  import('@/components/sections/engagement-models').then((m) => ({ default: m.EngagementModels }))
);
const ReasonsToWorkWithUs = dynamic(() =>
  import('@/components/sections/reasons-to-work-with-us').then((m) => ({ default: m.ReasonsToWorkWithUs }))
);
const FeaturedProjects = dynamic(() =>
  import('@/components/sections/featured-projects').then((m) => ({ default: m.FeaturedProjects }))
);
const FinalCta = dynamic(() =>
  import('@/components/sections/final-cta').then((m) => ({ default: m.FinalCta }))
);

export const metadata = generatePageMetadata({
  title: 'EthioTech AI Solutions | Enterprise-Grade AI & Custom Software',
  description:
    'Leading AI development company in Ethiopia. Custom software, machine learning, enterprise AI services. Addis Ababa-based engineering excellence.',
  path: '/',
  keywords: [
    'AI Development Company Ethiopia',
    'Custom Software Development Africa',
    'Machine Learning Solutions Company',
    'Enterprise AI Services',
    'Software Engineering Company Addis Ababa',
  ],
  ogTitle: 'EthioTech AI Solutions | Enterprise-Grade AI & Custom Software',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <IndustriesServed />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <EngagementModels />
      <ReasonsToWorkWithUs />
      <FeaturedProjects />
      <FinalCta />
    </>
  );
}

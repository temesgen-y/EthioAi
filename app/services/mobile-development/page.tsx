import { ServicePageTemplate } from '@/components/sections/service-page-template';
import { JsonLd } from '@/components/seo/json-ld';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Mobile Development',
  description:
    'Native and cross-platform mobile app development for iOS and Android. React Native, Flutter. Performance-first delivery.',
  path: '/services/mobile-development',
  keywords: ['mobile app development', 'iOS Android apps'],
  ogTitle: 'Mobile Development | EthioTech AI Solutions',
});

export default function MobileDevelopmentPage() {
  const serviceSchema = getServiceSchema({
    name: 'Mobile Development',
    description:
      'Native and cross-platform apps for iOS and Android. Performance-first, user-centric delivery.',
    path: '/services/mobile-development',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Mobile Development', url: '/services/mobile-development' },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
    <ServicePageTemplate
      slug="mobile-development"
      title="Mobile Development"
      problem="Users expect fast, native-feeling apps that work offline and integrate with device capabilities. Building for iOS and Android separately is expensive; cross-platform solutions often sacrifice performance and polish. You need both reach and quality."
      solution="We build mobile apps using React Native and Flutter for cross-platform, or Swift/Kotlin for native when performance is critical. Every app is designed with offline support, push notifications, and platform-specific UX. We follow App Store and Play Store guidelines so launches are smooth."
      techStack={[
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Expo',
        'Firebase',
      ]}
      processSteps={[
        {
          title: 'UX & Platform Strategy',
          description: 'Define flows, platform-specific UX, and tech approach.',
        },
        {
          title: 'Design & Prototyping',
          description: 'UI design, prototypes, and design system.',
        },
        {
          title: 'Development',
          description: 'Implement features with iterative releases.',
        },
        {
          title: 'QA & Device Testing',
          description: 'Test across devices, OS versions, and edge cases.',
        },
        {
          title: 'Store Submission & Updates',
          description: 'Launch and ongoing updates with analytics.',
        },
      ]}
      engagementModels={[
        {
          title: 'MVP',
          description:
            'Core features for validation and early users.',
        },
        {
          title: 'Full Build',
          description:
            'Complete app with all planned features.',
        },
        {
          title: 'Maintenance & Iteration',
          description:
            'Updates, new features, and platform compatibility.',
        },
      ]}
    />
    </>
  );
}

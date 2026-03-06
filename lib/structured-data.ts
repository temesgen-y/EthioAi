import { SITE_URL, NAP } from './seo';

/** LocalBusiness schema for Ethiopia/Addis Ababa local SEO */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: NAP.name,
    description:
      'AI development and custom software engineering company in Addis Ababa, Ethiopia. Enterprise AI services and machine learning solutions.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    telephone: NAP.phone,
    email: NAP.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.region,
      addressCountry: NAP.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Addis Ababa' },
      { '@type': 'Country', name: 'Ethiopia' },
      { '@type': 'Continent', name: 'Africa' },
    ],
  };
}

/** Service schema for individual service pages */
export function getServiceSchema(params: {
  name: string;
  description: string;
  path: string;
  offers?: string[];
}) {
  const { name, description, path } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'Organization',
      name: 'EthioTech AI Solutions',
    },
    areaServed: [
      { '@type': 'Country', name: 'Ethiopia' },
      { '@type': 'Continent', name: 'Africa' },
    ],
    serviceType: name,
  };
}

export function getServicesPageSchema() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Development & Custom Software Services',
    description:
      'Enterprise-grade custom software, AI development, machine learning solutions, and mobile app development in Addis Ababa, Ethiopia.',
    provider: {
      '@type': 'Organization',
      name: 'EthioTech AI Solutions',
    },
    areaServed: [
      { '@type': 'Country', name: 'Ethiopia' },
      { '@type': 'Continent', name: 'Africa' },
    ],
    serviceType: [
      'Custom Software Development',
      'AI Development',
      'Machine Learning',
      'Mobile App Development',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is custom software development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Custom software development involves building tailor-made applications designed to meet your specific business requirements. Unlike off-the-shelf solutions, custom software is built from the ground up to fit your workflows, integrate with your existing systems, and scale with your growth.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between AI, machine learning, and traditional software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional software follows predefined rules. Machine learning enables systems to learn from data and improve over time. AI encompasses ML and broader capabilities like natural language processing and computer vision to automate decisions and mimic human-like intelligence.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical custom software project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Project timelines vary based on scope and complexity. A minimum viable product (MVP) can take 8–12 weeks, while enterprise systems may require several months. We work in agile sprints with regular demos so you can track progress and adjust priorities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies do you use for mobile app development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build native iOS (Swift) and Android (Kotlin) apps, as well as cross-platform solutions using React Native or Flutter. The choice depends on your performance needs, budget, and whether you need platform-specific features.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure the quality and security of your solutions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow enterprise standards including automated testing, code reviews, security audits, and adherence to OWASP guidelines. Our QA processes include unit, integration, and end-to-end testing before deployment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate with our existing systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. We design solutions that integrate with your current stack—whether that's ERPs, CRMs, databases, or APIs. We use REST, GraphQL, webhooks, and event-driven architectures to ensure seamless connectivity.",
        },
      },
    ],
  };

  return { serviceSchema, faqSchema };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

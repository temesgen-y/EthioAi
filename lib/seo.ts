import type { Metadata } from 'next';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ethiotech.ai';

export const SITE_NAME = 'EthioTech AI Solutions';

/** NAP: Name, Address, Phone - consistent for local SEO */
export const NAP = {
  name: SITE_NAME,
  address: {
    street: 'Bole Road',
    city: 'Addis Ababa',
    region: 'Addis Ababa',
    country: 'Ethiopia',
    countryCode: 'ET',
    postalCode: '',
  },
  phone: '+251 11 123 4567',
  email: 'contact@ethiotech.ai',
  geo: {
    latitude: 9.0320,
    longitude: 38.7469,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
} as const;

export const SEO_CONFIG = {
  defaultTitle: 'EthioTech AI Solutions | Enterprise-Grade AI & Custom Software Engineering',
  titleTemplate: '%s | EthioTech AI Solutions',
  defaultDescription:
    'Enterprise-grade AI and custom software engineering company in Africa. We build scalable solutions for businesses with cutting-edge technology.',
  defaultKeywords: [
    'AI Development Company Ethiopia',
    'Custom Software Development Africa',
    'Machine Learning Solutions Company',
    'Enterprise AI Services',
    'Software Engineering Company Addis Ababa',
    'AI company in Addis Ababa',
  ],
  author: SITE_NAME,
  locale: 'en_US',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  sameAs: [
    'https://www.linkedin.com/company/ethiotech',
    'https://github.com/ethiotech',
    'https://www.facebook.com/ethiotech',
    'https://www.instagram.com/ethiotech',
    'https://www.youtube.com/ethiotech',
  ],
} as const;

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: 'EthioTech AI',
  description: SEO_CONFIG.defaultDescription,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  foundingDate: '2014',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: NAP.address.city,
      addressCountry: NAP.address.countryCode,
    },
  },
  areaServed: [
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'Continent', name: 'Africa' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    addressRegion: NAP.address.region,
    addressCountry: NAP.address.countryCode,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${SITE_URL}/contact`,
    email: NAP.email,
    telephone: NAP.phone,
  },
  sameAs: SEO_CONFIG.sameAs,
} as const;

export function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const base = SITE_URL.replace(/\/$/, '');
  return cleanPath === '/' ? base : `${base}${cleanPath}`;
}

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
};

/** 55-60 chars title, 140-160 chars description */
export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogTitle,
  ogDescription,
}: PageMetaInput): Metadata {
  const canonical = buildCanonicalUrl(path);
  const metaTitle = title.length > 60 ? title.slice(0, 57) + '...' : title;
  const metaDesc =
    description.length > 160 ? description.slice(0, 157) + '...' : description;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [...SEO_CONFIG.defaultKeywords, ...keywords],
    alternates: { canonical },
    openGraph: {
      title: ogTitle ?? metaTitle,
      description: ogDescription ?? metaDesc,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? metaTitle,
      description: ogDescription ?? metaDesc,
    },
  };
}

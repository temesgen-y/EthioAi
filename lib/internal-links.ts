/** Internal linking strategy for topical authority */

export const SERVICE_LINKS = {
  customSoftware: {
    title: 'Custom Software Development',
    href: '/services/custom-software',
  },
  aiDevelopment: {
    title: 'AI Development',
    href: '/services/ai-development',
  },
  machineLearning: {
    title: 'Machine Learning',
    href: '/services/machine-learning',
  },
  mobileDevelopment: {
    title: 'Mobile Development',
    href: '/services/mobile-development',
  },
} as const;

const SLUG_TO_KEY: Record<string, string> = {
  'custom-software': 'customSoftware',
  'ai-development': 'aiDevelopment',
  'machine-learning': 'machineLearning',
  'mobile-development': 'mobileDevelopment',
};

/** Related services for cross-linking (excludes current) */
export function getRelatedServices(currentSlug: string) {
  const currentKey = SLUG_TO_KEY[currentSlug];
  return Object.entries(SERVICE_LINKS)
    .filter(([key]) => key !== currentKey)
    .map(([, v]) => v);
}

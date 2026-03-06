import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/services/custom-software', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/ai-development', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/machine-learning', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/mobile-development', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/careers', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/projects', priority: 0.8, changeFrequency: 'weekly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL.replace(/\/$/, '');

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path || ''}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

import { MetadataRoute } from 'next';
import { SEO_DEFAULTS } from '../constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_DEFAULTS.baseUrl;
  
  // Core routes mapping
  const coreRoutes = ['', '/about', '/plans', '/menu', '/corporate', '/faq', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  // Localized directories
  const localRoutes = ['kochi', 'trivandrum'].map((city) => ({
    url: `${baseUrl}/delivery/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  return [...coreRoutes, ...localRoutes];
}

import { MetadataRoute } from 'next';
import { SEO_DEFAULTS } from '../constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_DEFAULTS.baseUrl;
  
  // Actual routes in the workspace src/app directory
  const actualRoutes = [
    '',
    '/about',
    '/pricing',
    '/healthy-choices',
    '/healthy-choices/corporate',
    '/healthy-choices/weight-loss',
    '/healthy-choices/high-protein',
    '/healthy-choices/diabetic',
    '/healthy-choices/balanced',
    '/cafe-menu',
    '/contact',
    '/blog',
    '/faq',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  return actualRoutes;
}

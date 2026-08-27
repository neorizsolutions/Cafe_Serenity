import { MetadataRoute } from 'next';
import { SEO_DEFAULTS } from '../constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_DEFAULTS.baseUrl;
  
  // Actual routes in the workspace src/app directory
  const actualRoutes = [
    '',
    '/about',
    '/pricing',
    '/healthy-meals',
    '/healthy-meals/corporate',
    '/healthy-meals/weight-loss',
    '/healthy-meals/high-protein',
    '/healthy-meals/diabetic',
    '/healthy-meals/balanced',
    '/cafe-menu',
    '/contact',
    '/blog',
    '/delivery-areas',
    '/faq',
    '/how-flexi-freeze-works',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
    '/shipping-policy'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  return actualRoutes;
}

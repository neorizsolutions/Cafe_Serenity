import { MetadataRoute } from 'next';
import { SEO_DEFAULTS } from '../constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_DEFAULTS.baseUrl;
  
  // Actual routes in the workspace src/app directory
  const actualRoutes = [
    '',
    '/about',
    '/cafe-menu',
    '/contact',
    '/blog',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  return actualRoutes;
}

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import { MetadataRoute } from 'next';
// import { SEO_DEFAULTS } from '../constants';
// 
// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = SEO_DEFAULTS.baseUrl;
//   
//   // Actual routes in the workspace src/app directory
//   const actualRoutes = [
//     '',
//     '/about',
//     '/healthy-choices',
//     '/healthy-choices/corporate',
//     '/healthy-choices/weight-loss',
//     '/healthy-choices/high-protein',
//     '/healthy-choices/diabetic',
//     '/healthy-choices/balanced',
//     '/cafe-menu',
//     '/contact',
//     '/blog',
//     '/faq',
//   ].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date(),
//     changeFrequency: 'weekly' as const,
//     priority: route === '' ? 1.0 : 0.8,
//   }));
//   
//   return actualRoutes;
// }

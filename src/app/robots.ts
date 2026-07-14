import { MetadataRoute } from 'next';
import { SEO_DEFAULTS } from '../constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/checkout/',
        ],
      },
    ],
    sitemap: `${SEO_DEFAULTS.baseUrl}/sitemap.xml`,
  };
}

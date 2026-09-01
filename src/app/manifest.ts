import { MetadataRoute } from 'next';
import { BUSINESS_NAME } from '../constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: 'Serenity',
    description: 'Healthy choices & everyday café favourites in Kakkanad, Kochi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F4EE',
    theme_color: '#6E8064',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

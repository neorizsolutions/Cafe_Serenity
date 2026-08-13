import { NavigationItem, FooterSection, ContactDetails, SocialLinks } from '../types';

export const BUSINESS_NAME = 'Café Serenity';

export const NAVIGATION_LINKS: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Healthy Meals', href: '/#healthy-meals' },
  { label: 'Café Menu', href: '/#cafe-menu' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Location', href: '/#location' },
  { label: 'Contact', href: '/#contact' },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Menu & Programs',
    items: [
      { label: 'Healthy Meal Plans', href: '/#healthy-meals' },
      { label: 'Café Breakfast Menu', href: '/#cafe-menu' },
      { label: 'Weight Loss Plan', href: '/meal-plans/weight-loss' },
      { label: 'High Protein Gym Plan', href: '/meal-plans/high-protein' },
    ],
  },
  {
    title: 'Our Spot',
    items: [
      { label: 'Civil Station, Kakkanad', href: '/#location' },
      { label: 'Delivery Coverage', href: '/delivery-areas' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLinks = {
  whatsapp: 'https://wa.me/919388262626',
};

export const CONTACT_DETAILS: ContactDetails = {
  phone: '093882 62626',
  whatsapp: 'https://wa.me/919388262626',
  // No fake email address is specified
  address: {
    street: 'Near Civil Station, Echamuku, Kunnumpuram',
    locality: 'Kakkanad',
    city: 'Kochi',
    state: 'Kerala',
    zipCode: '682030',
  },
  geo: {
    lat: 10.0125,
    lng: 76.3485,
  },
  fssaiNumber: '21324005000123',
};

export const SEO_DEFAULTS = {
  title: 'Café Serenity | Healthy Meals & Everyday Café Favourites Kakkanad',
  description: 'Enjoy a calm food spot in Kakkanad, Kochi serving portion-controlled healthy meals and affordable morning café breakfast favourites. Fresh idli, vada, tea, coffee & diet plans.',
  baseUrl: 'https://cafeserenity.com',
  siteName: 'Café Serenity',
  ogImage: '/images/og-default.jpg',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
};

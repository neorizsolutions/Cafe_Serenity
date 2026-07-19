import { NavigationItem, FooterSection, ContactDetails, SocialLinks } from '../types';

export const BUSINESS_NAME = 'Alakapuri Restaurant';

export const NAVIGATION_LINKS: NavigationItem[] = [
  { label: 'Menu & Pricing', href: '/pricing' },
  { label: 'Meal Subscriptions', href: '/meal-plans' },
  { label: 'Corporate IT Catering', href: '/meal-plans/corporate' },
  { label: 'Our Story', href: '/about' },
  { label: 'Help & FAQ', href: '/faq' },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Culinary Offerings',
    items: [
      { label: 'Traditional Kerala Meals', href: '/meal-plans/weight-loss' },
      { label: 'Legendary Beef & Porotta', href: '/meal-plans/high-protein' },
      { label: 'Claypot Fish Curry & Tapioca', href: '/meal-plans/balanced' },
      { label: 'Malabar Biriyani Special', href: '/meal-plans/diabetic' },
    ],
  },
  {
    title: 'Service Locations',
    items: [
      { label: 'Kochi Delivery Coverage', href: '/delivery-areas' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLinks = {
  instagram: 'https://instagram.com/alakapurirestaurant',
  facebook: 'https://facebook.com/alakapurirestaurant',
  whatsapp: 'https://wa.me/919876543210',
};

export const CONTACT_DETAILS: ContactDetails = {
  phone: '+919876543210',
  whatsapp: 'https://wa.me/919876543210',
  email: 'hello@alakapurirestaurant.com',
  address: {
    street: 'Infopark Road, Near Civil Station, Echamuku',
    locality: 'Kakkanad',
    city: 'Kochi',
    state: 'Kerala',
    zipCode: '682030',
  },
  geo: {
    lat: 10.0158,
    lng: 76.3418,
  },
  fssaiNumber: '21324005000123',
};

export const SEO_DEFAULTS = {
  title: 'Alakapuri Restaurant | Authentic Kerala Dining & Delivery Kakkanad',
  description: 'Experience the finest traditional Kerala cuisine since 1970. Alakapuri Restaurant in Kakkanad, Kochi, offers authentic Sadya, Porotta, Beef Fry, Fish Curry, and Chicken Biriyani. Dine-in or order delivery.',
  baseUrl: 'https://alakapurimeals.com',
  siteName: 'Alakapuri Restaurant',
  ogImage: '/images/og-default.jpg',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
};

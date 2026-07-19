import { NavigationItem, FooterSection, ContactDetails, SocialLinks } from '../types';

export const BUSINESS_NAME = 'Alakapuri Healthy Meals';

export const NAVIGATION_LINKS: NavigationItem[] = [
  { label: 'Weekly Menu', href: '/pricing' },
  { label: 'Subscription Plans', href: '/meal-plans' },
  { label: 'Corporate Meals', href: '/meal-plans/corporate' },
  { label: 'Our Story', href: '/about' },
  { label: 'Help & FAQ', href: '/faq' },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Meal Programs',
    items: [
      { label: 'Weight Loss Plan', href: '/meal-plans/weight-loss' },
      { label: 'High Protein & Gym Plan', href: '/meal-plans/high-protein' },
      { label: 'Balanced Diet Box', href: '/meal-plans/balanced' },
      { label: 'Diabetic Care Program', href: '/meal-plans/diabetic' },
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
  instagram: 'https://instagram.com/alakapurihealthy',
  facebook: 'https://facebook.com/alakapurihealthy',
  whatsapp: 'https://wa.me/919876543210',
};

export const CONTACT_DETAILS: ContactDetails = {
  phone: '+919876543210',
  whatsapp: 'https://wa.me/919876543210',
  email: 'support@alakapurimeals.com',
  address: {
    street: 'Alakapuri Hub, Infopark Road, Near Civil Station, Echamuku',
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
  title: 'Alakapuri Healthy Meals | Calorie-Mapped Diet Box Delivery Kochi',
  description: 'Hygienic, dietician-designed, portion-controlled healthy meal boxes delivered daily across Kochi. Starts at ₹69. Subscribe on WhatsApp.',
  baseUrl: 'https://alakapurimeals.com',
  siteName: 'Alakapuri Healthy Meals',
  ogImage: '/images/og-default.jpg',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
};

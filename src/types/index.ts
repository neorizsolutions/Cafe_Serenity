export interface Meal {
  id: string;
  name: string;
  description: string;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: Category;
  tags: string[];
  allergens?: string[];
  ingredients?: string[];
}

export type Category = 'veg' | 'non-veg';

export interface Plan {
  id: string;
  name: string;
  description: string;
  pricePerMeal: number;
  startingPrice: number;
  features: string[];
  targetAudience: string;
  path: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  authorName: string;
  authorRole?: string;
  content: string;
  rating: number;
  goalBadge?: string;
  avatarUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'delivery' | 'billing' | 'nutrition' | 'general';
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  items: NavigationItem[];
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  whatsapp?: string;
}

export interface ContactDetails {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    zipCode: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  fssaiNumber: string;
}

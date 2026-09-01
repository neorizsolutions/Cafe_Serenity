export interface HealthyMealPlan {
  id: string;
  title: string;
  description: string;
  price: string;
  calories: string;
  protein: string;
  color: string;
  path: string;
  imageSrc?: string;
  features?: string[];
  tag?: string;
  popular?: boolean;
}

export interface CafeMenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
  category?: 'breakfast' | 'beverage' | 'snack' | 'main';
  availability?: boolean;
  imageSrc?: string;
  isVeg?: boolean;
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
  linkedin?: string;
}

export interface ContactDetails {
  phone: string;
  whatsapp: string;
  email?: string;
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

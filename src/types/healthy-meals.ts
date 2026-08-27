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

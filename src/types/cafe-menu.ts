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

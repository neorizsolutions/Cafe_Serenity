import { CafeMenuItem } from '@/types';

// Kerala tea-time snacks, all priced at ₹12 each.
export const SNACK_NAMES = [
  'Cutlet', 'Vada', 'Samosa', 'Pazham Pori', 'Bonda',
  'Parippu Vada', 'Ulli Vada', 'Sukhiyan',
  'Kozhukatta', 'Ela Ada', 'Mulaku Bajji',
  'Poricha Pathiri', 'Egg Bajji', 'Idli', 'Kesari',
];
// Add imageSrc: '/images/your-photo.jpg' to an item when its photo is ready.
// Until then, MenuCard renders a neutral image placeholder.

export const BIRIYANI_NAMES = ['Hyderabadi Biriyani', 'Thalappakatti Biriyani', 'Chettinad Biriyani', 'Ravuthar Biriyani', 'Ambur Biriyani', 'Dhilli Darbar Biriyani', 'Kozhikode Biriyani', 'Malabar Biriyani'];
export const CAFE_ITEMS: CafeMenuItem[] = [
  ...BIRIYANI_NAMES.map((name): CafeMenuItem => ({
    id: name.toLowerCase().replaceAll(' ', '-'), name, category: 'biriyani',
    price: 90, portions: { half: 90, full: 150 },
    description: 'A familiar favourite, prepared with care.',
    imageSrc: `/images/${name.toLowerCase().replaceAll(' ', '-')}.png`,
    portionImages: {
      half: name === 'Hyderabadi Biriyani' ? '/images/hyderabadi-biriyani-half-matched.png' : `/images/${name.toLowerCase().replaceAll(' ', '-')}-half.png`,
      full: `/images/${name.toLowerCase().replaceAll(' ', '-')}.png`,
    },
  })),
  ...SNACK_NAMES.map((name): CafeMenuItem => ({ id: name.toLowerCase().replaceAll(' ', '-'), name, category: 'snacks', price: 12, description: name === 'Kesari' ? 'Golden semolina sweet for a little tea-time treat.' : 'A Kerala evening snack for your tea-time break.', imageSrc: name === 'Ela Ada' ? '/images/ela-ada-wrapped.png' : `/images/${name.toLowerCase().replaceAll(' ', '-')}.png` })),
  { id: 'egg-puffs', name: 'Egg Puffs', category: 'snacks', price: 15, description: 'Golden egg puffs for a quick café bite.', imageSrc: '/images/egg-puffs-menu.png' },
];
export const menuPrice = (item: CafeMenuItem) => item.portions ? `Half ₹${item.portions.half} / Full ₹${item.portions.full}` : `₹${item.price} each`;

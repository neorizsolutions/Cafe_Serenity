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
const BIRIYANI_DESCRIPTIONS: Record<string, string> = {
  "Hyderabadi Biriyani": "Aromatic and richly flavoured, a classic choice for a satisfying Biriyani lunch.",
  "Thalappakatti Biriyani": "A Tamil Nadu favourite with bold flavour and a character all its own.",
  "Chettinad Biriyani": "A full-flavoured southern favourite for those who enjoy a more robust Biriyani.",
  "Ravuthar Biriyani": "A comforting regional favourite with a rich, savoury character.",
  "Ambur Biriyani": "An inviting Tamil Nadu style, bringing its own flavour to your Biriyani break.",
  "Dhilli Darbar Biriyani": "A hearty choice with a rich, warming flavour for a leisurely lunch.",
  "Kozhikode Biriyani": "A Kozhikode favourite that brings the familiar comfort of Kerala Biriyani to your plate.",
  "Malabar Biriyani": "A coastal Kerala favourite for an aromatic and satisfying meal."
};

export const CAFE_ITEMS: CafeMenuItem[] = [
  ...BIRIYANI_NAMES.map((name): CafeMenuItem => ({
    id: name.toLowerCase().replaceAll(' ', '-'), name, category: 'biriyani',
    price: 90, portions: { half: 90, full: 150 },
    description: BIRIYANI_DESCRIPTIONS[name],
    imageSrc: `/images/menu-hd/${name.toLowerCase().replaceAll(' ', '-')}.webp`,
  })),
  ...SNACK_NAMES.map((name): CafeMenuItem => ({ id: name.toLowerCase().replaceAll(' ', '-'), name, category: 'snacks', price: 12, description: name === 'Kesari' ? 'Golden semolina sweet for a little tea-time treat.' : 'A Kerala evening snack for your tea-time break.', imageSrc: `/images/menu-hd/${name.toLowerCase().replaceAll(' ', '-')}.webp` })),
  { id: 'egg-puffs', name: 'Egg Puffs', category: 'snacks', price: 15, description: 'Golden egg puffs for a quick café bite.', imageSrc: '/images/menu-hd/egg-puffs.webp' },
];
export const menuPrice = (item: CafeMenuItem) => item.portions ? `Half ₹${item.portions.half} / Full ₹${item.portions.full}` : `₹${item.price} each`;

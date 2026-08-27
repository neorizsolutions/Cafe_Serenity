import { CafeMenuItem } from '@/types';

export const CAFE_ITEMS: CafeMenuItem[] = [
  {
    id: 'idli-vada-combo',
    name: 'Idli Vada Combo',
    price: 40,
    description: 'Two soft steamed rice cakes and one crispy lentil donut, served with fresh coconut chutney and hot sambar.',
    tag: 'Best Seller',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'idli',
    name: 'Steamed Idli (3 pcs)',
    price: 30,
    description: 'Piping hot, feather-light steamed rice cakes served with sambar and spicy podi chutney.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'vada',
    name: 'Crispy Medu Vada (2 pcs)',
    price: 30,
    description: 'Golden-fried, crispy black-lentil donuts spiced with ginger, green chillies, and curry leaves.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'dosa',
    name: 'Ghee Roast Dosa',
    price: 50,
    description: 'Golden-brown, crispy thin rice and lentil crepe frothed with pure cow ghee. Served hot with coconut chutney and sambar.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'puttu',
    name: 'Steamed Rice Puttu',
    price: 30,
    description: 'Traditional layered steamed rice flour and grated coconut cylinders, served hot with banana or curry.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'appam',
    name: 'Palappam (2 pcs)',
    price: 30,
    description: 'Soft-centered steamed rice and coconut milk pancakes with crispy lace edges, served with hot stew.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'pongal',
    name: 'Ghee Ven Pongal',
    price: 40,
    description: 'Traditional slow-cooked rice and yellow lentil mash tempered with black pepper, cumin, ginger, and cashews in pure cow ghee.',
    tag: 'Morning Special',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'kichadi',
    name: 'Rava Kichadi',
    price: 35,
    description: 'Savory semolina porridge cooked with fresh local garden vegetables, seasoned with mustard seeds and roasted cashews.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'upma',
    name: 'Classic Rava Upma',
    price: 30,
    description: 'Simple, comforting semolina breakfast dish cooked with onions, ginger, and curry leaves, served warm with chutney.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'kesari',
    name: 'Ghee Rava Kesari',
    price: 30,
    description: 'A sweet dessert made of roasted semolina, sugar, and pure ghee, flavored with green cardamom and saffron.',
    category: 'breakfast',
    isVeg: true,
    availability: true
  },
  {
    id: 'parotta',
    name: 'Kerala Parotta (2 pcs)',
    price: 30,
    description: 'Multi-layered, flaky, soft flatbread beaten to perfection and served with warm vegetable korma.',
    category: 'main',
    isVeg: true,
    availability: true
  },
  {
    id: 'kerala-meals',
    name: 'Nadan Kerala Meals',
    price: 75,
    description: 'Authentic lunch meal featuring boiled matta rice, sambar, pulissery, moru, thoran, mezhukkupuratti, pickle, and papadam.',
    category: 'main',
    isVeg: true,
    availability: true
  },
  {
    id: 'fish-curry',
    name: 'Nadan Fish Curry',
    price: 100,
    description: 'Spicy and tangy traditional fish curry slow-cooked with coccum (kodampuli), coconut milk, and curry leaves.',
    category: 'main',
    isVeg: false,
    availability: true
  },
  {
    id: 'chicken-fry',
    name: 'Kochi Chicken Fry',
    price: 120,
    description: 'Crispy, deep-fried chicken portions marinated in local spices, ginger, garlic, and curry leaves.',
    category: 'main',
    isVeg: false,
    availability: true
  },
  {
    id: 'chicken-biriyani',
    name: 'Malabar Chicken Biriyani',
    price: 140,
    description: 'Fragrant kaima rice cooked in pure ghee, layered with spicy marinated chicken gravy, fried onions, and cashews.',
    tag: 'House Special',
    category: 'main',
    isVeg: false,
    availability: true
  },
  {
    id: 'pazham-pori',
    name: 'Pazham Pori (Banana Fritters)',
    price: 20,
    description: 'Golden, crispy sweet banana fritters made from ripe local nendran bananas, an absolute Kochi teatime classic.',
    category: 'snack',
    isVeg: true,
    availability: true
  },
  {
    id: 'samosa',
    name: 'Vegetable Samosa (2 pcs)',
    price: 20,
    description: 'Crispy triangular pastries filled with seasoned potatoes, green peas, and local spices, fried golden brown.',
    category: 'snack',
    isVeg: true,
    availability: true
  },
  {
    id: 'coffee',
    name: 'Filter Coffee',
    price: 15,
    description: 'Authentic strong South Indian chicory-blended filter coffee frothed with boiling hot milk.',
    tag: 'Classic Brew',
    category: 'beverage',
    isVeg: true,
    imageSrc: '/images/slide_cafe_coffee.png',
    availability: true
  },
  {
    id: 'tea',
    name: 'Kochi Cardamom Tea',
    price: 12,
    description: 'Freshly brewed milk tea infused with crushed green cardamom and local tea leaves.',
    category: 'beverage',
    isVeg: true,
    imageSrc: '/images/slide_cafe_coffee.png',
    availability: true
  }
];

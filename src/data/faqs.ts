import { BIRIYANI_NAMES, SNACK_NAMES, CAFE_ITEMS, menuPrice } from '@/data/cafe-menu/items';
import { CONTACT_DETAILS } from '@/constants';
export const FAQS = [
 { question: 'What Biriyani varieties are available?', answer: BIRIYANI_NAMES.join(', ') + '.' },
 { question: 'What are the Half and Full Biriyani prices?', answer: menuPrice(CAFE_ITEMS[0]) + ' for every variety.' },
 { question: 'What snacks are available?', answer: SNACK_NAMES.join(', ') + ' and Egg Puffs.' },
 { question: 'How much does a regular snack cost?', answer: menuPrice(CAFE_ITEMS[8]) + '.' },
 { question: 'What is the price of Egg Puffs?', answer: menuPrice(CAFE_ITEMS.find(item => item.id === 'egg-puffs')!) + '.' },
 { question: 'How can I contact Café Serenity?', answer: 'Call ' + CONTACT_DETAILS.phone + ' or use the WhatsApp link on our Contact page.' },
];

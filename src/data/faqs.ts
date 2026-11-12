import { BIRIYANI_NAMES, SNACK_NAMES, CAFE_ITEMS, menuPrice } from '@/data/cafe-menu/items';
import { CONTACT_DETAILS } from '@/constants';
export const FAQS = [
 { question: 'What Biriyani varieties are available?', answer: BIRIYANI_NAMES.join(', ') + '. Check with the café for today’s availability.' },
 { question: 'What are the Half and Full Biriyani prices?', answer: menuPrice(CAFE_ITEMS[0]) + ' for every variety. The menu lets you switch between the two portion illustrations.' },
 { question: 'What snacks and sweets are on the menu?', answer: SNACK_NAMES.join(', ') + ' and Egg Puffs.' },
 { question: 'How much does a snack cost?', answer: 'Regular snacks and sweets are ₹12 each. Egg Puffs are ₹15 each. Snack and sweet prices are per piece.' },
 { question: 'Where can I find Café Serenity?', answer: `${CONTACT_DETAILS.address.street}, ${CONTACT_DETAILS.address.locality}, ${CONTACT_DETAILS.address.city}, ${CONTACT_DETAILS.address.state} ${CONTACT_DETAILS.address.zipCode}. Use the directions link on our Contact page to plan your visit.` },
 { question: 'What are your opening hours?', answer: 'Please call or message the café for current opening hours before you visit. You can reach us at ' + CONTACT_DETAILS.phone + '.' },
 { question: 'How do I check whether a dish is available today?', answer: 'Use our WhatsApp link or call the café team. The website shows our menu range; the team can confirm the items available for your visit.' },
 { question: 'Can I ask about ingredients or food allergies?', answer: 'Yes. Speak directly with the café team about ingredients, food allergies and dietary preferences before choosing a dish. Do not rely on the photographs to identify every ingredient.' },
 { question: 'Can I order or pay through this website?', answer: 'This website is for exploring our food and contacting the café. It does not take payments or confirm orders. Speak with the team to discuss what you need.' },
 { question: 'Do the photographs show the exact serving?', answer: 'The food and portion images are illustrative. Biriyani prices apply to the selected Half or Full portion. Snack prices apply to one piece.' },
 { question: 'How can I contact the café?', answer: 'Call ' + CONTACT_DETAILS.phone + ' or open WhatsApp from our Contact page. You can ask about menu choices, current opening hours and availability.' },
];

export type MenuCollection = 'biriyani' | 'savouries' | 'sweets';
const sweetIds = new Set(['kesari', 'sukhiyan', 'kozhukatta', 'ela-ada']);

/** Presentation collections retain the original business/menu categories. */
export function getMenuCollection(item: { id: string; category: string }): MenuCollection {
  if (item.category === 'biriyani') return 'biriyani';
  return sweetIds.has(item.id) ? 'sweets' : 'savouries';
}

export const MENU_COLLECTIONS = [
  { id: 'biriyani', number: '01', label: 'Biriyani', title: 'A proper little feast.', description: 'Eight regional favourites. One good reason to slow down. Choose your style, then make it Half or Full.' },
  { id: 'savouries', number: '02', label: 'Savouries', title: 'Made for the in-between.', description: 'Golden bites and familiar Kerala favourites. A little crunch for your next café break.' },
  { id: 'sweets', number: '03', label: 'Sweets', title: 'Save a little room.', description: 'Kesari, Sukhiyan, Kozhukatta and Ela Ada. A sweet finish, or a moment all its own.' },
] as const;

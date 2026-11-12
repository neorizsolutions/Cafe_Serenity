'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';
import { getMenuCollection, MENU_COLLECTIONS } from '@/data/cafe-menu/collections';
import MenuCard from './MenuCard';

const categories = [{ id: 'all', label: 'All dishes' }, ...MENU_COLLECTIONS] as const;
type Category = (typeof categories)[number]['id'];

export default function MenuExplorer() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const needle = query.trim().toLocaleLowerCase();
  const items = CAFE_ITEMS.filter(item => (category === 'all' || getMenuCollection(item) === category) && `${item.name} ${item.description}`.toLocaleLowerCase().includes(needle));
  function reset() { setQuery(''); setCategory('all'); }
  function collectionSection(collection: typeof MENU_COLLECTIONS[number]) {
    const dishes = items.filter(item => getMenuCollection(item) === collection.id);
    if (!dishes.length) return null;
    return <section key={collection.id} id={collection.id === 'biriyani' ? 'category-biriyani' : `collection-${collection.id}`} className="editorial-menu-collection" data-collection={collection.id} aria-labelledby={`heading-${collection.id}`}>
      <div className="editorial-collection-intro"><h2 id={`heading-${collection.id}`}>{collection.label}</h2></div>
      <div className="editorial-menu-grid">{dishes.map(item => <MenuCard key={item.id} item={item} />)}</div>
    </section>;
  }
  return <>
    <div className="menu-discovery editorial-discovery"><div className="menu-discovery-inner">
      <div className="menu-search"><label htmlFor="menu-search">Search the menu</label><div className="menu-search-field"><Search size={20} aria-hidden="true" /><input id="menu-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try Malabar, vada, or kesari" autoComplete="off" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear menu search"><X size={18} aria-hidden="true" /></button>}</div></div>
      <div className="menu-filter-group" role="group" aria-label="Filter menu category">{categories.map(option => <button key={option.id} type="button" aria-pressed={category === option.id} onClick={() => setCategory(option.id)}>{option.label}</button>)}</div>
    </div></div>
    <div className="editorial-menu-results"><p className="menu-search-status" role="status" aria-live="polite">{needle || category !== 'all' ? `${items.length} ${items.length === 1 ? 'dish' : 'dishes'} found${needle ? ` for “${query.trim()}”` : ''}.` : ''}</p>
      {!items.length ? <div className="menu-empty"><Search size={32} aria-hidden="true" /><h2>No dishes found this time.</h2><p>Try a shorter name or explore all our favourites.</p><button type="button" className="brand-button" onClick={reset}>Show the full menu <span aria-hidden="true">↗</span></button></div> : <>{collectionSection(MENU_COLLECTIONS[0])}<div id="category-snacks" className="editorial-snack-collections">{MENU_COLLECTIONS.slice(1).map(collectionSection)}</div></>}
    <p className="editorial-image-note">Menu images are illustrative. Prices are per portion or piece.</p></div>
  </>;
}

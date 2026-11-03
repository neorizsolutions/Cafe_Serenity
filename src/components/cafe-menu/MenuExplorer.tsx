'use client';

import { useState } from 'react';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';
import MenuCard from './MenuCard';
import MenuCharacter from '@/components/common/MenuCharacter';

const categories = [{ id: 'all', label: 'All favourites' }, { id: 'biriyani', label: 'Biriyani' }, { id: 'snacks', label: 'Snacks & sweets' }, { id: 'sweets', label: 'Something sweet' }] as const;
const sweetIds = new Set(['kesari', 'sukhiyan', 'kozhukatta', 'ela-ada']);
export default function MenuExplorer() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');
  const needle = query.trim().toLocaleLowerCase();
  const items = CAFE_ITEMS.filter(item => (category === 'all' || (category === 'sweets' ? sweetIds.has(item.id) : item.category === category)) && `${item.name} ${item.description}`.toLocaleLowerCase().includes(needle));
  function reset() { setQuery(''); setCategory('all'); }
  return <>
    <div className="menu-discovery"><div className="menu-discovery-inner">
      <div className="menu-search"><label htmlFor="menu-search">Find your favourite</label><div className="menu-search-field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input id="menu-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try Biriyani, Vada or Kesari…" autoComplete="off" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear menu search">✕</button>}</div></div>
      <div className="menu-filter-group" role="group" aria-label="Filter menu category">{categories.map(option => <button key={option.id} type="button" aria-pressed={category === option.id} onClick={() => setCategory(option.id)}>{option.label}</button>)}</div>
    </div></div>
    <div className="menu-results-wrap"><p className="menu-search-status" role="status" aria-live="polite">{needle || category !== 'all' ? `${items.length} ${items.length === 1 ? 'favourite' : 'favourites'} found${needle ? ` for “${query.trim()}”` : ''}.` : 'Take a look around. Choose a portion, find a snack, make it your kind of meal.'}</p>
      {!items.length ? <div className="menu-empty"><span aria-hidden="true">⌕</span><h2>No dishes found this time.</h2><p>Try a shorter name or explore all our favourites.</p><button type="button" className="brand-button" onClick={reset}>Show the full menu <span aria-hidden="true">↗</span></button></div> : ['biriyani', 'snacks'].map(group => {
        const dishes = items.filter(item => item.category === group); if (!dishes.length) return null;
        return <section key={group} id={`category-${group}`} className="menu-results-section"><div className="menu-category-intro"><div className="menu-collection-heading"><h2>{group === 'biriyani' ? 'A plate of Biriyani' : category === 'sweets' ? 'A little something sweet' : 'Snacks, sweets & little bites'}</h2><p>{group === 'biriyani' ? 'Eight styles. Half or Full. Switch portions to take a closer look.' : 'Savoury favourites and sweet treats, with each-piece prices shown clearly.'}</p></div>{category !== 'sweets' && <div className="menu-category-character"><MenuCharacter kind={group === 'biriyani' ? 'biriyani' : 'vada'} /></div>}</div><div className="menu-results-grid">{dishes.map(item => <MenuCard key={item.id} item={item} />)}</div></section>;
      })}
    </div>
  </>;
}

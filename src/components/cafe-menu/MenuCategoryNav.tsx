'use client';

import { useEffect, useState } from 'react';

const categories = [{ id: 'biriyani', label: 'Biriyani' }, { id: 'snacks', label: 'Kerala Snacks' }];

export default function MenuCategoryNav({ homepage = false }: { homepage?: boolean }) {
  const [active, setActive] = useState('biriyani');
  const prefix = homepage ? '' : 'category-';
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id.replace(prefix, ''));
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
    for (const category of categories) {
      const element = document.getElementById(prefix + category.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [prefix]);
  return (
    <nav className="menu-category-links" aria-label={homepage ? 'Homepage menu categories' : 'Menu categories'}>
      {categories.map(category => <a key={category.id} href={`#${prefix}${category.id}`} aria-current={active === category.id ? 'location' : undefined} className="menu-category-link" onClick={() => setActive(category.id)}>{category.label}<span aria-hidden="true">↗</span></a>)}
    </nav>
  );
}

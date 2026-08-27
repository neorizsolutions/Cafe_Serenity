'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';
import { CONTACT_DETAILS } from '@/constants';
import { cn } from '@/lib/utils';

export default function CafeMenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'breakfast' | 'main' | 'snack' | 'beverage'>('all');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  // Categories metadata
  const categoriesList = [
    { id: 'all', label: 'All Dishes' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'main', label: 'Kerala Specials' },
    { id: 'snack', label: 'Snacks' },
    { id: 'beverage', label: 'Hot Drinks' }
  ] as const;

  // Filter items based on search query, category, and veg/non-veg filter
  const filteredItems = CAFE_ITEMS.filter((item) => {
    // 1. Search Query Match
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Category Match
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    // 3. Veg / Non-Veg Match
    const matchesVeg = 
      vegFilter === 'all' || 
      (vegFilter === 'veg' && item.isVeg === true) || 
      (vegFilter === 'non-veg' && item.isVeg === false);

    return matchesSearch && matchesCategory && matchesVeg;
  });

  return (
    <>
      {/* 1. Café Menu Hero */}
      <Section bg="muted" className="relative border-b border-border py-16 md:py-24 overflow-hidden">
        {/* Background ambient radial accents */}
        <div className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.02)_0%,transparent_70%)] blur-3xl" />
        
        <Container className="text-center space-y-4 max-w-3xl mx-auto">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold uppercase font-black">
            Café Serenity Kakkanad
          </Typography>
          <Typography variant="h1" className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Our Café Menu
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
            From Kerala breakfast favourites to hot biriyani, local tiffins, and classic filter coffee. Prepared fresh daily at our Kakkanad spot.
          </Typography>
        </Container>
      </Section>

      {/* 2. Interactive Search & Filters Section */}
      <Section bg="white" className="py-8 border-b border-border sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md">
        <Container className="space-y-6 max-w-5xl mx-auto">
          {/* Controls row */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input (Accessible Target >= 44px) */}
            <div className="relative w-full md:max-w-md group">
              <input
                type="text"
                placeholder="Search dosa, idli, biriyani..."
                aria-label="Search menu items"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 px-4 pr-10 rounded-full border border-border bg-background text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-2.5 h-6 w-6 text-muted-foreground hover:text-foreground flex items-center justify-center rounded-full bg-secondary/50"
                  aria-label="Clear search query"
                >
                  <svg className="h-3 w-3 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <svg
                  className="absolute right-4 top-3.5 h-4 w-4 stroke-current text-muted-foreground"
                  fill="none"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>

            {/* Veg / Non-Veg Filters (Accessible Target >= 44px) */}
            <div className="flex bg-secondary/35 rounded-full p-1 border border-border w-full md:w-auto justify-between sm:justify-start">
              {([
                { id: 'all', label: 'All Food' },
                { id: 'veg', label: 'Veg' },
                { id: 'non-veg', label: 'Non-Veg' }
              ] as const).map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setVegFilter(filter.id)}
                  className={cn(
                    'min-h-[38px] px-5 rounded-full text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold',
                    vegFilter === filter.id 
                      ? 'bg-brand-dark text-white' 
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs Scrollbar (Accessible Target >= 44px) */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0">
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'min-h-[40px] px-5 rounded-full text-xs font-bold border transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold',
                  selectedCategory === cat.id
                    ? 'border-brand-gold bg-brand-gold/10 text-brand-gold font-extrabold shadow-sm'
                    : 'border-border bg-background hover:bg-secondary/40 text-muted-foreground hover:text-foreground'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Menu Grid */}
      <Section bg="white" className="py-12 min-h-[400px]">
        <Container className="max-w-5xl mx-auto space-y-12">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <MotionWrapper key={item.id} animation="fade-up" transition={{ delay: idx * 0.03, duration: 0.35, ease: 'easeOut' }}>
                  <div className="group relative bg-card border border-border/60 hover:border-brand-gold/25 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all duration-300 flex flex-col justify-between h-full">
                    
                    {/* Visual Container */}
                    <div>
                      {item.imageSrc ? (
                        <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
                            loading={idx < 6 ? 'eager' : 'lazy'}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {item.tag && (
                            <span className="absolute top-3 left-3 bg-brand-gold text-brand-dark px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      ) : (
                        /* Clean Fallback placeholder for items without dedicated photographs */
                        <div className="relative aspect-[16/10] w-full bg-brand-dark/5 dark:bg-card border-b border-border/50 flex flex-col items-center justify-center p-6 text-center select-none">
                          <span className="text-3xl text-brand-gold/60 mb-2 opacity-95">🍛</span>
                          <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest block">Café Serenity</span>
                          <span className="text-[9px] text-muted-foreground font-semibold mt-1">Authentic Local Preparation</span>
                          {item.tag && (
                            <span className="absolute top-3 left-3 bg-brand-gold text-brand-dark px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Content panel */}
                      <div className="p-5 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-base font-bold text-foreground group-hover:text-brand-gold transition-colors tracking-tight line-clamp-1">
                            {item.name}
                          </h3>
                          <span className="text-sm font-black text-foreground shrink-0 mt-0.5">
                            ₹{item.price}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status panel */}
                    <div className="px-5 pb-5 pt-3 border-t border-border/40 flex items-center justify-between">
                      {/* Veg/Non-Veg badge */}
                      {item.isVeg !== undefined ? (
                        <div className="flex items-center gap-1.5">
                          <span className={cn(
                            'h-2.5 w-2.5 rounded-full shrink-0 border border-white/20',
                            item.isVeg ? 'bg-emerald-600 shadow-[0_0_4px_rgba(5,150,105,0.4)]' : 'bg-rose-600 shadow-[0_0_4px_rgba(225,29,72,0.4)]'
                          )} />
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                            {item.isVeg ? 'Veg' : 'Non-Veg'}
                          </span>
                        </div>
                      ) : (
                        <div />
                      )}

                      <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/80">
                        {item.category}
                      </span>
                    </div>

                  </div>
                </MotionWrapper>
              ))}
            </div>
          ) : (
            /* Clear Search Empty State */
            <div className="text-center py-16 space-y-4 max-w-sm mx-auto">
              <span className="text-4xl block">🔍</span>
              <Typography variant="h3" className="text-base font-bold text-foreground">No dishes found</Typography>
              <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium leading-relaxed">
                We couldn&apos;t find any items matching &quot;{searchQuery}&quot;. Try adjusting your keywords or category filters.
              </Typography>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setVegFilter('all');
                }}
                className="min-h-[44px] px-6 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-bold text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* 4. Bottom Cross-Navigation Banner */}
          <div className="rounded-3xl border border-brand-gold/15 bg-brand-gold/[0.01] p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between transition-all duration-300 hover:border-brand-gold/30">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-base font-bold text-foreground">Looking for healthier daily diet plans?</h4>
              <p className="text-xs text-muted-foreground max-w-xl leading-relaxed font-medium">
                Explore Café Serenity portion-scaled, dietitian-approved subscription boxes. Target weight loss deficits, high-protein recovery, or glucose control menus delivered daily in Kakkanad.
              </p>
            </div>
            <Link
              href="/healthy-meals"
              className="min-h-[44px] px-6 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark flex items-center justify-center shrink-0 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              Explore Healthy Meals →
            </Link>
          </div>

          {/* Location & Visit CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-border/40">
            <Link
              href="/#location"
              className="w-full sm:w-auto min-h-[44px] px-8 rounded-full bg-brand-dark hover:bg-brand-dark/95 text-xs font-bold text-white flex items-center justify-center shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              Visit Café Serenity
            </Link>
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="w-full sm:w-auto min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-semibold text-foreground flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              Call Concierge
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}

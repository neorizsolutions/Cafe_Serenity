'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';
import { cn } from '@/lib/utils';

export default function CafeMenuSection() {
  // Select 6 representative dishes for the homepage preview
  const PREVIEW_IDS = [
    'idli-vada-combo',
    'dosa',
    'puttu',
    'kerala-meals',
    'chicken-biriyani',
    'coffee'
  ];

  const previewItems = CAFE_ITEMS.filter((item) => PREVIEW_IDS.includes(item.id))
    // Keep the order of PREVIEW_IDS
    .sort((a, b) => PREVIEW_IDS.indexOf(a.id) - PREVIEW_IDS.indexOf(b.id));

  return (
    <Section bg="muted" className="relative border-b border-border py-16 md:py-24" id="cafe-menu">
      {/* Background ambient accents */}
      <div className="absolute top-[10%] right-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />

      <Container className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
            Everyday Favourites
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            From Our Café Kitchen
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium">
            Savor authentic Kerala breakfast dishes, hearty lunch meals, and frothed morning drinks prepared fresh daily in Kakkanad.
          </Typography>
        </div>

        {/* 6 Representative Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {previewItems.map((item, idx) => (
            <MotionWrapper key={item.id} animation="fade-up" transition={{ delay: idx * 0.05, duration: 0.4, ease: 'easeOut' }}>
              <div className="group relative bg-card border border-border/60 hover:border-brand-gold/25 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-all duration-300 flex flex-col justify-between h-full">
                
                <div>
                  {item.imageSrc ? (
                    <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.tag && (
                        <span className="absolute top-3 left-3 bg-brand-gold text-brand-dark px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  ) : (
                    /* Fallback placeholder visual for dishes without custom pictures */
                    <div className="relative aspect-[16/10] w-full bg-brand-dark/5 dark:bg-card border-b border-border/50 flex flex-col items-center justify-center p-6 text-center select-none">
                      <span className="text-3xl text-brand-gold/60 mb-1 opacity-95">🍛</span>
                      <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest block">Café Serenity</span>
                      <span className="text-[9px] text-muted-foreground font-semibold mt-1">Authentic Local Preparation</span>
                      {item.tag && (
                        <span className="absolute top-3 left-3 bg-brand-gold text-brand-dark px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Title & Price Row */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-base font-bold text-foreground group-hover:text-brand-gold transition-colors tracking-tight line-clamp-1">
                        {item.name}
                      </h4>
                      <span className="text-sm font-black text-foreground shrink-0 mt-0.5">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Badges */}
                <div className="px-5 pb-5 pt-3 border-t border-border/40 flex items-center justify-between">
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

        {/* View Full Café Menu Button (touch target >= 44px) */}
        <div className="text-center pt-4">
          <Link
            href="/cafe-menu"
            className="inline-flex min-h-[44px] px-8 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            View Full Café Menu &rarr;
          </Link>
        </div>

        {/* Café Highlights */}
        <div className="rounded-3xl border border-brand-gold/15 bg-brand-gold/[0.01] p-6 max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-sm font-bold text-foreground">Early Morning Commuters & Kakkanad Locals</h4>
            <p className="text-xs text-muted-foreground max-w-xl leading-relaxed">
              We open by 5:00 AM daily for office workers, students, and morning walkers seeking quick, fresh, and pocket-friendly home-style breakfast. No pre-ordering required for walk-ins!
            </p>
          </div>
          <Link
            href="#location"
            className="min-h-[44px] px-6 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark shadow-sm flex items-center justify-center shrink-0 transition-colors text-center"
          >
            Get Location Directions
          </Link>
        </div>
      </Container>
    </Section>
  );
}

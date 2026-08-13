'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
}

const CAFE_ITEMS: MenuItem[] = [
  {
    id: 'idli-vada-combo',
    name: 'Idli Vada Combo',
    price: 40,
    description: 'Two soft steamed rice cakes and one crispy lentil donut, served with fresh coconut chutney and hot sambar.',
    tag: 'Best Seller',
  },
  {
    id: 'idli',
    name: 'Steamed Idli (3 pcs)',
    price: 30,
    description: 'Piping hot, feather-light steamed rice cakes served with sambar and spicy podi chutney.',
  },
  {
    id: 'vada',
    name: 'Crispy Medu Vada (2 pcs)',
    price: 30,
    description: 'Golden-fried, crispy black-lentil donuts spiced with ginger, green chillies, and curry leaves.',
  },
  {
    id: 'pongal',
    name: 'Ghee Ven Pongal',
    price: 40,
    description: 'Traditional slow-cooked rice and yellow lentil mash tempered with black pepper, cumin, ginger, and cashews in pure cow ghee.',
    tag: 'Morning Special',
  },
  {
    id: 'kichadi',
    name: 'Rava Kichadi',
    price: 35,
    description: 'Savory semolina porridge cooked with fresh local garden vegetables, seasoned with mustard seeds and roasted cashews.',
  },
  {
    id: 'upma',
    name: 'Classic Rava Upma',
    price: 30,
    description: 'Simple, comforting semolina breakfast dish cooked with onions, ginger, and curry leaves, served warm with chutney.',
  },
  {
    id: 'kesari',
    name: 'Ghee Rava Kesari',
    price: 30,
    description: 'A sweet dessert made of roasted semolina, sugar, and pure ghee, flavored with green cardamom and saffron.',
  },
  {
    id: 'coffee',
    name: 'Filter Coffee',
    price: 15,
    description: 'Authentic strong South Indian chicory-blended filter coffee frothed with boiling hot milk.',
    tag: 'Classic Brew',
  },
  {
    id: 'tea',
    name: 'Kochi Cardamom Tea',
    price: 12,
    description: 'Freshly brewed milk tea infused with crushed green cardamom and local tea leaves.',
  },
];

export default function CafeMenu() {
  return (
    <Section bg="muted" className="relative border-b border-border py-16 md:py-24" id="cafe-menu">
      {/* Background ambient accents */}
      <div className="absolute top-[10%] right-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />

      <Container className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
            Freshly Served From 5:00 AM
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Morning Favourites Café Menu
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium">
            A budget-friendly Kakkanad local spot. Taste simple, fresh, and quick tiffins served hot with authentic filter coffee and tea.
          </Typography>
        </div>

        {/* Breakfast & Tiffins Category */}
        <div className="space-y-6">
          <div className="border-b border-border/40 pb-2">
            <h3 className="text-lg font-bold text-brand-gold uppercase tracking-wider">Breakfast & Warm Tiffins</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAFE_ITEMS.filter(item => item.id !== 'coffee' && item.id !== 'tea').map((item, idx) => (
              <MotionWrapper key={item.id} animation="fade-up" transition={{ delay: idx * 0.05, duration: 0.4, ease: 'easeOut' }}>
                <div className="group relative bg-card hover:bg-secondary/20 dark:hover:bg-secondary/5 border border-border/60 hover:border-brand-gold/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Badge & Price Row */}
                    <div className="flex items-start justify-between">
                      <div>
                        {item.tag ? (
                          <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-brand-gold uppercase tracking-wider mb-2">
                            {item.tag}
                          </span>
                        ) : (
                          <div className="h-5" />
                        )}
                        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-brand-gold transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className="text-stone-200 text-base font-extrabold bg-stone-900 px-2.5 py-1 rounded-lg border border-border/40 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>

        {/* Hot Beverages Category */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-border/40 pb-2">
            <h3 className="text-lg font-bold text-brand-gold uppercase tracking-wider">Freshly Brewed Hot Beverages</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAFE_ITEMS.filter(item => item.id === 'coffee' || item.id === 'tea').map((item, idx) => (
              <MotionWrapper key={item.id} animation="fade-up" transition={{ delay: idx * 0.05, duration: 0.4, ease: 'easeOut' }}>
                <div className="group relative bg-card hover:bg-secondary/20 dark:hover:bg-secondary/5 border border-border/60 hover:border-brand-gold/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Badge & Price Row */}
                    <div className="flex items-start justify-between">
                      <div>
                        {item.tag ? (
                          <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-brand-gold uppercase tracking-wider mb-2">
                            {item.tag}
                          </span>
                        ) : (
                          <div className="h-5" />
                        )}
                        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-brand-gold transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className="text-stone-200 text-base font-extrabold bg-stone-900 px-2.5 py-1 rounded-lg border border-border/40 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
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
            className="h-10 px-6 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark shadow-sm flex items-center justify-center shrink-0 transition-colors text-center"
          >
            Get Location Directions
          </Link>
        </div>
      </Container>
    </Section>
  );
}

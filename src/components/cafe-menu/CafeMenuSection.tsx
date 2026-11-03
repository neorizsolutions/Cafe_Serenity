import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import MotionWrapper from '@/components/common/MotionWrapper';
import MenuCard from './MenuCard';
import MenuCategoryNav from './MenuCategoryNav';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';

export default function CafeMenuSection({ category }: { category: 'biriyani' | 'snacks' }) {
  const items = CAFE_ITEMS.filter(item => item.category === category);
  return (
    <Section bg={category === 'biriyani' ? 'muted' : 'white'} className="menu-collection-section relative overflow-hidden border-b border-border py-16 md:py-24 scroll-mt-24" id={category}>
      <Container className="space-y-10 md:space-y-12">
        <div className="menu-collection-heading flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-4"><h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{category === 'biriyani' ? 'Our Biriyani Collection' : 'Kerala Snacks & Quick Bites'}</h2><p className="text-muted-foreground leading-relaxed">{category === 'biriyani' ? 'Eight familiar flavours. Your choice of Half or Full.' : 'Evening tea-time favourites at ₹12 each, and golden Egg Puffs at ₹15.'}</p></div>
          <Link href={`/cafe-menu#category-${category}`} className="menu-section-link inline-flex min-h-11 items-center gap-3 font-semibold text-[#85671F]">Explore the menu <span aria-hidden="true">↗</span></Link>
        </div>
        {category === 'biriyani' && <MenuCategoryNav homepage />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((item, index) => <MotionWrapper key={item.id} animation="fade-up" transition={{delay:index * 0.04, duration:0.4}}><MenuCard item={item} /></MotionWrapper>)}
        </div>
      </Container>
    </Section>
  );
}

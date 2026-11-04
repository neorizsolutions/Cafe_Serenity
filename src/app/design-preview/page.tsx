import type { Metadata } from 'next';
import FoodHero from '@/components/home/food-hero/CircleHero';

export const metadata: Metadata = {
  title: 'Food & Motion — Café Serenity Design Preview',
  robots: { index: false, follow: false },
};

export default async function DesignPreviewPage({ searchParams }: { searchParams: Promise<{ motion?: string }> }) {
  const { motion } = await searchParams;
  return <FoodHero forceReducedMotion={motion === 'reduce'} />;
}

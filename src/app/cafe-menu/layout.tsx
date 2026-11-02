import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Our Menu — Biriyani & Snacks',
  description: 'Eight Biriyani varieties, Regular Snacks and Egg Puffs at Café Serenity.',
  path: '/cafe-menu',
  image: '/images/biriyani.png',
});

export default function CafeMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

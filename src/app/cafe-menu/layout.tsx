import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Café Menu | South Indian Breakfast & Kerala Favourites',
  description:
    'Explore Café Serenity\'s everyday café menu in Kakkanad, Kochi. Fresh South Indian breakfast, Kerala meals, biriyani, snacks, and authentic filter coffee — prepared daily.',
  path: '/cafe-menu',
  image: '/images/slide_cafe_breakfast.png',
});

export default function CafeMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

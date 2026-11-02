import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Café Serenity Living Blog | Food & Café News',
  description: 'Discover the Biriyani collection and everyday snacks at Café Serenity.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <Section bg="white" className="min-h-[70vh] flex items-center justify-center py-16">
      <Container className="max-w-md text-center space-y-6">
        <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          Biriyani & Café Favourites
        </Typography>
        <Typography variant="body-large" className="text-sm text-muted-foreground leading-relaxed">
          Explore eight Biriyani varieties in Half and Full portions, Regular Snacks and Egg Puffs. See our menu for the full collection and prices.
        </Typography>
        <div className="pt-4">
          <Link
            href="/cafe-menu"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow"
          >
            Explore Our Menu
          </Link>
        </div>
      </Container>
    </Section>
  );
}

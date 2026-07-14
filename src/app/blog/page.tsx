import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Alakapuri Healthy Living Blog | Nutrition & Diet Tips',
  description: 'Read health updates, balanced calorie charts, weight loss recipes, and healthy lifestyle tips from our clinical dietitians.',
});

export default function BlogPage() {
  return (
    <Section bg="white" className="min-h-[70vh] flex items-center justify-center py-16">
      <Container className="max-w-md text-center space-y-6">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary uppercase tracking-widest">
          Coming Soon
        </span>
        <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          Alakapuri Nutrition Blog
        </Typography>
        <Typography variant="body-large" className="text-sm text-muted-foreground leading-relaxed">
          Our in-house clinical dietitians are assembling a catalog of clean local recipes, metabolic health guides, and workout nutrition advice. Stay tuned!
        </Typography>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow"
          >
            Back to Homepage
          </Link>
        </div>
      </Container>
    </Section>
  );
}

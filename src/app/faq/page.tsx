import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import TrustCenter from '@/components/home/TrustCenter';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Help Center & Frequently Asked Questions (FAQ)',
  description: 'Find answers about our kitchen standards, healthy choices, and fresh morning café breakfast.',
});

export default function FAQPage() {
  return (
    <>
      <Section bg="muted" className="py-12 border-b border-border">
        <Container className="text-center space-y-4">
          <Typography variant="badge-label">Help Desk</Typography>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body-large" className="text-sm text-muted-foreground max-w-lg mx-auto">
            Browse active support categories to understand our kitchen and meal standards.
          </Typography>
        </Container>
      </Section>
      <TrustCenter />
    </>
  );
}

import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import Pricing from '@/components/home/Pricing';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Weekly Menu Pricing & Subscriptions | Café Serenity',
  description: 'View Café Serenity everyday ₹69 healthy meal box pricing and weekly or monthly dietitian diet subscriptions starting from ₹199/meal.',
});

export default function PricingPage() {
  return (
    <>
      <Section bg="muted" className="py-12 border-b border-border">
        <Container className="text-center space-y-4">
          <Typography variant="badge-label">Affordable Health</Typography>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Plan Subscriptions & Pricing
          </Typography>
          <Typography variant="body-large" className="text-sm text-muted-foreground max-w-lg mx-auto">
            Choose from our flagship budget box or configure a tailored program using our in-website checkout system.
          </Typography>
        </Container>
      </Section>
      <Pricing />
    </>
  );
}

import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Terms & Conditions | Café Serenity',
  description: 'Understand the terms of service of Café Serenity, our menu plans, and Kakkanad café guidelines.',
});

export default function TermsAndConditionsPage() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-2xl space-y-8 text-xs text-muted-foreground leading-relaxed">
        <div className="space-y-4 text-center">
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight text-foreground">
            Terms & Conditions
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Last updated: August 2026
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Café Orders & Pre-Bookings</Typography>
          <p>
            By ordering from our Healthy Choices menu, you agree to coordinate and confirm pickup or delivery details upfront. Large orders or multi-day plans are finalized and verified before the first meal preparation occurs.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Menu & Modifications</Typography>
          <p>
            Menu preferences and schedules are finalized upon ordering. Customers are responsible for communicating any modifications or dietary preferences to our team directly.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">3. Health Warnings & Allergen Disclaimer</Typography>
          <p>
            While we take utmost care, our meals are cooked in facilities handling nuts, gluten, and eggs. Customers with severe clinical allergies must declare parameters upon ordering.
          </p>
        </div>
      </Container>
    </Section>
  );
}

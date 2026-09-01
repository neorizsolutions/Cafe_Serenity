import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Terms & Conditions | Café Serenity',
  description: 'Understand the terms of service of Café Serenity subscription structures, menu plans, and Kakkanad café guidelines.',
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
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Subscription Plans</Typography>
          <p>
            By subscribing to weekly or monthly diet plans, you agree to coordinate and confirm setup details upfront. All subscription details are finalized and verified before the first meal preparation occurs.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Subscription Menu & Schedule</Typography>
          <p>
            Menu preferences and schedules are finalized upon onboarding. Subscribers are responsible for communicating any modifications or dietary preferences to our consulting dietitians directly.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">3. Health Warnings & Allergen Disclaimer</Typography>
          <p>
            While dietitian-reviewed, our meals are cooked in facilities handling nuts, gluten, and eggs. Subscribers with severe clinical allergies must declare parameters on onboarding.
          </p>
        </div>
      </Container>
    </Section>
  );
}

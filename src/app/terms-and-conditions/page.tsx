import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Terms & Conditions | Alakapuri Healthy Meals',
  description: 'Understand the terms of service of Alakapuri Healthy Meals subscription structures, pause credit rollouts, and office delivery gates.',
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
            Last updated: July 2026
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Subscription Plans & Payments</Typography>
          <p>
            By subscribing to weekly or monthly diet plans, you agree to submit full payments upfront. All billing transactions are verified before the first kitchen dispatch occurs.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Delivery Coordination</Typography>
          <p>
            Meals are dropped at office receptions, security gates, or doorstep hubs. The subscriber is responsible for coordinating with building gate rules. Alakapuri is not responsible for boxes lost after hub hand-off.
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

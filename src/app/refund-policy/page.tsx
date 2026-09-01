import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Refund & Cancellation Policies | Café Serenity',
  description: 'Learn about Café Serenity cancellation policy and subscription details.',
  path: '/refund-policy',
});

export default function RefundPolicyPage() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-2xl space-y-8 text-xs text-muted-foreground leading-relaxed">
        <div className="space-y-4 text-center">
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight text-foreground">
            Refund & Cancellation Policy
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Last updated: August 2026
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Subscription Cancellation</Typography>
          <p>
            Subscribers can request plan cancellations at any time by contacting our team. We do not offer direct bank refunds for active plan cancellations. However, any remaining balance or value stays locked in your account indefinitely and can be activated for future plans or transferred to another local resident.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Wholesome Quality Commitment</Typography>
          <p>
            If you are not completely satisfied with the quality of your meals, please contact us within 4 hours of receiving the meal. We will review your feedback and coordinate a suitable resolution, such as a credit or replacement.
          </p>
        </div>
      </Container>
    </Section>
  );
}

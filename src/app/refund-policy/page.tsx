import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Refund & Freeze Policies | Alakapuri Healthy Meals',
  description: 'Learn about Alakapuri 12h freeze credit policy, vacation subscription lockouts, and credit rollovers.',
});

export default function RefundPolicyPage() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-2xl space-y-8 text-xs text-muted-foreground leading-relaxed">
        <div className="space-y-4 text-center">
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight text-foreground">
            Refund & Subscription Freeze Policy
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Last updated: July 2026
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Subscription Freeze (12-Hour Notice)</Typography>
          <p>
            If you are traveling or eating out, you can pause your daily box delivery. Simply alert our WhatsApp line before 6 PM on the preceding day. We will lock your dispatch schedule and roll your active payment credit over to subsequent days.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Late Freeze Requests</Typography>
          <p>
            Freeze requests received after 6 PM on the preceding day cannot be processed, as raw ingredients have been procured and kitchen preps have initialized. The meal will be dispatched as scheduled or can be routed to a friend.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">3. Cancellation & Refunds</Typography>
          <p>
            We do not offer direct bank refunds for active plan cancellations. However, your remaining balance credit stays locked in your account indefinitely and can be activated for future plans or transferred to another local resident.
          </p>
        </div>
      </Container>
    </Section>
  );
}

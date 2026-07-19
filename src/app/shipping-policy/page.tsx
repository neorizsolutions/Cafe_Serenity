import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Shipping & Delivery Policy | Alakapuri Healthy Meals',
  description: 'Understand Alakapuri transit dispatches, lunch/dinner slot timings, and tech park doorstep guidelines.',
});

export default function ShippingPolicyPage() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-2xl space-y-8 text-xs text-muted-foreground leading-relaxed">
        <div className="space-y-4 text-center">
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight text-foreground">
            Shipping & Delivery Policy
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Last updated: July 2026
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Daily Dispatch Slots</Typography>
          <p>
            To deliver maximum freshness, our kitchen schedules dispatches twice daily.
          </p>
          <ul className="space-y-1 pl-4 list-disc">
            <li><strong>Lunch Slots</strong>: Delivered between 11:30 AM and 1:15 PM.</li>
            <li><strong>Dinner Slots</strong>: Delivered between 6:30 PM and 8:15 PM.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Office & Tech Park Delivery Guidelines</Typography>
          <p>
            Our riders carry clearance credentials for major tech hubs (Infopark Kakkanad, Technopark Kazhakkoottam). Boxes are left at coordinates designated by tech park administrations (recep desk, security drop boxes).
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">3. Delivery Charges</Typography>
          <p>
            Delivery is 100% free for all standard weekly and monthly subscription plans within our active city boundaries. Special one-off orders or out-of-boundary extensions may invite minimal fuel top-ups.
          </p>
        </div>
      </Container>
    </Section>
  );
}

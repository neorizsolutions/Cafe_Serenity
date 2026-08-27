import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Delivery Coverage Areas Kakkanad | Café Serenity',
  description: 'View Café Serenity delivery boundaries in Kakkanad, Kochi: Near Civil Station, Infopark, SmartCity, Echamuku, and Kunnumpuram.',
});

export default function DeliveryAreasPage() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <Typography variant="badge-label">Active Transit</Typography>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Delivery Coverage Boundaries
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            We drop clean diet boxes and fresh breakfast items at office desks and doorsteps across Kakkanad, Kochi.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kakkanad Coverage */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">📍 Active Kakkanad Regions</Typography>
            <ul className="text-xs text-muted-foreground space-y-2 font-medium">
              <li>• Infopark Phase 1 & 2 offices</li>
              <li>• SmartCity Kochi zone</li>
              <li>• Civil Station area</li>
              <li>• Echamuku & Kunnumpuram</li>
              <li>• Rajagiri & Seaport-Airport Road points</li>
            </ul>
          </div>

          {/* Guidelines */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">⏳ Delivery Slots</Typography>
            <ul className="text-xs text-muted-foreground space-y-2 font-medium">
              <li>• Morning Tiffin slot: 6:00 AM – 9:30 AM</li>
              <li>• Healthy Lunch slot: 11:30 AM – 1:30 PM</li>
              <li>• Fresh Preparation daily from our central kitchen</li>
              <li>• Portions weighed and calibrated</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary/15 p-6 text-center space-y-4 text-xs">
          <h4 className="font-bold text-foreground">Out of bounds?</h4>
          <p className="text-muted-foreground">
            If your Kakkanad address is just outside our standard zones, contact us. We accommodate route expansions for corporate groups.
          </p>
          <a
            href={`tel:${CONTACT_DETAILS.phone}`}
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/95 transition-colors shadow"
          >
            Check Address via Call
          </a>
        </div>
      </Container>
    </Section>
  );
}

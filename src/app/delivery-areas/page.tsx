import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Delivery Coverage Areas Kochi | Alakapuri',
  description: 'View Alakapuri desk & doorstep healthy meal box transit boundaries in Kochi: Kakkanad Infopark, SmartCity, Kaloor, Edappally, Vyttila, and Kadavanthra.',
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
            We drop clean diet boxes at office desks and doorsteps twice daily currently across Kochi, with other regions coming soon.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kochi Coverage */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">📍 Kochi Regions</Typography>
            <ul className="text-xs text-muted-foreground space-y-2 font-medium">
              <li>• Kakkanad Infopark Phase 1 & 2 offices</li>
              <li>• SmartCity Kochi zone</li>
              <li>• Edappally residential complexes</li>
              <li>• Kaloor & Palarivattom transit points</li>
              <li>• Vytila & Kadavanthra areas</li>
            </ul>
          </div>

          {/* Expanding Soon / Future Locations */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4 opacity-90">
            <Typography variant="h3" className="text-base font-bold text-foreground/80">⏳ Expanding Soon</Typography>
            <ul className="text-xs text-muted-foreground space-y-2 font-medium">
              <li>• Trivandrum (Technopark, Kazhakkoottam)</li>
              <li>• Kozhikode (Cyberpark, Bypass Road)</li>
              <li>• Thrissur (Town Center, Punkunnam)</li>
              <li>• Kannur (Payyambalam, Talap)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-secondary/15 p-6 text-center space-y-4 text-xs">
          <h4 className="font-bold text-foreground">Out of bounds?</h4>
          <p className="text-muted-foreground">
            If your locality is not listed, contact our routing managers. We accommodate route extensions for multi-box office orders.
          </p>
          <a
            href={`tel:${CONTACT_DETAILS.phone}`}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/95 transition-colors shadow"
          >
            Check Address via Call
          </a>
        </div>
      </Container>
    </Section>
  );
}

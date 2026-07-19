import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Contact Alakapuri Healthy Meals | Support Concierge Kerala',
  description: 'Reach our healthy subscription support desk via WhatsApp, email, or calls. Kitchen details for Kakkanad, Kochi.',
});

export default function ContactPage() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <Typography variant="badge-label">Get in Touch</Typography>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Contact Support Concierge
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Have questions about customized dietitian grids or corporate trial drops? Let&apos;s talk.
          </Typography>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Link
            href="/checkout"
            className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
          >
            <span className="text-2xl block">🥗</span>
            <span className="text-xs font-bold text-foreground block">Diet Consultation</span>
            <span className="text-[10px] text-primary font-bold block">Configure Meal Plan</span>
          </Link>
          <a
            href={`tel:${CONTACT_DETAILS.phone}`}
            className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
          >
            <span className="text-2xl block">📞</span>
            <span className="text-xs font-bold text-foreground block">Direct Phone</span>
            <span className="text-[10px] text-primary font-bold block">{CONTACT_DETAILS.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT_DETAILS.email}`}
            className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
          >
            <span className="text-2xl block">✉️</span>
            <span className="text-xs font-bold text-foreground block">Email Support</span>
            <span className="text-[10px] text-primary font-bold block">{CONTACT_DETAILS.email}</span>
          </a>
        </div>

        {/* Kitchen Location Info */}
        <div className="rounded-2xl border border-border bg-secondary/15 p-6 md:p-8 space-y-4 text-xs">
          <h4 className="text-sm font-bold text-foreground">📍 Central Culinary Operations</h4>
          <p className="text-muted-foreground leading-relaxed">
            Address: {CONTACT_DETAILS.address.street}, {CONTACT_DETAILS.address.locality}, {CONTACT_DETAILS.address.city}, {CONTACT_DETAILS.address.state} - {CONTACT_DETAILS.address.zipCode}
          </p>
          <p className="text-muted-foreground">
            Business Hours: Mon – Sat, 6:00 AM – 9:00 PM (Kitchen maintenance shuts on Sundays).
          </p>
          <p className="text-muted-foreground">
            FSSAI License ID: <span className="font-bold text-foreground">{CONTACT_DETAILS.fssaiNumber}</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}

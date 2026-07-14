import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy | Alakapuri Healthy Meals',
  description: 'Review the privacy policy parameters of Alakapuri Healthy Meals. Learn how we handle your subscription billing and address details.',
});

export default function PrivacyPolicyPage() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-2xl space-y-8 text-xs text-muted-foreground leading-relaxed">
        <div className="space-y-4 text-center">
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight text-foreground">
            Privacy Policy
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Last updated: July 2026
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Information We Collect</Typography>
          <p>
            We collect basic contact data (name, email address, telephone number) and delivery address markers when you register or communicate with us via WhatsApp to manage your healthy subscription drops.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Payment & Billing Data</Typography>
          <p>
            All subscription payments are routed through secure third-party UPI applications (G-Pay, PhonePe, Paytm) and net banking interfaces. We do not store credit card credentials on our servers.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">3. Information Sharing</Typography>
          <p>
            Your information is shared strictly with dispatch coordinators and delivery riders to transport meal boxes to your desk. We never sell your personal information to marketing databases.
          </p>
        </div>
      </Container>
    </Section>
  );
}

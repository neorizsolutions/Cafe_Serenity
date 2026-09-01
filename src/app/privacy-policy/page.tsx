import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy | Café Serenity',
  description: 'Review the privacy policy parameters of Café Serenity. Learn how we handle your contact inquiries and café orders.',
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
            Last updated: August 2026
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">1. Information We Collect</Typography>
          <p>
            We collect basic contact data (name, telephone number) when you communicate with us via WhatsApp or phone calls for general inquiries or menu information.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">2. Payment Security</Typography>
          <p>
            We do not collect, process, or store any online payment or billing details on this website. All financial transactions are handled securely at the café or via verified UPI endpoints during delivery.
          </p>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" className="text-sm font-bold text-foreground">3. Information Sharing</Typography>
          <p>
            Your information is used strictly to communicate regarding your orders or inquiries. We never sell your personal information to marketing databases.
          </p>
        </div>
      </Container>
    </Section>
  );
}

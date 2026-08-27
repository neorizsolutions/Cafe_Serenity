import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import FlexiFreezeContent from '@/components/pages/FlexiFreezeContent';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'How the Flexi-Freeze Guarantee Works',
  description:
    'Pause, resume, skip deliveries, and manage your Café Serenity healthy meal subscription whenever your schedule changes. Learn how the Flexi-Freeze system protects your subscription credits.',
  path: '/how-flexi-freeze-works',
});

export default function FlexiFreezePage() {
  return (
    <>
      {/* Page Header */}
      <Section bg="muted" className="py-12 border-b border-border">
        <Container className="text-center space-y-4 max-w-3xl mx-auto">
          <MotionWrapper animation="fade-up">
            <Typography variant="badge-label">Subscription Flexibility</Typography>
          </MotionWrapper>
          <MotionWrapper animation="fade-up">
            <Typography
              variant="h1"
              className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground"
            >
              How the Flexi-Freeze Guarantee Works
            </Typography>
          </MotionWrapper>
          <MotionWrapper animation="fade-up">
            <Typography
              variant="body-large"
              className="text-sm text-muted-foreground max-w-xl mx-auto"
            >
              Pause, resume, skip deliveries, and manage your healthy meal subscription whenever your
              schedule changes.
            </Typography>
          </MotionWrapper>
        </Container>
      </Section>

      {/* All interactive/client sections */}
      <FlexiFreezeContent />

      {/* Bottom CTA */}
      <Section bg="brand-light" className="py-16">
        <Container className="text-center space-y-6 max-w-2xl mx-auto">
          <MotionWrapper animation="fade-up">
            <Typography variant="badge-label">Start Your Journey</Typography>
          </MotionWrapper>
          <MotionWrapper animation="fade-up">
            <Typography variant="h2" className="text-2xl font-bold tracking-tight text-foreground">
              Ready to Start Eating Healthy?
            </Typography>
          </MotionWrapper>
          <MotionWrapper animation="fade-up">
            <Typography variant="body-regular" className="text-muted-foreground">
              Explore our curated meal plans — all protected by the Flexi-Freeze Guarantee.
            </Typography>
          </MotionWrapper>
          <MotionWrapper animation="fade-up">
            <Link
              href="/healthy-meals"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Explore Healthy Meals
            </Link>
          </MotionWrapper>
        </Container>
      </Section>
    </>
  );
}

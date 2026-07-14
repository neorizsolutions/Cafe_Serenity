import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

export default function Loading() {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-background">
      <Container className="flex items-center justify-center">
        {/* Loading Spinner */}
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </Container>
    </Section>
  );
}

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';

export default function NotFound() {
  return (
    <Section bg="muted" className="min-h-[80vh] flex items-center justify-center py-16">
      <Container className="max-w-xl text-center space-y-8">
        
        {/* Friendly Graphic Illustration */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary text-4xl animate-bounce">
          🥦
        </div>

        <div className="space-y-3">
          <span className="inline-flex rounded-full bg-destructive/10 px-3 py-0.5 text-xs font-bold text-destructive uppercase tracking-widest">
            Page Not Found
          </span>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Looking for something fresh?
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            The page you are looking for has been replanted or shifted. Let&apos;s guide you back to our healthy daily meals.
          </Typography>
        </div>

        {/* Action Button cluster */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="flex h-11 items-center justify-center rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-sm active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            href="/healthy-meals"
            className="flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Explore Healthy Meals
          </Link>
          <Link
            href="/contact"
            className="flex h-11 items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-6 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            Chat Support
          </Link>
        </div>

        {/* Future Search Placement Indicator */}
        <div className="max-w-md mx-auto p-4 rounded-xl border border-dashed border-border bg-card/65 text-xs text-muted-foreground">
          🔍 Need help finding a dish? Our unified recipe search engine will be launching here soon.
        </div>

      </Container>
    </Section>
  );
}

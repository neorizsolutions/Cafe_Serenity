'use client';

import { useEffect } from 'react';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics reporting service
    console.error(error);
  }, [error]);

  return (
    <Section bg="muted" className="min-h-screen flex items-center justify-center">
      <Container className="max-w-md text-center space-y-6">
        <Typography variant="badge-label" className="text-red-600">
          Application Error
        </Typography>
        <Typography variant="h2">Something Went Wrong</Typography>
        <Typography variant="body-regular">
          An unexpected error occurred during execution. Please try reloading or reporting this to the system support desk.
        </Typography>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            suppressHydrationWarning
            className="flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/95"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </Container>
    </Section>
  );
}

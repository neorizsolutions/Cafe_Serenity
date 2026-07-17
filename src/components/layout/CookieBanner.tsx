'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage for consent
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 max-w-sm rounded-2xl border border-border bg-card p-5 shadow-lg md:left-6 md:right-auto">
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-foreground">Cookie Consent</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          We use functional cookies to optimize your calculations and subscription configurations. By using our website, you agree to our policies.
        </p>
        <div className="flex gap-3 pt-1">
          <button
            onClick={handleAccept}
            className="flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-colors shadow-sm"
          >
            Accept
          </button>
          <Link
            href="/privacy-policy"
            className="flex h-9 items-center justify-center rounded-full border border-border bg-background px-5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Read Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}

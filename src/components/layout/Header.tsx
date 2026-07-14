'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS, BUSINESS_NAME } from '@/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitor scroll height to adjust glass background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent bg-background/0 transition-all duration-200',
        isScrolled && 'border-border/60 bg-background/80 backdrop-blur-md shadow-sm'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <svg className="h-6 w-6 fill-current text-primary" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4.5h-2V7h2v6z" />
          </svg>
          <span className="text-foreground">{BUSINESS_NAME.split(' ')[0]}</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  isActive && 'text-foreground font-semibold'
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Area: Search Placeholder & WhatsApp CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Future-Ready Search Input */}
          <div className="relative w-40 xl:w-48">
            <input
              type="text"
              placeholder="Search meals..."
              aria-label="Search meals"
              disabled
              className="w-full h-8 px-3 rounded-full border border-border bg-secondary/35 text-xs text-muted-foreground cursor-not-allowed opacity-75 focus:outline-none"
            />
            <svg
              className="absolute right-3 top-2.5 h-3.5 w-3.5 stroke-current text-muted-foreground"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Alakapuri%2C%20I'd%20like%20to%20learn%20more%20about%20your%20meal%20subscriptions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/95 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            WhatsApp Subscription
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={isMobileOpen}
            aria-label="Toggle mobile navigation menu"
          >
            {isMobileOpen ? (
              <svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <>
          {/* Overlay background */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm md:hidden animate-fade"
          />
          {/* Drawer container */}
          <div className="fixed inset-x-0 top-16 z-50 border-b border-border bg-background px-6 py-8 md:hidden shadow-lg transition-all animate-fade">
            <nav className="flex flex-col gap-5">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      'text-base font-semibold text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      isActive && 'text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              {/* Mobile Search Placeholder */}
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search menu..."
                  aria-label="Search menu"
                  disabled
                  className="w-full h-10 px-4 rounded-xl border border-border bg-secondary/35 text-sm text-muted-foreground cursor-not-allowed opacity-75"
                />
              </div>

              <a
                href="https://wa.me/919876543210?text=Hi%20Alakapuri%2C%20I'd%20like%20to%20learn%20more%20about%20your%20meal%20subscriptions."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/95 transition-colors"
              >
                Chat with Nutritionist on WhatsApp
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

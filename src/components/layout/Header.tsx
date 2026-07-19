'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_LINKS, BUSINESS_NAME } from '@/constants';
import { cn } from '@/lib/utils';
import { useCheckout } from '@/context/CheckoutContext';

export default function Header() {
  const { openCheckout } = useCheckout();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitor scroll height to adjust glass background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent bg-background/0 transition-all duration-300',
        isScrolled && 'border-border/60 bg-background/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.015)]'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo Section (Custom Leaf & Bowl Wellness SVG) */}
        <Link
          href="/"
          className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          aria-label={`${BUSINESS_NAME} Home`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2c-.83 0-1.5.67-1.5 1.5v.35C7.38 4.22 5 6.83 5 10c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.17-2.38-5.78-5.5-6.15V3.5c0-.83-.67-1.5-1.5-1.5zm0 13c-2.76 0-5-2.24-5-5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 1.1.9 2 2 2s2-.9 2-2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 2.76-2.24 5-5 5z" />
              <path d="M4 19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2H4z" />
            </svg>
          </div>
          <span className="text-foreground font-black tracking-tight">{BUSINESS_NAME.split(' ')[0]}</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Desktop Main Navigation">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-1',
                  isActive && 'text-foreground font-extrabold'
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeHeaderUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Area: Search Placeholder & WhatsApp CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Elegant Search Input */}
          <div className="relative w-40 xl:w-48 group">
            <input
              type="text"
              placeholder="Search meals..."
              aria-label="Search meals"
              disabled
              className="w-full h-9 px-3 pr-8 rounded-full border border-border bg-secondary/20 text-xs text-muted-foreground cursor-not-allowed opacity-75 focus-visible:outline-none"
            />
            <svg
              className="absolute right-3 top-2.5 h-4 w-4 stroke-current text-muted-foreground transition-colors group-hover:text-foreground"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <button
            onClick={() => openCheckout()}
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-xs font-bold text-primary-foreground shadow-sm hover:shadow transition-all duration-300 hover:bg-primary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Order Now</span>
            <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10h3l-4 4-4-4h3V8h2v4z" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-background text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200"
            aria-expanded={isMobileOpen}
            aria-label="Toggle mobile navigation menu"
          >
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-foreground transition-all duration-300',
                isMobileOpen && 'translate-y-2 rotate-45 bg-primary'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-foreground transition-all duration-300',
                isMobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-foreground transition-all duration-300',
                isMobileOpen && '-translate-y-2 -rotate-45 bg-primary'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (with AnimatePresence) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-black/15 backdrop-blur-sm md:hidden"
            />
            {/* Drawer Container Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="fixed inset-x-0 top-16 z-50 border-b border-border bg-background px-6 py-8 md:hidden shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-5" aria-label="Mobile Main Navigation">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        'text-base font-bold text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary px-2 py-1 rounded-md',
                        isActive && 'text-primary bg-primary/5 font-extrabold'
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
                    className="w-full h-11 px-4 pr-10 rounded-xl border border-border bg-secondary/20 text-sm text-muted-foreground cursor-not-allowed opacity-75 focus:outline-none"
                  />
                  <svg
                    className="absolute right-3.5 top-3.5 h-4 w-4 stroke-current text-muted-foreground"
                    fill="none"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    openCheckout();
                  }}
                  className="mt-2 inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95 cursor-pointer"
                >
                  <span>Order Now</span>
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

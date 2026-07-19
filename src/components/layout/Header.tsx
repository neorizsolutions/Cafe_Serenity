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
        {/* Logo Section (Custom Vector Logo) */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg py-1 text-foreground"
          aria-label={`${BUSINESS_NAME} Home`}
        >
          <svg className="h-9 w-auto fill-current" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <circle cx="40" cy="40" r="38" stroke="#10B981" strokeWidth="4" fill="none"/>
              <path d="M40 12 C25 25, 25 55, 40 68 C55 55, 55 25, 40 12 Z" fill="#10B981"/>
              <path d="M40 22 C30 32, 30 50, 40 60 L40 22" fill="#34D399" opacity="0.8"/>
              <path d="M40 12 L40 68" stroke="#FFFFFF" strokeWidth="2"/>
              <path d="M40 30 L48 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M40 42 L48 36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M40 54 L46 50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M40 35 L32 29" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              <path d="M40 47 L32 41" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            </g>
            <text x="110" y="48" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" fontWeight="900" fontSize="28" fill="currentColor" letterSpacing="1">ALAKAPURI</text>
            <text x="110" y="78" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#10B981" letterSpacing="4">HEALTHY MEALS</text>
          </svg>
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

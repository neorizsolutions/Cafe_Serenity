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

  // Monitor scroll height to adjust header glass backdrop
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
        'sticky top-0 z-50 w-full border-b border-transparent bg-brand-dark/0 transition-all duration-300',
        isScrolled && 'border-brand-gold/10 bg-brand-dark/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-lg py-1 text-brand-gold"
          aria-label={`${BUSINESS_NAME} Home`}
        >
          <svg className="h-9 w-auto fill-current" viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="4.5" fill="#1c1917" />
              <path d="M30 38v20M25 22v7a5 5 0 0 0 10 0v-7M30 22v7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48 38v20M44 38V25c0-4 2-6 4-6v19z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x="110" y="46" fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="25" fill="currentColor" letterSpacing="1.5">CAFÉ SERENITY</text>
            <text x="110" y="74" fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="12" fill="#fafaf9" letterSpacing="5">KAKKANAD</text>
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
                  'relative text-sm font-semibold tracking-wide text-stone-300 hover:text-brand-gold transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-md px-1',
                  isActive && 'text-brand-gold font-extrabold'
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeHeaderUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Area: Search & Order CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="relative w-40 xl:w-48 group">
            <input
              type="text"
              placeholder="Search menu..."
              aria-label="Search menu"
              disabled
              className="w-full h-9 px-3 pr-8 rounded-full border border-stone-800 bg-stone-900/60 text-xs text-stone-400 cursor-not-allowed opacity-75 focus-visible:outline-none"
            />
            <svg
              className="absolute right-3 top-2.5 h-4 w-4 stroke-current text-stone-400 transition-colors group-hover:text-brand-gold"
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
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-brand-gold px-5 text-xs font-bold text-brand-dark shadow-sm hover:shadow transition-all duration-300 hover:bg-brand-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 active:scale-95 hover:-translate-y-0.5 cursor-pointer"
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
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-stone-800 bg-stone-900/40 text-stone-200 hover:bg-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold transition-all duration-200"
            aria-expanded={isMobileOpen}
            aria-label="Toggle mobile navigation menu"
          >
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-stone-200 transition-all duration-300',
                isMobileOpen && 'translate-y-2 rotate-45 bg-brand-gold'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-stone-200 transition-all duration-300',
                isMobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-stone-200 transition-all duration-300',
                isMobileOpen && '-translate-y-2 -rotate-45 bg-brand-gold'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="fixed inset-x-0 top-16 z-50 border-b border-stone-800 bg-brand-dark px-6 py-8 md:hidden shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
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
                        'text-base font-bold text-stone-300 hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold px-2 py-1 rounded-md',
                        isActive && 'text-brand-gold bg-brand-gold/10 font-extrabold'
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Mobile Search */}
                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Search menu..."
                    aria-label="Search menu"
                    disabled
                    className="w-full h-11 px-4 pr-10 rounded-xl border border-stone-800 bg-stone-900/60 text-sm text-stone-400 cursor-not-allowed opacity-75 focus:outline-none"
                  />
                  <svg
                    className="absolute right-3.5 top-3.5 h-4 w-4 stroke-current text-stone-400"
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
                  className="mt-2 inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-gold text-sm font-bold text-brand-dark hover:bg-brand-gold/90 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold active:scale-95 cursor-pointer"
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

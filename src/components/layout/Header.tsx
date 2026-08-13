'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_LINKS, BUSINESS_NAME } from '@/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
        'sticky top-0 z-50 w-full border-b border-transparent bg-brand-cream/90 backdrop-blur-md transition-all duration-300',
        isScrolled && 'border-brand-dark/10 bg-brand-cream/98 shadow-sm shadow-brand-dark/[0.02]'
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6 lg:px-8 gap-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg py-1"
          aria-label={`${BUSINESS_NAME} Home`}
        >
          {/* Compact Icon Logo - visible on extra small mobile only */}
          <svg className="h-9 w-9 min-w-[36px] min-[400px]:hidden block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" stroke="var(--brand-gold)" strokeWidth="5.5" fill="var(--brand-dark)" />
            <path d="M38 48v24M32 29v8a6 6 0 0 0 12 0v-8M38 29v8" stroke="var(--brand-gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M60 48v24M55 48V32c0-5 2.5-7.5 5-7.5v23.5z" fill="var(--brand-gold)" stroke="var(--brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Full Brand Wordmark Logo - hidden on extra small mobile, visible on min-width 400px */}
          <svg className="h-9 sm:h-10 md:h-11 w-auto min-[400px]:block hidden" viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <circle cx="40" cy="40" r="38" stroke="var(--brand-gold)" strokeWidth="4.5" fill="var(--brand-dark)" />
              <path d="M30 38v20M25 22v7a5 5 0 0 0 10 0v-7M30 22v7" stroke="var(--brand-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48 38v20M44 38V25c0-4 2-6 4-6v19z" fill="var(--brand-gold)" stroke="var(--brand-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x="110" y="46" fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="25" fill="var(--brand-dark)" letterSpacing="1.5">CAFÉ SERENITY</text>
            <text x="110" y="74" fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="700" fontSize="12" fill="var(--brand-gold)" letterSpacing="5">KAKKANAD</text>
          </svg>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Desktop Main Navigation">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative text-xs lg:text-sm font-semibold tracking-wide text-brand-dark/85 hover:text-brand-gold transition-colors duration-200 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-md px-1.5 lg:px-2.5',
                  isActive && 'text-brand-gold font-bold'
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

        {/* Right Area: Search & Order CTA (Desktop only) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          {/* Desktop Search Bar */}
          <div className="relative w-32 xl:w-48 group">
            <input
              type="text"
              placeholder="Search menu..."
              aria-label="Search menu"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 px-4 pr-9 rounded-full border border-brand-dark/15 bg-white text-xs text-brand-dark placeholder-brand-dark/50 transition-all duration-300 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:shadow-[0_0_8px_rgba(255,185,0,0.15)] hover:border-brand-dark/30"
            />
            <svg
              className="absolute right-3.5 top-2.5 h-4 w-4 stroke-current text-brand-dark/50 transition-colors group-hover:text-brand-gold group-focus-within:text-brand-gold"
              fill="none"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* View Menu CTA */}
          <Link
            href="/#cafe-menu"
            className="group inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-brand-gold px-4 lg:px-5 text-xs font-medium text-brand-dark shadow-sm hover:shadow transition-all duration-300 hover:bg-brand-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold active:scale-95 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View Menu</span>
            <svg 
              className="h-3.5 w-3.5 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Actions and Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Optional compact View Menu button on mobile */}
          <Link
            href="/#cafe-menu"
            className="hidden min-[360px]:inline-flex h-9 items-center justify-center rounded-full bg-brand-gold px-4 text-[11px] font-medium text-brand-dark shadow-sm hover:bg-brand-gold/90 active:scale-95 transition-all duration-200"
          >
            <span>View Menu</span>
          </Link>
          
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-brand-dark/15 bg-white text-brand-dark hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold transition-all duration-200"
            aria-expanded={isMobileOpen}
            aria-label="Toggle mobile navigation menu"
          >
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-brand-dark transition-all duration-300',
                isMobileOpen && 'translate-y-2 rotate-45 bg-brand-gold'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-brand-dark transition-all duration-300',
                isMobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-brand-dark transition-all duration-300',
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
              className="fixed inset-0 top-16 md:top-20 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="fixed inset-x-0 top-16 md:top-20 z-50 border-b border-stone-850 bg-brand-dark px-6 py-8 lg:hidden shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-5" aria-label="Mobile Main Navigation">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        'text-base font-semibold text-brand-cream/80 hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold px-3 py-2 rounded-xl',
                        isActive && 'text-brand-gold bg-brand-gold/10 font-bold'
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 px-4 pr-10 rounded-xl border border-brand-cream/15 bg-white/5 text-sm text-brand-cream placeholder-brand-cream/45 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                  />
                  <svg
                    className="absolute right-3.5 top-3.5 h-4 w-4 stroke-current text-brand-cream/45 group-hover:text-brand-gold"
                    fill="none"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <Link
                  href="/#cafe-menu"
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-2 inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-gold text-sm font-bold text-brand-dark hover:bg-brand-gold/90 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold active:scale-95 cursor-pointer text-center"
                >
                  <span>View Menu</span>
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS, BUSINESS_NAME, CONTACT_DETAILS } from '@/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitor scroll height to adjust header appearance
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

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent bg-[#F7F4EE]/90 backdrop-blur-md transition-all duration-300',
        isScrolled && 'border-[#1C1C1E]/10 bg-[#F7F4EE]/98 shadow-sm shadow-[#1C1C1E]/[0.02]'
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6 lg:px-8 gap-4">
        
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E8064] focus-visible:ring-offset-2 rounded-lg py-1 shrink-0"
          aria-label={`${BUSINESS_NAME} Home`}
        >
          {/* Compact Icon Logo - visible on mobile only */}
          <svg className="h-8 w-8 min-w-[32px] sm:hidden block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" stroke="#6E8064" strokeWidth="5.5" fill="#1C1C1E" />
            <path d="M38 48v24M32 29v8a6 6 0 0 0 12 0v-8M38 29v8" stroke="#6E8064" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M60 48v24M55 48V32c0-5 2.5-7.5 5-7.5v23.5z" fill="#6E8064" stroke="#6E8064" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Full Brand Wordmark Logo - hidden on mobile, visible on sm screen and up */}
          <svg className="h-8 sm:h-9 md:h-10 w-auto sm:block hidden" viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <circle cx="40" cy="40" r="38" stroke="#6E8064" strokeWidth="4.5" fill="#1C1C1E" />
              <path d="M30 38v20M25 22v7a5 5 0 0 0 10 0v-7M30 22v7" stroke="#6E8064" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48 38v20M44 38V25c0-4 2-6 4-6v19z" fill="#6E8064" stroke="#6E8064" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x="110" y="46" fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif" fontWeight="900" fontSize="25" fill="#1C1C1E" letterSpacing="1.5">CAFÉ SERENITY</text>
            <text x="110" y="74" fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif" fontWeight="700" fontSize="12" fill="#6E8064" letterSpacing="5">KAKKANAD</text>
          </svg>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Desktop Main Navigation">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative text-sm font-semibold tracking-wide text-[#1C1C1E] transition-colors duration-200 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E8064] rounded-md px-2.5',
                  isActive ? 'text-[#6E8064] font-bold' : 'hover:text-[#6E8064]'
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#6E8064]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            href={CONTACT_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-talk-to-us"
            className="header-cta-primary"
            suppressHydrationWarning
          >
            Talk to Us
          </Link>
        </div>

        {/* Mobile Actions and Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden shrink-0">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#1C1C1E]/15 bg-white text-[#1C1C1E] hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E8064] transition-all duration-200"
            aria-expanded={isMobileOpen}
            aria-label="Toggle mobile navigation menu"
            suppressHydrationWarning
          >
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-[#1C1C1E] transition-all duration-300',
                isMobileOpen && 'translate-y-2 rotate-45 bg-[#6E8064]'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-[#1C1C1E] transition-all duration-300',
                isMobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 rounded bg-[#1C1C1E] transition-all duration-300',
                isMobileOpen && '-translate-y-2 -rotate-45 bg-[#6E8064]'
              )}
            />
          </button>
        </div>
      </div>

      {/* Conditionally Rendered Mobile Drawer for robustness and layout isolation */}
      {isMobileOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 top-16 md:top-20 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-x-0 top-16 md:top-20 z-50 border-b border-[#1C1C1E]/10 bg-[#F7F4EE] px-6 py-8 lg:hidden shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
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
                      'text-base font-semibold text-[#1C1C1E]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E8064] px-3 py-2 rounded-xl',
                      isActive ? 'text-[#6E8064] bg-[#6E8064]/5 font-bold' : 'hover:text-[#6E8064]'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href={CONTACT_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-cta-talk-to-us"
                onClick={() => setIsMobileOpen(false)}
                className="mobile-cta-primary mt-2"
                suppressHydrationWarning
              >
                Talk to Us
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

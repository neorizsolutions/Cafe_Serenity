'use client';

import BrandLogo from '@/components/common/BrandLogo';
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
          <BrandLogo />
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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CONTACT_DETAILS, SOCIAL_LINKS, BUSINESS_NAME } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer 
      className="w-full border-t border-stone-800 bg-brand-dark text-stone-300 py-16 md:py-24 relative overflow-hidden"
      aria-label="Site Footer"
      itemScope
      itemType="http://schema.org/FoodEstablishment"
    >
      {/* Hidden SEO Metadata */}
      <meta itemProp="name" content={BUSINESS_NAME} />
      <meta itemProp="telephone" content={CONTACT_DETAILS.phone} />
      {CONTACT_DETAILS.email && <meta itemProp="email" content={CONTACT_DETAILS.email} />}
      <meta itemProp="priceRange" content="₹₹" />
      <meta itemProp="fssaiNumber" content={CONTACT_DETAILS.fssaiNumber} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          
          {/* Column 1: Business Overview */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight text-brand-gold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-lg w-fit"
              aria-label={`${BUSINESS_NAME} Home`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4.5" fill="none" />
                  <path d="M33 52 C33 66, 67 66, 67 52 L67 47 L33 47 Z" fill="currentColor" />
                  <path d="M67 49 C72 49, 74 52, 74 55 C74 58, 72 61, 67 61" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M50 22 C44 32, 56 42, 48 46 C58 39, 48 30, 50 22 Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-brand-gold font-black tracking-tight">CAFÉ SERENITY</span>
            </Link>
            <p className="text-xs sm:text-[13px] leading-relaxed text-stone-300 font-medium">
              Healthy meals & affordable everyday café food served fresh daily in Kakkanad.
            </p>
            <div className="text-[11px] font-bold uppercase tracking-widest text-stone-300 bg-stone-900/60 px-2.5 py-1 rounded w-fit border border-stone-800">
              FSSAI Lic: <span className="font-extrabold">{CONTACT_DETAILS.fssaiNumber}</span>
            </div>

            {/* Mobile App Placeholders */}
            <div className="pt-2 space-y-2.5">
              <span className="block text-[11px] font-extrabold uppercase tracking-widest text-brand-gold">Mobile App (Soon)</span>
              <div className="flex gap-2">
                <span className="inline-flex h-8 items-center justify-center rounded-lg bg-stone-900 border border-stone-800 px-3 text-[11px] font-bold text-stone-500 select-none cursor-not-allowed" title="Mobile App Coming Soon">
                  App Store (Soon)
                </span>
                <span className="inline-flex h-8 items-center justify-center rounded-lg bg-stone-900 border border-stone-800 px-3 text-[11px] font-bold text-stone-500 select-none cursor-not-allowed" title="Mobile App Coming Soon">
                  Google Play (Soon)
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-brand-gold">Quick Navigation</h4>
            <nav className="flex flex-col gap-3 text-xs sm:text-[13px] font-semibold" aria-label="Footer Quick Links">
              <Link href="/" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Home Landing</Link>
              <Link href="/pricing" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Weekly Menu</Link>
              <Link href="/healthy-meals" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Subscription Plans</Link>
              <Link href="/healthy-meals/corporate" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Corporate Meals</Link>
              <Link href="/about" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">About Our Story</Link>
              <Link href="/faq" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Help Center & FAQ</Link>
              <Link href="/delivery-areas" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Delivery Areas</Link>
            </nav>
          </div>

          {/* Column 3: Meal Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-brand-gold">Meal Categories</h4>
            <nav className="flex flex-col gap-3 text-xs sm:text-[13px] font-semibold" aria-label="Footer Meal Links">
              <Link href="/healthy-meals/weight-loss" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Weight Loss Deficit</Link>
              <Link href="/healthy-meals/high-protein" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">High Protein & Gym</Link>
              <Link href="/healthy-meals/balanced" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Balanced Diet Boxes</Link>
              <Link href="/healthy-meals/diabetic" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Diabetic Friendly</Link>
              <Link href="/healthy-meals/corporate" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Corporate Lunches</Link>
              <Link href="/healthy-meals" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Family Nutrition</Link>
              <Link href="/healthy-meals" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Kids Healthy Grains</Link>
            </nav>
          </div>

          {/* Column 4: Support & Policy */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-brand-gold">Support & Policy</h4>
            <nav className="flex flex-col gap-3 text-xs sm:text-[13px] font-semibold" aria-label="Footer Policy Links">
              <Link href="/faq" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Concierge Desk</Link>
              <Link href="/faq" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Billing & UPI</Link>
              <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Refund & Freeze Policy</Link>
              <Link href="/shipping-policy" className="hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5">Shipping & Food Safety</Link>
            </nav>
          </div>

          {/* Column 5: Location Details */}
          <div className="flex flex-col gap-4 text-xs sm:text-[13px]">
            <div className="space-y-2">
              <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-brand-gold">Active Service Areas</h4>
              <p className="leading-relaxed font-semibold">
                <span className="font-bold text-stone-100">Kochi:</span> Kakkanad, Infopark, SmartCity, Echamuku, Kunnumpuram, and nearby Civil Station areas
              </p>
            </div>
            
            <div className="space-y-1 font-semibold">
              <span className="block font-bold text-stone-100">Kitchen & Café Hours:</span>
              <span className="block font-semibold text-stone-300">Daily: 5:00 AM – 3:00 PM</span>
              <span className="block text-brand-gold font-bold">Open early for fresh morning tiffin</span>
            </div>

            {/* Structured Address */}
            <div 
              itemProp="address" 
              itemScope 
              itemType="http://schema.org/PostalAddress" 
              className="text-[11px] font-semibold text-stone-400 leading-relaxed border-t border-stone-850 pt-3"
            >
              <span itemProp="streetAddress" className="block">{CONTACT_DETAILS.address.street}</span>
              <span className="block">
                <span itemProp="addressLocality">{CONTACT_DETAILS.address.locality}</span>, <span itemProp="addressRegion">{CONTACT_DETAILS.address.state}</span>
              </span>
              <span itemProp="postalCode" className="block font-bold text-stone-300">PIN {CONTACT_DETAILS.address.zipCode}</span>
            </div>

            {/* Google Map Link */}
            <a
              href={`https://maps.google.com/?q=${CONTACT_DETAILS.geo.lat},${CONTACT_DETAILS.geo.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-extrabold text-brand-gold hover:underline hover:text-brand-gold/80 transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5"
            >
              📍 View Kitchen Map Coordinates →
            </a>
          </div>

        </div>

        {/* Newsletter & Badges Row */}
        <div className="pt-10 border-t border-stone-800 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-brand-gold">Weekly Nutrition Newsletter</h4>
            <p className="text-xs leading-relaxed text-stone-300 max-w-sm font-medium">
              Subscribe for clean recipes, macro guides, and menu schedules.
            </p>
            
            {subscribed ? (
              <div className="text-xs font-extrabold text-brand-gold bg-brand-gold/10 px-4 py-2 rounded-lg border border-brand-gold/20 animate-pulse w-full max-w-sm text-center">
                ✓ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm pt-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address..."
                  aria-label="Newsletter email subscription"
                  className="flex-grow h-9 px-3 rounded-lg border border-stone-800 bg-stone-900/60 text-xs font-medium text-stone-200 placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/20"
                />
                <button
                  type="submit"
                  className="h-9 px-4 rounded-lg bg-brand-gold text-xs font-bold text-brand-dark hover:bg-brand-gold/90 transition-all shadow-md hover:-translate-y-0.5 active:scale-95"
                >
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Trust Badges */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-2.5 text-center text-[10px] font-extrabold uppercase tracking-widest text-stone-300">
            <div className="p-3 border border-stone-800 rounded-xl bg-stone-900/40 shadow-sm hover:border-brand-gold/20 transition-all duration-300">✓ Fresh Daily</div>
            <div className="p-3 border border-stone-800 rounded-xl bg-stone-900/40 shadow-sm hover:border-brand-gold/20 transition-all duration-300">✓ Weighed Macros</div>
            <div className="p-3 border border-stone-800 rounded-xl bg-stone-900/40 shadow-sm hover:border-brand-gold/20 transition-all duration-300">✓ FSSAI Kitchen</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] font-semibold text-stone-400">
          <p>© {currentYear} {BUSINESS_NAME}. All rights reserved.</p>
          
          <div className="flex flex-wrap gap-x-5 gap-y-2 items-center" aria-label="Social Media Links">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5"
              aria-label="Follow us on Instagram"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5"
              aria-label="Follow us on Facebook"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin || 'https://linkedin.com/company/cafeserenity'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.youtube || 'https://youtube.com/@cafeserenity.kochi'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-0.5"
              aria-label="Follow us on YouTube"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.519 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.519 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

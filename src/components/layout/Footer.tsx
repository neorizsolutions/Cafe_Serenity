import Link from 'next/link';
import { CONTACT_DETAILS, SOCIAL_LINKS, BUSINESS_NAME } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-secondary/35 text-muted-foreground py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1: Business Overview & Mission */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-primary transition-opacity hover:opacity-90 focus-visible:outline-none"
            >
              <svg className="h-5 w-5 fill-current text-primary" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4.5h-2V7h2v6z" />
              </svg>
              <span className="text-foreground">{BUSINESS_NAME.split(' ')[0]}</span>
            </Link>
            <p className="text-xs leading-relaxed">
              Our mission is to make clean, portion-controlled daily nutrition accessible, helping individuals fuel their active lifestyles without kitchen fatigue.
            </p>
            <div className="text-[10px] font-black uppercase tracking-wider text-foreground">
              FSSAI: {CONTACT_DETAILS.fssaiNumber}
            </div>

            {/* Mobile App Placeholders */}
            <div className="pt-2 space-y-2">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-foreground">Mobile App (Soon)</span>
              <div className="flex gap-2">
                <span className="inline-flex h-8 items-center justify-center rounded bg-background border border-border px-3 text-[10px] font-semibold opacity-50 cursor-not-allowed select-none">
                  App Store
                </span>
                <span className="inline-flex h-8 items-center justify-center rounded bg-background border border-border px-3 text-[10px] font-semibold opacity-50 cursor-not-allowed select-none">
                  Google Play
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Quick Navigation</h4>
            <nav className="flex flex-col gap-2.5 text-xs">
              <Link href="/" className="hover:text-foreground transition-colors">Home Landing</Link>
              <Link href="/pricing" className="hover:text-foreground transition-colors">Weekly Menu</Link>
              <Link href="/meal-plans" className="hover:text-foreground transition-colors">Subscription Plans</Link>
              <Link href="/meal-plans/corporate" className="hover:text-foreground transition-colors">Corporate Meals</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About Our Story</Link>
              <Link href="/faq" className="hover:text-foreground transition-colors">Help Center & FAQ</Link>
              <Link href="/delivery-areas" className="hover:text-foreground transition-colors">Delivery Areas</Link>
            </nav>
          </div>

          {/* Column 3: Meal Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Meal Categories</h4>
            <nav className="flex flex-col gap-2.5 text-xs">
              <Link href="/meal-plans/weight-loss" className="hover:text-foreground transition-colors">Weight Loss deficit</Link>
              <Link href="/meal-plans/high-protein" className="hover:text-foreground transition-colors">High Protein & Gym</Link>
              <Link href="/meal-plans/balanced" className="hover:text-foreground transition-colors">Balanced Diet boxes</Link>
              <Link href="/meal-plans/diabetic" className="hover:text-foreground transition-colors">Diabetic Friendly</Link>
              <Link href="/meal-plans/corporate" className="hover:text-foreground transition-colors">Corporate Lunches</Link>
              <Link href="/meal-plans" className="hover:text-foreground transition-colors">Family Nutrition</Link>
              <Link href="/meal-plans" className="hover:text-foreground transition-colors">Kids Healthy Grains</Link>
            </nav>
          </div>

          {/* Column 4: Support & Policy */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Support & Policy</h4>
            <nav className="flex flex-col gap-2.5 text-xs">
              <Link href="/faq" className="hover:text-foreground transition-colors">Concierge Desk</Link>
              <Link href="/faq" className="hover:text-foreground transition-colors">Billing & UPI</Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-foreground transition-colors">Refund & Freeze Policy</Link>
              <Link href="/shipping-policy" className="hover:text-foreground transition-colors">Shipping & Food Safety</Link>
            </nav>
          </div>

          {/* Column 5: Locations, Contacts & Hours */}
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Active Cities</h4>
              <p className="text-xs leading-normal">
                Kochi (Infopark Kakkanad, Vytila, Edappally) <br />
                Trivandrum (Technopark, Kazhakkoottam, Kowdiar)
              </p>
            </div>
            
            <div className="space-y-1 text-xs">
              <span className="block font-bold text-foreground">Kitchen Hours:</span>
              <span className="block">Mon – Sat: 6:00 AM – 9:00 PM</span>
              <span className="block">Sunday: Maintenance Closed</span>
            </div>

            {/* Google Map Mock Link */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-primary hover:underline block"
            >
              📍 View Kitchen Location Map →
            </a>
          </div>

        </div>

        {/* Newsletter & Trust Badges Row */}
        <div className="pt-8 border-t border-border/60 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* Newsletter subscription mock */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Weekly Nutrition Newsletter</h4>
            <p className="text-[10px] leading-relaxed max-w-sm">
              Subscribe to get clean local recipes, dietitian macros guides, and daily menu schedules.
            </p>
            <div className="flex gap-2 max-w-sm pt-1">
              <input
                type="email"
                placeholder="Enter email address..."
                aria-label="Newsletter email subscription"
                disabled
                className="flex-grow h-9 px-3 rounded border border-border bg-background text-xs cursor-not-allowed opacity-75"
              />
              <button
                disabled
                className="h-9 px-4 rounded bg-primary text-xs font-bold text-primary-foreground cursor-not-allowed opacity-50"
              >
                Join
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-2 text-center text-[9px] font-bold uppercase tracking-wider text-foreground/80">
            <div className="p-2 border border-border rounded bg-card">✓ Fresh Daily</div>
            <div className="p-2 border border-border rounded bg-card">✓ Portion Checked</div>
            <div className="p-2 border border-border rounded bg-card">✓ FSSAI Sanitary</div>
          </div>
        </div>

        {/* Copyright Base */}
        <div className="pt-8 border-t border-border/60 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[10px]">
          <p>© {currentYear} {BUSINESS_NAME}. All rights reserved.</p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

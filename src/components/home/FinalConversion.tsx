import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';

export default function FinalConversion() {
  const whatsappAcquisition = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I'd like to check subscription plans and delivery schedules for my location. Let's get started."
  )}`;

  return (
    <Section bg="brand-light" className="relative border-t border-border">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-600/5 blur-3xl" />

      <Container className="space-y-16">
        
        {/* 1. Main Conversion CTA Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Typography variant="badge-label">Start Clean Living</Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Your Daily Health Transformation <br className="hidden sm:inline" />
            Starts with Alakapuri
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Say goodbye to heavy, oily restaurant takeaways and daily ordering fatigue. Let portion-controlled, dietitian-checked boxes fuel your wellness goals.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={whatsappAcquisition}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/meal-plans"
              className="flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Pricing Plans
            </Link>
          </div>
        </div>

        {/* 2. Location & Delivery Coverage Preview (Future-Ready Map Placement) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm items-center">
          <div className="lg:col-span-6 space-y-6">
            <Typography variant="badge-label">Active Coverage</Typography>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Daily Desk & Doorstep Delivery
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We deliver fresh healthy meal boxes twice daily to all primary IT parks, corporate offices, gyms, and residential neighborhoods across Kochi and Trivandrum.
            </p>
            
            {/* Visual Coverage List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-foreground">📍 Kochi Hubs</span>
                <ul className="text-[10px] text-muted-foreground space-y-1">
                  <li>• Kakkanad Infopark Phase 1 & 2</li>
                  <li>• Edappally & Kaloor Transit</li>
                  <li>• Vytila & Ernakulam Central</li>
                </ul>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-foreground">📍 Trivandrum Hubs</span>
                <ul className="text-[10px] text-muted-foreground space-y-1">
                  <li>• Technopark Phase 1, 2 & 3</li>
                  <li>• Kazhakkoottam & Pattom</li>
                  <li>• Kowdiar & Vazhuthacaud</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Maps / Visual Placement Mock */}
          <div className="lg:col-span-6 h-[220px] rounded-2xl border border-dashed border-border bg-secondary/15 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-2xl block mb-2">🗺️</span>
            <Typography variant="h3" className="text-sm font-bold text-foreground">Interactive Delivery Map</Typography>
            <p className="text-[10px] text-muted-foreground max-w-xs mt-1">
              Expansion plans underway for secondary cities in Kerala (Thrissur, Calicut). Map interface will load here.
            </p>
          </div>
        </div>

        {/* 3. Support & Contact channels + Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Quick Support Contacts */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Direct Contact & Support Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card">
                <span className="text-xs font-bold text-foreground block">💬 WhatsApp Setup</span>
                <a href={CONTACT_DETAILS.whatsapp} className="text-[10px] text-primary hover:underline block mt-1">
                  {CONTACT_DETAILS.phone}
                </a>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <span className="text-xs font-bold text-foreground block">✉️ Email Coordinator</span>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-[10px] text-primary hover:underline block mt-1">
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <span className="text-xs font-bold text-foreground block">🕒 Operations Hours</span>
                <span className="text-[10px] text-muted-foreground block mt-1">
                  Mon – Sat, 6 AM – 9 PM
                </span>
              </div>
            </div>
          </div>

          {/* Trust stats block */}
          <div className="p-6 rounded-2xl border border-border bg-card flex flex-col justify-center gap-3">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">Verified Platform Data</span>
            <div className="flex justify-between items-center text-xs font-bold border-b border-border pb-2">
              <span className="text-muted-foreground font-medium">Meals Served</span>
              <span className="text-foreground">50,000+</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-muted-foreground font-medium">Weekly Retention</span>
              <span className="text-foreground">82%</span>
            </div>
          </div>
        </div>

        {/* 4. Future Ready Newsletter Section */}
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Weekly Nutrition Newsletter</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Get clean diet recipes, macro charts, and menu updates directly in your inbox.
            </p>
          </div>
          <div className="flex gap-2 w-full max-w-sm shrink-0">
            <input
              type="email"
              placeholder="Enter email address..."
              aria-label="Newsletter email address"
              disabled
              className="flex-grow h-10 px-4 rounded-full border border-border bg-secondary/35 text-xs cursor-not-allowed opacity-75 focus:outline-none"
            />
            <button
              disabled
              className="h-10 px-5 rounded-full bg-primary text-xs font-bold text-primary-foreground cursor-not-allowed opacity-50 shadow-sm"
            >
              Subscribe
            </button>
          </div>
        </div>

      </Container>
    </Section>
  );
}

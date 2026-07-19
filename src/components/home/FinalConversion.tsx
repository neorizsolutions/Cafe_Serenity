'use client';

import { useState } from 'react';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { useCheckout } from '@/context/CheckoutContext';
import { CONTACT_DETAILS } from '@/constants';

export default function FinalConversion() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { openCheckout } = useCheckout();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <Section bg="brand-light" className="relative border-t border-border overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-600/5 blur-3xl" />

      <Container className="space-y-20">
        
        {/* 1. Main Conversion CTA Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Start Clean Living
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Your Daily Health Transformation <br className="hidden sm:inline" />
            Starts with Alakapuri
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium opacity-90">
            Say goodbye to heavy, oily restaurant takeaways and daily ordering fatigue. Let portion-controlled, dietitian-checked boxes fuel your wellness goals.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => openCheckout()}
              className="group flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Order Now</span>
            </button>
            <Link
              href="/meal-plans"
              className="flex h-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-sm font-semibold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Explore Pricing Plans
            </Link>
          </div>
        </div>

        {/* 2. Location & Delivery Coverage Preview (High Fidelity Vector Grid) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 backdrop-blur-md p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 items-center group relative z-10">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <div className="lg:col-span-6 space-y-6">
            <Typography variant="badge-label" className="tracking-widest text-[10px]">
              Active Coverage
            </Typography>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Daily Desk & Doorstep Delivery
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground font-medium">
              We deliver fresh healthy meal boxes twice daily to all primary IT parks, corporate offices, gyms, and residential neighborhoods across Kochi, with other regions coming soon.
            </p>
            
            {/* Visual Coverage List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <span className="flex items-center gap-1.5 text-xs font-extrabold text-foreground">
                  <svg className="h-4 w-4 text-primary shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25C4.5 6.358 7.858 3 12 3c4.142 0 7.5 3.358 7.5 7.5z" />
                  </svg>
                  Kochi Hubs
                </span>
                <ul className="text-[10px] text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-1.5">• Kakkanad Infopark Phase 1 & 2</li>
                  <li className="flex items-center gap-1.5">• Edappally & Kaloor Transit</li>
                  <li className="flex items-center gap-1.5">• Vytila & Ernakulam Central</li>
                </ul>
              </div>
              <div className="space-y-3">
                <span className="flex items-center gap-1.5 text-xs font-extrabold text-foreground opacity-85">
                  <svg className="h-4 w-4 text-primary/85 shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Expanding Soon
                </span>
                <ul className="text-[10px] text-muted-foreground space-y-2 font-medium">
                  <li className="flex items-center gap-1.5">• Trivandrum (Technopark)</li>
                  <li className="flex items-center gap-1.5">• Kozhikode (Cyberpark)</li>
                  <li className="flex items-center gap-1.5">• Thrissur & Kannur Zones</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Delivery Map Mock (High Fidelity Vector Grid) */}
          <div className="lg:col-span-6 h-[240px] rounded-2xl border border-border/80 bg-gradient-to-b from-white to-secondary/35 dark:from-card dark:to-card/20 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner group/map">
            <div className="absolute inset-0 opacity-10 group-hover/map:opacity-20 transition-opacity duration-500 pointer-events-none">
              {/* Mock transit line coordinates SVG map background */}
              <svg className="w-full h-full stroke-primary" strokeWidth="1.5" strokeDasharray="3 3" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M10,20 L30,40 L60,30 L90,80" fill="none" />
                <path d="M20,90 L40,60 L70,70 L80,10" fill="none" />
                <circle cx="30" cy="40" r="3" className="fill-primary animate-ping" />
                <circle cx="70" cy="70" r="3" className="fill-primary animate-ping" />
              </svg>
            </div>
            
            <div className="z-10 space-y-2">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover/map:scale-105">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.89-1.63A1.125 1.125 0 0021 15.74V4.756c0-.808-.855-1.34-1.612-1.057l-4.777 1.592A1.122 1.122 0 0113.8 5.3l-3.6-1.2a1.124 1.124 0 00-.802 0L4.507 5.73A1.125 1.125 0 003 6.786v10.986c0 .808.855 1.34 1.612 1.057l4.777-1.592a1.122 1.122 0 01.802-.016l3.6 1.2a1.124 1.124 0 00.802 0z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-sm font-bold text-foreground">Interactive Transit Radar</Typography>
              <p className="text-[10px] text-muted-foreground max-w-xs mt-1 leading-relaxed font-medium">
                Expansion plans underway for other cities in Kerala (Trivandrum, Kozhikode, Thrissur). Map interface will load here.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Support & Contact channels + Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Quick Support Contacts */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">
              Direct Contact & Support Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group/item p-5 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm mb-3 group-hover/item:scale-105 transition-transform duration-300">
                  <svg className="h-4.5 w-4.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.58-6.58l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.5A2.25 2.25 0 001.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-xs font-extrabold text-foreground block">Support Hotline</span>
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-[10px] text-primary hover:underline block mt-1.5 font-bold">
                  {CONTACT_DETAILS.phone}
                </a>
              </div>
              
              <div className="group/item p-5 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm mb-3 group-hover/item:scale-105 transition-transform duration-300">
                  <svg className="h-4.5 w-4.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-extrabold text-foreground block">Email Coordinator</span>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-[10px] text-primary hover:underline block mt-1.5 font-bold truncate">
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              
              <div className="group/item p-5 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm mb-3 group-hover/item:scale-105 transition-transform duration-300">
                  <svg className="h-4.5 w-4.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-extrabold text-foreground block">Operations Hours</span>
                <span className="text-[10px] text-muted-foreground block mt-1.5 font-bold">
                  Mon – Sat, 6 AM – 9 PM
                </span>
              </div>
            </div>
          </div>

          {/* Trust stats block */}
          <div className="p-6 rounded-2xl border border-border/60 bg-card flex flex-col justify-center gap-3">
            <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest block">Verified Platform Data</span>
            <div className="flex justify-between items-center text-xs font-extrabold border-b border-border/40 pb-2.5">
              <span className="text-muted-foreground font-medium">Meals Served</span>
              <span className="text-foreground">50,000+</span>
            </div>
            <div className="flex justify-between items-center text-xs font-extrabold">
              <span className="text-muted-foreground font-medium">Weekly Retention</span>
              <span className="text-foreground">82%</span>
            </div>
          </div>
        </div>

        {/* 4. Active Newsletter Section */}
        <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 backdrop-blur-md p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 relative">
          <div className="space-y-1">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-foreground">Weekly Nutrition Newsletter</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">
              Get clean diet recipes, macro charts, and menu updates directly in your inbox.
            </p>
          </div>
          
          {subscribed ? (
            <div className="text-xs font-extrabold text-primary bg-primary/10 px-4 py-2.5 rounded-full border border-primary/20 animate-pulse w-full max-w-sm text-center">
              ✓ Thank you! You have successfully subscribed.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-sm shrink-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address..."
                aria-label="Newsletter email address"
                className="flex-grow h-10 px-4 rounded-full border border-border/80 bg-background/60 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              />
              <button
                type="submit"
                className="h-10 px-6 rounded-full bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-[0_4px_12px_rgba(26,79,53,0.15)] hover:-translate-y-0.5 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

      </Container>
    </Section>
  );
}

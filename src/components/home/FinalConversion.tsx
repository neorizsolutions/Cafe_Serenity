'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { CONTACT_DETAILS } from '@/constants';

export default function FinalConversion() {
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
    <Section bg="white" className="relative border-t border-border overflow-hidden" id="contact">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand-gold/5 blur-3xl" />

      <Container className="space-y-20">
        
        {/* 1. Main Conversion CTA Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
            Start Clean Living
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Your Daily Health & Food Spot <br className="hidden sm:inline" />
            Starts with Café Serenity
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium opacity-90">
            Say goodbye to heavy, oily restaurant takeaways and daily ordering fatigue. Let portion-controlled, dietitian-checked boxes fuel your wellness goals.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-8 text-sm font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
            >
              <span>Inquire via WhatsApp</span>
            </Link>
            <Link
              href="/healthy-choices"
              className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-[#1C1C1E] bg-transparent hover:bg-[#1C1C1E] px-8 text-sm font-semibold text-[#1C1C1E] hover:text-[#F7F4EE] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center"
            >
              Explore Healthy Choices
            </Link>
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
              <div className="group/item p-5 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-brand-gold/25 hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm mb-3 group-hover/item:scale-105 transition-transform duration-300">
                  <svg className="h-4.5 w-4.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.58-6.58l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.5A2.25 2.25 0 001.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-xs font-extrabold text-[#1C1C1E] block">Support Hotline</span>
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-[10px] text-brand-gold hover:underline block mt-1.5 font-bold">
                  {CONTACT_DETAILS.phone}
                </a>
              </div>
              
              <div className="group/item p-5 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-brand-gold/25 hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm mb-3 group-hover/item:scale-105 transition-transform duration-300">
                  <svg className="h-4.5 w-4.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a3.375 3.375 0 11-6.75 0 3.375 3.375 0 116.75 0z" />
                  </svg>
                </div>
                <span className="text-xs font-extrabold text-[#1C1C1E] block">WhatsApp Support</span>
                <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[10px] text-brand-gold hover:underline block mt-1.5 font-bold truncate">
                  Chat Now →
                </a>
              </div>
              
              <div className="group/item p-5 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-brand-gold/25 hover:-translate-y-0.5">
                <div className="h-8 w-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm mb-3 group-hover/item:scale-105 transition-transform duration-300">
                  <svg className="h-4.5 w-4.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-extrabold text-[#1C1C1E] block">Operations Hours</span>
                <span className="text-[10px] text-muted-foreground block mt-1.5 font-bold">
                  Daily, 5 AM – 3 PM
                </span>
              </div>
            </div>
          </div>

          {/* Trust stats block */}
          <div className="p-6 rounded-2xl border border-border/60 bg-card flex flex-col justify-center gap-3">
            <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest block">Verified Platform Data</span>
            <div className="flex justify-between items-center text-xs font-extrabold border-b border-border/40 pb-2.5">
              <span className="text-muted-foreground font-medium">Meals Served</span>
              <span className="text-[#1C1C1E]">50,000+</span>
            </div>
            <div className="flex justify-between items-center text-xs font-extrabold">
              <span className="text-muted-foreground font-medium">Weekly Retention</span>
              <span className="text-[#1C1C1E]">82%</span>
            </div>
          </div>
        </div>

        {/* 4. Active Newsletter Section */}
        <div className="rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 backdrop-blur-md p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:border-brand-gold/25 transition-all duration-500 relative">
          <div className="space-y-1">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-foreground">Weekly Nutrition Newsletter</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">
              Get clean diet recipes, macro charts, and menu updates directly in your inbox.
            </p>
          </div>
          
          {subscribed ? (
            <div className="text-xs font-extrabold text-brand-gold bg-brand-gold/10 px-4 py-2.5 rounded-full border border-brand-gold/20 animate-pulse w-full max-w-sm text-center">
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
                suppressHydrationWarning
                className="flex-grow h-11 px-4 rounded-full border border-border/80 bg-background/60 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/20"
              />
              <button
                type="submit"
                suppressHydrationWarning
                className="h-11 px-6 rounded-full bg-brand-gold text-xs font-bold text-brand-dark hover:bg-brand-gold/90 transition-all shadow hover:-translate-y-0.5 active:scale-95"
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

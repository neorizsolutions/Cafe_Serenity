'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';
import { getFAQSchema } from '@/utils/seo';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_BY_CATEGORY: Record<string, FAQItem[]> = {
  general: [
    {
      question: 'Is Café Serenity a restaurant?',
      answer: 'Yes! We are a calm, cozy food spot in Kakkanad offering fresh everyday café breakfast favourites and premium, dietitian-designed healthy meal subscriptions.'
    },
    {
      question: 'Are there long-term contracts?',
      answer: 'No. Subscribe weekly or monthly. Pause, resume, or cancel anytime via support call or email.'
    }
  ],
  ordering: [
    {
      question: 'What is the daily cutoff time for plan changes?',
      answer: 'Standard pauses and changes require a 12-hour notice prior to delivery.'
    },
    {
      question: 'How do I start a subscription?',
      answer: 'Simply contact us via WhatsApp or phone. We will set up your preferences and coordinate directly without any complex online checkout steps.'
    }
  ],
  subscriptions: [
    {
      question: 'Can I swap menu items during my subscription?',
      answer: 'Yes. Check the menu and contact support before 6 PM to swap.'
    },
    {
      question: 'How do weekly and monthly subscription extensions work?',
      answer: 'Pausing locks your delivery credits and extends your plan duration.'
    }
  ],
  payments: [
    {
      question: 'Which payment methods are accepted?',
      answer: 'We accept UPI (Google Pay, PhonePe, Paytm), net banking, and card networks for direct coordination.'
    },
    {
      question: 'Are auto-renewals enabled?',
      answer: 'Auto-renewals are disabled. Renewal alerts are sent via SMS 2 days prior.'
    }
  ],
  delivery: [
    {
      question: 'Do you deliver to Infopark?',
      answer: 'Yes. We drop lunch boxes at office receptions and park gates.'
    },
    {
      question: 'What are the daily delivery hours?',
      answer: 'Lunch is delivered 11:30 AM - 1:15 PM; dinner 6:30 PM - 8:15 PM.'
    }
  ],
  meal_plans: [
    {
      question: 'Can I choose a specific diet plan?',
      answer: 'Yes. Select the ₹69 Value Box, Weight Loss, Gym, or Diabetic plans.'
    },
    {
      question: 'Can I swap meal plan categories mid-month?',
      answer: 'Yes. Subscriptions can be migrated mid-cycle by messaging our dietitian team.'
    }
  ],
  nutrition: [
    {
      question: 'How are calories and macros verified?',
      answer: 'Recipes are portion-weighed. Macros and calories are printed on every label.'
    },
    {
      question: 'What oils do you use in preparation?',
      answer: 'Cooked exclusively using portion-regulated cold-pressed local oils. Never reused.'
    }
  ],
  corporate: [
    {
      question: 'Do you provide bulk meal plans for office teams?',
      answer: 'We offer discount brackets and unified billing for corporate teams.'
    },
    {
      question: 'How do corporate trial weeks work?',
      answer: 'Corporate teams can book a 1-day or 3-day menu trial.'
    }
  ],
  support: [
    {
      question: 'How do I reach customer support?',
      answer: 'Reach support via call or email. Open Mon - Sat.'
    },
    {
      question: 'What is the support response time SLA?',
      answer: 'Phone replies are immediate; emails within 12 hours.'
    }
  ]
};

export default function TrustCenter() {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const activeFAQs = FAQ_BY_CATEGORY[activeCategory] || [];

  // Injects FAQ schema in DOM for SEO bots
  const schemaFAQs = getFAQSchema(
    Object.values(FAQ_BY_CATEGORY).flat()
  );

  return (
    <Section bg="white" className="relative border-t border-border overflow-hidden">
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQs) }} />

      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
            Verified Standards
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Café Serenity Trust & Safety Center
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Review kitchen sanitation guidelines, dietitian-approved parameters, and flexible policies.
          </Typography>
        </div>

        {/* 1. Categorized FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Category Filters */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] text-muted-foreground uppercase font-black tracking-wider block">FAQ Categories</span>
            <div className="flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1">
              {[
                { key: 'general', label: 'General Info' },
                { key: 'ordering', label: 'Ordering Policies' },
                { key: 'subscriptions', label: 'Subscriptions' },
                { key: 'payments', label: 'Payments' },
                { key: 'delivery', label: 'Delivery' },
                { key: 'meal_plans', label: 'Meal Plans' },
                { key: 'nutrition', label: 'Nutrition & Ingredients' },
                { key: 'corporate', label: 'Corporate Orders' },
                { key: 'support', label: 'Customer Support' }
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`group/btn h-10 px-4 rounded-xl text-xs font-bold text-left capitalize transition-all border flex items-center justify-between shrink-0 ${
                    activeCategory === cat.key
                      ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-sm'
                      : 'border-border/60 bg-card text-muted-foreground hover:text-foreground hover:border-brand-gold/25'
                  }`}
                >
                  <span>{cat.label}</span>
                  <svg 
                    className={`h-3 w-3 fill-current transition-transform duration-300 ${
                      activeCategory === cat.key ? 'translate-x-0.5 opacity-80' : 'opacity-40 group-hover/btn:translate-x-0.5'
                    }`} 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right: FAQ Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {activeFAQs.map((faq, idx) => (
              <details
                key={`${activeCategory}-${idx}`}
                className="group border border-border/60 bg-card rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-brand-gold transition-colors focus:ring-2 focus:ring-brand-gold/25 focus:rounded-lg">
                  <span className="text-xs sm:text-sm font-bold leading-snug tracking-tight pr-4">{faq.question}</span>
                  <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-brand-gold">
                    <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed text-xs font-medium border-t border-border/40 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* 2. Pillars of Trust */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Our Six Pillars of Trust
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              We maintain absolute transparency on how your daily food is prepared, packed, and delivered.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Hygienic Preparation</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Glove-wearing policies, RO filtration, and daily kitchen sanitization.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18M5.3 5.3l13.4 13.4M5.3 18.7L18.7 5.3" />
                  </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Ingredient Quality</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Fresh local vegetables, lean proteins, complex carbs, and zero preservatives.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Leak-Proof Packaging</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Food-grade, leak-proof packaging to retain freshness and transit safety.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Nutrition Standards</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Dietitian-balanced calories, custom macros, and rich fiber ratios.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9 0h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75M19.5 18.75v-9m0 9h1.5m-1.5-9h1.5M18 5.25h1.5a1.5 1.5 0 011.5 1.5v3h-3v-4.5zM3 13.5h13.5m0-4.5H4.5A1.5 1.5 0 003 10.5v3.75" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Transit Delivery</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Coordinated routes, office desk drops, and temperature-controlled packaging.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Flexible Subscriptions</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Pause deliveries on travel days and roll over credits instantly.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* 3. Food Safety & License Area */}
        <div className="rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 p-8 text-center space-y-4 max-w-2xl mx-auto shadow-sm hover:shadow-md hover:border-brand-gold/25 transition-all duration-500 group relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Licensed Safety Standards
          </h4>
          <p className="text-xs leading-relaxed text-muted-foreground max-w-md mx-auto font-medium">
            FSSAI certified operations and safety-registered kitchen guidelines.
          </p>
          <div className="inline-flex items-center gap-2 rounded-xl bg-background px-5 py-2 text-xs font-extrabold text-foreground border border-border/80 shadow-sm mt-2">
            <svg className="h-4 w-4 text-brand-gold shrink-0" fill="none" strokeWidth="3.0" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>FSSAI License: {CONTACT_DETAILS.fssaiNumber}</span>
          </div>
        </div>

        {/* 4. Support Channels Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-lg font-bold text-foreground tracking-tight">
              Contact Support Concierge
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Have specific custom requirements? We are here to assist.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center z-10">
            <Link
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group/channel relative p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 hover:-translate-y-1 transition-all duration-300 space-y-3 block hover:border-brand-gold/25 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover/channel:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              
              <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover/channel:scale-105">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-foreground">Diet Consultation</h4>
              <p className="text-[10px] text-muted-foreground leading-normal font-medium">Inquire via WhatsApp</p>
            </Link>
            
            <a
              href="tel:+919876543210"
              className="group/channel relative p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 hover:-translate-y-1 transition-all duration-300 space-y-3 block hover:border-brand-gold/25"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover/channel:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              
              <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover/channel:scale-105">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.944l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-foreground">Call Support</h4>
              <p className="text-[10px] text-muted-foreground leading-normal font-medium">Mon – Sat, 8 AM – 8 PM</p>
            </a>
            
            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group/channel relative p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 hover:-translate-y-1 transition-all duration-300 space-y-3 block hover:border-brand-gold/25"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover/channel:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              
              <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover/channel:scale-105">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM21.361 11c-.463 0-.895-.195-1.217-.537l-3.322-3.528A.75.75 0 0117.38 5.75h2.12v-.375a2.25 2.25 0 00-2.25-2.25h-9a2.25 2.25 0 00-2.25 2.25V18a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-3.375H19.5a1.875 1.875 0 011.875 1.875v.375c0 .345-.28.625-.625.625H16.5a1.125 1.125 0 01-1.125-1.125v-1.5a1.125 1.125 0 011.125-1.125h4.861z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-foreground">WhatsApp Chat</h4>
              <p className="text-[10px] text-muted-foreground leading-normal font-medium">Response: Within minutes</p>
            </a>

            <div className="relative p-6 rounded-2xl border border-dashed border-border/80 bg-card/60 space-y-3 flex flex-col justify-center items-center min-h-[140px]">
              <div className="h-10 w-10 rounded-xl bg-muted text-muted-foreground/60 flex items-center justify-center mx-auto shadow-sm">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-muted-foreground/80">Live Web Chat</h4>
              <p className="text-[10px] text-muted-foreground/60 leading-normal font-medium">[Future Integration]</p>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

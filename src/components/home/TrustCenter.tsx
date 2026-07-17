'use client';

import { useState } from 'react';
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
      question: 'Is Alakapuri a restaurant?',
      answer: 'No. We are a dedicated Healthy Meal Subscription platform. All meals are designed by clinical dietitians and cooked in FSSAI-certified central hubs using portioned ingredients.'
    },
    {
      question: 'Are there long-term contracts?',
      answer: 'No. You can subscribe weekly (6 days) or monthly (24 days). You can cancel, freeze, or resume your plan anytime via our WhatsApp support line.'
    }
  ],
  ordering: [
    {
      question: '[Policy Placeholder] What is the daily cutoff time for order changes?',
      answer: 'This is a placeholder for our ordering cutoff policies. Standard modifications or daily route pauses require a 12-hour advanced notice before the scheduled dispatch slot.'
    },
    {
      question: '[Policy Placeholder] How do I place an order?',
      answer: 'This is a placeholder for our order booking pipeline. Subscriptions are initiated on our website plans page and configured directly via our WhatsApp support gateway.'
    }
  ],
  subscriptions: [
    {
      question: 'Can I swap menu items during my subscription?',
      answer: 'Yes. Review our weekly menu on the Pricing page, and ping our WhatsApp support line before 6 PM to swap tomorrow\'s meal with another active dish.'
    },
    {
      question: '[Policy Placeholder] How do weekly and monthly subscription extensions work?',
      answer: 'This is a placeholder for subscription durations. If you pause your deliveries, your credits are locked and the subscription validity duration is automatically extended by the paused days.'
    }
  ],
  payments: [
    {
      question: 'Which payment methods are accepted?',
      answer: 'We accept all UPI applications (Google Pay, PhonePe, Paytm), net banking channels, and local card networks. Billing is verified during onboarding.'
    },
    {
      question: '[Policy Placeholder] Are auto-renewals enabled?',
      answer: 'This is a placeholder for subscription renewals. Auto-renewal is disabled by default. You will receive renewal alerts on WhatsApp 2 days prior to plan completion.'
    }
  ],
  delivery: [
    {
      question: 'Do you deliver to Infopark and Technopark?',
      answer: 'Yes. Our delivery riders drop off fresh lunch boxes directly at office receptions, security gates, or coordinated hubs across Kochi Kakkanad and Trivandrum Kazhakkoottam.'
    },
    {
      question: 'What are the daily delivery hours?',
      answer: 'Lunch boxes are dispatched between 11:30 AM and 1:15 PM daily. Dinner boxes are delivered between 6:30 PM and 8:15 PM.'
    }
  ],
  meal_plans: [
    {
      question: 'Can I choose a specific diet plan?',
      answer: 'Yes. We offer target configurations: ₹69 Budget Box, Weight Loss, Gym Protein, and Diabetic-Friendly plans.'
    },
    {
      question: '[Policy Placeholder] Can I swap meal plan categories mid-month?',
      answer: 'This is a placeholder for category swaps. Subscriptions can be migrated between plans mid-cycle by coordinating with our dietitian support team.'
    }
  ],
  nutrition: [
    {
      question: 'How are calories and macros verified?',
      answer: 'Every recipe is weighed and scaled according to standards verified in dietitian software. Macros (Protein, Carbs, Fats, Calories) are printed directly on every box label.'
    },
    {
      question: 'What oils do you use in preparation?',
      answer: 'We strictly use only cold-pressed local coconut oil, olive oil, and sesame oil in portion-regulated weights. We never reuse cooking oils.'
    }
  ],
  corporate: [
    {
      question: '[Policy Placeholder] Do you provide bulk meal plans for office teams?',
      answer: 'This is a placeholder for corporate bulk pricing. We configure customized discount brackets and consolidated billing profiles for companies ordering 10+ daily boxes.'
    },
    {
      question: '[Policy Placeholder] How do corporate trial weeks work?',
      answer: 'This is a placeholder for trial sessions. Office teams can book a single-day or 3-day corporate lunch trial to test menu quality before establishing subscriptions.'
    }
  ],
  support: [
    {
      question: 'How do I reach customer support?',
      answer: 'You can reach our support concierge via WhatsApp chat, voice calls, or email. The active help desk operates Monday through Saturday from 8 AM to 8 PM.'
    },
    {
      question: '[Policy Placeholder] What is the support response time SLA?',
      answer: 'This is a placeholder for support responses. We target WhatsApp replies within 10 minutes and email responses within 12 hours during active schedule windows.'
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
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Verified Standards
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Alakapuri Trust & Safety Center
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Review our kitchen sanitation guidelines, dietitian-approved parameters, and flexible subscription policies.
          </Typography>
        </div>

        {/* 1. Categorized FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Category Filters */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] text-muted-foreground uppercase font-black tracking-wider block">FAQ Categories</span>
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
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                      : 'border-border/60 bg-card text-muted-foreground hover:text-foreground hover:border-primary/20'
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
                <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 focus:rounded-lg">
                  <span className="text-sm font-bold leading-snug tracking-tight">{faq.question}</span>
                  <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary">
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

        {/* 2. Expanded Kitchen & Ingredient Guidelines Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Our Six Pillars of Trust
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              We maintain absolute transparency on how your daily food is prepared, packed, and drop-shipped.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Hygienic Preparation</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Strict glove-wearing rules, filtered RO water preps, FSSAI certified central prep hubs, and daily kitchen sanitizations.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18M5.3 5.3l13.4 13.4M5.3 18.7L18.7 5.3" />
                  </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Ingredient Quality</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    We procure fresh farm vegetables, whole grains, and lean proteins daily. Zero artificial thickeners or MSG chemicals.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Leak-Proof Packaging</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Safe, food-grade, leak-proof packaging blocks to retain meal freshness and support secure transit.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Nutrition Standards</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Clinical dietitian balanced kcal verification, verified fiber ratios, and custom macro tracking.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9 0h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75M19.5 18.75v-9m0 9h1.5m-1.5-9h1.5M18 5.25h1.5a1.5 1.5 0 011.5 1.5v3h-3v-4.5zM3 13.5h13.5m0-4.5H4.5A1.5 1.5 0 003 10.5v3.75" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Transit Delivery</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Strict delivery routing schedules, office desk drops, and temperature control box packaging.
                  </p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
                    <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Flexible Subscriptions</Typography>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Freeze delivery credits on travel days. Manage your active subscription schedule directly via text message.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* 3. Food Safety & License Area */}
        <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 p-8 text-center space-y-4 max-w-2xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 group relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
            Licensed Safety Standards
          </h4>
          <p className="text-xs leading-relaxed text-muted-foreground max-w-md mx-auto font-medium">
            Alakapuri operates under standardized safety registrations. (FSSAI License registration verified in constants).
          </p>
          <div className="inline-flex items-center gap-2 rounded-xl bg-background px-5 py-2 text-xs font-extrabold text-foreground border border-border/80 shadow-sm mt-2">
            <svg className="h-4 w-4 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.0" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>FSSAI License: {CONTACT_DETAILS.fssaiNumber}</span>
          </div>
        </div>

        {/* 4. Support Channels Grid including Live Chat Placeholder */}
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
            <a
              href="https://wa.me/919876543210?text=Hi%20Alakapuri%2C%20I'd%20like%20to%20consult%20on%20my%20weekly%20meal%20diet."
              target="_blank"
              rel="noopener noreferrer"
              className="group/channel relative p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 hover:-translate-y-1 transition-all duration-300 space-y-3 block hover:border-primary/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover/channel:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover/channel:scale-105">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-foreground">WhatsApp Chat</h4>
              <p className="text-[10px] text-muted-foreground leading-normal font-medium">Response: 5-10 mins (G-Pay setup)</p>
            </a>
            
            <a
              href="tel:+919876543210"
              className="group/channel relative p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 hover:-translate-y-1 transition-all duration-300 space-y-3 block hover:border-primary/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover/channel:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover/channel:scale-105">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.944l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-foreground">Call Support</h4>
              <p className="text-[10px] text-muted-foreground leading-normal font-medium">Schedule: Mon – Sat, 8 AM – 8 PM</p>
            </a>
            
            <a
              href="mailto:support@alakapurimeals.com"
              className="group/channel relative p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 hover:-translate-y-1 transition-all duration-300 space-y-3 block hover:border-primary/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover/channel:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover/channel:scale-105">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-foreground">Email Support</h4>
              <p className="text-[10px] text-muted-foreground leading-normal font-medium">Response: 12-24 hours (Corporate trials)</p>
            </a>

            <div className="relative p-6 rounded-2xl border border-dashed border-border/80 bg-card/60 space-y-3 flex flex-col justify-center items-center min-h-[140px]">
              <div className="h-10 w-10 rounded-xl bg-muted text-muted-foreground/60 flex items-center justify-center mx-auto shadow-sm">
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-muted-foreground/80">Live Web Chat</h4>
              <p className="text-[10px] text-muted-foreground/60 leading-normal font-medium">[Future Integration Placeholder]</p>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

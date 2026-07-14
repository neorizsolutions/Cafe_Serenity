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
      question: 'Is Alakapuri a restaurant?',
      answer: 'No. We are a dedicated Healthy Meal Subscription platform. All meals are designed by clinical dietitians and cooked in FSSAI-certified central hubs using portioned ingredients.'
    },
    {
      question: 'Are there long-term contracts?',
      answer: 'No. You can subscribe weekly (6 days) or monthly (24 days). You can cancel, freeze, or resume your plan anytime via our WhatsApp support line.'
    }
  ],
  delivery: [
    {
      question: 'Do you deliver to Infopark and Technopark?',
      answer: 'Yes. Our delivery riders drop off fresh lunch boxes directly at office receptions, security gates, or coordinated hubs across Kochi Kakkanad and Trivandrum Kazhakkoottam.'
    },
    {
      question: 'What are the delivery hours?',
      answer: 'Lunch boxes are dispatched between 11:30 AM and 1:15 PM daily. Dinner boxes are delivered between 6:30 PM and 8:15 PM.'
    }
  ],
  nutrition: [
    {
      question: 'How are calories and macros verified?',
      answer: 'Every recipe is weighed and scaled according to standards verified in dietician software. Macros (Protein, Carbs, Fats, Calories) are printed directly on every box label.'
    },
    {
      question: 'What oils do you use in preparation?',
      answer: 'We strictly use only cold-pressed local coconut oil, olive oil, and sesame oil in portion-regulated weights. We never reuse cooking oils.'
    }
  ],
  customization: [
    {
      question: 'Can I pause my subscription?',
      answer: 'Yes. Simply send a text to our WhatsApp line 12 hours prior. We freeze your delivery for that day and automatically extend your active subscription credit.'
    },
    {
      question: 'Can I choose a specific diet plan?',
      answer: 'Yes. We offer target configurations: ₹69 Budget Box, Weight Loss, Gym Protein, and Diabetic-Friendly plans.'
    }
  ]
};

export default function TrustCenter() {
  const [activeCategory, setActiveCategory] = useState<'general' | 'delivery' | 'nutrition' | 'customization'>('general');
  const activeFAQs = FAQ_BY_CATEGORY[activeCategory];

  // Injects FAQ schema in DOM for SEO bots
  const schemaFAQs = getFAQSchema(
    Object.values(FAQ_BY_CATEGORY).flat()
  );

  return (
    <Section bg="white" className="relative border-t border-border">
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQs) }} />

      <Container className="space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label">Verified Standards</Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Alakapuri Trust & Safety Center
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Review our kitchen sanitation guidelines, dietician-approved parameters, and flexible subscription policies.
          </Typography>
        </div>

        {/* 1. Categorized FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Category Filters */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] text-muted-foreground uppercase font-black tracking-wider block">FAQ Categories</span>
            <div className="flex flex-col gap-2">
              {(['general', 'delivery', 'nutrition', 'customization'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`h-11 px-5 rounded-xl text-xs font-bold text-left capitalize transition-all border ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                      : 'border-border bg-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat === 'nutrition' ? 'Nutrition & Ingredients' : cat === 'customization' ? 'Pause & Schedule' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right: FAQ Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {activeFAQs.map((faq, idx) => (
              <details
                key={`${activeCategory}-${idx}`}
                className="group border border-border bg-card rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-primary transition-colors">
                  <span className="text-sm font-bold leading-snug">{faq.question}</span>
                  <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary">
                    <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed text-xs">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* 2. Kitchen & Ingredient Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
            <span className="text-2xl">🧼</span>
            <Typography variant="h3" className="text-base font-bold text-foreground">Kitchen Hygiene Standards</Typography>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Strict glove-wearing policies, filtered water preps, FSSAI certified central hubs, daily kitchen sanitizations.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
            <span className="text-2xl">🌽</span>
            <Typography variant="h3" className="text-base font-bold text-foreground">Ingredient Sourcing</Typography>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We procure fresh vegetables, whole grains, and lean proteins daily. Zero chemical thickeners or MSG artificial flavorings.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-3">
            <span className="text-2xl">📦</span>
            <Typography variant="h3" className="text-base font-bold text-foreground">Leak-Proof Packaging</Typography>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Safe, food-grade, leak-proof packaging blocks to retain meal freshness and support secure transit.
            </p>
          </div>
        </div>

        {/* 3. Food Safety & License Area Placeholder */}
        <div className="rounded-3xl border border-border bg-secondary/15 p-8 text-center space-y-4 max-w-2xl mx-auto">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
            Licensed Safety Standards
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
            Alakapuri operates under standardized safety registrations. (FSSAI License registration verified in constants).
          </p>
          <span className="inline-flex rounded bg-background px-4 py-1 text-xs font-black text-foreground border border-border">
            FSSAI License: {CONTACT_DETAILS.fssaiNumber}
          </span>
        </div>

        {/* 4. Support Channels Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <Typography variant="h3" className="text-lg font-bold text-foreground">
              Contact Support Concierge
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground">
              Have specific custom requirements? We are here to assist.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <a
              href="https://wa.me/919876543210?text=Hi%20Alakapuri%2C%20I'd%20like%20to%20consult%20on%20my%20weekly%20meal%20diet."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
            >
              <span className="text-lg block">💬</span>
              <h4 className="text-xs font-bold text-foreground">WhatsApp Chat</h4>
              <p className="text-[10px] text-muted-foreground leading-normal">Response: 5-10 minutes (G-Pay setup)</p>
            </a>
            <a
              href="tel:+919876543210"
              className="p-5 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
            >
              <span className="text-lg block">📞</span>
              <h4 className="text-xs font-bold text-foreground">Call Support</h4>
              <p className="text-[10px] text-muted-foreground leading-normal">Schedule: Mon – Sat, 8 AM – 8 PM</p>
            </a>
            <a
              href="mailto:support@alakapurimeals.com"
              className="p-5 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
            >
              <span className="text-lg block">✉️</span>
              <h4 className="text-xs font-bold text-foreground">Email Support</h4>
              <p className="text-[10px] text-muted-foreground leading-normal">Response: 12-24 hours (Corporate trials)</p>
            </a>
          </div>
        </div>

      </Container>
    </Section>
  );
}

'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { useCheckout } from '@/context/CheckoutContext';
import { CONTACT_DETAILS } from '@/constants';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  popular?: boolean;
}

function PricingCard({ title, price, description, features, link, popular }: PricingCardProps) {
  const { openCheckout } = useCheckout();
  return (
    <div 
      className={`group relative rounded-3xl border p-6 flex flex-col justify-between h-full gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        popular 
          ? 'border-primary bg-primary/[0.01] shadow-[0_8px_30px_rgba(16,185,129,0.04)]' 
          : 'border-border/60 bg-card hover:border-primary/20 shadow-sm'
      }`}
    >
      {/* Decorative ambient card glows */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

      {popular && (
        <span className="absolute -top-3 left-6 inline-flex rounded-full bg-primary px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-primary-foreground shadow-sm">
          Most Popular Diet
        </span>
      )}

      <div className="space-y-4">
        <div>
          <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{title}</span>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-2xl font-black text-foreground">{price}</span>
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">/ Meal</span>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground/90 mt-2.5 font-medium">
            {description}
          </p>
        </div>

        {/* Shortened target benefit indicators */}
        <ul className="space-y-2.5 text-xs font-semibold text-foreground/95" aria-label={`Benefits of ${title}`}>
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <svg className="h-4.5 w-4.5 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2.5 pt-4 border-t border-border/40">
        <button
          onClick={() => openCheckout(title)}
          className="group/btn flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          <span>Choose Plan</span>
        </button>
        <Link
          href={link}
          className="flex h-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-4 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  const { openCheckout } = useCheckout();

  return (
    <Section bg="white" className="relative border-t border-border overflow-hidden">
      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Subscription Pricing
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Healthy Eating Made Affordable
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Select a plan mapped to your goals. Pause or reschedule anytime.
          </Typography>
        </div>

        {/* Pricing Cards Grid (1 Spotlight + 3 standard configurations) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {/* Spotlight Column: Value Box */}
          <div className="group relative rounded-3xl border border-emerald-600/30 bg-emerald-500/[0.02] p-6 flex flex-col justify-between h-full gap-6 shadow-[0_8px_30px_rgba(16,185,129,0.03)] hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
            <span className="absolute -top-3 left-6 inline-flex rounded-full bg-emerald-600 px-3.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white shadow-sm animate-pulse">
              Value Spotlight
            </span>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-emerald-800 dark:text-emerald-300 uppercase font-black tracking-widest">Everyday Value Box</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-black text-foreground">₹69</span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">/ Meal</span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground/90 mt-2.5 font-medium">
                  Portion-weighed, low-oil everyday lunches delivered across Kochi.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs font-semibold text-foreground/95" aria-label="Value box features">
                {[
                  'Portion-scaled macros',
                  'Regulated local oils',
                  'Clean FSSAI standards',
                  'No palm oil or MSG'
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="h-4.5 w-4.5 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-border/40">
              <button
                onClick={() => openCheckout('Weight Loss Plan')}
                className="group/btn flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.15)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Choose Plan</span>
              </button>
              <Link
                href="/meal-plans"
                className="flex h-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-4 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                View Menu
              </Link>
            </div>
          </div>

          <MotionWrapper animation="fade-up">
            <PricingCard
              title="Weight Loss Deficit"
              price="₹199"
              description="Low-carb deficit menu formulated to burn fat cleanly."
              features={[
                '350-400 kcal target',
                '24g lean protein focus',
                'Low glycemic indexes',
                'Dietitian scaled menu'
              ]}
              link="/meal-plans/weight-loss"
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <PricingCard
              title="High Protein & Gym"
              price="₹249"
              description="High-protein muscle support meals cooked with local oils."
              features={[
                '550-600 kcal target',
                '45g clean protein focus',
                'Complex carb loading',
                'Recovery diet verified'
              ]}
              link="/meal-plans/high-protein"
              popular
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <PricingCard
              title="Diabetic Friendly"
              price="₹219"
              description="Glucose-safe meals avoiding simple sugars and high-GI grains."
              features={[
                '400 kcal glycemic scale',
                'Insulin friendly grains',
                'Zero refined sugar',
                'Clinical fiber indexes'
              ]}
              link="/meal-plans/diabetic"
            />
          </MotionWrapper>
        </div>

        {/* Micro FAQ Accordion Block (Pricing specific details) */}
        <div className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-border/60">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-lg font-bold text-foreground tracking-tight">
              Pricing & Billing FAQ
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Important details on how Alakapuri meal subscriptions are billed.
            </Typography>
          </div>

          <div className="space-y-4">
            <details className="group border border-border/60 bg-card rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20">
                <span className="text-xs sm:text-sm font-bold">What payment methods are supported?</span>
                <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary">
                  <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[11px] font-medium border-t border-border/40 pt-3">
                We accept UPI (G-Pay, PhonePe) and net banking. Verification is instant.
              </p>
            </details>

            <details className="group border border-border/60 bg-card rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20">
                <span className="text-xs sm:text-sm font-bold">Can I swap dishes mid-week?</span>
                <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary">
                  <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[11px] font-medium border-t border-border/40 pt-3">
                Review the menu and message support before 6 PM to swap.
              </p>
            </details>

            <details className="group border border-border/60 bg-card rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20">
                <span className="text-xs sm:text-sm font-bold">Are there hidden cancellation fees?</span>
                <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary">
                  <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[11px] font-medium border-t border-border/40 pt-3">
                No cancel fees. Pause anytime and lock your unused credits.
              </p>
            </details>
          </div>
        </div>

      </Container>
    </Section>
  );
}

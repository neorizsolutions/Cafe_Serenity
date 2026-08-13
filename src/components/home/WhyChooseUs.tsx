'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { cn } from '@/lib/utils';
import { useCheckout } from '@/context/CheckoutContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/20 flex flex-col gap-4">
      {/* Subtle card glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
      
      <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>
      
      <div className="space-y-2">
        <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">
          {title}
        </Typography>
        <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground font-medium">
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { openCheckout } = useCheckout();

  return (
    <Section bg="muted" className="relative border-t border-border overflow-hidden">
      {/* Background ambient highlights */}
      <div className="absolute top-[20%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[20%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />

      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            The Serenity Standard
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Why Choose Café Serenity?
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Hygienic prep, local fresh ingredients, and dietitian-approved meal plans.
          </Typography>
        </div>

        {/* Feature Grid with Visual Storytelling column */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: 2x2 Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            <MotionWrapper animation="fade-up">
              <FeatureCard
                icon={
                  <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Portion-Weighed Macros"
                description="Calories and macros printed directly on every box. Zero guesswork."
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <FeatureCard
                icon={
                  <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 006.1 1.908z" />
                  </svg>
                }
                title="Cold-Pressed Oils Only"
                description="Cooked with portion-regulated coconut, olive, or sesame oil. Never reused."
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <FeatureCard
                icon={
                  <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008z" />
                  </svg>
                }
                title="12-Hour Flexi-Freeze"
                description="Pause deliveries and roll over credits with a 12-hour support notice."
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <FeatureCard
                icon={
                  <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                }
                title="FSSAI Hygienic Cooking"
                description="Glove-wearing policies, RO water filtration, and sterile packing standards."
              />
            </MotionWrapper>
          </div>

          {/* Right Column: Visual Storytelling Box (Linear/Apple style) */}
          <div className="lg:col-span-5 flex items-stretch">
            <MotionWrapper animation="scale" className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/80 min-h-[320px] flex flex-col justify-end p-6 bg-muted group">
              <Image
                src="/images/why_choose_prep.png"
                alt="Professional FSSAI culinary standards kitchen meal prep"
                fill
                sizes="(max-w-md) 100vw, 500px"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />
              
              <div className="relative z-20 space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold px-2.5 py-0.5 text-[9px] font-black text-brand-dark uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-dark animate-pulse" />
                  Natural Cooking Standard
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Premium Ingredients, Locally Sourced
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-medium">
                  Fresh greens, lean proteins, and cold-pressed oils. Prepared daily.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* Benefits Comparison Grid */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Visual Platform Comparison
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              How Café Serenity healthy subscriptions differ from typical takeout.
            </Typography>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/10 text-foreground font-extrabold uppercase tracking-wider text-[10px] sm:text-[11px]">
                  <th scope="col" className="p-4 sm:p-5">Dietary Metric</th>
                  <th scope="col" className="p-4 sm:p-5">Typical Restaurant Delivery</th>
                  <th scope="col" className="p-4 sm:p-5 text-brand-gold bg-brand-gold/[0.03] border-x border-brand-gold/15">
                    <span className="flex items-center gap-2">
                      Café Serenity Subscriptions
                      <span className="inline-flex rounded-full bg-brand-gold/15 px-2 py-0.5 text-[8px] font-black text-brand-gold tracking-widest normal-case">
                        RECOMMENDED
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-foreground/80 font-medium">
                <tr className="hover:bg-secondary/5 transition-colors">
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground sm:text-[13px]">Oil & Fats Usage</td>
                  <td className="p-4 sm:p-5 flex items-center gap-2 text-red-700/80">
                    <svg className="h-4 w-4 shrink-0 text-red-500" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Reused fats and palm oil.
                  </td>
                  <td className="p-4 sm:p-5 text-brand-gold bg-brand-gold/[0.03] border-x border-brand-gold/15 font-bold">
                    <span className="flex items-center gap-2 text-brand-gold">
                      <svg className="h-4 w-4 shrink-0 text-brand-gold" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Measured cold-pressed oils.
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-secondary/5 transition-colors">
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground sm:text-[13px]">Nutrition & Macros</td>
                  <td className="p-4 sm:p-5 flex items-center gap-2 text-red-700/80">
                    <svg className="h-4 w-4 shrink-0 text-red-500" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    High sodium and MSG.
                  </td>
                  <td className="p-4 sm:p-5 text-brand-gold bg-brand-gold/[0.03] border-x border-brand-gold/15 font-bold">
                    <span className="flex items-center gap-2 text-brand-gold">
                      <svg className="h-4 w-4 shrink-0 text-brand-gold" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Low-sodium, natural ingredients.
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-secondary/5 transition-colors">
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground sm:text-[13px]">Scheduling Flex</td>
                  <td className="p-4 sm:p-5 flex items-center gap-2 text-red-700/80">
                    <svg className="h-4 w-4 shrink-0 text-red-500" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Unreliable transit drops.
                  </td>
                  <td className="p-4 sm:p-5 text-brand-gold bg-brand-gold/[0.03] border-x border-brand-gold/15 font-bold">
                    <span className="flex items-center gap-2 text-brand-gold">
                      <svg className="h-4 w-4 shrink-0 text-brand-gold" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      12-hour pause notice.
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-secondary/5 transition-colors">
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground sm:text-[13px]">Consistency & Costs</td>
                  <td className="p-4 sm:p-5 flex items-center gap-2 text-red-700/80">
                    <svg className="h-4 w-4 shrink-0 text-red-500" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    High delivery fees.
                  </td>
                  <td className="p-4 sm:p-5 text-brand-gold bg-brand-gold/[0.03] border-x border-brand-gold/15 font-bold">
                    <span className="flex items-center gap-2 text-brand-gold">
                      <svg className="h-4 w-4 shrink-0 text-brand-gold" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Dietitian-approved from ₹69.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Micro-Stats / Conversion Block (Glassmorphism layout) */}
        <div className="relative rounded-3xl border border-brand-gold/10 bg-white/70 dark:bg-card/75 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm group overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          <div className="max-w-xl space-y-4 text-left">
            <Typography variant="badge-label" className="text-[11px] tracking-widest text-brand-gold">
              Start Your Journey
            </Typography>
            <Typography variant="h3" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ready to take control of your daily nutrition?
            </Typography>
            <Typography variant="body-regular" className="text-sm text-muted-foreground leading-relaxed font-medium">
              Join active professionals across Kochi eating healthy.
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto z-10">
            <Link
              href="/meal-plans"
              className="flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-xs font-semibold text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-98"
            >
              Explore Plans
            </Link>
          </div>
        </div>

      </Container>
    </Section>
  );
}

'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { HEALTHY_MEAL_PLANS } from '@/data/healthy-choices/plans';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  popular?: boolean;
}

function PricingCard({ title, price, description, features, link, popular }: PricingCardProps) {
  return (
    <div 
      className={`group relative rounded-3xl border p-6 flex flex-col justify-between h-full gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        popular 
          ? 'border-brand-gold bg-brand-gold/[0.01] shadow-[0_8px_30px_rgba(255,185,0,0.05)] mt-4 md:mt-0' 
          : 'border-border/60 bg-card hover:border-brand-gold/25 shadow-sm'
      }`}
    >
      {/* Decorative ambient card glows */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

      {popular && (
        <span className="absolute -top-3 left-6 inline-flex rounded-full bg-brand-gold px-3 py-0.5 text-[11px] font-black uppercase tracking-widest text-brand-dark shadow-sm">
          Most Popular Diet
        </span>
      )}

      <div className="space-y-4">
        <div>
          <span className="text-[11px] text-muted-foreground uppercase font-black tracking-widest">{title}</span>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-2xl font-black text-foreground">{price}</span>
            <span className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">/ Meal</span>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground/90 mt-2.5 font-medium">
            {description}
          </p>
        </div>

        {/* Target benefit indicators */}
        <ul className="space-y-2.5 text-xs font-bold text-foreground/90" aria-label={`Benefits of ${title}`}>
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <svg className="h-4.5 w-4.5 text-brand-gold shrink-0" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2.5 pt-4 border-t border-border/40">
        <Link
          href="/#contact"
          className="group/btn flex h-11 items-center justify-center gap-2 rounded-full bg-brand-gold px-4 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
        >
          <span>Inquire Now</span>
        </Link>
        <Link
          href={link}
          className="flex h-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-4 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const valueBox = HEALTHY_MEAL_PLANS.find(p => p.id === 'balanced');
  const regularPlans = HEALTHY_MEAL_PLANS.filter(p => p.id !== 'balanced' && p.id !== 'corporate');

  return (
    <Section bg="white" className="relative border-t border-border overflow-hidden" id="healthy-choices">
      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
            Healthy Choices Options
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Healthy Eating Made Affordable
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Explore nutritionist-approved, calorie-mapped diet programs for Kakkanad professionals.
          </Typography>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {/* Spotlight Column: Value Box */}
          {valueBox && (
            <div className="group relative rounded-3xl border border-brand-gold/30 bg-brand-gold/[0.01] p-6 flex flex-col justify-between h-full gap-6 shadow-[0_8px_30px_rgba(255,185,0,0.03)] hover:-translate-y-1 transition-all duration-300 hover:shadow-md mt-4 md:mt-0">
              <span className="absolute -top-3 left-6 inline-flex rounded-full bg-brand-gold px-3.5 py-0.5 text-[11px] font-black uppercase tracking-widest text-brand-dark shadow-sm animate-pulse">
                Value Spotlight
              </span>
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] text-brand-gold uppercase font-black tracking-widest">Everyday Value Box</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl font-black text-foreground">₹69</span>
                    <span className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">/ Meal</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted-foreground/90 mt-2.5 font-medium">
                    Portion-weighed, low-oil everyday lunches prepared in our Kakkanad kitchen.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs font-bold text-foreground/90" aria-label="Value box features">
                  {(valueBox.features || []).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg className="h-4.5 w-4.5 text-brand-gold shrink-0" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-border/40">
                <Link
                  href="/#contact"
                  className="group/btn flex h-11 items-center justify-center gap-2 rounded-full bg-brand-gold px-4 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
                >
                  <span>Inquire Now</span>
                </Link>
                <Link
                  href="/healthy-choices"
                  className="flex h-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-4 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center"
                >
                  All Plans
                </Link>
              </div>
            </div>
          )}

          {regularPlans.map((p) => (
            <MotionWrapper key={p.id} animation="fade-up">
              <PricingCard
                title={p.title}
                price={p.price.split(' ')[0]} // Get just "₹199" or "₹249"
                description={p.description.split('. ')[0]} // Take first sentence of description
                features={p.features || []}
                link={p.path}
                popular={p.popular}
              />
            </MotionWrapper>
          ))}
        </div>

        {/* FAQ Accordion Block */}
        <div className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-border/60">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-lg font-bold text-foreground tracking-tight">
              Subscription & Inquiries FAQ
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Important details on how Café Serenity meal plans are structured.
            </Typography>
          </div>

          <div className="space-y-4">
            <details className="group border border-border/60 bg-card rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-brand-gold transition-colors focus:ring-1 focus:ring-brand-gold/25">
                <span className="text-xs sm:text-[13px] md:text-sm font-bold leading-snug pr-4">How can I subscribe to healthy choices?</span>
                <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-brand-gold">
                  <svg className="h-4.5 w-4.5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-foreground/80 leading-relaxed text-[11px] font-medium border-t border-border/40 pt-3">
                Simply click &quot;Inquire Now&quot; or contact us via WhatsApp/call. We will help you select the ideal meal plan and set up your schedule directly.
              </p>
            </details>

            <details className="group border border-border/60 bg-card rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-brand-gold transition-colors focus:ring-1 focus:ring-brand-gold/25">
                <span className="text-xs sm:text-[13px] md:text-sm font-bold leading-snug pr-4">Can I swap dishes mid-week?</span>
                <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-brand-gold">
                  <svg className="h-4.5 w-4.5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-foreground/80 leading-relaxed text-[11px] font-medium border-t border-border/40 pt-3">
                Yes. Just coordinate with our support team before 6 PM to swap.
              </p>
            </details>

            <details className="group border border-border/60 bg-card rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground outline-none hover:text-brand-gold transition-colors focus:ring-1 focus:ring-brand-gold/25">
                <span className="text-xs sm:text-[13px] md:text-sm font-bold leading-snug pr-4">Are there custom pricing for corporate group meal drops?</span>
                <span className="ml-1.5 shrink-0 transition duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-brand-gold">
                  <svg className="h-4.5 w-4.5 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-foreground/80 leading-relaxed text-[11px] font-medium border-t border-border/40 pt-3">
                Yes. We offer group discount rates for offices in Kakkanad Infopark and surrounding areas. Contact us for custom quotes.
              </p>
            </details>
          </div>
        </div>

      </Container>
    </Section>
  );
}

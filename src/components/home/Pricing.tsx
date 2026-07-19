import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
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
  const whatsappSubscription = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    `Hi Alakapuri, I'd like to configure my subscription plan: ${title}. Please assist.`
  )}`;

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
        <a
          href={whatsappSubscription}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        >
          <span>Order on WhatsApp</span>
          <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
          </svg>
        </a>
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
  const whatsappBudgetCTA = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I want to book the ₹69 budget box. Please confirm menu schedules."
  )}`;

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
                  Portion-weighed, low-oil everyday lunches delivered across Kakkanad & Kochi.
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
              <a
                href={whatsappBudgetCTA}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.15)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span>Order on WhatsApp</span>
                <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
                </svg>
              </a>
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

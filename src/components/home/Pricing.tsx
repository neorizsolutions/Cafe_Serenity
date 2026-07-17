import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';
import { getProductSchema } from '@/utils/seo';

interface PricingCardProps {
  title: string;
  price: string;
  frequency: string;
  description: string;
  audience: string;
  features: string[];
  popular?: boolean;
}

function PricingCard({ title, price, frequency, description, audience, features, popular = false }: PricingCardProps) {
  const whatsappLink = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    `Hi Alakapuri, I'd like to check subscription details for the "${title}" (${frequency} plan). Please share onboarding info.`
  )}`;

  return (
    <div className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
      popular ? 'border-primary ring-1 ring-primary/20 bg-primary/[0.01]' : 'border-border/60 bg-card'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-[9px] font-black text-primary-foreground uppercase tracking-widest rounded-bl-xl shadow-sm">
          Most Popular
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1.5">
          <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold text-primary uppercase tracking-wider">
            {audience}
          </span>
          <Typography variant="h3" className="text-lg font-bold text-foreground tracking-tight">
            {title}
          </Typography>
          <Typography variant="body-regular" className="text-xs text-muted-foreground leading-relaxed line-clamp-2 font-medium">
            {description}
          </Typography>
        </div>

        <div className="py-4 border-y border-border/60 text-center">
          <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider block">Average per Meal</span>
          <div className="flex items-baseline justify-center gap-0.5 mt-0.5">
            <span className="text-3xl font-black text-foreground">{price}</span>
            <span className="text-xs font-semibold text-muted-foreground">/ meal</span>
          </div>
          <span className="text-[9px] font-semibold text-muted-foreground block mt-1 uppercase tracking-wider">{frequency} billing</span>
        </div>

        <ul className="space-y-2 text-xs font-semibold text-foreground/85" aria-label={`Features for ${title}`}>
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <svg className="h-4 w-4 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="font-medium text-foreground/90">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-10 w-full items-center justify-center gap-2 rounded-full text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
            popular
              ? 'bg-primary text-primary-foreground hover:bg-primary/95 shadow-[0_4px_14px_rgba(26,79,53,0.2)]'
              : 'border border-border/80 bg-background/60 text-foreground hover:bg-secondary'
          }`}
        >
          Subscribe on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  const whatsappGateway = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I'd like to subscribe to the ₹69 budget box plan. Please share onboarding details."
  )}`;

  // Offer schemas for SEO bots
  const schema69 = getProductSchema({ name: '₹69 Budget Box', description: 'Flagship daily healthy meal box', price: 69 });
  const schemaPremium = getProductSchema({ name: 'Premium Diet Plan', description: 'Clinical deficit diet plan', price: 199 });

  return (
    <Section bg="white" className="relative border-t border-border overflow-hidden">
      {/* Schemas injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema69) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPremium) }} />

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
            Select a portion-regulated plan that fits your physical goals and budget. Pause or reschedule anytime.
          </Typography>
        </div>

        {/* 1. Featured Flagship Spotlight (₹69 Plan - Apple Style) */}
        <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 group relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <div className="lg:col-span-8 flex flex-col justify-center space-y-5">
            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-emerald-600/10 px-3.5 py-1 text-[10px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest border border-emerald-600/20 shadow-sm">
                Flagship Subscription
              </span>
              <Typography variant="h3" className="text-2xl font-black text-foreground sm:text-3xl tracking-tight">
                The ₹69 Everyday Healthy Meal Box
              </Typography>
            </div>
            
            <Typography variant="body-regular" className="text-sm leading-relaxed text-muted-foreground font-medium">
              Freshly cooked local recipes, portion-weighed carbs/proteins, low oil preparation. An ideal everyday lunch option for office professionals, students, and busy families in Kochi and Trivandrum.
            </Typography>
            
            {/* Value checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs font-semibold text-foreground/90">
              {[
                '100% Preservative Free',
                'Measured 450 Calories',
                'Infopark & Technopark Drops',
                'Pause / Reschedule Credit Guard'
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/15 px-3.5 py-2.5 transition-all duration-300 hover:border-primary/20 hover:bg-secondary/25">
                  <svg className="h-4 w-4 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-center text-center space-y-4 shadow-sm transition-colors duration-300 group-hover:border-primary/20">
            <div>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">Pricing Starts at</span>
              <div className="flex items-baseline justify-center gap-0.5 mt-0.5">
                <span className="text-4xl font-black text-foreground">₹69</span>
                <span className="text-xs font-semibold text-muted-foreground">/ meal</span>
              </div>
              <span className="text-[9px] font-semibold text-muted-foreground block mt-1 uppercase tracking-wider">+ tax & delivery</span>
            </div>
            <a
              href={whatsappGateway}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Order ₹69 Box on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="inline-block text-xs font-bold text-primary hover:underline hover:text-emerald-700 transition-colors"
            >
              View Tomorrow&apos;s Menu →
            </Link>
          </div>
        </div>

        {/* 2. Premium Subscription Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Clinical Diet Subscription Plans
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Targeted nutritional programs prepared under dietitian guidelines.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MotionWrapper animation="fade-up">
              <PricingCard
                title="Weight Loss Plan"
                price="₹199"
                frequency="Weekly/Monthly"
                description="Low carbohydrate deficit menu formulated to burn stubborn body fat cleanly."
                audience="Calorie Deficit"
                features={['Portion-weighed meals', 'Low Glycemic ingredients', 'Dietitian chart review', 'Flexible pause policy']}
                popular
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <PricingCard
                title="High Protein Plan"
                price="₹249"
                frequency="Weekly/Monthly"
                description="High-protein workout meals cooked using cold-pressed oils for muscle support."
                audience="Athletes & Gym"
                features={['45g+ protein per box', 'Clean complex carbs', 'Sodium regulated preps', 'Rollover credits']}
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <PricingCard
                title="Diabetic Care"
                price="₹219"
                frequency="Weekly/Monthly"
                description="Glucose-safe meals omitting simple sugars and high-glycemic grains."
                audience="Insulin Deficit"
                features={['Zero refined carbs', 'High dietary fibers', 'Low-sodium seasoning', 'Kitchen safety rules']}
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <PricingCard
                title="Corporate Lunch"
                price="₹199"
                frequency="Office Shift"
                description="Convenient daily healthy lunches delivered fresh to tech parks in Kochi & TVM."
                audience="IT Professionals"
                features={['On-time office delivery', 'FSSAI certified hygiene', 'Unified corporate billings', '12h freeze notice']}
              />
            </MotionWrapper>
          </div>
        </div>

        {/* 3. Visual Comparison Table (SaaS Pricing Matrix Style) */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">
              Feature Matrix Overview
            </Typography>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-secondary/10 text-foreground font-extrabold uppercase tracking-wider text-[10px] sm:text-[11px]">
                  <th scope="col" className="p-4 sm:p-5">Diet Option</th>
                  <th scope="col" className="p-4 sm:p-5">Starting Price</th>
                  <th scope="col" className="p-4 sm:p-5">Macro Verification</th>
                  <th scope="col" className="p-4 sm:p-5">Delivery Timing</th>
                  <th scope="col" className="p-4 sm:p-5 text-primary bg-primary/[0.02]">Flexi Reschedule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-foreground/80 font-medium">
                <tr className="hover:bg-secondary/5 transition-colors">
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground sm:text-[13px]">₹69 Everyday Box</td>
                  <td className="p-4 sm:p-5">₹69 / meal</td>
                  <td className="p-4 sm:p-5">Standard balanced count</td>
                  <td className="p-4 sm:p-5">Lunch transit slot</td>
                  <td className="p-4 sm:p-5 text-primary bg-primary/[0.02] font-bold">
                    <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                      <svg className="h-4 w-4 text-primary shrink-0" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      12h freeze notice
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-secondary/5 transition-colors">
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground sm:text-[13px]">Premium Diet Plans</td>
                  <td className="p-4 sm:p-5">₹199 / meal</td>
                  <td className="p-4 sm:p-5">Custom (deficits/gains)</td>
                  <td className="p-4 sm:p-5">Lunch or Dinner slots</td>
                  <td className="p-4 sm:p-5 text-primary bg-primary/[0.02] font-bold">
                    <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                      <svg className="h-4 w-4 text-primary shrink-0" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      12h freeze notice
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-secondary/5 transition-colors">
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground sm:text-[13px]">Corporate Team Plans</td>
                  <td className="p-4 sm:p-5">₹199 / meal (bulk)</td>
                  <td className="p-4 sm:p-5">Custom unified labeling</td>
                  <td className="p-4 sm:p-5">Strict desk drops</td>
                  <td className="p-4 sm:p-5 text-primary bg-primary/[0.02] font-bold">
                    <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                      <svg className="h-4 w-4 text-primary shrink-0" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Consolidated lock
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Pricing FAQ Grid */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-lg font-bold text-foreground tracking-tight">
              Pricing & Subscription FAQs
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Quick answers about our payments, billing, and rollover rules.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="space-y-2.5 p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:-translate-y-1 hover:border-primary/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-xs sm:text-sm font-bold text-foreground tracking-tight">How do I submit my payments?</h4>
              <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
                We accept all UPI applications (Google Pay, PhonePe, Paytm) and net banking channels. Billing is logged on onboarding.
              </p>
            </div>
            <div className="space-y-2.5 p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:-translate-y-1 hover:border-primary/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-xs sm:text-sm font-bold text-foreground tracking-tight">Can I swap menu items?</h4>
              <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
                Absolutely. Review our weekly menu, and ping our WhatsApp support line before 6 PM to swap tomorrow&apos;s meal with another active dish.
              </p>
            </div>
            <div className="space-y-2.5 p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:-translate-y-1 hover:border-primary/20 hover:shadow-md transition-all duration-300">
              <h4 className="text-xs sm:text-sm font-bold text-foreground tracking-tight">Are there cancel charges?</h4>
              <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
                No. You can pause your plan indefinitely or cancel. Unused balance credits remain locked in your account for future activations.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-2">
            <Link href="/faq" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline hover:text-emerald-700 transition-colors">
              <span>View All Help & Support FAQs</span>
              <svg className="h-3 w-3 fill-current mt-0.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10h3l-4 4-4-4h3V8h2v4z" />
              </svg>
            </Link>
          </div>
        </div>

      </Container>
    </Section>
  );
}

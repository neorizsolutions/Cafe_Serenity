import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS, SEO_DEFAULTS } from '@/constants';
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
    <div className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-200 ${
      popular ? 'border-primary ring-1 ring-primary/20' : 'border-border'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-[9px] font-black text-primary-foreground uppercase tracking-widest rounded-bl-xl">
          Most Popular
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1">
          <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold text-primary uppercase tracking-wider">
            {audience}
          </span>
          <Typography variant="h3" className="text-lg font-bold text-foreground">
            {title}
          </Typography>
          <Typography variant="body-regular" className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </Typography>
        </div>

        <div className="py-4 border-y border-border/80 text-center">
          <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider block">Average per Meal</span>
          <span className="text-3xl font-black text-foreground">{price}</span>
          <span className="text-[10px] text-muted-foreground block mt-0.5">{frequency} delivery</span>
        </div>

        <ul className="space-y-2 text-xs font-semibold text-foreground/85">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-primary font-black">✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-10 w-full items-center justify-center gap-2 rounded-full text-xs font-bold transition-colors ${
            popular
              ? 'bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm'
              : 'border border-border bg-background text-foreground hover:bg-secondary'
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
    <Section bg="white" className="relative border-t border-border">
      {/* Schemas injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema69) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPremium) }} />

      <Container className="space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label">Subscription Pricing</Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Healthy Eating Made Affordable
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Select a portion-regulated plan that fits your physical goals and budget. Pause or reschedule anytime.
          </Typography>
        </div>

        {/* 1. Featured Flagship Spotlight (₹69 Plan) */}
        <div className="rounded-3xl border border-primary/20 bg-secondary/15 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex rounded-full bg-emerald-600/10 px-3.5 py-1 text-[10px] font-black text-emerald-800 uppercase tracking-widest border border-emerald-600/20">
              Flagship Subscription
            </span>
            <Typography variant="h3" className="text-2xl font-black text-foreground sm:text-3xl tracking-tight">
              The ₹69 Everyday Healthy Meal Box
            </Typography>
            <Typography variant="body-regular" className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              Freshly cooked local recipes, portion-weighed carbs/proteins, low oil preparation. An ideal everyday lunch option for office professionals, students, and busy families.
            </Typography>
            
            {/* Value checks */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-foreground/80">
              <span className="flex items-center gap-1.5">✓ 100% Preservative Free</span>
              <span className="flex items-center gap-1.5">✓ Measured 450 Calories</span>
              <span className="flex items-center gap-1.5">✓ Infopark / Technopark Drops</span>
              <span className="flex items-center gap-1.5">✓ Pause / Reschedule Credit Guard</span>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-border bg-card p-6 text-center space-y-4 shadow-sm">
            <div>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">Pricing Starts at</span>
              <span className="text-4xl font-black text-foreground">₹69</span>
              <span className="text-xs text-muted-foreground block mt-1">+ tax / meal box</span>
            </div>
            <a
              href={whatsappGateway}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-colors shadow"
            >
              Order ₹69 Box on WhatsApp
            </a>
            <Link
              href="/menu"
              className="block text-xs font-bold text-primary hover:underline"
            >
              View Tomorrow&apos;s Menu →
            </Link>
          </div>
        </div>

        {/* 2. Premium Subscription Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground">
              Clinical Diet Subscription Plans
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground">
              Targeted nutritional programs prepared under dietitian guidelines.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PricingCard
              title="Weight Loss Plan"
              price="₹199"
              frequency="Weekly/Monthly"
              description="Low carbohydrate deficit menu formulated to burn stubborn body fat cleanly."
              audience="Calorie Deficit"
              features={['Portion-weighed meals', 'Low Glycemic ingredients', 'Dietitian chart review', 'Flexible pause policy']}
              popular
            />
            <PricingCard
              title="High Protein Plan"
              price="₹249"
              frequency="Weekly/Monthly"
              description="High-protein workout meals cooked using cold-pressed oils for muscle support."
              audience="Athletes & Gym"
              features={['45g+ protein per box', 'Clean complex carbs', 'Sodium regulated preps', 'Rollover credits']}
            />
            <PricingCard
              title="Diabetic Care"
              price="₹219"
              frequency="Weekly/Monthly"
              description="Glucose-safe meals omitting simple sugars and high-glycemic grains."
              audience="Insulin Deficit"
              features={['Zero refined carbs', 'High dietary fibers', 'Low-sodium seasoning', 'Kitchen safety rules']}
            />
            <PricingCard
              title="Corporate Lunch"
              price="₹199"
              frequency="Office Shift"
              description="Convenient daily healthy lunches delivered fresh to tech parks in Kochi & TVM."
              audience="IT Professionals"
              features={['On-time office delivery', 'FSSAI certified hygiene', 'Unified corporate billings', '12h freeze notice']}
            />
          </div>
        </div>

        {/* 3. visual comparison table */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-base font-bold text-foreground">
              Feature Matrix Overview
            </Typography>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-border bg-secondary/15 text-foreground font-extrabold uppercase tracking-wider text-[10px]">
                  <th scope="col" className="p-4 sm:p-5">Diet Option</th>
                  <th scope="col" className="p-4 sm:p-5">Starting Price</th>
                  <th scope="col" className="p-4 sm:p-5">Macro Verification</th>
                  <th scope="col" className="p-4 sm:p-5">Delivery Timing</th>
                  <th scope="col" className="p-4 sm:p-5">Flexi Reschedule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/80 font-semibold">
                <tr>
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground">₹69 Everyday Box</td>
                  <td className="p-4 sm:p-5">₹69 / meal</td>
                  <td className="p-4 sm:p-5">Standard balanced count</td>
                  <td className="p-4 sm:p-5">Lunch transit slot</td>
                  <td className="p-4 sm:p-5">✓ 12h freeze notice</td>
                </tr>
                <tr>
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground">Premium Diet Plans</td>
                  <td className="p-4 sm:p-5">₹199 / meal</td>
                  <td className="p-4 sm:p-5">Custom (deficits/gains)</td>
                  <td className="p-4 sm:p-5">Lunch or Dinner slots</td>
                  <td className="p-4 sm:p-5">✓ 12h freeze notice</td>
                </tr>
                <tr>
                  <td scope="row" className="p-4 sm:p-5 font-bold text-foreground">Corporate Team Plans</td>
                  <td className="p-4 sm:p-5">₹199 / meal (bulk)</td>
                  <td className="p-4 sm:p-5">Custom unified labeling</td>
                  <td className="p-4 sm:p-5">Strict desk drops</td>
                  <td className="p-4 sm:p-5">✓ consolidated lock</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Pricing FAQ Previews */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-lg font-bold text-foreground">
              Pricing & Subscription FAQs
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground">
              Quick answers about our payments, billing, and rollover rules.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="space-y-2 p-5 rounded-2xl border border-border bg-card">
              <h4 className="text-xs font-bold text-foreground">How do I submit my payments?</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                We accept all UPI applications (Google Pay, PhonePe, Paytm) and net banking channels. Billing is logged on onboarding.
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-2xl border border-border bg-card">
              <h4 className="text-xs font-bold text-foreground">Can I swap menu items?</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Absolutely. Review our weekly menu, and ping our WhatsApp support line before 6 PM to swap tomorrow&apos;s meal with another active dish.
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-2xl border border-border bg-card">
              <h4 className="text-xs font-bold text-foreground">Are there cancel charges?</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                No. You can pause your plan indefinitely or cancel. Unused balance credits remain locked in your account for future activations.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/faq" className="text-xs font-bold text-primary hover:underline">
              View All Help & Support FAQs →
            </Link>
          </div>
        </div>

      </Container>
    </Section>
  );
}

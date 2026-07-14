import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Balanced Nutrition & Everyday Meal Boxes | Alakapuri',
  description: 'Portion-controlled, everyday healthy boxes cooked using fresh local ingredients. Starts from ₹169/meal. Technopark & Infopark deliveries.',
});

export default function BalancedPlans() {
  const whatsappBalanced = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    'Hi Alakapuri, I would like to subscribe to the Balanced Diet plan. Please share the details.'
  )}`;

  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <span className="inline-flex rounded-full bg-emerald-500/10 text-emerald-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
            Stable Energy
          </span>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Balanced Diet Box
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            The perfect everyday healthy box designed for active families and IT professionals.
          </Typography>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
          <Typography variant="h3" className="text-base font-bold text-foreground">Plan Specifications</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Calories</span>
              <span className="text-foreground text-sm font-extrabold">~450 kcal</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Proteins</span>
              <span className="text-foreground text-sm font-extrabold">26g Protein</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Carbs / Fats</span>
              <span className="text-foreground text-sm font-extrabold">Balanced ratio</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Price</span>
              <span className="text-foreground text-sm font-extrabold">₹169 / meal</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
          <Typography variant="h3" className="text-base font-bold text-foreground">Why it Works</Typography>
          <p>
            Avoid the typical post-lunch drowsiness. Our Balanced Diet boxes combine complex carbohydrates, lean proteins, and fiber in nutritionist-approved ratios, ensuring sustained glycemic release and zero brain fog.
          </p>
          <p>
            We use locally sourced green leaf vegetables, pulses, and lean poultry cooked in low-salt, cold-pressed coconut oil, delivering nutrient density without heavy calories.
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <a
            href={whatsappBalanced}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-full bg-primary px-8 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95"
          >
            Order on WhatsApp
          </a>
          <Link
            href="/meal-plans"
            className="flex h-11 items-center justify-center rounded-full border border-border bg-background px-8 text-xs font-semibold text-foreground hover:bg-secondary"
          >
            All Plans
          </Link>
        </div>
      </Container>
    </Section>
  );
}

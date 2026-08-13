import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Weight Loss & Calorie Deficit Meal Plans | Café Serenity',
  description: 'Clean, weighed low-carb diet plans cooked fresh daily to manage calorie deficits cleanly. Starts from ₹199/meal. Kakkanad desk and doorstep drops.',
});

export default function WeightLossPlans() {

  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <span className="inline-flex rounded-full bg-amber-500/10 text-amber-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
            Calorie Deficit
          </span>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Weight Loss Deficit Plan
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Shed weight sustainably without energy drops or starvation.
          </Typography>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
          <Typography variant="h3" className="text-base font-bold text-foreground">Plan Specifications</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Calories</span>
              <span className="text-foreground text-sm font-extrabold">~350 kcal</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Proteins</span>
              <span className="text-foreground text-sm font-extrabold">24g Protein</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Carbohydrates</span>
              <span className="text-foreground text-sm font-extrabold">Low glycemic</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Price</span>
              <span className="text-foreground text-sm font-extrabold">₹199 / meal</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
          <Typography variant="h3" className="text-base font-bold text-foreground">Why it Works</Typography>
          <p>
            Standard diets often cause muscle loss and extreme hunger due to unstructured deficits. Café Serenity Weight Loss plans weigh exactly 120 grams of lean proteins (chicken, paneer, or pulses) matched with clean dietary fiber and low-sodium seasoning.
          </p>
          <p>
            By omitting refined flours (maida), white sugars, and saturated palm oils, we keep insulin levels stable, preventing the common post-lunch fatigue felt by corporate professionals.
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/checkout?plan=Weight Loss Plan"
            className="flex h-11 items-center justify-center rounded-full bg-primary px-8 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95"
          >
            Choose Plan
          </Link>
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

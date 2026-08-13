import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Diabetic Friendly & Glucose Control Meal Plans | Café Serenity',
  description: 'Dietician-checked, glucose-safe meal subscriptions cooked using organic low-GI grains and zero refined sugar. Starts from ₹219/meal.',
});

export default function DiabeticPlans() {

  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <span className="inline-flex rounded-full bg-purple-500/10 text-purple-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
            Glucose Control
          </span>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Diabetic Friendly Plan
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Insulin-safe meals cooked under dietitian guidelines using organic low-GI grains.
          </Typography>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
          <Typography variant="h3" className="text-base font-bold text-foreground">Plan Specifications</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Calories</span>
              <span className="text-foreground text-sm font-extrabold">~400 kcal</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Proteins</span>
              <span className="text-foreground text-sm font-extrabold">26g Protein</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Sugars</span>
              <span className="text-foreground text-sm font-extrabold">0g Refined Sugars</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Price</span>
              <span className="text-foreground text-sm font-extrabold">₹219 / meal</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
          <Typography variant="h3" className="text-base font-bold text-foreground">Why it Works</Typography>
          <p>
            Managing blood sugar levels requires eliminating simple starches and refined sugars. Our Diabetic Care boxes completely replace white rice and maida with organic low-GI grains (millets, wild red rice, oats, and quinoa) and high-fiber legumes.
          </p>
          <p>
            Seasoned with natural herbs, garlic, and ginger, these boxes are low-sodium and protect cardiovascular health.
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/checkout?plan=Diabetic Friendly"
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

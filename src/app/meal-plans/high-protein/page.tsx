import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'High Protein & Gym Workout Subscriptions | Café Serenity',
  description: 'Clean workout fuel and muscle synthesis recovery boxes cooked fresh. 45g+ protein per box. Starts from ₹249/meal. Kakkanad desk and doorstep drops.',
});

export default function HighProteinPlans() {

  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <span className="inline-flex rounded-full bg-blue-500/10 text-blue-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
            Muscle Synthesis
          </span>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            High Protein & Gym Plan
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Clean complex carbs and lean proteins to support intensive physical training.
          </Typography>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
          <Typography variant="h3" className="text-base font-bold text-foreground">Plan Specifications</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Calories</span>
              <span className="text-foreground text-sm font-extrabold">~600 kcal</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Proteins</span>
              <span className="text-foreground text-sm font-extrabold">45g+ Protein</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Fats</span>
              <span className="text-foreground text-sm font-extrabold">Healthy fats only</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Price</span>
              <span className="text-foreground text-sm font-extrabold">₹249 / meal</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
          <Typography variant="h3" className="text-base font-bold text-foreground">Why it Works</Typography>
          <p>
            Hitting protein goals using standard meals is highly challenging and often involves excessive fat intake. Our High Protein plan ensures a clean 45g+ protein payout using weighed lean chicken breast, organic egg whites, low-fat paneer, and balanced complex carbs like sweet potatoes or brown rice.
          </p>
          <p>
            Cooked using cold-pressed virgin oils, these diet boxes prevent arterial congestion, reduce inflammation, and accelerate recovery.
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/checkout?plan=High Protein & Gym"
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

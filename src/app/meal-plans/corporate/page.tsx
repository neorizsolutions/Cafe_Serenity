import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Corporate Healthy Meal Subscriptions Kakkanad, Kochi | Café Serenity',
  description: 'Clean, portion-regulated energy lunches delivered directly to Infopark Kakkanad desks. Starts from ₹199/meal. Unified corporate billings.',
});

export default function CorporatePlans() {

  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <span className="inline-flex rounded-full bg-orange-500/10 text-orange-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
            Office Desk Drops
          </span>
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Corporate Lunch Subscriptions
          </Typography>
          <Typography variant="body-large" className="text-muted-foreground">
            Fresh, dietitian-approved meal boxes delivered directly to tech park receptions.
          </Typography>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
          <Typography variant="h3" className="text-base font-bold text-foreground">Corporate Specifications</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Delivery Slots</span>
              <span className="text-foreground text-sm font-extrabold">12:00 PM – 1:15 PM</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Calories</span>
              <span className="text-foreground text-sm font-extrabold">~450 kcal</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Billing</span>
              <span className="text-foreground text-sm font-extrabold">Monthly invoicing</span>
            </div>
            <div className="p-3 border border-border rounded-xl">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold">Price</span>
              <span className="text-foreground text-sm font-extrabold">₹199 / meal</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
          <Typography variant="h3" className="text-base font-bold text-foreground">Why choose Café Serenity Corporate?</Typography>
          <p>
            Oily fast food and high-sodium canteen lunches cause afternoon fatigue and decrease team performance. Café Serenity provides companies with clean, dietitian-checked lunches delivered fresh.
          </p>
          <p>
            We manage bulk tech park drop schedules (Infopark Kakkanad and SmartCity Kochi) with customized label systems containing employee names, calories, and allergies.
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/checkout?plan=Corporate Lunch"
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

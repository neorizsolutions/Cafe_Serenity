import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Weight Loss & Calorie Deficit Meal Plans | Café Serenity Kakkanad',
  description: 'Clean, weighed low-carb deficit meal subscriptions in Kakkanad, Kochi. Weighed lean proteins, complex fiber, and zero refined sugar starting from ₹199/meal.',
  path: '/healthy-meals/weight-loss',
});

export default function WeightLossPlans() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-5xl space-y-12">
        {/* Header Grid: Splits info on Left, Food Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex rounded-full bg-amber-500/10 text-amber-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              Calorie Deficit
            </span>
            <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Weight Loss Deficit Plan
            </Typography>
            <Typography variant="body-large" className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
              Shed weight sustainably and boost cellular health without sudden energy drops, crash diets, or muscle fatigue.
            </Typography>
          </div>
          {/* Image Column */}
          <div className="relative aspect-[4/3] w-full lg:col-span-5 rounded-2xl overflow-hidden bg-muted shadow-sm border border-border/80">
            <Image
              src="/images/category_weight_loss.png"
              alt="Café Serenity Weight Loss low carb deficit meal prep box"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
          <Typography variant="h3" className="text-base font-bold text-foreground">Plan Specifications</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Calories</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">~350 kcal</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Proteins</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">24g Protein</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Glycemic index</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">Low glycemic</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Price</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">₹199 / meal</span>
            </div>
          </div>
        </div>

        {/* Plan Details Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">Why it Works</Typography>
            <p className="font-medium">
              Standard deficit diets often cause sudden muscle loss and extreme hunger cravings due to unstructured nutrition. Café Serenity Weight Loss plans scale exactly 120 grams of premium lean protein (egg whites, chicken breast, paneer, or sprouted pulses) paired with clean dietary fiber to keep you full and energized throughout the workday.
            </p>
            <p className="font-medium">
              By omitting refined wheat flours (maida), white sugars, and industrial palm oils, we keep insulin levels stable, preventing the common post-lunch fatigue felt by corporate professionals in Kakkanad.
            </p>
          </div>
          <div className="space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">What does the box contain?</Typography>
            <p className="font-medium">
              Each meal box features a structured layout of fresh organic leafy greens, low-sodium sautéed vegetables, and healthy complex carbohydrates (millets, red raw rice, or wheat flakes). We cook daily using only cold-pressed local coconut oil, preserving natural nutrients and flavor.
            </p>
            <p className="font-medium">
              Ideal for corporate workers, professionals, and anyone targeting low-glycemic, portion-controlled wellness diets in Kochi.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border/40">
          <a
            href={CONTACT_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-8 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark flex items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
          >
            Inquire via WhatsApp
          </a>
          <Link
            href="/healthy-meals"
            className="min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-semibold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
          >
            All plans
          </Link>
        </div>

        {/* Subtle cross-navigation backlink */}
        <div className="text-center pt-6">
          <Link
            href="/cafe-menu"
            className="inline-block text-xs font-semibold text-muted-foreground hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold rounded px-1.5 py-0.5"
          >
            Want our regular café favourites? View Café Menu &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
}

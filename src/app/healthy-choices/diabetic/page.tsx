import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Diabetic Friendly & Glucose Control | Café Serenity Kakkanad',
  description: 'Glucose-safe meal subscriptions in Kakkanad, Kochi. Weighed millets, raw low-GI grains, and clean protein portions. Starts from ₹219/meal.',
  path: '/healthy-choices/diabetic',
});

export default function DiabeticPlans() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-5xl space-y-12">
        {/* Header Grid: Splits info on Left, Food Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex rounded-full bg-purple-500/10 text-purple-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider border border-purple-500/20">
              Glucose Control
            </span>
            <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Diabetic Friendly Plan
            </Typography>
            <Typography variant="body-large" className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
              Glucose-safe, portion-regulated meal boxes cooked using organic low-GI grains and fresh local ingredients to help maintain stable energy.
            </Typography>
          </div>
          {/* Image Column */}
          <div className="relative aspect-[4/3] w-full lg:col-span-5 rounded-2xl overflow-hidden bg-muted shadow-sm border border-border/80">
            <Image
              src="/images/category_diabetic.png"
              alt="Café Serenity Diabetic Friendly low-GI meal prep box"
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
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Calories</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">~400 kcal</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Proteins</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">26g Protein</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Sugars</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">0g Refined Sugars</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Price</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">₹219 / meal</span>
            </div>
          </div>
        </div>

        {/* Plan Details Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">Why it Works</Typography>
            <p className="font-medium">
              Managing blood sugar levels requires eliminating simple starches and refined sugars. Our Diabetic Care boxes completely replace white rice and maida with organic low-GI grains (millets, wild red rice, oats, and quinoa) and high-fiber legumes.
            </p>
            <p className="font-medium">
              Seasoned with natural herbs, garlic, and ginger, these boxes are low-sodium and help protect cardiovascular health.
            </p>
          </div>
          <div className="space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">What does the box contain?</Typography>
            <p className="font-medium">
              Each meal contains a serving of slow-burning complex carbs, 120 grams of premium lean protein (egg whites, skinless chicken breast, paneer, or pulses), and an abundance of fresh, fiber-rich vegetables.
            </p>
            <p className="font-medium">
              Prepared daily in Kakkanad under clean FSSAI kitchen guidelines, prepared fresh for office teams or convenient Kakkanad pickups.
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
            href="/healthy-choices"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-350 active:scale-95"
          >
            &larr; Back to Healthy Choices
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

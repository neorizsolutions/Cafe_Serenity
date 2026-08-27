import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Corporate Healthy Meal Subscriptions Kakkanad, Kochi | Café Serenity',
  description: 'Clean, portion-regulated energy lunches delivered directly to Infopark Kakkanad desks. Starts from ₹199/meal. Unified corporate billings.',
  path: '/healthy-meals/corporate',
});

export default function CorporatePlans() {
  return (
    <Section bg="white" className="py-16 md:py-24">
      <Container className="max-w-5xl space-y-12">
        {/* Header Grid: Splits info on Left, Food Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex rounded-full bg-orange-500/10 text-orange-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider border border-orange-500/20">
              Office Desk Drops
            </span>
            <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Corporate Lunch Subscriptions
            </Typography>
            <Typography variant="body-large" className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
              Fresh, dietitian-approved meal boxes delivered directly to tech park receptions at Infopark and SmartCity Kochi.
            </Typography>
          </div>
          {/* Image Column */}
          <div className="relative aspect-[4/3] w-full lg:col-span-5 rounded-2xl overflow-hidden bg-muted shadow-sm border border-border/80">
            <Image
              src="/images/category_corporate.png"
              alt="Café Serenity Corporate IT Desk healthy meal drop"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
          <Typography variant="h3" className="text-base font-bold text-foreground">Corporate Specifications</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Delivery Slots</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">12:00 PM – 1:15 PM</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Calories</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">~450 kcal</span>
            </div>
            <div className="p-3.5 border border-border rounded-xl bg-background/50">
              <span className="text-[9px] text-muted-foreground block uppercase font-bold tracking-wider">Billing</span>
              <span className="text-foreground text-sm font-extrabold block mt-0.5">Monthly invoicing</span>
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
            <Typography variant="h3" className="text-base font-bold text-foreground">Why choose Café Serenity Corporate?</Typography>
            <p className="font-medium">
              Oily fast food and high-sodium canteen lunches cause afternoon fatigue and decrease team performance. Café Serenity provides companies with clean, dietitian-checked lunches delivered fresh.
            </p>
            <p className="font-medium">
              We manage bulk tech park drop schedules (Infopark Kakkanad and SmartCity Kochi) with customized label systems containing employee names, calories, and allergies.
            </p>
          </div>
          <div className="space-y-4">
            <Typography variant="h3" className="text-base font-bold text-foreground">What does the box contain?</Typography>
            <p className="font-medium">
              Each office-drop lunch box contains portion-controlled, fresh daily items, ensuring sustained glycemic release and zero post-lunch drowsiness.
            </p>
            <p className="font-medium">
              We deliver in sustainable heat-retaining boxes directly to your desk or IT desk drop hub, saving you time and protecting your team&apos;s dietary health.
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

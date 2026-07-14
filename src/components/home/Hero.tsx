import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';

export default function Hero() {
  const whatsappLink = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I'd like to check meal box subscription options for my location. Please share onboarding details."
  )}`;

  return (
    <Section bg="white" className="relative overflow-hidden pt-8 md:pt-16 pb-16 md:pb-24">
      {/* Background soft ambient blur shapes (Stripe inspired) */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-600/5 blur-3xl" />

      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 lg:col-span-7">
          {/* Trust Badge */}
          <MotionWrapper animation="fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-primary/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by 5,000+ Health Enthusiasts in Kerala
            </span>
          </MotionWrapper>

          {/* Main Typography Header Block */}
          <MotionWrapper animation="fade-up" className="space-y-4">
            <Typography variant="h1" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Clean Eating. <br />
              <span className="text-primary font-black">Delivered Daily.</span>
            </Typography>
            <Typography variant="body-large" className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              FSSAI-certified portion-controlled healthy diet boxes cooked fresh and delivered to your office desk or home across Kochi & Trivandrum.
            </Typography>
          </MotionWrapper>

          {/* Special ₹69 Hero Offer Card (Apple style) */}
          <MotionWrapper animation="fade-up">
            <div className="max-w-xl rounded-2xl border border-border bg-secondary/20 p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="space-y-1">
                <span className="inline-flex rounded bg-emerald-600/10 px-2 py-0.5 text-[10px] font-black text-emerald-800 uppercase tracking-widest">
                  Daily Nutrition Gateway
                </span>
                <h3 className="text-base font-bold text-foreground">₹69 Budget Healthy Meal Box</h3>
                <p className="text-xs text-muted-foreground leading-normal">
                  Freshly cooked local recipes, calorie-mapped, zero chemicals or artificial sweeteners.
                </p>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <span className="text-xs font-bold text-muted-foreground block leading-none">Starting at</span>
                <span className="text-3xl font-black text-foreground">₹69</span>
                <span className="text-[10px] text-muted-foreground block">+ tax / meal</span>
              </div>
            </div>
          </MotionWrapper>

          {/* Action CTAs */}
          <MotionWrapper animation="fade-up" className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation active:scale-95"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
              </svg>
              Order on WhatsApp
            </a>
            <Link
              href="/meal-plans"
              className="flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation"
            >
              Explore Premium Plans (from ₹199)
            </Link>
          </MotionWrapper>

          {/* Quick Trust Checks */}
          <MotionWrapper animation="fade-up" className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-foreground/80">
            <span className="flex items-center gap-1">✓ FSSAI Kitchens</span>
            <span className="flex items-center gap-1">✓ Measured Calories</span>
            <span className="flex items-center gap-1">✓ Cold-Pressed Oils</span>
            <span className="flex items-center gap-1">✓ Flexible Pause/Resume</span>
          </MotionWrapper>

          {/* Premium Statistics Row */}
          <MotionWrapper animation="fade-up" className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4 max-w-lg">
            <div className="space-y-1">
              <span className="block text-2xl font-black text-foreground">50,000+</span>
              <span className="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Meals Delivered</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-black text-foreground">1,200+</span>
              <span className="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Active Customers</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-black text-foreground">12-Hour</span>
              <span className="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Flexi-Freeze Notice</span>
            </div>
          </MotionWrapper>
        </div>

        {/* Right Column: Hero Visual composition */}
        <div className="relative lg:col-span-5 flex justify-center lg:justify-end">
          <MotionWrapper animation="scale" className="relative w-full max-w-[420px] aspect-square">
            {/* Main Visual Image Wrapper */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border border-border/60 bg-muted relative">
              <Image
                src="/images/hero-meal-box.png"
                alt="Alakapuri dietitian-approved portion-controlled healthy meal box"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping Macro Detail Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background p-4 shadow-lg max-w-[190px] space-y-3 animate-fade md:block hidden">
              <span className="inline-flex rounded-full bg-emerald-600/10 px-2 py-0.5 text-[9px] font-black text-emerald-800 uppercase tracking-widest">
                Dietitian Verified
              </span>
              <div className="space-y-1">
                <span className="block text-xs font-bold text-foreground">High Protein Salmon Box</span>
                <span className="block text-[10px] text-muted-foreground">Calories: 450 kcal</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-black border-t border-border pt-2">
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase">P</span>
                  <span className="text-foreground">38g</span>
                </div>
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase">C</span>
                  <span className="text-foreground">42g</span>
                </div>
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase">F</span>
                  <span className="text-foreground">12g</span>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}

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
    <Section bg="white" className="relative overflow-hidden pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-28">
      {/* Premium ambient grid background with organic radial blurs (Apple & Stripe inspired) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(oklch(0.93_0.01_145)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      <div className="absolute top-[-5%] right-[-5%] -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.42_0.13_145_/_0.08)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.55_0.14_145_/_0.06)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute top-[25%] left-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,_oklch(0.95_0.10_135_/_0.04)_0%,transparent_70%)] blur-3xl" />

      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 lg:col-span-7 flex flex-col justify-center">
          {/* Trust Badge (Linear inspired) */}
          <MotionWrapper animation="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-300 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Trusted by 5,000+ Health Enthusiasts in Kerala
            </span>
          </MotionWrapper>

          {/* Main Typography Header Block (Stripe style) */}
          <MotionWrapper animation="fade-up" className="space-y-5">
            <Typography
              variant="h1"
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-foreground font-sans"
            >
              Clean Eating. <br />
              <span className="text-primary font-black bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                Delivered Daily.
              </span>
            </Typography>
            <Typography
              variant="body-large"
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-xl font-normal opacity-95"
            >
              FSSAI-certified portion-controlled healthy diet boxes cooked fresh and delivered to your office desk or home across Kochi & Trivandrum.
            </Typography>
          </MotionWrapper>

          {/* Special ₹69 Hero Offer Card (Apple Flagship Style) */}
          <MotionWrapper animation="fade-up">
            <div className="group relative max-w-xl rounded-2xl border border-primary/10 bg-white/70 dark:bg-card/70 backdrop-blur-md p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.04)] hover:border-emerald-500/20 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="space-y-1.5 relative z-10">
                <span className="inline-flex items-center gap-1 rounded bg-emerald-600/10 px-2 py-0.5 text-[10px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest">
                  Daily Nutrition Gateway
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                  ₹69 Budget Healthy Meal Box
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground max-w-md font-medium">
                  Freshly cooked local recipes, calorie-mapped, zero chemicals or artificial sweeteners. Perfect for daily office lunch.
                </p>
              </div>
              <div className="shrink-0 text-left sm:text-right relative z-10 flex sm:flex-col items-baseline sm:items-end gap-1.5 sm:gap-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-border/60 w-full sm:w-auto">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block leading-none">
                  Starting at
                </span>
                <div className="flex items-baseline gap-0.5 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-black text-primary tracking-tight">₹69</span>
                  <span className="text-xs font-semibold text-muted-foreground">/ meal</span>
                </div>
                <span className="text-[9px] font-semibold text-muted-foreground block leading-none mt-1 uppercase tracking-wider">
                  + tax & delivery
                </span>
              </div>
            </div>
          </MotionWrapper>

          {/* Action CTAs */}
          <MotionWrapper animation="fade-up" className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation active:scale-[0.98] hover:-translate-y-0.5"
            >
              <svg className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
              </svg>
              Order on WhatsApp
            </a>
            <Link
              href="/meal-plans"
              className="flex h-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-sm font-semibold text-foreground hover:bg-secondary hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Explore Premium Plans (from ₹199)
            </Link>
          </MotionWrapper>

          {/* Quick Trust Checks (Pills Layout) */}
          <MotionWrapper animation="fade-up" className="flex flex-wrap gap-2.5 pt-2">
            {[
              { label: 'FSSAI Kitchens', desc: '100% Certified' },
              { label: 'Measured Calories', desc: 'Dietitian Approved' },
              { label: 'Cold-Pressed Oils', desc: 'Zero Reused Fat' },
              { label: 'Flexible Pause', desc: '12-Hour Notice' },
            ].map((check, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/15 px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-all duration-300 hover:border-primary/20 hover:bg-secondary/25"
              >
                <svg className="h-3.5 w-3.5 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{check.label}</span>
                <span className="text-[10px] font-normal text-muted-foreground border-l border-border/80 pl-1.5 ml-0.5">
                  {check.desc}
                </span>
              </span>
            ))}
          </MotionWrapper>

          {/* Premium Statistics Cards Grid (Stripe style) */}
          <MotionWrapper animation="fade-up" className="pt-8 border-t border-border/80 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { value: '50,000+', label: 'Meals Delivered', sub: 'Fresh & Hygienic' },
              { value: '1,200+', label: 'Active Customers', sub: 'Kochi & TVM' },
              { value: '12-Hour', label: 'Flexi-Notice', sub: 'Pause & Resume' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group/stat relative rounded-2xl border border-border/60 bg-secondary/10 p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-secondary/20 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="block text-xl sm:text-2xl font-black text-foreground tracking-tight group-hover/stat:text-primary transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold text-foreground tracking-wider leading-tight">
                    {stat.label}
                  </span>
                </div>
                <span className="block text-[8px] font-bold text-muted-foreground mt-2 uppercase tracking-wider">
                  {stat.sub}
                </span>
              </div>
            ))}
          </MotionWrapper>
        </div>

        {/* Right Column: Hero Visual composition */}
        <div className="relative lg:col-span-5 flex justify-center lg:justify-end">
          <MotionWrapper animation="scale" className="relative w-full max-w-[430px] aspect-square group">
            {/* Ambient Background depth glow */}
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 to-emerald-500/10 blur-xl opacity-80 group-hover:scale-105 transition-all duration-500" />
            
            {/* Main Visual Image Wrapper with double frame */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/80 bg-muted relative p-2 bg-gradient-to-b from-white to-secondary/35 dark:from-card dark:to-card/20">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                <Image
                  src="/images/hero_meal_box.png"
                  alt="Alakapuri dietitian-approved portion-controlled healthy meal box"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Overlapping Macro Detail Floating Card (Premium Glassmorphism layout) */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/20 dark:border-border/40 bg-white/80 dark:bg-card/85 backdrop-blur-md p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-[210px] space-y-3.5 hover:scale-[1.03] transition-transform duration-300 md:block hidden z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Dietitian Verified
              </span>
              <div className="space-y-1">
                <span className="block text-xs font-extrabold text-foreground tracking-tight">
                  High Protein Salmon Box
                </span>
                <span className="block text-[10px] text-muted-foreground font-medium">
                  Calories: 450 kcal
                </span>
              </div>
              
              {/* Macro elements grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-black border-t border-border/80 pt-2.5">
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase tracking-wider mb-0.5">
                    Prot
                  </span>
                  <span className="inline-flex rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5">
                    38g
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase tracking-wider mb-0.5">
                    Carb
                  </span>
                  <span className="inline-flex rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 px-1.5 py-0.5">
                    42g
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase tracking-wider mb-0.5">
                    Fat
                  </span>
                  <span className="inline-flex rounded-full bg-blue-500/15 text-blue-800 dark:text-blue-300 px-1.5 py-0.5">
                    12g
                  </span>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}

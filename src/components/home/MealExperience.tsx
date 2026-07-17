import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  description: string;
  calories: string;
  protein: string;
  price: string;
  link: string;
}

function CategoryCard({ imageSrc, title, description, calories, protein, price, link }: CategoryCardProps) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Visual Frame */}
      <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Alakapuri ${title} subscription plan details`}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Modern Custom SVG Nutrition Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-extrabold text-foreground uppercase tracking-wider border border-border/40 shadow-sm">
            <svg className="h-2.5 w-2.5 text-amber-500 fill-current animate-pulse" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {calories}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-extrabold text-primary-foreground uppercase tracking-wider border border-primary/20 shadow-sm">
            <svg className="h-2.5 w-2.5 text-white stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {protein}
          </span>
        </div>
      </div>

      {/* Description Panel */}
      <div className="p-5 flex-grow flex flex-col justify-between gap-5">
        <div className="space-y-2">
          <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">
            {title}
          </Typography>
          <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground line-clamp-3 font-medium">
            {description}
          </Typography>
        </div>

        <div className="pt-4 border-t border-border/60 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[9px] text-muted-foreground block font-bold uppercase tracking-wider leading-none">Starting at</span>
            <span className="text-sm font-black text-foreground block mt-1">{price}</span>
          </div>
          <Link
            href={link}
            className="group/btn inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            aria-label={`Explore Alakapuri ${title} subscription plan details`}
          >
            <span>Explore Plan</span>
            <svg className="h-3 w-3 fill-current ml-1 transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10h3l-4 4-4-4h3V8h2v4z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MealExperience() {
  const whatsappLink = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I'd like to subscribe to the ₹69 budget healthy box. Please share onboarding details."
  )}`;

  return (
    <Section bg="white" className="relative overflow-hidden">
      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Our Culinary Philosophy
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Dietitian Designed. Chef Crafted.
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Portion-controlled, dietitian-approved daily nutrition mapped to your goals.
          </Typography>
        </div>

        {/* 1. Signature Spotlight Card (₹69 Budget Box - Apple Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 backdrop-blur-md overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 lg:items-stretch group">
          {/* Left Visual: Image representation with scale hover */}
          <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-muted min-h-[300px] overflow-hidden">
            <Image
              src="/images/hero_meal_box.png"
              alt="Alakapuri ₹69 Flagship Healthy Meal Box"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border border-emerald-500/20 shadow-sm animate-pulse">
              Flagship Value Box
            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <Typography variant="badge-label" className="text-emerald-800 dark:text-emerald-300 tracking-widest text-[10px]">
                Daily Budget Meal Gateway
              </Typography>
              <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
                The ₹69 Healthy Meal Box
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                Portion-scaled, fresh daily nutrition designed for busy professionals and families.
              </p>
            </div>

            {/* Structured Macro Badges Block */}
            <div className="grid grid-cols-3 gap-4 border-y border-border/60 py-5 max-w-lg text-center text-xs font-semibold">
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">Macros</span>
                <span className="block text-foreground text-sm font-extrabold tracking-tight">Balanced 450 kcal</span>
              </div>
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">Oils</span>
                <span className="block text-foreground text-sm font-extrabold tracking-tight">Cold-Pressed Regulated</span>
              </div>
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">Hygiene</span>
                <span className="block text-emerald-800 dark:text-emerald-300 text-sm font-extrabold tracking-tight">FSSAI Certified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Subscribe on WhatsApp</span>
                <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
                </svg>
              </a>
              <Link
                href="/meal-plans"
                className="flex h-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-xs font-semibold text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Explore Plans
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Meal Category Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Explore Targeted Wellness Programs
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Select a clinical diet path designed for your specific physical goals starting from ₹199 / meal.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <MotionWrapper animation="fade-up">
              <CategoryCard
                imageSrc="/images/category_weight_loss.png"
                title="Weight Loss Plan"
                description="Calorie-deficit menu formulated to burn fat and maintain muscle."
                calories="350 kcal"
                protein="24g Prot"
                price="₹199 / Meal"
                link="/meal-plans/weight-loss"
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <CategoryCard
                imageSrc="/images/category_high_protein.png"
                title="High Protein & Gym"
                description="High-protein boxes to support muscle growth and recovery."
                calories="600 kcal"
                protein="45g Prot"
                price="₹249 / Meal"
                link="/meal-plans/high-protein"
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <CategoryCard
                imageSrc="/images/category_diabetic.png"
                title="Diabetic Friendly"
                description="Low-glycemic meals designed to prevent insulin spikes."
                calories="400 kcal"
                protein="26g Prot"
                price="₹219 / Meal"
                link="/meal-plans/diabetic"
              />
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up">
              <CategoryCard
                imageSrc="/images/category_corporate.png"
                title="Corporate Lunch"
                description="Portion-regulated energy lunches delivered to your office desk."
                calories="450 kcal"
                protein="30g Prot"
                price="₹199 / Meal"
                link="/meal-plans/corporate"
              />
            </MotionWrapper>
          </div>
        </div>

        {/* 3. Ingredient Integrity Spotlight (Visual Storytelling) */}
        <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 backdrop-blur-md p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center group shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500">
          <div className="space-y-5">
            <div className="space-y-2">
              <Typography variant="badge-label" className="tracking-widest text-[11px]">
                Ingredient Integrity
              </Typography>
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Clean ingredients mean clean energy.
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground font-medium">
                Fresh organic greens, premium proteins, and local cold-pressed oils. Zero preservatives.
              </p>
            </div>
            
            {/* Visual Check Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-foreground/90">
              {[
                'Organic Leafy Greens',
                'Premium Lean Chicken',
                'Cold-Pressed Oils Only',
                'Low-GI Complex Carbs'
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/15 px-3.5 py-2.5 transition-all duration-300 hover:border-primary/20 hover:bg-secondary/25"
                >
                  <svg className="h-4 w-4 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image element with custom double border */}
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-lg border border-border/80 p-2 bg-gradient-to-b from-white to-secondary/35 dark:from-card dark:to-card/20">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/ingredient_integrity.png"
                alt="Alakapuri dietitian raw fresh clean ingredient sourcing details"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

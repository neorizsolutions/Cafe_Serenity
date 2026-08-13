'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  description: string;
  calories: string;
  protein: string;
  price: string;
  link: string;
}

function CategoryCard({ imageSrc, title, description, calories, protein, price }: Omit<CategoryCardProps, 'link'>) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Visual Frame */}
      <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Nutrition Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-extrabold text-foreground uppercase tracking-wider border border-border/40 shadow-sm">
            <svg className="h-2.5 w-2.5 text-brand-gold fill-current animate-pulse" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {calories}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/90 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-extrabold text-brand-dark uppercase tracking-wider border border-brand-gold/20 shadow-sm">
            <svg className="h-2.5 w-2.5 text-brand-dark stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
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
            href="/#contact"
            className="group/btn inline-flex h-9 items-center justify-center rounded-full bg-brand-gold px-4 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
            aria-label={`Inquire about Café Serenity ${title} plan`}
          >
            <span>Inquire Now</span>
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
  return (
    <Section bg="white" className="relative overflow-hidden" id="healthy-meals-info">
      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
            Our Culinary Philosophy
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Dietitian Designed. Chef Crafted.
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Portion-controlled, dietitian-approved daily nutrition mapped to your goals.
          </Typography>
        </div>

        {/* 1. Signature Spotlight Card (₹69 Budget Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500 lg:items-stretch group">
          {/* Left Visual */}
          <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-muted min-h-[300px] overflow-hidden">
            <Image
              src="/images/hero_meal_box.png"
              alt="Café Serenity ₹69 Flagship Value Box"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border border-brand-gold/20 shadow-sm animate-pulse z-10">
              Flagship Value Box
            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <Typography variant="badge-label" className="text-brand-gold tracking-widest text-[10px]">
                Daily Budget Meal Gateway
              </Typography>
              <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
                The ₹69 Healthy Meal Box
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                Portion-scaled, fresh daily nutrition designed for busy professionals and families.
              </p>
            </div>

            {/* Macro Badges Block */}
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
                <span className="block text-brand-gold text-sm font-extrabold tracking-tight">FSSAI Certified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/#contact"
                className="group flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-8 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer text-center"
              >
                <span>Inquire Now</span>
              </Link>
              <Link
                href="/meal-plans"
                className="flex h-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-xs font-semibold text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98] text-center"
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
              />
            </MotionWrapper>
          </div>
        </div>

        {/* 3. Ingredient Integrity Spotlight */}
        <div className="rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 backdrop-blur-md p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center group shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500">
          <div className="space-y-5">
            <div className="space-y-2">
              <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
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
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/15 px-3.5 py-2.5 transition-all duration-300 hover:border-brand-gold/25 hover:bg-secondary/25"
                >
                  <svg className="h-4 w-4 text-brand-gold shrink-0" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-lg border border-border/80 p-2 bg-gradient-to-b from-stone-900 to-stone-950">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/ingredient_integrity.png"
                alt="Café Serenity Raw Organic Ingredient Integrity"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                loading="lazy"
                className="object-cover transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

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
    <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Visual Frame */}
      <div className="relative aspect-video w-full bg-muted overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Alakapuri ${title} subscription plan details`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Float tags */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className="rounded bg-background/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-bold text-foreground uppercase tracking-wider border border-border/40">
            🔥 {calories}
          </span>
          <span className="rounded bg-primary/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-bold text-primary-foreground uppercase tracking-wider border border-primary/20">
            💪 {protein}
          </span>
        </div>
      </div>

      {/* Description Panel */}
      <div className="p-5 flex-grow flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <Typography variant="h3" className="text-base font-bold text-foreground">
            {title}
          </Typography>
          <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </Typography>
        </div>

        <div className="pt-3 border-t border-border flex items-center justify-between">
          <div className="text-left">
            <span className="text-[9px] text-muted-foreground block font-bold uppercase tracking-wider">Starting at</span>
            <span className="text-sm font-black text-foreground">{price}</span>
          </div>
          <Link
            href={link}
            className="inline-flex h-8 items-center justify-center rounded-full bg-primary/10 px-4 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Explore Plan
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
    <Section bg="white">
      <Container className="space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label">Our Culinary Philosophy</Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Dietitian Designed. Chef Crafted.
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Experience food that fuels your goals. Standardized portion control cooked fresh daily, balancing calories, fiber, and macronutrients.
          </Typography>
        </div>

        {/* 1. Signature Spotlight Card (₹69 Budget Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-border bg-secondary/15 overflow-hidden shadow-sm lg:items-center">
          {/* Left Visual: Image representation */}
          <div className="relative aspect-video lg:aspect-auto lg:h-full lg:col-span-5 bg-muted">
            <Image
              src="/images/hero-meal-box.png"
              alt="Alakapuri ₹69 Flagship Healthy Meal Box"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border border-primary/20">
              Flagship Value Box
            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12 lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <Typography variant="badge-label" className="text-emerald-800">
                Daily Budget Meal Gateway
              </Typography>
              <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
                The ₹69 Healthy Meal Box
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Healthy daily meals shouldn&apos;t drain your wallet. Our flagship ₹69 box is portion-scaled, clean-ingredient nutrition designed for daily corporate employees, students, and busy families in Kochi and Trivandrum.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-y border-border/80 py-4 max-w-md text-center text-xs font-semibold">
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-bold">Macros</span>
                <span className="block text-foreground text-sm font-extrabold">Balanced 450 kcal</span>
              </div>
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-bold">Oils</span>
                <span className="block text-foreground text-sm font-extrabold">Cold-Pressed regulated</span>
              </div>
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-bold">Hygiene</span>
                <span className="block text-foreground text-sm font-extrabold">FSSAI Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95 transition-colors"
              >
                Order ₹69 Box on WhatsApp
              </a>
              <Link
                href="/meal-plans"
                className="flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                View Plans Configuration
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Meal Category Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground">
              Explore Targeted Wellness Programs
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground">
              Select a clinical diet path designed for your specific physical goals starting from ₹199 / meal.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              imageSrc="/images/premium-meal-prep.png"
              title="Weight Loss Plan"
              description="Low carb, calorie deficit meal programs designed to burn stubborn body fat while keeping lean mass intact."
              calories="350 kcal"
              protein="24g Protein"
              price="₹199 / Meal"
              link="/meal-plans/weight-loss"
            />
            <CategoryCard
              imageSrc="/images/premium-meal-prep.png"
              title="High Protein & Gym"
              description="High-protein, dietitian-weighed diet boxes supporting rapid muscle synthesis, athletic training, and physical recovery."
              calories="600 kcal"
              protein="45g Protein"
              price="₹249 / Meal"
              link="/meal-plans/high-protein"
            />
            <CategoryCard
              imageSrc="/images/premium-meal-prep.png"
              title="Diabetic Friendly"
              description="Low glycemic index (Low GI) formulations avoiding simple sugars, protecting insulin response, and managing glucose levels."
              calories="400 kcal"
              protein="26g Protein"
              price="₹219 / Meal"
              link="/meal-plans/diabetic"
            />
            <CategoryCard
              imageSrc="/images/premium-meal-prep.png"
              title="Corporate Lunch"
              description="Healthy, portion-regulated energy lunches delivered directly to Infopark and Technopark reception areas."
              calories="450 kcal"
              protein="30g Protein"
              price="₹199 / Meal"
              link="/meal-plans/corporate"
            />
          </div>
        </div>

        {/* 3. Ingredient Integrity Spotlight (Visual Storytelling) */}
        <div className="rounded-3xl border border-border bg-secondary/35 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Typography variant="badge-label">Ingredient Integrity</Typography>
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Clean ingredients mean clean energy.
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We sourcing fresh, organic greens, premium lean chicken breasts, wild brown rice, and healthy oils daily. Our clinical cooking guidelines forbid MSG, palm oil, refined flour, and artificial chemical flavorings.
            </p>
            
            {/* Visual Checks */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-foreground/80">
              <span className="flex items-center gap-1.5">✓ Organic Leafy Greens</span>
              <span className="flex items-center gap-1.5">✓ Premium Lean Chicken</span>
              <span className="flex items-center gap-1.5">✓ Cold-Pressed Sesame/Coconut</span>
              <span className="flex items-center gap-1.5">✓ Low-GI Brown Rice/Quinoa</span>
            </div>
          </div>

          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow border border-border/40">
            <Image
              src="/images/premium-meal-prep.png"
              alt="Alakapuri dietitian raw fresh clean ingredient sourcing details"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

      </Container>
    </Section>
  );
}

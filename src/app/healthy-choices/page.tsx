import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';

import { constructMetadata } from '@/utils/seo';
import { HEALTHY_MEAL_PLANS } from '@/data/healthy-choices/plans';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Diet & Healthy Choices | Café Serenity Kakkanad',
  description: 'Portion-controlled, dietitian-checked healthy choices in Kakkanad, Kochi. Explore our weight loss, high-protein, and diabetic-safe options starting from ₹169/meal.',
  path: '/healthy-choices',
});

export default function HealthyChoicesPage() {
  const valueBox = HEALTHY_MEAL_PLANS.find((p) => p.id === 'balanced');
  const targetPlans = HEALTHY_MEAL_PLANS.filter((p) => p.id !== 'balanced');

  return (
    <>
      {/* 1. Dedicated Hero Section */}
      <Section bg="muted" className="relative border-b border-border py-16 md:py-24 overflow-hidden">
        {/* Background ambient radial highlight */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.42_0.13_145_/_0.02)_0%,transparent_70%)] blur-3xl" />
        
        <Container className="text-center space-y-6 max-w-3xl mx-auto">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold uppercase font-black">
            Café Serenity Healthy Offering
          </Typography>
          <Typography variant="h1" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Better food for everyday life.
          </Typography>
          <Typography variant="body-large" className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
            Balanced, portion-conscious subscription menus prepared fresh daily and tailored for Kakkanad office teams or convenient pickups.
          </Typography>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#plans-grid"
              className="w-full sm:w-auto min-h-[44px] px-8 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              Explore Plans
            </a>
            <Link
              href="/#contact"
              className="w-full sm:w-auto min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-bold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              Contact Support
            </Link>
          </div>
        </Container>
      </Section>

      {/* 2. Spotlight Promotion: ₹69 Everyday Value Box */}
      {valueBox && (
        <Section bg="white" className="py-16 md:py-24 border-b border-border">
          <Container className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Typography variant="badge-label" className="text-brand-gold tracking-wider text-[11px]">
                Budget-Friendly Nutrition
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Our Everyday Spotlight Box
              </Typography>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-brand-gold/20 bg-brand-cream/40 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-5xl mx-auto">
              {/* Left Visual */}
              <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-muted min-h-[250px] sm:min-h-[300px]">
                <Image
                  src="/images/hero_meal_box.png"
                  alt="Café Serenity ₹69 Everyday Balanced Diet Box"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm z-10">
                  Value Spotlight
                </div>
              </div>

              {/* Right Content */}
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex rounded-full bg-brand-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                      {valueBox.calories}
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                      {valueBox.protein}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    The {valueBox.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                    {valueBox.description} Formulated to provide continuous steady energy with clean complex grains and fresh vegetables.
                  </p>
                </div>

                {/* Macro Badges Block */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-border/60 py-4 text-center text-xs font-semibold">
                  <div className="space-y-1">
                    <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">Price per meal</span>
                    <span className="block text-foreground text-sm sm:text-base font-extrabold tracking-tight">₹69 only</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">Local Oils</span>
                    <span className="block text-foreground text-sm sm:text-base font-extrabold tracking-tight">Cold-Pressed Virgin</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">FSSAI Kitchen</span>
                    <span className="block text-brand-gold text-sm sm:text-base font-extrabold tracking-tight">Certified Prep</span>
                  </div>
                </div>

                {/* CTA buttons with 44px minimum target */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href={CONTACT_DETAILS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-8 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark flex items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
                  >
                    Inquire via WhatsApp
                  </a>
                  <Link
                    href={valueBox.path}
                    className="min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-semibold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 3. Targeted Programs Grid */}
      <Section bg="muted" className="py-16 md:py-24 border-b border-border" id="plans-grid">
        <Container className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Typography variant="badge-label" className="text-brand-gold tracking-widest text-[11px] font-black uppercase">
              Configure Your Health Goals
            </Typography>
            <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Targeted Wellness Plans
            </Typography>
            <Typography variant="body-large" className="text-base text-muted-foreground font-medium">
              Dietitian-supervised subscription programs prepared using premium ingredients.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {targetPlans.map((p) => (
              <div key={p.id} className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                {/* Visual Header */}
                <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                  <Image
                    src={p.imageSrc || '/images/category_weight_loss.png'}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 250px"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay nutrition details */}
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-extrabold text-foreground uppercase tracking-wider border border-border/40 shadow-sm">
                      {p.calories}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-brand-gold text-brand-dark px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider shadow-sm">
                      {p.protein.replace(' Protein', ' Prot')}
                    </span>
                  </div>
                </div>

                {/* Description Body */}
                <div className="p-5 flex-grow flex flex-col justify-between gap-5">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-brand-gold transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-muted-foreground block font-bold uppercase tracking-wider">Starting at</span>
                      <span className="text-xs font-black text-foreground block mt-0.5">{p.price}</span>
                    </div>
                    <Link
                      href={p.path}
                      className="min-h-[36px] px-4 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-[11px] font-bold text-brand-dark shadow-sm flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold active:scale-95"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. How It Works Section */}
      <Section bg="white" className="py-16 md:py-24 border-b border-border">
        <Container className="space-y-16 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <Typography variant="badge-label" className="text-brand-gold tracking-widest text-[11px] font-black">
              Simple 3-Step Process
            </Typography>
            <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
              How Our Subscription Works
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
              <div className="mx-auto h-12 w-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center text-lg font-black">
                1
              </div>
              <h4 className="text-base font-bold text-foreground">Choose Your Plan</h4>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Review our options from fat deficit goals to muscle recovery and select the layout that fits your physical targets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
              <div className="mx-auto h-12 w-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center text-lg font-black">
                2
              </div>
              <h4 className="text-base font-bold text-foreground">Inquire & Customize</h4>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Connect with our team to select your plan, configure your preferences, and choose your schedule.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
              <div className="mx-auto h-12 w-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center text-lg font-black">
                3
              </div>
              <h4 className="text-base font-bold text-foreground">Savor Wholesome Food</h4>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Enjoy fresh, portion-controlled, healthy boxes prepared in Café Serenity&apos;s FSSAI kitchen.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Trust & Local Relevance Section */}
      <Section bg="brand-light" className="py-16 md:py-24 border-b border-border">
        <Container className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <Typography variant="badge-label" className="text-brand-gold tracking-widest text-[11px] font-black">
              Ingredient Integrity
            </Typography>
            <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Cooked Locally. Clean Energy.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs font-semibold text-foreground/90">
            {[
              {
                title: 'No Palm Oil or MSG',
                desc: 'We use strictly cold-pressed oils and local seasonings to protect cardiovascular health.'
              },
              {
                title: 'Dietitian Supervised Grids',
                desc: 'Portions are weighed (e.g. 120g lean protein) and configured under guidelines to stabilize glucose.'
              },
              {
                title: 'Kakkanad IT Neighborhoods',
                desc: 'Conveniently serving office teams around Infopark Kakkanad, SmartCity, and Civil Station areas.'
              },
              {
                title: 'Fresh Preparation Daily',
                desc: 'Cooked fresh every morning in our certified Kakkanad kitchen. Zero preservatives.'
              }
            ].map((pt, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5 hover:border-brand-gold/25 transition-colors"
              >
                <svg className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div className="space-y-1">
                  <span className="block font-bold text-foreground text-sm">{pt.title}</span>
                  <span className="block font-medium text-muted-foreground text-xs leading-relaxed">{pt.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Localized FSSAI registration note */}
          <div className="rounded-2xl border border-brand-gold/15 bg-brand-cream/30 p-5 text-center text-xs text-muted-foreground font-semibold max-w-xl mx-auto">
            🥣 Café Serenity is a registered kitchen in Kochi, Kerala. FSSAI Lic No. <span className="text-foreground font-bold">{CONTACT_DETAILS.fssaiNumber}</span>
          </div>

          {/* Cross-Navigation Banner */}
          <div className="rounded-3xl border border-brand-gold/15 bg-brand-gold/[0.01] p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between transition-all duration-300 hover:border-brand-gold/30 mt-16">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-base font-bold text-foreground">Want our regular café favourites?</h4>
              <p className="text-xs text-muted-foreground max-w-xl leading-relaxed font-medium">
                Explore Café Serenity South Indian breakfast classics, fresh steamed idlis, crispy vadas, local parottas, and traditional filter coffee. No pre-ordering required!
              </p>
            </div>
            <Link
              href="/cafe-menu"
              className="min-h-[44px] px-6 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-xs font-bold text-brand-dark flex items-center justify-center shrink-0 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              View Café Menu →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

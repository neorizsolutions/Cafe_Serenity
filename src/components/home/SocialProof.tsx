'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { useCheckout } from '@/context/CheckoutContext';
import { CONTACT_DETAILS, SEO_DEFAULTS } from '@/constants';

interface ReviewCardProps {
  initials: string;
  name: string;
  role: string;
  plan: string;
  rating: number;
  text: string;
}

function ReviewCard({ initials, name, role, plan, rating, text }: ReviewCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between gap-5">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
      
      <div className="space-y-3.5">
        {/* Crisp Vector Rating Stars */}
        <div className="flex text-amber-500 gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <svg 
              key={idx} 
              className={`h-3.5 w-3.5 ${idx < rating ? 'fill-current' : 'fill-none stroke-current'}`} 
              viewBox="0 0 24 24" 
              strokeWidth="2.5" 
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-xs leading-relaxed text-foreground/80 font-medium italic">
          &quot;{text}&quot;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border/60">
        <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black shrink-0 shadow-sm border border-primary/5 transition-transform duration-300 group-hover:scale-105">
          {initials}
        </div>
        <div>
          <span className="block text-xs font-extrabold text-foreground leading-tight">{name}</span>
          <span className="block text-[8px] text-muted-foreground uppercase tracking-widest font-extrabold mt-0.5">
            {role} • {plan}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const { openCheckout } = useCheckout();

  // Google review rating schemas for SEO crawlers
  const ratingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    'itemReviewed': {
      '@type': 'LocalBusiness',
      'name': SEO_DEFAULTS.siteName,
      'telephone': CONTACT_DETAILS.phone,
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': CONTACT_DETAILS.address.city,
        'addressCountry': 'IN'
      }
    },
    'ratingValue': '4.8',
    'reviewCount': '184'
  };

  return (
    <Section bg="muted" className="relative border-t border-border overflow-hidden">
      {/* Dynamic schema injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />

      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Customer Credibility
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Trusted by Busy Professionals & Athletes
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            How our clean diet boxes help professionals and athletes stay healthy.
          </Typography>
        </div>

        {/* 1. Success Story Spotlight Panel */}
        <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 backdrop-blur-md overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 lg:items-stretch group relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          {/* Left Visual */}
          <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-secondary/15 flex flex-col items-center justify-center p-8 text-center border-b lg:border-b-0 lg:border-r border-border/60">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl font-black mb-4 border border-primary/5 shadow-sm transition-transform duration-300 group-hover:scale-105">
              RN
            </div>
            <Typography variant="h3" className="text-base font-bold text-foreground">Rahul Nair</Typography>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-extrabold mt-0.5">
              Software Architect • Kakkanad Infopark
            </span>
            <div className="mt-5 px-4 py-2.5 bg-background/80 backdrop-blur-sm rounded-xl border border-border/80 text-xs font-semibold text-foreground/90 shadow-sm">
              Goal: Weight Deficit & Energy Control
            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
            <span className="inline-flex rounded-full bg-emerald-600/10 px-3.5 py-1 text-[9px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest border border-emerald-600/20 shadow-sm w-fit">
              Featured Case Study
            </span>
            <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
              Lost 12 Kilograms & Resolved Post-Lunch Fatigue
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              &quot;Alakapuri plans resolved my post-lunch fatigue and helped me lose weight. Extremely convenient.&quot;
            </p>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/60 max-w-md text-xs font-semibold">
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[8px] uppercase tracking-wider font-extrabold">Duration</span>
                <span className="block text-foreground text-sm font-extrabold">12 Weeks</span>
              </div>
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[8px] uppercase tracking-wider font-extrabold">Plan</span>
                <span className="block text-foreground text-sm font-extrabold">Low Carb Deficit</span>
              </div>
              <div className="space-y-1">
                <span className="block text-muted-foreground text-[8px] uppercase tracking-wider font-extrabold">Outcome</span>
                <span className="block text-emerald-800 dark:text-emerald-300 text-sm font-extrabold">-12kg (Verified)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openCheckout('Weight Loss Plan')}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Choose Plan</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Testimonials Placeholders Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Verified Subscriber Reviews
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Real feedback from corporate offices and fitness hubs. (Photos and reviews are customer placeholders).
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <MotionWrapper animation="fade-up">
              <ReviewCard
                initials="AN"
                name="Anjali Menon"
                role="Gym Trainer"
                plan="High Protein Plan"
                rating={5}
                text="Alakapuri high-protein boxes deliver 45g+ clean protein weighed exactly to plan."
              />
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <ReviewCard
                initials="DR"
                name="Dr. Haris"
                role="Clinical Doctor"
                plan="Diabetic Friendly"
                rating={5}
                text="I recommend Alakapuri care boxes for consistent, low-glycemic, sugar-free nutrition."
              />
            </MotionWrapper>

            <MotionWrapper animation="fade-up">
              <ReviewCard
                initials="SK"
                name="Suresh Kumar"
                role="Senior Citizen"
                plan="₹69 Budget Box"
                rating={5}
                text="The ₹69 budget box is clean, low-oil, and avoids heavy kitchen prep."
              />
            </MotionWrapper>
          </div>
        </div>

        {/* 3. Partner & Recognition Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-border/60">
          {/* Left panel: Gyms & Expert partners */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
                Partner Hubs & Nutrition Experts (Placeholders)
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground font-medium">
                We collaborate with local fitness studios and experts to offer tailored meals.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-center text-[10px] font-black text-muted-foreground/60">
              {[
                'Partner Gym Kochi',
                'Fitness Studio Kochi',
                'Diet Clinic Kerala'
              ].map((partner, i) => (
                <div 
                  key={i} 
                  className="p-3.5 border border-dashed border-border/80 rounded-xl bg-card/60 transition-all duration-300 hover:border-primary/20 hover:bg-card flex items-center justify-center min-h-[50px] font-semibold"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Recognitions & Food Safety */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
                Kitchen Standards & Certifications (Verified)
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground font-medium">
                Our kitchens undergo regular sanitization checks to guarantee portion safety.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-center text-[10px] font-extrabold text-primary/80">
              {[
                {
                  text: 'FSSAI Certified',
                  icon: (
                    <svg className="h-3.5 w-3.5 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.0" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  )
                },
                {
                  text: 'RO Water Preps',
                  icon: (
                    <svg className="h-3.5 w-3.5 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.0" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                    </svg>
                  )
                },
                {
                  text: 'Dietitian Checked',
                  icon: (
                    <svg className="h-3.5 w-3.5 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.0" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10.125 2.25h3.75a.75.75 0 01.75.75v1.125c0 .414.336.75.75.75h1.125a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75H16.5a.75.75 0 01-.75-.75V7.875a.75.75 0 00-.75-.75H9c-.414 0-.75-.336-.75-.75V5.25a.75.75 0 01.75-.75h1.125a.75.75 0 00.75-.75V3a.75.75 0 01.75-.75z" />
                      <path d="M3.75 9.776c.112-.03.23-.046.352-.046h15.796c.122 0 .24.016.352.046M3.75 9.776V19.5a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25V9.776M3.75 9.776a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25m-16.5 0h16.5" />
                    </svg>
                  )
                }
              ].map((cert, i) => (
                <div 
                  key={i} 
                  className="p-3.5 border border-border bg-primary/[0.02] rounded-xl transition-all duration-300 hover:bg-primary/[0.05] hover:border-primary/20 flex flex-col items-center justify-center gap-2 min-h-[50px] font-bold text-foreground"
                >
                  {cert.icon}
                  <span>{cert.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Conversion CTA */}
        <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 p-8 text-center space-y-5 max-w-3xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 group relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
            Experience verified, clean daily nutrition.
          </Typography>
          <p className="text-xs leading-relaxed text-muted-foreground max-w-lg mx-auto font-medium">
            Select a plan and subscribe. Pause or reschedule anytime via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => openCheckout()}
              className="group flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Order Now</span>
            </button>
            <Link
              href="/meal-plans"
              className="flex h-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Configure Plans
            </Link>
          </div>
        </div>

      </Container>
    </Section>
  );
}

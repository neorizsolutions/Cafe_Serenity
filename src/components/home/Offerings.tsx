'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';

export default function Offerings() {
  return (
    <Section bg="white" className="relative border-b border-border py-16 md:py-24" id="offerings">
      {/* Background ambient radial highlight */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.42_0.13_145_/_0.02)_0%,transparent_70%)] blur-3xl" />

      <Container className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-primary">
            Two Food Experiences
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Choose What You&apos;re Looking For
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium opacity-90">
            Enjoy dietitian-planned health subscriptions or discover our normal café breakfast and lunch classics.
          </Typography>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Healthy Meals */}
          <MotionWrapper animation="fade-up" transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}>
            <div className="group relative h-full rounded-3xl border border-brand-gold/15 bg-gradient-to-b from-brand-gold/[0.02] to-transparent dark:from-brand-gold/[0.01] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/30 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-brand-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-6">
                {/* Icon Mark */}
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <div className="space-y-3">
                  <Typography variant="h3" className="text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
                    Healthy Meals
                    <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-2 py-0.5 text-[10px] font-bold text-brand-gold">
                      Diet Plans
                    </span>
                  </Typography>
                  <Typography variant="body-regular" className="text-sm leading-relaxed text-muted-foreground font-medium">
                    Balanced meals designed for customers looking for healthier everyday food and convenient meal options. Calorie-mapped, portion-controlled, and dietitian-approved.
                  </Typography>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/healthy-meals"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-bold text-brand-dark shadow-sm hover:bg-brand-gold/90 transition-all duration-300 w-full"
                >
                  Explore Healthy Meals
                </Link>
              </div>
            </div>
          </MotionWrapper>

          {/* Card 2: Café Favourites */}
          <MotionWrapper animation="fade-up" transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}>
            <div className="group relative h-full rounded-3xl border border-brand-gold/15 bg-gradient-to-b from-brand-gold/[0.02] to-transparent dark:from-brand-gold/[0.01] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/30 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-brand-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-6">
                {/* Icon Mark */}
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18c0-3.314 2.686-6 6-6s6 2.686 6 6" />
                  </svg>
                </div>
                
                <div className="space-y-3">
                  <Typography variant="h3" className="text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
                    Café Favourites
                    <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-2 py-0.5 text-[10px] font-bold text-brand-gold">
                      Tiffin & Tea
                    </span>
                  </Typography>
                  <Typography variant="body-regular" className="text-sm leading-relaxed text-muted-foreground font-medium">
                    Affordable everyday food and quick breakfast favourites served fresh throughout the day. Perfect for early-morning commuters and local comfort hunters.
                  </Typography>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/cafe-menu"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-bold text-brand-dark shadow-sm hover:bg-brand-gold/90 transition-all duration-300 w-full"
                >
                  View Café Menu
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}

'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/25 flex flex-col justify-between h-full space-y-4">
      {/* Dynamic card highlight on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
      
      <div className="space-y-4">
        {/* Crisp circular indicator */}
        <div className="h-8 w-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xs font-black shadow-sm border border-brand-gold/5 transition-transform duration-300 group-hover:scale-105">
          {number}
        </div>
        <Typography variant="h3" className="text-sm font-bold text-foreground tracking-tight">
          {title}
        </Typography>
        <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <Section bg="muted" className="relative border-t border-border overflow-hidden">
      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Your Nutrition Path
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Simple Subscriptions, Effortless Daily Delivery
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            No checkout forms or long-term contracts. Manage your diet flexibly.
          </Typography>
        </div>

        {/* Four Steps Stepper Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MotionWrapper animation="fade-up">
            <StepCard
              number="01"
              title="Select Your Wellness Goal"
              description="Choose our ₹69 Value Box or target specialized plans."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <StepCard
              number="02"
              title="Coordinate Onboarding Setup"
              description="We coordinate delivery locations, times, and digital billing."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <StepCard
              number="03"
              title="Daily Kitchen Preparation"
              description="Meals are portion-scaled, prepared fresh daily, and macro-labeled."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <StepCard
              number="04"
              title="Contactless Office Dispatch"
              description="Fresh meal boxes are delivered directly to your desk."
            />
          </MotionWrapper>
        </div>

        {/* Flexi-Freeze Guarantee Panel */}
        <div className="rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 p-8 text-center space-y-5 max-w-3xl mx-auto shadow-sm group relative overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <span className="inline-flex rounded-full bg-brand-gold/10 px-3 py-1 text-[9px] font-black text-brand-gold uppercase tracking-widest border border-brand-gold/20 shadow-sm">
            100% Subscription Protection
          </span>
          <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
            The Café Serenity Flexi-Freeze Guarantee
          </Typography>
          <p className="text-xs leading-relaxed text-muted-foreground max-w-lg mx-auto font-medium">
            Manage your delivery schedules, pause subscriptions, and roll over credits dynamically.
          </p>
          <div className="pt-2 z-10 relative">
            <Link
              href="/how-flexi-freeze-works"
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-brand-gold px-6 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>

        {/* Personalized Routine Presets */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Pre-Configured Dietary Presets
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              We scale nutrition variables matching specific lifestyles and metabolic requirements.
            </Typography>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center font-bold text-xs">
            {[
              { title: 'Office Corporate Teams', desc: 'Infopark & Technopark drops.' },
              { title: 'Low Glycemic Sugar Control', desc: 'Insulin-friendly glycemic plans.' },
              { title: 'Calorie Deficit Weight Loss', desc: 'Portion-controlled deficit weight-loss.' },
              { title: 'Athletic High Protein Grains', desc: 'High-protein recovery boxes.' },
              { title: 'Kids Balanced Growth Box', desc: 'Nutrient-rich growth boxes for kids.' },
              { title: 'Senior Heart Healthy', desc: 'Easy-to-digest wholesome nutrients.' },
              { title: 'Wholesome Healthy Family', desc: 'Balanced meals for whole families.' },
              { title: 'Flexible Custom Custom Presets', desc: 'Custom schedules and routes.' }
            ].map((preset, idx) => (
              <div 
                key={idx} 
                className="group/preset p-4 border border-border/60 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-gold/25 hover:-translate-y-0.5 flex flex-col justify-center gap-1"
              >
                <span className="block text-[11px] font-black text-foreground">{preset.title.split(' ').slice(1).join(' ') || preset.title}</span>
                <span className="block text-[9px] text-muted-foreground font-medium">{preset.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}

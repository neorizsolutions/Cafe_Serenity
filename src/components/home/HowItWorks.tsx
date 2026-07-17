import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Step({ number, title, description, icon }: StepProps) {
  return (
    <div className="group relative space-y-4 p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

      <div className="flex justify-between items-center">
        <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
        <span className="text-xs font-black text-primary/30 tracking-widest uppercase">Step {number}</span>
      </div>

      <div className="space-y-1.5">
        <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">
          {title}
        </Typography>
        <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground font-medium">
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const whatsappLink = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I'd like to check how to freeze or pause my meals if I travel. Please explain the process."
  )}`;

  return (
    <Section bg="muted" className="relative border-t border-border overflow-hidden">
      {/* Background ambient radial highlight */}
      <div className="absolute top-[30%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.42_0.13_145_/_0.03)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[10%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.55_0.14_145_/_0.03)_0%,transparent_70%)] blur-3xl" />

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
            No complex checkout forms or locked-in billing contracts. Manage your daily diet with simple, flexible controls.
          </Typography>
        </div>

        {/* Stepper Grid (Timeline) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {/* Subtle line connectors for desktop */}
          <div className="hidden lg:block absolute top-11 left-16 right-16 h-0.5 bg-border/80 -z-10" />

          <MotionWrapper animation="fade-up">
            <Step
              number="01"
              icon={
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              }
              title="Select Your Goal"
              description="Choose from our ₹69 Budget Box or target premium plans (Weight Deficit, Gym Protein, Diabetic Care)."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <Step
              number="02"
              icon={
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
                </svg>
              }
              title="WhatsApp Setup"
              description="Our concierge team sets up your delivery coordinates, timing targets, and logs your digital UPI billing."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <Step
              number="03"
              icon={
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              }
              title="Fresh Kitchen Prep"
              description="Clinical chefs cook your meals using cold-pressed oils. Every box gets scaled, checked, and macro-labeled."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <Step
              number="04"
              icon={
                <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9 0h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75M19.5 18.75v-9m0 9h1.5m-1.5-9h1.5M18 5.25h1.5a1.5 1.5 0 011.5 1.5v3h-3v-4.5zM3 13.5h13.5m0-4.5H4.5A1.5 1.5 0 003 10.5v3.75" />
                </svg>
              }
              title="Doorstep Delivery"
              description="Riders deliver fresh boxes to Infopark, Technopark receptions, or doorsteps within scheduled timelines."
            />
          </MotionWrapper>
        </div>

        {/* Dynamic 'Pause & Resume' Showcase Panel (CRO focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.03)] hover:border-emerald-500/20 transition-all duration-500 overflow-hidden lg:items-stretch group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          {/* Left panel: Info */}
          <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
            <Typography variant="badge-label" className="text-emerald-800 dark:text-emerald-300 tracking-widest text-[10px]">
              Flexi-Freeze Guarantee
            </Typography>
            <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
              Travel or Eat Out? Pause in 5 Seconds.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              We never waste your money. If you are traveling, working late, or eating out, simply send a text to our WhatsApp line 12 hours prior. We freeze your delivery for that day and automatically extend your subscription duration.
            </p>

            {/* Custom SVG bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-foreground/90">
              {[
                '12-Hour Notice',
                'No Rollover Penalty',
                'UPI Credit Lock'
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-secondary/15 border border-border/60 px-3 py-2 rounded-xl">
                  <svg className="h-3.5 w-3.5 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span>Learn Pause Policy on WhatsApp</span>
                <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right panel: Visual indicators mockup */}
          <div className="lg:col-span-5 bg-secondary/10 p-8 md:p-12 lg:h-full border-t lg:border-t-0 lg:border-l border-border/60 flex flex-col justify-center gap-6">
            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-red-600/10 px-2.5 py-0.5 text-[9px] font-black text-red-800 uppercase tracking-widest">
                Pause Status
              </span>
              <div className="flex justify-between items-center text-xs font-bold text-foreground bg-background p-3.5 rounded-xl border border-border/80 shadow-sm">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-red-500 shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.5 1.5 0 00-2.1 0l-4.5 4.5a1.5 1.5 0 000 2.1l4.5 4.5a1.5 1.5 0 002.1 0V12a6 6 0 116 6 1.5 1.5 0 000 3 9 9 0 10-9-9v1.575z" />
                  </svg>
                  Wednesday Delivery
                </span>
                <span className="text-red-600 bg-red-500/10 px-2.5 py-0.5 rounded text-[10px] uppercase font-black tracking-wider">
                  Frozen
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-emerald-600/10 px-2.5 py-0.5 text-[9px] font-black text-emerald-800 uppercase tracking-widest">
                Active Status
              </span>
              <div className="flex justify-between items-center text-xs font-bold text-foreground bg-background p-3.5 rounded-xl border border-border/80 shadow-sm">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-primary shrink-0 animate-pulse" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thursday Delivery
                </span>
                <span className="text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded text-[10px] uppercase font-black tracking-wider">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded 8 Personalized Programs Preset Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Personalized Programs & Routine Presets
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              Select program presets tailored to your local household or workplace routine.
            </Typography>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 text-center">
            {[
              {
                title: 'Office Teams',
                desc: 'Infopark & Technopark bulk deliveries.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 16.5h1.5m3 0H15" />
                  </svg>
                )
              },
              {
                title: 'Low Glycemic',
                desc: 'Diabetic management controls.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )
              },
              {
                title: 'Calorie Deficit',
                desc: 'Structured weight-loss plans.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 006.1 1.908z" />
                  </svg>
                )
              },
              {
                title: 'Athletic Grains',
                desc: 'High-protein workout formulas.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              {
                title: 'Kids Healthy Grains',
                desc: 'Nutrition packed growth boxes.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                  </svg>
                )
              },
              {
                title: 'Senior Wellness',
                desc: 'Soft, digestion friendly nutrients.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18M5.3 5.3l13.4 13.4M5.3 18.7L18.7 5.3" />
                  </svg>
                )
              },
              {
                title: 'Wholesome Family',
                desc: 'Balanced plans for households.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                )
              },
              {
                title: 'Flexible Custom Preset',
                desc: 'Choose exact days and routes.',
                icon: (
                  <svg className="h-6 w-6 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                )
              }
            ].map((program, idx) => (
              <div 
                key={idx}
                className="group/prog relative p-5 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md space-y-3 hover:-translate-y-1 transition-all duration-300 hover:border-primary/20 flex flex-col items-center justify-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover/prog:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/prog:scale-105">
                  {program.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-foreground tracking-tight">{program.title}</h4>
                  <p className="text-[10px] text-muted-foreground leading-normal font-medium">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}

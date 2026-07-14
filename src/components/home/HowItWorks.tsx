import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="relative space-y-3 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-200">
      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black shadow-sm">
        {number}
      </div>
      <div className="space-y-1">
        <Typography variant="h3" className="text-base font-bold text-foreground">
          {title}
        </Typography>
        <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground">
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
    <Section bg="muted" className="relative border-t border-border">
      <Container className="space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label">Your Nutrition Path</Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Simple Subscriptions, Effortless Daily Delivery
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            No complex checkout forms or locked-in billing contracts. Manage your daily diet with simple, flexible controls.
          </Typography>
        </div>

        {/* Stepper Grid (Timeline) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Subtle line connectors for desktop */}
          <div className="hidden lg:block absolute top-11 left-16 right-16 h-0.5 bg-border -z-10" />

          <Step
            number="01"
            title="Select Your Goal"
            description="Choose from our ₹69 Budget Box or target premium plans (Weight Deficit, Gym Protein, Diabetic Care)."
          />
          <Step
            number="02"
            title="WhatsApp Setup"
            description="Our concierge team sets up your delivery coordinates, timing targets, and logs your digital UPI billing."
          />
          <Step
            number="03"
            title="Fresh Kitchen Prep"
            description="Clinical chefs cook your meals using cold-pressed oils. Every box gets scaled, checked, and macro-labeled."
          />
          <Step
            number="04"
            title="Doorstep Delivery"
            description="Riders deliver fresh boxes to Infopark, Technopark receptions, or doorsteps within scheduled timelines."
          />
        </div>

        {/* Dynamic 'Pause & Resume' Showcase Panel (CRO focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-border bg-card shadow-sm overflow-hidden lg:items-center">
          {/* Left panel: Info */}
          <div className="p-8 md:p-12 lg:col-span-7 space-y-6">
            <Typography variant="badge-label">Flexi-Freeze Guarantee</Typography>
            <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
              Travel or Eat Out? Pause in 5 Seconds.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We never waste your money. If you are traveling, working late, or eating out, simply send a text to our WhatsApp line 12 hours prior. We freeze your delivery for that day and automatically extend your subscription duration.
            </p>

            <div className="flex gap-4 text-xs font-bold text-foreground">
              <span className="flex items-center gap-1.5">✓ 12-Hour Advanced Notice</span>
              <span className="flex items-center gap-1.5">✓ No Rollover Penalty</span>
              <span className="flex items-center gap-1.5">✓ UPI Credit Lock</span>
            </div>

            <div className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-colors shadow"
              >
                Learn Pause Policy on WhatsApp
              </a>
            </div>
          </div>

          {/* Right panel: Visual indicators */}
          <div className="lg:col-span-5 bg-secondary/15 p-8 md:p-12 lg:h-full border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-center gap-6">
            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-red-600/10 px-2.5 py-0.5 text-[9px] font-black text-red-800 uppercase tracking-wider">
                Pause Status
              </span>
              <div className="flex justify-between items-center text-xs font-bold text-foreground bg-background p-3 rounded-xl border border-border">
                <span>📅 Wednesday Delivery</span>
                <span className="text-red-600">Frozen (Credits Saved)</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-emerald-600/10 px-2.5 py-0.5 text-[9px] font-black text-emerald-800 uppercase tracking-wider">
                Active Status
              </span>
              <div className="flex justify-between items-center text-xs font-bold text-foreground bg-background p-3 rounded-xl border border-border">
                <span>📅 Thursday Delivery</span>
                <span className="text-emerald-600">Active (Dispatched)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Future Customization Targets Capabilities Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground">
              Personalized Programs & Capability Focus
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground">
              Select program presets tailored to your local household or workplace routine.
            </Typography>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
            <div className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl block">💼</span>
              <h4 className="text-xs font-bold text-foreground">Office Teams</h4>
              <p className="text-[10px] text-muted-foreground leading-normal">Infopark & Technopark bulk deliveries.</p>
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl block">🥑</span>
              <h4 className="text-xs font-bold text-foreground">Low Glycemic</h4>
              <p className="text-[10px] text-muted-foreground leading-normal">Diabetic management controls.</p>
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl block">🚴</span>
              <h4 className="text-xs font-bold text-foreground">Calorie Deficit</h4>
              <p className="text-[10px] text-muted-foreground leading-normal">Structured weight-loss plans.</p>
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-2 hover:-translate-y-1 transition-transform">
              <span className="text-2xl block">💪</span>
              <h4 className="text-xs font-bold text-foreground">Athletic Grains</h4>
              <p className="text-[10px] text-muted-foreground leading-normal">High-protein workout formulas.</p>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

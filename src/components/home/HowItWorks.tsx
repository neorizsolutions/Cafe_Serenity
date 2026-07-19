import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 flex flex-col justify-between h-full space-y-4">
      {/* Dynamic card highlight on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
      
      <div className="space-y-4">
        {/* Crisp circular indicator */}
        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black shadow-sm border border-primary/5 transition-transform duration-300 group-hover:scale-105">
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
  const whatsappCTA = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri Restaurant Kakkanad, I'd like to manage/freeze my lunch box delivery."
  )}`;

  return (
    <Section bg="muted" className="relative border-t border-border overflow-hidden">
      <Container className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Your Nutrition Path
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Delicious Dining, Convenient Desk Drops
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Dine in at Kakkanad, or subscribe to daily traditional lunch drops at your office.
          </Typography>
        </div>

        {/* Four Steps Stepper Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MotionWrapper animation="fade-up">
            <StepCard
              number="01"
              title="Browse Specialties & Meals"
              description="Choose our traditional Kerala meals, Porotta & Beef, or Malabar Biriyani."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <StepCard
              number="02"
              title="Set Up Your Schedule"
              description="Select dine-in reservations or daily office lunch box delivery drop-offs."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <StepCard
              number="03"
              title="Traditional Chef Prep"
              description="Meals are cooked using hand-ground spices and traditional clay pots since 1970."
            />
          </MotionWrapper>

          <MotionWrapper animation="fade-up">
            <StepCard
              number="04"
              title="Prompt Hot Delivery"
              description="Lunches are delivered hot directly to your office desk at Infopark or Kakkanad."
            />
          </MotionWrapper>
        </div>

        {/* Flexi-Freeze Guarantee Panel (Linear style banner) */}
        <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 p-8 text-center space-y-5 max-w-3xl mx-auto shadow-sm group relative overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <span className="inline-flex rounded-full bg-emerald-600/10 px-3 py-1 text-[9px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest border border-emerald-600/20 shadow-sm">
            100% Subscription Protection
          </span>
          <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
            The Alakapuri Delivery Guarantee
          </Typography>
          <p className="text-xs leading-relaxed text-muted-foreground max-w-lg mx-auto font-medium">
            Message us 12 hours prior to freeze your daily office lunch box or update your delivery drop location.
          </p>
          <div className="pt-2 z-10 relative">
            <a
              href={whatsappCTA}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <span>Manage on WhatsApp</span>
              <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Personalized Routine Presets (Pills Grid) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
              Traditional Culinary Styles
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
              We prepare authentic recipes matching traditional standards and tastes.
            </Typography>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center font-bold text-xs">
            {[
              { title: 'Office Corporate Teams', desc: 'Infopark & SmartCity drops.' },
              { title: 'Diabetic Friendly Options', desc: 'Low-GI grain diabetic care.' },
              { title: 'Traditional Kerala Sadya', desc: 'Authentic banana leaf meals.' },
              { title: 'Malabar Spiced Biriyanis', desc: 'Aromatic ghee roasted dum rice.' },
              { title: 'Lacy Appams & Stew', desc: 'Creamy coconut milk stew breakfasts.' },
              { title: 'Claypot Fish Curries', desc: 'Tangy Kudampuli red fish gravy.' },
              { title: 'Family Special Platters', desc: 'Legendary Porotta and Beef fry.' },
              { title: 'Flexible Catering Packages', desc: 'Custom catering routes in Kochi.' }
            ].map((preset, idx) => (
              <div 
                key={idx} 
                className="group/preset p-4 border border-border/60 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5 flex flex-col justify-center gap-1"
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

import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
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
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between gap-4">
      <div className="space-y-3">
        {/* Rating Stars */}
        <div className="flex text-amber-500 gap-0.5 text-sm">
          {Array.from({ length: rating }).map((_, idx) => (
            <span key={idx}>★</span>
          ))}
        </div>
        <p className="text-xs text-foreground/80 leading-relaxed italic">
          &quot;{text}&quot;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-border/80">
        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black shrink-0">
          {initials}
        </div>
        <div>
          <span className="block text-xs font-bold text-foreground">{name}</span>
          <span className="block text-[9px] text-muted-foreground uppercase tracking-wider font-bold">
            {role} • {plan}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const whatsappCTA = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I read your customer success stories. I'd like to consult on a diet plan configuration."
  )}`;

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
    <Section bg="muted" className="relative border-t border-border">
      {/* Dynamic schema injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />

      <Container className="space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label">Customer Credibility</Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Trusted by Busy Professionals & Athletes
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            See how our clean diet boxes are helping local communities manage weight, fuel workouts, and eat healthy daily.
          </Typography>
        </div>

        {/* 1. Success Story Spotlight Panel */}
        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 lg:items-center">
          {/* Left Visual: Placeholder Profile Photo block */}
          <div className="relative aspect-video lg:aspect-auto lg:h-full lg:col-span-5 bg-secondary/35 flex flex-col items-center justify-center p-8 text-center border-b lg:border-b-0 lg:border-r border-border">
            <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-black mb-3">
              RN
            </div>
            <Typography variant="h3" className="text-base font-bold text-foreground">Rahul Nair</Typography>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">
              Software Architect • Kakkanad Infopark
            </span>
            <div className="mt-4 p-3 bg-background rounded-xl border border-border text-xs font-bold text-foreground">
              Goal: Weight deficit & Energy control
            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12 lg:col-span-7 space-y-6">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-0.5 text-[9px] font-bold text-primary uppercase tracking-wider">
              Featured Case Study
            </span>
            <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
              Lost 12 Kilograms & Resolved Post-Lunch Fatigue
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &quot;As an IT professional sitting 9 hours daily, my weight peaked and my focus dropped after heavy rice lunches. Subscribing to Alakapuri deficit plans resolved my portion control. The food is clean, coconut oil is portioned, and the convenience is absolute.&quot;
            </p>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/80 max-w-md text-xs font-semibold">
              <div>
                <span className="block text-muted-foreground text-[8px] uppercase tracking-wider font-bold">Duration</span>
                <span className="block text-foreground text-sm font-extrabold">12 Weeks</span>
              </div>
              <div>
                <span className="block text-muted-foreground text-[8px] uppercase tracking-wider font-bold">Plan</span>
                <span className="block text-foreground text-sm font-extrabold">Low Carb Deficit</span>
              </div>
              <div>
                <span className="block text-muted-foreground text-[8px] uppercase tracking-wider font-bold">Outcome</span>
                <span className="block text-foreground text-sm font-extrabold">-12kg (Verified)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappCTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-colors shadow"
              >
                Explore Transformation Plans
              </a>
            </div>
          </div>
        </div>

        {/* 2. Testimonials Placeholders Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <Typography variant="h3" className="text-xl font-bold text-foreground">
              Verified Subscriber Reviews
            </Typography>
            <Typography variant="body-regular" className="text-xs text-muted-foreground">
              Real feedback from corporate offices and fitness hubs. (Photos and reviews are customer placeholders).
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ReviewCard
              initials="AN"
              name="Anjali Menon"
              role="Gym Trainer"
              plan="High Protein Plan"
              rating={5}
              text="Cooking clean proteins at home was consuming 2 hours daily. Alakapuri high-protein boxes deliver 45g+ clean protein. Portions are weighed exactly as dietitian mapped."
            />
            <ReviewCard
              initials="DR"
              name="Dr. Haris"
              role="Clinical Doctor"
              plan="Diabetic Friendly"
              rating={5}
              text="Diabetic management requires strict low-GI grain controls and zero refined sugars. I recommend Alakapuri care boxes to patients searching for consistent clean food."
            />
            <ReviewCard
              initials="SK"
              name="Suresh Kumar"
              role="Senior Citizen"
              plan="₹69 Budget Box"
              rating={5}
              text="Our home requires low-oil, easy-to-digest healthy lunches. The ₹69 budget box is clean, delivered consistently, and helps us avoid heavy kitchen prep."
            />
          </div>
        </div>

        {/* 3. Partner & Recognition Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-border/85">
          {/* Left panel: Gyms & Expert partners */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Partner Hubs & Nutrition Experts (Placeholders)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We collaborate with premier local fitness studios and health consultants to offer tailored meal integrations.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-[10px] font-black text-muted-foreground/60">
              <span className="p-3 border border-dashed border-border rounded-xl bg-card">Partner Gym TVM</span>
              <span className="p-3 border border-dashed border-border rounded-xl bg-card">Fitness Studio Kochi</span>
              <span className="p-3 border border-dashed border-border rounded-xl bg-card">Diet Clinic Kerala</span>
            </div>
          </div>

          {/* Right panel: Recognitions & Food Safety */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Kitchen Standards & Certifications (Verified)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our central culinary hubs undergo sanitation checks to guarantee hygienic portion scaling.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-[10px] font-black text-primary/80">
              <span className="p-3 border border-border rounded-xl bg-primary/5">FSSAI Certified</span>
              <span className="p-3 border border-border rounded-xl bg-primary/5">RO Water Preps</span>
              <span className="p-3 border border-border rounded-xl bg-primary/5">Dietitian Checked</span>
            </div>
          </div>
        </div>

        {/* Final Conversion CTA */}
        <div className="rounded-3xl border border-border bg-secondary/15 p-8 text-center space-y-4 max-w-3xl mx-auto">
          <Typography variant="h3" className="text-xl font-bold text-foreground">
            Experience verified, clean daily nutrition.
          </Typography>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Choose your health goal and configure a weekly or monthly subscription. Rollover credits on travel days via WhatsApp.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={whatsappCTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-colors shadow"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/meal-plans"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Configure Plans
            </Link>
          </div>
        </div>

      </Container>
    </Section>
  );
}

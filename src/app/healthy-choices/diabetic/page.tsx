import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { constructMetadata } from '@/utils/seo';
import { CONTACT_DETAILS } from '@/constants';

export const metadata = constructMetadata({
  title: 'Diabetic-Friendly Food Options | Healthy Choices at Café Serenity',
  description:
    'A thoughtful, low-GI food option for people managing their sugar intake — prepared fresh daily at Café Serenity, Kakkanad. Millets, low-GI grains, and natural ingredients. From ₹219.',
  path: '/healthy-choices/diabetic',
});

// ─── Quiet nutrition strip data ───────────────────────────────────────────────
const NUTRITION = [
  { label: 'Approx. calories', value: '~400 kcal' },
  { label: 'Protein', value: '~26g' },
  { label: 'Added sugar', value: 'None' },
  { label: 'Starting from', value: '₹219 / meal' },
];

// ─── Food principles ──────────────────────────────────────────────────────────
const PRINCIPLES = [
  {
    heading: 'No refined sugar or white rice',
    body: 'We use low-GI whole grains — millets, red rice, and oats — in place of white rice and refined flour.',
  },
  {
    heading: 'Natural seasonings only',
    body: 'Seasoned with garlic, ginger, turmeric, and local herbs. No synthetic additives, minimal salt.',
  },
  {
    heading: 'High-fibre vegetables',
    body: 'Fresh, fibre-rich vegetables that slow down digestion — helping to keep the meal steady rather than sharp.',
  },
  {
    heading: 'Freshly prepared, not prepackaged',
    body: 'Cooked every morning in our FSSAI-certified Kakkanad kitchen. No preservatives, no mass-produced shortcuts.',
  },
];

export default function DiabeticPage() {
  return (
    <>
      {/* ── Section A: Hero ────────────────────────────────────────────── */}
      <Section
        bg="muted"
        className="relative border-b border-border py-14 md:py-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 60% 50%, rgba(110,128,100,0.05) 0%, transparent 65%)',
          }}
        />
        <Container className="max-w-5xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/healthy-choices"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-green rounded"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Healthy Choices
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left — copy */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-green">
                  Healthy Choices
                </p>
                <Typography
                  variant="h1"
                  className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground leading-tight"
                >
                  Thoughtfully prepared food with mindful ingredients and balanced portions.
                </Typography>
                <Typography
                  variant="body-large"
                  className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed"
                >
                  A food option prepared with care for people who are mindful of
                  their sugar intake — using low-GI local grains, natural
                  seasonings, and no added sugar.
                </Typography>
              </div>

              {/* Responsible note */}
              <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground font-medium leading-relaxed">
                <strong className="text-foreground font-bold">Please note:</strong> This is a food
                option, not a medical prescription or treatment. If you are managing diabetes,
                please consult your doctor before making dietary changes.
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] px-7 rounded-full bg-brand-green hover:bg-brand-green/90 text-xs font-bold text-white flex items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green text-center"
                >
                  Talk to Us
                </a>
                <Link
                  href="/healthy-choices"
                  className="w-full sm:w-auto min-h-[44px] px-7 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-semibold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green text-center"
                >
                  ← All Healthy Choices
                </Link>
              </div>
            </div>

            {/* Right — image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted shadow-sm border border-border/60">
                <Image
                  src="/images/category_diabetic.png"
                  alt="A diabetic-friendly meal prepared fresh at Café Serenity — low-GI grains, vegetables, and lean protein"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section B: What makes this different ──────────────────────── */}
      <Section bg="white" className="py-14 md:py-20 border-b border-border">
        <Container className="max-w-5xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-green">
              How it is made
            </p>
            <Typography
              variant="h2"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
            >
              Real food, prepared with extra care.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.heading}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-brand-green/25 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-brand-green shrink-0 mt-0.5"
                  fill="none"
                  strokeWidth="3"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground">{p.heading}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Section C: What to expect + Nutrition at a glance ─────────── */}
      <Section bg="muted" className="py-14 md:py-20 border-b border-border">
        <Container className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* What to expect */}
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-green">
                What to expect
              </p>
              <Typography variant="h2" className="text-xl sm:text-2xl font-extrabold text-foreground">
                Familiar food, made with mindful ingredients.
              </Typography>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed font-medium">
                <p>
                  This option replaces white rice and refined flour with low-GI whole grains —
                  millets, red rice, oats, and legumes. Combined with fibre-rich vegetables and
                  a lean protein (egg whites, skinless chicken, paneer, or pulses), each meal
                  is designed to feel steady and satisfying.
                </p>
                <p>
                  Seasoned naturally without heavy salt or artificial additives. Suitable for
                  people looking for a more careful everyday food option.
                </p>
                <p className="text-xs text-muted-foreground/80 italic">
                  This is a food preparation choice, not a medical treatment. Dietary needs
                  vary. Please consult your healthcare provider for guidance specific to
                  your condition.
                </p>
              </div>
            </div>

            {/* Nutrition at a glance */}
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-green">
                At a glance
              </p>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                {NUTRITION.map((n) => (
                  <div
                    key={n.label}
                    className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold text-muted-foreground">{n.label}</span>
                    <span className="text-sm font-bold text-foreground">{n.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                Nutrition figures are approximate and may vary by daily preparation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section D: How to get started + cross-nav ─────────────────── */}
      <Section bg="white" className="py-14 md:py-20">
        <Container className="max-w-4xl mx-auto space-y-14">
          {/* How to get started */}
          <div className="space-y-8 text-center">
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-green">
                Getting started
              </p>
              <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Interested in this choice?
              </Typography>
              <p className="text-sm text-muted-foreground font-medium max-w-lg mx-auto">
                Talk to Café Serenity and we’ll help you understand the available options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', heading: 'Browse the option', body: 'Take a look at this page and decide if it feels right for your everyday routine.' },
                { step: '2', heading: 'Talk to us', body: 'Reach out via WhatsApp or visit us at our Kakkanad café. We will answer any questions and help you get started.' },
                { step: '3', heading: 'Enjoy fresh food', body: 'Freshly prepared every morning in our FSSAI-certified kitchen. Good food, ready when you need it.' },
              ].map((s) => (
                <div
                  key={s.step}
                  className="space-y-3 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow text-left"
                >
                  <div className="h-10 w-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-sm font-black">
                    {s.step}
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{s.heading}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] px-8 rounded-full bg-brand-green hover:bg-brand-green/90 text-xs font-bold text-white items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              Talk to Us on WhatsApp
            </a>
          </div>

          {/* Cross-nav to Café Menu */}
          <div className="rounded-2xl border border-border/60 bg-secondary/20 p-7 flex flex-col sm:flex-row gap-5 items-center justify-between hover:border-border transition-colors">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-foreground">Looking for everyday café favourites?</h4>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Explore our regular café menu — South Indian breakfast, Kerala meals, biriyani, and filter coffee.
              </p>
            </div>
            <Link
              href="/cafe-menu"
              className="min-h-[40px] px-5 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-bold text-foreground flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green whitespace-nowrap"
            >
              View Café Menu →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

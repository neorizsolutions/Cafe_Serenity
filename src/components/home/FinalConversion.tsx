import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { CONTACT_DETAILS } from '@/constants';

export default function FinalConversion() {
  return (
    <Section bg="white" className="relative border-t border-border overflow-hidden" id="contact">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand-gold/5 blur-3xl" />

      <Container className="space-y-16">

        {/* Main Invitation Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
            Visit Us
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            We&apos;d Love to Serve You
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium opacity-90">
            Whether you&apos;re dropping by for a hot coffee, picking up your daily meal box, or just want to chat about our menu—our doors are open.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-8 text-sm font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
            >
              <span>Message Us on WhatsApp</span>
            </Link>
            <Link
              href="/cafe-menu"
              className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-foreground bg-transparent hover:bg-secondary px-8 text-sm font-semibold text-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center"
            >
              View the Menu
            </Link>
          </div>
        </div>


        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div className="group/item p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-brand-gold/25 hover:-translate-y-0.5 text-center flex flex-col items-center">
            <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm mb-4 group-hover/item:scale-105 transition-transform duration-300">
              <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-foreground block mb-2">Our Café</span>
            <span className="text-xs text-muted-foreground block font-medium leading-relaxed max-w-[200px]">
              Kakkanad, Kochi<br />
              Kerala
            </span>
          </div>

          <div className="group/item p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-brand-gold/25 hover:-translate-y-0.5 text-center flex flex-col items-center">
            <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm mb-4 group-hover/item:scale-105 transition-transform duration-300">
              <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-foreground block mb-2">Opening Hours</span>
            <span className="text-xs text-muted-foreground block font-medium leading-relaxed">
              Monday - Saturday<br />
              5:00 AM - 3:00 PM
            </span>
          </div>

          <div className="group/item p-6 rounded-2xl border border-border/60 bg-card hover:bg-secondary/35 transition-all duration-300 hover:border-brand-gold/25 hover:-translate-y-0.5 text-center flex flex-col items-center">
            <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm mb-4 group-hover/item:scale-105 transition-transform duration-300">
              <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.112-3.758-6.58-6.58l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.5A2.25 2.25 0 001.25 4.5v2.25z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-foreground block mb-2">Contact</span>
            <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-xs text-brand-gold hover:underline block font-bold mb-1">
              {CONTACT_DETAILS.phone}
            </a>
            <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-gold hover:underline block font-bold">
              WhatsApp Us
            </a>
          </div>

        </div>

      </Container>
    </Section>
  );
}

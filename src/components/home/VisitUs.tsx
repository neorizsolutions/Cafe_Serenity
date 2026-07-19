'use client';

import React from 'react';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function VisitUs() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Alakapuri+Restaurant+Kakkanad+Kochi`;
  const mapViewUrl = `https://maps.google.com/?q=Alakapuri+Restaurant+Kakkanad+Kochi`;
  const embedUrl = `https://maps.google.com/maps?q=Alakapuri%20Restaurant,%20Kakkanad,%20Kochi&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <Section
      bg="muted"
      className="relative border-t border-border overflow-hidden"
      id="visit-us"
      aria-label="Visit Alakapuri"
      itemScope
      itemType="http://schema.org/Restaurant"
    >
      {/* Hidden SEO schema metadata */}
      <meta itemProp="name" content="Alakapuri Restaurant" />
      <meta itemProp="telephone" content={CONTACT_DETAILS.phone} />
      <meta itemProp="priceRange" content="₹₹" />

      {/* Decorative background blurs */}
      <div className="absolute top-[10%] left-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.42_0.13_145_/_0.02)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[10%] right-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.55_0.14_145_/_0.02)_0%,transparent_70%)] blur-3xl" />

      <Container className="space-y-16">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Visit Us
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Visit Alakapuri
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Come experience the culinary heritage of Kerala. Find our central kitchen and restaurant location in Kakkanad.
          </Typography>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <MotionWrapper animation="fade-up" className="h-full flex flex-col justify-between bg-white/70 dark:bg-card/75 backdrop-blur-md border border-border/80 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="space-y-8">
                {/* Brand / Restaurant Name */}
                <div className="space-y-1">
                  <Typography variant="badge-label" className="text-[10px] tracking-widest">Kochi Flagship</Typography>
                  <Typography variant="h3" className="text-2xl font-black text-foreground tracking-tight" itemProp="name">
                    Alakapuri Restaurant
                  </Typography>
                </div>

                {/* Details list */}
                <div className="space-y-6">

                  {/* Address */}
                  <div className="flex gap-4 items-start" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Full Address</h4>
                      <address className="not-italic text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-semibold">
                        <span itemProp="streetAddress" className="block">Infopark Road, Near Civil Station, Echamuku</span>
                        <span className="block">
                          <span itemProp="addressLocality">Kakkanad</span>, <span itemProp="addressRegion">Kochi</span>
                        </span>
                        <span className="block">
                          Kerala – <span itemProp="postalCode">682030</span>
                        </span>
                      </address>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Clock className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Business Hours</h4>
                      <div className="text-xs sm:text-[13px] text-muted-foreground font-semibold space-y-0.5">
                        <span className="block text-primary font-bold">Open Daily</span>
                        <span className="block">08:00 AM – 08:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Contact Number</h4>
                      <a
                        href={`tel:${CONTACT_DETAILS.phone}`}
                        className="text-xs sm:text-[13px] text-muted-foreground hover:text-primary font-bold transition-colors block"
                        itemProp="telephone"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-8 w-full">
                <a
                  href={CONTACT_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20BA5A] text-xs font-extrabold shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background hover:bg-secondary text-foreground text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Call Us</span>
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-bold shadow-[0_4px_12px_rgba(26,79,53,0.15)] transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Directions</span>
                </a>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-7 flex items-stretch">
            <MotionWrapper animation="scale" className="relative w-full rounded-3xl border border-border/80 overflow-hidden shadow-md min-h-[350px] lg:min-h-full flex group/map">
              {/* Overlay link button to open map */}
              <a
                href={mapViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-card/95 hover:bg-primary hover:text-primary-foreground text-foreground px-3.5 py-2 rounded-xl text-[11px] font-extrabold shadow-md backdrop-blur-sm border border-border/60 transition-all duration-300 flex items-center gap-1.5 hover:-translate-y-0.5"
                aria-label="Open Alakapuri location in Google Maps (opens in new tab)"
              >
                <Navigation className="h-3.5 w-3.5 fill-current stroke-none" />
                <span>Open in Maps</span>
              </a>

              {/* Map Iframe */}
              <iframe
                title="Alakapuri Restaurant Kakkanad Kochi Location Map"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover min-h-[350px] lg:min-h-[450px]"
              />
            </MotionWrapper>
          </div>

        </div>
      </Container>
    </Section>
  );
}

'use client';

import React from 'react';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function VisitUs() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${CONTACT_DETAILS.geo.lat},${CONTACT_DETAILS.geo.lng}`;
  const mapViewUrl = `https://maps.google.com/?q=${CONTACT_DETAILS.geo.lat},${CONTACT_DETAILS.geo.lng}`;
  const embedUrl = `https://maps.google.com/maps?q=${CONTACT_DETAILS.geo.lat},${CONTACT_DETAILS.geo.lng}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <Section
      bg="muted"
      className="relative border-t border-border overflow-hidden"
      id="location"
      aria-label="Visit Café Serenity"
      itemScope
      itemType="http://schema.org/FoodEstablishment"
    >
      {/* Hidden SEO schema metadata */}
      <meta itemProp="name" content="Café Serenity" />
      <meta itemProp="telephone" content={CONTACT_DETAILS.phone} />
      <meta itemProp="priceRange" content="₹₹" />

      {/* Decorative background blurs */}
      <div className="absolute top-[10%] left-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[10%] right-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.03)_0%,transparent_70%)] blur-3xl" />

      <Container className="space-y-16">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Visit Café Serenity
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Get in touch with our restaurant or use the existing directions link to plan your visit.
          </Typography>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <MotionWrapper animation="fade-up" className="h-full flex flex-col justify-between bg-white/70 dark:bg-card/75 backdrop-blur-md border border-border/80 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="space-y-8">
                {/* Brand / Hub Name */}
                <div className="space-y-1">
                  <Typography variant="h3" className="text-2xl font-black text-foreground tracking-tight" itemProp="name">
                    Café Serenity
                  </Typography>
                </div>

                {/* Details list */}
                <div className="space-y-6">

                  {/* Address */}
                  <div className="flex gap-4 items-start" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <div className="h-9 w-9 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Full Address</h4>
                      <address className="not-italic text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-semibold">
                        <span itemProp="streetAddress" className="block">{CONTACT_DETAILS.address.street}</span>
                        <span className="block">
                          <span itemProp="addressLocality">{CONTACT_DETAILS.address.locality}</span>, <span itemProp="addressRegion">{CONTACT_DETAILS.address.city}</span>
                        </span>
                        <span className="block">
                          {CONTACT_DETAILS.address.state} – <span itemProp="postalCode">{CONTACT_DETAILS.address.zipCode}</span>
                        </span>
                      </address>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Clock className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Business Hours</h4>
                      <div className="text-xs sm:text-[13px] text-muted-foreground font-semibold space-y-0.5">
                        <span className="block text-brand-gold font-bold">Contact us for current hours</span>
                        <span className="block">Please call before your visit.</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-foreground">Contact Number</h4>
                      <a
                        href={`tel:${CONTACT_DETAILS.phone}`}
                        className="text-xs sm:text-[13px] text-foreground hover:text-brand-gold font-bold transition-colors block"
                        itemProp="telephone"
                      >
                        +91 93882 62626
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-8 w-full">
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background hover:bg-stone-900/40 text-foreground text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Call Us</span>
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-gold text-brand-dark hover:bg-brand-gold/90 text-xs font-bold shadow transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Directions</span>
                </a>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-7 flex items-stretch">
            <MotionWrapper animation="scale" className="relative w-full rounded-3xl border border-border/80 overflow-hidden shadow-md min-h-[220px] sm:min-h-[350px] lg:min-h-full flex group/map">
              {/* Overlay link button to open map */}
              <a
                href={mapViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-card/95 hover:bg-brand-gold hover:text-brand-dark text-foreground px-3.5 py-2 rounded-xl text-[11px] font-extrabold shadow-md backdrop-blur-sm border border-border/60 transition-all duration-300 flex items-center gap-1.5 hover:-translate-y-0.5"
                aria-label="Open Café Serenity location in Google Maps (opens in new tab)"
              >
                <Navigation className="h-3.5 w-3.5 fill-current stroke-none" />
                <span>Open in Maps</span>
              </a>

              {/* Map Iframe */}
              <iframe
                title="Café Serenity Location Map"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover min-h-[220px] sm:min-h-[350px] lg:min-h-[450px]"
              />
            </MotionWrapper>
          </div>

        </div>
      </Container>
    </Section>
  );
}

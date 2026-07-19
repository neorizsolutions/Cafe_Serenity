'use client';

import React from 'react';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';

interface Partner {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewsCount: string;
  ctaText: string;
  ctaLink: string;
  logoColor: string;
  hoverAccent: string;
  hoverBorder: string;
  glowGradient: string;
  logo: React.ReactNode;
}

export default function DeliveryPartners() {
  const partners: Partner[] = [
    {
      id: 'swiggy',
      name: 'Swiggy',
      description: 'Lightning-fast delivery of hot Kerala delicacies straight to your doorstep in Kakkanad.',
      rating: 4.4,
      reviewsCount: '1,200+ reviews',
      ctaText: 'Order on Swiggy',
      ctaLink: 'https://www.swiggy.com',
      logoColor: 'text-[#FF5200] bg-[#FF5200]/10',
      hoverAccent: 'group-hover:bg-[#FF5200] group-hover:text-white',
      hoverBorder: 'hover:border-[#FF5200]/30 hover:shadow-[0_8px_30px_rgba(255,82,0,0.08)]',
      glowGradient: 'from-[#FF5200]/5 to-[#FFA000]/5',
      logo: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.25 10c0 .9-.3 1.7-.8 2.3-.5.6-1.2 1-2 .1l-.2-.2c-.3-.3-.4-.7-.4-1.1 0-.4.1-.8.4-1.1l1.1-1.1c.3-.3.8-.4 1.2-.2.4.2.7.6.7 1.3zm-3.5 1.5c0-.6.2-1.2.6-1.6.4-.4 1-.6 1.6-.6s1.2.2 1.6.6c.4.4.6 1 .6 1.6s-.2 1.2-.6 1.6c-.4.4-1 .6-1.6.6s-1.2-.2-1.6-.6c-.4-.4-.6-1-.6-1.6zM9.5 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
        </svg>
      )
    },
    {
      id: 'zomato',
      name: 'Zomato',
      description: 'Browse our full kitchen menu, check out reviews, and enjoy portion-controlled packaging.',
      rating: 4.5,
      reviewsCount: '2,500+ reviews',
      ctaText: 'Order on Zomato',
      ctaLink: 'https://www.zomato.com',
      logoColor: 'text-[#E23744] bg-[#E23744]/10',
      hoverAccent: 'group-hover:bg-[#E23744] group-hover:text-white',
      hoverBorder: 'hover:border-[#E23744]/30 hover:shadow-[0_8px_30px_rgba(226,55,68,0.08)]',
      glowGradient: 'from-[#E23744]/5 to-[#FF5252]/5',
      logo: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    },
    {
      id: 'justdial',
      name: 'Justdial',
      description: 'Check verified customer feedback, phone contacts, kitchen hours, and central coordinates.',
      rating: 4.2,
      reviewsCount: '580+ reviews',
      ctaText: 'View on Justdial',
      ctaLink: 'https://www.justdial.com',
      logoColor: 'text-[#0059A3] bg-[#0059A3]/10',
      hoverAccent: 'group-hover:bg-[#0059A3] group-hover:text-white',
      hoverBorder: 'hover:border-[#0059A3]/30 hover:shadow-[0_8px_30px_rgba(0,89,163,0.08)]',
      glowGradient: 'from-[#0059A3]/5 to-[#0088FF]/5',
      logo: (
        <span className="font-extrabold text-sm tracking-tighter uppercase select-none">jd</span>
      )
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="h-3.5 w-3.5 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path fill="url(#half)" stroke="currentColor" strokeWidth="1" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="h-3.5 w-3.5 fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <Section bg="white" className="relative border-t border-border overflow-hidden">
      {/* Background visual details to match premium design */}
      <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[250px] w-[250px] rounded-full bg-emerald-600/5 blur-3xl" />

      <Container className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Typography variant="badge-label" className="tracking-widest text-[11px]">
            Order Online
          </Typography>
          <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Our Delivery Partners
          </Typography>
          <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Enjoy authentic Kerala food from home. Have hot, delicious Alakapuri traditional meals delivered directly to your doorstep.
          </Typography>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <MotionWrapper key={partner.id} animation="fade-up" className="flex h-full">
              <div 
                className={`group relative w-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm flex flex-col justify-between transition-all duration-300 ${partner.hoverBorder} hover:-translate-y-1.5 h-full`}
              >
                {/* Glow backdrop on card hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${partner.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`} />
                
                {/* Card Header: Logo, Name & Rating */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Platform</span>
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 ${partner.logoColor}`}>
                      {partner.logo}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Typography variant="h3" className="text-lg font-bold text-foreground tracking-tight">
                      {partner.name}
                    </Typography>
                    
                    {/* Stars and numbers layout */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center">
                        {renderStars(partner.rating)}
                      </div>
                      <span className="text-xs font-bold text-foreground leading-none pt-0.5">{partner.rating}</span>
                      <span className="text-[10px] font-semibold text-muted-foreground leading-none pt-0.5">({partner.reviewsCount})</span>
                    </div>
                  </div>

                  <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground font-medium pt-1">
                    {partner.description}
                  </Typography>
                </div>

                {/* Card Footer: Action Button */}
                <div className="pt-6">
                  <a
                    href={partner.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-11 w-full items-center justify-center rounded-xl border border-border/80 bg-background/60 font-bold text-xs text-foreground shadow-sm transition-all duration-300 ${partner.hoverAccent} hover:border-transparent active:scale-98`}
                  >
                    {partner.ctaText}
                  </a>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}

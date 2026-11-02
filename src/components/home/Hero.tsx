import Link from 'next/link';
import Image from 'next/image';


export default function Hero() {
  return (
    <section
      aria-label="Welcome to Café Serenity"
      className="hero-section relative overflow-hidden"
    >
      {/* Warm ambient radial overlays — decorative only */}
      <div aria-hidden="true" className="hero-bg-overlay" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="
          flex flex-col
          lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start
          py-8 md:py-8 lg:py-8
        ">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1">

            {/* Eyebrow label */}

            {/* H1 — single semantic heading for the page */}
            <h1 className="hero-heading max-w-[18ch]">
              Good food,{' '}
              <span className="hero-heading-accent block">
                made for everyday.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="hero-description mt-5 mb-8 max-w-[46ch] mx-auto lg:mx-0">
              Welcome to Café Serenity, a restaurant for eight Biriyani varieties,
              everyday snacks and golden Egg Puffs.
            </p>

            {/* CTA row */}
            <div className="
              flex flex-col sm:flex-row
              items-center justify-center lg:justify-start
              gap-3 sm:gap-4
              w-full max-w-sm sm:max-w-none mx-auto lg:mx-0
            ">
              {/* Primary CTA — Our Menu (brand green) */}
              <Link
                href="/cafe-menu"
                id="hero-cta-menu"
                className="hero-cta-primary"
              >
                Explore Our Menu
              </Link>

              {/* Secondary CTA — Café Menu (dark charcoal outline) */}
              <Link
                href="/contact"
                id="hero-cta-contact"
                className="hero-cta-secondary"
              >
                Contact Us
              </Link>
            </div>


          </div>

          {/* ── Right: Food visual ── */}
          <div className="
            relative order-2
            w-full mt-10 lg:mt-0
            flex items-center justify-center lg:justify-end
          ">
            {/* Decorative ambient blurs — aria-hidden, pointer-events-none */}
            <div aria-hidden="true" className="hero-glow-green" />
            <div aria-hidden="true" className="hero-glow-accent" />

            {/* Editorial image frame */}
            <div className="hero-image-frame">
              <Image
                src="/images/biriyani.webp"
                alt="Illustrative biriyani presentation"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 45vw"
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />

              {/* Bottom scrim for depth and caption legibility */}
              <div aria-hidden="true" className="hero-image-scrim" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import Link from 'next/link';
// import Image from 'next/image';
// 
// /**
//  * Hero — Phase 2 rebuild.
//  *
//  * Design direction: warm, premium, simple restaurant identity.
//  * Color system:
//  *   Background     #F7F4EE
//  *   Dark           #1C1C1E
//  *   Brand green    #6E8064
//  *   Warm accent    #B86F52
//  *
//  * Carousel decision: removed. A single editorial food image is
//  * more reliable, calmer, and better suited to a premium café identity
//  * than an auto-sliding nutrition data carousel.
//  *
//  * This component is intentionally a React Server Component (no 'use client').
//  * Hover/focus states are handled in globals.css via .hero-cta-primary and
//  * .hero-cta-secondary utility classes so no JS event listeners are needed.
//  */
// export default function Hero() {
//   return (
//     <section
//       aria-label="Welcome to Café Serenity"
//       className="hero-section relative overflow-hidden"
//     >
//       {/* Warm ambient radial overlays — decorative only */}
//       <div aria-hidden="true" className="hero-bg-overlay" />
// 
//       <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
//         <div className="
//           flex flex-col
//           lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center
//           py-16 md:py-20 lg:min-h-[88vh]
//         ">
// 
//           {/* ── Left: Text content ── */}
//           <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1">
// 
//             {/* Eyebrow label */}
//             <p className="hero-eyebrow mb-5">
//               Café Serenity · Kakkanad
//             </p>
// 
//             {/* H1 — single semantic heading for the page */}
//             <h1 className="hero-heading max-w-[18ch]">
//               Good food,{' '}
//               <span className="hero-heading-accent block">
//                 made for everyday.
//               </span>
//             </h1>
// 
//             {/* Supporting description */}
//             <p className="hero-description mt-5 mb-8 max-w-[46ch] mx-auto lg:mx-0">
//               From mindful everyday meals to the café favourites you love —
//               food made with care, flavour, and simplicity.
//             </p>
// 
//             {/* CTA row */}
//             <div className="
//               flex flex-col sm:flex-row
//               items-center justify-center lg:justify-start
//               gap-3 sm:gap-4
//               w-full max-w-sm sm:max-w-none mx-auto lg:mx-0
//             ">
//               {/* Primary CTA — Healthy Choices (brand green) */}
//               <Link
//                 href="/healthy-choices"
//                 id="hero-cta-healthy-choices"
//                 className="hero-cta-primary"
//               >
//                 Explore Healthy Choices
//               </Link>
// 
//               {/* Secondary CTA — Café Menu (dark charcoal outline) */}
//               <Link
//                 href="/cafe-menu"
//                 id="hero-cta-cafe-menu"
//                 className="hero-cta-secondary"
//               >
//                 View Café Menu
//               </Link>
//             </div>
// 
//             {/* Category legend — desktop only */}
//             <div className="hero-legend hidden lg:flex items-center gap-6 mt-10 pt-8">
//               <div className="flex items-center gap-2">
//                 <span
//                   aria-hidden="true"
//                   className="w-2 h-2 rounded-full flex-shrink-0"
//                   style={{ backgroundColor: '#6E8064' }}
//                 />
//                 <span className="hero-legend-text">
//                   Healthy Choices — diet plans &amp; mindful meals
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span
//                   aria-hidden="true"
//                   className="w-2 h-2 rounded-full flex-shrink-0"
//                   style={{ backgroundColor: '#B86F52' }}
//                 />
//                 <span className="hero-legend-text">
//                   Café Menu — everyday favourites &amp; breakfast
//                 </span>
//               </div>
//             </div>
//           </div>
// 
//           {/* ── Right: Food visual ── */}
//           <div className="
//             relative order-2
//             w-full mt-10 lg:mt-0
//             flex items-center justify-center lg:justify-end
//           ">
//             {/* Decorative ambient blurs — aria-hidden, pointer-events-none */}
//             <div aria-hidden="true" className="hero-glow-green" />
//             <div aria-hidden="true" className="hero-glow-accent" />
// 
//             {/* Editorial image frame */}
//             <div className="hero-image-frame">
//               <Image
//                 src="/images/slide_cafe_breakfast.png"
//                 alt="Freshly prepared South Indian breakfast — steaming idli, crispy vada and sambar served warm at Café Serenity, Kakkanad"
//                 fill
//                 priority
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 45vw"
//                 className="object-cover"
//                 style={{ objectPosition: 'center center' }}
//               />
// 
//               {/* Bottom scrim for depth and caption legibility */}
//               <div aria-hidden="true" className="hero-image-scrim" />
// 
//               {/* Subtle location caption */}
//               <div aria-hidden="true" className="hero-image-caption">
//                 Served fresh · Kakkanad, Kochi
//               </div>
//             </div>
//           </div>
// 
//         </div>
//       </div>
//     </section>
//   );
// }

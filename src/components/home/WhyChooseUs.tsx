import Link from 'next/link';
import Image from 'next/image';

/**
 * WhyChooseUs — Phase 4 rebuild.
 *
 * Section: THE CAFÉ SERENITY WAY
 * Title: Simple food. Made with care.
 * Description: Editorial restaurant story layout with 3 pillars.
 *
 * Core pillars:
 *   1. Made Fresh, Every Day
 *   2. Food for Different Days
 *   3. Familiar Flavours, Simply Done
 *
 * This is a React Server Component (no 'use client', no client JS).
 * Styling is entirely handled in globals.css using the .why-* component prefix.
 */
export default function WhyChooseUs() {
  const pillars = [
    {
      num: '01',
      title: 'Made Fresh, Every Day',
      description: 'We prepare our meals daily using fresh, quality ingredients. Thoughtful kitchen preparation ensures we serve clean, comforting dishes that we are proud to stand behind.',
    },
    {
      num: '02',
      title: 'Food for Different Days',
      description: 'Whether you want a portion-conscious, balanced meal from our Healthy Choices subscriptions or feel like enjoying one of our classic everyday Café Menu dishes, there is something made for you.',
    },
    {
      num: '03',
      title: 'Familiar Flavours, Simply Done',
      description: 'Our dishes celebrate familiar Kerala food culture and South Indian breakfast comfort. We keep preparations straightforward and traditional, focusing on flavours you know and enjoy.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className="why-section"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading & Large Image */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <p className="why-eyebrow">The Café Serenity Way</p>
              <h2 id="why-heading" className="why-heading">
                Simple food.<br />Made with care.
              </h2>
              <p className="why-subtext mt-4">
                At Café Serenity, we believe everyday food does not need to be complicated. 
                We focus on familiar flavours, thoughtful preparation and choices that suit 
                different ways of eating.
              </p>
            </div>
            
            {/* Visual Editorial Image */}
            <div className="why-image-wrapper mt-8 lg:mt-12 relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/why_choose_prep.png"
                alt="Daily kitchen preparation showcasing fresh ingredients and clean, authentic cooking standards at Café Serenity"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="why-image-overlay absolute inset-0 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Pillars List & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <div className="why-divider mb-8 lg:mb-12" aria-hidden="true" />
            
            <div className="space-y-8 lg:space-y-12">
              {pillars.map((pillar) => (
                <article key={pillar.num} className="why-pillar-card flex gap-6 lg:gap-8 items-start">
                  <span className="why-pillar-num" aria-hidden="true">
                    {pillar.num}
                  </span>
                  <div className="space-y-2">
                    <h3 className="why-pillar-title">
                      {pillar.title}
                    </h3>
                    <p className="why-pillar-desc">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Optional CTA */}
            <div className="mt-12 lg:mt-16">
              <Link
                href="/cafe-menu"
                className="why-cta-link"
                id="why-cta-explore-food"
              >
                Explore Our Food <span className="why-cta-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

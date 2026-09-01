import Link from 'next/link';
import Image from 'next/image';

/**
 * Offerings — Phase 3 rebuild.
 *
 * Section purpose: Immediately help visitors choose between
 * the two Café Serenity food experiences:
 *   1. Healthy Choices  → /healthy-choices  (brand green #6E8064)
 *   2. Café Menu        → /cafe-menu        (warm accent #B86F52)
 *
 * Design direction: editorial two-panel, premium café identity.
 * Not SaaS cards. Not dashboard widgets.
 *
 * Images:
 *   Healthy Choices → slide_salad_bowl.png   (fresh, clean, balanced)
 *   Café Menu       → slide_cafe_coffee.png  (warm, authentic Kerala)
 *
 * This is a React Server Component — no 'use client', no framer-motion.
 * All hover/focus states live in globals.css as .offerings-* classes.
 */
export default function Offerings() {
  return (
    <section
      id="offerings"
      aria-labelledby="offerings-heading"
      className="offerings-section"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="offerings-header">
          <p className="offerings-eyebrow">
            Two ways to enjoy Café Serenity
          </p>
          <h2 id="offerings-heading" className="offerings-heading">
            Choose what feels right today.
          </h2>
          <p className="offerings-subtext">
            Whether you are looking for mindful everyday meals or the café
            favourites you love, there is something made for your table.
          </p>
        </div>

        {/* ── Two experience panels ── */}
        <div className="offerings-grid">

          {/* ── PANEL 1: Healthy Choices ── */}
          <article className="offerings-panel offerings-panel--green" aria-label="Healthy Choices experience">

            {/* Label */}
            <p className="offerings-panel-label offerings-panel-label--green">
              Healthy Choices
            </p>

            {/* Panel heading */}
            <h3 className="offerings-panel-heading">
              Better food for everyday life.
            </h3>

            {/* Description */}
            <p className="offerings-panel-desc">
              Mindful, balanced meals designed around real food and everyday
              enjoyment. Portion-conscious choices that are simple, filling,
              and genuinely good for you.
            </p>

            {/* Food image */}
            <div className="offerings-image-frame" aria-hidden="true">
              <Image
                src="/images/slide_salad_bowl.png"
                alt="Fresh vibrant salad bowl with greens, avocado and wholesome ingredients — Healthy Choices at Café Serenity"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Subtle scrim */}
              <div aria-hidden="true" className="offerings-image-scrim" />
            </div>

            {/* CTA */}
            <Link
              href="/healthy-choices"
              id="offerings-cta-healthy-choices"
              className="offerings-cta offerings-cta--green"
            >
              Explore Healthy Choices
              <svg
                aria-hidden="true"
                className="offerings-cta-arrow"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

          </article>

          {/* ── PANEL 2: Café Menu ── */}
          <article className="offerings-panel offerings-panel--accent" aria-label="Café Menu experience">

            {/* Label */}
            <p className="offerings-panel-label offerings-panel-label--accent">
              Café Menu
            </p>

            {/* Panel heading */}
            <h3 className="offerings-panel-heading">
              The café favourites you love.
            </h3>

            {/* Description */}
            <p className="offerings-panel-desc">
              Authentic South Indian breakfast, Kerala snacks, filter coffee
              and tea — served fresh every morning. Simple everyday café food
              made with warmth and familiarity.
            </p>

            {/* Food image */}
            <div className="offerings-image-frame" aria-hidden="true">
              <Image
                src="/images/slide_cafe_coffee.png"
                alt="Steaming glass of authentic Kerala filter coffee served fresh at Café Serenity, Kakkanad"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
              {/* Subtle scrim */}
              <div aria-hidden="true" className="offerings-image-scrim" />
            </div>

            {/* CTA */}
            <Link
              href="/cafe-menu"
              id="offerings-cta-cafe-menu"
              className="offerings-cta offerings-cta--accent"
            >
              View Café Menu
              <svg
                aria-hidden="true"
                className="offerings-cta-arrow"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

          </article>

        </div>
      </div>
    </section>
  );
}

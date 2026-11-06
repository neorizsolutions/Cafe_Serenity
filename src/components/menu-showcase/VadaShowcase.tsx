'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CONTACT_DETAILS } from '@/constants';
import styles from './VadaShowcase.module.css';

interface VadaShowcaseProps {
  initialVariant?: 'photographic' | 'cutout';
  showVariantToggle?: boolean;
}

export default function VadaShowcase({
  initialVariant = 'photographic',
  showVariantToggle = true,
}: VadaShowcaseProps) {
  const [variant, setVariant] = useState<'photographic' | 'cutout'>(initialVariant);

  return (
    <section className={styles.wrapper} aria-label="Featured Snack Showcase — Medu Vada">
      {/* Ambient background illumination */}
      <div className={styles.ambientAura} aria-hidden="true" />

      {/* Visual variant switcher for design evaluation */}
      {showVariantToggle && (
        <header className={styles.prototypeHeader}>
          <div className={styles.prototypeEyebrow}>
            <span className={styles.prototypeEyebrowDot} aria-hidden="true" />
            <span>Hero-Aligned Menu Prototype</span>
          </div>
          <div className={styles.variantSwitch} role="group" aria-label="Select photographic framing">
            <button
              type="button"
              className={`${styles.switchBtn} ${variant === 'photographic' ? styles.switchBtnActive : ''}`}
              onClick={() => setVariant('photographic')}
              aria-pressed={variant === 'photographic'}
            >
              Cinematic Slate Scene
            </button>
            <button
              type="button"
              className={`${styles.switchBtn} ${variant === 'cutout' ? styles.switchBtnActive : ''}`}
              onClick={() => setVariant('cutout')}
              aria-pressed={variant === 'cutout'}
            >
              Sculpted Food Object
            </button>
          </div>
        </header>
      )}

      {/* ── Spotlight Menu Card ── */}
      <article className={styles.card}>
        {/* Visual Stage */}
        <div className={`${styles.stage} ${variant === 'cutout' ? styles.stageCutout : ''}`}>
          {variant === 'photographic' ? (
            <Image
              src="/images/hero-real-vada.jpg"
              alt="Crispy golden Medu Vada served on dark slate with fresh coconut and tomato chutneys"
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 92vw, 540px"
              className={styles.foodImage}
            />
          ) : (
            <Image
              src="/images/motion-study/hero-circle-vada.png"
              alt="Sculpted golden Medu Vada with transparent background over deep forest pedestal"
              fill
              priority
              sizes="(max-width: 640px) 92vw, 540px"
              className={styles.foodCutoutImage}
            />
          )}

          {/* Depth Scrim */}
          <div className={styles.imageScrim} aria-hidden="true" />

          {/* Floating Top-Left Freshness Badge */}
          <div className={styles.badgeTopLeft}>
            <span className={styles.badgePulse} aria-hidden="true" />
            <span className={styles.badgeLabel}>Crisp &amp; Savoury</span>
          </div>

          {/* Floating Top-Right Ingredient Cue */}
          <div className={styles.badgeTopRight}>
            <span aria-hidden="true">🌿</span>
            <span>Pure Ingredients</span>
          </div>
        </div>

        {/* Card Copy & Pricing */}
        <div className={styles.content}>
          <div className={styles.headerRow}>
            <div className={styles.titleArea}>
              <p className={styles.subtitle}>Traditional Kerala Snack</p>
              <h2 className={styles.title}>
                Medu <span className={styles.titleAccent}>Vada</span>
              </h2>
            </div>

            {/* Price Block */}
            <div className={styles.priceBlock} aria-label="Price: 12 rupees each">
              <span className={styles.price}>₹12</span>
              <span className={styles.unit}>per piece</span>
            </div>
          </div>

          {/* Minimal Sensory Description */}
          <p className={styles.description}>
            Crisped to golden amber, fluffy inside. Paired with fresh stone-ground coconut and roasted tomato chutneys.
          </p>

          {/* Sensory Characteristic Tags */}
          <div className={styles.tags} aria-label="Dish highlights">
            <span className={styles.tag}>Golden Amber Crust</span>
            <span className={styles.tag}>Porous &amp; Fluffy</span>
            <span className={styles.tag}>Ground Chutneys</span>
          </div>

          {/* Footer Availability & Action */}
          <div className={styles.footerRow}>
            <div className={styles.availability}>
              <span className={styles.availabilityDot} aria-hidden="true" />
              <span>Served hot &amp; fresh on order</span>
            </div>

            <a
              href={CONTACT_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionPill}
              aria-label="Order Medu Vada via WhatsApp"
            >
              <span>Ask the Café</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}


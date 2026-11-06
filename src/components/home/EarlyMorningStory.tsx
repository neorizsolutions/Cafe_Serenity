'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import styles from './EarlyMorningStory.module.css';

export default function EarlyMorningStory() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  return (
    <section 
      ref={containerRef}
      className={styles.section} 
      aria-labelledby="morning-story-heading"
    >
      <div className={styles.container}>
        {/* Story Text Column */}
        <div className={styles.storyCol}>
          {/* Primary Editorial Headline */}
          <motion.h2
            id="morning-story-heading"
            className={styles.headline}
            initial={reduced ? undefined : { opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            Your day starts early.
            <br />
            <motion.em
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              So do we.
            </motion.em>
          </motion.h2>

          {/* Supporting Story Narrative */}
          <motion.p
            className={styles.narrative}
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            For the early risers, the first-shift workers, and everyone starting their day before the city fully wakes. At Café Serenity, a comforting breakfast is ready to be part of your morning.
          </motion.p>

          {/* Microcopy Highlight Statement */}
          <motion.div
            className={styles.microDetail}
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.microcopy}>An early start deserves a good breakfast.</p>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            className={styles.ctaWrapper}
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/cafe-menu" className={styles.ctaButton}>
              <span>Explore our menu</span>
              <span className={styles.ctaIcon} aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </div>

        {/* Visual Column: Graceful Breakfast Assembly & Reveal */}
        <div className={styles.visualCol}>
          <motion.div
            className={styles.cutoutStage}
            initial={reduced ? undefined : { opacity: 0, scale: 0.94, y: 32 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* The Master Cutout Composition */}
            <Image
              src="/images/cutouts/breakfast-story-cutout.webp"
              alt="Authentic South Indian breakfast composition: soft steamed idlis, crispy golden medu vada, fresh coconut chutney, and sambar on a banana leaf"
              fill
              quality={92}
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 48vw, 580px"
              className={styles.cutoutImage}
              priority={false}
            />

            {/* Delicate Rising Morning Steam Trails above hot Idlis and Sambar */}
            {!reduced && (
              <motion.svg
                className={styles.breakfastSteam}
                viewBox="0 0 100 100"
                fill="none"
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 0.45, y: -8 } : undefined}
                transition={{ duration: 1.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              >
                {/* Steam wisps above Idlis (left) */}
                <path
                  d="M26 40 C22 34 30 30 26 23 M34 38 C30 31 38 27 34 20 M42 42 C38 35 46 31 42 24"
                  stroke="#FFF2D4"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                {/* Steam wisps above Sambar (right) */}
                <path
                  d="M74 44 C70 38 78 34 74 27 M82 46 C78 40 86 36 82 29"
                  stroke="#FFF2D4"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </motion.svg>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

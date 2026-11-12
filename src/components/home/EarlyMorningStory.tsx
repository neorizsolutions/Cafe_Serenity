'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { easeOut, motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import styles from './EarlyMorningStory.module.css';

const ASSEMBLY = '/images/cutouts/breakfast-assembly';

const pieces = [
  { name: 'back-idli', src: ASSEMBLY + '/generated-idli-back.webp', left: 25, top: 23, width: 30, fromLeft: 4, fromTop: 8, turn: -18, start: 0.08 },
  { name: 'front-idli', src: ASSEMBLY + '/generated-idli-front.webp', left: 10, top: 43, width: 35, fromLeft: 5, fromTop: 61, turn: 16, start: 0.2 },
  { name: 'chutney', src: ASSEMBLY + '/generated-chutney.webp', left: 52, top: 9, width: 26, fromLeft: 74, fromTop: 7, turn: 12, start: 0.32 },
  { name: 'sambar', src: ASSEMBLY + '/generated-sambar.webp', left: 65, top: 34, width: 30, fromLeft: 74, fromTop: 60, turn: -10, start: 0.44 },
  { name: 'vada', src: ASSEMBLY + '/generated-vada.webp', left: 36, top: 49, width: 32, fromLeft: 39, fromTop: 63, turn: -20, start: 0.56 },
];

function BreakfastPiece({
  piece,
  progress,
  reduced,
}: {
  piece: (typeof pieces)[number];
  progress: MotionValue<number>;
  reduced: boolean | null;
}) {
  const range = [piece.start, piece.start + 0.42];
  const opacity = useTransform(progress, [piece.start, piece.start + 0.16], [0, 1], { ease: easeOut });
  const left = useTransform(progress, range, [piece.fromLeft + '%', piece.left + '%'], { ease: easeOut });
  const top = useTransform(progress, range, [piece.fromTop + '%', piece.top + '%'], { ease: easeOut });
  const width = useTransform(progress, range, ['21%', piece.width + '%'], { ease: easeOut });
  const rotate = useTransform(progress, range, [piece.turn, 0], { ease: easeOut });

  return (
    <motion.div
      className={styles.piece}
      style={{
        left: reduced ? piece.left + '%' : left,
        top: reduced ? piece.top + '%' : top,
        width: reduced ? piece.width + '%' : width,
        rotate: reduced ? 0 : rotate,
        opacity: reduced ? 1 : opacity,
      }}
    >
      <Image
        src={piece.src}
        alt=""
        fill
        sizes="(max-width: 600px) 30vw, 180px"
        className={styles.cutoutImage}
      />
    </motion.div>
  );
}

export default function EarlyMorningStory() {
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stage,
    offset: ['start 90%', 'center 35%'],
  });

  return (
    <section className={styles.section} aria-labelledby="morning-story-heading">
      <div className={styles.container}>
        <div className={styles.storyCol}>
          <h2 id="morning-story-heading" className={styles.headline}>
            Your day starts early.
            <br />
            <em>So do we.</em>
          </h2>
          <p className={styles.narrative}>
            For the early risers, the first-shift workers, and everyone starting their day before the city fully wakes. At Café Serenity, a comforting breakfast is ready to be part of your morning.
          </p>
          <div className={styles.microDetail}>
            <p className={styles.microcopy}>An early start deserves a good breakfast.</p>
          </div>
          <div className={styles.ctaWrapper}>
            <Link href="/cafe-menu" className={styles.ctaButton}>
              <span>Explore our menu</span>
              <span className={styles.ctaIcon} aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.visualCol}>
          <div
            ref={stage}
            className={styles.cutoutStage}
            role="img"
            aria-label="Illustration of two idlis, a medu vada, and bowls of sambar and coconut chutney"
          >
            {pieces.map((piece) => (
              <BreakfastPiece key={piece.name} piece={piece} progress={scrollYProgress} reduced={reduced} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

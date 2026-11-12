'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { easeOut, motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import styles from './FeaturedFoodCards.module.css';

const CARDS = [
  {
    kind: 'biriyani',
    title: 'Biriyani',
    dish: 'Malabar Biriyani',
    description: 'Eight regional styles, available in Half and Full portions.',
    href: '/cafe-menu#category-biriyani',
    images: ['/images/menu-hd/malabar-biriyani.webp', '/images/motion-study/biriyani-side-raita.png', '/images/motion-study/biriyani-side-pickle.png'],
  },
  {
    kind: 'savouries',
    title: 'Savouries',
    dish: 'Samosa',
    description: 'Samosas, medu vada and Kerala cutlets for your chaaya break.',
    href: '/cafe-menu#collection-savouries',
    image: '/images/menu-hd/samosa.webp',
  },
  {
    kind: 'sweets',
    title: 'Sweets',
    dish: 'Kesari',
    description: 'Kesari, kozhukatta and ela ada for a sweet finish.',
    href: '/cafe-menu#collection-sweets',
    image: '/images/menu-hd/kesari.webp',
  },
] as const;

const placements = [
  { slot: 'main', x: 0, y: 36, angle: -9, start: 0.04 },
  { slot: 'left', x: -28, y: 22, angle: -18, start: 0.2 },
  { slot: 'right', x: 28, y: 24, angle: 16, start: 0.34 },
] as const;

function DishLayer({
  src,
  placement,
  progress,
}: {
  src: string;
  placement: (typeof placements)[number];
  progress: MotionValue<number>;
}) {
  const range = [placement.start, placement.start + 0.55];
  const opacity = useTransform(progress, [placement.start, placement.start + 0.24], [0, 1]);
  const x = useTransform(progress, range, [placement.x, 0], { ease: easeOut });
  const y = useTransform(progress, range, [placement.y, 0], { ease: easeOut });
  const rotate = useTransform(progress, range, [placement.angle, 0], { ease: easeOut });
  const scale = useTransform(progress, range, [0.78, 1], { ease: easeOut });

  return (
    <motion.div
      className={styles.layer}
      data-slot={placement.slot}
      style={{ opacity, x, y, rotate, scale }}
    >
      <Image src={src} alt="" fill sizes={placement.slot === 'main' ? '(max-width: 640px) 60vw, 290px' : '120px'} />
    </motion.div>
  );
}

function FeaturedFoodCard({ card }: { card: (typeof CARDS)[number] }) {
  const target = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target, offset: ['start 98%', 'center 52%'] });

  const reduced = useReducedMotion();
  const { scrollYProgress: driftProgress } = useScroll({ target, offset: ['start end', 'end start'] });
  const y = useTransform(driftProgress, [0, 1], [10, -8]);

  return (
    <Link ref={target} href={card.href} className={styles.card} data-collection={card.kind}>
      {card.kind === 'biriyani' ? (
        <div className={styles.art} role="img" aria-label={card.dish + ' and accompaniments, illustrated'}>
          {placements.map((placement, index) => (
            <DishLayer key={placement.slot} src={card.images[index]} placement={placement} progress={scrollYProgress} />
          ))}
        </div>
      ) : (
        <div className={styles.art}>
          <motion.div className={styles.singleDish} style={reduced ? undefined : { y }}>
            <Image src={card.image} alt={`Illustration of ${card.dish}`} fill sizes="(max-width: 640px) 80vw, 360px" />
          </motion.div>
        </div>
      )}
      <div className={styles.copy}>
        <h3 className={styles.heading}>{card.title}</h3>
        <p className={styles.description}>{card.description}</p>
        <span className={styles.link}>
          View dishes <span className={styles.linkIcon} aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedFoodCards() {
  return (
    <div className={styles.grid}>
      {CARDS.map((card) => (
        <FeaturedFoodCard key={card.kind} card={card} />
      ))}
    </div>
  );
}

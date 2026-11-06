'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import styles from './FeaturedFoodCards.module.css';

type Collection = 'biriyani' | 'savouries' | 'sweets';

interface FeaturedCardData {
  kind: Collection;
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  href: string;
  action: string;
  image: string;
  imageAlt: string;
  raita?: string;
  pickle?: string;
}

const CARDS: FeaturedCardData[] = [
  {
    kind: 'biriyani',
    eyebrow: 'Signature Feasts',
    title: 'Make it',
    accent: 'Biriyani.',
    subtitle: '8 regional varieties · Half ₹90 / Full ₹150',
    href: '/cafe-menu#category-biriyani',
    action: 'Explore Biriyani',
    image: '/images/menu-hd/malabar-biriyani.webp',
    imageAlt: 'Authentic Malabar Dum Biriyani served in an antique brass handi',
    raita: '/images/motion-study/biriyani-side-raita.png',
    pickle: '/images/motion-study/biriyani-side-pickle.png',
  },
  {
    kind: 'savouries',
    eyebrow: 'Tea-Time Crunch',
    title: 'A little',
    accent: 'crunch.',
    subtitle: 'Samosa, Vada, Cutlet & snacks · ₹12 each',
    href: '/cafe-menu#category-snacks',
    action: 'Explore snacks',
    image: '/images/featured-snacks-trio.png',
    imageAlt: 'Kerala tea-time snack trio: crispy Samosa, golden Medu Vada, and spiced Cutlet',
  },
  {
    kind: 'sweets',
    eyebrow: 'Sweet Moments',
    title: 'Something',
    accent: 'sweet.',
    subtitle: 'Kesari, Kozhukatta, Ela Ada · ₹12 each',
    href: '/cafe-menu#collection-sweets',
    action: 'Explore sweets',
    image: '/images/featured-sweets-trio.png',
    imageAlt: 'Kerala traditional sweet trio: saffron Kesari, banana-leaf wrapped Ela Ada, and steamed Kozhukatta',
  },
];

function FeaturedFoodCard({ card }: { card: FeaturedCardData }) {
  const target = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  // Restrained, subtle scroll-linked parallax
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 0.45, 1], [16, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.96, 1, 1.02]);
  const sideY = useTransform(scrollYProgress, [0, 0.45, 1], [20, 0, -14]);

  return (
    <Link ref={target} href={card.href} className={styles.card} data-collection={card.kind}>
      {/* ── Food Presentation Stage ── */}
      <div className={styles.art} role="img" aria-label={card.imageAlt}>
        {/* Ambient Pedestal Glow matching collection palette */}
        <div className={styles.pedestalGlow} data-collection={card.kind} aria-hidden="true" />

        {/* Singular Hero Food Object */}
        <motion.div
          className={styles.mainFood}
          style={reduced ? undefined : { y, scale }}
        >
          <Image
            src={card.image}
            alt={card.imageAlt}
            fill
            quality={90}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
          />
        </motion.div>

        {/* Balanced side accompaniments for Biriyani only */}
        {card.raita && (
          <motion.div
            className={styles.sideRaita}
            style={reduced ? undefined : { y: sideY }}
            aria-hidden="true"
          >
            <Image src={card.raita} alt="" fill sizes="90px" />
          </motion.div>
        )}
        {card.pickle && (
          <motion.div
            className={styles.sidePickle}
            style={reduced ? undefined : { y: sideY }}
            aria-hidden="true"
          >
            <Image src={card.pickle} alt="" fill sizes="80px" />
          </motion.div>
        )}

        {/* Ambient edge vignette for photographic compositions */}
        {card.kind !== 'biriyani' && (
          <div className={styles.photoVignette} aria-hidden="true" />
        )}
      </div>

      {/* ── Content & Typography ── */}
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{card.eyebrow}</p>
        <h3 className={styles.heading}>
          {card.title}
          <br />
          <em>{card.accent}</em>
        </h3>
        <p className={styles.subtitle}>{card.subtitle}</p>

        <div className={styles.link}>
          <span>{card.action}</span>
          <span className={styles.linkIcon} aria-hidden="true">
            ↗
          </span>
        </div>
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

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { easeOut, motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';
import styles from './FeaturedFoodCards.module.css';

const CARDS = [
  {
    kind: 'biriyani',
    title: 'Biriyani',
    dish: 'Malabar Biriyani',
    description: 'Eight regional biriyani varieties.',
    href: '/cafe-menu#category-biriyani',
    images: ['/images/menu-hd/malabar-biriyani.webp', '/images/motion-study/biriyani-side-raita.png', '/images/motion-study/biriyani-side-pickle.png'],
  },
  {
    kind: 'savouries',
    title: 'Savouries',
    href: '/cafe-menu#collection-savouries',
    dishIds: ['pazham-pori', 'parippu-vada', 'egg-puffs'],
  },
  {
    kind: 'sweets',
    title: 'Sweets',
    href: '/cafe-menu#collection-sweets',
    dishIds: ['ela-ada', 'kozhukatta', 'kesari'],
  },
] as const;

const biriyaniPortions = CAFE_ITEMS.find((item) => item.id === 'malabar-biriyani')?.portions;

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
      <Image src={src} alt="" fill sizes={placement.slot === 'main' ? '(max-width: 760px) 65vw, (max-width: 1280px) 37vw, 420px' : '120px'} />
    </motion.div>
  );
}

function FeaturedFoodCard({ card }: { card: (typeof CARDS)[number] }) {
  const target = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target, offset: ['start 98%', 'center 52%'] });

  return (
    <Link ref={target} href={card.href} className={styles.card} data-collection={card.kind}>
      {card.kind === 'biriyani' ? (
        <div className={styles.art} role="img" aria-label={card.dish + ' and accompaniments, illustrated'}>
          {placements.map((placement, index) => (
            <DishLayer key={placement.slot} src={card.images[index]} placement={placement} progress={scrollYProgress} />
          ))}
        </div>
      ) : null}
      <div className={styles.copy}>
        <h3 className={styles.heading}>{card.title}</h3>
        {card.kind === 'biriyani' && (
          <>
            <p className={styles.description}>{card.description}</p>
            {biriyaniPortions && (
              <dl className={styles.portions}>
                <div><dt>Half</dt><dd>₹{biriyaniPortions.half}</dd></div>
                <div><dt>Full</dt><dd>₹{biriyaniPortions.full}</dd></div>
              </dl>
            )}
          </>
        )}
        {card.kind !== 'biriyani' && (
          <ul className={styles.menuList}>
            {card.dishIds.map((id) => {
              const dish = CAFE_ITEMS.find((item) => item.id === id);
              return dish && (
                <li key={id}>
                  <span className={styles.dishName}>
                    {dish.imageSrc && (
                      <Image src={dish.imageSrc} alt="" width={52} height={44} className={styles.dishImage} />
                    )}
                    {dish.name}
                  </span>
                  <span>₹{dish.price}</span>
                </li>
              );
            })}
          </ul>
        )}
        <span className={styles.link}>
          View {card.title.toLowerCase()} <span className={styles.linkIcon} aria-hidden="true">↗</span>
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

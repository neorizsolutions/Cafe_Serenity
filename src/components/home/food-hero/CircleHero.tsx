'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './CircleHero.module.css';
import { vadaPose } from './vadaMotion';
import TeaPour from './TeaPour';
import BiriyaniBuild from './BiriyaniBuild';
import { FOOD_TOUR_TIMES, FOOD_TOUR_VALUES } from './biriyaniMotion';

const chapters = [
  { name: 'Vada', first: 'A little', last: 'crunch.', line: 'Golden bites. Familiar comforts.', target: .11 },
  { name: 'Chaaya', first: 'A little', last: 'Serenity.', line: 'A warm pause, poured slowly.', target: .58 },
  { name: 'Biriyani', first: 'A little', last: 'hunger.', line: 'Kerala flavours, worth savouring.', target: .98 },
] as const;
function Chapter({ index, progress, active }: { index: number; progress: MotionValue<number>; active: boolean }) {
  const ranges = index === 0 ? [0, .18, .3, 1] : index === 1 ? [0, .26, .4, .58, .72, 1] : [0, .68, .82, 1];
  const y = useTransform(progress, ranges, index === 0 ? [0, 0, -28, -28] : index === 1 ? [28, 28, 0, 0, -28, -28] : [28, 28, 0, 0]);
  return <motion.div className={styles.chapter} style={{ y, opacity: active ? 1 : 0, visibility: active ? 'visible' : 'hidden' }} aria-hidden={!active}>
    <h2>{chapters[index].first}<br /><em>{chapters[index].last}</em></h2>
    <p className={styles.sceneLine}>{chapters[index].line}</p>
  </motion.div>;
}

function DispersingVada({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const x = useTransform(progress, p => `${vadaPose(p, index).x}%`);
  const y = useTransform(progress, p => `${vadaPose(p, index).y}%`);
  const rotate = useTransform(progress, p => vadaPose(p, index).rotate);
  const scale = useTransform(progress, p => vadaPose(p, index).scale);
  const opacity = useTransform(progress, p => vadaPose(p, index).opacity);
  return <motion.div data-vada={index} className={`${styles.food} ${styles.vada}`} style={{ x, y, rotate, scale, opacity, zIndex: index === 2 ? 3 : index === 0 ? 2 : 1 }}>
    <Image src="/images/motion-study/hero-circle-vada.png" alt="" width={1254} height={1254} sizes="(max-width: 700px) 38vw, 24vw" loading="eager" />
  </motion.div>;
}
export default function CircleHero({ forceReducedMotion = false }: { forceReducedMotion?: boolean }) {
  const region = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reduced = forceReducedMotion || Boolean(prefersReducedMotion);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: region, offset: ['start start', 'end end'] });
  // The same food beats are scrubbed directly by scroll position: no timer or inertia.
  const scrollProgress = useTransform(scrollYProgress, FOOD_TOUR_TIMES, FOOD_TOUR_VALUES);
  const still = useMotionValue(.11);
  const progress = reduced ? still : scrollProgress;
  useMotionValueEvent(progress, 'change', value => {
    setActive(value < .32 ? 0 : value < .74 ? 1 : 2);
  });
  const backgroundColor = useTransform(progress, [0, .21, .43, .62, .84, 1], ['#294b3b', '#294b3b', '#573426', '#573426', '#ac3f25', '#ac3f25']);
  function goTo(index: number) {
    const next = (index + 3) % 3;
    still.set(chapters[next].target);
    setActive(next);
  }
  return <motion.div className={styles.preview} style={{ backgroundColor }}>
    <section data-food-hero ref={region} className={`${styles.journey} ${reduced ? styles.reduced : ''}`} aria-labelledby="hero-heading">
      <motion.div className={styles.stage} style={{ backgroundColor }}>
        <h1 id="hero-heading" className={styles.accessibleNote}>Café Serenity — Biriyani and Kerala snacks in Kakkanad, Kochi</h1>
        <div className={styles.copy}><div className={styles.chapters}>{chapters.map((_, index) => <Chapter key={index} index={index} progress={progress} active={active === index} />)}</div></div>
        <div className={styles.visual} aria-hidden="true">
          {[0, 1, 2].map(index => <DispersingVada key={index} progress={progress} index={index} />)}
          <TeaPour progress={progress} reduced={reduced} />
          <BiriyaniBuild progress={progress} reduced={reduced} />
        </div>
        {reduced && <nav className={styles.controls} aria-label="Food scenes">
          <button type="button" aria-label="Previous food scene" onClick={() => goTo(active - 1)}><ChevronLeft size={18} /></button>
          <button type="button" aria-label="Next food scene" onClick={() => goTo(active + 1)}><ChevronRight size={18} /></button>
        </nav>}
        <p className={styles.accessibleNote}>AI-generated food illustrations, not actual Café Serenity product photographs. Scene: {chapters[active].name}.</p>
      </motion.div>
    </section>
  </motion.div>;
}

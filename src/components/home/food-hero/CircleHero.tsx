'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react';
import styles from './CircleHero.module.css';
import { vadaPose } from './vadaMotion';
import TeaPour from './TeaPour';
import BiriyaniBuild from './BiriyaniBuild';
import { BIRIYANI_BUILD_DURATION, BIRIYANI_BUILD_TIMES, BIRIYANI_BUILD_VALUES, FOOD_TOUR_DURATION, FOOD_TOUR_TIMES, FOOD_TOUR_VALUES } from './biriyaniMotion';

const chapters = [
  { name: 'Vada', first: 'A little', last: 'crunch.', line: 'Golden bites. Familiar comforts.', target: .11 },
  { name: 'Chaaya', first: 'A little', last: 'Serenity.', line: 'A warm pause, poured slowly.', target: .58 },
  { name: 'Biriyani', first: 'A little', last: 'hunger.', line: 'Kerala flavours, worth savouring.', target: .98 },
] as const;
function Chapter({ index, progress, active }: { index: number; progress: MotionValue<number>; active: boolean }) {
  const ranges = index === 0 ? [0, .18, .3, 1] : index === 1 ? [0, .26, .4, .58, .72, 1] : [0, .68, .82, 1];
  const opacity = useTransform(progress, ranges, index === 0 ? [1, 1, 0, 0] : index === 1 ? [0, 0, 1, 1, 0, 0] : [0, 0, 1, 1]);
  const y = useTransform(progress, ranges, index === 0 ? [0, 0, -28, -28] : index === 1 ? [28, 28, 0, 0, -28, -28] : [28, 28, 0, 0]);
  return <motion.div className={styles.chapter} style={{ opacity, y }} aria-hidden={!active}>
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
  const driver = useMotionValue(0);
  const tour = useRef<ReturnType<typeof animate> | null>(null);
  const manual = useRef(false);
  const scrollAnchor = useRef({ scroll: 0, progress: .11 });
  const [playing, setPlaying] = useState(true);
  const [finished, setFinished] = useState(false);
  const smooth = useSpring(driver, { stiffness: 85, damping: 30, mass: .65, restDelta: .0001 });
  const still = useMotionValue(.11);
  const progress = reduced ? still : smooth;
  useMotionValueEvent(scrollYProgress, 'change', value => {
    if (manual.current && !reduced) driver.set(Math.min(1, Math.max(0, scrollAnchor.current.progress + value - scrollAnchor.current.scroll)));
  });
  useEffect(() => {
    if (reduced) return;
    const control = animate(driver, FOOD_TOUR_VALUES, {
      duration: FOOD_TOUR_DURATION, times: FOOD_TOUR_TIMES, ease: 'linear',
      onComplete: () => { setPlaying(false); setFinished(true); },
    });
    tour.current = control;
    const takeOver = () => {
      if (manual.current) return;
      scrollAnchor.current = { scroll: scrollYProgress.get(), progress: driver.get() };
      control.stop(); tour.current?.stop(); manual.current = true;
      setPlaying(false); setFinished(false);
    };
    const keyTakeOver = (event: KeyboardEvent) => {
      const target = event.target;
      const interactive = target instanceof HTMLElement && target.closest('a,button,input,textarea,select,[contenteditable=true]');
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key) && !interactive) takeOver();
    };
    window.addEventListener('wheel', takeOver, { passive: true });
    window.addEventListener('touchmove', takeOver, { passive: true });
    window.addEventListener('keydown', keyTakeOver);
    return () => {
      control.stop(); tour.current?.stop();
      window.removeEventListener('wheel', takeOver);
      window.removeEventListener('touchmove', takeOver);
      window.removeEventListener('keydown', keyTakeOver);
    };
  }, [driver, reduced, scrollYProgress]);
  function toggleTour() {
    if (playing) { tour.current?.pause(); setPlaying(false); return; }
    if (!manual.current && !finished && tour.current) { tour.current.play(); setPlaying(true); return; }
    manual.current = false; setFinished(false); setPlaying(true);
    driver.jump(.11); smooth.jump(.11);
    tour.current?.stop();
    tour.current = animate(driver, FOOD_TOUR_VALUES, {
      duration: FOOD_TOUR_DURATION, times: FOOD_TOUR_TIMES, ease: 'linear',
      onComplete: () => { setPlaying(false); setFinished(true); },
    });
  }
  useMotionValueEvent(smooth, 'change', value => {
    if (!reduced) setActive(value < .32 ? 0 : value < .74 ? 1 : 2);
  });
  const backgroundColor = useTransform(progress, [0, .21, .43, .62, .84, 1], ['#294b3b', '#294b3b', '#573426', '#573426', '#ac3f25', '#ac3f25']);
  function goTo(index: number) {
    const next = (index + 3) % 3;
    if (reduced) { still.set(chapters[next].target); setActive(next); return; }
    tour.current?.stop(); manual.current = false; setPlaying(next !== 0); setFinished(next === 0);
    if (next === 0) { driver.jump(.11); smooth.jump(.11); }
    else if (next === 1) {
      driver.jump(.27); smooth.jump(.27);
      tour.current = animate(driver, [.27, .38, .56, .58], { duration: 6, times: [0, .18, .8, 1], ease: 'easeInOut', onComplete: () => { setPlaying(false); setFinished(true); } });
    } else {
      driver.jump(.65); smooth.jump(.65);
      tour.current = animate(driver, BIRIYANI_BUILD_VALUES, { duration: BIRIYANI_BUILD_DURATION, times: BIRIYANI_BUILD_TIMES, ease: 'linear', onComplete: () => { setPlaying(false); setFinished(true); } });
    }
    const section = region.current;
    if (!section) return;
    const start = section.getBoundingClientRect().top + window.scrollY;
    if (section.getBoundingClientRect().bottom < 0) window.scrollTo({ top: start, behavior: 'smooth' });
  }
  return <div className={styles.preview}>
    <section data-food-hero ref={region} className={`${styles.journey} ${reduced ? styles.reduced : ''}`} aria-labelledby="hero-heading">
      <motion.div className={styles.stage} style={{ backgroundColor }}>
        <h1 id="hero-heading" className={styles.accessibleNote}>Café Serenity — Biriyani and Kerala snacks in Kakkanad, Kochi</h1>
        <div className={styles.copy}><div className={styles.chapters}>{chapters.map((_, index) => <Chapter key={index} index={index} progress={progress} active={active === index} />)}</div></div>
        <div className={styles.visual} aria-hidden="true">
          {[0, 1, 2].map(index => <DispersingVada key={index} progress={progress} index={index} />)}
          <TeaPour progress={progress} reduced={reduced} />
          <BiriyaniBuild progress={progress} reduced={reduced} />
        </div>
        <nav className={styles.controls} aria-label="Animation controls">
          <button type="button" aria-label="Previous food scene" onClick={() => goTo(active - 1)}><ChevronLeft size={18} /></button>
          {!reduced && <button type="button" onClick={toggleTour} aria-label={playing ? 'Pause food animation' : finished ? 'Replay food animation' : 'Play food animation'}>{playing ? <Pause size={15} /> : finished ? <RotateCcw size={15} /> : <Play size={15} />}</button>}
          <button type="button" aria-label="Next food scene" onClick={() => goTo(active + 1)}><ChevronRight size={18} /></button>
        </nav>
        <p className={styles.accessibleNote}>AI-generated food illustrations, not actual Café Serenity product photographs. Scene: {chapters[active].name}.</p>
      </motion.div>
    </section>
  </div>;
}
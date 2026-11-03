'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';
import styles from './HeroSlideshow.module.css';

const products = CAFE_ITEMS.filter(item => item.imageSrc);
// A stable shuffled opening sequence avoids hydration differences and category blocks.
const initialOrder = [...products].sort((a, b) => {
  const hash = (id: string) => [...id].reduce((value, char) => (value * 31 + char.charCodeAt(0)) >>> 0, 73);
  return hash(a.id) - hash(b.id);
});
function shuffled() {
  const result = [...products];
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
  return result;
}

export default function HeroSlideshow() {
  const [slides, setSlides] = useState({ order: initialOrder, index: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const region = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    const initial = window.setTimeout(update, 0);
    preference.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 });
    if (region.current) observer.observe(region.current);
    return () => { clearTimeout(initial); preference.removeEventListener('change', update); observer.disconnect(); };
  }, []);
  useEffect(() => {
    if (reducedMotion || !visible) return;
    const timer = window.setInterval(() => setSlides(current => current.index === current.order.length - 1 ? { order: shuffled(), index: 0 } : { ...current, index: current.index + 1 }), 4500);
    return () => clearInterval(timer);
  }, [reducedMotion, visible]);
  const current = slides.order[slides.index];
  const previous = slides.order[(slides.index - 1 + slides.order.length) % slides.order.length];
  const next = slides.order[(slides.index + 1) % slides.order.length];
  const source = (item: typeof current) => item.portionImages?.full ?? item.imageSrc!;
  return <div ref={region} className={styles.stage} aria-label="Our menu favourites">
    <div className={styles.halo} aria-hidden="true" />
    <div key={'left-'+previous.id} className={styles.left} aria-hidden="true"><Image src={source(previous)} alt="" fill sizes="(max-width:767px) 36vw, 24vw" className={styles.food} loading="eager" /></div>
    <div key={current.id} className={styles.centre}><Image src={source(current)} alt={current.name} fill sizes="(max-width:767px) 60vw, 32vw" className={styles.food} loading="eager" /></div>
    <div key={'right-'+next.id} className={styles.right} aria-hidden="true"><Image src={source(next)} alt="" fill sizes="(max-width:767px) 36vw, 24vw" className={styles.food} loading="eager" /></div>
  </div>;
}

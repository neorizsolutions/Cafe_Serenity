'use client';

import { useEffect, useRef } from 'react';
import { createAlphaVideoRenderer } from '@/utils/alpha-video';
import styles from './MenuCharacter.module.css';

export default function MenuCharacter({ kind }: { kind: 'vada' | 'biriyani' }) {
  const region = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = region.current, surface = canvas.current, player = video.current;
    if (!container || !surface || !player) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let renderer = createAlphaVideoRenderer(surface, player);
    let frame = 0, target = 0, active = false, loaded = false;
    const draw = () => renderer?.draw();
    const seek = () => {
      frame = 0;
      if (!Number.isFinite(player.duration) || player.seeking) return;
      if (Math.abs(player.currentTime - target) > 1 / 30) player.currentTime = target;
    };
    const update = () => {
      if (!active || preference.matches) return;
      if (!loaded) { loaded = true; player.preload = 'auto'; player.load(); }
      const box = container.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (innerHeight * .9 - box.top) / (innerHeight * .7 + box.height * .25)));
      target = progress * Math.max(0, player.duration - .05);
      if (!frame) frame = requestAnimationFrame(seek);
    };
    const ready = () => { update(); draw(); };
    const settled = () => { draw(); if (!frame && !preference.matches) frame = requestAnimationFrame(seek); };
    const changed = () => {
      if (preference.matches) { target = 0; if (loaded && player.readyState >= 1) player.currentTime = 0; }
      else update();
    };
    const lost = (event: Event) => { event.preventDefault(); delete surface.dataset.ready; };
    const restored = () => { renderer?.dispose(); renderer = createAlphaVideoRenderer(surface, player); draw(); };
    const failed = () => { delete surface.dataset.ready; };
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; if (active) update(); }, { rootMargin: '160px' });
    observer.observe(container);
    player.addEventListener('loadeddata', ready);
    player.addEventListener('loadedmetadata', update);
    player.addEventListener('seeked', settled);
    player.addEventListener('error', failed);
    surface.addEventListener('webglcontextlost', lost);
    surface.addEventListener('webglcontextrestored', restored);
    preference.addEventListener('change', changed);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); renderer?.dispose();
      player.removeEventListener('loadeddata', ready);
      player.removeEventListener('loadedmetadata', update);
      player.removeEventListener('seeked', settled);
      player.removeEventListener('error', failed);
      surface.removeEventListener('webglcontextlost', lost);
      surface.removeEventListener('webglcontextrestored', restored);
      preference.removeEventListener('change', changed);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [kind]);

  return <div ref={region} className={styles.scene} style={{ backgroundImage: `url('/videos/serenity-${kind}-character.webp')` }}>
    <canvas ref={canvas} className={styles.canvas} width={800} height={720} role="img" aria-label={kind === 'vada' ? 'Our animated tea master picks up and tastes a Vada.' : 'Our animated tea master tastes chicken from a plate of Biriyani.'} />
    <video ref={video} className={styles.source} muted playsInline preload="none" aria-hidden="true" tabIndex={-1}>
      <source src={`/videos/serenity-${kind}-character.mp4`} type="video/mp4" />
    </video>
  </div>;
}

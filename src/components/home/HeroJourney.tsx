'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { createAlphaVideoRenderer } from '@/utils/alpha-video';
import styles from './Hero.module.css';

export default function HeroJourney({ children }: { children: ReactNode }) {
  const section = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const region = section.current, stage = panel.current, player = video.current, surface = canvas.current;
    if (!region || !stage || !player || !surface) return;
    let renderer = createAlphaVideoRenderer(surface, player);
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, target = 0, visible = true;
    const draw = () => renderer?.draw();
    const seek = () => {
      frame = 0;
      if (!Number.isFinite(player.duration) || player.seeking) return;
      const difference = target - player.currentTime;
      if (Math.abs(difference) > 1 / 48) {
        // Ease toward the scroll position instead of jumping on each wheel event.
        player.currentTime = preference.matches || Math.abs(difference) < .08
          ? target
          : player.currentTime + difference * .45;
      }
    };
    const update = () => {
      if (!visible) return;
      const top = parseFloat(getComputedStyle(stage).top) || 0;
      const travel = Math.max(1, region.offsetHeight - stage.offsetHeight);
      const progress = preference.matches ? 0 : Math.max(0, Math.min(1, (top - region.getBoundingClientRect().top) / travel));
      target = progress * Math.max(0, player.duration - .05);
      if (!frame) frame = requestAnimationFrame(seek);
    };
    const settled = () => { draw(); if (!frame) frame = requestAnimationFrame(seek); };
    const ready = () => { update(); draw(); };
    const lost = (event: Event) => { event.preventDefault(); delete surface.dataset.ready; };
    const restored = () => { renderer?.dispose(); renderer = createAlphaVideoRenderer(surface, player); draw(); };
    const failed = () => { delete surface.dataset.ready; };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) update(); });
    observer.observe(region);
    const resize = new ResizeObserver(update);
    resize.observe(stage);
    player.addEventListener('loadeddata', ready);
    player.addEventListener('loadedmetadata', update);
    player.addEventListener('seeked', settled);
    player.addEventListener('error', failed);
    surface.addEventListener('webglcontextlost', lost);
    surface.addEventListener('webglcontextrestored', restored);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    preference.addEventListener('change', update);
    ready();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect(); resize.disconnect(); renderer?.dispose();
      player.removeEventListener('loadeddata', ready);
      player.removeEventListener('loadedmetadata', update);
      player.removeEventListener('seeked', settled);
      player.removeEventListener('error', failed);
      surface.removeEventListener('webglcontextlost', lost);
      surface.removeEventListener('webglcontextrestored', restored);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      preference.removeEventListener('change', update);
    };
  }, []);

  return <section ref={section} className={styles.hero} aria-labelledby="hero-heading">
    <div ref={panel} className={styles.panel}>
      <div className={styles.inner}>
        {children}
        <div className={styles.character}>
          <div className={styles.scene}>
            <canvas ref={canvas} className={styles.canvas} width={800} height={720} role="img" aria-label="Our animated tea master pours chaaya as you scroll." />
            <video ref={video} className={styles.source} muted playsInline preload="auto" width={1600} height={720} aria-hidden="true" tabIndex={-1}>
              <source src="/videos/serenity-tea-character.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

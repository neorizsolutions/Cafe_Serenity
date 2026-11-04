'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export interface HeroScene {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
}

export const HERO_SCENES: HeroScene[] = [
  {
    id: 'chaaya',
    number: '01',
    badge: 'Morning Ritual · Freshly Brewed',
    title: 'Poured From Height',
    subtitle: 'Steaming Kerala spiced tea with rich velvety froth and crushed cardamom.',
    src: '/images/hero-real-tea.jpg',
    alt: 'Real photography of authentic Kerala spiced tea poured with steam and froth into a traditional glass',
  },
  {
    id: 'vada',
    number: '02',
    badge: 'Everyday Snack · Crisped Golden',
    title: 'Crispy Medu Vada',
    subtitle: 'Crisped to golden amber, fluffy inside, paired with fresh stone-ground chutneys.',
    src: '/images/hero-real-vada.jpg',
    alt: 'Real photography of crispy golden Medu Vada served on rustic slate with fresh chutneys',
  },
  {
    id: 'biriyani',
    number: '03',
    badge: 'Signature Feasts · Slow Dum',
    title: 'Authentic Dum Biriyani',
    subtitle: 'Fragrant saffron basmati layered with tender spices and golden caramelised onions.',
    src: '/images/hero-real-biriyani.jpg',
    alt: 'Real photography of steaming authentic Dum Biriyani served in an antique brass handi',
  },
];

interface HeroJourneyProps {
  children?: ReactNode;
}

export default function HeroJourney({ children }: HeroJourneyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Keep image elements in ref to avoid reload on renders
  const loadedImagesRef = useRef<HTMLImageElement[]>([]);
  const animFrameRef = useRef<number>(0);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);

  // Preload real images
  useEffect(() => {
    let active = true;
    const loaded: HTMLImageElement[] = [];
    let count = 0;

    HERO_SCENES.forEach((scene, index) => {
      const img = new window.Image();
      img.src = scene.src;
      img.onload = () => {
        if (!active) return;
        loaded[index] = img;
        count += 1;
        if (count === HERO_SCENES.length) {
          loadedImagesRef.current = loaded;
          setImagesReady(true);
        }
      };
      img.onerror = () => {
        if (!active) return;
        loaded[index] = img;
        count += 1;
        if (count === HERO_SCENES.length) {
          loadedImagesRef.current = loaded;
          setImagesReady(true);
        }
      };
    });

    return () => {
      active = false;
    };
  }, []);

  // Scroll listener and canvas animation loop
  useEffect(() => {
    const region = sectionRef.current;
    const stage = panelRef.current;
    const canvas = canvasRef.current;
    if (!region || !stage || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isVisible = true;

    // High-DPI canvas sizing
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    };

    resizeCanvas();

    const drawFrame = (p: number) => {
      const images = loadedImagesRef.current;
      if (!ctx || images.length < HERO_SCENES.length) return;

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw === 0 || ch === 0) return;

      ctx.clearRect(0, 0, cw, ch);

      // Clamp progress between 0 and 1
      const clamped = Math.max(0, Math.min(1, p));

      // Calculate which images to blend
      // 3 scenes = 2 transitions:
      // Transition 1: around 0.35 - 0.50 (Scene 0 -> Scene 1)
      // Transition 2: around 0.70 - 0.85 (Scene 1 -> Scene 2)
      let fromIdx = 0;
      let toIdx = 0;
      let blend = 0; // 0 to 1

      if (clamped < 0.35) {
        fromIdx = 0;
        toIdx = 0;
        blend = 0;
      } else if (clamped < 0.52) {
        fromIdx = 0;
        toIdx = 1;
        const t = (clamped - 0.35) / (0.52 - 0.35);
        blend = t * t * (3 - 2 * t); // smoothstep
      } else if (clamped < 0.72) {
        fromIdx = 1;
        toIdx = 1;
        blend = 0;
      } else if (clamped < 0.88) {
        fromIdx = 1;
        toIdx = 2;
        const t = (clamped - 0.72) / (0.88 - 0.72);
        blend = t * t * (3 - 2 * t); // smoothstep
      } else {
        fromIdx = 2;
        toIdx = 2;
        blend = 0;
      }

      // Draw helper for a single image with cover sizing and subtle zoom
      const drawCover = (img: HTMLImageElement, alpha: number, zoomScale: number) => {
        if (!img || !img.complete || img.naturalWidth === 0 || alpha <= 0.005) return;
        ctx.save();
        ctx.globalAlpha = Math.min(1, Math.max(0, alpha));

        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const scale = Math.max(cw / iw, ch / ih) * zoomScale;
        const sw = iw * scale;
        const sh = ih * scale;
        const dx = (cw - sw) / 2;
        const dy = (ch - sh) / 2;

        ctx.drawImage(img, dx, dy, sw, sh);
        ctx.restore();
      };

      // Subtle Ken-Burns drift based on scroll
      const zoomBase = 1.0 + clamped * 0.04;
      const zoomNext = 1.0 + (1 - blend) * 0.02;

      if (fromIdx === toIdx || blend <= 0.001) {
        drawCover(images[fromIdx], 1.0, zoomBase);
      } else {
        // Crossfade
        drawCover(images[fromIdx], 1.0 - blend, zoomBase);
        drawCover(images[toIdx], blend, zoomNext);
      }

      // Cinematic Vignette overlay for depth and label contrast
      const grad = ctx.createLinearGradient(0, ch * 0.45, 0, ch);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(0.7, 'rgba(15, 14, 12, 0.45)');
      grad.addColorStop(1, 'rgba(10, 9, 8, 0.85)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, cw, ch);

      // Top ambient corner shadow
      const topGrad = ctx.createLinearGradient(0, 0, 0, ch * 0.35);
      topGrad.addColorStop(0, 'rgba(10, 9, 8, 0.4)');
      topGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, cw, ch);
    };

    // Smooth animation tick
    const tick = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.001) {
        currentProgressRef.current += diff * 0.14;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      drawFrame(currentProgressRef.current);

      // Determine active scene index for UI labels
      const p = currentProgressRef.current;
      const nextIdx = p < 0.44 ? 0 : p < 0.80 ? 1 : 2;
      setActiveIndex(nextIdx);
      setScrollProgress(p);

      animFrameRef.current = requestAnimationFrame(tick);
    };

    const updateScroll = () => {
      if (!isVisible) return;
      const top = parseFloat(getComputedStyle(stage).top) || 0;
      const travel = Math.max(1, region.offsetHeight - stage.offsetHeight);
      const computed = preference.matches
        ? 0
        : Math.max(0, Math.min(1, (top - region.getBoundingClientRect().top) / travel));

      targetProgressRef.current = computed;
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) updateScroll();
    });
    observer.observe(region);

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      updateScroll();
    });
    resizeObserver.observe(stage);

    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', () => {
      resizeCanvas();
      updateScroll();
    });

    // Start loop
    updateScroll();
    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, [imagesReady]);

  // Jump to specific scene when clicking milestone pill
  const handleJumpToScene = (idx: number) => {
    const region = sectionRef.current;
    const stage = panelRef.current;
    if (!region || !stage) return;

    const targets = [0.0, 0.58, 0.98];
    const targetP = targets[idx] ?? 0;
    const topOffset = parseFloat(getComputedStyle(stage).top) || 80;
    const travel = Math.max(1, region.offsetHeight - stage.offsetHeight);

    const absoluteTop = region.getBoundingClientRect().top + window.scrollY;
    const scrollDest = absoluteTop - topOffset + travel * targetP;

    window.scrollTo({
      top: scrollDest,
      behavior: 'smooth',
    });
  };

  const activeScene = HERO_SCENES[activeIndex] || HERO_SCENES[0];

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-heading">
      <div ref={panelRef} className={styles.panel}>
        <div className={styles.inner}>
          {/* Left Column: Text & Intro */}
          <div className={styles.introCol}>{children}</div>

          {/* Right Column: Real Image Showcase Animation */}
          <div className={styles.visualCol}>
            <div className={styles.sceneContainer}>
              {/* Warm decorative background aura */}
              <div className={styles.glowAura} aria-hidden="true" />

              {/* Main Image Stage Frame */}
              <div className={styles.imageFrame}>
                {/* Fallback image for immediate initial paint before canvas initializes */}
                <Image
                  src={HERO_SCENES[0].src}
                  alt={HERO_SCENES[0].alt}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 680px"
                  className={styles.staticFallback}
                  style={{ opacity: imagesReady ? 0 : 1 }}
                />

                {/* Real photo interactive canvas */}
                <canvas
                  ref={canvasRef}
                  className={styles.journeyCanvas}
                  style={{ opacity: imagesReady ? 1 : 0 }}
                  role="img"
                  aria-label={`${activeScene.badge}: ${activeScene.title}`}
                />

                {/* Floating Top Badge */}
                <div className={styles.frameBadge}>
                  <span className={styles.badgePulse} aria-hidden="true" />
                  <span className={styles.badgeText}>{activeScene.badge}</span>
                </div>

                {/* Bottom Story Scrim with details of active real food dish */}
                <div className={styles.frameStory}>
                  <div className={styles.storyContent}>
                    <p className={styles.storyNumber}>
                      {activeScene.number} <span>/ 03</span>
                    </p>
                    <h2 className={styles.storyTitle}>{activeScene.title}</h2>
                    <p className={styles.storySubtitle}>{activeScene.subtitle}</p>
                  </div>

                  {/* Scene Navigation Milestones */}
                  <div className={styles.sceneTabs} role="tablist" aria-label="Select hero dish scene">
                    {HERO_SCENES.map((scene, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <button
                          key={scene.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => handleJumpToScene(idx)}
                          className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                          title={`Jump to ${scene.title}`}
                        >
                          <span className={styles.tabNumber}>{scene.number}</span>
                          <span className={styles.tabLabel}>{scene.id}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle Interactive Progress Bar */}
                <div className={styles.progressTrack} aria-hidden="true">
                  <div
                    className={styles.progressBar}
                    style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                  />
                </div>
              </div>

              {/* Scroll prompt hint on initial view */}
              <div
                className={styles.scrollHint}
                style={{ opacity: scrollProgress < 0.15 ? 1 : 0 }}
                aria-hidden="true"
              >
                <span>Scroll to explore flavours</span>
                <span className={styles.scrollChevron}>↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

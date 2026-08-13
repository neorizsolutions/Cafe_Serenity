'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { cn } from '@/lib/utils';

interface MacroStats {
  protein: string;
  carbs: string;
  fat: string;
}

interface FloatCard {
  text: string;
  sub: string;
  position: string;
  delay: number;
  iconType: 'fiber' | 'oil' | 'protein' | 'organic' | 'kcal' | 'fresh' | 'sugar';
}

interface Slide {
  id: string;
  title: string;
  image: string;
  alt: string;
  kcal: string;
  tag: string;
  subTag: string;
  macros: MacroStats;
  bgColor: string;
  floatCards: FloatCard[];
}

const SLIDES: Slide[] = [
  {
    id: 'cafe-breakfast',
    title: 'Morning Favourites',
    image: '/images/slide_cafe_breakfast.png',
    alt: 'Traditional early-morning breakfast with soft steaming idli and crispy vada',
    kcal: 'Served Warm Daily',
    tag: 'Breakfast / Tiffin',
    subTag: 'Served from 5:00 AM',
    macros: { protein: 'Idli', carbs: 'Vada', fat: 'Sambar' },
    bgColor: 'from-brand-gold/15 to-orange-500/5',
    floatCards: [
      { text: 'Fresh Morning Food', sub: 'Served Warm Daily', position: 'top-2 right-2 md:-top-4 md:-right-8', delay: 0.2, iconType: 'fresh' },
      { text: 'Affordable Pricing', sub: 'Kakkanad Local Spot', position: '-bottom-6 -left-6', delay: 1.4, iconType: 'organic' }
    ]
  },
  {
    id: 'cafe-coffee',
    title: 'Filter Coffee & Tea',
    image: '/images/slide_cafe_coffee.png',
    alt: 'Steaming glass tumbler of authentic filter coffee and tea',
    kcal: 'Brewed Fresh',
    tag: 'Tea & Coffee',
    subTag: 'Morning Energy Boost',
    macros: { protein: 'Coffee', carbs: 'Tea', fat: 'Brewed' },
    bgColor: 'from-brand-gold/20 to-brand-gold/5',
    floatCards: [
      { text: 'Steaming Hot Tea', sub: 'Everyday Comfort', position: 'top-2 right-2 md:-top-4 md:-right-8', delay: 0.6, iconType: 'fresh' },
      { text: 'Filter Coffee', sub: 'Rich & Authentic', position: '-bottom-6 -left-6', delay: 1.9, iconType: 'organic' }
    ]
  },
  {
    id: 'salad-bowl',
    title: 'Fresh Salad Bowl',
    image: '/images/slide_salad_bowl.png',
    alt: 'Vibrant gourmet fresh salad bowl filled with raw nutrients, avocado, and leafy greens',
    kcal: '320 kcal',
    tag: 'Rich in Fiber',
    subTag: 'Gut Friendly',
    macros: { protein: '8g', carbs: '22g', fat: '12g' },
    bgColor: 'from-brand-gold/15 to-brand-gold/5',
    floatCards: [
      { text: 'Rich in Fiber', sub: 'Gut Friendly', position: 'top-2 right-2 md:-top-4 md:-right-8', delay: 0, iconType: 'fiber' },
      { text: 'Low Oil', sub: 'Heart Healthy', position: '-bottom-6 -left-6', delay: 1.5, iconType: 'oil' }
    ]
  },
  {
    id: 'high-protein',
    title: 'High Protein Meal',
    image: '/images/slide_high_protein.png',
    alt: 'High protein meal box featuring grilled chicken breast, quinoa, and steamed broccoli',
    kcal: '480 kcal',
    tag: 'High Protein',
    subTag: 'Muscle Recovery',
    macros: { protein: '42g', carbs: '35g', fat: '10g' },
    bgColor: 'from-brand-gold/20 to-brand-gold/5',
    floatCards: [
      { text: 'High Protein', sub: '42g Protein', position: 'top-2 right-2 md:-top-4 md:-right-8', delay: 0.5, iconType: 'protein' },
      { text: 'Dietitian Approved', sub: 'Verified Macros', position: '-bottom-6 -left-6', delay: 2, iconType: 'organic' }
    ]
  },
  {
    id: 'balanced-meal',
    title: 'Balanced Meal',
    image: '/images/slide_balanced_meal.png',
    alt: 'Balanced nutrition meal box with roasted salmon, brown rice, and asparagus',
    kcal: '450 kcal',
    tag: 'Balanced Nutrition',
    subTag: 'Everyday Energy',
    macros: { protein: '32g', carbs: '40g', fat: '14g' },
    bgColor: 'from-brand-gold/20 to-brand-gold/5',
    floatCards: [
      { text: 'Balanced Nutrition', sub: 'Calorie Mapped', position: 'top-2 right-2 md:-top-4 md:-right-8', delay: 0.8, iconType: 'kcal' },
      { text: 'Healthy Fats', sub: 'Cold-Pressed Oils', position: '-bottom-6 -left-6', delay: 2.3, iconType: 'oil' }
    ]
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Check system reduced motion preferences and manage page visibility state
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', motionListener);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else if (!isHovered) {
        setIsPaused(false);
      }
    };

    const handleWindowBlur = () => setIsPaused(true);
    const handleWindowFocus = () => {
      if (!isHovered) setIsPaused(false);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      mediaQuery.removeEventListener('change', motionListener);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [isHovered]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
  };

  // Keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      e.preventDefault();
    }
  };

  // Touch Swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  // Auto transition timer logic
  useEffect(() => {
    if (isPaused || reducedMotion) return;

    const intervalTime = 30;
    const totalDuration = 3000;
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused, reducedMotion]);

  // Floating animation configuration
  const floatAnimation = (delay: number, prefersReduced: boolean): any => {
    if (prefersReduced) return {};
    return {
      animate: {
        y: [0, -8, 0],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }
    };
  };

  const renderIcon = (type: string) => {
    const baseClass = 'p-1.5 rounded-lg bg-brand-gold/10 text-brand-gold block shrink-0';
    switch (type) {
      case 'fiber':
        return (
          <span className={baseClass}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
          </span>
        );
      case 'oil':
        return (
          <span className={baseClass}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </span>
        );
      case 'protein':
        return (
          <span className={baseClass}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593A3.746 3.746 0 0121 12z" />
            </svg>
          </span>
        );
      case 'kcal':
        return (
          <span className={baseClass}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
          </span>
        );
      case 'fresh':
        return (
          <span className={baseClass}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </span>
        );
      case 'organic':
        return (
          <span className={baseClass}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9m0 0a3 3 0 013-3h3m-6 3a3 3 0 00-3-3H6m5.25 3h1.5" />
            </svg>
          </span>
        );
      case 'sugar':
        return (
          <span className={baseClass}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-1.813-5.096L2.1 15.1 7.188 13.3l.813-5.1 1.813 5.1 5.087 1.8-5.087 1.804z" />
            </svg>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Section bg="dark" className="relative overflow-hidden pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-28">
      {/* Premium ambient grid background with organic radial blurs (Apple & Stripe inspired) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(oklch(0.24_0.015_76)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      <div className="absolute top-[-5%] right-[-5%] -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.08)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.05)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute top-[25%] left-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,_oklch(0.77_0.17_76_/_0.04)_0%,transparent_70%)] blur-3xl" />

      {/* Dynamic Slide Background Accent Glow */}
      <div className={cn(
        "absolute top-[-10%] right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr transition-all duration-1000 blur-3xl opacity-40",
        SLIDES[currentIndex].bgColor
      )} />

      {/* Responsive layout structuring: flex-col on mobile, grid on desktop. Direct children ordered using Tailwind order classes. */}
      <Container className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 lg:items-center">
        
        {/* Left Column Wrapper (uses display: contents on mobile so that H1 and Description stack with the Image in between) */}
        <div className="contents lg:block lg:col-span-5 lg:space-y-8">
          
          {/* Headline block (order-1 stacks it at the very top on mobile) */}
          <div className="order-1 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Small Trust Badge */}
            <MotionWrapper animation="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 hover:bg-brand-gold/15 border border-brand-gold/20 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand-gold transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                A Calm, Cozy Food Spot in Kakkanad, Kochi
              </span>
            </MotionWrapper>

            {/* Single Powerful H1 (SEO compliant) */}
            <MotionWrapper animation="fade-up" className="space-y-5">
              <Typography
                variant="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7.2xl font-extrabold tracking-tight leading-[1.08] text-white font-sans"
              >
                Café Serenity. <br className="hidden sm:inline" />
                <span className="text-brand-gold font-black bg-gradient-to-r from-brand-gold to-amber-500 bg-clip-text text-transparent">
                  Healthy & Everyday Food.
                </span>
              </Typography>
            </MotionWrapper>
          </div>

          {/* Description & CTAs block (order-3 stacks it at the bottom on mobile) */}
          <div className="order-3 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start mt-6 lg:mt-0">
            <MotionWrapper animation="fade-up" className="space-y-6 w-full flex flex-col items-center lg:items-start">
              {/* Supporting Paragraph */}
              <Typography
                variant="body-large"
                className="text-base sm:text-lg leading-relaxed text-stone-300 max-w-xl font-normal opacity-95 mx-auto lg:mx-0"
              >
                A calm, affordable food spot in Kakkanad serving healthy portion-balanced diet plans, fresh breakfast favourites, and everyday café food.
              </Typography>

              {/* Compact Nutrition/Macro Row for Mobile */}
              <div className="flex lg:hidden items-center justify-center gap-3 flex-wrap text-stone-200 text-[11px] font-bold py-2 px-4 rounded-xl bg-stone-900 border border-stone-800 w-fit mt-4">
                <span className="text-brand-gold font-extrabold uppercase tracking-wider">{SLIDES[currentIndex].title}</span>
                <span className="text-stone-700">|</span>
                <span>{SLIDES[currentIndex].kcal}</span>
                <span className="text-stone-700">|</span>
                <span className="text-stone-400">
                  {SLIDES[currentIndex].id.includes('cafe') ? (
                    `${SLIDES[currentIndex].macros.protein} • ${SLIDES[currentIndex].macros.carbs} • ${SLIDES[currentIndex].macros.fat}`
                  ) : (
                    `Prot: ${SLIDES[currentIndex].macros.protein} / Carb: ${SLIDES[currentIndex].macros.carbs} / Fat: ${SLIDES[currentIndex].macros.fat}`
                  )}
                </span>
              </div>

              {/* Spacing and CTA Button Hierarchy */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full max-w-md mx-auto lg:mx-0">
                <Link
                  href="#healthy-meals"
                  className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-brand-gold px-8 text-sm font-bold text-brand-dark hover:bg-brand-gold/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 touch-manipulation hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Explore Healthy Meals
                </Link>
                <Link
                  href="#cafe-menu"
                  className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-stone-850 bg-stone-900/40 hover:bg-stone-900 px-8 text-sm font-semibold text-stone-200 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 touch-manipulation hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  View Café Menu
                </Link>
              </div>
            </MotionWrapper>
          </div>

        </div>

        {/* Right Column: Premium Visual Showcase (order-2 stacks it immediately below headline on mobile, spans 7 columns on desktop) */}
        <div className="order-2 lg:order-none lg:col-span-7 flex flex-col items-center lg:items-end justify-center w-full">
          {/* Main Visual Slider container with keyboard focus, mouse enter/leave, ARIA role, and swipe support */}
          <div
            ref={sliderRef}
            tabIndex={0}
            role="region" 
            aria-roledescription="carousel" 
            aria-label="Premium healthy meals showcase"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-[500px] aspect-square group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-[2.5rem] cursor-grab active:cursor-grabbing select-none"
          >
            {/* Ambient Background depth glow (Stripe inspired) */}
            <div className={cn(
              "absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-tr transition-all duration-1000 blur-2xl opacity-80 group-hover:scale-105",
              SLIDES[currentIndex].bgColor
            )} />
            
            {/* Main Visual Image Frame */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-800 bg-stone-900 relative p-2 bg-gradient-to-b from-stone-900 to-stone-950 transition-colors duration-500">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-neutral-100 dark:bg-neutral-900">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.04 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={SLIDES[currentIndex].image}
                      alt={SLIDES[currentIndex].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority={currentIndex === 0 || currentIndex === 1}
                      className="object-cover transition-transform duration-500"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Nutrition Card 1 (Top-Right Benefit Card) */}
            <AnimatePresence mode="wait">
              {SLIDES[currentIndex].floatCards.map((card, cardIdx) => {
                if (cardIdx !== 0) return null;
                return (
                  <motion.div
                    key={`${currentIndex}-float-benefit`}
                    className={cn(
                      "absolute z-20 max-w-[190px] p-3 rounded-2xl border border-stone-850 bg-brand-dark/95 backdrop-blur-md shadow-lg flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 text-stone-200",
                      card.position
                    )}
                    {...floatAnimation(card.delay, reducedMotion)}
                  >
                    {renderIcon(card.iconType)}
                    <div className="space-y-0.5 min-w-0">
                      <span className="block text-xs font-extrabold text-stone-100 leading-tight tracking-tight truncate">
                        {card.text}
                      </span>
                      <span className="block text-[11px] text-brand-gold font-bold uppercase tracking-wider truncate">
                        {card.sub}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Floating Nutrition Card 2 (Bottom-Left Detail Card) */}
            <motion.div
              key={`${currentIndex}-float-macros`}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-stone-850 bg-brand-dark/95 backdrop-blur-md p-4 shadow-xl max-w-[210px] space-y-3.5 transition-all duration-300 hover:scale-105 active:scale-95 text-stone-200 md:block hidden z-20"
              {...floatAnimation(SLIDES[currentIndex].floatCards[1].delay, reducedMotion)}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/10 px-2.5 py-0.5 text-[11px] font-black text-brand-gold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" aria-hidden="true" />
                Dietitian Verified
              </span>
              <div className="space-y-1">
                <span className="block text-xs font-extrabold text-stone-100 tracking-tight">
                  {SLIDES[currentIndex].title}
                </span>
                <span className="block text-[11px] text-stone-400 font-semibold">
                  Calories: {SLIDES[currentIndex].kcal}
                </span>
              </div>
              
              {/* Macro elements grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-black border-t border-stone-800 pt-2.5">
                <div>
                  <span className="block text-stone-400 text-[11px] font-medium uppercase tracking-wider mb-0.5">
                    Prot
                  </span>
                  <span className="inline-flex rounded-full bg-brand-gold/20 text-brand-gold px-1.5 py-0.5">
                    {SLIDES[currentIndex].macros.protein}
                  </span>
                </div>
                <div>
                  <span className="block text-stone-400 text-[11px] font-medium uppercase tracking-wider mb-0.5">
                    Carb
                  </span>
                  <span className="inline-flex rounded-full bg-brand-gold/20 text-brand-gold px-1.5 py-0.5">
                    {SLIDES[currentIndex].macros.carbs}
                  </span>
                </div>
                <div>
                  <span className="block text-stone-400 text-[11px] font-medium uppercase tracking-wider mb-0.5">
                    Fat
                  </span>
                  <span className="inline-flex rounded-full bg-brand-gold/20 text-brand-gold px-1.5 py-0.5">
                    {SLIDES[currentIndex].macros.fat}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Slider minimal Controls */}
          <div className="flex justify-center items-center gap-3 mt-9 relative z-30 w-full max-w-[500px] px-2">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-200 hover:bg-stone-850 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold shrink-0"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Pagination dots with progress indicators */}
            <div className="flex items-center gap-2" role="group" aria-label="Slides selectors">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  style={{ width: idx === currentIndex ? '32px' : '8px' }}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  aria-current={idx === currentIndex ? 'true' : 'false'}
                >
                  <div className={cn(
                    "absolute inset-0 rounded-full",
                    idx === currentIndex ? "bg-primary/20" : "bg-foreground/20 hover:bg-foreground/45"
                  )} />
                  {idx === currentIndex && (
                    <div
                      className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-[30ms]"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-full border border-stone-800 bg-stone-900/60 text-stone-200 hover:bg-stone-850 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold shrink-0"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </Container>
    </Section>
  );
}

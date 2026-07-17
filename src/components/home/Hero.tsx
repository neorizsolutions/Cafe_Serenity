'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';
import { CONTACT_DETAILS } from '@/constants';
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
    id: 'salad-bowl',
    title: 'Fresh Salad Bowl',
    image: '/images/slide_salad_bowl.png',
    alt: 'Vibrant gourmet fresh salad bowl filled with raw nutrients, avocado, and leafy greens',
    kcal: '320 kcal',
    tag: 'Rich in Fiber',
    subTag: 'Gut Friendly',
    macros: { protein: '8g', carbs: '22g', fat: '12g' },
    bgColor: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5',
    floatCards: [
      { text: 'Rich in Fiber', sub: 'Gut Friendly', position: '-top-4 -right-4 md:-right-8', delay: 0, iconType: 'fiber' },
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
    bgColor: 'from-emerald-500/15 to-primary/10 dark:from-emerald-500/5 dark:to-primary/5',
    floatCards: [
      { text: 'High Protein', sub: '42g Protein', position: '-top-4 -right-4 md:-right-8', delay: 0.5, iconType: 'protein' },
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
    bgColor: 'from-primary/15 to-teal-500/10 dark:from-primary/5 dark:to-teal-500/5',
    floatCards: [
      { text: 'Balanced Nutrition', sub: 'Calorie Mapped', position: '-top-4 -right-4 md:-right-8', delay: 0.8, iconType: 'kcal' },
      { text: 'Healthy Fats', sub: 'Cold-Pressed Oils', position: '-bottom-6 -left-6', delay: 2.3, iconType: 'oil' }
    ]
  },
  {
    id: 'lunch-box',
    title: 'Healthy Lunch Box',
    image: '/images/slide_lunch_box.png',
    alt: 'Freshly packed healthy lunch box with mixed sprouts, hummus, whole wheat flatbread and crudites',
    kcal: '390 kcal',
    tag: 'Fresh Today',
    subTag: 'Office Lunch',
    macros: { protein: '14g', carbs: '55g', fat: '9g' },
    bgColor: 'from-emerald-500/10 to-amber-500/10 dark:from-emerald-500/5 dark:to-amber-500/5',
    floatCards: [
      { text: 'Fresh Today', sub: 'Delivered Daily', position: '-top-4 -right-4 md:-right-8', delay: 1.1, iconType: 'fresh' },
      { text: 'Low Sodium', sub: 'Light & Clean', position: '-bottom-6 -left-6', delay: 1.8, iconType: 'fiber' }
    ]
  },
  {
    id: 'fresh-ingredients',
    title: 'Fresh Ingredients',
    image: '/images/slide_fresh_ingredients.png',
    alt: 'Close-up of premium fresh organic kitchen ingredients including olive oil, garlic, and fresh herbs',
    kcal: '100% Clean',
    tag: 'Natural Ingredients',
    subTag: 'Zero Additives',
    macros: { protein: 'Clean', carbs: 'Pure', fat: 'Natural' },
    bgColor: 'from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5',
    floatCards: [
      { text: 'Natural Ingredients', sub: 'Zero Additives', position: '-top-4 -right-4 md:-right-8', delay: 0.3, iconType: 'organic' },
      { text: '100% Organic', sub: 'Farm Sourced', position: '-bottom-6 -left-6', delay: 1.2, iconType: 'fresh' }
    ]
  },
  {
    id: 'seasonal-veg',
    title: 'Seasonal Vegetables',
    image: '/images/slide_seasonal_veg.png',
    alt: 'Vibrant assortment of roasted and raw seasonal vegetables showing healthy plant diversity',
    kcal: '210 kcal',
    tag: 'Seasonal Veggies',
    subTag: 'Vitamins Rich',
    macros: { protein: '6g', carbs: '38g', fat: '3g' },
    bgColor: 'from-teal-500/10 to-emerald-500/10 dark:from-teal-500/5 dark:to-emerald-500/5',
    floatCards: [
      { text: 'Vitamins Rich', sub: 'Seasonal Harvest', position: '-top-4 -right-4 md:-right-8', delay: 0.9, iconType: 'fiber' },
      { text: 'No Preservatives', sub: 'Cooked Daily', position: '-bottom-6 -left-6', delay: 2.1, iconType: 'organic' }
    ]
  },
  {
    id: 'fruit-bowl',
    title: 'Fruit Bowl',
    image: '/images/slide_fruit_bowl.png',
    alt: 'Colorful fresh fruit bowl with berries, kiwi, oranges, and mint leaves, high in antioxidants',
    kcal: '180 kcal',
    tag: 'Antioxidant Rich',
    subTag: 'Natural Sweetness',
    macros: { protein: '3g', carbs: '42g', fat: '1g' },
    bgColor: 'from-emerald-500/10 to-pink-500/10 dark:from-emerald-500/5 dark:to-pink-500/5',
    floatCards: [
      { text: 'Antioxidant Rich', sub: 'Fresh Fruits', position: '-top-4 -right-4 md:-right-8', delay: 0.6, iconType: 'fresh' },
      { text: 'No Added Sugar', sub: '100% Natural', position: '-bottom-6 -left-6', delay: 1.7, iconType: 'sugar' }
    ]
  }
];

export default function Hero() {
  const whatsappLink = `${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hi Alakapuri, I'd like to check meal box subscription options for my location. Please share onboarding details."
  )}`;

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
    const activePause = isPaused || isHovered;
    if (activePause) return;

    const intervalTime = 30;
    const totalDuration = 4500;
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
  }, [isPaused, isHovered, nextSlide, currentIndex]);

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
    const baseClass = 'p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 block shrink-0';
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
    <Section bg="white" className="relative overflow-hidden pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-28">
      {/* Premium ambient grid background with organic radial blurs (Apple & Stripe inspired) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(oklch(0.93_0.01_145)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      <div className="absolute top-[-5%] right-[-5%] -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_oklch(0.42_0.13_145_/_0.08)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[-5%] left-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_oklch(0.55_0.14_145_/_0.06)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute top-[25%] left-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,_oklch(0.95_0.10_135_/_0.04)_0%,transparent_70%)] blur-3xl" />

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
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-300 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Trusted by 5,000+ Health Enthusiasts in Kerala
              </span>
            </MotionWrapper>

            {/* Single Powerful H1 (SEO compliant) */}
            <MotionWrapper animation="fade-up" className="space-y-5">
              <Typography
                variant="h1"
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-foreground font-sans"
              >
                Clean Eating. <br />
                <span className="text-primary font-black bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  Delivered Daily.
                </span>
              </Typography>
            </MotionWrapper>
          </div>

          {/* Description & CTAs block (order-3 stacks it at the bottom on mobile) */}
          <div className="order-3 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start mt-6 lg:mt-0">
            <MotionWrapper animation="fade-up" className="space-y-6 w-full">
              {/* Supporting Paragraph */}
              <Typography
                variant="body-large"
                className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl font-normal opacity-95 mx-auto lg:mx-0"
              >
                FSSAI-certified portion-controlled healthy diet boxes cooked fresh and delivered to your office desk or home across Kochi & Trivandrum.
              </Typography>

              {/* Spacing and CTA Button Hierarchy */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full max-w-md mx-auto lg:mx-0">
                {/* Primary CTA */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-[0_4px_14px_rgba(26,79,53,0.25)] hover:shadow-[0_6px_20px_rgba(26,79,53,0.35)] hover:bg-primary/95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation active:scale-[0.98] hover:-translate-y-0.5"
                >
                  <svg className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.865-4.343-2.891-6.985-2.892-5.442 0-9.866 4.42-9.87 9.86-.001 1.67.457 3.303 1.32 4.757l-.995 3.635 3.722-.973zm11.587-7.504c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.778.975-.953 1.175-.177.2-.353.225-.653.075-1.207-.6-2.054-.997-2.86-2.38-.21-.363.21-.337.603-1.125.074-.15.037-.282-.018-.382-.056-.1-.478-1.15-.654-1.575-.172-.413-.344-.356-.478-.363-.124-.006-.267-.007-.409-.007-.143 0-.376.054-.572.27-.197.216-.75.733-.75 1.79 0 1.056.768 2.074.875 2.22.107.147 1.512 2.31 3.664 3.24.512.22 1.096.353 1.61.353.606 0 1.155-.075 1.59-.14.484-.07 1.477-.6 1.684-1.18.208-.58.208-1.08.146-1.18-.06-.1-.237-.15-.537-.3z" />
                  </svg>
                  Order on WhatsApp
                </a>
                {/* Secondary CTA */}
                <Link
                  href="/meal-plans"
                  className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-sm font-semibold text-foreground hover:bg-secondary hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Explore Meal Plans
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
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/80 bg-muted relative p-2 bg-gradient-to-b from-white to-secondary/35 dark:from-card dark:to-card/20 transition-colors duration-500">
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
                      priority={currentIndex === 0}
                      loading={currentIndex === 0 ? undefined : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
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
                      "absolute z-20 max-w-[190px] p-3 rounded-2xl border border-white/20 dark:border-border/40 bg-white/80 dark:bg-card/85 backdrop-blur-md shadow-lg flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95",
                      card.position
                    )}
                    {...floatAnimation(card.delay, reducedMotion)}
                  >
                    {renderIcon(card.iconType)}
                    <div className="space-y-0.5 min-w-0">
                      <span className="block text-xs font-extrabold text-foreground leading-tight tracking-tight truncate">
                        {card.text}
                      </span>
                      <span className="block text-[9px] text-muted-foreground font-bold uppercase tracking-wider truncate">
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
              className="absolute -bottom-6 -left-6 rounded-2xl border border-white/20 dark:border-border/40 bg-white/80 dark:bg-card/85 backdrop-blur-md p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-[210px] space-y-3.5 transition-all duration-300 hover:scale-105 active:scale-95 md:block hidden z-20"
              {...floatAnimation(SLIDES[currentIndex].floatCards[1].delay, reducedMotion)}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Dietitian Verified
              </span>
              <div className="space-y-1">
                <span className="block text-xs font-extrabold text-foreground tracking-tight">
                  {SLIDES[currentIndex].title}
                </span>
                <span className="block text-[10px] text-muted-foreground font-semibold">
                  Calories: {SLIDES[currentIndex].kcal}
                </span>
              </div>
              
              {/* Macro elements grid */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-black border-t border-border/80 pt-2.5">
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase tracking-wider mb-0.5">
                    Prot
                  </span>
                  <span className="inline-flex rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5">
                    {SLIDES[currentIndex].macros.protein}
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase tracking-wider mb-0.5">
                    Carb
                  </span>
                  <span className="inline-flex rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 px-1.5 py-0.5">
                    {SLIDES[currentIndex].macros.carbs}
                  </span>
                </div>
                <div>
                  <span className="block text-muted-foreground text-[8px] font-medium uppercase tracking-wider mb-0.5">
                    Fat
                  </span>
                  <span className="inline-flex rounded-full bg-blue-500/15 text-blue-800 dark:text-blue-300 px-1.5 py-0.5">
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
              className="p-2 rounded-full border border-border bg-white/60 dark:bg-card/60 backdrop-blur-sm text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary shrink-0"
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
              className="p-2 rounded-full border border-border bg-white/60 dark:bg-card/60 backdrop-blur-sm text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary shrink-0"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Minimal divider */}
            <div className="w-px h-4 bg-border/60 self-center mx-0.5" />

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="p-2 rounded-full border border-border bg-white/60 dark:bg-card/60 backdrop-blur-sm text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary shrink-0"
              aria-label={isPaused ? "Play slide show" : "Pause slide show"}
            >
              {isPaused ? (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>
          </div>
        </div>

      </Container>
    </Section>
  );
}

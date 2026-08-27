'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import MotionWrapper from '@/components/common/MotionWrapper';

// ─── Section 1 ── What is Flexi-Freeze? ────────────────────────────────────
function WhatIsFlexiFreeze() {
  return (
    <Section bg="white">
      <Container className="max-w-4xl mx-auto space-y-10">
        <MotionWrapper animation="fade-up" className="text-center space-y-3">
          <Typography variant="badge-label">Section 1</Typography>
          <Typography variant="h2" className="text-2xl font-bold tracking-tight text-foreground">
            What is Flexi-Freeze?
          </Typography>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A */}
          <MotionWrapper animation="fade-up">
            <div className="group relative rounded-2xl border border-border/60 bg-card p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 space-y-4">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                {/* snowflake / freeze icon */}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
                </svg>
              </div>
              <Typography variant="h3" className="text-base font-bold text-foreground">
                Pause Without Loss
              </Typography>
              <p className="text-xs leading-relaxed text-muted-foreground">
                The Flexi-Freeze Guarantee allows you to temporarily pause your meal subscription
                without losing your remaining meals or any subscription value. Your credits are
                frozen — safe, intact, and waiting for you.
              </p>
            </div>
          </MotionWrapper>

          {/* Card B */}
          <MotionWrapper animation="fade-up">
            <div className="group relative rounded-2xl border border-border/60 bg-card p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 space-y-4">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                {/* calendar / schedule icon */}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-base font-bold text-foreground">
                Built for Real Life
              </Typography>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Life is unpredictable. Travel, vacations, work commitments, or any temporary change
                in routine shouldn&apos;t disrupt your subscription. Flexi-Freeze is designed to
                adapt to your schedule — not the other way around.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}

// ─── Section 2 ── How It Works (4-step timeline) ───────────────────────────
const STEPS = [
  {
    num: '01',
    title: 'Choose a Meal Subscription',
    desc: 'Browse our curated meal plans — High Protein, Weight Loss, Balanced, or Corporate. Pick the one that fits your goals.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Receive Healthy Meals as Scheduled',
    desc: 'Fresh, FSSAI-certified meals are delivered to your home or office desk at your chosen time slots every day.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Need a Break? Pause Anytime',
    desc: 'Simply request a pause before your next billing or delivery cycle. Your subscription is frozen — no meals are charged, no credits are lost.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Resume Whenever You\'re Ready',
    desc: 'When you\'re back, simply resume from where you left off. Your remaining meal credits and subscription value are fully intact.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <Section bg="muted">
      <Container className="max-w-4xl mx-auto space-y-10">
        <MotionWrapper animation="fade-up" className="text-center space-y-3">
          <Typography variant="badge-label">Section 2</Typography>
          <Typography variant="h2" className="text-2xl font-bold tracking-tight text-foreground">
            How It Works
          </Typography>
          <Typography variant="body-regular" className="text-xs text-muted-foreground max-w-lg mx-auto">
            A simple 4-step process that puts flexibility first.
          </Typography>
        </MotionWrapper>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-border/70" aria-hidden="true" />

          <div className="space-y-6 md:space-y-0">
            {STEPS.map((step, idx) => {
              const isRight = idx % 2 === 1;
              return (
                <MotionWrapper key={step.num} animation="fade-up" className={`md:flex md:items-start md:gap-8 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                  {/* Card */}
                  <div className="md:w-[calc(50%-2rem)] flex-none">
                    <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 space-y-3">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
                          {step.icon}
                        </div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                          Step {step.num}
                        </span>
                      </div>
                      <Typography variant="h3" className="text-sm font-bold text-foreground">
                        {step.title}
                      </Typography>
                      <p className="text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>

                  {/* Centre dot (desktop) */}
                  <div className="hidden md:flex flex-none w-16 items-start justify-center pt-6">
                    <div className="h-4 w-4 rounded-full bg-primary border-2 border-background shadow-md" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)] flex-none" />
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ─── Section 3 ── When Can I Pause? ────────────────────────────────────────
const PAUSE_SCENARIOS = [
  { label: 'Vacation', icon: '🏖️', desc: 'Heading out of town? Freeze your subscription.' },
  { label: 'Business Travel', icon: '✈️', desc: 'Work trips away from Kochi? No problem.' },
  { label: 'Work From Home Changes', icon: '🏠', desc: 'Schedule shifted? Pause until you settle.' },
  { label: 'Festivals & Celebrations', icon: '🎉', desc: 'Family feasts? Skip and enjoy the occasion.' },
  { label: 'Family Events', icon: '👨‍👩‍👧', desc: 'Weddings, gatherings, or special occasions.' },
  { label: 'Medical Leave', icon: '🏥', desc: 'Recovering? Pause and resume when well.' },
  { label: 'Temporary Lifestyle Changes', icon: '🔄', desc: 'Any reason, anytime. No questions asked.' },
];

function WhenCanIPause() {
  return (
    <Section bg="white">
      <Container className="max-w-4xl mx-auto space-y-10">
        <MotionWrapper animation="fade-up" className="text-center space-y-3">
          <Typography variant="badge-label">Section 3</Typography>
          <Typography variant="h2" className="text-2xl font-bold tracking-tight text-foreground">
            When Can I Pause?
          </Typography>
          <Typography variant="body-regular" className="text-xs text-muted-foreground max-w-md mx-auto">
            Pause anytime, for any reason — before your next billing or delivery cycle.
          </Typography>
        </MotionWrapper>

        <MotionWrapper animation="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAUSE_SCENARIOS.map((scenario) => (
              <div
                key={scenario.label}
                className="group relative rounded-2xl border border-border/60 bg-card p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 flex items-start gap-4"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                <span className="text-2xl shrink-0 leading-none mt-0.5" role="img" aria-label={scenario.label}>
                  {scenario.icon}
                </span>
                <div className="space-y-1 min-w-0">
                  <span className="block text-xs font-extrabold text-foreground tracking-tight">
                    {scenario.label}
                  </span>
                  <span className="block text-[10px] text-muted-foreground leading-relaxed">
                    {scenario.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}

// ─── Section 4 ── Benefits ──────────────────────────────────────────────────
const BENEFITS = [
  {
    title: 'No Subscription Loss',
    desc: 'Every meal credit you\'ve paid for remains intact — frozen safely until you return.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Resume Anytime',
    desc: 'No hoops to jump through. Simply contact us and we\'ll reactivate on your next cycle.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Flexible Meal Scheduling',
    desc: 'Reschedule delivery windows, change drop points, or skip individual days without losing credits.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Manage Upcoming Deliveries',
    desc: 'Notify us before your next cycle and we\'ll handle everything — no wasted boxes, no lost money.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
  },
  {
    title: 'Continue Remaining Meal Credits',
    desc: 'Paused days are not deducted. Your meal count picks up exactly where it left off.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Simple Subscription Management',
    desc: 'One WhatsApp message or call to our team is all it takes to pause, skip, or resume.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

function Benefits() {
  return (
    <Section bg="muted">
      <Container className="max-w-5xl mx-auto space-y-10">
        <MotionWrapper animation="fade-up" className="text-center space-y-3">
          <Typography variant="badge-label">Section 4</Typography>
          <Typography variant="h2" className="text-2xl font-bold tracking-tight text-foreground">
            Benefits of Flexi-Freeze
          </Typography>
          <Typography variant="body-regular" className="text-xs text-muted-foreground max-w-md mx-auto">
            Everything that makes subscription flexibility worry-free.
          </Typography>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit) => (
            <MotionWrapper key={benefit.title} animation="fade-up">
              <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 flex flex-col gap-4 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {benefit.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[9px] font-black text-emerald-700 bg-emerald-500/10 rounded-full px-2.5 py-0.5 uppercase tracking-wide border border-emerald-500/20">
                    ✓ Included
                  </span>
                </div>
                <div className="space-y-1.5 flex-1">
                  <Typography variant="h3" className="text-sm font-bold text-foreground">
                    {benefit.title}
                  </Typography>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ─── Section 5 ── FAQ Accordion ─────────────────────────────────────────────
const FAQS = [
  {
    q: 'How many times can I pause my subscription?',
    a: 'There is no limit on the number of pauses. You can pause and resume your subscription as many times as needed throughout your active plan period.',
  },
  {
    q: 'Will I lose my remaining meals when I pause?',
    a: 'No. The Flexi-Freeze Guarantee ensures your remaining meal credits are fully preserved when you pause. Not a single meal is deducted during your paused period.',
  },
  {
    q: 'Can I resume at any time?',
    a: 'Yes. You can resume your subscription at any time by contacting our support team via WhatsApp or phone. We\'ll reactivate from your next available delivery cycle.',
  },
  {
    q: 'Do paused days affect my meal balance?',
    a: 'No. Paused days are not counted against your subscription. Your meal balance remains exactly as it was when you paused — frozen and intact.',
  },
  {
    q: 'Is there an additional fee to pause my subscription?',
    a: 'Absolutely not. Pausing your subscription is completely free. There are no hidden charges, penalties, or administrative fees involved.',
  },
  {
    q: 'How do I request a pause?',
    a: 'Simply send a WhatsApp message or call our support team before your next billing or delivery cycle. We handle the rest — no forms, no complicated portals.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-secondary/30"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-foreground leading-snug">{question}</span>
        <span
          className={`shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5 text-xs leading-relaxed text-muted-foreground bg-secondary/10 border-t border-border/40">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  return (
    <Section bg="white">
      <Container className="max-w-3xl mx-auto space-y-10">
        <MotionWrapper animation="fade-up" className="text-center space-y-3">
          <Typography variant="badge-label">Section 5</Typography>
          <Typography variant="h2" className="text-2xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body-regular" className="text-xs text-muted-foreground max-w-md mx-auto">
            Everything you need to know about pausing, resuming, and managing your subscription.
          </Typography>
        </MotionWrapper>

        <MotionWrapper animation="fade-up" className="space-y-3">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </MotionWrapper>
      </Container>
    </Section>
  );
}

// ─── Section 6 ── Need Help? ────────────────────────────────────────────────
function NeedHelp() {
  return (
    <Section bg="muted">
      <Container className="max-w-3xl mx-auto">
        <MotionWrapper animation="fade-up">
          <div className="rounded-3xl border border-primary/10 bg-white/70 dark:bg-card/75 p-8 md:p-10 text-center space-y-5 shadow-sm group relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <Typography variant="badge-label">We&apos;re Here to Help</Typography>

            <Typography variant="h2" className="text-xl font-bold tracking-tight text-foreground">
              Need Help with Your Subscription?
            </Typography>

            <p className="text-xs leading-relaxed text-muted-foreground max-w-lg mx-auto">
              Have questions about pausing, resuming, or managing your Café Serenity meal subscription?
              Our support team is available to help you Monday through Saturday. Reach out via
              WhatsApp for the fastest response.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919388262626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow hover:bg-primary/95 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.524 5.833L.057 23.804a.5.5 0 00.614.636l6.224-1.632A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.065-1.381l-.364-.214-3.765.988 1.006-3.667-.236-.378A9.952 9.952 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-6 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}

// ─── Root export ─────────────────────────────────────────────────────────────
export default function FlexiFreezeContent() {
  return (
    <>
      <WhatIsFlexiFreeze />
      <HowItWorks />
      <WhenCanIPause />
      <Benefits />
      <FAQSection />
      <NeedHelp />
    </>
  );
}

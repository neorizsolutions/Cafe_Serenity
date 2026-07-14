import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: 'white' | 'muted' | 'brand-light' | 'transparent';
}

export default function Section({ children, className, bg = 'transparent', ...props }: SectionProps) {
  const bgClasses = {
    white: 'bg-background',
    muted: 'bg-secondary/35 border-y border-border',
    'brand-light': 'bg-primary/5 border-y border-border/60',
    transparent: 'bg-transparent',
  };

  return (
    <section
      className={cn(
        'py-16 md:py-24 lg:py-32',
        bgClasses[bg],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

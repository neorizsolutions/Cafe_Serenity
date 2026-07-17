import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant: 'h1' | 'h2' | 'h3' | 'body-large' | 'body-regular' | 'small' | 'badge-label';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function Typography({ variant, as, children, className, ...props }: TypographyProps) {
  const Component = as || (variant.startsWith('h') ? (variant as 'h1' | 'h2' | 'h3') : 'p');

  const variantClasses = {
    h1: 'text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-none leading-tight',
    h2: 'text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl leading-tight',
    h3: 'text-lg font-bold tracking-tight text-foreground sm:text-xl lg:text-2xl',
    'body-large': 'text-lg leading-relaxed text-muted-foreground',
    'body-regular': 'text-sm leading-relaxed text-muted-foreground',
    small: 'text-xs leading-normal text-muted-foreground',
    'badge-label': 'text-[10px] uppercase font-bold tracking-widest text-primary',
  };

  return (
    <Component
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

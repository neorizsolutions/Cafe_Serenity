import Link, { LinkProps } from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface LinkWrapperProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function LinkWrapper({
  href,
  children,
  className,
  external = false,
  ...props
}: LinkWrapperProps) {
  if (external || href.toString().startsWith('http')) {
    return (
      <a
        href={href.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('inline-flex items-center gap-1 hover:underline', className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn('hover:underline', className)} {...props}>
      {children}
    </Link>
  );
}

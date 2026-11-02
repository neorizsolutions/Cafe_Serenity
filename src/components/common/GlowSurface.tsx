import { type ReactNode } from 'react';

/** A brief light pulse on entry; no pointer tracking or moving surfaces. */
export default function GlowSurface({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`serenity-glow ${className}`}>{children}</div>;
}

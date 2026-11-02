import Image from 'next/image';

/** Shared shop-board wordmark; no location subtitle or extra emblem. */
export default function BrandLogo({ className = '' }: { className?: string }) {
  return <span className={`brand-lockup ${className}`}><Image src="/images/cafe-serenity-shop-logo.png" alt="Café serenity" width={2172} height={724} className="brand-logo-image" unoptimized /></span>;
}

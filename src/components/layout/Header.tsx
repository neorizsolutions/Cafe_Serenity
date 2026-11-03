'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/common/BrandLogo';
import { NAVIGATION_LINKS, CONTACT_DETAILS, BUSINESS_NAME } from '@/constants';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('keydown', onKey); window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);
  const links = [...NAVIGATION_LINKS.slice(0, 3), { label: 'Food Guide', href: '/blog' }, NAVIGATION_LINKS[3]];
  return <header className="brand-header">
    <div className="brand-header-inner"><Link href="/" aria-label={`${BUSINESS_NAME} home`} onClick={() => setOpen(false)} className="brand-home"><BrandLogo /></Link>
      <nav className="brand-desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}</nav>
      <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="brand-nav-cta">Talk to Us <span aria-hidden="true">↗</span></a>
      <button ref={toggle} className="brand-menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}><span aria-hidden="true">{open ? '✕' : '☰'}</span></button>
    </div>
    {open && <><button type="button" className="brand-menu-backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} tabIndex={-1} /><nav id="mobile-navigation" className="brand-mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}<a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="brand-mobile-cta" onClick={() => setOpen(false)}>Talk to the café <span aria-hidden="true">↗</span></a></nav></>}
  </header>;
}

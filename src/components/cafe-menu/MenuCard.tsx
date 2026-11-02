'use client';

import { useState } from 'react';
import Image from 'next/image';
import GlowSurface from '@/components/common/GlowSurface';
import PortionSelector from './PortionSelector';
import { CafeMenuItem } from '@/types';

export default function MenuCard({ item }: { item: CafeMenuItem }) {
  const [selected, setSelected] = useState<'half' | 'full'>('half');
  const imageSrc = item.portionImages?.[selected] ?? item.imageSrc;
  return (
    <GlowSurface className="h-full"><article className="menu-product group h-full rounded-2xl border border-border/70 bg-card p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6E8064]/50 hover:shadow-lg hover:shadow-[#6E8064]/5">
      <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-[#6E8064]/[0.06] border border-dashed border-[#6E8064]/20">
        {imageSrc ? (
          <Image key={imageSrc} src={imageSrc} alt={item.portionImages ? `${item.name} — ${selected} portion illustration` : item.name} fill sizes="(max-width: 639px) calc(100vw - 96px), (max-width: 767px) 45vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 480px" className="object-cover portion-photo-enter" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#6E8064]/60" role="img" aria-label={`Photo placeholder for ${item.name}`}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>
            <span className="text-xs font-medium">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">{item.name}</h3>

      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      <div className="mt-6 border-t border-border/70 pt-5">
        {item.portions ? <PortionSelector name={item.name} portions={item.portions} selected={selected} onSelect={setSelected} /> : <p className="text-xl font-bold text-[#6E8064]">₹{item.price}<span className="ml-2 text-xs font-medium text-muted-foreground">each</span></p>}
      </div>
    </article></GlowSurface>
  );
}

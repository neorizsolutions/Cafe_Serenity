'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Expand, X } from 'lucide-react';
import PortionSelector from './PortionSelector';
import { getMenuCollection } from '@/data/cafe-menu/collections';
import { CafeMenuItem } from '@/types';

export default function MenuCard({ item }: { item: CafeMenuItem }) {
  const [selected, setSelected] = useState<'half' | 'full'>('half');
  const [previewOpen, setPreviewOpen] = useState(false);
  const preview = useRef<HTMLDialogElement>(null);
  const collection = getMenuCollection(item);
  const imageAlt = `${item.name} — ${item.portions ? 'full portion ' : ''}illustration`;

  useEffect(() => {
    if (!previewOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!preview.current?.open) preview.current?.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [previewOpen]);

  return <article className="editorial-product" data-collection={collection}>
    <div className="editorial-product-photo">
      <button type="button" className="editorial-product-image" onClick={() => setPreviewOpen(true)} aria-label={`View ${item.name} image`} aria-haspopup="dialog">
        {item.imageSrc ? <Image src={item.imageSrc} alt={imageAlt} fill quality={90} sizes="(max-width:540px) calc(100vw - 100px), (max-width:1100px) calc((100vw - 150px)/2), (max-width:1280px) calc((100vw - 200px)/3), 350px" /> : <span className="editorial-photo-pending">Photo coming soon.</span>}
        <span className="menu-image-expand" aria-hidden="true"><Expand size={17} /></span>
      </button>
    </div>
    <div className="editorial-product-copy">
      <div className="editorial-product-title"><h3>{item.name}</h3>{!item.portions && <p className="editorial-item-price">₹{item.price}<span>each</span></p>}</div>
      {item.portions && <div className="editorial-product-portions"><PortionSelector name={item.name} portions={item.portions} selected={selected} onSelect={setSelected} /></div>}
    </div>
    <dialog ref={preview} className="menu-image-dialog" aria-label={`${item.name} image preview`} onClose={() => setPreviewOpen(false)} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      {previewOpen && <><div className="menu-image-dialog-heading"><h2>{item.name}</h2><button type="button" onClick={() => preview.current?.close()} aria-label="Close image preview"><X size={22} /></button></div><div className="menu-image-dialog-art">{item.imageSrc && <Image src={item.imageSrc} alt={imageAlt} fill quality={90} sizes="(max-width:767px) 90vw, 1000px" />}</div><p>{item.portions ? `Half ₹${item.portions.half} · Full ₹${item.portions.full}` : `₹${item.price} each`}</p></>}
    </dialog>
  </article>;
}

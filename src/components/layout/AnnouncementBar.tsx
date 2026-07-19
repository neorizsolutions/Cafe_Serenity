'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-primary text-primary-foreground py-2.5 px-6 flex items-center justify-between text-xs font-bold leading-none tracking-wide text-center">
      <div className="flex-grow flex items-center justify-center gap-2">
        <span className="inline-flex rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase font-black tracking-wider">
          Since 1970
        </span>
        <span>A Taste of Traditional Kerala in Kakkanad, Kochi. Order on WhatsApp or Swiggy/Zomato!</span>
        <Link href="/pricing" className="underline hover:opacity-90 ml-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-white">
          View Menu →
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss announcement"
        className="shrink-0 rounded p-1 hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-primary"
      >
        <svg className="h-3 w-3 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

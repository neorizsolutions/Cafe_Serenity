import type { Metadata } from 'next';
import Link from 'next/link';
import VadaShowcase from '@/components/menu-showcase/VadaShowcase';

export const metadata: Metadata = {
  title: 'Medu Vada Menu Showcase Prototype — Café Serenity',
  robots: { index: false, follow: false },
};

export default function VadaShowcasePreviewPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#121410',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Subtle preview banner */}
      <div
        style={{
          borderBottom: '1px solid rgba(248, 197, 72, 0.2)',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          color: '#E2DACB',
          background: 'rgba(18, 20, 16, 0.95)',
        }}
      >
        <span>
          <strong style={{ color: '#F8C548' }}>Stage 1 Prototype:</strong> Single Snack Showcase (Medu Vada · ₹12)
        </span>
        <Link
          href="/cafe-menu"
          style={{
            color: '#F8C548',
            textDecoration: 'none',
            fontSize: '0.78rem',
            borderBottom: '1px dotted #F8C548',
          }}
        >
          View Current Menu →
        </Link>
      </div>

      {/* Render the isolated showcase */}
      <VadaShowcase showVariantToggle={true} />
    </main>
  );
}


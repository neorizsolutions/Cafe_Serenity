import Image from 'next/image';
import Link from 'next/link';
import { FAQS } from '@/data/faqs';
import FeaturedFoodCards from './FeaturedFoodCards';

export function MenuOrientation() {
  return (
    <section className="editorial-chapters" aria-labelledby="orientation-title">
      <div className="editorial-section-heading">
        <h2 id="orientation-title">Explore the menu</h2>
        <Link href="/cafe-menu" className="brand-inline-link">
          View full menu <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <FeaturedFoodCards />
    </section>
  );
}

export function PortionGuide() {
  return <section className="editorial-portion" aria-labelledby="portion-guide-title"><div className="editorial-portion-inner">
    <div className="editorial-portion-art"><Image quality={90} src="/images/menu-hd/kozhikode-biriyani.webp" alt="Illustration of Kozhikode Biriyani" fill sizes="(max-width:767px) 85vw, 45vw" /></div>
    <div className="editorial-portion-copy"><h2 id="portion-guide-title">Biriyani portions</h2>
      <div className="editorial-portion-prices"><div><span>Half portion</span><strong>₹90</strong></div><div><span>Full portion</span><strong>₹150</strong></div></div>
      <Link href="/cafe-menu#category-biriyani" className="brand-inline-link">Explore all eight Biriyanis <span aria-hidden="true">↗</span></Link><small>Prices are per portion. Food images are illustrative.</small>
    </div>
  </div></section>;
}

export function FAQPreview() {
  const selected = [FAQS[1], FAQS[5], FAQS[6]];
  return (
    <section className="brand-faq-preview editorial" aria-labelledby="faq-preview-title">
      <div className="editorial-faq-preview-inner">
        <div className="editorial-section-heading">
          <div>
            <h2 id="faq-preview-title">Before you visit</h2>
          </div>
          <Link href="/faq" className="brand-inline-link">View all FAQs <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="brand-faq-list">
          {selected.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span className="editorial-faq-plus" aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

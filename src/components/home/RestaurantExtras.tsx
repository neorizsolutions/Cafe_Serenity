import Image from 'next/image';
import Link from 'next/link';
import { FAQS } from '@/data/faqs';

export function MenuOrientation() {
  return <section className="brand-orientation" aria-labelledby="orientation-title"><div className="brand-section-heading"><div><h2 id="orientation-title">What are you<br /><span>in the mood for?</span></h2></div><p>A meal to settle into, a quick savoury bite, or a little sweetness. Find a favourite for your moment.</p></div><div className="brand-orientation-grid">{[
    { title: 'Make it Biriyani.', text: 'Explore eight regional favourites, each with Half and Full portions.', image: 'malabar-biriyani', link: '/cafe-menu#category-biriyani', action: 'Find your plate' },
    { title: 'Make time for a snack.', text: 'Cutlet, Samosa, Vada, Egg Puffs and more for the breaks in between.', image: 'samosa', link: '/cafe-menu#category-snacks', action: 'Explore the snacks' },
    { title: 'End on something sweet.', text: 'Kesari, Sukhiyan, Kozhukatta and Ela Ada. Familiar little treats.', image: 'kesari', link: '/cafe-menu#category-snacks', action: 'Find a sweet moment' },
  ].map(card => <Link key={card.title} href={card.link} className="brand-orientation-card"><div className="brand-orientation-photo"><Image src={`/images/${card.image}.webp`} alt="" fill sizes="(max-width:767px) 90vw, 30vw" /></div><div><h3>{card.title}</h3><p>{card.text}</p><span>{card.action} <span aria-hidden="true">↗</span></span></div></Link>)}</div></section>;
}

export function PortionGuide() {
  return <section className="brand-portion-guide" aria-labelledby="portion-guide-title"><div><h2 id="portion-guide-title">Your appetite.<br /><span>Your portion.</span></h2><p>Every Biriyani on our menu comes in two choices. Compare the portion illustrations on the menu and choose what works for your meal.</p><Link href="/cafe-menu#category-biriyani" className="brand-inline-link">Explore the Biriyani collection ↗</Link></div><div className="brand-portion-options"><div><span>Half portion</span><strong>₹90</strong><p>A smaller portion of your chosen Biriyani.</p></div><div><span>Full portion</span><strong>₹150</strong><p>A larger portion of the same favourite.</p></div><small>Prices are per portion. Menu photographs are illustrative.</small></div></section>;
}

export function FAQPreview() {
  const selected = [FAQS[1], FAQS[5], FAQS[6]];
  return <section className="brand-faq-preview" aria-labelledby="faq-preview-title"><div className="brand-section-heading"><div><h2 id="faq-preview-title">A little more<br /><span>before you visit.</span></h2></div><Link href="/faq" className="brand-inline-link">All your questions ↗</Link></div><div className="brand-faq-list">{selected.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>;
}

import Link from 'next/link';
import MenuExplorer from '@/components/cafe-menu/MenuExplorer';
import { CONTACT_DETAILS } from '@/constants';
import { constructMetadata } from '@/utils/seo';
export const metadata = constructMetadata({title:'Our Menu — Biriyani, Snacks & Sweets',description:'Explore eight Biriyani varieties, snacks and sweets. Half ₹90, Full ₹150, regular snacks ₹12 each and Egg Puffs ₹15.',path:'/cafe-menu'});
export default function CafeMenuPage() { return <><section className="brand-page-intro"><div><h1>Good food.<br /><span>Your kind of choice.</span></h1><p>Biriyani for a proper meal. Snacks for a little break. Something sweet, just because.</p><div className="menu-price-note"><span>Half ₹90 · Full ₹150</span><span>Snacks ₹12 each · Egg Puffs ₹15</span></div></div></section><MenuExplorer /><section className="brand-help-strip"><div><h2>A question before you choose?</h2><p>Ask us about ingredients, today’s availability or your next visit.</p></div><div><a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="brand-button">Ask the café <span aria-hidden="true">↗</span></a><Link href="/faq" className="brand-inline-link">Read our FAQs →</Link></div></section></>; }

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import Link from 'next/link';
// import Image from 'next/image';
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import { CAFE_ITEMS } from '@/data/cafe-menu/items';
// import { CONTACT_DETAILS } from '@/constants';
// import { constructMetadata } from '@/utils/seo';
// import { cn } from '@/lib/utils';
// 
// export const metadata = constructMetadata({
//   title: 'Café Menu | Everyday Favourites at Café Serenity',
//   description: 'Explore the full Café Serenity menu. From warm South Indian breakfasts to comforting Kerala favourites — familiar food prepared with care.',
//   path: '/cafe-menu',
// });
// 
// // ─── Featured Café Favourites ────────────────────────────────────────────────
// const FEATURED_IDS = [
//   'idli-vada-combo',
//   'dosa',
//   'puttu',
//   'kerala-meals',
//   'chicken-biriyani',
//   'coffee',
// ] as const;
// 
// // ─── Category Definition ─────────────────────────────────────────────────────
// const CATEGORIES = [
//   { id: 'breakfast', label: 'Breakfast' },
//   { id: 'main', label: 'Kerala Specials' },
//   { id: 'snack', label: 'Snacks' },
//   { id: 'beverage', label: 'Hot Drinks' },
// ] as const;
// 
// const CATEGORY_EMOJI: Record<string, string> = {
//   breakfast: '🍳',
//   main: '🍛',
//   snack: '🧆',
//   beverage: '☕',
// };
// 
// export default function CafeMenuPage() {
//   // Pre-calculate featured items
//   const featuredItems = CAFE_ITEMS.filter((item) =>
//     (FEATURED_IDS as readonly string[]).includes(item.id)
//   ).sort(
//     (a, b) =>
//       (FEATURED_IDS as readonly string[]).indexOf(a.id) -
//       (FEATURED_IDS as readonly string[]).indexOf(b.id)
//   );
// 
//   return (
//     <>
//       {/* ═══════════════════════════════════════════════════════════
//           SECTION 1 — HERO
//           ══════════════════════════════════════════════════════════= */}
//       <Section bg="muted" className="relative border-b border-border overflow-hidden">
//         {/* Ambient warm overlay */}
//         <div
//           className="absolute inset-0 -z-10 pointer-events-none"
//           aria-hidden="true"
//           style={{
//             background:
//               'radial-gradient(circle at 65% 50%, rgba(138,102,82,0.06) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(138,102,82,0.04) 0%, transparent 50%)',
//           }}
//         />
// 
//         <Container className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[520px] sm:min-h-[580px] lg:min-h-[600px] py-16 md:py-20 lg:py-24">
//             {/* Left — text content */}
//             <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
//               <div className="space-y-5">
//                 <p
//                   className="text-[11px] font-bold uppercase tracking-[0.22em]"
//                   style={{ color: '#8A6652' }}
//                 >
//                   CAFÉ SERENITY · KAKKANAD
//                 </p>
//                 <Typography
//                   variant="h1"
//                   className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl leading-tight text-foreground"
//                 >
//                   Food for the everyday moments.
//                 </Typography>
//                 <Typography
//                   variant="body-large"
//                   className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium max-w-lg mx-auto lg:mx-0"
//                 >
//                   From early breakfast and South Indian favourites to everyday meals, snacks and coffee — familiar food prepared with care at Café Serenity.
//                 </Typography>
//               </div>
// 
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a
//                   href="#menu-categories"
//                   className="w-full sm:w-auto min-h-[48px] px-8 rounded-full text-sm font-bold text-white shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2"
//                   style={{
//                     backgroundColor: '#8A6652',
//                     border: '2px solid #8A6652',
//                   }}
//                 >
//                   Explore the Menu
//                 </a>
//               </div>
//             </div>
// 
//             {/* Right — hero food image */}
//             <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
//               <div
//                 className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-none lg:w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
//                 style={{ boxShadow: '0 24px 64px rgba(28,28,30,0.14), 0 4px 16px rgba(28,28,30,0.07)' }}
//               >
//                 <Image
//                   src="/images/slide_cafe_breakfast.png"
//                   alt="A warm spread of South Indian breakfast dishes at Café Serenity, Kakkanad"
//                   fill
//                   sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 480px"
//                   priority
//                   className="object-cover"
//                 />
//                 {/* Bottom scrim */}
//                 <div
//                   className="absolute inset-0 pointer-events-none"
//                   aria-hidden="true"
//                   style={{
//                     background: 'linear-gradient(to top, rgba(28,28,30,0.35) 0%, rgba(28,28,30,0.03) 45%, transparent 70%)',
//                   }}
//                 />
//               </div>
//               {/* Decorative ambient glows */}
//               <div
//                 className="absolute top-[-1.5rem] right-[-1.5rem] w-28 h-28 rounded-full pointer-events-none -z-10"
//                 aria-hidden="true"
//                 style={{ backgroundColor: '#8A6652', filter: 'blur(2.5rem)', opacity: 0.18 }}
//               />
//               <div
//                 className="absolute bottom-[-1rem] left-[-1rem] w-20 h-20 rounded-full pointer-events-none -z-10"
//                 aria-hidden="true"
//                 style={{ backgroundColor: '#B86F52', filter: 'blur(2rem)', opacity: 0.22 }}
//               />
//             </div>
//           </div>
//         </Container>
//       </Section>
// 
//       {/* ═══════════════════════════════════════════════════════════
//           SECTION 2 — MENU INTRODUCTION
//           ══════════════════════════════════════════════════════════= */}
//       <Section bg="white" className="py-16 md:py-20 border-b border-border">
//         <Container className="max-w-3xl mx-auto text-center space-y-6">
//           <p
//             className="text-[11px] font-bold uppercase tracking-[0.22em]"
//             style={{ color: '#8A6652' }}
//           >
//             From our kitchen
//           </p>
//           <Typography
//             variant="h2"
//             className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
//           >
//             Something for every kind of day.
//           </Typography>
//           <Typography
//             variant="body-large"
//             className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium"
//           >
//             Whether it&apos;s a quiet morning coffee, a hearty lunch, or an evening snack — Café Serenity serves familiar, everyday food that feels like home.
//           </Typography>
//         </Container>
//       </Section>
// 
//       {/* ═══════════════════════════════════════════════════════════
//           SECTION 3 — CATEGORY NAVIGATION
//           ══════════════════════════════════════════════════════════= */}
//       <div id="menu-categories" className="bg-muted py-6 border-b border-border sticky top-16 md:top-20 z-30">
//         <Container className="max-w-5xl mx-auto">
//           <nav
//             className="flex gap-4 overflow-x-auto pb-2 scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0 sm:justify-center"
//             aria-label="Menu categories"
//           >
//             {CATEGORIES.map((cat) => (
//               <a
//                 key={cat.id}
//                 href={`#category-${cat.id}`}
//                 className="min-h-[44px] px-6 rounded-full border border-border bg-card hover:bg-secondary/40 text-sm font-bold text-foreground transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 flex items-center justify-center shadow-sm"
//               >
//                 {CATEGORY_EMOJI[cat.id]} {cat.label}
//               </a>
//             ))}
//           </nav>
//         </Container>
//       </div>
// 
//       {/* ═══════════════════════════════════════════════════════════
//           SECTION 4 — MENU SECTIONS
//           ══════════════════════════════════════════════════════════= */}
//       <Section bg="white" className="py-12 md:py-16">
//         <Container className="max-w-5xl mx-auto space-y-20">
//           {CATEGORIES.map((category) => {
//             const items = CAFE_ITEMS.filter((item) => item.category === category.id);
//             if (items.length === 0) return null;
// 
//             return (
//               <div key={category.id} id={`category-${category.id}`} className="scroll-mt-36">
//                 <div className="mb-8 space-y-2 text-center md:text-left">
//                   <p
//                     className="text-[11px] font-bold uppercase tracking-[0.22em]"
//                     style={{ color: '#8A6652' }}
//                   >
//                     Café Menu
//                   </p>
//                   <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
//                     {category.label}
//                   </h2>
//                 </div>
// 
//                 {/* Option A: Spacious Editorial Grid / List */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
//                   {items.map((item) => (
//                     <article key={item.id} className="flex gap-5 group">
//                       <div className="flex-grow space-y-2">
//                         <div className="flex justify-between items-start gap-4">
//                           <h3 className="text-base font-bold text-foreground leading-tight group-hover:text-[#8A6652] transition-colors">
//                             {item.name}
//                           </h3>
//                           <span className="text-sm font-black text-foreground shrink-0">
//                             ₹{item.price}
//                           </span>
//                         </div>
//                         <p className="text-sm text-muted-foreground font-medium leading-relaxed">
//                           {item.description}
//                         </p>
//                         {item.isVeg !== undefined && (
//                           <div className="flex items-center gap-1.5 pt-2">
//                             <span
//                               className={cn(
//                                 'h-2 w-2 rounded-full shrink-0',
//                                 item.isVeg ? 'bg-emerald-600' : 'bg-amber-700'
//                               )}
//                               aria-hidden="true"
//                             />
//                             <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/80">
//                               {item.isVeg ? 'Veg' : 'Non-Veg'}
//                             </span>
//                           </div>
//                         )}
//                       </div>
//                     </article>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </Container>
//       </Section>
// 
//       {/* ═══════════════════════════════════════════════════════════
//           SECTION 5 — FEATURED MENU MOMENT
//           ══════════════════════════════════════════════════════════= */}
//       <Section bg="muted" className="py-16 md:py-24 border-y border-border">
//         <Container className="space-y-12 max-w-5xl mx-auto">
//           <div className="text-center space-y-3">
//             <p
//               className="text-[11px] font-bold uppercase tracking-[0.22em]"
//               style={{ color: '#8A6652' }}
//             >
//               Our Café Favourites
//             </p>
//             <Typography
//               variant="h2"
//               className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
//             >
//               The ones people come back for.
//             </Typography>
//             <Typography
//               variant="body-regular"
//               className="text-sm text-muted-foreground font-medium max-w-md mx-auto leading-relaxed"
//             >
//               A small selection of dishes that have become everyday staples at Café Serenity.
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredItems.map((item) => (
//               <article key={item.id} className="bg-card border border-border/60 hover:border-[#8A6652]/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
//                 <div className="relative aspect-[16/9] w-full bg-secondary/30 overflow-hidden">
//                   {item.imageSrc ? (
//                     <Image
//                       src={item.imageSrc}
//                       alt={item.name}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
//                       className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-4xl opacity-50">
//                       {CATEGORY_EMOJI[item.category ?? 'main'] ?? '🍛'}
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-6 flex flex-col gap-2 flex-grow">
//                   <div className="flex items-start justify-between gap-3">
//                     <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-[#8A6652] transition-colors leading-snug">
//                       {item.name}
//                     </h3>
//                   </div>
//                   <p className="text-sm text-muted-foreground leading-relaxed font-medium line-clamp-3">
//                     {item.description}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </Container>
//       </Section>
// 
//       {/* ═══════════════════════════════════════════════════════════
//           SECTION 6 — FINAL CTA
//           ══════════════════════════════════════════════════════════= */}
//       <Section bg="white" className="py-16 md:py-24">
//         <Container className="max-w-3xl mx-auto text-center space-y-8">
//           <div className="space-y-4">
//             <Typography
//               variant="h2"
//               className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
//             >
//               Found something you’d like to know more about?
//             </Typography>
//             <Typography
//               variant="body-regular"
//               className="text-sm text-muted-foreground font-medium max-w-lg mx-auto leading-relaxed"
//             >
//               Talk to Café Serenity to ask about our menu, availability, or today’s preparation.
//             </Typography>
//           </div>
// 
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a
//               href={CONTACT_DETAILS.whatsapp}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full sm:w-auto min-h-[48px] px-8 rounded-full text-sm font-bold text-white shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2"
//               style={{ backgroundColor: '#8A6652', border: '2px solid #8A6652' }}
//             >
//               Talk to Us
//             </a>
//             <Link
//               href="/healthy-choices"
//               className="w-full sm:w-auto min-h-[48px] px-8 rounded-full border border-border bg-card hover:bg-secondary/40 text-sm font-bold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2"
//             >
//               Explore Healthy Choices
//             </Link>
//           </div>
//         </Container>
//       </Section>
//     </>
//   );
// }

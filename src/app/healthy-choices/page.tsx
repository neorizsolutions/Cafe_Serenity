// Preserved original implementation. Disabled while the restaurant menu is active.
// import Link from 'next/link';
// import Image from 'next/image';
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// 
// import { constructMetadata } from '@/utils/seo';
// import { HEALTHY_MEAL_PLANS } from '@/data/healthy-choices/plans';
// import { CONTACT_DETAILS } from '@/constants';
// 
// export const metadata = constructMetadata({
//   title: 'Healthy Choices | Good Food, Every Day',
//   description: 'Balanced, portion-conscious food options prepared fresh daily at Café Serenity, Kakkanad. Explore our everyday healthy choices starting from ₹169/meal.',
//   path: '/healthy-choices',
// });
// 
// export default function HealthyChoicesPage() {
//   const valueBox = HEALTHY_MEAL_PLANS.find((p) => p.id === 'balanced');
//   const targetPlans = HEALTHY_MEAL_PLANS.filter((p) => p.id !== 'balanced');
// 
//   return (
//     <>
//       {/* 1. Hero */}
//       <Section bg="muted" className="relative border-b border-border py-16 md:py-24 overflow-hidden">
//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full blur-3xl"
//           style={{ background: 'radial-gradient(circle, rgba(110,128,100,0.05) 0%, transparent 70%)' }}
//           aria-hidden="true"
//         />
// 
//         <Container className="text-center space-y-6 max-w-3xl mx-auto">
//           <Typography
//             variant="badge-label"
//             className="tracking-widest text-[11px] text-brand-green uppercase font-bold"
//           >
//             From Our Kitchen
//           </Typography>
//           <Typography
//             variant="h1"
//             className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground"
//           >
//             Better food for everyday life.
//           </Typography>
//           <Typography
//             variant="body-large"
//             className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium"
//           >
//             Healthy eating should feel natural — not restrictive. Our Healthy Choices are thoughtfully
//             prepared options for people looking for something lighter, balanced, or simply more mindful
//             for their day.
//           </Typography>
//           <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a
//               href="#plans-grid"
//               className="w-full sm:w-auto min-h-[44px] px-8 rounded-full bg-brand-green hover:bg-brand-green/90 text-xs font-bold text-white shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
//             >
//               Explore Our Options
//             </a>
//             <a
//               href={CONTACT_DETAILS.whatsapp}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full sm:w-auto min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-bold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
//             >
//               Talk to Us
//             </a>
//           </div>
//         </Container>
//       </Section>
// 
//       {/* 2. Everyday Value Box */}
//       {valueBox && (
//         <Section bg="white" className="py-16 md:py-24 border-b border-border">
//           <Container className="space-y-12">
//             <div className="text-center max-w-2xl mx-auto space-y-2">
//               <Typography variant="badge-label" className="text-brand-green tracking-wider text-[11px]">
//                 Our Everyday Favourite
//               </Typography>
//               <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
//                 The Everyday Value Box
//               </Typography>
//             </div>
// 
//             <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-border/60 bg-secondary/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-5xl mx-auto">
//               {/* Left Visual */}
//               <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-muted min-h-[250px] sm:min-h-[300px]">
//                 <Image
//                   src="/images/hero_meal_box.png"
//                   alt="Café Serenity Everyday Balanced Diet Box — fresh, portion-conscious meal"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 400px"
//                   priority
//                   className="object-cover"
//                 />
//               </div>
// 
//               {/* Right Content */}
//               <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
//                 <div className="space-y-3">
//                   <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
//                     The {valueBox.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-muted-foreground font-medium">
//                     {valueBox.description} A familiar, nourishing meal prepared fresh every morning —
//                     clean grains, local vegetables, and cold-pressed oils with no palm oil or MSG.
//                   </p>
//                 </div>
// 
//                 {/* Simple info strip — warm, not a dashboard */}
//                 <div className="grid grid-cols-3 gap-4 border-y border-border/60 py-4 text-center text-xs font-semibold">
//                   <div className="space-y-1">
//                     <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">
//                       Price
//                     </span>
//                     <span className="block text-foreground text-sm sm:text-base font-extrabold tracking-tight">
//                       {valueBox.price}
//                     </span>
//                   </div>
//                   <div className="space-y-1">
//                     <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">
//                       Oils Used
//                     </span>
//                     <span className="block text-foreground text-sm sm:text-base font-extrabold tracking-tight">
//                       Cold-Pressed
//                     </span>
//                   </div>
//                   <div className="space-y-1">
//                     <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">
//                       Kitchen
//                     </span>
//                     <span className="block text-brand-green text-sm sm:text-base font-extrabold tracking-tight">
//                       FSSAI Certified
//                     </span>
//                   </div>
//                 </div>
// 
//                 {/* CTAs */}
//                 <div className="flex flex-col sm:flex-row gap-4 pt-2">
//                   <a
//                     href={CONTACT_DETAILS.whatsapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="min-h-[44px] px-8 rounded-full bg-brand-green hover:bg-brand-green/90 text-xs font-bold text-white flex items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
//                   >
//                     Ask Us About This
//                   </a>
//                   <Link
//                     href={valueBox.path}
//                     className="min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-semibold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
//                   >
//                     Explore This Option
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </Section>
//       )}
// 
//       {/* 3. Plan Selection Grid */}
//       <Section bg="muted" className="py-16 md:py-24 border-b border-border" id="plans-grid">
//         <Container className="space-y-16">
//           <div className="text-center max-w-3xl mx-auto space-y-4">
//             <Typography
//               variant="badge-label"
//               className="text-brand-green tracking-widest text-[11px] font-bold uppercase"
//             >
//               Find what feels right for you
//             </Typography>
//             <Typography
//               variant="h2"
//               className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground"
//             >
//               Our Healthy Choices
//             </Typography>
//             <Typography
//               variant="body-large"
//               className="text-base text-muted-foreground font-medium"
//             >
//               Each option is prepared with care using fresh ingredients and thoughtful portions.
//               Explore what suits your everyday routine.
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {targetPlans.map((p) => (
//               <div
//                 key={p.id}
//                 className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
//               >
//                 {/* Visual */}
//                 <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
//                   <Image
//                     src={p.imageSrc || '/images/category_weight_loss.png'}
//                     alt={p.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 250px"
//                     loading="lazy"
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
// 
//                 {/* Card Body */}
//                 <div className="p-5 flex-grow flex flex-col justify-between gap-5">
//                   <div className="space-y-2">
//                     <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-brand-green transition-colors">
//                       {p.title}
//                     </h3>
//                     <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
//                       {p.description}
//                     </p>
//                     {/* Nutrition — secondary, compact, below description */}
//                     <p className="text-[10px] text-muted-foreground/70 font-semibold pt-1">
//                       {p.calories} · {p.protein}
//                     </p>
//                   </div>
// 
//                   <div className="pt-4 border-t border-border/60 flex items-center justify-between">
//                     <div>
//                       <span className="text-[9px] text-muted-foreground block font-bold uppercase tracking-wider">
//                         Starting at
//                       </span>
//                       <span className="text-xs font-black text-foreground block mt-0.5">
//                         {p.price}
//                       </span>
//                     </div>
//                     <Link
//                       href={p.path}
//                       className="min-h-[36px] px-4 rounded-full bg-brand-green hover:bg-brand-green/90 text-[11px] font-bold text-white shadow-sm flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-green active:scale-95"
//                     >
//                       Explore This Choice
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </Section>
// 
//       {/* 4. How It Works */}
//       <Section bg="white" className="py-16 md:py-24 border-b border-border">
//         <Container className="space-y-16 max-w-5xl mx-auto">
//           <div className="text-center space-y-3">
//             <Typography
//               variant="badge-label"
//               className="text-brand-green tracking-widest text-[11px] font-bold"
//             >
//               Getting Started
//             </Typography>
//             <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
//               How it works
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             {/* Step 1 */}
//             <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
//               <div className="mx-auto h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-lg font-black">
//                 1
//               </div>
//               <h4 className="text-base font-bold text-foreground">Browse Our Options</h4>
//               <p className="text-xs text-muted-foreground font-medium leading-relaxed">
//                 Take a look at our healthy choices and find what feels right for your everyday routine —
//                 lighter options, balanced meals, or something specific to your goals.
//               </p>
//             </div>
// 
//             {/* Step 2 */}
//             <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
//               <div className="mx-auto h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-lg font-black">
//                 2
//               </div>
//               <h4 className="text-base font-bold text-foreground">Talk to Us</h4>
//               <p className="text-xs text-muted-foreground font-medium leading-relaxed">
//                 Reach out via WhatsApp or visit us. We will help you understand the options and get
//                 you started — no complicated process involved.
//               </p>
//             </div>
// 
//             {/* Step 3 */}
//             <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
//               <div className="mx-auto h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-lg font-black">
//                 3
//               </div>
//               <h4 className="text-base font-bold text-foreground">Enjoy Fresh Food</h4>
//               <p className="text-xs text-muted-foreground font-medium leading-relaxed">
//                 Enjoy freshly prepared, wholesome meals from Café Serenity&apos;s FSSAI-certified kitchen.
//                 Good food, made for everyday.
//               </p>
//             </div>
//           </div>
//         </Container>
//       </Section>
// 
//       {/* 5. Why Choose Us — Trust & Quality */}
//       <Section bg="brand-light" className="py-16 md:py-24 border-b border-border">
//         <Container className="space-y-12 max-w-4xl mx-auto">
//           <div className="text-center space-y-3">
//             <Typography
//               variant="badge-label"
//               className="text-brand-green tracking-widest text-[11px] font-bold"
//             >
//               Made with care
//             </Typography>
//             <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
//               Prepared with care, every day.
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs font-semibold text-foreground/90">
//             {[
//               {
//                 title: 'No Palm Oil or MSG',
//                 desc: 'We use cold-pressed local oils and natural seasonings. No shortcuts in our kitchen.',
//               },
//               {
//                 title: 'Thoughtful Portions',
//                 desc: 'Each meal is portioned with everyday wellbeing in mind — satisfying, not heavy.',
//               },
//               {
//                 title: 'Convenient for Kakkanad',
//                 desc: 'Located near Civil Station, Kakkanad. Easy access for office pickup or a sit-down visit.',
//               },
//               {
//                 title: 'Fresh Preparation Daily',
//                 desc: 'Cooked every morning in our certified Kakkanad kitchen. Zero preservatives.',
//               },
//             ].map((pt, i) => (
//               <div
//                 key={i}
//                 className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5 hover:border-brand-green/25 transition-colors"
//               >
//                 <svg
//                   className="h-5 w-5 text-brand-green shrink-0 mt-0.5"
//                   fill="none"
//                   strokeWidth="3.5"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                 </svg>
//                 <div className="space-y-1">
//                   <span className="block font-bold text-foreground text-sm">{pt.title}</span>
//                   <span className="block font-medium text-muted-foreground text-xs leading-relaxed">
//                     {pt.desc}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
// 
//           {/* FSSAI note */}
//           <div className="rounded-2xl border border-border/60 bg-card/60 p-5 text-center text-xs text-muted-foreground font-semibold max-w-xl mx-auto">
//             🥣 Café Serenity is a registered kitchen in Kochi, Kerala. FSSAI Lic No.{' '}
//             <span className="text-foreground font-bold">{CONTACT_DETAILS.fssaiNumber}</span>
//           </div>
// 
//           {/* Cross-Navigation to Café Menu */}
//           <div className="rounded-3xl border border-border/60 bg-card/40 p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between hover:border-border transition-colors mt-16">
//             <div className="space-y-2 text-center md:text-left">
//               <h4 className="text-base font-bold text-foreground">
//                 Looking for something more familiar?
//               </h4>
//               <p className="text-xs text-muted-foreground max-w-xl leading-relaxed font-medium">
//                 Healthy Choices are just one part of Café Serenity. Explore our everyday café
//                 favourites — South Indian breakfast, fresh steamed idlis, crispy vadas, Kerala
//                 dishes, and traditional filter coffee.
//               </p>
//             </div>
//             <Link
//               href="/cafe-menu"
//               className="min-h-[44px] px-6 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-bold text-foreground flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
//             >
//               View Café Menu →
//             </Link>
//           </div>
//         </Container>
//       </Section>
//     </>
//   );
// }

// Legacy URLs are redirected in next.config.ts; keep this route inactive as a fallback.
import { notFound } from 'next/navigation';
export default function DisabledPage() { notFound(); }

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import Link from 'next/link';
// import Image from 'next/image';
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// 
// import { constructMetadata } from '@/utils/seo';
// import { HEALTHY_MEAL_PLANS } from '@/data/healthy-choices/plans';
// import { CONTACT_DETAILS } from '@/constants';
// 
// export const metadata = constructMetadata({
//   title: 'Healthy Choices | Good Food, Every Day',
//   description: 'Balanced, portion-conscious food options prepared fresh daily at Café Serenity, Kakkanad. Explore our everyday healthy choices starting from ₹169/meal.',
//   path: '/healthy-choices',
// });
// 
// export default function HealthyChoicesPage() {
//   const valueBox = HEALTHY_MEAL_PLANS.find((p) => p.id === 'balanced');
//   const targetPlans = HEALTHY_MEAL_PLANS.filter((p) => p.id !== 'balanced');
// 
//   return (
//     <>
//       {/* 1. Hero */}
//       <Section bg="muted" className="relative border-b border-border py-16 md:py-24 overflow-hidden">
//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full blur-3xl"
//           style={{ background: 'radial-gradient(circle, rgba(110,128,100,0.05) 0%, transparent 70%)' }}
//           aria-hidden="true"
//         />
// 
//         <Container className="text-center space-y-6 max-w-3xl mx-auto">
//           <Typography
//             variant="badge-label"
//             className="tracking-widest text-[11px] text-brand-green uppercase font-bold"
//           >
//             From Our Kitchen
//           </Typography>
//           <Typography
//             variant="h1"
//             className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground"
//           >
//             Better food for everyday life.
//           </Typography>
//           <Typography
//             variant="body-large"
//             className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium"
//           >
//             Healthy eating should feel natural — not restrictive. Our Healthy Choices are thoughtfully
//             prepared options for people looking for something lighter, balanced, or simply more mindful
//             for their day.
//           </Typography>
//           <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a
//               href="#plans-grid"
//               className="w-full sm:w-auto min-h-[44px] px-8 rounded-full bg-brand-green hover:bg-brand-green/90 text-xs font-bold text-white shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
//             >
//               Explore Our Options
//             </a>
//             <a
//               href={CONTACT_DETAILS.whatsapp}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full sm:w-auto min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-bold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
//             >
//               Talk to Us
//             </a>
//           </div>
//         </Container>
//       </Section>
// 
//       {/* 2. Everyday Value Box */}
//       {valueBox && (
//         <Section bg="white" className="py-16 md:py-24 border-b border-border">
//           <Container className="space-y-12">
//             <div className="text-center max-w-2xl mx-auto space-y-2">
//               <Typography variant="badge-label" className="text-brand-green tracking-wider text-[11px]">
//                 Our Everyday Favourite
//               </Typography>
//               <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
//                 The Everyday Value Box
//               </Typography>
//             </div>
// 
//             <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-border/60 bg-secondary/20 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-5xl mx-auto">
//               {/* Left Visual */}
//               <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-muted min-h-[250px] sm:min-h-[300px]">
//                 <Image
//                   src="/images/hero_meal_box.png"
//                   alt="Café Serenity Everyday Balanced Diet Box — fresh, portion-conscious meal"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 400px"
//                   priority
//                   className="object-cover"
//                 />
//               </div>
// 
//               {/* Right Content */}
//               <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
//                 <div className="space-y-3">
//                   <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
//                     The {valueBox.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-muted-foreground font-medium">
//                     {valueBox.description} A familiar, nourishing meal prepared fresh every morning —
//                     clean grains, local vegetables, and cold-pressed oils with no palm oil or MSG.
//                   </p>
//                 </div>
// 
//                 {/* Simple info strip — warm, not a dashboard */}
//                 <div className="grid grid-cols-3 gap-4 border-y border-border/60 py-4 text-center text-xs font-semibold">
//                   <div className="space-y-1">
//                     <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">
//                       Price
//                     </span>
//                     <span className="block text-foreground text-sm sm:text-base font-extrabold tracking-tight">
//                       {valueBox.price}
//                     </span>
//                   </div>
//                   <div className="space-y-1">
//                     <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">
//                       Oils Used
//                     </span>
//                     <span className="block text-foreground text-sm sm:text-base font-extrabold tracking-tight">
//                       Cold-Pressed
//                     </span>
//                   </div>
//                   <div className="space-y-1">
//                     <span className="block text-muted-foreground text-[9px] uppercase tracking-wider font-extrabold">
//                       Kitchen
//                     </span>
//                     <span className="block text-brand-green text-sm sm:text-base font-extrabold tracking-tight">
//                       FSSAI Certified
//                     </span>
//                   </div>
//                 </div>
// 
//                 {/* CTAs */}
//                 <div className="flex flex-col sm:flex-row gap-4 pt-2">
//                   <a
//                     href={CONTACT_DETAILS.whatsapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="min-h-[44px] px-8 rounded-full bg-brand-green hover:bg-brand-green/90 text-xs font-bold text-white flex items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
//                   >
//                     Ask Us About This
//                   </a>
//                   <Link
//                     href={valueBox.path}
//                     className="min-h-[44px] px-8 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-semibold text-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-center"
//                   >
//                     Explore This Option
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </Section>
//       )}
// 
//       {/* 3. Plan Selection Grid */}
//       <Section bg="muted" className="py-16 md:py-24 border-b border-border" id="plans-grid">
//         <Container className="space-y-16">
//           <div className="text-center max-w-3xl mx-auto space-y-4">
//             <Typography
//               variant="badge-label"
//               className="text-brand-green tracking-widest text-[11px] font-bold uppercase"
//             >
//               Find what feels right for you
//             </Typography>
//             <Typography
//               variant="h2"
//               className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground"
//             >
//               Our Healthy Choices
//             </Typography>
//             <Typography
//               variant="body-large"
//               className="text-base text-muted-foreground font-medium"
//             >
//               Each option is prepared with care using fresh ingredients and thoughtful portions.
//               Explore what suits your everyday routine.
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {targetPlans.map((p) => (
//               <div
//                 key={p.id}
//                 className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
//               >
//                 {/* Visual */}
//                 <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
//                   <Image
//                     src={p.imageSrc || '/images/category_weight_loss.png'}
//                     alt={p.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 250px"
//                     loading="lazy"
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
// 
//                 {/* Card Body */}
//                 <div className="p-5 flex-grow flex flex-col justify-between gap-5">
//                   <div className="space-y-2">
//                     <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-brand-green transition-colors">
//                       {p.title}
//                     </h3>
//                     <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
//                       {p.description}
//                     </p>
//                     {/* Nutrition — secondary, compact, below description */}
//                     <p className="text-[10px] text-muted-foreground/70 font-semibold pt-1">
//                       {p.calories} · {p.protein}
//                     </p>
//                   </div>
// 
//                   <div className="pt-4 border-t border-border/60 flex items-center justify-between">
//                     <div>
//                       <span className="text-[9px] text-muted-foreground block font-bold uppercase tracking-wider">
//                         Starting at
//                       </span>
//                       <span className="text-xs font-black text-foreground block mt-0.5">
//                         {p.price}
//                       </span>
//                     </div>
//                     <Link
//                       href={p.path}
//                       className="min-h-[36px] px-4 rounded-full bg-brand-green hover:bg-brand-green/90 text-[11px] font-bold text-white shadow-sm flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-green active:scale-95"
//                     >
//                       Explore This Choice
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </Section>
// 
//       {/* 4. How It Works */}
//       <Section bg="white" className="py-16 md:py-24 border-b border-border">
//         <Container className="space-y-16 max-w-5xl mx-auto">
//           <div className="text-center space-y-3">
//             <Typography
//               variant="badge-label"
//               className="text-brand-green tracking-widest text-[11px] font-bold"
//             >
//               Getting Started
//             </Typography>
//             <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
//               How it works
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             {/* Step 1 */}
//             <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
//               <div className="mx-auto h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-lg font-black">
//                 1
//               </div>
//               <h4 className="text-base font-bold text-foreground">Browse Our Options</h4>
//               <p className="text-xs text-muted-foreground font-medium leading-relaxed">
//                 Take a look at our healthy choices and find what feels right for your everyday routine —
//                 lighter options, balanced meals, or something specific to your goals.
//               </p>
//             </div>
// 
//             {/* Step 2 */}
//             <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
//               <div className="mx-auto h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-lg font-black">
//                 2
//               </div>
//               <h4 className="text-base font-bold text-foreground">Talk to Us</h4>
//               <p className="text-xs text-muted-foreground font-medium leading-relaxed">
//                 Reach out via WhatsApp or visit us. We will help you understand the options and get
//                 you started — no complicated process involved.
//               </p>
//             </div>
// 
//             {/* Step 3 */}
//             <div className="space-y-4 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
//               <div className="mx-auto h-12 w-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-lg font-black">
//                 3
//               </div>
//               <h4 className="text-base font-bold text-foreground">Enjoy Fresh Food</h4>
//               <p className="text-xs text-muted-foreground font-medium leading-relaxed">
//                 Enjoy freshly prepared, wholesome meals from Café Serenity&apos;s FSSAI-certified kitchen.
//                 Good food, made for everyday.
//               </p>
//             </div>
//           </div>
//         </Container>
//       </Section>
// 
//       {/* 5. Why Choose Us — Trust & Quality */}
//       <Section bg="brand-light" className="py-16 md:py-24 border-b border-border">
//         <Container className="space-y-12 max-w-4xl mx-auto">
//           <div className="text-center space-y-3">
//             <Typography
//               variant="badge-label"
//               className="text-brand-green tracking-widest text-[11px] font-bold"
//             >
//               Made with care
//             </Typography>
//             <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-foreground">
//               Prepared with care, every day.
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs font-semibold text-foreground/90">
//             {[
//               {
//                 title: 'No Palm Oil or MSG',
//                 desc: 'We use cold-pressed local oils and natural seasonings. No shortcuts in our kitchen.',
//               },
//               {
//                 title: 'Thoughtful Portions',
//                 desc: 'Each meal is portioned with everyday wellbeing in mind — satisfying, not heavy.',
//               },
//               {
//                 title: 'Convenient for Kakkanad',
//                 desc: 'Located near Civil Station, Kakkanad. Easy access for office pickup or a sit-down visit.',
//               },
//               {
//                 title: 'Fresh Preparation Daily',
//                 desc: 'Cooked every morning in our certified Kakkanad kitchen. Zero preservatives.',
//               },
//             ].map((pt, i) => (
//               <div
//                 key={i}
//                 className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5 hover:border-brand-green/25 transition-colors"
//               >
//                 <svg
//                   className="h-5 w-5 text-brand-green shrink-0 mt-0.5"
//                   fill="none"
//                   strokeWidth="3.5"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                 </svg>
//                 <div className="space-y-1">
//                   <span className="block font-bold text-foreground text-sm">{pt.title}</span>
//                   <span className="block font-medium text-muted-foreground text-xs leading-relaxed">
//                     {pt.desc}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
// 
//           {/* FSSAI note */}
//           <div className="rounded-2xl border border-border/60 bg-card/60 p-5 text-center text-xs text-muted-foreground font-semibold max-w-xl mx-auto">
//             🥣 Café Serenity is a registered kitchen in Kochi, Kerala. FSSAI Lic No.{' '}
//             <span className="text-foreground font-bold">{CONTACT_DETAILS.fssaiNumber}</span>
//           </div>
// 
//           {/* Cross-Navigation to Café Menu */}
//           <div className="rounded-3xl border border-border/60 bg-card/40 p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between hover:border-border transition-colors mt-16">
//             <div className="space-y-2 text-center md:text-left">
//               <h4 className="text-base font-bold text-foreground">
//                 Looking for something more familiar?
//               </h4>
//               <p className="text-xs text-muted-foreground max-w-xl leading-relaxed font-medium">
//                 Healthy Choices are just one part of Café Serenity. Explore our everyday café
//                 favourites — South Indian breakfast, fresh steamed idlis, crispy vadas, Kerala
//                 dishes, and traditional filter coffee.
//               </p>
//             </div>
//             <Link
//               href="/cafe-menu"
//               className="min-h-[44px] px-6 rounded-full border border-border bg-background hover:bg-secondary/40 text-xs font-bold text-foreground flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
//             >
//               View Café Menu →
//             </Link>
//           </div>
//         </Container>
//       </Section>
//     </>
//   );
// }

// Preserved original implementation. Disabled while the restaurant menu is active.
// 'use client';
// 
// import Link from 'next/link';
// import Image from 'next/image';
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import MotionWrapper from '@/components/common/MotionWrapper';
// import { HEALTHY_MEAL_PLANS } from '@/data/healthy-choices/plans';
// 
// interface CategoryCardProps {
//   imageSrc: string;
//   title: string;
//   description: string;
//   price: string;
//   link: string;
// }
// 
// function CategoryCard({ imageSrc, title, description, price, link }: CategoryCardProps) {
//   return (
//     <div className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
//       {/* Visual Frame */}
//       <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={title}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
//           loading="lazy"
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>
// 
//       {/* Description Panel */}
//       <div className="p-5 flex-grow flex flex-col justify-between gap-5">
//         <div className="space-y-2">
//           <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">
//             {title}
//           </Typography>
//           <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground line-clamp-3 font-medium">
//             {description}
//           </Typography>
//         </div>
// 
//         <div className="pt-4 border-t border-border/60 flex items-center justify-between">
//           <span className="text-sm font-black text-foreground block">{price}</span>
//           <Link
//             href={link}
//             className="group/btn inline-flex h-9 items-center justify-center rounded-full bg-brand-gold px-4 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
//             aria-label={`Learn more about ${title}`}
//           >
//             <span>Details</span>
//             <svg className="h-3 w-3 fill-current ml-1 transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10h3l-4 4-4-4h3V8h2v4z" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// 
// export default function MealExperienceSection() {
//   const balancedPlan = HEALTHY_MEAL_PLANS.find(plan => plan.id === 'balanced');
//   const otherPlans = HEALTHY_MEAL_PLANS.filter(plan => plan.id !== 'balanced');
// 
//   return (
//     <Section bg="white" className="relative overflow-hidden" id="healthy-choices-info">
//       <Container className="space-y-16">
//         {/* Top Grid Intro */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
//             Healthy Choices
//           </Typography>
//           <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             Thoughtful Food Options
//           </Typography>
//           <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
//             Simple, natural meals for your everyday rhythm. Prepared fresh with care.
//           </Typography>
//         </div>
// 
//         {/* 1. Signature Spotlight Card */}
//         {balancedPlan && (
//           <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500 lg:items-stretch group">
//             {/* Left Visual */}
//             <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-muted min-h-[300px] overflow-hidden">
//               <Image
//                 src="/images/hero_meal_box.png"
//                 alt="Café Serenity Everyday Meal"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 500px"
//                 priority
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
// 
//             {/* Right Content */}
//             <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
//               <div className="space-y-2">
//                 <Typography variant="badge-label" className="text-brand-gold tracking-widest text-[10px]">
//                   The Everyday Choice
//                 </Typography>
//                 <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
//                   {balancedPlan.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-muted-foreground font-medium">
//                   {balancedPlan.description}
//                 </p>
//               </div>
// 
//               {/* CTAs */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/60">
//                 <Link
//                   href={balancedPlan.path}
//                   className="group flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-8 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer text-center"
//                 >
//                   <span>Explore the Menu</span>
//                 </Link>
//                 <Link
//                   href="/#contact"
//                   className="flex h-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-xs font-semibold text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98] text-center"
//                 >
//                   Talk To Us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
// 
//         {/* 2. Meal Category Grid */}
//         <div className="space-y-8">
//           <div className="text-center space-y-2">
//             <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
//               More Options
//             </Typography>
//             <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
//               We also offer variations tailored to different dietary needs.
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {otherPlans.map((p) => (
//               <MotionWrapper key={p.id} animation="fade-up">
//                 <CategoryCard
//                   imageSrc={p.imageSrc || '/images/category_weight_loss.png'}
//                   title={p.title}
//                   description={p.description}
//                   price={p.price.replace(' / meal', ' / Meal')}
//                   link={p.path}
//                 />
//               </MotionWrapper>
//             ))}
//           </div>
// 
//           <div className="shrink-0 w-full sm:w-auto text-center pt-4">
//             <Link
//               href="/healthy-choices"
//               className="group inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full border border-border px-8 text-xs font-bold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
//             >
//               See All Healthy Choices
//             </Link>
//           </div>
//         </div>
// 
//       </Container>
//     </Section>
//   );
// }

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// 'use client';
// 
// import Link from 'next/link';
// import Image from 'next/image';
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import MotionWrapper from '@/components/common/MotionWrapper';
// import { HEALTHY_MEAL_PLANS } from '@/data/healthy-choices/plans';
// 
// interface CategoryCardProps {
//   imageSrc: string;
//   title: string;
//   description: string;
//   price: string;
//   link: string;
// }
// 
// function CategoryCard({ imageSrc, title, description, price, link }: CategoryCardProps) {
//   return (
//     <div className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
//       {/* Visual Frame */}
//       <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={title}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
//           loading="lazy"
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>
// 
//       {/* Description Panel */}
//       <div className="p-5 flex-grow flex flex-col justify-between gap-5">
//         <div className="space-y-2">
//           <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">
//             {title}
//           </Typography>
//           <Typography variant="body-regular" className="text-xs leading-relaxed text-muted-foreground line-clamp-3 font-medium">
//             {description}
//           </Typography>
//         </div>
// 
//         <div className="pt-4 border-t border-border/60 flex items-center justify-between">
//           <span className="text-sm font-black text-foreground block">{price}</span>
//           <Link
//             href={link}
//             className="group/btn inline-flex h-9 items-center justify-center rounded-full bg-brand-gold px-4 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
//             aria-label={`Learn more about ${title}`}
//           >
//             <span>Details</span>
//             <svg className="h-3 w-3 fill-current ml-1 transition-transform duration-300 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" aria-hidden="true">
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10h3l-4 4-4-4h3V8h2v4z" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// 
// export default function MealExperienceSection() {
//   const balancedPlan = HEALTHY_MEAL_PLANS.find(plan => plan.id === 'balanced');
//   const otherPlans = HEALTHY_MEAL_PLANS.filter(plan => plan.id !== 'balanced');
// 
//   return (
//     <Section bg="white" className="relative overflow-hidden" id="healthy-choices-info">
//       <Container className="space-y-16">
//         {/* Top Grid Intro */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
//             Healthy Choices
//           </Typography>
//           <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             Thoughtful Food Options
//           </Typography>
//           <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
//             Simple, natural meals for your everyday rhythm. Prepared fresh with care.
//           </Typography>
//         </div>
// 
//         {/* 1. Signature Spotlight Card */}
//         {balancedPlan && (
//           <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500 lg:items-stretch group">
//             {/* Left Visual */}
//             <div className="relative aspect-video lg:aspect-auto lg:col-span-5 bg-muted min-h-[300px] overflow-hidden">
//               <Image
//                 src="/images/hero_meal_box.png"
//                 alt="Café Serenity Everyday Meal"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 500px"
//                 priority
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
// 
//             {/* Right Content */}
//             <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center space-y-6">
//               <div className="space-y-2">
//                 <Typography variant="badge-label" className="text-brand-gold tracking-widest text-[10px]">
//                   The Everyday Choice
//                 </Typography>
//                 <h3 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl">
//                   {balancedPlan.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-muted-foreground font-medium">
//                   {balancedPlan.description}
//                 </p>
//               </div>
// 
//               {/* CTAs */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/60">
//                 <Link
//                   href={balancedPlan.path}
//                   className="group flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-8 text-xs font-bold text-brand-dark shadow hover:bg-brand-gold/90 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer text-center"
//                 >
//                   <span>Explore the Menu</span>
//                 </Link>
//                 <Link
//                   href="/#contact"
//                   className="flex h-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm px-8 text-xs font-semibold text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5 active:scale-[0.98] text-center"
//                 >
//                   Talk To Us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
// 
//         {/* 2. Meal Category Grid */}
//         <div className="space-y-8">
//           <div className="text-center space-y-2">
//             <Typography variant="h3" className="text-xl font-bold text-foreground tracking-tight">
//               More Options
//             </Typography>
//             <Typography variant="body-regular" className="text-xs text-muted-foreground font-medium">
//               We also offer variations tailored to different dietary needs.
//             </Typography>
//           </div>
// 
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {otherPlans.map((p) => (
//               <MotionWrapper key={p.id} animation="fade-up">
//                 <CategoryCard
//                   imageSrc={p.imageSrc || '/images/category_weight_loss.png'}
//                   title={p.title}
//                   description={p.description}
//                   price={p.price.replace(' / meal', ' / Meal')}
//                   link={p.path}
//                 />
//               </MotionWrapper>
//             ))}
//           </div>
// 
//           <div className="shrink-0 w-full sm:w-auto text-center pt-4">
//             <Link
//               href="/healthy-choices"
//               className="group inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full border border-border px-8 text-xs font-bold text-foreground hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
//             >
//               See All Healthy Choices
//             </Link>
//           </div>
//         </div>
// 
//       </Container>
//     </Section>
//   );
// }

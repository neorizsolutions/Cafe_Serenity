// Preserved original implementation. Disabled while the restaurant menu is active.
// 'use client';
// 
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import MotionWrapper from '@/components/common/MotionWrapper';
// import { CONTACT_DETAILS } from '@/constants';
// 
// export default function TrustCenter() {
//   return (
//     <Section bg="white" className="relative border-t border-border overflow-hidden">
//       <Container className="space-y-16">
//         
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//
//           <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             Our Kitchen Standards
//           </Typography>
//           <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
//             We maintain absolute transparency on how your food is prepared. From fresh ingredients to a spotless kitchen.
//           </Typography>
//         </div>
// 
//         {/* Pillars of Trust */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Hygienic Preparation</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Strict glove-wearing policies, RO water filtration, and daily deep kitchen sanitization.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18M5.3 5.3l13.4 13.4M5.3 18.7L18.7 5.3" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Ingredient Quality</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Fresh local vegetables, lean proteins, and complex carbohydrates. Zero preservatives or artificial flavors.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Secure Packaging</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Food-grade, leak-proof packaging to ensure your meal arrives fresh and exactly as intended.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Mindful Cooking</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   We use measured amounts of cold-pressed oils and focus on cooking techniques that preserve nutrients.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Fresh Daily</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Prepared fresh every morning at our Kakkanad café. No overnight storing of cooked meals.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Expert Guidance</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Our Healthy Choices menu is developed in consultation with nutritionists to ensure balanced everyday eating.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
//         </div>
// 
//         {/* Food Safety & License Area */}
//         <div className="rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 p-8 text-center space-y-4 max-w-2xl mx-auto shadow-sm hover:shadow-md hover:border-brand-gold/25 transition-all duration-500 group relative">
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
// 
//           <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
//             Licensed Kitchen Operations
//           </h4>
//           <p className="text-xs leading-relaxed text-muted-foreground max-w-md mx-auto font-medium">
//             FSSAI certified operations and safety-registered kitchen guidelines.
//           </p>
//           <div className="inline-flex items-center gap-2 rounded-xl bg-background px-5 py-2 text-xs font-extrabold text-foreground border border-border/80 shadow-sm mt-2">
//             <svg className="h-4 w-4 text-brand-gold shrink-0" fill="none" strokeWidth="3.0" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//               <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//             </svg>
//             <span>FSSAI License: {CONTACT_DETAILS.fssaiNumber}</span>
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
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import MotionWrapper from '@/components/common/MotionWrapper';
// import { CONTACT_DETAILS } from '@/constants';
// 
// export default function TrustCenter() {
//   return (
//     <Section bg="white" className="relative border-t border-border overflow-hidden">
//       <Container className="space-y-16">
//         
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
//             Verified Standards
//           </Typography>
//           <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             Our Kitchen Standards
//           </Typography>
//           <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
//             We maintain absolute transparency on how your food is prepared. From fresh ingredients to a spotless kitchen.
//           </Typography>
//         </div>
// 
//         {/* Pillars of Trust */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Hygienic Preparation</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Strict glove-wearing policies, RO water filtration, and daily deep kitchen sanitization.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18M5.3 5.3l13.4 13.4M5.3 18.7L18.7 5.3" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Ingredient Quality</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Fresh local vegetables, lean proteins, and complex carbohydrates. Zero preservatives or artificial flavors.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Secure Packaging</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Food-grade, leak-proof packaging to ensure your meal arrives fresh and exactly as intended.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Mindful Cooking</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   We use measured amounts of cold-pressed oils and focus on cooking techniques that preserve nutrients.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Fresh Daily</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Prepared fresh every morning at our Kakkanad café. No overnight storing of cooked meals.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up">
//             <div className="group/guideline p-6 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full space-y-4">
//               <div className="space-y-4">
//                 <div className="h-10 w-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/guideline:scale-105">
//                   <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2.0" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                 </div>
//                 <Typography variant="h3" className="text-base font-bold text-foreground tracking-tight">Expert Guidance</Typography>
//                 <p className="text-xs text-muted-foreground leading-relaxed font-medium">
//                   Our Healthy Choices menu is developed in consultation with nutritionists to ensure balanced everyday eating.
//                 </p>
//               </div>
//             </div>
//           </MotionWrapper>
//         </div>
// 
//         {/* Food Safety & License Area */}
//         <div className="rounded-3xl border border-brand-gold/15 bg-white/70 dark:bg-card/75 p-8 text-center space-y-4 max-w-2xl mx-auto shadow-sm hover:shadow-md hover:border-brand-gold/25 transition-all duration-500 group relative">
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
// 
//           <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
//             Licensed Kitchen Operations
//           </h4>
//           <p className="text-xs leading-relaxed text-muted-foreground max-w-md mx-auto font-medium">
//             FSSAI certified operations and safety-registered kitchen guidelines.
//           </p>
//           <div className="inline-flex items-center gap-2 rounded-xl bg-background px-5 py-2 text-xs font-extrabold text-foreground border border-border/80 shadow-sm mt-2">
//             <svg className="h-4 w-4 text-brand-gold shrink-0" fill="none" strokeWidth="3.0" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//               <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//             </svg>
//             <span>FSSAI License: {CONTACT_DETAILS.fssaiNumber}</span>
//           </div>
//         </div>
// 
//       </Container>
//     </Section>
//   );
// }

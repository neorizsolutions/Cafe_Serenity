// Preserved original implementation. Disabled while the restaurant menu is active.
// 'use client';
// 
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import MotionWrapper from '@/components/common/MotionWrapper';
// 
// interface StepCardProps {
//   number: string;
//   title: string;
//   description: string;
// }
// 
// function StepCard({ number, title, description }: StepCardProps) {
//   return (
//     <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/25 flex flex-col justify-between h-full space-y-4">
//       {/* Dynamic card highlight on hover */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
//       
//       <div className="space-y-4">
//         {/* Crisp circular indicator */}
//         <div className="h-8 w-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xs font-black shadow-sm border border-brand-gold/5 transition-transform duration-300 group-hover:scale-105">
//           {number}
//         </div>
//         <Typography variant="h3" className="text-sm font-bold text-foreground tracking-tight">
//           {title}
//         </Typography>
//         <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }
// 
// export default function HowItWorks() {
//   return (
//     <Section bg="muted" className="relative border-t border-border overflow-hidden">
//       <Container className="space-y-16">
//         
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//
//           <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             A Simple Food Experience
//           </Typography>
//           <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
//             No complicated forms or sign-ups. Just good food, prepared fresh, and ready when you need it.
//           </Typography>
//         </div>
// 
//         {/* Three Steps Stepper Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
//           <MotionWrapper animation="fade-up">
//             <StepCard
//               number="01"
//               title="Explore Our Food"
//               description="Browse our everyday café favourites or explore our nutritionist-guided healthy choices."
//             />
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up" transition={{ delay: 0.1 }}>
//             <StepCard
//               number="02"
//               title="Find What You Like"
//               description="Whether it's a hot morning dosa or a clean weekday lunch, find exactly what fits your day."
//             />
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up" transition={{ delay: 0.2 }}>
//             <StepCard
//               number="03"
//               title="Talk To Us"
//               description="Reach out directly via WhatsApp or drop by our Kakkanad café. We prepare it fresh for you."
//             />
//           </MotionWrapper>
//         </div>
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
// 
// interface StepCardProps {
//   number: string;
//   title: string;
//   description: string;
// }
// 
// function StepCard({ number, title, description }: StepCardProps) {
//   return (
//     <div className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/25 flex flex-col justify-between h-full space-y-4">
//       {/* Dynamic card highlight on hover */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
//       
//       <div className="space-y-4">
//         {/* Crisp circular indicator */}
//         <div className="h-8 w-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xs font-black shadow-sm border border-brand-gold/5 transition-transform duration-300 group-hover:scale-105">
//           {number}
//         </div>
//         <Typography variant="h3" className="text-sm font-bold text-foreground tracking-tight">
//           {title}
//         </Typography>
//         <p className="text-[11px] leading-relaxed text-muted-foreground font-medium">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }
// 
// export default function HowItWorks() {
//   return (
//     <Section bg="muted" className="relative border-t border-border overflow-hidden">
//       <Container className="space-y-16">
//         
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Typography variant="badge-label" className="tracking-widest text-[11px] text-brand-gold">
//             How It Works
//           </Typography>
//           <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             A Simple Food Experience
//           </Typography>
//           <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
//             No complicated forms or sign-ups. Just good food, prepared fresh, and ready when you need it.
//           </Typography>
//         </div>
// 
//         {/* Three Steps Stepper Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
//           <MotionWrapper animation="fade-up">
//             <StepCard
//               number="01"
//               title="Explore Our Food"
//               description="Browse our everyday café favourites or explore our nutritionist-guided healthy choices."
//             />
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up" transition={{ delay: 0.1 }}>
//             <StepCard
//               number="02"
//               title="Find What You Like"
//               description="Whether it's a hot morning dosa or a clean weekday lunch, find exactly what fits your day."
//             />
//           </MotionWrapper>
// 
//           <MotionWrapper animation="fade-up" transition={{ delay: 0.2 }}>
//             <StepCard
//               number="03"
//               title="Talk To Us"
//               description="Reach out directly via WhatsApp or drop by our Kakkanad café. We prepare it fresh for you."
//             />
//           </MotionWrapper>
//         </div>
//       </Container>
//     </Section>
//   );
// }

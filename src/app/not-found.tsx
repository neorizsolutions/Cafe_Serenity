import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';

export default function NotFound() {
  return <section className="cafe-not-found" aria-labelledby="not-found-heading"><Container>
    <div className="not-found-layout">
      <div className="not-found-copy"><p className="not-found-status">404 · Page not found</p><h1 id="not-found-heading">This page isn’t<br /><span>on the menu.</span></h1><p className="not-found-description">Looks like you’ve taken a little detour. There’s still plenty of good food to discover at Café Serenity.</p><div className="not-found-actions"><Link href="/cafe-menu" className="not-found-primary">Explore our menu <span aria-hidden="true">↗</span></Link><Link href="/" className="not-found-home">Back to home <span aria-hidden="true">→</span></Link></div><p className="not-found-help">Looking for something specific? <Link href="/contact">Talk to our café team.</Link></p></div>
      <div className="not-found-art"><div className="not-found-food"><Image src="/images/page-not-found.svg" alt="404 page not found illustration with a browser window and magnifying glass" fill sizes="(max-width: 768px) 90vw, 45vw" className="object-contain" /></div></div>
    </div>
  </Container></section>;
}

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import Link from 'next/link';
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// 
// export default function NotFound() {
//   return (
//     <Section bg="muted" className="min-h-[80vh] flex items-center justify-center py-16">
//       <Container className="max-w-xl text-center space-y-8">
//         
//         {/* Friendly Graphic Illustration */}
//         <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary text-4xl animate-bounce">
//           🥦
//         </div>
// 
//         <div className="space-y-3">
//           <span className="inline-flex rounded-full bg-destructive/10 px-3 py-0.5 text-xs font-bold text-destructive uppercase tracking-widest">
//             Page Not Found
//           </span>
//           <Typography variant="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             Looking for something fresh?
//           </Typography>
//           <Typography variant="body-large" className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
//             The page you are looking for has been replanted or shifted. Let&apos;s guide you back to our healthy daily meals.
//           </Typography>
//         </div>
// 
//         {/* Action Button cluster */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Link
//             href="/"
//             className="flex h-11 items-center justify-center rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground hover:bg-primary/95 transition-all shadow-sm active:scale-95"
//           >
//             Back to Home
//           </Link>
//           <Link
//             href="/healthy-choices"
//             className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-8 text-xs font-bold text-foreground hover:bg-secondary transition-all"
//           >
//             Explore Healthy Choices
//           </Link>
//           <Link
//             href="/contact"
//             className="flex h-11 items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-6 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
//           >
//             Chat Support
//           </Link>
//         </div>
// 
//         {/* Future Search Placement Indicator */}
//         <div className="max-w-md mx-auto p-4 rounded-xl border border-dashed border-border bg-card/65 text-xs text-muted-foreground">
//           🔍 Need help finding a dish? Our unified recipe search engine will be launching here soon.
//         </div>
// 
//       </Container>
//     </Section>
//   );
// }

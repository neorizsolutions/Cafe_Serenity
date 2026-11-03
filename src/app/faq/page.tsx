import Link from 'next/link';
import { FAQS } from '@/data/faqs';
import { constructMetadata, getFAQSchema } from '@/utils/seo';
export const metadata = constructMetadata({title:'FAQs — Menu, Portions & Visiting',description:'Answers about Café Serenity’s Biriyani portions, snacks, prices, location and contacting the café.',path:'/faq'});
export default function FAQPage() { return <><section className="brand-page-intro"><div><h1>A few things<br /><span>you might wonder.</span></h1><p>From portion choices to planning a visit, here are some useful answers before your next café stop.</p></div></section><section className="brand-faq-page"><div className="brand-faq-list">{FAQS.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div><div className="brand-faq-help"><h2>Still have a question?</h2><p>Our team can help with the details that matter to your visit.</p><Link href="/contact" className="brand-button">Talk to Café Serenity ↗</Link></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(getFAQSchema(FAQS)).replace(/</g,'\u003c')}} /></>; }

// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import TrustCenter from '@/components/home/TrustCenter';
// import { constructMetadata } from '@/utils/seo';
// 
// export const metadata = constructMetadata({
//   title: 'Help Center & Frequently Asked Questions (FAQ)',
//   description: 'Find answers about our kitchen standards, healthy choices, and fresh morning café breakfast.',
// });
// 
// export default function FAQPage() {
//   return (
//     <>
//       <Section bg="muted" className="py-12 border-b border-border">
//         <Container className="text-center space-y-4">
//           <Typography variant="badge-label">Help Desk</Typography>
//           <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             Frequently Asked Questions
//           </Typography>
//           <Typography variant="body-large" className="text-sm text-muted-foreground max-w-lg mx-auto">
//             Browse active support categories to understand our kitchen and meal standards.
//           </Typography>
//         </Container>
//       </Section>
//       <TrustCenter />
//     </>
//   );
// }

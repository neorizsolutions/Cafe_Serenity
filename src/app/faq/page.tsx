import Container from '@/components/common/Container';
import Section from '@/components/common/Section';
import Typography from '@/components/common/Typography';
import { FAQS } from '@/data/faqs';
import { getFAQSchema } from '@/utils/seo';
import { constructMetadata } from '@/utils/seo';

export const metadata = constructMetadata({
  title: 'Help Center & Frequently Asked Questions (FAQ)',
  description: 'Answers about Biriyani varieties, Half and Full portions, snack prices and contacting Café Serenity.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <Section bg="muted" className="py-12 border-b border-border">
        <Container className="text-center space-y-4">
          <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body-large" className="text-sm text-muted-foreground max-w-lg mx-auto">
            Find answers about our restaurant menu and prices.
          </Typography>
        </Container>
      </Section>
      <Section bg="white"><Container className="max-w-3xl space-y-4">{FAQS.map(faq => <details key={faq.question} className="rounded-2xl border border-border bg-card p-6"><summary className="font-bold cursor-pointer">{faq.question}</summary><p className="mt-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></details>)}</Container></Section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQS)) }} />
    </>
  );
}

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

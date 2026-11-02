import ContactSection from '@/components/home/ContactSection';
import { constructMetadata } from '@/utils/seo';
export const metadata = constructMetadata({title:'Contact Café Serenity | Kakkanad',description:'Call or message Café Serenity. Explore our menu and find directions to Kakkanad, Kochi.',path:'/contact'});
export default function ContactPage(){ return <ContactSection standalone />; }


// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// import Link from 'next/link';
// import Container from '@/components/common/Container';
// import Section from '@/components/common/Section';
// import Typography from '@/components/common/Typography';
// import { constructMetadata } from '@/utils/seo';
// import { CONTACT_DETAILS } from '@/constants';
// 
// export const metadata = constructMetadata({
//   title: 'Contact Café Serenity | Kakkanad',
//   description: 'Reach our café team via WhatsApp or calls. Kitchen details for Kakkanad, Kochi.',
// });
// 
// export default function ContactPage() {
//   return (
//     <Section bg="white" className="py-16 md:py-24">
//       <Container className="max-w-3xl space-y-12">
//         <div className="space-y-4 text-center">
//           <Typography variant="badge-label">Get in Touch</Typography>
//           <Typography variant="h1" className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
//             Contact Us
//           </Typography>
//           <Typography variant="body-large" className="text-muted-foreground">
//             Have questions about our portion-conscious meals or morning café menu? Let&apos;s talk.
//           </Typography>
//         </div>
// 
//         {/* Contact Info Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//           <Link
//             href="/healthy-choices"
//             className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
//           >
//             <span className="text-2xl block">🥗</span>
//             <span className="text-xs font-bold text-foreground block">Healthy Choices</span>
//             <span className="text-[10px] text-primary font-bold block">Explore Options</span>
//           </Link>
//           <a
//             href={`tel:${CONTACT_DETAILS.phone}`}
//             className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
//           >
//             <span className="text-2xl block">📞</span>
//             <span className="text-xs font-bold text-foreground block">Direct Phone</span>
//             <span className="text-[10px] text-primary font-bold block">{CONTACT_DETAILS.phone}</span>
//           </a>
//           <a
//             href={CONTACT_DETAILS.whatsapp}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-6 rounded-2xl border border-border bg-card hover:bg-secondary/35 transition-colors space-y-2 block"
//           >
//             <span className="text-2xl block">💬</span>
//             <span className="text-xs font-bold text-foreground block">WhatsApp Chat</span>
//             <span className="text-[10px] text-primary font-bold block">Chat Now →</span>
//           </a>
//         </div>
// 
//         {/* Kitchen Location Info */}
//         <div className="rounded-2xl border border-border bg-secondary/15 p-6 md:p-8 space-y-4 text-xs">
//           <h4 className="text-sm font-bold text-foreground">📍 Central Café & Kitchen Operations</h4>
//           <p className="text-muted-foreground leading-relaxed">
//             Address: {CONTACT_DETAILS.address.street}, {CONTACT_DETAILS.address.locality}, {CONTACT_DETAILS.address.city}, {CONTACT_DETAILS.address.state} - {CONTACT_DETAILS.address.zipCode}
//           </p>
//           <p className="text-muted-foreground">
//             Business Hours: Daily, 5:00 AM – 3:00 PM (Serving breakfast from 5 AM, lunch from 11:30 AM).
//           </p>
//           <p className="text-muted-foreground">
//             FSSAI License ID: <span className="font-bold text-foreground">{CONTACT_DETAILS.fssaiNumber}</span>
//           </p>
//         </div>
//       </Container>
//     </Section>
//   );
// }

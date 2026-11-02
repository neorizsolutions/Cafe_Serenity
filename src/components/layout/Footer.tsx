import Link from 'next/link';
import BrandLogo from '@/components/common/BrandLogo';
import { CONTACT_DETAILS, BUSINESS_NAME } from '@/constants';

export default function Footer() {
  return <footer className="serenity-footer" aria-label="Site footer"><div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="footer-invitation"><h2>A good meal.<br /><span>A little serenity.</span></h2><Link href="/cafe-menu" className="serenity-button footer-menu-button">Find your favourite <span aria-hidden="true">↗</span></Link></div>
    <div className="footer-columns">
      <div><Link href="/" aria-label={BUSINESS_NAME+' home'} className="footer-logo"><BrandLogo /></Link><p className="mt-6 max-w-xs text-sm leading-7 text-stone-300">Biriyani for your lunch break. Kerala snacks for your tea break. Familiar favourites, here in Kakkanad.</p></div>
      <nav aria-label="Footer navigation"><h3>Make yourself at home</h3>{[['Home','/'],['Our Menu','/cafe-menu'],['About us','/about'],['Contact','/contact'],['FAQs','/faq']].map(([label,href])=><Link key={href} href={href}>{label}<span aria-hidden="true">↗</span></Link>)}</nav>
      <div><h3>Come say hello</h3><address className="not-italic text-sm leading-7 text-stone-300">{CONTACT_DETAILS.address.street}<br />{CONTACT_DETAILS.address.locality}, {CONTACT_DETAILS.address.city}<br />{CONTACT_DETAILS.address.state} {CONTACT_DETAILS.address.zipCode}</address><a className="footer-phone" href={'tel:'+CONTACT_DETAILS.phone.replace(/\s/g,'')}>{CONTACT_DETAILS.phone}</a><a className="footer-directions" href={'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Café Serenity '+CONTACT_DETAILS.address.street+' Kakkanad Kochi')} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p></div>
  </div></footer>;
}


// Previous implementation preserved for reference and possible reactivation.
// This entire block is disabled; it does not appear on the restaurant website.
// 'use client';
// 
// import Link from 'next/link';
// import { CONTACT_DETAILS, SOCIAL_LINKS, BUSINESS_NAME } from '@/constants';
// 
// export default function Footer() {
//   const currentYear = new Date().getFullYear();
// 
//   return (
//     <footer 
//       className="w-full border-t border-[#1C1C1E]/10 bg-[#1C1C1E] text-stone-300 py-16 md:py-20 relative overflow-hidden"
//       aria-label="Site Footer"
//       itemScope
//       itemType="http://schema.org/FoodEstablishment"
//     >
//       {/* Hidden SEO Metadata */}
//       <meta itemProp="name" content={BUSINESS_NAME} />
//       <meta itemProp="telephone" content={CONTACT_DETAILS.phone} />
//       <meta itemProp="priceRange" content="₹₹" />
//       <meta itemProp="fssaiNumber" content={CONTACT_DETAILS.fssaiNumber} />
// 
//       <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
//         
//         {/* Main 4-Column Grid */}
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 items-start">
//           
//           {/* Column 1: Brand & Logo */}
//           <div className="flex flex-col gap-4">
//             <Link
//               href="/"
//               className="flex items-center gap-2.5 font-sans text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E8064] rounded-lg w-fit"
//               aria-label={`${BUSINESS_NAME} Home`}
//             >
//               <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6E8064]/10 text-[#6E8064]">
//                 <svg className="h-5 w-5 fill-current" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4.5" fill="none" />
//                   <path d="M33 52 C33 66, 67 66, 67 52 L67 47 L33 47 Z" fill="currentColor" />
//                   <path d="M67 49 C72 49, 74 52, 74 55 C74 58, 72 61, 67 61" stroke="currentColor" strokeWidth="3" fill="none" />
//                   <path d="M50 22 C44 32, 56 42, 48 46 C58 39, 48 30, 50 22 Z" fill="currentColor" />
//                 </svg>
//               </div>
//               <span className="text-white font-black tracking-tight uppercase">CAFÉ SERENITY</span>
//             </Link>
//             <p className="text-xs leading-relaxed text-stone-400 font-medium max-w-xs">
//               Thoughtfully prepared food, from mindful everyday choices to the café favourites you love.
//             </p>
//             <div className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 bg-stone-900 px-2.5 py-1.5 rounded w-fit border border-stone-800">
//               FSSAI Lic: <span className="font-extrabold text-stone-300">{CONTACT_DETAILS.fssaiNumber}</span>
//             </div>
//           </div>
// 
//           {/* Column 2: Explore Navigation */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#6E8064]">Explore</h4>
//             <nav className="flex flex-col gap-2.5 text-xs font-semibold text-stone-400" aria-label="Footer Explore Navigation">
//               <Link href="/" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5">Home</Link>
//               <Link href="/healthy-choices" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5">Healthy Choices</Link>
//               <Link href="/cafe-menu" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5">Café Menu</Link>
//               <Link href="/about" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5">About</Link>
//             </nav>
//           </div>
// 
//           {/* Column 3: Visit & Contact */}
//           <div className="flex flex-col gap-4 text-xs font-semibold text-stone-400">
//             <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#6E8064]">Visit & Contact</h4>
//             <div className="space-y-1 leading-relaxed">
//               <span className="block font-bold text-stone-200">Café Address:</span>
//               <div 
//                 itemProp="address" 
//                 itemScope 
//                 itemType="http://schema.org/PostalAddress" 
//                 className="text-[11px] text-stone-400 leading-normal"
//               >
//                 <span itemProp="streetAddress" className="block">{CONTACT_DETAILS.address.street}</span>
//                 <span className="block">
//                   <span itemProp="addressLocality">{CONTACT_DETAILS.address.locality}</span>, <span itemProp="addressRegion">{CONTACT_DETAILS.address.state}</span>
//                 </span>
//                 <span itemProp="postalCode" className="block font-bold text-stone-300">PIN {CONTACT_DETAILS.address.zipCode}</span>
//               </div>
//             </div>
//             
//             <div className="space-y-1 border-t border-stone-850 pt-2.5">
//               <span className="block font-bold text-stone-200">Phone:</span>
//               <a 
//                 href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, '')}`}
//                 className="block text-stone-450 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5"
//               >
//                 {CONTACT_DETAILS.phone}
//               </a>
//             </div>
// 
//             <a
//               href={`https://maps.google.com/?q=${CONTACT_DETAILS.geo.lat},${CONTACT_DETAILS.geo.lng}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[11px] font-extrabold text-[#6E8064] hover:underline hover:text-white transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded px-0.5 mt-1"
//             >
//               📍 View Kitchen Coordinates →
//             </a>
//           </div>
// 
//           {/* Column 4: Stay Connected */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#6E8064]">Stay Connected</h4>
//             <nav className="flex flex-col gap-2.5 text-xs font-semibold text-stone-400" aria-label="Social Media Links">
//               <a
//                 href={SOCIAL_LINKS.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5"
//                 aria-label="Follow us on Instagram"
//               >
//                 <svg className="h-4 w-4 fill-current text-stone-450" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                 </svg>
//                 <span>Instagram</span>
//               </a>
//               <a
//                 href={SOCIAL_LINKS.facebook}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5"
//                 aria-label="Follow us on Facebook"
//               >
//                 <svg className="h-4 w-4 fill-current text-stone-450" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
//                 </svg>
//                 <span>Facebook</span>
//               </a>
//               <a
//                 href={SOCIAL_LINKS.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5"
//                 aria-label="Follow us on LinkedIn"
//               >
//                 <svg className="h-4 w-4 fill-current text-stone-450" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//                 <span>LinkedIn</span>
//               </a>
//               <a
//                 href={SOCIAL_LINKS.youtube}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E8064] rounded w-fit py-0.5"
//                 aria-label="Follow us on YouTube"
//               >
//                 <svg className="h-4 w-4 fill-current text-stone-450" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.519 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.519 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                 </svg>
//                 <span>YouTube</span>
//               </a>
//             </nav>
//           </div>
// 
//         </div>
// 
//         {/* Bottom copyright & policies */}
//         <div className="pt-8 border-t border-stone-800 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] font-semibold text-stone-500">
//           <p>© {currentYear} {BUSINESS_NAME}. All rights reserved.</p>
//           
//           <div className="flex flex-wrap gap-x-5 gap-y-2 items-center" aria-label="Footer Legal Links">
//           </div>
//         </div>
// 
//       </div>
//     </footer>
//   );
// }

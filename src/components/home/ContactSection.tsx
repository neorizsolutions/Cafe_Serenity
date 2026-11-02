import Image from 'next/image';
import Link from 'next/link';
import GlowSurface from '@/components/common/GlowSurface';
import { CONTACT_DETAILS } from '@/constants';

export default function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2';
  const address = `${CONTACT_DETAILS.address.street}, ${CONTACT_DETAILS.address.locality}, ${CONTACT_DETAILS.address.city}, ${CONTACT_DETAILS.address.state} ${CONTACT_DETAILS.address.zipCode}`;
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Café Serenity '+address)}`;
  const actions = [
    { title: 'Explore our menu', detail: 'Biriyani, snacks & your next favourite.', label: 'Take a look', href: '/cafe-menu', icon: 'menu' },
    { title: 'Give us a call', detail: CONTACT_DETAILS.phone, label: 'Call the café', href: `tel:${CONTACT_DETAILS.phone.replace(/\s/g,'')}`, icon: 'phone' },
    { title: 'Say hello on WhatsApp', detail: 'Ask about the menu or availability.', label: 'Start a chat', href: CONTACT_DETAILS.whatsapp, icon: 'whatsapp' },
  ];
  return <section id="location" className="serenity-contact" aria-labelledby="contact-heading"><div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="contact-intro"><Heading id="contact-heading">Let’s make it<br /><span>a café kind of day.</span></Heading><p>Planning a lunch break or craving a tea-time snack? Have a look at the menu, call us, or drop us a message.</p></div>
    <div className="contact-actions">{actions.map(action=><GlowSurface key={action.icon}><Link href={action.href} {...(action.icon === 'whatsapp' ? {target:'_blank',rel:'noopener noreferrer'} : {})} className="contact-action"><Image src={`/images/icons/${action.icon}.svg`} alt="" width={56} height={56} /><h3>{action.title}</h3><p>{action.detail}</p><span className="contact-action-label">{action.label}<span aria-hidden="true">↗</span></span></Link></GlowSurface>)}</div>
    <div className="contact-location"><div className="location-art" aria-hidden="true"><div className="location-art-ring" /><svg width="55" height="55" style={{ width: 55, height: 55, flexShrink: 0 }} viewBox="0 0 48 48" fill="none"><path d="M38 20c0 11-14 23-14 23S10 31 10 20a14 14 0 1 1 28 0Z" fill="#6E8064"/><circle cx="24" cy="20" r="5" fill="#F7F4EE"/></svg><span>Kakkanad, Kochi</span></div><div className="location-copy"><h3>Find a little serenity<br />in Kakkanad.</h3><address>{address}</address><p>For today’s opening hours and availability, give us a call before you visit.</p><a href={directions} target="_blank" rel="noopener noreferrer" className="serenity-text-link">Get directions <span aria-hidden="true">↗</span></a></div></div>
  </div></section>;
}

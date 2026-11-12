import Link from 'next/link';
import { BUSINESS_NAME, CONTACT_DETAILS } from '@/constants';
import { FAQS } from '@/data/faqs';
import FeaturedFoodCards from './FeaturedFoodCards';
import styles from './RestaurantExtras.module.css';

export function MenuOrientation() {
  return (
    <section className={styles.section} aria-labelledby="orientation-title">
      <div className={styles.headingRow}>
        <h2 id="orientation-title">Explore the menu</h2>
        <Link href="/cafe-menu" className="brand-inline-link">
          View full menu <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <FeaturedFoodCards />
      <p className={styles.imageNote}>Food images are illustrative.</p>
    </section>
  );
}

export function HomeVisit() {
  const { address, phone, whatsapp } = CONTACT_DETAILS;
  const fullAddress = `${address.street}, ${address.locality}, ${address.city}, ${address.state} ${address.zipCode}`;
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_NAME + ' ' + fullAddress)}`;
  const visitQuestions = [FAQS[5], FAQS[6]];

  return (
    <section id="location" className={styles.visit} aria-labelledby="visit-heading">
      <div className={styles.visitInner}>
        <div>
          <h2 id="visit-heading">Visit us in Kakkanad</h2>
          <address>{fullAddress}</address>
          <div className={styles.actions}>
            <a href={directions} className="brand-button">Get directions <span aria-hidden="true">↗</span></a>
            <a href={`tel:${phone.replace(/\s/g, '')}`}>Call {phone}</a>
            <a href={whatsapp}>WhatsApp</a>
          </div>
          <Link href="/about" className="brand-inline-link">About Café Serenity <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.questions}>
          <h3>Before you visit</h3>
          {visitQuestions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
          <Link href="/faq" className="brand-inline-link">View all FAQs <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

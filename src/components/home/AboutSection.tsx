import Link from 'next/link';
import { CONTACT_DETAILS } from '@/constants';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { address, whatsapp } = CONTACT_DETAILS;

  return (
    <div id="about-serenity" className={styles.about}>
      <header className={styles.intro}>
        <h1>About Café Serenity</h1>
        <p>We’re a neighbourhood café in Kakkanad, Kochi, serving Kerala breakfast, regional biriyani, and the snacks and sweets that go with a cup of chaaya.</p>
      </header>

      <section className={styles.morning} aria-labelledby="about-morning">
        <div>
          <h2 id="about-morning">For the early risers</h2>
          <p>Some mornings start well before the rest of the city wakes up. For anyone heading to a first shift or getting a head start on the day, breakfast can be a moment to sit down before moving on.</p>
        </div>
        <div className={styles.breakfastFeature}>
          <h3>Idli &amp; medu vada</h3>
          <p>Soft steamed idli, crisp medu vada, coconut chutney and warm sambar. Make time for a cup of chaaya if you can.</p>
          <Link href="/cafe-menu#collection-savouries" className={styles.link}>
            Browse breakfast favourites <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.food} aria-labelledby="about-food">
        <h2 id="about-food">From lunch to chaaya</h2>
        <div className={styles.chapters}>
          <div>
            <h3>Biriyani for lunch</h3>
            <p>Start close to home with Malabar or Kozhikode, or try another regional style. All eight biriyanis are available in Half and Full portions.</p>
            <Link href="/cafe-menu#category-biriyani" className={styles.link}>Explore the biriyani menu <span aria-hidden="true">↗</span></Link>
          </div>
          <div>
            <h3>Kerala tea-time favourites</h3>
            <p>Have a Parippu Vada or Pazham Pori with your chaaya. If you’re in the mood for something sweet, try a steamed Ela Ada or a Kozhukatta.</p>
            <Link href="/blog#sweet-and-savoury" className={styles.link}>Read the Food Guide <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.visit} aria-labelledby="about-visit-title">
        <h2 id="about-visit-title">Find us in Kakkanad</h2>
        <address>
          {address.street}<br />
          {address.locality}, {address.city}, {address.state} {address.zipCode}
        </address>
        <p>Message the café for today’s opening hours or to check whether a particular dish is available.</p>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.link}>Plan your visit <span aria-hidden="true">↗</span></Link>
          <a href={whatsapp} className={styles.link}>Message on WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}

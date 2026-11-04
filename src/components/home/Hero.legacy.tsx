import Link from 'next/link';
import HeroJourney from './HeroJourney';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <HeroJourney>
      <div className={styles.intro}>
        <div className={styles.eyebrowWrap}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          <p className={styles.eyebrow}>Café Serenity · Kakkanad, Kochi</p>
        </div>

        <h1 id="hero-heading" className={styles.heading}>
          Good food.<br />
          A little time.<br />
          <span className={styles.headingAccent}>Serenity.</span>
        </h1>

        <p className={styles.lead}>
          From morning kettle-poured spiced chaaya to golden crispy medu vadas and slow-dum biriyani — crafted fresh everyday with pure ingredients and unhurried care.
        </p>

        <div className={styles.actions}>
          <Link
            href="/cafe-menu"
            id="hero-cta-cafe-menu"
            className={`hero-cta-primary ${styles.primaryCta}`}
          >
            Explore Café Menu
          </Link>
          <Link
            href="/healthy-choices"
            id="hero-cta-healthy-choices"
            className={`hero-cta-secondary ${styles.secondaryCta}`}
          >
            Healthy Choices &amp; Plans
          </Link>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>☕</span>
            <div>
              <strong>Fresh Daily</strong>
              <span>Ground &amp; brewed on order</span>
            </div>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🌿</span>
            <div>
              <strong>Pure Ingredients</strong>
              <span>Zero artificial colours</span>
            </div>
          </div>
        </div>
      </div>
    </HeroJourney>
  );
}

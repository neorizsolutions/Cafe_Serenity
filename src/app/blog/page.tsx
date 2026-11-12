import Image from 'next/image';
import Link from 'next/link';
import { CAFE_ITEMS } from '@/data/cafe-menu/items';
import { constructMetadata } from '@/utils/seo';
import styles from './FoodGuide.module.css';

export const metadata = constructMetadata({
  title: 'Food Guide — Biriyani, Snacks & Sweets',
  description: 'Find a biriyani to try, compare Half and Full portions, and get to know Café Serenity’s Kerala tea-time favourites.',
  path: '/blog',
});

const biriyanis = CAFE_ITEMS.filter((item) => item.category === 'biriyani');
const portions = biriyanis[0]?.portions;

export default function FoodGuide() {
  return (
    <div className={styles.guide}>
      <header className={styles.intro}>
        <h1>Food Guide</h1>
        <p>Find a biriyani for lunch or something to have with your chaaya.</p>
        <nav aria-label="Food guide sections" className={styles.jumpLinks}>
          <a href="#biriyani-guide">Biriyani</a>
          <a href="#portion-guide">Half or Full</a>
          <a href="#sweet-and-savoury">Snacks and sweets</a>
        </nav>
      </header>

      <section id="biriyani-guide" className={styles.feature} aria-labelledby="biriyani-title">
        <div>
          <h2 id="biriyani-title">Which biriyani should I try?</h2>
          <p>Start with Malabar or Kozhikode for a Kerala favourite. Try Hyderabadi for an aromatic, richly flavoured lunch, or Chettinad if you prefer a more robust flavour.</p>
          <details className={styles.varieties}>
            <summary>Compare all eight varieties</summary>
            <dl>
              {biriyanis.map((dish) => (
                <div key={dish.id}>
                  <dt>{dish.name}</dt>
                  <dd>{dish.description}</dd>
                </div>
              ))}
            </dl>
          </details>
          <Link href="/cafe-menu#category-biriyani" className={styles.link}>Browse Biriyani <span aria-hidden="true">↗</span></Link>
        </div>
        <Image
          className={styles.foodImage}
          src="/images/menu-hd/malabar-biriyani.webp"
          alt="Illustration of Malabar Biriyani"
          width={480}
          height={420}
          sizes="(max-width: 720px) 85vw, 440px"
        />
      </section>

      <section id="portion-guide" className={styles.section} aria-labelledby="portion-title">
        <h2 id="portion-title">Half or Full?</h2>
        <p>Choose Half for a lighter lunch or to leave room for a snack. Choose Full when biriyani is the main meal and you want a larger serving. Both sizes are available for every variety.</p>
        {portions && (
          <dl className={styles.prices}>
            <div><dt>Half Biriyani</dt><dd>₹{portions.half}</dd></div>
            <div><dt>Full Biriyani</dt><dd>₹{portions.full}</dd></div>
          </dl>
        )}
      </section>

      <section id="sweet-and-savoury" className={styles.section} aria-labelledby="snack-title">
        <h2 id="snack-title">What goes well with chaaya?</h2>
        <div className={styles.snacks}>
          <div>
            <h3>Something savoury</h3>
            <p>Try Parippu Vada for a crisp lentil bite, Samosa for flaky pastry, or Egg Puffs when you want a more filling snack.</p>
            <Link href="/cafe-menu#collection-savouries" className={styles.link}>Browse Savouries <span aria-hidden="true">↗</span></Link>
          </div>
          <div>
            <h3>Something sweet</h3>
            <p>Try Ela Ada for a steamed banana-leaf parcel, Kozhukatta for a soft rice dumpling, or Kesari for a semolina sweet.</p>
            <Link href="/cafe-menu#collection-sweets" className={styles.link}>Browse Sweets <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="visit-title">
        <h2 id="visit-title">Have a dish in mind?</h2>
        <p>Call or message the café to check what’s available today, confirm opening hours, or ask about ingredients and allergens.</p>
        <Link href="/contact" className={styles.link}>Contact the café <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_DETAILS } from '@/constants';

export default function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2';
  return (
    <section id="about-serenity" className="serenity-about editorial" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="about-text-layout">
          <div className="about-story">
            <Heading id="about-heading">Familiar flavours.<br /><span>A little serenity.</span></Heading>
            <p>Biriyani, Kerala snacks and chaaya. Find us in Kakkanad, Kochi.</p>
            <Link href="/cafe-menu" className="serenity-text-link">Explore our menu <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="about-local-story">
            <div className="editorial-story-image">
              <Image quality={90} src="/images/menu-hd/pazham-pori.webp" alt="Illustration of golden Pazham Pori, a Kerala tea-time favourite" fill sizes="(max-width:767px) 85vw, 42vw" />
            </div>
            <h2>Rooted in the flavours<br />you know.</h2>
            <p>From Malabar Biriyani to golden Pazham Pori. Familiar flavours, made for your everyday breaks.</p>
            <p className="about-location-line">Kakkanad, Kochi <span aria-hidden="true">·</span> Biriyani & Kerala snacks</p>
          </div>
        </div>

        {/* Early Morning Story Feature Card with the Approved Breakfast Image */}
        <div className="about-morning-feature">
          <div className="about-morning-art">
            <Image
              quality={92}
              src="/images/cutouts/breakfast-story-cutout.webp"
              alt="Authentic South Indian breakfast: 3 soft steamed idlis, 1 crispy medu vada, fresh coconut chutney and sambar on banana leaf"
              fill
              sizes="(max-width:767px) 90vw, 45vw"
            />
          </div>
          <div className="about-morning-copy">
            <span className="about-morning-tag">From 5:00 AM · Every Morning</span>
            <h2>Your day starts early.<br /><span>So do we.</span></h2>
            <p>For the early risers, the first-shift workers, and everyone starting their day before the city fully wakes. At Café Serenity, a comforting breakfast is ready to be part of your morning.</p>
            <div className="about-morning-micro">
              An early start deserves a good breakfast.
            </div>
            <Link href="/cafe-menu" className="serenity-text-link">Explore our menu <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        {standalone && (
          <div className="about-page-details">
            <section className="about-food-story" aria-labelledby="about-food-title">
              <div>
                <h2 id="about-food-title">A menu for the<br /><span>everyday appetite.</span></h2>
                <p>Our food is at the heart of Café Serenity. Biriyani takes the lead, with Kerala snacks and breakfast alongside it — a menu you can get to know and come back to.</p>
              </div>
              <div className="about-food-chapters">
                <div>
                  <h3>Fresh 5:00 AM morning breakfast</h3>
                  <p>Steamed idlis, crispy golden medu vada, fresh ground coconut chutney, and warm vegetable sambar on a natural banana leaf. Ready when you start your day.</p>
                </div>
                <div>
                  <h3>Eight ways to enjoy Biriyani</h3>
                  <p>Hyderabadi, Thalappakatti, Chettinad, Ravuthar, Ambur, Dhilli Darbar, Kozhikode and Malabar. Explore the different styles, then choose a Half or Full portion.</p>
                </div>
                <div>
                  <h3>The Kerala snack tradition</h3>
                  <p>Tea-time brings its own favourites: savoury Parippu Vada and Ulli Vada, golden Pazham Pori, and sweet bites such as Sukhiyan, Kozhukatta and Ela Ada. Our snack menu keeps those familiar choices close at hand.</p>
                </div>
                <div>
                  <h3>Clear choices, clear prices</h3>
                  <p>Half Biriyani is ₹90 and Full is ₹150 across all eight varieties. Regular snacks are ₹12 each; Egg Puffs are ₹15. You can see each item and compare portions on our menu.</p>
                </div>
              </div>
            </section>
            <section className="about-visit-panel" aria-labelledby="about-visit-title">
              <div>
                <h2 id="about-visit-title">Find us in Kakkanad.</h2>
                <p>A lunch break, an evening snack, or an early morning stop along your day — start with the menu and get in touch if you would like to know what is available.</p>
                <address>{CONTACT_DETAILS.address.street}<br />{CONTACT_DETAILS.address.locality}, {CONTACT_DETAILS.address.city}, {CONTACT_DETAILS.address.state} {CONTACT_DETAILS.address.zipCode}</address>
                <Link href="/contact" className="serenity-text-link">Plan your visit <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="about-before-visit">
                <h3>Before you drop by</h3>
                <p>Call or message us for today’s opening hours and item availability.</p>
                <h3>Have a food question?</h3>
                <p>For ingredients, dietary preferences or food allergies, speak with our team before choosing your meal.</p>
                <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="serenity-text-link">Ask the café team <span aria-hidden="true">↗</span></a>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}

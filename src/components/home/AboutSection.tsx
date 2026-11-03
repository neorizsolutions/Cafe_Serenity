import Link from 'next/link';
import GlowSurface from '@/components/common/GlowSurface';
import { CONTACT_DETAILS } from '@/constants';

export default function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2';
  return <section id="about-serenity" className="serenity-about" aria-labelledby="about-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="about-text-layout">
        <div className="about-story"><Heading id="about-heading">Familiar flavours.<br /><span>A little serenity.</span></Heading><p>Café Serenity brings together Biriyani and Kerala café favourites in Kakkanad, Kochi. A plate for your lunch break, a snack with your evening tea, or something small to enjoy along the way.</p><Link href="/cafe-menu" className="serenity-text-link">Explore our menu <span aria-hidden="true">↗</span></Link></div>
        <div className="about-local-story"><h2>Rooted in the flavours<br />you know.</h2><p>Our menu travels from Hyderabadi and Thalappakatti Biriyani to Kozhikode and Malabar, with Half and Full portions for each variety.</p><p>Then there are the Kerala favourites: Pazham Pori, Parippu Vada, Ulli Vada, Kozhukatta and banana-leaf-wrapped Ela Ada. Simple choices for the everyday moments that deserve a good bite.</p><p className="about-location-line">Kakkanad, Kochi <span aria-hidden="true">·</span> Biriyani & Kerala snacks</p></div>
      </div>
      <div className="about-features">
        {[['A collection to explore','Eight Biriyani styles, from Hyderabadi and Thalappakatti to Kozhikode and Malabar.'],['Space for a little break','Familiar savoury snacks and sweet treats for the moments between meals.'],['A conversation away','Ask our team about the menu, current availability or planning a visit to Kakkanad.']].map(([title,body])=><GlowSurface key={title}><div className="about-feature about-feature-text"><h3>{title}</h3><p>{body}</p></div></GlowSurface>)}
      </div>
      {standalone && <div className="about-page-details">
        <section className="about-food-story" aria-labelledby="about-food-title">
          <div><h2 id="about-food-title">A menu for the<br /><span>everyday appetite.</span></h2><p>Our food is at the heart of Café Serenity. Biriyani takes the lead, with Kerala snacks and Egg Puffs alongside it — a menu you can get to know and come back to.</p></div>
          <div className="about-food-chapters">
            <div><h3>Eight ways to enjoy Biriyani</h3><p>Hyderabadi, Thalappakatti, Chettinad, Ravuthar, Ambur, Dhilli Darbar, Kozhikode and Malabar. Explore the different styles, then choose a Half or Full portion.</p></div>
            <div><h3>The Kerala snack tradition</h3><p>Tea-time brings its own favourites: savoury Parippu Vada and Ulli Vada, golden Pazham Pori, and sweet bites such as Sukhiyan, Kozhukatta and Ela Ada. Our snack menu keeps those familiar choices close at hand.</p></div>
            <div><h3>Clear choices, clear prices</h3><p>Half Biriyani is ₹90 and Full is ₹150 across all eight varieties. Regular snacks are ₹12 each; Egg Puffs are ₹15. You can see each item and compare portions on our menu.</p></div>
          </div>
        </section>
        <section className="about-visit-panel" aria-labelledby="about-visit-title">
          <div><h2 id="about-visit-title">Find us in Kakkanad.</h2><p>A lunch break, an evening snack, or a stop along your day — start with the menu and get in touch if you would like to know what is available.</p><address>{CONTACT_DETAILS.address.street}<br />{CONTACT_DETAILS.address.locality}, {CONTACT_DETAILS.address.city}, {CONTACT_DETAILS.address.state} {CONTACT_DETAILS.address.zipCode}</address><Link href="/contact" className="serenity-text-link">Plan your visit <span aria-hidden="true">↗</span></Link></div>
          <div className="about-before-visit"><h3>Before you drop by</h3><p>Call or message us for today’s opening hours and item availability.</p><h3>Have a food question?</h3><p>For ingredients, dietary preferences or food allergies, speak with our team before choosing your meal.</p><a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="serenity-text-link">Ask the café team <span aria-hidden="true">↗</span></a></div>
        </section>
      </div>}
    </div>
  </section>;
}

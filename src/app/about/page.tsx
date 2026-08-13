
export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24 space-y-20">
      {/* Introduction block */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          Our Story & Standards
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
          Democratizing Clean Nutrition in Kerala
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At Café Serenity, we believe healthy eating shouldn&apos;t be a luxury or a stressful daily struggle. We combine culinary expertise with nutrition science to cook clean, portion-controlled meals that support your lifestyle.
        </p>
      </div>

      {/* Standards Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground text-center">The Café Serenity Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-border p-6 rounded-2xl bg-card space-y-3">
            <span className="block text-3xl font-extrabold text-primary">0%</span>
            <h4 className="text-base font-bold text-foreground">Zero Preservatives & MSG</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We never use food colorings, synthetic preservatives, artificial sweeteners, or hidden MSG. What you read on the ingredient sheet is exactly what is inside your box.
            </p>
          </div>
          <div className="border border-border p-6 rounded-2xl bg-card space-y-3">
            <span className="block text-3xl font-extrabold text-primary">100%</span>
            <h4 className="text-base font-bold text-foreground">Cold-Pressed Local Oils</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We strictly forbid the use of cheap palm oils or highly processed vegetable oils. We prepare all meals using measured quantities of cold-pressed coconut oil, sesame oil, or olive oil.
            </p>
          </div>
          <div className="border border-border p-6 rounded-2xl bg-card space-y-3">
            <span className="block text-3xl font-extrabold text-primary">FSSAI</span>
            <h4 className="text-base font-bold text-foreground">Certified Sanitized Kitchens</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our meals are prepared in commercial central kitchens that operate under standard sanitization audits, temperature controls, and water-filtration systems. FSSAI No. 21324005000123.
            </p>
          </div>
        </div>
      </div>

      {/* Clinical Backing */}
      <div className="rounded-3xl border border-border bg-secondary/25 p-8 md:p-12 space-y-6 flex flex-col md:flex-row gap-8 items-center">
        <div className="space-y-4 md:w-2/3">
          <h3 className="text-2xl font-bold text-foreground">Dietitian-Designed, Chef-Crafted</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every item on our menu undergoes a dual-approval process. First, our clinical dietitians map out target macros, sodium limits, and portion weights for specific goals (weight deficit, muscle gain, or low-GI diabetic support). Second, our head chefs craft the recipes using traditional spices to ensure clean food remains appetizing.
          </p>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8 space-y-4 md:w-1/3 text-sm">
          <div>
            <span className="block font-bold text-foreground">Riya Mathew, RD</span>
            <span className="text-xs text-muted-foreground">Chief Clinical Dietitian (MS, Clinical Nutrition)</span>
          </div>
          <div>
            <span className="block font-bold text-foreground">Chef Thomas Mathew</span>
            <span className="text-xs text-muted-foreground">Culinary Director (Ex-Lila Palace Executive Chef)</span>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To provide scientific, macro-balanced, and delicious meals that make maintaining optimal health simple and affordable. We target the root causes of lifestyle diseases in India by standardizing daily nutrition options.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To build the leading subscription meal brand across India, offering customized medical, fitness, and daily budget nutrition through central kitchen hubs.
          </p>
        </div>
      </div>
    </div>
  );
}

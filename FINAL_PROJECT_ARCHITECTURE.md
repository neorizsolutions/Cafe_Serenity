# Final Project Architecture Blueprint

This blueprint documents the production architecture, technology configuration, brand assets, and structural conventions of the Café Serenity web application.

---

## 1. Project Specifications

* **Project Name**: Café Serenity
* **Brand Colors**:
  - Deep Charcoal: `oklch(0.16 0.01 76)` (Text & dark panels)
  - Golden Yellow / Amber: `oklch(0.77 0.17 76)` (Primary CTAs & accents)
  - Cream / Off-White: `oklch(0.98 0.015 80)` (Main backgrounds & cards)
* **Active Location**: Near Civil Station, Kakkanad, Kochi, Kerala (PIN 682030)
* **Contact Channel**: WhatsApp + Call (+91 93882 62626)

---

## 2. Technology Stack

* **Framework**: Next.js 16.2 (App Router, Turbopack builder)
* **Runtime**: React 19
* **Styling**: Tailwind CSS v4 (using CSS custom properties injection)
* **Animation**: Framer Motion v12 & tw-animate-css (restrained transitions)
* **Compiler**: TypeScript v5 (Strict configuration)

---

## 3. Directory Layout Blueprint

```
c:/Projects/Neoriz_Salad/
├── src/
│   ├── app/                    # Routing boundaries
│   │   ├── healthy-meals/      # Subscription plans module pages
│   │   ├── cafe-menu/          # Standalone client-side menu page
│   │   ├── about/              # Brand story and standards
│   │   ├── delivery-areas/     # Active transit boundaries
│   │   ├── faq/                # Onboarding and support FAQs
│   │   ├── pricing/            # Centralized subscription pricing grids
│   │   ├── layout.tsx          # Global structural wrapper & header/footer
│   │   └── page.tsx            # Homepage index page
│   ├── components/
│   │   ├── common/             # Shared wrappers (Container, Typography)
│   │   ├── layout/             # Header, Footer, ScrollToTop, SkipToContent
│   │   ├── healthy-meals/      # Subscription cards and pricing sections
│   │   └── cafe-menu/          # Homepage menu preview cards grid
│   ├── data/                   # Central static databases
│   │   ├── healthy-meals/      # Plan features and target calories
│   │   └── cafe-menu/          # 19 traditional menu item properties
│   ├── types/                  # TypeScript interface rules
│   └── constants/              # Central contact & sitemap definitions
├── public/
│   ├── brand/                  # Café Serenity vector logos (SVG)
│   └── images/                 # Verified food, slider, and preview assets
├── next.config.ts              # Legacy redirects mapping
└── package.json                # Dependencies configuration
```

---

## 4. Key Business Modules

### 🥗 Healthy Meals Subscriptions
* **Scope**: Target-specific portion-controlled food plans (Weight Loss, Gym High-Protein, Diabetic Support, Balanced Diet, Corporate Lunches).
* **Routes**: Main list at `/healthy-meals` with details at `/healthy-meals/[plan-slug]`.
* **Conventions**: Detailed macro indices (Calories, Protein, Carb, Fat specifications), starting pricing badges, and clinical backing trust details.

### 🍛 Café Menu
* **Scope**: Traditional local breakfast, Kerala lunch meals, snacks, and morning beverages.
* **Routes**: `/cafe-menu`
* **Conventions**: Search inputs, category tab pills, and Veg/Non-Veg filter controls executed client-side. Custom placeholder watermarks represent items lacking dedicated pictures.

---

## 5. Architectural Standards

* **Two-Module Separation**: Healthy Meals assets and Café Menu details must not bleed into each other. Sub-plans map to `/healthy-meals/` folder; regular café dishes map to `/cafe-menu/`.
* **Mobile Accessibility (A11y)**: Every interactive CTA button, hamburger drawer, and form selector possess at least a 44px height (`h-11` or `min-h-[44px]`). Keyboard navigation shows distinct outline focus rings.
* **SEO & Metadata**: Every page exports metadata utilizing the centralized `constructMetadata` utility in `src/utils/seo.ts`. A single H1 tag is enforced per page.
* **Retired Ordering Pipeline**: Cart modules, checkout layouts, payment forms, and WhatsApp checkout paths are retired. Conversions target the contact phone or WhatsApp group coordinates.

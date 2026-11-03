# Café Serenity — shop-board brand and content redesign

## Purpose
Create a coherent restaurant website grounded in the actual golden Café serenity wordmark and utensil motif. The client wants a substantially richer, polished delivery suitable for a ₹25,000 project. Improve useful content, menu discovery, mobile usability and consistency rather than adding filler.

## Selected direction and alternatives
Recommended based on the owner's earlier light-theme preference: warm cream content surfaces (#FFF9EE / #F7F4EE), charcoal navbar/footer (#20211E), readable dark text (#24241F), and shop-board gold (#F8C548). Gold buttons use dark text; dark-on-cream text remains the reading default. A fully charcoal site would depart from the earlier light preference. A light-only gold site would retain poor contrast for the supplied logo. The recommended hybrid balances both.

## Brand treatment
Use the current transparent logo unchanged on charcoal. Align navigation, mobile drawer, footer, buttons, focus states, borders and section separators to a shared cream/charcoal/gold palette. Eliminate active sage/terracotta styling consistently rather than layering conflicting overrides. Keep the favicon.

## Homepage
Retain the existing headline and the simple mixed-product automatic slideshow. No slideshow labels, pause/arrows or manual controls, no video, no collage. Keep gentle fades and reduced-motion behaviour. Refine typography and spacing, and introduce a concise three-part menu orientation: Biriyani, Snacks, Something Sweet. Add a useful portion/price guide, a short food-story introduction, and a small FAQ preview linked to the full FAQ page. Retain existing menu products and pricing.

## Menu
Preserve product card structure, images and half/full controls. Add accessible search by dish name and descriptions, category selection, a clear empty state with reset, and current category navigation. Keep controls compact and usable on mobile. No checkout, payment, ordering promises, menu card counts, or invented availability labels.

## About
Keep text-only presentation. Improve story hierarchy and reduce repetition. Explain the actual menu range, portion choices, snack/sweet selection and Kakkanad location. No invented founding dates, staff biographies, ingredient sourcing, certifications, reviews or awards.

## Food guide
Replace the existing placeholder /blog page with useful original editorial content: how to explore eight Biriyani styles, choosing portions using the actual menu choices, savoury snacks versus sweet bites, and finding prices/asking the team about availability. Link readers to the relevant menu categories. Reuse verified product images without generating another catalog. Avoid definitive recipe or dietary claims.

## Contact, FAQ and footer
Make phone, WhatsApp, menu and directions actions visually consistent. Preserve existing contact data; opening hours stay an invitation to contact the team until confirmed. Extend FAQs with location, portion selection, current availability, hours, ingredient questions and how to contact the café. Footer links to menu, story, food guide, FAQ and contact. Keep removed policy routes and social links absent.

## Constraints
Do not deploy, change prices or products, reactivate healthy-meals code, restore deleted healthy-meals images, add social platforms, or reintroduce policy pages. Preserve commented healthy-meals implementations. Saved video files remain stored and unused. No new paid services, analytics, accounts or backend dependencies.

## Implementation and acceptance
Use reusable brand tokens and focused components. Keep content server-rendered; add client code only for menu discovery and existing slideshow. Validate keyboard and mobile navigation, search/reset and category combinations, portion toggles, automatic mixed slideshow, image loading, footer links, 404, metadata and sitemap. Run lint, TypeScript and production build. Review desktop and mobile with no horizontal overflow. Compare final changes against these constraints.

## Business information still needed for future accuracy
Owner-approved opening hours, service options, original shop/restaurant photographs, and any actual story or team details can be incorporated later. Their absence must not be filled with fabricated content.

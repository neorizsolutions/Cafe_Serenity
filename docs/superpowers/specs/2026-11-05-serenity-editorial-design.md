# Café Serenity — Serenity Editorial

Status: proposed design, awaiting user approval. No product code changed.

## Intent

Bring the six main pages up to the visual quality of the completed food hero. The user wants a rich, premium website, with more attractive menu presentation and different background colours. The selected direction is Serenity Editorial: charcoal, gold, rich food colours and large typography. The ₹2 lakh reference describes the desired level of craft, not a price claim or a new business positioning.

Customers should quickly discover the food, compare portions and prices, and find the café or contact its team. Familiar Kerala café food should remain approachable.

## Approaches considered

1. **Serenity Editorial — selected:** dark foundation, expressive food colour panels, large editorial headings, varied section compositions. Connects the rest of the site to the approved hero; requires coordinated layout changes across the main pages.
2. **Quiet Luxury:** charcoal and cream, restrained gold, gallery-like presentation. More subdued, but offers less of the colourful food presentation requested.
3. **Vibrant Kerala:** stronger saffron, green and terracotta sections with playful arrangements. More energetic, but less consistent with the existing charcoal-and-gold brand.

## Existing project and constraints

- Use the current Next.js, React, TypeScript, CSS and Framer Motion stack and checkout. Read relevant installed Next.js guides before implementation.
- Scope: `/`, `/cafe-menu`, `/about`, `/contact`, `/blog` and `/faq`, plus shared header/footer. The blog route is currently a food guide, not a collection of dated posts.
- Preserve the entire approved hero appearance, typography, geometry, assets, order, scroll mapping, reduced-motion controls and idle behaviour. Avoid broad selectors that affect it. Preserve header heights and `--site-header-height`.
- Preserve all 24 menu items, existing prices, business constants, metadata, FAQ schema, links, redirects and archives. No fabricated reviews, awards, founding story, opening hours, availability or service promises.
- Menu search, category filters, no-results reset, Half/Full controls and corresponding images remain functional. These controls do not submit orders.
- Retain mobile navigation scroll locking, Escape handling and focus return; retain hero-aware back-to-top visibility.
- Reuse current food assets. Menu photographs often include their own scene/background: use coloured frames and surrounding panels rather than pretending these are transparent cutouts or recolouring food.
- Preserve generated-art disclosures and existing asset provenance. Never use generated café interiors or staff images as real business photographs.
- Local implementation only. No commit, push, deployment, new hosted project or dependency installation without a demonstrated need and authorization.

## Visual system

The following are proposed designer decisions, rather than separate user requirements:

- Foundation: charcoal `#151713`, deeper ink `#10120e`, warm cream `#fff2d4`, brand gold `#F8C548`.
- Food chapters: forest `#294b3b`, tea brown `#573426`, terracotta `#ac3f25`. Use these as controlled surfaces and accents with readable cream text; keep explanatory text sufficiently bright. No rainbow card colouring.
- Gold marks key actions, prices and selected states. Use fine rules and generous spacing in place of glow-heavy decoration.
- Retain Geist for body and controls. Introduce an editorial serif treatment outside the hero for selected headline phrases, with a dependable local/system fallback and no new runtime dependency. Heading scale approximately 40–88px, responsive to available space; body 16–18px with comfortable line height.
- Layout uses a shared approximately 1280px maximum content width and responsive gutters. Alternate generous editorial spreads, image panels, compact lists and clear action areas so every section does not become the same rounded card grid.
- Hover polish: restrained image scaling inside clipped wrappers, subtle border changes and arrow movement. No cursor effects, perpetual animations or extra scroll takeover. Motion preferences disable nonessential effects.

## Homepage

1. Keep the hero intact.
2. Recompose “What are you in the mood for?” into three substantial food chapters. Biriyani uses terracotta, savouries forest green, sweets tea brown. Each has an existing food image, a clear heading, short description and direct menu link. Desktop uses an asymmetric composition with the main meal receiving greater visual weight; mobile becomes a deliberate vertical sequence.
3. Make the portion guide an editorial pricing spread with large Half ₹90 / Full ₹150 treatments, a food image and a clear menu CTA. Use the existing portion illustrations and clarify that these are illustrative, avoiding invented serving quantities.
4. About becomes a warm story spread with a real existing food image, concise local context and an invitation to explore. Preserve deeper standalone About content.
5. FAQ preview uses spacious ruled rows with accessible native disclosure controls.
6. Contact becomes a strong final invitation with visible address, directions, phone and WhatsApp, leading into a cohesive footer.

## Menu — the centrepiece

- Replace the text-only introduction with an editorial two-column masthead: title, short orientation and price summary beside an existing biriyani image in a terracotta frame. Stack cleanly on mobile.
- Keep search and filters prominent, readable and keyboard accessible. Search must not lose focus on input; filtering retains the existing live result count and empty state.
- Present three visual collections: Biriyani, savoury snacks, sweets. Keep the existing `#category-biriyani` and `#category-snacks` destinations valid. The snacks destination encompasses both savoury and sweet collections; the existing Snacks & sweets filter still shows both.
- Biriyani uses terracotta image surrounds, savouries forest, sweets tea brown. Collection labels and names convey categories as well as colour.
- Product cards feature larger, consistently cropped image windows, clear names, compact descriptions and a grounded price/control area. Keep food unfiltered and keep Half/Full image swapping intact. Use a consistent collection palette rather than assigning arbitrary colours to individual products.
- Desktop grids are three columns where space permits, two on tablet and one on narrow phones. Keep portion controls usable without horizontal scrolling. Avoid shrinking text to pack more items onto a phone.
- End with a clearly styled café-help CTA. No cart, checkout or invented ordering workflow.

## Other pages and shared shell

- **About:** editorial introductory spread, food imagery, thoughtful dividers and numbered story chapters. Use only the existing verified business narrative. Replace repeated generic feature boxes with more composed layouts.
- **Contact:** distinct but coordinated masthead, clear call/WhatsApp/menu actions and a large location panel. Keep the current working map directions link; do not invent an interactive map or opening hours.
- **Food guide (`/blog`):** magazine-like intro, numbered section links, alternating food-and-copy spreads and a carefully designed portion comparison. Preserve useful information and existing anchors.
- **FAQ:** quieter charcoal composition with a strong title, roomy accordion rows and an obvious contact escape route. Preserve native disclosure behaviour, question data and structured data.
- **Header:** refine type spacing, active/focus states and action styling within existing dimensions; retain logo and responsive navigation behaviour.
- **Footer:** large closing invitation, gold menu CTA, balanced navigation/contact columns and restrained fine-rule treatment. Contact details come from existing constants.

## Implementation boundaries

- Prefer focused component changes and a clearly scoped editorial stylesheet/module over extending the existing cascade with many broad overrides. Shared styles must exclude the food hero.
- The builder may choose exact spacing, responsive breakpoints, image crops, decorative rule placement and component extraction after inspecting rendered pages. They may refine copy for clarity without changing facts.
- Figma, Canva and MagicPath are available supporting tools, not separate required deliverables. The deliverable is the existing working website. Do not create unrelated cloud projects merely because the tools were tagged. Use a design canvas only if it materially improves a specific design decision or the user asks for that artifact.

## Verification and handoff

- Run full ESLint, production build and `git diff --check` after implementation.
- Inspect all six routes at narrow phone, tablet and desktop sizes; include short portrait and landscape phone checks. Check for horizontal overflow, clipped headings, image loading, readable contrast, focus and touch targets.
- Exercise menu text search, every category filter, clear/reset, no results, both portion states, FAQ disclosures, mobile navigation, and all contact/directions actions.
- Recheck hero behaviour: still when idle, scroll-driven forward/reverse, no continuation after scroll stops, reduced-motion selection, matching wrapper/stage backgrounds and hero-aware back-to-top visibility.
- Report what was actually tested and any limits; viewport testing is not physical-device testing. Leave changes uncommitted with a concise summary and preview instructions.

## Approval

User selected Serenity Editorial. Approval of this written design remains pending before implementation.

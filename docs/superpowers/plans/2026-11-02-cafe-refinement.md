# Café Refinement Implementation Plan

**Goal:** Apply the approved visual refinement across menu, About, Contact, and footer.
**Architecture:** Shared server-rendered content sections and logo; one small client wrapper for decorative pointer lighting. Local SVG image icons. No new dependencies.
**Tech Stack:** Next.js 16, React 19, Tailwind 4.
**Spec:** docs/superpowers/specs/2026-11-02-cafe-refinement-design.md

## Constraints
Preserve product data, prices, images, portion controls and card layout. Preserve disabled healthy-food code. Keep compact menu header and existing business contact data.

## Tasks
- [x] Add GlowSurface and CSS with pointer/focus lighting, reduced-motion handling, and non-intercepting decoration. Wrap menu cards without changing their content.
- [x] Extract exact navbar BrandLogo; reuse in footer with cream panel. Add local SVG image icons.
- [x] Create shared AboutSection and ContactSection for homepage and standalone pages, with existing food imagery, contact actions and directions.
- [x] Refine footer columns, invitation and legal links. Preserve archived implementations.
- [x] Run lint, type checking and build; inspect desktop/mobile pages, card controls, image loading and overflow.

## Review focus
Keyboard focus remains visible. Touch input does not track lighting. Reduced motion disables decorative transitions. External contact links retain safe rel attributes. Existing product details and archived code remain intact.

## Verification results
Lint and TypeScript passed. Production build generated all 23 static routes. Browser checks: all three SVG contact icons loaded, no overflow at 390px, all 23 menu cards present, Full selection updates image and price, focus activates glow, and footer/navbar wordmark SVGs are identical. Reviewed desktop About, Contact and footer.

Ruling: kept current business details because no authoritative public Kakkanad listing was established. Used an address-search directions link instead of presenting unverified coordinates as a map. No new packages or fabricated business claims.

# Shop-board brand and content implementation

**Goal:** Deliver the approved cream/charcoal/gold redesign with useful restaurant content and menu discovery.
**Architecture:** Shared brand tokens and scoped component styles; server-rendered editorial content; a small client MenuExplorer for search and filters. Existing product data and cards remain authoritative.
**Tech Stack:** Next.js 16, React 19, Tailwind 4, CSS.
**Spec:** docs/superpowers/specs/2026-11-03-logo-theme-and-content-design.md

## Constraints
Preserve prices/products, current slideshow with no manual controls, commented healthy-meals code, unused saved video, removed policy routes and no social links. No new services or deployment.

## Tasks
- [x] Standardise palette, navbar/mobile navigation, footer, card highlights and shared buttons. Check legibility, focus and responsive spacing.
- [x] Add menu search/category filters with live result announcements and empty/reset state. Preserve product cards and portion controls. Verify combinations and keyboard input.
- [x] Add homepage menu orientation, portion guide and FAQ preview; enrich About and full FAQ; turn /blog into original Food Guide. Keep claims grounded in owner-provided details.
- [x] Verify assets, links, SEO, mobile menu, search, portion toggles, slideshow, 404 and scope. Run lint, tsc, build and browser checks.

## Review focus
Search never changes product data. Hash links open the intended category. Empty searches have a clear reset. Gold text on cream is avoided. Mobile navigation closes on selection/Escape. Archived implementations remain unchanged.

## Verification
Production build passed with 20 routes. Browser checks passed: 24 default products; Kesari search gives one; Vada gives three; incompatible filter gives empty/reset; reset restores 24; sweet filter has four; Biriyani has eight; Full selection updates image and price. Mobile drawer opens, locks scroll, closes on Escape and link selection, restores scrolling. No overflow on checked pages at 390px, menu also checked at 320px. About has no images. FAQ has 11 answers. Canonicals use the live subdomain. Removed privacy route displays custom 404. Homepage hero remains automatic with no buttons. Archived blocks, healthy-meals code and product data preserved; saved video files retained.

# Homepage food hero — integration and responsive verification

Date: 2026-11-05. Result: integrated locally; not deployed or committed.

## Implementation
- Homepage and /design-preview share src/components/home/food-hero/CircleHero.tsx and its ingredient components.
- Prior homepage hero preserved at src/components/home/Hero.legacy.tsx. Existing HeroJourney, images, prototype files and unrelated changes retained.
- Main menu, portions, about, FAQ, contact sections and footer remain in place.
- Hero retains vada disassembly → chaaya pour → layered biriyani with pickle/curd salad, slower final assembly/hold and continuous scroll takeover.
- One semantic homepage h1; existing visible large scene headlines retained as h2.

## Responsive matrix
Development: homepage at 320×568, 375×667, 390×844, 430×932, 768×1024, 1024×768, 1280×800, 1440×900, 1920×1080, 667×375, 844×390. Five remaining sitemap pages (/cafe-menu, /about, /contact, /blog, /faq) each at 320×568, 390×844, 768×1024, 1440×900 and 667×375. Total: 36 route/viewport checks. No horizontal document overflow, failed loaded images, or missing main headings found.

Production-mode server: all six sitemap pages at 320×568, 844×390 and 1440×900, 18 additional checks; same results. Legacy /healthy-choices/high-protein correctly redirects to /cafe-menu.

These are browser viewport emulations, not physical-device, Safari or Firefox testing. No claim that every device/browser has been tested.

## Interactions
- Full Biriyani portion shows ₹150; existing Half remains ₹90.
- Sweet-category search for vada gives zero results; reset restores all menu; searching vada gives Vada, Parippu Vada and Ulli Vada.
- Mobile menu opens, locks body scroll, closes on Escape with focus restored, and navigates to Home.
- Contact links point to existing phone, WhatsApp and map destinations; no messages/calls sent.
- FAQ opens and shows its answer.
- Production hero pause changes to play; previous/next controls work without internal hero scrolling.
- Reduced-motion component path /design-preview?motion=reduce skips autoplay, renders immediate tea/biriyani selections, removes long scroll area and preserves noindex. Actual homepage reads the OS preference. Tests forced the component mode through the isolated preview, rather than changing OS settings.
- Keyboard skip-to-main followed by Page Down now stops autoplay.
- Hero controls have 12px clearance from the global back-to-top button at 320, 390, 667 and 1440 widths.

## Defects fixed during verification
- Mobile reduced-motion height cascade left 1667px of blank space; .journey.reduced now retains natural height.
- overflow:hidden allowed focus/scrollIntoView to scroll the stage internally by 117.6px, clipping artwork; overflow:clip prevents internal scrolling.
- Short landscape screens were constrained by a hero minimum height larger than the screen; added compact side-by-side landscape layout.
- Keyboard scrolling with focus on main did not take over autoplay; broadened the handler while excluding interactive controls.
- Hero next control crowded the fixed back-to-top control; reserved right-side space.

## Checks and review
Full ESLint passed. Next.js production build (including TypeScript) passed. Independent code review found the reduced-motion cascade defect; follow-up review reported no further important findings. No dependencies added.

Screenshots and raw JSON measurements are under C:/Users/risal/.codex/visualizations/2026/11/04/01a1a72d-d29d-78b1-af98-e503336920c9/:
- homepage-integrated-desktop.jpg
- homepage-integrated-mobile.jpg
- homepage-landscape-reduced.jpg
- home-responsive-results.json
- site-responsive-results.json
- production-responsive-results.json

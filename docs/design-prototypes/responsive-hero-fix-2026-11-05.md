# Responsive hero correction — 2026-11-05

The supplied phone screenshot showed ghosted scene headings and a green strip below a different-coloured hero. The outer wrapper had a fixed green background while only the sticky stage animated. Partially transparent headings could remain faint when a touch scroll stopped between scene beats.

Changes:
- The wrapper and sticky stage use the same animated background.
- Exactly one scene heading is visible at full opacity; its vertical animation remains.
- Hero uses dynamic viewport height, with a shared, border-inclusive header height (64px mobile, 80px desktop).
- Stage contains its painted artwork; short portrait layouts give food extra space below captions.

Verification:
- Full ESLint and production build passed, including TypeScript and 21 generated pages.
- Six main pages at seven sizes (320–1440px, including landscape): 42 checks, no horizontal overflow.
- Three scenes at ten sizes through the deterministic reduced-motion preview: 30 geometry checks.
- Production pages checked at 320x568, 844x390, and 1440x900; all six routes passed.
- Final production scene checks at 320x568, 360x728, 844x390, and 1440x900: 12 checks passed; copy and artwork fit, backgrounds match. Shortest portrait layout has 18.7px caption-to-artwork clearance.
- Live tea and completed biriyani scenes visually inspected on a 360x728 viewport.
- These are browser viewport checks, not a physical Android/iOS device lab test. Native Android browser auto-darkening was not emulated.

Raw audit: C:/Users/risal/.codex/visualizations/2026/11/04/01a1a72d-d29d-78b1-af98-e503336920c9/responsive-fix-audit.json

No commit or deployment performed.

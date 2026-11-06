# Serenity Editorial Implementation Plan

> Use superpowers:executing-plans to implement task by task in the existing checkout. User explicitly approved implementation; no further planning gate, commits or deployment.

**Goal:** Carry the approved hero's craft through the six main website routes.
**Architecture:** Scoped editorial stylesheet, focused existing component updates, shared collection definitions. Preserve hero source and all business data.
**Tech Stack:** Next.js 16.2.10, React 19, TypeScript, CSS, existing Framer Motion.
**Spec:** docs/superpowers/specs/2026-11-05-serenity-editorial-design.md

## Constraints and review focus

Preserve header heights, hero source/scroll behaviour, 24 items/prices, redirects, archives, native disclosures and contact actions. No dependencies or publication. Check narrow screens, long dish names, keyboard focus, empty results, combined search/category filtering and Half/Full image changes. Keep snacks anchors valid across separated savoury/sweet sections.

## Tasks

- [ ] 1. Add shared menu collection classification in `src/data/cafe-menu/collections.ts`; verify with Node's native test runner using TypeScript stripping. Classify all 24 items exactly once, with 8 biriyani, 12 savouries and 4 sweets.
- [ ] 2. Rework `MenuCard.tsx`, `MenuExplorer.tsx`, and `/cafe-menu/page.tsx`: editorial masthead, collection frames, accessible working filtering/portion controls. Verify search, filters, reset, anchors and prices in browser.
- [ ] 3. Recompose `RestaurantExtras.tsx`: asymmetric food chapters, illustrated portion spread, ruled FAQ. Add scoped `src/app/editorial.css` imported after existing theme. Hero is never inside editorial scope.
- [ ] 4. Update About/Contact, food guide/FAQ and footer with editorial imagery, headings, colours and details. Preserve source data/schema and mobile header functionality. Check six routes at phone/tablet/desktop sizes.
- [ ] 5. Run lint, production build, diff whitespace check; verify hero forward/reverse/idle/reduced-motion, mobile navigation and menu interactions. Request one fresh review, resolve material findings and document actual results. Leave all work uncommitted.

## Progress / rulings

- User approved implementation on 2026-11-05; execute in current checkout as requested by project handoff. Styling-only work is verified visually, not with implementation-mirroring tests. Only new collection behaviour gets focused regression tests.
- Existing working tree was clean before design document creation. Hero files must have no diff at handoff.

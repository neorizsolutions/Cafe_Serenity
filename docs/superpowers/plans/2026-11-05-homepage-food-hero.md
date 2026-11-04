# Homepage food hero integration plan

Goal: use the reviewed vada → chaaya → biriyani hero on the homepage and verify the existing website responsively.
Architecture: one production hero under src/components/home/food-hero, shared by homepage and noindex preview; preserve prior home source and prototype assets.
Spec: user-approved design-preview iterations in this chat; docs/design-prototypes/hero-circle-motion.md.
Constraints: Next 16.2.10 local guides; no commits, pushes, deployment, menu invention or unrelated overwrite. Keep main navigation and menu/contact flows. User's existing-workspace instruction overrides skill worktree and commit defaults.

- [x] Preserve old Hero.tsx, promote current food components and wire homepage/preview to one implementation.
- [x] Fix landscape/short-screen sizing, heading semantics, pause/selection controls and responsive artwork sizing.
- [x] Test representative phone/tablet/desktop/landscape viewports across home, menu, about, contact, food guide and FAQ.
- [x] Exercise menu filtering/portion controls, mobile navigation, phone/WhatsApp/directions links and static reduced-motion preview.
- [x] Run lint, TypeScript and production build; independent review of changed code; record results and limits.

Review focus: short landscape screen clipping; horizontal overflow at 320px; scroll takeover and completed dish visibility; reduced motion without autoplay; existing menu/contact accessibility.

Ruling: use browser-flow and geometry checks for this integration instead of implementation-mirroring unit tests. No new dependencies. Reduced-motion component behavior can be forced only on the isolated preview for repeatable browser verification; homepage honors actual OS preference.

Progress: homepage/preview share production hero; old source preserved as Hero.legacy.tsx. Homepage geometry passed 11 sizes (320×568 through 1920×1080, including 667×375 and 844×390). One semantic h1, controls within viewport, no document overflow or failed images. Review reproduced mobile reduced-motion section height 2447.6px versus stage 780px; increased reduced selector specificity to remove blank scrolling space.

Additional reproduced bugs: scene-control selection produced stage.scrollTop=117.6px with overflow:hidden, clipping absolutely positioned food/headlines; replaced with overflow:clip so the hero cannot scroll internally. Keyboard Page Down with focus on #main-content left autoplay running; broadened non-interactive keyboard scroll takeover while excluding inputs/buttons/links.

Final visual check: reserved at least 80px on the right for the global back-to-top button so it cannot crowd the hero's next-scene control after scrolling.

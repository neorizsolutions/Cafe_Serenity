# Food imagery and featured motion refresh

User requested: animate featured food cards, replace their assets and all menu imagery, improve presentation, remove card counts/subheadings and reduce excessive text throughout the website. Implement directly on the approved editorial design; preserve the completed hero.

- Featured cards: three short titles, one link each, transparent food layers with restrained scroll-linked movement. No autoplay or continuous idle animation. Reduced motion shows complete static arrangements.
- Menu: individual generated food cutouts with a consistent warm studio perspective; coloured canvas instead of the previous gold plates. Keep 24 dishes, prices and functional half/full selection. Half and Full use correctly distinct generated images. No descriptions or repeated category captions on every card.
- Simplify visible promotional text; remove decorative numbers and eyebrow subheadings. Preserve factual address/contact information, useful FAQ answers, and image provenance. Identify generated food in alt text and one discreet visible menu note.
- Asset generation: native imagegen, transparent PNGs, original images preserved. Record actual output paths and generation details in the image provenance file. Do not claim artwork is real product photography.
- Verify lint/build, collection tests, asset mapping, and rendered preview where available. Leave uncommitted.

## Completed verification

- 32 native generated cutouts installed as transparent WebP assets, 5.81 MiB total. All 24 products have distinct imagery; all eight biriyanis have separate Half/Full images. Original assets preserved. Contact sheet visually reviewed: `serenity-food-review.jpg`.
- Full ESLint passed. Production build passed with TypeScript and 21 generated pages. Collection and artwork/pricing checks: 3 tests passed.
- All six main routes checked at 320×568, 768×1024 and 1440×900: 18 checks, no horizontal overflow. Additional 390px mobile visual and navigation checks passed.
- Browser menu controls: Biriyani 8, Snacks & sweets 16, sweets 4, all 24; Vada search 3; no-results/reset; distinct Hyderabadi Half/Full image URLs and pressed states.
- Featured images loaded; scroll changed poses, upward scrolling reversed them, and poses remained unchanged while idle. Reduced-motion static branch reviewed in source; OS reduced-motion preference was not changed for this run.
- Mobile navigation open/Escape close and FAQ native disclosure exercised.
- Fresh independent code review: no material findings. Hero source and styles have no diff.
- Browser viewport testing, not a physical-device lab. Windows build log lock resolved by keeping preview logs outside `.next`. Local production preview runs on 127.0.0.1:3000. No commit, push or deployment.

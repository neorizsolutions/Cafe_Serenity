# Plate-only image edits

User explicitly requested changing the plate after restoring the original food. Use each original photograph as the image-edit target; no newly invented food.

Plate treatment: shallow matte charcoal ceramic, fine warm bronze edge. Preserve food identity, arrangement, portion, camera angle and background. Native image editing is generative, so inspect outputs for visible food changes rather than claiming pixel-identical preservation.

Edit all 24 menu images and eight Half images individually. Preserve original files; store edited WebP derivatives in public/images/plate-edits and record source hashes. Hero remains unchanged. Keep current typography, reduced copy, prices, search/filter/portion interactions and featured scroll motion.

Verification: visually inspect edited contact sheet; menu/source mapping tests; lint/build; local browser imagery/portion checks. Leave uncommitted and undeployed.

## Completed

- 32 source-based plate edits installed in `public/images/plate-edits`: 24 dishes plus eight Half portions. Original/edit comparison sheet visually reviewed at `docs/design-prototypes/plate-edits-review.jpg`.
- Source/derivative hashes recorded in `EDIT-SOURCES.json`. All original tracked food image files remain unchanged.
- Four tests passed, covering dishes, collections, prices, serving variants and source/derivative hashes. Full ESLint and production build passed with TypeScript and 21 generated pages.
- Local browser confirmed edited image URLs, successful image loading, Full portion switching and no horizontal overflow at the current 714px viewport.
- Hero source and assets unchanged. Local production preview restarted on port 3000. No commit or deployment.

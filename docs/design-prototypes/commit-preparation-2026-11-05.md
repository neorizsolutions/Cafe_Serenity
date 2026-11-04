# Commit preparation — 2026-11-05

- Homepage and design preview share the production food hero: vada disassembly, chaaya pour, then biriyani assembly.
- Added short scene captions; visible hero buttons removed, keyboard playback retained.
- Archived duplicate prototype components under archive/components-design-preview; retained original images, provenance, and legacy hero source.
- Kept the eight video deletions as requested. Removed the menu character-video panels that referenced those files; archived their source and renderer under archive/video-characters.
- Consolidated obsolete hero image styles without changing final layout values.
- Browser smoke check: homepage hero and captions present, no horizontal overflow; menu renders 24 items, no video elements, no horizontal overflow.
- No commit, staging, push, or deployment performed.

Suggested commit title: feat: integrate animated Cafe Serenity food hero

Final verification: full ESLint passed; production build passed including TypeScript and 21 generated pages; git diff --check passed.

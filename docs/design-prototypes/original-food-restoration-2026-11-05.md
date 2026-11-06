# Original food imagery restoration

User correction: the new generated biriyanis do not match their food. Restore the original images and improve the design around them. The user delegates design details and wants direct implementation.

- Restore the exact original 24-item image mappings, including Hyderabadi matched Half and the special Ela Ada / Egg Puffs paths.
- Restore original images in homepage/featured/menu masthead/food guide/story/portion guide. Do not generate or repaint the rice or chicken. Preserve the source images unchanged and avoid claiming unverified actual product photography.
- Redesign presentation with dark layered surfaces, cream picture frames, fine gold trim, asymmetric featured compositions and deliberate typography. Keep counts/subheadings removed and motion scroll-driven, with a reduced-motion static branch.
- Prior generated assets remain archived, no longer referenced by active site components.
- Verify original-image mappings, prices, portions, build/lint, mobile and desktop layouts. Keep the approved hero unchanged. Do not commit or deploy.

## Verification

- Original menu data matches HEAD exactly, confirmed independently by reviewer; no active `src` references to `/images/menu-studio`.
- Three collection/original-image/pricing checks pass. Full ESLint and production build pass, including TypeScript and 21 generated pages.
- Six main routes checked at 320px, 768px and 1440px widths without horizontal overflow (one duplicate tablet check omitted from count). Browser navigation briefly timed out once; continued successfully.
- Original Hyderabadi Full image switching checked in browser; matched Half image confirmed. All seven featured artwork layers loaded, and new desktop composition visually inspected.
- Independent static review found no material issues. Hero source remains unchanged.
- Local production preview restarted on 127.0.0.1:3000. Work left uncommitted and undeployed. Tests use browser viewports, not physical devices.

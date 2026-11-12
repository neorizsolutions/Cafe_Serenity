# Café Serenity

Café Serenity serves regional biriyani, Kerala snacks, sweets and chaaya in Kakkanad, Kochi. The site helps guests browse the menu and plan a visit. It uses the Next.js 16.2.10 App Router, React 19, TypeScript, Framer Motion, CSS Modules and Tailwind 4.

## Start here for every task

Read this README and [AGENTS.md](AGENTS.md) first. Use the map below to open only files relevant to the requested change and their direct dependencies. Check `git status --short` before editing and consult the relevant installed Next.js guide under `node_modules/next/dist/docs/` before writing code. Update this README when a change makes its project context stale. Keep work local unless asked to commit, push or deploy.

## Run locally

```powershell
npm ci
npm run dev
```

Open [the local site](http://127.0.0.1:3000/). For a production preview, run `npm run build` followed by `npm start`. Restart the production server after rebuilding.

## Project map

| Area | Where to look |
| --- | --- |
| Home `/` | `src/app/page.tsx` composes the hero, early-morning breakfast story, featured food, portion guide, About, FAQ preview and contact. |
| Home sections | `EarlyMorningStory.tsx` and its CSS module own the breakfast story and its reversible scroll assembly. Its five independently generated transparent food layers are the `generated-*.webp` files in `public/images/cutouts/breakfast-assembly/`. `RestaurantExtras.tsx` owns the featured section wrapper, portion guide and FAQ preview. `FeaturedFoodCards.tsx` and its CSS module own the scroll-linked collection cards, with a three-layer Biriyani assembly and single-dish Savouries and Sweets previews. All are under `src/components/home/`. |
| Café menu `/cafe-menu` | `src/app/cafe-menu/page.tsx` and `src/components/cafe-menu/`. Search, collection filters, Half/Full prices and the larger image viewer are already implemented. |
| About and Contact | `/about` and `/contact` share `AboutSection.tsx` and `ContactSection.tsx` with Home. Scope home-specific changes to Home. |
| Food Guide and FAQ | `/blog` is the food guide. `/faq` uses `src/data/faqs.ts`, which also feeds the homepage preview. |
| Shared layout and styles | `src/app/layout.tsx`, `src/components/layout/`, and `globals.css`, `cafe-refinement.css`, `brand-theme.css`, `dark-theme.css`, and `editorial.css` in `src/app/`. |
| Redirects and image config | `next.config.ts`. Preserve legacy redirects and the archived healthy-meals code, prototypes, and original media. |

## Approved hero

`src/components/home/Hero.tsx` renders the shared `CircleHero` under `src/components/home/food-hero/`. The same component appears on `/design-preview`. The sequence is Vada disassembly, Chaaya pouring, then Kerala biriyani assembly. Motion tracks the scroll position, holds when scrolling stops and reverses when scrolling upward. Reduced-motion users get static scene controls.

For below-hero work, preserve the hero artwork, copy, semantic H1, mobile sizing, header height and matching backgrounds. The back-to-top control stays hidden while the hero is visible.

## Menu, café details and artwork

- Menu facts, prices and image paths come from `src/data/cafe-menu/items.ts`. Presentation collections come from `src/data/cafe-menu/collections.ts`. Biriyani costs ₹90 Half and ₹150 Full. Most snacks and sweets cost ₹12, with Egg Puffs at ₹15. Both biriyani portions use the same Full image.
- Contact and navigation constants live in `src/constants/index.ts`. The café is near Civil Station, Echamuku, Kunnumpuram, Kakkanad, Kochi, Kerala 682030. Phone is 093882 62626. [WhatsApp](https://wa.me/919388262626)
- The active dish artwork lives in `public/images/menu-hd/` with 24 WebP images and an asset manifest in `ASSETS.json`. Keep each illustration matched to its dish and show the entire charcoal plate with transparent edges. The generated artwork is illustrative. See the [menu artwork notes](docs/design-prototypes/menu-clarity-2026-11-05.md) and [review sheet](docs/design-prototypes/menu-clarity-review.jpg).
- Use charcoal, brand gold `#F8C548`, warm cream and the existing green, tea brown and terracotta accents. Keep food prominent and copy concise.

## Verify changes

```powershell
npm run lint
node --test src/data/cafe-menu/collections.test.mjs src/data/cafe-menu/menu-assets.test.mjs
npm run build
```

For visual changes, check desktop and phone widths for overflow, plate cropping, readable text and working menu or visit links. For homepage work, verify scroll and reduced-motion behavior and check that the hero still follows the approved scene sequence.

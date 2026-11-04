# Café Serenity redesign — working brief

Status: concept exploration; direction and complete design are not yet approved. No production implementation authorized by this document alone.

## Client feedback and purpose

The client rejected the current design and theme, described the imagery as weird and AI-generated, and wants a distinctive website compared with other cafés. The owner of this project wants to establish a convincing direction before rebuilding.

## Image constraint

The user has no original restaurant/product photographs and cannot arrange a shoot or obtain them at present. Do not make photography a blocker for concept exploration. Do not present generated images, stock food, or another restaurant's images as Café Serenity products. Existing image provenance is unverified; filenames alone are not evidence. Explore deliberately photo-free layouts rather than using generated product imagery. Any future photo placeholders must be explicit. Actual-product photography remains unavailable, not a fulfilled requirement.

## Agreed exploration

Explore contemporary Kerala café and bold food-brand directions. The first uses warm ivory, coffee brown, expressive serif typography, editorial menu composition, and quieter hierarchy. The second uses yellow, deep green, oversized sans-serif type, poster-like composition, and prominent menu prices. Both must work without photographs. These are design studies, not approved final branding. Existing yellow restaurant logo must be retained in the final design; temporary concept wordmarks are layout placeholders.

## Proposed restructuring

After direction selection, define homepage, menu, about/contact, navigation, mobile experience, and restrained interactions as one coherent system. Prioritize menu discovery, accurate prices, contact, and directions. Do not invent restaurant history, reviews, facilities, opening hours, or operational claims. Do not add payment or checkout without a separately agreed order process.

Reconsider animated characters rather than automatically carrying them into the new design, given the client's concerns about artificial presentation. Preserve all source media and archived healthy-meals code, including commented blocks. Preserve the existing implementation until the new design is approved. No commits, pushes, or deployments without explicit instruction.

## Next decision

Review the two visual studies, choose or refine a direction, then complete the written design and implementation plan before changing production UI.

## Subsequent feedback and revised exploration

The user rejected both initial visual concepts as also looking AI-generated. They then asked to proceed with the proposed research and a detailed concept without further clarification. The initial concepts are rejected, not approved directions.

Research reviewed the official Subko, Verve, and Julius Meinl websites. The transferable principles are cohesive brand treatment, considered editorial hierarchy, clear product navigation, and direct contact/location access. Their photographic presentation cannot honestly be reproduced without owned imagery.

An isolated, disposable prototype called The Counter is in `docs/design-prototypes/serenity-counter/`. It explores ivory paper, ink blue, restrained rust accents, the actual yellow logo, printed-menu composition, responsive layouts, category filtering, and half/full prices. It deliberately contains no food imagery. This is an alternative to evaluate, not a claim to satisfy the request for real product photographs. It shows menu interaction on one page for evaluation; production homepage/full-menu architecture remains to be decided. No production source, images, or animation files were changed.

## Plugin-assisted direction — The everyday ritual

The user explicitly requested Figma, MagicPath, Canva and Product Design, plus Pinterest and other external references. They asked to proceed autonomously. No final design direction or production implementation has yet been approved.

### References actually inspected

- Pinterest board: https://kr.pinterest.com/pitchaphap/vibes/ — public board visible; login overlay limited further inspection. Search snippets were not treated as full visual access.
- Boston Barista identity by Mohammed Nafih: https://www.behance.net/gallery/158968897/Brand-Identity-Boston-Barista — reviewed the case study and its visual presentation. Reference principle: identity consistent across physical and digital touchpoints; no assets copied.
- Just Loaf: https://justloaf.in/ — restaurant information and menu navigation reference.
- Subko: https://www.subko.coffee/ — previously visually inspected, coherent product and brand presentation reference.

### Proposed visual system and deliverables

Warm paper #f6f0df, burgundy #592b2e and yellow #efca63; actual yellow café logo retained. Fraunces editorial headings and DM Sans body. An original SVG tea-glass illustration creates a consistent brand motif. It is explicitly labelled as illustration, not an actual served product. There are no generated product photos, stock restaurant images, fabricated reviews or opening hours. This concept cannot fulfill the unavailable actual-photography requirement.

- MagicPath project ID: 468699687361347584
- Component ID: 468699690922311680
- Revision ID: 468699690922311681
- Build completed successfully.
- Prototype URL: https://designs.magicpath.ai/v1/mighty-valley-8165
- Verified in browser: homepage → full menu; all full biriyani prices change to ₹150; sweet category shows Sukhiyan, Kozhukatta, Ela Ada and Kesari; searching vada within sweets shows no matches; mobile 402×874 composition and navigation opening checked.
- Figma file: https://www.figma.com/design/Ron8YVqS314cZgJ3ymsjA1
- Figma session: b8e0b127-8b7b-4cbd-9ab4-d31703d92449
- Editable Figma frames: desktop homepage 3:16; mobile homepage 3:85; desktop full menu 3:153; rationale 3:213. Local action and menu-entry components and six color variables created. Actual café logo is the only raster content in the layouts; tea artwork is imported SVG.
- Figma structural check: editable text, components, frames and vectors exist. Full-menu font check passed. Homepage imported illustration labels use Inter rather than the proposed DM Sans; this is an unresolved font mismatch. Starter-plan tool limit blocked screenshot validation and correction. Figma remains a draft, not fully validated.
- Canva: opened the design-review presentation preparation widget with a five-part outline, references and photo constraint. No completed Canva presentation claimed; generation awaits widget action.
- Product Design: installed per directory lookup, but no callable Product Design tools exposed in this session. No Product Design audit claimed.

Prototype working source is isolated outside the Next.js checkout at:
`C:\Users\risal\.codex\visualizations\2026\11\04\01a1a63d-70a2-71c3-9451-575e9826438c\magicpath-serenity`.
This prevents standalone prototype TSX/scripts from entering production lint/type checks. Production source and existing media are unchanged. Nothing committed, pushed or deployed to the business website. The MagicPath URL is a design prototype, not the business production deployment.

## Accepted motion reference from user

The user supplied a 38.21-second video, `WhatsApp Video 2026-11-04 at 5.51.51 PM.mp4`, and explicitly liked its smooth transitions and animations. The clip shows a Lay's-themed website demo recorded on a laptop, credited on-screen to @genz.webdeveloper. It is a motion reference, not proof of a live official Lay's website or of any specific implementation library.

Observed sequence: product packs arranged along a curved carousel; active pack, title, and large background color fields change together; a selected pack becomes a large isolated focal object; subsequent views turn/reorient that object alongside explanatory copy; later sections show a product grid, pack-selection interaction, horizontal product lineup and FAQ. The input trigger (scroll, drag, click, autoplay) cannot be proven consistently from the recording alone.

This is the user's clearest motion preference so far: coordinated product transitions and continuity between scenes, with smooth acceleration/deceleration. The earlier calm illustration prototype is not evidence of an approved final direction. Future motion exploration should show a small interactive proof of this behavior before rebuilding production. Keep authentic-photo limitations explicit; motion does not supply missing actual-product assets. Preserve reduced-motion and usable mobile alternatives.

## Real-photograph motion trial — /design-preview

User requested trying the reference motion on the café website, using real externally sourced food photography with varied presentations rather than the repetitive generated product images. Implemented an isolated Next.js trial at `http://127.0.0.1:3000/design-preview`; existing homepage and menu are unchanged.

- New route is noindex and not added to navigation or sitemap.
- `src/components/design-preview/FoodMotionStudy.tsx` and its CSS module implement a three-item cyclic curved selector, spring transitions, coordinated background and title changes, swipe/previous/next selection, and scroll-driven active-photo enlargement/detail presentation.
- Framer Motion uses the project's existing dependency; no new dependencies installed.
- Reduced-motion preferences disable the scroll scene and animated selection transitions.
- New photographs are in `public/images/motion-study/`. These are photographs of real food, NOT Café Serenity's products. The prominent trial notice, image alt text, and credits preserve that distinction. In particular, the biriyani source is Kolkata-style and is not claimed to depict any offered regional variety.
- Sources, creator names, CC BY-SA 4.0 licence links and responsive-cropping/scaling disclosure are in `public/images/motion-study/CREDITS.md` and on the trial page.
- Visual variation: overhead white-plate biriyani; window-lit vada on a leaf plate; pazham pori with tea on a patterned plate. Distinct arch/round/asymmetric frames and staggered editorial layout.
- Browser verification: photos loaded; selection changes to Vada; scroll detail inspected; initial and detail compositions inspected at 390×844, default 855×656 and desktop 1440×900. No horizontal overflow at 390 and 1440. Fixed short viewport controls and Next image quality warnings during review.
- Lint and TypeScript passed during implementation; final targeted checks recorded in chat.
- Development server started on port 3000 in exec session 4557; verify process before relying on it later. Server was started with approved network access because sandbox-local socket access was blocked.
- Nothing committed, pushed, or deployed to production. This is a motion experiment awaiting visual feedback, not a finished website redesign.


## Generated animation assets — latest user direction
The user explicitly requested AI-generated images suitable for the existing food-object animation. Added three transparent PNG illustrations (biriyani plate, individual vada, milk-tea glass), replacing photographic contour masks in /design-preview. These are disclosed as generated illustrations, not actual cafe product photos. Backgrounds now interpolate on the food timeline, text overlaps with gentler transitions, and scroll spring damping is retuned. Original photo assets and current homepage work are preserved. See public/images/motion-study/GENERATED-ASSETS.md.

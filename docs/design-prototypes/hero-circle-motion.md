# Circle hero motion study — 2026-11-04

Preview: /design-preview. Existing homepage and prior FoodMotionStudy files preserved.

The previous hero was entirely scroll-driven and had no automatic opening sequence. After client hydration it required a scroll or scene selection before anything moved. The development origin 127.0.0.1 also produced blocked HMR warnings; it is now explicitly allowed as a loopback development origin.

The new one-time 18-second opening tour coordinates food transforms, background colours and copy on one MotionValue. Plate rotation leads to independently tumbling vadas and an upright tea arrival. Pause/resume and replay controls are provided. Wheel/touch scrolling takes over the timeline; scene buttons animate it directly instead of relying on window scrolling. Reduced motion skips autoplay and uses immediate selectable scenes.

Three new generated cutouts are in public/images/motion-study/hero-circle-{biriyani,vada,chaaya}.png. Generated with the built-in image generator. Plate/vada are 1254 square; tea is 1024 by 1536, with genuine alpha. Prompts called for isolated overhead biriyani and vada, plus a complete upright faceted milk-tea glass; consistent upper-left studio light; no background, props, text, cast shadows, steam or motion blur. Original generated assets and photographs remain intact. The preview labels these as illustrations rather than actual cafe products. Steam and shadows are code effects.

Business prices were checked against src/constants/index.ts and existing menu data. Tea pricing/availability are unconfirmed. Nothing committed or deployed.

## Vada assembly revision
Three independent quadratic paths assemble into a fixed triangle, followed by a motionless hold. Arrivals stagger by timeline progress .013; disassembly starts with the bottom piece, then right, then left. Each has its own outward path. No object is sliced or morphed. Placements are stage-relative percentages, so mobile uses the same geometry. The 20-second opening tour allows approximately three seconds for assembly and a clear hold before the tea transition. Reduced-motion starts on the completed arrangement.

Reference principle: staggered orchestration, https://motion.dev/docs/stagger. No new Motion APIs or dependencies introduced.

Numeric validation exercised stable hold poses, non-colliding silhouette spacing, exit order, finite values, bounded scale and continuous paths at .0005 progress intervals.

Latest correction: assembly removed. Vadas start fully positioned and visible, hold, then only disassemble. Replay and selecting the first scene reset directly to the completed arrangement. Opening tour shortened to 17 seconds.

## Chaaya preparation sequence
A dedicated TeaPour component replaces the single tea-image actor. Matched empty/full glass layers animate the liquid level, with a long pouring stream ending at the moving surface, ripples during pouring, and steam after the stream stops. The empty generated glass is aligned by measured alpha bounds and fades out as the full image takes over. All effects derive from the same progress value, so pause freezes the effects. Reduced motion selects a completed full glass. Opening tour now runs 21 seconds to give the filling sequence time. Vada retains disassembly only.

## Biriyani finish-the-bowl sequence — 2026-11-05
Replaced the single rotating dish with independently generated bowl/rice/chicken/garnish layers. Dedicated biriyaniMotion geometry staggers the ingredient drops and returns an exactly stable final pose. Completed at progress .98. The opening tour is 25 seconds to allow ingredient timing; direct biriyani selection plays the build over seven seconds. Reduced motion goes directly to the completed dish. Tea pour and vada disassembly are retained.

## Slower biriyani and continuous scroll handoff — 2026-11-05
Biriyani now uses explicit timeline beats rather than one eased sweep: 14 seconds from bowl arrival through final hold, including 3.8 seconds after assembly. Completed ingredients remain at opacity one indefinitely after playback. Opening tour uses the same beats. Replacement rice uses short-grain Kerala-style Kaima imagery.

Scroll takeover now anchors to both the current animation progress and current document scroll progress. The first wheel/touch gesture no longer resets the scene to the document's absolute scroll position, which could make the completed biriyani disappear back into an earlier scene.

2026-11-05 visual refinement: active rice now uses slightly longer slender grains mixed with masala; active chicken uses moist dum-style coated pieces. Timing, stable hold, and continuous scroll takeover retained.

2026-11-05 accompaniment refinement: removed the two leaf-garnish actors; added independently animated lime-pickle and onion-cucumber curd-salad bowls. Main dish raised and scaled to make room. Fourteen-second timing and stable hold retained. Accompaniments are concept illustrations, not new menu claims.

2026-11-05 copy refinement: added one restrained supporting line under each scene headline (vada: Golden bites. Familiar comforts.; chaaya: A warm pause, poured slowly.; biriyani: Kerala flavours, worth savouring.). Lines share the existing chapter MotionValues; no food choreography or timing changed. Short phone layout moves copy upward slightly for clearance.

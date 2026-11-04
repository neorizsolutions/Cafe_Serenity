# Animation assets

Created with OpenAI image generation on 2026-11-04 following the user's explicit request for generated food images suitable for animation. These illustrate food; they are not photographs of Cafe Serenity products. Original reference photographs and credits are retained separately.

All three exports are 1254 x 1254 transparent PNGs, with consistent soft upper-left light, no table, text, hands or external shadows.

- generated-biriyani.png: overhead complete off-white ceramic plate of Kerala-style chicken biriyani, separate ivory/saffron rice, two browned chicken pieces, fried onions and sparse mint. Centered circular silhouette for rotation.
- generated-vada.png: one irregular golden-brown medu vada, open transparent central hole, craggy lentil texture, curry-leaf flecks, viewed slightly from above. No plate. Repeated as three independently animated objects.
- generated-chaaya.png: full faceted tapering clear glass of caramel milk tea with a thin foam rim, complete base, front three-quarter view. No saucer or baked-in steam.

Motion uses scroll-linked transforms, a damped spring, interpolated background colour and overlapping text transitions. Steam and shadows are code effects. Reduced-motion users can change scenes without animated movement.

## Simplified hero revision
Order: Vada → Chaaya → Biriyani. Removed small hero copy, price lines, masthead, side lettering, ring decoration and secondary after-section. Large headlines remain with icon-only animation controls. Site navigation and footer are unchanged.

New assets, generated with the built-in image generator on 2026-11-04:
- hero-sculpted-biriyani.png (1254 square, alpha): sculpted food-advertising render of a circular ivory bowl of chicken biriyani, directly overhead, full rim and separate rice grains, upper-left light. Prompt constraints: no props, external shadow, text, loose ingredients or motion blur. Composed for a turning arc entrance.
- hero-sculpted-chaaya.png (1220 x 1289, alpha): softened 3D faceted tea glass, upright with a slight view of the foam surface, upper-left light and generous transparent margin. Prompt constraints: no saucer, background, steam, glow, splash, text or external shadow. Composed for a gentle rise with restrained tilt. Steam remains a code effect.

These are illustrations, not actual cafe product photographs. Previous assets and photograph attribution records remain preserved.

## Chaaya pouring animation
Added hero-chaaya-empty.png (1118 x 1407, alpha), generated with the built-in image tool using hero-sculpted-chaaya.png as the edit reference. Prompt: remove tea and foam, retain glass geometry and lighting, transparent background and interior, no new objects. Output changed the canvas and silhouette slightly, so display bounds are aligned in CSS using measured alpha extents. Existing assets remain intact. Generated cutouts are illustrative, not cafe product photographs.

TeaPour layers the empty glass and a clipped full glass. A code-rendered stream, elliptical surface and ripple move with the filling level; steam follows after the stream stops. Every effect follows the same progress value, including pause and reverse scrolling. Reduced motion selects a full glass without pouring or steam. Sequence: Vada disassembly → glass settles → tea fills → steam → Biriyani.

## Layered biriyani preparation — 2026-11-05
Generated with the built-in image tool, all 1254-square PNGs with real alpha:
- biriyani-layer-bowl.png: edited prior biriyani reference to an empty matte ivory bowl, full overhead rim, no food. Prompt preserved warm ceramic and upper-left lighting, no props, text or external shadows.
- biriyani-layer-rice.png: isolated circular mound of ivory/saffron rice with tiny spices; prompt excluded bowl, chicken and garnish; overhead, soft upper-left light.
- biriyani-layer-chicken.png: one complete browned drumstick, overhead with bone pointing lower-left, transparent margin, no rice or plate. Repeated twice at different rotations.
- biriyani-layer-garnish.png: compact mint sprig and slender fried-onion curls, overhead, no other food. Repeated twice.

BiriyaniBuild composes the food from these separate layers: bowl arrives, rice settles, chicken pieces drop individually, then garnish. These are illustrative ingredients, not photographs of the cafe's recipe or serving. Previous finished-dish assets remain preserved.

## Kerala rice correction — 2026-11-05
Replaced the active rice layer with biriyani-layer-kaima-rice.png, a new built-in generated transparent 1254-square cutout. Prompt specifies small plump short-grain Jeerakasala/Kaima rice, mostly ivory with restrained pale gold, fluffy separate grains, approximately 2:1 grain ratio, no chicken/garnish/vessel, same overhead view and upper-left light. Original long-grain layer remains preserved. Grain reference: https://www.keralatourism.org/islam-in-kerala/mappila-cuisine/biriyani . This is a regional-style illustration, not a photograph or claim about the cafe's exact recipe.

## Masala rice and dum chicken revision — 2026-11-05
New built-in generated transparent 1254-square assets:
- biriyani-layer-masala-rice.png: prompt specifies slightly elongated slender medium-short grains, roughly 3–3.5:1 grain ratio, ivory and pale-gold rice with attached onion-tomato-spice masala patches, no vessel/chicken/props, same overhead camera and upper-left light.
- biriyani-layer-dum-chicken.png: prompt specifies a tender bone-in thigh/drumstick portion with moist slow-braised onion-tomato masala, no roast/fried/charred crust, no rice or sauce puddle, overhead with matching light. Repeated at different orientations; scaled to 35% artwork width to fit the bowl.

Previous rice and chicken assets remain preserved. These are regional-style illustrative assets, not cafe product photographs or an exact recipe claim. The slower 14-second build and final hold are unchanged.

## Biriyani accompaniments — 2026-11-05
Removed the large mint/fried-onion garnish sprites from the active biriyani composition. Preserved their original asset.

New built-in generated transparent 1254-square cutouts:
- biriyani-side-pickle.png: overhead ivory condiment bowl of Kerala-style lime pickle, brick-red chilli masala/oil, lime pieces and mustard seeds; soft upper-left light, no leaves, text, props or external shadow.
- biriyani-side-raita.png: matching overhead ivory condiment bowl of white curd salad with red onion slices and cucumber, no whole-leaf garnish, props, text or external shadow.

The bowls slide gently into the lower foreground beside the main dish after the chicken settles. The main dish is slightly scaled and raised to provide room. These are illustrative accompaniments only; no claim is made that they are included with a menu item, and no business menu data has changed. Small herb/masala flecks already present in the rice and chicken renders remain.

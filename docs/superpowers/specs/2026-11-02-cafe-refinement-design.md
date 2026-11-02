# Café Serenity visual refinement

## Intent and constraints
Improve menu browsing, About, Contact, and footer using the current cream, sage, and terracotta palette. Keep menu items, prices, imagery, portion controls, and card layout intact. Keep the compact menu introduction. Preserve disabled healthy-food code and omit social-platform links.

## Approach
Recommended: adapt Emblingo’s restrained luminous surfaces to the café palette, using a warm pointer-following highlight and soft illuminated border. A static hover glow is simpler but less close to the requested effect. A dark redesign would change the established café theme and is excluded.

## Design
Menu: retain existing cards and add decorative lighting without obscuring photographs or controls. Refine category spacing and section backgrounds without adding a large intro.
About: a balanced food photograph and short Kakkanad-focused introduction, followed by concise Biriyani and Kerala snack features and a menu link. Use existing menu facts; do not invent history, awards, reviews, hours, or certifications.
Contact: prominent image icons for WhatsApp, telephone, and menu; readable action cards; a separate address panel and directions link using existing contact data. Public searches did not establish an authoritative Kakkanad listing, so business details remain unchanged pending a reliable source.
Footer: a richer dark sage/charcoal surface, compact menu invitation, clear navigation and contact columns, and the exact navbar logo presented on a cream panel so its original colours remain legible. Reuse one shared logo component to prevent drift.

## Behaviour and validation
Lighting supports keyboard focus, ignores touch pointer movement, and respects reduced-motion settings. Decorative layers do not intercept clicks. Check mobile overflow, action destinations, image loading, portion selection, lint, type checking, and production build.

## Reference
https://www.emblingo.com/ — inspected in browser on 2026-11-02. Reference is for visual treatment only; no external text or business claims are copied.

# Accessibility Audit - Hero Section

## Accessibility Standard Compliance
- **Keyboard Traversal**: The carousel container has a focusable `tabindex="0"` allowing keyboard users to interact. Left and right arrow keys change slides seamlessly.
- **ARIA Structure**: Added `role="region"`, `aria-roledescription="carousel"`, and `aria-label`. Navigation triggers have descriptive labels (`aria-label="Previous slide"`).
- **Autoplay Control**: Included an accessible Play/Pause toggle button to let screen reader users pause dynamic motion permanently.
- **Reduced Motion Support**: Animations detect `prefers-reduced-motion: reduce` media query and fall back to static image layouts with no slide fading/scaling or floating card offsets.

## Audit Logs
Status: PASSED
- Carousel ARIA role and description correctly set to "region" and "carousel".
- Carousel labeled correctly: "Premium healthy meals showcase"
- Slider is focusable via keyboard tabIndex.
- Navigation controls have explicit and helpful accessibility aria-labels.
- All showcase images contain descriptive ALT tags.

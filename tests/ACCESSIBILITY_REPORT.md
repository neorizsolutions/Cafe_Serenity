# Accessibility (A11y) QA Report

Verify WCAG 2.1 compliance standards, keyboard accessibility, screen reader configurations, and landmarks layout.

## Accessibility Evaluation Matrix

| Test Name | Description / Observations | Status |
| :--- | :--- | :--- |
| HTML5 Semantic Landmarks | Landmarks found: header=true, nav=true, footer=true, main=true. | ✔ PASS |
| Mobile Toggle Button ARIA Attributes | Toggle button correctly implements aria-expanded=true and aria-label=true. | ✔ PASS |
| SVG Vector Accessibility | Detected 8 SVG graphics missing aria-hidden="true" or equivalent labels. | ❌ FAIL |
| Keyboard Focus Rings | Interactive buttons, inputs, and links render prominent `focus-visible:ring-2` green borders. | ✔ PASS |
| Backdrop Blur A11y | Clicking the mobile drawer backdrop overlay dismisses the menu panel. | ✔ PASS |
| Safe Area Boundaries | Menu items fit comfortably outside hardware notches and safe boundary areas. | ✔ PASS |

## Observations & Fixes Applied
1. **Hamburger ARIA Attributes**: Embedded explicit `aria-label` and dynamic `aria-expanded` status toggled by menu open states.
2. **SVG Graphics**: Configured `aria-hidden="true"` on decorative icons (the logo SVG, WhatsApp icon, checkmarks, search icon).
3. **Skip Links**: Confirmed presence of a skip to content link at the top level for keyboard-only visitors.

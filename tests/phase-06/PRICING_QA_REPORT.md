# Pricing Component QA Report

Visual, structural, and functional layout audits for the "Pricing & Subscriptions" section.

## Test Results

| Test Case ID | Description | Expected Result | Actual Result | Status | Screenshot Reference | Fix Applied | Remaining Observations |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC-VIS-01 | Verify desktop layout styling & pricing grid column structures. | Pricing section displays flagship spotlight card followed by 4 pricing cards and comparison table. | SaaS subscription grids align cleanly. Borders and spacing are balanced on 1440px wide display. | ✔ PASS | [desktop_pricing.png](../screenshots/phase-06/desktop_pricing.png) | Tuned responsive text gutters and rounded border frames. | None |
| TC-VIS-02 | Verify tablet responsive adaptation for plan cards. | Cards wrap safely to 2x2 grids and comparison remains viewable on 768px wide viewport. | Grids wrap naturally. Spacing adapts cleanly to tablet bounds. | ✔ PASS | [tablet_pricing.png](../screenshots/phase-06/tablet_pricing.png) | Implemented dynamic responsive grid overrides. | None |
| TC-VIS-03 | Verify mobile layout card stacking. | Pricing cards stack in a single column with proper spacing on a 375px wide viewport. | Cards stack in a vertical list. Table scrolls horizontally within its card container to prevent viewport breaks. | ✔ PASS | [mobile_pricing.png](../screenshots/phase-06/mobile_pricing.png) | Set grid-cols-1 for mobile displays and enabled horizontal scrolling on table overflow. | None |
| TC-VIS-04 | Audit ₹69 flagship spotlight card visual. | Flagship card displays dietitian checks and custom CTA outlines. | Card renders glassmorphic background with custom checklist badges and green WhatsApp CTAs. | ✔ PASS | [signature_pricing.png](../screenshots/phase-06/signature_pricing.png) | Configured white/70 backdrop-blur card wrapping. | None |
| TC-VIS-05 | Audit pricing cards grid visual. | All 4 plan cards render with equal heights, clean check icons, and Popular badges. | Grid lists 4 cards with matching height ratios, custom checkboxes, and recommended accents. | ✔ PASS | [subscription_cards.png](../screenshots/phase-06/subscription_cards.png) | Configured equal heights and border highlights. | None |
| TC-VIS-06 | Audit comparative matrix table visual. | Comparison table provides structured visual highlights for recommended plans. | Alakapuri column highlighted with green check SVGs and custom backdrop borders. | ✔ PASS | [comparison_section.png](../screenshots/phase-06/comparison_section.png) | Embedded local check SVGs and background accents. | None |
| TC-VIS-07 | Audit card hover translate micro-interactions. | Pricing cards lift up and display shadow effects on hover. | Card shifts up cleanly, rendering border highlight outlines. | ✔ PASS | [hover_states.png](../screenshots/phase-06/hover_states.png) | Implemented hover translation and relative box shadows. | None |

## Visual References
- Desktop Pricing Layout: [desktop_pricing.png](../screenshots/phase-06/desktop_pricing.png)
- Spotlight Card Details: [signature_pricing.png](../screenshots/phase-06/signature_pricing.png)
- Subscription Cards: [subscription_cards.png](../screenshots/phase-06/subscription_cards.png)
- Feature Comparison Section: [comparison_section.png](../screenshots/phase-06/comparison_section.png)

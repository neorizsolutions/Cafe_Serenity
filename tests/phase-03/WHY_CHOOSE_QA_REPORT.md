# Why Choose Us Component QA Report

Visual, structural, and functional layout audits for the "Why Choose Alakapuri" section.

## Test Results

| Test Case ID | Description | Expected Result | Actual Result | Status | Screenshot Reference | Fix Applied | Remaining Observations |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC-VIS-01 | Verify desktop layout styling & storytelling images. | Why Choose Us section displays visual storytelling image alongside feature cards at 1440px wide. | Features render on a 2-column layout. Storytelling image aligns perfectly with clean gutters. | ✔ PASS | [desktop_whychoose.png](../screenshots/phase-03/desktop_whychoose.png) | Implemented 2-column grid layout for desktop viewports. | None |
| TC-VIS-02 | Verify tablet responsive adaptation. | Feature cards wrap cleanly or stack on 768px wide viewport. | Features stack gracefully. Storytelling image fits within bounds. | ✔ PASS | [tablet_whychoose.png](../screenshots/phase-03/tablet_whychoose.png) | Adjusted CSS breakpoints to handle mid-sized screens. | None |
| TC-VIS-03 | Verify mobile layout card stacking. | Cards stack in a single column with readable text heights on 375px wide viewport. | 1-column card stack rendered with custom borders and centered visual elements. | ✔ PASS | [mobile_whychoose.png](../screenshots/phase-03/mobile_whychoose.png) | Set grid-cols-1 for mobile displays. | None |
| TC-VIS-04 | Audit feature cards design details. | Feature cards share equal heights with rounded borders and clear icon spacing. | Feature cards render in a beautiful 2x2 grid with high-end SVG indicators. | ✔ PASS | [feature_cards.png](../screenshots/phase-03/feature_cards.png) | Configured equal heights and border glow transitions. | None |
| TC-VIS-05 | Audit comparative layout visualization. | Comparison table provides structured visual highlights for the recommended options. | Alakapuri column highlighted with border outlines and green check SVGs. | ✔ PASS | [comparison_layout.png](../screenshots/phase-03/comparison_layout.png) | Embedded local check/cross icons and background accents on Alakapuri column. | None |
| TC-VIS-06 | Audit bottom conversion callout design. | Bottom CTA card block uses glassmorphism borders and high-contrast buttons. | Card renders glassmorphic background with custom green WhatsApp CTAs. | ✔ PASS | [trust_indicators.png](../screenshots/phase-03/trust_indicators.png) | Configured white/70 backdrop-blur card wrapping. | None |
| TC-VIS-07 | Audit card hover translate micro-interaction. | Card shifts up slightly (-translate-y-1) and changes border focus on hover. | Card lifts up smoothly, displaying glowing primary border highlights. | ✔ PASS | [card_hover.png](../screenshots/phase-03/card_hover.png) | Programmed transition-all duration-300 and hover:-translate-y-1. | None |

## Visual References
- Desktop Card Grid: [desktop_whychoose.png](../screenshots/phase-03/desktop_whychoose.png)
- Feature Layout: [feature_cards.png](../screenshots/phase-03/feature_cards.png)
- Comparison Cards: [comparison_layout.png](../screenshots/phase-03/comparison_layout.png)

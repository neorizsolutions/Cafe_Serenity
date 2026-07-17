# Phase 6 Automated QA Testing Suite

This directory contains automated QA verification logs, breakpoints scaling tests, accessibility compliance reports, and SEO indexes specifically for the **Pricing & Subscriptions** section of Alakapuri Healthy Meals.

## Folder Contents
- [screenshots/phase-06/](../screenshots/phase-06/): Contains visual screenshot captures of all viewports (320px to 3440px) and interactive elements.
- [TEST_SUMMARY.md](TEST_SUMMARY.md): General scoring metric sheet.
- [PRICING_QA_REPORT.md](PRICING_QA_REPORT.md): Functional and visual audits of pricing card structures.
- [RESPONSIVE_REPORT.md](RESPONSIVE_REPORT.md): Full analysis across 18 viewports.
- [ACCESSIBILITY_REPORT.md](ACCESSIBILITY_REPORT.md): Custom SVG checkmarks and button height reviews.
- [SEO_REPORT.md](SEO_REPORT.md): Schema microdata script checks.
- [PERFORMANCE_REPORT.md](PERFORMANCE_REPORT.md): Visual layout shift checks.
- [FUNCTIONAL_TEST_REPORT.md](FUNCTIONAL_TEST_REPORT.md): CTA routing and WhatsApp validation.

## Running Tests
Run the test runner using:
```bash
node tests/qa-runner-phase6.js
```

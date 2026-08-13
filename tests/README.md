# Automated QA Testing Suite

This directory contains the automated Visual, Functional, Accessibility, SEO, Performance, and Responsive reports for the **Café Serenity** global layouts and navigation elements.

## Folder Structure
- [screenshots/](screenshots/): Holds the screenshot captures across all viewports and interactive states.
- [TEST_SUMMARY.md](TEST_SUMMARY.md): Consolidated checklist score sheet.
- [HEADER_QA_REPORT.md](HEADER_QA_REPORT.md): Visual and functional navigation tests.
- [RESPONSIVE_TEST_REPORT.md](RESPONSIVE_TEST_REPORT.md): Breakthrough analysis for all 18 viewports.
- [ACCESSIBILITY_REPORT.md](ACCESSIBILITY_REPORT.md): Screen-reader and ARIA landmarks verification.
- [SEO_REPORT.md](SEO_REPORT.md): Semantic headers, links, and microdata schema.
- [PERFORMANCE_REPORT.md](PERFORMANCE_REPORT.md): Image loading and layout shifts check.

## Running Tests
Run the automated Puppeteer script using:
```bash
node tests/qa-runner.js
```

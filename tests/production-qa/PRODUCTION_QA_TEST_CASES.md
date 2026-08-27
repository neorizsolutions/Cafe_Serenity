# Production QA Test Case Matrix

This document lists the verification test cases executed across all Café Serenity website modules, including responsive viewports, accessibility standardizations, SEO elements, and regression items.

| ID | Module | Test Description | Expected Result | Actual Result | Status | Severity | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC_NAV_01** | Navigation | Header navigation links on desktop & mobile drawer | Links target correct routes without overlapping layout elements | Matches sitemap links perfectly. Hamburger drawer operates fluidly. | **PASS** | N/A | Tested down to 320px |
| **TC_NAV_02** | Navigation | Skip-to-content accessibility link | Visible on focus and links to main content | Displays on Tab and focuses `#main-content` | **PASS** | N/A | Accessible with keyboard tab sequence |
| **TC_HM_01** | Healthy Meals | Subscription sub-plans grid and details layout | Splits text specifications and macro details side-by-side | Layout standardized across all 5 goal subpages | **PASS** | N/A | Targets corporate, weight-loss, gym, etc. |
| **TC_HM_02** | Healthy Meals | Regular eater redirection links on plan detail pages | Subtle CTA pointing to Café Menu for regular eaters | Backlink button routes directly to `/cafe-menu` | **PASS** | N/A | Accessible tap targets |
| **TC_CM_01** | Café Menu | Standalone page search query and category filtering | Interactive filters scale items dynamically without reloading | Renders 19 items with category tab pills and clear buttons | **PASS** | N/A | Full client-side state mapping |
| **TC_CM_02** | Café Menu | Veg/Non-Veg indicators and filter toggles | Cards display Veg/Non-Veg dots and filter updates list | Displays emerald green (Veg) and ruby red (Non-Veg) dots | **PASS** | N/A | Aligned with Kerala food safety specs |
| **TC_CM_03** | Café Menu | Custom placeholders for items without photo assets | Custom watermark layout card renders without broken boxes | Café Serenity styled watermark card loads cleanly | **PASS** | N/A | Maintains design consistency |
| **TC_HP_01** | Homepage | Hero slider slideshow and module entry point CTAs | Slideshow changes slides, buttons route to correct entries | Directs to `/healthy-meals` and `/cafe-menu` | **PASS** | N/A | Representational slideshow of breakfast & salads |
| **TC_HP_02** | Homepage | Pathway selector card sections | Section headings introduce two experiences balanced | Headings styled to "Choose What You're Looking For" | **PASS** | N/A | Clear separation without content bleeding |
| **TC_HP_03** | Homepage | Previews limits for healthy plans and café menu items | Previews display 4 subscription categories and 6 café dishes | Healthy Meals renders 4 plans, Café Menu renders exactly 6 dishes | **PASS** | N/A | Clean CTA links target full modules |
| **TC_A11Y_01**| Accessibility| Keyboard tab outlines and focus indicators | Focus border surrounds focused controls for keyboard navigators | Focus ring outlines highlight inputs and links | **PASS** | N/A | WCAG AA standard compliant |
| **TC_A11Y_02**| Accessibility| Touch target sizes for interactive elements | All CTA buttons, forms, and filters possess >= 44px height | Standardized all `h-10` items to `h-11` (44px) | **PASS** | N/A | Standardized in visual refinement phase |
| **TC_SEO_01** | SEO / Meta | Canonical URLs, title mappings, meta headers | Unique page titles, index meta tags, single H1 per page | verified in about page metadata and defaults | **PASS** | N/A | Localized Kochi keywords mapped naturally |
| **TC_LOC_01** | Location | Target active city coverage and delivery regions | Focuses strictly on Kakkanad, Kochi, and immediate tech zones | Trivandrum/Kozhikode/Thrissur references removed | **PASS** | N/A | Checked footer, locations, schema, and homepage |
| **TC_ORD_01** | Ordering | Verify ordering buttons, checkout, and payment | No cart, checkout, payment, WhatsApp ordering, or POS is active | No active ordering controls exist in the codebase | **PASS** | N/A | Confirmed constraint is fully intact |

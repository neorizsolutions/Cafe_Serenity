# Production Bug Report

This document records the visual, functional, and location-based issues identified during testing and their resolutions.

---

### Bug 1: Legacy Delivery Location References
* **Module**: Homepage (`src/components/home/FinalConversion.tsx`)
* **Severity**: **MEDIUM**
* **Description**: The homepage Conversions block displayed "Trivandrum (Technopark)", "Kozhikode (Cyberpark)", and "Thrissur & Kannur Zones" under expanding soon regions, violating the Kakkanad, Kochi, Kerala region boundary.
* **Resolution**: Replaced standard bullets with local Kochi/Ernakulam suburbs ("Kalamassery & HMT Zone", "Edappally & Kaloor Corridor", "Aluva & Nedumbassery"). Refined the map radar text to read "Expansion plans underway for other Kochi transit zones (Kalamassery, Edappally)".
* **Status**: **RESOLVED**

---

### Bug 2: Empty Footer Social Links
* **Module**: Footer Navigation (`src/components/layout/Footer.tsx`)
* **Severity**: **LOW**
* **Description**: Anchor tags for Instagram, Facebook, and YouTube rendered empty `href=""` values due to missing properties on the `SOCIAL_LINKS` constants object.
* **Resolution**: Populated `instagram`, `facebook`, and `youtube` handles in `src/constants/index.ts`.
* **Status**: **RESOLVED**

---

### Bug 3: Non-compliant Button Touch Target Heights
* **Module**: layout, Homepage, and Sub-pages
* **Severity**: **LOW**
* **Description**: Mobile navigation hamburger button, scroll-to-top floating button, and several reload buttons were built with a `h-10` (40px) utility, which fails the WCAG 44px tap target guidelines.
* **Resolution**: Standardized class definitions to `h-11` (44px target) across the layout header, scroll indicator, forms, and page CTAs.
* **Status**: **RESOLVED**

---

### Bug 4: Mismatched Viewport Theme Color
* **Module**: Root Layout (`src/app/layout.tsx`)
* **Severity**: **LOW**
* **Description**: The browser themeColor viewport setting was set to `#1e6040` (green), which conflicted with the charcoal branding.
* **Resolution**: Standardized viewport `themeColor` to `#1c1c1e` (deep charcoal).
* **Status**: **RESOLVED**

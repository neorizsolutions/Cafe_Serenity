# Development Artifact Audit Report

This report catalogs all repository files and directories, categorizing them for the final client-delivery build transfer.

---

## 1. Directory & File Classifications

### KEEP (Core Production Files)
These files represent the final production source code, configuration setups, and brand assets. They must be transferred to the client repository intact:
* **`src/app/`**: All production routing, page containers, metadata layouts, and static page templates.
* **`src/components/`**: All reusable styling components (shared wrappers, Healthy Meals grids, Café Menu filters, and layouts).
* **`src/data/`**: Central business databases (Café menu items list and subscription sub-plan attributes).
* **`src/types/`**: Authoritative TypeScript types and interface declarations.
* **`src/constants/`**: Global constants including contacts, sitemaps, address parameters, and default SEO models.
* **`src/lib/`**: helper utilities (`utils.ts`).
* **`public/brand/`**: Café Serenity vector logos (SVG formats) and brand emblems.
* **`public/images/`**: Verified food pictures, Hero sliders, and fallback background graphics.
* **`package.json` & `package-lock.json`**: Dependency trees and scripts configuration.
* **`next.config.ts`**: Image loader settings and legacy `/meal-plans` redirects.
* **`tsconfig.json`**: TypeScript compiler targets.
* **`postcss.config.mjs`**: CSS configurations.

### REMOVE BEFORE CLIENT REBUILD (Temporary & Dev Cache Files)
These files are generated locally or used strictly during construction. They should **NOT** be copied to the clean repository:
* **`.next/`**: Next.js production build compiler output cache.
* **`node_modules/`**: Local npm package binaries.
* **`tsconfig.tsbuildinfo`**: TypeScript build compiler index tracker.
* **`CLAUDE.md`**: CLI helper configs.

### OPTIONAL (Reference Documentation)
These files document architecture and QA results. They can be copied as reference documentation or left out without impacting code performance:
* **`MODULE_ARCHITECTURE.md`**: Initial structural blueprint.
* **`tests/`**: Folder containing all verification matrices, bug tracking lists, and freeze reports.

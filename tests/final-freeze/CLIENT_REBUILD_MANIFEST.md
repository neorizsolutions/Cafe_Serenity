# Client Rebuild Transfer Manifest

This manifest guides the transfer of production source files from this master reference folder (`C:\Projects\Neoriz_Salad`) to the clean, client-delivery workspace.

---

## 1. Production Files & Directories to Copy

These directories contain the complete visual assets, configurations, and scripts required for the final application:

| Folder / File Path | Target Destination | Purpose |
| :--- | :--- | :--- |
| `src/app/` | `src/app/` | Core app pages (Homepage, Healthy Meals, Café Menu, About, FAQs, Pricing, Policies) |
| `src/components/` | `src/components/` | Core layout and interactive modules (shared wrappers, previews, navigation headers/footers) |
| `src/data/` | `src/data/` | Static menu lists and program variables |
| `src/types/` | `src/types/` | TypeScript interface definitions |
| `src/constants/` | `src/constants/` | Contact coordinates and navigation arrays |
| `src/utils/` | `src/utils/` | SEO and metadata compiler helpers |
| `src/lib/` | `src/lib/` | Shared class merge utilities |
| `public/brand/` | `public/brand/` | Café Serenity brand logos (SVGs) |
| `public/images/` | `public/images/` | Verified product imagery and sliders |
| `next.config.ts` | Root | Route configurations and redirects |
| `package.json` | Root | Dependency trees and build scripts |
| `tsconfig.json` | Root | TypeScript compile rules |
| `postcss.config.mjs` | Root | CSS processor specifications |
| `eslint.config.mjs` | Root | Eslint checks configuration |

---

## 2. Files & Directories to Skip

These files are temporary build caches, developer notes, or testing outputs. They must **NOT** be transferred to the client repository:

| Path | Category | Reason for Omission |
| :--- | :--- | :--- |
| `.next/` | Temporary | Compiler build cache output |
| `node_modules/` | Temporary | Local dependency binaries (install fresh using `npm install`) |
| `tsconfig.tsbuildinfo` | Temporary | Local TypeScript compiler cache |
| `CLAUDE.md` | Developer | Local CLI shortcut command helper |
| `tests/` | QA/Testing | Test case matrices, bug reports, and freeze logs |
| `FINAL_PROJECT_ARCHITECTURE.md` | Doc | Internal architecture document (optional) |
| `.git/` | Version Control| Local project git repository history |
| `.gitignore` | Config | Will be replaced by client git configuration |

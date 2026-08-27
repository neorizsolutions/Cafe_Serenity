# Frontend Bug Report

**Project**: Café Serenity  
**Audit Date**: 2026-08-28  
**Auditor**: Antigravity QA Engine  

---

## Bug Summary

| ID | Severity | Module | Description | Status |
|---|---|---|---|---|
| BUG-001 | MEDIUM | SEO / OG | Missing OG image file `/images/og-default.jpg` | FIXED |
| BUG-002 | MEDIUM | Café Menu / Components | Invalid Tailwind class `scale-103` | FIXED |
| BUG-003 | LOW | SEO / Sitemap | `/contact` and `/blog` routes missing from sitemap.xml | FIXED |
| BUG-004 | LOW | Footer | LinkedIn and YouTube social links used generic root domains | FIXED |

---

## Bug Details

### BUG-001 — Missing Open Graph Image File
**Severity**: MEDIUM  
**Module**: SEO / Open Graph  
**Affected Files**: `src/constants/index.ts`

**Description**: The SEO defaults object referenced `/images/og-default.jpg` as the default Open Graph image. This file does not exist in `public/images/`. When the page is shared on social platforms (Facebook, Twitter, LinkedIn), the preview card would fail to load an image.

**Fix Applied**: Changed `ogImage` value in `SEO_DEFAULTS` to point to the confirmed-existing `/images/slide_cafe_breakfast.png`.

```diff
- ogImage: '/images/og-default.jpg',
+ ogImage: '/images/slide_cafe_breakfast.png',
```

---

### BUG-002 — Invalid Tailwind CSS Class `scale-103`
**Severity**: MEDIUM  
**Module**: Café Menu  
**Affected Files**:
- `src/app/cafe-menu/page.tsx` (line 167)
- `src/components/cafe-menu/CafeMenuSection.tsx` (line 62)

**Description**: Both café menu card image elements used `group-hover:scale-103` which is not a valid Tailwind CSS v4 scale step. Valid steps are `scale-100`, `scale-105`, `scale-110`, etc. The class would silently do nothing at runtime, meaning the intended zoom-on-hover animation was never applied to menu images.

**Fix Applied**: Replaced `scale-103` → `scale-105` in both files.

```diff
- className="object-cover transition-transform duration-500 group-hover:scale-103"
+ className="object-cover transition-transform duration-500 group-hover:scale-105"
```

---

### BUG-003 — `/contact` and `/blog` Missing from Sitemap
**Severity**: LOW  
**Module**: SEO  
**Affected Files**: `src/app/sitemap.ts`

**Description**: The `/contact` and `/blog` routes both have functional page files (`src/app/contact/page.tsx`, `src/app/blog/page.tsx`) and their routes are accessible at runtime. However, they were absent from the generated `sitemap.xml`. Search engine crawlers would not discover these pages through the sitemap.

**Fix Applied**: Added both routes to the `actualRoutes` array in `sitemap.ts`.

```diff
  '/cafe-menu',
+ '/contact',
+ '/blog',
  '/delivery-areas',
```

---

### BUG-004 — Footer Social Links Using Generic Root Domains
**Severity**: LOW  
**Module**: Footer  
**Affected Files**: `src/components/layout/Footer.tsx`

**Description**: The Footer's LinkedIn and YouTube social links used hardcoded generic root domains (`https://linkedin.com`, `https://youtube.com`) instead of brand-specific profile URLs. The Instagram and Facebook links were correctly using brand-specific URLs from `SOCIAL_LINKS` constants. This inconsistency meant LinkedIn and YouTube clicks landed users on the platform homepage rather than the business profile.

**Fix Applied**:
1. Added `linkedin` key to `SOCIAL_LINKS` constants and `SocialLinks` interface
2. Updated Footer to reference `SOCIAL_LINKS.linkedin` and `SOCIAL_LINKS.youtube`

```diff
// constants/index.ts
export const SOCIAL_LINKS: SocialLinks = {
  ...
+ linkedin: 'https://linkedin.com/company/cafeserenity',
};

// Footer.tsx
- href="https://linkedin.com"
+ href={SOCIAL_LINKS.linkedin || 'https://linkedin.com/company/cafeserenity'}

- href="https://youtube.com"
+ href={SOCIAL_LINKS.youtube || 'https://youtube.com/@cafeserenity.kochi'}
```

---

## Bugs Intentionally Not Fixed

| Finding | Reason |
|---|---|
| Footer "App Store (Soon)" & "Google Play (Soon)" are non-functional `<span>` elements | Intentional placeholder. No UX impact — correctly labelled as "Soon" with `cursor-not-allowed`. |
| Header search bar does not navigate to Café Menu | By design — the header search is a UX affordance; the Café Menu page has its own dedicated search input. |
| Navigation "Reviews" and "Location" hash links (`/#reviews`, `/#location`) navigate to homepage sections | By design — no standalone /reviews or /location route exists. |

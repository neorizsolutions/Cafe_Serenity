# Café Serenity content restructuring report

Completed 2 November 2026.

## Content and routes

- Replaced the homepage sequence with the existing hero, Biriyani collection, Snacks & Quick Bites, Why Café Serenity, Visit Us and final contact invitation.
- Disabled the former offering selector, meal journey, meal showcase and health/kitchen FAQ component. Their original implementations, menu-plan data and all six Healthy Choices pages are restored as line comments in their original files. Previous versions of modified files containing diet/health content are also preserved as comments.
- Permanently redirect `/healthy-choices/:path*`, `/healthy-meals/:path*` and `/meal-plans/:path*` directly to `/cafe-menu`. Old URLs keep their redirects; restored route files contain only a notFound fallback outside the commented original implementation and remain excluded from the sitemap.
- Updated shared desktop/mobile navigation, footer, contact links and 404 recovery links.

## Menu source of truth

`src/data/cafe-menu/items.ts` supplies both homepage collections and the menu page. Exactly two categories and ten entries remain:

| Biriyani | Half | Full |
| --- | ---: | ---: |
| Hyderabadi Biriyani | ₹90 | ₹150 |
| Thalappakatti Biriyani | ₹90 | ₹150 |
| Chettinad Biriyani | ₹90 | ₹150 |
| Ravuthar Biriyani | ₹90 | ₹150 |
| Ambur Biriyani | ₹90 | ₹150 |
| Dhilli Darbar Biriyani | ₹90 | ₹150 |
| Kozhikode Biriyani | ₹90 | ₹150 |
| Malabar Biriyani | ₹90 | ₹150 |

Snacks: Regular Snacks ₹12 each; Egg Puffs ₹15 each. No individual regular snack varieties, ingredient specifications or vegetarian classifications were invented.

## Supporting pages and SEO

About, Contact, FAQ, Blog, Privacy Policy, Terms and Refund Policy now describe the restaurant. Removed invented chef identity, licence/certification claims, oil and additive claims, conflicting opening hours, account-credit refund rules and delivery/payment claims. The Blog presents menu information without invented announcements. Legal pages retain their existing section structure with factual website/contact information and no new refund promises.

Updated default/page titles, descriptions, Open Graph image, manifest, page-specific canonical URLs and sitemap. Existing robots rules and metadata helper remain intact. FAQ answers and FAQPage JSON-LD share one data source. Existing food-establishment microdata remains; the unverified licence number was removed.

## Design and imagery

Preserved CSS theme, typography, colours, header, footer, hero frame, card treatment, editorial menu, animation wrappers, responsive breakpoints, dependencies and Next.js architecture. Added overflow containment to the reused menu section after testing revealed its decorative background caused horizontal scrolling.

Added generated illustrative Biriyani and Egg Puffs photographs. The same generic Biriyani photo is reused because verified variety-specific assets were unavailable. Regular Snacks retains the existing neutral card fallback rather than depicting an unconfirmed snack variety. Old unreferenced image files and historical architecture documents remain in the repository; they are not rendered by the website.

## Verification

- `npm run lint`: passed, no errors or warnings.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; all 17 static outputs generated. Network access was required for the unchanged Geist Google Font.
- Production HTTP checks: all nine content pages returned 200; menu names/prices and absence of old marketing verified.
- Four representative legacy route requests returned 308 directly to `/cafe-menu`.
- Canonical URLs, sitemap, robots sitemap reference and FAQ structured data verified.
- Browser: checked mobile (390px), tablet (768px) and desktop (1440px); prices readable and no horizontal document overflow after the containment fix. Mobile menu opens and navigates to Our Menu.
- Original health/diet terms remain in disabled line comments for future reactivation; active customer-facing copy uses the restaurant menu.

## Business information requiring owner verification

No authoritative matching listing was found in the available search results. Existing phone 093882 62626, WhatsApp, Kakkanad address, coordinates (10.0125, 76.3485), social links and canonical domain `https://cafeserenity.com` were preserved from the original project to avoid breaking existing contact functionality. These must not be treated as independently verified. The FSSAI number and opening-hour assertions were removed. Current hours are requested by phone. Owner confirmation of the retained business values is still outstanding.

## Remaining limitations

- Variety-specific restaurant photographs and a verified regular-snack image are not available.
- Real-world phone/WhatsApp responsiveness and map accuracy were not verified by contacting the restaurant.
- No deployment was performed.

## Files changed
- `CONTENT_RESTRUCTURING_REPORT.md`
- `next.config.ts`
- `public/images/biriyani.png`
- `public/images/egg-puffs.png`
- `src/app/about/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/cafe-menu/layout.tsx`
- `src/app/cafe-menu/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/healthy-choices/balanced/page.tsx`
- `src/app/healthy-choices/corporate/page.tsx`
- `src/app/healthy-choices/diabetic/page.tsx`
- `src/app/healthy-choices/high-protein/page.tsx`
- `src/app/healthy-choices/page.tsx`
- `src/app/healthy-choices/weight-loss/page.tsx`
- `src/app/manifest.ts`
- `src/app/not-found.tsx`
- `src/app/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/refund-policy/page.tsx`
- `src/app/sitemap.ts`
- `src/app/terms-and-conditions/page.tsx`
- `src/components/cafe-menu/CafeMenuSection.tsx`
- `src/components/healthy-choices/MealExperienceSection.tsx`
- `src/components/home/FinalConversion.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/HowItWorks.tsx`
- `src/components/home/Offerings.tsx`
- `src/components/home/TrustCenter.tsx`
- `src/components/home/VisitUs.tsx`
- `src/components/home/WhyChooseUs.tsx`
- `src/components/layout/Footer.tsx`
- `src/constants/index.ts`
- `src/data/cafe-menu/items.ts`
- `src/data/faqs.ts`
- `src/data/healthy-choices/plans.ts`
- `src/types/index.ts`

## Preservation correction

At the owner’s request, no deleted source files remain. Original health/diet code is preserved as comments, including its former homepage integration, navigation, supporting-page content and types. The active restaurant experience remains unchanged.
## Latest menu and presentation update

The owner subsequently authorized named Kerala evening snacks. Regular Snacks has been expanded into Cutlet, Vada, Samosa, Pazham Pori and Bonda at the existing ₹12 each rate; Egg Puffs remains ₹15. The menu now has eight Biriyani entries and six snack entries. This supersedes the earlier ten-entry limitation and generic-snack requirement.

Product photographs and image placeholders were removed from the homepage menu collections and the menu page, including the menu-page hero and duplicate photo showcase. The homepage hero/editorial imagery remains. Optional `imageSrc` support in `src/components/cafe-menu/MenuCard.tsx` allows future owner-supplied images through `src/data/cafe-menu/items.ts`.

Removed decorative eyebrow labels across active pages (including the Café Serenity · Kakkanad and Our Restaurant examples). Removed Instagram, Facebook, LinkedIn and YouTube footer links. Improved the footer with a menu invitation, three-column layout, Contact and FAQ navigation, and retained contact/directions/legal information. Added an animated hero scroll invitation with smooth anchor scrolling and a reduced-motion alternative.

Validation: lint, TypeScript and production build passed. Browser checks confirmed all six snack cards, zero menu-page food images, zero social-profile links, functional hero menu anchor and no horizontal overflow at desktop, tablet and mobile widths. The commented diet/health implementations remain preserved.

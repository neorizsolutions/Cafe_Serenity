# Café Serenity Module Architecture

This document describes the architectural separation of Café Serenity's food systems into two separate, decoupled modules: **Healthy Meals** and **Café Menu**. This separation ensures that diet-focused subscriptions and standard restaurant cafe items are treated as separate content systems.

---

## 1. Directory Structure

The files are structured as follows:

```
src/
  ├── app/
  │   ├── healthy-meals/                # Route: /healthy-meals
  │   │   ├── page.tsx                  # Healthy meals directory page
  │   │   ├── weight-loss/page.tsx      # Sub-plan: Weight Loss Deficit
  │   │   ├── high-protein/page.tsx     # Sub-plan: High Protein & Gym
  │   │   ├── diabetic/page.tsx         # Sub-plan: Diabetic Friendly
  │   │   ├── balanced/page.tsx         # Sub-plan: Balanced Diet Box
  │   │   └── corporate/page.tsx        # Sub-plan: Corporate IT Lunches
  │   └── cafe-menu/                    # Route: /cafe-menu
  │       └── page.tsx                  # Café Menu directory page
  │
  ├── components/
  │   ├── healthy-meals/                # Components specific to healthy meals
  │   │   ├── MealExperienceSection.tsx # Philosopy & category grid
  │   │   └── PricingSection.tsx        # Subscription Pricing & Plan details
  │   └── cafe-menu/                    # Components specific to cafe menu
  │       └── CafeMenuSection.tsx       # Breakfast & beverages listing
  │
  ├── data/
  │   ├── healthy-meals/
  │   │   └── plans.ts                  # Subscriptions database array
  │   └── cafe-menu/
  │       └── items.ts                  # Breakfast and hot beverages database array
  │
  └── types/
      ├── healthy-meals.ts              # HealthyMealPlan type definition
      ├── cafe-menu.ts                  # CafeMenuItem type definition
      └── index.ts                      # Core index exporting all types
```

---

## 2. Module Specifications

### Module 1: Healthy Meals
* **Purpose**: Portioned, dietitian-approved wellness programs and deficit meal boxes.
* **Content**: 
  - Weight Loss Deficit Plan (~350 kcal, 24g protein)
  - High Protein & Gym Plan (~600 kcal, 45g protein)
  - Balanced Diet Box (~450 kcal, 26g protein)
  - Diabetic Friendly Plan (~400 kcal, 26g protein)
  - Corporate IT Lunches (~450 kcal, 30g protein)
* **Backing Types**: `HealthyMealPlan` defined in [healthy-meals.ts](file:///c:/Projects/Neoriz_Salad/src/types/healthy-meals.ts)
* **Data Store**: [plans.ts](file:///c:/Projects/Neoriz_Salad/src/data/healthy-meals/plans.ts)

### Module 2: Café Menu
* **Purpose**: Affordable South Indian breakfast comfort foods and brews served hot throughout the day.
* **Content**:
  - Idli Vada Combo
  - Steamed Idli
  - Crispy Medu Vada
  - Ghee Ven Pongal
  - Rava Kichadi
  - Classic Rava Upma
  - Ghee Rava Kesari
  - Filter Coffee
  - Kochi Cardamom Tea
* **Backing Types**: `CafeMenuItem` defined in [cafe-menu.ts](file:///c:/Projects/Neoriz_Salad/src/types/cafe-menu.ts)
* **Data Store**: [items.ts](file:///c:/Projects/Neoriz_Salad/src/data/cafe-menu/items.ts)

---

## 3. Navigation & Routing Strategy

* **URL Isolation**: Both `/healthy-meals` and `/cafe-menu` are independently addressable routes.
* **Navigation Links**: Header and footer items target `/healthy-meals` and `/cafe-menu` rather than homepage anchor hashes.
* **Compatibility Layer**: Configure Next.js HTTP redirects in [next.config.ts](file:///c:/Projects/Neoriz_Salad/next.config.ts) to map `/meal-plans` routes to `/healthy-meals` dynamically:
  - `/meal-plans` ➔ `/healthy-meals` (301 Permanent Redirect)
  - `/meal-plans/:slug` ➔ `/healthy-meals/:slug` (301 Permanent Redirect)

---

## 4. Shared Components

Shared visual building blocks remain in:
* `src/components/common/`: Container, Section, Typography, MotionWrapper.
* `src/components/layout/`: Header, Footer.

Business logic and dataset mappings are completely isolated inside their respective modules.

---

## 5. SEO Structure

Proper, semantic, non-stuffed SEO metadata is configured for both routes utilizing `constructMetadata`:
- **Healthy Meals Page**: `"Diet & Healthy Subscription Meal Plans | Café Serenity"`
- **Café Menu Page**: `"Morning Favourites Café Menu | Café Serenity Kakkanad"`
- **Sub-plans**: Path-specific tags configured for search engines.

---

## 6. Future Enhancement Boundaries

* **Healthy Meals**: Will support calories/protein tags, customized portion mapping, and freeze/unfreeze scheduling systems.
* **Café Menu**: Will support categories (vegetarian/non-vegetarian), breakfast/snack filters, and live availability indicators.
* **Ordering / Payments**: Under no circumstances should payments or checkout logic be merged into this core module layer in Phase 1.

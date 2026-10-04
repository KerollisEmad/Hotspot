<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Hotspot Digital Menu — Project Rules & Guidelines

Read this document fully before proposing or making changes. It captures architectural decisions locked in during planning. Do not re-litigate or deviate from these rules unless explicitly instructed by the project owner.

## 1. Project Scope
- **Phase 1 (CURRENT & ONLY IN SCOPE):** QR-scan digital menu. Display only.
- **Out of Scope (Phase 2 & Phase 3):** No cart, no online orders, no checkout, no payment gateways, no restaurant printer integrations. Do not build or scaffold these.

## 2. Brand Identity & Strict Color Palette
- **Restaurant Name:** Hotspot
- **Slogan:** "Taste Connected Successfully"
- **Colors:** STRICTLY Red (`#ED2527`) and White (`#FFFFFF`). Absolutely no other colors in the UI (no neutral grays, blues, etc.).
- **Logo:** Existing designed logo at `public/images/logo.png`. Do NOT generate a new logo.
- **Brand Context:** Hotspot serves events year-round in addition to Egypt's North Coast beach season. Copy must not restrict the brand to "beach season only".

## 3. Tech Stack & Architecture
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Layer Architecture:**
  - Menu data lives statically in `src/lib/menu.ts`.
  - **CRITICAL RULE:** Pages and components must NEVER import `src/lib/menu.ts` directly.
  - Every page and component must query menu data via `getVisibleMenu()` exported from `src/lib/getMenu.ts`.
  - This abstraction guarantees a smooth transition when Phase 2 replaces static files with an API/database.

## 4. Internationalization & Language Behavior
- Bilingual support: Arabic (`ar`) and English (`en`) from day one.
- Language selection happens on the Welcome screen and is persisted in `localStorage` and React Context.
- Menu page does not need an active language switcher button as a priority.
- Arabic requires full RTL layout flipping (`dir="rtl"`), not merely text translation.

## 5. Welcome Screen Layout
- Order (Top to Bottom):
  1. Logo (`public/images/logo.png`)
  2. Restaurant name / logo mark
  3. Slogan ("Taste Connected Successfully")
  4. Creative brand visual accent (strict red & white)
  5. Two language selection buttons (English / العربية)
- NO navigation bar, NO search bar, NO cart icon, NO menu items on this screen.

## 6. Theme Toggle (Two-Color Invert Mode)
- Two modes using ONLY red and white:
  - Standard Mode: White background, Red accent/text/elements.
  - Inverted Mode: Red background, White accent/text/elements.
- Implement as a toggle, not a separate page or route.

## 7. Menu Structure & Size Variants Rule
- Hierarchy: Groups (`Food`, `Drinks`, `Dessert`) → Categories → Items.
- **CRITICAL RULE ON SIZE VARIANTS:** Items with size variants (e.g., Single/Double, S/D) MUST be separate items with their own distinct `id`s. They must NEVER be collapsed into a single card with size selector buttons.
- No product descriptions in Phase 1 — display item name and price only.
- Every category and item contains an `isVisible: boolean` flag; respect this flag when querying and rendering via `getVisibleMenu()`.
- Use placeholders for item photos until real photography is supplied.

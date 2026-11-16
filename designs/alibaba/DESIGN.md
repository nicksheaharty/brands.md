---
name: Alibaba
slug: alibaba
url: https://alibaba.com
category: Commerce
tagline: "Busy B2B marketplace: giant search bar, warm orange actions, dense product grids."
updated: 2026-11-16
appStoreId: 503451073
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Alibaba Orange
    hex: "#FF6A00"
    role: Logo, focus outlines, small dots and brand moments
  - name: Accent Secondary
    hex: "#FA6400"
    role: Primary button fill, active tab, AI-mode icons
  - name: Accent Primary
    hex: "#D64000"
    role: Accessible orange for text links and pressed states
  - name: Ink
    hex: "#222222"
    role: Primary text, dark inverse background
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards
  - name: Gray Container
    hex: "#F4F4F4"
    role: Dim background, containers, chips
  - name: Surface
    hex: "#F8F8F8"
    role: Section surface
  - name: Outline
    hex: "#DDDDDD"
    role: Borders, dividers
  - name: Secondary Text
    hex: "#444444"
    role: Secondary text
  - name: Tertiary Text
    hex: "#666666"
    role: Tertiary text, metadata
  - name: Helper Text
    hex: "#767676"
    role: Helper text, placeholders
  - name: Orange Container
    hex: "#FFF3EB"
    role: Tinted orange background for highlights
  - name: Promotion Red
    hex: "#DE0505"
    role: Deals, discounts
  - name: Protection Green
    hex: "#00820D"
    role: Trade Assurance and order protection badges
  - name: Notice Blue
    hex: "#0066CC"
    role: Informational notices and links
  - name: Error
    hex: "#BA0909"
    role: Errors
fonts:
  display:
    family: "Alibaba B2B Sans"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Alibaba B2B Sans"
    fallback: "Inter"
    weights: [400, 600]
typeScale:
  - { role: Display L, size: 36, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Display M, size: 32, weight: 700, lineHeight: 1.31, tracking: "0" }
  - { role: Display S, size: 28, weight: 700, lineHeight: 1.36, tracking: "0" }
  - { role: Heading L, size: 24, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Heading M, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Heading S, size: 16, weight: 600, lineHeight: 1.375, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 999 }
spacing: [2, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48]
shadows:
  - { name: Small, value: "0 0 4px 0 rgba(0,0,0,0.05), 0 1px 10px 0 rgba(0,0,0,0.07)" }
  - { name: Popover, value: "0 2px 6px 2px rgba(0,0,0,0.12)" }
  - { name: Soft, value: "0 4px 20px 0 rgba(0,0,0,0.05)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#222222"
  muted: "#666666"
  border: "#DDDDDD"
  accent: "#FA6400"
  accentText: "#FFFFFF"
  radius: 999
  buttonStyle: pill
---

# Alibaba

## 1. Visual Theme & Atmosphere

Alibaba.com is Alibaba Group's global B2B marketplace, where businesses search for products, compare suppliers, request quotations and order in bulk. The page is built around one thing: a large search bar. Below it come category rails, ranking lists, "Frequently searched" chips and endless product grids. The look is utilitarian and dense: white and light grey surfaces, near-black `#222222` text, and a warm orange used for actions, the logo and promotional moments.

What makes it recognisable:

- **The orange smile.** The logo is a hand-drawn "a" shaped like a smiling face beside the Alibaba wordmark, in orange `#FF6A00`.
- **Search first.** A tall, rounded search field with an orange search button, tabs for Products, Manufacturers and Worldwide, image search, and an AI mode with an orange-to-amber gradient.
- **Dense commerce grids.** Small product cards with price ranges, minimum order quantity (MOQ), supplier badges and ratings.
- **Pill shapes.** Search bars, chips and primary buttons use full radius (999px); cards use 8-16px.
- **Trust badges.** Green protection badges ("Trade Assurance"), verified-supplier labels and ranking tags in small tinted containers.
- **Warm gradients for AI and promotions.** Red-orange-amber gradients (`#FF2D0D` to `#FFAB1A`) mark AI sourcing features and campaigns.

Mood words: busy, practical, global, trade-focused, warm.

## 2. Color Palette & Roles

Values come from the live `:root` tokens in alibaba.com's homepage CSS.

| Token | Hex | Role |
|---|---|---|
| Logo orange | `#FF6A00` | Logo, focus outline, dots |
| accent-secondary | `#FA6400` | Primary buttons, active tabs |
| accent-primary | `#D64000` | Orange text links, pressed button |
| accent-on-primary-container | `#CC3D00` | Orange text on tinted containers |
| accent-primary-container | `#FFF3EB` | Orange tint backgrounds |
| layer-background | `#FFFFFF` | Page |
| layer-background-dim / container | `#F4F4F4` | Grey sections, chips, inputs |
| layer-surface | `#F8F8F8` | Section surfaces |
| layer-container-dimer / outline | `#DDDDDD` | Borders |
| on-layer-primary | `#222222` | Primary text |
| on-layer-secondary | `#444444` | Secondary text |
| on-layer-tertiary | `#666666` | Tertiary text |
| on-layer-helper | `#767676` | Helper, placeholder |
| inverse background | `#222222` | Dark tooltips, inverse areas |
| inverse container | `#444444` | Inverse chips |
| inverse tertiary text | `#B8B8B8` | Muted text on dark |

### Semantic and business colors

| Token | Text / main | Container | Use |
|---|---|---|---|
| support-success | `#0D8046` | | Success |
| support-protection | `#00820D` | `#F0F9EB` | Trade Assurance, order protection |
| support-promotion | `#DE0505` | `#FFEDED` | Deals, discounts |
| support-notice | `#0066CC` | `#EDF4FB` | Notices |
| support-error | `#BA0909` | `#FFF1F1` | Errors |
| business-guaranteed | `#4B1D1F` | `#FFEBD8` | Guaranteed delivery tags |
| business-local | `#120650` | `#E7EDFF` | Local stock tags |
| business-customize | `#210650` | `#F2E9FD` | Customisation tags |
| business-ranking | `#5B3D2D` | `#F2EAE6` | Top ranking tags |

### AI and promo gradients

```css
.alibaba-ai-gradient {
  background: linear-gradient(83deg, #FF2D0D 2.73%, #FF5E1A 26.36%, #FF6400 50%, #FF7E0D 73.64%, #FFAB1A 97.27%);
}
.alibaba-ai-text {
  background: linear-gradient(263deg, #FF8A24 2.73%, #F24D0C 55.82%, #E53601 97.27%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

The AI buyer palette also includes `#FF4D00`, `#FF7226`, `#FF9359`, `#FFE7DB` and `#FFFAF7`.

### Dark mode

No dark theme on the marketplace. Inverse tokens (`#222222` backgrounds, white text, `#595959` outlines) are used for tooltips, overlays (`rgba(0,0,0,0.7)`) and some banners.

## 3. Typography

**Family:** `Alibaba_B2B_Sans`, a custom sans, with the stack `'Alibaba_B2B_Sans', Inter, 'SF Pro Text', Roboto, 'Helvetica Neue', Helvetica, Tahoma, Arial, 'PingFang SC', 'Microsoft YaHei'`. Many components fall back to Inter directly.

**Licensing:** Alibaba B2B Sans is proprietary. Use **Inter**, which Alibaba itself lists as the first fallback.

```css
font-family: "Alibaba_B2B_Sans", Inter, "SF Pro Text", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
```

### Scale (from `--pc-*` tokens)

| Token | Size | Line height | Weight |
|---|---|---|---|
| display-l | 36px | 48px | 700 |
| display-m | 32px | 42px | 700 |
| display-s | 28px | 38px | 700 |
| heading-l | 24px | 32px | 700 |
| heading-m | 20px | 26px | 600 |
| heading-s | 16px | 22px | 600 |
| body | 14px | 18px | 400 |
| caption | 12px | 16px | 400 |

Weights: regular 400, semibold 600, bold 700 (`--pc-font-theme-weight-*`). Tracking is 0 throughout. The homepage also uses 16px body for search and navigation.

### Rules

- Sentence case for headings ("Frequently searched", "Top ranking"); title case for product category names.
- Prices are bold 16-20px in `#222222`, often as a range ("US$1.20-2.50"), with the MOQ in 12-14px grey beneath.
- Avoid all caps except tiny badges.
- Mixed scripts are common; keep the stack with CJK fallbacks.

## 4. Logo & Brand Mark

The Alibaba logo pairs the **smiling "a" mark** (a looping brush-like stroke forming a face with a small smile) with the **Alibaba** wordmark in a heavy rounded sans, both in orange. On alibaba.com the header lockup reads "Alibaba.com".

- **Colors:** orange (`#FF6A00`, the Group logo file uses `#FF5A00`) on white; white on orange; single-color black for print.
- **Mark alone:** the smiling "a" is used for app icons and avatars, white on orange.
- **Clear space:** at least the height of the "A" cap around the lockup.
- **Minimum size:** about 90px wide for the horizontal lockup on screen.

Misuse:

- Do not swap the orange for the red-orange AI gradient.
- Do not redraw the mark with even strokes; keep the brush contrast.
- Do not separate ".com" from the wordmark or change its font.
- Do not place the orange logo on busy product photos.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#FA6400` | `#FFFFFF` 600 14-16px | none | 999px | 40px (search 48px) |
| Primary pressed | `#D64000` | `#FFFFFF` | none | 999px | |
| Secondary | `#FFFFFF` | `#222222` | 1px `#222222` | 999px | 40px |
| Tonal | `#FFF3EB` | `#CC3D00` | none | 999px | 32-40px |
| Neutral | `#F4F4F4` | `#222222` | none | 999px | 32-40px |
| AI / Pro | AI gradient | `#FFFFFF` | none | 999px | 40px |
| Text link | none | `#222222`, hover underline or `#D64000` | none | 0 | auto |

States: hover overlays `rgba(0,0,0,0.08)`, press `rgba(0,0,0,0.12)` (add-on tokens), focus `outline: 2px solid #FF6A00; outline-offset: 4px`, disabled `#F4F4F4` with `#B8B8B8` text.

```css
.alibaba-btn {
  font: 600 16px/1 "Alibaba_B2B_Sans", Inter, sans-serif;
  height: 40px;
  padding: 0 20px;
  border-radius: 999px;
  background: #FA6400;
  color: #FFFFFF;
  border: 0;
}
.alibaba-btn:hover { box-shadow: inset 0 0 0 999px rgba(0,0,0,0.08); }
.alibaba-btn:active { background: #D64000; }
.alibaba-btn:focus-visible { outline: 2px solid #FF6A00; outline-offset: 4px; }
```

### Search bar (signature)

- Full-width within the content column, 48-56px tall, white with a 2px `#222222` or orange border, radius 999px.
- Left: a category or mode switch; centre: input (16px, placeholder `#767676`); right: camera icon for image search and a round or pill orange "Search" button.
- Tabs above for "Products", "Manufacturers", "Worldwide" (16px, active bold with a 2px orange or black underline).
- AI mode switches the wrapper to the red-orange gradient and the button text to gradient text on `#FFF8F3`.
- Below: "Frequently searched" chips (pill, `#F4F4F4`, 14px, 32px tall).

### Header

White, two rows on desktop: logo left, search centre, and on the right a delivery-to selector, language/currency, "Sign in" link and an orange "Sign up" pill. A second row lists "All categories", "Featured selections", "Trade Assurance", "Request for Quotation" and help links in 14px.

### Product card

- White, radius 8-12px, no border or 1px `#F4F4F4`, hover adds `0 0 4px rgba(0,0,0,0.05), 0 1px 10px rgba(0,0,0,0.07)`.
- Square image with 8px radius, then a 2-line title (14px `#222222`), price range (16-20px bold), MOQ ("Min. order: 100 pieces", 12-14px `#666666`), supplier years and country flag, and small badges (Verified, Trade Assurance in green container).

### Category and ranking modules

Grey `#F4F4F4` or `#F8F8F8` panels with 16px radius containing a header row (20-24px bold title, "View more" link), then 4-6 product thumbnails. Ranking items carry a numbered tag in the ranking container colors.

### RFQ form

A white card with 16px radius: product name input, quantity with unit select, and an orange "Request for Quotation" button. Inputs 40px, radius 8px, background `#F4F4F4` or white with 1px `#DDDDDD`, focus border `#222222`.

### Badges and tags

12px text, 2-4px radius (or pill), padding 2px 6px, using the business container/on-container pairs (protection green, guaranteed, local, ranking, customize).

### Popovers and dialogs

White, 12-16px radius, shadow `0 2px 6px 2px rgba(0,0,0,0.12)` or `0 4px 20px rgba(0,0,0,0.25)` for modals, overlay `rgba(0,0,0,0.7)`.

## 6. Layout & Spacing

- **Max width:** about 1440-1600px with 40px side padding on desktop (approx.).
- **Spacing tokens:** 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48px (`--pc-spacing-*`).
- **Radius tokens:** 2, 4, 8, 12, 16px and full 999px (`--pc-radius-*`).
- **Grid:** product grids of 5-6 columns on desktop, 2 on mobile, 12-16px gaps.
- **Section spacing:** 24-40px; the page is dense and scrolls long.
- **Mobile web:** sticky search at the top, horizontal chip scrollers, 2-column grids.

## 7. Depth, Elevation & Motion

- **Shadows (live values):** small card `0 0 4px rgba(0,0,0,0.05), 0 1px 10px rgba(0,0,0,0.07)`; popover `0 2px 6px 2px rgba(0,0,0,0.12)`; soft `0 4px 20px rgba(0,0,0,0.05)`; modal `0 4px 20px rgba(0,0,0,0.25)`.
- **Layers:** white cards on `#F4F4F4` page sections; borders `#DDDDDD` for inputs and dividers.
- **Motion:** functional. Carousels slide, dropdowns fade in about 150-200ms, AI gradients animate their angle (`--gradient-angle`) slowly on the AI search wrapper. Image search uses a conic-gradient border glow.

## 8. Iconography & Imagery

- **Icons:** a custom icon font (NextIcon, searchbar-iconfont), mostly line icons 16-24px in `#222222`, orange for active.
- **Product images:** supplier photos on white backgrounds, square crops, varied quality; the UI gives them consistent 8px radii and grey placeholders.
- **Banners:** factory floors, shipping containers, warehouse shelves and lifestyle product shots, often with orange or warm gradient overlays.
- **Flags:** small country flags next to supplier names.

## 9. Voice & Microcopy

Direct, practical and trade-oriented. Speaks to business buyers. Strings from the live homepage today:

- "Welcome to Alibaba.com"
- Search tabs: "Products", "Manufacturers", "Worldwide"
- "Frequently searched", "Top Ranking", "Request for Quotation", "Trade Assurance"
- "Quick order and pay", "No import charges", "US local stock"
- "Sign in", "Get started"

Rules: concise, functional labels; units and quantities spelled out ("Min. order"); avoid casual jokes; show trust signals near prices.

## 10. Do's and Don'ts

**Do**

- Make search the biggest element on the page.
- Use orange (`#FA6400` / `#FF6A00`) for primary actions and brand; `#D64000` for orange text.
- Keep text `#222222` on white and `#F4F4F4`.
- Use pill shapes for search, chips and buttons, 8-16px radii for cards.
- Show price ranges, MOQ and supplier trust badges on every product card.

**Don't**

- Don't use pure black text or saturated backgrounds behind product grids.
- Don't use orange for body text (low contrast); use `#D64000` for links.
- Don't put the AI gradient on ordinary buttons.
- Don't hide MOQ or supplier info; buyers rely on it.
- Don't use heavy shadows; keep elevation light.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Alibaba.com, the B2B marketplace. White page with `#F4F4F4` grey sections, text `#222222`, secondary `#444444`, tertiary `#666666`, helper `#767676`, borders `#DDDDDD`. Brand orange `#FF6A00` for the logo and focus outlines; primary buttons `#FA6400` with white 600 text, fully rounded (999px), 40px tall, pressed `#D64000`; orange text links `#D64000`; orange tint container `#FFF3EB`. Font "Alibaba_B2B_Sans" with Inter fallback; body 14px/18px, headings 20-24px bold, display 28-36px. The page centres a big pill search bar (48-56px, 2px dark border, camera icon, orange Search button) with tabs Products / Manufacturers / Worldwide and "Frequently searched" grey chips. Below: category panels with 16px radius and dense 5-6 column product grids; each card has a square image (8px radius), 2-line title, bold price range, "Min. order" line, supplier country and green Trade Assurance badge (`#00820D` on `#F0F9EB`). Card hover shadow `0 0 4px rgba(0,0,0,0.05), 0 1px 10px rgba(0,0,0,0.07)`. AI features use a red-orange gradient `#FF2D0D` to `#FFAB1A`.

```css
:root {
  --brand-orange: #FF6A00;
  --brand-orange-action: #FA6400;
  --brand-orange-strong: #D64000;
  --brand-orange-text: #CC3D00;
  --brand-orange-tint: #FFF3EB;
  --brand-text: #222222;
  --brand-text-secondary: #444444;
  --brand-text-tertiary: #666666;
  --brand-text-helper: #767676;
  --brand-bg: #FFFFFF;
  --brand-bg-dim: #F4F4F4;
  --brand-surface: #F8F8F8;
  --brand-outline: #DDDDDD;
  --brand-success: #0D8046;
  --brand-protection: #00820D;
  --brand-protection-bg: #F0F9EB;
  --brand-promotion: #DE0505;
  --brand-notice: #0066CC;
  --brand-error: #BA0909;
  --brand-overlay: rgba(0,0,0,0.7);
  --brand-hover: rgba(0,0,0,0.08);
  --brand-press: rgba(0,0,0,0.12);
  --brand-ai-gradient: linear-gradient(83deg, #FF2D0D 2.73%, #FF5E1A 26.36%, #FF6400 50%, #FF7E0D 73.64%, #FFAB1A 97.27%);
  --brand-font: "Alibaba_B2B_Sans", Inter, "SF Pro Text", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  --brand-radius-xs: 4px;
  --brand-radius-s: 8px;
  --brand-radius-m: 12px;
  --brand-radius-l: 16px;
  --brand-radius-full: 999px;
  --brand-shadow-s: 0 0 4px 0 rgba(0,0,0,0.05), 0 1px 10px 0 rgba(0,0,0,0.07);
  --brand-shadow-popover: 0 2px 6px 2px rgba(0,0,0,0.12);
  --brand-shadow-modal: 0 4px 20px 0 rgba(0,0,0,0.25);
}
```

---

Values are observed from the public alibaba.com homepage CSS tokens on 2026-11-16; max width, motion timings and the primary button mapping are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Alibaba Group.

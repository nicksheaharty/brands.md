---
name: Dell
slug: dell
url: https://dell.com
category: Hardware
tagline: "Dense white storefront in Roboto, Dell blue buttons with 2px corners and navy promo bands."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Dell Blue
    hex: "#0672CB"
    role: Primary buttons, links, active states (Dell Design System)
  - name: Logo Blue
    hex: "#0076CE"
    role: Dell Technologies logo in the header
  - name: Navy
    hex: "#002A58"
    role: Promo bands, sign-in panel, dark sections
  - name: Ink
    hex: "#0E0E0E"
    role: Headings, body text, editorial buttons
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Blue Hover
    hex: "#0063B8"
    role: Primary hover, secondary button text and border
  - name: Blue Pressed
    hex: "#00468B"
    role: Primary pressed, focus outline
  - name: Grey Text
    hex: "#636363"
    role: Secondary text, labels
  - name: Light Grey
    hex: "#F0F0F0"
    role: Section and tile background
  - name: Cool Grey
    hex: "#F5F6F7"
    role: Alternate panel background
  - name: Border
    hex: "#C8C9C7"
    role: Dividers, cart rows, menu rules
  - name: Ice
    hex: "#D9F5FD"
    role: Secondary and tertiary button hover
  - name: AI Purple
    hex: "#8C44F7"
    role: AI PC and Copilot+ promotions
  - name: Deal Pink
    hex: "#E6609B"
    role: Seasonal sale gradients and badges
fonts:
  display:
    family: "Roboto"
    fallback: "Roboto"
    weights: [300, 500, 700]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [300, 400, 500]
typeScale:
  - { role: Hero, size: 40, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: H2, size: 32, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: H3, size: 24, weight: 500, lineHeight: 1.33, tracking: "0" }
  - { role: H4, size: 20, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Price, size: 24, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Tile, value: "0 4px 10px 0 rgba(0,0,0,0.05)" }
  - { name: Raised, value: "0 4px 16px rgba(0,43,85,0.12)" }
  - { name: Stacked, value: "0 2px 2px rgba(0,42,88,0.08), 0 4px 4px rgba(0,42,88,0.08), 0 8px 8px rgba(0,42,88,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F0"
  text: "#0E0E0E"
  muted: "#636363"
  border: "#C8C9C7"
  accent: "#0672CB"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# Dell

## 1. Visual Theme & Atmosphere

dell.com is a working store first. The page is white, dense and modular: deal rails, product tiles with prices and ratings, filter sidebars and comparison tables, all in Roboto. Color is functional. Dell blue (`#0672CB`) marks every action, deep navy (`#002A58`) frames promotional bands, and seasonal campaigns add their own gradients on top.

What makes it recognisable:

- **The tilted E.** The DELL wordmark with its E rotated about 30 degrees, shown in the header as part of the **Dell Technologies** lockup in logo blue (`#0076CE`).
- **2px corners.** Buttons, inputs and panels in the Dell Design System (DDS) have almost square 2px corners. It reads as precise and corporate.
- **Light Roboto headlines.** Big headings are often Roboto 300, which keeps a dense retail page from feeling heavy.
- **Navy promo modules.** Sign-in prompts, "what's happening" sections and featured offers sit on `#002A58` with white text.
- **Product-first tiles.** Laptops and monitors photographed on white or light grey, with name, key specs, price, savings and a blue "Buy" or "View" button.
- **Campaign layers.** Black Friday, Prime-style deal days and AI PC launches swap in their own color accents (purple `#8C44F7`, pink `#E6609B`, sky `#1495FF`) without changing the base system.

Mood words: practical, dependable, commercial, clean, efficient.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Dell Blue (DDS primary) | `#0672CB` | Primary button fill, links (`.dds__link`), active tabs |
| Blue Hover | `#0063B8` | Primary hover, secondary button border and text |
| Blue Pressed | `#00468B` | Primary active, focus ring `0 0 0 1px #00468B` |
| Logo Blue | `#0076CE` | Header logo |
| Navy | `#002A58` | Promo and sign-in panels |
| Deep Navy | `#141D28` | Footer and dark campaign bands (approximate role) |
| Ink | `#0E0E0E` | Text, editorial buttons |
| Grey Text | `#636363` | Secondary text |
| Border | `#C8C9C7` | Menu dividers, cart rows |
| Divider Light | `#E1E1E1` | Card borders, table rules |
| Light Grey | `#F0F0F0` | Tile and section backgrounds |
| Cool Grey | `#F5F6F7` | Panels, filter sidebars |
| White | `#FFFFFF` | Page |
| Ice | `#D9F5FD` | Secondary/tertiary hover fill |
| Ice Pressed | `#94DCF7` | Secondary/tertiary pressed fill |

### Campaign accents

| Name | Hex | Use |
|---|---|---|
| AI Purple | `#8C44F7` | AI PC, Copilot+ messaging |
| Deep Purple | `#561FC4` | Gradient end, AI chat surfaces |
| Lavender | `#EDE8F8` | AI module backgrounds |
| Deal Pink | `#E6609B` | Sale gradients |
| Sky | `#1495FF` | Gradient highlights |

### Semantic colors (approximate)

| State | Hex | Use |
|---|---|---|
| Success | `#008A00` text, `#E6F4E6` fill | In stock, order confirmed |
| Warning | `#C47D00` text, `#FFF4E0` fill | Limited stock, delays |
| Error | `#CE1126` text, `#FCE8EA` fill | Validation, out of stock |
| Savings | `#008A00` or red strike-through on list price | Price blocks |

## 3. Typography

**Family:** Roboto across the store and DDS, with long CJK and Indic fallback stacks per locale. Aptos appears inside the "Ask Dell AI" chat module.

**Licensing:** Roboto is free on Google Fonts.

```css
font-family: Roboto, Arial, Helvetica, sans-serif;
```

### Scale (approximate, from DDS usage)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero | 40px (28px mobile) | 300 | 1.2 |
| H2 | 32px | 300 | 1.25 |
| H3 | 24px | 500 | 1.33 |
| H4 | 20px | 500 | 1.4 |
| Body | 16px (1rem) | 400 | 1.5 (24px) |
| Small / button md | 14px | 400-500 | 24px |
| Caption | 12px | 400 | 16px |
| Price | 20-28px | 700 | 1.2 |
| Section label | 14px uppercase | 700 | 1.4 ("FEATURED DEALS") |

### Rules

- Sentence case for buttons ("Shop now", "Add to cart"); some section labels are uppercase.
- Product names follow Dell's current naming: Dell 16 Plus, Dell Pro Essential 14, Dell Pro Max, Alienware.
- Prices are bold with the sale price first and a struck-through list price beside it.
- Spec lists use a light bullet-free layout: label in grey, value in ink.

## 4. Logo & Brand Mark

The core mark is the **DELL** wordmark with the "E" tilted, a design that dates back decades. On dell.com it sits in the **Dell Technologies** lockup: DELL in heavy caps followed by "Technologies" in a light sans, all in `#0076CE`.

- **Color versions:** blue on white (primary), white on navy or blue, black for single-color print.
- **Icon:** the DELL wordmark alone, white on Dell blue, for app tiles and avatars.
- **Clear space:** the height of the "D" on every side (approximate).
- **Minimum size:** DELL wordmark 40px wide on screen.

Misuse:

- Do not straighten the E or rotate it at another angle.
- Do not retype the wordmark in Roboto.
- Do not recolor the logo with campaign colors.
- Do not put the blue logo on navy; switch to white.

## 5. Components

### Buttons (DDS)

| Variant | Background | Text | Border | Hover | Active |
|---|---|---|---|---|---|
| Primary | `#0672CB` | `#FFFFFF` | `#0672CB` | `#0063B8` | `#00468B` |
| Secondary | transparent | `#0063B8` | 1px `#0063B8` | bg `#D9F5FD` | bg `#94DCF7`, text `#00468B` |
| Tertiary | transparent | `#0063B8` | transparent | bg `#D9F5FD` | bg `#94DCF7` |
| Editorial | `#0E0E0E` | `#FFFFFF` | `#0E0E0E` | `#6E6E6E` | darker grey |

Sizes: default padding 11px 19px with 16px text (about 48px tall); md 7px 15px at 14px; sm 3px 11px at 14px. Radius 2px everywhere.

```css
.dds__button {
  display: inline-flex; align-items: center; justify-content: center;
  font: 400 1rem/1.5rem Roboto, Arial, sans-serif;
  padding: .6875rem 1.1875rem;
  border: 1px solid #0672CB;
  border-radius: 2px;
  background: #0672CB; color: #FFFFFF;
  cursor: pointer;
}
.dds__button:hover { background: #0063B8; border-color: #0063B8; }
.dds__button:active { background: #00468B; border-color: #00468B; }
.dds__button:focus-visible { box-shadow: 0 0 0 1px #00468B; outline: 2px solid #0672CB; outline-offset: 2px; }
.dds__button--secondary { background: transparent; color: #0063B8; border-color: #0063B8; }
```

### Inputs

- 40px tall, 1px `#7E7E7E` border (approximate), radius 2px, 16px text.
- Focus: 1px `#0672CB` border plus `0 0 0 1px #0672CB`.
- Search: full-width header field with a magnifier button; suggestions dropdown with 14px rows.
- Quantity steppers and dropdowns use the same 2px radius.

### Product tile

- White card, 1px `#E1E1E1` border or none on grey bands, radius 2-8px.
- Image top, product name 16-18px/500 link in ink, short spec list 14px `#636363`, rating stars, then price block (bold price, struck list price, "Save $X" in green), then a full-width blue button.
- Hover: `0 4px 16px rgba(0,43,85,.12)`.

### Header (unified masthead)

- Top row: Dell Technologies logo left, a wide search field center, right: "Sign In", "Contact Us", country flag, cart with count.
- Second row: category links ("Products", "Solutions", "Services", "Support", "Deals") with flyout menus.
- Mobile collapses into a hamburger with stacked rows separated by `#C8C9C7` dividers.

### Tabs

Underline tabs: 16px text, inactive `#636363`, active `#0E0E0E` with a 2px `#0672CB` bottom bar (inset `0 -2px 0 #1D73C2`).

### Badges

Small rectangular badges, radius 2px, 12px/500: "New", "Best Seller", "Deal" in blue, purple or pink fills with white text.

### Filters and tables

Left filter rail with checkbox groups, 14px labels and counts; comparison tables with sticky header rows, `#F5F6F7` header fill and `#E1E1E1` rules.

### Promo banner

Full-width band: navy `#002A58` or campaign gradient, headline in white Roboto 300 at 32-40px, one white or blue button, product image right.

## 6. Layout & Spacing

- **Grid:** 12 columns with 16px gutters on mobile and 24px on desktop.
- **Breakpoints:** 480, 768, 1024, 1366, 1584 and 1920px; very wide layouts cap at 2560px.
- **Content width:** about 1312-1584px for store grids.
- **Spacing:** 4px base; DDS rem steps (0.25, 0.5, 0.75, 1, 1.5, 2, 3rem).
- **Density:** high. Deal rails show 4-5 tiles per row on desktop, 1.2-1.5 with horizontal scroll on mobile.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Tile | `0 4px 10px 0 rgba(0,0,0,0.05)` |
| Soft | `0 2px 12px rgba(0,0,0,0.06)` |
| Raised | `0 4px 16px rgba(0,43,85,0.12)` |
| Stacked | `0 2px 2px rgba(0,42,88,.08), 0 4px 4px rgba(0,42,88,.08), 0 8px 8px rgba(0,42,88,.08)` |
| Inset field | `inset 0 2px 4px rgba(0,0,0,.12)` |

Shadows are navy-tinted and soft. Most cards are flat until hovered.

### Motion

- Carousels: `transform .5s ease-in-out`.
- Fades: `opacity .2s` to `.4s`.
- Accordions: `height .5s ease-in-out`.

## 8. Iconography & Imagery

- **Icons:** DDS line icons, 1.5px stroke, 16/24px, in ink or Dell blue.
- **Product photography:** devices on white or very light grey, three-quarter angle, open laptops with colorful wallpapers, accessories grouped.
- **Campaigns:** gradient backgrounds with product renders for seasonal sales and AI PC launches.

## 9. Voice & Microcopy

Helpful, clear and sales-focused. It explains specs plainly and pushes timely offers.

- Sentence case for actions; uppercase for short section labels.
- Short benefit statements next to product names.
- CTAs: "Shop now", "Buy now", "Add to cart", "View details", "Compare", "Sign In".
- Prices, discounts and delivery dates change daily; never hard-code them as facts.

Sample strings:

- Hero: "Unwrap Black Friday Early Access"
- Section: "FEATURED DEALS", "This Week's Holiday Deals"
- Product: "Copilot+ PCs combine powerful performance, built-in intelligence, and exceptional battery life."
- Status: "In stock", "Free shipping", "Estimated delivery"

## 10. Do's and Don'ts

**Do**

- Use `#0672CB` buttons with 2px corners.
- Keep pages white with grey bands and navy promo blocks.
- Show real product photos with specs and a clear price block.
- Use Roboto 300 for big headlines and 400-500 for UI.
- Keep focus states visible (navy outline).

**Don't**

- Don't round buttons into pills.
- Don't use campaign colors as the base palette.
- Don't hide prices or key specs behind hover.
- Don't use heavy black shadows; tint them navy and keep them soft.
- Don't mix the Alienware dark theme into Dell store pages.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Dell's online store. White page, text `#0E0E0E`, secondary text `#636363`, grey bands `#F0F0F0`, panels `#F5F6F7`, borders `#E1E1E1` and `#C8C9C7`. Font: `Roboto, Arial, Helvetica, sans-serif`; large headlines Roboto 300 at 32-40px, UI 14-16px weight 400-500. Primary buttons are Dell blue `#0672CB` with white text and a 2px radius, padding 11px 19px; hover `#0063B8`, pressed `#00468B`; secondary buttons are transparent with a 1px `#0063B8` border and `#D9F5FD` hover. Product tiles: image, name, spec bullets in grey, star rating, bold price with struck list price, full-width blue button, hover shadow `0 4px 16px rgba(0,43,85,.12)`. Promo bands are navy `#002A58` with white text. Header has a logo, wide search, sign in and cart. Dense 12-column layout up to about 1584px. Copy is plain and helpful.

```css
:root {
  --brand-blue: #0672CB;
  --brand-blue-hover: #0063B8;
  --brand-blue-pressed: #00468B;
  --brand-logo-blue: #0076CE;
  --brand-navy: #002A58;
  --brand-ink: #0E0E0E;
  --brand-text-muted: #636363;
  --brand-white: #FFFFFF;
  --brand-surface: #F0F0F0;
  --brand-surface-cool: #F5F6F7;
  --brand-border: #E1E1E1;
  --brand-border-strong: #C8C9C7;
  --brand-ice: #D9F5FD;
  --brand-ice-pressed: #94DCF7;
  --brand-ai-purple: #8C44F7;
  --brand-deal-pink: #E6609B;
  --brand-sky: #1495FF;
  --brand-font: Roboto, Arial, Helvetica, sans-serif;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 8px;
  --brand-shadow-tile: 0 4px 10px 0 rgba(0,0,0,0.05);
  --brand-shadow-raised: 0 4px 16px rgba(0,43,85,0.12);
  --brand-shadow-stacked: 0 2px 2px rgba(0,42,88,.08), 0 4px 4px rgba(0,42,88,.08), 0 8px 8px rgba(0,42,88,.08);
  --brand-duration: 200ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Dell.

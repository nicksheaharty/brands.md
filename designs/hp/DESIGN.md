---
name: HP
slug: hp
url: https://hp.com
category: Hardware
tagline: "Clean white storefront, electric blue circle logo, Forma DJR type and 8px rounded buttons."
updated: 2026-11-16
appStoreId: 469284907
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Electric Blue
    hex: "#024AD8"
    role: Logo on hp.com, primary buttons, links, nav accent
  - name: Gray 12
    hex: "#1A1A1A"
    role: Primary text, dark buttons, nav text
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Classic HP Blue
    hex: "#0096D6"
    role: Legacy logo blue, still used for some icons and partner assets
  - name: Blue Hover
    hex: "#103FB2"
    role: Primary button hover
  - name: Blue Pressed
    hex: "#0E3191"
    role: Primary button active
  - name: Blue Tint
    hex: "#E4EEFA"
    role: Selected backgrounds, info panels
  - name: Gray 9
    hex: "#3D3D3D"
    role: Secondary text, nav menu text
  - name: Gray 7
    hex: "#636363"
    role: Muted text, captions
  - name: Gray 3
    hex: "#E8E8E8"
    role: Borders, dividers
  - name: Gray 1
    hex: "#F5F5F5"
    role: Section and card background
  - name: Orange Bloom
    hex: "#FF5050"
    role: Coral accent for promotions and alerts
  - name: Power Storm
    hex: "#568393"
    role: Muted teal accent for business content
  - name: Navy
    hex: "#0A1D4E"
    role: Darkest blue for dark bands
fonts:
  display:
    family: "Forma DJR Micro"
    fallback: "Inter"
    weights: [500]
  body:
    family: "Forma DJR Micro"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Title Large, size: 72, weight: 500, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Title Medium, size: 56, weight: 500, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Title Small, size: 28, weight: 500, lineHeight: 1.0, tracking: "0" }
  - { role: Subtitle, size: 20, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Label Small, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 1.5px rgba(77,93,133,0.22), 0 7px 11.5px rgba(26,53,84,0.11)" }
  - { name: Raised, value: "0 4px 10.4px -2px rgba(82,83,101,0.3), 0 1px 1.1px 0 rgba(82,83,101,0.1)" }
  - { name: Overlay, value: "0 5px 20px 5px rgba(26,26,26,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#1A1A1A"
  muted: "#636363"
  border: "#E8E8E8"
  accent: "#024AD8"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# HP

## 1. Visual Theme & Atmosphere

HP's site is a bright, orderly storefront built on HP's Veneer-style token system (`--hpi-*`). White pages, near-black `#1A1A1A` text, large medium-weight headlines in Forma DJR, and a strong electric blue (`#024AD8`) for the logo and every primary action. Product photography of laptops, printers and accessories does most of the visual work.

What makes it recognisable:

- **The circle logo.** Lowercase italic "hp" cut out of a solid circle. On hp.com it is drawn in electric blue; older materials use the lighter HP blue `#0096D6`.
- **Medium-weight, tight headlines.** Forma DJR Micro at 500 with line height 1.0, from 44px on mobile up to 72px on wide screens.
- **8px rounded buttons.** Solid blue or near-black buttons with an 8px radius, a minimum width of 112px and two sizes (36px and 48px).
- **Neutral greys from a 13-step ramp.** `#FAFAFA` to `#1A1A1A`, used for backgrounds, borders and text.
- **16px radius cards** with soft, slightly blue-tinted shadows.
- **Named color families.** Electric Blue, Orange Bloom, Power Storm and Gray, each with 13 steps.

Mood words: modern, approachable, tidy, reliable, consumer-friendly.

## 2. Color Palette & Roles

Values below come from the `--hpi-color-*` and `--hpi-theme-*` tokens on hp.com.

### Electric Blue

| Step | Hex | Role |
|---|---|---|
| 0 | `#E4EEFA` | Selected and info backgrounds |
| 1 | `#C9E0FC` | Hover tint |
| 2 | `#B2D2FF` | Pressed tint, dark-mode active |
| 4 | `#72A3FF` | Blue on dark backgrounds |
| 5 | `#518CFF` | Focus outlines (`#5492FF` in nav) |
| 7 | `#024AD8` | Brand blue: logo, primary buttons, links |
| 8 | `#103FB2` | Primary hover |
| 9 | `#0E3191` | Primary active |
| 12 | `#0A1D4E` | Darkest blue bands |

### Gray

| Step | Hex | Role |
|---|---|---|
| 0 | `#FAFAFA` | Subtle background |
| 1 | `#F5F5F5` | Section and card fill |
| 3 | `#E8E8E8` | Borders, dividers |
| 4 | `#C2C2C2` | Strong borders, disabled |
| 7 | `#636363` | Muted text |
| 8 | `#525252` | Secondary text, nav hover |
| 9 | `#3D3D3D` | Nav menu text |
| 12 | `#1A1A1A` | Primary text, dark buttons |

### Accent families

| Family | Key step | Hex | Use |
|---|---|---|---|
| Orange Bloom | 5 | `#FF5050` | Sale tags, alerts, promo highlights |
| Orange Bloom | 7 | `#CC2D32` | Error text |
| Power Storm | 6 | `#568393` | Business and enterprise accents |
| Power Storm | 11 | `#003342` | Dark teal bands |
| Classic HP Blue | - | `#0096D6` | Legacy logo color, search-header icon |

### Semantic colors

| State | Hex |
|---|---|
| Error | `#CC2D32` text, `#FBE5E4` fill |
| Success | `#2E7D32` text (approximate) |
| Info | `#024AD8` on `#E4EEFA` |
| Focus | `#5492FF` 2px outline |

## 3. Typography

**Family:** Forma DJR Micro (Font Bureau / DJR, licensed). It is a modern grotesque related to Helvetica, drawn for small sizes, used here for everything from nav to 72px titles.

**Fallback:** **Inter** is the nearest free option. Use weight 500 for titles.

```css
--font: forma-djr-micro, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Scale (from `.title-*`, `.body-*`, `.label-*` classes)

| Class | Mobile | Tablet (441px+) | Desktop (1115px+) | Weight | Line height |
|---|---|---|---|---|---|
| `title-large` / h1 | 44px | 56px | 72px | 500 | 1.0 |
| `title-medium` / h2 | 36px | 44px | 56px | 500 | 1.0 |
| `title-small` / h4 | 24px | 28px | 28px | 500 | 1.0 |
| Subtitle | 18-20px | 20px | 20px | 500 | 1.3 (approximate) |
| `body-large` | 16px | 16px | 16px | 400 | 24px |
| Body | 14px | 14px | 14px | 400 | 20px |
| `label-small` | 12px | 12px | 12px | 400 | 16px |

### Rules

- Sentence case for headings and buttons.
- Titles use line height 1.0, so leave margin below them for descenders.
- Body text never goes above weight 500.
- Product names keep HP casing: HP OmniBook, HP EliteBook, HP OfficeJet Pro, HP Smart, HP+.

## 4. Logo & Brand Mark

The logo is a solid circle with the lowercase italic letters "hp" knocked out, the stems extending to the circle's edge. On hp.com it renders in Electric Blue `#024AD8`.

- **Color versions:** blue on white (primary), white on blue or dark, single-color black or white.
- **App icon:** the white circle mark on electric blue.
- **Clear space:** at least a quarter of the circle diameter on all sides (approximate).
- **Minimum size:** 24px on screen.

Misuse:

- Do not add a gradient, bevel or shine (the old 3D globe style is retired).
- Do not rotate the circle or change the letter slant.
- Do not place the blue logo on mid-blue backgrounds; use the white version.
- Do not pair the circle with a typed "HP" wordmark.

## 5. Components

### Buttons (`.c-hp-button`)

| Variant | Background | Text | Hover | Active |
|---|---|---|---|---|
| Primary | `#024AD8` | `#FFFFFF` | `#103FB2` | `#0E3191` |
| Dark | `#1A1A1A` | `#FFFFFF` | `#3D3D3D` | `#525252` |
| Secondary (outline) | transparent | `#024AD8` | bg `#C9E0FC` | bg `#B2D2FF` |
| Ghost | transparent | `#1A1A1A` | bg `hsla(0,0%,52%,.1)` | bg `hsla(0,0%,52%,.2)` |
| On dark | `#72A3FF` | `#1A1A1A` | `#8FBAFF` | `#B2D2FF` |

Sizes: small 36px tall, padding 6px 12px, gap 4px; large 48px tall, padding 12px 16px, gap 8px. Radius 8px, min-width 112px.

```css
.c-hp-button {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 112px; height: 48px; padding: 12px 16px; gap: 8px;
  font: 400 16px/1 forma-djr-micro, Inter, Arial, sans-serif;
  border-radius: 8px;
  background: var(--hpi-btn-bg, #024AD8); color: #FFFFFF;
  transition: color .3s ease, background-color .3s ease, border-color .3s ease;
}
.c-hp-button:hover { background: #103FB2; }
.c-hp-button:active { background: #0E3191; }
.c-hp-button:focus-visible { outline: 2px solid #5492FF; outline-offset: 1px; }
```

### Inputs

- 48px tall (36px compact), 1px `#C2C2C2` border, radius 8px, 16px text, white fill (approximate).
- Focus: 2px `#024AD8` border or `#5492FF` outline.
- Error: `#CC2D32` border and 12px helper text.

### Cards

- Radius 16px (`--hpi-bc-borderRadius`), fill `#F5F5F5` or white, 24px padding.
- Product cards: image on light grey, name 16-20px/500, short spec line, price, "Add to cart" button.
- Shadow when floating: `0 1px 1.5px rgba(77,93,133,.22), 0 7px 11.5px rgba(26,53,84,.11)`.

### Navigation (digitnav)

- White header with a 1px `#E8E8E8` bottom border, logo left, 14px menu text in `#1A1A1A` (line height 1.33): "Laptops", "Desktops", "Printers", "Ink & Toner", "Accessories", "Support", "Business" (approximate).
- Right side: search, account (24px round avatar with initials when signed in), cart.
- Menu CTA: 1px `#024AD8` outlined 8px-radius button; hover `#001CB0`.
- Hover backgrounds `#F5F5F5`; focus rings 10px-radius outlines.

### Badges and tags

Radius 4px, 12px label text. "Sale" in Orange Bloom `#FF5050` with white text; "New" in Electric Blue tint `#E4EEFA` with `#024AD8` text.

### Pricing component

Large price in 24-28px/500, struck-through list price in `#636363`, savings line in Orange Bloom, then a primary button.

## 6. Layout & Spacing

- **Breakpoints:** 441px (tablet), 1115px (desktop), 1681px (wide).
- **Grid:** 12 columns; product grids 2 up on mobile, 3-4 up on desktop.
- **Content width:** about 1280-1440px; heroes run full width with rounded media inset.
- **Spacing:** 4px base; common steps 8, 12, 16, 24, 32, 48, 64.
- **Section spacing:** 48-64px desktop, 32px mobile.
- **Density:** medium; generous whitespace around hero titles, tighter in product listings.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 1px 1.5px rgba(77,93,133,0.22), 0 7px 11.5px rgba(26,53,84,0.11)` |
| Raised | `0 4px 10.4px -2px rgba(82,83,101,0.3), 0 1px 1.1px 0 rgba(82,83,101,0.1)` |
| Drop (theme) | `0 1px 4px 1px var(--hpi-mode-effects-drop-shadow)` |
| Overlay | `0 5px 20px 5px rgba(26,26,26,0.2)` |

### Motion

- Buttons: color and background 300ms ease.
- Nav and menus: 200ms ease-in-out.
- Carousels: transform 200ms with left/right offset.

## 8. Iconography & Imagery

- **Icons:** HP icon font (`newhpicon`) and SVG line icons, 1.5px stroke, 24px grid, in `#1A1A1A` or blue.
- **Product photography:** devices on soft grey or white, angled three-quarter views, printers shown with paper output, accessories grouped.
- **Lifestyle:** natural-light photos of people working and creating at home and in offices.

## 9. Voice & Microcopy

Friendly, clear and helpful, with a sales layer for offers and subscriptions (Instant Ink, HP+).

- Sentence case, short sentences.
- CTAs: "Shop now", "Add to cart", "Learn more", "Sign in", "Compare".
- Explain benefits plainly next to specs.
- Prices and promotions change often; never present them as fixed facts.

Sample strings:

- Hero: "The website that builds around you."
- Section: "Shop laptops", "Find the right printer"
- Product: "Add to cart", "In stock", "Free shipping"
- Support: "Check warranty", "Download drivers"

## 10. Do's and Don'ts

**Do**

- Use `#024AD8` for the logo and primary actions.
- Keep text `#1A1A1A` and greys from the 13-step ramp.
- Use 8px button corners and 16px card corners.
- Set titles in a medium (500) grotesque with line height 1.0.
- Let product photography carry the page.

**Don't**

- Don't use the old glossy 3D logo or gradients on the circle.
- Don't use pill buttons or square 0px corners.
- Don't mix Classic HP Blue `#0096D6` and Electric Blue in the same component.
- Don't use bold 700 headlines.
- Don't use Orange Bloom as a primary button color.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of HP's website. White page, text `#1A1A1A`, secondary `#3D3D3D`, muted `#636363`, borders `#E8E8E8`, card fills `#F5F5F5`. Font: `forma-djr-micro, Inter, "Helvetica Neue", Arial, sans-serif`. Titles are weight 500 with line-height 1.0: 72/56/28px on desktop, 44/36/24px on mobile; body 16px/24px. Primary buttons are electric blue `#024AD8` with white text, 8px radius, 48px tall, min-width 112px, hover `#103FB2`, active `#0E3191`; dark buttons `#1A1A1A`; secondary are blue outline with `#C9E0FC` hover. Focus ring 2px `#5492FF`. Cards have 16px radius with a soft blue-grey shadow `0 1px 1.5px rgba(77,93,133,.22), 0 7px 11.5px rgba(26,53,84,.11)`. Use Orange Bloom `#FF5050` only for sale tags. Header is white with a bottom border, the blue circle logo left, category links, search, account and cart. Breakpoints at 441px and 1115px. Copy is friendly and plain.

```css
:root {
  --brand-blue: #024AD8;
  --brand-blue-hover: #103FB2;
  --brand-blue-pressed: #0E3191;
  --brand-blue-tint: #E4EEFA;
  --brand-blue-tint-hover: #C9E0FC;
  --brand-blue-on-dark: #72A3FF;
  --brand-blue-classic: #0096D6;
  --brand-navy: #0A1D4E;
  --brand-text: #1A1A1A;
  --brand-text-secondary: #3D3D3D;
  --brand-text-muted: #636363;
  --brand-white: #FFFFFF;
  --brand-surface: #F5F5F5;
  --brand-surface-subtle: #FAFAFA;
  --brand-border: #E8E8E8;
  --brand-border-strong: #C2C2C2;
  --brand-orange-bloom: #FF5050;
  --brand-error: #CC2D32;
  --brand-power-storm: #568393;
  --brand-focus: #5492FF;
  --brand-font: forma-djr-micro, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-shadow-card: 0 1px 1.5px rgba(77,93,133,0.22), 0 7px 11.5px rgba(26,53,84,0.11);
  --brand-shadow-raised: 0 4px 10.4px -2px rgba(82,83,101,0.3), 0 1px 1.1px 0 rgba(82,83,101,0.1);
  --brand-shadow-overlay: 0 5px 20px 5px rgba(26,26,26,0.2);
  --brand-duration: 300ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by HP.

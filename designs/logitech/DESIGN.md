---
name: Logitech
slug: logitech
url: https://logitech.com
category: Hardware
tagline: "Clean white retail with brand-black type, pill buttons, mint teal accents and a cyan logo."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Logi Cyan
    hex: "#00B8FC"
    role: Logo color, links and tags in some themes
  - name: Brand Black
    hex: "#1B1B1B"
    role: Text, solid buttons, dark sections
  - name: Logi Teal
    hex: "#00FDCF"
    role: Brand accent, ribbons, play buttons, highlights
  - name: Dark Green
    hex: "#0D3A38"
    role: Footer bar, form panels, text on teal
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Mint Wash
    hex: "#D6F5F0"
    role: Top promo strip, special offer panels
  - name: Steel
    hex: "#EAEBED"
    role: Product image wells, quiet surfaces
  - name: Mid Grey
    hex: "#CED1D9"
    role: Borders, dividers
  - name: Data Grey
    hex: "#303133"
    role: Dark UI panels, secondary dark surface
  - name: Dark Grey
    hex: "#53555C"
    role: Secondary text
  - name: Light Grey
    hex: "#9598A2"
    role: Muted text, disabled
  - name: Sand
    hex: "#F3F1EC"
    role: Quote and editorial backgrounds
  - name: Indigo
    hex: "#32156D"
    role: Fulfillment and toaster messages
  - name: Success
    hex: "#037909"
    role: In stock, success messages
fonts:
  display:
    family: "Brown"
    fallback: "DM Sans"
    weights: [400, 700]
  body:
    family: "Brown"
    fallback: "DM Sans"
    weights: [400, 700]
typeScale:
  - { role: Marquee, size: 48, weight: 700, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Heading 2, size: 40, weight: 700, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Heading 3, size: 32, weight: 700, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Heading 4, size: 24, weight: 700, lineHeight: 1.15, tracking: "-0.02em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: CTA, size: 14, weight: 400, lineHeight: 1.0, tracking: "0.03em" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 4, md: 12, lg: 20, pill: 60 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 64]
shadows:
  - { name: Button, value: "0 1px 3px 0 rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.2)" }
  - { name: Elevation Small, value: "0 2px 4px 0 rgba(0,0,0,0.25)" }
  - { name: Panel, value: "0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3)" }
  - { name: Popover, value: "0 4px 16px rgba(0,0,0,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#EAEBED"
  text: "#1B1B1B"
  muted: "#53555C"
  border: "#CED1D9"
  accent: "#1B1B1B"
  accentText: "#FFFFFF"
  radius: 60
  buttonStyle: pill
---

# Logitech

## 1. Visual Theme & Atmosphere

Logitech.com is a calm, white product store for mice, keyboards, webcams, headsets and video conferencing gear. The structure is retail: a promo strip, a header with category menus, big product heroes, carousels of product cards. The personality comes from the "logi" logo, the Brown typeface, pill-shaped buttons and a set of fresh accent colors (mint teal, cyan, sand, indigo) used in small amounts.

The site is a multi-brand system. The default "logi" theme sets the brand accent to mint teal `#00FDCF` with dark green `#0D3A38`; other themes switch the accent (cyan `#00B8FC`, Ultimate Ears indigo `#2100FF`) and Logitech G uses its own dark gaming look. This file covers the main Logitech theme.

What makes it recognisable:

- **Brand black, not pure black.** Text and solid buttons are `#1B1B1B`.
- **Pill buttons.** Every CTA is a 60px-radius pill with small uppercase labels and slightly open tracking.
- **Mint teal accents.** Ribbons, play buttons and highlights use `#00FDCF`, with `#0D3A38` text or backgrounds next to it.
- **Products on light grey.** Product shots sit in `#EAEBED` or white wells with 12px corners.
- **Bold, tight headings.** Brown Bold with negative tracking (-1% to -3%).

Mood words: friendly, tidy, modern, design-led, approachable.

## 2. Color Palette & Roles

Values from the live logitech.com CSS custom properties (read 2026-11-16).

| Name | Token | Hex | Role |
|---|---|---|---|
| Logi Cyan | `--cyan-500-cyan` | `#00B8FC` | Logo, cyan-theme brand accent |
| Cyan 600 / 700 | `--cyan-600/700` | `#0093CA` / `#006E97` | Hover and text-safe cyan |
| Cyan light | `--cyan-100-cyan-light` | `#CCF1FF` | Tints |
| Logi Teal | `--teal-500-teal` | `#00FDCF` | Default brand accent, ribbons, play buttons |
| Teal 600 / 700 | | `#00CAA6` / `#00987C` | Hover, text-safe teal |
| Teal light | `--teal-100-light-green` | `#C6FFF5` | Tints |
| Mint Wash | `--brand-light` | `#D6F5F0` | Top header strip, special offers |
| Dark Green | `--teal-900-dark-green` | `#0D3A38` | Footer bar, forms, text on teal |
| Brand Black | `--gray-900-brand-black` | `#1B1B1B` | Text, solid buttons, dark sections |
| Data Grey | `--gray-800-data-gray` | `#303133` | Dark panels, special offers on dark |
| Dark Grey | `--gray-700-dark-gray` | `#53555C` | Secondary text |
| Grey 600 | | `#707279` | Muted text |
| Competition Grey | `--gray-500` | `#9598A2` | Disabled, placeholders |
| Mid Grey | `--gray-300-mid-grey` | `#CED1D9` | Regular lines (`--line-regular`) |
| Grey 200 | | `#DBDCDF` | Subtle lines |
| Steel | `--gray-100-steel-metal` | `#EAEBED` | Surfaces, image wells |
| Grey 50 | | `#FBFBFB` | Very light surfaces |
| Sand | `--quote-bg` | `#F3F1EC` | Quote and editorial backgrounds |
| Indigo | `--indigo` | `#32156D` | Fulfillment banners, toasts |
| Light Indigo | | `#814EFA` | Accent in illustrations |

### Secondary palettes

Solution pages pull from extra families: Fuchsia (`#FFDDF7`, `#E24D83`, `#2F0024`), Lime (`#E9FFBC`, `#B7E634`, `#122300`), Sand (`#F4F1E8`, `#BCB09F`, `#34302B`) and Slate (`#BCCBDE`, `#7690AF`, `#18212F`). Use the light shade as a section background and the 900 shade for text on it.

### Semantic colors

| State | Hex |
|---|---|
| Success | `#037909` |
| Highlight / positive price | `#1B7025` |
| Error | `#D62929` |
| Warning | `#E96500` |
| Focus | `#2959D69A` (blue at about 60% alpha) |

### Dark mode

There is no global dark theme on logitech.com, but the system has a `.mode-dark` flip for dark sections: background `#1B1B1B`, text white, lines `#303133`. Logitech G pages are dark by default and have their own styling.

## 3. Typography

**Family:** **Brown** (Lineto), a geometric sans with round, slightly quirky forms. The stack is `"Brown", Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif`.

**Licensing:** Brown is commercial. Closest free substitute: **DM Sans** (or Poppins for a rounder feel).

### Scale (desktop; tokens in brackets)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Marquee / H1 (`--heading1`) | 48px (40px mobile) | 700 | 1.0-1.1 | -1% to -3% |
| H2 | 40px (32px mobile) | 700 | 1.1 | -2% to -3% |
| H3 | 32px (24px mobile) | 700 | 1.1 | -2% to -3% |
| H4 | 24px (20px mobile) | 700 | 1.15 | -2% |
| H5 | 18px | 700 | 1.15 | -2% |
| Body (`--body-1/2`) | 16px | 400 | 1.3 | 0 |
| Small (`--body-3`, caption) | 14px | 400 | 1.3 | 0 |
| CTA (`--cta`) | 14px uppercase | 400 | 1 | 0.03em |
| CTA small (`--cta-small`) | 11px uppercase | 400 | 1 | 0.03em |
| Legal (`--body-4`) | 12px | 400 | 1.3 | 0 |

### Rules

- Headings sentence case, bold, tight tracking.
- Button labels uppercase (`--cta-text-transform: uppercase`) at 14px with 0.03em tracking.
- Product names keep Logitech's casing: "MX Master 3S", "MX Keys S", "Lift", "Brio 500", "Zone Vibe 100".
- Prices in body weight with the sale price next to a struck-through original.

## 4. Logo & Brand Mark

The current logo is the lowercase wordmark "logitech" with a distinctive "g" whose descender is a smile-shaped arc, plus a short form "logi" that uses the same letters. On logitech.com the header logo renders in cyan `#00B8FC`; black and white versions are common.

- **Color versions:** black on white, white on black, cyan `#00B8FC`, and other single colors from the palette. Always one color.
- **Short form:** "logi" is used for the app, social avatars and small spaces.
- **Clear space:** at least the height of the "o" on all sides.
- **Minimum size:** about 48px wide for "logitech" (the nav file is drawn at 48 x 14).

Misuse:

- Do not use the old 2012 "Logitech" logo with the eye symbol.
- Do not color letters in different colors.
- Do not set "logi" in Brown as a replacement for the wordmark.
- Do not outline, skew or add shadows.

## 5. Components

### Buttons

| Variant | Background | Text | Border |
|---|---|---|---|
| Solid (default) | `#1B1B1B` | white | 1px `#1B1B1B` |
| Solid brand | `var(--brand)` (teal `#00FDCF`) | `#1B1B1B` / black | 1px brand |
| Outline | transparent | `#1B1B1B` | 1-1.5px `#1B1B1B` |
| Solid secondary (on dark) | `#000000` or white | inverse | none |
| Text link | transparent | `#1B1B1B`, underlined | none |

- Shape: `border-radius: 60px`.
- Size: default padding `17px 40px 15px` (about 48px tall); compact `13px 24px 11px` (about 40px tall).
- Label: 14px uppercase, 0.03em tracking.
- Shadow on raised buttons: `0 1px 3px 0 rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.2)`.
- Hover: solid lightens to `#303133` (approximate); outline fills with `#1B1B1B` and text turns white. Focus: 2-3px ring in `#2959D69A`.

```css
.btn-solid {
  font: 400 14px/1 "Brown", "DM Sans", Roboto, Arial, sans-serif;
  text-transform: uppercase; letter-spacing: 0.03em;
  padding: 17px 40px 15px;
  background: #1B1B1B; color: #fff;
  border: 1px solid #1B1B1B; border-radius: 60px;
}
.btn-solid.compact { padding: 13px 24px 11px; }
```

### Header

- Top strip: `#D6F5F0` mint with black 12-14px promo text and a link, centered.
- Main header: white, logo left, category menus (Mice, Keyboards, Webcams, Headsets, Video Conferencing, Gaming) at 14-16px, search, account and cart icons at right. Mega menus open as white panels with product thumbnails and a 12px radius bottom.
- Search field: pill-shaped (`--formfield-full-radius: 60px`), 40-48px tall, `#EAEBED` fill or 1px `#CED1D9` border.

### Product card

- Image well: `#EAEBED` or white, radius 12px (`--panel-radius`), product centered.
- Badges top-left: "New", "Sale", "Best seller" in small 12px labels on white with 4px radius (`--badge-radius`).
- Below: product name 16px/700, short descriptor 14px `#53555C`, color swatches as 20px circles, price 16px.
- CTA: compact solid pill "Add to cart" or outline "Shop now".

### Hero

Full-width product photography (often on colored studio backgrounds that match the product color) with a bold 40-48px heading, one line of body copy and one or two pill buttons. A teal ribbon (`#00FDCF` with `#0D3A38` text) can sit above the heading.

### Tabs and filters

- Category tabs as pills: 40px tall, `#EAEBED` fill, active `#1B1B1B` with white text.
- Filters: chips with 4px radius (`--filter-radius`), checkbox lists in a side drawer.

### Inputs

Pill-shaped text fields (60px radius), 48px tall, 1px `#CED1D9` border, 16px text, focus ring blue `#2959D69A`. Dropdowns use 12px radius panels with `--panel-shadow`.

### Drawers and modals

White panels with 12-20px radius, shadow `0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.3)`, scrim black at 70%. Cart opens as a right-side drawer.

### Footer

Dark green `#0D3A38` bar (`--footer-bar-bg`) or brand black, with white link columns, a newsletter field (pill input + pill button), and region selector.

## 6. Layout & Spacing

- **Gaps:** xs 4 / sm 8 / md 12 / lg 16 / xl 20 / xxl 32px.
- **Insets:** 4 / 8 / 16 / 20 / 24 / 32px.
- **Section spacing:** 20 / 40 / 64px, growing to 40-80px on desktop.
- **Grid:** 4 columns on mobile (`--col-count: 4`), 12 on desktop, 16px gutter (`--gutter`) and 16px margins on mobile.
- **Max width:** content about 1440px; heroes run full bleed.
- **Product grids:** 2 columns mobile, 3-4 desktop.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Button | `0 1px 3px 0 #00000026, 0 1px 2px 0 #0003` |
| Elevation sm | `0 2px 4px 0 rgba(0,0,0,0.25)` |
| Panel | `0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3)` |
| Popover | `0 4px 16px #00000040` |

- Product cards are flat; panels, menus and drawers carry shadows.
- Motion: 200-300ms ease for hover and drawers; carousels (Embla) slide with momentum. Image hover swaps to a second view.

## 8. Iconography & Imagery

- **Icons:** 24px line icons with a 1.5-2px stroke (stroke-width tokens 3-4 on a larger grid), round caps, in `#1B1B1B`.
- **Product photography:** precise studio shots, often three-quarter angle, on white, steel grey or a soft color matching the product finish (graphite, pale grey, rose, off-white).
- **Lifestyle:** bright desks, home offices and meeting rooms, natural light, people mid-task.
- **Graphics:** flat shapes in the accent families (teal, fuchsia, lime, sand, slate) behind product cutouts.

## 9. Voice & Microcopy

Friendly and plain. Short headlines about what the product helps you do.

- CTAs (uppercase on buttons): "Shop now", "Add to cart", "Learn more", "Compare", "Buy".
- Promo strip: short offers with a link, for example a holiday guide or a discount on a named product line.
- Product descriptors: one line, specific ("Wireless performance mouse with quiet clicks").
- Avoid hype; name the feature and the benefit.

## 10. Do's and Don'ts

**Do**

- Use `#1B1B1B` for text and solid buttons on white.
- Make every button a pill (60px radius) with a 14px uppercase label.
- Put products in `#EAEBED` or white wells with 12px corners.
- Use teal `#00FDCF` and dark green `#0D3A38` together for accents.
- Use Brown Bold with negative tracking for headings.

**Don't**

- Don't use the old eye-symbol logo or the word "Logitech" in title case as a logo.
- Don't use the cyan, teal and indigo accents all on one screen.
- Don't use square buttons or 4px-radius CTAs.
- Don't put drop shadows on product cards.
- Don't write headings in all caps; only button labels are uppercase.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Logitech.com. White page, brand black text `#1B1B1B`, secondary text `#53555C`, lines `#CED1D9`, quiet surfaces `#EAEBED`. Font: `"Brown", "DM Sans", Roboto, Arial, sans-serif`; headings bold 700 with -2% tracking (48/40/32/24px), body 16px/1.3. A mint `#D6F5F0` promo strip on top, then a white header with a cyan `#00B8FC` lowercase "logitech" logo, category links and icons. All buttons are pills (radius 60px) with 14px uppercase labels and 0.03em tracking, padding 17px 40px; solid buttons are `#1B1B1B` with white text, brand buttons are teal `#00FDCF` with black text, outline buttons have a 1px black border. Product cards: image in a `#EAEBED` well with 12px radius, name 16px bold, grey descriptor, color swatches, price, compact pill CTA. Panels and drawers use radius 12px and shadow `0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.3)`. Footer in dark green `#0D3A38`. Grid gutter 16px, section spacing 40-64px.

```css
:root {
  --brand-cyan: #00B8FC;
  --brand-cyan-dark: #006E97;
  --brand-teal: #00FDCF;
  --brand-teal-dark: #00987C;
  --brand-dark-green: #0D3A38;
  --brand-mint: #D6F5F0;
  --brand-black: #1B1B1B;
  --brand-data-grey: #303133;
  --brand-grey-700: #53555C;
  --brand-grey-600: #707279;
  --brand-grey-500: #9598A2;
  --brand-line: #CED1D9;
  --brand-line-subtle: #DBDCDF;
  --brand-steel: #EAEBED;
  --brand-white: #FFFFFF;
  --brand-sand: #F3F1EC;
  --brand-indigo: #32156D;
  --brand-success: #037909;
  --brand-error: #D62929;
  --brand-focus: #2959D69A;
  --brand-font: "Brown", "DM Sans", Roboto, "Helvetica Neue", Arial, sans-serif;
  --brand-radius-badge: 4px;
  --brand-radius-panel: 12px;
  --brand-radius-pill: 60px;
  --brand-gutter: 16px;
  --brand-section-md: 40px;
  --brand-section-lg: 64px;
  --brand-shadow-button: 0 1px 3px 0 rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  --brand-shadow-panel: 0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --brand-shadow-popover: 0 4px 16px rgba(0, 0, 0, 0.25);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Logitech.

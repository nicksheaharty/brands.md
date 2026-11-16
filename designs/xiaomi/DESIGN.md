---
name: Xiaomi
slug: xiaomi
url: https://mi.com
category: Hardware
tagline: "Orange squircle, near-black MiSans type and big, glossy product photography on white."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Xiaomi Orange
    hex: "#FF6900"
    role: Logo squircle, primary buttons, prices, active states
  - name: Brand Black
    hex: "#191919"
    role: Text, secondary buttons, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on orange
  - name: Base Grey
    hex: "#F7F7F7"
    role: Section and card background
  - name: Wordmark Grey
    hex: "#898989"
    role: Xiaomi wordmark in the horizontal logo, default borders
  - name: Secondary Text
    hex: "#757575"
    role: Captions, secondary copy
  - name: Orange 90
    hex: "#FF7819"
    role: Button hover, lighter orange
  - name: Orange 10
    hex: "#FFF0E5"
    role: Orange tint fills, selected chips
  - name: Grey 20
    hex: "#E7E7E7"
    role: Dividers, hairlines
  - name: Grey 30
    hex: "#DBDBDB"
    role: Disabled fills, borders
  - name: Deep Black
    hex: "#24201C"
    role: Warm dark backgrounds for flagship launches
  - name: Footer Line
    hex: "#2E2E2E"
    role: Borders inside the dark footer
  - name: Blue
    hex: "#1A77ED"
    role: Info links, notices
  - name: Red
    hex: "#DB2E2E"
    role: Sale tags, errors
  - name: Error
    hex: "#E62700"
    role: Form error text
  - name: Gold
    hex: "#DEB674"
    role: Member and premium tier accents
fonts:
  display:
    family: "MiSans"
    fallback: "Inter"
    weights: [500, 700]
  body:
    family: "MiSans"
    fallback: "Inter"
    weights: [300, 400, 500]
typeScale:
  - { role: Hero, size: 48, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Heading L, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Heading M, size: 24, weight: 500, lineHeight: 1.33, tracking: "0" }
  - { role: Heading S, size: 20, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 14, pill: 999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 64]
shadows:
  - { name: Small, value: "0 4px 8px rgba(25,25,25,0.08)" }
  - { name: Medium, value: "0 6px 12px rgba(25,25,25,0.08)" }
  - { name: Card, value: "0 6px 16px rgba(25,25,25,0.06)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#191919"
  muted: "#757575"
  border: "#E7E7E7"
  accent: "#FF6900"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Xiaomi

## 1. Visual Theme & Atmosphere

Xiaomi's global site (mi.com/global) is a product showroom. Each section is a large, glossy key visual of one product (a Leica-co-engineered phone, a robot vacuum, a scooter, a washer-dryer, a car) with a short tagline above or over it and two small buttons. Around that sits a plain white and pale grey shell with near-black text and the brand orange.

The 2021 identity by Kenya Hara is the anchor: the "MI" monogram inside an orange **squircle** (a superellipse, not a rounded rectangle). Hara's idea, "Alive", is about the softness of that shape, and the site echoes it with rounded corners everywhere (8px buttons, 12-14px cards) and calm, unhurried layouts.

HyperOS, the device operating system, shares the language: MiSans type, soft rounded panels, frosted-glass layers and orange as the system accent.

What makes it recognisable:

- **Orange `#FF6900`** on the squircle, primary buttons, prices and active states.
- **Near-black `#191919`,** never pure black, for text and dark buttons.
- **MiSans** throughout, a clean geometric sans designed for Xiaomi.
- **Big product photography** on white, pale grey or deep warm black.
- **Squircle-like rounding** on cards and buttons.

Mood words: friendly, clean, product-proud, accessible, soft-tech.

## 2. Color Palette & Roles

Hex values are from the live CSS tokens on mi.com/global (`--brand-*`, `--background-*`, `--text-*`).

| Name | Hex | Role |
|---|---|---|
| Xiaomi Orange | `#FF6900` | `--brand-orange`, `--background-primary`, `--text-primary`, `--border-primary` |
| Orange 90 | `#FF7819` | Hover, button fill on some modules (`#FF781A`) |
| Orange 70 | `#FF964C` | Illustrations, progress |
| Orange 30 | `#FFD2B2` | Light tints |
| Orange 10 | `#FFF0E5` | `--background-primary-light`, selected chips |
| Brand Black | `#191919` | `--brand-black`, `--text-base`, `--background-black` |
| Black 80 | `#474747` | Dark UI text |
| Black 70 | `#5E5E5E` | Secondary on light |
| Secondary Text | `#757575` | `--text-secondary` |
| Wordmark Grey | `#898989` | `--border-base`, wordmark |
| Border Input | `#B0B0B0` | Input borders |
| Grey 30 | `#DBDBDB` | `--background-grey`, disabled |
| Grey 20 | `#E7E7E7` | Dividers |
| Grey 10 | `#F3F3F3` | Menu dividers |
| Base Grey | `#F7F7F7` | `--background-base` |
| White | `#FFFFFF` | Page, text on orange |
| Deep Black | `#24201C` | `--background-deep-black`, warm launch backgrounds |
| Footer Line | `#2E2E2E` | Footer dividers |

### Semantic and commerce colors

| Name | Hex | Use |
|---|---|---|
| Error | `#E62700` | Form errors (`--text-error`) |
| Red | `#DB2E2E` | Sale badges, discount tags |
| Blue | `#1A77ED` | Info notices, links in help content |
| Gold | `#DEB674` | Member "black gold" tier stars |
| Gold Fill | `#F8E6C4` | Member tier background |
| Tag Fill | `#FBEED5` / text `#785A25` | Promotion tags |

### Dark sections

Flagship launch modules (Xiaomi 15/17 series, Xiaomi Auto) often sit on `#191919` or a warm `#24201C` with white text and orange or white buttons. The footer is `#191919` with `#2E2E2E` dividers and `#898989` links.

## 3. Typography

**Families:**

- **MiSans** (MiSans Latin on the global site), designed for Xiaomi in 2021 and free to use under Xiaomi's MiSans license. Served from Xiaomi's CDN as a variable font with Light 300 to Bold 700.
- **Xiaomi Brand**: a display cut used sparingly for campaign titles, falling back to MiSans Latin.

```css
font-family: "MiSans Latin", "MiSans", sans-serif;
```

**Fallback:** Inter on Google Fonts is a close match in proportion and weight range.

### Scale (desktop 1441-1920px, from CSS size frequencies; approximate)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero product title | 46-48px | 700 | 1.2 | 0 |
| Heading L | 30-32px | 700 | 1.25 | 0 |
| Heading M | 24px | 500 | 1.33 | 0 |
| Heading S / tagline | 20-22px | 500 | 1.4 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small / nav | 14px | 400 | 1.43 | 0 |
| Caption / legal | 12px | 400 | 1.5 | 0 |

The site scales type with the viewport between breakpoints (some sizes are in `vw`), so headlines grow on very wide screens.

### Rules

- Product names in title case: "Xiaomi 15T Pro", "Redmi Note", "POCO", "Xiaomi HyperOS".
- Headline then a one-line tagline: "The Telephoto Master", "Essential Leica Imagery".
- Uppercase is only used for footer column labels ("SUPPORT", "ABOUT US").
- Prices in orange, bold, with tabular figures.

## 4. Logo & Brand Mark

The 2021 logo, designed by Kenya Hara's studio, keeps the "MI" letters but places them in a **squircle** built from a superellipse (Hara's team described the curve with n≈3). The letterforms were also redrawn with rounder joins. The horizontal lockup adds the lowercase "xiaomi" wordmark in grey `#898989`.

- **Colors:** white "MI" on orange `#FF6900` squircle (primary). Single-color versions: all white on dark, all black on light.
- **Clear space:** at least a quarter of the squircle width on every side (approximate).
- **Minimum size:** squircle 16px on screen (approximate).
- **Wordmark:** "xiaomi" in MiSans-like lowercase, grey on white or white on dark.

Misuse: do not replace the squircle with a rounded square or circle, rotate it, add gradients or shadows, or set "MI" in a different font.

## 5. Components

### Buttons (`.mi-btn`)

Tokens: `--btn-padding-vertical`, `--btn-padding-horizontal`, `--btn-font-size`, `--btn-border-radius` (8px at most sizes, 12-14px for large hero buttons).

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `#FF6900` | `#FFFFFF` | none |
| Primary hover | `#FF7819` | `#FFFFFF` | none |
| Secondary (dark) | `#191919` | `#FFFFFF` | none |
| Secondary (light) | `#FFFFFF` | `#191919` | 1px `#191919` |
| Ghost on image | transparent | `#FFFFFF` | 1px `#FFFFFF` |
| Disabled | `#DDDDDD` | `#FFFFFF` | none |
| Text link | none | `#FF6900` + arrow | none |

```css
.mi-btn {
  font: 500 16px/1 "MiSans Latin", Inter, sans-serif;
  padding: 12px 32px;          /* desktop: about 0.83vw 1.67vw */
  border-radius: 8px;
  background: #FF6900; color: #fff; border: 0;
  transition: background-color 200ms ease, opacity 200ms ease;
}
.mi-btn:hover { background: #FF7819; }
.mi-btn--dark { background: #191919; }
.mi-btn--large { font-size: 24px; padding: 12px 40px; border-radius: 14px; }
```

Product modules usually pair "Learn more" (outline or text) with "Buy now" (orange).

### Header

- White bar, orange squircle logo left, product categories center ("Phones", "Wearables", "Smart Home", "Lifestyle", "Xiaomi Auto"), search, cart and account icons right. 14-16px, `#191919`.
- Hovering a category opens a white panel with product thumbnails on `#F7F7F7` tiles.

### Key visual banners (signature)

- Full-width product image with title (32-48px bold) and tagline (20px) centred above the product, two buttons below.
- Banner height follows the image; carousels use small pill-shaped dots, the active one orange.

### Product cards

- `#F7F7F7` or white tile, 12-14px radius, product image centred, name 16-20px/500, short spec line 14px `#757575`, price 16-20px bold orange.
- Hover: `0 6px 16px rgba(25,25,25,0.06)` and slight image scale.

### Inputs

- 1px `#B0B0B0` border, 8px radius, 44-48px tall, 14-16px text; focus border `#FF6900`; error text `#E62700`.

### Tags and badges

- "New", "Hot", "Sale" badges: 4px radius, 12px, orange or red fill with white text, or `#FBEED5` fill with `#785A25` text.

### Footer

`#191919` background, uppercase 12-14px column labels, `#898989` links, social icons, region selector, legal row.

## 6. Layout & Spacing

- **Breakpoints (from CSS):** ≤720px, 721-1024px, 1025-1440px, 1441-1920px, ≥1921px.
- **Max width:** content around 1226-1440px on desktop, banners full bleed (approximate).
- **Gutters:** 16-20px mobile, 40px+ desktop (approximate).
- **Section spacing:** 40-64px between modules (approximate); banners often stack edge to edge with small 8-12px gaps.
- **Density:** one product per screen in banners; grids of 3-5 cards in category rows.

## 7. Depth, Elevation & Motion

- Shadows are faint and tinted with the brand black: `0 4px 8px rgba(25,25,25,0.08)`, `0 6px 12px rgba(25,25,25,0.08)`, `0 6px 16px rgba(25,25,25,0.06)`.
- Most separation comes from white vs `#F7F7F7` tiles.
- Motion: 200-300ms hover transitions, auto-playing carousels, soft fade-ups on scroll (approximate). HyperOS uses spring-like, physical animations and frosted blur layers (`backdrop-filter: blur(20-40px)`, approximate).

## 8. Iconography & Imagery

- **Icons:** simple line icons, 1.5px stroke, rounded caps and joins, 24px, `#191919`; orange when active.
- **Photography:** studio product renders with soft reflections on white, grey or deep warm black; lifestyle shots for home and mobility.
- **HyperOS visuals:** rounded glassy cards, soft gradients, large clock numerals.
- **Brand graphics:** the squircle shape reused as a frame and mask.

## 9. Voice & Microcopy

Friendly, direct and product-focused. Short punchy taglines over a hero, then plain specs.

- Taglines: "The Telephoto Master", "Clean beyond limits", "All-in-one laundry solution", "All your needs in one smart ecosystem".
- CTAs: "Learn more" (the most common string on the homepage), plus "Buy now" on product pages (approximate).
- Support strings: "Warranty", "User guides", "Contact us", "Product recall notice".

## 10. Do's and Don'ts

**Do**

- Use `#FF6900` for the logo, primary buttons and prices.
- Use `#191919` for text and dark buttons.
- Let one product image fill each banner.
- Round corners softly: 8px buttons, 12-14px cards.
- Use MiSans (or Inter) at 500-700 for titles and 400 for body.

**Don't**

- Don't redraw the squircle as a plain rounded rectangle.
- Don't use pure black `#000` for text.
- Don't stack many orange buttons together; pair orange with a neutral.
- Don't use heavy or grey-black shadows.
- Don't use thin script or serif display type.

## 11. Agent Prompt Guide

> Build this UI in the style of Xiaomi (mi.com). White page with `#F7F7F7` tiles, text `#191919`, secondary `#757575`, dividers `#E7E7E7`. Font: "MiSans Latin", fallback Inter; titles 32-48px weight 700, taglines 20px/500, body 16px/400. Brand orange `#FF6900` (hover `#FF7819`, tint `#FFF0E5`) for primary buttons, prices and active states. Buttons: 8px radius, 12px 32px padding, 16px/500; pair an orange "Buy now" with a `#191919` or outline "Learn more". Full-width product banners with centred title and tagline above a large product image. Product cards: `#F7F7F7`, 14px radius, orange bold price, hover shadow `0 6px 16px rgba(25,25,25,0.06)`. Dark launch sections on `#191919` or `#24201C`. Footer `#191919` with `#898989` links. Logo: white "MI" in an orange squircle.

```css
:root {
  --brand-orange: #FF6900;
  --brand-orange-hover: #FF7819;
  --brand-orange-tint: #FFF0E5;
  --brand-black: #191919;
  --brand-deep-black: #24201C;
  --brand-text: #191919;
  --brand-text-secondary: #757575;
  --brand-wordmark-grey: #898989;
  --brand-border-input: #B0B0B0;
  --brand-grey-30: #DBDBDB;
  --brand-divider: #E7E7E7;
  --brand-bg: #FFFFFF;
  --brand-bg-base: #F7F7F7;
  --brand-error: #E62700;
  --brand-sale: #DB2E2E;
  --brand-info: #1A77ED;
  --brand-gold: #DEB674;
  --brand-font: "MiSans Latin", "MiSans", "Inter", sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-btn: 8px;
  --brand-radius-card: 14px;
  --brand-shadow-sm: 0 4px 8px rgba(25,25,25,0.08);
  --brand-shadow-card: 0 6px 16px rgba(25,25,25,0.06);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Xiaomi.

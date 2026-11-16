---
name: Nintendo
slug: nintendo
url: https://nintendo.com
category: Gaming
tagline: "Nintendo red on clean white, rounded Geologica type and character art in friendly tiles."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Nintendo Red
    hex: "#E60012"
    role: Logo, primary buttons, prices, active states
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Charcoal
    hex: "#484848"
    role: Body text and headings
  - name: Indigo
    hex: "#3946A0"
    role: Secondary buttons, focus ring, selected chips
  - name: Red Hover
    hex: "#AC000D"
    role: Primary button hover
  - name: Light Gray 4
    hex: "#F8F8F8"
    role: Section background
  - name: Light Gray 3
    hex: "#EFEFEF"
    role: Hover fills, subtle panels
  - name: Light Gray 2
    hex: "#DADADA"
    role: Borders, dividers, disabled fill
  - name: Dark Gray 3
    hex: "#727272"
    role: Secondary text, metadata
  - name: Dark Gray 1
    hex: "#242424"
    role: Strong text, dark footer
  - name: Red Light
    hex: "#FDE6E7"
    role: Sale and alert tint
  - name: Indigo Light
    hex: "#BDC3E8"
    role: Secondary tint
  - name: Success Green
    hex: "#2D8513"
    role: Success icons, "Free" and in-stock tags
  - name: Warning Gold
    hex: "#BEA000"
    role: Warning icons
fonts:
  display:
    family: "Geologica"
    fallback: "Geologica"
    weights: [600]
  body:
    family: "Geologica"
    fallback: "Geologica"
    weights: [300, 400, 600]
typeScale:
  - { role: H1 Large, size: 38, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: H1 Small, size: 28, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: H2, size: 21, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: H3, size: 18, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Title / H4, size: 16, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 14, weight: 300, lineHeight: 1.45, tracking: "0" }
  - { role: Legal, size: 12, weight: 300, lineHeight: 1.4, tracking: "0" }
radii: { sm: 6, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 4px 16px rgba(72,72,72,0.15)" }
  - { name: Subtle, value: "0 2px 8px rgba(0,0,0,0.07)" }
  - { name: Raised, value: "0 5px 16px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F8F8"
  text: "#484848"
  muted: "#727272"
  border: "#DADADA"
  accent: "#E60012"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Nintendo

## 1. Visual Theme & Atmosphere

Nintendo.com (US) is part store, part news hub and part family guide for Nintendo Switch 2 and Nintendo Switch. The look is bright, friendly and tidy: white pages, one confident red, charcoal text instead of black, and lots of character and game art in rounded tiles.

What makes it recognisable:

- **Nintendo Red `#E60012`.** It is the logo color and the main action color. Primary buttons, prices on sale, the active nav underline and the red "racetrack" logo all use it.
- **Charcoal text.** Body and headings are `#484848`, which keeps the page soft next to the saturated red and colorful art.
- **Geologica.** The site uses Geologica Variable, a rounded-terminal geometric sans, at weight 600 for headings and 300 for body. It is free on Google Fonts.
- **Rounded, tile-based layout.** Cards, images and buttons have 8-12px corners. Rows of game tiles scroll horizontally under section titles like "Featured", "Digital best sellers" and "Digital new releases".
- **Indigo as the second color.** `#3946A0` handles secondary buttons, the focus ring and selected filters, so red is never overused.
- **Character portals.** Franchise rows (Super Mario, The Legend of Zelda, Splatoon, Kirby, Pikmin, Animal Crossing, Metroid) bring in each series' art and logo.

Mood words: friendly, playful, clean, family-safe, polished.

## 2. Color Palette & Roles

Values come from the site's `--theme-color-*` and `--theme-colors-*` variables (theme slug `nintendo-light-theme`).

| Name | Token | Hex | Role |
|---|---|---|---|
| Nintendo Red | primary | `#E60012` | Logo, primary buttons, tertiary button text and outline |
| Red Hover | primaryHover | `#AC000D` | Primary hover, pressed |
| Red Light | primaryLight | `#FDE6E7` | Sale and error tints |
| Indigo | secondary | `#3946A0` | Secondary buttons, focus, selected chips |
| Indigo Hover | secondaryHover | `#2A3477` | Secondary hover |
| Indigo Light | secondaryLight | `#BDC3E8` | Tints |
| Black | black | `#000000` | Rare, on overlays |
| Dark Gray 1 | darkGray1 | `#242424` | Strong text, dark sections |
| Dark Gray 2 | darkGray2 | `#484848` | Body text and headings |
| Dark Gray 3 | darkGray3 | `#727272` | Secondary text |
| Dark Gray 4 | darkGray4 | `#969696` | Disabled text, input borders |
| Light Gray 1 | lightGray1 | `#C8C8C8` | Strong dividers |
| Light Gray 2 | lightGray2 | `#DADADA` | Borders, disabled fills |
| Light Gray 3 | lightGray3 | `#EFEFEF` | Hover fills |
| Light Gray 4 | lightGray4 | `#F8F8F8` | Section backgrounds |
| White | white | `#FFFFFF` | Page, cards |

### Alerts and tags

| State | Background | Icon | Text |
|---|---|---|---|
| Attention | `#E8EBFC` | `#3946A0` | `#484848` |
| Success | `#E1F7D6` | `#2D8513` | `#484848` |
| Warning | `#FFFBB1` | `#BEA000` | `#484848` |
| Error | `#FDE6E7` | `#E60012` | `#484848` |
| Maintenance | `#EFEFEF` | `#484848` | `#484848` |

Description tags (genre, "Demo available", "DLC") use solid fills: blue `#4B5CCE`, green `#2D8513`, charcoal `#484848`, purple `#9531B9` with white text.

### Dark mode

No global dark theme. Some product pages (Switch 2 launches, Nintendo Switch Online) use dark bands in `#242424` or campaign colors, with white text and ghost buttons (`rgba(0,0,0,0.25)` fill, white outline).

## 3. Typography

**Family:** Geologica Variable for everything, with Roboto Condensed Variable for a few compact labels. Both are free on Google Fonts.

```css
--theme-font-family: "Geologica Variable", -apple-system, BlinkMacSystemFont, sans-serif;
--theme-font-weight-light: 300;
--theme-font-weight-bold: 600;
```

Only two weights are used: 300 for running text and 600 for anything that needs emphasis.

### Scale (from theme variables)

| Role | Desktop | Mobile | Weight |
|---|---|---|---|
| H1 Large | 38px (2.375rem) | 28px | 600 |
| H1 Small | 28px | 21px | 600 |
| H2 | 21px | 18px | 600 |
| H3 | 18px | 16px | 600 |
| H4 / Title | 16px | 14px | 600 |
| Body | 16px | 14px | 300 |
| Caption | 14px | 12px | 300 |
| Legal | 12px | 10px | 300 |

Line heights are about 1.2-1.3 for headings and 1.5 for body (approximate).

### Rules

- Sentence case for headings and buttons ("Digital best sellers", "Shop the Pikmin Collection").
- Game titles keep ™ and ® as published ("Fire Emblem™: Fortune's Weave").
- Prices in 600 weight; sale prices in red with the original struck through in `#727272`.
- Two-line clamp on tile titles.

## 4. Logo & Brand Mark

The logo is "Nintendo" inside a rounded "racetrack" outline (a stadium shape), with a small registered mark. The current version is a single color, usually red `#E60012` on white or white on red.

- **Primary:** red on white (as in `logo.svg`). **Reversed:** white on Nintendo Red, which is also the app and social avatar.
- **Clear space:** at least the height of the "N" around the racetrack (approximate).
- **Minimum size:** about 60px wide on screen (approximate).
- **Product logos** (Nintendo Switch 2, Nintendo Switch Online) and the red "star" My Nintendo mark are separate assets.

Misuse:

- Do not fill the racetrack solid with the letters on top in a second color unless using the reversed version.
- Do not stretch the racetrack or change its corner shape.
- Do not use gradients or other reds.
- Do not set "Nintendo" in Geologica as a logo.

## 5. Components

### Buttons

Buttons are named primary, secondary, tertiary, quaternary and ghost in the theme. Radius is 8px (`--border-radius: 0.5rem`; some contexts use 0.75rem), round icon buttons use 1rem or 50%.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#E60012` | `#FFFFFF` | none | `#AC000D` |
| Secondary | `#3946A0` | `#FFFFFF` | none | `#2A3477` |
| Tertiary | `#FFFFFF` | `#E60012` | 2px `#E60012` | selected: red fill, white text |
| Quaternary | `#FFFFFF` | `#3946A0` | 2px `#3946A0` | `#EFEFEF`; selected: indigo fill |
| Ghost (on art) | `rgba(0,0,0,0.25)` | `#FFFFFF` | 2px `#FFFFFF` | `rgba(0,0,0,0.5)` |
| Disabled | `#DADADA` | `#727272` | none | none |

Focus: 2px `#3946A0` ring (white on dark). Transitions 200ms ease-in-out with a 25ms delay.

```css
.btn-primary {
  font: 600 16px/1 "Geologica", -apple-system, sans-serif;
  color: #fff;
  background: #E60012;
  border: 0;
  border-radius: 8px;
  min-height: 48px;
  padding: 0 24px;
  transition: background-color 200ms ease-in-out 25ms;
}
.btn-primary:hover { background: #AC000D; }
.btn-primary:focus-visible { outline: 2px solid #3946A0; outline-offset: 2px; }
```

### Game tiles (signature)

- White card, radius 8px, image on top at 16:9 (aspect ratio about 0.5634), 208-268px wide in carousels.
- Below: title 16px/600 clamped to 2 lines, platform label ("Nintendo Switch 2"), price row with sale price in red and a red "-30%" style chip.
- Hover: soft shadow `0 4px 16px rgba(72,72,72,0.15)` and slight image zoom (approximate).
- Carousels show 1.5 tiles on mobile and 4-6 on desktop, with round arrow buttons.

### Navigation

- White header about 64-72px tall with a 1px `#DADADA` bottom border.
- Left: red racetrack logo. Center or left: "Explore", "Shop", "Support" mega-menus. Right: search, wishlist, cart, and My Nintendo avatar.
- Mega-menus list hardware, games, Nintendo Switch Online, news, characters, with small icon tiles.
- Active and hover states use a red underline.

### Inputs

Height 48px, 1px `#969696` border, radius 8px, 16px text, placeholder `#727272`. Focus border and ring `#3946A0`. Error border red with red helper text and a red alert icon.

### Chips and filters

Pill or 8px chips, 1-2px `#3946A0` outline, indigo text; selected chips fill with indigo and white text. Store filters (platform, price, genre) use checkboxes with red checks (approximate).

### Alerts

Full-width banners with tinted backgrounds from the alert table, a 24px icon left, charcoal text, and a close button.

### Footer

Light gray (`#F8F8F8`) or dark (`#242424`) depending on page, link columns, region selector, ESRB rating info and social icons.

## 6. Layout & Spacing

- **Spacing tokens:** 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 64, 80, 96, 112, 128px (`--theme-spacing-*`).
- **Page max width:** 1440px (`--theme-page-maxWidth: 90rem`); slim pages 1144px (`71.5rem`).
- **Gutters:** 16px mobile, 32-40px desktop (approximate).
- **Breakpoints:** about 600, 768, 1024 and 1280px (approximate).
- **Rhythm:** sections stack with 48-64px gaps; each has a 21-28px title, an optional "See all" link and a carousel or grid.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Card | `0 4px 16px rgba(72,72,72,0.15)` | Hovered tiles, dropdowns |
| Subtle | `0 2px 8px rgba(0,0,0,0.07)` | Sticky bars |
| Raised | `0 5px 16px rgba(0,0,0,0.1)` | Menus, popovers |
| Outline | `0 0 0 1px #969696` | Input and chip outlines |

Motion: `--theme-movement-duration: 200ms`, easing `ease-in-out`, delay 25ms. Carousels slide smoothly; hero videos autoplay muted with controls.

## 8. Iconography & Imagery

- **Icons:** rounded, filled glyphs at 16-24px in charcoal or red; the My Nintendo star and "star-play" icons are part of the set.
- **Art:** official key art, character renders on transparent backgrounds and screenshots. Characters often break out of tiles.
- **Photography:** families and friends playing together, bright and warm.
- **Franchise rows** take on each series' palette (Zelda greens and golds, Splatoon neon) inside the white frame.

## 9. Voice & Microcopy

Warm, simple and inclusive. Readable by kids and parents.

- Sentence case, short sentences, no jargon.
- CTAs: "Learn more", "Shop now", "Buy now", "See all", "Add to cart", "Add to wish list".
- Always include platform and rating info where relevant.

Sample strings:

- Section: "Featured", "Digital best sellers", "Digital new releases"
- Promo: "Save with a system + game bundle"
- Promo: "Get more out of your adventure"
- Link: "Shop the Pikmin Collection"

## 10. Do's and Don'ts

**Do**

- Use `#E60012` for the main action and the logo.
- Set text in `#484848` charcoal, not black.
- Use Geologica at 600 and 300 only.
- Round cards and buttons at 8px.
- Use indigo `#3946A0` for secondary actions and focus.
- Let character and game art bring the color.

**Don't**

- Don't use red for large background areas on store pages.
- Don't use pure black body text or heavy shadows.
- Don't mix in a second display typeface.
- Don't crop the racetrack logo or remove its outline.
- Don't use sharp 0px corners on tiles.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Nintendo.com. White page with `#F8F8F8` sections. Font Geologica (Google Fonts): headings 600, body 300, 16px base; H1 38px, H2 21px. Text `#484848`, secondary `#727272`, borders `#DADADA`. Primary buttons are Nintendo Red `#E60012` with white 600 text, 8px radius, 48px tall, hover `#AC000D`; secondary buttons indigo `#3946A0`; outline buttons are white with a 2px red border and red text. Focus ring 2px `#3946A0`. The header is white with a red racetrack "Nintendo" logo, Explore/Shop/Support menus and search/cart icons. Content is rows of game tiles: 16:9 art with 8px radius, 2-line title 16px/600, platform label and price (sale price in red). Hover shadow `0 4px 16px rgba(72,72,72,0.15)`. Transitions 200ms ease-in-out. Copy is warm, short and sentence case.

```css
:root {
  --brand-red: #E60012;
  --brand-red-hover: #AC000D;
  --brand-red-light: #FDE6E7;
  --brand-indigo: #3946A0;
  --brand-indigo-hover: #2A3477;
  --brand-indigo-light: #BDC3E8;
  --brand-text-strong: #242424;
  --brand-text: #484848;
  --brand-text-muted: #727272;
  --brand-disabled: #969696;
  --brand-border-strong: #C8C8C8;
  --brand-border: #DADADA;
  --brand-hover: #EFEFEF;
  --brand-surface: #F8F8F8;
  --brand-bg: #FFFFFF;
  --brand-success: #2D8513;
  --brand-warning: #BEA000;
  --brand-font: "Geologica", -apple-system, BlinkMacSystemFont, sans-serif;
  --brand-weight-light: 300;
  --brand-weight-bold: 600;
  --brand-radius-sm: 6px;
  --brand-radius: 8px;
  --brand-radius-round: 16px;
  --brand-max-width: 1440px;
  --brand-slim-width: 1144px;
  --brand-shadow-card: 0 4px 16px rgba(72,72,72,0.15);
  --brand-duration: 200ms;
  --brand-ease: ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Nintendo.

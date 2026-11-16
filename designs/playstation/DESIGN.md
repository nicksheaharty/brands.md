---
name: PlayStation
shortName: PlayStation
slug: playstation
url: https://playstation.com
category: Gaming
tagline: "Clean white and deep black stages, PlayStation blue pills and big game key art."
updated: 2026-11-16
appStoreId: 410896080
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: PlayStation Blue
    hex: "#0070CC"
    role: Primary buttons, links, focus, brand accent
  - name: Black
    hex: "#000000"
    role: Logo, text, dark hero stages
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Commerce Orange
    hex: "#D53B00"
    role: Buy and add-to-cart buttons, PlayStation Store purchase
  - name: Plus Gold
    hex: "#FCC71D"
    role: PlayStation Plus accents
  - name: Deep Blue
    hex: "#003791"
    role: Brand blue, dark blue sections and gradients
  - name: Charcoal
    hex: "#1F1F1F"
    role: Dark buttons, headings, dark shadows
  - name: Cloud
    hex: "#F5F7FA"
    role: Light section background
  - name: Silver
    hex: "#D2D4D9"
    role: Borders, light card tint
  - name: Gray
    hex: "#6B6B6B"
    role: Muted text
  - name: Sky Blue
    hex: "#53B1FF"
    role: Links and accents on dark
  - name: Red
    hex: "#C81B3A"
    role: Errors, sale tags
fonts:
  display:
    family: "SST"
    fallback: "Inter"
    weights: [300, 500, 700]
  body:
    family: "SST"
    fallback: "Inter"
    weights: [300, 400, 500]
  mono:
    family: "SST Condensed"
    fallback: "Barlow Condensed"
    weights: [500, 700]
typeScale:
  - { role: Hero, size: 80, weight: 300, lineHeight: 1.05, tracking: "-0.01em" }
  - { role: Heading L, size: 50, weight: 300, lineHeight: 1.1, tracking: "0" }
  - { role: Heading M, size: 35, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 26, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Body L, size: 18, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 500, lineHeight: 1.0, tracking: "0.01em" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 12, lg: 24, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32, 48, 64, 72, 128]
shadows:
  - { name: Low, value: "0 4px 8px 0 rgba(31,31,31,0.12)" }
  - { name: High, value: "0 4px 16px 0 rgba(31,31,31,0.2)" }
  - { name: Focus, value: "0 0 0 2px #0070CC" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F7FA"
  text: "#000000"
  muted: "#6B6B6B"
  border: "#D2D4D9"
  accent: "#0070CC"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# PlayStation

## 1. Visual Theme & Atmosphere

playstation.com is a showroom. Big game key art and hardware renders sit on clean white pages or deep black and blue stages, with very little chrome around them. Type is light and calm; the color that tells you what to press is PlayStation blue (`#0070CC`), and purchases switch to a commerce orange (`#D53B00`).

What makes it recognisable:

- **Light headlines.** SST, Sony's typeface, at weight 300 for large headlines. Quiet and premium rather than loud and "gamer".
- **Pill buttons in blue.** Primary actions are fully rounded pills in `#0070CC` with white text; they scale up slightly on hover.
- **Black and blue stages.** Hero sections fade from near-black (`#050606`) to deep gray or to PlayStation deep blue, with a console or game hero image.
- **Key art first.** Game tiles are large, rounded (12-24px) and full-bleed, with titles below or overlaid at the bottom.
- **The shapes.** Triangle, circle, cross and square (the controller face buttons) appear as subtle patterns, loading motifs and bullets.
- **Two modes.** Pages swap whole sections between light and dark themes with the same token names.

Mood words: premium, cinematic, calm, confident, playful at the edges.

## 2. Color Palette & Roles

Values come from the served `--color-*` and `--color-role-*` tokens on playstation.com (stored as RGB triplets, converted here) and the brand's well-known blues.

| Name | Hex | Role |
|---|---|---|
| PlayStation Blue (`color-17`) | `#0070CC` | Primary button, link, focus |
| Link Blue | `#0072CE` | Inline link and active border |
| Blue Darker (`color-10` light) | `#0068BD` | Hover and pressed blue |
| Sky Blue (`color-10` dark) | `#53B1FF` | Links and accents on dark |
| Deep Blue (`color-16`) | `#003697` | Brand blue sections; the classic brand blue is `#003791` |
| Commerce Orange (`color-9`) | `#D53B00` | "Buy", "Add to cart" (commerce links) |
| Plus Gold (`color-11`) | `#FCC71D` | PlayStation Plus |
| Plus Gold Soft | `#E7CD78` | Plus buttons and outlines on dark |
| Black | `#000000` | Text on light (`color-4` light) |
| Charcoal | `#1F1F1F` | Dark buttons, shadows, banners |
| Night (`color-1` dark) | `#121314` | Dark page |
| Dark Card (`color-7` dark) | `#1F2024` | Cards on dark |
| Dark Raised (`color-6` dark) | `#2C2D33` | Raised surfaces on dark |
| Cloud (`color-2` light) | `#F5F7FA` | Light section background |
| Mist (`color-3` light) | `#EBEEF0` | Light surfaces |
| Silver (`color-7` light) | `#D2D4D9` | Borders, card tint |
| Gray (`color-5` light) | `#6B6B6B` | Muted text |
| White | `#FFFFFF` | Page |

### Semantic and accent

| Name | Light | Dark |
|---|---|---|
| Green (success) | `#007A62` | `#009476` |
| Red (error, sale) | `#C81B3A` | `#FF143F` |
| Pink (accent) | `#CB2070` | `#D94A8D` |
| Neon green (accent) | `#0DD474` | `#10FC8A` |

### Gradients

- Primary dark section: `linear-gradient(180deg, #050606, #2A2C2F)`.
- Emphasis dark section: `linear-gradient(180deg, #050606, #333A4A)`.
- Emphasis light section starts at `#D1D3DF` and fades to white.

### Dark mode

Sections opt into dark with the same role tokens: background `#121314`, cards `#1F2024` at 97%, text white, muted `#B2B2B2`, dividers white at 8%, secondary buttons white at 30% alpha, and links switch to Sky Blue `#53B1FF`.

## 3. Typography

**Family:** SST, Sony's corporate typeface (by Monotype), loaded as `SST` with `SST Condensed` for tight labels and price tags. Some campaign pages add Bebas Neue for display numerals. SST is proprietary.

**Fallbacks:** Inter for SST (set large headlines at 300). Barlow Condensed for SST Condensed. Bebas Neue is on Google Fonts.

```css
font-family: "SST", "Inter", Helvetica, Arial, sans-serif;
```

### Scale

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero | 64-80px (5rem) | 300 | 1.05 |
| Heading L | 50px (3.125rem) | 300 | 1.1 |
| Heading M | 35px | 300 | 1.2 |
| Heading S | 26px (1.625rem) | 500 | 1.25 |
| Body L | 18px | 300 | 1.5 |
| Body | 16px | 400 | 1.5 |
| Button | 16px | 500 | 1 |
| Caption, legal | 13-14px | 400 | 1.4 |
| Eyebrow (condensed) | 13-15px SST Condensed | 500 | 1.2, uppercase |

Sizes from served CSS; weights and line heights approximate.

### Rules

- Sentence case; use ™ and ® where the site does ("DualSense™ wireless controller").
- Prices in SST Condensed or SST 500, tabular.
- Long legal text at 13px in muted gray.

## 4. Logo & Brand Mark

The **PS** symbol: a tall upright "P" standing on a flattened, perspective "S" that lies on the ground plane, with a small ® at lower right. The wordmark "PlayStation" (in a custom typeface with a capital S) can sit beside it, but the symbol alone is the main mark today.

- **Colors:** black on white, white on black or blue. The four-color 1994 version (red, yellow, green, blue) is a heritage mark only.
- **App icon / avatar:** white PS symbol on PlayStation blue.
- **Clear space:** at least half the symbol height on every side (approximate).
- **Minimum size:** about 24px tall on screen (approximate).

Misuse:

- Do not separate, rotate or redraw the P and S.
- Do not use the heritage four-color logo for current products.
- Do not add glow, bevel or 3D effects, or place it on busy key art without a scrim.

## 5. Components

### Buttons

Buttons use the pill radius and a 2px border in the same color as the fill.

| Variant | Background | Text | Border | Height |
|---|---|---|---|---|
| Primary | `#0070CC` | `#FFFFFF` 16px/500 | 2px `#0070CC` | 44-48px |
| Primary on dark | `#FFFFFF` | `#000000` | 2px white | same |
| Secondary (light) | `rgba(0,0,0,.06)` | `#000000` | none | same |
| Secondary (dark) | `rgba(255,255,255,.3)` | `#FFFFFF` | none | same |
| Commerce | `#D53B00` | `#FFFFFF` | 2px `#D53B00` | same |
| PS Plus | `#E7CD78` or `#FCC71D` | `#1F1F1F` | 2px | same |
| Dark | `#1F1F1F` | `#FFFFFF` | 2px `#1F1F1F` | same |

States:

- Hover: background darkens 10% (`#0068BD` for blue) and the button scales to about 1.05; pressed darkens 20%.
- Focus: `box-shadow: 0 0 0 2px` in the hover color plus an outer white gap (approximate).
- Disabled: gray `#6B6B6B` at 60%.

```css
.ps-btn {
  min-height: 48px; padding: 0 24px;
  border: 2px solid #0070CC; border-radius: 9999px;
  background: #0070CC; color: #fff;
  font: 500 16px/1 var(--brand-font);
  transition: transform .2s ease, background-color .2s ease;
}
.ps-btn:hover { background: #0068BD; border-color: #0068BD; transform: scale(1.05); }
.ps-btn--commerce { background: #D53B00; border-color: #D53B00; }
```

### Hero (signature)

- Full-width stage, 560-720px tall on desktop, dark gradient (`#050606` to `#2A2C2F`) or key art with a left-side scrim.
- Game logo image or 64-80px light headline, a one-line description at 18px, then one or two pill buttons.
- A carousel of heroes uses small thumbnail tabs under the stage; the active one gets a 2px white or blue outline.

### Game tiles

- Key art 16:9 or 3:4, radius 12-24px (corner-size tokens), no border.
- Title 16-18px/500 below; platform tags "PS5" "PS4" as small outlined labels.
- Hover: image scales to 1.03-1.05 inside the radius and a Low shadow appears.
- Store tiles add price in SST Condensed and a discount badge in Red or Plus Gold.

### Hardware cards

Product renders on `#F5F7FA` or white, 24px radius, centered product, name 26px/500, short description, "Buy now" commerce pill and "Learn more" link.

### Navigation

- Shared global nav: white (or black on dark pages), about 64px desktop, PS symbol left, menu items "Games", "Hardware", "Services", "News", "Shop", "Support" at 16px with chevrons opening a full-width mega-menu of icons and text.
- Right: search icon, "Sign in" pill. A second brand bar for Sony sits above on some regions (black, 36px).
- Mobile: hamburger, full-screen dark or light drawer, large 20px items.

### Tabs and filters

- Pill tabs: 36-40px, `rgba(0,0,0,.06)` inactive, `#1F1F1F` with white text active (or white with black text on dark).
- Filter chips in the Store and games catalog: same pills with a count.

### Inputs

- 48px tall, radius 4-8px (approximate), fill `rgba(0,0,0,.06)` on light, `rgba(255,255,255,.08)` on dark, 16px text.
- Focus: 2px `#0070CC` border. Error: `#C81B3A` text and border.

### Badges

- "PS5", "PS4", "PS VR2" platform tags: 12px/500, 1px border, 4px radius.
- Sale badge: `#C81B3A` fill, white text, "-50%". PS Plus badge: gold "+" icon.

### Modals

White or `#1F2024` dark, radius 24px, High shadow, close X top-right, 32px padding. Age gate and region pickers use this.

## 6. Layout & Spacing

- **Space tokens:** 2, 4, 8, 12-14, 16, 24, 32, 48, 64-72, 80-90, 112-144px; values shift per breakpoint.
- **Content width:** about 1440px max, with a 12-column grid and 24-40px gutters (approximate).
- **Breakpoints:** about 768, 1024, 1366 and 1920px (approximate). Sections 64-128px apart, one idea each.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Low | `0 var(--space-2) var(--space-3) 0 var(--shadow-color)`, about `0 4px 8px rgba(31,31,31,.12)` |
| High | `0 var(--space-2) var(--space-5) 0`, about `0 4px 16px rgba(31,31,31,.2)` |
| Focus | `0 0 0 2px` in the button's hover color |

- Elevation is mostly about cards over light gray; dark stages rely on gradients.
- Hover scale on buttons and tiles: 1.03-1.05 over about 200ms ease.
- Hero carousels crossfade 400-600ms; respect reduced motion.
- Loading uses the four controller shapes in sequence.

## 8. Iconography & Imagery

- **Icons:** simple outline icons, 24px, 2px stroke, rounded; plus the controller shapes (triangle, circle, cross, square) as motifs.
- **Key art:** official game art at full bleed, never cropped through logos or faces.
- **Hardware:** PS5 and accessories rendered on clean white or gray, soft floor shadow, or on black with rim light.
- **People:** lifestyle photography of players on couches and at desks, natural light.

## 9. Voice & Microcopy

Confident, direct and fan-friendly. Short sentences. Brand names spelled exactly, with marks.

Sample strings read on playstation.com today:

- "Plays best on PS5"
- "Great PS4 & PS5 games out now or coming soon"
- "Discover all PS5 consoles and accessories"
- "New savings on PlayStation Store"
- "Discover PlayStation Plus"
- Buttons: "Find out more", "Buy now", "Sign in"
- Footer: "Health warning", "Age ratings", "History of PlayStation"

## 10. Do's and Don'ts

**Do**

- Use `#0070CC` pill buttons for primary actions and `#D53B00` only for buying.
- Set big headlines in SST (or Inter) at weight 300.
- Let key art and hardware fill the frame; keep chrome minimal.
- Alternate light and dark sections with the same layout.
- Use ™ and ® on product names as the site does.

**Don't**

- Don't use neon "gamer" gradients, glows or angular HUD frames.
- Don't use the heritage four-color logo for current products.
- Don't put orange on non-purchase actions.
- Don't use square buttons or heavy bold headlines.
- Don't crowd tiles with text over the art.

## 11. Agent Prompt Guide

> Build this UI in the style of playstation.com. White page with alternating dark stages (`linear-gradient(180deg, #050606, #2A2C2F)`) and light gray `#F5F7FA` sections. Font: `"SST", Inter, Helvetica, Arial, sans-serif`; big headlines 50-80px at weight 300, body 16-18px. Primary buttons are pills (radius 9999px, 48px tall, 2px border) in PlayStation blue `#0070CC` with white 16px/500 text, hover `#0068BD` with a slight scale to 1.05. Buy buttons are orange `#D53B00`; PlayStation Plus uses gold `#FCC71D`. On dark, buttons turn white with black text and links become `#53B1FF`. Show large game key art tiles with 12-24px radius that zoom slightly on hover, titles below, small "PS5" tags. Keep shadows soft (`0 4px 8px rgba(31,31,31,.12)`). Calm, confident copy such as "Plays best on PS5".

```css
:root {
  --brand-blue: #0070CC;
  --brand-blue-hover: #0068BD;
  --brand-blue-deep: #003791;
  --brand-blue-on-dark: #53B1FF;
  --brand-commerce: #D53B00;
  --brand-plus: #FCC71D;
  --brand-plus-soft: #E7CD78;
  --brand-text: #000000;
  --brand-charcoal: #1F1F1F;
  --brand-muted: #6B6B6B;
  --brand-bg: #FFFFFF;
  --brand-surface: #F5F7FA;
  --brand-border: #D2D4D9;
  --brand-dark: #121314;
  --brand-dark-card: #1F2024;
  --brand-error: #C81B3A;
  --brand-font: "SST", "Inter", Helvetica, Arial, sans-serif;
  --brand-font-condensed: "SST Condensed", "Barlow Condensed", Arial Narrow, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 9999px;
  --brand-shadow-low: 0 4px 8px 0 rgba(31,31,31,.12);
  --brand-shadow-high: 0 4px 16px 0 rgba(31,31,31,.2);
  --brand-gradient-dark: linear-gradient(180deg, #050606 0%, #2A2C2F 100%);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by PlayStation or Sony Interactive Entertainment.

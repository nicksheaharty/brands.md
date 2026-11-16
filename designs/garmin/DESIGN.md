---
name: Garmin
slug: garmin
url: https://garmin.com
category: Hardware
tagline: "Black and white retail, condensed Oswald headings, outdoor photos and a small blue delta."
updated: 2026-11-16
appStoreId: 583446403
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Wordmark, text, primary buttons, footer
  - name: Garmin Blue
    hex: "#007CC3"
    role: The delta triangle in the logo, links in apps, data highlights
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on black
  - name: Line Grey
    hex: "#D8D8D8"
    role: Header and nav dividers, card borders
  - name: Text Grey
    hex: "#727272"
    role: Secondary text, captions
  - name: Surface
    hex: "#F2F2F2"
    role: Section backgrounds, product image wells
  - name: Dark Grey
    hex: "#333333"
    role: Body text on white
  - name: Banner Orange
    hex: "#FF9B00"
    role: Notice banners, alerts
  - name: Sale Red
    hex: "#D0021B"
    role: Sale prices and promo flags (approximate)
  - name: Connect Navy
    hex: "#11171C"
    role: Dark surfaces in Garmin Connect (approximate)
fonts:
  display:
    family: "Oswald"
    fallback: "Oswald"
    weights: [400, 500]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 56, weight: 400, lineHeight: 1.05, tracking: "0.02em" }
  - { role: Heading L, size: 36, weight: 400, lineHeight: 1.1, tracking: "0.03em" }
  - { role: Heading M, size: 24, weight: 400, lineHeight: 1.2, tracking: "0.04em" }
  - { role: Card Heading, size: 20, weight: 400, lineHeight: 1.25, tracking: "0.05rem" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Nav, size: 14, weight: 500, lineHeight: 1.4, tracking: "0.04rem" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 0, md: 3, lg: 3, pill: 9999 }
spacing: [4, 8, 16, 24, 32, 80]
shadows:
  - { name: Nav Active, value: "inset 0 -3.2px 0 #000000" }
  - { name: Dropdown, value: "0 0 6px 0 #D8D8D8" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#000000"
  muted: "#727272"
  border: "#D8D8D8"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Garmin

## 1. Visual Theme & Atmosphere

Garmin.com is a black-and-white retail site for watches, cycling computers, marine electronics, aviation and car devices. The page is white, the type is black, the footer is black, and the color comes from the photography: trail runners, ocean boats, cockpits, mountain bikes. The one brand color, the blue delta triangle over the "N" in GARMIN, stays small.

What makes it recognisable:

- **Condensed uppercase headlines.** Section and product headings use **Oswald**, a condensed sans, often in uppercase with open tracking. It reads like sports equipment labelling.
- **Roboto everywhere else.** Body, nav, prices and buttons use Roboto.
- **Monochrome UI.** Buttons, cart badge, nav underline and footer are black. Borders are `#D8D8D8`. There is almost no tinted UI color.
- **Product on white, people outdoors.** Product shots are on white or light grey; lifestyle photos are full bleed and saturated.
- **Category-driven mega menu.** A wide header with categories (Wearables & Smartwatches, Sports & Fitness, Outdoor Recreation, Marine, Automotive, Aviation) that opens big menus with promo cards.

Mood words: rugged, technical, clean, outdoor, precise.

## 2. Color Palette & Roles

Values in the header, footer and font CSS were read on garmin.com/en-US (2026-11-16). Most page modules render in JavaScript, so their colors are approximate.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Text, logo, primary buttons, footer, nav underline, cart badge |
| Garmin Blue | `#007CC3` | Delta triangle in the logo (approximate, from logo artwork) |
| White | `#FFFFFF` | Page, cards, text on black |
| Line Grey | `#D8D8D8` | Header bottom border, dropdown borders, menu dividers |
| Text Grey | `#727272` | Secondary text, breadcrumbs |
| Dark Grey | `#333333` | Long-form body copy |
| Surface | `#F2F2F2` | Section bands, image wells |
| Banner Orange | `#FF9B00` | Notice banner (`gh__header__nav__ie-banner`) |
| Sale Red | `#D0021B` (approximate) | Sale price, "Sale" flags |
| Rating Gold | `#FFB400` (approximate) | Review stars |
| Teal | `#3E8B8A` | Occasional UI accent in scripts (rare) |

### Semantic colors (approximate)

| State | Color |
|---|---|
| Error | `#D0021B` |
| Success / in stock | `#2E7D32` |
| Warning | `#FF9B00` |
| Focus | 2px black outline with 2px offset |

### Dark surfaces

The footer is pure black with white links. Garmin Connect (the app) is dark-first, with near-black surfaces and colored metric tiles (heart rate red, steps blue, sleep purple, Body Battery blue); the website stays light.

## 3. Typography

**Families:** **Oswald** for headings and **Roboto** for everything else, both served from `fonts.garmin.com`. Both are open-source Google Fonts, so they can be used directly. Garmin also loads "Superscripts-Oswald" and "Superscripts-Roboto" helper fonts to render ® and ™ symbols neatly, and falls back to Noto Sans TC/SC/JP/KR and Prompt for other scripts.

```css
--font-heading: Oswald, "Roboto Condensed", Roboto, "Noto Sans TC", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", Prompt, sans-serif;
--font-body: Roboto, "Noto Sans TC", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", Prompt, sans-serif;
```

### Scale (approximate)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero headline (Oswald) | 48-64px | 400 | 1.05 | 0.02em |
| Section heading (Oswald) | 32-40px | 400 | 1.1 | 0.03em |
| Subheading (Oswald) | 24px | 400 | 1.2 | 0.04em |
| Promo card heading (Oswald) | 20px | 400 | 1.25 | 0.05rem |
| Body (Roboto) | 16px | 400 | 1.5 | 0 |
| Nav / utility (Roboto) | 14px | 400-500 | 1.4 | 0.04rem |
| Price (Roboto) | 18-24px | 500 | 1.2 | 0 |
| Caption / legal (Roboto) | 12px | 400 | 1.4 | 0 |

### Rules

- Oswald headings are often uppercase; keep tracking slightly open (0.02-0.05em).
- Roboto for anything the shopper reads closely: specs, prices, buttons.
- Trademark symbols are superscript at about 41-52% of the line size.
- Product names keep Garmin's own casing ("fēnix 8", "Forerunner 965", "Edge 1050", "inReach Messenger Plus").

## 4. Logo & Brand Mark

The logo is the wordmark GARMIN in black geometric capitals with a blue delta (triangle) above the final "N", plus a small ®. The delta is the brand's symbol.

- **Color versions:** black wordmark with blue delta on white (primary); white wordmark with blue delta on black (footer, app icon); all white or all black for one-color use.
- **Clear space:** at least the height of the delta on every side.
- **Minimum size:** about 60px wide on screen. In the header it is drawn 16px tall (`.gh__logo-container__logo__svg { height: 1rem }`).
- **Footer:** white version, max 130px wide.

Misuse:

- Do not separate the delta from the wordmark except as a small favicon.
- Do not recolor the delta to anything but Garmin blue (or the single color of the wordmark).
- Do not set GARMIN in Oswald as a substitute.
- Do not add outlines, gradients or shadows.

## 5. Components

### Header

- Two zones: logo container on the left (64px tall, `padding-inline-start: 16px` on mobile) and a utility bar on the right (Support, Sign In, Cart, Search icons, 14px Roboto).
- Category row below with centered links. Hover or active: `box-shadow: inset 0 -0.2rem 0 #000` (a 3.2px black underline) after a 250ms delay, black text, no fill.
- Mobile: a 64px bar with a 1px `#D8D8D8` bottom border; categories collapse into an accordion with plus and minus icons and 16px row padding.
- Cart badge: 20px black circle, white 12px number, offset to the top right of the bag icon.

### Mega menu

White panel, 1px `#D8D8D8` top border, columns of 14-16px Roboto links with Oswald 20px column headings, and a promo card (image, Oswald heading, 14px copy, a right-aligned 14px/500 CTA link) on the right.

### Buttons (approximate)

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#000000` | white 16px/500 | none | 0-3px |
| Secondary | `#FFFFFF` | black | 1px black | 0-3px |
| Contained on dark | `#FFFFFF` | black | none | 0 |
| Text link | transparent | black, underlined on hover | none | 0 |

- Height 44-48px, padding 0 24-32px.
- Hover: primary goes to dark grey `#333333`; secondary and on-dark buttons invert to black fill with white text (`.g__button--contained--dark:hover { background:#000; color:#fff }`).
- Focus: 2px black outline, 2px offset.

### Product card

- White, no shadow, image on white or `#F2F2F2` in a square well.
- Below: product name in Roboto 16px/500, a one-line descriptor in `#727272`, star rating, price 18px/500, and color swatches as 16px circles with a 1px grey ring.
- Sale: struck-through original in grey and the new price in sale red.
- Hover: image swaps to a second angle; no lift.

### Hero and promo tiles

Full-width lifestyle photography with an Oswald headline (white over dark images, black over light), one line of Roboto copy and one or two buttons. Promo grids use 2-4 tiles with square corners.

### Inputs

48px tall, 1px `#D8D8D8` border (black on focus), square or 3px corners, 16px Roboto. Labels above at 14px.

### Tabs and filters

Category pages have a left filter rail with collapsible sections (Oswald or Roboto 500 headings, checkboxes with black fill when checked) and a sort dropdown on the right. Tabs use the same black inset underline as the nav.

### Spec tables

Product pages list specs in two-column tables: label in `#727272`, value in black, rows divided by 1px `#D8D8D8`, grouped under Oswald subheadings (General, Sensors, Daily Smart Features, Outdoor Recreation Features).

### Footer

Black background, white Roboto links in columns (14-16px), social icons in white, country selector and legal line in grey.

## 6. Layout & Spacing

- **Spacing tokens (`--g-spacing-*`):** xs 4 / sm 8 / md 16 / lg 24 / xl 32 / xxl 80px.
- **Breakpoints (`--g-breakpoint-*`):** xs 480, sm 768, md 1024, lg 1200, xl 1350, xxl 1440, xxxl 1824px. The "standard" breakpoint where the header switches is 768px; the full desktop nav starts at 1024px.
- **Max width:** content about 1440px wide; full-bleed images stretch edge to edge.
- **Gutters:** 16px mobile, 24-32px tablet and desktop.
- **Product grids:** 2 columns on mobile, 3-4 on desktop, 16-24px gaps.
- **Density:** medium; generous imagery, compact text blocks.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Nav active | `inset 0 -0.2rem 0 #000` |
| Dropdown | `0 0 6px 0 #D8D8D8` |
| Text shadow (rare) | `0 1px 0 #000` over images |

- The site is flat. Separation comes from 1px `#D8D8D8` lines and grey bands.
- Motion is functional: mega menus open with a 250ms delay to avoid accidental triggers; carousels slide; image swaps on hover are instant.

## 8. Iconography & Imagery

- **Icons:** simple monoline icons (search, user, bag, chevrons, plus/minus) in black at 16-24px.
- **Product photography:** devices shot straight on or at a slight angle, sharp, on white. Watch faces show realistic data screens.
- **Lifestyle photography:** outdoors, in motion, natural light: runners, divers, sailors, pilots, cyclists. Often wide crops with the subject small in a big landscape.
- **Data graphics:** in Connect-style imagery, metric colors (heart rate red, steps blue, sleep purple) appear on dark watch and phone screens.

## 9. Voice & Microcopy

Direct, active and outdoorsy. Short headlines built around what you can do with the device.

- Category labels: "Wearables & Smartwatches", "Sports & Fitness", "Outdoor Recreation", "Marine", "Automotive", "Aviation".
- CTAs: "Shop", "Shop Now", "Learn More", "Compare", "Add to Cart".
- Utility: "Support", "Sign In", "Find a Dealer".
- Product taglines use plain verbs and features rather than superlatives; keep trademark symbols on product names.

## 10. Do's and Don'ts

**Do**

- Keep the UI black, white and `#D8D8D8` grey.
- Use Oswald for headings (often uppercase) and Roboto for everything else.
- Let photography bring the color.
- Use the 3.2px black inset underline for active nav and tabs.
- Keep corners square or nearly square (0-3px).

**Don't**

- Don't use Garmin blue for buttons or large fills; it belongs to the delta.
- Don't round buttons into pills.
- Don't add drop shadows to product cards.
- Don't set long body copy in Oswald.
- Don't drop the trademark symbols or change product-name casing.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Garmin.com. White page, black text, 1px `#D8D8D8` dividers, black footer with white links. Headings in `Oswald, "Roboto Condensed", sans-serif` weight 400, often uppercase with 0.02-0.05em tracking; everything else in `Roboto, sans-serif` 16px/1.5. Header: 64px logo bar (black GARMIN wordmark with a small blue `#007CC3` triangle above the N) and a centered category row; active or hovered items get `box-shadow: inset 0 -0.2rem 0 #000`. Primary buttons: black fill, white Roboto 16px/500, 48px tall, square corners; secondary: white with 1px black border, inverting to black on hover. Product cards: square image on white or `#F2F2F2`, name 16px/500, grey descriptor `#727272`, star rating, price 18px/500, color swatches. Big outdoor lifestyle photos with white Oswald headlines. Spacing tokens 4/8/16/24/32/80px; breakpoints 480/768/1024/1200/1440px. Flat, no card shadows.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-blue: #007CC3;
  --brand-line: #D8D8D8;
  --brand-text: #000000;
  --brand-text-body: #333333;
  --brand-text-muted: #727272;
  --brand-surface: #F2F2F2;
  --brand-banner: #FF9B00;
  --brand-sale: #D0021B;
  --brand-font-heading: Oswald, "Roboto Condensed", Roboto, "Noto Sans SC", sans-serif;
  --brand-font: Roboto, "Noto Sans SC", "Noto Sans JP", sans-serif;
  --brand-radius: 0;
  --brand-radius-sm: 3px;
  --brand-space-xs: 4px;
  --brand-space-sm: 8px;
  --brand-space-md: 16px;
  --brand-space-lg: 24px;
  --brand-space-xl: 32px;
  --brand-space-xxl: 80px;
  --brand-bp-sm: 768px;
  --brand-bp-md: 1024px;
  --brand-bp-lg: 1200px;
  --brand-bp-xxl: 1440px;
  --brand-nav-active: inset 0 -0.2rem 0 #000;
  --brand-shadow-dropdown: 0 0 6px 0 #D8D8D8;
  --brand-header-height: 64px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Garmin.

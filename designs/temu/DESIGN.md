---
name: Temu
slug: temu
url: https://temu.com
category: Commerce
tagline: "Orange-on-white discount marketplace: dense product grids, bold prices, urgency badges."
updated: 2026-11-16
appStoreId: 1641486558
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Temu Orange
    hex: "#FB7701"
    role: Brand color, logo, primary buttons, deal highlights
  - name: Ink
    hex: "#222222"
    role: Primary text, prices, search border
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Trust Green
    hex: "#0A8800"
    role: Free shipping, free returns, safe payment badges
  - name: Urgent Red
    hex: "#E32E0E"
    role: Low stock, countdown, almost sold out
  - name: Focus Blue
    hex: "#0B7BFF"
    role: Focus rings and inline links
  - name: Orange Tint
    hex: "#FFF5EB"
    role: Deal tags, coupon chips, soft orange panels
  - name: Grey 700
    hex: "#555555"
    role: Secondary text
  - name: Grey 500
    hex: "#757575"
    role: Metadata, sold counts, struck prices
  - name: Grey 400
    hex: "#949494"
    role: Placeholders, disabled
  - name: Divider
    hex: "#ECECEC"
    role: Hairlines and card borders
  - name: Surface
    hex: "#F7F7F7"
    role: Section background, image wells
  - name: Gold
    hex: "#FFDA97"
    role: Shimmer banner for limited-time offers
  - name: Black
    hex: "#000000"
    role: Footer background, overlays
fonts:
  display:
    family: "System UI (SF Pro, Roboto, Segoe UI)"
    fallback: "Arimo"
    weights: [600, 700]
  body:
    family: "System UI (SF Pro, Roboto, Segoe UI)"
    fallback: "Arimo"
    weights: [400, 500, 600]
typeScale:
  - { role: Section Title, size: 22, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Price, size: 20, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Product Title, size: 14, weight: 400, lineHeight: 1.35, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 600, lineHeight: 1.0, tracking: "0" }
  - { role: Meta, size: 13, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Badge, size: 12, weight: 600, lineHeight: 1.5, tracking: "0" }
radii: { sm: 3, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 10, 12, 16, 20, 24, 32]
shadows:
  - { name: Dropdown, value: "0 4px 24px rgba(0,0,0,0.1)" }
  - { name: Card Hover, value: "0 2px 8px rgba(0,0,0,0.1)" }
  - { name: Sticky Bar, value: "0 2px 10px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#222222"
  muted: "#757575"
  border: "#ECECEC"
  accent: "#FB7701"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: pill
---

# Temu

## 1. Visual Theme & Atmosphere

Temu is a discount marketplace, and its UI is built to show as many products and prices as possible while keeping a sense of "deal happening now". The page is white with near-black text, and one color does almost all the work: Temu Orange `#FB7701`. Orange marks the logo, the main buttons, deal banners, coupon chips and the active state of almost every control.

What makes it recognisable:

- **The orange.** A warm, saturated orange (not red, not amber). It appears in big solid blocks (Lightning deals banner, Add to cart) and as a tint `#FFF5EB` behind small tags.
- **Wall of products.** The home page is mostly an endless grid of square product photos, each with a short title, a bold price, a struck-through reference price and a sold count.
- **Urgency layers.** Small red countdowns, "Almost sold out" lines in `#E32E0E`, percentage-off tags and gold shimmering banners sit on top of the grid.
- **Trust strip.** Green `#0A8800` check icons and labels ("Free shipping", "Free returns", "Price adjustment") run across the top of the page and the cart.
- **System fonts.** No custom typeface in the product; everything is the device's UI font at 12-16px, with bold prices.
- **Pill controls.** The search bar, primary buttons and filter chips are fully rounded.

Mood words: busy, cheerful, urgent, bargain, mobile-first.

## 2. Color Palette & Roles

All values below are read from temu.com production CSS.

| Name | Hex | Role |
|---|---|---|
| Temu Orange | `#FB7701` | Logo, primary buttons, active tabs, deal banners, link hover |
| Orange Dark | `#E76D00` | Pressed state for orange buttons |
| Orange Tint | `#FFF5EB` | Coupon chips, deal tags, soft panels |
| Orange Pale | `#FED9B8` | Tag borders, progress tracks |
| Ink | `#222222` | Primary text, prices, search border, cart icon |
| Grey 700 | `#555555` | Secondary text |
| Grey 500 | `#757575` | Sold counts, struck prices, metadata |
| Grey 400 | `#949494` | Placeholders, disabled |
| Grey 300 | `#AAAAAA` | Icons in inactive state |
| Divider | `#ECECEC` | Hairlines, card borders |
| Rule | `#DFDFDF` | Input borders |
| Surface | `#F7F7F7` | Image wells, section background |
| Surface Alt | `#F2F2F2` | Hovered rows, skeletons |
| White | `#FFFFFF` | Page background |
| Black | `#000000` | Footer, overlays, video player |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Trust / success | `#0A8800` (darker `#0B8000`) | Free shipping, free returns, secure payment, check icons |
| Urgent / error | `#E32E0E` | "Almost sold out", countdown, validation errors |
| Sale red | `#B10000` / `#CE0403` | Big sale banners, holiday themes |
| Focus / link | `#0B7BFF` | Focus outlines (2px, offset 2px), help links |
| Gold | `#FFDA97` with `#FFE6AD` | Shimmer banner for limited-time offers |

### Dark mode

There is no dark theme on the web. Dark is used only for the footer (`#000000` with `#AAAAAA` links) and full-screen video and image viewers.

## 3. Typography

**Family:** the platform system stack. From production CSS:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**Licensing:** nothing to license. When you need a web font for consistency, use **Arimo** (metrically compatible with Arial) or Roboto.

**Weights:** 400 for titles and body, 500 for labels, 600 for buttons and section headers, 700 for prices and big banner numbers.

### Scale (desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Banner headline | 28px | 700 | 1.2 | 0 |
| Section title ("Lightning deals") | 22px | 700 | 1.25 | 0 |
| Price (grid) | 20px | 700 | 1.1 | 0 |
| Price (product page) | 28px | 700 | 1.1 | 0 |
| Button | 16px | 600 | 1.0 | 0 |
| Product title | 14px | 400 | 1.35 | 0 |
| Body | 14px | 400 | 1.5 | 0 |
| Meta (sold count, struck price) | 13px | 400 | 1.3 | 0 |
| Badge | 12px | 600 | 1.5 | 0 |

### Rules

- Sentence case for buttons ("Add to cart"), title case for section names on banners ("Lightning Deals").
- Prices: currency symbol and cents smaller than the whole number (for example `$` 14px, `12` 20px, `.99` 14px), bold, Ink. Reference price is 13px grey with line-through.
- Product titles are clamped to two lines with ellipsis.
- Numbers like "10K+ sold" use a compact K/M format.

## 4. Logo & Brand Mark

The logo is the word **TEMU** in rounded, monoline capitals with soft terminals, set in Temu Orange. The app icon stacks it into two lines, "TE" over "MU", in white on an orange square, often with small shopping-themed doodles around it.

- **Color versions:** orange on white (primary), white on orange (app icon, banners), white on black (footer).
- **Clear space:** at least the height of the "E" crossbar spacing, about half a letter height, on every side.
- **Minimum size:** 56px wide for the wordmark, 24px for the stacked icon.

Misuse:

- Do not set "TEMU" in a generic font; the rounded strokes are drawn.
- Do not recolor it red or amber.
- Do not add outlines or drop shadows.
- Do not stretch the stacked TE/MU into one line or vice versa.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary ("Add to cart") | `#FB7701` | `#FFFFFF` 16px/600 | none | 9999px | 44px |
| Secondary ("Buy now" alt, "See all") | `#FFFFFF` | `#222222` | 1px `#222222` | 9999px | 40px |
| Tint ("Get coupon") | `#FFF5EB` | `#FB7701` | 1px `#FED9B8` | 9999px | 32px |
| Quantity stepper | `#FFFFFF` | `#222222` | 1px `#DFDFDF` | 4px | 32px |
| Text link | transparent | `#222222`, hover `#FB7701` | none | 0 | auto |

States:

- Hover primary: `#E76D00`. Hover secondary: background `#F7F7F7`.
- Focus: `outline: 2px solid #0B7BFF; outline-offset: 2px;` with the button's own radius.
- Disabled: `#DFDFDF` background, `#949494` text.
- Loading: white spinner inside the orange pill, label hidden.

```css
.btn-primary {
  font: 600 16px/1 var(--brand-font);
  color: #fff;
  background: #FB7701;
  border: 0;
  border-radius: 9999px;
  height: 44px;
  padding: 0 24px;
  transition: background-color .2s ease;
}
.btn-primary:hover { background: #E76D00; }
```

### Search bar (signature)

- Full pill, 44-48px tall, 2px solid `#222222` border, white fill, placeholder `#949494` 14px.
- A round black (`#222222`) search button sits inside the right edge, 36px, with a white magnifier icon.
- Below it on focus: a dropdown with "Recent searches" and trending chips, shadow `0 4px 24px rgba(0,0,0,0.1)`, 8px radius.

### Product card (signature)

- No border, no shadow at rest. Square image (1:1) with 4-8px radius on a `#F7F7F7` well.
- Overlay tags top-left: "-62%" or "Lightning deal" in white on orange, 12px/600, radius 3px.
- Under the image: two-line title 14px/400 Ink, then price row (bold Ink price, grey struck price, "-62%" in orange), then "10K+ sold" and star rating 12-13px grey.
- A small round "add to cart" icon button (32px, 1px `#222222` border) on the right of the price row.
- Hover on desktop: card lifts with `0 2px 8px rgba(0,0,0,0.1)` and the image zooms 1.03x.

### Lightning deals strip

Full-width orange `#FB7701` header bar with a white lightning icon, "Lightning deals" 22px/700 white, a countdown in white boxes ("02 : 14 : 37"), and "See all >" right. Below it, a horizontal scroll row of compact product cards each with an orange progress bar ("82% claimed").

### Trust strip

A row of three or four items under the header and in the cart: green check icon + "Free shipping on all orders", "Free returns within 90 days", "Price adjustment". Text 13px `#0A8800`, separated by 1px `#ECECEC` vertical rules.

### Inputs

Height 40px, radius 4px, border 1px `#DFDFDF`, focus border `#222222`. Error: border `#E32E0E`, helper text 12px red.

### Navigation

- Desktop header: white, about 72px. Logo left, category links ("Best-Selling Items", "5-Star Rated", "New In", "Categories"), search pill in the middle, account, support, language and cart icons right. Cart icon has a black badge with the count.
- Mobile app: bottom tab bar (Home, Categories, You, Cart) with orange active icons and labels.

### Tabs and chips

Category chips are pills, 32px tall, 14px text, `#F7F7F7` fill; the active chip is Ink fill with white text, or orange text with an orange 2px underline in tab rows.

### Badges

- Discount: white on `#FB7701`, 3px radius.
- Coupon: orange on `#FFF5EB`, 13px radius pill, 18-26px tall.
- Local warehouse / "Fast delivery": green text with a truck icon.
- "Almost sold out": red text with a 12px clock icon.

### Modals and popups

Promo popups are common: white or orange card, 12px radius, 24px padding, a big coupon value ("$100 coupon bundle"), one orange pill button and a round close X above the card. Scrim `rgba(0,0,0,0.6)`.

## 6. Layout & Spacing

- **Spacing:** tight. 4, 8, 10, 12, 16, 20, 24, 32px. Grid gaps 12-16px.
- **Content width:** about 1200-1440px centred on desktop; the grid is 5 or 6 columns.
- **Gutters:** 12px mobile, 24px desktop.
- **Mobile:** 2-column grid with 8px gaps; banners are horizontal swipers.
- **Density:** very high. Every section is a row or grid of products; whitespace is used only to separate the price block from the next card.
- **Sticky elements:** header with search on scroll, and on product pages a sticky bottom bar with price and "Add to cart".

## 7. Depth, Elevation & Motion

- Shadows from production: `0 4px 24px rgba(0,0,0,0.1)` (dropdowns), `0 2px 8px rgba(0,0,0,0.1)` (hover), `0 2px 10px rgba(0,0,0,0.1)` (sticky bars), `0 6px 10px rgba(0,0,0,0.11)` (floating buttons).
- Motion is used for urgency: ticking countdowns, a shimmer sweep across gold banners (a 290deg white highlight band moving across `#FFDA97`), progress bars filling, carts bouncing when an item is added.
- Durations around 200-300ms, ease or ease-out. Image carousels auto-advance.

## 8. Iconography & Imagery

- Icons: filled or 1.5px line icons at 16-24px, rounded, in Ink; trust icons in green; urgency icons in red; deal icons (lightning, coupon, gift) in orange.
- Product photos are bright, front-on, on white or light backgrounds, square crops. Lifestyle shots appear in banners only.
- Banners mix product cut-outs, big price numbers and seasonal graphics (snowflakes, balloons) on orange, red or gold backgrounds.

## 9. Voice & Microcopy

- Upbeat, direct and price-focused. Short lines with numbers.
- Buttons: "Add to cart", "Buy now", "Get coupon", "See all", "Checkout", "Continue shopping".
- Labels: "10K+ sold", "Free shipping", "Free returns", "Almost sold out", "Only 3 left", "Lightning deals", "Ends in 02:14:37".
- Uses "you" and "your" ("Your cart", "You saved $12.40").
- Do not quote specific prices or savings in docs unless they are real; on the page, numbers are everywhere.

## 10. Do's and Don'ts

**Do**

- Use `#FB7701` for the primary action and deal highlights, and Ink `#222222` for prices.
- Keep product cards borderless with square images and two-line titles.
- Show a struck reference price and percent off next to the price.
- Use green only for trust messages and red only for urgency.
- Use full pills for search, buttons and chips.

**Don't**

- Don't swap the orange for red or yellow.
- Don't use custom display fonts; the product uses system UI.
- Don't add big empty heroes; lead with products.
- Don't use shadows on cards at rest.
- Don't make text links orange by default; they turn orange on hover.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Temu. White page, text Ink `#222222`, secondary `#757575`, dividers `#ECECEC`, image wells `#F7F7F7`. Font: the system UI stack (`system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`). The brand color is Temu Orange `#FB7701` (hover `#E76D00`), used for the TEMU wordmark, primary pill buttons ("Add to cart", 44px tall, white 16px/600 text) and deal banners. The header has a large pill search bar with a 2px `#222222` border and a round black search button inside. Below it, a green `#0A8800` trust strip ("Free shipping", "Free returns"). Then an orange "Lightning deals" bar with a countdown and a horizontal row of deal cards with orange progress bars, followed by a dense 5-6 column grid of borderless product cards: square photo on `#F7F7F7`, two-line 14px title, bold 20px price with smaller cents, grey struck price, "-62%" in orange, "10K+ sold" in 13px grey. Use red `#E32E0E` for "Almost sold out" and `#FFF5EB` pills for coupon tags. Tight 12-16px gaps; no shadows at rest.

```css
:root {
  --brand-orange: #FB7701;
  --brand-orange-press: #E76D00;
  --brand-orange-tint: #FFF5EB;
  --brand-orange-pale: #FED9B8;
  --brand-ink: #222222;
  --brand-text-secondary: #555555;
  --brand-text-meta: #757575;
  --brand-text-disabled: #949494;
  --brand-divider: #ECECEC;
  --brand-border-input: #DFDFDF;
  --brand-surface: #F7F7F7;
  --brand-bg: #FFFFFF;
  --brand-trust: #0A8800;
  --brand-urgent: #E32E0E;
  --brand-focus: #0B7BFF;
  --brand-gold: #FFDA97;
  --brand-font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-radius-sm: 3px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 8px;
  --brand-radius-pill: 9999px;
  --brand-shadow-dropdown: 0 4px 24px rgba(0,0,0,0.1);
  --brand-shadow-hover: 0 2px 8px rgba(0,0,0,0.1);
  --brand-shadow-sticky: 0 2px 10px rgba(0,0,0,0.1);
}
```

---

Values are observed from temu.com production CSS and the public app; this file is an unofficial reference and is not affiliated with or endorsed by Temu.

---
name: Samsung
slug: samsung
url: https://samsung.com
category: Hardware
tagline: "Samsung blue wordmark, black pill CTAs, product-first pages and One UI's rounded cards."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Samsung Blue
    hex: "#1428A0"
    role: Logo, brand moments, corporate blue
  - name: Black
    hex: "#000000"
    role: Text, primary CTA pill, header icons
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Action Blue
    hex: "#2189FF"
    role: Links, selected states, focus on samsung.com
  - name: Deep Action Blue
    hex: "#006BEA"
    role: Link hover, pressed blue
  - name: One UI Blue
    hex: "#387AFF"
    role: One UI accent, switches, primary text buttons (approximate)
  - name: Graphite
    hex: "#313131"
    role: Dark surfaces, strong secondary text
  - name: Gray 555
    hex: "#555555"
    role: Secondary text
  - name: Gray 757
    hex: "#757575"
    role: Muted text, captions
  - name: Line
    hex: "#DDDDDD"
    role: Borders and dividers
  - name: Smoke
    hex: "#F4F4F4"
    role: Product card background
  - name: Snow
    hex: "#F7F7F7"
    role: Section background
  - name: Red
    hex: "#D62E2E"
    role: Sale price, errors
fonts:
  display:
    family: "Samsung Sharp Sans"
    fallback: "Manrope"
    weights: [700]
  body:
    family: "SamsungOne"
    fallback: "Inter"
    weights: [400, 700]
typeScale:
  - { role: Hero, size: 56, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Heading L, size: 40, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Heading M, size: 28, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Heading S, size: 22, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: CTA, size: 14, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 6, md: 20, lg: 26, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80]
shadows:
  - { name: Card, value: "0 4px 10px rgba(0,0,0,0.2)" }
  - { name: Soft, value: "0 4px 6px rgba(0,0,0,0.1)" }
  - { name: Focus, value: "0 0 0 2px #FFFFFF, 0 0 3px rgba(0,0,0,0.75)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#000000"
  muted: "#757575"
  border: "#DDDDDD"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 20
  buttonStyle: pill
---

# Samsung

## 1. Visual Theme & Atmosphere

Samsung has two faces that share one system. The corporate brand is the blue SAMSUNG wordmark (`#1428A0`). The consumer experience, on samsung.com and in One UI on Galaxy devices, is mostly black, white and soft gray, with rounded shapes, bold Samsung Sharp Sans headlines and large product renders. Blue becomes a quiet accent for links and switches.

What makes it recognisable:

- **Black pill CTAs.** samsung.com uses compact black pills ("Buy now", "Learn more") with 20px radius and bold 14px labels.
- **Product renders on gray.** Phones, TVs and appliances float on `#F4F4F4` and `#F7F7F7` cards with generous space.
- **Samsung Sharp Sans headlines.** A rounded, geometric bold display face; body is SamsungOne, a neutral grotesk.
- **Viewport-based sizing.** The site scales type, radii and spacing with the viewport (`vw` values), so layouts feel the same at any desktop width.
- **One UI's split screen.** On devices, the top of each screen is a large title area and the content sits low within thumb reach, in rounded white cards on a light gray background.
- **Rounded everything in One UI.** 26px-ish card corners, pill switches, squircle app icons.

Mood words: clean, premium, product-led, approachable, global.

## 2. Color Palette & Roles

samsung.com values were read from its served CSS (`clientlib-base-ux25`, US site styles). One UI values are approximate, taken from current Galaxy defaults rather than published tokens.

| Name | Hex | Role |
|---|---|---|
| Samsung Blue | `#1428A0` | Wordmark, corporate brand color |
| Black | `#000000` | Text, primary CTA, icons |
| White | `#FFFFFF` | Page, text on dark |
| Action Blue | `#2189FF` | Links, selected tabs, focus |
| Deep Action Blue | `#006BEA` | Link hover, pressed |
| Light Blue | `#68AEFF` | Links on dark |
| Graphite | `#313131` | Dark surfaces, strong secondary text |
| Dark | `#1C1C1C` | Dark sections |
| Gray 555 | `#555555` | Secondary text |
| Gray 757 | `#757575` | Muted text |
| Gray 8F | `#8F8F8F` | Placeholder, disabled |
| Line | `#DDDDDD` | Borders |
| Line Light | `#EEEEEE` | Dividers |
| Smoke | `#F4F4F4` | Product cards |
| Snow | `#F7F7F7` | Section backgrounds |

### Semantic

| State | Hex |
|---|---|
| Sale price / error | `#D62E2E` (light), `#F36E6E` (dark) |
| Promo red | `#EF3434` |
| Highlight yellow | `#FFF01F` (promo flags) |
| Orange | `#F66700` (offers) |
| Success | `#00A651` (approximate) |

### One UI (approximate)

| Name | Light | Dark |
|---|---|---|
| Background | `#F6F6F6` | `#000000` |
| Card | `#FFFFFF` | `#171717` |
| Primary text | `#000000` | `#FAFAFA` |
| Secondary text | `#737373` | `#A0A0A0` |
| Accent (switches, links) | `#387AFF` | `#3E91FF` |
| Divider | `#E3E3E3` | `#2B2B2B` |

One UI's dark mode is true black behind cards, which suits OLED screens.

## 3. Typography

**Families:**

- **Samsung Sharp Sans**: rounded geometric display face for headlines and the product names on samsung.com. Bold only in practice.
- **SamsungOne**: the corporate text face (Latin, plus many scripts), for body, UI and CTAs. On Galaxy devices the system font is SamsungOne.

Both are proprietary. Fallbacks: **Manrope** for Sharp Sans (rounded geometric, bold), **Inter** for SamsungOne.

```css
--font-display: "SamsungSharpSans", "Manrope", Arial, sans-serif;
--font-body: "SamsungOne", "Inter", Arial, sans-serif;
```

### Scale (samsung.com desktop at 1440px)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero | 48-56px | 700 Sharp Sans | 1.1 |
| Heading L | 40px | 700 Sharp Sans | 1.2 |
| Heading M | 28px | 700 Sharp Sans | 1.3 |
| Heading S | 22-24px | 700 | 1.33 |
| Body L | 18px | 400 SamsungOne | 1.45 |
| Body | 16px | 400 | 1.5 |
| CTA | 14px | 700 SamsungOne | 1.33 |
| Caption, legal | 12px | 400 | 1.4 |

Most sizes are written in `vw` on the live site (for example CTA text `0.972vw`, which is 14px at 1440px). Values here are the px equivalents at 1440px.

### Rules

- Sentence case or title case for headlines; product names exactly as branded ("Galaxy S", "Galaxy Z Fold", "Bespoke AI").
- Headlines are short and bold; body copy is brief.
- Prices: bold, with struck-through original price in gray and savings in red.
- One UI uses large titles (about 30-34px) in the top "viewing area", and 17-18px list titles below.

## 4. Logo & Brand Mark

The logo is the **SAMSUNG** wordmark in custom capital letters with open "A"s (no crossbars). Since 2015 it is used without the old blue ellipse.

- **Primary:** Samsung Blue `#1428A0` on white.
- **Reverse:** white on Samsung Blue or black.
- **Mono:** black on light backgrounds; samsung.com's header uses the black wordmark.
- **Clear space:** at least the height of the letters on all sides (approximate).
- **Minimum size:** about 60px wide (approximate).

Misuse:

- Do not put the wordmark back inside the old ellipse.
- Do not retype it, add crossbars to the "A"s, or add gradients, outlines or shadows.
- Do not recolor it in Action Blue or other blues.

## 5. Components

### Buttons (samsung.com)

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Contained black | `#000000` | `#FFFFFF` 14px/700 | 1px transparent | 20px | 9px 23px 10px |
| Contained white (on dark) | `#FFFFFF` | `#000000` | 1px transparent | 20px | same |
| Outline | transparent | `#000000` | 1px `#000000` | 20px | same |
| Text link | transparent | `#000000`, underline | none | 0 | 0 |

States (served CSS):

- Pressed: `opacity: .7`.
- Focus: inverts to white fill, black text, black border.
- Disabled: `opacity: .2`.
- Hover on desktop: outline buttons fill black with white text (approximate).

```css
.samsung-cta {
  display: inline-flex; align-items: center;
  padding: 9px 23px 10px;
  border: 1px solid transparent; border-radius: 20px;
  background: #000; color: #fff;
  font: 700 14px/1.33 var(--font-body);
}
.samsung-cta:active { opacity: .7; }
.samsung-cta--outline { background: transparent; color: #000; border-color: #000; }
```

### Hero KV (signature)

- Full-width key visual, 600-800px tall, product render centered or right, headline in Sharp Sans 48-56px, one line of body, two pills ("Buy now" black, "Learn more" outline).
- Carousel with small dots or numbered indicators and pause control; slides change every few seconds.

### Product cards

- `#F4F4F4` or white, radius 20-24px on desktop (served as `1.39-1.67vw`), product render centered, 24-32px padding.
- Name 18-22px/700, color swatches as 16px circles with a 2px white gap ring (`box-shadow: 0 0 0 2px #fff`) and outer gray ring when selected.
- Price block and a black "Buy now" pill; optional promo flag in red or yellow.

### Navigation

- Header about 64px, white, black SAMSUNG wordmark left.
- Categories: "Mobile", "TV & Audio", "Appliances", "Computing", "Displays", "Accessories", "SmartThings", "AI", "Offers" at 14-16px/700; mega-menu with product thumbnails.
- Right: search, cart and account icons (24px outline).
- Sub-nav per product: sticky bar with product name left, anchor tabs and a "Buy now" pill right.

### Tabs and chips

- Text tabs 16px/700, active black with a 2px black underline, inactive `#757575`.
- Filter chips: pill, 1px `#DDDDDD` border, 14px; selected black fill with white text.

### Inputs

- 48px tall, 1px `#8F8F8F` bottom border or full border with 8px radius, 16px text; focus border black; error text `#D62E2E`.

### One UI components (approximate)

- **Large title header:** screen title at 30-34px bold in the upper third, collapsing to a 20px toolbar title on scroll.
- **Grouped list cards:** white cards with 26px radius on `#F6F6F6`, rows 64-72px with 17-18px title and 14px gray summary, dividers inset 16-20px.
- **Switches:** 52 x 28px pill track, accent fill `#387AFF` when on, white thumb.
- **Bottom buttons:** text buttons in accent color, or a full-width pill in accent with white text.
- **Dialogs:** bottom-aligned, 26px radius, title 18-20px bold, text buttons right-aligned.
- **Quick panel tiles:** circular icons, accent fill when active.

### Badges

Small rectangles or pills, 12px/700: "New" in black, "Save $X" in red text, "Sold out" in gray.

## 6. Layout & Spacing

- **Base unit:** 4px; site spacing is mostly expressed in `vw` and maps to 8, 16, 24, 40, 64, 80px at 1440px.
- **Content width:** about 1440px max with 24-64px gutters (approximate).
- **Grid:** 12 columns desktop, 4 columns mobile; product grids 2-4 across.
- **Breakpoints:** about 768 and 1440px, plus fluid `vw` scaling between.
- **Section spacing:** 80-120px on desktop.
- **One UI:** 16-20px screen margins, 12-16px gaps between cards; content starts below the large title area.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 4px 10px rgba(0,0,0,.2)` |
| Soft | `0 4px 6px rgba(0,0,0,.1)` |
| Swatch ring | `0 0 0 2px #FFFFFF` |
| Focus (on media) | `0 0 3px rgba(0,0,0,.75)` or white equivalent on dark |

- samsung.com is mostly flat; shadows appear on hover cards, swatch rings and floating sub-navs.
- Motion: product renders rotate or scale on scroll; carousels slide 400-600ms ease; hovers 200ms.
- One UI uses springy, physics-based motion and blur behind panels; keep transitions short and smooth.

## 8. Iconography & Imagery

- **Icons:** 24px outline icons with 1.5-2px strokes and rounded ends on the web.
- **One UI icons:** squircle app icons with simple glyphs and soft color fills; system icons are rounded and filled when active.
- **Product imagery:** high-quality renders on gray or color-matched backgrounds, often at an angle with soft reflection; lifestyle photos of devices in homes.
- **Galaxy AI:** gradient accents in blue and purple appear in AI feature marketing; keep them inside imagery, not chrome.

## 9. Voice & Microcopy

Clear, upbeat and feature-led. Short sentences, product names first, benefits second.

Sample strings read on samsung.com (US) today:

- "Experience a whole new Galaxy"
- "Buy Direct Get More"
- "Certified Re-Newed"
- "Find A Service Center", "Check Repair Status"
- Categories: "Galaxy Smartphone", "Galaxy Tab", "Galaxy Watch", "Galaxy Buds", "Galaxy Book"
- Buttons: "Buy now", "Learn more", "Continue"

## 10. Do's and Don'ts

**Do**

- Use black pill CTAs with bold 14px labels and 20px radius.
- Put products on light gray cards with plenty of space.
- Use Samsung Sharp Sans (or Manrope) bold for headlines and SamsungOne (or Inter) for text.
- Keep Samsung Blue for the logo and brand moments; use Action Blue for links.
- In One UI-style screens, put a large title on top and rounded cards below.

**Don't**

- Don't use Samsung Blue `#1428A0` as a button fill everywhere.
- Don't use the old ellipse logo.
- Don't use sharp corners or thin, light headlines.
- Don't crowd product shots with copy or badges.
- Don't use heavy drop shadows on every card.

## 11. Agent Prompt Guide

> Build this UI in the style of Samsung (samsung.com plus One UI). White page with light gray product cards (`#F4F4F4`, radius 20-24px). Headlines in `"SamsungSharpSans", Manrope, Arial, sans-serif` bold, 28-56px; body in `"SamsungOne", Inter, Arial, sans-serif` 16px, text black with secondary `#555555` and muted `#757575`. Primary CTAs are compact black pills: padding 9px 23px 10px, radius 20px, white 14px/700 labels, pressed opacity .7; secondary CTAs are black outline pills. Links are `#2189FF`, hover `#006BEA`. The black SAMSUNG wordmark sits in a 64px white header with category links and outline icons; the corporate blue `#1428A0` is only for the logo. For app screens, follow One UI: large 32px title in the top third, content in white 26px-radius grouped cards on `#F6F6F6`, pill switches in `#387AFF`, true-black dark mode. Product renders are the hero; sale prices in `#D62E2E`.

```css
:root {
  --brand-blue: #1428A0;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-link: #2189FF;
  --brand-link-hover: #006BEA;
  --brand-oneui-accent: #387AFF;
  --brand-text: #000000;
  --brand-text-secondary: #555555;
  --brand-muted: #757575;
  --brand-disabled: #8F8F8F;
  --brand-border: #DDDDDD;
  --brand-card: #F4F4F4;
  --brand-section: #F7F7F7;
  --brand-dark: #1C1C1C;
  --brand-sale: #D62E2E;
  --font-display: "SamsungSharpSans", "Manrope", Arial, sans-serif;
  --font-body: "SamsungOne", "Inter", Arial, sans-serif;
  --brand-radius-sm: 6px;
  --brand-radius-cta: 20px;
  --brand-radius-card: 24px;
  --brand-radius-oneui: 26px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 4px 10px rgba(0,0,0,.2);
  --brand-shadow-soft: 0 4px 6px rgba(0,0,0,.1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Samsung.

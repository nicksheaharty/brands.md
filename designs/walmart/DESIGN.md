---
name: Walmart
slug: walmart
url: https://walmart.com
category: Commerce
tagline: "True-blue retail: bright blue header, yellow Spark, pill buttons, big friendly prices."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: True Blue
    hex: "#0053E2"
    role: Brand blue, header, primary buttons, links
  - name: Spark Yellow
    hex: "#FFC220"
    role: Spark logo, highlights, deal accents
  - name: Bentonville Blue
    hex: "#001E60"
    role: Dark brand blue, headings on promos, category labels
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Text
    hex: "#2E2F32"
    role: Primary text, secondary button borders
  - name: Rollback Red
    hex: "#EA1100"
    role: Rollback and clearance flags, errors
  - name: Savings Green
    hex: "#2A8703"
    role: Now price on deals, success, in stock
  - name: Blue Hover
    hex: "#114AB6"
    role: Primary hover and focus
  - name: Blue Press
    hex: "#002E99"
    role: Primary pressed, bold blue text
  - name: Blue Wash
    hex: "#E9F1FE"
    role: Brand surface, selected rows
  - name: Grey 100
    hex: "#74767C"
    role: Secondary text, subtle borders
  - name: Grey 50
    hex: "#BABBBE"
    role: Disabled, tertiary borders
  - name: Separator
    hex: "#E3E4E5"
    role: Dividers
  - name: Surface Subtle
    hex: "#F8F8F8"
    role: Section backgrounds
  - name: Hover Grey
    hex: "#F1F1F2"
    role: Hover fills
fonts:
  display:
    family: "Everyday Sans"
    fallback: "DM Sans"
    weights: [400, 700]
  body:
    family: "Everyday Sans"
    fallback: "DM Sans"
    weights: [400, 700]
  mono:
    family: "Everyday Sans Mono"
    fallback: "DM Mono"
    weights: [400]
typeScale:
  - { role: Display Large, size: 42, weight: 700, lineHeight: 1.24, tracking: "0" }
  - { role: Display Small, size: 36, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Heading Large, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Heading Medium, size: 24, weight: 700, lineHeight: 1.5, tracking: "0" }
  - { role: Heading Small, size: 20, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 1000 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Elevation 100, value: "0 1px 2px 1px rgba(0,0,0,0.15), 0 -1px 2px 0 rgba(0,0,0,0.1)" }
  - { name: Elevation 200, value: "0 3px 5px 2px rgba(0,0,0,0.15), 0 -1px 3px 0 rgba(0,0,0,0.1)" }
  - { name: Elevation 300, value: "0 5px 10px 3px rgba(0,0,0,0.15), 0 -1px 4px 0 rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F8F8"
  text: "#2E2F32"
  muted: "#74767C"
  border: "#E3E4E5"
  accent: "#0053E2"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: pill
---

# Walmart

## 1. Visual Theme & Atmosphere

Walmart.com is a big, friendly, practical store. The 2025 identity sharpened the blue to "True Blue" `#0053E2`, kept the yellow Spark `#FFC220`, and moved type to the custom Everyday Sans. The site runs on Walmart's Living Design system (`--ld-*` tokens): white pages, a solid blue header, rounded pill buttons, square product tiles and bold prices.

What makes it recognisable:

- **Blue header bar.** A solid True Blue top bar with the white wordmark and yellow Spark, a big white pill search field and white icons for Reorder, Account and Cart (with the running cart total).
- **Spark.** Six rounded yellow petals radiating from a center. It appears in the logo, loading states and small highlights.
- **Pill buttons.** Primary actions ("Add", "Shop now", "Check out") are fully rounded, blue with white text. Secondary buttons are white with a dark 1px border.
- **Price-first product tiles.** Square photo, a large bold price with superscript cents, "Now" and "Was" pricing, small badges ("Rollback", "Best seller"), star rating, fulfillment lines ("Pickup today", "Delivery as soon as 2 hours").
- **Hero tiles.** Promotional banners are rounded 16px cards with photography, a headline, one line of copy and "Shop now".
- **Plain, warm neutrals.** Text is a soft charcoal `#2E2F32`, not black, and greys are cool and quiet.

Mood words: friendly, efficient, value, trustworthy, everyday.

## 2. Color Palette & Roles

Values below are read from walmart.com production CSS (`--ld-primitive-*` and `--ld-semantic-*` tokens).

| Name | Hex | Token | Role |
|---|---|---|---|
| True Blue | `#0053E2` | blue-100 | Header, primary fill, brand text, active borders |
| Blue Hover | `#114AB6` | blue-110 | Primary hover and focus |
| Blue Press | `#002E99` | blue-130 | Primary pressed, bold info text |
| Blue Deep | `#002185` | blue-140 | Text on subtle brand fill, hover |
| Bentonville Blue | `#001E60` | blue-160 | Bold brand text and borders, inverse overlay |
| Blue Wash | `#E9F1FE` | blue-10 | Brand surface, hover on activated |
| Blue Mist | `#F0F5FF` | blue-5 | Activated surface |
| Blue 20 | `#C9DCFD` | blue-20 | Pressed subtle, info inverse text |
| Spark Yellow | `#FFC220` | spark-100 | Spark, accent fill |
| Spark Wash | `#FEF6DE` | spark-10 | Subtle yellow fill |
| Text | `#2E2F32` | gray-160 | Primary text, default border |
| Grey 130 | `#515357` | gray-130 | Subtle borders, bold grey text |
| Grey 100 | `#74767C` | gray-100 | Secondary text, subtlest border |
| Grey 50 | `#BABBBE` | gray-50 | Disabled, tertiary button border |
| Separator | `#E3E4E5` | gray-20 | Dividers, pressed fill |
| Hover Grey | `#F1F1F2` | gray-10 | Hover fill |
| Surface Subtle | `#F8F8F8` | gray-5 | Section background |
| White | `#FFFFFF` | white | Background, surfaces |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Negative | `#EA1100` (bold `#A20C00`, subtle fill `#FDE9E8`) | Rollback flag, errors, destructive buttons (hover `#CE0F00`) |
| Positive | `#2A8703` (bold `#1D5F02`, fill `#EAF3E6`) | "Now" price on deals, in stock, success |
| Warning | `#995213` (bold `#662B0D`) on `#FEF6DE` | Low stock, delays |
| Info | `#0053E2` on `#E9F1FE` | Notices |
| Edited | `#63327E` on `#EFEBF2` | Changed or edited state |
| Magic (AI) | `#0053E2` → `#3D90EC` → `#79CDF6` | Gradient border/text for assistant features |

### Accents and dark mode

Accent families (teal `#00809E`, cyan `#0076B3`, pink `#CB2C90`, purple `#63327E`, orange `#C83C00`) each have a subtle fill (teal `#E1F3F8`, pink `#FCE9F5`) for tags. There is no dark theme; inverse surfaces use `#2E2F32` or `#001E60` with white text.

## 3. Typography

**Family:** Everyday Sans (Walmart's custom typeface, introduced with the 2025 identity), with Everyday Sans Mono for numeric and code needs. Older pages and components still fall back to **Bogle**, the previous brand font.

```css
font-family: EverydaySans, "Helvetica Neue", Arial, sans-serif;
```

**Licensing:** proprietary. Use **DM Sans** as the free fallback (similar friendly, open shapes) and **DM Mono** for mono.

**Weights:** two only: 400 (default) and 700 (alt and actions). `--ld-semantic-font-action-weight` is 700, so every button label is bold.

### Scale (from Living Design tokens; large screens / small screens)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display large | 42px / 32px | 700 or 400 | 52px / 40px |
| Display small | 36px / 28px | 700 or 400 | 48px / 36px |
| Heading large | 32px / 24px | 700 | 40px / 32px |
| Heading medium | 24px / 20px | 700 | 36px / 28px |
| Heading small | 20px / 18px | 700 | 28px / 24px |
| Body large | 18px | 400 (700 alt) | 24px |
| Body medium | 16px | 400 (700 alt) | 24px |
| Body small | 14px | 400 (700 alt) | 20px |
| Caption | 12px | 400 (700 alt) | 16px |

Tracking is 0 throughout.

### Rules

- Sentence case for headings and buttons: "Big savings, little surprises", "Shop now", "Add to cart".
- Prices: dollars large and bold, cents and "$" set as smaller superscripts (`$ 24 97`). Use `font-variant-numeric: tabular-nums` in lists.
- Deal prices show "Now $X" in green with "Was $Y" struck through in grey.
- Button labels always bold (700).

## 4. Logo & Brand Mark

The logo is the word **Walmart** in a bold, rounded sans followed by the **Spark**, six short yellow petals with round ends arranged around a center. The 2025 refresh tightened the wordmark letterforms and set it in True Blue.

- **Color versions:** True Blue wordmark with Spark Yellow Spark on white (primary); white wordmark with yellow Spark on True Blue (header); one-color white or blue for constrained use.
- **App icon:** yellow Spark centred on a True Blue square.
- **Clear space:** at least the height of the "W" on all sides.
- **Minimum size:** 80px wide for the full logo, 16px for the Spark alone.

Misuse:

- Do not recolor the Spark blue or the wordmark yellow.
- Do not rotate the Spark or change the number of petals.
- Do not use the pre-2025 lighter blue `#0071DC` with the new wordmark.
- Do not add an outline or shadow.

## 5. Components

### Buttons

Living Design button variants (radius `62.5rem`, a full pill):

| Variant | Background | Text | Border | Height |
|---|---|---|---|---|
| Primary | `#0053E2` | `#FFFFFF` 700 | none | 40px (medium), 48px (large), 32px (small) |
| Secondary | `#FFFFFF` | `#2E2F32` 700 | 1px `#2E2F32` | same |
| Tertiary | `#FFFFFF` | `#2E2F32` 700 | 1px `#BABBBE` | same |
| Transparent | transparent | `#2E2F32` 700 | none | same |
| Destructive | `#EA1100` | `#FFFFFF` 700 | none | same |
| On blue | transparent | `#FFFFFF` | none, white-10% hover | same |

States:

- Primary hover/focus `#114AB6`, pressed `#002E99`, disabled `#BABBBE` with white text.
- Secondary/tertiary hover `#F1F1F2`, pressed `#E3E4E5`, disabled text `#BABBBE`.
- Focus ring: 2px border at the interactive width (`0.125rem`) plus outline offset.

```css
.ld-button-primary {
  font: 700 16px/1 EverydaySans, "DM Sans", sans-serif;
  color: #fff;
  background: #0053E2;
  border: 0;
  border-radius: 62.5rem;
  height: 40px;
  padding: 0 24px;
}
.ld-button-primary:hover { background: #114AB6; }
.ld-button-primary:active { background: #002E99; }
```

### "Add" button (signature)

On product tiles, a compact blue pill "+ Add" (32px tall, 14px/700) sits under the price. After adding, it becomes a quantity stepper pill: minus, count, plus, in a white pill with a blue 1px border.

### Product tile (signature)

- No border or shadow at rest; square image on white with 8px radius, heart (save) icon top right.
- Badges above the price: "Rollback" (red text on light red, 4px radius; approximate), "Best seller" (blue), "Popular pick".
- Price block: "Now" in green when on sale, large bold price with superscript cents, "Was $Y" struck in grey, unit price in 12px grey.
- Title 14px/400 `#2E2F32`, three lines max.
- Rating: yellow-filled stars and count in 12px grey.
- Fulfillment: "Free shipping, arrives in 2 days" and "Pickup today" in 12px with small icons.

### Header (signature)

- Solid `#0053E2` bar, about 72px desktop (header details observed; sizes approximate). White wordmark and yellow Spark left.
- "Pickup or delivery?" location pill (white text, darker blue hover).
- Search: white pill, about 40px, placeholder "Search everything at Walmart online and in store", with a round dark blue search button (about `#001E60`, approximate) and white magnifier inside the right end.
- Right: "Reorder / My Items", "Sign In / Account", cart icon with a yellow count bubble and the cart total in small white text.
- Below: a white sub-nav row with "Departments" and "Services" menus and quick links.

### Inputs

- Text fields: 1px `#2E2F32` inset border (`--ld-semantic-color-field-border`), 4px radius, 48px tall, label above in 14px/700.
- Focus: 2px blue border. Error: red border with a red 12px message and icon.
- Checkboxes and radios fill True Blue when selected.

### Cards and banners

- Promo cards: 16px radius, photography with a headline, 14-16px body and a secondary "Shop now" pill; some use a solid `#001E60` or True Blue panel.
- Category bubbles: circular 96-120px images with a bold `#001E60` label beneath.
- Elevation 100-300 shadows for flyouts and floating cards.

### Tabs, chips and modals

Tabs: 16px/700 with a 4px `#0053E2` underline on the active one. Filter chips: 32px pills, 1px `#BABBBE` border, active `#E9F1FE` with a blue border. Dialogs: white, 16px radius, 24px padding, 20px/700 title, scrim `rgba(0,0,0,0.5)`; cart and filters slide in from the right.

## 6. Layout & Spacing

- **Spacing:** multiples of 4: 4, 8, 12, 16, 24, 32, 48, 64px.
- **Content width:** about 1440-1536px max with 16-24px side padding.
- **Product grids:** 6 columns on wide desktop, 4 on laptop, 2 on mobile; carousels for "Discover great brands" rows.
- **Hero area:** bento layout of 2-4 promo tiles of different sizes with 16px gaps.
- **Breakpoints:** small and large token sets ("b-s" and "b-l") swap heading sizes around 768-1024px.
- **Density:** medium-high, generous image space with compact text.

## 7. Depth, Elevation & Motion

Use the three Living Design elevation tokens from the frontmatter: 100 for hovered cards and chips, 200 for dropdowns and menus, 300 for modals and flyouts. Each pairs a 15% black drop shadow with a faint 10% upward shadow.

Motion is quick and functional: 150-250ms ease for hovers, panels and carousels; a soft ring pulse (`0 0 0 10px rgba(118,118,118,0.3)`) on some tap targets. No decorative animation.

## 8. Iconography & Imagery

- Icons: Living Design icons, 16/24/32px, simple line and solid glyphs with rounded ends, in `#2E2F32` or white on blue. Pictograms at 48-72px for services.
- Photography: bright, real-life, diverse families and homes; products shown on white for tiles. Seasonal banners use warm lifestyle photography with simple overlays.
- The Spark may be used as a small graphic accent, not as a pattern.

## 9. Voice & Microcopy

- Warm, plain, helpful and value-focused. Tagline: "Save Money. Live better."
- Buttons: "Add", "Add to cart", "Shop now", "Check out", "Sign in", "Get started", "View all".
- Fulfillment copy is specific: "Pickup today", "Delivery as soon as 2 hours", "Free shipping, arrives tomorrow".
- Headlines are short, sometimes playful: "Big savings, little surprises".

## 10. Do's and Don'ts

**Do**

- Use True Blue `#0053E2` for the header and primary pills, Spark Yellow only for the Spark and small highlights.
- Use full-pill buttons with bold labels.
- Lead product tiles with a big bold price and clear fulfillment info.
- Use charcoal `#2E2F32` for text instead of black.
- Use the Living Design elevation tokens for any shadow.

**Don't**

- Don't use the old `#0071DC` blue next to the 2025 logo.
- Don't use yellow for buttons or large backgrounds.
- Don't use square-cornered buttons.
- Don't use more than two type weights.
- Don't hide prices behind hover states.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Walmart.com. White page, text `#2E2F32`, secondary `#74767C`, dividers `#E3E4E5`, subtle sections `#F8F8F8`. Font: `EverydaySans, "DM Sans", "Helvetica Neue", Arial, sans-serif` with only weights 400 and 700. Header: solid True Blue `#0053E2` bar with a white "Walmart" wordmark and yellow `#FFC220` six-petal Spark, a white pill search field with a round `#001E60` search button, and white icons for Reorder, Account and Cart with a yellow count bubble. Primary buttons are full pills (`border-radius: 62.5rem`), True Blue with bold white text, 40px tall, hover `#114AB6`, pressed `#002E99`; secondary buttons are white with a 1px `#2E2F32` border. The hero is a bento of 16px-radius promo cards with photos and "Shop now". Product tiles have a square image, a heart icon, a "Rollback" badge in red `#EA1100`, a big bold price with superscript cents ("Now" in green `#2A8703`, "Was" struck in grey), a 3-line title, stars and "Pickup today" lines, and a small blue "+ Add" pill. Shadows only from the elevation tokens.

```css
:root {
  --brand-blue: #0053E2;
  --brand-blue-hover: #114AB6;
  --brand-blue-press: #002E99;
  --brand-blue-deep: #002185;
  --brand-blue-bold: #001E60;
  --brand-blue-wash: #E9F1FE;
  --brand-blue-mist: #F0F5FF;
  --brand-spark: #FFC220;
  --brand-spark-wash: #FEF6DE;
  --brand-text: #2E2F32;
  --brand-text-subtle: #515357;
  --brand-text-secondary: #74767C;
  --brand-disabled: #BABBBE;
  --brand-separator: #E3E4E5;
  --brand-hover: #F1F1F2;
  --brand-surface-subtle: #F8F8F8;
  --brand-bg: #FFFFFF;
  --brand-negative: #EA1100;
  --brand-negative-fill: #FDE9E8;
  --brand-positive: #2A8703;
  --brand-positive-fill: #EAF3E6;
  --brand-warning: #995213;
  --brand-font: EverydaySans, "DM Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-font-mono: EverydaySansMono, "DM Mono", "Courier New", monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-pill: 62.5rem;
  --brand-elevation-100: 0 1px 2px 1px rgba(0,0,0,0.15), 0 -1px 2px 0 rgba(0,0,0,0.1);
  --brand-elevation-200: 0 3px 5px 2px rgba(0,0,0,0.15), 0 -1px 3px 0 rgba(0,0,0,0.1);
  --brand-elevation-300: 0 5px 10px 3px rgba(0,0,0,0.15), 0 -1px 4px 0 rgba(0,0,0,0.1);
}
```

---

Values are observed from walmart.com production CSS (Living Design tokens); this file is an unofficial reference and is not affiliated with or endorsed by Walmart.

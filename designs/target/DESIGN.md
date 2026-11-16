---
name: Target
slug: target
url: https://target.com
category: Commerce
tagline: "Bullseye red on clean white, bold Helvetica, pill buttons and bright deal-driven grids."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Target Red
    hex: "#CC0000"
    role: Bullseye, brand background, primary buttons, brand text
  - name: Red Hover
    hex: "#AA0000"
    role: Brand button hover
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Text
    hex: "#333333"
    role: Base text (gray 700)
  - name: Text Subdued
    hex: "#666666"
    role: Secondary text, placeholders (gray 500)
  - name: Gray 050
    hex: "#F7F7F7"
    role: Subdued page background, hover fill
  - name: Gray 100
    hex: "#E8E8E8"
    role: Active fill, inactive background
  - name: Gray 200
    hex: "#D6D6D6"
    role: Subdued borders, disabled
  - name: Gray 400
    hex: "#888888"
    role: Base input and control borders
  - name: Red 050
    hex: "#FEE9E7"
    role: Brand subdued fill, sale chips
  - name: Info Blue
    hex: "#2758B9"
    role: Info text and links in messaging
  - name: Success Green
    hex: "#008300"
    role: In stock, success
  - name: Warning Orange
    hex: "#B85300"
    role: Low stock, warnings
  - name: Focus Ink
    hex: "#151515"
    role: Focus ring (gray 950)
  - name: Circle Gold
    hex: "#FCAD19"
    role: Ratings stars and highlight accents
fonts:
  display:
    family: "Helvetica for Target"
    fallback: "Arimo"
    weights: [700, 900]
  body:
    family: "Helvetica for Target"
    fallback: "Arimo"
    weights: [400, 700]
typeScale:
  - { role: Display XL, size: 56, weight: 700, lineHeight: 1.0, tracking: "0" }
  - { role: Display M, size: 36, weight: 700, lineHeight: 1.0, tracking: "0" }
  - { role: Headline L, size: 28, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Headline M, size: 24, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Headline S, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 80]
shadows:
  - { name: Asset, value: "0px 1px 4px 0px rgba(33,33,33,0.20)" }
  - { name: Card, value: "0px 2px 8px 0px rgba(33,33,33,0.18)" }
  - { name: Menu, value: "0px 4px 12px 0px rgba(33,33,33,0.16)" }
  - { name: Overlay, value: "0px 0px 20px 0px rgba(33,33,33,0.14)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#333333"
  muted: "#666666"
  border: "#D6D6D6"
  accent: "#CC0000"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: pill
---

# Target

## 1. Visual Theme & Atmosphere

Target's design is bright, clean and confident: a red bullseye, lots of white space, bold Helvetica headlines and product photography that does the selling. It feels more like a well-lit department store than a warehouse. Red is the brand's signature but is used with discipline: a red utility bar, red primary buttons and red deal callouts, with everything else in white and soft greys.

What makes it recognisable:

- **The bullseye.** A red ring around a red dot, used alone as the logo. No wordmark is needed in most placements.
- **One red.** `#CC0000` is the brand red in the Target design tokens (`--color-background-brand-base`).
- **Helvetica for Target.** A custom Helvetica cut used bold for headlines and deal numbers, regular for body.
- **Pill buttons and filter chips.** The button radius token is the max value (999px).
- **Big deal numbers.** Promos lead with huge numerals: "40" with "percent off" set small next to it.
- **Rounded product imagery.** Product images sit in 8px radius frames; cards use 16px.
- **Seasonal skins.** The red utility header picks up seasonal patterns (holiday, back to school) while staying red.

Mood words: bright, friendly, polished, everyday, upbeat.

## 2. Color Palette & Roles

Values read from target.com design tokens on 2026-11-16.

| Name | Token | Hex | Role |
|---|---|---|---|
| Target Red | red-600 | `#CC0000` | Brand background, brand buttons, brand text and borders |
| Red 700 | red-700 | `#AA0000` | Brand hover, brand contrast |
| Red 800 | red-800 | `#840000` | Brand pressed |
| Red 500 | red-500 | `#E91F0C` | Bright red accents |
| Red 050 | red-050 | `#FEE9E7` | Brand subdued fill |
| Red 100 | red-100 | `#FCC9C5` | Brand subdued hover |
| White | white | `#FFFFFF` | Page base, cards |
| Gray 050 | gray-050 | `#F7F7F7` | Subdued page, base hover |
| Gray 100 | gray-100 | `#E8E8E8` | Base active, inactive fill |
| Gray 200 | gray-200 | `#D6D6D6` | Subdued border, disabled fill |
| Gray 300 | gray-300 | `#BBBBBB` | Disabled contrast |
| Gray 400 | gray-400 | `#888888` | Base border |
| Gray 500 | gray-500 | `#666666` | Subdued text, placeholder |
| Gray 600 | gray-600 | `#454545` | Border active |
| Gray 700 | gray-700 | `#333333` | Base text, inverse background |
| Gray 950 | gray-950 | `#151515` | Focus border |

### Semantic colors

| State | Base | Hover | Subdued fill |
|---|---|---|---|
| Info | `#2758B9` | `#1E448F` | `#EEF3FB` |
| Success | `#008300` | `#006600` | `#ECF9EC` |
| Warning | `#B85300` | (orange 700) | `#FFF4EB` |
| Brand | `#CC0000` | `#AA0000` | `#FEE9E7` |

Other observed accents: star rating gold `#FCAD19`, Target Circle purple `#623D94` in some promos.

### Overlays

- Modal overlay: gray 800 at 60%.
- Loading and unavailable states: white at 60% over the content.
- Skeletons: gray 200 to gray 100 at 80% shimmer.

## 3. Typography

- **Family:** "Helvetica for Target" (proprietary). Stack from the tokens:

```css
--typography-font-family-helvetica-for-target: "Helvetica for Target", HelveticaForTarget, Targetica,
  "HelveticaNeue for Target", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

- **Google Fonts fallback:** Arimo (metric-compatible with Helvetica/Arial). Inter is acceptable if Arimo feels too plain.
- **Weights:** light 300, regular 400, bold 700, heavy 900.
- **Line heights:** display 1.0, headline 1.3, body 1.4.

### Scale (desktop values; mobile steps down one size)

| Token | Size | Weight | Line height |
|---|---|---|---|
| display-xl | 68px (56px on smaller screens) | 700 | 1.0 |
| display-lg | 56px (46px) | 700 | 1.0 |
| display-md | 46px (36px) | 700 | 1.0 |
| display-sm | 36px (32px) | 700 | 1.0 |
| headline-xl | 28px+ | 700 | 1.3 |
| headline-lg | 28px (24px) | 700 | 1.3 |
| headline-md | 24px (22px) | 700 | 1.3 |
| headline-sm | 22px (20px) | 700 | 1.3 |
| body-lg | 18px | 400 / 700 | 1.4 |
| body-md | 16px | 400 / 700 | 1.4 |
| body-sm | 14px | 400 / 700 | 1.4 |
| caption | 13px | 400 / 700 | 1.4 |

### Rules

- Headlines bold, never light, sentence case.
- Deal numerals are huge and bold, with "percent off" or "% off" set small beside them.
- Prices bold: `$24.99`; sale prices in red with the regular price in grey and "reg" before it.
- Use the trademark marks Target uses for programs: "Target Circle™".

## 4. Logo & Brand Mark

The bullseye: a solid red dot centred in a red ring, separated by a white ring of roughly equal width. In the site asset the outer ring has radius 11 and inner radius 7.33, and the dot has radius 3.67 on a 24-unit grid.

- **Primary:** red `#CC0000` bullseye on white.
- **Reversed:** white bullseye on red (app icon, utility header).
- **Wordmark:** "target" in lowercase bold Helvetica, used beside the bullseye only in some contexts.
- **Clear space:** at least the width of the outer ring on all sides.
- **Minimum size:** 16px.

Do not:

- Change the ring proportions or add more rings.
- Use any red other than Target Red.
- Add gradients, shadows or outlines.
- Place the red bullseye on busy red photography.

## 5. Components

### Buttons

```css
.btn {
  font: 700 16px/1.4 "Helvetica for Target", Arimo, Helvetica, sans-serif;
  height: 44px;
  padding: 0 24px;
  border-radius: 999px;            /* --radius-button */
  transition: background-color .2s ease-out;
}
.btn--brand { background: #CC0000; color: #fff; }
.btn--brand:hover { background: #AA0000; }
.btn--brand:active { background: #840000; }
.btn--secondary { background: #fff; color: #333; border: 1px solid #888; }
.btn--secondary:hover { background: #F7F7F7; }
.btn--inverse { background: #333; color: #F7F7F7; }
.btn:focus-visible { outline: 2px solid #151515; outline-offset: 2px; }
.btn:disabled { background: #D6D6D6; color: #666; }
```

- **Add to cart:** red pill, full width on product pages; small "Add to cart" pill on tiles.
- **Pickup / Delivery / Shipping selectors:** tiles with 8px radius and a 2px dark border when selected.

### Filter chips

- 999px radius, 1px `#888888` border, 14px text, 32-36px tall; selected chip is dark `#333333` fill with white text.

### Inputs

- 8px radius (`--radius-input`), 1px `#888888` border, 44-48px tall, focus border `#151515`.
- Search: large rounded field in the header with a search icon and "What can we help you find?" style placeholder.

### Product tile (signature)

- Image in an 8px-radius frame (`--radius-asset`) on `#F7F7F7` or white.
- Sponsored label, brand name, product title (2 lines, 14px), rating stars `#FCAD19` with count, price bold, then fulfilment line ("Pickup today", "Delivery as soon as...").
- "Add to cart" pill.
- Deal badge in red text or red-050 chip.

### Deal tiles

- Big bold numeral (46-68px) with "% off" small, category name below, colourful or photographic background, 16px radius (`--radius-card`).

### Cards

- 16px radius, white, `--elevation-card` shadow `0 2px 8px rgba(33,33,33,0.18)` or a 1px `#D6D6D6` ring.

### Navigation

- **Utility header:** 50px tall, Target Red background, white links (Target Circle™, Target Circle™ Card, Target Circle 360™, Registry & Wish List, Weekly Ad, Find Stores). Seasonal patterns may tile across it.
- **Primary header:** white, sticky, `box-shadow: var(--elevation-navigation)`; bullseye at left, "Categories", "Deals", "Pickup & delivery" menus, search field, account and cart icons.
- **Mega menu:** white panel, category list with chevrons.

### Messaging and badges

- Messaging banners: 12px radius (`--radius-messaging`), info/success/warning subdued fills with a coloured icon.
- Labels: 8px radius (`--radius-label`), 13px bold.

### Modals

- 24px radius (`--radius-modal`), white, overlay gray 800 at 60%, close button top right.

### Avatars and progress

- Circles (`--radius-circle: 999px`); progress bars pill-shaped.

## 6. Layout & Spacing

- Space tokens: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 80px.
- Breakpoints from the CSS: `568px`, `768px`, `992px`, `1200px`, `1464px`.
- Content container about 1440px max with 16px gutters on mobile, 24-32px on desktop.
- Homepage: stacked carousels of deal tiles and product tiles, each with a heading and "Shop all".
- Product grid: 2 columns mobile, 3 tablet, 4-5 desktop, 16-24px gaps.
- Density: medium-high but with breathing room around headings.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| elevation-asset / label | `0px 1px 4px rgba(33,33,33,0.20)` | Images, labels |
| elevation-card / button / navigation | `0px 2px 8px rgba(33,33,33,0.18)` | Cards, sticky header |
| elevation-menu / messaging | `0px 4px 12px rgba(33,33,33,0.16)` | Menus, toasts |
| elevation-overlay | `0px 0px 20px rgba(33,33,33,0.14)` | Modals, sheets |

Shadow colour is gray 800 (`#212121`) at the stated opacity.

Motion:

- Buttons and hovers: `.2s ease-out`.
- Fades: `opacity .35s ease-in-out`.
- Carousels slide; images fade in with `opacity .3s`.
- Header uses a view transition when it changes state.

## 8. Iconography & Imagery

- **Icons:** Target's own set served as SVG sprites (`/icons-illustrations/v2/`), 24px grid, solid and rounded, single colour. Chevrons for menus, bullseye for Target Circle.
- **Product photography:** clean packshots on white or soft grey, plus styled room scenes for home goods.
- **Lifestyle:** diverse people, bright natural light, colourful sets, often with a red element in frame.
- **Deal art:** flat colour backgrounds with cut-out products and big numerals.

## 9. Voice & Microcopy

Tone: upbeat, friendly, concise. "Expect More. Pay Less." is the long-running tagline in the page title.

- Sentence case in UI.
- Deals stated simply: "40% off pajamas for all".
- Service language focuses on convenience: pickup, drive up, same day delivery.

Sample strings:

- "Expect More. Pay Less."
- "Deals that bring the joy"
- "Shop all"
- "Add to cart"
- "Pickup & delivery"
- "Find Stores"
- "Weekly Ad"
- "Deal of the Day"
- "We'll match the price if it goes lower"

## 10. Do's and Don'ts

**Do**

- Use `#CC0000` for brand moments and primary actions, white everywhere else.
- Make buttons and chips pills; cards 16px; images 8px.
- Use bold Helvetica for headlines and huge bold numerals for deals.
- Use the gray ramp from the tokens for text and borders.
- Show fulfilment info (pickup, delivery) on product tiles.

**Don't**

- Don't use more than one red, or red for large text blocks.
- Don't use light-weight headlines.
- Don't add gradients to the bullseye or buttons.
- Don't use square buttons.
- Don't crowd tiles without images; product photos lead.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Target.com. White page, text `#333333`, subdued `#666666`, borders `#888888` (controls) and `#D6D6D6` (subtle), subdued fill `#F7F7F7`. Brand red `#CC0000` (hover `#AA0000`, pressed `#840000`, subdued `#FEE9E7`) for the bullseye logo, the 50px utility bar at the top, primary buttons and sale prices. Font "Helvetica for Target", fallback Arimo then Helvetica; headlines bold 700 with line-height 1.3, display numbers 46-68px bold line-height 1.0, body 16px/1.4, captions 13px. Buttons are pills (`border-radius: 999px`), 44px tall, bold 16px; secondary is white with a 1px `#888888` border. Cards 16px radius with `0 2px 8px rgba(33,33,33,0.18)`; images 8px radius; inputs 8px; modals 24px. Sticky white primary header with bullseye, Categories / Deals / Pickup & delivery, search and cart. Product tiles show image, title, star rating (`#FCAD19`), bold price, fulfilment line and an "Add to cart" pill. Deal tiles show a huge numeral with small "% off". Info `#2758B9`, success `#008300`, warning `#B85300`, focus outline `#151515`. Transitions `.2s ease-out`.

```css
:root {
  --target-red: #CC0000;
  --target-red-hover: #AA0000;
  --target-red-active: #840000;
  --target-red-subdued: #FEE9E7;
  --target-white: #FFFFFF;
  --target-gray-050: #F7F7F7;
  --target-gray-100: #E8E8E8;
  --target-gray-200: #D6D6D6;
  --target-gray-400: #888888;
  --target-gray-500: #666666;
  --target-gray-700: #333333;
  --target-gray-950: #151515;
  --target-info: #2758B9;
  --target-success: #008300;
  --target-warning: #B85300;
  --target-star: #FCAD19;
  --target-font: "Helvetica for Target", Arimo, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --target-radius-asset: 8px;
  --target-radius-input: 8px;
  --target-radius-messaging: 12px;
  --target-radius-card: 16px;
  --target-radius-modal: 24px;
  --target-radius-button: 999px;
  --target-elevation-asset: 0px 1px 4px rgba(33,33,33,0.20);
  --target-elevation-card: 0px 2px 8px rgba(33,33,33,0.18);
  --target-elevation-menu: 0px 4px 12px rgba(33,33,33,0.16);
  --target-elevation-overlay: 0px 0px 20px rgba(33,33,33,0.14);
  --target-lh-display: 1;
  --target-lh-headline: 1.3;
  --target-lh-body: 1.4;
}
```

---

Values are observed from the public website and app; this file is an unofficial reference and is not affiliated with or endorsed by Target Corporation.

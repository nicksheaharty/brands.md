---
name: Capital One
slug: capital-one
url: https://capitalone.com
category: Banking
tagline: "Calm navy-and-white banking: Atlantic blue, a red swoosh and card art up front."
updated: 2026-11-16
appStoreId: 407558537
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Atlantic
    hex: "#013D5B"
    role: Brand navy, logo wordmark, headers, brand backgrounds
  - name: Heritage Red
    hex: "#CC2427"
    role: Logo swoosh, sparing brand accent
  - name: Interactive Blue
    hex: "#0276B1"
    role: Primary buttons and text links
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Midnight
    hex: "#00132B"
    role: Darkest brand background, footer
  - name: Ink
    hex: "#141414"
    role: Primary text
  - name: Link Hover
    hex: "#026597"
    role: Button and link hover
  - name: Action Green
    hex: "#25810E"
    role: Apply and confirm buttons
  - name: Pacific
    hex: "#A6CBD6"
    role: Soft blue accent, illustrations
  - name: Surf
    hex: "#D6E8EA"
    role: Light blue-green section background
  - name: Oat
    hex: "#F7F3EB"
    role: Warm section background
  - name: Linen
    hex: "#EBE6DD"
    role: Warm dividers and panels
  - name: Grey 700
    hex: "#696969"
    role: Secondary text, regressive buttons
  - name: Grey 500
    hex: "#7D7D7D"
    role: Captions, legal text
  - name: Grey 200
    hex: "#D4D4D4"
    role: Borders, dividers
  - name: Grey 50
    hex: "#F4F4F4"
    role: Subtle backgrounds
fonts:
  display:
    family: "Optimist"
    fallback: "Nunito Sans"
    weights: [300, 600]
  body:
    family: "Optimist"
    fallback: "Nunito Sans"
    weights: [400, 600]
typeScale:
  - { role: Hero, size: 64, weight: 300, lineHeight: 1.1, tracking: "0" }
  - { role: H1, size: 36, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: H2, size: 32, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: H3, size: 24, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Legal, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 4, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 4px rgba(0,0,0,0.2)" }
  - { name: Card Hover, value: "0 2px 8px rgba(0,0,0,0.2)" }
  - { name: Overlay, value: "0 4px 16px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#141414"
  muted: "#696969"
  border: "#D4D4D4"
  accent: "#0276B1"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Capital One

## 1. Visual Theme & Atmosphere

Capital One's website is calm, open and practical. It is a bank site that wants to feel approachable: lots of white, deep navy headlines, soft blue and oat-colored bands, and product imagery built around physical credit cards shown at a slight angle. The red swoosh in the logo is the only bright color, and it is used almost nowhere else.

What makes it recognisable:

- **Atlantic navy.** The brand blue `#013D5B` is a deep, slightly green-leaning navy. It colors the wordmark, headlines and dark bands.
- **Heritage Red swoosh.** The arc over "Capital One" is `#CC2427`. Keep red for the logo and very small accents.
- **Interactive blue.** Buttons and links are a clearer blue `#0276B1` (hover `#026597`), separate from the brand navy.
- **Card art as hero.** Credit cards (Venture X, Quicksilver, Savor) float in heroes and tiles, often slightly rotated with a soft shadow.
- **Light-weight display type.** Headlines in Optimist at a light weight (300) and large sizes; body at 16px regular.
- **Soft natural palette.** Secondary brand colors are muted: Surf, Sky, Pacific blues, Pistachio and Prairie greens, Oat and Linen neutrals.
- **Sign-in panel.** The home page puts a "Secure Sign In" box (username, password, "Remember me") right in the hero area.

Mood words: trustworthy, friendly, clear, calm, modern.

## 2. Color Palette & Roles

Values are read from capitalone.com CSS (Gravity design system, `--gds-*` tokens and `grv-shr-lib-*` components).

| Name | Hex | Token / role |
|---|---|---|
| Atlantic | `#013D5B` | `--gds-color-brand-atlantic`, wordmark, headings, brand backgrounds |
| Midnight | `#00132B` | `--gds-color-brand-midnight`, darkest bands, footer |
| Heritage Red | `#CC2427` | `--gds-color-brand-heritage-red`, swoosh |
| Interactive Blue | `#0276B1` | Primary ("progressive") button, text links |
| Link Hover | `#026597` | Button and link hover |
| GDS Interactive | `#0070A8` | `--gds` interactive high emphasis (hsl 200 100% 33%) |
| Steel Blue | `#255F82` | Focus borders, secondary navy text |
| Action Green | `#25810E` | "Action" button (apply, confirm), hover `#1E6A0B` |
| Pacific | `#A6CBD6` | `--gds-color-brand-pacific` |
| Surf | `#D6E8EA` | `--gds-color-brand-surf` |
| Sky | `#C0EAF2` | `--gds-color-brand-sky` |
| Pistachio | `#DAE8D8` | `--gds-color-brand-pistachio` |
| Prairie | `#ACBAA3` | `--gds-color-brand-prairie` |
| Fern | `#7A9A01` | `--gds-color-brand-fern` |
| Parakeet | `#E1E000` | `--gds-color-brand-parakeet` |
| Brick | `#BF5547` | `--gds-color-brand-brick` |
| Linen | `#EBE6DD` | `--gds-color-brand-linen` |
| Oat | `#F7F3EB` | `--gds-color-brand-oat` |
| Ink | `#141414` | Primary text, card text |
| Grey 700 | `#696969` | Secondary text, "regressive" button fill |
| Grey 500 | `#7D7D7D` | Captions, footnotes |
| Grey 200 | `#D4D4D4` | Borders |
| Grey 50 | `#F4F4F4` | Subtle background |
| White | `#FFFFFF` | Page |

### Semantic colors (Gravity, light theme)

| State | Approx. hex | Source |
|---|---|---|
| Critical | `#CC2427` text, `#FFF0F0` fill | hsl(359 70% 47%), hsl(0 100% 97%) |
| Favorable | `#0A7D07` text, `#E7FBE3` fill | hsl(108 88% 26%), hsl(108 80% 94%) |
| Informational | `#0070A8` text, `#EBF7FF` fill | hsl(200 100% 33%), hsl(201 100% 96%) |
| Visited link | `#8A3FD6` | hsl(270 61% 54%) |
| Inactive | `#BFBFBF` | hsl(0 0% 75%) |

### Dark mode

Gravity ships a dark token set (base `hsl(0 0% 12%)` ≈ `#1F1F1F`, raised `#292929`, interactive `#40A9E8`), mainly for the app and signed-in experiences. The public site is light with navy bands; a warm theme (base `hsl(36 33% 97%)`) is used on some content pages.

## 3. Typography

**Family:** Optimist, Capital One's custom sans (declared `font-family: Optimist, "Helvetica Neue", Helvetica, Arial, sans-serif`). A serif, PremiumSerif (variable, with italic), appears on premium card and editorial pages.

**Licensing:** proprietary. Use **Nunito Sans** as the free fallback for Optimist and **Source Serif 4** for the serif.

```css
font-family: Optimist, "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Scale (desktop, from GDS size tokens and observed usage)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 64px | 300 | 1.1 | 0 |
| H1 | 36px | 300 | 1.2 | 0 |
| H2 | 32px | 300 | 1.25 | 0 |
| H3 | 24-28px | 600 | 1.3 | 0 |
| Lead | 20px | 400 | 1.4 | 0 |
| Button | 20px (16px compact) | 400 (600 compact) | 48px / 32px | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small | 14px | 400 | 1.45 | 0 |
| Eyebrow | 14px | 600, uppercase | 1.3 | 0.04em |
| Legal | 12px | 400 | 1.4 | 0 |

### Rules

- Sentence case for headlines and buttons ("Find the right card for you", "Get started").
- Section eyebrows are uppercase 14px/600 in navy or grey ("FIND THE RIGHT CARD", "DIGITAL TOOLS BUILT FOR EASE").
- Large headlines use light (300) weight; never bold a big headline.
- Rates and rewards are written plainly ("2X miles", "no fees or minimums") with footnote markers linking to legal text.

## 4. Logo & Brand Mark

The logo is the words **Capital One** set in a slanted, italic sans in Atlantic navy, with a long red swoosh arcing from the left over the wordmark and down past the "e". "Capital" and "One" are joined visually, and "One" has a looser, script-like form.

- **Color versions:** navy wordmark with red swoosh on white (primary); white wordmark with red swoosh on navy; all-white on photography or dark.
- **Clear space:** at least the height of the "C" around the full lockup including the swoosh.
- **Minimum size:** 90px wide on screen.
- **App icon:** the lockup in white with the red swoosh on a navy square.

Misuse:

- Do not separate the swoosh from the wordmark.
- Do not recolor the swoosh blue or the wordmark red.
- Do not straighten, skew further or outline the wordmark.
- Do not put the navy logo on a busy or dark photo; use the white version.

## 5. Components

### Buttons (Gravity "grv-shr-lib-button")

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Progressive (primary) | `#0276B1` | `#FFFFFF` 20px/400 | none | 4px | 48px |
| Action (apply, confirm) | `#25810E` | `#FFFFFF` | none | 4px | 48px |
| Regressive (back, cancel) | `#696969` | `#FFFFFF` | none | 4px | 48px |
| Ghost (on dark) | transparent | `#FFFFFF` | 2px `#FFFFFF` | 4px | 48px |
| Compact | same fills | 16px/600 | | 2px | 32px |
| Text directional | transparent | `#0276B1` 16px with right arrow | none | 0 | auto |

States:

- Hover: progressive `#026597`, action `#1E6A0B`, ghost fills white with `#141414` text, text links underline and darken to `#026597`.
- Focus: `box-shadow: inset 0 0 0 2px #255F82` or a 2px outline in `#0276B1`.
- Loading: a 16px white spinner (`.66s` rotation) replaces the label.
- Buttons are full width on mobile (`min-width: 100%`), min 88px on desktop.

```css
.grv-button-progressive {
  font: 400 20px/48px Optimist, "Nunito Sans", sans-serif;
  color: #fff;
  background: #0276B1;
  border: 0;
  border-radius: 4px;
  height: 48px;
  padding: 0 16px;
  min-width: 88px;
}
.grv-button-progressive:hover { background: #026597; }
```

### Cards

- Gravity card: white, 4px radius, no border, shadow `0 1px 4px rgba(0,0,0,0.2)`, hover `0 2px 4px rgba(0,0,0,0.2)`, min width 208px.
- Optional color bar: `border-top: 8px solid #013D5B`.
- Media: 168px tall image with the top corners rounded.
- Product tiles: card art image, 24px/600 title, two-line description, then a text-directional link ("Compare credit cards >").

### Credit card art (signature)

Physical cards are the hero imagery: rendered at real proportions (1.586:1), 12-16px corner radius, slight rotation (about -8deg to 8deg), shadow `0 4px 16px rgba(0,0,0,0.2)`, often stacked or fanned in twos and threes on a Surf, Sky or Oat background.

### Sign-in panel (signature)

White box at the top of the home page: "Secure Sign In" title, Username and Password fields with labels above, "Remember me" checkbox with helper text, a full-width progressive "Sign in" button, and links "Forgot username or password?" and "Set up online access" below in `#0276B1`.

### Inputs

- Height 48px, 4px radius, 1px `#696969` border (`inset 0 0 0 1px #696969`), 16px text, label 14px/600 above.
- Focus: `inset 0 0 0 2px #0276B1`.
- Error: `inset 0 0 0 2px #CC2427`, message "Please enter required information" in 14px red.

### Navigation

- White header, about 72px: logo left; "Credit Cards", "Checking & Savings", "Auto", "Business", "Commercial", "Benefits & Tools" at 16px; right side "Search", "Help Center", "Locations" and a "Sign In" button.
- Dropdown menus: white panel, Overlay shadow, columns of links with short descriptions.
- Mobile: hamburger with full-height drawer, accordion sections.

### Tiles and tabs

Topic tabs ("Meet Capital One", "Financial wellness", "Built-in benefits") as text tabs with a 4px navy underline on the active one. Feature tiles in a row: icon or small illustration, 20px/600 title, 16px body, text link.

### Modals

White, 4px radius on legacy dialogs and up to 12-16px on newer ones (`--gds-corner-radius-large` 12px, `x-large` 16px), shadow `0 4px 16px rgba(0,0,0,0.2)`, scrim `rgba(0,0,0,0.4)`. Buttons right-aligned, progressive plus a text cancel.

## 6. Layout & Spacing

- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 64px. Section padding 48-64px vertical on desktop.
- **Content width:** about 1200px centred, 12-column grid, 24px gutters (16px on mobile).
- **Bands:** alternate white sections with full-width Surf, Oat or navy bands.
- **Breakpoints:** roughly 600, 1024, 1440px.
- **Density:** medium; one message per band, three or four tiles per row.

## 7. Depth, Elevation & Motion

- Card: `0 1px 4px rgba(0,0,0,0.2)` at rest, `0 2px 4px` to `0 2px 8px rgba(0,0,0,0.2)` on hover.
- Overlay: `0 4px 16px rgba(0,0,0,0.2)` for menus, modals and card art.
- Very large hero numbers and xxlarge headings use extra-light weights (100-300) instead of shadows or color for emphasis.

Motion is quiet: 150-250ms ease for hovers and menus, carousels slide, the loading spinner rotates at .66s with ease-in-out. Nothing bounces.

## 8. Iconography & Imagery

- Icons: simple 2px line icons with rounded caps in navy or interactive blue, 24-32px, often inside a soft circular tint.
- Photography: real people in everyday moments (cafés, cars, travel), warm light, often cropped beside a card render. Capital One Café and branch photos for local content.
- Illustrations: flat, muted shapes in the secondary palette (Pacific, Pistachio, Oat) with navy line work.

## 9. Voice & Microcopy

- Plain, reassuring, benefit-led. No jargon where a simple word works.
- Buttons: "Sign in", "Get started", "Check My Eligibility", "Explore Banking", "Compare credit cards", "Start Shopping".
- Headlines: "Find the right card for you", "Bank with confidence", "Take charge of your credit".
- Mentions of fees and rates always come with footnotes and legal text; do not invent numbers.

## 10. Do's and Don'ts

**Do**

- Use Atlantic `#013D5B` for brand and headlines, `#0276B1` for interactive elements.
- Keep red for the swoosh and critical states only.
- Show credit card art as the main product image.
- Use light-weight large headlines and 16px regular body.
- Use 4px radius and the soft card shadow.

**Don't**

- Don't use red buttons or red headlines.
- Don't use the brand navy for links; links are the brighter interactive blue.
- Don't use heavy shadows or glossy gradients on cards.
- Don't fill sections with saturated colors; use Surf, Sky, Oat and Linen.
- Don't separate or redraw the swoosh.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Capital One's website. White page, text `#141414`, secondary `#696969`, borders `#D4D4D4`, subtle background `#F4F4F4`. Brand navy Atlantic `#013D5B` for headlines and dark bands, Midnight `#00132B` for the footer, Heritage Red `#CC2427` only in the logo swoosh. Font: `Optimist, "Nunito Sans", "Helvetica Neue", Arial, sans-serif`; headlines large and light (300), 14px/600 uppercase eyebrows, 16px body. White 72px header with the navy-and-red logo, product nav links and a "Sign In" button. Primary buttons are `#0276B1` with white 20px/400 text, 4px radius, 48px tall, hover `#026597`; confirm buttons green `#25810E`; text links `#0276B1` with a right arrow. Hero: a headline plus a fanned pair of credit card renders (12px radius, slight rotation, `0 4px 16px rgba(0,0,0,0.2)`) on a soft Surf `#D6E8EA` band, with a white "Secure Sign In" panel beside it. Below, rows of white cards (4px radius, `0 1px 4px rgba(0,0,0,0.2)`) and warm Oat `#F7F3EB` bands. Calm, clear and trustworthy.

```css
:root {
  --brand-atlantic: #013D5B;
  --brand-midnight: #00132B;
  --brand-heritage-red: #CC2427;
  --brand-interactive: #0276B1;
  --brand-interactive-hover: #026597;
  --brand-interactive-gds: #0070A8;
  --brand-steel: #255F82;
  --brand-action: #25810E;
  --brand-action-hover: #1E6A0B;
  --brand-pacific: #A6CBD6;
  --brand-surf: #D6E8EA;
  --brand-sky: #C0EAF2;
  --brand-pistachio: #DAE8D8;
  --brand-prairie: #ACBAA3;
  --brand-linen: #EBE6DD;
  --brand-oat: #F7F3EB;
  --brand-text: #141414;
  --brand-text-secondary: #696969;
  --brand-text-muted: #7D7D7D;
  --brand-border: #D4D4D4;
  --brand-surface: #F4F4F4;
  --brand-bg: #FFFFFF;
  --brand-font: Optimist, "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-serif: PremiumSerif, "Source Serif 4", Georgia, serif;
  --brand-radius-tiny: 2px;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-shadow-card: 0 1px 4px rgba(0,0,0,0.2);
  --brand-shadow-hover: 0 2px 8px rgba(0,0,0,0.2);
  --brand-shadow-overlay: 0 4px 16px rgba(0,0,0,0.2);
}
```

---

Values are observed from capitalone.com production CSS (Gravity design system); this file is an unofficial reference and is not affiliated with or endorsed by Capital One.

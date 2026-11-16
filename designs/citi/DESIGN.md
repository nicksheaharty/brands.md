---
name: Citi
slug: citi
url: https://citi.com
category: Banking
tagline: "Citi blue with a red arc, Interstate type, navy hero bands and 8px-radius blue buttons."
updated: 2026-11-16
appStoreId: 301724680
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Citi Logo Blue
    hex: "#255BE3"
    role: 2023 logo letters, AI gradient end, brand moments
  - name: Arc Red
    hex: "#FF3C28"
    role: Logo arc only
  - name: Citi Blue
    hex: "#056DAE"
    role: Primary buttons, links, brand icons, active borders
  - name: Navy
    hex: "#002A54"
    role: Pressed buttons, focus ring, dark hero sections
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Hover Blue
    hex: "#034C81"
    role: Button and icon hover
  - name: Primary Navy
    hex: "#002D72"
    role: Bootstrap primary token, deep brand text
  - name: Chip Navy
    hex: "#0E2A48"
    role: Selected chips
  - name: Charcoal
    hex: "#333333"
    role: Body text and default icons
  - name: Grey 600
    hex: "#666666"
    role: Secondary text, placeholders, read-only borders
  - name: Grey 400
    hex: "#888888"
    role: Dark borders, container outlines
  - name: Grey 200
    hex: "#CCCCCC"
    role: Medium borders, disabled fills
  - name: Grey 100
    hex: "#EEEEEE"
    role: Light borders, secondary background
  - name: Alt Background
    hex: "#EFF3F8"
    role: Cool alternate section background, unselected chips
  - name: Sky Tint
    hex: "#C5E4F3"
    role: Tertiary background, chip hover
  - name: Error Red
    hex: "#D60000"
    role: Error text, icons and borders
fonts:
  display:
    family: "Interstate"
    fallback: "Overpass"
    weights: [300, 400, 700]
  body:
    family: "Interstate"
    fallback: "Overpass"
    weights: [300, 400, 700]
  mono:
    family: "Interstate Mono"
    fallback: "Overpass Mono"
    weights: [300, 400]
typeScale:
  - { role: Hero, size: 42, weight: 300, lineHeight: 1.19, tracking: "0" }
  - { role: H1, size: 32, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: H2, size: 26, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: H3, size: 21, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Lead, size: 18, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Button / Caption, size: 12, weight: 700, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 4px rgba(0,0,0,0.24)" }
  - { name: Soft, value: "0 1px 10px rgba(0,0,0,0.12)" }
  - { name: Raised, value: "0 2px 7px 2px rgba(0,0,0,0.13)" }
  - { name: Dropdown, value: "0 0.5rem 1rem rgba(0,0,0,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#EFF3F8"
  text: "#333333"
  muted: "#666666"
  border: "#CCCCCC"
  accent: "#056DAE"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Citi

## 1. Visual Theme & Atmosphere

citi.com is the US consumer site for Citibank: credit cards (Double Cash, Custom Cash, Strata, Costco Anywhere), checking and savings, mortgages, personal loans and Citi Personal Wealth Management. The brand is one of the most recognisable in banking: the lowercase "citi" with a red arc over the "t" and "i", a nod to an umbrella from the old Travelers logo.

The site is a clean, cool, blue-on-white banking interface, built on Citi's design system (classes prefixed `cds-`, layered on Bootstrap). It uses a familiar pattern: navy hero band, a sign-in box, card offers in tiles, and lots of white.

What makes it recognisable:

- **The arc.** The red arc in the logo is the only red in the brand. It should never become a decoration elsewhere.
- **Two blues.** The 2023 logo uses a brighter blue `#255BE3`. The site UI still runs on Citi Blue `#056DAE` for actions and navy `#002A54` for depth.
- **Interstate.** The site text is Interstate, a highway-signage sans, mostly in its Light weight for body copy. Buttons use Interstate Bold.
- **Soft, small radii.** Buttons and fields use 8px corners; tiles 8-16px; chips and icon buttons are pills.
- **Cool neutrals.** `#EFF3F8` alternate sections and `#C5E4F3` tints keep the page cool and calm.
- **Card art as hero.** Credit cards, shown flat and slightly angled, are the main imagery.

Mood words: global, clean, efficient, confident, modern-traditional.

## 2. Color Palette & Roles

Values from citi.com CSS and `--cds-*` tokens (November 2026).

| Name | Hex | Token / role |
|---|---|---|
| Citi Logo Blue | `#255BE3` | Logo (2023), AI gradient end stop |
| Arc Red | `#FF3C28` | Logo arc only |
| Citi Blue | `#056DAE` | `btn-primary-bg-enabled`, `bg-brand`, `border-brand`, links, brand icons |
| Hover Blue | `#034C81` | `btn-primary-bg-hovered`, icon hover |
| Navy | `#002A54` | `btn-primary-bg-pressed`, `bg-4` dark sections, `focus-default` |
| Primary Navy | `#002D72` | Bootstrap primary, focus ring tint |
| Link Hover Navy | `#002256` | `link-hover-color` |
| Chip Navy | `#0E2A48` | Selected chips |
| Inverse Focus | `#008FC9` | `focus-inv` on dark backgrounds |
| Sky Tint | `#C5E4F3` | `bg-3`, chip hover |
| Sky Pressed | `#9BD5EF` | Chip pressed |
| Alt Background | `#EFF3F8` | `bg-alt`, unselected chips |
| Off White | `#FCFCFC` | `bg-1` |
| Charcoal | `#333333` | Body text, default icons |
| Grey 600 | `#666666` | Secondary text, placeholders |
| Grey 400 | `#888888` | Dark borders |
| Grey 200 | `#CCCCCC` | Medium borders, disabled |
| Grey 100 | `#EEEEEE` | Light borders, `bg-2` |
| White | `#FFFFFF` | Background |

Legacy logo blue `#003B70` (pre-2023 logo) still appears in older assets.

### Semantic colors

| State | Strong | Tint |
|---|---|---|
| Error | `#D60000` | `#FFEBEB` |
| Success | `#006E0A` | `#EBFFED` |
| Warning | `#FFCA00` (icon, border) | `#FFF4CC` |
| Info | `#056DAE` | `#C5E4F3` |

### AI gradients

Newer assistant features use soft gradients: blue (`#CDE9FE` to `#255BE3`), blue-green (`rgba(174,229,128,.1)` to `#186F66`) and purple (`rgba(129,49,156,.1)` to `#9841B0`). Use them only for AI or insight surfaces.

### Dark sections

No global dark mode. Navy `#002A54` bands hold white text; buttons on dark use translucent white fills (`rgba(255,255,255,.6)` enabled, `.7` hover, `.8` pressed) with black text, and focus switches to `#008FC9`.

## 3. Typography

**Family:** Interstate (Font Bureau), loaded as `Interstate_Light`, `Interstate_Regular`, `Interstate_Bold` and Interstate Mono cuts. Body text uses Light by default. Some newer modules also load `foundation-sans` variants (approximate role: campaign headlines).

**Licensing and fallbacks:** Interstate is commercial. **Overpass** on Google Fonts is drawn from the same highway-signage lineage and is the closest free match; **Overpass Mono** for mono.

```css
--font-citi: "Interstate_Light", "Interstate", "Overpass", sans-serif;
--font-citi-bold: "Interstate_Bold", "Overpass", sans-serif;
```

### Scale (desktop, observed sizes)

| Role | Size | Line height | Weight |
|---|---|---|---|
| Hero | 42px (2.625rem) | 50px | Light |
| H1 | 32px | 40px | Light |
| H2 | 26px (1.625rem) | 34px | Regular |
| H3 | 21px | 28px | Regular |
| Lead | 18px | 27px | Light |
| Body | 16px | 24px | Light |
| Small | 14px | 20px | Regular |
| CTA (md / lg) | 12px / 16px | 18px / 24px | Bold |
| Caption / legal | 12px | 16px | Light |

Line heights are approximate.

### Rules

- Sentence case for headlines and buttons.
- Buttons in Interstate Bold; most else in Light or Regular.
- Card names keep their marks: "Citi Double Cash® Card", "Citi Strata Premier® Card".
- Rates and APRs: tabular figures, Regular weight, with footnote markers.

## 4. Logo & Brand Mark

The logo is the lowercase word "citi" in a rounded geometric sans with a red arc spanning from the first "t" over to the last "i", like an umbrella canopy. The 2023 refresh brightened the blue to `#255BE3`, flattened the letters, and made the arc a warmer red `#FF3C28`.

- **Colors:** blue letters with red arc on white (primary); white letters with red arc on blue or navy; all-white for photography.
- **App icon:** white "citi" with red arc on a blue square.
- **Clear space:** at least the height of the "c" on all sides (approximate).
- **Minimum size:** about 48px wide on screen.

Misuse:

- Do not separate the arc or use it as a standalone graphic.
- Do not change the arc color to blue or the letters to red.
- Do not capitalise the logo; "Citi" is capitalised only in running text.
- Do not set "citi" in Interstate.

## 5. Components

### Buttons

| Variant | Background | Text | Hover | Pressed |
|---|---|---|---|---|
| Primary | `#056DAE` | `#FFFFFF` Interstate Bold | `#034C81` | `#002A54` |
| Secondary (text) | transparent | `#056DAE` | text `#034C81`, underline | `#002A54` |
| Alternate primary | white, 1px `#056DAE` | `#056DAE` | fill `#056DAE`, text white | `#002A54` |
| On dark | `rgba(255,255,255,.6)` | `#000000` | `.7` | `.8` |
| Disabled | `#EEEEEE` | `#CCCCCC` | | |

Sizes (`cds-cta`): small `4px 25px`, 12px text; medium `11px 30px`, 12px; large `13px 59.5px`, 16px/24px. Radius 8px on all three. Icon-only round buttons and extra-small buttons are pills (999px).

Focus: `box-shadow: 0 0 0 1px #FFFFFF, 0 0 0 2px #002A54`.

```css
.citi-btn {
  font: 700 16px/24px var(--font-citi-bold);
  color: #fff;
  background: #056DAE;
  border: 0;
  border-radius: 8px;
  padding: 13px 59.5px;
  white-space: nowrap;
  transition: background-color .2s ease;
}
.citi-btn:hover { background: #034C81; }
.citi-btn:active { background: #002A54; }
.citi-btn:focus-visible { outline: none; box-shadow: 0 0 0 1px #fff, 0 0 0 2px #002A54; }
```

### Sign-on panel

- White card with 8px radius and `0 1px 4px rgba(0,0,0,.24)` shadow, floating on the navy hero (approximate placement).
- "User ID" and "Password" fields with labels above, "Remember User ID" toggle, full-width Citi Blue "Sign On" button.
- Links "Forgot User ID or Password?" and "Register for Online Access" in `#056DAE` 14px.

### Inputs

- Height 48px, radius 8px (`--cds-radius-field`), 1px `#888888` border, Interstate 16px `#333333`, placeholder `#666666`.
- Hover border `#034C81`; focus border `#056DAE` plus the navy focus ring; error border and helper `#D60000` with `#FFEBEB` background on alerts.
- Read-only: border `#666666`.

### Chips and filters

- Pills (999px), unselected `#EFF3F8` fill with `#333333` text, hover `#C5E4F3`, pressed `#9BD5EF`; selected `#0E2A48` fill with white text (hover `#034C81`).

### Navigation

- White header, logo left, main items "Credit Cards", "Banking", "Lending", "Wealth Management", "Open an Account" (approximate labels), search and "Sign On" right.
- Top utility row: ATM/branch, Español, contact.
- Mega-menu panels: white, 16px radius bottom corners, columns of links in 14-16px, `0 .5rem 1rem rgba(0,0,0,.15)` shadow.
- Active item: 3-4px Citi Blue underline.

### Cards and tiles

- Tile radius 8px (medium) or 16px (large), 24px on hero tiles; white on `#EFF3F8` sections.
- Credit card offer tile: card art top, name in 21px Regular, two or three benefit lines with check icons, "Learn More" secondary CTA and "Apply Now" primary.
- Pagination dots under carousels: inactive `#EEEEEE`, active `#056DAE`.

### Alert banners

Full-width banners with a 4px left stripe and icon: critical `#D60000` on `#FFEBEB`, success `#006E0A` on `#EBFFED`, warning `#FFCA00` on `#FFF4CC`, marketing `#056DAE` on `#C5E4F3`.

### Modals

White, radius 16px, scrim `rgba(0,0,0,.6)`, title 26px, close icon `#333333`, buttons right-aligned.

## 6. Layout & Spacing

- **Spacing:** 4px base; 8, 12, 16, 24, 32, 48, 64px.
- **Grid:** Bootstrap 5 12-column grid (`cdsbs` namespace), container about 1140-1320px with 24px gutters.
- **Breakpoints:** Bootstrap defaults, 576, 768, 992, 1200, 1400px.
- **Section spacing:** 48-64px on desktop.
- **Density:** medium; hero band, then rows of 3 card tiles, then banking features.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Card | `0 1px 4px #0000003D` | Tiles, sign-on panel |
| Soft | `0 1px 10px #0000001F` | Floating elements |
| Raised | `0 2px 7px 2px #00000020` | Hovered tiles |
| Small | `0 2px 4px #00000020` | Chips, dropdown triggers |
| Dropdown | `0 .5rem 1rem rgba(0,0,0,.15)` | Menus |
| Inset field | `inset 0 1px 1px #00000013` | Inputs |

- Flat by default, with soft shadows on cards.
- Transitions 150-250ms ease (approximate). Carousels slide; little else moves.

## 8. Iconography & Imagery

- **Icons:** line icons with 1.5px strokes and rounded ends, filled by `--cds-icon-path-fill` (Citi Blue enabled, `#034C81` hover, `#002A54` pressed, `#333333` default).
- **Card art:** the main imagery. Show cards flat or at a slight tilt on light backgrounds with a soft shadow.
- **Photography:** bright, optimistic lifestyle shots (travel, dining, family) with clean negative space for copy.
- **Illustration:** simple flat graphics in blues with a single warm accent.

## 9. Voice & Microcopy

Clear, efficient and benefit-led. Speaks to card members and customers in practical terms.

- Sentence case; "Sign On" for login.
- Lead with the benefit, then the terms.
- CTAs: "Apply Now", "Learn More", "Sign On", "Open an Account", "Compare Cards", "Find a Branch/ATM". (Citi often title-cases CTA labels.)
- Every offer carries an APR or terms link.

Sample strings (typical of citi.com; the home page renders client-side, so these are approximate):

- "Online Banking, Mortgages, Personal Loans, Investing" (page title, observed)
- "Forgot User ID or Password?"
- "Earn cash back on every purchase"
- "See Pricing & Information"

## 10. Do's and Don'ts

**Do**

- Use Citi Blue `#056DAE` for actions and navy `#002A54` for depth and focus.
- Keep the red arc in the logo only.
- Use 8px radii for buttons and fields, pills for chips.
- Use a light highway-style sans (Interstate or Overpass) for body text, bold for buttons.
- Put cool `#EFF3F8` behind white tiles.
- Use the semantic tints for banners exactly as listed.

**Don't**

- Don't use red as an accent, button or link color (error red `#D60000` excepted).
- Don't mix the 2023 logo blue `#255BE3` into ordinary buttons; it belongs to the logo and AI gradients.
- Don't use large pill buttons for main CTAs.
- Don't use heavy shadows or dark grey neutrals.
- Don't capitalise the logo.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Citi (citi.com). White page with cool alternate sections `#EFF3F8`, text `#333333`, secondary `#666666`, borders `#CCCCCC` and `#888888`. Primary buttons are Citi Blue `#056DAE` with white bold text, 8px radius, padding 13px 60px (large), hover `#034C81`, pressed `#002A54`; focus ring `0 0 0 1px #fff, 0 0 0 2px #002A54`. Secondary actions are blue text links. Font: "Overpass" as a stand-in for Interstate, body 16px/24px weight 300, headings 42px hero and 26px section in light/regular weight, buttons bold. Use a navy `#002A54` hero band with a white sign-on card (8px radius, `0 1px 4px rgba(0,0,0,.24)` shadow), then rows of white credit-card tiles (16px radius). Chips are pills: `#EFF3F8` unselected, `#0E2A48` selected. Alerts: error `#D60000` on `#FFEBEB`, success `#006E0A` on `#EBFFED`, warning `#FFCA00` on `#FFF4CC`. The logo is lowercase "citi" in `#255BE3` with a red `#FF3C28` arc; red appears nowhere else.

```css
:root {
  --brand-logo-blue: #255BE3;
  --brand-arc-red: #FF3C28;
  --brand-blue: #056DAE;
  --brand-blue-hover: #034C81;
  --brand-navy: #002A54;
  --brand-navy-primary: #002D72;
  --brand-chip-selected: #0E2A48;
  --brand-focus-inverse: #008FC9;
  --brand-sky: #C5E4F3;
  --brand-sky-pressed: #9BD5EF;
  --brand-alt-bg: #EFF3F8;
  --brand-bg: #FFFFFF;
  --brand-text: #333333;
  --brand-text-secondary: #666666;
  --brand-border-dark: #888888;
  --brand-border: #CCCCCC;
  --brand-border-light: #EEEEEE;
  --brand-error: #D60000;
  --brand-error-bg: #FFEBEB;
  --brand-success: #006E0A;
  --brand-success-bg: #EBFFED;
  --brand-warning: #FFCA00;
  --brand-warning-bg: #FFF4CC;
  --brand-font: "Interstate_Light", "Interstate", "Overpass", sans-serif;
  --brand-font-bold: "Interstate_Bold", "Overpass", sans-serif;
  --brand-radius-button: 8px;
  --brand-radius-field: 8px;
  --brand-radius-tile: 16px;
  --brand-radius-pill: 999px;
  --brand-shadow-card: 0 1px 4px rgba(0,0,0,.24);
  --brand-shadow-raised: 0 2px 7px 2px rgba(0,0,0,.13);
  --brand-focus-ring: 0 0 0 1px #FFFFFF, 0 0 0 2px #002A54;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Citi.

---
name: Palantir
slug: palantir
url: https://palantir.com
category: AI
tagline: "Stark black and white, Alliance type, square buttons and Blueprint's dense dark data UI."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#1E2124"
    role: Text on light, dark theme background
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Forest
    hex: "#2B5945"
    role: Accent on light themes
  - name: Signal Blue
    hex: "#4E8AF7"
    role: Accent on dark themes
  - name: Blueprint Blue
    hex: "#2D72D2"
    role: Primary intent in product UI
  - name: Dark Gray 1
    hex: "#1C2127"
    role: Blueprint dark app background
  - name: Charcoal
    hex: "#2F343C"
    role: Dark surfaces, cards, panels
  - name: Gray Medium
    hex: "#636363"
    role: Secondary text on light
  - name: Gray Light
    hex: "#767676"
    role: Captions on light
  - name: Silver
    hex: "#B9B9B9"
    role: Secondary text on dark
  - name: Smoke
    hex: "#F3F3F3"
    role: Light secondary background
  - name: Gold
    hex: "#8C7847"
    role: Accent for gold-themed pages
  - name: Mint
    hex: "#A6F2CC"
    role: Accent on dark mint pages
  - name: Error
    hex: "#FF4136"
    role: Form errors on the site
  - name: Success
    hex: "#238551"
    role: Blueprint success intent
  - name: Danger
    hex: "#CD4246"
    role: Blueprint danger intent
fonts:
  display:
    family: "Alliance No.2"
    fallback: "Inter"
    weights: [400, 500]
  body:
    family: "Alliance No.1"
    fallback: "Inter"
    weights: [400]
  mono:
    family: "Blueprint: system mono (SF Mono, Menlo)"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Headline 300, size: 100, weight: 400, lineHeight: 1.15, tracking: "-0.02em" }
  - { role: Headline 200, size: 72, weight: 400, lineHeight: 1.19, tracking: "-0.02em" }
  - { role: Headline 100, size: 50, weight: 400, lineHeight: 1, tracking: "-0.02em" }
  - { role: Body 400, size: 34, weight: 400, lineHeight: 1.18, tracking: "0" }
  - { role: Body 300, size: 20, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body 200, size: 18, weight: 400, lineHeight: 1.39, tracking: "0" }
  - { role: Body 100, size: 16, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 10, weight: 400, lineHeight: 1.6, tracking: "0.05em" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [3, 10, 15, 20, 30, 40, 60, 80, 100]
shadows:
  - { name: Blueprint Elevation 1, value: "0 0 0 1px rgba(17,20,24,0.1), 0 1px 1px rgba(17,20,24,0.2)" }
  - { name: Blueprint Elevation 2, value: "0 0 0 1px rgba(17,20,24,0.1), 0 1px 1px rgba(17,20,24,0.2), 0 2px 6px rgba(17,20,24,0.2)" }
  - { name: Blueprint Elevation 4, value: "0 0 0 1px rgba(17,20,24,0.1), 0 4px 8px rgba(17,20,24,0.2), 0 18px 46px 6px rgba(17,20,24,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F3F3"
  text: "#1E2124"
  muted: "#636363"
  border: "#1E2124"
  accent: "#1E2124"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Palantir

## 1. Visual Theme & Atmosphere

Palantir looks austere on purpose. palantir.com is almost entirely black and white: a near-black ink (`#1E2124`), pure white, large quiet headlines in the Alliance typeface, square buttons and thin 1px rules. Pages switch between light and dark section themes, each with one muted accent (forest green, signal blue, gold, mint or salmon). Product imagery is real software: Foundry ontologies, Gotham maps, AIP agent builders, shown full-bleed in dark UI.

The products themselves (Foundry, Gotham, AIP, Apollo) are built with **Blueprint**, Palantir's open-source React toolkit for dense desktop data apps. Blueprint is compact (30px controls, 14px text), mostly dark in practice (`#1C2127` to `#383E47` greys), with blue as the primary intent and green, orange and red for status.

What makes it recognisable:

- **Black, white and nothing else** on the marketing site, apart from one accent per theme.
- **Square, inverting buttons.** Solid ink rectangles with white text that flip to white with ink text on hover.
- **Alliance type.** A neutral grotesk set large with -0.02em tracking; small captions in widely tracked caps.
- **Thin rules and list rows.** Links presented as rows with a 1px bottom line that fills on hover with a wipe.
- **Software as hero imagery.** Dark, dense product screenshots: graphs, maps, tables, agent chat panels.
- **Blueprint in the product.** Compact controls, 2px corners, subtle elevation shadows, a 10px grid.

Mood words: serious, precise, restrained, operational, confident.

## 2. Color Palette & Roles

### palantir.com themes (from site CSS custom properties)

| Token | Light theme | Dark theme |
|---|---|---|
| `--body-color` (background) | `#FFFFFF` | `#1E2124` |
| `--body-color-medium` | `#F3F3F3` | `#2F3234` |
| `--body-color-light` | `#F9F9F9` | `#494A4B` |
| `--text-color` | `#1E2124` | `#FFFFFF` |
| `--text-color-medium` | `#636363` | `#B9B9B9` |
| `--text-color-light` | `#767676` | `#9B9B9B` |
| `--hover-color` | `rgba(30,33,36,.33)` | `rgba(255,255,255,.33)` |
| `--error-color` | `#FF4136` | `#FF4136` |

Theme accents (`--accent-color`), one per page or section:

| Theme | Accent | Pale tint (5%) |
|---|---|---|
| Light (default) | Forest `#2B5945` | `#F4F7F6` |
| Light blue | Signal blue `#4E8AF7` | `#F6F9FF` |
| Light gold | Gold `#8C7847` | `#F9F8F6` |
| Dark | Signal blue `#4E8AF7` | `#20262F` |
| Dark mint | Mint `#A6F2CC` | `#252B2C` |
| Dark salmon | Salmon `#F2C4BF` | `#29292C` |

Announcement bars use a brighter blue `#368CFF`.

### Blueprint (product UI)

| Name | Hex | Role |
|---|---|---|
| Dark Gray 1 | `#1C2127` | Dark app background |
| Dark Gray 2 | `#252A31` | Dark panels |
| Dark Gray 3 | `#2F343C` | Dark cards, inputs |
| Dark Gray 4 | `#383E47` | Dark hover, borders |
| Dark Gray 5 | `#404854` | Dark raised surfaces |
| Gray 1 | `#5F6B7C` | Muted text (light) |
| Gray 3 | `#8F99A8` | Icons |
| Gray 4 / 5 | `#ABB3BF` / `#C5CBD3` | Muted text (dark), borders |
| Light Gray 1 | `#D3D8DE` | Borders on light |
| Light Gray 4 | `#EDEFF2` | Light panels |
| Light Gray 5 | `#F6F7F9` | Light app background, text on dark |
| Blue 3 (primary) | `#2D72D2` | Primary intent |
| Blue 2 / 1 | `#215DB0` / `#184A90` | Primary hover / active |
| Green 3 (success) | `#238551` | Success intent |
| Orange 3 (warning) | `#C87619` | Warning intent |
| Red 3 (danger) | `#CD4246` | Danger intent |
| Text | `#1C2127` (light) / `#F6F7F9` (dark) | Body text |

### Data visualization

The site CSS carries a qualitative palette: `#147EB3`, `#29A634`, `#D1980B`, `#D13913`, `#634DBF`, `#D17E09`, `#9F1239`, `#00A396`, `#5642A6`, `#728C23`, with lighter versions for dark backgrounds (`#2D9CDB`, `#3DCC4A`, `#E0AD2B`, `#EB6847`, `#7C6AD4` and so on). Default series color `#738694`.

## 3. Typography

**Families:** Alliance No.1 and Alliance No.2 by Degarism Studio. palantir.com uses No.2 for headlines and captions in most themes and No.1 for body and some headlines. Both are commercial.

**Fallback:** **Inter** for both (tighten display tracking to -0.02em). Blueprint itself uses the system stack: `-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif` at 14px.

**Base size:** the site sets `html { font-size: 1.125em }`, so 1rem = 18px. The table below is in px.

### Scale (palantir.com tokens; sizes grow at larger breakpoints)

| Token | Mobile | Desktop | Line height | Tracking |
|---|---|---|---|---|
| headline-300 | 34px | 50px to 100px | 1.15-1.2 | -0.02em |
| headline-200 | 34px | 72px | 1.19 | -0.02em |
| headline-100 | 34px | 40-50px | 1 | -0.02em |
| body-400 | 20px | 34px | 1.18-1.3 | 0 |
| body-300 | 18px | 20px | 1.3 | 0 |
| body-200 | 18px | 18px | 1.39 | 0 |
| body-100 | 16px | 16px | 1.43 | 0 |
| captions | 10px | 10px | 1.6 | 0.05em, uppercase |
| form placeholder | 14px | 14px | | |

### Rules

- Headlines are regular weight (400). Weight is never used for emphasis; size is.
- Title Case is common in buttons and nav ("Explore AIP", "Get Started", "Schedule an AIP Bootcamp").
- Captions and labels: 10px uppercase with 0.05em tracking.
- Keep line lengths short; large body (34px) is used for statements.

## 4. Logo & Brand Mark

The Palantir logo is a symbol and wordmark. The symbol is a thick ring sitting above a shallow chevron (a stylised seeing-stone on its stand), and the wordmark is "Palantir" in a clean sans. Black on light, white on dark.

- **Clear space:** at least the ring's diameter on all sides of the lockup (approximate).
- **Minimum size:** the symbol about 16px tall; the lockup about 80px wide.
- **Color versions:** black or white only.
- **Symbol alone:** used for favicons, app icons and social avatars.
- **Misuse:** don't color the logo with theme accents, don't rotate the chevron, don't outline the ring.

## 5. Components

### Buttons (palantir.com)

Square, solid, inverting. From site CSS: padding `0.778rem 1.056rem` (14px 19px), 1px border, background `var(--text-color)`, hover swaps to `var(--body-color)`, 250ms.

```css
.pt-btn {
  font: 400 16px/1.43 "Alliance No.2", Inter, sans-serif;
  padding: 14px 19px; border: 1px solid #1E2124; border-radius: 0;
  background: #1E2124; color: #FFFFFF; cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;
}
.pt-btn:hover { background: #FFFFFF; color: #1E2124; }
.dark .pt-btn { background: #FFFFFF; color: #1E2124; border-color: #FFFFFF; }
.dark .pt-btn:hover { background: #1E2124; color: #FFFFFF; }
.pt-btn--ghost { background: transparent; color: #1E2124; }
.pt-btn--ghost:hover { background: #1E2124; color: #FFFFFF; }
.pt-btn:focus-visible { outline: 2px solid #4E8AF7; outline-offset: 2px; }
```

### List link (signature)

Links shown as full-width rows with text left and an arrow right, a 1px line below. On hover the text nudges and the line wipes from ink to a 33% tint.

```css
.pt-list-link {
  display: flex; justify-content: space-between; width: 100%;
  padding: 0.786em 0; background: transparent; border: 0; color: inherit; position: relative;
  transition: all 250ms ease-in-out;
}
.pt-list-link::after {
  content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px;
  background: linear-gradient(to right, #1E2124 0 50%, rgba(30,33,36,.33) 50% 100%);
  background-size: 200% 100%; background-position: 0 0; transition: background-position 250ms ease-in-out;
}
.pt-list-link:hover::after { background-position: -100% 0; }
```

### Header and sub-nav

Thin top bar: logo left, a few platform links ("AIP", "Foundry", "Gotham", "Apollo", approximate), and a hamburger that opens a full-screen overlay menu in large type. A secondary sticky sub-nav sits below on product pages ("/ AIP Bootcamps" style breadcrumb with a slash).

### Hero

Large headline (50-100px) left-aligned, a short body line, one square button. Often a full-bleed dark product video or screenshot. Some heroes are pure typography on white.

### Platform cards

Grid of four (AIP, Foundry, Gotham, Apollo), each a block with a product screenshot, a name in headline-100, one line of description and a list link ("Explore Foundry"). No rounded corners; separated by gutters and 1px rules, not shadows.

### Forms

Inputs: transparent background, 1px bottom or full border in `--text-color-medium` (`#636363`), square corners, 14px placeholder, error text `#FF4136`. Submit is the square ink button.

### Announcement bar

Full-width bar at the top in ink (or `#368CFF` in notice mode) with white text and a square close button that inverts on hover.

### Blueprint buttons (product)

```css
.bp-button {
  min-height: 30px; min-width: 30px; padding: 5px 10px; border-radius: 2px;   /* v5 values; newer versions are slightly rounder */
  font: 400 14px/1.28581 -apple-system, "Segoe UI", Roboto, sans-serif;
  background: #F6F7F9; color: #1C2127;
  box-shadow: inset 0 0 0 1px rgba(17,20,24,.2), 0 1px 2px rgba(17,20,24,.1);
}
.bp-button.bp-intent-primary { background: #2D72D2; color: #FFFFFF; box-shadow: inset 0 0 0 1px rgba(17,20,24,.4), 0 1px 2px rgba(17,20,24,.2); }
.bp-button.bp-intent-primary:hover { background: #215DB0; }
.bp-button.bp-intent-primary:active { background: #184A90; }
.bp-dark .bp-button { background: #2F343C; color: #F6F7F9; box-shadow: inset 0 0 0 1px rgba(255,255,255,.1), 0 1px 1px rgba(17,20,24,.4); }
.bp-button.bp-minimal { background: none; box-shadow: none; }
.bp-button.bp-small { min-height: 24px; } .bp-button.bp-large { min-height: 40px; font-size: 16px; }
```

### Blueprint inputs, tags, tables

- Input: 30px tall, 2px radius, `#FFFFFF` (light) or `rgba(17,20,24,.3)` (dark), inset 1px border shadow, focus ring 2px `#2D72D2`.
- Tag: 20px tall, 2px radius, gray `#5F6B7C` fill with white text; intent tags use the intent color; minimal tags use a 15% tint.
- Table (`@blueprintjs/table`): spreadsheet-like grid, 20px rows, 1px `rgba(17,20,24,.15)` cell borders, column headers with menus, frozen columns, selection as a blue overlay `rgba(45,114,210,.1)` with a 1px `#2D72D2` outline.
- Navbar: 50px tall, `#FFFFFF` or `#252A31`, Elevation 1 shadow, app name 16px, icon buttons on the right.
- Callout: 2px radius, intent color at 10-15% tint with a matching icon and title.
- Tree, Menu, Popover, Omnibar, Dialog, Drawer, Toast are all part of the kit.

## 6. Layout & Spacing

- **Site max width:** 80rem (1440px).
- **Site grid:** 6 columns on mobile, 10 on tablet, 12 on desktop (`repeat(n, minmax(10px, 1fr))`).
- **Gutters:** 10px mobile, 15px tablet, 30px desktop. Horizontal page padding 20px, then 30px.
- **Section spacing:** 60px, 80px, 100px at the three breakpoints (`--section-v-spacing`).
- **Small spacing:** tiny 3px, xs 10px, s 20px.
- **Blueprint:** a 10px grid (`$pt-grid-size`); padding and control heights are multiples of 10 (30px buttons, 50px navbar).
- **Density:** marketing is sparse with very large type; product is very dense.

## 7. Depth, Elevation & Motion

- **Site:** flat. No shadows on cards or buttons; depth comes from light/dark section changes and full-bleed media.
- **Blueprint elevations:** 0 to 4. Elevation 1 `0 0 0 1px rgba(17,20,24,.1), 0 1px 1px rgba(17,20,24,.2)`; Elevation 2 adds `0 2px 6px rgba(17,20,24,.2)`; Elevation 3 adds `0 4px 8px`, `0 18px 46px 6px` at 0.2; dark mode shadows are stronger (`rgba(17,20,24,.4)` and up).
- **Site easing:** ease-in-out at 250ms for buttons and list links; `cubic-bezier(.215,.61,.355,1)` (easeOutCubic) and `cubic-bezier(.645,.045,.355,1)` for larger transitions.
- **Blueprint transitions:** 100ms with `cubic-bezier(.4,1,.75,.9)`; popovers scale in from 0.3 with a slight bounce.
- Video and product loops play muted, without controls, in heroes.

## 8. Iconography & Imagery

- **Blueprint icons:** about 500 icons drawn at 16px and 20px, solid and simple with square-ish geometry; used in product UI and docs. Color `#5F6B7C` (light) or `#ABB3BF` (dark).
- **Site icons:** minimal; arrows on list links, a hamburger, a close X. Thin, square ends.
- **Product imagery:** dark, dense UI screenshots: ontology graphs, map layers, tables, agent chat, pipelines.
- **Photography:** sparse and documentary: operations rooms, factories, hospitals, defense contexts, often in black and white or desaturated.
- **No decorative illustration** and no gradients beyond product glows.

## 9. Voice & Microcopy

Direct, declarative, sometimes contrarian. Short statements, Title Case CTAs.

- From the live site today: "Foundational Software of Tomorrow. Delivered Today.", "Explore AIP Now", "Explore Foundry", "Explore Gotham", "Explore Apollo", "Schedule an AIP Bootcamp", "Start Building Now", "Get Started", "Category-Defining Technology"
- Product: "New Analysis", "Add to Graph", "Run", "Publish", "No results", "Search objects…"

## 10. Do's and Don'ts

**Do**

- Keep the marketing palette to ink `#1E2124`, white and one theme accent.
- Use square buttons that invert on hover.
- Set headlines large, regular weight, tracking -0.02em.
- Use 1px rules and list links instead of cards with shadows.
- Show the real product in dark UI.
- In app UI, follow Blueprint: 30px controls, 14px text, 10px grid, blue primary intent.

**Don't**

- Don't round marketing buttons or cards.
- Don't use bright, saturated colors or gradients on the site.
- Don't bold headlines.
- Don't put more than one accent color in a section.
- Don't use stock illustrations or playful imagery.
- Don't color the logo.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Palantir (palantir.com). Root font size 18px. White page, ink text `#1E2124`, secondary `#636363`, captions `#767676`; dark sections use `#1E2124` background with white text and `#B9B9B9` secondary. Font: `"Alliance No.2", "Alliance No.1", Inter, system-ui, sans-serif`, headlines regular weight 400 at 50-100px with -0.02em tracking; captions 10px uppercase with 0.05em tracking. Buttons are square (radius 0), 14px 19px padding, 1px border, ink fill with white text that inverts to white with ink text on hover over 250ms. Use full-width list links with an arrow and a 1px bottom rule that wipes on hover. One muted accent per section: forest `#2B5945` on light, signal blue `#4E8AF7` on dark. Max width 1440px, 12-column grid with 30px gutters, 100px section spacing. Hero: huge left-aligned headline, short line, one button, then a dark product screenshot. No shadows, no rounded corners, no gradients. For app screens use Blueprint: `#1C2127` background, `#2F343C` panels, 30px controls with 2px radius, 14px system font, primary `#2D72D2`.

```css
:root {
  --brand-ink: #1E2124;
  --brand-white: #FFFFFF;
  --brand-smoke: #F3F3F3;
  --brand-mist: #F9F9F9;
  --brand-text-medium: #636363;
  --brand-text-light: #767676;
  --brand-dark-medium: #2F3234;
  --brand-dark-light: #494A4B;
  --brand-dark-text-medium: #B9B9B9;
  --brand-accent-forest: #2B5945;
  --brand-accent-blue: #4E8AF7;
  --brand-accent-gold: #8C7847;
  --brand-accent-mint: #A6F2CC;
  --brand-accent-salmon: #F2C4BF;
  --brand-error: #FF4136;
  --bp-dark-gray-1: #1C2127;
  --bp-dark-gray-3: #2F343C;
  --bp-gray-1: #5F6B7C;
  --bp-light-gray-5: #F6F7F9;
  --bp-blue-3: #2D72D2;
  --bp-blue-2: #215DB0;
  --bp-green-3: #238551;
  --bp-orange-3: #C87619;
  --bp-red-3: #CD4246;
  --brand-font: "Alliance No.2", "Alliance No.1", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --bp-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  --brand-radius: 0;
  --bp-radius: 2px;
  --brand-max-width: 1440px;
  --brand-gutter: 30px;
  --brand-section-space: 100px;
  --bp-elevation-1: 0 0 0 1px rgba(17,20,24,0.1), 0 1px 1px rgba(17,20,24,0.2);
  --bp-elevation-2: 0 0 0 1px rgba(17,20,24,0.1), 0 1px 1px rgba(17,20,24,0.2), 0 2px 6px rgba(17,20,24,0.2);
  --brand-ease: cubic-bezier(0.645, 0.045, 0.355, 1);
  --bp-ease: cubic-bezier(0.4, 1, 0.75, 0.9);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Palantir.

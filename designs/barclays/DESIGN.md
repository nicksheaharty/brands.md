---
name: Barclays
slug: barclays
url: https://barclays.co.uk
category: Banking
tagline: "Cyan eagle on white, Effra type, pill buttons in action blue and colour-themed panels."
updated: 2026-11-16
appStoreId: 536248734
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Barclays Cyan
    hex: "#00AEEF"
    role: Eagle and wordmark, brand primary, highlights
  - name: Action Blue
    hex: "#006DE3"
    role: Primary button fill, outline button border, links, focus ring
  - name: Navy
    hex: "#000063"
    role: Dark navy theme panels and hero blocks
  - name: Bright Blue
    hex: "#001276"
    role: Deep blue theme panels, text on mint
  - name: Dark Blue
    hex: "#00395D"
    role: Classic Barclays dark blue, older dark panels
  - name: Aqua
    hex: "#AFFDFD"
    role: Link and button color on teal and blue panels
  - name: Action Blue Hover
    hex: "#005BBE"
    role: Hover for action blue
  - name: Heading Grey
    hex: "#272727"
    role: Headings and primary text
  - name: Body Grey
    hex: "#515151"
    role: Body copy, neutral status
  - name: Mid Grey
    hex: "#8E8E8E"
    role: Placeholder, disabled text
  - name: Rule Grey
    hex: "#E2E2E2"
    role: Borders and dividers
  - name: Light Grey
    hex: "#F6F6F6"
    role: Page and section background
  - name: Lilac
    hex: "#E1C0E2"
    role: Light purple theme panels, link color on dark blue
  - name: Claret
    hex: "#752157"
    role: Text and buttons on lilac and pink panels
  - name: Error Red
    hex: "#E3000F"
    role: Errors, danger buttons
  - name: Success Green
    hex: "#09821F"
    role: Success states
fonts:
  display:
    family: "Barclays Effra"
    fallback: "Lato"
    weights: [300, 400, 500]
  body:
    family: "Barclays Effra"
    fallback: "Lato"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 80, weight: 400, lineHeight: 0.95, tracking: "-0.072rem" }
  - { role: Heading 3XL, size: 48, weight: 400, lineHeight: 1.21, tracking: "-0.072rem" }
  - { role: Heading 2XL, size: 32, weight: 400, lineHeight: 1.19, tracking: "-0.032rem" }
  - { role: Heading XL, size: 24, weight: 500, lineHeight: 1.17, tracking: "-0.018rem" }
  - { role: Heading L, size: 20, weight: 500, lineHeight: 1.2, tracking: "-0.01rem" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.33, tracking: "-0.0045rem" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.375, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.29, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, xl: 16, pill: 99 }
spacing: [2, 4, 8, 12, 16, 24, 32, 40, 56, 72, 80, 120]
shadows:
  - { name: Header, value: "0 -6px 16px rgba(0,0,0,0.2)" }
  - { name: Raised, value: "0 4px 16px rgba(0,0,0,0.12)" }
  - { name: Focus, value: "0 0 0 2px #FFFFFF, 0 0 0 4px #006DE3" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#272727"
  muted: "#515151"
  border: "#E2E2E2"
  accent: "#006DE3"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: pill
---

# Barclays

## 1. Visual Theme & Atmosphere

Barclays UK (barclays.co.uk) is a tidy, modern retail banking site built on a token-driven component library. The base is white and pale grey with dark grey text. The cyan eagle sits at the top left, a slightly deeper "action blue" drives every button and link, and the page is broken up by colour-themed panels: navy, deep blue, teal, lilac, mint and claret, each with its own matched text and button colours.

What makes it recognisable:

- **The spread eagle.** A heraldic eagle in Barclays cyan (`#00AEEF`), used alone as the symbol and paired with the italic-leaning BARCLAYS wordmark.
- **Pill buttons with 2px borders.** Buttons are fully rounded (99px radius) with a 2px border; primary is solid action blue, secondary is the same outline on white.
- **Themed panels.** Promo and hero sections switch theme via a class (`mt-barclays--navy-blue-white`, `--teal`, `--light-purple`). The theme sets background, heading, body, link and button colours together, so any section can be recoloured safely.
- **Soft, rounded media.** Tiles and images use 8-16px corners; promo panels go up to 24-32px.
- **Effra type.** Barclays Effra is a clean humanist sans. Headlines are regular or medium weight, never heavy, with slight negative tracking at large sizes.
- **Quiet grey canvas.** The page background is `#F6F6F6` with white sections and tiles.

Mood words: friendly, competent, British, clear, modern.

## 2. Color Palette & Roles

Base tokens from the `:root` theme on barclays.co.uk:

| Token | Hex | Role |
|---|---|---|
| `--t-color-primary` | `#00AEEF` | Barclays cyan, brand |
| `--t-color-interactive` | `#006DE3` | Buttons, links, focus |
| `--t-color-interactive-alt` | `#005BBE` | Hover, alt interactive |
| `--t-color-0` / `-10` | `#FFFFFF` | Surface |
| `--t-color-30` | `#F6F6F6` | Page background |
| `--t-color-40` | `#E2E2E2` | Borders |
| `--t-color-50` | `#8E8E8E` | Muted text |
| `--t-color-60` | `#515151` | Body text |
| `--t-color-70` | `#272727` | Headings |
| `--t-color-100` | `#000000` | Black |

### Theme panels

Each theme sets the panel background (`--t-color-0`) and the interactive colour together:

| Theme | Background | Text / interactive |
|---|---|---|
| Navy blue / white | `#000063` | White text, white buttons |
| White / navy blue | `#FFFFFF` | `#000063` text and buttons |
| Bright blue | `#001276` | `#AFFDFD` links and buttons |
| Dark blue (classic) | `#00395D` | `#E1C0E2` links and buttons |
| Light blue | `#0076B6` | White |
| Teal | `#006666` | `#AFFDFD` |
| Light teal | `#007481` | `#AFFDFD` |
| Dark teal | `#004750` | `#AFFDFD` |
| Mint | `#CDF5E8` | `#001276` |
| Lime | `#C3FB5A` | `#004750` |
| Light purple | `#E1C0E2` | `#752157` |
| Light claret | `#FFC9C9` | `#752157` |
| Dark claret | `#752157` | `#E1C0E2` |
| Light grey | `#D9D9D9` | `#515151` |
| Dark (inverse) | `#161B2F` | White |

### Semantic colors

| State | Main | Tint | Light tint |
|---|---|---|---|
| Info | `#006DE3` | `#E7F0FB` | `#F2F8FE` |
| Error | `#E3000F` (alt `#B20110`) | `#FDE7E9` | `#FCF3F3` |
| Warning | `#FFBA00` | `#FFF8E7` | `#FFF8E7` |
| Success | `#09821F` | `#E9F4EA` | `#F4F9F5` |
| Neutral | `#515151` | `#EEEEEE` | `#F6F6F6` |

Status banners (`mt-barclays--info`, `--error`, etc.) fill with the main colour and switch text to white, except warning which uses dark grey text.

## 3. Typography

**Family:** Barclays Effra, a custom version of Effra (Dalton Maag). Stack: `"Barclays Effra", Arial, sans-serif`. Headings, body and buttons all use it.

**Licensing:** proprietary to Barclays. Closest free option on Google Fonts: **Lato** (humanist, similar proportions). Rubik is a rounder alternative.

### Scale (from tokens)

| Token | Size | Line height | Tracking | Typical weight |
|---|---|---|---|---|
| Full-screen hero (2XL) | 80px | 76px | approximate -0.072rem | 400 |
| `3xl` | 48px | 58px | -0.072rem | 400 |
| `2xl` | 32px | 38px | -0.032rem | 400 |
| `xl` | 24px | 28px | -0.018rem | 500 |
| `lg` | 20px | 24px | -0.01rem | 500 |
| `md` | 18px | 24px | -0.0045rem | 400 |
| base | 16px | 22px | 0 | 400 |
| `sm` | 14px | 18px | 0 | 400 |
| `xs` | 12px | 16px | 0.003rem | 400 |

Weights available as tokens: light 300, regular 400, medium 500, bold 700, heavy 900. Buttons are 500; badges 14px.

### Rules

- Sentence case for headings, buttons and nav. The hero eyebrow ("PERSONAL BANKING") is the only uppercase text.
- Headings `#272727`, body `#515151`.
- Tighten tracking slightly as size grows; never letterspace body text.
- Currency and rates in the same family; use `£` with no space.

## 4. Logo & Brand Mark

The Barclays logo is the spread eagle followed by the BARCLAYS wordmark in capitals, both in Barclays cyan. The eagle has raised wings, a head turned to the left and a shield-like body with feathered lower edges.

- **Colors:** cyan `#00AEEF` on white (primary); white on navy, dark blue or photography; dark blue `#00395D` single-colour for print.
- **Lockup:** in the site header the eagle shows alone on small screens and gains the wordmark on large screens (`c-brand-logo__suffix--visible-lg`).
- **Clear space:** at least half the eagle's width around the lockup (approximate).
- **Minimum size:** eagle about 24px tall on screen.
- **App icon:** cyan eagle centred on white.

Misuse:

- Do not recolor the eagle in action blue or theme colours.
- Do not separate the wordmark and eagle into a different arrangement.
- Do not outline, shadow or animate the eagle.
- Do not set the wordmark in Effra or any live font.

## 5. Components

### Buttons (`.c-button`)

Base: Effra 500, 16px, `padding: 10px 28px`, 2px border, `border-radius: 99px`, about 46px tall. Small: `2px 16px`. Icon-only: 11px padding, circular.

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `#006DE3` | `#FFFFFF` | 2px `#006DE3` |
| Secondary (default) | `#FFFFFF` | `#006DE3` | 2px `#006DE3` |
| Danger primary | `#E3000F` | `#FFFFFF` | 2px `#E3000F` |
| Ghost | transparent | `#006DE3` | none, 4px radius |
| On theme panel | theme interactive colour | theme background colour | 2px theme interactive |

- Hover: background darkens through `filter: brightness(0.885)` on solids, or switches to `#005BBE`.
- Focus: `box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #006DE3` (white gap, blue ring); on themed panels the ring uses the panel's interactive colour.
- Disabled: `#E2E2E2` fill and border, `#8E8E8E` text (approximate).

### Inputs

- 48px tall, 1px `#8E8E8E` border (approximate), 4px radius (`--t-form-field-border-radius`), 16px text.
- Focus: blue ring as on buttons. Error: `#E3000F` border, message with icon in red above the field.
- Control panes (dropdown lists) use 8px radius; chips and progress bars 4px.

### Tiles (`.c-tile`)

- White, 8px radius, no border, column layout with 12px gap; content padding 16px.
- Media on top with 8px or 12px radius; title 20px/500 `#272727`; body 16px `#515151`; link row at the bottom ("View current accounts").
- On the home page a grid of product tiles: Current accounts, Credit cards, Savings, Loans, Mortgages, Insurance, Investments.

### Promo panels and banners

- Promo panel: 24px radius (32px on large screens), themed background, max content width about 800px.
- Banner: 16px radius with a themed background and an image on one side.
- Ticker tape: a narrow full-width strip for alerts.

### Navigation (`.c-header`)

- White header with a 1px bottom border and an upward shadow on scroll (`0 -6px 16px #0003`).
- Top row segments: "Personal", "Premier", "Business", "Corporate", "Private Bank", "International Banking".
- Main row: eagle (plus wordmark on large screens), "Contact us", "Find Barclays", "Search" and a "Log in" primary pill button.
- Mobile: "Menu" button opens a full-height panel.

## 6. Layout & Spacing

- **Spacing tokens:** 2, 4, 8, 12, 16, 24, 32, 40, 56, 72, 80, 120px (`--t-spacing-3xs` to `--t-spacing-6xl`).
- **Max width:** 1280px content (`--t-max-width`), hero up to 1440px, full-screen hero up to 1920px.
- **Grid:** 12 columns with outer gutters that grow with the viewport (`--t-gutter-outer`).
- **Breakpoints:** small, medium, large and 2XL steps (roughly 600, 900, 1200 and 1440px; approximate).
- **Section rhythm:** 56-80px between sections on desktop, 40px on mobile.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Header | `0 -6px 16px rgba(0,0,0,.2)` | Sticky header |
| Raised | `0 4px 16px rgba(0,0,0,.12)` | Dropdowns, raised tiles (approximate) |
| Focus | `0 0 0 2px #FFFFFF, 0 0 0 4px #006DE3` | Keyboard focus |

- Mostly flat; colour panels do the layering.
- Hover on solid elements uses a brightness filter of 0.885 rather than a new colour.
- Motion: 150-250ms ease-out for hover and menu transitions (approximate). Carousels and full-screen heroes fade between slides.

## 8. Iconography & Imagery

- **Icons:** rounded line icons at 24px with about 2px stroke; secondary fill uses the panel background colour (`--t-icon-fill-secondary`) for two-tone effects.
- **Photography:** bright, natural images of people at home and outdoors in the UK, warm but not filtered, cropped into rounded rectangles.
- **Illustration:** flat, simple scenes in the theme palette (navy, aqua, lilac, mint) for product explainers.

## 9. Voice & Microcopy

Friendly, helpful and plain British English. Speaks to "you".

- Sentence case; contractions fine.
- Product rows follow "Name. One-line benefit. View [product]".
- Legal eligibility lines follow offers in smaller text.

Sample strings (from barclays.co.uk, 2026-11-16):

- "Your Barclays experience starts here"
- "Find a current account that works for you."
- "Choice is the key to finding the right credit card."
- "Whatever you're dreaming of, you can start saving today."
- "Focus on the future with a personal loan."
- Buttons: "Log in", "Explore all offers", "View current accounts", "View mortgages"

## 10. Do's and Don'ts

**Do**

- Use pill buttons with 2px borders; one solid primary per group.
- Keep the eagle cyan and the actions action-blue.
- Use theme panels to change mood, and take text and button colours from the theme.
- Round tiles and media at 8-16px.
- Keep the page background `#F6F6F6` with white tiles.

**Don't**

- Don't use cyan `#00AEEF` for buttons or body links; contrast is too low.
- Don't mix a theme's button colour onto a different theme's background.
- Don't use square buttons.
- Don't use heavy shadows.
- Don't use bold 700 headlines at large sizes.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Barclays UK. Page background `#F6F6F6` with white sections and tiles. Font: "Barclays Effra", fallback Lato, Arial. Headings `#272727` at 32-48px weight 400 with slight negative tracking; card titles 20px weight 500; body 16px/22px `#515151`. Buttons are pills (99px radius) with a 2px border, Effra 500 16px, padding 10px 28px: primary solid `#006DE3` with white text, secondary white with `#006DE3` text and border; focus ring `0 0 0 2px #fff, 0 0 0 4px #006DE3`. Tiles are white, 8px radius, no border, media on top, 16px padding. Add one coloured promo panel with 24px radius, e.g. navy `#000063` with white text and white outline pill, or lilac `#E1C0E2` with claret `#752157` text and buttons. Logo is a cyan `#00AEEF` eagle. Inputs 48px, 4px radius. Copy is friendly British English in sentence case.

```css
:root {
  --brand-cyan: #00AEEF;
  --brand-action: #006DE3;
  --brand-action-hover: #005BBE;
  --brand-navy: #000063;
  --brand-bright-blue: #001276;
  --brand-dark-blue: #00395D;
  --brand-aqua: #AFFDFD;
  --brand-lilac: #E1C0E2;
  --brand-claret: #752157;
  --brand-mint: #CDF5E8;
  --brand-teal: #006666;
  --brand-heading: #272727;
  --brand-text: #515151;
  --brand-text-muted: #8E8E8E;
  --brand-border: #E2E2E2;
  --brand-bg: #F6F6F6;
  --brand-surface: #FFFFFF;
  --brand-error: #E3000F;
  --brand-warning: #FFBA00;
  --brand-success: #09821F;
  --brand-info-tint: #E7F0FB;
  --brand-font: "Barclays Effra", Lato, Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-radius-2xl: 24px;
  --brand-radius-button: 99px;
  --brand-button-border: 2px;
  --brand-focus: 0 0 0 2px #FFFFFF, 0 0 0 4px #006DE3;
  --brand-shadow-header: 0 -6px 16px rgba(0,0,0,.2);
  --brand-max-width: 1280px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Barclays.

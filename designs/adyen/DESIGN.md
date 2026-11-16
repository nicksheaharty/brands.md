---
name: Adyen
slug: adyen
url: https://adyen.com
category: Finance
tagline: "Enterprise payments in deep navy and signal green, with a blocky pixel-cut wordmark."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Adyen Green
    hex: "#00D16A"
    role: Logo, primary button fill, key highlights
  - name: Midnight
    hex: "#001222"
    role: Headings, body text, dark sections, text on green buttons
  - name: Mint
    hex: "#64E3A4"
    role: Focus rings, accents on dark backgrounds
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Mist
    hex: "#F4F5F6"
    role: Subtle section and card fill (black-100)
  - name: Slate 2500
    hex: "#2F3E4D"
    role: Secondary text, dark-mode borders
  - name: Slate 1900
    hex: "#5C6874"
    role: Muted body text, captions
  - name: Border
    hex: "#D1D5D8"
    role: Input borders, dividers (black-500)
  - name: Cloud
    hex: "#ECEDEF"
    role: Hover fill, quiet dividers (black-200)
  - name: Navy 3000
    hex: "#0D1E2E"
    role: Raised surface in dark sections
  - name: Green Hover
    hex: "#00BD60"
    role: Primary button hover
  - name: Green Pressed
    hex: "#00A152"
    role: Primary button active, green text on white
  - name: Signal Orange
    hex: "#FF4A0D"
    role: Errors and critical alerts
  - name: Amber
    hex: "#FF9E11"
    role: Warnings
  - name: Blue
    hex: "#006BD7"
    role: Info states, inline links in docs
  - name: Lilac
    hex: "#CB96FF"
    role: Illustration and data accent
fonts:
  display:
    family: "Adyen"
    fallback: "Inter"
    weights: [500, 700]
  body:
    family: "Adyen"
    fallback: "Inter"
    weights: [400, 700]
  mono:
    family: "AdyenMono"
    fallback: "DM Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 72, weight: 500, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Display, size: 54, weight: 500, lineHeight: 1.1, tracking: "-0.015em" }
  - { role: Heading L, size: 36, weight: 500, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Heading M, size: 27, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Heading S, size: 22.5, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.55, tracking: "0" }
  - { role: Small, size: 13.5, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Mono label, size: 12, weight: 400, lineHeight: 1.4, tracking: "0.04em" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Focus ring, value: "0 0 0 2px #64E3A4" }
  - { name: Card hairline, value: "inset 0 0 0 1px #D1D5D8" }
  - { name: Selected, value: "inset 0 0 0 2px #001222" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F5F6"
  text: "#001222"
  muted: "#5C6874"
  border: "#D1D5D8"
  accent: "#00D16A"
  accentText: "#001222"
  radius: 8
  buttonStyle: solid
---

# Adyen

## 1. Visual Theme & Atmosphere

Adyen is a Dutch payments platform for large enterprises: online checkout, in-person terminals, payouts, card issuing and embedded finance. Its site, adyen.com, looks like a well-run bank built by engineers. It is mostly white and deep navy, with one loud green, and very little ornament.

What makes it recognisable:

- **The wordmark.** "adyen" is drawn from square, pixel-cut letterforms: thick strokes, flat terminals and small rounded inside corners. It reads like a typeface drawn on a grid.
- **Navy, not black.** All text and dark sections use Midnight `#001222`. Greys are blue-tinted slates (`#2F3E4D`, `#5C6874`).
- **Green as signal.** Adyen Green `#00D16A` fills the primary buttons, with navy text on top, never white. A softer mint `#64E3A4` is the focus ring and the accent on dark panels.
- **Calm, factual sections.** Short headline, one sentence, then proof: customer logos, case-study cards with names like Adobe, Prada, Meta, and specific outcomes.
- **Fluid type.** Font sizes are set with `clamp()` so headlines scale smoothly between mobile and wide desktop.
- **Inset rings instead of borders.** Interactive elements use `box-shadow: inset 0 0 0 2px` rings for hover, selected and focus states.

Mood words: precise, institutional, clean, quietly confident, global.

## 2. Color Palette & Roles

Values come from the live adyen.com CSS (`--color-black-*`, `--color-green-*` scales).

| Name | Hex | Role |
|---|---|---|
| Adyen Green (green-900) | `#00D16A` | Logo, primary button, highlights |
| Green Hover | `#00BD60` | Primary hover |
| Green Pressed (green-1400) | `#00A152` | Active state, green text on white |
| Green Deep (green-1800) | `#007F41` | Small green text needing contrast |
| Mint | `#64E3A4` | Focus ring (`inset 0 0 0 2px`), accents on navy |
| Mint Tint | `#CEF6E2` | Success backgrounds, tags |
| Midnight (black-3200) | `#001222` | Text, dark sections |
| Navy 3000 | `#0D1E2E` | Raised panels in dark sections |
| Navy 2800 | `#1A2B3B` | Borders on dark |
| Slate 2500 | `#2F3E4D` | Secondary text |
| Slate 1900 | `#5C6874` | Muted text |
| Slate 1400 | `#848D96` | Placeholder, disabled text |
| Border (black-500) | `#D1D5D8` | Inputs, dividers |
| Cloud (black-200) | `#ECEDEF` | Hover fill |
| Mist (black-100) | `#F4F5F6` | Subtle background |
| Sand 100 | `#F6F5F4` | Warm alternate background |
| White | `#FFFFFF` | Page |

### Semantic and accent

| Name | Hex | Use |
|---|---|---|
| Signal Orange (red-1700) | `#FF4A0D` | Errors, critical |
| Red 1900 | `#C72727` | Error text |
| Red 200 | `#FEEAEA` | Error background |
| Amber (orange-1000) | `#FF9E11` | Warnings |
| Yellow 600 | `#FFC200` | Highlights in charts |
| Blue 1700 | `#006BD7` | Info, links in docs |
| Lilac (purple-1000) | `#CB96FF` | Data viz accent |
| Purple 1900 | `#8E1DFF` | Data viz accent |

### Transparency tokens

Adyen layers navy at fixed alphas for overlays and quiet fills: `#0012220B` (light primary), `#00122213` (light secondary), `#0012222D` (raised), `#001222CF` (strong). On dark, the same steps use white (`#FFFFFF0D` up to `#FFFFFFD2`). Use these rather than new greys.

## 3. Typography

- **Adyen** (custom sans, the house face) for headlines and body. CSS stack: `Adyen, Helvetica, Arial, sans-serif`.
- **AdyenMono** for figures, code, technical labels and small eyebrows.
- **AdyenSC** and **AdyenTPJ** exist for Chinese and Japanese.

These are proprietary. Use **Inter** as the fallback (500 for headings, 400 for text) and **DM Mono** for the mono role.

Sizes are fluid. The scale below gives the desktop end of each `clamp()`:

| Role | Desktop size | Mobile size | Weight | Line height |
|---|---|---|---|---|
| Hero | 72px | 48px | 500 | 1.05 |
| Display | 54px | 40px | 500 | 1.1 |
| Heading L | 36px | 32px | 500 | 1.2 |
| Heading M | 27px | 24px | 500 | 1.25 |
| Heading S | 22.5px | 20px | 500 | 1.3 |
| Body | 18px | 16px | 400 | 1.55 |
| Small | 13.5px | 12px | 400 | 1.5 |
| Mono label | 12px | 12px | 400 | 1.4 |

Example: `font-size: clamp(3rem, 2.6691rem + 1.4706vw, 4.5rem);` for the hero.

Rules:

- Sentence case everywhere. Headlines are short statements ("Fintech built for the long run").
- Headings at 500, body at 400, buttons and strong labels at 700.
- Eyebrows above sections use uppercase mono at 12px with light tracking ("THE STATE OF SMB PAYMENTS 2026").
- Use tabular figures for stats and uptime numbers.

## 4. Logo & Brand Mark

- The logo is the lowercase wordmark **adyen**, built from blocky geometric strokes with small inner radii. There is no separate symbol; the favicon is a cropped, abstracted "a" form.
- Primary colour: Adyen Green `#00D16A` on white or navy. One-colour versions: Midnight `#001222` on light, white on dark. The site nav renders it in `currentColor` (navy).
- Clear space: at least the height of the "a" bowl on all sides (approximate).
- Minimum size: about 60px wide on screen (approximate).
- Don't outline it, add gradients, put it on busy photos, or change the letter spacing.

## 5. Components

### Buttons (`.ds-button`)

```css
.ds-button {
  display: inline-flex; align-items: center; gap: 8px;
  height: 50px; padding: 0 24px;           /* padding approximate */
  border-radius: 8px;
  font: 700 clamp(1rem, .8008rem + .2604vw, 1.125rem)/26px Adyen, Inter, sans-serif;
  transition: all .15s ease-out;
}
.ds-button--primary { background: #00D16A; color: #001222; }
.ds-button--primary:hover  { background: #00BD60; }
.ds-button--primary:active { background: #00A152; }
.ds-button--primary:disabled { background: #00D16A1A; color: #00122273; cursor: not-allowed; }
.ds-button--secondary { background: transparent; color: #001222; box-shadow: inset 0 0 0 2px #001222; }
.ds-button--secondary:hover { background: #0012220B; }
.ds-button--on-dark { background: #FFFFFF; color: #001222; }
.ds-button:focus-visible { box-shadow: 0 0 0 2px #64E3A4; outline: none; }
```

- Text links are navy with an underline on hover, or green-pressed `#00A152` when they need to stand out.
- Arrow links ("Explore Embedded Finance") pair 16-18px/700 text with a right arrow that shifts 4px on hover.

### Inputs

- 48-50px tall, 8px radius, white fill, `inset 0 0 0 1px #D1D5D8`.
- Hover: ring becomes `#2F3E4D`. Focus: `inset 0 0 0 2px #64E3A4`. Error: `inset 0 0 0 2px #FF4A0D` with message in `#C72727`.
- Labels sit above the field in 14px/500 navy.

### Navigation

- White sticky header about 72px tall; navy wordmark at 80x26px on the left.
- Menu items: "Products", "Solutions", "Industries", "Developers", "Customers", "Company", each 16px/500 with a chevron.
- Right side: "Sign in" text link and a green "Contact sales" button.
- Mega-menu panels are white with 8px radius, a hairline ring, and two to three columns of links with one-line descriptions in muted slate.

### Value proposition gallery

- Horizontal row of cards ("Compliance you can trust", "Enterprise-grade reliability", "Built-in optimizations").
- Card: `#F4F5F6` fill, 12px radius, 32px padding, 22.5px/500 title and 16-18px slate body.

### Customer story cards

- Image or brand-coloured panel on top, then the customer name and a one-line outcome ("L'Occitane consolidated 40 systems into one").
- 8-12px radius, no shadow; hover adds `inset 0 0 0 2px #64E3A4`.

### Stats

- Large number in Display 500 with AdyenMono caption below. Use only figures from Adyen's own published pages.

### Tabs and toggles

- Segmented pills on `#ECEDEF` with the active segment white and a 2px navy inset ring.

### Badges and tags

- 4px radius, 12px mono uppercase, `#CEF6E2` fill with `#007F41` text for positive, `#F4F5F6` with slate text for neutral.

### Footer

- Navy `#001222` background, white wordmark, columns of 14px links in `#FFFFFF85` alpha white, and an animated globe graphic on some pages.

## 6. Layout & Spacing

- Max content widths in the CSS: 1223px for standard content, up to 1584px for wide sections, 1944px for full-bleed.
- Mobile breakpoint at 767px, tablet at 992px.
- Base spacing unit 8px; tokens step at 0.25x, 0.5x, 0.75x, 1x, 1.5x, 2x, 3x, 4x, 5x, 6x, 8x, 10x.
- Section padding: 96-128px on desktop, 64px on mobile.
- Twelve-column grid with 24-32px gutters; text columns rarely exceed 640px.

## 7. Depth, Elevation & Motion

- Flat. Separation comes from fill changes (`#F4F5F6` against white) and 1-2px inset rings.
- No drop shadows on cards. Overlays use navy at 24% (`#0000003D`) or 45% (`#00000072`).
- Transitions: `all .15s ease-out` is the default for every interactive element.
- Larger reveals (menus, dialogs) use about 400ms ease.
- Stats and charts animate in on scroll, then stay still.

## 8. Iconography & Imagery

- Icons: 24px, 1.5-2px line weight, square terminals to echo the wordmark, navy or green.
- Photography: real retail, hospitality and travel scenes with people paying, slightly cool and natural.
- Product shots: terminals and checkout UIs on plain backgrounds.
- Data visuals: thin navy lines with green highlights; world maps and globes for "global" stories.

## 9. Voice & Microcopy

- Direct, unhurried, enterprise-grade. Says what the platform does and backs it with a customer.
- Headlines: "Fintech built for the long run", "Different industries. One standard.", "Global scale. Local expertise."
- Buttons: "Contact sales", "Get started", "Explore Intelligent Money Movement", "Read the story".
- Avoid hype and exclamation marks.

## 10. Do's and Don'ts

**Do**

- Use navy `#001222` for text and dark sections; keep greys slate-tinted.
- Put navy text on green buttons.
- Use 8px radius on buttons and inputs, 12px on larger cards.
- Use inset rings for hover, focus and selected states.
- Scale type with `clamp()`.
- Back claims with named customers.

**Don't**

- Don't use pure black or neutral grey text.
- Don't put white text on Adyen Green.
- Don't add drop shadows or gradients to cards.
- Don't set the wordmark in a font; use the vector logo.
- Don't use pill-shaped primary buttons.

## 11. Agent Prompt Guide

> Build this UI in the style of Adyen. White page, text in deep navy `#001222`, secondary text slate `#2F3E4D` and `#5C6874`, borders `#D1D5D8`, subtle panels `#F4F5F6`. Accent is Adyen Green `#00D16A`: primary buttons are green with navy text, 50px tall, 8px radius, weight 700, hover `#00BD60`, active `#00A152`. Secondary buttons are transparent with a 2px navy inset ring. Focus rings are mint `#64E3A4` drawn with box-shadow. Font: "Adyen", falling back to Inter; headings weight 500 with fluid sizes via clamp (hero up to 72px, display 54px, heading 36px), body 18px/1.55. Mono labels in "AdyenMono"/DM Mono, uppercase 12px. Layout max width about 1223px, 8px spacing base, 96-128px section padding. Cards are flat `#F4F5F6` with 12px radius and no shadow. Transitions `all .15s ease-out`. Dark sections and footer use `#001222` with white text and mint accents. Copy is short and factual, backed by named customers.

```css
:root {
  --adyen-green: #00D16A;
  --adyen-green-hover: #00BD60;
  --adyen-green-active: #00A152;
  --adyen-green-deep: #007F41;
  --adyen-mint: #64E3A4;
  --adyen-mint-tint: #CEF6E2;
  --adyen-navy: #001222;
  --adyen-navy-3000: #0D1E2E;
  --adyen-slate-2500: #2F3E4D;
  --adyen-slate-1900: #5C6874;
  --adyen-slate-1400: #848D96;
  --adyen-border: #D1D5D8;
  --adyen-cloud: #ECEDEF;
  --adyen-mist: #F4F5F6;
  --adyen-white: #FFFFFF;
  --adyen-error: #FF4A0D;
  --adyen-warning: #FF9E11;
  --adyen-info: #006BD7;
  --adyen-font: Adyen, Inter, Helvetica, Arial, sans-serif;
  --adyen-font-mono: AdyenMono, "DM Mono", monospace;
  --adyen-radius-s: 4px;
  --adyen-radius-m: 8px;
  --adyen-radius-l: 12px;
  --adyen-ring-focus: 0 0 0 2px #64E3A4;
  --adyen-ring-border: inset 0 0 0 1px #D1D5D8;
  --adyen-transition: all .15s ease-out;
}
```

---

Values are observed from the public adyen.com CSS on 2026-11-16; button padding, icon stroke, logo clear space and minimum size are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Adyen N.V.

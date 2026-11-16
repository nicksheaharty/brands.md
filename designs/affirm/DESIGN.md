---
name: Affirm
slug: affirm
url: https://affirm.com
category: Finance
tagline: "Friendly pay-over-time brand: indigo arc, Axiforma headlines, pill buttons on white."
updated: 2026-11-16
appStoreId: 967040652
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Affirm Indigo
    hex: "#4A4AF4"
    role: Logo arc, primary buttons, links, focus
  - name: Ink
    hex: "#101820"
    role: Logo wordmark, headings, body text
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on indigo
  - name: Indigo Darkest
    hex: "#212189"
    role: Primary button hover
  - name: Indigo Dark
    hex: "#2F2FC1"
    role: Pressed and hover links
  - name: Indigo Light
    hex: "#A8A9FC"
    role: Highlights, illustrations, glow
  - name: Indigo Lightest
    hex: "#E6E6FC"
    role: Tinted panels, selected rows
  - name: Night
    hex: "#0C0C14"
    role: Dark section background and section text
  - name: Text 80
    hex: "#3A3C3D"
    role: Secondary text
  - name: Caption
    hex: "#6D6E71"
    role: Captions, fine print
  - name: Stone
    hex: "#F4F3F2"
    role: Warm neutral section background
  - name: Mist Blue
    hex: "#F0F5F7"
    role: Cool neutral section background
  - name: Border
    hex: "#EDE9E6"
    role: Card borders, dividers
  - name: Success
    hex: "#2ABC7A"
    role: Success states, approved
  - name: Warning
    hex: "#FFCA61"
    role: Warnings, focus on dark
  - name: Destructive
    hex: "#FF6D50"
    role: Errors, destructive actions
fonts:
  display:
    family: "Axiforma"
    fallback: "Poppins"
    weights: [400, 600, 700]
  body:
    family: "Calibre"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "Alma Mono"
    fallback: "DM Mono"
    weights: [400]
typeScale:
  - { role: Super title, size: 72, weight: 600, lineHeight: 1.05, tracking: "-0.03em" }
  - { role: Heading XL, size: 50, weight: 600, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Heading L, size: 38, weight: 600, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Title, size: 32, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Subtitle, size: 22, weight: 500, lineHeight: 1.35, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 15, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Button, size: 14, weight: 400, lineHeight: 1.0, tracking: "0" }
radii: { sm: 6, md: 8, lg: 24, pill: 96 }
spacing: [8, 16, 24, 32, 40, 64, 96, 128]
shadows:
  - { name: Card, value: "0 2px 20px 0 rgba(0,0,0,0.08)" }
  - { name: Raised, value: "0 2px 13px 0 rgba(0,0,0,0.11)" }
  - { name: Phone mockup, value: "0 60px 123px -25px rgba(22,31,39,0.42), 0 35px 75px -35px rgba(19,26,32,0.08)" }
  - { name: Indigo glow, value: "3px 3px 52px 0 rgba(168,169,252,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F3F2"
  text: "#101820"
  muted: "#6D6E71"
  border: "#EDE9E6"
  accent: "#4A4AF4"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Affirm

## 1. Visual Theme & Atmosphere

Affirm offers buy now, pay later loans at checkout, the Affirm Card and an app for finding stores and managing payments. Its site, affirm.com, is bright, warm and reassuring: white pages, an ink-black wordmark, one indigo accent and lots of product photography of things people buy.

What makes it recognisable:

- **The arc.** The logo's indigo half-circle rises over "rm", and the favicon puts the same arc over a lone "a". The arc shape echoes in rounded image masks and section dividers.
- **Indigo, used for intent.** Affirm Indigo `#4A4AF4` fills pill buttons and links; tints (`#A8A9FC`, `#E6E6FC`) carry highlights and selected states.
- **Pill buttons and soft cards.** Buttons use a 96px radius; cards and media use 24px. Shadows are soft and wide.
- **Two typefaces.** Axiforma (geometric, friendly) for headlines and, since the 2025 refresh, for button labels; Calibre for body copy.
- **Shopping imagery.** Category tiles (Home & furniture, Events & experiences, Black-owned businesses) and merchant logos fill the homepage.
- **Plain disclosure.** Fine print sits under each claim in grey: "Your payments stay consistent, and you'll see any interest up front."

Mood words: friendly, clear, honest, optimistic, consumer-grade.

## 2. Color Palette & Roles

Values come from the live affirm.com CSS (`--color-primary-*`, `--color-ui-*`, `--color-greyscale-*`) and the logo file.

| Name | Hex | Role |
|---|---|---|
| Affirm Indigo (primary-base) | `#4A4AF4` | Arc, buttons, links, focus outline |
| Indigo Dark | `#2F2FC1` | Link hover |
| Indigo Darkest | `#212189` | Button hover |
| Indigo Light | `#A8A9FC` | Highlights, illustration fills |
| Periwinkle | `#9CADFC` | Gradients and decorative strokes |
| Indigo Lightest | `#E6E6FC` | Tinted panels, selected |
| Ink (black-100) | `#101820` | Wordmark, headings, body |
| Night | `#0C0C14` | Dark sections, section text |
| Text 90 | `#202223` | Strong body |
| Text 80 | `#3A3C3D` | Secondary text |
| Caption | `#6D6E71` | Captions, fine print |
| Grey 50 | `#909293` | Placeholder |
| Grey 20 | `#D4D6D7` | Disabled fill, input borders |
| Border neutral 1 | `#EDE9E6` | Card borders (warm) |
| Border neutral 2 | `#D3E3EA` | Card borders (cool) |
| Stone | `#F4F3F2` | Warm section background |
| Mist Blue | `#F0F5F7` | Cool section background |
| Black 5 | `#F7F9FA` | Very light fill |
| White | `#FFFFFF` | Page |

### Semantic scales

Each has lightest, light, base, dark, darkest:

| Scale | Lightest | Light | Base | Dark | Darkest |
|---|---|---|---|---|---|
| Success | `#E8F9EF` | `#97E8B8` | `#2ABC7A` | `#0A894C` | `#105432` |
| Warning | `#FCF9E8` | `#FFE98F` | `#FFCA61` | `#E88C31` | `#DB6414` |
| Destructive | `#F7E3E2` | `#FEAA97` | `#FF6D50` | `#D34333` | `#93342F` |

Warning base `#FFCA61` doubles as the focus outline on dark or inverted buttons.

## 3. Typography

- **Axiforma** (Kostas Bartsokas; Affirm uses a custom "Axiforma for Affirm" cut): headlines, numbers, and button labels in the 2025 design system.
- **Calibre** (Klim Type Foundry): body copy, forms, legal text.
- **Alma Mono**: rare technical labels.

All licensed. Google Fonts fallbacks: **Poppins** for Axiforma, **Inter** for Calibre, **DM Mono** for Alma Mono.

| Role | Size (desktop) | Mobile | Family | Weight | Line height |
|---|---|---|---|---|---|
| Super title | 72px | 50px | Axiforma | 600 | 1.05 |
| Heading XL | 50-60px | 40px | Axiforma | 600 | 1.1 |
| Heading L | 38px | 28-32px | Axiforma | 600 | 1.15 |
| Title | 32px | 24px | Axiforma | 600 | 1.2 |
| Subtitle | 22px | 20px | Calibre | 500 | 1.35 |
| Body | 18-20px | 18px | Calibre | 400 | 1.5 |
| Small | 15-16px | 15px | Calibre | 400 | 1.45 |
| Button | 14px | 14px | Axiforma | 400 | 1.0 |

Rules:

- Sentence case for everything, including buttons ("Check my purchasing power").
- Headlines are short and use tight tracking at large sizes.
- Calibre runs slightly small for its size; keep body at 18px or larger.
- Show money clearly: currency symbol, no decimals for whole amounts, "/mo" in a lighter weight.

## 4. Logo & Brand Mark

- The logo is the lowercase wordmark **affirm** in Ink `#101820` with an Affirm Indigo `#4A4AF4` arc that rises from the "r" and lands on the far side of the "m".
- The standalone mark (favicon and avatar) is the arc over a single "a".
- Versions: ink with indigo arc on white; all white on indigo or dark photos; all ink when only one colour is possible.
- Clear space: at least the height of the "a" on all sides (approximate).
- Minimum size: about 64px wide for the wordmark, 16px for the arc mark (approximate).
- Don't separate the arc from the wordmark, change its colour to a gradient, or rotate it.

## 5. Components

### Buttons (`ButtonPrimary`)

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 23px;
  font: 400 14px/1 "Axiforma", Poppins, sans-serif;
  border: 0; border-radius: 96px;
  transition: background-color .2s linear;
}
.btn-primary  { background: #4A4AF4; color: #FFFFFF; }
.btn-primary:hover { background: #212189; }
.btn-primary:focus-visible { outline: 2px solid #4A4AF4; outline-offset: 2px; }
.btn-inverted { background: #FFFFFF; color: #000000; }               /* on dark or indigo */
.btn-inverted:focus-visible { outline: 2px solid #FFCA61; outline-offset: 2px; }
.btn-tertiary { background: transparent; color: #101820; box-shadow: inset 0 0 0 1px #000000; }
.btn-text { background: none; padding: 0; color: #101820; }
.btn:disabled { opacity: .7; pointer-events: none; }
.btn-match-input { height: 56px; padding-block: 0; }
```

- Round arrow buttons: 36px white circles with a 1px black border used in carousels.
- Header has "Log in" (text-only) and "Sign up" (tertiary outline pill).

### Inputs

- 56px tall, 8px radius, 1px `#D4D6D7` border, white fill, Calibre 18px.
- Focus: 2px `#4A4AF4` border. Error: `#D34333` border with message below in 15px.
- The submit button can match input height (`buttonMatchInput`).

### Navigation

- White header with no shadow in the 2025 system (older pages use `0 2px 20px rgba(0,0,0,.08)`).
- Left: wordmark at 72x36px. Menu: "Get to know Affirm", "Shop", "Business", "Help", 14px.
- Right: "Log in", "Sign up", and a "Download the App" link with the app icon.
- Full-screen mobile menu (`NavigationModal`) on white with a 23px close X.

### Stack cards

- Feature cards in a vertical or horizontal stack: large product image (Affirm Card, phone), headline in Axiforma 32px, two-line Calibre description and an inverted or primary pill button.
- 24px radius, either white with `0 2px 20px rgba(0,0,0,.08)` or a solid dark `#0C0C14` card with white text.

### Category and store tiles

- Rounded 16-24px image tiles with a label underneath ("Home & furniture", "Events & experiences").
- Merchant logo grid on white with 12px radius cells.

### Payment plan selector

- Rows or chips showing "4 payments of $X" or "$X/mo for 12 months", with the selected row in `#E6E6FC` and a 2px indigo border. The APR and total appear in Calibre 15px caption grey.

### Toast

- White panel with 28px round close button in `hsla(0,0%,100%,.6)`, 8px radius, soft shadow.

### Badges

- Small pills, 12-14px Calibre 600, `#E6E6FC` with `#2F2FC1` text, or success `#E8F9EF` with `#0A894C` text.

## 6. Layout & Spacing

- Content widths: 1168px for main grids; 920px for narrow text and forms; 600-808px for centered copy blocks.
- Component spacing tokens: xs 8, sm 16, md 24, lg 32, xl 40px.
- Section padding: 96-128px desktop, 64px mobile.
- Breakpoints around 768px and 1168px.
- Product phone mockups often overlap section edges and sit on the indigo glow.

## 7. Depth, Elevation & Motion

- Shadows are soft and neutral: `0 2px 20px rgba(0,0,0,.08)` for cards, `0 2px 13px rgba(0,0,0,.11)` for raised panels.
- Phone and card mockups float with a very long shadow (`0 60px 123px -25px rgba(22,31,39,.42)`).
- Indigo glow behind hero images: `3px 3px 52px 0 rgba(168,169,252,.25)`.
- Motion: reveal on scroll with `opacity .5s linear, transform 2s cubic-bezier(.19,1,.22,1)`; colour changes at 200-300ms.
- Some 2025 modules use a frosted "glass" distortion filter on overlays; keep it subtle and optional.

## 8. Iconography & Imagery

- Icons: 24px line icons with 2px strokes and rounded caps, ink on white or white on indigo.
- Photography: products people buy (furniture, travel, electronics, fashion) on clean backgrounds, and people shopping on phones.
- Device mockups show the Affirm app and checkout with real-looking plans.
- The arc shape returns as a cropping mask and decorative stroke in `#A8A9FC`.

## 9. Voice & Microcopy

- Warm, plain and transparent about cost. Second person, short sentences.
- Headlines: "Pay over time", "Pay with confidence", "Pay how you want, wherever you want".
- Buttons: "Check my purchasing power", "Download the App", "Explore the Affirm Card", "Sign up", "Log in".
- Reassurance lines: "See what you can spend or explore plans without affecting your credit."
- Disclosures sit close to claims, in caption grey, never hidden.

## 10. Do's and Don'ts

**Do**

- Keep pages white or warm stone with ink text and a single indigo accent.
- Use 96px pill buttons and 24px rounded cards.
- Pair Axiforma headlines with Calibre body.
- State payment terms clearly near every offer.
- Use soft, wide, neutral shadows on floating mockups.

**Don't**

- Don't use more than one saturated accent per view.
- Don't use square buttons or hard drop shadows.
- Don't detach or recolour the arc.
- Don't write vague "no hidden fees" claims without the specific terms.
- Don't use all-caps button labels.

## 11. Agent Prompt Guide

> Build this UI in the style of Affirm. White page with warm stone sections `#F4F3F2`, text ink `#101820`, secondary `#3A3C3D`, captions `#6D6E71`, borders `#EDE9E6`. One accent: Affirm Indigo `#4A4AF4` (hover `#212189`, tints `#A8A9FC` and `#E6E6FC`). Headlines in Axiforma (fallback Poppins) weight 600, 38-72px with tight tracking; body in Calibre (fallback Inter) 18px/1.5. Buttons are pills with 96px radius, 14px Axiforma labels, padding 14px 23px: primary indigo with white text, inverted white with black text on dark cards, tertiary transparent with a 1px black inset ring. Cards have 24px radius and `0 2px 20px rgba(0,0,0,.08)`; dark feature cards use `#0C0C14`. Inputs 56px tall, 8px radius, 1px `#D4D6D7`, indigo border on focus. Main grid 1168px, text column 920px, spacing 8/16/24/32/40. Phone mockups float on a soft indigo glow. Copy is warm, second person and states payment terms near every offer.

```css
:root {
  --affirm-indigo: #4A4AF4;
  --affirm-indigo-dark: #2F2FC1;
  --affirm-indigo-darkest: #212189;
  --affirm-indigo-light: #A8A9FC;
  --affirm-indigo-lightest: #E6E6FC;
  --affirm-ink: #101820;
  --affirm-night: #0C0C14;
  --affirm-text-80: #3A3C3D;
  --affirm-caption: #6D6E71;
  --affirm-grey-20: #D4D6D7;
  --affirm-border: #EDE9E6;
  --affirm-stone: #F4F3F2;
  --affirm-mist: #F0F5F7;
  --affirm-white: #FFFFFF;
  --affirm-success: #2ABC7A;
  --affirm-warning: #FFCA61;
  --affirm-destructive: #FF6D50;
  --affirm-font-display: "Axiforma", Poppins, sans-serif;
  --affirm-font-body: "Calibre", Inter, sans-serif;
  --affirm-radius-sm: 6px;
  --affirm-radius-base: 8px;
  --affirm-radius-lg: 12px;
  --affirm-radius-2xl: 24px;
  --affirm-radius-pill: 96px;
  --affirm-shadow-card: 0 2px 20px 0 rgba(0,0,0,.08);
  --affirm-shadow-mockup: 0 60px 123px -25px rgba(22,31,39,.42), 0 35px 75px -35px rgba(19,26,32,.08);
  --affirm-ease-reveal: cubic-bezier(.19,1,.22,1);
}
```

---

Values are observed from the public affirm.com CSS on 2026-11-16; input sizes, icon stroke, plan-selector styling, logo clear space and minimum size are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Affirm, Inc.

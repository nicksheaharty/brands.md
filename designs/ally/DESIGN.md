---
name: Ally
slug: ally
url: https://ally.com
category: Banking
tagline: "Electric plum, highlighter lime and leaf-cornered cards for a friendly online bank."
updated: 2026-11-16
appStoreId: 514374715
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Plum 500
    hex: "#852EF2"
    role: Primary CTA fill, active states, app icon background
  - name: Plum 900
    hex: "#16052B"
    role: Logo, secondary CTA fill, darkest surfaces
  - name: Highlighter
    hex: "#B6FF00"
    role: Signature lime accent, quote blocks, highlights
  - name: Plum 700
    hex: "#4A1A79"
    role: Text links, headings on light purple, step numbers
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Plum 100
    hex: "#DBD2FF"
    role: Lavender fills, step badges, soft panels
  - name: Grey 800
    hex: "#2A2A2A"
    role: Headings and body text
  - name: Plum 800
    hex: "#2B114B"
    role: Rate table header, dark bands
  - name: Grey 200
    hex: "#EFEDEC"
    role: Warm grey section and table cell background
  - name: Grey 300
    hex: "#D4D4D4"
    role: Borders, dividers, input outlines
  - name: Grey 700
    hex: "#464545"
    role: Secondary text
  - name: Grey 100
    hex: "#F6F6F6"
    role: Subtle background
  - name: Plum 400
    hex: "#AA6BFA"
    role: Hover tint, illustration accent
  - name: Highlighter 200
    hex: "#E9FFB2"
    role: Pale lime panels and offset shadows
  - name: Error Red
    hex: "#E11502"
    role: Errors and alerts
fonts:
  display:
    family: "Truth Sans"
    fallback: "Figtree"
    weights: [700, 800]
  body:
    family: "Truth Sans"
    fallback: "Figtree"
    weights: [400, 600]
typeScale:
  - { role: Hero, size: 48, weight: 800, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Heading L, size: 40, weight: 800, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Heading M, size: 28, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Heading S, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Button, size: 18, weight: 600, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Raised, value: "0 2px 2px 0 rgba(0,0,0,0.08), 0 3px 1px -2px rgba(0,0,0,0.08), 0 1px 5px 0 rgba(0,0,0,0.16)" }
  - { name: Card, value: "0 2px 4px 0 rgba(0,0,0,0.16)" }
  - { name: Floating, value: "0 4px 8px 0 rgba(0,0,0,0.16)" }
  - { name: Header Rule, value: "0 3px 3px -2px #D4D4D4" }
preview:
  bg: "#FFFFFF"
  surface: "#EFEDEC"
  text: "#2A2A2A"
  muted: "#464545"
  border: "#D4D4D4"
  accent: "#852EF2"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Ally

## 1. Visual Theme & Atmosphere

Ally is a digital-only US bank (Ally Bank, Member FDIC) that sells savings, checking, CDs, investing and auto finance. Its site feels like a consumer tech brand that happens to be a bank. The base is white and warm grey, headings are heavy and dark, and the brand colour is a bright electric plum (`#852EF2`) backed by a near-black plum (`#16052B`). A neon lime "highlighter" (`#B6FF00`) shows up in small, deliberate doses.

What makes it recognisable:

- **Plum, two ways.** Bright plum for the main button and interactive states, midnight plum for the logo and the secondary button.
- **Highlighter lime.** The lime accent is used for quote bubbles, underlines and callouts, never for body text.
- **Leaf corners.** Feature cards and hero panels use `border-radius: 0 40px 0 40px`: two opposite rounded corners and two square ones. Quote blocks use `50px 50px 50px 0`, like a speech bubble.
- **Pill-ish buttons.** CTAs are 48px tall with a 24px radius and 18px semibold labels.
- **Rounded "a".** The lowercase "ally" wordmark has a single-storey "a" whose tail cuts in at an angle. That "a" alone is the app icon.
- **Rates up front.** The homepage pushes the savings rate, product tiles and reviews ("The reviews are in.").

Mood words: friendly, direct, modern, warm, plain-spoken.

## 2. Color Palette & Roles

The live CSS exposes utility classes named `plum-100` to `plum-900`, `highlighter-100` to `highlighter-900`, and `grey-100` to `grey-900`.

### Plum

| Token | Hex | Role |
|---|---|---|
| plum-100 | `#DBD2FF` | Lavender fills, numbered step badges |
| plum-200 | `#CBBEFF` | Soft borders on lavender |
| plum-300 | `#C5AEFE` | Illustration tint |
| plum-400 | `#AA6BFA` | Hover tint, decorative |
| plum-500 | `#852EF2` | Primary CTA, outline CTA border and text, focus |
| plum-600 | `#661EAD` | Pressed primary |
| plum-700 | `#4A1A79` | Inline links, step numbers |
| plum-800 | `#2B114B` | Rate table header row, dark bands |
| plum-900 | `#16052B` | Logo, secondary CTA, darkest surfaces |

### Highlighter (lime)

| Token | Hex | Role |
|---|---|---|
| highlighter-100 | `#F1FFD0` | Offset "shadow" behind quote bubbles |
| highlighter-200 | `#E9FFB2` | Pale panels |
| highlighter-400 | `#D2FF64` | Underline swashes |
| highlighter-600 | `#B6FF00` | Quote bubble fill, callouts |
| highlighter-800 / 900 | `#7DAF00` / `#5A7E00` | Lime-family text on white |

### Greys

| Token | Hex | Role |
|---|---|---|
| grey-100 | `#F6F6F6` | Subtle background |
| grey-200 | `#EFEDEC` | Warm grey sections, table first column |
| grey-300 | `#D4D4D4` | Borders, dividers, header rule |
| grey-400 / 500 | `#A8A8A8` / `#8D8D8B` | Disabled, placeholder |
| grey-600 | `#707070` | Meta text |
| grey-700 | `#464545` | Secondary text |
| grey-800 | `#2A2A2A` | Headings and body |
| grey-900 | `#161616` | Strongest text |

### Semantic

| State | Hex |
|---|---|
| Error | `#E11502` |
| Success | `#1F6B3F` |
| Info / focus | `#852EF2` |

### Mode

Light site. Dark bands use plum-900 or plum-800 with white text and lime or lavender accents. The mobile app is light with plum accents.

## 3. Typography

- **Family:** Truth Sans (loaded as `truthSans`), Ally's own sans with round, open shapes. Stack: `truthSans, "truthSans Fallback", Arial, Helvetica, sans-serif`.
- **License:** proprietary. **Figtree** is the closest free match; Plus Jakarta Sans also works.
- Headings are heavy (800) and tight; body is regular with 1.5 line height.

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero h1 (desktop) | 48px | 800 | 48px |
| h1 (mobile) | 40px | 800 | 40px |
| h2 | 28-32px | 700 | 1.15 (approximate) |
| h3 | 20-24px | 700 | 1.3 (approximate) |
| Button | 18px | 600 | 1.5 |
| Link | 16px | 600 | inherit |
| Body | 16px | 400 | 1.5 |
| Base small | 14px | 400 | 1.5 |

Rules:

- Sentence case everywhere, with playful headlines: "More bank for your buck.", "You've got an ally in every corner."
- Headlines often end with a full stop.
- Rates are big numerals with a small "APY" label; use tabular figures in rate tables.

## 4. Logo & Brand Mark

The logo is the lowercase word "ally": a single-storey "a" with an angled cut in its tail, two tall straight "l"s, and a "y" built from two diagonal strokes.

- **Colours:** plum-900 `#16052B` on white in the site header; white on plum-500 `#852EF2` for the app icon and social avatars.
- **Clear space:** at least the width of one "l" stem on all sides (approximate).
- **Minimum size:** about 48px wide in the header (the site renders it at 65 x 60px).
- **Icon:** the "a" alone, white, centred on plum.

Misuse:

- Don't capitalise it ("Ally" is fine in text, never in the logo).
- Don't put the logo on lime.
- Don't outline, stretch or add a shadow.

## 5. Components

### Buttons

| Variant | CSS |
|---|---|
| Primary | `background:#852EF2; color:#fff; border:2px solid #852EF2; border-radius:24px; min-height:48px; padding:8px 22px; font:600 18px/1.5 truthSans;` |
| Primary hover | adds `box-shadow: 0 2px 2px rgba(0,0,0,0.08), 0 3px 1px -2px rgba(0,0,0,0.08), 0 1px 5px rgba(0,0,0,0.16);` |
| Secondary (dark) | `background:#16052B; color:#fff; border:none; border-radius:24px;` |
| Outline | `background:transparent; color:#852EF2; border:2px solid #852EF2;` hover `background:rgba(133,46,242,0.04);` |
| Text link | `color:#4A1A79; font-weight:600; font-size:16px;` |
| Loading | shimmering gradient sweep across the button, 1.3s linear infinite |
| Disabled | `background:#D4D4D4; border-color:#D4D4D4; color:#707070;` |

Buttons are full width on mobile and auto width on desktop. Labels: "Open Account", "Log in", "Learn More".

### Header

- White bar with a soft rule underneath (`box-shadow: 0 3px 3px -2px #D4D4D4`).
- Logo left (65 x 60px), product menus: Bank, Invest, Home, Auto, Credit Cards, Personal Loans (approximate grouping).
- Utility links: About Us, Contact Us, Help.
- Right: "Log in" (outline) and "Open Account" (primary).
- Skip links: "Skip to login", "Skip to main content".

### Leaf cards and hero panel

```css
.leaf-card { background:#fff; border-radius:0 40px 0 40px; padding:48px; box-shadow:0 2px 4px rgba(0,0,0,0.16); }
.leaf-card.-plum { background:#2B114B; color:#fff; }
.leaf-card.-lavender { background:#DBD2FF; color:#16052B; }
```

The hero overlays a leaf card on a full-width photo.

### Product tiles

"Spending Account", "Ally Invest", "Bank With Us": white or lavender tiles, 8px radius, a small line icon, a 20-24px bold heading, a sentence of body, and a primary or outline CTA.

### Rate table

- First row (rate highlight) in plum-800 with white 20px text.
- First column cells in warm grey `#EFEDEC` with `4px 4px 0 0` radius on the top cell.
- Rates in large bold numerals with "APY" in small caps style.

### Quote bubble

```css
.quote { background:#B6FF00; border-radius:50px 50px 50px 0; box-shadow:-30px -30px 0 #F1FFD0; margin:24px 0 0 24px; padding:16px 16px 24px; }
```

Numbered steps use 32-40px circles: `background:#DBD2FF; border:2px solid #DBD2FF; color:#4A1A79;`.

### Inputs

- 48px tall, 1px `#D4D4D4` border, 4px radius, 16px text.
- Focus: 2px plum-500 border; errors in `#E11502` with message below.

### Footer

White or warm grey, plum headings, grey links, FDIC and Equal Housing Lender lines, social icons.

## 6. Layout & Spacing

- Content width about 1200-1280px with 16px mobile and 24-40px desktop gutters (approximate).
- 12-column grid; product tiles 3 across, article cards 3 or 4 across.
- 8px spacing rhythm; card padding 24-48px; sections 64-96px apart.
- Breakpoints around 600, 960 and 1280px (approximate).
- Density: generous on marketing pages, compact in rate tables.

## 7. Depth, Elevation & Motion

- Material-like shadow stack for raised buttons and cards (see frontmatter).
- Header separated by a short grey rule, not a heavy shadow.
- Lime offset blocks (`-30px -30px 0 #F1FFD0`) act as flat, graphic depth.
- Transitions 150-250ms ease for colour and shadow; loading shimmer 1.3s linear.

## 8. Iconography & Imagery

- Icons: rounded line icons, 2px stroke, plum or dark grey, 24-32px.
- Photography: real people in everyday moments (kitchens, cars, holidays), warm light, often cropped into leaf-shaped frames.
- Illustration: flat shapes in plum, lavender and lime.
- Article thumbnails use bright, simple compositions.

## 9. Voice & Microcopy

- Friendly, direct and a little cheeky. Ally talks like a helpful friend who knows money.
- Short sentences, contractions, wordplay on "ally".
- Sentence case for headings and buttons.

Sample strings:

- "More bank for your buck."
- "You've got an ally in every corner."
- "Checking made smarter."
- "Invest your way towards someday."
- "A different kind of bank."
- "Chase your money dreams with an ally by your side."
- Buttons: "Open Account", "Log in", "Learn More"

## 10. Do's and Don'ts

**Do**

- Use plum-500 `#852EF2` for the main action and plum-900 `#16052B` for the logo and dark CTAs.
- Use lime `#B6FF00` as a small accent: quote bubbles, highlights, swashes.
- Use the leaf corner radius `0 40px 0 40px` on hero panels and feature cards.
- Keep headings heavy (800) and body regular.
- Write warm, short, sentence-case copy.

**Don't**

- Don't use lime for text on white or for large backgrounds.
- Don't use the older magenta-plum logo colour on new work.
- Don't square off buttons.
- Don't stack more than one lime element per section.
- Don't quote rates unless you read them on ally.com today.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Ally Bank. White page with warm grey `#EFEDEC` sections, text in `#2A2A2A`. Font is Truth Sans (use Figtree): headlines weight 800, 40-48px with line-height 1.0 and a full stop at the end ("More bank for your buck."), body 16px/1.5. Primary buttons are bright plum `#852EF2` with white 18px semibold labels, 48px min height, 24px radius; secondary buttons are midnight plum `#16052B`; outline buttons have a 2px plum border. Links are `#4A1A79` weight 600. Hero and feature cards use leaf corners `border-radius:0 40px 0 40px`, 48px padding, and a light shadow `0 2px 4px rgba(0,0,0,0.16)`. Add one lime `#B6FF00` speech-bubble quote with `border-radius:50px 50px 50px 0` and a flat offset `box-shadow:-30px -30px 0 #F1FFD0`. Numbered steps use lavender `#DBD2FF` circles with plum numbers. Rate tables have a plum `#2B114B` header row. Copy is friendly, short and sentence case.

```css
:root {
  --ally-plum-100: #DBD2FF;
  --ally-plum-200: #CBBEFF;
  --ally-plum-400: #AA6BFA;
  --ally-plum-500: #852EF2;
  --ally-plum-600: #661EAD;
  --ally-plum-700: #4A1A79;
  --ally-plum-800: #2B114B;
  --ally-plum-900: #16052B;
  --ally-lime-100: #F1FFD0;
  --ally-lime-200: #E9FFB2;
  --ally-lime-600: #B6FF00;
  --ally-lime-800: #7DAF00;
  --ally-grey-100: #F6F6F6;
  --ally-grey-200: #EFEDEC;
  --ally-grey-300: #D4D4D4;
  --ally-grey-600: #707070;
  --ally-grey-700: #464545;
  --ally-grey-800: #2A2A2A;
  --ally-white: #FFFFFF;
  --ally-error: #E11502;
  --ally-font: truthSans, "Figtree", Arial, Helvetica, sans-serif;
  --ally-radius-sm: 4px;
  --ally-radius-md: 8px;
  --ally-radius-btn: 24px;
  --ally-radius-leaf: 0 40px 0 40px;
  --ally-radius-bubble: 50px 50px 50px 0;
  --ally-shadow-raised: 0 2px 2px 0 rgba(0,0,0,0.08), 0 3px 1px -2px rgba(0,0,0,0.08), 0 1px 5px 0 rgba(0,0,0,0.16);
  --ally-shadow-card: 0 2px 4px 0 rgba(0,0,0,0.16);
  --ally-header-rule: 0 3px 3px -2px #D4D4D4;
}
```

---

Values are observed from the public ally.com site and its CSS on 2026-11-16; values marked approximate are estimates. This file is an unofficial reference and is not affiliated with or endorsed by Ally Financial Inc.

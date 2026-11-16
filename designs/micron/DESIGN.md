---
name: Micron
slug: micron
url: https://micron.com
category: Hardware
tagline: "Black-and-white memory maker with a signature electric violet and a wave-tailed wordmark."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Micron Violet
    hex: "#BD03F7"
    role: Signature accent, link hover, gradient anchor
  - name: Ink
    hex: "#0A0A0A"
    role: Logo, headings, text, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Violet Deep
    hex: "#8509B0"
    role: Pressed states, text links on white
  - name: Violet Border
    hex: "#B302E8"
    role: Outline button border and hover text
  - name: Violet Light
    hex: "#D351FC"
    role: Highlights on dark, focus glow
  - name: Smoke
    hex: "#F2F2F2"
    role: Section background, card fill, skeletons
  - name: Silver
    hex: "#BFBFBF"
    role: Borders, dividers
  - name: Grey
    hex: "#8C8C8C"
    role: Secondary text, captions
  - name: Charcoal
    hex: "#262626"
    role: Dark surface, footer
  - name: Signal Blue
    hex: "#0068FF"
    role: Gradient partner, data-viz
  - name: Magenta
    hex: "#E60177"
    role: Gradient partner, campaign accent
  - name: Crimson
    hex: "#E81245"
    role: Gradient midpoint
  - name: Coral Red
    hex: "#FF5147"
    role: Errors, validation
  - name: Green
    hex: "#1AAB4F"
    role: Success, in-stock
  - name: Amber
    hex: "#FFBE1E"
    role: Warnings
fonts:
  display:
    family: "Micron Basis"
    fallback: "Outfit"
    weights: [500, 700]
  body:
    family: "Micron Basis"
    fallback: "Outfit"
    weights: [400, 500]
typeScale:
  - { role: Display, size: 72, weight: 700, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Hero, size: 60, weight: 700, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Heading L, size: 42, weight: 700, lineHeight: 1.24, tracking: "0" }
  - { role: Heading M, size: 28, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Heading S, size: 20, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 15, weight: 500, lineHeight: 1, tracking: "0.07em" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 4, md: 8, lg: 20, pill: 40 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 4px 8px -2px rgba(0,0,0,0.16)" }
  - { name: Soft, value: "0 0 4px 0 rgba(0,0,0,0.04), -8px 8px 16px 0 rgba(0,0,0,0.08)" }
  - { name: Raised, value: "1px 7px 8px -2px rgba(0,0,0,0.3)" }
  - { name: Floating, value: "5px 5px 20px rgba(0,0,0,0.44)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#0A0A0A"
  muted: "#8C8C8C"
  border: "#BFBFBF"
  accent: "#BD03F7"
  accentText: "#FFFFFF"
  radius: 20
  buttonStyle: outline
---

# Micron

## 1. Visual Theme & Atmosphere

Micron's site is high-contrast and graphic: white pages, near-black `#0A0A0A` type, and one very saturated electric violet (`#BD03F7`) that marks every interactive moment. Bold Micron Basis headlines sit over full-bleed imagery of wafers, data centers and AI hardware, often with violet-to-blue or violet-to-magenta gradients glowing through.

The homepage is a hero slider ("Micron is the critical layer powering AI", "Investing in American innovation at scale"), then teaser cards, featured blogs and a large footer full of engineering tools: part decoders, power calculators, simulation models, software and drivers. It feels like a consumer-grade brand layer on top of a big, practical B2B catalogue.

What makes it recognisable:

- **Electric violet** (`#BD03F7`) for hover, links, outlines and gradients. It never fills large areas flat.
- **Black and white** for everything else. No navy, no grey-blue.
- **Micron Basis**, a rounded geometric face, set bold for headlines.
- **Outline buttons** with a 2px violet border and 20px radius, plus a small arrow that slides on hover.
- **Gradients with direction.** 240-degree sweeps: violet → crimson → magenta, or violet → indigo → blue.
- **The wave-tailed wordmark.** The "m" starts with a low horizontal stroke and the "n" ends in one, like a signal trace.

Mood words: bold, electric, precise, modern-industrial, AI-era.

## 2. Color Palette & Roles

Hex values are from the live micron.com CSS.

| Name | Hex | Role |
|---|---|---|
| Micron Violet | `#BD03F7` | Link and button hover, accents, gradient anchor |
| Violet Border | `#B302E8` | Outline button border, hover text |
| Violet Deep | `#8509B0` | Pressed, visited, text links on white |
| Violet Light | `#D351FC` | Accents on dark |
| Ink | `#0A0A0A` | Text, headings, logo, dark heroes |
| Charcoal | `#262626` | Dark surfaces, footer |
| Grey 70 | `#4D4D4D` | Body text alternative |
| Grey | `#8C8C8C` | Secondary text, captions |
| Silver | `#BFBFBF` | Borders, dividers |
| Cloud | `#E6E6E6` | Hairlines, skeleton shimmer |
| Smoke | `#F2F2F2` | Section and card background |
| White | `#FFFFFF` | Page background |
| Plum Grey | `#605363` | Gradient banners with `#642479` |

### Gradients (from CSS)

```css
--grad-violet-magenta: linear-gradient(240deg, #E60177, #E81245 50%, #BD03F7);
--grad-violet-blue:    linear-gradient(240deg, #0068FF, #3539F4 50%, #BD03F7);
--grad-violet-ink:     linear-gradient(240deg, #BD03F7, #0A0A0A 50%, #4F5A6C);
--grad-plum:           linear-gradient(299deg, #605363 2.33%, #642479 46.99%, #605363 91.65%);
```

Use gradients for hero glows, thin accent bars and campaign banners. Keep text on them white.

### Semantic colors

| State | Hex |
|---|---|
| Error | `#FF5147` |
| Success | `#1AAB4F` |
| Warning | `#FFBE1E` |
| Info | `#0068FF` |

### Dark sections

Hero slides and some bands flip to `#0A0A0A` with white text (`--hero-blend-color`). On dark, the violet stays the same and borders become `#262626` or white at 20% (approximate).

## 3. Typography

**Family:** Micron Basis, a proprietary geometric sans with round dots and soft terminals, loaded as separate files: `MicronBasis-Regular`, `MicronBasis-Medium`, `MicronBasis-Bold`, plus "Off-White" display cuts. Stack tokens:

```css
--micron-regular-value: MicronBasis-Regular, Helvetica, Arial, sans-serif;
--micron-medium-value:  MicronBasis-Medium, Helvetica, Arial, sans-serif;
--micron-bold-value:    MicronBasis-Bold, Helvetica, Arial, sans-serif;
```

The bold cut is by far the most used (headings, nav, labels). **Fallback:** Outfit from Google Fonts has a similar rounded geometry; use 700 for headings and 400 for body.

### Scale (desktop, from `.cmp-title__text` and size frequencies)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display | 72px | 700 | 90px | -0.01em (approximate) |
| Hero | 60px | 700 | 75px | -0.01em (approximate) |
| Heading L | 42px | 700 | 52px | 0 |
| Heading M | 28px | 700 | 1.3 | 0 |
| Heading S | 20-24px | 500 | 1.4 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Button | 15px | 500 | 1 | 0.07em (1.05px) |
| Small / meta | 14px | 400 | 1.43 | 0 |
| Caption | 12px | 400 | 1.33 | 0 |

### Rules

- Sentence case for headings and buttons.
- Product names in their own casing: "Micron 9550 SSD", "HBM3E", "LPDDR5X", "Crucial".
- Buttons are slightly tracked.
- Use tabular figures in spec tables.

## 4. Logo & Brand Mark

The Micron logo (2024 version) is the lowercase wordmark "micron" in Micron Basis-style letterforms, with a leading horizontal stroke flowing into the "m" and a trailing stroke out of the "n". It reads like a waveform or circuit trace.

- **Colors:** `#0A0A0A` on white (primary), white on black or on a gradient. Do not render it in violet.
- **Clear space:** at least the height of the "i" dot × 2 on every side (approximate).
- **Minimum size:** about 72px wide on screen (approximate).
- **Avatar:** the "m" with its lead-in stroke works as a short form; on social it is often the full wordmark on black.

Misuse: do not remove the lead-in or tail strokes, capitalise, outline, or place it on a busy part of a gradient.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Outline (primary) | transparent | `#0A0A0A` 15px/500 | 2px `#B302E8` | 20px |
| Outline hover | transparent | `#B302E8` | 2px `#B302E8` | 20px |
| Filled | `#BD03F7` | `#FFFFFF` | none | 20px (approximate) |
| Filled on dark | `#FFFFFF` | `#0A0A0A` | none | 20px (approximate) |
| Text link + arrow | none | `#0A0A0A` | none | hover `#BD03F7`, arrow shifts right |

```css
.mu-btn {
  display: inline-block;
  font: 500 15px/1 MicronBasis-Medium, Outfit, Helvetica, Arial, sans-serif;
  letter-spacing: 0.065625rem;
  padding: 12px 24px;              /* approximate */
  color: #0A0A0A; background: transparent;
  border: 2px solid #B302E8; border-radius: 20px;
  transition: color 200ms ease;
}
.mu-btn:hover { color: #B302E8; }
.mu-btn::after { content: ""; display: inline-block; width: 14px; height: 10px; margin-left: 8px;
  background: currentColor; mask: url(arrow.svg) no-repeat center / contain; transition: transform 200ms; }
.mu-btn:hover::after { transform: translateX(4px); }
```

### Navigation

- White sticky header: black wordmark left, then "Products", "Solutions", "Resources", "Support", "About" in 15-16px bold, search, sign in, region.
- Mega menus list categories (Memory, Storage) with tools in a side column ("FBGA and part decoder", "DRAM power calculators", "Cross-reference tools").
- Hover text turns `#BD03F7`.

### Hero slider

- Full-bleed image on white or `#0A0A0A`, title 60-72px bold, one outline button, small slide dots. Mobile uses a solid background block under the image.

### Cards

- Teaser cards: image top, 8px radius, `#F2F2F2` or white fill, shadow `0 4px 8px -2px rgba(0,0,0,0.16)`, title 20-24px bold, arrow link.
- Blog cards: tag in violet, date in `#8C8C8C`.

### Forms

- Inputs: 1px `#BFBFBF` border, 8px radius, 44-48px tall, 16px text; focus border `#BD03F7`.
- Error text `#FF5147`: "Please enter a valid email address".

### Tables

Product spec tables: header `#F2F2F2`, 14px bold labels, 1px `#E6E6E6` rows, part numbers in medium weight.

### Chips and tabs

Rounded 20px filter chips, outline `#BFBFBF`, selected with violet border and text. Tabs use a 2px violet underline.

## 6. Layout & Spacing

- **Max width:** about 1440px, content 1200-1280px (approximate).
- **Grid:** AEM responsive grid, 12 columns; 16px mobile gutters, 24-32px desktop (approximate).
- **Section spacing:** 64-96px desktop.
- **Breakpoints:** about 768, 1024, 1280px (approximate).
- **Spacing units:** rem-based on a 4px rhythm (0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4rem).

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 4px 8px -2px rgba(0,0,0,0.16)` |
| Soft | `0 0 4px rgba(0,0,0,0.04), -8px 8px 16px rgba(0,0,0,0.08)` |
| Raised | `1px 7px 8px -2px rgba(0,0,0,0.3)` |
| Floating | `5px 5px 20px rgba(0,0,0,0.44)` |
| Inset | `inset 0 6px 12px rgba(0,0,0,0.16)` |

- Motion: 200ms color and arrow shifts, hero crossfades, skeleton shimmer `linear-gradient(90deg, #F2F2F2 25%, #E6E6E6 50%, #F2F2F2 75%)`.
- Gradients may drift slowly in campaign heroes (approximate).

## 8. Iconography & Imagery

- **Icons:** Material Icons (Round) and a small custom icon font, 20-24px, black; violet on hover.
- **Imagery:** macro shots of wafers and memory modules, HBM stacks, data-center racks, people in cleanrooms. Dark backgrounds with violet and blue rim light.
- **Graphics:** thin gradient lines and glowing wave shapes that echo the wordmark strokes.

## 9. Voice & Microcopy

Direct, confident, AI-forward. Short headline, one practical sentence underneath.

- Headlines: "Micron is the critical layer powering AI", "Innovation makes new solutions possible".
- CTAs: "Learn more", "View tech docs", "Sign in / Register".
- Tool labels are literal: "NAND power calculator", "Obsolete part catalogs", "Software and drivers".

## 10. Do's and Don'ts

**Do**

- Keep the page black and white; save violet for interaction and accents.
- Use bold Micron Basis (or Outfit 700) for headlines.
- Use 2px violet outline buttons with 20px radius.
- Use the 240-degree violet gradients for hero glows and accent bars.
- Show real silicon and data-center hardware.

**Don't**

- Don't fill whole sections with flat violet.
- Don't use navy or grey-blue as a base.
- Don't set the logo in violet or remove its strokes.
- Don't mix more than two gradient partners in one view.
- Don't use thin or light weights for headlines.

## 11. Agent Prompt Guide

> Build this UI in the style of Micron. White page, `#F2F2F2` alternate bands, text `#0A0A0A`, secondary `#8C8C8C`, borders `#BFBFBF`. Font: Micron Basis (fallback Outfit), bold 700 headlines at 42-72px with about 1.25 line height, body 16px/1.5 weight 400. The only accent is electric violet `#BD03F7` (deep `#8509B0`, border `#B302E8`). Buttons are outlines: transparent, 2px `#B302E8` border, 20px radius, 15px/500 text with 0.07em tracking, hover turns text violet and slides a small arrow 4px right. Cards: 8px radius, shadow `0 4px 8px -2px rgba(0,0,0,0.16)`. Hero glow gradient `linear-gradient(240deg, #0068FF, #3539F4 50%, #BD03F7)` or `linear-gradient(240deg, #E60177, #E81245 50%, #BD03F7)` behind white text on `#0A0A0A`. Errors `#FF5147`, success `#1AAB4F`.

```css
:root {
  --brand-violet: #BD03F7;
  --brand-violet-border: #B302E8;
  --brand-violet-deep: #8509B0;
  --brand-violet-light: #D351FC;
  --brand-ink: #0A0A0A;
  --brand-charcoal: #262626;
  --brand-grey: #8C8C8C;
  --brand-silver: #BFBFBF;
  --brand-cloud: #E6E6E6;
  --brand-smoke: #F2F2F2;
  --brand-bg: #FFFFFF;
  --brand-blue: #0068FF;
  --brand-indigo: #3539F4;
  --brand-magenta: #E60177;
  --brand-crimson: #E81245;
  --brand-error: #FF5147;
  --brand-success: #1AAB4F;
  --brand-warning: #FFBE1E;
  --brand-font: MicronBasis-Regular, "Outfit", Helvetica, Arial, sans-serif;
  --brand-font-medium: MicronBasis-Medium, "Outfit", Helvetica, Arial, sans-serif;
  --brand-font-bold: MicronBasis-Bold, "Outfit", Helvetica, Arial, sans-serif;
  --brand-radius-card: 8px;
  --brand-radius-btn: 20px;
  --brand-shadow-card: 0 4px 8px -2px rgba(0,0,0,0.16);
  --brand-grad-blue: linear-gradient(240deg, #0068FF, #3539F4 50%, #BD03F7);
  --brand-grad-magenta: linear-gradient(240deg, #E60177, #E81245 50%, #BD03F7);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Micron.

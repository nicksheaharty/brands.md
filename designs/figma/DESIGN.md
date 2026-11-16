---
name: Figma
slug: figma
url: https://figma.com
category: Productivity
tagline: "Black and white canvas, huge condensed headlines, five-color logo as the only rainbow."
updated: 2026-11-16
appStoreId: 1152747299
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Text, primary buttons, dark theme background
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Logo Red
    hex: "#FF3737"
    role: Logo top-left shape, accent
  - name: Logo Orange
    hex: "#FF7237"
    role: Logo top-right shape, accent
  - name: Logo Purple
    hex: "#874FFF"
    role: Logo middle shape, accent
  - name: Logo Blue
    hex: "#00B6FF"
    role: Logo circle, accent
  - name: Logo Green
    hex: "#24CB71"
    role: Logo bottom shape, accent
  - name: UI Blue
    hex: "#0D99FF"
    role: Product icon glyphs, selection blue
  - name: Lime
    hex: "#E4FF97"
    role: Highlight, skip-link focus fill
  - name: Pink
    hex: "#FF24BD"
    role: Product icon accent (Make, AI)
  - name: Border
    hex: "#D6D6D6"
    role: Card and section borders (black at 16%)
  - name: Card Fill
    hex: "#F5F5F5"
    role: Subtle card background (black at 4%)
  - name: Slate
    hex: "#536383"
    role: Neutral product icon glyphs
  - name: Ice
    hex: "#E5F4FF"
    role: Blue icon tile background
fonts:
  display:
    family: "figmaSans"
    fallback: "Inter Tight"
    weights: [400, 600]
  body:
    family: "figmaSans"
    fallback: "Inter"
    weights: [400, 600]
  mono:
    family: "figmaMono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Display 1, size: 104, weight: 400, lineHeight: 1.0, tracking: "-0.125rem" }
  - { role: Display 2, size: 72, weight: 400, lineHeight: 1.0, tracking: "-0.125rem" }
  - { role: Title 1, size: 64, weight: 400, lineHeight: 1.0, tracking: "-0.125rem" }
  - { role: Title 2, size: 48, weight: 400, lineHeight: 1.1, tracking: "-0.0625rem" }
  - { role: Title 3, size: 32, weight: 400, lineHeight: 1.2, tracking: "-0.04rem" }
  - { role: Body XL, size: 24, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 56, 64, 80, 120]
shadows:
  - { name: Hairline, value: "inset 0 0 0 1px rgba(0,0,0,0.16)" }
  - { name: Hairline Hover, value: "inset 0 0 0 1px rgba(0,0,0,0.4)" }
  - { name: Rule, value: "0 1px 0 rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  muted: "#5C5C5C"
  border: "#D6D6D6"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Figma

## 1. Visual Theme & Atmosphere

Figma.com markets a family of tools: Figma Design, FigJam, Dev Mode, Figma Slides, Figma Make, Figma Sites, Figma Draw, Figma Buzz, Figma Weave and more. The current site is strikingly monochrome: pure white pages, pure black type and buttons, big condensed headlines, and color coming almost only from the logo, product icons and the work shown on the canvas.

What makes it recognisable:

- **Black on white.** The theme tokens are literally `--fig-theme-bg: #FFFFFF` and `--fig-theme-btn-primary-bg: #000000`. A dark theme inverts both. There is no brand-blue button.
- **The five-shape logo.** Red, orange, purple, blue and green shapes (two rounded halves, a half, a circle and a drop) stacked into an "F". On the site the colors are `#FF3737`, `#FF7237`, `#874FFF`, `#00B6FF`, `#24CB71`.
- **figmaSans.** Figma's own variable typeface with width, weight and slant axes. Headlines use a narrower or condensed width (`wdth` 96-98) at regular weight with tight negative tracking, so they look tall and dense.
- **Huge type.** Display 1 reaches 104px on desktop with line height 1.0. Headlines are the main visual element on many sections.
- **Hairline structure.** Cards and inputs use an inset 1px line at 16% black (`color-mix` with transparent) instead of shadows; hover darkens it to 40%.
- **Product icon tiles.** Each product has a 24px icon on a tinted rounded tile: blue on `#E5F4FF`, pink on `#FFE0FC`, green on `#CFF7D3`, purple on `#F1E5FF`, orange on `#FFDFCC`.

Mood words: confident, editorial, crafted, minimal, playful in the details.

## 2. Color Palette & Roles

Values come from figma.com's inline theme variables and inline SVGs.

| Name | Hex / value | Role |
|---|---|---|
| Black | `#000000` | Text, primary button, dark background |
| White | `#FFFFFF` | Page background, text on dark |
| Border | `rgba(0,0,0,0.16)` (about `#D6D6D6`) | Card hairlines, rules |
| Border hover | `rgba(0,0,0,0.40)` | Hovered card outlines |
| Card fill | `rgba(0,0,0,0.04)` (about `#F5F5F5`) | Subtle cards, transparent buttons |
| Badge fill | `rgba(0,0,0,0.08)` | Badges, hover on transparent buttons |
| Primary hover | black at 85% | Primary button hover |
| Ghost hover | `rgba(0,0,0,0.04)` | Ghost button hover |

### Logo and accent colors

| Name | Hex | Where |
|---|---|---|
| Red | `#FF3737` | Logo top-left |
| Orange | `#FF7237` | Logo top-right |
| Purple | `#874FFF` | Logo middle-left |
| Blue | `#00B6FF` | Logo circle |
| Green | `#24CB71` | Logo bottom |
| UI Blue | `#0D99FF` | Design product glyphs, selection |
| Pink | `#FF24BD` | Make and AI glyphs |
| Green dark | `#14AE5C` | Dev Mode glyph |
| Lime | `#E4FF97` | Highlights, skip-link focus fill |

Icon tile tints: `#E5F4FF` (blue), `#FFE0FC` (pink), `#CFF7D3` (green), `#F1E5FF` (purple), `#FFDFCC` (orange), `#E3ECF2` (neutral).

### Semantic colors

The marketing site has few states. In the product: error red about `#F24822`, warning yellow about `#FFCD29`, success green `#14AE5C`, selection blue `#0D99FF` (approximate for error and warning).

### Dark theme

Dark sections invert: background `#000000`, text and primary button `#FFFFFF` with black text, borders `rgba(255,255,255,0.16)`, hover `rgba(255,255,255,0.46)`, badge `rgba(255,255,255,0.16)`.

## 3. Typography

**Families:** figmaSans (variable: `wght`, `wdth` from 96 to 100, `slnt` to -6) and figmaMono, both proprietary and self-hosted. Free stand-ins: **Inter Tight** for condensed headlines, **Inter** for text, **Roboto Mono** for mono.

```css
font-family: var(--global-font-sans, "figmaSans", "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif);
font-optical-sizing: auto;
/* headline */
font-variation-settings: "wdth" 96, "wght" 400;
/* text */
font-variation-settings: "wdth" 98, "wght" 400;
```

Weights in variable terms: regular 400, bold 600, bolder 700. Some UI labels use `"wdth" 98, "wght" 550`; mono code samples use `"wght" 330`.

### Scale (desktop / tablet / mobile; breakpoint assignment approximate)

| Role | Desktop | Tablet | Mobile | Line height | Tracking |
|---|---|---|---|---|---|
| Display 1 | 104px | 88px | 72px | 1.0 | -0.125rem |
| Display 2 | 72px | 64px | 44px | 1.0 | -0.125rem |
| Title 1 | 64px | 56px | 36px | 1.0 | -0.125rem (tight) |
| Title 2 | 48px | 44px | 32px | 1.1 | -0.0625rem |
| Title 3 | 32px | 30px | 24px | 1.2 | -0.04rem |
| Title 4 | 24px | 22px | 22px | 1.3 | 0 |
| Body XL | 24px | | 18px | 1.3 | 0 |
| Body | 16px | | 14px | 1.45 | 0 |
| Button | 16px (S: 14px) | | | 1.0 | 0 |


### Rules

- Sentence case for everything ("The full-stack creative canvas").
- Large headlines stay at regular weight; contrast comes from size and condensed width, not boldness.
- Tighten tracking as size grows (tight, standard, slight).

## 4. Logo & Brand Mark

The logo is the five-shape "F" mark, often alone (as in the site header and in `logo.svg`), and sometimes with a "Figma" wordmark to its right.

- **Construction:** a 2 x 3 grid of 16px cells in a 32 x 48 box: red half-pill top-left, orange half-pill top-right, purple half-pill middle-left, blue circle middle-right, green drop bottom-left.
- **Color versions:** full color on white or black; all black or all white for one-color use.
- **App icon:** the color mark on a black tile.
- **Clear space:** at least one cell (a third of the mark's width) on every side (approximate).
- **Minimum size:** about 16px tall (approximate).

Misuse:

- Do not reorder, recolor or rotate the shapes.
- Do not use the older color set (`#F24E1E`, `#FF7262`, `#A259FF`, `#1ABCFE`, `#0ACF83`) on new work.
- Do not put the mark on busy colored backgrounds.
- Do not add gradients, outlines or shadows.

## 5. Components

### Buttons

Buttons transition background and box-shadow over 180ms ease-out. Header and card buttons use 8px radius; some marketing CTAs are full pills (`--fig-radius-full`).

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` | none | black at 85% |
| Secondary | transparent | `#000000` | inset 1px `rgba(0,0,0,0.16)` | inset 1px `rgba(0,0,0,0.4)` |
| Transparent | `rgba(0,0,0,0.04)` | `#000000` | none | `rgba(0,0,0,0.08)` |
| Ghost | transparent | `#000000` | none | `rgba(0,0,0,0.04)` |
| Primary on dark | `#FFFFFF` | `#000000` | none | white at 80% |

Padding is 12px by 22px (`--fig-space-12` and 1.375rem), text 16px (14px for small). Focus: 2px black outline offset 2px (approximate); the skip link turns lime `#E4FF97`.

```css
.fig-btn {
  font: 400 16px/1 "figmaSans", Inter, system-ui, sans-serif;
  font-variation-settings: "wdth" 98, "wght" 550;
  color: #fff;
  background: #000;
  border: 0;
  border-radius: 8px;
  padding: 12px 22px;
  transition: background 180ms ease-out, box-shadow 180ms ease-out;
}
.fig-btn:hover { background: color-mix(in oklch, #000, transparent 15%); }
.fig-btn--secondary {
  background: transparent; color: #000;
  box-shadow: inset 0 0 0 1px color-mix(in oklch, #000, transparent 84%);
}
.fig-btn--secondary:hover { box-shadow: inset 0 0 0 1px color-mix(in oklch, #000, transparent 60%); }
```

### Navigation

- White header about 64px, logo mark left, then "Products", "Solutions", "Community", "Resources", "Pricing".
- Right: "Log in" text link, "Contact sales" secondary button, "Get started for free" primary black button.
- Product mega-menu: two groups ("Design and explore", "Build and ship products"), each product as a 24px tinted icon tile + name + one-line description ("Design and prototype in one place", "Prompt to code anything you can imagine").
- A bottom rule `0 1px 0 rgba(0,0,0,0.16)` appears when the header is stuck.

### Cards

- Radius 16px for media cards (sometimes 24-28px), 8px for small cards.
- Fill white with an inset 1px hairline, or `rgba(0,0,0,0.04)` with no border.
- Padding 24-32px; title Title 4 (24px) and body 16px.
- Hover darkens the hairline to 40% black.

### Badges

`rgba(0,0,0,0.08)` fill, black text, 12-14px, radius 4px or pill, wide tracking (0.03rem).

### Inputs

Form inputs 14-16px text, 11-12px labels, inset 1px hairline at 16% black, radius 8px, hover 40%, focus black 2px (approximate).

### Product canvas (signature)

Hero media shows the Figma editor: grey canvas `#F5F5F5`, frames with blue `#0D99FF` selection outlines and handles, colored multiplayer cursors with name tags in the logo colors, and layer panels in the product's compact 11-12px UI.

### Customer logo strip

Airbnb, Atlassian, Dropbox and others in a single black tone, evenly spaced, 32px tall.

## 6. Layout & Spacing

- **Grid:** 12 columns on desktop, 4 on mobile; gutter 16px; outer margin 16px / 24px / 40px; max content width 1520px (`--fig-grid-max-content-width: 95rem`).
- **Spacing tokens:** 4, 6, 8, 12, 16, 24, 32, 40, 56, 64, 80, 120px (`--fig-space-*`).
- **Radii tokens:** 2, 4, 8, 12, 16, 24, 28px and full.
- **Slides/carousels** span 2, 3, 4, 6 or 12 columns via `--slide-cols-*` math.
- **Rhythm:** sections 80-120px apart; headlines sit flush left with wide margins.

## 7. Depth, Elevation & Motion

- No drop shadows in the marketing chrome. Depth comes from hairlines and black/white inversion.
- Hairline: `inset 0 0 0 1px rgba(0,0,0,0.16)`; hover `rgba(0,0,0,0.4)`; header rule `0 1px 0 rgba(0,0,0,0.16)`.
- Motion: 180ms ease-out for button and card state changes; product demos animate cursors and frames with smooth easing; carousels scroll-snap (approximate).

## 8. Iconography & Imagery

- **Product icons:** 24px solid glyphs on 24px tiles with 6px radius, each in a product tint (blue, pink, green, purple, orange, slate).
- **UI icons:** thin 1.25px stroke chevrons and arrows in `currentColor`.
- **Imagery:** real Figma files, community templates and customer work on the canvas; colorful content inside a black-and-white frame.
- **Illustration:** playful 3D or flat shapes in the logo colors, used sparingly.

## 9. Voice & Microcopy

Confident, short and builder-oriented. Talks about ideas, teams and shipping.

- Sentence case, short noun phrases for product blurbs.
- CTAs: "Get started for free", "Get started", "Contact sales", "Log in", "Explore all products".

Sample strings:

- Hero: "The full-stack creative canvas"
- Sub: "Move fast in the right direction on an AI-native canvas."
- Product blurbs: "Design and prototype in one place", "Translate designs into code", "Animate your designs"
- Section: "What you can do in Figma"

## 10. Do's and Don'ts

**Do**

- Keep the chrome black and white; use the logo colors only for the logo, product icons and small accents.
- Use very large, condensed, regular-weight headlines with tight tracking.
- Use black primary buttons with 8px corners and hairline secondary buttons.
- Separate elements with 1px hairlines at 16% black.
- Show real canvas content as the imagery.

**Don't**

- Don't add a brand-blue primary button.
- Don't bold large headlines to 700.
- Don't add drop shadows to cards.
- Don't use the five logo colors as a rainbow gradient.
- Don't use the older logo palette in new UI.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Figma.com. Pure white page, pure black text. Font figmaSans (fallback Inter Tight for headlines, Inter for body): headlines regular weight, slightly condensed, very large (64-104px), line height 1.0, letter-spacing -0.125rem; body 16-18px at 1.45. Primary buttons are solid black with white text, 8px radius, padding 12px 22px, 180ms ease-out hover to 85% black; secondary buttons are transparent with an inset 1px `rgba(0,0,0,0.16)` hairline that darkens to 40% on hover. Cards use 16px radius and the same hairline or a `rgba(0,0,0,0.04)` fill, no shadows. Product icons are 24px glyphs on tinted 6px-radius tiles (blue `#0D99FF` on `#E5F4FF`, pink `#FF24BD` on `#FFE0FC`, green `#14AE5C` on `#CFF7D3`). The only multicolor element is the five-shape logo (`#FF3737`, `#FF7237`, `#874FFF`, `#00B6FF`, `#24CB71`). 12-column grid, 16px gutters, 1520px max width, 80-120px section spacing. Dark sections invert to black with white buttons.

```css
:root {
  --brand-bg: #FFFFFF;
  --brand-text: #000000;
  --brand-btn-bg: #000000;
  --brand-btn-fg: #FFFFFF;
  --brand-border: color-mix(in oklch, #000000, transparent 84%);
  --brand-border-hover: color-mix(in oklch, #000000, transparent 60%);
  --brand-card-bg: color-mix(in oklch, #000000, transparent 96%);
  --brand-badge-bg: color-mix(in oklch, #000000, transparent 92%);
  --brand-red: #FF3737;
  --brand-orange: #FF7237;
  --brand-purple: #874FFF;
  --brand-blue: #00B6FF;
  --brand-green: #24CB71;
  --brand-ui-blue: #0D99FF;
  --brand-pink: #FF24BD;
  --brand-font: "figmaSans", "Inter", system-ui, helvetica, sans-serif;
  --brand-font-display: "figmaSans", "Inter Tight", system-ui, sans-serif;
  --brand-font-mono: "figmaMono", "Roboto Mono", "SF Mono", menlo, monospace;
  --brand-radius-sm: 4px;
  --brand-radius: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-full: 9999px;
  --brand-grid-gutter: 16px;
  --brand-max-width: 1520px;
  --brand-ease: 180ms ease-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Figma.

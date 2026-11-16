---
name: Block
slug: block
url: https://block.xyz
category: Finance
tagline: "Black-and-white grid of nine squares, lowercase wordmark, Cash Sans and uppercase nav."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Wordmark, grid mark, text, selected tabs
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on black
  - name: Gray 2
    hex: "#FBFBFB"
    role: Default page and panel background
  - name: Gray 5
    hex: "#F2F2F2"
    role: Button and chip fill
  - name: Gray 95
    hex: "#0D0D0D"
    role: Selected tab fill, dark sections
  - name: Paper
    hex: "#EFEFEF"
    role: Alternate section background
  - name: Gray 15
    hex: "#D9D9D9"
    role: Pressed fill, hover on chips
  - name: Gray 60
    hex: "#666666"
    role: Secondary text
  - name: Warm Gray
    hex: "#5F5E5A"
    role: Editorial secondary text and captions
  - name: Hairline
    hex: "#E3E3E1"
    role: Rules and chart grid lines
  - name: Signal Blue
    hex: "#004BFF"
    role: Positive data, charts, focus
  - name: Square Blue
    hex: "#759AFB"
    role: Square brand card gradient start
  - name: Cash Gold
    hex: "#F1C36D"
    role: Cash App brand card gradient start
  - name: Highlight Yellow
    hex: "#FBE397"
    role: Text highlight in editorial pages
  - name: Highlight Lilac
    hex: "#CDC4F5"
    role: Alternate text highlight
fonts:
  display:
    family: "Cash Sans"
    fallback: "Inter"
    weights: [500, 700]
  body:
    family: "Cash Sans"
    fallback: "Inter"
    weights: [400, 500]
  mono:
    family: "Cash Sans Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 64, weight: 500, lineHeight: 1.02, tracking: "-0.035em" }
  - { role: Heading, size: 46, weight: 500, lineHeight: 1.0, tracking: "-0.03em" }
  - { role: Subheading, size: 28, weight: 500, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Nav / Button, size: 14, weight: 500, lineHeight: 1.0, tracking: "0.96px" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 500, lineHeight: 1.2, tracking: "0.1em" }
radii: { sm: 2, md: 8, lg: 12, pill: 1000 }
spacing: [4, 8, 10, 16, 20, 24, 32, 48, 64, 96]
shadows: []
preview:
  bg: "#FBFBFB"
  surface: "#F2F2F2"
  text: "#000000"
  muted: "#666666"
  border: "#E3E3E1"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 1000
  buttonStyle: pill
---

# Block

## 1. Visual Theme & Atmosphere

Block, Inc. is the parent company of Square, Cash App, Afterpay, TIDAL, Bitkey and Proto. Its corporate site (block.xyz) is deliberately quieter than any of its products: a near-white page, black type, a lowercase "block" wordmark and a 3x3 grid of rounded squares that animates cell by cell in the header. The home page states the mission in one lowercase line: "block builds technology for economic empowerment".

What makes it recognisable:

- **Monochrome.** The interface is black on off-white (`#FBFBFB`), with a full grey ramp from the Twist design system (`--twist-color-gray-0` to `-100`). Colour comes from the brands it owns, not from Block itself.
- **The grid mark.** Nine 12px squares with 2px corners and 4px gaps, drawn in `currentColor`. On load each square fades in with a random delay (`--cell-delay`), so the logo flickers into place like pixels.
- **Uppercase nav, lowercase brand.** Navigation items (News, Impact, AI, Open Source, Bitcoin, Careers, Builder Fellowship, Investors) are uppercase with 0.96px letter spacing; the wordmark and hero line are lowercase.
- **Cash Sans.** The type is Cash Sans, shared with Cash App, at 500 for headings with tight negative tracking.
- **Brand cards.** Product links (Square, Cash App, Afterpay, TIDAL, Bitkey, Proto) appear as cards that carry each brand's own gradient: Square in soft blues to rose, Cash App in gold to peach.
- **Editorial pages.** Impact and news pages add a serif (`Exact Block`), highlighter colours (`#FBE397` yellow, `#CDC4F5` lilac) and clean charts with blue positive lines.

Mood words: restrained, technical, confident, editorial, a holding company that stays out of the way.

## 2. Color Palette & Roles

Values read from block.xyz CSS on 2026-11-16.

### Neutrals (Twist gray ramp)

| Token | Hex | Role |
|---|---|---|
| gray-0 | `#FFFFFF` | White, text on black |
| gray-2 | `#FBFBFB` | Page background, unselected tab fill |
| gray-5 | `#F2F2F2` | Default button fill |
| paper | `#EFEFEF` | Alternate section background (`--bgColor`) |
| gray-10 | `#E5E5E5` | Dividers |
| gray-15 | `#D9D9D9` | Hover and pressed fill |
| gray-20 | `#CCCCCC` | Borders |
| gray-40 | `#999999` | Disabled text |
| gray-60 | `#666666` | Secondary text |
| gray-80 | `#333333` | Dark text alternative |
| gray-95 | `#0D0D0D` | Selected tab background |
| gray-100 | `#000000` | Primary text, logo |

### Editorial and data

| Name | Hex | Role |
|---|---|---|
| Ink | `#191919` | Body ink on editorial pages |
| Warm Gray | `#5F5E5A` | Captions |
| Hairline | `#E3E3E1` | Rules |
| Chart Grid | `#E2E2E0` / `#E8E8E6` | Grid lines |
| Signal Blue | `#004BFF` | Positive series |
| Navy | `#001340` | Negative series |
| Chart Line | `#6C93EF` | Default line series |
| Highlight Yellow | `#FBE397` | Text highlight |
| Highlight Lilac | `#CDC4F5` | Text highlight |

### Portfolio brand gradients

| Card | From | Mid | To |
|---|---|---|---|
| Square | `#759AFB` | `#91ADF8` | `#D4B5C5` |
| Cash App | `#F1C36D` | `#EFA281` | `#F2D272` |

The Twist system also defines full ramps for dark blue (`#002DE1` at 40), gold (`#EEAE0A`), lilac (`#D737EA`), orange (`#F54800`), purple (`#7400BE`), red (`#EC2723`), sky blue (`#2ED4EF`) and teal (`#13BBAF`). Use them only for data or status, never as a Block brand colour.

### Dark mode

The site uses inverse sections (`.inverse` nav items in white, `rgb(255 255 255 / 80%)` body text, `/60%` hairlines) on black hero bands rather than a theme switch.

## 3. Typography

- **Primary:** Cash Sans (`--twist-font-family-cash-sans`), with Cash Sans Wide and Cash Sans Mono. Proprietary to Block.
- **Display extras:** Pilat (in Compressed, Condensed, Narrow, Wide and Extended widths) and PP Neue Machina appear on campaign pages; a pixel face, Diphtong Pixel, is loaded for small graphic moments; `Exact Block` is the editorial serif with Georgia as fallback.
- **Fallbacks:** `Inter` for Cash Sans, `JetBrains Mono` for Cash Sans Mono. Stack: `"Cash Sans", Inter, Helvetica, Arial, sans-serif`.

Scale from the `--ei-*` editorial tokens and nav tokens (fluid sizes are shown at 1440px):

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display | 40-64px | 500 | 1.02 | -0.035em |
| Heading | 32-46px | 500 | 1.0 | -0.03em |
| Subheading | 28px | 500 | 1.15 | -0.01em |
| Body Large | 14-18px fluid | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Nav / Button | 12-16px | 500 | 1.0 | 0.96px, uppercase |
| Caption | 13px | 400 | 1.4 | 0 |
| Fine | 12px | 400 | 1.6 | 0 |
| Eyebrow | 10-12px | 500 | normal | 0.1em, uppercase |

Display and heading weights are approximate.

Rules:

- Nav and buttons in uppercase with 0.96px tracking; hover bolds the label to 600 (the layout reserves the bold width so nothing shifts).
- Headlines in sentence case or lowercase, never uppercase.
- Fluid type uses `calc()` between 480 and 960px on mobile and 960 and 1920px on desktop.

## 4. Logo & Brand Mark

- **Grid mark:** a 44 x 44 unit square holding nine 12 x 12 squares with `rx="2"` and 4-unit gaps. One colour, usually black on light and white on dark. Rendered with `shape-rendering: crispEdges`.
- **Wordmark:** "block" in lowercase, a heavy geometric sans with round bowls, black.
- **Lockup:** the grid sits alone in the site header at 44px (`--logo-width: 44px`); the wordmark is used in press materials and the footer.
- **Motion:** on load, each square fades in with its own random delay up to about 0.33s.
- **Clear space:** at least one square's width around the mark (approximate).
- **Misuse:** do not colour individual squares, change the 3x3 count, round the squares into circles, or add the Square or Cash App logos inside the grid.

## 5. Components

### Buttons

Buttons are text-forward and uppercase:

```css
.button {
  display: inline-flex;
  height: 48px;                        /* 36, 45, 48 and 64px variants */
  padding: 0 24px;
  border: none;
  border-radius: 100px;                /* --theme-button-border-radius */
  background: #F2F2F2;                 /* gray-5 */
  color: #000000;
  font: 500 14px/1 "Cash Sans", Inter, sans-serif;
  letter-spacing: .96px;
  text-transform: uppercase;
  transition: background-color .1s ease-in-out;
}
.button:active { background: #D9D9D9; }  /* gray-15 */
.button:disabled { cursor: not-allowed; color: #999999; }

.button--inverse { background: #000000; color: #FFFFFF; }
```

### Tab buttons (signature)

```css
.tab-button {
  width: 100%;
  border: none;
  border-radius: 1000px;
  padding: 10px 16px;
  font: 700 14px/1.2 "Cash Sans", Inter, sans-serif;
  background: #FBFBFB; color: #000000;
}
.tab-button:not(.selected):hover { background: #D9D9D9; }
.tab-button.selected { background: #0D0D0D; color: #FFFFFF; }
```

### Global nav

- 74px tall header. Grid mark at left, uppercase nav items in black, a search icon and an "AI Chat" entry on the right.
- Hover bolds the item; active dims it to 60% opacity.
- On dark heroes the nav switches to `.inverse` (white text and mark).
- Mobile: grid mark, then a 24px menu icon that opens a full-screen list in large uppercase type.

### Brand cards

```css
.brand-card {
  border-radius: 12px;
  padding: 24px;
  min-height: 240px;
  color: #000;
  background: linear-gradient(135deg, #759AFB, #91ADF8 50%, #D4B5C5); /* Square */
}
.brand-card--cash-app {
  background: linear-gradient(135deg, #F1C36D, #EFA281 50%, #F2D272);
}
```

Each card shows the product name, a one-line description and an arrow link out.

### Inputs

- Pill inputs (`--input-border-radius: 1000px`), 48px tall, `#F2F2F2` fill, no border, black text; focus adds a 2px black ring (approximate).

### Editorial modules

- Long-form pages on a 12-column grid with 10px gutters and 20px margins, content width capped at 946px.
- Charts: blue positive line `#004BFF`, navy negative `#001340`, grid lines in warm light greys, axis labels 12px.
- Highlights: yellow or lilac background behind key phrases.

## 6. Layout & Spacing

- **Container:** `min(100vw, 1440px)`; 12 columns on desktop, 6 on mobile.
- **Gutter and margin:** 10px gutters, 20px outer margins (`--ei-gutter`, `--ei-margin`).
- **Content width:** about 946px for reading pages.
- **Fluid scale:** sizes interpolate between a 402px mobile context and a 1440px desktop context.
- **Density:** sparse home page, dense and well-structured editorial pages.

## 7. Depth, Elevation & Motion

- Flat. No box-shadows in the main CSS; separation comes from grey fills and hairlines.
- Overlays use black scrims at 70-90% opacity.
- Transitions: `background-color .1s ease-in-out` on buttons, `opacity .2s ease` for fades, `transform .2s linear` for icons.
- The grid mark's cell-by-cell fade-in is the only expressive animation.

## 8. Iconography & Imagery

- **Icons:** simple 24px line icons with about 1.5-2px strokes in `currentColor`; a pixel-art icon set (22 x 22, `crispEdges`) appears in some modules.
- **Photography:** documentary-style images of sellers, builders and communities; often full-bleed in news stories.
- **Product imagery:** each brand's own visuals (Square hardware, Cash App cards, TIDAL artwork, Bitkey wallet) stay in their native style inside cards.

## 9. Voice & Microcopy

- Plain, lowercase-friendly, mission-led. Short declaratives.
- Uppercase for navigation and buttons only.

Sample strings (from block.xyz on 2026-11-16):

- Hero: "block builds technology for economic empowerment"
- Nav: "NEWS", "IMPACT", "AI", "OPEN SOURCE", "BITCOIN", "CAREERS", "BUILDER FELLOWSHIP", "INVESTORS"
- Brands: "Square", "Cash App", "Afterpay", "TIDAL", "Bitkey", "Proto"
- Chat notice: "You are being connected to our automated chatbot which utilizes generative AI."

## 10. Do's and Don'ts

**Do**

- Keep the UI black, white and grey; let portfolio brands bring their own colour.
- Use the 3x3 grid mark at 44px in the header and animate it square by square.
- Set nav and buttons in uppercase Cash Sans (or Inter) with 0.96px tracking.
- Use pill shapes for buttons, tabs and inputs; 12px corners for cards.
- Use fluid type and a 12-column grid with narrow 10px gutters.

**Don't**

- Don't give Block a signature brand colour like Cash App green.
- Don't add drop shadows or gradients outside the brand cards.
- Don't set headlines in uppercase.
- Don't use the Square or Cash App logos as a stand-in for Block.
- Don't quote revenue, user counts or other figures without checking the latest investor materials.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Block, Inc. (block.xyz). Off-white page `#FBFBFB`, black text `#000000`, secondary text `#666666`, alternate sections `#EFEFEF`, hairlines `#E3E3E1`. Font: `"Cash Sans", Inter, Helvetica, Arial, sans-serif`. Headings weight 500 with tight negative tracking (-0.03em), body 16px weight 400, line-height 1.5. A 74px header shows a 3x3 grid of black 12px rounded squares (2px radius, 4px gaps) at 44px, then uppercase nav items (NEWS, IMPACT, AI, OPEN SOURCE, BITCOIN, CAREERS, INVESTORS) at 14px with 0.96px letter spacing; hover makes them 600. Buttons are uppercase pills (radius 100px), 48px tall, `#F2F2F2` fill with black text, active `#D9D9D9`; inverse buttons are black with white text. Segmented tabs are pills: unselected `#FBFBFB`, selected `#0D0D0D` with white text. No shadows. Portfolio cards have 12px radius and soft gradients (Square `#759AFB` to `#D4B5C5`, Cash App `#F1C36D` to `#EFA281`). Grid: max 1440px, 12 columns, 10px gutters, 20px margins. The hero is one lowercase sentence.

```css
:root {
  --block-black: #000000;
  --block-white: #FFFFFF;
  --block-gray-2: #FBFBFB;
  --block-gray-5: #F2F2F2;
  --block-paper: #EFEFEF;
  --block-gray-10: #E5E5E5;
  --block-gray-15: #D9D9D9;
  --block-gray-20: #CCCCCC;
  --block-gray-40: #999999;
  --block-gray-60: #666666;
  --block-gray-95: #0D0D0D;
  --block-ink: #191919;
  --block-warm-gray: #5F5E5A;
  --block-hairline: #E3E3E1;
  --block-signal-blue: #004BFF;
  --block-navy: #001340;
  --block-highlight-yellow: #FBE397;
  --block-highlight-lilac: #CDC4F5;
  --block-square-from: #759AFB;
  --block-square-to: #D4B5C5;
  --block-cash-from: #F1C36D;
  --block-cash-to: #EFA281;
  --block-font: "Cash Sans", "Inter", Helvetica, Arial, sans-serif;
  --block-font-mono: "Cash Sans Mono", "JetBrains Mono", monospace;
  --block-font-serif: "Exact Block", Georgia, serif;
  --block-radius-card: 12px;
  --block-radius-pill: 1000px;
  --block-gutter: 10px;
  --block-margin: 20px;
  --block-max-width: 1440px;
  --block-tracking-nav: 0.96px;
}
```

---

Values are observed from the public product; this file is an unofficial reference and is not affiliated with or endorsed by Block, Inc.

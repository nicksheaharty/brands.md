---
name: Goldman Sachs
shortName: Goldman
slug: goldman-sachs
url: https://goldmansachs.com
category: Finance
tagline: "Black serif wordmark, square corners and quiet GS blue on an editorial white page."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#000000"
    role: Logo, primary buttons, headlines (rendered at 95% opacity)
  - name: GS Blue
    hex: "#7297C5"
    role: Signature brand blue, feature panels, highlights
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Text
    hex: "#121212"
    role: Body text, dark section background
  - name: Navy
    hex: "#092C61"
    role: Deep blue for dark panels and data accents (approximate role)
  - name: Mid Blue
    hex: "#446EA6"
    role: Links on tinted panels, chart series
  - name: Mist
    hex: "#F7F7FA"
    role: Subdued section and card background
  - name: Rule
    hex: "#DCDCE0"
    role: Dividers and input borders
  - name: Stone
    hex: "#F0EBE6"
    role: Warm neutral background for editorial modules
  - name: Gold
    hex: "#F3C43F"
    role: Data visualisation accent, highlight marker
  - name: Success
    hex: "#398025"
    role: Positive change, success state
  - name: Warning
    hex: "#B2570D"
    role: Warning state
  - name: Error
    hex: "#C2170A"
    role: Negative change, errors
fonts:
  display:
    family: "GS Serif"
    fallback: "Source Serif 4"
    weights: [400, 500]
  body:
    family: "GS Sans"
    fallback: "Inter"
    weights: [300, 400, 500, 700]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 64, weight: 400, lineHeight: 1.05, tracking: "-0.01em" }
  - { role: Heading L, size: 44, weight: 400, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading M, size: 30, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 22, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 500, lineHeight: 1.4, tracking: "1px" }
radii: { sm: 0, md: 0, lg: 2, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Raised, value: "0px 4px 8px rgba(0,0,0,0.08)" }
  - { name: Menu, value: "0px 4px 16px rgba(0,0,0,0.12)" }
  - { name: Overlay, value: "0px 12px 32px -4px rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7FA"
  text: "#121212"
  muted: "#5C5C66"
  border: "#DCDCE0"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Goldman Sachs

## 1. Visual Theme & Atmosphere

goldmansachs.com reads like the front section of a serious financial newspaper. The page is white, the type is black, corners are square, and most of the colour comes from photography and one signature blue. Nothing is rounded, nothing bounces, and there are very few decorative flourishes. Authority comes from restraint and from the density of real content: outlooks, podcasts, deal spotlights and research.

What makes it recognisable:

- **The stacked serif wordmark.** "Goldman" over "Sachs" in a heavy, condensed serif. Since the 2022 refresh the wordmark appears in black on white rather than inside the old pale blue box.
- **GS Blue (`#7297C5`).** The soft, slightly grey sky blue that used to fill the logo box is still the brand colour. It shows up as full-bleed panels, highlight bars and the background behind featured content.
- **Square geometry.** Buttons, cards, inputs and image crops all use `border-radius: 0`. The only rounding is on circular icon buttons and media controls.
- **Serif and sans together.** GS Serif sets editorial headlines; GS Sans (a variable grotesk) handles navigation, body copy and UI. Eyebrows are small uppercase GS Sans with 1px tracking.
- **Editorial content grid.** Insights cards carry a series label ("Exchanges", "The Markets", "Talks at GS"), a format tag ("Podcast", "Video") and a date, like a media site.
- **Black primary actions.** The strongest button is solid black with white text, not blue.

Mood words: institutional, editorial, exact, calm, confident.

## 2. Color Palette & Roles

The site's own CSS is mostly neutral: text is pure black at 95% opacity (`rgba(0,0,0,0.95)`), secondary text drops to 60-80% opacity, and backgrounds alternate between white, `#F7F7FA` and full-bleed imagery. GS Blue is the one brand colour with real weight.

| Name | Hex | Role |
|---|---|---|
| Ink | `#000000` | Logo, primary buttons, headings at 95% opacity |
| Text | `#121212` | Body text, dark sections, overlay scrim base |
| GS Blue | `#7297C5` | Signature colour, feature panels, the classic logo box |
| Mid Blue | `#446EA6` | Secondary blue for links on tinted panels and charts |
| Navy | `#092C61` | Deep blue panels and chart series (approximate role) |
| Royal | `#094AAB` | Data series, focus accents in product UI (approximate role) |
| White | `#FFFFFF` | Page background, text on dark |
| Mist | `#F7F7FA` | Subdued section and card background |
| Rule | `#DCDCE0` | Dividers, input and card borders |
| Stone | `#F0EBE6` | Warm neutral for editorial modules |
| Gold | `#F3C43F` | Chart and highlight accent |

### Opacity text scale

| Token | Value | Use |
|---|---|---|
| Primary | `rgba(0,0,0,0.95)` | Headlines, nav labels, button text |
| Secondary | `rgba(0,0,0,0.80)` | Nav links, body |
| Tertiary | `rgba(0,0,0,0.60)` | Visited links, metadata, dates |
| On dark | `rgba(255,255,255,0.95)` | Text on black or image |
| Divider on dark | `rgba(255,255,255,0.22)` | Rules on dark panels |

### Semantic colors

These come from the GS UI toolkit status palette used across the site.

| State | Text / icon | Tint |
|---|---|---|
| Success | `#398025` | `#E9F4E6` |
| Warning | `#B2570D` | `#FAE7D8` |
| Error | `#C2170A` | `#FBEEED` |
| Info | `#446EA6` | `#F7F7FA` |

### Dark mode

There is no global dark theme. Dark moments are full-bleed video heroes with white text, black footer and drawer scrims (`rgba(18,18,18,0.8)`). On dark, use white text at 95%, rules at 22% white, and keep GS Blue as the only colour.

## 3. Typography

**Families:** GS Sans (variable, with a condensed cut) and GS Serif (variable, roman and italic), both custom and served from `cdn.gs.com/fonts`. Roboto Mono is loaded for numbers and code-like data. Legacy Sabon and Basis files are still declared for older templates.

**Licensing:** GS Sans and GS Serif are proprietary. Use **Inter** for GS Sans and **Source Serif 4** for GS Serif. Roboto Mono is free on Google Fonts.

```css
font-family: "GS Sans", "Inter", Helvetica, Arial, sans-serif;
font-variation-settings: "wght" 400;
```

**Weights:** the site sets weight through `font-variation-settings: "wght"`. Counted in the live CSS: 400 is most common, then 500, 300 and 700. Use 300 for large light numbers, 400 for body, 500 for UI labels and subheads, 700 sparingly.

### Scale

The sizes below are approximate; the site computes them in JavaScript per breakpoint. Icon sizes of 18, 20 and 22px are confirmed in CSS.

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Hero | GS Serif | 64px | 400 | 1.05 | -0.01em |
| Heading L | GS Serif | 44px | 400 | 1.1 | -0.01em |
| Heading M | GS Sans | 30px | 500 | 1.2 | 0 |
| Heading S | GS Sans | 22px | 500 | 1.3 | 0 |
| Body L | GS Sans | 18px | 400 | 1.5 | 0 |
| Body | GS Sans | 16px | 400 | 1.5 | 0 |
| Eyebrow | GS Sans | 12px | 500 | 1.4 | 1px, uppercase |
| Stat | GS Sans | 56px | 300 | 1.0 | -0.01em |

Mobile: hero drops to about 40px, Heading L to 32px.

### Rules

- Title Case is common for headlines and CTAs ("Read the 2027 Macro Outlook", "Explore All Insights").
- Section labels in the mega menu are uppercase with 1px tracking ("GLOBAL BANKING & MARKETS", "RESEARCH & PERSPECTIVES").
- Big statistics ("46K+") use light weight and tabular figures.
- Body letter-spacing is 0 everywhere.

## 4. Logo & Brand Mark

The logo is the stacked **Goldman / Sachs** wordmark in a bold, narrow serif. Historically it sat reversed out of a GS Blue box; the 2022 version used on the site drops the box and sets the wordmark in black.

- **Primary:** black wordmark on white (as in the site header).
- **Reversed:** white wordmark on black, photography or GS Blue.
- **Legacy:** white wordmark inside a `#7297C5` box. Still recognised, still seen in older materials.
- **Monogram:** a black serif "GS" is the favicon and small-format mark.
- **Clear space:** at least the height of the "S" in Sachs on every side (approximate).
- **Minimum size:** the header renders it about 53px wide on mobile and 63px on desktop.

Misuse:

- Do not set "Goldman Sachs" in a substitute serif to fake the logo.
- Do not put the black wordmark on GS Blue at low contrast; reverse it to white.
- Do not stretch, outline or add shadows.
- Do not change the stacking to a single line.

## 5. Components

### Buttons

All buttons are square (`border-radius: 0`) with a 1px border, letter-spacing 0, and GS Sans 500.

| Variant | Background | Text | Border | Padding (lg / md / sm) |
|---|---|---|---|---|
| Primary | `#000000` | `rgba(255,255,255,0.95)` | 1px transparent | 12px 15px / 9px 11px / 6px 7px |
| Secondary | transparent | `rgba(0,0,0,0.95)` | 1px `rgba(0,0,0,0.95)` | same |
| Tertiary / text | transparent | `rgba(0,0,0,0.95)` | 1px transparent | same |
| On dark | `#FFFFFF` | `rgba(0,0,0,0.95)` | 1px transparent | same |

States, taken from the live CSS:

- Hover on transparent buttons: background `rgba(0,0,0,0.04)`. Focus-visible: `rgba(0,0,0,0.06)`. Active: `rgba(0,0,0,0.08)`.
- Hover on white buttons: `rgb(245,245,245)`, focus `rgb(240,240,240)`, active `rgb(235,235,235)`.
- Focus ring: `box-shadow: 0 0 0 1px #fff, 0 0 0 2px #fff` paired with an outline, or an inset 2px white ring on dark.
- Text CTAs carry a right arrow icon (`arrow-right-alt` or `east` from Material Symbols).

```css
.gs-btn {
  font: 500 16px/1.25 var(--brand-font);
  border: 1px solid transparent;
  border-radius: 0;
  padding: 12px 15px;
  background: #000;
  color: rgba(255,255,255,.95);
  transition: background-color 150ms linear, opacity 150ms linear;
}
.gs-btn--secondary { background: transparent; color: rgba(0,0,0,.95); border-color: rgba(0,0,0,.95); }
.gs-btn--secondary:hover { background: rgba(0,0,0,.04); }
```

### Navigation

- Header height 64-72px, white, logo left. Primary links: "What We Do", "Insights", "Our Firm", "Careers". Utility links: "Investor Relations", "Pressroom", "Worldwide", "Alumni", "Client Login".
- Nav link text `rgba(0,0,0,0.80)`, 16px. Hover drops opacity to 0.7, active to 0.62. A 2px underline marks the selected item.
- Mega menu: full-width white panel. Left column has a short paragraph and a CTA ("Explore Our Businesses"); right columns list links under uppercase group labels. A featured item may sit in a GS Blue panel.
- Mobile: right-side drawer with a `rgba(18,18,18,0.8)` scrim, opening over 300ms.

### Insight cards

The signature component. Each card is a square-cornered image or video still, then a series label, a title in GS Sans 500 18-22px, and a meta row: format ("Podcast", "Video", "Article"), date ("Nov 13, 2026") and duration ("21:49").

```css
.gs-card { background: #fff; border-radius: 0; }
.gs-card__img { aspect-ratio: 16/9; object-fit: cover; }
.gs-card__series { font: 500 12px/1.4 var(--brand-font); text-transform: uppercase; letter-spacing: 1px; color: rgba(0,0,0,.6); }
.gs-card__title { font: 500 20px/1.3 var(--brand-font); color: rgba(0,0,0,.95); margin: 8px 0; }
.gs-card__meta { font: 400 14px/1.4 var(--brand-font); color: rgba(0,0,0,.6); }
```

### Hero

Full-bleed video or photograph (`object-fit: cover`), a dark gradient at the bottom, and a white text block: eyebrow ("2027 Outlooks"), serif headline, one-sentence lead, and a white square button. A small play/pause control sits in a corner.

### Inputs

- Square, 1px `#DCDCE0` border, 44-48px tall, 16px text, white fill.
- Focus: border to black, no glow.
- Labels 14px 500 above the field. Errors in `#C2170A` with a small icon.
- Newsletter signup ("Briefings") uses an email field with a black "Subscribe Now" button.

### Modals

White, square, max width about 640px, `Overlay` shadow, `rgba(18,18,18,0.8)` scrim. Close icon top right.

## 6. Layout & Spacing

- **Max width:** 1440px content container (confirmed in CSS), centred, with full-bleed media allowed to go edge to edge.
- **Grid:** 12 columns; card rows use 3 or 4 columns on desktop, 2 on tablet, 1 on mobile.
- **Breakpoints:** 600, 768, 1024, 1280, 1440 and 1600px (all present in the CSS).
- **Gutters:** 16px mobile, 24px tablet, 32px desktop (approximate).
- **Section spacing:** 64-96px on desktop, 48px on mobile.
- **Density:** medium. Lots of content per section but generous whitespace around each block.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96.

## 7. Depth, Elevation & Motion

### Shadows

Shadows are short and neutral. Most surfaces are flat.

| Token | Value |
|---|---|
| 1 | `0px 4px 4px rgba(0,0,0,0.04)` |
| 2 | `0px 4px 8px rgba(0,0,0,0.08)` |
| 3 | `0px 4px 12px rgba(0,0,0,0.12)` |
| 4 | `0px 4px 16px rgba(0,0,0,0.12)` |
| 5 | `0px 12px 32px -4px rgba(0,0,0,0.16)` |

Each token has upward and sideways twins (for bottom sheets and drawers), for example `0px -4px 8px 0px rgba(0,0,0,0.08)`.

### Motion

- Most colour transitions are linear (`cubic-bezier(0,0,1,1)`), around 150ms.
- Drawers and overlays: 300ms `cubic-bezier(0.32, 0.94, 0.60, 1.00)`.
- Standard ease-in-out `cubic-bezier(0.42, 0, 0.58, 1)` for accordions.
- Layout container transitions `all 0.25s ease-in-out`.
- Hero videos autoplay muted with a visible pause control; respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** Material Symbols (filled and outlined, viewBox `-48 -1008 1056 1056`), 18-22px. Common glyphs: `keyboard-arrow-down`, `search`, `open-in-new`, `arrow-right-alt`, `east`, `play-arrow`, `volume-up`.
- **Photography:** documentary and corporate. Executives on stage, trading floors, city skylines, clients in their own settings. Natural colour, cropped square-edged.
- **Video:** podcast and interview stills with a play icon overlay; durations shown in the meta row.
- **Charts:** clean line and bar charts in the blue family with gold and green as secondary series.
- **No illustration-heavy pages.** Abstract imagery is rare.

## 9. Voice & Microcopy

Formal, measured and specific. It speaks about clients, capital and the firm's people. Superlatives exist but are attached to the firm's own mission statements rather than to products.

- Title Case for headlines and CTAs.
- CTAs are verbs with a precise object: "Read the 2027 Macro Outlook", "Explore All Insights", "Watch Now", "See Our Expertise in Action", "Subscribe Now".
- Section labels are nouns: "What We Do", "Insights", "Our Firm", "Careers".

Sample strings seen on the live site today:

- "Analysis and perspectives on the global economy and markets, from across Goldman Sachs"
- "Where the Best Get Better"
- "Briefings from Goldman Sachs: Our Weekly Newsletter"
- "Deal Spotlight"
- "Podcast · Nov 13, 2026"

## 10. Do's and Don'ts

**Do**

- Keep everything square: buttons, cards, images, inputs.
- Use black for the primary action and GS Blue for brand moments.
- Pair a serif headline with sans UI and body.
- Show series, format and date on every content card.
- Use opacity steps of black (95, 80, 60%) for text hierarchy.
- Let photography carry colour.

**Don't**

- Don't round corners or use pill buttons.
- Don't use bright or saturated blues for actions; GS Blue is muted and used for surfaces.
- Don't add playful illustrations, emoji or gradients.
- Don't use heavy drop shadows on cards.
- Don't put the old blue-box logo next to the new black wordmark.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of goldmansachs.com. White page, text in black at 95% opacity (`rgba(0,0,0,0.95)`), secondary text at 80% and 60%. Headlines in a serif ("GS Serif", fallback "Source Serif 4") at weight 400, UI and body in "GS Sans" (fallback Inter) at 400-500. Everything has square corners: `border-radius: 0` for buttons, cards, inputs and images. Primary buttons are solid black with white text, padding 12px 15px; secondary buttons are transparent with a 1px black border; hovers add `rgba(0,0,0,0.04)`. Use GS Blue `#7297C5` as the one brand colour for feature panels, never for small text. Subdued sections use `#F7F7FA`, rules `#DCDCE0`. Content cards show a 16:9 image, an uppercase 12px series label with 1px tracking, a 20px title, and a meta line with format and date. Max width 1440px, 12-column grid, 64-96px between sections. Shadows are small and neutral (`0px 4px 8px rgba(0,0,0,0.08)`). Copy is formal and in Title Case.

```css
:root {
  --brand-ink: #000000;
  --brand-text: rgba(0,0,0,0.95);
  --brand-text-secondary: rgba(0,0,0,0.80);
  --brand-text-tertiary: rgba(0,0,0,0.60);
  --brand-text-dark: #121212;
  --brand-blue: #7297C5;
  --brand-blue-mid: #446EA6;
  --brand-navy: #092C61;
  --brand-bg: #FFFFFF;
  --brand-surface: #F7F7FA;
  --brand-stone: #F0EBE6;
  --brand-border: #DCDCE0;
  --brand-gold: #F3C43F;
  --brand-success: #398025;
  --brand-warning: #B2570D;
  --brand-error: #C2170A;
  --brand-scrim: rgba(18,18,18,0.8);
  --brand-font: "GS Sans", "Inter", Helvetica, Arial, sans-serif;
  --brand-font-serif: "GS Serif", "Source Serif 4", Georgia, serif;
  --brand-font-mono: "Roboto Mono", ui-monospace, monospace;
  --brand-radius: 0;
  --brand-hover: rgba(0,0,0,0.04);
  --brand-pressed: rgba(0,0,0,0.08);
  --brand-shadow-sm: 0px 4px 8px rgba(0,0,0,0.08);
  --brand-shadow-md: 0px 4px 16px rgba(0,0,0,0.12);
  --brand-shadow-lg: 0px 12px 32px -4px rgba(0,0,0,0.16);
  --brand-ease-drawer: cubic-bezier(0.32, 0.94, 0.60, 1.00);
  --brand-max-width: 1440px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Goldman Sachs.

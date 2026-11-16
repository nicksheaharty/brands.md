---
name: A24
slug: a24
url: https://a24films.com
category: Studio
tagline: "Warm black, square corners, one grotesque and the poster doing all the talking."
updated: 2026-11-16
logoBackground: "#0E0E0D"
theme: dark
colors:
  - name: Warm Black
    hex: "#0E0E0D"
    role: Dark theme background, html background, light theme text
  - name: White
    hex: "#FFFFFF"
    role: Dark theme text, light theme background, logo on dark
  - name: Bone
    hex: "#F2F0ED"
    role: Warm-light background, warm-dark text, hover fills
  - name: AAA24 Burgundy
    hex: "#8C2F45"
    role: AAA24 membership surfaces and upsells
  - name: Warm Grey
    hex: "#B0ACA5"
    role: Warm-grey theme background
  - name: Ash
    hex: "#B2ADA6"
    role: Subtle text on dark
  - name: Near Black
    hex: "#141313"
    role: Subtle background on dark (cards, rows)
  - name: Charcoal Line
    hex: "#31302E"
    role: Default border on dark
  - name: Stone Line
    hex: "#D6D4D1"
    role: Default border on light
  - name: Taupe
    hex: "#6F6D6A"
    role: Subtle text on light
  - name: Callout Gold
    hex: "#B48F0B"
    role: Callout text and notices
  - name: Error
    hex: "#F95936"
    role: Form errors, destructive text
  - name: Success
    hex: "#27BB0D"
    role: Success text on light
  - name: Success Bright
    hex: "#95FB69"
    role: Success text on dark
fonts:
  display:
    family: "PP Neue Montreal"
    fallback: "Inter"
    weights: [420, 485]
  body:
    family: "PP Neue Montreal"
    fallback: "Inter"
    weights: [375, 420, 485]
  mono:
    family: "PP Neue Montreal Mono"
    fallback: "IBM Plex Mono"
    weights: [420, 485]
typeScale:
  - { role: Display, size: 96, weight: 485, lineHeight: 0.87, tracking: "-0.05em" }
  - { role: Title, size: 42, weight: 485, lineHeight: 1.0, tracking: "-0.03em" }
  - { role: Card Title, size: 24, weight: 485, lineHeight: 1.1, tracking: "-0.015em" }
  - { role: Lead, size: 18, weight: 420, lineHeight: 1.3, tracking: "-0.005em" }
  - { role: Body, size: 15, weight: 420, lineHeight: 1.4, tracking: "0" }
  - { role: Mono Label, size: 12, weight: 485, lineHeight: 1.1, tracking: "0.01em" }
  - { role: Caption, size: 12, weight: 420, lineHeight: 1.4, tracking: "0.005em" }
radii: { sm: 1, md: 2, lg: 3, pill: 9999 }
spacing: [5, 10, 15, 20, 30, 40, 60, 100]
shadows: []
preview:
  bg: "#0E0E0D"
  surface: "#141313"
  text: "#FFFFFF"
  muted: "#B2ADA6"
  border: "#31302E"
  accent: "#FFFFFF"
  accentText: "#0E0E0D"
  radius: 0
  buttonStyle: outline
---

# A24

## 1. Visual Theme & Atmosphere

A24 looks like a well-printed film program. The site (a24films.com) is warm black or white, almost colourless, set in one neo-grotesque (PP Neue Montreal) with a mono companion for labels, and laid out on a strict 12-column grid with square corners. The colour comes from the films: posters, stills and a per-title accent colour that a page can switch on.

What makes it recognisable:

- **Warm neutrals, not pure grey.** Backgrounds are `#0E0E0D` and `#FFFFFF`/`#F2F0ED`; greys lean slightly brown (`#B2ADA6`, `#6F6D6A`, `#31302E`).
- **Poster-led.** Every film is a large poster or still with its title in plain type underneath. Title logos from the posters are not re-created in the UI.
- **Huge, quiet type.** Film names on hero pages run to 96px in a regular-to-medium weight with tight negative tracking, not bold.
- **Zero radius.** `--border-radius-button: 0`. Tags and thumbnails get 1px, callouts 2px, tabs 2.5px. Nothing looks like an app.
- **Hairlines.** Borders are 1px and often 0.5px (`--border-width-thin: .5px`). Lists are separated by rules, not cards.
- **Mono labels.** Years, formats and section kickers ("2026", "Now Playing", "Season 2") are set in PP Neue Montreal Mono.
- **Per-film theming.** Pages can swap `--color-accent` to a film's key colour and switch to an accent background (`.theme--dark--accent-bg`).

Density: medium-low. Generous gutters, big images, short text blocks capped at `50em`.

## 2. Color Palette & Roles

### Neutrals (from `--color-warm-neutral-*`)

| Name | Token | Hex | Role |
| --- | --- | --- | --- |
| Warm Black | 1000 | `#0E0E0D` | Dark background, light-theme text |
| Near Black | 975 | `#141313` | Subtle background on dark |
| Charcoal Line | 950 | `#31302E` | Border on dark |
| Dark Taupe | 925 | `#42403D` | Subtle text on warm-grey |
| Taupe Deep | 900 | `#595753` | Subtler text on light |
| Taupe | 800 | `#6F6D6A` | Subtle text on light |
| Mid Warm | 700 | `#8F8B85` | Subtlest text on light |
| Warm Grey | 450 | `#B0ACA5` | Warm-grey theme background |
| Ash | 400 | `#B2ADA6` | Subtle text on dark |
| Stone | 300 | `#C7C3BD` | Pop background on warm-grey |
| Stone Line | 200 | `#D6D4D1` | Border on light |
| Linen | 100 | `#E8E6E2` | Subtle background on warm-light |
| Bone | 50 | `#F2F0ED` | Warm-light background, text on warm-dark |
| Paper | 25 | `#FCFBFA` | Subtle background on white |
| White | | `#FFFFFF` | Light background, dark text |

A cool grey scale exists for the shop (`#F1F1F1`, `#E8E8E8`, `#D6D6D6`, `#A6A6A6`, `#8F8F8F`, `#6B6B6B`); keep it to commerce screens.

### Brand and semantic

| Name | Hex | Role |
| --- | --- | --- |
| AAA24 Burgundy | `#8C2F45` | AAA24 membership blocks and upsell borders |
| Callout Gold | `#B48F0B` | Callout text |
| Error | `#F95936` | Errors |
| Success | `#27BB0D` | Success on light |
| Success Bright | `#95FB69` | Success on dark |
| Overlay | `#837E7733` / `#837E771A` | Hairline overlays over imagery |

### Themes

The site defines named themes; each sets text, subtle text, background and border:

| Theme | Background | Text | Subtle | Border |
| --- | --- | --- | --- | --- |
| `theme--dark` (default for most sections) | `#0E0E0D` | `#FFFFFF` | `#B2ADA6` | `#31302E` |
| `theme--warm-dark` | `#0E0E0D` | `#F2F0ED` | `#B2ADA6` | `#31302E` |
| `theme--light` | `#FFFFFF` | `#0E0E0D` | `#6F6D6A` | `#D6D4D1` |
| `theme--warm-light` | `#F2F0ED` | `#0E0E0D` | `#6B6966` | `#D6D4D1` |
| `theme--warm-grey` | `#B0ACA5` | `#0E0E0D` | `#42403D` | `#9E9B94` |
| `--accent-bg` | film accent | contrast colour | accent mixed 55% | text at 18% |

Subtle text on accent themes is computed with `oklch(from var(--color-accent) ...)`, so tints always match the film colour.

## 3. Typography

- **PP Neue Montreal** (Pangram Pangram) is the only text face, loaded as a variable font (weights 100-900). A24 uses unusual in-between weights: thin 270, light 375, regular 420, medium/heading 485, semibold 535, bold 570.
- **PP Neue Montreal Mono** for labels, metadata and numerals (weights 200-800, same in-between values).
- Both are commercial fonts. Fallbacks: **Inter** for sans, **IBM Plex Mono** for mono. The site ships metric-adjusted Arial and Courier New fallbacks (`size-adjust: 95.9%`).
- Root size is `62.5%`, so `1rem = 10px`; sizes are multiplied by `--type-scaling` (0.875 to 1.25 by breakpoint).

### Scale

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Display | 96px desktop, 64px mobile | 485 | 0.87-1.1 | Film titles on hero, "All films" |
| Title | 42px desktop, 32px mobile | 485 | 1.0 | Row titles in film index |
| Card title | 24px (21px mobile) | 485 | 1.1 | Names under posters, TV seasons |
| Lead | 18px | 420 | 1.3 | Index rows, intro text |
| Body | 14-16px | 420 | 1.4 | Synopsis, credits |
| Mono label | 12px | 485 | 1.1 | Uppercase kickers, years, CTA text |
| Caption | 12px | 420 | 1.4 | Legal, form consent |

### Rules

- Tracking is negative and grows with size: about `-0.05em` at 96px, near 0 at body sizes. Mono uppercase gets slight positive tracking at 12px.
- Line height tightens with size (`--type-leading-heading` clamps from 1.1 down to 0.87).
- Headings are regular or medium weight; never 700.
- Mono word spacing is pulled in (`--type-word-spacing-mono: -.25em`).
- Sentence or title case for titles as the film is billed; uppercase only in mono labels.
- Body text max width `50em`.

## 4. Logo & Brand Mark

- **Wordmark:** "A24" in a high-contrast deco display face, designed by GrandArmy in 2012 to feel modern while echoing golden-age Hollywood. Thick-thin strokes, a ball-terminal "2", and hairline extensions: the A's left stroke and the 4's diagonal run out as thin lines and a hairline baseline rule links the 2 and 4.
- **Colour:** single colour only. White on warm black in the site header, black on white or poster colours elsewhere. On posters it is often tiny, centred at the top or in the billing block.
- **Clear space:** the height of the "2" bowl on all sides.
- **Minimum size:** 40px wide on screen; the hairlines disappear below that.
- **Hover:** the site header logo swaps to an animated hover SVG; keep the static mark as the base state.

Misuse: don't bold, outline or fill the hairlines, don't add colour gradients, don't separate the characters, and don't set "A24" in Neue Montreal as a logo substitute.

## 5. Components

### Buttons

Square, bordered, typographic. The button inherits theme colours.

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  height: 44px; padding: 0 16px;           /* --button-padding-inline: var(--space-16) */
  border: 1px solid var(--theme-text-default);
  border-radius: 0;
  background: transparent; color: var(--theme-text-default);
  font: 485 12px/1.1 "PP Neue Montreal Mono", "IBM Plex Mono", monospace;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(.455,.03,.515,.955), color 250ms;
}
.btn:hover { background: var(--theme-text-default); color: var(--theme-background-default); }
.btn--solid { background: var(--theme-text-default); color: var(--theme-background-default); }
.btn--solid:hover { background: transparent; color: var(--theme-text-default); }
.btn--ghost { border-color: transparent; }
.btn--ghost:hover { background: var(--theme-background-subtle); }
.btn:disabled { opacity: .43; cursor: default; }
```

"Buy Tickets", "Get Updates", "Watch at home", "Become a member" and "Listen" all use this pattern. Ticketing screens can tint the border with the film accent (`--a24-button-accent`).

### Inputs

Newsletter field ("Subscribe for more A24."): 44px tall, no fill, 1px bottom border in `--theme-border-default`, 16px sans text, placeholder in subtle text. The "Sign up" button attaches flush to the right edge, square. Consent line below in 12px subtle text with underlined links.

### Poster cards

- Poster or still with 1px radius (`--border-radius-media-thumb`), no border or shadow.
- Title under the art in 24px 485; year in mono 12px subtle text on the same line or above.
- Hover: art crossfades to a still or trailer loop; title stays put. No scaling.

### Film index rows

"All films" lists one film per row: title at 42px on the left (5 columns), year and status in mono on the right, separated by 0.5-1px hairlines. Hovering a row shows a floating poster thumbnail following the cursor.

### Tabs and tags

- Tabs: text links with 2.5px radius pill highlight on the active item, `--theme-background-subtle` fill.
- Tags: 1px radius, 1px border at 18% text alpha, mono 12px uppercase, padding 2px 6px.

### Callouts

2px radius, `--theme-background-subtle` fill, 15px padding, mono kicker in Callout Gold `#B48F0B`.

### Navigation

- Top bar: A24 logo left, links "Film", "TV", "Music", "Live", "Notes", "Shop" in 15-16px sans, right side "Buy Tickets" as a bordered button.
- Sticky, warm black, 1px bottom border `#31302E` once scrolled.
- Footer lists "Jobs", "Press", "App", "Membership", "Auctions" and social links in plain text columns, then "© 2026 A24 Films LLC All rights reserved."

### AAA24 membership block

Burgundy `#8C2F45` panel or border, headline "Your ticket to everything A24.", body in Bone, square "Become a member" button in Bone with burgundy text.

### Carousels

Slides snap to grid columns; arrows are small square buttons with 2px block padding, sitting in the outer gutter.

## 6. Layout & Spacing

- **Grid:** 12 columns, max width 1800px (`--grid-max-width: 180rem`).
- **Outer gutter:** 30px desktop (`--space-12`), 15px mobile (`--space-6`).
- **Column gutter:** 15px desktop, 7.5px mobile.
- **Spacing scale:** steps of 2.5px under the hood (`--space-1` = 2.5px at 1rem=10px); in practice 5, 10, 15, 20, 30, 40, 60, 100px.
- **Sections** are full-bleed bands, each with its own theme class.
- **Art:** 16:9 for stills and trailers (`--art-ratio: 16 / 9`), 2:3 for posters.
- **Text measure:** 50em max.

## 7. Depth, Elevation & Motion

- **Flat.** No box shadows on cards or buttons. Separation is done with themes and hairlines.
- **Borders:** 1px default, 0.5px thin; overlay hairlines over imagery use `#837E7733`.
- **Durations:** fast 150ms, medium 250ms, slow 400ms.
- **Easing:** a full Penner set is defined. Defaults: `cubic-bezier(.455,.03,.515,.955)` (in-out power1) for UI, `cubic-bezier(.19,1,.22,1)` (out expo) for reveals, `cubic-bezier(.04,1.15,.4,.99)` (ease-out-slow) for large art moves.
- **Motion style:** crossfades and slow reveals; titles may animate in by glyph. No bounce, no parallax gimmicks.

## 8. Iconography & Imagery

- **Icons:** minimal 16px line icons with non-scaling strokes (arrows, play, close, plus). Same colour as text.
- **Imagery:** poster art and film stills at large size, uncropped titles. Grain, flash photography and odd framing are part of the A24 poster language; don't clean them up.
- **Per-film colour:** pull one accent from the poster and apply it through `--color-accent`, leaving the rest neutral.
- **No illustrations, no stock photos, no gradients** in UI chrome.

## 9. Voice & Microcopy

Dry, short and a little wry. Lowercase energy without actually being lowercase.

- Newsletter: "Subscribe for more A24."
- Membership: "Your ticket to everything A24." / "AAA24 members get free tickets on opening weekend, access to special events, monthly credits, Shop discount, exclusive content and more."
- Sections: "In theaters", "Now Playing", "Watch at home", "Latest in TV", "Music", "Live".
- CTAs: "Buy Tickets", "Get Updates", "Become a member", "Listen", "Get Tickets", "Sign up".
- Casing: sentence case for headings and most buttons; uppercase only in mono labels.
- No exclamation marks, no superlatives.

## 10. Do's and Don'ts

**Do**

- Use warm black `#0E0E0D` and white/Bone as the only surfaces.
- Keep every corner square; 1-3px is the most rounding allowed.
- Set big titles in a regular-to-medium grotesque with negative tracking.
- Use a mono face for years, labels and button text.
- Let posters and stills set the colour.
- Separate content with hairlines and whitespace.

**Don't**

- Don't use bold or heavy weights for headlines.
- Don't add shadows, glows or rounded cards.
- Don't introduce a fixed brand accent colour; burgundy is only for AAA24.
- Don't use pure grey neutrals where warm ones exist.
- Don't redraw film title logos in UI type.
- Don't write hype copy.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of A24. Background warm black `#0E0E0D`, text `#FFFFFF`, subtle text `#B2ADA6`, borders `#31302E` (light sections: `#FFFFFF` or `#F2F0ED` background, `#0E0E0D` text, `#6F6D6A` subtle, `#D6D4D1` borders). One sans, PP Neue Montreal (fallback Inter) at weights 420 and 485 only, and a mono, PP Neue Montreal Mono (fallback IBM Plex Mono), for years, labels and button text in 12px uppercase. Film titles are huge: 96px, weight 485, line-height 0.9, letter-spacing -0.05em. Use a 12-column grid, max 1800px, 30px outer gutters. Everything is square: buttons are 44px tall, 1px border in the text colour, 0 radius, transparent fill that inverts on hover over 250ms. Posters and stills fill the layout with 1px radius and no shadow; titles sit under them in 24px. Separate rows with 1px or 0.5px hairlines. Optionally theme a page with one accent colour pulled from the film's poster. No shadows, no gradients, no bold.

```css
:root {
  --brand-black: #0E0E0D;
  --brand-black-subtle: #141313;
  --brand-white: #FFFFFF;
  --brand-bone: #F2F0ED;
  --brand-linen: #E8E6E2;
  --brand-warm-grey: #B0ACA5;
  --brand-ash: #B2ADA6;
  --brand-taupe: #6F6D6A;
  --brand-line-dark: #31302E;
  --brand-line-light: #D6D4D1;
  --brand-aaa24: #8C2F45;
  --brand-callout: #B48F0B;
  --brand-error: #F95936;
  --brand-success: #27BB0D;
  --brand-accent: var(--film-accent, #FFFFFF);
  --brand-font: "PP Neue Montreal", "Inter", Arial, sans-serif;
  --brand-font-mono: "PP Neue Montreal Mono", "IBM Plex Mono", "Courier New", monospace;
  --brand-weight-regular: 420;
  --brand-weight-medium: 485;
  --brand-radius: 0;
  --brand-radius-thumb: 1px;
  --brand-radius-callout: 2px;
  --brand-border: 1px;
  --brand-border-thin: 0.5px;
  --brand-grid-max: 1800px;
  --brand-gutter: 30px;
  --brand-gutter-mobile: 15px;
  --brand-duration-fast: 150ms;
  --brand-duration: 250ms;
  --brand-duration-slow: 400ms;
  --brand-ease: cubic-bezier(.455, .03, .515, .955);
  --brand-ease-out: cubic-bezier(.19, 1, .22, 1);
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by A24.

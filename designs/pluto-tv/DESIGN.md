---
name: Pluto TV
slug: pluto-tv
url: https://pluto.tv
category: Streaming
tagline: "Black canvas, highlighter yellow, and a channel guide that scrolls like cable."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Pluto Yellow
    hex: "#FFF200"
    role: Logo, primary buttons, focus and selected states, links
  - name: Singularity Black
    hex: "#000000"
    role: Main canvas, player, guide background
  - name: Galaxy
    hex: "#121212"
    role: Page canvas on detail and marketing pages, inverse text
  - name: Dark Matter
    hex: "#1D1D1D"
    role: Guide cells, cards, sticky guide header
  - name: Smoke
    hex: "#2D2D2D"
    role: Hover and focused guide cells, strong surfaces
  - name: Snow White
    hex: "#FFFFFF"
    role: Primary text, progress bar fill
  - name: Yellow Hover
    hex: "#E6DA00"
    role: Primary button hover
  - name: Yellow Pressed
    hex: "#B3A900"
    role: Primary button pressed
  - name: Nigel
    hex: "#393939"
    role: Disabled fills, soft borders
  - name: Solar Cloud
    hex: "#CDCDCD"
    role: Secondary text, guide row text at rest
  - name: Shades
    hex: "#999999"
    role: Tertiary text, input borders
  - name: Critical
    hex: "#E42121"
    role: Errors, critical badges
  - name: Alert Green
    hex: "#00D86D"
    role: Success text and borders
  - name: P+ Blue
    hex: "#0064FF"
    role: Paramount+ upsell gradient start
  - name: P+ Blue Dark
    hex: "#0037C5"
    role: Paramount+ upsell gradient end
fonts:
  display:
    family: "Pluto TV Sans"
    fallback: "Figtree"
    weights: [700, 800, 900]
  body:
    family: "Pluto TV Sans"
    fallback: "Figtree"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 60, weight: 900, lineHeight: 1.05, tracking: "0" }
  - { role: Page Title, size: 32, weight: 800, lineHeight: 1.15, tracking: "0" }
  - { role: Section Title, size: 28, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Tile Title, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Nav Button, size: 14, weight: 600, lineHeight: 1.14, tracking: "0.4px" }
  - { role: Meta, size: 12, weight: 600, lineHeight: 1.33, tracking: "0.2px" }
radii: { sm: 4, md: 6, lg: 10, xl: 16, pill: 500 }
spacing: [4, 8, 12, 16, 20, 24, 40, 96]
shadows:
  - { name: Focus Inset, value: "inset 0 0 0 2px #FFF200" }
  - { name: Popover, value: "0 5px 20px 0 rgba(0,0,0,0.5)" }
  - { name: Panel, value: "5px 10px 32px 0 rgba(0,0,0,0.35)" }
preview:
  bg: "#000000"
  surface: "#1D1D1D"
  text: "#FFFFFF"
  muted: "#CDCDCD"
  border: "#393939"
  accent: "#FFF200"
  accentText: "#000000"
  radius: 6
  buttonStyle: pill
---

# Pluto TV

## 1. Visual Theme & Atmosphere

Pluto TV is free, ad-supported live TV: hundreds of themed channels laid out in a scrolling guide that looks and behaves like a cable grid. The 2024 refresh kept the black-and-yellow identity and swapped the old planet-and-wordmark logo for a single yellow circle with "pluto" knocked out of it and a small "tv" floating at its shoulder.

What makes it recognisable:

- **Black and highlighter yellow.** The canvas is pure black (`#000000`) or Galaxy (`#121212`). Yellow `#FFF200` is the only brand colour in the chrome: logo, primary button, focus ring, selected tab, link.
- **The guide is the home page.** `/live-tv` opens straight into a video player above a vertical list of channel rows. Each row is a channel logo cell plus a horizontal strip of programme cells running into the future.
- **Lean-back first.** Everything is sized for remote control: 112px rows, big focus rings, keyboard hints ("Press up or down to move between channels").
- **Greys with space names.** The token set calls its greys Galaxy, Dark Matter, Smoke, Nigel, Celestial Sphere, Solar Cloud. Use them as a stepped neutral ramp.
- **Paramount+ blue as a second voice.** Upsell modules and P+ channels use a blue gradient (`#0064FF` to `#0037C5`). Keep it to those surfaces.

Density: high in the guide (lots of rows and small type), low on marketing and detail pages (large art, big headline).

## 2. Color Palette & Roles

### Brand and interaction

| Name | Hex | Role |
| --- | --- | --- |
| Pluto Yellow | `#FFF200` | `--color-brand-primary`, primary button fill, focus border, selected tab and fg, links |
| Yellow 550 | `#E6DA00` | Primary button hover |
| Yellow 650 | `#B3A900` | Primary button pressed |
| Yellow 450 | `#FFF31A` | Light step for highlights |
| Yellow 150 | `#FFFBB3` | Very light tint (rare) |
| P+ Blue | `#0064FF` | Paramount+ gradient start, P+ focus border |
| P+ Blue Dark | `#0037C5` | Gradient end, outlined P+ buttons |
| Brand gradient (P+) | `linear-gradient(225deg, #0064FF, #0037C5)` | Upsell buttons and progress bars in the P+ theme |

### Neutrals (dark theme)

| Token | Hex | Use |
| --- | --- | --- |
| Singularity / canvas | `#000000` | `--color-ui-canvas`, player and guide page |
| Galaxy | `#121212` | `--color-bg-darker`, page canvas on some routes, text on yellow buttons in places |
| Dark Matter | `#1D1D1D` | `--color-bg-dark`, guide cells, sticky guide bar |
| Dark Matter 90 | `rgba(29,29,29,0.9)` | Translucent headers and menus |
| Smoke | `#2D2D2D` | `--color-bg-strong`, hovered or focused cell |
| Nigel | `#393939` | Disabled fill, soft border |
| Celestial Sphere | `#666666` | Subtle borders, input border |
| Shades | `#999999` | Tertiary text |
| Meteor | `#AAAAAA` | Outlined secondary button text and border |
| Solar Cloud | `#CDCDCD` | Secondary text, guide text at rest |
| Snow White | `#FFFFFF` | Primary text |

Text opacity tokens: secondary label `hsla(0,0%,100%,0.85)`, tertiary `hsla(0,0%,100%,0.75)`. Borders: weak `hsla(0,0%,100%,0.2)`, subtle `0.4`, medium `0.6`, strong `0.75`.

### Semantic

| Name | Hex | Use |
| --- | --- | --- |
| Critical | `#E42121` | Error fill and text (`#EB4545` / `#E8726B` for text on dark) |
| Success | `#00D86D` | Success text and borders on dark (`#008241` fill) |
| Info | `#4197FE` | Focus border in the light theme, links on light |
| Amber | `#FFBE00` | Warnings, "Leaving soon" style flags (approximate role) |

### Themes

Three themes ship in the CSS: dark yellow (default), light (white and `#FAFAFA` surfaces, `#121212` text, `#0037C5` links), and a P+ blue theme. Build on the dark yellow theme.

## 3. Typography

- **Pluto TV Sans** (loaded as `Pluto TV Sans V11`) is the custom typeface. It ships Regular, Medium, SemiBold, Bold, ExtraBold and Black. It is rounded-geometric with open counters, close in feel to the logo letters.
- **Proxima Nova A** is still loaded for older surfaces. Treat it as legacy.
- Fallback: **Figtree** from Google Fonts has similar geometry and the full weight range. System stack after that: `system-ui, sans-serif`.
- Channel and title names in the guide are plain type. Hero and detail pages use title logo art when it exists.

### Scale

| Role | Size / line | Weight | Notes |
| --- | --- | --- | --- |
| Hero | 60px / 1.05 | 900 | Marketing hero headlines, 32-40px on mobile |
| Page title | 32px / 1.15 | 800 | Detail page title when no logo art |
| Section title | 28px / 1.2 | 700 | "Featured", row headers on On Demand |
| Tile title | 20px / 1.2 | 700 | Current programme title in a guide cell, 16px on phones |
| Body | 16px / 1.5 | 400 | Synopses, modal text |
| Small body | 14px / 1.4 | 400 | Episode descriptions, footer |
| Nav button | 14px / 16px | 600 | Uppercase, 0.4px tracking (`--button-nav-text-large-font`) |
| Action / meta | 12px / 16px | 600 | "1h 17m Left", ratings, time stamps, 0.2px tracking |

### Rules

- Nav pills are uppercase; everything else is title or sentence case.
- Action buttons use capitalised words, not all caps (`text-transform: capitalize`).
- Time remaining and the "next up" times are uppercase in the guide (`8:15 PM`).
- Keep titles on one line with ellipsis inside cells.

## 4. Logo & Brand Mark

- **Primary logo (2024):** a solid yellow circle with "plut" cut out of it, a ring-shaped "o" biting into its right edge, and "tv" in lowercase sitting above the right shoulder. The file here is that version in `#FFF200`.
- **App icon:** the same lockup in yellow on black. The browser favicon uses just the "tv" letters in a black circle.
- **Colour versions:** yellow on black (primary), black on yellow, white on photography.
- **Clear space:** at least the height of the "tv" around the lockup.
- **Minimum size:** 24px tall on screen. Below that, use the "tv" favicon form.
- **Placement:** top-left of the nav, about 32px tall in a 56px bar.

Misuse: do not separate the "tv" from the circle, outline the circle, swap in the pre-2020 planet logo, or recolour the yellow.

## 5. Components

### Buttons

Values from the `--button-*` tokens.

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  height: 48px; padding: 16px 24px;
  border: 1px solid transparent; border-radius: 500px;
  font: 600 16px/16px "Pluto TV Sans", "Figtree", sans-serif;
  transition: all .2s ease-in-out;
}
.btn-medium { height: 36px; padding: 12px 20px; font-size: 14px; }
.btn-small  { height: 24px; padding: 4px 12px; font-size: 12px; }

.btn-primary { background: #FFF200; color: #000000; }
.btn-primary:hover { background: #E6DA00; }
.btn-primary:active { background: #B3A900; }

.btn-secondary { background: #FFFFFF; color: #121212; }
.btn-outlined  { background: transparent; color: #FFFFFF; border-color: #FFF200; }
.btn-outlined:hover  { background: hsla(0,0%,100%,0.05); }
.btn-outlined:active { background: hsla(0,0%,100%,0.1); }
.btn:focus-visible { outline: none; box-shadow: inset 0 0 0 2px #FFF200; }
```

- **Floating buttons** (round icon buttons over video): 48px or 36px circles, `rgba(0,0,0,0.2)` fill, `hsla(0,0%,100%,0.4)` border that turns white on hover and focus.
- **Action buttons** (text-only actions like "Watch Now", "Add to Favorites"): 32px tall, no padding or fill, 600 14px, 16px icon, 4px gap.
- **Nav buttons** (category pills above the guide): 32px tall, 12px side padding, 500px radius, 600 14px uppercase, 0.4px tracking. Selected pill is yellow with black text.

### Live guide (signature)

From `ChannelRow` and `epg` styles.

```css
.guide { padding: 0 96px; }                 /* 40px tablet, 20px mobile */
.channel-row { display: flex; gap: 8px; color: #CDCDCD; }
.channel-header {
  width: 112px; height: 112px; padding: 16px;
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
}
.channel-header:hover { background: #2D2D2D; color: #FFFFFF; }
.cell {
  height: 112px; border-radius: 6px; background: #1D1D1D;
  padding: 0 16px; display: flex; flex-direction: column; justify-content: center;
  white-space: nowrap; transition: opacity .2s ease-in-out;
}
.cell:hover, .cell:focus-within { background: #2D2D2D; color: #FFFFFF; }
.cell[aria-selected="true"] { box-shadow: inset 0 0 0 2px #FFF200; }
.cell .progress { height: 2px; background: hsla(0,0%,100%,0.2); }
.cell .progress > span { background: #FFFFFF; }
```

- The first cell in each row is the programme on now. It is wider (it includes a 196px thumbnail), its text is white, it shows "1h 17m Left" and a progress bar. Later cells show only a start time ("8:15 PM") and title in Solar Cloud.
- Rows shrink to 80px tall and an 80px logo column under 480px.
- On hover the title lifts 4px (`translateY(-4px)`) and the metadata and info button fade in.
- The channel playing in the mini player swaps its logo to the "selected" white version and shows an animated equaliser icon.
- A favourite star sits top-left of the channel cell, visible on hover or when active.
- The guide's top bar (category pills and "Jump to Channel") sticks under the 56px nav and gets a `#1D1D1D` fill and a fade below it once it sticks.

### Category bar

Horizontal scroll of nav pills: "All", "Featured", "Movies", "Comedy", "Classic TV", "Westerns", "Sci-Fi", "Drama", "True Crime", "Reality", "News + Opinion", "Sports", "Kids", "Anime", "En Español", "Local News". Seasonal categories appear at the front ("Season's Greetings").

### On Demand rows and tiles

- Rows of 16:9 tiles for shows and 2:3 posters for movies, 8px gap, 6-8px radius.
- Focused tile: inset 2px yellow ring, slight scale.
- Row headings are 20-28px Bold, with a "See All" action on the right.

### Detail page and end cards

Large backdrop with a radial overlay (`radial-gradient(100% 165.46% at 100% 2.22%, rgba(0,0,0,0.1) 37%, rgba(0,0,0,0.9) 81.5%)`) so the bottom-left is dark. Title, rating and genre chips, synopsis in 16px, yellow "Watch Now" pill, outlined secondary action (approximate labels). Season tabs use the nav pill style. Episode rows: 16:9 thumbnail, title, runtime, two-line description.

### Player

Full-width video at the top of the live page. Controls are white glyphs over a bottom gradient (`linear-gradient(180deg, transparent, #000)`), floating round buttons for mute, fullscreen and info. The live scrubber uses a 4px track at `hsla(0,0%,100%,0.2)` with a white fill; there is no seeking on live channels.

### Inputs and forms

40-48px tall, 6px radius, transparent fill, 1px `#666666` border, white text. Focus: 2px `#FFF200` inset ring. Error: `#E42121` border and message below.

### Sign-in

Signing in is optional; the product is free with no paywall. The "Sign In" pill top-right opens a panel on `#121212` with a Bold heading, stacked inputs, a full-width yellow pill, and links in yellow.

## 6. Layout & Spacing

- **Horizontal padding:** 96px desktop, 40px tablet, 20px mobile (`--breakpoint-padding-*`).
- **Nav:** 56px tall, solid black, logo left, "Home", "Live TV", "Movies", "Shows" centred-left, search and "Sign In" right.
- **Breakpoints:** 480, 768, 1120, 1440, 1920, 2560, 3840px. Guide shows 3 full upcoming cells per row on wide desktop, 2 under 1440px, 1 under 1120px, with a peeking cell (88px, 30px, 16px).
- **Spacing:** multiples of 4: 4, 8, 12, 16, 20, 24, 40; 96px gutters.
- **Density:** dense guide, roomy everywhere else.

## 7. Depth, Elevation & Motion

- **Flat surfaces.** Depth comes from stepping greys (`#000` to `#1D1D1D` to `#2D2D2D`), not shadows.
- **Shadows:** popovers `0 5px 20px rgba(0,0,0,0.5)`, side panels `5px 10px 32px rgba(0,0,0,0.35)`.
- **Focus:** always an inset 2px yellow ring (`box-shadow: inset 0 0 0 2px #FFF200`) with a 6px radius.
- **Durations:** tokens `--duration-shorter` 200ms, `short` 350ms, `medium` 500ms, `long` 750ms, `longer` 1s. Cell hovers 200ms ease-in-out; sticky header 200ms ease-out; panels 320ms `cubic-bezier(.165,.84,.44,1)`.
- **Opacity scale:** 0, 0.1, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 (`--opacity-*`). Peeking cells sit at 0.5.

## 8. Iconography & Imagery

- **Icons:** rounded, filled-or-2px glyphs at 16, 20 and 24px: play, info "i", star (favourite), search, chevrons, volume, fullscreen, equaliser bars for "now playing". White in chrome, yellow for selected states.
- **Channel logos:** each channel has its own logo, shown in grey at rest and white when the row is hovered or playing. Keep them contained inside the 112px cell, `object-fit: contain`.
- **Programme art:** network stills and posters. No brand illustration in the core product.
- **Marketing:** big yellow type on black, device mockups, and channel logo walls.

## 9. Voice & Microcopy

Direct, friendly, and always about "free". Short labels built for a remote.

- Page title: "Watch Free Live TV Streaming Online"
- Manifest description: "Watch 1000s of free movies and TV shows on demand & 100s of live TV channels for free."
- Nav: "Home", "Live TV", "Movies", "Shows", "Search", "Sign In"
- Guide: "Jump to Channel", "1h 17m Left", "Press Enter to tune to channel, press I key to show details."
- Category names: "News + Opinion", "Daytime + Game Shows", "History + Science", "Animals + Nature" (plus signs, not ampersands)
- Buttons: "Watch Now", "Add to Favorites", "See All"
- Casing: title case for labels; uppercase only on nav pills and time cues.

## 10. Do's and Don'ts

**Do**

- Use black canvas and the stepped grey ramp for surfaces.
- Keep `#FFF200` for the primary action, focus, and selection.
- Lay live content out as a guide: logo column on the left, time-sized cells to the right.
- Use 6px radius on cells and cards, full pills on buttons.
- Show time left and a thin progress bar on the airing cell.
- Write keyboard and remote hints for focusable grids.

**Don't**

- Don't use yellow for text blocks or large background areas.
- Don't mix the P+ blue into regular Pluto TV screens.
- Don't add drop shadows to cells; use the grey steps.
- Don't use the old planet logo or Proxima Nova for new work.
- Don't hide the channel logo column on desktop.
- Don't add paywall or plan language; the service is free.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Pluto TV. Canvas `#000000` (pages may use `#121212`), surfaces `#1D1D1D`, hover `#2D2D2D`, borders `#393939`, text white with secondary `#CDCDCD` and tertiary `#999999`. One accent: Pluto Yellow `#FFF200` (hover `#E6DA00`, pressed `#B3A900`) with black text. Font Pluto TV Sans, fallback Figtree: 60px 900 hero, 28px 700 section titles, 20px 700 cell titles, 16px 400 body, 12px 600 meta. Buttons are pills (radius 500px): 48px large, 36px medium, 600 weight; nav pills 32px, 14px 600 uppercase 0.4px tracking. Build a live guide: video player on top, then rows with a 112x112 channel logo cell and 112px-tall programme cells (`#1D1D1D`, 6px radius, 8px gap). The airing cell is wider with a thumbnail, white title, "1h 17m Left" and a 2px white progress bar on `hsla(0,0%,100%,0.2)`. Focus is `inset 0 0 0 2px #FFF200`. Side padding 96px desktop, 40px tablet, 20px mobile. Motion 200ms ease-in-out.

```css
:root {
  --brand-yellow: #FFF200;
  --brand-yellow-hover: #E6DA00;
  --brand-yellow-pressed: #B3A900;
  --brand-canvas: #000000;
  --brand-galaxy: #121212;
  --brand-surface: #1D1D1D;
  --brand-surface-strong: #2D2D2D;
  --brand-border: #393939;
  --brand-border-subtle: #666666;
  --brand-text: #FFFFFF;
  --brand-text-secondary: #CDCDCD;
  --brand-text-tertiary: #999999;
  --brand-critical: #E42121;
  --brand-success: #00D86D;
  --brand-pplus-gradient: linear-gradient(225deg, #0064FF, #0037C5);
  --brand-font: "Pluto TV Sans", "Figtree", system-ui, sans-serif;
  --brand-radius-cell: 6px;
  --brand-radius-card: 8px;
  --brand-radius-pill: 500px;
  --brand-row-height: 112px;
  --brand-channel-col: 112px;
  --brand-gap: 8px;
  --brand-padding-desktop: 96px;
  --brand-padding-tablet: 40px;
  --brand-padding-mobile: 20px;
  --brand-focus: inset 0 0 0 2px #FFF200;
  --brand-duration: 200ms;
  --brand-ease-panel: cubic-bezier(.165, .84, .44, 1);
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Pluto TV.

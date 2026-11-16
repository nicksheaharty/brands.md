---
name: Universal Pictures
shortName: "Universal"
slug: universal
url: https://www.universalpictures.com
category: Studio
tagline: "The globe and arched wordmark in white on near-black, with one bright blue for action."
updated: 2026-11-16
logoBackground: "#0C0C0C"
theme: dark
colors:
  - name: Night
    hex: "#0C0C0C"
    role: Page background, header drawer
  - name: Warm White
    hex: "#FCF8F5"
    role: Body text, logo on dark
  - name: Universal Blue
    hex: "#1748F6"
    role: Primary pill buttons
  - name: Globe Navy
    hex: "#01366A"
    role: One-colour blue logo version with "A COMCAST COMPANY"
  - name: White
    hex: "#FFFFFF"
    role: Header text, icons, logo
  - name: Black
    hex: "#000000"
    role: Hero gradients, popovers
  - name: Charcoal
    hex: "#222222"
    role: Skip link, small surfaces
  - name: Header Glass
    hex: "#000000"
    role: Sticky header at 60% opacity with 10px blur
  - name: Hairline
    hex: "#595959"
    role: Borders (white at 35% on black), approximate solid equivalent
  - name: Muted
    hex: "#B0AEAC"
    role: Secondary text (warm white at 70%), approximate solid equivalent
fonts:
  display:
    family: "Inter"
    fallback: "Inter"
    weights: [700, 800]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 80, weight: 800, lineHeight: 1, tracking: "-0.01em" }
  - { role: Display, size: 64, weight: 800, lineHeight: 1, tracking: "-0.01em" }
  - { role: Title, size: 48, weight: 800, lineHeight: 1.05, tracking: "0" }
  - { role: Menu, size: 32, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Lead, size: 24, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 14, weight: 600, lineHeight: 1.25, tracking: "0.02em" }
radii: { sm: 4, md: 8, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 80]
shadows: []
preview:
  bg: "#0C0C0C"
  surface: "#1A1A1A"
  text: "#FCF8F5"
  muted: "#B0AEAC"
  border: "#595959"
  accent: "#1748F6"
  accentText: "#FFFFFF"
  radius: 999
  buttonStyle: pill
---

# Universal Pictures

## 1. Visual Theme & Atmosphere

Universal is the globe. A spinning Earth with "UNIVERSAL" wrapped across its face has opened the studio's films since the 1920s, and the logo has been rebuilt many times around that idea: an airplane circling it in the 1920s, art deco glass in the 1930s, a CGI flyover for the 2012 centenary, and a flat two-dimensional version for print and digital since 2021. The wordmark is a heavy, wide sans with a gentle arch, laid over the globe, with a thin orbit line sweeping under the continents.

The current website (universalpictures.com) is stripped back and cinematic. A near-black page `#0C0C0C`, warm off-white text `#FCF8F5`, Inter for all type, a centred white logo in a translucent glass header, and full-bleed trailers and key art. The only colour in the chrome is a bright blue `#1748F6` on pill buttons. Everything else is the films.

What makes it recognisable:

- **The globe lockup** in white on black, centred.
- **Monochrome chrome.** Black, warm white, white at reduced opacity; blue only for action.
- **Huge, heavy headlines.** 48-80px Inter 800 with tight line height.
- **Uppercase UI.** Nav, buttons and the language switcher are uppercase.
- **Glass header.** A fixed bar that starts transparent over the hero and fades to `rgba(0,0,0,0.6)` with a 10px backdrop blur as you scroll.

Density: low. One film per screen at the top, then calm rows of posters.

## 2. Color Palette & Roles

### Core (from universalpictures.com CSS)

| Name | Value | Role |
| --- | --- | --- |
| Night | `#0C0C0C` | `body` background, mobile drawer |
| Warm White | `#FCF8F5` | `body` text colour |
| White | `#FFFFFF` | Header text, icons, logo |
| Universal Blue | `#1748F6` | Primary pill buttons |
| Black | `#000000` | Hero gradients (`linear-gradient(180deg, #000, transparent 20%)`) |
| Charcoal | `#222222` | Skip-to-content link, small chips |
| Header Glass | `rgb(0 0 0 / 60%)` + `backdrop-filter: blur(10px)` | Sticky header after scroll |
| Popover | `rgba(0,0,0,0.9)` + `blur(8px)` | Nav dropdowns |
| Hairline | `hsla(0,0%,100%,0.35)` | Share-button borders |
| Popover Border | `hsla(0,0%,100%,0.2)` | Dropdown borders |

### Opacity text

The site dims text with opacity instead of grey hex values:

| Use | Value |
| --- | --- |
| Hover on links and nav | `opacity: 0.7` |
| Legal links | `opacity: 0.7`, 1 on hover |
| Copyright line | `opacity: 0.8` |
| External-link arrow | `opacity: 0.4` |

### Logo colours

| Version | Hex | Use |
| --- | --- | --- |
| White | `#FFFFFF` | Default on the site and in trailers |
| Black | `#000000` | Print and light backgrounds |
| Blue | `#01366A` | One-colour corporate blue version, with "A COMCAST COMPANY" under it |

### Semantic (approximate)

| Name | Hex | Use |
| --- | --- | --- |
| Error | `#FF5A4F` | Form errors on dark |
| Success | `#3CCB7F` | Newsletter confirmation |
| Focus | `#FCF8F5` | 2px focus outline |

### Mode

Dark only on the consumer site. Light, white-background layouts appear in press kits and corporate PDFs with the black or blue logo.

## 3. Typography

- **Inter** for everything on universalpictures.com (`font-family: Inter, sans-serif`). It is a Google Font, so it is both the brand web face and the fallback.
- **Wordmark lettering** in the logo is custom: wide, very bold caps with flat terminals, set on an arc. It is artwork; do not set "UNIVERSAL" in a font to imitate it.
- **Film titles** use each film's own title treatment, supplied as images.

### Scale (site values)

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Hero (≥1280px) | 80px | 800 | 1 | Page titles, 64px at ≥767px, 48px mobile |
| Title | 48px | 800 | 1 | Mobile page titles, section heads |
| Menu (mobile) | 32px | 700 | 1.2 | Drawer links, 40px gap |
| Lead | 24-28px | 400 | 1.4 | Intro paragraphs (18px mobile) |
| Body | 16px | 400 | 1.5 | Synopses, articles |
| Nav (desktop) | 16px | 400 | 1.2 | Uppercase, 32px gap |
| Dropdown | 14-16px | 400 | 1.4 | Popover links |
| Button | 14px | 600 | 1.25 | Uppercase |
| Footer | 14px | 400 | 1.5 | Links and legal |

### Rules

- Uppercase for nav, buttons, language switcher and the copyright line.
- Headlines use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
- Headings default to `line-height: 1.2`, big display titles to 1.
- Body text is antialiased (`-webkit-font-smoothing: antialiased`).

## 4. Logo & Brand Mark

- **Construction:** a globe showing the Americas and parts of Europe and Africa, a thin orbit line curving below it, and "UNIVERSAL" in heavy wide caps across the middle, arched slightly. The globe breaks above and below the word.
- **Corporate lockup:** the logo with "A COMCAST COMPANY" in small spaced caps underneath.
- **Versions:** white on black (primary on screen), black on white, solid blue. The animated ident adds light and sky, but the flat 2021 drawing is the digital standard.
- **Clear space:** at least the cap height of "UNIVERSAL" on all sides.
- **Minimum size:** about 72px wide (the mobile header renders it at 72 × 38px); desktop header 102 × 52px; footer 40-75px tall.
- **Placement:** centred in the header on mobile, left on desktop; centred in the footer on narrow screens.

Misuse: do not separate the word from the globe, flatten the arch, recolour the continents, add the old 3D bevel to the flat logo, or put it on light, busy imagery.

## 5. Components

Values from universalpictures.com CSS. Card and input sizes are approximate.

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 48px;
  font: 600 14px/1.25 Inter, sans-serif;
  text-transform: uppercase; text-align: center;
  border-radius: 999px; border: none;
  transition: opacity .2s;
}
.btn-primary { background: #1748F6; color: #FFFFFF; }
.btn-primary:hover { opacity: 0.85; }
.btn-primary:focus-visible { outline: 2px solid #FCF8F5; outline-offset: 3px; }

.btn-ghost { background: transparent; color: #FCF8F5; border: 1px solid hsla(0,0%,100%,0.35); }
.btn-ghost:hover { border-color: #FCF8F5; }
```

### Share pill (segmented)

Social icons sit in a joined row of bordered cells: each `a` has `padding: 12px; border: 1px solid hsla(0,0%,100%,0.35)`, inner cells drop their left border, the first is `border-radius: 999px 0 0 999px`, the last `0 999px 999px 0`. Icons 20px, `fill: currentColor`.

### Header

```css
.header {
  position: fixed; inset: 0 0 auto; z-index: 10;
  height: 64px;                 /* 84px at ≥767px */
  color: #FFFFFF;
  background: rgb(0 0 0 / calc(60% * (1 - var(--header-transparency, 0))));
  backdrop-filter: blur(calc(10px * (1 - var(--header-transparency, 0))));
  transition: background .2s, backdrop-filter .2s;
}
```

- Desktop: logo left, nav links in a row with 32px gaps, 16px uppercase weight 400, language switcher right (16px uppercase 500, with globe icon). Hover is `opacity: 0.7`.
- Dropdowns: on hover, a popover 16px below the link, `rgba(0,0,0,0.9)`, `backdrop-filter: blur(8px)`, 1px white-20% border, 8px radius, 24px padding, fades and slides 8px over 250ms.
- Mobile: a 48px hamburger left (lines 18px wide, 2px thick, rotating to an X over 0.5s), centred logo, language right. The drawer slides down full-height in `#0C0C0C`, links at 32px weight 700.
- External links get a small arrow after the label at 40% opacity that nudges up-right 2px on hover.

### Hero

Full-bleed trailer or key art, at least 80vh, with a black gradient at the top for the header and at the bottom for text. Film title art bottom-left or centred, release line in 16-18px uppercase, then one blue pill ("GET TICKETS") and one ghost pill ("WATCH TRAILER").

### Poster cards

2:3 posters, 4px radius (approximate), no border or shadow. Hover: slight scale (1.03) and title text to full opacity. Caption below in 16px weight 600 and a 14px release date at 70% opacity.

### Inputs (newsletter)

```css
.input {
  height: 48px; padding: 0 20px;
  background: transparent; color: #FCF8F5;
  border: 1px solid hsla(0,0%,100%,0.35); border-radius: 999px;
  font: 400 16px Inter, sans-serif;
}
.input:focus { border-color: #FCF8F5; outline: none; }
```

Newsletter sections sit over a darkened photo background, centred, with the blue pill as submit.

### Loading spinner

A 32px ring drawn with a conic gradient (`conic-gradient(transparent 25%, currentColor 25%)`) masked to a 2px stroke, 40% opacity, spinning once per second on `cubic-bezier(.7,.3,.3,.7)`.

### Footer

14px text, padding 24px (40px at ≥576px, 80px at ≥1280px). Logo left (40/48/75px tall by breakpoint), link columns with 16px row gaps and 40-80px column gaps, share pill right, legal row at 70% opacity, uppercase copyright at 80%.

## 6. Layout & Spacing

- **Side padding:** `--padding-inline` is 16px on mobile, 40px from 767px, 80px from 1280px.
- **Header height:** 64px mobile, 84px desktop; page content starts below it (`padding-top: var(--header-height)`).
- **Breakpoints:** 576, 767, 1280px.
- **Gaps:** 16, 24, 32, 40, 64, 80px. Nav gap 32px, drawer gap 24-40px, footer gaps 40-80px.
- **Grids:** posters 2 columns on mobile, 3-4 on tablet, 5-6 on desktop.
- **Density:** sparse. One idea per screen in the hero, wide margins.

## 7. Depth, Elevation & Motion

- No box shadows in the system. Depth comes from blur (header 10px, popovers 8px) and black gradients over imagery.
- **Durations:** 0.2s for opacity hovers and header changes, 0.25s for popovers and chevron rotation, 0.5s for drawer and hamburger, 1s for the logo settling in the header.
- **Page transitions:** View Transitions API; pages fade in from `opacity: 0` using `@starting-style`. The header keeps its own `view-transition-name` so it stays still between pages.
- **Scroll:** `scroll-timeline: --page-scroll` drives the header's transparency.
- Respect reduced motion: drop the drawer slide and hero autoplay.

## 8. Iconography & Imagery

- **Icons:** small, filled, white: chevron-down for dropdowns (16px), north-east arrow for external links (9px), social glyphs (20px). Drawn inline as SVG with `currentColor`.
- **Imagery:** official trailers, key art, stills and title treatments. Horror (Blumhouse), animation (Illumination, DreamWorks) and tentpoles (Jurassic World, Fast & Furious) all share the same black frame.
- **Background photos:** darkened heavily behind newsletter and 404 sections.
- No illustration style of its own; the globe is the only brand graphic.

## 9. Voice & Microcopy

Direct and brief. The films do the talking; the UI just tells you when and how.

- Release lines: "ONLY IN THEATERS JULY 2", "NOW STREAMING ON PEACOCK", "OWN IT ON DIGITAL"
- Buttons: "GET TICKETS", "WATCH TRAILER", "LEARN MORE", "SIGN UP"
- Nav: "MOVIES", "COMING SOON", "AT HOME", "NEWS"
- 404: a big "Page not found" headline and a single pill back to the home page.
- Casing: uppercase for UI labels and buttons, sentence case for body and headlines.

## 10. Do's and Don'ts

**Do**

- Use `#0C0C0C` with warm white `#FCF8F5` text.
- Keep the logo white and let it breathe in the header.
- Use one blue pill per view for the main action.
- Use opacity (0.7, 0.8) for secondary text instead of extra greys.
- Use blur and gradients, not shadows.
- Set big titles in Inter 800 with line height 1.

**Don't**

- Don't add colour to the chrome beyond `#1748F6`.
- Don't use square buttons; Universal's buttons and share controls are full pills.
- Don't recreate the wordmark with a font.
- Don't put text over art without a gradient.
- Don't use light backgrounds on the consumer site.
- Don't add card shadows or borders around posters.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Universal Pictures. Background `#0C0C0C`, text `#FCF8F5`, white `#FFFFFF` for header and icons, secondary text by `opacity: 0.7`. The only accent is Universal Blue `#1748F6` on pill buttons (`border-radius: 999px`, `padding: 12px 48px`, 14px Inter 600 uppercase). Use Inter for everything: page titles 80px weight 800 line-height 1 on desktop (64px tablet, 48px mobile), lead 24px, body 16px/1.5. Fixed header 84px tall (64px mobile) that starts transparent and becomes `rgb(0 0 0 / 60%)` with `backdrop-filter: blur(10px)`; logo left, uppercase 16px nav links with 32px gaps, hover `opacity: .7`. Dropdowns are `rgba(0,0,0,.9)` popovers with 8px blur, 8px radius, 1px white-20% border. Side padding 16/40/80px at 0/767/1280px. Full-bleed trailer hero with black gradients, then rows of 2:3 posters with no shadows. Transitions 0.2s for hovers, 0.5s for drawers. Use the white globe logo SVG; never type the wordmark.

```css
:root {
  --brand-bg: #0C0C0C;
  --brand-text: #FCF8F5;
  --brand-white: #FFFFFF;
  --brand-blue: #1748F6;
  --brand-black: #000000;
  --brand-charcoal: #222222;
  --brand-header-glass: rgb(0 0 0 / 60%);
  --brand-popover: rgba(0, 0, 0, 0.9);
  --brand-hairline: hsla(0, 0%, 100%, 0.35);
  --brand-popover-border: hsla(0, 0%, 100%, 0.2);
  --brand-hover-opacity: 0.7;
  --brand-font: Inter, sans-serif;
  --brand-radius-pill: 999px;
  --brand-radius-popover: 8px;
  --brand-radius-sm: 4px;
  --brand-header-height: 84px;
  --brand-padding-inline: 80px;
  --brand-blur-header: 10px;
  --brand-blur-popover: 8px;
  --brand-duration-fast: 0.2s;
  --brand-duration-slow: 0.5s;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Universal Pictures.

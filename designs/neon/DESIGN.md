---
name: NEON
slug: neon
url: https://www.neonrated.com
category: Studio
tagline: "White page, black type shouting in condensed caps, and a tube-lit wordmark."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Foreground, wordmark, Get Tickets panel, newsletter block
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on black
  - name: NEON Red
    hex: "#D50000"
    role: Signal colour, error borders, sold-out and alert labels
  - name: Acid Green
    hex: "#AEFF00"
    role: Signal colour for tags and highlights
  - name: Hot Pink
    hex: "#EC71DA"
    role: Signal colour for tags and highlights
  - name: Sign Blue
    hex: "#2195D8"
    role: Signal colour for tags and highlights
  - name: Card Grey
    hex: "#F3F3F3"
    role: Poster and product card backgrounds, image placeholders
  - name: Dark Red
    hex: "#B20000"
    role: Error text
  - name: Mid Grey
    hex: "#525252"
    role: Secondary text, focus rings
  - name: Line Grey
    hex: "#D4D4D4"
    role: Hairlines, disabled text
fonts:
  display:
    family: "Girott"
    fallback: "Anton"
    weights: [700]
  body:
    family: "Focal"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Mega, size: 190, weight: 700, lineHeight: 0.8, tracking: "-0.03em" }
  - { role: Display, size: 160, weight: 700, lineHeight: 0.8, tracking: "-0.03em" }
  - { role: Headline, size: 60, weight: 700, lineHeight: 0.85, tracking: "-0.03em" }
  - { role: Title, size: 41, weight: 700, lineHeight: 0.8, tracking: "-0.03em" }
  - { role: Action, size: 36, weight: 700, lineHeight: 0.8, tracking: "-0.03em" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Label, size: 12, weight: 700, lineHeight: 1.0, tracking: "-0.01em" }
radii: { sm: 4, md: 8, lg: 10, pill: 80 }
spacing: [6, 8, 10, 16, 20, 30, 70, 140]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F3F3F3"
  text: "#000000"
  muted: "#525252"
  border: "#D4D4D4"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# NEON

## 1. Visual Theme & Atmosphere

NEON is the independent distributor behind Parasite, Anora, Anatomy of a Fall, Longlegs and I, Tonya, with seven straight Palme d'Or winners. Its site (neonrated.com, built by the studio 27b) reads like a gig poster stapled to a white wall: pure white page, pure black type, film titles in giant condensed uppercase that bleed edge to edge, and posters in softly rounded grey cards. The brand voice is loud and a little punk, and the layout follows.

What makes it recognisable:

- **Black on white, nothing else.** `--background: #fff; --foreground: #000`. Each film page can flip this with `--theme-primary` / `--theme-secondary` so the page takes the film's colours.
- **Huge condensed caps.** Girott Bold, uppercase, line-height 80%, tight negative tracking, up to 190px on wide screens. Titles stack and crash into each other.
- **The tube wordmark.** "NEON" is drawn as bent neon tubing: rounded rectangles with a single gap in each letter, like a sign before it is switched on.
- **Grey rounded cards.** Posters, merch and stills sit on `#F3F3F3` with an 8px radius.
- **Small bold labels.** Status tags ("In Theaters", "Coming Soon", "Sold Out", "Pre-Order Now") are Focal 12px Bold uppercase, outlined in their state colour.
- **Animated underlines.** Big titles get a thick underline that grows from left to right over 0.7s.

Density: high on scroll (carousels of posters and merch back to back) but each element is large and simple.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Black | `#000000` | Text, logo, Get Tickets panel, newsletter block, footer |
| White | `#FFFFFF` | Page background, text on black |
| Card Grey | `#F3F3F3` | Card and image placeholder backgrounds (`--color-grey`) |
| Mid Grey | `#525252` | Secondary text, focus ring on light |
| Line Grey | `#D4D4D4` | Hairlines, disabled text |

### Signal colours

Defined in `:root` as the only hues in the system. Use them like coloured gels: for a tag, an underline, a hover state, or a whole film-themed page, never several at once.

| Name | Hex | Token | Use |
| --- | --- | --- | --- |
| NEON Red | `#D50000` | `--color-red` | Alerts, error borders, sold-out tags |
| Dark Red | `#B20000` | | Error text |
| Acid Green | `#AEFF00` | `--color-green` | Highlight tags, selection, promo |
| Hot Pink | `#EC71DA` | `--color-pink` | Highlight tags, merch drops |
| Sign Blue | `#2195D8` | `--color-blue` | Highlight tags, links on themed pages |

### Theming

- `--theme-primary` (default `#FFFFFF`) and `--theme-secondary` (default `#000000`) drive every themed surface. Text selection uses them inverted: `selection:bg-[var(--theme-secondary)] selection:text-[var(--theme-primary)]`.
- A film page swaps them for two colours from its poster (for example deep red and cream). Keep exactly two colours per theme.
- Focus outlines use `rgba(0,0,0,0.1)` or `currentColor`.

### Mode

Light by default. Black sections (newsletter, footer, ticket panel) are inversions of the same two colours, not a dark mode.

## 3. Typography

- **Girott** (Bold 700, Regular 400): condensed grotesque for every title, button label and big number. Always uppercase. Commercial.
- **Focal** (400, 500, 700): body and labels. Commercial.
- The site ships metric-matched Arial fallbacks (`Girott Fallback` uses `size-adjust: 62.21%`, which shows how narrow Girott is). Google Fonts fallbacks: **Anton** for Girott, **Inter** for Focal.
- Root size is `10px`, so `1rem = 10px` in the source.

### Scale

| Class | Mobile | 768px | 1024px | 1280px | Line height | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| `.type-3xl` | 80px | 100px | 160px | 190px | 80% | -3px to -5.7px |
| `.type-2xl` | 70px | 100px | 160px | 160px | 80% | -2.1px to -4.8px |
| `.type-xl` / `.type-1xl` | 60px | 60px | 60px | 60px | 85% | -1.8px |
| `.type-m` | 31px | 41px | 41px | 41px | 80% | -1.08px / -1.26px |
| Action label | 36px | 36px | 36px | 36px | 80% | -1.08px |
| Body | 14px | 14px | 14px | 14px | 100% (150% in long text) | -0.14px |
| `.type-label` | 12px Focal 700 | | | | 100% | -0.12px |

### Rules

- Girott is always uppercase, always Bold, with line-height 80-90% and about -0.03em tracking. Lines are allowed to touch.
- Focal body text is small (14px) and tight; long-form text (FAQ, legal) relaxes to 150% line height.
- Labels, prices ("$65 USD") and filters are Focal 12px Bold uppercase.
- Prose headings inside articles use `.type-m` (31/41px Girott).

## 4. Logo & Brand Mark

- **Wordmark:** "NEON" built from continuous rounded tubes with an inner line and a break in each letter, so it reads as unlit neon signage. The E and the O are near-rectangular with rounded corners; the N diagonals are straight tubes.
- **Usage on site:** 59 x 16 viewBox SVG with `fill: currentColor`, rendered about 59px wide in the header, 85-112px in other placements, and full width in the footer.
- **Colour:** single colour, matching the current foreground (black on white, white on black, or the film theme colour).
- **Clear space:** the height of one letter's tube stroke times three on all sides.
- **Minimum size:** 48px wide; the inner tube lines fill in below that.
- **Older version:** an outline-only tube drawing (thin double lines). The current site uses the solid tube version in this folder.

Misuse: don't add a glow, blur or coloured neon effect; the mark is flat. Don't set "NEON" in Girott as a logo substitute or stretch it.

## 5. Components

### Get Tickets panel

Sticky black box (`border-radius: 4px`, theme-aware `bg: var(--theme-secondary)`) at the top-right of a film hero, listing "Get Tickets" links in Girott white caps with 6px gaps.

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 35px; padding: 0 16px;
  background: #000000; color: #FFFFFF;
  border: 1px solid #000000; border-radius: 4px;
  font: 700 12px/1 "Focal", "Inter", sans-serif;
  text-transform: uppercase; letter-spacing: -0.012rem;
  transition: opacity 300ms cubic-bezier(0.16,1,0.3,1), background-color 200ms;
}
.btn:hover { background: #FFFFFF; color: #000000; }
.btn-outline { background: transparent; color: #000000; }
.btn-outline:hover { background: #000000; color: #FFFFFF; }
.btn-pill { border-radius: 80px; }
.btn:disabled { color: #D4D4D4; border-color: #D4D4D4; background: transparent; }
```

### Play Trailer

Signature control: a 160px outlined play triangle (`stroke-width: 2`, `currentColor`, no fill) over the hero. On hover the triangle slides up out of its box (`translate-y: -100%`, 300ms ease-out) and "PLAY TRAILER" in Girott 36px slides in from below.

### Animated title underline

```css
.type-underline {
  background-image: linear-gradient(currentColor, currentColor);
  background-repeat: no-repeat;
  background-size: 0 var(--underline-height);           /* 4px, 6px or 8px by breakpoint */
  background-position: 0 calc(100% - var(--underline-offset)); /* 8px, 12px or 22px */
  transition: background-size .7s cubic-bezier(0.19,1,0.22,1);
}
.type-underline:hover { background-size: 100% var(--underline-height); }
```

### Status tags

`.type-label` text inside a 1px border in `var(--color)` with 4px side padding: "In Theaters", "Coming Soon", "Sold Out" (red), "Pre-Order Now". On mobile the border drops and only the text stays.

### Poster cards

- 336px wide on desktop (`w-[33.6rem]`), `#F3F3F3` background, 8px radius, `overflow: hidden`.
- Poster fills the card; title in Girott 31-41px below or overlaid, status tag top-left at 15px insets.
- Hover: secondary actions (plus, play) fade from opacity 0 to 1 over 300ms; plus icons rotate 90 degrees.
- Carousels snap to card start (`snap-start`) with 16-32px gaps (`--card-gap`).

### Merch cards

Same grey card, product photo centred on `#F3F3F3`, name in Focal 14px uppercase ("ONCE UPON A TIME IN HARLEM Hoodie"), price "$65 USD" in label style, "Sold Out" tag in red outline.

### Newsletter block

Full-width black panel with 8px radius and a `1382/541` aspect ratio on desktop; heading in Girott, white email input with a bottom border and a white submit button.

### Navigation

- Header: NEON wordmark left, links "Films" and "Shop" with dropdown sub-lists ("All", "In Theaters", "Watch Now"; "Apparel", "Collectibles", "Posters", "Bags", "Toys", "Blu-Ray") in Focal 12px Bold uppercase.
- Footer: black, giant full-width wordmark, link columns ("Home", "FAQs", "Shipping & Returns", "Terms of Use", "Privacy Policy", "Contact", "Host a Screening", "About"), credit line "Website by 27b", "NEON Rated, LLC © 2017-2026".

### Selects and inputs

Custom select: Focal 12px Bold uppercase, transparent background, 20px side padding, chevron on the right, 28px tall. Inputs follow the same type with a 1px black bottom border.

### Modals

Trailer player fills the viewport on black; a 28px close button (X) top-right that rotates 90 degrees on hover.

## 6. Layout & Spacing

- **Page gutters:** `--page-gap-x` 20px mobile, 30px desktop.
- **Vertical rhythm:** `--page-gap-y` 70px mobile, 140px desktop between sections.
- **Top padding:** 120-220px before the first section so headlines have room.
- **Grid:** mostly flex rows and horizontal scrollers; titles span the full width with no max width.
- **Card gap:** 16px mobile, 24px tablet, 32px desktop.
- **Breakpoints:** 768, 1024, 1280px (Tailwind defaults).
- **Spacing scale:** 6, 8, 10, 16, 20, 30, 70, 140px.

## 7. Depth, Elevation & Motion

- **Flat.** No box shadows. Grey cards on white and black panels provide all separation.
- **Easing:** `--ease-out: cubic-bezier(0.16,1,0.3,1)` for most transitions, `--ease-snappy: cubic-bezier(0.19,1,0.22,1)` for underlines and reveals, `--ease-anticipate: cubic-bezier(1,-0.4,0.35,0.95)` for exits, and a `linear()` spring curve (`--ease-spring`) for playful moves.
- **Durations:** 200ms for small hovers, 300ms for opacity and slide reveals, 700ms for underline growth.
- **Motion preference:** `--motion: 0` disables movement when reduced motion is set.
- **Signature moves:** slide-swap labels inside buttons, rotating plus/close icons, underline grow.

## 8. Iconography & Imagery

- **Icons:** thin 2px outline glyphs (play triangle, plus, close, chevrons, arrows) drawn in `currentColor`, from 14px up to 160px for the trailer button.
- **Imagery:** theatrical posters and stills at full size. NEON's posters are graphic and confrontational (Longlegs, Parasite, Titane), and the site leaves them uncropped on grey cards.
- **Merch photography:** flat product shots on `#F3F3F3`.
- **No illustration** in the chrome; the brand mark and type do that job.

## 9. Voice & Microcopy

Blunt, playful, all caps when it's a headline. Copy is short enough to fit in Girott at 160px.

- Status: "In Theaters", "Coming Soon", "In Theaters Dec 25, 2026", "Watch Now".
- CTAs: "Get Tickets", "Play Trailer", "Pre-Order Now", "Host a Screening".
- Sections: "New Merch Arrivals", "Award Winners", "Best Sellers", "Newsletter".
- Commerce: "$35 USD", "Sold Out".
- Footer: "NEON Rated, LLC © 2017-2026. All Rights Reserved."
- Casing: uppercase for display and labels; sentence case only in long text (FAQ, policies).

## 10. Do's and Don'ts

**Do**

- Keep the page white with black type, and flip to black for feature blocks.
- Set titles in condensed uppercase at enormous sizes with 80% line height.
- Put posters and products on `#F3F3F3` cards with 8px radius.
- Use one signal colour at a time for tags and highlights.
- Animate underlines and label swaps with the snappy ease.
- Theme film pages with exactly two colours via primary/secondary tokens.

**Don't**

- Don't add glow or neon light effects to the logo or type.
- Don't use shadows or gradients.
- Don't set headlines in sentence case or regular weight.
- Don't combine red, green, pink and blue in one view.
- Don't round cards beyond 8-10px or buttons beyond 4px (except the 80px pill variant).
- Don't write long marketing paragraphs.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of NEON (neonrated.com). White background `#FFFFFF`, black text `#000000`, cards `#F3F3F3` with 8px radius, no shadows. Headlines in a condensed bold grotesque (Girott, fallback Anton), always uppercase, line-height 0.8, letter-spacing -0.03em, from 41px for card titles up to 160-190px for hero titles that span the full width. Body and labels in Focal (fallback Inter): body 14px, labels 12px bold uppercase. Status tags are 12px bold uppercase with a 1px border in the state colour. Buttons are black, 4px radius, 35px tall, 12px bold uppercase, inverting on hover. Add a 160px outline play triangle (2px stroke) that swaps to "PLAY TRAILER" on hover, and title underlines that grow from 0 to 100% width over 0.7s `cubic-bezier(0.19,1,0.22,1)`. Gutters 30px, sections 140px apart. Only allowed hues: `#D50000`, `#AEFF00`, `#EC71DA`, `#2195D8`, one at a time, for tags or highlights. Use the flat tube-style NEON wordmark top-left, about 60px wide.

```css
:root {
  --brand-bg: #FFFFFF;
  --brand-fg: #000000;
  --brand-theme-primary: #FFFFFF;
  --brand-theme-secondary: #000000;
  --brand-grey: #F3F3F3;
  --brand-grey-mid: #525252;
  --brand-grey-line: #D4D4D4;
  --brand-red: #D50000;
  --brand-red-text: #B20000;
  --brand-green: #AEFF00;
  --brand-pink: #EC71DA;
  --brand-blue: #2195D8;
  --brand-font-display: "Girott", "Anton", "Arial Narrow", sans-serif;
  --brand-font-body: "Focal", "Inter", Arial, sans-serif;
  --brand-display-leading: 0.8;
  --brand-display-tracking: -0.03em;
  --brand-radius-button: 4px;
  --brand-radius-card: 8px;
  --brand-radius-pill: 80px;
  --brand-gutter: 30px;
  --brand-section-gap: 140px;
  --brand-card-gap: 32px;
  --brand-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --brand-ease-snappy: cubic-bezier(0.19, 1, 0.22, 1);
  --brand-ease-anticipate: cubic-bezier(1, -0.4, 0.35, 0.95);
  --brand-duration: 300ms;
  --brand-underline-duration: 0.7s;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by NEON.

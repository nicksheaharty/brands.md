---
name: The Criterion Channel
shortName: Criterion
slug: criterion-channel
url: https://www.criterionchannel.com
category: Streaming
tagline: "Charcoal screen, old-gold accents, serif titles: a repertory cinema on demand."
updated: 2026-11-16
logoBackground: "#121212"
theme: dark
colors:
  - name: Charcoal
    hex: "#121212"
    role: Page background, app icon, browser theme colour
  - name: Criterion Gold
    hex: "#B4841E"
    role: Primary button, hover frames, eyebrows, active links, player progress
  - name: White
    hex: "#FFFFFF"
    role: Logo, headings, body text
  - name: Paper
    hex: "#F7F7F7"
    role: Button labels, footer text
  - name: Surface
    hex: "#181818"
    role: Form cards, panels
  - name: Tile
    hex: "#222222"
    role: Image placeholders, primary button hover
  - name: Frame
    hex: "#1A1A1A"
    role: Artwork frame background
  - name: Menu
    hex: "#0A0A0A"
    role: Dropdown and settings menu rows
  - name: Light Grey
    hex: "#D2D2D2"
    role: Menu item text
  - name: Mid Grey
    hex: "#929292"
    role: Muted labels
  - name: Black
    hex: "#000000"
    role: Player background
  - name: Error
    hex: "#D8645C"
    role: Form error text
fonts:
  display:
    family: "Mercury Display"
    fallback: "Newsreader"
    weights: [400]
  body:
    family: "Gotham"
    fallback: "Montserrat"
    weights: [400, 500]
typeScale:
  - { role: Hero Serif, size: 45, weight: 400, lineHeight: 1.2, tracking: "-0.015em" }
  - { role: Title Serif, size: 41, weight: 400, lineHeight: 1.2, tracking: "-0.015em" }
  - { role: Header XL, size: 36, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Header Medium, size: 25, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Header XS, size: 17, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.6, tracking: "0.008em" }
  - { role: Eyebrow, size: 13, weight: 500, lineHeight: 1.2, tracking: "0.08em" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.6, tracking: "0.008em" }
radii: { sm: 2, md: 8, lg: 20, pill: 100 }
spacing: [6, 12, 18, 24, 36, 48, 60]
shadows:
  - { name: Gold Hover Frame, value: "0 0 0 5px #B4841E" }
  - { name: Hairline, value: "0 0 0 0.5px rgba(255,255,255,0.06)" }
  - { name: Popover, value: "0 4px 24px rgba(0,0,0,0.4)" }
preview:
  bg: "#121212"
  surface: "#181818"
  text: "#FFFFFF"
  muted: "#929292"
  border: "#2A2A2A"
  accent: "#B4841E"
  accentText: "#F7F7F7"
  radius: 0
  buttonStyle: pill
---

# The Criterion Channel

## 1. Visual Theme & Atmosphere

The Criterion Channel is the streaming service of the Criterion Collection: classic, art-house and international films programmed into themed collections, with supplements from the discs. The design feels like a repertory cinema lobby at night. A charcoal page (`#121212`), square-cornered film stills, a serif display face for titles, small tracked capitals for labels, and an old-gold accent (`#B4841E`) that appears on hover, focus and the main call to action.

What makes it recognisable:

- **Charcoal, not black.** The page is `#121212`; panels step up to `#181818` and `#222222`. Pure black is kept for the player.
- **Gold as a signal.** `#B4841E` marks the primary button, hover frames around artwork, eyebrow labels, film counts, active footer links, text selection and the player progress bar.
- **Serif titles, sans everything else.** Programme and collection titles are Mercury Display; UI is Gotham; labels and buttons are Gotham Narrow in uppercase with 0.08em tracking.
- **Square artwork.** Stills and posters have 0px radius and a hairline frame. On hover a 5px gold frame grows around the image.
- **The C.** The logo mark is a thick open "C" whose cut ends are angled, taken from the Criterion Collection logo.

Density: medium. The home page is a stack of rows ("Popular Movies", "Leaving November 30", "Featured Collections", "Noirvember", "Essential Art House"), each a horizontal strip of 16:9 stills with title and italic meta beneath. Collections and programming notes give it an editorial feel.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Criterion Gold | `#B4841E` | Primary button, hover frame, focus outline, eyebrow and film-count text, progress, `::selection` |
| Charcoal | `#121212` | Page background, `theme-color`, app icon |
| Surface | `#181818` | Form and plan cards, panels |
| Frame | `#1A1A1A` | Artwork frame fill before the image loads |
| Tile | `#222222` | Image placeholder, primary button hover fill |
| Menu | `#0A0A0A` | Player settings and dropdown rows |
| Deep | `#0F0F0F` | Alternate deep panel (approximate role) |
| Black | `#000000` | Player |

### Text

| Name | Value | Use |
| --- | --- | --- |
| White | `#FFFFFF` | Headings, body, logo |
| Paper | `#F7F7F7` | Button labels, copyright |
| Secondary | `rgba(255,255,255,0.6)` (`#fff9`) | Footer nav, naked buttons, secondary actions |
| Title on card | white at 0.8 opacity | Card titles |
| Meta on card | white at 0.4 opacity | Year and runtime in italic serif |
| Light Grey | `#D2D2D2` | Menu item text |
| Mid Grey | `#929292` | Muted labels |
| Error | `#D8645C` | Form errors |

### Borders and overlays

| Name | Value | Use |
| --- | --- | --- |
| Hairline | `rgba(255,255,255,0.06)` (`#ffffff0f`) | Button borders, card frames (0.5px), input borders |
| Glass | `rgba(0,0,0,0.3)` (`#0000004d`) | Secondary buttons, input fill |
| Slide dot | `rgba(255,255,255,0.35)` | Inactive carousel dots |
| Caption scrim | `linear-gradient(transparent, rgba(0,0,0,0.6))` | Text over stills |

### Mode

Dark only. There is no light theme.

## 3. Typography

Three families from Hoefler&Co, all commercial:

- **Gotham** (400, 500): UI text, card titles, sans headings. Fallback **Montserrat**.
- **Gotham Narrow** (500): uppercase eyebrows, buttons, nav, timestamps. Fallback **Montserrat** at 500 with the same tracking, or **Barlow Semi Condensed** for a narrower set.
- **Mercury Display** (400): programme, film and collection titles. Mercury Text G1 Italic for card meta. Fallback **Newsreader** (display and italic).
- System fallbacks used by the site: `Arial, Helvetica, sans-serif` and `Georgia, "Times New Roman", serif`.

### Scale

Class names from the live CSS.

| Class | Font | Size / line | Weight | Tracking |
| --- | --- | --- | --- | --- |
| `header-xxl-serif` | Mercury Display | 45px / 1.2 | 400 | -0.015em |
| `header-xl-serif` | Mercury Display | 41px / 1.2 | 400 | -0.015em |
| `header-xl` | Gotham | 36px / 1.2 | 500 | 0 |
| `header-large` | Gotham | 30px / 1.2 | 500 | 0 |
| `header-medium` | Gotham | 25px / 1.2 | 500 | 0 |
| `header-small` | Gotham | 21px / 1.2 | 500 | 0 |
| `header-xs` | Gotham | 17px / 1.2 | 500 | 0 |
| `header-xs-caps` | Gotham Narrow | 15px / 1.2 | 500 | 0.08em, uppercase |
| `header-eyebrow` | Gotham Narrow | 13px / 1.2 | 500 | 0.08em, uppercase |
| Body | Gotham | 15px / 1.6 | 400 | 0.008em |
| Card meta | Mercury Text G1 Italic | 13px / 1.08 | 400 | 0 |
| Caption | Gotham | 12px / 1.6 | 400 | 0.008em |

### Rules

- Serif for names of things (films, collections, series); sans for everything you read or click.
- Uppercase only in Gotham Narrow, always with 0.08em tracking.
- Timestamps in the player use Gotham Narrow with `font-variant-numeric: tabular-nums` and 0.02em tracking.
- Body copy carries a tiny 0.008em tracking.
- Film titles in programming copy are set in capitals ("DRAGONWYCK", "LAURA").

## 4. Logo & Brand Mark

- **Lockup:** the "C" mark on the left and the three-line wordmark "THE / CRITERION / CHANNEL" on the right, in white. The type is a geometric sans in caps; the mark is the same height as the three lines.
- **Mark:** an open "C" built from a thick ring with angled cuts at both ends of the opening, from the Criterion Collection identity.
- **App icon:** the white C on Charcoal `#121212`, about 60% of the square.
- **Colour versions:** white on charcoal (primary), black on white. Gold is not used for the logo.
- **Size:** the header renders the lockup 36px tall; under 1080px it collapses to the 30px mark alone.
- **Clear space:** at least half the mark's width on every side.
- **Hover:** the header logo fades to 60% white over 700ms.

Misuse: do not close the C, round its cuts, colour it gold, or set "The Criterion Channel" in Gotham as a substitute logo.

## 5. Components

### Buttons

From the `button` module in the live CSS.

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 12px;
  height: 48px; padding: 0 24px;
  border-radius: 100px;
  font: 500 15px/1 "Gotham Narrow", "Montserrat", Arial, sans-serif;
  letter-spacing: .08em; text-transform: uppercase;
  transition: background-color .4s cubic-bezier(.5,0,.15,1), color .4s cubic-bezier(.5,0,.15,1);
}
.btn-small { height: 36px; padding: 0 18px; gap: 6px; font-size: 12px; }

.btn-primary { background: #B4841E; color: #F7F7F7; border: 1px solid rgba(255,255,255,0.06); }
.btn-primary:hover { background: #222222; }

.btn-secondary { background: rgba(0,0,0,0.3); color: #F7F7F7; border: 1px solid rgba(255,255,255,0.06); }
.btn-secondary:hover { background: #B4841E; }

.btn-naked { background: none; border: 0; padding: 0; height: auto; color: rgba(255,255,255,0.6); }
.btn-naked:hover { color: #FFFFFF; }

.btn:focus-visible { outline: 2px solid #B4841E; outline-offset: 3px; }
```

Toggle states: an active primary (for example "In My List") flips to gold text and a gold border on glass; an active secondary fills gold. Chevron icons (24px) follow the label.

### Inputs and form cards

```css
.form-card { background: #181818; border: 0.5px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 36px; gap: 24px; }
.input {
  height: 40px; padding: 0 18px; border-radius: 8px;
  background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.06);
  color: #FFFFFF; font: 400 16px/1.6 "Gotham", "Montserrat", sans-serif;
}
.input:focus-visible { outline: 2px solid #B4841E; outline-offset: 2px; }
.error { color: #D8645C; font-size: 15px; line-height: 1.6; }
```

### Film cards

- 16:9 still (`aspect-ratio: 16/9`), 0 radius, `#222222` placeholder, 0.5px hairline frame.
- Below the image: title in Gotham 500 15px at 80% white, single line with ellipsis; meta in Mercury Text Italic 13px at 40% white ("1950 · 1 hr 34 min").
- Hover (pointer devices): `box-shadow: 0 0 0 5px #B4841E` grows around the image over 600ms; the title goes to full white.
- Rows show 3 cards on tablet, 2 on mobile, more on desktop, with a 24px gap, aligned to the page gutter.

### Collection cards

Same still treatment, with the collection name in Gotham 500 ("Starring Gene Tierney") and the film count in gold Gotham Narrow caps ("10 FILMS"). A round "more" button shows on hover and turns gold.

### Hero slideshow

- Full-width still with text inset from the left gutter to 50% of the width (40% under 1080px; centred under 870px).
- Eyebrow in gold caps, title in Mercury Display 41-45px, a short programming note in 15px Gotham, then "See more" as a primary pill.
- Pager dots: small round dots at 35% white; the active dot grows wider, 400ms.

### Header and navigation

- 80px tall on desktop, 60px under 870px. Logo left; "Home", "New", "All Films" links; search icon; "Subscribe" (primary pill) and "Log In" (naked) right.
- Mobile uses a hamburger (three 2px lines) and the C mark alone.
- Sticky filter bars on browse pages sit under the header with `padding-bottom: 36px`.

### Film detail

Large still at the top, title in Mercury Display, director and year line, runtime, country, then synopsis in 15px Gotham. Primary "Play" pill, secondary "My List". Below: "Supplements" (interviews, essays, video introductions), and collections the film belongs to. Section headings use the eyebrow style.

### Player

- Black background, white controls, focus outlines in gold.
- Seek bar: thin track with a `#B4841E` progress fill; timestamps above in gold Gotham Narrow 15px, tabular numerals.
- Centre play button: 72px circle (96px on large screens, 48px on mobile).
- Settings menu: `#0A0A0A` rows, `#D2D2D2` text, the selected option in gold.

### Plans

The "Select a Plan" page (read on the live site 2026-11-16): two plan options, Annual at $99.99 per year and Monthly at $10.99 per month, on `#181818` cards, selection ring in gold, and a "Continue" primary pill. Intro copy: "A movie lover's dream, Criterion offers exclusive new releases, classic films, and global discoveries, with bonus features, all ad-free."

### Footer

Centred links in Gotham Narrow caps at 60% white with 24px gaps; the active link is gold. Copyright in 12px Gotham, `#F7F7F7`.

## 6. Layout & Spacing

- **Gutters:** `--gutter-size` 60px desktop, 48px tablet, 20px mobile; 200px on very wide screens (1920px and up).
- **Vertical rhythm:** `--block-vspace` 36px desktop / 24px mobile between blocks; `--content-vspace` 24px / 18px inside blocks; `--content-gap` 24px / 12px between cards.
- **Header:** 80px desktop, 60px mobile.
- **Breakpoints:** 360, 480, 870, 1080, 1280, 1920px.
- **Spacing:** multiples of 6: 6, 12, 18, 24, 36, 48, 60.
- **Containers:** card widths are computed from container width (`100cqi`) minus gutters, divided by cards per view.

## 7. Depth, Elevation & Motion

- **Mostly flat.** Depth comes from the three greys (`#121212`, `#181818`, `#222222`) and hairline borders.
- **Shadows:** popovers and menus `0 4px 24px rgba(0,0,0,0.4)` or `0 4px 12px rgba(0,0,0,0.4)`.
- **Gold frame hover:** `0 0 0 5px #B4841E` on artwork, 600ms.
- **Easing:** one curve everywhere, `cubic-bezier(.5,0,.15,1)`. Durations: 150ms for quick fades, 400ms for colour, opacity and transform, 500-600ms for larger reveals, 700ms for the logo hover, 1.4s for the logo's intro transform.
- **Reduced motion:** transitions are dropped under `prefers-reduced-motion: reduce`.

## 8. Iconography & Imagery

- **Icons:** 24px, `fill: currentColor`, solid shapes with 2px-equivalent strokes: chevrons, search, profile, hamburger, play. White in chrome; gold only for hover or selected.
- **Imagery:** restored film stills, chosen for composition, shown square-cornered and uncropped where possible. Black-and-white stills stay black-and-white.
- **Collection art:** custom title cards that pair a still with the collection name.
- **No illustration** in the product; the films are the visuals.

## 9. Voice & Microcopy

Knowledgeable, warm, a little literary. Programming notes read like a repertory cinema calendar.

- Programme note: "The Hollywood icon's porcelain beauty and cool sophistication mask enigmatic depths in atmospheric melodramas (DRAGONWYCK) and stone-cold noir classics (LAURA)."
- Rows: "Popular Movies", "Leaving November 30", "Featured Collections", "Noirvember", "Essential Art House", "All-Time Favorites"
- Collections: "Directed by Kiyoshi Kurosawa", "Starring Harry Dean Stanton", "Rock Biopics That Don't Suck", "Made-for-TV Terror"
- Actions: "See more", "See all", "Subscribe", "Log In", "Continue"
- Meta: "1950 · 1 hr 34 min", "10 Films"
- Casing: title case for collections and rows, caps for film titles inside prose, sentence case for notes.

## 10. Do's and Don'ts

**Do**

- Use `#121212` for the page and step up to `#181818` and `#222222`.
- Save gold `#B4841E` for the primary action, hover frames, focus and small labels.
- Set film and collection titles in a serif; set UI in Gotham.
- Use uppercase Gotham Narrow at 0.08em for buttons and eyebrows.
- Keep artwork square-cornered with a hairline frame.
- Use `cubic-bezier(.5,0,.15,1)` at 400ms for most transitions.

**Don't**

- Don't use pure black for the page or gold for large fills.
- Don't round film stills.
- Don't use the serif for buttons or body copy.
- Don't add bright secondary colours; the palette is greys and gold.
- Don't colour the logo gold.
- Don't use casual or hype copy.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of The Criterion Channel. Page `#121212`, panels `#181818`, placeholders `#222222`, hairline borders `rgba(255,255,255,0.06)`. Text white, secondary `rgba(255,255,255,0.6)`. Accent: Criterion Gold `#B4841E` for the primary button, focus outlines (2px, 3px offset), eyebrow labels and a 5px gold frame (`box-shadow: 0 0 0 5px #B4841E`) on artwork hover. Titles in Mercury Display (fallback Newsreader) at 41-45px, weight 400, -0.015em. UI in Gotham (fallback Montserrat): body 15px/1.6, card titles 15px 500. Buttons and eyebrows in Gotham Narrow uppercase, 0.08em tracking: buttons are 48px pills (radius 100px, padding 0 24px, 15px), small 36px. Primary gold with `#F7F7F7` text, hover `#222222`; secondary `rgba(0,0,0,0.3)`, hover gold. Film cards: 16:9 stills, no radius, title below in Gotham, meta in italic serif at 40% white ("1950 · 1 hr 34 min"). 60px gutters (20px mobile), 80px header, 36px between blocks. Ease `cubic-bezier(.5,0,.15,1)` 400ms.

```css
:root {
  --brand-gold: #B4841E;
  --brand-bg: #121212;
  --brand-surface: #181818;
  --brand-frame: #1A1A1A;
  --brand-tile: #222222;
  --brand-menu: #0A0A0A;
  --brand-black: #000000;
  --brand-text: #FFFFFF;
  --brand-paper: #F7F7F7;
  --brand-text-secondary: rgba(255, 255, 255, 0.6);
  --brand-grey-light: #D2D2D2;
  --brand-grey-mid: #929292;
  --brand-hairline: rgba(255, 255, 255, 0.06);
  --brand-glass: rgba(0, 0, 0, 0.3);
  --brand-error: #D8645C;
  --brand-font-sans: "Gotham", "Montserrat", Arial, Helvetica, sans-serif;
  --brand-font-narrow: "Gotham Narrow", "Montserrat", Arial, Helvetica, sans-serif;
  --brand-font-serif: "Mercury Display", "Newsreader", Georgia, "Times New Roman", serif;
  --brand-tracking-caps: 0.08em;
  --brand-radius-pill: 100px;
  --brand-radius-card: 8px;
  --brand-radius-art: 0px;
  --brand-hover-frame: 0 0 0 5px #B4841E;
  --brand-gutter: 60px;
  --brand-header-height: 80px;
  --brand-block-space: 36px;
  --brand-ease: cubic-bezier(.5, 0, .15, 1);
  --brand-duration: 400ms;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by The Criterion Channel or The Criterion Collection.

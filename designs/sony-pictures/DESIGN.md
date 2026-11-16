---
name: Sony Pictures
shortName: "Sony Pictures"
slug: sony-pictures
url: https://www.sonypictures.com
category: Studio
tagline: "Ink-navy and white, condensed uppercase headlines, one cyan accent and the Columbia torch."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Ink
    hex: "#050811"
    role: Dark section background, body text on white
  - name: White
    hex: "#FFFFFF"
    role: Light sections, text on dark, wordmark on dark
  - name: Cyan
    hex: "#23C0FC"
    role: Accent bars, CTA borders, filled banner buttons
  - name: Slate
    hex: "#292C2F"
    role: Banner and empty-state panels, blockquote rule
  - name: Graphite
    hex: "#2A2D35"
    role: Press blocks, sidebar headers
  - name: Gray
    hex: "#787878"
    role: Link hover, geometric accent outlines
  - name: Focus Blue
    hex: "#3372DF"
    role: Input focus ring
  - name: Placeholder
    hex: "#B1B1B1"
    role: Input placeholder text
  - name: Off White
    hex: "#FAFAFA"
    role: Light panels
  - name: Episode Indigo
    hex: "#2C00AB"
    role: End of the TV episode gradient (from #00002A)
  - name: Columbia Blue
    hex: "#2B5F8C"
    role: Legacy corporate blue in the vector logo file (approximate role)
fonts:
  display:
    family: "Oswald"
    fallback: "Oswald"
    weights: [400, 500]
  body:
    family: "Acumin Pro"
    fallback: "Archivo"
    weights: [300, 400, 600]
typeScale:
  - { role: H1, size: 59, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: H2, size: 46, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: H3, size: 27, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: H5, size: 21, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 300, lineHeight: 1.5625, tracking: "0" }
  - { role: Button, size: 14, weight: 400, lineHeight: 1.5625, tracking: "0.04em" }
  - { role: Small Button, size: 12, weight: 400, lineHeight: 1.4, tracking: "0.04em" }
radii: { sm: 4, md: 6, lg: 16, pill: 25 }
spacing: [5, 10, 15, 20, 25, 40, 60, 100]
shadows:
  - { name: Focus, value: "0 0 0 2px #3372DF" }
  - { name: Cyan Focus, value: "0 0 0 2px #23C0FC" }
preview:
  bg: "#050811"
  surface: "#292C2F"
  text: "#FFFFFF"
  muted: "#B1B1B1"
  border: "#2A2D35"
  accent: "#23C0FC"
  accentText: "#050811"
  radius: 25
  buttonStyle: outline
---

# Sony Pictures

## 1. Visual Theme & Atmosphere

Sony Pictures Entertainment is the film and television arm of Sony, formed when Sony bought Columbia Pictures in 1989 and renamed the business in 1991. Its labels include Columbia Pictures, TriStar, Screen Gems, Sony Pictures Classics, Sony Pictures Animation and Crunchyroll. The brand therefore carries two layers: a clean, modern corporate identity under the Sony name, and the Columbia "Torch Lady", a robed woman holding a torch on a pedestal, painted in its current form in 1992 by Michael Deas, which still opens Columbia films.

sonypictures.com is a dark, editorial film catalogue. Sections alternate between ink-navy `#050811` and white. Headlines are set in Oswald, a condensed sans, uppercase and regular weight, which gives the page a poster-billing feel. Body copy is Acumin Pro Light. One cyan, `#23C0FC`, marks section headers with a short vertical bar, outlines calls to action with a 5px frame and fills banner buttons. Buttons are rounded pills with a white 2px outline over imagery.

What makes it recognisable:

- **Condensed uppercase headlines** in Oswald 400, large and airy (line height 1.4+).
- **Ink and white.** `#050811` and white are the whole base palette.
- **Cyan bar.** A 12 × 39px cyan block to the left of each section header.
- **Outlined pills.** Ghost buttons with 2px white borders on dark art, cyan-filled on banners.
- **Geometric accents.** Large outlined rectangles (5px gray or cyan stroke) behind promo modules.

Density: medium. Big banner carousel, then modules of posters, trailers and press.

## 2. Color Palette & Roles

### Core (from sonypictures.com CSS)

| Name | Hex | Role |
| --- | --- | --- |
| Ink | `#050811` | `.dark` section background; body text and links on white |
| White | `#FFFFFF` | `.light` section background; text on dark |
| Cyan | `#23C0FC` | Section-header bar, CTA frames (`border: .3125rem solid`), banner button fill, focus ring on dark |
| Cyan Translucent | `rgba(35,192,252,0.8)` | Where-to-watch widget fill |
| Slate | `#292C2F` | Light-theme banner panel, no-results box, blockquote rule |
| Graphite | `#2A2D35` | Press blocks, mobile sidebar headers |
| Gray | `#787878` | Link hover on light, geometric outline stroke |
| Placeholder | `#B1B1B1` | Input placeholder |
| Focus Blue | `#3372DF` | Text input focus ring (`box-shadow: 0 0 0 2px`) |
| Off White | `#FAFAFA` | Light panels |
| Link Hover (dark) | `hsla(0,0%,100%,0.8)` | Link and heading-link hover on dark |
| Button Hover Fill | `hsla(0,0%,100%,0.15)` | Ghost button hover |
| Button Rest Fill | `rgba(0,0,0,0.15)` | Ghost button resting fill over art |

### Gradients

| Name | Value | Use |
| --- | --- | --- |
| Episode | `linear-gradient(to right, #00002A, #2C00AB)` | TV episode modules |

### Semantic

The site runs on Bootstrap 5, so semantic colours are Bootstrap defaults: danger `#DC3545`, success `#198754`, warning `#FFC107`, info `#0DCAF0`. Restyle them only if a form needs it.

### Logo colours

The corporate logo is single-colour: black on white or white on dark. The vector file also carries an unused legacy blue `#2B5F8C`. The Columbia Torch Lady is a full-colour painting (sky blue, cloud white, gold light, copper-toned robe) used as artwork, not as UI colour.

### Mode

Mixed. Pages are built from `.dark` (ink) and `.light` (white) sections, so a page alternates. Hero banners and trailer modules are dark.

## 3. Typography

- **Oswald** (Google Fonts) for all headings, weight 400, often uppercase (section headers, banner titles, credit titles). Loaded from Google Fonts with 400 and 500.
- **Acumin Pro** (Adobe Fonts) for body, weight 300, 16px with 25px line height. Fallback: **Archivo**, a Google Font with similar grotesque proportions. After that `Helvetica Neue, Arial, sans-serif`.
- Montserrat 400/500 is also loaded for a few UI pieces.
- The root size scales: `html { font-size: 80% }`, 90% from 26em, 100% from 75em (1200px). All sizes below are at 100%.
- **Sony wordmark** is Sony's own slab-serif logotype; never retype it.

### Scale

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| H1 | 3.713rem (59px) | 400 | 1.45 | Oswald, banner titles; trademark symbol 20px superscript |
| H2 | 2.856rem (46px) | 400 | 1.4 | Oswald, page titles |
| H3 / H4 | 1.69rem (27px) | 400 | 1.2-1.3 | Oswald, module and card titles |
| H5 / H6 | 1.3rem (21px) | 400 | 1.3 | Oswald, video item titles |
| Body | 1rem (16px) | 300 | 1.5625rem (25px) | Acumin Pro, max line 43.75rem (700px) |
| Button | 0.85rem (14px) | 400 | 1.5625rem | Uppercase |
| Small button | 0.769rem (12px) | 400 | 1.4 | Header newsletter button |

### Rules

- Uppercase for section headers, banner titles, press titles and buttons.
- Headlines stay at weight 400; size and the condensed face do the work.
- Body paragraphs cap at 700px wide.
- Blockquotes are italic with a 5px slate left rule.

## 4. Logo & Brand Mark

- **Corporate logo.** A row of vertical strokes that swell into lens shapes and step up in height from left to right, like a waveform or the edge of a film strip, above "SONY PICTURES" in the Sony logotype. This is `logo.svg`. The stroke mark alone is the symbol and the icon here.
- **Site wordmark.** sonypictures.com uses a single-line "SONY PICTURES" in a clean geometric sans, white, about 168 × 13px in the header.
- **Columbia Torch Lady.** The Columbia Pictures logo: a woman in a draped robe holding a torch, a flag-like sash over her shoulder, standing on a pedestal in clouds, with "COLUMBIA PICTURES" and "A Sony Company". It belongs to Columbia films, not to the corporate site chrome.
- **Colour versions:** black on white, white on dark. No colour fills.
- **Clear space:** at least the height of the "S" in SONY on all sides.
- **Minimum size:** logo 40px wide; one-line wordmark 120px wide.
- **Placement:** top-left of the header.

Misuse: do not recolour the mark cyan, stretch the strokes, separate "SONY" from "PICTURES", or mix the Torch Lady into corporate UI.

## 5. Components

Values from sonypictures.com CSS unless marked approximate.

### Buttons

```css
.button {
  display: inline-block; position: relative; overflow: hidden;
  min-width: 10.9375rem; height: 3.125rem; padding: .625rem .9375rem;
  font: 400 .85rem/1.5625rem "Acumin Pro", Archivo, sans-serif;
  text-transform: uppercase; text-align: center; text-decoration: none;
  color: #FFFFFF; background: rgba(0,0,0,.15);
  border: .15rem solid #FFFFFF; border-radius: 1.5625rem;
  transition: border .15s linear, background-color .15s linear, box-shadow .15s linear;
}
.button:hover { color: #FFFFFF; border-color: #FFFFFF; background: hsla(0,0%,100%,.15); transition: all .2s; }

/* banner and about-module CTA */
.banner .button, .about-module .button { background: #23C0FC; border-color: #23C0FC; color: #050811; }

/* header newsletter */
.button--small { min-width: 9.375rem; height: 2.0625rem; padding: .3125rem .625rem; font-size: .769rem; line-height: 1.4; border-width: .1rem; }
```

On mobile, banner buttons stretch to `width: 88vw; height: 12vw; border-radius: 2.5625rem; font-size: 1.2rem`.

A pseudo-element sweeps across the button on hover (`::after` grows to `width: 101%`), giving a fill-wipe effect.

### Section header

```css
.section__header { position: relative; padding-left: 1.25rem; margin-bottom: 1.5625rem; text-transform: uppercase; }
.section__header::after {
  content: ""; position: absolute; top: 1rem; left: 0;
  width: .725rem; height: 2.45rem; background: #23C0FC;
}
```

A "geo" variant adds a large outlined rectangle behind the header (5px border, 225px tall, offset off-canvas).

### CTA frame

```css
.about__cta, .he-promo-module__cta {
  max-width: 38.875rem; padding: 1.5625rem 0; text-align: center;
  border: .3125rem solid #23C0FC;
}
```

### Inputs

```css
.form-item__textfield {
  height: 3rem; padding: 0 1rem;                /* approximate */
  border: 1px solid #B1B1B1; border-radius: 0;   /* approximate */
  transition: border .15s linear, background-color .15s linear, box-shadow .15s linear;
}
.form-item__textfield::placeholder { color: #B1B1B1; }
.form-item__textfield:focus { border-color: transparent; outline: none; box-shadow: 0 0 0 2px #3372DF; }
```

### Header

`.main-header`: flex row, `padding: .9375rem 1.25rem`, space-between. Logo left, main menu, social icons, search and a small newsletter pill right. Over dark banners it is transparent with white text.

### Banner carousel

Full-width key art, title in Oswald H1 uppercase, availability line ("IN THEATERS NOW", "NOW STREAMING"), rating bug, and cyan-filled pill CTA. In light theme the banner gets a slate `#292C2F` panel.

### Cards

Poster and video tiles with no radius (approximate), title in Oswald 27px below, 15px padding. Extras module: dark section 440px tall minimum, items padded 2vw, images capped at 350px wide.

### Press list

Press blocks on `#2A2D35`, white text, 1rem bottom margin; sidebar filter headers uppercase on graphite with a dark bottom border.

### Contextual menus

Round 40px trigger (`border-radius: 20px`), opening into a menu with `border-radius: 20px 20px 0 0` on the trigger.

## 6. Layout & Spacing

- **Max width:** 85.38rem (1366px) for content boxes; text columns 43.75rem (700px).
- **Breakpoints:** 26em (416px), 41em (656px), 48em (768px), 67.5rem (1080px), 75em (1200px); Bootstrap's 576/768/992/1200/1400 also present.
- **Spacing:** multiples of 5px in rem: .3125rem (5), .625rem (10), .9375rem (15), 1.25rem (20), 1.5625rem (25), 2.34rem (37.5), 6.25rem (100).
- **Gutters:** 1.25rem (20px) at the page edge; press pages up to 8rem.
- **Grid:** Bootstrap 12-column with 1.5rem gutters.

## 7. Depth, Elevation & Motion

- Flat. No card shadows; depth comes from photography, dark sections and outlined shapes.
- **Focus rings:** `0 0 0 2px #3372DF` on light, `0 0 0 2px #23C0FC` on dark.
- **Durations:** 0.15s linear for borders and fills, 0.2s for hovers, 0.25s ease-in-out for some panels, 0.3s for colour.
- **Fade-ins:** modules use an `.animate-fade` class (opacity transitions).
- Bootstrap's `prefers-reduced-motion` rules are honoured.

## 8. Iconography & Imagery

- **Icons:** simple filled glyphs for social and play, line icons for search and menu, white on dark.
- **Imagery:** key art, trailers and stills from Sony films and series (Spider-Man, Jumanji, Bad Boys, The Karate Kid), plus anime from Crunchyroll. Wide 16:9 crops for banners, 2:3 for posters.
- **Rating bugs:** MPA rating images sit bottom-right on banners.
- **Torch Lady:** reserve for Columbia-branded content and heritage pages.

## 9. Voice & Microcopy

Straightforward and promotional. Uppercase labels, short calls to action.

- Availability: "IN THEATERS NOW", "NOW STREAMING", "OWN IT ON DIGITAL", "COMING SOON"
- Buttons: "GET TICKETS", "WATCH TRAILER", "WHERE TO WATCH", "SIGN UP"
- Section headers: "MOVIES", "TELEVISION", "PRESS RELEASES", "EXTRAS"
- Corporate: "Sony Pictures Entertainment is a subsidiary of Sony Group Corporation."
- Casing: uppercase for headers and buttons, sentence case for body.

## 10. Do's and Don'ts

**Do**

- Alternate ink `#050811` and white sections.
- Set headings in Oswald 400 uppercase with generous line height.
- Use the cyan bar to mark section headers and cyan frames for CTAs.
- Use outlined white pill buttons over imagery; fill them cyan on banners.
- Keep body copy light (300) and under 700px wide.

**Don't**

- Don't bold Oswald headings; size carries them.
- Don't use more than one accent colour.
- Don't add card shadows or rounded poster corners.
- Don't put the Torch Lady in corporate navigation.
- Don't recolour the logo.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Sony Pictures. Alternate dark sections (`#050811`, white text) and light sections (white, `#050811` text). The single accent is cyan `#23C0FC`. Headings use Oswald weight 400, uppercase: H1 59px/1.45, H2 46px, H3 27px. Body uses Acumin Pro (fallback Archivo) weight 300, 16px/25px, max 700px wide. Every section header has a cyan bar 12px wide and 39px tall on its left, with 20px left padding. Buttons are pills (25px radius), 50px tall, min 175px wide, uppercase 14px, 2px white border on `rgba(0,0,0,.15)`; hover fills `rgba(255,255,255,.15)`; banner CTAs are filled cyan with ink text. Important CTAs sit inside a 5px cyan frame. Panels use `#292C2F` and `#2A2D35`. No shadows, square poster tiles, 0.15s linear transitions, input focus ring `0 0 0 2px #3372DF`. Use the Sony Pictures logo SVG top-left.

```css
:root {
  --brand-ink: #050811;
  --brand-white: #FFFFFF;
  --brand-cyan: #23C0FC;
  --brand-cyan-translucent: rgba(35, 192, 252, 0.8);
  --brand-slate: #292C2F;
  --brand-graphite: #2A2D35;
  --brand-gray: #787878;
  --brand-placeholder: #B1B1B1;
  --brand-focus: #3372DF;
  --brand-off-white: #FAFAFA;
  --brand-button-fill: rgba(0, 0, 0, 0.15);
  --brand-button-hover: hsla(0, 0%, 100%, 0.15);
  --brand-episode-gradient: linear-gradient(to right, #00002A, #2C00AB);
  --brand-font-display: Oswald, "Helvetica Neue", Arial, sans-serif;
  --brand-font-body: "Acumin Pro", Archivo, "Helvetica Neue", Arial, sans-serif;
  --brand-radius-pill: 1.5625rem;
  --brand-border-button: .15rem;
  --brand-border-frame: .3125rem;
  --brand-transition: .15s linear;
  --brand-max-width: 85.38rem;
  --brand-text-width: 43.75rem;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Sony Pictures Entertainment.

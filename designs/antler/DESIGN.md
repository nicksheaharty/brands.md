---
name: Antler
slug: antler
url: https://www.antler.co
category: Accelerator
tagline: "Warm off-white pages, black square-cornered buttons that flash red, a pale mint accent."
updated: 2026-11-16
logoBackground: "#F9F7F5"
theme: light
colors:
  - name: Antler Red
    hex: "#ED4746"
    role: Logo mark color, button hover, heading accents
  - name: Black
    hex: "#1E1E1E"
    role: Text, primary buttons, wordmark
  - name: Off White
    hex: "#F9F7F5"
    role: Light theme page background
  - name: Mint
    hex: "#BADED8"
    role: Brand theme sections, tags, text selection
  - name: Deep Teal
    hex: "#0C1F21"
    role: Dark theme background
  - name: Dark Red
    hex: "#B82B35"
    role: Hover for red buttons
  - name: Sand
    hex: "#F0EBE6"
    role: Secondary light surface
  - name: Stone
    hex: "#E1D7CE"
    role: Tag and card variant fill
  - name: Teal 800
    hex: "#132E31"
    role: Dark secondary surface, announcement banner
  - name: Petrol
    hex: "#1D6F78"
    role: Supporting blue-teal accent
  - name: Burgundy
    hex: "#46061D"
    role: Supporting deep accent
  - name: White
    hex: "#FFFFFF"
    role: Text on dark, cards, primary button on dark
fonts:
  display:
    family: "Satoshi"
    fallback: "Manrope"
    weights: [500]
  body:
    family: "Satoshi"
    fallback: "Manrope"
    weights: [400, 500, 700]
typeScale:
  - { role: Home Hero, size: 88, weight: 500, lineHeight: 1.0, tracking: "-0.03em" }
  - { role: Display, size: 72, weight: 500, lineHeight: 1.0, tracking: "-0.03em" }
  - { role: H1, size: 56, weight: 500, lineHeight: 1.15, tracking: "-0.03em" }
  - { role: H2, size: 48, weight: 500, lineHeight: 1.15, tracking: "-0.03em" }
  - { role: H3, size: 40, weight: 500, lineHeight: 1.15, tracking: "-0.03em" }
  - { role: H5, size: 24, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 3, md: 8, lg: 8, pill: 9999 }
spacing: [6, 10, 14, 16, 24, 32, 48, 64, 100]
shadows: []
preview:
  bg: "#F9F7F5"
  surface: "#F0EBE6"
  text: "#1E1E1E"
  muted: "#5F5F5F"
  border: "#1E1E1E"
  accent: "#1E1E1E"
  accentText: "#FFFFFF"
  radius: 3
  buttonStyle: solid
---

# Antler

## 1. Visual Theme & Atmosphere

Antler is a global early-stage VC (it backs founders "from first check to IPO") with residency programs in cities across Asia Pacific, Europe, the Americas and the Middle East and Africa. Its site looks like a tidy, modern publication: warm off-white pages (`#F9F7F5`), near-black text (`#1E1E1E`), crisp square-cornered black buttons, and a red that appears mainly on hover. A pale mint (`#BADED8`) gives whole sections a calm, slightly clinical tint. Dark sections use a very deep teal (`#0C1F21`) instead of black.

What makes it recognisable:

- **The red square A.** The logo mark is a solid square with an open, crossbar-less "A" cut out of it, followed by widely spaced capitals N T L E R.
- **Black buttons that turn red.** Primary buttons are black with 3px corners; on hover they flood Antler Red `#ED4746`. This red flash is the brand's main interactive moment.
- **Medium-weight, tightly tracked sans.** Satoshi Medium headlines with -0.03em tracking. No bold display type.
- **Serif accents.** A secondary serif (Nib Pro) appears for italic or editorial accents and quotes.
- **Theme bands.** The site is built in Webflow with Lumos theme classes: `u-theme-light` (off-white), `u-theme-brand` (mint), `u-theme-dark` (deep teal). Pages alternate between them.
- **Founder-led hero.** The homepage hero pairs a two-line headline with a horizontal slider of portfolio founders: photo, company logo and a one-line claim.

Mood words: global, sharp, grounded, editorial, ambitious.

## 2. Color Palette & Roles

These come straight from the site's `--swatch--*` tokens.

| Token | Hex | Role |
|---|---|---|
| `--swatch--red` | `#ED4746` | Logo square (brand color), button hover, light-theme heading accent |
| `--swatch--dark-red` | `#B82B35` | Hover for red buttons |
| `--swatch--black` | `#1E1E1E` | Text, borders, primary button fill on light |
| `--swatch--light-100` | `#FFFFFF` | Text on dark, primary button on dark |
| `--swatch--light-200` | `#F9F7F5` | Light theme background |
| `--swatch--light-400` | `#F0EBE6` | Light theme secondary background |
| `--swatch--light-600` | `#E1D7CE` | Tag variant, card fill |
| `--swatch--brand-500` | `#BADED8` | Mint brand theme background, tags, selection |
| `--swatch--brand-400` | about `#C8E5E0` | Default tag fill (mint mixed 20% with white) |
| `--swatch--brand-600` | about `#95B2AD` | Brand theme secondary background (mint mixed 20% with black) |
| `--swatch--dark-900` | `#0C1F21` | Dark theme background |
| `--swatch--dark-800` | `#132E31` | Dark secondary background, announcement bar |
| `--swatch--blue` | `#1D6F78` | Supporting petrol accent |
| `--swatch--burgundy` | `#46061D` | Supporting deep accent |
| Grey | `#D1D1D1` | Light-theme grey utility |

Brand-400 and brand-600 are computed with `color-mix()`, so the hex values above are approximate.

### Themes

| Theme | Background | Text | Heading accent | Primary button | Border |
|---|---|---|---|---|---|
| Light | `#F9F7F5` | `#1E1E1E` | `#ED4746` | black fill, white text | `#1E1E1E` |
| Brand | `#BADED8` | `#1E1E1E` | `#1E1E1E` | black fill | `#1E1E1E` at 20% |
| Dark | `#0C1F21` | `#FFFFFF` | `#BADED8` | white fill, black text | `#FFFFFF` |

Text selection: mint background with black text on light; white on dark.

### Semantic colors

The marketing site has no semantic palette, and the muted text grey `#5F5F5F` used in the preview tokens is an approximation (the site uses black at reduced opacity). For forms use red `#ED4746` for errors, petrol `#1D6F78` for info, and a neutral grey for disabled.

## 3. Typography

**Families**

- **Satoshi** (Indian Type Foundry, free for personal and commercial use via Fontshare) is the primary family: `Satoshi, Arial, sans-serif`. Weights 400, 500, 700.
- **Nib Pro** (commercial) is the secondary serif: `"Nib Pro", Georgia, sans-serif`. Weights 300, 400, 600.

Satoshi is not on Google Fonts. Closest Google substitutes: **Manrope** (or Plus Jakarta Sans) for Satoshi; **Newsreader** for Nib Pro.

The Lumos system trims text boxes (`text-box-trim` with `--trim-top: .36em`, `--trim-bottom: .4em`) so type aligns tightly to its container.

### Scale

Sizes are fluid clamps between a 20rem and 90rem viewport.

| Role | Min to max | Weight | Line height | Tracking |
|---|---|---|---|---|
| Home hero | 48px to 88px | 500 | 1.0 | -0.03em |
| Display | 32px to 72px | 500 | 1.0-1.15 | -0.03em |
| H1 | 32px to 56px | 500 | 1.15 | -0.03em |
| H2 | 26px to 48px | 500 | 1.15 | -0.03em |
| H3 | 24px to 40px | 500 | 1.15 | -0.03em |
| H4 | 24px to 32px | 500 | 1.3 | 0 |
| H5 | 20px to 24px | 500 | 1.3 | 0 |
| H6 / large text | 16px to 18px | 500 | 1.4 | 0 |
| Text main | 16px | 400 | 1.4 | 0 |
| Text small | 14px | 400 | 1.4 | 0 |

### Rules

- Headlines are sentence case, medium weight, tight tracking. Use `text-wrap: pretty` (or `balance` on headings).
- A key word or second line can switch to the red heading accent (light theme) or mint (dark theme).
- Navigation group labels can be uppercase ("ANTLER INSIGHTS", "FOUNDER STORIES"); body copy is never uppercase.
- The serif is for quotes and occasional editorial emphasis, not for UI.

## 4. Logo & Brand Mark

The logo is a solid **square** with a white, crossbar-less "A" (a sharp inverted V) knocked out, followed by the letters **NTLER** in a light geometric sans with wide spacing, so the square reads as the "A" of ANTLER. The site header serves it as a 117 x 28 SVG using `currentColor`, so it renders black on light themes and white on dark.

- **Color versions:** black on off-white (site header); white on deep teal; Antler Red `#ED4746` for the classic full-color version.
- **Mark only:** the square A works as an avatar and favicon.
- **Clear space:** half the square's width on all sides.
- **Minimum size:** 80px wide for the full logo; 16px for the square.

Misuse:

- Do not add a crossbar to the A or round the square's corners.
- Do not set "ANTLER" in a font next to the square; use the drawn letters.
- Do not place the red version on the mint background (low contrast); use black there.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary (light) | `#1E1E1E` | `#FFFFFF` Satoshi 500 16px | 1.5px `#1E1E1E` | 3px | 14px 18px, line-height 1 |
| Primary hover | `#ED4746` | `#FFFFFF` | `#ED4746` | 3px | same |
| Primary (dark) | `#FFFFFF` | `#1E1E1E` | 1.5px white | 3px | same, hover red with white text |
| Secondary | transparent | theme text | 1.5px theme border | 3px | same; hover fills with text color and inverts |
| Red | `#ED4746` | `#FFFFFF` | `#ED4746` | 3px | hover `#B82B35` |
| Round arrow | theme text color | theme background | 1.5px | 100vw | 48px circle, arrow 36% of width; hover red |
| Text link | none | theme text | 1.5px bottom border | 0 | 8px 0; hover border mint or text color |

Transitions: `border-color .2s, color .2s, background-color .2s`.

```css
.antler-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: .875rem 1.125rem; line-height: 1;
  border: .094rem solid #1E1E1E; border-radius: .1875rem;
  background: #1E1E1E; color: #FFFFFF;
  font: 500 1rem Satoshi, Manrope, Arial, sans-serif;
  transition: border-color .2s, color .2s, background-color .2s;
}
.antler-btn:hover { background: #ED4746; border-color: #ED4746; }
.antler-btn--secondary { background: transparent; color: #1E1E1E; }
.antler-btn--secondary:hover { background: #1E1E1E; color: #F9F7F5; }
```

### Navigation

- Full-width bar on the current theme background, logo left (about 117px wide).
- Links: "Locations", "Resources", "Portfolio", "Investors", "About". Locations opens a mega menu grouped by region (Asia Pacific, Europe, Americas, Middle East and Africa) with country links; Resources opens cards for "ANTLER INSIGHTS", "FOUNDER STORIES" and "Cohort Start dates", each with a one-line description and an arrow link.
- Right: "Founder Login" as a secondary button and "Pitch Us" as the primary black button.
- Optional announcement banner above the nav: `#132E31` (or mint) background, small text, close button.
- Nav chevrons rotate on open (200ms ease).

### Cards

- `card_primary`: transparent or theme fill, 1.5px border in the theme border color, 8px radius, padding 16-24px.
- Portfolio and founder cards: photo top (8px radius), company logo, one-line description in 16px, small location or sector tag.
- Whole-card click areas use an absolutely positioned link that inherits the radius.

### Tags

- `tag_wrap`: 3px radius, padding 10-12px, mint-400 fill with black text by default, line-height 1.
- Variants: black with white text, deep teal with white text, sand `#F0EBE6`, stone `#E1D7CE`.
- Use for locations ("Singapore", "Nordics"), sectors and cohort dates.

### Hero founder slider (signature)

A horizontal Swiper carousel under the headline: each slide is a tall founder photo with the company logo overlaid, a small arrow, and a caption such as "Lovable is the world's leading platform for building software with AI." Slides snap, and arrow buttons are round 48px buttons.

### Inputs

Webflow forms: 1.5px black border, 3px radius, 12-14px padding, Satoshi 16px, placeholder grey. Focus: border stays black, add a 2px red or mint outline offset. Error text in red.

### Lists and dividers

Long lists (locations, cohorts, FAQs) use 1.5px rules in the theme border color and an arrow button at the right of each row.

## 6. Layout & Spacing

- **Grid:** 12 columns, 1rem gutter (`--site--gutter`), page margin fluid from 16px to 40px.
- **Max width:** `--max-width--main` (about 1280-1440px, approximate).
- **Spacing tokens (fluid):** space-1 6-8px, space-2 10-12px, space-3 14-16px, space-4 16-24px, space-5 24-32px, space-6 28-40px, space-7 32-48px, space-8 36-64px.
- **Section spacing:** small 32-48px, main 48-64px, large 64-100px; page top padding 148-256px under the fixed nav on landing pages.
- **Breakpoints:** Webflow defaults: 991px, 767px, 479px.
- **Rhythm:** alternate light, mint and dark bands; keep each band to one idea.

## 7. Depth, Elevation & Motion

- Flat. No box shadows in the token set. Depth comes from theme bands and 1.5px borders.
- Border width token: `.094rem` (1.5px).
- Motion: color and border transitions at 200ms ease; nav chevrons rotate 200ms; sliders glide with Swiper's default easing.
- Text links animate their bottom border color only.

## 8. Iconography & Imagery

- **Icons:** simple line arrows (a custom arrow SVG that points right, down or diagonally), small external-link glyphs, chevrons. Stroke about 1.5-2px, square ends. Arrows sit inside round buttons.
- **Photography:** real founders, often portrait crops, natural light, diverse and international casting. Founder photos are paired with company logos.
- **Logos:** portfolio logos in black or white single-color versions.
- No illustration or 3D; color blocks (mint, sand, deep teal) do the decorative work.

## 9. Voice & Microcopy

Short, ambitious, global. Uses "founders", "first check", "day zero", "build". Sentences are clear and plain.

- Sentence case for headings and buttons.
- CTAs: "Pitch Us", "Founder Login", "Visit Antler insights", "View cohort start dates", "View Antler founder stories".

Sample strings (seen on antler.co on 2026-11-16):

- Hero: "Further" over "Faster", split across two lines with a dash before the second word.
- Sub: "Antler is a global early-stage VC investing in the world's best founders from first check to IPO."
- Resource card: "See when new cohorts begin and find the right moment to start building with Antler."
- Slider caption: "micro1 is reinventing global hiring with an AI-native platform."

## 10. Do's and Don'ts

**Do**

- Use off-white `#F9F7F5`, mint `#BADED8` and deep teal `#0C1F21` as theme bands.
- Make primary buttons black with 3px corners and a red `#ED4746` hover.
- Set headlines in Satoshi Medium with -0.03em tracking.
- Use 1.5px borders for cards, inputs and rules.
- Lead with founders: photo, company, one-line outcome.

**Don't**

- Don't use pill buttons for primary actions; round shapes are only for arrow buttons.
- Don't fill large areas with red; it is for the logo, hovers and small accents.
- Don't use pure black `#000000` backgrounds; dark sections are deep teal.
- Don't add drop shadows or gradients.
- Don't set headlines in bold 700.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Antler (antler.co). Warm off-white page `#F9F7F5`, text `#1E1E1E`; alternate with a mint band `#BADED8` and a deep teal dark band `#0C1F21` (white text, mint heading accents). Font: `Satoshi, Manrope, Arial, sans-serif`; headlines weight 500 with -0.03em tracking, line-height 1-1.15, fluid sizes up to 88px; body 16px/1.4. Primary buttons are black `#1E1E1E` with white 16px medium text, 3px radius, 1.5px border, 14px 18px padding, and turn Antler Red `#ED4746` on hover (200ms). Secondary buttons are outlined and invert on hover. Round 48px arrow buttons for sliders and list rows. Cards have a 1.5px border and 8px radius, no shadows. Tags are small mint rectangles with 3px corners. Header: square-A logo left, "Locations / Resources / Portfolio / Investors / About" links, "Founder Login" outline button and "Pitch Us" black button on the right. Hero: two-line headline plus a horizontal slider of founder photos with company logos and one-line captions.

```css
:root {
  --brand-red: #ED4746;
  --brand-red-dark: #B82B35;
  --brand-black: #1E1E1E;
  --brand-white: #FFFFFF;
  --brand-bg: #F9F7F5;
  --brand-sand: #F0EBE6;
  --brand-stone: #E1D7CE;
  --brand-mint: #BADED8;
  --brand-mint-light: #C8E5E0;
  --brand-teal-900: #0C1F21;
  --brand-teal-800: #132E31;
  --brand-petrol: #1D6F78;
  --brand-burgundy: #46061D;
  --brand-font: Satoshi, Manrope, Arial, sans-serif;
  --brand-font-serif: "Nib Pro", Newsreader, Georgia, serif;
  --brand-weight-heading: 500;
  --brand-tracking-tight: -0.03em;
  --brand-border-width: .094rem;
  --brand-radius-sm: .1875rem;
  --brand-radius-md: .5rem;
  --brand-radius-round: 100vw;
  --brand-gutter: 1rem;
  --brand-columns: 12;
  --brand-duration: .2s;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Antler.

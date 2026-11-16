---
name: MetLife
slug: metlife
url: https://metlife.com
category: Insurance
tagline: "Deep MetLife navy, blue-to-green M mark, Ivy Presto serif headlines and calm Inter UI."
updated: 2026-11-16
appStoreId: 570085487
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: MetLife Navy
    hex: "#003652"
    role: Wordmark, text, primary buttons, dark bands
  - name: Mark Blue
    hex: "#41AAD7"
    role: Blue end of the M mark gradient
  - name: Mark Green
    hex: "#68DE94"
    role: Green end of the M mark gradient
  - name: Hover Blue
    hex: "#226587"
    role: Primary button hover, active pagination
  - name: Ice
    hex: "#CBF1FF"
    role: Hover fill on dark backgrounds and menu rows
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Sky
    hex: "#EFFBFF"
    role: Light blue sections, nav pill dropdowns, search field
  - name: Ocean
    hex: "#154865"
    role: Blue band background, selected states
  - name: Dark Teal
    hex: "#01444C"
    role: Teal band background, open nav tray
  - name: Warm White
    hex: "#FBFAF8"
    role: Light grey sections, dialogs
  - name: Stone
    hex: "#C4BEB5"
    role: Hairlines and dividers in the nav
  - name: Sand
    hex: "#EAE7E1"
    role: Slider tracks, quiet fills
  - name: Text
    hex: "#2D2D2D"
    role: Long-form body text
  - name: Link Blue
    hex: "#3185A9"
    role: Search and input borders, secondary links
  - name: Insights Green
    hex: "#8FF5B1"
    role: Insights button, positive highlights
  - name: Critical
    hex: "#943041"
    role: Error and critical actions
fonts:
  display:
    family: "Ivy Presto Text"
    fallback: "Playfair Display"
    weights: [400]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 600, 700]
typeScale:
  - { role: Display Large, size: 130, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Display Small, size: 80, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H1, size: 48, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H2, size: 42, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 36, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H5, size: 26, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Label, size: 14, weight: 600, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 12, lg: 24, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 2px 4px 0 rgba(0,0,0,0.15)" }
  - { name: Dialog, value: "0 4px 20px 0 rgba(0,0,0,0.15)" }
  - { name: Tab Indicator, value: "0 3px 0 0 #003652" }
preview:
  bg: "#FFFFFF"
  surface: "#EFFBFF"
  text: "#003652"
  muted: "#2D2D2D"
  border: "#C4BEB5"
  accent: "#003652"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# MetLife

## 1. Visual Theme & Atmosphere

MetLife's current site is quiet and editorial. White and very pale blue pages carry deep navy `#003652` text, large serif headlines in Ivy Presto, and clean Inter UI. The only bright color is in the logo: an "M" shape with a soft blue-to-green gradient. Navy, ocean blue and dark teal bands give weight to key sections, and warm stone hairlines keep the palette from feeling cold.

What makes it recognisable:

- **Navy as the brand color.** Text, buttons and the wordmark are all `#003652`. There is no bright primary button color; buttons are navy and turn lighter blue `#226587` on hover.
- **The M mark.** Two rising peaks meeting in a V, filled with a gradient from blue `#41AAD7` through aqua `#63CBCE` to green `#68DE94`, with a lime tint at the top right.
- **Serif + sans.** Headlines in Ivy Presto Text (a high-contrast serif, weight 400), everything else in Inter.
- **Soft, cool backgrounds.** Sky `#EFFBFF`, light teal `#F1FEFF`, light green `#F4FFF8` and warm white `#FBFAF8` section washes.
- **Pills in the nav, rectangles in content.** Nav filters and search chips are 999px pills; content buttons are 48px rectangles with 4px corners.
- **A frosted header.** The nav uses a white-to-sky gradient at 75% opacity with a 0.5px stone bottom border.

Mood words: calm, trustworthy, modern, warm, considered.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| MetLife Navy | `#003652` | Text, wordmark, primary button, dark band (`.background-dark-blue`) |
| Hover Blue | `#226587` | Primary hover, active pagination, slider track |
| Ocean | `#154865` | `.background-blue` band, selected chips |
| Dark Teal | `#01444C` | `.background-dark-teal` band, open nav tray |
| Link Blue | `#3185A9` | Search field border, suggestion tables |
| Ice | `#CBF1FF` | Hover on dark backgrounds, hovered rows |
| Sky | `#EFFBFF` | `.background-light-blue`, nav dropdown pill, search input |
| Light Teal | `#F1FEFF` | `.background-light-teal` |
| Light Green | `#F4FFF8` | `.background-light-green` |
| Warm White | `#FBFAF8` | `.background-light-gray`, dialogs |
| Sand | `#EAE7E1` | Quiet fills, slider track on light |
| Stone | `#C4BEB5` | Dividers, nav border, slider edge |
| Warm Grey | `#7C766E` | Disabled text, critical outline |
| Text | `#2D2D2D` | Body text in long-form content |
| White | `#FFFFFF` | Page |

### M mark gradient

The logo file fills the M with a raster gradient; a close vector match:

```css
--brand-mark-gradient: linear-gradient(45deg, #41AAD7 0%, #63CBCE 50%, #68DE94 80%, #BCDE70 100%);
```

Older MetLife material used flat MetLife Blue `#0090DA` (approximate), `#0061A0` and green `#A4CE4E`; a few of those values still appear in the stylesheet but are not the current look.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Insights / positive | `#8FF5B1`, hover `#5ED485` | Insights button, highlights |
| Critical | `#943041` | Critical button, errors |
| Disabled | `#7C766E` on `#F5F2ED` | Disabled buttons |

### Dark bands

On navy, ocean or dark teal backgrounds: white text, white buttons with navy text (hover `#CBF1FF`), white outline pills, and slick dots in white.

## 3. Typography

**Families:** Ivy Presto Text (Adobe Fonts, kit `bwp7faa`, family name `ivypresto-text`) for display and section headlines, Inter for body and UI. Rich-text H2/H3 blocks on older templates use MetLife Circular (a custom geometric sans) at weight 500.

**Licensing:** Ivy Presto is commercial (Adobe Fonts). Free substitute: **Playfair Display** at 400 (higher contrast) or **Libre Caslon Text**. Inter is free.

```css
font-family: 'ivypresto-text', 'Playfair Display', Georgia, serif;   /* headings */
font-family: 'Inter', 'Roboto', 'Open Sans', Arial, sans-serif;      /* body */
```

### Scale (mobile / tablet / desktop)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display large | 80 / 110 / 130px | 400 serif | 1.2 |
| Display medium | 68 / 80 / 110px | 400 serif | 1.2 |
| Display small | 56 / 68 / 80px | 400 serif | 1.2 |
| H1 (`.header-h1`) | 48px | 400 serif | 1.2 |
| H2 | 42px | 400 serif | 1.2 |
| H3 | 36px | 400 serif | 1.2 |
| H5 | 26px | 400 serif | 1.2 |
| H6 | 22px | 400 serif | 1.2 |
| Body | 16px | 400 Inter | 1.5 |
| Button | 16px | 600 Inter | 1.5 |
| Label / eyebrow | 12-14px | 600 Inter uppercase | 1.5 |

### Rules

- Serif headlines are always weight 400; never bold the serif.
- Sentence case for headlines and buttons. Small eyebrows ("TOP BENEFITS PROVIDER", "QUICK LINKS") are uppercase Inter.
- Large figures ("#1 provider", "$1 billion", read on the live site on 2026-11-16) are set in the serif at H2 size.
- Body copy stays at 16px; avoid lighter weights.

## 4. Logo & Brand Mark

The logo is the M mark, a rounded-bottom square whose top edge dips into a V so it reads as an "M" or two hands meeting, followed by the "MetLife" wordmark in navy `#003652` set in a geometric sans with a capital L.

- **Color versions:** gradient mark + navy wordmark on white (primary); gradient mark + white wordmark on navy (`MetLife_primary_RGB_white`).
- **App icon:** gradient mark centred on a deep teal-navy square.
- **Clear space:** about half the mark's width on all sides (approximate).
- **Minimum size:** about 90px wide for the full logo on screen (approximate).

Misuse:

- Do not flatten the mark to a single color unless printing in one color.
- Do not use the retired Snoopy characters or the older blue-and-green box logo.
- Do not stretch the mark or rotate the V.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Size |
|---|---|---|---|---|---|
| Primary (`.button-primary`) | `#003652` | `#FFFFFF` 16px/600 | none | 4px | 48px tall, min 130px, 12px 24px |
| Secondary | transparent | `#003652` | inset 2px `#003652` (approximate) | 4px | same |
| Insights | `#8FF5B1` | `#003652` | none | 4px | same |
| Critical | `#FFFFFF` | `#943041` | inset 2px `#943041` | 4px | same |
| Pill solid | `#003652` | `#FFFFFF` | none | 24px | 4px 16px |
| Pill outlined | `#FFFFFF` | `#003652` | inset 2px `#003652` | 24px | 4px 16px |
| On dark | `#FFFFFF` | `#003652` | none | 4px | same |

States:

- Hover/focus: primary and pill solid `#226587`; secondary fills navy with white text; insights `#5ED485`; critical fills `#943041` with white text; on dark `#CBF1FF`.
- Disabled: `#7C766E` text on `#F5F2ED`, `cursor: not-allowed`.
- Keyboard focus: 3px solid outline with 3px offset (white on dark).

```css
.ml-btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-width: 130px; height: 48px;
  padding: 12px 24px;
  font: 600 16px/1.5 'Inter', sans-serif;
  color: #fff;
  background: #003652;
  border: 0;
  border-radius: 4px;
}
.ml-btn-primary:hover, .ml-btn-primary:focus { background: #226587; }
```

### Navigation

- Enterprise bar: `background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(239,251,255,0.75)), #fff; border-bottom: 0.5px solid #C4BEB5`.
- Logo left; audience and product items in Inter 16px navy; a thin 0.5 x 20px stone divider between groups.
- Nav pills: 26px tall, `padding: 4px 16px`, `border-radius: 999px`, `border: 1px solid rgba(0,54,82,0.7)`; hover 2px navy border on `#EFFBFF`.
- Active item indicator: `box-shadow: 0 3px 0 0 #003652` (2px on smaller items).
- Opening the tray turns the bar navy or dark teal with white text.
- "Log in" opens a panel with secondary-on-dark buttons.

### Search (signature)

Full-screen white overlay. The input is a 61px pill (`border-radius: 999px`, 1px `#3185A9` border, `#EFFBFF` fill, 16px 24px padding). Suggestions sit in a 12px-radius white panel with a `#3185A9` border; rows highlight `#CBF1FF`. Popular searches are outlined pills (`2px solid #003652`, 24px radius, 8px 24px).

### Cards

- White or sky cards, radius 12px, shadow `0 2px 4px rgba(0,0,0,0.15)` or no shadow on tinted sections.
- Product cards: serif H5 title, Inter 16px description, a list of navy text links ("Dental insurance", "Vision insurance", "Pet insurance").
- Stat cards: uppercase eyebrow, serif figure, one-line caption and a footnote number.
- Image cards round the top corners (`8px 8px 0 0` or 12px) and keep the text block square below.

### Quick links

A two-column list ("QUICK LINKS", "I'M LOOKING FOR") with uppercase Inter eyebrows and navy links with right chevrons.

### Carousels

Round 32px arrow buttons (hover `#226587`), and dots 12px that stretch to a 24px pill when active (navy on light, white on dark).

### Inputs and dropdowns

Inputs 48-64px tall, 8px radius, 1px `#67625B` greige border, navy text; dropdown select buttons 64px tall with an 88px chevron zone (approximate for form pages).

### Dialogs

Warm white `#FBFAF8`, radius 12px (16px top corners as a bottom sheet on mobile), shadow `0 4px 20px rgba(0,0,0,0.15)`, scrim `rgba(0,0,0,0.75)`.

## 6. Layout & Spacing

- **Breakpoints:** 768px (tablet), 1024px (desktop), 1300 and 1440px (wide).
- **Container:** about 1200-1300px content width with 24px gutters on mobile and 40-80px on desktop (approximate).
- **Spacing:** 4px base; common gaps 8, 16, 24, 32, 48px; sections 64-96px apart (approximate).
- **Hero:** serif H1 left with one paragraph and one primary button ("Log in to MyBenefits"), photo or illustration right; stacks on mobile.
- **Density:** moderate. Product categories list several plain links each rather than many cards.

## 7. Depth, Elevation & Motion

- Light shadows only: `0 2px 4px rgba(0,0,0,0.15)` for cards, `0 0 15px rgba(0,0,0,0.15)` and `0 4px 20px rgba(0,0,0,0.15)` for dialogs.
- The frosted gradient nav is the main layered effect; no backdrop blur.
- Underline indicators drawn with `box-shadow: 0 3px 0 0 #003652`.
- Motion: `transform .2s ease` on chevrons and arrows, `.3s ease-in-out` for bottom sheets, play buttons scale on focus over 0.5s.

## 8. Iconography & Imagery

- Icons (approximate): simple outlined icons in navy, about 24px, with rounded joins (chevrons, arrows, search, close).
- Photography: real people (families, pets, employees) in bright, natural settings with clean backgrounds; often cropped with 12px corners.

## 9. Voice & Microcopy

Warm, steady and benefits-focused. MetLife speaks about protecting people and what they've built.

- Sentence case; contractions are fine ("you've", "we're").
- Headlines are short promises; body copy explains coverage plainly.
- CTAs name the destination: "Log in to MyBenefits", "Find a dentist", "Find a form", "Contact us".
- Check any rankings or figures on the live site before quoting them.

Sample strings:

- Hero: "Protect what matters most"
- Sub: "MetLife offers group benefits for every stage of life, helping you protect the life you've built and the people you built it for."
- Section: "Coverage for real life"
- Proof: "Why people choose MetLife"

## 10. Do's and Don'ts

**Do**

- Use navy `#003652` for text and primary buttons, `#226587` on hover.
- Set headlines in a serif at weight 400, and UI in Inter.
- Keep the blue-green gradient for the M mark and small accents only.
- Use pale sky, teal and warm-white section washes.
- Use pills for filters and search chips, 4px rectangles for main CTAs.

**Don't**

- Don't introduce a bright blue primary button; MetLife buttons are navy.
- Don't bold the serif or use it for UI labels.
- Don't apply the M gradient to large backgrounds or text.
- Don't use heavy shadows or sharp black text.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of MetLife. White page with navy `#003652` text. Headlines in `'ivypresto-text', 'Playfair Display', Georgia, serif` at weight 400, line-height 1.2 (H1 48px, display up to 80px); body and UI in `'Inter', sans-serif` 16px. The header is frosted: `linear-gradient(180deg, rgba(255,255,255,0.75), rgba(239,251,255,0.75))` with a 0.5px `#C4BEB5` bottom border, logo left (gradient M mark from `#41AAD7` to `#68DE94` plus navy wordmark), nav pills 26px tall with 1px `rgba(0,54,82,0.7)` borders. Primary buttons are navy, 48px tall, 4px radius, 12px 24px padding, 16px/600 white text, hover `#226587`. Sections alternate white, sky `#EFFBFF`, warm white `#FBFAF8` and navy or dark teal `#01444C` bands (white buttons with navy text on dark, hover `#CBF1FF`). Add product category cards with serif titles and lists of navy links, a stats row with uppercase eyebrows and serif figures, and a pill search field (`#EFFBFF`, 1px `#3185A9`). Cards: 12px radius, `0 2px 4px rgba(0,0,0,0.15)`.

```css
:root {
  --brand-navy: #003652;
  --brand-navy-hover: #226587;
  --brand-ocean: #154865;
  --brand-dark-teal: #01444C;
  --brand-link-blue: #3185A9;
  --brand-ice: #CBF1FF;
  --brand-sky: #EFFBFF;
  --brand-light-teal: #F1FEFF;
  --brand-warm-white: #FBFAF8;
  --brand-stone: #C4BEB5;
  --brand-text: #2D2D2D;
  --brand-insights: #8FF5B1;
  --brand-critical: #943041;
  --brand-mark-gradient: linear-gradient(45deg, #41AAD7 0%, #63CBCE 50%, #68DE94 80%, #BCDE70 100%);
  --brand-font-display: 'ivypresto-text', 'Playfair Display', Georgia, serif;
  --brand-font-body: 'Inter', 'Roboto', 'Open Sans', Arial, sans-serif;
  --brand-radius-button: 4px;
  --brand-radius-card: 12px;
  --brand-radius-pill: 999px;
  --brand-button-height: 48px;
  --brand-shadow-card: 0 2px 4px rgba(0,0,0,0.15);
  --brand-shadow-dialog: 0 4px 20px rgba(0,0,0,0.15);
  --brand-nav-bg: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(239,251,255,0.75)), #fff;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by MetLife.

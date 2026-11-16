---
name: ASML
slug: asml
url: https://asml.com
category: Hardware
tagline: "Deep ASML blue, light-blue gradients, Neue Haas Grotesk and clean technical storytelling."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: ASML Blue
    hex: "#10069F"
    role: Logo, primary brand color, headings, dark sections
  - name: Light Blue
    hex: "#1297E4"
    role: Gradient start, icons, highlights
  - name: Bright Blue
    hex: "#063ED1"
    role: Gradient end on buttons
  - name: Yellow
    hex: "#FFD100"
    role: Underline accent on link buttons
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Ink
    hex: "#2B2A3E"
    role: Headings and dark text
  - name: Body Gray
    hex: "#807F8B"
    role: Default body text
  - name: Gray 800
    hex: "#555464"
    role: Secondary headings, strong body
  - name: Gray 100
    hex: "#EFF2F4"
    role: Light section background
  - name: Blue 100
    hex: "#E6F3FB"
    role: Pale blue panels
  - name: Primary 150
    hex: "#DBDAF1"
    role: Pale violet-blue fills
  - name: Primary 700
    hex: "#5851BC"
    role: Secondary brand blue, tags
  - name: Purple
    hex: "#4B31D1"
    role: Gradient accent
  - name: Teal
    hex: "#00BFB3"
    role: Sustainability and secondary accent
  - name: Border Gray
    hex: "#AAAAB2"
    role: Card borders, dividers
fonts:
  display:
    family: "Neue Haas Grotesk"
    fallback: "Inter"
    weights: [300, 500, 700]
  body:
    family: "Neue Haas Grotesk"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Display, size: 64, weight: 500, lineHeight: 1.05, tracking: "-1.5px" }
  - { role: H3 XXL, size: 48, weight: 500, lineHeight: 1, tracking: "-1px" }
  - { role: H3, size: 28, weight: 700, lineHeight: 1.1, tracking: "-0.25px" }
  - { role: Tagline, size: 24, weight: 300, lineHeight: 1.17, tracking: "-0.25px" }
  - { role: Button, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Subtle, value: "0 2px 2px rgba(0,0,0,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#EFF2F4"
  text: "#2B2A3E"
  muted: "#807F8B"
  border: "#AAAAB2"
  accent: "#10069F"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# ASML

## 1. Visual Theme & Atmosphere

ASML makes the lithography machines that pattern microchips, and its site reads like a well-funded science museum: bright white pages, a deep ultramarine brand blue (`#10069F`), soft light-blue gradients, and large, calm grotesk headlines. Content leans on explanation (how chips are made, how EUV light works) as much as on corporate news, so pages mix big photography of machines and cleanrooms with diagrams, stats and long-form reading.

What makes it recognisable:

- **ASML Blue.** A saturated violet-leaning navy `#10069F` for the logo, headings in brand moments and full-bleed dark sections.
- **Light-to-deep blue gradients.** Buttons and highlight panels use a 45 degree gradient from `#1297E4` to `#063ED1`; stat panels fade from ASML Blue to light blue.
- **Neue Haas Grotesk.** Clean, neutral, tightly tracked at display sizes, with a light (300) weight for taglines.
- **Grey body text.** Body copy is a soft grey `#807F8B`, with darker ink `#2B2A3E` for headings.
- **Yellow underline links.** "Read more" style link buttons get a yellow `#FFD100` underline bar.
- **Machine and cleanroom photography.** Huge, precise machines, engineers in bunny suits, wafers catching rainbow light.

Mood words: scientific, precise, calm, optimistic, engineered.

## 2. Color Palette & Roles

Values below come from asml.com Tailwind CSS (`bg-color-*`, `text-color-*` classes).

| Name | Hex | Role |
|---|---|---|
| Primary (ASML Blue) | `#10069F` | Logo, brand panels, gradient start for stats |
| Primary 700 | `#5851BC` | Secondary blue, tags |
| Primary 600 | `#5563AD` | Muted brand blue |
| Primary 350 | `#ABA8DD` | Light brand tint, text on dark |
| Primary 150 | `#DBDAF1` | Pale brand fill |
| Blue 600 (Light Blue) | `#1297E4` | Icons, button gradient start |
| Bright Blue | `#063ED1` | Button gradient end |
| Blue 200 | `#C0E1F4` | Pale blue fill |
| Blue 100 | `#E6F3FB` | Pale blue panels |
| Purple | `#4B31D1` | Gradient accent (blue-purple) |
| Violet | `#B836F2` | Gradient accent (purple-blue) |
| Teal (Green 200) | `#00BFB3` | Sustainability, secondary gradients |
| Yellow | `#FFD100` | Link underline accent |
| Yellow 900 | `#DFD51C` | Yellow borders and text on dark |
| Ink (Gray) | `#2B2A3E` | Headings, dark text |
| Black 900 | `#181818` | Strongest text |
| Gray 850 | `#49494A` | Strong body |
| Gray 800 | `#555464` | Secondary headings |
| Gray 700 | `#807F8B` | Body text default |
| Gray 600 | `#AAAAB2` | Borders on light cards |
| Gray 500 | `#BFBFC4` | Disabled text |
| Gray 250 | `#D5D4D8` | Dividers |
| Gray 100 | `#EFF2F4` | Light section background |
| Red | `#F00000` | Errors |
| White | `#FFFFFF` | Page |

### Gradients

```css
.asml-grad-button   { background-image: linear-gradient(45deg, #1297E4, #063ED1); }
.asml-grad-brand    { background-image: linear-gradient(to right, #10069F, #1297E4); }   /* blue to light blue */
.asml-grad-purple   { background-image: linear-gradient(to right, #4B31D1, #10069F); }   /* approximate direction */
.asml-grad-green    { background-image: linear-gradient(to right, #00BFB3, #1297E4); }   /* approximate direction */
```

### Dark sections

Dark sections use ASML Blue `#10069F` (or near black `#181818` for video) with white headings, `#ABA8DD` secondary text and yellow `#DFD51C` accents. There is no site-wide dark mode.

## 3. Typography

**Family:** Neue Haas Grotesk (the original Helvetica design, revived by Christian Schwartz), loaded as `neueHaasGrotesk`. Asian locales switch to Noto Sans JP, KR, SC and TC.

**Licensing:** commercial. Closest free substitute: **Inter**. Use Inter with slightly tighter tracking at large sizes.

```css
font-family: "neueHaasGrotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
```

### Scale (from asml.com CSS where marked)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero display | 56-72px | 500 | 1.05 | -1.5px (approximate) |
| H3 XXL (`text-h3xxl`) | 48px | 500 | 1 | -1px |
| H3 / H4 large (`text-h3`) | 28px | 700 | 1 | -0.25px |
| H4 / H6 (`text-h4`) | 24px | 700 | 1 | 0 |
| Tagline (`text-htagline`) | 24px | 300 | 1.17 | -0.25px |
| Button | 20px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small / meta | 14px | 400 | 1.43 | 0 |

### Rules

- Sentence case for headlines and buttons.
- Large headlines use negative tracking; small text uses 0.
- Use the Light 300 weight for taglines and intro paragraphs, never for body.
- Stats: very large numbers (64px+) in ASML Blue or white with a short label underneath.
- Body color is grey `#807F8B`; reserve ink `#2B2A3E` for headings.

## 4. Logo & Brand Mark

The ASML logo is the wordmark "ASML" in a heavy, slightly condensed sans, with a distinctive "S" drawn as two swooshes that suggest a lens or a light path. It is set in ASML Blue `#10069F`.

- **Clear space:** at least the height of the "S" upper swoosh on all sides; about one third of the logo height (approximate).
- **Minimum size:** about 60px wide on screen.
- **Color versions:** ASML Blue on white (primary), white on ASML Blue or dark photography.
- **Placement:** top-left of the fixed header at about 108px wide.
- **Misuse:** don't fill the "S" with a gradient, don't recolor to light blue, don't add outlines or place it on busy imagery without a solid backing.

## 5. Components

### Box button (primary)

From asml.com CSS: `.button--box` is 54px tall (`3.375rem`), padding `0.75rem 2rem`, 20px text, with a 45 degree light-blue gradient background on a pseudo-element and an arrow that slides 4px right on hover.

```css
.asml-btn {
  position: relative; display: inline-flex; align-items: center; gap: 12px;
  height: 54px; padding: 12px 32px; border: 1px solid transparent; border-radius: 2px;
  font: 400 20px/1.5 "neueHaasGrotesk", Inter, sans-serif; color: #FFFFFF;
  background-image: linear-gradient(45deg, #1297E4, #063ED1);
  transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
}
.asml-btn .arrow { transition: transform 300ms cubic-bezier(0, 0, 0.2, 1); }
.asml-btn:hover .arrow { transform: translateX(4px); }
.asml-btn--white { background: #FFFFFF; color: #10069F; }       /* on dark; icon in #1297E4 */
.asml-btn:focus-visible { outline: 2px solid #1297E4; outline-offset: 2px; }
```

The corner radius is small and approximate (2px); some variants are fully rounded pills (`9999px`) for filters and chips.

### Yellow-line link button

```css
.asml-yellowline {
  position: relative; display: inline-flex; padding-bottom: 8px;
  font: 500 16px/1.5 "neueHaasGrotesk", Inter, sans-serif; color: #10069F;   /* white on dark */
  background: transparent; border: 0;
  transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
}
.asml-yellowline::after {
  content: ""; position: absolute; left: 0; bottom: 0; height: 2px; width: 40px;   /* approximate */
  background: #FFD100; transition: width 300ms cubic-bezier(0, 0, 0.2, 1);
}
.asml-yellowline:hover::after { width: 100%; }
```

### Header

Fixed, transparent over the hero then white on scroll, slides away on scroll down (`transition: transform .6s`). ASML logo left; main sections centred or right ("Company", "Careers", "Technology", "Products" and more, per today's nav), plus search, saved jobs and a language selector. Mobile: hamburger opening a full-screen panel.

### Hero

Full-bleed photo or video of a machine, a cleanroom or a wafer, with a white or ASML Blue headline at 56-72px on the left and a short tagline in Light 300. Often a single box button.

### Cards

```css
.asml-card {
  background: #FFFFFF; border: 1px solid #AAAAB2; border-radius: 0;   /* approximate */
  padding: 24px; transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.asml-card:hover { box-shadow: 0 2px 2px rgba(0,0,0,0.15); }
.asml-card__image { aspect-ratio: 16 / 9; object-fit: cover; }
.asml-card__label { font-size: 14px; color: #5851BC; }
.asml-card__title { font: 700 24px/1.1 "neueHaasGrotesk", Inter, sans-serif; color: #2B2A3E; }
```

News and story cards: image on top, date or category label, title, and a yellow-line "Read more".

### Facts and figures

Stat blocks with a big number in ASML Blue (or with a blue-to-light-blue gradient clipped to the text), a small line icon in `#1297E4` or teal `#00BFB3`, and a 16px description. On dark panels the icon fill is `#E6F3FB`.

### Stacking stats (signature)

A scroll-driven section where stat cards stack over each other with a gradient title from `#10069F` to transparent, and a sticky headline. Use for "ASML in numbers" style content.

### Read more panel

A collapsible text panel: light (`#FFFFFF` with `#AAAAB2` border) or dark (`#10069F` with white text), with a gradient box button to expand.

### Forms and job search

Inputs 48px tall, 1px `#AAAAB2` border, 2px radius (approximate), 16px text, focus border `#1297E4`. Job search uses pill-shaped filter chips and a list of job cards with location and team labels.

## 6. Layout & Spacing

- **Max width:** about 1600px for wide layouts, content columns around 1200px (from `max-width` breakpoints in CSS, approximate).
- **Side padding:** 32px on mobile, 52px on tablet, 78px on desktop (`main-header-icons` padding values).
- **Breakpoints:** Tailwind-style around 640, 768, 992, 1200 and 1600px.
- **Grid:** 12 columns, 24-32px gutters (approximate).
- **Section rhythm:** 64-96px vertical spacing; alternate white with `#EFF2F4` or pale blue `#E6F3FB` bands.
- **Density:** generous; one idea per section, long reading pages with wide margins.

## 7. Depth, Elevation & Motion

- **Mostly flat.** Depth comes from photography, gradients and color bands. The only shadow in the CSS is a subtle `0 2px 2px rgba(0,0,0,0.15)`.
- **Borders:** 1px `#AAAAB2` or `#D5D4D8`.
- **Easing:** Tailwind defaults dominate: `cubic-bezier(0.4, 0, 0.2, 1)` (in-out) and `cubic-bezier(0, 0, 0.2, 1)` (out). A custom `cubic-bezier(0.45, 0, 0.14, 1.03)` is used for larger reveals.
- **Durations:** 300ms for buttons and links, 600ms for the header hide/show.
- **Scroll motion:** sticky stacking stats, fade-up content, and headroom header.

## 8. Iconography & Imagery

- **Icons:** simple line icons on a 24px grid, 1.5px stroke, in light blue `#1297E4`, teal `#00BFB3` or white. Arrows are the most common.
- **Photography:** precise, clean and well-lit: EUV machines with exposed internals, wafers with diffraction colors, engineers in cleanroom suits, Veldhoven campus architecture. Cool color grading.
- **Diagrams:** explanatory illustrations of light paths, lenses and mirrors, chip layers; flat vector with blue and light-blue lines on white.
- **Video:** slow camera moves over machines; often used as hero backgrounds with a dark overlay.

## 9. Voice & Microcopy

Factual, modest and explanatory. ASML explains the technology and the people behind it, avoiding hype.

- Page title on the live site today: "ASML | The world's supplier to the semiconductor industry"
- Nav seen today: "Company", "Careers", "Technology", "Products", "All about chips", "How microchips are made", "Lithography principles", "EUV lithography", "DUV lithography"
- CTAs: "Read more", "Search jobs", "Explore our products", "Saved jobs"
- Microcopy seen today: "We saved your job", "Skip to main content"

Sentence case throughout. Use plain technical terms and explain them on first use.

## 10. Do's and Don'ts

**Do**

- Use ASML Blue `#10069F` for the logo, brand panels and key numbers.
- Use the 45 degree light-blue gradient (`#1297E4` to `#063ED1`) on primary buttons.
- Set headlines in Neue Haas Grotesk (or Inter) with tight tracking.
- Use grey body text `#807F8B` on white and give pages generous whitespace.
- Use yellow `#FFD100` only as a thin underline accent.
- Show real machines, wafers and cleanrooms.

**Don't**

- Don't use yellow as a fill or button background.
- Don't add heavy drop shadows or glossy effects.
- Don't recolor the logo light blue or apply gradients to it.
- Don't mix more than one gradient family in a section.
- Don't use bold body text; reserve 700 for small headings.
- Don't write marketing superlatives; explain what the technology does.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of ASML (asml.com). White page, headings in ink `#2B2A3E` or ASML Blue `#10069F`, body text grey `#807F8B` at 16px/1.5. Font: `"Neue Haas Grotesk", Inter, "Helvetica Neue", Arial, sans-serif`; headlines 48-72px weight 500 with -1px tracking, taglines 24px weight 300. Primary buttons are 54px tall, 12px 32px padding, 20px text, white on a 45 degree gradient from `#1297E4` to `#063ED1`, near-square corners, with an arrow that slides 4px right on hover. Secondary links are text with a short yellow `#FFD100` underline bar that grows to full width on hover. Use a fixed header that hides on scroll, a full-bleed hero photo of a machine or cleanroom, stat blocks with big ASML Blue numbers and small light-blue line icons, and news cards with 1px `#AAAAB2` borders. Alternate white and `#EFF2F4` sections, with one full-bleed ASML Blue section using white text. Easing `cubic-bezier(0.4, 0, 0.2, 1)`, 300ms. Flat, calm, scientific.

```css
:root {
  --brand-blue: #10069F;
  --brand-blue-700: #5851BC;
  --brand-blue-350: #ABA8DD;
  --brand-blue-150: #DBDAF1;
  --brand-light-blue: #1297E4;
  --brand-bright-blue: #063ED1;
  --brand-pale-blue: #E6F3FB;
  --brand-purple: #4B31D1;
  --brand-teal: #00BFB3;
  --brand-yellow: #FFD100;
  --brand-ink: #2B2A3E;
  --brand-text: #807F8B;
  --brand-text-strong: #555464;
  --brand-border: #AAAAB2;
  --brand-divider: #D5D4D8;
  --brand-surface: #EFF2F4;
  --brand-bg: #FFFFFF;
  --brand-error: #F00000;
  --brand-font: "neueHaasGrotesk", "Neue Haas Grotesk", "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif;
  --brand-gradient-button: linear-gradient(45deg, #1297E4, #063ED1);
  --brand-gradient-brand: linear-gradient(to right, #10069F, #1297E4);
  --brand-radius: 2px;
  --brand-radius-pill: 9999px;
  --brand-shadow: 0 2px 2px rgba(0,0,0,0.15);
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --brand-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --brand-duration: 300ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by ASML.

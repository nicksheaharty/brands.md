---
name: Accenture
slug: accenture
url: https://accenture.com
category: Productivity
tagline: "Black canvas, bold Graphik headlines and a single electric purple greater-than sign."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Core Purple 1
    hex: "#A100FF"
    role: The ">" mark, primary buttons, links, icons
  - name: Black
    hex: "#000000"
    role: Page and nav background
  - name: White
    hex: "#FFFFFF"
    role: Headlines and body text on black
  - name: Core Purple 2
    hex: "#7500C0"
    role: Primary button hover wipe, deep accents
  - name: Core Purple 3
    hex: "#460073"
    role: Dark purple panels and gradients
  - name: Dark Grey
    hex: "#202020"
    role: Cards and raised surfaces on black
  - name: Mid Grey
    hex: "#A2A2A0"
    role: Secondary text, labels, hover text
  - name: Grey
    hex: "#616160"
    role: Borders, disabled text
  - name: Warm Light Grey
    hex: "#E3E3DF"
    role: Light section backgrounds, dividers on white
  - name: Off White
    hex: "#F1F1EF"
    role: Light page sections
  - name: Pressed Purple
    hex: "#57008F"
    role: Primary button active state
  - name: Light Purple
    hex: "#DCAFFF"
    role: Purple tints, tags, highlights on dark
  - name: Pink
    hex: "#FF50A0"
    role: Secondary accent in illustration and data
  - name: Orange
    hex: "#FF7800"
    role: Secondary accent in illustration and data
  - name: Error Red
    hex: "#FF5757"
    role: Form errors
fonts:
  display:
    family: "Graphik"
    fallback: "Inter"
    weights: [500, 600]
  body:
    family: "Graphik"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 80, weight: 500, lineHeight: 1.15, tracking: "-0.03em" }
  - { role: Heading L, size: 48, weight: 500, lineHeight: 1.15, tracking: "-0.03em" }
  - { role: Heading M, size: 32, weight: 500, lineHeight: 1.25, tracking: "-0.02em" }
  - { role: Serif Sub, size: 22, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 16, weight: 500, lineHeight: 1.5, tracking: "-0.005em" }
  - { role: Button, size: 16, weight: 500, lineHeight: 1.5, tracking: "-0.005em" }
  - { role: Label, size: 14, weight: 500, lineHeight: 1.5, tracking: "-0.005em" }
radii: { sm: 0, md: 0, lg: 0, pill: 9999 }
spacing: [8, 16, 24, 32, 48, 64, 96, 160]
shadows:
  - { name: Raised, value: "0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.3)" }
  - { name: Hairline Inset, value: "inset 0 -1px 0 0 rgba(255,255,255,0.2)" }
preview:
  bg: "#000000"
  surface: "#202020"
  text: "#FFFFFF"
  muted: "#A2A2A0"
  border: "#616160"
  accent: "#A100FF"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Accenture

## 1. Visual Theme & Atmosphere

Accenture's site is a black page with big white sans-serif headlines and one hit of electric purple: the ">" from the logo, reused as the brand's graphic device. Corners are square. Buttons are flat purple blocks. Photography and video are cinematic and full bleed. The overall effect is confident and corporate, closer to an agency showreel than a consulting brochure.

The current site runs on Accenture's "rad" component system (`rad-button`, `rad-global-nav`, `rad-hero-text`). Its root sets `html { background:#000; color:#fff }`, so dark is the default; white and warm-grey sections appear for articles and forms.

What makes it recognisable:

- **The purple ">" (the "greater than").** It appears in the logo, as an arrow on buttons and links, as a cropped giant shape in heroes, and as a bullet.
- **Black, white, purple.** Most pages use only these three, plus greys. Secondary accents (pink, orange, amber) are reserved for data and illustration.
- **Heavy, tight headlines.** Graphik Medium at 60-80px with -0.03em tracking.
- **A serif counterpoint.** GT Sectra Fine Book appears in sub-headers and editorial pull quotes.
- **Square everything.** No border radius on buttons, cards or inputs.

Mood words: bold, assured, corporate, dark, kinetic.

## 2. Color Palette & Roles

Values from the live accenture.com "rad" CSS (read 2026-11-16).

| Name | Hex | Role |
|---|---|---|
| Core Purple 1 | `#A100FF` | Brand purple: ">" mark, primary button, links, icons |
| Core Purple 2 | `#7500C0` | Primary button hover (wipes in from the left) |
| Pressed Purple | `#57008F` | Primary button active |
| Core Purple 3 | `#460073` | Dark purple sections and gradients |
| Light Purple | `#DCAFFF` | Tints, highlights on dark |
| Black | `#000000` | Page, nav and footer background |
| Near Black | `#101010` | Alternating sections |
| Dark Grey | `#202020` | Cards and raised surfaces |
| Charcoal | `#2B2B2B` | Inputs and chips on dark |
| Grey | `#616160` | Borders, disabled text |
| Mid Grey | `#A2A2A0` | Secondary text, labels, hover text on secondary buttons |
| Warm Light Grey | `#E3E3DF` | Light sections, dividers on white |
| Off White | `#F1F1EF` | Light page sections |
| White | `#FFFFFF` | Text on black, light pages |

### Secondary accents

Used in charts, illustrations and campaign art only, never for UI chrome.

| Name | Hex |
|---|---|
| Pink | `#FF50A0` |
| Orange | `#FF7800` |
| Amber | `#FEB149` |
| Red | `#FF5757` |

### Semantic colors

| State | Color |
|---|---|
| Error | `#FF5757` text and border on dark; `#E2062E` on light |
| Success | `#299E00` (approximate usage) |
| Focus | `0 0 0 5px #1199FF` (`#19F`) outer ring |

### Light sections

Articles and forms flip to white or `#F1F1EF` with black text and the same purple. Do not use pure grey `#CCCCCC`; the light greys here are warm.

## 3. Typography

**Families:** **Graphik** (Commercial Type) for nearly everything; **GT Sectra Fine** (Grilli Type), Book weight 300, for editorial sub-headers and quotes. Both are commercial.

**Fallbacks:** **Inter** for Graphik; **Playfair Display** (light) for GT Sectra Fine. CSS stack: `Graphik, Arial, Helvetica, sans-serif` and `"GT Sectra Fine", Palatino, serif`.

### Scale (desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (`rad-hero-text__headline`) | 80px (5rem) | 500 | 1.15 | -0.03em |
| Heading L | 48-60px | 500 | 1.15 | -0.03em |
| Heading M | 32px | 500 | 1.25 | -0.02em |
| Serif sub-header | 20-22px GT Sectra Fine | 300 | 1.25 | 0 |
| Body | 16px | 500 | 1.5 | -0.005em |
| Button | 16px (fluid up to 21px) | 500 | 1.5 | -0.005em |
| Label | 12-14px | 500 | 1.5 | -0.005em |

Mobile: hero drops to 32px, then scales fluidly with `calc(… + vw)` between breakpoints.

### Rules

- Body copy is weight 500, not 400. This gives the dark pages their solid, slightly heavy look.
- Sentence case for headlines; Title Case appears in nav labels.
- Underlines on links sit `0.25rem` below the baseline (`text-underline-offset`).
- Put a purple ">" before or after short calls to action rather than using bold.

## 4. Logo & Brand Mark

The logo is the lowercase wordmark "accenture" in black or white, with a purple ">" above and between the "t" and the "u". Since the 2023 refresh the ">" is solid `#A100FF` and the wordmark is a custom heavy sans.

- **Color versions:** black wordmark with purple ">" on white (primary); white wordmark with purple ">" on black; all white on purple.
- **The ">" alone:** used as the app icon, favicon and a graphic device. It can be scaled up and cropped in hero art.
- **Clear space:** at least the height of the "a" on all sides.
- **Minimum size:** about 80px wide on screen.

Misuse:

- Do not recolor the ">" to any color other than Core Purple 1 (or white in one-color use).
- Do not rotate the ">" to point another way.
- Do not set "accenture" in Graphik as a substitute.
- Do not place the logo on busy photography without a dark overlay.

## 5. Components

### Buttons (rad-button)

| Variant | Background | Text | Border | Notes |
|---|---|---|---|---|
| Primary | `#A100FF` | white 16px/500 | none | Hover: `#7500C0` wipes in left to right over 550ms |
| Primary active | `#57008F` | white | none | |
| Secondary | transparent | white | 1px solid currentColor | Purple ">" icon on the right, hover text `#A2A2A0` |
| Tertiary / link | transparent | white | none | Purple ">" after the label, underline on hover |
| On light | `#A100FF` / black text links | | | Same shapes on white sections |

- Min height 48px on mobile, 64px on wide screens. Padding left/right 20px (fluid to about 27px). Radius 0.
- The hover wipe: a pseudo-element with `linear-gradient(90deg, #7500C0 50%, #A100FF 0)` at `background-size: 200%`, sliding `background-position-x` from 100% to 0 with `cubic-bezier(0.85,0,0,1)`.
- Focus: outer ring `0 0 0 5px #1199FF`.

```css
.btn-primary {
  position: relative; display: inline-flex; align-items: center;
  min-height: 48px; padding: 0 20px;
  font: 500 16px/1.5 Graphik, Inter, Arial, sans-serif; letter-spacing: -0.005em;
  color: #fff; border: 0; border-radius: 0;
  background: linear-gradient(90deg, #7500C0 50%, #A100FF 0);
  background-size: 200% 100%; background-position-x: 100%;
  transition: background-position-x 550ms cubic-bezier(0.85, 0, 0, 1);
}
.btn-primary:hover { background-position-x: 0; }
.btn-primary:active { background: #57008F; }
```

### Global nav

- Fixed black bar, 56px (mobile), 64px (tablet), 72px (desktop). Padding 80px left/right on wide screens.
- Logo left in white with purple ">". Center/right: "Insights", "What we do", "Who we are", "Careers" at 16px/500 white. Search icon and a country/language selector at right.
- Mega menu drops from the top over 550ms with `cubic-bezier(0.85,0,0,1)`, black background, columns of white links, hover turns purple.

### Hero

Full-bleed video or image with a dark gradient overlay, headline bottom-left in 60-80px white, one primary button below. Some heroes crop a giant purple ">" across the frame.

### Cards (content grid)

- Rectangular, no radius, about 276-300px wide and 424-565px tall in carousels.
- Image fills the top two thirds; below it a 14px grey eyebrow, then a 20-24px white title.
- Hover: the card scales slightly (`scale` transition 550ms `cubic-bezier(0.85,0,0,1)`) and a purple ">" appears.
- Grids: 2 columns with 48px gaps on desktop, horizontal scroll with 16px gaps on mobile.

### Chips

Height 48-64px, white text on `#202020`, square corners, a 1px `#616160` border; selected chip turns purple fill.

### Inputs

- Label above: 12-14px/500 `#A2A2A0`, 8px gap.
- Field: transparent or `#202020` background, 1px `#616160` bottom or full border, white 16px text, square corners.
- Focus: border `#A100FF` or the blue focus ring. Error: `#FF5757` border and message.

### Accordion

Rows separated by 1px `rgba(255,255,255,0.2)` hairlines (`inset 0 -1px 0 0`). Toggle is a purple plus/minus. Content opens with `max-height` over 550ms.

### Stats and quotes

Big numbers in Graphik 500 at 60px+ in purple or white with a 16px label. Quotes use GT Sectra Fine 300 at 28-40px in white with a purple ">" as the opening mark.

## 6. Layout & Spacing

- **Spacing tokens (`--rad-spacing-*`):** sm 16 / md 32 / lg 48 / xl 96 / xxl 160px on mobile, growing to 24/48/64/120/200px and above on larger screens.
- **Max width:** content inside a 1920px frame with 80px side padding on desktop; text columns cap around 800px.
- **Gutters:** 16px mobile, 32-48px tablet, 80px desktop.
- **Breakpoints:** fluid type and spacing interpolate with `calc(rem + vw)` between roughly 600, 1024 and 1440px.
- **Rhythm:** large vertical gaps (96-200px) between sections; content inside sections is compact.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Raised | `0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.3)` |
| Hairline | `inset 0 -1px 0 0 rgba(255,255,255,0.2)` |
| Focus | `0 0 0 5px #1199FF` |

- Depth is mostly flat: color blocks and hairlines, not shadows.
- **Signature easing:** `cubic-bezier(0.85, 0, 0, 1)` at 550ms for nav entry, button wipes, accordions and card scale. It starts slow, snaps, then settles.
- Respect `prefers-reduced-motion` by dropping the wipe to an instant color change.

## 8. Iconography & Imagery

- **Icons:** an icon font ("icont") of simple line icons at 16-24px, white or purple. Arrows are always the ">" chevron.
- **Photography:** cinematic, high contrast, often dark, real people in work settings, with deep shadows that blend into the black page.
- **Graphic device:** the ">" scaled up, cropped, layered, or turned into gradients from `#A100FF` to `#460073`.
- **Data viz:** purple first, then pink, orange, amber, blue for extra series.

## 9. Voice & Microcopy

Assertive, short and outcome-focused. Headlines are statements, often two to five words.

- Hero: "Together We Reinvented" (live homepage headline, 2026-11-16).
- CTAs: "Learn more", "Explore", "Read the report", "Contact us", "See our work". Each with a purple ">".
- Labels: "Insights", "What we do", "Who we are", "Careers".

## 10. Do's and Don'ts

**Do**

- Use a black page with white Graphik 500 text and one purple `#A100FF`.
- Keep every corner square.
- Use the ">" as arrow, bullet and graphic device.
- Use the 550ms `cubic-bezier(0.85,0,0,1)` easing for reveals and hovers.
- Pair big sans headlines with a GT Sectra Fine sub-header for editorial pages.

**Don't**

- Don't round buttons or cards.
- Don't introduce other primary colors for UI; pink and orange are for data and art.
- Don't use thin weights for headlines.
- Don't point the ">" left, up or down.
- Don't use soft drop shadows to separate cards; use color blocks.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Accenture. Black page (`#000`), white text, one accent: electric purple `#A100FF`. Font: `Graphik, Inter, Arial, sans-serif`; body weight 500 at 16px, line-height 1.5, letter-spacing -0.005em; headlines weight 500 at 48-80px with -0.03em tracking. Use `"GT Sectra Fine", "Playfair Display", serif` at weight 300 for sub-headers and quotes. All corners square (radius 0). Fixed black nav 72px tall with white links. Primary button: purple fill, white text, min-height 48-64px, padding 0 20px, hover wipes `#7500C0` in from the left over 550ms using `cubic-bezier(0.85,0,0,1)`. Secondary button: 1px white outline with a purple ">" chevron. Cards are rectangular image tiles with grey eyebrow and white title on `#202020`. Use the ">" shape as the arrow icon and as a giant cropped hero graphic. Section spacing 96-160px. Copy is short and assertive.

```css
:root {
  --brand-purple: #A100FF;
  --brand-purple-2: #7500C0;
  --brand-purple-3: #460073;
  --brand-purple-pressed: #57008F;
  --brand-purple-light: #DCAFFF;
  --brand-black: #000000;
  --brand-near-black: #101010;
  --brand-surface: #202020;
  --brand-charcoal: #2B2B2B;
  --brand-grey: #616160;
  --brand-grey-mid: #A2A2A0;
  --brand-grey-warm: #E3E3DF;
  --brand-off-white: #F1F1EF;
  --brand-white: #FFFFFF;
  --brand-pink: #FF50A0;
  --brand-orange: #FF7800;
  --brand-amber: #FEB149;
  --brand-error: #FF5757;
  --brand-focus: #1199FF;
  --brand-font: Graphik, "Inter", Arial, Helvetica, sans-serif;
  --brand-font-serif: "GT Sectra Fine", "Playfair Display", Palatino, serif;
  --brand-radius: 0;
  --brand-space-sm: 16px;
  --brand-space-md: 32px;
  --brand-space-lg: 48px;
  --brand-space-xl: 96px;
  --brand-space-xxl: 160px;
  --brand-nav-height: 72px;
  --brand-shadow-raised: 0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.3);
  --brand-hairline: inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);
  --brand-ease: cubic-bezier(0.85, 0, 0, 1);
  --brand-duration: 550ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Accenture.

---
name: State Street
shortName: State Street
slug: state-street
url: https://statestreet.com
category: Finance
tagline: "Electric blue wave mark, navy Inter text and square outline buttons on white."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Electric Blue
    hex: "#001AFF"
    role: Logo, links, outline buttons, active states
  - name: Navy
    hex: "#020B5B"
    role: Body text, headings, button hover fill
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Ice
    hex: "#E7F5FF"
    role: Global nav bar, mega-menu panels, popovers
  - name: Sky
    hex: "#65CCE9"
    role: Infographic accent, highlights on dark
  - name: Violet
    hex: "#7224D8"
    role: Secondary accent, "see more" chips, progress
  - name: Green
    hex: "#31A081"
    role: Data accent, active tab underline on campaign pages
  - name: Slate
    hex: "#5C6670"
    role: Secondary text, captions
  - name: Silver
    hex: "#C6C6C6"
    role: Borders, table rules
  - name: Mist
    hex: "#EFF4F7"
    role: Subtle section background
  - name: Error
    hex: "#A6100F"
    role: Form errors
fonts:
  display:
    family: "LabAntiqua"
    fallback: "Source Serif 4"
    weights: [600]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [300, 400, 600, 700]
typeScale:
  - { role: Hero, size: 65, weight: 600, lineHeight: 1.1, tracking: "0" }
  - { role: H1, size: 50, weight: 600, lineHeight: 1.1, tracking: "0" }
  - { role: H2, size: 35, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 28, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 20, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.63, tracking: "0" }
  - { role: Label, size: 14, weight: 600, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 4, lg: 10, pill: 9999 }
spacing: [4, 8, 10, 16, 20, 30, 40, 60, 80]
shadows:
  - { name: Card, value: "0 4px 6px rgba(0,0,0,0.1)" }
  - { name: Popover, value: "0 0 10px rgba(0,0,0,0.15)" }
  - { name: Modal, value: "0 8px 40px rgba(0,0,0,0.6)" }
preview:
  bg: "#FFFFFF"
  surface: "#E7F5FF"
  text: "#020B5B"
  muted: "#5C6670"
  border: "#C6C6C6"
  accent: "#001AFF"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: outline
---

# State Street

## 1. Visual Theme & Atmosphere

State Street's current identity is a clean, institutional look built around one saturated color: an electric blue (`#001AFF`). The logo pairs a mark of three horizontal bands (a wave, a straight bar, a wave) with a stacked, bold "STATE STREET" wordmark. On statestreet.com that blue does almost all the work: links, outline buttons, the logo and active states. Text is a deep navy (`#020B5B`), not black, and the background is plain white with pale ice-blue (`#E7F5FF`) panels for navigation.

What makes it recognisable:

- **One loud blue.** `#001AFF` is close to pure RGB blue. Everything else stays navy, white and pale blue so the accent reads clearly.
- **Navy text.** Body and headings are `#020B5B`; there is almost no grey text.
- **Serif-flavoured display headlines.** Hero titles are set in LabAntiqua at 600, a condensed display face, while all UI and body copy is Inter.
- **Square outline buttons.** CTAs are 1px blue rectangles with blue text that fill navy on hover. No pills.
- **Ice-blue navigation.** The global utility bar and mega-menu panels sit on `#E7F5FF`.
- **20px root size.** The stylesheet sets `html { font-size: 20px }`, so `1rem = 20px`. Keep this in mind when copying rem values.

Mood words: institutional, clear, modern, confident, restrained.

## 2. Color Palette & Roles

Hex values were read from the live stylesheet (`stt-global` clientlib) on statestreet.com.

| Name | Hex | Role |
|---|---|---|
| Electric Blue | `#001AFF` | Logo, `a` color, button border and text, hover color in menus |
| Navy | `#020B5B` | Body text (`body { color }`), headings, button hover fill |
| White | `#FFFFFF` | Page background, text on navy |
| Ice | `#E7F5FF` | Global nav bar, mega-menu sub-panels, popovers |
| Mist | `#EFF4F7` | Light section background |
| Slate | `#5C6670` | Captions, metadata, secondary text |
| Silver | `#C6C6C6` | Borders, table rules, input outlines |
| Divider | `#D8D8D8` | Lighter separators |
| Sky | `#65CCE9` | Infographic highlights, accents on dark |
| Violet | `#7224D8` | "See more" chips (on 6% violet tint), progress |
| Green | `#31A081` | Campaign tab underline and data accent |
| Teal Dark | `#091B23` | Text on light campaign pages |
| Error | `#A6100F` | Form errors, on `#FFF6F5` background |

### Semantic colors

| State | Color | Use |
|---|---|---|
| Error | `#A6100F` text, `#FFF6F5` fill | Form validation and cookie errors |
| Success | `#31A081` | Positive data, confirmations (approximate) |
| Focus | `#001AFF` at 60% (`rgba(0,26,255,.6)`) | Focus ring |
| Link hover | `#020B5B` | Navy on hover |

### Dark sections

Navy `#020B5B` bands with white text and white outline buttons (hover: white fill, navy text). Sky `#65CCE9` is used for highlights on these bands.

## 3. Typography

**Families:**

- **LabAntiqua** (weight 600, "SmallCondensed" cut): hero and article titles, `h1.extra`, big infographic numerals.
- **Inter** (300, 400, 600, 700): everything else, self-hosted.

**Licensing:** Inter is free on Google Fonts. LabAntiqua is a commercial face; use **Source Serif 4** at 600 as an approximate stand-in (the real face is narrower).

```css
html { font-size: 20px; }
body { font-family: "Inter", Arial, sans-serif; color: #020B5B; line-height: 1.3rem; }
.display { font-family: "LabAntiqua", "Source Serif 4", Georgia, serif; font-weight: 600; }
```

### Scale (px at the 20px root)

| Role | Size | Weight | Line height | Notes |
|---|---|---|---|---|
| Hero (`3.25rem`) | 65px | 600 | 1.1 | LabAntiqua, campaign heroes |
| H1 (`2.5rem`) | 50px | 600 | 1.1 | 35px on mobile |
| H2 (`1.75rem`) | 35px | 600 | 1.2 | Approximate role |
| H3 (`1.4rem`) | 28px | 600 | 1.3 | Approximate role |
| Lead (`1rem`) | 20px | 300 | 1.5 | Intro paragraphs |
| Body (`.8rem`) | 16px | 400 | 26px | Default text |
| Label / button (`.8rem`) | 16px | 600 | 1.2 | Buttons, nav |
| Small (`.7rem`) | 14px | 400 | 1.4 | Captions, footnotes |

### Rules

- Sentence case for headings, buttons and nav.
- Headings at 600; Inter 300 for lead paragraphs gives the light, open feel.
- Do not use LabAntiqua below 28px.
- Big statistics use LabAntiqua at very large sizes (up to 250px on campaign pages) with tight negative tracking.

## 4. Logo & Brand Mark

The logo is a **symbol plus stacked wordmark**, both in Electric Blue `#001AFF`.

- **Symbol:** three horizontal bands of equal weight: an S-curve wave on top, a straight bar in the middle, a wave at the bottom. It reads as a stylised "street" or flow lines and also hints at an equals sign.
- **Wordmark:** "STATE" over "STREET" in a bold geometric sans, all caps, left-aligned to the right of the symbol.
- **Color versions:** blue on white (primary), white on blue, white on navy.
- **Clear space:** at least the height of one band of the symbol on all sides.
- **Minimum size:** about 20px tall (the sticky header renders it at 20px).
- **Icon:** the symbol alone in white on `#001AFF`.

Misuse:

- Do not put the blue logo on navy; switch to white.
- Do not set the wordmark on one line or in Inter.
- Do not rotate the bands or add gradients.

## 5. Components

### Buttons (`ssmp-ctalink--button`)

Square corners. The default CTA is an outline.

| Variant | Fill | Text | Border | Padding |
|---|---|---|---|---|
| Outline (default) | transparent | `#001AFF` 600 16px | 1px `#001AFF` | 16px 40px |
| Solid | `#001AFF` | `#FFFFFF` | 1px `#001AFF` | 16px 40px |
| Outline on dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | 16px 40px |
| Card CTA | `#FFFFFF` | `#020B5B` | none | 10px 40px |
| Text link | none | `#001AFF` | none | 0 |

States:

- Hover (outline and solid): `background: #020B5B; border-color: #020B5B; color: #fff`.
- Hover (on dark): white fill, navy text.
- Transition: `color 200ms ease, background-color 200ms ease, border-color 200ms ease`.
- Focus: outline in `rgba(0,26,255,.6)`.

```css
.ss-btn {
  font: 600 16px/1.2 "Inter", Arial, sans-serif;
  color: #001AFF; background: transparent;
  border: 1px solid #001AFF; border-radius: 0;
  padding: 16px 40px; display: inline-block; text-align: center;
  transition: color 200ms ease, background-color 200ms ease, border-color 200ms ease;
}
.ss-btn:hover { color: #fff; background: #020B5B; border-color: #020B5B; }
```

### Links

`a { color: #001AFF; text-decoration: none; transition: color 100ms ease; }`. Underline appears on hover in body copy; nav links turn blue on hover.

### Inputs (Marketo forms)

- 1px border `#C6C6C6`, square corners, 16px Inter, 44-48px tall (approximate).
- Labels above, 14-16px 600 navy.
- Invalid: border `#A6100F`, message 16px `#A6100F` below.

### Cards

- Teaser cards (layout approximate): image on top (16:9), 20px LabAntiqua or Inter 600 title in navy, 16px body, blue text link.
- Flat by default; some interactive cards use `0 4px 6px rgba(0,0,0,.1)`.
- Radius 0 for content cards; small chips use 6px.

### Navigation

- Two tiers. Top: an Ice `#E7F5FF` utility bar with "Careers", "Newsroom", "Investors", "State Street Investment Management" and location and role selectors.
- Main bar: logo left, site sections, search (labels change by region and role). Sticky on scroll: utility bar hides, logo shrinks to 20px tall, padding 10px.
- Mega-menu panels: Ice background, navy text, blue on hover.
- Location/role popover: Ice background, 200px minimum width.

### Chips ("see more")

Height 34px, radius 6px, padding 0 10px, Inter 600 15px, Violet `#7224D8` text on `rgba(114,36,216,.06)`, 12px chevron.

### Tables

- Header and row rules in navy or `#C6C6C6`, Inter 16px.
- On mobile, tables collapse into stacked cards with a navy top border per row.

### Infographic tabs (campaign pages)

Vertical list of sections; the active one gets a 4px left border in Sky `#65CCE9` or Green `#31A081` and 18px left padding.

### Accordions

Approximate: plain rows with a navy title, 1px rule, plus/minus icon in blue, body hidden until open, 40px bottom margin.

## 6. Layout & Spacing

- **Breakpoints:** 600, 840, 1024 and 1366px (`max-width: 599px`, `839px`, `1023px`, `1365px` in the CSS).
- **Content width:** about 1280-1300px at the largest breakpoint (approximate), 30-40px side gutters on desktop, 20px on mobile.
- **Spacing:** values are written in rem at a 20px root, so common steps are 10, 20, 30, 40 and 60px; 0.05rem gives a 1px border.
- **Section rhythm:** 60-80px between sections on desktop.
- **Scroll padding:** `scroll-padding-top: 140px` to clear the sticky header.
- **Density:** generous; one idea per section, wide images, short paragraphs.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Card | `0 4px 6px rgba(0,0,0,.1)` | Hover and interactive cards |
| Popover | `0 0 10px rgba(0,0,0,.15)` | Dropdowns |
| Overlay | `0 0 1rem rgba(0,0,0,.5)` | Video and side panels |
| Modal | `0 8px 40px rgba(0,0,0,.6)` | Modal dialogs |

- Most of the site is flat; elevation is the exception.
- Transitions: 200ms `ease` for color; 400ms for panel and transform changes; 600ms for larger reveals.
- Smooth scrolling is on (`scroll-behavior: smooth`).

## 8. Iconography & Imagery

- **Icons (approximate):** thin line icons in Electric Blue or navy, 16-24px, square caps. Chevrons and plus signs are the most common.
- **Photography (approximate):** cool, bright corporate photography: city architecture, people in meetings, abstract light and data. Often tinted toward blue.
- **Graphics:** abstract wave and band shapes echo the logo symbol; data visualisations use blue, sky, violet and green.
- **Statistics:** huge LabAntiqua numerals with gradient or solid fills on campaign pages.

## 9. Voice & Microcopy

Measured, expert, institutional. Writes for asset owners, asset managers and their operations teams. Prefers research framing ("study", "insights", "what it means") to sales language.

- Sentence case.
- Headlines state a finding or a tension, then a short explanation.
- CTAs are short verbs: "Read the study", "Explore", "Learn more", "Contact us".

Sample strings (read on the live site today):

- "The 2026 Digital Assets Study: Trust and security take center stage"
- "Digital assets are moving closer to the mainstream, but wider adoption brings new expectations."
- "The changing economics of ETFs"
- "New entry pathways are lowering barriers to launching ETFs, but access is not the same as advantage."
- Utility nav: "Careers", "Newsroom", "Investors", "Select a location", "Select your role"

## 10. Do's and Don'ts

**Do**

- Use `#001AFF` as the single accent and `#020B5B` for text.
- Keep buttons square with a 1px blue outline; fill navy on hover.
- Use Ice `#E7F5FF` for navigation surfaces.
- Set big headlines in a condensed display face at 600 and body in Inter.
- Keep layouts flat and white with plenty of space.

**Don't**

- Don't use pure black text.
- Don't round buttons into pills.
- Don't mix the electric blue with other saturated blues.
- Don't stack heavy shadows on cards.
- Don't write promotional or hyped copy; frame content as research.

## 11. Agent Prompt Guide

> Build this UI in the style of State Street. White page, text in deep navy `#020B5B`, secondary text `#5C6670`, borders `#C6C6C6`, navigation panels in ice blue `#E7F5FF`. One accent: electric blue `#001AFF` for links, the logo and buttons. Body font Inter 16px, line-height 26px, headings Inter or a condensed display serif (LabAntiqua, fallback Source Serif 4) at weight 600: H1 50px/1.1, H2 35px, H3 28px. Buttons are square (radius 0) outlines: 1px `#001AFF` border, `#001AFF` 600 16px text, padding 16px 40px; on hover they fill navy `#020B5B` with white text in 200ms. Header has an ice-blue utility bar above a white main bar with a sticky, compact state. Mostly flat surfaces; occasional `0 4px 6px rgba(0,0,0,.1)` on cards. Accent colors for data only: sky `#65CCE9`, violet `#7224D8`, green `#31A081`. Copy is measured and research-led, sentence case.

```css
:root {
  --brand-blue: #001AFF;
  --brand-navy: #020B5B;
  --brand-bg: #FFFFFF;
  --brand-ice: #E7F5FF;
  --brand-mist: #EFF4F7;
  --brand-slate: #5C6670;
  --brand-border: #C6C6C6;
  --brand-sky: #65CCE9;
  --brand-violet: #7224D8;
  --brand-green: #31A081;
  --brand-error: #A6100F;
  --brand-error-bg: #FFF6F5;
  --brand-focus: rgba(0,26,255,.6);
  --brand-font: "Inter", Arial, sans-serif;
  --brand-font-display: "LabAntiqua", "Source Serif 4", Georgia, serif;
  --brand-radius: 0;
  --brand-radius-chip: 6px;
  --brand-btn-padding: 16px 40px;
  --brand-shadow-card: 0 4px 6px rgba(0,0,0,.1);
  --brand-shadow-popover: 0 0 10px rgba(0,0,0,.15);
  --brand-ease: ease;
  --brand-duration: 200ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by State Street.

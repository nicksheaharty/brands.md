---
name: ING
slug: ing
url: https://ing.com
category: Banking
tagline: "ING orange lion, deep blue serif wordmark, rounded INGMe type and a floating pill nav."
updated: 2026-11-16
appStoreId: 474495017
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: ING Orange
    hex: "#FF6200"
    role: Lion, primary buttons, accents, highlights
  - name: ING Blue
    hex: "#000066"
    role: ING wordmark, deepest brand blue
  - name: Indigo
    hex: "#525199"
    role: Links, secondary buttons, download chips
  - name: Black
    hex: "#151515"
    role: Body and heading text, nav links
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Orange Hover
    hex: "#FF7A26"
    role: Primary button hover
  - name: Link Orange Hover
    hex: "#CC4E00"
    role: Hovered links on orange-accent pages
  - name: Sky Tint
    hex: "#EFF6FB"
    role: Blue info cards, article tiles
  - name: Cloud
    hex: "#F6F9FC"
    role: Light section background
  - name: Peach Tint
    hex: "#FFF6EF"
    role: Warm highlight panels
  - name: Mint Tint
    hex: "#EAF4ED"
    role: Positive or success panels
  - name: Rose Tint
    hex: "#F6E5EF"
    role: Alert panels
  - name: Grey 696
    hex: "#696969"
    role: Secondary text, captions
  - name: Grey A7
    hex: "#A7A7A7"
    role: Disabled, placeholders, rules
  - name: Raspberry
    hex: "#AB0066"
    role: Accent for tags and illustrations
  - name: Green
    hex: "#349651"
    role: Success and positive values
fonts:
  display:
    family: "ING Me"
    fallback: "Nunito Sans"
    weights: [400, 700]
  body:
    family: "ING Me"
    fallback: "Nunito Sans"
    weights: [400, 700]
typeScale:
  - { role: Hero, size: 70, weight: 400, lineHeight: 1.1, tracking: "-0.015em" }
  - { role: Display, size: 64, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading 1, size: 40, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Heading 2, size: 32, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Heading 3, size: 28, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, xl: 24, pill: 50 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Floating nav, value: "0 1px 12px rgba(0,0,0,0.1)" }
  - { name: Focus, value: "0 0 0 4px rgba(255,98,0,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F9FC"
  text: "#151515"
  muted: "#696969"
  border: "#A7A7A7"
  accent: "#FF6200"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# ING

## 1. Visual Theme & Atmosphere

ING's look rests on one image and one colour: the orange lion and ING Orange. The group site (ing.com) and the national banking sites (ing.nl, ing.de, ing.be and others) use a white canvas, near-black text, very rounded friendly type (ING Me), and orange for the main action. A dark blue (`#000066`) lives in the serif ING wordmark, and a muted indigo (`#525199`) handles links and secondary actions on the group site.

What makes it recognisable:

- **The lion.** A detailed orange lion lying down with its tail curled up, drawn with engraved-style line detail. It is the symbol, the app icon (white lion on orange) and the mascot.
- **ING Orange `#FF6200`.** Warm and loud, used for primary buttons, highlights and the lion.
- **Serif wordmark.** "ING" is set in deep blue capitals with serifs, which contrasts with the rounded UI type.
- **ING Me.** A rounded, open sans-serif used for UI and headlines; ING Display (bold) for big campaign headlines.
- **Floating nav.** On ing.com the main navigation is a white bar with 24px corners that floats 32px from the top and sides, with a soft shadow and pill-shaped nav links.
- **Soft tinted cards.** Article cards sit on pale tints (sky, peach, mint, rose) with rounded corners.

Mood words: approachable, Dutch, direct, warm, uncomplicated.

## 2. Color Palette & Roles

From the ing.com Bootstrap theme (`--bs-*`) and component CSS:

| Name | Hex | Role |
|---|---|---|
| ING Orange (`--bs-primary`) | `#FF6200` | Lion, primary buttons, links on accent pages |
| Orange Hover | `#FF7A26` | Primary hover |
| Orange Active | `#FF8133` | Primary pressed |
| Orange Deep | `#CC4E00` | Link hover on orange pages |
| Orange Text | `#662700` | Text on orange tints |
| ING Blue | `#000066` | Wordmark |
| Indigo (`--bs-secondary`) | `#525199` | Links, secondary buttons |
| Black (`--bs-black`) | `#151515` | Text |
| Grey 696 | `#696969` | Secondary text |
| Grey A7 | `#A7A7A7` | Placeholders, borders |
| Grey F0 | `#F0F0F0` | Dividers, quiet fills |
| Cloud | `#F6F9FC` | Section background |
| Sky Tint (`--bs-info`) | `#EFF6FB` | Blue cards |
| Peach Tint (`--bs-warning`) | `#FFF6EF` | Warm cards |
| Mint Tint (`--bs-success`) | `#EAF4ED` | Positive cards |
| Rose Tint (`--bs-danger`) | `#F6E5EF` | Alert cards |
| Blue | `#559BD1` | Charts, info icons |
| Green | `#349651` | Positive values |
| Raspberry | `#AB0066` | Tags, illustration accent |
| Lime | `#D0D93C` | Illustration accent |

### Semantic colors

ING's theme maps success, info, warning and danger to soft tints rather than strong fills: success `#EAF4ED`, info `#EFF6FB`, warning `#FFF6EF`, danger `#F6E5EF`, each with darker text (green `#349651`, blue `#559BD1`, orange `#CC4E00`, raspberry `#AB0066`). Form errors on retail sites use a red text colour around `#D70000` (approximate).

### Dark mode

The Bootstrap theme ships a `[data-bs-theme=dark]` variant (body `#DEE2E6` on dark grey, links `#FFA166`), but the group site is used in light mode. The ING banking apps support a dark theme with orange kept for actions.

## 3. Typography

**Families:** ING Me (Regular, Bold) for UI and most text; ING Display (Bold) for large campaign headlines. Loaded as `INGMe` and `INGDisplay`.

**Licensing:** both are proprietary to ING. Use **Nunito Sans** as the fallback; it is rounded, open and has a similar friendly tone. For the serif wordmark, always use the logo artwork.

### Scale (ing.com, desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (header banner) | 70px | 400 (ING Me) | 77px | -0.015em |
| Display (primary banner) | 64px | 700 (ING Display) | 1.1 | approximate -0.01em |
| H1 | 40px | 500 | 1.2 | 0 |
| H2 | 32px | 500 | 1.2 | 0 |
| H3 / carousel title | 28-32px | 500 | 1.2 | 0 |
| Lead | 20px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small | 14px | 400 | 1.5 | 0 |

Responsive: headings use `calc(1.375rem + 1.5vw)` style fluid sizes below 1200px. Error pages set a giant 80px orange INGDisplay headline.

### Rules

- Sentence case everywhere.
- Hero headlines in ING Me regular, not bold; campaign banners may use ING Display bold.
- Short paragraphs and generous line height.
- Do not use the serif style for UI text; serifs belong to the wordmark only.

## 4. Logo & Brand Mark

The ING logo is the serif wordmark "ING" in deep blue (`#000066`) followed by the orange lion (`#FF6200`). The lion lies facing left with its tail curling up behind it; the mane and body are drawn with fine cut-line detail.

- **Colors:** blue wordmark and orange lion on white (primary). On orange, the lion and wordmark go white. On dark blue, the wordmark is white and the lion stays orange.
- **Lion alone:** used for app icons and avatars, white lion on orange (often a close-up of the lion's head on national apps).
- **Clear space:** at least the height of the "I" on all sides (approximate).
- **Minimum size:** about 60px wide for the lockup; the lion alone at 24px loses detail, so prefer 32px+.

Misuse:

- Do not recolor the lion in blue or the wordmark in orange.
- Do not simplify the lion into a flat silhouette in brand contexts.
- Do not flip the lion to face right.
- Do not set "ING" in ING Me or any sans-serif.

## 5. Components

### Buttons

Bootstrap-based with ING overrides.

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#FF6200` | `#151515` on ing.com, `#FFFFFF` on retail sites | 1px `#FF6200` | 8px (approximate on retail: 4-8px) |
| Secondary | `#525199` | `#FFFFFF` | 1px `#525199` | 8px |
| Outline secondary | transparent | `#525199` | 1px `#525199` | 8px |
| Link | transparent | `#525199` or `#FF6200` | none | none, underlined |
| Download chip | `#EFF6FB` | `#525199` | 1px `#525199` | 50px pill |

- Padding: `.375rem .75rem` (6px 12px) base, 16px text; large CTAs about 12px 24px.
- Hover: primary `#FF7A26`, active `#FF8133`.
- Focus: `box-shadow: 0 0 0 .25rem rgba(255,98,0,.25)` (orange glow).
- Disabled: 65% opacity.

```css
.ing-btn {
  font: 400 16px/1.5 INGMe, "Nunito Sans", Arial, sans-serif;
  padding: 12px 24px; border-radius: 8px; border: 1px solid #FF6200;
  background: #FF6200; color: #FFFFFF;
}
.ing-btn:hover { background: #FF7A26; border-color: #FF721A; }
.ing-btn:focus-visible { outline: 0; box-shadow: 0 0 0 4px rgba(255,98,0,.25); }
```

### Floating navigation (signature, ing.com)

- `nav#ing-nav`: white, `border-radius: 24px`, max width 1440px, positioned 32px from the top, left and right, padding `10px 12px 10px 48px`, `box-shadow: 0 1px 12px rgba(0,0,0,.1)`.
- Logo left; links "About us", "Sustainability", "Investors", "Newsroom", "Careers" as pills: `border-radius: 50px; padding: 10px 12px; color: #151515`, hover fills `#F0F0F0`.
- Search icon in a 24px-radius button on the right.
- When a mega menu opens, the bar's bottom corners square off (`24px 24px 0 0`) and the panel drops below.

### Cards

- Content cards: tinted background (`#EFF6FB` sky, `#FFF6EF` peach, `#EAF4ED` mint, `#F6E5EF` rose), 8-16px radius, 24px padding, no shadow.
- Feature cards: image on top with rounded corners, title 20-24px, body 16px, link at the bottom.
- "More articles" rows use small horizontal cards on sky tint.

### Inputs

- 44-48px tall, 1px `#A7A7A7` border, 8px radius (approximate), 16px text.
- Focus: orange border with the orange glow ring.
- Error: red border and message below with an icon.

### Header banner (hero)

Full-width image or colour panel with a large ING Me headline at 70px, a short intro and one orange primary button. Primary banner variant centres a 64px ING Display headline.

### Accordions and tabs

Accordion rows separated by 1px `#F0F0F0` with an orange chevron; tabs use a 2px orange underline on the active tab and `#696969` for inactive labels.

### Footer

Light grey or white, columns of 14px links in `#151515`, social icons, legal row in `#696969`.

## 6. Layout & Spacing

- **Spacing:** Bootstrap rem steps (4, 8, 16, 24, 48px) plus 12, 32 and 64px for layout.
- **Container:** up to 1440px for the nav; content about 1200-1320px with 24px gutters.
- **Grid:** 12-column Bootstrap 5 grid.
- **Breakpoints:** 576, 768, 992, 1200, 1400px.
- **Section rhythm:** 48-80px between sections on desktop, 32-48px on mobile. The floating nav means the first section starts with extra top padding (about 120px).
- **Density:** medium; card grids of three on desktop.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Floating nav | `0 1px 12px rgba(0,0,0,.1)` | Main navigation bar |
| Focus | `0 0 0 .25rem rgba(255,98,0,.25)` | Inputs and buttons |
| Card | none | Cards rely on tint, not shadow |

- Mostly flat with one floating element (the nav).
- Motion: 150-300ms ease for hover and menu transitions; carousels (Owl Carousel) slide at about 250ms (approximate).

## 8. Iconography & Imagery

- **Icons:** a custom icon font (`hl-icons`) with rounded line icons at 24px, about 2px stroke, in orange or black.
- **Photography:** natural, real-life images of people and businesses across Europe, bright and optimistic, rounded corners.
- **Illustration:** flat scenes using orange, indigo, sky and raspberry; friendly characters.
- **The lion** appears large in campaigns and sometimes animated in the apps.

## 9. Voice & Microcopy

Direct, warm and plain. The group site talks about purpose and Europe-wide topics; retail sites talk in short second-person sentences. Dutch directness carries into English: short sentences, no hedging.

- Sentence case.
- CTAs: "Read more", "Download", and "Log in" on the retail sites.
- Purpose line used on the site: "Empowering people to stay a step ahead in life and in business."

Sample strings (from ing.com, 2026-11-16):

- "ING global company website"
- "Get Europe invested"
- "It's our purpose"
- "ING at a glance"
- "We have a statutory two-tier board management structure."

## 10. Do's and Don'ts

**Do**

- Use ING Orange for the main action and keep everything else calm.
- Use rounded type (ING Me or Nunito Sans) and rounded corners.
- Use soft tints for cards instead of shadows.
- Float the main nav as a rounded white bar with a soft shadow.
- Keep the lion orange on white, or white on orange.

**Don't**

- Don't use the deep blue as a UI colour for large areas; it belongs to the wordmark.
- Don't use serif type in the interface.
- Don't add hard shadows or sharp corners.
- Don't put orange text on orange tints without the darker `#662700` or `#CC4E00`.
- Don't redraw or simplify the lion.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of ING. White page, near-black text `#151515`, secondary text `#696969`. Font: "ING Me", fallback "Nunito Sans", Arial. Hero headline 70px weight 400, line-height 1.1, tracking -0.015em; section headings 32-40px weight 500; body 16px/1.5. Primary buttons are ING orange `#FF6200` with white text, 8px radius, 12px 24px padding, hover `#FF7A26`, focus glow `0 0 0 4px rgba(255,98,0,.25)`. Secondary buttons and links use indigo `#525199`. The main nav is a floating white bar 32px from the top and sides with 24px radius and `0 1px 12px rgba(0,0,0,.1)` shadow, with pill-shaped (50px radius) nav links. Cards use pale tints (`#EFF6FB`, `#FFF6EF`, `#EAF4ED`, `#F6E5EF`) with 16px radius and no shadow. The logo is a deep blue serif "ING" (`#000066`) with an orange lion. Copy is short, warm and direct.

```css
:root {
  --brand-orange: #FF6200;
  --brand-orange-hover: #FF7A26;
  --brand-orange-active: #FF8133;
  --brand-orange-deep: #CC4E00;
  --brand-orange-text: #662700;
  --brand-blue: #000066;
  --brand-indigo: #525199;
  --brand-text: #151515;
  --brand-text-muted: #696969;
  --brand-border: #A7A7A7;
  --brand-divider: #F0F0F0;
  --brand-bg: #FFFFFF;
  --brand-surface: #F6F9FC;
  --brand-tint-sky: #EFF6FB;
  --brand-tint-peach: #FFF6EF;
  --brand-tint-mint: #EAF4ED;
  --brand-tint-rose: #F6E5EF;
  --brand-green: #349651;
  --brand-raspberry: #AB0066;
  --brand-font: INGMe, "Nunito Sans", Arial, sans-serif;
  --brand-font-display: INGDisplay, "Nunito Sans", Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-nav: 24px;
  --brand-radius-pill: 50px;
  --brand-shadow-nav: 0 1px 12px rgba(0,0,0,.1);
  --brand-focus: 0 0 0 4px rgba(255,98,0,.25);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by ING.

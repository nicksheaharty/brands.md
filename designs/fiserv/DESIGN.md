---
name: Fiserv
slug: fiserv
url: https://fiserv.com
category: Finance
tagline: "Corporate fintech in Fiserv orange, near-black and navy, with condensed Univers type."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Fiserv Orange
    hex: "#FF6600"
    role: Logo, brand moments, accent bars
  - name: Orange Web
    hex: "#EB5E00"
    role: Accessible orange for buttons, borders and active tab underlines
  - name: Ink
    hex: "#0E0E0E"
    role: Headlines, body text, dark buttons
  - name: Fiserv Navy
    hex: "#002754"
    role: Card titles, active tabs, dark panels
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Link Blue
    hex: "#237CB8"
    role: Links, button hover, focus glow
  - name: Charcoal
    hex: "#3C3C3C"
    role: Secondary text
  - name: Graphite
    hex: "#2D2D2D"
    role: Footer and dark section background
  - name: Grey 666
    hex: "#666666"
    role: Muted text, inactive tabs
  - name: Silver
    hex: "#909090"
    role: Captions, meta text
  - name: Light Grey
    hex: "#E0E0E0"
    role: Borders and dividers
  - name: Smoke
    hex: "#F0F0F0"
    role: Subtle section background
  - name: Green
    hex: "#63BC38"
    role: Data and illustration accent
  - name: Lime
    hex: "#B6FB6F"
    role: Data and illustration accent
  - name: Sky
    hex: "#00ABE9"
    role: Data and illustration accent
  - name: Gold
    hex: "#F9A61C"
    role: Data and illustration accent
fonts:
  display:
    family: "PP Formula Narrow"
    fallback: "Barlow Semi Condensed"
    weights: [600]
  body:
    family: "Univers Fiserv"
    fallback: "Open Sans"
    weights: [300, 400, 700]
typeScale:
  - { role: Hero, size: 60, weight: 300, lineHeight: 1.1, tracking: "-1px" }
  - { role: H1, size: 48, weight: 300, lineHeight: 1.15, tracking: "-1px" }
  - { role: H2, size: 32, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: H3, size: 24, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Lead, size: 20, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 700, lineHeight: 1.3, tracking: "1px" }
radii: { sm: 0, md: 4, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 4px 12px rgba(0,0,0,0.15)" }
  - { name: Card hover, value: "0 4px 8px rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)" }
  - { name: Header, value: "0 4px 4px -2px #E0E0E0" }
  - { name: Button glow, value: "0 5px 20px #D6DEE4" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F0"
  text: "#0E0E0E"
  muted: "#666666"
  border: "#E0E0E0"
  accent: "#EB5E00"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Fiserv

## 1. Visual Theme & Atmosphere

Fiserv runs core banking, card processing, merchant acquiring (Clover, Commerce Hub) and digital banking for financial institutions, merchants and governments. Its site, fiserv.com, is a large corporate B2B portal: white pages, near-black text, an orange brand signature and navy for structure. It is organised around audiences (Business and Merchant, Financial Institution, Large Financial Institution, Software Providers) rather than one product.

What makes it recognisable:

- **The orange wordmark.** "fiserv." in tall, condensed lowercase with a square full stop, always in Fiserv Orange `#FF6600`.
- **Orange as a thin signal.** Orange appears in the logo, in 4px active-tab underlines, outline buttons and small accents. Large orange fills are rare.
- **Navy structure.** Card titles, active tabs and some panels use Fiserv Navy `#002754`.
- **Univers.** A customised Univers family (Light, Regular, Bold) carries most text. Headlines often use the Light cut, which feels formal and corporate. Newer modules use PP Formula Narrow SemiBold for card titles.
- **Square corners.** Buttons and cards are square or nearly so; the only rounded shapes are tabs (16px top corners) and the occasional card.
- **Busy but orderly.** Mega-menus, news tickers ("Fiserv named one of America's Most Innovative Companies..."), resource cards and audience tiles fill the homepage.

Mood words: corporate, dependable, structured, institutional, practical.

## 2. Color Palette & Roles

Values come from fiserv.com CSS (northstar client library) and the logo file name (`fiserv-logo-orange-ff6600.svg`).

| Name | Hex | Role |
|---|---|---|
| Fiserv Orange | `#FF6600` | Logo, brand accents, small orange text |
| Orange Web | `#EB5E00` | Button borders and fills, tab underline, hover fill |
| Ink | `#0E0E0E` | Headings, body, dark buttons |
| Fiserv Navy | `#002754` | Card titles, active tab background |
| Link Blue | `#237CB8` | Links, hover on dark buttons, focus glow |
| Bright Blue | `#009EE0` | Secondary link, icon accent |
| Charcoal | `#3C3C3C` | Secondary text |
| Dark Grey | `#464646` | Menu descriptions |
| Graphite | `#2D2D2D` | Footer, dark sections |
| Grey 666 | `#666666` | Muted text, inactive tabs |
| Silver | `#909090` | Meta text |
| Mid Grey | `#BBBBBB` | Disabled |
| Light Grey | `#E0E0E0` | Borders, dividers |
| Smoke | `#F0F0F0` | Subtle background |
| Off White | `#F8F8F8` | Alternate section background |
| White | `#FFFFFF` | Page |

### Illustration and data accents

| Name | Hex |
|---|---|
| Green | `#63BC38` |
| Leaf | `#43B02A` |
| Lime | `#B6FB6F` |
| Sky | `#00ABE9` |
| Gold | `#F9A61C` |
| Mustard | `#DACD39` |

These appear in charts, icons and campaign graphics, never as button colours.

### Semantic

Fiserv's public CSS does not expose a clear error or success token. Use `#D0021B` for errors and `#43B02A` for success (approximate), and keep them small.

## 3. Typography

- **Univers Fiserv** (Light, Regular, Bold): a licensed, customised Univers. CSS stack: `"Univers Fiserv Regular", OpenSans, sans-serif`. Each weight is loaded as its own family name, so set the family rather than `font-weight`.
- **PP Formula Narrow** (SemiBold, Regular) from Pangram Pangram: used for resource-card titles and some new modules (`.ns-formula-font-bold`).
- **Open Sans** is the in-CSS fallback.

Google Fonts fallbacks: **Open Sans** for Univers, **Barlow Semi Condensed** (600) for PP Formula Narrow.

| Role | Size | Family | Line height | Tracking |
|---|---|---|---|---|
| Hero | 60px | Univers Light | 1.1 | -1px |
| H1 | 44-48px (36px mobile) | Univers Light | 1.15 | -1px |
| H2 | 32px (28px mobile) | Univers Regular | 1.25 | 0 |
| H3 / card title | 24px | PP Formula Narrow SemiBold | 29px | 0 |
| Lead | 20px | Univers Light | 1.5 | 0 |
| Body | 16px | Univers Regular | 1.5 (22-24px) | 0 |
| Small | 14px | Univers Regular | 1.45 | 0 |
| Eyebrow / button | 12px | Univers Bold | 1.3 | 1px, uppercase |

Rules:

- Large headings in the Light cut with -1px tracking; avoid bold display type.
- Eyebrows and some buttons are uppercase 12px Bold with 1px letter spacing ("INTEGRATED PAYMENTS").
- Sentence case for headlines and body.
- Card titles in navy `#002754`.

## 4. Logo & Brand Mark

- The logo is the wordmark **fiserv.**: condensed lowercase letters with a square period. The "f" and "v" are drawn from straight strokes and the period is a solid square.
- Primary: Fiserv Orange `#FF6600` on white. Reversed: white on orange, navy or near-black.
- There is no separate symbol. For avatars, use the full wordmark in white on orange.
- Clear space: at least the width of the square period on all sides; more is better (approximate).
- Minimum size: about 60px wide on screen (approximate).
- Don't recolour to another hue, drop the period, outline it, or set "fiserv" in a font.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 110px; height: 38px; padding: 0 20px;
  font: 12px/1 "Univers Fiserv Bold", "Open Sans", sans-serif;
  letter-spacing: 1px; text-transform: uppercase;
  border-radius: 0;
  transition: background-color .3s, color .3s;
}
.btn-outline { background: #FFFFFF; border: 1px solid #EB5E00; color: #0E0E0E; }
.btn-outline:hover { background: #EB5E00; color: #FFFFFF; }
.btn-primary { background: #EB5E00; border: 1px solid #EB5E00; color: #FFFFFF; }
.btn-dark { background: #0E0E0E; color: #FFFFFF; box-shadow: 0 5px 20px #D6DEE4; padding: 20px; }
.btn-dark:hover { background: #237CB8; box-shadow: 0 10px 30px #AAB9C3; }
```

- The header "Contact us" is the outline variant; on mobile it switches to the solid orange variant.
- Text links: Link Blue `#237CB8`, underline on hover. Arrow links use a thin chevron.

### Inputs

- 44-48px tall, square corners, 1px `#BBBBBB` border, white fill.
- Focus: `box-shadow: 0 0 2px 1px #237CB8`.
- Labels above in 14px Univers Regular, `#3C3C3C`.

### Header (northstar)

- White bar with `0 4px 4px -2px #E0E0E0` beneath it, about 80px tall.
- Orange wordmark on the left; audience menu items ("Business and Merchant", "Financial Institution", "Software Providers", "About") in 16px Univers Regular.
- Right side: search icon, country selector, "Sign in" and the outline "Contact us" button.
- Mega-menu dropdowns hold column grids of small cards: 16px/22px titles with one-line descriptions in `#464646`.

### News ticker

- Thin strip under the hero with headlines separated by vertical bars, 14-16px text, links in ink with orange hover.

### Tabs

```css
.ns-tab { background: #666666; color: #FFFFFF; border-radius: 16px 16px 0 0;
          border-bottom: 4px solid transparent; padding: 16px 16px 12px; }
.ns-tab.active { background: #002754; border-bottom-color: #EB5E00; }
```

### Resource cards

- White card, square or 4px corners, `0 4px 12px rgba(0,0,0,.15)`.
- Image on top, 12px uppercase eyebrow ("ARTICLE", "CASE STUDY"), title in PP Formula Narrow SemiBold 24px/29px navy, 16px body, arrow link.
- Hover: stronger two-layer shadow `0 4px 8px rgba(0,0,0,.2), 0 6px 20px rgba(0,0,0,.19)`.

### Audience tiles

- Large image panels with a dark overlay, white Univers Light headline and a short description; the whole tile is a link.

### Carousel

- Owl/Swiper carousels for stories and awards, with thin chevron arrows and small round dots (`50%` radius).

### Footer

- Graphite `#2D2D2D` or near-black, white wordmark, columns of 14px links in light grey, social icons, legal row in 12px.

## 6. Layout & Spacing

- Max content width about 1225px, with 24-30px side padding.
- Breakpoints from the CSS: 480px, 767/768px, 1023/1024px, 1225px.
- Twelve-column AEM grid; three-up card rows on desktop, single column on mobile.
- Section padding: 64-96px desktop, 40-48px mobile.
- Spacing steps of 4px with common values 8, 16, 20, 24, 32, 48.

## 7. Depth, Elevation & Motion

- Cards and dropdowns use soft neutral shadows (see frontmatter). The header has a hairline drop shadow.
- Hover on cards deepens the shadow; there is little lift or scale.
- Transitions: 300ms `ease` or `ease-out` on background, colour and transform. Slower 500ms on the dark sign-in button.
- Overlays: `rgba(0,0,0,.5)` to `.9` behind modals and video.

## 8. Iconography & Imagery

- Icons: Font Awesome 5/6 (free and brands) plus custom line icons; 1.5-2px strokes, often orange or navy.
- Photography: professionals at work in banks, shops and offices, plus close-ups of card terminals and phones. Natural colour, often with a slight cool tint.
- Illustrations use the data accent palette (green, lime, sky, gold) with flat shapes.

## 9. Voice & Microcopy

- Corporate and outcome-driven, aimed at executives at banks, merchants and software companies.
- Headlines: "Fiserv is a global leader", "Commerce Hub helps merchants grow across borders", "What agentic AI means for financial institutions".
- Descriptions are full sentences that name the audience: "Platforms and integrated digital banking solutions to drive customer relationships and growth".
- Buttons: "Contact us", "Learn more", "See for yourself", "Read the article".

## 10. Do's and Don'ts

**Do**

- Keep the page white with near-black `#0E0E0E` text.
- Use Fiserv Orange for the logo and thin accents; use `#EB5E00` when orange must carry text contrast.
- Use navy `#002754` for card titles and selected tabs.
- Set large headings in a light weight with slight negative tracking.
- Keep buttons square with uppercase 12px tracked labels.

**Don't**

- Don't flood whole sections in orange.
- Don't round buttons into pills.
- Don't use the data accent colours for actions.
- Don't use bold display headlines.
- Don't place the orange logo on navy or photos without a white plate or reversed version.

## 11. Agent Prompt Guide

> Build this UI in the style of Fiserv (fiserv.com). White page, text `#0E0E0E`, secondary `#3C3C3C`, muted `#666666`, borders `#E0E0E0`, subtle sections `#F0F0F0`. Brand colour Fiserv Orange `#FF6600` for the logo; use `#EB5E00` for buttons, outline borders and 4px active-tab underlines. Structure colour navy `#002754` for card titles and selected tabs; links `#237CB8`. Font: "Univers Fiserv" (fallback Open Sans): headlines in the Light cut at 44-60px with -1px tracking, body 16px/1.5 Regular, eyebrows and buttons 12px Bold uppercase with 1px tracking. Card titles in PP Formula Narrow SemiBold 24px (fallback Barlow Semi Condensed 600). Buttons are square: outline orange with white fill that fills orange on hover, or solid near-black that turns `#237CB8` on hover. Cards are white with `0 4px 12px rgba(0,0,0,.15)` shadows and square corners. Max width about 1225px, three-up card grids, 64-96px section padding. The header is white with a hairline shadow, audience-based menu items and an outline "Contact us" button.

```css
:root {
  --fiserv-orange: #FF6600;
  --fiserv-orange-web: #EB5E00;
  --fiserv-ink: #0E0E0E;
  --fiserv-navy: #002754;
  --fiserv-link: #237CB8;
  --fiserv-link-bright: #009EE0;
  --fiserv-charcoal: #3C3C3C;
  --fiserv-graphite: #2D2D2D;
  --fiserv-grey: #666666;
  --fiserv-silver: #909090;
  --fiserv-border: #E0E0E0;
  --fiserv-smoke: #F0F0F0;
  --fiserv-white: #FFFFFF;
  --fiserv-green: #63BC38;
  --fiserv-sky: #00ABE9;
  --fiserv-gold: #F9A61C;
  --fiserv-font-light: "Univers Fiserv Light", "Open Sans", sans-serif;
  --fiserv-font: "Univers Fiserv Regular", "Open Sans", sans-serif;
  --fiserv-font-bold: "Univers Fiserv Bold", "Open Sans", sans-serif;
  --fiserv-font-display: "PP Formula Narrow", "Barlow Semi Condensed", sans-serif;
  --fiserv-radius: 0;
  --fiserv-radius-tab: 16px 16px 0 0;
  --fiserv-shadow-card: 0 4px 12px rgba(0,0,0,.15);
  --fiserv-shadow-card-hover: 0 4px 8px rgba(0,0,0,.2), 0 6px 20px rgba(0,0,0,.19);
  --fiserv-transition: all .3s ease;
}
```

---

Values are observed from the public fiserv.com CSS and logo file on 2026-11-16; input sizes, error and success colours, logo clear space and minimum size are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Fiserv, Inc.

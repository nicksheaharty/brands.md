---
name: CBS News
slug: cbs-news
url: https://cbsnews.com
category: News
tagline: "Near-black header, the CBS eye, TT Norms serif stories and red live labels on a grey grid."
updated: 2026-11-16
appStoreId: 334256223
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Eye Black
    hex: "#101010"
    role: Header, footer, logo, headlines and body text
  - name: Live Red
    hex: "#E10500"
    role: Live labels, breaking accents
  - name: White
    hex: "#FFFFFF"
    role: Page and card background, header text
  - name: Fog
    hex: "#F2F2F2"
    role: Section bands, text on black
  - name: Dark Red
    hex: "#B60505"
    role: Live label text on white, red headlines
  - name: Watch Red
    hex: "#CC0E00"
    role: Watch Live overlays and video flags
  - name: Graphite
    hex: "#5F5F5F"
    role: Bylines, timestamps, secondary text
  - name: Charcoal
    hex: "#212121"
    role: Dark panels and secondary dark surfaces
  - name: Rule
    hex: "#E8E8E8"
    role: Dividers and card borders
  - name: Silver
    hex: "#DCDCDC"
    role: Input borders, inactive tabs
  - name: Live Blue
    hex: "#0674C8"
    role: Live stream background accent
  - name: Face the Nation
    hex: "#00789D"
    role: Show brand colour for Face the Nation
  - name: Link Blue
    hex: "#0079D3"
    role: Inline links in some modules
fonts:
  display:
    family: "TT Norms Pro Serif"
    fallback: "Source Serif 4"
    weights: [400, 700]
  body:
    family: "TT Norms Pro"
    fallback: "Manrope"
    weights: [400, 450, 700]
typeScale:
  - { role: Article headline, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Brand headline, size: 45, weight: 900, lineHeight: 1.0, tracking: "0" }
  - { role: Component title, size: 20, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Card headline, size: 18, weight: 700, lineHeight: 1.22, tracking: "0.3px" }
  - { role: Body, size: 20, weight: 450, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 18, weight: 450, lineHeight: 1.25, tracking: "0" }
  - { role: Label, size: 11, weight: 700, lineHeight: 1.0, tracking: "1.6px" }
radii: { sm: 3, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 10, 12, 16, 20, 24, 32, 40, 48]
shadows:
  - { name: Card, value: "0 2px 4px 0 rgba(0,0,0,0.1)" }
  - { name: Raised, value: "0 4px 8px 0 rgba(0,0,0,0.2)" }
  - { name: Sheet, value: "0 -4px 12px 0 rgba(0,0,0,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#101010"
  muted: "#5F5F5F"
  border: "#E8E8E8"
  accent: "#101010"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# CBS News

## 1. Visual Theme & Atmosphere

CBS News is monochrome by design. A near-black header (`#101010`) carries the CBS eye and wordmark in white, centred. Pages alternate white and light grey (`#F2F2F2`) bands, story cards are photo-first with bold headlines, and red appears only for live and breaking states. The current story template uses TT Norms Pro Serif for headlines and body, which gives articles a print-like, slightly geometric serif voice, while UI labels use TT Norms Pro and the older Proxima Nova.

What makes it recognisable:

- **The eye.** The CBS eye (William Golden, 1951) leads the logo and the app icon, always flat black or white.
- **Centred black header.** A three-column header grid with menu left, logo centre, search and live link right.
- **Grey and white bands.** Homepage sections switch between `#FFFFFF` and `#F2F2F2`, with `#101010` sections for video and live.
- **Letter-spaced labels.** Small uppercase labels with 1.6-1.8px tracking for section names and flags.
- **Red live labels.** "LIVE" flags in `#E10500` or `#CC0E00`, white text, square corners.

Mood: sober, classic network, editorial.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Eye Black | `#101010` | Header, footer, text, logo (meta theme colour) |
| Charcoal | `#212121` | Dark modules, hover on black |
| Graphite 2 | `#333333` | Hover text |
| Dark Grey | `#484848` | Secondary dark text |
| Graphite | `#5F5F5F` | Bylines, timestamps |
| Mid Grey | `#7F7F7F` | Disabled, credits |
| Silver | `#DCDCDC` | Input borders, inactive |
| Rule | `#E8E8E8` | Dividers, card borders |
| Fog | `#F2F2F2` | Section bands, text on black |
| White | `#FFFFFF` | Page, cards |

### Reds

| Name | Hex | Use |
|---|---|---|
| Live Red | `#E10500` | Live flag background, breaking link borders |
| Watch Red | `#CC0E00` | "Watch Live" thumbnail overlay at 90% opacity |
| Dark Red | `#B60505` | Live label text on white, red headlines |
| Signal Red | `#F2312C` | Red on dark |

### Accents

| Name | Hex | Use |
|---|---|---|
| Live Blue | `#0674C8` | Live stream module background (`--live-bg`) |
| Link Blue | `#0079D3` | Inline links in some modules |
| Face the Nation | `#00789D` | Show colour |
| Royal | `#004ACE` | Secondary link accent |

### Dark surfaces

The header, footer, video pages and "CBS News 24/7" stream modules are `#101010` with `#F2F2F2` text and `hsla(0,0%,100%,.3)` dividers. There is no separate light/dark toggle on the website; the app follows system appearance (approximate).

## 3. Typography

**Families in use**

- **TT Norms Pro Serif** (TypeType): article headlines (Bold) and article body and author names (Normal, weight 450).
- **TT Norms Pro**: bylines, captions and UI in the story template, weight 450 and 700.
- **Proxima Nova** (Mark Simonson): legacy and homepage UI, labels, figure captions, decks.
- **Publico Headline / Publico Text** (Commercial Type): collapsible header titles and pull quotes.

All commercial. Closest Google Fonts: **Source Serif 4** for TT Norms Pro Serif and Publico, **Manrope** for TT Norms Pro, **Montserrat** for Proxima Nova.

The site defines metric-matched fallbacks (`size-adjust`, `ascent-override`) based on Georgia and Noto Serif so the serif layout does not jump while fonts load.

### Scale (desktop, from production CSS)

| Role | Font | Size / line height | Weight |
|---|---|---|---|
| Article headline | TT Norms Pro Serif Bold | 32px / 125% (24px mobile) | 700 |
| Branded page title | Proxima Nova | 45px / 45px (2.82rem) | 900 |
| Collapsible header title | Publico Headline | 26px / 28px | 700, +0.3px |
| Component title | TT Norms Pro Serif Bold | 20px / 125% | 700 |
| Card headline | Proxima Nova / TT Norms Pro | 16-18px / 1.2 | 700 |
| Card dek | Proxima Nova | 18px / 22px | 400 |
| Article body | TT Norms Pro Serif Normal | 20px / 150% (18px mobile) | 450 |
| Byline | TT Norms Pro | 16px / 125%, underlined | 450 |
| Caption | TT Norms Pro | 18px / 125% (16px mobile) | 450 |
| Figure caption (legacy) | Proxima Nova | 13-15px / 15px | 700, +0.3px |
| Pull quote | Publico Text Italic | 25px / 30px | 400 |
| Flag / label | TT Norms Pro Bold or Proxima | 11px, uppercase | 700, +1.6px |

### Rules

- Headlines sentence case. Labels, flags and section names uppercase with wide tracking.
- Body text `#101010` at weight 450, never pure 400 grey.
- Author names are underlined links; hover `#333333`.

## 4. Logo & Brand Mark

The logo is the CBS eye (a circle with an almond-shaped eye and solid pupil) followed by **CBS NEWS** in bold capitals. In the header it is white on `#101010`, horizontal, about 230 x 32 units.

- **Horizontal lockup:** eye plus wordmark, eye height equal to wordmark cap height plus about 15%.
- **Vertical / square:** eye above a small "CBS NEWS" on black, used for the favicon and app tile.
- **Colours:** black on white, white on black. The eye is never coloured.
- **Clear space:** half the eye diameter on all sides.
- **Minimum size:** eye 16px; lockup 100px wide.

Misuse: don't outline the eye, don't add gradients or drop shadows, don't separate "NEWS" from "CBS".

## 5. Components

### Header

```css
.site-header__container {
  height: 64px;
  background: #101010;
  color: #FFFFFF;
}
.site-nav__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
}
.site-logo__icon { fill: currentColor; height: 32px; }
```

- Left: hamburger and section links in Proxima Nova or TT Norms Pro 14-16px/700, white.
- Centre: logo. Right: search, weather (separated by a `hsla(0,0%,100%,.3)` line), "Watch Live" link with a red dot.
- Sub-navigation row: 44px tall, horizontally scrollable.

### Breaking banner

- Full-width black or red strip: "BREAKING NEWS" label 11-12px uppercase with wide tracking, headline 18-20px/700 white, positioned with 14px top margin and 20px left inset.
- Related links under breaking items use a `#E10500` left border.

### Cards and grids

- Image 16:9, 4px radius in many modules (0 in hero), headline below in 16-18px/700 `#101010`, optional dek in 18/22 Proxima Nova.
- Asset labels over images: `#FFFFFF` text, 11px/700 uppercase, 6px vertical padding; live variant is a white box with `#B60505` text.
- "Watch Live" livestream thumbnails get a `rgba(204,14,0,.9)` overlay label.
- List grids on grey bands: white cards with `0 2px 4px rgba(0,0,0,0.1)` shadow.

### Article page

- Headline 32px TT Norms Pro Serif Bold, 12px bottom margin.
- Meta row: "By Name" underlined 16px TT Norms Pro 450 `#5F5F5F`, then "Updated on: November 16, 2026 / 4:10 PM EST / CBS News".
- Body: TT Norms Pro Serif 20px / 1.5, weight 450, `#101010`; 20px spacing between blocks.
- Images: full column, caption 18px TT Norms Pro, credit after in grey.
- Pull quote: Publico Text italic 25px/30px, with a 700-weight attribution in Proxima Nova 18px (approximate on light templates; dark variant uses `#F2F2F2`).
- Editors and contributors credit at the end in 18px.

### Buttons

| Variant | Style |
|---|---|
| Primary | `#101010` fill, white 14px/700, 4px radius |
| Inverse | white fill, `#101010` text on dark bands |
| Outline | 1px `#101010` border, transparent, 4px radius |
| Live | `#E10500` fill, white text, "Watch Live" with a dot |
| Link | underlined `#101010`, hover `#333333` |

Height 40-44px, padding 10px 20px. Transition `all .25s ease-out`.

### Video player

- 16:9 black frame, 0 radius on articles. White play button centred.
- "LIVE" flag in red, top-left, uppercase with tracking.
- The "CBS News 24/7" stream module sits on `#101010` with a schedule list.
- Mobile: a docked mini player slides up with `transform 233ms cubic-bezier(0,0,.21,1)`.

### Inputs

Newsletter and search: 44px tall, 1px `#DCDCDC` border, 4px radius, Proxima Nova 16px; button black.

## 6. Layout & Spacing

- Breakpoints: 768px, 1020px, 1360px.
- Container max widths: 1320px (wide), 980-1020px (standard), 640px (article text).
- Homepage: lead story with large image and stacked related links, then 3-4 column grids per section; grey and white bands separate sections.
- Section titles have 20px bottom margin.
- Gutters 16px mobile, 20-24px desktop (approximate).

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 2px 4px 0 rgba(0,0,0,0.1)` |
| Raised | `0 4px 8px 0 rgba(0,0,0,0.2)` |
| Drop | `0 4px 4px 0 rgba(0,0,0,0.25)` |
| Bottom sheet | `0 -4px 12px 0 rgba(0,0,0,0.25)` |

- Transitions: `all .25s ease-out` for hovers; `height .4s` for expanding menus; a springy `transform .5s cubic-bezier(.18,.89,.32,1.28)` for small pop-ins.

## 8. Iconography & Imagery

- Icons are an SVG sprite: thin-to-medium solid glyphs, `fill: currentColor`, 18px in the nav.
- Photography is straight news and broadcast stills; the 24/7 stream and show logos (60 Minutes, Face the Nation, CBS Mornings, CBS Evening News) appear as small marks.
- No illustration style in daily news; data graphics are flat with black type.

## 9. Voice & Microcopy

Measured and formal.

- Labels: "BREAKING", "LIVE", "WATCH LIVE", "VIDEO", "CBS NEWS 24/7".
- Buttons: "Watch Live", "Sign up", "More", "Read more".
- Meta: "Updated on: November 16, 2026 / 4:10 PM EST / CBS News".
- Bylines: "By Jane Doe".

## 10. Do's and Don'ts

**Do**

- Keep the header `#101010` with the logo centred.
- Use a serif for article headlines and body.
- Alternate white and `#F2F2F2` bands to separate sections.
- Use letter-spaced uppercase for labels.
- Limit red to live and breaking.

**Don't**

- Don't colour the eye.
- Don't use bright accent colours for links in body text.
- Don't round large media more than 4px.
- Don't set body copy lighter than `#101010` at 450.
- Don't mix more than two families on one card.

## 11. Agent Prompt Guide

> Build this UI in the style of CBS News. White page with `#F2F2F2` section bands, text `#101010`, secondary `#5F5F5F`, rules `#E8E8E8`. Header is 64px `#101010` with a three-column grid and the white logo centred. Headlines in a geometric serif (`"TT Norms Pro Serif", "Source Serif 4", Georgia, serif`) bold: 32px/1.25 on articles, 20px for section titles. Article body uses the same serif at 20px/1.5, weight 450. UI and captions use a geometric sans (`"TT Norms Pro", "Proxima Nova", Manrope, sans-serif`). Labels are 11px/700 uppercase with 1.6px tracking. Live flags are `#E10500` with white text; "Watch Live" overlays `rgba(204,14,0,.9)`. Buttons are black with 4px radius. Cards are 16:9 images with 4px radius and 16-18px bold headlines, shadow `0 2px 4px rgba(0,0,0,0.1)` on grey bands. Containers 1320px wide, 640px text column, breakpoints 768/1020/1360px, transitions `all .25s ease-out`.

```css
:root {
  --brand-black: #101010;
  --brand-charcoal: #212121;
  --brand-grey-dark: #484848;
  --brand-grey: #5F5F5F;
  --brand-grey-mid: #7F7F7F;
  --brand-silver: #DCDCDC;
  --brand-rule: #E8E8E8;
  --brand-fog: #F2F2F2;
  --brand-bg: #FFFFFF;
  --brand-red-live: #E10500;
  --brand-red-watch: #CC0E00;
  --brand-red-text: #B60505;
  --brand-live-blue: #0674C8;
  --brand-link: #0079D3;
  --brand-font-serif: "TT Norms Pro Serif", "Source Serif 4", Georgia, serif;
  --brand-font-sans: "TT Norms Pro", "Proxima Nova", "Manrope", sans-serif;
  --brand-font-legacy: "Proxima Nova", "Montserrat", sans-serif;
  --brand-font-quote: "Publico Text", "Source Serif 4", Georgia, serif;
  --brand-body-weight: 450;
  --brand-label-tracking: 1.6px;
  --brand-radius: 4px;
  --brand-shadow-card: 0 2px 4px 0 rgba(0,0,0,0.1);
  --brand-shadow-raised: 0 4px 8px 0 rgba(0,0,0,0.2);
  --brand-header-height: 64px;
  --brand-max-width: 1320px;
  --brand-text-width: 640px;
  --brand-transition: all .25s ease-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by CBS News.

---
name: AIG
slug: aig
url: https://aig.com
category: Insurance
tagline: "AIG navy header, outlined box logo, Futura headlines and square uppercase buttons."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: AIG Navy
    hex: "#001871"
    role: Logo, header bar, primary buttons, headings
  - name: Bright Blue
    hex: "#1352DE"
    role: Hover state for buttons and nav items, links
  - name: White
    hex: "#FFFFFF"
    role: Page background, logo and text on navy
  - name: Cyan
    hex: "#00A4E4"
    role: Accent rules, icons, highlights
  - name: Charcoal
    hex: "#343741"
    role: Body text, mega-menu panel background
  - name: Light Blue
    hex: "#C7DBF4"
    role: Tinted panels, hover fills, selected rows
  - name: Royal Blue
    hex: "#0057B8"
    role: Inline links and link underlines
  - name: Ice
    hex: "#E9F1FB"
    role: Light blue section background
  - name: Grey Text
    hex: "#54565B"
    role: Secondary text, captions
  - name: Border Grey
    hex: "#DCDCDC"
    role: Card borders, dividers
  - name: Mist
    hex: "#F5F7F9"
    role: Quiet section background
  - name: Sky
    hex: "#80D2F2"
    role: Light cyan accent panels
  - name: Midnight
    hex: "#002554"
    role: Darker navy for footer and overlays
  - name: Red
    hex: "#E81944"
    role: Errors and alerts
  - name: Green
    hex: "#4DD29A"
    role: Success, positive indicators
fonts:
  display:
    family: "Futura PT"
    fallback: "Jost"
    weights: [400, 500, 700]
  body:
    family: "Source Sans Pro"
    fallback: "Source Sans 3"
    weights: [400, 600, 700]
typeScale:
  - { role: H1, size: 44, weight: 500, lineHeight: 1.27, tracking: "0" }
  - { role: H2, size: 44, weight: 500, lineHeight: 1.27, tracking: "0" }
  - { role: H3, size: 28, weight: 500, lineHeight: 1.29, tracking: "0" }
  - { role: Teaser Title, size: 27, weight: 500, lineHeight: 1.19, tracking: "1px" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Eyebrow, size: 15, weight: 500, lineHeight: 1.27, tracking: "2.86px" }
  - { role: Button, size: 16, weight: 700, lineHeight: 1.63, tracking: "0" }
radii: { sm: 0, md: 4, lg: 6, pill: 50 }
spacing: [4, 8, 16, 20, 24, 32, 40, 60, 80]
shadows:
  - { name: Card, value: "0 2px 6px rgba(0,0,0,0.16)" }
  - { name: Card Hover, value: "0 3px 6px rgba(0,0,0,0.16)" }
  - { name: Dropdown, value: "0 6px 12px rgba(0,0,0,0.175)" }
preview:
  bg: "#FFFFFF"
  surface: "#E9F1FB"
  text: "#343741"
  muted: "#54565B"
  border: "#DCDCDC"
  accent: "#001871"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# AIG

## 1. Visual Theme & Atmosphere

AIG's site is corporate and composed: a tall navy `#001871` header with a white outlined "AIG" logo and uppercase nav, white pages with Futura headlines, and square navy buttons that flash to a brighter blue `#1352DE` on hover. The homepage is a set of news-style teasers (results announcements, sponsorships, leadership video) rather than a product funnel, because aig.com mainly serves businesses, brokers and investors.

What makes it recognisable:

- **The box logo.** "AIG" in a geometric sans inside a thin rectangular frame. On the site header it is white on navy; elsewhere navy on white.
- **Navy everywhere it matters.** Header, buttons, headings and the logo share one navy `#001871`. Hover states jump to a vivid `#1352DE`.
- **Futura.** Headings, nav and buttons use Futura PT (book, medium, bold). Body copy is Source Sans Pro.
- **Uppercase actions.** Nav items and buttons are uppercase; eyebrows are uppercase with wide 2.86px tracking.
- **Square geometry.** Buttons and teasers have 0 radius, echoing the rectangular logo frame.
- **Charcoal mega menus.** Dropdowns open as full-width `#343741` panels with white text.

Mood words: institutional, global, steady, precise, understated.

## 2. Color Palette & Roles

AIG's AEM stylesheets hardcode colors; the most used are below.

| Name | Hex | Role |
|---|---|---|
| AIG Navy | `#001871` | Logo, header, buttons, headings, mobile nav titles |
| Bright Blue | `#1352DE` | Hover for buttons and nav items, link color, carousel controls |
| Royal Blue | `#0057B8` | Inline links, link underlines |
| Midnight | `#002554` | Footer and deep overlays |
| Navy overlay | `rgba(0,24,113,0.6)` | Image scrims behind white text |
| Cyan | `#00A4E4` | Accent rules, icon fills, borders |
| Sky | `#80D2F2` | Light cyan panels |
| Light Blue | `#C7DBF4` | Tinted panels, hover backgrounds |
| Ice | `#E9F1FB` | Light section background |
| Mist | `#F5F7F9` | Quiet background |
| Charcoal | `#343741` | Body text, mega-menu background |
| Grey Text | `#54565B` | Secondary text |
| Grey 5B | `#5B5C60` | Captions, meta |
| Grey 76 | `#76777B` | Placeholder text |
| Border Grey | `#DCDCDC` | Dividers, card borders |
| Silver | `#B1B1B1` | Disabled borders |
| White | `#FFFFFF` | Page |

### Accent colors (data and campaign)

| Name | Hex | Use |
|---|---|---|
| Teal | `#32C9A6` / `#00BFB3` | Charts, sustainability content |
| Coral | `#FD838E` | Charts, campaign accents |
| Orange | `#FF8200` | Charts, warnings |
| Gold tints | `rgba(255,191,63,0.6)` | Highlight bars |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#E81944` (also `#E03C31`) | Form errors, alerts |
| Success | `#4DD29A` | Confirmation |
| Warning | `#FF8200` | Notices |
| Info | `#00A4E4` | Informational callouts |

### Dark surfaces

The header is navy `#001871`; mega menus are charcoal `#343741`; both use white text. Hero teasers over photos use a navy scrim at 60% with white Futura headlines.

## 3. Typography

**Families:** Futura PT (Paratype) in book, medium and bold, self-hosted under names like `futura_pt_medium` and `aig_futurabold`. Source Sans Pro (Adobe, open source) for body text in regular, semibold and bold.

**Licensing:** Futura PT is commercial. Free substitute: **Jost** (closest geometric match on Google Fonts). Source Sans Pro is free, now published as **Source Sans 3**.

```css
--brand-font-display: "Futura PT", "Jost", "Century Gothic", sans-serif;
--brand-font-body: "Source Sans Pro", "Source Sans 3", Arial, sans-serif;
```

### Scale (desktop; rem at 16px)

| Role | Size | Weight / face | Line height | Tracking |
|---|---|---|---|---|
| H1 / H2 (`.cmp-title h2`) | 44px (2.75rem) | Futura PT Medium | 56px | 0 |
| H3 | 28px (1.75rem) | Futura PT Medium | 36px | 0 |
| Banner teaser title | 27px (1.688rem) | Futura PT Medium | 32px | 1px |
| Teaser description H2 | 36px | Futura PT Medium | 42px | 0 |
| Submenu intro | 24px | Futura PT Book | 36px | 0 |
| Card title | 18-22px | Futura PT Medium | 23-30px | 0 |
| Eyebrow / pretitle | 15px uppercase | Futura PT Medium | 19px | 2.86px |
| Nav item | 15px uppercase | Futura PT Book | 17px | 0 |
| Lead | 20px | Source Sans Pro | 1.5 | 0 |
| Body | 16-18px | Source Sans Pro | 1.6 | 0 |
| Button | 16px uppercase | Futura PT Bold | 26px | 0 |

### Rules

- Headlines in sentence or title case as written in news headlines ("AIG Delivers Strong Third Quarter Results"); nav, buttons and eyebrows in uppercase.
- Keep Futura for headings, nav and buttons, and Source Sans for paragraphs and forms.
- Eyebrows are uppercase with 2.86px letter spacing and sit 8px above the title.
- Numbers in financial content use lining figures; no special numeral styling.

## 4. Logo & Brand Mark

The current AIG logo is the letters "AIG" in a clean geometric sans inside a thin rectangular outline, with a small registered mark at the bottom right. It is a single color: navy `#001871` on light backgrounds, white on navy.

- **Color versions:** navy on white (primary), white on navy (header), white on photos with a navy scrim.
- **Clear space:** at least the height of the frame's stroke times four on every side (approximate).
- **Minimum size:** the header uses 89 x 48px; keep it at or above about 60px wide (approximate).
- **App-style icon:** the white framed logo centred on a navy square.

Misuse:

- Do not fill the rectangle solid or drop the frame.
- Do not recolor the logo cyan or bright blue.
- Do not set "AIG" in Futura or another font as a substitute.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#001871` | `#FFFFFF` 16px Futura Bold uppercase | none | 0 | 11px 19px |
| Primary hover | `#1352DE` | `#FFFFFF` | none | 0 | same |
| Outline (on light) | transparent | `#001871` | 1px `#001871` | 0 | same (approximate) |
| On navy | `#FFFFFF` | `#001871` | none | 0 | same (approximate) |
| Icon button (search, carousel) | `#1352DE` | white icon | none | 0 | 44 x 44px |
| Text link with arrow | transparent | `#1352DE` | none | 0 | arrow shifts 5px right on hover |

States:

- Hover: background `#1352DE`, no underline.
- Focus: visible outline in `#1352DE` (approximate).
- Transition: `background .2s ease-in`, nav and icons `all .3s ease`.

```css
.aig-btn {
  font: 700 1rem/26px "Futura PT", Jost, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0;
  color: #fff;
  background: #001871;
  border: 0;
  border-radius: 0;
  padding: 11px 19px;
  transition: background .2s ease-in;
}
.aig-btn:hover { background: #1352DE; text-decoration: none; }
```

### Header and navigation (signature)

- Navy `#001871` bar, about 98px tall on desktop (links have 41px top and 40px bottom padding).
- White AIG logo left at 89 x 48px.
- Top-level links in white uppercase Futura Book 15px, 16px side padding. Hover fills the whole item `#1352DE`; the active item gets a 4px white bar under the label.
- Mega menu: full-width charcoal `#343741` panel with an intro column (24px Futura heading, one paragraph, "arrow" link) and link columns headed by 18px uppercase titles.
- Search opens a navy band with a 50px input and a blue search icon.
- Mobile: hamburger 39 x 36px, section title bar in navy with uppercase 23px text and 1px tracking.

### Teasers and cards

- News teaser cards: image on top, uppercase cyan or grey eyebrow, 18-22px Futura title, short description, "Read more" link. Square corners, shadow `0 2px 6px rgba(0,0,0,0.16)` or a 1px `#DCDCDC` border.
- Hero teaser: full-bleed photo, navy scrim, white Futura headline, description and a text CTA ("Watch the video").
- Video teasers show a round play button over the image.
- Stat and quote blocks use light blue `#E9F1FB` or `#C7DBF4` panels.

### Inputs and forms

Source Sans 16px, 1px `#B1B1B1` border, 0-4px radius, about 44-50px tall, navy label above, cyan or bright blue focus border (approximate), error text `#E81944`.

### Tabs and accordions

Tabs: uppercase Futura 15px, navy text, 4px bright blue underline for the active tab (approximate). Accordion rows: 1px `#DCDCDC` dividers, "+" toggle buttons in navy, panel text in Source Sans.

### Carousels

Slick carousels with square 44px `#1352DE` arrow buttons and small round dots (navy active, grey inactive).

### Footer

Navy footer with the white logo, uppercase link groups, social icons and a "CALL US TOLL-FREE" contact block; legal text in 14px light blue-grey (approximate).

## 6. Layout & Spacing

- **Grid:** AEM responsive grid, 12 columns. Content is commonly inset by 8.3333% (one column) on each side.
- **Max widths:** about 1200px for content, up to 1920px for full-bleed teasers (wider screens get a dedicated stylesheet).
- **Breakpoints:** 767/768px (mobile/tablet), 960px, 1023/1024px (desktop), 1200px.
- **Spacing:** 4px base with frequent 8, 16, 20, 24, 30 and 40px values; sections 40-80px apart (approximate).
- **Density:** medium; news teasers sit in 2-4 column grids with generous white space.

## 7. Depth, Elevation & Motion

- Shadows are small and neutral: `0 2px 6px rgba(0,0,0,0.16)`, `0 3px 6px rgba(0,0,0,0.16)` on hover, `-3px 3px 7px rgba(0,0,0,0.05)` for subtle offsets, and `0 6px 12px rgba(0,0,0,0.175)` for dropdowns.
- Overlays: `rgba(0,0,0,0.4-0.6)` for modals and video dialogs; navy `rgba(0,24,113,0.6)` for image scrims.
- Motion: `all .3s ease` for nav and icons, `all .2s ease-out` for cards, `background .2s ease-in` for buttons. Arrow icons in links slide 5px on hover.
- No blur or glass effects.

## 8. Iconography & Imagery

- Icons: Material Icons and a custom icon font, outlined, 20-24px, in navy or white; arrows and external-link glyphs next to links.
- Photography: business and sponsorship imagery (golf, women's football, offices, cityscapes), leadership portraits, and global landscapes; color-graded naturally with no filters.
- Data graphics: flat bars and charts in navy, cyan, teal and coral.

## 9. Voice & Microcopy

Formal, measured and corporate. AIG writes like a global insurer addressing clients, brokers and investors.

- Headlines read like press headlines.
- Short, factual descriptions; no slang or exclamation points.
- Uppercase CTAs in buttons; sentence-case text links ("Read more", "Watch the video", "Meet our leaders").
- Take results and figures from aig.com news releases on the day you build.

Sample strings:

- Teaser: "AIG Delivers Strong Third Quarter Results"
- About: "See how AIG is committed to making a positive difference in everything we do for our customers, our culture, and our communities around the world."
- Contact: "If you have questions or need more information, we'll help you find the right person to talk to."
- Nav: "RISK SOLUTIONS", "ABOUT AIG", "INVESTORS", "NEWS", "CONTACT"

## 10. Do's and Don'ts

**Do**

- Use navy `#001871` for the header, buttons and headings, and `#1352DE` for hover.
- Keep buttons and cards square.
- Set headings and nav in Futura (or Jost), body in Source Sans.
- Uppercase nav, buttons and eyebrows; give eyebrows wide tracking.
- Use the outlined box logo in white on navy in the header.

**Don't**

- Don't round buttons or use pills for primary actions.
- Don't use cyan as a button color; keep it for accents.
- Don't write casual or promotional copy.
- Don't fill the logo box solid or put the navy logo on the navy header.
- Don't add heavy drop shadows or gradients to cards.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of AIG. A 98px navy `#001871` header with a white outlined "AIG" box logo (89 x 48px) on the left and white uppercase nav links in `"Futura PT", Jost, sans-serif` at 15px; hovering a nav item fills it `#1352DE`, the active item has a 4px white underline, and dropdowns open as full-width charcoal `#343741` panels. Page is white with Futura Medium headings in navy (H2 44px/56px, H3 28px/36px) and body in `"Source Sans Pro", "Source Sans 3", sans-serif` 16-18px in `#343741`. Buttons are square (0 radius), navy with white 16px Futura Bold uppercase labels, padding 11px 19px, hover `#1352DE`. Build a hero teaser with a full-bleed photo, a 60% navy scrim and a white headline, then a grid of square news teaser cards (image, uppercase eyebrow with 2.86px tracking, Futura title, "Read more" link with an arrow that slides 5px) with `0 2px 6px rgba(0,0,0,0.16)` shadows, a light blue `#E9F1FB` stats band, and a navy footer. Transitions `all .3s ease`.

```css
:root {
  --brand-navy: #001871;
  --brand-blue-bright: #1352DE;
  --brand-blue-royal: #0057B8;
  --brand-midnight: #002554;
  --brand-cyan: #00A4E4;
  --brand-sky: #80D2F2;
  --brand-light-blue: #C7DBF4;
  --brand-ice: #E9F1FB;
  --brand-mist: #F5F7F9;
  --brand-charcoal: #343741;
  --brand-grey-text: #54565B;
  --brand-border: #DCDCDC;
  --brand-error: #E81944;
  --brand-success: #4DD29A;
  --brand-font-display: "Futura PT", "Jost", "Century Gothic", sans-serif;
  --brand-font-body: "Source Sans Pro", "Source Sans 3", Arial, sans-serif;
  --brand-radius: 0;
  --brand-btn-padding: 11px 19px;
  --brand-eyebrow-tracking: 2.86px;
  --brand-header-height: 98px;
  --brand-shadow-card: 0 2px 6px rgba(0,0,0,0.16);
  --brand-shadow-dropdown: 0 6px 12px rgba(0,0,0,0.175);
  --brand-scrim: rgba(0,24,113,0.6);
  --brand-transition: all .3s ease;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by AIG.

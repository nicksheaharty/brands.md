---
name: Deutsche Bank
shortName: Deutsche
slug: deutsche-bank
url: https://db.com
category: Banking
tagline: "Blue slash-in-a-square, white pages, deep blue panels, vivid cyan accents, 2px corners."
updated: 2026-11-16
appStoreId: 1040475847
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Deutsche Bank Blue
    hex: "#0018A8"
    role: Logo symbol and wordmark
  - name: Deep Blue
    hex: "#1E2A78"
    role: Dark panels, primary button on light pages, icon buttons
  - name: Interactive Blue
    hex: "#0550D1"
    role: Buttons inside blue sections, links, date pickers
  - name: Bright Cyan
    hex: "#00D1FF"
    role: Accent panels and highlight rows
  - name: Headline Navy
    hex: "#16184E"
    role: Page headline (h1) color
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on blue
  - name: Black
    hex: "#000000"
    role: Body text and most headings
  - name: Hover Blue
    hex: "#0D43B3"
    role: Hover for interactive blue
  - name: Pressed Blue
    hex: "#163796"
    role: Active and focus for interactive blue
  - name: Ice Blue
    hex: "#E7F4FE"
    role: Light blue section background
  - name: Light Blue
    hex: "#C1D9F6"
    role: Selected rows, quiet blue fills
  - name: Light Grey
    hex: "#F7F7F7"
    role: Neutral section background
  - name: Rule Grey
    hex: "#E1E1E1"
    role: Dividers and borders
  - name: Steel
    hex: "#C1C6CE"
    role: Input borders, inactive indicators
  - name: Grey 747
    hex: "#747474"
    role: Secondary and disabled text
  - name: Signal Red
    hex: "#E4002B"
    role: Errors, negative stock moves
fonts:
  display:
    family: "Deutsche Bank Text"
    fallback: "Roboto"
    weights: [400, 700]
  body:
    family: "Deutsche Bank Text"
    fallback: "Roboto"
    weights: [400, 700]
typeScale:
  - { role: Page headline, size: 44, weight: 400, lineHeight: 1.09, tracking: "0" }
  - { role: Section heading, size: 28, weight: 400, lineHeight: 1.14, tracking: "0" }
  - { role: Card heading, size: 22, weight: 400, lineHeight: 1.27, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 2, md: 4, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 2px 24px 0 rgba(0,0,0,0.07)" }
  - { name: Raised, value: "0 4px 16px -8px rgba(0,0,0,0.5)" }
  - { name: Overlay, value: "0 0 20px rgba(0,0,0,0.3)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#000000"
  muted: "#747474"
  border: "#E1E1E1"
  accent: "#1E2A78"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# Deutsche Bank

## 1. Visual Theme & Atmosphere

Deutsche Bank's group site (db.com) is sober and orderly: white pages, black text, the blue "slash in a square" logo, and full-width deep blue panels that hold news, stock data and campaign stories. A vivid cyan and a brighter interactive blue add energy in places, but the base mood is engineering-grade clarity. Corners are almost square (2px) and type is a single house sans at regular weight.

What makes it recognisable:

- **The slash in the square.** Designed by Anton Stankowski in 1974: a diagonal bar rising left to right inside a square frame. It stands for growth within a stable frame and is used alone very often.
- **Blue on blue.** Logo blue `#0018A8`, deep panel blue `#1E2A78`, interactive blue `#0550D1` and headline navy `#16184E` stack up into a cool, layered look.
- **Bright cyan accent.** `#00D1FF` panels and rows are the brightest thing on the page.
- **Regular-weight headlines.** Page headlines are 44px at weight 400 in navy; nothing is bold for the sake of it.
- **2px corners.** Buttons, inputs and tiles use a 2px radius, just enough to soften the edge.
- **Section themes.** Each content row picks a theme class (white, light grey, ice blue, deep blue, bright cyan) that sets background, headline, text and button colours together.

Mood words: precise, European, institutional, clear, calm.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Deutsche Bank Blue | `#0018A8` | Logo symbol and wordmark |
| Deep Blue | `#1E2A78` | Dark panels (`.type-deep-blue`), primary button on light rows, icon buttons |
| Interactive Blue | `#0550D1` | Buttons in blue sections, links, date picker controls |
| Hover Blue | `#0D43B3` | Hover |
| Pressed Blue | `#163796` | Active and focus |
| Headline Navy | `#16184E` | `.mod-page-headline h1` |
| Midnight | `#191919` | Dark text on light panels (approximate role) |
| Bright Cyan | `#00D1FF` | Accent panels and highlight rows |
| Sky Cyan | `#0098DB` | Secondary accent, charts |
| Ice Blue | `#E7F4FE` | Light blue panels |
| Light Blue | `#C1D9F6` | Selected states, quiet fills |
| Slate | `#425563` | Secondary dark text |
| White | `#FFFFFF` | Base |
| Black | `#000000` | Body and headings |
| Light Grey | `#F7F7F7` | Neutral panels |
| Rule Grey | `#E1E1E1` | Dividers |
| Steel | `#C1C6CE` | Input borders |
| Grey A0 | `#A0A0A0` | Placeholders |
| Grey 747 | `#747474` | Secondary and disabled text |

### Section themes (`--background-color`, `--button-background-color`)

| Theme | Background | Headline / text | Button |
|---|---|---|---|
| White | `#FFFFFF` | `#000000` | `#1E2A78`, white text |
| Light grey | `#F7F7F7` | `#000000` | `#1E2A78`, white text |
| Ice blue | `#E7F4FE` | `#000000` | `#1E2A78`, white text |
| Deep blue / gradient blue | `#1E2A78` | `#FFFFFF` | `#0550D1` (hover `#0D43B3`), or white with `#1E2A78` text |
| Bright cyan | `#00D1FF` | `#000000` | `#1E2A78`, white text |

### Semantic colors

| State | Color | Use |
|---|---|---|
| Error / negative | `#E4002B` (also `#E20505`) | Form errors, falling share price |
| Success / positive | `#088242` | Rising share price, confirmations |
| Info | `#0550D1` on `#E7F4FE` | Notices |
| Warning | `#FFC300` (approximate) | Rare; banners with black text |

### Dark mode

A `body.theme-dark` class exists for some modules (white text, translucent white hover fills `rgba(255,255,255,.2)`), but db.com is presented in light mode.

## 3. Typography

**Family:** Deutsche Bank Text, the bank's proprietary sans (successor to the Deutsche Bank Universal family), served as one family with regular and bold. Stack: `"Deutsche Bank Text", Arial, "Helvetica Neue", Helvetica, sans-serif`.

**Licensing:** proprietary. Use **Roboto** (neutral grotesque, wide language support) as the fallback.

### Scale (db.com, desktop)

| Role | Size | Weight | Line height | Color |
|---|---|---|---|---|
| Page headline (h1) | 44px | 400 | 48-52px | `#16184E` |
| Section heading (h2) | 28px | 400 | 32px | `#000000` |
| Card heading | 22px | 400 | 28px (approximate) | `#000000` |
| Lead | 20px | 400 | 28px (approximate) | `#000000` |
| Body | 16px | 400 | 24px | `#000000` |
| Button | 16px | 400 | 20px | per theme |
| Small / share label | 14px | 400 | 20px | `#747474` |
| Caption | 12px | 400 | 16px | `#747474` |

Mobile h1: 29px/36px, then 26px/32px on the smallest screens.

### Rules

- Sentence case for headlines and buttons.
- Regular weight for headlines; bold only for short labels and data emphasis.
- Body text is black, not grey.
- Stock figures and dates use tabular figures (approximate; the site relies on the font's defaults).
- German and English share the same scale; leave room for longer German words in buttons and headings.

## 4. Logo & Brand Mark

The logo has two parts: the "Deutsche Bank" wordmark and the symbol (a square frame with a diagonal slash). In the classic lockup the wordmark sits to the left, aligned to the bottom of the symbol. The symbol is also used alone, very often, including as the favicon and app icon.

- **Colors:** Deutsche Bank Blue `#0018A8` on white (primary). White on blue panels. Black only where colour is not available.
- **Construction:** the frame is a thick square border; the slash is a parallelogram running from bottom left to top right, inset from the frame.
- **Clear space:** at least the frame thickness times two on all sides (approximate).
- **Minimum size:** symbol about 16px; lockup about 100px wide.
- **App icon:** white symbol on a blue square.

Misuse:

- Do not rotate the symbol or flip the slash direction.
- Do not fill the square solid or change the slash angle.
- Do not recolor the logo cyan or interactive blue.
- Do not set the wordmark in Deutsche Bank Text as live type next to the symbol.

## 5. Components

### Buttons (`.button`)

Base: Deutsche Bank Text 16px/20px, regular weight, `min-height: 40px` (line-height 2.5rem), `padding: 0 12px`, `border-radius: 2px`, no border, inline-flex with an 8px gap for icons.

| Variant | Background | Text | Notes |
|---|---|---|---|
| Primary (light rows) | `#1E2A78` | `#FFFFFF` | Default on white, grey, ice and cyan rows |
| Primary (blue rows) | `#0550D1` | `#FFFFFF` | Hover `#0D43B3`, active/focus `#163796` |
| Primary on image | `#FFFFFF` | `#1E2A78` | Over dark photos |
| Outline (`.variant-outline`) | transparent | `#0550D1` | 1px `#0550D1` border; hover `#0D43B3` |
| Icon only (bg) | `#FFFFFF` | `#1E2A78` | Square 40px |
| Icon only (no bg) | transparent | `#1E2A78` | |
| Share | transparent | `#1E2A78` | Hover `rgba(30,42,120,.2)`; activated `#1E2A78` fill |

- Disabled: transparent with `#747474` text.
- Focus: background shifts to `#163796`; keyboard users also get a 2px outline (approximate).

### Navigation

- Utility row: "Media", "Careers", "Investor Relations", "Research", "Responsibility", "Contact".
- Main row: logo symbol and wordmark left; "Corporates/Institutions", "Private Clients", "Locations", "Client logins".
- Mega menu: white panel with columns of 16px links grouped under 14px labels ("What we do", "Who we are", "Media"), 1px `#E1E1E1` dividers.
- Mobile: "open navigation" burger; full-screen list.

### Cards and teasers

- Teaser: image on top (16:9), 2px corners, 16-24px padding, 22px regular heading, short text, then a text link with an arrow.
- Raised tiles: `box-shadow: 0 .125rem 1.5rem 0 rgba(0,0,0,.07)`.
- On deep blue rows, cards turn transparent with white text and a 1px white rule.

### Stock widget (signature)

A compact share price module: "Deutsche Bank share" label, current price large in regular weight, change in green `#088242` or red `#E4002B` with an arrow, and a timestamp in 12px grey. Sits in a white tile on a deep blue row.

### Content slider

Full-width carousel ("What Next" stories) with a large image, a headline in 28px, slide counters below (`counter-navigation`) and a pause button (round icon button).

### Accordions

Rows with a 22px heading and a circular arrow icon (1px border) that rotates when open; in blue rows the icon and border are white, in light rows `#163796`.

### Inputs and date pickers

- 40px tall, 1px `#C1C6CE` border, 2px radius, 16px text.
- Focus border `#0550D1`.
- Date picker header in `#1E2A78`, day hover `#0D43B3` fill with white text.

## 6. Layout & Spacing

- **Spacing:** rem-based, mostly 0.5, 1, 1.5, 2, 3rem (8, 16, 24, 32, 48px).
- **Grid:** CMS columns (`cms-column-*`) on a 12-column grid, with full-width rows (`type-full-width`) for heroes and sliders.
- **Container:** about 1200-1280px content width (approximate), 24px side padding on mobile.
- **Breakpoints:** roughly 768px and 1024px, plus 1440px for wide layouts (approximate).
- **Section rhythm:** each row is a coloured band with 24-48px internal padding; rows stack without gaps so colour changes do the separating.
- **Density:** medium, news-portal style; many teasers per page.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Card | `0 .125rem 1.5rem 0 rgba(0,0,0,.07)` | Raised tiles |
| Raised | `0 .25rem 1rem -.5rem rgba(0,0,0,.5)` | Dropdowns |
| Overlay | `0 0 1.25rem rgba(0,0,0,.3)` | Modals and lightboxes |
| Subtle | `0 1px .313rem 0 rgba(0,0,0,.35)` | Small floating controls |

- Gradients are only used as fades on sliders: `linear-gradient(to left, #1E2A78, transparent)` at carousel edges.
- Motion: 200-300ms ease on hover and accordion; sliders auto-advance with a pause control (approximate timing).

## 8. Iconography & Imagery

- **Icons:** simple line icons at 16-24px, 1.5px stroke, in deep blue `#1E2A78` or white on blue; arrow icons sit inside 1px circles.
- **Photography:** editorial and documentary: clients, employees, cities and European industry. Natural light, real settings, often full-bleed in sliders.
- **Graphic device:** the diagonal of the logo appears as a cropped slash or angled mask on hero images.
- **Data:** clean line and bar charts in blues and cyan.

## 9. Voice & Microcopy

Measured, factual and European. Headlines name a topic or a client story; body copy is informative.

- Sentence case.
- CTAs: "Watch the video", "Discover where Europe can win", "Client logins", "Contact".
- Section labels: "What Next", "European Success Stories", "Responsible Growth", "Technological Transformation".

Sample strings (from db.com, 2026-11-16):

- "Europe's plasma shortage: how Grifols secures supply"
- "\"Europe is at a very promising point right now\""
- "Discover where Europe can win"
- "Client logins, online banking"
- "Locations worldwide"

## 10. Do's and Don'ts

**Do**

- Use white pages with full-width blue and cyan bands for rhythm.
- Keep headlines regular weight, 44px for page titles in `#16184E`.
- Use 2px corners on buttons, inputs and tiles.
- Use `#1E2A78` for primary buttons on light rows and `#0550D1` on blue rows.
- Use the symbol alone wherever the full lockup will not fit.

**Don't**

- Don't use rounded pill buttons or large radii.
- Don't use the logo blue `#0018A8` for UI buttons; it belongs to the logo.
- Don't use cyan for text; it is a background accent.
- Don't add heavy shadows or glossy gradients.
- Don't rotate or restyle the slash.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Deutsche Bank's db.com. White page, black body text, page headline 44px weight 400 in navy `#16184E`. Font: "Deutsche Bank Text", fallback Roboto, Arial. Body 16px/24px weight 400. Stack full-width section bands: white, light grey `#F7F7F7`, ice blue `#E7F4FE`, deep blue `#1E2A78` with white text, and one bright cyan `#00D1FF` accent band. Buttons are 40px tall, 0 12px padding, 2px radius, regular 16px text: `#1E2A78` with white text on light bands; `#0550D1` (hover `#0D43B3`, active `#163796`) on blue bands; outline variant with a 1px `#0550D1` border. Teaser cards: image on top, 2px corners, 22px regular heading, soft shadow `0 2px 24px rgba(0,0,0,.07)`. Include a share price tile with a green `#088242` or red `#E4002B` change value. Logo is a blue `#0018A8` square frame with a diagonal slash. Copy is factual and sentence case.

```css
:root {
  --brand-logo-blue: #0018A8;
  --brand-deep-blue: #1E2A78;
  --brand-action: #0550D1;
  --brand-action-hover: #0D43B3;
  --brand-action-active: #163796;
  --brand-headline: #16184E;
  --brand-cyan: #00D1FF;
  --brand-sky-cyan: #0098DB;
  --brand-ice: #E7F4FE;
  --brand-light-blue: #C1D9F6;
  --brand-text: #000000;
  --brand-text-muted: #747474;
  --brand-slate: #425563;
  --brand-bg: #FFFFFF;
  --brand-surface: #F7F7F7;
  --brand-border: #E1E1E1;
  --brand-border-input: #C1C6CE;
  --brand-positive: #088242;
  --brand-negative: #E4002B;
  --brand-font: "Deutsche Bank Text", Roboto, Arial, "Helvetica Neue", Helvetica, sans-serif;
  --brand-radius: 2px;
  --brand-button-height: 2.5rem;
  --brand-shadow-card: 0 .125rem 1.5rem 0 rgba(0,0,0,.07);
  --brand-shadow-raised: 0 .25rem 1rem -.5rem rgba(0,0,0,.5);
  --brand-shadow-overlay: 0 0 1.25rem rgba(0,0,0,.3);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Deutsche Bank.

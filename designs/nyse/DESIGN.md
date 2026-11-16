---
name: NYSE
slug: nyse
url: https://nyse.com
category: Finance
tagline: "Black-and-white exchange site with square corners, Suisse type and an ice-blue bracket."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ice Blue
    hex: "#71C5E8"
    role: Brand color, logo corner bracket, link hover, offset card shadow
  - name: Black
    hex: "#000000"
    role: Wordmark, primary buttons, headlines
  - name: Deep Teal
    hex: "#235F73"
    role: Secondary brand color, text links, info buttons
  - name: Harbor Navy
    hex: "#0F364A"
    role: Accent, dark panels and footer
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Signal Orange
    hex: "#F76808"
    role: Secondary button text and outline, small highlights
  - name: Brand Dark Blue
    hex: "#006695"
    role: Inverse background, darker brand text
  - name: Mist
    hex: "#D4E2E8"
    role: Selection background, light brand tint
  - name: Grey 100
    hex: "#F5F5F5"
    role: Subtle section background, light dividers
  - name: Grey 300
    hex: "#D4D4D4"
    role: Dividers, filled backgrounds
  - name: Grey 400
    hex: "#B5B5B5"
    role: Default borders, muted text, disabled labels
  - name: Grey 700
    hex: "#404040"
    role: Body text
  - name: Grey 900
    hex: "#171717"
    role: Strong text
  - name: Up Green
    hex: "#00C200"
    role: Positive price change in market data
  - name: Down Red
    hex: "#C7001B"
    role: Negative price change in market data (approximate role)
fonts:
  display:
    family: "Suisse Intl"
    fallback: "Inter"
    weights: [400, 500, 700]
  body:
    family: "Suisse Intl"
    fallback: "Inter"
    weights: [300, 400, 500]
  mono:
    family: "Menlo"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 64, weight: 500, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading L, size: 40, weight: 500, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading M, size: 28, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Label, size: 14, weight: 700, lineHeight: 1.3, tracking: "0.04em" }
  - { role: Ticker, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 0, md: 1, lg: 1, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Offset Ice, value: "16px 16px 0 0 #71C5E8" }
  - { name: Popover, value: "0 3px 10px rgba(0,0,0,0.3)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  muted: "#404040"
  border: "#D4D4D4"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# NYSE

## 1. Visual Theme & Atmosphere

nyse.com reads like a printed annual report for a 230-year-old institution that now runs on fibre. It is mostly black type on white, with large photography of the trading floor, the Opening Bell and listed-company founders. The one colour that belongs to NYSE is ice blue (`#71C5E8`), and it is used sparingly: the corner bracket in the logo, link hovers, and a hard, offset block shadow behind feature images.

What makes it recognisable:

- **Square everything.** The site's Tailwind theme sets every radius token (`--radius-xs` through `--radius-2xl`) to `1px`, and buttons use `border-radius: 0`. Cards, images, inputs and tags all have sharp corners.
- **The ice-blue bracket.** The logo's top-right corner bracket is the brand device. It reappears as a flat offset shadow (`16px 16px 0 0 #71C5E8`) behind hero images and video tiles.
- **Black buttons with white borders.** The default `.btn` is a black block, white text, a 2px white border and no rounding. On hover the text turns ice blue.
- **Neo-grotesk type.** Everything is set in Suisse Intl, so headings feel Swiss and neutral, not banker-serif.
- **Market data as furniture.** A "Today's Stock Market" strip shows index levels with green and red changes in small, tabular type.
- **Media-led.** The homepage is built around NYSE Live, the Market Update and IPO stories, so video tiles and portrait photos carry the page.

Mood words: institutional, editorial, crisp, confident, monochrome.

## 2. Color Palette & Roles

The live CSS (`static.nyse.com/cms/.../nyse.css`) defines `--color-primary: #71c5e8`, `--color-secondary: #235f73` and `--color-accent: #0f364a`, each with a small tint ramp, plus a neutral grey ramp and an `--igw-*` token set for the market-data widgets.

| Name | Hex | Role |
|---|---|---|
| Ice Blue (primary 500) | `#71C5E8` | Logo bracket, link hover, offset shadow, brand background chips |
| Primary 600 | `#25B4EF` | Brighter blue for hover on blue fills |
| Primary 700 | `#0093D0` | Pressed blue, chart line |
| Primary 300 | `#B8D6E3` | Text highlight, navbar info |
| Primary 200 / Mist | `#D4E2E8` | Selection background |
| Primary 100 | `#ECEFF1` | Very light blue-grey panels |
| Deep Teal (secondary 500) | `#235F73` | Text links, info buttons, link borders |
| Secondary 600 | `#164F62` | Link hover on light backgrounds |
| Secondary 700 | `#0B3E4F` | Pressed link |
| Harbor Navy (accent 500) | `#0F364A` | Dark panels, footer, overlays |
| Accent 700 | `#022333` | Deepest navy |
| Brand Dark Blue | `#006695` | Inverse background, `--igw-text-brand-dark` |
| Black | `#000000` | Wordmark, buttons, headings |
| Grey 900 | `#171717` | Strong text |
| Grey 800 | `#262626` | Dark backgrounds in widgets |
| Grey 700 | `#404040` | Body text (`--igw-text`) |
| Grey 500 | `#737373` | Secondary text |
| Grey 400 | `#B5B5B5` | Borders, muted text, disabled labels |
| Grey 300 | `#D4D4D4` | Dividers |
| Grey 200 | `#E2E2E2` | Card borders |
| Grey 100 | `#F5F5F5` | Subtle background |
| Disabled Fill | `#E3E7E6` | Disabled button background |
| Signal Orange | `#F76808` | Secondary button text and outline |

### Market data colours

| State | Hex | Use |
|---|---|---|
| Up | `#00C200` | Positive change, up arrows |
| Up (alt) | `#00CC00` | Bright green in tickers |
| Down | `#C7001B` | Negative change (approximate role) |
| Down (dark) | `#990014` | Pressed or dark-mode negative (approximate role) |
| Flat | `#404040` | Unchanged |

### Mode

The public site is light only. Dark sections (`#0F364A` or black) appear for video features and the footer, with white text and ice-blue links.

## 3. Typography

- **Family:** Suisse Intl (Swiss Typefaces), self-hosted. Stack from the CSS: `"Suisse Intl", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- **License:** commercial. Use **Inter** as the free substitute; it has similar proportions. "Inter Tight" works for very large headings.
- **Mono:** Menlo/Monaco stack for code and some data tables. JetBrains Mono is a fine stand-in.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (h1, desktop) | 64px (`4rem`) | 500 | 1.05 | -0.02em |
| Heading L | 40px | 500 | 1.1 | -0.01em |
| Heading M | 28px | 500 | 1.2 | 0 |
| Heading S | 20px | 700 | 1.3 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small | 14px | 400 | 1.45 | 0 |
| Label / button | 14px | 700 | 1.3 | 0.04em, often uppercase |
| Ticker values | 14px | 400 | 1.4 | 0, tabular figures |

The 64px hero is read from the CSS (`h1 { font-size: 4rem }`); the other heading sizes are approximate.

Rules:

- Headlines are sentence case: "The home of market-defining IPOs", "Capital markets happen here".
- Small labels and CTAs are often uppercase: "READ NOW", "LOGIN".
- Use `font-variant-numeric: tabular-nums` for prices, index levels and percentages.
- Weight contrast is modest; 500 for headings and 700 only for small labels and buttons.

## 4. Logo & Brand Mark

The logo is the word "NYSE" in a custom geometric sans (lowercase-style "e" with an open aperture) plus an ice-blue corner bracket floating above and to the right of the "E". The bracket is two bars meeting at a right angle, like the corner of a frame.

- **Colours:** letters black `#000000` (or white on dark), bracket always ice blue `#71C5E8`.
- **Clear space:** at least the height of the bracket's bar thickness times two on every side (approximate).
- **Minimum size:** about 64px wide on screen so the bracket stays visible (approximate).
- **Header use:** 36-45px tall in the site header, left aligned.
- **App avatar:** white letters and the ice-blue bracket on black.

Misuse:

- Don't recolour the bracket, separate it from the letters, or rotate it.
- Don't set "NYSE" in another typeface as a stand-in for the logo.
- Don't place the logo on ice blue; the bracket disappears.

## 5. Components

### Buttons

| Variant | CSS |
|---|---|
| Primary | `background:#000; color:#fff; border:2px solid #fff; border-radius:0; padding:8px 48px; font-weight:700;` |
| Primary hover | `background:#000; color:#71C5E8; border-color:#fff;` |
| Primary active | `transform:translateY(2px); color:#71C5E8;` |
| Secondary | `background:transparent; color:#F76808; border:2px solid currentColor;` |
| Inverse (on dark) | `background:transparent; color:#fff; border:2px solid #fff; font-weight:700;` hover `background:#fff; color:#171717;` |
| Link CTA | `color:#235F73; font-weight:700; text-transform:uppercase;` hover `color:#164F62;` |
| Disabled | `background:#E3E7E6; border-color:#E3E7E6; color:#B5B5B5; cursor:not-allowed;` |

Buttons sit 40-48px tall. Keep them rectangular.

### Header and navigation

- White bar, 72-80px tall, logo left, mega-menu triggers centre: Listings, Trading, Market Data, Insights, About. A second row or menu exposes Indices, NYSE American, ETFs, NYSE Texas.
- Right side: search icon and "LOGIN".
- Mega-menus drop full width on white with columns of plain links ("What to List", "How to List", "Listing Process") and a promo tile.
- Active nav item: 2px black underline or ice-blue underline.

### Market strip ("Today's Stock Market")

```css
.market-strip { display:flex; gap:32px; padding:12px 0; border-top:1px solid #D4D4D4; border-bottom:1px solid #D4D4D4; font-size:14px; }
.market-strip .name { font-weight:700; color:#000; }
.market-strip .value { font-variant-numeric:tabular-nums; color:#404040; }
.market-strip .up { color:#00C200; }
.market-strip .down { color:#C7001B; }
```

### Feature and media cards

- Image on top with square corners, headline below in 20px weight 500, short description in 16px grey 700, and an uppercase link ("Watch now", "Read now").
- Hero media gets the offset shadow: `box-shadow: 16px 16px 0 0 #71C5E8;` and a 16px bottom/right margin so it does not collide.
- Video tiles show a centred play button: a white circle 64px with a black triangle.

### Inputs

- Square 1px border `#B5B5B5`, 44px height, 12px horizontal padding, 16px text.
- Focus: border `#71C5E8` with `box-shadow: 0 0 0 3px #D4E2E8` (approximate).
- Labels 14px weight 700 above the field.

### Tables (market data, listings)

- Header row: white background, 12-14px uppercase labels in black, 2px black bottom border.
- Rows 44px, 1px `#E2E2E2` separators, numbers right-aligned and tabular.
- Ticker symbols in bold, links in deep teal.

### Tags and badges

- Rectangular, 1px radius, 4px 8px padding, 12px uppercase weight 700.
- Neutral: `background:#F5F5F5; color:#404040`. Brand: `background:#71C5E8; color:#000`.

### Footer

Harbor navy or black, white links in columns (Listings, Trading, Data, About), social icons, ICE ownership line and legal links in 12px grey.

## 6. Layout & Spacing

- Max content width about 1280px with 24px gutters on mobile and 32-48px on desktop (approximate).
- 12-column grid; feature rows split 7/5 or 6/6, card rows 3 or 4 across.
- Base spacing unit 4px; common steps 8, 16, 24, 32, 48, 64, 96.
- Sections are separated by 64-96px of white space or a full-width dark band.
- Breakpoints follow Tailwind defaults: 640, 768, 1024, 1280, 1536.
- Density: generous on the marketing homepage, tight in market-data tables.

## 7. Depth, Elevation & Motion

- Mostly flat. Depth comes from the hard offset ice-blue shadow, not blur.
- Popovers and dropdowns: `0 3px 10px rgba(0,0,0,0.3)`.
- Inputs in the data widgets use `inset 0 1px 1px rgba(0,0,0,0.08)`.
- Transitions are short: 150-200ms ease on colour and underline changes.
- Buttons press down 2px on active.
- Carousels (Swiper) slide with 300ms ease-out.

## 8. Iconography & Imagery

- Icons are simple outline or solid glyphs (react-icons style), 16-24px, black or white. No illustrations in a cartoon style.
- Photography: the trading floor, bell ceremonies, confetti, founders on the balcony, the Broad Street facade with the flag. Real people, high contrast, editorial crops.
- Video thumbnails carry a small "NYSE Live" or "Market Update" label.
- Use ice blue as a framing element (bracket corners, offset blocks) instead of overlays.

## 9. Voice & Microcopy

- Authoritative, short and declarative. The exchange speaks as the place where things happen.
- Sentence case headlines, uppercase small CTAs.
- Avoid hype. Let the institution's name and the companies carry the weight.

Sample strings:

- "Capital markets happen here"
- "The home of market-defining IPOs"
- "Start your day with a one-minute snapshot of key equity market moves."
- "Watch today's bell"
- "Subscribe to alerts"
- Nav: "Listings", "Trading", "Market Data", "Insights", "About"

## 10. Do's and Don'ts

**Do**

- Keep corners square on buttons, cards, images and inputs.
- Use black and white as the base, with ice blue `#71C5E8` as the single brand accent.
- Use the hard offset shadow `16px 16px 0 0 #71C5E8` on one hero image per view.
- Set all text in Suisse Intl or Inter with weights 400-500 for headings.
- Show real market data with tabular numerals and green/red changes.
- Use editorial photography of the floor and listings.

**Don't**

- Don't round corners or use pill buttons.
- Don't use soft blurred drop shadows on cards.
- Don't flood sections with ice blue; it is an accent.
- Don't use serif fonts or script lettering.
- Don't invent index values; pull them from a live source.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of the New York Stock Exchange website. White page, black text, Suisse Intl (use Inter) at weights 400-500 for headings and 400 for body, 16px body with 1.5 line height. Every corner is square: buttons, cards, inputs and images have 0-1px radius. Primary buttons are black with white text, a 2px white border, 8px 48px padding and bold uppercase-friendly labels; on hover the text turns ice blue `#71C5E8`. Secondary buttons are outlined in orange `#F76808`. Links are deep teal `#235F73`. Use ice blue only as the brand accent: the logo's corner bracket, link hover, and a hard offset shadow `16px 16px 0 0 #71C5E8` behind the hero image. Dark bands and the footer use navy `#0F364A` with white text. Add a thin "Today's Stock Market" strip with index names in bold, tabular values, and changes in green `#00C200` or red `#C7001B`. Cards are image-top with a 20px headline and an uppercase "Read now" link. Content max width about 1280px, 64-96px between sections, flat surfaces, 150ms colour transitions.

```css
:root {
  --nyse-ice: #71C5E8;
  --nyse-ice-600: #25B4EF;
  --nyse-ice-700: #0093D0;
  --nyse-mist: #D4E2E8;
  --nyse-teal: #235F73;
  --nyse-teal-600: #164F62;
  --nyse-navy: #0F364A;
  --nyse-blue-dark: #006695;
  --nyse-orange: #F76808;
  --nyse-black: #000000;
  --nyse-white: #FFFFFF;
  --nyse-grey-100: #F5F5F5;
  --nyse-grey-200: #E2E2E2;
  --nyse-grey-300: #D4D4D4;
  --nyse-grey-400: #B5B5B5;
  --nyse-grey-700: #404040;
  --nyse-grey-900: #171717;
  --nyse-up: #00C200;
  --nyse-down: #C7001B;
  --nyse-font: "Suisse Intl", "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif;
  --nyse-font-mono: Menlo, Monaco, Consolas, "Courier New", monospace;
  --nyse-radius: 0;
  --nyse-shadow-offset: 16px 16px 0 0 #71C5E8;
  --nyse-shadow-pop: 0 3px 10px rgba(0,0,0,0.3);
  --nyse-ease: ease;
  --nyse-duration: 150ms;
}
```

---

Values are observed from the public nyse.com site and its CSS on 2026-11-16; values marked approximate are estimates. This file is an unofficial reference and is not affiliated with or endorsed by NYSE or Intercontinental Exchange.

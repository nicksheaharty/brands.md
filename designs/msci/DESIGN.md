---
name: MSCI
slug: msci
url: https://msci.com
category: Finance
tagline: "Electric-blue bands, tight-tracked Inter headlines and turquoise pills for index data."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Brand Blue
    hex: "#1A3FD6"
    role: Header, hero bands, primary buttons, links, logo background
  - name: Turquoise
    hex: "#00C4B3"
    role: High-emphasis CTA fill (black text), accents on blue
  - name: Deep Blue
    hex: "#0626A9"
    role: Pressed and hover blue, dark bands
  - name: White
    hex: "#FFFFFF"
    role: Page background, text and logo on blue
  - name: Blue 100
    hex: "#F4F5FD"
    role: Light blue section background, input fill
  - name: Black
    hex: "#000000"
    role: Headlines and body text on white
  - name: Blue 500
    hex: "#6C84EF"
    role: Secondary blue, chart series, muted text on blue
  - name: Blue 300
    hex: "#AEBAF0"
    role: Borders and dividers on blue, light chart series
  - name: Turquoise 900
    hex: "#00A798"
    role: Turquoise hover and text on white
  - name: Grey 900
    hex: "#4D4D4D"
    role: Secondary body text
  - name: Grey 700
    hex: "#707070"
    role: Meta text, captions
  - name: Grey 300
    hex: "#CCCCCC"
    role: Borders
  - name: Grey 100
    hex: "#E6E6E6"
    role: Dividers, card outlines
  - name: Magenta
    hex: "#D61A69"
    role: Accent for charts and tags
  - name: Red
    hex: "#E02C1C"
    role: Errors, negative values
fonts:
  display:
    family: "Inter"
    fallback: "Inter"
    weights: [600]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Headline 1, size: 64, weight: 600, lineHeight: 1.1, tracking: "-0.06em" }
  - { role: Headline 2, size: 42, weight: 600, lineHeight: 1.2, tracking: "-0.05em" }
  - { role: Headline 3, size: 32, weight: 600, lineHeight: 1.3, tracking: "-0.04em" }
  - { role: Headline 4, size: 28, weight: 600, lineHeight: 1.3, tracking: "-0.03em" }
  - { role: Body L, size: 20, weight: 400, lineHeight: 1.4, tracking: "-0.02em" }
  - { role: Body S, size: 16, weight: 400, lineHeight: 1.5, tracking: "-0.02em" }
  - { role: Label, size: 16, weight: 500, lineHeight: 1.5, tracking: "-0.02em" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "-0.01em" }
radii: { sm: 4, md: 12, lg: 18, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 2px 8px -2px rgba(0,0,0,0.12)" }
  - { name: Soft Glow, value: "0 0 50px rgba(26,63,214,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F5FD"
  text: "#000000"
  muted: "#4D4D4D"
  border: "#E6E6E6"
  accent: "#1A3FD6"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# MSCI

## 1. Visual Theme & Atmosphere

MSCI is the index and analytics company, and its site looks like a modern data product rather than a bank. The signature is a saturated electric blue (`#1A3FD6`) used as full-width bands for the header and hero, with white text and a turquoise (`#00C4B3`) pill button for the main call to action. Below the hero, the page turns white with black, tightly tracked Inter headlines and rounded cards.

What makes it recognisable:

- **Electric blue bands.** The header and hero sit on `#1A3FD6`; the white logo, white headlines and turquoise CTA sit on top.
- **Negative tracking everywhere.** Every type token carries negative letter-spacing, from -0.01em on small text to -0.06em on the 64px headline. Headlines look dense and engineered.
- **Pills and soft rectangles.** Buttons and inputs are fully rounded (`border-radius: 9999px`); cards use 12px or 18px corners.
- **The network globe.** The logo pairs a wide-set "MSCI" with a circular mark of nodes and links, a nod to connected data.
- **Research-first content.** The homepage leads with a research question ("Where have infrastructure returns really come from?"), then featured solutions, events, insights and news.

Mood words: precise, data-driven, modern, cool, confident.

## 2. Color Palette & Roles

The site is built with a prefixed Tailwind theme (`ms-` classes). Brand tokens are `brandblue-100/300/500/700/900` and `brandturquoise-700/900`.

| Name | Token | Hex | Role |
|---|---|---|---|
| Brand Blue | brandblue-700 | `#1A3FD6` | Header, hero, primary buttons, links |
| Deep Blue | brandblue-900 | `#0626A9` | Hover and pressed blue, darker bands |
| Blue Mid | (hover) | `#1538B4` | Link hover |
| Blue 500 | brandblue-500 | `#6C84EF` | Secondary blue, chart series |
| Blue 300 | brandblue-300 | `#AEBAF0` | Dividers on blue, light series |
| Blue 100 | brandblue-100 | `#F4F5FD` | Light section fill, input fill |
| Turquoise | brandturquoise-700 | `#00C4B3` | CTA fill on blue, with black text |
| Turquoise 900 | brandturquoise-900 | `#00A798` | Turquoise hover, turquoise text on white |
| White | | `#FFFFFF` | Page background |
| Black | | `#000000` | Headlines and body |
| Grey 900 | gray-900 | `#4D4D4D` | Secondary text |
| Grey 700 | gray-700 | `#707070` | Meta and captions |
| Grey 500 | gray-500 | `#999999` | Placeholder, disabled |
| Grey 300 | gray-300 | `#CCCCCC` | Borders |
| Grey 100 | gray-100 | `#E6E6E6` | Dividers, card outlines |
| Grey 50 | gray-50 | `#F5F5F5` | Neutral panels |

### Data and accent colours

| Name | Hex | Use |
|---|---|---|
| Magenta | `#D61A69` | Chart accent, tags |
| Red | `#E02C1C` | Errors, negative returns |
| Peach | `#FFC6B5` | Soft accent panels |
| Navy | `#0F477B` | Chart series, dark text on light blue |
| Green | `#118A5E` | Positive values (approximate role) |
| Orange | `#F7620E` | Chart series (approximate role) |

### Mode

Light pages with blue bands. There is no dark mode toggle; the blue bands act as the "dark" surface, with white text and `#AEBAF0` for secondary text.

## 3. Typography

- **Family:** Inter, served by Next.js font loading (`Inter, "Inter Fallback"`). It is free on Google Fonts, so the fallback is Inter itself.
- **Weights:** 600 for headlines, 500 for labels and buttons, 400 for body.
- **Tracking:** every token is negative; keep it.

| Token | Mobile | Desktop | Line height | Tracking |
|---|---|---|---|---|
| headline1 | 36px | 64px | 1.1 | -0.04em / -0.06em |
| headline2 | 28px | 42px | 1.3 / 1.2 | -0.04em / -0.05em |
| headline3 | 24px | 32px | 1.3 | -0.04em |
| headline4 | 24px | 28px | 1.3 | -0.03em |
| body-l | 16px | 20px | 1.4 | -0.01em / -0.02em |
| body-article | 16px | 20px | 1.6 | -0.01em / -0.02em |
| body-s | 14px | 16px | 1.5 | -0.01em / -0.02em |
| label-m | 14px | 16px | 1.5 | -0.02em, weight 500 |

Rules:

- Sentence case headlines, often phrased as a question or a promise: "Stay ahead of changing markets".
- Section headers pair a large word with a smaller descriptor: "Featured solutions" + "End-to-end tools to meet your needs".
- Article links are underlined body text, not coloured buttons.
- Use tabular figures in index tables and performance charts.

## 4. Logo & Brand Mark

The logo is "MSCI" in a wide, geometric sans with even spacing, followed by a circular network mark: a ring with an inner lattice of lines and node dots.

- **Colours:** white on brand blue in the site header; on white, dark navy letters (`#011B2B`, approximate) with the mark in blue.
- **Clear space:** at least the width of the "I" stroke times three around the lockup (approximate).
- **Minimum size:** about 80px wide so the node dots stay visible (approximate).
- **Avatar:** the network globe alone, white on brand blue.

Misuse:

- Don't separate the letters from the mark in headers; the globe alone is for small square avatars.
- Don't recolour the mark turquoise or add gradients.
- Don't rebuild the wordmark in Inter; it is a custom drawing.

## 5. Components

### Buttons

| Variant | CSS |
|---|---|
| Primary (blue) | `background:#1A3FD6; color:#fff; border-radius:9999px; height:48px; padding:0 24px; font:500 14px/1.5 Inter; letter-spacing:-0.02em;` |
| Primary active | `background:#0626A9;` |
| CTA on blue (turquoise) | `background:#00C4B3; color:#000; border-radius:9999px; height:60px; padding:0 32px; font-weight:500;` hover `background:#00A798;` |
| Outline on white | `background:transparent; color:#1A3FD6; border:1px solid #1A3FD6; border-radius:9999px;` hover `background:#F4F5FD;` |
| Outline on blue | `color:#fff; border:1px solid #fff;` hover `background:#fff; color:#1A3FD6;` |
| Text link | `color:#1A3FD6; text-decoration:underline; text-underline-offset:3px;` hover `color:#1538B4;` |
| Focus | `outline:1px solid #fff` on blue, ring `#1A3FD6` on white |

### Header

- Brand-blue bar with the white logo left.
- Utility row: "Global" (region), "Client Support", "Client Log In".
- Main nav: Featured Solutions, Data & Analytics, Indexes, Research & Insights, Discover MSCI, plus a search icon.
- Mega-menus open on white, 12px radius bottom corners, with grouped links ("Rules-based Index Solutions", "Fixed Income Offerings", "Private Asset Solutions").

### Subscribe bar

A signature pattern: a pill email input joined to a turquoise pill button.

```css
.subscribe { display:flex; }
.subscribe input { background:#F4F5FD; border:0; border-radius:9999px 0 0 9999px; padding:18px 32px; font-size:16px; }
.subscribe input:focus { background:#fff; outline:none; }
.subscribe button { background:#00C4B3; color:#000; border-radius:9999px; height:60px; padding:0 32px; margin-left:-32px; font-weight:500; }
```

Label: "Get access" or "Subscribe".

### Cards

- Solution cards: white, 18px radius, 1px `#E6E6E6` border, 24-32px padding, headline4 title, body-s description, arrow link.
- Research cards: image top with 12px radius, eyebrow ("MSCI Research Weekly"), title, date.
- Event cards: date block in brand blue, title, location, "Register" link.
- Hover: border darkens to `#CCCCCC` and the card picks up `0 2px 8px -2px rgba(0,0,0,0.12)`.

### Tabs and chips

- Filter chips are pills: `background:#F4F5FD; color:#000; padding:8px 16px;` selected `background:#1A3FD6; color:#fff`.
- Tabs: underline style, 2px brand blue under the active label.

### Tables (index data)

- White, 1px `#E6E6E6` row lines, 14px body-s, right-aligned tabular figures.
- Header labels 12-14px weight 500, grey `#707070`.
- Positive returns in green `#118A5E`, negative in red `#E02C1C` (approximate roles).

### Footer

Brand blue or deep blue, white headings, `#AEBAF0` links, legal row in 12px.

## 6. Layout & Spacing

- Max content width 1440px (`max-w-[1440px]`), with 16px mobile and 40-64px desktop padding (approximate).
- Grid: 4 columns on mobile, 8 on tablet, 12 on desktop (`col-span-4 md:col-span-8 lg:col-span-12`).
- Spacing on a 4px base; sections 64-96px apart.
- Breakpoints: Tailwind defaults with `lg` at 1024px as the main switch for type tokens.
- Density: airy marketing pages; compact data tables.

## 7. Depth, Elevation & Motion

- Mostly flat. Cards use borders; hover adds a small shadow.
- Some hero graphics carry a soft blue glow (`0 0 50px` in a blue tint).
- Colour transitions on buttons and inputs (`transition-colors`, about 150ms).
- Menus fade and slide down about 8px over 200ms (approximate).
- Respect `prefers-reduced-motion` for hero animations.

## 8. Iconography & Imagery

- Icons: thin line icons, 1.5px stroke, 20-24px, white on blue or black on white.
- Imagery: abstract data visuals, network lines, architectural and infrastructure photography, cropped in rounded rectangles.
- Charts: brand blue primary series, then `#6C84EF`, `#AEBAF0`, turquoise and magenta as accents.
- No illustrations of people with cartoon styling.

## 9. Voice & Microcopy

- Expert and plain. MSCI speaks about clarity, decisions and evidence.
- Headlines are short claims or questions; body copy is specific about asset classes and tools.
- Sentence case for everything except product names.

Sample strings:

- "Bringing clarity to investment decisions"
- "Where have infrastructure returns really come from?"
- "Featured solutions: End-to-end tools to meet your needs"
- "Research & Insights: Stay ahead of changing markets"
- "Subscribe today for insights delivered direct to your inbox."
- Buttons: "Get access", "Get in touch", "Subscribe", "Client Log In"

## 10. Do's and Don'ts

**Do**

- Use brand blue `#1A3FD6` for the header and hero, with white text.
- Make the main CTA on blue a turquoise pill with black text.
- Keep negative letter-spacing on every type size.
- Use 12-18px card radii and pill buttons and inputs.
- Show real index names and data with tabular numbers.

**Don't**

- Don't use turquoise as a background for large areas.
- Don't put white text on turquoise; it fails contrast. Use black.
- Don't use square buttons or heavy shadows.
- Don't mix in a serif typeface.
- Don't quote index levels or returns that are not pulled from a live source.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of MSCI. Header and hero are full-width electric blue `#1A3FD6` with white text and a white logo. Below, a white page with black text. Font is Inter throughout: headlines weight 600 with strong negative tracking (64px/1.1 at -0.06em on desktop, 42px at -0.05em, 32px at -0.04em), body 16-20px at -0.02em, labels 16px weight 500. Primary buttons are blue pills (`border-radius:9999px`, 48px tall, 24px padding, white text, active `#0626A9`). On blue backgrounds the main CTA is a turquoise `#00C4B3` pill with black text, hover `#00A798`. Add a subscribe bar: a pill input in `#F4F5FD` joined to a turquoise pill button. Cards are white with 18px radius, 1px `#E6E6E6` border, 24-32px padding, small hover shadow. Secondary text `#4D4D4D`, meta `#707070`. Light sections use `#F4F5FD`. Grid 4/8/12 columns, max width 1440px, 64-96px between sections. Copy is plain and specific.

```css
:root {
  --msci-blue: #1A3FD6;
  --msci-blue-900: #0626A9;
  --msci-blue-hover: #1538B4;
  --msci-blue-500: #6C84EF;
  --msci-blue-300: #AEBAF0;
  --msci-blue-100: #F4F5FD;
  --msci-turquoise: #00C4B3;
  --msci-turquoise-900: #00A798;
  --msci-white: #FFFFFF;
  --msci-black: #000000;
  --msci-grey-900: #4D4D4D;
  --msci-grey-700: #707070;
  --msci-grey-500: #999999;
  --msci-grey-300: #CCCCCC;
  --msci-grey-100: #E6E6E6;
  --msci-grey-50: #F5F5F5;
  --msci-magenta: #D61A69;
  --msci-red: #E02C1C;
  --msci-font: "Inter", ui-sans-serif, system-ui, sans-serif;
  --msci-track-h1: -0.06em;
  --msci-track-body: -0.02em;
  --msci-radius-sm: 4px;
  --msci-radius-md: 12px;
  --msci-radius-lg: 18px;
  --msci-radius-pill: 9999px;
  --msci-shadow-card: 0 2px 8px -2px rgba(0,0,0,0.12);
  --msci-duration: 150ms;
}
```

---

Values are observed from the public msci.com site and its CSS on 2026-11-16; values marked approximate are estimates. This file is an unofficial reference and is not affiliated with or endorsed by MSCI Inc.

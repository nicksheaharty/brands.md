---
name: Datadog
slug: datadog
url: https://datadoghq.com
category: Developer
tagline: "Bold purple observability brand: Bits the dog, uppercase CTAs and dense product grids."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Datadog Purple
    hex: "#632CA6"
    role: Logo, primary buttons, links, brand fills
  - name: Neue Purple
    hex: "#7700FF"
    role: Newer bright violet for CTAs, outline buttons, highlights
  - name: Black
    hex: "#000000"
    role: Headings, nav, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on purple
  - name: Purple 90
    hex: "#8000FF"
    role: Accent text, gradient stop
  - name: Purple 95
    hex: "#6300D4"
    role: Hover and pressed violet
  - name: Purple 100
    hex: "#4300B0"
    role: Deep violet sections
  - name: Dark Purple
    hex: "#110617"
    role: Near-black purple for dark heroes and footers
  - name: Lavender
    hex: "#BEAAFF"
    role: Secondary accent, illustrations
  - name: Purple 60
    hex: "#F2E7FD"
    role: Pale purple panels
  - name: Grey Text
    hex: "#737373"
    role: Secondary text, captions
  - name: Grey 5
    hex: "#F6F6F6"
    role: Section background
  - name: Grey Border
    hex: "#E6E6E6"
    role: Card borders, dividers
  - name: Grey 130
    hex: "#101010"
    role: Dark product UI background
  - name: Success
    hex: "#5CB85C"
    role: OK monitor status
  - name: Alert Red
    hex: "#D9534F"
    role: Alert monitor status, errors
fonts:
  display:
    family: "National 2"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "National 2"
    fallback: "Inter"
    weights: [400, 600]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 68, weight: 700, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Heading L, size: 48, weight: 700, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Heading M, size: 36, weight: 700, lineHeight: 1.11, tracking: "0" }
  - { role: Subtitle, size: 22, weight: 400, lineHeight: 1.1, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 600, lineHeight: 1, tracking: "0" }
  - { role: Eyebrow, size: 14, weight: 600, lineHeight: 1.2, tracking: "0.05em" }
  - { role: Code, size: 14, weight: 400, lineHeight: 1.6, tracking: "0" }
radii: { sm: 4, md: 6, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 0 8px 8px rgba(0,0,0,0.07)" }
  - { name: Raised, value: "0 4px 10px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#000000"
  muted: "#737373"
  border: "#E6E6E6"
  accent: "#632CA6"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Datadog

## 1. Visual Theme & Atmosphere

Datadog's marketing site is bold, purple and busy in a good way: a monitoring and security platform with hundreds of products, presented as a confident catalogue. The page is white with black type, the brand purple `#632CA6` is everywhere (logo, buttons, icons, links), and the newer bright "neue" violet `#7700FF` drives calls to action and highlights.

The homepage leads with a heavy, tight headline ("AI-Powered Observability and Security"), a "Get started free" button, then rotating banners, a large product grid (APM, Infrastructure, Log Management, Bits AI, Cloud Security...), customer logos and analyst recognitions. Product screenshots show the real app: dense dark or light dashboards with timeseries graphs, heat maps and service maps.

What makes it recognisable:

- **Bits, the dog mascot,** holding a graph, in purple. It is the logo and appears in illustrations.
- **Two purples.** Classic `#632CA6` and the brighter neue `#7700FF`.
- **Uppercase CTAs** in semibold 16px with small icons.
- **Tight, heavy headlines** in National 2 at 700, line-height 1.0.
- **Product UI as hero imagery,** with real graphs in many series colors.

Mood words: confident, technical, energetic, data-dense, friendly.

## 2. Color Palette & Roles

Hex values are from datadoghq.com CSS (Bootstrap variables `--bs-*` and Tailwind `tw-*` utilities).

| Name | Hex | Role |
|---|---|---|
| Datadog Purple | `#632CA6` | `--bs-primary`, logo, `.btn-primary` |
| Purple Hover | `#54258D` | `.btn-primary:hover` |
| Purple Active | `#4F2385` | Pressed |
| Neue Purple | `#7700FF` | `--bs-neue`, outline CTA border, focus fill |
| Purple 90 | `#8000FF` | Accent text, highlights |
| Purple 95 | `#6300D4` | Accent text on light |
| Purple 100 | `#4300B0` | Deep violet bands |
| Purple 75 | `#9C43FE` | Gradients |
| Purple 70 | `#B37BFF` | Text on dark |
| Purple 65 | `#E3D2FF` | Light panels |
| Purple 60 | `#F2E7FD` | Pale panels |
| Lavender | `#BEAAFF` | `--bs-secondary`, illustration fills |
| Purple 10% | `rgba(99,44,166,0.1)` | Chip and icon backgrounds |
| Dark Purple | `#110617` | `--bs-dark-purple`, dark heroes |
| Black | `#000000` | Headings, nav text |
| Grey 130 | `#101010` | Dark UI panels |
| Grey 35 | `#1B1B1B` | Dark cards |
| Grey Dark | `#555555` | Body on light |
| Grey Text | `#737373` | Secondary text |
| Grey Light | `#C7C7C7` | Disabled, borders |
| Grey Border | `#E6E6E6` | Card borders |
| Grey 100 | `#EFEFEF` | Panels |
| Grey 5 | `#F6F6F6` | Section background |
| White | `#FFFFFF` | Page |

### Semantic colors (monitor states)

| State | Hex | Use |
|---|---|---|
| OK | `#5CB85C` | Healthy monitor, success |
| Warn | `#F0AD4E` | Warning monitor |
| Alert | `#D9534F` | Alert monitor, errors |
| No data | `#C7C7C7` | Missing data |
| Info | `#2F80ED` | Info notices |

### Graph palette

Product graphs use many hues; the site's CSS includes pinks `#FF0078`, `#FF54B9`, oranges `#FE7D39`, `#F2994A`, yellows `#FBC906`, `#FAB207`, blues `#2F80ED`, `#3345FF` and greens. Default timeseries in the app start with purples and blues (approximate).

### Dark sections

Dark bands use `#110617` or `#000000` with white text, purple 70 `#B37BFF` accents and white outline buttons. Product screenshots often show the app's dark theme on `#101010`.

## 3. Typography

**Family:** National 2 by Klim Type Foundry, loaded as `NationalWeb` (`font-family: NationalWeb, Helvetica, Arial, sans-serif`). Japanese and Chinese pages swap to Noto Sans JP/TC. Code uses `RobotoMono`.

**Licensing:** National 2 is commercial. Use **Inter** as the free fallback (similar grotesk proportions); tighten line-height on headlines to keep the heavy look.

### Scale (desktop, from `tw-text-*--corp-ui` classes)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 (hero) | 68px (38px mobile) | 700 | 68px (42px) | -0.01em (approximate) |
| H2 | 48px (28px mobile) | 700 | 48px | -0.01em (approximate) |
| H3 | 36px (24px mobile) | 700 | 40px | 0 |
| Subtitle 1 | 22px (20px mobile) | 400 or 700 | 24px | 0 |
| Body | 18px | 400 | 1.5 | 0 |
| Button (large) | 16-18px | 600, uppercase | 1 | 0 |
| Eyebrow | 14px | 600, uppercase | 1.2 | 0.05em (approximate) |
| Code | 14px Roboto Mono | 400 | 1.6 | 0 |

### Rules

- Headlines in title case on the homepage ("AI-Powered Observability and Security"), sentence case deeper in docs.
- CTA labels and nav dropdown labels are UPPERCASE semibold.
- Eyebrows above section titles are uppercase and often purple.
- Product names capitalised: "Log Management", "Real User Monitoring", "Bits AI".

## 4. Logo & Brand Mark

The logo is **Bits**, a friendly dog peeking out of a purple square, holding a white rectangle with a rising graph. The full lockup stacks or sets the "DATADOG" wordmark (heavy, uppercase) beside or below Bits.

- **Colors:** purple `#632CA6` on white (primary), white on purple, white on black.
- **Versions:** horizontal (Bits left, wordmark right), vertical (Bits above wordmark), icon only.
- **Clear space:** at least the width of the dog's ear around the mark (approximate).
- **Minimum size:** icon 24px, horizontal lockup about 100px wide on screen (approximate).

Misuse: do not redraw or animate Bits off-model, change the purple, or separate the graph from the dog.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#632CA6` | `#FFFFFF` | `#632CA6` | `#54258D` |
| CTA large solid | `#7700FF` (approximate) | `#FFFFFF` | none | opacity 0.8 |
| Outline purple | transparent | `#7700FF` | 1px `#7700FF` | fill `#7700FF`, text white |
| Solid white (on dark) | `#FFFFFF` | `#000000` or purple | none | opacity 0.8 |
| Outline white | transparent | `#FFFFFF` | 1px `#FFFFFF` | fill white, text black |

```css
.dd-cta {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 16px 24px;                 /* corp-ui-button-cta-large */
  font: 600 16px/16px NationalWeb, Inter, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  color: #fff; background: #632CA6; border: 1px solid #632CA6;
  border-radius: 4px;
  transition: background-color 150ms ease, opacity 150ms ease;
}
.dd-cta:hover { background: #54258D; }
.dd-cta--outline { background: transparent; color: #7700FF; border-color: #7700FF; }
.dd-cta--outline:hover { background: #7700FF; color: #fff; }
.dd-cta:focus-visible { box-shadow: 0 0 0 3px rgba(122,76,179,0.5); }
```

### Navigation

- White sticky header: Bits logo + "DATADOG", then "PRODUCT", "CUSTOMERS", "PRICING", "SOLUTIONS", "DOCS", "LOGIN" in uppercase semibold, and a purple "GET STARTED FREE" button.
- Product mega menu: multi-column lists grouped by category (Infrastructure, Applications, Data, Logs, Security, Digital Experience, Software Delivery, Service Management, AI), each item with a small purple icon.

### Announcement and rotating banners

A thin purple announcement bar at the very top, then rotating promotional banners (analyst reports, ebooks) with white outline buttons on image backgrounds.

### Product grid (signature)

- Cards with a 24px purple line icon, 18-20px bold title, 14-16px grey description.
- White fill, 1px `#E6E6E6` border, 4-8px radius; hover lifts with `0 4px 10px rgba(0,0,0,0.2)` and the title turns purple.

### Dashboard screenshots

Framed in a thin border or browser chrome, showing the real app: dark `#101010` or light panels, colorful timeseries, toplists, monitor status pills (green, yellow, red).

### Tabs and chips

- Tabs: uppercase 14px semibold, 2px purple underline on active.
- Chips: `rgba(99,44,166,0.1)` fill, `#632CA6` text, 4px radius.

### Forms

Inputs 44-48px tall, 1px `#C7C7C7` border, 4px radius, focus border `#632CA6` (approximate).

### Customer logos

Monochrome logos in a 4-6 column strip, grey or black, equal height.

## 6. Layout & Spacing

- **Container:** Bootstrap-based, max about 1140-1320px; full-bleed dark and purple bands.
- **Grid:** 12 columns, 24px gutters (Bootstrap default).
- **Breakpoints:** Tailwind `tablet` and `desktop` variants plus Bootstrap `md` 768 / `lg` 992 / `xl` 1200 (approximate mapping).
- **Section spacing:** 64-96px on desktop.
- **Density:** high. Long product lists, many logos and stats per page.

## 7. Depth, Elevation & Motion

- Cards: `0 0 8px 8px rgba(0,0,0,0.07)` soft halo or 1px borders.
- Raised panels and menus: `0 4px 10px rgba(0,0,0,0.2)`.
- Focus: Bootstrap-style 0.25rem ring.
- Motion: rotating banners, animated graphs that draw in, Bits illustrations with small loops, 150-300ms hovers (approximate).

## 8. Iconography & Imagery

- **Icons:** a custom icon font (`tw-iconfont`): simple line icons, 1.5-2px stroke, purple on white, white on dark.
- **Illustrations:** Bits and friends in flat purple, lavender and white, often interacting with graphs.
- **Imagery:** real product screenshots more than photos. Event photography for DASH conference pages.

## 9. Voice & Microcopy

Direct and technical, with a friendly undertone. Leads with the platform idea, then lists exactly what it covers.

- Headlines: "AI-Powered Observability and Security", "See inside any stack, any app, at any scale, anywhere."
- CTAs: "GET STARTED FREE", "LEARN MORE", "READ THE FULL REPORT", "GET THE EBOOK".
- Product names are plain nouns: "Log Management", "Error Tracking", "Incident Management", "GPU Monitoring".

## 10. Do's and Don'ts

**Do**

- Use `#632CA6` for brand and primary actions; `#7700FF` for bright highlights and outline CTAs.
- Set headlines heavy and tight (700, line-height 1.0).
- Write CTA labels in uppercase semibold.
- Show real dashboards and graphs.
- Keep cards light: white, thin grey borders, purple icons.

**Don't**

- Don't use the purple for long body text.
- Don't redraw Bits or use generic dog art.
- Don't round buttons into pills.
- Don't use light 300 weights for headlines.
- Don't mix more than two purples in one component.

## 11. Agent Prompt Guide

> Build this UI in the style of Datadog. White page, `#F6F6F6` alternate bands, text `#000000`, secondary `#737373`, borders `#E6E6E6`. Font: National 2 (NationalWeb), fallback Inter. Headlines 48-68px weight 700, line-height 1.0, slight negative tracking. Body 18px/1.5. Brand purple `#632CA6` (hover `#54258D`) for primary buttons and links; bright violet `#7700FF` for outline CTAs and highlights. Buttons: 4px radius, 16px 24px padding, 16px semibold UPPERCASE labels with a small icon. Header: purple dog logo with "DATADOG", uppercase nav, purple "GET STARTED FREE" button. Product grid cards with purple line icons, bold titles, grey descriptions, hover shadow `0 4px 10px rgba(0,0,0,0.2)`. Dark bands `#110617` with white text and `#B37BFF` accents. Show dashboards with colorful timeseries and status pills OK `#5CB85C`, Warn `#F0AD4E`, Alert `#D9534F`.

```css
:root {
  --brand-purple: #632CA6;
  --brand-purple-hover: #54258D;
  --brand-purple-active: #4F2385;
  --brand-neue: #7700FF;
  --brand-purple-90: #8000FF;
  --brand-purple-95: #6300D4;
  --brand-purple-100: #4300B0;
  --brand-purple-70: #B37BFF;
  --brand-purple-60: #F2E7FD;
  --brand-lavender: #BEAAFF;
  --brand-purple-tint: rgba(99,44,166,0.1);
  --brand-dark-purple: #110617;
  --brand-black: #000000;
  --brand-ui-dark: #101010;
  --brand-text-secondary: #737373;
  --brand-border: #E6E6E6;
  --brand-bg: #FFFFFF;
  --brand-bg-alt: #F6F6F6;
  --brand-ok: #5CB85C;
  --brand-warn: #F0AD4E;
  --brand-alert: #D9534F;
  --brand-font: NationalWeb, "Inter", Helvetica, Arial, sans-serif;
  --brand-font-mono: RobotoMono, "Roboto Mono", SFMono-Regular, Menlo, monospace;
  --brand-radius: 4px;
  --brand-radius-lg: 16px;
  --brand-shadow-card: 0 0 8px 8px rgba(0,0,0,0.07);
  --brand-shadow-raised: 0 4px 10px rgba(0,0,0,0.2);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Datadog.

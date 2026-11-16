---
name: TechCrunch
slug: techcrunch
url: https://techcrunch.com
category: News
tagline: "Green TC blocks, near-black header, NB International type and highlight-hover links."
updated: 2026-11-16
logoBackground: "#212623"
theme: light
colors:
  - name: TC Green
    hex: "#0A8935"
    role: Links, accents, buttons, section labels (green 500)
  - name: Header Black
    hex: "#212623"
    role: Site header, body text, dark sections (black 500)
  - name: White
    hex: "#FFFFFF"
    role: Page background, logo on dark
  - name: Bright Green
    hex: "#68F176"
    role: Links and accents on dark backgrounds (green 100)
  - name: Green 300
    hex: "#0AA43E"
    role: Hover green, badges
  - name: Classic Green
    hex: "#0A9E01"
    role: Legacy logo green
  - name: Purple
    hex: "#5631EA"
    role: Events and partner modules (purple 500)
  - name: Yellow
    hex: "#F2F673"
    role: Event and promo highlights (yellow 700)
  - name: Gray 100
    hex: "#EDF1EF"
    role: Light panels and section backgrounds
  - name: Gray 300
    hex: "#D2DCD7"
    role: Rules and borders
  - name: Gray 700
    hex: "#6C7571"
    role: Bylines, timestamps, captions
  - name: Gray 900
    hex: "#535554"
    role: Secondary text
  - name: Black 900
    hex: "#050505"
    role: Deepest dark surfaces
  - name: Red
    hex: "#E21C1C"
    role: Errors and alerts (red 500)
fonts:
  display:
    family: "NB International Pro"
    fallback: "Inter"
    weights: [400, 500, 700]
  body:
    family: "NB International Pro"
    fallback: "Inter"
    weights: [300, 400, 500, 700]
  mono:
    family: "NB International Pro Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 83, weight: 700, lineHeight: 1.0, tracking: "-0.02em" }
  - { role: H1 article headline, size: 57, weight: 700, lineHeight: 1.15, tracking: "-0.02em" }
  - { role: H2, size: 40, weight: 700, lineHeight: 1.15, tracking: "-0.02em" }
  - { role: H3 card headline, size: 28, weight: 700, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Body 1, size: 19, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body 2, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body 3 meta, size: 13, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body 4 label, size: 11, weight: 500, lineHeight: 1.2, tracking: "0.04em" }
radii: { sm: 0, md: 3, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 56, 80]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#EDF1EF"
  text: "#212623"
  muted: "#6C7571"
  border: "#D2DCD7"
  accent: "#0A8935"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# TechCrunch

## 1. Visual Theme & Atmosphere

TechCrunch's current WordPress theme ("tc-24") is a crisp, grid-driven tech news site. A near-black `#212623` header holds the white "TC" block mark and wordmark; the page below is white with dark green-black text, a single green accent `#0A8935` and NB International, a neutral Swiss-style grotesque. Links have a signature hover: the text turns white on a solid green background, like a highlighter bar.

What makes it recognisable:

- **The TC blocks.** A "T" and a "C" built from rectangles, in white on black or green.
- **Green as the only accent.** `#0A8935` for links, labels and buttons; bright `#68F176` on dark sections.
- **Neutral grotesque type.** NB International Pro at 700 for headlines with tight tracking, 400 for body at a large 19px.
- **Highlight hover.** Links fill with green and switch to white text on hover.
- **Square, flat layout.** Hard edges, thin grey-green rules, no shadows; Startup Battlefield and Disrupt modules add purple and yellow.

Mood words: sharp, fast, startup-focused, neutral, modern.

## 2. Color Palette & Roles

Values below are the `--wp--custom--color--*` tokens served on techcrunch.com on 2026-11-16. The classic logo green comes from the Wikimedia Commons logo file.

| Name | Hex | Role |
|---|---|---|
| Green 500 (TC Green) | `#0A8935` | `--link-color`, link hover background, buttons, labels |
| Green 300 | `#0AA43E` | Hover, badges |
| Green 100 | `#68F176` | Links and hover backgrounds on dark sections |
| Green 700 | `#014600` | Dark green surfaces |
| Classic Green | `#0A9E01` | Legacy logo green |
| Black 500 | `#212623` | Body text, site header background |
| Black 300 | `#151A17` | Dark panels |
| Black 700 | `#0C0D0D` | Footer, dark modules |
| Gray 900 | `#535554` | Secondary text |
| Gray 700 | `#6C7571` | Bylines, timestamps |
| Gray 500 | `#B5C0BC` | Disabled, tertiary |
| Gray 300 | `#D2DCD7` | Rules, borders |
| Gray 100 | `#EDF1EF` | Panels, section backgrounds |
| White | `#FFFFFF` | Page background |
| Purple 500 | `#5631EA` | Events, partner content |
| Purple 300 | `#CE9EFD` | Event accents |
| Blue 500 | `#2372E9` | Info accents |
| Orange 500 | `#CB4925` | Event accents |
| Yellow 700 | `#F2F673` | Promo highlights |
| Cream 300 | `#FFF8E1` | Sponsored panels |
| Red 500 | `#E21C1C` | Errors |

### Semantic colors

| State | Value | Use |
|---|---|---|
| Link | `#0A8935` text, underlined | Inline links |
| Link hover | white text on `#0A8935` | All body links |
| Link on dark | `#68F176`, hover ink on `#68F176` | Dark sections |
| Error | `#E21C1C` | Forms |
| Success | `#0AA43E` | Confirmations |
| Focus | 2px outline `#0A8935` (approximate) | Keyboard focus |

### Dark sections

There is no site-wide dark mode. Dark modules (header, footer, event promos, podcast blocks) use `#212623` or `#0C0D0D` with white text, `#68F176` links and translucent white rules (`#FFFFFF20`).

## 3. Typography

**Families** (from `--wp--custom--font--family--*`):

- **NB International Pro** (`nb_international_proregular`): base font for headings, body and UI. Weights 300, 400, 500, 700 (800 extra-bold token).
- **NB International Pro Mono** (`nb_international_promono`): code, numbers, some labels.
- **Yellix** ExtraBold 800: secondary family used for drop caps and display moments.

**Licensing:** NB International is a commercial font from Neubau; Yellix is commercial. Substitutes: **Inter** for NB International, **JetBrains Mono** or **IBM Plex Mono** for the mono, **Sora** for Yellix.

```css
--font-base: nb_international_proregular, "Inter", sans-serif;
--font-mono: nb_international_promono, "JetBrains Mono", monospace;
--font-secondary: "yellix", "Sora", sans-serif;
```

### Scale (fluid tokens)

| Token | Size | Weight | Line height |
|---|---|---|---|
| display-1 | 48-83px (`clamp(3rem, ..., 5.1875rem)`) | 700 | 1.0 |
| h-1 | 33-57px | 700 | 1.15 |
| h-2 | 28-40px | 700 | 1.15 |
| h-3 | 23-33px | 700 | 1.2 |
| h-4 | 19-28px | 700 | 1.2 |
| h-5 | 16-23px | 700 | 1.2 |
| h-6 | 13-19px | 700 | 1.2 |
| body-1 | 19px | 400 | 1.4 |
| body-2 | 16px | 400 | 1.4 |
| body-3 | 13px | 400 | 1.3 |
| body-4 | 11px | 500 | 1.2 |
| numbers-1 | 83-99px | 700 | 1.0 |

Headings use a negative letter-spacing token (`ls--neg-2`, roughly -0.02em, approximate).

### Rules

- Sentence case headlines, no full stop, often with a company name first.
- Category labels ("AI", "Startups", "Venture") in 11-13px, green, sometimes uppercase.
- Body text at 19px for articles; do not drop below 16px for reading text.
- Numbers in data or funding figures in the mono or tabular figures.

## 4. Logo & Brand Mark

The mark is "TC" built from rectangles: a T made of a top bar and stem, and a C made of three blocks with the opening on the right. The full lockup adds "TechCrunch" in a bold grotesque to the right. The classic version is green `#0A9E01`; the current header uses white on `#212623`.

- **Color versions:** white on black 500 (site header), white on green (app icon and social), green on white (legacy and print).
- **Clear space:** the width of one C block on all sides.
- **Minimum size:** 24px tall for the TC mark, 120px wide for the full lockup.
- **App icon:** white TC on a green gradient (the TechCrunch Events app).

Misuse:

- Do not round the blocks or add gaps between them.
- Do not recolour the TC in purple or event colours.
- Do not set "TechCrunch" in another font next to the mark.

## 5. Components

### Header and navigation

- Background `#212623`, height about 56-64px, full width.
- Left: white TC lockup (149 x 16px desktop, the TC mark alone at 47 x 24px on mobile).
- Primary nav: "Latest", "Startups", "Venture", "Apple", "Security", "AI", "Apps" and the current event ("Disrupt 2026") in 14-16px NB International 500, white.
- Right: "Events", "Podcasts", "Newsletters", search, and a mega-menu button.
- Hover: green `#68F176` text or underline.

### Article cards

- Image (3:2 or 16:9), square corners.
- Category label in green 13px 500.
- Headline NB International 700 at 19-28px, ink `#212623`, tight leading.
- Author and time ("Author Name · 2 hours ago") in 13px `#6C7571`.
- Cards separated by 1px `#D2DCD7` rules, 16-24px gaps. No shadows.

```css
.tc-card .label { font: 500 13px/1.3 var(--font-base); color: #0A8935; }
.tc-card h3 { font: 700 23px/1.2 var(--font-base); letter-spacing: -0.01em; color: #212623; margin: 6px 0; }
.tc-card .meta { font: 400 13px/1.3 var(--font-base); color: #6C7571; }
.tc-card + .tc-card { border-top: 1px solid #D2DCD7; }
```

### Links (signature)

```css
a { color: #0A8935; text-decoration: underline; transition: background-color 200ms ease-in-out, color 200ms ease-in-out; }
a:hover { background-color: #0A8935; color: #FFFFFF; }
.dark a { color: #68F176; }
.dark a:hover { background-color: #68F176; color: #212623; }
```

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#0A8935` | `#FFFFFF` 16px 500 | none | 0 |
| Dark | `#212623` | `#FFFFFF` | none | 0 |
| Outline | transparent | `#212623` | 1px `#212623` | 0 |
| Event | `#5631EA` | `#FFFFFF` | none | 0 |
| Pill (topic tags) | `#EDF1EF` | `#212623` 13px | none | 50px |

Padding `calc(0.667em + 2px) calc(1.333em + 2px)` (the WordPress button default), about 44px tall. Hover: green to `#0AA43E` or invert to white with an ink border. Transitions use 200ms `ease-in-out`.

### Article page

- Category label, headline at h-1 (33-57px, 700, tight tracking), then author row: avatar (circle 32-40px), name in 16px 500, date and time in `#6C7571`.
- Lead image across the content width with caption below: 13px `#6C7571`, credit "Image Credits: Name" after it.
- Body: 19px/1.4 NB International, column 41.5625rem (665px); wider elements up to 52.5625rem (841px).
- Drop cap on some features in Yellix 800.
- Pull quotes: 28-33px NB International 700 with a green rule on the left (approximate).
- Topics list at the end as pills; "Most Popular" in the right rail with large numerals.

### Newsletters

Newsletter blocks on `#EDF1EF` or dark `#212623`: title in 23-28px 700, short description, checkbox list of newsletters, email input (44px, 1px `#B5C0BC` border, square) and a green "Subscribe" button.

### Event promos

Disrupt and StrictlyVC promos use purple `#5631EA`, yellow `#F2F673` and black blocks with large display type and a countdown in mono numerals. Ticket prices change; check the live site before quoting them.

### Podcasts

Podcast cards show square show art, an episode title in 19px 700 and a play button (circle, green or white on dark).

## 6. Layout & Spacing

- **Content widths (tokens):** article content 665px, article default 841px, default 1014px, author archive 1371px, wide 1360px.
- **Breakpoints:** roughly 600, 782 and 1024px (WordPress defaults, approximate).
- **Spacing presets:** 0.44, 0.67, 1, 1.5, 2.25, 3.38, 5.06rem plus fluid steps (16-24, 16-32, 16-40, 16-56, 24-32px).
- **Block gap:** 24px default.
- **Grid:** 12 columns on desktop with 24px gutters, single column on mobile with 16px padding.
- **Density:** medium-high on the homepage river, roomy on articles.

## 7. Depth, Elevation & Motion

- Flat. No shadows on cards or menus; the mega-menu is a dark `#212623` panel.
- Rules and background bands (`#EDF1EF`, `#212623`) provide structure.
- Transition tokens: fast 100ms, base 200ms, medium 300ms, slow 400ms; easing `ease-in-out` or `cubic-bezier(0, 0.55, 0.45, 1)` (ease-out-circ).
- Carousels slide with dots and arrows (chevron icons).

## 8. Iconography & Imagery

- **Icons:** a custom TechCrunch set plus a UI kit (chevrons, arrows, search, menu), line style, 16-24px.
- **Photography:** founder portraits, product shots, event photos from Disrupt stages, and stock tech photography with descriptive alt text.
- **Illustration:** flat graphic illustrations for explainers and newsletters.
- **Logos:** company logos shown in cards for funding news.

## 9. Voice & Microcopy

Direct and newsy, aimed at founders, investors and tech workers.

- Nav: "Latest", "Startups", "Venture", "Security", "AI", "Apps", "Events", "Podcasts", "Newsletters".
- Buttons: "Subscribe", "Sign up", "Register now", "Read more".
- Labels: "In Brief", "Most Popular", plus category names.
- Meta: "Author Name · 3 hours ago", "Image Credits: Name / Agency".

## 10. Do's and Don'ts

**Do**

- Keep the header `#212623` with a white TC lockup.
- Use `#0A8935` as the only accent on white and `#68F176` on dark.
- Set everything in one neutral grotesque, headlines 700 with tight tracking, body 19px.
- Use the green fill hover on links.
- Keep corners square and surfaces flat.

**Don't**

- Don't add drop shadows or rounded cards.
- Don't mix in other bright colours except on event modules.
- Don't use pure black text on white; use `#212623`.
- Don't make the body copy smaller than 16px.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of TechCrunch. Near-black header `#212623` with a white "TC" block logo and white nav links. White page, text `#212623`, secondary `#535554`, meta `#6C7571`, rules `#D2DCD7`, light panels `#EDF1EF`. One accent: green `#0A8935` for links, labels and buttons; links hover to white text on a solid green background (200ms ease-in-out). On dark sections use `#68F176`. Font: `nb_international_proregular, Inter, sans-serif` for everything; headlines 700 with about -0.02em tracking and line-height 1.15-1.2 (33-57px article, 19-28px cards), body 19px/1.4. Square corners, no shadows. Article column 665px, page max 1360px, 24px block gap. Event modules may use purple `#5631EA` and yellow `#F2F673`.

```css
:root {
  --brand-green: #0A8935;
  --brand-green-300: #0AA43E;
  --brand-green-100: #68F176;
  --brand-green-classic: #0A9E01;
  --brand-ink: #212623;
  --brand-black-700: #0C0D0D;
  --brand-gray-900: #535554;
  --brand-gray-700: #6C7571;
  --brand-gray-500: #B5C0BC;
  --brand-gray-300: #D2DCD7;
  --brand-gray-100: #EDF1EF;
  --brand-bg: #FFFFFF;
  --brand-purple: #5631EA;
  --brand-yellow: #F2F673;
  --brand-red: #E21C1C;
  --brand-font: nb_international_proregular, "Inter", sans-serif;
  --brand-font-mono: nb_international_promono, "JetBrains Mono", monospace;
  --brand-font-secondary: "yellix", "Sora", sans-serif;
  --brand-radius: 0;
  --brand-duration: 200ms;
  --brand-ease: ease-in-out;
  --brand-width-article: 41.5625rem;
  --brand-width-default: 63.375rem;
  --brand-width-wide: 85rem;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by TechCrunch.

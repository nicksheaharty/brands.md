---
name: Business Insider
shortName: BI
slug: business-insider
url: https://businessinsider.com
category: News
tagline: "Black caps wordmark, Insider Blue links and Tiempos body text on a clean white news grid."
updated: 2026-11-16
appStoreId: 554260576
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Insider Blue
    hex: "#002AFF"
    role: Brand accent, links, focus rings, BI avatar and app icon
  - name: Black
    hex: "#0A0A0A"
    role: Wordmark, headlines, body text, dark buttons
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Insider Red
    hex: "#EA0201"
    role: Breaking and live labels, live pulse dot
  - name: Blue Hover
    hex: "#0022CC"
    role: Hover and pressed state for blue links and buttons
  - name: Blue 100
    hex: "#E5E9FF"
    role: Selected chips, soft blue fills
  - name: Neutral 900
    hex: "#31313B"
    role: Secondary headings, dark UI text
  - name: Neutral 800
    hex: "#505057"
    role: Deck and summary text
  - name: Neutral 700
    hex: "#71717A"
    role: Bylines, timestamps, captions
  - name: Neutral 400
    hex: "#CECECE"
    role: Hairline rules, input borders
  - name: Neutral 200
    hex: "#EDEEF1"
    role: Module backgrounds, comment threads
  - name: Neutral 100
    hex: "#F6F6F6"
    role: Subtle fills, skeleton loaders
  - name: Warm Grey 100
    hex: "#FAF7F5"
    role: Warm section background for features and newsletters
  - name: Success Green
    hex: "#098941"
    role: Positive market moves, confirmation text
fonts:
  display:
    family: "Garnett"
    fallback: "Work Sans"
    weights: [500, 600, 700, 900]
  body:
    family: "Tiempos Text"
    fallback: "Source Serif 4"
    weights: [400, 500, 600]
typeScale:
  - { role: Article headline, size: 36, weight: 500, lineHeight: 1.35, tracking: "0" }
  - { role: Lead card headline, size: 28, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Card headline, size: 18, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Deck, size: 18, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Body serif, size: 18, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: UI body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Label, size: 12, weight: 600, lineHeight: 1.3, tracking: "0.02em" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Soft, value: "0 0 12px rgba(10,10,10,0.08)" }
  - { name: Sheet, value: "0 -4px 24px 0 rgba(10,10,10,0.16)" }
  - { name: Popover, value: "0 8px 28px rgba(0,0,0,0.18)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#0A0A0A"
  muted: "#71717A"
  border: "#CECECE"
  accent: "#002AFF"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Business Insider

## 1. Visual Theme & Atmosphere

Business Insider (BI) reads like a fast business wire with a magazine body. The page is white, text is near-black `#0A0A0A`, and one saturated electric blue, Insider Blue `#002AFF`, does nearly all of the accent work: links, active tabs, focus rings and the square "BI" avatar. Red `#EA0201` appears only for breaking and live moments.

What makes it recognisable:

- **Two families, clear jobs.** Garnett, a geometric grotesque with a large x-height, sets the masthead, headlines, navigation and every label. Tiempos, a sharp contemporary serif, sets article body copy and some decks. Sans for scanning, serif for reading.
- **Heavy all-caps wordmark.** "BUSINESS INSIDER" is set in a black, tightly spaced grotesque across the top of every page.
- **Photo-led cards with tight type.** Homepage cards are a 3:2 or 16:9 photo, a small category label, then a 2-4 line bold headline. No boxes around cards, just whitespace and thin rules.
- **Key points up top.** Articles open with a bulleted summary block, separated from the byline by a dotted rule.
- **Blue as signal, not decoration.** Sections are not color coded. Blue stays for links and interactive state, which keeps the page calm.

Density is medium-high on the homepage (many stories above the fold) and relaxed on articles, which use a single 680-720px reading column.

## 2. Color Palette & Roles

Hex values come from BI's production CSS custom properties (`--primary-*`).

| Name | Hex | Role |
|---|---|---|
| Insider Blue (`--primary-blue`) | `#002AFF` | Links, active nav, focus, primary buttons, avatar |
| Blue Hover (`--primary-blue-hover`) | `#0022CC` | Hover and pressed blue |
| Blue 800 | `#081D84` | Deep blue on light blue fills (approximate role) |
| Blue 100 (`--primary-blue-100`) | `#E5E9FF` | Selected chips, light blue panels |
| Light Blue (`--primary-light-blue`) | `#F5F6FF` | Newsletter and promo backgrounds |
| Light Blue Hover | `#EBEEFF` | Hover on light blue surfaces |
| Black (`--primary-black`) | `#0A0A0A` | Headlines, body, wordmark |
| Neutral 950 | `#19191A` | Footer and dark panels |
| Neutral 900 | `#31313B` | Secondary headings |
| Neutral 800 | `#505057` | Deck, summary bullets |
| Neutral 700 | `#71717A` | Bylines, timestamps |
| Neutral 600 | `#76767A` | Icon default |
| Neutral 500 | `#95959D` | Placeholder, disabled text |
| Neutral 400 | `#CECECE` | Rules, input borders |
| Neutral 300 | `#E2E4E9` | Dividers on grey |
| Neutral 200 | `#EDEEF1` | Module fills |
| Neutral 100 | `#F6F6F6` | Subtle fills |
| Warm Grey 100 | `#FAF7F5` | Warm feature and newsletter bands |
| Insider Red (`--primary-red`) | `#EA0201` | Live, breaking, alerts |
| White | `#FFFFFF` | Page |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Live / breaking | `#EA0201` (pulse ring `rgba(229,23,22,0.8)`) | "LIVE" label, pulsing dot |
| Positive | `#098941` | Market up, success text |
| Warning | `#F8A335` on `#FFECB3` | Notices (approximate) |
| Focus | `inset 0 0 0 2px #002AFF` | Keyboard focus on cards and buttons |

### Dark surfaces

BI has no full dark theme on the web. Dark is used for video "watch mode", the footer and some feature heroes: `#0A0A0A` or `#19191A` background, white text, `#95959D` muted text, white outline buttons.

## 3. Typography

**Garnett** (Atipo Foundry) is loaded as a variable font (`Garnett-VF`, weights 250-900, roman and italic). **Tiempos** (Klim Type Foundry) is loaded as a variable font with weights 400-600. Both are commercial; you cannot reuse BI's files.

Free fallbacks: **Work Sans** for Garnett (similar geometric skeleton and wide letters), **Source Serif 4** for Tiempos.

```css
--font-family-sans: garnett, "Work Sans", helvetica, arial, sans-serif;
--font-family-serif: tiempos, "Source Serif 4", georgia, times, serif;
```

### Scale (from production tokens, desktop with mobile in brackets)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Heading 3xl (feature hero) | 52px (38px) | 600 | 1.25 | 0 |
| Heading 2xl | 40px (30px) | 600 | 1.35 | 0 |
| Article headline (heading-xl) | 36px (26px) | 500 | 1.35 | 0 |
| Heading lg | 28px (22px) | 600 | 1.35 | 0 |
| Heading md | 24px (20px) | 600 | 1.4 | 0 |
| Card headline (heading 2sm) | 18px (15px) | 600 | 1.4 | 0 |
| Body lg serif (article) | 18px (17px) | 400 | 1.6 | 0 |
| Body md | 17px (16px) | 400 | 1.5 | 0 |
| Body sm | 16px (15px) | 400 | 1.5 | 0 |
| Body xs / caption | 14px (13px) | 400 | 1.5 | 0 |
| Label md | 12px | 600 | 1.3 | 0.02em |
| Label sm | 10px | 600 | 1.3 | 0.04em |

### Rules

- Headlines are sentence case, never all caps. Only the wordmark and small labels go uppercase.
- Weight steps that matter: 500 for the article headline, 600 for card headlines and labels, 700-900 reserved for the wordmark style and big numbers.
- Article body is serif; everything around it (bylines, captions, related links) is sans.
- Use tabular figures in market data and charts.
- Links inside body copy are Insider Blue with an underline on hover.

## 4. Logo & Brand Mark

The logo is the all-caps **BUSINESS INSIDER** wordmark in a heavy geometric grotesque, set on one line in black `#0A0A0A`. The short form is **BI**: white letters on an Insider Blue `#002AFF` square, used for the app icon, favicon and social avatars.

- **Color versions:** black on white (primary), white on black or on Insider Blue.
- **Clear space:** at least the cap height of the wordmark on every side.
- **Minimum size:** about 120px wide for the full wordmark on screen; below that switch to the BI square.
- **Header usage:** centred in the masthead at roughly 24-32px tall on desktop, left aligned and smaller on mobile.

Misuse:

- Do not set the wordmark in Garnett or any live font; use the supplied artwork.
- Do not recolor the wordmark in blue or red.
- Do not stack "BUSINESS" over "INSIDER".
- Do not place the BI square on a busy photo without a solid backing.

## 5. Components

### Masthead and navigation

- White bar, 56-64px tall on desktop, 1px `#CECECE` bottom rule.
- Left: hamburger menu button (24px icon). Centre: wordmark. Right: search icon, "Log in" text link and a subscribe button.
- Below the masthead: a horizontal section row ("Business", "Tech", "Markets", "Economy", "Politics", "Video" and others) in Garnett 14px/600, `#0A0A0A`, active item underlined 2px Insider Blue. Scrolls horizontally on mobile.
- The menu opens as a full-height left drawer with accordion groups, 16px/600 links, 1px `#EDEEF1` separators.

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#002AFF` | `#FFFFFF` 16px/600 | none | 4px | 10px 20px |
| Dark | `#0A0A0A` | `#FFFFFF` | none | 4px | 10px 20px |
| Outline | transparent | `#0A0A0A` | 1px `#0A0A0A` | 4px | 9px 19px |
| Text link | none | `#002AFF` 600 | none | 0 | 0 |
| Filter chip | `#FFFFFF` | `#0A0A0A` 12px/600 | 1px `#CECECE` | 9999px | 6px 12px |
| Filter chip active | `#E5E9FF` | `#002AFF` | 1px `#D8DEFF` | 9999px | 6px 12px |

States: hover primary `#0022CC`; focus `box-shadow: inset 0 0 0 2px #002AFF` plus a 2px offset outline on dark; disabled `#CECECE` fill with `#95959D` text.

### Story cards

- **Lead card:** 16:9 photo, 12px/600 category label in `#71717A` uppercase, headline 28px/600 Garnett, optional 16px deck in `#505057`.
- **Standard card:** 3:2 photo on top or a 120px square thumbnail to the right, headline 18px/600, byline 12px `#71717A`.
- **Text-only list:** numbered "Most popular" list with large 24px/700 numerals in Insider Blue and 16px/600 headlines, separated by 1px `#EDEEF1`.
- No borders or shadows on cards. Hover darkens the headline to `#31313B` and underlines it.

```css
.bi-card h3 { font: 600 18px/1.4 var(--font-family-sans); color: #0A0A0A; margin: 8px 0 4px; }
.bi-card .label { font: 600 12px/1.3 var(--font-family-sans); text-transform: uppercase; color: #71717A; }
.bi-card:hover h3 { text-decoration: underline; text-underline-offset: 3px; }
```

### Article page

- Breadcrumb/category label above the headline (12px/600, blue link).
- Headline 36px/500 Garnett, left aligned, max width about 720px.
- **Key points** box: 2-4 bullets in Garnett 16-17px/500 `#31313B`, then a dotted divider (`linear-gradient(90deg,#0A0A0A 25%,#fff 0)` repeated at 4px x 2px).
- Byline row: 32px circular author photo, name in 14px/600, title and timestamp in 14px `#71717A`, share and comment icons right aligned.
- Lead image full column width with a 14px sans caption and credit in `#71717A`.
- Body: Tiempos 18px/1.6, `#0A0A0A`, paragraph gap 24px. Subheads in Garnett 22-24px/600.
- **Pull quote:** Tiempos italic 24-28px, 4px Insider Blue left border, 24px left padding.
- Inline "Read next" and newsletter units sit in `#F5F6FF` panels with 8px radius.

### Live and breaking

- "LIVE" pill: `#EA0201` background, white 12px/700 uppercase text, 2px radius, preceded by a 8px white dot with a pulsing ring (`box-shadow: 0 0 0 0 rgba(229,23,22,.8)` to `0 0 0 16px rgba(229,23,22,0)`).
- Live blog posts stack in a single column with timestamps in red 14px/600 and a thin left timeline.

### Newsletters

Sign-up modules sit on Warm Grey `#FAF7F5` or Light Blue `#F5F6FF`. Newsletter name in Garnett 20-24px/700, one-line description, email input (48px, 1px `#CECECE`, 4px radius) and a blue "Sign up" button. Topic newsletters (tech, finance, retail) share this layout.

### Inputs

Height 44-48px, 1px `#CECECE` border, 4px radius, 16px text. Focus: border `#002AFF` and `0 0 0 .09375rem #D8DEFF`. Error: border and helper text `#EA0201`.

### Comments

Threads use `#EDEEF1` backgrounds, 8px gaps, a dotted thread line (1.2px dots every 4.5px) and 14px sans text.

## 6. Layout & Spacing

- **Grid:** Bootstrap-derived 12 columns, 30px gutter (`--bs-gutter-x`), 24px row gap on the homepage.
- **Max width:** about 1260px for the homepage container; article column about 720px with a 300px right rail on desktop.
- **Breakpoints:** 600px (tablet), 1008px (desktop), 1308px (wide). Mobile is below 600px.
- **Spacing:** 4px base. Common steps 8, 16, 24, 32, 48px. Article paragraphs 24px apart, sections 48px apart.
- **Homepage rhythm:** lead story with 2-3 supporting stories, then a row of four cards, then section bands (Tech, Markets, Retail) each with a 20-24px/700 section title and a black 2px rule above.

## 7. Depth, Elevation & Motion

BI is mostly flat. Rules and whitespace separate content; shadows appear only on floating UI.

| Use | Value |
|---|---|
| Soft popover | `0 0 12px rgba(10,10,10,0.08)` |
| Bottom sheet / sticky player | `0 -4px 24px 0 rgba(10,10,10,0.16)` |
| Modal | `0 8px 28px rgba(0,0,0,0.18)` |

Motion: hover color changes 150-200ms ease; the live dot pulses on a 1.5-2s loop; drawers slide in over about 250ms. Video "watch mode" uses slow ambient gradient pulses on dark backgrounds. Respect `prefers-reduced-motion` by stopping pulses.

## 8. Iconography & Imagery

- **Icons:** simple 24px line icons, 1.5-2px stroke, square caps, in `#0A0A0A` or `#76767A`. Search, menu, share, bookmark, comment.
- **Photography:** news agency and staff photos, cropped 3:2 or 16:9, shown at full saturation without overlays. Portraits of executives and founders are common.
- **Illustration:** feature stories use flat photo-collage illustrations: cut-out people on a solid color with simple shapes. Blue and warm accents are common.
- **Charts:** clean line and bar charts with Garnett labels, black axes, Insider Blue as the main series color.

## 9. Voice & Microcopy

Direct, conversational and specific. Headlines are full sentences that tell you the news and why it matters. UI strings are short and lowercase-friendly.

- Sentence case everywhere except the wordmark and tiny labels.
- Article openers are a "Key points" list of short facts.
- CTAs: "Subscribe", "Log in", "Sign up", "Read more", "Listen to this article".

Sample strings:

- Section label: "Tech", "Markets", "Careers"
- Summary bullet: "The company said it would cut costs across three divisions."
- Newsletter: "Get the latest tech news in your inbox."
- Live: "LIVE", "Updated 5 min ago"

## 10. Do's and Don'ts

**Do**

- Use Garnett-style geometric sans for headlines and UI, and a sharp serif for article body.
- Keep Insider Blue `#002AFF` for links, focus and the main action only.
- Lead cards with a strong photo and a short bold headline.
- Open articles with 2-4 key points.
- Separate content with whitespace and hairline rules, not boxes.

**Don't**

- Don't color code sections; one accent is the system.
- Don't use red except for live and breaking states.
- Don't set body copy in the sans on article pages.
- Don't add heavy shadows or rounded cards to the homepage grid.
- Don't put headlines in all caps.

## 11. Agent Prompt Guide

> Build this UI in the style of Business Insider. White page, near-black text `#0A0A0A`, a single electric blue accent `#002AFF` for links, active tabs, focus rings and primary buttons (hover `#0022CC`). Headlines and UI in a geometric grotesque (`garnett`, fallback "Work Sans"), article body in a crisp serif (`tiempos`, fallback "Source Serif 4") at 18px/1.6. Article headline 36px weight 500; card headlines 18px weight 600; labels 12px weight 600 uppercase in `#71717A`. Masthead is a centred heavy all-caps "BUSINESS INSIDER" wordmark with a section row underneath. Homepage is a 12-column grid with 30px gutters, photo-led cards without borders, and section bands topped by a 2px black rule. Articles open with a "Key points" bullet list, a dotted divider, a byline row with a round author photo, then serif body. Live labels are red `#EA0201` with a pulsing dot. Buttons 4px radius; chips are pills. Mostly flat, shadows only on menus and sheets.

```css
:root {
  --brand-blue: #002AFF;
  --brand-blue-hover: #0022CC;
  --brand-blue-100: #E5E9FF;
  --brand-blue-50: #F5F6FF;
  --brand-black: #0A0A0A;
  --brand-white: #FFFFFF;
  --brand-red: #EA0201;
  --brand-green: #098941;
  --brand-neutral-950: #19191A;
  --brand-neutral-900: #31313B;
  --brand-neutral-800: #505057;
  --brand-neutral-700: #71717A;
  --brand-neutral-500: #95959D;
  --brand-neutral-400: #CECECE;
  --brand-neutral-300: #E2E4E9;
  --brand-neutral-200: #EDEEF1;
  --brand-neutral-100: #F6F6F6;
  --brand-warm-100: #FAF7F5;
  --brand-font-sans: garnett, "Work Sans", helvetica, arial, sans-serif;
  --brand-font-serif: tiempos, "Source Serif 4", georgia, times, serif;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 8px;
  --brand-radius-pill: 9999px;
  --brand-gutter: 30px;
  --brand-shadow-soft: 0 0 12px rgba(10,10,10,0.08);
  --brand-shadow-sheet: 0 -4px 24px 0 rgba(10,10,10,0.16);
  --brand-shadow-modal: 0 8px 28px rgba(0,0,0,0.18);
  --brand-focus: inset 0 0 0 2px #002AFF;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Business Insider.

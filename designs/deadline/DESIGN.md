---
name: Deadline
slug: deadline
url: https://deadline.com
category: News
tagline: "Slab-serif DEADLINE masthead, dense breaking-news river, bold sans heads, crimson tags."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Masthead, headlines, text
  - name: Deadline Crimson
    hex: "#920200"
    role: brand-primary, headline prefixes, link hover, section accents
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Oxblood
    hex: "#550100"
    role: brand-primary-dark, pressed and dark red fills
  - name: Alert Red
    hex: "#CF3535"
    role: brand-primary-light, breaking labels, live markers
  - name: Grey Medium
    hex: "#6A6A6A"
    role: Bylines, timestamps, metadata
  - name: Grey Dark
    hex: "#595959"
    role: Quote marks, secondary text
  - name: Grey Light
    hex: "#E6E6E6"
    role: Dividers
  - name: Rule Grey
    hex: "#CCCCCC"
    role: Nav top and bottom borders, input borders
  - name: Paper Grey
    hex: "#F7F7F7"
    role: Module and rail backgrounds
  - name: Blush
    hex: "#F5DFDD"
    role: Light red panels, highlight boxes
  - name: Link Underline
    hex: "#D77979"
    role: 2px underline under in-article links
  - name: Sky Tint
    hex: "#F1F8FC"
    role: Light blue panels (brand-secondary-light)
  - name: Deadline Blue
    hex: "#4670D2"
    role: brand-secondary, occasional links and data
fonts:
  display:
    family: "Balto"
    fallback: "Work Sans"
    weights: [400, 700]
  body:
    family: "Georgia"
    fallback: "Gelasio"
    weights: [400, 700]
typeScale:
  - { role: Article headline, size: 46, weight: 700, lineHeight: 0.98, tracking: "0.25px" }
  - { role: Lead headline, size: 32, weight: 700, lineHeight: 1.06, tracking: "0" }
  - { role: Section heading, size: 30, weight: 400, lineHeight: 1.17, tracking: "0" }
  - { role: Card headline, size: 20, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Article body, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Nav label, size: 12, weight: 700, lineHeight: 1.35, tracking: "0.5px" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.35, tracking: "0" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#000000"
  muted: "#6A6A6A"
  border: "#E6E6E6"
  accent: "#920200"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Deadline

## 1. Visual Theme & Atmosphere

Deadline is built for speed. It is a scoop-driven Hollywood trade site, and the design looks like a wire service with a newspaper masthead: a black slab-serif "DEADLINE" wordmark on white, a thin uppercase section bar, and then a long river of headlines with timestamps. Pictures are present but secondary; the order of the stories and how recent they are matters most.

Headlines and UI are set in Balto, a clean bold sans. Article text is Georgia. Display moments, section headings and quotes use Eksell, a sharp, slightly quirky display serif that echoes the masthead. The one accent colour is a deep crimson `#920200`, used for headline prefixes ("EXCLUSIVE:", "UPDATE:"), hover states and small tags.

What makes it recognisable:

- **The slab-serif wordmark** in black, uppercase, centred or left-aligned, up to 500px wide.
- **Headline prefixes.** "EXCLUSIVE", "UPDATED", "BREAKING" in crimson before the headline itself.
- **Timestamps everywhere,** usually with a small clock icon, plus a fire icon on trending stories.
- **Grey rules.** Thin `#CCCCCC` lines above and below the section nav and between river items.
- **Georgia body** with link underlines in soft red.

Mood: urgent, insider, text-first, newsroom.

## 2. Color Palette & Roles

Deadline runs on Penske Media's Larva system with its own `pmc-u-*` utilities.

| Name | Hex | Token / class | Role |
|---|---|---|---|
| Black | `#000000` | `--color-black` | Text, headlines, logo |
| White | `#FFFFFF` | `--color-white` | Page |
| Deadline Crimson | `#920200` | `--color-brand-primary`, `u-color-brand-red` | Prefixes (`.c-title__before`), hover, tags |
| Oxblood | `#550100` | `--color-brand-primary-dark` | Pressed states, dark red bands |
| Alert Red | `#CF3535` | `--color-brand-primary-light`, `pmc-u-color-red` | Breaking and live, error text |
| Bright Red | `#EC1C24` | shared PMC red | Ad and alert accents (approximate role) |
| Deadline Blue | `#4670D2` | `--color-brand-secondary` | Secondary accent |
| Blue Tint | `#E0EDF5` | `--color-brand-secondary-dark` | Panel fills |
| Sky Tint | `#F1F8FC` | `--color-brand-secondary-light`, `--color-light-blue` | Light info panels |
| Grey Dark | `#616161` | `--color-grey-dark` | Secondary text |
| Grey Medium | `#6A6A6A` | `pmc-u-color-grey-medium` | Bylines, timestamps |
| Grey Medium Dark | `#595959` | `pmc-u-color-grey-medium-dark` | Quote marks, dark metadata |
| Grey | `#9B9B9B` | `--color-grey` | Disabled, faint labels |
| Grey Light | `#E6E6E6` | `--color-grey-light` | Dividers |
| Rule Grey | `#CCCCCC` | `u-border-color-grey-medium-light` | Nav rules, borders |
| Paper Grey | `#F7F7F7` | `--color-light-grey` | Module and rail fills |
| Blush | `#F5DFDD` | `--color-light-pink` | Highlight boxes |
| Beige | `#EFEBDC` | `--color-light-beige` | Feature and award panels |
| Link Underline | `#D77979` | `.c-tagline--a-content__link` | Under in-article links |

### Semantic

- Exclusive / Update prefixes: `#920200` uppercase in the headline.
- Breaking and live: white on `#CF3535` or `#920200`.
- Box office up and down: green and `#CF3535` (approximate).

### Dark mode

No site-wide dark theme. Video and the footer use black with white text.

## 3. Typography

**Families (Adobe Fonts kit `lok5bdl`, plus system):**

- **Balto** (`--font-family-primary`, set on `body` when fonts load): UI, nav, headlines, bylines, buttons, h2-h6 inside articles.
- **Eksell Display** (`--font-family-secondary`): `.c-heading` section headings, blockquote text and the large opening quote mark.
- **Georgia** (`--font-family-body`): article paragraphs, 16px mobile and 18px desktop.
- **Helvetica**: captions and some labels.
- **Courier**: "paper" style blockquotes for memos and documents.

Balto and Eksell are licensed. Substitutes: **Work Sans** (or Libre Franklin) for Balto, **Fraunces** for Eksell, **Gelasio** (metric-compatible with Georgia) for body if Georgia is not available.

### Scale

| Role | Desktop XL | Tablet | Mobile | Weight |
|---|---|---|---|---|
| Article headline (`.c-title`) | 46 / 45px | 38 / 45px | 20 / 27px | 700 |
| Lead headline (`primary-xl`) | 32 / 34px | 28px | 24px | 700 |
| Section heading Eksell (`secondary-l`) | 30 / 35px | 26px | 24px | 400 |
| Card headline (`primary-xxs`) | 24 / 27px | 22px | 20px | 700 |
| River headline (`primary-xxxs`) | 20 / 23px | 19px | 18px | 700 |
| Article body Georgia | 18 / 27px | 18px | 16 / 24px | 400 |
| Quote mark | 74px Eksell | same | same | 400 |
| Byline / metadata | 14 / 21px | 14px | 13px | 400 |
| Nav label | 12px uppercase | same | same | 700 |
| Caption Helvetica | 13px | 13px | 12px | 400 |
| Display accent (`accent-l`) | 58 / 50px | same | 40px | 400 |

### Rules

- Headlines are sentence case after an uppercase prefix: "EXCLUSIVE: Studio Sets Director For...".
- Letter spacing on headlines is small and positive (`u-letter-spacing-0025`).
- Article H1 centres on mobile and left-aligns from tablet.
- Bold body text inside articles switches to Balto, not bold Georgia.

## 4. Logo & Brand Mark

The wordmark is "DEADLINE" in a black, sharp slab serif with bracketed serifs and an even rhythm, drawn as a single 529 x 68 SVG path. There is no separate symbol; a single "D" from the wordmark works as a monogram for avatars and the icon in this file (approximate, not an official app icon).

- **Colours:** black on white (primary), white on black.
- **Clear space:** half the cap height on all sides.
- **Minimum size:** 100px wide.
- **Header use:** `.c-logo` inside an `h1`, max width 500px, hidden when the header turns sticky.

Misuse: don't set the wordmark in Balto, don't recolour it crimson, don't add "Hollywood" to it, don't track it out.

## 5. Components

### Header

- Top row: hamburger "Open Mega Menu", "Got A Tip?" (Balto 14px bold), social "Follow Us" icons, subscribe and log-in links.
- Masthead centred or left, max 500px wide.
- Section nav: uppercase Balto 12px bold links (TV, Film, Awards, Box Office, Business, Theater, International, Video), black text, hover `#920200`, between 1px `#CCCCCC` rules (`u-border-tb-1`).
- Sticky header 50px tall (`--sticky-nav-height: 3.125rem`) with a compact logo.

### Buttons

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` Balto 14px 700 uppercase | none |
| Accent | `#920200` | `#FFFFFF` | none |
| Accent hover | `#550100` | `#FFFFFF` | none |
| Secondary | `#FFFFFF` | `#000000` | 1px `#000000` |
| Link | none | `#000000`, hover `#920200` | none |

Square corners, 40-44px tall, padding 0 16-20px.

### River and cards

- **River item:** headline in Balto 20px/700, optional crimson prefix, dek line in Georgia 16px, byline and clock-icon timestamp in `#6A6A6A` 13-14px, thumbnail right at 120-200px wide. Items separated by 1px `#E6E6E6` rules.
- **Lead story:** wide image, 32px headline, large dek, byline, and a list of "related" links underneath.
- **Trending module:** numbered list with fire icon headers, black numbers, 16-18px headlines.
- **Section heading:** Eksell 24-30px with a short crimson or black rule above.

### Article page

- Category kicker and timestamp row at top, with print and share icons.
- H1 `.c-title`: Balto 700, 46px desktop XL, 38px tablet, 20px mobile; crimson prefix span `.c-title__before`.
- Byline (`.author__byline`): "By Name" underlined, role ("Senior Film Writer"), date and time.
- Lead image with `.c-figure__caption` in Helvetica 13px, credit in grey.
- Body `.a-content`: Georgia 18px/1.5 (16px mobile), black, 16px between blocks; links black with a 2px `#D77979` bottom border, hover crimson.
- Blockquote: Eksell text with a 74px `#595959` opening quote mark; cite in Balto. Variants: `extended` and `memo` in Balto, `paper` in Courier for leaked memos and letters.
- Related links and newsletter prompt at the end, right rail with most popular.

### Box office module

Weekend box office reports use chart tables: header row Balto 12px caps on `#F7F7F7`, rank, title, weekend and cumulative columns with right-aligned tabular figures in Balto, 1px `#E6E6E6` row rules, and percentage changes in crimson or green (approximate). Charts in reports are often embedded images with Balto labels.

### Breaking and live

- Breaking banner: full-width `#CF3535` or `#920200` strip, white Balto caps "BREAKING NEWS", headline in white 16-18px.
- Live blogs: entries stacked with Balto timestamps and bold lead lines; updates prefixed "UPDATE" in crimson.

### Newsletters and forms

Deadline Alerts and newsletter boxes: `#F7F7F7` or `#F5DFDD` panel, Eksell or Balto headline, square 44px input with 1px `#CCCCCC` border, black or crimson square button "Sign Up".

### Badges and icons in metadata

Small icons from the SVG sprite: `#clock` before timestamps, `#fire` for trending, `#printer` for print. 14-16px, `#6A6A6A`.

## 6. Layout & Spacing

- Site max width 1160px (`--site-max-width: 1160px`), some templates 1260px (78.75rem).
- Larva spacing tokens 4, 8, 12, 16, 20, 24, 32px.
- Homepage: main river about 2/3 width, right rail 300px with ads, most popular and newsletters.
- Article column about 700-760px (approximate).
- Breakpoints: tablet 768px, desktop 1024px, desktop XL 1160px (approximate).
- Dense: 16-20px between river items, 32px between modules.

## 7. Depth, Elevation & Motion

- Flat. No card shadows.
- Structure comes from 1px `#CCCCCC` and `#E6E6E6` rules and light grey panels.
- Mega menu slides from the left with a dark overlay (about 200ms, approximate).
- Hover changes text to crimson; no image zoom.

## 8. Iconography & Imagery

- Icons: simple monochrome glyphs in a sprite (clock, fire, printer, social logos), 12-24px.
- Photography: press stills, premiere photos, headshots of executives and talent, studio logos. Cropped 16:9 or 3:2 with square corners.
- Many stories use a single headshot or key art; video thumbnails get a play badge.

## 9. Voice & Microcopy

Scoop-first and direct. Headlines lead with the news and often with an uppercase prefix. Industry shorthand is normal.

- Prefixes: "EXCLUSIVE:", "UPDATE:", "UPDATED with...", "BREAKING:".
- Sample UI strings: "Got A Tip?", "Follow Us:", "Open Mega Menu", "Read More", "Sign Up", "Most Popular", "Deadline Alerts".
- Section names: TV, Film, Awards, Box Office, Business, Theater, International, Video.

## 10. Do's and Don'ts

**Do**

- Lead with a dense, time-ordered river of headlines and timestamps.
- Use a bold sans for headlines and Georgia for article text.
- Keep crimson `#920200` for prefixes, hover and tags only.
- Use thin grey rules and square corners.
- Show a clock icon and a precise time on each story.

**Don't**

- Don't let images dominate the homepage.
- Don't use bright reds for large fills; the brand red is dark crimson.
- Don't add shadows or rounded cards.
- Don't set the masthead in a sans.
- Don't drop the uppercase prefix style for exclusives.

## 11. Agent Prompt Guide

> Build this UI in the style of Deadline. White page, black text, a black slab-serif uppercase "DEADLINE" masthead, and a thin section nav of uppercase 12px bold sans links between 1px `#CCCCCC` rules. Headlines in a clean bold sans (Balto; use Work Sans) at weight 700: article 46px with tight 45px leading, river headlines 20px. Prefix exclusives with an uppercase crimson `#920200` label inside the headline. Article body is Georgia 18px/1.5 with links underlined by a 2px `#D77979` border. Section headings and blockquotes use a display serif (Eksell; use Fraunces), quotes get a 74px `#595959` opening mark. Metadata 13-14px `#6A6A6A` with a small clock icon. Modules on `#F7F7F7`, dividers `#E6E6E6`. Buttons are square, black or crimson with white uppercase text; crimson hover goes to `#550100`. Breaking banners use `#CF3535`. Flat, no shadows, max width 1160px with a 300px right rail.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-crimson: #920200;
  --brand-oxblood: #550100;
  --brand-alert: #CF3535;
  --brand-blue: #4670D2;
  --brand-blue-tint: #E0EDF5;
  --brand-sky: #F1F8FC;
  --brand-grey-dark: #616161;
  --brand-grey-medium: #6A6A6A;
  --brand-grey-medium-dark: #595959;
  --brand-grey: #9B9B9B;
  --brand-grey-light: #E6E6E6;
  --brand-rule: #CCCCCC;
  --brand-paper: #F7F7F7;
  --brand-blush: #F5DFDD;
  --brand-beige: #EFEBDC;
  --brand-link-underline: #D77979;
  --brand-font-sans: "Balto", "Work Sans", Helvetica, sans-serif;
  --brand-font-display: "Eksell", "Fraunces", Georgia, serif;
  --brand-font-body: Georgia, "Gelasio", serif;
  --brand-font-caption: Helvetica, Arial, sans-serif;
  --brand-radius: 0;
  --brand-max-width: 1160px;
  --brand-sticky-nav: 50px;
  --brand-line-copy: 1.5;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Deadline.

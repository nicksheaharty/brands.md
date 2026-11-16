---
name: The Hollywood Reporter
shortName: THR
slug: hollywood-reporter
url: https://hollywoodreporter.com
category: News
tagline: "Red script masthead, Kepler serif headlines, Karla caps labels and a magazine grid."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: THR Red
    hex: "#D92128"
    role: Masthead, brand-primary, subscribe button, link hover
  - name: Black
    hex: "#000000"
    role: Headlines, body text, rules
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Bright Red
    hex: "#EC1C24"
    role: brand-primary light and dark states, button hover
  - name: Ink
    hex: "#101010"
    role: brand-accent, dark bars and footer
  - name: Royal Blue
    hex: "#0926A2"
    role: brand-secondary, occasional links and franchise accents
  - name: Grey Dark
    hex: "#5A5A5A"
    role: Bylines, decks in lists, metadata
  - name: Grey
    hex: "#8C8C8C"
    role: Timestamps, credits
  - name: Grey Light
    hex: "#DCDCDC"
    role: Hairline rules, input borders
  - name: Grey Lightest
    hex: "#EFEFEF"
    role: Module backgrounds
  - name: Heat Vision Purple
    hex: "#6442AC"
    role: Heat Vision vertical badge
  - name: Live Teal
    hex: "#008080"
    role: Live feed badge
  - name: Silver
    hex: "#BFBFBF"
    role: Children-border rules between list items
fonts:
  display:
    family: "Kepler Std Semicondensed Display"
    fallback: "Playfair Display"
    weights: [400, 700]
  body:
    family: "Kepler Std"
    fallback: "Source Serif 4"
    weights: [400, 700]
typeScale:
  - { role: Article headline, size: 64, weight: 400, lineHeight: 0.94, tracking: "-0.32px" }
  - { role: Article deck, size: 26, weight: 400, lineHeight: 1.12, tracking: "-0.13px" }
  - { role: Lead card headline, size: 29, weight: 400, lineHeight: 0.97, tracking: "0.14px" }
  - { role: Article body, size: 22, weight: 400, lineHeight: 1.27, tracking: "-0.11px" }
  - { role: Card headline, size: 18, weight: 400, lineHeight: 1.11, tracking: "-0.09px" }
  - { role: Label bold, size: 14, weight: 700, lineHeight: 1.21, tracking: "0.7px" }
  - { role: Label caps, size: 12, weight: 400, lineHeight: 1.5, tracking: "0.12px" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#EFEFEF"
  text: "#000000"
  muted: "#5A5A5A"
  border: "#DCDCDC"
  accent: "#D92128"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# The Hollywood Reporter

## 1. Visual Theme & Atmosphere

The Hollywood Reporter (THR) looks like a glossy magazine that also runs a newsroom. The page is white with black serif headlines; the only strong colour is the red script masthead, repeated on the subscribe button and hover states. Above the logo sits the tagline "The Definitive Voice of Entertainment News"; below it a row of uppercase sans section links (Movies, TV, Music, Awards, Lifestyle, Business, Global, Video).

Headlines are set in Kepler, a semicondensed display serif with high contrast and sharp wedge serifs. They run large and tight: the article title reaches 64px with line height under 1. Small labels and kickers switch to Karla, an uppercase grotesque, so every story has a serif voice and a sans tag.

What makes it recognisable:

- **The red script logo** ("The Hollywood Reporter" with a flowing "Hollywood") in `#D92128`, 55px tall and 70px on wide screens.
- **Big serif headlines** with tight leading, set in regular weight rather than bold.
- **Double rules.** Section breaks often use a double black border (`u-border-double-a`) like a printed page.
- **Karla caps** for kickers, bylines and nav.
- **Vertical brands** such as Heat Vision (purple `#6442AC`) and live feeds (teal) get their own coloured badges.

Mood: polished, cinematic, magazine, legacy trade.

## 2. Color Palette & Roles

THR runs on Penske Media's Larva system; tokens are inlined on each page.

| Name | Hex | Token / class | Role |
|---|---|---|---|
| THR Red | `#D92128` | `--color-brand-primary` | Logo, subscribe, link hover, active nav |
| Bright Red | `#EC1C24` | `--color-brand-primary-light`, `-dark` | Hover and pressed red |
| Black | `#000000` | `--color-black` | Text, headlines, rules |
| Ink | `#101010` | `--color-brand-accent` | Dark bars, footer, video modules |
| Royal Blue | `#0926A2` | `--color-brand-secondary` | Secondary accent, some links |
| Grey Darkest | `#323232` | `--color-grey-darkest` | Dark secondary fills |
| Grey Dark | `#5A5A5A` | `--color-grey-dark` | Bylines, secondary text |
| Grey | `#8C8C8C` | `--color-grey` | Timestamps, credits |
| Grey Light | `#DCDCDC` | `--color-grey-light` | Rules, borders |
| Grey Lightest | `#EFEFEF` | `--color-grey-lightest` | Module fills, header utility row |
| Silver | `#BFBFBF` | `.a-children-border--silver` | Rules between list items |
| White | `#FFFFFF` | `--background-color-body` | Page |
| Heat Vision | `#6442AC` | `u-background-color-heat-vision` | Genre vertical badge |
| Live Feed | `#008080` | `u-background-color-live-feed` | Live coverage badge |
| Bluewood | `#243842` | `u-background-color-picked-bluewood` | Dark promo bands (approximate, shared PMC utility) |

Other accents seen in franchise packages: gold `#BB8A47` and cream `#F7F1E7` for awards and luxury features, `#956E37`, `#A74165`, `#4B6A88` (approximate roles).

### Semantic

- Breaking: white Karla caps on `#D92128`.
- Live: white on `#008080` with a pulsing dot.
- Exclusive and review labels: red Karla caps on white.

### Dark mode

None on the website. Video and podcast bands use `#101010` with white text and `#8C8C8C` metadata.

## 3. Typography

**Families (from the live CSS and Adobe Fonts kit):**

- **Kepler Std Semicondensed Display** (`kepler-std-semicondensed-dis`): `--font-family-primary`, all headlines.
- **Kepler Std** (`kepler-std`): `--font-family-secondary` and `--font-family-body`, decks and article text.
- **Karla**: `--font-family-accent`, labels, nav, buttons, bylines.
- Georgia is the system fallback for basic text.

Kepler is an Adobe Originals typeface (licensed through Adobe Fonts). Substitutes: **Playfair Display** or **Libre Caslon Display** for headlines, **Source Serif 4** for body. Karla is free on Google Fonts.

### Scale

| Role | Wide desktop | Desktop | Mobile | Tracking |
|---|---|---|---|---|
| Article headline (`a-font-primary-xl`) | 64 / 60px | 54 / 48px | 34 / 32px | -0.32px wide, +0.17px mobile |
| Article deck (`article-excerpt`, `a-font-secondary-xl`) | 26 / 29px | 24 / 27px | 20 / 23px | -0.13px |
| Lead card headline (`a-font-primary-s`) | 29 / 28px | 25 / 24px | 20 / 20px | 0.14px |
| Card headline (`a-font-secondary-m`) | 18 / 18-20px | 18 / 20px | 18 / 20px | -0.09px |
| Article body (`a-font-body-m`) | 22 / 28px | 22 / 28px | 20 / 25px | -0.11px |
| Pull quote | 24 / 27px | 24 / 27px | 20 / 24px | 0 |
| Label bold (`a-font-accent-bold-s`) | 14 / 17px | same | same | 0.7px |
| Label caps (`a-font-accent-uppercase-xs`) | 12 / 18px | same | same | 0.12px |

Weights: headlines are regular (400) Kepler display; bold appears only in labels and strong text.

### Rules

- Headlines in sentence case, never all caps.
- Labels in Karla uppercase with light positive tracking.
- Tight leading on display sizes (line height at or below the font size) is part of the look; body text opens up to about 1.27.
- Italic Kepler is used for film and show titles in decks and for some kicker lines (`a-font-secondary-italic-s`).

## 4. Logo & Brand Mark

The logo stacks a small "THE" above a large brush-script "Hollywood" with "REPORTER" in spaced italic caps beneath, all in red `#D92128`. The SVG is 421 x 98.

- **Colours:** red on white (primary), white on red, white on black.
- **Monogram:** "THR" in a bold serif, used for avatars and short references; this file's icon renders it in white on red (approximate rendering, not the official cut).
- **Clear space:** at least the cap height of "REPORTER" on all sides.
- **Minimum size:** 120px wide on screen.

Misuse: don't recolour the script black on white for the main masthead, don't separate "Hollywood" from the other words, don't stretch it, don't place it on busy red photography.

## 5. Components

### Header

- Utility row on `#EFEFEF`: "Got a tip?" (Karla caps 12px), newsletters, search, account.
- Centred logo (`.c-logo`, 55px tall, 70px at wide desktop) with the tagline "The Definitive Voice of Entertainment News" in Kepler italic 14-16px.
- Right side: red "Subscribe" button.
- Section nav: centred row of Karla 14px bold uppercase links with 0.7px tracking, black, hover `#D92128`, top and bottom 1px black rules.
- Sticky header 52px tall (`--sticky-nav-height: 3.25rem`) with the logo shrunk to about 24px.

### Buttons

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary / Subscribe | `#D92128` | `#FFFFFF` Karla 14px 700 uppercase | none |
| Primary hover | `#EC1C24` | `#FFFFFF` | none |
| Secondary | `#FFFFFF` | `#000000` | 1px `#000000` |
| Secondary hover | `#D92128` | `#FFFFFF` | 1px `#D92128` |
| Text arrow link | none | `#D92128` Karla bold caps | none, with a small chevron |

Square corners, 40-44px tall, horizontal padding 16-24px.

### Story cards

- **Lead story:** large image (3:2 or 16:9, square corners), Karla caps kicker in red, Kepler display headline 29px, short Kepler deck in `#5A5A5A`, Karla byline.
- **Grid card:** image top, 18px Kepler headline, 12px Karla caps kicker.
- **River item:** horizontal card with thumbnail left, headline and deck right, separated by 1px `#BFBFBF` rules.
- **Section header:** Karla bold caps 14-16px with a double black rule above or a red short rule.

### Article page

- Kicker (section) in Karla caps red.
- H1 Kepler display up to 64px/60px.
- Deck in Kepler 26px/29px.
- Byline row: "By Name" in Karla bold 14px, timestamp in Karla 12px `#8C8C8C`, share icons.
- Lead image or video with `.c-figcaption` (Karla 12-13px, `#5A5A5A`, credit in caps).
- Body in Kepler 22px/28px, black; links underlined, hover red.
- Pull quote: Kepler 24px/27px, no italics by default, with a red or black rule above.
- Right rail: "Most Popular" numbered list with large red Kepler numerals and Karla labels (approximate).

### Live, box office and data

- Live feed badge: teal `#008080` background, white Karla caps "LIVE".
- Box office and ratings charts: plain tables with Karla caps header row on `#EFEFEF`, Kepler or Karla figures right-aligned, 1px `#DCDCDC` row rules (approximate).
- Awards hubs: dark or cream bands with gold accents and portrait photography.

### Newsletters and forms

Signup modules: `#EFEFEF` panel, Kepler display headline, Karla description, square 44px email input with 1px `#DCDCDC` border, red square "Sign Up" button.

### Badges

Karla bold caps 11-12px, padding 4px 8px, square: red (Breaking, Exclusive), purple (Heat Vision), teal (Live), black (Review, Video).

## 6. Layout & Spacing

- Site and hub max width 1160px (`--site-max-width: 72.5rem`).
- Larva spacing tokens 4, 8, 12, 16, 20, 24, 32px.
- Homepage: lead package across 2/3 plus a stacked right column; then three-up grids, scrolling carousels (`--scrollable-grid-column-size: calc(5vw + 13.75rem)`), and full-width video bands.
- Article: centred 760-800px column (approximate) with a right rail on desktop.
- Breakpoints: tablet 768px, desktop 1160px; on pages with ad side skins the type scale stays one step smaller.

## 7. Depth, Elevation & Motion

- Flat print-like surfaces. No shadows on cards.
- Depth comes from rules: 1px black, 1px `#DCDCDC`, and double black borders.
- Video play badges are 55px circles over images.
- Hover changes text colour to red; transitions are quick (about 150ms).

## 8. Iconography & Imagery

- Icons: small monochrome SVG sprites (search, arrow, blog-arrow, social glyphs), 12-20px, black or white.
- Photography is the star: studio portrait covers, red-carpet shots and film stills, high quality, cropped with square corners.
- Covers of the print magazine appear in promos for the weekly issue.

## 9. Voice & Microcopy

Confident industry reporting with a magazine feel. Headlines can be wry; labels are terse.

- Sentence case headlines, uppercase labels.
- Sample strings: "Got a tip?", "Subscribe", "Newsletters", "See My Options", "Sign Up", "Most Popular", "Read More".
- Tagline: "The Definitive Voice of Entertainment News".

## 10. Do's and Don'ts

**Do**

- Use a high-contrast display serif for headlines, regular weight, tight leading.
- Pair it with a small uppercase sans for every label.
- Keep red for the logo, subscribe and hover; the page stays black and white.
- Use double rules and hairlines to structure sections.
- Let large photography lead the homepage.

**Don't**

- Don't set headlines bold or in sans serif.
- Don't round corners or add drop shadows.
- Don't scatter red across body text.
- Don't use more than one vertical colour (purple, teal) per module.
- Don't crowd the masthead; keep the tagline and logo centred.

## 11. Agent Prompt Guide

> Build this UI in the style of The Hollywood Reporter. White page, black text, a centred red script masthead `#D92128` with a small italic serif tagline. Headlines in a high-contrast semicondensed display serif (Kepler; use Playfair Display) at weight 400 with tight leading: article title 64px/60px, card headlines 18-29px. Decks and body in a text serif (Kepler; use Source Serif 4): body 22px/28px. All labels, nav, bylines and buttons use Karla uppercase, 12-14px, bold for nav, with 0.7px tracking. Nav links are black, hover red. Primary buttons are red `#D92128` rectangles with white Karla caps, hover `#EC1C24`. Use 1px `#DCDCDC` and double black rules between sections, `#EFEFEF` module fills, metadata `#5A5A5A` and `#8C8C8C`. No rounded corners, no shadows. Max width 1160px. Live badges teal `#008080`, Heat Vision badge purple `#6442AC`.

```css
:root {
  --brand-red: #D92128;
  --brand-red-bright: #EC1C24;
  --brand-black: #000000;
  --brand-ink: #101010;
  --brand-blue: #0926A2;
  --brand-white: #FFFFFF;
  --brand-grey-darkest: #323232;
  --brand-grey-dark: #5A5A5A;
  --brand-grey: #8C8C8C;
  --brand-grey-light: #DCDCDC;
  --brand-grey-lightest: #EFEFEF;
  --brand-silver: #BFBFBF;
  --brand-heat-vision: #6442AC;
  --brand-live: #008080;
  --brand-gold: #BB8A47;
  --brand-cream: #F7F1E7;
  --brand-font-display: "kepler-std-semicondensed-display", "Playfair Display", "Times New Roman", serif;
  --brand-font-body: "kepler-std", "Source Serif 4", Georgia, serif;
  --brand-font-label: "Karla", Helvetica, sans-serif;
  --brand-radius: 0;
  --brand-max-width: 1160px;
  --brand-sticky-nav: 52px;
  --brand-rule: 1px solid #DCDCDC;
  --brand-rule-double: 3px double #000000;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by The Hollywood Reporter.

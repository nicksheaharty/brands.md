---
name: The New York Times
shortName: NYT
slug: new-york-times
url: https://nytimes.com
category: News
tagline: "Blackletter masthead, Cheltenham headlines, Imperial body text and hairline column rules."
updated: 2026-11-16
appStoreId: 284862083
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#121212"
    role: Headlines, body text, logo (content primary)
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Breaking Red
    hex: "#D0021B"
    role: LIVE labels, breaking text and pills
  - name: Link Blue
    hex: "#326891"
    role: Links, accent-dim, section labels
  - name: Accent Blue
    hex: "#346EB7"
    role: Interactive accent, buttons in some modules
  - name: Primary Dim
    hex: "#363636"
    role: Deks, bylines, article body
  - name: Secondary
    hex: "#5A5A5A"
    role: Captions, metadata
  - name: Secondary Dim
    hex: "#727272"
    role: Timestamps, credits
  - name: Rule
    hex: "#DFDFDF"
    role: Section rules and dividers
  - name: Light Rule
    hex: "#EBEBEB"
    role: Button borders, light dividers
  - name: Paper Grey
    hex: "#F7F7F7"
    role: Subtle panels and backgrounds
  - name: Positive
    hex: "#267C30"
    role: Positive data, success
  - name: Negative
    hex: "#A90111"
    role: Negative data, errors
  - name: Dark Text
    hex: "#F8F8F8"
    role: Text in dark mode
fonts:
  display:
    family: "NYT Cheltenham"
    fallback: "Libre Caslon Text"
    weights: [300, 500, 700]
  body:
    family: "NYT Imperial"
    fallback: "Source Serif 4"
    weights: [400, 500, 700]
  mono:
    family: "NYT Franklin"
    fallback: "Libre Franklin"
    weights: [500, 700]
typeScale:
  - { role: Article headline, size: 40, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Lead headline, size: 40, weight: 700, lineHeight: 1.12, tracking: "0" }
  - { role: Story headline, size: 26, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Summary headline, size: 20, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Dek, size: 23, weight: 300, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Byline, size: 15, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Label, size: 11, weight: 700, lineHeight: 1.0, tracking: "0.05em" }
radii: { sm: 2, md: 3, lg: 8, pill: 50 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48]
shadows:
  - { name: Menu, value: "0 10px 10px rgba(0,0,0,0.1)" }
  - { name: Modal, value: "0 4px 38px rgba(0,0,0,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#121212"
  muted: "#5A5A5A"
  border: "#DFDFDF"
  accent: "#121212"
  accentText: "#FFFFFF"
  radius: 3
  buttonStyle: solid
---

# The New York Times

## 1. Visual Theme & Atmosphere

The New York Times website reads like a newspaper laid out for screens. A blackletter masthead centred above a thin double rule, a dense multi-column front page divided by hairlines, headlines in a sturdy old-style serif (Cheltenham), body text in a reading serif (Imperial), and a small sans (Franklin) for everything functional. Colour is nearly absent: black text on white, a muted link blue, and red only for live and breaking items.

What makes it recognisable:

- **The Old English masthead.** "The New York Times" in its blackletter wordmark, centred, with date and "Today's Paper" small on either side.
- **Three serif-and-sans voices.** Cheltenham for headlines, Imperial for reading, Franklin for labels and UI.
- **Hairline columns.** 1px `#DFDFDF` vertical and horizontal rules separate stories, as in print.
- **Restraint.** Almost no fills or shadows; hierarchy comes from type size, weight and position.
- **Red LIVE.** Live coverage shows a red "LIVE" label in Franklin bold and a red timestamp.

Mood: authoritative, calm, print-derived.

## 2. Color Palette & Roles

Colour tokens from the site's template system (`--tpl-color-content-*`), light values with dark-mode pairs.

| Name | Light | Dark | Role |
|---|---|---|---|
| Content primary | `#121212` | `#F8F8F8` | Headlines, body, logo |
| Primary dim | `#363636` | `#DFDFDF` | Deks, bylines, article body paragraphs |
| Secondary | `#5A5A5A` | `#BBBBBB` | Captions, metadata |
| Secondary dim | `#727272` | `#A3A3A3` | Timestamps, credits |
| Placeholder | `#8B8B8B` | | Input placeholder |
| Accent | `#346EB7` | `#6BA1DD` | Interactive accent |
| Accent dim | `#326891` | `#7CA7C8` | Links, link underlines |
| Breaking | `#D0021B` | | LIVE, breaking text and pills |
| Positive | `#267C30` | `#63A859` | Positive data |
| Negative | `#A90111` | | Negative data, errors |

### Neutrals

| Hex | Use |
|---|---|
| `#FFFFFF` | Page |
| `#F7F7F7` | Panels, subtle backgrounds |
| `#F3F3F3` | Hover fills |
| `#EBEBEB` | Light dividers, button borders |
| `#DFDFDF` | Column and section rules |
| `#CCCCCC` | Input borders, hover borders |
| `#333333` | Default button text |

### Dark mode

The site and app support a dark theme through the same tokens: page near `#121212`, text `#F8F8F8`, dim `#DFDFDF`, links `#7CA7C8`. Elections and data graphics carry their own palettes for both modes.

## 3. Typography

**Families (custom, licensed exclusively to The Times)**

- **NYT Cheltenham** (`nyt-cheltenham`): headlines and deks. Cuts include light (300), medium (500), bold (700), italic, and a condensed version (`nyt-cheltenham-cond`).
- **NYT Imperial** (`nyt-imperial`): article body, summaries and captions.
- **NYT Franklin** (`nyt-franklin`): bylines, section labels, navigation, buttons, data. A version of Franklin Gothic.
- **NYT Karnak**: a slab serif used for some opinion and feature headers (approximate).

Stacks fall back to Georgia and Helvetica. Closest Google Fonts: **Libre Caslon Text** (Cheltenham, approximate in feel), **Source Serif 4** (Imperial), **Libre Franklin** (Franklin).

### Scale (from production CSS, desktop at 740px+)

| Role | Font | Size / line height | Weight |
|---|---|---|---|
| Article headline | Cheltenham | 40 / 46px (31 / 36px mobile) | 700 (italic in some templates) |
| Homepage lead headline | Cheltenham | 40 / 44.8px | 700 |
| Homepage story headline | Cheltenham | 26 / 30px | 700 |
| Half-width card headline | Cheltenham | 18px | 700 |
| Dek (article summary) | Cheltenham | 23 / 30px (20 / 25px mobile) | 300 |
| Homepage summary | Imperial | 14-16px, 70% opacity | 400 |
| Body | Imperial | 20 / 30px (18 / 25px mobile) | 400 |
| Byline | Franklin | 15 / 20px (14 / 18px mobile) | 700 |
| Caption | Imperial | 14 / 18px | 500 |
| Credit | Franklin | 11-12px | 500 |
| Label / kicker | Franklin | 11-14px, uppercase, 0.02-0.05em | 700 |
| Button | Franklin | 11px, uppercase, 0.02em | 500 |

### Rules

- Headlines in sentence case with standard punctuation. Kickers and live labels uppercase in Franklin.
- Body column max width 600px; paragraphs spaced about 15px apart.
- Links in body: underlined 1px with `text-underline-offset: 0.1em`, underline colour `#326891`, text stays dark.
- Use Franklin for anything numerical in UI (times, counts).

## 4. Logo & Brand Mark

The wordmark is "The New York Times" in a Fraktur-style blackletter derived from the 19th-century masthead. The square mark is the blackletter "T" alone.

- **Primary:** black `#121212` wordmark on white, centred in the masthead.
- **Reversed:** white on black in dark mode.
- **"T" mark:** app icon (black T on white), favicon and social avatars.
- **Clear space:** at least the height of the capital "T" around the wordmark.
- **Minimum size:** wordmark about 120px wide; "T" 16px.

Misuse: don't recolour, don't set the name in another blackletter font, don't stretch, don't put the wordmark on photos without a solid band.

## 5. Components

### Masthead and nav

- Top bar: section menu and search icons left, "U.S." / "International" / "Canada" / "Español" / "中文" edition links small in Franklin; account and subscribe right.
- Masthead: wordmark centred (desktop about 375px wide), date and "Today's Paper" in Franklin 11-12px to the left.
- Section nav: one row of Franklin 13px links (U.S., World, Business, Arts, Lifestyle, Opinion, Audio, Games, Cooking, Wirecutter, The Athletic), each with a hover dropdown panel.
- A double rule (thick black over thin) separates the masthead from content.

### Story blocks (homepage)

```css
.story-headline {
  font: 700 26px/30px nyt-cheltenham, "Libre Caslon Text", Georgia, serif;
  color: #121212;
  text-wrap: balance;
}
.story-summary {
  font: 400 15px/1.4 nyt-imperial, "Source Serif 4", Georgia, serif;
  color: #121212;
  opacity: .7;
  margin-top: 8px;
}
.story-meta {
  font: 500 11px/1 nyt-franklin, "Libre Franklin", Helvetica, sans-serif;
  letter-spacing: .02em;
  text-transform: uppercase;
  color: #727272;
}
```

- Columns are separated by 1px `#DFDFDF` vertical rules; stories within a column by horizontal rules.
- Images are square-cornered; credits run in small grey Franklin beneath.
- Read time ("5 min read") sits under summaries in grey Franklin.

### Live label

- Inline text: `LIVE` in Franklin 14px/700 uppercase, `#D0021B`, often followed by "Updated 12 min ago".
- Pill version: white text on `#D0021B`, padding 4px 8px 3px, 3px radius.

### Article page

- Kicker (optional), headline Cheltenham 700 40/46px, dek Cheltenham 300 23/30px `#363636`.
- Lead image full column or wider; caption Imperial 14/18px `#5A5A5A` with credit in Franklin.
- Byline: "By Jane Doe and John Roe" in Franklin 15/20px/700, small round author photos, then timestamp "Nov. 16, 2026, 4:10 p.m. ET" in Franklin grey.
- Share bar: pill buttons (50px radius) with 1px border, icons and labels ("Share full article", gift icon, save).
- Body Imperial 20/30px in `#363636`, max width 600px, links underlined in blue.
- Pull quotes and subheads in Cheltenham; endmark absent.

### Buttons

| Variant | Style |
|---|---|
| Default | white fill, 1px `#EBEBEB` border, `#333` Franklin 11px/500 uppercase, 0.02em, padding 11px 12px 8px, 3px radius |
| Primary (subscribe) | `#121212` fill (or `#567B95` in older modules), white Franklin 700, 3px radius |
| Action bar pill | white, 1px border, 50px radius, icon plus label |
| Link | `#326891` |

Hover: border to `#CCC`, or fill `#F3F3F3`. Transition `background-color .15s`.

### Video player

- 16:9, black, square corners. Play button bottom-left or centred, captions on by default in muted autoplay. Franklin for time and controls text.
- Video headline and summary in the standard story styles.

### Inputs

Search and email: 40-44px, 1px `#CCC` border, 3px radius, Franklin 14-16px; placeholder `#8B8B8B`.

## 6. Layout & Spacing

- Breakpoints: 600px, 740px, 765px, 975px, 1024px, 1150px, 1280px.
- Homepage max width about 1200px (approximate), 20px side gutters.
- Front page uses a print-like grid: wide lead column, narrower side columns, separated by rules and 20px gutters.
- Article: 600px text column centred; images can span 945px or full bleed.
- Spacing in 4px steps; paragraph spacing 15px; module separation 24-32px.

## 7. Depth, Elevation & Motion

- Flat. Separation by rules and white space.
- Menus and dropdowns: `0 10px 10px rgba(0,0,0,0.1)`. Modals: `0 4px 38px rgba(0,0,0,0.15)`.
- Transitions are slow and simple: `all .6s` on image fades, `opacity .3s ease-in-out`, `background-color .15s` on buttons.
- Live timestamps update in place without animation.

## 8. Iconography & Imagery

- Icons: thin, outline-style glyphs (1.5px strokes) at 16-20px: search, hamburger, share, gift, bookmark.
- Photography: large documentary images, always credited; no filters; square corners.
- Graphics: Franklin-labelled charts and maps with muted fills; elections use dedicated party palettes.
- Illustrations appear in opinion and features, commissioned per story.

## 9. Voice & Microcopy

Formal and precise, with house style abbreviations.

- Dates: "Nov. 16, 2026", times "4:10 p.m. ET".
- Labels: "LIVE", "Analysis", "Opinion", "Guest Essay", "News Analysis".
- Meta: "5 min read", "Updated 12 min ago".
- Buttons: "Subscribe", "Log in", "Share full article", "Read more". Subscription offers change often; check the live site before quoting one.
- Bylines: "By Jane Doe" and "Reporting from Washington".

## 10. Do's and Don'ts

**Do**

- Use three families with fixed jobs: serif headlines, serif body, sans for UI.
- Separate stories with 1px `#DFDFDF` rules.
- Keep the masthead centred and black.
- Limit colour to link blue and breaking red.
- Keep the article text column near 600px.

**Don't**

- Don't use bright accent fills or gradients.
- Don't round images or cards.
- Don't put UI labels in the serif.
- Don't add shadows to story cards.
- Don't recreate the masthead in a font.

## 11. Agent Prompt Guide

> Build this UI in the style of The New York Times. White page, text `#121212`, dim text `#363636`, metadata `#5A5A5A` and `#727272`, rules 1px `#DFDFDF`. Headlines in `nyt-cheltenham, "Libre Caslon Text", Georgia, serif` weight 700: 40/46px on articles, 26/30px on homepage stories. Deks in the same serif at weight 300, 23/30px. Body in `nyt-imperial, "Source Serif 4", Georgia, serif` 20/30px, column max 600px, links underlined with `#326891` underline colour. UI, bylines and labels in `nyt-franklin, "Libre Franklin", Helvetica, Arial, sans-serif`: bylines 15px/700, labels 11px/700 uppercase with 0.02-0.05em tracking. Live labels are `#D0021B`. Buttons are white with a 1px `#EBEBEB` border, 11px uppercase Franklin, 3px radius; share buttons are 50px pills. Lay out the homepage like a newspaper: centred blackletter masthead, columns divided by vertical hairlines, square images with credits, no shadows.

```css
:root {
  --brand-ink: #121212;
  --brand-ink-dim: #363636;
  --brand-secondary: #5A5A5A;
  --brand-secondary-dim: #727272;
  --brand-placeholder: #8B8B8B;
  --brand-link: #326891;
  --brand-accent: #346EB7;
  --brand-breaking: #D0021B;
  --brand-positive: #267C30;
  --brand-negative: #A90111;
  --brand-rule: #DFDFDF;
  --brand-rule-light: #EBEBEB;
  --brand-border-input: #CCCCCC;
  --brand-surface: #F7F7F7;
  --brand-hover: #F3F3F3;
  --brand-bg: #FFFFFF;
  --brand-dark-bg: #121212;
  --brand-dark-text: #F8F8F8;
  --brand-font-headline: nyt-cheltenham, "Libre Caslon Text", Georgia, "Times New Roman", serif;
  --brand-font-body: nyt-imperial, "Source Serif 4", Georgia, "Times New Roman", serif;
  --brand-font-sans: nyt-franklin, "Libre Franklin", Helvetica, Arial, sans-serif;
  --brand-body-size: 20px;
  --brand-body-leading: 30px;
  --brand-text-width: 600px;
  --brand-radius: 3px;
  --brand-radius-pill: 50px;
  --brand-shadow-menu: 0 10px 10px rgba(0,0,0,0.1);
  --brand-shadow-modal: 0 4px 38px rgba(0,0,0,0.15);
  --brand-transition: background-color .15s;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by The New York Times.

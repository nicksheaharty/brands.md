---
name: Variety
slug: variety
url: https://variety.com
category: News
tagline: "Black italic VARIETY masthead, white trade-paper grid, Owners headlines, Plex serif body."
updated: 2026-11-16
appStoreId: 416179538
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Masthead, headlines, nav bar, primary text
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on black bars
  - name: Variety Red
    hex: "#EC1C24"
    role: Breaking and exclusive labels, live markers, brand-primary-dark token
  - name: Kicker Green
    hex: "#3D8247"
    role: Section kickers above headlines on the homepage
  - name: VIP Crimson
    hex: "#D71440"
    role: Variety VIP+ subscription accents
  - name: Grey Lightest
    hex: "#F7F7F7"
    role: Module backgrounds, rails
  - name: Medium Grey
    hex: "#595959"
    role: Headline hover, secondary text
  - name: Grey
    hex: "#8C8C8C"
    role: Timestamps, metadata
  - name: Grey Light
    hex: "#E6E6E6"
    role: Rules and dividers
  - name: Link Blue
    hex: "#0066CC"
    role: Inline links in article body
  - name: Bluewood
    hex: "#243842"
    role: Dark feature bands (brand-secondary-dark)
  - name: Highlight Yellow
    hex: "#EEE809"
    role: brand-primary token, highlight chips and promo accents
  - name: Caption Rule
    hex: "#C4CACE"
    role: Line under article captions
fonts:
  display:
    family: "Owners"
    fallback: "Archivo"
    weights: [500, 700]
  body:
    family: "IBM Plex Serif"
    fallback: "IBM Plex Serif"
    weights: [400, 700]
  mono:
    family: "IBM Plex Mono"
    fallback: "IBM Plex Mono"
    weights: [400, 500]
typeScale:
  - { role: Article headline, size: 34, weight: 500, lineHeight: 1.18, tracking: "0.68px" }
  - { role: Lead story headline, size: 28, weight: 500, lineHeight: 1.14, tracking: "0.5px" }
  - { role: Card headline, size: 18, weight: 700, lineHeight: 1.22, tracking: "0.54px" }
  - { role: Article body, size: 17, weight: 400, lineHeight: 1.65, tracking: "0" }
  - { role: Blockquote, size: 18, weight: 500, lineHeight: 1.16, tracking: "0" }
  - { role: Kicker, size: 14, weight: 500, lineHeight: 1.29, tracking: "0.7px" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#000000"
  muted: "#8C8C8C"
  border: "#E6E6E6"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Variety

## 1. Visual Theme & Atmosphere

Variety is the entertainment trade paper on the web: a white page, black type, a black masthead and very little colour. It reads like a newspaper front page re-set for screens. The italic "VARIETY" wordmark with its sweeping "Flying V" sits centred at the top; under it a black navigation bar carries the sections (Film, TV, What To Watch, Music, Docs, Tech, Global, Awards Circuit, Video, VIP+).

The homepage is a dense grid of stories: a large lead image with a big headline, columns of smaller cards, thin rules between stories, and small coloured kickers that name the beat ("Music", "Top Story"). Typography does most of the work. Headlines are in Owners, a sturdy grotesque with slightly squared curves; article text is IBM Plex Serif; labels and credits use IBM Plex Mono.

What makes it recognisable:

- **The Flying V wordmark** in black at 104px wide on mobile and 288px from tablet up.
- **Black and white chrome.** Black nav bar with white uppercase links; everything else on white.
- **Square corners.** Images, buttons and modules have no radius.
- **Small kickers.** A short section label above each headline, often in green `#3D8247`.
- **Hairline rules.** 1px black or `#E6E6E6` rules separate stories and modules.

Mood: authoritative, industry-insider, newspaper-dense.

## 2. Color Palette & Roles

Variety runs on Penske Media's Larva design system. Its tokens (`--color-brand-primary`, `--color-grey-*`) are defined inline in every page.

| Name | Hex | Token / class | Role |
|---|---|---|---|
| Black | `#000000` | `--color-black`, `lrv-u-color-black` | Text, headlines, nav bar, masthead |
| White | `#FFFFFF` | `--color-white` | Page, text on black |
| Variety Red | `#EC1C24` | `--color-brand-primary-dark` | Breaking and exclusive tags, live dot |
| Highlight Yellow | `#EEE809` | `--color-brand-primary` | Highlight fills, promo accents |
| Yellow Tint | `#F3F5CB` | `--color-brand-primary-light` | Light highlight panels |
| Secondary Blue | `#417EF4` | `--color-brand-secondary` | Occasional accents, data |
| Bluewood | `#243842` | `--color-brand-secondary-dark` | Dark feature bands, video modules |
| Kicker Green | `#3D8247` | `u-color-green` | Homepage section kickers |
| VIP Crimson | `#D71440` | `u-color-brand-vip-primary` | VIP+ paywall and subscribe accents |
| Link Blue | `#0066CC` | `.a-content p a` | Links in article body |
| Medium Grey | `#595959` | `u-color-medium-grey` | Headline hover colour |
| Grey Dark | `#6A6A6A` | `--color-grey-dark` | Secondary text |
| Grey | `#8C8C8C` | `--color-grey` | Timestamps, credits |
| Grey Light | `#E6E6E6` | `--color-grey-light` | Dividers |
| Border Grey | `#CCCCCC` | `--border-color-grey-light` | Input borders |
| Grey Lightest | `#F7F7F7` | `--background-color-grey-lightest` | Rails and module fills |
| Grey Darkest | `#323232` | `--background-color-grey-darkest` | Footer fills |
| Caption Rule | `#C4CACE` | caption border | Line under inline captions |
| Credit Grey | `#89959D` | caption `cite` | Photo credits |

### Semantic

- Breaking / Exclusive: white text on `#EC1C24`, or `#EC1C24` text on white.
- Positive data (box office up): `#3D8247`. Negative: `#EC1C24`.
- Paywall: VIP+ modules use `#D71440` on white with black type.

### Dark mode

There is no dark theme on variety.com. Dark sections (video, VIP+ promos, footer) use black or `#243842` with white text and `#8C8C8C` metadata.

## 3. Typography

**Families (from the live CSS):**

- **Owners** (OH no Type Co., served via Adobe Fonts): all `a-font-primary`, `a-font-secondary` and `a-font-accent` classes, so headlines, nav, kickers, buttons, blockquotes and bold text in articles.
- **IBM Plex Serif**: `a-font-body` and article paragraphs.
- **IBM Plex Mono**: small labels, form labels, quote citations.
- **IBM Plex Sans**: VIP+ articles and some product modules.
- **Neue Haas Grotesk Text**: inline captions.
- **Graphik XX Condensed**: drop caps on VIP+ articles.

Owners and Neue Haas are licensed; the Plex families are free on Google Fonts. Substitute **Archivo** (or Archivo Narrow for tight spots) for Owners.

### Scale

| Role | Desktop | Mobile | Weight | Tracking |
|---|---|---|---|---|
| Article headline (`lrv-a-font-primary-xxl`) | 34 / 40px | 28 / 32px | 500 | 0.68px |
| Lead story headline | 28-32 / 32-36px | 24 / 28px | 500 | 0.5px |
| Card headline (`a-font-secondary-m`) | 18 / 22px | 18 / 22px | 700 | 0.54px |
| Small card headline | 15-16 / 19px | 15 / 18px | 700 | 0.5px |
| Article body (`a-font-body-s`) | 17 / 28px | 18 / 30px | 400 | 0 |
| Deck / dek | 17 / 27px Plex Sans | same | 400 | 0 |
| Blockquote | 18 / 21px Owners | same | 500 | 0 |
| Kicker (`a-font-primary-xs`) | 14 / 18px | same | 500 | 0.7px |
| Metadata (`a-font-secondary-regular-xs`) | 14 / 18px | same | 400 | 0.7px |
| Caption | 13px Neue Haas | 12px | 400 | 0 |
| Credit | 10px Neue Haas | same | 400 | 0.5px |

### Rules

- Headlines in sentence case with the publication's own wit ("Robert Pattinson on..."). Kickers and nav in uppercase or title case short words.
- Slight positive tracking on Owners at all sizes (0.5-0.7px); it is never tightened.
- Paragraphs get 32px top and bottom margins, giving the article a spacious column inside a dense site.
- `strong` in articles switches to Owners rather than bold Plex.

## 4. Logo & Brand Mark

The Variety wordmark is a black, heavy italic serif "VARIETY" whose oversized V throws a long tapering stroke over the remaining letters (the "Flying V"). It has been the paper's masthead in various forms since the early twentieth century; the current SVG is 150 x 42.

- **Colours:** black on white (primary); white on black in dark bands and the app.
- **Symbol:** the Flying V alone, white on black, for avatars and the app icon.
- **Clear space:** at least the height of the "A" counter around the mark.
- **Minimum size:** 90px wide for the full wordmark.

Misuse: don't set "Variety" in Owners as a logo, don't recolour the wordmark red, don't remove or shorten the swoosh, don't outline it.

## 5. Components

### Header

- Top utility row: "Got a Tip?", "Newsletters", edition switcher (U.S. / Asia / Global), search and account icons, 14px Owners.
- Centred masthead link `.c-logo`, 104px wide on mobile, 288px from tablet.
- Section nav: black bar, white uppercase Owners 14px with 0.7px tracking, hover `#8C8C8C`. Becomes a sticky compact header 90px tall (`--sticky-nav-height: 5.625rem`) with a smaller logo.
- Mega menu: full-width white panel, columns of section links, 1px black top border.

### Buttons

| Variant | Background | Text | Border | Notes |
|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` Owners 14px 700 uppercase | none | Square corners, 40-44px tall, padding 0 20px |
| Secondary | `#FFFFFF` | `#000000` | 1px `#000000` | Hover inverts to black |
| Subscribe (VIP+) | `#D71440` | `#FFFFFF` | none | "Subscribe Today" |
| Text link | none | `#000000` | none | Hover `#595959` |

Focus: 2px black outline offset 2px (approximate).

### Story cards

- **Lead story:** 16:9 image, no radius; below it a green kicker, a 28-32px headline in Owners 500, a one-line dek in Plex Sans, then byline and time in 14px grey.
- **Standard card:** image left (or top), 18px/700 headline, kicker above. Hover turns the headline `#595959`.
- **River list:** text-only headlines separated by 1px `#E6E6E6` rules, timestamp right-aligned in Plex Mono 12-14px.
- **Section title:** uppercase 16px/700 heading with a thick 2px black rule above, often with a right border segment on mobile.

### Article page

- Breadcrumb kicker (section) in green or black uppercase.
- H1 34px/40px Owners 500, tracking 0.68px.
- Dek in Plex Sans 17px/27px, `#000000`.
- Byline block (`.author-social__byline`): author name in Owners 14px bold, role and social icons, date in Plex Mono 14px.
- Lead image full width of the content column; `.c-figcaption` 13px with credit in `#89959D` 10px.
- Body: Plex Serif 17px/28px, paragraphs with 32px vertical margins, links `#0066CC`.
- Blockquote: Owners 18px/1.16, citation in Plex Mono.
- Content column about 720px with a 300px right rail of most-read and ads.

### Box office and charts

Box office reports, ratings and awards predictions use simple tables: header row in Owners 14px uppercase on `#F7F7F7`, body rows 14-16px with 1px `#E6E6E6` rules, numeric columns right-aligned in Plex Mono with tabular figures, rank numbers bold. Up and down changes use green `#3D8247` and red `#EC1C24` (approximate).

### Live and breaking

- Breaking bar: full-width black or red strip with "BREAKING" in white Owners 700 and the headline.
- Live blogs: entries with a timestamp in Owners on the left, author name, and Plex Serif text; liveblog headers use Owners.

### Newsletters and forms

Newsletter signup boxes are `#F7F7F7` panels with a 20-24px Owners headline, a 1px `#CCCCCC` square input 44px tall, Plex Mono labels, and a black square "Sign Up" button.

### Badges

Small uppercase labels in Owners 12px/700 with 1px tracking: "EXCLUSIVE" and "BREAKING" in red, "VIP+" in crimson, "REVIEW" and section names in black.

## 6. Layout & Spacing

- Site max width 1160px (`--site-max-width: 72.5rem`), centred, with 16px gutters on mobile and 20-24px on desktop.
- Larva spacing tokens: 4, 8, 12, 16, 20, 24, 32px (`--spacing-025` through `--spacing-2`).
- Homepage: lead story spans two thirds, right column of stacked cards; below, three- and four-column grids and full-width video and VIP+ bands.
- Breakpoints: tablet 768px (48rem), desktop 1160px (72.5rem); mobile max below 768px.
- Line heights: 1.1 small, 1.35 normal, 1.5 copy, 1.85 large.

## 7. Depth, Elevation & Motion

- Flat. No card shadows; separation comes from white space, 1px rules and `#F7F7F7` fills.
- Sticky header gets a 1px bottom border instead of a shadow.
- Mega menu and search open with a quick fade or slide (150-200ms ease, approximate).
- Hover states change colour only (black to `#595959`); images do not zoom.

## 8. Iconography & Imagery

- Icons are small monochrome SVG sprites (`#variety-search`, `#hamburger-menu`, social glyphs), 16-20px, black or white.
- Photography: red-carpet, festival, studio stills and portrait shoots, cropped 16:9 or 4:3 with square corners.
- Video thumbnails carry a play triangle badge.
- VIP+ uses charts and data graphics in black, crimson and grey.

## 9. Voice & Microcopy

Trade-paper voice: fast, knowledgeable, full of industry shorthand (B.O., showrunner, upfronts) but written for a general reader.

- Headline casing: sentence case. Labels: uppercase.
- Sample strings: "Got a Tip?", "Newsletters", "U.S. Edition", "Subscribe Today", "Read More", "Most Popular", "Must Read", "Sign Up".
- Section names: Film, TV, What To Watch, Music, Docs, Tech, Global, Awards Circuit, Video, VIP+.

## 10. Do's and Don'ts

**Do**

- Keep the page white and text black; use colour only for kickers, breaking tags and VIP+.
- Set headlines in a sturdy grotesque with slight positive tracking.
- Use a serif for article paragraphs with generous paragraph spacing.
- Keep every corner square and separate stories with 1px rules.
- Centre the wordmark above a black section bar.

**Don't**

- Don't add rounded cards or drop shadows.
- Don't recolour the Flying V or set it in red.
- Don't use more than one accent colour in a module.
- Don't set article body in sans serif.
- Don't crowd headlines with icons; text leads.

## 11. Agent Prompt Guide

> Build this UI in the style of Variety. White page `#FFFFFF`, black text and headlines `#000000`, metadata `#8C8C8C`, dividers `#E6E6E6`, module fills `#F7F7F7`. A centred black italic wordmark sits above a black nav bar with white uppercase links (14px, tracking 0.7px). Headlines use Owners (substitute Archivo) at weight 500 for large sizes (article 34px/40px, tracking 0.68px) and 700 for card headlines (18px/22px). Article body is IBM Plex Serif 17px/28px with 32px paragraph margins and links `#0066CC`; captions 13px with credits in `#89959D`; small labels in IBM Plex Mono. Section kickers above headlines are small and coloured green `#3D8247`; breaking and exclusive tags use red `#EC1C24`; VIP+ uses crimson `#D71440`. Everything has square corners, no shadows, and 1px rules between stories. Max width 1160px with a 300px right rail. Buttons are black rectangles with white uppercase text.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-red: #EC1C24;
  --brand-yellow: #EEE809;
  --brand-yellow-tint: #F3F5CB;
  --brand-green: #3D8247;
  --brand-vip: #D71440;
  --brand-blue: #417EF4;
  --brand-bluewood: #243842;
  --brand-link: #0066CC;
  --brand-hover: #595959;
  --brand-grey-dark: #6A6A6A;
  --brand-grey: #8C8C8C;
  --brand-grey-light: #E6E6E6;
  --brand-border: #CCCCCC;
  --brand-surface: #F7F7F7;
  --brand-grey-darkest: #323232;
  --brand-caption-rule: #C4CACE;
  --brand-font-display: "Owners", "Archivo", Helvetica, sans-serif;
  --brand-font-body: "IBM Plex Serif", Georgia, serif;
  --brand-font-sans: "IBM Plex Sans", Arial, sans-serif;
  --brand-font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --brand-font-caption: "neue-haas-grotesk-text", "Inter", Helvetica, sans-serif;
  --brand-radius: 0;
  --brand-max-width: 1160px;
  --brand-sticky-nav: 90px;
  --brand-line-small: 1.1;
  --brand-line-normal: 1.35;
  --brand-line-copy: 1.5;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Variety.

---
name: The Guardian
shortName: Guardian
slug: the-guardian
url: https://theguardian.com
category: News
tagline: "Navy masthead, yellow accents, Guardian Egyptian type and colour-coded sections."
updated: 2026-11-16
appStoreId: 409128287
logoBackground: "#052962"
theme: light
colors:
  - name: Guardian Blue
    hex: "#052962"
    role: Masthead, logo field, primary buttons, brand surfaces
  - name: Guardian Yellow
    hex: "#FFE500"
    role: Support and subscribe CTAs, highlights, menu button
  - name: News Red
    hex: "#C70000"
    role: News pillar kickers, live labels, errors
  - name: Opinion Orange
    hex: "#C74600"
    role: Opinion pillar kickers and headlines
  - name: Sport Blue
    hex: "#0077B6"
    role: Sport pillar, links, focus ring
  - name: Culture Brown
    hex: "#866D50"
    role: Culture pillar kickers
  - name: Lifestyle Pink
    hex: "#BB3B80"
    role: Lifestyle pillar kickers
  - name: Ink
    hex: "#121212"
    role: Headlines and body text
  - name: Masthead Dark
    hex: "#041F4A"
    role: Top bar above the masthead
  - name: Nav Rule
    hex: "#506991"
    role: Dividers inside the blue masthead
  - name: Neutral 46
    hex: "#707070"
    role: Bylines, timestamps, secondary text
  - name: Neutral 86
    hex: "#DCDCDC"
    role: Rules between cards and sections
  - name: Neutral 97
    hex: "#F6F6F6"
    role: Subtle panels, live blog background
  - name: White
    hex: "#FFFFFF"
    role: Page background
fonts:
  display:
    family: "GH Guardian Headline"
    fallback: "Source Serif 4"
    weights: [300, 500, 700]
  body:
    family: "Guardian Text Egyptian"
    fallback: "Source Serif 4"
    weights: [400, 700]
typeScale:
  - { role: Feature headline, size: 50, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Article headline, size: 42, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: Lead card headline, size: 34, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: Card headline, size: 20, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: Standfirst, size: 20, weight: 300, lineHeight: 1.3, tracking: "0" }
  - { role: Article body, size: 17, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Sans label, size: 14, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Metadata, size: 12, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 0, md: 4, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#121212"
  muted: "#707070"
  border: "#DCDCDC"
  accent: "#052962"
  accentText: "#FFFFFF"
  radius: 999
  buttonStyle: pill
---

# The Guardian

## 1. Visual Theme & Atmosphere

The Guardian site (built on its open-source "Source" design system and the "DCR" rendering app) looks like a modern broadsheet. A deep navy masthead with the white serif "The Guardian" wordmark sits on top; below it, a white page carries a dense grid of stories divided by thin grey rules. Colour is functional: every story belongs to a pillar (News, Opinion, Sport, Culture, Lifestyle), and the pillar colour tints the small kicker that precedes each headline.

What makes it recognisable:

- **The navy masthead.** `#052962` field, white wordmark at the right on desktop, a yellow `#FFE500` "Support us" button and a yellow round menu button.
- **Guardian Egyptian type.** Custom slab-influenced headline and text faces with a very large type family, used at Medium 500 for most headlines and Light 300 for standfirsts.
- **Pillar colour kickers.** "Live" in red, "Opinion" in orange, "Sport" in blue, set in the headline face just before the headline text, often followed by a slash.
- **Container grid with thin rules.** Each front is a stack of "containers": a title column on the left, cards to the right, separated by 1px `#DCDCDC` lines rather than gaps or shadows.
- **Flat surfaces.** No shadows, few rounded corners, except pill-shaped buttons.

Mood words: editorial, open, structured, warm, serious.

## 2. Color Palette & Roles

Values below are read from the live theguardian.com CSS variables on 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Guardian Blue (brand 400) | `#052962` | Masthead, primary buttons (`--button-background-primary`), newsletter card headlines |
| Masthead Dark | `#041F4A` | Top bar above the masthead |
| Nav Rule | `#506991` | Vertical dividers and lines inside the masthead |
| Guardian Yellow (brand alt 400) | `#FFE500` | Reader revenue CTAs, menu button, byline highlight, callouts |
| Yellow hover | `#FFD900` | Hover for yellow buttons |
| Ink (neutral 7) | `#121212` | Headlines, article text |
| Neutral 20 | `#333333` | Secondary titles |
| Neutral 46 | `#707070` | Bylines, timestamps, ad labels |
| Neutral 86 | `#DCDCDC` | Rules, borders |
| Neutral 97 | `#F6F6F6` | Panels, accordions, live blog background |
| White | `#FFFFFF` | Page background |

### Pillar colours

| Pillar | Main | Dark | Use |
|---|---|---|---|
| News | `#C70000` | `#8B0000` | Kickers, live labels, "Breaking" |
| Opinion | `#C74600` | `#8D2700` (approximate) | Kickers and opinion headlines |
| Sport | `#0077B6` | `#004E7C` | Kickers, links, focus |
| Culture | `#866D50` | `#6B5840` | Kickers |
| Lifestyle | `#BB3B80` | `#7D0068` | Kickers |
| Labs (paid content) | `#0C7A73` | `#09615B` | Sponsored content |

### Semantic colors

| State | Value | Use |
|---|---|---|
| Live | `#C70000` fill, white text, pulsing dot | Live blog kicker and badge |
| Live pill dot | `#FF5943` | Bullet inside the "Live" pill |
| Focus | `box-shadow: 0 0 0 3px #0077B6` | Keyboard focus everywhere |
| Error | `#C70000` text | Form errors |
| Success | `#22874D` | Confirmation states |

### Dark mode

The site and apps support dark mode. Backgrounds go to `#1A1A1A` with `#121212` behind panels, text to `#DCDCDC` or `#FFFFFF`, rules to `#333333`, and pillar colours shift to lighter tints (news red to about `#FF5943`, sport to `#00B2FF`). The masthead stays navy.

## 3. Typography

**Families:** the Guardian Egyptian family by Paul Barnes and Christian Schwartz (Commercial Type), commissioned for the 2005 Berliner redesign and still in use:

- **GH Guardian Headline** (Light, Regular, Medium, Bold, plus italics) for headlines, kickers and standfirsts.
- **Guardian Text Egyptian** for article body text.
- **Guardian Text Sans** for UI, captions, labels and data.

**Licensing:** proprietary. Free substitutes: **Source Serif 4** for both serif roles (use 500 for headlines), **Open Sans** or **Inter** for the sans.

```css
--font-headline: "GH Guardian Headline", "Source Serif 4", Georgia, serif;
--font-body: "GuardianTextEgyptian", "Guardian Text Egyptian Web", "Source Serif 4", Georgia, serif;
--font-sans: "GuardianTextSans", "Guardian Text Sans Web", "Open Sans", Helvetica, Arial, sans-serif;
```

### Scale (from Source tokens)

| Role | Family | Size / line | Weight |
|---|---|---|---|
| Feature or interview headline | Headline | 50px / 1.15 (70px on full-bleed feature pages) | 700 or 300 |
| Article headline | Headline | 42px desktop, 28px mobile / 1.15 | 500 |
| Lead card headline | Headline | 34px / 1.15 | 500 |
| Medium card | Headline | 24px / 1.15 | 500 |
| Standard card | Headline | 17-20px / 1.15 | 500 |
| Standfirst | Headline | 20px / 1.3 | 300 (news) or 500 |
| Article body | Text Egyptian | 17px / 1.4 | 400 |
| Captions | Text Sans | 14px / 1.3 | 400 |
| Labels, buttons | Text Sans | 15-17px / 1.3 | 700 |
| Metadata | Text Sans | 12px / 1.3 | 400 |

Headline steps are 17, 20, 24, 28, 34, 42, 50 and 70px. Body steps are 15 and 17px. Sans steps are 12, 14, 15, 17, 20 and 24px.

### Rules

- Sentence case headlines with no full stop.
- Kickers sit inline before the headline in the pillar colour, separated by a slash or a line break ("Live / ...").
- Opinion pieces may set the headline in italic Light and show the columnist's cut-out portrait.
- Body text uses old-style figures by default in Text Egyptian; data tables switch to the sans with lining, tabular figures.
- Drop caps (headline font, about 4 lines tall, pillar colour) open features and long reads.

## 4. Logo & Brand Mark

The wordmark is "The Guardian" in two lines of a heavy Guardian Egyptian cut, "The" stacked above "Guardian", introduced with the 2018 tabloid redesign. The app icon and social avatar use a single "G" from the same lettering.

- **Color versions:** white on Guardian Blue `#052962` (website masthead, default), Guardian Blue or black on white (print and partner use).
- **Clear space:** the height of the "G" bowl on all sides.
- **Minimum size:** 120px wide on screen.
- **App icon:** white "G" on Guardian Blue.

Misuse:

- Do not set the wordmark in one line or re-space the two lines.
- Do not recolour it with pillar colours or yellow.
- Do not place it on photos without the navy field.
- Do not recreate it in another serif.

## 5. Components

### Masthead and navigation

- Top bar `#041F4A`, 30px, with edition switcher, "Print subscriptions", "Sign in" in white 14px sans.
- Main masthead `#052962`: on the left a yellow "Support the Guardian" block (headline font, 20-24px) with a yellow pill "Support us" button; the white wordmark on the right, about 300px wide on desktop.
- Pillar nav row: "News, Opinion, Sport, Culture, Lifestyle" in white 22-24px headline 500, separated by 1px `#506991` vertical rules; hover turns text `#FFE500` (`--masthead-nav-link-text-hover`). The active pillar shows a coloured bar along its top edge.
- Subnav: a white row of section links in 14-15px sans, ink.
- Menu ("veggie burger"): a 42px yellow `#FFE500` circle with a navy three-line icon.

### Fronts and cards

A front is a stack of containers. Each container has a title column (headline font, 20-24px, pillar colour or ink) and a card area separated by 1px `#DCDCDC` rules.

- Cards: image on top (5:3 or 5:4), kicker plus headline below, optional standfirst, then a sans meta row (age in `#707070` with a small clock icon, comment count).
- No card borders and no shadows; 1px vertical rules between columns, 1px top rule above each row.
- Opinion cards show the columnist's cut-out photo at the bottom right and a large quotation mark in orange.
- Live cards use a red `#C70000` background with white headline text on some fronts.

```css
.gu-card { border-top: 1px solid #DCDCDC; padding: 4px 0 12px; color: #121212; }
.gu-card .kicker { color: #C70000; font: 700 20px/1.15 var(--font-headline); }
.gu-card .headline { font: 500 20px/1.15 var(--font-headline); }
.gu-card .meta { font: 400 12px/1.3 var(--font-sans); color: #707070; }
```

### Buttons

Source buttons are pill-shaped.

| Variant | Background | Text | Border | Height |
|---|---|---|---|---|
| Primary | `#052962` | `#FFFFFF` | none | 44px (36px small) |
| Reader revenue | `#FFE500` | `#052962` | none | 44px |
| Secondary | `#C1D8FC` (approximate) | `#052962` | none | 44px |
| Tertiary | transparent | `#052962` | 1px `#052962` | 44px |
| Subdued | transparent | `#052962`, underlined | none | auto |

All: radius 999px, 17px Text Sans 700, padding 0 20px, optional trailing arrow icon. Hover: primary to `#234B8A` (approximate), yellow to `#FFD900`. Focus: `0 0 0 3px #0077B6`.

### Article page

- Left meta column on wide screens (from 1140px): byline with author photo, date, share buttons and comment count stacked in 14px sans.
- Kicker and headline at 42px 500; standfirst at 20px headline Light 300, ink.
- Byline: author name in the pillar colour, bold, sometimes on a yellow `#FFE500` highlight on features.
- Body: Text Egyptian 17/1.4, max about 620px, paragraphs separated by 12px.
- Pull quotes: headline font 500 at 20-24px in the pillar colour, preceded by a large quotation mark glyph, set in the left or right margin on wide screens.
- Captions: 14px sans `#707070` with a small triangle icon pointing at the image, and a "Photograph: Agency" credit in the same line.
- Inline links: pillar-coloured text with a 1px `#DCDCDC` underline that turns pillar-coloured on hover.

### Live blog

- Header block in the pillar colour (red for news) with white headline and a pulsing "Live" pill.
- "Key events" list in a collapsible panel on `#F6F6F6`.
- Posts on white blocks with a 1px top rule, timestamp ("2h ago", then "14.32 GMT") in 12px sans `#545454`, an optional bold headline and body text.
- "Pinned post" with a coloured border; new-post toast at the top: "3 new updates" pill.

### Inputs and forms

44px tall, 2px `#707070` border, radius 4px, 17px sans. Focus ring `0 0 0 3px #0077B6`. Error: border and message in `#C70000` with a warning icon.

### Newsletters

Newsletter cards: image, headline in `#052962`, frequency label ("Every weekday") with a clock icon, description, and a navy pill "Sign up" button. Inline sign-up blocks in articles use `#F6F6F6` with a yellow accent bar (approximate).

### Reader revenue epic

The end-of-article appeal sits on `#F6F6F6` with a yellow top border, headline font copy, a ticker or a highlighted sentence in `#FFE500`, and yellow plus navy pill buttons.

## 6. Layout & Spacing

- **Breakpoints (Source):** mobile 320, mobileMedium 375, mobileLandscape 480, phablet 660, tablet 740, desktop 980, leftCol 1140, wide 1300px.
- **Max width:** 1300px. The article column is about 620px; the right column for ads is 300px.
- **Grid:** 4 columns on mobile, 12 on tablet, 14 on desktop, 16 on wide (60px columns, 20px gutters).
- **Spacing tokens:** 4, 8, 12, 16, 20, 24, 32px and up. 20px gutters, 10-12px inner card padding.
- **Density:** high on fronts, comfortable on articles.

## 7. Depth, Elevation & Motion

- No shadows. Depth is shown with rules, background tints (`#F6F6F6`) and the navy masthead.
- Popovers and dropdowns use a 1px border rather than elevation.
- Motion: menu slides from the left (about 250ms ease-out), the live pill dot pulses, carousels scroll horizontally with snap.
- Hover on cards underlines the headline; there is no lift or scale.

## 8. Iconography & Imagery

- **Icons:** Source icon set, 24px, solid fills with rounded joins, ink or white on navy.
- **Photography:** editorial, full colour, often wide and atmospheric; 5:3 is the default crop.
- **Opinion cut-outs:** columnist portraits cut out from their background, set on the card colour.
- **Illustration:** commissioned for long reads and opinion, often bold and painterly.
- **Graphics:** charts use pillar colours, Text Sans labels and light rules.

## 9. Voice & Microcopy

Direct, human, a little informal in UI copy, serious in news.

- Nav: "News", "Opinion", "Sport", "Culture", "Lifestyle".
- Buttons: "Support us", "Sign in", "Sign up", "Show more", "View all comments".
- Meta: "2h ago", "Last modified on Mon 16 Nov 2026 10.12 GMT" (times with a full stop separator).
- Live: "Live", "Key events", "Show key events only", "Updated 4m ago".
- Captions end with "Photograph: Name/Agency".

## 10. Do's and Don'ts

**Do**

- Put the white wordmark on a `#052962` masthead.
- Use the headline face at 500 for headlines and 300 for standfirsts.
- Colour kickers by pillar and keep headline text ink.
- Separate content with 1px `#DCDCDC` rules.
- Use yellow `#FFE500` only for support CTAs, the menu button and highlights.
- Use pill buttons and a 3px `#0077B6` focus ring.

**Don't**

- Don't add drop shadows or card borders on all sides.
- Don't use pillar colours for large backgrounds except live and special containers.
- Don't mix pillar colours within one card.
- Don't set body copy in the sans.
- Don't round image corners.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of The Guardian website. Navy masthead `#052962` with a white serif wordmark, a `#041F4A` top bar and white pillar nav links that turn `#FFE500` on hover. White page, ink `#121212` text, `#707070` metadata, 1px `#DCDCDC` rules between cards and columns, no shadows. Headlines in `"GH Guardian Headline", "Source Serif 4", Georgia, serif` at weight 500, line-height 1.15 (20px on cards, 34px for leads, 42px on articles). Before each headline, a kicker in the pillar colour: news `#C70000`, opinion `#C74600`, sport `#0077B6`, culture `#866D50`, lifestyle `#BB3B80`. Standfirsts in the same face at 20px weight 300. Body in a serif at 17px/1.4, UI and captions in a sans (`"Guardian Text Sans", "Open Sans", sans-serif`) at 12-17px. Buttons are 44px pills: navy with white text, or yellow `#FFE500` with navy text for support. Focus ring `0 0 0 3px #0077B6`. Layout max 1300px with 20px gutters, article column 620px.

```css
:root {
  --brand-blue: #052962;
  --brand-blue-dark: #041F4A;
  --brand-yellow: #FFE500;
  --brand-news: #C70000;
  --brand-opinion: #C74600;
  --brand-sport: #0077B6;
  --brand-culture: #866D50;
  --brand-lifestyle: #BB3B80;
  --brand-ink: #121212;
  --brand-neutral-46: #707070;
  --brand-neutral-86: #DCDCDC;
  --brand-neutral-97: #F6F6F6;
  --brand-bg: #FFFFFF;
  --brand-font-headline: "GH Guardian Headline", "Source Serif 4", Georgia, serif;
  --brand-font-body: "Guardian Text Egyptian", "Source Serif 4", Georgia, serif;
  --brand-font-sans: "Guardian Text Sans", "Open Sans", Helvetica, Arial, sans-serif;
  --brand-radius-button: 999px;
  --brand-radius-input: 4px;
  --brand-rule: 1px solid #DCDCDC;
  --brand-focus: 0 0 0 3px #0077B6;
  --brand-max-width: 1300px;
  --brand-gutter: 20px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Guardian News & Media.

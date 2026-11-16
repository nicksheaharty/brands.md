---
name: The Economist
shortName: Economist
slug: the-economist
url: https://economist.com
category: News
tagline: "Red box logo, Economist Serif headlines, red rules and a calm, newspaper-like grid."
updated: 2026-11-16
appStoreId: 1239397626
logoBackground: "#E3120B"
theme: light
colors:
  - name: Economist Red
    hex: "#E3120B"
    role: Logo box, red rule above headlines, brand flag
  - name: London 5
    hex: "#0D0D0D"
    role: Headlines and primary text
  - name: White
    hex: "#FFFFFF"
    role: Page background, logo lettering
  - name: Chicago 30
    hex: "#1F2E7A"
    role: Primary CTA fill, link hover, active controls
  - name: Chicago 45
    hex: "#2E45B8"
    role: Link text, focus borders, CTA outline text
  - name: Los Angeles 95
    hex: "#F5F4EF"
    role: Warm canvas for edition and promo bands
  - name: London 10
    hex: "#1A1A1A"
    role: Footer background, body text
  - name: London 35
    hex: "#595959"
    role: Secondary text, dates, captions
  - name: London 85
    hex: "#D9D9D9"
    role: Standard 1px borders and rules
  - name: London 95
    hex: "#F2F2F2"
    role: Subtle fills, secondary buttons
  - name: Chicago 90
    hex: "#D6DBF5"
    role: Focus background, link focus highlight
  - name: Red 42
    hex: "#CC100A"
    role: Red pressed and hover
  - name: Red 60
    hex: "#F6423C"
    role: Red on dark backgrounds
  - name: Tokyo 45
    hex: "#C91D42"
    role: Error status
  - name: Shanghai 45
    hex: "#62C91D"
    role: Success status
  - name: New York 55
    hex: "#F9C31F"
    role: Highlight and chart accent
fonts:
  display:
    family: "Economist Serif"
    fallback: "Source Serif 4"
    weights: [400, 500, 700]
  body:
    family: "Economist Serif"
    fallback: "Source Serif 4"
    weights: [400, 700]
typeScale:
  - { role: Display, size: 52, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: Headline 2 (article), size: 40, weight: 400, lineHeight: 1.1, tracking: "0" }
  - { role: Headline 1, size: 34, weight: 400, lineHeight: 1.18, tracking: "0" }
  - { role: Title 3, size: 23, weight: 500, lineHeight: 1.22, tracking: "0" }
  - { role: Title 1 (card), size: 17, weight: 500, lineHeight: 1.18, tracking: "0" }
  - { role: Body 2 (article), size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body 1, size: 17, weight: 400, lineHeight: 1.41, tracking: "0" }
  - { role: Label 2, size: 15, weight: 500, lineHeight: 1.33, tracking: "0" }
radii: { sm: 0, md: 4, lg: 8, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32, 48, 56, 64]
shadows:
  - { name: Offset small, value: "0 4px 8px 0 rgba(13,13,13,0.15)" }
  - { name: Offset medium, value: "0 4px 16px 0 rgba(13,13,13,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F4EF"
  text: "#0D0D0D"
  muted: "#595959"
  border: "#D9D9D9"
  accent: "#E3120B"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# The Economist

## 1. Visual Theme & Atmosphere

The Economist looks like a well-edited weekly printed on good paper. White pages, near-black serif headlines, sans labels, thin grey rules, and one unmistakable red: the rectangular logo box and the short red bar that sits above headlines and section titles. Everything else is quiet.

What makes it recognisable:

- **The red box.** "The Economist" in white serif inside a solid `#E3120B` rectangle. The square "E" monogram is used for the app and social avatars.
- **Red flag rules.** A short horizontal red bar (about 40-64px wide, 4-8px tall) marks section headers, cover stories and the masthead area. It is the strongest graphic device after the logo.
- **Serif first.** Headlines and body use Economist Serif at regular weight (400). Hierarchy comes from size and position, not boldness.
- **Fly titles and rubrics.** Articles have a small sans fly title above the headline (the section or topic) and a serif rubric (one-sentence summary) below it.
- **City-named color system.** The design system ("Marber", tokens `--mb-*`) names colors after cities: London greys, Chicago blues, Los Angeles warm canvas, Tokyo reds, Hong Kong greens and more. Chart colors come from these ramps.

Density is moderate and very orderly: a strict grid, consistent rules, lots of text, modest images.

## 2. Color Palette & Roles

All hex values come from production Marber tokens.

| Name | Token | Hex | Role |
|---|---|---|---|
| Economist Red | `brand-red` | `#E3120B` | Logo, red flag rules, brand moments |
| Red 42 | `brand-red-42` | `#CC100A` | Red hover and pressed |
| Red 60 | `brand-red-60` | `#F6423C` | Red on dark, accent borders inverse |
| Red 95 | `brand-red-95` | `#FEE7E7` | Light red tint |
| London 5 | `greyscale-london-5` | `#0D0D0D` | Primary text, headlines, heavy borders |
| London 10 | `greyscale-london-10` | `#1A1A1A` | Footer, body text |
| London 20 | `greyscale-london-20` | `#333333` | Inverse borders |
| London 35 | `greyscale-london-35` | `#595959` | Secondary text |
| London 40 | `greyscale-london-40` | `#666666` | Tertiary text |
| London 70 | `greyscale-london-70` | `#B3B3B3` | Disabled, outline borders |
| London 85 | `greyscale-london-85` | `#D9D9D9` | Standard 1px border |
| London 95 | `greyscale-london-95` | `#F2F2F2` | Subtle fills |
| London 100 | `greyscale-london-100` | `#FFFFFF` | Page |
| Chicago 20 | `base-chicago-20` | `#141F52` | CTA active |
| Chicago 30 | `base-chicago-30` | `#1F2E7A` | Primary CTA fill, hover text |
| Chicago 45 | `base-chicago-45` | `#2E45B8` | Links, CTA outline |
| Chicago 55 | `base-chicago-55` | `#475ED1` | Info status |
| Chicago 90 | `base-chicago-90` | `#D6DBF5` | Focus highlight |
| Chicago 95 | `base-chicago-95` | `#EBEDFA` | CTA hover on light |
| Los Angeles 95 | `canvas-los-angeles-95` | `#F5F4EF` | Warm canvas (edition band) |
| Los Angeles 90 | `canvas-los-angeles-90` | `#EBE9E0` | Deeper warm canvas |

### Status

| State | Strong | Light |
|---|---|---|
| Error (Tokyo) | `#C91D42` | `#F9D2DB` |
| Success (Shanghai) | `#62C91D` | `#E2F9D2` |
| Warning (Singapore) | `#F97A1F` | `#FEE1CD` |
| Information (Chicago) | `#475ED1` | `#D6DBF5` |

### Chart accents

Hong Kong `#1DC9A4`, New York `#F9C31F`, Singapore `#F97A1F`, Tokyo `#C91D42`, Chicago `#2E45B8`. Charts sit on white or the Paris canvas `#EFF5F5` with a red tag at top left.

### Dark mode

The apps offer a dark theme: near-black `#0D0D0D` background, `#FFFFFF` text, `#B3B3B3` secondary text, borders `#333333`, red shifts to `#F6423C` (approximate mapping from the inverse tokens). The website is light by default.

## 3. Typography

Marber defines these typefaces (all proprietary):

| Token | Family | Use |
|---|---|---|
| `--mb-typeface-serif` | **EconomistSerif** | Headlines, rubrics, body |
| `--mb-typeface-serif-display` | **EconomistSerifDisplay** | Large display headlines |
| `--mb-typeface-sans` | **EconomistSans** | Fly titles, labels, nav, buttons |
| `--mb-typeface-sans-display` | **EconomistSansHeadline** | Condensed display for special formats |
| `--mb-typeface-slab-serif-display` | **SundayClarendon** | Occasional special covers |

Free fallbacks: **Source Serif 4** for Economist Serif, **Fira Sans** for Economist Sans (similar humanist proportions), **Oswald** for the condensed headline face.

```css
--mb-typeface-serif: "EconomistSerif", "Source Serif 4", Georgia, "Times New Roman", serif;
--mb-typeface-sans: "EconomistSans", "Fira Sans", system-ui, Helvetica, Arial, sans-serif;
```

### Type scale (`--mb-typescale-*`)

13, 15, 17, 20, 23, 26, 30, 34, 40, 46, 52, 60, 68, 80, 92px.

### Type styles

| Style | Size | Leading | Typical use |
|---|---|---|---|
| Display 1 | 52px | 60px | Feature and cover headlines |
| Headline 3 | 46px | 52px | Large article headline |
| Headline 2 | 40px | 44px | Article headline desktop |
| Headline 1 | 34px | 40px | Edition headline, lead story |
| Title 5 | 30px | 36px | Section lead card |
| Title 3 | 23px | 28px | Card headline |
| Title 1 | 17px | 20px | Small card headline |
| Body 2 | 20px | 28px | Article body, rubric |
| Body 1 | 17px | 24px | Descriptions |
| Label 3 | 17px | 24px | Buttons |
| Label 2 | 15px | 20px | Fly titles, buttons |
| Label 1 | 13px | 16px | Captions, dates |

Weights: `regular 400` for headlines and body, `medium 500` for card titles and labels, `bold 700` for directional links.

### Rules

- Headlines in sentence case, regular weight serif.
- Fly titles are small sans in sentence case (the edition fly is set lowercase).
- Rubrics (decks) are serif, one sentence, often witty.
- Body text uses old-style figures in running text; lining figures in charts and tables.
- Small caps appear for abbreviations in body copy (Economist Serif SC is loaded for this).

## 4. Logo & Brand Mark

The logo is the words **The Economist** in white serif lettering on a solid **Economist Red `#E3120B`** rectangle, about 2:1. A one-line "signature" variant sets the name in red serif with no box; the sticky header uses it. The **monogram** is a white serif "E" on a red square.

- **Versions:** red box (primary), red signature on white, white signature on dark, square monogram.
- **Clear space:** at least the height of the "E" around the box.
- **Minimum size:** box logo about 64px wide on screen; monogram 24px.

Misuse:

- Do not change the red or place the box on another red.
- Do not set "The Economist" in a font to imitate the logo.
- Do not round the corners of the box.
- Do not add shadows or outlines.

## 5. Components

### Masthead and navigation

- White header with the red box logo top left (160 x 80px on desktop), section menu in Economist Sans 15-17px black: "Weekly edition", "The world in brief", "Search", then account links and a subscribe CTA.
- Mobile: the square monogram (56px) replaces the logo.
- Sticky nav: compact white bar with the red signature logo (190 x 22px), menu icon and CTA; `--mb-border-standard` bottom border.
- Footer: `#1A1A1A` background, white text, sans links in columns.

### Buttons and CTAs

Marber buttons are small, square-cornered and sans.

| Variant | Background | Text | Border | Padding |
|---|---|---|---|---|
| CTA primary | `#1F2E7A` | `#FFFFFF` 17px/500 | none | 10px 32px |
| CTA secondary | `#FFFFFF` | `#2E45B8` | 1px `#2E45B8` | 10px 32px |
| Button default | `#F2F2F2` | `#0D0D0D` 15px | none | 6px 12px |
| Button inverse | `#333333` | `#FFFFFF` | 1px `#B3B3B3` | 6px 12px |
| Directional link | none | `#0D0D0D` 700 with arrow | none | 0 |

States: primary hover `#141F52`; secondary hover fill `#EBEDFA`; focus background `#D6DBF5` and outline `#0D0D0D`; disabled text `#B3B3B3`. Radius is 0 for CTAs and 4px for small buttons (approximate).

### Red flag rule (signature)

```css
.flag::before { content: ""; display: block; width: 40px; height: 6px; background: #E3120B; margin-bottom: 12px; }
```

Above section headings, cover-story labels and newsletter titles.

### Teasers (cards)

- **Lead teaser:** image 16:9 or 3:2, fly title in Economist Sans 15px/500 (often red for the section), headline Headline 1 serif 34px/400, rubric Body 1 serif 17px in `#333333`.
- **Standard teaser:** fly title, Title 3 headline 23px/500, rubric, optional thumbnail. No borders; teasers are separated by 1px `#D9D9D9` rules and a 16px gutter rule between columns.
- **List teaser:** fly title and headline only, stacked with rules.

### Article page

- Fly title (sans, 15-17px) above the headline, often with the section name.
- Headline 40-46px serif 400, rubric 20px serif in `#333333` beneath.
- Byline-free: dateline row with date in Label 1 sans `#595959` and "Share", "Save" and "Listen" icon buttons.
- Lead image with caption and credit in Label 1 sans `#595959`.
- Body 20px/28px serif `#0D0D0D`, about 620-680px wide. The first word or paragraph opens with a large drop cap and small caps lead-in.
- Subheads in sans 17px/700.
- Articles end with a small ■ end mark in red (approximate).
- **Pull quotes** are rare; when used they are serif 26-30px with a red top rule.
- Charts sit in the column with a red tag at top left, sans titles and a source line in 13px.

### The world in brief and live

"The world in brief" is a dense list of short items in serif 17px separated by rules. Breaking and live formats use a red "Live" fly title and timestamped items; there are no flashing banners.

### Newsletters

Newsletter cards on the warm canvas `#F5F4EF`: red flag, newsletter name in serif 23px, description in 17px, "Sign up" CTA in Chicago blue.

### Forms

Inputs 48px tall, 1px `#B3B3B3` border, 0-4px radius, sans 17px. Focus: border `#2E45B8`, background `#EBEDFA`. Error text and border `#C91D42`.

## 6. Layout & Spacing

- **Grid:** 6 columns on mobile, 8 on tablet, 12 on desktop and 16 on wide (`--mb-grid-columns`).
- **Gutters:** 12px (xs), 16px (sm), 24px (md), 32px (lg). Margins 12px mobile up to 32px desktop.
- **Breakpoints:** 360, 480, 600, 834, 960, 1096, 1280, 1424px (`--mb-mq-breakpoint-1..8`).
- **Spacing:** 2, 4, 8, 12, 16, 24, 32, 48, 56, 64px (`3xs` to `4xl`).
- **Front page:** blocks separated by 56px (`--en-frontpage-layout-block-gap`), each topped with a heavy 3px black or red rule.
- **Article column:** about 680px centred, images can break out to the wider grid.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| `shadow-offset-sm` | `0 4px 8px 0 rgba(13,13,13,0.15)` |
| `shadow-offset-md` | `0 4px 16px 0 rgba(13,13,13,0.15)` |
| Border standard | `1px solid #D9D9D9` |
| Border emphasised | `1px solid #0D0D0D` |
| Border heavy | `3px solid #0D0D0D` |

Mostly flat. Rules do the work of elevation. Motion is minimal: color transitions around 150-200ms, menus open without bounce.

## 8. Iconography & Imagery

- **Icons:** 24px line icons with a 2px stroke, square ends, in `#0D0D0D` (search, menu, share, bookmark, headphones).
- **Covers:** the weekly cover is the signature image: bold illustration or photo with a large cover line, displayed as a portrait card on the edition page.
- **Illustration:** editorial illustration and photo collage, often conceptual.
- **Photography:** agency photos, sober crops, no overlays.
- **Charts:** the "Graphic detail" style: red tag top left, thin gridlines, sans labels, Marber city palette.

## 9. Voice & Microcopy

Concise, precise and dry. UI copy is minimal.

- Headlines short, often with wordplay; rubrics explain in one sentence.
- Sentence case for buttons and nav.
- No bylines on most articles; the voice is collective.

Sample strings:

- Nav: "Weekly edition", "The world in brief", "Search"
- CTA: "Subscribe", "Log in", "Sign up"
- Fly title: "Free exchange", "Lexington", "Leaders"
- Dateline: "Nov 16th 2026"

## 10. Do's and Don'ts

**Do**

- Use the red box logo and short red flag rules as the only red elements.
- Set headlines and body in a regular-weight serif; use size for hierarchy.
- Pair every headline with a sans fly title above and a serif rubric below.
- Separate content with thin grey rules and heavy section rules.
- Use the Marber city palettes for charts.

**Don't**

- Don't bold headlines or put them in caps.
- Don't round corners on CTAs or the logo.
- Don't use red for buttons or links; links are Chicago blue.
- Don't use drop shadows on teasers.
- Don't crowd the page with images; text leads.

## 11. Agent Prompt Guide

> Build this UI in the style of The Economist. White page, near-black text `#0D0D0D`. Logo: white serif "The Economist" in a solid red `#E3120B` rectangle, top left. Headlines and body in a regular-weight serif ("EconomistSerif", fallback "Source Serif 4"), labels and fly titles in a humanist sans ("EconomistSans", fallback "Fira Sans"). Every teaser has a small sans fly title, a serif headline (34px lead, 23px standard, weight 400-500) and a one-line serif rubric in `#333333`. Article body 20px/28px serif in a 680px column. Mark section headers with a short red bar (40px x 6px) and heavy 3px rules. Thin 1px `#D9D9D9` rules between items. Primary CTA is square-cornered `#1F2E7A` with white text; links `#2E45B8`. Warm canvas `#F5F4EF` for edition bands. 12-column grid with 24-32px gutters, spacing 4/8/12/16/24/32/48/56px. Flat, no card shadows.

```css
:root {
  --brand-red: #E3120B;
  --brand-red-hover: #CC100A;
  --brand-red-on-dark: #F6423C;
  --brand-ink: #0D0D0D;
  --brand-ink-2: #1A1A1A;
  --brand-grey-20: #333333;
  --brand-grey-35: #595959;
  --brand-grey-70: #B3B3B3;
  --brand-grey-85: #D9D9D9;
  --brand-grey-95: #F2F2F2;
  --brand-white: #FFFFFF;
  --brand-blue-cta: #1F2E7A;
  --brand-blue-active: #141F52;
  --brand-blue-link: #2E45B8;
  --brand-blue-focus: #D6DBF5;
  --brand-blue-tint: #EBEDFA;
  --brand-canvas-warm: #F5F4EF;
  --brand-error: #C91D42;
  --brand-success: #62C91D;
  --brand-warning: #F97A1F;
  --brand-font-serif: "EconomistSerif", "Source Serif 4", Georgia, serif;
  --brand-font-sans: "EconomistSans", "Fira Sans", system-ui, Helvetica, Arial, sans-serif;
  --brand-border: 1px solid #D9D9D9;
  --brand-border-heavy: 3px solid #0D0D0D;
  --brand-shadow-sm: 0 4px 8px 0 rgba(13,13,13,0.15);
  --brand-shadow-md: 0 4px 16px 0 rgba(13,13,13,0.15);
  --brand-gutter: 24px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by The Economist.

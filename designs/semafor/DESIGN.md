---
name: Semafor
slug: semafor
url: https://semafor.com
category: News
tagline: "Cream newsprint, a bold serif wordmark and articles split into labelled Semaform sections."
updated: 2026-11-16
logoBackground: "#F8F5D7"
theme: light
colors:
  - name: Semafor Cream
    hex: "#F8F5D7"
    role: Page background, theme color, icon light half
  - name: Ink
    hex: "#1F1D1A"
    role: Wordmark, headlines, body text, dark buttons
  - name: Light Cream
    hex: "#FCFAE4"
    role: Raised panels, text on dark buttons
  - name: Semafor Blue
    hex: "#0E29B5"
    role: Link hover, annotation links, filled toggles
  - name: Link Blue
    hex: "#243BB5"
    role: Newsletter links and labels
  - name: Signal Navy
    hex: "#1F2B6D"
    role: Signals product titles and labels
  - name: Graphite
    hex: "#4B4A47"
    role: Secondary text, annotations
  - name: Stone
    hex: "#53524C"
    role: Footnotes, metadata
  - name: Rule Khaki
    hex: "#C3C1AE"
    role: Dividers and borders
  - name: Parchment
    hex: "#E4E2D6"
    role: Section bands, newsletter tiles
  - name: Rust
    hex: "#BC4D2C"
    role: Accent for vertical labels and illustrations
  - name: Slate Teal
    hex: "#3A6D78"
    role: Accent for verticals and focus outlines
  - name: Highlight Yellow
    hex: "#FFE7A4"
    role: Highlighted text and callouts
  - name: Headline Hover
    hex: "#FFFAEB"
    role: Highlighter sweep behind hovered headlines
fonts:
  display:
    family: "Feature Flat Headline"
    fallback: "Newsreader"
    weights: [300, 400, 500, 700]
  body:
    family: "Feature Flat Text"
    fallback: "Source Serif 4"
    weights: [300, 400, 700]
typeScale:
  - { role: Section title, size: 42, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Article headline, size: 34, weight: 470, lineHeight: 1.1, tracking: "0" }
  - { role: Signals title, size: 32, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Featured headline, size: 22, weight: 495, lineHeight: 1.2, tracking: "0" }
  - { role: Card headline, size: 18, weight: 470, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 18, weight: 330, lineHeight: 1.5, tracking: "0.0015em" }
  - { role: UI sans, size: 16, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Label, size: 11, weight: 400, lineHeight: 1.2, tracking: "0.02em" }
radii: { sm: 0, md: 2, lg: 15, pill: 999 }
spacing: [4, 5, 10, 12, 20, 24, 30, 40]
shadows:
  - { name: Toggle, value: "0 2px 4px rgba(0,0,0,0.25)" }
preview:
  bg: "#F8F5D7"
  surface: "#FCFAE4"
  text: "#1F1D1A"
  muted: "#4B4A47"
  border: "#C3C1AE"
  accent: "#1F1D1A"
  accentText: "#FCFAE4"
  radius: 0
  buttonStyle: solid
---

# Semafor

## 1. Visual Theme & Atmosphere

Semafor looks like a modern newspaper printed on pale cream stock. The background is a soft yellow-cream `#F8F5D7` (also the browser theme color), text is a warm near-black `#1F1D1A`, and almost everything is set in one serif family. There is very little color and almost no rounding: square buttons, hairline rules and plain type.

What makes it recognisable:

- **Cream paper.** Every page sits on `#F8F5D7`, with slightly lighter `#FCFAE4` panels and khaki rules `#C3C1AE`.
- **Bold serif wordmark.** "SEMAFOR" in heavy, high-contrast serif capitals. The square icon splits into a cream half and an ink half with a large serif "S" crossing both.
- **The Semaform.** Articles are broken into labelled sections so facts and analysis are visibly separate: "The News", "Know More", "[Reporter]'s view", "Room for Disagreement", "The View From", "Notable". Each label is a serif heading with its own small icon.
- **Feature Flat everywhere.** Commercial Type's Feature family (Headline, Text and Condensed cuts) is used as a variable font with tuned weight and optical size axes (`font-variation-settings: "wght" 470, "opsz" 30`).
- **Highlighter hovers.** Hovering a headline sweeps a pale `#FFFAEB` highlight behind it from left to right and turns the text Semafor Blue `#0E29B5`.

Density: medium. Homepage stories are text-first with small square images; articles are a narrow single column.

## 2. Color Palette & Roles

Values come from Semafor's production CSS.

| Name | Hex | Role |
|---|---|---|
| Semafor Cream | `#F8F5D7` | Page background, theme color, sticky ad header, sign-up button fill |
| Light Cream | `#FCFAE4` | Raised panels, text on ink buttons |
| Parchment | `#E4E2D6` | Bands, tiles |
| Parchment Deep | `#ECE9D2` | Alternate band |
| Rule Khaki | `#C3C1AE` | Dividers, borders |
| Warm Grey | `#9C9A92` | Disabled, faint text |
| Ink | `#1F1D1A` | Headlines, body, dark buttons, end-of-section squares |
| Ink Deep | `#1E1B15` | Body text in some templates |
| Graphite | `#4B4A47` | Secondary text, annotations |
| Stone | `#53524C` | Footnotes, metadata |
| Olive Grey | `#66655D` | Tertiary text |
| Semafor Blue | `#0E29B5` | Hover text, annotation links, filled toggle |
| Link Blue | `#243BB5` | Newsletter links, label text |
| Signal Navy | `#1F2B6D` | Signals titles and icon labels |
| Rust | `#BC4D2C` | Vertical accent |
| Slate Teal | `#3A6D78` | Vertical accent, inset outline |
| Steel Teal | `#447A8E` | Vertical accent |
| Plum | `#493B48` on `#EEE3ED` | Sponsored insights label |
| Highlight Yellow | `#FFE7A4` | Highlighted text |
| Headline Hover | `#FFFAEB` | Highlighter sweep |

### Semantic

| State | Value |
|---|---|
| Success feedback | `#F8F5D7` text on `#1F1D1A` |
| Signal label | `#243BB5` text on `#DBE7EC` |
| Sponsored | Helvetica 10px uppercase label, tinted panel |
| Live / breaking | ink label with a red or rust accent (approximate; breaking banners are rare) |

### Dark

No dark mode. Ink `#1F1D1A` panels with Light Cream text are used for buttons, success toasts and some feature bands.

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Headlines, section titles, nav | **Feature Flat Headline** | Variable weight and optical size |
| Body | **Feature Flat Text** | Regular and Bold cuts, variable |
| Compact headlines, section labels | **Feature Flat Condensed** | Regular, Medium, Bold |
| UI, labels, forms, ads | **Helvetica** | System Helvetica / Arial |

Feature is a commercial family from Commercial Type. Free fallbacks: **Newsreader** for Feature Flat Headline, **Source Serif 4** for Feature Flat Text, **Newsreader** at a narrower width or **Libre Caslon Condensed** for the condensed cut, and **Inter** for Helvetica.

```css
--brand-font-headline: FeatureFlatHeadline, Newsreader, "Times New Roman", Times, serif;
--brand-font-text: FeatureFlatText-Regular, "Source Serif 4", Georgia, serif;
--brand-font-ui: Helvetica, Inter, Arial, sans-serif;
```

### Scale (from production CSS)

| Role | Size | Weight (wght axis) | Line height | Notes |
|---|---|---|---|---|
| Vertical page title | 42px | 400 | 120% | Capitalised, 2px ink top rule on some pages |
| Article headline | 34px | 470, opsz 30 | 110% | Mobile about 28px |
| Signals title | 32px | 400 | 120% | Signal Navy |
| Article H2 / section | 24px | 400-500 | 140% | |
| Featured story headline | 22px | 495 | 120% | Highlighter hover |
| Annotation | 22px | 280, opsz 10 | 120% | Graphite |
| Card headline | 18-20px | 470, opsz 30 | 120% | Condensed Medium on some lists |
| Body | 18px | 330, opsz 10 | 27px | letter-spacing 0.025px |
| Nav title | 16px | 470 | 130% | |
| UI sans | 14-17px | 300-400 | 120% | Helvetica |
| Label | 11px | 400 Helvetica uppercase | 120% | Newsletter frequency |
| Ad label | 10px | 400 Helvetica | 1 | letter-spacing 0.02em |

### Rules

- Use the variable axes. Headlines sit around `"wght" 470, "opsz" 30`; body around `"wght" 330, "opsz" 10`.
- Headlines in sentence case. Section titles capitalised.
- Semaform labels are part of the content and always shown.
- Helvetica is only for UI chrome, forms and small labels, never for headlines.

## 4. Logo & Brand Mark

The wordmark is **SEMAFOR** in heavy serif capitals with strong contrast and bracketed serifs, in Ink `#1F1D1A` on cream or white. The square **S icon** splits the square vertically: a cream left half and an ink right half, with a large serif S whose colors invert across the split.

- **Color versions:** ink on cream (primary), ink on white, cream on ink.
- **Clear space:** at least the height of the "S" counter on all sides.
- **Minimum size:** 90px wide for the wordmark; 16px for the S icon.

Misuse:

- Do not set the wordmark in Feature or any other font.
- Do not color the wordmark blue or rust.
- Do not round the S icon's square inside the artwork.
- Do not place the wordmark on photos without a cream panel.

## 5. Components

### Masthead and navigation

- Cream header with the centred wordmark, a hamburger/drawer button on the left (`--masthead-drawer-button-top: 2px`) and "Subscribe" and sign-in on the right.
- Vertical nav below: "Politics", "Business", "Tech", "Media", "Africa", "Gulf", "Net Zero", "Security" and more, in Feature Flat Headline 16px/470.
- Mobile drawer: verticals at 24px with 4px vertical padding, pages at 16px with 10px padding.
- A 1px ink rule separates the header from content.

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary ink | `#1F1D1A` | `#FCFAE4` 20px Feature 495 | 1px `#1F1D1A` | 0 | 12px 24px |
| Sign up (inline) | `#F8F5D7` | `#1F1D1A` 16px, 0.02em tracking | 1px black | 0 | 10px 16px |
| Filled toggle | `#0E29B5` | `#F8F5D7` | none | 999px | 6px 14px |
| Outline teal | transparent | `#3A6D78` | `inset 0 0 0 1px #3A6D78` | 999px | 6px 14px |
| Text link | none | `#243BB5` Helvetica 16px/600 | none | 0 | 0 |

States: loading ink button at 50% alpha `#1F1D1A80`; hover headline links turn `#0E29B5`; focus outline 2px Semafor Blue. Toggle switches carry `0 2px 4px rgba(0,0,0,0.25)`.

### Story cards

- **Featured story:** square or 4:3 image, headline Feature Flat Headline 22px/495, byline in Helvetica 14px Stone, vertical label above.
- **List story:** headline only, 18px Condensed Medium, separated by 1px `#C3C1AE` rules.
- **Hover:** highlighter sweep:

```css
.headline {
  background: linear-gradient(#FFFAEB, #FFFAEB) no-repeat right bottom / 0 100%;
  transition: background-size .3s;
}
.story:hover .headline { color: #0E29B5; background-size: 100% 100%; background-position-x: left; }
```

### Semaform article (signature)

- Single column, max width 588px, centred on cream.
- Vertical label, headline 34px/470, then byline with author photo (40px circle) and date.
- Sections each start with a labelled heading row: a small icon plus "The News", "Know More", "[Name]'s view", "Room for Disagreement", "The View From [place]", "Notable". Heading in Feature Flat Text Bold 20px/30px, 12px left of the icon.
- Body: Feature Flat Text 18px/27px, ink, paragraphs 20px apart.
- The last block of each section ends with a small 8px ink square.
- "Notable" lists links to other outlets as bullets with outlet names in bold.
- **Pull quotes:** Feature Flat Headline 28-32px at light weight (280-330), Graphite, no quotation graphics (approximate).

### Signals

Signals is Semafor's multi-source news product. It uses Signal Navy titles (32px), a labelled source panel (`#243BB5` on `#DBE7EC`), Helvetica footnotes (14px Stone) and superscript reference numbers.

### Newsletters

Newsletter pages show each title as a tile with a wide header image, the name in Feature Flat Headline 24px/110%, an 11px uppercase Helvetica frequency label ("DAILY", "WEEKLY"), a description and a square ink "Sign up" button. A cream label strip (`background: #F8F5D7`, 5px inline padding) marks selected newsletters.

### Forms

Inputs: cream or white fill, 1px ink border, square corners, Helvetica 16px. Checkboxes are square with a cream check on ink.

## 6. Layout & Spacing

- **Article column:** 588px max (approximate 33.75-45rem in other templates).
- **Homepage container:** 1200px, wide sections up to 78rem (1248px), headings up to 88.75rem.
- **Grid:** 1 column mobile, 2-3 column story grid desktop, separated by 1px khaki rules.
- **Spacing:** 5, 10, 12, 20, 24, 30px are the recurring values; section titles take 24-30px bottom margin.
- **Breakpoints:** around 600px and 1024px (approximate).

## 7. Depth, Elevation & Motion

- Flat. Separation is all rules (1px `#C3C1AE` or ink) and background shifts between cream tones.
- The only shadow: toggles `0 2px 4px rgba(0,0,0,0.25)`.
- Motion: the 300ms highlighter sweep on headline hover, smooth scrolling (`scroll-behavior: smooth`), simple drawer slide.

## 8. Iconography & Imagery

- **Icons:** small custom glyphs for each Semaform section, drawn in ink with simple geometric shapes; 16-24px.
- **Photography:** agency photos cropped square or 4:3, sometimes duotoned or desaturated to sit on cream.
- **Illustration:** newsletter headers and verticals use flat illustrations in rust, teal, navy and cream.
- **Bullets:** custom square bullets (10px, 14px large, 5px small via `--bullet-size`).

## 9. Voice & Microcopy

Plain and structured, with the reporter's analysis clearly labelled. UI text is short.

- Headlines in sentence case.
- Section labels follow fixed patterns: "The News", "Know More", "Room for Disagreement".
- CTAs: "Sign up", "Subscribe", "Sign in", "Read more".

Sample strings:

- "Already subscribed? Sign in"
- Newsletter frequency: "DAILY", "WEEKLY"
- Section: "The View From Beijing"
- Footer: "Semafor Inc."

## 10. Do's and Don'ts

**Do**

- Put everything on cream `#F8F5D7` with ink `#1F1D1A` text.
- Use one serif family for headlines and body, with variable weight and optical size.
- Split articles into labelled sections with icons.
- Keep corners square and separation to hairline rules.
- Use the highlighter sweep on headline hover.

**Don't**

- Don't use pure white pages or pure black text.
- Don't add drop shadows or rounded cards.
- Don't use bright brand colors for buttons; ink is the action color.
- Don't set headlines in Helvetica.
- Don't merge the reporter's view into the news section.

## 11. Agent Prompt Guide

> Build this UI in the style of Semafor. Cream background `#F8F5D7`, warm ink text `#1F1D1A`, lighter cream panels `#FCFAE4`, khaki 1px rules `#C3C1AE`. Headlines in a high-contrast serif ("FeatureFlatHeadline", fallback Newsreader) at a medium weight (about 470) with 110-120% line height: article headline 34px, card headlines 18-22px. Body in a serif text face ("FeatureFlatText", fallback "Source Serif 4") 18px/27px. UI labels in Helvetica (fallback Inter), 11px uppercase for small labels. Centre a bold serif "SEMAFOR" wordmark in the header. Articles are a single 588px column split into labelled sections ("The News", "Know More", "Reporter's view", "Room for Disagreement", "The View From", "Notable"), each with a small icon and ending in an 8px ink square. Buttons are square-cornered ink `#1F1D1A` with cream text; links hover to `#0E29B5` with a pale `#FFFAEB` highlighter sweep behind the headline over 300ms. Flat, no shadows.

```css
:root {
  --brand-cream: #F8F5D7;
  --brand-cream-light: #FCFAE4;
  --brand-parchment: #E4E2D6;
  --brand-parchment-deep: #ECE9D2;
  --brand-rule: #C3C1AE;
  --brand-ink: #1F1D1A;
  --brand-graphite: #4B4A47;
  --brand-stone: #53524C;
  --brand-olive-grey: #66655D;
  --brand-blue: #0E29B5;
  --brand-link: #243BB5;
  --brand-signal-navy: #1F2B6D;
  --brand-rust: #BC4D2C;
  --brand-teal: #3A6D78;
  --brand-highlight: #FFE7A4;
  --brand-hover-sweep: #FFFAEB;
  --brand-font-headline: FeatureFlatHeadline, Newsreader, "Times New Roman", serif;
  --brand-font-text: FeatureFlatText-Regular, "Source Serif 4", Georgia, serif;
  --brand-font-ui: Helvetica, Inter, Arial, sans-serif;
  --brand-headline-axes: "wght" 470, "opsz" 30;
  --brand-body-axes: "wght" 330, "opsz" 10;
  --brand-radius: 0;
  --brand-radius-pill: 999px;
  --brand-article-width: 588px;
  --brand-max-width: 1200px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Semafor.

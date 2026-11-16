---
name: Yale University
shortName: "Yale"
slug: yale
url: https://www.yale.edu
category: Education
tagline: "Yale Blue, Matthew Carter's Yale typeface with Mallory, and the Lux et Veritas shield."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Yale Blue
    hex: "#00356B"
    role: Primary brand colour, wordmark, nav links, H3s, dark bands
  - name: Medium Blue
    hex: "#286DC0"
    role: Links, H2s, nav hover, solid accent buttons
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on Yale Blue
  - name: Light Blue
    hex: "#63AAFF"
    role: Labels and accents on dark backgrounds
  - name: Gray
    hex: "#978D85"
    role: Warm gray, secondary nav separators, footer text
  - name: Dark Gray
    hex: "#4A4A4A"
    role: Secondary text, charcoal buttons, footer dividers
  - name: Text
    hex: "#222222"
    role: Body text, H1, footer background
  - name: Greige
    hex: "#7E736B"
    role: Muted button fill, captions
  - name: Light Gray
    hex: "#DDDDDD"
    role: Borders, dusty buttons, nav keylines
  - name: Off White
    hex: "#F9F9F9"
    role: Section backgrounds
  - name: Orange
    hex: "#BD5319"
    role: Web accent, sparingly
  - name: Green
    hex: "#5F712D"
    role: Web accent, sparingly
  - name: Shield Gold
    hex: "#FABD0A"
    role: Book edges in the shield artwork
fonts:
  display:
    family: "Yale"
    fallback: "Cardo"
    weights: [400, 700]
  body:
    family: "Mallory"
    fallback: "Lato"
    weights: [400, 500]
typeScale:
  - { role: H1, size: 55, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H2, size: 40, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 30, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Feature Title, size: 24, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Footer List, size: 20, weight: 400, lineHeight: 1.2, tracking: "0.5px" }
  - { role: UI / Button, size: 14, weight: 500, lineHeight: 1.21, tracking: "0.75px" }
radii: { sm: 0, md: 3, lg: 8, pill: 9999 }
spacing: [5, 10, 15, 20, 30, 40, 60, 80]
shadows:
  - { name: Keyline, value: "inset 0 0 0 1px #DDDDDD" }
  - { name: Soft, value: "0 0 5px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F9F9F9"
  text: "#222222"
  muted: "#4A4A4A"
  border: "#DDDDDD"
  accent: "#00356B"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Yale University

## 1. Visual Theme & Atmosphere

Yale's identity is typographic before it is anything else. The university has its own typeface, Yale, drawn by School of Art faculty member Matthew Carter, and it appears in the wordmark, the headlines, the footer lists and even the legal line. It is paired with Mallory, a sans by Tobias Frere-Jones, for navigation and buttons. Colour is close to monochrome: Yale Blue (`#00356B`), a brighter Medium Blue (`#286DC0`) for links and H2s, and warm grays. The identity office says a limited palette, "generally Yale Blue or black plus an accent colour", better reflects Yale.

What makes it recognisable:

- **The Yale typeface.** A crisp old-style serif with Aldine roots. Headlines are set at regular weight, never bold.
- **Two blues.** Yale Blue for the brand, nav and H3s; Medium Blue for links, H2s and hover. Light Blue (`#63AAFF`) only on dark backgrounds.
- **Small spaced sans.** Mallory Medium at 14px with letter-spacing for buttons, labels and utility nav.
- **Hairline details.** 40px x 1px rules under headings and footer labels, inset 1px keylines on buttons, a 4px Yale Blue inset bar on hovered nav items.
- **The shield.** A Yale Blue shield with an open book showing Hebrew text ("Urim v'Thummim") and the motto banner "LUX ET VERITAS".

Density is medium. The homepage leads with "The Feature Archive" carousel (uppercase kickers like "BEST IN CLASS", calls like "READ HIS STORY"), then "The latest from Yale News" with topic filters, events and a charcoal footer.

## 2. Color Palette & Roles

Yale's identity site (yaleidentity.yale.edu) describes Yale Blue, its history (ratified by the Corporation in 1894) and print matching, but the exact values sit in interactive panels that were not machine-readable. The hex values below are from yale.edu's live CSS.

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Yale Blue | `#00356B` | Wordmark, nav links, H3, bands, mobile menu |
| Medium Blue | `#286DC0` | Links, H2, nav hover text, "marine" buttons |
| Light Blue | `#63AAFF` | Footer labels and accents on dark |
| Text | `#222222` | Body text, H1, footer background |
| White | `#FFFFFF` | Background |

Print notes from the identity site: match Yale Blue with Superior Printing Ink's Yale Blue formula HB 6254 (coated) or HB 6255 (uncoated) with an aqueous coating; for paint, Benjamin Moore 2064-10 Bold Blue. Pantone 289 is the commonly cited spot match (approximate).

### Neutrals

| Name | Hex | Role |
| --- | --- | --- |
| Dark Gray (charcoal) | `#4A4A4A` | Secondary text, charcoal buttons, footer divider |
| Gray (warm) | `#978D85` | Secondary nav dots, footer text |
| Greige | `#7E736B` | Muted buttons, captions |
| Light Gray (dusty) | `#DDDDDD` | Borders, keylines, dusty buttons |
| Off White | `#F9F9F9` | Section backgrounds |

### Web accents

The identity site lists accent colours for websites "such as buttons, dividers, and other elements", not for headers, backgrounds or footers. On yale.edu: Orange `#BD5319`, Green `#5F712D`, Olive `#7C7F12`. The shield adds Gold `#FABD0A` for the book edges.

### Contrast and mode

Yale Blue on white is about 12.6:1; Medium Blue about 5.2:1 (AA for body text). Light Blue fails on white; keep it on `#222222` or Yale Blue. Light mode only.

## 3. Typography

From the Yale identity site:

- **Yale** (Yale 2024, previously YaleNew and Yale Design/Admin): Roman, Italic, Bold, Bold Italic. Free to the Yale community for Yale work only. Includes Yale marks, arrows and a manicule.
- **Yale Display**: sharper serifs, higher contrast and tighter spacing for sizes over 24pt; now with an italic.
- **Mallory** (Frere-Jones Type, 2015): companion sans. Web fonts may be used on official Yale sites; otherwise it must be purchased.
- **Yale Street**: Carter's signage face; not available for download.
- **Serifa** (slab) for athletics and **Snell Roundhand** (script, never all caps) for special print uses.

Outside Yale, use Cardo (an Aldine-style serif on Google Fonts) for Yale and Lato for Mallory. The site's own fallbacks are Times New Roman and Gill Sans / Calibri.

### Scale (from yale.edu CSS)

| Role | Family | Size | Weight | Line height | Colour |
| --- | --- | --- | --- | --- | --- |
| H1 | Yale | 55px (34px mobile) | 400 | 1.2 | `#222222` |
| H2 | Yale | 40px (30px mobile) | 400 | 1.2 | `#286DC0` |
| H3 | Yale | 30px (26px mobile) | 400 | 1.2 | `#00356B` |
| Feature / card title | Yale | 24px | 400 | 1.25 | Yale Blue |
| Body | Yale | 20px | 400 | 1.5 | `#222222` |
| Footer list | Yale | 20px | 400 | 1.2 | White, 0.5px tracking |
| Button / label | Mallory Medium | 14px | 500 | 1.21 | 0.75px tracking |
| Small UI | Mallory | 12px | 400 | 1.3 | |

### Rules

- Headlines never bold; colour does the hierarchy (black H1, Medium Blue H2, Yale Blue H3).
- Use Mallory uppercase only for short kickers and button labels ("READ HIS STORY").
- Use true italics, small caps and old-style figures from the Yale font where possible.
- The ampersand in headings switches to an italic serif (the site uses Warnock Pro italic for `.amp`).

## 4. Logo & Brand Mark

- **Yale logo:** the word "Yale" set in the Yale typeface in Yale Blue. The identity site calls it "the chief symbol of Yale's identity". `logo.svg` is this wordmark.
- **Wordmarks:** extensions that pair "Yale" with a school or unit name, supplied by the Office of the University Printer.
- **Shield:** Yale Blue shield, white open book with Hebrew letters, gold edges, and the "LUX ET VERITAS" banner. `icon.svg` uses the shield on white.
- **Colours:** Yale Blue or black on light backgrounds; white on Yale Blue.
- **Custom logos:** only in rare cases, under the guidance of the University Printer.
- **Clear space:** at least the height of the "a" in "Yale" around the logo (approximate).

Misuse: no retyping "Yale" in another font, no Medium Blue or accent-coloured logo, no outlines or effects.

## 5. Components

### Buttons

```css
.button {
  display: inline-block; padding: 12px 20px; min-height: 44px;
  font: 500 14px/1.21 "Mallory", "Lato", sans-serif;
  letter-spacing: 0.75px; word-spacing: 1.25px;
  border: 1px solid transparent; border-radius: 0;
  transition: background-color 250ms, color 250ms, border-color 250ms;
}
.button_solid_midnight { background: #00356B; color: #FFFFFF; }
.button_solid_midnight:hover { background: transparent; color: #00356B; border-color: #DDDDDD; }
.button_solid_marine { background: #286DC0; color: #FFFFFF; }
.button_solid_marine:hover { background: transparent; color: #286DC0; border-color: #286DC0; }
.button_solid_charcoal { background: #4A4A4A; color: #FFFFFF; }
.button_bordered_white { background: transparent; color: #FFFFFF; box-shadow: inset 0 0 0 1px #FFFFFF; }
.button_bordered_white:hover { background: #FFFFFF; color: #00356B; }
.button:focus-visible { outline: 2px solid #286DC0; outline-offset: 2px; }
```

The pattern: solid buttons go hollow with a matching border on hover; bordered buttons fill on hover. Icons (Font Awesome) can sit before or after the label.

### Links

Inline links in Medium Blue `#286DC0`, underlined on hover; on dark, Light Blue `#63AAFF`.

### Inputs

```css
.input {
  height: 44px; padding: 0 12px;
  background: #FFFFFF; color: #222222;
  border: 1px solid #DDDDDD; border-radius: 3px;
  font: 400 16px "Mallory", "Lato", sans-serif;
}
.input:focus { border-color: #286DC0; box-shadow: inset 0 0 0 1px #286DC0; outline: none; }
```

Site search sits in the header ("Search" with a magnifier icon) and expands into a field.

### Header and navigation

- White header, "Yale" wordmark at left (about 105 x 47px).
- Secondary nav (small Mallory): "Calendars", "Give", "News", "Directories", separated by 2px warm-gray dots.
- "Info for..." audience menu: Students, Faculty, Staff, Alumni, New Haven Community.
- Main nav: "About Yale", "Academics", "Admissions", "Research", "Collections", "Life at Yale" in Yale Blue. Hover or focus: white background, Medium Blue text, a 4px Yale Blue inset bar on the left and 1px `#DDDDDD` keylines.
- Mobile: a full-height Yale Blue sidebar with white links.

### Feature carousel

Full-bleed photo with an uppercase Mallory kicker ("BEST IN CLASS"), a Yale serif headline ("From Yale Law School to a Nobel in economics") and a bordered white button ("READ HIS STORY"). "Previous" and "Next" controls; Yale Blue overlays at 80-85% for text panels.

### News list

"The latest from Yale News" with a topic filter (Alumni, Arts & Humanities, Business, Campus & Community, Environment, Health & Medicine, International, Law, Science & Technology, Social Sciences, In Focus). Each item: image, Yale serif title, date ("November 12, 2026"). "Explore More News" link.

### Headings with rules

Lists that follow H3/H4 get a 40px x 1px rule (`rgba(0,0,0,.47)`) above them, the same device used under footer labels.

### Footer

`#222222` background with warm-gray `#978D85` text. Labels in Mallory Medium 14px Light Blue `#63AAFF` with a 40px Light Blue rule underneath; link lists in Yale serif 20px white. Groups include visiting links ("Campus Tours", "Maps & Directions", "Yale Visitor Center", "Museums & Libraries", "New Haven"), the equal opportunity statement, social links and "Copyright © 2026 Yale University • All Rights Reserved • Contact Web Editor". Dividers are `#4A4A4A`.

## 6. Layout & Spacing

- **Max width:** 1440px for the frame; content in a 12-column grid inside it.
- **Breakpoints:** 500px, 740px, 980px, 1220px (with 1350-1470px for wide layouts).
- **Spacing:** 30-40px around headings, 40px between footer groups, 60-80px between homepage sections.
- **Density:** medium; text columns are comfortable at 20px body.

## 7. Depth, Elevation & Motion

- Mostly flat. Inset 1px keylines (`inset 0 0 0 1px #DDDDDD`) instead of drop shadows.
- Soft shadow for floating UI: `0 0 5px rgba(0,0,0,0.1)`; carousel arrows use small side shadows.
- Radii: 0 for buttons and cards, 3px for inputs and tabs.
- Motion: nav transitions 250ms with a 100ms delay; header background fades over 300ms. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** Font Awesome 4 glyphs (search, video, photo, arrows) in Yale Blue or white; the Yale font includes its own arrows and a manicule for typographic flourishes.
- **Photography:** Sterling Memorial Library, Harkness Tower, Beinecke Library, Old Campus, New Haven streets, labs and named people. Natural light, rich but not oversaturated.
- **Overlays:** Yale Blue at 80-90% (`rgba(0,53,107,.9)`) for caption panels.

## 9. Voice & Microcopy

Literate, calm and slightly understated, with an editor's ear for headlines.

- Navigation: "About Yale", "Academics", "Admissions", "Research", "Collections", "Life at Yale", "Info for...".
- Kickers and calls in uppercase Mallory: "BEST IN CLASS", "SECOND NATURE", "CHANGING THE CHANNEL", "READ HIS STORY".
- Section titles: "The Feature Archive", "The latest from Yale News", "Explore More News".
- Class years follow names ("Rob Long '87").
- Say "Yale" or "Yale University"; motto "Lux et veritas" ("Light and truth").

## 10. Do's and Don'ts

**Do**

- Use the Yale typeface (or Cardo) for headlines and body; Mallory (or Lato) for UI.
- Keep the palette to Yale Blue or black plus one accent.
- Build hierarchy with colour (black, Medium Blue, Yale Blue) rather than weight.
- Use hairline rules and inset keylines.
- Let solid buttons turn hollow on hover.

**Don't**

- Don't bold serif headlines.
- Don't use web accent colours for headers, backgrounds or footers.
- Don't use Light Blue on white.
- Don't retype the Yale logo in another typeface or invent custom logos.
- Don't use Serifa or Snell Roundhand on general web pages.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Yale University. White page, `#F9F9F9` bands, a charcoal `#222222` footer. Yale Blue `#00356B` for the wordmark, nav links and H3s; Medium Blue `#286DC0` for links and H2s; Light Blue `#63AAFF` only on dark backgrounds. Set headlines and body in Cardo (standing in for Carter's Yale typeface) at regular weight: H1 55px `#222222`, H2 40px Medium Blue, H3 30px Yale Blue, body 20px. Set buttons, labels and utility nav in Lato (standing in for Mallory) 14px medium with 0.75px tracking; uppercase kickers like "BEST IN CLASS". Square buttons: solid Yale Blue that turns hollow with a border on hover; white bordered buttons over photos. Nav hover shows a white tile with a 4px Yale Blue inset bar on the left. Use 40px x 1px hairline rules under headings and footer labels. Campus photography with Yale Blue overlays.

```css
:root {
  --brand-yale-blue: #00356B;
  --brand-medium-blue: #286DC0;
  --brand-light-blue: #63AAFF;
  --brand-white: #FFFFFF;
  --brand-text: #222222;
  --brand-charcoal: #4A4A4A;
  --brand-gray-warm: #978D85;
  --brand-greige: #7E736B;
  --brand-border: #DDDDDD;
  --brand-bg-subtle: #F9F9F9;
  --brand-accent-orange: #BD5319;
  --brand-accent-green: #5F712D;
  --brand-font-serif: "Yale", "Cardo", "Times New Roman", serif;
  --brand-font-sans: "Mallory", "Lato", "Gill Sans", Calibri, sans-serif;
  --brand-radius: 0px;
  --brand-radius-input: 3px;
  --brand-keyline: inset 0 0 0 1px #DDDDDD;
  --brand-nav-active: inset 4px 0 0 #00356B;
  --brand-content-width: 1440px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Yale University.

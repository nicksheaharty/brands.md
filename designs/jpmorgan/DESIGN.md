---
name: JPMorgan Chase
shortName: JPMorgan
slug: jpmorgan
url: https://jpmorganchase.com
category: Banking
tagline: "Black serif wordmark, light Tiempos headlines, travertine panels and bronze accents."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, headlines, primary text, button borders
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Bronze
    hex: "#8F5A39"
    role: Accent text, icons, quote marks, focus outline
  - name: Sky
    hex: "#A6D7F0"
    role: Primary button fill, hover fill for outlined buttons
  - name: Travertine
    hex: "#F4EFE7"
    role: Warm section and card background
  - name: Bronze Light
    hex: "#936846"
    role: Secondary bronze for links and labels
  - name: Charcoal
    hex: "#202020"
    role: Dark sections and footer
  - name: Grey 600
    hex: "#666666"
    role: Secondary text, dates, captions
  - name: Grey 400
    hex: "#A8A8A8"
    role: Dividers on dark, disabled text
  - name: Mist
    hex: "#E2E4E5"
    role: Light dividers and borders
  - name: Off White
    hex: "#FAF8F2"
    role: Alternate light surface
  - name: Teal
    hex: "#1B8096"
    role: Data and chart accent
  - name: Navy Teal
    hex: "#005075"
    role: Chart accent, links in reports
  - name: Burgundy
    hex: "#A50034"
    role: Chart accent, alerts
fonts:
  display:
    family: "Tiempos Headline"
    fallback: "Source Serif 4"
    weights: [300, 400]
  body:
    family: "Sons"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Headline XL, size: 88, weight: 300, lineHeight: 1.05, tracking: "-0.01em" }
  - { role: Headline L, size: 72, weight: 300, lineHeight: 1.08, tracking: "-0.01em" }
  - { role: Headline M, size: 64, weight: 300, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading, size: 48, weight: 300, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Subheading, size: 28, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "-0.001em" }
  - { role: Eyebrow, size: 14, weight: 500, lineHeight: 1.4, tracking: "0" }
radii: { sm: 3, md: 10, lg: 36, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Card, value: "0 4px 4px rgba(0,0,0,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4EFE7"
  text: "#000000"
  muted: "#666666"
  border: "#E2E4E5"
  accent: "#A6D7F0"
  accentText: "#000000"
  radius: 9999
  buttonStyle: pill
---

# JPMorgan Chase

## 1. Visual Theme & Atmosphere

jpmorganchase.com is the corporate face of JPMorganChase: the holding company behind Chase (consumer bank), J.P. Morgan (investment banking, asset and wealth management, payments) and its research and policy institutes. The site serves investors, journalists, job seekers and clients, so it reads like a well-funded annual report: black and white, big serif headlines, generous margins and calm photography.

The 2024 identity merged the names into one word, **JPMorganChase**, set as a black serif wordmark. The site design follows that tone.

What makes it recognisable:

- **Black and white first.** Most of the page is black text on white with thin rules. Color is used sparingly.
- **Light serif headlines.** Tiempos Headline at weight 300, very large (64-88px), with slight negative tracking. It feels editorial, like a financial newspaper.
- **Travertine.** A warm stone color `#F4EFE7` fills cards, share bars and alternate sections. The site calls this theme "travertine".
- **Bronze and sky accents.** Bronze `#8F5A39` marks icons, quote marks and focus outlines; a pale sky blue `#A6D7F0` fills the primary pill button.
- **Pill buttons.** All actions are fully rounded (100px radius) with a black outline or sky fill.
- **Square corners elsewhere.** Cards and images are square (radius 0) or nearly so, which keeps the layout formal.

Mood words: institutional, editorial, restrained, assured, global.

## 2. Color Palette & Roles

Values below are from the site's CSS (November 2026). Marketing pages use the core set; data visualisations and reports use the extended accents.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Logo, headlines, body text, outlined button borders |
| White | `#FFFFFF` | Page background |
| Bronze | `#8F5A39` | Accent: icons, quote glyphs, tag text, focus outline (`--cwm-focused-outline`) |
| Bronze Light | `#936846` | Secondary bronze, link text in some modules |
| Bronze Deep | `#6F3D1E` | Pressed or hover bronze (approximate role) |
| Sky | `#A6D7F0` | Primary button fill, outlined button hover fill |
| Travertine | `#F4EFE7` | Warm cards, grid cards, flip cards, share bars |
| Off White | `#FAF8F2` | Alternate warm surface |
| Charcoal | `#202020` | Dark sections, footer |
| Grey 700 | `#31373D` | Dark UI text |
| Grey 600 | `#666666` | Secondary text, dates |
| Grey 400 | `#A8A8A8` | Rules on dark, disabled |
| Mist | `#E2E4E5` | Light dividers |
| Grey 50 | `#F5F7F8` | Cool light surface |

### Extended accents (charts, institute reports)

| Name | Hex |
|---|---|
| Teal | `#1B8096` |
| Deep Teal | `#176C86` |
| Navy Teal | `#005075` |
| Steel Blue | `#2670A9` |
| Burgundy | `#A50034` |
| Green | `#037900` |
| Pink tint | `#FFC4EF` |
| Lime tint | `#C3E864` |
| Lilac tint | `#EBD1FF` |
| Aqua tint | `#ADE7F0` |
| Salmon tint | `#FFB199` |

The pastel tints appear behind story tiles and in illustrated report covers. Keep them as backgrounds, never as text colors.

### Semantic colors (approximate)

The corporate site has few forms. Use Burgundy `#A50034` for errors, Green `#037900` for success, and Bronze for informational notes.

### Dark mode

No dark theme. A `.dark` section style flips to Charcoal `#202020` or Black with white text; the primary pill stays Sky with black text, and the outlined button turns white-bordered.

## 3. Typography

**Display:** Tiempos (Klim Type Foundry), used for headlines, large numbers and pull quotes, mostly at weight 300.

**Text and UI:** "Sons", a proprietary sans served by the site (16 @font-face entries across weights). It is used for navigation, body copy, buttons and labels.

**Licensing and fallbacks:** both are licensed. Use **Source Serif 4** (weight 300) for Tiempos; the site's own fallback stack lists Iowan Old Style, Baskerville and Source Serif Pro. Use **Inter** for Sons.

The root font size is 10px (`html { font-size: 62.5% }`), so `1.6rem` = 16px in the source.

### Scale (desktop)

| Role | Size | Weight | Line height | Tracking | Font |
|---|---|---|---|---|---|
| Headline XL | 88px | 300 | ~1.05 | -0.088rem | Tiempos |
| Headline L | 72px | 300 | ~1.08 | -0.072rem | Tiempos |
| Headline M / TOC number | 64px | 300 | ~1.1 | -0.064rem | Tiempos |
| Heading | 48px | 300 | ~1.15 | -0.048rem | Tiempos |
| Section title | 36-40px | 300-400 | 1.2 | -0.01em | Tiempos |
| Subheading | 26-28px | 400 | 1.3 | 0 | Sons |
| Lead | 20-24px | 400 | 1.5 | 0 | Sons |
| Body / button | 16px | 400 / 600 | 1.5 | -0.016rem | Sons |
| Small / eyebrow | 14px | 500 | 1.4 | 0 | Sons |

Line heights are approximate. Mobile: Headline XL drops to 48px, Headline L to 40px.

### Rules

- Sentence case for headlines and buttons.
- Headline weight stays at 300; emphasis comes from size, not weight.
- Numbers in stats (total assets, employees, community investment) are set in Tiempos Light at headline size with a Sons caption below. Only quote figures you can source to a current filing.
- Quote marks in pull quotes are bronze Tiempos glyphs.

## 4. Logo & Brand Mark

The logo is the single word **JPMorganChase** in a classic high-contrast serif, solid black. It replaced the older "JPMorgan Chase & Co." lockup in 2024. There is no symbol in the corporate lockup; the blue octagon belongs to Chase, and the J.P. Morgan business brand has its own serif wordmark.

- **Color versions:** black on white (primary), white on black or Charcoal. No colored versions.
- **Clear space:** at least the cap height of the "J" on every side (approximate).
- **Minimum size:** about 120px wide on screen; the wordmark is long and thin.
- **Avatar:** for square spaces, use a short form such as "JPM" from the same serif, white on black, or the full wordmark centred on white.

Misuse:

- Do not insert spaces ("JPMorgan Chase") or the "& Co." in the logo; those remain correct in legal text only.
- Do not add the Chase octagon to the corporate wordmark.
- Do not color the wordmark bronze or sky.
- Do not set the logo in Tiempos as a replacement; it is drawn separately.

## 5. Components

### Buttons

All buttons are pills (`border-radius: 100px`), Sons 600 16px/1.5, tracking -0.016rem.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary ("accented bold") | `#A6D7F0` | `#000000` | 1px `#A6D7F0` | fill `#000`, text `#A6D7F0`, border `#000` |
| Secondary ("accented", outlined) | transparent | `#8F5A39` | 1px `#000000` | fill `#A6D7F0`, text `#000`, border `#A6D7F0` |
| Secondary on dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | fill `#A6D7F0`, text `#000` |
| Tag button | transparent | `#8F5A39` | 1px `#000000` | as secondary |
| Text link | none | `#000000`, underlined | none | bronze text |

Padding: primary `10px 24.7px`, secondary `8.9px 22.75px` (both about 44px tall). Focus: `outline: 1px dashed #8F5A39` with 2px offset.

```css
.jpmc-btn {
  font: 600 16px/1.5 var(--font-sans);
  letter-spacing: -0.016rem;
  color: #000;
  background: #A6D7F0;
  border: 1px solid #A6D7F0;
  border-radius: 100px;
  padding: 10px 24.7px;
  transition: background-color .2s ease, color .2s ease;
}
.jpmc-btn:hover { background: #000; color: #A6D7F0; border-color: #000; }
.jpmc-btn--outline { background: transparent; color: #8F5A39; border-color: #000; padding: 8.9px 22.75px; }
.jpmc-btn--outline:hover { background: #A6D7F0; color: #000; border-color: #A6D7F0; }
.jpmc-btn:focus-visible { outline: 1px dashed #8F5A39; outline-offset: 2px; }
```

### Navigation

- White header, logo left, about 80px tall (approximate).
- Top items: "About us", "Impact", "Insights", "Careers", "Investor Relations", "Newsroom", plus search and a "Join our team" link.
- Hover opens a wide panel with three or four columns of plain links and one featured story card ("Chairman and CEO Letter to Shareholders"). Featured nav links use Tiempos.
- Sticky on scroll with a 1px `#E2E4E5` bottom rule.
- Mobile: hamburger right, full-screen white menu with accordions and large Sons links.

### Hero

- Full-width photo or video with a black-to-transparent gradient on one side, or a split layout with the image right and a Tiempos headline left.
- Eyebrow above the headline (14px, Sons 500, bronze or grey), headline 64-88px Tiempos Light, one short paragraph, one pill button.

### Cards

- **Story card:** image on top (square corners), eyebrow tag in bronze, title in Tiempos 24-28px, date in `#666666`. No shadow; separated by whitespace.
- **Grid card / flip card:** Travertine `#F4EFE7` fill, no border, 24-32px padding, radius 0. Flip cards show a stat or headline on the front and a paragraph on the back.
- **Quote card:** large bronze opening quote mark in Tiempos, quote in Tiempos 28-36px, name and title in Sons 14px.
- Raised cards (rare, e.g. video overlays): `0 4px 4px rgba(0,0,0,.25)`.

### Lists and tables

- Investor Relations pages list documents in rows: title (Sons 16px 600), date and file type in `#666666`, download icon right, 1px `#E2E4E5` rules.
- Tables: header row Sons 14px 600 on white with a 2px black rule below, body rows 1px rules, numbers right-aligned with tabular figures.

### Tabs and filters

Underline tabs: Sons 16px, inactive `#666666`, active black with a 2px black underline. Filters in the newsroom are outlined pills that fill Sky when selected.

### Forms

Few forms (search, email alerts). Inputs are 48px tall, square corners or 3px radius, 1px `#000` bottom border or full border, Sons 16px. Focus: bronze dashed outline.

## 6. Layout & Spacing

- **Grid:** 12-column AEM responsive grid (`aem-GridColumn--default--12`).
- **Max width:** about 1440px for full-bleed media, about 1200-1280px for text content (approximate).
- **Breakpoints:** 768px and 1024px (seen in CSS), plus a large-desktop step near 1440px.
- **Gutters:** 24px mobile, 32-40px desktop.
- **Section spacing:** 96-128px on desktop, 48-64px on mobile.
- **Rhythm:** headline blocks get 20px top and bottom margin (`2rem`), cards in rows of 3 or 4 with 24-32px gaps.

## 7. Depth, Elevation & Motion

- Almost flat. Separation comes from Travertine fills, white space and thin `#E2E4E5` rules.
- The one shadow token is `0 4px 4px rgba(0,0,0,.25)` for overlays.
- Overlays on images: `rgba(0,0,0,.8)` to transparent gradients, or `rgba(48,48,48,.8)` panels.
- Motion: smooth scroll (`scroll-behavior: smooth`), button color transitions about 200ms, flip cards rotate in about 600ms (approximate). Keep it understated.

## 8. Iconography & Imagery

- **Icons:** Font Awesome 6 Pro (light and sharp styles), thin strokes, in black or bronze at 14-24px.
- **Photography:** documentary style: employees, clients, small-business owners, city architecture (including the new Park Avenue headquarters), shot in natural light with muted color. Images are full-bleed or square-cornered.
- **Illustration:** used in institute and policy reports; flat shapes in the pastel tints with black line work.
- **Charts:** simple bar and line charts on white, teal and navy series, bronze highlight for the key value, Sons labels.

## 9. Voice & Microcopy

Measured, factual and confident. Speaks as a large institution with a public purpose: service, opportunity, communities, clients.

- Sentence case everywhere.
- Short headlines that state a commitment or a topic.
- Body copy cites programs and outcomes, not adjectives. Quote figures only from current filings or press releases.
- CTAs are calm verbs: "Read letter", "Learn more", "Explore opportunities", "Apply now", "See how we do business".

Sample strings (from the home page on 2026-11-16):

- "Committed to service, innovation and growth"
- "Making opportunities happen"
- "Serving with purpose"
- "Creating economic opportunity for all"
- Nav: "About us", "Impact", "Insights", "Careers", "Investor Relations", "Newsroom"

## 10. Do's and Don'ts

**Do**

- Keep pages mostly black and white with generous white space.
- Use a light (300) serif at very large sizes for headlines.
- Use Travertine `#F4EFE7` for warm cards and alternate sections.
- Use bronze for small accents: icons, quote marks, eyebrows, focus.
- Use pill buttons: Sky fill for primary, black outline for secondary.
- Write "JPMorganChase" as one word in brand contexts.

**Don't**

- Don't use Chase blue `#005EB8` or the octagon on corporate pages.
- Don't bold headlines or use condensed sans headlines.
- Don't add shadows to cards; use fills and rules.
- Don't use the pastel tints for text or buttons.
- Don't use rounded card corners; keep them square.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of JPMorganChase's corporate site. White page, black `#000000` text and headlines, secondary text `#666666`, rules `#E2E4E5`. Headlines in "Source Serif 4" weight 300 (a stand-in for Tiempos), very large (64-88px desktop) with -0.01em tracking. Body and UI in Inter (stand-in for the proprietary "Sons"), 16px/1.5. Use Travertine `#F4EFE7` for warm cards and alternate sections with square corners and no shadows. Accent with bronze `#8F5A39` for icons, eyebrows, quote marks and a 1px dashed focus outline. Buttons are pills (radius 100px, 16px weight 600): primary is sky `#A6D7F0` with black text that inverts to black fill on hover; secondary is a black outline with bronze text that fills sky on hover. Use editorial photography and calm, factual sentence-case copy.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-bronze: #8F5A39;
  --brand-bronze-light: #936846;
  --brand-sky: #A6D7F0;
  --brand-travertine: #F4EFE7;
  --brand-off-white: #FAF8F2;
  --brand-charcoal: #202020;
  --brand-text-secondary: #666666;
  --brand-grey-400: #A8A8A8;
  --brand-rule: #E2E4E5;
  --brand-teal: #1B8096;
  --brand-navy-teal: #005075;
  --brand-burgundy: #A50034;
  --brand-green: #037900;
  --brand-font-serif: "Tiempos Headline", "Source Serif 4", "Iowan Old Style", Baskerville, serif;
  --brand-font-sans: "Sons", "Inter", -apple-system, "Segoe UI", sans-serif;
  --brand-radius-none: 0;
  --brand-radius-sm: 3px;
  --brand-radius-pill: 100px;
  --brand-shadow-overlay: 0 4px 4px rgba(0,0,0,.25);
  --brand-focus: 1px dashed #8F5A39;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by JPMorgan Chase.

---
name: BlackRock
slug: blackrock
url: https://blackrock.com
category: Finance
tagline: "Black and white with a sharp orange accent, heavy BLK Fort headlines and 2px corners."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, text, primary buttons, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on black
  - name: Signal Orange
    hex: "#FF4713"
    role: Highlight CTA fill, titles on dark banners, hover underlines
  - name: Warm Grey
    hex: "#F4F1EB"
    role: Neutral section background (2025 refresh)
  - name: Light Grey
    hex: "#EFEFEF"
    role: Alternate section background, table stripes
  - name: Yellow
    hex: "#FFCE00"
    role: Accent panels and navigation highlights
  - name: Burnt Orange
    hex: "#CD4119"
    role: Secondary orange for button variants
  - name: Grey Text
    hex: "#616161"
    role: Secondary text, captions
  - name: Border
    hex: "#CCCCCC"
    role: Dividers, input borders
  - name: iShares Blue
    hex: "#00A9E0"
    role: iShares sub-brand accent
  - name: Aladdin Purple
    hex: "#8E50ED"
    role: Aladdin sub-brand accent
  - name: Green
    hex: "#008B5C"
    role: Positive performance
fonts:
  display:
    family: "BLK Fort"
    fallback: "Archivo"
    weights: [700, 800]
  body:
    family: "BLK Fort"
    fallback: "Archivo"
    weights: [400, 700]
typeScale:
  - { role: Display, size: 56, weight: 800, lineHeight: 1.14, tracking: "-0.01em" }
  - { role: Heading 1, size: 40, weight: 800, lineHeight: 1.2, tracking: "0" }
  - { role: Heading 2, size: 32, weight: 800, lineHeight: 1.25, tracking: "0" }
  - { role: Heading 3, size: 24, weight: 800, lineHeight: 1.33, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 800, lineHeight: 1.67, tracking: "0.04em" }
radii: { sm: 2, md: 3, lg: 10, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0px 3px 5px 0px rgba(0,0,0,0.11)" }
  - { name: Soft, value: "0 0 5px rgba(0,0,0,0.1)" }
  - { name: Overlay, value: "0 0 12px 0 rgba(112,112,112,0.5)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F1EB"
  text: "#000000"
  muted: "#616161"
  border: "#CCCCCC"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# BlackRock

## 1. Visual Theme & Atmosphere

blackrock.com is stark and typographic. After the 2025 brand refresh the site is almost entirely black and white: black text, black buttons, black banners, white pages, with a warm off-white for quiet sections. A hot orange (`#FF4713`) is the one loud colour, used for a single "pop" call to action or a banner title. Headlines are set heavy in the company's own BLK Fort typeface, which gives the pages a confident, poster-like voice.

What makes it recognisable:

- **The wordmark.** "BlackRock" in a heavy geometric sans with a registered mark, black on white. No symbol.
- **Black as the brand colour.** Former "core blue", "dark blue" and "teal" background classes now all resolve to `#000000` in the CSS.
- **Orange for emphasis.** `.cta.button.pop` fills with `#FF4713` and black text; dark banners set their title in orange; hover underlines grow in orange.
- **Heavy headlines, plain body.** Display and heading text uses FortExtraBold; body uses FortBook.
- **Small radii.** Buttons are 2px; most cards are square or 2-3px.
- **Sub-brands keep their colours.** iShares (`#00A9E0` blue, `#FEDC00` yellow) and Aladdin (`#8E50ED` purple) modules sit inside the same layout.

Mood words: bold, assured, minimal, institutional, direct.

## 2. Color Palette & Roles

Read from the live CSS bundles (`vi16` and `vi20` component sets, marked "2025 Brand Refresh Colors").

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Text, logo, primary buttons, banners, footer |
| White | `#FFFFFF` | Page background, text on black |
| Signal Orange | `#FF4713` | Pop CTA fill, banner titles, underline accents |
| Burnt Orange | `#CD4119` | Alternate CTA fill on some banners |
| Warm Grey | `#F4F1EB` | Neutral shaded sections (`.blk-bg-neutral-shade`) |
| Stone | `#EAE7E1` | Deeper neutral, dividers on warm grey |
| Light Grey | `#EFEFEF` | Alternate sections, table rows |
| Grey 2 | `#F2F2F2` | Inputs, hover rows |
| Grey Text | `#616161` | Secondary text |
| Dark Grey | `#333333` | Long-form body on light grey |
| Border | `#CCCCCC` | Dividers and input borders |
| Yellow | `#FFCE00` | Highlight panels, nav highlight |
| iShares Yellow | `#FEDC00` | iShares sub-brand blocks |
| iShares Blue | `#00A9E0` | iShares sub-brand |
| Aladdin Purple | `#8E50ED` | Aladdin sub-brand eyebrows and links |
| Blue | `#0079CD` | Data series, legacy links (approximate role) |

### Performance and status

| State | Hex |
|---|---|
| Positive | `#008B5C` (also `#008540` in refreshed icons) |
| Negative | `#D15420` (approximate) |
| Warning | `#F8971D` |

### Dark sections

Banners and the sticky footer use `#000000` with white text and orange titles. CTAs on black are white-outlined, or orange with black text for the one primary action. There is no global dark mode.

## 3. Typography

**Family:** BLK Fort, a custom version of Fort. The site loads Book, Bold and Extrabold (with italics), plus a condensed family (Light, Book, Bold) added in the 2025 refresh. CSS names: `FortBook`, `FortBold`, `FortExtraBold`, `FortCondensedBook`, and so on. Older templates still declare Akkurat Pro and Avenir Next.

**Licensing:** proprietary. Use **Archivo** (good weight range up to 900 and a condensed width axis) as the free substitute.

```css
font-family: "FortBook", "Archivo", Arial, sans-serif;     /* body */
font-family: "FortExtraBold", "Archivo", Arial, sans-serif; /* headings, CTAs */
```

Note: the site sets `font-weight: normal` and switches the family to get heavier cuts. In a substitute, map FortBook to 400, FortBold to 700 and FortExtraBold to 800.

### Scale

| Role | Size | Line height | Cut |
|---|---|---|---|
| Display / hero | 56px | 64px | ExtraBold |
| Heading 1 | 40px | 48px | ExtraBold |
| Heading 2 | 32px | 40px | ExtraBold |
| Heading 3 | 24px | 32px | ExtraBold |
| Lead | 20px | 28px | Book |
| Body | 16px | 24px | Book |
| Small | 14px | 20px | Book |
| CTA label | 16px | 22px | ExtraBold |
| Banner eyebrow | 12px | 20px | ExtraBold, uppercase |

Sizes are confirmed in CSS; the hero at 56px applies from 1440px up, with 40px on tablet (approximate for smaller steps).

### Rules

- Headlines are short and heavy; never set body in ExtraBold.
- `strong` and `b` switch to FortExtraBold.
- Uppercase only for small eyebrows and mega menu group labels ("FUND TYPE", "ASSET CLASS", "INSIGHTS").
- Fund data uses tabular figures.

## 4. Logo & Brand Mark

The logo is the **BlackRock** wordmark with a small registered mark, in a heavy geometric sans with tight spacing (the "k" and "R" touch). There is no separate symbol.

- **Primary:** black on white (`blackrock-logo-nav.svg`, 152 x 22 in the header).
- **Reversed:** white on black (`blackrock-logo-white.svg`).
- **Clear space:** at least the height of the "B" on all sides (approximate).
- **Minimum size:** about 90px wide on screen (approximate).
- **Avatar:** white wordmark on a black square.

Misuse:

- Do not recolour it orange or in sub-brand colours.
- Do not split "Black" and "Rock" or add a space.
- Do not drop the registered mark in formal uses.
- Do not stretch, outline or add effects.

## 5. Components

### Buttons (`.cta.button`)

2px radius, padding 11px 40px, label 16px/22px FortExtraBold, sentence case. A right arrow icon nudges on hover (margin shifts from 0 to 11px left offset).

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` | 1px `#000000` |
| Secondary | transparent | `#000000` | 1px `#000000` |
| Pop | `#FF4713` | `#000000` | 1px `#FF4713` |
| On black | `#FFFFFF` | `#000000` | 1px `#FFFFFF` |
| Secondary on black | transparent | `#FFFFFF` | 1px `#FFFFFF` |
| Link | none | `#000000` | 3px orange underline grows on hover |

```css
.blk-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 40px;
  font: 16px/22px var(--brand-font-heavy);
  color: #fff; background: #000;
  border: 1px solid #000; border-radius: 2px;
}
.blk-cta--pop { background: #FF4713; border-color: #FF4713; color: #000; }
.blk-link { position: relative; color: #000; text-decoration: none; }
.blk-link::after { content: ""; position: absolute; left: 0; bottom: -2px; height: 3px; width: 0; background: #FF4713; transition: width .3s; }
.blk-link:hover::after { width: 100%; }
```

### Header

- Top bar: brand switcher ("BlackRock", "iShares", "Aladdin", "Our company"), audience selector ("Individual Investors"), country ("United States") and "Sign In".
- Main bar: wordmark left, then "Funds", "Investment strategies", "Insights & education", "About us", and a search icon.
- Mega menus: white, uppercase group labels, plain link lists, "FUNDS IN FOCUS" with named funds.
- Audience gate: an overlay asking whether you are an individual, advisor or institution.

### Fund search

A large search bar with a round black button (92px circle on the fund-search component, white magnifier icon), filters by fund type and asset class, and a results table.

### Fund table

- Columns: name and ticker, asset class, NAV, returns (1y, 5y, 10y), expense ratio.
- Header row 12-14px FortBold on `#EFEFEF`, rows 14px FortBook, 1px `#CCCCCC` dividers.
- Positive numbers in green, negative in orange-red; tabular figures.

### Cards

- Insight cards: image or flat colour block, eyebrow, 24px ExtraBold title, short summary, link CTA.
- Square or 2-3px corners, no border, `0px 3px 5px 0px rgba(0,0,0,0.11)` on hover.
- Warm grey `#F4F1EB` sections hold white cards.

### Banners

Full-width black block with an orange 12px uppercase eyebrow or title, white heading and one pop or white CTA. Sticky footers for disclosures also use black.

### Inputs

40-48px tall, 2-3px radius, 1px `#CCCCCC` border, inset shadow `inset 0px 1px 4px rgba(0,0,0,0.1)` on some forms; focus border black.

### Disclosures

Every fund page has dense legal copy at 12-14px in grey, often in expandable sections. Treat it as a required component.

## 6. Layout & Spacing

- **Containers:** 980px for older content and up to 1920px for full-bleed; text columns 620-740px (all present in CSS).
- **Breakpoints:** 600, 768, 1024, 1440px, with extra steps at 1480 and 1630px.
- **Grid:** 12 columns, 24px gutters on desktop, 16px on mobile (approximate).
- **Section spacing:** 48-80px (approximate).
- **Density:** medium to high on fund pages (tables and filters), airy on marketing pages.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0px 3px 5px 0px rgba(0,0,0,0.11)` |
| Soft | `0 0 5px rgba(0,0,0,0.1)` |
| Overlay | `0 0 12px 0 rgba(112,112,112,0.5)` |
| Inset field | `inset 0px 1px 4px rgba(0,0,0,0.1)` |

- Mostly flat; contrast does the work instead of shadows.
- Underline grow 0.1-0.3s; carousels `cubic-bezier(0.64, 0.04, 0.35, 1)`; reveal easing `cubic-bezier(0.215, 0.61, 0.355, 1)`.

## 8. Iconography & Imagery

- **Icons:** Font Awesome 5 Pro (light and regular styles), 16-24px, black. Arrows and chevrons on CTAs.
- **Photography:** people at life stages (retirement, family), infrastructure, cities and energy. Often high-contrast or desaturated so it sits with black type.
- **Graphics:** flat colour blocks (black, orange, warm grey, yellow) and simple charts with black lines and one orange highlight.
- **Sub-brand blocks:** iShares and Aladdin modules keep their own accent colour but use the same type.

## 9. Voice & Microcopy

Direct, plain and confident, aimed at both individuals and professionals. Sentence case. Labels are short.

- Navigation: "Funds", "Investment strategies", "Insights & education", "About us".
- CTAs: "All funds", "All insights", "Sign In", "Change location".
- Audience prompts: "I invest on behalf of my clients.", "I want to learn more about BlackRock."

Sample strings seen on the live site today:

- "Welcome to the BlackRock site for individuals"
- "Weekly commentary"
- "Global investment outlook"
- "FUNDS IN FOCUS"
- "Investing for retirement"

## 10. Do's and Don'ts

**Do**

- Make black the brand colour: text, buttons, banners.
- Use orange `#FF4713` once per view for the main highlight.
- Set headlines heavy (800) and body regular.
- Keep corners at 2px or square.
- Use warm grey `#F4F1EB` for quiet sections instead of cool greys.
- Include disclosures near any performance number.

**Don't**

- Don't bring back the old blues and teals as primary colours.
- Don't use orange text on white for body copy (contrast is too low).
- Don't use rounded, pill-shaped primary buttons.
- Don't mix sub-brand colours into BlackRock-branded modules.
- Don't show performance figures without dates and disclosures.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of blackrock.com after its 2025 refresh. White page, black `#000000` text, secondary text `#616161`, borders `#CCCCCC`, quiet sections in warm grey `#F4F1EB`. Font "BLK Fort" with Archivo fallback: headings weight 800 (56px/64px hero, 40px/48px H1, 24px/32px H3), body 16px/24px weight 400. Primary buttons are black with white text, 2px radius, padding 11px 40px, 16px heavy label; secondary buttons are transparent with a 1px black border. Use orange `#FF4713` for one "pop" button with black text per view, and for 3px link underlines that grow on hover. Banners are full-width black with an orange eyebrow and white heading. Cards are square or 2px, flat, with `0px 3px 5px rgba(0,0,0,0.11)` on hover. Fund tables use 14px rows, `#EFEFEF` headers and tabular numbers. Copy is short, plain and in sentence case.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-orange: #FF4713;
  --brand-orange-deep: #CD4119;
  --brand-warm-grey: #F4F1EB;
  --brand-stone: #EAE7E1;
  --brand-light-grey: #EFEFEF;
  --brand-text-secondary: #616161;
  --brand-border: #CCCCCC;
  --brand-yellow: #FFCE00;
  --brand-ishares-blue: #00A9E0;
  --brand-ishares-yellow: #FEDC00;
  --brand-aladdin-purple: #8E50ED;
  --brand-positive: #008B5C;
  --brand-font: "FortBook", "Archivo", Arial, sans-serif;
  --brand-font-bold: "FortBold", "Archivo", Arial, sans-serif;
  --brand-font-heavy: "FortExtraBold", "Archivo", Arial, sans-serif;
  --brand-radius: 2px;
  --brand-radius-card: 3px;
  --brand-shadow-card: 0px 3px 5px 0px rgba(0,0,0,0.11);
  --brand-shadow-overlay: 0 0 12px 0 rgba(112,112,112,0.5);
  --brand-ease: cubic-bezier(0.64, 0.04, 0.35, 1);
  --brand-text-max: 740px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by BlackRock.

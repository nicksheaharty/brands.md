---
name: Truist
slug: truist
url: https://truist.com
category: Banking
tagline: "Deep Truist purple, soft sky and dawn tints, wide Trio type and outlined 2px buttons."
updated: 2026-11-16
appStoreId: 1555389200
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Truist Purple
    hex: "#2E1A47"
    role: Logo, headings, dark hero panels, primary button on light pages
  - name: Dusk
    hex: "#72569C"
    role: Purple 500, primary button fill on sky backgrounds, links
  - name: Sky
    hex: "#B0E0E2"
    role: Signature light teal-blue, hero and login backgrounds
  - name: Dawn
    hex: "#A6A3E0"
    role: Lavender accent, button fill on purple backgrounds
  - name: Forest
    hex: "#006D7A"
    role: Deep teal for icons, data and secondary accents
  - name: Mist
    hex: "#F1EFF8"
    role: Pale lavender section background
  - name: Purple 600
    hex: "#56387E"
    role: Button hover on light backgrounds
  - name: Dawn Light
    hex: "#C9C7FF"
    role: Button fill and link color on purple backgrounds
  - name: Off White
    hex: "#F7F7F7"
    role: Neutral section background, disabled fill
  - name: Neutral 100
    hex: "#DBDBDB"
    role: Borders and dividers
  - name: Neutral 500
    hex: "#5C5C5C"
    role: Secondary text
  - name: Near Black
    hex: "#181818"
    role: Body text
  - name: Error
    hex: "#C22B13"
    role: Error text and icons
  - name: Success
    hex: "#0D7232"
    role: Success text and icons
fonts:
  display:
    family: "Truist Trio"
    fallback: "Figtree"
    weights: [300, 600, 700]
  body:
    family: "Truist Trio"
    fallback: "Source Sans 3"
    weights: [400, 600, 700]
typeScale:
  - { role: Display, size: 48, weight: 300, lineHeight: 1.1, tracking: "0" }
  - { role: Heading 2, size: 36, weight: 300, lineHeight: 1.15, tracking: "0" }
  - { role: Heading 3, size: 28, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Heading 4, size: 24, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Heading 5, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Micro, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Nano, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 5, lg: 10, xl: 20, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32, 48, 64, 128]
shadows:
  - { name: Card, value: "0 2px 8px rgba(46,26,71,0.12)" }
  - { name: Focus, value: "0 0 0 2px #FFFFFF, 0 0 0 4px #2E1A47" }
preview:
  bg: "#FFFFFF"
  surface: "#F1EFF8"
  text: "#2E1A47"
  muted: "#5C5C5C"
  border: "#DBDBDB"
  accent: "#2E1A47"
  accentText: "#FFFFFF"
  radius: 5
  buttonStyle: solid
---

# Truist

## 1. Visual Theme & Atmosphere

Truist (the bank formed from BB&T and SunTrust) looks quieter than most US retail banks. One very dark purple does almost all the brand work, and it is softened by a set of pale tints named after the sky: Sky (teal-blue), Dawn and Haze (lavender), Mist (near-white lilac). Pages read as white or tinted bands, purple headlines, and outlined or solid purple buttons.

What makes it recognisable:

- **Truist Purple `#2E1A47`.** So dark it reads almost black at small sizes. It is the logo, the headline color, the solid button color and the hero panel color.
- **Sky `#B0E0E2`.** The light teal-blue used behind the sign-in hero and feature bands. Purple text on Sky is the signature pairing.
- **Wide, light type.** Truist Trio is a wide geometric sans set at weight 300 for big headlines and 600-700 for small headings and buttons.
- **The "TT" mark.** A rounded square split by two T-shapes facing each other, drawn in thin strokes, repeated as a frame motif.
- **Thick 2px button borders.** Buttons are outlined or solid with a 2px border at 4-5px radius, and the solid/outline roles invert on hover.
- **Calm, sparse layout.** Generous white space, one product per tile, illustrations and lifestyle photos with plenty of air.

Mood words: considered, caring, calm, modern Southern, steady.

## 2. Color Palette & Roles

Tokens below come from the `--tru*` custom properties on truist.com.

| Token | Hex | Role |
|---|---|---|
| `--truPurple800` / `--truClrPplBs` | `#2E1A47` | Truist Purple: logo, headings, solid buttons, dark panels |
| `--truPurple1000` | `#211730` | Deepest purple for footers |
| `--truPurple700` | `#402561` | Pressed state |
| `--truPurple600` | `#56387E` | Hover on light backgrounds |
| `--truPurple500` / Dusk | `#72569C` | Primary buttons on Sky, links |
| `--truPurple300` | `#A793C9` | Muted purple, chart fills |
| `--truPurple100` | `#E5DDF4` | Pressed tint for outline buttons |
| `--truPurple50` | `#F0ECF8` | Hover tint for outline buttons |
| `--truDawn400` | `#A6A3E0` | Lavender button fill on purple |
| `--truDawn200` | `#C9C7FF` | Button and link color on purple |
| `--truDawn50` | `#ECEBFF` | Very light lavender |
| `--truClrMistBs` | `#F1EFF8` | Mist section background |
| `--truSky200` | `#B0E0E2` | Sky: hero and band background |
| `--truSky100` | `#CAEAEC` | Lighter sky |
| `--truSky50` | `#E5F5F5` | Lightest sky band |
| `--truSky500` | `#008A97` | Teal accent |
| `--truSky600` / Forest | `#006D7A` | Deep teal accent |
| `--truClrNghtBs` | `#1F282E` | Night: dark neutral sections |
| `--truNeutral0` | `#FFFFFF` | Base |
| `--truNeutral50` | `#F7F7F7` | Neutral band, disabled fill |
| `--truNeutral100` | `#DBDBDB` | Borders |
| `--truNeutral300` | `#A8A8A8` | Disabled text |
| `--truNeutral500` | `#5C5C5C` | Secondary text |
| `--truNeutral800` | `#181818` | Body text |

### Semantic colors

| State | Base | Dark (text) | Light (fill) |
|---|---|---|---|
| Error | `#FF654D` | `#C22B13` | `#FFB9AD` |
| Success | `#57BD7B` | `#0D7232` | approximate `#E3F4E9` |
| Warning | `#F5B45D` | `#96510D` | approximate `#FDF0DE` |
| Info | `#45B0E6` | `#006699` | `#E5F5F5` |

### Backgrounds and pairing

Each band class sets text and button colors together:

- **White or Mist:** purple text, solid purple button, outline purple secondary.
- **Sky light (`.bg-sky-blue-ltr`):** purple text, Dusk `#72569C` solid button, Dusk outline secondary.
- **Purple (`.bg-tru-ppl`):** white text, Dawn `#C9C7FF` solid button with `#2E1A47` text, Dawn outline secondary.

There is no site-wide dark mode.

## 3. Typography

**Family:** Truist Trio, a proprietary variable sans (`"Truist Trio Var", Arial, sans-serif`) with weights from 100 to 1000. Older templates reference "Truist Trio Light" as a separate family. The site also loads Source Sans 3 from Google Fonts for a few widgets, and some calculators still use Roboto.

**Licensing:** Truist Trio is owned by Truist and not available to the public. Use **Figtree** for headlines (wide, geometric) and **Source Sans 3** for body.

**Root size:** the site sets `html { font-size: 62.5% }`, so `1.6rem` is 16px. Sizes are fluid with `clamp()`.

### Scale (sizes and weights from tokens, line heights approximate)

| Token | Range | Weight | Line height | Use |
|---|---|---|---|---|
| `--truTxtSize1` | 36-48px | 300 | 1.1 | Hero headline |
| `--truTxtSize2` | 28-36px | 300 | 1.15 | Section headline |
| `--truTxtSize3` | 24-28px | 600 | 1.2 | Card group title |
| `--truTxtSize4` | 20-24px | 600 | 1.25 | Card title |
| `--truTxtSize5` | 18-20px | 600 | 1.3 | Lead, small heading |
| `--truTxtSize6` | 16-18px | 400 | 1.5 | Large body |
| `--truTxtSizeBdy` | 16px | 400 | 1.5 | Body |
| `--truTxtSizeMicro` | 14px | 400 | 1.45 | Labels, legal |
| `--truTxtSizeNano` | 12px | 400 | 1.4 | Footnotes |

### Rules

- Sentence case for headlines, buttons and nav.
- Big headlines are light (300) and purple; small headings and buttons are 600-700.
- Buttons use Truist Trio at weight 600.
- Product names carry their marks in superscript ("Truist One®", "Truist Marquee℠").
- No italics for emphasis; use weight 600 or a purple color change.

## 4. Logo & Brand Mark

The logo is the word TRUIST in wide, evenly spaced capitals followed by the "TT" mark: a rounded square outline divided by a horizontal bar into two facing T forms.

- **Colors:** Truist Purple `#2E1A47` on white or Sky; white on purple. One color only.
- **Clear space:** at least the width of the "T" stem times four on all sides (approximate).
- **Minimum size:** about 80px wide for the lockup; the mark alone works down to 16px.
- **App icon:** white mark on a Truist Purple square.

Misuse:

- Do not color the mark in Sky, Dawn or any gradient.
- Do not set the wordmark in a live font.
- Do not fill the square of the mark; it is always an outline.
- Do not place the purple logo on Dusk or other mid-purples where contrast drops.

## 5. Components

### Buttons

Base: Truist Trio 600, 16px (hero CTAs 18px), 2px border, radius 4-5px, padding about 10px 24px (hero 15px 30px), `transition: all .3s ease-in-out`.

| Variant (on white) | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#2E1A47` | `#FFFFFF` | 2px `#2E1A47` | transparent fill, purple text |
| Secondary | transparent | `#2E1A47` | 2px `#2E1A47` | `#F0ECF8` fill |
| Minimal | transparent | `#72569C` | none | `#56387E` text, underline |

| Variant (on Sky) | Background | Text | Hover / Pressed |
|---|---|---|---|
| Primary | `#72569C` | `#FFFFFF` | `#56387E` / `#402561` |
| Secondary | transparent, 2px `#72569C` | `#72569C` | `#F0ECF8` fill, `#56387E` |

| Variant (on purple) | Background | Text | Hover |
|---|---|---|---|
| Primary | `#C9C7FF` | `#2E1A47` | `#DAD9FF` |
| Secondary | transparent, 2px `#C9C7FF` | `#C9C7FF` | `#DAD9FF` |

- Focus: `outline: 2px solid` in the button color with `outline-offset: 2px`, or a 1px white inner outline on solid buttons.
- Disabled: `#F7F7F7` fill, `#DBDBDB` border, `#A8A8A8` text.

### Sign-in hero (signature)

The home page opens with a split hero: a sign-in card on one side ("User ID" and password fields, a "Save user ID" checkbox, a solid purple "Sign in" button, and links "Forgot user ID?" and "Enroll in online banking") and a promo with a large light headline on the other. Background is Sky `#B0E0E2` or a lifestyle photo.

### Inputs

- 44-48px tall, 1px `#5F4882` or `#5C5C5C` border, 4px radius, 16px text (approximate).
- Focus: 2px purple outline. Error: `#C22B13` border and helper text with an alert icon.
- Labels sit above in 14px/600 purple.

### Cards ("static cards")

- White or Mist fill, 10px radius, no border or 1px `#DBDBDB`, 24-32px padding.
- Order: optional small icon or illustration, 20-24px/600 title in purple, 16px body in `#181818`, then a minimal link or a button row with 16px gap.
- Primary tile variant uses a full purple fill with white text and Dawn buttons.

### Navigation

- Utility bar: "Personal", "Small Business", "Wealth Management", "Commercial, Corporate & Institutional" segments on the left; "Search", "Locations", "Contact", "Español" on the right.
- Main bar: logo left; "Checking & savings", "Credit cards", "Loans", "Mortgages", "Small Business", "Investments"; a solid purple "Sign in" button and an "Open Account" link right.
- Mega menu: white panel, columns of 16px links with 14px/600 headings, plus a promo tile ("Like carrying a branch, but lighter.").
- Mobile: hamburger with full-screen drill-down.

### Tabs and accordions

- Fill tabs: selected tab fills `#2E1A47` with white text; others are white with purple text and a 1px border.
- Accordions: 1px `#DBDBDB` rules, 18-20px/600 purple question, plus/minus or chevron icon in purple.

## 6. Layout & Spacing

- **Spacing tokens:** 2, 4, 8, 12, 16, 24, 32, 48, 64, 128px (`--truSpace3xs` to `--truSpace4xlg`).
- **Grid:** AEM 24-column responsive grid (`aem-GridColumn--default--24`), usually used as 12 or 6 visual columns.
- **Container:** about 1280px max with 24px gutters (approximate).
- **Breakpoints:** about 768px and 1024px (Bootstrap-derived, approximate).
- **Section rhythm:** 48-64px between bands on desktop, 32px on mobile. Bands alternate white, Mist and Sky.
- **Density:** low to medium; usually two to four tiles per row.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Flat | none | Most cards and buttons |
| Card | `0 2px 8px rgba(46,26,71,.12)` | Floating sign-in card, menus (approximate) |
| Focus | `0 0 0 2px #FFFFFF, 0 0 0 4px #2E1A47` | Keyboard focus on solid fills |

- Truist is mostly flat. Color bands and borders create hierarchy, not shadows.
- Radius tokens: none, 2px (sm), 5px (md), 10px (lg), 20px (xl), 32px (2xl), 40px (3xl), 50% (circle).
- Motion: `all .3s ease-in-out` on buttons and links; carousels slide over about 500ms (approximate).

## 8. Iconography & Imagery

- **Icons:** line icons with rounded ends, about 1.5-2px stroke, in purple or Forest teal on light backgrounds.
- **Illustration:** flat, friendly scenes with Sky, Dawn and purple fills and no outlines.
- **Photography:** real people in warm daylight, often in the Southeast US, cropped with 10px rounded corners.
- **Pattern:** the TT mark's square frame, enlarged and cropped, appears as a thin-line graphic in heroes.

## 9. Voice & Microcopy

Warm, reassuring and plain. The copy leans on care and confidence rather than speed or price.

- Sentence case; contractions are fine.
- Short reassurance under headlines.
- Buttons: "Sign in", "Open Account", "Check now", "See what you can do", "Learn more".

Sample strings (from the live site):

- "Like carrying a branch, but lighter." (rendered with an em dash on the site)
- "Make deposits, move money, and do so much more with digital banking."
- "Got a minute? Check for offers."
- "See if you're pre-qualified for a Truist credit card."
- Fraud notices: "Scammers may use … as an opportunity to impersonate …" banners at the top of the page.

## 10. Do's and Don'ts

**Do**

- Use Truist Purple for headlines and solid buttons on white.
- Use Sky and Mist as large background bands.
- Keep headlines large and light; keep buttons 600 weight with 2px borders.
- Swap button colors by background (purple on white, Dusk on Sky, Dawn on purple).
- Leave generous white space around each product.

**Don't**

- Don't use pure black; text is `#181818` or purple.
- Don't use bright, saturated accents beyond the Sky/Dawn family.
- Don't add heavy shadows or glossy effects.
- Don't fill the TT mark's square.
- Don't use pill buttons on the main site.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Truist. White page with alternating bands in Mist `#F1EFF8` and Sky `#B0E0E2`. Main brand color is a very dark purple `#2E1A47` used for headlines, the logo and solid buttons. Font: "Truist Trio", fallback Figtree for headings and "Source Sans 3" for body. Hero headlines 48px weight 300 in purple; card titles 20-24px weight 600; body 16px/1.5 in `#181818`, secondary `#5C5C5C`. Buttons: Truist Trio 600 16px, 2px border, 5px radius, about 10px 24px padding. On white: solid `#2E1A47` with white text, outline `#2E1A47`. On Sky: solid `#72569C`, hover `#56387E`. On purple panels: solid `#C9C7FF` with purple text. Cards are white or Mist with 10px radius and no shadow. Include a sign-in card in the hero with two inputs, a "Save user ID" checkbox and a purple "Sign in" button. Transitions `all .3s ease-in-out`. Copy is warm, short and sentence case.

```css
:root {
  --brand-purple: #2E1A47;
  --brand-purple-deep: #211730;
  --brand-purple-700: #402561;
  --brand-purple-600: #56387E;
  --brand-dusk: #72569C;
  --brand-purple-50: #F0ECF8;
  --brand-dawn: #A6A3E0;
  --brand-dawn-light: #C9C7FF;
  --brand-mist: #F1EFF8;
  --brand-sky: #B0E0E2;
  --brand-sky-light: #E5F5F5;
  --brand-forest: #006D7A;
  --brand-bg: #FFFFFF;
  --brand-surface: #F7F7F7;
  --brand-border: #DBDBDB;
  --brand-text: #181818;
  --brand-text-muted: #5C5C5C;
  --brand-disabled: #A8A8A8;
  --brand-error: #C22B13;
  --brand-success: #0D7232;
  --brand-warning: #96510D;
  --brand-info: #006699;
  --brand-font: "Truist Trio Var", "Figtree", Arial, sans-serif;
  --brand-font-body: "Truist Trio Var", "Source Sans 3", Arial, sans-serif;
  --brand-radius-sm: 2px;
  --brand-radius-md: 5px;
  --brand-radius-lg: 10px;
  --brand-radius-xl: 20px;
  --brand-border-width: 2px;
  --brand-shadow-card: 0 2px 8px rgba(46,26,71,.12);
  --brand-transition: all .3s ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Truist.

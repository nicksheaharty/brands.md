---
name: Klarna
slug: klarna
url: https://klarna.com
category: Finance
tagline: "Soft pink brand, near-black ink and big rounded cards for payments, shopping and banking."
updated: 2026-11-16
appStoreId: 1115120118
logoBackground: "#FFA8CD"
theme: light
colors:
  - name: Klarna Pink
    hex: "#FFA8CD"
    role: Brand color, brand button, logo background, badges
  - name: Ink
    hex: "#0B051D"
    role: Primary text, primary button, logo on pink, dark page
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Accent Purple
    hex: "#7039E2"
    role: Accent background, accent headings, data series
  - name: Pop Lime
    hex: "#CFF066"
    role: Pop badge, playful highlight
  - name: Cream
    hex: "#F9F8F5"
    role: Warm surface, inverse text on dark
  - name: Subtle
    hex: "#F3F3F5"
    role: Subtle background, secondary button
  - name: Container
    hex: "#F8F7FA"
    role: Card and container background
  - name: Border
    hex: "#E2E2E7"
    role: Default borders, neutral fills
  - name: Body Text
    hex: "#282636"
    role: Paragraph text
  - name: Subtle Text
    hex: "#504F5F"
    role: Secondary text
  - name: Placeholder
    hex: "#615F6D"
    role: Placeholder text, neutral background on dark
  - name: Link Purple
    hex: "#582FB4"
    role: Links, accent text
  - name: Positive
    hex: "#046234"
    role: Success text and fills
  - name: Warning
    hex: "#FBC64D"
    role: Warning fills
  - name: Negative
    hex: "#AE1D1D"
    role: Errors, danger button
fonts:
  display:
    family: "Klarna Title"
    fallback: "Inter"
    weights: [500, 700]
  body:
    family: "Klarna Text"
    fallback: "Inter"
    weights: [400, 500, 700]
  mono:
    family: "Klarna Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display L, size: 64, weight: 700, lineHeight: 0.97, tracking: "-0.02em" }
  - { role: Display M, size: 52, weight: 700, lineHeight: 1.0, tracking: "-0.02em" }
  - { role: Heading L, size: 44, weight: 700, lineHeight: 1.09, tracking: "-0.01em" }
  - { role: Heading M, size: 32, weight: 700, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Heading S, size: 24, weight: 500, lineHeight: 1.33, tracking: "0" }
  - { role: Text L, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Text M, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Text S, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 8, md: 16, lg: 32, pill: 99999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]
shadows:
  - { name: Small, value: "0px 2px 4px 0px rgba(0,0,0,0.1)" }
  - { name: Medium, value: "0px 6px 12px 0px rgba(0,0,0,0.1)" }
  - { name: Large, value: "0px 12px 24px 0px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F3F5"
  text: "#0B051D"
  muted: "#504F5F"
  border: "#E2E2E7"
  accent: "#0B051D"
  accentText: "#FFFFFF"
  radius: 99999
  buttonStyle: pill
---

# Klarna

## 1. Visual Theme & Atmosphere

Klarna is a payments and shopping app: pay in installments at checkout, a Klarna Card, savings and a personal account, plus shopping deals. Its website and app look like a bright consumer brand that happens to be a bank. The page is white, text is a deep violet-black "ink" `#0B051D`, and the brand pink `#FFA8CD` shows up as a confident block of color on the logo badge, brand buttons and campaign tiles.

What makes it recognisable:

- **The pink.** A soft, milky pink (`--colors-bg-brand: #FFA8CD`) that reads as friendly rather than loud. It is used as large flat fields, never as a thin accent line.
- **Ink, not black.** Text, primary buttons and dark sections use `#0B051D`, a near-black with a hint of violet.
- **Big rounded media.** Hero videos and product shots sit in containers with 32px corners (48px on large carousels), and buttons are full pills.
- **Bold, tight headlines.** Klarna Title at weight 700 with tight line height. Headlines animate in word by word ("Your money", "Shop", "Get").
- **Phone-in-hand imagery.** Photos of a hand holding a phone showing the Klarna app, metal Klarna Cards, and short looping product videos.
- **Accent purple and lime.** A purple `#7039E2` and a lime `#CFF066` handle highlights and data, sparingly.

Mood words: friendly, confident, clean, consumer, pink.

## 2. Color Palette & Roles

Values come from the live design tokens on klarna.com (`--colors-*`). Each token has a light and a dark value; light is listed first.

| Token | Light | Dark | Role |
|---|---|---|---|
| bg-brand | `#FFA8CD` | `#FFA8CD` | Brand blocks, brand button |
| bg-page / bg-plain | `#FFFFFF` | `#0B051D` | Page |
| bg-inverse | `#0B051D` | `#FFFFFF` | Inverse sections |
| bg-container | `#F8F7FA` | `#1D192A` | Cards |
| bg-subtle | `#F3F3F5` | `#282636` | Subtle surfaces, secondary button |
| bg-neutral | `#E2E2E7` | `#615F6D` | Neutral chips |
| bg-accent | `#7039E2` | `#582FB4` | Accent fill |
| bg-accent-subtle | `#EFECFF` | `#2F1F5A` | Accent tint |
| text-default | `#0B051D` | `#FFFFFF` | Headings, labels |
| text-body | `#282636` | `#E2E2E7` | Paragraphs |
| text-subtle | `#504F5F` | `#C4C3CA` | Secondary text |
| text-placeholder | `#615F6D` | `#94939E` | Placeholders |
| text-disabled | `#706E7B` | `#94939E` | Disabled |
| text-link | `#582FB4` | `#B594FF` | Links |
| text-accent-heading | `#7039E2` | `#7B57D8` | Accent headings |
| border-default | `#E2E2E7` | `#403C4D` | Borders |
| border-neutral | `#C4C3CA` | `#706E7B` | Input borders |
| border-active | `#0B051D` | `#FFFFFF` | Focus/selected border |
| badge-pop | `#CFF066` | | Highlight badge |

### Semantic colors

| State | Text | Fill | Border |
|---|---|---|---|
| Positive | `#046234` | `#E6FCEB` (subtle), `#C1F4D1` (badge) | `#06884A` |
| Warning | `#664600` | `#FFF5E4` (subtle), `#FBC64D` | `#885F00` |
| Negative | `#931414` | `#FFE6E6` (subtle), `#AE1D1D` | `#DC2B2B` |
| Accent | `#582FB4` | `#E4E0F7` (badge) | `#7B57D8` |

### Data colors

Charts use `--colors-data-1` to `-12`: pink `#FFA8CD`, purple `#B594FF`, teal `#74D5DD`, orange `#F1B777`, magenta `#D38DDF`, blue `#3F7FDC`, and darker partners such as `#E57DAF`, `#7039E2`, `#379FAA`.

### Dark mode

Fully tokenised: page `#0B051D`, containers `#1D192A`, subtle `#282636`, text white, body `#E2E2E7`, links `#B594FF`. Pink stays `#FFA8CD`.

## 3. Typography

**Families (from `--fonts-*`):**

- **Klarna Title**: custom display face for headlines.
- **Klarna Text**: custom text face for body, buttons and UI.
- **Klarna Mono**: for numbers in some product contexts.

**Licensing:** proprietary to Klarna. Free substitute: **Inter** (700 for titles with tightened tracking, 400/500 for text). For mono, **JetBrains Mono**.

```css
font-family: "Klarna Title", -apple-system, BlinkMacSystemFont, Inter, sans-serif; /* headings */
font-family: "Klarna Text", -apple-system, BlinkMacSystemFont, Inter, sans-serif;  /* body */
```

### Scale (desktop tokens, fluid with `calc()` between mobile and desktop)

| Role | Size | Line height | Weight |
|---|---|---|---|
| Display 3XL | 130px | approx. 1.0 | 700 |
| Display 2XL | 100px | approx. 1.0 | 700 |
| Display XL | 84px | 80px | 700 |
| Display L (hero d1) | 64px | 62px | 700 |
| Display M | 52px | 52px | 700 |
| Display S | 40px | 40px | 700 |
| Heading XL | 52px | 56px | 700 |
| Heading L | 44px | 48px | 700 |
| Heading M | 32px | 40px | 700 |
| Heading S | 24px | 32px | 500 |
| Text L | 20px | 28px | 400 |
| Text M | 16px | 24px | 400 |
| Text S | 14px | 20px | 400 |
| Text XS | 12px | 16px | 400 |

Weights in tokens: normal 400, medium 500, bold 700. Mobile hero (display-mobile-l) is about 52px.

### Rules

- Sentence case, short headlines, often two or three words ("Your money", "Designed around you").
- Headline line height is at or below 1.0 for display sizes. Tracking slightly negative (approx. -0.02em).
- Buttons and nav links are Klarna Text 500.
- Use tabular figures for amounts and installment schedules.

## 4. Logo & Brand Mark

The logo is the lowercase-feel **Klarna** wordmark (capital K, then "larna") in a heavy rounded geometric sans. In the site header it is an inline SVG at 91x22px, filled ink `#0B051D`.

- **Primary:** ink wordmark on pink `#FFA8CD` (the "Klarna badge"), or ink on white.
- **Reversed:** white or pink wordmark on ink.
- **App icon:** pink square with the ink "K".
- **Clear space:** at least the height of the "a" x-height around the mark.
- **Minimum size:** about 60px wide on screen.

Misuse:

- Do not recolor the wordmark purple, lime or in a gradient.
- Do not add a trailing period or other punctuation unless it is the official badge artwork.
- Do not outline, skew or add shadows.
- Do not put it on a pink that is not `#FFA8CD`.

## 5. Components

### Buttons

| Variant | Background | Text | Radius | Height |
|---|---|---|---|---|
| Primary | `#0B051D` | `#FFFFFF` Klarna Text 500 | 99999px | 48px (large 56px) |
| Brand | `#FFA8CD` | `#0B051D` | 99999px | 48px |
| Secondary | `#F3F3F5` | `#0B051D` | 99999px | 48px |
| Tertiary / outline | transparent, `inset 0 0 0 2px #0B051D` | `#0B051D` | 99999px | 48px |
| Ghost | transparent | `#0B051D` | 99999px | 40px |
| Danger | `#AE1D1D` | `#FFFFFF` | 99999px | 48px |
| Small pill | `#F3F3F5` | `#0B051D` 14px | 99999px | 32px, padding 8px 12px |

States: hover lightens or darkens by about 8% (primary to `#282636`, approx.), pressed scales 0.98, disabled `#F3F3F5` with `#706E7B` text, focus ring `0 0 0 3px` in accent `#7B57D8` (`inset 0 0 0 1px #7B57D8` on inputs). Transition: `background-color 200ms ease, border-color 200ms ease, color 200ms ease, opacity 200ms ease`.

```css
.klarna-btn {
  font: 500 16px/1 "Klarna Text", Inter, -apple-system, sans-serif;
  height: 48px;
  padding: 0 24px;
  border-radius: 99999px;
  background: #0B051D;
  color: #FFFFFF;
  border: 0;
  transition: background-color 200ms ease, color 200ms ease, opacity 200ms ease;
}
.klarna-btn--brand { background: #FFA8CD; color: #0B051D; }
.klarna-btn--secondary { background: #F3F3F5; color: #0B051D; }
.klarna-btn:focus-visible { box-shadow: 0 0 0 3px #7B57D8; outline: none; }
```

### Navigation

- **Header:** white, about 64px, logo left (91x22), product links (Shopping, Payments, Savings, Personal account, Memberships) in Klarna Text 500 13-14px ink; inactive links `#615F6D`. Right side: "Sign in" ghost and "Sign up" primary pill.
- **Mobile:** logo plus a menu icon; full-screen sheet with large 24px links.
- **Footer:** ink background or white, with country/language selector and small 14px links.

### Media cards

The signature block. A tile with radius 32px (48px for the largest carousel slides), containing an autoplaying muted video or photo, with a headline and a pill CTA ("Learn more", "Shop now", "See Klarna Cards") beneath or overlaid. Background `#F8F7FA` or brand pink. No border, no shadow.

### Feature grid

Three or four columns of short features ("Clear and simple", "Accepted everywhere", "Always supported", "Built to grow"): a 24-32px icon, a 20-24px heading, 16px body in `#282636`.

### Inputs

Height 48-56px, radius 8-12px, border 1px `#C4C3CA`, background white, label above in 14px 500. Focus: border `#0B051D` 2px or ring `#7B57D8`. Error: border `#DC2B2B`, helper text `#931414`.

### Badges

Pill, 24px tall, 12px 500 text, padding 0 8px. Brand `#FFA8CD` with ink text; pop lime `#CFF066`; positive `#C1F4D1` with `#046234`; accent `#E4E0F7` with `#582FB4`.

### Installment schedule (signature)

A row of four circles or pie segments showing "Pay in 4" progress: each 32-40px, filled ink for paid, outlined for upcoming, with the amount and date below in 14px. Use tabular figures.

### Trust row

Trustpilot rating, app store ratings and press quotes in a light row with small logos in ink or grey.

## 6. Layout & Spacing

- **Spacing tokens:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px.
- **Max width:** about 1280-1440px for content; hero media can run edge to edge with 16-24px insets (approx.).
- **Gutters:** 16px mobile, 24-40px desktop.
- **Section spacing:** 80-120px on desktop.
- **Grid:** 12 columns desktop; media cards often span 6 or 12; carousels show 1.2-2.5 cards with peek.
- **Radius tokens:** 4, 8, 12, 16, 24, 32px, round 99999px.

## 7. Depth, Elevation & Motion

- Mostly flat. Shadows only for floating elements:
  - S `0px 2px 4px rgba(0,0,0,0.1)`
  - M `0px 6px 12px rgba(0,0,0,0.1)`
  - L `0px 12px 24px rgba(0,0,0,0.1)`
- Separation comes from fills (`#F3F3F5`, `#F8F7FA`, pink) and large radii rather than borders.
- **Motion:** headlines reveal word by word (each word fades from 0 opacity and slides about 13px horizontally). Media autoplays and loops. UI transitions 200ms ease. Carousels snap with momentum.

## 8. Iconography & Imagery

- **Icons:** rounded line icons, about 1.5-2px stroke, 24px, ink. Filled versions for active tabs in the app.
- **Photography:** close crops of hands holding phones, metal and pink cards, people shopping in daylight. Clean backgrounds, often matched to the pink or neutral surfaces.
- **App screens:** shown inside phone frames or as floating UI fragments (payment schedule, purchase list).
- **Illustration:** minimal; brand moments use flat pink fields and type instead.

## 9. Voice & Microcopy

Plain, warm and direct; short words, no finance jargon. Strings from the live US homepage today:

- Hero words: "Your money", "Shop", "Get"
- Section titles: "Designed around you", "Clear and simple", "Accepted everywhere", "Always supported", "Built to grow"
- CTAs: "Learn more", "Shop now", "See Klarna Cards", "Explore memberships", "Shop deals", "Sign up", "Sign in"
- Product line: "Save your way with our flexible savings account."

Rules: sentence case, second person, active verbs. Required legal and credit disclosures sit in small 12-14px text near the relevant offer.

## 10. Do's and Don'ts

**Do**

- Use Klarna Pink `#FFA8CD` as a solid block: logo badge, brand button, campaign tile.
- Use ink `#0B051D` for text and primary buttons.
- Round everything: pill buttons, 32px media cards.
- Keep headlines short, bold and tight.
- Show the product in use (phone in hand, card at checkout).

**Don't**

- Don't use pure black or a hot pink.
- Don't pair pink with many other bright colors in the same view.
- Don't add heavy shadows or borders to cards.
- Don't write long, technical finance copy in headlines.
- Don't use square corners on media.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Klarna. White page, ink text `#0B051D`, body text `#282636`, secondary `#504F5F`, borders `#E2E2E7`, subtle surfaces `#F3F3F5` and `#F8F7FA`. Brand pink `#FFA8CD` used as solid blocks (logo badge, brand button, promo tiles), accent purple `#7039E2` and lime `#CFF066` only for small highlights. Fonts: "Klarna Title" for headlines (fallback Inter 700, tight line-height about 1.0, slight negative tracking) and "Klarna Text" for UI (Inter 400/500). Buttons are full pills 48px tall: primary ink with white text, brand pink with ink text, secondary `#F3F3F5`. Focus ring `0 0 0 3px #7B57D8`. Hero: a two-word bold headline that reveals word by word, a pill CTA, and a looping product video inside a 32px-radius container. Below: media cards with 32px corners, a 4-column feature grid, a "Pay in 4" installment row with tabular figures. Mostly flat; shadows only on floating elements (`0 6px 12px rgba(0,0,0,0.1)`). Transitions 200ms ease.

```css
:root {
  --brand-pink: #FFA8CD;
  --brand-ink: #0B051D;
  --brand-white: #FFFFFF;
  --brand-cream: #F9F8F5;
  --brand-container: #F8F7FA;
  --brand-subtle: #F3F3F5;
  --brand-neutral: #E2E2E7;
  --brand-border: #E2E2E7;
  --brand-border-input: #C4C3CA;
  --brand-text-body: #282636;
  --brand-text-subtle: #504F5F;
  --brand-text-placeholder: #615F6D;
  --brand-accent: #7039E2;
  --brand-accent-subtle: #EFECFF;
  --brand-link: #582FB4;
  --brand-focus: #7B57D8;
  --brand-pop: #CFF066;
  --brand-positive: #046234;
  --brand-warning: #FBC64D;
  --brand-negative: #AE1D1D;
  --brand-font-title: "Klarna Title", Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  --brand-font-text: "Klarna Text", Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 16px;
  --brand-radius-lg: 32px;
  --brand-radius-xl: 48px;
  --brand-radius-pill: 99999px;
  --brand-shadow-s: 0px 2px 4px 0px rgba(0,0,0,0.1);
  --brand-shadow-m: 0px 6px 12px 0px rgba(0,0,0,0.1);
  --brand-shadow-l: 0px 12px 24px 0px rgba(0,0,0,0.1);
  --brand-transition: 200ms ease;
}
```

---

Values are observed from the public klarna.com design tokens on 2026-11-16; hover shades, tracking and max widths are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Klarna.

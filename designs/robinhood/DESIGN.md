---
name: Robinhood
slug: robinhood
url: https://robinhood.com
category: Finance
tagline: "Editorial trading brand: Robin Neon on near-black, serif headlines and the feather."
updated: 2026-11-16
appStoreId: 938003185
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Robin Neon
    hex: "#CCFF00"
    role: Primary buttons, highlights, app icon background
  - name: Night
    hex: "#110E08"
    role: Dark section background, text on neon and on light sections
  - name: Black
    hex: "#000000"
    role: Logo, full-bleed dark heroes
  - name: White
    hex: "#FFFFFF"
    role: Light sections, text on dark
  - name: Umber
    hex: "#35322D"
    role: Secondary dark surface, muted text on light
  - name: Bark
    hex: "#1C180D"
    role: Raised cards on dark
  - name: Ash
    hex: "#4D4A46"
    role: Borders and dividers on dark
  - name: Stone
    hex: "#888784"
    role: Muted text, captions, disclosures
  - name: Silver
    hex: "#D9D9D9"
    role: Borders on light, disabled
  - name: Gain Green
    hex: "#00C805"
    role: Positive price movement in charts (classic Robinhood green)
  - name: Loss Red
    hex: "#FF5000"
    role: Negative price movement in charts (approximate)
  - name: Gold
    hex: "#FFC300"
    role: Robinhood Gold membership accents (approximate)
fonts:
  display:
    family: "Martina Plantijn"
    fallback: "Source Serif 4"
    weights: [400]
  body:
    family: "Phonic"
    fallback: "Inter"
    weights: [400, 700]
  mono:
    family: "Capsule Sans Text Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 72, weight: 400, lineHeight: 1.08, tracking: "-2px" }
  - { role: Hero tablet, size: 58, weight: 400, lineHeight: 1.09, tracking: "-1.5px" }
  - { role: Section, size: 44, weight: 400, lineHeight: 1.09, tracking: "-1px" }
  - { role: Heading, size: 40, weight: 400, lineHeight: 1.2, tracking: "-1px" }
  - { role: Subheading, size: 25, weight: 400, lineHeight: 1.08, tracking: "-0.5px" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "-0.25px" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "-0.1px" }
  - { role: Disclosure, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 3, md: 8, lg: 24, pill: 36 }
spacing: [4, 8, 16, 24, 32, 48, 64, 96]
shadows: []
preview:
  bg: "#110E08"
  surface: "#1C180D"
  text: "#FFFFFF"
  muted: "#888784"
  border: "#35322D"
  accent: "#CCFF00"
  accentText: "#110E08"
  radius: 36
  buttonStyle: pill
---

# Robinhood

## 1. Visual Theme & Atmosphere

Robinhood is a US brokerage and money app: stocks, options, crypto, retirement accounts, the Gold subscription, a credit card, banking and Robinhood Legend for active traders. Since its 2024 rebrand the website, robinhood.com, looks like a fashion or culture magazine more than a fintech: warm near-black backgrounds, a sharp electric yellow-green called Robin Neon, large serif headlines and a black feather logo.

What makes it recognisable:

- **Robin Neon `#CCFF00`.** Used for the primary pill button, links on dark and the app icon background. It is loud, so it appears in small doses against near-black.
- **Warm near-black, not cool black.** Dark sections use `#110E08`, with brown-tinted greys (`#35322D`, `#4D4A46`, `#888784`).
- **Serif display type.** Headlines in Martina Plantijn at weight 400 with tight negative tracking; body in Phonic, a crisp grotesque. Product UI uses Capsule Sans.
- **Full-bleed imagery.** Wide hero photos and renders (IPO access, crypto, trading tools, Robinhood Strategies) fill the viewport behind or beside the headline.
- **Flat.** No shadows in the marketing CSS; contrast and photography carry depth.
- **Disclosures everywhere.** Each module ends with small grey legal lines ("Crypto offered through Robinhood Crypto").

Mood words: bold, cultural, premium, direct, a little rebellious.

## 2. Color Palette & Roles

Values come from inline styles on robinhood.com.

| Name | Hex | Role |
|---|---|---|
| Robin Neon | `#CCFF00` | Primary button fill and border, outline button text on dark, app icon |
| Night | `#110E08` | Dark background, text on neon and on white |
| Black | `#000000` | Logo, image-led heroes |
| White | `#FFFFFF` | Light sections, text on dark |
| Umber | `#35322D` | Dark surface, muted text on light |
| Bark | `#1C180D` | Raised card on dark |
| Ash | `#4D4A46` | Dark borders |
| Stone | `#888784` | Captions, disclosure text |
| Silver | `#D9D9D9` | Light borders, disabled |
| Grey 80 | `#808080` | Neutral icons |

### Market colours

The product apps still use green and red for price movement. Classic Robinhood green `#00C805` comes from the pre-2024 logo and charts; the loss colour `#FF5000` and Gold accent `#FFC300` are approximate. In marketing pages, keep these inside product screenshots and charts only.

### Light and dark

The marketing site alternates image-led light heroes (white background, `#110E08` text) and dark sections (`#110E08` background, white text, neon accents). Robin Neon only appears as a fill on dark or on photography; on white it becomes the text colour on a Night button instead.

## 3. Typography

- **Martina Plantijn** (Klim Type Foundry): headlines. Preloaded on the homepage.
- **Phonic**: body text, nav, buttons. CSS stack: `Phonic, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif`.
- **Capsule Sans** (Text, Display, Text Mono): the custom product typeface for app UI, numbers and tickers.
- **Nib Pro Display**, **Instrument Serif**, **Geist**, **ITC Garamond** and **Maison Neue Extended** also load for specific campaigns and sub-brands.

All except Instrument Serif and Geist are licensed. Google Fonts fallbacks: **Source Serif 4** for Martina Plantijn, **Inter** for Phonic and Capsule Sans, **JetBrains Mono** for Capsule Sans Text Mono.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (desktop) | 72px | 400 | 78px | -2px |
| Hero (tablet) | 58px | 400 | 63px | -1.5px |
| Section / hero mobile | 44px | 400 | 48px | -1px |
| Heading | 40px | 400 | 48px | -1px |
| Subheading | 25px | 400 | 27px | -0.5px |
| Body | 16px | 400 | 24px | -0.25px |
| Small | 14px | 400 | 20px | -0.1px |
| Disclosure | 12px | 400 | 18px | 0 |

Rules:

- Headlines are weight 400. The serif provides the contrast, so do not bold it.
- Every size carries slight negative tracking, even 16px body (-0.25px).
- Headlines can break across lines deliberately ("Buy shares at / the IPO price.") with a full stop.
- Bold Phonic (700) only for short emphasis in body or labels.
- Use Capsule Sans with tabular figures for prices, percentages and tickers.

## 4. Logo & Brand Mark

- The logo is the **feather** (a quill drawn as a filled blade with a cut-out spine and a sharp nib) followed by the **Robinhood** wordmark in a clean sans.
- Primary colours: black on white, white on Night. The app icon is a black feather on Robin Neon.
- Sub-brand lockups add a second word in a lighter weight ("Robinhood Crypto", "Robinhood Strategies", "Robinhood Legend").
- The old green `#00C805` logo is retired; don't use it for new work.
- Clear space: at least the width of the feather on each side (approximate).
- Minimum size: feather 16px tall; lockup about 90px wide (approximate).
- Don't recolour the feather neon on white, rotate it, add effects, or separate the feather from the wordmark in lockups.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 44px; min-width: 112px; padding: 0 32px;
  border-radius: 36px; white-space: nowrap; overflow: hidden;
  font: 400 16px/24px Phonic, Inter, Helvetica, sans-serif; letter-spacing: -0.25px;
}
.btn:hover { opacity: .85; }
.btn-primary { background: #CCFF00; border: 1px solid #CCFF00; color: #110E08; }
.btn-outline { background: transparent; border: 1px solid #CCFF00; color: #CCFF00; }   /* on dark */
.btn-dark    { background: #110E08; border: 1px solid #110E08; color: #FFFFFF; }       /* on light */
.btn-light   { background: #FFFFFF; border: 1px solid #FFFFFF; color: #110E08; }
```

- Hover is a simple opacity drop to 0.85; there is no colour shift or scale.
- Links in body copy are underlined (`text-decoration: underline solid`).
- Round icon buttons (play, carousel arrows) are 38px circles with a 1.8px current-colour stroke.

### Navigation

- 70px tall top bar, transparent over hero images or solid Night.
- Left: feather plus wordmark. Centre or left cluster: "Invest", "Crypto", "Retirement", "Gold", "Learn", "Support" in 16px Phonic.
- Right: "Log in" outline pill and "Sign up" neon pill.
- Promo banner above the nav for time-limited campaigns, 14px, with "Terms apply" link.

### Hero modules

- Full-width image (4k, light or dark mode variant) with the serif headline at 72px, one line of Phonic body ("No commission fees. No account minimums."), a neon CTA and a disclosure link under it.

### Feature rows

- Alternating image and text, 24px padding inside text columns, serif 40-44px headline, 16px body and a small disclosure paragraph in Stone.

### Protection grid

- Four items with line illustrations (secure, protect, multi-factor, 24/7) on white, each with a one-line statement in 16px.

### Product UI cards (app screens)

- Dark cards `#1C180D` or white cards with 8-24px radius, big price figure in Capsule Sans, a thin line chart in green or red, and segmented time-range tabs (1D, 1W, 1M, 3M, YTD, 1Y, ALL).

### Footer

- Night background, columns of 14px links in white or Stone, social icons, then dense legal text in 12px Stone covering brokerage, crypto and banking entities.

## 6. Layout & Spacing

- Full-bleed sections; text columns cap around 36em (about 576px) for headlines and 500-700px for body.
- Side padding 24px mobile, 32px tablet and desktop.
- Section padding 64-96px; headlines get 32px bottom margin at desktop, 24px at mobile.
- Breakpoints around 425px, 767px and 1024px.
- Mobile hero type drops from 72 to 44px.

## 7. Depth, Elevation & Motion

- No box shadows in the marketing system. Use contrast between Night, Bark and imagery instead.
- Thin 1px borders (`#4D4A46` on dark, `#D9D9D9` on light) where separation is needed.
- Motion: 300ms transforms on carousels and accordions; buttons fade to 0.85 opacity.
- Hero imagery may have subtle animated loops; respect reduced motion.

## 8. Iconography & Imagery

- Icons: simple line glyphs at 16-24px with a 1.5-1.8px stroke in current colour, often inside a circle.
- Photography and 3D renders: high contrast, editorial, warm lighting; objects like gold bars, coins, phones and abstract light.
- Illustrations: line drawings for trust and security topics.
- Charts: thin single-colour lines without fills or gridlines.

## 9. Voice & Microcopy

- Short, confident sentences with full stops. Second person.
- Headlines: "Buy shares at the IPO price.", "Trade crypto 24/7", "Your portfolio, handled by the pros", "Join a new generation of investors".
- Buttons: "Sign up", "Log in", "Learn more", "Get started", "Download the app".
- Disclosures follow every product claim: "Fees + IPO disclosures", "Crypto Risk Disclosures", "Terms apply."
- Avoid exclamation marks and slang.

## 10. Do's and Don'ts

**Do**

- Use Night `#110E08` and warm greys rather than cool black.
- Use Robin Neon `#CCFF00` sparingly: one primary button or highlight per view.
- Set headlines in a regular-weight serif with negative tracking.
- Use 36px-radius pill buttons, 44px tall, with opacity hover.
- Pair every product claim with a disclosure line.

**Don't**

- Don't use the old green logo or a green brand palette.
- Don't put neon text on white; it fails contrast.
- Don't add drop shadows or gradients to cards.
- Don't bold the serif headlines.
- Don't show market colours outside of charts and price changes.

## 11. Agent Prompt Guide

> Build this UI in the style of Robinhood (2024 rebrand). Dark sections use warm near-black `#110E08` with white text, raised cards `#1C180D`, borders `#35322D`/`#4D4A46`, muted text `#888784`. Light sections are white with `#110E08` text. One accent: Robin Neon `#CCFF00`, used for the primary pill button (Night text on neon) and outline buttons on dark. Headlines in Martina Plantijn (fallback Source Serif 4), weight 400, 72px/78px with -2px tracking at desktop, 44px on mobile. Body in Phonic (fallback Inter) 16px/24px with -0.25px tracking. Buttons are 44px tall, 36px radius, 32px horizontal padding, hover opacity 0.85. No shadows; flat surfaces and full-bleed editorial imagery. Nav is 70px with feather logo, product links, an outline "Log in" and neon "Sign up". Add a 12px grey disclosure line under each product claim. Prices and tickers use a tabular sans; charts are thin green or red lines.

```css
:root {
  --rh-neon: #CCFF00;
  --rh-night: #110E08;
  --rh-black: #000000;
  --rh-white: #FFFFFF;
  --rh-umber: #35322D;
  --rh-bark: #1C180D;
  --rh-ash: #4D4A46;
  --rh-stone: #888784;
  --rh-silver: #D9D9D9;
  --rh-gain: #00C805;
  --rh-loss: #FF5000;
  --rh-font-display: "Martina Plantijn", "Source Serif 4", Georgia, serif;
  --rh-font-body: Phonic, Inter, Helvetica, system-ui, -apple-system, Arial, sans-serif;
  --rh-font-product: "Capsule Sans Text", Inter, sans-serif;
  --rh-font-mono: "Capsule Sans Text Mono", "JetBrains Mono", monospace;
  --rh-radius-sm: 3px;
  --rh-radius-card: 8px;
  --rh-radius-pill: 36px;
  --rh-button-height: 44px;
  --rh-nav-height: 70px;
  --rh-tracking-body: -0.25px;
  --rh-tracking-hero: -2px;
  --rh-transition: transform 300ms ease;
}
```

---

Values are observed from robinhood.com inline styles on 2026-11-16; the loss red, Gold accent, product-card radii, icon stroke, logo clear space and minimum size are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Robinhood Markets, Inc.

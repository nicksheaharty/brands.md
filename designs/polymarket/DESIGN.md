---
name: Polymarket
slug: polymarket
url: https://polymarket.com
category: Finance
tagline: "Dense market grid, crisp Inter, cobalt brand blue and chunky 3D Yes/No trade buttons."
updated: 2026-11-16
appStoreId: 6648798962
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Polymarket Blue
    hex: "#2E5CFF"
    role: Brand colour, brand buttons, links, focus, app icon
  - name: Black
    hex: "#000000"
    role: Logo, primary text, primary buttons in light mode
  - name: Yes Green
    hex: "#009C39"
    role: Yes outcome buttons and positive odds
  - name: No Red
    hex: "#DF0C10"
    role: No outcome buttons and negative change
  - name: White
    hex: "#FFFFFF"
    role: Light surface (gray-50)
  - name: Night
    hex: "#0C0E13"
    role: Dark mode surface
  - name: Gray 100
    hex: "#F4F5F7"
    role: Grouped backgrounds, search field, hover overlays
  - name: Gray 200
    hex: "#E6E8EC"
    role: Borders and dividers
  - name: Gray 700
    hex: "#6B727B"
    role: Secondary text
  - name: Gray 900
    hex: "#23272D"
    role: Primary text alt, primary button fill
  - name: Gray 400
    hex: "#BFC3CA"
    role: Quaternary text, inactive icons
  - name: Brand 100
    hex: "#CADFFF"
    role: Brand subtle fill, selected chip
  - name: Brand 700
    hex: "#0F1AC6"
    role: Brand strong, pressed blue
  - name: Yellow
    hex: "#FACC15"
    role: Warnings, accent highlights
  - name: Night 100
    hex: "#1C1F27"
    role: Dark mode grouped background and cards
  - name: Night 200
    hex: "#2D3037"
    role: Dark mode borders
fonts:
  display:
    family: "Inter"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "Geist Mono"
    fallback: "Geist Mono"
    weights: [400, 500]
typeScale:
  - { role: Heading 4XL, size: 40, weight: 600, lineHeight: 1.1, tracking: "-0.025em" }
  - { role: Heading 3XL, size: 32, weight: 600, lineHeight: 1.125, tracking: "-0.01em" }
  - { role: Heading 2XL, size: 24, weight: 600, lineHeight: 1.17, tracking: "-0.015em" }
  - { role: Heading XL, size: 20, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Body LG, size: 16, weight: 500, lineHeight: 1.5, tracking: "-0.18px" }
  - { role: Body Base, size: 14, weight: 500, lineHeight: 1.43, tracking: "-0.09px" }
  - { role: Body SM, size: 13, weight: 490, lineHeight: 1.23, tracking: "-0.1px" }
  - { role: Body XS, size: 12, weight: 500, lineHeight: 1.33, tracking: "-0.1px" }
radii: { sm: 8, md: 10, lg: 12, pill: 9999 }
spacing: [2, 4, 6, 8, 12, 16, 20, 24, 32, 40]
shadows:
  - { name: Minimal, value: "0 0 0 1px rgba(0,0,0,0.06), 0 1px 1px -0.5px rgba(0,0,0,0.06), 0 3px 3px -1.5px rgba(0,0,0,0.06)" }
  - { name: Middle, value: "0 0 0 1px rgba(0,0,0,0.06), 0 1px 1px -0.5px rgba(0,0,0,0.06), 0 3px 3px -1.5px rgba(0,0,0,0.06), 0 6px 6px -3px rgba(0,0,0,0.06)" }
  - { name: Dialog, value: "0 4px 40px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)" }
  - { name: Trade Ledge, value: "0 3px 0 0 rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F5F7"
  text: "#000000"
  muted: "#6B727B"
  border: "#E6E8EC"
  accent: "#2E5CFF"
  accentText: "#FFFFFF"
  radius: 10
  buttonStyle: solid
---

# Polymarket

## 1. Visual Theme & Atmosphere

Polymarket is a prediction market: people trade on the outcome of elections, sports, crypto prices, company news and culture. The site is a dense, fast grid of markets, each a small card with a question, a percentage chance and Yes/No buttons. It looks like a well-built consumer trading app: white (or near-black in dark mode), neutral greys, Inter everywhere, and colour reserved for meaning: green for Yes, red for No, cobalt blue for the brand.

What makes it recognisable:

- **Market cards everywhere.** Square thumbnail, a one-line question ("Fed Decision in December?"), a big percentage, and two compact trade buttons.
- **Chunky 3D trade buttons.** Yes/No buttons have a 3px "ledge" under them (`box-shadow: 0 3px 0 0 <shade>`) and press down on click, a small, tactile detail on an otherwise flat UI.
- **Topic rail.** A horizontal row of category links (Trending, Breaking, New, Politics, Sports, Crypto, Finance, Geopolitics, Tech, Culture, Economy, Weather) and a second row of hot-topic chips.
- **Cobalt brand blue.** `#2E5CFF` marks brand buttons, focus rings, links and the app icon, used sparingly.
- **Tight, small type.** Most UI text is 13-16px Inter with slight negative tracking; headings top out at 40px.
- **Live data.** Odds bars, mini charts, "Live" badges and short-window markets ("Bitcoin Up or Down") update in place.

Mood words: fast, data-dense, neutral, tactile, real-time.

## 2. Color Palette & Roles

Tokens on the live site are named `--color-pk-*`, with semantic aliases (content, surface, grouped, border, buttons) over numbered ramps. Light and dark values are both defined.

### Brand blue

| Token | Light | Dark | Role |
|---|---|---|---|
| brand-100 | `#CADFFF` | `#060071` | Selected chips, subtle fill |
| brand-500 | `#2E5CFF` | `#3262FF` | Brand buttons, links, focus |
| brand-600 | `#1C3FE2` | `#5485FF` | Focus ring on nav |
| brand-700 | `#0F1AC6` | `#7BA5FF` | Brand strong, pressed |

### Neutrals

| Token | Light | Dark | Role |
|---|---|---|---|
| gray-50 (surface) | `#FFFFFF` | `#0C0E13` | Page surface |
| gray-100 (grouped) | `#F4F5F7` | `#1C1F27` | Search field, grouped sections, chips |
| gray-200 (border) | `#E6E8EC` | `#2D3037` | Borders, dividers |
| gray-300 / 400 | `#D4D7DC` / `#BFC3CA` | `#45474E` / `#62646A` | Elevated borders, quaternary text |
| gray-500 / 600 | `#ABB2BB` / `#8B929B` | `#7D8189` / `#999EA7` | Disabled and tertiary text |
| gray-700 | `#6B727B` | `#B6BBC4` | Secondary text |
| gray-800 | `#454A52` | `#D2D4D9` | Inverted secondary |
| gray-900 | `#23272D` | `#EDEFF1` | Primary text, primary button |
| gray-950 | `#000000` | `#FFFFFF` | Strongest text, logo |

### Outcome colours

| Token | Light | Dark | Role |
|---|---|---|---|
| green-500 | `#009C39` | `#009431` | Yes buttons and bars |
| green-600 | `#007E26` | `#00AE4B` | Green text accent |
| red-500 | `#DF0C10` | `#DF0B10` | No buttons, critical buttons |
| green-100 / red-100 | `#CDF3D7` / `#FFCFC6` | `#002900` / `#480000` | Yes / No subtle fills |
| yellow-400 | `#FACC15` | `#CA8A04` | Warnings |

### Mode

Both modes are first class. The site follows the system setting; build both from the same tokens. Dark mode uses `#0C0E13` with `#1C1F27` cards and `#2D3037` borders.

## 3. Typography

- **Main family:** Inter, with custom font features (`--inter-font-features`) and a "PPS Inter" variant for some product surfaces.
- **Accents:** Open Sauce (`--font-sauce`) and PPS Instrument Sans Condensed for a few display and promo moments; Geist Mono (`PM Geist Mono`) for numbers in tickers and code-like data.
- **License:** Inter and Geist Mono are free on Google Fonts; use Inter for everything if in doubt.

| Token | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| heading-4xl | 40px | 600 | 44px | -0.025em |
| heading-3xl | 32px | 600 | 36px | -0.01em |
| heading-2xl | 24px | 600 | 28px | -0.015em |
| heading-xl | 20px | 600 | 24px | -0.01em |
| heading-lg | 16px | 600 | 20px | -0.18px |
| body-lg | 16px | 400-500 | 24px | -0.18px |
| body-base | 14px | 500 | 20px | -0.09px |
| body-sm | 13px | 490 | 16px | -0.1px |
| body-xs | 12px | 500 | 16px | -0.1px |

Rules:

- Market titles are questions in sentence case with a "?" and often "by...?": "Next Senate Majority Leader?", "Trump meets with Kim Jong Un by...?".
- Percentages are large and semibold ("31%"); use tabular numbers.
- Nav and tab labels are 15px semibold.
- Keep tracking slightly negative at every size.

## 4. Logo & Brand Mark

The logo is a geometric mark plus the word "Polymarket" in a bold sans. The mark is an outlined trapezoid with a bowtie of two triangles inside, a stylised book or ledger seen in perspective.

- **Colours:** black on light, white on dark. The site paints it with `--color-pk-content-primary`.
- **App icon:** white mark on a blue gradient tile around `#2E5CFF`.
- **Clear space:** at least half the mark's width on every side (approximate).
- **Minimum size:** 16px height for the mark, 96px width for the lockup (approximate).

Misuse:

- Don't colour the wordmark blue on white; blue is for the icon tile.
- Don't fill the mark solid; it is an outline.
- Don't rearrange the mark to the right of the wordmark.

## 5. Components

### Trade buttons (Yes / No)

```css
.trade-btn {
  --ledge: 3px;
  height: 36px; min-width: 60px; padding: 0 12px;
  border-radius: 10px; border: none;
  font: 600 14px/1 Inter; color: #fff;
  background: var(--side, #009C39);
  box-shadow: 0 var(--ledge) 0 0 rgba(0,0,0,0.1);
  transition: transform .12s cubic-bezier(.4,0,.2,1), box-shadow .12s cubic-bezier(.4,0,.2,1), background-color .1s ease-in-out;
}
.trade-btn.no { --side: #DF0C10; }
.trade-btn:active { transform: translateY(var(--ledge)); box-shadow: 0 0 0 0 rgba(0,0,0,0.1); }
.trade-btn:disabled { opacity: .7; pointer-events: none; }
```

A quieter variant uses the subtle fills (`#CDF3D7` with green text, `#FFCFC6` with red text) and shows the price in cents ("Yes 31¢").

### Buttons

| Variant | CSS |
|---|---|
| Primary | `background:#23272D; color:#FFFFFF; border-radius:10px; height:40px; padding:0 16px; font:600 14px Inter;` (`#000` in some contexts) |
| Brand | `background:#2E5CFF; color:#fff;` hover darker via a mix overlay |
| Secondary | `background:#F4F5F7; color:#000;` hover slightly darker grey |
| Critical | `background:#DF0C10; color:#fff;` |
| Ghost / icon | transparent, 32-40px square, 10px radius, hover grey overlay |
| Focus | `ring: 2px` brand-600 or content-secondary, 2px offset |

### Top nav

- 56-64px bar: logo left, search field centre, "Log In" and "Sign Up" (brand blue) right.
- Search: `height:40px; border-radius:12px; background:#F4F5F7; padding:0 10px;` focus turns white with a 3px gray-100 ring and gray-200 border.
- Category rail below: 15px semibold links, `h-10`, 8px radius hover overlay; active link in black, others gray-700.
- Topic chips row: pills or 8px-radius chips in gray-100.

### Market card

```css
.market-card { background:#fff; border-radius:12px; padding:16px; box-shadow: var(--shadow-minimal); display:flex; flex-direction:column; gap:12px; }
.market-card img { width:40px; height:40px; border-radius:8px; object-fit:cover; }
.market-card .title { font:600 14px/20px Inter; color:#000; max-height:40px; overflow:hidden; }
.market-card .chance { font:600 20px/24px Inter; font-variant-numeric: tabular-nums; }
.market-card .meta { font:500 12px/16px Inter; color:#6B727B; }
```

Multi-outcome cards list 2-3 rows ("Rene Haas 31%", "Ian Buck 16%") each with a thin 2px progress bar (`rounded-full`, `#F4F5F7` track, green fill) and small Yes/No buttons. The footer line shows volume and a bookmark icon.

### Other pieces

- Featured carousel: large card with image, question, odds chart and stacked 3D trade buttons.
- Order panel (market page, approximate): Buy/Sell tabs, Yes/No toggle, a large amount input, quick-amount chips and a full-width brand "Trade" button.
- Badges: "Live" is a red dot plus a 12px label; "New" is brand-100 with brand-700 text.
- Dialogs: 12-20px radius, white surface, `--shadow-pk-dialog` (layered soft shadows plus a 1px alpha border).

## 6. Layout & Spacing

- Full-width app layout; content max about 1350-1400px with 16-24px gutters (approximate).
- Market grid: 1 column on mobile, 2 on tablet, 3-4 on desktop, 16px gaps.
- Spacing on a 4px base with 2px half steps (Tailwind 0.5).
- Breakpoints: 600px and 1024px (`lg`) are the main switches seen in the markup.
- High density: small text, tight cards, many items above the fold.

## 7. Depth, Elevation & Motion

- Surfaces are separated by hairline rings rather than heavy shadows: `0 0 0 1px` at low alpha plus tiny stacked blurs (`shadow-pk-minimal`, `shadow-pk-middle`). The site sets the alphas through variables; the 6-8% values in this file are approximate.
- Dialogs and popovers use the layered `shadow-pk-dialog`.
- Trade buttons have the 3px ledge and press down over 120ms with `cubic-bezier(.4,0,.2,1)`.
- Buttons scale to 0.98 on press; colours change over 100-150ms.
- Prices and bars animate smoothly when odds update; respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- Icons: 20px line icons with 1.5-2px stroke in gray-500 to black; filled versions for active states.
- Market thumbnails: square photos or logos (team crests, candidates, company logos), 8px radius.
- Charts: thin lines in brand blue or outcome colours on white, with light gridlines.
- No illustrations; the content is the imagery.

## 9. Voice & Microcopy

- Neutral, terse and data-first. Markets are questions; the UI does not editorialise.
- Labels are one or two words: "Trending", "Breaking", "Live", "Buy Yes", "Sell".
- Use "chance" for probability and cents for price.

Sample strings:

- "The World's Largest Prediction Market"
- "Featured markets", "All markets"
- "Fed Decision in December?"
- "Bitcoin Up or Down - November 16, 4:30PM-4:35PM ET"
- Buttons: "Log In", "Sign Up", "Trade", "Buy Yes", "Buy No"

## 10. Do's and Don'ts

**Do**

- Keep the UI neutral (white or `#0C0E13`) and let green, red and blue carry meaning.
- Use the 3D ledge on trade buttons and nowhere else.
- Write market titles as questions with a clear resolution date.
- Use Inter at 13-16px with slight negative tracking for most UI.
- Support light and dark mode from the same tokens.

**Don't**

- Don't use green or red for decoration.
- Don't use large hero illustrations or marketing copy blocks above the market grid.
- Don't use heavy drop shadows on cards; use hairline rings.
- Don't invent odds, volumes or prices; pull them from live data.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Polymarket. White surface (`#FFFFFF`), grouped areas `#F4F5F7`, borders `#E6E8EC`, text black with secondary `#6B727B`. Inter everywhere with slight negative tracking: headings 600 weight (40/32/24/20px), body 14px/20px weight 500, small 12-13px. Top bar: logo left, 40px search field with 12px radius on `#F4F5F7`, "Log In" ghost and "Sign Up" in brand blue `#2E5CFF`. Below it a horizontal category rail of 15px semibold links (Trending, Breaking, New, Politics, Sports, Crypto, Finance). Main content is a dense grid of market cards: 12px radius, 16px padding, hairline ring shadow `0 0 0 1px rgba(0,0,0,0.06), 0 1px 1px -0.5px rgba(0,0,0,0.06)`, a 40px square thumbnail, a question title ("Fed Decision in December?"), a big percentage, and Yes/No buttons. Yes is green `#009C39`, No is red `#DF0C10`, white text, 10px radius, 36px tall, with a 3px darker ledge `box-shadow:0 3px 0 0 rgba(0,0,0,0.1)` that collapses on press over 120ms. Multi-outcome cards show rows with thin 2px progress bars. Provide a dark theme: `#0C0E13` surface, `#1C1F27` cards, `#2D3037` borders, white text.

```css
:root {
  --pm-brand: #2E5CFF;
  --pm-brand-100: #CADFFF;
  --pm-brand-600: #1C3FE2;
  --pm-brand-700: #0F1AC6;
  --pm-surface: #FFFFFF;
  --pm-grouped: #F4F5F7;
  --pm-border: #E6E8EC;
  --pm-border-elevated: #D4D7DC;
  --pm-text: #000000;
  --pm-text-primary: #23272D;
  --pm-text-secondary: #6B727B;
  --pm-text-tertiary: #8B929B;
  --pm-text-quaternary: #BFC3CA;
  --pm-yes: #009C39;
  --pm-yes-text: #007E26;
  --pm-yes-subtle: #CDF3D7;
  --pm-no: #DF0C10;
  --pm-no-subtle: #FFCFC6;
  --pm-warning: #FACC15;
  --pm-font: "Inter", -apple-system, "Segoe UI", Roboto, sans-serif;
  --pm-font-mono: "Geist Mono", ui-monospace, monospace;
  --pm-radius: 0.7rem;
  --pm-radius-sm: 8px;
  --pm-radius-btn: 10px;
  --pm-radius-card: 12px;
  --pm-shadow-minimal: 0 0 0 1px rgba(0,0,0,0.06), 0 1px 1px -0.5px rgba(0,0,0,0.06), 0 3px 3px -1.5px rgba(0,0,0,0.06);
  --pm-shadow-dialog: 0 4px 40px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06);
  --pm-ledge: 0 3px 0 0 rgba(0,0,0,0.1);
  --pm-ease-press: cubic-bezier(.4,0,.2,1);
}
@media (prefers-color-scheme: dark) {
  :root {
    --pm-surface: #0C0E13;
    --pm-grouped: #1C1F27;
    --pm-border: #2D3037;
    --pm-text: #FFFFFF;
    --pm-text-primary: #EDEFF1;
    --pm-text-secondary: #B6BBC4;
    --pm-brand: #3262FF;
  }
}
```

---

Values are observed from the public polymarket.com site and its CSS on 2026-11-16; values marked approximate are estimates. This file is an unofficial reference and is not affiliated with or endorsed by Polymarket.

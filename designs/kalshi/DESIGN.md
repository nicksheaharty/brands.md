---
name: Kalshi
slug: kalshi
url: https://kalshi.com
category: Finance
tagline: "Clean exchange UI: white canvas, mint-green brand, Yes/No price buttons on every card."
updated: 2026-11-16
appStoreId: 1632713844
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Kalshi Green
    hex: "#00DD94"
    role: Brand color, logo, highlights on dark (2026 identity)
  - name: Action Green
    hex: "#00B67A"
    role: Primary buttons, links and Yes state on light backgrounds
  - name: Ink
    hex: "#0A0A0A"
    role: Primary text, dark mode page background (approximate)
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: No Red
    hex: "#E5484D"
    role: No side, price down, sell (approximate)
  - name: Graphite
    hex: "#1A1A1A"
    role: Headings and body text in help and docs surfaces
  - name: Grey 600
    hex: "#595959"
    role: Secondary text, metadata
  - name: Grey 400
    hex: "#ADADAD"
    role: Tertiary text, placeholders, disabled
  - name: Grey 100
    hex: "#F2F2F2"
    role: Subtle surface, input fill, chips
  - name: Border
    hex: "#E6E6E6"
    role: Card borders and dividers (approximate)
  - name: Legacy Green
    hex: "#09C285"
    role: Pre-2026 brand primary, still seen in older assets
  - name: Error
    hex: "#DF2020"
    role: Validation and error text
fonts:
  display:
    family: "Kalshi Sans"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Kalshi Sans"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "Paper Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 40, weight: 700, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Market Title, size: 24, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Card Title, size: 16, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Probability, size: 28, weight: 600, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 14, weight: 600, lineHeight: 1.0, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.3, tracking: "0" }
radii: { sm: 6, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 2px rgba(0,0,0,0.04)" }
  - { name: Popover, value: "0 8px 24px rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#0A0A0A"
  muted: "#595959"
  border: "#E6E6E6"
  accent: "#00B67A"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Kalshi

## 1. Visual Theme & Atmosphere

Kalshi is a regulated prediction-market exchange, and the interface reads like a trading app crossed with a sports scoreboard. The page is white (or near-black in dark mode), the type is a tight geometric sans, and the only loud color is the mint green of the logo. Everything else is neutral grey so the numbers carry the page.

What makes it recognisable:

- **Prices as the hero.** Every market shows a percentage chance and two buttons, Yes and No, each with a price in cents. The layout is built around those pairs.
- **Mint green identity.** The 2026 wordmark is a bright mint `#00DD94`. On white, interactive green darkens to `#00B67A` for contrast.
- **Dense, scannable grids.** Home is a grid of market cards with small square thumbnails, two or three outcome rows each, and volume in small grey text.
- **Category rail.** A horizontal row of text tabs (Trending, Politics, Sports, Culture, Crypto, Economics, and so on) sits under the header and scrolls sideways on mobile.
- **Thin line charts.** Market pages show a single probability line on a light grid, colored per outcome, with a time-range toggle underneath.
- **Little decoration.** No gradients, no illustrations in the core product. Images are small news-style thumbnails or team logos.

Mood words: fast, factual, neutral, live, confident.

Note: kalshi.com returned a bot check (HTTP 429) during research. Colors below come from Kalshi's own docs (`docs.kalshi.com` theme config), help center CSS, the 2026 logo file and observation of the public app. Values marked approximate were not read from live CSS.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Kalshi Green (light) | `#00DD94` | Logo, brand moments, highlights on dark |
| Action Green (primary) | `#00B67A` | Buttons, links, Yes side on white |
| Legacy Green | `#09C285` | Older brand primary (`--kalshi-palette-brand-primary` in pre-2026 assets) |
| Ink | `#0A0A0A` | Primary text, dark-mode page (approximate) |
| Graphite | `#1A1A1A` | Help center headings and body text |
| Grey 600 | `#595959` | Secondary text, timestamps, volume |
| Grey 400 | `#ADADAD` | Placeholders, disabled labels |
| Border | `#E6E6E6` | Card outlines, dividers (approximate) |
| Grey 100 | `#F2F2F2` | Chips, input fill, hover rows |
| White | `#FFFFFF` | Page and card background |

### Trading colors

| State | Hex | Use |
|---|---|---|
| Yes / up | `#00B67A` text on `#E6F8F1` fill (fill approximate) | Yes button, price up, positive P&L |
| No / down | `#E5484D` text on `#FDECEC` fill (approximate) | No button, price down, negative P&L |
| Error | `#DF2020` text on `#FFDBDB` | Form errors, failed orders |
| Warning | `#B25E00` on `#FFEBDB` (text approximate) | Market paused, pending settlement |

### Dark mode

The app ships a full dark theme. Page `#0A0A0A` (approximate), cards `#141414`, borders `#262626`, primary text `#FFFFFF`, secondary `#A3A3A3`. In dark mode the brand green switches to the brighter `#00DD94` for buttons and links, with near-black `#0A0A0A` text on top.

## 3. Typography

**Family:** Kalshi Sans, a proprietary grotesk served as `KalshiSans-Regular` and `KalshiSans-Semibold` on the help center. The product app uses the same family. Developer docs use Inter for text and Paper Mono for code.

**Licensing:** Kalshi Sans is not available publicly. Use **Inter** as the fallback (it is close in width and x-height). For code and tickers use **JetBrains Mono**.

```css
font-family: "Kalshi Sans", Inter, -apple-system, "Segoe UI", Roboto, sans-serif;
font-feature-settings: "tnum" 1;
```

### Scale (approximate, from the public web app)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display (landing) | 40px | 700 | 1.1 | -0.02em |
| Market title (detail page) | 24px | 600 | 1.2 | -0.01em |
| Section heading | 20px | 600 | 1.25 | -0.01em |
| Card title | 16px | 600 | 1.3 | 0 |
| Probability (big number) | 28px | 600 | 1.0 | -0.01em |
| Body | 14px | 400 | 1.5 | 0 |
| Button / price | 14px | 600 | 1.0 | 0 |
| Caption, volume | 12px | 500 | 1.3 | 0 |

Mobile keeps the same sizes except Display (28-32px) and Market title (20px).

### Rules

- Sentence case everywhere: "Trending", "Buy Yes", "Market rules".
- Prices are cents with the ¢ sign ("Yes 62¢"). Probabilities are whole percents ("62%").
- Always use tabular numerals for prices, percentages and volume so columns do not jitter while live.
- Semibold (600) for anything clickable or numeric; regular (400) for descriptions and rules text.
- Ticker codes (for example `KXFEDDECISION`) use the mono family at 12px.

## 4. Logo & Brand Mark

The logo is the word **Kalshi** in a heavy, rounded geometric sans, set in mint green. The 2026 version has a square-cut "K", a single-storey "a" and a round dot on the "i". There is no separate symbol in the lockup; the "K" alone is used as an app and social avatar.

- **Color versions:** Kalshi Green `#00DD94` on white or black (primary), black on green, white on photography.
- **Clear space:** at least the height of the "a" on all sides.
- **Minimum size:** 64px wide on screen.
- **Avatar:** the "K" from the wordmark, centred on a green or black square.

Misuse:

- Do not swap the green for the darker Action Green in the logo itself.
- Do not set "Kalshi" in Inter or another font to fake the logo.
- Do not outline, add shadows or put it on a busy photo without a scrim.
- Do not use the older `#09C285` wordmark next to the 2026 one.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary (Sign up, Place order) | `#00B67A` | `#FFFFFF` 14px/600 | none | 8px | 40px |
| Secondary (Log in) | `#FFFFFF` | `#0A0A0A` | 1px `#E6E6E6` | 8px | 40px |
| Yes outcome | `#E6F8F1` | `#00B67A` 14px/600 | none | 6px | 36px |
| No outcome | `#FDECEC` | `#E5484D` 14px/600 | none | 6px | 36px |
| Ghost / tab | transparent | `#595959` | none | 6px | 32px |

States:

- Hover primary: darken to `#009E6A` (approximate). Hover Yes/No: fill goes one step stronger and the text stays the same.
- Selected Yes/No (in the order ticket): solid fill `#00B67A` or `#E5484D` with white text.
- Focus: `outline: 2px solid #00B67A; outline-offset: 2px`.
- Disabled: `#F2F2F2` fill, `#ADADAD` text.

```css
.btn-yes {
  font: 600 14px/1 var(--brand-font);
  font-variant-numeric: tabular-nums;
  background: #E6F8F1; color: #00B67A;
  border: 0; border-radius: 6px;
  height: 36px; padding: 0 12px;
  display: inline-flex; align-items: center; gap: 4px;
  transition: background-color .15s ease;
}
.btn-yes:hover { background: #CCF1E3; }
```

### Market card (signature)

- White card, 1px `#E6E6E6` border, 12px radius, 16px padding, no shadow (or the faint Card shadow).
- Top row: 40px square thumbnail (8px radius) + 16px/600 title, two lines max.
- Outcome rows: label left (14px/500), percent right (14px/600), then a Yes and a No button. Binary markets show one big percent and a single Yes/No pair.
- Footer: "$X vol" and close date in 12px `#595959`, plus a bookmark icon.
- Hover: border darkens to `#D4D4D4`; whole card is a link except the buttons.

### Order ticket

Right-hand panel on market pages (bottom sheet on mobile). Tabs "Buy" / "Sell", a Yes/No segmented toggle, an amount input with $ prefix, a summary ("Avg price", "Payout if Yes") in 14px rows, and a full-width primary button "Review order". Radius 12px, 1px border, 20px padding.

### Inputs

- Height 44px, radius 8px, background `#F2F2F2` or white with 1px `#E6E6E6`.
- Text 16px (to avoid iOS zoom), placeholder `#ADADAD`.
- Focus: border `#00B67A` + `0 0 0 3px rgba(0,182,122,0.2)`.
- Search in the header is a pill (radius 9999px), 40px tall, with a 16px magnifier icon.

### Navigation

- Header 64px, white, 1px bottom border. Logo left, search center-left, then "Log in" (secondary) and "Sign up" (primary) right.
- Below it, the category rail: 14px/500 text tabs, `#595959` inactive, `#0A0A0A` active with a 2px underline in ink (not green).
- Mobile: bottom tab bar (Home, Search, Portfolio, Account) with 24px line icons.

### Charts

- Single or multi-line probability chart, 2px strokes, outcome colors from a short palette (green, blue `#3B82F6`, orange `#F59E0B`, purple `#8B5CF6`; approximate).
- Light dotted horizontal grid in `#F2F2F2`, y-axis 0-100% on the right in 12px grey.
- Range toggle under the chart: "1D 1W 1M ALL" as small ghost buttons, active one in `#F2F2F2`.

### Badges

12px/600, radius 9999px, 2px 8px padding. "Live" uses red text with a pulsing 6px dot; "New" uses green on light green; category tags use `#595959` on `#F2F2F2`.

### Lists and tables

Portfolio and order book use plain rows: 48px tall, 1px `#F2F2F2` dividers, numbers right-aligned in tabular figures, positive values green, negative red.

### Modals

White, radius 16px, max width 440px, 24px padding, scrim `rgba(0,0,0,0.5)`. Title 20px/600, close icon top right. Order confirmation modals show the summary table and one full-width primary button.

## 6. Layout & Spacing

- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 48, 64px. Card padding is 16px; gaps between cards 16px.
- **Content width:** about 1280px max for the home grid; market detail is a two-column layout (chart and rules left, about 760px; order ticket right, about 360px, sticky).
- **Grid:** 4 columns of market cards on wide desktop, 3 on laptop, 2 on tablet, 1 on mobile.
- **Gutters:** 16px mobile, 24px desktop.
- **Breakpoints:** roughly 640, 768, 1024, 1280px.
- **Density:** high. Multiple outcomes and prices in a small card is the norm; avoid large empty heroes.

## 7. Depth, Elevation & Motion

- Mostly flat. Cards use a 1px border; shadows are reserved for popovers and menus: `0 8px 24px rgba(0,0,0,0.12)`.
- Bottom sheets on mobile: 16px top radius, `0 -4px 24px rgba(0,0,0,0.12)`.
- Price changes flash: the number tints green or red for about 600ms then fades back.
- Durations: 150ms for hover and press, 200-250ms for sheets and dropdowns, ease-out (`cubic-bezier(0.2, 0, 0, 1)`; approximate).
- Charts draw instantly; the live dot at the line's end pulses gently.

## 8. Iconography & Imagery

- Icons: simple 1.5-2px stroke line icons, 16-24px, rounded joins, in `#595959` or ink. Filled variants for active tab-bar states.
- Thumbnails: small square photos (news photos, politician headshots, team logos, crypto coins) at 40-48px with 8px radius. No full-bleed lifestyle photography in the product.
- Marketing and ads use bold photography with the green wordmark and large white type, but the app stays neutral.

## 9. Voice & Microcopy

- Short, direct, finance-literate without jargon. Questions as market titles: "Will the Fed cut rates in December?"
- Buttons: "Sign up", "Log in", "Buy Yes", "Buy No", "Review order", "Place order", "Sell".
- Labels: "Chance", "Vol", "Payout if Yes", "Avg price", "Market rules", "Closes Dec 10".
- Use cents for prices and percent for chances; never mix them in one label.
- Avoid betting language like "wager" or "odds boost"; Kalshi frames it as trading on events.

## 10. Do's and Don'ts

**Do**

- Put Yes/No price pairs on every market card and keep them aligned in a column.
- Use tabular numerals for every number.
- Keep the palette neutral and let green and red mean Yes/up and No/down.
- Use the mint `#00DD94` for the logo and dark-mode accents, `#00B67A` for buttons on white.
- Keep cards compact with 12px radius and 1px borders.

**Don't**

- Don't use green for decoration that is not Yes, positive or brand.
- Don't add gradients, glows or heavy shadows to cards.
- Don't hide the probability; it should be the largest number on a card.
- Don't use playful casino styling, confetti or slot-machine motion.
- Don't round buttons into full pills, except the search field and badges.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Kalshi, a prediction-market exchange. White page, ink text `#0A0A0A`, secondary text `#595959`, borders `#E6E6E6`, subtle fills `#F2F2F2`. Font: `"Kalshi Sans", Inter, sans-serif` with tabular numerals on. Header 64px with a mint green `#00DD94` "Kalshi" wordmark, a pill search field and "Log in" / "Sign up" buttons; the primary button is `#00B67A` with white 14px/600 text, 8px radius, 40px tall. Under the header add a horizontal category rail of 14px tabs with an ink underline on the active one. The main grid shows market cards: white, 1px border, 12px radius, 16px padding, a 40px thumbnail and 16px/600 question title, then outcome rows each with a percent and two small buttons, "Yes 62¢" (green `#00B67A` on `#E6F8F1`) and "No 39¢" (red `#E5484D` on `#FDECEC`), 6px radius. Footer line "$1.2M vol" in 12px grey. Market detail pages have a thin-line probability chart on the left and a sticky order ticket on the right. Keep it flat, dense and numeric; no gradients.

```css
:root {
  --brand-green: #00DD94;
  --brand-action: #00B67A;
  --brand-action-hover: #009E6A;
  --brand-green-legacy: #09C285;
  --brand-yes: #00B67A;
  --brand-yes-fill: #E6F8F1;
  --brand-no: #E5484D;
  --brand-no-fill: #FDECEC;
  --brand-ink: #0A0A0A;
  --brand-text: #1A1A1A;
  --brand-text-secondary: #595959;
  --brand-text-tertiary: #ADADAD;
  --brand-border: #E6E6E6;
  --brand-surface: #F2F2F2;
  --brand-bg: #FFFFFF;
  --brand-error: #DF2020;
  --brand-dark-bg: #0A0A0A;
  --brand-dark-card: #141414;
  --brand-dark-border: #262626;
  --brand-font: "Kalshi Sans", "Inter", -apple-system, "Segoe UI", Roboto, sans-serif;
  --brand-font-mono: "Paper Mono", "JetBrains Mono", Menlo, monospace;
  --brand-radius-sm: 6px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-shadow-card: 0 1px 2px rgba(0,0,0,0.04);
  --brand-shadow-pop: 0 8px 24px rgba(0,0,0,0.12);
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
}
```

---

Values are observed from Kalshi's public docs, help center and app; kalshi.com itself blocked automated fetches, so several values are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Kalshi.

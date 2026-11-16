---
name: Kraken
slug: kraken
url: https://kraken.com
category: Finance
tagline: "Crypto exchange in Kraken purple on white, rounded tentacle mark and soft 12px corners."
updated: 2026-11-16
appStoreId: 1481947260
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Kraken Purple
    hex: "#7132F5"
    role: Logo, primary buttons, brand text, links
  - name: Ink
    hex: "#101114"
    role: Headings and body text, dark surfaces
  - name: White
    hex: "#FFFFFF"
    role: Page canvas
  - name: Purple Deep
    hex: "#5B1ECF"
    role: Button hover and pressed
  - name: Purple Light
    hex: "#8A61FF"
    role: Brand colour in dark mode
  - name: Lavender
    hex: "#9D82FE"
    role: Illustrations, chart accents
  - name: Purple Mist
    hex: "#F1EFFF"
    role: Tinted panels, selected states
  - name: Slate
    hex: "#686B82"
    role: Secondary text, strong borders
  - name: Grey Blue
    hex: "#9497A9"
    role: Tertiary text, placeholders
  - name: Hover Grey
    hex: "#F6F5F9"
    role: Hover background on menus and rows
  - name: Cloud
    hex: "#F7F7FA"
    role: Subtle section background
  - name: Positive
    hex: "#149E61"
    role: Gains, success
  - name: Negative
    hex: "#D11D45"
    role: Losses, errors
  - name: Warning
    hex: "#FFCD60"
    role: Warnings
  - name: Info
    hex: "#0092D8"
    role: Info states
  - name: Night
    hex: "#0D0D0D"
    role: Dark section background
fonts:
  display:
    family: "Kraken-Brand"
    fallback: "IBM Plex Sans"
    weights: [500, 700]
  body:
    family: "Kraken-Product"
    fallback: "IBM Plex Sans"
    weights: [400, 500, 600]
  mono:
    family: "Kraken Plex Mono"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: Display 1, size: 80, weight: 500, lineHeight: 0.8, tracking: "-1px" }
  - { role: Display 2, size: 64, weight: 500, lineHeight: 0.875, tracking: "-1px" }
  - { role: Display 3, size: 36, weight: 500, lineHeight: 1.0, tracking: "-1px" }
  - { role: Heading 1, size: 40, weight: 600, lineHeight: 1.25, tracking: "-0.5px" }
  - { role: Heading 2, size: 32, weight: 600, lineHeight: 1.25, tracking: "-0.5px" }
  - { role: Heading 3, size: 24, weight: 600, lineHeight: 1.33, tracking: "-0.5px" }
  - { role: Body 1, size: 18, weight: 400, lineHeight: 1.44, tracking: "0" }
  - { role: Label, size: 14, weight: 500, lineHeight: 1.43, tracking: "0" }
radii: { sm: 8, md: 12, lg: 20, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Subtle, value: "0 1px 2px rgba(16,24,40,0.04)" }
  - { name: Menu, value: "0 12px 16px -4px rgba(16,24,40,0.06)" }
  - { name: Floating, value: "0 34px 14px rgba(0,0,0,0.01), 0 19px 12px rgba(0,0,0,0.03), 0 9px 9px rgba(0,0,0,0.05), 0 2px 5px rgba(0,0,0,0.05)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7FA"
  text: "#101114"
  muted: "#686B82"
  border: "#E1E1E7"
  accent: "#7132F5"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: solid
---

# Kraken

## 1. Visual Theme & Atmosphere

Kraken is a crypto exchange and trading platform (spot, futures, margin, stocks and ETFs in some regions, a self-custody wallet and the Krak money app), operated by Payward. Its site, kraken.com, is a light, friendly fintech page built around one strong purple. It feels less like a trading terminal and more like a consumer app with depth underneath.

What makes it recognisable:

- **Kraken Purple `#7132F5`.** The logo, the primary buttons, brand text and the app icon all use it. In dark mode it lightens to `#8A61FF`.
- **The tentacle mark.** A rounded dome with four rounded "legs", reading as a friendly octopus or a stylised "m". The wordmark "kraken" is lowercase with soft geometric shapes.
- **Soft, rounded UI.** The default shape theme uses 12px radius on buttons, inputs and cards, 20px on containers, dialogs and banners, and full pills for chips and some campaign buttons.
- **Custom type.** Kraken-Brand for big display lines, Kraken-Product for UI and body, and Kraken Plex Mono for numbers and the agent CLI sections. IBM Plex Sans is the declared fallback.
- **Glass surfaces.** Nav and menu panels use translucent "glass" tokens (`#FFFFFF1A`, `#0A0A0CB8` scrim) with blur over imagery.
- **Market data as content.** Price tables, asset icons, and live tickers sit on the homepage alongside marketing copy.

Mood words: friendly, trustworthy, playful-serious, clear, product-led.

## 2. Color Palette & Roles

Values come from the live kraken.com CSS (`--colors-ds-semantic-*`, `--background-color-ds-*`, magic-light theme).

| Name | Hex | Role |
|---|---|---|
| Kraken Purple | `#7132F5` | `content-brand` (light), primary button `button-brand-high` |
| Purple Deep | `#5B1ECF` | Hover and pressed |
| Purple Light | `#8A61FF` | `content-brand` in dark theme |
| Lavender | `#9D82FE` | Illustrations, charts |
| Purple Mist | `#F1EFFF` | Tinted panels, selected rows |
| Ink | `#101114` | `content-primary`, headings, body |
| Slate | `#686B82` | Secondary text, `border-strong` |
| Grey Blue | `#9497A9` | Tertiary text, placeholder |
| Ash | `#484B5E` | Text on tinted surfaces |
| Border default | `#686B8229` | 16% slate hairlines |
| Hover Grey | `#F6F5F9` | Row and menu hover |
| Cloud | `#F7F7FA` | Subtle section fill |
| Panel | `#E8E8ED` | Responsive panel background |
| White | `#FFFFFF` | Canvas |
| Night | `#0D0D0D` | Dark sections (`--ds-bg-color`) |
| Charcoal | `#1A1B22` | Raised dark surface |

### Semantic

| State | Solid | Subtle (16% alpha) | Dark-mode solid |
|---|---|---|---|
| Positive | `#149E61` | `#149E6129` | `#23BA75` |
| Negative | `#D11D45` | `#F5395E29` | `#FF7386` |
| Warning | `#FFCD60` | `#C3962129` | `#FFCD60` |
| Info | `#0092D8` | `#0092D829` | `#00ADFE` |

Subtle versions are the solid colour at about 16% opacity and are used for badge, pill and low-emphasis button fills.

### Sub-brand themes

Kraken's CSS ships other themes: Payward corporate uses teal-grey `#4A737E`, and the Krak payments app uses red-orange `#FF3B29` on dark. Keep these out of the main Kraken UI.

## 3. Typography

- **Kraken-Brand**: display and marketing headlines.
- **Kraken-Product**: product UI, body, labels, buttons.
- **Kraken Plex Mono** / **Kraken-Mono**: prices, order books, code and CLI snippets.
- **Financier Display** (serif) is used for editorial headings in some themes; Montserrat, Söhne, Tajawal and Noto Sans load for other themes and scripts.

All Kraken families are proprietary. The CSS declares **IBM Plex Sans** as the fallback, and **IBM Plex Mono** suits the mono role; both are on Google Fonts.

| Token | Size (desktop) | Weight | Line height | Tracking |
|---|---|---|---|---|
| display1 | 80px (48px mobile) | 500 | 64px | -1px |
| display2 | 64px | 500 | 56px | -1px |
| display3 | 36px | 500 | 36px | -1px |
| heading1 | 40px (28px mobile) | 600 | 50px | -0.5px |
| heading2 | 32px | 600 | 40px | -0.5px |
| heading3 | 24px | 600 | 32px | -0.5px |
| heading4 | 18-20px | 600 | 26px | 0 |
| body1 | 18px (16px mobile) | 400 | 26px | 0 |
| body2 | 16px (14px mobile) | 400 | 24px | 0 |
| label | 14-16px | 500 | 20-24px | 0 |
| caption1 | 12-14px | 500 | 16px | 0.5px |

Rules:

- Display lines are set very tight (line-height below 1) and short, often two or three words ("Own the power of your money").
- Sentence case throughout. Buttons in label weight 500 or 600.
- Prices, percentages and volumes in mono or tabular figures; right-align numeric columns.
- Captions may be uppercase with 0.5-0.84px tracking.

## 4. Logo & Brand Mark

- The logo is the **tentacle mark** (a semicircular dome with four rounded legs) followed by the lowercase **kraken** wordmark with rounded terminals.
- Primary: Kraken Purple `#7132F5` on white. Reversed: white on purple or Night.
- The mark alone, white on purple in a rounded square, is the app icon and favicon; Kraken's own icon adds a faint pink-lilac gradient sheen.
- A "by PAYWARD" endorsement line appears under the logo in some contexts.
- Clear space: at least the width of one leg-gap around the lockup (approximate).
- Minimum size: mark 16px, lockup 80px wide (approximate).
- Don't stretch the dome, change the number of legs, outline it, or recolour it to the sub-brand teal or red.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 48px; padding: 0 24px;                    /* md; approximate */
  border-radius: 12px; border: 0;
  font: 500 16px/24px "Kraken-Product", "IBM Plex Sans", Helvetica, sans-serif;
  transition: background-color .16s ease-out;
}
.btn-primary  { background: #7132F5; color: #FFFFFF; }
.btn-primary:hover  { background: #5B1ECF; }
.btn-secondary { background: #7132F529; color: #7132F5; }       /* "medium" emphasis */
.btn-secondary:hover { background: #7132F552; }
.btn-neutral  { background: #101114; color: #FFFFFF; }
.btn-neutral:hover { background: #414141; }
.btn-ghost    { background: transparent; color: #101114; }
.btn-ghost:hover { background: #F6F5F9; }
.btn:focus-visible { outline: 2px solid #7132F5; outline-offset: 2px; }
```

- Sizes run xxs to xxl; small sizes drop to 8px radius. Campaign and Payward themes use full pills (9999px).
- Each semantic tone (positive, negative, warning, info) has high (solid), medium (16% fill) and low (text-only) emphasis.

### Inputs

- 48px tall (md), 12px radius, white fill with a 1px `#686B8229` border; textarea 12px radius; large (xxl) 20px.
- Focus: 2px Kraken Purple border. Error: `#D11D45` border with an error tooltip (8px radius).
- Amount inputs show the asset icon and ticker inside the field and a mono value.

### Navigation

- Header with logo left (22px tall at wide sizes, 20px below 1264px), menu items "Crypto", "Trade", "Earn", "Pro", "Institutions", "Learn", 16px Kraken-Product 500.
- Right: "Sign in" ghost button and purple "Sign up" button.
- Mega-menu panels: 12px radius, white or glass, two columns of brand-header items (each product logo with a one-line description like "Multi-asset investing", "Advanced trading platform") and feature lists. Menu items use 8px radius and `#F6F5F9` hover.

### Asset table

- Rows 64-72px tall: asset icon (8px radius square or circle), name and ticker, price in mono, 24h change coloured positive or negative with a subtle background pill, sparkline, and a "Buy" button.
- Row radius 8px on hover; table group radius 6px.

### Cards and containers

- Cards 12px radius on Cloud `#F7F7FA` or white with a hairline; containers, banners, dialogs and popovers 20px.
- Feature cards pair a short Kraken-Brand headline with an app screenshot.

### Segmented control and tabs

- Container on `#F6F5F9` with 12px radius; active segment white, 10px radius. Tabs 12px radius (md), 16px (lg).

### Badges and pills

- Pill radius 8px (md), 12px (lg); 12-14px label weight 500; tone fills at 16% alpha.

### Notifications and tooltips

- Toasts 16px radius, tooltips 12px radius, Ink background with white text for tooltips.

## 6. Layout & Spacing

- Max content width around 1280px with responsive panel padding; wide hero sections up to 1536px.
- Breakpoints: 640px, 768px, 1024px, 1264px, 1536px.
- Spacing tokens on a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Section padding 64-96px desktop, 48px mobile.
- Homepage alternates full-width product sections with centred headlines and two-column feature rows.

## 7. Depth, Elevation & Motion

- Mostly flat with hairlines and tinted fills.
- Menus: `0 12px 16px -4px rgba(16,24,40,.06)`. Floating elements: a layered soft shadow (see frontmatter).
- Glass surfaces: translucent fills plus backdrop blur, with a scrim `#0A0A0CB8` behind modals.
- Motion: 160ms ease-out for widths and colours, 300-350ms for drawers and popovers (`transform .32s` with delayed visibility). Logo hover uses `cubic-bezier(0,-0.01,0.19,0.99)` at 75ms.

## 8. Iconography & Imagery

- Icons: 24px line icons with about 1.5px strokes and rounded joins (Chevron, Search, social logos), in Ink or Slate; brand-coloured on hover.
- Asset icons: full-colour token logos in circles.
- Imagery: 3D renders of the purple mark, coins and phones; soft lilac gradients; app screenshots in device frames.
- Illustrations stay in the purple and lavender range.

## 9. Voice & Microcopy

- Clear, confident and a bit playful; emphasises security and control.
- Headlines: "Own the power of your money", "The command center for active traders", "Secure your crypto with self custody", "Make your first move".
- Buttons: "Sign up", "Sign in", "Open your free account", "View all cryptocurrencies", "Explore the app".
- Risk and eligibility notes follow trading claims in 12px Slate text.

## 10. Do's and Don'ts

**Do**

- Use Kraken Purple `#7132F5` for the logo and primary actions on white.
- Use Ink `#101114` text and slate `#686B82` secondary text.
- Use 12px radius for buttons, inputs and cards; 20px for containers and dialogs.
- Use 16% alpha tone fills for badges and secondary buttons.
- Show prices in mono with positive and negative colours.

**Don't**

- Don't mix in the Payward teal or Krak red in Kraken screens.
- Don't use heavy, dark drop shadows.
- Don't set long display lines; keep them to a few words.
- Don't use the purple for negative or warning states.
- Don't use square corners on interactive elements.

## 11. Agent Prompt Guide

> Build this UI in the style of Kraken. White canvas, text Ink `#101114`, secondary Slate `#686B82`, tertiary `#9497A9`, hairlines `#686B8229`, subtle sections `#F7F7FA`, hover `#F6F5F9`. Brand colour Kraken Purple `#7132F5` (hover `#5B1ECF`, tint `#F1EFFF`, dark-mode `#8A61FF`). Font: "Kraken-Brand" for display and "Kraken-Product" for UI, both falling back to IBM Plex Sans; prices in IBM Plex Mono. Display headlines 64-80px weight 500, line-height below 1, -1px tracking; headings 24-40px weight 600; body 16-18px. Buttons 48px tall, 12px radius, purple with white text; secondary buttons use purple at 16% alpha with purple text. Cards 12px radius, containers and dialogs 20px. Semantic: positive `#149E61`, negative `#D11D45`, warning `#FFCD60`, info `#0092D8`, each with a 16% alpha subtle fill. Asset tables show icon, name, mono price, coloured 24h change and a Buy button. Menus use glass panels with a soft `0 12px 16px -4px rgba(16,24,40,.06)` shadow. Logo: purple tentacle dome plus lowercase "kraken".

```css
:root {
  --kraken-purple: #7132F5;
  --kraken-purple-deep: #5B1ECF;
  --kraken-purple-light: #8A61FF;
  --kraken-lavender: #9D82FE;
  --kraken-purple-mist: #F1EFFF;
  --kraken-ink: #101114;
  --kraken-slate: #686B82;
  --kraken-grey-blue: #9497A9;
  --kraken-border: #686B8229;
  --kraken-hover: #F6F5F9;
  --kraken-cloud: #F7F7FA;
  --kraken-white: #FFFFFF;
  --kraken-night: #0D0D0D;
  --kraken-positive: #149E61;
  --kraken-negative: #D11D45;
  --kraken-warning: #FFCD60;
  --kraken-info: #0092D8;
  --kraken-font-brand: "Kraken-Brand", "IBM Plex Sans", Helvetica, Arial, sans-serif;
  --kraken-font-product: "Kraken-Product", "IBM Plex Sans", Helvetica, Arial, sans-serif;
  --kraken-font-mono: "Kraken Plex Mono", "IBM Plex Mono", monospace;
  --kraken-radius-sm: 8px;
  --kraken-radius-md: 12px;
  --kraken-radius-container: 20px;
  --kraken-radius-round: 9999px;
  --kraken-shadow-menu: 0 12px 16px -4px rgba(16,24,40,.06);
  --kraken-scrim: #0A0A0CB8;
  --kraken-transition: .16s ease-out;
}
```

---

Values are observed from the public kraken.com CSS on 2026-11-16; button padding, input heights, the hover purple's role, icon stroke, content width, logo clear space and minimum size are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Payward, Inc. or Kraken.

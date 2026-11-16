---
name: Synchrony
slug: synchrony
url: https://synchrony.com
category: Finance
tagline: "Warm off-white, near-black type and golden-yellow pill buttons for consumer financing."
updated: 2026-11-16
appStoreId: 1280992496
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Synchrony Gold
    hex: "#FBC600"
    role: Brand colour, logo bars, accents, app icon background
  - name: Button Yellow
    hex: "#FFD549"
    role: Primary button fill
  - name: Ink
    hex: "#090909"
    role: Headlines, button text, outlined button border
  - name: Charcoal
    hex: "#3B3D49"
    role: Body text, wordmark, dark panels
  - name: Linen
    hex: "#FAF9F6"
    role: Warm off-white page and outlined button background
  - name: White
    hex: "#FFFFFF"
    role: Cards and tiles
  - name: Yellow Hover
    hex: "#FFE779"
    role: Primary and outlined button hover fill
  - name: Gold Pressed
    hex: "#F7BE00"
    role: Primary button active
  - name: Slate
    hex: "#62657B"
    role: Secondary text
  - name: Mist
    hex: "#F3F6F6"
    role: Cool light section background
  - name: Fog
    hex: "#E8E9EC"
    role: Dividers, tile borders
  - name: Pebble
    hex: "#DADADA"
    role: Disabled fill, light borders
  - name: Blue 700
    hex: "#006899"
    role: Links and info accents
  - name: Green 600
    hex: "#3E8529"
    role: Success, savings rate highlights
  - name: Red
    hex: "#D91C18"
    role: Errors
fonts:
  display:
    family: "Season Sans"
    fallback: "DM Sans"
    weights: [500, 700]
  body:
    family: "Season Sans"
    fallback: "DM Sans"
    weights: [400, 500, 700]
typeScale:
  - { role: Display 1, size: 80, weight: 500, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: H1, size: 60, weight: 500, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H2, size: 48, weight: 500, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H3, size: 40, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: Subtitle 1, size: 28, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Button, size: 18, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Disclaimer, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]
shadows:
  - { name: Tile, value: "0 12px 18px rgba(59,61,73,0.12)" }
  - { name: Card Hover, value: "0 12px 24px rgba(59,61,73,0.16)" }
  - { name: Modal, value: "4px 14px 40px rgba(59,61,73,0.3)" }
preview:
  bg: "#FAF9F6"
  surface: "#FFFFFF"
  text: "#090909"
  muted: "#62657B"
  border: "#E8E9EC"
  accent: "#FFD549"
  accentText: "#090909"
  radius: 9999
  buttonStyle: pill
---

# Synchrony

## 1. Visual Theme & Atmosphere

Synchrony is the consumer-financing company behind store credit cards, CareCredit, Pay Later plans and Synchrony Bank savings. Its site is a shopping-and-financing hub: seasonal deals, partner brands and "find your way to pay". The look is warm and retail-friendly: a linen off-white page (`#FAF9F6`), near-black type, and golden-yellow pill buttons that echo the gold bars in the logo.

What makes it recognisable:

- **Gold on linen.** The only strong colour is gold, from brand gold `#FBC600` to button yellow `#FFD549`. Everything else is near-black, charcoal and warm off-white.
- **Black text on yellow.** Primary buttons are yellow with black (`#090909`) bold labels, never white text.
- **Big, calm headlines.** Season Sans at 48-80px, medium weight, with a "Season Mix" variant for occasional expressive display lines.
- **Rounded, retail tiles.** Deal tiles and category tiles use 8-12px corners and soft charcoal-tinted shadows.
- **Three ascending bars.** The logo mark is three gold rectangles stepping up, like a small bar chart. The app icon is those bars in black on gold.
- **Marketplace layout.** Carousels of offers, "Shop by category" chips, partner logos (Lowe's, Sam's Club, Floor & Decor) and a banking band.

Mood words: warm, helpful, retail, optimistic, straightforward.

## 2. Color Palette & Roles

The site's CSS exposes gold, blue, green, orange and neutral ramps (`--color-gold-300` and so on) plus explicit button tokens (`--btn-primary-bg`, `--btn-outlined-*`).

### Gold

| Token | Hex | Role |
|---|---|---|
| gold-50 | `#FFFAE9` | Pale highlight panels |
| gold-100 | `#FFEA9E` | Soft fills |
| gold-200 | `#FFD848` | Near the button yellow |
| gold-300 | `#FBC600` | Brand gold, logo bars |
| gold-400 | `#E2B200` | Darker gold on light backgrounds |
| gold-500 | `#BC9500` | Gold text where contrast is needed |
| Button Yellow | `#FFD549` | `--btn-primary-bg` |
| Yellow Hover | `#FFE779` | `--btn-primary-hover-bg`, outlined hover |
| Gold Pressed | `#F7BE00` | `--btn-primary-active-bg` |

### Neutrals

| Name | Hex | Role |
|---|---|---|
| Ink | `#090909` | Headlines, button labels, outlines |
| Charcoal | `#3B3D49` | Body text, logo text, dark bands |
| neutral-900 | `#2D2E35` | Darkest panel |
| neutral-800 | `#3B3C43` | Footer |
| Slate | `#62657B` | Secondary text |
| neutral-600 | `#717380` | Meta text |
| neutral-500 | `#ADAFB7` | Placeholder |
| Pebble | `#DADADA` | Disabled fill and border |
| Fog | `#E8E9EC` | Dividers |
| Mist | `#F3F6F6` | Cool light section |
| Linen | `#FAF9F6` | Page background |
| White | `#FFFFFF` | Cards |

### Supporting

| Name | Hex | Role |
|---|---|---|
| blue-700 | `#006899` | Links, info |
| blue-50 | `#F1F9FD` | Info panels |
| green-600 | `#3E8529` | Success, savings highlights |
| orange-500 | `#D76B00` | Warnings |
| Red | `#D91C18` | Errors |
| Teal | `#2E6D62` | Healthcare (CareCredit) accents (approximate role) |

### Mode

Light only. Dark bands use charcoal `#3B3D49` or near-black with linen text and a "dark secondary" outlined button (linen border, linen text, hover fills linen).

## 3. Typography

- **Family:** Season Sans (served as "SYF Season Sans"), with Season Mix for expressive display and the older Synchrony Sans as a fallback. Stack: `"Season Sans", "SYF Season Sans", "Synchrony Sans", Helvetica, sans-serif`.
- **License:** commercial. **DM Sans** is a close free substitute for Season Sans.
- Weights in use: 300, 400, 500, 600, 700. Buttons are 700.

Responsive tokens from the CSS (mobile / tablet / desktop):

| Token | Sizes |
|---|---|
| display-1 | 48 / 52 / 80px |
| display-2 | 32 / 40 / 60px |
| h1 | 32 / 40 / 60px |
| h2 | 28 / 36 / 48px |
| h3 | 24 / 32 / 40px |
| h4 | 22 / 28 / 36px |
| h5 | 20 / 24 / 32px |
| h6 | 18 / 20 / 24px |
| subtitle-1 | 24 / 28px |
| subtitle-2 | 18 / 20px |
| eyebrow-1 | 16 / 18px |
| body-1 | 16px |
| body-2 | 14px |
| disclaimer | 12px |
| button | 18px / 24px, weight 700 |

Rules:

- Sentence case headings: "Make the season more rewarding", "Find your way to pay".
- Nav labels are uppercase: FINANCING, BANKING, MARKETPLACE, BUSINESS, ABOUT US, HELP.
- Promotional financing terms always come with a disclaimer at 12px.

## 4. Logo & Brand Mark

The logo pairs three gold bars with the lowercase word "synchrony" in charcoal. The bars step: a short one at the bottom left, a tall one in the middle, a short one at the top right. Some lockups add "FINANCIAL" below the wordmark.

- **Colours:** bars gold (`#F9C20A` in the vector file, close to `#FBC600`), text charcoal `#343741`; reversed version uses white text.
- **Clear space:** at least the width of one bar on every side (approximate).
- **Minimum size:** about 100px wide for the full lockup (approximate).
- **App icon:** the bars alone, black, on gold.

Misuse:

- Don't reorder or recolour the bars.
- Don't set the wordmark in caps.
- Don't place the logo on button yellow; use linen, white or charcoal.

## 5. Components

### Buttons

Base: `height:52px; padding:16px 24px; border-radius:9999px; font:700 18px/24px "Season Sans"; gap:10px;`

| Variant | Default | Hover | Active | Focus |
|---|---|---|---|---|
| Primary | bg `#FFD549`, text `#090909` | bg `#FFE779` | bg `#F7BE00` | border `#090909` |
| Outlined | bg `#FAF9F6`, 1px border `#090909`, text `#090909` | bg `#FFE779` | bg `#FFD549` | `0 0 0 1px #FAF9F6, 0 0 0 4px #090909` |
| Outlined on dark | transparent, border `#FFFFFF`, text white | bg `#FFE779`, text `#090909` | bg `#F6F6F6` | `0 0 0 1px #222, 0 0 0 4px #fff` |
| Dark secondary | transparent, border `#FAF9F6`, text `#FAF9F6` | bg `#FAF9F6`, text `#090909` | bg `#DADADA` | `0 0 0 1px #222, 0 0 0 4px #FAF9F6` |
| Disabled | bg `#DADADA`, text `#9D9D9D` | | | |

### Header

- Linen or white bar; logo left; uppercase nav: FINANCING, BANKING, MARKETPLACE, BUSINESS, ABOUT US, HELP.
- Right: "Sign in" opens a panel with Consumer and Business tabs.
- Sticky header height about 132px with search and login rows (`--sticky-nav-height: 132px`).
- Mega-menu left panel 320px wide with product families (Synchrony Mastercards, CareCredit, Synchrony HOME, Synchrony Car Care, Pay Later).

### Hero carousel

- Full-width image with a headline ("Make the season more rewarding"), short copy and a yellow pill CTA.
- Glide-based slides with dot pagination and accessible pause controls.

### Deal and offer tiles

```css
.deal-tile { background:#fff; border-radius:12px; padding:24px; box-shadow:0 12px 18px rgba(59,61,73,0.12); }
.deal-tile:hover { box-shadow:0 12px 24px rgba(59,61,73,0.16); }
.deal-tile .brand-logo { height:40px; }
.deal-tile .offer { font:500 20px/1.3 "Season Sans"; color:#090909; }
.deal-tile .terms { font-size:12px; color:#62657B; }
```

Partner logos sit in circles (`border-radius:50%`) on category and brand pickers.

### Category chips and tabs

- "Shop by category" chips: pill, white or linen with 1px `#E8E9EC` border, 14-16px label, selected state yellow `#FFD549`.
- Category tabs: underline style with a 3px near-black bar on the active tab (approximate).

### Banking band

"Invest in you with Synchrony Bank": a charcoal or mist band with savings rates in large numerals, outlined buttons, and FDIC language.

### Inputs

- 52px tall, 8px radius, 1px `#727377` border, 16px text, linen or white background.
- Focus: 2px ink border and the double-ring focus shadow.

### Footer

Charcoal `#3B3C43`, linen text, uppercase column headings, social icons, FDIC and Equal Housing logos.

## 6. Layout & Spacing

- Spacing tokens: `--space-1` 4px through `--space-14` 128px (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128).
- Content width about 1280-1440px with 16px mobile and 40-64px desktop gutters (approximate).
- Card grids: 2 across on tablet, 3-4 across on desktop; carousels scroll horizontally on mobile.
- Section spacing 64-96px.
- Breakpoints at about 768 and 1200px, matching the three-step type tokens (approximate).

## 7. Depth, Elevation & Motion

- Shadows are tinted with charcoal (`rgba(59,61,73,…)`), long and soft.
- Tiles: `0 12px 18px rgba(59,61,73,0.12)`; hover `0 12px 24px rgba(59,61,73,0.16)`; modals `4px 14px 40px rgba(59,61,73,0.3)`.
- Button transitions about 150ms on background colour.
- Carousels slide at about 400ms ease; respect reduced motion.

## 8. Iconography & Imagery

- Icons: simple line icons, 1.5-2px stroke, near-black, 24px.
- Photography: products and people in homes, cars, clinics and stores; bright, warm, seasonal.
- Partner brand logos are shown in full colour inside white circles or tiles.
- The three-bar motif can appear as a small graphic accent in gold.

## 9. Voice & Microcopy

- Helpful, upbeat and plain. Focus on ways to pay and save.
- Seasonal hooks for promotions; precise terms in disclaimers.
- Sentence case for headlines and buttons; uppercase for top nav.

Sample strings:

- "Make the season more rewarding"
- "Find your way to pay"
- "Invest in you with Synchrony Bank"
- "Healthcare financing for you, your family and your pets."
- "Shop by category"
- Buttons: "Explore Credit Cards", "View all categories", "Sign in"

## 10. Do's and Don'ts

**Do**

- Use linen `#FAF9F6` as the page colour and white for tiles.
- Make primary buttons yellow `#FFD549` pills with black bold labels.
- Use charcoal-tinted soft shadows on tiles.
- Keep gold as the single accent and black as the text colour.
- Put financing terms in clear 12px disclaimers next to offers.

**Don't**

- Don't put white text on yellow.
- Don't use pure white as the page background everywhere; the warmth comes from linen.
- Don't square off buttons.
- Don't use more than one bright colour per section.
- Don't invent APRs, promo periods or rates.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Synchrony. Page background warm linen `#FAF9F6`, cards white, headlines near-black `#090909`, body charcoal `#3B3D49`, secondary text `#62657B`. Font is Season Sans (use DM Sans): headlines weight 500 at 40-60px desktop (h1 60px, h2 48px), body 16px/1.5, buttons 18px weight 700. Primary buttons are yellow `#FFD549` pills (`border-radius:9999px`, 52px tall, 16px 24px padding) with black text; hover `#FFE779`, active `#F7BE00`. Outlined buttons have a 1px black border on linen and turn yellow on hover. Focus ring is `0 0 0 1px #FAF9F6, 0 0 0 4px #090909`. Top nav labels are uppercase: FINANCING, BANKING, MARKETPLACE, BUSINESS, ABOUT US, HELP. Offer tiles are white, 12px radius, 24px padding, shadow `0 12px 18px rgba(59,61,73,0.12)`, with a partner logo, an offer line and 12px terms. Use gold `#FBC600` only as the brand accent. Friendly, plain copy in sentence case.

```css
:root {
  --syf-gold: #FBC600;
  --syf-gold-50: #FFFAE9;
  --syf-gold-500: #BC9500;
  --syf-btn: #FFD549;
  --syf-btn-hover: #FFE779;
  --syf-btn-active: #F7BE00;
  --syf-ink: #090909;
  --syf-charcoal: #3B3D49;
  --syf-slate: #62657B;
  --syf-linen: #FAF9F6;
  --syf-mist: #F3F6F6;
  --syf-fog: #E8E9EC;
  --syf-pebble: #DADADA;
  --syf-white: #FFFFFF;
  --syf-blue: #006899;
  --syf-green: #3E8529;
  --syf-red: #D91C18;
  --syf-font: "Season Sans", "DM Sans", "Synchrony Sans", Helvetica, sans-serif;
  --syf-btn-height: 52px;
  --syf-radius-md: 8px;
  --syf-radius-lg: 12px;
  --syf-radius-pill: 9999px;
  --syf-shadow-tile: 0 12px 18px rgba(59,61,73,0.12);
  --syf-shadow-hover: 0 12px 24px rgba(59,61,73,0.16);
  --syf-shadow-modal: 4px 14px 40px rgba(59,61,73,0.3);
  --syf-focus: 0 0 0 1px #FAF9F6, 0 0 0 4px #090909;
}
```

---

Values are observed from the public synchrony.com site and its CSS on 2026-11-16; values marked approximate are estimates. This file is an unofficial reference and is not affiliated with or endorsed by Synchrony Financial.

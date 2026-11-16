---
name: VIZIO
slug: vizio
url: https://vizio.com
category: Hardware
tagline: "Clean consumer-electronics retail: white pages, deep teal buttons, series color coding."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: VIZIO Teal
    hex: "#0B485F"
    role: Primary buttons, links, tabs, checkboxes
  - name: Midnight Violet
    hex: "#0D0621"
    role: Premium series cards, dark sections, text on gold
  - name: Black
    hex: "#000000"
    role: Logo, hero sections, product photography backgrounds
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Champagne Gold
    hex: "#E0BF7E"
    role: Premium series accent, gold gradient text
  - name: Series Yellow
    hex: "#FDB716"
    role: Series color tag and card accent
  - name: Series Red
    hex: "#DB2A33"
    role: Series color tag and card accent
  - name: Deep Teal
    hex: "#01161E"
    role: Link and secondary button hover
  - name: Graphite
    hex: "#4E5056"
    role: Nav links, body text
  - name: Steel
    hex: "#656972"
    role: Secondary text, captions
  - name: Soft Black
    hex: "#111212"
    role: Dark UI panels, footer
  - name: Cloud
    hex: "#F5F7F9"
    role: Section background, product wells
  - name: Pampas
    hex: "#F8F6F3"
    role: Warm section background
  - name: Light Gray
    hex: "#EDEDED"
    role: Dividers, borders
  - name: Error Red
    hex: "#C81E32"
    role: Form errors
fonts:
  display:
    family: "Benton Sans Pro"
    fallback: "Libre Franklin"
    weights: [500, 700]
  body:
    family: "Benton Sans Pro"
    fallback: "Libre Franklin"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 40, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: H1, size: 24, weight: 500, lineHeight: 1.35, tracking: "0" }
  - { role: H2, size: 22, weight: 500, lineHeight: 1.35, tracking: "0" }
  - { role: H4, size: 20, weight: 700, lineHeight: 1.35, tracking: "0" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body Small, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 5, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 40, 58, 80]
shadows:
  - { name: Soft, value: "0 0 10px rgba(0,0,0,0.4)" }
  - { name: Overlay, value: "0 0 12px rgba(51,51,51,0.5)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F7F9"
  text: "#0D0621"
  muted: "#656972"
  border: "#EDEDED"
  accent: "#0B485F"
  accentText: "#FFFFFF"
  radius: 5
  buttonStyle: solid
---

# VIZIO

## 1. Visual Theme & Atmosphere

VIZIO sells TVs, soundbars and its smart-TV platform (VIZIO OS, WatchFree+). The website is a tidy electronics store: white pages, black and violet-black product heroes, big photos of screens with bright content on them, and a restrained set of deep teal buttons. The brand mark is a thin, geometric black wordmark.

What makes it recognisable:

- **Screens on black.** Hero banners show a TV or soundbar on black or very dark violet `#0D0621`, with colorful picture content doing the visual work.
- **Deep teal actions.** The primary button and link color is a dark petrol teal `#0B485F` (`--vizio-primary-color`), not a bright blue.
- **Series color coding.** Each TV line gets its own card color pair: midnight violet with champagne gold `#E0BF7E` for premium lines, yellow `#FDB716`, red `#DB2A33`, white with gold borders. Gold gradients are clipped into price and spec text on premium cards.
- **Benton Sans.** A neutral American grotesk at medium weight for headings and regular for body, with no tracking changes.
- **Simple product walls.** Product listing pages are clean grids with screen-size chips ("43″ – 85″"), "From $X" prices and a "New" tag.

Mood words: clean, accessible, straightforward, cinematic, retail.

## 2. Color Palette & Roles

Values are read from vizio.com CSS variables (`--primary-button-*`, `--v20-series-*`, named greys).

| Name | Hex | Role |
|---|---|---|
| VIZIO Teal | `#0B485F` | `--vizio-primary-color`, primary button fill, links, tabs, radio and checkbox |
| Deep Teal | `#01161E` | Link hover, secondary button hover fill |
| Midnight Violet | `#0D0621` | Premium series card, dark buttons, text on gold |
| Black | `#000000` | Logo, hero backgrounds |
| White | `#FFFFFF` | Page |
| Champagne Gold | `#E0BF7E` (also `#E4C280`) | Premium accent, gold borders |
| Gold Light | `#FFE6B6` | Middle stop of the gold text gradient |
| Series Yellow | `#FDB716` | Series card background or accent |
| Series Red | `#DB2A33` | Series card background or accent |
| Graphite | `#4E5056` | Global nav links, product names |
| Steel | `#656972` | Secondary text |
| Grey 500 | `#757575` | Footer links (`--footer-link-color`) |
| Dove Gray | `#6B6B6B` | Captions |
| Medium Gray | `#9E9E9E` | Disabled, input underline |
| Light Gray | `#EDEDED` | Dividers |
| Cloud | `#F5F7F9` | Section and product-well background |
| Pampas | `#F8F6F3` | Warm section background |
| Soft Black | `#111212` | Dark panels, footer |
| Charcoal | `#27282A` | Dark cards |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#C81E32` | Form errors and error borders |
| Search hover / alert | `#AC3322` | Search clear button hover |
| Success | `#4DB5AB` | Loaders and positive accents |
| Info | `#0B485F` | Notices |

### Gold text gradient

```css
.premium-price {
  background: linear-gradient(90deg, #E0BF7E 0, #FFE6B6 31.25%, #E5C380 54.17%, #E4C280 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### Dark sections

Dark bands use `#0D0621` or `#000000` with white text, gold or white outline buttons and `#111212` cards. VIZIO OS pages lean dark to match the TV interface.

## 3. Typography

**Family:** BentonSansPro (Benton Sans by Font Bureau), loaded as `BentonSansPro-Regular`, `-Medium` and `-Bold`. Declared as `--font-family: "BentonSansPro", sans-serif`.

**Licensing:** Benton Sans is a commercial font. Use **Libre Franklin** as the free fallback (similar grotesk structure). Helvetica and Arial are the declared system fallbacks.

```css
font-family: "BentonSansPro", "Libre Franklin", Helvetica, Arial, sans-serif;
```

### Scale (from CSS variables, root font-size 62.5%)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (banner) | 36-40px | 500 | 1.2 | 0 |
| H1 | 24px | 500 | 1.35 | 0 |
| H2 | 22px | 500 | 1.35 | 0 |
| H3 | 18px | 500 | 1.35 | 0 |
| H4 | 20px | 700 | 1.35 | 0 |
| H5 | 18px | 700 | 1.35 | 0 |
| H6 | 16px | 500 | 1.35 | 0 |
| Body | 12-14px | 400 | 1.5 | 0 |
| Lead / card text | 18px | 400 | 1.5 | 0 |
| Fluid section text | `clamp(18px, 11.4px + 1.15vw, 24px)` | 400 | 1.4 | 0 |

### Rules

- Sentence case for headings ("Find the Series that suits your space."), uppercase only for some CTAs ("EXPLORE VIZIO OS").
- Letter spacing is 0 everywhere.
- Headings are medium (500), not bold; bold (700) is kept for small headings (H4, H5) and prices.
- Use the real prime symbols for screen sizes: `43″ – 85″`.
- Prices: "From $X" with "From" in small regular and the amount in bold.

## 4. Logo & Brand Mark

The logo is **VIZIO** in uppercase, built from thin, even strokes: a soft-bottomed "V", plain "I" bars, a "Z" drawn with a curved diagonal, and a rounded-rectangle "O". It is always one color.

- **Color versions:** black on white (primary), white on black or `#0D0621`.
- **Clear space:** at least the width of the "I" doubled on all sides.
- **Minimum size:** 60px wide on screen.
- **Avatar:** the full wordmark in white on a dark square; there is no separate symbol.

Misuse:

- Do not color the logo teal or gold.
- Do not write it as "Vizio" in a logo context; the brand name is set in capitals.
- Do not outline, skew or add effects.
- Do not place it over busy screen content without a dark scrim.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#0B485F` | `#FFFFFF` | 1px `#0B485F` | 5px | 44-50px |
| Primary hover | transparent | `#0B485F` | 1px `#0B485F` | 5px | |
| Secondary | `#FFFFFF` | `#0B485F` | 1px `#0B485F` | 5px | 44-50px |
| Secondary hover | `#01161E` | `#FFFFFF` | 1px `#FFFFFF` | 5px | |
| Series button (v20) | `#FFFFFF` | `#0D0621` | 1px `#0D0621` | 8px | 50px |
| Series button hover | `#0D0621` | `#FFFFFF` | 1px `#FFFFFF` | 8px | |
| Gold (premium) | `#E4C280` | `#0D0621` | none | 8px | 50px |

Primary and series buttons carry a small arrow on the right (`padding: 0 50px 0 15px` leaves room for it). The arrow border color follows `--primary-button-arrow-border`.

States:

- Transition: `background .334s cubic-bezier(0.79, 0.01, 0.2, 0.99), color .334s` on series buttons.
- Focus: `box-shadow: 0 0 0 2px #9E9E9E` (medium gray ring).
- Disabled: `#EDEDED` fill, `#9E9E9E` text.

```css
.button-primary {
  font: 500 16px/1 "BentonSansPro", "Libre Franklin", sans-serif;
  color: #fff;
  background: #0B485F;
  border: 1px solid #0B485F;
  border-radius: 5px;
  height: 48px;
  padding: 0 48px 0 16px;
  display: flex; align-items: center;
  transition: background-color .334s cubic-bezier(.79,.01,.2,.99), color .334s;
}
.button-primary:hover { background: transparent; color: #0B485F; }
```

### Series card (signature)

- Rectangular card, 8px radius, 24px padding, one series per card.
- Background and foreground come from the series pair: `#0D0621` / `#E0BF7E`, `#FDB716` / `#29201E`, `#DB2A33` / `#FFFFFF`, `#F8F8F8` / `#0D0621` with a gold border.
- Content: series name in 22px/500, one-line description, size range "55″ – 75″", "From $X" price, "New" tag, then a series button.
- Premium cards use the gold gradient on price and spec text.

### Product tile (listing)

- White tile on `#F5F7F9` wells, product photo centred, 16px radius images (`--border-radius--image: 1rem`, 2rem on large media).
- Name 16px/700 `#4E5056`, short tagline 14px, size chips, price.
- "Compare" checkbox in teal.

### Navigation

- Global header: white, logo left, links "TVs", "Soundbars", "Accessories", "Streaming", "About", "Support" at 14px `#4E5056`, padding 0 13px, color transition 450ms ease-out.
- Hovering opens a full-width mega menu with product-line columns: thumbnail, series name, short tagline, size range and "From" price, with a "Browse all" link at the bottom.
- Right: search, account ("Sign In / Sign Up") and cart icons.
- Mobile: hamburger opens a full-screen white drawer with accordion sections.

### Tabs and accordions

Tabs: 14-16px text, `#0B485F` active with 2px underline, hover `#01161E`. Accordions (FAQ, specs): 1px `#EDEDED` dividers, plus/minus icons in teal.

### Inputs

Height 44px, 5px radius, 1px `#9E9E9E` border, 14px text. Focus: teal border. Error: `#C81E32` border with 10-12px red helper text.

### Banners

- Alert banner (service notices): full-width, dark or light bar, 14px text, close icon.
- Promo strip: "Exclusive offer" label, short headline and a teal button on `#F8F6F3`.

### Modals

White, 8px radius, max width 560px, 24-32px padding, overlay shadow `0 0 12px rgba(51,51,51,0.5)`, scrim `rgba(0,0,0,0.7)`.

## 6. Layout & Spacing

- **Base:** root font size 62.5% (1rem = 10px). Grid padding 24px on mobile, 58px on desktop (`--grid-padding`).
- **Content width:** about 1440px max, with full-bleed hero media.
- **Grid:** 12 columns; series cards 3-4 across on desktop, horizontal swipe on mobile.
- **Section spacing:** 40-80px.
- **Breakpoints:** around 768px and 1024px, plus 1440px for wide layouts.
- **Density:** medium; each section has one headline, a short line of copy and one action.

## 7. Depth, Elevation & Motion

- Mostly flat. Shadows: `0 0 10px rgba(0,0,0,0.4)` for floating elements, `0 0 12px rgba(51,51,51,0.5)` for overlays and tooltips.
- Image hover: slight zoom on product images (1.03-1.05x).
- Easing: the house curve is `cubic-bezier(0.79, 0.01, 0.2, 0.99)` at 334ms for button fills; nav link colors use 450ms ease-out.
- Carousels slide horizontally with dots or arrows.

## 8. Iconography & Imagery

- Icons: simple line icons (account, search, cart, hamburger, arrow-right) at 18px in `#4E5056` or white.
- Product photography: front-on TVs and soundbars, screens filled with vivid nature, sports or film stills, on black, white or lifestyle living rooms.
- Platform pages (VIZIO OS, WatchFree+) show TV UI screenshots and app logos in rows.

## 9. Voice & Microcopy

- Friendly, clear, benefit-led, short sentences with a period.
- Headlines: "Where colors come alive.", "Find the Series that suits your space.", "Entertainment made easy."
- Buttons: "Learn more", "Explore Smart TVs", "Browse all Smart TVs", "Shop now", "Sign In / Sign Up".
- Product facts are plain: size range, "From $X", "New".

## 10. Do's and Don'ts

**Do**

- Use deep teal `#0B485F` for buttons and links; keep everything else neutral.
- Show the hardware large, on dark backgrounds, with colorful screen content.
- Use series color pairs consistently per product line.
- Use Benton Sans (or Libre Franklin) at medium weight for headings, no tracking.
- Use 5px radius on standard buttons and 8px on series cards.

**Don't**

- Don't use bright blue for links; VIZIO's link color is the dark teal.
- Don't apply the gold gradient outside premium series content.
- Don't use heavy shadows or glassy effects.
- Don't write the logo in lowercase or recolor it.
- Don't crowd banners with multiple CTAs; one primary per section.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of VIZIO's website. White page, headings in midnight violet `#0D0621` at weight 500, body in `#4E5056` 14px, secondary text `#656972`, dividers `#EDEDED`, light sections `#F5F7F9` and warm `#F8F6F3`. Font: `"BentonSansPro", "Libre Franklin", Helvetica, Arial, sans-serif`, no letter spacing. Header: black thin uppercase VIZIO wordmark left, nav links "TVs, Soundbars, Accessories, Streaming, About, Support" at 14px with a full-width mega menu. Primary buttons are deep teal `#0B485F`, white text, 5px radius, 48px tall, with a small right arrow; hover turns them transparent with teal text. Hero banners show a TV on black with bright screen content. Add a row of series cards (8px radius, 24px padding) each with its own color pair: `#0D0621` with gold `#E0BF7E`, yellow `#FDB716`, red `#DB2A33`, and white with gold border; premium prices use a gold gradient text fill. Product tiles show size ranges like 43″ – 85″ and "From $X". Keep it flat and clean.

```css
:root {
  --brand-teal: #0B485F;
  --brand-teal-deep: #01161E;
  --brand-midnight: #0D0621;
  --brand-black: #000000;
  --brand-bg: #FFFFFF;
  --brand-gold: #E0BF7E;
  --brand-gold-2: #E4C280;
  --brand-gold-light: #FFE6B6;
  --brand-series-yellow: #FDB716;
  --brand-series-red: #DB2A33;
  --brand-text: #4E5056;
  --brand-text-secondary: #656972;
  --brand-text-footer: #757575;
  --brand-gray-medium: #9E9E9E;
  --brand-gray-light: #EDEDED;
  --brand-cloud: #F5F7F9;
  --brand-pampas: #F8F6F3;
  --brand-soft-black: #111212;
  --brand-error: #C81E32;
  --brand-success: #4DB5AB;
  --brand-font: "BentonSansPro", "Libre Franklin", Helvetica, Arial, sans-serif;
  --brand-radius-button: 5px;
  --brand-radius-card: 8px;
  --brand-radius-image: 16px;
  --brand-shadow-soft: 0 0 10px rgba(0,0,0,0.4);
  --brand-shadow-overlay: 0 0 12px rgba(51,51,51,0.5);
  --brand-ease: cubic-bezier(0.79, 0.01, 0.2, 0.99);
  --brand-gold-gradient: linear-gradient(90deg, #E0BF7E 0, #FFE6B6 31.25%, #E5C380 54.17%, #E4C280 100%);
}
```

---

Values are observed from vizio.com production CSS; this file is an unofficial reference and is not affiliated with or endorsed by VIZIO.

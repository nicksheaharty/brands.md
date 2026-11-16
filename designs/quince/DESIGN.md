---
name: Quince
slug: quince
url: https://quince.com
category: Commerce
tagline: "Quiet luxury retail: warm off-black on white, serif headlines and big product photography."
updated: 2026-11-16
appStoreId: 6670251421
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Quince Black
    hex: "#21201F"
    role: Primary text, logo, primary buttons (web-ui black)
  - name: White
    hex: "#FFFFFF"
    role: Page background, product card background
  - name: Paper White
    hex: "#F7F7F5"
    role: Subtle section and image-tile background
  - name: Cantaloupe
    hex: "#FFA273"
    role: Brand accent, promo banners, highlight chips
  - name: Off White
    hex: "#EEEEEC"
    role: Secondary surfaces, skeleton and swatch backgrounds
  - name: Umber
    hex: "#80351B"
    role: Deep accent for seasonal and editorial blocks
  - name: Light Gray
    hex: "#D9D9D9"
    role: Borders, dividers, input outlines
  - name: Medium Gray
    hex: "#717171"
    role: Secondary text, compare-at prices, metadata
  - name: Gray
    hex: "#606060"
    role: Tertiary text and icons
  - name: Dark Gray
    hex: "#424141"
    role: Hover state for black buttons and text
  - name: Navy
    hex: "#2D313F"
    role: Dark editorial sections, footer variants
  - name: Stone
    hex: "#DFDACE"
    role: Warm neutral backgrounds in campaigns
  - name: Petal
    hex: "#E5CDBD"
    role: Soft blush backgrounds in campaigns
  - name: Cantaloupe Dark
    hex: "#BC5A28"
    role: Accent text on light backgrounds
  - name: Green
    hex: "#2D822B"
    role: Success, in-stock, savings text
  - name: Red
    hex: "#AF3535"
    role: Errors, low stock, sale price
fonts:
  display:
    family: "Ivy Presto Headline"
    fallback: "Cormorant Garamond"
    weights: [300, 400]
  body:
    family: "Grosa"
    fallback: "Work Sans"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 48, weight: 300, lineHeight: 1.1, tracking: "0" }
  - { role: Title 32 dec, size: 32, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: Title 24 dec, size: 24, weight: 300, lineHeight: 1.17, tracking: "0" }
  - { role: Title 14 caps, size: 14, weight: 500, lineHeight: 1.43, tracking: "0.05em" }
  - { role: Body 16, size: 16, weight: 400, lineHeight: 1.375, tracking: "0" }
  - { role: Body 14, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Body 12, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Title 10 caps, size: 10, weight: 500, lineHeight: 1.2, tracking: "0.05em" }
radii: { sm: 2, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Below, value: "0 6px 16px 0 rgba(33,32,31,0.10)" }
  - { name: Above, value: "0 -6px 16px 0 rgba(33,32,31,0.10)" }
  - { name: Tooltip, value: "0 6px 12px 0 rgba(0,0,0,0.1), 0 12px 24px 0 rgba(0,0,0,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F5"
  text: "#21201F"
  muted: "#717171"
  border: "#D9D9D9"
  accent: "#21201F"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# Quince

## 1. Visual Theme & Atmosphere

Quince sells cashmere, linen, silk, jewelry, bedding and furniture direct from factories, and the site looks like a calm department-store catalog. The page is white, text is a warm off-black `#21201F` (never pure black), and nearly everything else is product photography: models on plain backgrounds, folded knits, styled bedrooms.

What makes it recognisable:

- **Serif headlines over sans UI.** Campaign headlines are set in a light, high-contrast serif (Ivy Presto, weight 300); all navigation, product names, prices and buttons are a clean grotesque (Grosa).
- **Small uppercase labels.** Category labels, CTAs ("SHOP NOW") and section eyebrows are 10-14px uppercase with 0.05em tracking at weight 500.
- **Image-first grid.** Large full-bleed hero, then dense 4-column product grids with tall portrait images and minimal text below.
- **Warm, muted neutrals.** Paper white `#F7F7F5`, off white `#EEEEEC`, stone `#DFDACE` and petal `#E5CDBD` back the photography. The one bright brand accent is cantaloupe `#FFA273`.
- **Pill controls.** Buttons, chips and swatches are fully rounded (`radius-round: 9999px`).
- **Price transparency.** Product tiles show the Quince price next to a struck-through "traditional retail" comparison in grey.

Mood words: quiet, warm, considered, catalog, value-luxury.

## 2. Color Palette & Roles

All hex values come from Quince's design tokens (`--web-ui-colors-*`) in the live CSS.

| Name | Hex | Role |
|---|---|---|
| Black | `#21201F` | Text, logo, primary buttons, active states |
| Dark Gray | `#424141` | Hover on black, secondary headings |
| Gray | `#606060` | Tertiary text, icons |
| Medium Gray | `#717171` | Secondary text, compare-at price |
| Silver Gray | `#8F8F8F` | Disabled text |
| Light Gray | `#D9D9D9` | Borders, dividers |
| Off White | `#EEEEEC` | Secondary surface, swatch ring background |
| Paper White | `#F7F7F5` | Section background, image placeholder |
| White | `#FFFFFF` | Page |
| Cantaloupe 100 | `#FFA273` | Brand accent, promo bar, badges |
| Cantaloupe 80 | `#FFBE9D` | Light accent fills |
| Cantaloupe Dark 100 | `#BC5A28` | Accent text on white |
| Umber | `#80351B` | Deep editorial accent |
| Navy | `#2D313F` | Dark blocks, footer variant |
| Light Navy | `#575A65` | Text on navy |
| Stone | `#DFDACE` | Campaign backgrounds |
| Petal | `#E5CDBD` | Campaign backgrounds |
| Warm Grey | `#D0D3BB` | Campaign backgrounds |
| Blue | `#BFCAE8` | Campaign backgrounds |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#2D822B` text, `#ECF9EB` fill, `#D2F2D1` border | Added to bag, in stock |
| Error | `#AF3535` text, `#FDD8D8` fill | Form errors, low stock, sale price |
| Info | `#21201F` on `#F7F7F5` | Shipping and return notices |

Black transparencies (`rgba(33,32,31,0.1)` to `0.7`) are used for overlays and scrims; white transparencies for text over photos.

### Dark mode

There is no dark theme. Dark moments are full-bleed photographs with white text, or navy `#2D313F` blocks.

## 3. Typography

**Families (from the CSS):**

- **Grosa** (`grosa`): the UI and body grotesque, weights 400 and 500.
- **Ivy Presto Headline** (`ivy-headline`) and **Ivy Presto Text** (`ivy-text`): serif for decorative ("dec") titles at weight 300.

**Licensing:** Grosa and Ivy Presto are commercial. Free substitutes: **Work Sans** or **Inter** for Grosa; **Cormorant Garamond** (300-400) for Ivy Presto.

```css
font-family: grosa, "Work Sans", ui-sans-serif, system-ui, sans-serif;
font-family: ivy-headline, "Cormorant Garamond", Georgia, serif; /* titles */
```

### Scale (from `web-ui-textStyle_*` classes)

| Role | Size | Weight | Line height | Tracking | Family |
|---|---|---|---|---|---|
| Hero headline | 40-56px (approx.) | 300 | 1.1 | 0 | Ivy Presto |
| title-32-dec | 32px | 300 | 40px | 0 | Ivy Presto |
| title-28-dec | 28px | 300 | 34px | 0 | Ivy Presto |
| title-24-dec | 24px | 300 | 28px | 0 | Ivy Presto |
| title-20 | 20px | 500 | 26px | 0.05em, uppercase | Grosa |
| title-16 | 16px | 500 | 22px | 0.05em, uppercase | Grosa |
| title-14 | 14px | 500 | 20px | 0.05em, uppercase | Grosa |
| title-12 | 12px | 500 | 16px | 0.05em, uppercase | Grosa |
| body-16 | 16px | 400 | 22px | 0 | Grosa |
| body-14 / 14-strong | 14px | 400 / 500 | 20px | 0 | Grosa |
| body-12 / 12-strong | 12px | 400 / 500 | 16px | 0 | Grosa |
| title-10 | 10px | 500 | 12px | 0.05em, uppercase | Grosa |

### Rules

- Serif for emotional headlines only; never for prices, buttons or product names.
- Sans "title" styles are always uppercase with 0.05em tracking. Sans "body" styles are sentence case.
- Product names are body-14 or body-12; prices body-14-strong.
- Compare-at prices: body-12 `#717171` with a line-through.
- Avoid weights above 500.

## 4. Logo & Brand Mark

The logo is the **Quince** wordmark in a refined serif with a capital Q whose long tail sweeps under the "u". It is one path in a 204x60 viewBox and is rendered in black `#21201F`, or white over photography.

- **Header size:** about 100x30px desktop, 80x24px mobile.
- **App icon / monogram:** the Q alone, white on black, is the natural short form.
- **Clear space:** at least the height of the "u" on all sides.
- **Color versions:** `#21201F` on white or paper white; white on photos or navy.

Misuse:

- Do not set "Quince" in Ivy Presto or any other font as a substitute.
- Do not color the logo cantaloupe.
- Do not add a fruit illustration or a tagline lockup.
- Do not place it on busy parts of a photo without a scrim.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#21201F` | `#FFFFFF` body-14-strong | none | 9999px | 48-56px |
| Secondary | `#FFFFFF` | `#21201F` | `inset 0 0 0 1px #21201F` | 9999px | 48px |
| On photo | `#FFFFFF` | `#21201F` title-14 uppercase | none | 9999px | 40-48px |
| Text CTA | transparent | `#21201F` title-14 uppercase, underline | none | 0 | auto |
| Icon | transparent | `#21201F` | none | 9999px | 24-32px |
| Add to bag (PDP) | `#21201F` | `#FFFFFF` | none | 9999px | 56px full width |

States: hover black darkens to `#424141`; secondary hover fills `#F7F7F5`; disabled `#EEEEEC` with `#8F8F8F` text; focus `outline: 2px solid #21201F; outline-offset: 2px`. Min widths from tokens: sm 64px, md 80px, lg 100px.

```css
.quince-btn {
  font: 500 14px/20px grosa, "Work Sans", sans-serif;
  height: 48px;
  padding: 0 32px;
  border-radius: 9999px;
  background: #21201F;
  color: #FFFFFF;
  border: 0;
  transition: background-color .2s ease;
}
.quince-btn:hover { background: #424141; }
.quince-btn--secondary { background: #FFF; color: #21201F; box-shadow: inset 0 0 0 1px #21201F; }
```

### Product tile

- Portrait image (about 3:4) on `#F7F7F5`, no border, no radius (or 2px).
- Optional badge top left: "Best seller" in title-10 uppercase on white pill, or cantaloupe for promotions.
- Wishlist heart icon top right, 24px, black line.
- Below: product name body-14 `#21201F`, price body-14-strong, compare-at body-12 `#717171` struck through, swatch row of 12-16px circles with a 1px `#D9D9D9` ring; selected swatch gets a 1px black outer ring.
- Hover: second image crossfades in; a "Quick add" pill can appear at the bottom of the image.

### Navigation

- **Promo bar:** full width, 32-36px, cantaloupe `#FFA273` or black, centred body-12 text such as free-shipping messaging.
- **Header:** white, 56-64px tall; logo left on desktop (centred on mobile), category links (Women, Men, Kids, Home, Jewelry, Travel) in body-14, search, account, wishlist and bag icons on the right.
- **Mega menu:** white panel with a `0 6px 16px rgba(33,32,31,0.10)` shadow, columns of body-14 links and one or two editorial image tiles.

### Inputs

Height 48px, border 1px `#D9D9D9`, radius 2-4px (or pill in search), padding 0 16px, body-14 text, placeholder `#717171`. Focus border `#21201F`. Error border and helper text `#AF3535`.

### Chips and filters

Pills 32px tall, 1px `#D9D9D9` border, body-12 text; selected chips are black with white text. Size selectors on the PDP are 48px square-ish pills with selected state black fill.

### Product detail page

Two columns on desktop: an image stack or grid on the left (about 60%), a sticky purchase column on the right with title in title-24-dec serif, price, color swatches, size pills, a full-width black pill "Add to bag", then accordions (Details, Fabric and care, Shipping). Accordion headers are title-14 uppercase with a plus icon; dividers `#D9D9D9`.

### Bag drawer

Right-side sheet 390-520px wide (`max-w-sheet-md` 390px, `max-w-sheet-lg` 520px), white, line items with 80px thumbnails, quantity steppers in pill outline, subtotal and a black pill checkout button pinned to the bottom with the "above" shadow.

### Toasts and tooltips

Small black or white cards with 4-8px radius and the tooltip shadow; body-12 text.

## 6. Layout & Spacing

- **Max width:** content up to about 1440px with full-bleed heroes; the token `breakpoint-lg` is 1200px.
- **Gutters:** 16px mobile, 24-40px desktop (approx.).
- **Grid:** product listing 2 columns on mobile, 3-4 on desktop, 8-16px gaps (tiles nearly touch).
- **Section spacing:** 48-64px between homepage modules.
- **Base unit:** 4px; common steps 8, 12, 16, 24, 32.
- **Density:** high in grids, airy in editorial sections.

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation appears only on overlays: menus and sheets use `0 6px 16px rgba(33,32,31,0.10)` (below) or `0 -6px 16px rgba(33,32,31,0.10)` (sticky bottom bars).
- Tooltips: `0 6px 12px rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.08)`.
- Borders are hairline (`0.5px` outline radius token, 1px `#D9D9D9` lines).
- Motion is restrained: image crossfades about 300ms ease, drawers slide 250-300ms ease-out, carousels scroll with momentum. No bouncy or springy effects (approx. timings).

## 8. Iconography & Imagery

- **Icons:** thin line icons, 1-1.5px stroke, 20-24px, black. Heart, bag, search, account, plus/minus, chevrons.
- **Photography:** soft natural light, neutral or warm backgrounds (stone, sand, linen), models in relaxed poses, flat lays of folded knits. Color graded warm and slightly desaturated.
- **No illustrations** in core shopping; editorial pages may use simple diagrams of fabric or factory sourcing.
- **Swatches:** real color chips or fabric crops in small circles.

## 9. Voice & Microcopy

Calm, factual and value-focused. Emphasises materials, craftsmanship and the price difference versus traditional retail. Strings from the live homepage today:

- "Shop premium essentials with no middleman." (page description)
- CTAs: "SHOP NOW", "Shop All", "Buy it now", "Add to wishlist"
- Badges: "Best seller"
- Shipping: "Free shipping" and "Free white glove delivery" for furniture

Rules: uppercase only for short title-style labels; sentence case for descriptions. Name the material ("Mongolian cashmere", "European linen") rather than adjectives.

## 10. Do's and Don'ts

**Do**

- Use warm off-black `#21201F` for text and buttons.
- Pair a light serif headline with a sans UI.
- Let photography fill the page; keep UI chrome minimal.
- Use pill buttons and pill chips.
- Use uppercase, tracked 0.05em labels for short titles and CTAs.
- Use cantaloupe `#FFA273` for one promo bar or badge at a time.

**Don't**

- Don't use pure `#000000` text or cold grey backgrounds.
- Don't add drop shadows to product cards.
- Don't use heavy weights or bold serif headlines.
- Don't add colorful gradients or neon accents.
- Don't crowd tiles with many badges.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Quince, the direct-to-consumer luxury essentials store. White page, warm off-black text `#21201F`, secondary text `#717171`, borders `#D9D9D9`, subtle section background `#F7F7F5`. UI font is Grosa (fallback "Work Sans"), weights 400/500; headlines use a light serif, Ivy Presto (fallback "Cormorant Garamond") at weight 300. Short labels and CTAs are uppercase 12-14px weight 500 with 0.05em tracking. Buttons are pills: primary `#21201F` with white text, 48px tall, hover `#424141`; secondary white with a 1px black inset ring. Accent cantaloupe `#FFA273` appears only in a thin promo bar and occasional badges. Layout: promo bar, 64px white header with category links and icons, full-bleed photo hero with a serif headline and a white "SHOP NOW" pill, then 4-column product grids of 3:4 portrait images on `#F7F7F5` with name, price and a grey struck-through comparison price. Mostly flat; only drawers and menus get `0 6px 16px rgba(33,32,31,0.10)`.

```css
:root {
  --brand-black: #21201F;
  --brand-black-hover: #424141;
  --brand-gray: #606060;
  --brand-gray-medium: #717171;
  --brand-gray-silver: #8F8F8F;
  --brand-border: #D9D9D9;
  --brand-offwhite: #EEEEEC;
  --brand-paper: #F7F7F5;
  --brand-white: #FFFFFF;
  --brand-cantaloupe: #FFA273;
  --brand-cantaloupe-dark: #BC5A28;
  --brand-umber: #80351B;
  --brand-navy: #2D313F;
  --brand-stone: #DFDACE;
  --brand-petal: #E5CDBD;
  --brand-success: #2D822B;
  --brand-success-bg: #ECF9EB;
  --brand-error: #AF3535;
  --brand-error-bg: #FDD8D8;
  --brand-font: grosa, "Work Sans", ui-sans-serif, system-ui, sans-serif;
  --brand-font-serif: ivy-headline, "Cormorant Garamond", Georgia, serif;
  --brand-radius-xs: 2px;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-pill: 9999px;
  --brand-shadow-below: 0 6px 16px 0 rgba(33,32,31,0.10);
  --brand-shadow-above: 0 -6px 16px 0 rgba(33,32,31,0.10);
  --brand-shadow-tooltip: 0 6px 12px 0 rgba(0,0,0,0.1), 0 12px 24px 0 rgba(0,0,0,0.08);
  --brand-tracking-caps: 0.05em;
}
```

---

Values are observed from the public quince.com CSS tokens on 2026-11-16; hero size, gutters and motion timings are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Quince.

---
name: Mercado Libre
shortName: Mercado Libre
slug: mercadolibre
url: https://mercadolibre.com
category: Commerce
tagline: "Sunny yellow header, white product cards on grey, blue buttons and green free-shipping."
updated: 2026-11-16
appStoreId: 463624852
logoBackground: "#FFE600"
theme: light
colors:
  - name: Meli Yellow
    hex: "#FFE600"
    role: Header bar, brand surface, app icon
  - name: Andes Blue
    hex: "#3483FA"
    role: Primary buttons, links, active states
  - name: Blue Hover
    hex: "#2968C8"
    role: Button hover, focus ring
  - name: Free Shipping Green
    hex: "#00A650"
    role: '"Envío gratis", discounts, success'
  - name: Logo Navy
    hex: "#2D3277"
    role: Handshake outline and wordmark
  - name: Page Grey
    hex: "#EDEDED"
    role: Page background behind cards
  - name: White
    hex: "#FFFFFF"
    role: Cards, panels, inputs
  - name: Text
    hex: "#1A1A1A"
    role: Primary text (rgba(0,0,0,0.9) on white)
  - name: Text Secondary
    hex: "#737373"
    role: Secondary text (rgba(0,0,0,0.55) on white)
  - name: Blue Pressed
    hex: "#1F4E96"
    role: Pressed buttons, visited emphasis
  - name: Error Red
    hex: "#F23D4F"
    role: Errors, destructive actions
  - name: Orange
    hex: "#FF7733"
    role: '"Más vendido" badges, warnings'
  - name: Border
    hex: "#E6E6E6"
    role: Dividers and card outlines (rgba(0,0,0,0.1))
fonts:
  display:
    family: "Proxima Nova"
    fallback: "Nunito Sans"
    weights: [300, 600]
  body:
    family: "Proxima Nova"
    fallback: "Nunito Sans"
    weights: [400, 600]
typeScale:
  - { role: Price Large, size: 36, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: Page Title, size: 24, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Section Title, size: 20, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Card Price, size: 24, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 4, md: 6, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48]
shadows:
  - { name: Card, value: "0 1px 2px 0 rgba(0,0,0,0.12)" }
  - { name: Raised, value: "0 6px 16px 0 rgba(0,0,0,0.1)" }
  - { name: Popover, value: "0 8px 16px 0 rgba(0,0,0,0.1)" }
  - { name: Focus, value: "0 0 0 2px #FFFFFF, 0 0 0 3px #2968C8, 0 0 0 5px rgba(65,137,230,0.3)" }
preview:
  bg: "#EDEDED"
  surface: "#FFFFFF"
  text: "#1A1A1A"
  muted: "#737373"
  border: "#E6E6E6"
  accent: "#3483FA"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Mercado Libre

## 1. Visual Theme & Atmosphere

Mercado Libre is Latin America's everyday marketplace, and the site looks like it: a bright yellow header, a light grey page, and a long scroll of white product cards. Nothing is precious. The UI is built for scanning prices, shipping promises and installment offers fast, on cheap phones as well as desktops.

What makes it recognisable:

- **The yellow bar.** Every page opens with a `#FFE600` header holding the handshake logo, a big white search field, a location line ("Enviar a ...") and account links. Yellow is used almost nowhere else.
- **White cards on grey.** Content sits in white rectangles with 6px corners and a hairline shadow on a light grey page. Carousels, product grids and the cart all follow this pattern.
- **Blue for actions, green for good news.** Buttons and links are Andes blue `#3483FA`. Green `#00A650` is reserved for "Envío gratis", "Llega gratis mañana" and discount percentages.
- **Prices are the headline.** Large numbers in a light weight, cents raised as superscript, the old price struck through above, installments ("en 12 cuotas de ...") below.
- **Andes design system.** The UI is built from Mercado Libre's own component library, Andes (`andes-button`, `andes-card`, `andes-money-amount`). Components are plain, legible and consistent across countries.

Mood words: practical, friendly, busy, trustworthy, local.

## 2. Color Palette & Roles

Hex values below come from the live Andes CSS (`--andes-color-*` fallbacks) on mercadolibre.com.mx, read 2026-11-16. Text colors are defined as black at different alphas; solid equivalents on white are given for convenience.

| Name | Hex | Role |
|---|---|---|
| Meli Yellow | `#FFE600` | `.nav-header` background, promo strips, app icon |
| Logo Yellow | `#FFD100` | Fill inside the handshake oval (favicon) |
| Logo Navy | `#2D3277` | Handshake outline, wordmark |
| Andes Blue 500 | `#3483FA` | Loud button fill, links, selected tabs |
| Andes Blue 600 | `#2968C8` | Button hover, focus ring middle line |
| Andes Blue 700 | `#1F4E96` | Pressed state |
| Blue 150 | `rgba(65,137,230,0.15)` | Quiet button hover, selected chips |
| Blue 300 | `rgba(65,137,230,0.3)` | Outer focus ring |
| Green | `#00A650` | Free shipping, discount %, success |
| Red | `#F23D4F` | Errors, required fields |
| Orange | `#FF7733` | "MÁS VENDIDO" badge, warnings |
| Text primary | `rgba(0,0,0,0.9)` ≈ `#1A1A1A` | Titles, prices |
| Text secondary | `rgba(0,0,0,0.55)` ≈ `#737373` | Meta, sellers, captions |
| Text disabled | `rgba(0,0,0,0.25)` ≈ `#BFBFBF` | Disabled labels |
| Border | `rgba(0,0,0,0.1)` ≈ `#E6E6E6` | Dividers, outlines |
| Page grey | `#EDEDED` (approximate) | Page background behind cards |
| Surface | `#FFFFFF` | Cards, inputs, modals |

### Semantic colors

| State | Color | Use |
|---|---|---|
| Success | `#00A650` text or icon | "Envío gratis", "Compra protegida", order delivered |
| Error | `#F23D4F` | Form errors, payment rejected |
| Warning | `#FF7733` | Low stock ("¡Última disponible!"), delays |
| Info | `#3483FA` on `rgba(65,137,230,0.1)` | Notices, tips |

### Dark mode

The website has no dark theme. The apps have a dark mode, but the brand presentation is light: yellow header, grey page, white cards. Do not invent a dark web theme.

## 3. Typography

**Family:** Proxima Nova, self-hosted from `http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/` in weights 300 (Light), 400 (Regular) and 600 (Semibold). The stack is `"Proxima Nova", -apple-system, Roboto, Arial, sans-serif`.

**Licensing:** Proxima Nova is a commercial typeface (Mark Simonson Studio). Closest free option: **Nunito Sans** at the same weights; Montserrat is wider and less close.

Weights in practice:

- 300 for big prices on product pages.
- 400 for body, card titles and most prices in grids.
- 600 for buttons, section headings and labels.
- Bold 700 is not part of the web font set; do not use it.

### Scale (approximate, from the desktop site)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Product price (PDP) | 36px | 300 | 1.25 |
| Page title / product title | 22-24px | 600 | 1.25 |
| Section title ("Ofertas", "Inspirado en lo último que viste") | 20-24px | 600 | 1.25 |
| Card price | 24px | 400 | 1.25 |
| Body / button | 16px | 400 / 600 | 1.25 |
| Card title, secondary info | 14px | 400 | 1.3 |
| Caption, legal, installments | 12px | 400 | 1.3 |

### Rules

- Sentence case everywhere. Badges are the one place uppercase appears ("MÁS VENDIDO", "OFERTA DEL DÍA").
- Prices: currency symbol, then integer with locale thousands separators; cents in a smaller raised span (`andes-money-amount__cents--superscript`). Old prices are 12-16px secondary grey with a strikethrough.
- Card titles clamp to two lines.

## 4. Logo & Brand Mark

The logo is a handshake inside a yellow oval with a navy outline, set next to the stacked wordmark "mercado libre" in navy lowercase. In Brazil it reads "mercado livre". The handshake alone is used for the favicon and app icon.

- **Color versions:** full color on Meli Yellow (header), full color on white, single-color navy, white reversed on navy.
- **Clear space:** at least the height of the "m" in the wordmark on all sides.
- **Minimum size:** about 100px wide for the full lockup; the handshake alone down to 16px.
- **Header use:** the lockup sits at 134 x 34px in the desktop header.

Misuse:

- Do not put the logo on blue or green fills.
- Do not separate "mercado" and "libre" onto one line or recolor them.
- Do not stretch the oval or drop the navy outline.
- Do not redraw the wordmark in Proxima Nova.

## 5. Components

### Buttons (Andes)

| Variant | Background | Text | Notes |
|---|---|---|---|
| Loud (primary) | `#3483FA` | `#FFFFFF` 16px/600 | Hover `#2968C8`, pressed `#1F4E96` |
| Quiet (secondary) | `rgba(65,137,230,0.1)` approximate | `#3483FA` | Hover `rgba(65,137,230,0.15)` |
| Transparent | transparent | `#3483FA` | Hover blue 150 fill |
| On yellow / complex bg | `rgba(0,0,0,0.45)` hover fill | white | Used over banners |

- Height 48px (large), 32px (medium), 24px (small). Padding 0 24px. Radius 6px.
- Primary pair on a product page: "Comprar ahora" loud, "Agregar al carrito" quiet, stacked full width in the buy box.
- Transitions: `background .18s ease-out, color .18s ease-out`.
- Focus: triple ring `0 0 0 2px #fff, 0 0 0 3px #2968C8, 0 0 0 5px rgba(65,137,230,0.3)`.
- Disabled: `rgba(0,0,0,0.1)` fill, `rgba(0,0,0,0.25)` text.

```css
.andes-button--loud {
  font: 600 16px/48px "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  height: 48px; padding: 0 24px;
  background: #3483FA; color: #fff;
  border: 0; border-radius: 6px;
  transition: background .18s ease-out, color .18s ease-out;
}
.andes-button--loud:hover { background: #2968C8; }
.andes-button--loud:active { background: #1F4E96; }
```

### Header and search

- `.nav-header`: `#FFE600`, 100px tall on desktop (two rows), no border.
- Row 1: logo left, search field center (max about 588px), a promo image slot right.
- Search input: white, 40px tall, radius 2px, `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2)`, padding `10px 60px 10px 15px`, 16px text, placeholder "Buscar productos, marcas y más..." in `rgba(0,0,0,0.55)`. A grey magnifier button sits inside the right edge behind a 1px divider.
- Row 2: location pin with "Enviar a [city]", category dropdown "Categorías", text links (Ofertas, Cupones, Supermercado, Moda, Vender, Ayuda) at 14px `rgba(0,0,0,0.55)`, account links and cart icon right.

### Product card (poly-card)

- White, radius 6px, shadow `0 1px 2px 0 rgba(0,0,0,0.12)`, hover shadow `0 8px 16px 0 rgba(0,0,0,0.1)`.
- Square image well on white, object-fit contain, 16px padding.
- Content gap 8px: optional orange badge, title 14-16px/400 two-line clamp (turns blue `#3483FA` on hover), old price struck through, price 24px/400 with green "% OFF" next to it, installment line, green "Envío gratis" or "Llega gratis mañana" with bolt icon for Full shipping.

### Money amount

`display:flex; align-items:baseline; line-height:1.25; color:rgba(0,0,0,0.9)`. Symbol and number at the same size, cents at roughly 50% size raised. Discount `24% OFF` in green 14-16px/400.

### Cards (Andes card)

Radius 6px, no border, padding variants 16/24/32/40px, text `rgba(0,0,0,0.9)` 16px. Used for the buy box, seller info, questions and the cart summary.

### Inputs

- Height 48px, radius 6px, 1px border `rgba(0,0,0,0.25)`, label above at 14px.
- Focus: border 2px `#3483FA`. Error: border `#F23D4F` plus 12px red helper text.

### Badges and pills

- "MÁS VENDIDO": `#FF7733` fill, white 12px/600 uppercase, radius 3px, padding 2px 4px.
- "OFERTA DEL DÍA": `#3483FA` fill, white 12px/600.
- Tags in search results: `rgba(65,137,230,0.1)` fill with blue text, radius 3px.

### Tabs and filters

Search results show a left filter column: section headings 16px/600, options as 14px links with counts in grey. Applied filters appear as removable chips at the top. Tabs on product pages use a 2px blue underline.

### Carousels

Homepage modules are horizontal carousels in white cards with a title row ("Ofertas" + "Ver todas" link in blue), five or six product cards visible on desktop, and round white arrow buttons (48px, shadow Raised) on the edges.

### Modals

White, radius 6px, max width 480-840px, shadow `0 6px 16px rgba(0,0,0,0.1)`, scrim `rgba(0,0,0,0.8)`. Title 20-24px/600, close icon top right.

## 6. Layout & Spacing

- **Spacing:** 4px base. Common steps 8, 12, 16, 24, 32, 40px. Card padding variants are 16, 24, 32 and 40px.
- **Content width:** about 1200px centered on desktop, with 16px gutters on mobile.
- **Grids:** homepage carousels show 5-6 cards; search results use a 3-4 column grid next to a 280px filter column, or a list view on some categories.
- **Product page:** two columns: gallery plus description on the left (about 60%), sticky buy box on the right.
- **Density:** high. Many modules per page; vertical gaps between modules about 24-40px.
- **Breakpoints:** separate desktop and mobile bundles (`home.desktop.css`); mobile collapses everything to one column with full-width cards.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 1px 2px 0 rgba(0,0,0,0.12)` |
| Subtle | `0 1px 1px 0 rgba(0,0,0,0.1)` |
| Raised | `0 6px 16px 0 rgba(0,0,0,0.1)` |
| Popover / hover card | `0 8px 16px 0 rgba(0,0,0,0.1)` |
| Focus ring | `0 0 0 2px #fff, 0 0 0 3px #2968C8, 0 0 0 5px rgba(65,137,230,0.3)` |

- Elevation is low; most depth comes from white on grey.
- Motion is short and plain: 180-250ms `ease-out` for color and shadow changes, carousels slide about 300ms. No parallax.

## 8. Iconography & Imagery

- **Icons:** simple outline icons, about 1.5px stroke at 24px, in `rgba(0,0,0,0.55)` or blue. The navigation uses its own icon font ("navigation") for the cart, pin and menu.
- **Shipping:** the "Full" lightning bolt logo in green marks fast fulfillment.
- **Product photos:** white or light grey backgrounds, product centered and contained, never cropped.
- **Banners:** colorful full-width promo images at the top of the homepage, with brand partners and seasonal events.
- **Illustrations:** flat, friendly, rounded shapes in yellow, blue and soft pastels for empty states and onboarding.

## 9. Voice & Microcopy

Warm, direct and practical, written in local Spanish (or Portuguese on Mercado Livre). Uses "tú" in most markets.

- Short benefit lines: "Envío gratis", "Llega gratis mañana", "Devolución gratis".
- Clear CTAs: "Comprar ahora", "Agregar al carrito", "Ver todas", "Ingresá a tu cuenta".
- Reassurance: "Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero."
- Installments are always spelled out: "Mismo precio en 12 cuotas de $1.249".

## 10. Do's and Don'ts

**Do**

- Put a full-width `#FFE600` header with a white search field at the top of every page.
- Use white cards with 6px corners on a light grey page.
- Use `#3483FA` for every primary action and link.
- Show green `#00A650` for free shipping and discounts only.
- Make prices large and clear, with superscript cents and installments below.
- Keep text black at 90% and 55% alpha.

**Don't**

- Don't use yellow for buttons or body backgrounds.
- Don't use heavy drop shadows or gradients on cards.
- Don't use bold 700 or all-caps headings.
- Don't color prices green or blue; prices stay near black.
- Don't crop product photos to fill a square.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Mercado Libre. Full-width header in `#FFE600` with a navy-and-yellow handshake logo on the left and a white 40px search field (radius 2px, shadow `0 1px 2px rgba(0,0,0,0.2)`) in the middle, plus a second row with "Enviar a ..." location, category links at 14px grey and a cart icon. Page background `#EDEDED`; content in white cards with 6px radius and shadow `0 1px 2px rgba(0,0,0,0.12)`, hover `0 8px 16px rgba(0,0,0,0.1)`. Font: `"Proxima Nova", "Nunito Sans", -apple-system, Roboto, Arial, sans-serif`, weights 300/400/600 only. Primary buttons `#3483FA` white 16px/600, 48px tall, radius 6px, hover `#2968C8`; secondary buttons light blue fill with blue text. Product cards: contained image on white, two-line 14px title, struck-through old price, 24px price with superscript cents, green `#00A650` "% OFF" and "Envío gratis". Text `rgba(0,0,0,0.9)` and `rgba(0,0,0,0.55)`. Focus ring: `0 0 0 2px #fff, 0 0 0 3px #2968C8, 0 0 0 5px rgba(65,137,230,0.3)`. Copy in friendly Spanish, short and practical.

```css
:root {
  --brand-yellow: #FFE600;
  --brand-logo-yellow: #FFD100;
  --brand-navy: #2D3277;
  --brand-blue: #3483FA;
  --brand-blue-hover: #2968C8;
  --brand-blue-pressed: #1F4E96;
  --brand-blue-quiet: rgba(65, 137, 230, 0.1);
  --brand-blue-quiet-hover: rgba(65, 137, 230, 0.15);
  --brand-green: #00A650;
  --brand-red: #F23D4F;
  --brand-orange: #FF7733;
  --brand-bg: #EDEDED;
  --brand-surface: #FFFFFF;
  --brand-fill: #F5F5F5;
  --brand-text: rgba(0, 0, 0, 0.9);
  --brand-text-secondary: rgba(0, 0, 0, 0.55);
  --brand-text-disabled: rgba(0, 0, 0, 0.25);
  --brand-border: rgba(0, 0, 0, 0.1);
  --brand-font: "Proxima Nova", "Nunito Sans", -apple-system, Roboto, Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius: 6px;
  --brand-radius-lg: 12px;
  --brand-shadow-card: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  --brand-shadow-raised: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
  --brand-shadow-hover: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  --brand-focus: 0 0 0 2px #fff, 0 0 0 3px #2968C8, 0 0 0 5px rgba(65, 137, 230, 0.3);
  --brand-ease: ease-out;
  --brand-duration: 180ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Mercado Libre.

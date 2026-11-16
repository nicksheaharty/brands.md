---
name: Costco
slug: costco
url: https://costco.com
category: Commerce
tagline: "No-frills warehouse retail: red and blue logo, plain white pages, dense product grids."
updated: 2026-11-16
appStoreId: 535509415
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Costco Red
    hex: "#E31837"
    role: Logo letters, sale and urgency accents
  - name: Costco Blue
    hex: "#005DAB"
    role: Primary buttons, links, focus, "WHOLESALE" and stripes in the logo
  - name: Blue Hover
    hex: "#004C8A"
    role: Primary button hover and pressed
  - name: Midnight
    hex: "#021C39"
    role: Dark "midnight-blue" scheme background for header bands and dark panels
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Text
    hex: "#333333"
    role: Primary text
  - name: Text Secondary
    hex: "#5F5F5F"
    role: Secondary text, labels
  - name: Text Light
    hex: "#707070"
    role: Captions, meta
  - name: Border
    hex: "#CCCCCC"
    role: Card and input borders
  - name: Grey 200
    hex: "#EEEEEE"
    role: Dividers, subtle fills
  - name: Grey 100
    hex: "#FAFAFA"
    role: Section background
  - name: Blue 100
    hex: "#EFF7FB"
    role: Info panels, selected rows
  - name: Error Red
    hex: "#C13533"
    role: Error text and borders
  - name: Success Green
    hex: "#008000"
    role: In-stock, success text
  - name: Caution Orange
    hex: "#CA4D00"
    role: Low stock, caution text
  - name: Sky
    hex: "#A5C8FF"
    role: Links and primary on the midnight-blue scheme
fonts:
  display:
    family: "Costco Sans Web"
    fallback: "Roboto"
    weights: [400, 500, 700]
  body:
    family: "Costco Sans Web"
    fallback: "Roboto"
    weights: [400, 500]
typeScale:
  - { role: Heading XL, size: 34, weight: 400, lineHeight: 1.235, tracking: "0" }
  - { role: Heading L, size: 24, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Heading M, size: 20, weight: 500, lineHeight: 1.6, tracking: "0" }
  - { role: Title, size: 18, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Button, size: 14, weight: 500, lineHeight: 1.75, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 3, md: 4, lg: 10, pill: 100 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Focus Glow, value: "0px 0px 4px 0px #005DAB" }
  - { name: Card, value: "0px 2px 6px 0px #CCCCCC" }
  - { name: Raised, value: "0px 5px 10px rgba(0,0,0,0.2)" }
  - { name: Overlay, value: "5px 5px 16px rgba(0,0,0,0.5)" }
preview:
  bg: "#FFFFFF"
  surface: "#FAFAFA"
  text: "#333333"
  muted: "#5F5F5F"
  border: "#CCCCCC"
  accent: "#005DAB"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Costco

## 1. Visual Theme & Atmosphere

Costco's design is the website version of a warehouse aisle: practical, crowded with products, and free of anything that looks expensive. The logo is a loud red "COSTCO" over a blue "WHOLESALE" with racing stripes; everything else is white pages, grey borders, blue buttons and lots of product photos on white.

What makes it recognisable:

- **Red and blue from the logo, used sparingly.** Blue `#005DAB` does the work (buttons, links, focus). Red `#E31837` lives in the logo and in sale or urgent messaging.
- **White and grey utility.** Pages are white with `#CCCCCC` borders and `#333333` text. Sections use `#FAFAFA` to separate.
- **Dense grids.** Product tiles in tight rows, category lists, promo strips ("While Supplies Last", "Online-Only", "Treasure Hunt"). Information over atmosphere.
- **Small radii.** Buttons and inputs are 3-4px. Some newer promo tiles go to 10px.
- **Costco Sans.** A plain, slightly condensed house sans used at regular weight for most text.
- **Member-first chrome.** The header always shows Warehouses, Orders & Returns, Cart and a big search field; membership is always one click away.

Mood words: practical, value, trustworthy, busy, no-nonsense.

## 2. Color Palette & Roles

Values read from costco.com CSS (MUI theme variables) on 2026-11-16. Logo colours are from the official vector.

| Name | Hex | Role |
|---|---|---|
| Costco Red | `#E31837` | Logo letters; `--mui-palette-costco-red` on the site is `#E51937` |
| Costco Blue | `#005DAB` | Primary main, buttons, links, focus, logo stripes (logo vector uses `#005DAA`) |
| Blue Hover | `#004C8A` | Button hover, blue 700 |
| Blue Light | `#337DBB` | Primary light |
| Blue Dark | `#004177` | Primary dark |
| Midnight | `#021C39` | Background in the `midnight-blue` dark scheme |
| Sky | `#A5C8FF` | Primary and links in the `midnight-blue` scheme |
| Text | `#333333` | Primary text (gray 900) |
| Text Secondary | `#5F5F5F` | Secondary text (gray 800) |
| Text Light | `#707070` | Light text (gray 700) |
| Gray 600 | `#909090` | Disabled text, icons |
| Border | `#CCCCCC` | Gray 500, borders |
| Gray 300 | `#D9D9D9` | Dividers |
| Gray 200 | `#EEEEEE` | Subtle fills |
| Gray 100 | `#FAFAFA` | Section background |
| Blue 100 | `#EFF7FB` | Info and selected backgrounds |
| White | `#FFFFFF` | Background |

### Semantic colors

| State | Text / main | Light fill | Notes |
|---|---|---|---|
| Error | `#C13533` | `#FDD6D6` | Field errors, failed actions |
| Success | `#008000` | `#DFF0D8` | In stock, added to cart; dark green `#0B6E22` |
| Caution | `#CA4D00` | `#FFF8D2` | Limited stock, delivery warnings |
| Highlight | `#FFCC00` | | Promo badges (yellow 200) |
| Info | `#005DAB` | `#EFF7FB` | Notices |

In the `midnight-blue` scheme, error becomes `#FF8980` and text becomes `#CCCCCC` on `#021C39`.

## 3. Typography

- **Family:** Costco Sans Web (proprietary), with the stack `"Costco Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- **Google Fonts fallback:** Roboto (already in the stack). Source Sans 3 is a closer match in width if you want something less mechanical.
- Weights 400 and 500 do almost everything; 700 is used for prices and some headings.

### Scale (from the MUI theme tokens)

| Token | Role | Size | Weight | Line height |
|---|---|---|---|---|
| h4 | Page heading | 34px (2.125rem) | 400 | 1.235 |
| h5 / t1 | Section heading | 24px (1.5rem) | 400 | 1.3 |
| h6 | Card heading | 20px (1.25rem) | 500 | 1.6 |
| t2 | Title | 18px (1.125rem) | 400 | 1.3 |
| body1 / b1 | Body | 16px | 400 | 1.5 |
| body2 / b2 | Small body | 14px | 400 | 1.43-1.5 |
| button | Button | 14px | 500 | 1.75 |
| caption / b3 | Caption | 12px | 400 | 1.5-1.66 |

Larger h1-h3 tokens exist (96px light, 60px light, 48px) but are rarely used on the store pages.

### Rules

- Mostly sentence or title case for headings. MUI buttons default to uppercase but Costco overrides many to title case; product CTAs read "Add to Cart".
- Prices in bold with `$` tight to the number and cents shown: `$19.99`.
- No negative tracking. Plain and readable.

## 4. Logo & Brand Mark

The logo is "COSTCO" in heavy, italic-leaning red letters with the registered mark, above "WHOLESALE" in blue italic caps, with three blue speed lines to the left of "WHOLESALE".

- **Primary:** full-colour on white.
- **Short form:** "COSTCO" in red alone is used in tight spaces (the site header uses the full lockup).
- **Reversed:** white letters on blue or red for signage and dark contexts.
- **Clear space:** at least the height of the "C" on all sides.
- **Minimum size:** about 100px wide on screen so "WHOLESALE" stays legible.

Do not:

- Swap the red and blue.
- Set the name in a font instead of using the vector.
- Remove the speed lines from the full lockup.
- Place the full-colour logo on busy photography.

## 5. Components

### Buttons

```css
.btn {
  font: 500 0.875rem/1.75 "Costco Sans Web", Roboto, sans-serif;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;   /* --mui-shape-borderRadius */
  transition: background-color 250ms cubic-bezier(0.4,0,0.2,1),
              box-shadow 250ms cubic-bezier(0.4,0,0.2,1),
              border-color 250ms cubic-bezier(0.4,0,0.2,1);
}
.btn--primary { background: #005DAB; color: #fff; }
.btn--primary:hover { background: #004C8A; }
.btn--primary:focus-visible { box-shadow: 0 0 4px 0 #005DAB; }
.btn--secondary { background: #fff; color: #005DAB; border: 1px solid #005DAB; }
.btn--large { padding: 10px 24px; font-size: 1rem; }
```

- **Add to Cart:** full-width blue, 44-48px tall, "Add to Cart".
- **Text link button:** blue text, no underline until hover.
- **Disabled:** `#EEEEEE` fill, `#909090` text.
- **Chips / filters:** 100px radius pills with `#CCCCCC` border, 14px text.

### Search

- Large header search field, 3px radius left, blue square search button on the right, 44px tall.
- Placeholder `#5F5F5F`. Suggestions dropdown below with bold matched text.

### Inputs

- Outlined MUI fields: 4px radius, 1px `#CCCCCC`, focused label and border `#005DAB`, error `#C13533`.
- Filled labels sit on a white background notch.

### Product tile (signature)

- White, no border or a 1px `#EEEEEE` border, square product image on white.
- Name in 14-16px `#333333`, two lines max.
- Price bold 16-18px, star rating with count, then "Add" or "Add to Cart".
- Badges above the image: "Online-Only", "While Supplies Last", "Member Only Item" in small caps or bold 12px.
- Grid gap about 16px; 2 columns mobile, 4-6 desktop.

### Promo tiles

- Image tiles with 10px top radius (`10px 10px 0 0`) and a caption bar below; heading in 18-20px.

### Navigation

- **Utility row:** "Get Email Offers", "Customer Service", country selector, small 14px text.
- **Main row:** logo left, search centre, "Sign In / Register", "Orders & Returns", "Cart" with count bubble at right.
- **Category row:** "Shop" menu then text links (Grocery, Same Day, Savings, Business Delivery, Optical, Pharmacy, Services, Photo, Travel, Membership, Locations). On dark bands the row uses the `midnight-blue` scheme with white text (approximate placement).
- Mega menu: plain list of categories, 16px links, no images.

### Badges

- Count bubble on cart: blue or red circle with white number, 50% radius.
- Status text: green "In Stock", orange "Limited Stock", red "Out of Stock".

### Lists and tables

- Order history and spec tables: 1px `#CCCCCC` rules, 14px text, alternating `#FAFAFA` rows, no shadows.

### Modals

- White, 4px radius, `#333` 20px heading, close X top right, overlay `rgba(0,0,0,0.5)`.

## 6. Layout & Spacing

- Spacing scale from the theme: 4, 8, 12, 16, 24, 32, 48, 64.
- Breakpoints in the CSS: `375px`, `768px`, `1024px`.
- Content max width about 1440px with 16px gutters on mobile and 24-32px on desktop.
- Homepage: stacked rows of promo carousels, each with a heading at left and "Shop all" at right.
- Product listing: filter column (about 240px) at left on desktop, grid at right.
- Density is high. Small gaps, small type, lots of items above the fold.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Focus glow | `0px 0px 4px 0px #005DAB` | Focus on buttons and inputs |
| Card | `0px 2px 6px 0px #CCCCCC` | Hovered or floating cards |
| Raised | `0px 5px 10px rgba(0,0,0,0.2)` | Menus, dropdowns |
| Overlay | `5px 5px 16px rgba(0,0,0,0.5)` | Popovers on images |

Most surfaces are flat with borders. Motion is MUI defaults: `cubic-bezier(0.4,0,0.2,1)`, 150-250ms for state changes, `height 500ms` for expanding sections. Carousels slide without bounce.

## 8. Iconography & Imagery

- **Icons:** simple filled glyphs on a 24px grid (cart, location pin, user, search), drawn at 1.5-2px equivalent stroke, `currentColor`.
- **Product photography:** straight-on packshots on pure white, the whole product visible, no props. Bulk packs shown as sold.
- **Lifestyle images:** limited to seasonal promos (holiday, travel), warm and simple.
- **Promo art:** flat colour panels with bold product cut-outs and a short headline.
- No illustrations or mascots.

## 9. Voice & Microcopy

Tone: plain, factual, member-focused. Short labels, no jokes.

- Title case for navigation labels, sentence case for messages.
- Talks about value and membership directly.

Sample strings:

- "Welcome to Costco Wholesale"
- "While Supplies Last"
- "Online-Only"
- "Treasure Hunt"
- "What's New"
- "Get Email Offers"
- "Orders & Returns"
- "Add to Cart"
- "Member Only Item"
- "Sign In / Register"

## 10. Do's and Don'ts

**Do**

- Use `#005DAB` for every primary action and link.
- Keep pages white with grey borders and small radii.
- Show products on white in dense, even grids.
- Put price, rating and the add button on every product tile.
- Use red only for the logo and genuine urgency.

**Don't**

- Don't use gradients, glass or heavy shadows.
- Don't round buttons into pills (filter chips are the exception).
- Don't use red for primary buttons.
- Don't use lifestyle photography for product tiles.
- Don't write marketing-style copy; keep it plain.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Costco.com. White background, text `#333333`, secondary `#5F5F5F`, captions `#707070`, borders `#CCCCCC`, section fill `#FAFAFA`, info fill `#EFF7FB`. Primary colour is Costco Blue `#005DAB` (hover `#004C8A`) for buttons, links and focus (`box-shadow: 0 0 4px #005DAB`). Use Costco Red `#E31837` only for the logo and urgent sale labels. Font: "Costco Sans Web", fallback Roboto; headings 20-34px weight 400-500, body 16px/1.5, small 14px, captions 12px; prices bold. Buttons are 4px radius, 14px weight 500, padding 6px 16px (Add to Cart is full-width and 44-48px tall). Inputs are MUI outlined fields, 4px radius. Header has a utility row, then logo + large search + "Orders & Returns" + "Cart", then a category link row. Product tiles: white, square packshot on white, two-line name, bold price, star rating, blue add button, small badges like "Online-Only". Grids are dense (16px gaps, 4-6 columns desktop). Flat surfaces, borders over shadows, MUI easing `cubic-bezier(0.4,0,0.2,1)` 250ms. Copy is plain and factual.

```css
:root {
  --costco-red: #E31837;
  --costco-blue: #005DAB;
  --costco-blue-hover: #004C8A;
  --costco-blue-light: #337DBB;
  --costco-blue-100: #EFF7FB;
  --costco-midnight: #021C39;
  --costco-sky: #A5C8FF;
  --costco-text: #333333;
  --costco-text-secondary: #5F5F5F;
  --costco-text-light: #707070;
  --costco-gray-600: #909090;
  --costco-border: #CCCCCC;
  --costco-gray-300: #D9D9D9;
  --costco-gray-200: #EEEEEE;
  --costco-gray-100: #FAFAFA;
  --costco-white: #FFFFFF;
  --costco-error: #C13533;
  --costco-success: #008000;
  --costco-caution: #CA4D00;
  --costco-highlight: #FFCC00;
  --costco-font: "Costco Sans Web", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --costco-radius-sm: 3px;
  --costco-radius: 4px;
  --costco-radius-tile: 10px;
  --costco-radius-chip: 100px;
  --costco-shadow-focus: 0px 0px 4px 0px #005DAB;
  --costco-shadow-card: 0px 2px 6px 0px #CCCCCC;
  --costco-shadow-raised: 0px 5px 10px rgba(0,0,0,0.2);
  --costco-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

Values are observed from the public website and app; this file is an unofficial reference and is not affiliated with or endorsed by Costco Wholesale Corporation.

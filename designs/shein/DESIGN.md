---
name: SHEIN
slug: shein
url: https://shein.com
category: Commerce
tagline: "Black-and-white fashion storefront, dense product grids and orange-red sale prices."
updated: 2026-11-16
appStoreId: 878577184
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, primary buttons, selected states
  - name: Sale Orange
    hex: "#FA6338"
    role: Sale price, discount badges, promo highlights
  - name: Ink
    hex: "#222222"
    role: Primary text, product titles
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards
  - name: Coupon Red
    hex: "#F93A00"
    role: Coupons, flash sale, urgent promo
  - name: Gray 666
    hex: "#666666"
    role: Secondary text
  - name: Gray 767
    hex: "#767676"
    role: Muted labels, original price
  - name: Gray 959
    hex: "#959595"
    role: Hints, placeholders, struck-through prices
  - name: Line
    hex: "#E5E5E5"
    role: Borders and dividers
  - name: Wash
    hex: "#F6F6F6"
    role: Section and filter backgrounds
  - name: Blush
    hex: "#FFF6F3"
    role: Promo strip and coupon backgrounds
  - name: Deep Orange
    hex: "#C44A01"
    role: Add-on and threshold messages
  - name: Green
    hex: "#198055"
    role: Success, free shipping reached
  - name: Link Blue
    hex: "#2D68A8"
    role: Text links in help and policy content
fonts:
  display:
    family: "SF Pro Display"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "SF Pro Text"
    fallback: "Inter"
    weights: [400, 600, 700]
typeScale:
  - { role: Banner headline, size: 32, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Section title, size: 20, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Product title, size: 13, weight: 400, lineHeight: 1.35, tracking: "0" }
  - { role: Price, size: 16, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Button, size: 14, weight: 700, lineHeight: 1.0, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.35, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 6, 8, 10, 12, 16, 20, 24, 32]
shadows:
  - { name: Sticky bar, value: "0 2px 8px rgba(0,0,0,0.08)" }
  - { name: Dropdown, value: "0 6px 6px rgba(0,0,0,0.08)" }
  - { name: Dialog, value: "0 4px 20px 2px rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#222222"
  muted: "#767676"
  border: "#E5E5E5"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# SHEIN

## 1. Visual Theme & Atmosphere

SHEIN looks like a fashion magazine glued to a discount bazaar. The frame is strict black and white: a black wordmark, black buttons, thin gray lines. Inside that frame, product photos, sale banners and orange-red prices compete for attention in tight, endless grids.

What makes it recognisable:

- **Black and white chrome.** Header, buttons and selected filters are black; the page is white.
- **Orange-red money.** Sale prices, discount percentages and flash-sale tags are `#FA6338`. Coupons lean redder (`#F93A00`).
- **Very dense grids.** Portrait product cards (3:4) in 2 columns on mobile and 4-6 on desktop, 8-12px gaps, almost no padding inside cards.
- **Small, square corners.** Most radii are 2px; buttons are near-rectangles.
- **Promo layers.** Thin promo strips, countdown timers, coupon tickets with perforated edges, and "Free shipping" progress messages sit above and between grids.
- **Model photography.** Full-length studio shots on light backgrounds fill most of each card.

Mood words: fast, trend-driven, busy, bargain, fashion-forward.

## 2. Color Palette & Roles

Values below were read from us.shein.com CSS (custom properties such as `--addon-highlight-color` and `--coupon-primary`) and the most frequent colors in its stylesheets.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Logo, primary buttons, active filter chips |
| Ink | `#222222` | Primary text |
| Gray 333 | `#333333` | Strong secondary text |
| Gray 666 | `#666666` | Secondary text, descriptions |
| Gray 767 | `#767676` | Muted labels |
| Gray 959 | `#959595` | Hints, struck-through original price |
| Gray CCC | `#CCCCCC` | Disabled borders, inactive dots |
| Line | `#E5E5E5` | Borders, dividers |
| Wash | `#F6F6F6` | Filter bar, section backgrounds |
| Wash Light | `#F7F8FA` | Alternate panels |
| White | `#FFFFFF` | Page, cards |

### Promotion colors

| Name | Hex | Role |
|---|---|---|
| Sale Orange | `#FA6338` | Sale price, "-30%" badges, flash sale |
| Coupon Red | `#F93A00` | Coupon accents, urgency |
| Coupon Red Dark | `#D62000` | Coupon buttons, pressed |
| Orange Red | `#F6451E` | Countdown and hot tags |
| Deep Orange | `#C44A01` | Add-on threshold text ("Add $X to get free shipping") |
| Brick | `#BF4123` | Promo text on blush |
| Blush | `#FFF6F3` | Promo strip, coupon card fill |
| Peach | `#FFECE9` | Discount badge fill |
| Gold Wash | `#FFF0B0` | Estimated price tag |
| Brown | `#A15416` | Member and estimated-price text |

### Semantic

| State | Hex |
|---|---|
| Success | `#198055` text, `#D2F3E0` fill |
| Error | `#D62000` text |
| Info link | `#2D68A8` |
| Rating stars | `#FACF19` (approximate) |

### Dark mode

The website has no dark theme. The app has limited dark surfaces in video and live shopping; keep the web reference light.

## 3. Typography

**Families:** SHEIN uses system and common fonts, not a custom typeface. Web CSS calls `SF Pro`, `SF UI Text` and `SF UI Display` on Apple devices, `Arial` elsewhere, and `Muli` (now **Mulish** on Google Fonts) in some legacy components. The wordmark is custom lettering, not a font.

**Fallback:** Inter for UI text. Mulish is a fine match for older promo modules.

```css
font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", Arial, Helvetica, sans-serif;
```

### Scale

| Role | Size | Weight | Line height |
|---|---|---|---|
| Banner headline | 24-40px | 700-900 | 1.15 |
| Section title ("Trends", "Super Deals") | 18-20px | 700 | 1.25 |
| Price (sale) | 14-18px | 700 | 1.2 |
| Product title | 12-13px | 400 | 1.35, 1-2 lines then ellipsis |
| Body | 14px | 400 | 1.45 |
| Button | 14px | 700 | 1 |
| Caption, badges | 10-12px | 400-700 | 1.35 |

Sizes are approximate from the live page.

### Rules

- Product titles are one or two lines, clipped with an ellipsis.
- Prices: currency symbol and number in bold; original price in `#959595` with a strike-through, 12px.
- Promo banners use heavy, condensed, often all-caps type baked into images.
- Buttons are uppercase or title case depending on placement ("ADD TO CART" on product pages in many regions, "Add to Cart" in newer layouts).

## 4. Logo & Brand Mark

The logo is the **SHEIN** wordmark in black capitals: a geometric sans with wide spacing and a distinctive "N" whose diagonal runs past the stems. It is used alone; there is no separate symbol. The app icon is the white wordmark on a black square.

- **Primary:** black on white.
- **Reverse:** white on black or on a dark photo.
- **Clear space:** at least the height of the "S" on left and right (approximate).
- **Minimum size:** about 64px wide (approximate).

Misuse:

- Do not set "SHEIN" in a font, lowercase it, or write "Shein" in the logo.
- Do not color the wordmark orange or red.
- Do not add outlines, shadows or gradients.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` 14px/700 | none | 0-2px | 44-48px |
| Secondary | `#FFFFFF` | `#000000` | 1px `#000000` | 0-2px | 44-48px |
| Coupon / claim | `#F93A00` or `#D62000` | `#FFFFFF` | none | 2px or pill | 28-32px |
| Text link | transparent | `#222222`, underline | none | 0 | auto |
| Icon (wishlist, cart) | transparent | `#222222` | none | 50% | 32-40px |

- Hover on desktop: primary goes to `#222222` or 80% opacity (approximate).
- Disabled: `#CCCCCC` fill with white text.
- Focus ring: `0 0 0 4px hsla(0,0%,100%,.8), 0 0 0 5px rgba(0,0,0,.3)` (served in CSS).

```css
.shein-btn {
  height: 44px; padding: 0 24px;
  background: #000; color: #fff;
  border: 0; border-radius: 2px;
  font: 700 14px/1 var(--brand-font);
}
.shein-btn--secondary { background: #fff; color: #000; border: 1px solid #000; }
```

### Product card (signature)

- Image 3:4, edge to edge, radius 0-4px, light gray placeholder `#F6F6F6`.
- Top-left corner badge: discount "-25%" in white on `#FA6338`, or a small "Trends" / "New" label, 10-12px/700, 2px radius.
- Wishlist heart top-right of the image on desktop hover.
- Below the image, 6-8px gap, then product title 12-13px `#222222` one line.
- Price row: sale price 14-16px/700 `#FA6338`, original price 12px `#959595` struck through, and optional "Estimated" price chip in `#FFF0B0` with `#A15416` text.
- Rating stars and "100+ sold" style microcopy in 11-12px gray.
- A small "+" add-to-cart icon button in the price row on mobile.
- No card border or shadow; whitespace separates cards.

### Navigation

- Promo strip above the header: full-width, black or blush, 12-13px centered text such as free shipping and return offers.
- Header: white, about 60-80px on desktop. Wordmark left, centered search field with camera (image search) icon, right icons for account, wishlist, cart with count badge, globe for region.
- Category bar below: "New In", "Sale", "Women Clothing", "Curve", "Kids", "Men Clothing", "Shoes" and more, 13-14px, horizontal scroll, mega-menu on hover.
- Mobile app: bottom tab bar with Shop, Category, Trends or Explore, Cart and Me; black active icon with label.

### Search

- Pill or 2px-radius field on `#F6F6F6`, 36-40px tall, placeholder rotating trend terms, black search button square at the right end on desktop.

### Filters and sort

- Sticky bar with "Sort", "Category", "Size", "Color", "Price", "Filter" as chips: white with 1px `#E5E5E5` border, 2px radius, 12-13px. Selected: black border and text, or black fill.
- Size selector on product page: boxes 40px tall with 1px border; selected is black 1px border plus bold label; sold out is gray with a diagonal line.

### Coupons and countdowns

- Coupon ticket: `#FFF6F3` fill, `#FED0C2` border, semicircle notches on the sides, amount in 20px/700 `#F93A00`, conditions 11px.
- Countdown: black or red rounded boxes with white two-digit numbers separated by colons.
- Free-shipping progress bar: thin bar filling in `#FA6338` with the message "Add $X more to get free shipping" in `#C44A01`.

### Badges

Small rectangles, 2px radius, 10-12px/700. Discount in white on orange; "Low stock" in orange text; cart count is a black or red circle 16px.

### Dialogs and drawers

White, radius 0 on desktop dialogs or 8-12px top corners on mobile sheets, Dialog shadow, black close icon top-right. Quick-add drawer shows color swatches, size boxes and a black full-width "Add to Cart".

## 6. Layout & Spacing

- **Base unit:** 4px; many components use 6, 10 and 12px steps.
- **Content width:** about 1200-1440px on desktop, fluid with 12-24px gutters (approximate).
- **Grid:** 2 columns on mobile, 4 on tablet, 5-6 on desktop; gaps 8-12px.
- **Section spacing:** tight, 16-32px between modules.
- **Breakpoints:** about 768, 1024 and 1440px (approximate).
- **Density:** high. Keep paddings small and let images fill cards.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Sticky bar | `0 2px 8px #00000014` |
| Dropdown | `0 6px 6px #00000014` |
| Dialog | `0 4px 20px 2px #00000029` |
| Hairline | `inset 0 .5px #E5E5E5` |

- Mostly flat; borders and gray washes separate areas.
- Motion is functional: carousels slide 300ms, drawers slide up 250-300ms ease-out, add-to-cart shows a short fly-to-cart or toast.
- Countdown timers tick every second; keep other animation minimal.

## 8. Iconography & Imagery

- **Icons:** 20-24px outline icons with 1.5px strokes, black, rounded ends (heart, bag, user, search, camera).
- **Product photography:** studio shots of models on light gray or white backgrounds, plus flat-lays for accessories and home goods. Bright, even lighting, the whole outfit in frame.
- **Banners:** collage-style promo images with bold type, stickers and price callouts baked in.
- **Swatches:** small circles with the actual fabric color or pattern.

## 9. Voice & Microcopy

Short, energetic and deal-focused. Lots of numbers in promotions, few adjectives elsewhere.

- Title case for category names, sentence case for messages.
- Exclamation marks appear in promos, not in system messages.

Sample strings (category names read from us.shein.com today; promo patterns approximate):

- Categories: "New In", "Sale", "Women Clothing", "Curve", "Kids", "Men Clothing", "Shoes", "Home & Living"
- Buttons: "Add to Cart", "Checkout", "View All", "Shop Now"
- Promo: "Add $X more to get free shipping"
- Product: "Low stock", "Sold out", "Similar items"
- Empty cart: "Your cart is empty"

## 10. Do's and Don'ts

**Do**

- Keep the chrome black, white and light gray.
- Put sale prices in `#FA6338` bold, with the original price struck through in gray.
- Use dense 3:4 product grids with small gaps and no card borders.
- Use 0-2px corners on buttons and badges.
- Let photography carry color.

**Don't**

- Don't use colored primary buttons; primary is black.
- Don't add shadows or borders to product cards.
- Don't use large rounded corners or pill buttons for main actions.
- Don't color the wordmark or put it in a box.
- Don't leave big empty margins; the store is meant to feel full.

## 11. Agent Prompt Guide

> Build this UI in the style of SHEIN. White page, black `#000` primary buttons with white bold 14px text, 44px tall, 0-2px radius; secondary buttons white with a 1px black border. Text `#222222`, secondary `#666666`, hints `#959595`, borders `#E5E5E5`, gray washes `#F6F6F6`. Font: `"SF Pro Text", -apple-system, Inter, Arial, sans-serif`. Show a dense product grid (2 columns mobile, 5-6 desktop, 8-12px gaps) of 3:4 model photos with no borders, a one-line 13px title, a bold sale price in `#FA6338` and a struck-through gray original price. Add a small "-30%" badge in white on `#FA6338` at the image corner. Above the header put a thin promo strip; the header has the black SHEIN wordmark, a search field with a camera icon, and account, wishlist and cart icons. Coupons are blush `#FFF6F3` tickets with red `#F93A00` amounts. Keep motion minimal and the page busy but orderly.

```css
:root {
  --brand-black: #000000;
  --brand-text: #222222;
  --brand-text-strong: #333333;
  --brand-text-secondary: #666666;
  --brand-muted: #767676;
  --brand-hint: #959595;
  --brand-border: #E5E5E5;
  --brand-wash: #F6F6F6;
  --brand-bg: #FFFFFF;
  --brand-sale: #FA6338;
  --brand-coupon: #F93A00;
  --brand-coupon-dark: #D62000;
  --brand-addon: #C44A01;
  --brand-blush: #FFF6F3;
  --brand-peach: #FFECE9;
  --brand-success: #198055;
  --brand-link: #2D68A8;
  --brand-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", Arial, Helvetica, sans-serif;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 8px;
  --brand-radius-pill: 9999px;
  --brand-shadow-bar: 0 2px 8px #00000014;
  --brand-shadow-dialog: 0 4px 20px 2px #00000029;
  --brand-grid-gap: 10px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by SHEIN.

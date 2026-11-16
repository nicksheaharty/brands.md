---
name: GoWish
slug: gowish
url: https://gowish.com
category: Commerce
tagline: "Cheerful sky-blue cloud, warm cream panels and serif headlines for sharing wishlists."
updated: 2026-11-16
appStoreId: 1605170923
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: GoWish Blue
    hex: "#4397FF"
    role: Brand colour, logo tile, primary buttons, focus ring
  - name: Navy
    hex: "#172232"
    role: Primary text, logo wordmark, footer, inverse surfaces
  - name: Cream
    hex: "#F9F2E6"
    role: Secondary background, elevated panels and sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards, inputs
  - name: Cloud
    hex: "#E9F5FD"
    role: Cloud mark inside the logo tile
  - name: Deep Navy
    hex: "#163255"
    role: Primary dark button background, ghost button text
  - name: Ice Blue
    hex: "#D9EAFF"
    role: Interactive surfaces, text on navy buttons
  - name: Link Blue
    hex: "#2D65AA"
    role: Links and brand text
  - name: Blue Hover
    hex: "#387ED4"
    role: Hover state for blue buttons
  - name: Sand
    hex: "#E5DBC8"
    role: Subtle borders, elevation 2 surfaces
  - name: Tan
    hex: "#D6C0A4"
    role: Default borders, elevation 3 surfaces
  - name: Grey Text
    hex: "#3E4754"
    role: Secondary text
  - name: Muted Text
    hex: "#8B9098"
    role: Tertiary text, input labels, icons
  - name: Rust
    hex: "#925034"
    role: Emphasis surface, warm accent
  - name: Alert Red
    hex: "#FF3434"
    role: Errors and alerts
  - name: Success Green
    hex: "#1A803A"
    role: Success icons and confirmations
fonts:
  display:
    family: "PP Pangaia"
    fallback: "Fraunces"
    weights: [400, 500]
  body:
    family: "Geist"
    fallback: "Geist"
    weights: [400, 600, 700]
  mono:
    family: "Geist Mono"
    fallback: "Geist Mono"
    weights: [400]
typeScale:
  - { role: Large Title, size: 34, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Title 1, size: 27, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Title 2, size: 24, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Title 3, size: 22, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Headline, size: 17, weight: 600, lineHeight: 1.25, tracking: "0.02em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.25, tracking: "0.016em" }
  - { role: Subheadline, size: 14, weight: 400, lineHeight: 1.25, tracking: "0.015em" }
  - { role: Footnote, size: 13, weight: 400, lineHeight: 1.25, tracking: "-0.02em" }
radii: { sm: 4, md: 6, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Input, value: "0 0 0 2px #E8ECF3" }
  - { name: Focus, value: "0 0 0 2px #A6CDFE" }
  - { name: Soft, value: "0 0 5px rgba(0,0,0,0.4)" }
preview:
  bg: "#FFFFFF"
  surface: "#F9F2E6"
  text: "#172232"
  muted: "#8B9098"
  border: "#E5DBC8"
  accent: "#4397FF"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# GoWish

## 1. Visual Theme & Atmosphere

GoWish is a Danish wishlist and gift registry app: you save things you want from any shop, share the list, and friends and family reserve gifts so nobody buys the same thing twice. The brand is friendly and soft. Its logo is a white cloud on a sky-blue rounded tile, and the website pairs that blue (`#4397FF`) with dark navy text, warm cream panels and a characterful serif for headlines.

The site (gowish.com) is a simple marketing page plus a web version of the app. The home page has a big serif headline ("All your wishes in one place"), a short paragraph, a "Get the app" button, two large stats, logos of partner brands, and three "How GoWish works" steps. The footer is solid navy. Inside the product, wishlists are grids of product cards with images, prices and a reserve state.

What makes it recognisable:

- **Cloud on blue.** The rounded-square blue tile with a white cloud is the logo, app icon and favicon.
- **Warm neutrals.** Cream `#F9F2E6` sections and sand/tan borders (`#E5DBC8`, `#D6C0A4`) instead of cool greys.
- **Serif headlines.** PP Pangaia, a contemporary serif, for titles; Geist sans for everything else.
- **Navy, not black.** Text, footer and dark buttons use `#172232` / `#163255`.
- **Small corners on buttons, big corners on sheets.** Buttons 4-6px, panels and modals 16-20px.

Mood words: cheerful, warm, gift-giving, Scandinavian, uncluttered.

## 2. Color Palette & Roles

Values come from gowish.com's production CSS tokens (`--color-*`) and inline component styles read on 2026-11-16.

| Token | Hex | Role |
|---|---|---|
| surface-brand / icon-brand | `#4397FF` | Brand blue, primary button fill, logo tile |
| buttons-surface-brand-hover | `#387ED4` | Hover on blue buttons |
| text-primary / surface-inverse | `#172232` | Text, footer, dark surfaces |
| buttons-surface-primary-default | `#163255` | Navy button fill |
| buttons-surface-primary-hover | `#0D1E33` | Navy button hover and pressed; border-contrast |
| buttons-text-icon-primary | `#D9EAFF` | Text on navy buttons |
| surface-interactive-default | `#D9EAFF` | Selected and interactive fills |
| surface-interactive-strong | `#C0DCFF` | Stronger selected fill |
| surface-interactive-subtle / skeleton | `#ECF4FF` | Hover fills, loading skeletons |
| text-brand / text-link / icon-link | `#2D65AA` | Links |
| text-secondary | `#3E4754` | Secondary text |
| text-tertiary / icon-tertiary | `#8B9098` | Tertiary text, labels |
| input placeholder | `#B2B5BB` | Placeholder |
| background-default / surface-default | `#FFFFFF` | Page and cards |
| background-secondary / elevation-1 | `#F9F2E6` | Cream sections and panels |
| surface-elevation-2 / border-subtle | `#E5DBC8` | Sand surfaces, subtle borders |
| surface-elevation-3 / border-default | `#D6C0A4` | Tan surfaces, default borders |
| border-strong | `#6B6052` | Strong borders, input header text |
| surface-emphasis | `#925034` | Rust emphasis panels |
| Logo cloud | `#E9F5FD` | Cloud fill inside the logo tile |

### Semantic colors

| State | Icon / text | Surface |
|---|---|---|
| Alert / error | `#FF3434` (destructive text `#D42B2B`) | `#FFE4E4` |
| Success | `#1A803A` | `#D6FFE3` |
| Warning | `#AA9123` border | (approximate) light yellow |
| Focus ring | `#4397FF` at 25% (`#4397FF40`) | none |

### Dark mode

The marketing site is light only. The app follows the system theme with a navy-based dark mode (`#0D1E33` / `#172232` surfaces, white text, blue kept as the accent; approximate).

## 3. Typography

**Families:**

- **PP Pangaia** (Pangram Pangram), regular 400 and medium 500, for titles and sheet headings. Commercial; substitute **Fraunces** from Google Fonts (optical size high, "SOFT" 50, weight 400-500).
- **Geist** (Vercel, on Google Fonts) at 400, 600 and 700 for body, buttons and UI. **Geist Mono** for any code or numbers that need fixed width.

```css
font-family: PPPangaia, Fraunces, Georgia, serif;   /* titles */
font-family: Geist, -apple-system, "Segoe UI", sans-serif;   /* everything else */
```

The type names mirror Apple's text styles (Large Title, Title 1-3, Headline, Body, Subheadline, Footnote, Caption), because the web shares tokens with the iOS app.

### Scale (from production classes)

| Role | Family | Size | Weight | Tracking |
|---|---|---|---|---|
| Large title | Pangaia | 34px (33px emphasised) | 400 / 500 | 0 |
| Title 1 | Pangaia | 27px | 400 / 500 | 0 |
| Title 2 | Pangaia | 24px | 400 / 500 | 0 |
| Title 3 | Pangaia | 22px | 400 / 500 | 0 |
| Sheet title | Pangaia | 20px | 500 | 0 |
| Headline | Geist | 17px (20px desktop) | 400 / 600 | 0.02em |
| Body | Geist | 16px | 400 / 600 | 0.016em |
| Subheadline | Geist | 14px (16px desktop) | 400 / 600 | 0.015em |
| Footnote | Geist | 13px | 400 / 600 | -0.02em |
| Caption 1 / 2 | Geist | 12px / 11px | 400 / 600 | -0.02em |

Line height is `normal` throughout (about 1.2-1.25).

### Rules

- Sentence case for headings and buttons: "Create wishlist", "Get the app".
- Each type style has a regular and an "emphasised" weight; emphasised is 500 for Pangaia, 600 for Geist.
- Stats use Pangaia in large sizes with a "+" prefix ("+20M registered users", "+800M added wishes", as shown on gowish.com on 2026-11-16).
- Avoid all caps.

## 4. Logo & Brand Mark

The mark is a rounded-square tile (a squircle-like shape with very soft corners) in GoWish Blue `#4397FF` holding a white cloud (`#E9F5FD`). The full logo puts the tile left of the "GoWish" wordmark in navy `#172232`, set in a rounded geometric sans with a capital "G" and "W".

- **App icon:** the cloud on a full blue square.
- **Colour versions:** blue tile with navy wordmark on white (primary); blue tile with white wordmark on navy (light version, used in the footer).
- **Clear space:** at least half the tile's width around the lockup (approximate).
- **Minimum size:** tile about 24px on screen; full logo about 96px wide (approximate).

Misuse:

- Don't change the tile to a circle or sharp square.
- Don't put the cloud on any colour other than GoWish Blue.
- Don't recolour the wordmark blue or set it in Geist.

## 5. Components

### Buttons

| Variant | Background | Text | Radius | Height | Font |
|---|---|---|---|---|---|
| Brand (large) | `#4397FF` | `#FFFFFF` | 6px | 49px | Geist 600 16px |
| Brand (default) | `#4397FF` | `#FFFFFF` | 4px | 40px | Geist 600 16px |
| Navy | `#163255` | `#D9EAFF` | 4px | 40px | Geist 600 16px |
| Secondary | `rgba(13,30,51,0.12)` | `#0D1E33` | 4-6px | 40px | Geist 600 |
| Ghost | `rgba(13,30,51,0.06)` | `#163255` | 4-6px | 40px | Geist 600, 1px `#163255` border |
| Destructive | `rgba(13,30,51,0.12)` | `#D42B2B` | 4-6px | 40px | Geist 600 |
| App store badge | black badges | | 8px | 40-48px | |

States: brand hover `#387ED4`; navy hover and pressed `#0D1E33`; ghost hover `rgba(13,30,51,0.08)`; disabled navy uses `#EBF1F7` fill and `#BDCFE5` text; focus ring `0 0 0 2px #A6CDFE` or the brand blue at 25%.

```css
.gw-btn {
  font: 600 16px/1 Geist, -apple-system, sans-serif;
  height: 40px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  background: #4397FF;
  color: #FFFFFF;
}
.gw-btn:hover { background: #387ED4; }
.gw-btn--navy { background: #163255; color: #D9EAFF; }
.gw-btn--large { height: 49px; border-radius: 6px; }
```

A pulsing variant animates a ring from `color-mix(in srgb, #4397FF 55%, transparent)` out to 12px and fades it, to draw attention to "Get the app".

### Header

White, about 64-72px tall. Logo left. Right: language selector ("English"), "Log in" text button and "Sign up" brand button. On mobile, a hamburger icon made of three 18x2px navy bars with 4px radius.

### Hero

Large Pangaia headline in navy across two lines ("All your wishes / in one place"), a 16-17px Geist paragraph in `#3E4754`, then "Get the app" button. A phone mockup of the app sits beside or below. Two stats follow in large Pangaia numerals with small Geist labels.

### Wish card (product)

- White card, radius 12-16px, image area on top with the product photo on white or `#F9F2E6`, `contain` fit.
- Title (Geist 14-16px 600, 2 lines), shop name and price (14px `#8B9098` / navy).
- Reserved state: an overlay `rgba(0,0,0,0.25)` on the image with a "Reserved" label; normal overlay `rgba(0,0,0,0.04)`.
- Heart or "+" save button in a small round chip at the top right.

### Wishlist cover

A large rounded tile (16-20px radius) with a cover image or a solid colour block, list name in Pangaia 22-24px, item count and owner avatar.

### Inputs

White fill, 1px `#172232` border (some contexts `#D6C0A4`), text `#172232`, label `#8B9098`, placeholder `#B2B5BB`, soft outer shadow `0 0 0 2px #E8ECF3`, focus border `#4397FF`. Radius 6-8px. An input header strip in `#E5DBC8` with `#6B6052` text is used for grouped fields.

### Modals and sheets

Rounded 20px corners (bottom sheets `20px 20px 0 0`) on white or `#F9F2E6`, padding 24px 32px, title in Pangaia 20px 500. Overlay `rgba(23,34,50,0.25)`.

### Labels and badges

Small pills with `#172232` fill and white 12px Geist 600 text ("New", "Popular"), or `#D9EAFF` fill with navy text.

### Footer

Solid navy `#172232`, white logo, link columns ("Customer Service", "Advertisers", "Commercial partnerships", "Press", "Inspirations", "Brands", "Gift cards", "Events", "Trending") in white Geist 14-15px, legal links separated by pipes, company line in small muted text. Padding about 8px 0 80px with centred content.

## 6. Layout & Spacing

- **Max width:** about 1200px content, centred, 20-32px side padding.
- **Sections:** alternate white and cream `#F9F2E6` bands, 64-96px vertical padding.
- **"How it works":** three columns on desktop, stacked on mobile, each with an illustration, Pangaia title and short Geist text.
- **Spacing:** 4px base, Tailwind-style scale (4, 8, 12, 16, 20, 24, 32, 48).
- **Breakpoints:** Tailwind defaults (640, 768, 1024, 1280px).
- **Density:** relaxed on marketing pages, medium in wishlist grids (2 columns mobile, 3-5 desktop).

## 7. Depth, Elevation & Motion

- Mostly flat, separated by warm surface colours (`#FFFFFF` to `#F9F2E6` to `#E5DBC8` to `#D6C0A4` as elevation 0-3).
- Inputs use a 2px soft ring `#E8ECF3` rather than a drop shadow.
- Occasional soft glow on brand elements: `0 0 10px #4397FF, 0 0 5px #4397FF` (used on a highlight), and `0 0 5px rgba(0,0,0,0.4)` on small floating chips.
- Motion: gentle. Button pulse ring (about 1.5-2s loop), carousels (slick) sliding brand logos, 150-200ms hovers.

## 8. Iconography & Imagery

- Icons are rounded, filled or 2px outline, in navy `#172232` or tertiary `#8B9098`; brand blue for active states.
- Imagery: product photos on white, partner brand logos in a strip, and app screenshots in phone frames. Marketing uses light, cosy photography (gifts, homes, families) and the cloud motif.
- Avatars are circles. Product images keep their natural aspect inside rounded containers.

## 9. Voice & Microcopy

Warm, simple, helpful. Sentence case. Talks to "you" and "your family and friends".

- Hero: "All your wishes in one place"
- Sub: "GoWish makes it easy for you to discover, save and share the things you love with friends and family."
- Steps: "Create wishes & wishlists", "Share with friends & family", "Avoid getting the same gift"
- Buttons: "Get the app", "Create wishlist", "Log in", "Sign up", "Reserve"
- Title tag: "Gift Registry & Wishlist - Find It. Love It. Share It."

## 10. Do's and Don'ts

**Do**

- Use `#4397FF` for the main action and the logo tile, navy `#172232` for text.
- Use cream `#F9F2E6` panels and sand borders for warmth.
- Set titles in a soft serif (Pangaia or Fraunces) and UI in Geist.
- Keep buttons compact with 4-6px corners and 600-weight labels.
- Use large, rounded sheets (16-20px) for modals and wishlist covers.

**Don't**

- Don't use pure black text or cool grey backgrounds.
- Don't use the serif for buttons, labels or body text.
- Don't add more saturated accents beside the blue and the occasional rust.
- Don't use heavy drop shadows on cards.
- Don't redraw the cloud or put it on anything but blue.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of GoWish, a wishlist app. White page with alternating cream `#F9F2E6` sections, navy text `#172232`, secondary text `#3E4754`, tertiary `#8B9098`, warm borders `#E5DBC8` and `#D6C0A4`. Brand blue `#4397FF` (hover `#387ED4`) for primary buttons and the logo: a soft rounded blue tile with a white cloud beside a navy "GoWish" wordmark. Fonts: titles in a soft serif (Fraunces 400-500 as a stand-in for PP Pangaia), 27-34px, navy; everything else in Geist, body 16px 400 with 0.016em tracking, buttons 16px 600. Buttons: 40px tall, 4px radius (large 49px, 6px radius); a navy variant `#163255` with ice-blue `#D9EAFF` text. Hero: "All your wishes in one place" headline, short paragraph, "Get the app" button, phone mockup, then two big stats. Wishlist grid: white product cards with 12-16px radius, contained product image, 2-line title, shop and price, a "Reserved" overlay state. Navy footer with white links. Modals with 20px radius. Flat surfaces, focus ring `0 0 0 2px #A6CDFE`.

```css
:root {
  --brand-blue: #4397FF;
  --brand-blue-hover: #387ED4;
  --brand-cloud: #E9F5FD;
  --brand-navy: #172232;
  --brand-navy-button: #163255;
  --brand-navy-deep: #0D1E33;
  --brand-ice: #D9EAFF;
  --brand-ice-strong: #C0DCFF;
  --brand-ice-subtle: #ECF4FF;
  --brand-link: #2D65AA;
  --brand-text-2: #3E4754;
  --brand-text-3: #8B9098;
  --brand-placeholder: #B2B5BB;
  --brand-bg: #FFFFFF;
  --brand-cream: #F9F2E6;
  --brand-sand: #E5DBC8;
  --brand-tan: #D6C0A4;
  --brand-border-strong: #6B6052;
  --brand-rust: #925034;
  --brand-alert: #FF3434;
  --brand-success: #1A803A;
  --brand-font-display: PPPangaia, Fraunces, Georgia, serif;
  --brand-font: Geist, -apple-system, "Segoe UI", sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 16px;
  --brand-radius-sheet: 20px;
  --brand-radius-pill: 9999px;
  --brand-ring-input: 0 0 0 2px #E8ECF3;
  --brand-ring-focus: 0 0 0 2px #A6CDFE;
}
```

---

Values are observed from the public product and published brand material; this file is an unofficial reference and is not affiliated with or endorsed by GoWish.

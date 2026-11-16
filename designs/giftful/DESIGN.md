---
name: Giftful
slug: giftful
url: https://giftful.com
category: Commerce
tagline: "Wishlist app in leafy greens: soft serif wordmark, clean white lists, emerald actions."
updated: 2026-11-16
appStoreId: 1450175505
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Giftful Green
    hex: "#5AE17A"
    role: App icon and favicon background
  - name: Forest
    hex: "#00341E"
    role: Brand dark green, wordmark, "g" mark, dark panels
  - name: Emerald Action
    hex: "#00BE82"
    role: Primary buttons, links, focus ring in the app
  - name: Marketing Green
    hex: "#1CC26E"
    role: Brand primary on marketing surfaces
  - name: Bright Green
    hex: "#55E06F"
    role: Highlights and illustration fills
  - name: Black
    hex: "#000000"
    role: Primary text, dark buttons
  - name: White
    hex: "#FFFFFF"
    role: App background and cards
  - name: Canvas
    hex: "#F5F5F5"
    role: Canvas behind cards, input fill
  - name: Muted Text
    hex: "#737373"
    role: Secondary and placeholder text
  - name: Border
    hex: "#E5E5E5"
    role: Default borders and dividers
  - name: Mint
    hex: "#ECFDF5"
    role: Subtle primary fill, success backgrounds
  - name: Pressed Green
    hex: "#047857"
    role: Primary pressed state
  - name: Pink
    hex: "#FF8AF1"
    role: Marketing accent (bright pink)
  - name: Yellow
    hex: "#FFEC46"
    role: Marketing accent (bright yellow)
  - name: Blue
    hex: "#9DC4FF"
    role: Marketing accent (bright blue)
  - name: Danger
    hex: "#DC2626"
    role: Errors and destructive actions
fonts:
  display:
    family: "Gelica"
    fallback: "Fraunces"
    weights: [600, 700]
  body:
    family: "Ballinger"
    fallback: "Work Sans"
    weights: [400, 500, 600, 700]
typeScale:
  - { role: Hero, size: 56, weight: 700, lineHeight: 1.05, tracking: "-0.01em" }
  - { role: Section, size: 36, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: List Title, size: 24, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Item Title, size: 16, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Price, size: 14, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.33, tracking: "0" }
radii: { sm: 5, md: 12, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 0 4px rgba(0,0,0,0.2)" }
  - { name: Small, value: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)" }
  - { name: Raised, value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  muted: "#737373"
  border: "#E5E5E5"
  accent: "#00BE82"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: pill
---

# Giftful

## 1. Visual Theme & Atmosphere

Giftful is a universal wishlist and registry: save items from any store, share a list, and let friends claim gifts without spoiling the surprise. The brand is green and friendly. The wordmark is a soft, chunky serif ("giftful" in lowercase, Gelica), the app icon is a big dark-green "g" bursting out of a bright green `#5AE17A` square, and the product itself is a clean white app with black text, light grey canvas and emerald `#00BE82` actions.

What makes it recognisable:

- **Two greens.** A light, fresh green (`#5AE17A` icon, `#1CC26E` / `#55E06F` marketing) against a deep forest green `#00341E` for the wordmark and the "g".
- **Soft serif display.** Gelica gives headlines a warm, slightly old-fashioned, gift-tag quality. UI text is a neutral sans (Ballinger).
- **Product images first.** Lists are grids of item photos on white with title, store and price underneath.
- **Neutral app chrome.** Tailwind-style neutrals (`#F5F5F5`, `#E5E5E5`, `#737373`) so the gift images carry the color.
- **Themes.** Users can switch the app between named themes ("classic", "blue-ridge", "malibu", "yellowstone", "sedona", "evergreen") and light or dark mode.

Mood words: friendly, generous, tidy, a little whimsical.

## 2. Color Palette & Roles

App tokens come from the inline theme script on giftful.com; marketing constants from the app bundle.

### App (light, "classic" theme)

| Token | Hex | Role |
|---|---|---|
| bg-app, bg-surface, raised surface | `#FFFFFF` | Page and cards |
| bg-muted | `#F8F8F8` | Muted panels |
| bg-canvas / input | `#F5F5F5` | Canvas, input fill |
| bg-control | `#EFEFEF` | Segmented controls, chips |
| bg-contrast | `#262626` | Dark toast, tooltip |
| text-primary | `#000000` | Main text |
| text-secondary | `#404040` | Secondary text |
| text-muted | `#737373` | Meta, placeholders |
| text-subtle | `#A3A3A3` | Hints |
| text-link | `#00BE82` | Links |
| border-default | `#E5E5E5` | Borders |
| border-subtle | `#EFEFEF` | Light dividers |
| border-strong | `#D4D4D4` | Strong borders |
| action-primary | `#00BE82` | Primary buttons |
| action-primary-pressed | `#047857` | Pressed |
| action-primary-subtle | `#ECFDF5` | Subtle green fill |
| action-button | `#000000` | Black buttons |
| action-danger | `#DC2626` | Danger (hover `#B91C1C`, subtle `#FEF2F2`) |
| action-success | `#059669` | Success |
| action-warning | `#F59E0B` | Warning (subtle `#FEF3C7`) |
| border-focus | `#00BE82` | Focus ring |

### Marketing constants

| Name | Hex |
|---|---|
| Primary | `#1CC26E` |
| Primary bold | `#00341E` |
| Primary bright | `#55E06F` |
| Primary light | `#E6F9F3` |
| Primary dark | `#0D3D30` |
| Blue bold / shadow / bright / light | `#060F3B` / `#629CF4` / `#9DC4FF` / `#CCE1FF` |
| Pink bold / shadow / bright / light | `#3B0B06` / `#F462E3` / `#FF8AF1` / `#FFC4F8` |
| Yellow bold / shadow / bright / light | `#3C3600` / `#E2CB00` / `#FFEC46` / `#FFF8B6` |
| Black | `#0C0F14` |
| Creator avatar backdrop | `#E2DBCA` |

Each accent comes as a set: a very dark "bold" for text, a saturated "shadow" for offset shadows and outlines, a "bright" fill and a pale "light" background.

### Dark mode

App `#000000`, surface `#171717`, raised `#262626`, muted/control `#404040`, text white, secondary `#D4D4D4`, muted `#A3A3A3`, links `#34D399`, borders `#404040`, primary stays `#00BE82` with subtle `#064E3B`.

## 3. Typography

**Families (from the site CSS):**

- **Gelica**: soft, bulbous display serif for the wordmark and big headlines. Commercial. Free stand-in: **Fraunces** (with `SOFT` 100, `WONK` 1) or **Young Serif**.
- **Ballinger**: clean grotesque for UI and body. Commercial. Free stand-in: **Work Sans** (the CSS already falls back to it).
- **Guthen Jaqueline**: a decorative script used rarely for flourishes. Stand-in: **Pacifico**.

```css
font-family: ballinger, "Work Sans", "Helvetica Neue", Arial, sans-serif;
--display: gelica, "Fraunces", Georgia, serif;
```

### Scale (approx.)

| Role | Size | Weight | Line height | Family |
|---|---|---|---|---|
| Hero | 56px | 700 | 1.05 | Gelica |
| Section | 36px | 700 | 1.15 | Gelica |
| List title | 24px | 700 | 1.25 | Gelica or Ballinger |
| Item title | 16px | 600 | 1.35 | Ballinger |
| Body | 16px | 400 | 1.5 | Ballinger |
| Price | 14px | 600 | 1.3 | Ballinger |
| Button | 15px | 600 | 1.2 | Ballinger |
| Caption | 12px | 500 | 1.33 | Ballinger |

**Rules:** the wordmark is always lowercase. Headlines are sentence case. Prices use the store's currency and appear under the item, not as a badge.

## 4. Logo & Brand Mark

- **Wordmark:** "giftful" lowercase in Gelica-style soft serif, solid forest green `#00341E` (or black, or white on green).
- **App mark:** a single oversized "g" in `#002F1C` on `#5AE17A`, cropped by the bottom edge so the descender runs off the tile. The favicon uses a 30% corner radius.
- **Clear space:** at least the x-height of the wordmark (approx.).
- **Minimum size:** wordmark 56px wide (approx.).
- **Misuse:** do not set the wordmark in title case, outline it, or put the dark "g" on dark backgrounds. Do not uncrop the "g" in the app icon.

## 5. Components

### Buttons

```css
.gf-btn {
  height: 48px; padding: 0 24px; border-radius: 9999px;
  font: 600 15px/1.2 ballinger, "Work Sans", sans-serif;
  border: none; transition: background-color .15s, transform .1s;
}
.gf-btn--primary { background: #00BE82; color: #FFFFFF; }
.gf-btn--primary:active { background: #047857; }
.gf-btn--black   { background: #000000; color: #FFFFFF; }
.gf-btn--subtle  { background: #ECFDF5; color: #047857; }
.gf-btn--control { background: #EFEFEF; color: #000000; }
.gf-btn--danger  { background: #DC2626; color: #FFFFFF; }
.gf-btn:focus-visible { outline: 2px solid #00BE82; outline-offset: 2px; }
```

Pill shape and sizes approximate; the CSS uses 9999px, 12px and 24px radii.

### Wish card (item tile)

```css
.gf-wish {
  background: #FFFFFF; border-radius: 12px; overflow: hidden;
}
.gf-wish__img { aspect-ratio: 1; object-fit: contain; background: #F5F5F5; border-radius: 12px; }
.gf-wish__title { font: 600 14px/1.35 ballinger, sans-serif; margin-top: 8px; }
.gf-wish__meta  { font: 500 12px/1.33 ballinger, sans-serif; color: #737373; }
```

Grid of 2 columns on phone, 3-5 on desktop, 12-16px gaps. A "claimed" state dims the image and shows a small gift icon badge; owners never see who claimed it.

### List header

Cover image or emoji, list title in Gelica 24-28px, owner avatar and name, event date chip, "Share" black pill and "Add wish" green pill.

### Inputs

Fill `#F5F5F5`, no border or 1px `#E5E5E5`, radius 12px, 48px tall, placeholder `#737373`, focus ring 2px `#00BE82`. Paste-a-link field is the main input ("Paste a link to add a wish").

### Chips and tabs

Segmented tabs on `#EFEFEF` with a white selected pill. Category chips 32px tall, pill, `#F5F5F5`.

### Avatars

Circles, 32-48px; creator avatars on marketing pages sit on a warm `#E2DBCA` backdrop.

### Modals and sheets

White, radius 24px, overlay `rgba(0,0,0,0.4)`, title in 20px semibold, actions stacked full width on mobile.

### Marketing cards

Bright accent fills (pink, yellow, blue, green "bright") with the matching "bold" color for text and a hard offset shadow in the "shadow" tone (approx.), giving a sticker-like look.

## 6. Layout & Spacing

- **Spacing:** Tailwind 4px scale; 16 and 24px most common.
- **App width:** single-column content up to about 1024px, grid of wishes inside (approx.).
- **Mobile:** 16px side margins, bottom tab bar (Home, Friends, Add, Shop, Profile, approx.).
- **Density:** medium; image-heavy grids with small text.

## 7. Depth, Elevation & Motion

- **Card shadow:** `0 0 4px rgba(0,0,0,0.2)` (`.shadow-card`), plus Tailwind `shadow`, `shadow-md`, `shadow-lg`, `shadow-2xl` for menus and modals.
- **Borders over shadows** in lists: 1px `#E5E5E5`.
- **Motion:** spring animations (stiffness about 200) for success check circles; 150ms button transitions; sheets slide up.

## 8. Iconography & Imagery

- **Icons:** rounded line icons, 24px, 1.5-2px stroke, black or muted grey.
- **Imagery:** product shots pulled from stores, on white or light grey, contained (not cropped).
- **Illustration:** simple gift and party motifs in the bright accent set.
- **Store logos** appear as small rounded tiles in the shop section.

## 9. Voice & Microcopy

Warm, simple, gift-giving language. Never pushy.

- "Add a wish", "Paste a link", "Share list", "Claim", "Mark as purchased"
- "Follow to see their wishlists."
- "No wishes found for this list."
- "This account is private"
- Section labels (read in the app bundle): "Top 100 Trending", "Featured Guides"

Sentence case throughout; the brand name is lowercase in the logo but "Giftful" in running text.

## 10. Do's and Don'ts

**Do**

- Pair forest `#00341E` with bright green `#5AE17A` for brand moments.
- Keep the app white with neutral greys and let product photos carry color.
- Use emerald `#00BE82` for the main action and links.
- Use a soft display serif for headlines and a plain sans for UI.
- Show prices and store names plainly under each wish.

**Don't**

- Don't use more than one bright marketing accent per section.
- Don't crop product images; contain them on light grey.
- Don't title-case the wordmark.
- Don't show who claimed a gift to the list owner.
- Don't use harsh drop shadows on list items.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Giftful. White app background with `#F5F5F5` canvas and inputs, black text, secondary `#404040`, muted `#737373`, borders `#E5E5E5`. Font `ballinger, "Work Sans", sans-serif` for UI; headlines and list titles in a soft chunky serif (Gelica, fallback Fraunces) at weight 700. Primary actions are emerald `#00BE82` pills with white text (pressed `#047857`), secondary actions are black pills, subtle actions are mint `#ECFDF5`. Show wishes as a grid of 12px-radius tiles: square product image contained on `#F5F5F5`, 14px semibold title, 12px grey store and price. Brand moments use forest green `#00341E` on bright green `#5AE17A`, with a lowercase "giftful" wordmark. Marketing sections may use sticker-like cards in bright pink `#FF8AF1`, yellow `#FFEC46` or blue `#9DC4FF`. Copy is warm and short.

```css
:root {
  --brand-green: #5AE17A;
  --brand-forest: #00341E;
  --brand-primary: #00BE82;
  --brand-primary-pressed: #047857;
  --brand-primary-subtle: #ECFDF5;
  --brand-marketing: #1CC26E;
  --brand-bright: #55E06F;
  --brand-pink: #FF8AF1;
  --brand-yellow: #FFEC46;
  --brand-blue: #9DC4FF;
  --brand-text: #000000;
  --brand-text-secondary: #404040;
  --brand-text-muted: #737373;
  --brand-bg: #FFFFFF;
  --brand-canvas: #F5F5F5;
  --brand-control: #EFEFEF;
  --brand-border: #E5E5E5;
  --brand-border-strong: #D4D4D4;
  --brand-danger: #DC2626;
  --brand-success: #059669;
  --brand-warning: #F59E0B;
  --brand-font: ballinger, "Work Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-font-display: gelica, "Fraunces", Georgia, serif;
  --brand-radius-sm: 5px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 0 4px rgba(0,0,0,0.2);
  --brand-shadow-raised: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Giftful.

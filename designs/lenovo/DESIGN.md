---
name: Lenovo
slug: lenovo
url: https://lenovo.com
category: Hardware
tagline: "Red box logo, near-black plum text and Montserrat headlines over bright product renders."
updated: 2026-11-16
logoBackground: "#E1251B"
theme: light
colors:
  - name: Lenovo Red
    hex: "#E1251B"
    role: Logo box, sale tags, brand moments
  - name: Plum Black
    hex: "#1E0013"
    role: Headlines and primary text (the brand "black")
  - name: Med Purple
    hex: "#7A126B"
    role: Primary CTA fill
  - name: Dark Purple
    hex: "#4D144A"
    role: Primary CTA hover
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Header Black
    hex: "#171717"
    role: Dark header bar, dark promo bands
  - name: Med Blue
    hex: "#294E95"
    role: Inline links
  - name: Pale Gray 4
    hex: "#F5F5F5"
    role: Section and product tile background
  - name: Pale Gray 2
    hex: "#E4E4E4"
    role: Secondary button fill, dividers
  - name: Pale Gray 1
    hex: "#CCCCCC"
    role: Input and card borders
  - name: Dark Gray 1
    hex: "#4E444E"
    role: Body copy, secondary text
  - name: Dark Gray 2
    hex: "#6D656F"
    role: Captions, legal text
  - name: Alert Red
    hex: "#B8322E"
    role: Error text and validation
  - name: Dark Green
    hex: "#285D50"
    role: In stock, success
  - name: Pale Purple
    hex: "#F1E1ED"
    role: Tinted promo backgrounds
  - name: Pale Red
    hex: "#FAECEB"
    role: Tinted sale backgrounds
fonts:
  display:
    family: "Montserrat"
    fallback: "Montserrat"
    weights: [600, 700]
  body:
    family: "Noto Sans"
    fallback: "Noto Sans"
    weights: [400, 600]
typeScale:
  - { role: Display 4XL, size: 56, weight: 600, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Display 3XL, size: 48, weight: 600, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Display 2XL, size: 40, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Heading, size: 28, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Subhead, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 14, weight: 600, lineHeight: 1.6, tracking: "0" }
  - { role: Legal, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 100 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 2px 4px rgba(30,0,19,0.5)" }
  - { name: Overlay, value: "0 10px 30px #101010" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#1E0013"
  muted: "#4E444E"
  border: "#CCCCCC"
  accent: "#7A126B"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Lenovo

## 1. Visual Theme & Atmosphere

Lenovo.com is a large retail storefront that sells laptops, desktops, tablets, monitors and accessories, with a corporate layer (AI, data center, sponsorships) on top. The look is clean and commercial: white pages, product renders shot on soft gradients, and a heavy rotation of promo banners and deal callouts.

What makes it recognisable:

- **The red box.** The logo is the word "Lenovo" knocked out of a solid red rectangle (`#E1251B`). It sits top left in the header and is the only place the full red shows on most pages.
- **Plum, not black.** The brand "black" is `#1E0013`, a near-black with a purple cast. Headlines, prices and body text use it, and the purple carries into the CTA color.
- **Purple buttons.** The primary CTA is a deep magenta-purple (`#7A126B`) with an 8px radius, hover `#4D144A`. This is the newer "new-style-1" button; older templates still show black or red buttons.
- **Montserrat headlines.** Hero titles are Montserrat 600 at 40-56px with slight negative tracking. Body copy is Noto Sans.
- **Retail density.** Under the hero the page is a stack of carousels, card grids, deal tiles with strike-through prices, and "Shop now" links. Sections alternate white and `#F5F5F5`.
- **Dark bands.** Gaming (Legion), events (Tech World) and sponsorship sections flip to `#171717` with white type and white buttons.

Mood words: practical, commercial, confident, global, product-first.

## 2. Color Palette & Roles

The site's own CSS variables give a clean set of named tones in four families (red, purple, blue, green) at pale, light, medium and dark steps. Values below are taken from those variables.

| Name | Hex | Role |
|---|---|---|
| Lenovo Red (`--lenovo-red`) | `#E1251B` | Logo, sale and deal accents |
| Plum Black (`--black`) | `#1E0013` | Headlines, prices, primary text |
| Med Purple | `#7A126B` | Primary CTA background |
| Dark Purple | `#4D144A` | CTA hover, pressed |
| Pale Purple | `#F1E1ED` | Promo tile background |
| Med Blue | `#294E95` | Links (`--link-color`) |
| Pale Blue | `#EAEEF5` | Info backgrounds |
| Header Black | `#171717` | Dark header variant, dark bands |
| Dark Gray 1 | `#4E444E` | Body copy, secondary text |
| Dark Gray 2 | `#6D656F` | Captions, small print |
| Pale Gray 1 | `#CCCCCC` | Borders, input outlines |
| Pale Gray 2 | `#E4E4E4` | Secondary button fill, hover on white buttons |
| Pale Gray 4 | `#F5F5F5` | Alternating section and tile background |
| White | `#FFFFFF` | Page background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#B8322E` (`--alert-red`) | Validation text, error icons |
| Success | `#285D50` text on `#E5F0ED` | In stock, applied coupon |
| Warning | `#C73D00` text on `#F8E9DE` | Low stock, shipping delays |
| Sale | `#E1251B` | "Save $X" labels, strike-through context |

### Dark mode

There is no global dark theme. Dark sections use `#171717` or `#000000` backgrounds, white text, `#ABA8B1` for muted text, and borders `#4A5863`. In those sections the primary button flips to white with black text (hover `#E4E4E4`).

## 3. Typography

**Families:** Montserrat for display and buttons, Noto Sans for body and UI, with Lato still referenced in older components. All three are free on Google Fonts, so you can use the real families.

```css
--font-display: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-body: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Scale (desktop, from the site's headline classes)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display 4XL (`display-headline-4xlg`) | 56px | 600 | 1.0 | -0.56px |
| Display 3XL | 48px | 600 | 1.1 | -0.48px |
| Display 2XL | 40px | 600 | 1.2 | -0.4px |
| Heading | 28px | 600 | 1.3 | 0 |
| Subhead / card title | 20px | 600 | 1.3 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Button | 14-16px | 600 | 1.6 | 0 |
| Small / legal | 12px | 400 | 1.4 | 0 |

Mobile: Display 4XL drops to 34px (line height 1.2), Display 3XL to 28px.

### Rules

- Headlines are Title Case or sentence case and short ("A New Vision", "Smarter AI for What's Next").
- Prices: plum black, Montserrat 600-700, with the original price struck through in `#6D656F` and a red "Save $X" chip.

## 4. Logo & Brand Mark

The logo is the lowercase-styled wordmark "Lenovo" (capital L) reversed out of a solid red rectangle. The rectangle is part of the logo, so it always appears as a box, never as free-floating red letters on white.

- **Primary:** white letters in a `#E1251B` box (as in `logo.svg`).
- **One color:** the box in black with white letters, or a white box with letters cut through on dark photos.
- **Clear space:** at least the height of the "L" around the box.
- **Minimum size:** about 60px wide on screen (approximate).

Misuse:

- Do not set "Lenovo" in Montserrat or any other font.
- Do not change the red to the purple CTA color.
- Do not remove the box or round its corners.

## 5. Components

### Buttons

The current CTA component is `.cta-button__btn` with style modifiers. Radius is 8px across sizes.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary (new-style-1) | `#7A126B` | `#FFFFFF` | 2px transparent | `#4D144A` |
| Primary on dark | `#FFFFFF` | `#000000` | 2px transparent | `#E4E4E4` |
| Secondary (new-style-2) | `#E4E4E4` | `#000000` | 1px `#FFFFFF` | `#FFFFFF` |
| Secondary on dark | `#535353` | `#FFFFFF` | none | `#ABA8B1` |
| Text link | none | `#294E95` | none | underline |

Sizes from the site variables:

| Size | Height | Padding | Font |
|---|---|---|---|
| Small | 32px | 8px 16px | 12px |
| Medium | 40px | 10px 16px | 14px |
| Large | 48px | 13px 24px | 16px |

States: focus draws a 2px solid red border (`border: 2px solid red`); disabled is `#E4E4E4` with `#535353` text (on dark: `#3B3B3B` with `#ABA8B1`).

```css
.btn-primary {
  font: 600 14px/1.6 "Montserrat", sans-serif;
  color: #fff;
  background: #7A126B;
  border: 2px solid transparent;
  border-radius: 8px;
  height: 40px;
  padding: 0 16px;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-primary:hover { background: #4D144A; }
.btn-primary:focus-visible { border-color: #E1251B; }
```

### Inputs

- Height 40-48px, 1px `#CCCCCC` border, radius 4-8px, white fill, 16px Noto Sans text.
- Search box in the header: pill or 8px radius, border `#E8E8E8` on white headers, `#171717` on dark headers, magnifier icon left.
- Focus: border `#294E95` or a 2px dark outline (approximate). Error: `#B8322E` border and helper text.

### Product cards (signature)

- White card on `#F5F5F5` sections, radius 12px, 16-24px padding, optional 1px `#E4E4E4` border.
- Top: product render on a light gradient, a small badge row ("New", "Best Seller", "Copilot+ PC").
- Middle: product name 16-20px/600, short spec line 14px `#4E444E`, star rating.
- Bottom: price block (current price large, original struck through, red "Save $X"), then a full-width "Shop now" or "Add to cart" button.

### Navigation

- Utility strip on top (Lenovo Pro, deals ticker, sign-in), then a main header about 64-72px tall, white or `#171717`.
- Red logo box left; category menus ("Laptops", "Desktops", "Workstations", "Tablets", "Monitors", "Accessories", "Deals", "Business"); search, account, cart icons right.
- Mega-menus open as full-width white panels with column lists and a promo tile.
- A thin flash banner above the header carries the current sale ("Black Friday Sale") on a dark or red strip.

### Tabs

`.len-tabs`: text tabs with a 2-4px underline indicator, active text plum black, inactive `#6D656F`. Dark-mode tabs use white text with a white indicator. Vertical tabs exist for spec pages.

### Badges and chips

Radius 4px, 12px/600 text, padding 2px 8px. Sale: white on `#E1251B`. New: plum on `#F1E1ED`. Info: `#294E95` on `#EAEEF5`.

### Carousels

Hero carousel spans full width with a progress bar of segments and round prev/next buttons (`motion-carousel-btn`), 40px circles, white or dark. Card carousels show 4 tiles on desktop with arrow buttons outside the track.

### Modals

White, radius 12px, max width about 640px, close icon top right, scrim `rgba(0,0,0,0.37)`. Overlay shadow `0 10px 30px #101010`.

## 6. Layout & Spacing

- **Base unit:** 4px, used in steps of 8 (8, 16, 24, 32, 48, 64).
- **Content width:** about 1280-1440px max, centered (approximate).
- **Gutters:** 16px mobile, 24px tablet, 32-40px desktop.
- **Breakpoints:** 768px and 1280px are the main switches in the CSS (`min-width:768px`, `min-width:1280px`).
- **Grids:** 4-up product grids on desktop, 2-up on tablet, 1-up or horizontal scroll on mobile.
- **Section spacing:** 48-64px desktop, 32px mobile. Retail sections sit close together; corporate pages have more air.

## 7. Depth, Elevation & Motion

Mostly flat. Product cards rely on background contrast rather than shadow.

| Token | Value | Use |
|---|---|---|
| Card | `0 2px 4px rgba(30,0,19,0.5)` | Floating cards, sticky bars |
| Overlay | `0 10px 30px #101010` | Modals, menus |

Motion: carousels slide at about 300-500ms ease; hover color changes are instant to 200ms (approximate). Hero videos autoplay muted with a pause control.

## 8. Iconography & Imagery

- **Icons:** simple outline glyphs (cart, user, search, compare) at 16-24px in plum black or white, drawn with about 1.5px strokes. Icon size variables are 14, 16 and 18px.
- **Product renders:** the core imagery. Devices are shown at three-quarter angles on soft gradients, often with the screen lit with colorful wallpapers.
- **Sponsorship imagery:** Formula 1 and FIFA content uses high-contrast sport photography on dark bands.
- Gaming (Legion) pages go darker with neon accents; keep that to Legion content.

## 9. Voice & Microcopy

Direct, retail-focused and benefit-led. Corporate copy leans on the "smarter technology for all" idea and "What's Next".

- Title Case or sentence case headlines, short.
- CTAs are two or three words: "Shop Now", "Learn More", "Shop Early Deals", "Join for free", "Sign In".
- Prices and savings are always explicit; do not invent numbers.

Sample strings:

- Hero: "A New Vision"
- Hero: "Smarter AI for What's Next"
- Promo: "Join Lenovo Pro for Business"
- Card: "Work and play smarter with AI PCs"

## 10. Do's and Don'ts

**Do**

- Use `#1E0013` for headings and prices instead of pure black.
- Use the purple `#7A126B` for primary actions, with 8px corners.
- Keep the red `#E1251B` for the logo and sale accents.
- Set headlines in Montserrat 600 and body in Noto Sans.
- Show the product clearly on a light gradient or white tile.
- Alternate white and `#F5F5F5` sections for rhythm.

**Don't**

- Don't paint large areas red; red is a logo and deal color.
- Don't use pill buttons for primary CTAs on the store.
- Don't stack heavy drop shadows on product cards.
- Don't mix sub-brand logos into the Lenovo box.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Lenovo.com. White page, alternating `#F5F5F5` sections. Headlines in Montserrat 600 (40-56px, tracking about -0.01em) colored plum black `#1E0013`; body in Noto Sans 16px, secondary text `#4E444E`. Logo is white "Lenovo" in a solid red `#E1251B` box, top left in a 64-72px header with category menus, search and cart. Primary buttons are deep purple `#7A126B` with white Montserrat 600 text, 8px radius, 40px tall, hover `#4D144A`; on dark bands use white buttons with black text. Product cards are white with 12px radius on grey sections: render on top, name 18px/600, spec line, price with struck original and red "Save" chip, full-width "Shop Now" button. Links `#294E95`. Mostly flat, with a soft shadow only on floating elements. Copy is short and retail-focused.

```css
:root {
  --brand-red: #E1251B;
  --brand-black: #1E0013;
  --brand-purple: #7A126B;
  --brand-purple-dark: #4D144A;
  --brand-purple-pale: #F1E1ED;
  --brand-link: #294E95;
  --brand-header-dark: #171717;
  --brand-text: #1E0013;
  --brand-text-secondary: #4E444E;
  --brand-text-muted: #6D656F;
  --brand-bg: #FFFFFF;
  --brand-surface: #F5F5F5;
  --brand-fill-secondary: #E4E4E4;
  --brand-border: #CCCCCC;
  --brand-error: #B8322E;
  --brand-success: #285D50;
  --brand-font-display: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  --brand-font-body: "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-btn-h-md: 40px;
  --brand-shadow-card: 0 2px 4px rgba(30,0,19,0.5);
  --brand-shadow-overlay: 0 10px 30px #101010;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Lenovo.

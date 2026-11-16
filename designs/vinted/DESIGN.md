---
name: Vinted
slug: vinted
url: https://vinted.com
category: Commerce
tagline: "Clean white marketplace grid of second-hand finds, one deep teal and a hand-lettered logo."
updated: 2026-11-16
appStoreId: 632064380
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Vinted Teal
    hex: "#007782"
    role: Primary actions, logo, links, buyer-protection price
  - name: Teal Dark
    hex: "#004654"
    role: Pressed states, headline text in promo banners, filled inverse buttons
  - name: Teal Light
    hex: "#C9F0EE"
    role: Tinted badges and selected chips
  - name: Teal Extra Light
    hex: "#E6FAFA"
    role: Subtle teal backgrounds and highlights
  - name: Ink
    hex: "#15191A"
    role: Primary text (greyscale level 1)
  - name: Slate
    hex: "#5A6566"
    role: Secondary text, muted labels (greyscale level 2)
  - name: White
    hex: "#FFFFFF"
    role: Page and card background (greyscale level 6)
  - name: Mist
    hex: "#EDF2F2"
    role: Section backgrounds, input fills (greyscale level 5)
  - name: Line
    hex: "#E1E6E6"
    role: Dividers and borders (greyscale level 4)
  - name: Placeholder
    hex: "#B6BEBF"
    role: Placeholders and disabled icons (greyscale level 3)
  - name: Success
    hex: "#28865A"
    role: Success badges and messages
  - name: Warning
    hex: "#D04555"
    role: Errors, warnings, destructive actions
  - name: Expose
    hex: "#F9BB42"
    role: Highlight badges such as promoted or bumped items
  - name: Dark Surface
    hex: "#171C1C"
    role: Dark theme background
  - name: Teal Dark Mode
    hex: "#449DA9"
    role: Primary colour in dark theme
fonts:
  display:
    family: "VC Honey"
    fallback: "Fraunces"
    weights: [500, 600]
  body:
    family: "V-Inter"
    fallback: "Inter"
    weights: [375, 400, 500, 580]
typeScale:
  - { role: Promo Title, size: 48, weight: 500, lineHeight: 1.08, tracking: "0" }
  - { role: Banner Title, size: 40, weight: 600, lineHeight: 1.15, tracking: "0" }
  - { role: Heading XL, size: 24, weight: 500, lineHeight: 1.33, tracking: "0" }
  - { role: Heading, size: 22, weight: 580, lineHeight: 1.27, tracking: "0" }
  - { role: Title, size: 16, weight: 500, lineHeight: 1.38, tracking: "0" }
  - { role: Body, size: 16, weight: 375, lineHeight: 1.38, tracking: "0" }
  - { role: Subtitle, size: 14, weight: 375, lineHeight: 1.29, tracking: "0" }
  - { role: Caption, size: 12, weight: 375, lineHeight: 1.33, tracking: "0" }
radii: { sm: 3, md: 6, lg: 12, pill: 3996 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Low, value: "0 0 2px rgba(21,25,26,0.24)" }
  - { name: Medium, value: "0 4px 12px rgba(21,25,26,0.12)" }
  - { name: High, value: "0 4px 16px rgba(21,25,26,0.24)" }
preview:
  bg: "#FFFFFF"
  surface: "#EDF2F2"
  text: "#15191A"
  muted: "#5A6566"
  border: "#E1E6E6"
  accent: "#007782"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Vinted

## 1. Visual Theme & Atmosphere

Vinted is a marketplace for second-hand clothes and other pre-loved items. Its web and app UI is simple and practical: a white page, a header with the teal hand-lettered "Vinted" logo, a big search bar, and a long grid of user photos. Each item tile shows the photo, brand, size, condition and two prices: the item price and the "incl." price with Buyer Protection, the latter in teal.

The design system (internally "web_ui") is restrained. One deep teal, `#007782`, does almost all the work: the "Sell now" button, links, active tabs and the logo. Everything else is a cool, slightly green-tinted greyscale (`#15191A` text, `#5A6566` secondary, `#EDF2F2` backgrounds). The only expressive type is the logo's script and a serif display face (VC Honey) used for promo banners like "Ready to declutter your closet?".

What makes it recognisable:

- **Teal, not blue.** `#007782` is a dark, petrol teal; the older brand teal was lighter (`#09B1BA`, approximate).
- **Photo grid of real wardrobes.** Square-ish or 4:5 user photos, often on beds and floors, with no heavy frames.
- **Small 6px corners.** Buttons, cards and inputs share a 6px radius; badges are full pills.
- **Two prices per item.** "$12.00" in grey and "$13.30 incl." in teal (format read on vinted.com on 2026-11-16).
- **Light text weights.** The custom Inter build uses a 375 weight for body text, so copy looks lighter than usual.

Mood words: practical, friendly, tidy, thrifty, trustworthy.

## 2. Color Palette & Roles

Values come from Vinted's production CSS tokens (`--primary-*`, `--greyscale-level-*`, `--success-*`, `--warning-*`, `--expose-*`), read on 2026-11-16. Tokens are stored as RGB triplets and used as `rgba(var(--primary-default), 1)`.

| Token | Light | Dark | Role |
|---|---|---|---|
| primary-default | `#007782` | `#449DA9` | Primary buttons, links, logo, active tab |
| primary-dark | `#004654` | `#C9F0EE` | Pressed, inverse filled buttons, promo headings |
| primary-light | `#C9F0EE` | `#004654` | Tinted badges |
| primary-extra-light | `#E6FAFA` | `#112E33` | Light teal backgrounds |
| greyscale-level-1 | `#15191A` | `#F0F2F2` | Primary text, amplified badges |
| greyscale-level-2 | `#5A6566` | `#A8B2B3` | Secondary text, muted |
| greyscale-level-3 | `#B6BEBF` | `#667273` | Placeholder, disabled |
| greyscale-level-4 | `#E1E6E6` | `#2A3233` | Lines, dividers |
| greyscale-level-5 | `#EDF2F2` | `#0F1212` | Section and input backgrounds |
| greyscale-level-6 | `#FFFFFF` | `#171C1C` | Page and card background |
| success-default | `#28865A` | `#33AC78` | Success |
| warning-default | `#D04555` | `#D04555` | Errors, warnings |
| expose-default | `#F9BB42` | `#F9BB42` | Promoted / highlight |

### Semantic pairs (badge light / text dark)

| State | Fill | Text |
|---|---|---|
| Primary | `#C9F0EE` | `#004654` |
| Success | `#C0EED0` | `#175038` |
| Warning | `#FDDCDC` | `#5C303B` |
| Expose | `#FFEECB` | `#6E5136` |
| Muted | `#EDF2F2` | `#5A6566` |

Solid badges use the default colour as fill with white text (Expose uses Ink text).

### Dark mode

Vinted ships a dark theme (`[data-theme=dark]`). The greyscale inverts (page `#171C1C`, text `#F0F2F2`) and the teal lifts to `#449DA9` so it keeps contrast.

## 3. Typography

**Families:**

- **V-Inter** (loaded as `V_INTER`): a custom Inter build with unusual weights 375 (regular), 500 (medium) and 580 (semibold). Use **Inter** from Google Fonts; set 400 where 375 is unavailable or use Inter's variable axis at 375.
- **VC Honey SemiBold Deck**: a soft, high-contrast serif used for promotional titles, help-centre headers and error pages. Commercial; use **Fraunces** (600, low "SOFT" axis) as a substitute.

```css
font-family: V-Inter, V_INTER, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-family: VCHoneySemiBoldDeck, "Helvetica Neue", Arial, sans-serif;   /* promo titles */
```

### Scale (from production component CSS)

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Promo title | 48px VC Honey | 500 | 52px | Large banners, in Teal Dark |
| Banner title | 40px VC Honey | 600 | 46px | Seller promotion ("Ready to declutter your closet?") |
| Heading XL | 24px | 500 | 32px | Page titles |
| Heading | 22px | 580 | 28px | Section headings |
| Title | 16px | 500 | 22px | Item names, cell titles, button labels |
| Body | 16px | 375 | 22px | Body copy |
| Subtitle | 14px | 375 | 18px | Item meta, secondary text |
| Caption | 12px | 375 | 16px | Fine print, small buttons |

### Rules

- Sentence case for buttons and headings ("Sell now", "Learn how it works").
- Prices use the currency symbol and two decimals; the protected price is followed by "incl." and a small shield icon.
- Item meta joins with a middle dot: "S / US 4-6 · Very good".
- Bold means 500, not 700.

## 4. Logo & Brand Mark

The logo is the word "Vinted" in a custom, slightly slanted brush script with a tall swashed "V". It is set in Vinted Teal `#007782` on white, or white on teal. The app icon uses the script "V" alone in white on a teal square.

- **Colour versions:** teal on white (primary), white on teal, white on photography with enough contrast.
- **Clear space:** at least the height of the lowercase "i" on all sides (approximate).
- **Minimum size:** about 64px wide on screen (approximate).

Misuse:

- Don't set "Vinted" in a font as a substitute for the logo.
- Don't recolour the logo with the older light teal or any other colour.
- Don't add outlines, shadows or a background box.

## 5. Components

### Buttons

Buttons share one structure: 6px radius (`--v-comp-button-parameters-border-radius`), label 500 weight, an optional icon with 8px gap.

| Size | Height | Padding | Font |
|---|---|---|---|
| Default | 44px | 0 16px | 16px / 22px, 500 |
| Medium | 36px | 0 16px | 14px / 18px |
| Small | 32px | 0 12px | 12px / 16px |

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary filled | `#007782` | `#FFFFFF` | none |
| Primary outlined | transparent | `#007782` | 1px `#007782` |
| Inverse filled (on photos) | `#FFFFFF` | `#007782` | none |
| Muted / tertiary | transparent | `#5A6566` | none |
| Warning | `#D04555` | `#FFFFFF` | none |

States: hover adds a slight dark overlay (about 8%); pressed uses `#004654`; disabled is 48% opacity with pointer events off; loading shows a centred spinner and hides the label.

```css
.v-btn {
  height: 44px;
  padding: 0 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  font: 500 16px/22px V-Inter, Inter, "Helvetica Neue", Arial, sans-serif;
  background: #007782;
  color: #FFFFFF;
}
.v-btn--outlined { background: transparent; color: #007782; border-color: currentColor; }
.v-btn:disabled { opacity: .48; pointer-events: none; }
```

### Header

White, 1px `#E1E6E6` bottom border. Left: logo (about 83x48px viewBox, shown 30-36px tall). Centre: search field with a category dropdown ("Catalog") on the left half, 36-40px tall, `#EDF2F2` fill, 6px radius. Right: "Sign up | Log in" outlined teal button and a filled "Sell now" button. Under the header: a category nav row (Women, Men, Designer, Kids, Home, Electronics, Books & Media, Hobbies & collectibles, Sports) in 14px 375 `#5A6566` with hover menus.

### Hero banner

Full-width lifestyle photo with a white card on the left: VC Honey headline "Ready to declutter your closet?", a primary "Sell now" button and a "Learn how it works" text link. On mobile the card stacks below the photo.

### Item card (signature)

- Photo in a 4:5 or square box, 6px radius (some layouts 0), `#EDF2F2` placeholder.
- Heart icon with favourite count bottom-right over the photo (white pill with shadow).
- Below: brand (14px 375 `#5A6566`), size and condition ("S / US 4-6 · Very good"), item price (14px `#5A6566`), protected price with "incl." in teal 500 with a shield icon.
- Optional badge on top-left: "Bumped" or "Pro" (pill, muted or expose colours).
- Grid: 2 columns on phones, 4-5 on desktop, 16-24px gaps.

### Cards and cells

- Card: `#FFFFFF`, 1px `rgba(21,25,26,0.12)` border, 6px radius. "Lifted" card: no border, `0 4px 12px rgba(21,25,26,0.12)`.
- Cell (list row): white, full width, 16px padding, title 16px 500, subtitle 14px 375 secondary, optional prefix icon or avatar and suffix chevron.

### Inputs

Text fields have a label above, 1px bottom border or full border depending on variant, `#15191A` text, `#B6BEBF` placeholder, focus border in teal (2px), error in `#D04555` with helper text. Radius 6px for boxed inputs.

### Badges

Pill (`border-radius: 3996px`), padding 0 8px, 12px text, 1px border. Default: white fill, `rgba(21,25,26,0.12)` border, slate text. Variants listed in section 2.

### Tabs and chips

Tabs: 14-16px 500, active in Ink with a 2px teal underline. Filter chips (Size, Brand, Condition, Colour, Price): 36px pills with 1px `#E1E6E6` border, selected chip filled `#C9F0EE` with `#004654` text.

## 6. Layout & Spacing

- **Max width:** about 1280px content area on desktop, centred, 20-24px side padding.
- **Grid:** item grid of 2 (mobile) to 5 (wide desktop) columns.
- **Spacing:** 4px base; most components use 8, 12, 16 and 24.
- **Breakpoints (approximate):** 768px (tablet), 992px, 1200px.
- **Density:** high on catalog pages, relaxed on landing and help pages.

## 7. Depth, Elevation & Motion

Production elevation tokens, all tinted with Ink `#15191A`:

- Low: `0 0 2px rgba(21,25,26,0.24)` (chips over photos)
- Medium: `0 4px 12px rgba(21,25,26,0.12)` (lifted cards, dropdowns)
- High: `0 4px 16px rgba(21,25,26,0.24)` (modals, popovers)

Motion is minimal: short fades (150-200ms), skeleton shimmer while the grid loads, a small bounce on the favourite heart. Modal backdrop `rgba(0,0,0,0.64)`.

## 8. Iconography & Imagery

- Icons are simple outline glyphs, 16 or 24px, 1.5px stroke, in `#5A6566` or Ink; filled teal for active states. The Buyer Protection shield is a recurring small icon.
- Imagery is real member photos: clothes on hangers, flat lays, mirror selfies. Brand marketing uses warm, natural-light lifestyle photography of people sorting wardrobes.
- Avatars are circles; item photos are never heavily stylised or framed.

## 9. Voice & Microcopy

Friendly, plain, a little cheeky. Sentence case. Second person.

- Hero: "Ready to declutter your closet?" with "Sell now" and "Learn how it works"
- Header: "Sign up | Log in", "Sell now", "Search for items"
- Item meta: "Very good", "New with tags", "Bumped", "incl."
- Sections: "Most popular categories", "Popular items", "Shop by brand"
- Footer: "How it works", "Trust and Safety", "Help Center"

## 10. Do's and Don'ts

**Do**

- Use `#007782` for the main action and links, nothing else saturated.
- Keep the page white with cool grey sections `#EDF2F2`.
- Use 6px corners on buttons, cards and inputs, pills for badges.
- Show both prices on item cards with the protected one in teal.
- Use Inter at a light 375-400 for body and 500 for emphasis.

**Don't**

- Don't use bright retail reds, yellows or sale banners.
- Don't use bold 700 type in UI.
- Don't use heavy, neutral black shadows; tint with Ink at low opacity.
- Don't crop item photos into circles or odd shapes.
- Don't set the logo in a typeface.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Vinted. White page, cool grey sections `#EDF2F2`, text `#15191A`, secondary `#5A6566`, lines `#E1E6E6`, primary teal `#007782` (pressed `#004654`, tint `#C9F0EE`). Font: Inter, body weight 375-400, titles and buttons 500, headings 580; promo headlines in a soft serif (Fraunces 600) coloured `#004654`. Header: teal script logo left, a 40px search field with a "Catalog" dropdown on `#EDF2F2` with 6px radius, an outlined teal "Sign up | Log in" button and a filled teal "Sell now" button. Below, a row of category links. Hero: lifestyle photo with a white card saying "Ready to declutter your closet?" plus "Sell now". Then an item grid (2-5 columns): 4:5 photos with 6px radius, a heart-and-count pill bottom right, brand, "S / US 4-6 · Very good", the price in grey and the "incl." Buyer Protection price in teal with a small shield icon. Buttons 44/36/32px tall with 6px radius and weight 500. Badges are pills. Shadows tinted `rgba(21,25,26,0.12)`.

```css
:root {
  --brand-teal: #007782;
  --brand-teal-dark: #004654;
  --brand-teal-light: #C9F0EE;
  --brand-teal-extra-light: #E6FAFA;
  --brand-ink: #15191A;
  --brand-slate: #5A6566;
  --brand-placeholder: #B6BEBF;
  --brand-line: #E1E6E6;
  --brand-mist: #EDF2F2;
  --brand-bg: #FFFFFF;
  --brand-success: #28865A;
  --brand-warning: #D04555;
  --brand-expose: #F9BB42;
  --brand-dark-bg: #171C1C;
  --brand-dark-teal: #449DA9;
  --brand-font: V-Inter, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-display: VCHoneySemiBoldDeck, Fraunces, Georgia, serif;
  --brand-radius-sm: 3px;
  --brand-radius: 6px;
  --brand-radius-md: 12px;
  --brand-radius-pill: 3996px;
  --brand-shadow-low: 0 0 2px rgba(21,25,26,0.24);
  --brand-shadow-medium: 0 4px 12px rgba(21,25,26,0.12);
  --brand-shadow-high: 0 4px 16px rgba(21,25,26,0.24);
}
```

---

Values are observed from the public product and published brand material; this file is an unofficial reference and is not affiliated with or endorsed by Vinted.

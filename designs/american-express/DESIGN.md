---
name: American Express
shortName: Amex
slug: american-express
url: https://americanexpress.com
category: Finance
tagline: "Bright blue box logo, deep blue panels, BentonSans type and rounded member cards."
updated: 2026-11-16
appStoreId: 362348516
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Bright Blue
    hex: "#006FCF"
    role: Blue box logo, primary buttons, links
  - name: Deep Blue
    hex: "#00175A"
    role: Dark panels, headers, premium sections
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Text
    hex: "#3D3D3D"
    role: Body text
  - name: Bright Blue Hover
    hex: "#0062B6"
    role: Primary button hover
  - name: Bright Blue Active
    hex: "#005AA8"
    role: Pressed state
  - name: Light Blue
    hex: "#EDF7FF"
    role: Info panels, selected rows
  - name: Gray 01
    hex: "#F7F8F9"
    role: Page section background
  - name: Border
    hex: "#E0E0E0"
    role: Card and table borders
  - name: Gray 04
    hex: "#8C8C8C"
    role: Disabled text, placeholder
  - name: Neutral
    hex: "#737373"
    role: Secondary text
  - name: Success
    hex: "#00804A"
    role: Success text and icons
  - name: Warning
    hex: "#B41601"
    role: Errors and warnings
  - name: Attention
    hex: "#FDB92D"
    role: Attention highlights
fonts:
  display:
    family: "BentonSans"
    fallback: "Libre Franklin"
    weights: [400, 500, 700]
  body:
    family: "BentonSans"
    fallback: "Libre Franklin"
    weights: [400, 500, 700]
typeScale:
  - { role: Display L, size: 56, weight: 400, lineHeight: 1.14, tracking: "0" }
  - { role: Heading XL, size: 36, weight: 400, lineHeight: 1.22, tracking: "0" }
  - { role: Heading L, size: 32, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Heading M, size: 24, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Heading S, size: 20, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body S, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Label, size: 12, weight: 500, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 100 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
shadows:
  - { name: Card, value: "0 2px 5px 2px rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.06)" }
  - { name: Raised, value: "0 5px 10px rgba(0,0,0,0.1)" }
  - { name: Overlay, value: "0 13px 26px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F8F9"
  text: "#3D3D3D"
  muted: "#737373"
  border: "#E0E0E0"
  accent: "#006FCF"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# American Express

## 1. Visual Theme & Atmosphere

americanexpress.com runs on the American Express Design Language System (DLS), loaded on the live site as `dls-max.min.css` version 7.22.0. The result is clean and service-like: white pages, grey-brown body text, one confident Bright Blue for actions and the logo, and Deep Blue for premium or dark moments. Card art does much of the visual work; the metal Platinum and Gold cards appear in heroes and product grids.

What makes it recognisable:

- **The Blue Box.** The square logo with "AMERICAN EXPRESS" stacked in white, cut into Bright Blue `#006FCF`. It sits top left on every page and is the app icon.
- **Two blues.** Bright Blue (`#006FCF`) for actions and Deep Blue (`#00175A`) for dark panels, membership and premium sections.
- **BentonSans.** A neutral grotesk, mostly at regular (400) weight even for large headings, with bold used for emphasis. A slab serif (Guardian) appears for editorial headings.
- **Rounded but not soft.** Buttons have 8px corners and 48px height; content cards use 16px corners and a faint two-layer shadow.
- **Membership tone.** Copy talks about "Card Members", "Membership Rewards", "Amex Offers" and "Amex Experiences", with "Terms apply." under offers.

Mood words: premium, service-minded, trustworthy, clear, polished.

## 2. Color Palette & Roles

Values are read from the DLS CSS on the live site. Classes follow the pattern `.dls-bright-blue`, `.dls-deep-blue-60`, `.dls-color-success`.

| Name | Hex | Role |
|---|---|---|
| Bright Blue | `#006FCF` | Logo, primary button, links, focus |
| Bright Blue hover | `#0065BD` / `#0062B6` | Hover on blue text and buttons |
| Bright Blue active | `#005AA8` | Pressed |
| Bright Blue 60 | `#66A9E2` | Charts, secondary accents |
| Bright Blue 40 | `#99C5EC` | Borders on blue tints |
| Bright Blue 20 | `#CCE2F5` | Light tint fills |
| Light Blue | `#EDF7FF` | Info backgrounds, selected rows |
| Deep Blue | `#00175A` | Dark panels, navigation on premium pages |
| Deep Blue 60 | `#66749C` | Muted text on light blue |
| Deep Blue 40 | `#99A2BD` | Dividers on deep blue |
| Deep Blue 20 | `#CCD1DE` | Tint for premium modules |
| Text | `#3D3D3D` | Body text (the DLS default) |
| Neutral | `#737373` | Secondary text |
| Gray 04 | `#8C8C8C` | Placeholder, disabled |
| Gray 03 | `#BDBDBD` | Disabled borders |
| Border | `#E0E0E0` | Card, input and table borders |
| Gray 01 | `#F7F8F9` | Section background |
| White | `#FFFFFF` | Page, cards |

### Semantic colors

| Class | Hex | Use |
|---|---|---|
| dls-color-success | `#189662` (graphics), `#00804A` (text) | Paid, approved, positive |
| dls-color-warning | `#B41601` | Errors, past due, declines |
| dls-color-moderate | `#E3660D` | Caution |
| dls-color-attention | `#FDB92D` | Attention badges |
| dls-color-neutral | `#737373` | Neutral status |

### Dark sections

Deep Blue `#00175A` (or the darker `#0B2247` / `#0A1E3F` steps) with white text, Bright Blue 60 `#66A9E2` links and a white-outlined secondary button. There is no global dark mode on the marketing site.

## 3. Typography

**Families:** BentonSans (Font Bureau) for almost everything, loaded in 12 `@font-face` rules. Guardian (a slab serif, Guardian Egyptian family) for `heading-serif-*` styles. Card-art fonts (`amex-card-number`, `amex-card-name`) render the embossed card number and name.

**Licensing:** both are commercial. Use **Libre Franklin** for BentonSans and **Roboto Slab** for Guardian. The site's own fallback stack is the system UI stack.

```css
font-family: BentonSans, "Helvetica Neue", Helvetica, sans-serif;
```

### Scale (from DLS classes)

| Class | Size | Weight | Line height |
|---|---|---|---|
| display-sans-large | 56px | 400 | 64px |
| heading-sans-xlarge | 36px | 400 / 700 | 44px |
| heading-serif-xlarge | 36px Guardian | 400 / 700 | 44px |
| heading-sans-large | 32px | 400 / 700 | 40px |
| heading-sans-medium | 24px | 400 / 700 | 32px |
| heading-sans-small | 20px | 400 / 500 / 700 | 28px |
| heading-sans-xsmall | 16px | 400 / 700 | 24px |
| body | 16px | 400 | 24px |
| body small | 14px | 400 | 20px |
| label | 12px | 500 | 16px |

### Rules

- Headings are usually weight 400; use 700 for emphasis inside a heading or for short labels.
- Title Case for nav and product names ("Membership Rewards", "Places to Use Your Card"), sentence case for body.
- Registered and trademark marks stay in copy: "Amex Offers", "MyCredit Guide", "CreditSecure®".
- Numbers in balances and rewards use tabular figures.

## 4. Logo & Brand Mark

The **Blue Box** is the primary logo: a square in Bright Blue with "AMERICAN" over "EXPRESS" in white capitals, each word reversed out of a thin blue band. The live site loads `dls-logo-bluebox-solid.svg` (45 x 45) in the header, plus `dls-logo-stack.svg` and `dls-logo-line.svg` wordmark versions.

- **Primary:** Blue Box, full colour.
- **Wordmark only:** "AMERICAN EXPRESS" stacked or on one line, Bright Blue or white.
- **Clear space:** at least one quarter of the box width on every side (approximate).
- **Minimum size:** about 30px square on screen (approximate).
- **App icon:** the Amex app uses the Blue Box filling the tile.

Misuse:

- Do not change the blue or use a gradient.
- Do not crop the box or round its corners in the logo itself.
- Do not set "AMERICAN EXPRESS" in another font to fake the logo.
- Do not place the box on Bright Blue backgrounds where its edge disappears; use a white wordmark there.

## 5. Components

### Buttons

From `.btn` in DLS 7.22: 48px minimum height, 8px radius, 1px border, 16px/24px weight 500 text, padding 12px 24px (less the border), max width 280px, 8px gap for icons.

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `#006FCF` | `#FFFFFF` | `#006FCF` |
| Primary hover | `#0062B6` | `#FFFFFF` | `#0062B6` |
| Secondary | `#FFFFFF` | `#006FCF` | `#006FCF` |
| Tertiary / link | transparent | `#006FCF` | none |
| On Deep Blue | `#FFFFFF` | `#00175A` | `#FFFFFF` |
| Disabled | `#F7F8F9` | `#8C8C8C` | `#BDBDBD` |

- Small buttons drop to 40px with 14px text.
- Focus: 2px outline in Bright Blue with 2px offset.
- Easing `cubic-bezier(0.2, 0, 0, 1)`.

```css
.btn {
  --border-width: 1px;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 48px; max-width: 280px;
  padding: calc(12px - var(--border-width)) calc(24px - var(--border-width));
  font: 500 16px/24px var(--brand-font);
  color: #fff; background: #006FCF;
  border: var(--border-width) solid #006FCF; border-radius: 8px;
  transition: background-color .2s cubic-bezier(.2,0,0,1);
}
.btn:hover { background: #0062B6; border-color: #0062B6; }
```

### Header

- White bar with the Blue Box at left (about 45px), then "My Account", "Cards", "Banking", "Travel", "Rewards & Benefits", "Business".
- Right side: search button, "Customer Service" and a blue "Log In" button.
- Mega menus are white panels with columns of links and a promo card.
- Mobile: hamburger "Menu" with the box centred.

### Cards (content)

From `.card`: white, 16px radius, 1px transparent border, shadow `0 2px 5px 2px rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.06)`. Content padding 24px. A "Discover More" grid pairs an image, a short headline, one line of copy, "Terms apply." and a link ("Explore Amex Offers").

### Product card art tiles

Card products appear as card images (about 1.586:1 ratio, 12px radius on the art) with name, rewards summary, annual fee line and "Apply Now" / "Learn More". Rates and fees are pulled from the live offer system; do not hard-code them.

### Inputs

- 48px tall, 4-8px radius, 1px `#BDBDBD` border, 16px text `#3D3D3D`, floating or top label.
- Focus: border `#006FCF` with a 1px inner blue ring.
- Error: border and helper text `#B41601`, alert icon.

### Tabs and segmented controls

Underline tabs with 16px/500 labels, inactive `#737373`, active `#006FCF` with a 2-4px bar. Segmented pills use 100px radius.

### Badges and tags

Pill tags (100px radius) 12px/500: blue on `#EDF7FF`, green on `#F2FCF8`, red on a pale red, neutral on `#F7F8F9`.

### Account summary (logged-in)

Balance and payment cards in white with 16px radius, large numerals in BentonSans 400, a blue "Make a Payment" button, and transaction lists with merchant, date and amount right-aligned.

## 6. Layout & Spacing

- **Grid:** 12 columns (DLS `.col-*` classes at 8.33% steps), container up to about 1240px (approximate).
- **Breakpoints:** 320, 568, 800, 1024, 1280, 1440px (from the DLS media queries).
- **Spacing:** 4px base; common steps 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- **Gutters:** 16px mobile, 24px desktop (approximate).
- **Section spacing:** 48-64px; card grids with 24px gaps.

## 7. Depth, Elevation & Motion

| Level | Value |
|---|---|
| 1 | `0 1px 1px rgba(0,0,0,0.1)` |
| 2 | `0 5px 10px rgba(0,0,0,0.1)` |
| 3 | `0 13px 26px rgba(0,0,0,0.1)` |
| Card | `0 2px 5px 2px rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.06)` |
| Modal | `0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2)` |

- Standard easing `cubic-bezier(0.2, 0, 0, 1)` (most used), plus `cubic-bezier(0.4, 0, 0.2, 1)` and `cubic-bezier(0.65, 0, 0.45, 1)` for larger moves.
- Durations 150-300ms. Carousels slide; menus fade and drop 8px.

## 8. Iconography & Imagery

- **Icons:** DLS icon font (`dls-icon-*`): simple line icons at 16, 24 and 32px in Bright Blue or text grey. Larger spot icons are two-tone blue.
- **Card art:** the hero material. Platinum (metal grey), Gold (warm gold) and Green cards appear at a slight angle with soft reflections.
- **Photography:** travel lounges, dining, live events, small businesses; warm, natural light.
- **Illustration:** flat, rounded blue illustrations for help and education content.

## 9. Voice & Microcopy

Warm, service-oriented and precise about terms. Addresses the reader as a member.

- Title Case for headlines and CTAs ("Explore Amex Offers", "Download Now").
- "Terms apply." follows nearly every offer or benefit line.
- CTAs: "Log In", "Apply Now", "Learn More", "Explore Now", "Enroll Now", "Download Now".

Sample strings seen on the live site today:

- "Find a perfect Gift Card. Terms apply."
- "Eligible Members Unlock Extra Rewards*"
- "Enjoy more at the events you love"
- "Check out businesses that accept Amex"
- "Tap into tools that help you get more from Membership. Terms apply."

## 10. Do's and Don'ts

**Do**

- Use Bright Blue `#006FCF` for actions and links, Deep Blue `#00175A` for dark panels.
- Keep body text `#3D3D3D`, not black.
- Use 48px buttons with 8px radius and 16px cards.
- Put the Blue Box top left at a consistent size.
- Show real card art for product pages.
- Add "Terms apply." to offers and benefits.

**Don't**

- Don't make headings heavy by default; BentonSans 400 is the norm.
- Don't use pill-shaped primary buttons.
- Don't mix in other card-network colours.
- Don't use dense drop shadows; keep elevation faint.
- Don't hard-code fees or APRs into the design.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of americanexpress.com. White page, body text `#3D3D3D`, secondary text `#737373`, borders `#E0E0E0`, section background `#F7F8F9`. Font BentonSans with "Libre Franklin" fallback; headings at weight 400 (36px/44px, 32px/40px, 24px/32px), body 16px/24px. Primary buttons are Bright Blue `#006FCF` with white text, 48px tall, 8px radius, padding 12px 24px, weight 500, hover `#0062B6`; secondary buttons are white with a 1px blue border and blue text. Cards are white with 16px radius and a faint shadow `0 2px 5px 2px rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.06)`. Use Deep Blue `#00175A` for dark premium sections with white text. Put a square blue logo box top left. Add "Terms apply." under offers. Easing `cubic-bezier(0.2,0,0,1)`.

```css
:root {
  --brand-blue: #006FCF;
  --brand-blue-hover: #0062B6;
  --brand-blue-active: #005AA8;
  --brand-blue-60: #66A9E2;
  --brand-blue-20: #CCE2F5;
  --brand-blue-light: #EDF7FF;
  --brand-deep-blue: #00175A;
  --brand-deep-blue-60: #66749C;
  --brand-text: #3D3D3D;
  --brand-text-muted: #737373;
  --brand-disabled: #8C8C8C;
  --brand-border-strong: #BDBDBD;
  --brand-border: #E0E0E0;
  --brand-surface: #F7F8F9;
  --brand-bg: #FFFFFF;
  --brand-success: #00804A;
  --brand-warning: #B41601;
  --brand-moderate: #E3660D;
  --brand-attention: #FDB92D;
  --brand-font: BentonSans, "Libre Franklin", "Helvetica Neue", Helvetica, sans-serif;
  --brand-font-serif: Guardian, "Roboto Slab", Georgia, serif;
  --brand-radius-sm: 4px;
  --brand-radius-btn: 8px;
  --brand-radius-card: 16px;
  --brand-radius-pill: 100px;
  --brand-shadow-card: 0 2px 5px 2px rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.06);
  --brand-shadow-2: 0 5px 10px rgba(0,0,0,0.1);
  --brand-shadow-3: 0 13px 26px rgba(0,0,0,0.1);
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by American Express.

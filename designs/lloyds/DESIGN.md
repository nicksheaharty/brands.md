---
name: Lloyds Bank
slug: lloyds
url: https://lloydsbank.com
category: Banking
tagline: "Black horse on white, deep and bright greens, bold GT Ultra headlines, calm UK banking."
updated: 2026-11-16
appStoreId: 469964520
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Lloyds Green
    hex: "#006A4D"
    role: Core brand green, logo highlight, links, primary actions
  - name: Bright Green
    hex: "#11B67A"
    role: Accent green for highlights, app icon and positive moments
  - name: Black
    hex: "#000000"
    role: Black horse, wordmark, headlines
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Charcoal
    hex: "#333333"
    role: Body text
  - name: Dark Grey
    hex: "#505050"
    role: Secondary text, captions
  - name: Deep Green
    hex: "#024731"
    role: Hover and pressed state for green actions, dark panels (approximate)
  - name: Mint Tint
    hex: "#E6F4EE"
    role: Soft green panel and selected-row background (approximate)
  - name: Light Grey
    hex: "#F1F1F1"
    role: Section background, disabled fill
  - name: Border Grey
    hex: "#C9C9C9"
    role: Input borders, dividers
  - name: Error Red
    hex: "#D0021B"
    role: Error text and field outlines (approximate)
  - name: Warning Amber
    hex: "#F5A623"
    role: Warning banners (approximate)
fonts:
  display:
    family: "GT Ultra Median Lloyds"
    fallback: "Inter Tight"
    weights: [500, 700]
  body:
    family: "GT Ultra Median Lloyds"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 48, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H1, size: 36, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: H2, size: 28, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 22, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 2px 8px rgba(0,0,0,0.08)" }
  - { name: Raised, value: "0 8px 24px rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F1F1F1"
  text: "#000000"
  muted: "#505050"
  border: "#C9C9C9"
  accent: "#006A4D"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Lloyds Bank

> Research note: lloydsbank.com served a bot error page to automated requests on 2026-11-16, so only the logo, the brand font name and a handful of colours were read from the live response (`#006A4D`, `#11B67A`, `#333333`, `#505050`, `#C9C9C9`, `#F1F1F1`). Everything else is reconstructed from the public product and marked approximate. Check against the live site before shipping.

## 1. Visual Theme & Atmosphere

Lloyds Bank is a large UK high-street bank whose whole identity hangs on one image: the black horse. The 2024 refresh redrew the horse as a more muscular, rearing animal with green highlights cut into its body, set the wordmark "LLOYDS BANK" in tight capitals beside it, and moved the house typeface to a custom cut of GT Ultra (served as `GT Ultra Median Lloyds`).

The website and app read as calm and practical:

- **White first.** Most pages are white with black headings and charcoal body text. Green is used for actions and highlights, not as a page fill.
- **Two greens.** A deep, slightly blue-leaning green (`#006A4D`) carries brand weight; a bright, fresh green (`#11B67A`) shows up as an accent, on the app icon and in campaign artwork.
- **The horse as hero.** Campaign pages and the app splash put the black horse large, often running across a field of green or on white with lots of space.
- **Product tiles and plain lists.** Below the hero, pages are a grid of product cards (current accounts, savings, mortgages, credit cards) and simple accordions for detail.
- **Medium density.** It is a bank for everyone, so type is generous (16-18px body), touch targets are large and there is little decoration.

Mood words: dependable, British, grounded, plain-spoken, a bit of swagger in the horse.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Lloyds Green | `#006A4D` | Brand green, primary buttons, links, logo highlights (read from live page) |
| Bright Green | `#11B67A` | Accent, app icon, success ticks, campaign fields (read from live page) |
| Deep Green | `#024731` | Hover and pressed states, dark footer panels (approximate) |
| Mint Tint | `#E6F4EE` | Soft highlight panels, selected list rows (approximate) |
| Black | `#000000` | Horse, wordmark, headings |
| Charcoal | `#333333` | Body text (read from live page) |
| Dark Grey | `#505050` | Secondary text, captions (read from live page) |
| Border Grey | `#C9C9C9` | Input borders, dividers (read from live page) |
| Light Grey | `#F1F1F1` | Section backgrounds, disabled fills (read from live page) |
| White | `#FFFFFF` | Page and card background |

### Semantic colors (approximate)

| State | Hex | Use |
|---|---|---|
| Success | `#11B67A` | Confirmation ticks, "Payment sent" banners |
| Error | `#D0021B` | Field errors, failed payments |
| Warning | `#F5A623` | Fraud and scam warnings, unusual activity |
| Info | `#006A4D` on `#E6F4EE` | Informational callouts |

### Dark mode

The Lloyds app supports iOS dark mode: backgrounds go to near-black (`#121212`, approximate), cards to `#1E1E1E`, text to white, and the green accents shift toward the brighter `#11B67A` so they keep contrast. The website stays light.

## 3. Typography

- **Brand font:** GT Ultra by Grilli Type, in a bank-specific cut served as `GT Ultra Median Lloyds`. It is a contrasty sans with subtle flared terminals. It is commercially licensed and not available to third parties.
- **Fallbacks:** `Inter Tight` for headings and `Inter` for body text are the closest Google Fonts in width and colour. Stack: `"GT Ultra Median Lloyds", "Inter", Arial, sans-serif`.
- **Weights:** headings at 700, sub-heads and buttons at 500, body at 400.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 48px (32px mobile) | 700 | 1.1 | -0.01em |
| H1 | 36px | 700 | 1.15 | -0.01em |
| H2 | 28px | 700 | 1.2 | 0 |
| H3 | 22px | 500 | 1.3 | 0 |
| Body Large | 18px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small / legal | 14px | 400 | 1.45 | 0 |

All sizes are approximate.

Rules:

- Sentence case for headings and buttons ("Open a current account"), never all caps except the wordmark.
- Use tabular numerals for balances, interest rates and payment amounts.
- Representative APR and legal lines are 14px charcoal directly under the offer, not hidden in a footnote.

## 4. Logo & Brand Mark

- **Construction:** a rearing black horse facing right, with bright interior highlights in Lloyds Green, followed by the wordmark "LLOYDS BANK" in heavy capitals. The horse sits slightly lower than the cap height so its hooves drop below the baseline.
- **Horse alone:** the horse is used without the wordmark on the app icon, social avatars and as a large campaign graphic.
- **Colour versions:** black horse with green highlights on white (primary); all-white horse and wordmark on Lloyds Green or on photography; all-black for single-colour print.
- **Clear space:** at least the height of the "L" on every side (approximate).
- **Minimum size:** about 24px tall on screen for the full lockup (approximate).
- **Misuse:** do not recolour the horse green or put it in a circle; do not flip it to face left; do not set the wordmark in another typeface or in lower case.

## 5. Components

### Buttons

```css
.btn-primary {
  background: #006A4D;
  color: #FFFFFF;
  font: 500 16px/1.25 "GT Ultra Median Lloyds", Inter, sans-serif;
  padding: 14px 24px;
  min-height: 48px;
  border: 2px solid #006A4D;
  border-radius: 8px;            /* approximate */
  transition: background-color .15s ease;
}
.btn-primary:hover  { background: #024731; border-color: #024731; }
.btn-primary:focus-visible { outline: 3px solid #11B67A; outline-offset: 2px; }
.btn-primary:disabled { background: #F1F1F1; color: #8A8A8A; border-color: #F1F1F1; }

.btn-secondary {
  background: #FFFFFF;
  color: #006A4D;
  border: 2px solid #006A4D;
  border-radius: 8px;
  padding: 14px 24px;
}
.btn-secondary:hover { background: #E6F4EE; }

.btn-link {                       /* "Find out more" style */
  color: #006A4D;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
}
```

Buttons are full width on mobile. A chevron (">") follows text links in product tiles.

### Header and navigation

- White bar about 72px tall: horse logo left, top-level sections (Bank accounts, Mortgages, Loans, Credit cards, Savings, Investing, Insurance, Help & support) in 16px charcoal, and a prominent green "Log on" button right.
- A thin utility row above lists Personal, Business, Commercial.
- Mega menus drop down on white with a 1px `#C9C9C9` top border and three or four link columns.
- Mobile: horse logo, "Log on" button and a hamburger; the menu opens full screen with accordion sections.

### Hero

- Full-width band with a large headline (36-48px, 700), one or two lines of body and a single green button.
- Artwork is either the horse running across a field of green or lifestyle photography with a green-tinted overlay.

### Product cards

```css
.product-card {
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.product-card h3 { font: 700 22px/1.3 var(--font); color: #000; }
.product-card .rate { font: 700 32px/1 var(--font); color: #006A4D; }
```

Cards carry a product name, two or three bullet benefits with green ticks, a rate or representative example and one button.

### Inputs

- 48px tall, 1px `#C9C9C9` border (2px `#006A4D` on focus), 4px radius, 16px text.
- Label sits above in 16px 500 black; hint text below in 14px `#505050`.
- Errors: red text with an exclamation icon under the field and a red left border on the field group.

### Accordions and FAQs

- Rows separated by 1px `#C9C9C9` lines, 18px 500 question text, a green plus or chevron on the right that rotates 180 degrees on open.

### App account list (signature)

- Each account is a white card with the account name (500), sort code and account number in grey, and the balance large and right-aligned with tabular figures.
- Quick actions under the balance: Pay & Transfer, Card, Statements, as small green icon buttons.
- A bottom tab bar: Home, Apply, Payments, Everyday Offers, Support.

### Alerts and banners

- Scam and fraud warnings use an amber or red left stripe (4px) on a pale tinted panel with a bold one-line headline.

## 6. Layout & Spacing

- **Container:** about 1200px max width, 24px side padding on desktop, 16px on mobile (approximate).
- **Grid:** 12 columns with 24px gutters; product tiles run 3 or 4 across on desktop, 1 across on mobile.
- **Section rhythm:** 48-64px between sections, 24px inside cards.
- **Breakpoints:** about 576, 768, 992, 1200px.
- **Density:** generous; this is a mass-market bank with a wide age range of customers.

## 7. Depth, Elevation & Motion

- Mostly flat: 1px grey borders do most of the separation.
- Cards may carry a soft `0 2px 8px rgba(0,0,0,0.08)` shadow; menus and modals `0 8px 24px rgba(0,0,0,0.12)`.
- Motion is short and functional: 150-200ms ease for hovers, 250ms for accordions and drawers.
- The horse animates in campaign films and the app splash (a short gallop), but never in UI chrome.

## 8. Iconography & Imagery

- **Icons:** simple outline icons with about 2px strokes and rounded joins, in black or Lloyds Green, 24px grid.
- **Ticks:** bullet lists of benefits use green tick icons.
- **Photography:** real UK people in homes, high streets and countryside, warm natural light. Families, first-time buyers, small business owners.
- **Horse artwork:** the horse appears large and dramatic in campaigns, often in motion across green or a landscape.
- **Illustration:** sparing, flat and simple, mostly in help and guidance pages.

## 9. Voice & Microcopy

- Plain British English, warm but brief. "We" and "you".
- Sentence case everywhere; avoid jargon or explain it inline.
- Regulatory text is clear and adjacent to the offer.

Sample strings:

- Hero: "By your side." (campaign line; check it is still current)
- Product: "Open a current account in minutes"
- CTA: "Log on", "Apply now", "Find out more", "Compare accounts"
- Help: "Spotted something unusual? Call us straight away."
- App: "Your balance", "Pay and transfer", "Everyday Offers"

## 10. Do's and Don'ts

**Do**

- Keep pages white with black headings and charcoal body text.
- Use Lloyds Green `#006A4D` for primary actions and links, bright green `#11B67A` sparingly as accent.
- Let the black horse be the single strong graphic on a page.
- Use large, readable type and 48px touch targets.
- Show rates and representative examples clearly beside the offer.

**Don't**

- Don't flood whole pages in green or mix in other brand hues.
- Don't redraw, recolour or crop the horse.
- Don't use playful illustration styles or emoji in banking flows.
- Don't hide fees or legal text in tiny grey type.
- Don't use pill buttons; Lloyds uses modest rounded rectangles.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Lloyds Bank (UK). White page, black headings, charcoal `#333333` body text and grey `#505050` captions. Font: `"GT Ultra Median Lloyds", Inter, Arial, sans-serif` (use Inter Tight for headings and Inter for body as stand-ins). Headings bold 700, body 16-18px. Primary buttons are Lloyds Green `#006A4D` with white text, 8px radius, 48px tall, hover `#024731`, focus ring bright green `#11B67A`. Secondary buttons are white with a 2px green border. Header: white bar with the black horse logo left, product menu, and a green "Log on" button right. Below a simple hero (big headline, one line of copy, one button, horse or lifestyle image), show a grid of white product cards with 1px `#C9C9C9` borders, green tick bullets and a large green rate figure. Inputs are 48px tall with grey borders that turn green on focus. Keep it calm, plain-spoken and accessible.

```css
:root {
  --lloyds-green: #006A4D;
  --lloyds-green-bright: #11B67A;
  --lloyds-green-deep: #024731;
  --lloyds-mint: #E6F4EE;
  --lloyds-black: #000000;
  --lloyds-text: #333333;
  --lloyds-text-secondary: #505050;
  --lloyds-border: #C9C9C9;
  --lloyds-surface: #F1F1F1;
  --lloyds-bg: #FFFFFF;
  --lloyds-error: #D0021B;
  --lloyds-warning: #F5A623;
  --lloyds-font: "GT Ultra Median Lloyds", "Inter", Arial, sans-serif;
  --lloyds-radius-sm: 4px;
  --lloyds-radius-md: 8px;
  --lloyds-shadow-card: 0 2px 8px rgba(0,0,0,0.08);
  --lloyds-shadow-raised: 0 8px 24px rgba(0,0,0,0.12);
}
```

---

Values are observed from the public product where the site allowed it, and otherwise approximate; this file is an unofficial reference and is not affiliated with or endorsed by Lloyds Bank or Lloyds Banking Group.

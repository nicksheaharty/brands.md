---
name: DBS
slug: dbs
url: https://dbs.com
category: Banking
tagline: "Red star mark, crisp white pages, Public Sans type and small-radius red buttons."
updated: 2026-11-16
appStoreId: 1068403826
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: DBS Red
    hex: "#FF3333"
    role: Logo mark, brand moments, active indicators
  - name: Button Red
    hex: "#FF3E3E"
    role: Primary button fill
  - name: Ink
    hex: "#2E2E2E"
    role: Headings and body text
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Black
    hex: "#000000"
    role: Wordmark "DBS"
  - name: Deep Red
    hex: "#EE1818"
    role: Red text links and emphasis on legacy pages
  - name: Red Hover
    hex: "#CF2929"
    role: Primary button hover
  - name: Red Pressed
    hex: "#B32B2B"
    role: Primary button pressed
  - name: Slate Grey
    hex: "#69737B"
    role: Icons, secondary button icons
  - name: Mid Grey
    hex: "#909090"
    role: Secondary text, captions
  - name: Line Grey
    hex: "#ECECEC"
    role: Dividers, card borders
  - name: Cloud
    hex: "#EEF2F5"
    role: Disabled fill, subtle section background
  - name: Success Green
    hex: "#007A45"
    role: Positive status, success buttons
  - name: Danger Red
    hex: "#D62300"
    role: Destructive actions and errors
fonts:
  display:
    family: "Public Sans"
    fallback: "Public Sans"
    weights: [600]
  body:
    family: "Public Sans"
    fallback: "Public Sans"
    weights: [400, 600]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Heading LG, size: 41, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Heading MD, size: 34, weight: 600, lineHeight: 1.22, tracking: "0" }
  - { role: Heading SM, size: 28, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Heading XS, size: 22, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body MD, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body SM, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Label XS, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 50 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Hairline, value: "0 2px 1px rgba(0,0,0,0.1)" }
  - { name: Card, value: "0 4px 12px rgba(0,0,0,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#2E2E2E"
  muted: "#909090"
  border: "#ECECEC"
  accent: "#FF3E3E"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# DBS

## 1. Visual Theme & Atmosphere

DBS is Singapore's largest bank and the parent of POSB, with digibank apps across Singapore, Hong Kong, India, Indonesia and Taiwan. The brand is compact: a red "star" mark (a pillowy square with an X cut through it, often read as a stylised star or a pair of crossed boomerangs) next to "DBS" in a black serif.

The website feels clean and corporate with a red accent:

- **White and red.** Pages are white with charcoal text (`#2E2E2E`). Red appears in the logo, the primary button (`#FF3E3E`) and small active indicators. It is never a page fill.
- **A serif logo, a sans UI.** The DBS wordmark is a classic serif, but the interface is set in Public Sans with 600-weight headings.
- **Tokenised system.** The newer pages run on a design-token system with names like `--component-button_primary-base-background` and `--semantic-color-text-inverse`, and fluid `clamp()` type sizes.
- **Mega navigation.** A long header with segment switching (Personal, Treasures, Private Bank, SME, Corporate) and product menus (Accounts, Cards, Loans, Investments, Insurance) with "Most popular" and "NEW" tags.
- **Scam awareness up front.** The Singapore site leads with security messaging (digiVault, "Latest scams and frauds") alongside product promotions.

Mood words: efficient, modern Asian bank, digital-first, tidy, a little conservative.

## 2. Color Palette & Roles

Values read from dbs.com.sg and dbs.com CSS on 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| DBS Red | `#FF3333` | Logo mark, brand moments |
| Button Red | `#FF3E3E` | `--component-button_primary-base-background` |
| Red Hover | `#CF2929` | Primary button hover |
| Red Pressed | `#B32B2B` | Primary button pressed |
| Deep Red | `#EE1818` | Red links and emphasis on older templates |
| Ink | `#2E2E2E` | Headings and body text |
| Black | `#000000` | Wordmark |
| Slate Grey | `#69737B` | Icons (`--semantic-color-icon`) |
| Mid Grey | `#909090` | Secondary text |
| Grey 65 | `#656565` | Body copy on older templates |
| Line Grey | `#ECECEC` | Dividers, card borders |
| Snow | `#F7F7F7` | Subtle section background |
| Cloud | `#EEF2F5` | Disabled background |
| Disabled Text | `#9B9EAB` | Disabled labels |
| White | `#FFFFFF` | Page background, text on red |

### Semantic colors

| State | Hex | Hover / pressed |
|---|---|---|
| Success strong | `#007A45` | `#005C34` / `#003D23` |
| Danger strong | `#D62300` | `#BD2B0F` / `#4C0000` |
| Access / info blue | `#458FFF` | used for accessibility focus and info |
| Warning | `#FFAA22` | promotional and caution badges |

### Dark mode

The marketing sites are light. "On dim" tokens (`--semantic-color-icon-on_dim`, `#F7F7F7`; borders `#C7CFD5`) exist for dark hero bands and image overlays. The digibank app has its own dark appearance.

## 3. Typography

- **UI font:** Public Sans, a free Google Font, for headings, body and labels (`--semantic-font_family-heading`, `-body`, `-label`). Fallback is the same family; stack `"Public Sans", Arial, sans-serif`.
- **Numbers and code:** Roboto Mono appears for figures in rate tables and calculators.
- **CJK:** Noto Sans SC, TC and HK are loaded for Chinese-language pages.
- **Legacy:** older dbs.com pages still use Open Sans and a "FrutigerChat" face in chat widgets.
- **Weights:** headings 600, body and labels 400.

Fluid scale (from the `clamp()` tokens; sizes are the desktop maximum):

| Token | Desktop | Mobile | Weight | Line height |
|---|---|---|---|---|
| heading-lg | 41px | 27px | 600 | 1.2 |
| heading-md | 34px | 24px | 600 | 1.22 |
| heading-sm | 28px | 21px | 600 | 1.25 |
| heading-xs | 22px | 19px | 600 | 1.3 |
| body-md / label-md | 16px | 15px | 400 | 1.5 |
| body-sm / label-sm | 14px | 13px | 400 | 1.5 |
| label-xs | 12px | 12px | 400 | 1.4 |

Rules:

- Sentence case for headings and buttons; product names keep their own casing ("digibank", "PayLah!", "digiVault").
- Labels are not bold; weight 400 with tight sizes.
- Use Roboto Mono or tabular figures for rates and amounts in tables.

## 4. Logo & Brand Mark

- **Construction:** the mark is a red rounded square with concave, scalloped sides and an X-shaped cut through the centre that leaves four petal-like segments, set on a white square. To its right, "DBS" in a black high-contrast serif.
- **Mark alone:** used for app icons (white mark on red, or red on white), favicons and social avatars.
- **Colour versions:** red mark with black wordmark on white (primary); all-white on red or on photography.
- **Clear space:** about half the mark's width around the lockup (approximate).
- **Minimum size:** about 20px tall on screen (approximate).
- **Misuse:** do not set "DBS" in a sans, recolour the mark, rotate it or place it on a busy red photo without the white version.

## 5. Components

### Buttons

From the component tokens:

```css
.btn-primary {
  background: #FF3E3E;                 /* --component-button_primary-base-background */
  color: #FFFFFF;
  font: 400 1rem/1.5 "Public Sans", Arial, sans-serif;
  height: 2.5rem;                      /* md; sm 2rem, lg 3rem */
  padding: 0 1.5rem;                   /* 0.75rem when the button has an icon */
  border: none;
  border-radius: 4px;                  /* --component-button_primary-base-border_radius */
  transition: background-color .2s linear;
}
.btn-primary:hover    { background: #CF2929; }
.btn-primary:active   { background: #B32B2B; }
.btn-primary:disabled { background: #EEF2F5; color: #9BA4AB; }

.btn-secondary {
  background: transparent;
  color: #2E2E2E;
  border: 1px solid #C7CFD5;
  border-radius: 4px;
  height: 2.5rem;
  padding: 0 1.5rem;
}
.btn-secondary:hover { border-color: #69737B; }

.btn-plain { background: none; border: none; color: #2E2E2E; }   /* icon #69737B */
```

Positive (`#007A45`) and destructive (`#D62300`) variants share the same shape. Older templates still show 50px-radius pill buttons; the current system uses 4px.

### Header

- Top segment bar: Personal Banking, Treasures, Private Bank, Vickers, SME, Corporate, plus "About DBS", "ATM & Branch", "Help & Support", language switch and "Login" (a red button with a dropdown for digibank, iBanking and cards).
- Main bar: DBS logo left, product menus (Accounts, Cards, Loans, Investments, Insurance, Rewards & Deals) in 16px Ink.
- Mega menu: white panel with columns (Account types, Featured, For existing customers, Resources) and a "Highlights" promo on the right; small red "NEW" tags beside new items.

### Promo cards

```css
.promo-card {
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 1px rgba(0,0,0,.1);
}
.promo-card img { aspect-ratio: 16 / 9; object-fit: cover; }
.promo-card h3  { font: 600 22px/1.3 "Public Sans"; color: #2E2E2E; padding: 16px 16px 4px; }
.promo-card p   { font: 400 14px/1.5 "Public Sans"; color: #656565; padding: 0 16px 16px; }
```

### Tags

- Small rectangular tags: "NEW" in white on red with 2px radius; "SCAM DEFENCE" or category tags in uppercase 12px with letter spacing.

### Inputs

- 48px tall, 1px `#C7CFD5` border, 4px radius, 16px text, label above in label-sm (approximate).
- Focus: 2px access blue `#458FFF` ring. Error: `#D62300` border and message.

### Rate tables and calculators

- Clean tables with `#ECECEC` row dividers, figures right-aligned in Roboto Mono, header row on `#F7F7F7`.
- Calculators use sliders with a red thumb and a red filled track (approximate).

### Footer

- Light grey band with link columns, app badges for digibank and PayLah!, social icons and legal links in 12-14px `#656565`.

## 6. Layout & Spacing

- **Container:** about 1170-1200px max width with 15px gutters (Bootstrap grid on older pages).
- **Breakpoints:** 576, 768, 992 and 1200px.
- **Spacing:** 4px base; 8, 16, 24, 32, 48 and 64px are the common steps.
- **Density:** medium. Product lists in menus are compact; landing sections are airy.

## 7. Depth, Elevation & Motion

- Mostly flat with hairlines; cards use `0 2px 1px rgba(0,0,0,.1)` or a soft `0 4px 12px rgba(0,0,0,.08)` (approximate).
- A thin tab underline shadow appears as `0 3px 2px -2px silver` on legacy navigation.
- Transitions: `background-color .2s linear` on buttons, `all .3s linear` on menus, `background-image .4s ease-in-out` on hero swaps.

## 8. Iconography & Imagery

- **Icons:** a custom `dbsicons` icon font of clean line icons in Slate Grey `#69737B` or red, 16-24px.
- **Photography:** bright, contemporary Asian city life: professionals, families and small business owners, often on white or soft pastel backgrounds.
- **Illustration:** flat vector illustrations with red accents for security, onboarding and app feature explainers.

## 9. Voice & Microcopy

- Clear, efficient, helpful. Short headings, one-line benefits.
- Sentence case; product names in their own styling.

Sample strings (from dbs.com.sg on 2026-11-16):

- "Secure your savings against scammers and lock your money with digiVault"
- "New to Singapore? Your starter bundle awaits."
- Menus: "Daily use/ Multi-currency", "Fixed deposits", "Latest scams and frauds", "Financial planning guides"
- CTAs: "Apply now", "Find out more", "Login"

## 10. Do's and Don'ts

**Do**

- Keep pages white and let red mark only the logo, primary buttons and small tags.
- Use Public Sans with 600 headings and 400 body and labels.
- Use 4px corners on buttons, inputs and tags; 8px on cards.
- Put rates and figures in tabular or mono numerals.
- Pair the red mark with the black serif "DBS" exactly as supplied.

**Don't**

- Don't fill large areas with red or use red for body text.
- Don't make headings 700 or 800; DBS headings sit at 600.
- Don't use pill buttons in new designs.
- Don't redraw the star mark or set the wordmark in a sans.
- Don't quote rates or promotions without checking the live site.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of DBS Bank (Singapore). White page, charcoal text `#2E2E2E`, secondary text `#909090`, dividers `#ECECEC`, subtle sections `#F7F7F7`. Font: `"Public Sans", Arial, sans-serif` with headings at 600 (41/34/28/22px desktop, fluid down on mobile) and body and labels at 400 (16/14/12px). Primary buttons are red `#FF3E3E` with white text, 4px radius, 40px tall, 24px horizontal padding; hover `#CF2929`, pressed `#B32B2B`, disabled `#EEF2F5` with `#9BA4AB` text. Secondary buttons are transparent with a 1px `#C7CFD5` border. Icons are line icons in `#69737B`. Header: segment bar (Personal, Treasures, Private Bank, SME, Corporate), DBS logo (red star mark plus black serif "DBS") left, product menus, red Login button right; mega menus have columns and small red "NEW" tags. Cards are white with a 1px `#ECECEC` border, 8px radius and a hairline shadow. Success `#007A45`, danger `#D62300`, focus blue `#458FFF`. Figures in Roboto Mono.

```css
:root {
  --dbs-red: #FF3333;
  --dbs-button: #FF3E3E;
  --dbs-button-hover: #CF2929;
  --dbs-button-pressed: #B32B2B;
  --dbs-red-deep: #EE1818;
  --dbs-ink: #2E2E2E;
  --dbs-text-secondary: #909090;
  --dbs-text-body-legacy: #656565;
  --dbs-icon: #69737B;
  --dbs-line: #ECECEC;
  --dbs-border-input: #C7CFD5;
  --dbs-snow: #F7F7F7;
  --dbs-disabled-bg: #EEF2F5;
  --dbs-disabled-text: #9B9EAB;
  --dbs-bg: #FFFFFF;
  --dbs-success: #007A45;
  --dbs-danger: #D62300;
  --dbs-access: #458FFF;
  --dbs-font: "Public Sans", Arial, sans-serif;
  --dbs-font-mono: "Roboto Mono", ui-monospace, monospace;
  --dbs-radius-sm: 4px;
  --dbs-radius-md: 8px;
  --dbs-shadow-hairline: 0 2px 1px rgba(0,0,0,0.1);
  --dbs-shadow-card: 0 4px 12px rgba(0,0,0,0.08);
}
```

---

Values are observed from the public product; this file is an unofficial reference and is not affiliated with or endorsed by DBS Bank.

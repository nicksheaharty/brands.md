---
name: Chase
slug: chase
url: https://chase.com
category: Banking
tagline: "Blue octagon, light Open Sans headlines, white panels and small-radius blue CTAs."
updated: 2026-11-16
appStoreId: 298867247
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Chase Blue
    hex: "#005EB8"
    role: Octagon logo, primary CTA fill on the home page
  - name: Interactive Blue
    hex: "#0060F0"
    role: Links, interactive fills and borders in the design system
  - name: Ink
    hex: "#101820"
    role: Body text and wordmark-adjacent dark text
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Brand Navy
    hex: "#0846A8"
    role: Brand background, info states, brand text
  - name: Deep Navy
    hex: "#002F6C"
    role: Pressed CTA, raised info, dark promo panels
  - name: Midnight
    hex: "#041E42"
    role: Default border color, dark hero sections
  - name: Hover Blue
    hex: "#0A4386"
    role: Link and button hover
  - name: Grey 700
    hex: "#414042"
    role: Regular text in the app design system
  - name: Grey 500
    hex: "#717171"
    role: Subdued text, input borders
  - name: Header Grey
    hex: "#F6F6F6"
    role: Secondary background, header bar
  - name: Stone
    hex: "#F1F1F0"
    role: Grey section background on chase.com
  - name: Disabled
    hex: "#EDEDED"
    role: Disabled button fill
  - name: Gain Green
    hex: "#00752F"
    role: Positive balance change, success text
  - name: Loss Red
    hex: "#BF2155"
    role: Errors, negative change
  - name: Warning
    hex: "#B24700"
    role: Warning text
fonts:
  display:
    family: "Open Sans"
    fallback: "Open Sans"
    weights: [300, 400]
  body:
    family: "Open Sans"
    fallback: "Open Sans"
    weights: [400, 600, 700]
typeScale:
  - { role: Headline Large, size: 64, weight: 300, lineHeight: 1.375, tracking: "0" }
  - { role: Headline Small, size: 48, weight: 300, lineHeight: 1.29, tracking: "0" }
  - { role: Title XL, size: 36, weight: 300, lineHeight: 1.33, tracking: "0" }
  - { role: Title Large, size: 28, weight: 300, lineHeight: 1.29, tracking: "0" }
  - { role: Title Medium, size: 24, weight: 300, lineHeight: 1.33, tracking: "0" }
  - { role: Subtitle, size: 18, weight: 400, lineHeight: 1.56, tracking: "0" }
  - { role: Body Large, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body Medium, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Raised, value: "0.125rem 0.375rem 0.25rem rgba(0,0,0,0.2)" }
  - { name: Hairline, value: "0 0 0 0.5px rgba(0,0,0,0.15)" }
  - { name: Input Underline, value: "inset 0 -1px 0 0 #8C8E90" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#101820"
  muted: "#717171"
  border: "#BCBCBC"
  accent: "#005EB8"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Chase

## 1. Visual Theme & Atmosphere

Chase is the consumer and small-business bank of JPMorganChase: checking and savings, credit cards (Sapphire, Freedom), mortgages, auto loans, Chase Travel and J.P. Morgan self-directed investing. chase.com is a clean, white, blue-accented banking site built around a sign-in box, product tiles and rate offers. The Chase Mobile app follows the same system with more density.

What makes it recognisable:

- **The blue octagon.** Four interlocking blue trapezoids around a white square. It is one of the most familiar marks in US banking and appears next to the black CHASE wordmark in the header.
- **Light headlines.** Headlines use Open Sans Light (300) at large sizes. The result is airy and calm, not loud.
- **Two blues.** Chase Blue `#005EB8` (logo and home page CTA) and the newer design-system Interactive Blue `#0060F0` (links, form focus, app buttons). Navy `#002F6C` and `#041E42` give depth.
- **Square-ish corners.** Buttons and cards use small radii (4px), consistent with a careful, institutional bank.
- **Product photography with clean crops.** Credit card art, people in everyday moments, plenty of white space.
- **Sign-in first.** The home page puts the sign-in panel (Username, Password, Remember username) above the fold.

Mood words: trustworthy, clean, approachable, efficient, national.

## 2. Color Palette & Roles

Values are from chase.com CSS and design-system tokens (November 2026). Tokens are stored as RGB triplets; hex conversions below.

| Name | Hex | Token / role |
|---|---|---|
| Chase Blue | `#005EB8` | Logo octagon, `--cta-primary-bg`, pressed interactive |
| Interactive Blue | `#0060F0` | `brandInteractive` background, border and link text |
| Hover Blue | `#0A4386` | `brandInteractiveHover`, link hover |
| CTA Hover | `#004692` | `--cta-primary-hover-bg` |
| Deep Navy | `#002F6C` | `--cta-primary-active-bg`, raised info |
| Brand Navy | `#0846A8` | `background.brand`, `text.brand`, info |
| Midnight | `#041E42` | Default border color, dark sections |
| Sky Pressed | `#0092FF` | Pressed state on inverse, input pressed border |
| Input Active | `#0B6EFD` | Focused input border |
| Ink | `#101820` | `--body-color` on chase.com |
| Regular Text | `#333333` / `#414042` | App design-system text (light / dark variants) |
| Subdued | `#717171` | Subdued text, input borders, focus ring |
| Subdued Hover | `#636363` | |
| Decorative Border | `#BCBCBC` | Dividers |
| Header Grey | `#F6F6F6` | `background.header`, secondary |
| Stone | `#F1F1F0` | `--grey-bg` sections |
| Tertiary | `#EDEDED` | Disabled CTA fill |
| Disabled Text | `#949494` | |
| White | `#FFFFFF` | Background |

### Semantic colors

| State | Text / icon | Background tint |
|---|---|---|
| Gain / success | `#00752F` | `#F5FADA` |
| Success fill | `#398100` | |
| Loss / error | `#BF2155` | `#FDEEF3` |
| Warning | `#B24700` | `#FDF6F0` |
| Info | `#0846A8` | `#EBF7FF` |
| Chart gain | `#128842` | |

Legacy promo CTAs on some pages use a green `#75B62F` "success" button with 5.33px radius.

### Dark mode

The app supports dark mode: background `#000000`, raised surfaces near `#333333`/`#414042`, text white, links stay `#0060F0` or lighten to `#0092FF`, error `#F8256B`, gain `#C0DF16`. chase.com itself is light only.

## 3. Typography

**Family:** Open Sans, self-hosted from asset.chase.com in 300, 400, 600 and 700 with italics. Stack: `"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`. Open Sans is free on Google Fonts, so no substitute is needed.

The light weight is the signature: every headline and title token is weight 300. Weight 600 ("Heavier" tokens) is used for labels, buttons and emphasis in body text.

### Scale (design-system tokens)

| Token | Size | Line height | Weight |
|---|---|---|---|
| headlineLarge (desktop) | 64px | 88px | 300 |
| headlineLarge (tablet/mobile) | 48px | 72px | 300 |
| headlineSmall (desktop) | 48px | 54px (approx.) | 300 |
| headlineSmall (mobile) | 42px | 54px | 300 |
| titleXlarge | 36px | 48px | 300 |
| titleLarge | 28px | 36px | 300 |
| titleMedium | 24px | 32px | 300 |
| subtitleMedium | 18px | 28px | 400 |
| bodyLarge / Heavier | 16px | 24px | 400 / 600 |
| bodyMedium / Heavier | 14px | 20px | 400 / 600 |
| bodySmall / Heavier | 12px | 16px | 400 / 600 |
| numericalLarge | 36-48px (approx.) | | 300 |

### Rules

- Sentence case for headlines and buttons ("Open an account", "See if you're pre-approved").
- Balances and rates use the numerical tokens: light weight, large size, tabular figures.
- Product names keep their marks: "Chase Sapphire Preferred®", "Chase Total Checking®", "Chase Freedom Unlimited®".
- Footnote markers and legal text: 12px, `#717171`.

## 4. Logo & Brand Mark

The Chase logo is the octagon symbol (1961, by Chermayeff & Geismar) plus the CHASE wordmark in a bold geometric sans. The octagon is built from four identical blue segments rotating around a white square, read as a stylised barrel or a vault.

- **Header lockup:** black `#141414` CHASE wordmark followed by the blue `#005EB8` octagon to its right.
- **App icon:** white octagon on a solid Chase blue square.
- **Color versions:** blue octagon with black wordmark (primary), all white on blue or navy, all black for single-color print.
- **Clear space:** at least half the octagon's width around the lockup (approximate).
- **Minimum size:** octagon at least 16px; full lockup about 100px wide on screen.

Misuse:

- Do not rotate, outline or split the octagon segments into different colors.
- Do not place the octagon left of the wordmark in the standard lockup.
- Do not use the octagon on JPMorganChase corporate materials (that brand uses a serif wordmark).
- Do not recreate the wordmark in Open Sans.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Hover | Pressed |
|---|---|---|---|---|---|
| Primary | `#005EB8` | `#FFFFFF` | none | `#004692` | `#002F6C` |
| Primary inverse | `#FFFFFF` | `#0060F0` | none | text `#0A4386` | text `#005EB8` |
| Secondary | transparent | `#101820` | `#005EB8` outline | text `#0A4386`, white fill | text `#005EB8` |
| Secondary inverse | transparent | `#FFFFFF` | white outline | `rgba(10,67,134,.5)` | `rgba(0,146,255,.5)` |
| Tertiary (text) | none | `#0060F0` | none | `#0A4386` underline | |
| Disabled | `#EDEDED` | `#959595` | none | | |

Sizing: min height 36px (`--cta-min-height: 2.25rem`), min width 160px, horizontal padding 16px, radius 4px. Label Open Sans 600 16px. Focus: `outline: 1px dashed #262626` (white on dark) with offset.

```css
.chase-btn {
  font: 600 16px/1.5 "Open Sans", "Helvetica Neue", Arial, sans-serif;
  color: #fff;
  background: #005EB8;
  border: 0;
  border-radius: 4px;
  min-height: 36px;
  min-width: 160px;
  padding: 8px 16px;
  transition: background-color .2s ease;
}
.chase-btn:hover { background: #004692; }
.chase-btn:active { background: #002F6C; }
.chase-btn:focus-visible { outline: 1px dashed #262626; outline-offset: 2px; }
```

### Sign-in panel (signature)

- White card on the hero, about 360-400px wide, radius 4-8px, shadow `0.125rem 0.375rem 0.25rem rgba(0,0,0,.2)` (approximate placement).
- Floating-label inputs: "Username", "Password" with a "Show" text toggle.
- Inputs are underline style: no box, `box-shadow: inset 0 -1px 0 0 #8C8E90`, 16px text, label 14px `#717171` that floats up on focus. Focus underline turns `#0B6EFD`.
- Checkboxes "Remember username" and "Use token" below, then a full-width blue "Sign in" button.
- Links under the button: "Forgot username/password?" and "Not Enrolled? Sign Up Now." in `#0060F0` 14px.

### Navigation

- Top utility bar (grey `#F6F6F6`): "Personal", "Business", "Commercial" segment links left; "Schedule a meeting", "Customer service", "Español" right.
- Main header (white, about 72px): menu icon, centred CHASE logo, "Sign in" right (approximate layout on the current home page).
- Side menu (drawer from the left): product groups ("Checking", "Savings & CDs", "Credit cards", "Home loans", "Auto", "Investing by J.P. Morgan", "Education & goals", "Travel") with chevrons and second-level lists.
- Active section: 2-4px blue underline or left bar in `#005EB8`.

### Product tiles

- A row of 6-8 icon tiles under the hero ("Credit cards", "Checking", "Savings", "Home loans", "Auto", "Business", "Investing"): 48px line icons in blue above a 14-16px label.
- Promo cards: white, radius 8px (approximate), image or card art top, title 24px light, body 16px, CTA as text link with chevron.
- Credit card tiles show the card art at a slight angle or flat, with rewards summary and "Learn more" link.

### Inputs (general)

- Boxed variant: 48px tall, 1px `#717171` border, radius 4px, hover border `#0A4386`, focus border `#0B6EFD`.
- Error: border and helper text `#BF2155`, helper starts with an error icon.

### Tables and account lists (app)

- Account rows: account name 16px/600, masked number "...1234" 14px subdued, balance right-aligned in light numerical style, chevron.
- Transaction list: date headers in 12px uppercase grey, rows with merchant 16px, category 14px subdued, amount right with gains in `#00752F`.

### Modals and overlays

White, radius 8px, max width 560-640px, 24-32px padding, scrim black at about 50%. Title 24px light, actions right-aligned (primary then secondary).

## 6. Layout & Spacing

- **Spacing:** 4px base; 8, 12, 16, 24, 32, 48, 64px steps.
- **Container:** about 1200-1280px with 16px (mobile), 24px (tablet), 32px (desktop) gutters (approximate).
- **Grid:** 12 columns, Bootstrap-like `container-fluid` / `row` structure on the sign-in form.
- **Breakpoints:** roughly 768, 992 and 1200px (approximate).
- **Section spacing:** 48-64px on desktop.
- **Density:** moderate; the hero holds the sign-in panel and one offer, then rows of tiles and promos.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Raised | `0.125rem 0.375rem 0.25rem rgba(0,0,0,.2)` | Sign-in panel, dropdowns |
| Hairline | `0 0 0 0.5px rgba(0,0,0,.15)` | Card outline instead of a border |
| Underline | `inset 0 -1px 0 0 #8C8E90` | Floating-label inputs |

- Mostly flat; borders and grey sections separate content.
- Transitions: 150-250ms ease on hover colors; drawer menu slides in about 300ms (approximate).
- Promo breakers can animate a border on scroll; keep motion minimal and respect reduced motion.

## 8. Iconography & Imagery

- **Icons:** simple line icons, 1.5-2px stroke, rounded joins, drawn in Interactive Blue or Ink at 24-48px.
- **Photography:** bright, everyday scenes (families at home, small-business owners, travellers) with natural light and clean backgrounds.
- **Card art:** credit cards rendered as clean flat objects; Sapphire cards in deep blue metal, Freedom cards in lighter blues.
- **Illustration:** used sparingly in education content; flat, blue-dominant.

## 9. Voice & Microcopy

Helpful, clear and steady. Short sentences, plain words, benefits up front, legal footnotes after.

- Sentence case for headings and buttons.
- Use the full product name with registered marks on first mention.
- CTAs are direct: "Open an account", "Sign in", "See if you're pre-approved", "Explore credit cards", "Find ATM or branch", "Make a payment".

Sample strings (from chase.com on 2026-11-16):

- "Choose the checking account that works best for you."
- "It's never too early to begin saving."
- "Forgot username/password?"
- "Not Enrolled? Sign Up Now."
- "Find ATM or branch"

## 10. Do's and Don'ts

**Do**

- Use Open Sans Light (300) for headlines and titles.
- Keep Chase Blue `#005EB8` for primary CTAs and the octagon; use `#0060F0` for links.
- Use 4px corners on buttons and inputs.
- Use underline-style floating-label inputs on sign-in forms.
- Keep pages white with grey `#F6F6F6` bands.
- Show legal footnotes in 12px grey under offers.

**Don't**

- Don't use pill buttons or large radii.
- Don't bold headlines; emphasis comes from size and color.
- Don't mix the JPMorganChase serif wordmark into Chase consumer screens.
- Don't use bright accent colors outside semantic states.
- Don't crowd the sign-in panel with promos.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Chase (chase.com). White page, text `#101820`, subdued text `#717171`, dividers `#BCBCBC`, grey bands `#F6F6F6`. Font: "Open Sans", with all headlines and titles in weight 300 (64px/88px hero on desktop, 28px/36px titles), body 16px/24px weight 400, buttons and labels weight 600. Primary buttons are Chase Blue `#005EB8` with white text, 4px radius, min height 36px and min width 160px, hover `#004692`, pressed `#002F6C`. Links and focus use `#0060F0` (hover `#0A4386`). Navy `#002F6C` and `#041E42` for dark promo sections. Include a white sign-in card with underline-style floating-label inputs (`inset 0 -1px 0 #8C8E90`, focus `#0B6EFD`) and a full-width blue "Sign in" button. Use a row of blue line-icon product tiles and simple promo cards. Gains in `#00752F`, errors in `#BF2155`. Copy is clear and sentence case.

```css
:root {
  --brand-blue: #005EB8;
  --brand-blue-hover: #004692;
  --brand-blue-pressed: #002F6C;
  --brand-interactive: #0060F0;
  --brand-interactive-hover: #0A4386;
  --brand-interactive-pressed: #0092FF;
  --brand-navy: #0846A8;
  --brand-midnight: #041E42;
  --brand-ink: #101820;
  --brand-text: #333333;
  --brand-text-subdued: #717171;
  --brand-border: #BCBCBC;
  --brand-input-line: #8C8E90;
  --brand-input-focus: #0B6EFD;
  --brand-bg: #FFFFFF;
  --brand-surface: #F6F6F6;
  --brand-surface-stone: #F1F1F0;
  --brand-disabled: #EDEDED;
  --brand-gain: #00752F;
  --brand-loss: #BF2155;
  --brand-warning: #B24700;
  --brand-info-bg: #EBF7FF;
  --brand-font: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-radius: 4px;
  --brand-radius-card: 8px;
  --brand-shadow-raised: 0.125rem 0.375rem 0.25rem rgba(0,0,0,.2);
  --brand-shadow-hairline: 0 0 0 0.5px rgba(0,0,0,.15);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Chase.

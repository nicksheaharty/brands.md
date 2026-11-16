---
name: OnePay
slug: onepay
url: https://onepay.com
category: Banking
tagline: "Off-white and near-black fintech with sky-blue highlights and bold, tight headlines."
updated: 2026-11-16
appStoreId: 1494523953
logoBackground: "#F9F9F9"
theme: light
colors:
  - name: Sky Blue
    hex: "#33BBFF"
    role: Brand blue, app icon background, product tiles
  - name: Black
    hex: "#121212"
    role: Text, logo, primary buttons
  - name: Highlight Blue
    hex: "#59C1FF"
    role: Highlighted words in headlines, focus ring, accents
  - name: Off White
    hex: "#F9F9F9"
    role: Page background
  - name: White
    hex: "#FFFFFF"
    role: Cards and surfaces
  - name: Navy Ink
    hex: "#122733"
    role: Icon strokes on blue tiles
  - name: Graphite
    hex: "#2C2C2E"
    role: Dark cards, borders on dark
  - name: Dark Surface
    hex: "#1F1F1F"
    role: Dark panels
  - name: Grey 1
    hex: "#D0D0D0"
    role: Borders and muted text on dark
  - name: Grey 3
    hex: "#DCDCDC"
    role: Dividers, placeholder fills
  - name: Grey 7
    hex: "#EDEDED"
    role: Subtle fills, chips
  - name: Mid Grey
    hex: "#8F8F8F"
    role: Secondary text
  - name: Error
    hex: "#F00000"
    role: Error states
  - name: Gold
    hex: "#D2A859"
    role: Card art and rewards accents (approx.)
fonts:
  display:
    family: "oneNeo"
    fallback: "Manrope"
    weights: [700]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: H1 Big, size: 80, weight: 700, lineHeight: 1.0, tracking: "-0.03em" }
  - { role: H1, size: 65, weight: 700, lineHeight: 1.1, tracking: "-0.14rem" }
  - { role: H2, size: 49, weight: 700, lineHeight: 1.1, tracking: "-0.06125rem" }
  - { role: H3, size: 37, weight: 700, lineHeight: 1.1, tracking: "-0.04625rem" }
  - { role: H4, size: 28, weight: 700, lineHeight: 1.1, tracking: "-0.035rem" }
  - { role: H5, size: 20, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 8, md: 16, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows: []
preview:
  bg: "#F9F9F9"
  surface: "#FFFFFF"
  text: "#121212"
  muted: "#8F8F8F"
  border: "#DCDCDC"
  accent: "#121212"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# OnePay

## 1. Visual Theme & Atmosphere

OnePay is a mobile banking app (from One Finance, Inc.) with debit, savings, credit, investing, crypto, family accounts and a "pay later" product, closely tied to Walmart shopping. The site is clean and editorial: an off-white `#F9F9F9` page, near-black `#121212` text and buttons, very bold tight headlines in the custom oneNeo face, and one accent, a light sky blue (`#59C1FF` / `#33BBFF`) that highlights a key word in each headline and fills product tiles.

What makes it recognisable:

- **Black, off-white, sky blue.** No other brand colors on the page. Blue is used sparingly: one highlighted word ("Banking that **builds credit**"), the app icon, product tiles.
- **Bold compressed headlines.** oneNeo at 700 with strong negative tracking (-0.14rem at 65px).
- **Product tiles.** Each product has a rounded square tile in sky blue `#33BBFF` with a single navy `#122733` line icon (the app icon is the dollar-loop tile).
- **Phone-led sections.** Large app screenshots and card renders sit beside short headlines on a 16-column grid.
- **Flat.** No visible shadows; separation comes from off-white vs white and rounded corners.

Mood words: confident, simple, modern, mass-market, trustworthy.

## 2. Color Palette & Roles

Values from the onepay.com Tailwind build.

| Name | Hex | Role |
|---|---|---|
| Black | `#121212` | Text, logo, primary buttons, borders (`.bg-black`) |
| Off White | `#F9F9F9` | Page background (`bg-off-white`) |
| White | `#FFFFFF` | Cards, inverted text |
| Highlight Blue | `#59C1FF` | Bold words in headlines (`[&_b]:text-highlight`), `bg-blue`, ring |
| Sky Blue | `#33BBFF` | `bg-blue-2`, app icon, product tiles |
| Navy Ink | `#122733` | Icons on blue tiles |
| Graphite | `#2C2C2E` | `bg-grey-2`, dark cards and borders |
| Dark Surface | `#1F1F1F` | Dark panels |
| Grey 1 | `#D0D0D0` | `grey-1` borders and text on dark |
| Grey 3 | `#DCDCDC` | `grey-3` fills |
| Grey 7 | `#EDEDED` | `grey-7` subtle fills |
| Light Grey | `#F0F0F0` | Chips, toggles |
| Mid Grey | `#8F8F8F` | Secondary text |
| Error | `#F00000` | `bg-error` |
| Error Text | `#FF5A5A` | Error text on dark |

### Dark mode

The body switches to `dark:bg-[#000]` and `dark:text-white`: black page, white text, graphite `#2C2C2E` cards, highlight blue unchanged.

### Card art

Card renders and illustrations add metallic and warm tones (`#D2A859`, `#F5C77C`, `#8D5A1F`, approx.) only inside imagery.

## 3. Typography

**Families (from the site CSS):**

- **oneNeo**: OnePay's custom display face, used for h1-h4 and the wordmark. Not available. Free stand-in: **Manrope** at 800 or **Plus Jakarta Sans** at 800, tightened.
- **Inter**: body copy, navigation, buttons. Free on Google Fonts.

```css
--font-one-neo: "oneNeo", "Manrope", sans-serif;
body { font-family: Inter, system-ui, sans-serif; }
```

### Scale (CSS classes `.h1`-`.h5`)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 big (`dt:h1-big`, desktop hero) | about 80px (approx.) | 700 | 1.0 | about -0.03em |
| H1 | 65px (4.0625rem) | 700 | 1.1 | -0.14rem |
| H2 | 49px (3.0625rem) | 700 | 1.1 | -0.06125rem |
| H3 | 37px (2.3125rem) | 700 | 1.1 | -0.04625rem |
| H4 | 28px (1.75rem) | 700 | 1.1 | -0.035rem |
| H5 | 20px | 600 | 1.2 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small / legal | 12-14px | 400 | 1.43 | 0 |

Headings step down one level on mobile (`h2 dt:h1-big`, `h3 dt:h2`).

**Rules:** sentence case. Wrap the key phrase of a headline in `<b>` and color it highlight blue; the rest stays black. Use one highlight per headline.

## 4. Logo & Brand Mark

- **Wordmark:** "OnePay" in heavy oneNeo with a capital O and P, tight spacing and a small "TM". Black `#121212` on light, white on dark.
- **App icon:** sky blue `#33BBFF` rounded square with a navy `#122733` line drawing of a dollar sign wrapped by two open arcs.
- **Product lockups:** "OnePay Later", "OnePay Cash" and similar set the product word in a lighter weight after the wordmark.
- **Clear space:** height of the "O" on all sides (approx.).
- **Minimum size:** 72px wide (approx.).
- **Misuse:** do not color the wordmark blue, add the dollar icon inside the wordmark, or stretch the letters.

## 5. Components

### Buttons

```css
.op-btn {
  display: inline-flex; align-items: center; gap: 8px;
  height: 48px; padding: 0 24px; border-radius: 9999px;
  background: #121212; color: #FFFFFF;
  font: 600 16px/1 Inter, sans-serif;
  transition: opacity .2s;
}
.op-btn:hover { opacity: .85; }
.op-btn--blue    { background: #59C1FF; color: #121212; }
.op-btn--outline { background: transparent; color: #121212; box-shadow: inset 0 0 0 2px #121212; }
.op-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px #59C1FF; }
```

"Learn more" links carry a small right arrow icon that nudges on hover. Values approximate; pill and black fill are from the CSS.

### Navigation

Sticky top bar: wordmark left (28px tall), product links ("Banking", "Family", "Invest", "Crypto", "CashRewards Card") as 48px-tall items with 16px padding and 12px radius, white text with `mix-blend-mode: difference` over a moving highlight pill, "Sign In" link with an underline-on-hover animation (2px flash) on the right. Mobile: hamburger opening a full-screen panel.

### Hero

Big H1 left-aligned across columns 2 to 15 of the 16-column grid, one highlighted phrase, a phone or card render, and App Store and Google Play badges.

### Product feature section

Two columns: text (H2/H3 with highlight, 2-3 lines of body, black pill CTA) and a large image card with 24px radius (`rounded-[1.5rem]`). Alternates sides.

### Product tiles

Square tiles, radius 24-30% of width (like an app icon), sky blue `#33BBFF` fill, navy `#122733` 2.5px line icon. Used in grids and nav menus.

### Testimonial cards

White cards, radius 16-24px, 24px padding, quote in 16-18px, avatar 64px circle, name in semibold.

### Accordion / FAQ

Rows with 1px `#DCDCDC` top border, question in H5, chevron rotates 90 degrees on open.

### Disclosure footer

Dense legal text 12px `#8F8F8F`, with headings "Product", "Company", "Resources", "For Shoppers", "Legal". Banking partner and FDIC disclosures live here.

## 6. Layout & Spacing

- **Max width:** 105rem (1680px) container (`max-w-screen-dtl`).
- **Grid:** 16 columns on desktop with `--column-width: calc((min(100svw - 2rem, 105rem - 2rem) - 15rem) / 16)` (1rem gutters), 4 columns on mobile.
- **Breakpoints:** 52rem (832px, `tl` tablet), 68rem (1088px, `dt` desktop), 90rem (1440px).
- **Spacing:** Tailwind 4px scale; sections 96-128px apart on desktop, 64px on mobile (approx.).
- **Side padding:** 16px mobile, 24px tablet and up.

## 7. Depth, Elevation & Motion

- **Flat:** no box shadows in the build beyond Tailwind ring utilities. Depth comes from off-white vs white, image overlap and rounded masks.
- **Motion:** scroll-linked reveals (elements translate up from `--y: 100%` and fade from 0.25 opacity), animated nav highlight, a shimmer gradient (`linear-gradient(71deg, transparent 25%, rgba(255,255,255,.25) 50%, transparent 75%)`) across card renders.
- **Durations:** 200-400ms, ease-out (approx.).

## 8. Iconography & Imagery

- **Icons:** single-weight line icons with round caps, navy on blue tiles or black on white. Small 12-16px chevrons and play icons in UI.
- **Imagery:** phone screenshots of the app, rendered debit and credit cards, lifestyle photos of families and teens. Clean, bright, natural light.
- **Partner logos:** Walmart references appear in copy and imagery around shopping features.

## 9. Voice & Microcopy

Direct, upbeat, plain-English money talk with a bit of internet slang.

- Read on onepay.com today: "Hard launch your teen's money era", "Banking that builds credit", "Start investing for your future", "The simple way to crypto", "Credit with unlimited cash back", "The flexible way to pay", "We take your safety seriously", "Made for your Walmart runs"
- Nav and CTAs: "Sign In", "Learn more", "Get the app"
- Legal is explicit and lives in the footer.

Sentence case. Keep headlines under eight words.

## 10. Do's and Don'ts

**Do**

- Use off-white `#F9F9F9` pages with near-black `#121212` text.
- Highlight one key phrase per headline in blue `#59C1FF`.
- Make primary buttons black pills.
- Use sky blue `#33BBFF` tiles with navy line icons for products.
- Keep surfaces flat with big rounded image cards.

**Don't**

- Don't use blue for body text or long passages.
- Don't add drop shadows to cards.
- Don't use pure black `#000000` in light mode.
- Don't mix in other accent hues.
- Don't quote rates, cash-back percentages or fees without checking the live site and its disclosures.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of OnePay. Off-white page `#F9F9F9`, white cards, near-black `#121212` text, secondary `#8F8F8F`, dividers `#DCDCDC`. Headlines in a heavy geometric sans (oneNeo, fallback Manrope 800) with tight tracking: H1 65px/1.1 at -0.14rem, H2 49px, H3 37px; wrap one key phrase per headline in `<b>` colored `#59C1FF`. Body in Inter 16px. Primary buttons are black pills, 48px tall, white Inter 600 text; focus ring 3px `#59C1FF`. Product features use 24px-radius image cards beside text on a 16-column grid (max width 1680px, breakpoints 832/1088/1440px). Products are represented by sky blue `#33BBFF` rounded tiles with navy `#122733` line icons. No shadows. Dark mode is a black page with white text and `#2C2C2E` cards. Copy is short, upbeat and plain.

```css
:root {
  --brand-black: #121212;
  --brand-off-white: #F9F9F9;
  --brand-white: #FFFFFF;
  --brand-highlight: #59C1FF;
  --brand-sky: #33BBFF;
  --brand-navy-ink: #122733;
  --brand-graphite: #2C2C2E;
  --brand-dark-surface: #1F1F1F;
  --brand-grey-1: #D0D0D0;
  --brand-grey-3: #DCDCDC;
  --brand-grey-7: #EDEDED;
  --brand-text-muted: #8F8F8F;
  --brand-error: #F00000;
  --brand-font-display: "oneNeo", "Manrope", sans-serif;
  --brand-font: "Inter", system-ui, sans-serif;
  --brand-h1: 4.0625rem;
  --brand-h2: 3.0625rem;
  --brand-h3: 2.3125rem;
  --brand-h4: 1.75rem;
  --brand-radius-sm: 8px;
  --brand-radius-md: 16px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 9999px;
  --brand-max-width: 105rem;
  --brand-shimmer: linear-gradient(71deg, rgba(255,255,255,0) 25%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 75%);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by OnePay.

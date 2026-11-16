---
name: Acorns
slug: acorns
url: https://acorns.com
category: Finance
tagline: "Acorn green, charcoal pill buttons, bold Avenir Next and color-blocked hero slides."
updated: 2026-11-16
appStoreId: 883324671
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Acorns Green
    hex: "#74C947"
    role: Logo, primary pill buttons, main hero slide, app icon
  - name: Charcoal
    hex: "#191919"
    role: Headlines, secondary buttons, dark hero slides
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on green and charcoal
  - name: Early Purple
    hex: "#6944FF"
    role: Acorns Early and family products, carousel active dot
  - name: Moss
    hex: "#BCEAA3"
    role: Light green buttons and tints
  - name: Forest
    hex: "#0A250D"
    role: Money Manager hero slide background
  - name: Cream
    hex: "#FAF9F1"
    role: Warm hero and section background
  - name: Slate
    hex: "#363F41"
    role: Body text on light pages
  - name: Green Hover
    hex: "#70C244"
    role: Primary button hover
  - name: Purple Tint
    hex: "#CDC1FF"
    role: Light purple buttons and chips
  - name: Grey 50
    hex: "#F5F5F5"
    role: Quiet sections, dividers, inactive carousel dots
  - name: Mist
    hex: "#CCCFCF"
    role: Borders, disclosure text on dark
  - name: Grey 6F
    hex: "#6F6F6F"
    role: Secondary text
  - name: Deep Green
    hex: "#38860E"
    role: Positive figures, green text on light backgrounds
  - name: Jade
    hex: "#17A77B"
    role: Accent panels and gradients
fonts:
  display:
    family: "Avenir Next"
    fallback: "Nunito Sans"
    weights: [500, 600]
  body:
    family: "Avenir Next"
    fallback: "Nunito Sans"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 56, weight: 600, lineHeight: 1.14, tracking: "-0.01em" }
  - { role: Campaign Display, size: 92, weight: 500, lineHeight: 1, tracking: "0" }
  - { role: H2, size: 40, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: H3, size: 24, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 600, lineHeight: 1, tracking: "0" }
  - { role: Disclosure, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 10, md: 20, lg: 30, pill: 50 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 60, 80]
shadows:
  - { name: Card, value: "0 4px 12px rgba(0,0,0,0.11)" }
  - { name: Raised, value: "0 8px 24px rgba(0,0,0,0.11)" }
  - { name: Subtle, value: "0 2px 6px 0 rgba(0,0,0,0.05)" }
preview:
  bg: "#FFFFFF"
  surface: "#FAF9F1"
  text: "#191919"
  muted: "#6F6F6F"
  border: "#CCCFCF"
  accent: "#74C947"
  accentText: "#FFFFFF"
  radius: 20
  buttonStyle: pill
---

# Acorns

## 1. Visual Theme & Atmosphere

Acorns is cheerful and simple. The main brand moment is a big slab of acorn green `#74C947` with a charcoal headline and a black pill button, next to a phone showing the app. The homepage hero is a carousel where each slide owns a full background color (green, charcoal, purple, deep forest, cream) tied to a product. Below the hero, the site is white and cream with rounded cards, phone screens, and friendly icons.

What makes it recognisable:

- **One green.** `#74C947` is the logo, the app icon, the main CTA and the default hero color. It is a warm, slightly yellow green, not a fintech teal.
- **Pill buttons, 56px tall.** Every main CTA is a fully rounded pill (`border-radius: 50px`) with 16px/600 text and generous 45px side padding.
- **Color-blocked slides.** Products are color-coded: Invest and core in green, Acorns Early in purple `#6944FF`, Money Manager in forest `#0A250D`, campaigns in charcoal `#191919` or cream.
- **Avenir Next everywhere.** Friendly geometric sans at 500-600 for headlines. Campaign pages add Knockout Sumo, a heavy condensed uppercase face, for very large statements.
- **Rounded, soft cards.** 10-30px corners, light shadows, lots of white.

Mood words: friendly, optimistic, simple, encouraging, everyday.

## 2. Color Palette & Roles

Acorns doesn't expose CSS variables; the values below are the hardcoded colors on acorns.com.

| Name | Hex | Role |
|---|---|---|
| Acorns Green | `#74C947` | Logo, primary CTA, main hero slide, sticky header CTA |
| Green Hover | `#70C244` | Primary hover and focus |
| Deep Green | `#38860E` | Green text, positive values, icon strokes |
| Moss | `#BCEAA3` | Light green button (`.moss-cta`), tints |
| Jade | `#17A77B` | Accent panels |
| Forest | `#0A250D` | Money Manager slide |
| Charcoal | `#191919` | Headlines, secondary CTA, dark slides, active nav pills |
| Charcoal Hover | `#303030` | Secondary CTA hover |
| Slate | `#363F41` | Body text on long pages |
| Grey 6F | `#6F6F6F` | Secondary text |
| Mist | `#CCCFCF` | Borders; disclosures on dark at 50% |
| Grey 50 | `#F5F5F5` | Quiet section fill, dividers |
| Cream | `#FAF9F1` | Hero and section background |
| Early Purple | `#6944FF` | Acorns Early, purple CTA |
| Purple Hover | `#5036BA` | Purple CTA hover |
| Purple Tint | `#CDC1FF` | Light purple CTA |
| White | `#FFFFFF` | Page, text on dark |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Positive | `#38860E` | Gains, success text |
| Error | `#FF5A5A` | Errors and alerts |

### Dark slides

Charcoal `#191919` and forest `#0A250D` slides use white headlines, white or green pill buttons, and italic 12px disclosures in `rgba(204,207,207,0.5)`. A heavily blurred black band (`filter: blur(75px)`) sits under the phone mockup to ground it.

## 3. Typography

**Families:** Avenir Next (Linotype) for nearly all text, including Avenir Next Condensed for compact labels. Campaign headlines use the Knockout family (Hoefler&Co.), mainly Knockout Sumo and Junior Sumo, always uppercase.

**Licensing:** both are commercial. Free substitutes: **Nunito Sans** (closest proportions to Avenir Next) or Figtree; **Anton** for Knockout Sumo.

```css
font-family: 'Avenir Next', 'Nunito Sans', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
```

### Scale

| Role | Desktop | Mobile | Weight | Line height |
|---|---|---|---|---|
| Hero headline | 56px | 32px | 600 | 64px / 42px |
| Feature hero (wide slides) | up to 72px (`min(72px, 4vw)`) | 40px | 600 | 78px / 48px |
| Campaign display (Knockout Sumo, uppercase) | up to 92px (`min(6.5vw, 92px)`) | 32px | 500 | 1 |
| H1 (inner pages) | 50px | 36px | 600 | 1.2 |
| H2 | 40px | 30-32px | 500-600 | 48px / 42px |
| H3 | 24px | 20px | 600 | 1.3 (approximate) |
| Body large | 18px | 16px | 400 | 27px |
| Body | 16px | 14px | 400 | 1.5 |
| Button | 16px | 14px | 600 | 56px (button height) |
| Pill label | 14px | 11px | 500 | 19px |
| Disclosure | 12px | 8-10px | 400 italic | 18px |

### Rules

- Sentence case for headlines and buttons. Uppercase only for Knockout campaign lines and small eyebrows ("INVEST MY TIPS").
- Headlines are short and break over 2-3 lines on purpose ("Your money / on autopilot").
- Weight 600 for emphasis; avoid 700+ with Avenir Next.
- Figures in illustrations use tabular numbers; dollar amounts keep the "$" full size.

## 4. Logo & Brand Mark

The logo is a rounded acorn icon (cap with a short stem, nut below, separated by a thin gap) next to the lowercase wordmark "acorns" in a soft geometric sans, all in acorn green `#74C947`.

- **Color versions:** green on white (primary), white on green, white on charcoal or photos.
- **App icon:** white acorn on a green `#74C947` square.
- **Clear space:** about the cap's height on all sides (approximate).
- **Minimum size:** about 80px wide for the lockup on screen (the header uses about 97 x 26px).

Misuse:

- Do not capitalize the wordmark.
- Do not recolor the acorn purple or charcoal for product lines; product names are set as text next to it.
- Do not outline, tilt or add a shadow to the acorn.

## 5. Components

### Buttons (signature pill)

| Variant | Background | Text | Border | Radius | Height / padding |
|---|---|---|---|---|---|
| Primary (`.a5-cta`) | `#74C947` | `#FFFFFF` 16px/600 | none | 50px | 56px, 0 45px |
| Secondary | `#191919` | `#FFFFFF` | none | 50px | 56px, 0 45px |
| Purple | `#6944FF` | `#FFFFFF` | none | 50px | same |
| Purple tint | `#CDC1FF` | `#191919` | none | 50px | same |
| Moss | `#BCEAA3` | `#191919` | none | 50px | same |
| White (on dark) | `#FFFFFF` | `#191919` | none | 50px | same |
| Outline | `#FFFFFF` | `#191919` | 1px `#191919` | 50px | same |
| Sticky header CTA | `#74C947` | `#FFFFFF` 14px/600 | none | 50px | 39px, 0 15px |

States:

- Hover/active/focus: green `#70C244`, charcoal `#303030`, purple `#5036BA`, purple tint `#B8A7FF`, moss `#9EE179`, white `#F9F9F9`, outline border `#303030`.
- Transition: `background 300ms ease-in-out`; text links `color 300ms ease-in-out`.
- No outline on focus by default; add a 2px charcoal focus ring for accessibility.

```css
.acorns-cta {
  display: inline-block;
  height: 56px; line-height: 56px;
  padding: 0 45px;
  font: 600 16px 'Avenir Next', 'Nunito Sans', sans-serif;
  color: #fff;
  background: #74C947;
  border: 0;
  border-radius: 50px;
  text-decoration: none;
  transition: background 300ms ease-in-out;
}
.acorns-cta:hover { background: #70C244; }
```

### Hero carousel (signature)

- Full-width slides, each with its own background (`#74C947`, `#191919`, `#6944FF`, `#0A250D`, `#FAF9F1`, `#F4F2EE`).
- Copy on the left: optional eyebrow ("INVEST MY TIPS"), 56px headline, 18px body, pill CTA, italic disclosures.
- Phone mockup on the right, cropped at the bottom edge, with a blurred dark shadow band underneath.
- A small pill tag sits bottom-left of the slide (14px/500, padding 7px 20px 6px, radius 20px), naming the product ("Acorns Later", "Acorns Early").
- Pagination: 30 x 4px bars, radius 20px, inactive `#F5F5F5`, active `#6944FF`.

### Product switcher

"For You" / "For Your Family" toggles above a product carousel. The active nav item fills charcoal `#191919` with white text; inactive items are outlined pills. Each product panel has an H3 ("Acorns Invest"), a one-paragraph description and a "Learn more" button.

### Cards

- White on cream or grey, radius 20-30px, shadow `0 4px 12px rgba(0,0,0,0.11)` (raised `0 8px 24px rgba(0,0,0,0.11)`), padding 24-40px.
- Icon-led feature cards: 48-64px product icon at top, 20-24px/600 title, 16px body.
- Testimonial and award cards: laurel-style award text ("World's Top FinTech Companies of 2025" style), radius 10px.

### Navigation

- White sticky header with green logo left. Menu groups: "For You" (Invest, IRA, tips, checking, Money Manager, cashback) and "For Your Family" (UGMA/UTMA, Early), then "Plans & Pricing", "Our Pledge", "Learn", "Support".
- Dropdown items show a small product icon, a 16px/600 product line ("Invest for every day") and a 13-14px grey sub-line ("Brokerage account"), with "New" tags in green.
- Right side: "Log in" text link and a green "Get started" pill; on mobile a sticky "Get the app" bar.

### Inputs

Email and phone fields on campaign pages: 56px tall, radius 10px (approximate), 1px `#CCCFCF` border, 16px text, green border on focus, paired with a green pill submit button.

### Badges and tags

Rounded pills (radius 20px) at 12-14px/500 (fills approximate): "New" in green on moss, plan names on purple tint.

### Calculators and charts

Growth calculators (approximate) show a big green dollar figure, a slider with a green track and white knob, and a smooth green area chart.

## 6. Layout & Spacing

- **Container:** about 1200px content width (approximate), hero slides up to 1440px; side padding 20px mobile, 40-60px desktop.
- **Breakpoints:** 359, 767, 1024, 1200, 1440px (mobile, tablet, desktop, wide).
- **Spacing:** multiples of 4 and 10 (10, 20, 30, 40, 60, 80px are common); hero slide padding about 60px.
- **Sections:** 80-120px vertical spacing on desktop, 48-60px on mobile (approximate).
- **Density:** low. One headline, one paragraph and one button per block.

## 7. Depth, Elevation & Motion

- Soft, neutral shadows: `0 2px 6px rgba(0,0,0,0.05)` (subtle), `0 4px 12px rgba(0,0,0,0.11)` (card), `0 8px 24px rgba(0,0,0,0.11)` (raised).
- Phone mockups sit on a blurred black band (`blur(75px)`, 75% black) to add depth on colored slides.
- Motion: `background 300ms ease-in-out` for buttons, `opacity .3s ease` fades, slick carousels; the product nav animates items in with staggered `transform 600ms cubic-bezier(0.32,0,0.67,0)` delays (1120ms, 1200ms, 1280ms...).

## 8. Iconography & Imagery

- Product icons: rounded-square tiles in product colors with simple white glyphs (Invest, Later, Banking, Early), about 24px in menus and 46px as app-style tiles.
- Line icons (approximate): about 2px stroke, rounded caps, charcoal or green.
- Imagery: iPhone screens of the Acorns app (round-ups, portfolio, Money Manager split) and the Acorns debit card; warm, diverse lifestyle photos in circles ("bubbles").
- Illustrations: flat, rounded shapes in green, purple and cream.

## 9. Voice & Microcopy

Encouraging and plain-spoken. Short sentences about small steps adding up, with "automatically" doing a lot of work.

- Sentence case, contractions welcome ("Let's", "We'll").
- Hypothetical projections always carry the assumption right under them ("Assumes a hypothetical 8% annual rate of return.").
- Check any rates, matches or bonuses against the live site before using them.
- CTAs: "Get started", "Learn more", "Get the app", "Log in".

Sample strings:

- Hero: "Acorns helps you save and invest"
- Sub: "Grow your savings, invest your spare change, and build toward your future, automatically."
- Product: "Your money on autopilot"
- Family: "Smart money app and debit card for kids"

## 10. Do's and Don'ts

**Do**

- Use acorn green `#74C947` for the logo and main CTA, with white text.
- Make every CTA a 56px pill with 16px/600 text.
- Color-code products: green core, purple `#6944FF` for Early, forest `#0A250D` for Money Manager.
- Pair a short 2-3 line headline with a phone mockup.
- Keep cards rounded (20-30px) and shadows soft and neutral.
- Put disclosures in small italic text right under projections.

**Don't**

- Don't use square or small-radius buttons.
- Don't swap the green for a blue-green or neon green.
- Don't use the Knockout condensed face for body copy or long headlines.
- Don't capitalize "acorns" in the logo.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Acorns. Font: `'Avenir Next', 'Nunito Sans', Helvetica, sans-serif`. The hero is a full-width color block in acorn green `#74C947` with a charcoal `#191919` 56px/600 headline over 2-3 lines, 18px body, and a 56px-tall black pill button ("Get started", 16px/600 white, `border-radius: 50px`, `padding: 0 45px`, hover `#303030`), plus a phone mockup on the right with a blurred dark shadow beneath and italic 12px disclosures. Make the hero a carousel where other slides use charcoal `#191919`, purple `#6944FF` and forest `#0A250D` backgrounds with white text and white pills; pagination is 30 x 4px rounded bars with the active one purple. Below, use white and cream `#FAF9F1` sections, rounded 20-30px cards with `0 4px 12px rgba(0,0,0,0.11)` shadows, product icon tiles, and green pill CTAs (`#74C947`, hover `#70C244`). Header: green acorn logo left, product dropdowns with icon + title + grey sub-line, "Log in" link and a 39px green pill on the right. Transitions `background 300ms ease-in-out`.

```css
:root {
  --brand-green: #74C947;
  --brand-green-hover: #70C244;
  --brand-green-deep: #38860E;
  --brand-moss: #BCEAA3;
  --brand-forest: #0A250D;
  --brand-charcoal: #191919;
  --brand-charcoal-hover: #303030;
  --brand-slate: #363F41;
  --brand-muted: #6F6F6F;
  --brand-grey-50: #F5F5F5;
  --brand-cream: #FAF9F1;
  --brand-purple: #6944FF;
  --brand-purple-hover: #5036BA;
  --brand-purple-tint: #CDC1FF;
  --brand-font: 'Avenir Next', 'Nunito Sans', Helvetica, Arial, sans-serif;
  --brand-font-display: 'Knockout Sumo', 'Anton', 'Avenir Next', sans-serif;
  --brand-cta-height: 56px;
  --brand-cta-padding: 0 45px;
  --brand-radius-sm: 10px;
  --brand-radius-md: 20px;
  --brand-radius-lg: 30px;
  --brand-radius-pill: 50px;
  --brand-shadow-subtle: 0 2px 6px rgba(0,0,0,0.05);
  --brand-shadow-card: 0 4px 12px rgba(0,0,0,0.11);
  --brand-shadow-raised: 0 8px 24px rgba(0,0,0,0.11);
  --brand-transition: background 300ms ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Acorns.

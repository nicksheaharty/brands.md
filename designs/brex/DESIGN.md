---
name: Brex
slug: brex
url: https://brex.com
category: Finance
tagline: "Crisp white finance software with near-black ink, Inter type and one hot orange CTA."
updated: 2026-11-16
appStoreId: 1472905508
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Brex Orange
    hex: "#FF3D00"
    role: Primary call-to-action fill, brand accent
  - name: Ink
    hex: "#15191E"
    role: Logo, headings, nav text
  - name: White
    hex: "#FFFFFF"
    role: Page and nav background
  - name: Off White
    hex: "#FCFCFD"
    role: Text on orange, quiet surfaces
  - name: Orange Hover
    hex: "#FF6B18"
    role: Primary button hover
  - name: Orange Active
    hex: "#FF5900"
    role: Primary button pressed
  - name: Slate
    hex: "#60646C"
    role: Body and secondary text
  - name: Mist
    hex: "#F3F3F7"
    role: Section background, tab track
  - name: Grey
    hex: "#8B8D98"
    role: Captions, tertiary text
  - name: Placeholder
    hex: "#6F737B"
    role: Input placeholder
  - name: Focus Blue
    hex: "#006EF5"
    role: Focus ring (at 80% opacity), links in product
  - name: Night
    hex: "#000710"
    role: Dark section background
  - name: Success
    hex: "#0D9926"
    role: Positive states
  - name: Error
    hex: "#EE2929"
    role: Errors
  - name: Peach
    hex: "#FFBC96"
    role: Gradient accent in illustrations
  - name: Violet
    hex: "#3C16D5"
    role: Accent for charts and illustrations
fonts:
  display:
    family: "Inter Display"
    fallback: "Inter"
    weights: [500, 600]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "Space Mono"
    fallback: "Space Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 72, weight: 500, lineHeight: 1.05, tracking: "-0.03em" }
  - { role: Heading 1, size: 48, weight: 500, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Heading 2, size: 36, weight: 500, lineHeight: 1.15, tracking: "-0.02em" }
  - { role: Heading 3, size: 24, weight: 500, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: UI, size: 14, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 400, lineHeight: 1.3, tracking: "0.04em" }
radii: { sm: 6, md: 10, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80, 120]
shadows:
  - { name: Hairline, value: "0 1px 1px rgba(0,0,0,0.04)" }
  - { name: Card, value: "0 5px 10px rgba(0,0,0,0.1)" }
  - { name: Popover, value: "0 4px 16px rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F3F7"
  text: "#15191E"
  muted: "#60646C"
  border: "#E4E4EA"
  accent: "#FF3D00"
  accentText: "#FCFCFD"
  radius: 10
  buttonStyle: solid
---

# Brex

## 1. Visual Theme & Atmosphere

Brex sells corporate cards, expense management, travel, bill pay and business banking to startups and enterprises. Its site looks like a well-made SaaS product: white background, near-black ink (`#15191E`), Inter everywhere, and one loud colour, Brex Orange (`#FF3D00`), used almost only for the main call to action.

What makes it recognisable:

- **The orange button.** "Get started" is a solid `#FF3D00` button with 8-10px corners. It is the brightest thing on every page.
- **Product, not people.** Sections are built around crisp product UI: card controls, budgets, expense lists, travel bookings, the mobile app.
- **Inter, set tight.** Large Inter Display headlines at medium weight with negative tracking; small, calm body text in slate `#60646C`.
- **The Brex mark.** A geometric, rounded "B" made of two offset rectangles joined by a slanted step, echoed in the card design.
- **Quiet chrome.** 60px white nav, hairline borders `rgba(66,87,138,0.15)`, grey `#F3F3F7` bands, few shadows.
- **Occasional dark sections.** Near-black `#000710` panels with peach-to-cyan gradient accents for enterprise or AI features.

Density is medium-high: grids of four product tiles, tabbed feature walkthroughs, and plenty of small UI copy.

Mood words: sharp, efficient, premium, modern, controlled.

## 2. Color Palette & Roles

Values from brex.com inline styles (Emotion CSS), read 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Brex Orange | `#FF3D00` | Primary button fill and border |
| Orange Hover | `#FF6B18` | Primary hover |
| Orange Active | `#FF5900` | Primary pressed |
| Ink | `#15191E` | Logo, headings, nav |
| Ink 2 | `#101317` | Tab hover base (`rgba(16,19,23,0.05)`) |
| Slate | `#60646C` | Body text |
| Placeholder | `#6F737B` | Placeholder text |
| Grey | `#8B8D98` | Captions |
| Grey Light | `#B9BBC6` | Disabled |
| Mist | `#F3F3F7` | Section background |
| Snow | `#F9F9FB` | Card fill |
| Off White | `#FCFCFD` | Text on orange |
| White | `#FFFFFF` | Page |
| Border | `rgba(66,87,138,0.15)` | Outlines, button borders |
| Border hover | `rgba(97,106,136,0.30)` | Input hover |
| Focus | `rgba(0,110,245,0.80)` | Focus ring |
| Night | `#000710` | Dark sections |
| Navy | `#001D3E` | Dark gradients |

### Status and accent tints

| Name | Strong | Tint |
|---|---|---|
| Green | `#0D9926` | `#D1F4D2` / `#F0FDF1` |
| Blue | `#006EF5` | `#D5E8FB` / `#ECF4FD` |
| Violet | `#3C16D5` | `#E6E2FF` / `#F4F3FF` |
| Red | `#EE2929` | `#FFE3E6` |
| Amber | `#CE9700` | `#FCEED6` / `#FDF9EC` |
| Magenta | `#9A1E9F` | `#F2D0F4` |

Gradient accent (dark sections): peach `#FFBC96` to cyan, defined as an SVG `linearGradient` named "peach-cyan".

## 3. Typography

- **Inter** for body and UI, **Inter Display** for headlines (both free; Inter Display is the optical-size display cut of Inter).
- **Space Mono** for small technical labels and numbers in some modules.
- **Flecha** and **Bronzea** (licensed serifs) appear in editorial and campaign pages only.

Weights are set with `font-variation-settings: "wght" 500` on many elements.

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display | 72px | 500 (approx.) | 1.05 |
| Heading 1 | 48px | 500 | 1.1 |
| Heading 2 | 36px | 500 | 1.15 |
| Heading 3 | 30px / 24px | 500 | 1.2-1.25 |
| Lead | 20px | 400 | 1.5 |
| Body | 16px | 400 | 1.5 |
| UI / button | 14px | 500 | 1.4 |
| Caption | 12px | 400 | 1.3 |

Rules:

- Headings use medium (500), never heavy bold; `text-wrap: balance` on h1.
- Negative tracking on large sizes (around -0.02 to -0.03em, approximate).
- Sentence case with a full stop on many headlines ("Finance built for speed and control.").
- Tabular numbers in tables and amounts.

## 4. Logo & Brand Mark

The Brex logo is the **mark** (a horizontal shape like two offset rounded rectangles joined by a slanted notch, suggesting a card swipe or a "B" laid on its side) and the **"Brex"** wordmark in a clean geometric sans.

- The mark alone is the app icon and favicon.
- Colors: Ink `#15191E` on white, white on Ink or Night, and orange accents only around the logo, not inside it.
- Clear space: the mark's height on all sides.
- Minimum size: 78px wide for the lockup (the nav renders it 78x20), 16px for the mark.
- Don't: recolor the logo orange, add effects, or stretch the mark.

`logo.svg` is the header lockup. `icon.svg` is the white mark on Ink.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 40px; min-width: 88px; padding: 0 16px;
  border-radius: 8px; border: 1px solid rgba(66,87,138,0.15);
  font: 500 14px/1 Inter, sans-serif; white-space: nowrap;
  transition: background-color 200ms cubic-bezier(0, 0, 0.38, 0.9);
}
.btn--primary { background: #FF3D00; border-color: #FF3D00; color: #FFFFFF; }
.btn--primary:hover { background: #FF6B18; }
.btn--primary:active { background: #FF5900; }
.btn--secondary { background: #FFFFFF; color: #15191E; }
.btn--secondary:hover { background: rgba(16,19,23,0.05); }
.btn--secondary:active { background: rgba(16,19,23,0.07); }
.btn--large { height: 48px; padding: 0 24px; border-radius: 10px; font-size: 16px; }
.btn:focus-visible { outline: 2px solid rgba(0,110,245,0.80); outline-offset: 2px; }
```

Header pairs a secondary "See a demo" with a primary "Get started". Hero pairs "Get started" with "See Brex in action".

### Inputs

```css
.input {
  height: 40px; padding: 0 12px; border-radius: 8px;
  border: 1px solid rgba(66,87,138,0.15); background: #FFFFFF;
  font: 400 14px Inter, sans-serif; color: #15191E;
}
.input::placeholder { color: #6F737B; }
.input:hover { border-color: rgba(97,106,136,0.30); }
.input:focus-within { box-shadow: 0 0 0 1px rgba(0,110,245,0.80); }
```

Email capture uses an input plus orange button in one row.

### Cards

- Product tiles: white or `#F9F9FB`, 12px radius, 1px border `rgba(66,87,138,0.15)`, 24px padding, title 20-24px 500, one-line description in slate, product screenshot below.
- Hover lift with `0 5px 10px rgba(0,0,0,0.1)` (approximate usage).

### Navigation

- 60px tall white bar, max-width 1680px, 24px side padding.
- Logo left, menus (Products, Solutions, Resources, Customers, Pricing) with 6px radius hover pills, "Sign in" text link, secondary + primary buttons right.
- Dropdown chevrons are small stroked arrows (`stroke #15191E`, 1.9px, round caps).

### Tabs

Feature walkthroughs use horizontal tabs: 6-8px radius items, hover `rgba(16,19,23,0.05)`, active `rgba(16,19,23,0.07)` with ink text, inset 2px blue focus ring.

### Badges

Small pills (12px text, 4px 8px padding) using the status tint pairs: green on `#D1F4D2`, blue on `#D5E8FB`.

### Tables and lists

Expense lists: 48-56px rows, merchant logo avatar (32px, 8px radius), name and category, right-aligned amount, policy status badge. Hairline dividers.

### Footnote markers

Rates and claims carry a dagger (`3.94%†`) linking to disclosures at the footer. Keep the marker small and superscript.

## 6. Layout & Spacing

- Max widths: 1680px for nav, about 1200-1280px for content (approximate).
- Breakpoints from CSS: 767px, 1023px and 1279px.
- Section padding: 80px (`--padding: 80px`) desktop, 64px tablet, 48px mobile (approximate).
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120.
- Sticky offset: 60px nav + 24px.
- Grids: 4-up product tiles, 3-up solution cards, 2-column feature rows (copy and screenshot).

## 7. Depth, Elevation & Motion

- Flat by default; borders do most of the separation.
- Shadows: hairline `0 1px 1px rgba(0,0,0,0.04)`, card `0 5px 10px rgba(0,0,0,0.1)`, popover `0 4px 16px rgba(0,0,0,0.12)`, nav divider `0 1px 0 0 rgba(66,87,138,0.15)`.
- Easing: `cubic-bezier(0, 0, 0.38, 0.9)` on hovers; 200ms.
- Larger CTA buttons use `transition: all 0.5s ease`.
- Product screenshots fade and slide up 16px on scroll.

## 8. Iconography & Imagery

- Icons: simple stroked icons, 1.5-2px, rounded caps, 16-24px, in ink or slate.
- Imagery: product screenshots on soft grey or gradient backdrops, the Brex card rendered in matte black or orange, phone mockups.
- Customer logos in monochrome rows ("Trusted by 35,000+ top companies", read on the site 2026-11-16).
- Dark sections use peach-cyan gradient strokes and glows.

## 9. Voice & Microcopy

Confident and concise, aimed at finance leaders and founders. Short declarative headlines, often with a period.

Sample strings (brex.com, read 2026-11-16):

- Hero: "Finance built for speed and control."
- Sub: "Modern cards, banking, expenses, accounting, and more"
- Section: "The card is just the start."
- Tiles: "Corporate cards", "Expense management", "Travel", "Bill pay", "Banking and treasury"
- Feature: "Control spend before it happens."
- CTAs: "Get started", "See a demo", "See Brex in action", "Learn more"

Avoid exclamation marks. Name the outcome (control, speed, automation) in a few words.

## 10. Do's and Don'ts

**Do**

- Use orange `#FF3D00` for the single primary action.
- Keep everything else ink, slate and white.
- Use Inter with medium-weight, tightly tracked headlines.
- Use 8-12px radii and hairline blue-grey borders.
- Lead with product screenshots.

**Don't**

- Don't use orange for text, large backgrounds or the logo.
- Don't use pill-shaped CTAs; Brex buttons are rounded rectangles.
- Don't add heavy drop shadows or glossy effects.
- Don't use bold 700+ headlines.
- Don't write long, hedged headlines.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Brex. White page, ink `#15191E` headings, slate `#60646C` body, captions `#8B8D98`, grey bands `#F3F3F7`. Font Inter (Inter Display for headlines): headlines weight 500 with -0.02em tracking (72/48/36px), body 16px. One primary action per view: a solid Brex Orange `#FF3D00` button (hover `#FF6B18`, active `#FF5900`), white text, 40-48px tall, 8-10px radius. Secondary buttons are white with 1px `rgba(66,87,138,0.15)` border and ink text, hover `rgba(16,19,23,0.05)`. Inputs: 40px, 8px radius, same border, focus ring `rgba(0,110,245,0.8)`. Nav is 60px white with a hairline divider. Product tiles: 12px radius, hairline border, 24px padding, screenshot below. Mostly flat; shadow `0 5px 10px rgba(0,0,0,0.1)` for hover. Easing `cubic-bezier(0,0,0.38,0.9)`. Copy is short and declarative.

```css
:root {
  --brand-orange: #FF3D00;
  --brand-orange-hover: #FF6B18;
  --brand-orange-active: #FF5900;
  --brand-ink: #15191E;
  --brand-slate: #60646C;
  --brand-grey: #8B8D98;
  --brand-placeholder: #6F737B;
  --brand-mist: #F3F3F7;
  --brand-snow: #F9F9FB;
  --brand-white: #FFFFFF;
  --brand-night: #000710;
  --brand-border: rgba(66,87,138,0.15);
  --brand-border-hover: rgba(97,106,136,0.30);
  --brand-focus: rgba(0,110,245,0.80);
  --brand-success: #0D9926;
  --brand-error: #EE2929;
  --brand-blue: #006EF5;
  --brand-violet: #3C16D5;
  --brand-font: "Inter", -apple-system, Helvetica, Arial, sans-serif;
  --brand-font-display: "Inter Display", "Inter", sans-serif;
  --brand-font-mono: "Space Mono", monospace;
  --brand-radius-sm: 6px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-shadow-card: 0 5px 10px rgba(0,0,0,0.1);
  --brand-shadow-popover: 0 4px 16px rgba(0,0,0,0.12);
  --brand-ease: cubic-bezier(0, 0, 0.38, 0.9);
  --brand-nav-height: 60px;
}
```

---

Values are observed from the public brex.com page styles on 2026-11-16; headline weights, content width and section padding are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Brex.

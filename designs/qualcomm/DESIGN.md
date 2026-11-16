---
name: Qualcomm
slug: qualcomm
url: https://qualcomm.com
category: Hardware
tagline: "Clean white chip-maker pages, one electric Qualcomm blue, and a Snapdragon red sub-brand."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Qualcomm Blue
    hex: "#3253DC"
    role: Logo color, classic brand blue
  - name: Action Blue
    hex: "#2A2AEA"
    role: Primary CTA fill, links, focus ring on qualcomm.com (qualcomm-blue-default)
  - name: Blue Dark Accent
    hex: "#1C38A6"
    role: CTA hover, pressed states
  - name: Snapdragon Red
    hex: "#E71324"
    role: Snapdragon sub-brand accent and CTA color
  - name: Rich Black
    hex: "#0A0A0A"
    role: Headings, tags, primary text on light
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Ghost White
    hex: "#FAFBFC"
    role: Secondary section background
  - name: White Smoke
    hex: "#F5F6F7"
    role: Tertiary background, table zebra rows
  - name: Eerie Black
    hex: "#151516"
    role: Dark-mode page background, footer
  - name: Charleston Green
    hex: "#202021"
    role: Dark-mode raised surface
  - name: Neutral 600
    hex: "#717171"
    role: Secondary text, disabled CTA text
  - name: Neutral 300
    hex: "#BBBBBB"
    role: Borders, disabled outlines
  - name: Nickel
    hex: "#E9EBEE"
    role: Dividers, card outlines
  - name: Duke Blue
    hex: "#00009D"
    role: Rich-text link hover
  - name: Dragonwing Purple
    hex: "#31017D"
    role: Dragonwing (industrial/IoT) sub-brand accent
  - name: Lifecycle Green
    hex: "#368637"
    role: Active and In production part status
fonts:
  display:
    family: "Qualcomm Next"
    fallback: "Manrope"
    weights: [400, 600]
  body:
    family: "Roboto Flex"
    fallback: "Roboto Flex"
    weights: [400, 500, 600]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 48, weight: 600, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading L, size: 36, weight: 600, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading M, size: 28, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.33, tracking: "0.02em" }
radii: { sm: 4, md: 8, lg: 9, pill: 9999 }
spacing: [4, 8, 16, 24, 48, 60, 96]
shadows:
  - { name: Hairline, value: "0 1px 2px rgba(0,0,0,0.2)" }
  - { name: CTA hover, value: "0 12px 12px -8px rgba(0,0,0,0.24)" }
  - { name: Card hover, value: "0 16px 16px -4px rgba(0,0,0,0.24)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F6F7"
  text: "#0A0A0A"
  muted: "#717171"
  border: "#E9EBEE"
  accent: "#2A2AEA"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Qualcomm

## 1. Visual Theme & Atmosphere

qualcomm.com reads like a well-kept engineering catalogue with a consumer-facing front door. Pages are mostly white with near-black type, large product and lifestyle photography, and one saturated blue that does all the interactive work. Nothing is decorative for its own sake: thin dividers, small 4px corners on buttons, 8px on cards.

The site is built on a themed design system with four brand themes switched by a body class: `brand-theme qualcomm`, `snapdragon`, `dragonwing` and `dragonfly`. Each theme swaps the brand color and keeps the same layout and type. Every theme also ships a light and a dark mode (`light-mode` / `dark-mode`), so whole sections can flip to near-black `#151516` with white text.

What makes it recognisable:

- **One blue.** Qualcomm Blue in the logo (`#3253DC`) and a slightly more electric action blue (`#2A2AEA`) on buttons and links. Everything else is black, white and grey.
- **Two fonts with clear jobs.** The proprietary Qualcomm Next for brand headlines and Roboto Flex for everything functional (nav, body, specs, tables).
- **Spec-sheet density below the fold.** Product pages turn into long lists of parts, lifecycle badges, downloadable documents and filters.
- **Sub-brands as color swaps.** Snapdragon pages use red `#E71324`; Dragonwing (industrial and networking) uses deep purple and orange.
- **Flat, quiet chrome.** Shadows appear only on hover.

Mood words: technical, confident, clean, global, engineered.

## 2. Color Palette & Roles

Values below come from the live CSS custom properties on qualcomm.com (`--qualcomm-blue-default`, `--theme-*`, `--cta-*`).

| Name | Hex | Role |
|---|---|---|
| Qualcomm Blue | `#3253DC` | Logo, legacy brand blue, "show more" links on product specs |
| Action Blue | `#2A2AEA` | `--qualcomm-blue-default`: primary CTA fill, link, focus ring, checkbox |
| Blue Dark Accent | `#1C38A6` | `--qualcomm-blue-dark-accent`: CTA hover |
| Blue Dark | `#2849D2` | Brand blue in dark mode |
| Blue Light | `#2F87FF` | Highlights, data-viz, icons on dark |
| Theme Blue | `#4D95F7` | Links and icons in dark mode |
| Blue 100 | `#DFE5FF` | Info fills, selected rows |
| Duke Blue | `#00009D` | Rich-text link hover (light) |
| Royal Blue | `#4161E7` | Rich-text link hover (dark) |
| Rich Black | `#0A0A0A` | Headings, tag text |
| Black 95% | `rgba(0,0,0,0.95)` | Primary text |
| Black 55% | `rgba(0,0,0,0.55)` | Secondary text |
| Black 40% | `rgba(0,0,0,0.40)` | Disabled text |
| Black 15% | `rgba(0,0,0,0.15)` | Borders |
| White | `#FFFFFF` | Background 1 |
| Ghost White | `#FAFBFC` | Background 2 |
| White Smoke | `#F5F6F7` | Background 3 |
| Nickel | `#E9EBEE` | Dividers |
| Eerie Black | `#151516` | Dark background 1, footer |
| Charleston Green | `#202021` | Dark background 2 |
| Jet Black | `#2A2A2B` | Dark background 3, table header (dark) |

### Sub-brand accents

| Sub-brand | Primary | Supporting |
|---|---|---|
| Snapdragon | Red `#E71324` | Hover red `#B8000F`, purple `#8E38B9` (gaming/Elite moments) |
| Dragonwing | Purple `#31017D` | Violet `#5B0CD9`, orange `#FF5F00`, amber `#FF8F29` |
| Qualcomm | Action Blue `#2A2AEA` | Bliss blue `#3500AC`, power purple `#6614B9` |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Active / In production | `#368637` | Part lifecycle badge |
| Sampling | `#EEB204` | Part lifecycle badge |
| Not for new design | `#FE8A0E` | Part lifecycle badge |
| End of life | `#E01B32` | Part lifecycle badge, errors |
| Success | `#16A34A` on `#F0FDF4` | Form confirmations |

### Dark mode

Dark mode is a first-class theme, not a page-level toggle. Inside `.dark`, backgrounds step `#151516` → `#202021` → `#2A2A2B`, text uses white at 95% / 80% / 55%, borders become white at 15%, and the brand blue shifts to `#2849D2` for fills and `#4D95F7` for text links. CTAs invert: neutral buttons become white with black text.

## 3. Typography

- **Qualcomm Next** (proprietary): brand display face, loaded from Qualcomm's asset CDN in Thin 100, Regular 400 and Medium 600 (plus italics). Geometric, slightly squared, with open apertures. Used for hero headlines and big statements.
- **Roboto Flex** (Google Fonts, variable): the workhorse for nav, body, buttons, spec tables, forms.
- **Roboto Mono**: code snippets, part numbers in developer docs.

```css
--font-familiy-brand: "QualcommNext", Arial, sans-serif; /* sic, Qualcomm's token name */
--font-family-roboto: "Roboto Flex", Arial, sans-serif;
```

Qualcomm Next is not licensed for reuse. Fall back to **Manrope** 600 for display (close geometry) and keep Roboto Flex for body.

### Scale (desktop, approximate from the CSS size frequency)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 48px (42 on smaller desktop) | 600 Qualcomm Next | 1.1 | -0.01em |
| Heading L | 36px | 600 | 1.15 | -0.01em |
| Heading M | 28-32px | 600 | 1.2 | 0 |
| Heading S | 20-24px | 600 | 1.3 | 0 |
| Lead | 18px | 400 Roboto Flex | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small / nav | 14px | 400-500 | 1.43 | 0 |
| Caption / tag | 12px | 500 | 1.33 | 0.02em |

Mobile: hero drops to about 32-36px, headings step down one level.

### Rules

- Sentence case for headings and CTAs ("Explore Snapdragon", "Contact us").
- Product names keep their trademark casing: "Snapdragon X Elite", "Snapdragon 8 Elite", "Qualcomm AI Hub".
- Use tabular figures for spec tables and part numbers.
- Keep weights at 400 and 600; the brand rarely goes to 700.

## 4. Logo & Brand Mark

The Qualcomm logo is a custom lowercase-style wordmark "Qualcomm" in Qualcomm Blue, with the distinctive Q whose tail cuts through the bowl. There is no separate symbol; the Q is used alone only for favicons and avatars.

- **Colors:** blue `#3253DC` on white (primary), white on blue, white on black, black on white for single color.
- **Clear space:** at least the cap height of the Q on all sides (approximate).
- **Minimum size:** about 80px wide on screen (approximate).
- **Snapdragon:** a separate lockup: a red circular "S" swirl mark plus the "Snapdragon" wordmark in black or white. Treat it as its own brand; do not combine it with the Qualcomm wordmark except in the "Qualcomm Snapdragon" endorsement line.

Misuse: do not retype the wordmark, add gradients, outline it, or recolor it with sub-brand red or purple.

## 5. Components

### Buttons ("content-driven CTA")

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Fill (primary) | `#2A2AEA` | `#FFFFFF` | none | 4px |
| Fill hover | `#1C38A6` | `#FFFFFF` | none | 4px + hover shadow |
| Outline | transparent | `#2A2AEA` | 1px `#2A2AEA` | 4px |
| Outline hover | `rgba(0,0,0,0.05)` | `#1C38A6` | 1px `#1C38A6` | 4px |
| Text link CTA | none | `#2A2AEA` + chevron | none | 0 |
| Disabled | transparent | `#717171` | 1px `#BBBBBB` | 4px |
| Snapdragon fill | `#E71324` | `#FFFFFF` | none | 4px; hover `#B8000F` |

```css
.cta-fill {
  display: inline-flex; align-items: center; column-gap: 4px;
  font: 500 16px/1 "Roboto Flex", Arial, sans-serif;
  padding: 12px 24px;            /* approximate */
  background: #2A2AEA; color: #fff; border-radius: 4px;
  transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
}
.cta-fill:hover {
  background: #1C38A6;
  box-shadow: 0 12px 12px -8px rgba(0,0,0,0.24);
}
.cta-fill:focus-visible { box-shadow: 0 0 0 2px #2A2AEA; outline: 2px solid #fff; }
```

The 700ms transition is real and slow; hover feels like a gentle lift rather than a snap.

### Navigation

- White top bar, about 64px, Qualcomm logo left, 14-16px Roboto Flex items ("Products", "Solutions", "Developer", "Support", "Company").
- Mega menu panels drop full-width with columns of links and a featured image tile; 1px `rgba(0,0,0,0.08)` separators.
- Secondary sticky sub-nav on product pages with jump links; active link gets a 2px blue underline (`--jumplinks-highlight-border`).

### Cards

- Story/news cards: image on top (16:9), 8px radius, 1px `#D9D9D9` border in light mode (`#565656` in dark), 24px padding, tag chip, 20px/600 title, 14px date in `#717171`.
- Hover: `0 16px 16px -4px rgba(0,0,0,0.24)` and slight image zoom.

### Tags and pills

- Tags: 12px/500, 4px radius, `#0A0A0A` text on `#F5F6F7`; visited tags turn electric purple `#883DF8`.
- Featured pill: blue `#2A2AEA` fill with white 12px text, pill radius.
- Lifecycle badges: small dot plus label in the semantic color.

### Tables (signature on product pages)

- Header row `#EDF0F2` (light) or `#2A2A2B` (dark), 14px/600.
- Body rows 14px/400, 12-16px vertical padding, 1px `#E9EBEE` dividers, part numbers in Roboto Mono.

### Forms

- Inputs 40-44px tall, 1px `rgba(0,0,0,0.15)` border, 4px radius, 14-16px text.
- Focus: border and 2px ring in `#2A2AEA`.
- Checkboxes fill with action blue.

### Modals and media

Video modals sit on `rgba(0,0,0,0.8)` scrims with an 8px-radius frame. Carousels use round 40px arrow buttons that fill white on hover.

## 6. Layout & Spacing

- **Spacing tokens:** `--padding-xxs 4`, `xs 8`, `s 16`, `m 24`, `l 48`, `xl 60`, `xxl 96` px.
- **Grid:** 12 columns (AEM grid) inside a max width of about 1440px, content commonly 1200-1280px (approximate).
- **Gutters:** 16px mobile, 24px tablet, 32px+ desktop (approximate).
- **Section spacing:** 60-96px between sections on desktop.
- **Breakpoints:** about 768, 1024 and 1440px (approximate).
- **Density:** airy marketing heroes, then dense spec tables and filters on product and developer pages.

## 7. Depth, Elevation & Motion

- Default state is flat. Borders and background steps (`#FFFFFF` → `#FAFBFC` → `#F5F6F7`) separate regions.
- Hairline shadow: `0 1px 2px rgba(0,0,0,0.2)` for sticky bars.
- Hover elevation: `0 12px 12px -8px rgba(0,0,0,0.24)` on CTAs, `0 16px 16px -4px rgba(0,0,0,0.24)` on cards.
- Easing `cubic-bezier(0.4, 0, 0.2, 1)`, 700ms on CTAs, 200-300ms on menus (approximate).
- Hero video loops and slow image zooms; respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** line icons, 1.5-2px stroke, 24px grid, square ends, in black or blue. Chevron arrows on text CTAs.
- **Photography:** bright, real-world scenes showing devices in use (phones, laptops, cars, XR headsets), plus macro shots of chips with soft blue or red rim lighting.
- **Chip renders:** Snapdragon packages shown as glossy black squares with a red or gold edge glow.
- **Illustration:** minimal; diagrams are flat block schematics in blue and grey.

## 9. Voice & Microcopy

Clear and engineering-led, with a forward-looking headline on top and specifics below.

- Headline style: short claims about AI, connectivity and performance per watt.
- CTAs (approximate): "Learn more", "Explore products", "Contact us", "View documentation", "Download".
- Product detail is precise: process node, core counts, modem class, exactly as published on the spec page.

Sample strings (the first is the live page title; the others show the pattern and are approximate):

- "Intelligent computing everywhere"
- "Explore Snapdragon X Series"
- "Find a part number"
- Status: "Active", "Sampling", "Not recommended for new design", "End of life"

## 10. Do's and Don'ts

**Do**

- Keep pages white with near-black text and one blue for actions.
- Use Qualcomm Next (or Manrope) only for large headlines; Roboto Flex everywhere else.
- Use 4px button radius and 8px card radius.
- Swap the accent to Snapdragon red only on Snapdragon pages.
- Show real devices and chips.

**Don't**

- Don't mix sub-brand colors on one page.
- Don't put gradients on buttons or the logo.
- Don't use heavy drop shadows at rest.
- Don't use pill buttons for primary CTAs.
- Don't invent spec numbers; copy them from the product page.

## 11. Agent Prompt Guide

> Build this UI in the style of Qualcomm. White page `#FFFFFF`, secondary bands `#F5F6F7`, text `#0A0A0A` with secondary at `rgba(0,0,0,0.55)`. Headlines in "Qualcomm Next" (fallback Manrope) weight 600, 36-48px, tight leading; everything else in Roboto Flex 400/500, 16px body. Primary buttons: `#2A2AEA` fill, white 16px/500 text, 4px radius, 12px 24px padding, hover `#1C38A6` with shadow `0 12px 12px -8px rgba(0,0,0,0.24)` over 700ms `cubic-bezier(0.4,0,0.2,1)`. Outline buttons: 1px blue border, blue text. Cards: 8px radius, 1px `#D9D9D9` border, image on top, 12px tag chip, 20px/600 title. Spec tables with `#EDF0F2` header and 1px `#E9EBEE` rules. Dark sections use `#151516` with white text and blue `#4D95F7` links. For Snapdragon pages swap the accent to `#E71324` (hover `#B8000F`).

```css
:root {
  --brand-blue-logo: #3253DC;
  --brand-blue: #2A2AEA;
  --brand-blue-hover: #1C38A6;
  --brand-blue-dark-mode: #2849D2;
  --brand-blue-link-dark: #4D95F7;
  --brand-snapdragon-red: #E71324;
  --brand-snapdragon-red-hover: #B8000F;
  --brand-text: #0A0A0A;
  --brand-text-secondary: rgba(0,0,0,0.55);
  --brand-text-disabled: rgba(0,0,0,0.40);
  --brand-bg: #FFFFFF;
  --brand-bg-2: #FAFBFC;
  --brand-bg-3: #F5F6F7;
  --brand-border: #E9EBEE;
  --brand-neutral-600: #717171;
  --brand-neutral-300: #BBBBBB;
  --brand-dark-bg: #151516;
  --brand-dark-surface: #202021;
  --brand-dark-surface-2: #2A2A2B;
  --brand-success: #368637;
  --brand-error: #E01B32;
  --brand-font-display: "QualcommNext", "Manrope", Arial, sans-serif;
  --brand-font: "Roboto Flex", Arial, sans-serif;
  --brand-font-mono: "Roboto Mono", ui-monospace, Menlo, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-shadow-cta: 0 12px 12px -8px rgba(0,0,0,0.24);
  --brand-shadow-card: 0 16px 16px -4px rgba(0,0,0,0.24);
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --brand-space-s: 16px;
  --brand-space-m: 24px;
  --brand-space-l: 48px;
  --brand-space-xxl: 96px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Qualcomm.

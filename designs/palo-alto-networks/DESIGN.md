---
name: Palo Alto Networks
shortName: Palo Alto
slug: palo-alto-networks
url: https://paloaltonetworks.com
category: Developer
tagline: "Charcoal and white enterprise security with a hot orange chevron and pill CTAs."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Cyber Orange
    hex: "#FA582D"
    role: Brand color, logo mark, primary button fill, highlights
  - name: Charcoal
    hex: "#141414"
    role: Logo wordmark, headings, body text, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Strata Yellow
    hex: "#FFCB06"
    role: Strata (network security) platform accent
  - name: Prisma Cyan
    hex: "#00C0E8"
    role: Prisma (cloud and SASE) platform accent
  - name: Cortex Green
    hex: "#00CC66"
    role: Cortex (security operations) platform accent
  - name: Orange Light
    hex: "#F76A43"
    role: Default pill button fill, hover tints
  - name: Unit 42 Rust
    hex: "#C84727"
    role: Unit 42 threat research accent
  - name: Identity Blue
    hex: "#265BFF"
    role: Identity security platform accent
  - name: Warm Grey
    hex: "#F4F4F2"
    role: Light section and card background
  - name: Mid Grey
    hex: "#5F5F5F"
    role: Secondary text
  - name: Rule Grey
    hex: "#D8D8D8"
    role: Borders and dividers
  - name: Gradient Gold
    hex: "#FFC328"
    role: End stop of the orange-to-gold brand gradient
fonts:
  display:
    family: "TT Hoves"
    fallback: "Figtree"
    weights: [500, 600, 700]
  body:
    family: "TT Hoves"
    fallback: "Figtree"
    weights: [400, 500, 600]
  mono:
    family: "SFMono-Regular"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 72, weight: 500, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: H2, size: 64, weight: 500, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: H3, size: 56, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: H4, size: 24, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 14, weight: 600, lineHeight: 1.4, tracking: "0.02rem" }
  - { role: Eyebrow, size: 12, weight: 600, lineHeight: 1.3, tracking: "0.08em" }
radii: { sm: 4, md: 8, lg: 16, pill: 36 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 4px 12px rgba(0,0,0,0.05)" }
  - { name: Raised, value: "0 12px 24px rgba(0,0,0,0.08)" }
  - { name: Overlay, value: "0 8px 20px 0 rgba(0,0,0,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F2"
  text: "#141414"
  muted: "#5F5F5F"
  border: "#D8D8D8"
  accent: "#FA582D"
  accentText: "#141414"
  radius: 36
  buttonStyle: pill
---

# Palo Alto Networks

## 1. Visual Theme & Atmosphere

Palo Alto Networks looks like a security vendor that wants to feel calm rather than alarming. The base is white and near-black (`#141414`), with a single hot orange (`#FA582D`) that appears in the logo chevrons, primary buttons and small highlights. Everything else is product-color coding: yellow for Strata, cyan for Prisma, green for Cortex, rust for Unit 42.

What makes it recognisable:

- **The chevron mark.** Three interlocking orange bars that form a stylised arrow. It is the only brand illustration that never changes.
- **Charcoal, not navy.** Text and dark sections are a neutral `#141414`. There is no blue corporate tint, which sets it apart from most enterprise security brands.
- **Pill buttons with an arrow.** Every call to action is a fully rounded pill (2.25rem radius) with a small right arrow icon.
- **Platform color coding.** Each product family owns one accent. On a product page the primary button, gradient outline and icon color all switch to that family's color via a `data-type` attribute.
- **Large, medium-weight headlines.** TT Hoves at weight 500, fluid from 32px on mobile up to 72px on large screens, with short three-word statements like "Ask. Remediate. Optimize."
- **Dark hero bands.** Home and platform heroes sit on black or deep charcoal with photographic or abstract orange light, then the page switches to white sections below.

Mood words: assured, technical, modern, high-contrast, enterprise.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Cyber Orange | `#FA582D` | Logo chevrons, primary buttons on brand pages, outline buttons, links on dark |
| Orange Light | `#F76A43` | Base pill button fill in the shared `.btn` styles |
| Orange Deep | `#D9551D` | Pressed state, text-on-white orange where contrast matters (approximate role) |
| Charcoal | `#141414` | Wordmark, headings, body text, button text on orange, dark sections |
| Black | `#000000` | Hero backgrounds, video overlays |
| White | `#FFFFFF` | Page background, text on dark |
| Warm Grey | `#F4F4F2` | Light section bands, card fills |
| Rule Grey | `#D8D8D8` | Borders, table rules, dividers |
| Mid Grey | `#5F5F5F` | Secondary text, captions |

### Platform accents

The live CSS swaps the primary button color per product family with `[data-type="…"] .btn-primary`:

| Family | Button fill | Gradient |
|---|---|---|
| Palo Alto Networks (corporate) | `#FA582D` | `#FA582D` → `#FFC328` |
| Strata (network security) | `#FFCB06` | `#FFCB06` → `#D07F05` |
| Prisma (cloud, SASE) | `#00C0E8` | `#00C0E8` → `#0096B5` (approximate) |
| Cortex (SecOps, AI) | `#00CC66` | `#00CC66` → `#017C3E` (approximate) |
| Unit 42 (threat intel) | `#C84727` | `#C84727` → `#82240C` (approximate) |
| Identity security | `#265BFF` (white text) | `#265BFF` → `#003BF2` |

Use one family accent per page. The corporate orange is the default everywhere else.

### Brand gradient

The "branded gradient" button and text treatment runs orange to gold:

```css
.pan-gradient-text {
  background-image: linear-gradient(90deg, #FFC328 0, #FA582D 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 3. Typography

**Families:** TT Hoves (TypeType) for everything, loaded as `--font-primary`. A serif, CelestePro (`--font-secondary`), appears in editorial pull quotes and some Unit 42 content. The CSS also declares Figtree and Source Serif 4 as secondary stacks.

**Licensing:** TT Hoves and CelestePro are commercial. Use **Figtree** as the free stand-in (the site itself lists it as an alternate) and **Source Serif 4** for the serif.

```css
font-family: "TT Hoves", "TTHoves", Figtree, Arial, "Helvetica Neue", Helvetica, sans-serif;
```

### Scale

Headings scale fluidly between 768px and 1920px viewports using `calc()`. Values below are the desktop maximums seen in the CSS.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 / Display | 72px (32px mobile) | 500 | 1.2 | -0.01em (approximate) |
| H2 | 64px (28px mobile) | 500 | 1.2 | -0.01em (approximate) |
| H3 | 56px (24px mobile) | 500 | 1.2 | 0 |
| H4 | 24px | 600 | 1.3 | 0 |
| Lead | 18px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Button | 14px | 600 | 1.4 | 0.02rem |
| Eyebrow | 12px uppercase | 600 | 1.3 | 0.08em (approximate) |

### Rules

- Sentence case for headings and buttons. Product names keep their own casing (Cortex XSIAM, Prisma SASE, Strata Cloud Manager).
- Uppercase is reserved for small eyebrows such as "RECOMMENDED".
- Headlines are short. Three-beat statements with periods ("Ask. Remediate. Optimize.") are a house pattern.
- Body copy stays at 400; emphasis is weight 600, not italics.

## 4. Logo & Brand Mark

The logo is the orange chevron mark followed by the lowercase **paloalto** wordmark in charcoal, with **NETWORKS** in small spaced capitals right-aligned underneath, plus a registered mark.

- **Mark:** three parallelogram bars in `#FA582D` that interlock into a forward-pointing chevron.
- **Wordmark:** custom geometric sans, lowercase, `#141414`.
- **Color versions:** full color on white (primary), orange mark with white wordmark on black, all-white on dark photography, all-charcoal for single-color print.
- **Clear space:** at least the height of the "p" bowl on every side (approximate).
- **Minimum size:** about 100px wide on screen; below that use the chevron alone.

Misuse:

- Do not recolor the chevron with a platform accent (Strata yellow, Prisma cyan). Platform colors live in UI, not in the logo.
- Do not separate "NETWORKS" from "paloalto" or reset it in another font.
- Do not place the full-color logo on orange or busy imagery.
- Do not rotate, outline or add effects to the chevron.

## 5. Components

### Buttons

All buttons share one shape: a pill with 2.25rem radius, a 2px border and an optional 15px arrow icon on the right.

| Variant | Background | Text | Border | Notes |
|---|---|---|---|---|
| Primary | `#FA582D` | `#141414` 600 | 2px transparent | Platform pages swap the fill |
| Primary outline | transparent | `#141414` | 2px `#FA582D` | Secondary CTA on white |
| Dark | `#141414` | `#FFFFFF` | 2px transparent | On light sections |
| White | `#FFFFFF` | `#141414` | 2px transparent | On dark heroes |
| Outline light | transparent | `#FFFFFF` | 2px `#FFFFFF` | On dark heroes |
| Gradient text | none | orange-gold gradient text | none | Inline "Explore" links |
| Gradient outline | transparent | `#141414` or white | 2px gradient ring via mask | Featured CTAs |

```css
.btn {
  display: inline-flex; align-items: center;
  font: 600 .875rem/140% var(--font-primary);
  letter-spacing: .02rem;
  padding: .35rem 1rem;
  border: .125rem solid transparent;
  border-radius: 2.25rem;
  background-color: #FA582D;
  color: #141414;
  transition: box-shadow .15s ease-in-out;
}
.btn i { width: .9375rem; height: .9375rem; margin-left: .5rem; } /* arrow icon */
```

States:

- Hover: the arrow nudges right and a soft shadow appears (`0 4px .75rem rgba(0,0,0,.05)`); outline buttons fill with their border color (approximate).
- Focus: `box-shadow: 0 0 0 .2rem rgba(250,88,45,.4)` (approximate).
- Disabled: 40% opacity.

### Inputs

- Height 40-48px, 1px `#B9B9B9` border, radius 4px, white fill, 16px text (approximate).
- Focus: border `#141414` and a 2px orange outline.
- Labels 14px weight 500 above the field. Error text 14px `#FF2E00`.

### Cards

- Light cards: `#F4F4F2` or white, radius 8px (`.5rem`), no border, 24-32px padding.
- Hover: `0 .75rem 1.5rem rgba(0,0,0,.08)` lift.
- Resource tiles: image on top, a 12px uppercase type label ("REPORT", "WEBINAR"), a 20-24px title and an arrow link.
- Customer tiles: logo in white on a photo with a dark scrim.

### Navigation

- White top bar about 64-72px tall, logo left at 120x23px, mega-menu triggers in the center: "Products", "Solutions", "Services", "Partners", "Company", "More".
- Right side: search icon, language picker, "Contact Us" and a pill "Get Started" or "Demos and Trials" CTA.

### Badges

Small rectangular labels, radius 4px, 12px/600 uppercase. Neutral `#141414` on `#F4F4F2`, or platform accent fill with charcoal text.

### Hero (signature)

- Full-bleed black or charcoal with a large H1 in white, a 18px lead, two pill CTAs (white primary, outline secondary) and a "play video" circle button.

## 6. Layout & Spacing

- **Grid:** Bootstrap-style 12-column grid. Breakpoints at 576, 768, 992, 1200, 1400 and 1600px, with extra scaling up to 1920 and 3840px.
- **Root size scales:** above 1920px the root font size grows toward 32px, so rem-based layouts scale for very large screens.
- **Content width:** about 1200-1320px for text-heavy sections; heroes go full bleed.
- **Gutters:** 16px mobile, 24px tablet, 32px desktop.
- **Section padding:** 64-96px top and bottom on desktop, 48px on mobile.

## 7. Depth, Elevation & Motion

### Shadows

| Token | Value |
|---|---|
| Card | `0 4px .75rem rgba(0,0,0,0.05)` |
| Raised | `0 .75rem 1.5rem rgba(0,0,0,0.08)` |
| Overlay | `0 8px 20px 0 rgba(0,0,0,0.25)` |

Most surfaces are flat. Elevation shows up on hover and on floating product screenshots.

### Motion

- Buttons: `transform .15s ease-in-out` and `box-shadow .15s ease-in-out`.
- Scroll reveals: `opacity .75s ease, transform .75s ease`, rising about 24px.
- Dropdown chevrons rotate 180deg over 150ms.

## 8. Iconography & Imagery

- **Icons:** simple line icons, 1.5-2px stroke, 24px grid, charcoal on light and white on dark. Platform icons use their family accent as a fill.
- **Arrow icon:** a short right arrow inside every pill button and text link.
- **Photography:** enterprise people photography in dark, moody lighting; data center and cityscape shots with orange light flares.

## 9. Voice & Microcopy

Confident, direct and platform-centric. It sells consolidation ("platformization") and AI-driven outcomes, and it names products precisely.

- Sentence case. Short declaratives, often three beats.
- Lead with an outcome, follow with the product that delivers it.
- CTAs are verbs plus a noun: "Explore Network Security", "Get expert insights", "Demos and trials".
- Do not quote detection counts, customer numbers or awards unless you have checked them on the live site that day.

Sample strings:

- Hero: "Ask. Remediate. Optimize."
- Sub: "Meet the next-generation, AI-driven observability platform."
- Section: "A new AI world is here."
- CTA: "Explore SecOps", "Contact Us", "Under attack?"

## 10. Do's and Don'ts

**Do**

- Keep the page white and charcoal with one orange accent.
- Use pill buttons with a trailing arrow for every CTA.
- Switch to the platform accent on product pages and keep it consistent there.
- Use medium (500) weight for large headlines.
- Use dark hero bands with photography or abstract network light.

**Don't**

- Don't mix two platform accents in the same component.
- Don't use square or slightly rounded buttons on marketing pages.
- Don't use navy as the dark color; stay on neutral charcoal.
- Don't recolor the chevron logo.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Palo Alto Networks. White page, near-black text `#141414`, secondary text `#5F5F5F`, light bands `#F4F4F2`, borders `#D8D8D8`. Font: `"TT Hoves", Figtree, Arial, sans-serif`. Headlines are large and medium weight (500), 56-72px on desktop with 1.2 line height; body 16px/1.5. Every button is a pill (radius 2.25rem) with a 2px border, 14px/600 text and a small right arrow: primary is orange `#FA582D` with charcoal text, secondary is an orange outline, and on dark heroes use a white pill plus a white outline pill. Heroes are full-bleed black with white headlines and orange light. Product pages can switch the accent: Strata `#FFCB06`, Prisma `#00C0E8`, Cortex `#00CC66`, Unit 42 `#C84727`. Cards are `#F4F4F2` with 8px radius and a soft `0 .75rem 1.5rem rgba(0,0,0,.08)` hover lift. Use a 12-column grid around 1200-1320px wide, 64-96px section spacing, and copy that is short, confident and specific.

```css
:root {
  --brand-orange: #FA582D;
  --brand-orange-light: #F76A43;
  --brand-orange-deep: #D9551D;
  --brand-gold: #FFC328;
  --brand-charcoal: #141414;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-surface: #F4F4F2;
  --brand-border: #D8D8D8;
  --brand-border-strong: #B9B9B9;
  --brand-text-muted: #5F5F5F;
  --brand-strata: #FFCB06;
  --brand-prisma: #00C0E8;
  --brand-cortex: #00CC66;
  --brand-unit42: #C84727;
  --brand-identity: #265BFF;
  --brand-gradient: linear-gradient(90deg, #FFC328 0, #FA582D 75%);
  --brand-font: "TT Hoves", "TTHoves", Figtree, Arial, "Helvetica Neue", sans-serif;
  --brand-font-serif: CelestePro, "Source Serif 4", Georgia, serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-pill: 2.25rem;
  --brand-shadow-card: 0 4px .75rem rgba(0,0,0,0.05);
  --brand-shadow-raised: 0 .75rem 1.5rem rgba(0,0,0,0.08);
  --brand-shadow-overlay: 0 8px 20px 0 rgba(0,0,0,0.25);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Palo Alto Networks.

---
name: AMD
slug: amd
url: https://amd.com
category: Hardware
tagline: "Black and white with teal and gold accents, Klavika headlines and sharp 2px buttons."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Logo, header, hero and dark section backgrounds
  - name: White
    hex: "#FFFFFF"
    role: Text on dark, light section background
  - name: Teal
    hex: "#00C2DE"
    role: Primary accent on dark, links, highlights
  - name: Teal Dark
    hex: "#008094"
    role: Accent on light backgrounds, links
  - name: Gold
    hex: "#C1A968"
    role: Secondary accent, premium and data center moments
  - name: Red
    hex: "#ED1C24"
    role: Radeon and gaming accent, errors
  - name: Orange
    hex: "#F26522"
    role: Ryzen and consumer accent
  - name: Charcoal
    hex: "#1A1A1B"
    role: Dark cards, menus, side navigation
  - name: Graphite
    hex: "#27282B"
    role: Dark borders, text on light
  - name: Gray 60
    hex: "#636466"
    role: Muted text on light
  - name: Gray 40
    hex: "#9D9FA2"
    role: Secondary text on dark
  - name: Gray 10
    hex: "#E1E1E2"
    role: Borders on light
  - name: Gray 5
    hex: "#F1F1F2"
    role: Light panels
  - name: Blue
    hex: "#0051C6"
    role: Info states, legacy links
fonts:
  display:
    family: "Klavika"
    fallback: "Barlow"
    weights: [500, 700]
  body:
    family: "Open Sans"
    fallback: "Open Sans"
    weights: [400, 600, 700]
typeScale:
  - { role: Hero, size: 48, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: H1, size: 44, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: H2, size: 36, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: H3, size: 26, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Subhead, size: 20, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 2, md: 8, lg: 12, pill: 9999 }
spacing: [2, 4, 6, 10, 16, 26, 34, 56, 68, 90]
shadows:
  - { name: Card, value: "0 2px 6px 0 rgba(0,0,0,0.24)" }
  - { name: Card Hover, value: "0 4px 10px 0 rgba(0,0,0,0.24)" }
  - { name: Raised, value: "0 8px 28px 0 rgba(0,0,0,0.24)" }
preview:
  bg: "#000000"
  surface: "#1A1A1B"
  text: "#FFFFFF"
  muted: "#9D9FA2"
  border: "#27282B"
  accent: "#00C2DE"
  accentText: "#000000"
  radius: 2
  buttonStyle: outline
---

# AMD

## 1. Visual Theme & Atmosphere

AMD looks like a high-end component box: black, white and precise, with a thin line of colored light. amd.com opens on black heroes with glossy product renders (EPYC and Ryzen chips, Instinct accelerators, Radeon cards) and short Klavika headlines, then alternates with white product sections that read like spec sheets.

The colour story is mostly monochrome. Accents are reserved and tied to product families: teal for AI and data center, gold for premium and enterprise moments, orange for Ryzen and consumer, red for Radeon and gaming. Buttons are flat rectangles with nearly square 2px corners and thin 1px borders, often outline-only over dark imagery with a light backdrop blur.

What makes it recognisable:

- **The AMD wordmark and arrow.** A bold geometric "AMD" with the square arrow symbol to its right.
- **Black canvas.** Header, mega-menu and hero sit on `#000000`; dark cards use `#1A1A1B`.
- **Klavika headlines.** A squared, technical sans in weight 500, never heavy.
- **Thin outline buttons with colored borders** (teal, gold, orange, red) on dark imagery.
- **Product renders with light streaks.** Chips and boards lit from the edges, with glowing lines and particles.
- **Dense mega-menus.** Product families (Processors, Accelerators, Graphics, Adaptive SoCs, Software) with deep columns of product links.

Mood words: technical, premium, fast, serious, engineered.

## 2. Color Palette & Roles

Values below come from amd.com CSS (custom properties such as `--amd-primary-gold`, `--amd-primary-teal-dark`, `--csvi-accent`).

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Header, footer, heroes, logo |
| White | `#FFFFFF` | Light sections, text on dark |
| Teal | `#00C2DE` | Accent on dark (`--csvi-accent` dark), links, highlights |
| Teal hover (dark) | `#47E8FF` | Hover on teal links over black |
| Teal Dark | `#008094` | Accent on light (`--amd-primary-teal-dark`) |
| Teal Deep | `#005866` | Hover on teal-dark links over white |
| Gold | `#C1A968` | `--amd-primary-gold`, outline buttons, premium labels |
| Gold Dark | `#A8905A` | Gold hover |
| Red | `#ED1C24` | Gaming and Radeon accent, error, focus outline on some cards |
| Orange | `#F26522` | Ryzen and consumer accent |
| Charcoal | `#1A1A1B` | Dark cards, side nav, tooltips |
| Graphite | `#27282B` | Card borders on dark, title text on light |
| Gray 60 | `#636466` | Muted text on light (`--csvi-color-muted`) |
| Gray 50 | `#747579` | Captions |
| Gray 40 | `#9D9FA2` | Secondary text on dark |
| Gray 10 | `#E1E1E2` | Borders on light (`--csvi-border-color`) |
| Gray 5 | `#F1F1F2` | Light panels |
| Blue | `#0051C6` (dark mode `#2899FF`) | Info, legacy links |
| Green | `#4AA564` | Success |
| Yellow | `#FDB81E` | Warning |

### Dark and light

amd.com is a mixed-mode site: dark heroes and navigation, light content sections. Components ship in both: on dark, accent `#00C2DE`, borders `rgba(255,255,255,0.12)`; on light, accent `#008094`, borders `#E1E1E2`.

### Gradients

Used sparingly. A metallic grey gradient for "expressive" buttons (`linear-gradient(79.54deg, rgba(73,73,73,.4), rgba(77,77,77,.5), rgba(102,102,102,.5), rgba(128,128,128,.5))`), and a subtle bar gradient `#27282B → #1A1A1B → #27282B` behind anchor menus on product pages.

## 3. Typography

**Display:** Klavika (by Process Type Foundry), weight 500 for headlines, plus Klavika Condensed for some labels. It is proprietary; the closest free match is **Barlow** (or Barlow Semi Condensed for condensed labels).

**Body:** Open Sans, weights 400, 600 and 700. Free on Google Fonts.

```css
--font-display: Klavika, Barlow, Arial, sans-serif;
--font-body: "Open Sans", Arial, sans-serif;
```

### Scale (from amd.com CSS, fluid with clamp)

| Role | Size | Weight | Line height | Family |
|---|---|---|---|---|
| Expressive headline | 48px | 500 | 53px | Klavika |
| H1 | clamp to about 44px | 500 | 35-45px | Klavika |
| Expressive regular | 28-36px | 500 | 38-48px | Klavika |
| H2 (sections) | 22-29px | 700 | 34-38px | Open Sans |
| H3 | 20-26px | 700 | 32px | Open Sans |
| Small headline | 26px | 500 | 32px | Klavika |
| Body | 16px | 400 | 1.6 | Open Sans |
| Small | 14px | 400 | 20px | Open Sans |
| Button | 16px | 600 | 1.5 | Open Sans |

Sizes marked as ranges come from `clamp()` rules and are approximate at a given width.

### Rules

- Headlines are short, sentence case or title case for product names ("AMD Instinct MI350 Series GPUs").
- The tagline "together we advance_" uses a trailing underscore as a cursor (it appears in the page title as "together we advance_AI").
- Use `text-wrap: balance` on headlines (amd.com does).
- Spec numbers (cores, TFLOPS, GB) are set in Klavika at large sizes with units in smaller Open Sans.

## 4. Logo & Brand Mark

The AMD logo is the bold "AMD" wordmark followed by the AMD arrow: a square symbol where an open corner points up-right, with an inner stepped square below-left. Black on light, white on dark.

- **Clear space:** at least the height of the "A" crossbar gap on all sides; in practice about half the logo height (approximate).
- **Minimum size:** about 60px wide on screen.
- **Color versions:** black or white only. The arrow is never colored separately from the wordmark in the corporate logo.
- **Sub-brands:** Ryzen, Radeon, EPYC, Instinct, Versal have their own wordmarks; they appear with "AMD" set above or before them.
- **Misuse:** don't recolor the logo teal or red, don't separate the arrow for decoration except as an app icon or favicon, don't add glow.

## 5. Components

### Buttons

From amd.com CSS: 2px radius, 1px border, 600 weight, padding `1rem 2.125rem` (16px 34px).

```css
.amd-btn {
  font: 600 16px/1.5 "Open Sans", Arial, sans-serif;
  padding: 16px 34px; border-radius: 2px; border: 1px solid #000000;
  background: transparent; color: #000000; text-decoration: none;
  transition: background-color 200ms cubic-bezier(.17,.55,.55,1), color 200ms;
}
.amd-btn:hover { background: #000000; color: #FFFFFF; }
.amd-btn--solid-black { background: #000000; color: #FFFFFF; border-color: #FFFFFF; }
.amd-btn--primary-white { border-color: #FFFFFF; color: #FFFFFF; }          /* on dark */
.amd-btn--primary-white:hover { background: #FFFFFF; color: #000000; }
.amd-btn--teal-border { border-color: #00C2DE; color: #FFFFFF; backdrop-filter: blur(10px); }
.amd-btn--gold-border { border-color: #C1A968; color: #FFFFFF; backdrop-filter: blur(10px); }
.amd-btn--orange-border { border-color: #F26522; color: #FFFFFF; backdrop-filter: blur(10px); }
.amd-btn--red-border { border-color: #ED1C24; color: #FFFFFF; backdrop-filter: blur(10px); }
.amd-btn:focus-visible { outline: 2px solid #00C2DE; outline-offset: 2px; }
```

Tool-style buttons inside calculators and widgets use a solid teal fill, 12px radius and weight 800 (approximate), but the main site keeps the 2px rectangle.

### Header and mega-menu

Black header, white AMD logo left (about 140px wide), top-level items ("Products", "Solutions", "Resources", "Support", approximate) in white Open Sans 16px, search and account icons on the right. Menus open on `#1A1A1B` panels with a small triangle pointer, a left column of categories and right columns of product links in white and `#9D9FA2`.

### Hero

Full-bleed black with a product render or video on the right or behind. Klavika 48px white headline, 16-20px body in `#9D9FA2` or white, then one or two outline buttons (white or accent-bordered). Text sits on the left half.

### Cards

```css
.amd-card {
  background: #FFFFFF; border: 1px solid #E1E1E2; border-radius: 2px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.24);
  transition: box-shadow 200ms cubic-bezier(.17,.55,.55,1);
}
.amd-card:hover { box-shadow: 0 4px 10px 0 rgba(0,0,0,0.24); }
.theme-dark .amd-card { background: #1A1A1B; border-color: #27282B; }
```

Product teaser cards: product image on top (often on black), product family label, name in bold, short spec line, and a "Learn More" outline button or text link. Partner logo walls sit on dark backgrounds with white logos.

### Spec tables

White background, `#E1E1E2` row dividers, labels in `#636466` left, values in `#000000` or `#27282B` right; 14-16px Open Sans. Compare pages pin product names in a sticky header row.

### Tabs and anchor bars

Product pages have a sticky anchor bar on a dark gradient (`#27282B → #1A1A1B → #27282B`) with white 14-16px links; the active item gets a 2-3px accent underline (teal or the product family color).

### Inputs and filters

Bootstrap 5 based. Inputs 38-44px tall, 2px radius (`.25rem` in some widgets), 1px `#E1E1E2` or `#ADB5BD` border, focus ring `0 0 0 3px rgba(0,194,222,0.15)` with teal border. Checkbox filters in a left sidebar on product finder pages.

### Badges and labels

Small uppercase or title-case labels in Klavika Condensed or Open Sans 600, 12px, colored by product family ("NEW" in teal, "Ryzen AI" in orange). 2px radius.

### Tooltips and modals

Tooltips are `#1A1A1B` with white 14px text. Modals: white, 2px radius, 18px title weight 600 in `#27282B`, close icon top right, backdrop `rgba(0,0,0,0.6)` (approximate).

## 6. Layout & Spacing

- **Spacer scale (amd.com `--spacer-*`):** 2, 4, 6, 10, 16, 26, 34, 36, 56, 68, 90px.
- **Container:** Bootstrap 5 grid, max width about 1320px, 12 columns, 24px gutters (approximate).
- **Breakpoints:** Bootstrap defaults: 576, 768, 992, 1200, 1400px.
- **Section rhythm:** 56-90px vertical padding; heroes are near full viewport height on desktop.
- **Density:** marketing sections are spacious; product finders, spec tables and support pages are dense.

## 7. Depth, Elevation & Motion

- **Shadows:** all are black at 24% with no spread: `0 2px 6px`, `0 4px 10px`, `0 6px 16px`, `0 8px 28px`. Cards step up one level on hover.
- **Blur:** outline buttons and some overlays use `backdrop-filter: blur(10px)` (`--background-blur: 5px` on body).
- **Borders:** 1px `#E1E1E2` on light, `rgba(255,255,255,0.12)` or `#27282B` on dark.
- **Easing:** `cubic-bezier(.17,.55,.55,1)` for UI, `cubic-bezier(0,0,.2,1)` for fades. Durations 200-300ms.
- **Signature motion:** animated headlines that reveal word by word, light streaks moving across product renders, and carousels of product images.

## 8. Iconography & Imagery

- **Icons:** simple line icons, 1.5-2px stroke, square ends, white on dark or black on light. Accent color only for the active state.
- **Product renders:** high-detail 3D renders of chips, packages and boards on black, lit with teal, gold or red rim light depending on product family.
- **Photography:** data centers, engineers, gamers and creators, usually dark and moody with colored practical lights.
- **Partner logos:** white logos on black in grid "logo walls".
- **Data visualization:** teal and dark-teal series (`#00C2DE`, `#008094`, `#005866`, `#003E47`) with gold as a comparison color.

## 9. Voice & Microcopy

Confident, technical and brief. Headlines name a product or an outcome; body copy gives a spec or benchmark (with footnotes).

- Page title on the live site today: "AMD ׀ together we advance_AI"
- Nav labels seen today: "Products", "Processors", "Accelerators", "Graphics", "Adaptive SoCs, FPGAs, & SOMs", "Software, Tools, & Apps"
- CTAs: "Learn More", "Shop Now", "Find a Partner", "View Specifications", "Download Drivers"
- Product naming: "AMD EPYC", "AMD Ryzen AI", "AMD Instinct", "AMD Radeon RX"
- Support: "Drivers and Support", "Select your product", "Download"

Title Case is common in buttons ("Learn More") and nav; sentence case in body.

## 10. Do's and Don'ts

**Do**

- Use black heroes with glossy product renders and white Klavika (or Barlow 500) headlines.
- Keep buttons rectangular with 2px corners and 1px borders.
- Use one accent per section, matched to the product family (teal AI/data center, gold premium, orange Ryzen, red Radeon).
- Switch teal to `#008094` on white for contrast.
- Use Open Sans for body and UI text.
- Back performance claims with footnotes.

**Don't**

- Don't use rounded pill buttons on the main site.
- Don't color the AMD logo.
- Don't mix teal, gold, orange and red in the same block.
- Don't set long body text in Klavika.
- Don't use bright gradients as backgrounds; AMD stays mostly black and white.
- Don't put teal `#00C2DE` text on white; it fails contrast.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of AMD (amd.com). Black `#000000` header and hero, white content sections. Headlines in `Klavika, Barlow, Arial, sans-serif` weight 500 (hero 48px, white on black); body in `"Open Sans", Arial, sans-serif` 16px, line-height 1.6. Accent teal `#00C2DE` on dark and `#008094` on light; gold `#C1A968` as a secondary accent. Buttons are rectangles with 2px radius, 1px border, 16px 34px padding, Open Sans 600: on dark use white or teal-bordered outline buttons with `backdrop-filter: blur(10px)`, hover fills white with black text. Cards are white with 1px `#E1E1E2` border, 2px radius, shadow `0 2px 6px rgba(0,0,0,.24)`, hover `0 4px 10px rgba(0,0,0,.24)`; on dark they are `#1A1A1B` with `#27282B` borders. Show a product render on black in the hero, a mega-menu on `#1A1A1B`, a sticky product anchor bar, and a spec table with gray labels `#636466`. Easing `cubic-bezier(.17,.55,.55,1)`, 200ms.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-teal: #00C2DE;
  --brand-teal-hover: #47E8FF;
  --brand-teal-dark: #008094;
  --brand-teal-deep: #005866;
  --brand-gold: #C1A968;
  --brand-gold-dark: #A8905A;
  --brand-red: #ED1C24;
  --brand-orange: #F26522;
  --brand-charcoal: #1A1A1B;
  --brand-graphite: #27282B;
  --brand-gray-60: #636466;
  --brand-gray-40: #9D9FA2;
  --brand-gray-10: #E1E1E2;
  --brand-gray-5: #F1F1F2;
  --brand-blue: #0051C6;
  --brand-success: #4AA564;
  --brand-warning: #FDB81E;
  --brand-font-display: Klavika, "Barlow", Arial, sans-serif;
  --brand-font: "Open Sans", Arial, sans-serif;
  --brand-radius: 2px;
  --brand-radius-widget: 12px;
  --brand-shadow-card: 0 2px 6px 0 rgba(0,0,0,0.24);
  --brand-shadow-hover: 0 4px 10px 0 rgba(0,0,0,0.24);
  --brand-shadow-raised: 0 8px 28px 0 rgba(0,0,0,0.24);
  --brand-blur: blur(10px);
  --brand-ease: cubic-bezier(.17,.55,.55,1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by AMD.

---
name: MongoDB
slug: mongodb
url: https://mongodb.com
category: Developer
tagline: "Spring-green leaf on deep slate, Söhne sans with a serif wordmark, LeafyGreen product UI."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Spring Green
    hex: "#00ED64"
    role: Primary button fill, leaf, highlights
  - name: Slate Blue
    hex: "#001E2B"
    role: Dark hero and page background, text on green
  - name: Forest Green
    hex: "#00684A"
    role: Leaf on light, links and buttons on light
  - name: Lime White
    hex: "#FDFFF5"
    role: Text on slate, light page background
  - name: Evergreen
    hex: "#023430"
    role: Deep green panels
  - name: Midnight
    hex: "#061621"
    role: Deepest dark surface, footer
  - name: Slate 800
    hex: "#21313A"
    role: Cards on dark
  - name: Slate 600
    hex: "#404F54"
    role: Borders on dark, secondary text on light
  - name: Gray 400
    hex: "#9EA2A1"
    role: Secondary text on dark
  - name: Sage 100
    hex: "#E4E8E0"
    role: Light section background, borders
  - name: Sage 50
    hex: "#F1F5EB"
    role: Light panels
  - name: Blue
    hex: "#006CFA"
    role: Links on light, info
  - name: Lime
    hex: "#E9FF99"
    role: Highlight chips, illustration
  - name: Red
    hex: "#DB3030"
    role: Errors (LeafyGreen)
  - name: Yellow
    hex: "#FFC010"
    role: Warnings (LeafyGreen)
fonts:
  display:
    family: "Söhne"
    fallback: "Inter"
    weights: [400, 500]
  body:
    family: "Söhne"
    fallback: "Inter"
    weights: [300, 400, 500]
  mono:
    family: "Söhne Mono"
    fallback: "Source Code Pro"
    weights: [400]
typeScale:
  - { role: Hero, size: 64, weight: 500, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H1, size: 56, weight: 500, lineHeight: 1.14, tracking: "-0.01em" }
  - { role: H2, size: 40, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 32, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Subhead, size: 20, weight: 500, lineHeight: 1.6, tracking: "0.01em" }
  - { role: Body Large, size: 18, weight: 300, lineHeight: 1.56, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Eyebrow Mono, size: 14, weight: 400, lineHeight: 1.43, tracking: "0.1em" }
radii: { sm: 4, md: 16, lg: 32, pill: 999 }
spacing: [4, 8, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Card, value: "0 2px 4px 0 rgba(0,0,0,0.1)" }
  - { name: Raised, value: "0 3px 9px rgba(0,0,0,0.15)" }
  - { name: Focus, value: "0 0 0 3px rgba(19,170,82,0.4)" }
preview:
  bg: "#001E2B"
  surface: "#21313A"
  text: "#FDFFF5"
  muted: "#9EA2A1"
  border: "#404F54"
  accent: "#00ED64"
  accentText: "#001E2B"
  radius: 4
  buttonStyle: solid
---

# MongoDB

## 1. Visual Theme & Atmosphere

MongoDB is the document database company, and since its 2022 rebrand the look has been built on two colours: **Spring Green** `#00ED64` (the leaf, the main button) and **Slate Blue** `#001E2B` (a blue-black used for dark heroes and for text). Warm off-whites (`#FDFFF5`, sage `#E4E8E0`) replace pure white, so even light sections feel slightly organic.

The current homepage opens on slate with an eyebrow "MONGODB ATLAS", a headline "Every workload. Any cloud. One platform." in lime-white, a short paragraph, and two buttons: a green "Get Started" and an outline "Documentation". Below come customer logos ("TRUSTED BY"), learning cards (Atlas Learning Hub, Voyage AI, MongoDB University), a tabbed capability section (Vector Search, Stream Processing, Operational, Transactional, Text Search, Analytical, Graph, Geospatial), code samples and news cards. The Atlas product itself is light and runs on **LeafyGreen**, MongoDB's open-source design system.

What makes it recognisable:

- **The leaf.** A slim vertical leaf with a center stem, in green.
- **Green on slate.** `#00ED64` buttons and links on `#001E2B`.
- **Serif wordmark, sans UI.** The logo and some display text use MongoDB Value Serif; everything else is Söhne.
- **Buttons that soften on hover:** corners animate from 4px toward a rounded pill.
- **Mono eyebrows** in Söhne Mono, uppercase and tracked.

Mood words: modern, grounded, developer-friendly, confident, organic.

## 2. Color Palette & Roles

Values were read from the live mongodb.com CSS (Emotion styles) and the LeafyGreen palette.

| Name | Hex | Role |
|---|---|---|
| Spring Green | `#00ED64` | Primary button, leaf on dark, text links on dark |
| Forest Green | `#00684A` | Leaf on light, primary on light, button border |
| Green Mid | `#00AA57` | Success, hover on light (approximate) |
| Dark Green | `#014E3D` | Pressed, deep accents |
| Evergreen | `#023430` | Green-tinted dark panels |
| Slate Blue | `#001E2B` | Dark page, text on light, text on green |
| Midnight | `#061621` | Deepest dark, footer |
| Slate 800 | `#21313A` | Cards on dark |
| Slate 600 | `#404F54` | Dark borders, body on light |
| Gray 500 | `#616C6D` | Muted text on light |
| Gray 400 | `#9EA2A1` | Muted text on dark |
| Sage 200 | `#D0D4CF` | Borders on light |
| Sage 100 | `#E4E8E0` | Light bands |
| Sage 50 | `#F1F5EB` | Light panels |
| Lime White | `#FDFFF5` | Light page, text on dark, scrolled header |
| Lime | `#E9FF99` | Chips, illustration |
| Blue | `#006CFA` | Links on light, info |
| Purple | `#B45AF2` | Illustration accent |

### LeafyGreen semantic colors (product)

| Token | Hex | Use |
|---|---|---|
| green.dark2 | `#00684A` | Primary button |
| green.base | `#00ED64` | Success accents |
| blue.base | `#016BF8` | Links, info |
| red.base | `#DB3030` | Errors, danger button |
| yellow.base | `#FFC010` | Warnings |
| gray.dark1 | `#5C6C75` | Secondary text |
| gray.light2 | `#E8EDEB` | Borders |
| gray.light3 | `#F9FBFA` | Subtle backgrounds |
| black | `#001E2B` | Primary text |

### Dark and light

Marketing alternates slate heroes with Lime White and sage sections. Atlas has a light default and a dark mode built from the slate scale (`#001E2B`, `#112733`, `#1C2D38`, approximate).

## 3. Typography

**Marketing:** **Söhne** by Klim Type Foundry (commercial) at 300-500, plus **Söhne Mono** for eyebrows and code and **Söhne Condensed** for some large figures. **MongoDB Value Serif** (custom) appears in the wordmark and occasional display lines. CJK pages fall back to Noto Sans KR/SC/JP.

**Product (LeafyGreen):** Euclid Circular A for UI text, MongoDB Value Serif for page titles, Source Code Pro for code.

**Free fallbacks:** Inter for Söhne and Euclid; Source Serif 4 for Value Serif; Source Code Pro for mono.

### Scale (marketing, desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 56-64px | 500 | 1.1 | -0.01em (approximate) |
| H2 | 40px | 500 | 48px | 0 |
| H3 | 32px | 500 | 40px | 0 |
| Subhead | 20px | 500 | 32px | 0.01em |
| Body large | 18px | 300-400 | 28px | 0 |
| Body | 16px | 400 | 24px | 0 |
| Button | 16px | 500 | 16px | 0.16px |
| Eyebrow (Söhne Mono) | 14px | 400, uppercase | 20px | 0.1em (approximate) |
| Small | 12px | 400 | 16px | 0 |

### Rules

- Sentence case for headlines; eyebrows in uppercase mono.
- Headline phrases often end with periods ("Every workload. Any cloud. One platform.").
- Code samples in mono on slate panels with green and blue syntax accents.

## 4. Logo & Brand Mark

The logo is the **leaf** beside the **MongoDB** wordmark in a sharp serif. The leaf has a slim teardrop outline and a thin central stem that extends below.

- **Colors:** Spring Green leaf with Lime White wordmark on slate; Forest Green leaf with slate wordmark on light; one-colour slate (as in the bundled `logo.svg`, the site's "horizontal default slate blue" file) or one-colour white.
- **Clear space:** at least the leaf's width on all sides (approximate).
- **Minimum size:** horizontal logo about 90px wide; leaf alone about 12px wide (approximate).

Misuse: do not tilt the leaf, fill it with gradients, swap the serif wordmark for a sans, or put the Spring Green leaf on white (contrast is too low; use Forest Green).

## 5. Components

### Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary (dark bg) | `#00ED64` | `#001E2B` | 1px `#001E2B` or `#00684A` | corners round toward pill |
| Primary (light bg) | `#00ED64` | `#001E2B` | 1px `#00684A` | same |
| Outline (dark bg) | transparent | `#FDFFF5` | 1px `#FDFFF5` | fill tint (approximate) |
| Text link | none | `#00ED64` on dark, `#00684A` on light | 2px bottom border on hover | arrow grows |
| LeafyGreen primary | `#00684A` | `#FFFFFF` | 1px `#00593F` | darker green, 4px focus ring |

```css
.mdb-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 16px 32px;
  font: 500 16px/16px "Söhne", Inter, system-ui, sans-serif;
  letter-spacing: 0.16px;
  color: #001E2B; background: #00ED64;
  border: 1px solid #00684A; border-radius: 4px;
  transition: border-radius .15s;
}
.mdb-btn:hover { border-radius: 40px; }
.mdb-btn--outline { background: transparent; color: #FDFFF5; border-color: #FDFFF5; }
.mdb-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(19,170,82,0.4); }
```

The header CTA is a smaller version: `15px 24px` padding, same colours.

### Navigation

Transparent header over the slate hero (95px tall); on scroll it fills with `#FDFFF5` and text turns slate. Left: logo. Center: "Products", "Resources", "Solutions", "Company", "Pricing" with chevrons. Right: language, "Support", "Sign In", and a green "Get Started". Mega menus are light panels with bold item names, short gray descriptions, and green arrow links ("Learn more →").

### Announcement bar

Thin bar above the header with a report link ("Read the Gartner report >") in Söhne 14px.

### Cards

- Learning cards: `#21313A` on slate or white on sage, 16px radius, 32px padding, icon top-left, title 20-24px/500, body 16px, green arrow link at the bottom.
- Large feature panels: 24-32px radius, sometimes with Evergreen `#023430` fills.

### Tabs (capability switcher)

Horizontal list of capabilities on slate; active tab underlined or filled with green text, content panel with code sample and diagram.

### Code panels

Slate `#001E2B` or `#061621` background, 16px radius, Söhne Mono / Source Code Pro 14px, line numbers in `#9EA2A1`, language tabs and a copy button.

### Badges and chips

Pill (999px) chips with Lime `#E9FF99` or green tint fill and slate text, 12-14px/500; LeafyGreen badges at 4px radius with 1px tinted border.

### Forms (LeafyGreen, approximate)

36px inputs, 6px radius, 1px `#889397` border, 13-16px Euclid text; focus `0 0 0 3px` blue halo; error border `#DB3030` with message below.

### Atlas product shell

Light UI: left navigation with project switcher, cluster cards with green status dots, metrics charts, and a slate top bar. Primary buttons are Forest Green `#00684A`, not Spring Green.

## 6. Layout & Spacing

- **Container:** about 1280-1440px with 24-48px side padding.
- **Grid:** 12 columns, 24-32px gutters.
- **Spacing:** 8px base; sections 64-128px apart on desktop.
- **Breakpoints:** roughly 768, 1024, 1280, 1440px (approximate).
- **Density:** marketing medium; Atlas compact.

## 7. Depth, Elevation & Motion

- Mostly flat; colour bands and rounded panels create hierarchy.
- Cards: `0 2px 4px 0 rgba(0,0,0,0.1)`; raised menus: `0 3px 9px rgba(0,0,0,0.15)`.
- Focus: `0 0 0 3px rgba(19,170,82,0.4)` (green) or `rgba(244,255,220,0.4)` on dark.
- Motion: 150ms border-radius morph on buttons, 250-300ms fades for the scrolled header and arrow-link underlines.

## 8. Iconography & Imagery

- **Icons:** LeafyGreen icons, 16px, filled geometric glyphs; marketing uses larger branded icons with green and slate fills.
- **Illustration:** flat, geometric scenes in Spring Green, Lime, Evergreen and slate; documents and nodes stacked like cards.
- **Product shots:** Atlas and Compass screenshots on slate panels.
- **Photography:** event and customer photos, natural, used in case studies.

## 9. Voice & Microcopy

Direct and developer-friendly, with short punchy headline fragments.

- Headlines: "Every workload. Any cloud. One platform.", "Loved by builders, trusted by enterprises", "Level Up Your MongoDB Skills".
- CTAs: "Get Started", "Documentation", "Learn more", "Start learning", "Visit the Learning Hub", "Try Free".
- Product strings: "Create cluster", "Connect", "Browse collections", "Load sample dataset".

## 10. Do's and Don'ts

**Do**

- Pair Spring Green `#00ED64` with Slate `#001E2B`; slate text on green buttons.
- Use Lime White `#FDFFF5` and sage instead of pure white.
- Use Forest Green `#00684A` for green on light backgrounds.
- Set UI in a clean grotesk (Söhne or Inter); keep serif for the wordmark.
- Use uppercase mono eyebrows over section titles.

**Don't**

- Don't put white text on Spring Green.
- Don't use the old pre-2022 green `#4DB33D` or the old leaf.
- Don't add heavy gradients or glossy effects to the leaf.
- Don't use pure black backgrounds; use slate.
- Don't set long body copy in the serif.

## 11. Agent Prompt Guide

> Build this UI in the style of MongoDB. Dark hero on Slate `#001E2B` with Lime White `#FDFFF5` text and `#9EA2A1` secondary text; light sections in `#FDFFF5`, `#F1F5EB` and `#E4E8E0` with slate text. Font Söhne (fallback Inter) at 400-500 for headlines (40-64px, sentence case) and 16-18px body; uppercase Söhne Mono eyebrows with wide tracking. Primary button: Spring Green `#00ED64` fill, slate `#001E2B` text, 1px `#00684A` border, 4px radius, 16px 32px padding, 16px/500, corners animate to 40px on hover. Outline button: Lime White border and text. Cards on dark are `#21313A` with 16px radius; code panels on `#061621`. Links green with arrow. Use Forest Green `#00684A` for green on light backgrounds and the leaf logo beside a serif "MongoDB" wordmark.

```css
:root {
  --brand-spring-green: #00ED64;
  --brand-forest-green: #00684A;
  --brand-dark-green: #014E3D;
  --brand-evergreen: #023430;
  --brand-slate: #001E2B;
  --brand-midnight: #061621;
  --brand-slate-800: #21313A;
  --brand-slate-600: #404F54;
  --brand-gray-400: #9EA2A1;
  --brand-sage-100: #E4E8E0;
  --brand-sage-50: #F1F5EB;
  --brand-lime-white: #FDFFF5;
  --brand-lime: #E9FF99;
  --brand-blue: #006CFA;
  --brand-error: #DB3030;
  --brand-warning: #FFC010;
  --brand-font: "Söhne", Inter, system-ui, sans-serif;
  --brand-font-serif: "MongoDB Value Serif", "Source Serif 4", Georgia, serif;
  --brand-font-mono: "Söhne Mono", "Source Code Pro", ui-monospace, monospace;
  --brand-radius: 4px;
  --brand-radius-card: 16px;
  --brand-radius-panel: 32px;
  --brand-shadow-card: 0 2px 4px 0 rgba(0,0,0,0.1);
  --brand-focus: 0 0 0 3px rgba(19,170,82,0.4);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by MongoDB.

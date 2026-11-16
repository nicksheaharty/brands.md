---
name: NVIDIA
slug: nvidia
url: https://nvidia.com
category: Hardware
tagline: "Black and white engineering pages lit by one signal green, sharp corners, dense specs."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: NVIDIA Green
    hex: "#76B900"
    role: Brand color, eye logo, primary buttons, links with carets
  - name: Black
    hex: "#000000"
    role: Global header, dark sections, hero backgrounds
  - name: White
    hex: "#FFFFFF"
    role: Light sections, text on dark
  - name: Green Hover
    hex: "#549A00"
    role: Primary button hover (green-400)
  - name: Gray 950
    hex: "#161616"
    role: Dark cards and raised surfaces on black
  - name: Gray 900
    hex: "#222222"
    role: Dark panels, menu backgrounds
  - name: Gray 800
    hex: "#313131"
    role: Borders and dividers on dark
  - name: Gray 600
    hex: "#636363"
    role: Secondary text on light
  - name: Gray 400
    hex: "#898989"
    role: Muted text, captions
  - name: Gray 200
    hex: "#CCCCCC"
    role: Secondary text on dark, borders on light
  - name: Gray 025
    hex: "#F7F7F7"
    role: Light alternate section background
  - name: Green Light
    hex: "#BFF230"
    role: Highlight green on dark (green-100)
  - name: Green Deep
    hex: "#3F8500"
    role: Pressed state, green text on white for contrast
  - name: Red
    hex: "#E52020"
    role: Errors and alerts
fonts:
  display:
    family: "NVIDIA Sans"
    fallback: "Inter"
    weights: [500, 700]
  body:
    family: "NVIDIA Sans"
    fallback: "Inter"
    weights: [400, 500, 700]
  mono:
    family: "JetBrains Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 56, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H1, size: 48, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: H2, size: 36, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 24, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Label, size: 12, weight: 700, lineHeight: 1.33, tracking: "0.04em" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Small, value: "0px 2px 4px 0px rgba(0,0,0,0.12)" }
  - { name: Medium, value: "0px 4px 6px 0px rgba(0,0,0,0.12)" }
  - { name: Large, value: "0px 8px 12px 0px rgba(0,0,0,0.15)" }
preview:
  bg: "#000000"
  surface: "#161616"
  text: "#FFFFFF"
  muted: "#CCCCCC"
  border: "#313131"
  accent: "#76B900"
  accentText: "#000000"
  radius: 2
  buttonStyle: solid
---

# NVIDIA

## 1. Visual Theme & Atmosphere

nvidia.com covers GPUs, data center systems, AI software, gaming and drivers. The site reads like an engineering company's showroom: black global header, alternating black and white content bands, big product renders and keynote photography, and one unmistakable color, NVIDIA Green `#76B900`.

What makes it recognisable:

- **One green.** `#76B900` is the logo eye, the primary button, the link caret and the active underline. Nothing else on the page is saturated.
- **Black and white bands.** Heroes and gaming pages run on pure black; enterprise and documentation sections switch to white or `#F7F7F7`.
- **Sharp geometry.** Buttons and cards have 2-4px corners; the logo's angular eye sets the tone. Rounded pills are rare (filter chips only).
- **Bold, compact type.** NVIDIA Sans at 700 for headings, tight and wide-set, with small uppercase labels for categories.
- **Dense information.** Mega menus, spec tables, multi-tab product pages and long lists of links are normal.
- **Text links with carets.** Secondary actions are green text followed by a `>` caret that slides on hover.

Mood words: technical, powerful, high-contrast, precise, industrial.

## 2. Color Palette & Roles

Values are from the live Kaizen UI foundation tokens (`--color-*`) and site CSS.

| Name | Hex | Role |
|---|---|---|
| Brand / green-300 | `#76B900` | `--color-brand`, primary button, links, logo |
| green-400 | `#549A00` | Primary hover |
| green-500 | `#3F8500` | Pressed, green text on white |
| green-100 | `#BFF230` | Bright highlight on black |
| green-025 | `#DAFB7D` | Tint backgrounds |
| gray-1000 | `#000000` | Header, dark sections |
| gray-975 | `#0C0C0C` | Deep panels |
| gray-950 | `#161616` | Dark cards |
| gray-900 | `#222222` | Menus on dark |
| gray-800 | `#313131` | Borders on dark |
| gray-700 | `#4B4B4B` | Disabled on dark |
| gray-600 | `#636363` | Body secondary on light |
| gray-500 | `#757575` | Muted text |
| gray-400 | `#898989` | Captions |
| gray-300 | `#A7A7A7` | Disabled text |
| gray-200 | `#CCCCCC` | Secondary text on dark, borders on light |
| gray-100 | `#E0E0E0` | Dividers on light |
| gray-050 | `#EEEEEE` | Subtle fills |
| gray-025 | `#F7F7F7` | Light alternate section |
| gray-000 | `#FFFFFF` | Light page |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#76B900` | Confirmations, availability |
| Error | `#E52020` text/icon, `#C21E1E` darker, `#FFD7D7` fill | Form errors, alerts |
| Info | `#FFFFFF` on `#222222` | Notices on dark |
| Focus | `0 0 0 3px #FFFFFF, 0 0 0 5px #76B900` | Keyboard focus ring |

### Light vs dark

Most marketing pages mix both. On dark: text `#FFFFFF`, secondary `#CCCCCC`, borders `rgba(255,255,255,0.2)`. On light: text `#000000` or `#1A1A1A`, secondary `#636363`, borders `rgba(0,0,0,0.2)`. Green stays the same in both.

## 3. Typography

**Family:** **NVIDIA Sans**, a proprietary sans with regional builds (NVIDIA-EMEA, -APAC, -CN, -RU, -NALA). Code samples and spec values use **JetBrains Mono**. Chinese pages use Source Han Sans.

**Licensing:** NVIDIA Sans is proprietary. Use **Inter** as the fallback (weights 400/500/700). For a slightly more mechanical feel, **Barlow** also works. Mono: **JetBrains Mono** (free on Google Fonts).

```css
font-family: "NVIDIA Sans", Inter, Arial, Helvetica, sans-serif;
```

### Scale (from `--text-*` tokens: 10, 12, 14, 16, 18, 20, 22, 24, 28, 36, 48, 56, 64)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 56-64px | 700 | 1.1 | -0.01em |
| H1 | 48px | 700 | 1.15 | 0 |
| H2 | 36px | 700 | 1.2 | 0 |
| H3 | 24-28px | 700 | 1.25 | 0 |
| H4 | 20px | 700 | 1.3 | 0 |
| Lead | 18-20px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small / nav | 14px | 400-500 | 1.43 | 0 |
| Label | 12px | 700 | 1.33 | 0.04em, uppercase |
| Code | 14px JetBrains Mono | 400 | 1.6 | 0 |

Weights from tokens: light 300, regular 400, semibold 500, bold 700. Line heights and tracking approximate.

### Rules

- Headlines in sentence case or title case, bold, short.
- Category eyebrows uppercase 12px bold, sometimes green.
- Product names exactly as written: "GeForce RTX", "DGX", "Blackwell", "CUDA".
- Spec numbers in tables use tabular figures.

## 4. Logo & Brand Mark

The logo is the **eye** mark (a green square containing a stylised eye spiral, with the spiral breaking out to the left) followed by the **NVIDIA** wordmark in heavy, wide capitals with a distinctive open "N" and "V". The official file on nvidia.com is a horizontal lockup in green `#76B900` and black.

- **Versions:** green eye with black wordmark on white; green eye with white wordmark on black; all-white or all-black for single-color use.
- **The eye alone** is used for app icons, favicons and small avatars.
- **Clear space:** at least the height of the "N" around the lockup.
- **Minimum size:** about 80px wide for the horizontal lockup on screen.

Misuse:

- Do not recolor the eye in any green other than `#76B900`.
- Do not separate the wordmark from the eye in the main lockup or rearrange them.
- Do not set "NVIDIA" in another font as a logo.
- Do not add glows, bevels or 3D effects.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#76B900` | `#000000` 700 16px | none | 2px | 12px 24px (44-48px tall) |
| Primary hover | `#549A00` | `#000000` | | 2px | |
| Secondary on dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | 2px | 12px 24px |
| Secondary on light | transparent | `#000000` | 1px `#000000` | 2px | 12px 24px |
| Text with caret | none | `#76B900` 700 | none | 0 | 0 |
| Tertiary / ghost | transparent | current | none | 4px | 8px 12px |
| Disabled | `#EEEEEE` / `#313131` | `#A7A7A7` / `#4B4B4B` | | 2px | |

States: hover darkens green to `#549A00`; the caret on text links moves 4px right; focus ring white plus green (`0 0 0 3px #fff, 0 0 0 5px #76B900`). Transitions about 150ms ease.

```css
.nv-btn {
  font: 700 16px/1.25 "NVIDIA Sans", Inter, Arial, sans-serif;
  padding: 12px 24px;
  border-radius: 2px;
  background: #76B900;
  color: #000000;
  border: 0;
  transition: background-color .15s ease;
}
.nv-btn:hover { background: #549A00; }
.nv-link-caret { color: #76B900; font-weight: 700; }
.nv-link-caret::after { content: ">"; margin-left: 6px; display: inline-block; transition: transform .15s ease; }
.nv-link-caret:hover::after { transform: translateX(4px); }
```

### Global header

Black `#000000`, about 64px tall. Logo left. Top-level items (Platforms, Products, Solutions, Industries, For You, Shop, Drivers, Support) in white 14-16px 500. Search icon, account and a cart on the right. Active or hovered item gets a 2-3px green underline. Dropdowns are full-width mega menus on `#222222` or white with 3-4 columns of 14px links and green column headings.

### Sub-navigation (brand nav)

A secondary sticky bar under the header on product pages: product name left in bold, anchor links (Overview, Specs, Buy) center/right, and a small green "Buy now" button. Background black or white with a 1px bottom border.

### Cards

- **Product card:** white or `#161616`, radius 4-8px, 1px border `rgba(0,0,0,0.2)` (light) or `rgba(255,255,255,0.2)` (dark), image on top, 12px uppercase eyebrow, 20-24px bold title, 14-16px description, green caret link at the bottom. Hover adds `--shadow-md` `0 4px 6px rgba(0,0,0,0.12)`.
- **Story tile:** full-bleed photo with a dark gradient scrim and white text bottom left.

### Tabs

Horizontal text tabs, 16px 500, inactive grey, active white (dark) or black (light) with a 3px green underline. Used heavily on product pages (Overview, Specs, Reviews).

### Spec tables

Two or more columns, row height about 48px, 1px dividers `#313131` on dark or `#E0E0E0` on light, label column bold, values regular with tabular figures. Section headers in green.

### Forms

Inputs 44px tall, radius 2-4px, border 1px `#898989`, background white or `#161616`, label above 14px bold. Focus: green border. Errors: `#E52020`.

### Chips and badges

Filter chips: pill (9999px), 32px tall, 1px border, 14px. Badges ("New", "Available now"): 12px bold uppercase, green background with black text, 2px radius.

### Footer

Black, multi-column link lists in 14px `#CCCCCC`, headings white bold, social icons, and a legal row with 12px grey links.

## 6. Layout & Spacing

- **Max width:** about 1350-1440px for content, full-bleed hero bands (approx.).
- **Gutters:** 16px mobile, 24px tablet, 32-48px desktop.
- **Grid:** 12-column AEM grid (`aem-GridColumn`), cards in 2, 3 or 4 columns.
- **Spacing base:** 4px (`--spacing: 4px`); common steps 8, 12, 16, 24, 32, 48, 64, 96.
- **Section spacing:** 64-96px between bands.
- **Breakpoints:** roughly 640 (mobile), 1024 (tablet/laptop), 1350px (desktop) (approx.).
- **Density:** high; long pages with many sections and link-heavy menus.

## 7. Depth, Elevation & Motion

- **Shadows (tokens):** sm `0 2px 4px rgba(0,0,0,0.12)`, md `0 4px 6px rgba(0,0,0,0.12)`, lg `0 8px 12px rgba(0,0,0,0.15)`. Used on cards, dropdowns and modals; not on hero content.
- **Borders** do most of the work: 1px translucent lines on both dark and light.
- **Motion:** quick and functional. Menus fade/slide in 150-200ms, caret links nudge, carousels slide. Product heroes may use slow-motion video of hardware or rendered sequences.
- **Easing:** standard ease or `cubic-bezier(0.4, 0, 0.2, 1)` (approx.).

## 8. Iconography & Imagery

- **Icons:** Font Awesome 6 Pro is loaded site-wide; icons are solid or regular, 16-24px, white or black, green for emphasis.
- **Photography:** keynote stage shots, data center aisles with green-lit racks, close-ups of GPUs and boards on black, gaming screenshots, robots and autonomous vehicles.
- **Renders:** dramatic product renders on black with rim lighting, sometimes with green light accents.
- **Diagrams:** flat technical diagrams with thin lines, green highlights and labelled blocks.

## 9. Voice & Microcopy

Confident, technical and specific. Names platforms and products directly and backs claims with technical detail. Navigation and links seen on the live site today:

- Top nav: "Shop", "Drivers", "Support"
- Footer and section links: "Newsroom", "Investors", "Technical Blog", "Technical Training", "Webinars", "Startups and VCs", "Research"
- Common CTAs (approximate): "Learn more", "Shop now", "Buy now", "Download"

Rules: title case for navigation, sentence case for body. Product names are never abbreviated loosely ("GeForce RTX 50 Series", not "RTX cards"). Use specific numbers only when sourced.

## 10. Do's and Don'ts

**Do**

- Use `#76B900` for the primary action, link carets and active indicators.
- Use pure black and white bands for contrast.
- Keep corners sharp (2-4px).
- Use bold, compact headings and small uppercase eyebrows.
- Show hardware and technical diagrams instead of abstract illustrations.

**Don't**

- Don't introduce other bright accent colors in UI chrome.
- Don't use large radii or soft pastel surfaces.
- Don't put green text on white for body copy (low contrast); use `#3F8500` if needed.
- Don't add neon glows or gradients to the logo.
- Don't use rounded pill primary buttons.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of nvidia.com. Black global header (64px, white 14-16px links, green 3px underline on the active item). Alternate black `#000000` and white/`#F7F7F7` content bands. One accent: NVIDIA Green `#76B900` for primary buttons (black 700 text, 2px radius, 12px 24px padding, hover `#549A00`), text links that end in a `>` caret that slides 4px on hover, and active tab underlines. Font "NVIDIA Sans" with Inter fallback: headings 700 (hero 56px, H2 36px), body 16px 400, eyebrows 12px bold uppercase. Grays: `#161616` dark cards, `#222222` menus, `#313131` borders on dark, `#CCCCCC` secondary text on dark, `#636363` secondary on light. Cards have 4-8px radius, 1px translucent borders and `0 4px 6px rgba(0,0,0,0.12)` on hover. Use dense spec tables with tabular figures, product renders on black and a 12-column grid up to about 1440px.

```css
:root {
  --brand-green: #76B900;
  --brand-green-hover: #549A00;
  --brand-green-pressed: #3F8500;
  --brand-green-bright: #BFF230;
  --brand-black: #000000;
  --brand-gray-975: #0C0C0C;
  --brand-gray-950: #161616;
  --brand-gray-900: #222222;
  --brand-gray-800: #313131;
  --brand-gray-600: #636363;
  --brand-gray-400: #898989;
  --brand-gray-200: #CCCCCC;
  --brand-gray-100: #E0E0E0;
  --brand-gray-025: #F7F7F7;
  --brand-white: #FFFFFF;
  --brand-error: #E52020;
  --brand-border-dark: rgba(255,255,255,0.2);
  --brand-border-light: rgba(0,0,0,0.2);
  --brand-font: "NVIDIA Sans", Inter, Arial, Helvetica, sans-serif;
  --brand-font-mono: "JetBrains Mono", ui-monospace, monospace;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 8px;
  --brand-radius-xl: 16px;
  --brand-shadow-sm: 0px 2px 4px 0px rgba(0,0,0,0.12);
  --brand-shadow-md: 0px 4px 6px 0px rgba(0,0,0,0.12);
  --brand-shadow-lg: 0px 8px 12px 0px rgba(0,0,0,0.15);
  --brand-focus: 0 0 0 3px #FFFFFF, 0 0 0 5px #76B900;
  --brand-spacing: 4px;
}
```

---

Values are observed from the public nvidia.com CSS (Kaizen UI foundations) on 2026-11-16; type sizes per role, layout widths, breakpoints and easing are approximate. This file is an unofficial reference and is not affiliated with or endorsed by NVIDIA.

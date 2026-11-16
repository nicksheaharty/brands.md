---
name: Fortinet
slug: fortinet
url: https://fortinet.com
category: Hardware
tagline: "Black, white and Fortinet red, bold Inter caps buttons and the grid-shaped O."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Fortinet Red
    hex: "#DA291C"
    role: Brand color, logo grid mark, accents, divider bars
  - name: Black
    hex: "#000000"
    role: Wordmark, headings, outline buttons
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Midnight
    hex: "#131E29"
    role: Dark blue section layout, footers
  - name: Slate
    hex: "#323E48"
    role: Dark panels, secondary dark surface
  - name: Steel
    hex: "#5A646C"
    role: Secondary text
  - name: Text Grey
    hex: "#333333"
    role: Body text
  - name: Mist
    hex: "#F0F0F0"
    role: Light section background
  - name: Rule
    hex: "#E6E6E6"
    role: Borders, accordion headers
  - name: Link Blue
    hex: "#236093"
    role: Account links, utility text links
  - name: Sky
    hex: "#307FE2"
    role: Blue section layout accent
  - name: Green
    hex: "#3CB17E"
    role: Green section layout accent, threat research buttons
  - name: Teal
    hex: "#2CCCD3"
    role: Teal section layout accent
  - name: Purple
    hex: "#9164CC"
    role: Purple section layout accent
fonts:
  display:
    family: "Inter"
    fallback: "Inter"
    weights: [600, 700, 800]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [300, 400, 600]
typeScale:
  - { role: Hero, size: 48, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H2, size: 32, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 26, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Lead, size: 18, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Button, size: 15, weight: 700, lineHeight: 1.2, tracking: "1px" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 3, md: 10, lg: 20, pill: 30 }
spacing: [5, 10, 15, 20, 30, 40, 60, 80]
shadows:
  - { name: Card, value: "0 10px 20px -14px rgba(0,0,0,0.75)" }
  - { name: Lift, value: "0 32px 36px -30px rgba(0,0,0,0.59)" }
  - { name: Menu, value: "0 4px 8px 0 rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F0"
  text: "#000000"
  muted: "#5A646C"
  border: "#E6E6E6"
  accent: "#DA291C"
  accentText: "#FFFFFF"
  radius: 30
  buttonStyle: pill
---

# Fortinet

## 1. Visual Theme & Atmosphere

Fortinet's site reads like a hardware catalogue run by an engineering company: black type on white, heavy uppercase buttons, dense product grids and one strong red. The red (`#DA291C`) comes straight from the logo's grid-shaped "O" and is used sparingly, mostly for short divider bars, icons and highlights.

What makes it recognisable:

- **The grid O.** The logo's "O" is a 3x3 grid of red rounded blocks, a nod to firewalls and network segmentation. It doubles as the app icon and favicon.
- **Uppercase bold CTAs.** Buttons are Inter 700, uppercase, 1px letter spacing, either with a 2px black border (square) or as large white or outline pills on hero imagery.
- **Short colored divider bars.** Section headings often sit above a 118px x 7px bar in red or the section's layout color.
- **Color-coded layouts.** Content sections can be themed red, dark blue (`#131E29`), green (`#3CB17E`), blue (`#307FE2`), teal (`#2CCCD3`) or purple (`#9164CC`); the theme recolors borders, dividers and accents.
- **Dark photographic billboards.** The home hero is a full-width image with white headline text, a white pill and an outline pill.
- **Dense information.** Mega-menus, product tables and resource lists are packed tightly, which suits a buyer audience that compares models and specs.

Mood words: industrial, direct, technical, trustworthy, no-nonsense.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Fortinet Red | `#DA291C` | Logo mark, dividers, icons, active states |
| Black | `#000000` | Headings, logo wordmark, outline buttons |
| Text Grey | `#333333` | Body copy |
| Steel | `#5A646C` | Secondary text, meta, nav promo copy (`#515B65`) |
| Midnight | `#131E29` | Dark blue layout, footer, info panels |
| Slate | `#323E48` | Dark cards and panels |
| Deep Navy | `#02121D` | Darkest overlays on video and imagery |
| Mist | `#F0F0F0` | Light section background |
| Off White | `#F5F5F5` | Mega-menu panel background |
| Rule | `#E6E6E6` | Accordion header fill, dividers |
| Border | `#DDDDDD` | Card and table borders |
| Silver | `#CCCFD1` | Input borders, disabled outlines |
| White | `#FFFFFF` | Page background |

### Layout accents

| Layout | Hex | Use |
|---|---|---|
| Red | `#DA291C` | Default section theme |
| Dark blue | `#131E29` | Enterprise and product list sections |
| Green | `#3CB17E` | FortiGuard Labs and threat research |
| Blue | `#307FE2` | Cloud and networking topics |
| Teal | `#2CCCD3` | SASE and secure access (approximate mapping) |
| Purple | `#9164CC` | AI and SecOps topics (approximate mapping) |
| Link Blue | `#236093` | Utility links, signed-in account menu |

### Dark mode

No global dark theme. Dark sections use `#131E29` or black photography with white text and `#A2B2C8` secondary text.

## 3. Typography

**Family:** Inter for the whole site, with Noto Sans JP as a CJK fallback. A proprietary "Fortinet One" face appears only in the signed-in account menu. Older pages used Helvetica Neue.

**Licensing:** Inter is free (SIL OFL) and on Google Fonts, so you can use the real thing.

```css
font-family: "Inter", "Noto Sans JP", sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Notes |
|---|---|---|---|---|
| Hero | 48px (32px mobile) | 700 | 1.1 | White on photography (approximate) |
| H2 | 32px | 700 | 1.2 | Section heads |
| H3 | 26px (2.6rem in product sections) | 700 | 1.25 | |
| Lead | 18px | 300 | 1.5 | Under heroes |
| Body | 15px | 400 | 1.6 | Most frequent size in the CSS |
| Nav / Menu | 15-16px | 300-400 | 1.4 | Mega-menu body text is 300 |
| Button | 15px uppercase | 700 | 1.2 | 1px tracking |
| Small | 12-14px | 400 | 1.4 | Captions, legal |

### Rules

- Buttons and small headings in mega-menus are uppercase.
- Headings are title case or sentence case; both appear. Prefer sentence case for new work.
- Contrast between light (300) lead text and bold (700) headings is part of the look.
- Product names keep Fortinet casing: FortiGate, FortiOS, FortiSASE, FortiGuard Labs.

## 4. Logo & Brand Mark

The logo is the **FORTINET** wordmark in black, set in a squared, wide capitals style, with the "O" replaced by a 3x3 grid of red blocks with rounded outer corners.

- **Colors:** black wordmark with red `#DA291C` grid on white (primary); white wordmark with red grid on dark; all-white on photography.
- **Grid mark alone:** used as the favicon, app icon and social avatar, typically white on red or red on white.
- **Clear space:** at least the height of one grid block row on all sides (approximate).
- **Minimum size:** about 90px wide on screen.

Misuse:

- Do not replace the grid with a normal "O" or retype the wordmark.
- Do not recolor the grid in a layout accent.
- Do not place the black wordmark on dark imagery.
- Do not stretch, outline or add shadows.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Standard | transparent | `#000` 15px/700 uppercase | 2px `#000` | 0 | 18px 0, max-width 195px |
| Hero primary | `#FFFFFF` | `#000` 18px/600 uppercase | 2px `#FFF` | 30px | 15px 70px 15px 30px |
| Hero outline | transparent | `#FFF` | 2px `#FFF` | 30px | same |
| Ribbon CTA | `#FFFFFF` | `#333` 18px/700 | 1px `#FFF` | 30px | 15px 30px |
| Red (approximate) | `#DA291C` | `#FFF` 700 uppercase | 2px `#DA291C` | 0-30px | 14px 28px |
| Green | `#3CB17E` | `#FFF` | none | 30px | Threat research CTAs |

Hero pills carry a 26px circular arrow icon on the right that slides 5px right on hover.

```css
.btn {
  display: inline-block;
  font: 700 15px/1.2 "Inter", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000;
  padding: 18px 0;
  border: 2px solid #000;
  max-width: 195px;
  transition: background-color .3s;
}
.btn:hover { background: #000; color: #fff; }
.hero-pill {
  font: 600 18px "Inter", sans-serif; text-transform: uppercase;
  padding: 15px 70px 15px 30px; border: 2px solid #fff; border-radius: 30px;
  color: #000; background: #fff; transition: all .5s;
}
.hero-pill:hover { background: #ddd; }
```

### Inputs

- Height 40-44px, 1px `#CCCFD1` border, radius 3-4px, 15px text (approximate).
- Focus: 1px `#000` border or `0 0 0 1px #000`.
- Search uses option tabs above the field in `#236093`.

### Cards

- White or `#F0F0F0`, radius 0-10px, often no border.
- Signature card shadow is a tight under-glow: `0 10px 20px -14px rgba(0,0,0,.75)`, giving a lifted edge rather than a halo.
- Promo cards: image top, 12px uppercase label, 18-20px bold title, "Learn more »" link.

### Navigation

- Two tiers: a thin utility bar (Support, Partners, Login, language) and a main white bar with the logo left and mega-menu triggers ("Products", "Solutions", "Resources", "Support", "Company").
- Mega-menus are full-width panels in `#F5F5F5` with 300-weight 16px links in columns, uppercase 14px group heads and a promo column with a 12px bold "cta" link in `#515B65`.
- Right side: search, "Contact Us" and "Free Product Demo".

### Accordions

Header fill `#E6E6E6`, 48px line height, left-aligned 15px bold label, plus/minus icon on the right.

### Section divider (signature)

```css
.divider { width: 118px; height: 7px; background: #DA291C; margin: 2.5rem 0 2.3rem; }
```

### Badges

Small uppercase labels, 11-12px/700, red or black fill with white text, radius 2-3px.

## 6. Layout & Spacing

- **Grid:** Bootstrap 12 columns. Breakpoints at 576, 768, 992 and 1200px, with a wide layout up to 1540px.
- **Max width:** 1240px for main content; heroes are full bleed.
- **Spacing:** 5px based (5, 10, 15, 20, 30, 40, 60, 80).
- **Section padding:** 60-80px desktop, 40px mobile.
- **Columns sections:** on mobile each column gets a 13px top border in the layout color to separate stacked content.
- **Density:** high in menus and product pages, moderate on the home page.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 10px 20px -14px rgba(0,0,0,0.75)` |
| Lift | `0 32px 36px -30px rgba(0,0,0,0.59)` |
| Soft | `0 13px 14px -7px rgba(0,0,0,0.51)` |
| Menu | `0 4px 8px 0 rgba(0,0,0,0.2)` |

Motion is simple and a little slow:

- Button fills: `background-color .3s`; hero pills `all .5s`.
- Carousels and image fades: `opacity 1s`, `background 1s`.
- Arrows on hover: `all .3s ease-in-out`.
- Link color: `color .4s ease`.

## 8. Iconography & Imagery

- **Icons:** solid, geometric icons in red or black, 24-48px, often inside a circle for feature lists.
- **Photography:** dark, high-contrast shots of data centers, city networks and people at work, often with blue or red light.
- **Product imagery:** FortiGate appliances shot straight-on or at a slight angle on white, showing ports and the grid logo.
- **Diagrams:** flat network diagrams with red and dark blue nodes and thin grey connectors.

## 9. Voice & Microcopy

Plain, assertive, analyst-friendly. It talks about convergence of networking and security, AI-driven threat intelligence and performance. Analyst recognition (Gartner, Forrester) is a recurring proof point; check any report claim on the live site before you use it.

- Uppercase CTAs with two or three words.
- Links end with "»" in content lists.
- Product and platform names are always precise.

Sample strings:

- Hero: "Give AI Room to Run. Not Free Rein"
- Section: "Fortify Your Network Through the Convergence of Networking and Security"
- Section: "Secure and Transform Your Business with AI"
- CTA: "GET THE REPORT", "LEARN MORE", "Free Product Demo", "Contact Us"
- Link: "Learn more about Unified SASE »"

## 10. Do's and Don'ts

**Do**

- Keep black on white with red as a sparing accent.
- Use uppercase 700 Inter for buttons with 1px tracking.
- Use the short red divider bar under section headings.
- Theme sections with one layout color and apply it to borders and dividers.
- Show real hardware and network diagrams.

**Don't**

- Don't flood backgrounds with red; it is an accent.
- Don't use soft pastel palettes or thin, light headings.
- Don't mix rounded pill buttons and square outline buttons in the same group.
- Don't redraw the grid "O" or use it as a decorative pattern.
- Don't write vague claims; name the product and the outcome.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Fortinet. White page, black headings `#000000`, body text `#333333` at 15px/1.6, secondary text `#5A646C`. Font: `"Inter", sans-serif` throughout; headings 700, lead text 300. Brand red `#DA291C` is an accent only: logo, icons, and a 118px x 7px divider bar under each section heading. Buttons are uppercase Inter 700 with 1px letter spacing: standard is a square 2px black outline that fills black on hover; hero CTAs are 30px-radius pills (white fill with black text, or white outline) with a circular arrow on the right. Light sections use `#F0F0F0`, dark sections `#131E29`. Cards are white with a tight under-shadow `0 10px 20px -14px rgba(0,0,0,.75)`. Mega-menus are full-width `#F5F5F5` panels with light 16px links. Use a 1240px Bootstrap-style grid, 60-80px section padding, and short, assertive copy.

```css
:root {
  --brand-red: #DA291C;
  --brand-black: #000000;
  --brand-text: #333333;
  --brand-text-muted: #5A646C;
  --brand-white: #FFFFFF;
  --brand-surface: #F0F0F0;
  --brand-surface-menu: #F5F5F5;
  --brand-rule: #E6E6E6;
  --brand-border: #DDDDDD;
  --brand-midnight: #131E29;
  --brand-slate: #323E48;
  --brand-link: #236093;
  --brand-green: #3CB17E;
  --brand-blue: #307FE2;
  --brand-teal: #2CCCD3;
  --brand-purple: #9164CC;
  --brand-font: "Inter", "Noto Sans JP", sans-serif;
  --brand-radius-sm: 3px;
  --brand-radius-md: 10px;
  --brand-radius-lg: 20px;
  --brand-radius-pill: 30px;
  --brand-shadow-card: 0 10px 20px -14px rgba(0,0,0,0.75);
  --brand-shadow-lift: 0 32px 36px -30px rgba(0,0,0,0.59);
  --brand-shadow-menu: 0 4px 8px 0 rgba(0,0,0,0.2);
  --brand-duration: .3s;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Fortinet.

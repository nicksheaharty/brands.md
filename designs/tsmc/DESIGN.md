---
name: TSMC
slug: tsmc
url: https://tsmc.com
category: Hardware
tagline: "Sober corporate pages in white and charcoal, with the wafer logo's red as the only accent."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: TSMC Red
    hex: "#E60012"
    role: Logo wordmark and rule, brand accent, active states
  - name: Charcoal
    hex: "#211714"
    role: Logo wafer grid lines, darkest text (from the logo file)
  - name: White
    hex: "#FFFFFF"
    role: Page background, logo wafer fill
  - name: Ink
    hex: "#222222"
    role: Headings and body text (approximate)
  - name: Slate
    hex: "#555555"
    role: Secondary text (approximate)
  - name: Light Gray
    hex: "#F4F4F4"
    role: Alternate section background (approximate)
  - name: Border
    hex: "#DDDDDD"
    role: Dividers, table rules, card borders (approximate)
  - name: Red Dark
    hex: "#B8000E"
    role: Hover and pressed state of red elements (approximate)
  - name: Steel Gray
    hex: "#8A8A8A"
    role: Captions, dates, metadata (approximate)
  - name: Night
    hex: "#1A1A1A"
    role: Footer and dark banners (approximate)
  - name: Link Blue
    hex: "#0056A6"
    role: Inline links in documents and investor pages (approximate)
fonts:
  display:
    family: "Arial"
    fallback: "Noto Sans"
    weights: [400, 700]
  body:
    family: "Arial"
    fallback: "Noto Sans"
    weights: [400, 700]
typeScale:
  - { role: Hero, size: 44, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: H1, size: 36, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: H2, size: 28, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: H3, size: 20, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 2px 8px rgba(0,0,0,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#222222"
  muted: "#555555"
  border: "#DDDDDD"
  accent: "#E60012"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# TSMC

> **Source note:** tsmc.com returned an HTTP 403 to automated requests on 2026-11-16, so its live CSS could not be read. The logo colors (`#E60012`, `#211714`) come from the logo file on Wikipedia. Everything else in this file is approximate and based on the general look of TSMC's corporate site and investor materials. Check against the live site before relying on exact values.

## 1. Visual Theme & Atmosphere

TSMC (Taiwan Semiconductor Manufacturing Company) is the world's largest dedicated chip foundry. It makes chips for other companies rather than selling consumer products, so its website serves investors, customers, job seekers, press and regulators. The look is a conservative corporate site: white pages, charcoal text, wide photography of fabs and cleanrooms, and red drawn from the logo for small accents.

What makes it recognisable:

- **The wafer logo.** A circular silicon wafer drawn as a grid of dies, with the lowercase red "tsmc" wordmark across it and a red rule underneath.
- **One red.** `#E60012` appears in the logo, active nav states, small rules under headings and occasional buttons. It is never used for large backgrounds.
- **Information first.** Long navigation trees (About, Technology, Manufacturing, Services, Sustainability, Investors, Newsroom, Careers), news lists with dates, downloadable PDFs and data tables.
- **Industrial photography.** Cleanroom workers in suits, wafer close-ups with rainbow diffraction, fab exteriors, and Taiwan landscapes for sustainability pages.
- **Square geometry.** Flat panels and buttons with square or nearly square corners.

Mood words: institutional, precise, restrained, trustworthy, technical.

## 2. Color Palette & Roles

| Name | Hex | Role | Source |
|---|---|---|---|
| TSMC Red | `#E60012` | Logo, accent rules, active states | Logo file |
| Charcoal | `#211714` | Wafer grid lines in the logo | Logo file |
| White | `#FFFFFF` | Page, wafer fill | Logo file |
| Ink | `#222222` | Headings and body text | Approximate |
| Slate | `#555555` | Secondary text | Approximate |
| Steel Gray | `#8A8A8A` | Dates, captions | Approximate |
| Border | `#DDDDDD` | Dividers, table rules | Approximate |
| Light Gray | `#F4F4F4` | Alternate sections, table headers | Approximate |
| Night | `#1A1A1A` | Footer, dark banners | Approximate |
| Red Dark | `#B8000E` | Hover/pressed on red | Approximate |
| Link Blue | `#0056A6` | Inline links in long documents | Approximate |

### Semantic colors (approximate)

| State | Hex | Use |
|---|---|---|
| Positive | `#2E7D32` | Growth figures in investor tables |
| Negative | `#C62828` | Declines, form errors |
| Info | `#0056A6` | Notices, links |

Keep red for brand and emphasis; use a darker red or a neutral for errors so they are not confused with brand accents.

### Dark mode

No dark theme. Dark appears only in the footer and on photo banners with a black scrim.

## 3. Typography

TSMC's site is bilingual (English and Traditional Chinese) and appears to use system sans-serif stacks rather than a custom typeface. For English, an Arial or Helvetica-style stack; for Chinese, Microsoft JhengHei or Noto Sans TC (approximate).

**Recommended free stack:** **Noto Sans** for Latin and **Noto Sans TC** for Chinese, both on Google Fonts, so mixed-language pages share metrics.

```css
font-family: Arial, "Noto Sans", "Noto Sans TC", "Microsoft JhengHei", Helvetica, sans-serif;
```

### Scale (approximate)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero banner | 40-48px | 700 | 1.2 |
| Page title (H1) | 36px | 700 | 1.25 |
| Section heading (H2) | 28px | 700 | 1.3 |
| Subheading (H3) | 20px | 700 | 1.4 |
| Body | 16px | 400 | 1.6 |
| Navigation | 15-16px | 400-700 | 1.3 |
| Small / table | 14px | 400 | 1.5 |
| Caption / date | 12-13px | 400 | 1.5 |

### Rules

- Title case for navigation and page titles; sentence case for body.
- The company name is "TSMC" in running text (all caps), while the logo is lowercase "tsmc".
- Process names as written by TSMC: "N3", "N2", "A16", "CoWoS", "SoIC".
- Use tabular figures for financial tables; right-align numbers.
- Generous line height (1.6) for long reports and press releases.

## 4. Logo & Brand Mark

The logo combines a **wafer** (a white circle filled with a fine charcoal grid of dies, with a few filled black squares) and the lowercase **tsmc** wordmark in a red, heavy serif-like face, with a horizontal red bar under the wafer.

- **Colors:** red `#E60012`, charcoal `#211714` grid, white wafer. Use on white or very light grey only.
- **Single color:** all red or all black for print and small uses.
- **Clear space:** at least the height of the "t" around the whole mark.
- **Minimum size:** about 60px wide on screen, so the die grid stays legible; below that, use a simplified red wordmark.

Misuse:

- Do not place the full-color logo on photos or dark backgrounds.
- Do not remove the wafer and set "tsmc" in another font.
- Do not recolor the wafer grid or add gradients and shadows.
- Do not capitalise the wordmark.

## 5. Components

All component values below are approximate.

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#E60012` | `#FFFFFF` 700 15px | none | 2px | 10px 24px |
| Secondary | `#FFFFFF` | `#222222` | 1px `#222222` | 2px | 10px 24px |
| Outline on photo | transparent | `#FFFFFF` | 1px `#FFFFFF` | 2px | 10px 24px |
| Text link | none | `#222222` with red arrow | none | 0 | 0 |
| Download | `#F4F4F4` | `#222222` with PDF icon | 1px `#DDDDDD` | 2px | 8px 16px |

States: primary hover `#B8000E`; secondary hover fills `#222222` with white text; focus `outline: 2px solid #E60012; outline-offset: 2px`; disabled `#DDDDDD` with `#8A8A8A` text.

```css
.tsmc-btn {
  font: 700 15px/1.3 Arial, "Noto Sans", sans-serif;
  padding: 10px 24px;
  border-radius: 2px;
  background: #E60012;
  color: #FFFFFF;
  border: 0;
  transition: background-color .2s ease;
}
.tsmc-btn:hover { background: #B8000E; }
.tsmc-btn--secondary { background: #FFF; color: #222; border: 1px solid #222; }
```

### Header and navigation

- White header about 72-80px tall, logo left, primary links across the top in 15-16px charcoal, language switch (English / 中文) and search on the right.
- Active or hovered item: red text or a 3px red underline.
- Mega menus: white panels with a light top border, 3-4 columns of 14px links grouped under bold headings.

### Hero banner

Full-width photograph (fab, wafer, people) 400-560px tall, with a white or dark headline block overlaid at bottom left and one CTA. Carousels use small square or bar indicators, the active one red.

### News list

Rows with a date (13px grey, often `YYYY/MM/DD`), title (16-18px charcoal, red on hover), optional category tag, 1px `#DDDDDD` dividers. "More" link at the end.

### Cards

White, 1px `#DDDDDD` border or `0 2px 8px rgba(0,0,0,0.08)` shadow, 0-4px radius, image top, 18-20px bold title, 14px summary. A short red rule (24-40px wide, 3px tall) may sit above the title.

### Data tables (investor relations)

Header row `#F4F4F4` with bold 14px labels, body rows 14px with 1px dividers, numbers right-aligned with tabular figures, units in the header ("NT$ billion"). Zebra striping optional.

### Tabs and filters

Underlined text tabs; active tab charcoal with a red 3px underline. Year and category filters as plain select boxes with 1px borders and square corners.

### Footer

Dark `#1A1A1A` background, white headings, `#CCCCCC` 13-14px links in columns, then a legal row with copyright and privacy links.

## 6. Layout & Spacing

- **Max width:** about 1200-1280px centred.
- **Gutters:** 16px mobile, 24-32px desktop.
- **Grid:** 12 columns; news and cards in 3 or 4 columns, sidebars for sub-navigation on deep pages.
- **Section spacing:** 48-80px.
- **Base unit:** 8px.
- **Breakpoints:** 768px and 1200px.
- **Density:** medium to high; many links and lists, with tidy alignment.

## 7. Depth, Elevation & Motion

- Flat by default; separation through borders and light grey bands.
- Cards may use one soft shadow `0 2px 8px rgba(0,0,0,0.08)`.
- Motion is minimal: hero carousel crossfades (about 600ms), hover color changes 200ms, menus fade in 150-200ms.
- No parallax, no playful animation.

## 8. Iconography & Imagery

- **Icons:** simple line or solid glyphs, 16-24px, charcoal; red for active states. Common: search, globe (language), download, PDF, arrow right, play.
- **Photography:** cleanroom interiors with yellow lighting, engineers in bunny suits, wafers reflecting rainbow diffraction, aerial shots of fabs, green landscapes for sustainability. High resolution, cool or neutral grading.
- **Diagrams:** process roadmaps and packaging cross-sections in flat colors with thin lines; red used to highlight the current node.
- **Charts:** simple bar and line charts in charcoal, grey and red.

## 9. Voice & Microcopy

Formal, precise and measured. Speaks as an institution to investors, customers and the public. Typical strings (approximate, not read from the live site today):

- Navigation: "About TSMC", "Dedicated IC Foundry", "Technology", "Manufacturing", "Sustainability", "Investor Relations", "Newsroom", "Careers"
- CTAs: "Learn more", "Read more", "Download", "View all news"

Rules: avoid hype; describe technology and outcomes plainly. Use exact process names. Dates in an unambiguous format. Financial figures only from official reports.

## 10. Do's and Don'ts

**Do**

- Keep pages white and charcoal with red used for small accents.
- Use the full-color wafer logo on white only.
- Use square or nearly square corners.
- Present information in clear lists, tables and downloads.
- Use real fab and wafer photography.

**Don't**

- Don't use red as a large background or for long text.
- Don't add gradients, glass effects or neon.
- Don't use playful or casual microcopy.
- Don't invent technical figures or capacity numbers.
- Don't use rounded pill buttons as the main action.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of TSMC's corporate website. White page, charcoal text `#222222`, secondary text `#555555`, captions `#8A8A8A`, borders `#DDDDDD`, alternate section `#F4F4F4`, dark footer `#1A1A1A`. Brand accent TSMC Red `#E60012` used only for the logo, active nav underlines, short heading rules and the primary button (2px radius, white bold text, hover `#B8000E`). Font stack Arial, "Noto Sans", "Noto Sans TC", sans-serif; headings 700, body 16px with 1.6 line height. Layout: 80px white header with logo left and a long primary nav, a full-width fab photo hero with an overlaid headline, then a news list (date, title, divider), cards with thin borders, and investor data tables with right-aligned tabular figures. Square geometry, flat surfaces, very little motion. Formal copy.

```css
:root {
  --brand-red: #E60012;
  --brand-red-dark: #B8000E;
  --brand-charcoal: #211714;
  --brand-ink: #222222;
  --brand-slate: #555555;
  --brand-steel: #8A8A8A;
  --brand-border: #DDDDDD;
  --brand-surface: #F4F4F4;
  --brand-bg: #FFFFFF;
  --brand-night: #1A1A1A;
  --brand-link: #0056A6;
  --brand-font: Arial, "Noto Sans", "Noto Sans TC", "Microsoft JhengHei", Helvetica, sans-serif;
  --brand-radius-sm: 0px;
  --brand-radius-md: 2px;
  --brand-radius-lg: 4px;
  --brand-shadow-card: 0 2px 8px rgba(0,0,0,0.08);
  --brand-rule: 3px solid #E60012;
  --brand-content-width: 1200px;
}
```

---

Only the logo colors are confirmed from a source file; tsmc.com blocked automated access on 2026-11-16, so all other values are approximate. This file is an unofficial reference and is not affiliated with or endorsed by TSMC.

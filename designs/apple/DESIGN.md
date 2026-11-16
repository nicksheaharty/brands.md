---
name: Apple
slug: apple
url: https://apple.com
category: Hardware
tagline: "Product-first pages: huge photography, SF Pro headlines, grey tiles, blue pill buttons."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Near Black
    hex: "#1D1D1F"
    role: Primary text, headlines, dark buttons
  - name: White
    hex: "#FFFFFF"
    role: Page and tile background
  - name: Light Gray
    hex: "#F5F5F7"
    role: Alternate tiles, footer, secondary button fill
  - name: Action Blue
    hex: "#0071E3"
    role: Primary button fill
  - name: Link Blue
    hex: "#0066CC"
    role: Text links, secondary button text and border
  - name: Bright Blue
    hex: "#2997FF"
    role: Links and outlines on dark backgrounds
  - name: Black
    hex: "#000000"
    role: Dark tiles and hero backgrounds
  - name: Secondary Gray
    hex: "#6E6E73"
    role: Secondary text, footer text
  - name: Tertiary Gray
    hex: "#86868B"
    role: Captions, legal text, placeholder
  - name: Divider
    hex: "#D2D2D7"
    role: Hairlines, input borders
  - name: Nav Gray
    hex: "#333336"
    role: Global nav secondary text
  - name: Dark Surface
    hex: "#161617"
    role: Dark nav flyout, dark sections
  - name: Blue Hover
    hex: "#0076DF"
    role: Primary button hover
  - name: Blue Active
    hex: "#006EDB"
    role: Primary button pressed
  - name: System Red
    hex: "#E30000"
    role: Errors and destructive text on web (approximate)
  - name: Product Orange
    hex: "#BF4800"
    role: Eyebrow labels for new products (approximate)
fonts:
  display:
    family: "SF Pro Display"
    fallback: "Inter"
    weights: [500, 600, 700]
  body:
    family: "SF Pro Text"
    fallback: "Inter"
    weights: [400, 600]
  mono:
    family: "SF Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero headline, size: 56, weight: 600, lineHeight: 1.07, tracking: "-0.005em" }
  - { role: Section headline, size: 48, weight: 600, lineHeight: 1.08, tracking: "-0.003em" }
  - { role: Tile headline, size: 40, weight: 600, lineHeight: 1.1, tracking: "0" }
  - { role: Promo headline, size: 32, weight: 600, lineHeight: 1.125, tracking: "0.004em" }
  - { role: Subhead, size: 21, weight: 400, lineHeight: 1.38, tracking: "0.011em" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.47, tracking: "-0.022em" }
  - { role: Body reduced, size: 14, weight: 400, lineHeight: 1.43, tracking: "-0.016em" }
  - { role: Footnote, size: 12, weight: 400, lineHeight: 1.33, tracking: "-0.01em" }
radii: { sm: 8, md: 12, lg: 18, pill: 980 }
spacing: [4, 8, 12, 14, 17, 22, 32, 44, 64, 80]
shadows:
  - { name: Card hover, value: "2px 4px 12px rgba(0,0,0,0.08)" }
  - { name: Floating, value: "3px 5px 30px rgba(0,0,0,0.22)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F7"
  text: "#1D1D1F"
  muted: "#6E6E73"
  border: "#D2D2D7"
  accent: "#0071E3"
  accentText: "#FFFFFF"
  radius: 980
  buttonStyle: pill
---

# Apple

## 1. Visual Theme & Atmosphere

apple.com is a product catalog that behaves like a magazine cover. Each product gets a full-width tile: a short headline, a one-line subhead, two small pill buttons and a large, perfectly lit product photo or video. Chrome is nearly invisible. The palette is white, light grey `#F5F5F7`, near-black `#1D1D1F` and one blue `#0071E3` for actions.

What makes it recognisable:

- **The product is the hero.** Photography is huge, centred and on clean white, grey or black. UI never competes with it.
- **SF Pro everywhere.** Display cuts for headlines at weight 600, Text cuts for body, with optical tracking that changes per size.
- **Tiles in a stack.** The homepage is a vertical stack of full-bleed tiles, then a two-column grid of smaller tiles separated by 12px white gaps.
- **Translucent global nav.** A 44-48px bar with `rgba(250,250,252,0.8)` and `backdrop-filter: saturate(180%) blur(20px)`, with small 12px grey links.
- **Pill buttons.** "Learn more" and "Buy" are compact pills with a 980px radius.
- **Restraint.** No borders around tiles, almost no shadows, no decorative color. Color comes from the products themselves.

Mood words: calm, premium, precise, confident, spacious.

## 2. Color Palette & Roles

Values below are from the live apple.com stylesheets (global header, homepage and button styles) unless marked approximate.

| Name | Hex | Role |
|---|---|---|
| Near Black | `#1D1D1F` | Headlines and body text on light, dark button fill |
| White | `#FFFFFF` | Page, light tiles |
| Light Gray | `#F5F5F7` | Alternate tiles, footer, secondary button |
| Action Blue | `#0071E3` | Primary button (`rgb(0,113,227)`) |
| Blue Hover | `#0076DF` | Primary hover |
| Blue Active | `#006EDB` | Primary pressed |
| Link Blue | `#0066CC` | Inline links, secondary button outline |
| Bright Blue | `#2997FF` | Links on dark tiles |
| Black | `#000000` | Dark tiles |
| Dark Surface | `#161617` | Dark nav flyout background |
| Secondary Gray | `#6E6E73` | Secondary copy, footer |
| Tertiary Gray | `#86868B` | Captions, legal |
| Divider | `#D2D2D7` | Hairlines (approximate from footer) |
| Nav Gray | `#333336` | Global nav secondary text (light) |
| Nav Light | `#E8E8ED` | Global nav secondary text (dark), secondary button hover |

### Global nav

| State | Background | Text |
|---|---|---|
| Light | `rgba(250,250,252,0.8)` + `saturate(180%) blur(20px)` | `rgba(0,0,0,0.8)`, hover `#000000` |
| Dark | `rgba(22,22,23,0.8)` | `rgba(255,255,255,0.8)`, hover `#FFFFFF` |
| Flyout open | `#FAFAFC` / `#161617` | secondary `#333336` / `#E8E8ED` |

### Semantic colors

The marketing site has few states. In forms and Apple Store flows: errors in red (approx. `#E30000`) with a pale red field fill, success in green (approx. `#008009`), "New" eyebrows in orange (approx. `#BF4800`).

### HIG system colors (for app UIs)

When building an app that should feel like Apple's own, use the iOS system colors: systemBlue `#007AFF` (dark `#0A84FF`), systemGreen `#34C759`, systemRed `#FF3B30`, systemOrange `#FF9500`, systemYellow `#FFCC00`, systemGray `#8E8E93`, grouped background `#F2F2F7`, separator `rgba(60,60,67,0.29)`.

### Dark mode

The website uses dark tiles (black `#000000` with white text, links `#2997FF`) rather than a site-wide dark theme. Apps follow the system appearance with semantic colors.

## 3. Typography

**Families:** SF Pro Display (20px and up) and SF Pro Text (below 20px), declared as `"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif`. Localized variants (SF Pro SC, TC, KR, AR, TH) swap in per locale.

**Licensing:** SF Pro may only be used for designs of Apple platform software. For a public website, use **Inter** (closest metrics) and let Apple devices pick the system font with `-apple-system, BlinkMacSystemFont`.

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, "Helvetica Neue", Arial, sans-serif;
```

### Web scale (from production classes)

| Class / role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero headline | 56px | 600 | 1.07 | -0.005em |
| typography-headline (large) | 48px | 600 | 1.083 | -0.002em |
| Tile headline | 40px | 600 | 1.1 | 0 |
| typography-promo-headline | 32px | 600 | 1.125 | 0.004em |
| Tile subhead | 21-28px | 400 | 1.2-1.38 | 0.011em |
| Body | 17px | 400 | 1.47 | -0.022em |
| Body reduced / button | 14px | 400 | 1.43 | -0.016em |
| Global nav link | 12px | 400 | 1.0 | -0.01em |
| Footnote / legal | 12px | 400 | 1.33 | -0.01em |

Mobile: hero 40px, tile headline 32px, body 17px.

### HIG Dynamic Type (iOS default sizes, points)

Large Title 34 regular, Title 1 28, Title 2 22, Title 3 20, Headline 17 semibold, Body 17, Callout 16, Subheadline 15, Footnote 13, Caption 1 12, Caption 2 11.

### Rules

- Sentence case or title-style product names exactly as trademarked ("iPhone 18 Pro", "AirPods Pro 3", "iPad").
- Headlines are short, often a product name plus a short line ("Gifts they'll love.").
- Tracking is negative at body sizes and near zero at large sizes; never add positive tracking to body.
- Use 600 for headlines, 400 for everything else. Avoid 700+ on the web.

## 4. Logo & Brand Mark

The Apple logo is the bitten apple silhouette with a leaf. On apple.com it appears as a small glyph (about 14x44px hit area) at the left of the global nav, in `rgba(0,0,0,0.8)` on light and white on dark.

- **Color:** single color only: black, white or near-black. Never multicolor (the rainbow logo is retired).
- **Clear space:** at least one third of the logo height on all sides.
- **Size:** in the nav it is roughly 16-18px tall.
- **App icons:** each Apple app has its own icon; the Apple Store app uses a blue icon with a white shopping bag carrying the logo.

Misuse:

- Do not use the Apple logo to imply endorsement or in your own product name.
- Do not rotate, outline, add a gradient or fill it with imagery.
- Do not pair it with a wordmark "Apple" in a lockup; Apple uses the glyph alone.

## 5. Components

### Buttons

Base from the live `.button` class: 14px SF Pro Text, padding 8px 15px (9px 16px minus a 1px border), radius 980px, min width about 28px plus padding.

| Variant | Background | Text | Border | Padding | Font |
|---|---|---|---|---|---|
| Primary | `#0071E3` | `#FFFFFF` | none | 9px 16px | 14px |
| Primary large | `#0071E3` | `#FFFFFF` | none | 12px 22px | 17px |
| Secondary | transparent | `#0066CC` | 1px `#0066CC` | 9px 16px | 14px |
| Secondary on dark | transparent | `#2997FF` | 1px `#2997FF` | 9px 16px | 14px |
| Neutral light | `#F5F5F7` | `#1D1D1F` | none | 9px 16px | 14px |
| Neutral dark | `#1D1D1F` | `#FFFFFF` | none | 9px 16px | 14px |
| Text link with chevron | none | `#0066CC` | none | 0 | 17px |

States: primary hover `#0076DF`, pressed `#006EDB`; secondary hover fills `#0076DF` with white text; neutral hover `#272729` (dark) or `#EDEDF2` (light); disabled opacity 0.42. Focus: `outline: 2px solid #0071E3; outline-offset: 2px` (approx.).

```css
.apple-btn {
  font: 400 14px/1.2857 -apple-system, "SF Pro Text", Inter, sans-serif;
  letter-spacing: -0.016em;
  padding: 8px 15px;
  border: 1px solid transparent;
  border-radius: 980px;
  background: #0071E3;
  color: #FFFFFF;
  min-width: 28px;
}
.apple-btn:hover { background: #0076DF; }
.apple-btn:active { background: #006EDB; }
.apple-btn--secondary { background: transparent; color: #0066CC; border-color: #0066CC; }
```

### Global nav

Height 44px (48px on wider layouts), full width, translucent with blur. Content max width 1024px, centred: Apple glyph, then Store, Mac, iPad, iPhone, Watch, Vision, AirPods, TV & Home, Entertainment, Accessories, Support, then search and bag icons. Links 12px, `rgba(0,0,0,0.8)`. Hovering opens a full-width flyout (`#FAFAFC`) with large 24px semibold product links and small grey column headings; flyout links fade in over 0.5s.

### Product tile

- Full width (homepage hero) or half width (grid), white, `#F5F5F7` or black background.
- Centred stack: product name headline (40-56px 600), subhead (21-28px 400), two buttons 14-17px with 14-18px gap ("Learn more" primary, "Buy" secondary), then imagery.
- Tile heights about 580-692px desktop. Grid tiles have 12px gaps and no radius on the homepage; Store pages use cards with 18px radius.

### Store cards

On apple.com/store and product "Compare" pages: white cards on `#F5F5F7`, radius 18px, padding 24-30px, product image top, name 17-21px 600, price 14-17px, color dots (12px circles). Hover lifts with a soft shadow (approx. `2px 4px 12px rgba(0,0,0,0.08)`) and scale 1.01.

### Local nav (product pages)

A sticky 52px bar under the global nav: product name left (21px 600), links (Overview, Tech Specs, Compare) 12px right, and a small blue "Buy" pill. Background `rgba(255,255,255,0.72)` with blur and a bottom hairline.

### Forms

Inputs 56px tall with floating labels, radius 12px, border 1px `#86868B`, focus border `#0071E3` with a 4px ring `rgba(0,113,227,0.3)` (approx.), error border red with a pale red fill.

### Footer

`#F5F5F7` background, 12px text in `#6E6E73`, footnotes first, then a directory of columns with 12px semibold headings, a hairline, and legal links separated by vertical bars.

### HIG components (apps)

Navigation bars with large titles, tab bars with 5 or fewer items, grouped inset lists with 10pt corner radius, 44x44pt minimum tap targets, sheets with grabbers, SF Symbols for icons, and system materials (thin, regular, thick) for translucent layers.

## 6. Layout & Spacing

- **Content widths:** global nav content 1024px; most text blocks 692-980px; wide grids up to 1440px; viewport tiles go edge to edge.
- **Gutters:** 22px (`--sk-safe-area` style padding) on large screens, 16px on small.
- **Spacing:** generous vertical rhythm; sections 80-120px apart on product pages. Common steps 8, 12, 14, 17, 22, 32, 44px.
- **Breakpoints:** large 1069px and up, medium 735-1068px, small 734px and below (approximate from apple.com conventions).
- **Grid:** homepage grid is 2 columns on desktop, 1 on small, 12px gaps.

## 7. Depth, Elevation & Motion

- **Depth from materials:** translucent blur (`saturate(180%) blur(20px)`) for nav bars and overlays; almost no drop shadows. The one large shadow in the homepage CSS is `3px 5px 30px rgba(0,0,0,0.22)` for floating media.
- **Borders:** hairlines only, often `#D2D2D7` or `rgba(0,0,0,0.1)`.
- **Motion:** scroll-driven reveals on product pages (fade and slide 20-40px, scrubbed to scroll), video that plays when in view, nav flyouts with 240ms medium duration and staggered link fades. Easing often `cubic-bezier(0.4, 0, 0.6, 1)` (approx.). Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** SF Symbols in apps; on the web a small set of line glyphs (search, bag, chevrons, play/pause) at 1-1.5px visual stroke, matching text weight.
- **Product photography:** studio-lit renders and photos, product centred, no props or minimal props, consistent shadows, heavy use of product color for the page mood (e.g. tile background tinted to match a finish).
- **Lifestyle imagery:** diverse people in natural light, often in Apple TV+, Fitness or Watch campaigns.
- **Chevrons:** links end with a small `>` chevron glyph (Apple Legacy Chevron font), not an arrow.

## 9. Voice & Microcopy

Short, confident and benefit-led, often a pun or a rhythm of short sentences. Strings on the live homepage today:

- "Gifts they'll love."
- "Endless entertainment."
- Tile names: "iPhone Duo", "iPhone 18 Pro", "iPad", "AirPods Pro 3"
- Buttons: "Learn more", "Buy", "Shop"

Rules: trademark product names exactly; periods at the end of short headlines; sentence case; avoid exclamation marks; legal footnotes numbered and listed in the footer.

## 10. Do's and Don'ts

**Do**

- Let product imagery fill the tile; keep text centred and short.
- Use `#1D1D1F` text on white or `#F5F5F7`, white text on black.
- Use one blue `#0071E3` for actions and `#0066CC` for links.
- Use 980px pill buttons at 14px or 17px.
- Use translucent blurred bars for navigation.
- Follow HIG basics in apps: 44pt targets, SF Symbols, system colors, Dynamic Type.

**Don't**

- Don't add borders or drop shadows to homepage tiles.
- Don't use multiple accent colors or gradients in UI chrome.
- Don't use bold 700-900 headlines or all caps.
- Don't use the Apple logo in your own branding.
- Don't crowd tiles with more than two buttons.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of apple.com. White page, text `#1D1D1F`, secondary text `#6E6E73`, captions `#86868B`, alternate tiles `#F5F5F7`, dark tiles `#000000` with white text. Font stack `-apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif`; headlines weight 600 (56px hero, 40px tiles) with near-zero tracking, body 17px weight 400 with -0.022em tracking. A 44px translucent global nav: `rgba(250,250,252,0.8)` with `backdrop-filter: saturate(180%) blur(20px)`, 12px links in `rgba(0,0,0,0.8)`, centred in 1024px. The page is a stack of full-width product tiles: centred product name, one-line subhead (21-28px), two pill buttons ("Learn more" `#0071E3` fill white text; "Buy" outline `#0066CC`), 14px text, radius 980px, padding 8px 15px, then a large product photo. Below, a 2-column grid of tiles with 12px gaps. No borders, almost no shadows. Links are `#0066CC` (`#2997FF` on dark) with a small chevron. Footer `#F5F5F7` with 12px grey text.

```css
:root {
  --brand-text: #1D1D1F;
  --brand-text-secondary: #6E6E73;
  --brand-text-tertiary: #86868B;
  --brand-bg: #FFFFFF;
  --brand-bg-alt: #F5F5F7;
  --brand-bg-dark: #000000;
  --brand-surface-dark: #161617;
  --brand-blue: #0071E3;
  --brand-blue-hover: #0076DF;
  --brand-blue-active: #006EDB;
  --brand-link: #0066CC;
  --brand-link-dark: #2997FF;
  --brand-divider: #D2D2D7;
  --brand-nav-bg: rgba(250,250,252,0.8);
  --brand-nav-bg-dark: rgba(22,22,23,0.8);
  --brand-nav-text: rgba(0,0,0,0.8);
  --brand-nav-blur: saturate(180%) blur(20px);
  --brand-font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, "Helvetica Neue", Arial, sans-serif;
  --brand-font-text: -apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, "Helvetica Neue", Arial, sans-serif;
  --brand-radius-pill: 980px;
  --brand-radius-card: 18px;
  --brand-radius-input: 12px;
  --brand-nav-height: 44px;
  --brand-content-width: 980px;
  --brand-shadow-float: 3px 5px 30px rgba(0,0,0,0.22);
}
```

---

Values are observed from the public apple.com stylesheets on 2026-11-16; items marked approximate (state colors, breakpoints, easing, form focus ring) were not confirmed in the CSS. This file is an unofficial reference and is not affiliated with or endorsed by Apple.

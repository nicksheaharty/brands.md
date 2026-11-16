---
name: Progressive
slug: progressive
url: https://progressive.com
category: Insurance
tagline: "Bright blue italic wordmark, big ZIP-code quote box and pastel product tiles on white."
updated: 2026-11-16
appStoreId: 349731802
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Progressive Blue
    hex: "#0077B3"
    role: Logo, primary buttons, links, selected states
  - name: Hover Blue
    hex: "#2862A4"
    role: Button hover, focus outline, pressed link
  - name: Navy
    hex: "#0A3360"
    role: Hero gradient top, dark bands
  - name: Ink
    hex: "#2D2D2D"
    role: Headings and primary text
  - name: Slate
    hex: "#707070"
    role: Body copy, subheads, input underline
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Sky
    hex: "#8FD8F2"
    role: Pastel accent, dot patterns, flyout gradient
  - name: Orchid
    hex: "#E4B9E4"
    role: Pastel accent, flyout gradient
  - name: Blush
    hex: "#FFCFDE"
    role: Pastel accent, flyout gradient
  - name: Mint
    hex: "#BDEFE6"
    role: Pastel accent, claims flyout
  - name: Apricot
    hex: "#FFCC8F"
    role: Pastel accent, resources flyout
  - name: Mist
    hex: "#D1E2E5"
    role: Card underline shadow, dividers
  - name: Ice
    hex: "#F3F9FC"
    role: Selected option and hover background
  - name: Raspberry
    hex: "#D41659"
    role: Errors and alerts
fonts:
  display:
    family: "96 Sans"
    fallback: "Hanken Grotesk"
    weights: [300, 700]
  body:
    family: "96 Sans"
    fallback: "Hanken Grotesk"
    weights: [300, 400, 600, 700]
  mono:
    family: "96 Sans Monospaced"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: H1, size: 54, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: H2, size: 36, weight: 300, lineHeight: 1.33, tracking: "0" }
  - { role: Subhead, size: 24, weight: 300, lineHeight: 1.33, tracking: "0" }
  - { role: H3, size: 24, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: H4, size: 18, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.75, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Nav, size: 12, weight: 700, lineHeight: 1.2, tracking: "0" }
radii: { sm: 3, md: 5, lg: 10, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96]
shadows:
  - { name: Card underline, value: "0 4px 0 0 rgba(209,226,229,0.35)" }
  - { name: Tile offset, value: "8px -8px 0 0 #4EBEE5" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F9FC"
  text: "#2D2D2D"
  muted: "#707070"
  border: "#D1E2E5"
  accent: "#0077B3"
  accentText: "#FFFFFF"
  radius: 5
  buttonStyle: solid
---

# Progressive

## 1. Visual Theme & Atmosphere

Progressive's website is a quoting machine wrapped in friendly, light branding. The page is white, the logo and every action are one clear blue (`#0077B3`), and the first thing you see is a large "Quote auto insurance" box with a ZIP code field. Around that, the brand adds softness with a family of pastels (sky, orchid, blush, mint, apricot) used as gradients, dot patterns and offset tile shadows.

What makes it recognisable:

- **The italic wordmark.** PROGRESSIVE in heavy, forward-slanted capitals, always in Progressive Blue. Its slant is echoed by the bold P used as the app icon.
- **The ZIP-code quote start.** A centred, oversized input (32px bold digits on a single underline) with a large blue button. Most pages end with the same quote box.
- **Pastel gradients behind menus.** Opening a top-level menu reveals a full-screen white flyout framed by a soft diagonal gradient, for example orchid `#E4B9E4` to sky `#8FD8F2`.
- **Offset colour blocks.** Product icon tiles have a solid pastel shadow offset 8px right and 8px up, giving a flat, layered sticker look.
- **One custom typeface.** Everything is set in 96 Sans, a proprietary sans with light, regular, semibold and bold weights plus a condensed cut for small headings.
- **Flo and the "Superstore" world.** Advertising leans on the Flo character and a bright white store setting; the site borrows the clean white and the blue but rarely shows characters in the core quote flow.

Density is medium. The home page uses wide, centred stacks; product pages are long and comparison-heavy.

Mood words: friendly, clear, practical, upbeat, helpful.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Progressive Blue | `#0077B3` | Logo, primary button, links, borders of selected options |
| Hover Blue | `#2862A4` | Button hover and focus, 3px dashed focus outline |
| Navy | `#0A3360` | Top of the hero gradient (`--hero-blue-gradient`) |
| Ice | `#F3F9FC` | Hover and selected option background |
| Ink | `#2D2D2D` | Headings, primary text, nav |
| Slate | `#707070` | Body copy, subheads, labels, input underline |
| Border Blue-Grey | `#91B0BF` | Product card borders |
| Mist | `#D1E2E5` | Card underline shadow, soft dividers |
| White | `#FFFFFF` | Page and card background |

### Pastel family

Used for gradients, dot patterns, icon tiles and illustrations. Never for text.

| Name | Pastel | Strong (tile offset) |
|---|---|---|
| Sky | `#8FD8F2` | `#4EBEE5` |
| Mint | `#BDEFE6` | `#7EE0CA` |
| Apricot | `#FFCC8F` | `#FFA452` |
| Orchid | `#E4B9E4` | `#C973C9` |
| Blush | `#FFCFDE` | `#FF527B` |
| Butter | `#FFE694` | `#FFD039` |

Flyout gradients (25deg): Explore `#E4B9E4 → #8FD8F2`, Claims `#8FD8F2 → #BDEFE6`, About `#FFCFDE → #E4B9E4`, Resources `#FFCFDE → #FFCC8F`.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#D41659` | Field errors and alerts |
| Success | `#08CAA9` | Confirmations (approximate role) |
| Warning | `#EFAB00` | Notices (approximate role) |
| Focus | `#2862A4` | 3px dashed outline, offset 0 |

### Dark mode

No dark mode. The footer can be inverted (blue-navy background, white text, white outline search button), and the hero uses a navy-to-transparent gradient behind white text on some campaign pages.

## 3. Typography

**Family:** 96 Sans, a custom typeface for Progressive, with sub-families "96 Sans Condensed", "96 Sans Monospaced" and an icon font "96 Sans Icons". Stack in CSS: `"96 Sans", Arial, sans-serif`.

**Licensing:** proprietary to Progressive. Closest free substitute: **Hanken Grotesk** (approximate match; similar proportions and a clean bold). For the condensed cut use **Barlow Semi Condensed**.

**Root size:** `html { font-size: 62.5% }`, so `1rem = 10px`. Sizes below are in px.

### Scale (desktop; tablet and mobile step down)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 | 54px (47, 39) | 700 | 1.15 | normal |
| H1 subhead | 24px (22) | 300 | 1.333 | normal |
| H2 | 36px (31, 27, 22) | 300 | 1.333 | normal |
| H3 | 24px (22, 20, 18) | 700 | 1.333 | normal |
| H4 (condensed) | 18px (17, 16) | 700 | 1.4 | normal |
| Body | 16-17px | 400 | 1.75 | 0 |
| Quote button | 24px | 700 (approximate) | 1 | 0 |
| ZIP input | 32px | 700 | 1 | 0 |

### Rules

- Pair a bold H1 with a light (300) subhead in Slate. H2 is light; H3 is bold. The light/bold contrast is the signature.
- Headings are sentence case. Only the logo is all caps.
- Large numbers in stat blocks are bold 700 in Ink.

## 4. Logo & Brand Mark

- **Wordmark:** PROGRESSIVE in custom heavy italic capitals with flat, sheared terminals and a small registered mark. Colour: Progressive Blue `#0077B3`.
- **Monogram:** the slanted P, used as the app icon (blue P on white).
- **Colour versions:** blue on white (default), white on Progressive Blue or Navy.
- **Clear space:** at least the height of the letter P around the wordmark (approximate).
- **Minimum size:** about 100px wide on screen (approximate).
- **Misuse:** don't upright (de-slant) the letters, outline them, recolour them in pastels, add drop shadows or set the name in 96 Sans as a substitute logo.

## 5. Components

### Buttons

```css
.primary-button {
  background: #0077B3;
  color: #FFFFFF;
  border: 1px solid #0077B3;
  border-radius: 5px;
  font: 700 18px/1 "96 Sans", Arial, sans-serif;
  padding: 14px 28px;
  transition: background .3s ease-in-out;
}
.primary-button:hover,
.primary-button:focus { background: #2862A4; color: #FFFFFF; }
.primary-button:focus-visible { outline: 3px dashed #2862A4; outline-offset: 0; }
.primary-button.loading { background: #80BBD9; }

/* Large quote-start button */
.quote-button { font-size: 24px; padding: .75em 2.333em 1em; }

.secondary-button {
  background: #FFFFFF;
  color: #0077B3;
  border: 2px solid #0077B3;
  border-radius: 5px;
  font-weight: 700;
  padding: 14px;
}
.secondary-button:hover { background: #F3F9FC; border-color: #2862A4; color: #2862A4; }
```

Small utility buttons (footer search) are 13px semibold with 2.5px radius.

### ZIP-code quote box (signature)

```css
.zip input {
  border: 1px solid transparent;
  border-bottom: 1px solid #707070;
  font: 700 32px "96 Sans", sans-serif;
  color: #2D2D2D;
  text-align: center;
  padding-bottom: .5em;
  outline: 0;
}
.zip label { font: 300 24px "96 Sans"; color: #707070; } /* floats up and shrinks on focus */
```

Above the box, a product title ("Quote auto insurance") sits under a small product illustration with a sky-blue dot pattern (`radial-gradient(#8FD8F2 15%, transparent 16%)`, 10px tiles). Below: a big blue button, then text links ("Continue previous quote", "Find an agent").

### Bundle selector

A segmented row of options ("Auto + Home", "Auto + Condo", "Auto + Renters"): white buttons with 1px `#707070` borders, bold 14px Ink text, outer corners 5px. Hover or `aria-pressed="true"` switches to a `#0077B3` border and `#F3F9FC` fill with a check icon.

### Product tiles

Grid of products (Auto, Home, Motorcycle, RV, Life, Boat). Each tile has a line illustration on a pastel square with an offset solid shadow (`box-shadow: 8px -8px 0 0 #4EBEE5`), a bold H3 title and one-line description. Hover grows the offset to 12px (approximate).

### Cards

White, 5px radius, 1px `#91B0BF` border or a soft underline shadow `0 4px 0 0 rgba(209,226,229,.35)`. Padding 24-32px.

### Navigation

- **Header:** white, 1699px max inner width, logo left, items ("Insurance & more", "Claims", "Resources & tools", "About us") in 12px bold Ink with 20px padding, then phone number, "Log in" with a person icon, and "Español".
- **Hover underline:** a 1px line that grows from the centre of the link (`transition: all .5s`).
- **Flyout:** full-screen white panel inset 15px from the viewport, framed by the pastel gradient, sliding up 50px and fading in over .35s.

### Stats band

Three columns with an uppercase small label ("SAVINGS", "CUSTOMERS", "SUPPORT"), a big bold number and a one-line explanation.

### Disclosure tips

Small superscript info triggers next to claims open a tooltip with legal text; keep them at 0.8em of the heading size.

### Footer

White by default with 14px bold link headings, accordion behaviour on mobile, and an outlined blue search button. An inverted variant uses white text and outlines.

## 6. Layout & Spacing

- **Max width:** header and content containers cap around 1150-1700px depending on the band; text blocks centre at 600-800px (approximate).
- **Grid:** 12 columns (8.33% steps in CSS).
- **Breakpoints (from CSS):** 1150, 970, 780, 670, 600, 450 and 400px max-width queries. The main switch to the mobile menu is around 970px.
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 48, 64, 96.
- **Density:** generous around the quote box, tighter in product grids and footers.

## 7. Depth, Elevation & Motion

Flat with playful offsets.

| Token | Value | Use |
|---|---|---|
| Card underline | `0 4px 0 0 rgba(209,226,229,0.35)` | Soft base under cards |
| Tile offset | `8px -8px 0 0 <strong pastel>` | Product icon tiles |

- **Durations:** .3s for colour and background, .35s for flyouts, .5s for underline and slide-ins.
- **Easing:** `ease-in-out` throughout.

## 8. Iconography & Imagery

- **Icons:** the "96 Sans Icons" font: simple line icons with rounded ends, about 2px stroke, in Ink or Blue.
- **Product illustrations:** flat, friendly line drawings (car, house, motorcycle, RV) with pastel fills.
- **Photography:** bright, everyday people and vehicles, natural daylight, white or light settings. Campaign imagery features Flo and the white "Superstore".

## 9. Voice & Microcopy

Plainspoken, upbeat and helpful, with light humour in places ("Hop on"). Sentences are short and direct. Calls to action name the product.

Sample strings (read on progressive.com on 2026-11-16):

- Hero: "Better insurance starts here"
- Quote: "Quote auto insurance", "Enter ZIP Code", "Continue previous quote"
- Bundle: "Bundle and save!", "Or, select a bundle or other product"
- Products: "Buckle up with protection you can rely on." / "Hop on" (motorcycle tile opener)
- Stats labels: "SAVINGS", "CUSTOMERS", "SUPPORT" with "24/7/365"
- Nav: "Insurance & more", "Claims", "Resources & tools", "About us", "Log in"

## 10. Do's and Don'ts

**Do**

- Make the quote start the hero: ZIP field, big blue button.
- Use Progressive Blue `#0077B3` for every action and `#2862A4` for hover.
- Pair bold H1/H3 with light H2 and subheads.
- Use pastels for gradients, dot patterns and offset tile shadows.
- Use Ink `#2D2D2D` and Slate `#707070` for text, not black.

**Don't**

- Don't use pastels for text or buttons.
- Don't use large radii or pill buttons; corners are 5px.
- Don't add blurred drop shadows; offsets are solid and flat.
- Don't de-slant or restyle the wordmark.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Progressive. White page; headings in Ink `#2D2D2D`, body in Slate `#707070`. Font: "96 Sans" with fallback "Hanken Grotesk", Arial. H1 54px bold 700 at 1.15 line height with a 24px light (300) subhead; H2 36px light; H3 24px bold; body 16px/1.75. Every action is Progressive Blue `#0077B3`: primary buttons are solid blue, white bold text, 5px radius, hover `#2862A4`, focus a 3px dashed `#2862A4` outline. Make the hero a centred quote box: product title, an oversized ZIP-code input (32px bold digits on a single `#707070` underline, floating light label) and a big blue "Get a quote" button. Add a segmented bundle selector with 1px grey borders that turn blue with `#F3F9FC` fill when selected. Product tiles use flat pastel squares with solid offset shadows like `8px -8px 0 0 #4EBEE5`. Use pastel diagonal gradients (`#E4B9E4 → #8FD8F2`) behind full-screen menus and sky-blue dot patterns as decoration. Transitions .3s ease-in-out. Copy is short, friendly and specific.

```css
:root {
  --brand-blue: #0077B3;
  --brand-blue-hover: #2862A4;
  --brand-navy: #0A3360;
  --brand-ice: #F3F9FC;
  --brand-ink: #2D2D2D;
  --brand-slate: #707070;
  --brand-border: #91B0BF;
  --brand-mist: #D1E2E5;
  --brand-bg: #FFFFFF;
  --brand-sky: #8FD8F2;
  --brand-sky-strong: #4EBEE5;
  --brand-orchid: #E4B9E4;
  --brand-blush: #FFCFDE;
  --brand-error: #D41659;
  --brand-font: "96 Sans", "Hanken Grotesk", Arial, sans-serif;
  --brand-font-condensed: "96 Sans Condensed", "Barlow Semi Condensed", Arial, sans-serif;
  --brand-radius: 5px;
  --brand-radius-sm: 2.5px;
  --brand-shadow-card: 0 4px 0 0 rgba(209,226,229,0.35);
  --brand-shadow-tile: 8px -8px 0 0 var(--brand-sky-strong);
  --brand-gradient-explore: linear-gradient(25deg, #E4B9E4 0%, #8FD8F2 100%);
  --brand-hero-gradient: linear-gradient(180deg, #0A3360 0%, #0A3360 65px, transparent 50%);
  --brand-transition: .3s ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Progressive.

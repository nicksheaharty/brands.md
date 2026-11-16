---
name: Vanguard
slug: vanguard
url: https://vanguard.com
category: Finance
tagline: "Near-black type on white, pill buttons, bold blue links and a deep red wordmark."
updated: 2026-11-16
appStoreId: 335186209
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Vanguard Red
    hex: "#96151D"
    role: Wordmark, legacy red buttons, card eyebrows
  - name: Ink
    hex: "#040505"
    role: Primary text, primary button fill, input borders
  - name: Signal Red
    hex: "#C20029"
    role: Notification badges, sort icons, red card borders
  - name: Link Blue
    hex: "#145BFF"
    role: Inline and standalone links, details headings
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Mist
    hex: "#F5F6F6"
    role: Subtle section and table background
  - name: Focus Blue
    hex: "#0F62C5"
    role: Focus outline on buttons, cards and links
  - name: Slate
    hex: "#717777"
    role: Secondary text, eyebrows, disabled borders
  - name: Border
    hex: "#CBCECE"
    role: Dividers, table rules, quiet borders
  - name: Teal
    hex: "#007873"
    role: Progress bars, positive range sliders
  - name: Error
    hex: "#BA3D21"
    role: Error text and input border
  - name: Success
    hex: "#1D9F22"
    role: Success state, positive progress
fonts:
  display:
    family: "FF Mark"
    fallback: "Figtree"
    weights: [400, 700, 900]
  body:
    family: "FF Mark"
    fallback: "Figtree"
    weights: [400, 700]
  mono:
    family: "FF Mark Narrow"
    fallback: "Roboto Condensed"
    weights: [400]
typeScale:
  - { role: Display 4XL, size: 57, weight: 900, lineHeight: 1.12, tracking: "0" }
  - { role: Heading 3XL, size: 46, weight: 900, lineHeight: 1.04, tracking: "0" }
  - { role: Heading 2XL, size: 34, weight: 900, lineHeight: 1.18, tracking: "0" }
  - { role: Heading XL, size: 28, weight: 700, lineHeight: 1.14, tracking: "0" }
  - { role: Lead LG, size: 23, weight: 400, lineHeight: 1.39, tracking: "0" }
  - { role: Body MD, size: 17, weight: 400, lineHeight: 1.41, tracking: "0" }
  - { role: Body SM, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Legal XS, size: 11, weight: 400, lineHeight: 1.45, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80]
shadows:
  - { name: Elevation 100, value: "0 0 4px 1px rgba(4,5,5,0.06), 0 1px 1px 0 rgba(4,5,5,0.18)" }
  - { name: Elevation 800, value: "0 0 4px 1px rgba(4,5,5,0.06), 0 1px 1px 0 rgba(4,5,5,0.06), 0 2px 4px 0 rgba(4,5,5,0.08), 0 4px 8px 0 rgba(4,5,5,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F6F6"
  text: "#040505"
  muted: "#717777"
  border: "#CBCECE"
  accent: "#040505"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Vanguard

## 1. Visual Theme & Atmosphere

Vanguard's retail site (investor.vanguard.com) is built on the company's Constellation design system, whose CSS classes carry the `c11n-` prefix. The look is sober and print-like: white pages, near-black text (`#040505`, never pure black), lots of air, and heavy 900-weight headlines in FF Mark. Color is used sparingly. The deep Vanguard red appears in the wordmark and a few eyebrows; a bright blue marks links; everything else is black, white and warm greys.

What makes it recognisable:

- **Black pill buttons.** Primary actions are 48px-tall black pills with white bold text. Secondary buttons are the same pill with a 2px black outline. Hover is a fill that sweeps in from the left.
- **Heavy headlines, calm body.** Headlines run at weight 900 with tight line height. Body copy is 17px FF Mark at 400, which is larger than most finance sites.
- **Bold blue links.** Links are `#145BFF` at weight 700 with an animated underline that thickens on hover.
- **Flat cards with hairline shadows.** Cards are white with a barely visible two-layer shadow, square corners and an eyebrow in grey.
- **Square inputs.** Form fields have a 1px black border and 0 radius, so they read like printed forms next to the rounded buttons.
- **Tabular figures everywhere.** Balances, prices and returns use `font-variant-numeric: tabular-nums`.

Mood words: trustworthy, plain, investor-first, quiet, durable.

## 2. Color Palette & Roles

All hex values below were read from the live Constellation stylesheet on investor.vanguard.com.

| Name | Hex | Role |
|---|---|---|
| Vanguard Red | `#96151D` | Wordmark, `vg-button--red` legacy CTA, teaser eyebrows, loader |
| Ink | `#040505` | Text, primary button fill, input borders, icons |
| Signal Red | `#C20029` | Notification badge, sort arrows, red-bordered cards |
| Link Blue | `#145BFF` | Links, details component heading and icon |
| Focus Blue | `#0F62C5` | 2px focus outline on every interactive element |
| White | `#FFFFFF` | Background, button text |
| Mist | `#F5F6F6` | Section background, table stripe, neutral card border |
| Graphite | `#3F4444` | Long-form body text in articles |
| Slate | `#717777` | Card eyebrows, captions, secondary labels |
| Border | `#CBCECE` | Table rules, dividers |

### Semantic colors

| State | Text / icon | Background | Use |
|---|---|---|---|
| Error | `#BA3D21` | `#FFEDED` | Input error border, error notice |
| Warning | `#BF8200` / `#FFAF00` | `#FFF7DE` | Pending, attention notices |
| Success | `#1D9F22` | `#DEF5F0` | Completed, positive progress |
| Info / positive data | `#007873` | `#DEF5F0` | Progress bars, sliders |
| Highlight | `#00BDA3` | | Accent border on data cards |

Market data follows the usual convention (green up, red down) but stays muted: use `#1D9F22` and `#BA3D21`, not neon colors.

**Dark surfaces:** no global dark mode. Dark bands use Ink `#040505` with white text, and buttons switch to their `on-dark` variants.

## 3. Typography

**Families:**

- **FF Mark** (Hannes von Döhren and Christoph Koeberlin, FontFont): the main sans for everything.
- **FF Mark Narrow:** condensed cut for dense tables (`c11n-text-md-table-narrow`).
- **Thorndale:** a Times-style serif used for "display" variants (`c11n-text-*-display`) on some editorial pages.

**Licensing:** FF Mark and Thorndale are commercial. Free substitutes: **Figtree** for FF Mark (geometric, similar proportions), **Roboto Condensed** for Mark Narrow, **Tinos** for Thorndale.

```css
font-family: "FF Mark", "Figtree", Arial, sans-serif;
font-variant-numeric: tabular-nums; /* on any number */
```

### Scale (Constellation tokens, desktop)

| Token | Size | Weight | Line height | Notes |
|---|---|---|---|---|
| 4xl (headline) | 57px (3.5625rem) | 900 | 1.12 | Page hero |
| 3xl (headline) | 46px (2.875rem) | 900 | 1.04 | Section hero |
| 2xl (headline) | 34px (2.125rem) | 900 | 1.18 | Section heading |
| xl | 28px (1.75rem) | 400 or 900 | 1.14 | Card heading |
| lg | 23px (1.4375rem) | 400 / 700 | 1.39 | Lead paragraph, large input |
| md | 17px (1.0625rem) | 400 / 700 | 1.41 | Body, buttons, inputs |
| md-article | 17px | 400 | 1.88 | Long-form article body |
| sm | 14px (0.875rem) | 400 | 1.43 | Captions, helper text |
| xs | 11px (0.6875rem) | 400 | 1.45 | Disclosures, footnotes |

Each token also has a `--crop` version that trims the font's built-in top and bottom space with negative margins on `::before` and `::after`, so text boxes align exactly to an 8px grid. Copy this if you want pixel-tight spacing.

### Rules

- Sentence case for headings, buttons and nav.
- Headlines use weight 900; never use 900 below 23px.
- Body copy is 17px, not 16px.
- Use tabular numbers for any figure. Right-align numeric columns.
- Disclosures and footnote markers are part of the design: small superscript markers and 11-14px legal text at the bottom of sections.

## 4. Logo & Brand Mark

The current logo is the **Vanguard** wordmark in Vanguard red `#96151D` with a small registered mark. It is a heavy, slightly condensed serif-influenced sans with a distinctive flared "V". The older ship emblem (HMS Vanguard) is no longer part of the primary lockup on the website.

- **Color versions:** red on white (primary), white on red, black on white for single-color print, white on Ink for dark bands.
- **Clear space:** at least the height of the lowercase "a" on all sides.
- **Minimum size:** about 80px wide on screen.
- **Icon:** the icon in this folder is an approximation built from the wordmark's "V" in white on `#96151D`; check the App Store icon for the real app tile.

Misuse:

- Do not recolor the wordmark blue or the brighter `#C20029`.
- Do not set "Vanguard" in FF Mark and call it the logo.
- Do not separate the "V" and use it as a standalone symbol in marketing.
- Do not add the old ship back next to the wordmark.

## 5. Components

### Buttons (`c11n-button`)

Pill-shaped, 2px border, FF Mark 700 at 17px. Default height 48px (3rem), small 32px (2rem).

| Variant | Fill | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#040505` | `#FFFFFF` | 2px `#040505` | 32px | 48px |
| Secondary | transparent | `#040505` | 2px `#040505` | 32px | 48px |
| Primary on dark | `#FFFFFF` | `#040505` | 2px `#FFFFFF` | 32px | 48px |
| Secondary on dark | transparent | `#FFFFFF` | 2px `#FFFFFF` | 32px | 48px |
| Labeled icon | 48px circle + label | `#040505` | 2px | 50% | 48px |
| Legacy red CTA | `#96151D` | `#FFFFFF` | none | 0 | 26px 32px padding |

States:

- Hover: a `::before` layer grows from width 0 to 100% over 250ms, so the fill sweeps in from the left. Secondary buttons fill black and the text flips to white.
- Focus: `outline: 2px solid #0F62C5; outline-offset: 2px;` drawn on an `::after` that follows the pill radius.
- Disabled: border and text `#717777`, no fill.
- Transition: `.15s ease-in-out` on color, background, border.

```css
.vg-btn {
  font: 700 17px/1 "FF Mark", "Figtree", Arial, sans-serif;
  height: 48px; padding: 0 24px;
  border: 2px solid #040505; border-radius: 32px;
  background: #040505; color: #fff;
  display: inline-flex; align-items: center; gap: 8px;
  transition: background-color .15s ease-in-out, color .15s ease-in-out;
}
.vg-btn--secondary { background: transparent; color: #040505; }
.vg-btn--secondary:hover { background: #040505; color: #fff; }
.vg-btn:focus-visible { outline: 2px solid #0F62C5; outline-offset: 2px; }
```

### Links (`c11n-link`)

- `#145BFF`, weight 700, `padding-bottom: 3px`.
- Underline drawn with background gradients: 1px line at rest, 2px on hover (`--common-bg-rule: 100% 1px, 0% 2px`).
- Transition: color with `cubic-bezier(.4,0,.2,1)`.
- Trailing chevron for standalone "Learn more" links.

### Inputs (`c11n-input`)

- Height 48px (large: 64px with 23px text). Font 17px FF Mark, tabular numbers.
- `background: #fff; border: 1px solid #040505; border-radius: 0; padding: 0 16px;`
- Label above in 17px 700; helper text below in 14px `#717777`.
- Error: border `1px solid #BA3D21`, error icon and 14px message in `#BA3D21`.

### Cards (`c11n-card`)

- White, square corners, Elevation 100 shadow: `0 0 4px 1px rgba(4,5,5,.06), 0 1px 1px rgba(4,5,5,.18)`.
- Optional 1px border variants: neutral `#F5F6F6`, red `#C20029`, teal `#00BDA3`, amber `#FFAF00`.
- Padding 24-32px. Eyebrow 14px in `#717777`, title 23-28px, body 17px.
- Clickable cards get the same blue focus outline as buttons and lift to Elevation 800 on hover.

### Navigation

- Global header is a web component (`vg-vgn-nav`) with Elevation 100 under it.
- White bar about 64-72px tall (approximate): wordmark left, primary links in 17px, then search and a "Log on" action on the right. Link labels change often, so check the live header.
- Menus open as white panels with columns of 17px links (layout approximate).
- Mobile: hamburger at left of the wordmark, full-height drawer.

### Badges

`c11n-badge`: Signal Red `#C20029` fill, white text 11-12px bold, 2px white ring, pill shape. Used for counts on notifications.

### Tables

- 17px rows, tabular numbers, header row 14px 700, rules `#CBCECE`.
- Optional striping with `#F5F6F6`.
- Narrow tables switch to FF Mark Narrow.
- Sort arrows are Signal Red.

### Notices / banners

Full-width bars with a tinted background (`#FFF7DE` warning, `#FFEDED` error, `#DEF5F0` success), a 2px left or full border in the matching strong color, a 20px icon and 17px text.

### Segmented controls and tabs

Constellation ships a segmented control (`c11n-segmented-control`, border `#040503`). Approximate styling: pill outline in Ink, selected segment filled Ink with white text. Tabs use an Ink underline on the active item (thickness approximate, about 4px).

## 6. Layout & Spacing

- **Grid:** Bootstrap-style 12 columns with breakpoints 576, 768, 992, 1200 and 1400px.
- **Content width:** about 1280px max with 24-32px gutters; article text capped near 760px (both approximate).
- **Spacing:** 8px base. Common steps: 8, 16, 24, 32, 40, 48, 64, 80px.
- **Section rhythm:** 64-80px between sections on desktop, 40-48px on mobile.
- **Density:** marketing pages are airy; account and fund pages are dense tables with 12-16px row padding.
- **Text crop:** Constellation trims line-height padding on headings, so measured gaps are exactly the spacing token.

## 7. Depth, Elevation & Motion

### Elevation

Constellation names elevations by z-index:

| Token | Shadow |
|---|---|
| 100 | `0 0 .25rem .0625rem rgba(4,5,5,.06), 0 .0625rem .0625rem 0 rgba(4,5,5,.18)` |
| 800 | `0 0 .25rem .0625rem rgba(4,5,5,.06), 0 .0625rem .0625rem 0 rgba(4,5,5,.06), 0 .125rem .25rem 0 rgba(4,5,5,.08), 0 .25rem .5rem 0 rgba(4,5,5,.12)` |
| 3200 | Four layers at 4% alpha plus a wider blur, for modals and overlays |

Shadows are always tinted with Ink `rgba(4,5,5,…)`, never pure black.

### Motion

- UI transitions 150ms `ease-in-out`; button fill sweep 250ms; links `cubic-bezier(.4,0,.2,1)`; carousels 600ms `ease`. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** Constellation icons are simple outline glyphs at 16 and 24px with a 2px-ish stroke in Ink. Filled versions are used for status.
- **Photography (approximate):** warm, candid photos of people at home, with family or planning; natural light, nothing staged in an office. Often cropped into rectangles beside text.
- **Illustration (approximate):** flat, limited-palette illustrations in red, teal and cream for education pages.
- **Charts:** thin lines, Ink axes, teal and red for series, grey gridlines.

## 9. Voice & Microcopy

Plain, steady, investor-first. Explains instead of sells. Short sentences and second person.

- Sentence case everywhere.
- Prefer verbs: "Open an account", "Roll over a 401(k)", "Log on".
- Disclosures are visible and specific, with footnote markers.

Sample strings (read on the live site today):

- Hero: "Investing for everything it's worth"
- "Vanguard funds, IRAs, 401(k) rollovers, and advice so you can sort it out."
- "We stick to 4 principles designed to set investors up for success: goals, balance, costs, and discipline."
- "Work with an advisor or a robo-advisor to get a personalized strategy in place."
- CTAs: "Open an account", "Explore Cash Plus", "Log on", "Learn more"

## 10. Do's and Don'ts

**Do**

- Use `#040505` for text and primary buttons instead of `#000`.
- Make primary and secondary buttons 48px pills with a 2px border.
- Use bold blue `#145BFF` links with an underline.
- Set headlines in weight 900 and body at 17px.
- Keep inputs square with a 1px black border.
- Use tabular numbers and right-aligned figures.
- Keep the red for the wordmark, badges and small accents.

**Don't**

- Don't fill large areas with Vanguard red.
- Don't round inputs or cards heavily; only buttons are pills.
- Don't use gradients, glow or glassmorphism.
- Don't write urgent sales copy or quote returns without disclosures.

## 11. Agent Prompt Guide

> Build this UI in the style of Vanguard's investor site. White background, text in near-black `#040505`, secondary text `#717777`, subtle sections `#F5F6F6`, dividers `#CBCECE`. Font: `"FF Mark", Figtree, Arial, sans-serif`; headlines weight 900 with tight line-height (57/46/34px), body 17px weight 400, line-height 1.41, tabular numbers on all figures. Primary buttons are black `#040505` pills (48px tall, 2px border, 32px radius, 17px bold white text); secondary buttons are the same pill outlined in black. On hover the fill sweeps in from the left in 250ms. Links are bold `#145BFF` with an underline that thickens on hover. Focus is a 2px `#0F62C5` outline with 2px offset. Inputs are square with a 1px black border. Cards are white with square corners and a very light shadow `0 0 4px 1px rgba(4,5,5,.06), 0 1px 1px rgba(4,5,5,.18)`. Use the deep red `#96151D` only for the wordmark and small eyebrows, and `#C20029` for badges. Calm, plain copy in sentence case with visible disclosures.

```css
:root {
  --brand-red: #96151D;
  --brand-red-signal: #C20029;
  --brand-ink: #040505;
  --brand-slate: #717777;
  --brand-border: #CBCECE;
  --brand-mist: #F5F6F6;
  --brand-bg: #FFFFFF;
  --brand-link: #145BFF;
  --brand-focus: #0F62C5;
  --brand-teal: #007873;
  --brand-success: #1D9F22;
  --brand-error: #BA3D21;
  --brand-warning: #FFAF00;
  --brand-success-bg: #DEF5F0;
  --brand-warning-bg: #FFF7DE;
  --brand-error-bg: #FFEDED;
  --brand-font: "FF Mark", "Figtree", Arial, sans-serif;
  --brand-font-narrow: "FF Mark Narrow", "Roboto Condensed", Arial, sans-serif;
  --brand-font-serif: "Thorndale", "Tinos", "Times New Roman", serif;
  --brand-radius-pill: 32px;
  --brand-radius-input: 0;
  --brand-button-height: 48px;
  --brand-shadow-100: 0 0 4px 1px rgba(4,5,5,.06), 0 1px 1px 0 rgba(4,5,5,.18);
  --brand-shadow-800: 0 0 4px 1px rgba(4,5,5,.06), 0 1px 1px 0 rgba(4,5,5,.06), 0 2px 4px 0 rgba(4,5,5,.08), 0 4px 8px 0 rgba(4,5,5,.12);
  --brand-ease: cubic-bezier(.4,0,.2,1);
  --brand-duration: 150ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Vanguard.

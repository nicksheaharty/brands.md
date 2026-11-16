---
name: IBM
slug: ibm
url: https://ibm.com
category: Developer
tagline: "Carbon: IBM Plex, Blue 60, square corners, a strict 2x grid and the 8-bar logo."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Blue 60
    hex: "#0F62FE"
    role: Primary interactive color, buttons, links, focus
  - name: Gray 100
    hex: "#161616"
    role: Primary text, masthead, dark theme background
  - name: White
    hex: "#FFFFFF"
    role: Page background (White theme)
  - name: Gray 10
    hex: "#F4F4F4"
    role: Layer 01, fields, tiles
  - name: Blue 70
    hex: "#0043CE"
    role: Link hover, primary pressed (with Blue 80)
  - name: Gray 70
    hex: "#525252"
    role: Secondary text
  - name: Gray 20
    hex: "#E0E0E0"
    role: Subtle borders, dividers
  - name: Gray 80
    hex: "#393939"
    role: Secondary button, dark layers
  - name: Blue 40
    hex: "#78A9FF"
    role: Links and focus on dark themes
  - name: Purple 60
    hex: "#8A3FFC"
    role: Data viz, AI accents
  - name: Red 60
    hex: "#DA1E28"
    role: Errors, danger buttons
  - name: Green 50
    hex: "#24A148"
    role: Success
  - name: Yellow 30
    hex: "#F1C21B"
    role: Warning
fonts:
  display:
    family: "IBM Plex Sans"
    fallback: "IBM Plex Sans"
    weights: [300, 400, 600]
  body:
    family: "IBM Plex Sans"
    fallback: "IBM Plex Sans"
    weights: [400, 600]
  mono:
    family: "IBM Plex Mono"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: Display 04, size: 76, weight: 300, lineHeight: 1.17, tracking: "-0.64px" }
  - { role: Display 01, size: 54, weight: 300, lineHeight: 1.19, tracking: "0" }
  - { role: Heading 05, size: 32, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Heading 04, size: 28, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Heading 03, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body 02, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body 01, size: 14, weight: 400, lineHeight: 1.43, tracking: "0.16px" }
  - { role: Label 01, size: 12, weight: 400, lineHeight: 1.33, tracking: "0.32px" }
radii: { sm: 0, md: 0, lg: 0, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96]
shadows:
  - { name: Raised, value: "0 2px 6px rgba(0,0,0,0.3)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#161616"
  muted: "#525252"
  border: "#E0E0E0"
  accent: "#0F62FE"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# IBM

## 1. Visual Theme & Atmosphere

IBM looks engineered. ibm.com and every IBM product are built on **Carbon**, IBM's open-source design system, and the result is consistent and very recognisable: square corners, a hard 2x grid, IBM Plex type, neutral greys from `#161616` to `#F4F4F4`, and a single strong blue (`#0F62FE`, Blue 60) for anything you can click.

The marketing site (Carbon for IBM.com) uses big light-weight Plex headlines, full-width colored bands, dense "leadspace" heroes and card grids where cards are flat grey rectangles with an arrow in the bottom corner. The products (IBM Cloud, watsonx) use the same components in compact form, often in dark Gray 100 themes.

What makes it recognisable:

- **Zero border radius.** Buttons, cards, inputs and tiles are all sharp rectangles. Only tags, toggles and avatars are round.
- **IBM Plex.** Sans for nearly everything, Mono for code and data, Serif for occasional editorial quotes. Large sizes go to weight 300.
- **Blue 60 for action.** Primary buttons, links, focus rings, selected tabs.
- **Bottom-border inputs.** Fields are grey `#F4F4F4` boxes with a 1px bottom line, not outlined boxes.
- **Arrow-led cards.** Cards end with a small `→` icon in blue; the whole card is the link.
- **Asymmetric layouts on a 16-column grid**, with lots of empty columns on purpose.

Mood words: rational, precise, technical, quiet, confident.

## 2. Color Palette & Roles

Carbon has four themes: White, Gray 10, Gray 90 and Gray 100. ibm.com mostly uses White with Gray 10 bands and Gray 100 dark sections.

### White theme tokens (from ibm.com CSS)

| Token | Hex | Role |
|---|---|---|
| `$background` | `#FFFFFF` | Page |
| `$layer-01` | `#F4F4F4` | Tiles, fields, cards |
| `$layer-02` | `#FFFFFF` | Layer on layer-01 |
| `$layer-hover` | `#E8E8E8` | Hover on tiles and rows |
| `$layer-selected` | `#E0E0E0` | Selected rows |
| `$text-primary` | `#161616` | Body text, headings |
| `$text-secondary` | `#525252` | Labels, helper text |
| `$text-placeholder` | `#A8A8A8` | Placeholder |
| `$text-on-color` | `#FFFFFF` | Text on buttons |
| `$border-subtle` | `#E0E0E0` / `#C6C6C6` | Dividers |
| `$border-strong` | `#8D8D8D` | Field underline |
| `$interactive` / `$button-primary` | `#0F62FE` | Primary action |
| `$button-primary-hover` | `#0050E6` | Hover |
| `$button-primary-active` | `#002D9C` | Pressed |
| `$button-secondary` | `#393939` | Secondary button |
| `$link-primary` | `#0F62FE` | Links |
| `$link-primary-hover` | `#0043CE` | Link hover |
| `$focus` | `#0F62FE` | 2px focus ring |
| `$highlight` | `#D0E2FF` | Selected highlight |

### Gray 100 (dark) theme

Background `#161616`, layer-01 `#262626`, layer-02 `#393939`, text `#F4F4F4`, secondary text `#C6C6C6`, borders `#393939`/`#6F6F6F`, links `#78A9FF`, focus `#FFFFFF`. Primary button stays `#0F62FE`.

### Support (status) colors

| State | Light theme | Dark theme |
|---|---|---|
| Error | `#DA1E28` | `#FA4D56` |
| Success | `#24A148` | `#42BE65` |
| Warning | `#F1C21B` | `#F1C21B` |
| Info | `#0043CE` | `#4589FF` |

### IBM color families

Each family runs 10 (lightest) to 100 (darkest). Common steps: Blue 10 `#EDF5FF`, 20 `#D0E2FF`, 30 `#A6C8FF`, 40 `#78A9FF`, 50 `#4589FF`, 60 `#0F62FE`, 70 `#0043CE`, 80 `#002D9C`, 90 `#001D6C`, 100 `#001141`. Purple 60 `#8A3FFC`, 70 `#6929C4`; Cyan 50 `#1192E8`; Teal 50 `#009D9A`; Magenta 60 `#D02670`; Red 60 `#DA1E28`; Green 50 `#24A148`.

Data visualization uses the categorical palette starting Purple 70 `#6929C4`, Cyan 50 `#1192E8`, Teal 70 `#005D5D`, Magenta 70 `#9F1853`, Red 50 `#FA4D56`.

## 3. Typography

**Family:** IBM Plex, designed by Mike Abbink with Bold Monday and released under the SIL Open Font License. Free on Google Fonts. ibm.com loads Plex Sans, Plex Serif and Plex Mono from its own CDN (`s81c.com/common/carbon/plex`).

```css
font-family: "IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", sans-serif;
font-family: "IBM Plex Mono", Menlo, "DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier, monospace;
```

**Weights:** 300 Light for display, 400 Regular for body and headings, 600 SemiBold for small headings, labels and emphasis. Avoid 700.

### Scale (Carbon type tokens)

| Token | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| display-04 | 76px (to 156px at max) | 300 | 1.17 | -0.64px |
| display-01 | 54px | 300 | 1.19 | 0 |
| heading-07 / fluid-heading-06 | 42px | 300 | 1.19 | 0 |
| heading-05 | 32px | 400 | 1.25 | 0 |
| heading-04 | 28px | 400 | 1.29 | 0 |
| heading-03 | 20px | 400 | 1.4 | 0 |
| heading-02 | 16px | 600 | 1.5 | 0 |
| heading-01 | 14px | 600 | 1.43 | 0.16px |
| body-02 | 16px | 400 | 1.5 | 0 |
| body-01 | 14px | 400 | 1.43 | 0.16px |
| label-01 | 12px | 400 | 1.33 | 0.32px |
| code-02 | 14px Mono | 400 | 1.43 | 0.32px |

Fluid headings on ibm.com scale up at the `lg`, `xlg` and `max` breakpoints.

### Rules

- Sentence case everywhere: headlines, buttons, nav, tabs.
- Large headlines are Light 300. Don't bold big type.
- Small text gets positive tracking (0.16px at 14px, 0.32px at 12px).
- Code, numbers in tables and technical labels can use Plex Mono.
- Left-align text; centered text is rare.

## 4. Logo & Brand Mark

The IBM logo is the 8-bar logo designed by Paul Rand in 1972: the letters I, B and M cut by eight horizontal white stripes. Shown here in Blue 60; it also appears in black and white.

- **Construction:** eight equal bars with equal gaps; the stripes create the letterforms. Never redraw or change the stripe count.
- **Clear space:** at least the height of the "I" on all sides (approximate).
- **Minimum size:** about 56px wide on screen; below that, ibm.com still uses the 8-bar at small sizes in the masthead (around 58px wide).
- **Color versions:** black on white, white on Gray 100 or Blue 60, Blue 60 on white.
- **Placement:** far left of the 48px masthead, vertically centred.
- **Misuse:** don't fill the stripes, don't add gradients, don't use it as a pattern, don't set "IBM" in Plex as a substitute.

## 5. Components

### Buttons

Carbon buttons are rectangular, left-aligned text with an icon at the right edge. Default height 48px, also 40px (md), 32px (sm), 64px (xl/2xl, used in heroes). Radius 0.

```css
.cds-btn {
  min-height: 48px; padding: 14px 63px 14px 15px; border: 1px solid transparent; border-radius: 0;
  font: 400 14px/1.29 "IBM Plex Sans", sans-serif; letter-spacing: 0.16px;
  display: inline-flex; justify-content: space-between; align-items: center; text-align: left;
  transition: background 70ms cubic-bezier(0, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9);
}
.cds-btn--primary { background: #0F62FE; color: #FFFFFF; }
.cds-btn--primary:hover { background: #0050E6; }
.cds-btn--primary:active { background: #002D9C; }
.cds-btn--secondary { background: #393939; color: #FFFFFF; }
.cds-btn--secondary:hover { background: #474747; }
.cds-btn--tertiary { background: transparent; color: #0F62FE; border-color: #0F62FE; }
.cds-btn--tertiary:hover { background: #0050E6; color: #FFFFFF; }
.cds-btn--ghost { background: transparent; color: #0F62FE; padding-right: 16px; }
.cds-btn--ghost:hover { background: #E8E8E8; }
.cds-btn--danger { background: #DA1E28; color: #FFFFFF; }
.cds-btn:focus { border-color: #0F62FE; box-shadow: inset 0 0 0 1px #0F62FE, inset 0 0 0 2px #FFFFFF; }
.cds-btn:disabled { background: #C6C6C6; color: #8D8D8D; }
```

Button sets: primary and secondary sit flush side by side with no gap, each half the width, in modal footers.

### Text input

```css
.cds-text-input {
  height: 40px; padding: 0 16px; border: none; border-bottom: 1px solid #8D8D8D; border-radius: 0;
  background: #F4F4F4; color: #161616; font: 400 14px/1.29 "IBM Plex Sans", sans-serif; letter-spacing: 0.16px;
  outline: 2px solid transparent; outline-offset: -2px;
}
.cds-text-input:focus { outline: 2px solid #0F62FE; }
.cds-text-input[data-invalid] { outline: 2px solid #DA1E28; }
.cds-label { font-size: 12px; letter-spacing: 0.32px; color: #525252; margin-bottom: 8px; }
```

Helper text 12px `#6F6F6F` below; error text 12px `#DA1E28` with an error icon inside the field at the right.

### Masthead (ibm.com)

48px tall, white, 1px `#E0E0E0` bottom border. 8-bar logo left, then top-level menu items in 14px Plex (products, consulting, support and similar; exact labels change), with search, contact and profile icons at the right as 48px square icon buttons. Mega-menus drop down as full-width white panels with categories in a left rail.

### Leadspace (hero)

Full-width band, often Gray 100 or an image with a dark gradient. Title in 42-60px Plex Light, a short paragraph in 16-20px, then a primary button with an arrow (`→`). Content aligns to the left 8 columns.

### Cards

```css
.cds-card {
  background: #F4F4F4; padding: 16px 16px 64px; min-height: 240px; border-radius: 0; position: relative;
  transition: background 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
.cds-card:hover { background: #E8E8E8; }
.cds-card__eyebrow { font-size: 14px; color: #525252; }
.cds-card__heading { font: 400 20px/1.4 "IBM Plex Sans"; color: #161616; }
.cds-card__footer { position: absolute; left: 16px; bottom: 16px; color: #0F62FE; } /* 20px arrow icon */
```

Card groups sit in a grid with 1px gaps (the page background shows through as hairlines). Pictogram cards place a 48px line pictogram at the top.

### Tiles

Like cards, but for product UI: `#F4F4F4`, 16px padding, clickable tiles get a hover `#E8E8E8`; selectable tiles show a checkmark in the corner and a 1px `#161616` outline when selected.

### Tabs

Line tabs: 14px labels, 48px tall, active label 600 weight with a 2px Blue 60 bottom border; inactive have a 2px `#E0E0E0` border. Contained tabs: `#E0E0E0` fill, active tab white with a 2px Blue 60 top border.

### Data table

Header `#E0E0E0` with 14px SemiBold labels, rows 48px (also 24, 32, 40, 64), `#E0E0E0` dividers, hover `#E8E8E8`, selected `#E0E0E0`. Toolbar above with search, filter and a primary button at the right. Zebra stripes optional.

### Tags

24px tall pills (fully rounded), 12px text, colored fill from the family 20 shade with 80/70 text, for example blue tag `#D0E2FF` with `#002D9C` text. This is one of few round elements.

### Notifications

Inline notification: 3px left border in the status color, light tinted background (error `#FFF1F1`, success `#DEFBE6`, info `#EDF5FF`, warning `#FFF8E1`), filled status icon, bold title and body on one line.

### Modal

White (or Gray 10), no radius, title 20px, label 12px above it, close X at top right, button set flush at the bottom with no padding. Overlay `rgba(22,22,22,0.5)`.

## 6. Layout & Spacing

- **2x Grid:** 16 columns on lg and up, 8 on md, 4 on sm. Gutters 32px (16px each side of a column); margins 16px.
- **Breakpoints:** sm 320px, md 672px, lg 1056px, xlg 1312px, max 1584px.
- **Max width:** 1584px; content often sits in the right 12 of 16 columns with a sticky left nav or a title in the first 4.
- **Spacing scale (spacing-01 to 13):** 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160px.
- **Section rhythm on ibm.com:** 48-96px vertical padding; horizontal rules (`#E0E0E0`) separate content blocks.
- **Density:** product UI is compact (32-40px controls); marketing uses 48-64px controls.

## 7. Depth, Elevation & Motion

Carbon is flat. Depth comes from color layering (white on Gray 10 on white), not shadows.

- **Shadow:** only for floating elements (menus, popovers, tooltips, dropdowns): `0 2px 6px rgba(0,0,0,0.3)`.
- **Borders:** 1px `#E0E0E0` or `#C6C6C6`; focus is always a 2px inset Blue 60 line.
- **Motion:** "productive" vs "expressive". Easing tokens: standard productive `cubic-bezier(0.2, 0, 0.38, 0.9)`, entrance `cubic-bezier(0, 0, 0.38, 0.9)`, exit `cubic-bezier(0.2, 0, 1, 0.9)`, expressive standard `cubic-bezier(0.4, 0.14, 0.3, 1)`.
- **Durations:** fast-01 70ms, fast-02 110ms, moderate-01 150ms, moderate-02 240ms, slow-01 400ms, slow-02 700ms.
- Hover color changes use 70-110ms. Panels slide in at 240ms.

## 8. Iconography & Imagery

- **Carbon icons:** 16, 20, 24 and 32px glyphs drawn on a grid with flat, squared ends, single color. The arrow-right (`→`) is a signature: it ends almost every link and card.
- **Pictograms:** larger 48-64px line illustrations (2px stroke at 64px) of objects and concepts; one color, often Gray 100 or Blue 60.
- **Photography:** documentary-style, real people and labs, natural light, sometimes desaturated or with a blue duotone.
- **Illustration:** geometric, isometric or line-based, using the IBM color families on dark or white; AI pages use soft blue-to-purple light and glows.
- **AI label:** Carbon marks AI features with a small "AI" label and a subtle blue gradient border and inner glow (`rgba(69,137,255,0.1)`).

## 9. Voice & Microcopy

Plain, factual, confident. IBM writes for experts but avoids jargon in headlines. Sentence case always.

- Headlines (ibm.com homepage, read today): "Bring agentic AI value into focus", "Recommended for you", "Upcoming webinars", "Training for what's next", "Stay connected"
- Card titles start with a verb: "Explore all IBM products", "Secure machine and agent identities with IBM Vault"
- Buttons: "Learn more", "Start your free trial", "Contact sales", "Book a meeting", "Read the report"
- Links end with an arrow: "See the case study →"
- Product UI: "Create resource", "Add filter", "No results found", "Delete instance?", "This action cannot be undone."
- Form errors: "Enter a valid email address."

## 10. Do's and Don'ts

**Do**

- Use IBM Plex Sans (free) and set big headlines at weight 300.
- Keep every corner square, except tags, toggles and avatars.
- Use Blue 60 `#0F62FE` for actions and focus only.
- Layer greys (`#FFFFFF`, `#F4F4F4`, `#E8E8E8`, `#161616`) to create structure.
- Align to the 16-column 2x Grid with 32px gutters.
- End links and cards with the Carbon arrow icon.

**Don't**

- Don't round buttons or cards.
- Don't use drop shadows on cards.
- Don't center long blocks of text.
- Don't use the IBM color families as decoration on buttons; they are for data and illustration.
- Don't change the stripe count or color fills of the 8-bar logo.
- Don't use Title Case or all caps for buttons.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of IBM (Carbon design system). Font: `"IBM Plex Sans", system-ui, sans-serif` (load from Google Fonts), with IBM Plex Mono for code. White page, Gray 10 `#F4F4F4` bands and tiles, text `#161616`, secondary text `#525252`, dividers `#E0E0E0`. All corners square (border-radius 0). Primary buttons `#0F62FE`, white 14px text left-aligned, an arrow icon pushed to the right edge, 48px tall, hover `#0050E6`, active `#002D9C`; secondary buttons `#393939`; ghost buttons blue text. Inputs are `#F4F4F4` with only a 1px `#8D8D8D` bottom border and a 2px `#0F62FE` focus outline. Headlines are large and light (weight 300, 42-76px). Use a 48px white masthead with the 8-bar logo, a dark Gray 100 `#161616` hero, and a grid of flat `#F4F4F4` cards separated by 1px gaps, each ending with a blue arrow, hover `#E8E8E8`. Use a 16-column grid with 32px gutters, max width 1584px. Motion: `cubic-bezier(0.2, 0, 0.38, 0.9)`, 70-240ms. No card shadows, sentence case everywhere.

```css
:root {
  --brand-blue-60: #0F62FE;
  --brand-blue-hover: #0050E6;
  --brand-blue-active: #002D9C;
  --brand-blue-70: #0043CE;
  --brand-blue-40: #78A9FF;
  --brand-blue-20: #D0E2FF;
  --brand-gray-100: #161616;
  --brand-gray-90: #262626;
  --brand-gray-80: #393939;
  --brand-gray-70: #525252;
  --brand-gray-50: #8D8D8D;
  --brand-gray-30: #C6C6C6;
  --brand-gray-20: #E0E0E0;
  --brand-gray-hover: #E8E8E8;
  --brand-gray-10: #F4F4F4;
  --brand-white: #FFFFFF;
  --brand-purple-60: #8A3FFC;
  --brand-error: #DA1E28;
  --brand-success: #24A148;
  --brand-warning: #F1C21B;
  --brand-font: "IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --brand-font-mono: "IBM Plex Mono", Menlo, Courier, monospace;
  --brand-font-serif: "IBM Plex Serif", Georgia, serif;
  --brand-radius: 0;
  --brand-shadow-float: 0 2px 6px rgba(0,0,0,0.3);
  --brand-ease-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --brand-ease-entrance: cubic-bezier(0, 0, 0.38, 0.9);
  --brand-ease-exit: cubic-bezier(0.2, 0, 1, 0.9);
  --brand-ease-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --brand-duration-fast: 70ms;
  --brand-duration-moderate: 240ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by IBM.

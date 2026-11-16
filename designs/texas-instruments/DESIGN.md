---
name: Texas Instruments
shortName: TI
slug: texas-instruments
url: https://ti.com
category: Hardware
tagline: "Utilitarian engineer's catalogue: white pages, TI red actions, teal links, Roboto."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: TI Red
    hex: "#CC0000"
    role: Logo, primary buttons, accent borders, error text
  - name: Red Hover
    hex: "#EE0000"
    role: Primary button hover
  - name: Red Pressed
    hex: "#A40000"
    role: Primary button active
  - name: Teal
    hex: "#007C8C"
    role: Text links, tertiary buttons
  - name: Charcoal
    hex: "#333333"
    role: Primary text, secondary links
  - name: White
    hex: "#FFFFFF"
    role: Page and container background
  - name: Grey 555
    hex: "#555555"
    role: Secondary elements, dark containers, input icons
  - name: Light Grey
    hex: "#F7F7F7"
    role: Secondary page background
  - name: Divider Grey
    hex: "#E8E8E8"
    role: Dividers, input hover, disabled fill
  - name: Border Grey
    hex: "#CCCCCC"
    role: Input borders, primary dividers
  - name: Mid Grey
    hex: "#949494"
    role: Contrast dividers, disabled text
  - name: Teal Dark
    hex: "#00525D"
    role: Teal pressed, dark accent
  - name: Teal Light
    hex: "#9BD7DF"
    role: Links on dark backgrounds
  - name: Success
    hex: "#37A145"
    role: In stock, success messages
  - name: Warning
    hex: "#FFA358"
    role: Warnings, lifecycle notices
fonts:
  display:
    family: "Roboto"
    fallback: "Roboto"
    weights: [300, 400, 500]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [400, 500, 700]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 56, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Heading L, size: 36, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Heading M, size: 24, weight: 500, lineHeight: 1.33, tracking: "0" }
  - { role: Heading S, size: 20, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Lead, size: 24, weight: 300, lineHeight: 1.33, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 16, 24, 28, 32, 40, 72]
shadows:
  - { name: Subtle, value: "0 1px 2px rgba(0,0,0,0.1)" }
  - { name: Menu, value: "2px 2px 8px rgba(0,0,0,0.2)" }
  - { name: Popover, value: "4px 4px 8px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#333333"
  muted: "#555555"
  border: "#CCCCCC"
  accent: "#CC0000"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Texas Instruments

## 1. Visual Theme & Atmosphere

ti.com is a working tool for electrical engineers first and a brand site second. Most visits end on a product folder, a parametric search table, a datasheet PDF or a cart, and the design reflects that: white pages, dark grey text, very little ornament, and TI red used as the action color.

The homepage opens with a full-height image slideshow (`ti-slideshow`) of engineers, boards and labs with a dark overlay and large white type. Underneath, it quickly turns into market tiles (Automotive, Industrial, Data center, Personal electronics), news cards and resource links.

The site runs on a shared pattern library whose tokens are prefixed `--pl-` (buttons, links, inputs, containers, dividers). Newer pages are built in Next.js with Tailwind utilities layered on top of those tokens.

What makes it recognisable:

- **TI red `#CC0000`** on the bug logo, the primary button and the thin accent rules.
- **Teal links `#007C8C`.** Unusual for a red brand, and it keeps the red reserved for actions.
- **Roboto everywhere,** with a light 300 weight for lead paragraphs.
- **Dense data.** Parametric tables, part numbers, package types, pricing tables and stock status.
- **Square-ish geometry.** 4px corners on buttons and inputs, 0-2px on many tables.

Mood words: practical, trustworthy, technical, no-nonsense, American industrial.

## 2. Color Palette & Roles

All hex values below are from the live `--pl-*` tokens on ti.com.

| Name | Hex | Role |
|---|---|---|
| TI Red | `#CC0000` | `--pl-button-primary-color`, `--pl-element-color-primary`, accent border, accent text, error |
| Red Hover | `#EE0000` | Primary button hover (`#e00`) |
| Red Active | `#A40000` | Primary button pressed, darker primary |
| Teal | `#007C8C` | `--pl-link-color-primary`, tertiary button text |
| Teal Active | `#006774` | Tertiary button pressed |
| Teal Dark | `#00525D` | Tertiary element darker |
| Teal Light | `#9BD7DF` | Tertiary lighter, links on dark |
| Charcoal | `#333333` | Primary text, secondary links, dark border |
| Grey 555 | `#555555` | Secondary element, input icons, tertiary container |
| Mid Grey | `#949494` | Contrast dividers, disabled text |
| Placeholder | `#767676` | Input placeholder |
| Disabled Text | `#AAAAAA` | Disabled text, accent-contrast text |
| Border Grey | `#CCCCCC` | Input border, primary divider, disabled button |
| Divider Grey | `#E8E8E8` | Secondary divider, input hover, disabled fill |
| Light Grey | `#F7F7F7` | Secondary page background, primary-variant container |
| White | `#FFFFFF` | Page background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#37A145` | "In stock", confirmations |
| Warning | `#FFA358` | Lifecycle notices ("NRND"), cautions |
| Error | `#CC0000` | Validation errors, out-of-stock |
| Info | `#007C8C` | Informational links and notes |

### Dark containers

TI uses dark grey containers (`#333333` or `#555555`) rather than a full dark mode. On them: text `#FFFFFF`, secondary text `rgba(255,255,255,0.7)`, links `#FFFFFF` or `#9BD7DF`, dividers `#949494`. Hero slides overlay photos with a dark gradient and white text.

## 3. Typography

**Family:** Roboto (Google Fonts), loaded through Next.js font optimisation, with the stack `Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif`. Older pages and the global header still declare the same stack. Datasheets use their own layout and are out of scope.

TI does not use a proprietary display face on the web. The "TEXAS INSTRUMENTS" lettering in the logo is artwork, not a font to reuse.

### Scale (desktop, from homepage markup)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero slide title | 56px (34px mobile) | 400 | 72px (48px mobile) | 0 |
| Hero lead | 24px (18px mobile) | 300 | 32px | 0 |
| Heading L (H2) | 36px | 400 | 1.25 | 0 |
| Heading M (H3 tiles) | 24px | 500 | 1.33 | 0 |
| Heading S | 20px | 500 | 1.4 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Table / UI text | 14px | 400 | 1.43 | 0 |
| Caption, legal | 12px | 400 | 1.33 | 0 |

### Rules

- Sentence case for headings ("The world leader in semiconductor innovation"); part numbers are uppercase (`TPS62840`, `MSPM0G3507`).
- Headlines are regular weight, not bold. Use weight to separate UI labels (500) from body (400).
- Trademarks are written in copy: CCStudio™, SimpleLink™, C2000™.
- Tabular numerals in pricing and parametric tables.

## 4. Logo & Brand Mark

The TI logo pairs the **"bug"**, a red silhouette of the state of Texas with a lowercase "ti" cut out of it, with the stacked wordmark "TEXAS INSTRUMENTS" in black small caps.

- **Colors:** red `#CC0000` bug with black wordmark on white (primary); all-white on red or dark grey; all-black for single-color print.
- **Bug alone:** used for favicons, app icons and social avatars. The "ti" letters are knocked out, so the background shows through.
- **Clear space:** at least the height of the "ti" on every side (approximate).
- **Minimum size:** bug about 16px tall on screen; full lockup about 100px wide (approximate).

Misuse: do not redraw the state outline, rotate the bug, separate the "ti" from the shape, set the wordmark in Roboto, or put the red bug on a red background.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Hover / active |
|---|---|---|---|---|
| Primary | `#CC0000` | `#FFFFFF` | none | `#EE0000` / `#A40000` |
| Secondary | transparent | `#CC0000` | 1px `#CC0000` | fills `#EE0000`, text white / `#A40000` |
| Tertiary (text) | none | `#007C8C` | none | `#007C8C` underline / `#006774` |
| Reversed (on dark) | transparent | `#FFFFFF` | 1px `#FFFFFF` | fills white, text `#333` / `#E8E8E8` |
| Disabled | `#CCCCCC` | `#949494` | none | none |

```css
.ti-btn-primary {
  font: 500 14px/20px Roboto, "Helvetica Neue", Arial, sans-serif;
  padding: 8px 16px;           /* about 36px tall, approximate */
  background: #CC0000; color: #fff;
  border: 0; border-radius: 4px;
  transition: background-color 150ms ease;
}
.ti-btn-primary:hover { background: #EE0000; }
.ti-btn-primary:active { background: #A40000; }
.ti-btn-primary:focus-visible { outline: 2px solid #555; outline-offset: 2px; }
```

### Global header

- White bar, TI logo left, a large search field in the middle, and account, cart and region on the right.
- Second row with "Products", "Applications", "Design resources", "Quality & reliability", "Support & training", "About TI" at 14px/500 in `#333333`.
- Mega menus list product families in multiple columns, with 1px `#E8E8E8` separators.

### Inputs

- Height 36-40px, white fill, 1px `#CCCCCC` border, 4px radius, 14px text `#333333`, placeholder `#767676`.
- Hover fill `#E8E8E8`; focus border `#555555`; disabled fill `#E8E8E8`, text `#949494`.

### Parametric tables (signature)

- Full-width tables with sticky header row in `#F7F7F7`, 14px/500 headers, 14px/400 cells, 1px `#E8E8E8` row lines, 8-12px cell padding.
- Part number column in teal link color; filter facets on the left with checkboxes and range sliders.
- Status chips: "Active" in green `#37A145`, "Preview" and "NRND" in warning orange.

### Cards and tiles

- Market tiles: photo with dark overlay, white 24px/500 heading, no visible border, 0-4px radius.
- News cards: image top, 16:9, 12px date, 20px title, teal "Read more" link.
- Slideshow thumbnails get a red `#CC0000` progress bar under the active item.

### Tabs

Underline tabs: 14-16px/500 `#555555` inactive, `#333333` active, 2-3px `#CC0000` underline.

### Alerts

Left 4px border in the semantic color, `#F7F7F7` fill, 14px text.

## 6. Layout & Spacing

- **Max width:** content is capped at 1328px; hero text column at 874px.
- **Gutters:** 16px mobile, 72px desktop inside heroes (from markup); general content 24-32px (approximate).
- **Hero:** height `calc(100dvh - header)` with a 560px minimum.
- **Spacing:** Tailwind 4px steps; common values 16, 24, 28, 32, 40, 72px. Section spacing about 40-64px (approximate).
- **Breakpoints:** Tailwind defaults, `md` at 768px for the main switch.
- **Density:** high in product and search pages; tables use the full width.

## 7. Depth, Elevation & Motion

- Mostly flat. Hierarchy comes from `#F7F7F7` bands and 1px `#E8E8E8` / `#CCCCCC` rules.
- Shadows: `0 1px 2px rgba(0,0,0,0.1)` for sticky bars; `2px 2px 8px rgba(0,0,0,0.2)` and `4px 4px 8px rgba(0,0,0,0.2)` for menus and popovers.
- Motion is short and functional: 150-200ms color changes, slideshow auto-advance with a progress bar, accordion expand around 200ms (approximate).

## 8. Iconography & Imagery

- **Icons:** simple filled or 2px line glyphs at 16-24px in `#555555`, red for alerts. Cart, user, search, download, PDF.
- **Photography:** real engineers in labs, evaluation boards on benches, close-ups of ICs and PCBs. Recent hero images use a dark blue-grey "invisible technology" grade with glowing circuit overlays.
- **Diagrams:** block diagrams and reference designs in flat grey boxes with red or teal highlights.

## 9. Voice & Microcopy

Plain, specific and technical. Writes for engineers who know what they want.

- CTAs: "Order now", "Learn more", plus catalogue actions such as "View datasheet" and "Add to cart" (approximate wording).
- Claims tie to capability: power density, precision, longevity of supply.
- Avoids hype; prefers product family names and parameters.

Sample strings:

- "The world leader in semiconductor innovation"
- "Redefining embedded development with agentic AI"
- Search placeholder along the lines of "Search by part number or keyword" (approximate)
- "In stock", "Preview", "NRND", "Obsolete"

## 10. Do's and Don'ts

**Do**

- Keep red for primary actions and accent rules; use teal for links.
- Use Roboto at 400 for headlines and 300 for lead copy.
- Keep corners at 4px and borders at 1px light grey.
- Put dense, sortable data front and center.
- Show real boards, chips and people at work.

**Don't**

- Don't fill large areas with red.
- Don't use pill buttons or heavy shadows.
- Don't set headlines in bold or all caps.
- Don't mix the red and teal on the same button.
- Don't separate the "ti" from the Texas shape in the logo.

## 11. Agent Prompt Guide

> Build this UI in the style of Texas Instruments (ti.com). White page, `#F7F7F7` secondary bands, text `#333333`, secondary `#555555`. Font: Roboto, "Helvetica Neue", Arial. Headlines are regular 400 (hero 56px/72px over a darkened photo, white text, lead paragraph 24px weight 300). Primary button: `#CC0000` fill, white 14px/500 text, 4px radius, 8px 16px padding, hover `#EE0000`, active `#A40000`. Secondary: 1px red outline. Links and tertiary buttons are teal `#007C8C`. Inputs: 1px `#CCCCCC`, 4px radius, focus border `#555555`. Build a global header with a wide part-number search box, and dense parametric tables with `#F7F7F7` sticky headers, 1px `#E8E8E8` row lines and teal part-number links. Status chips green `#37A145`, warning `#FFA358`. Flat surfaces, small shadows only on menus. Max width 1328px.

```css
:root {
  --brand-red: #CC0000;
  --brand-red-hover: #EE0000;
  --brand-red-active: #A40000;
  --brand-teal: #007C8C;
  --brand-teal-active: #006774;
  --brand-teal-dark: #00525D;
  --brand-teal-light: #9BD7DF;
  --brand-text: #333333;
  --brand-text-secondary: #555555;
  --brand-text-disabled: #949494;
  --brand-placeholder: #767676;
  --brand-bg: #FFFFFF;
  --brand-bg-2: #F7F7F7;
  --brand-divider: #E8E8E8;
  --brand-border: #CCCCCC;
  --brand-dark: #333333;
  --brand-success: #37A145;
  --brand-warning: #FFA358;
  --brand-error: #CC0000;
  --brand-font: Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;
  --brand-font-mono: "Roboto Mono", ui-monospace, Menlo, monospace;
  --brand-radius-sm: 2px;
  --brand-radius: 4px;
  --brand-radius-lg: 8px;
  --brand-shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
  --brand-shadow-menu: 2px 2px 8px rgba(0,0,0,0.2);
  --brand-max-width: 1328px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Texas Instruments.

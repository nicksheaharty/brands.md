---
name: SAP
slug: sap
url: https://sap.com
category: Productivity
tagline: "Fiori Horizon: the 72 typeface, SAP blue, soft grey shell and dense enterprise tables."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Brand Blue
    hex: "#0070F2"
    role: Fiori brand color, emphasized buttons, information state
  - name: Logo Cyan
    hex: "#00B1EB"
    role: Top stop of the SAP logo gradient
  - name: Logo Blue
    hex: "#0069B4"
    role: Bottom stop of the SAP logo gradient
  - name: Text
    hex: "#131E29"
    role: Primary text, titles, icons
  - name: Highlight Blue
    hex: "#0064D9"
    role: Links, ghost button text, hover on emphasized buttons
  - name: Shell Grey
    hex: "#EFF1F2"
    role: Shell bar and app background behind content
  - name: Background
    hex: "#F5F6F7"
    role: Page background (sapBackgroundColor)
  - name: White
    hex: "#FFFFFF"
    role: Cards, tiles, tables, dialogs
  - name: Label
    hex: "#556B82"
    role: Field labels, secondary text
  - name: List Border
    hex: "#E5E5E5"
    role: Table row dividers
  - name: Focus
    hex: "#0032A5"
    role: Keyboard focus outline
  - name: Positive
    hex: "#256F3A"
    role: Success text and status
  - name: Critical
    hex: "#E76500"
    role: Warning status
  - name: Negative
    hex: "#AA0808"
    role: Error text and status
fonts:
  display:
    family: "72"
    fallback: "Noto Sans"
    weights: [700, 900]
  body:
    family: "72"
    fallback: "Noto Sans"
    weights: [400, 700]
  mono:
    family: "72 Mono"
    fallback: "Noto Sans Mono"
    weights: [400]
typeScale:
  - { role: Header 1, size: 48, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Header 2, size: 32, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Header 3, size: 24, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Header 4, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Header 5, size: 16, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Small, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Shadow 0, value: "0 0 2px 0 rgba(34,53,72,0.2), 0 2px 4px 0 rgba(34,53,72,0.2)" }
  - { name: Shadow 1, value: "0 0 0 1px rgba(34,53,72,0.48), 0 2px 8px 0 rgba(34,53,72,0.3)" }
  - { name: Shadow 2, value: "0 0 0 1px rgba(34,53,72,0.48), 0 10px 30px 0 rgba(34,53,72,0.25)" }
  - { name: Shadow 3, value: "0 0 0 1px rgba(34,53,72,0.48), 0 20px 80px 0 rgba(34,53,72,0.25)" }
preview:
  bg: "#F5F6F7"
  surface: "#FFFFFF"
  text: "#131E29"
  muted: "#556B82"
  border: "#E5E5E5"
  accent: "#0070F2"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# SAP

## 1. Visual Theme & Atmosphere

SAP has two faces. The brand face is the blue gradient trapezoid logo and the corporate site at sap.com. The product face, which most people actually use every day, is **SAP Fiori**: the design system behind S/4HANA, SuccessFactors, Ariba, BTP and the Fiori launchpad. The current Fiori theme is called **Horizon** (`sap_horizon`), and it is the reference for this file.

Horizon is calm, bright and dense. A pale grey shell (`#EFF1F2`) frames white content cards. Text is a deep blue-black (`#131E29`) instead of pure black, and almost every interactive element is the same saturated SAP blue (`#0070F2`). The overall effect is "spreadsheet that went to design school": lots of data, tables and forms, organised with soft 8-16px corners, quiet shadows and generous labels.

What makes it recognisable:

- **The 72 typeface.** SAP's own humanist sans, used everywhere from the logo-adjacent marketing to every table cell. Bold (`72-Bold`) carries titles; regular carries everything else.
- **One blue for action.** Emphasized buttons, links, selection, focus and info state all live in the `#0064D9` to `#0070F2` range.
- **Shell bar + launchpad tiles.** A light shell bar across the top with the SAP logo on the left, then a grid of rounded white tiles (16px radius) on grey.
- **Object pages.** A header with title, key facts and status, then anchored sections of forms and tables beneath.
- **Semantic color everywhere.** Status text and object statuses in green, orange, red and blue are part of the daily vocabulary.
- **Compact and cozy densities.** Every control has two heights: 36px for touch ("cozy") and 26px for mouse-heavy desktop ("compact").

Mood words: orderly, trustworthy, dense, business-calm.

Note: sap.com returned a 403 to automated requests when this file was written. Product values below come from the published Horizon theme parameters (`@sap-theming/theming-base-content`, `sap_horizon/css_variables.css`). Marketing-site values are marked approximate.

## 2. Color Palette & Roles

### Core (Horizon theme parameters)

| Name | Hex | Role |
|---|---|---|
| sapBrandColor | `#0070F2` | Brand color, emphasized button, information color |
| sapHighlightColor | `#0064D9` | Links, standard button text, emphasized hover |
| sapTextColor | `#131E29` | Body and title text, icons |
| sapContent_LabelColor | `#556B82` | Labels, secondary text |
| sapContent_ForegroundBorderColor | `#758CA4` | Strong borders on controls |
| sapField_BorderColor | `#556B81` | Input border |
| sapButton_BorderColor | `#BCC3CA` | Default button border |
| sapList_BorderColor | `#E5E5E5` | Table and list dividers |
| sapShell_Background | `#EFF1F2` | Shell bar and launchpad background |
| sapBackgroundColor | `#F5F6F7` | App page background |
| sapBaseColor | `#FFFFFF` | Cards, tiles, dialogs, tables |
| sapButton_Hover_Background | `#EAECEE` | Default button and list row hover |
| sapList_SelectionBackgroundColor | `#EBF8FF` | Selected table row |
| sapButton_Selected_Background | `#EDF6FF` | Toggled button |
| sapContent_FocusColor | `#0032A5` | Focus outline |

### Logo gradient

The SAP logo is a vertical gradient from `#00B1EB` (top) through `#009AD9`, `#007FC4`, `#006EB8` to `#0069B4` (bottom), with white letters. Use the gradient only inside the logo; product UI is flat.

### Semantic colors

| State | Text color | Element color | Use |
|---|---|---|---|
| Positive | `#256F3A` | `#30914C` | Approved, completed, on track |
| Critical | `#E76500` | `#E76500` | Pending, at risk, warnings |
| Negative | `#AA0808` | `#F53232` | Rejected, overdue, errors |
| Information | `#0070F2` | `#0070F2` | Info messages, neutral highlights |
| Neutral | `#788FA6` | `#788FA6` | Draft, not started |

### Accent palette

Used for avatars, charts and object status "indication" colors, never for primary actions: orange `#D27700`, red `#AA0808`, raspberry `#BA066C`, purple `#A100C2`, indigo `#5D36FF`, blue `#0057D2`, teal `#046C7A`, green `#256F3A`, violet `#6C32A9`. Avatar 1 uses a pale yellow fill `#FFF3B8` with `#A45D00` initials; the other avatar slots follow the same pale-fill, dark-initial pattern.

### Dark and high-contrast modes

Horizon ships `sap_horizon_dark`, `sap_horizon_hcb` and `sap_horizon_hcw`. In dark, the background shifts to a deep navy (around `#12171C`), cards to roughly `#1D232A`, text to `#EAECEE`, and the brand blue lightens to about `#4DB1FF` (approximate). Always build with theme parameters so the same component works in all four.

### sap.com (approximate)

The corporate site uses white pages, near-black text, the logo gradient blues and full-bleed photography, with deep navy bands (around `#0A1A33`) for dark sections. Treat these as approximate.

## 3. Typography

**Family:** `72`, SAP's own typeface, designed for Fiori and also used across SAP brand material. It ships as `72`, `72-Bold`, `72-Light`, `72-Black`, condensed cuts and `72 Mono`. Fiori loads it from the theming CDN as `72` and `72full` (with extended glyph coverage).

```css
font-family: "72", "72full", Arial, Helvetica, sans-serif;           /* sapFontFamily */
font-family: "72-Bold", "72-Boldfull", "72", Arial, sans-serif;      /* sapFontBoldFamily, headers */
```

**Licensing:** 72 is free to use inside SAP products and SAP-based apps via UI5 and the theming packages. Outside that context, use **Noto Sans** as the fallback; it shares the humanist proportions and wide language coverage.

**Base size:** 14px (`sapFontSize: .875rem`). Small is 12px, large is 16px.

### Scale (Horizon theme parameters)

| Role | Token | Size | Weight | Line height |
|---|---|---|---|---|
| Header 1 | sapFontHeader1Size | 48px | 700 | 1.2 |
| Header 2 | sapFontHeader2Size | 32px | 700 | 1.2 |
| Header 3 | sapFontHeader3Size | 24px | 700 | 1.25 |
| Header 4 | sapFontHeader4Size | 20px | 700 | 1.3 |
| Header 5 | sapFontHeader5Size | 16px | 700 | 1.4 |
| Header 6 | sapFontHeader6Size | 14px | 700 | 1.4 |
| Large | sapFontLargeSize | 16px | 400 | 1.4 |
| Body | sapFontSize | 14px | 400 | 1.4 |
| Small | sapFontSmallSize | 12px | 400 | 1.33 |

Object page titles are typically 20-24px bold; dialog titles 16px bold; table column headers 14px regular in `#556B82`.

### Rules

- Title case for app names and page titles ("Manage Purchase Orders"), sentence case for messages and descriptions.
- Labels end with a colon in forms: "Supplier:". Required fields get a red asterisk.
- Use tabular figures for amounts. Amounts align right, units sit next to the number in label color ("1,250.00 EUR").
- No letter-spacing adjustments. 72 is tuned for tracking 0.
- Use Bold for titles and key values, never italic for emphasis.

## 4. Logo & Brand Mark

The SAP logo is the white letters "SAP" set inside a blue gradient shape: a rectangle whose right edge is cut at a diagonal, so the shape reads as a trapezoid pointing down-left. Proportion is roughly 2:1 (412 x 204 units in the master).

- **Clear space:** at least the height of the "A" crossbar region, around 25% of the logo height, on all sides (approximate).
- **Minimum size:** about 20px tall on screen; below that use the favicon version.
- **Color versions:** gradient (primary), solid SAP blue, black, and white on dark photography.
- **Placement in product:** top-left of the shell bar at about 32px wide (16px tall), followed by the product name in 72 Bold.
- **Misuse:** don't recolor the gradient, don't stretch the diagonal, don't separate the letters from the shape, don't add drop shadows or place it on busy imagery without a solid backing.

## 5. Components

Fiori controls come from SAPUI5 or UI5 Web Components (`@ui5/webcomponents`). The CSS below mirrors their Horizon styling.

### Buttons

Height 36px cozy, 26px compact. Radius 8px (`sapButton_BorderCornerRadius: .5rem`). Label 14px, weight 400 (default) or 700 (emphasized). Horizontal padding 10-12px; icon-only buttons are square.

```css
.sap-btn {
  height: 36px; padding: 0 12px; border-radius: 8px;
  font: 400 14px/1 "72", Arial, sans-serif;
  background: #FFFFFF; color: #0064D9; border: 1px solid #BCC3CA;
  transition: background 120ms ease-out;
}
.sap-btn:hover { background: #EAECEE; }
.sap-btn:active { background: #FFFFFF; border-color: #0064D9; }
.sap-btn--emphasized { background: #0070F2; color: #FFFFFF; border-color: #0070F2; font-family: "72-Bold", "72", Arial, sans-serif; }
.sap-btn--emphasized:hover { background: #0064D9; border-color: #0064D9; }
.sap-btn--transparent { background: transparent; border-color: transparent; color: #0064D9; }
.sap-btn--accept { background: #F5FAE5; color: #256F3A; border-color: #30914C; }   /* approximate */
.sap-btn--reject { background: #FFEAF4; color: #AA0808; border-color: #F53232; }   /* approximate */
.sap-btn:focus-visible { outline: 2px solid #0032A5; outline-offset: -4px; }
.sap-btn:disabled { opacity: 0.4; }
```

Rules: one emphasized button per toolbar, placed rightmost in footers. Secondary actions use default (outlined) or transparent buttons.

### Inputs

```css
.sap-input {
  height: 36px; padding: 0 10px; border-radius: 4px;
  background: #FFFFFF; color: #131E29;
  border: 1px solid #556B81;
  font: 400 14px "72", Arial, sans-serif;
}
.sap-input:hover { border-color: #0064D9; box-shadow: 0 0 0 1px #0064D9 inset; }
.sap-input:focus { outline: 2px solid #0032A5; outline-offset: -2px; }
.sap-input[aria-invalid="true"] { border-color: #AA0808; background: #FFEAF4; border-width: 2px; }
```

Value states (error, warning, success, information) tint the field background and show a message popover under the field. Labels sit above the field in `#556B82`, 14px.

### Shell bar

48px tall (cozy) on `#EFF1F2` (or white in some variants), with: product switcher, SAP logo, product title in 72 Bold 16px, centred search field with 18px radius, notification bell, and a 32px circular avatar at the far right. No bottom border; content cards float below.

### Launchpad tiles

```css
.sap-tile {
  width: 176px; height: 176px; padding: 16px;
  background: #FFFFFF; border-radius: 16px;
  box-shadow: 0 0 2px 0 rgba(34,53,72,0.2), 0 2px 4px 0 rgba(34,53,72,0.2);
}
.sap-tile:hover { box-shadow: 0 0 0 1px rgba(34,53,72,0.48), 0 2px 8px 0 rgba(34,53,72,0.3); }
```

Tile anatomy: title (16px bold), subtitle (14px label color), then a large KPI number (36px, weight 300-400) or an icon at the bottom left, and a footer line. KPI numbers are colored by semantic state.

### Cards (integration cards)

White, 16px radius, Shadow 0. Header row with 16px bold title, 14px subtitle and an optional status counter ("3 of 12") on the right. Content is a list, table, analytical chart or object summary.

### Tables

Responsive table (`sap.m.Table`) and grid table (`sap.ui.table.Table`) are the workhorses.

- Header row: white background, 14px label-color text, bottom border `#E5E5E5`.
- Rows: 44px cozy, 32px compact; dividers `#E5E5E5`; hover `#EAECEE`; selected `#EBF8FF` with a 3px blue indicator on the left in some variants.
- Selection: checkboxes in the first column. Navigation: a chevron at the end of the row.
- Toolbar above the table: title with count ("Purchase Orders (24)"), search field, and icon buttons for sort, filter, group, settings.

### Object page header

Title 20-24px bold, subtitle in label color, avatar or image on the left, key facts in label/value pairs, and an object status (colored text with icon) on the right. Anchor bar of section links underneath; sections scroll in a single page.

### Object status and tags

- Object status: colored text, optional icon, e.g. "Approved" in `#256F3A` with a check icon.
- Inverted tag: 4px radius, solid semantic fill with white text, 12px bold.

### Dialogs and popovers

White surface, 8px radius (`sapPopover_BorderCornerRadius`), Shadow 2 for popovers, Shadow 3 for dialogs, with a dimmed block layer `rgba(0,0,0,0.6)` (approximate). Header 48px with 16px bold title; footer toolbar with buttons right-aligned, emphasized first.

### Message strip

Inline banner with 8px radius, 1px border and tinted background in the semantic color (for example info `#EBF8FF` with `#0070F2` border, approximate), leading icon and close button.

## 6. Layout & Spacing

- **Spacing tokens:** 8px tiny, 16px small, 32px medium, 48px large (`sapContent_Space_*`). The base unit is 4px; most gaps are 8 or 16.
- **Page padding:** 16px on phones, 32px on tablets, 48px on desktop (Fiori responsive paddings, approximate).
- **Breakpoints (UI5 range set):** S < 600px, M 600-1023px, L 1024-1439px, XL >= 1440px.
- **Layout floorplans:** list report, object page, worklist, overview page, wizard and the flexible column layout (one, two or three columns side by side).
- **Density:** cozy (36px controls) on touch; compact (26px controls, `sapElement_Compact_Height: 1.625rem`) on desktop data screens.
- **Launchpad:** tile grid with 8px gaps, grouped into sections with 20px bold group titles.

## 7. Depth, Elevation & Motion

Horizon uses four shadow levels, all tinted with the slate `rgba(34,53,72,…)`:

| Level | Value | Use |
|---|---|---|
| Shadow 0 | `0 0 2px 0 rgba(34,53,72,.2), 0 2px 4px 0 rgba(34,53,72,.2)` | Tiles, cards |
| Shadow 1 | `0 0 0 1px rgba(34,53,72,.48), 0 2px 8px 0 rgba(34,53,72,.3)` | Hovered tiles, menus |
| Shadow 2 | `0 0 0 1px rgba(34,53,72,.48), 0 10px 30px 0 rgba(34,53,72,.25)` | Popovers |
| Shadow 3 | `0 0 0 1px rgba(34,53,72,.48), 0 20px 80px 0 rgba(34,53,72,.25)` | Dialogs |

- Borders do most of the separation inside cards; shadows separate cards from the grey shell.
- Motion is short and functional: 100-250ms ease-out for hovers, popovers and side-panel slides (approximate). No bounce.
- Busy state: three pulsing dots (busy indicator) or skeleton placeholders.

## 8. Iconography & Imagery

- **SAP icon font** (`SAP-icons`, version 5 for Horizon): around 600 glyphs, mostly 1.5px line icons on a 16px grid with rounded joins. Default 16px in toolbars, 20-24px in tiles. Color `#131E29` or `#0064D9` when interactive.
- Additional sets: `SAP-icons-TNT` (technical) and `BusinessSuiteInApp`.
- **Illustrations:** Fiori "illustrated messages" for empty and error states: flat, friendly scenes in soft blues and teals with small characters, in sizes from dot to scene.
- **Photography (sap.com):** real workplaces, factories, retail and supply-chain scenes, natural light, often cropped wide with a blue overlay or gradient band.

## 9. Voice & Microcopy

Plain, neutral, task-oriented. Messages tell the user what happened and what to do next. App names describe a task.

- App titles: "Manage Purchase Orders", "Approve Requests", "My Inbox", "Display Supplier Invoice"
- Buttons: "Create", "Edit", "Save", "Cancel", "Approve", "Reject", "Go" (filter bar), "Adapt Filters"
- Table toolbar: "Purchase Orders (24)", "Search", "Sort", "Group", "Settings"
- Empty states: "No data", "No items available", "Start by adding a new item."
- Messages: "Purchase order 4500001234 was created.", "Enter a valid date.", "You have unsaved changes. Do you want to discard them?"
- Status: "Approved", "In Process", "Rejected", "Overdue"

Title Case for app titles, buttons and column headers. Sentence case for messages.

## 10. Do's and Don'ts

**Do**

- Build on theme parameters (`--sapBrandColor`, `--sapTextColor`) so dark and high-contrast themes work.
- Keep one emphasized (filled blue) button per area.
- Use semantic colors only for status: green, orange, red, blue.
- Give every table a toolbar with a title and item count.
- Offer compact density for desktop data entry.
- Use 72 or a close humanist fallback, at 14px base.

**Don't**

- Don't use pure black text or pure grey backgrounds; use `#131E29` and `#F5F6F7`.
- Don't put the logo gradient on buttons, tiles or backgrounds.
- Don't invent new accent colors for actions; blue is the only action color.
- Don't drop labels in favour of placeholders.
- Don't use heavy, dark shadows; Horizon shadows are slate-tinted and soft.
- Don't center-align numbers in tables.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of SAP Fiori (Horizon theme). Page background `#F5F6F7`, shell bar `#EFF1F2`, content on white cards with 16px radius and a soft slate shadow `0 0 2px rgba(34,53,72,.2), 0 2px 4px rgba(34,53,72,.2)`. Font: `"72", "Noto Sans", Arial, sans-serif` at a 14px base; titles in bold (700). Text `#131E29`, labels `#556B82`, dividers `#E5E5E5`. The emphasized button is `#0070F2` with white bold text, 36px tall, 8px radius, hover `#0064D9`; default buttons are white with `#BCC3CA` border and `#0064D9` text. Inputs are 36px tall with a 4px radius and `#556B81` border, focus outline 2px `#0032A5`. Status text uses green `#256F3A`, orange `#E76500`, red `#AA0808`, blue `#0070F2`. Build a list report: a shell bar with logo, app title and avatar; a filter bar with fields and a "Go" button; a table with title and count, 44px rows, checkboxes, right-aligned amounts and colored status text; selected rows `#EBF8FF`. Dense, orderly, no decorative gradients.

```css
:root {
  --brand-blue: #0070F2;
  --brand-highlight: #0064D9;
  --brand-logo-top: #00B1EB;
  --brand-logo-bottom: #0069B4;
  --brand-text: #131E29;
  --brand-label: #556B82;
  --brand-bg: #F5F6F7;
  --brand-shell: #EFF1F2;
  --brand-surface: #FFFFFF;
  --brand-border: #E5E5E5;
  --brand-button-border: #BCC3CA;
  --brand-field-border: #556B81;
  --brand-hover: #EAECEE;
  --brand-selected: #EBF8FF;
  --brand-focus: #0032A5;
  --brand-positive: #256F3A;
  --brand-critical: #E76500;
  --brand-negative: #AA0808;
  --brand-neutral: #788FA6;
  --brand-font: "72", "72full", "Noto Sans", Arial, Helvetica, sans-serif;
  --brand-font-bold: "72-Bold", "72", "Noto Sans", Arial, sans-serif;
  --brand-font-size: 14px;
  --brand-control-height: 36px;
  --brand-control-height-compact: 26px;
  --brand-radius-field: 4px;
  --brand-radius-button: 8px;
  --brand-radius-tile: 16px;
  --brand-shadow-0: 0 0 2px 0 rgba(34,53,72,0.2), 0 2px 4px 0 rgba(34,53,72,0.2);
  --brand-shadow-1: 0 0 0 1px rgba(34,53,72,0.48), 0 2px 8px 0 rgba(34,53,72,0.3);
  --brand-shadow-2: 0 0 0 1px rgba(34,53,72,0.48), 0 10px 30px 0 rgba(34,53,72,0.25);
  --brand-shadow-3: 0 0 0 1px rgba(34,53,72,0.48), 0 20px 80px 0 rgba(34,53,72,0.25);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by SAP.

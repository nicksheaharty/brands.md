---
name: HSBC
slug: hsbc
url: https://hsbc.com
category: Banking
tagline: "Red hexagon on white, ultra-light Univers headlines, square corners and black text."
updated: 2026-11-16
appStoreId: 1220329065
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: HSBC Red
    hex: "#DB0011"
    role: Hexagon logo, primary button fill, active indicators
  - name: Black
    hex: "#000000"
    role: Wordmark, headlines, secondary button fill
  - name: White
    hex: "#FFFFFF"
    role: Page background, the hexagon's centre
  - name: Charcoal
    hex: "#333333"
    role: Body text, outline button text and border
  - name: Slate
    hex: "#4D6474"
    role: Secondary solid button, table headers, info panels
  - name: Slate Dark
    hex: "#3E505D"
    role: Dark promo boxes, share price panel on the group site
  - name: Red Hover
    hex: "#AF000D"
    role: Primary button hover
  - name: Red Pressed
    hex: "#83000A"
    role: Primary button active, error text
  - name: Grey 767
    hex: "#767676"
    role: Secondary text, captions, quiet icons
  - name: Border Grey
    hex: "#D7D8D6"
    role: Input borders, table rules, inset dividers
  - name: Light Grey
    hex: "#EDEDED"
    role: Panel and band background
  - name: Mist
    hex: "#F3F3F3"
    role: Very light band, hover rows
  - name: Field Blue
    hex: "#376798"
    role: Input hover and focus border
  - name: Teal
    hex: "#008580"
    role: Success ticks, positive values, checked radios
fonts:
  display:
    family: "HSBC Univers Next"
    fallback: "Inter"
    weights: [200, 300, 400]
  body:
    family: "HSBC Univers Next"
    fallback: "Inter"
    weights: [400, 700]
typeScale:
  - { role: Display, size: 65, weight: 200, lineHeight: 1.08, tracking: "0" }
  - { role: Heading 1, size: 45, weight: 200, lineHeight: 1.1, tracking: "0" }
  - { role: Heading 2, size: 35, weight: 200, lineHeight: 1.125, tracking: "0" }
  - { role: Heading 3, size: 26, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: Lead, size: 22, weight: 300, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Button, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 0, md: 0, lg: 3, pill: 9999 }
spacing: [4, 8, 10, 14, 20, 30, 40, 60]
shadows:
  - { name: Rule, value: "inset 0 -1px 0 0 #D7D8D6" }
  - { name: Active tab, value: "inset 5px 0 0 0 #DB0011" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F3F3"
  text: "#000000"
  muted: "#333333"
  border: "#D7D8D6"
  accent: "#DB0011"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# HSBC

## 1. Visual Theme & Atmosphere

HSBC's web presence is strict and architectural. White pages, black type, square corners and the red hexagon. Headlines are set in Univers Next at very light weights (200 on the group site), large and quiet, so the red of the logo and the red primary button carry all the energy. The group site (hsbc.com) and the country banking sites (hsbc.co.uk, us.hsbc.com) share the same components with small differences.

What makes it recognisable:

- **The hexagon.** A red-and-white "bow tie" hexagon built from triangles. Its geometry (triangles meeting at a centre point, 45-degree edges) shows up in layouts and imagery.
- **Ultra-light headlines.** 45-65px Univers Next at weight 200 with tight line height. Thin type, lots of space.
- **No rounded corners.** Buttons, cards, inputs and images are square. Radius is 0 almost everywhere.
- **Red is rationed.** One red primary button per view. Secondary actions are black or outlined in charcoal.
- **Grey slate panels.** The group site uses slate `#3E505D` and greys for data boxes (share price, results highlights) rather than red.
- **Thin red indicators.** Active nav items and selected tabs get a red 5px bar (drawn with an inset box-shadow), not a fill.

Mood words: global, formal, precise, restrained, institutional.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| HSBC Red | `#DB0011` | Logo, primary button (`.A-BTNP-RW-ALL`, `.crh-button-primary`) |
| Group Red | `#DA0011` | Same red as written on hsbc.com |
| Red Hover | `#AF000D` | Primary hover (`#A7000D` on hsbc.com) |
| Red Pressed | `#83000A` | Primary active, error messages |
| Burgundy | `#730014` | Dark red highlight panels on hsbc.com |
| Black | `#000000` | Headlines, wordmark, secondary solid button |
| Charcoal | `#333333` | Body text, outline buttons |
| Grey 404 | `#404040` | Dense UI text |
| Grey 767 | `#767676` | Secondary text |
| Slate | `#4D6474` | Secondary solid button, table header text |
| Slate Grey | `#647987` | Quiet panels on hsbc.com |
| Slate Dark | `#3E505D` | Dark data boxes, share price |
| Border Grey | `#D7D8D6` | Inputs, rules |
| Light Grey | `#EDEDED` | Bands |
| Mist | `#F3F3F3` | Very light bands |
| Group Greys | `#EBEEF0`, `#F5F6F7` | Dividers and grey sections on hsbc.com |
| Field Blue | `#376798` | Input and checkbox hover/focus border |
| Teal | `#008580` | Success, ticks, positive |
| White | `#FFFFFF` | Base |

### Semantic colors

| State | Color | Notes |
|---|---|---|
| Error | `#83000A` text, `#DB0011` icon | Inline under the field with a warning glyph |
| Success | `#008580` | Tick icons in benefit lists and tables |
| Warning | `#E5A000` (approximate) | Amber triangle icon, black text |
| Info | `#4D6474` | Info panels with white text |

### Dark surfaces

There is no dark mode. Dark sections use black or `#3E505D` with white text, white 1px outline buttons (`.A-BTNSGDB-RW-ALL`) and the red primary unchanged.

## 3. Typography

**Family:** HSBC Univers Next (a licensed cut of Linotype Univers Next) with HSBC Neue Helvetica as the system fallback; Arabic markets add HSBC MT Univers. Stack: `"HSBC Univers Next", "HSBC Neue Helvetica", "Helvetica Neue", Helvetica, Arial, sans-serif`. An icon font (`HSBCIcon-Font` / `hsbc-icons`) supplies UI glyphs.

**Licensing:** Univers Next is commercial. Use **Inter** at weight 200-300 for headlines and 400 for body; it keeps the neutral, grotesque feel.

**Root size:** the group site sets the root to 10px, so `6.5rem` is 65px and body `1.8rem` is 18px.

### Scale (group site, desktop)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display / h1 | 65px | 200 | 1.08 |
| Heading 1 (page) | 45px | 200 | 1.1 |
| Heading 2 | 35px | 200 | 1.125 |
| Heading 3 | 26px | 300 | 1.2 (approximate) |
| Lead | 22px | 300 | 1.4 |
| Body | 18px | 400 | 1.43 |
| Small / legal | 14px | 400 | 1.45 |
| Button | 16px | 400 | 1.5 |

Mobile: h1 drops to about 30-35px, still weight 200. Country sites use slightly smaller body (16px) and headings at 300.

### Rules

- Sentence case for headings, buttons and nav.
- Headlines stay light (200-300). Bold (700) is for short labels and table emphasis only (`.A-TYP12B-RW-ALL`).
- Large numbers in results panels are set light, with the unit ("US DOLLARS") in small caps-style uppercase underneath.
- Left-aligned text; centred text only in short hero lines.

## 4. Logo & Brand Mark

The logo is the hexagon symbol followed by the HSBC wordmark in black. The hexagon is a white square framed by red triangles: two red triangles point inward from top and bottom to meet at the centre, and two red arrowhead shapes close the left and right sides.

- **Colors:** red `#DB0011` and white hexagon, black wordmark. On dark backgrounds the wordmark turns white; the hexagon keeps its red and white.
- **Clear space:** half the hexagon height on all sides (approximate).
- **Minimum size:** hexagon about 20px wide on screen.
- **Symbol alone:** used for app icons and avatars on white, often with a market label beneath ("UK").

Misuse:

- Do not recolor the hexagon or fill the white centre.
- Do not rotate the hexagon or use it as a bullet.
- Do not place the logo on red or on busy photography.
- Do not set "HSBC" in a live font next to the symbol.

## 5. Components

### Buttons

All buttons are square (radius 0), 1px border, Univers Next 16px/400, sentence case, about 10px 20px padding (44px tall), often with a min-width of 190px.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#DB0011` | `#FFFFFF` | 1px `#DB0011` | `#AF000D`; active `#83000A` |
| Secondary solid | `#000000` | `#FFFFFF` | 1px `#000000` | `#333333` (approximate) |
| Secondary outline | transparent | `#333333` | 1px `#333333` | `#F3F3F3` fill (approximate) |
| Slate | `#4D6474` | `#FFFFFF` | 1px `#4D6474` | darker slate |
| On dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | white 10% fill |

- Focus: 2px black outline offset 2px (approximate).
- Disabled: `#D7D8D6` fill, `#767676` text.
- Mobile: buttons stretch full width and stack with 14px gaps.

```css
.hsbc-btn {
  font: 400 16px/1.5 "HSBC Univers Next", Inter, Helvetica, Arial, sans-serif;
  padding: 10px 20px; min-width: 190px; border-radius: 0;
  background: #DB0011; color: #fff; border: 1px solid #DB0011;
}
.hsbc-btn:hover { background: #AF000D; border-color: #AF000D; }
.hsbc-btn:active { background: #83000A; }
.hsbc-btn--outline { background: transparent; color: #333; border-color: #333; }
```

### Links

Text links in black or charcoal with an underline, or a "link with right chevron" pattern: label plus a small red chevron icon that turns `#BA1110` on hover.

### Inputs

- 44px tall, 1px `#D7D8D6` border, radius 0, 16px text in `#333333`.
- Hover and focus: border `#376798`.
- Checkboxes are square 20px with a 1px border; checked uses a tick glyph from the icon font.
- Error: message in `#83000A` above or below the field with an icon.

### Cards and promo boxes

- Square, no shadow; separated by 1px `#E5E5E5` borders or by grey bands.
- Promo box: image on top (16:9), 20-30px padding, light 26px headline, body, then a chevron link.
- Data highlights (group results): a row of tiles with a large light number, unit in small uppercase, and a one-line caption.

### Navigation

- Header: logo left, top-level links in a horizontal row, "Online banking" or "Log on" button and "Search" right.
- Dropdown menus: full-width white panel, columns of links, 1px `#D7D8D6` dividers.
- Active section: red 5px bar (`box-shadow: inset 5px 0 0 0 #DB0011` on vertical lists, a bottom bar on horizontal).
- Mobile: hamburger; drill-down list with chevrons.

### Tabs

Horizontal tabs with an inset 1px bottom rule (`inset 0 -1px 0 0 #D7D8D6`); active tab gets a 3-5px red bar and black text, inactive `#767676`.

### Tables

Comparison tables use header text in `#4D6474`, 1px `#D7D8D6` rules, teal tick icons for "included", and a dash for "not included".

### Modals and notices

White, square, 30px padding, black headline at 26px/300, red primary and outline secondary buttons right aligned. Cookie and "you are leaving HSBC.com" notices use the same pattern.

## 6. Layout & Spacing

- **Spacing:** values cluster on 7px multiples on country sites (.875rem = 14px, 1.125rem = 18px, 1.25rem = 20px) and 10px multiples on the group site. Use 4, 8, 10, 14, 20, 30, 40, 60.
- **Grid:** 12-column Bootstrap-style grid on hsbc.com; 1200px container (approximate) with 15px half-gutters.
- **Breakpoints:** 768px and 1024px, plus 1280px for wide layouts (approximate).
- **Section rhythm:** large vertical gaps (60-115px above h1 on the group site); hero headlines have 75px bottom margin.
- **Alignment:** strict left alignment to the grid; images full-bleed within columns.
- **Density:** low on marketing pages, medium on product comparison pages.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Rule | `inset 0 -1px 0 0 #D7D8D6` | Tab bars, list dividers |
| Outline | `inset 0 0 0 1px #D7D8D6` | Selected list items |
| Active bar | `inset 5px 0 0 0 #DB0011` | Current item in side nav |
| Popup | `0 2px 10px rgba(0,0,0,.2)` | Dropdowns (approximate) |

- Effectively flat. Hierarchy comes from rules, grey bands and type size.
- Motion is minimal: 150-250ms fades for menus and accordions (approximate). Carousels slide without bounce.

## 8. Iconography & Imagery

- **Icons:** a proprietary icon font with simple, mostly line-based glyphs at 1px-2px weight; default black or charcoal, hover red. Chevrons are thin.
- **Photography:** documentary-style images of people, cities and trade (ports, factories, markets) from many countries; natural colour, no heavy filters, often full-bleed and square-cropped.
- **Graphic device:** triangles and diagonals from the hexagon geometry, used sparingly as cut corners or overlays on images.
- **Data visuals:** flat bars and lines in slate, grey and red.

## 9. Voice & Microcopy

Formal, international and measured. Writes for customers, investors and media at once. Uses British spelling on the group site.

- Sentence case.
- Buttons and links: "Log on", "Online banking", "Read more", "View quick read", "Discover more stories from HSBC", "Contact".
- Headlines state a fact or a theme, not a slogan.

Sample strings (from hsbc.com, 2026-11-16):

- "HSBC Group corporate website"
- "Latest news, views and stories"
- "Businesses resilient amid energy pressures, HSBC survey finds"
- "Discover more stories from HSBC"
- "You are leaving HSBC.com. Please be aware that the external site policies … may differ from our website terms and conditions and privacy policy."

## 10. Do's and Don'ts

**Do**

- Keep corners square on every component.
- Set headlines in a light weight (200-300) at large sizes.
- Use one red primary button per view; use black or charcoal outlines for the rest.
- Use thin red bars for active states.
- Use slate and greys for data panels.

**Don't**

- Don't round buttons or cards.
- Don't bold headlines.
- Don't use red for backgrounds of large areas or for body text.
- Don't add drop shadows to cards.
- Don't crowd the hexagon; give it its clear space.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of HSBC. White page, black headlines, charcoal `#333333` body, all corners square (border-radius 0). Font: "HSBC Univers Next", fallback Inter, Helvetica, Arial. Headlines are large and very light: 45-65px, weight 200, line-height about 1.1. Body is 18px/1.43 weight 400. Primary buttons are HSBC red `#DB0011` with white 16px/400 text, 1px border, 10px 20px padding, min-width 190px, hover `#AF000D`, active `#83000A`. Secondary buttons are black solid or a 1px `#333333` outline. Inputs are 44px tall with a 1px `#D7D8D6` border and `#376798` on focus. Cards are flat and square with 1px `#E5E5E5` borders. Active nav and tab items get a thin red bar (`box-shadow: inset 5px 0 0 0 #DB0011`). Use slate `#3E505D` or `#4D6474` panels with white text for data highlights. Teal `#008580` ticks for included features. Copy is formal and sentence case.

```css
:root {
  --brand-red: #DB0011;
  --brand-red-hover: #AF000D;
  --brand-red-active: #83000A;
  --brand-black: #000000;
  --brand-text: #333333;
  --brand-text-muted: #767676;
  --brand-slate: #4D6474;
  --brand-slate-dark: #3E505D;
  --brand-border: #D7D8D6;
  --brand-border-card: #E5E5E5;
  --brand-bg: #FFFFFF;
  --brand-surface: #F3F3F3;
  --brand-surface-2: #EDEDED;
  --brand-focus: #376798;
  --brand-success: #008580;
  --brand-font: "HSBC Univers Next", "HSBC Neue Helvetica", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-weight-heading: 200;
  --brand-weight-body: 400;
  --brand-radius: 0;
  --brand-rule: inset 0 -1px 0 0 #D7D8D6;
  --brand-active-bar: inset 5px 0 0 0 #DB0011;
  --brand-duration: 200ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by HSBC.

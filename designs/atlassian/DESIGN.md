---
name: Atlassian
slug: atlassian
url: https://atlassian.com
category: Productivity
tagline: "Teamwork blue, Charlie type on the website and the Atlassian Design System in product."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Atlassian Blue
    hex: "#1868DB"
    role: Brand color, logo, primary buttons, links, selected states
  - name: Ink
    hex: "#101214"
    role: Marketing headings and strong text
  - name: Text
    hex: "#292A2E"
    role: Default product text (ds-text)
  - name: White
    hex: "#FFFFFF"
    role: Page and surface background
  - name: Brand Boldest
    hex: "#1C2B42"
    role: Dark navy bands, bold brand backgrounds
  - name: Blue Hover
    hex: "#1558BC"
    role: Primary hover, link pressed
  - name: Text Subtle
    hex: "#505258"
    role: Secondary text
  - name: Text Subtlest
    hex: "#6B6E76"
    role: Captions, placeholders
  - name: Sunken
    hex: "#F8F8F8"
    role: Sunken surfaces, page bands
  - name: Container
    hex: "#F0F1F2"
    role: Hovered surfaces, containers
  - name: Border Input
    hex: "#8C8F97"
    role: Input borders
  - name: Selected
    hex: "#E9F2FE"
    role: Selected rows, information backgrounds
  - name: Discovery Purple
    hex: "#964AC0"
    role: Discovery and new-feature accents
  - name: Success Green
    hex: "#5B7F24"
    role: Success bold backgrounds
  - name: Warning Yellow
    hex: "#FBC828"
    role: Warning bold backgrounds
  - name: Danger Red
    hex: "#C9372C"
    role: Danger bold backgrounds, destructive buttons
fonts:
  display:
    family: "Charlie Display"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Atlassian Sans"
    fallback: "Inter"
    weights: [400, 500, 653]
  mono:
    family: "Atlassian Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Marketing Hero, size: 56, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Marketing H2, size: 40, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Heading XXL, size: 32, weight: 653, lineHeight: 1.125, tracking: "0" }
  - { role: Heading L, size: 24, weight: 653, lineHeight: 1.17, tracking: "0" }
  - { role: Heading M, size: 20, weight: 653, lineHeight: 1.2, tracking: "0" }
  - { role: Body L, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Body S, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 6, lg: 12, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32, 48, 64, 80]
shadows:
  - { name: Raised, value: "0 1px 1px #1E1F2140, 0 0 1px #1E1F214F" }
  - { name: Overflow, value: "0 0 8px #1E1F2129, 0 0 1px #1E1F211F" }
  - { name: Overlay, value: "0 8px 12px #1E1F2126, 0 0 1px #1E1F214F" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F8F8"
  text: "#101214"
  muted: "#505258"
  border: "#DDDEE1"
  accent: "#1868DB"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Atlassian

## 1. Visual Theme & Atmosphere

Atlassian has two layers. The brand layer (atlassian.com, ads, events) uses the Charlie type family, a confident blue, bright collection colors and playful illustration. The product layer (Jira, Confluence, Loom, Rovo) runs on the Atlassian Design System (ADS), a token-driven, quiet, 14px-based UI kit with Atlassian Sans. A good imitation keeps those two clear: expressive marketing, calm product.

What makes it recognisable:

- **One blue.** `#1868DB` is the logo, the primary button, the link and the selected state. The 2025 refresh moved it from the older `#0052CC` to this brighter value.
- **The A mark.** Two rounded, tilted triangles that form an "A", in blue, next to the **ATLASSIAN** wordmark in wide capitals.
- **App tiles.** Each product (Jira, Confluence, Loom, Rovo, Trello) has a rounded square tile with its own color and white glyph. Marketing pages line these up as a product family.
- **Collections.** Products are grouped into "Teamwork", "Strategy", "Service", "Software" and "Product" collections, each with its own accent color band.
- **Calm product chrome.** In-app, surfaces are white, borders are translucent greys, text is 14px, and color appears only for status and selection.

Mood words: optimistic, organised, collaborative, practical, friendly.

## 2. Color Palette & Roles

Values below are from the live `atlaskit-tokens_light.css` served on atlassian.com.

| Token / Name | Hex | Role |
|---|---|---|
| `color.background.brand.bold` | `#1868DB` | Primary buttons, logo, brand icons |
| `…brand.bold.hovered` | `#1558BC` | Primary hover |
| `…brand.bold.pressed` | `#144794` | Primary pressed |
| `…brand.boldest` | `#1C2B42` | Dark navy brand bands |
| `color.link` | `#1868DB` | Links (visited `#803FA5`) |
| `color.text` | `#292A2E` | Default product text |
| Marketing ink | `#101214` | Headings on atlassian.com |
| `color.text.subtle` | `#505258` | Secondary text |
| `color.text.subtlest` | `#6B6E76` | Meta, placeholders |
| `elevation.surface` | `#FFFFFF` | Default surface |
| `elevation.surface.sunken` | `#F8F8F8` | Sunken areas, page bands |
| `color.surface.container` | `#F0F1F2` | Containers, hovered surface |
| `color.border` | `#0B120E24` | Default translucent border |
| `color.border.input` | `#8C8F97` | Input border |
| `color.border.bold` | `#7D818A` | Strong border |
| `color.border.focused` | `#4688EC` | Focus ring |
| `color.background.selected` | `#E9F2FE` | Selected rows and options |
| `color.background.neutral` | `#0515240F` | Default (subtle) button fill |

### Semantic colors

| Role | Bold fill | Subtle fill | Text | Border |
|---|---|---|---|---|
| Success | `#5B7F24` | `#EFFFD6` | `#4C6B1F` | `#6A9A23` |
| Warning | `#FBC828` | `#FFF5DB` | `#9E4C00` | `#E06C00` |
| Danger | `#C9372C` | `#FFECEB` | `#AE2E24` | `#E2483D` |
| Information | `#1868DB` | `#E9F2FE` | `#1558BC` | `#357DE8` |
| Discovery | `#964AC0` | `#F8EEFE` | `#803FA5` | `#AF59E1` |

## 3. Typography

**Families:**

- **Charlie Display** and **Charlie Text**: the brand typeface for atlassian.com headings and marketing body copy. Proprietary.
- **Atlassian Sans**: the product typeface in ADS, a tuned version of Inter with a variable weight axis (it uses weight 653 for bold).
- **Atlassian Mono**: code and tabular data.

**Fallbacks:** **Inter** for both Charlie and Atlassian Sans, **JetBrains Mono** for code.

```css
--ds-font-family-body: "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif;
--ds-font-family-brand-heading: "Charlie Display", ui-sans-serif, -apple-system, sans-serif;
--ds-font-family-code: "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", monospace;
```

### Product scale (ADS tokens)

| Token | Size / line height | Weight |
|---|---|---|
| `font.heading.xxlarge` | 32 / 36px | 653 |
| `font.heading.xlarge` | 28 / 32px | 653 |
| `font.heading.large` | 24 / 28px | 653 |
| `font.heading.medium` | 20 / 24px | 653 |
| `font.heading.small` | 16 / 20px | 653 |
| `font.body.large` | 16 / 24px | 400 |
| `font.body` | 14 / 20px | 400 |
| `font.body.small` | 12 / 16px | 400 |

### Marketing scale (approximate)

Hero 48-64px Charlie Display 700, section heads 32-40px, lead 18-20px Charlie Text 400, body 16px.

### Rules

- Sentence case for everything, including buttons and headings.
- Product body is 14px; do not bump it to 16px inside app chrome.
- Bold is 653 in Atlassian Sans; use 600 or 700 with Inter.

## 4. Logo & Brand Mark

The logo pairs the blue **A mark** (two rounded triangles, the larger leaning right over a smaller one) with the **ATLASSIAN** wordmark in wide capitals, both in `#1868DB` on white.

- **Color versions:** blue on white (primary), white on `#1868DB` or `#1C2B42`, single-color navy for print.
- **App tile:** white A mark on a blue rounded square, which also serves as the favicon and avatar.
- **Clear space:** the width of the small triangle on every side (approximate).
- **Minimum size:** mark 16px tall; full lockup about 100px wide.

Misuse:

- Do not use the old gradient A or the pre-2025 `#0052CC` blue in new work.
- Do not recolor the logo with collection or accent colors.
- Do not set the wordmark in lowercase or in Charlie.

## 5. Components

### Buttons (ADS)

| Appearance | Background | Text | Hover | Pressed |
|---|---|---|---|---|
| Primary | `#1868DB` | `#FFFFFF` | `#1558BC` | `#144794` |
| Default | `#0515240F` | `#505258` | `#0B120E24` | `#080F214A` |
| Subtle | transparent | `#505258` | `#0515240F` | `#0B120E24` |
| Warning | `#FBC828` | `#292A2E` | `#FCA700` | `#F68909` |
| Danger | `#C9372C` | `#FFFFFF` | `#AE2E24` | `#872821` |
| Discovery | `#964AC0` | `#FFFFFF` | `#803FA5` | `#673286` |

Size: 32px tall, padding 0 12px, 14px/500 text, radius 4-6px (`radius.small`/`medium`). Compact: 24px tall.

```css
.ads-button {
  height: 32px; padding: 0 12px;
  font: 500 14px/20px var(--ds-font-family-body);
  border: 0; border-radius: 6px;
  background: var(--ds-background-brand-bold, #1868DB);
  color: var(--ds-text-inverse, #FFFFFF);
  transition: background-color .2s ease-in-out;
}
.ads-button:hover { background: #1558BC; }
.ads-button:focus-visible { outline: 2px solid #4688EC; outline-offset: 2px; }
```

### Marketing buttons

atlassian.com CTAs ("Get it free", "Get started with Jira") are larger: 40-48px tall, 16px/500, padding 0 20-24px, `#1868DB` fill, radius 6-8px (approximate). Secondary CTAs are a blue text link with a right arrow, or a 1px `#1868DB` outline.

### Text fields

- 40px tall (32px compact), white fill `#FFFFFF`, 1px `#8C8F97` border, radius 4-6px.
- Hover fill `#F8F8F8`. Focus: inset `0 0 0 1px #4688EC` plus border `#4688EC`.
- Invalid: `inset 0 0 0 1px #E2483D`, helper text `#AE2E24` 12px.
- Label 12px/653 `#505258` above the field.

### Cards and tiles

- Product cards: white, 1px `#0B120E24` border or raised shadow `0 1px 1px #1E1F2140, 0 0 1px #1E1F214F`, radius 8-12px, 24px padding.
- Marketing feature cards: radius 12-20px, collection-colored top area with illustration, title 20-24px Charlie Display.

### Navigation

- **atlassian.com:** white header, logo left, menus "Products", "For teams", "Support", plus "Enterprise", "Sign in" and a blue "Get it free" or "Get started" button. Product menus show app tiles with one-line descriptions.
- **Product (Jira, Confluence):** 48-56px top bar with the app switcher (9-dot grid), product logo, global search, "+ Create" primary button, notifications, help and avatar. A collapsible left sidebar lists spaces, projects and starred items with 14px rows, 32px tall, 4px radius hover `#0515240F`.

### Lozenges (status)

Uppercase 11-12px/653, padding 0 4px, radius 3-4px. Default `#DDDEE1` / `#292A2E`; In progress `#CFE1FD` / `#123263`; Done `#BAF3DB`-style green subtle / `#164B35`; Removed red subtle / `#5D1F1A` (approximate fills).

### Tables and lists

Dynamic tables: 14px rows, 40px tall, header 12px/653 `#505258`, 2px bottom border on the header row `#0B120E24`, hover row `#F0F1F2`, selected `#E9F2FE`.

### Modals

White, radius 12px (`radius.xlarge`), `elevation.shadow.overlay`, widths 400/600/800px. Header 20px/653, footer right-aligned buttons with 8px gap, scrim `#050C1F75` (approximate).

## 6. Layout & Spacing

- **ADS spacing tokens:** `space.025` 2px, `050` 4px, `075` 6px, `100` 8px, `150` 12px, `200` 16px, `250` 20px, `300` 24px, `400` 32px, `500` 40px, `600` 48px, `800` 64px, `1000` 80px.
- **Marketing widths:** content around 1152px (72pc) to 1200px; text columns 640-720px.
- **Breakpoints:** 640, 768, 1024, 1280, 1440px.
- **Product layout:** top nav plus left sidebar (240-320px), main content fluid, right panels 360-480px.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| `elevation.shadow.raised` | `0 1px 1px #1E1F2140, 0 0 1px #1E1F214F` |
| `elevation.shadow.overflow` | `0 0 8px #1E1F2129, 0 0 1px #1E1F211F` |
| `elevation.shadow.overlay` | `0 8px 12px #1E1F2126, 0 0 1px #1E1F214F` |

Motion:

- Button and surface color changes: 200ms `ease-in-out`.
- Marketing reveals: fade-up 400ms with a soft cubic-bezier ease.

## 8. Iconography & Imagery

- **Icons:** ADS icons on a 16px and 24px grid, 1.5px stroke, rounded joins, color from `color.icon` (`#505258`) or `color.icon.brand` (`#1868DB`).
- **App tiles:** rounded-square product tiles with white glyphs, used as a family.
- **Illustration:** flat, colorful scenes of shapes, people and product fragments in collection colors, with a light, humorous tone.

## 9. Voice & Microcopy

Friendly, clear and team-focused. Atlassian talks about teamwork, knowledge and AI agents (Rovo) as helpers for teams.

- Sentence case for all UI.
- Second person, active voice: "Create your first project".
- Buttons start with a verb: "Get it free", "Get started with Jira", "Sign in", "Create", "Invite teammates".

Sample strings:

- Hero: "Discover the power of knowing"
- Section: "AI platform", "Featured apps", "Latest news and resources"
- Product: "Create issue", "Move to Done", "Assign to me", "Share page"
- Status lozenges: "TO DO", "IN PROGRESS", "DONE"

## 10. Do's and Don'ts

**Do**

- Use ADS tokens (`--ds-*`) instead of raw hex values in product UI.
- Keep product text 14px and headings 653 weight.
- Use `#1868DB` for one primary action per view.
- Use lozenges and subtle backgrounds for status, not bright fills.
- Use collection colors and illustration only on marketing pages.

**Don't**

- Don't use the old `#0052CC` blue or the gradient logo.
- Don't put Charlie Display inside product UI.
- Don't use pill buttons in product; ADS buttons are 4-6px radius.
- Don't add heavy shadows; use raised and overlay tokens.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Atlassian. For product screens follow the Atlassian Design System: white surfaces, sunken areas `#F8F8F8`, text `#292A2E`, subtle text `#505258`, subtlest `#6B6E76`, translucent borders `#0B120E24`, inputs bordered `#8C8F97`. Font: `"Atlassian Sans", Inter, ui-sans-serif, system-ui, sans-serif`; body 14px/20px, headings weight 653 (use 600 with Inter) at 32/24/20/16px. Primary button `#1868DB` with white text, hover `#1558BC`, 32px tall, 6px radius; default buttons are a translucent grey `#0515240F`. Focus rings `#4688EC`. Use lozenges for status (uppercase 11px/653, 4px radius) and `#E9F2FE` for selected rows. Shadows: raised `0 1px 1px #1E1F2140, 0 0 1px #1E1F214F`, overlay `0 8px 12px #1E1F2126, 0 0 1px #1E1F214F`. Layout: top nav with app switcher and a 240-320px left sidebar. For marketing pages use Charlie Display-style bold headlines (Inter 700 fallback), larger 40-48px blue CTAs, colorful flat illustrations and product tiles. Sentence case everywhere.

```css
:root {
  --brand-blue: #1868DB;
  --brand-blue-hover: #1558BC;
  --brand-blue-pressed: #144794;
  --brand-navy: #1C2B42;
  --brand-ink: #101214;
  --brand-text: #292A2E;
  --brand-text-subtle: #505258;
  --brand-text-subtlest: #6B6E76;
  --brand-surface: #FFFFFF;
  --brand-surface-sunken: #F8F8F8;
  --brand-border: #0B120E24;
  --brand-border-input: #8C8F97;
  --brand-focus: #4688EC;
  --brand-selected: #E9F2FE;
  --brand-success: #5B7F24;
  --brand-warning: #FBC828;
  --brand-danger: #C9372C;
  --brand-discovery: #964AC0;
  --brand-font: "Atlassian Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --brand-font-heading: "Charlie Display", Inter, ui-sans-serif, sans-serif;
  --brand-font-mono: "Atlassian Mono", "JetBrains Mono", ui-monospace, Menlo, monospace;
  --brand-weight-bold: 653;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 8px;
  --brand-radius-xl: 12px;
  --brand-shadow-raised: 0 1px 1px #1E1F2140, 0 0 1px #1E1F214F;
  --brand-shadow-overlay: 0 8px 12px #1E1F2126, 0 0 1px #1E1F214F;
  --brand-duration: 200ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Atlassian.

---
name: Microsoft
slug: microsoft
url: https://microsoft.com
category: Productivity
tagline: "Fluent 2: Segoe UI, communication blue, soft layered surfaces and the four-square mark."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Logo Red
    hex: "#F25022"
    role: Top-left logo square
  - name: Logo Green
    hex: "#7FBA00"
    role: Top-right logo square
  - name: Logo Blue
    hex: "#00A4EF"
    role: Bottom-left logo square
  - name: Logo Yellow
    hex: "#FFB900"
    role: Bottom-right logo square
  - name: Communication Blue
    hex: "#0F6CBD"
    role: Fluent brand background, primary buttons, links, selection
  - name: Wordmark Gray
    hex: "#737373"
    role: Microsoft wordmark
  - name: Brand Hover
    hex: "#115EA3"
    role: Primary button hover
  - name: Brand Pressed
    hex: "#0C3B5E"
    role: Primary button pressed
  - name: Foreground 1
    hex: "#242424"
    role: Primary text
  - name: Foreground 2
    hex: "#424242"
    role: Secondary text
  - name: Foreground 3
    hex: "#616161"
    role: Tertiary text, accessible strokes
  - name: Background 1
    hex: "#FFFFFF"
    role: Cards, page
  - name: Background 2
    hex: "#FAFAFA"
    role: Subtle surfaces
  - name: Background 3
    hex: "#F5F5F5"
    role: App canvas behind cards
  - name: Stroke 1
    hex: "#D1D1D1"
    role: Control borders
  - name: Danger
    hex: "#C50F1F"
    role: Errors and destructive actions
fonts:
  display:
    family: "Segoe UI Variable Display"
    fallback: "Open Sans"
    weights: [600, 700]
  body:
    family: "Segoe UI Variable Text"
    fallback: "Open Sans"
    weights: [400, 600]
  mono:
    family: "Cascadia Mono / Consolas"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 68, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Large Title, size: 40, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Title 1, size: 32, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Title 3, size: 24, weight: 600, lineHeight: 1.33, tracking: "0" }
  - { role: Subtitle 1, size: 20, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Body 1, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption 1, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Caption 2, size: 10, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 10000 }
spacing: [2, 4, 6, 8, 10, 12, 16, 20, 24, 32]
shadows:
  - { name: Shadow 2, value: "0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)" }
  - { name: Shadow 4, value: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)" }
  - { name: Shadow 16, value: "0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)" }
  - { name: Shadow 64, value: "0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14)" }
preview:
  bg: "#F5F5F5"
  surface: "#FFFFFF"
  text: "#242424"
  muted: "#616161"
  border: "#D1D1D1"
  accent: "#0F6CBD"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Microsoft

## 1. Visual Theme & Atmosphere

Microsoft's corporate identity is simple: the four colored squares and the grey "Microsoft" wordmark set in Segoe. Its product language is **Fluent 2**, the design system behind Microsoft 365 (Teams, Outlook, Word, Excel), Windows 11 apps and Copilot. This file focuses on Fluent 2 because that is what people mean when they want something to "feel like Microsoft".

Fluent 2 is calm, layered and practical. Light grey app canvases (`#F5F5F5`) hold white cards with soft two-part shadows. Controls are small (32px default), corners are gently rounded (4px controls, 8px cards and dialogs), and one brand blue (`#0F6CBD`, "communication blue") marks the primary action, selection and focus. Type is Segoe UI Variable at modest sizes, so dense enterprise screens stay readable.

What makes it recognisable:

- **Segoe UI.** Humanist, open, slightly wide. Semibold (600) for titles, Regular (400) for everything else.
- **Two-part shadows.** Every elevation level combines a tight ambient shadow (`0 0 2px` at 12%) with a directional key shadow (`0 Ypx 2Ypx` at 14%).
- **Neutral layering.** Background 1 to 6 steps in light grey define structure more than borders do.
- **Subtle accents.** Selected list items get a 3px rounded blue bar on the left, tabs get a blue underline, and focus is a crisp 2px black or white stroke.
- **Fluent icons.** A single rounded outline icon family, with filled variants for selected states.
- **Windows materials.** Mica and Acrylic: translucent, blurred backgrounds that pick up the desktop wallpaper.

Mood words: approachable, productive, calm, familiar, inclusive.

## 2. Color Palette & Roles

Fluent values come from the published `@fluentui/tokens` web light theme (well documented on fluent2.microsoft.design and in the open-source repo). microsoft.com blocked automated access today, so marketing-site values are approximate.

### Brand (communication blue ramp)

| Token | Hex | Role |
|---|---|---|
| `colorBrandBackground` | `#0F6CBD` | Primary button, selected toggle, checkbox fill |
| `colorBrandBackgroundHover` | `#115EA3` | Hover |
| `colorBrandBackgroundPressed` | `#0C3B5E` | Pressed |
| `colorBrandBackgroundSelected` | `#0F548C` | Selected |
| `colorBrandForeground1` | `#0F6CBD` | Brand text, selected tab text |
| `colorBrandForegroundLink` | `#115EA3` | Links (`#0F548C` hover) |
| `colorBrandBackground2` | `#EBF3FC` | Subtle brand fill, selected list row |
| `colorBrandStroke1` | `#0F6CBD` | Focused input underline, selected border |
| Brand 160 | `#CFE4FA` | Tinted backgrounds |

### Neutrals

| Token | Hex | Role |
|---|---|---|
| Foreground 1 | `#242424` | Primary text and icons |
| Foreground 2 | `#424242` | Secondary text |
| Foreground 3 | `#616161` | Tertiary text |
| Foreground 4 | `#707070` | Placeholder (approx.) |
| Foreground disabled | `#BDBDBD` | Disabled text |
| Background 1 | `#FFFFFF` | Cards, controls |
| Background 1 hover | `#F5F5F5` | Hover on white |
| Background 1 pressed | `#E0E0E0` | Pressed on white |
| Background 2 | `#FAFAFA` | Subtle surfaces |
| Background 3 | `#F5F5F5` | App canvas |
| Background 4 | `#F0F0F0` | Deeper canvas |
| Background 5 | `#EBEBEB` | Rails, headers |
| Background 6 | `#E6E6E6` | Darkest neutral surface |
| Stroke 1 | `#D1D1D1` | Control borders |
| Stroke 2 | `#E0E0E0` | Card and divider borders |
| Stroke accessible | `#616161` | Input bottom border, high-contrast edges |

### Status

| State | Foreground | Background | Border |
|---|---|---|---|
| Danger | `#B10E1C` | `#FDF3F4` | `#EEACB2` |
| Success | `#0E700E` | `#F1FAF1` | `#9FD89F` |
| Warning | `#BC4B09` | `#FFF9F5` | `#FDCFB4` |
| Info / brand | `#0F6CBD` | `#EBF3FC` | `#B4D6FA` |

Solid danger fill for badges and destructive buttons: `#C50F1F`. Presence colors: available `#13A10E`, busy `#C50F1F`, away `#EAA300`, offline `#8A8A8A` (approximate).

### Dark theme

Fluent web dark: canvas `#1F1F1F` (Background 3), cards `#292929` (Background 1), Background 2 `#1F1F1F`, foreground `#FFFFFF` and `#D6D6D6`, stroke `#666666`, brand background `#115EA3`, brand foreground `#479EF5`.

### App accent colors

Each Microsoft 365 app tints the brand ramp: Teams purple `#5B5FC7`, Outlook blue `#0F6CBD`, Word blue `#185ABD`, Excel green `#107C41`, PowerPoint orange-red `#C43E1C`, OneNote purple `#7719AA` (approximate).

## 3. Typography

**Family:** Segoe UI Variable on Windows 11 (optical sizes "Display", "Text" and "Small"), Segoe UI on older Windows and the web. On Apple platforms Fluent uses SF Pro; on Android, Roboto.

**Licensing:** Segoe UI ships with Windows and cannot be redistributed. On the web, use the stack below. **Open Sans** (Google Fonts) is the closest free humanist substitute; Noto Sans also works.

```css
font-family: "Segoe UI Variable", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
```

### Type ramp (Fluent 2 web)

| Style | Size | Line height | Weight |
|---|---|---|---|
| Display | 68px | 92px | 600 |
| Large Title | 40px | 52px | 600 |
| Title 1 | 32px | 40px | 600 |
| Title 2 | 28px | 36px | 600 |
| Title 3 | 24px | 32px | 600 |
| Subtitle 1 | 20px | 28px | 600 |
| Subtitle 2 | 16px | 22px | 600 |
| Body 2 | 16px | 22px | 400 |
| Body 1 | 14px | 20px | 400 |
| Body 1 Strong | 14px | 20px | 600 |
| Caption 1 | 12px | 16px | 400 |
| Caption 2 | 10px | 14px | 400 |

Weights available as tokens: Regular 400, Medium 500, Semibold 600, Bold 700. Bold is rarely used in UI.

### Rules

- Sentence case for everything: buttons, menu items, headings, tabs ("New meeting", not "New Meeting").
- Body 1 (14px) is the default UI size. Do not go larger for dense screens.
- Use Semibold for titles and emphasis, never italic for emphasis.
- Numbers use the default proportional figures except in tables, where tabular figures align columns.

## 4. Logo & Brand Mark

The Microsoft logo (2012) is a **2x2 grid of squares** (orange-red `#F25022`, green `#7FBA00`, blue `#00A4EF`, yellow `#FFB900`) beside the "Microsoft" wordmark in Segoe semibold, grey `#737373`.

- **Construction:** four equal squares with a gap about one ninth of a square's width.
- **Symbol alone:** used for favicons, social avatars and small spaces.
- **Clear space:** at least the width of one square around the lockup.
- **Minimum size:** symbol about 16px; full lockup about 70px wide on screen.
- **Color versions:** full color on white or light grey (primary); full color with white wordmark on dark; all-white or all-black when color is not possible.

Misuse:

- Do not rearrange, rotate or recolor the squares.
- Do not change the gap or round the corners.
- Do not reset the wordmark in another font.
- Do not use the old wavy Windows flag or the 1987 "Pac-Man" logo.

Product icons (Teams, Word, Excel, Outlook) are separate, colorful, layered 3D-ish marks and should not be used as the company logo.

## 5. Components

### Buttons

Fluent sizes: small 24px, medium 32px (default), large 40px. Radius 4px (medium). Text Body 1 Strong (14px/600). Padding 5px 12px for medium. Min width 96px.

| Appearance | Background | Text | Border | Hover | Pressed |
|---|---|---|---|---|---|
| Primary | `#0F6CBD` | `#FFFFFF` | none | `#115EA3` | `#0C3B5E` |
| Secondary (default) | `#FFFFFF` | `#242424` | 1px `#D1D1D1` | bg `#F5F5F5`, border `#C7C7C7` | bg `#E0E0E0`, border `#B3B3B3` |
| Outline | transparent | `#242424` | 1px `#D1D1D1` | border `#C7C7C7` | |
| Subtle | transparent | `#242424` | none | `#F5F5F5` | `#E0E0E0` |
| Transparent | transparent | `#424242` | none | text `#0F6CBD` | |

Disabled: background `#F0F0F0`, text `#BDBDBD`, border `#E0E0E0`. Focus: a 2px `#000000` inner stroke plus 1px white, inset (focus is never a glow).

```css
.btn-primary {
  font: 600 14px/20px var(--brand-font);
  background: #0F6CBD; color: #fff;
  border: 1px solid transparent; border-radius: 4px;
  padding: 5px 12px; min-height: 32px; min-width: 96px;
  transition: background-color 100ms cubic-bezier(0.33,0,0.67,1);
}
.btn-primary:hover { background: #115EA3; }
.btn-primary:active { background: #0C3B5E; }
.btn-primary:focus-visible { outline: 2px solid #000; outline-offset: -2px; box-shadow: inset 0 0 0 3px #fff; }
```

### Inputs

- 32px tall, 4px radius, white fill, 1px `#D1D1D1` border with a bottom border in `#616161` (stroke accessible).
- Focus: the bottom edge animates a 2px `#0F6CBD` underline from the center outwards.
- Filled-darker and filled-lighter variants for use on white or grey surfaces.
- Label above: Body 1 Strong or Body 1, 4px gap. Field validation message below in Caption 1 with a status icon.

### Cards

- White, 8px radius (`borderRadiusXLarge`), shadow 4 at rest, shadow 8 on hover, 12px padding.
- Selectable cards gain a 1px brand border and brand-tinted background when selected.

### Navigation

- **App header:** 48px, often brand-tinted in Microsoft 365 web apps (app color bar), with a waffle (app launcher) icon at the far left, app name, a centered search box and profile avatar on the right.
- **Nav rail / drawer:** 280px drawer or 68px icon rail (Teams). Selected item has a 3px rounded brand indicator bar on the left and Background 1 Selected fill.
- **microsoft.com:** white header, four-square logo left, product links ("Microsoft 365", "Teams", "Copilot", "Windows", "Surface", "Xbox"), search and "Sign in" right; CTA buttons in blue `#0067B8` with white text (approximate).

### Tabs (TabList)

Text Body 1, 44px tall, inactive `#424242`, selected `#242424` Semibold with a 3px rounded `#0F6CBD` indicator under the label that slides between tabs.

### Badges, avatars, persona

- Badge: pill or rounded, 20px tall, Caption 1 Strong, filled brand, danger, success or warning.
- Avatar: circle (square with 4px radius for groups and bots), initials on colored backgrounds from a 30-color palette, presence badge bottom right.
- Persona: avatar plus name (Body 1 Strong) and secondary line (Caption 1, Foreground 2).

### Dialog

White, 8px radius, shadow 64, 24px padding, max width 600px, title Subtitle 1 (20px/600), actions bottom right with 8px gaps (Fluent's own examples put the secondary "Close" before the primary action). Scrim `rgba(0,0,0,0.4)`.

### Menus, tooltips, toasts

- Menu: white, 4-8px radius, shadow 16, items 32px with 20px icons and 14px text, hover Background 1 Hover.
- Tooltip: white with shadow 8 (or inverted `#242424`), 4px radius, Caption 1, appears after 250ms.
- Toast: white card, 4px radius, shadow 8, status icon left, title Body 1 Strong, bottom right on desktop.

### Data grid

Rows 44px (medium) or 32px (small), header Body 1 Strong, 1px `#E0E0E0` row dividers, hover Background 1 Hover, selection checkbox column, sortable headers with a chevron.

## 6. Layout & Spacing

- **Spacing tokens:** none 0, XXS 2, XS 4, S-nudge 6, S 8, M-nudge 10, M 12, L 16, XL 20, XXL 24, XXXL 32px.
- **Grid:** 4px base unit; layout uses 8px multiples. Responsive web grid with 12 columns.
- **Breakpoints (Fluent web guidance, approximate):** small 320-479, medium 480-639, large 640-1023, x-large 1024-1365, xx-large 1366-1919, xxx-large 1920+.
- **Gutters:** 16px on small screens, 24px on large, 32px+ on xx-large.
- **Density:** medium is default; "small" density for data-heavy screens reduces controls to 24px.

## 7. Depth, Elevation & Motion

Fluent shadows always pair an ambient and a key shadow:

| Token | Value | Use |
|---|---|---|
| shadow2 | `0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)` | Resting cards, list items |
| shadow4 | `0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)` | Cards, grid items |
| shadow8 | `0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)` | Hover cards, command bars |
| shadow16 | `0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)` | Menus, callouts |
| shadow28 | `0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.14)` | Panels, drawers |
| shadow64 | `0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14)` | Dialogs |

Dark theme uses the same offsets at 24% and 28% alpha.

**Materials (Windows):** Mica (wallpaper-tinted, opaque-ish base layer for windows) and Acrylic (frosted, blurred, for flyouts and menus). On the web, approximate Acrylic with `background: rgba(255,255,255,0.7); backdrop-filter: blur(30px) saturate(125%)`.

**Motion durations:** ultraFast 50ms, faster 100ms, fast 150ms, normal 200ms, gentle 250ms, slow 300ms, slower 400ms, ultraSlow 500ms.

**Curves:** decelerateMid `cubic-bezier(0,0,0,1)` for entering, accelerateMid `cubic-bezier(1,0,1,1)` for exiting, easyEase `cubic-bezier(0.33,0,0.67,1)` for state changes, decelerateMax `cubic-bezier(0.1,0.9,0.2,1)` for big panels.

## 8. Iconography & Imagery

- **Icons:** Fluent UI System Icons, sizes 16, 20, 24, 28, 32, 48px. Regular (outline, about 1.5px strokes with round joins) for rest, Filled for selected or pressed. Single color Foreground 1 or brand. 20px is the default in web apps.
- **Product icons:** Microsoft 365 app icons are colorful, layered and softly 3D; use them only to represent those apps.
- **Illustration:** soft 3D and flat illustrations with rounded forms, warm lighting and diverse people; gradients are gentle.
- **Photography:** real people at work and home, natural light, devices in use, inclusive casting.

## 9. Voice & Microcopy

Warm, crisp and helpful. Write like a person, get to the point, use contractions, sentence case.

- Buttons: "Save", "Cancel", "New meeting", "Share", "Sign in", "Get started", "Learn more"
- Empty states: "No files yet. Upload a file or create a new one."
- Errors: "Something went wrong. Try again in a few minutes."
- Copilot: "How can I help?", "Ask me anything"
- Avoid "please" in instructions, avoid exclamation marks, avoid jargon.

## 10. Do's and Don'ts

**Do**

- Use Segoe UI (Variable) and the Fluent type ramp, 14px body by default.
- Keep one brand blue `#0F6CBD` for primary actions, selection and links.
- Build depth with neutral backgrounds plus the two-part Fluent shadows.
- Use 4px control radius and 8px card and dialog radius.
- Show selection with a 3px blue indicator bar and focus with a 2px black stroke.
- Use Fluent System Icons, outline at rest and filled when selected.

**Don't**

- Don't use the logo colors as UI colors.
- Don't use glowing or colored focus rings.
- Don't use pill-shaped buttons (except for small toggles or badges) or large radii.
- Don't use bold 700 headings; Semibold is the standard.
- Don't title-case buttons and menus.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Microsoft Fluent 2. App canvas `#F5F5F5`, white cards with 8px radius and shadow `0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)`. Font: `"Segoe UI Variable", "Segoe UI", -apple-system, Roboto, sans-serif`; body 14px/20px at 400, titles at 600 (Subtitle 1 20px, Title 3 24px, Large Title 40px). Text `#242424`, secondary `#424242`, tertiary `#616161`, borders `#D1D1D1` and `#E0E0E0`. Primary buttons: `#0F6CBD`, white 14px/600 text, 4px radius, 32px tall, 12px horizontal padding, hover `#115EA3`, pressed `#0C3B5E`. Secondary buttons are white with a 1px `#D1D1D1` border. Inputs are 32px with a `#616161` bottom border that becomes a 2px blue underline on focus. Tabs have a 3px rounded blue indicator; nav selection uses a 3px blue bar on the left. Focus is a 2px black inset stroke, not a glow. Menus use shadow `0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)`, dialogs `0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14)`. Motion: 200ms `cubic-bezier(0.33,0,0.67,1)`, entering with `cubic-bezier(0,0,0,1)`. Use Fluent System Icons at 20px. Sentence case everywhere.

```css
:root {
  --brand-logo-red: #F25022;
  --brand-logo-green: #7FBA00;
  --brand-logo-blue: #00A4EF;
  --brand-logo-yellow: #FFB900;
  --brand-wordmark: #737373;
  --brand-primary: #0F6CBD;
  --brand-primary-hover: #115EA3;
  --brand-primary-pressed: #0C3B5E;
  --brand-primary-selected: #0F548C;
  --brand-primary-subtle: #EBF3FC;
  --brand-link: #115EA3;
  --brand-fg-1: #242424;
  --brand-fg-2: #424242;
  --brand-fg-3: #616161;
  --brand-fg-disabled: #BDBDBD;
  --brand-bg-1: #FFFFFF;
  --brand-bg-1-hover: #F5F5F5;
  --brand-bg-1-pressed: #E0E0E0;
  --brand-bg-2: #FAFAFA;
  --brand-bg-3: #F5F5F5;
  --brand-bg-4: #F0F0F0;
  --brand-stroke-1: #D1D1D1;
  --brand-stroke-2: #E0E0E0;
  --brand-stroke-accessible: #616161;
  --brand-danger: #C50F1F;
  --brand-danger-fg: #B10E1C;
  --brand-success: #0E700E;
  --brand-warning: #BC4B09;
  --brand-font: "Segoe UI Variable", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  --brand-font-mono: "Cascadia Mono", Consolas, "Courier New", monospace;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 6px;
  --brand-radius-xl: 8px;
  --brand-radius-circular: 10000px;
  --brand-shadow-2: 0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14);
  --brand-shadow-4: 0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14);
  --brand-shadow-8: 0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14);
  --brand-shadow-16: 0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14);
  --brand-shadow-28: 0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.14);
  --brand-shadow-64: 0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14);
  --brand-ease-easy: cubic-bezier(0.33,0,0.67,1);
  --brand-ease-decelerate: cubic-bezier(0,0,0,1);
  --brand-ease-accelerate: cubic-bezier(1,0,1,1);
  --brand-duration-fast: 150ms;
  --brand-duration: 200ms;
  --brand-duration-slow: 300ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Microsoft.

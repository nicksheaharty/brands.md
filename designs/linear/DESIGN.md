---
name: Linear
slug: linear
url: https://linear.app
category: Productivity
tagline: "Near-black, precise and fast: Inter at odd weights, hairline borders, indigo accents."
updated: 2026-11-16
logoBackground: "#08090A"
theme: dark
colors:
  - name: Background
    hex: "#08090A"
    role: Page background (marketing and app dark theme)
  - name: Panel
    hex: "#0F1011"
    role: Raised panels, sidebar, cards
  - name: Surface 2
    hex: "#141516"
    role: Inputs, nested cards, hover rows
  - name: Surface 3
    hex: "#191A1B"
    role: Menus, popovers, selected rows
  - name: Text Primary
    hex: "#F7F8F8"
    role: Headings and primary text
  - name: Text Secondary
    hex: "#D0D6E0"
    role: Body copy, secondary labels
  - name: Text Tertiary
    hex: "#8A8F98"
    role: Muted text, metadata, placeholders
  - name: Text Quaternary
    hex: "#62666D"
    role: Disabled text, timestamps, subtle icons
  - name: Border
    hex: "#23252A"
    role: Hairline borders and dividers
  - name: Border Strong
    hex: "#34343A"
    role: Input borders, emphasized dividers
  - name: Indigo
    hex: "#5E6AD2"
    role: Brand color, primary buttons, focus ring, selection
  - name: Accent
    hex: "#7170FF"
    role: Links and accent highlights on dark
  - name: Accent Hover
    hex: "#828FFF"
    role: Hovered links and accents
  - name: Green
    hex: "#27A644"
    role: Done status, success
  - name: Orange
    hex: "#FC7840"
    role: Urgent priority, warnings
  - name: Red
    hex: "#EB5757"
    role: Errors, canceled, destructive actions
fonts:
  display:
    family: "Inter Variable"
    fallback: "Inter"
    weights: [510, 590]
  body:
    family: "Inter Variable"
    fallback: "Inter"
    weights: [400, 510]
  mono:
    family: "Berkeley Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 64, weight: 590, lineHeight: 1.06, tracking: "-0.022em" }
  - { role: Display, size: 48, weight: 590, lineHeight: 1.0, tracking: "-0.022em" }
  - { role: Heading, size: 32, weight: 590, lineHeight: 1.125, tracking: "-0.022em" }
  - { role: Title, size: 20, weight: 590, lineHeight: 1.33, tracking: "-0.012em" }
  - { role: Large, size: 17, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.6, tracking: "-0.011em" }
  - { role: Small, size: 13, weight: 510, lineHeight: 1.5, tracking: "-0.01em" }
  - { role: Micro, size: 12, weight: 510, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Low, value: "0 2px 4px rgba(0,0,0,0.1)" }
  - { name: Medium, value: "0 4px 24px rgba(0,0,0,0.2)" }
  - { name: High, value: "0 7px 32px rgba(0,0,0,0.35)" }
  - { name: Edge highlight, value: "inset 0 1px 0 rgba(255,255,255,0.08)" }
preview:
  bg: "#08090A"
  surface: "#0F1011"
  text: "#F7F8F8"
  muted: "#8A8F98"
  border: "#23252A"
  accent: "#5E6AD2"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Linear

## 1. Visual Theme & Atmosphere

Linear looks like a pro tool built by people who care about every pixel. The canvas is almost black (`#08090A`), text is a cool off-white, and layers are separated by hairline borders a shade lighter than the background. Color is rare and meaningful: indigo for the brand and focus, small saturated dots for status and priority.

What makes it recognisable:

- **Dark by default.** The marketing site and the most-screenshotted version of the app are dark. Layers step up in tiny increments: `#08090A` → `#0F1011` → `#141516` → `#191A1B`.
- **Inter at in-between weights.** Linear uses the variable Inter with custom weights 510 (medium) and 590 (semibold), plus `cv01` and `ss03` features (single-storey "a" alternates and rounder digits). Headlines are tight (-0.022em) and short.
- **Hairlines and edge light.** Cards have 1px borders at 5-8% white and a faint top inner highlight, which makes them read as glass panes lit from above.
- **Subtle gradients.** Headings sometimes fade from white to grey, and hero product shots sit under a soft radial glow. Nothing is loud.
- **Keyboard-first, fast.** Command menu (Cmd K), shortcuts shown as small key caps, instant transitions. The UI implies speed.
- **Dense but calm.** Issue lists are 36-40px rows of small text with icons, yet nothing feels crowded because contrast is low and spacing is regular.

Mood words: precise, fast, quiet, engineered, premium.

## 2. Color Palette & Roles

All values below come from the CSS custom properties on linear.app.

### Surfaces (dark)

| Name | Hex | Token | Role |
|---|---|---|---|
| Background | `#08090A` | `--color-bg-level-0` / `--color-bg-primary` | Page |
| Panel | `#0F1011` | `--color-bg-level-1` / `--color-bg-panel` | Sidebar, cards |
| Level 2 | `#141516` | `--color-bg-level-2` | Inputs, nested cards |
| Level 3 | `#191A1B` | `--color-bg-level-3` | Menus, popovers |
| Secondary | `#1C1C1F` | `--color-bg-secondary` | Hovered rows, buttons |
| Tertiary | `#232326` | `--color-bg-tertiary` | Pressed, selected |
| Translucent | `rgba(255,255,255,0.05)` | `--color-bg-translucent` | Overlays on any surface |

### Text

| Name | Hex | Role |
|---|---|---|
| Primary | `#F7F8F8` | Headings, primary text |
| Secondary | `#D0D6E0` | Body text |
| Tertiary | `#8A8F98` | Descriptions, metadata |
| Quaternary | `#62666D` | Disabled, timestamps |

### Borders and lines

| Name | Value | Role |
|---|---|---|
| Border primary | `#23252A` | Default card and divider border |
| Border secondary | `#34343A` | Inputs, emphasized edges |
| Border translucent | `rgba(255,255,255,0.05)` | Hairline on glassy cards |
| Border translucent strong | `rgba(255,255,255,0.08)` | Edge highlight |

### Brand and accents

| Name | Hex | Role |
|---|---|---|
| Indigo (brand) | `#5E6AD2` | Brand bg, primary button, focus ring |
| Accent | `#7170FF` | Links, accent text and icons on dark |
| Accent hover | `#828FFF` | Hovered links |
| Accent tint | `#18182F` | Selected row background, tinted chips |
| Selection | `color-mix(in lch, #5E6AD2, transparent 64%)` | Text and row selection |

### Status colors

| Name | Hex | Use |
|---|---|---|
| Green | `#27A644` | Done, success |
| Blue | `#4EA7FC` | In review, info |
| Yellow | `#F0BF00` | In progress, caution |
| Orange | `#FC7840` | Urgent priority |
| Red | `#EB5757` | Error, canceled, destructive |
| Plan green | `#68CC58` | "Plan" product area |
| Build gold | `#D4B144` | "Build" product area |

### Light mode

The app has a light theme. Values: background `#FFFFFF`, level 1 `#F8F8F8`, level 2 `#F4F4F4`, text primary `#282A30`, secondary `#3C4149`, tertiary `#6F6E77`, border `#E9E8EA`, accent `#5E6AD2`, accent tint `#F1F1FF`. Keep the same structure: hairlines, small radii, sparse color.

## 3. Typography

**Families:**

- **Inter Variable** (served from Linear's CDN, v4.1) with `font-variation-settings: "opsz" auto`, so large sizes pick up Inter's Display optical size automatically. Features `"cv01", "ss03"`.
- **Berkeley Mono** for code, IDs and keyboard hints.
- **Tiempos Headline** as an occasional serif for editorial pages (Method, Readme, customer stories).

**Licensing and fallbacks:** Inter is open source (OFL) and on Google Fonts; load the variable version to get weights 510 and 590. Berkeley Mono is commercial; use **JetBrains Mono**. Tiempos Headline is commercial; use **Newsreader** if you need the serif.

```css
font-family: "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
font-feature-settings: "cv01", "ss03";
font-variation-settings: "opsz" auto;
```

**Weights:** 300 light, 400 normal, 510 medium, 590 semibold, 680 bold. Headings are 590, UI labels are 510, body is 400. Bold 680 is used rarely.

### Scale (from `--title-*` and `--text-*` tokens)

| Token | Size | Line height | Tracking | Weight |
|---|---|---|---|---|
| title-8 | 64px | 1.06 | -0.022em | 590 |
| title-6 | 48px | 1.0 | -0.022em | 590 |
| title-5 | 40px | 1.1 | -0.022em | 590 |
| title-4 | 32px | 1.125 | -0.022em | 590 |
| title-3 | 24px | 1.33 | -0.012em | 590 |
| title-2 | 20px | 1.33 | -0.012em | 590 |
| title-1 | 17px | 1.4 | -0.012em | 590 |
| text-large | 17px | 1.6 | 0 | 400 |
| text-regular | 15px | 1.6 | -0.011em | 400 |
| text-small | 14px | 1.5 | -0.013em | 400 |
| text-mini | 13px | 1.5 | -0.01em | 510 |
| text-micro | 12px | 1.4 | 0 | 510 |

### Rules

- Sentence case for headings and buttons. Product names are capitalized: Linear Insights, Linear Asks.
- Headlines are short and often break into two balanced lines (`text-wrap: balance`).
- Large headings may use a vertical gradient fill from `#F7F8F8` to about 70% opacity.
- In-app text is mostly 13px (mini). Do not go bigger to "make it readable"; increase contrast instead.

## 4. Logo & Brand Mark

The logo is a circle crossed by diagonal stripes on its lower left, cut so the remaining shape looks like a sphere being swept by motion lines. It sits beside a "Linear" wordmark in a tight, medium-weight sans. The file here is the full mark plus wordmark, taken from the linear.app header.

- **Color versions:** off-white `#F7F8F8` on near-black (primary), near-black `#08090A` on white, white on Indigo `#5E6AD2`. The app icon is the mark on an indigo or black rounded square.
- **Clear space:** at least half the mark's diameter on all sides.
- **Minimum size:** mark 16px; lockup 72px wide.

Misuse:

- Do not fill the mark with a gradient or add glow.
- Do not rotate the mark; the stripes always run from lower left toward the center.
- Do not set "Linear" in another typeface next to the mark.

## 5. Components

### Buttons

Heights 24, 32, 40 and 44px. Default corner is 4-6px (`--radius-4` / `--radius-6`); some hero CTAs use the fully rounded variant (`--radius-rounded`). Gap between icon and label 6-8px, icons 16px.

| Variant | Background | Text | Border | Notes |
|---|---|---|---|---|
| Primary | `#5E6AD2` | `#FFFFFF` 510 | none | Top inner highlight `inset 0 1px 0 rgba(255,255,255,0.12)` |
| Invert (marketing) | `#E5E5E6` | `#08090A` 510 | none | Hover `#FFFFFF`; the "Sign up" button in the header |
| Secondary | `#1C1C1F` / `#282A30` | `#F7F8F8` 510 | 1px `#23252A` | Hover `#1F2024` with border `#34343A` |
| Ghost | transparent | `#8A8F98` | none | Hover text `#F7F8F8`, bg `rgba(255,255,255,0.05)` |
| Destructive | `#EB5757` | `#FFFFFF` | none | Only in confirms |

Sizes: 32px tall with 0 12px padding and 13px text (default); 40px with 0 16px and 15px text (marketing); 24px with 0 8px and 12px text (compact toolbars).

States:

- Hover: lighten one surface step, 100ms.
- Focus: `outline: 2px solid #5E6AD2; outline-offset: 2px;`
- Disabled: 40% opacity, no hover.

```css
.btn {
  height: 32px; padding: 0 12px; gap: 6px;
  display: inline-flex; align-items: center;
  font: 510 13px/1 var(--brand-font);
  font-feature-settings: "cv01", "ss03";
  border-radius: 6px;
  transition: background 0.1s, border-color 0.1s, color 0.1s;
}
.btn--primary { background: #5E6AD2; color: #fff; box-shadow: inset 0 1px 0 rgba(255,255,255,0.12); }
.btn--secondary { background: #1C1C1F; color: #F7F8F8; border: 1px solid #23252A; }
.btn--secondary:hover { background: #232326; border-color: #34343A; }
```

### Inputs

- 32px tall (app) or 40px (marketing), background `#141516`, border 1px `#23252A`, radius 6px, text 13-15px `#F7F8F8`, placeholder `#62666D`.
- Focus: border `#5E6AD2` and `0 0 0 3px color-mix(in lch, #5E6AD2, transparent 80%)`.

### Cards and panels

- Background `#0F1011` (or `rgba(255,255,255,0.02)` on marketing), border 1px `rgba(255,255,255,0.08)`, radius 12px (`--card-radius`), padding 24-32px.
- Edge highlight: a 1px top inner light `inset 0 1px 0 rgba(255,255,255,0.08)` or a pseudo-element border with a vertical gradient from 12% to 0% white.
- Marketing feature cards hold small, crisp UI snippets (an issue row, a cycle graph, a command menu) rather than screenshots.

### Navigation

- Marketing header: 64px, sticky, `rgba(11,11,11,0.8)` with `backdrop-filter: blur(20px)` and 1px `rgba(255,255,255,0.08)` bottom border. Logo left; "Product", "Resources", "Customers", "Pricing", "Now", "Contact" in 13-14px/510 `#8A8F98` (hover `#F7F8F8`); right side "Log in" ghost and "Sign up" invert button.
- App sidebar: 220-240px, `#0F1011`, items 28px tall, 13px/510, icon 16px in `#8A8F98`, active item background `#1C1C1F` with text `#F7F8F8`, radius 6px. Section labels 12px/510 `#62666D`.

### Issue row (signature)

```text
[priority icon] ENG-1234  [status circle] Title of the issue ......... [labels] [avatar] Nov 14
```

- Height 36-40px, 13px text, padding 0 16-24px, gap 8-12px.
- Priority icon: three ascending bars (low/med/high), orange `!` square for urgent.
- Status circle: 14px. Backlog dashed grey ring, Todo grey ring, In progress yellow half-filled ring, In review green ring, Done green filled check, Canceled grey filled x.
- Hover: background `#141516`. Selected: `#18182F` with a 2px indigo left edge.

### Command menu (signature)

Centered modal 640px wide, `#191A1B`, radius 12px, shadow High, 1px `rgba(255,255,255,0.08)` border. Search input 48px tall with 16px text, results 40px rows with 16px icons, the active row `#232326`, shortcut hints right-aligned as small key caps.

### Key caps

Inline `kbd` elements: 20px tall, min-width 20px, padding 0 4px, background `#1C1C1F`, border 1px `#34343A`, radius 4px, 11-12px/510 text in `#8A8F98`.

### Tabs and segmented controls

Segmented: `#141516` track, radius 8px, 2px padding; active segment `#232326` with text `#F7F8F8`, inactive `#8A8F98`. Underline tabs on marketing: 2px `#F7F8F8` indicator, 14px/510 text.

### Badges and labels

Labels are pills: 20px tall, radius 9999px, 1px `#23252A` border, 12px/510 text `#D0D6E0`, with a 8px colored dot on the left. "New" badges use accent tint `#18182F` with `#828FFF` text.

### Modals and toasts

Modal: `#0F1011`, radius 12px, shadow High, scrim `rgba(0,0,0,0.85)`. Toast: bottom center or bottom right, `#191A1B`, radius 8px, 13px text, slides in 8px over 250ms.

## 6. Layout & Spacing

- **Base unit:** 4px. Common steps 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Marketing max width:** 1344px plus outer padding (`--homepage-max-width`), text-heavy pages 1024px (`--page-max-width`).
- **Outer padding:** 16px mobile, 28px tablet, 46px desktop. Inner page padding 24px, inset 32px.
- **Grid:** 12 columns desktop, 8 tablet, 4 mobile, 32px gap (`--grid-gap`).
- **Header height:** 64-72px.
- **Section rhythm:** 96-160px between marketing sections; each section starts with a small label, a 40-56px heading and a 17px secondary paragraph.
- **App density:** high. 13px text, 28px sidebar items, 36-40px list rows, 220-240px sidebar.

## 7. Depth, Elevation & Motion

### Elevation

On dark surfaces Linear relies on surface steps and hairline borders more than shadows.

| Token | Dark | Light |
|---|---|---|
| shadow-tiny | none | `0 1px 1px rgba(0,0,0,0.09)` |
| shadow-low | `0 2px 4px rgba(0,0,0,0.1)` | `0 1px 4px -1px rgba(0,0,0,0.09)` |
| shadow-medium | `0 4px 24px rgba(0,0,0,0.2)` | `0 3px 12px rgba(0,0,0,0.09)` |
| shadow-high | `0 7px 32px rgba(0,0,0,0.35)` | `0 7px 24px rgba(0,0,0,0.06)` |

- **Blur:** headers and floating toolbars use `backdrop-filter: blur(20px)` over 80% opaque black.
- **Glow:** hero product visuals sit on a soft radial gradient, for example `radial-gradient(50% 50% at 50% 0%, rgba(94,106,210,0.15), transparent)`.

### Motion

| Token | Value |
|---|---|
| Quick | 100ms (`--speed-quickTransition`) |
| Regular | 250ms (`--speed-regularTransition`) |
| Ease out quart | `cubic-bezier(0.165, 0.84, 0.44, 1)` |
| Ease out expo | `cubic-bezier(0.19, 1, 0.22, 1)` |

- No bounce; respect `prefers-reduced-motion`. Hovers are 100ms or instant. Menus and popovers open in 150-250ms with a 4px rise and fade.
- Marketing sections reveal with staggered fades (words or lines appearing in sequence) and slow, subtle parallax on product shots.

## 8. Iconography & Imagery

- **Icons:** custom 16px set on a tight grid, 1.5px strokes with rounded caps mixed with small filled shapes. Default color `#8A8F98`, active `#F7F8F8`. Status and priority icons are the only colored icons.
- **Product imagery:** high-fidelity app UI rendered at an angle or flat, cropped hard, fading into the background at the edges with a gradient mask. Often shown with a faint perspective tilt and grid lines behind.
- **Illustration:** abstract 3D-ish forms or line diagrams in monochrome greys with a single indigo highlight. Dot-grid and line-grid backgrounds at 3-5% white.
- **Gradients:** soft and dark. Indigo-to-transparent glows, white-to-grey text fills. Never rainbow.

## 9. Voice & Microcopy

Direct, confident and brief. Writes to builders. Strong opinions, few words.

- Sentence case. Short declarative headlines with a period.

Sample strings:

- Hero: "The product development system for teams and agents"
- Sub: "Purpose-built for planning and building products with AI agents."
- Section: "A new species of product tool.", "Built for the future. Available today."
- CTAs: "Start building", "Sign up", "Log in", "Open app", "Contact sales"
- App: "Create new issue", "Assign to…", "Change status", "Add label", "Backlog", "Todo", "In Progress", "Done", "Canceled"
- Empty state: "No issues. Create one with C."

## 10. Do's and Don'ts

**Do**

- Start from `#08090A` and step surfaces up in tiny increments.
- Use Inter Variable with weights 510 and 590 and the `cv01`, `ss03` features.
- Separate everything with 1px borders at 5-8% white.
- Keep color for status, priority and the indigo brand accent.
- Use small text (13px) and dense rows in app UI.
- Show keyboard shortcuts and key caps.
- Use soft radial glows and white-to-grey text gradients sparingly in heroes.

**Don't**

- Don't use pure `#000000` backgrounds with pure `#FFFFFF` text.
- Don't use large radii (over 16px) on UI elements or bubbly pill shapes everywhere.
- Don't use heavy drop shadows or bright, saturated gradients.
- Don't use bold 700+ for headings; 590 is the ceiling in normal use.
- Don't animate with bounce or long durations.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Linear. Dark theme on `#08090A`, with panels at `#0F1011`, inputs at `#141516` and menus at `#191A1B`. Text `#F7F8F8` (primary), `#D0D6E0` (body), `#8A8F98` (muted), `#62666D` (disabled). Borders are 1px `#23252A` or `rgba(255,255,255,0.08)`, with a faint top inner highlight on cards. Font: `"Inter Variable", Inter, -apple-system, sans-serif` with `font-feature-settings: "cv01", "ss03"`; headings weight 590 with -0.022em tracking, labels 510, body 400 at 15px/1.6, app text 13px. Brand accent is indigo `#5E6AD2` for primary buttons and focus rings; links `#7170FF`, hover `#828FFF`. Buttons are 32px tall with 6px radius, secondary buttons `#1C1C1F` with a hairline border; the header CTA is an inverted light button `#E5E5E6`. Cards have 12px radius. Use status colors only for small dots and icons (green `#27A644`, yellow `#F0BF00`, orange `#FC7840`, red `#EB5757`, blue `#4EA7FC`). Sticky header with 20px backdrop blur. Transitions 100-250ms with `cubic-bezier(0.165, 0.84, 0.44, 1)`. Include keyboard shortcut key caps and a Cmd K command menu. Copy is short, direct and in sentence case.

```css
:root {
  --brand-bg: #08090A;
  --brand-panel: #0F1011;
  --brand-surface-2: #141516;
  --brand-surface-3: #191A1B;
  --brand-surface-hover: #1C1C1F;
  --brand-surface-active: #232326;
  --brand-text: #F7F8F8;
  --brand-text-secondary: #D0D6E0;
  --brand-text-tertiary: #8A8F98;
  --brand-text-quaternary: #62666D;
  --brand-border: #23252A;
  --brand-border-strong: #34343A;
  --brand-border-translucent: rgba(255,255,255,0.08);
  --brand-indigo: #5E6AD2;
  --brand-accent: #7170FF;
  --brand-accent-hover: #828FFF;
  --brand-accent-tint: #18182F;
  --brand-green: #27A644;
  --brand-blue: #4EA7FC;
  --brand-yellow: #F0BF00;
  --brand-orange: #FC7840;
  --brand-red: #EB5757;
  --brand-font: "Inter Variable", "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --brand-font-mono: "Berkeley Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
  --brand-font-features: "cv01", "ss03";
  --brand-weight-medium: 510;
  --brand-weight-semibold: 590;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 8px;
  --brand-radius-card: 12px;
  --brand-radius-pill: 9999px;
  --brand-shadow-low: 0 2px 4px rgba(0,0,0,0.1);
  --brand-shadow-medium: 0 4px 24px rgba(0,0,0,0.2);
  --brand-shadow-high: 0 7px 32px rgba(0,0,0,0.35);
  --brand-edge-highlight: inset 0 1px 0 rgba(255,255,255,0.08);
  --brand-speed-quick: 100ms;
  --brand-speed-regular: 250ms;
  --brand-ease: cubic-bezier(0.165, 0.84, 0.44, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Linear.

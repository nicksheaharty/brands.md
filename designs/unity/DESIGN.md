---
name: Unity
slug: unity
url: https://unity.com
category: Developer
tagline: "Black and white engine brand, huge Nohemi headlines, pill buttons and a single royal blue."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, headlines, top bar, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Unity Blue
    hex: "#3358D4"
    role: Primary buttons, links, info states
  - name: Blue Hover
    hex: "#2B4FCA"
    role: Primary hover
  - name: Gray 50
    hex: "#F5F5F5"
    role: Secondary buttons, light surfaces
  - name: Gray 800
    hex: "#262626"
    role: Dark cards and secondary buttons on dark
  - name: Gray 500
    hex: "#727272"
    role: Secondary text
  - name: Gray 200
    hex: "#E6E6E6"
    role: Borders, dividers, pressed secondary
  - name: Gray 400
    hex: "#A6A6A6"
    role: Muted text on dark
  - name: Blue Pressed
    hex: "#2745A7"
    role: Primary pressed
  - name: Focus Blue
    hex: "#238CEC"
    role: Focus ring
  - name: Red
    hex: "#FF0033"
    role: Brand red accent, alerts
  - name: Success
    hex: "#16A34A"
    role: Success states
  - name: Info Wash
    hex: "#E9F5FE"
    role: Info banners, light blue panels
fonts:
  display:
    family: "Nohemi"
    fallback: "Sora"
    weights: [500]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 120, weight: 500, lineHeight: 0.96, tracking: "0" }
  - { role: Display, size: 96, weight: 500, lineHeight: 0.96, tracking: "0" }
  - { role: Heading XL, size: 72, weight: 500, lineHeight: 1.0, tracking: "0" }
  - { role: Heading L, size: 48, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Heading M, size: 36, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Heading XS, size: 20, weight: 500, lineHeight: 1.2, tracking: "0.02em" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.78, tracking: "0" }
  - { role: Button, size: 14, weight: 600, lineHeight: 1.0, tracking: "-0.01rem" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Primary Button, value: "inset 0 1px rgba(255,255,255,0.19), inset 0 1px rgba(255,255,255,0.07)" }
  - { name: Secondary Button, value: "inset 0 -1px #E6E6E6" }
  - { name: Divider Dark, value: "inset 0 1px #424242" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  muted: "#727272"
  border: "#E6E6E6"
  accent: "#3358D4"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: pill
---

# Unity

## 1. Visual Theme & Atmosphere

Unity's site is a monochrome stage for game art. The UI is black and white, headlines are set huge in a geometric display face, and almost all color comes from game screenshots, trailers and 3D renders made with the engine. The one UI color is a royal blue `#3358D4` used for primary buttons.

The site is built on Unity's "Mango" design system (Tailwind classes prefixed `mango:`), with tokens for grays, blues, radii and a type ramp that runs up to 120px.

What makes it recognisable:

- **Very large display type.** Hero headlines in Nohemi Medium at 96-120px with line height under 1 ("Build great games").
- **Black and white with one blue.** White pages, black text, a black top bar and dark sections in `#000` or `#262626`.
- **Pill buttons with subtle inset lines.** Small 32-48px pills; the blue one has a faint top highlight, the grey one a faint bottom line.
- **Game imagery as color.** Full-bleed screenshots, character art and short loops from games made in Unity.
- **The cube.** The angular, three-part cube mark (2021 logo) appears in the logo and as a graphic motif.

Mood words: confident, technical, creative, high-contrast, modern.

## 2. Color Palette & Roles

Values from the live `--mango-color-*` tokens on unity.com (read 2026-11-16).

| Name | Token | Hex | Role |
|---|---|---|---|
| Black | `black` | `#000000` | Logo, headlines, top bar, dark sections |
| White | `white` | `#FFFFFF` | Page, text on dark |
| Gray 50 | `gray-50` | `#F5F5F5` | Secondary button, light panels |
| Gray 200 | `gray-200` | `#E6E6E6` | Borders, pressed secondary |
| Gray 400 | `gray-400` | `#A6A6A6` | Muted text on dark |
| Gray 500 | `gray-500` | `#727272` | Secondary text on light |
| Gray 700 | `gray-700` | `#424242` | Dividers on dark |
| Gray 800 | `gray-800` | `#262626` | Dark cards, secondary button on dark |
| Gray 950 | `gray-950` | `#1D1D1D` | Dark pressed |
| Blue 400 | `blue-400` | `#5779E8` | Links on dark |
| Blue 500 | `blue-500` | `#3358D4` | Primary button, links, info |
| Blue 600 | `blue-600` | `#2B4FCA` | Primary hover |
| Blue 700 | `blue-700` | `#2745A7` | Primary pressed |
| Focus | `blue-focus` | `#238CEC` | 2px focus ring |
| Red 500 | `red-500` | `#FF0033` | Accent, destructive |

### Semantic colors

| State | Solid | Subtle |
|---|---|---|
| Success | `#16A34A` | `#D2EFDF` |
| Error | `#DC2826` | light red wash |
| Warning | `#D97706` | light yellow wash |
| Info | `#3358D4` | `#E9F5FE` |

### Chart palette

For dashboards and data (from tokens): `#5C92E5`, `#E3A0D7`, `#62D3A4`, `#F2CDB1`, `#E7F0AF`, `#B982C2`, `#2F5F9C`, `#3B9973`, `#F3B38D`, `#BCE65A`. Soft pastels on white; use them in that order.

### Dark sections

The system has a `dark:` variant: background black or `#262626`, text white, secondary buttons `#262626` with hover `#242424` and pressed `#1D1D1D`, borders `#424242`. The top bar is always black.

## 3. Typography

**Families:** **Nohemi** (a geometric display sans by Pangram Pangram) for headings via `--font-mango-display`, and **Inter** for body and UI via `--font-mango-sans`. The site self-hosts both.

**Licensing:** Inter is free on Google Fonts. Nohemi is commercial; the closest free substitute is **Sora** (geometric, similar proportions) at weight 500. Space Grotesk is a second option.

### Scale (desktop; mobile in brackets)

| Role (Mango class) | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| heading-4xl (hero) | 120px [48px] | 500 | 96% | 0 |
| heading-3xl | 96px [48px] | 500 | 96% | 0 |
| heading-2xl | 72px [48px] | 500 | 100% | 0 |
| heading-lg | 48px [36px] | 500 | 120% | 0 |
| heading-md | 36px [24px] | 500 | 120% | 0 |
| heading-2xs | 20px [18px] | 500 | 120% | 0.02em |
| Body large | 18px | 400 | 32px | 0 |
| Body | 16px | 400 | 24-28px | 0 |
| Small / button | 14px | 600 (button) | 16px | -0.01rem |
| Caption | 12px | 400-500 | 16px | 0 |

### Rules

- Headlines are sentence case, medium weight (500), never bold. Line breaks are often deliberate (`whitespace-pre-line`).
- Body in Inter 400; buttons and labels Inter 600 at 14px.
- The ® after "Unity" appears in first mentions in body copy.

## 4. Logo & Brand Mark

The 2021 logo is a black, faceted cube made of three interlocking parts, next to the wordmark "Unity" in a bold geometric sans. The cube alone is the app icon and avatar.

- **Color versions:** black on white (primary); white on black. The brand avoids colored logos.
- **Cube alone:** for favicons, app icons and social avatars, usually white on black.
- **Clear space:** at least half the cube's width on all sides.
- **Minimum size:** cube 16px; full lockup about 80px wide.

Misuse:

- Do not use the older outlined "unity" cube logo (pre-2021).
- Do not color the cube faces in different colors or add gradients.
- Do not rotate the cube.
- Do not set "Unity" in Nohemi as a replacement for the wordmark.

## 5. Components

### Buttons

All buttons are pills (`rounded-full`), Inter 14px/600, tracking -0.01rem, line height 16px.

| Variant | Background | Text | Hover | Pressed | Shadow |
|---|---|---|---|---|---|
| Primary | `#3358D4` | white | `#2B4FCA` | `#2745A7` | `inset 0 1px #FFFFFF30, inset 0 1px #FFFFFF12` |
| Secondary | `#F5F5F5` | black | `#F0F0F0` | `#E6E6E6` | `inset 0 -1px #E6E6E6` |
| Secondary on dark | `#262626` | white | `#242424` | `#1D1D1D` | `inset 0 1px #FFFFFF10` (approximate) |
| Black | `#000000` | white | `#262626` | `#1D1D1D` | none |

- Sizes: small 32px (`h-8`, padding 0 16px), large 48px (`h-12`, padding 0 24px).
- Pressed: `scale(0.95)`. Transitions: box-shadow, background, color and scale over 300ms.
- Focus: a 2px `#238CEC` ring drawn 4px outside the pill.
- Disabled: 40% opacity, `not-allowed` cursor.

```css
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  height: 48px; padding: 0 24px;
  font: 600 14px/16px Inter, system-ui, sans-serif; letter-spacing: -0.01rem;
  color: #fff; background: #3358D4;
  border: 0; border-radius: 9999px;
  box-shadow: inset 0 1px #FFFFFF30, inset 0 1px #FFFFFF12;
  transition: background-color .3s, box-shadow .3s, scale .3s;
}
.btn-primary:hover { background: #2B4FCA; }
.btn-primary:active { background: #2745A7; scale: .95; }
```

### Top bar and navigation

- A black bar (48px on desktop) carries the cube logo in white, menus (Products, Solutions, Resources, Learning, Support & Services, Pricing) in 14px Inter white, and right-side search, sign-in and a blue "Get started" pill.
- Mega menus drop below as white or black panels with grouped links, small icons and 16px radius.

### Hero

Black or white background, a 96-120px Nohemi headline left-aligned or centered, a short Inter paragraph at 18px, and a pair of pills (blue primary + grey secondary). Below or behind it: a full-bleed game trailer or a grid of screenshots with 16px corners.

### Cards

- Light: white or `#F5F5F5`, radius 8-16px (`rounded-lg` / `rounded-2xl`), no shadow, 24-32px padding.
- Dark: `#262626` with white text, `#A6A6A6` secondary.
- Media cards: image on top with the same radius, 12px caption, 20px Nohemi title, a link arrow.
- Logo walls: game and studio logos in single color on gray-50 tiles.

### Tabs and segmented controls

Pill-shaped segmented controls: `#F5F5F5` track, white active pill with a subtle shadow, 14px/600 labels. On dark, `#262626` track and `#424242` active.

### Inputs

40-48px tall, radius 8px, 1px `#CCCCCC` border (approximate), 16px Inter. Focus border and ring `#238CEC`. Labels 14px/500 above.

### Badges

Small pills, 12px/500, `#F5F5F5` with black text or `#E9F5FE` with blue text; "New" uses blue fill and white text.

### Pricing table

Plan cards in a row (Personal, Pro, Enterprise and similar), each with a Nohemi plan name, price in large Inter, a pill CTA and a check list in 14px. The recommended plan is black with white text.

### Code blocks

Dark panel `#141414` or `#1E1E1E`, radius 8px, text `#E2E8F0` (`--mango-code-text`), monospace 14px.

## 6. Layout & Spacing

- **Spacing unit:** `--mango-spacing: .25rem` (4px). Common steps 8, 12, 16, 24, 32, 48, 64, 96px.
- **Radii:** xs 2, sm 4, md 6, lg 8, xl 12, 2xl 16, 3xl 24px, full pill.
- **Max width:** content about 1280-1440px; text columns about 640-720px.
- **Gutters:** 16px mobile, 24-32px tablet, 48-64px desktop.
- **Section spacing:** 96-160px on desktop, 64px on mobile.
- **Grids:** 12 columns; feature grids of 2-4 cards; screenshot galleries in masonry or 3-column grids.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Primary button highlight | `inset 0 1px #FFFFFF30, inset 0 1px #FFFFFF12` |
| Secondary button line | `inset 0 -1px #E6E6E6` |
| Dark divider | `inset 0 1px #424242` |

- Flat overall; depth comes from black vs white blocks and imagery.
- **Easing:** `--mango-ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Durations:** 150ms default (`--mango-default-transition-duration`), 300ms for buttons, 350ms for menu and overlay reveals (fade plus 30px rise).
- Honor reduced motion (`motion-reduce:transition-none` is used throughout).

## 8. Iconography & Imagery

- **Icons:** 16-24px line icons, 1.5px stroke, square-ish geometry, black or white.
- **Game imagery:** the core of the brand. Full-bleed key art, gameplay screenshots and short loops; always credited to the studio.
- **3D and real-time renders:** product pages show the editor UI, scene views and digital twins on dark backgrounds.
- **Cube motif:** the faceted cube shape is used as a frame, mask or pattern in campaign art.

## 9. Voice & Microcopy

Direct, builder-focused, confident. Speaks to game developers and studios.

- Hero: "Build great games" (live homepage, 2026-11-16).
- CTAs: "Get started", "Download Unity", "Explore", "Learn more", "Contact sales", "Compare plans".
- Product names in Title Case: "Unity Editor", "Unity Cloud", "Unity Ads", "Unity Hub".
- Prefer concrete verbs (build, ship, scale, monetize) and name real games and studios.

## 10. Do's and Don'ts

**Do**

- Keep UI black, white and gray; use `#3358D4` for primary actions only.
- Set headlines huge in Nohemi (or Sora) at weight 500 with line height under 1.
- Make every button a pill with 14px/600 Inter labels.
- Let game art carry the color.
- Use 8-16px radii on cards and media.

**Don't**

- Don't use bold 700 headlines.
- Don't add colorful gradients to UI chrome.
- Don't use the pre-2021 outlined cube logo.
- Don't put heavy drop shadows on cards.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Unity.com. Black-and-white layout: white page, black text, a black 48px top bar with a white cube logo and 14px white menu links, and alternating black (`#000` / `#262626`) sections. Headlines in `"Nohemi", "Sora", sans-serif` weight 500, very large (96-120px hero, 48px section), line height 0.96-1.2, sentence case. Body and UI in `Inter, system-ui, sans-serif`, 16-18px, weight 400. Buttons are pills (radius 9999px), Inter 14px/600 with -0.01rem tracking, 32px or 48px tall: primary `#3358D4` (hover `#2B4FCA`, pressed `#2745A7`, inset top highlight `inset 0 1px #FFFFFF30`), secondary `#F5F5F5` with black text and `inset 0 -1px #E6E6E6`. Pressed buttons scale to 0.95. Focus ring 2px `#238CEC`. Cards are `#F5F5F5` or `#262626` with 8-16px radius and no shadow. Use full-bleed game screenshots for color. Easing `cubic-bezier(0.4,0,0.2,1)`, 150-350ms.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-gray-50: #F5F5F5;
  --brand-gray-100: #F0F0F0;
  --brand-gray-200: #E6E6E6;
  --brand-gray-300: #CCCCCC;
  --brand-gray-400: #A6A6A6;
  --brand-gray-500: #727272;
  --brand-gray-700: #424242;
  --brand-gray-800: #262626;
  --brand-gray-950: #1D1D1D;
  --brand-blue: #3358D4;
  --brand-blue-hover: #2B4FCA;
  --brand-blue-pressed: #2745A7;
  --brand-blue-dark-link: #5779E8;
  --brand-focus: #238CEC;
  --brand-red: #FF0033;
  --brand-success: #16A34A;
  --brand-error: #DC2826;
  --brand-warning: #D97706;
  --brand-info-subtle: #E9F5FE;
  --brand-font-display: "Nohemi", "Sora", ui-sans-serif, system-ui, sans-serif;
  --brand-font: "Inter", ui-sans-serif, system-ui, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 8px;
  --brand-radius-xl: 12px;
  --brand-radius-2xl: 16px;
  --brand-radius-pill: 9999px;
  --brand-shadow-primary: inset 0 1px #FFFFFF30, inset 0 1px #FFFFFF12;
  --brand-shadow-secondary: inset 0 -1px #E6E6E6;
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --brand-duration: 150ms;
  --brand-duration-button: 300ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Unity.

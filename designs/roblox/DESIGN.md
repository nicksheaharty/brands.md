---
name: Roblox
slug: roblox
url: https://roblox.com
category: Gaming
tagline: "Dark charcoal surfaces, Builder Sans type, blue actions and a grid of experience tiles."
updated: 2026-11-16
appStoreId: 431946152
logoBackground: "#121215"
theme: dark
colors:
  - name: Roblox Blue
    hex: "#335FFF"
    role: Emphasis actions, app icon, selected states
  - name: Surface 0
    hex: "#121215"
    role: Page background (dark)
  - name: Content Emphasis
    hex: "#F7F7F8"
    role: Primary text and icons on dark
  - name: Surface 100
    hex: "#191A1F"
    role: Raised panels, nav bar
  - name: Surface 200
    hex: "#202227"
    role: Cards, menus
  - name: Surface 300
    hex: "#272930"
    role: Inputs, hovered cards
  - name: Content Default
    hex: "#D5D7DD"
    role: Body text on dark
  - name: Content Muted
    hex: "#BCBEC8"
    role: Secondary text, metadata
  - name: Gray 600
    hex: "#6A6F81"
    role: Disabled text, placeholders
  - name: Gray 100
    hex: "#F7F7F8"
    role: Light theme page background
  - name: Gray 1200 Ink
    hex: "#121215"
    role: Light theme primary text
  - name: Link Blue
    hex: "#70A0FF"
    role: Links on dark
  - name: Success Green
    hex: "#39C582"
    role: Success, online status
  - name: Alert Red
    hex: "#F04433"
    role: Errors, destructive actions
  - name: Warning Yellow
    hex: "#F2BA2A"
    role: Warnings
fonts:
  display:
    family: "Builder Extended"
    fallback: "Archivo"
    weights: [700, 800]
  body:
    family: "Builder Sans"
    fallback: "Inter"
    weights: [400, 600, 700]
typeScale:
  - { role: Display L, size: 80, weight: 700, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Display M, size: 56, weight: 700, lineHeight: 1.21, tracking: "-0.01em" }
  - { role: Display S, size: 40, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Heading L, size: 28, weight: 700, lineHeight: 1.21, tracking: "0" }
  - { role: Heading S, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Title / Body L, size: 16, weight: 400, lineHeight: 1.375, tracking: "0" }
  - { role: Body M, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Menu, value: "0 0 8px rgba(0,0,0,0.3)" }
  - { name: Focus, value: "0 0 0 6px rgba(0,0,0,0.3), 0 1px 4px rgba(25,25,25,0.3)" }
preview:
  bg: "#121215"
  surface: "#202227"
  text: "#F7F7F8"
  muted: "#BCBEC8"
  border: "#353741"
  accent: "#335FFF"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Roblox

## 1. Visual Theme & Atmosphere

Roblox.com is the web front door to a huge catalog of user-made games ("experiences"). Signed out, it is a dark landing page with looping gameplay video, a sign-up form and a "Log In" button. Signed in, it becomes a dense, app-like grid of game tiles, friends, avatars and a Robux balance, styled by Roblox's own design system, Foundation.

What makes it recognisable:

- **Dark by default.** The pre-auth landing page forces the dark theme (`color-mode-dark dark-theme forced-theme`). Surfaces step from `#121215` up through `#191A1F`, `#202227` and `#272930`, with no pure black.
- **The tilted square.** The logo's "O" and the app icon are a square rotated about 15 degrees with a small square hole. It is the shape everyone recognises.
- **Blue for emphasis.** Foundation's emphasis action color is `#335FFF`, the same blue as the app icon. Older pages used a green Play button; the current system uses blue for primary actions.
- **Builder fonts.** Roblox's own Builder Sans for UI and Builder Extended (a wide cut) for big display lines.
- **Tile grids.** Content is thumbnails first: square or 16:9 game tiles, round avatar heads, item cards with Robux prices.
- **Translucent shifts.** Hover and pressed states add a translucent cool white layer (`rgba(208,217,251,0.04-0.16)`) rather than changing to a new solid color.

Mood words: playful, energetic, social, young, structured.

## 2. Color Palette & Roles

Values come from the Foundation CSS tokens on roblox.com (`--color-extended-*`, `--dark-mode-*`).

| Name | Token | Hex | Role |
|---|---|---|---|
| Surface 0 | gray-1200 | `#121215` | Dark page background |
| Surface 100 | gray-1100 | `#191A1F` | Nav bar, raised panels |
| Surface 200 | gray-1000 | `#202227` | Cards, menus, dialogs |
| Surface 300 | gray-900 | `#272930` | Inputs, hovered cards |
| Gray 800 | gray-800 | `#353741` | Strong borders on dark |
| Gray 700 | gray-700 | `#494D5A` | Icons on light, dividers |
| Gray 600 | gray-600 | `#6A6F81` | Placeholder, disabled |
| Content Muted | gray-500 | `#BCBEC8` | Secondary text on dark |
| Content Default | gray-400 | `#D5D7DD` | Body text on dark |
| Content Emphasis | gray-100 | `#F7F7F8` | Headings on dark, light page bg |
| Roblox Blue | blue-700 | `#335FFF` | Emphasis button, selection |
| Blue 800 | blue-800 | `#1446FF` | Pressed (approximate use) |
| Blue 500 | blue-500 | `#70A0FF` | Links on dark |

### Shift layers (state overlays)

| Token | Value | Use |
|---|---|---|
| shift-100 | `rgba(208,217,251,0.04)` | Subtle hover |
| shift-200 | `rgba(208,217,251,0.08)` | Muted stroke, hover |
| shift-300 | `rgba(208,217,251,0.12)` | Standard button fill, default stroke |
| shift-400 | `rgba(208,217,251,0.16)` | Pressed, emphasis stroke |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#39C582` (green-500) | Online dot, success toasts |
| Alert | `#DF281F` (red-800) system, `#F04433` / `#FD7968` text | Errors, destructive actions |
| Warning | `#F2BA2A` (yellow-400) | Warnings |
| Neutral | `#BCBEC8` | Neutral badges |

### Light mode

Signed-in users can pick light theme. It uses `#F7F7F8` and `#FFFFFF` surfaces, `#121215` text, `#494D5A` secondary text and the same blue actions. Hover shifts become translucent black instead of translucent white.

## 3. Typography

**Families:** Builder Sans (UI and body) and Builder Extended (display), both commissioned by Roblox and served from its CDN. They are not licensed for outside use. Free stand-ins: **Inter** for Builder Sans and **Archivo** (use a wide width or weight 800) for Builder Extended.

```css
font-family: var(--config-text-font), "Builder Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Scale (Foundation tokens, 4px interval)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display large | 80px | 700 | 96px |
| Display medium | 56px | 700 | 68px |
| Display small | 40px | 700 | 48px |
| Heading large | 28px | 700 | 34px |
| Heading medium | 24px | 700 | 32px |
| Heading small | 20px | 700 | 24px |
| Title large | 16px | 700 | 22px |
| Body large | 16px | 400 | 22px |
| Body medium | 14px | 400 | 20px |

Letter spacing tokens: tight `-0.01em`, default `0`, loose `0.01em`.

### Rules

- Sentence case for UI. Display lines on marketing pages may be all caps in Builder Extended.
- Labels on buttons are 600, never 400.
- Robux amounts use tabular numbers next to the Robux hexagon icon.

## 4. Logo & Brand Mark

The wordmark is "ROBLOX" in heavy, squared capitals with the first "O" replaced by the tilted square (the "Tilt"). The Tilt also works alone as the app icon and avatar.

- **Wordmark colors:** black `#121215` on light, white on dark. The current site embeds it in `#393B3D` on light and `#FFFFFF` on dark.
- **App icon:** white Tilt with a square hole on Roblox Blue `#335FFF`.
- **Clear space:** at least the width of the Tilt's inner hole on all sides (approximate).
- **Minimum size:** about 80px wide for the wordmark, 16px for the Tilt (approximate).

Misuse:

- Do not straighten the Tilt or change its angle.
- Do not add gradients, bevels or 3D effects to the wordmark.
- Do not recolor the wordmark in blue; blue belongs to the icon tile.
- Do not set "ROBLOX" in a typeface.

## 5. Components

### Buttons

Foundation names buttons by action role. Heights follow the 4px grid: 28, 36, 48px (approximate), radius 8px.

| Variant | Background (dark) | Text | Border |
|---|---|---|---|
| Emphasis | `#335FFF` | `#F7F7F8` | none |
| Soft emphasis | `#335FFF` at 40% | `#EBF1FF` | none |
| Standard | `rgba(208,217,251,0.12)` | `#F7F7F8` | none |
| Sub-emphasis (over media) | white | `#202227` | none |
| Utility | transparent | `#F7F7F8` | none |
| Alert | `rgba(208,217,251,0.12)` | `#F04433` | none |
| Link | transparent | `#F7F7F8` underline on hover | none |

States: hover adds one shift step; pressed adds two; disabled at 50% opacity. Focus ring is a 6px dark halo: `0 0 0 6px rgba(0,0,0,0.3), 0 1px 4px rgba(25,25,25,0.3)` plus a blue inner outline.

```css
.btn-emphasis {
  font: 600 16px/1 "Builder Sans", Inter, sans-serif;
  color: #F7F7F8;
  background: #335FFF;
  border: 0;
  border-radius: 8px;
  height: 48px;
  padding: 0 20px;
}
.btn-emphasis:hover { background: color-mix(in srgb, #335FFF, #fff 8%); }
.btn-standard { background: rgba(208,217,251,0.12); color: #F7F7F8; }
```

### Play button (signature)

On an experience page the big Play button is a wide emphasis button (often full width of the side column, 48-56px tall) with a solid triangle icon and no label on mobile. Older versions used green; match the current blue unless you are recreating a dated screen.

### Inputs

- Height 40-48px, fill `#272930`, 1px stroke `rgba(208,217,251,0.12)`, radius 8px, text 16px `#F7F7F8`, placeholder `#6A6F81`.
- Focus: stroke `#F7F7F8` or blue, no glow.
- The sign-up form stacks Birthday (three selects), Username, Password and Gender toggles, then a full-width "Sign Up" button.

### Experience tiles (signature)

- Square thumbnail (or 16:9 on some rows), radius 8px, no border, no shadow.
- Below: title 16px/700 truncated to 2 lines, then a meta row with a thumbs-up percentage and a person icon with player count, 12-14px `#BCBEC8`.
- Hover: thumbnail scales about 1.02 and the tile gets a shift-200 backing; a Play icon appears on some layouts.
- Rows scroll horizontally with round arrow buttons at the ends; section titles 20-24px/700 with a "See All" link right.

### Navigation

- Top bar about 40-48px tall on `#191A1F`: Tilt or wordmark left, then "Charts", "Marketplace", "Create", "Robux"; centered search field; right side has Robux balance, notifications, settings and avatar headshot.
- A left side drawer (desktop) lists Home, Profile, Communities, Messages, Friends, Avatar, Inventory, Trade.
- Mobile web uses a bottom tab bar.

### Avatars

Round headshots in `#272930` circles; sizes 24, 48, 64, 150px. Online status is a green dot; "in game" adds a blue dot or game badge.

### Item cards (Marketplace)

Square item render on a `#202227` tile (radius 8px), name 14px/600, creator in muted text, price with the Robux icon. Limited items get a small badge in the corner.

### Modals

`#202227` panel, radius 16px, max width 400-560px, title 20px/700, buttons right-aligned or stacked full width on mobile. Scrim `rgba(0,0,0,0.6)`.

### Tabs

Text tabs with an indicator: a 4px inset bar (`0 -4px 0 0 #F7F7F8 inset`) under the active tab, inactive `#BCBEC8`. Vertical tabs use a 4px left inset bar.

## 6. Layout & Spacing

- **Base unit:** 4px (`--config-uiinterval: 4px`); size tokens run `--size-50` to `--size-3000` in quarter steps.
- **Radius tokens:** xsmall 2px, small 4px, medium 8px, large 16px, circle.
- **Content width:** about 1200-1400px on the signed-in home, with the left drawer pushing content on wide screens (approximate).
- **Grid:** tiles flow in rows of 4-8 on desktop with 12-16px gaps; horizontal scrollers on mobile.
- **Breakpoints:** roughly 544, 768, 992 and 1200px (approximate, from the legacy style guide).

## 7. Depth, Elevation & Motion

- Elevation comes from surface steps, not shadows. Base `#121215`, panels `#191A1F`, cards `#202227`, inputs `#272930`.
- Popovers and menus: `0 0 8px rgba(0,0,0,0.3)`.
- Focus halo: `0 0 0 6px rgba(0,0,0,0.3), 0 1px 4px rgba(25,25,25,0.3)`.
- Motion is quick and functional: hover fills 100-150ms, tile scale 150-200ms ease-out, drawers slide 200-250ms (approximate). Landing videos loop silently behind the sign-up card.

## 8. Iconography & Imagery

- **Icons:** filled and outline glyphs from the Foundation icon set, 16, 20, 24, 28px, rounded joins, monochrome in the content color. The Robux icon is a hexagon with a cut, used inline with prices.
- **Thumbnails:** creator-made game art, often bright and busy. Let them carry the color; keep the chrome neutral.
- **Avatars:** 3D renders on transparent or dark backgrounds.
- **Marketing:** gameplay video, avatar group shots, and big Builder Extended headlines over dark.

## 9. Voice & Microcopy

Friendly, short and inclusive. Speaks to players of all ages and to creators.

- Sentence case for UI, a few words per label.
- Verbs on buttons: "Play", "Join", "Sign Up", "Log In", "Buy", "Add Friend".

Sample strings:

- Page title: "Roblox: Play Free Online Games - Sign Up to Play!"
- Section: "Continue", "Recommended For You", "Friends"
- Button: "Sign Up", "Log In", "Play"

## 10. Do's and Don'ts

**Do**

- Build on `#121215` with stepped grey surfaces for elevation.
- Use `#335FFF` for the main action and selection.
- Make content tiles the visual focus, with 8px radii and no borders.
- Use translucent white overlays for hover and pressed states.
- Keep labels at weight 600 and headings at 700.

**Don't**

- Don't use pure black or heavy drop shadows.
- Don't put more than one blue emphasis button in a group.
- Don't decorate the chrome with gradients; thumbnails supply the color.
- Don't rotate the Tilt to a different angle or straighten it.
- Don't use thin (300) type.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Roblox. Dark theme: page `#121215`, nav `#191A1F`, cards `#202227`, inputs `#272930`. Text `#F7F7F8` for headings, `#D5D7DD` body, `#BCBEC8` secondary. Font "Builder Sans" with Inter fallback; headings 700, labels 600, body 400 at 14-16px; big marketing lines in a wide display face (Archivo 800 as fallback). Primary buttons are solid `#335FFF`, white 600 text, 8px radius, 48px tall; secondary buttons are `rgba(208,217,251,0.12)` with white text; hover adds another translucent white layer. Content is a grid of square game tiles with 8px radius, title 16px/700 below and a muted meta row (like rating and player count). Avatars are round headshots on `#272930`. Use almost no shadows; elevation comes from lighter surfaces. Copy is short and friendly.

```css
:root {
  --brand-blue: #335FFF;
  --brand-blue-pressed: #1446FF;
  --brand-link: #70A0FF;
  --brand-surface-0: #121215;
  --brand-surface-100: #191A1F;
  --brand-surface-200: #202227;
  --brand-surface-300: #272930;
  --brand-text-emphasis: #F7F7F8;
  --brand-text: #D5D7DD;
  --brand-text-muted: #BCBEC8;
  --brand-text-disabled: #6A6F81;
  --brand-shift-100: rgba(208,217,251,0.04);
  --brand-shift-200: rgba(208,217,251,0.08);
  --brand-shift-300: rgba(208,217,251,0.12);
  --brand-shift-400: rgba(208,217,251,0.16);
  --brand-success: #39C582;
  --brand-alert: #F04433;
  --brand-font: "Builder Sans", "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-font-display: "Builder Extended", "Archivo", sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-unit: 4px;
  --brand-shadow-menu: 0 0 8px rgba(0,0,0,0.3);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Roblox.

---
name: Dropbox
slug: dropbox
url: https://dropbox.com
category: Productivity
tagline: "Blue box glyph, warm coconut neutrals, Sharp Grotesk headlines and bold color blocks."
updated: 2026-11-16
appStoreId: 327630330
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Dropbox Blue
    hex: "#0061FE"
    role: Logo glyph, primary buttons, links
  - name: Graphite
    hex: "#1E1919"
    role: Wordmark, primary text on coconut
  - name: Coconut
    hex: "#F7F5F2"
    role: Warm subtle background
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Black
    hex: "#050505"
    role: Text base, dark CTA and sections
  - name: Blue Hover
    hex: "#004DC7"
    role: Primary hover (state 1)
  - name: Blue Pressed
    hex: "#003A97"
    role: Primary pressed (state 2)
  - name: Blue Surface
    hex: "#DEEBFF"
    role: Tinted blue panels
  - name: Text Subtle
    hex: "#65696E"
    role: Secondary text
  - name: Border Base
    hex: "#B0B4BA"
    role: Input and card borders
  - name: Lime
    hex: "#B4DC19"
    role: Accent color block
  - name: Sunshine
    hex: "#FAD24B"
    role: Accent color block
  - name: Tangerine
    hex: "#FA551E"
    role: Accent color block
  - name: Orchid
    hex: "#C8AFF0"
    role: Accent color block
  - name: Alert
    hex: "#C0154C"
    role: Errors on light
fonts:
  display:
    family: "Sharp Grotesk"
    fallback: "Schibsted Grotesk"
    weights: [400, 500]
  body:
    family: "Atlas Grotesk"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 40, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Section Title, size: 32, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Subsection, size: 24, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Card Title, size: 20, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Label, size: 12, weight: 500, lineHeight: 1.5, tracking: "0" }
radii: { sm: 6, md: 8, lg: 12, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Focus, value: "0 0 0 3px #A0D1FA" }
  - { name: Raised, value: "0 4px 16px rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F5F2"
  text: "#050505"
  muted: "#65696E"
  border: "#B0B4BA"
  accent: "#0061FE"
  accentText: "#FFFFFF"
  radius: 16
  buttonStyle: solid
---

# Dropbox

## 1. Visual Theme & Atmosphere

Dropbox.com sells cloud storage, file sharing and the wider Dropbox product family (Dash, DocSend, Dropbox Sign, Replay). The marketing site pairs a very plain base (white and warm off-white, near-black text) with the blue box glyph and a set of loud accent colors used as flat blocks behind product UI and photography.

What makes it recognisable:

- **The open box glyph.** Five diamonds that form an opened box, in Dropbox Blue `#0061FE`. It is the single most recognisable element and appears in the header and app icon.
- **Warm neutrals.** Instead of cool greys, subtle backgrounds use Coconut `#F7F5F2` and text uses Graphite `#1E1919` or a near-black `#050505`.
- **Sharp Grotesk headlines.** Display type is Sharp Grotesk (the "20 Book" cut for headlines), set at regular or medium weight with balanced wrapping. Body and UI use Atlas Grotesk.
- **Color blocks.** The 2017 brand system's accent palette (lime, sunshine, tangerine, orchid, sky, crimson) shows up as solid rectangles, card fills and illustration backgrounds. One or two per section, never all at once.
- **Product first.** Hero and feature sections show the file browser, sharing sheets and Dash search, cropped in rounded 12px frames.
- **Rounded buttons.** Standard buttons have 16px radii (two 8px units), giving a soft, near-pill shape.

Mood words: warm, practical, confident, creative, calm.

## 2. Color Palette & Roles

Values below come from Dropbox's DIG design tokens (`--dig-color__*`) loaded on dropbox.com.

| Name | Token | Hex | Role |
|---|---|---|---|
| Dropbox Blue | primary base | `#0061FE` | Glyph, primary CTA, links |
| Blue state 1 | primary base--state-1 | `#004DC7` | Hover |
| Blue state 2 | primary base--state-2 | `#003A97` | Pressed |
| Blue on surface | primary on-surface | `#0057E0` | Link text on tints |
| Blue surface | primary surface | `#DEEBFF` | Blue tinted panels |
| Black | text base / background base (dark) | `#050505` | Text, dark CTAs |
| Graphite | | `#1E1919` | Wordmark, text on coconut |
| Text subtle | text subtle | `#65696E` | Secondary text |
| Border bold | border bold | `#7C8189` | Strong borders |
| Border base | border base | `#B0B4BA` | Inputs, cards |
| Coconut | background subtle | `#F7F5F2` | Warm section background |
| White | background base | `#FFFFFF` | Page |

### Accent colors


| Accent | Light | Dark |
|---|---|---|
| Blue | `#B4C8E1` | `#283750` |
| Cyan | `#14C8EB` | `#007891` |
| Green / Lime | `#B4DC19` | `#0F503C` |
| Magenta / Pink | `#FFAFA5` | `#CD2F7B` |
| Orange | `#FF8C19` | `#BE4B0A` |
| Purple / Orchid | `#C8AFF0` | `#78286E` |
| Red / Tangerine | `#FA551E` | `#9B0032` |
| Yellow / Sunshine | `#FAD24B` | `#9B6400` |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Alert (light) | `#C0154C` text, `#F5E5EB` surface | Errors |
| Success | green accent `#0F503C` on `#B4DC19` tint (approximate role) | Positive tags |
| Warning | `#9B6400` on `#FAD24B` tint (approximate role) | Warnings |
| Focus | `#A0D1FA` 2-3px ring | Keyboard focus |

### Dark mode

DIG ships dark tokens: background base `#1E1E1F` or `#050505`, raised `#2A2B2B`, text `#FFFFFF`, subtle text `#B0B4BA`, primary `#488EFF`, borders `#4E5053`. The marketing site uses dark mainly for full-bleed bands and the "Dash" pages.

## 3. Typography

**Families:** Sharp Grotesk (display; several widths: Condensed, Wide, Super Condensed, plus "Sharp Grotesk 20 Book" for headlines) and Atlas Grotesk (text). Both are commercial and licensed by Dropbox. Free stand-ins: **Schibsted Grotesk** for display, **Inter** for text.

```css
--display: "SharpGrotesk", "Sharp Grotesk", "Schibsted Grotesk", sans-serif;
--text: "AtlasGrotesk", "Atlas Grotesk Web", "Inter", Helvetica, Arial, sans-serif;
```

### Scale (from `dwg-font-size--*` utilities)

| Role | Family | Desktop | Mobile | Weight | Line height |
|---|---|---|---|---|---|
| Hero | Sharp Grotesk 20 Book | 40px | 32px | 500 | 120% |
| Section title | Sharp Grotesk 20 Book | 32px | 24px | 400 | 120% |
| Subsection | Sharp Grotesk 20 Book | 24px | 20px | 400 | 120% |
| Feature title | Sharp Grotesk 20 Book | 20-24px | 20px | 500 | 120% |
| Body large | Atlas Grotesk | 18px | 16px | 400 | 1.5 (approximate) |
| Body / button | Atlas Grotesk | 16px | 16px | 400 / 500 | 120-150% |
| Pill / label | Atlas Grotesk | 12px | 12px | 500 | 18px |

### Rules

- Sentence case everywhere ("Less uploading. Less explaining. More doing.").
- Headlines use `text-wrap: balance` and stay at 400-500 weight; no heavy bold.
- Body copy is 16-18px; keep line length under about 70 characters.

## 4. Logo & Brand Mark

The logo is the open box glyph plus the "Dropbox" wordmark. The glyph is five diamonds (two pairs and one below) suggesting a box with open flaps.

- **Primary:** blue glyph `#0061FE` with Graphite wordmark (as in `logo.svg`).
- **Glyph only:** for app icons and small spaces; white glyph on blue in the app icon.
- **Clear space:** at least the width of one diamond on every side (approximate).
- **Minimum size:** glyph about 16px, full logo about 80px wide (approximate).

Misuse:

- Do not recolor the glyph in accent colors.
- Do not rotate or rearrange the diamonds.
- Do not add 3D, shadows or gradients (the old blue 3D box is retired).
- Do not set "Dropbox" in Sharp Grotesk as a substitute wordmark.

## 5. Components

### Buttons

`.dwg-button2` with style and size modifiers. Large and standard sizes use `border-radius: 16px` (2 x 8px units); small and extra-small use 12px. Background and border transitions run 100ms.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#0061FE` | `#FFFFFF` | none | `#004DC7`; pressed `#003A97` |
| Primary (dark CTA) | `#050505` | `#F7F5F2` | none | `#2A2B2B` |
| Outline | transparent | `#050505` | 1px `#0061FE` or `#050505` | 4% black overlay |
| Transparent / text | transparent | `#050505` | none | underline; arrow nudges right |

Standard padding is 16px by 24px (approximate, `dwg-pt--2 dwg-pr--3`), text Atlas Grotesk 16px/500. Focus: `0 0 0 3px #A0D1FA` focus ring with no outline.

```css
.db-btn {
  font: 500 16px/1.2 "Atlas Grotesk", Inter, sans-serif;
  color: #fff;
  background: #0061FE;
  border: 0;
  border-radius: 16px;
  padding: 16px 24px;
  transition: background-color .1s, border-color .1s;
}
.db-btn:hover { background: #004DC7; }
.db-btn:active { background: #003A97; }
.db-btn:focus-visible { box-shadow: 0 0 0 3px #A0D1FA; outline: none; }
```

### Navigation

- White header about 64px tall. Left: glyph and wordmark. Next: "Solutions", "Products", "Business", "Pricing" with dropdowns.
- Right: "Contact sales" text link, "Get app", "Sign up", "Log in", and a primary "Get started" button.
- Dropdown panels are white, radius 12px, with icon + title + one-line description items and a promo card.
- Mobile: full-screen menu with stacked items and chevrons.

### Cards

- Media cards: radius 12px, overflow hidden, minimum height 405px (540px from 480px wide), with an image or video background and a dark gradient for legible text.
- Feature cards: Coconut `#F7F5F2` or an accent block fill, 24-32px padding, title 20-24px Sharp Grotesk, body 16px Atlas, arrow link.
- Hover-play cards start a muted video on hover (fade 300ms ease-out, 150ms delay).

### Pills

Recommendation pills: Atlas Grotesk 12px/500, 18px line height, pill radius, white or coconut fill with a subtle border.

### Inputs

Height 40-48px, 1px `#B0B4BA` border, radius 8px (DIG medium), 16px text, placeholder `#65696E`. Focus border `#0061FE` plus the `#A0D1FA` ring. Error border and text `#C0154C`.

### Logo ticker

Customer logos (for example McLaren, Cirque du Soleil) scroll in a looping ticker in one neutral color.

### File list (product UI)

In-app tables use 48px rows, a file-type icon, name in 14px/500, modified date and members in `#65696E`, hover row `#F7F5F2` and a selected row in `#DEEBFF`.

## 6. Layout & Spacing

- **Unit:** 8px (`--dig-spacing__dimension__8`). Spacing utilities `dwg-p--1` to `dwg-p--30` map to multiples of 8.
- **Radii (DIG):** small 6px, medium 8px, large 12px, circular 999px; buttons 12-16px.
- **Content width:** about 1200-1440px (approximate).
- **Gutters:** 16px mobile, 24-48px desktop.
- **Breakpoints:** 480 (mobile-lg), 768 (tablet), about 1024 (tablet-lg), 1280 (desktop), 1440 (desktop-lg) and ultrawide (names from `dwg-*` utility prefixes; px approximate except 480 and 768).
- **Rhythm:** sections 64-96px apart; color-block sections run edge to edge.

## 7. Depth, Elevation & Motion

- Mostly flat. Separation comes from coconut and accent fills and 12px radii.
- Focus ring: `0 0 0 3px #A0D1FA` (or `0 0 0 2px`).
- Menus and popovers: soft shadow about `0 4px 16px rgba(0,0,0,0.12)` (approximate).

Motion tokens from DIG:

| Token | Value |
|---|---|
| xxfast | 100ms |
| xfast | 200ms |
| fast | 300ms |
| easing balanced | `cubic-bezier(0.4, 0, 0.6, 1)` |
| easing enter | `cubic-bezier(0, 0, 0.4, 1)` |

Color changes use xfast linear; position changes xfast balanced.

## 8. Iconography & Imagery

- **Icons:** DIG UI icons, 24px line icons with rounded joins at about 1.5px stroke, in black or blue; file-type icons are flat colored sheets.
- **Photography:** creative professionals and teams at work, natural light, often cropped tight and set against an accent color block.
- **Product UI:** clean screenshots of the file browser and Dash, framed with 12px corners.

## 9. Voice & Microcopy

Plain, warm and a bit witty. Focuses on less busywork.

- Sentence case; short, rhythmic headlines.
- CTAs: "Get started", "Try Dropbox free", "Sign up", "Log in", "Contact sales", "Get app", "Learn more".

Sample strings:

- Hero: "Less uploading. Less explaining. More doing."
- Social proof: "Join the over 700 million registered users who trust Dropbox" (read on dropbox.com today)
- Features: "Share files without the slowdown", "Find it fast, every time", "Security never comes second"
- Section: "Bring Dropbox content into your favorite AI tools"

## 10. Do's and Don'ts

**Do**

- Use Dropbox Blue `#0061FE` for the glyph and primary actions.
- Use Coconut `#F7F5F2` and near-black `#050505` for a warm base.
- Set headlines in Sharp Grotesk (or Schibsted Grotesk) at 400-500.
- Use one accent block per section to frame photos or UI.
- Round buttons at 16px and cards at 12px.

**Don't**

- Don't use cool grey page backgrounds everywhere.
- Don't combine several accent colors in one card.
- Don't bring back the 3D box or blue gradients.
- Don't set headlines in heavy bold.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Dropbox.com. White page with warm Coconut `#F7F5F2` sections; text near-black `#050505` (Graphite `#1E1919` for the wordmark), secondary `#65696E`, borders `#B0B4BA`. Headlines in Sharp Grotesk (fallback Schibsted Grotesk) at 400-500 weight, 32-40px, line height 1.2, balanced wrapping; body in Atlas Grotesk (fallback Inter) 16-18px. Primary buttons are Dropbox Blue `#0061FE` with white 500 text, 16px radius, padding 16px 24px, hover `#004DC7`, pressed `#003A97`; focus ring `0 0 0 3px #A0D1FA`. Header shows the blue five-diamond box glyph with "Dropbox", then Solutions/Products/Business/Pricing and "Get started". Use flat accent blocks (lime `#B4DC19`, sunshine `#FAD24B`, tangerine `#FA551E`, orchid `#C8AFF0`) behind product screenshots or photos, one per section. Cards 12px radius, mostly flat. Motion 100-300ms with `cubic-bezier(0.4,0,0.6,1)`. Copy is plain, sentence case and short.

```css
:root {
  --brand-blue: #0061FE;
  --brand-blue-hover: #004DC7;
  --brand-blue-pressed: #003A97;
  --brand-blue-surface: #DEEBFF;
  --brand-black: #050505;
  --brand-graphite: #1E1919;
  --brand-coconut: #F7F5F2;
  --brand-bg: #FFFFFF;
  --brand-text: #050505;
  --brand-text-subtle: #65696E;
  --brand-border-bold: #7C8189;
  --brand-border: #B0B4BA;
  --brand-lime: #B4DC19;
  --brand-sunshine: #FAD24B;
  --brand-tangerine: #FA551E;
  --brand-orchid: #C8AFF0;
  --brand-alert: #C0154C;
  --brand-focus: #A0D1FA;
  --brand-font-display: "Sharp Grotesk", "Schibsted Grotesk", sans-serif;
  --brand-font: "Atlas Grotesk", "Inter", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 6px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-button: 16px;
  --brand-unit: 8px;
  --brand-ease: cubic-bezier(0.4, 0, 0.6, 1);
  --brand-ease-enter: cubic-bezier(0, 0, 0.4, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Dropbox.

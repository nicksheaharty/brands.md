---
name: Canva
slug: canva
url: https://canva.com
category: Productivity
tagline: "Friendly purple buttons, a teal-to-violet gradient and a canvas-first editor."
updated: 2026-11-16
appStoreId: 897446215
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Canva Purple
    hex: "#8B3DFF"
    role: Primary buttons, links, selection, brand accent
  - name: Canva Teal
    hex: "#00C4CC"
    role: Gradient start, logo, highlights
  - name: Deep Violet
    hex: "#7D2AE8"
    role: Gradient end, logo, hero backgrounds
  - name: Ink
    hex: "#0F1015"
    role: Primary text
  - name: White
    hex: "#FFFFFF"
    role: Page and canvas background
  - name: Mist
    hex: "#F3F4F7"
    role: Editor chrome, side panels, page background behind the canvas
  - name: Purple Hover
    hex: "#7630D7"
    role: Primary button hover
  - name: Purple Pressed
    hex: "#612DAE"
    role: Primary button pressed
  - name: Lilac Wash
    hex: "#F1EBFF"
    role: Selected item background, quiet purple surfaces
  - name: Charcoal
    hex: "#1D1F26"
    role: Dark surfaces, editor toolbar on dark
  - name: Red
    hex: "#DB142C"
    role: Errors, destructive actions
  - name: Green
    hex: "#008009"
    role: Success
fonts:
  display:
    family: "Canva Sans"
    fallback: "Plus Jakarta Sans"
    weights: [600, 700, 800]
  body:
    family: "Canva Sans"
    fallback: "Plus Jakarta Sans"
    weights: [400, 500, 600]
  mono:
    family: "SF Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 56, weight: 800, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Heading L, size: 40, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading M, size: 28, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Heading S, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Label, size: 14, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 0 0 1px rgba(64,87,109,0.07), 0 2px 12px rgba(53,71,90,0.2)" }
  - { name: Popover, value: "0 0 0 1px rgba(64,87,109,0.04), 0 6px 20px -4px rgba(64,87,109,0.3)" }
  - { name: Thumbnail hover, value: "0 4px 16px rgba(15,16,21,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F4F7"
  text: "#0F1015"
  muted: "#5E6A82"
  border: "#DDE1E8"
  accent: "#8B3DFF"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Canva

## 1. Visual Theme & Atmosphere

Canva is a design tool that tries hard not to feel like one. The product is white and soft gray, with a single friendly purple (`#8B3DFF`) for actions, and the brand lives in a teal-to-violet gradient (`#00C4CC` to `#7D2AE8`) that appears in the logo, hero bands and promotional tiles.

What makes it recognisable:

- **The gradient.** Teal at the top left fading through blue-violet to deep purple at the bottom right. It is the logo background and the hero background on the homepage.
- **One purple.** Primary buttons, selection outlines, links and toggles are all `#8B3DFF`. Hover is `#7630D7`.
- **Templates as content.** Most screens are grids of colorful template thumbnails. The UI frames them quietly and lets the templates carry color.
- **The editor layout.** A slim icon rail on the left, a wide side panel, a context toolbar on top and a large gray workspace with the white page in the middle.
- **Rounded and soft.** 8px corners on buttons and inputs, 12px on cards and panels, round avatars and pill chips.
- **The script wordmark.** The "Canva" logotype is a hand-lettered script, which makes the brand feel personal against the clean sans UI.

Mood words: friendly, approachable, colorful, confident, simple.

## 2. Color Palette & Roles

canva.com blocked automated requests (403) when this was written, so the UI values below were read from Canva's own developer site (canva.dev), which uses the same design tokens, plus the public app. Values marked approximate were not confirmed in served CSS.

| Name | Hex | Role |
|---|---|---|
| Canva Purple | `#8B3DFF` | Primary button, link, selection outline, toggle on |
| Purple Hover | `#7630D7` | Primary hover |
| Purple Pressed | `#612DAE` | Primary pressed |
| Lavender | `#A370FC` | Purple on dark backgrounds; 15-30% alpha for selection tint |
| Lilac Wash | `#F1EBFF` | Selected list item, quiet purple surface |
| Canva Teal | `#00C4CC` | Gradient start, logo, highlights |
| Aqua | `#65ECF1` | Gradient highlight on dark |
| Deep Violet | `#7D2AE8` | Gradient end, logo |
| Ink | `#0F1015` | Primary text |
| Ink 70% | `#101219B2` | Secondary text |
| Slate | `#5E6A82` | Muted text and icons (approximate) |
| Border | `#DDE1E8` | Input and card borders (approximate) |
| Mist | `#F3F4F7` | Editor background, side panels |
| Charcoal | `#1D1F26` | Dark surfaces |
| White | `#FFFFFF` | Canvas, cards, page |

### Gradient

```css
.canva-gradient {
  background: linear-gradient(135deg, #00C4CC 0%, #6420FF 55%, #7D2AE8 100%);
}
```

The middle stop (`#6420FF`) is approximate; on the homepage the gradient is soft and diagonal with the teal corner top-left.

### Semantic colors

| State | Hex |
|---|---|
| Error / destructive | `#DB142C` (light), `#FD4958` (dark) |
| Error hover | `#B61629` |
| Warning | `#AD5A00` text, `#FFD9AD` fill |
| Success | `#008009` |
| Info | `#1A62FF` (light), `#3D8BFF` (dark) |
| Pro / premium crown | `#FFB800` gold crown icon on thumbnails (approximate) |

### Dark mode

The editor and apps have a dark theme: surfaces `#1D1F26` and `#0F1015`, text white, secondary text `#FFFFFFB2`, borders `#FFFFFF26`, and purple lifts to Lavender `#A370FC` for links and outlines. The canvas page itself stays white.

## 3. Typography

**Family:** Canva Sans, Canva's own geometric sans, used across the product and marketing. The served stack is:

```css
font-family: "Canva Sans", "IBM Plex Sans Arabic", "Noto Sans Variable", "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
```

**Licensing:** Canva Sans is proprietary. Use **Plus Jakarta Sans** (Google Fonts) as the closest free fallback; Noto Sans is the safe multi-script fallback Canva itself uses.

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 48-56px | 800 | 1.1 | -0.02em |
| Heading L | 40px | 700 | 1.15 | -0.01em |
| Heading M | 28px | 700 | 1.25 | 0 |
| Heading S | 20px | 600 | 1.3 | 0 |
| Body L | 18px | 400 | 1.5 | 0 |
| Body (product) | 14px | 400 | 1.5 | 0 |
| Label / button | 14px | 600 | 1.3 | 0 |
| Caption | 12px | 400 | 1.4 | 0 |

Sizes and weights are approximate, from the public app and canva.dev.

### Rules

- Sentence case everywhere: "Create a design", "Share", "Download".
- The editor UI is small: 14px body and 12px captions, so the canvas gets the space.
- Marketing headlines are heavy (700-800) and short, sometimes with one word in the gradient as a text fill.
- Do not set UI text in the script style of the logo.

## 4. Logo & Brand Mark

The logo is the **Canva** script wordmark: a single connected, hand-drawn line with a capital "C" that loops into "anva". On its own it appears in the gradient or white; as an app icon or avatar it sits in white inside a gradient circle or square.

- **Primary:** gradient wordmark on white, or white wordmark on the gradient.
- **Single color:** white on purple or Ink, Ink on white.
- **App icon:** white script on the teal-to-violet gradient.
- **Clear space:** at least the height of the "a" on every side (approximate).
- **Minimum size:** about 60px wide for the wordmark (approximate).

Misuse:

- Do not recreate the script in a font.
- Do not change the gradient direction or colors, or put the gradient wordmark on a gradient background.
- Do not outline, skew or add effects.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#8B3DFF` | `#FFFFFF` 14px/600 | none | 8px | 40px (M), 48px (L) |
| Secondary | `#FFFFFF` | `#0F1015` | 1px `#DDE1E8` | 8px | same |
| Tertiary | `#F3F4F7` or `#404F6D0F` | `#0F1015` | none | 8px | same |
| Destructive | `#DB142C` | `#FFFFFF` | none | 8px | same |
| Gradient CTA (marketing) | the brand gradient | `#FFFFFF` | none | 8px | 48px |
| Icon button | transparent | `#0F1015` | none | 8px | 32-40px square |

States:

- Primary hover `#7630D7`, pressed `#612DAE`.
- Neutral hover: overlay `#404F6D0F`, pressed `#39466024`.
- Focus: 2px `#8B3DFF` ring with 2px offset (approximate).
- Disabled: 40% opacity.
- Transition: background 150ms ease (approximate).

```css
.canva-btn {
  height: 40px; padding: 0 16px;
  border: 0; border-radius: 8px;
  background: #8B3DFF; color: #fff;
  font: 600 14px/1 var(--brand-font);
  transition: background-color 150ms ease;
}
.canva-btn:hover { background: #7630D7; }
.canva-btn:active { background: #612DAE; }
```

### Editor shell (signature)

- **Top bar:** 56px, the brand gradient across the full width in the classic editor, or white in newer layouts; holds menu, file name, undo/redo, collaborators, "Share" (primary purple) and a crown "Try Pro" button.
- **Left rail:** 72px wide, icon over 11-12px label ("Design", "Elements", "Text", "Uploads", "Apps"). Active item gets a `#F1EBFF` tile and purple icon.
- **Side panel:** 360px, white, search field on top, then template or element grids in 2-3 columns with 8px gaps.
- **Context toolbar:** white strip above the canvas with font picker, size stepper, color swatch, effects and position.
- **Workspace:** `#F3F4F7` (or darker in dark mode) with the white page centered, a soft shadow, and page thumbnails along the bottom.
- **Selection:** 2px `#8B3DFF` outline, white round handles with purple border, rotate handle below.

### Template cards

- Thumbnail with 8px radius, no border, title 14px/600 Ink below and type label 12px muted.
- Hover: thumbnail lifts with `0 4px 16px rgba(15,16,21,.16)` and a "..." menu appears.
- Pro items show a small crown badge in the corner.

### Inputs

- 40px tall, white, 1px `#DDE1E8` border, 8px radius, 14px text.
- Search fields are rounded (8px) with a leading magnifier and a muted placeholder: "Search your content and Canva's".
- Focus: border `#8B3DFF` plus 2px purple ring at 30% alpha (approximate).
- Error: border and helper text `#DB142C`.

### Navigation (marketing)

- White header, about 72px, script logo left, menus "Design spotlight", "Business", "Education", "Plans and pricing", "Learn" at 14-16px/500.
- Right: "Log in" secondary and "Sign up" primary purple.
- Logged-in home: left sidebar with "Home", "Projects", "Templates", "Brand", "Apps", and a large gradient search hero: "What will you design today?"

### Chips and tabs

- Category chips under the hero: round icon tiles (each in its own pastel color) with labels like "Presentation", "Social media", "Video", "Print".
- Tabs: 14px/600, Ink active with a 2px purple underline, muted inactive.

### Badges and modals

Badges are 20px pills, 11-12px/600: "Pro" in purple on Lilac Wash, "New" in white on purple. Modals are white, 12px radius, Popover shadow, 24px padding, buttons right-aligned; the Share dialog is a popover anchored to its button.

## 6. Layout & Spacing

- **Base unit:** 8px with 4px half steps.
- **Marketing width:** about 1200-1440px with 24-48px gutters (approximate).
- **Template grids:** responsive masonry or fixed-ratio grids with 8-16px gaps.
- **Editor:** fixed rail (72px) and panel (360px), fluid workspace.
- **Breakpoints:** roughly 600, 900 and 1200px (approximate). Compact editor controls; marketing sections 64-96px apart.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 0 0 1px rgba(64,87,109,.07), 0 2px 12px rgba(53,71,90,.2)` (approximate) |
| Popover | `0 0 0 1px rgba(64,87,109,.04), 0 6px 20px -4px rgba(64,87,109,.3)` (approximate) |
| Thumbnail hover | `0 4px 16px rgba(15,16,21,.16)` (approximate) |
| Inset outline | `inset 0 0 0 1px` with the border color |

- Most UI is flat; elevation is reserved for popovers, menus, the canvas page and hovered thumbnails.
- Motion is quick: 100-200ms for hovers and panels, ease-out.
- Magic and AI features use a gradient shimmer in the brand colors; keep it subtle and short.

## 8. Iconography & Imagery

- **Icons:** 24px, 1.5-2px rounded strokes with some solid fills, Ink by default and purple when active.
- **Category icons:** colorful rounded-square tiles with a white glyph, each category its own color.
- **Imagery:** the templates are the imagery. Marketing shows real designs (posters, decks, social posts) at angles, plus photos of people using Canva at work and in class.
- **Illustration:** flat, bright, rounded shapes; confetti-like accents in the brand gradient.

## 9. Voice & Microcopy

Warm, encouraging and plain. Speaks to beginners without talking down.

- Sentence case, second person, short verbs. Say "design", "create", "share"; call layers "elements" and artboards "pages".

Sample strings:

- Home: "What will you design today?"
- Hero (long-running tagline): "Design anything. Publish anywhere."
- Buttons: "Create a design", "Share", "Download", "Present", "Try Canva Pro"
- Empty state: "Your designs will appear here"
- Toast: "Design saved"
- Search: "Search your content and Canva's"

## 10. Do's and Don'ts

**Do**

- Use `#8B3DFF` for every primary action and selection.
- Keep the UI white and `#F3F4F7` so template colors stand out.
- Use the teal-to-violet gradient for heroes, the top bar and special CTAs.
- Use 8px radii for controls and 12px for panels and cards.
- Show real designs as the main visual.

**Don't**

- Don't use more than one primary purple button per area.
- Don't spread the gradient onto body text or small controls.
- Don't use sharp corners or heavy borders.
- Don't use the script wordmark style for headings.
- Don't let the chrome compete with the canvas.

## 11. Agent Prompt Guide

> Build this UI in the style of Canva. White page and soft gray `#F3F4F7` panels, text Ink `#0F1015`, secondary text at 70% alpha. Font: `"Canva Sans", "Plus Jakarta Sans", "Noto Sans", sans-serif`; 14px product body, 600 weight labels, heavy 700-800 headlines in sentence case. Primary buttons are `#8B3DFF` with white text, 40px tall, 8px radius, hover `#7630D7`, pressed `#612DAE`. Secondary buttons are white with a 1px `#DDE1E8` border. Selection is a 2px `#8B3DFF` outline with white round handles; selected list items use `#F1EBFF`. Use the brand gradient `linear-gradient(135deg, #00C4CC, #6420FF 55%, #7D2AE8)` for the hero band and the editor top bar only. Lay out an editor with a 72px icon rail, a 360px side panel of template thumbnails (8px radius, lift on hover), and a gray workspace with a white page in the center. Errors `#DB142C`, success `#008009`. Copy is warm and short: "What will you design today?"

```css
:root {
  --brand-purple: #8B3DFF;
  --brand-purple-hover: #7630D7;
  --brand-purple-pressed: #612DAE;
  --brand-lilac: #F1EBFF;
  --brand-teal: #00C4CC;
  --brand-violet: #7D2AE8;
  --brand-gradient: linear-gradient(135deg, #00C4CC 0%, #6420FF 55%, #7D2AE8 100%);
  --brand-text: #0F1015;
  --brand-text-secondary: #101219B2;
  --brand-muted: #5E6A82;
  --brand-bg: #FFFFFF;
  --brand-surface: #F3F4F7;
  --brand-dark: #1D1F26;
  --brand-border: #DDE1E8;
  --brand-error: #DB142C;
  --brand-success: #008009;
  --brand-font: "Canva Sans", "Plus Jakarta Sans", "Noto Sans", -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 0 0 1px rgba(64,87,109,.07), 0 2px 12px rgba(53,71,90,.2);
  --brand-shadow-popover: 0 0 0 1px rgba(64,87,109,.04), 0 6px 20px -4px rgba(64,87,109,.3);
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Canva.

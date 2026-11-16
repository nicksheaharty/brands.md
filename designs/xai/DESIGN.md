---
name: Grok
slug: xai
url: https://x.ai
category: AI
tagline: "Warm near-black chat canvas, one centered composer island and a slashed-orbit mark."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: xAI brand background, app icon, x.ai site
  - name: White
    hex: "#FFFFFF"
    role: Logo, primary text on x.ai, inverse button
  - name: Chrome Dark
    hex: "#1E1D1D"
    role: Grok dark theme chrome, sidebar and chat background
  - name: Pane Dark
    hex: "#282726"
    role: Grok dark theme panes and raised surfaces
  - name: Base Light Text
    hex: "#E6E5E3"
    role: Primary text and primary button fill in Grok dark theme
  - name: Accent Blue
    hex: "#1084FE"
    role: Accent actions, links, selection, focus
  - name: Pane Light
    hex: "#FEFEFC"
    role: Grok light theme pane
  - name: Chrome Light
    hex: "#F9F8F7"
    role: Grok light theme chrome and sidebar
  - name: Base
    hex: "#2C2C2B"
    role: Primary text and primary button fill in Grok light theme
  - name: Border Light
    hex: "#E6E5E3"
    role: Secondary border in light theme
  - name: Border Dark
    hex: "#383836"
    role: Secondary border in dark theme
  - name: Muted Dark
    hex: "#5F5E59"
    role: Primary border and disabled fill in dark theme
  - name: Danger
    hex: "#FF263C"
    role: Errors, destructive
  - name: Success
    hex: "#05A95F"
    role: Success (light); #00C972 in dark
  - name: Warn
    hex: "#D77F02"
    role: Warnings (light); #FF9800 in dark
fonts:
  display:
    family: "Universal Sans Display"
    fallback: "Inter"
    weights: [500, 650]
  body:
    family: "Universal Sans"
    fallback: "Inter"
    weights: [425, 525, 650]
  mono:
    family: "IBM Plex Mono / Geist Mono"
    fallback: "IBM Plex Mono"
    weights: [400, 500]
typeScale:
  - { role: Display, size: 28, weight: 525, lineHeight: 1.2, tracking: "0" }
  - { role: Title Medium, size: 20, weight: 525, lineHeight: 1.3, tracking: "0" }
  - { role: Title Small, size: 17, weight: 650, lineHeight: 1.29, tracking: "0" }
  - { role: Body, size: 15, weight: 425, lineHeight: 1.6, tracking: "0.0027em" }
  - { role: Chrome, size: 14, weight: 425, lineHeight: 1.43, tracking: "0.0071em" }
  - { role: Section Headline, size: 13, weight: 650, lineHeight: 1.23, tracking: "0.0077em" }
  - { role: Hint, size: 12, weight: 425, lineHeight: 1.33, tracking: "0.01em" }
radii: { sm: 6, md: 10, lg: 16, pill: 9999 }
spacing: [4, 6, 8, 10, 12, 16, 20, 24, 32]
shadows:
  - { name: Raised (dark), value: "0 2px 8px rgba(0,0,0,0.18)" }
  - { name: Composer (dark), value: "0 2px 6px rgba(0,0,0,0.12), 0 8px 12px rgba(0,0,0,0.10)" }
  - { name: Menu (dark), value: "0 2px 6px rgba(0,0,0,0.30), 0 8px 12px rgba(0,0,0,0.25)" }
  - { name: Modal (dark), value: "0 12px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35)" }
preview:
  bg: "#1E1D1D"
  surface: "#282726"
  text: "#E6E5E3"
  muted: "#9A9995"
  border: "#383836"
  accent: "#E6E5E3"
  accentText: "#1E1D1D"
  radius: 22
  buttonStyle: pill
---

# Grok

## 1. Visual Theme & Atmosphere

Grok is xAI's assistant, and it carries the xAI look: black, white and very little else. The x.ai website is a black page with white type, large product names and thin monospace labels. The Grok app (grok.com, iOS, Android) is calmer and more product-like: a warm near-black canvas (`#1E1D1D`), one centered composer "island" with 22px corners, a collapsible left sidebar and plain, readable answers in a single 800px column.

What makes it recognisable:

- **Warm greys, not cool ones.** Grok's neutrals have a faint brown cast: `#1E1D1D`, `#282726`, `#383836`, `#5F5E59`, and text `#E6E5E3`. Translucent fills are mixed from a warm "wash" color (`#2B1C00` light, white in dark) at 3-16%.
- **One accent blue** (`#1084FE`) for links, selection and accent buttons. Primary buttons are not blue: they are the base text color (light grey on dark, charcoal on light).
- **The composer island.** A large rounded input that starts centered on an empty page and docks to the bottom once a chat begins, with model and mode controls inside it.
- **The mark.** The 2025 Grok symbol is a circle cut by a diagonal slash that breaks out of the ring, like an orbit or event horizon. The xAI logo is a geometric "xAI" built from straight diagonal strokes.
- **Typography with odd weights.** A variable sans (Universal Sans) at 425 for body, 525 for medium, 650 for semibold.

Mood words: stark, technical, confident, quiet, a little irreverent in voice.

## 2. Color Palette & Roles

Grok app values come from the live grok.com CSS (`--grok-*` tokens) read today. x.ai site values could not be fetched (the site returned 403); they are approximate.

### Grok dark theme (default for most users)

| Token | Hex | Role |
|---|---|---|
| `--grok-chrome` | `#1E1D1D` | Chat background, sidebar, top chrome |
| `--grok-pane` | `#282726` | Panes, raised cards, composer fill (approx.) |
| `--grok-gray-150` (elevated) | `#191919` | Elevated menus and popovers |
| `--grok-base` | `#E6E5E3` | Primary text, primary button fill |
| Primary hover | `#F8F8F7` | Primary button hover |
| Primary active | `#D4D3CF` | Primary button pressed |
| Primary disabled | `#5F5E59` | Disabled primary |
| `--grok-on-primary` | `#1E1D1D` | Text on primary button |
| Border primary | `#5F5E59` | Strong borders, input outlines |
| Border secondary | `#383836` | Card and divider borders |
| Border tertiary | `rgba(255,255,255,0.06)` | Hairlines |
| Text secondary | base at 64.7% | Meta, captions |
| Text tertiary | base at 46.7% | Placeholders |
| Scrim | `rgba(5,5,5,0.5)` | Modal backdrop |

### Grok light theme

| Token | Hex | Role |
|---|---|---|
| `--grok-pane` | `#FEFEFC` | Main pane |
| `--grok-chrome` | `#F9F8F7` | Sidebar and chrome |
| `--grok-base` | `#2C2C2B` | Text and primary button fill |
| Primary hover | `#40403E` | |
| Primary active | `#1B1B1B` | |
| Primary disabled | `#D4D3CF` | |
| Border primary | `#D4D3CF` | |
| Border secondary | `#E6E5E3` | |
| Border tertiary | `#F0EFED` | |
| Text secondary | base at 61.5% | |
| Text tertiary | base at 43.9% | |

### Accent and semantic

| Name | Light | Dark | Use |
|---|---|---|---|
| Accent | `#1084FE` | `#1084FE` | Links, accent button, selection (20-30% alpha) |
| Accent hover | `#4B9BFF` | `#4B9CFF` | |
| Accent active | `#0475E6` | `#0076E8` | |
| Danger | `#FF263C` | `#FF263C` | Errors, delete |
| Success | `#05A95F` | `#00C972` | Success, code diff added |
| Warn | `#D77F02` | `#FF9800` | Warnings |

### xAI brand (x.ai, approximate)

Pure black `#000000` background, white `#FFFFFF` text, mid greys around `#8A8A8A` for secondary copy, hairlines in white at 10-15%. No brand color beyond black and white.

## 3. Typography

**Families (from live CSS):** `universalSans` for UI and body, `universalSansDisplay` for large display text, `IBM Plex Mono` and `Geist Mono` for code, labels and data. Inter is loaded as a fallback for some locales and Vazirmatn for Arabic script.

**Licensing:** Universal Sans is a commercial family licensed by xAI. Use **Inter** as the free substitute (variable weight, so 425/525/650 are possible). Mono: **IBM Plex Mono** is on Google Fonts; Geist Mono is also free.

```css
font-family: "universalSans", "Inter", ui-sans-serif, system-ui, sans-serif;
```

### Scale (Grok app tokens)

| Role | Token | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display (empty-state greeting) | `display` | 28px | 525 | normal | 0 |
| Title medium | `title-medium` | 20px | 525 | 26px | 0 |
| Title small | `title-small` | 17px | 650 | 22px | 0 |
| Body (answers) | `body` | 15px | 425 | 24px | 0.0027em |
| Chrome (sidebar, buttons) | `chrome` | 14px | 425 / 525 | 20px | 0.0071em |
| Section headline | `section-headline` | 13px | 650 | 16px | 0.0077em |
| Hint | `hint` | 12px | 425 | 16px | 0.01em |
| Code | `code` | 0.9em | 425 | 1.5 | 0 |

Answer headings inside markdown: h1 1.5em, h2 1.35em, h3 1.1em, weight 650, line height 1.3, 32px space before and 8px after. Paragraphs are separated by 16px.

### Rules

- Sentence case for all UI labels.
- No bold display type. Emphasis is 525 or 650 at small sizes.
- x.ai uses uppercase monospace eyebrows and labels with wide tracking (approximate); the Grok app does not.
- Numbers in data tables use the mono family.

## 4. Logo & Brand Mark

**Grok mark (2025):** a ring broken by a long diagonal slash running from lower left to upper right. The slash extends past the ring at the top right and ends in a sharp point; the lower-left tail tapers out. It is always a single flat color.

**Grok lockup:** the mark followed by the "Grok" wordmark in a clean geometric sans.

**xAI logo:** "xAI" drawn with straight, sharp diagonal strokes; the x is two crossing bars, the A has no crossbar and the I is a single upright.

- **Color versions:** white on black (primary), black on white. No colored versions.
- **App icon:** white mark centered on black.
- **Clear space:** at least half the mark's diameter.
- **Minimum size:** 16px for the mark, 64px wide for the lockup.

Misuse:

- Do not fill the ring or add gradients, glow or color.
- Do not rotate the mark; the slash always rises to the right.
- Do not pair the Grok mark with the X (Twitter) logo as if they were one lockup.

## 5. Components

### Composer island (signature)

- Empty state: centered vertically with the mark or a greeting above it, max width 800px.
- Shape: radius 22px (`--grok-radius-island`), fill pane color, 1px secondary border, shadow `--grok-elevation-composer`.
- Inside: auto-growing textarea at 15-16px with a placeholder like "What do you want to know?" (approximate), then a bottom row: attach button, mode chips (for example "DeepSearch", "Think"), a model picker on the right, and a round send button.
- Send button: 32-36px circle, primary fill (`#E6E5E3` on dark) with a dark up-arrow; disabled at 24% alpha until there is text. When empty it can show a voice button instead.
- Once a conversation starts the island docks to the bottom with 16-24px of padding and a gradient fade above it.

### Buttons

Control heights from tokens: xs 20, sm 24, md 28, lg 32, xl 36, 2xl 44px. Default radius 10px (`--grok-radius-control`), pill for chips.

| Variant | Background | Text | Notes |
|---|---|---|---|
| Primary | base (`#E6E5E3` dark / `#2C2C2B` light) | on-primary | hover lighter or darker by one step |
| Secondary | wash at 8% | text primary | hover 12%, active 16% |
| Ghost / icon | transparent | text secondary | hover wash 5-6%, active 7-10% |
| Accent | `#1084FE` | white | hover `#4B9BFF`, active `#0475E6` |
| Danger | `#FF263C` | white | secondary danger uses 14% alpha fill |

Focus: 2px ring in accent at 80-90% alpha. Transitions 120-180ms `cubic-bezier(.2,0,0,1)`.

### Sidebar

- Width 256px (`--sidebar-width: 16rem`), collapses to a 56px icon rail (`3.5rem`).
- Background chrome color, no visible border in dark theme (tertiary hairline only).
- Top: mark, then rows like "Search", "Chat", "Voice", "Imagine", "Projects" (approximate), then "History" grouped by "Today", "Yesterday", "Previous 7 days".
- Rows 32-40px tall, 14px text, 10px radius, hover wash at 5%. Active row uses the secondary fill.
- Bottom: profile avatar and settings.

### Messages

- User messages: right-aligned bubble with pane or secondary fill, 16-22px radius, max about 70% width.
- Grok answers: no bubble. Plain text on the canvas in the 800px column, 15px/24px body, markdown headings, lists and tables.
- Action row under each answer: icon buttons (copy, regenerate, share, thumbs, read aloud) at 16-20px icons, text secondary, appearing on hover on desktop.
- Thinking state: a collapsible "Thinking" block with a duration label and muted text.
- Code blocks: radius 12px, darker fill, header with language label and copy button, IBM Plex Mono or Geist Mono at 0.9em.

### Menus, popovers, modals

- Menus: elevated fill, 12px radius, shadow `--grok-elevation-menu`, items 32-36px with 16px icons and 14px labels.
- Modals: pane fill, 16-22px radius, shadow `--grok-elevation-modal`, scrim `rgba(5,5,5,0.5)`.
- Tooltips: small, 6-8px radius, 12px hint text.

### Inputs and chips

- Text inputs 36-44px, 10px radius, 1px primary border, focus ring in accent.
- Chips and toggles inside the composer: pill, 28-32px, secondary fill; active state uses accent secondary (accent at 14%) with accent text.

### x.ai site components (approximate)

- Full-bleed black sections with large white headlines, product cards with thin white borders at 10-15% alpha and 0-8px radius.
- Monospace uppercase labels and nav links, small white outline buttons and white-filled primary buttons with black text.

## 6. Layout & Spacing

- **Spacing tokens:** 4, 6, 8, 10, 12, 16, 20, 24px (`--grok-space-*`), paragraph spacing 16px, heading spacing 32px before and 8px after.
- **Chat column:** max 800px (`--grok-page-max-width`), min 400px; user can choose narrower or wider chat widths.
- **Chrome:** top bar 56px.
- **Radii:** sm 6, md 8, control 10, lg 12, panel 16, island 22px.
- **Rows:** 40px default list row height.
- **Breakpoints (approximate):** under 768px the sidebar becomes an overlay drawer; under 640px the composer goes full width with 12px margins.

## 7. Depth, Elevation & Motion

Elevation tokens from live CSS (dark theme):

| Token | Value |
|---|---|
| Raised | `0 2px 8px rgba(0,0,0,0.18)` |
| Composer | `0 2px 6px rgba(0,0,0,0.12), 0 8px 12px rgba(0,0,0,0.10)` |
| Menu | `0 2px 6px rgba(0,0,0,0.30), 0 8px 12px rgba(0,0,0,0.25)` |
| Overlay | `0 4px 16px rgba(0,0,0,0.40), 0 1px 3px rgba(0,0,0,0.30)` |
| Modal | `0 12px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35)` |
| Outline diffuse | `0 0 0 1px rgba(255,255,255,0.09), 0 12px 32px rgba(0,0,0,0.25)` |

Light theme shadows are warm-tinted (`#0F0D0A` and `#462500` at 3-18% alpha).

**Motion tokens:** fast 120ms, base 180ms, morph 200ms, pane 200ms, plate 260ms, slow 320ms, spring 400ms. Easing: standard `cubic-bezier(.2,0,0,1)`, decelerate `cubic-bezier(0,0,0,1)`, accelerate `cubic-bezier(.3,0,1,1)`, spring `cubic-bezier(.22,1,.36,1)`. Answers stream in token by token; the composer morphs from centered to docked with the spring curve.

## 8. Iconography & Imagery

- **Icons:** thin outline icons, 16-22px (`--grok-icon-size-*`), about 1.5px strokes, rounded caps, single color text secondary.
- **Imagery:** Grok Imagine outputs and space imagery on x.ai (planets, rockets, data centers) in high-contrast photography. The app itself is almost image-free.
- **Avatars:** circular user avatar; Grok is represented by the mark, not a face.

## 9. Voice & Microcopy

Grok's personality is witty and direct; the interface copy around it is short and dry.

- Composer placeholder: "What do you want to know?" or "Ask anything" (approximate).
- Modes and actions: "DeepSearch", "Think", "Attach", "New chat", "Share", "Copy", "Regenerate".
- Sidebar groups: "Today", "Yesterday", "Previous 7 days".
- x.ai headlines are short declaratives about understanding the universe and building AI (approximate).

Sentence case, no exclamation marks, no emoji in UI chrome.

## 10. Do's and Don'ts

**Do**

- Use the warm near-black `#1E1D1D` and `#282726` for the app, pure black only for the xAI brand site and icon.
- Center a single, large rounded composer on empty states.
- Keep answers unboxed in an 800px column with 15px/24px body text.
- Make the primary button the text color, and reserve `#1084FE` for accent moments.
- Use translucent wash fills (5-16%) for hover and secondary states.

**Don't**

- Don't add brand color gradients or neon glows.
- Don't use cool blue-grey neutrals; they break the warm palette.
- Don't put Grok's answers in chat bubbles.
- Don't use bold 700 type.
- Don't recolor or animate the mark into a spinner without care.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Grok. Dark, warm near-black app: background `#1E1D1D`, panes `#282726`, borders `#383836` and `#5F5E59`, primary text `#E6E5E3` with secondary text at 65% and tertiary at 47% opacity. Font: `"universalSans", Inter, system-ui, sans-serif` with weights 425 (body), 525 (medium) and 650 (semibold); code in IBM Plex Mono. Body text is 15px/24px. A 256px sidebar with 14px rows (10px radius, hover white at 5%) collapses to a 56px rail. The main view is a single 800px column. The composer is a rounded island (22px radius, pane fill, 1px border, soft shadow) centered on the empty page with a 28px greeting above it, then docked at the bottom during a chat. Its send button is a 36px circle filled `#E6E5E3` with a dark arrow. User messages are right-aligned rounded bubbles; Grok's answers are plain text with markdown and a hover row of icon actions. Accent blue `#1084FE` only for links, selection and accent buttons. Motion: 180ms `cubic-bezier(.2,0,0,1)`, spring `cubic-bezier(.22,1,.36,1)`. Logo: white slashed-ring mark on black.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-chrome: #1E1D1D;
  --brand-pane: #282726;
  --brand-elevated: #191919;
  --brand-base: #E6E5E3;
  --brand-base-hover: #F8F8F7;
  --brand-base-active: #D4D3CF;
  --brand-on-primary: #1E1D1D;
  --brand-border-primary: #5F5E59;
  --brand-border-secondary: #383836;
  --brand-border-tertiary: rgba(255,255,255,0.06);
  --brand-text-secondary: rgba(230,229,227,0.647);
  --brand-text-tertiary: rgba(230,229,227,0.467);
  --brand-hover: rgba(255,255,255,0.06);
  --brand-active: rgba(255,255,255,0.10);
  --brand-accent: #1084FE;
  --brand-accent-hover: #4B9CFF;
  --brand-accent-active: #0076E8;
  --brand-danger: #FF263C;
  --brand-success: #00C972;
  --brand-warn: #FF9800;
  --brand-light-pane: #FEFEFC;
  --brand-light-chrome: #F9F8F7;
  --brand-light-base: #2C2C2B;
  --brand-font: "universalSans", "Inter", ui-sans-serif, system-ui, sans-serif;
  --brand-font-display: "universalSansDisplay", "Inter", sans-serif;
  --brand-font-mono: "IBM Plex Mono", "Geist Mono", ui-monospace, monospace;
  --brand-weight-regular: 425;
  --brand-weight-medium: 525;
  --brand-weight-semibold: 650;
  --brand-radius-sm: 6px;
  --brand-radius-md: 8px;
  --brand-radius-control: 10px;
  --brand-radius-lg: 12px;
  --brand-radius-panel: 16px;
  --brand-radius-island: 22px;
  --brand-shadow-raised: 0 2px 8px rgba(0,0,0,0.18);
  --brand-shadow-composer: 0 2px 6px rgba(0,0,0,0.12), 0 8px 12px rgba(0,0,0,0.10);
  --brand-shadow-menu: 0 2px 6px rgba(0,0,0,0.30), 0 8px 12px rgba(0,0,0,0.25);
  --brand-shadow-modal: 0 12px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35);
  --brand-ease: cubic-bezier(.2,0,0,1);
  --brand-ease-spring: cubic-bezier(.22,1,.36,1);
  --brand-duration-fast: 120ms;
  --brand-duration: 180ms;
  --brand-duration-slow: 320ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by xAI.

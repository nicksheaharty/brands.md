---
name: Cash App
slug: cash-app
url: https://cash.app
category: Finance
tagline: "Electric green, black and white, huge wide-set numbers and pill buttons for moving money."
updated: 2026-11-16
appStoreId: 711923939
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Cash Green
    hex: "#00E013"
    role: Logo square, play buttons and brand moments on cash.app (2025 site value)
  - name: Classic Green
    hex: "#00D632"
    role: Long-standing brand green, focus outlines and links in legal pages
  - name: Black
    hex: "#000000"
    role: Primary text, filled buttons, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on green and black
  - name: Link Green
    hex: "#128A00"
    role: Accessible text links on white (FAQ and legal)
  - name: Toggle Green
    hex: "#00D54B"
    role: Checked switch track
  - name: Stone
    hex: "#E8E5DB"
    role: Warm neutral for carousel arrows and soft chips
  - name: Grey 700
    hex: "#5C5C5C"
    role: Secondary body text
  - name: Grey 500
    hex: "#737373"
    role: Captions, disclaimers, muted labels
  - name: Grey 200
    hex: "#E5E5E5"
    role: Dividers, card outlines
  - name: Grey 100
    hex: "#F0F0F0"
    role: Subtle surface, input fill
  - name: Ink
    hex: "#1D1D1D"
    role: Dark surface in app dark mode (approximate)
  - name: Presale Purple
    hex: "#5420C2"
    role: Campaign accent seen on promo buttons, not a core color
fonts:
  display:
    family: "Cash Sans Wide"
    fallback: "Archivo"
    weights: [400, 500, 700]
  body:
    family: "Cash Sans"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "Cash Sans Mono"
    fallback: "DM Mono"
    weights: [400]
typeScale:
  - { role: Amount, size: 72, weight: 500, lineHeight: 1, tracking: "-0.02em" }
  - { role: Hero, size: 56, weight: 400, lineHeight: 0.95, tracking: "-0.03em" }
  - { role: Heading L, size: 40, weight: 400, lineHeight: 1.1, tracking: "-0.03em" }
  - { role: Heading M, size: 28, weight: 400, lineHeight: 1.1, tracking: "-0.03em" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.4, tracking: "-0.03em" }
  - { role: Button, size: 14, weight: 400, lineHeight: 1, tracking: "-0.02em" }
  - { role: Disclaimer, size: 12, weight: 400, lineHeight: 1.2, tracking: "-0.02em" }
radii: { sm: 6, md: 12, lg: 20, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Soft, value: "0 2px 8px #00000014" }
  - { name: Card, value: "0 4px 12px #0000001a" }
  - { name: Raised, value: "0 8px 24px #0000001f" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F0"
  text: "#000000"
  muted: "#737373"
  border: "#E5E5E5"
  accent: "#00E013"
  accentText: "#000000"
  radius: 20
  buttonStyle: pill
---

# Cash App

## 1. Visual Theme & Atmosphere

Cash App is a money app that looks like a sneaker drop. The brand is built from three things: an electric green square with a white dollar sign, flat black and white, and very large numbers set in a wide typeface. There is almost no decoration. Colour arrives in bold blocks (a green panel, a black panel, a full-bleed photo) rather than in gradients or thin accents.

What makes it recognisable:

- **The green.** One saturated, slightly yellow green carries the whole brand. On cash.app in 2026 the logo square and play buttons use `#00E013`; the long-standing brand green `#00D632` still shows up in focus rings and links. Treat both as "Cash Green" and pick one per screen.
- **Wide type for numbers and headlines.** Cash Sans Wide gives amounts like `$125` a stretched, confident shape. Body copy drops to regular-width Cash Sans.
- **Weight 400 headlines with tight tracking.** Headlines on the marketing site are regular weight with `letter-spacing: -0.03em` and line-height near 0.95. Size does the shouting, not boldness.
- **Pill buttons.** Every CTA is a fully rounded pill (`border-radius: 100px`) with a hover that swaps foreground and background.
- **Rounded media cards.** Photos, card art and product shots sit in containers with `0.75em` to `20px` radii.
- **Personal and street-level.** Photography shows real people, custom card designs, stickers and $cashtags. The tone is casual and direct.


## 2. Color Palette & Roles

The palette is green plus a neutral grey ramp. Hex values below were read from cash.app CSS on 2026-11-16 unless marked approximate.

| Name | Hex | Role |
|---|---|---|
| Cash Green | `#00E013` | Logo square, video play buttons, brand panels |
| Classic Green | `#00D632` | Focus outline (`outline: 2px solid`), links on legal pages, older brand assets |
| Toggle Green | `#00D54B` | Checked toggle track and border |
| Link Green | `#128A00` | Text links in FAQ answers and legal sidebar (passes contrast on white) |
| Black | `#000000` | Text, filled buttons, dark sections |
| White | `#FFFFFF` | Page background, text on black and green |
| Stone | `#E8E5DB` | Carousel arrow buttons and soft chips (warm neutral) |
| Grey 800 | `#4B4B4B` | Strong secondary text |
| Grey 700 | `#5C5C5C` | Body text on light surfaces |
| Grey 500 | `#737373` | Captions, disclaimers, metadata |
| Grey 300 | `#D8D8D8` | Input borders |
| Grey 200 | `#E5E5E5` | Dividers, card borders |
| Grey 100 | `#F0F0F0` | Subtle surfaces, input fill |
| Grey 50 | `#F8F8F8` | Page sections, quiet backgrounds |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#00D632` | Payment sent, completed states |
| Error | `#E0002B` | Failed payment, field errors (approximate) |
| Warning | `#FFB800` | Pending, review needed (approximate) |
| Info | `#000000` | Neutral notices use black text, not blue |

### Mode notes

- **Light (default on web):** white page, black type, green used for one action or brand block per view.
- **Dark (app):** near-black surfaces (`#000000` page, `#1D1D1D` cards, approximate), white text, green unchanged.

## 3. Typography

Cash App uses its own family, Cash Sans, in three cuts. All are proprietary and loaded only on Cash App properties.

| Family | Use | Google Fonts fallback |
|---|---|---|
| Cash Sans Wide | Headlines, amounts, big numbers | Archivo (use `font-stretch: 112%` or the Expanded width if available) |
| Cash Sans | Body, buttons, UI labels | Inter |
| Cash Sans Mono | Account numbers, routing numbers, receipts | DM Mono |

Stack used on the site:

```css
font-family: "Cash Sans", "Helvetica Neue", Helvetica, sans-serif;
--headline-font: "Cash Sans Wide", "Cash Sans", "Helvetica Neue", Helvetica, sans-serif;
```

### Scale

The marketing site scales everything from a fluid root (`font-size: clamp(...)`) and sets headings in `em`. At desktop width the root is roughly 16px, so:

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Amount (app keypad) | 72px | 500 | 1.0 | -0.02em |
| Hero / H1 | 56px (3.5em) | 400 | 0.95 | -0.03em |
| H2 | 40px (2.5em) | 400 | 1.1 | -0.03em |
| H3 | 28px (1.75em) | 400 | 1.1 | -0.03em |
| H4 | 24px (1.5em) | 400 | 1.1 | -0.03em |
| Body | 18px (1.125em) | 400 | 1.4 | -0.03em |
| Button | 14px (0.875em) | 400 | 1.0 | -0.02em |
| Disclaimer | 12px (0.75em) | 400 | 1.2 | -0.02em |

### Rules

- Sentence case everywhere. No all-caps headlines.
- Headlines stay at weight 400. Use 500-700 only for amounts and short labels.
- Tight negative tracking on all display sizes.
- Use tabular figures for balances and lists of amounts.
- The dollar sign sits tight to the number (`$25`) and to $cashtags (`$jack`).

## 4. Logo & Brand Mark

The logo is a rounded green square containing a white dollar sign with a single vertical stroke that breaks above and below the S. The square uses a smooth, continuous corner (squircle-like), not a simple border radius.

- **Primary:** white `$` on Cash Green square.
- **Wordmark:** "Cash App" set in Cash Sans, black on light or white on dark, placed to the right of the square when used as a lockup.
- **Clear space:** at least 25% of the square's width on all sides.
- **Minimum size:** 24px square on screen.
- **On photos:** keep the square intact; do not knock the green out.

Do not:

- Recolour the square (no black or grey squares on marketing; a monochrome version is for legal or partner use only).
- Stretch, rotate or add shadows to the mark.
- Put the `$` alone without the square as a logo.
- Use the old circular or outlined versions.

## 5. Components

### Buttons

The site's themed button:

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  padding: 1em 1.42em;
  border-radius: 100px;
  font: 400 0.875em/1 "Cash Sans", sans-serif;
  letter-spacing: -0.02em;
  transition: all 0.3s;
}
.button--filled { background: #000; color: #fff; }
.button--filled:hover { background: #fff; color: #000; }
.button--outlined { background: transparent; color: currentColor; border: 1px solid; }
.button--outlined:hover { background: currentColor; color: #fff; }
.button--green { background: #00E013; color: #000; }
```

- **Primary:** black pill with white text on light sections, white pill with black text on dark or green panels.
- **Brand action (app):** full-width green pill, about 52px tall, label "Pay" or "Request" in white or black.
- **Outlined:** 1px border in the current text colour.
- **Arrow button:** includes a small 12px right arrow after the label.
- **Focus:** `outline: 2px solid #00D632; outline-offset: 2px`.
- **Disabled:** 40% opacity, no hover swap.

### Keypad (app signature)

- Full screen, centred amount in Cash Sans Wide at 64-80px.
- 3x4 number grid, digits about 28px weight 500, no visible key borders.
- Two pills at the bottom: "Request" and "Pay", equal width, 12px gap.
- In current versions the keypad screen is green with white type; older versions used white. Pick green for brand demos (approximate).

### Inputs

- Height 48-52px, `border-radius: 12px`, fill `#F0F0F0`, no border at rest, 1px `#000` border or green ring on focus.
- Labels above in 14px weight 500.
- The $cashtag field shows a fixed `$` prefix in the input.

### Cards

- Media cards: `border-radius: 0.75em` (about 20px at desktop), no border, image fills the card, text overlaid or below.
- Content cards: white, 1px `#E5E5E5` border or shadow `0 4px 12px #0000001a`, 20px padding.
- Cash App Card art is shown as a physical card at a slight angle with a soft shadow.

### Navigation

- Web header: logo square at left, links and "Log in" / "Sign up" at right. "Sign up" is a black pill. Height about 64px, white or transparent over the hero.
- App tab bar: five icons (home balance, card, pay `$`, investing, activity), solid when active, outline when inactive, no labels in some versions.

### Lists (activity feed)

- Row: 40px circular avatar with initials or photo, name in 16px weight 500, note in 14px grey `#737373`, amount right-aligned.
- Incoming amounts in green with a `+` sign; outgoing in black.
- Dividers 1px `#E5E5E5`, rows about 64px tall.

### Badges and chips

- Pill shape, 12-14px text, fill `#F0F0F0` or `#E8E5DB`, black text.
- Status chips: green fill with black text for "Completed", grey for "Pending".

### Modals and sheets

- App: bottom sheets with 20px top radius, drag handle 36x5px grey.
- Web: centred modal, 20px radius, white, 24-32px padding, black overlay at 50%.

## 6. Layout & Spacing

- Max page width `1440px`, content typically 1200-1280px.
- Breakpoints from the CSS: `760px` (tablet), `1024px` (desktop), `1440px` (wide).
- Gutters: 16-20px mobile, 32-48px tablet, 64px+ desktop.
- Section padding: 64px mobile, 96-128px desktop.
- Grid: 12 columns on desktop; feature sections alternate a large media card with a text block.
- Galleries scroll horizontally with round `#E8E5DB` arrow buttons.
- Type is fluid: the root size grows with viewport width via `clamp()`, so headings scale with the screen.
- Density is low on marketing (one idea per section) and medium in the app.

## 7. Depth, Elevation & Motion

Cash App is mostly flat. Shadows are light and neutral.

| Token | Value | Use |
|---|---|---|
| Soft | `0 2px 8px #00000014` | Small chips, toggles |
| Card | `0 4px 12px #0000001a` | Content cards |
| Raised | `0 8px 24px #0000001f` | Popovers, floating card art |
| Glow | `0 0.25rem 3.75rem #00000040` | Large hero media |

Motion:

- Button and link swaps: `all .3s` with default ease.
- Fades: `opacity .2s ease-in-out`.
- Section reveals: `opacity .6s, transform .6s` with a short upward move (about 24px).
- App: amounts count up when a payment lands; the keypad digit bumps slightly on press.

## 8. Iconography & Imagery

- **Icons:** simple filled glyphs with rounded ends, 24px grid, black or white. Outline style for inactive tab states.
- **Arrow:** a 12px right arrow with rounded caps used inside buttons.
- **Photography:** real people in bright, natural light, often close crops, streetwear and everyday settings. Colour is punchy, not muted.
- **Product shots:** phones and Cash App Cards at slight angles on flat colour backgrounds (green, black, stone).
- **Stickers and custom cards:** playful drawings and user-made card designs show up in feature sections.

## 9. Voice & Microcopy

Tone: short, plain, a little cheeky. Speaks to the reader as "you", talks about money as everyday life.

- Sentence case for headings and buttons.
- Lead with the benefit, then the fine print in a disclaimer.
- Use the dollar sign and numbers directly.

Sample strings (patterns, not quotes of live claims):

- "The way money should work"
- "Send money for free"
- "Get started"
- "Sign up" / "Log in" / "Pay" / "Request"
- "You sent $25 to $alex"
- "Payment completed"
- "See legal disclaimers"

Legal disclaimers sit under sections in 12px grey, marked with `*` and linked from the claim.

## 10. Do's and Don'ts

**Do**

- Use one bold block of Cash Green per screen and let it be the hero.
- Set headlines and amounts in a wide typeface at regular weight with tight tracking.
- Use pill buttons with a colour-swap hover.
- Keep the background white or black and the layout flat.
- Show amounts big and centred.
- Use `#128A00` for green text links on white so they pass contrast.

**Don't**

- Don't add gradients to the green or mix several greens on one screen.
- Don't use square or lightly rounded buttons.
- Don't use bold 700 headlines in long sentences.
- Don't put small grey text on green.
- Don't use blue for links or info states.
- Don't quote rates, limits or user counts without a dated disclaimer.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Cash App. White page (`#FFFFFF`), black text (`#000000`), greys `#5C5C5C` for body and `#737373` for captions, dividers `#E5E5E5`, soft surfaces `#F0F0F0`. Brand green is `#00E013` (logo, hero panels, primary app action); use `#00D632` for focus rings and `#128A00` for green text links. Headlines use a wide sans (Cash Sans Wide, fallback Archivo with `font-stretch: 112%`) at weight 400, tracking -0.03em, line-height 0.95-1.1. Body is Cash Sans (fallback Inter) 18px weight 400, tracking -0.03em. All buttons are pills (`border-radius: 100px`, padding `1em 1.42em`, 14px label) that swap colours on hover over 0.3s: black fill with white text on light sections, white fill with black text on dark or green. Cards and media use 20px radius, no border, light shadow `0 4px 12px #0000001a`. Show money amounts very large and centred, with the `$` tight to the number. Activity lists use 40px round avatars, name and note on the left, amount on the right (green with `+` for incoming). Layout max width 1440px, breakpoints 760px and 1024px, 96px section spacing. Copy is short, sentence case, direct.

```css
:root {
  --cash-green: #00E013;
  --cash-green-classic: #00D632;
  --cash-green-toggle: #00D54B;
  --cash-link: #128A00;
  --cash-black: #000000;
  --cash-white: #FFFFFF;
  --cash-stone: #E8E5DB;
  --cash-grey-800: #4B4B4B;
  --cash-grey-700: #5C5C5C;
  --cash-grey-500: #737373;
  --cash-grey-300: #D8D8D8;
  --cash-grey-200: #E5E5E5;
  --cash-grey-100: #F0F0F0;
  --cash-grey-50: #F8F8F8;
  --cash-font: "Cash Sans", "Inter", "Helvetica Neue", Helvetica, sans-serif;
  --cash-font-wide: "Cash Sans Wide", "Archivo", "Helvetica Neue", sans-serif;
  --cash-font-mono: "Cash Sans Mono", "DM Mono", monospace;
  --cash-radius-sm: 6px;
  --cash-radius-md: 12px;
  --cash-radius-lg: 20px;
  --cash-radius-pill: 100px;
  --cash-shadow-soft: 0 2px 8px #00000014;
  --cash-shadow-card: 0 4px 12px #0000001a;
  --cash-shadow-raised: 0 8px 24px #0000001f;
  --cash-tracking: -0.03em;
  --cash-transition: all 0.3s;
}
```

---

Values are observed from the public website and app; this file is an unofficial reference and is not affiliated with or endorsed by Block, Inc. or Cash App.

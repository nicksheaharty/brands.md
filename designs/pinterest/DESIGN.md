---
name: Pinterest
slug: pinterest
url: https://pinterest.com
category: Social
tagline: "Masonry grid of rounded image pins on warm white, with one red Save button."
updated: 2026-11-16
appStoreId: 429047995
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Pinterest Red
    hex: "#E60023"
    role: Logo, primary buttons (Save, Log in, Join), brand text
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards
  - name: Black
    hex: "#000000"
    role: Default text and icons
  - name: Gray 100
    hex: "#E5E5E0"
    role: Secondary buttons, search field, chips
  - name: Gray 50
    hex: "#F6F6F3"
    role: Subtle backgrounds, hover wash
  - name: Gray 300
    hex: "#62625B"
    role: Subtle text, meta
  - name: Gray 400
    hex: "#33332E"
    role: Selected chip and tab background
  - name: Gray 150
    hex: "#C8C8C1"
    role: Decorative borders, dividers
  - name: Gray 200
    hex: "#91918C"
    role: Interactive borders, placeholder
  - name: Gray 25
    hex: "#FBFBF9"
    role: Warm off-white surfaces
  - name: Blue 400
    hex: "#435EE5"
    role: Education, info, focus
  - name: Purple 500
    hex: "#91289F"
    role: Recommendations
  - name: Green 500
    hex: "#097239"
    role: Success
  - name: Orange 500
    hex: "#B24700"
    role: Warning
  - name: Red 500
    hex: "#B60C0C"
    role: Errors
fonts:
  display:
    family: "Pin Sans"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Pin Sans"
    fallback: "Inter"
    weights: [400, 600]
  mono:
    family: "SF Mono / Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 60, weight: 600, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading 1, size: 36, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Heading 2, size: 28, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Heading 3, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 8, md: 16, lg: 32, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Surface, value: "0 0.5px 3px rgba(0,0,0,0.2)" }
  - { name: Raised, value: "0 1.5px 6px rgba(0,0,0,0.2)" }
  - { name: Floating, value: "0 3px 12px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F3"
  text: "#000000"
  muted: "#62625B"
  border: "#E5E5E0"
  accent: "#E60023"
  accentText: "#FFFFFF"
  radius: 16
  buttonStyle: pill
---

# Pinterest

## 1. Visual Theme & Atmosphere

Pinterest is a wall of pictures. The home feed is a masonry grid of portrait images ("Pins") with rounded corners, sitting on a white page with almost no chrome. Everything else stays out of the way: a slim header with a red "P" logo and a big pill search bar, grey pill buttons, and one red action, **Save**.

The design system is **Gestalt**, Pinterest's open-source React library. Its current tokens (read from pinterest.com today) use a warm grey ramp (`#F6F6F3`, `#E5E5E0`, `#62625B`) instead of cool greys, plus Pinterest Red `#E60023`.

What makes it recognisable:

- **Masonry grid.** Columns of equal width, pins of varying height, 16px corners, small gaps. Images are the content and the UI.
- **Red Save.** A red pill button appears on hover over each pin and on every closeup. Red is used for one action at a time.
- **Pills everywhere.** Buttons, search, chips and tabs are fully rounded.
- **Warm neutrals.** Greys lean slightly yellow-green, which makes photos feel warmer and the page softer.
- **Pin Sans.** A custom sans (introduced in 2024) with friendly round shapes and semibold headings.
- **Minimal text.** Pin titles are optional on the grid; most labels are a single word.

Mood words: inspiring, visual, calm, personal, optimistic.

## 2. Color Palette & Roles

Values are Gestalt tokens read from the live pinterest.com CSS today (`--base-color-*`, `--sema-color-*`).

| Name | Token | Hex | Role |
|---|---|---|---|
| Pinterest Red | `base-color-pinterest` | `#E60023` | `background-primary`, `text-primary`, logo |
| White | `grayscale-0` | `#FFFFFF` | `background-default` |
| Gray 25 | `grayscale-25` | `#FBFBF9` | Off-white surfaces |
| Gray 50 | `grayscale-50` | `#F6F6F3` | `background-subtle` |
| Gray 100 | `grayscale-100` | `#E5E5E0` | `background-secondary`: secondary buttons, search, chips |
| Gray 150 | `grayscale-150` | `#C8C8C1` | Decorative borders, disabled borders |
| Gray 200 | `grayscale-200` | `#91918C` | Interactive borders (inputs) |
| Gray 250 | `grayscale-250` | `#74746C` | Muted icons |
| Gray 300 | `grayscale-300` | `#62625B` | `text-subtle` |
| Gray 350 | `grayscale-350` | `#494943` | Dark decorative borders |
| Gray 400 | `grayscale-400` | `#33332E` | `background-selected` (selected chip, active tab pill) |
| Gray 450 | `grayscale-450` | `#242421` | Inverse wash base |
| Gray 475 | `grayscale-475` | `#181816` | Dark surfaces |
| Black | `grayscale-500` | `#000000` | `text-default`, `background-inverse` |

### Semantic

| State | Strong | Weak fill | Text |
|---|---|---|---|
| Info / education | `#435EE5` (blue 400) | `#EBEEFF` | `#2B48D4` |
| Recommendation | `#91289F` (purple 500) | `#FDEBFF` | |
| Success | `#097239` (green 500) | `#E3F7EC` | `#097239` |
| Warning | `#B24700` (orange 500) | `#FFEDE0` | `#B24700` |
| Error | `#B60C0C` (red 500) | `#FFEBEB` | `#B60C0C`, border `#DD0E0E` |
| Ads "Performance+" | `#774FC4` | `#EBE2FD` | |

### Red ramp (for hover and pressed)

Primary red hover is about `#B60000` and pressed about `#8C0000` in older Gestalt; current hover is a darker red near `#C9001F` (approximate). Never use red for large backgrounds.

### Dark mode

Gestalt has a full dark theme: background `#000000` or `#181816`, secondary background `#33332E`, text `#FFFFFF`, subtle text `#C8C8C1`, and the same Pinterest Red for primary actions. Elevated washes use `rgba(36,36,33,0.5-0.95)` with background blur.

### Image overlays

Text on images uses bottom fades from transparent to `rgba(0,0,0,0.4)` (weak) or `rgba(0,0,0,0.8)` (strong). Hovered pins get a dark wash around `rgba(0,0,0,0.3-0.4)` (approximate).

## 3. Typography

**Family:** `"Pin Sans"`, with fallbacks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif`. Japanese uses SF Pro JP. Code: `"SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Consolas, monospace`.

**Licensing:** Pin Sans is proprietary. Use **Inter** as the free fallback (it shares the friendly, open proportions); system UI fonts also work, which is what Pinterest used before Pin Sans.

### Scale (Gestalt base font sizes)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display (marketing hero) | 60-72px | 600 | 1.1 |
| Heading 1 | 36px | 600 | 1.2 |
| Heading 2 | 28px | 600 | 1.25 |
| Heading 3 | 24px | 600 | 1.25 |
| Heading 4 | 20px | 600 | 1.3 |
| Body large / button | 16px | 400 / 600 | 1.5 / 1.25 |
| Body | 14px | 400 | 1.43 |
| Caption / meta | 12px | 400 | 1.33 |

The base scale is 12, 14, 16, 20, 24, 28, 36, 48, 60, 72px.

### Rules

- Sentence case everywhere ("Create Pin", "Save", "Log in").
- Headings are semibold (600), not black-weight.
- Pin titles on the grid are 14px/600 truncated to two lines; creator name 12px/400 subtle.
- Large marketing headlines can switch color word by word (for example "Get your next" in black and a rotating idea in a pastel or red).

## 4. Logo & Brand Mark

The logo is the **Pinterest "P" badge**: a white script "P" whose descender forms a pin, inside a red circle. The wordmark "Pinterest" is a custom script with the same "P".

- **Color:** Pinterest Red `#E60023` with white. Monochrome white or black for special cases.
- **App icon:** red circle badge on a white background.
- **Clear space:** at least half the badge width on all sides.
- **Minimum size:** badge 16px on screen; wordmark about 60px wide.

Misuse:

- Do not use the badge without its circle except where the guidelines show the white "P" on a red field.
- Do not recolor the badge (no gradients or other reds).
- Do not add shadows, outlines or stickers.
- Do not reset "Pinterest" in Pin Sans or another font.

## 5. Components

### Buttons (Gestalt Button)

Sizes: sm 32px, md 40px, lg 48px. Fully rounded (pill). Label 16px/600 (14px for sm). Horizontal padding 12-16px.

| Color | Background | Text | Use |
|---|---|---|---|
| red | `#E60023` | `#FFFFFF` | Save, Log in, Continue, Join |
| gray | `#E5E5E0` | `#000000` | Sign up (logged out), Follow, Share, secondary actions |
| transparent | none | `#000000` | Tertiary |
| white | `#FFFFFF` | `#000000` | On images and dark backgrounds |
| dark gray (selected) | `#33332E` | `#FFFFFF` | Toggled states |

States: hover darkens one step (gray hover around `#D9D9D3`, red hover darker red), pressed scales to 0.97 with a deeper fill, focus shows a 4px ring in `#435EE5` at partial alpha or a double ring of white and blue. Disabled: `#E5E5E0` with `#91918C` text.

```css
.btn-save {
  font: 600 16px/20px var(--brand-font);
  background: #E60023; color: #fff;
  border: 0; border-radius: 999px;
  height: 48px; padding: 0 16px;
  transition: transform 100ms ease-out, background-color 100ms linear;
}
.btn-save:hover { background: #C9001F; }
.btn-save:active { transform: scale(.97); }
```

### Icon buttons

Circular, 40-48px, transparent or white with a black icon. On pins they sit over the image (share, more "...") with white fill. Header icons (notifications, messages) are 48px circles with hover `#F6F6F3`.

### Search bar (signature)

Full-width pill in the header, 48px tall, fill `#E5E5E0` (approximate; older builds used `#E9E9E9`), magnifier icon at left in `#62625B`, placeholder "Search". Focus adds a 4px light blue ring and opens a large white panel with "Recent searches" pills and "Ideas for you" image tiles.

### Pin card (signature)

- Image with 16px radius, natural aspect ratio, no border, no shadow.
- Hover: dark wash over the image, red "Save" pill top right, board selector top left ("Profile" with a chevron), small white circular share and more buttons bottom right, and a link chip with the domain bottom left.
- Below the image (optional): title 14px/600 up to two lines, creator avatar 24-32px with name 12px.
- Video pins show a small duration pill; idea pins show a page count.

### Masonry grid

- Column width 236px with 16px gutters on web (classic), adapting count to viewport. On mobile two columns with 8px gaps.
- Items are placed in the shortest column. Content area centered with auto margins.

### Header

Logged out: red "P" logo and "Pinterest" wordmark left, links "Explore", "Shop"; right side "About", "Businesses", "Create", "News", a red "Log in" pill and a grey "Sign up" pill. Logged in: logo, "Home" and "Create" tabs (selected tab is a black pill with white text), the search pill filling the middle, notification and message icons, and the user avatar. Header height about 80px, white, no border.

### Tabs and chips

- Header tabs: pill-shaped, 48px tall, selected black `#000000` (or `#33332E`) with white text.
- Filter chips: pill, 40px, `#E5E5E0` fill, selected `#33332E` with white text.
- Underline tabs on profiles: 16px/600, active with a 3px black bar under the label.

### Inputs

TextField: 48px tall, 16px radius, 2px border `#91918C` (interactive), white fill, 16px text, label above at 12-14px. Focus: border plus a 4px blue focus ring. Error: red border `#DD0E0E` and helper text `#B60C0C`. The signup form asks for "Email", "Password" ("Use 8 or more letters, numbers and symbols") and "Birthday".

### Modals and sheets

White, 32px radius on web (signup modal), 24px padding, centered logo and heading 32-36px/600, full-width red "Continue" pill and a white "Continue with Google" button. Scrim `rgba(0,0,0,0.6)`. On mobile, bottom sheets with 24-32px top corners.

### Board cards

A collage of three images (one large left, two stacked right) with 16px outer radius, board name 16px/600 below and "12 Pins" style meta in subtle text.

## 6. Layout & Spacing

- **Spacing tokens:** 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, ... 64px (`--sema-space-*`, 4px rhythm).
- **Radii tokens:** 4, 6, 8, 12, 16, 20, 24, 28, 32px, pill 999px, circle 50%.
- **Grid:** masonry as above; content fills the viewport with 16-24px side padding.
- **Breakpoints (Gestalt, approximate):** sm 576px, md 768px, lg 1312px.
- **Closeup page:** two-column card (image left, details right) with 32px radius, max width about 1016px, shadow floating.
- **Density:** generous gaps between pins but very little text, so the page feels full yet calm.

## 7. Depth, Elevation & Motion

- Shadows (live tokens): surface `0 0.5px 3px rgba(0,0,0,0.2)`, raised `0 1.5px 6px rgba(0,0,0,0.2)`, floating `0 3px 12px rgba(0,0,0,0.2)`.
- Background blur tokens: weak 8px, default 24px, strong 64px, used for translucent bars over images and the mobile tab bar.
- Pins have no shadow on the grid; closeups and popovers float.
- **Motion:** quick and soft. Buttons compress to about 0.97 on press over 100ms. Pins fade in as images load. Closeups expand from the clicked pin. Respect reduced motion.

## 8. Iconography & Imagery

- **Icons:** Gestalt icons, solid filled glyphs with rounded geometry, 12-24px, black or subtle grey. Active tab icons fill in; inactive ones are outlines on mobile.
- **Imagery:** the feed is user and creator content: food, home decor, fashion, beauty, travel, DIY. Bright, natural, mostly portrait 2:3.
- **Marketing:** collages of rounded pins in pastel blocks (soft yellow, pink, teal, lilac) with large headlines.
- **No borders around photos.** Let the rounded image edge define the card.

## 9. Voice & Microcopy

Warm, encouraging, brief. Focus on ideas and making things.

- "Create the life you love on Pinterest" (read on the live site today)
- "Join Pinterest for free", "I already have an account", "Continue with Google"
- "Search for easy dinners, fashion, etc."
- Actions: "Save", "Saved", "Create Pin", "Create board", "Follow", "Share", "More ideas"
- Seasonal: "Make holiday magic happen" (live today)

Sentence case, no exclamation marks in UI, friendly second person.

## 10. Do's and Don'ts

**Do**

- Let images lead: masonry grid, 16px rounded corners, no borders or shadows on pins.
- Use Pinterest Red `#E60023` for one primary action per view, usually "Save".
- Make buttons, search and chips pill-shaped.
- Use the warm grey ramp (`#F6F6F3`, `#E5E5E0`, `#62625B`) for secondary UI.
- Keep text short; titles truncate at two lines.

**Don't**

- Don't use red for backgrounds, headers or decorative fills.
- Don't put drop shadows on grid pins.
- Don't use cool blue-greys or pure grey `#808080` neutrals.
- Don't add heavy borders or square corners to images.
- Don't crowd the header with many text links when logged in.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Pinterest. White page, black text `#000000`, subtle text `#62625B`. Font: `"Pin Sans", Inter, -apple-system, "Segoe UI", Roboto, sans-serif`; headings 600, body 14-16px at 400. Header 80px, white, no border: red "P" logo, black pill tabs ("Home", "Create"), a 48px pill search bar filled `#E5E5E0` with "Search" placeholder, round icon buttons and an avatar. The main view is a masonry grid of 236px columns with 16px gaps; each pin is an image with 16px radius, no border or shadow, optional two-line 14px/600 title below. On hover, darken the image and show a red `#E60023` "Save" pill (48px tall, 16px/600 white text) at top right and white circular icon buttons at bottom right. Secondary buttons are pills filled `#E5E5E0`; selected chips are `#33332E` with white text. Inputs are 48px with 16px radius and a 2px `#91918C` border. Modals are white with 32px radius. Shadows only on floating UI: `0 3px 12px rgba(0,0,0,0.2)`. Buttons compress to 0.97 on press.

```css
:root {
  --brand-red: #E60023;
  --brand-red-hover: #C9001F;
  --brand-white: #FFFFFF;
  --brand-black: #000000;
  --brand-gray-25: #FBFBF9;
  --brand-gray-50: #F6F6F3;
  --brand-gray-100: #E5E5E0;
  --brand-gray-150: #C8C8C1;
  --brand-gray-200: #91918C;
  --brand-gray-250: #74746C;
  --brand-gray-300: #62625B;
  --brand-gray-350: #494943;
  --brand-gray-400: #33332E;
  --brand-gray-450: #242421;
  --brand-gray-475: #181816;
  --brand-info: #435EE5;
  --brand-recommendation: #91289F;
  --brand-success: #097239;
  --brand-warning: #B24700;
  --brand-error: #B60C0C;
  --brand-error-border: #DD0E0E;
  --brand-font: "Pin Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  --brand-font-mono: "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Consolas, monospace;
  --brand-radius-sm: 8px;
  --brand-radius-md: 16px;
  --brand-radius-lg: 24px;
  --brand-radius-xl: 32px;
  --brand-radius-pill: 999px;
  --brand-shadow-surface: 0 0.5px 3px rgba(0,0,0,0.2);
  --brand-shadow-raised: 0 1.5px 6px rgba(0,0,0,0.2);
  --brand-shadow-floating: 0 3px 12px rgba(0,0,0,0.2);
  --brand-blur-weak: 8px;
  --brand-blur: 24px;
  --brand-blur-strong: 64px;
  --brand-grid-column: 236px;
  --brand-grid-gap: 16px;
  --brand-press-scale: 0.97;
  --brand-duration: 100ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Pinterest.

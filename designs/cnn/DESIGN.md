---
name: CNN
slug: cnn
url: https://cnn.com
category: News
tagline: "Black header, red CNN box, one sans family and tight grids of photo-led headlines."
updated: 2026-11-16
appStoreId: 331786748
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: CNN Red
    hex: "#CC0000"
    role: Logo box, breaking labels, container title rule, live dot
  - name: Black
    hex: "#0C0C0C"
    role: Header, footer, headlines, body text (neutral-800)
  - name: White
    hex: "#FFFFFF"
    role: Page background, header text
  - name: Neutral 600
    hex: "#404040"
    role: Dropdown separators, secondary dark text
  - name: Neutral 500
    hex: "#6E6E6E"
    role: Timestamps, credits, link hover
  - name: Neutral 300
    hex: "#E6E6E6"
    role: Rules, nav link colour on black, image placeholders
  - name: Secondary Red
    hex: "#FF3F3F"
    role: Brand secondary, red on dark backgrounds
  - name: Tertiary Red
    hex: "#A4001E"
    role: Brand tertiary, deep red accents
  - name: Red 500
    hex: "#D50000"
    role: Live updates label text
  - name: Neutral 400
    hex: "#B1B1B1"
    role: Edition picker, disabled
  - name: Neutral 200
    hex: "#F8F8F8"
    role: Ad slot and subtle fills
  - name: Layout Grey
    hex: "#FAFAFA"
    role: Primary layout background band
  - name: Politics Blue
    hex: "#3061F3"
    role: Politics section brand colour
  - name: Business Teal
    hex: "#66C9AF"
    role: Business section brand colour
fonts:
  display:
    family: "CNN Sans Display"
    fallback: "Inter"
    weights: [400, 500, 700]
  body:
    family: "CNN Sans Display"
    fallback: "Inter"
    weights: [400, 700]
typeScale:
  - { role: Article headline, size: 42, weight: 700, lineHeight: 1.14, tracking: "0" }
  - { role: Hero headline, size: 36, weight: 400, lineHeight: 1.17, tracking: "0" }
  - { role: Zone title, size: 30, weight: 700, lineHeight: 1.0, tracking: "0" }
  - { role: Subheader H2, size: 30, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Lead card title, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Card headline, size: 16, weight: 500, lineHeight: 1.375, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Header scrolled, value: "0 3px 8px rgba(106,115,129,0.06), 0 6px 12px rgba(106,115,129,0.16)" }
  - { name: Raised, value: "0 12px 20px rgba(106,115,129,0.22)" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F8F8"
  text: "#0C0C0C"
  muted: "#6E6E6E"
  border: "#E6E6E6"
  accent: "#CC0000"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# CNN

## 1. Visual Theme & Atmosphere

CNN.com is a black-and-white news grid with a single red signature. A near-black header (`#0C0C0C`) holds the red CNN box at the left. Below it, the homepage is a white page of tightly packed zones: one dominant hero image with a large headline, then columns of small text-only headlines, thumbnail lists and video strips. Everything is set in one proprietary sans, CNN Sans, so hierarchy comes from size and weight rather than font changes.

What makes it recognisable:

- **The red box.** `#CC0000` square with the white looping "CNN" letters, in the header, footer and favicon.
- **Black chrome.** Header and footer are `#0C0C0C` with `#E6E6E6` link text.
- **One family.** CNN Sans Display for everything from 42px headlines to 10px labels.
- **Red short rule on section titles.** Container titles sit on a 1px `#E6E6E6` line with a 16px-wide red segment at the left that grows on hover.
- **Text-heavy columns.** Many headlines appear as plain lists at 16px/500, separated by whitespace, with no images.
- **Labels on images.** Small uppercase blocks over photos: red "BREAKING", black "EXCLUSIVE", white "LIVE UPDATES" with a red dot.

Mood: urgent, high-volume, utilitarian.

## 2. Color Palette & Roles

CNN's design system exposes primitive tokens (`--primitive-color-*`) and semantic theme tokens (`--theme-*`).

| Name | Hex | Token | Role |
|---|---|---|---|
| CNN Red | `#CC0000` | brand-primary | Logo, breaking label, title rule, button hover colour |
| Secondary Red | `#FF3F3F` | brand-secondary / red-400 | Red on black, live accents |
| Tertiary Red | `#A4001E` | brand-tertiary | Deep red fills |
| Neutral 800 | `#0C0C0C` | neutral-800 | Header, footer, text |
| Neutral 700 | `#262626` | neutral-700 | Mobile nav item background |
| Neutral 600 | `#404040` | neutral-600 | Dropdown separators |
| Neutral 500 | `#6E6E6E` | neutral-500 | Credits, link hover, secondary text |
| Neutral 400 | `#B1B1B1` | neutral-400 | Edition picker, disabled |
| Neutral 300 | `#E6E6E6` | neutral-300 | Rules, header link text, placeholders |
| Neutral 200 | `#F8F8F8` | neutral-200 | Ad slots, subtle fills |
| Layout grey | `#FAFAFA` | primary-layout-color | Background bands |
| White | `#FFFFFF` | neutral-100 | Page |

### Section brand colours

Used for section badges and some vertical headers, never for general UI:

| Section | Hex |
|---|---|
| Politics | `#3061F3` |
| Business | `#66C9AF` |
| Travel | `#F06C00` |
| Underscored | `#6A29D5` |

### Ramps

The system has full 100-800 ramps for red (`#FFD5D5` to `#450000`, with `#D50000` at 500), orange, yellow (`#F0B100` at 400), green (`#3DA672` at 500), blue (`#2152D5` at 500) and teal. Use them for data graphics and election maps.

### Semantic

- Breaking: white on `#CC0000`.
- Live / updates: `#D50000` text or red dot on white.
- Opinion, analysis, trending labels: `#CC0000` text on white.
- Disclaimer boxes: `#E6E6E6` background, `#4D4D4D` text, links `#6A29D5`.

### Dark mode

The website stays light, with black chrome. Video pages and some special pages switch to a black page with white text and `#B1B1B1` metadata. The app supports system dark mode (approximate).

## 3. Typography

**Family:** CNN Sans, a proprietary grotesque commissioned by CNN, loaded as `cnn_sans_display` with fallback `helveticaneue, Helvetica, Arial, Utkal, sans-serif`. A condensed cut (`cnn_sans_condensed`) appears in some graphics, and Noto Serif is available for a few editorial treatments. Closest free substitute: **Inter**.

**Weights:** 400 regular, 500 medium (card headlines, nav), 700 bold (headlines, titles).

### Scale (desktop, from theme tokens)

| Role | Size / line height | Weight |
|---|---|---|
| Article headline | 42 / 48px | 700 |
| Hero headline (homepage lead) | 36 / 42px | 400 |
| Section page headline | 36 / 42px | 700 |
| Zone title | 24 / 30px, 30 / 30px at medium+ | 700 |
| Subheader H2 | 30 / 36px | 700 |
| Subheader H3 | 24 / 30px | 700 |
| Subheader H4 | 20 / 26px | 700 |
| Lead card title | 20 / 24px (16px mobile) | 700 |
| Card headline | 16px | 500 |
| Container title | 16px | 700 |
| Body paragraph | 16 / 25.6px (14 / 22.75px small) | 400 |
| Caption | 12 / 18px | 400 |
| Image label | 10px, uppercase | 700 |
| Credit | 10px | 400 |

The primitive scale runs 10, 12, 14, 16, 18, 20, 24, 30, 32, 36, 40, 42, 48, 56, 64px with matching pixel line heights.

### Rules

- Sentence case for headlines; labels uppercase.
- Letter spacing is 0 for text; labels use 0.5-1.5px.
- Links in body text are underlined (`text-underline-offset: 4px`), same colour as text; hover goes to `#6E6E6E` with no underline.
- Headlines on the homepage underline on hover.

## 4. Logo & Brand Mark

The CNN logo is the looping, outlined "CNN" letterform designed in 1980 (Anthony Guy Bost), where a continuous double line forms all three letters. On the web it appears in white inside a red `#CC0000` square (40px in header and footer).

- **Primary:** white letters in a red box.
- **Alternate:** red letters on white, or white letters on black.
- **Clear space:** keep at least 25% of the box width around the box.
- **Minimum size:** 24px box on screen.
- **App icon:** red square, white CNN letters, which matches the web favicon.

Misuse: don't stretch the letters, don't place the red box on red photos, don't redraw the outline in a font.

## 5. Components

### Header

- Height about 56-64px, background `#0C0C0C`. Red logo box 40px at left.
- Section links `#E6E6E6`, 14-16px weight 500, line-height 40px; hover white.
- Right side: "Watch", "Listen", "Live TV", search icon, outlined "Log In" button (white 1px border, white text, 4px radius).
- Dropdowns: `#0C0C0C` panels, 4px radius, `1px solid #404040` separators, shadow `0 3px 8px #6a73810f, 0 6px 12px #6a738129`.
- On scroll the header gets the same soft shadow.

### Homepage zones

- Zone title 24-30px/700 black, with optional link arrow.
- Container title 16px/700 above a 1px `#E6E6E6` rule that has a 16px red segment at its left end.
- Lead package: big image (16:9) with the headline beneath at 36px/400, or overlaid in white on a gradient.
- Text lists: 16px/500 black headlines, 16px vertical gaps, no bullets; hover underline.
- Thumbnail rows: 1:1 or 16:9 image left (about 100-150px), headline right.
- Images on hover fade to 50% over black.

```css
.container__title {
  font: 700 16px/1.25 cnn_sans_display, Inter, Helvetica, sans-serif;
  color: #0C0C0C;
  border-bottom: 1px solid #E6E6E6;
  position: relative;
  padding-bottom: 8px;
}
.container__title::after {
  content: "";
  position: absolute; left: 0; bottom: -1px;
  width: 16px; height: 1px;
  background: #CC0000;
  transition: width .3s ease;
}
.container__title:hover::after { width: 100%; }
```

### Image labels (signature)

Absolute bottom-left on images, `padding: 4px 8px`, 10px/700 uppercase:

| Type | Text | Background |
|---|---|---|
| Breaking | `#FFFFFF` | `#CC0000` |
| Exclusive, Investigates | `#FFFFFF` | `#0C0C0C` |
| Live updates, Live video | `#0C0C0C` with red dot | `#FFFFFF` |
| Opinion, Analysis | `#CC0000` | `#FFFFFF` |
| Video, Gallery | `#FFFFFF` with icon | `rgba(12,12,12,0.5)` |

### Breaking banner

Full-width strip under the header: `#CC0000` background, white "BREAKING NEWS" label in 12-14px/700 uppercase, then the headline in 18-20px/700 white. A live coverage variant uses black with a red pulsing dot (approximate).

### Article page

- Headline 42/48px/700 `#0C0C0C`, 16px margin below, max width about 780px.
- Byline: "By Name, CNN" in 14px/700, with timestamps in 12px `#6E6E6E` ("Updated 4:12 PM EST, Sun November 16, 2026").
- Body paragraphs 16/25.6px, max width about 640px, 1 column with a 300px right rail on desktop.
- Images: full column width, caption 12/18px `#0C0C0C`, credit 10px `#6E6E6E` right aligned, image block followed by a 1px `#E6E6E6` rule.
- Pull quotes: CNN Sans 700, 24-30px, with a red rule (approximate).
- Social share row: icons in `#0C0C0C`, 24px.

### Buttons

| Variant | Style |
|---|---|
| Primary | `#0C0C0C` fill, white 14px/700, 4px radius, hover `#404040` |
| Inverse (on black) | transparent, 1px white border, white text, 4px radius |
| Text | `#0C0C0C`, underline, hover `#CC0000` (theme button hover) |
| Subscribe / paywall | `#CC0000` fill, white text, 4px radius (approximate) |

Height 36-44px, padding 8px 16px. Focus: 2px outline offset 2px.

### Video player

- Black 16:9 frame, 0 radius on article pages, 8px on some cards. Large white play icon in the centre.
- Duration chip bottom-left: `rgba(12,12,12,0.5)` with white 10-12px text.
- Video playlist: black panel, current item highlighted, status label `#0C0C0CB3`.
- "Live TV" uses a red dot and "LIVE" label.

### Inputs

Search and newsletter: 40-48px tall, 1px `#B1B1B1` border, 4px radius, 16px text; focus border `#0C0C0C`.

## 6. Layout & Spacing

- Spacing primitives: 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80px.
- Radius primitives: 2, 4, 8, 12, 16, 20, 24, 28, 32px, plus 999px round.
- Content max width around 1100-1280px (approximate). Main column plus a 300px right rail; column gap 40px (medium) or 50px (large).
- Zones: 64px bottom padding, 48px bottom margin. Containers: 24px bottom margin, 48px at 600px+.
- Homepage grids vary per zone: 1 lead + 2 sides, 3-4 equal columns, or 5-up thumbnail rows.
- Article headline area: 48px bottom padding, 64px on large viewports.

## 7. Depth, Elevation & Motion

- Flat page; depth only in menus, the scrolled header and modals.
- Shadows use a blue-grey `#6A7381` at low alpha: `0 3px 8px #6a73810f, 0 6px 12px #6a738129`, and a larger `0 12px 20px #6a738138`.
- Image fade-in on load: `opacity .4s ease-in`.
- Container title red rule grows on hover (about 300ms, approximate).
- Live dots pulse. Carousels slide with ease-out.

## 8. Iconography & Imagery

- Icons are simple filled glyphs, 14-24px, black or white: play, camera, headphones, search, hamburger, share.
- Photography dominates the lead; large documentary news photos, no rounded corners, no filters.
- Image placeholders while loading are `#E6E6E6`.
- Graphics and maps use the primitive ramps; election colours are separate.

## 9. Voice & Microcopy

Short and declarative. Labels are nouns.

- Labels: "BREAKING", "LIVE UPDATES", "EXCLUSIVE", "ANALYSIS", "OPINION", "VIDEO".
- Buttons: "Log In", "Watch", "Listen", "Live TV", "Subscribe", "Sign up".
- Bylines: "By Jane Doe, CNN".
- Timestamps: "Updated 4:12 PM EST, Sun November 16, 2026" and "2 hr ago".
- Section titles: "Top stories", "More top stories", "Featured".

## 10. Do's and Don'ts

**Do**

- Keep the header and footer near-black with the red box at the left.
- Use one sans family; build hierarchy with size and weight.
- Use red sparingly: logo, breaking label, short title rules.
- Pack headlines densely in text lists.
- Put uppercase labels on images for content type.

**Don't**

- Don't introduce a serif for headlines.
- Don't make red a background for large areas outside breaking moments.
- Don't round photos on the homepage grid.
- Don't use section colours as general accents.
- Don't add heavy shadows to cards.

## 11. Agent Prompt Guide

> Build this UI in the style of CNN. White page, text `#0C0C0C`, secondary `#6E6E6E`, rules 1px `#E6E6E6`. Header and footer are `#0C0C0C` with `#E6E6E6` links (weight 500) and a red `#CC0000` square logo at the left. Use one sans throughout: `cnn_sans_display, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif`. Article headlines 42/48px weight 700; homepage hero headline 36/42px weight 400; zone titles 24-30px/700; card headlines 16px/500; body 16/25.6px. Section titles sit on a 1px grey rule with a 16px red segment at the left. Put small uppercase labels on images: white on `#CC0000` for breaking, black for exclusive, white with a red dot for live updates. Buttons are black or outlined with 4px radius. Shadows only on menus: `0 3px 8px #6a73810f, 0 6px 12px #6a738129`. Layout is a main column plus 300px right rail, 40-50px gap, 24-48px spacing between containers.

```css
:root {
  --brand-red: #CC0000;
  --brand-red-secondary: #FF3F3F;
  --brand-red-tertiary: #A4001E;
  --brand-red-live: #D50000;
  --brand-black: #0C0C0C;
  --brand-neutral-700: #262626;
  --brand-neutral-600: #404040;
  --brand-neutral-500: #6E6E6E;
  --brand-neutral-400: #B1B1B1;
  --brand-neutral-300: #E6E6E6;
  --brand-neutral-200: #F8F8F8;
  --brand-layout: #FAFAFA;
  --brand-bg: #FFFFFF;
  --brand-politics: #3061F3;
  --brand-business: #66C9AF;
  --brand-travel: #F06C00;
  --brand-font: cnn_sans_display, "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-headline-size: 42px;
  --brand-headline-leading: 48px;
  --brand-body-size: 16px;
  --brand-body-leading: 25.6px;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 8px;
  --brand-radius-round: 999px;
  --brand-rail-width: 300px;
  --brand-column-gap: 40px;
  --brand-shadow-menu: 0 3px 8px #6a73810f, 0 6px 12px #6a738129;
  --brand-shadow-raised: 0 12px 20px #6a738138;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by CNN.

---
name: Jane Street
shortName: Jane Street
slug: jane-street
url: https://janestreet.com
category: Finance
tagline: "Black and white with one deep blue, humanist sans, uppercase nav and hexagon art."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, headings, nav text
  - name: Blue 500
    hex: "#0B419E"
    role: Primary buttons, secondary button text and border
  - name: White
    hex: "#FFFFFF"
    role: Page background, header
  - name: Neutral 800
    hex: "#26272A"
    role: Hero and body text
  - name: Neutral 100
    hex: "#F5F5F6"
    role: Subtle section background
  - name: Green 500
    hex: "#81D004"
    role: Puzzles callout button and accents
  - name: Blue 600
    hex: "#083177"
    role: Primary button hover
  - name: Blue 100
    hex: "#DFEAFD"
    role: Secondary button hover
  - name: Orange 500
    hex: "#FF8000"
    role: Accent for events and charts
  - name: Teal 500
    hex: "#429697"
    role: Accent for illustrations and tags
  - name: Red 600
    hex: "#E63232"
    role: Errors, red hexagon segment
  - name: Neutral 600
    hex: "#71767F"
    role: Secondary text, captions
  - name: Neutral 200
    hex: "#E6E7E9"
    role: Dividers, borders
fonts:
  display:
    family: "Alright Sans LT"
    fallback: "Source Sans 3"
    weights: [500, 700, 800]
  body:
    family: "Alright Sans LT"
    fallback: "Source Sans 3"
    weights: [300, 400, 500]
typeScale:
  - { role: H1, size: 72, weight: 800, lineHeight: 1.0, tracking: "0" }
  - { role: Hero, size: 55, weight: 800, lineHeight: 1.0, tracking: "0" }
  - { role: H2, size: 48, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: H3, size: 40, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: H4, size: 32, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Body Large, size: 24, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.5, tracking: "0.05em" }
radii: { sm: 4, md: 6, lg: 14, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 60, 80]
shadows:
  - { name: Card, value: "0 3px 10px rgba(0,0,0,0.1)" }
  - { name: Card Hover, value: "0 3px 10px rgba(0,0,0,0.3)" }
  - { name: Menu, value: "0 6px 12px 0 rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F6"
  text: "#000000"
  muted: "#71767F"
  border: "#E6E7E9"
  accent: "#0B419E"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Jane Street

## 1. Visual Theme & Atmosphere

Jane Street's website looks like a thoughtful recruiting site from a firm that prefers to stay out of the news. It is mostly black type on white, set in one humanist sans (Alright Sans), with a fixed white header, uppercase navigation and a single deep blue (`#0B419E`) for actions. Visual interest comes from geometric hexagon backgrounds, large photography of offices and people, and the occasional puzzle.

What makes it recognisable:

- **The ring mark.** The logo is a set of concentric, broken circular rings beside "Jane Street" in a bold sans.
- **Uppercase nav.** Header items ("WHO WE ARE", "WHAT WE DO", "THE LATEST", "CULTURE", "JOIN JANE STREET") are uppercase in weight 500.
- **One blue.** Primary buttons are 48px pills in `#0B419E`; secondary buttons are white pills with blue text and a blue outline.
- **Hexagon graphics.** The home hero layers SVG hexagon outlines and fills in pale tints, with a single red segment.
- **Heavy headlines, calm body.** Headlines go to weight 800; body text stays at 16-24px with generous line-height.
- **Image cards.** Big rounded-corner (4px) photo cards with white text over the image and a small uppercase label in the corner.

Mood words: intellectual, understated, precise, friendly, curious.

## 2. Color Palette & Roles

Jane Street's stylesheet defines full 50-900 ramps for neutral, blue, orange, green, red and teal. The values below were read from the live `v4-style` CSS on janestreet.com.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Logo, headings, nav, outline of card buttons |
| White | `#FFFFFF` | Background, header, text on cards |
| Neutral 900 | `#131415` | Strongest text, inset button hover |
| Neutral 800 | `#26272A` | Hero text block |
| Neutral 600 | `#71767F` | Captions, metadata |
| Neutral 500 | `#9B9FA6` | Disabled text |
| Neutral 200 | `#E6E7E9` | Dividers |
| Neutral 100 | `#F5F5F6` | Subtle section background |
| Neutral 50 | `#FAFAFB` | Lightest surface |
| Blue 500 | `#0B419E` | Primary button fill, secondary button text and border |
| Blue 600 | `#083177` | Primary hover |
| Blue 100 | `#DFEAFD` | Secondary hover fill |
| Blue 400 | `#508CF3` | Lighter blue for charts and links on dark |
| Green 500 | `#81D004` | Puzzles callout button |
| Orange 500 | `#FF8000` | Accent |
| Teal 500 | `#429697` | Accent |
| Red 600 | `#E63232` | Errors, red accent |

### Full ramps (50 → 900)

| Ramp | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| Blue | `#EFF5FE` | `#DFEAFD` | `#AFCBF9` | `#7FABF6` | `#508CF3` | `#0B419E` | `#083177` | `#05204F` | `#031027` | `#010814` |
| Orange | `#FFF9F2` | `#FFF2E5` | `#FFDFBF` | `#FFCC99` | `#FFB973` | `#FF8000` | `#DF7000` | `#9F5000` | `#603000` | `#402000` |
| Green | `#F9FDF1` | `#F4FAE3` | `#E3F3BA` | `#D2EC90` | `#B6E04B` | `#81D004` | `#71B603` | `#518202` | `#304E01` | `#203401` |
| Red | `#FEF6F6` | `#FDEEEE` | `#FAD4D4` | `#F7BBBB` | `#F3A2A2` | `#EA5555` | `#E63232` | `#B11616` | `#6A0D0D` | `#470909` |
| Teal | `#E8F3F3` | `#D1E7E8` | `#A3CFD0` | `#76B7B9` | `#5CA6A8` | `#429697` | `#2E7D87` | `#1D6375` | `#104A61` | `#07334B` |

### Legacy colors

Older pages still reference a legacy set: navy `#1B1E4E`, blue `#346B9E`, purple `#942A7D`, yellow `#E6E51D`, mint `#B2FFEB`, sage `#5B6B69`, and pale tints `#E7EBE3`, `#F9F1E7`, `#F1EAF0`.

## 3. Typography

**Family:** Alright Sans LT (by Jackson Cavanaugh, Okay Type), a warm humanist sans, used for everything. Chinese pages fall back to Noto Sans SC.

**Licensing:** commercial. Closest free substitute: **Source Sans 3** (similar humanist proportions and weights from 300 to 800).

```css
body { font-family: "Alright Sans LT", "Source Sans 3", Helvetica, Arial, sans-serif; }
```

### Scale (CSS custom properties, desktop then mobile; weights for h2-h6 are approximate)

| Token | Size | Line height | Weight | Notes |
|---|---|---|---|---|
| `--font-size-h1` | 72px (60px tablet, 32px mobile) | 72 / 60 / 32px | 800 | `.v4-template h1` |
| Home hero h1 | 55px | 1.0 | 800 | Home page only |
| `--font-size-h2` | 48px | 60px | 700 | |
| `--font-size-h3` | 40px (32px mobile) | 48 / 40px | 700 | |
| `--font-size-h4` | 32px (24px mobile) | 40 / 32px | 500 | |
| `--font-size-h5` | 24px (20px mobile) | 32 / 24px | 500 | |
| `--font-size-h6` | 20px | 24px | 500 | |
| `--font-size-body-lg` | 24px | 36px | 300 | Intro paragraphs |
| `--font-size-body-default` | 16px | 24px | 400 | Body |
| `--font-size-body-sm` | 14px | 22px | 400 | Labels |
| `--font-size-caption` | 12px | 18px | 500 | Uppercase labels |

### Rules

- Navigation and card labels are uppercase at weight 500.
- Headlines in sentence case, heavy weight.
- Large body (24px, weight 300) is used for intros next to a headline.
- No italics in UI; italics only inside articles.

## 4. Logo & Brand Mark

The logo is a **ring mark plus wordmark**. The mark is a set of concentric circular strokes with gaps, like a stylised maze or a target. "Jane Street" follows in a bold, slightly rounded sans.

- **Color versions:** black on white (primary), white on black or on photography.
- **Horizontal lockup** in the header (about 181 x 49 units); the ring mark alone is the favicon on a white rounded tile.
- **Clear space:** at least half the ring diameter around the lockup.
- **Minimum size:** about 24px tall for the lockup, 16px for the mark.
- **Icon:** the black ring mark on white.

Misuse:

- Do not color the logo blue or green.
- Do not close the gaps in the rings or rotate the mark.
- Do not set "Jane Street" in Alright Sans next to the mark as a substitute wordmark.

## 5. Components

### Buttons (`v4-button`)

Pill buttons, 48px tall, weight 500.

| Variant | Fill | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#0B419E` | `#FFFFFF` | 1px `#0B419E` | fill and border `#083177` |
| Secondary | `#FFFFFF` | `#0B419E` | 1px `#0B419E` | fill `#DFEAFD` |
| Puzzles callout | `#81D004` | `#FFFFFF` | 1px `#81D004` | darker green (approximate) |
| Card text button | transparent | `#000000` | 1px `#000000` | `inset 0 0 0 1px #131415` |

```css
.js-btn {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  height: 48px; min-width: 150px; padding: 0 32px;
  border-radius: 48px; border: 1px solid #0B419E;
  font: 500 16px/1 "Alright Sans LT", "Source Sans 3", sans-serif;
  background: #0B419E; color: #fff;
  transition: background-color .2s ease-out, border-color .2s ease-out;
}
.js-btn:hover { background: #083177; border-color: #083177; }
.js-btn--secondary { background: #fff; color: #0B419E; }
.js-btn--secondary:hover { background: #DFEAFD; }
```

Buttons can carry a 20-24px icon (an arrow link icon sits 9px after the label).

### Header

- Fixed, 80px tall, white, `z-index: 2000`; body has `padding-top: 80px`.
- Logo left; uppercase tabs right ("WHO WE ARE", "WHAT WE DO", "THE LATEST", "CULTURE", "JOIN JANE STREET"), 16px weight 500, 12px horizontal padding.
- Hovering a tab opens a secondary row with uppercase sub-links (for example "OVERVIEW", "CLIENT OFFERING", "GLOBAL CAPITAL MARKETS").
- The header animates with `transform 300ms`, likely hiding on scroll down and returning on scroll up (behaviour approximate).
- Mobile: hamburger toggle, full-height menu with headings and secondary lists.

### Cards (`v4-card`)

- Minimum 300px wide, padding 24px 16px, 24px gap, 4px radius, white text over a full-bleed photo, content aligned to the bottom.
- Label pinned top left: uppercase, weight 500, 20px from the top.
- Hover: image filter shift over 300ms (`filter` transition); some cards use `--shadow` and `--shadow-hover`.
- Two cards per row on desktop (`calc(50% - var(--gap)/2)`), gap 48px; one per row on mobile with 24px gap.

### Carousel

Full-width slides with desktop and mobile images, a breadcrumb row, progress bars and a play/pause control. Each slide has a heading and a secondary pill button.

### Modals

White, 14px body text, scrollable body, padding 50px for error modals; close button top right; backdrop `rgba(0,0,0,.8)`.

### Accordions

Approximate: rows separated by Neutral 200 rules, titles 20-24px weight 500; the open panel can show a vertical gradient background (`--gradient-accordion`).

### Cookie banner

Bottom bar with plain text and two buttons: "Accept" (primary) and "Reject" (secondary).

## 6. Layout & Spacing

- **Container:** 1140px max, 1170px at 1200px and above.
- **Narrow sections:** 684px (`--narrow-section-width`) for text-heavy content.
- **Breakpoints:** 400, 450, 576, 768, 991 and 1200px.
- **Page columns:** 60px 50px padding on tablet, 20px on mobile.
- **Gaps:** 48px desktop, 24px mobile between cards.
- **Hero:** 80px top padding, a 460px text block (368px under 1200px) beside hexagon art.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| `--shadow` | `0 3px 10px rgba(0,0,0,.1)` |
| `--shadow-hover` | `0 3px 10px rgba(0,0,0,.3)` |
| Menu | `0px 6px 12px 0px rgba(0,0,0,.1)` |
| Small menu | `0px 4px 8px 0px rgba(0,0,0,.1)` |
| Vignette | `0 0 100px rgba(0,0,0,.2) inset` |

Motion tokens: `--fast: .25s` (opacity and transform reveals), `--slow: 1s` (fades), header hide/show 300ms, button colors 200ms `ease-out`, card filter 300ms `ease-in-out`.

## 8. Iconography & Imagery

- **Icons:** small, simple line icons (menu, close, search, arrow-link), 20-24px, black or white.
- **Hexagon art:** home page backgrounds built from SVG hexagon outlines, white blocks, pale fills (stroke `#D6E9E2`, `#DDB8B8`) and one red segment.
- **Photography (approximate):** real offices, trading floors, classes and social events; bright, natural and candid.
- **Puzzles:** monthly puzzles appear as a green-accented callout; diagrams are clean line drawings.

## 9. Voice & Microcopy

Curious, modest and specific. Talks about technology, learning and collaboration more than money.

- Uppercase short labels for navigation and card tags.
- Short verb CTAs: "Join us", "Partner with us", "Learn more".
- Engineering detail is welcome; boasting is not.

Sample strings (read on the live site today):

- "We build low-latency networks, hack compilers and design distributed systems."
- "Our people, our culture"
- "Discover who we are, and how we collaborate."
- Nav: "WHO WE ARE", "WHAT WE DO", "THE LATEST", "CULTURE", "JOIN JANE STREET"
- Sub-nav: "OPEN ROLES", "INTERNSHIPS", "PROGRAMS AND EVENTS", "PUZZLES", "STREET VIEW"

## 10. Do's and Don'ts

**Do**

- Keep pages black on white with one blue `#0B419E` for actions.
- Use 48px pill buttons with weight 500 labels.
- Put navigation and small labels in uppercase.
- Use photo cards with 4px corners and white text.
- Use geometric (hexagon) line art for backgrounds.

**Don't**

- Don't add gradients or bright brand fills behind text.
- Don't use the green, orange or teal for primary actions (green is reserved for puzzles).
- Don't round cards beyond 4-6px.
- Don't write promotional copy or quote trading figures.

## 11. Agent Prompt Guide

> Build this UI in the style of Jane Street. White page, black text, body color `#26272A`, captions `#71767F`, dividers `#E6E7E9`, subtle sections `#F5F5F6`. One font: Alright Sans (fallback Source Sans 3); headlines heavy (800 at 72px/1.0 for H1, 700 for H2 48px/60px), body 16px/24px weight 400, intro paragraphs 24px/36px weight 300. Fixed white 80px header with the logo left and uppercase weight-500 nav tabs right. Buttons are 48px pills (radius 48px, padding 0 32px, min-width 150px): primary `#0B419E` with white text, hover `#083177`; secondary white with blue text and border, hover `#DFEAFD`. Photo cards have 4px radius, white text over the image, an uppercase label top left, and shadow `0 3px 10px rgba(0,0,0,.1)` rising to .3 on hover. Use hexagon line art in pale tints for hero backgrounds. Container 1140-1170px. Copy is modest and specific.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-text: #26272A;
  --brand-text-strong: #131415;
  --brand-muted: #71767F;
  --brand-border: #E6E7E9;
  --brand-surface: #F5F5F6;
  --brand-blue: #0B419E;
  --brand-blue-hover: #083177;
  --brand-blue-tint: #DFEAFD;
  --brand-green: #81D004;
  --brand-orange: #FF8000;
  --brand-teal: #429697;
  --brand-red: #E63232;
  --brand-font: "Alright Sans LT", "Source Sans 3", Helvetica, Arial, sans-serif;
  --brand-radius-card: 4px;
  --brand-radius-pill: 48px;
  --brand-button-height: 48px;
  --brand-header-height: 80px;
  --brand-container: 1170px;
  --brand-shadow: 0 3px 10px rgba(0,0,0,.1);
  --brand-shadow-hover: 0 3px 10px rgba(0,0,0,.3);
  --brand-fast: .25s;
  --brand-slow: 1s;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Jane Street.

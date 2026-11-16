---
name: Two Sigma
shortName: Two Sigma
slug: two-sigma
url: https://twosigma.com
category: Finance
tagline: "Teal diamond, oversized TT Commons headlines, square black buttons and aurora gradients."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Diamond Teal
    hex: "#00A5BD"
    role: Logo diamond, brand accent
  - name: Black
    hex: "#000000"
    role: Text, wordmark, primary buttons, inverse sections
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Brand Night
    hex: "#0D1114"
    role: Brand dark background
  - name: Cosmos Purple
    hex: "#7A10AA"
    role: End of the cosmos gradient
  - name: Ocean Blue
    hex: "#0780B4"
    role: Gradient midpoint, teal and cosmos gradients
  - name: Aqua
    hex: "#00C8D6"
    role: Start of the teal gradient
  - name: Focus Teal
    hex: "#0280A5"
    role: Focus outline
  - name: Coral
    hex: "#FD7150"
    role: Orange gradient start, accent underline
  - name: Marigold
    hex: "#FFCF4C"
    role: Orange gradient end
  - name: Lime
    hex: "#F5D855"
    role: Lime gradient start
  - name: Mist
    hex: "#F3F6F6"
    role: Subtle surface
  - name: Border
    hex: "#E5EAEB"
    role: Default border
  - name: Border Inverse
    hex: "#2D363B"
    role: Borders on dark
fonts:
  display:
    family: "TT Commons"
    fallback: "Figtree"
    weights: [500, 600]
  body:
    family: "TT Commons"
    fallback: "Figtree"
    weights: [300, 400, 500]
typeScale:
  - { role: Hero, size: 110, weight: 600, lineHeight: 0.91, tracking: "-0.0136em" }
  - { role: Display 9XL, size: 94, weight: 600, lineHeight: 0.95, tracking: "-0.01em" }
  - { role: Heading 7XL, size: 64, weight: 600, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Heading 5XL, size: 40, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: Heading 3XL, size: 26, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Lead, size: 21, weight: 300, lineHeight: 1.45, tracking: "0" }
  - { role: Body, size: 17, weight: 300, lineHeight: 1.76, tracking: "0.03em" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 16, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112]
shadows:
  - { name: Elevation 1, value: "0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.06)" }
  - { name: Elevation 4, value: "0 8px 16px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.04)" }
  - { name: Raised, value: "0 16px 32px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F6F6"
  text: "#000000"
  muted: "#5E6A71"
  border: "#E5EAEB"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Two Sigma

## 1. Visual Theme & Atmosphere

Two Sigma presents itself as a science lab that happens to invest. The site is mostly black on white with very large, tightly set headlines in TT Commons, a teal diamond logo carrying "2σ", and soft "aurora" gradients that move from aqua through ocean blue into purple. Buttons are plain black rectangles with an arrow that slides across on hover; newer components add rounded cards and pill controls.

What makes it recognisable:

- **The teal diamond.** A square rotated 45 degrees in `#00A5BD` with a white "2σ" inside. It is the only fixed brand color.
- **Huge, tight headlines.** H1 is 110px at weight 600 with line-height 0.91 and slight negative tracking (50px on mobile).
- **Light body text.** Paragraphs are TT Commons at weight 300, 17px, with tall 1.76 line-height and a touch of letter-spacing.
- **Aurora gradients.** Hero art and menus use gradients: teal (`#00C8D6` to `#0780B4`), cosmos (`#0780B4` to `#7A10AA`), and a purple menu overlay (`#0068BB` to `#6400A9`).
- **Square black buttons with a sliding arrow.** No radius; on hover the padding shifts and an arrow moves from the left edge to the right.
- **Two systems side by side.** Classic pages are sharp and square; newer modules use tokens (`--radius-md: 16px`, `--radius-2xl: 24px`, pills) and soft elevation shadows.

Mood words: scientific, clean, ambitious, calm, modern.

## 2. Color Palette & Roles

Hex values were read from the live theme stylesheet (`tsmb/assets/public/build/site.css`) on twosigma.com, including its design tokens.

| Name | Token | Hex | Role |
|---|---|---|---|
| Diamond Teal | `--color-teal-500` | `#00A5BD` | Logo diamond, small accents |
| Black | `--color-text-primary` | `#000000` | Text, wordmark, buttons, inverse backgrounds |
| White | `--color-background-primary` | `#FFFFFF` | Page background |
| Brand Night | `--color-background-brand` | `#0D1114` | Dark brand sections |
| Mist | `--color-surface-subtle` | `#F3F6F6` | Subtle surfaces |
| Border | `--color-border-default` | `#E5EAEB` | Card and divider borders |
| Border Inverse | `--color-border-inverse` | `#2D363B` | Borders on dark |
| Gray 200 | `--color-gray-200` | `#D1D4D4` | Inactive carousel dots |
| Scrollbar Inverse | | `#5E6A71` | Muted text and scrollbars on dark |
| Focus Teal | | `#0280A5` | 1.5px focus outline |
| Aqua | `--color-gradient-teal-start` | `#00C8D6` | Teal gradient start |
| Ocean Blue | `--color-gradient-teal-end` | `#0780B4` | Teal end, cosmos start |
| Cosmos Purple | `--color-gradient-cosmos-end` | `#7A10AA` | Cosmos end |
| Menu Blue | | `#0068BB` | Purple menu gradient start |
| Menu Purple | | `#6400A9` | Purple menu gradient end |
| Coral | | `#FD7150` | Orange gradient start, accent underline |
| Marigold | | `#FFCF4C` | Orange gradient end |
| Lime | `--color-gradient-lime-start` | `#F5D855` | Lime gradient start |
| Lime Mid | `--color-gradient-lime-mid` | `#02BECE` | Lime gradient middle |
| Lime Glow | `--color-gradient-lime-glow` | `#DAF0DC` | Glow tint |

### Gradients

```css
--gradient-teal:   linear-gradient(90deg, #00C8D6, #0780B4);
--gradient-cosmos: linear-gradient(90deg, #0780B4, #7A10AA);
--gradient-purple: linear-gradient(103deg, #0068BB -33%, #6400A9 92%); /* mobile menu, header overlay */
--gradient-orange: linear-gradient(90deg, #FD7150, #FFCF4C);           /* 12px accent bar, hover fills */
--gradient-lime:   linear-gradient(90deg, #F5D855, #02BECE, #00C8D6);
```

The orange gradient appears as a 12px bar along the bottom of feature images (`.has-gradient::after`). Hover states on some cards swap in a gradient background.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#DC3232` | Form validation (Contact Form 7) |
| Focus | `#0280A5` | 1.5px outline, 2px offset |
| Link hover | `#0285B4` | Teal-blue hover on text links (approximate role) |

## 3. Typography

**Family:** TT Commons (TypeType), self-hosted as `"ttc"` in Thin (100), Light (300), Medium (500), DemiBold (600) and Bold (700). The token `--font-weight-demibold` maps to 500.

**Licensing:** commercial. Closest free substitute: **Figtree** (similar geometric-grotesque shapes). Use weight 300 for body to keep the light feel.

```css
--font-family-sans: "ttc", "Figtree", sans-serif;
```

### Scale

Token sizes: 9xl 94, 8xl 72, 7xl 64, 6xl 52, 5xl 40, 4xl 32, 3xl 26, 2xl 22, lg 18, md 16, sm 14 (px).

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 (desktop) | 110px | 600 | 0.91 | -0.0136em |
| H1 (mobile) | 50px | 600 | 0.96 | 0 |
| Display (9xl / 8xl) | 94 / 72px | 600 | 0.95-1.0 | -0.01em |
| Page header (rect) | 48px | 600 | 1.05 | 0 |
| Heading 5xl / 4xl | 40 / 32px | 500 | 1.1-1.2 | 0 |
| Heading 3xl / 2xl | 26 / 22px | 500 | 1.2-1.3 | 0 |
| Lead | 21-24px | 300 | 1.45 | 0 |
| Body / button | 17px | 300 | 1.76 (30px) | 0.5px |
| Small | 14px | 400 | 1.5 | 0 |

Weights for the mid-size headings are approximate.

### Rules

- Big headlines are short (often two to four words) and very tight.
- Body text stays light (300); bold is reserved for headings and labels.
- Sentence case throughout.
- Greek sigma and math notation can appear in display type; keep it typographic, not decorative.

## 4. Logo & Brand Mark

The logo is a **teal diamond containing "2σ"** followed by the wordmark **TWO SIGMA** in black uppercase geometric sans.

- **Diamond:** a square rotated 45 degrees in `#00A5BD`; the "2" and lowercase sigma are knocked out in white.
- **Wordmark:** "TWO SIGMA", all caps, medium weight, set to the right of the diamond and vertically centred.
- **Color versions:** teal diamond with black wordmark on white (primary); teal diamond with white wordmark on dark.
- **Clear space:** at least half the diamond width around the lockup.
- **Minimum size:** about 24px tall for the lockup; the diamond alone works down to 16px.
- **Icon:** the teal diamond on white.

Misuse:

- Do not fill the diamond with a gradient.
- Do not rotate the diamond back to a square.
- Do not set the sigma in a different typeface.

## 5. Components

### Buttons

Classic buttons are square, black and light-weight.

| Variant | Fill | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` 17px weight 300, 0.5px tracking | 1px transparent | 0 | 10px 45px |
| Primary hover | `#000000` | `#FFFFFF` | | 0 | 10px 75px 10px 15px; arrow slides to the right edge |
| Plain hover | `#FFFFFF` | `#000000` | 1px `#000000` | 0 | 10px 45px |
| Pill CTA (new modules) | `#FFFFFF` | `#000000` | none | 9999px | 12px 24px 12px 16px, min-height 52px |
| Round nav button | `#000000` | white icon | none | 9999px | 40 x 40px |

The primary button has a 21 x 14px arrow (`::before`) at the left that moves to the right edge on hover over 400ms (`.4s all ease`). Focus: `outline: 1.5px solid #0280A5; outline-offset: 2px`.

```css
.ts-btn {
  font: 300 17px/1.76 "ttc", "Figtree", sans-serif; letter-spacing: .5px;
  background: #000; color: #fff; border: 1px solid transparent; border-radius: 0;
  padding: 10px 45px; display: inline-flex; align-items: center;
  position: relative; transition: .4s all ease;
}
.ts-btn:hover { padding: 10px 75px 10px 15px; }
.ts-btn:focus-visible { outline: 1.5px solid #0280A5; outline-offset: 2px; }
```

### Header

- White bar with the lockup at left and primary sections at right ("Investment Management", "Sightway Capital" and other business and careers links; labels change, so check the live site).
- Mobile: hamburger opens a full-screen menu on the purple gradient (`#0068BB` to `#6400A9`) with white links and 8.33% side padding.

### Hero

Light background with "aurora" SVG art (aqua, blue and purple glow), a huge two-line headline (the home page reads "It starts with" followed by a changing word), and a light 21-24px intro paragraph.

### Cards

- Topic cards in a carousel (approximate): 16-24px radius, image or gradient top, 22-26px heading, light body, Elevation 1 at rest and Elevation 4 on hover.
- Classic insight tiles: square corners, image with the 12px orange gradient bar at the bottom, black title.
- Carousel dots: 16px circles in `#D1D4D4`, active black.

### Insights preview

Rounded 24px panel, white pill CTA (min-height 52px), round black 40px previous/next buttons.

### Forms

Contact Form 7 fields (approximate): 1px black or `#E0E0E0` borders, square corners, 17px light text; submit uses the black button; errors `#DC3232`.

### Video section

List of chapters with an active item marked by a `#E0F4F7` border; inverse scrollbars `#5E6A71`.

## 6. Layout & Spacing

- **Breakpoints:** 640, 768, 960, 1024/1025, 1200 and 1440px.
- **Grid:** 12 columns; mobile menus use 8.33% (one column) side padding.
- **Spacing tokens:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112px (`--spacing-1` to `--spacing-28`).
- **Section rhythm:** 80-112px between sections on desktop, 48-64px on mobile.
- **Density:** sparse; large headlines with short paragraphs and lots of white.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| `--shadow-elevation-1` | `0 1px 2px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.06)` |
| `--shadow-elevation-4` | `0 8px 16px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.04)` |
| Raised | `0 16px 32px rgba(0,0,0,.12), 0 8px 16px rgba(0,0,0,.06)` |
| Popover | `0 10px 30px rgba(0,0,0,.1)` |

- `--motion-duration-default: 0.4s`, `--motion-easing-default: ease`.
- Scroll reveals: `transform 1400ms cubic-bezier(0.22, 0.61, 0.36, 1)`, slow and smooth.
- The stylesheet includes `prefers-reduced-motion: reduce` overrides; keep them.

## 8. Iconography & Imagery

- **Icons:** minimal line icons (arrows, plus, close) in black or white; the arrow is the most used and is part of the button design.
- **Aurora art:** soft, blurred gradient fields (teal, blue, purple, lime) as SVG, used in heroes and behind cards.
- **Photography (approximate):** people at work in bright, modern offices; natural and unposed; often cropped wide.
- **Data imagery:** abstract signal and network visuals rather than literal charts.

## 9. Voice & Microcopy

Rigorous, curious and plain. Positions the firm as scientists and engineers; avoids financial jargon where possible.

- Sentence case; short headline phrases.
- CTAs: "Explore open opportunities", "Learn more", "Read more".
- Talks about inquiry, data, technology and people.

Sample strings (read on the live site today):

- "Two Sigma is a quantitative investment and trading firm that applies rigorous scientific inquiry to uncover value others can’t."
- "What if your best ideas had room to run?"
- "We look for signals across markets to deliver alpha for our clients"
- "Applying a systematic approach across investment management, securities, and real estate."
- "Sophisticated technology platform"

## 10. Do's and Don'ts

**Do**

- Use very large, tight headlines (line-height around 0.9) and light 300 body text.
- Keep classic buttons square and black with a sliding arrow.
- Use the teal diamond as the only fixed brand color.
- Use the aurora gradients for hero art and menus, not for text.
- Use the tokenised radii (16px, 24px, pill) only in newer card modules.

**Don't**

- Don't round the classic black buttons.
- Don't put gradients inside the logo.
- Don't use heavy weights for body copy.
- Don't fill whole pages with gradients; keep the base white.
- Don't quote fund performance or headcount without checking the site.

## 11. Agent Prompt Guide

> Build this UI in the style of Two Sigma. White page, black `#000000` text, subtle surfaces `#F3F6F6`, borders `#E5EAEB`, dark brand sections `#0D1114`. Font TT Commons (fallback Figtree): hero headline 110px weight 600 with line-height 0.91 and -0.0136em tracking (50px on mobile), section headings 40-64px weight 500-600, body 17px weight 300 with line-height 1.76 and 0.5px letter-spacing. Classic buttons are square black blocks (padding 10px 45px, white 17px light text) with an arrow that slides from the left to the right edge on hover over 0.4s. Focus outline 1.5px `#0280A5`. Newer cards use 16-24px radius and soft shadows `0 8px 16px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.04)`, with pill CTAs. Hero art is a soft aurora gradient: aqua `#00C8D6`, ocean `#0780B4`, purple `#7A10AA`. Brand mark is a teal `#00A5BD` diamond with a white "2σ". Copy is plain and scientific.

```css
:root {
  --brand-teal: #00A5BD;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-night: #0D1114;
  --brand-surface: #F3F6F6;
  --brand-border: #E5EAEB;
  --brand-border-inverse: #2D363B;
  --brand-muted: #5E6A71;
  --brand-focus: #0280A5;
  --brand-aqua: #00C8D6;
  --brand-ocean: #0780B4;
  --brand-cosmos: #7A10AA;
  --brand-coral: #FD7150;
  --brand-marigold: #FFCF4C;
  --brand-lime: #F5D855;
  --brand-gradient-teal: linear-gradient(90deg, #00C8D6, #0780B4);
  --brand-gradient-cosmos: linear-gradient(90deg, #0780B4, #7A10AA);
  --brand-gradient-purple: linear-gradient(103deg, #0068BB -33%, #6400A9 92%);
  --brand-gradient-orange: linear-gradient(90deg, #FD7150, #FFCF4C);
  --brand-font: "ttc", "Figtree", sans-serif;
  --brand-radius-button: 0;
  --brand-radius-md: 16px;
  --brand-radius-2xl: 24px;
  --brand-radius-full: 9999px;
  --brand-shadow-1: 0 1px 2px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.06);
  --brand-shadow-4: 0 8px 16px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.04);
  --brand-duration: .4s;
  --brand-ease: ease;
  --brand-ease-reveal: cubic-bezier(0.22, 0.61, 0.36, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Two Sigma.

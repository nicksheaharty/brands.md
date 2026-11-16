---
name: Blackstone
slug: blackstone
url: https://blackstone.com
category: Finance
tagline: "Monochrome and editorial: a black box wordmark, Garamond-style serif, wide photography."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo box, headings, primary buttons (approximate)
  - name: White
    hex: "#FFFFFF"
    role: Page background, logo letters
  - name: Charcoal
    hex: "#1A1A1A"
    role: Dark bands and footer (approximate)
  - name: Graphite
    hex: "#4D4D4D"
    role: Body text (approximate)
  - name: Stone
    hex: "#767676"
    role: Captions, metadata (approximate)
  - name: Rule
    hex: "#D9D9D9"
    role: Dividers, card borders (approximate)
  - name: Paper
    hex: "#F4F4F4"
    role: Subtle section background (approximate)
  - name: Focus
    hex: "#005FCC"
    role: Keyboard focus ring (approximate, not a brand color)
fonts:
  display:
    family: "Garamond-style serif (logo face)"
    fallback: "EB Garamond"
    weights: [400]
  body:
    family: "Neo-grotesque sans (approximate)"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 64, weight: 400, lineHeight: 1.05, tracking: "-0.01em" }
  - { role: H1, size: 48, weight: 400, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H2, size: 36, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: H3, size: 24, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Eyebrow, size: 13, weight: 600, lineHeight: 1.3, tracking: "0.1em" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
radii: { sm: 0, md: 0, lg: 2, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#000000"
  muted: "#767676"
  border: "#D9D9D9"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Blackstone

> **Source note:** blackstone.com returned HTTP 403 to automated requests on 2026-11-16, so its stylesheet could not be read. The logo comes from Wikimedia Commons. Every color, size and spacing value below except the logo's black and white is an approximation based on the brand's public materials and should be checked against the live site before use.

## 1. Visual Theme & Atmosphere

Blackstone presents itself the way a private bank or an auction house would: monochrome, editorial and quiet. The brand rests on one asset, the **black box wordmark**, a solid black rectangle with "Blackstone" set in white in a classical Garamond-style serif. The website follows that lead: white pages, black type, large photography of real assets (logistics hubs, data centers, apartment buildings, hotels, offices), and almost no color beyond black, white and grey.

What makes it recognisable:

- **Black and white only.** Color comes from photography, not from the UI. Accents, if any, are greys.
- **The box.** The rectangular black logo sits top left and its proportions echo through the page: hard rectangles, square image crops, square buttons.
- **Serif voice.** Headlines borrow the classical serif feel of the wordmark; body and navigation are a neutral sans (approximate).
- **Asset photography.** Wide, high-resolution images of buildings and infrastructure, often full-bleed.
- **Sparse density.** Big margins, few elements per screen, short statements.

Mood words: discreet, established, monochrome, editorial, solid.

## 2. Color Palette & Roles

Black and white are certain (they come from the logo file). The greys are approximate.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Logo box, headlines, primary buttons, header text |
| White | `#FFFFFF` | Page background, logo letters, text on black |
| Charcoal | `#1A1A1A` | Footer and dark feature bands (approximate) |
| Graphite | `#4D4D4D` | Long-form body text (approximate) |
| Stone | `#767676` | Captions, dates, metadata; passes AA on white (approximate) |
| Rule | `#D9D9D9` | Hairline dividers between list items (approximate) |
| Paper | `#F4F4F4` | Alternating section background (approximate) |

### Semantic colors

The marketing site has few states. For forms and investor tools use neutral, conventional values (all approximate, not brand colors):

| State | Hex | Use |
|---|---|---|
| Error | `#B3261E` | Validation text and border |
| Success | `#2E7D32` | Confirmation |
| Focus | `#005FCC` | 2px focus outline (or a 2px black outline offset 2px) |
| Positive figure | `#000000` | Performance tables stay monochrome; use signs, not colors |

### Dark bands

Full-width black or charcoal sections with white text and white outline buttons. Use them for statements, quotes and statistics.

## 3. Typography

**Logo face:** the wordmark is set in an old-style Garamond-type serif with bracketed serifs and a calligraphic "k". It is artwork; do not retype it.

**Website (approximate):** a classical serif for large headlines and a neutral neo-grotesque sans for navigation, body and UI. Exact families could not be confirmed.

**Fallbacks:** **EB Garamond** for the serif (free, close to the logo face) and **Inter** for the sans.

```css
--font-serif: "EB Garamond", Garamond, "Times New Roman", serif;
--font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
```

### Scale (approximate)

| Role | Size | Weight | Line height | Family |
|---|---|---|---|---|
| Hero | 64px | 400 | 1.05 | Serif |
| H1 | 48px | 400 | 1.1 | Serif |
| H2 | 36px | 400 | 1.15 | Serif |
| H3 | 24px | 500 | 1.25 | Sans |
| Lead | 20px | 400 | 1.5 | Sans |
| Body | 17px | 400 | 1.6 | Sans |
| Caption | 14px | 400 | 1.45 | Sans |
| Eyebrow | 13px | 600, uppercase, 0.1em | 1.3 | Sans |

Mobile: hero about 40px, H1 about 34px, H2 about 28px.

### Rules

- Serif headlines stay at regular weight (400). Never bold the serif.
- Sans text in sentence case; eyebrows and small labels in uppercase with wide tracking.
- Numbers in tables use tabular figures.
- Keep line lengths short (60-75 characters).

## 4. Logo & Brand Mark

The Blackstone logo is a **solid black rectangle with "Blackstone" reversed out in white**. The box is part of the logo; the wordmark is never shown without it in primary use.

- **Proportions:** roughly 2.55:1 (width to height), with the word centred and generous padding inside the box.
- **Color versions:** black box with white letters (primary). On black backgrounds, a white box with black letters or a white outline box (approximate guidance).
- **Clear space:** at least half the box height around the box.
- **Minimum size:** about 90px wide on screen so the serifs survive.
- **Icon:** the icon in this folder is a black tile with the white wordmark, matching how the box logo reads at small sizes.

Misuse:

- Do not remove the box and show the word alone.
- Do not round the box corners.
- Do not recolor the box (no navy, no gradient, no brand-color tints).
- Do not place the box on busy photography without a calm area behind it.

## 5. Components

All component values in this section are approximate.

### Buttons

Square, monochrome, understated.

| Variant | Fill | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` 500 15px | 1px `#000000` | 0 | 14px 28px |
| Secondary | transparent | `#000000` | 1px `#000000` | 0 | 14px 28px |
| On dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | 0 | 14px 28px |
| Text link | none | `#000000` 500 | underline 1px | 0 | 0 |

States: hover inverts (primary to white with black text; secondary to black with white text) over 200ms. Focus: 2px outline offset 2px. Disabled: `#767676` text and border.

```css
.bx-btn {
  font: 500 15px/1 var(--font-sans);
  padding: 14px 28px; border: 1px solid #000; border-radius: 0;
  background: #000; color: #fff; letter-spacing: 0.02em;
  transition: background-color .2s ease, color .2s ease;
}
.bx-btn:hover { background: #fff; color: #000; }
.bx-btn--secondary { background: transparent; color: #000; }
.bx-btn--secondary:hover { background: #000; color: #fff; }
```

### Navigation

- White header about 80px tall, black box logo at left, section links at right in 15px sans: about the firm, businesses, insights, news, shareholders, careers (labels approximate).
- Thin `#D9D9D9` rule under the header once scrolled.
- Mobile: hamburger right, full-screen white or black menu with large serif links.

### Hero

Full-bleed photograph of a real asset, 70-90vh, with a short serif statement in white over a soft dark gradient at the bottom left, or a split layout with image right and text left on white.

### Cards (insights, news, portfolio)

- Image on top (3:2 or 16:9, square corners), eyebrow (category, uppercase 13px), serif title 22-24px, date in Stone.
- No shadow and no border; the image edge defines the card. Hover darkens the image slightly and underlines the title.

### Statistic band

A black band with three or four large figures in the serif (56-72px, white) and short sans captions under each. Only use figures you have checked on the live site.

### Lists (press releases)

Rows separated by 1px `#D9D9D9` rules: date at left in Stone 14px, title in black 18-20px, chevron at right.

### Forms

Inputs with a 1px `#000` or `#767676` bottom border or full border, square corners, 48px tall, 16px text. Labels above in 14px 500.

### Footer

Charcoal or black, white text, logo (white box version), columns of links in 14px, legal text in 12px grey.

## 6. Layout & Spacing (approximate)

- **Grid:** 12 columns, max content width about 1280-1400px, 24-32px gutters.
- **Margins:** 20px mobile, 40px tablet, 64-80px on wide desktop.
- **Section rhythm:** 96-128px between sections on desktop, 64px on mobile.
- **Breakpoints:** about 768, 1024, 1280 and 1440px.
- **Density:** low. One message per section; large images carry the page.

## 7. Depth, Elevation & Motion

- **Flat.** No shadows on cards, buttons or the header. Separation comes from rules, whitespace and black bands.
- **Borders:** 1px `#D9D9D9` hairlines, or 1px black for buttons.
- **Overlays:** image scrims as a linear gradient from `rgba(0,0,0,0.55)` to transparent behind text.
- **Motion (approximate):** slow fades and slight upward reveals (300-500ms, `ease-out`), image hover zoom up to 1.03 over 600ms. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** minimal, 1-1.5px line icons in black: arrows, chevrons, plus, close, download. No filled or colored icons.
- **Photography:** the main visual. Real assets and places, shot clean and wide: warehouses, data halls, residential blocks, hotels, city skylines, energy infrastructure. Natural color, slightly cool and desaturated; no stock-style business handshakes.
- **People:** portraits of leadership and employees in neutral settings, often black and white or muted.
- **Charts:** monochrome bars and lines in black and greys.

## 9. Voice & Microcopy

Confident, compact and formal. Speaks in terms of long-term ownership, scale and responsibility to investors. Short declarative sentences; few adjectives.

- Sentence case in body and buttons; uppercase only for small eyebrows.
- CTAs: "Learn more", "Read more", "View all news", "Explore our businesses" (approximate examples).
- Avoid casual tone, exclamation marks and jargon-heavy marketing.
- Do not quote assets under management or other figures without checking the live site; they change every quarter.

## 10. Do's and Don'ts

**Do**

- Keep the UI black, white and grey; let photography bring color.
- Use the black box logo exactly as supplied.
- Pair a regular-weight classical serif for headlines with a neutral sans for UI.
- Use square corners on buttons, images and inputs.
- Give sections generous space and full-bleed asset photography.

**Don't**

- Don't introduce a brand accent color (no blue, green or gold UI).
- Don't use rounded pills, drop shadows or gradients on components.
- Don't bold the serif or set long body text in it.
- Don't use playful illustration or emoji.
- Don't present unverified figures.

## 11. Agent Prompt Guide

> Build this UI in the style of Blackstone. Strictly monochrome: white background, black `#000000` headlines and buttons, body text `#4D4D4D`, captions `#767676`, hairline rules `#D9D9D9`, alternate sections `#F4F4F4`, dark bands `#1A1A1A` or black with white text. Headlines in a classical serif at regular weight (EB Garamond fallback), 64/48/36px with slightly tight line-height; UI and body in a neutral sans (Inter fallback) at 17px/1.6. Buttons are square (radius 0): black fill with white 15px text, or a 1px black outline; hover inverts. No shadows anywhere. Use large, full-bleed photography of buildings and infrastructure, cards made of an image, an uppercase 13px eyebrow and a serif title. The logo is a black rectangle with "Blackstone" in white serif; never redraw it. Copy is short, formal and confident.

```css
:root {
  /* approximate values: blackstone.com was not readable (403) */
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-charcoal: #1A1A1A;
  --brand-text: #4D4D4D;
  --brand-muted: #767676;
  --brand-rule: #D9D9D9;
  --brand-paper: #F4F4F4;
  --brand-focus: #005FCC;
  --brand-font-serif: "EB Garamond", Garamond, "Times New Roman", serif;
  --brand-font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-radius: 0;
  --brand-btn-padding: 14px 28px;
  --brand-scrim: linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0));
  --brand-ease: ease-out;
  --brand-duration: 200ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Blackstone.

---
name: Moody's
slug: moodys
url: https://moodys.com
category: Finance
tagline: "Deep navy, serif headlines and bright blue links for a ratings and research house."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Moody's Navy
    hex: "#0A1264"
    role: Logo, headings, primary buttons, dark header and hero bands
  - name: Bright Blue
    hex: "#005EFF"
    role: Links, active states, accent icons, focus
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on navy
  - name: Ice
    hex: "#CCDFFF"
    role: Selected states on navy, light blue fills
  - name: Navy Hover
    hex: "#3B4183"
    role: Primary button hover, secondary navy text
  - name: Cloud
    hex: "#F0F0F1"
    role: Light grey section background
  - name: Ink
    hex: "#272829"
    role: Body text
  - name: Blue Pressed
    hex: "#0047BF"
    role: Link hover and pressed state
  - name: Sky
    hex: "#99BFFF"
    role: Icon hover on navy, secondary tint
  - name: Blue Wash
    hex: "#E5EFFF"
    role: Info panels, tag backgrounds
  - name: Stone
    hex: "#C8C9C7"
    role: Dividers and borders
  - name: Slate
    hex: "#55565A"
    role: Secondary text, captions
  - name: Lilac Grey
    hex: "#CED0E0"
    role: Borders on navy-tinted cards
  - name: Crimson
    hex: "#BA0C2F"
    role: Errors, negative indicators
  - name: Ember
    hex: "#E35205"
    role: Occasional highlight, warning
fonts:
  display:
    family: "Financier Display"
    fallback: "Newsreader"
    weights: [400, 600]
  body:
    family: "GT America"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 93, weight: 600, lineHeight: 0.92, tracking: "-0.01em" }
  - { role: Heading XL, size: 59, weight: 600, lineHeight: 0.93, tracking: "0" }
  - { role: Heading L, size: 43, weight: 600, lineHeight: 0.93, tracking: "0" }
  - { role: Heading M, size: 32, weight: 400, lineHeight: 1.19, tracking: "0" }
  - { role: Heading S, size: 27, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.44, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Eyebrow, size: 14, weight: 500, lineHeight: 1.1, tracking: "0.01em" }
radii: { sm: 4, md: 8, lg: 16, pill: 100 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Subtle, value: "0 1px 4px rgba(0,0,0,0.12)" }
  - { name: Card, value: "0 4px 5px rgba(0,0,0,0.07)" }
  - { name: Raised, value: "0 6px 18px rgba(0,0,0,0.14)" }
  - { name: Overlay, value: "0 24px 32px 0 rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F1"
  text: "#0A1264"
  muted: "#55565A"
  border: "#C8C9C7"
  accent: "#0A1264"
  accentText: "#FFFFFF"
  radius: 100
  buttonStyle: pill
---

# Moody's

## 1. Visual Theme & Atmosphere

Moody's looks like a serious research publisher. The palette is almost entirely one deep navy (`#0A1264`) and white, with a brighter electric blue (`#005EFF`) for links and interaction. Headlines are set in Financier Display, a sharp transitional serif, which gives the site the tone of a quarterly outlook report. Body copy switches to GT America, a clean American grotesque.

What makes it recognisable:

- **One navy for everything.** The logo, headings, primary buttons, the dark header and hero bands all share `#0A1264`. It reads close to ink, with a clear blue cast.
- **Serif headlines, sans body.** Large Financier headlines (43-93px) with tight leading sit over 18px GT America paragraphs.
- **Pill outline buttons.** Buttons are fully rounded (`border-radius: 75pt`, about 100px) with a thin 1.4px navy border, or solid navy for the primary action.
- **Outlook-led homepage.** Content is organised around research: "2027 Outlooks", sector outlooks, "Moody's makes it possible", with cards that carry a date and a source line ("Moody's Ratings | Nov 12, 2026").
- **Small-caps wordmark.** The 2024 logo is a serif "Moody's" in small caps, quieter than the old bold sans.

Mood words: authoritative, measured, editorial, institutional, global.

## 2. Color Palette & Roles

Values below are read from moodys.com's `clientlib-site` CSS. Navy and bright blue together account for most coloured declarations.

| Name | Hex | Role |
|---|---|---|
| Moody's Navy | `#0A1264` | Logo, headings, primary button fill, dark bands |
| Navy Hover | `#3B4183` | Primary button hover, sticky header title |
| Navy 60 | `#6C71A2` | Muted navy text on light |
| Navy 40 | `#9DA0C1` | Disabled navy, secondary icons |
| Lilac Grey | `#CED0E0` | Borders on navy-tinted cards |
| Navy Wash | `#E6E7EF` | Very light navy panels |
| Bright Blue | `#005EFF` | Links, active tabs, focus, accent icons |
| Blue Pressed | `#0047BF` | Link hover and pressed |
| Blue 80 | `#337EFF` | Hover tint on dark |
| Blue 60 | `#669EFF` | Chart secondary |
| Sky | `#99BFFF` | Icon hover on navy |
| Ice | `#CCDFFF` | Selected state on navy |
| Blue Wash | `#E5EFFF` | Info panels, tag fills |
| Blue Mist | `#EFF5FF` | Lightest blue background |
| White | `#FFFFFF` | Page background |
| Cloud | `#F0F0F1` | Light grey section background |
| Fog | `#F2F4F8` | Alternate light background |
| Stone | `#C8C9C7` | Dividers, borders |
| Slate | `#55565A` | Secondary text |
| Pewter | `#75787B` | Captions, meta |
| Ink | `#272829` | Body text |
| Near Black | `#191919` | Strongest text |

### Semantic

| State | Hex |
|---|---|
| Error / negative | `#BA0C2F` (alerts also use `#D32F2F`) |
| Warning | `#E35205` / `#ED6C02` |
| Info | `#0288D1` |
| Success | `#2E7D32` (approximate) |

### Mode

Light pages with full-bleed navy bands for the header, hero and contact sections. There is no user-facing dark mode; on navy, text is white and links are `#99BFFF` or `#CCDFFF`.

## 3. Typography

- **Display:** Financier Display (Klim Type Foundry), a crisp serif with high contrast. Used for h1 and h2.
- **Text:** GT America (Grilli Type), stack `"GT America", Helvetica, Arial, sans-serif`. Used for h3 down, body, nav and buttons.
- **CJK:** Noto Sans JP/KR/SC and Noto Serif SC/KR for localised pages.
- **License:** both are commercial. Free substitutes: **Newsreader** (or Source Serif 4) for Financier, **Inter** for GT America.

| Role | Size | Weight | Line height | Font |
|---|---|---|---|---|
| Hero h1 (desktop) | 93px | 600 | 85px | Financier |
| h1 (mobile and inner pages) | 59px | 600 | 55px | Financier |
| h2 | 43px | 600 | 40px | Financier |
| h3 | 32px | 400 | 38px | GT America |
| h4 | 27px | 400 | 36px | GT America |
| Body L (p) | 18px | 400 | 26px | GT America |
| Body | 16px | 400 | 24px | GT America |
| Eyebrow / meta | 14px | 500 | 15px | GT America or Financier |

Rules:

- Serif headlines run very tight (line-height below 1). Give them room above and 24-32px below.
- Sentence case everywhere: "Moody's makes it possible", "Innovating with purpose".
- Meta lines join source and date with a vertical bar: "2027 Outlook | Moody's Ratings | Nov 5, 2026".
- Use lining, tabular figures in data tables.

## 4. Logo & Brand Mark

The wordmark reads "Moody's" in a serif with a full-size M and small-cap "OODY'S", with a curly apostrophe. It has no separate symbol.

- **Colours:** navy `#0A1264` on white, white on navy. Avoid other colours.
- **Clear space:** at least the height of the small-cap letters on every side (approximate).
- **Minimum size:** about 90px wide on screen (approximate).
- **Header:** about 166 x 34px, white on the navy header bar.
- **Avatar:** the serif "M" alone, white on navy.

Misuse:

- Don't revert to the older bold sans "MOODY'S" wordmark on new work.
- Don't put the wordmark on bright blue or photography without a navy scrim.
- Don't set "Moody's" in a different serif as a fake logo.

## 5. Components

### Buttons

| Variant | CSS |
|---|---|
| Base (outline) | `background:transparent; color:#0A1264; border:1.4px solid #0A1264; border-radius:100px; padding:8px 22px; font:500 16px/24px "GT America";` |
| Primary | `background:#0A1264; color:#fff; border:2px solid #0A1264;` |
| Primary hover | `background:#3B4183; border-color:#3B4183;` |
| On navy | `background:transparent; color:#fff; border-color:#fff;` hover `background:#fff; color:#0A1264;` |
| Text link | `color:#005EFF; font-weight:500;` with a trailing arrow; hover `color:#0047BF; text-decoration:underline;` |
| Disabled | keep fill, `opacity:0.5; cursor:not-allowed;` |

Labels: "Learn more", "Read more", "Watch now", "Get in touch", "Explore the 2027 Outlooks".

### Header

- Navy bar (`#0A1264`), white wordmark left, nav centre-left: Who We Serve, Solutions, Capabilities, Insights, About Us, Support.
- Right: search, "My Moody's" and "Sign in to My Moody's".
- Mega-menus open as white panels with navy headings and blue links, 32px padding, `box-shadow: 0 24px 32px rgba(0,0,0,0.12)`.

### Insight cards

```css
.insight-card { background:#fff; border:1px solid #C8C9C7; border-radius:8px; overflow:hidden; box-shadow:0 4px 5px rgba(0,0,0,0.07); }
.insight-card:hover { box-shadow:0 6px 18px rgba(0,0,0,0.14); }
.insight-card .meta { font:500 14px/1.2 "GT America"; color:#55565A; }
.insight-card h3 { font:400 24px/1.25 "GT America"; color:#0A1264; margin:8px 0 16px; }
```

- Image top (16:9), meta line ("2027 Outlook | Moody's Ratings | Nov 12, 2026"), title, then a blue text link.

### Hero carousel

- Full-bleed navy or photo hero with a large serif headline in white, a short paragraph, and a pill CTA.
- Pagination as numbered buttons (1, 2, 3...) with Previous and Next, active number in white on navy.

### Segment tiles

"Who we serve" tiles (Banking, Buy-side, Insurance, Corporations, Public Sector, Asset Management): white tiles, navy title, small outline icon, 8px radius, 1px stone border, hover lifts with the Raised shadow.

### Inputs and search

- 48px tall, 1px `#C8C9C7` border, 4px radius, 16px text, placeholder `#75787B`.
- Focus: border `#005EFF` and `0 0 0 3px #CCDFFF`.
- Search overlay: full-width white panel with a clear (×) button and "View All Results" link.

### Tags

- Pill, `background:#E5EFFF; color:#0A1264; padding:4px 12px; font:500 13px "GT America"`.

### Footer

Navy background, white headings, `#CCDFFF` links, social icons in white, small legal text in `#9DA0C1`.

## 6. Layout & Spacing

- Content width about 1240-1280px, 24px gutters on mobile, 40px on desktop (approximate).
- 12-column grid; insight cards run 3 or 4 across, outlook features 2 across.
- Spacing follows an 8px rhythm; headings use 24-48px bottom margins (`margin-bottom: 24px` on h2-h4 and p, 32-48px on h1).
- Sections are 64-96px apart, with alternating white, `#F0F0F1` and navy bands.
- Breakpoints about 768, 1024, 1280px (approximate).

## 7. Depth, Elevation & Motion

- Soft, low-contrast shadows: `0 1px 4px rgba(0,0,0,0.12)` for small elements, `0 4px 5px rgba(0,0,0,0.07)` for cards, `0 6px 18px rgba(0,0,0,0.14)` for hover, `0 24px 32px rgba(0,0,0,0.12)` for menus.
- Borders do most of the separation; shadows are a hint.
- Motion: 200-300ms ease for hover colour and shadow; carousels fade or slide at about 400ms.
- No parallax or bouncy easing.

## 8. Iconography & Imagery

- Icons: Material Symbols Outlined, 24px, navy or white, 1.5-2px visual stroke.
- Photography: business people in natural light, cityscapes, data-centre and abstract architecture shots, often with a navy overlay for text.
- Data visuals: line and bar charts in navy and bright blue, with Sky and Ice as secondary series.
- Avoid playful illustration; diagrams are flat and navy-based.

## 9. Voice & Microcopy

- Expert, calm and precise. Moody's speaks as an analyst, not a salesperson.
- Headlines are plain statements or topic labels; body copy names the sector and the horizon.
- Sentence case for headings and buttons.

Sample strings:

- "2027 Outlooks: Hear from our experts"
- "Global Banking 2027 Outlook"
- "Global leveraged finance issuance slows, but mega deals keep coming"
- "Moody's makes it possible"
- "Speak to our team"
- Buttons: "Learn more", "Read more", "Get in touch"

## 10. Do's and Don'ts

**Do**

- Use navy `#0A1264` as the dominant colour and bright blue `#005EFF` only for links and interaction.
- Pair a serif display face for h1/h2 with a grotesque for everything else.
- Make buttons fully rounded with thin navy outlines; reserve solid navy for one primary action.
- Show a source and date on every insight card.
- Keep shadows faint and borders light grey.

**Don't**

- Don't use bright blue as a large background.
- Don't set body copy in the serif.
- Don't add gradients, glows or saturated accent colours.
- Don't square off buttons or use heavy drop shadows.
- Don't invent ratings, outlooks or figures; cite real Moody's publications.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Moody's. White page with full-width navy `#0A1264` bands for the header, hero and contact section. Headlines h1-h2 in Financier Display (use Newsreader) weight 600, very tight leading (hero 93px/85px, h2 43px/40px), colour navy on white or white on navy. Everything else in GT America (use Inter): h3 32px/38px weight 400, body 18px/26px colour `#272829`, meta 14px colour `#55565A`. Links and active states in bright blue `#005EFF`, hover `#0047BF`. Buttons are pills with `border-radius:100px`, 8px 22px padding, a 1.4px navy outline; the primary is solid navy with white text and hovers to `#3B4183`. Insight cards are white with 1px `#C8C9C7` border, 8px radius, `0 4px 5px rgba(0,0,0,0.07)` shadow, an image, a meta line like "2027 Outlook | Moody's Ratings | Nov 12, 2026", a title and a blue "Read more" link. Light grey sections use `#F0F0F1`. Icons are Material Symbols Outlined. Calm, analytical copy in sentence case.

```css
:root {
  --moodys-navy: #0A1264;
  --moodys-navy-hover: #3B4183;
  --moodys-navy-60: #6C71A2;
  --moodys-navy-40: #9DA0C1;
  --moodys-blue: #005EFF;
  --moodys-blue-pressed: #0047BF;
  --moodys-sky: #99BFFF;
  --moodys-ice: #CCDFFF;
  --moodys-blue-wash: #E5EFFF;
  --moodys-white: #FFFFFF;
  --moodys-cloud: #F0F0F1;
  --moodys-stone: #C8C9C7;
  --moodys-slate: #55565A;
  --moodys-ink: #272829;
  --moodys-error: #BA0C2F;
  --moodys-warning: #E35205;
  --moodys-font-display: "Financier Display", "Newsreader", Georgia, serif;
  --moodys-font-body: "GT America", "Inter", Helvetica, Arial, sans-serif;
  --moodys-radius-sm: 4px;
  --moodys-radius-card: 8px;
  --moodys-radius-pill: 100px;
  --moodys-shadow-card: 0 4px 5px rgba(0,0,0,0.07);
  --moodys-shadow-raised: 0 6px 18px rgba(0,0,0,0.14);
  --moodys-shadow-menu: 0 24px 32px 0 rgba(0,0,0,0.12);
  --moodys-ease: ease;
}
```

---

Values are observed from the public moodys.com site and its CSS on 2026-11-16; values marked approximate are estimates. This file is an unofficial reference and is not affiliated with or endorsed by Moody's Corporation.

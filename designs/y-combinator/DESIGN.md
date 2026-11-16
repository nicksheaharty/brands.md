---
name: Y Combinator
shortName: "Y Combinator"
slug: y-combinator
url: https://www.ycombinator.com
category: Accelerator
tagline: "Warm beige paper, serif headlines with italic accents, and the orange Y square."
updated: 2026-11-16
logoBackground: "#F5F5EE"
theme: light
colors:
  - name: YC Orange
    hex: "#FF6600"
    role: Logo square, Hacker News top bar, brand moments
  - name: Button Orange
    hex: "#FB651E"
    role: Classic ycdc primary button fill, outline and link color
  - name: Ink
    hex: "#16140F"
    role: Headings and body text, black pill buttons
  - name: Beige Light
    hex: "#F5F5EE"
    role: Page and header background
  - name: Paper
    hex: "#FDFDF8"
    role: Cards, directory rows, filter panels
  - name: Burnt Orange
    hex: "#BA3E03"
    role: Primary button hover and disabled state
  - name: Tag Beige
    hex: "#E6E4DC"
    role: Uppercase badge background
  - name: Pill Beige
    hex: "#E6E6DD"
    role: Directory batch and industry pills
  - name: Field Beige
    hex: "#EFEFE8"
    role: Filter inputs and facet count chips
  - name: Rule Grey
    hex: "#C6C6C6"
    role: Directory row dividers, search box border
  - name: Muted Grey
    hex: "#868683"
    role: Sub-nav items, secondary labels
  - name: Gold
    hex: "#FDA942"
    role: Secondary gold button, retro accents
  - name: HN Cream
    hex: "#F6F6EF"
    role: Hacker News page background
  - name: HN Grey
    hex: "#828282"
    role: Hacker News metadata text and visited links
fonts:
  display:
    family: "Source Serif 4"
    fallback: "Source Serif 4"
    weights: [400, 500]
  body:
    family: "Avenir"
    fallback: "Nunito Sans"
    weights: [200, 300, 500, 700]
  mono:
    family: "ui-monospace"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 60, weight: 400, lineHeight: 1.2, tracking: "-0.025em" }
  - { role: Page Title, size: 48, weight: 500, lineHeight: 1.25, tracking: "-0.025em" }
  - { role: Section Title, size: 28, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Card Title, size: 18, weight: 500, lineHeight: 1.6, tracking: "0" }
  - { role: Body Large, size: 18, weight: 300, lineHeight: 1.7, tracking: "0" }
  - { role: Body, size: 16, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Nav, size: 14, weight: 400, lineHeight: 1.25, tracking: "0.3px" }
  - { role: Badge, size: 10, weight: 200, lineHeight: 1.2, tracking: "0.1em" }
radii: { sm: 4, md: 6, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Photo, value: "0 8px 32px rgba(0,0,0,0.15)" }
  - { name: Story, value: "0 0 54px rgba(0,0,0,0.3)" }
preview:
  bg: "#F5F5EE"
  surface: "#FDFDF8"
  text: "#16140F"
  muted: "#868683"
  border: "#C6C6C6"
  accent: "#FB651E"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Y Combinator

## 1. Visual Theme & Atmosphere

ycombinator.com looks like a well-typeset printed pamphlet with an orange stamp on it. The page is warm off-white paper (`#F5F5EE`), the text is a near-black brown-ink (`#16140F`), and the only strong color is the orange of the Y square. There are almost no gradients, very few shadows, and no decorative illustration. The content does the work: founder photos, company logos, batch codes like "W09" and "S12", and short quotes.

The 2025-2026 marketing pages (home, Apply, About) added an editorial layer on top of the older system:

- **Serif headlines.** Hero and page titles use Source Serif 4 at regular or medium weight, with the emotional words set in italic: "YC turns builders into *formidable founders*". A small bracketed footnote marker `[1]` sits after the headline like an academic citation.
- **Black pill "Apply" button** in italic serif, the one rounded, heavy element on the page.
- **Centered logo in the header**, with nav links split left and right of the 40px orange Y square.

Under that, the long-running "ycdc" component layer is still used across the Startup Directory, Founder Directory, Library and Launch YC: Avenir sans in light weights (200-300), orange `#FB651E` buttons with 6px corners, thin grey row dividers, and tiny uppercase tracked pills for batch and industry.

Mood words: plain, confident, literate, founder-first, slightly old-internet.

The Hacker News heritage matters. HN (`news.ycombinator.com`) is the purest form of the brand: an `#FF6600` top bar, `#F6F6EF` page, Verdana at 10pt, and grey `#828282` metadata. ycombinator.com keeps the same instinct for density and plain text, just with better type.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| YC Orange | `#FF6600` | Logo square (header SVG), HN header bar, `bg-[#ff6600]` accents |
| Button Orange | `#FB651E` | `.ycdc-btn` fill and border, outline button text, link buttons |
| Burnt Orange | `#BA3E03` | Button hover and disabled fill |
| Ink | `#16140F` | Page titles, body text, black pill buttons, icons |
| Ink 70 | `rgba(22,20,15,0.7)` | Secondary paragraph text (`text-[#16140f]/70`) |
| Dark Ink | `#242219` | Focus-within borders on search inputs |
| Beige Light | `#F5F5EE` | `body` and header background |
| Paper | `#FDFDF8` | `.ycdc-card`, directory rows, filter drawer |
| Card White | `#FFFFFF` | `.ycdc-card-new` fill, company row hover |
| Tag Beige | `#E6E4DC` | `.ycdc-badge` background |
| Pill Beige | `#E6E6DD` | Directory pills (batch, industry, location) |
| Field Beige | `#EFEFE8` | Facet inputs, count chips |
| Advert Beige | `#F1F1ED` | Inline promo rows in result lists (hover `#E7E7E0`) |
| Rule Grey | `#C6C6C6` | Row borders, search box border |
| Line Grey | `#CCCCCC` | Divider under each result row |
| Card Border | `#E0E0E0` | `.ycdc-card-new` border |
| Muted Grey | `#868683` | Sub-nav items |
| Quote Grey | `#716F6F` | Story quotes, carousel arrows |
| Gold | `#FDA942` | `.ycdc-btn-gold`, retro gold button |
| Link Blue | `#268BD2` | Legacy in-list promo buttons |
| Pill Icon Orange | `#E36D35` | Small icons inside directory pills (e.g. "Top Company") |

### Semantic colors

The site leans on Tailwind defaults for state. Treat these as the working set:

| State | Value | Use |
|---|---|---|
| Success | Tailwind emerald-500, about `#00BC7D` (hover emerald-700 `#007A55`) | `.ycdc-btn-green`, "Active" status |
| Info | Tailwind blue-500, about `#3080FF` | `.ycdc-btn-blue` |
| Error | `#D0021B` / `#B22222` | Form errors |
| Highlight | `#CBDDF3` | Search-term highlight inside results |

The emerald and blue hex values above are conversions from Tailwind 4 oklch tokens, so treat them as approximate.

### Dark mode

There is no dark theme on ycombinator.com. The only dark surfaces are black pill buttons and occasional full-bleed founder video blocks. Do not invent a dark mode; if you need one, invert to Ink `#16140F` background with Beige Light text and keep the orange.

## 3. Typography

**Families**

- **Source Serif 4** (Google Fonts, free) for hero lines, page titles (`.ycdc-page-title`), article titles, section headers and the Apply button. Loaded with the optical-size axis (`opsz 8..60`).
- **Avenir** for UI and body text, declared as `Avenir, ui-sans-serif, system-ui, sans-serif`. Avenir is a commercial Linotype face that ships on Apple devices; on Windows and Android visitors fall back to the system sans. Closest Google substitute: **Nunito Sans** (or Figtree).
- **Outfit** is the fallback named inside the directory component (`--directory-font-family: Outfit, Helvetica, Arial`), but the page overrides it with Avenir. Outfit is free on Google Fonts if you want a geometric alternative.
- **DM Sans** is also loaded (Google Fonts) and used in a few newer modules.
- Hacker News: Verdana 10pt, monospace for inputs.

**Weights.** The body is set unusually light: `body { font-weight: 200 }` (extralight). Paragraphs on content pages are 300 (`font-light text-[18px] leading-[1.7]`). Names and buttons are 500. Bold 700 appears in older retro buttons and story headlines.

### Scale

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Hero (home) | Source Serif 4 | 32px mobile to ~60px desktop | 400, key phrase italic | 1.2 | -0.025em |
| Page title | Source Serif 4 | `clamp(2.5rem, 5vw, 3.75rem)` (40-60px) | 500 | 1.25 | -0.025em |
| Article title | Source Serif 4 | `clamp(1.5rem, 2.5vw, 2rem)` | 500 | 1.25 | -0.025em |
| Section title (italic) | Source Serif 4 | 22-28px | 500 italic | 1.25 | 0 |
| Company name (directory) | Avenir | 18px | 500 | 1.6 | 0 |
| Body large | Avenir | 18px | 300 | 1.7 | 0 |
| Body / description | Avenir | 16px | 200-300 | 1.5 | 0 |
| Nav link | Avenir | 14px | 400 | 1.25 | 0.3px |
| Location / meta | Avenir | 12px | 200 | 1.4 | 0 |
| Pill / badge | Avenir | 10-12px | 200 | 12px | 0.1em, uppercase |

### Rules

- Headlines are sentence case. Put the emotional phrase in italic, never bold.
- Footnote markers like `[1]` are a house detail on the homepage; set them at 16px, superscript, same ink color.
- Batch codes are always written letter-plus-two-digits: W24, S25, F25, X25. Use them as uppercase pill labels.
- Pills and badges are uppercase with `letter-spacing: 0.1em` and extralight weight. Nothing else is uppercase.
- Numbers in stats use the serif: "$1.3 Trillion in combined valuation" was the homepage stat when read on 2026-11-16.

## 4. Logo & Brand Mark

The mark is a white geometric **Y** centered in a solid orange square. The header SVG on ycombinator.com draws a 48 x 48 square filled `#FF6600` with the Y as a single white path whose arms meet slightly above center. The full lockup in print and older assets adds the words "Y Combinator" in a sans to the right of the square, but the live site header uses the square alone, centered, 40 x 40px.

- **Color versions:** white Y on `#FF6600` (primary). Older assets and Wikimedia use `#FB651E`. A one-color black square with knocked-out Y is acceptable for print.
- **Clear space:** at least one quarter of the square's width on every side.
- **Minimum size:** 16px square (favicon); 24px in UI.
- **Hacker News variant:** a 18 x 18 white-bordered "Y" box at the left of the orange HN bar.

Misuse:

- Do not round the square's corners in the logo itself (app icons get rounded by the platform).
- Do not recolor the square to any orange other than `#FF6600` / `#FB651E`.
- Do not outline the Y, or place the square on a busy photo.
- Do not stretch the Y or set "Y" in a font as a substitute.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding / size |
|---|---|---|---|---|---|
| Apply pill (new) | `#000000` | `#F5F5EE` or white, Source Serif 4 italic 400 | none | 9999px | 40px tall in header (px 20, 14px text); 80px tall on /apply (px 40, 28px text) |
| Primary `.ycdc-btn` | `#FB651E` | `#FFFFFF` Avenir 500 16px | 1px `#FB651E` | 6px | 8px 16px |
| Primary small | same | 14px | 1px | 6px | 8px 12px |
| Primary large | same | 18px | 2px | 6px | 8px 16px |
| Outline | transparent | `#FB651E` | 1px currentColor | 6px | 8px 16px |
| Link | transparent | `#FB651E`, underlined | none | 0 | inline |
| Gold | `#FDA942` | `#FFFFFF` | 1px `#FDA942` | 6px | 8px 16px |
| Dark (Library) | `#16140F` | `#FFFFFF` 500 | none | 6px | 8px 16px |

States:

- Primary hover and disabled: `#BA3E03`. Outline hover fills with the color and turns text white.
- Dark button hover: `#2A2823`.
- Pill hover: `opacity: 0.8`, transition `opacity, transform 300ms ease-out`.
- Text links inside articles: ink color, underline `decoration-gray-500`, `underline-offset: 2px`, hover darkens the underline to gray-700.

```css
.yc-apply {
  display: inline-flex; align-items: center; justify-content: center;
  height: 40px; padding: 0 20px 2px;
  border-radius: 9999px; background: #000; color: #fff;
  font: italic 400 14px/1 "Source Serif 4", Georgia, serif;
  letter-spacing: 0.015rem;
  transition: opacity .3s ease-out;
}
.yc-apply:hover { opacity: .8; }

.yc-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 8px 16px; border-radius: 6px;
  background: #FB651E; border: 1px solid #FB651E; color: #fff;
  font: 500 16px/1.5 Avenir, "Nunito Sans", system-ui, sans-serif;
  white-space: nowrap;
}
.yc-btn:hover { background: #BA3E03; border-color: #BA3E03; }
```

### Startup Directory (signature)

The directory at `/companies` is the most copied YC layout.

- **Two columns:** a left filter column (about 260-300px) and a results list.
- **Search box:** panel `#FDFDF8`, 1px `#C6C6C6` border, 20px padding; input 1px `#CCCCCC`, radius 4px, 10px padding, 16px text.
- **Facets:** 13px labels, weight 200; group headings 14px/600 `#333333`; checkboxes 20px; each option has a count chip (`#EFEFE8` fill, 1px `#DDDDDD`, radius 3px, `#555555` text, 85% size). Facet groups: Batch, Industry, Region, Company Size, "Top Companies", "Is Hiring", "Nonprofit".
- **Active filters:** chips with 1px `#D3D3D3` border, 16px radius, 5px 12px padding, 13px, with an x button.
- **Result rows:** each company is a full-width link row, `#FDFDF8` background, 20px padding, 1px `#CCCCCC` bottom border, first row has a top border, first and last rows get 8px outer corners. Hover turns the row white.
- **Row content:** square logo (about 64px, rounded 4-8px) left, then company name 18px/500, location 12px, one-line description 16px, then a row of pills.
- **Pills:** `#E6E6DD`, radius 4px, 4px 10px padding, 10px uppercase extralight with 0.1em tracking, 5px gap. Batch pill first ("W24"), then industry ("B2B", "FINTECH"), then region.

### Badges

`.ycdc-badge`: inline-flex, `#E6E4DC` fill, radius 4px, 6px 12px padding, 12px uppercase extralight, `letter-spacing: 0.1em`, line-height 1, 6px icon gap.

### Cards

- `.ycdc-card`: `#FDFDF8`, 1px grey-400 border (about `#99A1AF`), radius 8px, 24px padding.
- `.ycdc-card-new`: white, 1px `#E0E0E0`, radius 8px, 24px padding.
- Founder or company photos inside the homepage "During YC / Now" carousel: square, radius 12px, shadow `0 8px 32px rgba(0,0,0,0.15)`, slight scale on hover over 300ms.

### Navigation

- Header background `#F5F5EE`, 12px vertical padding, max content width 1400px.
- Desktop: links left ("About", "Companies", "Library"), the 40px Y square centered, links right ("Partners", "Resources", "Startup Jobs"), then "Log in" (14px ink, hover opacity 0.6) and the black Apply pill pinned right.
- Dropdowns open below a nav item with a 12px chevron; items are plain text links ("What Happens at YC?", "Startup Directory", "Founder Directory", "Launch YC", "Hacker News", "Bookface", "SAFE").
- Mobile (below 1200px): centered Y square, hamburger at right in a white rounded-md button.

### Tabs and sub-nav

Sub-navigation is a row of 500-weight links in `#868683`, separated by a short 15deg slanted rule (`.ycdc-subnav-title:after`). Active item turns ink.

### Inputs and application form

- Inputs: transparent or `#EFEFE8` fill, 1px `#DDDDDD` or `#CCCCCC` border, 4px radius, 6px 10px padding.
- Focus: border `#242219` with a 1px ring; no colored glow.
- The application itself lives on `apply.ycombinator.com`: a long single-column form, one question per block, plain labels in ink, helper text grey, character counters under textareas, and a founder-video upload step. Keep it calm and text-led.

### Lists, avatars, misc

- Founder avatars are circles (`rounded-full`), 36px in quote attributions, larger on profile pages.
- Logo walls: grid of fixed 105-150px cells (`.ycdc-logo-grid`), logos grayscale or original color, no boxes.
- Arrows on "All companies" style links: 12px chevron that shifts right on hover (300ms).

## 6. Layout & Spacing

- **Spacing:** Tailwind 4 base unit `0.25rem`; common steps 4, 8, 12, 16, 24, 32, 48, 64px.
- **Max widths:** header 1400px; page container `max-w-ycdc-page` (about 1200px); article and Apply text column 640px.
- **Gutters:** 16px mobile (`px-4`), 20px header (`px-5`), 32-40px desktop sections.
- **Breakpoints:** Tailwind defaults (640, 768, 1024, 1280) plus a header switch at 1200px and 1400px.
- **Page rhythm:** page header 48-64px top padding, title, then 40-48px to content. Sections are separated by space, not by background color changes.
- **Table of contents layouts:** Library articles use `grid-template-columns: 200px 1fr 375px` (left TOC, body, right rail).
- **Density:** directory and HN are dense lists; marketing pages are airy and centered.

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation comes from paper tones (`#F5F5EE` page, `#FDFDF8` cards, white hover) and 1px rules.
- Shadows only on photography: `0 8px 32px rgba(0,0,0,0.15)` (homepage carousel), `0 0 54px rgba(0,0,0,0.3)` (story images).
- Filter drawer on mobile: fixed panel with a 20px gradient fade from transparent to `#FDFDF8`.
- Motion: Tailwind default `150ms cubic-bezier(0.4, 0, 0.2, 1)` for color; 300ms ease-out for opacity and transforms; a slow 2.5s bounce on the "scroll down" chevron. Directory row hover has no transition (`transition: none`), it snaps.
- Respect `prefers-reduced-motion`: stop the carousel autoplay and bounce.

## 8. Iconography & Imagery

- **Icons:** Heroicons outline (24px, 2px stroke) for menu and UI; Material Symbols Outlined in some product areas; square-capped 2px chevrons for dropdowns. Social icons are filled 24px glyphs in ink.
- **Photography:** real founders, often candid or archival: batch photos, interview shots, early office snapshots. Paired "During YC" and "Now" images are a homepage signature. Square crops with 12px corners.
- **Company logos:** shown at true colors on transparent backgrounds in grids and carousels, height capped around 90px.
- **No illustration.** No stock imagery, no 3D renders, no gradients.

## 9. Voice & Microcopy

Direct, plain, a little dry. Short sentences. Talks to founders as builders. Avoids hype words and uses specific facts and dates.

- Sentence case everywhere except pills.
- Founder names first, then company: "Brian, Joe, and Nate did YC in W09."
- Uses "formidable", "builders", "make something people want".
- CTAs are one word where possible: "Apply", "Log in", "Learn more".

Sample strings:

- Hero: "YC turns builders into *formidable founders*"
- Process: "Four times a year we invest $500k in a select group of startups." (read on the homepage on 2026-11-16)
- Apply page: "Apply to Y Combinator", "Not ready to apply this batch? Sign up for reminders to apply next batch."
- Directory: a plain search placeholder, filters "Is Hiring", "Top Companies", "Nonprofit".
- Pill labels: "W25", "B2B", "FINTECH", "SAN FRANCISCO".

## 10. Do's and Don'ts

**Do**

- Use the warm beige `#F5F5EE` page and ink `#16140F` text, never pure white plus pure black for a whole page.
- Set headlines in Source Serif 4 and italicize the key phrase.
- Keep orange for the logo and primary actions only.
- Use light Avenir (200-300) for body copy with generous line-height (1.5-1.7).
- Build lists with thin grey rules and paper-colored rows; use small uppercase pills for batch and tags.
- Use real photos of real founders and real batch codes.

**Don't**

- Don't add gradients, glassmorphism, or colored shadows.
- Don't round everything; only the Apply pill and avatars are fully round, buttons are 6px.
- Don't use bold sans headlines; the hierarchy comes from the serif.
- Don't use orange text for paragraphs or long links.
- Don't quote portfolio numbers from memory; read them from the live site first.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Y Combinator (ycombinator.com). Warm beige page `#F5F5EE`, text in ink `#16140F`. Headlines in "Source Serif 4" at weight 400-500, tracking -0.025em, with the key phrase in italic; page titles `clamp(2.5rem, 5vw, 3.75rem)`. Body in `Avenir, "Nunito Sans", system-ui, sans-serif` at weight 300, 16-18px, line-height 1.5-1.7. Header: beige, nav links split left and right of a centered 40px orange square logo (`#FF6600` with a white Y), "Log in" text link and a black pill "Apply" button in italic serif at the far right. Primary buttons are `#FB651E` with white 500 text, 6px radius, 8px 16px padding, hover `#BA3E03`. Lists look like the Startup Directory: full-width rows on `#FDFDF8` with 20px padding and 1px `#CCCCCC` dividers, square logo left, 18px/500 name, 12px location, 16px description, then tiny uppercase pills (`#E6E6DD`, 4px radius, 10px, letter-spacing 0.1em) for batch codes like "W25". Cards: `#FDFDF8` or white, 1px border, 8px radius, 24px padding. No gradients, almost no shadows (only on photos: `0 8px 32px rgba(0,0,0,0.15)`). Copy is short, plain and specific.

```css
:root {
  --brand-orange: #FF6600;
  --brand-button: #FB651E;
  --brand-button-hover: #BA3E03;
  --brand-ink: #16140F;
  --brand-ink-70: rgba(22, 20, 15, 0.7);
  --brand-bg: #F5F5EE;
  --brand-paper: #FDFDF8;
  --brand-white: #FFFFFF;
  --brand-badge: #E6E4DC;
  --brand-pill: #E6E6DD;
  --brand-field: #EFEFE8;
  --brand-rule: #C6C6C6;
  --brand-line: #CCCCCC;
  --brand-muted: #868683;
  --brand-gold: #FDA942;
  --brand-hn-bg: #F6F6EF;
  --brand-hn-meta: #828282;
  --brand-font-display: "Source Serif 4", Georgia, serif;
  --brand-font: Avenir, "Nunito Sans", ui-sans-serif, system-ui, sans-serif;
  --brand-font-mono: ui-monospace, "JetBrains Mono", Menlo, monospace;
  --brand-weight-body: 300;
  --brand-weight-strong: 500;
  --brand-radius-pill-tag: 4px;
  --brand-radius-button: 6px;
  --brand-radius-card: 8px;
  --brand-radius-photo: 12px;
  --brand-radius-full: 9999px;
  --brand-shadow-photo: 0 8px 32px rgba(0, 0, 0, 0.15);
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --brand-duration: 150ms;
  --brand-page-max: 1200px;
  --brand-text-max: 640px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Y Combinator.

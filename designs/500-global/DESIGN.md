---
name: 500 Global
slug: 500-global
url: https://500.co
category: Accelerator
tagline: "Cream paper, deep teal ink, light serif headlines and a lime highlighter accent."
updated: 2026-11-16
logoBackground: "#F5F5EB"
theme: light
colors:
  - name: Deep Teal
    hex: "#0A1E25"
    role: Text, logo, dark sections, outline button borders
  - name: Cream
    hex: "#F5F5EB"
    role: Page background, text on dark, logo on dark
  - name: Lime
    hex: "#E6FF32"
    role: Form submit and high-emphasis CTA fill
  - name: Leaf Green
    hex: "#41A050"
    role: Link hover, focus underline, caret, active labels
  - name: Mint
    hex: "#A0D0A8"
    role: Arrow chip on button hover
  - name: Pale Mint
    hex: "#C4EBCB"
    role: Gradient hover on tiles
  - name: Slate Teal
    hex: "#212F34"
    role: Secondary dark surface
  - name: Grey 200
    hex: "#E5E7EB"
    role: Program tag pills
  - name: Mid Grey
    hex: "#717171"
    role: Secondary text and meta
  - name: Rule
    hex: "#CCCCCC"
    role: Dividers and borders
  - name: Error
    hex: "#A04141"
    role: Form errors
  - name: White
    hex: "#FFFFFF"
    role: Cards and inputs on dark
fonts:
  display:
    family: "Tobias"
    fallback: "Newsreader"
    weights: [300]
  body:
    family: "Apercu Pro"
    fallback: "DM Sans"
    weights: [400, 700]
  mono:
    family: "Apercu Mono Pro"
    fallback: "DM Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 80, weight: 300, lineHeight: 1.0, tracking: "-0.02em" }
  - { role: Section, size: 48, weight: 300, lineHeight: 0.92, tracking: "-0.02em" }
  - { role: Card Title, size: 32, weight: 300, lineHeight: 1.0, tracking: "-0.02em" }
  - { role: Program Title, size: 30, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.17, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Label Mono, size: 14, weight: 400, lineHeight: 1.3, tracking: "0.15em" }
  - { role: Tag Mono, size: 12, weight: 400, lineHeight: 1.33, tracking: "0.1em" }
radii: { sm: 4, md: 8, lg: 32, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows: []
preview:
  bg: "#F5F5EB"
  surface: "#FFFFFF"
  text: "#0A1E25"
  muted: "#717171"
  border: "#0A1E25"
  accent: "#E6FF32"
  accentText: "#0A1E25"
  radius: 9999
  buttonStyle: pill
---

# 500 Global

## 1. Visual Theme & Atmosphere

500 Global (formerly 500 Startups, renamed in 2021) presents itself as a calm, editorial venture firm rather than a loud accelerator. The site is cream paper (`#F5F5EB`) with deep teal-black ink (`#0A1E25`), large light-weight serif headlines, and small uppercase monospace labels. The single loud color is a lime highlighter (`#E6FF32`) used for key buttons. A leaf green (`#41A050`) handles hover and focus.

What makes it recognisable:

- **The "500" mark.** Three heavy, slightly italic numerals with oval zeros. It reads like a magazine masthead.
- **Light serif display.** Tobias Light at 48-80px with -0.02em tracking. Headlines whisper rather than shout: "We invest in the world's potential".
- **Mono labels.** Apercu Mono in uppercase with 0.15em tracking for eyebrows, buttons and tags: "FOR FOUNDERS", "FOR INVESTORS", "PROGRAM".
- **Outline pill buttons with an arrow chip.** A thin teal outline pill with a round arrow at the right end; on hover the arrow chip fills mint and slides right.
- **Underline-only forms.** Inputs have no box, only a thin teal bottom rule that turns green on focus.
- **Viewport-based sizing.** Much of the type and spacing is set in `vw`, so the layout scales smoothly with the window.

Mood words: global, considered, editorial, warm, understated.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Deep Teal | `#0A1E25` | Body text, headings, logo, outline borders, dark sections |
| Cream | `#F5F5EB` | Page background (`.text-clear` on dark), input fill, logo on dark |
| Lime | `#E6FF32` | Submit buttons and "Apply" style CTAs; text color on dark hover |
| Leaf Green | `#41A050` | Link hover, focused field underline, caret color, checkbox dot, focused label |
| Mint | `#A0D0A8` | Arrow chip fill when a primary button is hovered |
| Pale Mint | `#C4EBCB` | End color of tile hover gradients |
| Slate Teal | `#212F34` | Secondary dark surface |
| White | `#FFFFFF` | Cards, menus |
| Grey 200 | `#E5E7EB` | Program tag pill background (`bg-gray-200`) |
| Mid Grey | `#717171` | Meta text, disclaimers |
| Cool Grey | `#6B7280` | Tailwind gray-500 secondary text |
| Rule | `#CCCCCC` | Dividers |
| Error | `#A04141` | Form error text and underline |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Focus / active | `#41A050` | Field underline and label |
| Error | `#A04141` | Field underline and message |
| Success | `#26AB33` (approximate) | Confirmation states |
| Warning | `#EAB308` | Rare inline notices |

### Dark sections

Dark bands use `#0A1E25` with Cream `#F5F5EB` text and headings (the global `h2` style is cream Tobias light). Newsletter and Mailchimp blocks sit on this dark teal. On dark, lime buttons stay lime with teal text; hover inverts to teal fill with lime text.

## 3. Typography

**Families**

- **Tobias**, a commercial editorial serif, used in its Light cut as `"Tobias Light"` for display headings.
- **Apercu Pro** (Colophon) for body and UI, with Noto Sans KR/JP added for Korean and Japanese pages.
- **Apercu Mono Pro** for labels, tags and button text.

All three are commercial. Free substitutes: **Newsreader** (light 300) for Tobias, **DM Sans** for Apercu, **DM Mono** for Apercu Mono. All are on Google Fonts.

```css
--font-display: "Tobias Light", "Tobias", "Newsreader", Georgia, serif;
--font-body: "Apercu Pro", "DM Sans", "Noto Sans KR", "Noto Sans JP", sans-serif;
--font-mono: "Apercu Mono Pro", "DM Mono", ui-monospace, monospace;
```

### Scale

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Hero H1 | Tobias Light | about 4.2-5vw on desktop (60-80px), 12.8vw mobile | 300 | 7.8vw (about 1.0) | -1.2px |
| Section heading | Tobias Light | 48px | 300 | 44px | -0.02em |
| Event / card title | Tobias Light | 32px | 300 | 32px | -0.02em |
| Program title | Tobias | 30px (`text-3xl`) | 300 | 36px | 0 |
| Body | Apercu Pro | 18px | 400 | 21px | 0 |
| Small body | Apercu Pro | 14px | 400 | 1.4 | 0 |
| Button label | Apercu Mono | 14px uppercase | 400 | 18px | 0.15em (1.5px) |
| Tag | Apercu Mono | 12px uppercase | 400 | 16px | 0.1em |
| Stat number | Tobias Light | 48-64px | 300 | 1.0 | -0.02em |

The weights are deliberately low. The serif never goes bold. Bold Apercu appears only inside rich text (`b { font-weight: 900 }` in articles).

### Rules

- Headlines in sentence case with a period where they are statements.
- Labels, tags and button text in uppercase mono with wide tracking.
- Numbers in stats use the serif and a superscript footnote marker (`¹`, `²`) that links to the disclaimer block. Keep the footnotes; 500 Global is a registered adviser and its pages carry long legal disclaimers.
- Use arrows as text glyphs in buttons: "See our full portfolio →".

## 4. Logo & Brand Mark

The logo is the numerals **500** only. The digits are heavy, high-contrast and slightly slanted; the two zeros are tall ovals with angled counters, and the 5 has a flat top bar. The site serves it as a 140 x 48 SVG in cream for dark headers and in `#0A1E25` for light pages.

- **Color versions:** Deep Teal `#0A1E25` on cream or white; Cream `#F5F5EB` on Deep Teal; white on photography.
- **Clear space:** the width of one zero on every side.
- **Minimum size:** 48px wide on screen.
- **Name:** write the company as "500 Global". Older material says "500 Startups"; do not mix the two in new work.

Misuse:

- Do not add "Global" in a different typeface next to the numerals unless using the official lockup.
- Do not recolor the mark lime or green.
- Do not outline, skew further or add a drop shadow.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Outline pill with arrow (primary on content) | transparent | `#0A1E25` Apercu Mono 14px uppercase, 0.15em | 1px (0.1em) `#0A1E25` | 50px | 4px 4px 4px 24px, 12px gap to arrow chip |
| Lime CTA | `#E6FF32` | `#0A1E25` mono uppercase | none | 32px (1.67vw) | about 26px 52px on desktop, 3rem tall in forms |
| Lime CTA hover | `#0A1E25` | `#E6FF32` | none | same | same |
| Text link with arrow | none | `#0A1E25`, underlined | none | 0 | inline |

Arrow chip: a 32-40px circle at the right end of the outline pill containing "→". On hover the whole button nudges right (`transform: translateX(10%)`, 200ms ease-in-out), the chip fills `#A0D0A8` and gains 0.4em left margin over 500ms. A green variant (`.button-arrow-2`) uses `#41A050` for the chip outline and arrow.

```css
.g5-btn {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 4px 4px 4px 24px;
  border: 1px solid #0A1E25; border-radius: 50px;
  background: transparent; color: #0A1E25;
  font: 400 14px/18px "Apercu Mono Pro", "DM Mono", monospace;
  letter-spacing: .15em; text-transform: uppercase;
  transition: transform 200ms ease-in-out;
}
.g5-btn .arrow {
  display: grid; place-items: center; width: 36px; height: 36px;
  border-radius: 50%; border: 1px solid #0A1E25;
  transition: all 500ms ease;
}
.g5-btn:hover .arrow { background: #A0D0A8; margin-left: .4em; }
.g5-btn--lime { background: #E6FF32; border-color: #E6FF32; padding: 16px 32px; }
.g5-btn--lime:hover { background: #0A1E25; color: #E6FF32; }
```

### Inputs (signature)

- No box: `border: 0; border-bottom: 1px solid #0A1E25; border-radius: 0; background: transparent`.
- 18px Apercu text, bottom padding about 20px, large vertical gap between fields (about 3vw).
- Labels sit above in small text; on focus the label and underline turn `#41A050` and the caret is green.
- Autofill is masked with an inset cream shadow so fields never turn yellow.
- Errors: underline and message `#A04141`.
- Checkboxes: custom circle with a green `#41A050` dot.

### Program cards and rows

The homepage lists strategies as rows or cards:

- Region label ("US/Global") in small uppercase Apercu.
- Audience pill: `bg-gray-200` (`#E5E7EB`), fully rounded, 4px 8px padding, 12px uppercase mono ("FOR INVESTORS", "FOR FOUNDERS", "FOR ENABLERS", "PROGRAM").
- Title: 30px Tobias ("Flagship Accelerator", "VC Unlocked: Silicon Valley", "Sustainable Growth Strategy").
- A region selector lists "US/Global", "Latin America", "Middle East/North Africa", "Eurasia", "Southeast Asia", "East Asia" with a "↓" toggle.
- Hover on tiles: text turns `#41A050` and a gradient from white to `#C4EBCB` fades in.

### Stats block

Two to three columns of large Tobias Light numbers ("$2.0B in AUM", "3,000+ startups backed", read on the homepage on 2026-11-16) with a small sans label and a superscript footnote number. Keep the footnote and disclaimer pattern.

### Event cards

Category tag in mono ("networking"), title in 32px Tobias Light, date and city in small Apercu, and an access label ("Invite only").

### Navigation

- Light header on cream with the teal "500" logo left; on dark heroes it switches to the cream logo.
- Menu groups (from the site footer and menu): "PORTFOLIO", "FOR FOUNDERS", "FOR INVESTORS", "FOR ENABLERS", "INSIGHTS", "NETWORK", "ABOUT", set as uppercase mono group labels with plain sans links under them ("Founder Programs", "Content Hub", "Rise Report", "People", "Ethos", "History", "Careers").
- Dropdowns: white, small text, `color: #0A1E25`, max height 50vh with scroll.

### Portfolio list

`/companies` shows a searchable list of companies with filters for region and sector, logo plus name rows on cream, thin rules between rows. (Layout described from the homepage link and menu; details approximate.)

## 6. Layout & Spacing

- **Units:** the site is built in Builder.io and Tailwind with many `vw` values; on a 1920px design, 1.04vw = 20px. When rebuilding, use fixed px with `clamp()`.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px. Form fields stack about 48-60px apart.
- **Content width:** full-bleed bands with an inner width around 1280-1440px; text columns around 640-720px.
- **Gutters:** 20px mobile (about 5vw), 48-80px desktop.
- **Breakpoints:** 768px is the main mobile switch (`max-width: 767px`), plus Tailwind md/lg.
- **Section spacing:** 96-160px on desktop. Cream and Deep Teal bands alternate.
- **Alignment:** left-aligned editorial layout with lots of empty space to the right of headlines.

## 7. Depth, Elevation & Motion

- Flat. No shadows on cards or buttons. Separation comes from cream vs teal bands, thin rules and outlines.
- Motion is slow and smooth: 200ms ease-in-out for button nudges, 500ms ease for arrow chips, link color transitions `.5s cubic-bezier(.85,0,.15,1)`.
- Lime CTA hover inverts colors over 200ms.
- Use a slow marquee or slide for logo strips only.

## 8. Iconography & Imagery

- **Icons:** minimal. Arrows as text glyphs (→, ↓) inside circles. Social icons are thin outline glyphs (facebook-circle, instagram, linkedin, x).
- **Photography:** founders and investors at events around the world, natural color, often cropped to tall rectangles. Global and multicultural casting matters to the brand ("Talent lives everywhere. Capital and opportunity does not.").
- **Illustration:** rare; when used, flat shapes in cream, teal, lime and green.

## 9. Voice & Microcopy

Measured, global, slightly formal because of regulatory context. Talks about founders, investors and "enablers" (governments, corporations). Avoids hype; backs claims with footnoted figures.

- Sentence case headlines, uppercase mono labels.
- Arrows in CTAs.

Sample strings (seen on 500.co on 2026-11-16):

- Hero: "We invest in the world's potential"
- Statement: "Talent lives everywhere. Capital and opportunity does not."
- CTA: "See our full portfolio →"
- Section: "Putting performance to work", "Upcoming events"
- Labels: "FOR FOUNDERS", "FOR INVESTORS", "FOR ENABLERS", "PROGRAM", "Invite only"

## 10. Do's and Don'ts

**Do**

- Use cream `#F5F5EB` pages with Deep Teal `#0A1E25` text, and full-width teal bands for contrast.
- Set headlines in a light serif with -0.02em tracking; never bold them.
- Use uppercase mono with 0.15em tracking for labels and button text.
- Use outline pills with a round arrow chip; save lime for the one action that matters.
- Use underline-only form fields with a green focus state.
- Footnote every performance number and include a disclaimer.

**Don't**

- Don't use pure white pages or pure black text.
- Don't add drop shadows or rounded cards with heavy elevation.
- Don't fill large areas with lime; it is a highlighter.
- Don't call the firm "500 Startups" in new UI.
- Don't use bold sans headlines.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of 500 Global (500.co). Cream page `#F5F5EB`, deep teal ink `#0A1E25`, alternating full-width teal sections with cream text. Headlines in a light serif (`"Tobias Light", Newsreader, Georgia, serif`, weight 300, 48-80px, tracking -0.02em, line-height about 1). Body in `"Apercu Pro", "DM Sans", sans-serif` 18px. Labels, tags and button text in uppercase monospace (`"Apercu Mono Pro", "DM Mono"`) 12-14px with 0.15em tracking. Primary content buttons are outline pills (1px teal border, radius 50px, padding 4px 4px 4px 24px) with a round arrow chip at the right that fills mint `#A0D0A8` and slides right on hover; the key CTA is a lime `#E6FF32` pill with teal text that inverts on hover. Program cards show a grey rounded audience tag ("FOR FOUNDERS"), a 30px serif title and a region label. Forms use underline-only inputs (1px teal bottom border) that turn green `#41A050` on focus. No shadows; use space and thin rules. Show big serif stats with superscript footnotes and a disclaimer.

```css
:root {
  --brand-ink: #0A1E25;
  --brand-cream: #F5F5EB;
  --brand-lime: #E6FF32;
  --brand-green: #41A050;
  --brand-mint: #A0D0A8;
  --brand-mint-pale: #C4EBCB;
  --brand-slate: #212F34;
  --brand-white: #FFFFFF;
  --brand-tag: #E5E7EB;
  --brand-muted: #717171;
  --brand-rule: #CCCCCC;
  --brand-error: #A04141;
  --brand-font-display: "Tobias Light", "Tobias", "Newsreader", Georgia, serif;
  --brand-font: "Apercu Pro", "DM Sans", "Noto Sans KR", "Noto Sans JP", sans-serif;
  --brand-font-mono: "Apercu Mono Pro", "DM Mono", ui-monospace, monospace;
  --brand-tracking-label: 0.15em;
  --brand-tracking-display: -0.02em;
  --brand-radius-pill: 50px;
  --brand-radius-cta: 32px;
  --brand-radius-tag: 9999px;
  --brand-ease-link: cubic-bezier(.85, 0, .15, 1);
  --brand-duration-fast: 200ms;
  --brand-duration-slow: 500ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by 500 Global.

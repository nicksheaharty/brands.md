---
name: The Verge
shortName: The Verge
slug: the-verge
url: https://theverge.com
category: News
tagline: "Electric purple and mint highlights, PolySans headlines, huge Manuka display, quick posts."
updated: 2026-11-16
logoBackground: "#131313"
theme: light
colors:
  - name: Verge Purple
    hex: "#5200FF"
    role: Links, accents, focus, underlines, brand highlight
  - name: Mint
    hex: "#3CFFD0"
    role: Highlight marker, accents on dark, icon field
  - name: Ink
    hex: "#131313"
    role: Text, dark surfaces, logo field
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Lavender
    hex: "#EEE6FF"
    role: Soft purple panels, selected states
  - name: Live Red
    hex: "#EE0033"
    role: Live labels and breaking markers
  - name: Black
    hex: "#000000"
    role: Video and full-bleed dark sections
  - name: Dark Surface
    hex: "#313131"
    role: Cards and panels in dark sections
  - name: Grey 700
    hex: "#4A4A4A"
    role: Secondary text
  - name: Grey 600
    hex: "#636363"
    role: Timestamps, bylines
  - name: Grey 400
    hex: "#949494"
    role: Meta text on dark
  - name: Grey 300
    hex: "#BDBDBD"
    role: Disabled and tertiary elements
  - name: Border
    hex: "#E9E9E9"
    role: Rules and card borders
  - name: Light Purple
    hex: "#A980FF"
    role: Links on dark backgrounds
  - name: Lime
    hex: "#D6F31F"
    role: Occasional accent for deals and promos
fonts:
  display:
    family: "PolySans"
    fallback: "Space Grotesk"
    weights: [300, 400, 500, 700]
  body:
    family: "FK Roman Standard"
    fallback: "Source Serif 4"
    weights: [400]
  mono:
    family: "PolySans Mono"
    fallback: "Space Mono"
    weights: [400, 500]
typeScale:
  - { role: Manuka display, size: 120, weight: 900, lineHeight: 0.8, tracking: "0" }
  - { role: Article headline, size: 60, weight: 700, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Lead headline, size: 44, weight: 700, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Card headline, size: 22, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Dek, size: 20, weight: 400, lineHeight: 1.5, tracking: "-0.01em" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.6, tracking: "-0.01em" }
  - { role: Label, size: 12, weight: 500, lineHeight: 1.2, tracking: "0.06em" }
  - { role: Meta, size: 11, weight: 400, lineHeight: 1.1, tracking: "0.02em" }
radii: { sm: 2, md: 10, lg: 24, pill: 999 }
spacing: [4, 6, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Popover, value: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#EEE6FF"
  text: "#131313"
  muted: "#636363"
  border: "#E9E9E9"
  accent: "#5200FF"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# The Verge

## 1. Visual Theme & Atmosphere

The Verge's 2022 redesign (still the base of the site) mixes a classic blog feed with loud graphic design. The light theme is white and near-black `#131313` with an electric purple `#5200FF` for links and accents and a bright mint `#3CFFD0` that behaves like a highlighter. Headlines are set in PolySans, reading text in a modern serif (FK Roman Standard), and big moments use Manuka, an ultra-condensed display face at 100px and up.

What makes it recognisable:

- **The wordmark.** "The Verge" in a custom sans where the "V" is a cut, slanted shape, plus a dropped descender on the "g".
- **Purple and mint.** `#5200FF` underlines and links; `#3CFFD0` as a fat marker highlight behind text and as a fill on dark sections.
- **The Storystream feed.** A homepage river of full stories mixed with short "quick posts" that read like microblog entries, each with a timestamp and author.
- **Huge condensed display type.** Manuka 900 at 100-160px for section fronts, "Top Stories" and event coverage.
- **Mono metadata.** Bylines, timestamps and labels in PolySans Mono, often uppercase.

Mood words: energetic, opinionated, playful, techy, graphic.

## 2. Color Palette & Roles

Values below were read from theverge.com's light theme (`vergeLight`) CSS on 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Verge Purple | `#5200FF` | Links, accents, 4px focus borders (`4px solid #5200ff`), underlines |
| Purple Dark | `#3D00BF` | Pressed or hover purple |
| Light Purple | `#A980FF` | Links and accents on dark surfaces |
| Lavender | `#EEE6FF` | Soft panels, selected states |
| Mint | `#3CFFD0` | Highlight marker (`inset 0 -.5em 0 0 #3cffd0`), accents on dark |
| Ink | `#131313` | Text, dark sections |
| Black | `#000000` | Video, full-bleed dark modules |
| Dark Surface | `#313131` | Cards and panels inside dark sections |
| Grey 700 | `#4A4A4A` | Secondary text |
| Grey 600 | `#636363` | Bylines, timestamps |
| Grey 400 | `#949494` | Meta on dark |
| Grey 300 | `#BDBDBD` | Disabled, tertiary |
| Border | `#E9E9E9` | 1px rules (`1px solid #e9e9e9`) |
| White | `#FFFFFF` | Page background |
| Live Red | `#EE0033` | Live labels |
| Lime | `#D6F31F` | Deals and promo accents |
| Pale Yellow | `#FFFCD4` | Callouts |

### Semantic colors

| State | Value | Use |
|---|---|---|
| Live | `#EE0033` | Live blog label and dot |
| Link | `#5200FF` text with `inset 0 -1px 0 0 #5200FF` underline | Inline links |
| Highlight | `inset 0 -.5em 0 0 #3CFFD0` | Marker highlight on hover or key text |
| Focus | `4px solid #5200FF` | Keyboard focus |
| Error | `#CF222E` | Form errors |
| Success | `#1A7F37` | Confirmations |

### Dark mode

The site follows `prefers-color-scheme`. In dark mode the background becomes `#131313`, text white, rules `#313131`, links switch to mint `#3CFFD0` or light purple `#A980FF`, and the highlight stays mint. Several modules (Top Stories, video, event coverage) are dark even in the light theme.

## 3. Typography

**Families** (from `--font-*` variables):

- **PolySans** (`polySans`): headlines, nav, buttons, most UI. Weights 300, 400, 500, 700.
- **PolySans Mono** (`polySansMono`): bylines, timestamps, labels, numerals.
- **FK Roman Standard** (`fkRomanStandard`): article body, decks and some quick posts.
- **Manuka** (`manuka`): ultra-condensed display at 850-900 weight for huge headings.

**Licensing:** all four are commercial and licensed by Vox Media. Substitutes: **Space Grotesk** or **Inter** for PolySans, **Space Mono** for PolySans Mono, **Source Serif 4** for FK Roman, **Anton** or **Bebas Neue** for Manuka.

```css
--font-polysans: "polySans", "Space Grotesk", Helvetica, Arial, sans-serif;
--font-polysans-mono: "polySansMono", "Space Mono", "Courier New", monospace;
--font-fkroman: "fkRomanStandard", "Source Serif 4", Georgia, serif;
--font-manuka: "manuka", "Anton", Impact, Helvetica, sans-serif;
```

### Scale (from theme tokens)

| Role | Family | Size / line | Weight |
|---|---|---|---|
| Section display | Manuka | 100-160px / 0.8-1.0 | 900 |
| Event display | Manuka | 60-71px / 0.8-0.9 | 850-900 |
| Article headline | PolySans | 50-60px / 1.0-1.1 (34px mobile) | 700 |
| Lead headline | PolySans | 44px / 1.0 | 700 |
| Feature headline (light) | PolySans | 55-70px / 1.0 | 400 |
| Card headline | PolySans | 20-24px / 1.0-1.1 | 700 |
| Quick post headline | PolySans | 18px / 1.1 | 700 |
| Dek | FK Roman | 20px / 1.5 | 400 |
| Body | FK Roman | 18px / 1.6 | 400 |
| Label (uppercase) | PolySans | 14px / 1.2 | 500, 0.06em |
| Byline, timestamp | PolySans Mono | 11-12px / 1.1-1.2 | 400-500 |
| Big numerals | PolySans Mono | 96-104px / 0.8 | 500 |

### Rules

- Headlines in sentence case, no full stop, short and punchy.
- Labels ("REVIEW", "NEWS") uppercase PolySans 500 with 0.06em tracking.
- Bylines and timestamps in mono, often uppercase, separated by a bullet or slash.
- Quick posts can skip a headline and read like a short note with a link.
- Use review scores as large mono numerals (for example "8") on a coloured block.

## 4. Logo & Brand Mark

The wordmark reads "The Verge" in a custom geometric sans. The "V" is drawn as two slanted cut strokes that sit above the baseline, and the "g" has a split descender, giving the mark a glitchy, cut-paper feel. The social avatar and favicon use the "V" alone.

- **Color versions:** white on `#131313` (default on dark headers), `#131313` on white, white on purple `#5200FF`, ink on mint `#3CFFD0`.
- **Clear space:** the width of the "V" on all sides.
- **Minimum size:** 100px wide on screen.
- **Icon:** the "V" shape in mint on ink (this file's icon follows that pairing; the official avatar colours vary).

Misuse:

- Do not set "The Verge" in PolySans or any other font.
- Do not fill the wordmark with gradients.
- Do not separate the "V" pieces or straighten them.
- Do not place it on busy photography without a solid panel.

## 5. Components

### Header and navigation

- Header about 64px. On the homepage the masthead is large: the wordmark set very wide across a dark `#131313` band with a date and tagline in mono (approximate).
- Section links: "Tech", "Reviews", "Science", "Entertainment", "AI", "Policy" in 14-16px PolySans 500, each with a mega-menu ("Amazon", "Apple", "Google"... "See all tech").
- Right: search, notifications bell, "Subscribe" button, and a hamburger menu.
- Active and hover: purple text with a 1px purple underline (`inset 0 -1px 0 0 #5200FF`).

### Storystream feed (signature)

- Full stories: thumbnail (square or 3:2, 2px radius), PolySans 700 headline 20-24px, mono byline and timestamp.
- Quick posts: no image required; a short headline or none, 16-18px FK Roman text, author avatar (circle, 24-32px), timestamp, and an embedded link card or image. Comment and share counts in mono.
- Items separated by 1px `#E9E9E9` rules, 16-24px vertical padding.

```css
.verge-post { border-top: 1px solid #E9E9E9; padding: 20px 0; color: #131313; }
.verge-post h2 { font: 700 22px/1.1 var(--font-polysans); margin: 0 0 8px; }
.verge-post a:hover h2 { box-shadow: inset 0 -.5em 0 0 #3CFFD0; }
.verge-post .meta { font: 400 11px/1.2 var(--font-polysans-mono); text-transform: uppercase; letter-spacing: .02em; color: #636363; }
```

### Top Stories module

A dark `#131313` block with a numbered list: Manuka or PolySans Mono numerals in mint, white PolySans headlines, and a large lead image. Headlines get a mint underline on hover.

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#5200FF` | `#FFFFFF` PolySans 500 14-16px | none | 2px |
| Dark | `#131313` | `#FFFFFF` | none | 2px |
| Mint | `#3CFFD0` | `#131313` | none | 2px |
| Outline | transparent | `#131313` | 1px `#131313` | 2px |
| Pill (tags, filters) | `#FFFFFF` | `#131313` 12px mono uppercase | 1px `#E9E9E9` | 999px |

Height 36-44px, padding 0 16px. Hover: purple to `#3D00BF`, dark to `#313131`, mint gets an ink underline. Focus: `4px solid #5200FF`.

### Article page

- Label above the headline (section or "Review"), PolySans 700 headline at 50-60px, dek in FK Roman 20px.
- Byline row in PolySans Mono uppercase: "By Author Name", role, date and time, comments count.
- Lead image full width; caption in 13-14px PolySans with the credit in mono after a slash ("Image: The Verge").
- Body: FK Roman 18px/1.6, 600-680px column; links purple with a thin underline.
- Pull quotes: PolySans 700 at 28-34px or Manuka, set in purple or ink with a mint highlight (approximate).
- Review pages: a score block (large mono number on a mint or purple square), "The Good" and "The Bad" lists, and a buy button module.
- Related stories and "Most popular" in a right rail on desktop with mono numerals.

### Live blog

Header with a red `#EE0033` "LIVE" label and dot, then timestamped updates in a single column, each with the author avatar and mono timestamp.

### Inputs and newsletters

Inputs 44px, 1px `#131313` or `#E9E9E9` border, 2px radius, 16px PolySans. Newsletter modules use a lavender `#EEE6FF` or mint panel, Manuka or PolySans title, short FK Roman description and a purple button.

### Deals module

Product cards with image, title, price row and a "Buy" button; uses lime `#D6F31F` or mint as the accent. Prices change daily; do not hard-code them.

## 6. Layout & Spacing

- **Breakpoints (from CSS):** 768, 901 and 1180px.
- **Max width:** about 1180-1260px for the main grid with a 300-340px right rail on desktop.
- **Article column:** 600-680px.
- **Grid:** 12 columns on desktop with 24px gutters; single column with 16-20px padding on mobile.
- **Spacing:** 4px base, with 6px and 12px steps common in metadata rows.
- **Density:** high in the feed, generous on feature pages.

## 7. Depth, Elevation & Motion

- Mostly flat. Popovers and menus use `0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)`.
- Radii: 2px on buttons and thumbnails, 10-12px on panels, 24-32px on large promo cards, 999px on pills.
- Motion: mint highlight grows behind headlines on hover (about 150ms), menus drop down quickly, and display type sometimes animates on event pages. Keep it snappy.

## 8. Iconography & Imagery

- **Icons:** simple line icons at 16-24px, `currentColor`, square line caps.
- **Photography:** studio product photography on coloured backgrounds, hands-on shots, and news photography.
- **Illustration:** bold graphic illustrations with purple, mint and flat colour fields; collage and cut-out styles.
- **Video:** dark player with white PolySans titles.

## 9. Voice & Microcopy

Conversational, witty and opinionated in reviews; clipped and fast in quick posts. UI copy is short.

- Nav: "Tech", "Reviews", "Science", "Entertainment", "AI", "Policy".
- Buttons: "Subscribe", "Sign in", "See all tech", "Buy", "Follow".
- Labels: "Review", "News", "Top Stories", "Most Popular", "Live".
- Meta: "By Author Name", "Nov 16, 2026, 10:15 AM EST".

## 10. Do's and Don'ts

**Do**

- Use `#5200FF` for links and accents and `#3CFFD0` as a highlight marker.
- Set headlines in PolySans 700 with tight leading and body in a serif.
- Use mono uppercase for bylines, timestamps and labels.
- Mix full stories and short quick posts in one feed separated by thin rules.
- Use huge condensed display type for section fronts only.

**Don't**

- Don't put mint text on white; use it as a fill or highlight.
- Don't round corners beyond 2px on feed thumbnails.
- Don't use soft drop shadows on cards.
- Don't use Manuka for body or small headings.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of The Verge. White page with ink `#131313` text, secondary `#4A4A4A`, meta `#636363`, rules `#E9E9E9`. Accent purple `#5200FF` for links (with a 1px inset underline) and buttons; mint `#3CFFD0` as a marker highlight (`box-shadow: inset 0 -.5em 0 0 #3CFFD0`) and as accents on dark `#131313` sections. Headlines in `polySans, "Space Grotesk", Helvetica, sans-serif` weight 700, line-height 1.0-1.1 (60px articles, 22px feed items). Body in `fkRomanStandard, "Source Serif 4", Georgia, serif` at 18px/1.6. Bylines and timestamps in a mono (`polySansMono, "Space Mono"`) at 11-12px uppercase. Section fronts use a huge condensed display (`manuka, Anton, Impact`) at 100px+, weight 900, line-height 0.8. Buttons 2px radius. Homepage is a feed of stories and short quick posts with avatars and timestamps, separated by thin rules, plus a dark "Top Stories" block. Breakpoints 768/901/1180px.

```css
:root {
  --brand-purple: #5200FF;
  --brand-purple-dark: #3D00BF;
  --brand-purple-light: #A980FF;
  --brand-lavender: #EEE6FF;
  --brand-mint: #3CFFD0;
  --brand-lime: #D6F31F;
  --brand-ink: #131313;
  --brand-dark-surface: #313131;
  --brand-grey-700: #4A4A4A;
  --brand-grey-600: #636363;
  --brand-border: #E9E9E9;
  --brand-live: #EE0033;
  --brand-bg: #FFFFFF;
  --brand-font-sans: "polySans", "Space Grotesk", Helvetica, Arial, sans-serif;
  --brand-font-mono: "polySansMono", "Space Mono", "Courier New", monospace;
  --brand-font-serif: "fkRomanStandard", "Source Serif 4", Georgia, serif;
  --brand-font-display: "manuka", "Anton", Impact, sans-serif;
  --brand-link-underline: inset 0 -1px 0 0 #5200FF;
  --brand-highlight: inset 0 -.5em 0 0 #3CFFD0;
  --brand-focus: 4px solid #5200FF;
  --brand-radius: 2px;
  --brand-shadow-popover: 0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by The Verge or Vox Media.

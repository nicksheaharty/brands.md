---
name: Vox
slug: vox
url: https://vox.com
category: News
tagline: "Highlighter-yellow Vox mark, bold Balto headlines, Harriet serif text, explainer cards."
updated: 2026-11-16
appStoreId: 6760492732
logoBackground: "#FFF200"
theme: light
colors:
  - name: Vox Yellow
    hex: "#FFF200"
    role: Brand colour, highlights, link underlines, logo field
  - name: Ink
    hex: "#131313"
    role: Text, headlines, logo, primary buttons
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Black
    hex: "#000000"
    role: Video surfaces, overlays
  - name: Grey 700
    hex: "#4A4A4A"
    role: Secondary text, decks
  - name: Grey 600
    hex: "#636363"
    role: Bylines, timestamps, captions
  - name: Grey 300
    hex: "#BDBDBD"
    role: Disabled and tertiary elements
  - name: Border
    hex: "#E9E9E9"
    role: Rules and card borders
  - name: Grey 100
    hex: "#EFEFEF"
    role: Panels and input backgrounds
  - name: Live Red
    hex: "#EE0033"
    role: Live labels and breaking markers
  - name: Pale Yellow
    hex: "#FFFCD4"
    role: Callouts and highlighted boxes
  - name: Mint
    hex: "#3CFFD0"
    role: Shared Vox Media accent seen in shared components (approximate role)
fonts:
  display:
    family: "Balto"
    fallback: "Inter"
    weights: [400, 700]
  body:
    family: "Harriet"
    fallback: "Source Serif 4"
    weights: [400, 700]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400, 500]
typeScale:
  - { role: Hero headline, size: 70, weight: 700, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Article headline, size: 50, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Section headline, size: 34, weight: 700, lineHeight: 1.0, tracking: "0" }
  - { role: Card headline, size: 22, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Deck, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Byline, size: 14, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Label, size: 12, weight: 500, lineHeight: 1.2, tracking: "0.06em" }
radii: { sm: 2, md: 8, lg: 20, pill: 999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Small, value: "0 0 4px 0 rgba(0,0,0,0.2)" }
  - { name: Floating, value: "0 4px 10px 0 rgba(0,0,0,0.4)" }
preview:
  bg: "#FFFFFF"
  surface: "#EFEFEF"
  text: "#131313"
  muted: "#636363"
  border: "#E9E9E9"
  accent: "#FFF200"
  accentText: "#131313"
  radius: 2
  buttonStyle: solid
---

# Vox

## 1. Visual Theme & Atmosphere

Vox is an explanatory news site, and its design says "we'll walk you through it". The page is white and near-black with one loud colour: highlighter yellow `#FFF200`. Headlines are big and bold in a grotesque sans (Balto), reading text is a warm serif (Harriet), and small labels are set in Roboto Mono. Yellow appears as a solid field behind the logo, as thick underlines under links, and as a marker-pen highlight behind key phrases.

What makes it recognisable:

- **The yellow highlight.** Links and emphasis get a thick yellow underline drawn with an inset box-shadow, like a highlighter stroke.
- **The italic Vox wordmark.** A swashy, high-contrast italic "Vox" in black, often on a yellow block.
- **Big, tight sans headlines.** Balto 700 at 50-70px with line-height around 1.0.
- **Serif reading text.** Harriet at 18-20px with comfortable leading.
- **Explainer furniture.** Card stacks, "Key takeaways" boxes, numbered sections, charts and video embeds.

Mood words: curious, clear, friendly, bright, explanatory.

## 2. Color Palette & Roles

Values below were read from vox.com's CSS theme on 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Vox Yellow | `#FFF200` | Brand colour, link highlight, logo field, active states |
| Yellow 85% | `#FFF200D9` | Hover highlight |
| Ink | `#131313` | Text, headlines, primary buttons, logo |
| Black | `#000000` | Video player, overlays |
| Grey 700 | `#4A4A4A` | Secondary text, decks |
| Grey 600 | `#636363` | Bylines, timestamps, captions |
| Grey 300 | `#BDBDBD` | Disabled elements |
| Border | `#E9E9E9` | Rules and borders |
| Grey 100 | `#EFEFEF` | Panels, input fills |
| White | `#FFFFFF` | Page background |
| Live Red | `#EE0033` | Live and breaking labels |
| Pale Yellow | `#FFFCD4` | Callout boxes |
| Cream | `#FDFACE` | Alternate callout fill |
| Mint | `#3CFFD0` | Shared Vox Media component accent (approximate role) |

### Semantic colors

| State | Value | Use |
|---|---|---|
| Live | `#EE0033` text or white on `#EE0033` | "Live" labels |
| Error | `#DC2626` text on `#FEF2F2`, border `#FECACA` | Form errors |
| Highlight | `box-shadow: inset 0 -9px 0 0 #FFF200` | Link and key phrase highlight |
| Large highlight | `inset 0 -30px 0 0 #FFF200` | Headline highlight on hero modules |
| Focus | 2px outline `#131313` (approximate) | Keyboard focus |

### Dark mode

vox.com is light. Video pages and some feature sections switch to a black or `#131313` surface with white text, and the yellow stays the same.

## 3. Typography

**Families** (from the site's `--font-*` variables):

- **Balto**: headlines, nav, buttons, UI. A grotesque sans with weights 400 and 700.
- **Harriet**: body text, decks and some headlines on features. A serif family by Okay Type.
- **Roboto Mono**: labels, eyebrows, timestamps and data.

**Licensing:** Balto and Harriet are commercial and licensed to Vox Media. Substitutes: **Inter** (or Work Sans) for Balto, **Source Serif 4** for Harriet. Roboto Mono is free on Google Fonts.

```css
--font-balto: "balto", "Inter", Arial, sans-serif;
--font-harriet: "harriet", "Source Serif 4", Georgia, serif;
--font-roboto-mono: "Roboto Mono", monospace;
```

### Scale (from the theme tokens)

| Role | Family | Size / line | Weight |
|---|---|---|---|
| Hero headline | Balto | 70-90px / 0.95-1.0 | 700 |
| Article headline | Balto | 50px / 1.1 (32-36px mobile) | 700 |
| Feature headline | Harriet | 40px / 1.2 | 400 |
| Section heading | Balto | 34px / 1.0 | 700 |
| Card headline (lead) | Balto | 28-30px / 1.05-1.1 | 700 |
| Card headline | Balto | 20-22px / 1.1 | 700 |
| Deck | Harriet | 20px / 1.4 | 400 |
| Body | Harriet | 18-20px / 1.5-1.6 | 400 |
| Byline | Balto | 14-16px / 1.2-1.3 | 400, name 700 |
| Label | Roboto Mono | 12px / 1.2 | 500, uppercase |
| Caption | Balto | 13-14px / 1.3 | 400 |

### Rules

- Headlines in sentence case, often phrased as questions or "how/why" statements.
- Labels and eyebrows in Roboto Mono uppercase with slight letter-spacing.
- Bold body copy is rare; emphasis uses the yellow highlight instead.
- Numbers in charts and lists use Roboto Mono or tabular Balto.

## 4. Logo & Brand Mark

The logo is "Vox" in a custom, high-contrast italic with a swash "V" and a joined "ox". It is usually black on white or black on a yellow `#FFF200` block. The site's inline SVG also contains an animated "V" used in transitions.

- **Color versions:** black on yellow (signature), black on white, white on black.
- **Clear space:** the height of the "o" on all sides.
- **Minimum size:** 48px wide on screen.
- **App icon:** black "Vox" on a yellow field.

Misuse:

- Do not set "Vox" in Balto, Harriet or any italic font.
- Do not put the logo on mid-tone photos without the yellow block.
- Do not recolour it yellow on white.
- Do not stretch or add outlines.

## 5. Components

### Header and navigation

- White sticky header, about 60px, with a 1px `#E9E9E9` bottom rule.
- Logo left (or centred on mobile), section links "Explainers", "Politics", "Culture", "Advice", "Listen", "Watch" in 14-16px Balto 700 ink, with "Podcast", "Video", "Crossword" in a secondary row.
- Right side: search icon and a "Become a member" or "Give" button in ink with white text, or yellow with ink text.
- Hover on nav: yellow underline (inset box-shadow, 4px).

### Story cards

- Image on top (16:9 or 3:2), square corners or 2px radius.
- Eyebrow label in Roboto Mono 12px uppercase `#636363`.
- Headline Balto 700, 20-22px (standard) or 28-30px (lead), ink.
- Deck in Harriet 16-18px `#4A4A4A`.
- Byline in Balto 14px: "by Author Name" then date in `#636363`.
- Cards separated by 1px `#E9E9E9` rules and 20-24px spacing; no shadows.

```css
.vox-card .eyebrow { font: 500 12px/1.2 var(--font-roboto-mono); text-transform: uppercase; letter-spacing: .06em; color: #636363; }
.vox-card h3 { font: 700 22px/1.1 var(--font-balto); color: #131313; margin: 8px 0; }
.vox-card a:hover h3 { box-shadow: inset 0 -9px 0 0 #FFF200; }
.vox-card .dek { font: 400 17px/1.4 var(--font-harriet); color: #4A4A4A; }
```

### Links (signature)

Inline links in body text have a yellow underline drawn with `box-shadow: inset 0 -1px 0 0 #131313` at rest, which grows into `inset 0 -9px 0 0 #FFF200` on hover (approximate pairing). The text stays ink.

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#131313` | `#FFFFFF` 16px Balto 700 | none | 2px |
| Brand | `#FFF200` | `#131313` | none | 2px |
| Secondary | `#FFFFFF` | `#131313` | 1px `#131313` | 2px |
| Pill (topics, filters) | `#EFEFEF` | `#131313` 14px | none | 999px |

Height 40-48px, padding 0 20px. Hover: primary to `#4A4A4A`, yellow to `#FFF200D9`, secondary fills ink with white text.

### Article page

- Eyebrow (section) in Roboto Mono, headline in Balto 700 at about 50px, deck in Harriet 20px `#4A4A4A`.
- Byline row: author avatar (circle, 40px), "by Author Name" in Balto 700, role line, date in `#636363`.
- Lead image full width with caption below in 13-14px Balto `#636363`, credit after a bullet.
- Body: Harriet 18-20px/1.5-1.6, 640-700px column, 24px paragraph spacing.
- Subheads: Balto 700 at 26-28px.
- Pull quotes: Balto 700 at 28-34px, ink, with a yellow highlight or a thick yellow bar on the left (approximate).
- "Key takeaways" box: `#FFFCD4` fill, Roboto Mono label, bulleted Harriet text.
- Member appeal at the end: yellow block with ink text and an ink button.

### Explainer card stacks

Explainers break a topic into numbered cards: a large Roboto Mono number, a Balto question as the card title and Harriet answer text, each card separated by rules or set on `#EFEFEF` panels with 8px radius.

### Video

Video modules sit on black, with white Balto titles, a yellow play button (circle) and the duration in Roboto Mono.

### Newsletters

Newsletter cards: title in Balto 700 20px, frequency in Roboto Mono, description in Harriet, "Sign up" button in ink. Email input 44px, `#EFEFEF` fill or 1px `#BDBDBD` border, 2px radius.

### Live label

`#EE0033` uppercase Roboto Mono 12px with a blinking dot, before the headline.

## 6. Layout & Spacing

- **Breakpoints (from CSS):** 768, 901 and 1180px.
- **Max width:** about 1180-1300px for the homepage grid; article text at 640-700px.
- **Grid:** 12 columns on desktop with 20-24px gutters; single column on mobile with 20px side padding.
- **Spacing:** 4px base. Common gaps 8, 12, 16, 20, 24, 32, 48px.
- **Density:** medium. Big headlines with breathing room around them.

## 7. Depth, Elevation & Motion

- Mostly flat. Shadows only on floating UI: `0 0 4px 0 rgba(0,0,0,0.2)` for small popovers, `0 4px 10px 0 rgba(0,0,0,0.4)` for menus and video controls.
- Radii are small (2px buttons, 8-10px panels, 20-24px large media cards on some modules).
- Motion: the yellow highlight grows from the bottom on hover (150-200ms), the logo's "V" animates on some transitions, and menus slide in.

## 8. Iconography & Imagery

- **Icons:** simple solid or line icons, 16-24px, ink; play icons in yellow circles.
- **Photography:** news photography and portraits, full colour, sometimes cut out and set on yellow.
- **Illustration:** flat, graphic illustrations and collage for explainers, often using yellow as a highlight.
- **Charts:** clean charts with Roboto Mono labels and a yellow or ink highlight series.

## 9. Voice & Microcopy

Plain, curious and helpful. Copy explains rather than announces.

- Nav: "Explainers", "Politics", "Culture", "Advice", "Listen", "Watch".
- Buttons: "Become a member", "Sign up", "Read more", "Watch".
- Labels: "Explainers", "Live", "Video", "Podcasts".
- App tagline on the App Store listing: "There's too much noise and not enough context."

## 10. Do's and Don'ts

**Do**

- Use `#FFF200` as the single brand colour for highlights, link underlines and the logo field.
- Set headlines in a bold grotesque at tight line-height and reading text in a warm serif.
- Use Roboto Mono for eyebrows, numbers and labels.
- Keep surfaces white with `#131313` text and thin `#E9E9E9` rules.

**Don't**

- Don't put yellow text on white; it is unreadable.
- Don't add gradients or heavy shadows.
- Don't round cards heavily on news grids.
- Don't use the italic logo style for headlines.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Vox. White page, ink `#131313` text, secondary `#4A4A4A`, meta `#636363`, rules `#E9E9E9`, panels `#EFEFEF`. One brand colour: highlighter yellow `#FFF200`, used as a logo field and as a thick underline highlight (`box-shadow: inset 0 -9px 0 0 #FFF200`) on link hover. Headlines in `balto, Inter, Arial, sans-serif` weight 700 with line-height 1.0-1.1 (50px on articles, 22px on cards). Body and decks in `harriet, "Source Serif 4", Georgia, serif` at 18-20px/1.5-1.6. Eyebrows and labels in Roboto Mono 12px uppercase. Buttons 2px radius: ink with white text, or yellow with ink text. Live labels in `#EE0033`. Callout boxes in `#FFFCD4`. Grid up to about 1180px with breakpoints 768/901/1180px, flat cards separated by rules.

```css
:root {
  --brand-yellow: #FFF200;
  --brand-yellow-hover: #FFF200D9;
  --brand-ink: #131313;
  --brand-black: #000000;
  --brand-grey-700: #4A4A4A;
  --brand-grey-600: #636363;
  --brand-grey-300: #BDBDBD;
  --brand-border: #E9E9E9;
  --brand-surface: #EFEFEF;
  --brand-callout: #FFFCD4;
  --brand-live: #EE0033;
  --brand-bg: #FFFFFF;
  --brand-font-sans: "balto", "Inter", Arial, sans-serif;
  --brand-font-serif: "harriet", "Source Serif 4", Georgia, serif;
  --brand-font-mono: "Roboto Mono", monospace;
  --brand-highlight: inset 0 -9px 0 0 #FFF200;
  --brand-radius-sm: 2px;
  --brand-radius-md: 8px;
  --brand-shadow-float: 0 4px 10px 0 rgba(0,0,0,0.4);
  --brand-article-width: 680px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Vox or Vox Media.

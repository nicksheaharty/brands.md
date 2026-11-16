---
name: CapCut
slug: capcut
url: https://capcut.com
category: Productivity
tagline: "Black-and-white creator tool: pill CTAs, cyan glints, rounded media tiles, dark editor."
updated: 2026-11-16
appStoreId: 1500855883
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#090C14"
    role: Primary text, primary pill buttons, logo
  - name: White
    hex: "#FFFFFF"
    role: Marketing page background
  - name: Aqua
    hex: "#00D6D6"
    role: Brand accent, highlights and editor selection (approximate role)
  - name: Sky Cyan
    hex: "#40DAF5"
    role: Focus rings, accent text on dark
  - name: Editor Black
    hex: "#0F1114"
    role: Editor and footer dark background
  - name: Slate
    hex: "#505767"
    role: Secondary text
  - name: Ice
    hex: "#F5FCFF"
    role: Media tile background, light cyan wash
  - name: Frost
    hex: "#AAEDFF"
    role: Gradient end on feature tiles
  - name: Mist
    hex: "#F4F7FB"
    role: Header menu cards, subtle panels
  - name: Grey Fill
    hex: "#F5F6F7"
    role: Icon tiles, chip fill
  - name: Editor Panel
    hex: "#17191D"
    role: Editor side panels and timeline (approximate)
  - name: Banner Cyan
    hex: "#7BE9FC"
    role: Announcement bar background
fonts:
  display:
    family: "Inter"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 48, weight: 700, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: H2, size: 36, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: H3, size: 26, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Label, size: 14, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 8, md: 12, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 80]
shadows:
  - { name: Popover, value: "0 4px 16px rgba(0,0,0,0.24)" }
  - { name: Glow, value: "inset 0 0 20px 2px rgba(133,127,255,0.4), 0 0 40px 0 rgba(20,224,255,0.24)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F7FB"
  text: "#090C14"
  muted: "#505767"
  border: "#E3E8EF"
  accent: "#090C14"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: pill
---

# CapCut

## 1. Visual Theme & Atmosphere

CapCut is ByteDance's video and photo editor. It has two faces that share one identity. The marketing site at capcut.com is bright white, black text, black pill buttons and big rounded media tiles full of video thumbnails. The editor itself (desktop app, web editor, mobile app) is near-black with a timeline, panels and small cyan highlights. Both use the same black-and-white logo and a cool cyan accent.

What makes it recognisable:

- **Monochrome with a cyan glint.** Black `#090C14` and white do almost everything. Cyan (`#00D6D6`, `#40DAF5`, `#7BE9FC`) appears in focus rings, announcement bars, gradients behind product shots and the editor's selection state.
- **Media-first tiles.** Feature sections are rounded 24px cards with a soft cyan wash (`#F5FCFF` fading to `#AAEDFF`) holding a video or UI screenshot.
- **Black pill CTAs.** "Try online" and "Download" are fully rounded black pills with white text.
- **Frosted header.** The 64px header is transparent at the top and turns into frosted white (`saturate(180%) blur(48px)` over `#FFFFFFE6`) after a few pixels of scroll.
- **Inter everywhere.** Clean sans with semibold headings and regular body.
- **Dark editor.** Panels in near-black, a horizontal multi-track timeline, white playhead, cyan selection outlines.

Mood words: creative, quick, modern, clean, creator-focused.

## 2. Color Palette & Roles

Marketing site values come from capcut.com CSS (`--awesome-*` and `--astra-*` tokens). Editor values are observed and marked approximate.

| Name | Hex | Role |
|---|---|---|
| Ink | `#090C14` | `--awesome-text-primary`, primary buttons |
| Ink Alt | `#0F1114` | Header and footer text, editor background |
| White | `#FFFFFF` | `--awesome-background-color` |
| Off White | `#FDFFFE` | Text on dark (`--awesome-text-negative-primary`) |
| Slate | `#505767` | Footer and secondary text |
| Text Secondary | `#1C283D` at 50% | `--awesome-text-secondary` |
| Text Tertiary | `#1F2F45` at 40% | `--awesome-text-tertiary` |
| Fill 1 | `#2A435E` at 8% | Chip and ghost button fill |
| Divider | `#2A435E` at 10% | Mobile dividers |
| Mist | `#F4F7FB` | Header menu cards |
| Grey Fill | `#F5F6F7` | Icon tiles |
| Ice | `#F5FCFF` | Media tile background |
| Frost | `#AAEDFF` | Media tile gradient end |
| Aqua | `#00D6D6` | Brand accent |
| Sky Cyan | `#40DAF5` | Focus outline, accent text |
| Banner Cyan | `#7BE9FC` | Announcement bar |
| Hover Grey | `#424242` | Hover on black buttons |

### Editor (dark) palette, approximate

| Name | Hex | Role |
|---|---|---|
| Canvas | `#0F1114` | App background |
| Panel | `#17191D` | Media library, properties panel |
| Panel Raised | `#22252B` | Hover rows, inputs |
| Line | `#2E3138` | Panel dividers |
| Text | `#FFFFFF` / `#A0A4AD` | Primary / secondary |
| Selection | `#00D6D6` | Selected clip outline, active tool |
| Video track | `#2F5E6E` | Clip fill on the timeline |
| Audio track | `#2E4B3E` with green waveform | Audio clips |
| Text track | `#5E4A2E` | Caption and text clips |

### Gradients

- Media tile: `linear-gradient(180deg, rgba(170,237,255,0) 56%, #AAEDFF), #F5FCFF`.
- AI features glow: `inset 0 0 20px 2px rgba(133,127,255,0.4), 0 0 40px rgba(20,224,255,0.24)`, a violet-to-cyan halo on AI cards.
- Header banner overlay on images: `linear-gradient(transparent 30%, rgba(0,0,0,0.55))`.

## 3. Typography

**Family:** Inter, loaded as named static weights ("Inter Regular", "Inter Medium", "Inter SemiBold", "Inter Bold"), with PingFang SC and Microsoft YaHei for CJK.

**Licensing:** Inter is open source and on Google Fonts.

```css
font-family: "Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
```

### Scale (desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 48px | 700 | 1.1 | -0.02em |
| H2 section | 36px | 600 | 1.2 | -0.01em |
| H3 card title | 26px | 600 | 1.25 | 0 |
| H4 | 22px | 600 | 1.3 | 0 |
| Lead | 18px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Label / nav | 14px | 500 | 1.4 | 0 |
| Caption, footer | 12px | 400 | 1.3 | 0 |

Mobile: Hero 32px, H2 28px, H3 22px.

### Rules

- Sentence case for headings and buttons ("Try online", "Download CapCut").
- The hero sometimes splits a headline across lines with an ampersand or short words ("AI-Powered Photo & Video").
- No all-caps eyebrows; use a 14px/500 grey label instead.
- Numbers in the editor (timecodes) use tabular figures: `00:12:08`.

## 4. Logo & Brand Mark

The CapCut logo is a symbol plus wordmark. The symbol is a horizontal, bow-tie-like clapper shape: two stacked rounded bars that cross into an X on the left and open into a flared right end, suggesting a film clapper and a cut. The wordmark "CapCut" sits to its right in a rounded geometric sans.

- **Color versions:** black on white (primary), white on black (app icon, dark editor).
- **App icon:** white symbol centred on a black square.
- **Clear space:** at least the height of the "C" on all sides.
- **Minimum size:** 72px wide for the lockup, 16px for the symbol.

Misuse:

- Do not color the logo cyan or apply gradients to it.
- Do not separate the symbol and wordmark and rearrange them.
- Do not rotate the symbol; it always reads horizontally.
- Do not set "CapCut" in Inter to fake the wordmark.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary ("Try online") | `#090C14` | `#FFFFFF` 16px/600 | none | 120px (pill) | 48px |
| Secondary ("Download") | `rgba(42,67,94,0.08)` | `#090C14` | none | 120px | 48px |
| On dark | `#FFFFFF` | `#090C14` | none | 120px | 48px |
| Compact (header) | `#090C14` | `#FFFFFF` 14px/600 | none | 10px | 36px |
| Editor tool button | transparent | `#FFFFFF` | none | 8px | 32px |

States:

- Hover primary: `#424242`. Hover secondary: `rgba(40,63,89,0.16)`.
- Focus: `outline: 3px solid #40DAF5; outline-offset: -4px` (from production).
- Disabled: 40% opacity.
- Editor primary "Export": cyan `#00D6D6` fill with Ink text, 8px radius (approximate).

```css
.btn-primary {
  font: 600 16px/1 "Inter", sans-serif;
  color: #fff;
  background: var(--btn-background-color, #090C14);
  border: 0;
  border-radius: var(--btn-radius, 120px);
  height: 48px;
  padding: 0 28px;
  transition: background-color .2s ease;
}
.btn-primary:hover { --btn-background-color: #424242; }
```

### Media tile (signature)

- Radius 24px, overflow hidden, background `#F5FCFF` with the frost gradient at the bottom.
- Holds an autoplaying muted video or a floating UI screenshot with 12-16px radius.
- Title 26px/600 and 16px body sit beside or above the tile, not inside it.
- Template grids use smaller 12-16px radius thumbnails in 9:16 or 16:9 with a dark bottom gradient and white caption.

### Navigation

- Header 64px, logo left, menu items "Products", "Solutions", "Resources", "Pricing" at 14px/500 with small chevrons.
- Mega menu: white panel, 16px radius, Popover shadow, columns of items with a 40px `#F5F6F7` icon tile, a 14px/600 title and 12px grey description. Promotional cards inside use `#F4F7FB`.
- Right: language switcher, "Try online" secondary, "Download" primary.
- On scroll: frosted white with `backdrop-filter: saturate(180%) blur(48px)`.

### Announcement bar

Full width, `#7BE9FC` background, `#0F1114` 12px text, 12px vertical padding, centred, with an arrow link.

### Inputs (web editor and AI tools)

- Prompt box: large rounded 16px textarea on white or `#F4F7FB`, 16px text, with a black round submit button at the bottom right and chips for model or ratio choices.
- Editor inputs: 32px tall, 6px radius, `#22252B` fill, white text, cyan border on focus.

### Editor layout (signature)

- Top bar 48px with project name, undo/redo, and an "Export" button right.
- Left: media/text/audio/effects tabs as a vertical icon rail with labels, then a library panel of thumbnail grids.
- Center: preview player with a 16:9 or 9:16 canvas on black.
- Right: properties panel with sliders and toggles.
- Bottom: multi-track timeline with a white playhead line, a timecode ruler, colored clip blocks with 4px radius and filmstrip thumbnails.

### Cards and chips

Feature cards on white: 16px radius, `#F4F7FB` fill, 24px padding, no border. Chips: pill, 32px, `#F5F6F7` fill, 14px/500, active chip black with white text.

### Modals

White, 16-20px radius, max width 520px, 24-32px padding, Popover shadow `0 4px 16px rgba(0,0,0,0.24)`, scrim `rgba(0,0,0,0.55)`. In the editor modals are `#17191D` with white text.

## 6. Layout & Spacing

- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 80px. Footer sits 80px below content (`--astra-footer-margin-top: 80px`).
- **Content width:** about 1200-1280px centred, with 24px gutters (16px on mobile).
- **Sections:** alternating text-left/media-right rows, 80-120px apart, then a template carousel and an FAQ accordion.
- **Breakpoints:** roughly 768, 1024, 1280px.
- **Density:** marketing pages are airy; the editor is dense and tool-heavy.

## 7. Depth, Elevation & Motion

- Light site is mostly flat; depth comes from rounded media tiles and video.
- Popover shadow: `0 4px 16px rgba(0,0,0,0.24)`.
- AI glow (violet-cyan inset halo) on AI feature cards only.
- Hero visual sometimes uses a soft white bloom: `0 32px 64px -8px rgba(255,255,255,0.8), 0 0 80px 20px rgba(255,255,255,0.6)`.
- Motion: footer links `transition: color .25s ease-in-out`; header blur animates over the first 40px of scroll; general UI 200-300ms ease.

## 8. Iconography & Imagery

- Icons: 1.5px rounded line icons at 16-24px; filled variants for active editor tools.
- Imagery is creator content: vertical videos, faces, travel, food, product shots, with captions and stickers on top. Show the product UI in action rather than abstract art.
- AI sections show before/after pairs and generated images in tidy grids.

## 9. Voice & Microcopy

- Friendly, short, creator-to-creator. Verbs first.
- Buttons: "Try online", "Download", "Edit for free", "Use template", "Export", "Generate".
- Section headings: "Edit what you have", "Find inspiration", "Generate something new".
- Tool names are plain: "Background remover", "Auto captions", "Video trimmer", "Text to speech".

## 10. Do's and Don'ts

**Do**

- Keep the marketing UI black and white and let video carry the color.
- Use black pill buttons for primary actions and pale grey-blue pills for secondary.
- Use 24px radius media tiles with the frost gradient.
- Use cyan sparingly: focus rings, announcement bars, editor selection.
- Use Inter with semibold headings.

**Don't**

- Don't paint large areas cyan or purple.
- Don't use square-cornered buttons on marketing pages.
- Don't put heavy shadows on cards; keep them flat.
- Don't use a light theme for the editor; it is dark.
- Don't use sparkles or emoji to signal AI features; use the glow or plain labels.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of CapCut's website. White page, Ink text `#090C14`, secondary text `#505767`. Font: Inter (700 hero at 48px with -0.02em tracking, 600 headings, 400 body at 16px). Header 64px, transparent at the top and frosted white on scroll (`backdrop-filter: saturate(180%) blur(48px)` over `#FFFFFFE6`), black CapCut logo left, 14px/500 menu, then a pale secondary pill (`rgba(42,67,94,0.08)`) and a black primary pill button `#090C14` with white text, 48px tall, fully rounded, hover `#424242`. Focus ring `3px solid #40DAF5`. Sections alternate text and rounded 24px media tiles with background `#F5FCFF` fading to `#AAEDFF` at the bottom, holding video or app screenshots. Add a cyan `#7BE9FC` announcement bar at the top, a template grid of 9:16 thumbnails with 12px radius, and a dark footer. If you build the editor, use `#0F1114` background, `#17191D` panels, a multi-track timeline with colored 4px-radius clips, a white playhead and cyan `#00D6D6` selection.

```css
:root {
  --brand-ink: #090C14;
  --brand-ink-alt: #0F1114;
  --brand-bg: #FFFFFF;
  --brand-text-on-dark: #FDFFFE;
  --brand-text-secondary: #505767;
  --brand-text-muted: rgba(28,40,61,0.5);
  --brand-fill-1: rgba(42,67,94,0.08);
  --brand-fill-hover: rgba(40,63,89,0.16);
  --brand-mist: #F4F7FB;
  --brand-grey-fill: #F5F6F7;
  --brand-ice: #F5FCFF;
  --brand-frost: #AAEDFF;
  --brand-aqua: #00D6D6;
  --brand-cyan: #40DAF5;
  --brand-banner: #7BE9FC;
  --brand-hover: #424242;
  --brand-editor-bg: #0F1114;
  --brand-editor-panel: #17191D;
  --brand-editor-raised: #22252B;
  --brand-font: "Inter", "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 120px;
  --brand-shadow-pop: 0 4px 16px rgba(0,0,0,0.24);
  --brand-glow-ai: inset 0 0 20px 2px rgba(133,127,255,0.4), 0 0 40px 0 rgba(20,224,255,0.24);
  --brand-header-blur: saturate(180%) blur(48px);
}
```

---

Values are observed from capcut.com CSS and the public app; editor colors are approximate. This file is an unofficial reference and is not affiliated with or endorsed by CapCut or ByteDance.

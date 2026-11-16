---
name: Roku
slug: roku
url: https://roku.com
category: Streaming
tagline: "Deep purple TV glow, friendly rounded type and simple tiles built for a remote."
updated: 2026-11-16
appStoreId: 6770735315
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Roku Purple
    hex: "#6F1AB1"
    role: Logo purple, brand blocks (approximate, logo value)
  - name: Action Purple
    hex: "#5407AA"
    role: Primary contained button and links on light pages
  - name: Bright Purple
    hex: "#904FF7"
    role: Primary button and accent on dark surfaces, icon accent
  - name: Night
    hex: "#21014D"
    role: Dark promo bands and hero panels
  - name: Abyss
    hex: "#13002D"
    role: Header bar and darkest surfaces
  - name: Page Dark
    hex: "#19002D"
    role: Dark page background token
  - name: Plum Ink
    hex: "#271C38"
    role: Body text on light pages, app bar on some templates
  - name: Paper
    hex: "#FEFEFE"
    role: Light page background
  - name: Deep Purple
    hex: "#44018B"
    role: Button hover on light pages
  - name: Violet Hover
    hex: "#671DC5"
    role: Button hover on dark pages
  - name: Lilac
    hex: "#B68BFA"
    role: Icon accent on dark, soft highlights
  - name: Mist
    hex: "#E2E0E4"
    role: Icon surface, dividers on light
  - name: Slate Plum
    hex: "#665D71"
    role: Secondary text, icon surface on dark
  - name: Error
    hex: "#BC2145"
    role: Field errors
fonts:
  display:
    family: "Roku Display"
    fallback: "Figtree"
    weights: [500, 700, 900]
  body:
    family: "Roku Text"
    fallback: "Figtree"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 48, weight: 700, lineHeight: 1.15, tracking: "-0.5px" }
  - { role: Heading L, size: 32, weight: 700, lineHeight: 1.2, tracking: "-0.5px" }
  - { role: Heading M, size: 28, weight: 700, lineHeight: 1.2, tracking: "-0.5px" }
  - { role: Heading S, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 500, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 64, 96]
shadows:
  - { name: Hairline, value: "0px 0px 1px 0px rgba(11,0,27,0.15), 0px 2px 4px 0px rgba(78,69,92,0.08)" }
  - { name: Raised, value: "0px 8px 16px 0px rgba(1,1,1,0.18), 0px 2px 4px 0px rgba(13,12,13,0.04)" }
preview:
  bg: "#13002D"
  surface: "#21014D"
  text: "#FEFEFE"
  muted: "#B68BFA"
  border: "#2E0F57"
  accent: "#904FF7"
  accentText: "#FEFEFE"
  radius: 8
  buttonStyle: solid
---

# Roku

## 1. Visual Theme & Atmosphere

Roku looks like a living room at night with the TV on. The brand lives in deep, almost black purples lit by one brighter violet, with white rounded type that stays readable from across the room. Everything is simple on purpose: big tiles, few words, one obvious next step. It is a TV platform that sells hardware and a free streaming service, and the design never lets that feel complicated.

What makes it recognisable:

- **Purple everywhere.** The logo purple, button purples and dark backgrounds are all from one hue family. Neutrals are tinted purple too (`#271C38` text, `#665D71` muted), so even greys feel on brand.
- **Two worlds.** roku.com marketing pages sit on near-white `#FEFEFE` with plum text and purple buttons; the TV home screen, The Roku Channel and promo bands sit on `#13002D` to `#21014D`.
- **Friendly, chunky type.** Roku Display and Roku Text are rounded-shoulder sans faces with generous x-height. Headings are bold, body is regular.
- **Tiles and grids.** The TV home screen is a grid of app tiles; the website mirrors it with rows of partner tiles (Apple TV, Paramount+, etc.) and product cards.
- **Soft corners, 8px.** Buttons, cards and inputs share `border-radius: 8px`.
- **Remote-first focus.** On TV, a thick focus outline and a slight scale-up mark the selected tile.

Mood words: friendly, simple, homey, glowing, approachable.

## 2. Color Palette & Roles

Values read from roku.com CSS on 2026-11-16, except the logo purple which is approximate.

| Name | Hex | Role |
|---|---|---|
| Roku Purple | `#6F1AB1` | Logo, brand blocks (approximate) |
| Action Purple | `#5407AA` | Contained button background, text links, input focus border on light pages |
| Deep Purple | `#44018B` | Hover for Action Purple |
| Bright Purple | `#904FF7` | Contained button on dark pages, outlined button text and border, icon accent |
| Violet Hover | `#671DC5` | Hover for Bright Purple |
| Electric Violet | `#6D02E2` | Occasional highlight, gradients |
| Lilac | `#B68BFA` | Icon accent on dark, secondary text on dark |
| Night | `#21014D` | Promo bands, hero panels, dark cards |
| Plum Card | `#2E0F57` | Raised card on dark |
| Page Dark | `#19002D` | Dark page background (`--www-surface-page-dark`) |
| Abyss | `#13002D` | Header, footer, darkest surface |
| Plum Ink | `#271C38` | Body text on light, app bar on some templates |
| Slate Plum | `#665D71` | Muted text on light, icon surface on dark |
| Grey Plum | `#7B7384` | Placeholder, tertiary text |
| Mist | `#E2E0E4` | Dividers, icon surface on light |
| Paper | `#FEFEFE` | Light page background, text on purple |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#BC2145` | Input error border and message |
| Success | `#1B8A5A` | Order confirmed, device linked (approximate) |
| Focus (light) | `#5407AA` | Input and button focus |
| Focus (TV) | `#FEFEFE` | Thick focus outline around the selected tile (approximate) |

### Translucent overlays

- `rgba(84,7,170,0.04)` and `rgba(84,7,170,0.12)`: hover and pressed tints for text buttons on light.
- `rgba(144,79,247,0.08)` and `rgba(144,79,247,0.12)`: the same on dark.
- `rgba(84,7,170,0.5)` / `rgba(144,79,247,0.5)`: outlined button borders.

### Mode notes

The product (TV UI, The Roku Channel, mobile app) is dark first. Marketing and support pages are light. Keep both in the same purple family and never use neutral grey.

## 3. Typography

Roku uses two proprietary families served from its own CDN:

- **Roku Display** (`RokuDisplay`): headings, hero, prices. Weights 100 to 900 are loaded; 500, 700 and 900 do most of the work.
- **Roku Text** (`RokuText`): body, buttons, nav, forms. Weights 400, 500, 700.

Stack from the site:

```css
font-family: RokuText, Helvetica, Arial, sans-serif;     /* body */
font-family: RokuDisplay, Helvetica, Arial, sans-serif;  /* headings */
```

Google Fonts fallback: **Figtree** for both (round, friendly geometric sans). Nunito Sans is a second choice.

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 48px | 700 | 1.15 | -0.5px |
| Heading L | 32px | 700 | 1.2 | -0.5px |
| Heading M | 28px (1.75rem) | 700 | 1.2 | -0.5px |
| Heading S | 20-24px | 700 | 1.3 | 0 |
| Body L | 18-20px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small / button | 14px | 500 | 1.4 | 0 |
| Caption | 12px | 400 | 1.4 | 0 |

### Rules

- Sentence case for headings and buttons.
- Display headings turn off ligatures: `font-feature-settings: 'liga' off, 'clig' off`.
- On TV, never go below 24px for body text at 1080p.
- Prices and plan numbers use Roku Display at 700.

## 4. Logo & Brand Mark

The logo is the wordmark "Roku" in custom heavy letters with a cut-in, slanted "R" leg and a stubby "k". It appears in Roku Purple on light backgrounds and in white on purple or dark backgrounds. The ® mark sits at the top right.

- **Primary:** Roku Purple wordmark on white or Paper.
- **Reversed:** white wordmark on `#6F1AB1`, `#21014D` or `#13002D` (the header uses white on dark).
- **App icon:** white wordmark centred on a purple square.
- **Clear space:** the height of the "o" on all sides.
- **Minimum size:** 60px wide on screen; the site header uses 75-95px.

Do not:

- Recolour the wordmark in non-purple colours.
- Add outlines, glows or gradients to the letters.
- Rebuild it in a font; always use the vector.
- Place the purple logo on a dark purple background where contrast drops.

## 5. Components

### Buttons

Roku buttons are MUI-based with Roku variables.

```css
.btn {
  font: 500 16px/1.5 RokuText, Helvetica, Arial, sans-serif;
  padding: 10px 24px;
  min-height: 44px;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4,0,0.2,1),
              box-shadow 250ms cubic-bezier(0.4,0,0.2,1),
              border-color 250ms cubic-bezier(0.4,0,0.2,1),
              color 250ms cubic-bezier(0.4,0,0.2,1);
}
/* light page */
.btn--contained { background: #5407AA; color: #FEFEFE; }
.btn--contained:hover { background: #44018B; }
.btn--outlined { color: #5407AA; border: 1px solid rgba(84,7,170,0.5); background: transparent; }
.btn--outlined:hover { background: rgba(84,7,170,0.04); border-color: #5407AA; }
.btn--text { color: #5407AA; background: transparent; }
/* dark page */
.dark .btn--contained { background: #904FF7; color: #FEFEFE; }
.dark .btn--contained:hover { background: #671DC5; }
.dark .btn--outlined { color: #904FF7; border-color: rgba(144,79,247,0.5); }
```

- **Disabled:** text `rgba(255,255,255,0.3)` on dark, `rgba(0,0,0,0.26)` on light, no fill change.
- **Neutral contained (dark):** `#372D46`, hover `#4E455C`.

### Inputs

- MUI outlined field: 8px radius, 1px border `rgba(0,0,0,0.26)`, 56px tall.
- Focus: border `#5407AA` 2px. Error: border and helper text `#BC2145`.
- Labels float above the border at 12px.

### Cards

- **Product card (light):** white, 8px radius, shadow `0px 0px 1px rgba(11,0,27,0.15), 0px 2px 4px rgba(78,69,92,0.08)`, image on top, name in 20px bold, price in Roku Display.
- **Promo band (dark):** full-width `#21014D`, max-width 1160px inner panel, 8px radius, min-height 148px, white text, one button.
- **Partner tile:** logo on brand colour, 12px radius on dark (`#2E0F57` background), 16-24px padding.

### Navigation

- **Header:** 64px tall (`--www-header-height: 64px`), background `#13002D`, white wordmark at left (95x28 desktop, 75x22 mobile), links "What to watch", "Shop products", "Deals", "Support", "Sign in". Dropdown chevrons 16px.
- **Mega menu:** dark panel, columns of 16px links, product thumbnails.
- **Footer:** dark, four columns of links in 14px `#E2E0E4`.

### TV home screen (signature)

- Left rail menu in white text on purple-black, current item highlighted.
- Right side: grid of app tiles, 16:9 or 4:3, about 8px radius, 16-24px gaps.
- Focused tile: white outline about 4px and a 1.05 scale (approximate).
- Backgrounds are themeable; the default is a deep purple gradient.

### Tabs

- Text tabs with a 2-3px purple underline on the selected tab, 16px weight 500.

### Badges

- "New", "Deal" or "Save $X" chips: 4px radius, 12px weight 700, purple fill with white text or lilac fill with purple text.

### Modals

- 12px radius, white or `#21014D`, 24-32px padding, MUI backdrop `rgba(0,0,0,0.5)`.

### Avatars

- Profile avatars are circles with a solid colour and a white initial.

## 6. Layout & Spacing

- MUI breakpoints from the CSS: `600px`, `900px`, `1200px`, `1536px`.
- Content max width about 1160-1200px; full-bleed colour bands behind.
- Spacing unit 8px (MUI). Common values 8, 16, 24, 32, 40, 64.
- Section spacing 64px mobile, 96px desktop.
- Product grids: 1 column mobile, 2 at 600px, 3-4 at 900px+.
- Partner tile rows scroll horizontally on mobile.
- TV UI is designed at 1920x1080 with about 96px safe margins.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Hairline | `0px 0px 1px 0px rgba(11,0,27,0.15), 0px 2px 4px 0px rgba(78,69,92,0.08)` | Cards at rest on light |
| Raised | `0px 8px 16px 0px rgba(1,1,1,0.18), 0px 2px 4px 0px rgba(13,12,13,0.04)` | Hovered cards, menus |
| Overlay | `rgba(0,0,0,0.5)` backdrop | Modals |

On dark surfaces, use lighter purple fills (`#21014D` to `#2E0F57`) instead of shadows to show elevation.

Motion:

- MUI standard easing `cubic-bezier(0.4, 0, 0.2, 1)`.
- Durations: 150ms for small state changes, 200-250ms for buttons, 300ms for menus.
- Content fades up 6px on enter.
- TV focus moves are quick (about 150ms) with a small scale.

## 8. Iconography & Imagery

- **Icons:** Roku Design System (RDS) icons on a 16 or 24px grid, rounded line style around 1.5px stroke, with a two-tone mode using `--rds-icon-accent` (`#904FF7` on light, `#B68BFA` on dark) and `--rds-icon-surface` (`#E2E0E4` / `#665D71`).
- **Remote:** the simple Roku remote with its purple button pad is a recurring illustration.
- **Photography:** cosy living rooms, families on sofas, TV screens showing the Roku home grid. Warm light, real homes.
- **Content art:** key art for shows and partner logos in tiles, never cropped tightly enough to lose the title.
- **Products:** devices shot on flat purple or white with soft shadows.

## 9. Voice & Microcopy

Tone: warm, plain, helpful. Speaks to everyday TV watchers, not tech enthusiasts.

- Sentence case.
- Short benefit headlines, then one or two sentences of support.
- Plain names for features ("Live TV Guide", "Sports Zone", "Home Screen").

Sample strings:

- "The delightfully simple way to TV"
- "TV that's built around you"
- "What to watch"
- "Shop products"
- "Learn more"
- "Sign in"
- "Add to cart"
- "Ready to bring the Roku experience home?"

## 10. Do's and Don'ts

**Do**

- Keep everything in the purple family, including neutrals.
- Use `#5407AA` buttons on light pages and `#904FF7` on dark.
- Use 8px radius for buttons, inputs and cards.
- Build content as tiles and rows, like the TV home screen.
- Keep copy short and friendly.
- Use big, legible type for any TV-sized UI.

**Don't**

- Don't use neutral greys or pure black for dark backgrounds; use `#13002D` to `#21014D`.
- Don't use pill-shaped primary buttons.
- Don't add multiple accent colours; purple is the only brand accent.
- Don't put the purple logo on dark purple.
- Don't use thin, light-weight headlines.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Roku. Dark sections use deep purple-black backgrounds (`#13002D` header, `#19002D` page, `#21014D` bands, `#2E0F57` cards) with white `#FEFEFE` text and lilac `#B68BFA` secondary text. Light pages use `#FEFEFE` background, plum text `#271C38`, muted `#665D71`, dividers `#E2E0E4`. Primary buttons: 8px radius, 44px min height, 16px weight 500 label; on light `#5407AA` (hover `#44018B`), on dark `#904FF7` (hover `#671DC5`), outlined variants use the same purple text with a 50% purple border. Font: RokuText for body and RokuDisplay for headings, fallback Figtree; headings bold 700 with -0.5px tracking, body 16px/1.5. Cards are 8-12px radius with a faint shadow `0px 0px 1px rgba(11,0,27,0.15), 0px 2px 4px rgba(78,69,92,0.08)`. Header is 64px tall with a white Roku wordmark on `#13002D`. Lay out content as tile grids and horizontal rows like the TV home screen, max width 1160-1200px, MUI breakpoints 600/900/1200. Transitions 250ms `cubic-bezier(0.4,0,0.2,1)`. Copy is short, warm, sentence case.

```css
:root {
  --roku-purple: #6F1AB1;
  --roku-action: #5407AA;
  --roku-action-hover: #44018B;
  --roku-bright: #904FF7;
  --roku-bright-hover: #671DC5;
  --roku-lilac: #B68BFA;
  --roku-night: #21014D;
  --roku-card-dark: #2E0F57;
  --roku-page-dark: #19002D;
  --roku-abyss: #13002D;
  --roku-ink: #271C38;
  --roku-muted: #665D71;
  --roku-placeholder: #7B7384;
  --roku-mist: #E2E0E4;
  --roku-paper: #FEFEFE;
  --roku-error: #BC2145;
  --roku-font-display: RokuDisplay, "Figtree", Helvetica, Arial, sans-serif;
  --roku-font-text: RokuText, "Figtree", Helvetica, Arial, sans-serif;
  --roku-radius: 8px;
  --roku-radius-lg: 12px;
  --roku-header-height: 64px;
  --roku-shadow-hairline: 0px 0px 1px 0px rgba(11,0,27,0.15), 0px 2px 4px 0px rgba(78,69,92,0.08);
  --roku-shadow-raised: 0px 8px 16px 0px rgba(1,1,1,0.18), 0px 2px 4px 0px rgba(13,12,13,0.04);
  --roku-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

Values are observed from the public website and product; this file is an unofficial reference and is not affiliated with or endorsed by Roku, Inc.

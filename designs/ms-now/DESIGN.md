---
name: MS NOW
slug: ms-now
url: https://ms.now
category: News
tagline: "Electric blue flag mark, condensed Century headlines, Helvetica Now UI on a white feed."
updated: 2026-11-16
appStoreId: 396885309
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: MS Blue
    hex: "#1010FF"
    role: Logo, links, eyebrows, active states (blue-50)
  - name: Flag Red
    hex: "#FF3723"
    role: Logo flag stripes, live blog pull quotes (red-20)
  - name: Midnight
    hex: "#000012"
    role: Darkest text and dark surfaces
  - name: Text Black
    hex: "#161617"
    role: Headlines and body text
  - name: White
    hex: "#FFFFFF"
    role: Page and pinned header background
  - name: Live Red
    hex: "#CC3814"
    role: Live dot, live coverage chip (red-60)
  - name: Signal Yellow
    hex: "#FFDC19"
    role: Highlight accent, elections "race to watch"
  - name: Blue Mist
    hex: "#F0F0F7"
    role: Eyebrow chip background, light panels (blue-05)
  - name: Zinc 600
    hex: "#52525B"
    role: Secondary text, metadata
  - name: Caption Grey
    hex: "#59585C"
    role: Captions and credits
  - name: Separator
    hex: "#DFDFE5"
    role: Feed separators and rules
  - name: Stone
    hex: "#E7E5E4"
    role: Neutral fill (neutral-30)
  - name: Beige
    hex: "#F0E8D9"
    role: Warm panel background for features
  - name: Deep Blue
    hex: "#0E34BE"
    role: Hover and pressed blue
fonts:
  display:
    family: "ITC Century Condensed"
    fallback: "Instrument Serif"
    weights: [500]
  body:
    family: "Helvetica Now Display"
    fallback: "Inter Tight"
    weights: [400, 500, 700, 800]
  mono:
    family: "Founders Grotesk Mono"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: Article headline, size: 48, weight: 500, lineHeight: 1.0, tracking: "0" }
  - { role: Section headline, size: 36, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: Card headline, size: 24, weight: 700, lineHeight: 1.2, tracking: "-0.02em" }
  - { role: Small headline, size: 18, weight: 700, lineHeight: 1.25, tracking: "-0.02em" }
  - { role: Dek, size: 18, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 700, lineHeight: 1.0, tracking: "0" }
radii: { sm: 4, md: 6, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
shadows:
  - { name: Card, value: "0 6px 20px rgba(0,0,0,0.12)" }
  - { name: Menu, value: "0 4px 20px rgba(0,0,0,0.18)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F7"
  text: "#161617"
  muted: "#52525B"
  border: "#DFDFE5"
  accent: "#1010FF"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: pill
---

# MS NOW

## 1. Visual Theme & Atmosphere

MS NOW (the network formerly called MSNBC, renamed in 2025) has a bright, graphic identity built around an electric blue (`#1010FF`) and a flag-shaped mark with two red-orange stripes (`#FF3723`). The website is a white WordPress-based feed: condensed serif headlines in ITC Century Condensed sit next to a crisp Helvetica Now interface, with blue eyebrows on pale lavender chips and 8px rounded media.

What makes it recognisable:

- **Flag mark.** A blue pennant with two slanted red stripes in front of the MS NOW wordmark, all set in the same blue.
- **One saturated blue.** `#1010FF` is close to pure RGB blue; it is used for the logo, links and labels, not for large fills.
- **Condensed serif headlines.** ITC Century Condensed at weight 500, tight leading, for article and feature headlines.
- **Swiss UI.** Helvetica Now Display for navigation, card headlines and buttons; Helvetica Now Micro for captions and small meta.
- **Show-driven feed.** Program and host branding (opinion columns, show pages, community live Q&As) appears as cards with host photos.

Mood: modern cable network, high-saturation accents on a calm white page.

## 2. Color Palette & Roles

WordPress presets from the live theme (`--wp--preset--color--*`).

| Name | Hex | Preset / role |
|---|---|---|
| MS Blue | `#1010FF` | `blue-50`; logo, links, eyebrows, featured caption rule |
| Deep Blue | `#0E34BE` | Blue hover, pressed |
| Blue Mist | `#F0F0F7` | `blue-05`; eyebrow chip background, light panels |
| Lavender | `#CCCFF6` | Low-opacity blue fills |
| Midnight | `#000012` | Darkest text, dark modules |
| Black | `#000000` | Slider buttons, rules |
| Text Black | `#161617` | `text-black`; headlines and body |
| Zinc 600 | `#52525B` | `gray-600`; secondary text |
| Caption Grey | `#59585C` | Captions |
| Grey 60 | `#555555` | Credits |
| Grey 50 | `#999999` | Borders (`--color-border`) |
| Separator | `#DFDFE5` | Feed separators |
| Stone | `#E7E5E4` | `neutral-30` |
| Grey 20 | `#F2F2F2` | `neutral-10`; subtle fills |
| Beige | `#F0E8D9` | `beige-50`; feature panels |
| White | `#FFFFFF` | Page |

### Reds and yellow

| Name | Hex | Use |
|---|---|---|
| Flag Red | `#FF3723` | `red-20`; logo stripes, live blog pull quote text |
| Red 30 | `#FA3A3A` | Live accents |
| Red 50 | `#CB1111` | Breaking backgrounds |
| Live Red | `#CC3814` | `red-60`; live dot, live coverage chip text |
| Red 70 | `#911010` | Deep red text |
| Signal Yellow | `#FFDC19` | `yellow-50`; highlights |

### Semantic

- Live: blinking `#CC3814` dot plus "LIVE COVERAGE" text on a white chip.
- Elections: Democratic blue `#1010FF`, Republican red `#CC3814`, measure for `#127A60`, against `#AB3684`, race to watch `#F9EB7A`.

### Dark surfaces

Video and live-stream modules use black or `#000012` with white text. The header can render transparent over show artwork, then turns white with blue logo when pinned. The app supports system dark mode (approximate).

## 3. Typography

**Families**

- **Helvetica Now Display** (Monotype): primary UI and card headlines. Stack `HelveticaNowDisplay, "Helvetica Neue", Helvetica, Arial, sans-serif`.
- **Helvetica Now Text / Micro**: running text and captions; Micro is the small-size optical cut used for figcaptions.
- **ITC Century** and **ITC Century Condensed**: editorial headlines (`wp-block-post-title`, weight 500) and pull quotes.
- **Founders Grotesk Mono**: photo credits (shared with sibling NBC properties), 12px with -0.04em tracking.

All commercial. Closest Google Fonts: **Inter Tight** (Helvetica Now), **Instrument Serif** (a condensed display serif standing in for ITC Century Condensed), **Source Serif 4** for regular Century, **IBM Plex Mono** for the mono.

### Scale (desktop, from presets)

| Preset | Size | Typical use |
|---|---|---|
| fs-4000 | clamp(48px to 64px) | Show and section hero titles |
| fs-3000 | clamp(34px to 48px) | Article headline (h1 is 32px mobile, 44px tablet, 48px desktop, line-height 1) |
| fs-2250 | clamp(28px to 36px) | Section headlines |
| fs-2000 | clamp(28px to 32px) | Large card headlines |
| fs-1625 | clamp(17px to 26px) | Pull quotes (900 weight in live blogs) |
| fs-1500 | 24px | Card headline |
| fs-1250 | 20px | Small headline |
| fs-1125 | 18px | Dek, body |
| fs-1000 | 16px | Bylines, UI |
| fs-0875 | 14px | Captions (Helvetica Now Micro), live chip |
| fs-0750 | 12px | Eyebrows, credits |

Weights in the CSS: 400, 500, 700 and 800 dominate; 800 is used for bold card headlines and nav.

### Rules

- Article and opinion headlines in ITC Century Condensed 500, line-height 1.0. Card headlines in Helvetica Now 700-800 with -0.02em tracking.
- Sentence case for headlines. Eyebrows sentence or title case in blue, not always uppercase.
- Credits in mono at 12px with negative tracking; captions in Micro.

## 4. Logo & Brand Mark

The MS NOW logo is a pennant-shaped flag (rounded rectangle with an angled notch on the right and a short tail at lower left) with two parallel slanted stripes, followed by **MS NOW** in a heavy geometric sans.

- **Primary:** flag and wordmark in MS Blue `#1010FF`, stripes in `#FF3723`, on white.
- **Monochrome:** all black (with red stripes) on light backgrounds, or all white on blue and photos.
- **Flag alone:** used as the avatar and app tile (white flag with red stripes on blue, approximate).
- **Clear space:** at least the flag's stripe height around the lockup.
- **Minimum size:** 96px wide for the lockup; the header uses 192px.

Misuse: don't change stripe colours, don't straighten the slant, don't recreate the wordmark in Helvetica Now.

## 5. Components

### Header

- 64-72px tall. Transparent over show artwork; when pinned, `background: #FFFFFF`, logo blue, hamburger and links black.
- Logo block 192px wide at the left; primary links (Shows, Opinion, Politics, Live) in Helvetica Now 14-16px/700; "Watch live" button right.
- Flyout menu opens full height with black text on white.

### Eyebrow chip (signature)

```css
.eyebrow {
  display: inline-block;
  font: 700 12px/1 HelveticaNowDisplay, "Inter Tight", sans-serif;
  color: #1010FF;
  background: #F0F0F7;
  padding: 4px 8px;
  border-radius: 4px;
}
```

### Feed cards

- Media 16:9 with 8px radius; headline 20-24px Helvetica Now 700-800 `#161617`; byline 14px `#52525B`; separators `#DFDFE5` between items.
- Opinion cards show a circular host photo (40-56px) and the columnist name in blue.
- Video cards: play icon in a black circle, duration in white.
- Carousels (sliders): black square nav buttons with white arrows, black scrollbar thumb on `#E7E7E7` track, dots black/`#999`.

### Live coverage

- Chip: white background, 8px radius, `#CC3814` 14px/700 text, 12px padding, a blinking red dot (`animation: live-dot-blink 1.5s ease-in-out infinite`).
- Breaking banner: `#CB1111` or black strip, white "BREAKING" label and headline (approximate).
- Live blog pull quote: `#FF3723` text, 900 weight, 1px black top rule and 5px black bottom rule.

### Article page

- Header block: blue eyebrow, headline ITC Century Condensed 500 (48px desktop, line-height 1), dek in Helvetica Now 18px.
- Featured image or video with 8px radius; caption in Helvetica Now Micro 14px `#59585C`, preceded by a 20px blue horizontal rule; credit italic or in mono 12px.
- Byline row: names in blue links, date and read time in `#52525B`.
- Body: Helvetica Now Text about 18px / 1.5, `#161617`, column about 680px (approximate).
- Pull quotes: ITC Century, large, with blue or red accent depending on template.

### Buttons

| Variant | Style |
|---|---|
| Primary | `#1010FF` fill, white 14-16px/700, pill radius (9999px) or 6px on forms |
| Dark | black fill, white text |
| Outline | 1px `#161617` border, transparent |
| Watch live | white text on `#1010FF` with red dot (approximate) |

Height 40-48px. Hover darkens blue to `#0E34BE`. Focus ring 2px blue.

### Video player

- Video.js based player. 16:9, 8px radius in feeds, black background.
- Big play button centred, control bar with white icons. Live streams show a red LIVE badge.
- A gate overlay for subscribers shows the logo (196px) above sign-in buttons.

### Inputs

Login and newsletter fields: 48px tall, 1px `#999999` border, 6px radius, 16px text; error `#C62828`.

## 6. Layout & Spacing

- Breakpoints: 600px, 768px, 1000px, 1160px, 1240px.
- Content wide width about 1240px; article text column around 680-790px (featured media up to 791px).
- Fluid type via `clamp()` across presets.
- Spacing presets follow 4px steps (`--wp--preset--spacing--150` is about 12px, `--200` about 16px; approximate).
- Feed: single main column with a right rail on desktop; show pages use full-bleed hero artwork.

## 7. Depth, Elevation & Motion

- Cards mostly flat on white with separators.
- Elevated cards and menus: `0 6px 20px rgba(0,0,0,0.12)` and `0 4px 20px rgba(0,0,0,0.18)`.
- Transitions: `opacity .2s ease`, `opacity .3s` for overlays, `font-size .2s` in sticky headers.
- Live dot blink: 1.5s ease-in-out infinite. Reduce motion should stop it.

## 8. Iconography & Imagery

- Icons from a small icon font: simple solid glyphs (play, share, calendar, arrow), 14-24px, `currentColor`.
- Imagery leans on host portraits and show key art, plus news photography. Host cut-outs over blue or beige are common on show pages.
- Media corners 8px.

## 9. Voice & Microcopy

Conversational, show-forward.

- Labels: "Live", "Live coverage", "Opinion", "Breaking", "Watch".
- Buttons: "Watch live", "Sign in", "Subscribe", "See more".
- Meta: "Nov. 16, 2026, 4:10 PM EST" and "5 min read".
- Community: "On the ground with ...", "Live Q&A" (show and event titles vary).

## 10. Do's and Don'ts

**Do**

- Use `#1010FF` for the logo, links and eyebrows.
- Pair a condensed serif headline with a Helvetica-style UI.
- Round media to 8px and use pill buttons.
- Use the red only for the flag stripes, live and breaking.
- Show hosts and programmes in cards.

**Don't**

- Don't call it MSNBC in new UI; the brand is MS NOW.
- Don't flood large areas with the electric blue.
- Don't set the flag in other colours or redraw it.
- Don't use the condensed serif for body copy.
- Don't use heavy drop shadows.

## 11. Agent Prompt Guide

> Build this UI in the style of MS NOW. White page, text `#161617`, secondary `#52525B`, separators `#DFDFE5`. Accent is electric blue `#1010FF` (hover `#0E34BE`) for links, the logo and eyebrows; eyebrows are 12px/700 blue on a `#F0F0F7` chip with 4px radius. Headlines on articles use a condensed serif (`ITCCenturyCondensed, "Instrument Serif", Georgia, serif`) at weight 500, 48px desktop, line-height 1.0. UI and card headlines use `HelveticaNowDisplay, "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` at 700-800 with -0.02em tracking. Captions are 14px `#59585C` with a short 20px blue rule before them. Media has 8px radius; buttons are pills in `#1010FF` with white text. Live states use a blinking `#CC3814` dot and red text on a white chip; the flag stripes and live blog pull quotes use `#FF3723`. Layout up to 1240px with a right rail, fluid `clamp()` type, shadows only on menus `0 4px 20px rgba(0,0,0,0.18)`.

```css
:root {
  --brand-blue: #1010FF;
  --brand-blue-deep: #0E34BE;
  --brand-blue-mist: #F0F0F7;
  --brand-blue-tint: #CCCFF6;
  --brand-red-flag: #FF3723;
  --brand-red-live: #CC3814;
  --brand-red-breaking: #CB1111;
  --brand-yellow: #FFDC19;
  --brand-midnight: #000012;
  --brand-text: #161617;
  --brand-text-muted: #52525B;
  --brand-caption: #59585C;
  --brand-separator: #DFDFE5;
  --brand-stone: #E7E5E4;
  --brand-beige: #F0E8D9;
  --brand-bg: #FFFFFF;
  --brand-font-sans: HelveticaNowDisplay, "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-micro: HelveticaNowMicro, "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-headline: ITCCenturyCondensed, "Instrument Serif", Georgia, "Times New Roman", serif;
  --brand-font-serif: ITCCentury, "Source Serif 4", Georgia, serif;
  --brand-font-mono: FoundersGroteskMono, "IBM Plex Mono", Courier, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-media: 8px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 6px 20px rgba(0,0,0,0.12);
  --brand-shadow-menu: 0 4px 20px rgba(0,0,0,0.18);
  --brand-transition: opacity .2s ease;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by MS NOW.

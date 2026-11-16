---
name: Paramount
slug: paramount
url: https://www.paramount.com
category: Studio
tagline: "A snow-capped peak under an arc of stars, in deep navy and Paramount blue."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Paramount Navy
    hex: "#000A3C"
    role: Corporate mountain and script wordmark, dark backgrounds
  - name: Pictures Blue
    hex: "#016BB1"
    role: Paramount Pictures logo blue, mountain field and stars
  - name: White
    hex: "#FFFFFF"
    role: Logo on blue and navy, text on dark
  - name: Sky Blue
    hex: "#2E8BDB"
    role: Lighter blue in gradients and hover (approximate)
  - name: Night
    hex: "#00051F"
    role: Darkest page background (approximate)
  - name: Ice
    hex: "#E9F1F8"
    role: Light section background (approximate)
  - name: Steel
    hex: "#8A94AD"
    role: Secondary text on navy (approximate)
  - name: Navy Surface
    hex: "#0D1A4F"
    role: Cards and panels on navy (approximate)
  - name: Border
    hex: "#26326A"
    role: Dividers on navy (approximate)
  - name: Ink
    hex: "#0A0F2C"
    role: Body text on light pages (approximate)
fonts:
  display:
    family: "Paramount corporate sans (unconfirmed)"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Paramount corporate sans (unconfirmed)"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 64, weight: 700, lineHeight: 1.05, tracking: "-0.01em" }
  - { role: Section Title, size: 40, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Title, size: 28, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 600, lineHeight: 1.2, tracking: "0.16em" }
  - { role: Descriptor, size: 12, weight: 500, lineHeight: 1.2, tracking: "0.2em" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 8px 24px rgba(0,5,31,0.45)" }
preview:
  bg: "#000A3C"
  surface: "#0D1A4F"
  text: "#FFFFFF"
  muted: "#8A94AD"
  border: "#26326A"
  accent: "#016BB1"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Paramount

## 1. Visual Theme & Atmosphere

Paramount's brand is a mountain. A single snow-streaked peak, framed by a semicircle of stars, has been the studio's logo since 1914, which makes it the oldest surviving Hollywood studio mark. Studio lore says W. W. Hodkinson sketched it from memory of the Utah mountains of his youth, and that the stars stood for the contracted stars of the time. The current film logo has 22 stars arcing over the peak, with the "Paramount" script set across the mountain's face.

Two colour worlds sit side by side:

- **Paramount Pictures blue.** The film logo in a mid blue (`#016BB1` in the vector logo) with white script, used on posters, credits and the animated opening, where the camera sweeps over a lake and the stars fly into place.
- **Corporate navy.** Since the 2022 corporate rename to Paramount Global, and continuing after the 2025 merger that formed Paramount, a Skydance Corporation, the mountain and script are drawn in a very deep navy (`#000A3C`), often with "A SKYDANCE CORPORATION" in small spaced serif caps beneath the wordmark.

A page that feels like Paramount is deep navy or white, calm and premium, with large film art, the mountain used as a quiet anchor, and blue only where it means something. It reads as heritage and scale rather than playful.

Note: paramount.com blocks automated fetches, so web UI values here (other than the two logo colours) are approximate and based on the brand's published logos and marketing, not on the site's CSS.

Density: low to medium. Large hero art, generous spacing, short copy.

## 2. Color Palette & Roles

### Observed in official vector logos

| Name | Hex | Role |
| --- | --- | --- |
| Paramount Navy | `#000A3C` | Corporate mountain, script wordmark, "A SKYDANCE CORPORATION" line |
| Pictures Blue | `#016BB1` | Paramount Pictures mountain, stars and field |
| White | `#FFFFFF` | Script and snow lines on blue; logo on navy |

### Approximate UI palette

| Name | Hex | Role |
| --- | --- | --- |
| Night | `#00051F` | Deepest background, video letterbox |
| Navy Surface | `#0D1A4F` | Cards, menus on navy |
| Border | `#26326A` | Dividers, input borders on navy |
| Steel | `#8A94AD` | Secondary text on navy |
| Sky Blue | `#2E8BDB` | Hover on blue buttons, gradient highlight |
| Ice | `#E9F1F8` | Light section background |
| Ink | `#0A0F2C` | Body text on white |
| Gray | `#5B6275` | Secondary text on white |

### Gradients

The animated logo moves from a pale dawn sky down to deep blue. For heroes, use `linear-gradient(180deg, #016BB1 0%, #000A3C 70%)` or a navy-to-night fade `linear-gradient(180deg, #000A3C, #00051F)`.

### Semantic (approximate)

| Name | Hex | Use |
| --- | --- | --- |
| Error | `#E5484D` | Field errors |
| Success | `#2FB67C` | Confirmation |
| Focus | `#FFFFFF` on navy, `#016BB1` on white | 2px focus outline |

### Mode

Both. Corporate and investor pages run light (white with navy type); film showcases run dark (navy with white type). Do not confuse Paramount's palette with Paramount+, the streaming product, which uses its own brighter blue and gradient system.

## 3. Typography

- **Script wordmark.** "Paramount" in a flowing italic script with a large swash "P". It is lettering, not a font. Use the artwork.
- **Descriptor line.** "A SKYDANCE CORPORATION" under the corporate wordmark is set in small, widely spaced serif capitals. Cormorant Garamond 500 in uppercase with 0.2em tracking is a close Google Fonts stand-in.
- **UI type.** The corporate typeface used on paramount.com could not be confirmed (the site blocks automated fetches). A clean grotesque fits the brand; use Inter as the fallback.
- **Film titles** come from each film's title treatment.

### Scale (approximate)

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Hero | 64px | 700 | 1.05 | 40px on mobile |
| Section title | 40px | 700 | 1.1 | 28px on mobile |
| Title | 28px | 600 | 1.2 | Card group headings |
| Lead | 20px | 400 | 1.5 | Intros |
| Body | 16px | 400 | 1.6 | Paragraphs |
| Eyebrow | 12px | 600 | 1.2 | Uppercase, 0.16em tracking |
| Descriptor | 12px | 500 | 1.2 | Serif caps, 0.2em tracking |

### Rules

- Sentence case for headlines and body; uppercase only for eyebrows and descriptor lines.
- Keep headlines short and declarative.
- Never set "Paramount" in a script font to fake the wordmark.

## 4. Logo & Brand Mark

- **Mountain with stars (Paramount Pictures).** A semicircle of 22 five-point stars over a peak with white snow streaks, "Paramount" script across the upper slope, all in Pictures Blue. This is `logo.svg`.
- **Corporate mountain.** The 2022 redraw: a navy disc-like field with the stars and peak cut out, simpler and heavier, used as a symbol and avatar.
- **Corporate wordmark.** "Paramount" script alone in navy, optionally with "A SKYDANCE CORPORATION" below in spaced serif caps.
- **Colour versions:** blue on white, white on blue, navy on white, white on navy, white on film imagery.
- **Clear space:** at least the height of one star ring (about one sixth of the logo height) on all sides.
- **Minimum size:** about 48px wide for the mountain with stars; below that, use the corporate mountain symbol (minimum 24px).
- **Placement:** top-left in headers; centred on posters, in the billing block area or top of the key art.

Misuse: do not change the number or arrangement of stars, separate the script from the mountain in the Pictures logo, recolour it in non-brand colours, add 3D lighting to the flat version, or crop the peak.

## 5. Components

All component values are approximate, designed to match the brand rather than copied from site CSS.

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 48px; padding: 0 28px;
  font: 600 14px/1 Inter, sans-serif;
  text-transform: uppercase; letter-spacing: 0.08em;
  border: 1px solid transparent; border-radius: 4px;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease;
}
.btn-primary { background: #016BB1; color: #FFFFFF; }
.btn-primary:hover { background: #2E8BDB; }
.btn-primary:active { background: #015A94; }

.btn-light { background: #FFFFFF; color: #000A3C; }
.btn-light:hover { background: #E9F1F8; }

.btn-outline { background: transparent; color: #FFFFFF; border-color: rgba(255,255,255,0.6); }
.btn-outline:hover { border-color: #FFFFFF; background: rgba(255,255,255,0.08); }

.btn:focus-visible { outline: 2px solid #FFFFFF; outline-offset: 3px; }
.btn:disabled { opacity: 0.4; }
```

Text links: white or Pictures Blue with a 1px underline offset 4px; arrow icon after "Learn more" moves 4px right on hover.

### Inputs

```css
.input {
  height: 48px; padding: 0 16px;
  background: #0D1A4F; color: #FFFFFF;
  border: 1px solid #26326A; border-radius: 4px;
  font: 400 16px Inter, sans-serif;
}
.input::placeholder { color: #8A94AD; }
.input:focus { border-color: #FFFFFF; outline: none; }
```

On light pages: white fill, `#C9D2E3` border, navy text, focus border `#016BB1`.

### Cards

- Film cards: 2:3 poster, 4px radius, title 16px weight 600 below, release line 13px Steel.
- News cards: 16:9 image, eyebrow (12px uppercase, Pictures Blue), 20px title, date.
- On navy, cards are borderless; on white, use a 1px `#E1E6EF` border.
- Hover: image scales 1.04 over 400ms, shadow `0 8px 24px rgba(0,5,31,0.45)`.

### Navigation

- Header 72px, navy `#000A3C` or transparent over heroes, mountain symbol and wordmark left, links right ("Movies", "Television", "Streaming", "Company", "News") at 14px weight 500.
- Active link: white with a 2px Pictures Blue underline.
- Mobile: full-height navy menu, links at 24px.

### Hero

Full-bleed key art or trailer with a navy gradient from the bottom (`linear-gradient(0deg, #000A3C 0%, rgba(0,10,60,0) 60%)`), eyebrow "IN THEATERS", title art, primary blue button and outline "Watch Trailer" button.

### Star arc divider (signature)

A thin semicircle of small stars or dots can mark section breaks or frame a hero headline, echoing the logo. Keep it white at 40-60% opacity, never coloured, and use it once per page.

### Badges

Pill labels, 11-12px uppercase weight 600, 4px 10px padding: navy on white or white on blue.

### Modals

Navy `#0D1A4F`, 8px radius, 32px padding, max 720px; video modals on `#00051F` at 95%.

### Footer

Night `#00051F`, mountain symbol in white, link columns 14px Steel, legal 12px, descriptor line in serif caps.

## 6. Layout & Spacing

- **Max width:** about 1280px for content, 1440px for media rows; heroes full-bleed.
- **Gutters:** 20px mobile, 40px tablet, 64px desktop.
- **Breakpoints:** 640, 960, 1280, 1440px.
- **Section spacing:** 64px mobile, 96px desktop.
- **Grids:** 12 columns with 24px gaps; posters 2/3/5 across.

## 7. Depth, Elevation & Motion

- Mostly flat colour fields with gradients and imagery for depth.
- **Shadow:** one soft card shadow `0 8px 24px rgba(0,5,31,0.45)` on hover.
- **Durations:** 200ms for colour changes, 400ms for image scale, 600ms for hero fades.
- **Signature motion:** in the film opening, stars sweep in from the sides and settle into the arc over the peak. On the web, a staggered fade-in of the star arc (30-40ms per star) is enough.

## 8. Iconography & Imagery

- **Icons:** thin line icons, 24px, 1.5px stroke, white on navy, navy on white.
- **Imagery:** key art and stills from Paramount films (Mission: Impossible, Top Gun, Transformers, Star Trek, A Quiet Place) and series. Wide, cinematic crops.
- **Landscape cues:** mountains, skies, lakes and dusk light suit the brand for corporate pages.
- **Stars:** five-point stars as in the logo only; no sparkles.

## 9. Voice & Microcopy

Assured and classic. Speaks with the weight of a studio founded in 1912.

- Eyebrows: "IN THEATERS", "NOW STREAMING ON PARAMOUNT+", "COMING SOON"
- Buttons: "Get Tickets", "Watch Trailer", "Learn More", "Explore"
- Corporate: "Paramount, a Skydance Corporation, is a leading media and entertainment company."
- Casing: title case for buttons, uppercase for eyebrows, sentence case for headlines and body.

## 10. Do's and Don'ts

**Do**

- Use navy `#000A3C` and Pictures Blue `#016BB1` as the only brand hues.
- Keep the mountain and stars intact and use the artwork.
- Use calm, wide layouts with big film art.
- Use white serif caps with wide tracking for formal descriptor lines.
- Mark heritage with the star arc, once.

**Don't**

- Don't mix in Paramount+ gradients or bright streaming blue.
- Don't change the star count or arc shape.
- Don't set the script in a font.
- Don't use playful rounded pills everywhere; buttons are squarer and quieter.
- Don't add sparkle effects to the stars.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Paramount. Dark pages use navy `#000A3C` with cards `#0D1A4F`, borders `#26326A`, white text and Steel `#8A94AD` secondary text; light pages use white with navy text. The action colour is Pictures Blue `#016BB1` (hover `#2E8BDB`). Use Inter: hero 64px weight 700, section titles 40px, body 16px/1.6, eyebrows 12px uppercase with 0.16em tracking. Formal descriptor lines ("A SKYDANCE CORPORATION") use Cormorant Garamond uppercase with 0.2em tracking. Buttons are 48px tall, 4px radius, uppercase 14px 600 with 0.08em tracking: solid blue, white with navy text, or white outline. Heroes are full-bleed film art with a navy gradient from the bottom. Use the mountain-and-stars logo SVG top-left; a faint arc of small white stars can frame one headline. Keep motion slow and smooth (200-600ms).

```css
:root {
  --brand-navy: #000A3C;
  --brand-blue: #016BB1;
  --brand-blue-hover: #2E8BDB;
  --brand-blue-pressed: #015A94;
  --brand-night: #00051F;
  --brand-surface: #0D1A4F;
  --brand-border: #26326A;
  --brand-text: #FFFFFF;
  --brand-text-secondary: #8A94AD;
  --brand-ice: #E9F1F8;
  --brand-ink: #0A0F2C;
  --brand-hero-gradient: linear-gradient(180deg, #016BB1 0%, #000A3C 70%);
  --brand-font: "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-font-descriptor: "Cormorant Garamond", Georgia, serif;
  --brand-radius: 4px;
  --brand-radius-modal: 8px;
  --brand-shadow-card: 0 8px 24px rgba(0, 5, 31, 0.45);
  --brand-duration: 200ms;
  --brand-max-width: 1280px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Paramount.

---
name: Waymo
slug: waymo
url: https://waymo.com
category: Transport
tagline: "Calm white and midnight navy, a green-and-blue W mark and data-led safety storytelling."
updated: 2026-11-16
appStoreId: 1343524838
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Waymo Green
    hex: "#00E89D"
    role: Brand mark, highlights, chart fills, green sections
  - name: Waymo Blue
    hex: "#0077FF"
    role: Links, primary actions, brand mark
  - name: Midnight
    hex: "#050F1E"
    role: Dark sections, primary text on light, map popovers
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Slate
    hex: "#5D6E83"
    role: Secondary text, pills
  - name: Steel
    hex: "#7C899A"
    role: Muted text, borders on dark
  - name: Fog
    hex: "#E5E9F0"
    role: Light surfaces, frosted pills
  - name: Cloud
    hex: "#F4F6F9"
    role: Section background
  - name: Mist
    hex: "#CCD3DC"
    role: Borders and dividers
  - name: Teal
    hex: "#00929D"
    role: Map markers, secondary accent
  - name: Cobalt
    hex: "#033098"
    role: Deep blue accents, markers on light
  - name: Signal Red
    hex: "#EA0000"
    role: Alerts, highlighted links
fonts:
  display:
    family: "GT Walsheim"
    fallback: "Outfit"
    weights: [400, 500, 700]
  body:
    family: "GT Walsheim"
    fallback: "Outfit"
    weights: [400, 500]
  mono:
    family: "Simplon Mono"
    fallback: "IBM Plex Mono"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 50, weight: 500, lineHeight: 1.05, tracking: "-0.04em" }
  - { role: Heading L, size: 40, weight: 500, lineHeight: 1.1, tracking: "-0.04em" }
  - { role: Heading M, size: 30, weight: 500, lineHeight: 1.2, tracking: "-0.02em" }
  - { role: Heading S, size: 24, weight: 500, lineHeight: 1.25, tracking: "-0.02em" }
  - { role: Body L, size: 20, weight: 400, lineHeight: 1.45, tracking: "-0.02em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "-0.02em" }
  - { role: Label, size: 14, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Mono caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0.04em" }
radii: { sm: 4, md: 8, lg: 20, pill: 1000 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Card, value: "0 4px 12px rgba(5,15,30,0.1)" }
  - { name: Popover, value: "0 8px 28px rgba(0,0,0,0.18)" }
  - { name: Modal, value: "0 12px 40px rgba(0,0,0,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F6F9"
  text: "#050F1E"
  muted: "#5D6E83"
  border: "#CCD3DC"
  accent: "#0077FF"
  accentText: "#FFFFFF"
  radius: 1000
  buttonStyle: pill
---

# Waymo

## 1. Visual Theme & Atmosphere

Waymo presents a driverless car service as something calm and well tested. The site is white with deep midnight navy (`#050F1E`) bands, set in GT Walsheim with tight tracking, and colored by the two-tone brand mark: mint green (`#00E89D`) and electric blue (`#0077FF`). Video of empty-driver-seat rides, sensor visualizations and safety statistics do most of the talking.

What makes it recognisable:

- **The W mark.** Two rounded green strokes and one blue stroke form a "W" with a dot at the top right, suggesting a path and a sensor.
- **Midnight and white.** Large navy sections with white text alternate with white and pale gray (`#F4F6F9`) sections.
- **Tight, rounded type.** GT Walsheim at medium weight with -0.02em to -0.04em tracking on everything from headlines to body.
- **Data as hero.** Big safety numbers, bar charts filling in green, and city maps with markers.
- **Sensor imagery.** Lidar point clouds and perception overlays in green, blue and teal on black, next to clean photos of the white Jaguar I-PACE and Zeekr vehicles with roof sensors.
- **Frosted pills.** Floating controls and tab pills use a blurred pale fill (`#E5E9F0FA`, 20px blur) with fully rounded ends.

Mood words: calm, precise, trustworthy, futuristic, measured.

## 2. Color Palette & Roles

Values below were read from waymo.com CSS (most-used colors and variables such as `--marker-color`, `--groups-background-color`, `--pill-color`) and the inline logo SVGs.

| Name | Hex | Role |
|---|---|---|
| Waymo Green | `#00E89D` | Chart fills, green sections, highlights; logo file uses `#00EBA7` |
| Waymo Blue | `#0077FF` | Links, active borders, markers, primary actions; logo file uses `#0583FF` |
| Action Blue | `#006FEE` | Link hover and pressed (approximate role) |
| Midnight | `#050F1E` | Dark sections, primary text, map popovers |
| Navy Card | `#132237` | Image and card backgrounds on dark |
| Ink Navy | `#23233C` | Editorial headings |
| Deep Slate | `#43546A` | Body text on gray |
| Slate | `#5D6E83` | Secondary text, pill text |
| Steel | `#7C899A` | Muted text, borders on dark |
| Silver | `#A2ABB9` | Inactive group text on dark |
| Mist | `#CCD3DC` | Borders on light |
| Fog | `#E5E9F0` | Light surfaces, frosted pills |
| Cloud | `#F4F6F9` | Section background |
| White | `#FFFFFF` | Page |

### Accents

| Name | Hex | Role |
|---|---|---|
| Teal | `#00929D` | Map markers, icons |
| Sea Green | `#04B499` | Markers, secondary green |
| Cobalt | `#033098` | Markers and borders on light |
| Periwinkle | `#5172CD` | Map labels |
| Pale Blue | `#D4E0FC` | Link chip background |
| Signal Red | `#EA0000` | Alerts, emphasis links |

### Semantic

| State | Hex |
|---|---|
| Success | `#00E89D` fill with Midnight text |
| Error | `#EA0000` |
| Info | `#0077FF` |
| Focus | inset `0 0 0 3px #00E89D` or `#FFFFFF` on dark (served in CSS) |

### Dark sections

Midnight `#050F1E` background, white headings, Silver `#A2ABB9` and Steel `#7C899A` secondary text, borders `#7C899A`, markers in white and green. The Waymo app uses a dark map theme for rides with the same green and blue accents.

## 3. Typography

**Families:** GT Walsheim (Grilli Type) is the primary face, served as `GT-Walsheim` with Noto Sans SC and Noto Sans Tamil for other scripts. Simplon BP and Simplon Mono (Colophon) appear in technical and data captions. All are commercial.

**Fallbacks:** Outfit (Google Fonts) for GT Walsheim; IBM Plex Mono for Simplon Mono.

```css
font-family: "GT-Walsheim", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
letter-spacing: -0.02em;
```

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 50px (3.125rem) | 500 | 1.05 | -0.04em |
| Heading L | 40px (2.5rem) | 500 | 1.1 | -0.04em |
| Heading M | 30-32px | 500 | 1.2 | -0.02em |
| Heading S | 24px (1.5rem) | 500 | 1.25 | -0.02em |
| Body L | 20px (1.25rem) | 400 | 1.45 | -0.02em |
| Body | 16px | 400 | 1.5 | -0.02em |
| Label | 14px (.875rem) | 500 | 1.3 | 0 |
| Mono caption | 12px Simplon Mono | 400 | 1.4 | 0.04em, often uppercase |

Sizes and tracking values are the most frequent ones in the served CSS; weights are approximate. Big stat numerals go to 80px or more with -0.05em to -0.06em tracking.

### Rules

- Sentence case for headings. Trademark marks appear on taglines ("The World's Most Experienced Driver™").
- Negative tracking everywhere, tighter as size grows.
- Footnote markers (*) link stats to a source line in 12-14px muted text.
- Use mono only for data labels, coordinates, scenario names and captions.

## 4. Logo & Brand Mark

The logo pairs the **W mark** with the **WAYMO** wordmark in spaced capitals. The mark is built from three rounded strokes: two in green and one in blue, overlapping to form a "W", with a green dot at the upper right. The header on waymo.com shows the wordmark alone in monochrome; the mark alone is used as an avatar and in menus.

- **Full color:** green and blue mark with a gray or Midnight wordmark on white.
- **Mono:** all white on Midnight or all black on white (`--mono-logo-color`).
- **Avatar:** the mark on Midnight or white.
- **Clear space:** at least the height of the dot on every side (approximate).
- **Minimum size:** mark about 24px wide (approximate).

Misuse:

- Do not swap the green and blue strokes or recolor the mark.
- Do not retype or lowercase "WAYMO", or add shadows, glows or 3D effects.

## 5. Components

### Buttons

| Variant | Background | Text | Radius | Height |
|---|---|---|---|---|
| Primary | `#0077FF` | `#FFFFFF` 16px/500 | 1000px | 48px |
| Primary on dark | `#FFFFFF` | `#050F1E` | 1000px | 48px |
| Secondary | transparent | `#050F1E` | 1000px, 1px `#CCD3DC` border | 48px |
| Frosted pill | `#E5E9F0FA` + `backdrop-filter: blur(20px)` | `#5D6E83` | 999px | 40px |
| Text link with arrow | transparent | `#0077FF` | 0 | auto |
| App store badges | black | white | 8px | 40-48px |

Fills and heights are approximate; radii and the frosted pill are from served CSS.

- Hover: primary darkens to `#006FEE`; secondary gets `#F4F6F9` fill.
- Focus: `box-shadow: inset 0 0 0 3px #00E89D` (white on dark).
- Transitions: 150-200ms ease-out.

```css
.waymo-btn {
  height: 48px; padding: 0 24px;
  border: 0; border-radius: 1000px;
  background: #0077FF; color: #fff;
  font: 500 16px/1 var(--brand-font); letter-spacing: -0.02em;
  transition: background-color .15s ease-out;
}
.waymo-btn:hover { background: #006FEE; }
.waymo-btn:focus-visible { box-shadow: inset 0 0 0 3px #00E89D; outline: none; }
```

### Stat block (signature)

- Huge numeral (64-120px, weight 500, -0.05em) in Midnight or green on dark, a one-line label beneath at 20px, and a footnote marker.
- Animated bar chart: two bars compare Waymo with human drivers; the Waymo bar fills in green (`#00E89D`, 1.5s scale transition).

### City availability map

- Light or Midnight map, markers in the accent colors (`#07F`, `#04B499`, `#00929D`, `#033098`).
- Popover: Midnight `#050F1E` fill, white text, `#033098` border, 8px radius, Popover shadow.
- Side list of cities ("Phoenix, AZ", "San Francisco, CA", "Los Angeles, CA", "Austin, TX", "Atlanta, GA") with status labels such as "Now available" or "Coming soon".

### Feature cards

- Radius 16-24px, Cloud `#F4F6F9` or white with Card shadow `0 4px 12px #050F1E1A`.
- Full-bleed photo or video on top, title 24px/500, body 16px Slate.
- Dark variant: `#132237` card on Midnight.

### Navigation

- Header about 64-72px, white with a monochrome WAYMO wordmark at left, or transparent white over video.
- Items: "Rides", "Waymo Driver", "Safety", "Company" (each a dropdown with a mini mark and title), then "Careers".
- Right: search icon and a primary "Download the app" style pill (approximate label).
- Mobile: full-screen menu with grouped links and city list.

### Tabs and toggles

- Frosted pill container (`#E5E9F0FA`, blur 20px, 4px padding) holding segment buttons; selected segment white with Midnight text.
- Video scenario tabs ("San Francisco - Day", "Phoenix - Night") as pills over the video.

### Inputs

- 48px tall, 4-8px radius, 1px `#CCD3DC` border, 16px text, focus border `#0077FF` (approximate).

### Footnotes and legal

Small 12-14px Slate text with numbered or starred notes under stats; links underlined.

## 6. Layout & Spacing

- **Base unit:** 4px; common steps 8, 16, 24, 32, 48, 64, 96, 128.
- **Content width:** about 1200-1440px with 24-48px gutters (approximate).
- **Grid:** 12 columns; text left with media right, or centered statements over full-bleed video.
- **Section spacing:** 96-128px on desktop, 64px on mobile.
- **Breakpoints:** about 600, 1024 and 1440px (approximate). Low density: one message per screen.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 4px 12px #050F1E1A` |
| Popover | `0 8px 28px rgba(0,0,0,.18)` |
| Modal | `0 12px 40px rgba(0,0,0,.25)` |
| Soft | `0 0 10px #0000001A` |
| Frosted | `backdrop-filter: blur(20px)` on `#E5E9F0FA` |

- Motion is slow and smooth: video loops, charts filling over 1.5s, fades on scroll.
- Hover feedback is short (150ms ease-out).
- Every autoplay video has a pause button; respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** simple outline icons, 24px, 1.5-2px stroke, rounded joins, Midnight or white.
- **Vehicle photography:** clean, daylight or dusk shots of white Waymo vehicles with roof sensor domes in real city streets; riders in the back seat.
- **Sensor visualization:** lidar point clouds and bounding boxes in green, blue and teal on black; use as hero video or section backgrounds.
- **Maps:** simplified city maps with colored service areas.

## 9. Voice & Microcopy

Measured, factual and reassuring. States what the car does and backs it with data and sources.

Sample strings read on waymo.com today:

- "The world's first autonomous ride-hailing service"
- "The World's Most Experienced Driver™"
- "Our mission: Be the world's most trusted driver"
- "A driver that never gets tired, angry, or distracted. A ride that's all yours."
- "Meet the technology behind it all"
- "Download and ride today"
- Nav: "Rides", "Waymo Driver", "Safety", "Company", "Careers"

Safety multiples and ride counts on the homepage are updated regularly and carry footnotes; read them from waymo.com and keep the footnote before quoting.

## 10. Do's and Don'ts

**Do**

- Use Midnight `#050F1E` and white as the main canvas, with green and blue as accents.
- Set type in GT Walsheim or Outfit with negative tracking.
- Use fully rounded pills for buttons and segmented controls.
- Lead with real footage, sensor visuals and sourced numbers.
- Keep layouts sparse with one idea per section.

**Don't**

- Don't fill large areas with saturated blue; green is the louder brand color.
- Don't use sci-fi neon glows, chrome or angular HUD frames.
- Don't quote safety numbers without the source footnote.
- Don't use heavy shadows or sharp corners.
- Don't show a person in the driver's seat.

## 11. Agent Prompt Guide

> Build this UI in the style of Waymo. White page alternating with midnight navy `#050F1E` sections and pale `#F4F6F9` bands. Font: `"GT-Walsheim", Outfit, -apple-system, sans-serif` at weight 400-500 with letter-spacing -0.02em (headlines -0.04em); hero 50px, body 16-20px. Text on light is `#050F1E`, secondary `#5D6E83`; on dark use white and `#A2ABB9`. Accents: mint green `#00E89D` and blue `#0077FF`. Primary buttons are 48px pills (radius 1000px) in `#0077FF` with white text, focus `inset 0 0 0 3px #00E89D`. Segmented controls sit in a frosted pill (`#E5E9F0FA`, `backdrop-filter: blur(20px)`). Cards are 16-24px radius with `0 4px 12px #050F1E1A`. Feature big stat numerals with footnotes, a green bar chart, a city map with blue and teal markers and navy popovers, and full-bleed video of driverless rides. Calm, factual copy.

```css
:root {
  --brand-green: #00E89D;
  --brand-blue: #0077FF;
  --brand-blue-hover: #006FEE;
  --brand-midnight: #050F1E;
  --brand-navy-card: #132237;
  --brand-text: #050F1E;
  --brand-text-secondary: #5D6E83;
  --brand-text-on-dark-muted: #A2ABB9;
  --brand-bg: #FFFFFF;
  --brand-surface: #F4F6F9;
  --brand-fog: #E5E9F0;
  --brand-border: #CCD3DC;
  --brand-teal: #00929D;
  --brand-cobalt: #033098;
  --brand-font: "GT-Walsheim", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --brand-font-mono: "Simplon Mono", "IBM Plex Mono", Menlo, monospace;
  --brand-tracking: -0.02em;
  --brand-tracking-tight: -0.04em;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 20px;
  --brand-radius-pill: 1000px;
  --brand-shadow-card: 0 4px 12px #050F1E1A;
  --brand-shadow-popover: 0 8px 28px rgba(0,0,0,.18);
  --brand-frost: #E5E9F0FA;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Waymo.

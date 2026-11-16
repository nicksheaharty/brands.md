---
name: Uber
slug: uber
url: https://uber.com
category: Transport
tagline: "Black and white, bold Uber Move type, grey input wells and a map under every sheet."
updated: 2026-11-16
appStoreId: 368677368
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Brand color, primary buttons, nav bar, wordmark
  - name: White
    hex: "#FFFFFF"
    role: Page and sheet background, text on black
  - name: Gray 50
    hex: "#F3F3F3"
    role: Input wells, secondary buttons, chips, quiet cards
  - name: Gray 100
    hex: "#E8E8E8"
    role: Borders, dividers, secondary button hover
  - name: Content Secondary
    hex: "#5E5E5E"
    role: Secondary text, meta, inactive icons
  - name: Content Tertiary
    hex: "#757575"
    role: Placeholder text, captions
  - name: Gray 900
    hex: "#1F1F1F"
    role: Dark surfaces, dark mode cards
  - name: Accent Blue
    hex: "#276EF1"
    role: Links, selected map route, focus, info
  - name: Positive
    hex: "#05944F"
    role: Success, price drops, on-time
  - name: Negative
    hex: "#E11900"
    role: Errors, surge warnings, cancellations
  - name: Warning
    hex: "#FFC043"
    role: Warnings, delays
  - name: Eats Green
    hex: "#06C167"
    role: Uber Eats brand accent
fonts:
  display:
    family: "Uber Move"
    fallback: "Inter"
    weights: [500, 700]
  body:
    family: "Uber Move Text"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Display Medium, size: 52, weight: 700, lineHeight: 1.23, tracking: "0" }
  - { role: Heading Large, size: 36, weight: 700, lineHeight: 1.22, tracking: "0" }
  - { role: Heading Medium, size: 28, weight: 700, lineHeight: 1.29, tracking: "0" }
  - { role: Heading Small, size: 24, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Heading XSmall, size: 20, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Label Medium, size: 16, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Paragraph Medium, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Paragraph Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Shadow 400, value: "0 1px 4px rgba(0,0,0,0.16)" }
  - { name: Shadow 500, value: "0 2px 8px rgba(0,0,0,0.16)" }
  - { name: Shadow 600, value: "0 4px 16px rgba(0,0,0,0.16)" }
  - { name: Shadow 700, value: "0 8px 24px rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F3F3"
  text: "#000000"
  muted: "#5E5E5E"
  border: "#E8E8E8"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Uber

## 1. Visual Theme & Atmosphere

Uber is black and white with almost nothing else. The 2018 identity (by Wolff Olins with Uber's in-house team) replaced the old "U" and bit icons with the plain **Uber** wordmark and a custom typeface, Uber Move. The product design system, **Base**, carries the same restraint: white sheets, black primary buttons, grey input wells, bold headings, and a map as the background of the core ride flow.

What makes it recognisable:

- **Monochrome first.** Black `#000000` for brand and primary actions, white for surfaces, a soft grey `#F3F3F3` for inputs and secondary buttons. Color shows up only as status (blue routes, green success, red errors) or inside photos and illustrations.
- **Uber Move.** A custom geometric grotesk with squared-off rounds. Headlines are bold (700) and tight; body text uses the Text cut for readability.
- **Grey input wells.** Pickup and destination fields are filled grey rectangles with no borders, often linked by a small dot-line-square glyph.
- **Map plus bottom sheet.** In the app the map fills the screen and a white sheet with 16px top corners slides up with ride options, each with a car illustration, ETA and price.
- **Big, plain marketing.** uber.com uses a black nav bar, a large bold headline ("Go anywhere with Uber" style), a ride request form and big photos of people, cars and cities.

Mood words: confident, efficient, global, neutral, direct.

## 2. Color Palette & Roles

uber.com returned an error to automated requests today, so values come from the open-source Base Web (baseui) tokens, Base documentation and observation. Treat greys as approximate: Uber's newer Base palette shifted some greys slightly from the open-source ones.

| Name | Hex | Role |
|---|---|---|
| Black (primary A) | `#000000` | Brand, primary buttons, nav, headings |
| White (primary B) | `#FFFFFF` | Backgrounds, text on black |
| Gray 50 | `#F3F3F3` | Input wells, secondary buttons, chips (`backgroundSecondary`) |
| Gray 100 | `#E8E8E8` | Borders, dividers, pressed secondary (approx.) |
| Gray 200 | `#E2E2E2` | Opaque borders (baseui `borderOpaque`) |
| Gray 300 | `#CBCBCB` | Disabled borders |
| Gray 400 | `#AFAFAF` | Disabled text |
| Content Tertiary | `#757575` | Placeholders, captions |
| Content Secondary | `#5E5E5E` | Secondary text (older baseui uses `#545454`) |
| Gray 700 | `#333333` | Primary button hover |
| Gray 900 | `#1F1F1F` | Dark surfaces |
| Gray 1000 | `#141414` | Dark mode background |

### Semantic colors

| State | Hex | Light fill | Use |
|---|---|---|---|
| Accent / info | `#276EF1` | `#EFF3FE` | Links, selected route, focus ring |
| Positive | `#05944F` | `#E6F2ED` | Success, "Arriving now" |
| Warning | `#FFC043` | `#FFFAF0` | Delays, notices (text uses `#674D1B`) |
| Negative | `#E11900` | `#FFEFED` | Errors, cancellations, higher fares |

Newer Base docs show updated status tones such as red `#DE1135` and green `#0A924C` (approximate, seen in documentation styling).

### Sub-brands

- Uber Eats: green `#06C167` with black.
- Uber One membership: black with a gold-to-amber accent (approximate).

### Dark mode

The app supports a full dark theme: background `#000000` or `#141414`, sheets `#1F1F1F`, input wells `#333333`, primary buttons inverted to white with black text, secondary text `#AFAFAF`.

## 3. Typography

**Family:** Uber Move (display, headings, labels) and Uber Move Text (paragraphs, small UI). Both are proprietary, designed for Uber in 2018. Uber Move Mono exists for numbers in some product surfaces.

**Licensing:** not available outside Uber. Use **Inter** from Google Fonts as the fallback (set headings at 700 with slight negative tracking to approach Move's density). **DM Sans** is a reasonable alternative for display.

```css
font-family: "UberMove", "UberMoveText", "Inter", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Scale (Base typography tokens)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display Large | 96px | 700 | 112px |
| Display Medium | 52px | 700 | 64px |
| Display Small | 44px | 700 | 52px |
| Heading XXLarge | 40px | 700 | 52px |
| Heading XLarge | 36px | 700 | 44px |
| Heading Large | 32px | 700 | 40px |
| Heading Medium | 28px | 700 | 36px |
| Heading Small | 24px | 700 | 32px |
| Heading XSmall | 20px | 700 | 28px |
| Label Large | 18px | 500 | 24px |
| Label Medium | 16px | 500 | 20px |
| Label Small | 14px | 500 | 16px |
| Label XSmall | 12px | 500 | 16px |
| Paragraph Large | 18px | 400 | 28px |
| Paragraph Medium | 16px | 400 | 24px |
| Paragraph Small | 14px | 400 | 20px |

### Rules

- Sentence case for headings and buttons ("Request a ride", "See prices").
- Headlines are bold and short; avoid more than two lines.
- Labels (500) for buttons, tabs, list titles; paragraphs (400) for descriptions.
- Prices and ETAs are set in the label style, often bold, with tabular figures.

## 4. Logo & Brand Mark

The logo is the **Uber** wordmark: custom letterforms related to Uber Move, with a lowercase-style "ber" and a tall "U". It is always black on white or white on black.

- **App icon:** white "Uber" wordmark on a black square (the rider app). The driver app uses a different icon.
- **Clear space:** at least the height of the "b" bowl around the wordmark.
- **Minimum size:** about 48px wide on screen.
- **Color versions:** black on white, white on black. Never colored, except sub-brand lockups like "Uber Eats" where "Eats" is green.

Misuse:

- Do not recreate the wordmark in Uber Move or any font.
- Do not use old marks (the "U" bit icon or the 2016 atom and pixel patterns).
- Do not add gradients, outlines or shadows.
- Do not place it on busy photos without a solid black or white field.

## 5. Components

### Buttons (Base)

Default radius 8px; pill shape used for some chips and the app's floating controls.

| Kind | Background | Text | Hover | Active |
|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` | `#333333` | `#545454` |
| Secondary | `#F3F3F3` | `#000000` | `#E8E8E8` | `#E2E2E2` |
| Tertiary | transparent | `#000000` | `#F3F3F3` | `#E8E8E8` |
| Disabled | `#F3F3F3` | `#AFAFAF` | none | none |

Sizes: compact 36px (14px label), default 48px (16px label, padding 14px 16px), large 56px (18px label). Full-width primary buttons are standard at the bottom of app sheets ("Choose UberX", "Confirm pickup").

```css
.btn-primary {
  font: 500 16px/20px var(--brand-font);
  background: #000; color: #fff;
  border: 0; border-radius: 8px;
  padding: 14px 16px; min-height: 48px;
  transition: background-color 200ms cubic-bezier(.2,.8,.4,1);
}
.btn-primary:hover { background: #333; }
.btn-primary:focus-visible { box-shadow: 0 0 0 3px #276EF1; outline: none; }
```

### Inputs

- Filled grey `#F3F3F3`, no border at rest, 8px radius, 48-56px tall, 16px text, placeholder `#757575`.
- Focus: 2px black border (or `#276EF1` in some web forms) and white background.
- Error: 2px `#E11900` border with a red caption below.
- **Location pair (signature):** two stacked fields "Pickup location" and "Dropoff location", joined on the left by a small filled circle, a vertical line and a filled square.

### Navigation

- **uber.com:** black bar about 64px tall. White wordmark left, then "Ride", "Drive", "Business", "Uber Eats", "About". Right: language, "Help", "Log in" and a white pill "Sign up" with black text. Dropdowns are white panels with 16px radius and shadow 600.
- **App:** a floating round back or menu button over the map, a bottom sheet for everything else, and on the home screen a tab bar ("Home", "Services", "Activity", "Account").

### Cards and tiles

- Service tiles on home ("Ride", "Reserve", "Courier", "Rental cars"): `#F3F3F3` square tiles, 12-16px radius, product illustration on top, 14px/500 label below. A small promo tag can sit in the corner.
- Marketing cards: white or grey with 16px radius, large photo, bold heading, text link "Learn more".

### Ride option list (signature)

- Rows about 72-88px: vehicle illustration on the left (3/4 view car on a transparent background), name and seat count ("UberX", person icon "4"), ETA and drop-off time below in secondary text, price on the right in bold.
- Selected row: 2px black border with 8-12px radius around the row.
- A full-width black "Choose UberX" button sits pinned at the bottom of the sheet.

### Bottom sheet

White, 16px top corners, grab handle 36x4px `#E2E2E2`, shadow 700, snaps to peek, half and full heights.

### Tabs, chips, badges

- Tabs: 16px/500 labels, 2px black underline on the active tab, inactive `#5E5E5E`.
- Chips: pill, `#F3F3F3`, 32-36px, 14px/500, selected chip black with white text.
- Badges and tags: 4px radius, 12px/500, colored light fills from the semantic table ("Promo", "Faster", "Save").

### Modals and toasts

- Modals: white, 16px radius, 24px padding, heading 24px/700, buttons stacked full width on mobile.
- Toasts/snackbars: black with white text, 8px radius, bottom center.

## 6. Layout & Spacing

- **Spacing scale (Base):** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 32, 40, 48, 56, 64, 96, 128px.
- **Breakpoints (Base):** small 320px, medium 600px, large 1136px.
- **Web container:** about 1136-1280px max, 24px gutters on mobile, 64px on desktop.
- **Grid:** 12 columns desktop, 4 columns mobile. Hero splits text and form on the left with a large image or map on the right.
- **App:** 16px side padding in sheets, 8px between stacked fields, 24px between sections.
- **Section spacing:** 64-96px between marketing sections.

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation is used for things that float over the map or page.
- Shadows (Base): 400 `0 1px 4px rgba(0,0,0,0.16)`, 500 `0 2px 8px rgba(0,0,0,0.16)`, 600 `0 4px 16px rgba(0,0,0,0.16)`, 700 `0 8px 24px rgba(0,0,0,0.16)`.
- Overlay scrim: `rgba(0,0,0,0.5)`.
- **Timing (Base):** 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000ms steps. Use 200ms for buttons, 300-400ms for sheets.
- **Easing:** ease-out `cubic-bezier(.2,.8,.4,1)`, ease-in `cubic-bezier(.8,.2,.6,1)`, ease-in-out `cubic-bezier(.4,0,.2,1)`.
- Map motion: the car icon glides along the route; the route draws in black with a blue or black line.

## 8. Iconography & Imagery

- **Icons:** Base icon set, 24px grid, filled and solid geometric shapes with 2px strokes where outlined, black by default.
- **Vehicle illustrations:** 3D-rendered 3/4 view cars in neutral colors on transparent backgrounds, consistent light from the top left.
- **Photography:** real people in real cities, natural light, often riders and drivers in motion; warm but not stylized.
- **Maps:** light grey basemap with white roads, black route line and pickup/dropoff markers (circle and square).

## 9. Voice & Microcopy

Plain, practical and short. Focus on what happens next.

- Hero: "Go anywhere with Uber", "Request a ride now or schedule one for later." (approximate)
- Form: "Pickup location", "Dropoff location", "See prices", "Schedule for later"
- App: "Where to?", "Choose a ride", "Confirm pickup", "Your driver is on the way", "Arriving now"
- Driver side: "Drive when you want, make what you need."
- Errors: "Something went wrong. Try again."

Sentence case, no exclamation marks, numbers as numerals, times as "3 min" and "12:45".

## 10. Do's and Don'ts

**Do**

- Keep the palette black, white and grey; use color only for status.
- Use bold 700 headings and 500 labels in Uber Move (or Inter).
- Make inputs filled grey wells with no border at rest.
- Pin a full-width black primary button at the bottom of mobile sheets.
- Use real photography and 3D car renders.

**Don't**

- Don't add brand gradients or colored backgrounds.
- Don't use thin or light weights for headlines.
- Don't outline every input with a border.
- Don't bring back the old "U" or bit icon.
- Don't crowd the map; the sheet carries the detail.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Uber. Black and white with grey: page `#FFFFFF`, text `#000000`, secondary text `#5E5E5E`, placeholders `#757575`, input wells and secondary buttons `#F3F3F3`, borders `#E8E8E8`. Font: `"UberMove", Inter, system-ui, sans-serif`; headings bold 700 (52px hero, 36/28/24/20px headings), labels 500, paragraphs 400 at 16px/24px. Top nav is a 64px black bar with a white "Uber" wordmark, links, "Log in" and a white pill "Sign up". Primary buttons are black with white text, 8px radius, 48px tall, hover `#333333`. Inputs are filled grey with no border and 8px radius; focus adds a 2px black border. Pair pickup and dropoff fields with a dot-line-square connector. For the app, put a full-screen map behind a white bottom sheet with 16px top corners, a ride list of 3D car renders with name, ETA and bold price, the selected row outlined 2px black, and a pinned full-width "Choose UberX" button. Shadows `0 4px 16px rgba(0,0,0,0.16)`. Status only: blue `#276EF1`, green `#05944F`, red `#E11900`, yellow `#FFC043`. Motion 200-400ms `cubic-bezier(.2,.8,.4,1)`.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-gray-50: #F3F3F3;
  --brand-gray-100: #E8E8E8;
  --brand-gray-200: #E2E2E2;
  --brand-gray-300: #CBCBCB;
  --brand-gray-400: #AFAFAF;
  --brand-gray-500: #757575;
  --brand-gray-600: #5E5E5E;
  --brand-gray-700: #333333;
  --brand-gray-900: #1F1F1F;
  --brand-gray-1000: #141414;
  --brand-accent: #276EF1;
  --brand-accent-light: #EFF3FE;
  --brand-positive: #05944F;
  --brand-positive-light: #E6F2ED;
  --brand-warning: #FFC043;
  --brand-warning-light: #FFFAF0;
  --brand-negative: #E11900;
  --brand-negative-light: #FFEFED;
  --brand-eats-green: #06C167;
  --brand-font: "UberMove", "UberMoveText", "Inter", system-ui, "Helvetica Neue", Arial, sans-serif;
  --brand-weight-heading: 700;
  --brand-weight-label: 500;
  --brand-weight-body: 400;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-radius-pill: 9999px;
  --brand-shadow-400: 0 1px 4px rgba(0,0,0,0.16);
  --brand-shadow-500: 0 2px 8px rgba(0,0,0,0.16);
  --brand-shadow-600: 0 4px 16px rgba(0,0,0,0.16);
  --brand-shadow-700: 0 8px 24px rgba(0,0,0,0.16);
  --brand-ease-out: cubic-bezier(.2,.8,.4,1);
  --brand-ease-in: cubic-bezier(.8,.2,.6,1);
  --brand-ease-in-out: cubic-bezier(.4,0,.2,1);
  --brand-duration: 200ms;
  --brand-duration-sheet: 400ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Uber.

---
name: Life360
slug: life360
url: https://life360.com
category: Social
tagline: "Purple, map-first family safety: avatar pins, bottom sheets and calm reassurance."
updated: 2026-11-16
appStoreId: 384830320
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Life360 Purple
    hex: "#8652FF"
    role: Brand color, app icon, primary buttons, avatar rings
  - name: White
    hex: "#FFFFFF"
    role: Page, sheets and cards
  - name: Deep Purple
    hex: "#5B2DD1"
    role: Pressed states, dark brand panels (approx.)
  - name: Lavender
    hex: "#EFE8FF"
    role: Tinted backgrounds, selected rows (approx.)
  - name: Ink
    hex: "#1F1A2E"
    role: Primary text (approx.)
  - name: Slate
    hex: "#6B6880"
    role: Secondary text (approx.)
  - name: Mist
    hex: "#F5F4F8"
    role: App background behind cards (approx.)
  - name: Border
    hex: "#E3E1EA"
    role: Dividers and card borders (approx.)
  - name: Logo Lilac
    hex: "#7875EA"
    role: Older (2020) logo purple
  - name: SOS Red
    hex: "#FF3B46"
    role: SOS button, crash alerts (approx.)
  - name: Safe Green
    hex: "#1FBF75"
    role: Arrived, place check-ins, success (approx.)
  - name: Warning Amber
    hex: "#FFB020"
    role: Low battery, speeding warnings (approx.)
  - name: Map Water
    hex: "#AADAFF"
    role: Map base water tone (approx.)
fonts:
  display:
    family: "SF Pro Display"
    fallback: "DM Sans"
    weights: [600, 700]
  body:
    family: "SF Pro Text"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 56, weight: 700, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Section, size: 36, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Sheet Title, size: 22, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Member Name, size: 17, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Meta, size: 13, weight: 500, lineHeight: 1.35, tracking: "0" }
radii: { sm: 8, md: 12, lg: 20, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 2px 8px rgba(31,26,46,0.08)" }
  - { name: Sheet, value: "0 -4px 24px rgba(31,26,46,0.12)" }
  - { name: Map Pin, value: "0 4px 10px rgba(31,26,46,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F4F8"
  text: "#1F1A2E"
  muted: "#6B6880"
  border: "#E3E1EA"
  accent: "#8652FF"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# Life360

## 1. Visual Theme & Atmosphere

Life360 is a family map. The app opens to a full-screen map with every member of your "Circle" shown as a round photo pin, and a draggable white bottom sheet listing who is where. The brand around it is a single saturated purple (`#8652FF`, sampled from the current app icon) plus a white loop symbol that reads as both a location pin and a continuous line connecting people.

What makes it recognisable:

- **Purple and the loop.** A purple square with a white single-line loop is the app icon. The same purple drives buttons, avatar rings and the selected member.
- **Map as the canvas.** Light, low-contrast map tiles; the UI floats on top in white cards and a bottom sheet with a grabber.
- **Faces, not dots.** Members are circular photos in a teardrop pin with a purple or white ring, battery and status chips beside them.
- **Calm safety.** Alerts are clear and colored (red for SOS and crashes, amber for low battery), but the default state is quiet and friendly.
- **Rounded, soft geometry.** Pill buttons, 12-20px card corners, generous touch targets.

Mood words: reassuring, warm, family, practical, always-on.

Note: life360.com returned a bot check when fetched for this file, so the site CSS could not be read. The purple comes from the App Store icon; other values are observed from the app and marked approximate.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Life360 Purple | `#8652FF` | Brand, primary buttons, rings, active tab |
| Purple Hover | `#7440F0` | Hover and pressed on purple (approx.) |
| Deep Purple | `#5B2DD1` | Dark brand panels, marketing sections (approx.) |
| Lavender | `#EFE8FF` | Selected rows, chips, tinted cards (approx.) |
| Logo Lilac | `#7875EA` | Older 2020 logo files on Wikimedia |
| Ink | `#1F1A2E` | Primary text (approx.) |
| Slate | `#6B6880` | Secondary text and icons (approx.) |
| Mist | `#F5F4F8` | Background behind cards (approx.) |
| Border | `#E3E1EA` | Dividers (approx.) |
| White | `#FFFFFF` | Sheets, cards, page |

### Semantic (approx.)

| State | Hex | Use |
|---|---|---|
| SOS / danger | `#FF3B46` | SOS button, crash detection, emergency banners |
| Arrived / safe | `#1FBF75` | Place arrivals, "safe" status |
| Warning | `#FFB020` | Low battery, phone off, speeding |
| Info | `#8652FF` | Tips, membership upsell |

### Membership tiers

Paid tiers are shown as named badges (Silver, Gold, Platinum) with metallic tints (approx.): silver `#B8BCC6`, gold `#E2B44C`, platinum `#6E6A85`. Do not quote prices; they change by market.

### Dark mode

The app supports a dark map style with `#14121C` sheets, `#211E2B` cards, white text and the same purple (approx.).

## 3. Typography

**Families:** the wordmark uses a rounded geometric sans drawn for the brand. App UI uses the platform system fonts (SF Pro on iOS, Roboto on Android). Marketing pages use a geometric sans (unconfirmed, approx.). Free stand-ins: **DM Sans** or **Plus Jakarta Sans** for headings, **Inter** for body.

```css
font-family: "DM Sans", "Inter", -apple-system, "SF Pro Text", Roboto, sans-serif;
```

### Scale (approx.)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero (site) | 56px | 700 | 1.1 |
| Section (site) | 36px | 700 | 1.15 |
| Sheet title | 22px | 700 | 1.25 |
| Member name | 17px | 600 | 1.3 |
| Body | 16px | 400 | 1.5 |
| Button | 16px | 600 | 1.25 |
| Meta (time, battery) | 13px | 500 | 1.35 |
| Chip | 12px | 600 | 1.2 |

**Rules:** sentence case. Times and distances are short ("Since 4:12 pm", "2.1 mi away"). Bold the member name, keep the place name regular.

## 4. Logo & Brand Mark

- **Symbol:** a single continuous white line that loops into a pin-like spiral, drawn with an even stroke and rounded ends.
- **Wordmark:** "Life360" in a rounded geometric sans, set to the right of the symbol, all in purple.
- **App icon:** white loop centered on a purple `#8652FF` square.
- **Colors:** purple on white, white on purple. The Wikimedia SVG is in an older lilac `#7875EA`; this file's logo is recolored to the current purple.
- **Clear space:** about half the loop's width (approx.).
- **Minimum size:** symbol 20px, lockup 80px wide (approx.).
- **Misuse:** do not fill the loop, add gradients, change the stroke weight or place the purple logo on busy map imagery without a white plate.

## 5. Components

### Buttons

```css
.l360-btn {
  height: 52px; padding: 0 24px; border-radius: 9999px;
  background: #8652FF; color: #FFFFFF; border: none;
  font: 600 16px/20px "DM Sans", Inter, sans-serif;
  transition: background-color .15s ease, transform .1s ease;
}
.l360-btn:hover   { background: #7440F0; }
.l360-btn:active  { transform: scale(0.98); }
.l360-btn--secondary { background: #EFE8FF; color: #8652FF; }
.l360-btn--ghost  { background: transparent; color: #8652FF; }
.l360-btn--danger { background: #FF3B46; color: #FFFFFF; }
.l360-btn:disabled { background: #E3E1EA; color: #6B6880; }
```

Values approximate. Full-width primary buttons sit at the bottom of onboarding and sheet flows.

### Map pins

Circular member photo 44-48px inside a white teardrop pin (2-3px border), shadow `0 4px 10px rgba(31,26,46,0.25)`. Selected member: purple ring and slightly larger pin. Place geofences: translucent purple circle `rgba(134,82,255,0.15)` with a 2px purple outline.

### Bottom sheet

White, top radius 20-24px, 36x4px grabber `#E3E1EA`, shadow `0 -4px 24px rgba(31,26,46,0.12)`. Three detents: peek (member list header), half, full. Content: member rows, then Places, then upsell cards.

### Member row

72px tall: 48px circular avatar, name (17px semibold), location line ("At Home · Since 4:12 pm", 13px slate), battery chip on the right (green, amber or red icon with %).

### Circle switcher

Top-left pill showing the current Circle name with a chevron; opens a list of Circles. Top-right round buttons (40px, white, shadow) for messages and settings.

### SOS button

Round red `#FF3B46` button with white "SOS", press-and-hold to trigger with a countdown ring. Never used for anything else.

### Cards

Upsell and feature cards: white or lavender, radius 16px, 16-20px padding, illustration on the right, purple text button.

### Tabs

Bottom tab bar (Location, Driving, Safety, Membership, approx.), 24px icons, active tab purple with label, inactive slate.

### Inputs

52px tall, radius 12px, 1px `#E3E1EA` border, focus border 2px purple, label above in 13px semibold (approx.).

## 6. Layout & Spacing

- **App:** full-screen map, floating controls with 16px insets, bottom sheet content padded 16-20px.
- **Site:** max content width about 1200px, centered, 24px mobile gutters; hero with app screenshots in phone frames (approx.).
- **Spacing:** 4px base; 8, 12, 16, 24, 32 are the common steps.
- **Touch targets:** at least 44px; primary buttons 52px.

## 7. Depth, Elevation & Motion

- **Layers:** map (base) < pins < floating buttons < bottom sheet < modals.
- **Shadows:** soft and purple-tinted dark (`rgba(31,26,46,…)`), never hard.
- **Motion:** pins glide between positions; the sheet snaps with a spring (about 300ms). Arrival notifications slide in from the top. Avatar rings pulse gently while a location refreshes.
- **Easing:** standard ease-out `cubic-bezier(0.2, 0, 0, 1)` (approx.).

## 8. Iconography & Imagery

- **Icons:** rounded line icons, 2px stroke, 24px, filled variants for active states. Slate by default, purple when active.
- **Photography:** real families, teens, parents in cars and at home, natural daylight, candid.
- **Illustration:** simple flat shapes in purple and lavender with friendly characters, used in onboarding and empty states.
- **Map style:** light, desaturated base with blue water and soft greens so purple pins stand out.

## 9. Voice & Microcopy

Warm, calm and clear. Reassures without fear-mongering.

- "Create your Circle", "Invite members", "Add a Place"
- "Mom arrived at Home"
- "Low battery: Jake's phone is at 10%"
- "Crash detected. Are you OK?"
- "Check in", "Share location", "Help Alert"

Sentence case. Use people's first names. Lead alerts with who and where.

## 10. Do's and Don'ts

**Do**

- Make the map the main surface and float white UI on it.
- Show people as circular photos with purple rings.
- Use one purple `#8652FF` for actions and selection.
- Reserve red for SOS and crash alerts.
- Use pill buttons and rounded sheets.

**Don't**

- Don't use red or amber decoratively.
- Don't fill the loop symbol or outline it.
- Don't use dark, high-contrast map styles in light mode.
- Don't write alarming copy for routine events.
- Don't quote membership prices without checking the live site.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Life360. Full-screen light map with members shown as 44-48px circular photos in white teardrop pins (soft shadow), the selected member ringed in purple `#8652FF`. A white bottom sheet with 20-24px top radius and a small grey grabber lists members: 48px avatar, name in 17px semibold, "At Home · Since 4:12 pm" in 13px slate `#6B6880`, battery chip on the right. Text ink `#1F1A2E`, background `#F5F4F8`, borders `#E3E1EA`, lavender `#EFE8FF` for selected rows. Font `"DM Sans", Inter, sans-serif`. Primary buttons are 52px purple pills with white text; secondary are lavender with purple text. Red `#FF3B46` only for SOS and crash alerts, green `#1FBF75` for arrivals, amber `#FFB020` for low battery. Floating 40px round white buttons at the top corners. Tone is calm, warm and uses first names.

```css
:root {
  --brand-purple: #8652FF;
  --brand-purple-hover: #7440F0;
  --brand-purple-deep: #5B2DD1;
  --brand-lavender: #EFE8FF;
  --brand-ink: #1F1A2E;
  --brand-slate: #6B6880;
  --brand-bg: #F5F4F8;
  --brand-surface: #FFFFFF;
  --brand-border: #E3E1EA;
  --brand-sos: #FF3B46;
  --brand-safe: #1FBF75;
  --brand-warning: #FFB020;
  --brand-geofence: rgba(134,82,255,0.15);
  --brand-font: "DM Sans", "Inter", -apple-system, Roboto, sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 20px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 2px 8px rgba(31,26,46,0.08);
  --brand-shadow-sheet: 0 -4px 24px rgba(31,26,46,0.12);
  --brand-shadow-pin: 0 4px 10px rgba(31,26,46,0.25);
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Life360.

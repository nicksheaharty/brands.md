---
name: Snapchat
slug: snapchat
url: https://snapchat.com
category: Social
tagline: "Electric yellow and a white ghost: camera-first, full-bleed, colour-coded chat."
updated: 2026-11-16
appStoreId: 447188370
logoBackground: "#FFFC00"
theme: light
colors:
  - name: Snap Yellow
    hex: "#FFFC00"
    role: Brand color, app icon, logo background, hero blocks
  - name: Ghost White
    hex: "#FFFFFF"
    role: Ghost fill, page background
  - name: Black
    hex: "#000000"
    role: Ghost outline, text on yellow
  - name: Chat Blue
    hex: "#0FADFF"
    role: Chat messages, primary buttons on web, links
  - name: Snap Red
    hex: "#F23C57"
    role: Snaps without sound, errors, negative actions
  - name: Snap Purple
    hex: "#A05DCD"
    role: Snaps with sound (video)
  - name: Bitmoji Green
    hex: "#39CA8E"
    role: Calling, Bitmoji, success
  - name: Text Primary
    hex: "#16191C"
    role: Main text on light
  - name: Text Secondary
    hex: "#656D78"
    role: Secondary text on light
  - name: Background Secondary
    hex: "#F7F8F9"
    role: Subtle panels and subscreens
  - name: Border
    hex: "#DEDEDE"
    role: Borders and dividers
  - name: Dark Background
    hex: "#121212"
    role: Dark mode page background
  - name: Dark Surface
    hex: "#1E1E1E"
    role: Dark mode cards and pills
  - name: Primary Hover
    hex: "#42BFFF"
    role: Hover on blue buttons
fonts:
  display:
    family: "Graphik"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Avenir Next"
    fallback: "Nunito Sans"
    weights: [400, 500, 600, 700]
typeScale:
  - { role: Hero, size: 64, weight: 700, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Section, size: 40, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Title, size: 24, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 16, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Button, size: 14, weight: 600, lineHeight: 1.14, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 1000 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 2px 12px rgba(0,0,0,0.15)" }
  - { name: Popover, value: "0 8px 12px -4px rgba(0,0,0,0.25)" }
  - { name: Sheet, value: "0 -10px 24px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F8F9"
  text: "#16191C"
  muted: "#656D78"
  border: "#DEDEDE"
  accent: "#FFFC00"
  accentText: "#000000"
  radius: 1000
  buttonStyle: pill
---

# Snapchat

## 1. Visual Theme & Atmosphere

Snapchat is a camera with friends attached. The app opens straight into the camera, so the "UI" is mostly a thin layer of white icons and pill buttons floating over full-screen video. Around it sits one of the most recognisable brand colors in tech: Snap Yellow `#FFFC00`, a near-neon yellow, with a white ghost outlined in black.

What makes it recognisable:

- **Yellow.** `#FFFC00` on the app icon, logo, login screens and big marketing blocks. It is never toned down to gold.
- **The ghost.** Ghostface Chillah, a white ghost silhouette with a thick black outline and no face. It works at every size.
- **Color-coded messaging.** Red means a photo Snap, purple a Snap with sound, blue a chat message, grey pending. Users read state from color alone.
- **Overlay UI.** Icons are white with soft drop shadows, controls are translucent pills, text sits on the camera feed.
- **Rounded and friendly.** Pill buttons, circular avatars (Bitmoji), rounded cards in Discover and Spotlight.

Mood words: playful, fast, young, personal, camera-first.

## 2. Color Palette & Roles

Values from snapchat.com CSS variables (`--sc-color-*`) and the brand guidelines.

| Name | Hex | Role |
|---|---|---|
| Snap Yellow | `#FFFC00` | Brand, app icon, hero blocks |
| Black | `#000000` | Ghost outline, text on yellow |
| White | `#FFFFFF` | Ghost fill, light background |
| Chat Blue | `#0FADFF` | Chat, primary web buttons (`--sc-color-button-primary`) |
| Blue Hover | `#42BFFF` | Primary hover |
| Snap Red | `#F23C57` | Snap without sound, error, negative text |
| Negative Button | `#E1143D` | Destructive buttons |
| Snap Purple | `#A05DCD` | Snap with sound |
| Bitmoji Green | `#39CA8E` | Calling icon, Bitmoji, success |
| My AI Purple | `#7F3BB0` | My AI mentions |
| Text Primary | `#16191C` | Main text |
| Text Secondary | `#656D78` | Secondary text |
| Text Tertiary | `#616161` | Tertiary labels |
| Icon Primary | `#2C3137` | Icons on light |
| Background Secondary | `#F7F8F9` | Panels, subscreens |
| Pill Background | `#EEEEEE` | Chips, segmented controls |
| Border | `#DEDEDE` | Borders |
| Divider | `#E1E1E1` | List dividers |
| Inactive | `#B9C0C7` | Disabled buttons |
| Pending | `#767676` | Pending chat state |

### Dark mode

Background `#121212`, surface `#1E1E1E`, hover `#2B2B2B`, text `#DEDEDE`, secondary text `#999999`, borders `rgba(255,255,255,0.1)`. Brand colors stay the same.

### Message color code

| Message type | Icon color | Shape |
|---|---|---|
| Snap (no sound) | `#F23C57` | Filled square = unopened, outline = opened |
| Snap (with sound) | `#A05DCD` | Same |
| Chat | `#0FADFF` | Filled speech bubble = unread |
| Pending | `#767676` | Grey arrow |

## 3. Typography

**Families:** Avenir Next is the primary web and app UI face (`--sc-font-family-primary`); Graphik is the secondary family used for marketing headings (`--sc-font-family-secondary`). Both are commercial. Free stand-ins: **Nunito Sans** for Avenir Next, **Inter** for Graphik.

```css
--sc-font-family-avenir: "Avenir Next", "Nunito Sans", verdana, sans-serif;
--sc-font-family-graphik: "Graphik", "Inter", verdana, sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Notes |
|---|---|---|---|---|
| Hero | 64px (approx.) | 700 | 1.05 | "Open your Snapchat." |
| Section | 40px (approx.) | 700 | 1.1 | Feature headings |
| Title | 24px | 600 | 1.25 | Card and modal titles |
| Body | 16px | 500 | 20px | `--sc-font-body-*` tokens |
| Body emphasis | 16px | 600 | 20px | Names, key words |
| Button | 14px | 600 | 16px | Pill labels |
| Caption | 12px | 500 | 16px | Timestamps, meta |

**Rules:** body text defaults to weight 500, not 400, which gives Snapchat its slightly chunky feel. Sentence case. Short headlines ending in a period are common on the site.

## 4. Logo & Brand Mark

- **Ghost:** white body, black outline (about 5% of the ghost width), no face, slightly asymmetric arms.
- **Background:** Snap Yellow square for the app icon and avatars. On photos, the ghost may sit alone with its outline.
- **Wordmark:** "Snapchat" in a geometric sans; rarely used on its own. "Snap Inc." has its own corporate wordmark.
- **Clear space:** at least 1/4 of the ghost width on all sides (approx.).
- **Minimum size:** 18px tall on screen (approx.).
- **Misuse:** do not add a face to the ghost, change the yellow, drop the black outline on light backgrounds, rotate it or put it in a circle with a different color.

## 5. Components

### Buttons

```css
.sc-btn {
  height: 40px; padding: 0 20px; border-radius: 1000px;
  font: 600 14px/16px "Avenir Next", "Nunito Sans", sans-serif;
  border: none; cursor: pointer; transition: background-color .15s;
}
.sc-btn--primary   { background: #0FADFF; color: #FFFFFF; }
.sc-btn--primary:hover { background: #42BFFF; }
.sc-btn--yellow    { background: #FFFC00; color: #000000; }   /* "Download", marketing CTAs */
.sc-btn--secondary { background: #EEEEEE; color: #2C3137; }
.sc-btn--secondary:hover { background: #D9DEE3; }
.sc-btn--black     { background: #000000; color: #FFFFFF; }
.sc-btn--negative  { background: #E1143D; color: #FFFFFF; }
.sc-btn:disabled   { background: #B9C0C7; color: #FFFFFF; }
```

### Camera controls (app)

- Capture button: 80px white ring (6px stroke) in the bottom center, fills when recording, shows a red progress arc.
- Side toolbar: vertical stack of 28px white icons with `drop-shadow(0 1px 2px rgba(0,0,0,0.3))` (flip, flash, timer, music).
- Lens carousel: 56px circles beside the capture button.

### Bottom navigation (app)

Five icons: Map, Chat, Camera, Stories, Spotlight. On camera they float over the feed in white; on other tabs the bar is white (or `#121212`) with the active icon tinted (green for Map, blue for Chat, purple for Stories, red for Spotlight) (approx.).

### Chat list

Rows 64px: 48px Bitmoji avatar, name 16px semibold `#16191C`, status line 12px with the color-coded icon ("Received · 3m", "Opened · 1h"), streak fire emoji and count on the right.

### Chat thread

Messages are not bubbles. Each sender gets a colored label above their messages ("ME" in red, friend in blue) and a thin left bar in the same color; text 16px. Input at the bottom: pill field `rgba(0,0,0,0.05)` with camera, mic and sticker icons.

### Cards (Discover / Spotlight / web)

Vertical 9:16 tiles, radius 8-12px, full-bleed image with a dark bottom gradient and white title. Publisher logo at the top left.

### Inputs (web)

Pill or 8px-radius fields, fill `rgba(0,0,0,0.05)`, no border, 44px tall, placeholder `#656D78`, focus ring 2px `#0FADFF`.

### Badges

Red count bubbles, white 12px bold text, pill. "Snap Star" and verified marks in yellow with a black ghost.

### Avatars

Circular Bitmoji; Story ring is a 2-3px purple or blue ring with a 2px white gap. Unseen story ring is colored, seen is grey.

## 6. Layout & Spacing

- **App:** full-screen camera, safe-area insets respected, 16px edge padding for floating controls.
- **Web:** content max width about 1200px (approx.), sections stacked vertically with large phone mockups. Content tabs gap 26px (`--sc-content-tabs-gap`).
- **Spacing:** 4px base, common values 8, 12, 16, 24, 32.
- **Radii tokens:** 1px, 4px, 8px, 16px, 24px, pill 1000px.
- **Density:** medium; lists are compact, marketing is spacious.

## 7. Depth, Elevation & Motion

- **Shadows:** cards `0 2px 12px rgba(0,0,0,0.15)`, popovers `0 8px 12px -4px rgba(0,0,0,0.25)`, bottom sheets `0 -10px 24px rgba(0,0,0,0.2)`.
- **Overlays:** `rgba(0,0,0,0.4)` scrim, hover `rgba(0,0,0,0.35)`.
- **Motion:** quick and bouncy. Swipes between tabs are 1:1 with the finger. Buttons scale to 0.95 on press. Snaps open with a zoom from the chat row. Lenses animate in real time.
- **Durations:** 150-250ms for UI, spinner rotation 2.5s.

## 8. Iconography & Imagery

- **Icons:** rounded, 2px strokes, filled when active, white with soft shadow on camera, `#2C3137` on light screens.
- **Imagery:** real phone-shot photos and vertical video, friends, faces with Lenses, Bitmoji avatars. No stock polish.
- **Bitmoji:** cartoon avatars appear on the Snap Map, chat and profiles.
- **Snap Map:** stylised bright map with Bitmoji standing on locations and heat clusters.

## 9. Voice & Microcopy

Short, casual, second person. Friendly but not jokey.

- Site (read on snapchat.com today): "Open your Snapchat.", "Have fun with your friends and family.", "Express yourself with millions of Lenses.", "Learn about the world on your most personal map."
- App: "Send To", "New Chat", "Add Friends", "Tap to view", "Delivered", "Opened", "Screenshot!"
- CTA: "Log in", "Sign up", "Download", "Chat Now"

Sentence case. Headlines often end with a period.

## 10. Do's and Don'ts

**Do**

- Use Snap Yellow `#FFFC00` at full strength for brand moments.
- Keep the ghost white with a black outline.
- Use pill buttons and circular avatars.
- Respect the message color code (red, purple, blue, grey).
- Let camera content fill the screen and float controls over it.

**Don't**

- Don't set body text in yellow or on yellow without black text.
- Don't use yellow for buttons inside the app chrome; actions are blue.
- Don't add a face or shading to the ghost.
- Don't use thin weights; body sits at 500.
- Don't put heavy chrome bars over the camera.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Snapchat. Brand color is Snap Yellow `#FFFC00` with a white ghost outlined in black; use yellow for hero blocks, the logo tile and marketing CTAs with black text. Product UI is white (`#FFFFFF`, panels `#F7F8F9`, borders `#DEDEDE`) or dark (`#121212`/`#1E1E1E`). Text `#16191C`, secondary `#656D78`. Font `"Avenir Next", "Nunito Sans", sans-serif` at weight 500 for body, 600-700 for headings (Graphik/Inter for big marketing heads). Buttons are pills (radius 1000px), 40px tall: blue `#0FADFF` primary (hover `#42BFFF`), grey `#EEEEEE` secondary, yellow for marketing. Chat rows: 48px circular Bitmoji avatar, name in semibold, status line with color-coded icons (red `#F23C57` photo Snap, purple `#A05DCD` video Snap, blue `#0FADFF` chat). Camera screens: full-bleed media with white floating icons and soft drop shadows. Copy is short and casual.

```css
:root {
  --brand-yellow: #FFFC00;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-blue: #0FADFF;
  --brand-blue-hover: #42BFFF;
  --brand-red: #F23C57;
  --brand-negative: #E1143D;
  --brand-purple: #A05DCD;
  --brand-green: #39CA8E;
  --brand-text: #16191C;
  --brand-text-secondary: #656D78;
  --brand-icon: #2C3137;
  --brand-bg: #FFFFFF;
  --brand-bg-secondary: #F7F8F9;
  --brand-pill: #EEEEEE;
  --brand-border: #DEDEDE;
  --brand-inactive: #B9C0C7;
  --brand-dark-bg: #121212;
  --brand-dark-surface: #1E1E1E;
  --brand-font: "Avenir Next", "Nunito Sans", verdana, sans-serif;
  --brand-font-display: "Graphik", "Inter", verdana, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-xl: 24px;
  --brand-radius-pill: 1000px;
  --brand-shadow-card: 0 2px 12px rgba(0,0,0,0.15);
  --brand-shadow-popover: 0 8px 12px -4px rgba(0,0,0,0.25);
  --brand-shadow-sheet: 0 -10px 24px rgba(0,0,0,0.2);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Snap Inc.

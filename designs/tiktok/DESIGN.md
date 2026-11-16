---
name: TikTok
slug: tiktok
url: https://tiktok.com
category: Social
tagline: "Full-screen vertical video on black, a hot-pink action colour and a cyan-red glitch mark."
updated: 2026-11-16
appStoreId: 835599320
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: TikTok Red
    hex: "#FE2C55"
    role: Primary action, Follow and Log in buttons, links, active states (light theme)
  - name: TikTok Cyan
    hex: "#25F4EE"
    role: Left offset layer of the logo glyph, brand moments only
  - name: Black
    hex: "#000000"
    role: Video canvas, app icon, dark base layer
  - name: White
    hex: "#FFFFFF"
    role: Light theme background, text on video, glyph core
  - name: Ink
    hex: "#161823"
    role: Primary text in light theme (TextPrimary)
  - name: Dark Surface
    hex: "#121212"
    role: Dark theme page background (BGPrimary)
  - name: Red Dark Mode
    hex: "#FF3B5C"
    role: Primary and link colour in dark theme
  - name: Raised Dark
    hex: "#252525"
    role: Dark theme secondary surface, cards, menus
  - name: Raised Dark 2
    hex: "#2E2E2E"
    role: Dark theme tertiary surface
  - name: Base Grey
    hex: "#F5F5F5"
    role: Light theme base layer behind panels
  - name: Placeholder
    hex: "#F1F1F1"
    role: Opaque placeholder and skeleton fill
  - name: Verified Cyan
    hex: "#20D5EC"
    role: Verified badge, secondary accent
  - name: Positive
    hex: "#0BE09B"
    role: Success states
  - name: Negative
    hex: "#FF4C3A"
    role: Error states and destructive text
  - name: Yellow
    hex: "#FACE15"
    role: Assist colour, highlights and promo tags
fonts:
  display:
    family: "TikTok Display"
    fallback: "TikTok Sans"
    weights: [700]
  body:
    family: "TikTok Text"
    fallback: "TikTok Sans"
    weights: [400, 500, 600, 700]
typeScale:
  - { role: H1, size: 72, weight: 700, lineHeight: 1.19, tracking: "0" }
  - { role: H3, size: 32, weight: 700, lineHeight: 1.19, tracking: "0" }
  - { role: H4, size: 24, weight: 700, lineHeight: 1.17, tracking: "0" }
  - { role: H5, size: 18, weight: 700, lineHeight: 1.22, tracking: "0" }
  - { role: P1, size: 18, weight: 600, lineHeight: 1.39, tracking: "0" }
  - { role: P2, size: 16, weight: 400, lineHeight: 1.38, tracking: "0" }
  - { role: P3, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: P4, size: 12, weight: 400, lineHeight: 1.42, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Menu, value: "0 2px 12px rgba(0,0,0,0.12)" }
  - { name: Overlay, value: "0 4px 24px rgba(0,0,0,0.2)" }
preview:
  bg: "#121212"
  surface: "#252525"
  text: "#FFFFFF"
  muted: "#A8A8A8"
  border: "#333333"
  accent: "#FE2C55"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# TikTok

## 1. Visual Theme & Atmosphere

TikTok is built around one thing: a single vertical video that fills the screen. Everything else is a thin layer of controls floating on top of the footage. The app opens straight into the For You feed on pure black, with white text and icons sitting directly on the video, and one hot pink-red (`#FE2C55`) used for the things that make you act: Follow, Log in, the plus on a profile avatar, the active like.

The desktop web app (tiktok.com) mirrors the phone. A left sidebar holds navigation, the centre column plays one 9:16 video at a time, and a vertical rail of round action buttons sits beside the player. Light and dark themes both exist on the web; the app and the feed are dark by default.

What makes it recognisable:

- **Video first, chrome last.** No cards around feed videos, no borders, no headers inside the player. Text lives at the bottom-left of the frame, actions on the right edge.
- **The glitch mark.** The musical-note "d" logo is drawn three times: cyan `#25F4EE` offset up-left, red `#FE2C55` offset down-right, and a white or black core on top. It reads like a vibrating speaker or a 3D anaglyph.
- **One action colour.** TikTok Red is the only saturated UI colour in daily use. Cyan stays in the logo and a few brand moments.
- **Bold, compact type.** Usernames and buttons are 600-700 weight. Captions are 15-16px regular. Nothing is light or thin.
- **Thumb-zone layout.** Primary actions sit where a right thumb lands: like, comment, save, share stacked on the right, the tab bar at the bottom.

Mood words: fast, loud, playful, immediate, creator-centred.

## 2. Color Palette & Roles

Values below come from the theme objects in tiktok.com's production JavaScript (light and dark maps), read on 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| TikTok Red (Primary) | `#FE2C55` | Primary buttons, Follow, links, active tab underline (light) |
| Red Dark Mode | `#FF3B5C` | Primary and link colour in dark theme |
| TikTok Cyan | `#25F4EE` | Logo cyan layer, brand illustration |
| Verified / Secondary | `#20D5EC` | Verified badge circle, ConstSecondary |
| Secondary Deep | `#10A2C5` | Pressed secondary, ConstSecondary2 |
| Ink (TextPrimary) | `#161823` | Primary text in light theme |
| Ink 75% | `rgba(22,24,35,0.75)` | Secondary text, light |
| Ink 50% | `rgba(22,24,35,0.5)` | Tertiary text, timestamps, light |
| Ink 34% | `rgba(22,24,35,0.34)` | Disabled and quaternary text, light |
| White | `#FFFFFF` | Light background, text on video |
| Base Grey | `#F5F5F5` | Light BGBase behind panels |
| Placeholder | `#F1F1F1` | Opaque placeholder, skeletons |
| Input Fill (light) | `rgba(22,24,35,0.06)` | Search and text input background |
| Line Secondary (light) | `rgba(22,24,35,0.12)` | Dividers and card outlines |
| Black | `#000000` | Video canvas, dark BGBase |
| Dark Surface | `#121212` | Dark BGPrimary |
| Raised Dark | `#252525` | Dark BGSecondary |
| Raised Dark 2 | `#2E2E2E` | Dark BGTertiary |
| Raised Dark 3 | `#383838` | Dark BGQuaternary |
| Text on dark | `rgba(255,255,255,0.9)` | Dark TextPrimary |
| Line on dark | `rgba(255,255,255,0.12)` | Dark dividers |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Positive | `#0BE09B` | Success toasts, "Posted" |
| Negative | `#FF4C3A` | Errors, failed upload |
| Danger text | `#DA3123` light, `#FF7660` dark | Destructive menu items |
| Assist yellow | `#FACE15` | Promotional highlights |
| LIVE gradient | `#FF1764` to `#ED3495` | LIVE ring around avatars and LIVE badge |
| Brand tint | `rgba(254,44,85,0.06)` | Selected row, light theme |

### Dark mode notes

Dark is the native feel. Page `#121212`, raised panels `#252525`, video area `#000000`. Text is white at 90% (`rgba(255,255,255,0.9)`), secondary at 75%, tertiary at 50%. The red shifts slightly lighter to `#FF3B5C` so it holds contrast on near-black.

## 3. Typography

**Family:** TikTok Sans, the brand's own typeface (released as open source in 2025 and on Google Fonts). The web app references it through two aliases: `TikTokDisplayFont` for headings and `TikTokFont` for UI and body. The production stack is:

```css
font-family: TikTokFont, Arial, Tahoma, PingFangSC, sans-serif;
```

Some locales prepend `"IBM Plex Sans"`. For your own builds use TikTok Sans from Google Fonts directly; it is free to use under the OFL.

**Weights:** 400 for captions and body, 500 for secondary labels, 600 ("semiBold") for usernames and buttons, 700 for headings and counts.

### Scale (web, from the production typography tokens)

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| H0 | 96px | 700 | 115px | Marketing hero only |
| H1 | 72px | 700 | 86px | Large marketing headings |
| H2 | 56px | 700 | 68px | Section headings |
| H3 | 32px | 700 | 38px | Profile name, page titles |
| H4 | 24px | 700 | 28px | Modal titles |
| H5 | 18px | 700 | 22px | Card titles |
| P0 | 24px | 400-600 | 32px | Large stat numbers |
| P1 | 18px | 600 | 25px | Username in feed |
| P2 | 16px | 400 | 22px | Captions, body |
| P3 | 14px | 400 | 20px | Sidebar labels, comments |
| P4 | 12px | 400 | 17px | Meta, timestamps, counts under icons |

### Rules

- Sentence case for buttons and headings ("Log in", "For You", "Following").
- Usernames are bold, display names regular and muted beside them.
- Counts use short forms: 12.4K, 1.2M. Set them 600-700 under the action icons.
- Hashtags inside captions are bold, same colour as the caption.
- Text on video gets a soft dark gradient or text shadow, never a solid box.

## 4. Logo & Brand Mark

The logo is a stylised musical note shaped like a lowercase "d", paired with the "TikTok" wordmark in a heavy rounded sans. The note is drawn as three stacked layers: cyan (`#25F4EE`) shifted up and left, red (`#FE2C55`) shifted down and right, and a core in black (on light backgrounds) or white (on dark). The offset gives the "glitch" or vibration effect.

- **App icon:** the three-layer note with a white core on a black square.
- **Colour versions:** full colour on white (black core, black wordmark), full colour on black (white core, white wordmark), and one-colour black or white for small or single-ink uses.
- **Clear space:** at least the width of the note's stem on all sides (approximate).
- **Minimum size:** about 20px tall for the note on screen (approximate).

Misuse:

- Don't swap the cyan and red layers or change the offset direction.
- Don't add a fourth colour, a gradient or a glow.
- Don't put the full-colour mark on busy video frames without a black chip behind it.
- Don't redraw the wordmark in TikTok Sans; the logotype is custom.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#FE2C55` | `#FFFFFF` 600 16px | none | 8px (approx.) | 40-48px |
| Secondary | `rgba(22,24,35,0.06)` light / `rgba(255,255,255,0.12)` dark | Ink / white 600 | none | 8px | 40px |
| Outline | transparent | `#FE2C55` 600 | 1px `#FE2C55` | 8px | 36-40px |
| Follow (feed) | `#FE2C55` | `#FFFFFF` 600 15px | none | 4-8px | 36px, min-width 96px |
| Following | `rgba(22,24,35,0.06)` | Ink 600 | 1px `rgba(22,24,35,0.12)` | 8px | 36px |
| Icon round | `rgba(22,24,35,0.06)` light, `rgba(255,255,255,0.12)` dark | icon 24px | none | 50% | 48px |

States: hover darkens the red by about 6% (approx. `#EA284E`, also seen in the bundle); disabled drops to 34% opacity text on a neutral fill; focus uses a 2px ring in the primary colour.

```css
.tt-btn-primary {
  font: 600 16px/22px "TikTok Sans", Arial, sans-serif;
  background: #FE2C55;
  color: #FFFFFF;
  border: 0;
  border-radius: 8px;
  height: 44px;
  padding: 0 20px;
  min-width: 96px;
}
.tt-btn-primary:hover { background: #EA284E; }
```

### Action rail (signature)

The vertical stack beside or on top of each video: avatar with a small red "+" badge, then like (heart), comment (speech bubble), save (bookmark), share (arrow). Each is a 48px circle on the web (`rgba(22,24,35,0.06)` in light, `rgba(255,255,255,0.12)` in dark), with a 12px bold count beneath. Spacing between items is about 8-12px. The like icon fills with `#FE2C55` and pops with a short scale animation when tapped.

### Feed video

- Aspect 9:16, height fills the viewport minus the header (about `calc(100vh - 120px)` on desktop), 8px rounded corners on web, square edges full-screen on mobile.
- Bottom-left overlay: username (600, 16-17px), caption (400, 15px, clamps to 2 lines with "more"), sound row with a spinning disc icon and scrolling sound name.
- Progress bar at the very bottom, 2-4px tall, white on 20% white.

### Navigation

- **Web sidebar:** about 240px wide. Logo top-left, search pill below it, then a list of 48px rows: For You, Explore, Following, Friends, LIVE, Messages, Activity, Upload, Profile, More. Icons 24-28px, labels 600 18px. Active row turns red (`#FE2C55`) for icon and label.
- **App tab bar:** Home, Friends, the "+" create button (white rounded rectangle with cyan and red edges peeking out, mirroring the logo), Inbox, Profile. Black background in the feed, white in light screens.
- **Top tabs in feed:** "Following" and "For You" centred in white 17px, active tab bold with a short white underline.

### Inputs

Search is a pill (radius 9999px), 40-46px tall, fill `rgba(22,24,35,0.06)` light or `rgba(255,255,255,0.12)` dark, no border, a magnifier button on the right separated by a thin divider. Text inputs elsewhere use 8px corners, the same translucent fill, and a 1px `rgba(22,24,35,0.5)` border on focus.

### Profile header

Large circular avatar (96-116px), username H3 bold, display name below, Follow / Message buttons in a row, then three stats in bold numbers with muted labels ("Following", "Followers", "Likes"). Below it a tab row (Videos, Reposts, Favorites, Liked) with a 2px Ink underline on the active tab, then a 3-4 column grid of 3:4 video tiles with view counts bottom-left.

### Badges and chips

- Verified: `#20D5EC` circle with a white check, 14-16px, right of the username.
- LIVE: pink-red gradient pill (`#FF1764` to `#ED3495`), white 600 caps "LIVE", radius 4px.
- Explore category chips: pill, 32-36px, neutral fill, active chip inverts to Ink/white.

### Comments panel

Slides in from the right on web (about 400-480px), white or `#121212`. Each comment: 40px avatar, bold username 14px, text 15px, meta row in 12px tertiary (time, Reply), heart with count on the far right. Input pinned at the bottom with an emoji and @ button.

### Modals

Centred, 8-12px radius, 400-480px wide for login. The login modal lists methods as full-width outline rows with icons (Use phone / email / username, Continue with Google, Apple, Facebook). Backdrop `rgba(0,0,0,0.5)`.

## 6. Layout & Spacing

- **Web shell:** fixed left sidebar (~240px, collapses to a 72px icon rail at narrower widths), main column centred, header about 60px.
- **Feed:** one video per viewport with scroll snapping (`scroll-snap-type: y mandatory`). Action rail sits 16-24px to the right of the player.
- **Grids:** profile and Explore grids use 3:4 tiles, 4-6 columns on desktop, 3 on mobile, 2-16px gaps.
- **Spacing:** 4px base. Common values 8, 12, 16, 20, 24, 32.
- **Breakpoints (approximate):** 768px (phone to tablet), 1024px (sidebar collapses), 1440px+ (wide feed).
- **Density:** sparse in the feed, dense in comments, grids and the inbox.

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation comes from surface colour steps (`#121212`, `#252525`, `#2E2E2E`, `#383838` in dark).
- Menus and popovers: `0 2px 12px rgba(0,0,0,0.12)` light (from ShadowPrimary), deeper `rgba(0,0,0,0.5)` on dark (approximate).
- Video overlays use top and bottom gradients from `rgba(0,0,0,0.4)` to transparent for legibility.
- Motion is quick and springy: feed swipe snaps in about 250-300ms; the heart pops to 1.2x and back in about 300ms; double-tap spawns a large red heart that floats up and fades.
- The sound disc rotates continuously (about 4-5s per turn).
- Easing for UI: `cubic-bezier(0.25, 0.1, 0.25, 1)` (approximate).

## 8. Iconography & Imagery

- Icons are filled, rounded and chunky, 24px on a 48 grid, with soft corners. Outline versions mark inactive tab bar items, filled versions active ones.
- Action icons (heart, bubble, bookmark, arrow) are white with a faint shadow when on video.
- Imagery is user video: vertical, handheld, bright, faces close to camera. Brand marketing uses the same vertical frames, often with cyan and red edge glows.
- Avatars are always circles. Video tiles are 3:4 rectangles with small corners.

## 9. Voice & Microcopy

Short, casual, second person, verbs first. Sentence case.

- Navigation: "For You", "Following", "Explore", "LIVE", "Inbox", "Profile"
- Actions: "Follow", "Message", "Share", "Add comment...", "Log in", "Sign up"
- Empty state: "No videos yet", "Start following creators to see their videos here"
- Login prompt: "Log in to follow creators, like videos, and view comments."
- Tagline on the site title: "TikTok - Make Your Day"

## 10. Do's and Don'ts

**Do**

- Make the video or image the full canvas, with UI floating on top.
- Use `#FE2C55` for the main action only, one per view.
- Use bold 600-700 type for names, buttons and counts.
- Stack actions vertically on the right with counts under them.
- Use round 48px icon buttons on neutral translucent fills.
- Use short counts (12.4K) and short labels.

**Don't**

- Don't wrap feed content in bordered cards.
- Don't use cyan as a UI colour for buttons or links; keep it for the logo and brand moments.
- Don't use light or thin weights.
- Don't put solid text boxes over video; use a gradient scrim.
- Don't mix in other saturated accents beside the red.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of TikTok's web app. Dark theme: page `#121212`, video area `#000000`, raised panels `#252525`, text white at 90%, secondary text white at 75%, dividers `rgba(255,255,255,0.12)`. Font: "TikTok Sans" (Google Fonts) with Arial fallback; usernames and buttons weight 600-700, captions 15-16px weight 400. Layout: 240px left sidebar with logo, a pill search field (`rgba(255,255,255,0.12)` fill, 9999px radius) and 48px nav rows (For You, Explore, Following, LIVE, Profile), active row in `#FF3B5C`. Centre column plays one 9:16 video at a time with 8px corners and scroll snapping; caption, username and sound name overlay the bottom-left with a dark gradient scrim. To the right, a vertical rail of 48px circular buttons (heart, comment, bookmark, share) with 12px bold counts like "12.4K". Primary button: `#FE2C55`, white 600 text, 8px radius, 44px tall. Verified badge `#20D5EC`. Keep it flat, no card borders, one red accent per view.

```css
:root {
  --brand-red: #FE2C55;
  --brand-red-dark-mode: #FF3B5C;
  --brand-red-hover: #EA284E;
  --brand-cyan: #25F4EE;
  --brand-verified: #20D5EC;
  --brand-ink: #161823;
  --brand-ink-75: rgba(22,24,35,0.75);
  --brand-ink-50: rgba(22,24,35,0.5);
  --brand-bg-light: #FFFFFF;
  --brand-base-light: #F5F5F5;
  --brand-fill-light: rgba(22,24,35,0.06);
  --brand-line-light: rgba(22,24,35,0.12);
  --brand-bg-dark: #121212;
  --brand-surface-dark: #252525;
  --brand-surface-dark-2: #2E2E2E;
  --brand-video: #000000;
  --brand-text-dark: rgba(255,255,255,0.9);
  --brand-text-dark-2: rgba(255,255,255,0.75);
  --brand-line-dark: rgba(255,255,255,0.12);
  --brand-positive: #0BE09B;
  --brand-negative: #FF4C3A;
  --brand-live-start: #FF1764;
  --brand-live-end: #ED3495;
  --brand-font: "TikTok Sans", TikTokFont, Arial, Tahoma, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-pill: 9999px;
  --brand-shadow-menu: 0 2px 12px rgba(0,0,0,0.12);
}
```

---

Values are observed from the public product and published brand material; this file is an unofficial reference and is not affiliated with or endorsed by TikTok.

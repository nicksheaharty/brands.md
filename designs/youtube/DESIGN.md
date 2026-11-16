---
name: YouTube
slug: youtube
url: https://youtube.com
category: Streaming
tagline: "Thumbnail grid on near-white or near-black, Roboto everywhere and one red play button."
updated: 2026-11-16
appStoreId: 544007664
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: YouTube Red
    hex: "#FF0033"
    role: Logo play button, progress bar, live badge (2024 brand red)
  - name: Almost Black
    hex: "#0F0F0F"
    role: Primary text (light), page background (dark), Subscribe button
  - name: White
    hex: "#FFFFFF"
    role: Page background (light), text on dark
  - name: Grey Text
    hex: "#606060"
    role: Secondary text, metadata, icons (light)
  - name: Chip Grey
    hex: "#F2F2F2"
    role: Chip and secondary button background (light)
  - name: Wordmark Grey
    hex: "#282828"
    role: Logo wordmark on light backgrounds
  - name: Call to Action Blue
    hex: "#065FD4"
    role: Links, Sign in outline text, focus (light)
  - name: Dark Raised
    hex: "#212121"
    role: Raised surfaces, menus (dark)
  - name: Dark Chip
    hex: "#272727"
    role: Chips and secondary buttons (dark)
  - name: Dark Text
    hex: "#F1F1F1"
    role: Primary text (dark)
  - name: Dark Grey Text
    hex: "#AAAAAA"
    role: Secondary text (dark)
  - name: Blue on Dark
    hex: "#3EA6FF"
    role: Links and call to action (dark)
  - name: Divider
    hex: "#E5E5E5"
    role: Hairline dividers (light)
  - name: Classic Red
    hex: "#FF0000"
    role: Pre-2024 logo red, still common in third-party assets
fonts:
  display:
    family: "YouTube Sans"
    fallback: "Roboto"
    weights: [600, 700]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [400, 500, 700]
typeScale:
  - { role: Channel Name, size: 36, weight: 700, lineHeight: 1.22, tracking: "0" }
  - { role: Watch Title, size: 20, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Section Title, size: 20, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Grid Title, size: 16, weight: 500, lineHeight: 1.38, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Button, size: 14, weight: 500, lineHeight: 2.57, tracking: "0" }
  - { role: Metadata, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 18 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48]
shadows:
  - { name: Menu, value: "0 4px 32px 0 rgba(0,0,0,0.1)" }
  - { name: Popup, value: "0 4px 16px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#0F0F0F"
  muted: "#606060"
  border: "#E5E5E5"
  accent: "#0F0F0F"
  accentText: "#FFFFFF"
  radius: 18
  buttonStyle: pill
---

# YouTube

## 1. Visual Theme & Atmosphere

YouTube is a wall of video thumbnails held together by very little chrome. The desktop home page is a white (or `#0F0F0F` in dark theme) canvas with a slim masthead, a left guide menu, a row of filter chips and a responsive grid of 16:9 thumbnails with round channel avatars and two lines of title. The watch page is a large player on the left, title and channel row under it, and a column of "Up next" videos on the right.

The interface is almost colourless. Text is near-black `#0F0F0F` on white, grey `#606060` for metadata, and the one strong colour is YouTube Red, used in the logo's play button, the progress bar and LIVE badges. Even the Subscribe button is black, not red. The thumbnails supply all the colour on the page.

What makes it recognisable:

- **Thumbnail grid.** 16:9 images with 12px rounded corners, duration badge bottom right, no card borders.
- **The red play button.** A rounded rectangle "play" mark, `#FF0033` since the 2024 refresh.
- **Pill controls.** Chips, Subscribe, Like/Dislike and Share are 36px pills on grey or black.
- **Roboto.** Plain, dense, readable; YouTube Sans appears in the logo, channel headers and marketing.
- **Near-black, not black.** `#0F0F0F` for text and the dark background keeps the page soft.

Mood words: familiar, neutral, dense, content-led, fast.

## 2. Color Palette & Roles

Values combine youtube.com's live markup (logo, masthead and skeleton CSS read on 2026-11-16) with the `--yt-spec-*` token values used across the site; values not seen in the fetched CSS are marked approximate.

| Name | Light | Dark | Role |
|---|---|---|---|
| Brand red | `#FF0033` | `#FF0033` | Logo, progress bar, LIVE, notification dot |
| Base background | `#FFFFFF` | `#0F0F0F` | Page |
| Raised background | `#FFFFFF` | `#212121` (approx.) | Menus, dialogs |
| Menu background | `#FFFFFF` | `#282828` | Popups, dropdowns |
| Text primary | `#0F0F0F` | `#F1F1F1` | Titles, body |
| Text secondary | `#606060` | `#AAAAAA` | Channel names, views, dates |
| Disabled | `#909090` | `#717171` (approx.) | Disabled text |
| Chip / button grey | `#F2F2F2` (rgba(0,0,0,0.05)) | `#272727` (rgba(255,255,255,0.1)) | Chips, secondary pill buttons |
| Chip hover | `#E5E5E5` | `#3F3F3F` | Hover on chips and buttons |
| Selected chip | `#0F0F0F` with white text | `#F1F1F1` with black text | Active filter |
| Divider | `rgba(0,0,0,0.1)` | `rgba(255,255,255,0.1)` | Hairlines |
| Call to action | `#065FD4` | `#3EA6FF` | Links, "Sign in" button text and outline |
| Wordmark | `#282828` | `#FFFFFF` | "YouTube" letters in the logo |
| Overlay | `rgba(0,0,0,0.8)` | `rgba(0,0,0,0.8)` | Duration badge, player controls bg |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Live | `#FF0033` badge with white "LIVE" | Live streams |
| Premiere / upcoming | `rgba(0,0,0,0.6)` badge | Scheduled |
| Error | `#CC0000` (approx.) | Form errors |
| Success | `#2BA640` (approx.) | Verified channel tick in some contexts, confirmations |
| Members / Premium | `#FF0033` and gold accents (approx.) | Badges |

### Dark mode

Dark theme is used by a large share of viewers and the player and Shorts are always dark. Page `#0F0F0F`, chips `#272727`, menus `#282828`, text `#F1F1F1`, metadata `#AAAAAA`, links `#3EA6FF`. The masthead in theatre or full-window mode turns `#0F0F0F` regardless of theme.

## 3. Typography

**Families:** Roboto for all UI text (the stack observed is `Roboto, Arial, sans-serif`, with Noto as a script fallback). YouTube Sans, a custom typeface, is used for the logo wordmark, big channel names, YouTube Music and marketing; it is not on Google Fonts, so use Roboto (or Roboto Condensed for tight headers) instead.

```css
font-family: "Roboto", "Arial", sans-serif;
font-family: "YouTube Sans", "Roboto", sans-serif;   /* brand headings */
```

**Weights:** 400 for body and metadata, 500 for buttons, chips and grid titles, 700 for the watch page title and channel names.

### Scale

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Channel name | 36px | 700 | 44px | Channel page header |
| Watch title | 20px | 700 | 28px | Video title under the player |
| Section title | 20px | 700 | 28px | "Shorts", "Recommended" shelf headings |
| Grid title | 16px | 500 | 22px | Home grid video titles (2 lines max) |
| Up next title | 14px | 500 | 20px | Watch-page sidebar titles |
| Body | 14px | 400 | 20px | Descriptions, comments |
| Button / chip | 14px | 500 | 36px box | Pills |
| Metadata | 14px / 12px | 400 | 20px / 18px | "1.2M views · 3 days ago" |
| Badge | 12px | 500 | 12px | Duration, LIVE |

### Rules

- Sentence case for buttons ("Subscribe", "Share", "Save"). Section headings are title case or sentence case depending on surface.
- Metadata joins with a middle dot: "12K views · 2 hours ago".
- View counts use short forms (1.2M, 853K).
- Titles clamp to 2 lines with ellipsis.

## 4. Logo & Brand Mark

The logo is a red rounded-rectangle play button (the "Ringo" icon) with a white triangle, followed by the "YouTube" wordmark in near-black. In 2024 YouTube moved the red from `#FF0000` to a slightly cooler, more saturated `#FF0033` and refined the wordmark; this file's logo is the current version from youtube.com's masthead.

- **Icon only:** the red play button on its own is the app icon (on white) and the favicon.
- **Colour versions:** full colour on white (red icon, `#282828` wordmark), full colour on dark (red icon, white wordmark), and all-white or all-black single-colour versions.
- **Clear space:** at least half the icon's height around the logo (approximate).
- **Minimum size:** icon about 20px tall on screen; full logo about 70px wide (approximate).

Misuse:

- Don't change the red, recolour the triangle, or use outlines.
- Don't place the full-colour logo on red or busy thumbnails.
- Don't stretch the play button or use it as a generic play icon for other services.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Subscribe | `#0F0F0F` | `#FFFFFF` 500 14px | none | 18px | 36px |
| Subscribed | `#F2F2F2` | `#0F0F0F` 500 + bell icon | none | 18px | 36px |
| Tonal / secondary | `#F2F2F2` | `#0F0F0F` 500 | none | 18px | 36px |
| Like / dislike segmented | `#F2F2F2` | `#0F0F0F` | 1px divider between halves | 18px | 36px |
| Sign in | transparent | `#065FD4` 500 | 1px `rgba(0,0,0,0.1)` | 18px | 36px |
| Call to action | `#065FD4` | `#FFFFFF` 500 | none | 18px | 36px |
| Icon button | transparent | `#0F0F0F` 24px icon | none | 50% | 40px |

States: hover on grey buttons goes to `#E5E5E5` (dark `#3F3F3F`); Subscribe hover goes to `#272727`; pressed adds a ripple. Focus: 2px outline in the text colour.

```css
.yt-btn {
  font: 500 14px/36px Roboto, Arial, sans-serif;
  height: 36px;
  padding: 0 16px;
  border-radius: 18px;
  border: 0;
  background: #F2F2F2;
  color: #0F0F0F;
}
.yt-btn:hover { background: #E5E5E5; }
.yt-btn--subscribe { background: #0F0F0F; color: #FFFFFF; }
```

### Masthead

56px tall, white (or `#0F0F0F`). Left: hamburger (40px round target) and logo (90x20px). Centre: search field, max width 640px, 40px tall, 1px `#CCCCCC` border (approx.), left radius 40px, joined to a grey `#F8F8F8` search button with right radius 40px; a round microphone button (40px, `#F2F2F2`) sits beside. Right: Create (camera plus), notifications bell with red count badge, avatar 32px.

### Guide (left menu)

240px wide expanded, 72px mini-guide collapsed. Rows 40px tall with 24px icons and 14px labels, radius 10px on hover (`#F2F2F2`), active row bold on `#F2F2F2`. Sections: Home, Shorts, Subscriptions; You (history, playlists); Explore; More from YouTube.

### Chip bar

A horizontal scrolling row under the masthead: "All", "Music", "Gaming", "Live", "Recently uploaded". Chips are 32px tall, radius 8px, padding 0 12px, 14px 500, `#F2F2F2`; the selected chip is `#0F0F0F` with white text.

### Video card (grid)

- Thumbnail 16:9, radius 12px, hover enlarges slightly and may autoplay a muted preview with a thin red progress line.
- Duration badge: bottom right, `rgba(0,0,0,0.8)`, white 12px 500, radius 4px, padding 1px 4px.
- Below: 36px avatar, then title (16px 500, 2 lines), channel name (14px `#606060`, verified tick), and "views · time" line.
- Grid gaps: 16px horizontal, 40px vertical.

### Watch page

Player 16:9, radius 12px (0 in theatre mode). Controls overlay on a bottom gradient; red scrubber `#FF0033` with a red round handle on hover. Under it: title 20px bold, a row with avatar, channel name, subscriber count, Subscribe pill, then right-aligned Like/Dislike, Share, Download, Save pills. Description box `#F2F2F2`, radius 12px, padding 12px. Right column about 402px of compact cards (168x94px thumbnails).

### Shorts

Vertical 9:16 cards in a shelf on the home page (radius 12px). The Shorts player is full-height on black with an action rail on the right (like, dislike, comments, share, remix) using 48px round `rgba(255,255,255,0.1)` buttons.

### Menus and dialogs

Menus: radius 12px, `#FFFFFF` (dark `#282828`), shadow `0 4px 32px rgba(0,0,0,0.1)`, rows 36px with 24px icons. Dialogs: radius 12px, padding 24px, title 16-20px 500.

## 6. Layout & Spacing

- **Grid:** home uses a responsive grid of 1-6 columns depending on width; common desktop breakpoints switch at about 1144px, 1600px and 2000px (approximate). Each item min width about 320px.
- **Content padding:** 24px on the sides of the home grid; chip bar sticky under the masthead.
- **Watch page:** primary column flexible up to about 1280px; secondary column 402px; 24px gap.
- **Spacing:** 4px base, with 8, 12, 16, 24, 40 most common.
- **Density:** medium-high; lots of items, little decoration.

## 7. Depth, Elevation & Motion

- Flat. Most separation is by grey fills or white space.
- Menus `0 4px 32px rgba(0,0,0,0.1)`; popups `0 4px 16px rgba(0,0,0,0.2)` (observed in page CSS).
- Skeleton loading: grey `rgba(0,0,0,0.1)` blocks with 8px radius (observed) and a soft shimmer.
- Motion is fast: hovers 100-200ms, guide slide 200ms. The like button plays a small burst animation.
- Easing: `cubic-bezier(0.05, 0, 0, 1)` for many transitions (approximate).

## 8. Iconography & Imagery

- Icons are 24px, outlined with rounded ends when inactive and filled when active (Home, Subscriptions in the guide). Stroke about 1.5-2px.
- Thumbnails are the imagery: bright, faces and big text, chosen by creators. Never crop them to anything but 16:9 (or 9:16 for Shorts).
- Avatars are circles; channel banners are wide 6.2:1 images with 12-16px radius on the channel page.

## 9. Voice & Microcopy

Plain, friendly, brief. Sentence case.

- Buttons: "Subscribe", "Subscribed", "Join", "Share", "Save", "Download", "Clip"
- Metadata: "1.2M views · 3 days ago", "Streamed 2 weeks ago", "Premieres in 4 hours"
- Nav: "Home", "Shorts", "Subscriptions", "You", "History"
- Search placeholder: "Search"
- Empty state: "Try searching to get started", "Start watching videos to help us build a feed of videos you'll love."

## 10. Do's and Don'ts

**Do**

- Let thumbnails carry the colour; keep chrome grey and near-black.
- Use 36px pill buttons with 18px radius and 500 weight.
- Round thumbnails 12px and avatars fully.
- Use `#606060` metadata joined with " · ".
- Reserve red for the logo, progress bars and LIVE.

**Don't**

- Don't make Subscribe red; the current UI uses near-black.
- Don't use pure `#000000` for text or the dark background.
- Don't add borders or shadows around grid cards.
- Don't use `#FF0000` for new work; the current brand red is `#FF0033`.
- Don't set titles in more than two lines on grid cards.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of YouTube desktop. White page, text `#0F0F0F`, metadata `#606060`, chip and secondary button grey `#F2F2F2` (hover `#E5E5E5`), links `#065FD4`. Dark theme: page `#0F0F0F`, chips `#272727`, text `#F1F1F1`, metadata `#AAAAAA`. Font: Roboto, 400 body, 500 for buttons and grid titles, 700 for the watch title. Layout: 56px masthead (hamburger, red play-button logo `#FF0033` with `#282828` wordmark, centred 40px pill search field with grey search button, mic button, avatar right); 240px left guide with 40px rows; a sticky chip bar ("All", "Music", "Gaming") with 32px chips, radius 8px, selected chip black with white text; a responsive grid of 16:9 thumbnails with 12px radius, black-80% duration badge bottom right, 36px round avatar, 2-line 16px 500 title, and "1.2M views · 3 days ago" metadata. Buttons are 36px pills with 18px radius; Subscribe is `#0F0F0F` with white text. Flat surfaces, menus with `0 4px 32px rgba(0,0,0,0.1)`. Use red only for the logo, progress bar and LIVE badge.

```css
:root {
  --brand-red: #FF0033;
  --brand-red-classic: #FF0000;
  --brand-bg: #FFFFFF;
  --brand-text: #0F0F0F;
  --brand-text-2: #606060;
  --brand-wordmark: #282828;
  --brand-chip: #F2F2F2;
  --brand-chip-hover: #E5E5E5;
  --brand-divider: rgba(0,0,0,0.1);
  --brand-cta: #065FD4;
  --brand-overlay: rgba(0,0,0,0.8);
  --brand-dark-bg: #0F0F0F;
  --brand-dark-raised: #212121;
  --brand-dark-menu: #282828;
  --brand-dark-chip: #272727;
  --brand-dark-chip-hover: #3F3F3F;
  --brand-dark-text: #F1F1F1;
  --brand-dark-text-2: #AAAAAA;
  --brand-dark-cta: #3EA6FF;
  --brand-font: "Roboto", "Arial", sans-serif;
  --brand-font-brand: "YouTube Sans", "Roboto", sans-serif;
  --brand-radius-badge: 4px;
  --brand-radius-chip: 8px;
  --brand-radius-thumb: 12px;
  --brand-radius-pill: 18px;
  --brand-shadow-menu: 0 4px 32px 0 rgba(0,0,0,0.1);
  --brand-shadow-popup: 0 4px 16px rgba(0,0,0,0.2);
}
```

---

Values are observed from the public product and published brand material; this file is an unofficial reference and is not affiliated with or endorsed by YouTube or Google.

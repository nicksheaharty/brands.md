---
name: Instagram
slug: instagram
url: https://www.instagram.com
category: Social
tagline: "Photo-first, chrome-light grid with a warm gradient glyph and one action blue."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Action Blue
    hex: "#0095F6"
    role: Primary buttons (Follow, Log in), selected states, links in actions
  - name: Background
    hex: "#FFFFFF"
    role: App and page background
  - name: Primary Text
    hex: "#000000"
    role: Usernames, captions, headings
  - name: Secondary Text
    hex: "#737373"
    role: Timestamps, meta, placeholder text
  - name: Stroke
    hex: "#DBDBDB"
    role: Borders, dividers, input outlines
  - name: Secondary Button
    hex: "#EFEFEF"
    role: Secondary buttons (Following, Message, Edit profile)
  - name: Highlight Background
    hex: "#FAFAFA"
    role: Input fill, hover rows, legacy page wash
  - name: Link Navy
    hex: "#00376B"
    role: Inline links, hashtags and mentions in captions
  - name: Like Red
    hex: "#FF3040"
    role: Liked heart, notification badge
  - name: Gradient Yellow
    hex: "#FEDA75"
    role: Glyph and story-ring gradient start
  - name: Gradient Orange
    hex: "#FA7E1E"
    role: Glyph and story-ring gradient
  - name: Gradient Magenta
    hex: "#D62976"
    role: Glyph and story-ring gradient mid
  - name: Gradient Purple
    hex: "#962FBF"
    role: Glyph and story-ring gradient
  - name: Gradient Blue
    hex: "#4F5BD5"
    role: Glyph gradient end
  - name: Close Friends Green
    hex: "#1CD14F"
    role: Close Friends story ring and list badge
  - name: Dark Background
    hex: "#000000"
    role: Dark mode background
fonts:
  display:
    family: "Instagram Sans Headline"
    fallback: "Plus Jakarta Sans"
    weights: [500, 700]
  body:
    family: "Instagram Sans / system stack"
    fallback: "Inter"
    weights: [400, 600]
typeScale:
  - { role: Display, size: 28, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Profile Name, size: 20, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Title, size: 16, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Username, size: 14, weight: 600, lineHeight: 1.29, tracking: "0" }
  - { role: Meta, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Micro, size: 11, weight: 400, lineHeight: 1.27, tracking: "0.01em" }
radii: { sm: 4, md: 8, lg: 12, xl: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 44]
shadows:
  - { name: Popover, value: "0 4px 12px rgba(0,0,0,0.15)" }
  - { name: Dialog, value: "0 12px 28px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#FAFAFA"
  text: "#000000"
  muted: "#737373"
  border: "#DBDBDB"
  accent: "#0095F6"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Instagram

## 1. Visual Theme & Atmosphere

Instagram's interface is close to colourless on purpose. White (or black in dark mode) backgrounds, thin `#DBDBDB` hairlines, black text, outline icons and one blue for actions. The photos and videos supply all the colour. The only built-in flourish is the warm gradient: yellow to orange to magenta to purple, used on the app glyph and the story ring around avatars.

What makes it recognisable:

- **Content edge to edge.** Feed posts span the full column width with no card padding or rounded corners on the media itself on mobile.
- **Outline icons that fill when active.** Home, search, reels, heart and profile glyphs are 24px, 2px strokes; tapping fills them black.
- **The story ring.** A 2-3px gradient ring around a circular avatar, with a white gap between ring and photo. Seen stories drop to a grey `#DBDBDB` ring.
- **Square grid.** Profiles show a 3-column grid with 1-4px gaps and no captions. Since 2025 the grid tiles are 4:5 portrait rather than square.
- **Quiet chrome.** No shadows on feed items, no coloured headers, no filled nav bar.

Density is moderate: generous media, tight text. Usernames are bold, everything else is regular weight at 14px.

## 2. Color Palette & Roles

### Interface palette (light mode)

| Name | Hex | Role |
| --- | --- | --- |
| Background | `#FFFFFF` | Page and app background |
| Highlight Background | `#FAFAFA` | Input fill, legacy page wash, hover rows |
| Secondary Background | `#F3F5F7` | Search field, incoming DM bubble |
| Primary Text | `#000000` | Usernames, captions (the token is `rgb(12,16,20)` = `#0C1014` in newer surfaces) |
| Secondary Text | `#737373` | Timestamps, "View all 24 comments", placeholders |
| Tertiary Icon | `#8E8E8E` | Inactive small icons |
| Stroke | `#DBDBDB` | Borders, dividers, seen story ring |
| Secondary Button | `#EFEFEF` | Following / Message / Edit profile |
| Secondary Button Hover | `#DBDBDB` | Hover and press on secondary buttons |
| Action Blue | `#0095F6` | Primary buttons, Follow, Log in, selected checkboxes |
| Action Blue Hover | `#1877F2` | Hover on primary blue buttons |
| Link Navy | `#00376B` | Hashtags, mentions, links in captions |
| Disabled Blue | `rgba(0,149,246,0.3)` | Disabled primary button |

### Grey ramp

Instagram's grey tokens, from light to dark: `#F5F5F5`, `#EFEFEF`, `#DBDBDB`, `#C7C7C7`, `#A8A8A8`, `#8E8E8E`, `#737373`, `#555555`, `#363636`, `#262626`, `#1A1A1A`.

### Semantic

| Name | Hex | Use |
| --- | --- | --- |
| Like / Badge | `#FF3040` | Filled heart, unread badge dot |
| Error | `#ED4956` | Form errors, destructive menu items ("Delete", "Block") |
| Success | `#58C322` | Confirmations |
| Close Friends | `#1CD14F` | Close Friends ring and star badge |
| Live | `#FF0169` | LIVE badge on avatars |

### Brand gradient

The glyph and story rings use a warm-to-cool gradient. The commonly published stops are:

| Stop | Hex |
| --- | --- |
| Yellow | `#FEDA75` |
| Orange | `#FA7E1E` |
| Magenta | `#D62976` |
| Purple | `#962FBF` |
| Blue | `#4F5BD5` |

The glyph is a radial gradient centred near the bottom-left corner (yellow) spreading to magenta and purple at the top-right. Story rings use a linear diagonal from yellow/orange at bottom-left to magenta/purple at top-right.

```css
--ig-gradient: radial-gradient(circle at 30% 107%, #FDF497 0%, #FDF497 5%, #FD5949 45%, #D6249F 60%, #285AEB 90%);
--ig-ring: linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5);
```

### Dark mode

| Name | Hex |
| --- | --- |
| Background | `#000000` |
| Elevated / menus | `#262626` |
| Secondary background | `#25292E` |
| Primary text | `#F5F5F5` |
| Secondary text | `#A8A8A8` |
| Stroke | `#363636` |
| Secondary button | `#363636` |
| Action blue | `#0095F6` |
| Link | `#E0F1FF` |

**2025 refresh note.** Newer surfaces (the "prism" tokens) shift the primary button to an indigo blue `#4A5DF9` (hover `#4150F7`) and neutral text to `#0C1014`. `#0095F6` is still the `--accent` token and appears on most public web pages. Pick one per build and stay consistent.

## 3. Typography

**Families.** **Instagram Sans** (2022, by Colophon Foundry with the Instagram team) is the brand typeface, with Headline, Condensed and Script cuts. It is used in Stories text, Reels captions, marketing and app headers. The web app's running UI text uses the system stack:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

Instagram Sans is proprietary and not licensed outside Meta. For rebuilds, use **Plus Jakarta Sans** for headlines (similar rounded geometric terminals) and **Inter** or the system stack for UI text. The wordmark is a custom script logotype, not a font; never retype it.

### Scale

| Role | Size (px) | Weight | Line height | Tracking | Example |
| --- | --- | --- | --- | --- | --- |
| Display | 28 | 700 | 1.15 | -0.01em | Marketing headers, empty-state titles |
| Profile Name | 20 | 400 | 1.25 | 0 | Username at top of profile |
| Title | 16 | 600 | 1.25 | 0 | Dialog titles, section headers |
| Body | 14 | 400 | 1.29 | 0 | Captions, comments, list rows |
| Username | 14 | 600 | 1.29 | 0 | Author name before caption |
| Meta | 12 | 400 | 1.33 | 0 | Timestamps, "Suggested for you" |
| Micro | 11 | 400 | 1.27 | 0.01em | Footer links, legal |

### Rules

- Sentence case for buttons and headers: "Follow", "Edit profile", "View all comments".
- Usernames are lowercase as the user typed them, always 600 weight, never truncated mid-word without an ellipsis.
- Counts abbreviate: "1,204 likes" under 10K, then "12.4K", "3.1M".
- Timestamps are relative and short in the feed: "2h", "3d", "1w". Full dates only in detail views.
- No all caps in UI except the "LIVE" badge.

## 4. Logo & Brand Mark

The **glyph** is a rounded square with a camera outline inside: an inner rounded square, a circle lens and a small dot at top-right for the viewfinder. In full colour it carries the gradient; the camera lines are white.

- **Colour versions:** full gradient (preferred), solid black, solid white. The glyph may also appear as a white outline camera on the gradient.
- **Clear space:** keep at least half the glyph's width clear on all sides. (Unofficial reading; Meta's Brand Elements page has the exact rule.)
- **Minimum size:** about 29px on screen for the gradient glyph. Below that use the solid black or white version.
- **Wordmark:** the "Instagram" script logotype (redrawn in 2022). It appears in the app header and on the login page in black or white, never in the gradient, and never retyped in a font.

Misuse:

- Do not change the gradient colours, direction or add new colours.
- Do not use the pre-2016 brown Polaroid-style camera icon.
- Do not crop, rotate, outline or add effects or shadows to the glyph.
- Do not combine "Insta" or "gram" with other names, or make Instagram the most prominent element of a third-party design.
- Do not abbreviate or translate "Instagram"; keep the capital "I" in running text.

## 5. Components

### Buttons

```css
.btn {
  height: 32px;
  padding: 0 16px;
  border-radius: 8px;
  font: 600 14px/18px var(--brand-font-body);
  border: 0;
  cursor: pointer;
  transition: background-color 100ms ease-out, opacity 100ms ease-out;
}
.btn-primary { background: #0095F6; color: #FFFFFF; }
.btn-primary:hover { background: #1877F2; }
.btn-primary:disabled { background: rgba(0,149,246,0.3); }
.btn-secondary { background: #EFEFEF; color: #000000; }
.btn-secondary:hover { background: #DBDBDB; }
.btn-text { background: none; color: #0095F6; padding: 0; height: auto; }
.btn-text:hover { color: #00376B; }
.btn-destructive-text { color: #ED4956; }
```

- **Large** (Log in, Sign up): 44px tall on mobile web, full width, 8px radius.
- **Follow** in feed headers and suggestions: text button in `#0095F6` with no fill, 14px/600.
- **Icon buttons** (like, comment, share, save): 24px glyphs with 8px hit padding, no background. Pressing like triggers a quick scale bounce and fills the heart `#FF3040`.

### Inputs

```css
.input {
  height: 38px;
  padding: 9px 8px 7px;
  background: #FAFAFA;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  font: 400 12px var(--brand-font-body);
}
.input:focus { border-color: #A8A8A8; outline: none; }
```

- Login fields use the floating-label pattern: the label shrinks to 10px when text is entered.
- Newer settings forms use 12px radius fields and 1px `#DBDBDB` borders.
- **Search:** 40px tall, `#EFEFEF` fill, 8px radius, no border, magnifier icon inside.
- **Comment box:** borderless single line, "Add a comment..." placeholder, a blue "Post" text button that stays disabled (30% opacity) until there is text.

### Cards and posts

The feed post is not a card on mobile. On desktop it is a 470px column item with a 1px bottom divider:

1. Header, 54px: 32px avatar with story ring, username 14/600, a "•" and relative time, more icon on the right.
2. Media: full column width, aspect 1:1 to 4:5, 4px radius on desktop web, 0 on mobile.
3. Action row: heart, comment, share on the left, save on the right, 24px icons with 16px spacing.
4. "1,204 likes" 14/600, then caption with bold username inline, "more" in secondary text.
5. "View all 48 comments" in `#737373`, then the comment input.

### Navigation

- **Mobile bottom tab bar:** 5 items (Home, Search, Reels, Shop or Create, Profile), 50px tall plus safe area, white with a 1px top border. Profile tab shows a 24px avatar; active state adds a 1.5px black ring.
- **Desktop left sidebar:** 245px wide (72px collapsed below 1264px). Logo wordmark at top, then 48px-tall rows with 24px icons and 16px labels; active row label goes 700 weight.
- **Top bar (mobile):** 44px, wordmark on the left, heart and Messenger icons on the right.

### Tabs

Profile tabs (Posts, Reels, Tagged): icons with 12px uppercase-free labels, 52px tall. Active tab gets a 1px black line on top of the tab (desktop) or a 1px black bottom line (mobile), and icon/label switch from `#737373` to black.

### Badges

- **Unread dot:** 8px `#FF3040` circle.
- **Count badge:** `#FF3040` pill, 18px tall, white 11px/600.
- **Verified:** blue `#0095F6` scalloped badge with a white check, 12-18px, after the username.
- **LIVE:** gradient-free `#FF0169` pill with white 10px/700 caps "LIVE", overlapping the avatar bottom.

### Avatars

Circular at 24, 32, 44, 56, 77 (story tray), 150 (profile on desktop). Story ring: 2px gradient ring plus a 2px white (or black) gap. Close Friends ring is solid `#1CD14F`.

### Modals

```css
.dialog {
  width: 400px;
  max-width: calc(100vw - 88px);
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
}
.dialog-row {
  min-height: 48px;
  border-top: 1px solid #DBDBDB;
  font: 400 14px var(--brand-font-body);
  text-align: center;
}
.scrim { background: rgba(0,0,0,0.65); }
```

Action sheets stack full-width text rows: the destructive option first in `#ED4956` 700 weight, "Cancel" last.

### Signature components

- **Story tray:** horizontal scroll of 66px avatars with rings and 12px usernames below, at the top of the feed.
- **Story viewer:** 9:16 full-height media, segmented progress bars at the top (2px tall, white at 35% opacity, filling to 100%), reply pill at the bottom.
- **Double-tap heart:** a large white heart scales in over the photo and fades out in about 1s.
- **Carousel dots:** 6px dots under media, active `#0095F6`, inactive `#A8A8A8`.

## 6. Layout & Spacing

- **Base unit:** 4px. Steps used: 4, 8, 12, 16, 20, 24, 32, 44.
- **Feed column:** 470px max on desktop, centred, with a 319px suggestions sidebar to the right above 1160px.
- **Profile:** max width 935px. Header with 150px avatar, stats row (posts, followers, following) in 16px, bio in 14px. Grid of 3 columns with 4px gaps (1px on mobile).
- **Nav:** 245px sidebar desktop, 72px rail at medium widths, bottom tab bar under 768px.
- **Breakpoints:** 768px (bottom bar to rail), 1264px (rail to full sidebar), 1160px (suggestions column).
- **Gutters:** 16px on mobile, 20-32px on desktop.

## 7. Depth, Elevation & Motion

Instagram is close to flat. Separation comes from 1px `#DBDBDB` lines and background shifts, not shadows.

| Level | Treatment |
| --- | --- |
| Base | `#FFFFFF` |
| Raised row / field | `#FAFAFA` or `#EFEFEF` fill |
| Popover | `#FFFFFF`, `0 4px 12px rgba(0,0,0,0.15)`, 8px radius |
| Dialog | 12px radius, dark scrim `rgba(0,0,0,0.65)` |

### Motion

| Use | Duration | Easing |
| --- | --- | --- |
| Hover, press, colour | 100ms | `ease-out` |
| Move in / out | 200-280ms | `cubic-bezier(0.17, 0.17, 0, 1)` |
| Dialog enter | 200ms scale 1.1 > 1 plus fade | `ease-out` |
| Like heart | about 450ms pop, overshoot to 1.2 | spring |
| Story progress | linear over 5s (photo) or clip length | linear |

## 8. Iconography & Imagery

- **Icons:** custom set on a 24px grid, 2px rounded strokes, rounded caps and joins. Outline by default, filled black when active. Icons are monochrome; colour only for the liked heart and verified badge.
- **Photography:** user media is the hero. Do not overlay text, gradients or UI on feed media except the carousel counter ("1/5") and muted/sound toggles.
- **Aspect ratios:** 1:1, 4:5 portrait, 1.91:1 landscape for feed; 9:16 for Stories and Reels.
- **Brand imagery:** marketing uses bold flat colour fields, Instagram Sans Headline, and gradient-adjacent hot colours. The app chrome does not.

## 9. Voice & Microcopy

Casual, brief, friendly. Short labels, no exclamation marks in UI, emoji only in marketing or user content.

- Sentence case: "Edit profile", "Share to story", "Add to close friends".
- Second person and verbs first: "Follow", "Message", "See translation".
- Gentle system copy: "Couldn't refresh feed", "Try again".
- Counts with words: "Liked by alexm and 1,203 others".

Sample strings:

- "Log in" / "Forgot password?" / "Don't have an account? Sign up"
- "No posts yet"
- "You're all caught up. You've seen all new posts from the past 3 days."
- "Add a comment..."

## 10. Do's and Don'ts

**Do**

- Keep chrome white/black and grey, and let media carry colour.
- Use `#0095F6` for the single primary action on a screen.
- Use 24px outline icons that fill on the active state.
- Put the gradient only on the glyph and story rings.
- Use 1px `#DBDBDB` dividers instead of shadows.

**Don't**

- Don't use the gradient on buttons, headers or backgrounds of UI chrome.
- Don't put shadows or rounded card frames around feed posts on mobile.
- Don't retype the wordmark in a font.
- Don't use more than one blue (`#0095F6` or the newer `#4A5DF9`) in one build.
- Don't put text overlays on feed photos.
- Don't use all caps labels.

## 11. Agent Prompt Guide

Paste this when asking an agent to build an Instagram-style UI:

> Build a light-mode photo feed in the style of Instagram. White background, black text, `#737373` secondary text, 1px `#DBDBDB` dividers, and no shadows on feed items. The only accent is `#0095F6` for primary buttons (32px tall, 8px radius, 14px/600 white text) and blue text buttons like "Follow"; secondary buttons are `#EFEFEF` with black text. Use Inter or the system stack at 14px for body and Plus Jakarta Sans for headlines. Posts are a 470px column: 32px avatar with a gradient story ring (`linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)`) and bold username, full-width media, a row of 24px outline icons (heart, comment, share, save), bold like count and caption. Desktop has a 245px left sidebar of icon + label rows; mobile has a 5-icon bottom tab bar. Profiles show a 3-column grid with 4px gaps. Keep labels sentence case and short.

```css
:root {
  --brand-accent: #0095F6;
  --brand-accent-hover: #1877F2;
  --brand-accent-disabled: rgba(0, 149, 246, 0.3);
  --brand-bg: #FFFFFF;
  --brand-surface: #FAFAFA;
  --brand-surface-2: #EFEFEF;
  --brand-text: #000000;
  --brand-text-secondary: #737373;
  --brand-stroke: #DBDBDB;
  --brand-link: #00376B;
  --brand-like: #FF3040;
  --brand-error: #ED4956;
  --brand-success: #58C322;
  --brand-close-friends: #1CD14F;
  --brand-gradient: linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5);
  --brand-font-display: "Instagram Sans Headline", "Plus Jakarta Sans", system-ui, sans-serif;
  --brand-font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", Roboto, Helvetica, Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-pill: 9999px;
  --brand-feed-width: 470px;
  --brand-sidebar-width: 245px;
  --brand-ease: cubic-bezier(0.17, 0.17, 0, 1);
}
@media (prefers-color-scheme: dark) {
  :root {
    --brand-bg: #000000;
    --brand-surface: #121212;
    --brand-surface-2: #363636;
    --brand-text: #F5F5F5;
    --brand-text-secondary: #A8A8A8;
    --brand-stroke: #363636;
    --brand-link: #E0F1FF;
  }
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Meta or Instagram.

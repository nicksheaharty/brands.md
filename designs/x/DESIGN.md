---
name: X
slug: x
url: https://x.com
category: Social
tagline: "Black, text-first timeline with Chirp type, hairline dividers and a single sky blue."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Primary background (Lights out theme), logo
  - name: Primary Text
    hex: "#E7E9EA"
    role: Post text, names, headings on black
  - name: Secondary Text
    hex: "#71767B"
    role: Handles, timestamps, counts, placeholder text
  - name: Border
    hex: "#2F3336"
    role: Hairline dividers between posts and columns
  - name: Blue
    hex: "#1D9BF0"
    role: Links, selected tab indicator, focus, verified badge, follow on light
  - name: White
    hex: "#FFFFFF"
    role: Post button and Follow button fill on dark, logo on black
  - name: Surface
    hex: "#16181C"
    role: Right-rail modules, hover rows, menus
  - name: Search Fill
    hex: "#202327"
    role: Search field, secondary fills
  - name: Like Pink
    hex: "#F91880"
    role: Liked heart and like hover
  - name: Repost Green
    hex: "#00BA7C"
    role: Reposted state and hover
  - name: Danger Red
    hex: "#F4212E"
    role: Destructive actions, errors, character limit exceeded
  - name: Light Text
    hex: "#0F1419"
    role: Primary text in light mode, button text on white
  - name: Light Secondary
    hex: "#536471"
    role: Secondary text in light mode
  - name: Light Border
    hex: "#EFF3F4"
    role: Dividers in light mode
  - name: Gold Verified
    hex: "#E2B719"
    role: Verified organisation badge
fonts:
  display:
    family: "Chirp"
    fallback: "Inter"
    weights: [700, 800]
  body:
    family: "Chirp"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Display, size: 31, weight: 800, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Page Title, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Module Title, size: 20, weight: 800, lineHeight: 1.2, tracking: "0" }
  - { role: Post Body, size: 15, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Name, size: 15, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Meta, size: 13, weight: 400, lineHeight: 1.23, tracking: "0" }
  - { role: Button, size: 15, weight: 700, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Menu (dark), value: "rgba(255,255,255,0.2) 0 0 15px, rgba(255,255,255,0.15) 0 0 3px 1px" }
  - { name: Menu (light), value: "rgba(101,119,134,0.2) 0 0 15px, rgba(101,119,134,0.15) 0 0 3px 1px" }
preview:
  bg: "#000000"
  surface: "#16181C"
  text: "#E7E9EA"
  muted: "#71767B"
  border: "#2F3336"
  accent: "#FFFFFF"
  accentText: "#0F1419"
  radius: 9999
  buttonStyle: pill
---

# X

## 1. Visual Theme & Atmosphere

X (formerly Twitter) is a text-first timeline on pure black. Since the 2023 rebrand the default dark theme ("Lights out") uses `#000000` with near-white text, grey meta, and 1px `#2F3336` hairlines between posts. Primary buttons switched from Twitter blue to solid white pills with black text. Blue `#1D9BF0` remains for links, the active tab underline, focus rings and the verified badge.

What makes it recognisable:

- **Pure black plus hairlines.** No cards, no shadows on the timeline. Each post is a full-width row divided by a 1px line.
- **Pills everywhere.** Buttons, the search field, chips and the Post button are fully rounded.
- **Chirp.** A tight, slightly condensed grotesque with heavy 700/800 weights for names and headings.
- **Three columns.** A left nav rail with large icons, a 600px timeline with vertical borders on both sides, and a 350px right rail of modules (search, trends, who to follow).
- **Engagement row.** Four or five small grey icons with counts under every post that light up in pink, green or blue on hover.

Density is high. Text is 15px, avatars 40px, and posts stack with only 12px vertical padding.

## 2. Color Palette & Roles

### Dark ("Lights out", default)

| Name | Hex | Role |
| --- | --- | --- |
| Background | `#000000` | Page background, nav, timeline |
| Surface | `#16181C` | Right-rail modules, hover on rows |
| Search Fill | `#202327` | Search field, chip fills |
| Hover Overlay | `rgba(231,233,234,0.1)` | Icon and nav hover |
| Border | `#2F3336` | Post dividers, column borders |
| Border Strong | `#536471` | Input outlines, outline button border |
| Primary Text | `#E7E9EA` | Body, names |
| Secondary Text | `#71767B` | Handles, timestamps, counts |
| White | `#FFFFFF` | Primary button fill (Post, Follow) |
| Blue | `#1D9BF0` | Links, active tab bar, focus, verified |
| Scrim | `rgba(91,112,131,0.4)` | Modal backdrop |

### Light ("Default")

| Name | Hex | Role |
| --- | --- | --- |
| Background | `#FFFFFF` | Page |
| Surface | `#F7F9F9` | Right-rail modules |
| Search Fill | `#EFF3F4` | Search field |
| Border | `#EFF3F4` | Dividers |
| Border Strong | `#CFD9DE` | Inputs, outline buttons |
| Primary Text | `#0F1419` | Body, names, black primary buttons |
| Secondary Text | `#536471` | Meta |
| Primary Button | `#0F1419` | Post / Follow fill with white text |
| Blue | `#1D9BF0` | Links, focus, verified |

### "Dim" theme

A third theme with `#15202B` background, `#1E2732` surface, `#38444D` borders, `#F7F9F9` text and `#8B98A5` secondary.

### Interaction colours

| Action | Hex | Hover fill |
| --- | --- | --- |
| Reply / views / share | `#1D9BF0` | `rgba(29,155,240,0.1)` |
| Repost | `#00BA7C` | `rgba(0,186,124,0.1)` |
| Like | `#F91880` | `rgba(249,24,128,0.1)` |
| Bookmark | `#1D9BF0` | `rgba(29,155,240,0.1)` |

### Status

| Name | Hex |
| --- | --- |
| Danger | `#F4212E` |
| Warning / limit near | `#FFD400` |
| Success | `#00BA7C` |
| Verified (blue) | `#1D9BF0` |
| Verified organisation | `#E2B719` (gold) |
| Government | `#829AAB` (grey) |

## 3. Typography

**Family.** **Chirp**, a custom typeface made with Grilli Type (2021), derived from GT America. It is used for every piece of UI and the marketing site. It is proprietary.

```css
font-family: "TwitterChirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

For rebuilds use **Inter** (Google Fonts) at the same weights. Inter runs slightly wider, so tracking at -0.005em on body brings it close. Chirp Extended (used for "Display" in some marketing) can be approximated with **Archivo** expanded widths if needed.

### Scale

| Role | Size (px) | Weight | Line height | Tracking | Example |
| --- | --- | --- | --- | --- | --- |
| Display | 31 | 800 | 1.2 | -0.01em | "Happening now" on the logged-out page |
| Page Title | 20 | 700 | 1.2 | 0 | "Home", "Notifications" header |
| Module Title | 20 | 800 | 1.2 | 0 | "What's happening", "Who to follow" |
| Post Body | 15 | 400 | 1.33 | 0 | Post text, list rows |
| Name | 15 | 700 | 1.33 | 0 | Display name in a post |
| Meta | 13 | 400 | 1.23 | 0 | Counts, trend context |
| Button | 15 | 700 | 1.33 | 0 | Follow, Post |
| Large Post | 17 | 400 | 1.5 | 0 | Focused post detail view |

Nav labels on the left rail are 20px, 400 weight; the active item turns 700.

### Rules

- Sentence case for buttons and menus ("Post", "Show more replies", "Not interested in this post").
- Handles always start with "@" in secondary colour; display names are 700.
- Counts abbreviate: "1,204", then "12.4K", "3.2M".
- Timestamps in the timeline are short: "12s", "4m", "2h", "Nov 14". Detail view: "3:04 PM · Nov 14, 2026".
- Links inside posts are `#1D9BF0` with no underline; underline on hover.

## 4. Logo & Brand Mark

The X mark is a geometric "X" built from a thick diagonal stroke and a thin diagonal stroke with an inline cut, so one leg reads as an outlined double line. It comes from the Unicode mathematical double-struck letterform family, rebuilt in 2023.

- **Colours:** black on white or white on black only. No blue, no gradients.
- **Clear space:** keep at least half the mark's width empty on all sides.
- **Minimum size:** 16px on screen; 32px or larger where it must be read as a standalone brand mark.
- **Wordmark:** there is no separate wordmark lockup in the product. Write "X" in text.
- **App icon:** white mark centred on a black rounded square.

Misuse:

- Do not use the old Twitter bird, `#1DA1F2`, or the "tweet" naming for new brand work.
- Do not colour the mark blue or add gradients, outlines, shadows or 3D.
- Do not rotate, skew, or redraw the mark in a font's letter X.
- Do not place it on busy photos without a solid black or white backing.

## 5. Components

### Buttons

```css
.btn {
  min-height: 36px;
  padding: 0 16px;
  border-radius: 9999px;
  font: 700 15px/20px var(--brand-font);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 200ms ease, box-shadow 200ms ease;
}
.btn-primary { background: #EFF3F4; color: #0F1419; }
.btn-primary:hover { background: #D7DBDC; }
.btn-outline { background: transparent; color: #EFF3F4; border-color: #536471; }
.btn-outline:hover { background: rgba(239,243,244,0.1); }
.btn-blue { background: #1D9BF0; color: #FFFFFF; }
.btn-blue:hover { background: #1A8CD8; }
.btn-danger-outline { color: #F4212E; border-color: #67070F; }
.btn:disabled { opacity: 0.5; cursor: default; }
.btn:focus-visible { box-shadow: 0 0 0 2px #000000, 0 0 0 4px #1D9BF0; outline: none; }
```

- **Post (compose):** large pill in the left rail, 52px tall, full rail width (about 233px), 17px/700, white fill on black.
- **Following (hover):** outline pill that changes label to "Unfollow" and turns red `#F4212E` with red border and `rgba(244,33,46,0.1)` fill on hover.
- **Icon button:** 34-36px circle, transparent, hover fill matches the action colour at 10%.

### Inputs

```css
.input {
  height: 56px;
  padding: 8px;
  background: transparent;
  border: 1px solid #333639;
  border-radius: 4px;
  color: #E7E9EA;
  font: 400 17px var(--brand-font);
}
.input:focus-within { border: 2px solid #1D9BF0; outline: none; }
.input label { color: #71767B; font-size: 13px; }
.input:focus-within label { color: #1D9BF0; }
```

- Floating labels move from 17px inside the field to 13px at the top on focus.
- **Search:** 42px tall pill, `#202327` fill, magnifier icon, turns black with a 1px blue border on focus.
- **Composer:** borderless 20px text area ("What is happening?!"), toolbar of 20px blue icons, circular character counter that fills blue, then yellow, then red.

### Posts (timeline rows)

```css
.post {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #2F3336;
}
.post:hover { background: rgba(255,255,255,0.03); }
.post-media { border: 1px solid #2F3336; border-radius: 16px; overflow: hidden; margin-top: 12px; }
```

Header line: name (15/700), verified badge, @handle and "· 2h" in `#71767B`, more icon on the right. The action row spans the post width with icons spaced evenly and 13px counts next to each.

### Navigation

- **Left rail:** 275px wide on large screens, 88px (icons only) at medium widths. Each item is a pill with 12px padding: 26px icon plus 20px label. Hover fill `rgba(231,233,234,0.1)`. Active item uses the filled icon and 700 label.
- **Top header:** sticky, 53px, black at 65% opacity with `backdrop-filter: blur(12px)`.
- **Mobile:** bottom tab bar of 5 icons, 53px tall, plus a floating blue (or white) compose button 56px round in the bottom-right.

### Tabs

"For you / Following" tabs: equal-width, 53px tall, 15px labels. Inactive `#71767B` 500, active `#E7E9EA` 700 with a 4px `#1D9BF0` bar under the label, 56px wide with rounded ends.

### Badges

- **Verified:** 18-20px scalloped badge, `#1D9BF0` (individual), `#E2B719` (organisation), `#829AAB` (government).
- **Notification count:** `#1D9BF0` pill, white 11px/700, 18px tall, on the nav icon.
- **Chips:** pill, `#202327` fill or 1px `#536471` outline, 14px/700.

### Avatars

Circular for people at 32, 40, 48, 134 (profile header). Organisations with gold verification use rounded squares (about 25% radius). Profile banner is 3:1, avatar overlaps it by half its height with a 4px black ring.

### Modals

```css
.modal {
  width: 600px;
  max-height: 90vh;
  background: #000000;
  border-radius: 16px;
}
.scrim { background: rgba(91,112,131,0.4); }
```

Header 53px with a close icon on the left. Menus (dropdowns) are black with 16px radius and the white glow shadow `rgba(255,255,255,0.2) 0 0 15px, rgba(255,255,255,0.15) 0 0 3px 1px`.

### Signature components

- **Trends module:** `#16181C` box, 16px radius, rows with 13px context ("Trending in Sports"), 15/700 topic, 13px post count.
- **Community Notes:** a bordered box under the post with "Readers added context" 15/700 and the note text.
- **Spaces bar:** purple `#7856FF` live audio card.
- **Toast:** `#1D9BF0` pill-ish banner at the bottom centre, white 15px text, 4s.

## 6. Layout & Spacing

- **Base unit:** 4px. Most padding is 12 or 16px.
- **Main column:** 600px with 1px `#2F3336` borders on left and right.
- **Right rail:** 350px, 30px gap from the main column, modules separated by 16px.
- **Left rail:** 275px (88px collapsed under 1280px).
- **Total max width:** about 1265px, centred.
- **Breakpoints:** 500px (mobile), 688px, 988px (right rail hides), 1078px, 1265px (rail labels show).
- **Mobile:** full-width timeline, 16px side padding inside posts.

## 7. Depth, Elevation & Motion

Flat. Hierarchy comes from hairlines and slightly lighter surfaces.

| Level | Treatment |
| --- | --- |
| Base | `#000000` |
| Module | `#16181C`, 16px radius, no shadow |
| Sticky header | black 65% + 12px backdrop blur |
| Menu / popover | black, 16px radius, white glow shadow |
| Modal | black, 16px radius, blue-grey scrim |

### Motion

| Use | Duration | Easing |
| --- | --- | --- |
| Hover fills | 200ms | `ease` |
| Tab indicator | 200ms | `ease-out` |
| Like | about 800ms heart burst with confetti dots | custom keyframes |
| Menu open | 150ms fade + scale 0.95 to 1 | `ease-out` |
| New posts pill | slides down 200ms | `ease-out` |

## 8. Iconography & Imagery

- **Icons:** custom set on a 24px grid, about 1.75-2px strokes, mostly outline with filled versions for active states (Home, Notifications, Bookmarks). Engagement icons are 18.75px.
- **Colour:** icons are `#E7E9EA` in nav and `#71767B` in post action rows; action colour only on hover or active.
- **Media:** images inside posts get 16px radius and a 1px border. Multi-image posts use a 2x2 grid with 2px gaps inside one rounded frame.
- **Brand imagery:** high-contrast black and white with the X mark; avoid colourful illustration.

## 9. Voice & Microcopy

Direct, terse, a little informal. Short verbs.

- "Post" (not "Tweet"), "Repost" (not "Retweet"), "Quote", "Bookmark".
- Sentence case: "Show more", "Who to follow", "What's happening".
- Composer placeholder: "What is happening?!"
- Empty states have a short bold title plus one line: "Save posts for later" / "Bookmark posts to easily find them again in the future."

Sample strings:

- "Happening now" / "Join today." / "Sign in"
- "Show 34 posts"
- "Your post was sent."
- "This post is unavailable."
- "Readers added context they thought people might want to know"

## 10. Do's and Don'ts

**Do**

- Use `#000000` with `#E7E9EA` text and `#2F3336` hairlines for the default look.
- Make primary buttons white pills with dark text on black.
- Keep `#1D9BF0` for links, focus, the tab indicator and verified badges.
- Use pills for buttons, search and chips; 16px radius for media and modules.
- Set names in 700 and handles/timestamps in `#71767B`.
- Use colour on engagement icons only on hover or active.

**Don't**

- Don't use the bird logo or `#1DA1F2` Twitter blue.
- Don't put posts in cards with shadows.
- Don't colour the X mark.
- Don't use "tweet" or "retweet" in UI copy.
- Don't mix blue primary buttons with white primary buttons on one screen.
- Don't use large radii on inputs (they are 4px, not pills, except search).

## 11. Agent Prompt Guide

Paste this when asking an agent to build an X-style UI:

> Build a dark social timeline in the style of X. Pure black `#000000` background, `#E7E9EA` text, `#71767B` secondary text, 1px `#2F3336` dividers between posts and around the 600px centre column. Use Inter as a stand-in for Chirp: 15px/1.33 body, 700 names, 20-31px 800 headings. Primary buttons are white pills (`#EFF3F4` fill, `#0F1419` text, 15px/700, 36px tall); outline pills use a `#536471` border. `#1D9BF0` is only for links, focus rings, the 4px active tab bar and verified badges. Posts are rows with a 40px round avatar, name, grey @handle and time, text, media with 16px radius and a 1px border, and an action row of grey 18px icons that turn blue (reply), green `#00BA7C` (repost) and pink `#F91880` (like) on hover. Left rail of 26px icons with 20px labels, right rail of `#16181C` modules with 16px radius. No shadows, no gradients.

```css
:root {
  --brand-bg: #000000;
  --brand-surface: #16181C;
  --brand-fill: #202327;
  --brand-text: #E7E9EA;
  --brand-text-secondary: #71767B;
  --brand-border: #2F3336;
  --brand-border-strong: #536471;
  --brand-primary-bg: #EFF3F4;
  --brand-primary-text: #0F1419;
  --brand-blue: #1D9BF0;
  --brand-blue-hover: #1A8CD8;
  --brand-like: #F91880;
  --brand-repost: #00BA7C;
  --brand-danger: #F4212E;
  --brand-warning: #FFD400;
  --brand-verified-org: #E2B719;
  --brand-hover: rgba(231, 233, 234, 0.1);
  --brand-scrim: rgba(91, 112, 131, 0.4);
  --brand-font: "TwitterChirp", "Chirp", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --brand-radius-input: 4px;
  --brand-radius-media: 16px;
  --brand-radius-pill: 9999px;
  --brand-column: 600px;
  --brand-rail-right: 350px;
  --brand-rail-left: 275px;
}
@media (prefers-color-scheme: light) {
  :root {
    --brand-bg: #FFFFFF;
    --brand-surface: #F7F9F9;
    --brand-fill: #EFF3F4;
    --brand-text: #0F1419;
    --brand-text-secondary: #536471;
    --brand-border: #EFF3F4;
    --brand-border-strong: #CFD9DE;
    --brand-primary-bg: #0F1419;
    --brand-primary-text: #FFFFFF;
    --brand-hover: rgba(15, 20, 25, 0.1);
  }
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by X Corp.

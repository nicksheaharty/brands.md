---
name: Threads
slug: threads
url: https://threads.com
category: Social
tagline: "Monochrome text feed in a single rounded column, an @-loop mark and almost no colour."
updated: 2026-11-16
appStoreId: 6446901002
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Page Dark
    hex: "#101010"
    role: Page background (dark)
  - name: Column Dark
    hex: "#181818"
    role: Feed column and elevated surfaces (dark)
  - name: Text Dark
    hex: "#F3F5F7"
    role: Primary text and icons (dark)
  - name: Secondary Dark
    hex: "#777777"
    role: Timestamps, secondary text (dark)
  - name: White
    hex: "#FFFFFF"
    role: Column background (light), primary button (dark)
  - name: Black
    hex: "#000000"
    role: Primary text and primary button (light), logo
  - name: Page Light
    hex: "#FAFAFA"
    role: Page background (light)
  - name: Secondary Light
    hex: "#999999"
    role: Timestamps, secondary text (light)
  - name: Column Outline Dark
    hex: "#2D2D2D"
    role: Column border and dividers (dark)
  - name: Column Outline Light
    hex: "#D5D5D5"
    role: Column border (light)
  - name: Like Red
    hex: "#FF3040"
    role: Liked heart, notification badge, errors
  - name: Link Blue
    hex: "#0095F6"
    role: Links and verified badge (light)
  - name: Link Blue Dark
    hex: "#18A3FE"
    role: Links (dark)
  - name: Tooltip Dark
    hex: "#262626"
    role: Tooltips and menus (dark)
fonts:
  display:
    family: "Optimistic Display"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Optimistic Text"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Profile Name, size: 24, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Header, size: 17, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Username, size: 15, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Post Body, size: 15, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Button, size: 15, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Meta, size: 15, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Count, size: 13, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 8, md: 10, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Column, value: "0 0 12px 0 rgba(0,0,0,0.04)" }
  - { name: Menu, value: "0 10.5px 21px rgba(0,0,0,0.08)" }
preview:
  bg: "#101010"
  surface: "#181818"
  text: "#F3F5F7"
  muted: "#777777"
  border: "#2D2D2D"
  accent: "#FFFFFF"
  accentText: "#000000"
  radius: 10
  buttonStyle: solid
---

# Threads

## 1. Visual Theme & Atmosphere

Threads is Meta's text-first social app, built by the Instagram team. Its look is close to monochrome: black, white and a few greys, with colour only for a liked heart, links and the verified tick. Posts are short text with an optional photo or video carousel, stacked in a single feed column with thin dividers.

On desktop (threads.com), the feed sits inside one centred column, about 640px wide, that looks like a big rounded card: it has a 1px outline and large top corners, floats on a slightly different page colour, and has its own sticky header ("For you", with a dropdown for Following and custom feeds). A narrow icon rail runs down the left edge with the Threads mark at the top. In the app, the same feed runs edge to edge with a bottom tab bar.

What makes it recognisable:

- **No brand colour.** The primary button is solid black on light, solid white on dark.
- **The @-loop mark.** A single continuous line that curls into an "@", like a thread.
- **The column card.** One rounded, outlined column on a slightly darker or lighter page.
- **Reply threads drawn as lines.** A thin vertical line connects an avatar to the replies below it.
- **Plain icon row.** Heart, speech bubble, repost arrows and paper plane, outline only, with small counts.

Mood words: quiet, conversational, minimal, editorial, monochrome.

## 2. Color Palette & Roles

Values come from Threads' production CSS (`--barcelona-*` variables, the app's internal codename) read on 2026-11-16. Page and text values marked approximate are inferred from related tokens.

| Name | Light | Dark | Role |
|---|---|---|---|
| Page background | `#FAFAFA` | `#101010` | Behind the column |
| Column / elevated | `#FFFFFF` | `#181818` | Feed column, cards, sheets |
| Elevated tertiary | `#FFFFFF` | `#262626` | Tooltips, menus |
| Primary text | `#000000` | `#F3F5F7` | Posts, usernames, icons |
| Secondary text | `#999999` (approx.) | `#777777` (approx.) | Timestamps, counts, handles |
| Secondary icon | `#777777` | `#999999` | Inactive icons |
| Navigation icon | `#B8B8B8` | `#4D4D4D` | Inactive rail icons |
| Column outline | `#D5D5D5` | `#2D2D2D` | Column border |
| Divider | `rgba(0,0,0,0.15)` | `rgba(243,245,247,0.15)` | Between posts |
| Hover background | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.04)` | Row hover |
| Nav item active | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.12)` | Selected rail item |
| Primary button | `#000000` | `#FFFFFF` | Follow, Post |
| Primary button text | `#FFFFFF` | `#000000` | Text on primary |
| Header background | `rgba(255,255,255,0.85)` | `rgba(16,16,16,0.85)` | Blurred sticky header |
| Dialog backdrop | `rgba(255,255,255,0.85)` | `rgba(16,16,16,0.85)` | Behind modals |

### Accent and semantic colors

| Name | Hex | Use |
|---|---|---|
| Like red | `#FF3040` | Filled heart, notification badge, error text |
| Link blue | `#0095F6` (light), `#18A3FE` (dark) | Links, mentions, verified badge |
| Green dot | `#5EE747` | Online / active status |
| Activity: like | `#FE0169` | Activity feed icon badge |
| Activity: follow | `#6E3DEF` | Activity feed icon badge |
| Activity: reply | `#24C3FF` | Activity feed icon badge |
| Activity: repost | `#C329BF` | Activity feed icon badge |
| Activity: quote | `#FE7900` | Activity feed icon badge |
| Activity: mention | `#20C584` | Activity feed icon badge |
| Close friends highlight | `#95F58E` on dark `#345E31` | Close-friends posts |

The activity colours only appear in small round badges on avatars in the Activity tab.

### Light and dark

Both themes are first-class and follow the system setting. The structure is identical; only the greys invert. Dark uses `#101010` page and `#181818` column, never pure black for the page.

## 3. Typography

**Family:** Meta's Optimistic typeface (variable "Optimistic AI VF", with Display and Text cuts), loaded on threads.com. It is proprietary. Use **Inter** as the free substitute, or the system stack, which is what Threads looks like on iOS.

```css
font-family: "Optimistic Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif;
```

**Weights:** 400 body, 600 usernames and buttons, 700 profile names. No light weights.

### Scale

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Profile name | 24px | 700 | 30px | Profile page title |
| Column header | 15-17px | 600 | 21px | "For you", "Following" |
| Username | 15px | 600 | 21px | Post author |
| Post body | 15px | 400 | 21px | Post text |
| Button | 15px | 600 | 21px | Follow, Post |
| Meta | 15px | 400 | 21px | Timestamp beside username ("2h") |
| Count | 13px | 400 | 17px | Like and reply counts |
| Caption | 12px | 400 | 16px | Footer, legal |

### Rules

- Sentence case everywhere.
- Usernames are lowercase handles, shown without "@" in posts.
- Timestamps are short and relative: "2m", "3h", "5d".
- Counts sit right after the icon with 4px gap, no labels.

## 4. Logo & Brand Mark

The Threads mark is a stylised "@" drawn as one continuous loop: an inner "a" whose tail sweeps out and around into an open circle, like a piece of thread. There is no separate wordmark in the app; the word "Threads" is set in the product font where needed.

- **App icon:** white mark on a black square.
- **Colour versions:** black on white, white on black. No colour versions.
- **Clear space:** about a quarter of the mark's width on all sides (approximate).
- **Minimum size:** about 24px on screen (approximate).

Misuse:

- Don't fill the mark with gradients or the Instagram colours.
- Don't rotate, outline, or thicken the line.
- Don't put it inside a coloured circle.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#000000` (light) / `#FFFFFF` (dark) | `#FFFFFF` / `#000000` 600 15px | none | 10px | 36px |
| Secondary | transparent | primary text 600 | 1px `rgba(0,0,0,0.15)` / `rgba(243,245,247,0.15)` | 10px | 36px |
| Follow (inline) | primary | 600 | none | 10px | 34-36px, min-width 104px |
| Following | transparent | secondary text 600 | 1px outline | 10px | 34-36px |
| Icon action | transparent | 20px icon | none | 9999px | 36px |
| Floating create | `#FFFFFF` / `#181818` | "+" icon | 1px outline | 16px | 64-68px square (desktop bottom right) |

States: hover on icon actions adds `rgba(0,0,0,0.04)` (dark `rgba(255,255,255,0.04)`); pressed scales to 0.96; disabled at 40% opacity.

```css
.th-btn-primary {
  font: 600 15px/21px "Optimistic Text", -apple-system, Inter, sans-serif;
  height: 36px;
  padding: 0 16px;
  border-radius: 10px;
  border: 0;
  background: #FFFFFF;     /* dark theme */
  color: #000000;
}
```

### Column card (desktop, signature)

- Max width 640px (content 572-620px), centred.
- Background `#181818` dark / `#FFFFFF` light; 1px outline `#2D2D2D` / `#D5D5D5` (some builds use 0.5px).
- Top corners about 32px radius; sides square to the viewport bottom (the column scrolls inside).
- Sticky header 60-74px with centred title "For you" and a small chevron for feed switching; background blurred at 85% opacity.
- Users can pin extra columns side by side (Search, Activity, a profile), each the same card.

### Post

- Layout: 36px circular avatar on the left (with a small "+" follow badge when not followed), content column on the right with 12px gap.
- Header: username 600, then timestamp in secondary, more "..." at the far right.
- Body: 15px text, 21px line height; links and mentions in link blue.
- Media: images and video at natural aspect with 8px radius; multiple images become a horizontally scrolling row with 6px gaps.
- Action row: heart, speech bubble, repost (two arrows), share (paper plane); 20px outline icons, each in a 36px round hit area, counts beside in 13px secondary.
- Padding 12px 24px; divider 0.5-1px between posts.

### Thread line

Replies from the same author are joined by a 2px vertical line in the outline colour, running from below the avatar to the next avatar. The last reply shows small stacked avatars of repliers and "12 replies".

### Composer

A row at the top of the For you feed: avatar, then "What's new?" placeholder in secondary, and a "Post" button on the right. Opening it shows a modal sheet (radius 16px, width about 620px) with the author header, text area, attachment icons (image, GIF, hashtag, poll, location), "Add to thread" link and "Post" primary button.

### Navigation

- **Desktop rail:** about 76px wide, fixed left. Threads mark at the top, then Home, Search, Create (+ in a rounded square), Activity (heart), Profile, and at the bottom Pin and Menu (two lines). Icons 26px, inactive in the navigation icon grey, active in primary text. Hover shows a rounded 60x48px tile.
- **Mobile tab bar:** five icons, no labels, 68px tall, translucent background with blur.

### Profile

Name (24px 700), handle with a small Threads badge pill, bio 15px, follower count with stacked avatars, link, then full-width "Follow" and "Mention" buttons (10px radius), then tabs "Threads", "Replies", "Media", "Reposts" with a 1px underline on the active tab.

### Menus and tooltips

Menus: `#FFFFFF` / `#262626`, radius 16px, rows 48px with 15px 600 text and icons on the right, dividers between groups. Tooltips small, radius 8px, inverted colours.

## 6. Layout & Spacing

- **Desktop:** left rail 76px, column 640px max centred in the remaining space; large screen breakpoint at 768px (observed `--barcelona-large-screen-breakpoint`). Max page width about 1230px for multi-column layouts.
- **Mobile:** column fills the width, 16px side padding inside posts, 68px bottom tab bar.
- **Spacing:** 4px base (`--base-unit`), with 6x (24px) for post horizontal padding on desktop and 12px on mobile.
- **Density:** medium. Text posts are compact; images get room.

## 7. Depth, Elevation & Motion

- Very flat. Columns separate from the page by a hairline outline and a slight tone change.
- Shadows are faint: `rgba(0,0,0,0.04)` to `rgba(0,0,0,0.08)` for menus and the floating create button.
- Sticky headers and the tab bar use 85% opacity with backdrop blur.
- Motion: the heart fills red with a quick bounce (about 300ms); pull to refresh spins the Threads mark; sheets slide up with spring easing.
- Transitions: 150-250ms, ease-out (approximate).

## 8. Iconography & Imagery

- Icons are outline, round-capped, about 2px stroke at 24px, drawn in Meta's Instagram icon style. Active states fill solid (Home, Activity heart).
- No illustration in the feed. Imagery is user photos and video shown at natural aspect with small rounded corners.
- Avatars always circular; in the composer and thread lines they shrink to 20-24px.

## 9. Voice & Microcopy

Casual, conversational, short. Sentence case.

- Composer: "What's new?", "Add to thread", "Post", "Anyone can reply & quote"
- Feeds: "For you", "Following", "Liked", "Saved"
- Actions: "Follow", "Following", "Mention", "Repost", "Quote", "Share"
- Counts: "12 replies", "1.2K likes"
- Empty states: "Nothing to see here yet."

## 10. Do's and Don'ts

**Do**

- Keep the palette black, white and grey; use red only for likes and blue only for links.
- Put the feed in one centred, outlined column with large top corners on desktop.
- Use 36px circular avatars and a 2px line to join a thread.
- Use outline icons with small counts and no labels.
- Use 10px corners for buttons and black/white fills.

**Don't**

- Don't add a brand colour to buttons or headers.
- Don't wrap each post in its own card; posts are rows divided by hairlines.
- Don't use heavy shadows or gradients.
- Don't use pure black as the dark page background; use `#101010` and `#181818`.
- Don't use Instagram's gradient anywhere in Threads UI.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Threads (threads.com) in dark mode. Page `#101010`, a single centred feed column max 640px wide on `#181818` with a 1px `#2D2D2D` outline and about 32px top corners, sticky blurred header reading "For you". Text `#F3F5F7`, secondary `#777777`, dividers `rgba(243,245,247,0.15)`. Font: system stack or Inter, 15px/21px; usernames 600, body 400. Left icon rail 76px wide with a white @-loop logo at the top and outline icons (Home, Search, Create, Activity, Profile). Each post: 36px round avatar, username plus "2h" timestamp, text, optional images with 8px radius, and an action row of outline heart, comment, repost and share icons in 36px round hit areas with 13px counts. Join replies with a 2px vertical line. Primary buttons are solid white with black 600 text, 10px radius, 36px tall. Liked heart `#FF3040`, links `#18A3FE`. No brand colour, no card shadows.

```css
:root {
  --brand-page-dark: #101010;
  --brand-column-dark: #181818;
  --brand-elevated-dark: #262626;
  --brand-text-dark: #F3F5F7;
  --brand-text-2-dark: #777777;
  --brand-outline-dark: #2D2D2D;
  --brand-divider-dark: rgba(243,245,247,0.15);
  --brand-page-light: #FAFAFA;
  --brand-column-light: #FFFFFF;
  --brand-text-light: #000000;
  --brand-text-2-light: #999999;
  --brand-outline-light: #D5D5D5;
  --brand-divider-light: rgba(0,0,0,0.15);
  --brand-like: #FF3040;
  --brand-link: #0095F6;
  --brand-link-dark: #18A3FE;
  --brand-online: #5EE747;
  --brand-font: "Optimistic Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif;
  --brand-radius-media: 8px;
  --brand-radius-button: 10px;
  --brand-radius-sheet: 16px;
  --brand-radius-column: 32px;
  --brand-radius-pill: 9999px;
  --brand-header-blur: rgba(16,16,16,0.85);
  --brand-shadow-menu: 0 10.5px 21px rgba(0,0,0,0.08);
}
```

---

Values are observed from the public product and published brand material; this file is an unofficial reference and is not affiliated with or endorsed by Threads or Meta.

---
name: Reddit
slug: reddit
url: https://reddit.com
category: Social
tagline: "OrangeRed Snoo, Reddit Sans and dense pill-button feeds of posts, votes and threads."
updated: 2026-11-16
appStoreId: 1064216828
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: OrangeRed
    hex: "#FF4500"
    role: Logo bubble, wordmark, brand moments (published brand value)
  - name: Action Orange
    hex: "#D93900"
    role: Primary buttons (Sign up, Create), upvoted state (approximate)
  - name: Downvote Periwinkle
    hex: "#6A5CFF"
    role: Downvoted state (approximate)
  - name: Ink
    hex: "#0F1A1C"
    role: Primary text in light mode (approximate)
  - name: White
    hex: "#FFFFFF"
    role: Light page background, Snoo face
  - name: Cool Grey 50
    hex: "#F6F8F9"
    role: Secondary background, sidebar cards (approximate)
  - name: Cool Grey 100
    hex: "#E5EBEE"
    role: Button secondary fill, chips, search field (approximate)
  - name: Cool Grey 500
    hex: "#576F76"
    role: Metadata text, icons (approximate)
  - name: Border
    hex: "#DCE3E6"
    role: Dividers, card borders (approximate)
  - name: Join Blue
    hex: "#0A449B"
    role: Join community button, links (approximate)
  - name: Night
    hex: "#0E1113"
    role: Dark mode page background (approximate)
  - name: Night Surface
    hex: "#181C1F"
    role: Dark mode cards and menus (approximate)
  - name: Night Text
    hex: "#B7CAD4"
    role: Dark mode secondary text (approximate)
  - name: Brand Ink
    hex: "#33302F"
    role: Dark warm text used on redditinc.com brand pages
  - name: Peach
    hex: "#FFC49C"
    role: Snoo ear and accent tint in the official logo
fonts:
  display:
    family: "Reddit Sans"
    fallback: "Reddit Sans"
    weights: [600, 700, 800]
  body:
    family: "Reddit Sans"
    fallback: "Reddit Sans"
    weights: [400, 500, 600]
  mono:
    family: "Reddit Mono"
    fallback: "Reddit Mono"
    weights: [400, 500]
typeScale:
  - { role: Community Title, size: 32, weight: 700, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Post Title, size: 18, weight: 600, lineHeight: 1.33, tracking: "0" }
  - { role: Heading, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Button, size: 14, weight: 600, lineHeight: 1.43, tracking: "0" }
  - { role: Meta, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Caps Label, size: 12, weight: 600, lineHeight: 1.33, tracking: "0.05em" }
radii: { sm: 8, md: 16, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Menu, value: "0 4px 12px rgba(0,0,0,0.12)" }
  - { name: Modal, value: "0 8px 32px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F8F9"
  text: "#0F1A1C"
  muted: "#576F76"
  border: "#DCE3E6"
  accent: "#D93900"
  accentText: "#FFFFFF"
  radius: 20
  buttonStyle: pill
---

# Reddit

## 1. Visual Theme & Atmosphere

Reddit is a front page of communities, so the design is built around a feed: post after post, each with a community name, a title, maybe an image, and a row of pill-shaped actions (vote, comment, share). The chrome is clean and neutral (white or near-black) so that thousands of different communities and posts can sit inside it. Personality comes from OrangeRed, the Snoo mascot and community icons and banners.

What makes it recognisable:

- **OrangeRed and Snoo.** The logo is the white alien Snoo inside an OrangeRed `#FF4500` speech bubble, next to a lowercase "reddit" wordmark. Reddit's brand page describes the bubble as a "conversation bubble".
- **Pills everywhere.** Buttons, vote bars, the search field, chips and join buttons are all fully rounded.
- **Votes.** Up and down arrows with a score between them. Upvoted turns orange, downvoted turns periwinkle.
- **Reddit Sans.** Since the 2023 brand refresh, the product uses Reddit Sans, a humanist sans with a large x-height. It is open source on Google Fonts.
- **Cool neutral greys.** Text and borders lean slightly blue-green, not warm.
- **Threads.** Comments nest with thin vertical thread lines and small avatars.

Mood words: communal, busy, conversational, plain, a little weird.

## 2. Color Palette & Roles

reddit.com returned a bot check during research, so product values below come from the public brand page (OrangeRed, brand ink, logo colours) and from observation of the product; product values are marked approximate.

| Name | Hex | Role |
|---|---|---|
| OrangeRed | `#FF4500` | Logo bubble and wordmark (brand page) |
| Snoo Orange | `#FF6101` | Snoo eyes and details in the logo vector |
| Peach | `#FFC49C` | Snoo ear tint in the logo vector |
| Snoo Maroon | `#842123` | Snoo mouth in the logo vector |
| Snoo Blue-Grey | `#BBCFDA` | Face shading in the logo vector |
| Action Orange | `#D93900` | Primary buttons, upvoted arrow and score (approximate; also used on the bot-check loader) |
| Action Orange Hover | `#AE2C00` | Primary hover (approximate) |
| Downvote | `#6A5CFF` | Downvoted arrow and score (approximate) |
| Join Blue | `#0A449B` | "Join" button fill, links (approximate) |
| Ink | `#0F1A1C` | Primary text (approximate) |
| Grey 500 | `#576F76` | Metadata, icons, timestamps (approximate) |
| Border | `#DCE3E6` | Dividers, card borders (approximate) |
| Grey 100 | `#E5EBEE` | Secondary button fill, search field (approximate) |
| Grey 50 | `#F6F8F9` | Sidebar cards, hover backgrounds (approximate) |
| White | `#FFFFFF` | Page background |
| Brand Ink | `#33302F` | Text on redditinc.com brand pages |

### Dark mode (approximate)

| Name | Hex | Role |
|---|---|---|
| Night | `#0E1113` | Page background |
| Night Surface | `#181C1F` | Cards, menus, sidebar |
| Night Raised | `#2A3236` | Secondary buttons, search field |
| Night Border | `#3E4A4F` | Dividers |
| Night Text | `#F2F4F5` | Primary text |
| Night Muted | `#B7CAD4` | Secondary text |

### Semantic colors (approximate)

| State | Hex | Use |
|---|---|---|
| Success | `#01A816` | Approved, success toasts |
| Danger | `#E60000` | Removed, errors, NSFW tag background |
| Warning | `#FFBF0B` | Mod warnings |
| Spoiler | `#576F76` | Spoiler tag |

## 3. Typography

- **Reddit Sans** for everything in the product. Open source (SIL OFL), available on Google Fonts with variable weight. Reddit's brand page describes it as "built for the Internet" with "a large x-height for readability and disambiguated letterforms".
- **Reddit Sans Condensed** for some marketing headlines and tight spaces (also on Google Fonts).
- **Reddit Mono** for code blocks and inline code (Google Fonts).

### Scale (product, approximate)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Community name (header) | 28-32px | 700 | 1.2 |
| Page heading | 20-24px | 700 | 1.3 |
| Post title (feed) | 18px | 600 | 1.33 |
| Post title (detail) | 24px | 700 | 1.25 |
| Body / comment | 14px | 400 | 1.43 |
| Button | 14px | 600 | 1.43 |
| Meta (r/name, time, user) | 12px | 400-600 | 1.33 |
| Caps label (sidebar section) | 12px | 600 | 1.33, tracking 0.05em, uppercase |

### Rules

- Community names are written `r/name`, users `u/name`, always lowercase prefixes.
- Numbers are abbreviated: `1.2k`, `34k`, `2.1M`.
- Post titles are sentence-style as users wrote them; never restyle them.
- Sidebar section labels ("RECENT", "COMMUNITIES") are small caps-style uppercase.

## 4. Logo & Brand Mark

From Reddit's brand page: the logo "consists of a stylized Snoo head contained within an OrangeRed (#FF4500) conversation bubble, typically paired with the Reddit wordmark."

- **Lockup:** bubble icon at left, lowercase "reddit" wordmark in OrangeRed at right.
- **Icon only:** the bubble with Snoo, for avatars, app icon and small spaces.
- **App icon:** Snoo head in white on an OrangeRed field.
- **Snoo:** the white alien with an antenna, orange eyes and a smile. It is genderless and is the community mascot.
- **Clear space:** at least the height of the Snoo's eye around the lockup.
- **Minimum size:** icon 16px; lockup 64px wide.

Do not:

- Recolour the bubble (OrangeRed only, or one-colour white/black for single-colour uses).
- Separate Snoo from the bubble in the logo.
- Redraw Snoo or change its expression in the logo.
- Set "reddit" in another typeface or with a capital R in the wordmark.
- Commercial uses need a licence (licensing@reddit.com per the brand page).

## 5. Components

### Buttons

All buttons are pills.

```css
.btn {
  font: 600 14px/20px "Reddit Sans", sans-serif;
  height: 40px;
  padding: 0 16px;
  border-radius: 9999px;
  display: inline-flex; align-items: center; gap: 8px;
  transition: background-color 100ms ease;
}
.btn--primary { background: #D93900; color: #fff; }        /* Sign up, Post */
.btn--primary:hover { background: #AE2C00; }
.btn--secondary { background: #E5EBEE; color: #0F1A1C; }    /* Log in, Share */
.btn--secondary:hover { background: #DCE3E6; }
.btn--join { background: #0A449B; color: #fff; height: 32px; }
.btn--plain { background: transparent; color: #576F76; }
.btn--plain:hover { background: #F6F8F9; }
.btn--sm { height: 32px; padding: 0 12px; font-size: 12px; }
```

Values approximate. Focus ring: 2px offset ring in the text colour.

### Vote control (signature)

- A pill containing up arrow, score, down arrow, height 32px, fill `#E5EBEE` (light) or `#2A3236` (dark).
- Upvoted: pill fill becomes Action Orange `#D93900`, arrow and score white.
- Downvoted: pill fill becomes `#6A5CFF`, arrow and score white.
- Arrows are outlined at rest, filled when active.

### Post card (feed)

- No heavy card chrome: posts sit on the page with 8-16px padding and a 1px divider between, hover fill `#F6F8F9`, 16px radius on hover.
- Header row: 24px community icon, `r/name` in 12px weight 600, `•`, time ago in grey, "Join" pill at right, overflow menu.
- Title 18px weight 600.
- Media: images and video in a 16px-radius frame, blurred backdrop for letterboxing.
- Action row: vote pill, comment pill with count, award pill, share pill.

### Comments

- Each comment: 24-32px avatar, `u/name`, OP or mod badges, time, then body 14px.
- Nesting shown with 1px vertical thread lines in `#DCE3E6`, about 16px indent per level, collapse with a +/- circle.
- Action row under each comment: vote arrows, "Reply", "Award", "Share", overflow.

### Inputs

- Search: pill, 40px tall, fill `#E5EBEE`, magnifier icon left, placeholder "Search Reddit".
- Text fields: 16-20px radius, 1px border, floating label, helper text below.
- Comment composer: rounded box with a toolbar of formatting icons and a "Comment" pill.

### Navigation

- **Top bar:** 56px, white (or Night), logo left, centred pill search, right side: "Get app", "Log in" (secondary pill), "Sign up" or user avatar, "Create" (+) and notifications.
- **Left rail:** about 270px, links Home, Popular, Explore, All, then collapsible sections (Recent, Communities, Resources) with 24px icons and 14px labels; selected item has `#E5EBEE` pill background.
- **Right rail:** community "About" card, rules, moderators, on `#F6F8F9` with 16px radius.

### Community header

- Banner image (about 128px tall on desktop, 8px radius), round community icon overlapping the bottom-left (about 88px with a white ring), `r/name` 28-32px bold, then "Create Post", "Join" and a notification bell.

### Badges and flair

- Post flair: small pill, 12px, user-chosen background colour.
- NSFW: red pill. Spoiler: grey pill. OP: blue text badge. Mod: green shield.

### Modals and menus

- Menus: 8-16px radius, `0 4px 12px rgba(0,0,0,0.12)`, 40px rows.
- Modals: 16-24px radius, 24px padding, centred, dim backdrop.

### Avatars

- Users: Snoo-style avatar builder images in a circle. Communities: circular icons.

## 6. Layout & Spacing

- Three-column desktop layout: left nav (about 270px), feed (max about 750px), right rail (about 316px). Total max about 1440px.
- Collapses to single column under about 960px; left nav becomes a drawer.
- Spacing base 4px; common 8, 12, 16, 20, 24.
- Feed density: medium-high. Divider-separated posts with 4-8px between.
- Comment indent about 16px per level, capped deep threads link to "Continue this thread".

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation appears only on menus, popovers, modals and the sticky top bar (thin bottom border, no shadow).
- Menu shadow `0 4px 12px rgba(0,0,0,0.12)`; modal `0 8px 32px rgba(0,0,0,0.2)` (approximate).
- Hover: background fill change to `#F6F8F9`, 100ms.
- Votes: arrow fills and a small bounce of the score; awards play a short animation.
- Feed media autoplay muted; no parallax.

## 8. Iconography & Imagery

- **Icons:** Reddit's own icon set, 20px default on a 20 grid, two styles: outline (default) and fill (active). Rounded joins, friendly shapes (upvote arrows have a rounded head).
- **Snoo:** appears in empty states, errors, onboarding and marketing, often in poses (arms crossed, waving).
- **User content:** images and video are the main imagery; the UI never tints or filters them.
- **Marketing:** flat illustration with OrangeRed, white and dark ink, plus Snoo.

## 9. Voice & Microcopy

Tone: casual, community-minded, a bit wry. Plain labels in the UI; personality in empty states and marketing.

- Sentence case for buttons and headings.
- Uses Reddit vocabulary: upvote, downvote, karma, r/, u/, OP, mods.

Sample strings:

- "Search Reddit"
- "Log In" / "Sign Up" (title case on auth buttons)
- "Join"
- "Create Post"
- "Add a comment"
- "Sort by: Best"
- "Show more comments"
- "Continue this thread"
- "Hmm... u/name hasn't posted yet"
- "Popular" / "All" / "Explore"

## 10. Do's and Don'ts

**Do**

- Use OrangeRed `#FF4500` for the logo and a slightly deeper orange for buttons.
- Make every button, search field and chip a pill.
- Build around a feed of divider-separated posts with a vote pill and action pills.
- Use Reddit Sans (it is free on Google Fonts).
- Show communities as `r/name` with round icons.
- Keep neutrals cool and quiet.

**Don't**

- Don't put heavy shadows or borders on every post.
- Don't use square buttons.
- Don't recolour or redraw Snoo in the logo.
- Don't use OrangeRed for large backgrounds in the product UI.
- Don't title-case user post titles or change them.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Reddit. Font Reddit Sans (Google Fonts) for everything; Reddit Mono for code. White page, text `#0F1A1C`, meta grey `#576F76`, dividers `#DCE3E6`, secondary fills `#E5EBEE`, hover `#F6F8F9`. Brand OrangeRed `#FF4500` for the logo only; primary buttons use `#D93900` with white text. All buttons, the search field, chips and vote controls are pills (`border-radius: 9999px`), 40px tall default, 14px weight 600 labels. Layout: 56px top bar with logo, centred pill search ("Search Reddit"), "Log In" (grey pill) and "Sign Up" (orange pill); left rail 270px with Home, Popular, Explore and community list; centre feed max 750px; right rail 316px with an About card on `#F6F8F9`, 16px radius. Posts: 24px community icon, `r/name` 12px bold, time ago, title 18px weight 600, optional media in a 16px-radius frame, then an action row: vote pill (up arrow, score, down arrow; upvoted turns `#D93900`, downvoted `#6A5CFF`), comments pill with count, share pill. Comments nest with 1px vertical thread lines and 16px indents. Mostly flat; menus get `0 4px 12px rgba(0,0,0,0.12)`. Dark mode: page `#0E1113`, surfaces `#181C1F`, text `#F2F4F5`, muted `#B7CAD4`.

```css
:root {
  --reddit-orangered: #FF4500;
  --reddit-action: #D93900;
  --reddit-action-hover: #AE2C00;
  --reddit-downvote: #6A5CFF;
  --reddit-join: #0A449B;
  --reddit-ink: #0F1A1C;
  --reddit-meta: #576F76;
  --reddit-border: #DCE3E6;
  --reddit-fill: #E5EBEE;
  --reddit-hover: #F6F8F9;
  --reddit-bg: #FFFFFF;
  --reddit-night: #0E1113;
  --reddit-night-surface: #181C1F;
  --reddit-night-raised: #2A3236;
  --reddit-night-text: #F2F4F5;
  --reddit-night-muted: #B7CAD4;
  --reddit-font: "Reddit Sans", -apple-system, "Segoe UI", sans-serif;
  --reddit-font-mono: "Reddit Mono", ui-monospace, monospace;
  --reddit-radius-sm: 8px;
  --reddit-radius: 16px;
  --reddit-radius-lg: 24px;
  --reddit-radius-pill: 9999px;
  --reddit-shadow-menu: 0 4px 12px rgba(0,0,0,0.12);
  --reddit-shadow-modal: 0 8px 32px rgba(0,0,0,0.2);
}
```

---

Values are observed from the public product and Reddit's published brand page; this file is an unofficial reference and is not affiliated with or endorsed by Reddit, Inc.

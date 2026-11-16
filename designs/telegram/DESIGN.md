---
name: Telegram
slug: telegram
url: https://telegram.org
category: Social
tagline: "Sky-blue paper plane, light green bubbles over patterned wallpaper, fast and plain."
updated: 2026-11-16
appStoreId: 686449807
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Telegram Blue
    hex: "#2AABEE"
    role: Logo circle top, app icon, brand blue
  - name: Primary
    hex: "#3390EC"
    role: Interactive blue in Telegram Web, links, send button, selected chat
  - name: Outgoing Bubble
    hex: "#E1FFC7"
    role: Own message background (light theme)
  - name: White
    hex: "#FFFFFF"
    role: Chat list, sidebar, incoming bubble
  - name: Night Background
    hex: "#212121"
    role: Dark theme background
  - name: Night Accent
    hex: "#8774E1"
    role: Dark theme accent and links in Telegram Web
  - name: Logo Blue Deep
    hex: "#229ED9"
    role: Bottom of the logo gradient
  - name: Site Blue
    hex: "#2481CC"
    role: Buttons and links on telegram.org
  - name: Text
    hex: "#000000"
    role: Primary text (light)
  - name: Secondary Text
    hex: "#707579"
    role: Timestamps, previews, icons
  - name: Border
    hex: "#DADCE0"
    role: Dividers, input borders
  - name: Hover
    hex: "#F4F4F5"
    role: Chat row hover, secondary background
  - name: Meta Green
    hex: "#4FAE4E"
    role: Read ticks and meta text inside own bubbles
  - name: Online Green
    hex: "#00C73E"
    role: Online dot, success
  - name: Error
    hex: "#E53935"
    role: Destructive actions, errors
  - name: Own Bubble Dark
    hex: "#766AC8"
    role: Own message background (dark theme)
fonts:
  display:
    family: "Roboto / SF Pro (system)"
    fallback: "Roboto"
    weights: [500, 700]
  body:
    family: "Roboto / SF Pro (system)"
    fallback: "Roboto"
    weights: [400, 500]
  mono:
    family: "Cascadia Mono / Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Site Title, size: 36, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Header, size: 20, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Chat Title, size: 16, weight: 500, lineHeight: 1.375, tracking: "0" }
  - { role: Message, size: 16, weight: 400, lineHeight: 1.3125, tracking: "0" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Preview, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Meta, size: 12, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 6, md: 16, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Bubble, value: "0 1px 2px rgba(114,114,114,0.25)" }
  - { name: Menu, value: "0 4px 16px rgba(114,114,114,0.25)" }
  - { name: Site box, value: "0 2px 4px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F5"
  text: "#000000"
  muted: "#707579"
  border: "#DADCE0"
  accent: "#3390EC"
  accentText: "#FFFFFF"
  radius: 16
  buttonStyle: solid
---

# Telegram

## 1. Visual Theme & Atmosphere

Telegram looks like a tool, not a magazine. Its identity is a sky-blue circle with a white paper plane, and the product is a plain, fast messenger: a white chat list on the left, a chat on the right over a soft patterned wallpaper, and rounded message bubbles (white for incoming, pale green `#E1FFC7` for your own in the default light theme).

What makes it recognisable:

- **The paper plane.** White plane on a blue gradient circle (`#2AABEE` to `#229ED9`). It shows up on the app icon, favicons, "Open in Telegram" buttons and t.me pages.
- **Wallpaper and bubbles.** Chats sit on a green-to-yellow gradient wallpaper with a faint doodle pattern of tiny icons. Bubbles have a tail on the last message of a group and very round corners (about 15-16px).
- **Blue interactive layer.** In the apps and Telegram Web the interactive blue is `#3390EC`: send button, links, the selected chat row, checkboxes, toggles.
- **System fonts.** Roboto on Android and web, SF Pro on Apple. No custom brand typeface.
- **The old website.** telegram.org is famously minimal and a bit dated: Lucida Grande or system font at 12-14px, small centered phone screenshots, blue `#2481CC` links. It has not been redesigned in years and that is part of the brand.
- **Dark theme** is a big part of how people use it: `#212121` background, purple-ish accent `#8774E1`, own bubbles `#766AC8` in Telegram Web.

Mood words: fast, plain, private, friendly, utilitarian.

## 2. Color Palette & Roles

Values below are from the live CSS of telegram.org and Telegram Web A (`web.telegram.org/a`), read today.

| Name | Hex | Role |
|---|---|---|
| Telegram Blue | `#2AABEE` | Logo top, app icon (brand blue) |
| Logo Blue Deep | `#229ED9` | Logo gradient bottom |
| Primary (Web) | `#3390EC` | `--color-primary`, links, send, selected chat |
| Primary shade | `#2F84D9` | Hover on primary |
| Primary shade darker | `#2B79C6` | Pressed primary |
| Site Blue | `#2481CC` | `--accent-btn-color` and links on telegram.org |
| Site hover | `#1A8AD5` | Link and button hover on telegram.org |
| White | `#FFFFFF` | `--color-background`, incoming bubble |
| Secondary bg | `#F4F4F5` | Hover, search field, secondary surfaces |
| Sidebar bg | `#E4E4E5` | Secondary accent background |
| Outgoing bubble | `#E1FFC7` | `--color-background-own` |
| Outgoing selected | `#C6FF94` | Own bubble when selected |
| Text | `#000000` | Primary text |
| Text secondary | `#707579` | Meta, previews, icons |
| Meta | `#686C72` | Timestamps |
| Borders | `#DADCE0` | Inputs, dividers |
| Dividers | `#C8C6CC` | List separators |
| Placeholder | `#A2ACB4` | Input placeholder |
| Chat username | `#3C7EB0` | Usernames in lists |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Online / success | `#00C73E` | Online dot, success toasts |
| Own meta / read ticks | `#4FAE4E` | Double checkmarks and time in own bubbles |
| Error | `#E53935` | Delete, errors (`#D33431` on hover) |
| Warning | `#FB8C00` | Warnings |
| Stars | `#FFAA00` | Telegram Stars currency |
| Heart | `#FF3C32` | Heart reaction |
| Archive / deleted | `#9EAAB5` | Archived chats avatar, deleted account |

### Dark theme (Telegram Web A)

| Token | Hex |
|---|---|
| Background | `#212121` |
| Secondary background | `#0F0F0F` |
| Hover / selected | `#2C2C2C` |
| Own bubble | `#766AC8` |
| Accent and links | `#8774E1` |
| Text | `#FFFFFF` |
| Secondary text | `#AAAAAA` |
| Borders | `#303030` |
| Dividers | `#3B3B3D` |

Native iOS and Android dark themes ("Night", "Tinted") differ slightly: iOS Night is near-black with blue accent `#3E88F7` (approximate).

### Avatar colors

Users without a photo get a gradient circle with initials. The seven classic colors are red, orange, violet, green, cyan, blue and pink, each a top-to-bottom gradient (approximate: `#FF885E`→`#FF516A`, `#FFCD6A`→`#FFA85C`, `#82B1FF`→`#665FFF`, `#A0DE7E`→`#54CB68`, `#53EDD6`→`#28C9B7`, `#72D5FD`→`#2A9EF1`, `#E0A2F3`→`#D669ED`).

## 3. Typography

**Family:** no brand font. Telegram Web uses `"Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", ...`. iOS and macOS apps use SF Pro; Android uses Roboto. telegram.org still defaults to `"Lucida Grande", "Lucida Sans Unicode", Arial` at 12px/18px, switching to the system stack when native fonts are on.

**Extras:** rounded numerals for counters (`ui-rounded, "Nunito"`), Roboto Condensed for some labels, and `"Cascadia Mono", "Roboto Mono"` for code blocks.

**Fallback:** **Roboto** from Google Fonts; **Roboto Mono** for code; **Nunito** for rounded counters.

### Scale (Telegram Web and apps)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Site title (telegram.org h1) | 36px | 500 | 1.2 |
| Header / chat header title | 16-20px | 500 | 1.3 |
| Chat list name | 16px | 500 | 22px |
| Message text | 16px (15px on mobile web) | 400 | 21px |
| Body / settings rows | 15px | 400 | 1.4 |
| Last message preview | 14-15px | 400 | 1.4 |
| Meta (time, counters) | 12px | 400 | 1.3 |
| Section caption | 14px | 500 | 1.3, colored primary |

### Rules

- Sentence case for buttons and headings. Uppercase only for very small dialog actions on Android ("CANCEL", "OK") in older Material styles; modern builds use sentence case.
- Chat names and section titles are medium weight (500), never bold 700.
- Timestamps are 24-hour or locale format, 12px, secondary color, right-aligned in bubbles.
- Unread counters are rounded pills with rounded numerals.

## 4. Logo & Brand Mark

The logo is a **white paper plane inside a blue circle**. The circle has a subtle vertical gradient (`#2AABEE` top to `#229ED9` bottom). The plane points up and right with a folded inner wing in a pale blue tint (`#C8DAEA` and `#A9C6D8` in older versions; current flat versions use solid white).

- **Wordmark:** "Telegram" set in a clean sans in dark grey (`#363B40` on telegram.org) next to the circle.
- **App icon:** the plane on a full-bleed blue gradient square, no circle.
- **Clear space:** at least a quarter of the circle diameter on each side.
- **Minimum size:** 24px for the circle mark.
- **Color versions:** blue circle with white plane (primary), white circle with blue plane on blue backgrounds, monochrome white or black.

Misuse:

- Do not rotate the plane or flip its direction.
- Do not use the dark-theme purple for the logo.
- Do not add outlines, shadows or extra gradients.
- Do not put the plane alone without a circle except in the app icon.

## 5. Components

### Buttons

| Variant | Background | Text | Radius | Height |
|---|---|---|---|---|
| Primary (Web) | `#3390EC` | `#FFFFFF` 16px/500 | 12px (or 28px pill in newer builds) | 48-56px |
| Secondary / text | transparent | `#3390EC` 16px/500 | 12px | 40-48px |
| Destructive text | transparent | `#E53935` | 12px | 40-48px |
| Site button (telegram.org) | `#2481CC` | `#FFFFFF` 14px | 999px pill | about 40px |
| Floating action (compose) | `#3390EC` | white pencil icon | 50% | 56px |

States: hover `#2F84D9`, pressed `#2B79C6`, ripple effect from the touch point on web and Android, disabled at 50% opacity. Focus ring is subtle: 2px `#3390EC` at 40-50% alpha.

### Chat list (left column)

- Width about 420px on desktop web (min 256px), white background.
- Top bar: hamburger menu, then a pill search field "Search" (`#F4F4F5` fill, 44px tall, 22px radius, search icon left). Focus turns the border `#3390EC`.
- Rows 72px tall: 54px circular avatar, name 16px/500, preview 15px secondary, time 12px top right, unread counter pill bottom right (`#3390EC` or grey `#C4C9CC` for muted chats), pinned icon, read ticks in green.
- Hover `#F4F4F5`; selected row fills `#3390EC` with white text.
- Folder tabs across the top ("All chats", "Personal", "Unread") with a 3px rounded blue underline.

### Message bubbles

- Max width about 480px within a 760px (`47.5rem`) chat column.
- Radius 15px (`--border-radius-messages: .9375rem`), 6px on the corner where consecutive bubbles meet, with a tail on the last bubble.
- Incoming: white. Own: `#E1FFC7` with meta text and read ticks in `#4FAE4E`.
- Padding about 6px 8px 8px 10px. Time and ticks float inside the bottom-right of the bubble.
- Shadow `0 1px 2px rgba(114,114,114,0.25)`.
- Reactions sit under text as small pills (`#EBF3FD` incoming, `#CEF0BA` own), the chosen one filled blue.
- Reply previews: a 2px colored left bar plus name and one-line quote inside the bubble.

### Composer

White rounded rectangle (about 16px radius) floating above the wallpaper with emoji button, "Message" placeholder, attach paperclip and a round send/mic button. The send button turns `#3390EC` when there is text.

### Chat header

56px, white, avatar 40px, name 16px/500, status line "online" (blue) or "last seen recently" (secondary). Icons on the right: search, call, more.

### Menus and modals

- Context menus: white at 73% with backdrop blur (`#FFFFFFBB`), 16px radius (`--border-radius-menu`), items 36-40px with 20px icons, shadow `0 4px 16px rgba(114,114,114,0.25)`.
- Modals: white, radius 32px on new builds (`--border-radius-modal: 2rem`), title 20px/500, buttons right-aligned as blue text buttons.
- Toasts: `#202020CC` with white text, 16px radius, bottom center.

### Inputs and toggles

- Text field: 54px, 12px radius, 1px `#DADCE0` border, floating label that shrinks and turns `#3390EC` on focus.
- Checkbox: rounded square that fills `#3390EC` with a white check; radio is a blue ring.
- Switch: 34x14 track `#C4C9CC`, knob white with border; on state `#3390EC`.

### telegram.org page components

- Centered 680-1000px column, blue links `#2481CC`, small gray secondary text `#7D7F81`.
- "Recent News" list with date badges and blog cards.
- Download blocks: app name in blue, platform icon, small phone screenshot.
- The "Why Telegram?" grid of nine round icons (Simple, Private, Synced, Fast, Powerful, Open, Secure, Social, Expressive).

## 6. Layout & Spacing

- **Desktop web:** three panes: chat list (about 420px), chat (flex, messages capped at 760px wide and centered), optional right info column (about 420px).
- **Mobile:** single column; chat list with a bottom tab bar on iOS (Contacts, Calls, Chats, Settings).
- **Spacing:** 4, 8, 12, 16, 20, 24px steps; list rows have 8px horizontal inset with 12px radius on hover in newer web builds.
- **Breakpoints (web):** about 600px (mobile), 925px (two panes), 1275px (right column can open beside the chat).
- **Density:** tight but readable. Rows 72px, messages stacked 2-4px apart within a group and 8-12px between groups.

## 7. Depth, Elevation & Motion

- Shadows are light and grey: bubbles `0 1px 2px rgba(114,114,114,0.25)`, menus `0 4px 16px rgba(114,114,114,0.25)`, site boxes `0 2px 4px rgba(0,0,0,0.1)`.
- Blur: menus and the reaction picker use backdrop blur on a translucent white or `#212121DD` panel.
- **Layer transitions:** panels slide with `.3s cubic-bezier(.33,1,.68,1)`; on capable devices the slide is longer, `.65s cubic-bezier(.22,1,.36,1)`, with the previous layer dimming to 10%.
- Messages pop in from the composer with a short scale and translate. Stickers and animated emoji run as Lottie-style vector animations.
- Ripple effect on press across web and Android.

## 8. Iconography & Imagery

- **Icons:** custom outline set, about 24px with 1.5-2px rounded strokes, filled variants for active tabs. Secondary color `#707579`, blue when active.
- **Wallpapers:** soft multi-point gradients (green, yellow, teal) with a faint pattern of small doodles at low opacity. In dark mode the pattern sits on near-black.
- **Stickers and emoji:** large animated stickers are a core part of chats; Telegram renders its own emoji set.
- **Site imagery:** small phone and desktop screenshots, flat round icons in blue.
- No stock photography.

## 9. Voice & Microcopy

Plain, brief and a little proud. Product names are simple nouns. Features are described with one-line facts.

- Site: "a new era of messaging", "Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed."
- "Why Telegram?" grid: "Simple", "Private", "Fast", "Powerful", with lines like "Telegram delivers messages faster than any other application." The live site says groups "can hold up to 200,000 members" (read today).
- UI: "Search", "Message", "last seen recently", "online", "Pinned Message", "Join Channel", "Open in Telegram", "Send Message".
- Status: "Saved Messages", "Archived Chats", "Secret Chat".

## 10. Do's and Don'ts

**Do**

- Use `#3390EC` for interactive elements and `#2AABEE` for the logo.
- Put chats on a soft patterned gradient wallpaper with white and pale green bubbles.
- Use Roboto or the platform system font at weight 400/500.
- Keep bubbles round (15-16px) with a small tail on the last one.
- Show read ticks, timestamps and counters in the small 12px meta style.
- Offer a dark theme with `#212121` and purple-blue accents.

**Don't**

- Don't use a custom display font or heavy bold headlines.
- Don't use sharp corners on bubbles, menus or modals.
- Don't make the chat background pure flat grey; it should feel like wallpaper.
- Don't put the plane on a non-blue circle.
- Don't use marketing-style hero sections in the app; the product is the UI.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Telegram Web. Two-pane layout: a 420px white chat list on the left and a chat on the right over a soft green-yellow gradient wallpaper with a faint doodle pattern. Font: `"Roboto", -apple-system, "Segoe UI", sans-serif`, weights 400 and 500 only. Interactive blue is `#3390EC` (hover `#2F84D9`): send button, links, unread counters, selected chat row (filled blue, white text). Chat rows are 72px with 54px round avatars, name 16px/500, preview 15px `#707579`, time 12px. Search is a pill field on `#F4F4F5`. Messages: incoming bubbles white, own bubbles `#E1FFC7` with green `#4FAE4E` time and read ticks, 15px radius with a small tail, shadow `0 1px 2px rgba(114,114,114,0.25)`, column max 760px. Menus are translucent white with blur, 16px radius. Modals have 24-32px radius. Dark theme: background `#212121`, own bubbles `#766AC8`, accent `#8774E1`. Panels slide with `cubic-bezier(.33,1,.68,1)` over 300ms. Logo: white paper plane on a `#2AABEE` circle.

```css
:root {
  --brand-blue: #2AABEE;
  --brand-blue-deep: #229ED9;
  --brand-primary: #3390EC;
  --brand-primary-hover: #2F84D9;
  --brand-primary-active: #2B79C6;
  --brand-site-blue: #2481CC;
  --brand-bg: #FFFFFF;
  --brand-bg-secondary: #F4F4F5;
  --brand-bg-own: #E1FFC7;
  --brand-text: #000000;
  --brand-text-secondary: #707579;
  --brand-text-meta: #686C72;
  --brand-meta-own: #4FAE4E;
  --brand-border: #DADCE0;
  --brand-divider: #C8C6CC;
  --brand-placeholder: #A2ACB4;
  --brand-success: #00C73E;
  --brand-error: #E53935;
  --brand-warning: #FB8C00;
  --brand-stars: #FFAA00;
  --brand-dark-bg: #212121;
  --brand-dark-bg-secondary: #0F0F0F;
  --brand-dark-own: #766AC8;
  --brand-dark-accent: #8774E1;
  --brand-dark-text-secondary: #AAAAAA;
  --brand-font: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
  --brand-font-mono: "Cascadia Mono", "Roboto Mono", "SF Mono", Menlo, monospace;
  --brand-font-rounded: ui-rounded, "Nunito", "Roboto", sans-serif;
  --brand-radius-tiny: 6px;
  --brand-radius-small: 10px;
  --brand-radius-message: 15px;
  --brand-radius: 16px;
  --brand-radius-island: 24px;
  --brand-radius-modal: 32px;
  --brand-radius-button: 28px;
  --brand-shadow-bubble: 0 1px 2px rgba(114,114,114,0.25);
  --brand-shadow-menu: 0 4px 16px rgba(114,114,114,0.25);
  --brand-ease: cubic-bezier(.33,1,.68,1);
  --brand-ease-slow: cubic-bezier(.22,1,.36,1);
  --brand-duration: 300ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Telegram.

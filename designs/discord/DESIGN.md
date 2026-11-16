---
name: Discord
slug: discord
url: https://discord.com
category: Social
tagline: "Blurple chat app for friend groups: dark three-column UI, rounded avatars, loud type."
updated: 2026-11-16
appStoreId: 985746746
logoBackground: "#5865F2"
theme: dark
colors:
  - name: Blurple
    hex: "#5865F2"
    role: Brand color, primary buttons, logo tile, selected states
  - name: Not Quite Black
    hex: "#23272A"
    role: Brand black, dark marketing sections, text on white buttons
  - name: Green
    hex: "#57F287"
    role: Brand accent, online and success
  - name: Yellow
    hex: "#FEE75C"
    role: Brand accent, highlights and illustrations
  - name: Fuchsia
    hex: "#EB459E"
    role: Brand accent, Nitro and playful highlights
  - name: Red
    hex: "#ED4245"
    role: Brand accent, destructive actions and mentions badge
  - name: Chat Background
    hex: "#313338"
    role: App message area (dark theme, approx.)
  - name: Sidebar
    hex: "#2B2D31"
    role: App channel list and member list (approx.)
  - name: Server Rail
    hex: "#1E1F22"
    role: App far-left server column and inputs on dark (approx.)
  - name: Text Normal
    hex: "#DBDEE1"
    role: Message text on dark (approx.)
  - name: Text Muted
    hex: "#949BA4"
    role: Timestamps, channel names, secondary text (approx.)
  - name: Off White
    hex: "#F6F6F6"
    role: Light marketing sections
  - name: Dark Blurple
    hex: "#3442D9"
    role: Blurple hover and pressed
  - name: Link Blue
    hex: "#00A8FC"
    role: Links inside chat (approx.)
fonts:
  display:
    family: "ABC Ginto Nord"
    fallback: "Archivo Black"
    weights: [800]
  body:
    family: "gg sans"
    fallback: "Plus Jakarta Sans"
    weights: [400, 500, 600, 700]
  mono:
    family: "gg mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 56, weight: 800, lineHeight: 1.1, tracking: "0" }
  - { role: Section, size: 40, weight: 800, lineHeight: 1.15, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: App Header, size: 16, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Message, size: 16, weight: 400, lineHeight: 1.375, tracking: "0" }
  - { role: Channel, size: 16, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Label, size: 12, weight: 600, lineHeight: 1.33, tracking: "0.02em" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96]
shadows:
  - { name: Low, value: "0 1px 0 rgba(4,4,5,0.2), 0 1.5px 0 rgba(6,6,7,0.05), 0 2px 0 rgba(4,4,5,0.05)" }
  - { name: Popout, value: "0 8px 16px rgba(0,0,0,0.24)" }
  - { name: Marketing Card, value: "0 8px 15px rgba(0,0,0,0.2)" }
preview:
  bg: "#313338"
  surface: "#2B2D31"
  text: "#DBDEE1"
  muted: "#949BA4"
  border: "#1E1F22"
  accent: "#5865F2"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Discord

## 1. Visual Theme & Atmosphere

Discord has two faces that share one color. The **app** is a dense, dark, three-column chat client: a narrow rail of round server icons on the far left, a channel list, then the message feed with a member list on the right. The **marketing site** (discord.com) is loud and playful: deep purple-black backgrounds, huge uppercase headlines in a heavy extended face (ABC Ginto Nord), 3D illustrations, and big rounded buttons in white and blurple.

What makes it recognisable:

- **Blurple `#5865F2`.** A saturated blue-violet used for the logo tile, primary buttons, the selected server pill and mention highlights. Everything else stays neutral grey so blurple reads instantly.
- **Clyde.** The game-controller-shaped face in the logo shows up as the app icon, the home button at the top of the server rail and the favicon.
- **Dark by default.** The client ships dark (charcoal greys around `#313338`), with a light theme and newer darker "Onyx/Midnight" style options. Marketing pages are dark too.
- **Shouty display type.** Marketing headlines are set in Ginto Nord at 800, often uppercase ("MAKE YOUR GROUP CHATS MORE FUN"). In the app, type is gg sans, friendly and compact.
- **Round everything.** Avatars are circles, server icons are circles that morph into rounded squares on hover, buttons on the site are pills.

Mood words: playful, social, nocturnal, game-adjacent, a little chaotic.

## 2. Color Palette & Roles

The brand palette comes from Discord's public brand guidelines and the marketing CSS (`--blurple`, `--green`, `--yellow`, `--fuchsia`, `--red`, `--not-quite-black`). App surface greys are approximate; the client is not public CSS and changed in the 2025 visual refresh.

| Name | Hex | Role |
|---|---|---|
| Blurple | `#5865F2` | Primary brand color, buttons, selected state |
| Dark Blurple | `#3442D9` | Hover and pressed on blurple |
| Button Hover (site) | `#8891F2` | Lighter blurple hover on marketing buttons |
| Purple | `#808AFF` | Soft blurple for illustrations |
| Green | `#57F287` | Brand accent, online status in marketing art |
| Yellow | `#FEE75C` | Brand accent |
| Fuchsia | `#EB459E` | Brand accent, Nitro gradients |
| Red | `#ED4245` | Brand accent, danger, notification badge |
| Not Quite Black | `#23272A` | Brand black, text on white pills |
| Dark Charcoal | `#2C2F33` | Dark marketing cards |
| Greyple | `#99AAB5` | Muted text on marketing pages |
| Off White | `#F6F6F6` | Light sections |
| White | `#FFFFFF` | Text on dark, white pill buttons |

### App surfaces (dark theme, approx.)

| Token | Hex | Use |
|---|---|---|
| Background primary | `#313338` | Message area |
| Background secondary | `#2B2D31` | Channel sidebar, member list |
| Background tertiary | `#1E1F22` | Server rail, search, message input frame |
| Modifier hover | `rgba(78,80,88,0.3)` | Hovered channel or message row |
| Modifier selected | `rgba(78,80,88,0.6)` | Selected channel |
| Header primary | `#F2F3F5` | Channel title, usernames |
| Text normal | `#DBDEE1` | Message body |
| Text muted | `#949BA4` | Timestamps, category labels |
| Interactive normal | `#B5BAC1` | Icons, inactive channel names |
| Link | `#00A8FC` | Links in messages |
| Mention row | `rgba(250,168,26,0.1)` with `#F0B232` left bar | Message that mentions you |

### Status colors (approx.)

| State | Hex |
|---|---|
| Online | `#23A55A` |
| Idle | `#F0B232` |
| Do Not Disturb | `#F23F43` |
| Streaming | `#593695` |
| Offline | `#80848E` |

### Light theme

The light theme swaps surfaces to `#FFFFFF` (chat), `#F2F3F5` (sidebar) and `#E3E5E8` (rail), with text `#313338` and muted `#5C5E66` (approx.). Blurple and status colors stay the same.

## 3. Typography

**Families:**

- **gg sans**: Discord's own UI typeface (introduced 2022), used for the whole app and most body copy on the site. Not licensed for reuse. Free stand-in: **Plus Jakarta Sans** or **Inter**, set slightly tighter.
- **ABC Ginto Nord** (weight 800, sometimes italic): the wide heavy face for marketing headlines and the wordmark. Commercial (Dinamo). Free stand-in: **Archivo Black**, or **Archivo** at 800 with `font-stretch: 125%`.
- **ABC Ginto Normal**: used for some marketing body and buttons.
- **gg mono**: code blocks in chat. Stand-in: **JetBrains Mono** or **Source Code Pro**.

```css
font-family: "gg sans", "Plus Jakarta Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Tracking | Notes |
|---|---|---|---|---|---|
| Hero (site) | 56px (approx., up to 72 on wide) | 800 Ginto Nord | 1.1 | 0 | Often uppercase |
| Section heading | 40px | 800 Ginto Nord | 1.15 | 0 | Uppercase or sentence case |
| Lead | 20px | 400 | 1.6 | 0 | Marketing paragraphs |
| App header | 16px | 600 | 1.25 | 0 | Channel name in top bar |
| Message | 16px | 400 | 1.375 | 0 | Chat body, `#DBDEE1` |
| Username | 16px | 500 | 1.375 | 0 | Colored by role color |
| Channel item | 16px | 500 | 1.25 | 0 | Sidebar |
| Category label | 12px | 600 | 1.33 | 0.02em | UPPERCASE, `#949BA4` |
| Timestamp | 12px | 500 | 1.33 | 0 | Muted |

**Rules:** site headlines may be all caps; in the app only category labels ("TEXT CHANNELS") are. Keep app type at 14-16px.

## 4. Logo & Brand Mark

- **Symbol:** Clyde, a rounded controller-shaped face with two eyes. Flat, single color.
- **Wordmark:** "Discord" in a custom heavy rounded face based on Ginto, set to the right of the symbol in the horizontal lockup.
- **Colors:** blurple on white, white on blurple, white on black, black on white. No gradients, no outlines.
- **App icon:** white Clyde centred on a blurple square.
- **Clear space:** at least the height of Clyde's eye on all sides (approx.).
- **Minimum size:** symbol 24px, lockup 100px wide (approx.).
- **Misuse:** do not recolor Clyde in brand accents (green, fuchsia), add shadows, stretch, or put blurple logo on busy photography.

## 5. Components

### Buttons (marketing site)

```css
.dc-btn-primary {            /* "Open Discord in your browser" */
  background: #5865F2; color: #FFFFFF;
  font: 500 20px/24px "gg sans", sans-serif;
  padding: 16px 32px; border-radius: 28px; min-height: 56px;
  transition: all .2s;
}
.dc-btn-primary:hover { background: #8891F2; box-shadow: 0 8px 15px rgba(0,0,0,.2); }

.dc-btn-white {              /* "Download for Mac", nav "Log In" */
  background: #FFFFFF; color: #23272A;
  font: 700 14px/24px "gg sans", sans-serif;
  padding: 7px 16px; border-radius: 40px;
}
.dc-btn-white:hover { color: #5865F2; box-shadow: 0 8px 15px rgba(0,0,0,.2); }

.dc-btn-dark { background: #23272A; color: #FFFFFF; border-radius: 28px; padding: 16px 32px; }
```

### Buttons (app)

| Variant | Background | Text | Hover |
|---|---|---|---|
| Brand | `#5865F2` | `#FFFFFF` | `#4752C4` (approx.) |
| Secondary | `#4E5058` | `#FFFFFF` | `#6D6F78` |
| Success | `#248046` | `#FFFFFF` | `#1A6334` |
| Danger | `#DA373C` | `#FFFFFF` | `#A12828` |
| Link | transparent | `#00A8FC` | underline |

App buttons: 38px tall (32px small), padding 2px 16px, radius 3-4px in the classic client and 8px in the refreshed client (approx.), 14px weight 500.

### Server rail

72px wide, `#1E1F22`. Each server is a 48px circle with a 4px gap; on hover the circle morphs to a 16px-radius rounded square over 150ms and turns blurple if it has no image. A white pill indicator (8px tall unread, 20px hover, 40px selected) sits on the left edge.

### Channel list

240px wide, `#2B2D31`. Server name header 48px tall with a bottom shadow. Category labels 12px uppercase. Channel rows 34px tall, 8px left padding, radius 4px, `#` or speaker icon in `#80848E`. Selected row uses the selected modifier and white text. User panel at the bottom: 52px, avatar 32px, mic/headphone/settings icons.

### Message row

Group by author. First message: 40px round avatar, username (role color, 500), timestamp 12px muted, then body 16px. Follow-ups have no avatar and show a timestamp on hover. Hover row tint `rgba(2,2,2,0.06)` on dark. Reactions: pills 24px tall, `#2B2D31` with 1px border, blurple border and tint when you reacted.

### Message input

Bottom of the chat, 16px margin, `#383A40` fill (approx.), radius 8px, 44px min height, "+" upload button on the left, gift/GIF/sticker/emoji icons on the right. Placeholder "Message #general".

### Badges and pills

- **Mention badge:** red `#F23F43` pill, white 12px bold count, 16px tall, sits on the server icon bottom-right with a 3px rail-colored ring.
- **Role pill:** 1px border in role color with a colored dot.
- **NEW / BETA tag:** blurple fill, 10px bold uppercase, radius 4px.

### Avatars

Always circular, with a status dot (10px on 32px avatars) cut into the bottom-right with a ring in the surface color.

### Modals

Centered, 440px wide, `#313338`, radius 8px, header 20-24px bold, footer bar in `#2B2D31` with right-aligned buttons, backdrop `rgba(0,0,0,0.85)`. Opens with a small scale-up (0.95 to 1) over 200ms.

### Marketing feature cards

Large rounded panels (radius 16-48px), dark charcoal or deep purple, with a 3D illustration bleeding out of the card edge. Headline inside in Ginto Nord.

## 6. Layout & Spacing

- **App:** fixed columns (72 / 240 / flexible / 240). Header bar 48px. Base spacing 8px, with 4px steps inside dense rows. Message padding 16px left of avatar column (72px gutter for grouped messages).
- **Site:** max content width about 1260px (approx.), centered, 40px side padding on desktop, 24px on mobile. Sections 96-160px apart. Hero is full-bleed with illustration.
- **Breakpoints (site CSS):** 479, 767, 991, 1280, 1440, 1920px.
- **Density:** app is dense (34px rows, 16px text); marketing is airy with oversized type.

## 7. Depth, Elevation & Motion

- **Elevation in the app** is mostly color, not shadow: darker greys sit "behind" lighter ones. Headers use a hairline low shadow `0 1px 0 rgba(4,4,5,0.2)`.
- **Popouts** (profiles, menus): `0 8px 16px rgba(0,0,0,0.24)`, radius 8px, `#111214` fill (approx.).
- **Marketing hover:** cards tilt and translate a few pixels (`translate(7px,11px) rotate(-1.6deg)` in the CSS), buttons gain `0 8px 15px rgba(0,0,0,0.2)`.
- **Durations:** 100-200ms for hovers, 150ms for the server icon morph, 200ms for modals. Easing `cubic-bezier(0.4, 0, 0.2, 1)` (approx.).
- Emoji and sticker animation, confetti on Nitro, and a bouncing Wumpus are part of the personality; keep them to reward moments.

## 8. Iconography & Imagery

- **Icons:** filled and outlined 24px glyphs with rounded ends, 2px strokes, drawn in-house. Colored `#B5BAC1` on dark, white on hover.
- **Illustration:** chunky 3D characters (Wumpus, blobs, game props), neon purples, pinks and greens, floating in space. Marketing uses these instead of photography.
- **Avatars and server icons** are user content; frame them in circles and let them carry color. Emoji are Twemoji-style.

## 9. Voice & Microcopy

Casual, a little cheeky, lowercase-friendly. Speaks like a friend in the group chat.

- Hero (read on discord.com today): "Group chat that's all fun & games"
- Sections: "MAKE YOUR GROUP CHATS MORE FUN", "Hop in when you're free, no need to call", "YOU CAN'T SCROLL ANYMORE. BETTER GO CHAT."
- CTAs: "Download for Mac", "Open Discord in your browser", "Log In"
- App: "Message #general", "Add Friend", "Create My Own", "Join a Server", "Mark As Read"
- Empty state: "Wumpus is waiting on friends. You don't have to though!"

Sentence case in the app; ALL CAPS is fine for marketing headlines only.

## 10. Do's and Don'ts

**Do**

- Use blurple `#5865F2` for the one primary action per view.
- Keep the app dark with layered greys (`#1E1F22`, `#2B2D31`, `#313338`).
- Use circles for avatars and server icons, pills for marketing buttons.
- Set marketing headlines in a heavy extended face, uppercase when it shouts.
- Color usernames with role colors and leave message text neutral.

**Don't**

- Don't use pure black `#000000` backgrounds in the app.
- Don't spread the accent colors (green, yellow, fuchsia) across UI chrome; they belong to status and illustration.
- Don't use thin or light font weights.
- Don't put drop shadows on every card in the client.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Discord. Dark app layout: a 72px server rail (`#1E1F22`) of 48px circular icons with a white pill indicator on the left, a 240px channel sidebar (`#2B2D31`) with 12px uppercase muted category labels and 34px channel rows (radius 4px), a chat area (`#313338`) with grouped messages (40px round avatars, 16px text `#DBDEE1`, usernames 500 weight, 12px muted timestamps `#949BA4`), and a message input (`#383A40`, radius 8px) pinned at the bottom. Font `"gg sans", "Plus Jakarta Sans", sans-serif`. Primary buttons are blurple `#5865F2` with white text, hover `#4752C4`. Red `#F23F43` count badges, green `#23A55A` online dots cut into avatars. For marketing pages, use a deep purple-black background, huge uppercase headlines in a heavy extended face (Ginto Nord, fallback Archivo Black), white and blurple pill buttons (radius 28-40px), and chunky 3D illustrations. Tone is casual and playful.

```css
:root {
  --brand-blurple: #5865F2;
  --brand-blurple-hover: #4752C4;
  --brand-blurple-dark: #3442D9;
  --brand-green: #57F287;
  --brand-yellow: #FEE75C;
  --brand-fuchsia: #EB459E;
  --brand-red: #ED4245;
  --brand-black: #23272A;
  --brand-white: #FFFFFF;
  --brand-off-white: #F6F6F6;
  --brand-bg-primary: #313338;
  --brand-bg-secondary: #2B2D31;
  --brand-bg-tertiary: #1E1F22;
  --brand-input: #383A40;
  --brand-header: #F2F3F5;
  --brand-text: #DBDEE1;
  --brand-text-muted: #949BA4;
  --brand-interactive: #B5BAC1;
  --brand-link: #00A8FC;
  --brand-online: #23A55A;
  --brand-idle: #F0B232;
  --brand-dnd: #F23F43;
  --brand-font: "gg sans", "Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-font-display: "ABC Ginto Nord", "Archivo Black", sans-serif;
  --brand-font-mono: "gg mono", "JetBrains Mono", Consolas, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-pill: 9999px;
  --brand-shadow-low: 0 1px 0 rgba(4,4,5,0.2), 0 1.5px 0 rgba(6,6,7,0.05), 0 2px 0 rgba(4,4,5,0.05);
  --brand-shadow-popout: 0 8px 16px rgba(0,0,0,0.24);
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Discord.

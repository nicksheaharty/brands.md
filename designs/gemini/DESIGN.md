---
name: Google Gemini
shortName: Gemini
slug: gemini
url: https://gemini.google.com
category: AI
tagline: "Quiet Material 3 chat canvas, a big rounded prompt box and a four-colour gradient spark."
updated: 2026-11-16
appStoreId: 6477489729
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Gemini Blue
    hex: "#3186FF"
    role: Core colour of the spark mark, brand gradients
  - name: Spark Red
    hex: "#FC413D"
    role: Spark gradient corner, brand illustration
  - name: Spark Yellow
    hex: "#FBBC04"
    role: Spark gradient corner, brand illustration
  - name: Spark Green
    hex: "#00B95C"
    role: Spark gradient corner, brand illustration
  - name: Primary
    hex: "#0B57D0"
    role: Buttons, links, focus, active states (light)
  - name: Surface
    hex: "#FFFFFF"
    role: Page background (light)
  - name: On Surface
    hex: "#1F1F1F"
    role: Primary text (light)
  - name: On Surface Variant
    hex: "#444746"
    role: Secondary text, icons (light)
  - name: Surface Container
    hex: "#F0F4F9"
    role: Sidebar, user prompt bubble, chips (light)
  - name: Surface Container High
    hex: "#E9EEF6"
    role: Hover and selected rows, raised panels (light)
  - name: Outline Variant
    hex: "#C4C7C5"
    role: Hairline borders and dividers (light)
  - name: Dark Surface
    hex: "#131314"
    role: Page background (dark)
  - name: Dark Container
    hex: "#1E1F20"
    role: Sidebar and prompt bubble (dark)
  - name: Dark Text
    hex: "#E3E3E3"
    role: Primary text (dark)
  - name: Primary Dark
    hex: "#A8C7FA"
    role: Primary and links (dark)
  - name: Error
    hex: "#B3261E"
    role: Errors (light)
fonts:
  display:
    family: "Google Sans Flex"
    fallback: "Google Sans Flex"
    weights: [400, 500]
  body:
    family: "Google Sans Flex"
    fallback: "Google Sans Flex"
    weights: [375, 400, 500]
  mono:
    family: "Google Sans Code"
    fallback: "Google Sans Code"
    weights: [400]
typeScale:
  - { role: Display L, size: 57, weight: 400, lineHeight: 1.12, tracking: "-0.01em" }
  - { role: Display M, size: 45, weight: 400, lineHeight: 1.16, tracking: "0" }
  - { role: Greeting, size: 36, weight: 400, lineHeight: 1.22, tracking: "0" }
  - { role: Headline M, size: 28, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Prompt Placeholder, size: 20, weight: 375, lineHeight: 1.4, tracking: "0" }
  - { role: Body L, size: 16, weight: 400, lineHeight: 1.75, tracking: "0" }
  - { role: Body M, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Label S, size: 11, weight: 500, lineHeight: 1.45, tracking: "0.01em" }
radii: { sm: 8, md: 12, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Prompt Box, value: "0 2px 8px -2px rgba(0,0,0,0.16)" }
  - { name: Floating Input, value: "0 0 16px 0 rgba(31,31,31,0.12), 0 0 2px 0 rgba(31,31,31,0.1)" }
  - { name: Menu, value: "0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F4F9"
  text: "#1F1F1F"
  muted: "#444746"
  border: "#C4C7C5"
  accent: "#0B57D0"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Google Gemini

## 1. Visual Theme & Atmosphere

Gemini (gemini.google.com and the iOS and Android apps) is Google's AI assistant, and its interface is a calm Material 3 chat canvas. The first screen is nearly empty: a short greeting ("Hello, Alex" or "Hi, where should we start?"), a large rounded prompt box, and a few suggestion chips. A collapsible sidebar on the left holds New chat, Gems, recent chats and settings. Answers stream in as plain text on the page background, with no bubble around them; your own prompts sit in a soft grey-blue rounded bubble aligned right.

Colour is held back. Surfaces are white or near-black, text is soft black or soft white, and the only bright thing on most screens is the Gemini spark: a four-pointed star filled with a blended blue, red, yellow and green gradient (the 2025 mark). Older screens and the greeting text used a blue-to-purple-to-pink gradient, which still appears in places.

What makes it recognisable:

- **The spark.** A four-point star with concave sides, used as the avatar beside every response and as a loading animation.
- **The big pill prompt box.** Fully rounded (or 24-32px corners), white on a soft shadow, with a "+" for attachments on the left and mic / send on the right.
- **Gradient greeting.** The welcome line uses gradient-filled text.
- **Google Sans Flex.** A variable sans used at light-ish weights (375-400), with a slightly narrower width axis in dense spots.
- **Tonal surfaces instead of borders.** Sidebar, prompt bubbles and chips use pale container colours (`#F0F4F9`, `#E9EEF6`).

Mood words: calm, airy, helpful, modern, quietly colourful.

## 2. Color Palette & Roles

Values were read from Gemini's production CSS tokens (`--gem-sys-color--*`, `--bard-color-*`) and the 2025 logo file on 2026-11-16.

| Token | Light | Dark | Role |
|---|---|---|---|
| surface | `#FFFFFF` | `#131314` | Page background |
| surface-container-lowest | `#FFFFFF` | `#0E0E0E` | Deepest wells |
| surface-container-low | `#F8FAFD` | `#1B1B1B` | Quiet panels |
| surface-container | `#F0F4F9` | `#1E1F20` | Sidebar, user prompt bubble, chips |
| surface-container-high | `#E9EEF6` | `#282A2C` | Hover, selected chat row |
| surface-container-highest | `#DDE3EA` | `#333537` | Pressed, strongest container |
| on-surface | `#1F1F1F` | `#E3E3E3` | Primary text |
| on-surface-variant | `#444746` | `#C4C7C5` | Secondary text, icons |
| outline | `#747775` | `#8E918F` | Input outlines |
| outline-variant | `#C4C7C5` | `#444746` | Hairlines, dividers |
| primary | `#0B57D0` | `#A8C7FA` | Buttons, links, focus |
| on-primary | `#FFFFFF` | `#062E6F` | Text on primary |
| primary-container | `#D3E3FD` | `#1F3760` | Tonal buttons, selected |
| secondary-container | `#C2E7FF` | `#004A77` | Secondary tonal fills |
| error | `#B3261E` | `#F2B8B5` | Errors |

### Brand gradient colours

| Name | Hex | Use |
|---|---|---|
| Gemini Blue | `#3186FF` | Spark core, brand gradients |
| Spark Red | `#FC413D` | Spark corner tint |
| Spark Yellow | `#FBBC04` / `#FFE432` | Spark corner tint |
| Spark Green | `#00B95C` | Spark corner tint |
| Periwinkle | `#749BFF` / `#969DFF` | Soft blue blends |
| Classic gradient | `#4285F4` to `#9B72CB` to `#D96570` | Greeting text gradient (v1) |
| Blue gradient (v2) | `#3983FF` to `#3E6AF0` to `#579FFF` | Newer greeting and brand text gradient |
| Older avatar | `#9168C0` to `#5684D1` to `#1BA1E3` | Pre-2025 spark gradient |

### Code highlighting (light / dark)

Keyword `#8430CE` / `#C58AF9`, string `#188038` / `#81C995`, literal `#B55908` / `#FA903E`, class `#996900` / `#FDD663`, variable `#D93025` / `#F28B82`, comment `#5F6368` / `#80868B`.

## 3. Typography

**Families:** Google Sans Flex (variable, with width, roundness, grade and optical size axes) for everything, falling back to Google Sans. Code uses Google Sans Code. All three are on Google Fonts.

```css
font-family: "Google Sans Flex", "Google Sans", "Helvetica Neue", sans-serif;
font-family: "Google Sans Code", monospace;   /* code blocks */
```

**Weights:** 375 for the large prompt placeholder, 400 for body and headings, 500 for labels, buttons and emphasis. Bold inside answers is 500-600.

### Scale (from production tokens; sizes vary slightly by surface)

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Display L | 57px (2.8-3.6rem) | 400 | 64px | Marketing |
| Display M | 45px | 400 | 52px | Large greetings on wide screens |
| Greeting | 32-36px | 400 | 40-44px | "Hello, Alex" gradient text |
| Headline M | 24-28px | 400 | 32-36px | Headings inside answers |
| Headline S | 20-24px | 400 | 28-32px | Sub-headings |
| Prompt placeholder | 20px | 375 | 28px | "Ask Gemini" |
| Body L | 16-17px | 400 | 28px | Response text |
| Body M | 14-15px | 400 | 20px | Sidebar items, chips |
| Label S | 11-13px | 500 | 16px | Badges, captions |

### Rules

- Sentence case for everything.
- Responses use generous line height (about 1.75) and 16px paragraph spacing.
- Headings inside answers are regular weight, larger size; no all-caps.
- Code blocks: Google Sans Code 14px on `#F0F4F9` (light) or `#1E1F20` (dark), 16px radius.

## 4. Logo & Brand Mark

The Gemini logo is the spark (a four-point star with curved, concave sides) followed by the "Gemini" wordmark in Google's product sans, set in `#1F1F1F` on light or white on dark. The 2025 spark is mostly Gemini Blue with red, yellow and green melting in from the corners, echoing Google's four colours. The earlier spark was a blue-to-purple gradient.

- **App icon:** the spark centred on white.
- **Response avatar:** a small spark (24-32px) beside each answer; it animates (rotates and pulses) while Gemini is thinking.
- **Clear space:** at least half the spark's width around the lockup (approximate).
- **Minimum size:** about 16px for the spark, 64px wide for the lockup (approximate).

Misuse:

- Don't fill the spark with a flat single colour in brand placements.
- Don't use the spark as a generic "AI" icon for other products.
- Don't stretch, rotate at rest, or outline it.
- Don't set the wordmark in a different typeface.

## 5. Components

### Prompt box (signature)

```css
.gm-prompt {
  display: grid;
  grid-template: "upload input icons" / auto 1fr auto;
  gap: 8px;
  align-items: center;
  max-width: 760px;
  min-height: 56px;
  padding: 12px 12px 12px 8px;
  background: #FFFFFF;                 /* surface-bright */
  border: none;
  border-radius: 9999px;               /* grows to 24-32px corners when multi-line */
  box-shadow: 0 2px 8px -2px rgba(0,0,0,0.16);
  font: 375 20px/28px "Google Sans Flex", "Google Sans", sans-serif;
  color: #1F1F1F;
}
.gm-prompt textarea::placeholder { color: #444746; }
```

- Left: a "+" button (32px circle) opening upload, Drive, photos, and tools.
- Right: "Tools" or model picker pill, microphone icon, and a send arrow that appears when text is entered (filled circle in primary).
- In conversation view the box docks at the bottom with up to 760-768px width and a soft all-round shadow (`0 0 16px rgba(31,31,31,0.12)`).

### Buttons

| Variant | Background | Text | Radius | Height |
|---|---|---|---|---|
| Filled | `#0B57D0` | `#FFFFFF` 500 14px | 9999px | 40px |
| Tonal | `#D3E3FD` | `#0842A0` 500 | 9999px | 40px |
| Outlined | transparent | `#0B57D0` 500 | 9999px, 1px `#747775` | 40px |
| Text | transparent | `#0B57D0` 500 | 9999px | 40px |
| Icon | transparent | `#444746` 24px icon | 50% | 40px |
| Sign in | `#0B57D0` | `#FFFFFF` | 9999px | 40px |

States: hover adds an 8% on-surface layer, pressed 12%, focus a 2px primary outline; disabled at 38% opacity.

### Suggestion chips

Under the prompt box on the empty state: 3-5 chips like "Create image", "Write anything", "Help me learn", "Boost my day". Each is a pill (or 16px-radius card on wide layouts), 40px tall, `#F0F4F9` fill or 1px `#C4C7C5` outline, with a small coloured icon on the left and 14px label.

### Sidebar

- Width 308px open (288px in compact layouts), collapses to a 72px rail (52px on mobile layouts).
- Background `#F0F4F9` light / `#1E1F20` dark (in some layouts it matches the page).
- Top: menu icon, "New chat" (pen icon), search. Then "Gems" list, then "Recent" chats as 36-40px rows with 9999px-radius hover pills (`#E9EEF6`), active row in `#D3E3FD`.
- Bottom: Settings & help, the account's location line.

### Messages

- **User prompt:** right-aligned bubble, `#F0F4F9` light / `#1E1F20` dark (some builds use `#E9EEF6` / `#282A2C`), radius 24px with the top-right corner tightened to 4px, padding 12px 16px, max-width about 75%.
- **Gemini response:** no bubble, left-aligned under a small spark avatar, 16px body text, full column width. Action row below: thumbs up, thumbs down, regenerate, share, copy, more (24px grey icons, 40px targets).
- **Drafts and "Show thinking":** expandable sections with a chevron, tonal background.

### Cards and canvas

Image, code and document outputs sit in 16-24px-radius containers on `#F0F4F9`. Canvas (the side-by-side document or code editor) opens as a right-hand panel with its own toolbar.

### Menus and dialogs

- Menus: surface `#FFFFFF` or `#F0F4F9`, radius 12-16px, rows 48px, 14px text, Material elevation shadow.
- Dialogs: radius 28px, title 24px regular, text buttons right aligned.

### Badges

Model labels ("Fast", "Thinking", "Pro") appear in a pill selector inside the prompt box; "New" and plan badges are 11-12px 500 on `#D3E3FD` or `#C2E7FF`, fully rounded.

## 6. Layout & Spacing

- **Shell:** left sidebar (72px collapsed, 308px open), top bar about 64px with model name / "Gemini" title left and account avatar right.
- **Conversation column:** centred, max width 760-768px, side padding 16-24px.
- **Empty state:** greeting and prompt box centred vertically in the viewport.
- **Spacing:** 4px base token (`--gem-sys-spacing--xs`). Common values 8, 12, 16, 20, 24, 32.
- **Breakpoints (approximate):** 600px (mobile), 960px (sidebar overlays instead of pushing), 1280px.
- **Density:** low. Lots of space around the prompt and between turns (24-32px).

## 7. Depth, Elevation & Motion

- Elevation is subtle: the prompt box `0 2px 8px -2px rgba(0,0,0,0.16)`, docked input `0 0 16px rgba(31,31,31,0.12), 0 0 2px rgba(31,31,31,0.1)`, menus with Material level-1 shadows.
- Surfaces separate by tone (container colours) more than by shadows or borders.
- Motion: the spark spins and shimmers while generating; responses fade in line by line; the greeting gradient can shift slowly.
- Material 3 easing: standard `cubic-bezier(0.2, 0, 0, 1)` for 200-300ms; emphasised `cubic-bezier(0.05, 0.7, 0.1, 1)` for 400-500ms enters.
- Sidebar expands and collapses in about 200ms.

## 8. Iconography & Imagery

- Icons are Google Symbols (a Material Symbols variant), outlined, weight around 400, 20-24px, `#444746`. Filled versions mark selected states.
- Coloured icons appear only in suggestion chips (small, single-colour accents).
- Imagery: generated images inside answers, product screenshots on marketing pages, soft blue-tinted gradients and the spark as the hero graphic.

## 9. Voice & Microcopy

Warm, direct, short. Sentence case. Gemini speaks in first person in answers; the UI speaks plainly.

- Greeting: "Hello, Alex", "Hi Alex, where should we start?"
- Placeholder: "Ask Gemini"
- Chips: "Create image", "Write anything", "Help me learn", "Boost my day"
- Nav: "New chat", "Gems", "Recent", "Settings & help", "Sign in"
- Disclaimer under the input: "Gemini can make mistakes, so double-check it"

## 10. Do's and Don'ts

**Do**

- Keep the canvas plain and let the prompt box and greeting carry the page.
- Use fully rounded pills for the prompt box, chips and buttons.
- Use pale tonal containers (`#F0F4F9`, `#E9EEF6`) instead of borders.
- Use Google Sans Flex at 375-400 weight with relaxed line height for answers.
- Reserve the four-colour gradient for the spark and one greeting line.

**Don't**

- Don't put AI responses in bubbles; only the user's prompt gets one.
- Don't use the gradient on buttons, borders or backgrounds.
- Don't use heavy shadows or hard 1px borders around the prompt box.
- Don't add emoji or extra decorative stars.
- Don't use bold 700 headings.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Google Gemini. Light theme: page `#FFFFFF`, text `#1F1F1F`, secondary `#444746`, tonal containers `#F0F4F9` and `#E9EEF6`, hairlines `#C4C7C5`, primary `#0B57D0`. Dark theme: page `#131314`, containers `#1E1F20` / `#282A2C`, text `#E3E3E3`, primary `#A8C7FA`. Font: "Google Sans Flex" (fallback "Google Sans"), weights 375-500, code in "Google Sans Code". Layout: a 72px collapsible sidebar (308px open) with "New chat" and recent chats as pill rows; a centred column max 760px. Empty state: a 36px gradient greeting ("Hello, Alex", gradient `#4285F4` to `#9B72CB` to `#D96570`) above a fully rounded prompt box with shadow `0 2px 8px -2px rgba(0,0,0,0.16)`, a "+" button left, mic and send right, 20px weight-375 placeholder "Ask Gemini", then pill suggestion chips on `#F0F4F9`. In chat, user prompts are right-aligned `#F0F4F9` bubbles with 24px radius; responses are plain text with a small four-point gradient spark avatar (blue `#3186FF` with red `#FC413D`, yellow `#FBBC04`, green `#00B95C` corners) and a row of grey icon actions. Material 3 easing `cubic-bezier(0.2,0,0,1)`.

```css
:root {
  --brand-blue: #3186FF;
  --brand-red: #FC413D;
  --brand-yellow: #FBBC04;
  --brand-green: #00B95C;
  --brand-gradient-text: linear-gradient(74deg, #4285F4 0%, #9B72CB 9%, #D96570 20%, #D96570 24%, #9B72CB 35%, #4285F4 44%);
  --brand-primary: #0B57D0;
  --brand-on-primary: #FFFFFF;
  --brand-primary-container: #D3E3FD;
  --brand-surface: #FFFFFF;
  --brand-surface-container-low: #F8FAFD;
  --brand-surface-container: #F0F4F9;
  --brand-surface-container-high: #E9EEF6;
  --brand-surface-container-highest: #DDE3EA;
  --brand-on-surface: #1F1F1F;
  --brand-on-surface-variant: #444746;
  --brand-outline: #747775;
  --brand-outline-variant: #C4C7C5;
  --brand-error: #B3261E;
  --brand-dark-surface: #131314;
  --brand-dark-container: #1E1F20;
  --brand-dark-container-high: #282A2C;
  --brand-dark-text: #E3E3E3;
  --brand-dark-primary: #A8C7FA;
  --brand-font: "Google Sans Flex", "Google Sans", "Helvetica Neue", sans-serif;
  --brand-font-mono: "Google Sans Code", monospace;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 16px;
  --brand-radius-xl: 28px;
  --brand-radius-pill: 9999px;
  --brand-shadow-prompt: 0 2px 8px -2px rgba(0,0,0,0.16);
  --brand-shadow-dock: 0 0 16px 0 rgba(31,31,31,0.12), 0 0 2px 0 rgba(31,31,31,0.1);
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
  --brand-ease-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1);
}
```

---

Values are observed from the public product and published brand material; this file is an unofficial reference and is not affiliated with or endorsed by Google.

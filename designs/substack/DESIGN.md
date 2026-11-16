---
name: Substack
slug: substack
url: https://substack.com
category: News
tagline: "Orange bookmark mark, clean system-font reader app and serif post pages themed per writer."
updated: 2026-11-16
appStoreId: 1581650857
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Substack Orange
    hex: "#FF6719"
    role: Logo, primary buttons, default publication accent
  - name: Ink
    hex: "#363737"
    role: Primary text, wordmark (gray-700)
  - name: White
    hex: "#FFFFFF"
    role: Page and post background
  - name: Orange Dark
    hex: "#D74D00"
    role: Primary button hover, accent text (orange-600)
  - name: Near Black
    hex: "#161718"
    role: Mono buttons, tooltips, dark mode base (gray-900)
  - name: Gray 500
    hex: "#777777"
    role: Secondary text, metadata
  - name: Gray 400
    hex: "#B6B6B6"
    role: Tertiary text, placeholders
  - name: Gray 200
    hex: "#EEEEEE"
    role: Secondary background, chips
  - name: Gray 300
    hex: "#DBDBDB"
    role: Tertiary background, pressed
  - name: Gray 150
    hex: "#FAFAFA"
    role: Hover background
  - name: Paid Purple
    hex: "#7B61FF"
    role: Paid subscriber and paywall accents
  - name: Select Blue
    hex: "#0076FF"
    role: Selection, chat bubbles, links in app UI
  - name: Success Green
    hex: "#1BC47D"
    role: Success states
  - name: Error Red
    hex: "#EB5757"
    role: Errors, destructive actions
fonts:
  display:
    family: "SF Pro Display"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Spectral"
    fallback: "Spectral"
    weights: [400, 600]
  mono:
    family: "JetBrains Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Post title, size: 36, weight: 700, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Post subtitle, size: 24, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: App heading, size: 30, weight: 700, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Post body, size: 20, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Note text, size: 15, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Button, size: 15, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Meta, size: 13, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48]
shadows:
  - { name: Small, value: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)" }
  - { name: Medium, value: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)" }
  - { name: Large, value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }
  - { name: XL, value: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }
preview:
  bg: "#FFFFFF"
  surface: "#EEEEEE"
  text: "#363737"
  muted: "#777777"
  border: "#DBDBDB"
  accent: "#FF6719"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Substack

## 1. Visual Theme & Atmosphere

Substack has two faces. The platform itself (substack.com, the reader app, Notes, chat, the iOS app) is a quiet, white, system-font interface with one orange accent. Each publication then gets its own themed site: post pages, archives and homepages where the writer picks a serif or sans preset, an accent colour and a header style. The platform design has to stay neutral so that thousands of individual voices sit inside it.

The constant pieces are the orange bookmark logo, a narrow reading column, generous line height, and the subscribe box: an email field with an orange "Subscribe" button that appears at the top, middle and end of posts.

What makes it recognisable:

- **The bookmark mark.** Three orange bars, the lowest folded into a ribbon notch, `#FF6719`.
- **Orange primary buttons** with white text and 8px corners; everything else neutral grey.
- **System sans in the app,** serif (Spectral, Lora and others) in posts.
- **Single centred column** for posts, about 728px, with a large title, a grey subtitle and a byline row of round avatars.
- **Engagement row** (heart, comment, restack, share) drawn with thin 2px line icons.

Mood: calm, literary, independent, uncluttered.

## 2. Color Palette & Roles

The platform uses primitive ramps (`--color-primitive-{gray,orange,purple,blue,green,red,yellow,cyan}-{100..950}-rgb`) and semantic light and dark tokens (`--color-light-fg-primary`, `--color-dark-bg-primary`). Publications override the accent with `--color_theme_bg_pop`.

| Name | Hex | Token | Role |
|---|---|---|---|
| Substack Orange | `#FF6719` | orange-500, `--color_theme_bg_pop` default | Logo, primary button, accent |
| Orange Dark | `#D74D00` | orange-600 | Button hover, accent text |
| Pop Darken | `#FF5600` | `--color_theme_bg_pop_darken` | Default pub button hover |
| Orange Tint | `rgba(255,103,25,0.2)` | accent-bg-orange | Accent backgrounds, selected chips |
| Ink | `#363737` | gray-700, fg-primary | Text, wordmark |
| Gray 500 | `#777777` | gray-500, fg-secondary | Secondary text |
| Gray 400 | `#B6B6B6` | gray-400, fg-tertiary | Tertiary text, placeholder |
| Gray 300 | `#DBDBDB` | bg-tertiary | Pressed fills |
| Gray 200 | `#EEEEEE` | bg-secondary | Chips, quiet buttons, inputs |
| Gray 150 | `#FAFAFA` | bg-primary-hover | Row hover |
| White | `#FFFFFF` | gray-100, bg-primary | Page |
| Near Black | `#161718` | gray-900 | Mono button, tooltip |
| Detail | `rgba(0,0,0,0.1)` | utility-detail | Hairlines and borders |
| Modal scrim | `rgba(0,0,0,0.5)` | utility-modal | Overlay |

### Semantic

| State | Primary | Text / hover |
|---|---|---|
| Paid | `#7B61FF` | `#5E49D9` |
| Select / chat | `#0076FF` | `#005DD9` |
| Success | `#1BC47D` | `#00A363` |
| Error | `#EB5757` | `#C53E41` |
| Warning | `#FFC700` | `#6E5400` text |
| Highlight | `#18A0FB` | `#0083D5` |

Each semantic colour has a 20% alpha "detail" fill for badges and alerts, for example `rgba(235,87,87,0.2)` for error.

### Publication themes

A publication's default theme sets: accent `#FF6719`, web background `#FFFFFF`, contrast steps `#F0F0F0`, `#DDDDDD`, `#B7B7B7`, `#929292`, `#515151`, print on web `#363737`, secondary print `#757575`. Writers can change the accent to any colour and pick a dark background; the UI derives 20% and 30% tints and a darker hover automatically.

### Dark mode

The app and reader support dark mode: background `#161718` to `#131414`, raised surfaces `#1B1C1D` and `#232525`, text `#EEEEEE`, secondary `#B6B6B6`, the same orange accent. Shadows switch to `rgba(0,0,0,0.2)` alphas.

## 3. Typography

**Platform UI:** the system stack. Titles use `"SF Pro Display", -apple-system-headline, system-ui`; text uses `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Meta text uses `"SF Compact"`. Numbers in some counters use **JetBrains Mono** (`--font-family-digit`).

**Publication text:** presets loaded from Google Fonts. The platform serif token is `ui-serif, "Spectral", Georgia, serif`; common presets include Lora ("fancy serif"), Spectral, and sans options. Writers choose separate heading and body presets (`--font_family_headings_preset`, `--font_family_body_preset`) and heading weight (often 600).

Substitutes: **Inter** for SF Pro; Spectral, Lora and JetBrains Mono are free on Google Fonts.

### Scale

Token sizes: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 30, 32, 36, 44px. Weights: 300, 400, 500, 600, 700, 800.

| Role | Size / line height | Weight | Font |
|---|---|---|---|
| Post title | 32-40px / 1.2 (approximate) | 700 (or pub preset 600) | Pub headings |
| Post subtitle | 24px / 1.3 desktop, 19px mobile | 400 | Pub headings |
| Publication name (wordlogo) | up to 55px, `min(3.4375rem, 5vw)` | 600 | Pub headings |
| Post body | 19-20px / 1.6 (approximate, includes pub offset) | 400 | Pub body |
| In-post H2 | 24-28px / 1.3 | 700 | Pub headings |
| App page heading | 30px | 700 | SF Pro Display |
| Feed post title | 17-20px | 700 | SF Pro / pub |
| Note text | 15px / 1.45 | 400 | System |
| Button md | 15px | 500-600 | System |
| Meta / byline | 13-14px | 500 | System |
| Caption | 13-14px, centred, `#777777` | 400 | System or pub body |

### Rules

- Sentence case for everything in the app.
- Post titles are set by the writer; the system never uppercases them.
- Long-form body uses the pub's serif with roomy line height; the app chrome stays sans.

## 4. Logo & Brand Mark

The logo is the orange bookmark mark (two horizontal bars over a third bar that becomes a ribbon with a V notch) beside the lowercase "substack" wordmark in a geometric sans, dark grey `#363737` or black. The inline site SVG is 2303 x 396 and the standalone mark is 16 x 18.

- **Colours:** orange mark + dark wordmark on white; white mark on orange for the app icon; all white on dark.
- **App icon:** white bookmark on an orange square.
- **Clear space:** at least the height of one bar on each side of the mark.
- **Minimum size:** mark 16px tall; full lockup 80px wide.

Misuse: don't recolour the mark with a publication's accent, don't rotate the ribbon, don't set "substack" in caps, don't put the orange mark on orange backgrounds.

## 5. Components

### Buttons

Sizes from the Pencraft component library:

| Size | Height | Padding x | Font | Radius |
|---|---|---|---|---|
| sm | 32px | 12px | 14px | 8px |
| md | 40px | 16px | 15px | 8px |
| lg | 48px | 20px | 16px | 8px |

| Variant | Background | Text | Hover |
|---|---|---|---|
| Primary | `#FF6719` (or pub accent) | `#FFFFFF` | `#D74D00` |
| Mono | `#161718` | `#EEEEEE` | `#232525` |
| Secondary | `#EEEEEE` | `#363737` | `#DBDBDB` |
| Tertiary / icon | transparent | `#363737` | `#FAFAFA` |
| Destructive | `#EB5757` | `#FFFFFF` | `#C53E41` |

Focus uses a box-shadow ring (`--focus-ring`, 2px accent-tinted, approximate). Icon buttons are 40px squares or circles with a 20px Lucide icon.

### Subscribe widget (signature)

Email input and button joined in one row: input 40-48px tall, `#FFFFFF` with 1px `rgba(0,0,0,0.1)` border and 8px radius on the left; orange "Subscribe" button flush on the right. Under it a small grey line such as "Already a paid subscriber? Sign in" (approximate). The widget repeats at the top of posts, mid-post and after the last paragraph.

### Post page

- Publication header: logo or wordlogo centred, nav row (Home, Notes, Archive, About), Subscribe and Sign in at the right.
- Column: about 728px max width (approximate), centred, 16-24px side padding on mobile.
- Title (pub headings), subtitle in `#777777` at 24px/1.3, then the byline: 36px round avatars, author names, date "Nov 14" style, and read time.
- Post UFI row (`aria-label="Post UFI"`): heart with count, comment, restack, share; 20px line icons, 16px vertical padding, between hairlines.
- Body `.body.markup`: paragraphs with 20-24px spacing, links underlined in text colour, H2/H3 in heading font.
- Images: full column or full-bleed (`image2-full-screen`), captions centred below in 13-14px grey.
- Pull quotes: centred, larger serif (24-32px), often in the accent colour.
- Blockquotes: 3-4px left border in the accent colour, 20px padding, body font.
- Footnotes: small superscript numbers in the accent colour, collected at the end.
- Paywall: fade-out over the last paragraph, then a card "This post is for paid subscribers" with an orange subscribe button and a purple "paid" accent.

### Reader app and Notes

- Left navigation rail (Home, Subscriptions, Chat, Activity, Explore, Profile) with 24px icons; top bar 64px tall on mobile (`--home-bar: 64px`).
- Feed cards are full-width rows separated by hairlines, not boxed: avatar 40px circle, name in 15px/600, handle and time in `#777777`, Note text 15px, image attachments with 12px radius, action row of 13px Lucide icons (heart, message, repeat-2, share) with counts.
- Post cards in the feed: publication avatar, title 17-20px bold, subtitle grey, cover image right or top with 8-12px radius.
- Chat: bubbles with 20px radius, outgoing `#0076FF` with white text, incoming `#EEEEEE`.

### Inputs

- Height 40px, 8px radius, background `#FFFFFF` or `#EEEEEE`, 1px `rgba(0,0,0,0.1)` border, 15px text, placeholder `#B6B6B6`.
- Focus: border in the accent with a soft ring.
- Error: `#C53E41` text with `rgba(235,87,87,0.2)` fill on alerts.

### Tags and badges

Pill tags with 20% accent fill: "Paid" in purple, "Bestseller" or category chips in grey `#EEEEEE`. 12-13px, 500 weight, 4px 8px padding.

### Modals and sheets

White, 12-20px radius, `--shadow-xl`, scrim `rgba(0,0,0,0.5)`. Mobile uses bottom sheets with a 4px grabber.

### Live and video

Live video and podcast posts show a red "LIVE" pill (`#EB5757`) or an audio player bar with orange play button, scrubber and speed controls (approximate).

## 6. Layout & Spacing

- Spacing tokens are 4px based (4, 8, 12, 16, 20, 24, 32, 40, 48).
- Radii: xs 4, sm 8, md 12, lg 20, full 9999px.
- Post column about 728px; publication homepages use a 1100-1200px grid with a feature post and a two-column list (approximate).
- Reader app: left rail about 240px on desktop, feed column about 600px, right column for suggestions.
- Breakpoints around 768px and 1024px (approximate).

## 7. Depth, Elevation & Motion

| Token | Light | Dark |
|---|---|---|
| xs | `0 1px 2px #0000000D` | same |
| sm | `0 1px 3px #0000001A, 0 1px 2px #0000000F` | alphas `#0003`, `#0000001F` |
| md | `0 4px 6px -1px #0000001A, 0 2px 4px -1px #0000000F` | stronger |
| lg | `0 10px 15px -3px #0000001A, 0 4px 6px -2px #0000000D` | stronger |
| xl | `0 20px 25px -5px #0000001A, 0 10px 10px -5px #0000000A` | stronger |

- Feed and post content are flat; shadows belong to menus, popovers, modals and floating players.
- Hover transitions use a shared `--animate-hover` (about 150ms ease) and buttons can scale slightly on press.

## 8. Iconography & Imagery

- Icons are Lucide: 24 x 24 grid, 2px stroke, round caps and joins, `fill: none`, drawn at 13, 16, 20 and 24px.
- Imagery is supplied by writers: cover photos, illustrations, charts, screenshots. The platform does not add filters.
- Publication logos are square, often rounded 8-12px in feeds; author avatars are circles.

## 9. Voice & Microcopy

Plain, writer-centric and friendly. Substack talks about readers, writers, subscriptions and independence; the UI copy is short.

- Sentence case for buttons and headings.
- Sample strings: "Subscribe", "Sign in", "Start writing", "Restack", "Share", "Leave a comment", "Already have an account? Sign in", "This post is for paid subscribers", "Upgrade to paid".
- Post metadata: "Nov 14", "8 min read", "Listen", "Discussion about this post".

## 10. Do's and Don'ts

**Do**

- Keep the platform chrome white, grey and system-font, with orange only on primary actions and the logo.
- Give posts a single narrow column with a serif body and generous leading.
- Repeat the email-plus-button subscribe box at natural break points.
- Use thin Lucide line icons and round avatars.
- Let each publication's accent replace orange inside its own pages.

**Don't**

- Don't box feed items in heavy cards or add shadows to posts.
- Don't use the orange for body links or large backgrounds.
- Don't set long-form posts in the app's system sans by default.
- Don't uppercase titles or buttons.
- Don't mix more than one accent colour on a publication page.

## 11. Agent Prompt Guide

> Build this UI in the style of Substack. White background, text `#363737`, secondary `#777777`, tertiary `#B6B6B6`, quiet fills `#EEEEEE`, hairlines `rgba(0,0,0,0.1)`. App chrome uses the system font stack (SF Pro; use Inter). Long-form posts sit in a centred column about 728px wide: title 36px bold, subtitle 24px/1.3 grey, byline row with round avatars, then a heart/comment/restack/share row of 20px Lucide line icons between hairlines. Post body is a serif (Spectral or Lora) at about 20px with 1.6 line height. Primary buttons are orange `#FF6719` with white text, 40px tall, 8px radius, 15px weight 600, hover `#D74D00`; secondary buttons are `#EEEEEE`. The subscribe widget is an email input joined to an orange "Subscribe" button. Feed items are flat rows with 40px avatars and 13-15px text. Menus and modals use soft shadows like `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`. Paid features use purple `#7B61FF`.

```css
:root {
  --brand-orange: #FF6719;
  --brand-orange-hover: #D74D00;
  --brand-orange-tint: rgba(255,103,25,0.2);
  --brand-text: #363737;
  --brand-text-secondary: #777777;
  --brand-text-tertiary: #B6B6B6;
  --brand-bg: #FFFFFF;
  --brand-bg-hover: #FAFAFA;
  --brand-bg-secondary: #EEEEEE;
  --brand-bg-tertiary: #DBDBDB;
  --brand-mono: #161718;
  --brand-detail: rgba(0,0,0,0.1);
  --brand-scrim: rgba(0,0,0,0.5);
  --brand-paid: #7B61FF;
  --brand-select: #0076FF;
  --brand-success: #1BC47D;
  --brand-error: #EB5757;
  --brand-warning: #FFC700;
  --brand-font-ui: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", Roboto, Helvetica, Arial, sans-serif;
  --brand-font-title: "SF Pro Display", -apple-system, "Inter", sans-serif;
  --brand-font-post: "Spectral", "Lora", Georgia, serif;
  --brand-font-digit: "JetBrains Mono", ui-monospace, monospace;
  --brand-radius-xs: 4px;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 20px;
  --brand-radius-full: 9999px;
  --brand-shadow-sm: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  --brand-shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --brand-shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  --brand-shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  --brand-post-width: 728px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Substack.

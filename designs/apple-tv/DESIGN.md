---
name: Apple TV
slug: apple-tv
url: https://tv.apple.com
category: Streaming
tagline: "Black glass, white type, and full-bleed key art: Apple's restraint applied to TV."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Hero and player background, logo background
  - name: White
    hex: "#FFFFFF"
    role: Logo, primary text, Play button fill
  - name: Page Dark
    hex: "#1F1F1F"
    role: Web app page background in dark mode
  - name: Sidebar Dark
    hex: "#282828"
    role: Web navigation sidebar in dark mode
  - name: System Blue Dark
    hex: "#0A84FF"
    role: Links and key color in dark mode
  - name: System Blue
    hex: "#007AFF"
    role: Links and key color in light mode
  - name: Icon Grey Top
    hex: "#313131"
    role: Top stop of the app icon gradient
  - name: Footer Dark
    hex: "#323232"
    role: Footer and placeholder artwork in dark mode
  - name: Secondary Text
    hex: "#A1A1A6"
    role: Metadata on dark (white at about 64-70%)
  - name: Tertiary Text
    hex: "#6E6E73"
    role: Captions, disabled labels
  - name: Light Page
    hex: "#FFFFFF"
    role: Web page background in light mode
  - name: Light Sidebar
    hex: "#FAFAFA"
    role: Web sidebar in light mode
  - name: System Red
    hex: "#FF453A"
    role: Destructive actions, live indicator (dark)
  - name: System Green
    hex: "#32D74B"
    role: Success, sports scores (dark)
fonts:
  display:
    family: "SF Pro Display"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "SF Pro Text"
    fallback: "Inter"
    weights: [400, 600]
typeScale:
  - { role: Headline, size: 48, weight: 600, lineHeight: 1.08, tracking: "-0.01em" }
  - { role: Large Title, size: 26, weight: 700, lineHeight: 1.23, tracking: "0" }
  - { role: Title 1, size: 22, weight: 700, lineHeight: 1.18, tracking: "0" }
  - { role: Title 2, size: 17, weight: 700, lineHeight: 1.29, tracking: "0" }
  - { role: Title 3, size: 15, weight: 600, lineHeight: 1.33, tracking: "0" }
  - { role: Body, size: 13, weight: 400, lineHeight: 1.23, tracking: "0" }
  - { role: Callout, size: 12, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Footnote, size: 10, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 6, md: 8, lg: 18, xl: 28, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 60]
shadows:
  - { name: Glass, value: "0 10px 40px rgba(0,0,0,0.2)" }
  - { name: Dialog, value: "inset 0 0 0 1px rgba(255,255,255,0.2), 0 8px 40px rgba(0,0,0,0.55)" }
  - { name: Card Lift, value: "0 7px 7px -5px rgba(0,0,0,0.3)" }
preview:
  bg: "#000000"
  surface: "#1F1F1F"
  text: "#FFFFFF"
  muted: "#A1A1A6"
  border: "#3A3A3C"
  accent: "#FFFFFF"
  accentText: "#000000"
  radius: 12
  buttonStyle: solid
---

# Apple TV

## 1. Visual Theme & Atmosphere

Apple TV (the app, the web player at tv.apple.com, and the streaming service that was called Apple TV+ until the October 2025 rename) is a quiet, black, picture-led interface. The brand does not use a signature colour. Black backgrounds, white SF Pro type and translucent glass panels frame key art that runs edge to edge. The one constant mark is the Apple logo followed by a lowercase "tv".

What makes it recognisable:

- **Key art first.** Home opens on a full-bleed hero carousel: cinematic still or motion art, the title's logo treatment lower-left, one line of context ("New Episode Friday", "Apple Original") and a white Play button.
- **Mostly monochrome.** White text on black, greys from Apple's system palette, and blue only for links. Colour comes from the artwork.
- **Glass chrome.** Since the 2025 Liquid Glass update (iOS 26, tvOS 26, macOS Tahoe) the tab bar, buttons and menus are translucent, blurred panels with a thin light edge. On the web this appears as `#26262899` panels with a backdrop blur.
- **Rows of lockups.** Below the hero, horizontal shelves ("Continue Watching", "Top Chart: Apple TV", "New Releases") hold 16:9 lockups with rounded corners, or tall 2:3 poster art for Apple Originals.
- **System type.** Everything is SF Pro, using Apple's named text styles (Large Title, Title 1-3, Body, Callout, Footnote) rather than custom sizes.

Density: low. Large art, generous gaps, very little text on screen. The tvOS app is built for focus-driven navigation at three metres; the iPhone and web versions keep the same order at smaller sizes.

## 2. Color Palette & Roles

Values below come from the live tv.apple.com stylesheet (`--pageBG`, `--keyColor`, `--systemPrimary` and related tokens). Each token has a light and a dark value; the web player follows the operating system setting, while tvOS and the player are always dark.

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Black | `#000000` | Hero and player background, logo background, tvOS canvas |
| White | `#FFFFFF` | Logo, primary text on dark, Play button fill |
| Page Dark | `#1F1F1F` | `--pageBG` in dark mode |
| Sidebar Dark | `#282828` | `--navSidebarBG` in dark mode |
| Footer Dark | `#323232` | `--footerBg`, artwork placeholder in dark mode |
| Light Page | `#FFFFFF` | `--pageBG` in light mode |
| Light Sidebar | `#FAFAFA` | `--navSidebarBG` in light mode |
| Light Footer | `#FBFBFB` | `--footerBg` in light mode |
| Manifest Grey | `#2D2D2D` | PWA `background_color` (splash screen) |

### Text (dark mode)

| Token | Value | Use |
| --- | --- | --- |
| systemPrimary | `rgba(255,255,255,0.92)` (`#ffffffeb`) | Titles, body |
| systemSecondary | `rgba(255,255,255,0.64)` (`#ffffffa3`) | Metadata, year, runtime, genre |
| systemTertiary | `rgba(255,255,255,0.25-0.5)` | Captions, disabled text |
| systemQuaternary | `rgba(255,255,255,0.1)` | Hairlines, card fill |
| systemQuinary | `rgba(255,255,255,0.05)` | Hover fill |

Light mode mirrors these with black: `rgba(0,0,0,0.88)`, `rgba(0,0,0,0.56)`, `rgba(0,0,0,0.25)`.

### Key colour and system colours

| Name | Light | Dark | Use |
| --- | --- | --- | --- |
| Key / System Blue | `#007AFF` | `#0A84FF` | Links, "See All", text buttons |
| Blue pressed | `#005CD7` | `#38B2FF` | Pressed link |
| Blue rollover | `#0045B7` | `#47C1FF` | Hover |
| System Red | `#FF3B30` | `#FF453A` | Destructive menu items, LIVE dot |
| System Green | `#28CD41` | `#32D74B` | Success, game scores |
| System Orange | `#FF9500` | `#FF9F0A` | Warnings |

### Glass

| Token | Value |
| --- | --- |
| Glass fill (dark) | `rgba(38,38,40,0.6)` (`#26262899`) |
| Glass fill (light) | `rgba(245,245,247,0.55)` (`#f5f5f78c`) |
| Inner stroke (dark) | `rgba(255,255,255,0.2)` |
| Inner stroke (light) | `rgba(0,0,0,0.05)` |
| Fallback material | `rgba(31,31,31,0.97)` when blur is unavailable |

The 2025 rename came with a refreshed identity that uses coloured light refracting through a glass version of the logo in idents and trailers. Those colours are motion-only and are not part of the UI palette; this file does not list hex values for them.

## 3. Typography

- **SF Pro** is Apple's system typeface: SF Pro Display for large sizes, SF Pro Text below 20px. The web player loads it from `apple.com/wss/fonts` and falls back to `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif`. SF Pro may be used only to design for Apple platforms under Apple's licence; do not ship it on non-Apple products.
- Fallback: **Inter** (Google Fonts) is close in width and x-height.
- Title names on hero art are custom logo images per show. Never set a show name in SF Pro when a title treatment exists.

### Scale (web tokens)

The web player defines the type as CSS shorthands such as `--title-2-emphasized: 700 17px/1.294`. These are base sizes; larger breakpoints scale some up.

| Token | Weight | Size / line height | Use |
| --- | --- | --- | --- |
| headline | 600 | 48/1.08 (40/1.1, 32/1.125 on smaller screens) | Marketing hero, "Apple TV" upsell |
| large-title-emphasized | 700 | 26/1.23 | Page titles ("Home", "Store") |
| title-1-emphasized | 700 | 22/1.18 | Section headers on detail pages |
| title-2-emphasized | 700 | 17/1.29 | Shelf titles ("Continue Watching") |
| title-3 / -emphasized | 400 / 600 | 15/1.33 | Lockup titles, episode names |
| body / -emphasized | 400 / 600 | 13/1.23 | Synopsis, buttons |
| callout | 400 | 12/1.25 | Metadata lines |
| subhead | 400 | 11/1.27 | Badges, small labels |
| footnote / caption-2 | 400 / 500 | 10/1.3 | Ratings, legal |

On iOS and tvOS the same named styles map to Dynamic Type sizes (iOS Large Title 34pt, Title 1 28pt, Body 17pt; tvOS Title 1 76pt, Body 29pt).

### Rules

- Title case for shelf titles and buttons ("Continue Watching", "Play", "Add to Up Next").
- Metadata uses a centred dot or bullet separators: "Drama · 2025 · 55 min".
- Keep tracking at the SF default; SF Pro adjusts tracking optically per size.
- Use tabular numerals for runtimes and scores.

## 4. Logo & Brand Mark

- **Mark:** the Apple logo followed by a lowercase "tv" set in a custom geometric cut. Since October 2025 the service is "Apple TV" (no plus), and the wordmark lockup is the same Apple + "tv" used for the app.
- **App icon:** white Apple + "tv" centred on a dark grey tile with a subtle vertical gradient (about `#313131` at top to `#141414` at bottom).
- **Colour versions:** white on black or dark imagery (most common in product), black on white. No colour fills.
- **Clear space:** at least the height of the "t" on all sides.
- **Minimum size:** about 32px wide on screen; at smaller sizes use the Apple logo alone only inside Apple-controlled UI.
- **Writing the name:** "Apple TV" in text, with a capital T and V. Never "AppleTV", "Apple TV Plus" (retired), or a standalone Apple logo followed by typed "TV".

Misuse: do not recolour the mark, add outlines or glows, separate the Apple logo from "tv", rebuild "tv" in SF Pro, or put it on busy art without a scrim.

## 5. Components

### Buttons

The Play button is the one solid, high-contrast control on any screen.

```css
.btn-play {
  display: inline-flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 22px;
  background: #FFFFFF; color: #000000;
  font: 600 15px/1 "SF Pro Text", "Inter", -apple-system, sans-serif;
  border: 0; border-radius: 12px;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1), background 200ms;
}
.btn-play:hover { background: rgba(255,255,255,0.85); }
.btn-play:active { transform: scale(0.97); }

.btn-glass {
  height: 44px; padding: 0 20px;
  background: rgba(38,38,40,0.6);
  -webkit-backdrop-filter: blur(30px) saturate(180%); backdrop-filter: blur(30px) saturate(180%);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2), 0 10px 40px rgba(0,0,0,0.2);
  color: #FFFFFF; border-radius: 18px; border: 0;
}
.btn-glass:hover { background: rgba(120,120,128,0.41); }

.btn-text { background: none; color: #0A84FF; font-weight: 400; padding: 0; }
.btn-text:hover { color: #47C1FF; }
```

- Pill buttons (`--buttonRadius: 30px`) for "Accept Free Trial" / "Get Apple TV" upsells; small 28px buttons with 6px radius in dense lists.
- Circular icon buttons (plus for "Add to Up Next", share, ellipsis): 36px circles, glass or `rgba(255,255,255,0.1)` fill, white glyph. The ellipsis context button is 27px.
- On tvOS, focus replaces hover: the focused button turns white with black text and lifts slightly (scale about 1.05) with a soft shadow.

### Hero carousel

- Full-width art, 16:9 on desktop and taller (about 4:5) on phones.
- Title logo lower-left, max about 320px wide and 104-115px tall.
- A bottom gradient from transparent to `rgba(0,0,0,0.45)` and darker keeps text legible.
- Pagination dots below: 7px grey dots, the active one a 12px by 7px white pill with 4px radius.
- Advances automatically; motion art loops silently.

### Lockups (title cards)

```css
.lockup { width: 100%; }
.lockup-art {
  aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden;
  box-shadow: inset 0.5px 0.5px rgba(255,255,255,0.1), inset -0.5px -0.5px rgba(255,255,255,0.1);
  background: #323232;
}
.lockup-title { font: 400 15px/1.33 "SF Pro Text", "Inter", sans-serif; color: rgba(255,255,255,0.92); margin-top: 8px; }
.lockup-meta { font: 400 12px/1.25 "SF Pro Text", "Inter", sans-serif; color: rgba(255,255,255,0.64); }
```

- Poster lockups for Apple Originals are 2:3 with the title art baked in.
- Continue Watching lockups add a 3-4px progress bar along the bottom inside the art: white fill on `rgba(255,255,255,0.3)`, with "12m left" below.
- Hover on desktop scales the art to about 1.03 and shows the ellipsis button top-right.

### Shelves

A shelf is a title row ("Top Chart: Apple TV", 17px 700, plus a chevron that links to the full list) above a horizontally scrolling set of lockups. The web shows 5 lockups at 1320px and up, 4 at 1000px, 3 at 740px, and about 2.2 on phones so the next card peeks in. Arrow buttons appear at the row ends on hover.

### Detail page (product page)

- Full-bleed art top, title logo, a metadata line ("Apple Original · Drama · 2025 · TV-MA · 4K · Dolby Vision · Dolby Atmos · CC · AD"), synopsis capped at 3 lines with "More".
- Buttons: white Play (or "Accept Free Trial" for non-subscribers), plus a glass "+" for Up Next.
- Below: Seasons tabs, episode list (16:9 still, number, title, 2-line synopsis, runtime), "Trailers", "Cast & Crew" with circular headshots, "Related", and "Information" (studio, released, rating, languages).
- Badges such as 4K, Dolby Vision, HDR and CC are small outlined capsules: 1px `rgba(255,255,255,0.4)` border, 10px 600 text, 3px radius.

### Navigation

- **Web:** left sidebar (`#282828` dark, `#FAFAFA` light) with the Apple TV wordmark, Search, and items such as Home, Apple TV, MLS, Sports, Store, Channels. Selected row uses `rgba(235,235,245,0.1)` fill with 8px radius. Avatar and "Sign In" sit at the bottom. Below 740px it collapses to a 44-52px top bar.
- **iOS/iPadOS 26:** floating glass tab bar at the bottom (Home, Apple TV, MLS, Store, Search); it shrinks as you scroll.
- **tvOS 26:** glass tab row at the top that hides on scroll; the profile picker appears at launch.

### Profile picker ("Who's Watching?")

Large circular Memoji or initials avatars on black, names below in 15-17px. On tvOS the focused avatar grows and gains a white ring. Each profile keeps its own Up Next and recommendations.

### Player controls

- Black canvas, controls in a glass panel along the bottom: scrubber (white played track on `rgba(255,255,255,0.3)`, thumb appears on hover), elapsed and remaining time in tabular numerals.
- Large centred play/pause, 10-second skip back and forward, glass pill buttons for subtitles, audio, AirPlay and picture-in-picture.
- "Skip Intro" and "Next Episode" appear lower-right as glass pills; the next-episode card shows a small 16:9 still and a countdown.
- Controls fade after about 3 seconds of no input.

### Paywall and plan pages

Apple TV sells one subscription tier. The upsell is a full-bleed art montage with a short headline in SF Pro 600 at 32-48px, a price line, and a white or pill "Accept Free Trial"/"Start Watching" button. Bundles (Apple One, partner bundles) appear as cards on `rgba(255,255,255,0.1)` with 18px radius. Prices vary by region and change; read them from the live page.

### Modals and menus

- Dialogs: `#1F1F1F` fill with 1px inner `rgba(255,255,255,0.2)` stroke, `0 8px 40px rgba(0,0,0,0.55)` shadow, 18-28px radius.
- Context menus: thick glass material, 185px min width, 18px radius, items 13px, destructive items in `#FF3B30`.

## 6. Layout & Spacing

- **Breakpoints (web):** 320-739px (phone), 740px, 1000px, 1320px. These four steps drive card counts and type sizes.
- **Margins:** 20px horizontal margin on phones, 25-30px on tablets, 40px on desktop (`--default-margin: 40px`). Column gap 20px.
- **Hero lockup:** text and buttons sit in a 550-870px wide block lower-left.
- **Shelf spacing:** about 40-60px between shelves; 8px between art and title.
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 60.
- **tvOS:** content keeps to Apple's 60pt side safe area at 1920 by 1080; focus scaling needs about 40pt of padding around rows.

## 7. Depth, Elevation & Motion

- **Glass instead of shadow.** Floating chrome uses translucent material, backdrop blur and a 1px inner light stroke. Shadows are soft and wide: `0 10px 40px rgba(0,0,0,0.2)`.
- **Artwork hairline.** Lockups get a half-pixel inset stroke so dark art does not melt into the background.
- **Scrims.** Bottom gradients on hero art (a multi-stop black fade starting at 45% opacity), left gradients on detail pages.
- **Easing:** `cubic-bezier(0, 0, 0.2, 1)` for most UI (ease-out), `cubic-bezier(0.4, 0, 0.6, 1)` for symmetric fades, `cubic-bezier(0.04, 0.04, 0.12, 0.96)` for long carousel slides.
- **Durations:** 150-250ms for hover and press, 400-600ms for hero transitions.
- **tvOS parallax:** focused posters tilt with the remote's touch surface and show a moving specular highlight. Do not imitate this on the web beyond a small scale-up.
- Respect `prefers-reduced-motion`: stop autoplay and carousel rotation.

## 8. Iconography & Imagery

- **Icons:** SF Symbols, regular or medium weight, matched to the adjacent text size: `play.fill`, `plus`, `checkmark`, `ellipsis`, `info.circle`, `airplayvideo`, `captions.bubble`, `speaker.wave.2`. Monochrome white on dark.
- **Artwork:** studio key art with the title logo applied; Apple Originals have consistent poster and 16:9 sets. Art is never cropped through the title logo.
- **Sports (MLS, Friday Night Baseball):** team logos on dark circles, live scores in tabular SF Pro, a red LIVE capsule.
- No illustration style and no stock photography; the shows are the imagery.

## 9. Voice & Microcopy

Short, plain and calm. Apple-standard capitalisation: title case for buttons and headings, sentence case for descriptions.

- Buttons: "Play", "Resume", "Play S1, E1", "Accept Free Trial", "Add to Up Next", "Remove from Up Next", "See All"
- Shelves: "Continue Watching", "Top Chart: Apple TV", "New Releases", "Because You Watched Severance"
- Detail labels: "Apple Original", "New Episode Friday", "All Episodes Available"
- Player: "Skip Intro", "Next Episode", "Subtitles", "Audio"
- Profile: "Who's Watching?"
- Errors: "Can't play this video. Check your connection and try again."
- Say "Apple TV" for the service and the app. Do not write "Apple TV+" in new material.

## 10. Do's and Don'ts

**Do**

- Let key art fill the screen and keep chrome to white type and glass.
- Use SF Pro text styles (Large Title, Title 2, Body) and keep sizes on Apple's scale.
- Make Play the only solid white button on a screen.
- Use 8px radii on artwork, 12-18px on buttons and panels, full pills for upsells.
- Use system blue only for links and text buttons.
- Follow the system light/dark setting on the web; keep the player black.

**Don't**

- Don't add a brand accent colour; the identity is monochrome.
- Don't put art in heavy borders or drop shadows.
- Don't fill panels with flat grey when glass would sit over art.
- Don't write "Apple TV+" or "AppleTV".
- Don't set show names in type when title art exists.
- Don't animate the interface faster or bouncier than about 250ms ease-out.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of the Apple TV app. Black background (`#000000` for hero and player, `#1F1F1F` for page body in dark mode), white text at 92% (`rgba(255,255,255,0.92)`), secondary text at 64%. Use SF Pro with Inter as the fallback and Apple's text styles: page title 26px 700, shelf title 17px 700, lockup title 15px 400, body 13-15px, metadata 12px. Open with a full-bleed hero carousel of key art with a bottom black gradient, the title logo lower-left and a white Play button (44px tall, 12px radius, black 600 text). Below, horizontal shelves of 16:9 lockups with 8px radius, a half-pixel inner white hairline, title and grey metadata below, and a white progress bar on Continue Watching items. Floating chrome (tab bar, secondary buttons, menus) is glass: `rgba(38,38,40,0.6)` with a 30px backdrop blur, 1px inner `rgba(255,255,255,0.2)` stroke and `0 10px 40px rgba(0,0,0,0.2)` shadow, 18px radius. Links are `#0A84FF`. No brand accent colour, no heavy borders, ease-out 200ms transitions.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-page: #1F1F1F;
  --brand-sidebar: #282828;
  --brand-placeholder: #323232;
  --brand-text: rgba(255, 255, 255, 0.92);
  --brand-text-secondary: rgba(255, 255, 255, 0.64);
  --brand-text-tertiary: rgba(255, 255, 255, 0.4);
  --brand-fill-quaternary: rgba(255, 255, 255, 0.1);
  --brand-fill-quinary: rgba(255, 255, 255, 0.05);
  --brand-key: #0A84FF;
  --brand-key-light: #007AFF;
  --brand-red: #FF453A;
  --brand-green: #32D74B;
  --brand-glass: rgba(38, 38, 40, 0.6);
  --brand-glass-stroke: rgba(255, 255, 255, 0.2);
  --brand-glass-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  --brand-font: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-radius-art: 8px;
  --brand-radius-button: 12px;
  --brand-radius-glass: 18px;
  --brand-radius-pill: 9999px;
  --brand-ease: cubic-bezier(0, 0, 0.2, 1);
  --brand-duration: 200ms;
  --brand-margin: 40px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Apple.

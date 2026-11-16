---
name: Spotify
slug: spotify
url: https://open.spotify.com
category: Music
tagline: "Dark, cover-art-led player UI with a single bright green and pill controls."
updated: 2026-11-16
logoBackground: "#121212"
theme: dark
colors:
  - name: Spotify Green
    hex: "#1ED760"
    role: Play button, active state, progress fill, brand mark
  - name: Brand Green (legacy)
    hex: "#1DB954"
    role: Print and older brand assets, logo on white
  - name: Black
    hex: "#000000"
    role: App shell behind panels, now-playing bar
  - name: Base
    hex: "#121212"
    role: Panel background (library, main view)
  - name: Elevated
    hex: "#1F1F1F"
    role: Cards on hover, menus, highlight rows
  - name: Elevated Highlight
    hex: "#2A2A2A"
    role: Hover on elevated surfaces, search field
  - name: Text
    hex: "#FFFFFF"
    role: Titles, primary text
  - name: Subdued Text
    hex: "#B3B3B3"
    role: Artist names, meta, inactive nav
  - name: Essential Subdued
    hex: "#7C7C7C"
    role: Borders on inputs, inactive icons, disabled
  - name: Decorative Subdued
    hex: "#292929"
    role: Dividers, progress track background
  - name: Green Hover
    hex: "#3BE477"
    role: Hover on green buttons
  - name: Green Press
    hex: "#1ABC54"
    role: Pressed green buttons
  - name: Negative
    hex: "#ED2C3F"
    role: Errors (essential), text variant #F3727F
  - name: Warning
    hex: "#FFA42B"
    role: Warnings
  - name: Announcement
    hex: "#1278F2"
    role: Informational banners, text variant #539DF5
fonts:
  display:
    family: "Spotify Mix Title"
    fallback: "Figtree"
    weights: [700, 800]
  body:
    family: "Spotify Mix UI"
    fallback: "Figtree"
    weights: [400, 600, 700]
typeScale:
  - { role: Hero, size: 96, weight: 800, lineHeight: 1.0, tracking: "-0.04em" }
  - { role: Display, size: 48, weight: 800, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Section Title, size: 24, weight: 700, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Card Title, size: 16, weight: 700, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Meta, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 6, lg: 8, xl: 16, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32, 48]
shadows:
  - { name: Card, value: "0 8px 24px rgba(0,0,0,0.5)" }
  - { name: Menu, value: "0 16px 24px rgba(0,0,0,0.3), 0 6px 8px rgba(0,0,0,0.2)" }
  - { name: Play Button, value: "0 8px 8px rgba(0,0,0,0.3)" }
preview:
  bg: "#121212"
  surface: "#1F1F1F"
  text: "#FFFFFF"
  muted: "#B3B3B3"
  border: "#292929"
  accent: "#1ED760"
  accentText: "#000000"
  radius: 9999
  buttonStyle: pill
---

# Spotify

## 1. Visual Theme & Atmosphere

Spotify is a dark, quiet frame for album art. The web and desktop player sit on a black shell (`#000000`) with rounded `#121212` panels for the library and the main view. Text is white and grey, controls are pills and circles, and the only colour in the chrome is Spotify Green (`#1ED760`), used for the play button, active states and progress. Colour beyond that comes from cover art: playlist and album headers pull a dominant colour from the artwork and fade it into the dark panel.

What makes it recognisable:

- **The green circle play button.** 48-56px, green fill, black triangle, appears on hover over cards and fixed in playlist headers.
- **Black shell, rounded panels.** Left library and main view are separate `#121212` panels with 8px corners and 8px gaps on black.
- **Colour-extracted gradients.** Headers fade from an artwork colour at the top into `#121212`.
- **Heavy, tight headlines.** Playlist titles run very large (up to 96px) in an 800 weight with negative tracking.
- **Card grids of square art.** Cards are image on top, bold title, grey subtitle, with an `#1F1F1F` hover fill.

Density is medium. Lists are compact (56px track rows), but headers and cover art take space.

## 2. Color Palette & Roles

### Dark theme (default, from the Encore design system)

| Token | Hex | Role |
| --- | --- | --- |
| Shell | `#000000` | App background behind panels, now-playing bar |
| background-base | `#121212` | Panels, main view |
| background-highlight | `#1F1F1F` | Hover rows, card hover |
| background-press | `#000000` | Pressed rows |
| background-elevated-base | `#1F1F1F` | Menus, dialogs, search field |
| background-elevated-highlight | `#2A2A2A` | Hover on elevated surfaces |
| background-elevated-press | `#191919` | Pressed on elevated |
| background-tinted-base | `rgba(255,255,255,0.1)` | Chips, secondary pills |
| background-tinted-highlight | `rgba(255,255,255,0.14)` | Chip hover |
| text-base | `#FFFFFF` | Titles, primary text |
| text-subdued | `#B3B3B3` | Artist names, meta, inactive nav |
| essential-subdued | `#7C7C7C` | Input borders, disabled icons |
| decorative-subdued | `#292929` | Dividers, progress track |
| text-bright-accent | `#1ED760` | Now-playing track title, active links |

### Green

| Name | Hex | Use |
| --- | --- | --- |
| Spotify Green | `#1ED760` | Digital accent, play button, progress fill |
| Green hover | `#3BE477` | Hover on green surfaces |
| Green press | `#1ABC54` | Pressed |
| Brand Green (legacy) | `#1DB954` | Older logo files, print, green on white |
| Dark green text on light | `#127E38` | Accessible green text on white |

Text on green is always black (`#000000`).

### Semantic

| Name | Essential (icons/fills) | Text |
| --- | --- | --- |
| Negative | `#ED2C3F` | `#F3727F` |
| Warning | `#FFA42B` | `#FFA42B` |
| Positive | `#1ED760` | `#1ED760` |
| Announcement | `#1278F2` | `#539DF5` |

### Light surfaces

The marketing site (spotify.com) and some Encore components use a light set: background `#FFFFFF`, highlight `#F0F0F0`, press `#C7C7C7`, text `#000000`, subdued text `#5A5A5A`, decorative `#DEDEDE`. The player itself is dark only.

### Fallback background

Spotify's developer guidelines say to extract a colour from cover art for playback backgrounds; when you can't, use `#191414`.

## 3. Typography

**Families.** Since May 2024 Spotify uses **Spotify Mix**, a variable typeface family made with Dinamo, replacing Spotify Circular (Lineto). The player loads two cuts:

- **Spotify Mix UI Title** for headings and large titles.
- **Spotify Mix UI** for body text and controls.

```css
--encore-title-font-stack: SpotifyMixUITitle, var(--fallback-fonts, sans-serif);
--encore-body-font-stack: SpotifyMixUI, var(--fallback-fonts, sans-serif);
```

Both are proprietary. For rebuilds use **Figtree** (Google Fonts), which has similar geometric proportions and rounded terminals. For third-party apps, Spotify's developer guidelines ask you to use the platform default sans (or Helvetica Neue, Helvetica, Arial) rather than imitate the brand face.

### Scale

Encore sizes step in rem from a 16px base: 0.6875, 0.75, 0.875, 1, 1.125, 1.5, 2, 3, 6rem.

| Role | Size (px) | Weight | Line height | Tracking | Example |
| --- | --- | --- | --- | --- | --- |
| Hero | 96 | 800 | 1.0 | -0.04em | Playlist / album title in header (scales down with width) |
| Display | 48 | 800 | 1.1 | -0.02em | Artist name, smaller headers |
| Section Title | 24 | 700 | 1.25 | -0.01em | "Made for you", "Recently played" |
| Card Title | 16 | 700 | 1.5 | 0 | Card name, track title in now playing |
| Body | 16 | 400 | 1.5 | 0 | Track title in lists |
| Small | 14 | 400 | 1.43 | 0 | Artist under track, nav labels |
| Meta | 12 | 400 | 1.33 | 0 | Duration, "Playlist • Spotify", legal |

### Rules

- Sentence case for nav and buttons ("Your Library", "Create playlist" uses title-ish case for product names only).
- Headings are tight: negative tracking above 24px, never positive tracking.
- Use tabular figures for durations and the timestamps beside the progress bar.
- Header titles scale with container width (clamp from about 32px to 96px) and wrap to two lines max.
- "•" separates metadata: "Album • 2024 • 12 songs, 41 min".

## 4. Logo & Brand Mark

The full logo is the **icon** (a circle with three curved sound-wave bars, thick at the top and thinner below) plus the **wordmark** "Spotify". The 2024 refresh redrew the wordmark in Spotify Mix and slightly reduced the circle.

- **Colours:** green icon with black or white wordmark; all-black; all-white. The green logo only goes on black, white, or non-duotoned photography. On any other colour, use the monochrome black or white logo.
- **Clear space:** half the height of the icon on every side.
- **Minimum size:** full logo 70px wide on screen (20mm print); icon alone 21px (6mm print).
- **Icon alone:** only when space is tight or the brand is already established on the page. The wordmark is never used without the icon.

Misuse:

- Do not rotate, stretch, recolour, outline or add effects.
- Do not fill in the sound bars or change their count.
- Do not use the logo inside a sentence, as a letter, or to build other shapes.
- Do not place it on busy or low-contrast areas.
- Do not lock it up with other brands.

## 5. Components

### Buttons

```css
.btn {
  min-height: 48px;
  padding: 8px 32px;
  border-radius: 9999px;
  font: 700 16px/1.5 var(--brand-font-body);
  border: 0;
  cursor: pointer;
  transition: transform 33ms cubic-bezier(.3,0,0,1), background-color 33ms;
}
.btn:hover { transform: scale(1.04); }
.btn:active { transform: scale(1); opacity: 0.7; }
.btn-primary { background: #1ED760; color: #000000; }
.btn-primary:hover { background: #3BE477; }
.btn-primary:active { background: #1ABC54; }
.btn-secondary { background: transparent; color: #FFFFFF; box-shadow: inset 0 0 0 1px #7C7C7C; }
.btn-secondary:hover { box-shadow: inset 0 0 0 1px #FFFFFF; }
.btn-white { background: #FFFFFF; color: #000000; }
.btn-tertiary { background: transparent; color: #B3B3B3; padding: 8px 16px; }
.btn-tertiary:hover { color: #FFFFFF; }
.btn:focus-visible { outline: 2px solid #FFFFFF; outline-offset: 2px; }
```

- **Sizes:** small 32px, medium 48px, large 56px (Encore control sizes).
- **Play button:** 56px circle (48px on cards), `#1ED760` with a 24px black play glyph. Hover scales to 1.04 and lightens to `#3BE477`. On cards it slides up 8px and fades in on card hover, with `0 8px 8px rgba(0,0,0,0.3)`.
- **Icon buttons:** 32px circles, transparent, icon `#B3B3B3` turning `#FFFFFF` on hover. Active toggles (shuffle, repeat) turn green with a 4px green dot below.
- **Follow / Save:** small outline pill, 32px tall, 14px/700.

### Inputs

```css
.input {
  height: 48px;
  padding: 0 16px;
  background: #121212;
  border: 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #7C7C7C;
  color: #FFFFFF;
  font: 400 16px var(--brand-font-body);
}
.input:hover { box-shadow: inset 0 0 0 1px #FFFFFF; }
.input:focus { box-shadow: inset 0 0 0 3px #FFFFFF; outline: none; }
.input[aria-invalid="true"] { box-shadow: inset 0 0 0 1px #F3727F; }
```

- **Search:** 48px pill, `#1F1F1F` fill, 24px magnifier on the left, browse icon on the right. Hover `#2A2A2A`, focus adds a 2px white inner ring.

### Cards

```css
.card {
  padding: 12px;
  border-radius: 6px;
  background: transparent;
  transition: background-color 300ms ease;
}
.card:hover { background: #1F1F1F; }
.card img { width: 100%; aspect-ratio: 1; border-radius: 6px; box-shadow: 0 8px 24px rgba(0,0,0,0.5); }
.card-artist img { border-radius: 50%; }
.card-title { margin-top: 8px; font: 700 16px/1.5 var(--brand-font-body); color: #FFFFFF; }
.card-sub { font: 400 14px/1.43 var(--brand-font-body); color: #B3B3B3; }
```

Artist cards use circular images; everything else uses squares with 4-8px radius.

### Navigation

- **Top bar:** black, 64px, home button (48px round `#1F1F1F`), centred search pill, profile avatar on the right.
- **Library panel:** left `#121212` panel, 8px radius, resizable (about 280px default, 72px collapsed). Filter chips at the top, then 64px rows: 48px cover (circle for artists), title 16px, "Playlist • Name" 14px subdued.
- **Now-playing bar:** black, 72px tall, three zones: track info (56px cover, title, artist) on the left; transport (shuffle, previous, play, next, repeat) with a 4px progress bar under it in the middle; volume and device controls on the right.
- **Mobile:** bottom tab bar with Home, Search, Your Library (and Premium), black with a gradient fade above; mini player floats above the tabs as a rounded 56px card tinted from the cover.

### Tabs and chips

Filter chips: 32px pills, `rgba(255,255,255,0.1)` fill, white 14px text. Selected chip is white fill with black text. No underline tabs.

### Track list

```css
.track-row {
  display: grid;
  grid-template-columns: 16px 4fr 2fr minmax(120px, 1fr);
  gap: 16px;
  height: 56px;
  padding: 0 16px;
  border-radius: 4px;
  align-items: center;
}
.track-row:hover { background: rgba(255,255,255,0.1); }
.track-row[aria-selected="true"] { background: rgba(255,255,255,0.3); }
```

The index number becomes a play icon on hover. The playing track shows an animated equaliser in green and a green title.

### Progress bar

4px tall track `#4D4D4D` (or `rgba(255,255,255,0.3)`), fill `#FFFFFF`, 2px radius. On hover the fill turns `#1ED760` and a 12px white thumb appears.

### Badges

- **Explicit "E":** 16px square, `rgba(255,255,255,0.6)` fill, black 9px/700 letter, 2px radius.
- **Verified artist:** blue `#4CB3FF` badge with white check.
- **New / Premium:** small pills, white or green fill, black 12px/700.

### Modals and menus

Context menus: `#282828` (elevated), 4px radius, 4px padding, menu shadow, rows 40px with 14px text and 16px icons. Dialogs: `#1F1F1F`, 8px radius, 24-32px padding, scrim `rgba(0,0,0,0.7)`.

### Signature components

- **Header gradient:** playlist headers use the artwork colour at full strength at the top fading to `#121212` over about 232px, then a translucent black band behind the action row.
- **Wrapped and campaign cards:** bold full-bleed colour, oversized type, high-contrast pairings. Kept out of the everyday UI.
- **Canvas:** looping vertical video behind the now-playing view on mobile.

## 6. Layout & Spacing

- **Spacing tokens (Encore):** 2, 4, 6, 8, 12, 16, 20/24, 32, 48, 64px.
- **Shell:** 8px padding around panels and 8px gaps between them on black.
- **Content padding:** 24px inside the main panel on desktop, 16px on narrow widths.
- **Card grid:** `repeat(auto-fill, minmax(180px, 1fr))`, 24px gap; shelves show a single row with "Show all".
- **Panel widths:** library 280-420px; right "Now playing view" panel 280-420px.
- **Breakpoints:** about 768px (mobile web layout), 1024px, 1280px. Header type scales with container queries.
- **Now-playing bar:** 72px fixed.

## 7. Depth, Elevation & Motion

| Level | Treatment |
| --- | --- |
| Shell | `#000000` |
| Panel | `#121212`, 8px radius |
| Hover | `#1F1F1F` |
| Elevated (menus, dialogs) | `#282828` or `#1F1F1F` plus menu shadow |
| Art | `0 8px 24px rgba(0,0,0,0.5)` under covers |

Sticky headers inside the main panel fade in a solid version of the artwork colour as you scroll.

### Motion

| Use | Duration | Easing |
| --- | --- | --- |
| Button hover scale (1.04) | 33ms | `cubic-bezier(.3,0,0,1)` |
| Card hover fill | 300ms | `ease` |
| Play button reveal on card | 300ms, translateY 8px > 0 | `cubic-bezier(.3,0,.4,1)` |
| Panel and drawer | 250-300ms | `cubic-bezier(.3,0,0,1)` |
| Like (heart) pop | about 300ms with overshoot | `cubic-bezier(.47,0,.23,1.38)` |

## 8. Iconography & Imagery

- **Icons:** Encore icon set, 16px and 24px sizes, filled and outline pairs, rounded geometric shapes. Default `#B3B3B3`, hover `#FFFFFF`, active `#1ED760`.
- **Cover art:** the main imagery. Show it square, unmodified; round corners to 4px on small and medium screens and 8px on large ones. Don't crop, blur, overlay text or put your logo on it.
- **Artist photos:** circular in lists and cards, full-bleed banners on artist pages with a bottom dark gradient for the name.
- **Brand graphics:** flat shapes, duotone photography and saturated colour pairs in marketing. Keep duotones out of the player chrome.

## 9. Voice & Microcopy

Warm, plain and a bit playful. Speaks to the listener directly, short and lowercase-friendly in feature names.

- Sentence case for buttons and headings: "Create playlist", "Show all", "Add to queue".
- Personal shelf titles: "Made for Sam", "Jump back in", "Your top mixes".
- Short, calm errors: "Something went wrong. Try reloading the page."
- Metadata uses "•" separators: "Single • 2026".

Sample strings:

- "Log in" / "Sign up free" / "Continue with Google"
- "Your Library"
- "Added to Liked Songs"
- "Let's find something for your playlist"
- "Listen without limits. Try 1 month of Premium for $0."

## 10. Do's and Don'ts

**Do**

- Keep the chrome dark: `#000000` shell, `#121212` panels, `#1F1F1F` hover.
- Use `#1ED760` only for the play button, active states and progress.
- Put black text and icons on green.
- Use pill buttons and circular icon buttons; 4-8px radius on art and panels.
- Let cover art drive colour through extracted header gradients.
- Use 800 weight with tight tracking for big titles.

**Don't**

- Don't use green for body text on dark or for large backgrounds in the player.
- Don't modify cover art or place text over it.
- Don't put the green logo on coloured backgrounds; use mono there.
- Don't add borders around cards; use hover fills.
- Don't use light mode for a player UI.
- Don't use Spotify Circular in new work; it has been replaced by Spotify Mix.

## 11. Agent Prompt Guide

Paste this when asking an agent to build a Spotify-style UI:

> Build a dark music player in the style of Spotify. Black `#000000` app shell with 8px gaps around rounded (8px) `#121212` panels: a left library panel and a main view. White `#FFFFFF` titles, `#B3B3B3` secondary text, `#292929` dividers. Use Figtree as a stand-in for Spotify Mix: 16px body, 700 card titles, 48-96px 800-weight headers with negative tracking. The only accent is `#1ED760`: a 56px green circular play button with a black glyph, active icon states and the progress fill. Primary buttons are pills (48px tall, 700 weight, black on green), secondary pills are transparent with a 1px `#7C7C7C` inner border; all buttons scale to 1.04 on hover. Cards are square cover art with 6px radius and a deep shadow, bold title and grey subtitle, with a `#1F1F1F` hover fill and a green play button that slides up on hover. Playlist headers fade from an artwork colour into `#121212`. A 72px black now-playing bar sits at the bottom with track info, transport controls and a 4px progress bar.

```css
:root {
  --brand-green: #1ED760;
  --brand-green-hover: #3BE477;
  --brand-green-press: #1ABC54;
  --brand-green-print: #1DB954;
  --brand-shell: #000000;
  --brand-bg: #121212;
  --brand-highlight: #1F1F1F;
  --brand-elevated: #1F1F1F;
  --brand-elevated-highlight: #2A2A2A;
  --brand-tinted: rgba(255, 255, 255, 0.1);
  --brand-text: #FFFFFF;
  --brand-text-subdued: #B3B3B3;
  --brand-essential-subdued: #7C7C7C;
  --brand-divider: #292929;
  --brand-negative: #ED2C3F;
  --brand-negative-text: #F3727F;
  --brand-warning: #FFA42B;
  --brand-announcement: #1278F2;
  --brand-font-title: "SpotifyMixUITitle", "Figtree", system-ui, sans-serif;
  --brand-font-body: "SpotifyMixUI", "Figtree", system-ui, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 8px;
  --brand-radius-pill: 9999px;
  --brand-control-sm: 32px;
  --brand-control-md: 48px;
  --brand-control-lg: 56px;
  --brand-shadow-art: 0 8px 24px rgba(0, 0, 0, 0.5);
  --brand-ease: cubic-bezier(0.3, 0, 0, 1);
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Spotify.

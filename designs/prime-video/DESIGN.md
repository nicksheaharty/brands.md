---
name: Prime Video
slug: prime-video
url: https://www.primevideo.com
category: Streaming
tagline: "Midnight blue-black, glowing blue pills, big hero cards: Amazon's 2024 streaming redesign."
updated: 2026-11-16
logoBackground: "#00050D"
theme: dark
colors:
  - name: Midnight
    hex: "#00050D"
    role: App background, logo background, text on light fills
  - name: Prime Blue
    hex: "#1A98FF"
    role: Join Prime glow, highlights, promo pills
  - name: Icon Blue
    hex: "#0779FF"
    role: App icon background, brand blue on light surfaces
  - name: White
    hex: "#FFFFFF"
    role: Logo, primary text, primary button fill, badges
  - name: Entitled Blue
    hex: "#0070F0"
    role: Included-with-Prime check icon, checkboxes
  - name: Store Yellow
    hex: "#FFD62C"
    role: Rent or buy (store bag) icon
  - name: Card Surface
    hex: "#191E25"
    role: Expanded card body, panels
  - name: Charcoal
    hex: "#33373D"
    role: Chips, disabled borders, dividers
  - name: Text Secondary
    hex: "#AAAAAA"
    role: Metadata, synopsis
  - name: Link Blue
    hex: "#79B8F3"
    role: Inline links
  - name: Live Red
    hex: "#FF0019"
    role: Live progress, live badges
  - name: Mint
    hex: "#37F1A3"
    role: Positive status labels
  - name: Pressed Blue
    hex: "#045ED9"
    role: Pressed checkbox and link
  - name: Error Pink
    hex: "#FF9FA0"
    role: Error text on dark
fonts:
  display:
    family: "Amazon Ember"
    fallback: "Inter"
    weights: [700, 900]
  body:
    family: "Amazon Ember"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Display, size: 50, weight: 700, lineHeight: 1.12, tracking: "0.01em" }
  - { role: Heading L, size: 40, weight: 700, lineHeight: 1.12, tracking: "0.01em" }
  - { role: Heading M, size: 32, weight: 700, lineHeight: 1.2, tracking: "0.02em" }
  - { role: Row Title, size: 20, weight: 700, lineHeight: 1.2, tracking: "0.04em" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.4, tracking: "0.01em" }
  - { role: Label, size: 16, weight: 500, lineHeight: 1.2, tracking: "0.04em" }
  - { role: Metadata, size: 15, weight: 500, lineHeight: 1.4, tracking: "0.02em" }
  - { role: Badge, size: 12, weight: 700, lineHeight: 1, tracking: "0.02em" }
radii: { xs: 3, sm: 8, md: 12, lg: 16, xl: 24, pill: 10000 }
spacing: [4, 8, 12, 16, 24, 36, 48, 72]
shadows:
  - { name: Card Hover, value: "0 4px 86px 0 rgba(0,0,0,0.95), 0 4px 4px 0 rgba(0,0,0,0.25)" }
  - { name: Menu, value: "0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)" }
  - { name: Blue Glow, value: "0 -4px 16px 0 rgba(26,152,255,0.2)" }
preview:
  bg: "#00050D"
  surface: "#191E25"
  text: "#FFFFFF"
  muted: "#AAAAAA"
  border: "#33373D"
  accent: "#1A98FF"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Prime Video

## 1. Visual Theme & Atmosphere

Prime Video is a midnight canvas (`#00050D`, black with a trace of navy) with very large artwork, white type, and a single blue that glows rather than fills. The 2024 redesign rebuilt the app around a top navigation of pill-shaped tabs, a "super carousel" of oversized hero cards, and clear signals for what you can watch for free and what costs extra. The design system is called Fable; its tokens (`--fable-*`) are visible in the live CSS.

What makes it recognisable:

- **The smile.** The Amazon arrow-smile under the lowercase "prime video" wordmark. On the app icon it sits under the stacked words on a solid blue square.
- **Blue glow.** The "Join Prime" button and selected nav pills use Prime Blue (`#1A98FF`) at 80-90% with a soft upward glow (`0 -4px 16px rgba(26,152,255,0.2)`), as if lit from below.
- **Entitlement icons.** A blue check (`#0070F0`) marks titles included with Prime; a yellow shopping bag (`#FFD62C`) marks titles to rent or buy; channel logos mark add-on subscriptions. They sit next to the title on every card and hero.
- **Corner badges.** White tabs with dark text ("TOP 10", "NEW SERIES", "TRENDING") pinned to the top-right corner of artwork, square on the outer corners.
- **Expanding cards.** On hover the card grows to about 1.4-1.56 times its size, plays a preview, and shows a synopsis and buttons on a `#191E25` body.

Density: low on Home (big hero, large cards), higher in Live TV and Store grids. Positive letter spacing on most type gives it a slightly wide, TV-legible feel.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Midnight | `#00050D` | App background, text on white buttons and badges |
| Prime Blue | `#1A98FF` (`rgb(26,152,255)`) | Join Prime pill, selected nav glow, promo tags |
| Icon Blue | `#0779FF` | App icon square, brand blue on light pages |
| Entitled Blue | `#0070F0` | Included-with-Prime check, selected checkboxes |
| Pressed Blue | `#045ED9` | Pressed checkbox and link state |
| Store Yellow | `#FFD62C` | Rent or buy bag icon and store labels |
| White | `#FFFFFF` | Logo, text, primary button, corner badges |

### Surfaces

| Name | Value | Use |
| --- | --- | --- |
| Midnight | `#00050D` | Page |
| Card Surface | `#191E25` | Hover card body, info panels |
| Charcoal | `#33373D` | Chips, disabled borders, separators |
| Deep Slate | `#0F171E` | Legacy panels, account pages |
| Scrim 50/75/90 | `rgba(0,5,13,0.5)` / `0.75` / `0.9` | Gradients over art, modals |
| Translucent fill | `rgba(255,255,255,0.2)` | Secondary button ("More details") |
| Translucent strong | `rgba(255,255,255,0.35)` | Secondary button hover, outline ring |

### Text

| Name | Hex | Use |
| --- | --- | --- |
| Primary | `#FFFFFF` | Titles, buttons, nav |
| Secondary | `#AAAAAA` | Metadata, synopses |
| Tertiary | `#8197A4` | Legacy rating boxes and captions |
| Disabled | `#666666` | Disabled controls |
| Link | `#79B8F3` | Inline links (underline in body copy) |

### Semantic and status

| Name | Hex | Use |
| --- | --- | --- |
| Live Red | `#FF0019` | Live progress bar, LIVE label |
| Badge Red | `#EB0017` | Urgent label fill (white text) |
| Badge Blue | `#0070F0` | Info label fill (midnight text) |
| Mint | `#37F1A3` | Positive status labels (midnight text) |
| Confirm Green | `#E4FDBF` / text `#034C26` | Confirmation buttons and toasts |
| Error Pink | `#FF9FA0` | Error text and markers on dark |
| Sky | `#36B0EE` / `#90DFFE` | Kids and promo accents (approximate role) |

### Mode

Dark only in the app. The amazon.com retail pages that host Prime Video use Amazon's light retail styling; treat those as a different system.

## 3. Typography

- **Amazon Ember** is the family the live CSS names (`font-family: Amazon Ember, Amazon Arabic Ember, Arial, sans-serif`). The tokens also define **Ember Modern Display** and **Ember Modern Text** weights (400, 500, 700, 900), the refreshed cut used in the 2024 app. Both are proprietary to Amazon.
- Fallback: **Inter** from Google Fonts. System stack: `Arial, sans-serif`.
- Title names in heroes and detail pages are title logo art.

### Scale (Fable tokens, phone to large desktop)

| Token | Sizes | Weight | Tracking | Use |
| --- | --- | --- | --- | --- |
| heading-800 | 28 / 32 / 36 / 50px | 700 (bold variant 900) | 0 to 0.01em | Page titles, hero titles without logo art |
| heading-600 | 24 / 28 / 32 / 40px | 700 | 0 to 0.02em | Section headers, detail page title |
| heading-400 | 18 / 24 / 28 / 32px | 700 | 0 to 0.04em | Plan and modal titles |
| heading-200 | 16 / 18 / 20px | 700 | 0.02-0.04em | Row titles ("Free popular TV") |
| body | 16 / 18 / 20px | 400 (bold 700) | about 0.01em | Synopsis, settings |
| label-600 | 16 / 18 / 20px | 500 | 0.04em | Primary buttons |
| label-400 | 14 / 16 / 18px | 500 | 0.04-0.06em | Nav pills, secondary buttons |
| label-200 | 12 / 14 / 16px | 700 | 0.02em | Corner badges |
| metadata | 15px / 21px line | 500 | 0.02em | Year, runtime, rating |
| utility-90 | 10px | 400 | | Legal, tiny captions |

### Rules

- Positive tracking almost everywhere (0.01-0.06em); never negative.
- Headings are 700, with 900 for emphasis. Body is 400.
- Badges are uppercase ("TOP 10", "NEW SEASON"). Buttons and nav are sentence case ("Join Prime", "More details", "Watch Live").
- Metadata strings separate items with a middle dot or spacing: "Season 4・TV-MA".

## 4. Logo & Brand Mark

- **Wordmark:** lowercase "prime video" in a rounded geometric sans, with the Amazon smile arrow curving underneath from below "prime" to below "video". The 2024 version tightened the letters and thickened the smile.
- **App icon:** "prime" stacked over "video" with the smile below, white on a solid blue square (`#0779FF`). No gradient.
- **Colour versions:** white on midnight (product), blue on white, white on blue. Never two colours in one wordmark.
- **Clear space:** the height of the "p" bowl on all sides.
- **Minimum size:** about 72px wide for the horizontal logo; below that, use the stacked icon form.

Misuse: do not separate the smile from the words, recolour the smile orange (that is the Amazon retail logo), set "prime video" in Amazon Ember, or add the old 2016 cyan colour (`#00A8E1`).

## 5. Components

### Buttons (Fable)

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 48px; padding: 5px 24px;      /* 54-62px tall on larger breakpoints */
  font: 500 16px/1.2 "Amazon Ember", "Inter", Arial, sans-serif; letter-spacing: 0.04em;
  border: 0; border-radius: 8px; color: #FFFFFF;
  transition: transform 200ms ease-in-out, background-color 200ms ease-in-out;
}
.btn-primary { background: #FFFFFF; color: #00050D; }                 /* Play, Watch now */
.btn-primary:hover { transform: scale(1.04); }
.btn-secondary { background: rgba(255,255,255,0.2); }                 /* More details */
.btn-secondary:hover { background: rgba(255,255,255,0.35); }
.btn-outline { background: #00050D; box-shadow: inset 0 0 0 2px rgba(255,255,255,0.35); }
.btn:disabled { background: #00050D; box-shadow: inset 0 0 0 3px #33373D; color: #666666; }
.btn:focus-visible { outline: 3px solid #FFFFFF; outline-offset: 3px; }
```

The play button is a white circle or rounded square with a midnight triangle on cards, and a wide white "Play" or "Watch Live" button on heroes. Icon actions (watchlist "+", trailer, like) are 44-48px circles with `rgba(255,255,255,0.2)` fill and a white glyph; focus adds a 3-4px white ring offset 3px.

### Join Prime pill

```css
.join-prime {
  height: 40px; padding: 0 16px; border-radius: 8px;
  color: #FFFFFF; font: 500 16px/1 "Amazon Ember", sans-serif; letter-spacing: 0.04em;
  background: rgba(26,152,255,0.8);
  box-shadow: 0 -4px 16px 0 rgba(26,152,255,0.2);
}
.join-prime:hover { background: rgba(26,152,255,0.9); box-shadow: 0 -4px 28px 0 rgba(26,152,255,0.5); }
.join-prime:active { opacity: 0.7; }
```

### Navigation

- **Top bar:** 60-66px tall on desktop (48px on phone), transparent over the hero with a midnight gradient, logo left, then text pills: "Home", "Movies", "TV shows", "Sports", "Live TV", "Subscriptions", "Store", "Free to me". Pills are 8px radius, 16px 500 with 0.04em tracking.
- **Selected and hover pills** fill with `rgba(255,255,255,0.9)` and switch text to `#00050D`, with a soft white glow above (`0 -4px 28px rgba(255,255,255,0.2)`). Inactive pills sit on `rgba(255,255,255,0.1)` or nothing.
- **Right side:** search, language, "Join Prime" glow pill, profile avatar.
- **TV:** the same pill row at the top; a separate row under it filters by subscription. A "Categories" menu opens a full-screen grid.
- **Mobile:** bottom tab bar (Home, Store, Live TV, Find, My Stuff).

### Super carousel (hero)

- Cards several times larger than standard row cards, 16-24px radius, artwork at about 16:9 to 21:9 depending on width; the top hero height is capped at 88vh.
- Each card shows title logo art, an entitlement line ("Included with Prime" with blue check, "Free trial or buy" with yellow bag, or a channel logo), a one-line pitch, the synopsis, and "Play" plus "More details".
- Side margins of 24px (phone) to 104px (large desktop); next card peeks in on the right; arrows 36-48px.

### Title cards

```css
.card {
  aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden;   /* 12-16px on larger breakpoints */
  background: #191E25; position: relative;
  transition: transform 300ms cubic-bezier(0.2, 0.45, 0, 1);
}
.card:hover { transform: scale(1.4); z-index: 2; box-shadow: 0 4px 86px 0 rgba(0,0,0,0.95), 0 4px 4px 0 rgba(0,0,0,0.25); }
.card .badge {
  position: absolute; top: 0; right: 0;
  background: #FFFFFF; color: #00050D;
  font: 700 12px/1 "Amazon Ember", sans-serif; letter-spacing: 0.02em; text-transform: uppercase;
  padding: 3px 5px; border-radius: 3px; border-top-left-radius: 0; border-bottom-right-radius: 0;
}
```

- Rows show 3-6 cards depending on width (`--dv-card-number`), gaps of 10, 12, 16 or 24px.
- The expanded card (after a short hover delay) plays a muted preview and reveals a `#191E25` body with title, entitlement icon, rating box, metadata in `#AAAAAA`, and a white play button plus circular "+".
- "Top 10" rows place large outlined numerals beside portrait cards.
- Live cards show channel art, "ON NOW", a time range ("1:50 - 2:43 PM EST") and a red `#FF0019` progress bar.
- "Continue watching" progress: 4px, white or blue fill on `rgba(255,255,255,0.3)`, 100px radius.

### Badges and rating boxes

- Corner badges: white, midnight text, 3px radius with the corner-aligned edges square.
- Maturity rating ("TV-MA", "7+"): 20-26px tall box with a 1px light border, 13-15px text.
- Entitlement icons: 20-24px, blue check for included, yellow bag for store, channel logo for subscriptions.

### Detail page

Full-bleed background art fading to midnight on the left and bottom, title logo art top-left, entitlement line, metadata row (IMDb rating, year, runtime, rating box, "X-Ray", "HDR", "UHD" labels), synopsis capped at three lines with "More" (`--fable-text-expandable-max-lines: 3`), then "Play", "Trailer", "+ Watchlist", "Like", "Share". Tabs below: "Episodes", "Related", "More details", underlined in white when active. Season selector is a dropdown in a `#191E25` menu.

### Profile picker ("Who's watching?")

Midnight screen, circular avatars (about 120-150px) with illustrated characters, names in 18px below, a "Kids" label on child profiles. Focus adds a white ring and slight scale. "Edit profile" is a secondary button below.

### Player controls

Top: back arrow, title, episode. Bottom: thin scrubber (`#FFFFFF` played on `rgba(255,255,255,0.3)`), time labels in 15px, play/pause, 10-second skip, next episode, and on the right subtitles and audio, settings, fullscreen. X-Ray opens a left-hand panel of cast and music on a `rgba(0,5,13,0.85)` scrim. "Skip Intro" and "Skip Recap" are translucent 8px-radius buttons bottom-right. Ad breaks show a small "Ad" label with a countdown.

### Plan and paywall pages

Prime Video sign-up flows through Amazon: plan cards on midnight or white, blue `#0779FF` or white primary buttons, and add-on channels (subscriptions) shown as logo tiles with "Start your free trial" CTAs. Rent and buy dialogs use the yellow bag icon, HD/SD/UHD options as chips, and a price on each option. Prices vary by region; do not hard-code them.

### Dialogs and drawers

Dialogs use 24px top and bottom radius, up to 90vh tall, on `#191E25` with a `rgba(0,5,13,0.75)` scrim. Mobile drawers come up from the bottom with 0px radius and 6px padding at the top for a grabber.

## 6. Layout & Spacing

- **Side margins** (`--dv-carousel-column-margin`): 24px on phone, 32-44px on tablet, 72px on desktop, 104px on very wide screens.
- **Column gaps:** 10, 12, 16, 24px by breakpoint.
- **Breakpoints:** 28em (448px), 37.5em (600px), 55em (880px), 80em (1280px), 87.5em (1400px), 112.5em (1800px), 150em (2400px).
- **Nav height:** 48px phone, 60px tablet, 66px desktop.
- **Spacing scale:** Fable steps of 4, 8, 12, 16, 24, 36, 48, 72px.
- **Minimum hit target:** 44x44px.

## 7. Depth, Elevation & Motion

- **Glow, not shadow, for brand moments.** Blue and white upward glows on nav pills and Join Prime.
- **Card hover shadow:** `0 4px 86px 0 rgba(0,0,0,0.95), 0 4px 4px 0 rgba(0,0,0,0.25)`, a huge soft black halo that separates the expanded card from neighbours.
- **Menus:** `0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)`.
- **Gradients over art:** midnight at 0.4-0.9 opacity from bottom and left.
- **Signature easing:** `cubic-bezier(0.2, 0.45, 0, 1)` (fast start, long settle) for card expansion, fades and slides. Also `cubic-bezier(0.25, 1, 0.5, 1)` and `cubic-bezier(0.16, 1, 0.3, 1)` for larger moves.
- **Durations:** 200ms for buttons and colour, 300ms for card expansion and badge fades, 400ms for overlays, 800ms for hero crossfades.
- **Hover delay:** card previews wait for a short delay (`--hover-delay`) before expanding.

## 8. Iconography & Imagery

- **Icons:** Fable icons at 24px, filled for status (check, bag, star) and outlined for actions (plus, share, settings). Sized 16-32px by breakpoint.
- **Artwork:** large studio and Amazon MGM Studios key art with title logos; sports use league and team imagery, live channels use channel logos on dark art.
- **Channels:** partner channel logos (white versions) mark add-on subscription content.
- **No stock photos** in the app; marketing pages show devices with the app open.

## 9. Voice & Microcopy

Plain and functional, with clear statements of what is included.

- Nav: "Home", "Movies", "TV shows", "Sports", "Live TV", "Subscriptions", "Store", "Free to me", "Join Prime" (live site, 2026-11-16)
- Rows: "Free popular TV", "Featured Originals and Exclusives", "Free TV most watched", "Free action and adventure movies", "On now"
- Entitlement: "Included with Prime", "Watch for free", "Free trial or buy", "Rent or buy"
- Buttons: "Play", "Watch Live", "More details", "Trailer", "Add to Watchlist"
- Badges: "TOP 10", "NEW SERIES", "NEW SEASON", "TRENDING", "MOST LIKED", "ON NOW"
- Casing: sentence case for nav, rows and buttons; uppercase for badges only.

## 10. Do's and Don'ts

**Do**

- Use `#00050D` midnight, not pure black, as the base.
- Make the primary action a white button with midnight text.
- Use Prime Blue as a glow on pills, not as a large fill.
- Show entitlement on every title: blue check, yellow bag, or channel logo.
- Pin white corner badges to the top-right of artwork.
- Ease with `cubic-bezier(0.2, 0.45, 0, 1)`.

**Don't**

- Don't use the old cyan `#00A8E1` or the orange Amazon smile.
- Don't add negative letter spacing.
- Don't round cards beyond 16px or square them off entirely.
- Don't hide whether a title costs extra.
- Don't use colourful backgrounds behind rows.
- Don't set the wordmark in type.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Prime Video (2024 redesign). Background `#00050D`, card bodies `#191E25`, chips and dividers `#33373D`. Text white, secondary `#AAAAAA`, links `#79B8F3`. Primary button: white fill, `#00050D` text, 8px radius, 48px+ tall, 16px weight 500 with 0.04em tracking. Secondary: `rgba(255,255,255,0.2)`. Top nav of 8px-radius text pills; the selected pill fills white with midnight text and a soft glow; "Join Prime" is `rgba(26,152,255,0.8)` with `0 -4px 16px rgba(26,152,255,0.2)`. Use Amazon Ember with Inter as the fallback: titles 32-50px 700, row titles 20px 700 with 0.04em tracking, body 16-18px 400. Home starts with a large hero carousel of 16-24px-radius cards, then rows of 16:9 cards (8-16px radius) that scale 1.4 on hover with `cubic-bezier(0.2,0.45,0,1)` over 300ms and a `0 4px 86px rgba(0,0,0,0.95)` halo. Mark every title with a blue `#0070F0` check (included) or yellow `#FFD62C` bag (rent/buy). Corner badges are white tabs with midnight uppercase text. Side margins 24-104px by breakpoint.

```css
:root {
  --brand-bg: #00050D;
  --brand-surface: #191E25;
  --brand-charcoal: #33373D;
  --brand-text: #FFFFFF;
  --brand-text-secondary: #AAAAAA;
  --brand-text-disabled: #666666;
  --brand-link: #79B8F3;
  --brand-prime-blue: #1A98FF;
  --brand-prime-blue-rgb: 26, 152, 255;
  --brand-icon-blue: #0779FF;
  --brand-entitled: #0070F0;
  --brand-store: #FFD62C;
  --brand-live: #FF0019;
  --brand-mint: #37F1A3;
  --brand-error: #FF9FA0;
  --brand-fill-secondary: rgba(255, 255, 255, 0.2);
  --brand-fill-secondary-hover: rgba(255, 255, 255, 0.35);
  --brand-scrim: rgba(0, 5, 13, 0.75);
  --brand-font: "Amazon Ember", "Inter", Arial, sans-serif;
  --brand-tracking-label: 0.04em;
  --brand-radius-badge: 3px;
  --brand-radius: 8px;
  --brand-radius-card-lg: 16px;
  --brand-radius-dialog: 24px;
  --brand-ease: cubic-bezier(0.2, 0.45, 0, 1);
  --brand-duration: 300ms;
  --brand-card-hover-scale: 1.4;
  --brand-card-hover-shadow: 0 4px 86px 0 rgba(0, 0, 0, 0.95), 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  --brand-glow: 0 -4px 16px 0 rgba(26, 152, 255, 0.2);
  --brand-margin: 72px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Amazon or Prime Video.

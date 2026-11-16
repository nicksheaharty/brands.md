---
name: Whatnot
slug: whatnot
url: https://whatnot.com
category: Commerce
tagline: "Live auctions on near-black, a squishy yellow W and one big yellow Bid button."
updated: 2026-11-16
appStoreId: 1488269261
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Whatnot Yellow
    hex: "#FFE406"
    role: Logo W, primary buttons (Bid, Sign up), highlights
  - name: Night
    hex: "#161415"
    role: App icon background, dark app canvas (approx.)
  - name: Charcoal
    hex: "#282527"
    role: Logo badge and wordmark, dark surfaces, text on yellow
  - name: White
    hex: "#FFFFFF"
    role: Text on dark, light-mode background
  - name: Surface
    hex: "#2E2B2D"
    role: Raised cards and sheets on dark (approx.)
  - name: Border Dark
    hex: "#3D393B"
    role: Dividers and outlines on dark (approx.)
  - name: Muted
    hex: "#A19DA0"
    role: Secondary text on dark (approx.)
  - name: Live Red
    hex: "#FF3B4A"
    role: LIVE badge and recording dot (approx.)
  - name: Light Gray
    hex: "#F4F3F2"
    role: Light-mode surfaces, chips (approx.)
  - name: Ink Muted
    hex: "#6B6769"
    role: Secondary text on light (approx.)
  - name: Success Green
    hex: "#1DB954"
    role: Won auction, sold, positive states (approx.)
  - name: Timer Orange
    hex: "#FF8A00"
    role: Last-seconds countdown, sudden death (approx.)
fonts:
  display:
    family: "Heavy rounded grotesk (custom, unconfirmed)"
    fallback: "Inter"
    weights: [700, 800]
  body:
    family: "SF Pro / Roboto (system)"
    fallback: "Inter"
    weights: [400, 600, 700]
typeScale:
  - { role: Hero, size: 56, weight: 800, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading, size: 32, weight: 800, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Title, size: 20, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Bid Amount, size: 24, weight: 800, lineHeight: 1.1, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Label, size: 14, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 600, lineHeight: 1.3, tracking: "0" }
radii: { sm: 8, md: 12, lg: 20, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Sheet (approx.), value: "0 -8px 24px rgba(0,0,0,0.35)" }
  - { name: Card light (approx.), value: "0 2px 12px rgba(40,37,39,0.12)" }
preview:
  bg: "#161415"
  surface: "#2E2B2D"
  text: "#FFFFFF"
  muted: "#A19DA0"
  border: "#3D393B"
  accent: "#FFE406"
  accentText: "#282527"
  radius: 12
  buttonStyle: pill
---

# Whatnot

## 1. Visual Theme & Atmosphere

Whatnot is a live shopping marketplace: sellers run video shows and auction trading cards, sneakers, comics, vintage clothes and much more in real time. The product looks like a streaming app crossed with an auction house. Full-screen vertical video, a chat scrolling over the bottom of the frame, a countdown timer, and one large yellow **Bid** button that everyone is waiting to tap.

The brand is small and loud: a bright yellow `#FFE406` "W" with soft, inflated curves (it reads a bit like a heart or two balloons), usually on a near-black rounded badge, next to a heavy lowercase **whatnot** wordmark in charcoal `#282527`.

What makes it recognisable:

- **Yellow on near-black.** The app icon is a yellow W on `#161415`. Primary actions are yellow pills with charcoal text.
- **Live energy.** Red "LIVE" badges, viewer counts, ticking timers, bid confetti, chat bursts. The UI is tuned for speed and excitement.
- **Video-first cards.** Show thumbnails are tall portrait tiles with the seller's face or product table, a live badge in the corner and the seller's avatar and name below.
- **Chunky, friendly type.** Heavy weights (700-800) for amounts, titles and marketing headlines; plain system text for chat and body.
- **Collector culture.** Category chips like trading cards, Pokémon, sneakers, comics, vintage and coins, plus seller ratings and "Sold" counts.

whatnot.com returned 403 to automated requests today, so values here come from the official logo files, the App Store listing and observation of the app. Everything not taken from the logo is marked approximate.

Mood words: energetic, playful, social, fast, collector-friendly.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Whatnot Yellow | `#FFE406` | Logo W (from the official SVG), primary buttons, active tab, highlights |
| Charcoal | `#282527` | Logo badge and wordmark (from SVG), text on yellow, dark surfaces |
| Night | `#161415` | App icon background, dark canvas (approx., sampled from the icon) |
| Surface | `#2E2B2D` | Cards, sheets on dark (approx.) |
| Surface High | `#3A3638` | Inputs, chips on dark (approx.) |
| Border Dark | `#3D393B` | Dividers on dark (approx.) |
| Muted | `#A19DA0` | Secondary text on dark (approx.) |
| White | `#FFFFFF` | Primary text on dark, light-mode background |
| Light Gray | `#F4F3F2` | Light-mode cards and chips (approx.) |
| Ink Muted | `#6B6769` | Secondary text on light (approx.) |

### Semantic (approximate)

| State | Hex | Use |
|---|---|---|
| Live | `#FF3B4A` | "LIVE" badge, live dot |
| Success / won | `#1DB954` | "You won!", sold, verified purchase |
| Urgent | `#FF8A00` | Last seconds of a timer, "sudden death" |
| Error | `#FF4D4F` | Payment failed, form errors |
| Link / info | `#4DA3FF` | Links in light mode, info |

### Light and dark

The app supports both. Dark is the natural mode for live shows (video plus overlays); browse and checkout screens also render on white with charcoal text and the same yellow actions. On light backgrounds, keep yellow buttons with charcoal text (never white text on yellow).

## 3. Typography

**Brand display:** the wordmark is a custom heavy, rounded-terminal grotesk. Marketing headlines use a similarly heavy sans at 700-800 with tight tracking (exact family unconfirmed).

**Product:** platform system fonts (SF Pro on iOS, Roboto on Android) with heavy weights for prices and bids (approximate).

**Fallback:** **Inter** at 700-800 for display and 400-600 for body. For a rounder feel, **Nunito Sans** works for small labels.

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "SF Pro Text", Roboto, "Helvetica Neue", sans-serif;
```

### Scale (approximate)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Marketing hero | 56px (36px mobile) | 800 | 1.05 |
| Section heading | 32px | 800 | 1.15 |
| Screen title | 20-24px | 700 | 1.25 |
| Bid amount | 24-28px | 800 | 1.1 |
| Show title on card | 15-16px | 700 | 1.3 |
| Body | 16px | 400 | 1.4 |
| Chat message | 14px | 400, username 700 | 1.35 |
| Label / button | 14-16px | 700 | 1.2 |
| Caption / viewer count | 12px | 600 | 1.3 |

### Rules

- Sentence case for buttons and titles ("Place bid", "Follow", "Buy now").
- Money always shows the currency symbol, bold, tabular figures (`$25`).
- Timers use mono-width digits ("0:07") so they do not jitter.
- Usernames in chat are bold and colored white; message text regular.

## 4. Logo & Brand Mark

The logo (2025 version) is a **rounded badge** (a superellipse, charcoal `#282527`) holding a **yellow W** (`#FFE406`) with puffy, inflated lobes, followed by the lowercase **whatnot** wordmark in charcoal.

- **App icon:** yellow W centered on near-black, no badge outline.
- **Color versions:** charcoal badge plus charcoal wordmark on white or light backgrounds; charcoal badge plus white wordmark on dark; yellow W alone on near-black for avatars.
- **Clear space:** at least half the badge height around the lockup.
- **Minimum size:** badge 20px; lockup about 90px wide.

Misuse:

- Do not change the yellow to orange or gold.
- Do not outline or stroke the W or add a drop shadow.
- Do not set "whatnot" in another font or in capitals.
- Do not place the yellow W directly on white without the charcoal badge.

## 5. Components

### Buttons

| Variant | Background | Text | Shape | Height |
|---|---|---|---|---|
| Primary (Bid, Sign up, Buy now) | `#FFE406` | `#282527` 16px/700 | pill | 48-56px |
| Secondary on dark | `#3A3638` | `#FFFFFF` | pill | 40-48px |
| Secondary on light | `#F4F3F2` | `#282527` | pill | 40-48px |
| Outline | transparent | `#FFFFFF` or `#282527` | pill, 1.5px border | 40px |
| Follow (small) | `#FFE406` | `#282527` 14px/700 | pill | 32px |

States (approximate): pressed scales to 0.96 and darkens yellow toward `#F2D600`; disabled at 40% opacity; loading replaces the label with a charcoal spinner.

```css
.btn-bid {
  font: 700 16px/1 var(--brand-font);
  background: #FFE406; color: #282527;
  border: 0; border-radius: 9999px;
  height: 56px; padding: 0 24px;
  transition: transform 120ms ease-out, background-color 120ms ease-out;
}
.btn-bid:active { transform: scale(.96); background: #F2D600; }
```

### Auction bar (signature)

Pinned to the bottom of the live show:

- A dark translucent panel (`rgba(22,20,21,0.85)` with blur), 16-20px top corners.
- Left: product thumbnail 48px with 8px radius, title (14px/700, one line) and the current bid ("Current bid $42", 20-24px/800) with the top bidder's username.
- Right or below: big yellow "Bid $45" pill, a secondary "Custom" pill, and a countdown ("0:07") that turns orange or red in the last seconds.
- Winning flashes a full-width "You won!" banner in green with confetti (approximate).

### Live show screen

- Full-bleed vertical video.
- Top: seller avatar (32px), username, rating, "Follow" pill, viewer count with eye icon, close button.
- Left-bottom: chat stream over a gradient fade, newest at the bottom, 14px messages with bold usernames and system lines ("joined", "bid $40").
- Right rail: circular icon buttons for share, shop (product list), wallet and more, about 44px.
- A comment input pill "Say something..." at the bottom on dark translucent fill.

### Show card (feed)

- Portrait tile, about 3:4 to 9:16, radius 12px, live video thumbnail.
- "LIVE" pill top left (`#FF3B4A`, white 11-12px/700 uppercase) with viewer count next to it.
- Below: seller avatar (24px) and username, show title (2 lines, 15px/700), category tag in muted text.
- Scheduled shows show a date chip and a "Remind me" bell instead of LIVE.

### Navigation

- Bottom tab bar on dark: "Home", "Browse", "Sell" (centered plus), "Activity", "Profile" (approximate). Active icon and label in yellow or white, inactive in muted grey.
- Top of Home: search pill ("Search Whatnot") and horizontal category chips; selected chip is white or yellow with charcoal text.

### Inputs

Filled pill or 12px-radius fields, `#3A3638` on dark or `#F4F3F2` on light, 48px tall, 16px text, muted placeholder. Focus: 2px yellow border on dark, 2px charcoal border on light.

### Listings and checkout

- Product grid: square images with 12px radius, price bold below, "Buy now" or "Bid" tag.
- Checkout sheet: white or dark sheet with 20px top corners, line items, shipping, payment method, total in bold, full-width yellow "Pay" button.

### Badges

Small pills: "LIVE" red, "Verified" with a check, seller rating ("4.9" with a star), "Sold" counts, "Giveaway" in yellow with charcoal text (approximate).

## 6. Layout & Spacing

- **Mobile first.** 16px side padding, 8-12px gaps in grids, two-column show grid on phones.
- **Spacing:** 4, 8, 12, 16, 20, 24, 32, 48px (approximate).
- **Web:** feed of show cards in 4-6 columns at desktop widths inside a max width of about 1440px, left sidebar for categories.
- **Live screen:** overlays respect safe areas; chat occupies about the lower 40% on the left two-thirds; the right rail is 56-64px wide.

## 7. Depth, Elevation & Motion

- Dark UI relies on surface steps and translucency, not shadows. Overlays on video use `rgba(22,20,21,0.6-0.85)` with backdrop blur.
- Sheets cast an upward shadow, approximately `0 -8px 24px rgba(0,0,0,0.35)`.
- Light-mode cards: soft `0 2px 12px rgba(40,37,39,0.12)` (approximate).
- **Motion:** fast and bouncy. Bids pop in with a scale from 0.9 to 1 and a spring; the timer pulses in the last 5 seconds; won items burst with confetti; chat lines slide up. Typical durations 120-250ms, springy easing like `cubic-bezier(.34,1.56,.64,1)` (approximate).

## 8. Iconography & Imagery

- **Icons:** rounded, filled glyphs at 20-24px with soft corners that match the puffy W (approximate). White on dark, charcoal on light.
- **Imagery:** real sellers on camera, hands holding cards, product tables, sneaker walls, racks of vintage clothes. Lighting is whatever the seller has; the UI frames it rather than styling it.
- **Marketing:** bright yellow fields, cut-out product photos (cards, figures, sneakers) and phone mockups of live shows.

## 9. Voice & Microcopy

Casual, upbeat and community-minded. Short, punchy, collector slang is welcome.

- App Store tagline area: "Whatnot is the largest live shopping platform in the US, UK, and Europe" (from the App Store listing today).
- Actions: "Bid", "Custom", "Buy now", "Follow", "Remind me", "Share show", "Go live"
- Live states: "LIVE", "Starting soon", "Sudden death", "You won!", "Outbid"
- Chat placeholder: "Say something..." (approximate)

Sentence case, exclamation marks only for wins and celebrations.

## 10. Do's and Don'ts

**Do**

- Use Whatnot Yellow `#FFE406` for the main action with charcoal `#282527` text.
- Put live video front and center with overlays on translucent dark.
- Use heavy weights for prices, bids and timers.
- Show live signals: red LIVE pill, viewer counts, countdowns.
- Keep shapes soft: pills and 12-20px corners.

**Don't**

- Don't put white text on yellow.
- Don't use yellow for large background fills inside the app.
- Don't use thin or light type for money.
- Don't use sharp corners or hard outlines.
- Don't slow down the bid flow with confirmations in the main path.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Whatnot, a live auction app. Dark canvas `#161415`, cards `#2E2B2D`, borders `#3D393B`, text white with muted `#A19DA0`. Font: Inter (or SF Pro) with heavy 700-800 weights for titles, prices and timers and 400 for chat and body. Primary buttons are yellow `#FFE406` pills with charcoal `#282527` 16px/700 text, 48-56px tall, pressing to scale 0.96. Home: a search pill, horizontal category chips, and a two-column grid of portrait show cards (12px radius) with a red `#FF3B4A` "LIVE" pill and viewer count top left, seller avatar and name and a bold two-line title below. Live show: full-screen vertical video, top bar with seller avatar, Follow pill and viewer count, chat over a dark gradient on the bottom left, round icon buttons on the right, and a translucent bottom auction bar with product thumbnail, "Current bid $42" in 24px/800, a countdown "0:07" and a big yellow "Bid $45" pill. Motion is quick and springy. Logo: yellow puffy W on a charcoal rounded badge with a lowercase "whatnot" wordmark.

```css
:root {
  --brand-yellow: #FFE406;
  --brand-yellow-pressed: #F2D600;
  --brand-charcoal: #282527;
  --brand-night: #161415;
  --brand-surface: #2E2B2D;
  --brand-surface-high: #3A3638;
  --brand-border: #3D393B;
  --brand-muted: #A19DA0;
  --brand-white: #FFFFFF;
  --brand-light-gray: #F4F3F2;
  --brand-ink-muted: #6B6769;
  --brand-live: #FF3B4A;
  --brand-success: #1DB954;
  --brand-urgent: #FF8A00;
  --brand-error: #FF4D4F;
  --brand-overlay: rgba(22,20,21,0.85);
  --brand-font: "Inter", -apple-system, BlinkMacSystemFont, "SF Pro Text", Roboto, "Helvetica Neue", sans-serif;
  --brand-weight-heavy: 800;
  --brand-weight-bold: 700;
  --brand-weight-body: 400;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 20px;
  --brand-radius-pill: 9999px;
  --brand-shadow-sheet: 0 -8px 24px rgba(0,0,0,0.35);
  --brand-shadow-card-light: 0 2px 12px rgba(40,37,39,0.12);
  --brand-ease-spring: cubic-bezier(.34,1.56,.64,1);
  --brand-ease-out: cubic-bezier(.2,.8,.2,1);
  --brand-duration: 160ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Whatnot.

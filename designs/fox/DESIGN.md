---
name: FOX One
slug: fox
url: https://fox.com
category: Streaming
tagline: "Black-screen streaming for FOX news, sports and shows: heavy block type and live badges."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Page background (bg-base-black), logo background
  - name: Base White
    hex: "#F1F1F1"
    role: Primary text and icons on dark
  - name: FOX Orange
    hex: "#FF4E00"
    role: Primary accent token (bg-primary), highlights
  - name: Deep Navy
    hex: "#151B26"
    role: Base primary surface, cards and panels
  - name: Ebony Clay
    hex: "#222B3C"
    role: Base secondary surface, dividers and borders
  - name: Pale Slate
    hex: "#656B77"
    role: Tertiary surface, muted UI
  - name: Stats Yellow
    hex: "#FEC800"
    role: Plan badges, sports stat highlights
  - name: Live Red
    hex: "#E60000"
    role: Live badges and live indicators
  - name: Crimson
    hex: "#E11341"
    role: Sports and promo accent
  - name: Accent Blue
    hex: "#00A8F0"
    role: Links, progress, selected states
  - name: Bright Green
    hex: "#28F14A"
    role: Positive stat and score highlights
  - name: Obsidian
    hex: "#131313"
    role: Raised black surface, menus
  - name: Iron Gray
    hex: "#CDCFD4"
    role: Secondary text on dark
  - name: Medium Gray
    hex: "#919191"
    role: Captions, metadata
  - name: Warm Paper
    hex: "#F7F4F0"
    role: Light promotional sections (plans, bundles)
  - name: Ink
    hex: "#1A1A1A"
    role: Text on light sections
fonts:
  display:
    family: "FOX Sans"
    fallback: "Archivo"
    weights: [700, 800]
  body:
    family: "FOX Sans"
    fallback: "Inter"
    weights: [300, 400, 500, 700]
typeScale:
  - { role: Hero, size: 40, weight: 800, lineHeight: 1.08, tracking: "0" }
  - { role: Section, size: 30, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Title, size: 20, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Nav, size: 17, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Small, size: 14, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Badge, size: 13, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Tile, value: "-2px 6px 12px 0 rgba(0,0,0,0.80)" }
  - { name: Lift, value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)" }
preview:
  bg: "#000000"
  surface: "#151B26"
  text: "#F1F1F1"
  muted: "#919191"
  border: "#222B3C"
  accent: "#F1F1F1"
  accentText: "#000000"
  radius: 8
  buttonStyle: solid
---

# FOX One

## 1. Visual Theme & Atmosphere

FOX One is FOX's direct-to-consumer streaming service, and fox.com is now its front door. The design is a black screen with white type, full-bleed key art and rows of rounded tiles: live games, news channels and shows. The FOX brand supplies the voice: heavy, blocky "FOX" letters that read like a broadcast bug, and a sports-TV energy of live badges, scores and schedules.

What makes it recognisable:

- **Pure black.** The page background is `#000000` (`bg-base-black`), not a tinted dark grey. Key art fades into it with a long bottom gradient.
- **Heavy FOX letterforms.** The FOX wordmark is ultra-bold and squared off; FOX One adds "ONE" knocked out of a white pill.
- **White UI.** Text, icons and the main buttons are off-white `#F1F1F1`. Colour comes from key art, team colours and small badges.
- **Broadcast badges.** Yellow `#FEC800` plan or stat chips, red live indicators, green score highlights.
- **Rails of tiles.** Horizontal rows titled "This Week", "Sports", "Top Shows", "Browse", each scrolling sideways.
- **Navy-tinted surfaces.** When a surface needs to lift off black, it uses deep navy `#151B26` and `#222B3C` rather than neutral grey.

Mood words: live, bold, broadcast, punchy, sports-first.

## 2. Color Palette & Roles

Values read from fox.com Tailwind CSS (named theme colours) on 2026-11-16.

| Name | Class | Hex | Role |
|---|---|---|---|
| Black | `base-black` | `#000000` | Page background |
| Base White | `base-white` | `#F1F1F1` | Primary text, icons, primary button |
| White | `white` | `#FFFFFF` | Logo, high-emphasis text |
| Deep Navy | `base-primary` / `deepNavy` | `#151B26` | Cards, panels, menus |
| Ebony Clay | `base-secondary` | `#222B3C` | Borders, dividers, secondary surface |
| Pale Slate | `base-tertiary` | `#656B77` | Tertiary surface, inactive |
| Base Primary (alt) | `basePrimary` | `#1A1A1A` | Neutral dark surface, text on light |
| Obsidian | `obsidianBlack` | `#131313` | Raised black surfaces |
| Skeleton | `skeleton` | `#121212` | Loading tiles (raised `#2A2A2A`) |
| Iron Gray | `ironGray` | `#CDCFD4` | Secondary text |
| Gray | `gray` | `#B2B2B2` | Muted text |
| Medium Gray | `mediumGray` | `#919191` | Captions, metadata |
| FOX Orange | `primary` | `#FF4E00` | Primary accent token |
| Secondary Navy | `secondary` | `#041129` | Deep blue panels and gradient ends |
| Accent Blue | `accentBlue` | `#00A8F0` | Links, selected, progress |
| Stats Yellow | `statsOrange` | `#FEC800` | Plan/stat badges |
| Red | `red` | `#E60000` | Live, errors |
| Crimson | `crimsonRed` | `#E11341` | Promo accent |
| Bright Green | `brightGreen` | `#28F14A` | Positive score/stat |
| Green | `green` | `#10A82C` | Success |
| Warm Paper | arbitrary | `#F7F4F0` | Light plan and bundle sections |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Live | `#E60000` | "LIVE" pill and dot |
| Success | `#10A82C` (text), `#B7EAAE` (border) | Confirmations |
| Error text | `#FA9999` | Error messages on dark |
| Cancel | `#C25454` | Cancel subscription actions |
| Badge | `#FEC800` with black text | Plan labels, "New" |

### Mode notes

The product is dark only. Light sections (`#F7F4F0` with `#1A1A1A` text) appear for plan comparisons and bundle offers on the marketing page.

## 3. Typography

- **FOX Sans** (proprietary), self-hosted as a variable font (`/fonts/FoxSans-Variable.woff2`) plus static cuts: Light, Regular, Medium, Bold, ExtraBold, each with italics. Classes: `font-FoxSansVariable`, `font-FoxSansLight`, `font-FoxSansMedium`, `font-FoxSansBold`.
- **Hellix Black** appears for a few punchy promo headlines.
- **Google Fonts fallbacks:** Inter for body, Archivo (Black or ExtraBold) for heavy display.

Stack:

```css
font-family: "FOX Sans", "FOX Sans Fallback", Helvetica, Arial, sans-serif;
```

### Scale (from classes used on the page)

| Role | Size / line height | Weight |
|---|---|---|
| Hero headline | 40px / 43px (36/40 on smaller screens) | 800 |
| Section heading | 30px / 43px, 32px / 32px | 700 |
| Rail title | 20px / 28px | 700 |
| Nav link | 17px / 22px | 700 |
| Body | 16px / 22-24px | 400 |
| Small body | 14px / 19-21px | 400-500 |
| Badge | 13px / 15px | 700 |
| Caption, legal | 12px / 1.4 | 400 |

### Rules

- "FOX" is always written in capitals. "FOX One" in running text (the logo shows "FOX ONE").
- Headlines sentence or title case, bold. No light-weight headlines.
- Times written broadcast style: "6:00 p.m. ET / 3:00 p.m. PT".
- Matchups written "Patriots vs Lions".

## 4. Logo & Brand Mark

- **FOX wordmark:** three ultra-heavy, squared letters. The O is a rounded stadium shape with a narrow slot counter; the X is a chunky wedge.
- **FOX One lockup:** the FOX wordmark followed by a white pill containing "ONE" knocked out in black. Horizontal version in the header (100x22 at desktop), stacked "portrait" version with ONE under FOX for icons and app tiles.
- **Colour:** white on black is the default. Black on white for light contexts.
- **Clear space:** at least the height of the "ONE" pill around the lockup.
- **Minimum size:** 60px wide for the horizontal lockup.

Do not:

- Recolour the letters (no orange or blue FOX).
- Separate "ONE" from its pill or set it in a font.
- Add bevels, chrome or glow (the classic broadcast searchlight logo is a different mark for FOX Broadcasting, not FOX One).
- Place the white logo on light key art without a dark scrim.

## 5. Components

### Buttons

```css
.btn {
  font: 700 16px/22px "FOX Sans", Inter, sans-serif;
  height: 48px;
  padding: 0 24px;
  border-radius: 5px;
  text-transform: capitalize;
  transition: opacity 200ms ease, transform 300ms ease-out;
}
.btn--primary { background: #F1F1F1; color: #000; }
.btn--primary:hover { opacity: 0.85; }
.btn--secondary { background: rgba(255,255,255,0.10); color: #F1F1F1; border: 1px solid rgba(255,255,255,0.5); }
.btn--text { background: transparent; color: #FFFFFF; text-decoration: underline; padding: 10px 15px; }
.btn--text:hover { color: rgba(241,241,241,0.7); }
```

- **Header buttons:** "Connect TV Provider" and "Sign In" as bold 16-17px text buttons, 5px radius.
- **Hero CTA:** "Stream Now" card link that scales to 1.03 on hover (`transition-transform duration-300 ease-out`), with subtext "Plans start at..." in 12-14px.
- **Pill toggles / filters:** `rounded-full`, white/10 fill, white text; selected white fill with black text.

### Badges

- Plan badge: `#FEC800` fill, black 13px bold text, 30px tall, 4px radius, 16px horizontal padding, often centred on the top edge of a card.
- LIVE badge: red `#E60000` pill or rounded rectangle with white bold caps "LIVE" and a dot (approximate).
- Network bug: small white network logo (FOX, FOX News, FS1, Big Ten) in the tile corner.

### Content tiles (signature)

- 16:9 key art, 8px radius, shadow `-2px 6px 12px rgba(0,0,0,0.8)`.
- Title and metadata below in white and `#919191`, or overlaid on a bottom gradient.
- Live tiles show a progress bar (accentBlue or white) and a LIVE badge.
- Hover: slight scale and brighter border.

### Hero

- Full-bleed key art with a bottom fade `linear-gradient(183deg, rgba(0,0,0,0) 57.84%, #000 93.16%)` into black.
- Logo or title treatment, one line of copy, primary CTA.
- Carousel of several heroes on the marketing page.

### Rails

- Rail title 20px bold, "See all" link at right, tiles scroll horizontally with 16px gaps and arrow buttons on desktop.

### Navigation

- Top bar about 64-78px, black, FOX One wordmark at left, links Home, Shows, News, Sports, NFL in bold white, search icon, "Sign In" at right.
- Mobile: hamburger drawer with the same items, 17px bold links, `border-t` dividers in `#222B3C`.
- Footer: black, "FOX Networks" list (FOX News, FOX Nation, FOX Weather, FOX Local, FOX Business, FOX Sports, Tubi, TMZ), legal links in 12-14px `#B2B2B2`, App Store and Google Play badges.

### Inputs

- Search field: `#151B26` fill, 5-8px radius, white text, placeholder `#919191`, 48px tall.
- Forms (sign up, payment): white/10 fill, 1px `#656B77` border, focus border `#00A8F0` (approximate).

### Modals

- `#151B26` panel, 8-16px radius, white text, black 70-80% backdrop.

### Plan cards

- On `#F7F4F0` light sections: white cards, 16px radius, `#1A1A1A` text, yellow badge on top edge, bold price, feature list with check marks.

## 6. Layout & Spacing

- Breakpoints in the CSS: `375px`, `744px`, `768px`, `850px`, `1024px`, `1280px`, `1512px`, `1680px`, `1920px`.
- Content max widths vary by module (`max-w-[739px]`, `max-w-[846px]`, `max-w-screen-2lg`); rails run edge to edge with 20-80px side padding.
- Section padding: 48px top / 64px bottom on mobile, 96px on desktop (`sm:py-[96px] sm:px-[80px]`).
- Gaps: 4, 8, 12, 16, 24, 32px.
- TV and app layouts follow the same rails pattern at 10-foot sizes.

## 7. Depth, Elevation & Motion

- Depth comes from black and image fades, not shadows on surfaces.
- Tile shadow: `-2px 6px 12px 0 rgba(0,0,0,0.80)`.
- Gradient scrims: `from-black to-transparent` at 10% stops, and the 183deg hero fade.
- Glass: `bg-white/10` and `bg-white/[0.3]` panels over art.
- Motion: CTA cards scale to 1.03 over 300ms ease-out; colour and opacity changes 200ms; custom gradient-stop transitions (`--stop-a .3s ease-in, --stop-b .3s ease-out`). Respect `motion-reduce` (the site disables the scale).

## 8. Iconography & Imagery

- **Icons:** simple solid or 2px line glyphs (search, caret, checkmark, multiview), white, 24px (`size-6`), served as SVG sprites.
- **Key art:** high-contrast show art and sports photography, players mid-action, team colours, dramatic lighting.
- **News imagery:** anchors and live desks, with network logos.
- **Logos:** league and network logos as white monochrome where possible.
- No illustrations.

## 9. Voice & Microcopy

Tone: direct, energetic, sports-broadcast. Short phrases, lots of nouns (games, teams, shows).

- Title case for nav and rails, sentence case for body.
- Every live listing carries a time with time zones.

Sample strings:

- "All of FOX Streaming Live in One Place"
- "Live News, Sports & Entertainment"
- "Stream Now"
- "Sign In"
- "Connect TV Provider"
- "This Week"
- "Top Shows"
- "Download the Mobile App"
- "Schedule and availability are subject to change."

## 10. Do's and Don'ts

**Do**

- Use a pure black page and let key art bring the colour.
- Use off-white `#F1F1F1` for text and primary buttons.
- Use navy-tinted surfaces (`#151B26`, `#222B3C`) for panels.
- Keep FOX in capitals and use the heavy logo, never a font imitation.
- Use yellow and red badges sparingly for plans and live events.
- Fade every hero image into black.

**Don't**

- Don't use neutral mid-grey surfaces or light mode for the product.
- Don't round buttons into pills (5px is the house radius; pills are for filters).
- Don't add the orange accent to large areas.
- Don't use thin or light headlines.
- Don't put text directly on busy art without a scrim.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of FOX One (fox.com). Pure black `#000000` page, off-white text `#F1F1F1`, secondary text `#CDCFD4`, metadata `#919191`, panels in deep navy `#151B26` with `#222B3C` borders. Font FOX Sans (fallback Inter; Archivo ExtraBold for heavy display): hero 40px/43px weight 800, section headings 30px bold, rail titles 20px/28px bold, nav 17px bold, body 16px/22px. Header: black bar, white "FOX ONE" wordmark left, bold links Home / Shows / News / Sports / NFL, search icon, "Sign In" text button. Hero: full-bleed key art with `linear-gradient(183deg, rgba(0,0,0,0) 57.84%, #000 93.16%)` fade, one bold line, CTA "Stream Now" in an off-white button with black text, 5px radius, 48px tall, scaling to 1.03 on hover over 300ms. Content in horizontal rails of 16:9 tiles, 8px radius, shadow `-2px 6px 12px rgba(0,0,0,0.8)`, 16px gaps; live tiles get a red `#E60000` LIVE badge and a progress bar in `#00A8F0`. Plan badges are `#FEC800` with black 13px bold text and 4px radius. Light promo sections use `#F7F4F0` with `#1A1A1A` text and white 16px-radius cards. Copy is short and broadcast-style, with times like "8:00 p.m. ET / 5:00 p.m. PT".

```css
:root {
  --fox-black: #000000;
  --fox-white: #F1F1F1;
  --fox-white-pure: #FFFFFF;
  --fox-navy: #151B26;
  --fox-ebony: #222B3C;
  --fox-slate: #656B77;
  --fox-obsidian: #131313;
  --fox-dark: #1A1A1A;
  --fox-secondary-navy: #041129;
  --fox-iron: #CDCFD4;
  --fox-gray: #B2B2B2;
  --fox-gray-medium: #919191;
  --fox-orange: #FF4E00;
  --fox-blue: #00A8F0;
  --fox-yellow: #FEC800;
  --fox-red: #E60000;
  --fox-crimson: #E11341;
  --fox-green: #28F14A;
  --fox-paper: #F7F4F0;
  --fox-font: "FOX Sans", Inter, Helvetica, Arial, sans-serif;
  --fox-font-display: "FOX Sans", Archivo, Helvetica, Arial, sans-serif;
  --fox-radius-button: 5px;
  --fox-radius-badge: 4px;
  --fox-radius-tile: 8px;
  --fox-radius-card: 16px;
  --fox-shadow-tile: -2px 6px 12px 0 rgba(0,0,0,0.80);
  --fox-hero-fade: linear-gradient(183deg, rgba(0,0,0,0) 57.84%, #000 93.16%);
}
```

---

Values are observed from the public website and app; this file is an unofficial reference and is not affiliated with or endorsed by Fox Corporation.

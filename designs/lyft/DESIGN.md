---
name: Lyft
slug: lyft
url: https://lyft.com
category: Transport
tagline: "Warm off-white and black cherry, a hot pink wordmark and big pill buttons."
updated: 2026-11-16
appStoreId: 529379082
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Lyft Pink
    hex: "#FF00BF"
    role: Logo and brand moments only
  - name: Black Cherry
    hex: "#1D0C17"
    role: Primary text, dark sections, primary button fill
  - name: Interactive Plum
    hex: "#820076"
    role: Interactive surfaces, selected state, focus ring
  - name: Off White
    hex: "#F1F0EC"
    role: Secondary background, warm section bands
  - name: White
    hex: "#FFFFFF"
    role: Page background and cards
  - name: Link Magenta
    hex: "#AC2A9E"
    role: Text links
  - name: Brand Orange
    hex: "#FF5312"
    role: Brand accent, illustrations, promo tiles
  - name: Lime
    hex: "#C1D58B"
    role: Brand accent, driver and earnings sections
  - name: Gray 500
    hex: "#746A6E"
    role: Muted text, icons
  - name: Gray 200
    hex: "#CFCBCC"
    role: Borders and dividers
  - name: Positive
    hex: "#197849"
    role: Success text and surfaces
  - name: Negative
    hex: "#C81534"
    role: Error text and surfaces
fonts:
  display:
    family: "Rebel Sans Display"
    fallback: "DM Sans"
    weights: [500, 700]
  body:
    family: "Rebel Sans Text"
    fallback: "DM Sans"
    weights: [400, 500, 700]
typeScale:
  - { role: Display L, size: 80, weight: 700, lineHeight: 1.0, tracking: "-0.02em" }
  - { role: Display M, size: 60, weight: 700, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading L, size: 48, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading M, size: 36, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading S, size: 22, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Caption, size: 13, weight: 500, lineHeight: 1.35, tracking: "0" }
radii: { sm: 8, md: 16, lg: 24, pill: 48 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Level 1, value: "0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 1px rgba(0,0,0,0.08)" }
  - { name: Level 2, value: "0 0 1px 0 rgba(0,0,0,0.12), 0 2px 3px 0 rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F1F0EC"
  text: "#1D0C17"
  muted: "#746A6E"
  border: "#CFCBCC"
  accent: "#1D0C17"
  accentText: "#FFFFFF"
  radius: 48
  buttonStyle: pill
---

# Lyft

## 1. Visual Theme & Atmosphere

Lyft after its 2024 brand refresh is warmer and calmer than the old all-pink look. The page is white and warm off-white (`#F1F0EC`), text is a near-black with a red-purple cast called Black Cherry (`#1D0C17`), and the hot pink (`#FF00BF`) is kept mostly for the wordmark. Interactive color is a deep plum (`#820076`), not the logo pink.

What makes it recognisable:

- **Black Cherry instead of black.** Every "black" in the system leans purple-brown: text, dark buttons, scrims (`#1D0C174D`).
- **Pink used sparingly.** The logo is pink; buttons, links and selected states use plum and magenta tones that pass contrast.
- **Big, friendly display type.** Rebel Sans Display at 60-80px in bold, short headlines ("The world awaits").
- **Pills everywhere.** Buttons have a 48px radius; chips and segmented controls are pills too.
- **Photo-led sections.** Warm lifestyle photography of riders and drivers, cropped into large rounded tiles.
- **A pastel and strong accent set.** Orange, lime, indigo, blue and pink pastels color promo tiles and illustrations, one per tile.

Mood words: warm, human, upbeat, easygoing, practical.

## 2. Color Palette & Roles

Values come from Lyft's Core UI tokens served on lyft.com (`--core-ui-color-*`).

| Name | Hex | Role |
|---|---|---|
| Lyft Pink (`lyftPink`) | `#FF00BF` | Wordmark, brand moments |
| Black Cherry / Midnight | `#1D0C17` | Primary text, primary button fill, dark bands |
| Interactive Plum | `#820076` | `surface-interactive`, `surface-selected`, focus ring |
| Highlight Pink | `#CF0090` | `text-highlight` |
| Link Magenta | `#AC2A9E` | `text-interactive`, legal links |
| Off White | `#F1F0EC` | `background-secondary`, warm sections |
| Neutral | `#F1F0F0` | `background-neutral`, input fill |
| White | `#FFFFFF` | `background-primary`, cards |
| Inverse Surface | `#473A40` | Inverse chips and toasts |
| Gray 100 | `#E7E5E5` | Hairlines, pastel gray tiles |
| Gray 200 | `#CFCBCC` | Borders |
| Gray 500 | `#746A6E` | Muted text |
| Gray 600 | `#594E53` | Secondary text on light |
| Gray 700 | `#31222A` | Strong secondary text |

Text tiers are alpha steps of Black Cherry: secondary `#1D0C17B3` (70%), tertiary and placeholder `#1D0C1799` (60%). Neutral surfaces are tinted alphas: `#31222A12`, `#36220112`, `#36220129`.

### Brand accents

| Family | Strong | Pastel |
|---|---|---|
| Orange | `#FF5312` (brand), `#FB8C0E` | `#FFDFC4`, background `#FFDED5` |
| Lime / Green | `#C1D58B`, `#6EC590` | `#C5EED2`, background `#DAEDAB` |
| Indigo | `#5725CF` | `#E7E2FF` |
| Purple / Blue | `#A092FD` / `#6C9FFA` | `#F6DDFE` / `#D9E6FF` |
| Pink | `#FF00BF` | `#FFDBF0` |
| Red / Yellow | `#FF5D66` / `#F7B201` | `#FFDDE2` / `#FFE1B0` |

Use one accent family per tile or illustration. Never put body text in a strong accent.

### Semantic

| State | Hex |
|---|---|
| Positive | `#197849` text and surface |
| Negative | `#C81534` text and surface |
| Warning | `#CE6D00` text, `#FFEEE0` fill (approximate pairing from the amber scale) |
| Info | `#276AD0` text, `#EAF1FF` fill (approximate pairing from the blue scale) |

### Dark mode

Core UI ships `-dark` variants of every token, and the rider app has a dark theme. On the marketing site dark is used as bands: Black Cherry background, white text, white primary buttons with Black Cherry text. Keep the pink wordmark on dark; it holds up.

## 3. Typography

**Families:** Rebel Sans Display for headlines and Rebel Sans Text for everything else. Both are Lyft's proprietary typefaces, loaded as `RebelSansDisplay` and `RebelSansText`. They are not licensed for reuse.

**Fallback:** DM Sans from Google Fonts is close in width and tone. Inter works for dense UI.

```css
font-family: "RebelSansText", "DM Sans", "Helvetica Neue", Arial, sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display L | 80px | 700 | 1.0 | -0.02em |
| Display M | 60px | 700 | 1.05 | -0.02em |
| Heading L | 48px | 700 | 1.1 | -0.01em |
| Heading M | 36px | 700 | 1.15 | -0.01em |
| Heading S | 22-28px | 700 | 1.25 | 0 |
| Body L | 17-18px | 400 | 1.45 | 0 |
| Body | 15-16px | 400 | 1.45 | 0 |
| Label / button | 15-17px | 500-700 | 1.2 | 0 |
| Caption | 13px | 500 | 1.35 | 0 |

Sizes are the ones served in lyft.com CSS; weights and tracking are approximate. Mobile drops Display L to about 48px.

### Rules

- Sentence case for headings and buttons. Short headlines, often four words or fewer.
- Small all-caps eyebrows appear above some sections ("WELCOME"), 13px, weight 700, wide tracking (about 0.08em).
- Fares and ETAs use tabular figures; headlines are Black Cherry, never pink.

## 4. Logo & Brand Mark

The logo is the lowercase **lyft** wordmark: rounded, heavy letterforms with a joined "ft" and a hooked descender on the "y". There is no separate symbol; the app icon is the white wordmark on a pink square.

- **Primary:** Lyft Pink `#FF00BF` wordmark on white or off-white.
- **Reverse:** white wordmark on pink, or pink on Black Cherry.
- **Clear space:** at least the width of the "l" on every side.
- **Minimum size:** about 40px wide on screen (approximate).

Misuse:

- Do not retype "lyft" in any font or capitalize it in the logo.
- Do not put the pink wordmark on busy photos or on orange or red accents.
- Do not add outlines, gradients or shadows, or bring back the old mustache.

## 5. Components

### Buttons

Core UI buttons are pills (`border-radius: 48px`) with a 1px transparent border, inline-flex, centered content.

| Variant | Background | Text | Height | Padding |
|---|---|---|---|---|
| Primary | `#1D0C17` | `#FFFFFF` 15-17px/700 | 48px (L), 40px (M) | 0 24px |
| Primary on dark | `#FFFFFF` | `#1D0C17` | same | same |
| Interactive | `#820076` | `#FFFFFF` | same | same |
| Secondary | `#31222A12` (tinted) | `#1D0C17` | same | same |
| Tertiary / text | transparent | `#1D0C17`, underline on hover | auto | 0 |
| App store badge | black badge | white | 40-48px | n/a |

States:

- Hover and press change **opacity**, not color: `transition: opacity 200ms cubic-bezier(0.45,0,0.15,1)`; pressed about 0.8 (approximate).
- Disabled: `opacity: 0.38; cursor: not-allowed`.
- Focus: `box-shadow: 0 0 0 3px #820076` around the pill.

```css
.lyft-btn {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 48px; padding: 0 24px;
  border: 1px solid transparent; border-radius: 48px;
  background: #1D0C17; color: #fff;
  font: 700 16px/1.2 var(--brand-font);
  transition: opacity 200ms cubic-bezier(0.45,0,0.15,1);
}
.lyft-btn:active { opacity: .8; }
.lyft-btn:focus-visible { box-shadow: 0 0 0 3px #820076; outline: none; }
.lyft-btn[disabled] { opacity: .38; cursor: not-allowed; }
```

### Ride request card (signature)

The web ride flow (ride.lyft.com) puts a white panel on top of a map:

- Panel: white, radius 16px, Level 2 shadow, 16-24px padding.
- Two stacked inputs, "Pickup" and "Drop-off", each 48px tall on `#F1F0F0` with 8px radius, a 16px pickup icon (dot) and drop-off icon (square) on the left, joined by a thin vertical line.
- Ride options as a list: car illustration left, name ("Standard", "XL", "Extra Comfort") at 16px/700, ETA and seats at 13px muted, fare right-aligned with tabular figures. Selected row gets a 2px `#820076` outline and `#31222A12` fill.
- A full-width primary pill at the bottom: "Request Lyft" style.

### Inputs

- 48px tall, `#F1F0F0` fill, no border, radius 8px (approximate), 15-16px text, placeholder `#1D0C1799`.
- Focus: 2px `#820076` ring. Error: 2px `#C81534` ring and 13px error text below.

### Cards and tiles

- Marketing tiles: radius 16-24px, full-bleed photo or a pastel accent fill, 24-32px padding, headline 22-28px/700.
- Feature cards on white: `#F1F0EC` fill, no border, no shadow.
- Floating cards over maps: white, Level 1 or Level 2 shadow.

### Navigation

- Header about 64-72px, white, pink wordmark left.
- Center or left links: "Rider", "Driver", "Business", "Safety" style items at 15-16px/500 with dropdown carets.
- Right: "Log in" text link, "Sign up" primary pill.
- Mobile: hamburger opening a full-height white sheet with large 22px links.

### Chips and badges

Chips are 32-36px pills, `#31222A12` fill, 13-15px/500; selected is `#1D0C17` with white text, or `#820076` in product flows. Badges are 20-24px pills, 12-13px/700, pastel fill with dark text in the same family (`#C5EED2` with `#197849`).

### Modals and footer

Modals are white, radius 24px, scrim `#1D0C174D`; mobile uses bottom sheets with a grab handle. The footer is a Black Cherry or off-white band with link columns, app badges and a language picker.

## 6. Layout & Spacing

- **Base unit:** 4px; common steps 8, 12, 16, 24, 32, 48, 64, 96.
- **Content width:** about 1200-1280px with 24-40px side gutters (approximate).
- **Grid:** 12 columns on desktop; hero is usually a split of text and a large rounded photo.
- **Section spacing:** 64-96px on desktop, 48px on mobile.
- **Breakpoints:** roughly 768px and 1024px (approximate). Marketing is airy; ride screens are dense 56-72px rows.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Level 1 | `0 0 1px 0 #0000001F, 0 1px 1px 1px #00000014` |
| Level 2 | `0 0 1px 0 #0000001F, 0 2px 3px 0 #00000029` |
| Dark overlay L1 | `#FFFFFF0D` layer on top of dark surfaces |
| Dark overlay L2 | `#FFFFFF12` |

- Shadows are short and neutral; most marketing surfaces are flat and separated by color bands.
- Easing: `cubic-bezier(0.45, 0, 0.15, 1)` for button and control feedback, 200ms.
- Sheets and menus slide 200-300ms with the same curve (approximate).

## 8. Iconography & Imagery

- **Icons:** Core UI icons on 16, 24 and 32px grids, filled shapes with rounded joins (car-front, pickup, valet, star, heart-checkmark, money-bag). Color is `currentColor`.
- **Photography:** warm, natural light, real riders and drivers, candid, often in cars or at the curb. Cropped into rounded rectangles.
- **Illustration:** flat shapes in the accent families with slightly rounded corners; one accent family per illustration.

## 9. Voice & Microcopy

Friendly, short, a bit playful. Speaks to riders and drivers as people.

- Sentence case, short verbs, at most one light pun per page. Say "ride", "trip" and "driver".

Sample strings from lyft.com:

- Hero: "The world awaits"
- Rider: "A few quick taps, one great trip"
- Apps: "Download the apps and go"
- Safety: "Safety never takes a backseat"
- Driver: "Shift into earnings mode"
- Business: "Helping your business go places, literally"
- Rewards: "Unlock more on every ride"
- Buttons: "Sign up to ride", "Apply to drive", "Log in", "Request Lyft"

## 10. Do's and Don'ts

**Do**

- Use Black Cherry `#1D0C17` for text and primary buttons.
- Keep pink `#FF00BF` for the wordmark and a few brand moments.
- Use plum `#820076` for interactive and selected states.
- Make buttons 48px pills and give feedback with opacity.
- Use warm off-white `#F1F0EC` bands between white sections.
- Pair one pastel accent with dark text in promo tiles.

**Don't**

- Don't fill large areas or buttons with hot pink.
- Don't use pure black `#000` or cool grays.
- Don't use square or 4px-radius buttons.
- Don't mix several accent families in one tile.
- Don't use heavy, blurry shadows on marketing cards.

## 11. Agent Prompt Guide

> Build this UI in the style of Lyft. White page with warm off-white `#F1F0EC` section bands. Text is Black Cherry `#1D0C17` (secondary text is the same color at 70% alpha). Font: Rebel Sans with fallback `"DM Sans", "Helvetica Neue", Arial, sans-serif`; headlines bold, 48-80px, tight tracking, short and friendly. Primary buttons are 48px-tall pills (radius 48px) in Black Cherry with white text; interactive and selected states use plum `#820076`; links are magenta `#AC2A9E`. Hot pink `#FF00BF` is only for the lowercase "lyft" wordmark. Cards are radius 16-24px, flat on off-white, or white with a short shadow `0 0 1px rgba(0,0,0,.12), 0 2px 3px rgba(0,0,0,.16)` when floating over a map. Inputs are 48px, `#F1F0F0` fill, 8px radius, plum focus ring. Use one pastel accent (orange `#FFDFC4`, lime `#DAEDAB`, indigo `#E7E2FF`) per promo tile. Feedback by opacity, 200ms `cubic-bezier(0.45,0,0.15,1)`. Warm, candid photography of riders and drivers.

```css
:root {
  --brand-pink: #FF00BF;
  --brand-text: #1D0C17;
  --brand-text-secondary: #1D0C17B3;
  --brand-interactive: #820076;
  --brand-highlight: #CF0090;
  --brand-link: #AC2A9E;
  --brand-bg: #FFFFFF;
  --brand-bg-secondary: #F1F0EC;
  --brand-bg-neutral: #F1F0F0;
  --brand-surface-tint: #31222A12;
  --brand-border: #CFCBCC;
  --brand-muted: #746A6E;
  --brand-orange: #FF5312;
  --brand-lime: #C1D58B;
  --brand-positive: #197849;
  --brand-negative: #C81534;
  --brand-scrim: #1D0C174D;
  --brand-font: "RebelSansText", "DM Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-font-display: "RebelSansDisplay", "DM Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 16px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 48px;
  --brand-shadow-1: 0 0 1px 0 #0000001F, 0 1px 1px 1px #00000014;
  --brand-shadow-2: 0 0 1px 0 #0000001F, 0 2px 3px 0 #00000029;
  --brand-ease: cubic-bezier(0.45, 0, 0.15, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Lyft.

---
name: Venmo
slug: venmo
url: https://venmo.com
category: Finance
tagline: "Venmo blue wordmark, black pill buttons, warm neutrals and a social payments feed."
updated: 2026-11-16
appStoreId: 351727428
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Venmo Blue
    hex: "#008CFF"
    role: Logo, app icon, brand moments, Pay and Request buttons in the app
  - name: Black
    hex: "#000000"
    role: Headlines, text, primary buttons on venmo.com
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards
  - name: Link Blue
    hex: "#0074DE"
    role: Active links, selected tab, focus structure
  - name: Sky
    hex: "#4BB4FF"
    role: Link hover and focus on venmo.com
  - name: Cloud
    hex: "#F5F5F7"
    role: Secondary buttons, nav panels, surfaces
  - name: Sand
    hex: "#E6E0D9"
    role: Badges and warm surfaces
  - name: Linen
    hex: "#F1EDE8"
    role: Warm section background
  - name: Ivory
    hex: "#FAF8F5"
    role: Light warm background
  - name: Charcoal
    hex: "#292929"
    role: Primary button hover
  - name: Graphite
    hex: "#525252"
    role: Secondary text, high-contrast default
  - name: Silver
    hex: "#CECECF"
    role: Pressed secondary, borders
  - name: Gold
    hex: "#FFD140"
    role: New badges, rewards highlights
  - name: Navy
    hex: "#001C64"
    role: Badge text, deep accents
fonts:
  display:
    family: "Venmo Sans"
    fallback: "DM Sans"
    weights: [700, 800]
  body:
    family: "Venmo Sans"
    fallback: "DM Sans"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 72, weight: 800, lineHeight: 1.0, tracking: "-0.02em" }
  - { role: Heading L, size: 48, weight: 800, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading M, size: 32, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading S, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.56, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 8, md: 16, lg: 32, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Focus, value: "0 0 0 3px #0070E0, 0 0 0 6px rgba(209,229,249,0.9)" }
  - { name: Phone frame, value: "0 10px 30px rgba(0,0,0,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F7"
  text: "#000000"
  muted: "#525252"
  border: "#CECECF"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 999
  buttonStyle: pill
---

# Venmo

## 1. Visual Theme & Atmosphere

Venmo is the friendly side of PayPal: payments as a social feed. The website (venmo.com, built on PayPal's shared platform with a `venmo20` theme) is mostly white and black with warm neutrals, and lets the Venmo blue wordmark and app screenshots carry the brand. In the app, Venmo blue (`#008CFF`) is the action color for Pay and Request.

What makes it recognisable:

- **The italic wordmark.** A heavy, forward-leaning lowercase "venmo" in Venmo blue. The single "V" is the app icon.
- **Black pills on the web.** venmo.com primary buttons are black pills with white text; secondary pills are light gray `#F5F5F7`.
- **Huge, heavy headlines.** Short phrases like "Venmo everything" and "Send. Split. Gift." set very large and bold in Venmo Sans.
- **Phones as heroes.** Sections center on large phone mockups of the app (feed, pay screen, card) with a white frame shadow.
- **Warm neutrals.** Sand `#E6E0D9`, linen `#F1EDE8` and ivory `#FAF8F5` tint sections and badges, which keeps the black-and-white layout from feeling cold.
- **Debit card colors.** The Venmo cards add bold color blocks (blue, black, pink and others) as product imagery.

Mood words: social, casual, bold, friendly, trustworthy.

## 2. Color Palette & Roles

Web values come from the `venmo20` theme CSS served on venmo.com (`--glnv-style-*`). Venmo Blue is the color of the official logo file served on venmo.com.

| Name | Hex | Role |
|---|---|---|
| Venmo Blue | `#008CFF` | Logo, app icon, app primary actions |
| Black | `#000000` | Text, headlines, primary button, icons |
| Charcoal | `#292929` | Primary hover |
| Graphite Pressed | `#3D3D3D` | Primary pressed |
| Graphite | `#525252` | High-contrast default, secondary text |
| White | `#FFFFFF` | Page, cards |
| Cloud | `#F5F5F7` | Secondary button, surfaces, submenu cards |
| Cloud Hover | `#E1E1E3` | Secondary hover |
| Silver | `#CECECF` | Secondary pressed, borders |
| Hover Wash | `#EBEBEB` | Row hover |
| Active Wash | `#D6D6D6` | Row pressed |
| Link Blue | `#0074DE` | Active link, tab indicator, focus structure |
| Sky | `#4BB4FF` | Link hover and focus |
| Focus Blue | `#0070E0` | Focus ring |
| Sand | `#E6E0D9` | Badge background |
| Linen | `#F1EDE8` | Warm section |
| Ivory | `#FAF8F5` | Light warm section |
| Gold | `#FFD140` | "New" badge |
| Navy | `#001C64` / `#001435` | Badge text |

### Semantic

| State | Hex |
|---|---|
| Success | `#008A3E` (approximate) |
| Error | `#D20000` (approximate) |
| Warning | `#FF9100` |
| Info | `#0074DE` |

### App palette

The app uses Venmo Blue for the Pay/Request buttons, active tab and links, white surfaces, black text, gray `#6B6B6B` secondary text (approximate), and green for incoming money amounts in the transaction list. The app supports a dark theme: background near-black, cards dark gray, the same blue for actions.

## 3. Typography

**Family:** Venmo Sans, a custom geometric sans with a large x-height, used on web and in the app. The served stack is `Venmo Sans, Helvetica, Arial, sans-serif`. It is proprietary.

**Fallback:** DM Sans from Google Fonts is close in shape and weight range.

```css
font-family: "Venmo Sans", "DM Sans", Helvetica, Arial, sans-serif;
```

### Scale

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero ("Venmo everything") | 56-80px | 800 | 1.0 |
| Heading L | 40-48px | 800 | 1.05 |
| Heading M | 32px | 700 | 1.15 |
| Heading S | 20px | 700 | 1.3 |
| Body L | 18px | 400 | 1.56 |
| Body | 16px | 400 | 1.5 |
| Small | 14px | 400 | 1.43 |
| Button | 16-18px | 700 | 1 |

Body sizes and line heights match served tokens (`--text-base`, `--text-lg`, `--text-sm`); heading sizes are approximate.

### Rules

- Sentence case. Headlines are short, often a punchy three-beat phrase with periods.
- Tight negative tracking on big headlines.
- Money amounts: bold, tabular, with sign and color in transaction lists ("+ $25.00" in green, "- $25.00" in black).

## 4. Logo & Brand Mark

The logo is the lowercase **venmo** wordmark: heavy, italic-leaning letters with a distinctive "v" whose left stroke is shorter and angled. The **V** alone, white on a blue rounded square, is the app icon and avatar.

- **Primary:** Venmo Blue `#008CFF` on white.
- **Reverse:** white on Venmo Blue or black.
- **Single color:** black on light backgrounds.
- **Clear space:** at least the height of the "v" on all sides (approximate).
- **Minimum size:** about 60px wide for the wordmark (approximate).

Misuse:

- Do not retype the wordmark or straighten it.
- Do not use the older lighter blue `#3D95CE` from the pre-2020 logo.
- Do not recolor with gradients or add shadows.
- Do not put the blue wordmark on busy photography.

## 5. Components

### Buttons (web)

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` 16-18px/700 | none | 999px | 48px |
| Secondary | `#F5F5F7` | `#000000` | none | 999px | 48px |
| Tertiary | transparent | `#000000`, underline on hover | none | 0 | auto |
| App primary (in product) | `#008CFF` | `#FFFFFF` | none | 999px | 44-48px |

States:

- Primary hover `#292929`, pressed `#3D3D3D`.
- Secondary hover `#E1E1E3`, pressed `#CECECF`.
- Focus: `0 0 0 3px #0070E0` plus a soft outer halo `0 0 0 6px rgba(209,229,249,.9)`.

```css
.venmo-btn {
  height: 48px; padding: 0 28px;
  border: 0; border-radius: 999px;
  background: #000; color: #fff;
  font: 700 17px/1 var(--brand-font);
  transition: background-color .15s ease;
}
.venmo-btn:hover { background: #292929; }
.venmo-btn--secondary { background: #F5F5F7; color: #000; }
.venmo-btn--secondary:hover { background: #E1E1E3; }
```

### Pay / Request sheet (signature, app)

- Large amount entry centered: "$0" at 56-72px/700 with the cursor, keypad below.
- Recipient row with round avatar (40px), name 16px/700 and @username 14px gray.
- Note field "What's this for?" with emoji support.
- Privacy selector chip: "Public", "Friends", "Private" with globe, people and lock icons.
- Two full-width pills side by side: "Request" and "Pay", Venmo Blue.

### Social feed (signature, app)

- Rows: 40px avatar, "Name paid Name" in 15px with names bold, timestamp and privacy icon in 13px gray, note text below (often an emoji).
- Like heart and comment icons at the right; amounts shown only on your own transactions.
- White background, 1px light dividers, 16px horizontal padding.

### Cards

- Feature tiles on the web: radius 16-32px, `#F5F5F7` or warm Linen fill, no border, phone mockup or card image bleeding off the bottom.
- Product cards (Debit Card, Credit Card): card art angled, title 20-24px/700, short copy, "Learn more" link.

### Navigation

- Shared PayPal global nav with Venmo theme: white, about 64-72px, blue venmo wordmark left.
- Menus "Pay & Get Paid", "Ways to Pay", "Business", "Help" (dropdowns open panels with `#F5F5F7` cards).
- Right: "Log in" secondary pill and "Get Venmo" primary black pill.
- Active nav item: `#F5F5F7` pill background.
- Mobile: full-screen accordion menu on `#F5F5F7` panels.

### Inputs

- 56-64px tall floating-label fields with 1px gray border and 8-12px radius (PayPal pattern, approximate), 16px text.
- Focus: 2px `#0070E0` border plus the soft halo.
- Error: red border and 14px message with an icon.

### Badges

- Default: `#E6E0D9` fill, `#001435` text, pill, 12-14px/700.
- New: `#FFD140` fill, `#001C64` text.

### QR sticky badge

On desktop a sticky card in the corner shows a QR code with "Download the Venmo app"; white, rounded 16px, light shadow.

### Footer

White or Cloud background, link columns at 14px ("About us", "Jobs", "Newsroom", "Help Center", "Our fees", "Privacy", "Licenses"), legal copy in 12-13px gray.

## 6. Layout & Spacing

- **Base unit:** 4px; Tailwind-style scale (4, 8, 12, 16, 24, 32, 48, 64, 96).
- **Radii tokens:** 2, 4, 8, 12, 16, 32px plus 999px pills.
- **Content width:** about 1200-1280px, 24-48px gutters (approximate).
- **Sections:** alternate centered text-over-phone and split text-and-phone layouts; 80-120px vertical spacing on desktop.
- **Breakpoints:** Tailwind defaults (640, 768, 1024, 1280px) with nav switching at 1024px.

## 7. Depth, Elevation & Motion

- Mostly flat; separation comes from warm and gray section fills.
- Phone mockups have a white bezel and a soft drop shadow (approximate `0 10px 30px rgba(0,0,0,.15)`), and scale up as you scroll into them.
- Focus ring is the strongest "shadow" in the system: 3px blue plus a 6px pale halo.
- Motion: scroll-linked scaling of phones, 150-250ms hover fades, menus slide down 200ms.

## 8. Iconography & Imagery

- **Icons:** simple 24px glyphs, filled or 2px stroke, black on web; Venmo Blue for active states in the app.
- **Imagery:** app screenshots in phone frames, Venmo card art, and photos of friends splitting bills, concerts, food and trips.
- **Emoji:** part of the product; payment notes often are a single emoji (pizza, house, beer). Keep emoji out of UI chrome.
- **Avatars:** round, with initials on a colored circle when no photo.

## 9. Voice & Microcopy

Casual, upbeat and brief. Talks like a friend, explains money plainly.

Sample strings read on venmo.com today:

- Hero: "Venmo everything"
- Sub: "Send money to friends, pay businesses, and check out with Venmo when you shop."
- Feature: "Send. Split. Gift."
- Feature sub: "Pay friends. Schedule payments. Split group expenses. Send gift cards."
- Section: "More ways to pay", "Get the app"
- Buttons: "Get Venmo", "Log in", "Learn more", "Download the Venmo app"
- In app: "Pay", "Request", "What's this for?"

Rates and cash-back figures change often; read them from venmo.com before quoting.

## 10. Do's and Don'ts

**Do**

- Use the blue wordmark and keep the web UI black, white and warm neutral.
- Use black pills for primary web actions and Venmo Blue pills inside the app.
- Set very large, heavy headlines with short phrases.
- Center sections on clear phone mockups of the real app.
- Use warm Sand and Linen fills to soften sections.

**Don't**

- Don't use PayPal navy and PayPal blue as the main colors; that is the parent brand.
- Don't fill whole sections with Venmo Blue.
- Don't use square buttons or thin, light headlines.
- Don't show other people's transaction amounts in a feed mockup.
- Don't use the old lighter blue wordmark.

## 11. Agent Prompt Guide

> Build this UI in the style of Venmo. White page with warm neutral sections (`#F1EDE8`, `#FAF8F5`) and light gray `#F5F5F7` cards. Text black `#000`, secondary `#525252`. Font: `"Venmo Sans", "DM Sans", Helvetica, Arial, sans-serif`; headlines very large (48-72px), weight 800, tight tracking, short punchy phrases like "Send. Split. Gift." Primary buttons are black pills (999px radius, 48px tall, white 700 text), hover `#292929`; secondary pills are `#F5F5F7`, hover `#E1E1E3`. Use the blue `#008CFF` venmo wordmark in the header and for in-app Pay and Request buttons. Links are black and turn `#4BB4FF` on hover; active `#0074DE`. Focus ring `0 0 0 3px #0070E0, 0 0 0 6px rgba(209,229,249,.9)`. Show large phone mockups of a payments feed with round avatars, bold names and emoji notes. Badges are pills in `#E6E0D9` with navy text.

```css
:root {
  --brand-blue: #008CFF;
  --brand-black: #000000;
  --brand-black-hover: #292929;
  --brand-black-pressed: #3D3D3D;
  --brand-text: #000000;
  --brand-text-secondary: #525252;
  --brand-bg: #FFFFFF;
  --brand-surface: #F5F5F7;
  --brand-surface-hover: #E1E1E3;
  --brand-border: #CECECF;
  --brand-sand: #E6E0D9;
  --brand-linen: #F1EDE8;
  --brand-ivory: #FAF8F5;
  --brand-link-active: #0074DE;
  --brand-link-hover: #4BB4FF;
  --brand-focus: #0070E0;
  --brand-gold: #FFD140;
  --brand-navy: #001C64;
  --brand-font: "Venmo Sans", "DM Sans", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 16px;
  --brand-radius-lg: 32px;
  --brand-radius-pill: 999px;
  --brand-focus-ring: 0 0 0 3px #0070E0, 0 0 0 6px rgba(209,229,249,.9);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Venmo or PayPal.

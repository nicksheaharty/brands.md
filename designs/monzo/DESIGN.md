---
name: Monzo
slug: monzo
url: https://monzo.com
category: Banking
tagline: "Hot Coral on clean white and deep navy, pill buttons and friendly, plain-spoken banking."
updated: 2026-11-16
appStoreId: 1052238659
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Hot Coral
    hex: "#FF4F40"
    role: Brand color, logo, the card, accent backgrounds and accent text
  - name: Navy 900
    hex: "#091723"
    role: Primary text, primary button fill, dark sections
  - name: Grey 100
    hex: "#F2F8F3"
    role: Secondary page background, soft section bands
  - name: White
    hex: "#FFFFFF"
    role: Primary page background and card surface
  - name: Navy 800
    hex: "#112231"
    role: Inverse (dark) background, pressed primary button
  - name: Blue Accent
    hex: "#009ACE"
    role: Focus outline on buttons and fields
  - name: Navy 700
    hex: "#2C3A43"
    role: Primary button hover
  - name: Navy 600
    hex: "#3B4C54"
    role: Link hover text
  - name: Teal 550
    hex: "#016B83"
    role: Deep teal for illustrations and product accents
  - name: Blue 500
    hex: "#218FB7"
    role: Product blue for feature cards and links in content
  - name: Mint 200
    hex: "#BBF6E2"
    role: Pale mint tint for feature panels
  - name: Lime
    hex: "#D9FF6F"
    role: Highlight tint used in promotional panels
  - name: Grey 300
    hex: "#C9D0C6"
    role: Dividers and quiet borders on grey backgrounds
  - name: Grey 500
    hex: "#75817E"
    role: Tertiary text, captions
  - name: Positive
    hex: "#248A3D"
    role: Positive amounts and success text
  - name: Negative
    hex: "#D70015"
    role: Errors and field error borders
fonts:
  display:
    family: "Monzo Sans Display"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Monzo Sans Text"
    fallback: "Inter"
    weights: [400, 600]
typeScale:
  - { role: Display, size: 61, weight: 700, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading 1, size: 49, weight: 700, lineHeight: 1.1, tracking: "-0.015em" }
  - { role: Heading 2, size: 39, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading 3, size: 31, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Heading 4, size: 25, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Body Large, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 13, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 8, md: 16, lg: 32, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128]
shadows:
  - { name: Level 1, value: "0 2px 8px rgba(0,0,0,0.16)" }
  - { name: Level 2, value: "0 4px 16px rgba(0,0,0,0.16)" }
  - { name: Level 3, value: "0 8px 32px rgba(0,0,0,0.16)" }
  - { name: Level 4, value: "0 16px 48px rgba(0,0,0,0.24)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F8F3"
  text: "#091723"
  muted: "#75817E"
  border: "#C9D0C6"
  accent: "#091723"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Monzo

## 1. Visual Theme & Atmosphere

Monzo is a UK app-first bank, and its site reads like a calm extension of the app. The page is white or a very pale green-grey (`#F2F8F3`), text and buttons are deep navy (`#091723`), and the brand color, Hot Coral (`#FF4F40`), turns up as the logo, the physical card and the odd full-bleed accent panel. Coral is a signal, not a wallpaper.

What makes it recognisable:

- **Hot Coral.** The coral card is the brand's most famous asset. On the site it appears in the wordmark, in product shots of the card, and as a background on a few promotional blocks.
- **Navy, not black.** All primary text, primary buttons and dark bands use navy `#091723` and `#112231`. Pure black is avoided.
- **Big rounded shapes.** Cards and media frames use large radii (24-32px on desktop, sometimes 48-64px for hero media). Buttons are full pills.
- **Product UI as the hero.** Sections show phone screens with real app features (card freeze, instant notifications, biometric login, call status) set inside rounded tinted cards, often with short looping videos.
- **Soft pastel tints.** Feature cards pick up mint (`#BBF6E2`), pale teal, pink (`#FFD7F0`) and lime (`#D9FF6F`) washes behind the product imagery.
- **Friendly copy.** Headlines are short and plain ("Card freeze", "Biometric login", "Apply for an account in 10 minutes", read on the site 2026-11-16), and even the cookie banner jokes about the crunchy kind.

Density is moderate. Sections are separated by 80-128px, cards sit in 2-3 column grids, and each card carries one idea.

Mood words: warm, direct, modern, trustworthy, a little playful.

## 2. Color Palette & Roles

Values below come from the monzo.com CSS custom properties (`--color-*` and `--semantic-*`), read 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Hot Coral (`--color-brand`) | `#FF4F40` | Logo, accent background, accent content |
| Navy 900 | `#091723` | Primary text, primary button, links |
| Navy 800 | `#112231` | Inverse background, primary button active |
| Navy 700 | `#2C3A43` | Primary button hover |
| Navy 600 | `#3B4C54` | Link hover |
| White | `#FFFFFF` | Primary background, field fill |
| Grey 100 | `#F2F8F3` | Secondary background |
| Grey 200 | `#E3EBE4` | Inverse button hover, subtle fills |
| Grey 300 | `#C9D0C6` | Borders on grey, inverse link hover |
| Grey 500 | `#75817E` | Captions |
| Blue Accent | `#009ACE` | Focus outline (`--semantic-action-outline-focus`) |
| Blue 500 | `#218FB7` | Product blue |
| Teal 550 | `#016B83` | Deep teal accent |
| Blue 200 (mint) | `#BBF6E2` | Pastel panel |
| Pink | `#FFD7F0` | Pastel panel |
| Lime | `#D9FF6F` | Highlight panel |

### Semantic colors

| Token | Value | Use |
|---|---|---|
| content-primary | `#091723` | Body and headings |
| content-secondary | navy at 60% (`rgba(9,23,35,0.6)`) | Secondary text, nav section labels |
| content-disabled | navy at 30% | Disabled text |
| content-positive | `#248A3D` | Money in, success |
| content-negative | `#D70015` | Errors, money warnings |
| field-border-default | navy at 10% | Input border |
| field-border-hover | navy at 30% | Input hover |
| field-border-active | `#091723` | Input focused/filled |
| backdrop | `rgba(0,0,0,0.3)` | Modal scrim |

### Dark sections

Inverse sections switch background to `#112231` (primary) or `#091723` (secondary), text to white, and buttons to white fill with navy text (hover `#E3EBE4`, active `#F2F8F3`). Secondary inverse buttons are 2px white outlines.

## 3. Typography

Monzo uses two proprietary families: **Monzo Sans Display** for headings and **Monzo Sans Text** for body and UI. Both are licensed only to Monzo. Older pages also reference "Maison Neue" (the previous brand face) with Avenir and Montserrat in the fallback stack.

Fallback: **Inter** is the closest freely available match for both (approximate). Use weight 700 for display, 400/600 for text.

```css
--font-stack-title: "MonzoSansDisplay", "Inter", sans-serif;
--font-stack-body: "MonzoSansText", "Inter", "Helvetica Neue", Arial, sans-serif;
```

The site uses a fluid modular scale (ratio 1.2) via `clamp()`:

| Role | Token | Size (desktop) | Weight | Line height |
|---|---|---|---|---|
| Display | step-6 | ~61px | 700 (approx.) | 1.05 |
| Heading 1 | step-5 | ~49px | 700 (approx.) | 1.1 |
| Heading 2 | step-4 | ~39px | 700 (approx.) | 1.15 |
| Heading 3 | step-3 | ~31px | 600 (approx.) | 1.2 |
| Heading 4 | step-2 | ~25px | 600 (approx.) | 1.25 |
| Body large / Heading 5 | step-1 | 20px | 400 | 1.5 |
| Body | step-0 | 16px | 400 | 1.5 |
| Small | step--1 | ~13px | 400 | 1.4 |

Rules:

- Sentence case for every heading and button. No all-caps headlines.
- Slightly tight tracking on large display sizes (around -0.02em, approximate); normal tracking elsewhere.
- Money amounts use tabular figures and a pound sign with no space: `£24.50`.
- Keep headings short, often two to five words.

## 4. Logo & Brand Mark

The current logo (2022) is a lowercase **"monzo"** wordmark with rounded, geometric letters, drawn in Hot Coral `#FF4F40`. The "o" counters are perfect circles and the "z" is squared off.

The **M mark** is a separate symbol made of four folded panels forming an M. It is used for the app icon, social avatars and small spaces.

- Clear space: at least the height of the "o" on every side.
- Minimum size: about 64px wide for the wordmark on screen, 24px for the M mark.
- Color versions: coral on white or light grey; white on navy `#112231`; white on coral. Navy wordmark on white is acceptable for one-color use.
- Don't: stretch the wordmark, add gradients or shadows, recolor it outside coral, navy or white, or put coral on coral-adjacent pinks.

The `logo.svg` here is the coral wordmark. The `icon.svg` is a white M mark on Hot Coral.

## 5. Components

### Buttons

All buttons are full pills (`border-radius: 64-128px`, use `9999px`).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; padding: 0 24px;
  border-radius: 9999px;
  font: 600 16px/1.5 var(--font-stack-body);
  transition: background-color 300ms cubic-bezier(0.22, 0, 0.12, 1);
}
.btn--small { height: 36px; padding: 0 16px; font-size: 13px; }
.btn--primary { background: #091723; color: #FFFFFF; border: none; }
.btn--primary:hover { background: #2C3A43; }
.btn--primary:active { background: #112231; }
.btn--secondary { background: transparent; color: #091723; border: 2px solid #091723; }
.btn--secondary:hover { background: rgba(9,23,35,0.10); }
.btn--secondary:active { background: rgba(9,23,35,0.20); }
.btn:focus-visible { outline: 2px solid #009ACE; outline-offset: 2px; }
.btn:disabled { background: rgba(9,23,35,0.10); color: rgba(9,23,35,0.30); }
```

Inverse (on navy): primary is white with navy text, hover `#E3EBE4`; secondary is a 2px white outline.

The primary call to action on the site is usually "Open a free account" or "Sign up", sometimes paired with an app store button pair.

### Inputs

- White fill, 1px border `rgba(9,23,35,0.10)`, 12-16px radius (approximate), 48px tall, 16px text.
- Hover border `rgba(9,23,35,0.30)`, focused/active border `#091723` plus 2px `#009ACE` outline.
- Error: border `#D70015`, helper text in `#D70015`.
- The sign-up form is a single email or phone field with a full-width primary button on mobile, inline on desktop.

### Cards

- Feature cards: 24px radius on mobile, 32px on desktop, no border, pastel or grey background, product image or video anchored to the bottom.
- Large spotlight cards: up to 48-64px radius for hero media.
- Padding 24-32px. Title in Heading 4, one-line description in Body.

### Navigation

- White sticky header, coral wordmark left, product sections (Personal, Business, Help) and pill-shaped section selector buttons (`padding: 8px 8px 8px 12px; border-radius: 100px; color: rgba(9,23,35,0.6)`).
- Primary pill button at right.
- Mobile: full-screen sheet with a back chevron and large tappable rows.

### Badges

Small pill tags (radius 9999px, 4px 10px padding, 13px text). Typical: "New", "Monzo Extra". Use mint or lime backgrounds with navy text.

### Lists and transactions

Transaction rows mirror the app: 40px round merchant avatar, merchant name (16px, 600), category below (13px, secondary navy), amount right-aligned. Money in shows in `#248A3D` with a plus sign.

### Modals and sheets

White sheet, 24px top radius on mobile (bottom sheet), centred 24-32px radius dialog on desktop, scrim `rgba(0,0,0,0.3)`, Level 4 shadow.

### Signature elements

- **The coral card**: photographed or rendered in Hot Coral, often in someone's hand, with the M mark on it.
- **Feature grid**: 2x2 or 3-up grid of tinted cards, each with a looping product video.
- **Trust strip**: regulator badges and "Which? recommended provider" badges in a quiet grey band.

## 6. Layout & Spacing

- Max content width 1440px (`--size-11x-large`), with track padding of 16px (mobile), 32px (tablet) and 64px (desktop).
- 12-column grid on desktop, 4 on mobile; gutters 16-24px.
- Spacing tokens: 2, 4, 8, 12, 16, 20 (step), 24, 32, 48, 64, 80, 96, 128px.
- Section padding: 64px mobile, 96-128px desktop.
- Breakpoints (approximate): 480, 768 (portrait tablet), 1024 (landscape tablet), 1440.

## 7. Depth, Elevation & Motion

Monzo is mostly flat. Shadows appear only on floating UI (menus, sticky bars, phone mockups).

| Level | Shadow |
|---|---|
| 1 | `0 2px 8px rgba(0,0,0,0.16)` |
| 2 | `0 4px 16px rgba(0,0,0,0.16)` |
| 3 | `0 8px 32px rgba(0,0,0,0.16)` |
| 4 | `0 16px 48px rgba(0,0,0,0.24)` |
| 5 | `0 32px 64px rgba(0,0,0,0.24)` |

Motion tokens:

- Durations: 100ms (short), 200ms (medium), 300ms (long), 400ms (extra long), 600ms (super long). Delay base 150ms.
- Easing: flow `cubic-bezier(0.22, 0, 0.12, 1)`, slow-down `cubic-bezier(0, 0, 0.12, 1)`, speed-up `cubic-bezier(0.22, 0, 1, 1)`.
- Springs are expressed with CSS `linear()` curves (default tension 110, friction 24).
- Buttons change background over 300ms. Cards fade and rise 16-24px on scroll. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- Icons: rounded, solid-filled glyphs on a 24px grid, rendered 20-24px, in navy. Chevrons and arrows have rounded ends.
- Photography: real people in everyday settings (a café, a garden, a shop counter), natural light, the coral card visible in frame.
- Product shots: clean phone screens, cropped tightly, sitting inside tinted rounded cards. Short muted looping videos replace static images where possible.
- No stock-photo handshakes or abstract finance imagery.

## 9. Voice & Microcopy

Plain English, short sentences, a bit of warmth. Monzo explains money without jargon and is happy to be light where it does no harm.

- Sentence case everywhere.
- Second person: "you" and "your money".
- Lead with what the customer can do, not with the product name.

Sample strings (from monzo.com, read 2026-11-16):

- Nav CTA: "Open a free account"
- Section: "A regulated bank with 24/7 support"
- Onboarding: "Apply for an account in 10 minutes"
- Cookie banner: "Can we use optional cookies?" / "We're not talking about the crunchy, tasty kind."
- Buttons: "Accept all", "Reject all", "Customise"

Use British spelling (customise, colour). Use the £ sign.

## 10. Do's and Don'ts

**Do**

- Keep the page white or pale grey with navy text, and use Hot Coral for the brand moment.
- Use full-pill buttons, navy for primary.
- Show the real app: phone screens and short looping clips in rounded tinted cards.
- Use large radii (24-32px) on cards.
- Write short, friendly, specific headlines in sentence case.
- Use the `#009ACE` focus ring on every interactive element.

**Don't**

- Don't use coral as body text or for large blocks of copy.
- Don't use pure black text or grey-blue corporate palettes.
- Don't use square-cornered buttons or small 4px radii on cards.
- Don't pile on shadows; most surfaces are flat.
- Don't use banking jargon or ALL CAPS.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Monzo. White page (`#FFFFFF`) with pale green-grey bands (`#F2F8F3`). All text and primary buttons in navy `#091723`; secondary text navy at 60%. Brand color Hot Coral `#FF4F40` for the logo, the card and one accent panel per page. Font: "Monzo Sans Display" for headings and "Monzo Sans Text" for body, falling back to Inter. Headings are bold, short and sentence case; body is 16-20px at 1.5 line-height. Buttons are full pills, 48px tall with 24px side padding: primary navy with white text (hover `#2C3A43`), secondary 2px navy outline. Focus ring 2px `#009ACE`. Cards have 24-32px radius, no border, pastel backgrounds (mint `#BBF6E2`, pink `#FFD7F0`, lime `#D9FF6F`, grey `#F2F8F3`) and a phone screenshot or looping video anchored at the bottom. Mostly flat; use `0 4px 16px rgba(0,0,0,0.16)` only for floating UI. Dark sections use `#112231` with white text and white pill buttons. Max width 1440px, 64px desktop gutters, 96-128px section spacing. Easing `cubic-bezier(0.22, 0, 0.12, 1)`, 300ms. Copy is friendly British English.

```css
:root {
  --brand-coral: #FF4F40;
  --brand-navy-900: #091723;
  --brand-navy-800: #112231;
  --brand-navy-700: #2C3A43;
  --brand-navy-600: #3B4C54;
  --brand-white: #FFFFFF;
  --brand-grey-100: #F2F8F3;
  --brand-grey-300: #C9D0C6;
  --brand-grey-500: #75817E;
  --brand-focus: #009ACE;
  --brand-mint: #BBF6E2;
  --brand-lime: #D9FF6F;
  --brand-pink: #FFD7F0;
  --brand-positive: #248A3D;
  --brand-negative: #D70015;
  --brand-text-secondary: rgba(9,23,35,0.6);
  --brand-border: rgba(9,23,35,0.1);
  --brand-font-display: "MonzoSansDisplay", "Inter", sans-serif;
  --brand-font-body: "MonzoSansText", "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 16px;
  --brand-radius-lg: 24px;
  --brand-radius-xl: 32px;
  --brand-radius-pill: 9999px;
  --brand-shadow-1: 0 2px 8px rgba(0,0,0,0.16);
  --brand-shadow-2: 0 4px 16px rgba(0,0,0,0.16);
  --brand-shadow-3: 0 8px 32px rgba(0,0,0,0.16);
  --brand-shadow-4: 0 16px 48px rgba(0,0,0,0.24);
  --brand-ease: cubic-bezier(0.22, 0, 0.12, 1);
  --brand-duration: 300ms;
}
```

---

Values are observed from the public monzo.com stylesheets on 2026-11-16; heading weights and some radii are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Monzo Bank.

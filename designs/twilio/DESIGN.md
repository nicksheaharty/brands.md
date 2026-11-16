---
name: Twilio
slug: twilio
url: https://twilio.com
category: Developer
tagline: "Twilio red on deep ink and warm paper, pill buttons, code-first pages, Paste for Console."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Twilio Red
    hex: "#F22F46"
    role: Logo, primary CTAs, icon strokes
  - name: Ink
    hex: "#000D25"
    role: Headlines, body text, dark sections
  - name: Paper
    hex: "#FDF7F4"
    role: Warm section background
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards
  - name: Blue 60
    hex: "#0263E0"
    role: Links, Paste primary buttons
  - name: Saffron
    hex: "#F2BE5A"
    role: Illustration accent, highlights
  - name: Mint
    hex: "#6ADDB2"
    role: Illustration accent, success tint
  - name: Red Dark
    hex: "#B10F23"
    role: Accessible red text, pressed state
  - name: Ink Accent
    hex: "#17243B"
    role: Cards on ink
  - name: Ink Light
    hex: "#1E2F4D"
    role: Borders and hover on ink
  - name: Gray 850
    hex: "#191F36"
    role: Default text in components
  - name: Gray 60
    hex: "#606B85"
    role: Secondary text
  - name: Gray 20
    hex: "#E1E3EA"
    role: Borders, dividers
  - name: Gray 10
    hex: "#F4F4F6"
    role: Subtle panels
  - name: Paper Accent
    hex: "#FEF0E6"
    role: Hover fill on paper
  - name: Purple 70
    hex: "#5817BD"
    role: Illustration, AI product accents
fonts:
  display:
    family: "Twilio Sans Display"
    fallback: "Inter"
    weights: [500, 600]
  body:
    family: "Whitney SSm"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "Twilio Sans Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 56, weight: 600, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H2, size: 44, weight: 600, lineHeight: 1.18, tracking: "-0.01em" }
  - { role: H3, size: 32, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: H4, size: 24, weight: 600, lineHeight: 1.33, tracking: "0" }
  - { role: Body Large, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 500, lineHeight: 1.5, tracking: "0" }
  - { role: Eyebrow Mono, size: 14, weight: 400, lineHeight: 1.43, tracking: "0.04em" }
radii: { sm: 4, md: 10, lg: 20, pill: 50 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 8px 24px rgba(18,28,45,0.1)" }
  - { name: Image, value: "0 4px 16px rgba(18,28,45,0.15)" }
  - { name: Navigation, value: "0 14px 25px rgba(18,28,45,0.12)" }
  - { name: Large, value: "0 16px 60px rgba(18,28,45,0.15)" }
preview:
  bg: "#FFFFFF"
  surface: "#FDF7F4"
  text: "#000D25"
  muted: "#606B85"
  border: "#E1E3EA"
  accent: "#F22F46"
  accentText: "#FFFFFF"
  radius: 10
  buttonStyle: pill
---

# Twilio

## 1. Visual Theme & Atmosphere

Twilio sells communication APIs (SMS, voice, WhatsApp, email, verification) and, more recently, AI conversation tools. Its brand is built on one strong colour, **Twilio Red** `#F22F46`, set against a deep navy-black called **ink** `#000D25` and a warm off-white **paper** `#FDF7F4`. The site feels like a confident developer brand: big headlines, pill buttons, code samples, and product icons drawn with red line strokes.

The current homepage opens with "The platform for conversations in the AI era", then "Building blocks for every conversation" (product cards for Messaging, Voice, Email, Verify and Conversation products, each with a small red-stroked icon), a code section with language tabs (Python, C#, PHP, Ruby, Java, JavaScript, curl), analyst recognition, customer stories, and a closing band "TL;DR: Don't wait for the future. Build it." with "Start for free" and "View pricing".

What makes it recognisable:

- **Twilio Red** on everything that matters: logo, CTAs, icon strokes, outbound-link arrows.
- **The "bug":** a circle holding four dots, the logo's symbol.
- **Ink and paper.** Navy-black dark bands and a warm cream instead of gray.
- **Pill buttons** (50px radius) with medium-weight labels.
- **Code front and center.** Snippets with language tabs are part of the marketing.

Mood words: bold, developer-first, warm, energetic, practical.

## 2. Color Palette & Roles

Values were read from the live twilio.com CSS custom properties (`--color-*`, stored as RGB triplets).

| Name | Hex | Role |
|---|---|---|
| Twilio Red | `#F22F46` | Logo, primary CTA, icon strokes |
| Red Light | `#EF223A` | Accessible red on dark, alt CTA |
| Red Core | `#DB132A` | `--color-twilio-red` in components |
| Red Dark | `#B10F23` | Red text on light, pressed |
| Red Accent | `#F3465A` | Hover on dark |
| Red 10 | `#FEECEC` | Error and highlight tint |
| Ink | `#000D25` | Text, dark sections |
| Ink Accent | `#17243B` | Cards on ink |
| Ink Light | `#1E2F4D` | Borders on ink |
| Gray 850 | `#191F36` | Component default text |
| Gray 800 | `#232B45` | Dark panels |
| Gray 60 | `#606B85` | Secondary text |
| Gray 40 | `#AEB2C1` | Disabled, placeholder |
| Gray 20 | `#E1E3EA` | Borders |
| Gray 10 | `#F4F4F6` | Subtle panels |
| Paper | `#FDF7F4` | Warm background |
| Paper Accent | `#FEF0E6` | Hover on paper |
| White | `#FFFFFF` | Page, cards |
| Blue 60 | `#0263E0` | Links |
| Blue 80 | `#001489` | Deep blue sections |
| Blue 200 | `#3ACEFA` | Accent on dark |
| Saffron | `#F2BE5A` | Illustration |
| Mint | `#6ADDB2` | Illustration, positive |
| Purple 70 | `#5817BD` | AI product accents |
| Green 70 | `#0E7C3A` | Success text |

### Semantic

| State | Hex |
|---|---|
| Error | `#B10F23` text, `#FEECEC` tint |
| Success | `#0E7C3A` text, `#EDFDF3` tint |
| Info / link | `#0263E0` |
| Focus | `#001489` outline on light, white on dark |

### Paste (Twilio Console, approximate)

Paste, Twilio's open-source product design system, uses a cooler palette: primary blue `#0263E0`, text `#121C2D`, weak text `#606B85`, borders `#8891AA` and `#E1E3EA`, weak background `#F4F4F6`, error `#D61F1F`, success `#14B053`, warning `#F47C22`. Red appears only in the logo. Paste has light and dark themes.

## 3. Typography

**Marketing:** **Whitney SSm** (Hoefler&Co, commercial) for body text with Helvetica/Arial fallbacks, and Twilio's custom **Twilio Sans** family (Text and Mono are loaded on the homepage; a Display cut for headlines is approximate) for headlines, labels and code. **Buffalo** is a handwritten accent font used rarely.

**Product (Paste):** Inter for UI text and Fira Mono / system mono for code (approximate).

**Free fallbacks:** Inter for both Whitney and Twilio Sans; JetBrains Mono for Twilio Sans Mono.

Note: the root font size is 62.5%, so `1.6rem` = 16px in the site CSS.

### Scale (desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 56px (`--font-size-100`) | 600 | 1.1 | -0.01em (approximate) |
| H2 | 44-48px | 600 | 1.18 | -0.01em (approximate) |
| H3 | 32px | 600 | 1.25 | 0 |
| H4 | 24px | 600 | 1.33 | 0 |
| Body large | 20px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Button | 16px (20px large) | 500 | 1.5 | 0 |
| Small | 14px | 400 | 1.43 | 0 |
| Mono label | 14px | 400 | 1.43 | 0.04em (approximate) |

### Rules

- Sentence case headlines; product names capitalised (Programmable Messaging, Verify, Conversation Relay, Flex).
- Headline weight comes from the font family's semibold; avoid ultra-bold.
- Code and API names in mono.

## 4. Logo & Brand Mark

The logo is the lowercase **"twilio"** wordmark with the **bug** (a ring containing four dots in a 2x2 grid) to its left. On the site the full logo is Twilio Red; it also appears in white on ink.

- **Colors:** red on white or paper; white on ink or red; ink one-colour where colour is not possible.
- **Clear space:** the width of the bug's ring on every side (approximate).
- **Minimum size:** logo about 70px wide; bug alone 16px (approximate).
- The bundled `logo.svg` is the site's header logo, filled `#F22F46`.

Misuse: do not change the number or position of the dots, use the bug as a generic "more" icon, put the red logo on red, or add shadows.

## 5. Components

### Buttons

Pill-shaped (`--radius-2x-large: 5rem`), 16px/500, with an inset 2px border drawn as a box-shadow.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#F22F46` | `#FFFFFF` | none | `#DB132A` (approximate) |
| Secondary | transparent | `#000D25` | inset 2px `#000D25` | fill ink, text white |
| Primary on ink | `#F22F46` | `#FFFFFF` | none | `#F3465A` |
| Secondary on ink | transparent | `#FFFFFF` | inset 2px white | fill white, text ink |
| Tertiary link | none | `#000D25` with red arrow | 1px bottom border | arrow moves |

```css
.tw-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px;
  font: 500 16px/24px "Whitney SSm", Inter, Helvetica, Arial, sans-serif;
  color: #fff; background: #F22F46;
  border: 0; border-radius: 50px;
  box-shadow: inset 0 0 0 2px #F22F46;
  transition: background-color .3s ease-in-out, color .3s ease-in-out, box-shadow .3s ease-in-out;
}
.tw-btn:hover { background: #DB132A; box-shadow: inset 0 0 0 2px #DB132A; }
.tw-btn--secondary { background: transparent; color: #000D25; box-shadow: inset 0 0 0 2px #000D25; }
.tw-btn--secondary:hover { background: #000D25; color: #fff; }
.tw-btn:focus-visible { outline: 2px solid #001489; outline-offset: 2px; }
```

### Navigation

White sticky header: red logo, then "Products", "Solutions", "Developers", "Resources", "Pricing" with chevrons, search icon, "Log in", outline "Contact sales" and red "Start for free" pills. Mega menus are white panels with the navigation shadow (`0 14px 25px rgba(18,28,45,0.12)`), grouped by Conversations, Communications, Authentication, Customer Data; each item has a small red-stroked product icon, a name, a one-line description, and "New" tags.

### Product cards

White on paper or paper on white, 10-20px radius, 24-32px padding, 72px red line icon top-left, H4 title, short body, arrow link. Hover adds the card shadow `0 8px 24px rgba(18,28,45,0.1)`.

### Code sample block

Ink `#000D25` panel, 10px radius, language tabs across the top (selected tab underlined in red), Twilio Sans Mono 14px, syntax colours in red, mint, saffron and blue; copy button top-right.

### Stats and recognition

Large numbers ("5x") in display weight with footnote superscripts, small analyst logos below, red outbound-arrow links ("Read the report").

### Tags

Small "New" pills: 12px/600, red or ink text on red-10 or gray-10 fill, 4px or pill radius.

### Forms

Inputs 48px, white, 1px `#AEB2C1` border, 4px radius, 16px text; focus 2px `#0263E0` border; error text `#B10F23` (approximate).

### Accordion

Plus/minus icons in red, 1px gray-20 dividers, 18-20px/500 titles; used in footnotes and mobile nav.

## 6. Layout & Spacing

- **Container:** about 1200-1280px; text columns about 720px.
- **Grid:** 12 columns; product cards in 3-4 column grids.
- **Spacing:** `--spacing-size-*` steps of 4/8px; sections 64-96px apart.
- **Breakpoints:** about 768, 1024 and 1440px (approximate).
- **Density:** medium; generous around headlines, compact in menus.

## 7. Depth, Elevation & Motion

- Card: `0 8px 24px rgba(18,28,45,0.1)`. Image: `0 4px 16px rgba(18,28,45,0.15)`. Navigation: `0 14px 25px rgba(18,28,45,0.12)`. Large: `0 16px 60px rgba(18,28,45,0.15)`.
- Radii: 4px base, 10px large, 20px extra-large, 50px pills.
- Borders: 1px thin, 2px light, 4px medium.
- Motion: 300ms ease-in-out on button colours; menu panels slide down; product icons have small stroke animations.

## 8. Iconography & Imagery

- **Product icons:** 72px line icons with 2-5px rounded strokes in Twilio Red on white or ink, sometimes with saffron or mint fills.
- **UI icons:** simple line chevrons, plus/minus, arrows with rounded caps.
- **Illustration:** flat shapes in red, saffron, mint, ink and paper; chat bubbles, phones, envelopes.
- **Photography:** people using phones and support agents, warm and natural.

## 9. Voice & Microcopy

Developer-first, direct, a little playful.

- Headlines: "The platform for conversations in the AI era", "Building blocks for every conversation", "Build. Without limits.", "TL;DR: Don't wait for the future. Build it."
- CTAs: "Start for free", "Contact sales", "View pricing", "Read the docs", "Try the demo".
- Menu descriptions: "Build advanced voice AI for natural conversations".
- Do not quote prices unless they come from the live pricing page.

## 10. Do's and Don'ts

**Do**

- Use Twilio Red `#F22F46` for the main CTA and icon strokes.
- Use ink `#000D25` for text and dark bands, paper `#FDF7F4` for warm sections.
- Make buttons pills with medium-weight labels.
- Show code with language tabs.
- Keep illustrations flat with red, saffron and mint.

**Don't**

- Don't set long body copy in red.
- Don't use pure black; use ink.
- Don't use square-cornered buttons on marketing pages.
- Don't redraw the bug or use more than four dots.
- Don't use red in the Console beyond the logo; Paste uses blue for actions.

## 11. Agent Prompt Guide

> Build this UI in the style of Twilio. White page with warm paper `#FDF7F4` bands and ink `#000D25` dark sections; text ink, secondary `#606B85`, borders `#E1E3EA`. Fonts: Twilio Sans Display for headlines (fallback Inter, weight 600, 32-56px, sentence case), Whitney SSm for body (fallback Inter, 16-20px). Primary button: Twilio Red `#F22F46` pill (50px radius), white 16px/500 text, 12px 24px padding; secondary: transparent pill with inset 2px ink border. Header with red "twilio" logo and bug, Products/Solutions/Developers/Resources/Pricing, "Log in", "Contact sales" and red "Start for free". Product cards with 72px red line icons, 10-20px radius, shadow `0 8px 24px rgba(18,28,45,0.1)` on hover. Code samples on ink with language tabs underlined in red. Links blue `#0263E0`.

```css
:root {
  --brand-red: #F22F46;
  --brand-red-core: #DB132A;
  --brand-red-dark: #B10F23;
  --brand-red-tint: #FEECEC;
  --brand-ink: #000D25;
  --brand-ink-accent: #17243B;
  --brand-ink-light: #1E2F4D;
  --brand-paper: #FDF7F4;
  --brand-paper-accent: #FEF0E6;
  --brand-bg: #FFFFFF;
  --brand-text: #000D25;
  --brand-text-muted: #606B85;
  --brand-border: #E1E3EA;
  --brand-gray-10: #F4F4F6;
  --brand-blue: #0263E0;
  --brand-saffron: #F2BE5A;
  --brand-mint: #6ADDB2;
  --brand-purple: #5817BD;
  --brand-font-display: "Twilio Sans Display", Inter, Helvetica, Arial, sans-serif;
  --brand-font: "Whitney SSm", Inter, Helvetica, Arial, sans-serif;
  --brand-font-mono: "Twilio Sans Mono", "JetBrains Mono", monospace;
  --brand-radius: 4px;
  --brand-radius-lg: 10px;
  --brand-radius-xl: 20px;
  --brand-radius-pill: 50px;
  --brand-shadow-card: 0 8px 24px rgba(18,28,45,0.1);
  --brand-shadow-nav: 0 14px 25px rgba(18,28,45,0.12);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Twilio.

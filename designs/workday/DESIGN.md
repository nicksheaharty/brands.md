---
name: Workday
slug: workday
url: https://workday.com
category: Productivity
tagline: "Deep ink blue on warm white, the orange arc, bold headlines and soft pill buttons."
updated: 2026-11-16
appStoreId: 316800034
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#0F2E66"
    role: Logo wordmark, headings, primary buttons, focus rings
  - name: Sunrise Orange
    hex: "#FC5B05"
    role: Logo arc, eyebrow labels, small highlights
  - name: Warm White
    hex: "#F6F5F1"
    role: Section background, header surface
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: After Hours
    hex: "#022043"
    role: Primary button hover, darkest navy sections
  - name: Ballpoint
    hex: "#0057AE"
    role: Links and secondary blue accents
  - name: Happy Hour
    hex: "#FD7E00"
    role: Warm orange accent in illustrations and charts
  - name: Tack
    hex: "#6FC9D3"
    role: Teal accent in illustrations and data
  - name: Laptop
    hex: "#525D6A"
    role: Secondary text
  - name: Staple
    hex: "#7D8B99"
    role: Muted text, icons
  - name: Keyboard Cream
    hex: "#FCF8E8"
    role: Soft highlight backgrounds
  - name: Warm Neutral 300
    hex: "#F1EFE8"
    role: Cards on warm sections
  - name: Warm Neutral 600
    hex: "#D8D5CB"
    role: Borders and dividers
  - name: Canvas Blueberry
    hex: "#0875E1"
    role: Primary action color in the Canvas product design system
  - name: Canvas Cinnamon
    hex: "#DE2E21"
    role: Error and destructive color in Canvas
fonts:
  display:
    family: "Workday Headline"
    fallback: "Inter"
    weights: [700]
  body:
    family: "Workday Body"
    fallback: "Inter"
    weights: [300, 400, 500, 700]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Heading XXL, size: 68, weight: 700, lineHeight: 1.06, tracking: "-0.01em" }
  - { role: Heading XL, size: 56, weight: 700, lineHeight: 1.07, tracking: "-0.01em" }
  - { role: Heading L, size: 44, weight: 700, lineHeight: 1.09, tracking: "0" }
  - { role: Heading M, size: 32, weight: 700, lineHeight: 1.125, tracking: "0" }
  - { role: Heading S, size: 24, weight: 700, lineHeight: 1.17, tracking: "0" }
  - { role: Body L, size: 24, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Body M, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body S, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 12, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 36, 48, 64, 96]
shadows:
  - { name: Card, value: "0 4px 12px rgba(0,0,0,0.15)" }
  - { name: Focus, value: "0 0 0 2px #FFFFFF, 0 0 0 4px #0F2E66" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F5F1"
  text: "#0F2E66"
  muted: "#525D6A"
  border: "#D8D5CB"
  accent: "#0F2E66"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# Workday

## 1. Visual Theme & Atmosphere

Workday's site is warm and composed: deep ink blue (`#0F2E66`) type on white and warm off-white (`#F6F5F1`), bold rounded headlines, and the orange arc from the logo used as a small accent. The current redesign leans on pill buttons, soft glassy secondary buttons and large rounded media panels. Behind the login, the product uses the Canvas design system, which is brighter blue and more utilitarian.

What makes it recognisable:

- **The sunrise arc.** An orange (`#FC5B05`) semicircle over the lowercase **workday** wordmark. It is the single warm note against a navy brand.
- **Ink, not black.** All headings, body text and primary buttons are `#0F2E66`. Pure black only appears in photography.
- **Warm neutrals.** Section bands use `#F6F5F1` and `#F1EFE8`, with `#D8D5CB` rules, so the page feels like paper rather than cold grey.
- **Big bold headlines, light body.** Workday Headline at 700 for headings up to 68px; body copy is large (20-24px) and regular.
- **Pill everything.** Primary and secondary buttons, tags and the sticky header CTA are fully rounded.
- **Named brand colors.** The internal palette uses office-object names: Ink, After Hours, Ballpoint, Happy Hour, Tack, Staple, Laptop, Keyboard.

Mood words: trustworthy, warm, human, enterprise, calm.

## 2. Color Palette & Roles

Names and hex values come from `--color-brand-*` and `--color-warm-neutral-*` variables on workday.com.

| Name | Hex | Role |
|---|---|---|
| Ink | `#0F2E66` | Headings, body text, primary buttons, logo wordmark |
| After Hours | `#022043` | Primary hover, darkest sections |
| Ballpoint | `#0057AE` | Links, secondary blue |
| Sunrise Orange (accent-eyebrow) | `#FC5B05` | Logo arc, eyebrow labels |
| Happy Hour | `#FD7E00` | Warm accent in illustration and data |
| Tack | `#6FC9D3` | Teal accent |
| Laptop | `#525D6A` | Secondary text |
| Staple | `#7D8B99` | Muted text, icons |
| Keyboard | `#FCF8E8` | Cream highlight background |
| Warm Neutral 100 | `#FFFFFF` | Page, cards, text on ink |
| Warm Neutral 200 | `#F6F5F1` | Section bands, header, button text on dark |
| Warm Neutral 300 | `#F1EFE8` | Cards on warm bands |
| Warm Neutral 600 | `#D8D5CB` | Dividers, card borders |
| Warm Neutral 700 | `#BEBBB0` | Strong borders, disabled outlines |

### Illustration pastels

Light fills used behind portraits and product cards: `#FECB68` (sun), `#FDE695` (lemon), `#CAE5CE` (mint), `#84CFD2` (aqua), `#FAD2D6` (blush), `#E6D0F5` (lilac), `#B9C3F8` (periwinkle), `#FDC5A0` (peach). Use one per card.

### Canvas (product) colors

Canvas, Workday's open-source design system, has its own named palette. The values below are commonly published Canvas tokens and should be treated as approximate:

| Canvas name | Hex | Role |
|---|---|---|
| Blueberry 400 | `#0875E1` | Primary buttons, links, focus |
| Blueberry 500 | `#005CB9` | Primary hover |
| Cinnamon 500 | `#DE2E21` | Error |
| Cantaloupe 400 | `#FFA126` | Warning |
| Green Apple 400 | `#43C463` | Success |
| Soap 100 | `#F6F7F8` | App background |
| Soap 500 | `#DFE2E6` | Borders |
| Licorice 300 | `#5E6A75` | Secondary text |

### Dark sections

Dark bands use Ink `#0F2E66` or After Hours `#022043` with white text; secondary buttons switch to translucent white (`rgba(255,255,255,.24)`) with a blur.

## 3. Typography

**Families:** Workday Headline (bold display) and Workday Body (300-700), both proprietary. Roboto Mono is used for small data labels. Canvas product UI uses Roboto (approximate; check the current Canvas Kit version).

**Fallback:** **Inter** for both headline and body, **Roboto Mono** for mono.

```css
font-family: "Workday Headline", "Workday Body", Inter, Arial, Helvetica, sans-serif; /* headings */
font-family: "Workday Body", Inter, Arial, Helvetica, sans-serif; /* body */
```

### Scale (desktop, from `.heading-*` and `.body-*` classes)

| Class | Mobile | Desktop | Line height (desktop) | Weight |
|---|---|---|---|---|
| `heading-xxl` | 32px | 68px | about 72px | 700 |
| `heading-xl` | 32px | 56px | 60px | 700 |
| `heading-lg` | 24px | 44px | 48px | 700 |
| `heading-md` | 20px | 32px | 36px | 700 |
| `heading-sm` | 20px | 24px | 28px | 700 |
| `body-lg` | 20px | 24px | 32px (approximate) | 400 |
| `body-md` | 20px | 20px | 28px | 400 |
| `body-sm` | 16px | 16px | 24px | 400 |
| Eyebrow | 14px | 14px | 20px | 500, uppercase (approximate) |

Headings support weight modifiers (light 300 through bold 700), but bold is the default.

### Rules

- Sentence case for headings and buttons ("Request a Demo" in the header is the exception that keeps title case).
- The hero headline often breaks onto two lines on purpose ("AI that gets work / done right.").
- Body copy on marketing pages is large: 20px is the normal paragraph size on desktop.

## 4. Logo & Brand Mark

The logo is the lowercase **workday** wordmark in Ink `#0F2E66` with an orange `#FC5B05` arc spanning from above the "o" to above the "a", like a sunrise.

- **Color versions:** ink and orange on white (primary); white wordmark with orange arc on ink; all-white on photography.
- **Icon:** the arc above a "w", used for app tiles and avatars.
- **Clear space:** the height of the "w" x-height on all sides (approximate).
- **Minimum size:** 72px wide on screen.

Misuse:

- Do not change the arc color or detach it from the wordmark.
- Do not capitalize the wordmark.
- Do not place the full-color logo on orange or busy imagery.
- Do not redraw the arc as a complete circle or add gradients.

## 5. Components

### Buttons (`.rd-btn`)

| Variant | Background | Text | Hover |
|---|---|---|---|
| Primary | `#0F2E66` | `#FFFFFF` | `#022043` |
| Primary on dark | `#FFFFFF` | `#0F2E66` | `#F6F5F1` |
| Secondary | `rgba(0,0,0,.08)` + `backdrop-filter: blur(72px)` | `#0F2E66` | `rgba(0,0,0,.12)`, pressed `.24` |
| Secondary on dark | `rgba(255,255,255,.24)` + blur | `#FFFFFF` | `rgba(255,255,255,.36)` pressed |
| Tertiary | transparent | `#0F2E66` with arrow icon | underline |
| Outline | transparent | `#0F2E66` | 1-2px `#0F2E66` border |

Sizes: `btn-md` padding 12px 24px at 16px/24px (8px 16px compact); `btn-lg` padding 22px 36px at 20px/28px on desktop. Icon buttons use 20-24px icons with an 8-12px gap. All buttons are pills.

```css
.rd-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font: 400 16px/24px "Workday Body", Inter, sans-serif;
  padding: 12px 24px;
  border-radius: 9999px;
  background: #0F2E66; color: #FFFFFF;
  transition: background-color 200ms ease-out, transform 480ms cubic-bezier(.22,1,.36,1);
}
.rd-btn:hover { background: #022043; }
.rd-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #0F2E66; }
.rd-btn--secondary { background: rgba(0,0,0,.08); color: #0F2E66; backdrop-filter: blur(72px); }
```

Some featured CTAs carry a soft radial gradient sheen inside the pill.

### Inputs (Canvas)

- 40px tall, 1px `#A1AAB3` border (approximate), radius 4px, 14px Roboto text, white fill.
- Focus: 2px Blueberry `#0875E1` ring. Error: Cinnamon `#DE2E21` border with an error icon and message.

### Cards

- Media cards: radius 24px, image or video filling the card, white headline overlaid at the bottom on a dark gradient.
- Content cards: `#F1EFE8` or white, radius 12-24px, 24-36px padding, no border, no shadow.
- Pastel portrait cards: a person cut-out over one illustration pastel with a 24px radius.

### Header

- Floating, rounded header bar (radius animates on open), warm white `#F6F5F1` or white, logo left (102x48 box).
- Menu: "Products", "Industries", "Customers", "Company", "Resources" (approximate), each opening a large rounded panel.
- Right side: search, "Sign In" text link and an ink pill "Request a Demo".
- Menu open/close: 320ms, ease `cubic-bezier(0.68, 0, 0.72, 0.89)` for closing.

### Accordions

Rows separated by `#D8D5CB` rules, 20-24px bold titles, plus icon in a round button; the focus ring uses the double ink/white ring.

### Canvas product patterns

Workday's app uses a left global nav, a worklet-based home with cards, "Inbox" tasks, data grids with 14px rows and blue primary pills. Treat Canvas as the reference for any in-app screens.

## 6. Layout & Spacing

- **Breakpoints:** a main switch at 768px and at 1200px (most rules), plus 1440 and 1600px.
- **Max width:** up to 1776px for full-bleed rounded sections; text content around 1200px.
- **Gutters:** 16-24px mobile, 36-48px desktop.
- **Section spacing:** 96-128px on desktop, 64px on mobile.
- **Radii:** 4, 8, 12, 24, 36px and full; large media uses 24-36px.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card (rare) | `0 4px 12px rgba(0,0,0,0.15)` |
| Focus ring | `0 0 0 2px #FFFFFF, 0 0 0 4px #0F2E66` |
| Glass | `backdrop-filter: blur(72px)` on secondary buttons and header |

Depth comes from color bands and blur, not shadows.

### Motion

- Ease tokens: `--ease-decelerate: cubic-bezier(0.22, 1, 0.36, 1)`, `--ease-expo: cubic-bezier(0.16, 1, 0.3, 1)`, `--ease-soft: cubic-bezier(0.25, 0.46, 0.45, 0.94)`, `--ease-overshoot: cubic-bezier(0.34, 1.56, 0.64, 1)`.
- Buttons: icon motion 480ms; color 200ms ease-out.
- Header: 240ms open, 144ms radius change, 320ms menu.
- Media: `opacity .4s ease-in-out, filter .4s ease-in-out` for image swaps.

## 8. Iconography & Imagery

- **Icons:** rounded line icons, 1.5-2px stroke, 20-24px, in ink.
- **Photography:** warm, natural-light portraits of employees and leaders, often cut out and placed on pastel shapes.
- **Illustration:** simple shapes in the pastel set with the orange arc echoed as a motif.

## 9. Voice & Microcopy

Plain, reassuring and people-first. Talks about HR, finance and AI agents as helpers that let people focus on meaningful work.

- Sentence case, short sentences, a friendly but professional tone.
- Uses "you" and "your people".
- CTAs: "Request a Demo", "Explore Agents", "Explore HR Agents", "Explore Finance Agents", "Sign In".
- Do not quote customer counts or Fortune 500 percentages unless you read them on workday.com that day.

Sample strings:

- Hero: "AI that gets work done right."
- Section: "Explore Sana", "Explore IT & Developer Agents"
- Product: "Inbox", "My Tasks", "Request Time Off", "Submit Expense Report"

## 10. Do's and Don'ts

**Do**

- Use Ink `#0F2E66` for text and primary buttons, never pure black.
- Use warm neutrals (`#F6F5F1`, `#F1EFE8`) for section bands.
- Make every button a pill, with a glassy secondary next to the ink primary.
- Use the orange only for the logo arc and small eyebrows.
- Use large rounded media panels (24-36px radius).

**Don't**

- Don't use cool grey backgrounds on marketing pages.
- Don't use orange buttons.
- Don't stack heavy drop shadows; use blur and color bands.
- Don't mix Canvas Blueberry blue into marketing pages.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Workday. White page with warm off-white bands `#F6F5F1` and `#F1EFE8`, dividers `#D8D5CB`. All text is deep ink blue `#0F2E66` (secondary `#525D6A`), never black. Font: `"Workday Headline", "Workday Body", Inter, Arial, sans-serif`; headings bold 700 at 68/56/44/32px desktop with tight line height, body 20px/28px. Buttons are pills: primary `#0F2E66` with white text (hover `#022043`), secondary `rgba(0,0,0,.08)` with `backdrop-filter: blur(72px)` and ink text; padding 12px 24px; focus ring `0 0 0 2px #fff, 0 0 0 4px #0F2E66`. Use orange `#FC5B05` only for small eyebrows and the logo arc. Media cards are 24px-radius panels with photos or video; portrait cards sit on one pastel (`#FECB68`, `#CAE5CE`, `#84CFD2`, `#B9C3F8`). Floating rounded header with "Sign In" and an ink pill "Request a Demo". Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Copy is warm, plain and people-first.

```css
:root {
  --brand-ink: #0F2E66;
  --brand-after-hours: #022043;
  --brand-ballpoint: #0057AE;
  --brand-orange: #FC5B05;
  --brand-happy-hour: #FD7E00;
  --brand-tack: #6FC9D3;
  --brand-laptop: #525D6A;
  --brand-staple: #7D8B99;
  --brand-keyboard: #FCF8E8;
  --brand-white: #FFFFFF;
  --brand-warm-200: #F6F5F1;
  --brand-warm-300: #F1EFE8;
  --brand-warm-600: #D8D5CB;
  --brand-canvas-blue: #0875E1;
  --brand-canvas-red: #DE2E21;
  --brand-font-heading: "Workday Headline", "Workday Body", Inter, Arial, Helvetica, sans-serif;
  --brand-font: "Workday Body", Inter, Arial, Helvetica, sans-serif;
  --brand-font-mono: "Roboto Mono", ui-monospace, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 24px;
  --brand-radius-xl: 36px;
  --brand-radius-pill: 9999px;
  --brand-focus: 0 0 0 2px #FFFFFF, 0 0 0 4px #0F2E66;
  --brand-blur: blur(72px);
  --brand-ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Workday.

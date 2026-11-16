---
name: KKR
slug: kkr
url: https://kkr.com
category: Finance
tagline: "Aubergine light-weight type, wide tracking, sunshine-yellow buttons and deep teal text."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Aubergine
    hex: "#49004B"
    role: Logo, headings, eyebrows, button borders
  - name: Sunshine
    hex: "#FFD828"
    role: Primary button fill, highlights, checked states on dark
  - name: Deep Teal
    hex: "#072535"
    role: Body text, dark sections, header on style guide
  - name: Ink Blue
    hex: "#0229B1"
    role: Links, hover text, input focus, custom cursor
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Ice
    hex: "#EEF3F9"
    role: Subtle sections, table stripes, scroll panels
  - name: Gold
    hex: "#F7C902"
    role: 50th anniversary "50" in the header lockup
  - name: Grey
    hex: "#7D7D7D"
    role: Secondary text, inactive controls
  - name: Body Grey
    hex: "#444444"
    role: Default body color fallback
  - name: Lavender Grey
    hex: "#D7D6DE"
    role: Borders, dividers
  - name: Focus Blue
    hex: "#0849C6"
    role: Focus ring
  - name: Error
    hex: "#D00946"
    role: Form errors
fonts:
  display:
    family: "Ghost Light"
    fallback: "Montserrat"
    weights: [300]
  body:
    family: "Ghost"
    fallback: "Montserrat"
    weights: [400, 500, 700]
typeScale:
  - { role: H1, size: 48, weight: 300, lineHeight: 1.17, tracking: "0.05em" }
  - { role: H2, size: 40, weight: 300, lineHeight: 1.2, tracking: "0.05em" }
  - { role: H3, size: 32, weight: 300, lineHeight: 1.25, tracking: "0.05em" }
  - { role: H4, size: 24, weight: 300, lineHeight: 1.33, tracking: "0.05em" }
  - { role: Eyebrow, size: 18, weight: 700, lineHeight: 1.33, tracking: "0.1em" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.33, tracking: "0.05em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0.05em" }
  - { role: Button, size: 12, weight: 700, lineHeight: 1.25, tracking: "0.1em" }
radii: { sm: 2, md: 5, lg: 10, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80]
shadows:
  - { name: Card, value: "0 4px 8px 0 rgba(0,0,0,0.2)" }
  - { name: Soft, value: "0 10px 30px -15px rgba(0,0,0,0.5)" }
  - { name: Hairline, value: "0 0 2px 0 #BABABA" }
preview:
  bg: "#FFFFFF"
  surface: "#EEF3F9"
  text: "#072535"
  muted: "#7D7D7D"
  border: "#D7D6DE"
  accent: "#FFD828"
  accentText: "#49004B"
  radius: 0
  buttonStyle: solid
---

# KKR

## 1. Visual Theme & Atmosphere

KKR's website pairs a very dark aubergine purple with a bright sunshine yellow, and sets almost everything in a light, widely tracked geometric sans called Ghost. The effect is calm and spacious: thin purple headlines floating on white, deep teal body text, and small yellow buttons that are the only loud thing on the page.

What makes it recognisable:

- **Aubergine headlines at weight 300.** H1 to H4 are Ghost Light in `#49004B` with 0.05em tracking. Thin and wide, never bold.
- **Tracked-out everything.** Body copy carries 0.05em letter-spacing; eyebrows and buttons go to 0.1em and uppercase.
- **Yellow box buttons.** CTAs are `#FFD828` rectangles with a 1px aubergine border on only the left and bottom edges. On hover the top and right edges draw in, completing the frame.
- **Deep teal text.** Paragraphs are `#072535`, a near-black blue-green that softens the contrast.
- **Ink-blue interaction.** Links, hovers and the custom circular arrow cursor are `#0229B1`.
- **Anniversary lockup.** The header currently shows "KKR | 50" with the "50" in gold for the firm's 50th year (founded 1976).

Mood words: considered, spacious, global, modern-institutional, warm.

## 2. Color Palette & Roles

Hex values were read from the live `clientlib-all` stylesheet on kkr.com.

| Name | Hex | Role |
|---|---|---|
| Aubergine | `#49004B` | Logo, H1-H4, eyebrows, button borders, alert text |
| Sunshine | `#FFD828` | Primary button fill (`.sunshine`), checked radios on dark |
| Deep Teal | `#072535` | Paragraphs, captions, dark section background |
| Ink Blue | `#0229B1` | Links (`.ink`), hover text, input focus border, cursor |
| Focus Blue | `#0849C6` | `box-shadow: 0 0 0 2px #0849C6` focus ring |
| White | `#FFFFFF` | Page background, text on dark |
| Ice | `#EEF3F9` | Scroll-takeover panels, alternate table rows |
| Gold | `#F7C902` | "50" in the anniversary lockup |
| Grey | `#7D7D7D` | Secondary text, disabled |
| Mid Grey | `#5F5F5F` / `#6E6E6E` | Metadata |
| Body Grey | `#444444` | Base `body` color before component styles |
| Lavender Grey | `#D7D6DE` | Borders, dividers |
| Silver | `#BABABA` | Hairline shadows, input outlines |
| Plum | `#2E003D` | Deeper purple, likely for overlays (role approximate) |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#D00946` | `.error` text, invalid input border and placeholder |
| Success | `#035913` | Confirmation text (role approximate) |
| Warning | `#C44700` | Attention text (role approximate) |
| Focus | `#0849C6` | 2px ring |

### Dark sections (`grid-dark-color`)

Background Deep Teal `#072535` or Aubergine, all headings and eyebrows switch to white, radios and checkboxes use Sunshine `#FFD828` fills with a teal inner border.

## 3. Typography

**Family:** Ghost, a geometric sans served as four separate families: `"Ghost Light"` (300), `"Ghost"` (400), `"Ghost Medium"` (500) and `"Ghost Bold"` (700), with Calibri as the CSS fallback.

**Licensing:** Ghost is not on Google Fonts. **Montserrat** is a reasonable free substitute (similar wide geometric proportions); keep the 0.05em tracking.

```css
h1, h2, h3, h4 { font-family: "Ghost light", "Montserrat", Calibri, sans-serif; font-weight: 300; color: #49004B; letter-spacing: .05em; }
p { font-family: "Ghost", "Montserrat", Calibri, sans-serif; color: #072535; font-size: 16px; line-height: 1.5rem; letter-spacing: .05em; }
```

### Scale (from production CSS)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 | 48px (3rem) | 300 | 56px | 0.05em |
| H2 | 40px mobile, 48px desktop | 300 | 48 / 56px | 0.05em |
| H3 | 32px | 300 | 40px | 0.05em |
| H4 | 24px | 300 | 32px | 0.05em |
| Eyebrow | 18px uppercase | 700 | 24px | 0.1em |
| Body large | 18px | 400 | 24px | 0.05em |
| Body | 16px | 400 | 24px | 0.05em |
| Caption | 16px | 500 | 20px | 0.1em |
| Button | 12px uppercase | 700 | 15px | about 0.1em |
| Table header | 18px uppercase | 700 | 24px | 1.8px |

Headings carry a 32px bottom margin; paragraphs too.

### Rules

- Headings are always weight 300 and always aubergine (white on dark).
- Uppercase only for eyebrows, buttons and table headers.
- Never set text without tracking; the wide spacing is part of the look.
- Statistics use Ghost Light at large sizes in aubergine.

## 4. Logo & Brand Mark

The logo is the **KKR** wordmark: three wide, thin, geometric capitals in Aubergine `#49004B`. The K's have a distinctive open junction where the arms meet the stem.

- **Anniversary lockup (current):** "KKR", a thin vertical rule, then a hand-drawn "50" in Gold `#F7C902`.
- **Color versions:** aubergine on white (primary), white on dark teal or aubergine.
- **Clear space:** at least the width of the "R" on each side.
- **Minimum size:** about 60px wide.
- **Icon:** white KKR letters on an aubergine tile.

Misuse:

- Do not bold or condense the letters.
- Do not set "KKR" in Ghost and call it the logo.
- Do not color the wordmark yellow; yellow is for actions.

## 5. Components

### Buttons (`cmp-button`)

The signature component. A yellow rectangle with a partial frame.

| Variant | Fill | Text | Frame |
|---|---|---|---|
| Primary | `#FFD828` | `#49004B` (teal on mobile) Ghost Bold 12px uppercase | 1px aubergine left and bottom |
| Primary hover | `#FFD828` | `#49004B` | Top and right 1px lines draw in (`::before`, `::after`) |
| Secondary (approximate) | transparent | `#49004B` | 1px aubergine full border |
| Secondary hover (approximate) | transparent | `#0229B1` | border unchanged |
| On dark | `#FFD828` | `#49004B` | 1px white or yellow frame |

Details:

- Padding about 16px 24px (approximate); radius 0.
- An optional arrow icon after the label, 8px gap.
- Transition: `all .1s linear` on the frame lines, `all .4s linear` on color.

```css
.kkr-btn {
  position: relative; display: inline-block;
  font: 700 12px/15px "Ghost Bold", "Montserrat", Calibri, sans-serif;
  letter-spacing: .1em; text-transform: uppercase;
  color: #49004B; background: #FFD828; padding: 16px 24px;
  border-left: 1px solid #49004B; border-bottom: 1px solid #49004B;
  transition: all .1s linear;
}
.kkr-btn::before { content: ""; position: absolute; top: 0; left: 0; height: 1px; width: 0; background: #49004B; transition: all .1s linear; }
.kkr-btn::after { content: ""; position: absolute; top: 0; right: 0; width: 1px; height: 0; background: #49004B; transition: all .1s linear; }
.kkr-btn:hover::before { width: 100%; }
.kkr-btn:hover::after { height: 100%; }
```

### Links

Ink Blue `#0229B1`, no underline by default, underline on hover in body copy. The site also swaps the cursor for a 24px circular arrow in Ink Blue.

### Inputs

- Square, 1px border `#BABABA` or `#D7D6DE`, 16px Ghost, 48px tall (approximate).
- Hover and focus: `border: 1px solid #0229B1`.
- Error: border and text `#D00946`.
- Radios and checkboxes: custom 20px marks; checked state fills aubergine on light and Sunshine on dark.

### Header

- 112px tall, white or transparent over a video hero, logo left.
- Primary nav to the right in Ghost 14-16px (approximate), a search icon and an "experience" selector.
- Audience selector modal: "Select Your Experience" with options such as "Institutional Investors", "Global Wealth", "Family Capital" and "Wealth Professionals".

### Hero

Full-width video or image banner (overlay color approximate), white Ghost Light H1 and one yellow button. A grey ampersand graphic appears as a recurring motif on some sections.

### Cards and teasers

- Image top, square corners, eyebrow in aubergine Ghost Bold uppercase, Ghost Light title, teal body.
- Flat by default; interactive cards use `0 4px 8px rgba(0,0,0,.2)` on hover.

### Scroll takeover panels

Ice `#EEF3F9` panels with a 20-30px Ice border, max width 1380px, that scale as you scroll. Each item has a 31px teal bullet line.

### Tables

Even rows `#EEF3F9`; header cells Ghost Bold 18px uppercase with 1.8px tracking in teal.

### Statistics

Large Ghost Light numbers in aubergine (white on dark), small Ghost Medium captions with 0.1em tracking.

## 6. Layout & Spacing

- **Max width:** 90rem (1440px); scroll panels 1380px.
- **Breakpoints:** 480, 768, 1024/1025, 1185, 1280 and 1440px. Most rules switch at 768px.
- **Gutters:** 20px mobile, 16-32px desktop inside the header.
- **Spacing:** 8px base; headings and paragraphs get 32px bottom margins.
- **Section rhythm:** 64-80px vertical padding on desktop (approximate).
- **Density:** low to medium; one idea per band, plenty of white.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 .25rem .5rem 0 rgba(0,0,0,.2)` |
| Soft | `0 10px 30px -15px rgba(0,0,0,.5)` |
| Hairline | `0 0 2px 0 #BABABA` |
| Modal | `0 0 15px 1px rgba(0,0,0,.3)` |
| Focus | `0 0 0 2px #0849C6` |

Motion is linear and quick: `all .1s linear` for button frames, `.3s` and `.4s linear` for color and panels, `.8s` for large reveals. Scroll-takeover panels use `.25s ease-in-out`.

## 8. Iconography & Imagery

- **Icons:** Font Awesome 6 Pro (light and duotone styles) plus a custom `kkr-aem-icons` font. Thin strokes in aubergine or ink blue.
- **Photography:** global, human and industrial: portfolio company operations, infrastructure, cities, employees. Often overlaid with an aubergine tint for text.
- **Graphics:** a large outlined ampersand ("&") recurs as a decorative motif, in grey or white.
- **Data:** clean charts in aubergine, ink blue, teal and yellow.

## 9. Voice & Microcopy

Measured and partnership-minded. Talks about ownership, alignment and long-term outcomes. Short headline phrases, often title-case nouns.

- Headlines: short noun phrases, sometimes title case.
- Buttons: uppercase verbs ("LEARN MORE", "READ MORE", "EXPLORE").
- Avoid hype; let concepts like ownership and alignment carry the message.

Sample strings (read on the live site today):

- "A leading global investment firm founded in 1976"
- "Select Your Experience"
- "Institutional Investors", "Global Wealth", "Family Capital"
- "Delivering Better Outcomes", "Ownership Cultures", "Shared Success"
- "A network of expert resources supporting our investments"

## 10. Do's and Don'ts

**Do**

- Set headings in a light (300) wide geometric sans, aubergine, tracked 0.05em.
- Use deep teal `#072535` for body text, not black.
- Make the primary CTA a yellow rectangle with a partial aubergine frame.
- Use ink blue `#0229B1` for links and hover states.
- Keep corners square and surfaces flat.

**Don't**

- Don't bold headlines or remove letter-spacing.
- Don't use yellow for text or large backgrounds.
- Don't round buttons into pills.
- Don't mix in other purples; use only `#49004B` and the darker plum.
- Don't overload sections; one message per band.

## 11. Agent Prompt Guide

> Build this UI in the style of KKR. White page, headings in aubergine `#49004B` set in a light (300) wide geometric sans (Ghost, fallback Montserrat) with 0.05em letter-spacing: H1 48/56px, H2 40-48px, H3 32px, H4 24px. Body text deep teal `#072535`, 16px/24px, also tracked 0.05em. Eyebrows 18px bold uppercase aubergine with 0.1em tracking. Primary buttons are square sunshine-yellow `#FFD828` blocks with 12px bold uppercase aubergine text, a 1px aubergine border on the left and bottom only, and on hover the top and right borders draw in over 0.1s. Links and hovers are ink blue `#0229B1`; focus ring `0 0 0 2px #0849C6`. Subtle panels and table stripes `#EEF3F9`; borders `#D7D6DE`. Dark bands use `#072535` with white type. Flat cards, square corners, linear quick transitions. Max width 1440px.

```css
:root {
  --brand-aubergine: #49004B;
  --brand-plum: #2E003D;
  --brand-sunshine: #FFD828;
  --brand-gold: #F7C902;
  --brand-teal: #072535;
  --brand-ink: #0229B1;
  --brand-focus: #0849C6;
  --brand-bg: #FFFFFF;
  --brand-ice: #EEF3F9;
  --brand-grey: #7D7D7D;
  --brand-border: #D7D6DE;
  --brand-silver: #BABABA;
  --brand-error: #D00946;
  --brand-font-light: "Ghost light", "Montserrat", Calibri, sans-serif;
  --brand-font: "Ghost", "Montserrat", Calibri, sans-serif;
  --brand-font-bold: "Ghost Bold", "Montserrat", Calibri, sans-serif;
  --brand-tracking: .05em;
  --brand-tracking-caps: .1em;
  --brand-radius: 0;
  --brand-max-width: 1440px;
  --brand-shadow-card: 0 4px 8px 0 rgba(0,0,0,.2);
  --brand-shadow-soft: 0 10px 30px -15px rgba(0,0,0,.5);
  --brand-transition-fast: all .1s linear;
  --brand-transition: all .4s linear;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by KKR.

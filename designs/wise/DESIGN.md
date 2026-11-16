---
name: Wise
slug: wise
url: https://wise.com
category: Finance
tagline: "Bright green and forest green, heavy display type and a live rate calculator up front."
updated: 2026-11-16
appStoreId: 612261027
logoBackground: "#9FE870"
theme: light
colors:
  - name: Bright Green
    hex: "#9FE870"
    role: Brand color, primary button fill, accent backgrounds
  - name: Forest Green
    hex: "#163300"
    role: Logo, primary text on green, primary interactive color, links
  - name: White
    hex: "#FFFFFF"
    role: Page background, raised surfaces
  - name: Content Black
    hex: "#0E0F0C"
    role: Primary text on white, pressed states
  - name: Bright Orange
    hex: "#FFC091"
    role: Secondary brand accent for illustrations and panels
  - name: Bright Blue
    hex: "#A0E1E1"
    role: Secondary brand accent
  - name: Bright Yellow
    hex: "#FFEB69"
    role: Secondary brand accent
  - name: Bright Pink
    hex: "#FFD7EF"
    role: Secondary brand accent
  - name: Content Secondary
    hex: "#454745"
    role: Secondary text
  - name: Content Tertiary
    hex: "#6A6C6A"
    role: Captions, placeholders
  - name: Neutral Tint
    hex: "#E8EBE6"
    role: Neutral background fills, chips
  - name: Interactive Secondary
    hex: "#868685"
    role: Input borders, secondary outlines
  - name: Dark Charcoal
    hex: "#21231D"
    role: Dark section background
  - name: Positive
    hex: "#054D28"
    role: Success text and icons
  - name: Negative
    hex: "#CB272F"
    role: Errors, destructive actions
  - name: Warning
    hex: "#FFD11A"
    role: Warning fills
fonts:
  display:
    family: "Wise Sans"
    fallback: "Inter"
    weights: [700, 800, 900]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600, 700]
typeScale:
  - { role: Display Large, size: 64, weight: 900, lineHeight: 0.85, tracking: "-0.01em" }
  - { role: Display Medium, size: 52, weight: 900, lineHeight: 0.85, tracking: "0" }
  - { role: Display Small, size: 40, weight: 900, lineHeight: 0.9, tracking: "0" }
  - { role: Title Screen, size: 30, weight: 600, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Title Section, size: 26, weight: 600, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Title Body, size: 18, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Body Large, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.55, tracking: "0.01em" }
radii: { sm: 10, md: 16, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48, 64, 96]
shadows:
  - { name: Card, value: "0 0 40px rgba(69,71,69,0.2)" }
  - { name: Input outline, value: "inset 0 0 0 1px #868685" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F5EF"
  text: "#0E0F0C"
  muted: "#454745"
  border: "#E8EBE6"
  accent: "#9FE870"
  accentText: "#163300"
  radius: 16
  buttonStyle: pill
---

# Wise

## 1. Visual Theme & Atmosphere

Wise (formerly TransferWise) sells cheap, fast international money transfers, and the site puts the product right in the hero: a live currency calculator that shows the exact rate, fee and arrival time. Around it, the brand is loud in a specific way: a bright lime-green (`#9FE870`) paired with a very dark forest green (`#163300`), and enormous, ultra-heavy display headlines in Wise Sans.

What makes it recognisable:

- **Two greens.** Bright Green for buttons and big brand panels, Forest Green for the logo, text on green and interactive elements. Together they are the whole identity.
- **Huge, heavy headlines.** Wise Sans display headlines are black-weight (around 900), with tight leading (about 0.85) so lines nearly touch. They often run in uppercase on campaign sections, sentence case in product UI.
- **The calculator.** "You send exactly" / "Recipient gets" fields with currency flags, a rate line ("1 USD = 0.9095 EUR", read on the site 2026-11-16), fee breakdown and "Arrives today" are the hero UI.
- **Flat, friendly product UI.** Inputs, chips and buttons have generous rounding: 16px for inputs and cards, full pills for buttons.
- **Secondary brights.** Orange `#FFC091`, blue `#A0E1E1`, yellow `#FFEB69` and pink `#FFD7EF` show up in illustrations and feature cards, each paired with its own dark ink.
- **Flag circles.** Round country flags next to currency codes are everywhere.

Density is medium. Marketing sections are spacious; product surfaces are compact and functional.

Mood words: honest, fast, global, confident, plain.

## 2. Color Palette & Roles

Values from the wise.com design tokens (`--color-*`, Wise Design System), read 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Bright Green | `#9FE870` | Primary button fill, accent (`--color-interactive-accent` in brand themes) |
| Forest Green | `#163300` | Logo, `--color-interactive-primary`, links, text on green |
| Forest hover | `#0D1F00` | Link and primary hover |
| Forest active | `#0E0F0C` | Pressed |
| Contrast hover | `#214D00` | Contrast button hover |
| Content Primary | `#0E0F0C` | Body text on white |
| Content Secondary | `#454745` | Secondary text |
| Content Tertiary | `#6A6C6A` | Captions |
| Interactive Secondary | `#868685` | Input borders, outline buttons |
| Neutral background | `rgba(22,51,0,0.08)` | Chips, secondary button fill |
| Neutral Tint | `#E8EBE6` | Quiet fills on dark |
| White | `#FFFFFF` | Page and raised surfaces |

### Secondary brand colors

| Bright | Hex | Dark pair | Hex |
|---|---|---|---|
| Orange | `#FFC091` | Maroon | `#320707` |
| Blue | `#A0E1E1` | Charcoal | `#21231D` |
| Yellow | `#FFEB69` | Gold | `#3A341C` |
| Pink | `#FFD7EF` | Purple | `#260A2F` |

Use each bright as a panel background with its dark pair as the text color.

### Sentiment

| State | Primary | Secondary (background) |
|---|---|---|
| Positive | `#054D28` | `#E2F6D5` |
| Negative | `#CB272F` (hover `#B8232B`) | `#FBEAEA` |
| Warning | `#FFD11A` | `#FFF7D7` |

### Dark mode

Wise has a forest theme where the screen background becomes `#163300`, content turns white, and Bright Green becomes the interactive accent. A neutral dark uses `#121511` / `#21231D`.

## 3. Typography

- **Wise Sans**: a custom display face, used for headlines and big numbers ("display-number" tokens up to 100px at weight 800). It is proprietary.
- **Inter**: the body and UI face (`--wds-font-family-regular: Inter, ...`), freely available on Google Fonts. Script fallbacks include Noto Sans SC, KR, Thai, Hebrew, Zen Kaku Gothic Antique and Vazirmatn.

Fallback for Wise Sans: **Inter** at weight 900 is the closest free option (approximate; Wise Sans is narrower and more condensed, so **Archivo Black** or **Anton** also work for campaign-style uppercase).

| Role | Token | Size | Weight | Line height |
|---|---|---|---|---|
| Display Large | display-large | 64px (56px on some breakpoints) | ~900 (approx.) | 0.85 |
| Display Medium | display-medium | 52px | ~900 (approx.) | 0.85 |
| Display Small | display-small | 40px | ~900 (approx.) | 0.9 |
| Display Number Large | display-number-large | 100px | 800 | 1 |
| Title Screen | title-screen | 30px | 600 | 1.2 |
| Title Section | title-section | 26px | 600 | 1.25 |
| Title Subsection | title-subsection | 22px | 600 | 1.3 |
| Title Body | title-body | 18px | 600 | 1.4 |
| Body Large | body-large | 16px | 400 (bold 600) | 1.5 |
| Body | body | 14px | 400 (bold 600) | 1.55 |
| Nav | nav | 12px | 500 | 1.3 |

Rules:

- Display headlines are short, sometimes uppercase in campaign blocks, always heavy and tight.
- Titles and body are Inter at 600/400. Don't use Wise Sans for paragraphs.
- Currency amounts use tabular figures; the currency code follows the number ("5.47 USD").

## 4. Logo & Brand Mark

The logo is the **"7"-like flag** symbol (a stylised fast-forward flag) followed by the **"WISE"** wordmark in heavy, slightly italic capitals. It is Forest Green `#163300` on Bright Green `#9FE870`, or Forest Green on white.

- The flag alone is the app icon and favicon: Forest Green flag on a Bright Green square.
- Clear space: the height of the flag's top bar on all sides.
- Minimum size: about 72px wide for the full logo, 16px for the flag.
- Color versions: forest on bright green (primary), forest on white, bright green on forest.
- Don't: use the old TransferWise light-blue flag, recolor the logo outside the two greens and white, or separate "WISE" from the flag in the lockup.

## 5. Components

### Buttons (wds-Button)

Pill shaped, three sizes.

```css
.wds-button {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 9999px; border: none;
  font: 600 16px/1.5 Inter, sans-serif;
  transition: background-color 150ms cubic-bezier(0.6, 0.2, 0.1, 1);
}
.wds-button--large  { height: 56px; padding: 0 24px; }   /* approx. */
.wds-button--medium { height: 48px; padding: 0 20px; }   /* approx. */
.wds-button--small  { height: 32px; padding: 0 12px; font-size: 14px; }
.wds-button--primary   { background: #9FE870; color: #163300; }
.wds-button--primary:hover  { background: #80E142; }      /* approx. */
.wds-button--primary:active { background: #6FCB31; }      /* approx. */
.wds-button--secondary { background: rgba(22,51,0,0.08); color: #163300; }
.wds-button--secondary:hover { background: rgba(22,51,0,0.16); }
.wds-button--tertiary  { background: transparent; color: #163300; text-decoration: underline; }
.wds-button--negative  { background: #CB272F; color: #FFFFFF; }
.wds-button:focus-visible { outline: 2px solid #163300; outline-offset: 2px; }
```

### Inputs and the calculator

- 16px radius (`--radius-medium`), 56-64px tall, border drawn as `box-shadow: inset 0 0 0 1px #868685`; hover `inset 0 0 0 2px #6C6C6B`; focus `inset 0 0 0 2px #163300` (approx.); error `inset 0 0 0 3px #CB272F`.
- The calculator stacks two amount fields: label above ("You send exactly", "Recipient gets"), large amount left (Wise Sans or Inter 600, 22-26px), currency selector right (round 24px flag, code, chevron).
- Between them: a vertical list of fee lines with small circular icons and a rate line in Forest Green.
- Full-width primary button "Send money" underneath.

### Cards

- White or pastel, 16-24px radius, 24-32px padding, no border.
- Feature cards often have a big number or short display headline ("22 currencies", "215 countries and territories", read on the site 2026-11-16) and a text link.
- Raised cards use `0 0 40px rgba(69,71,69,0.2)` sparingly.

### Navigation

- White top bar: flag + WISE logo left, Personal / Business / Platform tabs, language selector, "Help", "Log in" (text) and "Sign up" (bright green pill) right.
- Mega-menu dropdowns with a short product description and columns of links.

### Chips and segmented controls

Pill chips with `rgba(22,51,0,0.08)` background; selected chip is Forest Green with white text.

### Avatars

Circles (48px default) holding a flag, initials or icon. Currency avatars overlap slightly when grouped.

### Lists

Rows of 64-72px with a 48px circular avatar, title (16px 600), subtitle (14px secondary) and right-aligned amount. Dividers are rare; spacing does the separating.

### Alerts

Rounded 16px boxes in sentiment secondary colors with a filled circular icon and Forest or sentiment-colored text.

## 6. Layout & Spacing

- Content width up to about 1200-1280px (approximate), marketing hero split into copy left and calculator right.
- Spacing scale based on 8px with 4px half-steps: 4, 8, 12, 16, 24, 32, 40, 48, 64, 96.
- Section padding 64-96px desktop, 40-48px mobile.
- Breakpoints: 576, 768 (approx.), 992, 1200 (Bootstrap-derived Neptune grid).
- Product screens are single column, 600px max width (approximate), centred.

## 7. Depth, Elevation & Motion

- Mostly flat. Borders are drawn with inset box-shadows so they don't shift layout.
- Card shadow: `0 0 40px rgba(69,71,69,0.2)`; used for the calculator panel and popovers.
- Overlay scrim: `rgba(0,0,0,0.4)` (approximate).
- Easing: `cubic-bezier(0.6, 0.2, 0.1, 1)` (most common), `cubic-bezier(0.3, 0, 0.1, 1)` for entrances, `cubic-bezier(0.34, 1.56, 0.64, 1)` for small bouncy confirmations.
- Durations 150-300ms for controls, up to 600ms for illustrations.

## 8. Iconography & Imagery

- Icons: 24px, 2px-weight line icons with square-ish corners (arrows, cards, globe), in Forest Green or content colors. Small 16px versions in buttons.
- Circular flag avatars for every currency and country.
- Illustration: chunky 3D-style objects (globes, cards, coins, padlocks) in the bright palette, set on Bright Green or pastel panels.
- Photography: real customers and staff, candid, warm natural light; often cropped into rounded rectangles.

## 9. Voice & Microcopy

Direct, transparent, slightly cheeky. Wise names fees exactly and compares itself with banks.

- Sentence case for UI, uppercase allowed for big display headlines.
- Show the number: rate, fee, time.
- Short verbs on buttons.

Sample strings (wise.com, read 2026-11-16):

- Hero: "The fast way to send money abroad"
- Calculator: "You send exactly", "Recipient gets", "Total fees", "Arrives", "Today - in seconds"
- Feature: "An exchange rate that won't change"
- Feature: "24/7/365 customer support"
- Section: "Make your money do more"
- CTA: "Send money", "Sign up", "Get Wise", "Log in"

## 10. Do's and Don'ts

**Do**

- Pair Bright Green `#9FE870` with Forest Green `#163300`, always.
- Use pill buttons with Forest Green text on Bright Green.
- Put a working calculator or real numbers near the top.
- Use heavy, tight display headlines and keep them short.
- Use round flags for currencies.
- Draw input borders with inset shadows and 16px radius.

**Don't**

- Don't put white text on Bright Green; contrast is too low.
- Don't use the old TransferWise blue (`#00B9FF`) or navy.
- Don't set body copy in Wise Sans.
- Don't hide fees or use vague claims like "low fees" without a figure.
- Don't add drop shadows to every card.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Wise. White page with Bright Green `#9FE870` brand panels and Forest Green `#163300` for logo, links and text on green. Body text `#0E0F0C`, secondary `#454745`. Headlines in "Wise Sans" (fallback Inter 900): very heavy, line-height 0.85, short. UI and body in Inter 400/600 at 14-16px. Buttons are pills: primary Bright Green with Forest Green text, secondary `rgba(22,51,0,0.08)` with Forest text, 48px tall. Inputs have 16px radius, 56px height and borders drawn with `box-shadow: inset 0 0 0 1px #868685`, focus 2px Forest Green. Put a currency calculator in the hero: "You send exactly" and "Recipient gets" fields with round flag avatars, a rate line, fee lines and a full-width "Send money" button, on a white card with `0 0 40px rgba(69,71,69,0.2)`. Feature cards use pastel brights (orange `#FFC091`, blue `#A0E1E1`, yellow `#FFEB69`, pink `#FFD7EF`) with 24px radius. Easing `cubic-bezier(0.6,0.2,0.1,1)`. Copy is direct and shows exact numbers.

```css
:root {
  --brand-bright-green: #9FE870;
  --brand-forest-green: #163300;
  --brand-forest-hover: #0D1F00;
  --brand-forest-active: #0E0F0C;
  --brand-content-primary: #0E0F0C;
  --brand-content-secondary: #454745;
  --brand-content-tertiary: #6A6C6A;
  --brand-interactive-secondary: #868685;
  --brand-neutral-bg: rgba(22,51,0,0.08);
  --brand-white: #FFFFFF;
  --brand-orange: #FFC091;
  --brand-blue: #A0E1E1;
  --brand-yellow: #FFEB69;
  --brand-pink: #FFD7EF;
  --brand-dark: #21231D;
  --brand-positive: #054D28;
  --brand-negative: #CB272F;
  --brand-warning: #FFD11A;
  --brand-font-display: "Wise Sans", "Inter", sans-serif;
  --brand-font-body: "Inter", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 10px;
  --brand-radius-md: 16px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 0 40px rgba(69,71,69,0.2);
  --brand-ease: cubic-bezier(0.6, 0.2, 0.1, 1);
}
```

---

Values are observed from the public wise.com stylesheets on 2026-11-16; display weights, button heights and hover shades are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Wise.

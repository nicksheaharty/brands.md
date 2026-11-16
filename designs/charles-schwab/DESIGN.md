---
name: Charles Schwab
shortName: Schwab
slug: charles-schwab
url: https://schwab.com
category: Finance
tagline: "Schwab blue square logo, teal-blue square buttons, light Charles Modern headlines."
updated: 2026-11-16
appStoreId: 407358186
logoBackground: "#009CDB"
theme: light
colors:
  - name: Schwab Blue
    hex: "#009CDB"
    role: Logo square, brand panels, highlight bars
  - name: Action Blue
    hex: "#037DAE"
    role: Primary buttons, secondary button text and borders
  - name: Ink
    hex: "#111111"
    role: Body text
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Link Blue
    hex: "#006E99"
    role: Text links on light backgrounds
  - name: Action Hover
    hex: "#1C6799"
    role: Primary button hover
  - name: Heading Grey
    hex: "#333333"
    role: Headings
  - name: Slate
    hex: "#425563"
    role: Dark sections, secondary text
  - name: Card Grey
    hex: "#F7F7F7"
    role: Card and panel background
  - name: Mist
    hex: "#F3F5F7"
    role: Section background
  - name: Cool Grey
    hex: "#98A4AE"
    role: Borders, inactive controls
  - name: Ice
    hex: "#CCF1FF"
    role: Hover background for menu items
  - name: Teal
    hex: "#21837F"
    role: Accent panels
  - name: Error
    hex: "#C10B14"
    role: Errors and validation
fonts:
  display:
    family: "Charles Modern"
    fallback: "Source Sans 3"
    weights: [300, 400, 700]
  body:
    family: "Charles Modern"
    fallback: "Source Sans 3"
    weights: [400, 700]
typeScale:
  - { role: Marquee, size: 42, weight: 300, lineHeight: 1.1, tracking: "0" }
  - { role: Heading XL, size: 40, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: Heading L, size: 24, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: Heading M, size: 22, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 18, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 18, weight: 700, lineHeight: 1.22, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 0, md: 4, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 4px 0 rgba(0,0,0,0.24)" }
  - { name: Raised, value: "0 2px 8px 0 rgba(0,0,0,0.32)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#111111"
  muted: "#425563"
  border: "#98A4AE"
  accent: "#037DAE"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Charles Schwab

## 1. Visual Theme & Atmosphere

schwab.com is clear, practical and a little understated. It is a big retail brokerage site with a deep menu, and the design keeps it calm: white pages, near-black text, light-weight headlines in the custom Charles Modern typeface, and two closely related blues. The bright Schwab Blue (`#009CDB`) belongs to the logo and brand moments; a deeper teal-blue (`#037DAE`) is used for buttons so they pass contrast.

What makes it recognisable:

- **The blue square logo.** "charles" in a lowercase italic serif over "SCHWAB" in small serif capitals, white on a Schwab Blue square.
- **Light headlines.** Marquee and section headings use `CharlesModern-Light` at 32-42px with tight 1.1-1.2 line height, in `#333`.
- **Square, solid buttons.** Primary buttons are `#037DAE` with white bold text, no corner radius, 44px tall.
- **Grey cards.** Content cards are `#F7F7F7` with 24px padding and no border.
- **Plain value statements.** The home page lists reasons in short sentences: education, pricing, guarantees, security.
- **Dense but orderly navigation.** A mega menu covers accounts, trading, investment products, banking, advice and pricing.

Mood words: approachable, steady, clear, trustworthy, practical.

## 2. Color Palette & Roles

Read from the live Drupal theme (`sch_beacon_retail`) and its utility classes (`.schfx-*`, `.bcn-*`).

| Name | Hex | Role |
|---|---|---|
| Schwab Blue | `#009CDB` / `#009DDB` | Logo square, `.schfx-bg-color-primary`, highlight bars |
| Bright Blue | `#00A0DF` | Alternate brand blue in illustrations |
| Action Blue | `#037DAE` | Primary buttons, `.schfx-color-secondary`, icons |
| Action Hover | `#1C6799` | Primary button hover |
| Link Blue | `#006E99` | Links (`--palette-link`), scrollbar thumb |
| Link Blue alt | `#026D97` | `.bcn-link--lightbackground` |
| Deep Blue | `#005F83` | Pressed, dark links (approximate role) |
| Ink | `#111111` | Body text |
| Heading | `#333333` | Headings |
| Text strong | `#121212` | `--palette-text`, `--palette-heading` |
| Slate | `#425563` | Dark panels, secondary text |
| Slate light | `#52697A` | Tertiary text, focus shadow tint |
| Cool Grey | `#98A4AE` | Borders, inactive toggles |
| Card Grey | `#F7F7F7` | `.bcn-card` background |
| Mist | `#F3F5F7` | Section background |
| Rule | `#E7E7E7` | Dividers |
| Ice | `#CCF1FF` | Menu hover (`--palette-bg-hover`) |
| Pale Blue | `#E5F8FF` | Light blue panels |
| Cream | `#FFF7E5` | Notice panels |
| Teal | `#21837F` | Accent panels |
| Indigo | `#446CA9` | Accent panels |

### Semantic colors

| State | Hex |
|---|---|
| Error | `#C10B14` (inset 1px ring on invalid inputs) |
| Warning | `#B05E0D` text on `#FFF7E5` |
| Success | `#21837F` (approximate) |
| Info | `#037DAE` on `#E5F8FF` |

### Dark sections

Slate `#425563` or Action Blue backgrounds with white text and white links (`--palette-link: #fff`). Secondary buttons on dark become white outlines.

## 3. Typography

**Family:** Charles Modern, a custom sans made for Schwab. The site loads static cuts (`CharlesModern-Light`, `-Regular`, `-Bold`, `-Italic`) and a variable version (`CharlesModernVar`, weights 100-900) for the new navigation.

**Licensing:** proprietary. **Source Sans 3** is a good free substitute (similar humanist shapes and a light weight). The site's own fallback is Helvetica Neue.

```css
font-family: CharlesModern-Regular, "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

Like several older systems, the site keeps `font-weight: 400` and changes the family to get Light or Bold. With a substitute, map Light to 300, Regular to 400 and Bold to 700.

### Scale (from production CSS)

| Class / role | Size (mobile / desktop) | Line height | Cut |
|---|---|---|---|
| Marquee h1 | 34px / 42px | 1.1 | Light |
| bcn-heading--xl | 32px / 40px | 1.2 | Light (or Bold variant) |
| bcn-heading--l | 24px | 1.2 | Light |
| bcn-heading--m | 22px | 1.2 | Light |
| bcn-heading--s | 18px | 1.2 | Regular |
| Body | 17px | 1.5 | Regular |
| Button | 18px / 22px | 1.22 | Bold |
| Small button / label | 15px | 1.1 | Bold |
| Small | 14px | 1.4 | Regular |
| Legal | 12-13px | 1.4 | Regular |

### Rules

- Sentence case for headings and buttons ("Open an account", "Explore ways to invest").
- Headlines are light, not bold; use Bold for button labels and short emphasis.
- Registered marks stay attached to product names: "thinkorswim®", "Schwab Investing Themes™".
- Fees and numbers are written plainly ("$0 online equity trade commissions"), with disclosures nearby.

## 4. Logo & Brand Mark

The logo is a **Schwab Blue square** (`#009CDB`) with "charles" in lowercase italic serif and "SCHWAB" in serif capitals, both white, left-aligned and stacked. The site inlines it as an SVG (`logo_default`, 50 x 50 viewBox). There are related lockups for Charles Schwab Bank and Premier Bank.

- **Primary:** the blue square, full colour.
- **One-colour:** white square outline is not used; use the full square or a white wordmark on blue.
- **Clear space:** at least 25% of the square's width on all sides (approximate).
- **Minimum size:** 32px square on screen (approximate).
- **App icon:** the Schwab Mobile icon is the same blue square.

Misuse:

- Do not change the square colour to Action Blue `#037DAE`.
- Do not round the square inside layouts (the OS rounds app icons).
- Do not reset the type in a sans-serif or change the italic "charles".
- Do not place it on a busy photo without a margin.

## 5. Components

### Buttons

Square-cornered, 44px minimum height, padding 10px 20px, label 18px/22px Charles Modern Bold, `transition: .2s ease-in`.

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `#037DAE` | `#FFFFFF` | 1px `#037DAE` |
| Primary hover | `#1C6799` | `#FFFFFF` | 1px `#1C6799` |
| Secondary | `#FFFFFF` | `#037DAE` | 1px `#037DAE` |
| Secondary hover | `#037DAE` | `#FFFFFF` | 1px `#037DAE` |
| Link | none | `#006E99` | underline |
| On dark | `#FFFFFF` | `#037DAE` | none |

- Focus: `inset 0 0 0 2px #037DAE` or a soft `0 0 10px #9ECAED` glow.
- Small button: 15px label, 36px tall.

```css
.sch-btn {
  display: inline-block; min-height: 44px; padding: 10px 20px;
  font: 18px/22px CharlesModern-Bold, "Source Sans 3", sans-serif; font-weight: 700;
  color: #fff; background: #037DAE; border: 1px solid #037DAE; border-radius: 0;
  text-decoration: none; transition: .2s ease-in;
}
.sch-btn:hover { background: #1C6799; border-color: #1C6799; }
.sch-btn--secondary { background: #fff; color: #037DAE; }
.sch-btn--secondary:hover { background: #037DAE; color: #fff; }
```

### Header and mega menu

- Utility row: "Trust Company", "Find a Branch", "Contact Us", "Chat", search, "Log In".
- Main row: blue square logo left, then "Accounts & Products", "Advice", "Pricing", "Why Schwab", "Learn". "Open an Account" button and "Log In" right.
- Mega menu: white panel with columns ("Accounts", "Trading", "Investment Products", "Banking & Borrowing", "Featured Offerings") and a spotlight promo with disclosures. Menu rows hover to `#CCF1FF`.
- An FDIC notice line appears near banking links.

### Marquee (hero)

Light 34-42px headline ("Manage your wealth, your way."), one supporting sentence, a primary button, and a photo. Triptych marquees use a 450px tall background image on desktop.

### Path selector

A row of large choices: "Invest on my own", "Trade with thinkorswim®", "Automate my investing", "Work with an advisor". Each is a card with an icon and a link.

### Cards

`.bcn-card`: `#F7F7F7` background, 24px padding, flex column, no border or radius. `--clear` variant drops the fill. Product cards use a light 22-24px title, short copy and a link.

### Inputs

44px tall, square or 4px radius, 1px `#98A4AE` border (`inset 0 0 0 1px #98a4ae`), focus `inset 0 0 0 2px #037DAE`, error `inset 0 0 0 1px #C10B14` with red helper text.

### Tables and accordions

Pricing and product tables use a white body, `#F7F7F7` header row, 1px `#E7E7E7` rules and 17px text. Accordions have bold titles and a blue plus/minus icon in a 32px `#037DAE` circle.

### Chat button

Floating "Chat" pill (24px radius, `0 1px 4px 0 rgba(0,0,0,0.24)` shadow) with a chat icon.

## 6. Layout & Spacing

- **Max width:** 1232-1280px container (both present in CSS).
- **Breakpoints:** 480, 768, 1024, 1280, 1440px.
- **Grid:** 12 columns (Bootstrap-style `.col-*`), 24px gutters on desktop, 16px on mobile (approximate).
- **Section spacing:** 48-64px desktop, 32-40px mobile (approximate).
- **Card padding:** 24px.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 1px 4px 0 rgba(0,0,0,0.24)` |
| Raised | `0 2px 8px 0 rgba(0,0,0,0.32)` |
| Slate | `0 2px 8px 0 #52697A` |
| Focus glow | `0 0 10px #9ECAED` |
| Tab indicator | `inset 0 -5px 0 0 #009DDB` |

- Most surfaces are flat grey or white; shadows appear on menus, chat and popovers.
- Easing: `cubic-bezier(0.8, 0.25, 0.25, 1)` for menus, `cubic-bezier(0.2, 0, 0.6, 1)` and `cubic-bezier(0.2, 0.6, 0, 1)` for panels; hovers `0.2s ease-in`.

## 8. Iconography & Imagery

- **Icons:** Schwab icon font (`Schwab-Icon-Font`), simple line icons at 20-32px in Action Blue.
- **Photography:** real-looking clients at home and work, financial consultants with clients, branch interiors. Warm, natural light.
- **Illustration:** flat blue-family spot illustrations for education content.
- **Tab indicator:** active tabs get a 5px Schwab Blue bar at the bottom.

## 9. Voice & Microcopy

Plain, client-first and confident about value. Sentences are short and often start with "You" or a verb.

- Sentence case for headings and buttons.
- CTAs: "Open an account", "Log In", "See our pricing", "Explore ways to invest", "Find a different branch".
- Disclosures and fine print follow every claim.

Sample strings seen on the live site today:

- "Manage your wealth, your way."
- "Invest your way with Schwab."
- "You deserve more. We can help."
- "World-class education for every investor."
- "Transparent pricing and low costs."

## 10. Do's and Don'ts

**Do**

- Use Schwab Blue `#009CDB` for the logo and brand panels, Action Blue `#037DAE` for buttons.
- Set headings in a light weight with tight line height.
- Keep buttons square with bold 18px labels.
- Use `#F7F7F7` cards without borders.
- Put disclosures next to fees, rates and guarantees.

**Don't**

- Don't use Schwab Blue for small text or button fills (contrast).
- Don't round buttons or use pills except for the chat button.
- Don't use heavy, bold headlines.
- Don't crowd the hero with more than one primary action.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of schwab.com. White page, body text `#111111` at 17px/1.5, headings `#333333` in a light weight (Charles Modern Light, fallback "Source Sans 3" 300) at 40px/1.2 for section titles and 42px/1.1 for the hero. Primary buttons are square (no radius), `#037DAE` background, white 18px bold label, padding 10px 20px, min height 44px, hover `#1C6799`; secondary buttons are white with a 1px `#037DAE` border and blue text. Links `#006E99` underlined. Cards are `#F7F7F7` with 24px padding and no border. Use Schwab Blue `#009CDB` only for the square logo, highlight bars and brand panels. Borders `#98A4AE`, dividers `#E7E7E7`, menu hover `#CCF1FF`. Container 1232px, breakpoints 768 and 1024px. Copy is short, plain and in sentence case with disclosures near any fee or rate.

```css
:root {
  --brand-schwab-blue: #009CDB;
  --brand-action: #037DAE;
  --brand-action-hover: #1C6799;
  --brand-link: #006E99;
  --brand-text: #111111;
  --brand-heading: #333333;
  --brand-slate: #425563;
  --brand-slate-light: #52697A;
  --brand-border: #98A4AE;
  --brand-rule: #E7E7E7;
  --brand-card: #F7F7F7;
  --brand-mist: #F3F5F7;
  --brand-hover-bg: #CCF1FF;
  --brand-pale-blue: #E5F8FF;
  --brand-cream: #FFF7E5;
  --brand-teal: #21837F;
  --brand-error: #C10B14;
  --brand-bg: #FFFFFF;
  --brand-font: CharlesModern-Regular, "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-light: CharlesModern-Light, "Source Sans 3", "Helvetica Neue", sans-serif;
  --brand-font-bold: CharlesModern-Bold, "Source Sans 3", "Helvetica Neue", sans-serif;
  --brand-radius: 0;
  --brand-button-height: 44px;
  --brand-shadow-card: 0 1px 4px 0 rgba(0,0,0,0.24);
  --brand-shadow-raised: 0 2px 8px 0 rgba(0,0,0,0.32);
  --brand-ease: cubic-bezier(0.8, 0.25, 0.25, 1);
  --brand-max-width: 1232px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Charles Schwab.

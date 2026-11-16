---
name: TD Bank
slug: td
url: https://td.com
category: Banking
tagline: "Green TD shield, square-cornered green buttons, Graphik type and pale-green panels."
updated: 2026-11-16
appStoreId: 382107453
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: TD Logo Green
    hex: "#43B02A"
    role: Logo box, brand moments
  - name: TD Green
    hex: "#008A00"
    role: Primary button fill and borders
  - name: Forest Green
    hex: "#1A5336"
    role: Navigation links, dark badges, headings in banners
  - name: Text Green
    hex: "#038203"
    role: Text links, secondary button text, selected states
  - name: Ink
    hex: "#1C1C1C"
    role: Body and heading text
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Pale Green
    hex: "#F6FAF0"
    role: Alternate banner and teaser background
  - name: Mist Green
    hex: "#F9FCF4"
    role: Hover fill for choice buttons and rows
  - name: Night Green
    hex: "#002B1A"
    role: Darkest green for footer, filter buttons
  - name: Grey 61
    hex: "#616161"
    role: Secondary text
  - name: Light Grey
    hex: "#F3F3F3"
    role: Section background
  - name: Border Grey
    hex: "#CCCCCC"
    role: Borders, dividers, disabled text
  - name: VIP Orange
    hex: "#FF9500"
    role: High-emphasis promotional CTA
  - name: Error Red
    hex: "#AE1100"
    role: Error messages
fonts:
  display:
    family: "TD Graphik"
    fallback: "Inter"
    weights: [400, 500]
  body:
    family: "TD Graphik"
    fallback: "Inter"
    weights: [300, 400, 500]
typeScale:
  - { role: Hero, size: 36, weight: 400, lineHeight: 1.14, tracking: "-1px" }
  - { role: H1, size: 30, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: H2, size: 24, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: H3, size: 20, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 18, weight: 300, lineHeight: 1.45, tracking: "0" }
  - { role: Body, size: 15, weight: 300, lineHeight: 1.53, tracking: "0" }
  - { role: Small, size: 13, weight: 300, lineHeight: 1.45, tracking: "0" }
radii: { sm: 0, md: 3, lg: 10, pill: 9999 }
spacing: [5, 10, 15, 20, 30, 40, 60, 80]
shadows:
  - { name: Card, value: "0 0 10px 0 rgba(0,0,0,0.2)" }
  - { name: Raised, value: "0 0 15px 0 rgba(0,0,0,0.2)" }
  - { name: Soft, value: "0 3px 5px 2px rgba(28,28,28,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6FAF0"
  text: "#1C1C1C"
  muted: "#616161"
  border: "#CCCCCC"
  accent: "#008A00"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# TD Bank

## 1. Visual Theme & Atmosphere

TD Bank (td.com) is the US and Canadian retail brand of Toronto-Dominion Bank. Its identity is one of the most recognisable shapes in North American banking: a green square with white "TD" letters, where the T and D share a stem. On the site that green box sits in the top-left corner, and the same green runs through every button.

What makes the site recognisable:

- **Green and white, nothing else.** Pages are white with near-black text (`#1C1C1C`). Every action is green. Alternate sections use very pale green (`#F6FAF0`) instead of grey.
- **Square corners.** The primary `.cmp-button` has `border-radius: 0` and a 2px border. Cards and banners are also square or barely rounded. This is unusual among US banks and is a strong tell.
- **Graphik, light.** Body copy is TD Graphik SemiLight at 15px with a 1.53 line height. Headings use Graphik Medium or Regular, never heavy.
- **Comfortable, North American retail.** "Earn $300 with TD Beyond Checking" style offer banners, tiles for checking, savings, credit cards and home lending, and an FDIC notice at the very top of the US site.
- **Two-country switch.** The header carries a United States / Canada selector; the Canadian site (TD Canada Trust) uses the same system.

Mood words: friendly, plain, green, steady, "America's Most Convenient Bank" heritage.

## 2. Color Palette & Roles

All values below were read from td.com CSS on 2026-11-16 except the logo green, which was sampled from the header logo image.

| Name | Hex | Role |
|---|---|---|
| TD Logo Green | `#43B02A` | The logo box only (sampled from the site logo) |
| TD Green | `#008A00` | Primary button fill and border, accordion buttons |
| Green Hover | `#0D7C16` | Primary button hover |
| Green Active | `#1A9630` | Primary button pressed |
| Text Green | `#038203` | Links, secondary button text, selected choice chips |
| Forest Green | `#1A5336` | Desktop menu links, dark badges, banner headings |
| Night Green | `#002B1A` | Darkest green, footer and filter outlines |
| Pale Green | `#F6FAF0` | "Primary alt" banner and teaser backgrounds |
| Mist Green | `#F9FCF4` | Hover fill on choice buttons |
| Ink | `#1C1C1C` | Body and heading text |
| Grey 61 | `#616161` | Secondary text |
| Grey 8C | `#8C8C8C` | Tertiary text, placeholders |
| Border Grey | `#CCCCCC` | Borders, disabled text and border |
| Light Grey | `#F3F3F3` | Section background |
| Off White | `#F9F9F9` | Disabled button fill |
| White | `#FFFFFF` | Page and card background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#AE1100` | Field and form errors |
| Warning | `#C74007` | Warnings, important notices |
| VIP / promo | `#FF9500` (hover `#E37609`, active `#ECA42E`) | `.cmp-button--vip`, a rare high-emphasis promo button with dark text |
| Info / wealth | `#007B80` | Teal rule used on wealth and asset-management articles |
| Success | `#008A00` | Confirmations reuse the brand green |

### Dark mode

td.com has no dark theme. The TD Bank app follows iOS dark mode with dark grey surfaces and green accents; keep the web build light.

## 3. Typography

- **Brand font:** Graphik (Commercial Type), licensed as "TD Graphik" in Light, SemiLight, Regular, Medium, Semibold and Bold with italics. Each weight is a separate family name in CSS (`TD Graphik SemiLight`, `TD Graphik Medium`), so `font-weight` stays 400 and the family selects the weight.
- **Fallback:** `Inter` is the closest Google Font. The site's own stack falls back to `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- **Body:** 15px (`.9375rem`) SemiLight, line-height 1.5334, colour `#1C1C1C`.

| Role | Size | Family / weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 36px | Graphik Regular | 41px | -1px |
| H1 | 30px | Graphik Medium | 1.2 | 0 |
| H2 | 24px | Graphik Medium | 1.25 | 0 |
| H3 | 20px | Graphik Medium | 1.3 | 0 |
| Lead | 18px | Graphik SemiLight | 1.45 | 0 |
| Body | 15px | Graphik SemiLight | 1.53 | 0 |
| Button | 16px | Graphik Medium | 24px | 0 |
| Small / legal | 13px | Graphik SemiLight | 1.45 | 0 |

Rules:

- Sentence case for headings and buttons ("Open an account").
- Superscript footnote markers in buttons and offers (`sup` at 10px).
- Use real figures for offers only after checking td.com; bonuses change often.

## 4. Logo & Brand Mark

- **Construction:** a solid green square (`#43B02A`) with white "TD" letters. The T's crossbar runs into the D, and the T's stem doubles as the D's left stem, separated by a thin green cut.
- **Usage:** always the square box; on td.com it sits top-left at about 45px. The same box is the app icon.
- **Colour versions:** green box with white letters is the only standard version. A white box with green letters appears on green or photographic backgrounds.
- **Clear space:** about one quarter of the box width on all sides (approximate).
- **Misuse:** do not round the box's corners, outline it, recolour it to the button green `#008A00`, or set "TD" in a font.

## 5. Components

### Buttons

From `.cmp-button` in td.com CSS:

```css
.cmp-button {
  display: inline-block;
  font-family: "TD Graphik Medium", Inter, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: .4375rem;               /* plus horizontal padding from layout */
  min-width: 160px;                /* approximate */
  color: #FFFFFF;
  background-color: #008A00;
  border: 2px solid #008A00;
  border-radius: 0;
  text-align: center;
}
.cmp-button:hover  { background-color: #0D7C16; border-color: #0D7C16; }
.cmp-button:active { background-color: #1A9630; border-color: #1A9630; }
.cmp-button:disabled { color: #CCCCCC; background-color: #F9F9F9; border-color: #CCCCCC; }
.cmp-button:focus::before { content: ""; position: absolute; inset: 3px; border: 1px solid #fff; opacity: .75; }

/* Secondary */
.cmp-button--secondary .cmp-button { color: #038203; background: transparent; border-color: #008A00; }
.cmp-button--secondary .cmp-button:hover  { background: #EBEBEB; border-color: #038203; }
.cmp-button--secondary .cmp-button:active { background: #DADADA; }

/* Secondary on dark or photo */
.cmp-button--secondary-clear .cmp-button { color: #fff; background: transparent; border-color: #fff; }

/* VIP promo */
.cmp-button--vip .cmp-button { color: #1C1C1C; background: #FF9500; border-color: #FF9500; }
```

Buttons are full width by default and shrink to content width with a modifier class. An inline icon can sit before the label at 22px.

### Header

- Top: an FDIC line in a slim bar (US only), then a utility row with Personal (selected), Small Business, Commercial, Investing & Wealth, About Us, and on the right Search, Help, Find Us, country selector and a green "Log In" button.
- Main row: the green TD box left, then product menus (Checking & Savings, Credit Cards, Home Lending, Personal Loans) in Forest Green `#1A5336`.
- Mega menus list links in columns with a right-hand promo ("Earn $300 with TD Beyond Checking", which was live on 2026-11-16).

### Banners and heroes

- Split layout: copy and buttons on one side, photo on the other, on white or Pale Green `#F6FAF0`.
- Heading in Graphik Regular 36px with -1px tracking; one or two buttons side by side.

### Teasers and product tiles

- White or Pale Green tiles, square corners, an icon or photo, a Medium heading, 15px body and a text link in `#038203` with a chevron.
- Hover lifts with `0 0 15px 0 rgba(0,0,0,.2)`.

### Choice buttons (signature)

Used in "Help me choose" tools:

```css
.td-multi-single-select-buttons label {
  font-family: "TD Graphik Medium";
  background: #FFFFFF;
  border: 2px solid #038203;
  border-radius: 0;
  padding: 12px 16px;
}
.td-multi-single-select-buttons label:hover { background: #F9FCF4; }
.td-multi-single-select-buttons input:checked + label { background: #038203; color: #FFFFFF; }
```

### Inputs

- 44-48px tall, 1px `#8C8C8C` border, square or 3px radius, 15px text (approximate).
- Focus: green 2px border. Error: `#AE1100` text and border with an icon.

### Accordions and tables

- Accordion rows divided by 1px `#CCCCCC`, Medium 18px titles, green chevrons.
- Rate tables: header row in Pale Green, rows separated by light grey lines, figures right-aligned.

### Badges

- Small rectangular tags: dark badge `#1A5336` with white text, or pale green with Forest Green text.

## 6. Layout & Spacing

- **Breakpoints:** 768px (tablet), 1024px (desktop) and 1200px (wide) are the main ones in the CSS (`max-width: 767px`, `1023px`, `1199px`).
- **Container:** about 1200px max width with 15px gutters (Bootstrap-style grid).
- **Spacing:** multiples of 5px are common (5, 10, 15, 20, 30, 40, 60).
- **Density:** medium; generous white space around banners, compact link lists in menus and footer.

## 7. Depth, Elevation & Motion

- Square, mostly flat surfaces. Elevation is a soft, even glow rather than a drop shadow: `0 0 10px 0 rgba(0,0,0,.2)` and `0 0 15px 0 rgba(0,0,0,.2)`.
- Overlays and modals: `0 0 20px 0 rgba(0,0,0,.4)`.
- Transitions: `all .15s ease-in-out` for buttons and links, `.3s ease-in` for menus, `.2s ease-in-out` transforms on chevrons.

## 8. Iconography & Imagery

- **Icons:** a custom icon font (`icons`) of simple line icons, usually in green, 22-32px.
- **Photography:** bright, everyday North American life: families, small business owners, homes. Natural light, often with green accents in clothing or props.
- **Illustration:** minimal; product tools use simple green line illustrations.

## 9. Voice & Microcopy

- Friendly, direct, a little warm. Short headlines, practical subheads.
- Sentence case. Superscript markers lead to disclosures at the bottom.

Sample strings:

- Utility: "Log In", "Find Us", "Help"
- Menus: "Open My Account", "Help me choose", "Set Up My Account", "Make the Most of My Account"
- Tasks: "Enroll in Online Banking", "Download the TD Bank app", "Send Money with Zelle", "Report fraud"
- Offer: "Open a TD Beyond Checking account" (check the current bonus on td.com before quoting)

## 10. Do's and Don'ts

**Do**

- Use `#008A00` for every primary button, with square corners and a 2px border.
- Use Pale Green `#F6FAF0` for alternate sections, not grey.
- Set body copy in a light Graphik (or Inter 300) at 15px with a 1.53 line height.
- Keep the green TD box top-left and square.
- Use Forest Green `#1A5336` for menu links and dark accents.

**Don't**

- Don't round buttons or use pill shapes.
- Don't introduce a second brand colour; orange is only for rare VIP promos.
- Don't use heavy bold headings; TD tops out at Medium for most text.
- Don't mix the logo green `#43B02A` into buttons or the button green into the logo.
- Don't use dark mode on the marketing site.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of TD Bank (td.com). White page, near-black text `#1C1C1C`, secondary text `#616161`. Font: `"TD Graphik", Inter, -apple-system, sans-serif`; body 15px light (300) with line-height 1.53, headings Medium (500), hero 36px Regular with -1px tracking. Top-left logo is a square green box `#43B02A` with white "TD". Primary buttons are `#008A00` with white text, 2px solid border in the same green, square corners (radius 0), Medium 16px label; hover `#0D7C16`, active `#1A9630`. Secondary buttons are transparent with a green border and `#038203` text, hover `#EBEBEB`. Use Pale Green `#F6FAF0` for alternate banners, Forest Green `#1A5336` for menu links and dark badges. Elevation is a soft even glow `0 0 15px rgba(0,0,0,.2)`. Grid is about 1200px wide with 15px gutters; breakpoints 768/1024/1200. Copy is friendly and short, in sentence case.

```css
:root {
  --td-logo-green: #43B02A;
  --td-green: #008A00;
  --td-green-hover: #0D7C16;
  --td-green-active: #1A9630;
  --td-green-text: #038203;
  --td-forest: #1A5336;
  --td-night: #002B1A;
  --td-pale-green: #F6FAF0;
  --td-mist-green: #F9FCF4;
  --td-ink: #1C1C1C;
  --td-text-secondary: #616161;
  --td-text-tertiary: #8C8C8C;
  --td-border: #CCCCCC;
  --td-surface: #F3F3F3;
  --td-bg: #FFFFFF;
  --td-error: #AE1100;
  --td-warning: #C74007;
  --td-vip: #FF9500;
  --td-font: "TD Graphik", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --td-radius: 0;
  --td-shadow-card: 0 0 10px 0 rgba(0,0,0,0.2);
  --td-shadow-raised: 0 0 15px 0 rgba(0,0,0,0.2);
  --td-ease: ease-in-out;
}
```

---

Values are observed from the public product; this file is an unofficial reference and is not affiliated with or endorsed by TD Bank or The Toronto-Dominion Bank.

---
name: SoFi
slug: sofi
url: https://sofi.com
category: Banking
tagline: "Clean all-in-one money app look: SoFi teal-blue, TT Norms type and the nine-dot mark."
updated: 2026-11-16
appStoreId: 1191985736
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: SoFi Blue
    hex: "#00A2C7"
    role: Logo, primary buttons, links, brand moments
  - name: Ink
    hex: "#1A2B3C"
    role: Headings and body text (approximate)
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Blue Pressed
    hex: "#0080C5"
    role: Button hover and pressed, darker brand blue
  - name: Aqua
    hex: "#00A9CE"
    role: Secondary brand tint seen on sofi.com
  - name: Navy
    hex: "#0A2240"
    role: Dark sections, footer (approximate)
  - name: Slate
    hex: "#4A5A6A"
    role: Secondary text (approximate)
  - name: Grey 717
    hex: "#717171"
    role: Muted text, captions
  - name: Line
    hex: "#E7E7E7"
    role: Header hairline, dividers
  - name: Fog
    hex: "#F7F7F7"
    role: Footer and subtle section background
  - name: Ice
    hex: "#E6F6FA"
    role: Tinted panels and selected states (approximate)
  - name: Positive
    hex: "#1A8A4A"
    role: Gains, success (approximate)
  - name: Negative
    hex: "#D0342C"
    role: Losses, errors (approximate)
  - name: Charcoal
    hex: "#231F20"
    role: Registered mark and legacy dark logo parts
fonts:
  display:
    family: "TT Norms"
    fallback: "Poppins"
    weights: [700]
  body:
    family: "TT Norms"
    fallback: "Poppins"
    weights: [400, 700]
typeScale:
  - { role: Hero, size: 56, weight: 700, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: H1, size: 40, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: H2, size: 28, weight: 700, lineHeight: 1.29, tracking: "0" }
  - { role: H3, size: 22, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Fine print, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 15, 16, 24, 25, 32, 48, 64]
shadows:
  - { name: Header hairline, value: "inset 0 -1px 0 #E7E7E7" }
  - { name: Card, value: "0 2px 12px rgba(10,34,64,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#1A2B3C"
  muted: "#717171"
  border: "#E7E7E7"
  accent: "#00A2C7"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# SoFi

## 1. Visual Theme & Atmosphere

SoFi (Social Finance) is a US digital bank and lender: checking and savings, student loan refinancing, personal loans, mortgages, credit cards, investing and a single "all-in-one" app. Its web presence is clean and bright: white pages, a teal-blue brand colour, a geometric sans, product photography of phones and cards, and clear rate and benefit callouts.

Research note: sofi.com returned a 403 bot-check page to this crawler on 2026-11-16, so the full stylesheet could not be read. The logo colour `#00A2C7`, the TT Norms font, the `#E7E7E7` header hairline, `#717171` muted text, `#F7F7F7` footer and the 1200px container come from SoFi's own error page and the public SoFi logo file. Other values are approximate and marked so.

What makes it recognisable:

- **SoFi Blue.** `#00A2C7`, a bright teal-blue, is the logo colour and the colour of primary actions.
- **The nine-dot mark.** Next to the wordmark sits a 3x3 grid of circles where three on the diagonal are rings, not solid dots. It doubles as the app icon.
- **Geometric type.** TT Norms in Regular and Bold; headlines are bold, compact and friendly.
- **White space and product shots.** Phones showing the app, the SoFi debit or credit card, and short benefit statements with a rate or bonus figure.
- **Pill buttons** in SoFi Blue with white text (approximate).
- **Sports presence.** SoFi Stadium naming rights mean stadium and event imagery appears in campaigns; keep it secondary in product UI.

Mood words: optimistic, modern, approachable, tidy, "get your money right".

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| SoFi Blue | `#00A2C7` | Logo, primary buttons, links |
| Blue Pressed | `#0080C5` | Hover, pressed, darker blue in legacy logo art |
| Aqua | `#00A9CE` | Secondary blue tint |
| Ice | `#E6F6FA` | Tinted panels, selected states (approximate) |
| Ink | `#1A2B3C` | Headings and body (approximate) |
| Navy | `#0A2240` | Dark sections, footer variant (approximate) |
| Slate | `#4A5A6A` | Secondary text (approximate) |
| Grey 717 | `#717171` | Muted text, captions |
| Line | `#E7E7E7` | Header hairline, dividers |
| Fog | `#F7F7F7` | Footer and subtle background |
| White | `#FFFFFF` | Page |
| Charcoal | `#231F20` | Registered mark, legacy dark logo parts |

### Semantic (approximate)

| State | Hex |
|---|---|
| Positive / gains | `#1A8A4A` |
| Negative / losses / error | `#D0342C` |
| Warning | `#F2A900` |
| Info | `#00A2C7` |

### Dark mode

The SoFi app supports a dark theme. Use near-black navy `#0A1521` for the background, `#14212E` for cards, white text and keep SoFi Blue for actions (approximate).

## 3. Typography

- **TT Norms** (TypeType), Regular 400 and Bold 700. SoFi serves it from its own domain with the stack `"TT Norms", Arial, Helvetica, sans-serif`.
- The font is licensed. Use **Poppins** as the Google Fonts fallback (it shares the geometric, round-shouldered shapes); set Poppins 600 where TT Norms Bold would be used, since Poppins 700 is heavier.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 48-56px | 700 | 1.1 | -0.02em |
| H1 | 40px | 700 | 1.15 | -0.01em |
| H2 | 28px | 700 | 36px | 0 |
| H3 | 22px | 700 | 1.3 | 0 |
| Body L | 18px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 20px | 0 |
| Small | 14px | 400 | 1.4 | 0 |
| Fine print | 12px | 400 | 1.4 | 0 |

The 28/36 and 16/20 pairs are from SoFi's own page; the larger sizes are approximate.

Rules:

- Sentence case for headlines and buttons.
- Rates and bonuses are set large and bold with the % or $ attached; the qualifying footnote marker follows as a superscript.
- Keep body text in Regular; use Bold for emphasis sparingly.

## 4. Logo & Brand Mark

- The logo is the **SoFi** wordmark (capital S, lowercase o, capital F, lowercase i) in a heavy geometric sans, followed by the nine-dot mark: a 3x3 grid of equal circles with rings at top-right, centre and bottom-left.
- Colour: SoFi Blue `#00A2C7` on white; all white on blue, navy or photography.
- The mark alone (white on SoFi Blue) is the app icon and social avatar.
- Clear space: at least one dot diameter around the lockup (approximate).
- Minimum size: about 72px wide for the lockup, 20px for the mark (approximate).
- Don't change which dots are rings, rearrange the grid, add gradients (older 3D gradient versions are retired), or set the wordmark in another font.

## 5. Components

All component values below are approximate unless noted.

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; padding: 0 28px;
  font: 700 16px/1 "TT Norms", Poppins, Arial, sans-serif;
  border-radius: 9999px; border: 2px solid transparent;
  transition: background-color .2s ease, color .2s ease;
}
.btn-primary { background: #00A2C7; color: #FFFFFF; }
.btn-primary:hover { background: #0080C5; }
.btn-secondary { background: #FFFFFF; color: #00A2C7; border-color: #00A2C7; }
.btn-secondary:hover { background: #E6F6FA; }
.btn-on-dark { background: #FFFFFF; color: #0A2240; }
.btn:focus-visible { outline: 2px solid #00A2C7; outline-offset: 3px; }
```

- Text links are SoFi Blue, underline on hover, often with a right chevron ("See rates").

### Inputs

- 48-56px tall, 8px radius, 1px `#C9CED3` border, 16px text.
- Focus: 2px SoFi Blue border. Error: `#D0342C` border and 14px message.
- Rate-check and loan forms keep one question per step on mobile with a progress bar in SoFi Blue.

### Header

- White bar with an inset `0 -1px 0 #E7E7E7` hairline (from SoFi's own page), 15px vertical padding.
- Logo on the left; product menu items ("Banking", "Loans", "Investing", "Credit Cards", "Insurance", "Learn"); "Log in" text link and a primary "Sign up" pill on the right.

### Product cards

- White cards, 16px radius, `0 2px 12px rgba(10,34,64,.08)` or a 1px `#E7E7E7` border.
- Icon or product image on top, bold 22px title, two-line description, a figure (APY, APR, bonus) in large bold type with a superscript marker, and a link.

### Rate and benefit band

- Two to four large bold figures with short labels, on white or Ice. Only show figures copied from SoFi's live pages with their disclosures.

### App screens

- Card-based dashboard: balance at top in large bold numerals, tabs for Money, Invest, Loans, Credit Card, Relay (net-worth tracking), stacked cards with rounded corners and small line charts.

### Badges

- Small pills, 12px bold, Ice background with SoFi Blue text ("New", "Members get").

### Footer

- Fog `#F7F7F7` background, 16px text, `#717171` legal copy, long disclosures in 12px.

## 6. Layout & Spacing

- Container max width `1200px` with 25px side padding (from SoFi's own page).
- 12-column grid with 24px gutters; three-up product cards on desktop, one column on mobile.
- Section padding 64-96px desktop, 48px mobile (approximate).
- Spacing steps of 4 and 8; SoFi's own layout also uses 15 and 25px paddings.
- Breakpoints around 768px and 1024px (approximate).

## 7. Depth, Elevation & Motion

- Mostly flat with hairline dividers; cards may carry a soft navy-tinted shadow.
- Modals: white, 16px radius, dimmed navy overlay at about 60%.
- Motion is brief: 200ms colour transitions, gentle fade-up of cards on scroll.
- No parallax or decorative animation in forms.

## 8. Iconography & Imagery

- Icons: simple line icons, about 2px stroke with rounded ends, in SoFi Blue or ink.
- Photography: real people (young professionals, families, graduates) in bright natural light; phones and cards shot cleanly on white or blue.
- Illustrations: flat shapes in the blue palette, often circles echoing the nine-dot mark.

## 9. Voice & Microcopy

- Upbeat, confident, member-centred. SoFi calls customers "members".
- Headlines: short promises about money progress ("Get your money right" style).
- Buttons: "Sign up", "Log in", "See your rate", "Get started", "Open an account".
- Rate checks state they won't affect your credit score, with a footnote.
- Footnotes are numbered and long; keep them readable in 12px grey.

## 10. Do's and Don'ts

**Do**

- Use SoFi Blue `#00A2C7` for the logo and primary actions.
- Keep backgrounds white or light grey with dark ink text.
- Use TT Norms (or Poppins) with bold headlines and regular body.
- Show the nine-dot mark exactly as drawn.
- Put disclosures next to every rate or bonus.

**Don't**

- Don't add extra brand colours for decoration.
- Don't use the old gradient logo.
- Don't use square, heavy-shadow buttons.
- Don't invent rates, APYs or bonuses.
- Don't use thin, light-weight headlines.

## 11. Agent Prompt Guide

> Build this UI in the style of SoFi. White page, text in dark ink (about `#1A2B3C`), muted `#717171`, dividers `#E7E7E7`, subtle sections `#F7F7F7`. Brand colour SoFi Blue `#00A2C7` (hover `#0080C5`, tint `#E6F6FA`) for primary pill buttons, links and the logo. Font: "TT Norms" with Poppins fallback; headlines bold 28-56px, body 16-18px regular. Header is white with an inset 1px `#E7E7E7` bottom line, product links in the middle, "Log in" and a blue "Sign up" pill on the right. Product cards are white with 16px radius and a soft navy-tinted shadow, a bold title, two-line description and one large figure with a footnote marker. Container 1200px with 25px padding. The logo is "SoFi" plus a 3x3 dot grid with rings on the diagonal. Copy is upbeat, calls customers "members", and keeps disclosures close to every number.

```css
:root {
  --sofi-blue: #00A2C7;
  --sofi-blue-pressed: #0080C5;
  --sofi-aqua: #00A9CE;
  --sofi-ice: #E6F6FA;
  --sofi-ink: #1A2B3C;
  --sofi-navy: #0A2240;
  --sofi-slate: #4A5A6A;
  --sofi-muted: #717171;
  --sofi-line: #E7E7E7;
  --sofi-fog: #F7F7F7;
  --sofi-white: #FFFFFF;
  --sofi-positive: #1A8A4A;
  --sofi-negative: #D0342C;
  --sofi-font: "TT Norms", Poppins, Arial, Helvetica, sans-serif;
  --sofi-radius-sm: 4px;
  --sofi-radius-md: 8px;
  --sofi-radius-lg: 16px;
  --sofi-radius-pill: 9999px;
  --sofi-shadow-card: 0 2px 12px rgba(10,34,64,.08);
  --sofi-header-line: inset 0 -1px 0 #E7E7E7;
  --sofi-container: 1200px;
}
```

---

sofi.com blocked automated access on 2026-11-16. SoFi Blue, TT Norms, the header hairline, muted grey, footer grey and container width come from SoFi's own served page and logo; the ink, navy, slate, semantic colours, component sizes, radii, shadows, logo clear space and minimum size are approximate. This file is an unofficial reference and is not affiliated with or endorsed by SoFi Technologies, Inc.

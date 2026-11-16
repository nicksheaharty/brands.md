---
name: HDFC Bank
slug: hdfc-bank
url: https://hdfcbank.com
category: Banking
tagline: "Navy-blue bar with the red-and-white square emblem, Open Sans, dense product carousels."
updated: 2026-11-16
appStoreId: 6504402552
logoBackground: "#004C8F"
theme: light
colors:
  - name: HDFC Blue
    hex: "#004C8F"
    role: Logo field, primary buttons, headings, links
  - name: HDFC Red
    hex: "#ED232A"
    role: Emblem outer square, sparing alerts and highlights
  - name: White
    hex: "#FFFFFF"
    role: Page background, emblem cuts
  - name: Teaser Grey
    hex: "#ECEDF3"
    role: Product teaser and card background
  - name: Sky Blue
    hex: "#73B8FF"
    role: Light-blue accents, carousel and icon highlights
  - name: Link Hover Blue
    hex: "#0056B3"
    role: Hover fill and hover text for blue actions
  - name: Bright Blue
    hex: "#4DA3FF"
    role: Secondary accent, focus and selected states
  - name: Ink
    hex: "#000000"
    role: Primary text
  - name: Body Grey
    hex: "#4A4A4A"
    role: Body and secondary text (approximate)
  - name: Border Grey
    hex: "#D7D9E2"
    role: Borders and dividers (approximate)
  - name: Success Green
    hex: "#00B947"
    role: Positive tags and success ticks
  - name: Offer Yellow
    hex: "#FCC83E"
    role: Offer badges and promo highlights
fonts:
  display:
    family: "Open Sans"
    fallback: "Open Sans"
    weights: [700, 800]
  body:
    family: "Open Sans"
    fallback: "Open Sans"
    weights: [400, 600]
typeScale:
  - { role: Hero, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: H2, size: 26, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: H3, size: 20, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Card Title, size: 16, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 12, weight: 400, lineHeight: 1.45, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Card, value: "0 4px 6px rgba(0,0,0,0.1)" }
  - { name: Raised, value: "0 8px 20px rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#ECEDF3"
  text: "#000000"
  muted: "#4A4A4A"
  border: "#D7D9E2"
  accent: "#004C8F"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# HDFC Bank

> Research note: the hdfcbank.com home page HTML loaded on 2026-11-16, but its stylesheets timed out for automated requests, so button, input and spacing values below come from inline styles plus observation and are marked approximate where they are not read directly.

## 1. Visual Theme & Atmosphere

HDFC Bank is India's largest private-sector bank, and its website looks like it: a wide, information-heavy portal with dozens of products reachable from the first screen. The brand is carried by one strong block: a deep navy-blue bar holding a red-and-white square emblem and the words "HDFC BANK" in bold white capitals.

What makes it recognisable:

- **Navy and red.** HDFC Blue `#004C8F` for the logo field, buttons and headings; HDFC Red `#ED232A` only in the emblem and the occasional alert. Everything else is white or a cool pale grey (`#ECEDF3`).
- **The emblem.** A red square with a white cross-shaped cut and a white inner frame around a small blue square. It reads as a stylised building or vault seen from above.
- **Segment tabs.** The top bar switches between Personal, NRI, HNI, Wholesale, Agri, MSME and Government Schemes, a quick read of who the bank serves.
- **Product discovery.** The home page leads with category tabs (Accounts, Deposits, Cards, Loans, Investments, Insurance), filter chips with counts ("Popular 8", "Premium 8", "Senior Citizen 3") and horizontal carousels of product teasers.
- **High density.** Small type (14px body), compact cards, many calls to action. It favours reach and completeness over white space.

Mood words: institutional, trustworthy, busy, practical, Indian retail scale.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| HDFC Blue | `#004C8F` | Logo field, primary buttons, headings, links (read from page) |
| HDFC Red | `#ED232A` | Emblem outer square (read from logo SVG) |
| White | `#FFFFFF` | Page background, emblem cuts |
| Teaser Grey | `#ECEDF3` | Product teaser backgrounds (`data-teaserBgColor` on the page) |
| Sky Blue | `#73B8FF` | Light-blue accents in carousels and icons (read from page) |
| Bright Blue | `#4DA3FF` | Selected and focus accents (read from page) |
| Link Hover Blue | `#0056B3` | Hover background on blue actions (read from page) |
| Ink | `#000000` | Headings and primary text |
| Body Grey | `#4A4A4A` | Body and secondary text (approximate) |
| Border Grey | `#D7D9E2` | Card and input borders (approximate) |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#00B947` | "Pre-approved", "Activated" tags, ticks (read from page) |
| Offer | `#FCC83E` / `#FCB936` | Offer badges and promo ribbons (read from page) |
| Error | `#ED232A` | Form errors, failed transactions |
| Info | `#004C8F` on `#ECEDF3` | Notices and help panels |

### Dark mode

The website is light only. The HDFC Bank mobile app has a dark navy splash and a mostly light interior; do not build a dark theme unless asked.

## 3. Typography

- **Font:** Open Sans, self-hosted as separate families (`OpenSans_Regular`, `OpenSans_Semibold`, `OpenSans_Bold`, `OpenSans_Extrabold`). It is a free Google Font, so the fallback is the same family.
- **Stack:** `"Open Sans", Arial, sans-serif`. Headings use the Bold or Extrabold cut, buttons and labels Semibold.
- **Logo type:** the wordmark "HDFC BANK" is a heavy, wide grotesque in capitals; do not imitate it in UI headings.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 32px | 700 | 1.25 | 0 |
| H2 | 26px | 700 | 1.3 | 0 |
| H3 | 20px | 600 | 1.35 | 0 |
| Card Title | 16px | 700 | 1.4 | 0 |
| Button | 14px | 600 | 1.2 | 0 |
| Body | 14px | 400 | 1.5 | 0 |
| Small / legal | 12px | 400 | 1.45 | 0 |

Hero size (32px) and the 14px body were read from inline styles; the rest are approximate.

Rules:

- Title Case is common for product names ("Savings Max Senior Citizen Account"); sentence case for descriptions.
- Use the rupee sign with Indian digit grouping (₹1,00,000) and tabular numerals for rates.
- Keep text black or blue; avoid light grey body copy on the grey teaser cards.

## 4. Logo & Brand Mark

- **Construction:** the emblem sits at the left end of a navy rectangle. The emblem is a red square with a white horizontal and vertical bar crossing it, a white square frame inside, and a navy square at the centre. To the right, "HDFC BANK" in white capitals on the navy field. A thin white keyline surrounds the whole lockup.
- **Emblem alone:** used for the app icon, favicons and social avatars.
- **Colour versions:** full colour lockup on white (primary). On dark or photographic backgrounds the white keyline separates it. Single-colour versions are reserved for print.
- **Clear space:** about half the emblem's width on every side (approximate).
- **Minimum size:** about 24px tall for the full lockup on screen (approximate).
- **Misuse:** do not separate the wordmark from its navy field, recolour the emblem, round the corners or add shadows.

## 5. Components

### Buttons

Page markup uses `btn btn-primary`, `btn outline-btn` and `btn-primary-outline`. Styles are approximate:

```css
.btn-primary {
  background: #004C8F;
  color: #FFFFFF;
  font: 600 14px/1.2 "Open Sans", Arial, sans-serif;
  padding: 10px 20px;
  min-height: 40px;
  border: 1px solid #004C8F;
  border-radius: 8px;
  transition: all .3s ease-in-out;
}
.btn-primary:hover { background: #0056B3; border-color: #0056B3; }
.btn-primary:focus-visible { outline: 2px solid #000; box-shadow: 0 -2px 12px #FFFFFF; }

.outline-btn {
  background: transparent;
  color: #004C8F;
  border: 1px solid #004C8F;
  border-radius: 8px;
  padding: 10px 20px;
}
.outline-btn:hover { background: #004C8F; color: #FFFFFF; }
```

Teaser cards usually pair "Apply Now" (solid) with "Know More" (outline).

### Header

- **Utility bar:** "You are in Personal Banking" selector and segment links (Personal, NRI, HNI, Wholesale, Agri, MSME, Government Schemes) in small white text on navy.
- **Main bar:** logo left; a search field ("Search for products, services...") in the middle; "Login" as a red or blue button on the right with a dropdown for NetBanking, credit card and other logins.
- **Mega menu:** "Discover Products" opens a white panel with category tabs on the left and product links in columns.

### Product filter and carousel (signature)

- Category tabs across the top (Accounts, Deposits, Cards, Loans, Investments, Insurance), active tab underlined in HDFC Blue.
- Below, filter chips with counts: "Popular 8", "Premium 8", "Senior Citizen 3". Chips are pill-shaped, 1px grey border, active chip filled navy with white text.
- A horizontal swiper of teaser cards with left and right arrow buttons.

```css
.teaser-card {
  background: #ECEDF3;
  border-radius: 12px;
  padding: 20px;
  min-width: 260px;
}
.teaser-card h3 { font: 700 16px/1.4 "Open Sans"; color: #000; }
.teaser-card p  { font: 400 14px/1.5 "Open Sans"; color: #4A4A4A; }
```

Each card has a product name ("Speciale Platinum"), a one-line pitch ("For those who are at the paradigm of success") and two buttons.

### Inputs

- 44px tall, 1px `#D7D9E2` border, 8px radius, 14px text, label above in Semibold (approximate).
- Focus: navy border. Errors in red below the field.

### Floating CTA

- A sticky "interest rate" or "Apply" pill floats at the bottom right on scroll, navy with white text and a soft shadow `0 4px 6px rgba(0,0,0,.1)`.

### Footer

- Dark navy band with link columns (Products, Services, Help, About), app store badges, social icons and regulatory notices in small white text.

## 6. Layout & Spacing

- **Container:** about 1280px max width, 16-24px side padding (approximate).
- **Grid:** 12 columns; teaser carousels show 3-4 cards on desktop, 1.2 cards on mobile so the next card peeks in.
- **Breakpoints:** 412, 600, 767/768 and 1024px appear in inline styles.
- **Rhythm:** 32-48px between sections, 16-20px inside cards.
- **Density:** high; many links and modules per screen.

## 7. Depth, Elevation & Motion

- Cards are mostly flat on grey with rounded corners; floating elements use `0 4px 6px rgba(0,0,0,.1)`.
- Transitions: `all .3s ease-in-out` on buttons and skip links; `opacity .3s ease` for fades.
- Sections fade up on scroll (AOS library, `data-aos="fade-up"`).
- Carousels slide horizontally with arrow buttons.

## 8. Iconography & Imagery

- **Icons:** line icons from a custom icon font (`icomoon`), in navy or sky blue, about 24px.
- **Photography:** Indian families, professionals and seniors in bright, warm settings, usually cut out against light backgrounds or in rounded frames.
- **Card art:** product pages show realistic credit and debit card renders.
- **Illustration:** flat, colourful vector scenes on campaign banners (approximate).

## 9. Voice & Microcopy

- Formal, reassuring, aspirational. English first, with Hindi and regional language options.
- Product names in Title Case; short benefit lines underneath.

Sample strings (seen on hdfcbank.com on 2026-11-16):

- "Discover Products", "Know more about Savings Account"
- "Speciale Gold: For the Achievers & Aspirers"
- "Savings Max: Your Trusted Savings Partner"
- "Giga Savings Account: Curated for Freelancers!"
- CTAs: "Apply Now", "Know More", "Login"

## 10. Do's and Don'ts

**Do**

- Use HDFC Blue `#004C8F` for primary actions and headings, white for the page.
- Put product teasers on `#ECEDF3` with 12px rounded corners.
- Use Open Sans throughout, Bold for titles and Semibold for buttons.
- Show product categories as tabs plus filter chips with counts.
- Keep the emblem's red limited to the logo.

**Don't**

- Don't use red as a general button colour.
- Don't set body text below 12px or in light grey on grey cards.
- Don't redraw the emblem or detach "HDFC BANK" from its navy field.
- Don't switch to a sparse, minimalist layout; HDFC is deliberately dense.
- Don't quote interest rates without checking the live site.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of HDFC Bank (India). White page, black headings, grey `#4A4A4A` body text, font `"Open Sans", Arial, sans-serif` (Bold titles, Semibold buttons, 14px body). Header: navy `#004C8F` utility bar with segment links (Personal, NRI, HNI, Wholesale, Agri, MSME), then a white bar with the navy HDFC Bank logo block (red-and-white square emblem) left, a wide search field, and a Login button right. Primary buttons are `#004C8F` with white text, 8px radius, about 40px tall, hover `#0056B3`; outline buttons have a 1px navy border. Main content: category tabs (Accounts, Deposits, Cards, Loans, Investments, Insurance) with a navy underline, then pill filter chips with counts, then a horizontal carousel of product teaser cards on `#ECEDF3` with 12px radius, a bold product name, one benefit line and "Apply Now" / "Know More" buttons. Accents: sky blue `#73B8FF`, success green `#00B947`, offer yellow `#FCC83E`. Keep it dense and formal; use ₹ with Indian digit grouping.

```css
:root {
  --hdfc-blue: #004C8F;
  --hdfc-blue-hover: #0056B3;
  --hdfc-red: #ED232A;
  --hdfc-sky: #73B8FF;
  --hdfc-bright-blue: #4DA3FF;
  --hdfc-teaser: #ECEDF3;
  --hdfc-bg: #FFFFFF;
  --hdfc-ink: #000000;
  --hdfc-text: #4A4A4A;
  --hdfc-border: #D7D9E2;
  --hdfc-success: #00B947;
  --hdfc-offer: #FCC83E;
  --hdfc-font: "Open Sans", Arial, sans-serif;
  --hdfc-radius-sm: 4px;
  --hdfc-radius-md: 8px;
  --hdfc-radius-lg: 12px;
  --hdfc-shadow-card: 0 4px 6px rgba(0,0,0,0.1);
  --hdfc-ease: ease-in-out;
}
```

---

Values are observed from the public product where available and otherwise approximate; this file is an unofficial reference and is not affiliated with or endorsed by HDFC Bank.

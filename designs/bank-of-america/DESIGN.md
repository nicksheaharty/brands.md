---
name: Bank of America
shortName: BofA
slug: bank-of-america
url: https://bankofamerica.com
category: Banking
tagline: "Navy and red flagscape, Connections type, pill buttons and a red sign-in strip on white."
updated: 2026-11-16
appStoreId: 284847138
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Bank Navy
    hex: "#012169"
    role: Logo wordmark, primary button fill, headings
  - name: Flag Red
    hex: "#E31837"
    role: Flagscape stripes, highlight headings, focus outline
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Signin Red
    hex: "#C41230"
    role: Sign-in header strip, red card heads, error text
  - name: Action Blue
    hex: "#0053C2"
    role: Links, secondary button hover fill
  - name: Royal Blue
    hex: "#0073CF"
    role: Info modules, campaign rule, icon fill
  - name: Black
    hex: "#000000"
    role: Headlines on white
  - name: Charcoal
    hex: "#333333"
    role: Body text
  - name: Grey 600
    hex: "#646464"
    role: Secondary text, captions
  - name: Grey 300
    hex: "#D5D5D5"
    role: Borders, dividers
  - name: Grey 100
    hex: "#EDEDEE"
    role: Section background
  - name: Grey 50
    hex: "#F5F5F5"
    role: Subdued panels
  - name: Dark Red
    hex: "#A50E28"
    role: Alternate primary button (red)
  - name: Sky Tint
    hex: "#CCE3F5"
    role: Button hover on dark, info tint
  - name: Navy Tint
    hex: "#8090B4"
    role: Pressed inset on navy buttons
  - name: Success Green
    hex: "#207804"
    role: Success text and icons
fonts:
  display:
    family: "Connections"
    fallback: "Source Sans 3"
    weights: [200, 400, 700]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 40, weight: 200, lineHeight: 1.2, tracking: "0" }
  - { role: H1, size: 36, weight: 200, lineHeight: 1.22, tracking: "0" }
  - { role: H2, size: 28, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: H3, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.44, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Fine Print, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 2, md: 4, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 2px 20px 0 rgba(0,0,0,0.12)" }
  - { name: Sticky Top, value: "0 12px 10px 0 rgba(0,0,0,0.12)" }
  - { name: Pressed Navy, value: "inset 0 4px 0 0 #012169" }
  - { name: Focus, value: "inset 0 0 0 2px #FFFFFF" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#333333"
  muted: "#646464"
  border: "#D5D5D5"
  accent: "#012169"
  accentText: "#FFFFFF"
  radius: 22
  buttonStyle: pill
---

# Bank of America

## 1. Visual Theme & Atmosphere

bankofamerica.com is the front door for one of the largest US banks: checking, savings, credit cards, home loans, auto loans, small business banking, and investing through Merrill. The site is red, white and blue in a measured way: mostly white, with deep navy type and buttons, a red sign-in header, and the red-and-navy flagscape logo top left.

What makes it recognisable:

- **The flagscape.** Three red and two navy diagonal stripes forming an abstract flag, next to a spaced-out uppercase "BANK OF AMERICA" wordmark in navy.
- **Navy as the action color.** Primary buttons are Bank Navy `#012169`; red is reserved for the brand mark, highlight headings, the sign-in strip and the alternate (red) CTA.
- **Connections type.** Headlines are set in Connections (served as `cnx-*`), a humanist sans; light weight for big headlines.
- **Pill buttons.** The Sparta design system gives buttons fully rounded ends (radius equals half the height: 32, 44 and 56px buttons).
- **A red sign-in strip.** The home page login box has a `#C41230` header bar with white text, a strong cue that this is the place to log in.
- **Moderate density.** Product tiles, rate highlights and "Preferred Rewards" promos sit in a clean grid with plenty of white.

Mood words: patriotic, steady, trustworthy, straightforward, big-bank.

## 2. Color Palette & Roles

Values from the Sparta (`spa-`) CSS on bankofamerica.com (November 2026).

| Name | Hex | Role |
|---|---|---|
| Bank Navy | `#012169` | Wordmark, flag stripes, primary button, focus inset |
| Flag Red | `#E31837` | Flag stripes, red highlight headings, 4px focus outline on inputs |
| Signin Red | `#C41230` | Sign-in header strip, red card headers, error subheadings, helper icons |
| Dark Red | `#A50E28` | Alternate primary button ("primary-alt") |
| Rose Tint | `#F9D1D7` | Hover fill for red buttons |
| Rose Pressed | `#E28897` | Pressed inset on red buttons |
| Action Blue | `#0053C2` | Links, secondary button hover fill |
| Royal Blue | `#0073CF` | Info modules, campaign tagline rule, icons |
| Bright Blue | `#009CDE` | Accent icons and charts |
| Sky Tint | `#CCE3F5` | Hover on navy-dark buttons, tints |
| Navy Tint | `#8090B4` | Pressed inset for "primary-dark" buttons |
| Ice | `#E5EDF8` | Light blue panels |
| Black | `#000000` | Headings in some modules |
| Charcoal | `#333333` | Body text |
| Grey 600 | `#646464` | Secondary text |
| Grey 400 | `#919191` | Disabled, placeholders |
| Grey 300 | `#D5D5D5` | Borders |
| Grey 200 | `#BABABA` | Strong dividers |
| Grey 100 | `#EDEDEE` | Section background |
| Grey 50 | `#F5F5F5` | Panels |
| White | `#FFFFFF` | Page background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#207804` | Confirmation text and icons |
| Warning | `#B05705` | Caution messages |
| Error | `#C41230` | Field errors, error panels |
| Info | `#0073CF` | Notices |
| Olive accent | `#616F03` | Data and icon accent |
| Plum accent | `#780032` / `#93335B` | Preferred Rewards tiers and charts (approximate role) |

### Dark sections

There is no dark mode. Navy `#012169` bands hold white text, with "primary-dark" buttons (white fill, navy text, hover `#CCE3F5`).

## 3. Typography

**Display:** Connections, Bank of America's brand typeface, served as `cnx-light`, `cnx-regular`, `cnx-medium`, `cnx-bold` and condensed cuts. Light is mapped to weight 200.

**UI and body:** Roboto (`roboto-regular`, `roboto-medium`, `roboto-bold`) for buttons, forms, links and the sign-in module. Some body copy also uses `cnx-regular`.

**Licensing and fallbacks:** Connections is licensed; use **Source Sans 3** as a substitute (light 300 for headlines). Roboto is on Google Fonts. Stack: `cnx-regular, Arial, Helvetica, sans-serif`.

### Scale (observed in CSS, desktop)

| Role | Size | Line height | Weight | Font |
|---|---|---|---|---|
| Hero | 40px | 48px | 200 (light) | Connections |
| H1 / section | 36px | 44px | 200 | Connections |
| Module heading ("Connect with us") | 32px | 40px | 200 | Connections Light |
| H2 | 28px | 36px | 400 | Connections |
| H3 / highlight tile heading | 20px | 28px | 400 | Connections (often red `#E31837`) |
| Lead | 18px | 26px | 400 | Connections |
| Body | 16px | 24px | 400 | Roboto / Connections |
| Link / small | 14px | 20px | 500 | Roboto Medium |
| Fine print | 12px | 16px | 400 | Roboto |

Line heights for hero and H1 are approximate.

### Rules

- Sentence case for headings and buttons.
- Highlight headings on product tiles are red `#E31837` 20px; body under them is charcoal.
- Links are underlined and set in Roboto Medium 14px in `#0053C2`.
- Legal and disclosure text is plentiful: 12px, `#646464`, under every offer.

## 4. Logo & Brand Mark

The logo (2018 refresh of the 1998 flagscape) pairs the flag symbol with a widely tracked, all-caps "BANK OF AMERICA" wordmark. The flagscape is three red stripes over two navy stripes, slanted up to the right like a waving flag.

- **Horizontal lockup:** navy wordmark left, flagscape right (as used in the site header).
- **Colors:** Bank Navy `#012169` and Flag Red `#E31837` on white (primary); all-white on navy or photography.
- **App icon:** the flagscape alone, red and navy on white.
- **Clear space:** at least the height of the flagscape on all sides (approximate).
- **Minimum size:** about 140px wide for the lockup; below that use the flagscape alone (min 24px).

Misuse:

- Do not recolor the stripes, reverse their order or flatten the slant.
- Do not use the flagscape as a decorative pattern or border.
- Do not tighten the wordmark tracking or set it in another font.
- Do not place the color logo on red or navy backgrounds; use all-white.

## 5. Components

### Buttons (Sparta `spa-btn`)

Buttons are pills: `border-radius` equals half the height. Font Roboto 500, `line-height: 1`, `transition: background-color .3s ease`.

| Size | Height | Font | Padding | Radius |
|---|---|---|---|---|
| Small | 32px | 14px | 8px 16px | 16px |
| Medium | 44px | 20px | 8px 24px | 22px |
| Large | 56px | 28px | 8px 32px | 28px |

| Variant | Default | Hover / focus | Active |
|---|---|---|---|
| Primary | navy `#012169` fill, white text, 1px navy border | fill `#0053C2`, border `#0053C2` | inset `0 4px 0 0 #012169` |
| Secondary | white fill, navy text, 1px navy border | fill `#0053C2`, white text | inset navy |
| Primary dark (on navy) | white fill, navy text | fill `#CCE3F5` | inset `0 4px 0 0 #8090B4` |
| Primary alt (red) | `#A50E28` fill, white text, 1px white border | fill `#F9D1D7`, border `#A50E28` | inset `0 4px 0 0 #E28897` |
| Text link | `#0053C2` Roboto Medium 14px, underlined | darker navy | |

Focus: `box-shadow: inset 0 0 0 2px #FFFFFF` inside the fill (navy buttons) or `inset 0 0 0 2px #012169` (light buttons).

```css
.boa-btn {
  font: 500 20px/1 "Roboto", Arial, sans-serif;
  color: #fff;
  background: #012169;
  border: 1px solid #012169;
  border-radius: 22px;
  height: 44px;
  padding: 8px 24px;
  transition: background-color .3s ease;
}
.boa-btn:hover, .boa-btn:focus { background: #0053C2; border-color: #0053C2; }
.boa-btn:focus-visible { box-shadow: inset 0 0 0 2px #fff; outline: none; }
.boa-btn:active { box-shadow: inset 0 4px 0 0 #012169; }
.boa-btn--secondary { background: #fff; color: #012169; }
.boa-btn--secondary:hover { background: #0053C2; color: #fff; }
```

### Sign-in module (signature)

- Card on the left of the hero, white, with a red `#C41230` header strip carrying "Log In" in white (approximate label).
- Fields "User ID" and "Password" (48px, 1px `#D5D5D5` border, small radius), a "Save user ID" checkbox, then a navy "Log In" button.
- Links under the button ("Forgot ID/Password?", "Security & Help", "Enroll") in `#0053C2` Roboto Medium 14px, underlined.
- Focus on text boxes: `outline: 4px solid #E31837` in some modules; navy inset elsewhere.

### Navigation

- Top utility row: segment tabs "Personal", "Small Business", "Wealth Management", "Businesses & Institutions", plus "Security", "About Us", "En español", "Contact us", "Help".
- Main row: flagscape logo left; product menus "Banking", "Credit Cards", "Loans", "Investing", "Better Money Habits"; search and a "Locations" link right (approximate labels).
- Active tab: navy text with a 4px red or navy underline.
- Mega-menus: white, three or four columns of links, a promo card on the right.

### Cards and tiles

- Product highlight tiles: white, radius 12-16px, `box-shadow: 0 2px 20px 0 rgba(0,0,0,.12)`, 24px padding, red 20px heading, 16px body, text link CTA.
- Red head variant: `.spa-card__head-wrapper-red` with `#C41230` top bar and 12px top corners.
- Offer cards: card art or photo on top, 16-18px radius on newer modules.

### Accordion ("squeezebox")

Rows separated by 1px `#D5D5D5`, title Roboto 16-18px navy, expand control in `#0053C2` 14px. Error panels color the subheading `#C41230`.

### Inputs and forms

- 44-48px tall, 1px `#D5D5D5` border, radius 2-4px, Roboto 16px.
- Focus: navy 2px inset or red 4px outline (sign-in).
- Error: helper text and icon `#C41230`.
- Disabled: `#EDEDEE` fill, `#919191` text.

### Modals

White, radius 4-8px, scrim `rgba(0,0,0,.75)`, close "X" top-right, title Connections 28px navy, footer pill buttons right-aligned.

## 6. Layout & Spacing

- **Spacing:** 8px base (8, 16, 24, 32, 48, 64), with 4px and 12px for tight UI.
- **Container:** about 1200px content width with 16-24px gutters; hero imagery full bleed up to 1440px (the hero assets are 1440px wide).
- **Grid:** 12 columns; product tiles in 3 or 4 columns on desktop, 1 on mobile.
- **Breakpoints:** roughly 640, 1024 and 1440px (approximate, Foundation-style small/medium/large).
- **Section spacing:** 48-64px on desktop.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Card | `0 2px 20px 0 rgba(0,0,0,.12)` | Tiles, cards |
| Sticky top | `0 12px 10px 0 rgba(0,0,0,.12)` | Header on scroll |
| Sticky bottom | `0 -12px 10px -3px rgba(0,0,0,.12)` | Bottom bars |
| Pressed | `inset 0 4px 0 0 <tint>` | Button active state |
| Modal | `2px 2px 15px 4px rgba(0,0,0,.8)` (approximate use) | Overlays |

- Button color transitions 300ms ease.
- Carousels slide in about 400ms (approximate). Little other motion.

## 8. Iconography & Imagery

- **Icons:** Sparta SVG icons, simple filled or line glyphs, colored by named tokens ("regal" reds, "royal" blues). 24-32px.
- **Photography:** warm, real-life imagery (families, homeowners, small-business owners, students), often cropped with the subject to one side so copy can sit on white or a light tint.
- **Better Money Habits:** illustrated education content in flat blue, red and grey.
- **Card art:** credit cards shown flat with a slight shadow.

## 9. Voice & Microcopy

Plain, supportive and responsible. The bank talks about "financial wellness" and practical next steps.

- Sentence case for headings and buttons.
- Clear, task-based CTAs: "Open an account", "Log In", "Apply now", "See rates", "Find a location", "Schedule an appointment".
- Security language is direct: "Are you sure you're on the right website?"
- Help text uses numbered steps and short sentences.

Sample strings (from the bankofamerica.com home page source on 2026-11-16):

- "Get the Mobile Banking app"
- "Save time managing finances, so you can spend more time living your life."
- "Wrong user ID or password"
- "1 item needs your attention"
- "Forgot user ID"

## 10. Do's and Don'ts

**Do**

- Use navy `#012169` for primary actions and red sparingly for brand moments.
- Make buttons full pills sized 32, 44 or 56px tall.
- Use a light humanist sans for large headlines and Roboto for UI.
- Put a red `#C41230` strip on the sign-in card header.
- Use soft, wide card shadows (`0 2px 20px rgba(0,0,0,.12)`).
- Underline text links.

**Don't**

- Don't make red the main button color across a page.
- Don't use square-cornered buttons.
- Don't redraw or animate the flagscape.
- Don't use dense, all-caps headlines; only the logo is spaced caps.
- Don't skip disclosure text under rates and offers.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Bank of America (bankofamerica.com). White page, body text `#333333`, secondary `#646464`, borders `#D5D5D5`, grey sections `#EDEDEE`. Brand colors: Bank Navy `#012169` and Flag Red `#E31837`. Primary buttons are navy pills (height 44px, radius 22px, Roboto 500, white text) that turn `#0053C2` on hover and show `inset 0 4px 0 0 #012169` when pressed; secondary buttons are white with a navy border. Headlines in "Source Sans 3" weight 300 (stand-in for Connections Light), 36-40px; UI and body in Roboto 16px/24px. Links are `#0053C2` Roboto Medium 14px, underlined. Include a sign-in card with a red `#C41230` header strip, two inputs and a navy "Log In" pill. Product tiles are white with 12-16px radius, `0 2px 20px rgba(0,0,0,.12)` shadow and red 20px headings. Copy is plain, helpful and sentence case, with small grey disclosures.

```css
:root {
  --brand-navy: #012169;
  --brand-red: #E31837;
  --brand-red-signin: #C41230;
  --brand-red-dark: #A50E28;
  --brand-red-tint: #F9D1D7;
  --brand-action: #0053C2;
  --brand-royal: #0073CF;
  --brand-sky-tint: #CCE3F5;
  --brand-navy-tint: #8090B4;
  --brand-ice: #E5EDF8;
  --brand-text: #333333;
  --brand-text-secondary: #646464;
  --brand-text-disabled: #919191;
  --brand-border: #D5D5D5;
  --brand-surface: #F5F5F5;
  --brand-section: #EDEDEE;
  --brand-bg: #FFFFFF;
  --brand-success: #207804;
  --brand-warning: #B05705;
  --brand-font-display: "Connections", "cnx-regular", "Source Sans 3", Arial, Helvetica, sans-serif;
  --brand-font-ui: "Roboto", Arial, Helvetica, sans-serif;
  --brand-radius-input: 2px;
  --brand-radius-card: 12px;
  --brand-btn-sm: 32px;
  --brand-btn-md: 44px;
  --brand-btn-lg: 56px;
  --brand-shadow-card: 0 2px 20px 0 rgba(0,0,0,.12);
  --brand-shadow-sticky: 0 12px 10px 0 rgba(0,0,0,.12);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Bank of America.

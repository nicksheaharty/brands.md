---
name: PayPal
slug: paypal
url: https://paypal.com
category: Finance
tagline: "Trusted-blue payments: deep navy marks, bright blue actions, pill buttons on clean white."
updated: 2026-11-16
appStoreId: 283646709
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: PayPal Navy
    hex: "#002991"
    role: Brand mark, app icon background, dark brand moments
  - name: Primary Blue
    hex: "#0551B5"
    role: Primary button fill (light mode)
  - name: Bright Blue
    hex: "#008CFF"
    role: Brand mark middle tone, illustrations
  - name: Sky
    hex: "#60CDFF"
    role: Brand mark light tone, accents on dark
  - name: Deep Blue
    hex: "#003087"
    role: Pressed states, tertiary buttons, classic logo blue
  - name: Ink
    hex: "#001435"
    role: Primary text and system color
  - name: White
    hex: "#FFFFFF"
    role: Page and card surface
  - name: Cloud
    hex: "#F0F2F9"
    role: App background, subtle fills
  - name: Mist
    hex: "#F5F7FB"
    role: Alternate background, hover surface
  - name: Slate
    hex: "#545D68"
    role: Secondary text, high-contrast borders
  - name: Border
    hex: "#CFD3D8"
    role: Low-contrast borders, info fills
  - name: Link Blue
    hex: "#1161CA"
    role: Links and primary hover
  - name: Gold
    hex: "#FFD140"
    role: Featured and promo highlight
  - name: Success
    hex: "#0C6E11"
    role: Success text and icons
  - name: Error
    hex: "#D50102"
    role: Error text and destructive actions
fonts:
  display:
    family: "PayPal Open"
    fallback: "Inter"
    weights: [400, 500, 700]
  body:
    family: "PayPal Open"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Display, size: 64, weight: 500, lineHeight: 0.906, tracking: "-0.04em" }
  - { role: Display Small, size: 40, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: Heading Large, size: 32, weight: 500, lineHeight: 1.125, tracking: "-0.02em" }
  - { role: Heading Small, size: 24, weight: 500, lineHeight: 1.333, tracking: "-0.02em" }
  - { role: Title, size: 16, weight: 500, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.286, tracking: "-0.02em" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.333, tracking: "-0.01em" }
radii: { sm: 6, md: 8, lg: 12, pill: 1000 }
spacing: [2, 4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Level 1, value: "0 1px 12px rgba(0,0,0,0.08)" }
  - { name: Level 2, value: "0 2px 14px rgba(0,0,0,0.10)" }
  - { name: Level 3, value: "0 4px 24px rgba(0,0,0,0.14)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F2F9"
  text: "#001435"
  muted: "#545D68"
  border: "#CFD3D8"
  accent: "#0551B5"
  accentText: "#FFFFFF"
  radius: 1000
  buttonStyle: pill
---

# PayPal

## 1. Visual Theme & Atmosphere

PayPal looks calm, clean and blue. The 2024 identity simplified everything: a black "PayPal" wordmark in its own typeface, and a stacked double-P mark in three blues (navy `#002991`, bright `#008CFF`, sky `#60CDFF`). Product screens are white or very pale blue-grey, text is a near-black navy (`#001435`), and every action is a fully rounded pill.

What makes it recognisable:

- **Blue on white, nothing loud.** One action blue (`#0551B5`) and one brand navy. No gradients in product UI. Gold (`#FFD140`) appears only for promos.
- **Pill buttons everywhere.** `border-radius: 1000px` with a 2px border is the base button style in PayPal's design system.
- **PayPal Open.** A custom grotesque with slight negative tracking (-0.02em on body, -0.04em on display).
- **Money is the hero.** Balance and amount figures are large and medium weight; everything around them is quiet.
- **Wallet-like app.** The mobile app is a stack of rounded cards: balance, send/request shortcuts, recent activity, offers.

Mood words: trustworthy, plain, global, friendly, careful.

Note: paypal.com returned a bot check when fetched for this file. Tokens below come from PayPal's design-system CSS served on developer.paypal.com and logos from PayPal's own CDN (paypalobjects.com). Consumer marketing page details are marked approximate.

## 2. Color Palette & Roles

Values from the PayPal UI design tokens (`--color-*`), light mode first.

| Name | Hex | Role |
|---|---|---|
| PayPal Navy | `#002991` | Mark, app icon, brand panels |
| Bright Blue | `#008CFF` | Mark mid tone |
| Sky | `#60CDFF` | Mark light tone, accents on dark |
| Primary main | `#0551B5` | Primary button fill |
| Primary hover / Link | `#1161CA` | Hover fill, links |
| Primary active | `#003087` | Pressed fill |
| Secondary / Promotion | `#0070E0` | Secondary emphasis, promo fills |
| Promotion soft | `#DDEEFF` | Light blue chips and banners |
| Promotion medium | `#AED7FF` | Selected range, chips |
| Ink (system main) | `#001435` | Primary text |
| Slate | `#545D68` | Secondary text, strong borders |
| Border low contrast | `#CFD3D8` | Input and card borders |
| Background main | `#F0F2F9` | App canvas |
| Background alt | `#F5F7FB` | Alternate sections, hover |
| Surface | `#FFFFFF` | Cards, page |
| Featured | `#FFD140` | Promo ribbons, gold highlight (text on it `#003087`) |
| Specialty | `#7252CC` | Rare accent (rewards, special) |

### Semantic

| State | Main | Subtle fill | Text on subtle |
|---|---|---|---|
| Success | `#0C6E11` | `#E6F8E7` | `#0C6E11` |
| Warning | `#FFBE4A` | `#FFF2C9` | `#A35441` |
| Error | `#D50102` | `#FFE8EC` | `#D50102` |
| Info | `#F0F2F9` | `#F0F2F9` | `#001435` |

Focus ring: 3px `#097FF5` with a 6px soft outline `rgba(209,229,249,0.9)`. Overlay scrim: `rgba(5,5,6,0.4)`.

### Dark mode

Background main `#1E2023`, surface `#000000`, primary `#097FF5`, links `#73B9FF`, hover `#AED7FF`, borders `#737B84`, dividers `rgba(255,255,255,0.06)`. Text turns white.

### Classic logo blues

The pre-2024 full-color logo (still served on some checkout surfaces) uses `#003087`, `#0070E0` and `#001C64`.

## 3. Typography

**Family:** PayPal Open (Regular, Medium, Bold), PayPal's proprietary sans introduced with the 2024 identity. Older surfaces still use PayPal Sans Big or Avenir Next. Not available for reuse. Free stand-in: **Inter** (or **Manrope** for a softer feel), with the same negative tracking.

```css
font-family: "PayPalOpen-Regular", "PayPal Open", "Inter", "Helvetica Neue", Arial, sans-serif;
```

### Scale (design-system tokens)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display | 64px | 400 / 500 / 700 | 58px | -0.04em |
| Display small | 40px | 400 / 500 | 44px | 0 |
| Heading large | 32px | 400 / 500 | 36px | -0.02em |
| Heading small | 24px | 400 / 500 | 32px | -0.02em |
| Title | 16px | 400 / 500 / 700 | 20px | -0.01em |
| Body | 14px | 400 | 18px | -0.02em |
| Body strong | 14px | 700 | 18px | -0.02em |
| Button | 14px | 500 | 18px | -0.02em |
| Caption | 12px | 400 / 500 | 16px | -0.01em |

**Rules:** sentence case everywhere. Headlines use Medium (500), rarely Bold. Amounts use tabular numerals and a smaller, raised currency symbol in big balance displays. Body copy is short; 14-16px in product, 18px on marketing pages (approx.).

## 4. Logo & Brand Mark

- **Wordmark:** "PayPal" in a custom heavy grotesque, set in black (the file PayPal serves as "wordmark-color" is black) or white on dark.
- **Mark:** two overlapping italic Ps. Full color uses navy `#002991`, bright blue `#008CFF` (overlap) and sky `#60CDFF`. The monotone version is white at 95%, 70% and 45% opacity on navy, which is the iPhone app icon.
- **Lockup:** mark left of wordmark, or wordmark alone in headers.
- **Clear space:** at least the height of the "a" bowl around the wordmark (approx.).
- **Minimum size:** wordmark 60px wide on screen (approx.).
- **Misuse:** do not mix the old 2014 three-blue logo with the new wordmark, recolor the Ps outside the blue family, add shadows or outline the letters.

## 5. Components

### Buttons

Base: pill, 2px border, PayPal Open Medium 14px, transition 200ms on color and background.

```css
.pp-btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; padding: 0 24px; border-radius: 1000px;
  border: 2px solid #0551B5; background: #0551B5; color: #FFFFFF;
  font: 500 14px/18px "PayPal Open", Inter, sans-serif; letter-spacing: -0.02em;
  transition: color .2s ease, background-color .2s ease, border-color .2s ease;
}
.pp-btn:hover  { background: #1161CA; border-color: #1161CA; }
.pp-btn:active { background: #003087; border-color: #003087; }
.pp-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px #097FF5, 0 0 0 6px rgba(209,229,249,.9); }

.pp-btn--secondary { background: transparent; color: #0551B5; }
.pp-btn--secondary:hover { background: #F0F2F9; }
.pp-btn--tertiary  { background: transparent; border-color: transparent; color: #003087; }
.pp-btn--small { height: 32px; padding: 0 16px; }
```

Marketing pages also use solid black or white pill buttons in the hero ("Sign Up", "Log In") (approx.).

### Smart payment button

The yellow "PayPal" checkout button merchants embed: gold `#FFC439` fill (approx.), pill or 4px corners, the PayPal wordmark centered, 45-55px tall. Secondary variants in blue `#0070BA`, black, white with border.

### Inputs

Floating-label text fields: 64px tall (approx.), 1px `#CFD3D8` border, radius 8px (`--border-radius-md`), label 14px `#545D68` that shrinks to 12px on focus, focus border 2px `#097FF5`. Error: border `#D50102`, helper text 12px red with an icon.

### Cards

White surface on `#F0F2F9` canvas, radius 12-16px (`lg`/`xl`), no border, elevation level 1. Inner padding 16-24px. Balance card shows "PayPal balance" label and a 40px amount.

### Activity list

Rows 64-72px: 40px circular avatar or merchant logo on the left, name 16px medium, date and type 12px `#545D68`, amount right-aligned in tabular figures (green-free; negative amounts show a minus sign, money in shows "+").

### Navigation

- **Web header:** white, 64-72px tall, wordmark left, nav items "Personal", "Business", "Developer" and a "Log In" outline pill plus "Sign Up" solid pill on the right (approx.).
- **App bottom bar:** Home, Payments, Wallet, Offers (approx.), 24px icons, active item navy.

### Chips and badges

Pill chips 32px tall, `#F0F2F9` fill, ink text; selected state black or navy fill with white text. Promo badges gold `#FFD140` with `#003087` text.

### Modals and sheets

Radius 16-24px on top corners for mobile sheets, scrim `rgba(5,5,6,0.4)`, close X top right, primary button full width at the bottom.

## 6. Layout & Spacing

- **Space tokens:** 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96px (`--space-25` to `--space-1200`).
- **Max width:** about 1280px for marketing content, 600-720px for forms and checkout flows (approx.).
- **Grid:** 12 columns desktop, 24-32px gutters; 4 columns mobile with 16px margins.
- **Density:** generous. One main action per screen in money flows.

## 7. Depth, Elevation & Motion

- **Elevation:** computed shadows, level 1 about `0 1px 12px rgba(0,0,0,0.08)`, level 2 about `0 2px 14px rgba(0,0,0,0.10)`. Flat cards on tinted canvas are the default.
- **Borders:** 1px normal, 2px emphasis (buttons), 3px focus.
- **Motion tokens:** hover 100ms, action 200ms, enter small 200ms / medium 300ms / large 500ms, exit 100-200ms.
- **Easing:** enter `cubic-bezier(0.05, 0.7, 0.1, 1)`, exit `cubic-bezier(0.3, 0, 0.8, 0.15)`, move `cubic-bezier(0.2, 0, 0, 1)`.
- Loading uses a shimmer in `#F0F2F9`.

## 8. Iconography & Imagery

- **Icons:** PayPal's own set, 24px, 1.5-2px rounded strokes, some filled for active states. Ink or navy.
- **Photography:** real people paying, shopping and sending money, warm natural light, often cut into rounded rectangles.
- **Illustration:** flat shapes in the three mark blues plus gold.
- **Merchant logos** appear in circles in activity lists.

## 9. Voice & Microcopy

Plain, reassuring, short. Explains money clearly and never jokes about security.

- "Send", "Request", "Pay", "Add money", "Transfer"
- "You sent $25.00 to Alex"
- "Your payment is on its way"
- "Log In", "Sign Up", "Next", "Done"
- Errors: "Something went wrong. Try again in a few minutes."

Sentence case for headings and buttons. Use the amount with currency symbol and two decimals.

## 10. Do's and Don'ts

**Do**

- Use pill buttons with a 2px border and medium weight labels.
- Keep text in ink `#001435`, secondary in `#545D68`.
- Put white cards on the `#F0F2F9` canvas.
- Use the navy-and-sky mark colors for brand moments, `#0551B5` for actions.
- Show amounts big and clear with tabular figures.

**Don't**

- Don't use the gold checkout button color for regular UI actions.
- Don't add gradients to buttons or cards.
- Don't mix the old 2014 logo with the new wordmark.
- Don't use pure black text for body copy in product.
- Don't hide fees or totals in small grey text.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of PayPal. Light theme: `#F0F2F9` canvas with white cards (radius 12-16px, soft shadow `0 1px 12px rgba(0,0,0,0.08)`), text in navy ink `#001435`, secondary text `#545D68`, borders `#CFD3D8`. Font `"PayPal Open", Inter, sans-serif` with -0.02em tracking; headings weight 500, body 14-16px. Primary buttons are full pills (radius 1000px), 48px tall, `#0551B5` with a 2px matching border and white text, hover `#1161CA`, pressed `#003087`, focus ring 3px `#097FF5`. Secondary buttons are outline pills. Brand moments use navy `#002991` with the double-P mark in `#008CFF` and `#60CDFF`. Promo badges in gold `#FFD140` with `#003087` text. Activity rows: 40px round avatar, name, date in 12px grey, amount right-aligned in tabular numbers. Copy is short, plain and reassuring.

```css
:root {
  --brand-navy: #002991;
  --brand-bright: #008CFF;
  --brand-sky: #60CDFF;
  --brand-primary: #0551B5;
  --brand-primary-hover: #1161CA;
  --brand-primary-active: #003087;
  --brand-secondary: #0070E0;
  --brand-promo-soft: #DDEEFF;
  --brand-ink: #001435;
  --brand-slate: #545D68;
  --brand-border: #CFD3D8;
  --brand-bg: #F0F2F9;
  --brand-bg-alt: #F5F7FB;
  --brand-surface: #FFFFFF;
  --brand-featured: #FFD140;
  --brand-success: #0C6E11;
  --brand-warning: #FFBE4A;
  --brand-error: #D50102;
  --brand-focus: #097FF5;
  --brand-scrim: rgba(5,5,6,0.4);
  --brand-font: "PayPal Open", "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-tracking: -0.02em;
  --brand-radius-sm: 6px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-radius-pill: 1000px;
  --brand-shadow-1: 0 1px 12px rgba(0,0,0,0.08);
  --brand-shadow-2: 0 2px 14px rgba(0,0,0,0.10);
  --brand-ease-enter: cubic-bezier(0.05, 0.7, 0.1, 1);
  --brand-ease-exit: cubic-bezier(0.3, 0, 0.8, 0.15);
  --brand-ease-move: cubic-bezier(0.2, 0, 0, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by PayPal.

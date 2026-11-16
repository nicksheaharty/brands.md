---
name: Shopify
slug: shopify
url: https://shopify.com
category: Commerce
tagline: "Near-black canvases, light-weight Inter headlines, pill buttons and a green shopping bag."
updated: 2026-11-16
appStoreId: 371294472
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Bag Green
    hex: "#95BF47"
    role: Logo bag, brand moments, merchant app icon
  - name: Night
    hex: "#02090A"
    role: Dark header and hero background on shopify.com
  - name: Aloe
    hex: "#36F4A4"
    role: Bright mint highlight on dark sections, active states, glow accents
  - name: White
    hex: "#FFFFFF"
    role: Light sections, primary button on dark
  - name: Bag Shade
    hex: "#5E8E3E"
    role: Shaded side of the bag, darker brand green
  - name: Polaris Green
    hex: "#008060"
    role: Classic admin primary and success green, still used in some marketing
  - name: Deep Teal
    hex: "#061A1C"
    role: Dark section surface, headings on light sections
  - name: Ink
    hex: "#121C1E"
    role: Raised dark surface, dark cards
  - name: Zinc 900
    hex: "#18181B"
    role: Header text on light theme, primary button fill on light
  - name: Zinc 500
    hex: "#71717A"
    role: Muted text, active link state
  - name: Zinc 300
    hex: "#D4D4D8"
    role: Borders, hover text on dark
  - name: Zinc 100
    hex: "#F4F4F5"
    role: Light section wash, quiet surfaces
  - name: Aloe 10
    hex: "#C1FBD4"
    role: Soft green highlight fill
  - name: Shop Purple
    hex: "#5433EB"
    role: Shop app and Shop Pay brand color
fonts:
  display:
    family: "Inter (Shopify-Inter build)"
    fallback: "Inter"
    weights: [300, 330, 400]
  body:
    family: "Inter (Shopify-Inter build)"
    fallback: "Inter"
    weights: [400, 420, 450, 550]
  mono:
    family: "SF Mono / system monospace"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 96, weight: 330, lineHeight: 1.0, tracking: "-0.025em" }
  - { role: Title 1, size: 64, weight: 330, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Title 3, size: 44, weight: 330, lineHeight: 1.1, tracking: "-0.005em" }
  - { role: Title 5, size: 28, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Title 7, size: 20, weight: 450, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 18, weight: 420, lineHeight: 1.55, tracking: "-0.006em" }
  - { role: Small, size: 14, weight: 420, lineHeight: 1.4, tracking: "0" }
radii: { sm: 6, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Card (approx.), value: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)" }
  - { name: Floating mock (approx.), value: "0 24px 64px rgba(0,0,0,0.35)" }
preview:
  bg: "#02090A"
  surface: "#121C1E"
  text: "#FFFFFF"
  muted: "#A1A1AA"
  border: "#1A292C"
  accent: "#FFFFFF"
  accentText: "#000000"
  radius: 9999
  buttonStyle: pill
---

# Shopify

## 1. Visual Theme & Atmosphere

Shopify has two faces that an agent should keep apart:

1. **shopify.com marketing.** A dark, cinematic site. The header and hero sit on near-black `#02090A`, headlines are huge and thin (Inter at weight 330, 96px on desktop), and the page alternates between dark teal-black sections and clean white ones. Product UI floats over the dark in rounded screenshots: storefronts, checkout sheets, order cards, POS terminals. A bright mint (`#36F4A4`) glows in a few places only.
2. **Shopify admin (Polaris).** The merchant back office. Light grey `#F1F1F1` canvas, white cards with 12px corners, dense 13px text, a dark top bar and a left nav. Quiet, practical and table-heavy.

The brand itself is the green shopping bag with a white "S". Green is the logo color, not the UI color: marketing buttons are black or white pills, and the admin's primary button is near-black.

What makes it recognisable:

- **Thin, large type on black.** Weight 330 headlines with tight negative tracking, mixed with rotating word animations ("Be the next ... AI all-star / household name / solo-preneur").
- **Pill buttons.** Every marketing CTA is fully rounded (`--radius-component-button: 9999px`). "Start for free" is the default label.
- **Merchant proof.** Rows of real storefront URLs and product shots (live stores like glossier.com and stanley1913.com appeared on the homepage when this was written).
- **Product as hero.** Floating cards of real UI: an order for "$125.00", a "Buy now" button, a checkout sheet.
- **Zinc neutrals.** Greys come from a Tailwind-style zinc ramp, so they read slightly cool.

Mood words: confident, entrepreneurial, modern, practical, global.

## 2. Color Palette & Roles

Marketing colors below come from the live CSS on shopify.com (theme tokens such as `--color-theme-bg-cta`, `--color-shade-*`, `--color-aloe-10`). Admin colors come from Polaris and are marked approximate where not confirmed today.

| Name | Hex | Role |
|---|---|---|
| Bag Green | `#95BF47` | Logo bag front, brand illustrations |
| Bag Shade | `#5E8E3E` | Logo bag side, darker brand green |
| Night | `#02090A` | Dark header (`--color-theme-bg-header`), hero |
| Deep Teal | `#061A1C` | Dark section background, heading color on light |
| Ink | `#121C1E` | Raised cards on dark |
| Header border dark | `#1A292C` | Hairline under the dark header, card borders on dark |
| Aloe | `#36F4A4` | Mint highlight, glows, small active markers on dark |
| Aloe 10 | `#C1FBD4` | Soft green fill |
| Pistachio 10 | `#D4F9E0` | Light green wash |
| Cyan | `#30DEEE` | Secondary glow accent in illustrations |
| Violet | `#751BE9` | Accent in AI and Sidekick illustrations |
| Shop Purple | `#5433EB` | Shop app, Shop Pay (`--color-shop-purple`) |
| Polaris Green | `#008060` | Classic admin primary and success |
| White | `#FFFFFF` | Light sections, primary pill on dark |

### Neutrals (zinc ramp, from live CSS)

| Token | Hex | Use |
|---|---|---|
| shade-10 | `#F4F4F5` | Light wash, quiet card |
| shade-20 | `#E4E4E7` | Light header border |
| shade-30 | `#D4D4D8` | Borders, hover text on dark |
| shade-40 | `#A1A1AA` | Muted text on dark, link active |
| shade-50 | `#71717A` | Muted text on light |
| shade-60 | `#52525B` | Disabled fill on dark |
| shade-70 | `#3F3F46` | Primary hover on light |
| shade-90 | `#18181B` | Header text on light |

### Button theme tokens

| Token | Light theme | Dark theme |
|---|---|---|
| `bg-cta` | `#000000` | `#FFFFFF` |
| `bg-cta-hover` | `#3F3F46` | `#D4D4D8` |
| `bg-cta-active` | `#71717A` | `#A1A1AA` |
| `bg-cta-disabled` | `#D4D4D8` | `#52525B` |
| `content-cta-inverse` | `#FFFFFF` | `#000000` |

### Admin (Polaris) semantic colors (approximate)

| State | Hex | Use |
|---|---|---|
| Canvas | `#F1F1F1` | Admin page background |
| Surface | `#FFFFFF` | Cards |
| Text | `#303030` | Primary text |
| Text secondary | `#616161` | Help text, meta |
| Border | `#E3E3E3` | Card and table borders |
| Primary fill | `#303030` | Primary button |
| Success | `#29845A` text, `#CDFEE1` badge | Paid, Fulfilled |
| Critical | `#8E0B21` text, `#FEDAD9` badge | Errors, Unpaid |
| Warning | `#5E4200` text, `#FFEB78` badge | Pending, Partially fulfilled |
| Info | `#00527C` text, `#E0F0FF` badge | Notices |

### Dark and light

shopify.com treats dark as the default hero and header theme; sections can flip to white with the same component tokens inverted. The admin is light-first and has no full dark theme for merchants at the time of writing.

## 3. Typography

**Family:** the site loads `Shopify-Inter`, Shopify's hosted variable build of Inter, with fallbacks `Helvetica, Arial, sans-serif`. Variable weights are used precisely: 330 for titles, 420 for body, 450 for small titles, 550 for bold.

**Licensing:** Inter is open source (SIL OFL). Use **Inter** from Google Fonts with a variable weight axis; static 300/400/500 are close enough.

```css
font-family: "Shopify-Inter", "Inter", Helvetica, Arial, sans-serif;
font-optical-sizing: auto;
```

### Scale (desktop values from live tokens; smaller steps used under 900px)

| Role | Token | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display | `--font-size-dsp` | 96px (70px tablet) | 330 | 1.0 | -0.025em |
| Title 1 | `t1` | 64px (54 / 44) | 330 | 1.05 | -0.02em |
| Title 2 | `t2` | 56px (48 / 36) | 330 | 1.08 | -0.01em |
| Title 3 | `t3` | 44px (36 / 30) | 330 | 1.1 | -0.005em |
| Title 4 | `t4` | 34px (30 / 26) | 330 | 1.15 | 0 |
| Title 5 | `t5` | 28px (26 / 22) | 400 | 1.2 | 0 |
| Title 6 | `t6` | 24px (22 / 18) | 420 | 1.25 | 0 |
| Title 7 | `t7` | 20px (18 / 16) | 450 | 1.3 | 0 |
| Body large | `body-lg` | 20px | 400 | 1.5 | 0 |
| Body | `body-base` | 18px (16 mobile) | 420 | 1.55 | -0.006em |
| Small | `body-sm` | 14px | 420 | 1.4 | 0 |
| Button large | `button-lg` | 18px | 450 | 1 | 0 |

Admin (Polaris): Inter, 13px/20px body at 450, headings 14-20px at 650, numbers in tables use tabular figures (approximate).

### Rules

- Sentence case everywhere: "Start for free", "Sell everywhere people shop."
- Headlines are light, never bold. Emphasis comes from size and a second line in muted zinc.
- Rotating words in the hero keep the same weight and swap with a vertical slide.
- Use `font-variant-numeric: tabular-nums` for prices and order totals.

## 4. Logo & Brand Mark

The logo is the **shopping bag** (green front `#95BF47`, darker side `#5E8E3E`, white italic "S" on the front) followed by the lowercase **shopify** wordmark in a heavy, slightly slanted custom sans. The bag alone is the app icon and favicon.

- **Color versions:** full color on white (primary), full color with white wordmark on dark, all-white on photos or dark green, all-black for single color print.
- **Clear space:** at least the width of the bag handle loop around the lockup.
- **Minimum size:** about 80px wide for the full lockup on screen, 20px for the bag alone.
- **App icon:** the shaded green bag centered on white.

Misuse:

- Do not recolor the bag (no Aloe mint, no Shop purple).
- Do not set "shopify" in Inter or redraw the wordmark.
- Do not separate the "S" from the bag or rotate the bag.
- Do not place the full-color logo on mid-green backgrounds where the bag disappears.

## 5. Components

### Buttons (marketing)

All CTAs are pills. Label 16-18px at weight 450-550.

| Variant | Background | Text | Border | Height |
|---|---|---|---|---|
| Primary on dark | `#FFFFFF` | `#000000` | none | 48-56px |
| Primary on light | `#000000` | `#FFFFFF` | none | 48-56px |
| Secondary on dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | same |
| Secondary on light | transparent | `#000000` | 1px `#000000` | same |
| Text link | none | `#9797A2` on dark | none | n/a |

States: hover darkens or lightens one zinc step (`#D4D4D8` on dark, `#3F3F46` on light), active goes to `#A1A1AA` / `#71717A`, disabled uses `#52525B` / `#D4D4D8`. Focus uses a 2px outline in the opposite theme color with 2px offset. Transition 150ms `cubic-bezier(.4,0,.2,1)`.

```css
.btn-primary {
  font: 500 18px/1 var(--brand-font);
  padding: 16px 28px;
  border-radius: 9999px;
  background: var(--brand-cta-bg);
  color: var(--brand-cta-text);
  border: 0;
  transition: background-color .15s cubic-bezier(.4,0,.2,1);
}
.btn-primary:hover { background: var(--brand-cta-bg-hover); }
```

### Navigation

- Sticky header, about 64-72px tall, `#02090A` on dark pages and white on light ones, with a 1px bottom border (`#1A292C` dark, `#E4E4E7` light).
- Logo left (bag plus wordmark, white wordmark on dark). Menu: "Why Shopify", "Products", "Pricing", "Enterprise", plus a seasonal "Editions" link.
- Right: "Log in" text link and a "Start for free" pill.
- Mega menus open full-width with grouped columns ("Build your website", "Sell anywhere", "Run your business") and one-line descriptions under each item in muted zinc.

### Cards

- Dark cards: `#121C1E` fill, 1px `#1A292C` border, 16px radius, 24-32px padding.
- Light cards: `#F4F4F5` fill or white with `#E4E4E7` border, 12-16px radius.
- Product mock cards (order, checkout, "Buy now"): white, 12-16px radius, floating with a large soft shadow over dark sections.

### Inputs

Marketing email capture: 48-56px tall, pill or 8px radius, white field with zinc border `#D4D4D8`, 16px text, attached pill button. Focus: 2px black (light) or white (dark) ring.

### Admin components (Polaris, approximate)

- **Page:** `#F1F1F1` canvas, title 20px/650 with breadcrumb arrow, primary action top right.
- **Card:** white, 12px radius, subtle shadow `0 1px 0 rgba(26,26,26,0.07)` plus inset border, 16px padding.
- **Primary button:** near-black `#303030` with a light top inner highlight, 8px radius, 28-32px tall, 13px/550 text.
- **Secondary button:** white with a soft bevel shadow, 8px radius.
- **Index table:** 13px rows about 40px tall, checkbox column, status badges, hover `#F7F7F7`.
- **Badges:** pill, 12px/550, colored fills from the semantic table (Paid, Fulfilled, Unfulfilled, Draft).
- **Top bar:** `#1A1A1A` with a centered search field "Search" and store switcher on the right.
- **Left nav:** 240px, items "Home", "Orders", "Products", "Customers", "Content", "Analytics", "Marketing", "Discounts", then "Sales channels" and "Apps" groups.

### Tabs and toggles

Marketing uses segmented pill tabs ("Payments", "Shipping", "Customers", "Retail", "Inventory", "Catalog") on dark with the active tab filled white and black text. Admin uses underline tabs at 13px.

### Signature: the merchant strip

A horizontal, auto-scrolling strip of storefront cards, each labeled with the store URL in small muted text. Cards are tall (portrait), 12-16px radius, with real product photography.

## 6. Layout & Spacing

- **Breakpoints (live tokens):** xs 340px, sm 640px, md 900px, lg 1200px, xl 1600px.
- **Container:** content usually maxes around 1280-1440px with 24-40px side gutters; text blocks cap at `--container-4xl` (56rem) or `--container-6xl` (72rem).
- **Grid:** 12 columns on desktop, bento-style feature grids with mixed 2:1 and 3:1 spans (`lg:grid-cols-[3fr_1fr]`).
- **Section spacing:** 96-160px between sections on desktop, 64px on mobile.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- **Admin:** max page width about 1000px for detail pages and full width for index tables; 16-20px gaps between cards.

## 7. Depth, Elevation & Motion

- Dark sections rely on surface steps (`#02090A` to `#061A1C` to `#121C1E`) and hairline borders more than shadows.
- Floating UI mocks over dark use a large, soft black shadow, approximately `0 24px 64px rgba(0,0,0,0.35)`.
- Light cards: approximately `0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)`.
- Glows: radial gradients of Aloe `#36F4A4` or cyan `#30DEEE` at low alpha behind product shots, sometimes animated (`cc-glow 6s ease-in-out infinite`, `cc-float 6s`).
- **Easing:** `--ease-uc: cubic-bezier(.22,1,.36,1)` for reveals; default transitions 150ms `cubic-bezier(.4,0,.2,1)`.
- Scroll-linked reveals: text fades up 16-24px, cards scale from 0.96 to 1. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** Polaris icons, 20px grid, 1.5-2px rounded strokes or simple filled shapes, single color. Marketing uses the same family at 24px in white on dark.
- **Photography:** real merchants and real products. Warm, natural light, people making and packing things, storefront screenshots on devices.
- **Product UI:** crisp screenshots and simplified mockups of checkout, POS hardware and admin, placed on dark with glow.
- **Illustration:** sparing. Abstract orbit and gradient motifs for AI and Sidekick features in violet and cyan.

## 9. Voice & Microcopy

Direct, encouraging, a bit bold. Talks to entrepreneurs as "you". Short sentences, often two-part.

- Hero: "Be the next big thing. Dream big and build fast on Shopify."
- Section: "Sell everywhere people shop. Online and in person. Across AI and on social."
- Feature: "Control everything in one place."
- CTA: "Start for free", "Log in", "Try Shopify for free"
- Admin: "Add product", "Create order", "Mark as fulfilled", "Unfulfilled", "Payment pending"

Sentence case, no exclamation marks in UI, numbers written as numerals.

## 10. Do's and Don'ts

**Do**

- Use near-black `#02090A` for the hero and header and switch sections between dark and white.
- Set headlines in Inter at weight 300-330 with -0.02em tracking.
- Make every marketing button a pill, white on dark or black on light.
- Show real storefronts, products and checkout UI.
- Keep the green for the logo and small brand moments.
- Use Aloe mint as a highlight, not a fill for large areas.

**Don't**

- Don't make buttons green on the marketing site.
- Don't use bold 700 headlines.
- Don't use warm greys; stay on the zinc ramp.
- Don't mix Polaris admin density into marketing pages, or marketing scale into the admin.
- Don't redraw or recolor the bag.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Shopify's marketing site. Dark header and hero on `#02090A`, dark sections on `#061A1C` with raised cards `#121C1E` and 1px `#1A292C` borders, alternating with white sections. Font: Inter (`"Shopify-Inter", Inter, Helvetica, Arial, sans-serif`). Headlines are very large and light: 96px display and 64px titles at weight 330 (use 300 if no variable font), tracking -0.02em, line height about 1.05. Body is 18px at 420. All buttons are pills (9999px radius), 48-56px tall: white with black text on dark, black with white text on light; hover one zinc step (`#D4D4D8` / `#3F3F46`). Neutrals follow the zinc ramp (`#F4F4F5`, `#E4E4E7`, `#D4D4D8`, `#A1A1AA`, `#71717A`, `#18181B`). Use mint `#36F4A4` only for small glows and highlights. Show real product UI floating over the dark (order cards, checkout, "Buy now") with soft black shadows. The logo is the green bag `#95BF47` with the lowercase shopify wordmark. Copy is short and encouraging: "Start for free".

```css
:root {
  --brand-green: #95BF47;
  --brand-green-shade: #5E8E3E;
  --brand-night: #02090A;
  --brand-deep-teal: #061A1C;
  --brand-ink: #121C1E;
  --brand-border-dark: #1A292C;
  --brand-aloe: #36F4A4;
  --brand-aloe-10: #C1FBD4;
  --brand-cyan: #30DEEE;
  --brand-violet: #751BE9;
  --brand-shop-purple: #5433EB;
  --brand-polaris-green: #008060;
  --brand-white: #FFFFFF;
  --brand-zinc-100: #F4F4F5;
  --brand-zinc-200: #E4E4E7;
  --brand-zinc-300: #D4D4D8;
  --brand-zinc-400: #A1A1AA;
  --brand-zinc-500: #71717A;
  --brand-zinc-600: #52525B;
  --brand-zinc-700: #3F3F46;
  --brand-zinc-900: #18181B;
  --brand-cta-bg: #FFFFFF;
  --brand-cta-text: #000000;
  --brand-cta-bg-hover: #D4D4D8;
  --brand-font: "Shopify-Inter", "Inter", Helvetica, Arial, sans-serif;
  --brand-weight-title: 330;
  --brand-weight-body: 420;
  --brand-weight-bold: 550;
  --brand-radius-sm: 6px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08);
  --brand-shadow-float: 0 24px 64px rgba(0,0,0,0.35);
  --brand-ease: cubic-bezier(.22,1,.36,1);
  --brand-ease-ui: cubic-bezier(.4,0,.2,1);
  --brand-duration: 150ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Shopify.

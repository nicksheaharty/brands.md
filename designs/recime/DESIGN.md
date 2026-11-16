---
name: ReciMe
slug: recime
url: https://recime.app
category: Food
tagline: "Warm cookbook feel: parchment, blueberry blue, corn yellow, Caslon heads and mango CTAs."
updated: 2026-11-16
appStoreId: 1593779280
logoBackground: "#F9F4E8"
theme: light
colors:
  - name: Blueberry
    hex: "#4E8DDF"
    role: Brand blue, app icon, hero and header background, script accents
  - name: Corn
    hex: "#FFD91B"
    role: Brand yellow, logo mark on blue, highlights
  - name: Mango
    hex: "#FE6F0C"
    role: Primary CTA background ("Try now for free")
  - name: Parchment
    hex: "#F9F4E8"
    role: Page canvas, logo on blue
  - name: Pepper 900
    hex: "#1B1710"
    role: Primary text
  - name: Pepper 800
    hex: "#625B53"
    role: Secondary text
  - name: White
    hex: "#FFFFFF"
    role: Cards and surfaces
  - name: Parchment Light
    hex: "#FCFAF3"
    role: Secondary canvas
  - name: Pepper 300
    hex: "#EEEAE2"
    role: Borders, disabled fills
  - name: Mango Light
    hex: "#FEA96D"
    role: Illustration shapes, soft accents
  - name: Corn Brand
    hex: "#FFBE1B"
    role: Deeper yellow for stars and badges
  - name: Plum
    hex: "#A259CC"
    role: Category accent
  - name: Lime
    hex: "#9AD15B"
    role: Category accent, fresh produce
  - name: Strawberry
    hex: "#F75F52"
    role: Category accent, errors (600 `#D13930`)
  - name: Blueberry Light
    hex: "#E1EDFF"
    role: Info backgrounds
fonts:
  display:
    family: "Caslon"
    fallback: "Libre Caslon Text"
    weights: [300]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 64, weight: 300, lineHeight: 1.1, tracking: "-0.03em" }
  - { role: Script Accent, size: 72, weight: 400, lineHeight: 1, tracking: "0" }
  - { role: Section Mobile, size: 40, weight: 300, lineHeight: 1.2, tracking: "-0.03em" }
  - { role: Card Title, size: 24, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: Button, size: 21, weight: 600, lineHeight: 1.41, tracking: "0" }
  - { role: FAQ, size: 19, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.44, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 6, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Soft, value: "0 1px 2px rgba(0,0,0,0.15)" }
  - { name: Card, value: "0 8px 24px rgba(27,23,16,0.08)" }
preview:
  bg: "#F9F4E8"
  surface: "#FFFFFF"
  text: "#1B1710"
  muted: "#625B53"
  border: "#EEEAE2"
  accent: "#FE6F0C"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# ReciMe

## 1. Visual Theme & Atmosphere

ReciMe is a recipe organiser that imports recipes from social video, then turns them into meal plans and grocery lists. Its look is a cosy kitchen notebook with a pop of cartoon colour: warm parchment paper (`#F9F4E8`), light-weight Caslon serif headlines, a handwritten script for one word per headline, and a palette named after food (blueberry, corn, mango, pepper, plum, lime, strawberry).

What makes it recognisable:

- **Blueberry and corn.** The app icon and site header are blueberry `#4E8DDF` with the yellow corn `#FFD91B` mark. That pairing is the brand at a glance.
- **Serif plus script.** Headlines in Caslon Light (300) at 64px with -0.03em tracking, with a word swapped into a blue script face ("Meal plan *with ease*", "Trusted by 15m+ *cooks*").
- **Mango CTAs.** The main button is a bright orange `#FE6F0C`, white semibold text, 8px corners, 60px tall.
- **Paper, not white.** Pages sit on parchment; white is for cards and phone screens.
- **Organic blob shapes** in mango, corn and plum frame phone mockups and food photos.

Mood words: homely, upbeat, practical, foodie, approachable.

## 2. Color Palette & Roles

Token names and values from the recime.app CSS (`--color-*`).

| Family | 100 | 300 | 500 | 600 | 700 / other |
|---|---|---|---|---|---|
| Blueberry | `#E1EDFF` | `#8FC0FF` | `#4E8DDF` | `#4372B8` | `#375C91` |
| Corn | `#FFF6C0` | (200) `#FFEE8A` | `#FFD91B` | `#E5C218` | brand `#FFBE1B`, deep `#E59900` |
| Mango | `#FEE3CE` | `#FEA96D` | `#FE6F0C` | `#CB5A09` | `#984307` |
| Plum | | | `#A259CC` | `#8B47A8` | `#6F3784`, 900 `#39173C` |
| Lime | `#EFF8E1` | (200) `#D7EFB9` | `#9AD15B` | `#7FB547` | `#6A9A2F` |
| Strawberry | `#FFE5E2` | | `#F75F52` | `#D13930` | `#AB2A23` |

### Neutrals

| Name | Hex | Role |
|---|---|---|
| Pepper 100 | `#FFFFFF` | Surface primary, text on accent |
| Pepper 200 | `#F9F7F2` | Surface subtle |
| Pepper 300 | `#EEEAE2` | Disabled fills, borders |
| Pepper 400 | `#E0DCD3` | Borders |
| Pepper 500 | `#CEC7BE` | Dividers |
| Pepper 600 | `#ACA59B` | Disabled text |
| Pepper 700 | `#8A8379` | Tertiary text |
| Pepper 800 | `#625B53` | Secondary text |
| Pepper 900 | `#1B1710` | Primary text |
| Parchment 100-500 | `#FFFDF8`, `#FCFAF3`, `#F9F4E8`, `#F5EDD8`, `#F1E3C8` | Canvases, logo on blue |

### Semantic roles (from the CSS)

| Token | Value |
|---|---|
| background-accent-primary | Mango 500 `#FE6F0C` (hover Mango 600 `#CB5A09`) |
| background-canvas-primary | Parchment 300 `#F9F4E8` |
| background-canvas-secondary | Parchment 200 `#FCFAF3` |
| text-pepper-primary | `#1B1710` |
| text-pepper-secondary | `#625B53` |
| text-accent-primary | Mango 500 |
| semantic-error-bold | Strawberry 600 `#D13930` |
| semantic-info-subtle | Blueberry 100 `#E1EDFF` |

There is no dark theme on the site. The app has a light UI (approx.).

## 3. Typography

**Families (from the site CSS):**

- **Caslon** (Light 300, plus italic): headlines. A commercial Caslon cut. Free stand-in: **Libre Caslon Text** or **Libre Caslon Display**.
- **Morello**: hand-lettered script for one accent word per headline, set in blueberry. Commercial. Stand-in: **Caveat** or **Kalam**.
- **Inter**: all body copy, buttons, FAQs. Free on Google Fonts.
- Recoleta and Poppins are also loaded for some pages (approx.).

```css
--font-caslon: "caslon", "Libre Caslon Text", Georgia, serif;
--font-morello: "morello", "Caveat", cursive;
--font-inter: "Inter", system-ui, sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero / section (desktop) | 64px | 300 Caslon | 1.1 | -0.03em (-1.92px) |
| Script accent | 72px | 400 Morello | 1.0 | 0 |
| Section (mobile) | 40px | 300 Caslon | 48px | -1.2px |
| Testimonial title | 20-24px | 300 Caslon | 30px | 0 |
| CTA button | 21.25px | 600 Inter | 30px | 0 |
| FAQ question | 19px | 400 Inter | 1.5 | 0 |
| Body | 16px | 400 Inter | 23px | 0 |
| Small | 14px | 400 Inter | 21px | 0 |

**Rules:** headlines are sentence case, light weight and tightly tracked. Only one script word per headline. Body is never serif.

## 4. Logo & Brand Mark

- **Mark:** a chunky, slightly tilted shape that reads as a chef's hat and a spoon (approx. description), drawn as a single filled form.
- **Wordmark:** "ReciMe" in a heavy, italic, rounded display face with a capital M mid-word.
- **Colors:** parchment `#F9F4E8` on blueberry in the site header; corn `#FFD91B` mark on blueberry on the app icon; dark pepper `#1B1710` on light backgrounds.
- **Clear space:** half the mark height (approx.).
- **Minimum size:** 24px tall for the lockup (approx.).
- **Misuse:** do not split the mark into separate colors, outline it, or set the wordmark upright.

## 5. Components

### Buttons

```css
.rm-btn-primary {                   /* "Try now for free" */
  height: 60px; padding: 0 20px; min-width: 269px;
  background: #FE6F0C; color: #FFFFFF;
  font: 600 21.25px/30px Inter, sans-serif;
  border-radius: 8px; border: none;
  transition: background-color .2s;
}
.rm-btn-primary:hover { background: #CB5A09; }

.rm-btn-dark {                      /* mobile app badge block */
  background: #1A1A1A; color: #FFFFFF;
  padding: 8px 18px; border-radius: 8px;
}
.rm-link { color: inherit; text-underline-offset: 4px; }
.rm-link:hover { text-decoration: underline; }
```

Secondary buttons (approx.): white fill, 1px `#E0DCD3` border, pepper text. Header logo grows to `scale(1.05)` on hover over 200ms.

### Header

Full-width blueberry `#4E8DDF` bar, parchment logo left (188x40 desktop, 125x28 mobile), 24px vertical padding on mobile, 12px on desktop, 48px side padding desktop, CTA right.

### Hero

Blueberry background, big Caslon headline in parchment or pepper, phone mockups with recipe screens, mango and corn blobs behind. App store badges below.

### Feature sections

Alternating left/right: headline + script word, 2-3 lines of Inter body, a phone or card mockup on a colored blob (`grocery_list_shape`, `meal_plan_shape`). Canvas parchment.

### Testimonial cards

White cards, 16px radius (approx.), 24px padding, Caslon title ("I'm obsessed!"), Inter quote 14-16px, name in semibold below. Horizontally scrolling row with 16px gap.

### FAQ accordion

Rows separated by 1px `#E0DCD3`, question 19px Inter, plus/minus icon right, answer in pepper 800.

### Recipe card (app, approx.)

Square or 4:5 food photo with 12-16px radius, title in 16px semibold below, small source chip (TikTok, Instagram icon) and time. Grocery list rows: checkbox, item, quantity, grouped by aisle with small caps headers.

### Badges

"As featured on" logo strip in grey; star ratings in corn brand `#FFBE1B`.

## 6. Layout & Spacing

- **Spacing base:** 4px (`--spacing: .25rem`), Tailwind scale.
- **Radii tokens:** sm 4, md 6, lg 8, xl 12, 2xl 16, 3xl 24px.
- **Max width:** about 1200-1280px content, 48px side padding desktop, 24px mobile (approx.).
- **Breakpoint:** `lg` 1024px switches headline size 40 to 64px and header layout.
- **Density:** relaxed, image-led sections 96-128px apart.

## 7. Depth, Elevation & Motion

- **Mostly flat.** Color blobs and paper texture give depth instead of shadows.
- **Shadows:** `drop-shadow-sm: 0 1px 2px rgba(0,0,0,0.15)` on mockups; soft card shadow `0 8px 24px rgba(27,23,16,0.08)` (approx.).
- **Motion:** 200ms color and transform transitions, gentle scale on hover, logo strips and testimonials scroll horizontally. Pulse and spin only for loading.

## 8. Iconography & Imagery

- **Icons:** simple rounded line icons, 24px, pepper or white.
- **Photography:** overhead and close-up home-cooked food, warm light, hands in frame, real kitchens.
- **Shapes:** hand-drawn blobs and squiggles in mango, corn, plum and blueberry.
- **Product shots:** phone screens showing imported recipes, meal plans and grocery lists.

## 9. Voice & Microcopy

Friendly, enthusiastic home cook. Short benefit-led lines.

- Read on recime.app today: "World's most popular recipe organizer", "All your recipes, on your phone", "Create grocery lists, in seconds", "Meal plan with ease", "Trusted by 15m+ cooks", "Try now for free"
- FAQ tone: "Yes, absolutely! The free version of ReciMe is limited to 5 recipe imports per week."
- App strings (approx.): "Import recipe", "Add to meal plan", "Add to grocery list", "Cook mode"

Sentence case. Exclamation marks are allowed in testimonials and FAQs, not in UI labels.

## 10. Do's and Don'ts

**Do**

- Put pages on parchment `#F9F4E8`, cards on white.
- Use light Caslon headlines with tight tracking and one blueberry script word.
- Make the main CTA mango `#FE6F0C` with white semibold text.
- Use blueberry with corn yellow for brand moments.
- Show real food and real phone screens.

**Don't**

- Don't use bold serif headlines.
- Don't set more than one script word per heading.
- Don't use pure white page backgrounds or cold greys.
- Don't use mango for anything other than the primary action.
- Don't put the corn mark on yellow or orange backgrounds.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of ReciMe. Warm parchment canvas `#F9F4E8`, white cards, text `#1B1710` with secondary `#625B53` and borders `#E0DCD3`. Headlines in a light Caslon (fallback Libre Caslon Text, weight 300) at 40px mobile / 64px desktop with -0.03em tracking, with one word swapped into a blue handwritten script (fallback Caveat) in blueberry `#4E8DDF` at about 72px. Body in Inter 16px. The header and hero use a blueberry background with a parchment logo and corn yellow `#FFD91B` accents. Primary CTA: mango `#FE6F0C`, white Inter 600 at 21px, 60px tall, 8px radius, hover `#CB5A09`. Decorate mockups with organic blobs in mango `#FEA96D`, corn and plum `#A259CC`. Testimonial cards are white with 16px radius. Tone is friendly and food-focused.

```css
:root {
  --brand-blueberry: #4E8DDF;
  --brand-blueberry-100: #E1EDFF;
  --brand-blueberry-600: #4372B8;
  --brand-corn: #FFD91B;
  --brand-corn-brand: #FFBE1B;
  --brand-mango: #FE6F0C;
  --brand-mango-hover: #CB5A09;
  --brand-mango-300: #FEA96D;
  --brand-mango-100: #FEE3CE;
  --brand-plum: #A259CC;
  --brand-lime: #9AD15B;
  --brand-strawberry: #F75F52;
  --brand-error: #D13930;
  --brand-canvas: #F9F4E8;
  --brand-canvas-2: #FCFAF3;
  --brand-surface: #FFFFFF;
  --brand-surface-subtle: #F9F7F2;
  --brand-border: #E0DCD3;
  --brand-text: #1B1710;
  --brand-text-secondary: #625B53;
  --brand-text-tertiary: #8A8379;
  --brand-font-display: "caslon", "Libre Caslon Text", Georgia, serif;
  --brand-font-script: "morello", "Caveat", cursive;
  --brand-font: "Inter", system-ui, sans-serif;
  --brand-radius-sm: 6px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-xl: 24px;
  --brand-shadow-soft: 0 1px 2px rgba(0,0,0,0.15);
  --brand-shadow-card: 0 8px 24px rgba(27,23,16,0.08);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by ReciMe.

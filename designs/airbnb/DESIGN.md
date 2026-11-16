---
name: Airbnb
slug: airbnb
url: https://www.airbnb.com
category: Travel
tagline: "Warm, photo-led white canvas with one coral-pink accent and soft rounded cards."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Rausch
    hex: "#FF385C"
    role: Brand color, primary CTA, Bélo logo, active states
  - name: Rausch Dark
    hex: "#DA1249"
    role: Pressed and hover state for brand fills, brand borders
  - name: Hof
    hex: "#222222"
    role: Primary text, icons, dark buttons, focus rings
  - name: Foggy
    hex: "#6A6A6A"
    role: Secondary text, metadata, captions
  - name: White
    hex: "#FFFFFF"
    role: Page background, card background
  - name: Grey 100
    hex: "#F7F7F7"
    role: Subtle surfaces, hover fill on rows and chips
  - name: Bebe
    hex: "#EBEBEB"
    role: Dividers and hairlines
  - name: Deco
    hex: "#DDDDDD"
    role: Input and card borders
  - name: Grey 500
    hex: "#C1C1C1"
    role: Disabled borders and strokes
  - name: Arches
    hex: "#C13515"
    role: Error text and error borders
  - name: Plus
    hex: "#92174D"
    role: Airbnb Plus and premium tier accent
  - name: Babu
    hex: "#008489"
    role: Legacy teal link color
  - name: Rausch 100
    hex: "#FFF5F6"
    role: Tinted brand background behind badges and notices
  - name: Success Green
    hex: "#038026"
    role: Positive status, price drops, confirmations
fonts:
  display:
    family: "Airbnb Cereal VF"
    fallback: "DM Sans"
    weights: [600, 700, 800]
  body:
    family: "Airbnb Cereal VF"
    fallback: "DM Sans"
    weights: [400, 500, 600]
typeScale:
  - { role: Display, size: 48, weight: 600, lineHeight: 1.125, tracking: "-0.02em" }
  - { role: Page title, size: 32, weight: 600, lineHeight: 1.125, tracking: "-0.01em" }
  - { role: Section title, size: 22, weight: 600, lineHeight: 1.18, tracking: "0" }
  - { role: Card title, size: 16, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.33, tracking: "0" }
radii: { sm: 8, md: 12, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80]
shadows:
  - { name: Card, value: "0 0.75px 2px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06)" }
  - { name: Search bar, value: "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)" }
  - { name: Popover, value: "0 0 0 1px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.12)" }
  - { name: Modal, value: "0 0 0 1px rgba(0,0,0,0.05), 0 14px 36px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#222222"
  muted: "#6A6A6A"
  border: "#DDDDDD"
  accent: "#FF385C"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: solid
---

# Airbnb

## 1. Visual Theme & Atmosphere

Airbnb looks like a well-lit room with nothing on the walls except photographs. The page is white, the text is a soft near-black (`#222222`, never pure black), and the one loud color, Rausch `#FF385C`, is held back for the few moments that matter: the logo, the search button, the Reserve button, the selected heart. Everything else is greyscale, so listing photos carry all of the color on the page.

What makes it recognisable:

- **Photos first.** Listing cards are mostly image. Square-ish photos (20:19 on the home grid) with 12px corners, a heart in the top right, and three to four short lines of text under them. No card border, no card shadow on the grid.
- **Rounded, friendly geometry.** Pill search bar, 8px and 12px button corners, 32px modal corners on the newest surfaces, circular avatars and icon buttons. Almost nothing has a sharp corner.
- **Airbnb Cereal.** The house typeface is round and open with a large x-height. Headings are semibold (600), not bold, which keeps the voice calm.
- **Generous whitespace, medium density.** Rows of cards sit 24px apart horizontally and 40px vertically. Sections are separated by 1px `#EBEBEB` dividers and 32-48px of space.
- **Soft depth.** Shadows are faint and layered. The floating search bar and dropdowns get shadow; cards in the grid do not.
- **Tactile 2025 refresh.** Category tabs (Homes, Experiences, Services) use small rendered 3D icons with gentle spring animation. The rest of the UI stays flat.

Mood words: hospitable, calm, trustworthy, human, light.

## 2. Color Palette & Roles

Airbnb names its core colors after streets, people and places from the company's early days (Rausch Street in San Francisco, Hof, Foggy, Babu, Arches, Bebe, Deco). These names show up directly in production CSS as `--palette-rausch`, `--palette-hof` and so on.

| Name | Hex | Role |
|---|---|---|
| Rausch | `#FF385C` | Brand color, primary CTA fill, logo, selected heart, active nav underline |
| Rausch Dark | `#DA1249` | Pressed state of brand fills, brand border, text on light pink |
| Rausch 800 | `#A21039` | Brand text on tinted backgrounds |
| Rausch 100 | `#FFF5F6` | Faint brand background for notices |
| Hof | `#222222` | Primary text, primary icons, dark "secondary" buttons, focus ring |
| Foggy | `#6A6A6A` | Secondary text: dates, distance, review counts |
| Deco | `#DDDDDD` | Input borders, outlined card borders |
| Bebe | `#EBEBEB` | Section dividers, table rules |
| Grey 200 | `#F2F2F2` | Disabled input fill |
| Grey 100 | `#F7F7F7` | Hover fill on rows, chips, icon buttons; secondary surface |
| White | `#FFFFFF` | Page and card background |
| Plus | `#92174D` | Airbnb Plus accent |
| Babu | `#008489` | Legacy teal link and info color |

### Brand gradient

The primary booking button and the round search button are not flat Rausch. They use a short horizontal gradient that shifts toward magenta:

```css
background: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%);
```

A lighter variant used on some new surfaces is `linear-gradient(90deg, #FF385C 0%, #FF497D 100%)`. The Plus tier has its own: `linear-gradient(to right, #BD1E59 0%, #92174D 50%, #861453 100%)`.

On hover, the booking button shows a radial highlight that follows the cursor (a `radial-gradient` of lighter pink positioned at the mouse), which is a signature detail on the listing page.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error text / border | `#C13515` | Field errors, cancellation warnings |
| Error strong | `#D7251C` | Invalid input border |
| Error background | `#FFF5F3` | Error banner fill |
| Success | `#038026` | Confirmations, positive dataviz |
| Success background | `#E6F6E9` | Discount pills, "Lower price" tags |
| Focus line (inputs) | `#318CF7` | Active underline in some date and text inputs |
| Focus ring | `#222222` | Keyboard focus: `0 0 0 2px #FFFFFF, 0 0 0 4px #222222` |

### Dark mode

The web product is light only for guests. Production CSS ships dark tokens (background `#111111`, secondary surface `#191919`, divider `#2C2C2C`, text `#FFFFFF`, borders `#303030`) for host tools and the apps. When you build a dark variant keep Rausch unchanged and switch brand borders to `#DA1249`.

## 3. Typography

**Family:** Airbnb Cereal (variable build named `Airbnb Cereal VF`), designed with Dalton Maag and released in 2018. It replaced Circular, which still appears in fallback stacks.

**Licensing:** Cereal is proprietary and not licensed for third-party use. For lookalike work use **DM Sans** (closest open geometric with similar round bowls), or Nunito Sans if you want something softer. Do not ship Cereal files you find on the CDN.

Production stack:

```css
font-family: 'Airbnb Cereal VF', 'Circular', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
```

**Weights:** 400 Book (body), 500 Medium (labels, small titles), 600 Semibold (all headings and buttons), 700 Bold and 800 Extra Bold (display numbers, marketing only).

### Scale

Token names in the CSS follow `size_lineheight` (for example `titles-semibold_22_26`).

| Role | Size / line height | Weight | Tracking | Example |
|---|---|---|---|---|
| Special display XL | 72 / 74 | 600 | -0.02em | Host landing hero |
| Special display | 48 / 54 | 600 | -0.02em | "Airbnb it." campaign heads |
| Page title | 32 / 36 | 600 | -0.01em | Listing title on PDP |
| Title L | 26 / 30 | 600 | 0 | Modal titles |
| Section title | 22 / 26 | 600 | 0 | "What this place offers" |
| Subtitle | 18 / 24 | 500 | 0 | Host name row |
| Card title | 16 / 20 | 600 | 0 | "Lisbon, Portugal" |
| Body | 16 / 24 | 400 | 0 | Description paragraphs |
| Body small | 14 / 20 | 400 | 0 | Card meta, form helper text |
| Caption | 12 / 16 | 500 | 0 | Badges, legal text |

### Rules

- Sentence case everywhere: buttons, headings, tabs. Never all caps except tiny badge text, and even there sentence case is preferred.
- Headings use 600. Bold 700+ is rare in the product.
- Body tracking is normal (0). Only display sizes go negative.
- Prices use tabular figures and 600 weight for the amount: **$182** night. The "night" or "total" label stays 400.
- Ratings are written `★ 4.92` with a filled star glyph at the text color, not yellow.
- Underlined links in body copy: `text-decoration: underline; font-weight: 600; color: #222222`. Links are not blue.

## 4. Logo & Brand Mark

The logo is the **Bélo** symbol beside a lowercase `airbnb` wordmark. Bélo was introduced in 2014 (designed with DesignStudio) and combines a location pin, a heart and an "A". It is drawn as a single continuous stroke with rounded terminals.

- **Lockup:** Bélo on the left, wordmark to the right, vertically centered. On the web header the full lockup sits at about 32px tall on desktop; below 744px wide it collapses to Bélo only.
- **Color versions:** Rausch `#FF385C` on white (primary). White on Rausch. Hof `#222222` on white for one-color print. White on dark photography.
- **Clear space:** keep at least the width of the Bélo's inner loop free on all sides, roughly 25% of the symbol height.
- **Minimum size:** Bélo alone 16px tall on screen; full lockup 24px tall.
- **Note on this file:** the vector here is the 2014 lockup recoloured from the original `#FF5A5F` to the current Rausch `#FF385C`.

Misuse:

- Do not outline the Bélo or change its stroke weight.
- Do not set "airbnb" in Cereal and pair it with the symbol; the wordmark is custom lettering.
- Do not use the old `#FF5A5F` coral for new work.
- Do not add gradients to the logo itself (the button gradient is for UI only).

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding / height |
|---|---|---|---|---|---|
| Primary (brand) | brand gradient `#E61E4D → #D70466` | `#FFFFFF` 600 16px | none | 8px | 14px 24px, 48px tall |
| Primary (dark) | `#222222` | `#FFFFFF` 600 16px | none | 8px | 14px 24px |
| Secondary (outline) | `#FFFFFF` | `#222222` 600 | 1px `#222222` | 8px | 13px 23px |
| Tertiary (text) | transparent | `#222222` 600, underlined | none | 8px | 10px 10px |
| Icon button | transparent, hover `#F7F7F7` | `#222222` | none | 50% | 32px or 40px square |
| Pill / chip | `#FFFFFF` | `#222222` 500 14px | 1px `#DDDDDD` | 9999px | 8px 16px, 40px tall |

States:

- Hover on primary dark: `#000000`. Hover on outline: background `#F7F7F7`.
- Pressed: `transform: scale(0.96)` with the standard curve, 150-200ms.
- Focus: `box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #222222;` no outline color change.
- Disabled: background `#DDDDDD`, text `#FFFFFF` for filled; border `#DDDDDD`, text `#B0B0B0` for outline. Cursor `not-allowed`.
- Loading: three-dot loader (dots 8px, 2px gap) replacing the label, same width.

```css
.btn-primary {
  font: 600 16px/20px var(--brand-font);
  color: #fff;
  padding: 14px 24px;
  border-radius: 8px;
  border: 0;
  background: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%);
  transition: transform 200ms cubic-bezier(0.2, 0, 0, 1);
}
.btn-primary:active { transform: scale(0.96); }
```

### Search bar (signature)

- Pill container, white, `border: 1px solid #DDDDDD`, radius 9999px, shadow `0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)`.
- Desktop expanded state: 66px tall, split into segments (Where, Check in, Check out, Who), each with a 12px/600 label and a 14px/400 `#6A6A6A` value. Segments are separated by 1px x 32px `#DDDDDD` rules.
- Active segment becomes a white pill with elevated shadow while the rest of the bar turns `#EBEBEB`.
- Round search button on the right: 48px circle with the brand gradient and a white magnifier (2px stroke, 16px). On expand it grows to show the word "Search".
- Compact header state: 48px tall pill with three text segments "Anywhere | Any week | Add guests".

### Inputs

- Stacked "floating label" fields grouped in one bordered box: outer `1px solid #B0B0B0` (or `#DDDDDD`), radius 8px, inner rows divided by 1px lines.
- Row height 56px. Label 12px/400 `#6A6A6A` at top, value 16px/400 `#222222`.
- Focus: the focused row gets `box-shadow: 0 0 0 2px #222222` and radius 8px, drawn above neighbours.
- Error: border `#C13515`, background `#FFF8F6`, helper text 12px `#C13515` with a small filled warning icon.

### Listing card (signature)

```css
.listing-card { display: grid; gap: 12px; }
.listing-card__media { aspect-ratio: 20 / 19; border-radius: 12px; overflow: hidden; position: relative; }
.listing-card__title { font: 600 15px/19px var(--brand-font); color: #222222; }
.listing-card__meta  { font: 400 15px/19px var(--brand-font); color: #6A6A6A; }
.listing-card__price { font: 600 15px/19px var(--brand-font); color: #222222; }
```

- Heart button top right, 24px icon: fill `rgba(0,0,0,0.5)`, stroke `#FFFFFF` 2px. Saved state fill `#FF385C`.
- "Guest favorite" badge top left: white pill, 12px/600 `#222222`, radius 9999px, padding 4px 10px, shadow `0 2px 4px rgba(0,0,0,0.18)`.
- Prev/next arrows appear on hover: 32px white circles at 90% opacity, `0 0 0 1px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.18)`.
- No border or shadow on the card itself.

### Category bar

- Horizontal scroll strip under the header. Each item: 24px icon over a 12px/600 label, `#6A6A6A` at 0.72 opacity by default.
- Hover: label `#222222`, a 2px `#DDDDDD` underline. Selected: 2px `#222222` underline, full opacity.

### Navigation

- Header: white, 80px tall, bottom 1px `#EBEBEB` on scroll. Logo left, search center, right cluster with "Become a host" text button and a profile pill (hamburger icon + avatar, 1px `#DDDDDD`, radius 9999px, 42px tall; hover adds `0 2px 4px rgba(0,0,0,0.18)`).
- Mobile: bottom tab bar, 64px, icons 24px, labels 10px/600, active icon and label Rausch.

### Tabs

Text tabs with 600 weight, `#6A6A6A` inactive, `#222222` active with a 2px underline 8px below the baseline. Segmented controls use a `#EBEBEB` track (radius 9999px) with a white thumb and soft shadow.

### Badges

| Badge | Style |
|---|---|
| Superhost | 12px/600 `#222222`, white pill, 1px `#DDDDDD` |
| Guest favorite | Laurel wreath icons around the rating, bold 22px number |
| Discount | 12px/600 `#038026` on `#E6F6E9`, radius 4px |

### Avatars

Circle, sizes 24, 32, 40, 56, 64px. Superhost avatars get a small Rausch badge overlay bottom right. Initial avatars use pastel scheme pairs, for example rausch `#FEE5E7` with `#A21039` text, blue `#DDEDFE` with `#0D4DAA`.

### Modals and sheets

- Desktop modal: white, radius 32px on new surfaces (older ones 12px), max width 568px, header 64px with a centered 16px/600 title and a 32px close icon button on the left.
- Footer: 1px `#EBEBEB` top border, 80px tall, "Clear all" underlined text left, dark primary right.
- Scrim: `rgba(0,0,0,0.4)`.
- Mobile: full-height sheet sliding up, radius 24px top corners, grab handle 40px x 4px `#DDDDDD`.

### Booking card (signature)

Sticky right-column card on the listing page: 1px `#DDDDDD` border, radius 12px, padding 24px, shadow `rgba(0,0,0,0.12) 0 6px 16px`. Price 22px/600, date/guest box (bordered input group), full-width gradient "Reserve" button, centered 14px "You won't be charged yet", then line items with underlined labels and a 1px rule above the total.

## 6. Layout & Spacing

- **Base unit:** 8px with a 4px half-step. Common gaps: 8, 12, 16, 24, 32, 48, 64, 80.
- **Breakpoints:** 375 (small phone), 744 (tablet), 950, 1128 (desktop), 1440, 1640, 1880 (wide). The 744 and 1128 steps matter most.
- **Page padding (inline):** 24px below 744; 40px at 744-1127; 40px-80px at 1128 and up.
- **Home grid columns:** 1 (under 550), 2 (550-949), 3 (950-1127), 4 (1128-1439), 5 (1440-1879), 6 (1880+). Column gap 24px, row gap 40px.
- **Listing page:** max content width 1120px; two columns with the details at about 58% and the sticky booking card at 33%, 8% gutter between.
- **Photo mosaic:** one large image left (50%) plus a 2 x 2 grid right, 8px gaps, outer corners 12px only.
- **Section rhythm:** 48px top and bottom padding with a 1px `#EBEBEB` divider between sections.
- **Density:** medium. Text blocks are short. Touch targets are at least 44px.

## 7. Depth, Elevation & Motion

### Elevation

| Level | Value | Used for |
|---|---|---|
| 0 | `0 0 0 1px #DDDDDD inset` | Outlined containers |
| 1 | `0 0.75px 2px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06)` | Hovered profile pill, small cards |
| 2 | `0 0.75px 4px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)` | Search bar, sticky booking card |
| 3 | `0 3px 10px rgba(0,0,0,0.15), 0 6px 30px rgba(0,0,0,0.05), 0 8px 36px rgba(0,0,0,0.2)` | Dropdown panels, date picker |
| Modal | `0 0 0 1px rgba(0,0,0,0.05), 0 14px 36px rgba(0,0,0,0.2)` | Dialogs, expanded cards |
| Brand glow | `0 2px 2px rgba(205,13,75,0.2)` | Under Rausch buttons on new surfaces |

Borders do most of the separation work. Backdrop blur is not used on core surfaces.

### Motion

Airbnb uses spring motion compiled to CSS `linear()` easings. If you cannot use springs, these curves come straight from production tokens:

| Token | Value |
|---|---|
| Standard | `cubic-bezier(0.2, 0, 0, 1)` |
| Enter | `cubic-bezier(0.1, 0.9, 0.2, 1)` |
| Exit | `cubic-bezier(0.4, 0, 1, 1)` |
| Snappy spring | about 290ms |
| Standard spring | about 450-580ms |
| Gentle spring | about 750ms |

- Button press: scale 0.96, 150-200ms standard.
- Search bar expand: the compact pill morphs into the full bar over about 400ms with the header growing from 80px to 168px.
- Modals: fade scrim 200ms; panel slides up 32px and fades in, about 400ms enter curve.
- Heart save: quick scale pop (1 → 1.2 → 1) with fill change to Rausch.

## 8. Iconography & Imagery

- **UI icons:** custom Airbnb set on a 32 x 32 grid, drawn at 16 or 24px. Mostly outline with a 2px-equivalent stroke, round caps and joins. Filled variants for selected states (filled heart, filled star).
- **Color:** icons inherit text color (`#222222`). Only the saved heart turns Rausch.
- **Category and tab icons (2025):** small rendered 3D objects (a house, a hot-air balloon, a bell) with soft lighting. Use them only for top-level navigation; never mix them into amenity lists.
- **Amenity icons:** outline, 24px, same stroke as UI icons.
- **Photography:** real homes and real hosts, natural daylight, warm white balance, people caught mid-moment rather than posed. Wide interior shots with a clear focal point. No heavy filters, no vignettes, no stock-office looks.
- **Illustration:** used sparingly in empty states and host education. Flat shapes, warm palette, rounded forms, often with Rausch as one of only two or three colors.
- **Image corners:** 12px on cards, 8px on thumbnails, 16-32px on hero media.

## 9. Voice & Microcopy

Plain, warm and short. Speaks like a helpful host. Second person ("you"), contractions are fine, no exclamation-mark stacking.

- Sentence case for every label and heading.
- Lead with the verb on buttons: "Reserve", "Search", "Show all photos", "Message host", "Continue".
- Reassure near money: "You won't be charged yet", "Free cancellation before Mar 12".
- Use specifics instead of adjectives: "4.92 · 128 reviews", "2 guests · 1 bedroom · 1 bed · 1 bath".

Sample strings:

- Search: "Where", "Search destinations", "Add dates", "Add guests", "Who"
- Empty wishlist: "Create your first wishlist. As you search, tap the heart icon to save your favorite places."
- Listing meta: "Entire home in Lisbon, Portugal", "Guest favorite", "One of the most loved homes on Airbnb, according to guests"
- Host CTA: "Airbnb your home", "Become a host"
- Error: "Something went wrong. Please try again."
- Price: "$182 night", "$1,274 total before taxes"

Separators: middle dot ` · ` between facts. Dates: "Mar 4 – 9" style ranges with an en dash and spaces.

## 10. Do's and Don'ts

**Do**

- Keep the page white and let photography supply the color.
- Use Rausch for one primary action per view, plus the logo and saved hearts.
- Use the brand gradient on the main booking and search buttons.
- Use `#222222` for text and dark buttons, `#6A6A6A` for secondary text.
- Round everything: 8px buttons, 12px images and cards, pill chips and search.
- Use semibold (600) for headings and buttons.
- Separate sections with 1px `#EBEBEB` lines and generous vertical space.

**Don't**

- Don't use Rausch for large backgrounds, body text, or more than one CTA on a screen.
- Don't use pure black `#000000` text or blue links.
- Don't put borders or heavy shadows on grid listing cards.
- Don't use all caps, letter-spaced labels, or bold 800 headings in product UI.
- Don't square off corners or use 2px radii.
- Don't add sparkle or star-burst decoration; ratings use a single plain star.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Airbnb. Use a white page (`#FFFFFF`) with near-black text `#222222` and secondary text `#6A6A6A`. Use the font stack `'Airbnb Cereal VF', 'DM Sans', -apple-system, sans-serif`, with 600 weight for headings and buttons and 400 for body. Use sentence case everywhere. The only strong color is Rausch `#FF385C`; use it for the logo, the saved-heart state and one primary CTA, which gets the gradient `linear-gradient(to right, #E61E4D, #E31C5F, #D70466)` and 8px corners. Secondary buttons are 1px `#222222` outline or solid `#222222`. Cards are photo-first with 12px image corners, no card border and no shadow; text below in 15px with the title in 600. Use pill shapes for the search bar and filter chips, a soft layered shadow on the search bar and dropdowns only, 1px `#EBEBEB` dividers between sections, an 8px spacing grid and 24px grid gaps. Motion uses `cubic-bezier(0.2, 0, 0, 1)` and a 0.96 press scale. Keep copy short, warm and specific ("You won't be charged yet").

```css
:root {
  --brand-rausch: #FF385C;
  --brand-rausch-dark: #DA1249;
  --brand-rausch-tint: #FFF5F6;
  --brand-gradient: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%);
  --brand-text: #222222;
  --brand-text-muted: #6A6A6A;
  --brand-bg: #FFFFFF;
  --brand-surface: #F7F7F7;
  --brand-divider: #EBEBEB;
  --brand-border: #DDDDDD;
  --brand-error: #C13515;
  --brand-success: #038026;
  --brand-font: 'Airbnb Cereal VF', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 16px;
  --brand-radius-xl: 32px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 0.75px 2px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06);
  --brand-shadow-search: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
  --brand-shadow-modal: 0 0 0 1px rgba(0,0,0,0.05), 0 14px 36px rgba(0,0,0,0.2);
  --brand-focus: 0 0 0 2px #FFFFFF, 0 0 0 4px #222222;
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
  --brand-ease-enter: cubic-bezier(0.1, 0.9, 0.2, 1);
  --brand-ease-exit: cubic-bezier(0.4, 0, 1, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Airbnb.

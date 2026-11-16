---
name: Databricks
slug: databricks
url: https://databricks.com
category: AI
tagline: "Lava-red and deep navy data platform brand on warm oat paper, set in DM Sans and DM Mono."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Lava 600
    hex: "#FF3621"
    role: Logo mark, brand accent, highlights
  - name: Navy 800
    hex: "#1B3139"
    role: Headings, body text, dark bands, wordmark
  - name: Oat Light
    hex: "#F9F7F4"
    role: Warm page and section background
  - name: CTA Red
    hex: "#EB1600"
    role: Primary button fill (accessible red)
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards
  - name: Oat Medium
    hex: "#EEEDE9"
    role: Alternate warm panels
  - name: Navy 600
    hex: "#1B5162"
    role: Secondary dark fills, illustration
  - name: Navy 700
    hex: "#143D4A"
    role: Deep teal-navy panels
  - name: Gray Text
    hex: "#5A6F77"
    role: Secondary text, captions
  - name: Gray Lines
    hex: "#DCE0E2"
    role: Borders, dividers
  - name: Navy 300
    hex: "#C4CCD6"
    role: Secondary button hover, light rules
  - name: Lava 500
    hex: "#FF5F46"
    role: Pressed state, gradients
  - name: Maroon
    hex: "#BD2B26"
    role: Dark red accents, play buttons
  - name: Blue 600
    hex: "#2272B4"
    role: Text links and arrow CTAs
  - name: Green
    hex: "#00A972"
    role: Success, positive figures
fonts:
  display:
    family: "DM Sans"
    fallback: "DM Sans"
    weights: [500, 700]
  body:
    family: "DM Sans"
    fallback: "DM Sans"
    weights: [400, 500]
  mono:
    family: "DM Mono"
    fallback: "DM Mono"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 80, weight: 500, lineHeight: 1.2, tracking: "-0.02em" }
  - { role: H1, size: 56, weight: 500, lineHeight: 1.14, tracking: "-0.01em" }
  - { role: H2, size: 40, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 28, weight: 500, lineHeight: 1.29, tracking: "0" }
  - { role: Body Large, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Eyebrow Mono, size: 14, weight: 500, lineHeight: 1.43, tracking: "0.04em" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.67, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 1px 3px rgba(27,49,57,0.12)" }
  - { name: Menu, value: "0 8px 24px rgba(27,49,57,0.16)" }
preview:
  bg: "#F9F7F4"
  surface: "#FFFFFF"
  text: "#1B3139"
  muted: "#5A6F77"
  border: "#DCE0E2"
  accent: "#EB1600"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Databricks

## 1. Visual Theme & Atmosphere

Databricks presents itself as the enterprise "Data + AI Platform", and its website reads like a serious B2B catalogue with a warm finish. Pages sit on white or a warm off-white called oat (`#F9F7F4`), text is a deep teal-navy (`#1B3139`) rather than black, and the brand's lava red-orange (`#FF3621`) appears in the logo, in small accents, and as the fill of primary buttons (the slightly deeper `#EB1600`).

The homepage today leads with a product headline ("One database for AI, apps and agents"), a red "Explore the product" button and a navy outline "See demo", then a Data + AI Summit banner, a tabbed platform section (Platform, Database, AI, Business intelligence, Governance, Data warehousing, Data engineering), long alternating feature rows with product screenshots, customer logos and a dark navy closing band ("Ready to get started?").

What makes it recognisable:

- **Lava red on navy and oat.** Three colours do most of the work: `#FF3621`, `#1B3139`, `#F9F7F4`.
- **The stacked-layers mark.** Isometric stacked slabs, drawn as outlines, in red.
- **DM Sans at medium weight** for headlines, not bold. Headings feel calm and engineered.
- **DM Mono uppercase eyebrows and arrow links** ("THE DATABRICKS DATA + AI PLATFORM") in red or navy.
- **Product UI as imagery:** notebooks, SQL editors, Genie chat and Unity Catalog lineage graphs.

Mood words: enterprise, warm, precise, technical, steady.

## 2. Color Palette & Roles

Hex values were read from the live databricks.com CSS (Tailwind utilities such as `bg-navy-800`, `bg-oat-light`, `btn-primary`).

| Name | Hex | Role |
|---|---|---|
| Lava 600 | `#FF3621` | Logo mark, accents, icons, inset rules |
| CTA Red | `#EB1600` | `.btn-primary` fill (AA contrast with white) |
| Lava 500 | `#FF5F46` | `.btn-primary:active`, gradients |
| Lava 300 | `#FF9E94` | Light red rules, tags |
| Maroon | `#BD2B26` | Play-button fills, dark red |
| Maroon 800 | `#801C17` | Deep red text on pink |
| Navy 800 | `#1B3139` | Headings, body, dark bands, navy buttons |
| Navy 700 | `#143D4A` | Deep panels |
| Navy 600 | `#1B5162` | Illustrations, secondary dark fills |
| Navy 500 | `#618794` | Muted icons |
| Navy 400 | `#90A5B1` | Outline button borders |
| Navy 300 | `#C4CCD6` | Secondary hover fill |
| Gray Nav | `#303F47` | Nav text on light |
| Gray Text | `#5A6F77` | Secondary copy |
| Gray Lines | `#DCE0E2` | Borders, table rules |
| Oat Medium | `#EEEDE9` | Alternate warm panels |
| Oat Light | `#F9F7F4` | Warm section background |
| White | `#FFFFFF` | Page, cards |
| Blue 600 | `#2272B4` | Text links ("text-blue-cta") |
| Blue 700 | `#0E538B` | Link hover (approximate) |
| Green | `#00A972` | Positive results |
| Yellow | `#FFAB00` | Highlights, warnings |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#00A972` | Positive status, check icons |
| Warning | `#FFAB00` | Notices |
| Error | `#EB1600` | Form errors (approximate) |
| Info | `#2272B4` | Inline links, info notes |

### Dark sections

Closing CTAs, event promos and some heroes use Navy 800 `#1B3139` with white text, lava red buttons and `#90A5B1` secondary text. Navy 700 `#143D4A` is used for nested cards on navy. The site does not offer a full dark mode.

### Product UI (workspace)

The logged-in workspace is a separate, denser interface: white canvas, light gray side navigation, blue `#2272B4` primary buttons and links, and the red logo only in the top-left corner. Do not paint the workspace red.

## 3. Typography

**Family:** DM Sans for everything, with DM Mono for eyebrows, labels and code. Both are open-source (SIL OFL) and on Google Fonts, so the real fonts can be used directly. A serif (Merriweather) appears only in a few long-form blog layouts.

### Scale (desktop; mobile steps down one size)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (`.hxl`) | 80px (56px tablet, 40px mobile) | 500 | 96px | -0.02em (approximate) |
| H1 | 56px | 500 | 64px | -0.01em (approximate) |
| H2 | 40px (30px mobile) | 500 | 48px | 0 |
| H3 | 28px | 500 | 36px | 0 |
| Body large (`.b2`) | 20px | 400 | 28px | 0 |
| Body (`.b3`) | 16px | 400 | 24px | 0 |
| Small (`.b4`) | 14px | 400-500 | 20px | 0 |
| Eyebrow (DM Mono) | 14px | 500, uppercase | 20px | 0.04em (approximate) |
| Caption (`.b6`) | 12px | 400 | 20px | 0 |

### Rules

- Headlines are medium (500). Bold 700 is reserved for highlighted words and stats.
- Sentence case for headlines ("Build and run apps, agents and AI on your data").
- Eyebrows and red arrow CTAs are DM Mono uppercase ("EXPLORE LAKEBASE", "THE DATABRICKS DATA + AI PLATFORM").
- Product names keep their casing: Lakebase, Unity Catalog, Agent Bricks, Genie, AI/BI, Delta Lake.
- Body text is navy `#1B3139`, never pure black.

## 4. Logo & Brand Mark

The logo is an isometric stack of three slab outlines (the "bricks") above or beside the lowercase "databricks" wordmark. The mark is lava red; the wordmark is navy on light backgrounds and white on navy.

- **Versions:** horizontal (mark left of wordmark, used in the site header), stacked (mark above wordmark), mark only.
- **Colors:** red mark + navy wordmark on white or oat; red mark + white wordmark on navy; all white on red or photography.
- **Clear space:** at least the height of one slab of the mark on every side (approximate).
- **Minimum size:** horizontal lockup about 100px wide on screen; mark alone about 16px (approximate).
- The bundled `logo.svg` is the stacked version from Wikimedia Commons, recoloured to `#FF3621` and `#1B3139`.

Misuse: do not fill the outlined slabs solid, rotate the stack, set the wordmark in capitals, or put the red mark on a red background.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#EB1600` | `#FFFFFF` | none | slightly darker `#BD2B26` (approximate) |
| Primary pressed | `#FF5F46` | `#FFFFFF` | none | |
| Navy | `#1B3139` | `#FFFFFF` | none | `#143D4A` |
| Secondary (outline) | transparent | `#1B3139` | 1px `#90A5B1` | border `#618794` |
| Secondary on navy | `#FFFFFF` | `#1B3139` | none | `#C4CCD6` |
| Arrow link | none | `#EB1600` or `#2272B4`, DM Mono uppercase | none | arrow slides right |

```css
.db-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px;
  font: 500 16px/24px "DM Sans", sans-serif;
  color: #fff; background: #EB1600;
  border: 0; border-radius: 4px;
  transition: background-color 200ms ease-in-out;
}
.db-btn:hover { background: #BD2B26; }
.db-btn:active { background: #FF5F46; }
.db-btn--secondary { background: transparent; color: #1B3139; border: 1px solid #90A5B1; }
.db-btn--secondary:hover { border-color: #618794; }
.db-btn:focus-visible { outline: 2px solid #2272B4; outline-offset: 2px; }
.db-arrow {
  font: 500 14px/20px "DM Mono", monospace; text-transform: uppercase;
  color: #EB1600; text-decoration: none;
}
.db-arrow::after { content: " \2192"; transition: margin-left 200ms; }
.db-arrow:hover::after { margin-left: 4px; }
```

### Navigation

- White header, 64-72px tall: logo left; "Why Databricks", "Product", "Solutions", "Resources", "About" with chevrons; right side "Login", "Contact Us" and a red "Try Databricks" button.
- Mega menus are white panels with two or three columns: bold 16px item titles and 14px gray one-line descriptions ("Data Engineering / ETL and orchestration for batch and streaming data").

### Tabs (platform switcher)

Horizontal text tabs (Platform, Database, AI, Business intelligence...). Inactive tabs navy at 16px/500; the active tab gets a 2-3px lava underline or a navy pill fill (approximate). Content below swaps a screenshot and short copy.

### Feature rows

Alternating two-column rows: left copy (H3, 16-20px body, red DM Mono arrow link), right product screenshot in a rounded 12px frame on an oat or pale navy panel.

### Cards

- Resource and customer cards: white fill, 1px `#DCE0E2` border, 8-12px radius, 24px padding, optional image on top.
- Callouts use a 5px inset left rule in lava: `box-shadow: inset 5px 0 0 0 #FF3621`.

### Event banner

Full-width navy or red band with DM Mono date line ("JUNE 15–18 / SAN FRANCISCO"), headline, and a white or red button.

### Forms

Inputs 48px tall, white fill, 1px `#90A5B1` border, 4px radius, 16px text; focus border `#2272B4`; labels 14px/500 navy (approximate).

### Badges and tags

Small DM Mono uppercase labels at 12px, 4px radius, on `#EEEDE9` or pale red `#FFE7E4` (approximate) fills.

## 6. Layout & Spacing

- **Containers:** content max widths seen at 1144px, 1312px and 1456px; text columns cap near 768px.
- **Breakpoints:** 360, 768, 1280, 1366, 1536px (from the live media queries).
- **Grid:** 12 columns with 24-32px gutters on desktop (approximate).
- **Section spacing:** 64-96px top and bottom on desktop, 48px on mobile.
- **Density:** medium. Generous whitespace around headlines, but long menus and many feature rows.

## 7. Depth, Elevation & Motion

- Mostly flat: hierarchy comes from oat/white/navy bands and 1px gray borders.
- Cards and menus use soft navy-tinted shadows (`0 1px 3px rgba(27,49,57,0.12)`, menus around `0 8px 24px rgba(27,49,57,0.16)`, approximate).
- Radius: 4px on buttons and inputs, 8-12px on cards and screenshots, 20-24px on some media frames, full pills for chips.
- Motion: 200ms ease-in-out on button colours and arrow nudges; tab content fades; carousels slide (swiper).

## 8. Iconography & Imagery

- **Icons:** simple line icons (icomoon icon font) in navy or red, 1.5-2px stroke, 24-48px.
- **Product imagery:** real screenshots of notebooks, SQL, dashboards and Genie, placed on oat or navy panels with soft corner radius.
- **Illustration:** geometric, isometric shapes in lava, navy and oat that echo the stacked mark.
- **Photography:** event and customer photography, natural colour, used sparingly.

## 9. Voice & Microcopy

Confident, plain enterprise language. Short headlines naming the outcome, then a one-sentence explanation.

- Headlines: "Build and run apps, agents and AI on your data", "Govern data and AI on one platform", "The best warehouse is still a lakehouse".
- CTAs: "Try Databricks", "Get a Demo", "Explore the product", "See demo", "Register now", "Contact Us".
- Arrow links: "Explore Lakebase", "Explore Unity Catalog", "Explore Agent Bricks".
- Menu descriptions are fragments: "Serverless data warehouse for SQL analytics".

## 10. Do's and Don'ts

**Do**

- Use navy `#1B3139` for text and oat `#F9F7F4` for warm backgrounds.
- Keep lava red for the logo, primary buttons and small accents.
- Set headlines in DM Sans 500, sentence case.
- Use DM Mono uppercase for eyebrows, labels and arrow links.
- Show real product screens instead of abstract art.

**Don't**

- Don't use pure black text or cold gray backgrounds as the default.
- Don't flood whole sections with red; red bands are for rare promos.
- Don't set headlines in bold 700 or all caps.
- Don't round buttons into pills.
- Don't fill or redraw the stacked-slab mark.

## 11. Agent Prompt Guide

> Build this UI in the style of Databricks. Light theme: white page with warm oat `#F9F7F4` and `#EEEDE9` bands, text deep navy `#1B3139`, secondary `#5A6F77`, borders `#DCE0E2`. Font DM Sans (headlines 40-80px weight 500, sentence case; body 16-20px weight 400) and DM Mono uppercase 14px for eyebrows and arrow links. Primary buttons: `#EB1600` fill, white 16px/500 text, 4px radius, 12px 24px padding; secondary: navy text with 1px `#90A5B1` border. Header: red stacked-slab logo with navy "databricks", menu items Why Databricks, Product, Solutions, Resources, About, and a red "Try Databricks" button. Use alternating feature rows with product screenshots on oat panels, white cards with 1px borders and 8-12px radius, and a navy `#1B3139` closing band with white text. Accent the lava red `#FF3621` sparingly.

```css
:root {
  --brand-lava: #FF3621;
  --brand-cta: #EB1600;
  --brand-cta-hover: #BD2B26;
  --brand-cta-active: #FF5F46;
  --brand-navy: #1B3139;
  --brand-navy-700: #143D4A;
  --brand-navy-600: #1B5162;
  --brand-navy-400: #90A5B1;
  --brand-navy-300: #C4CCD6;
  --brand-oat: #F9F7F4;
  --brand-oat-medium: #EEEDE9;
  --brand-bg: #FFFFFF;
  --brand-text: #1B3139;
  --brand-text-muted: #5A6F77;
  --brand-border: #DCE0E2;
  --brand-link: #2272B4;
  --brand-success: #00A972;
  --brand-warning: #FFAB00;
  --brand-font: "DM Sans", system-ui, sans-serif;
  --brand-font-mono: "DM Mono", ui-monospace, monospace;
  --brand-radius: 4px;
  --brand-radius-card: 12px;
  --brand-shadow-card: 0 1px 3px rgba(27,49,57,0.12);
  --brand-shadow-menu: 0 8px 24px rgba(27,49,57,0.16);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Databricks.

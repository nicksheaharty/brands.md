---
name: Notion
slug: notion
url: https://www.notion.com
category: Productivity
tagline: "Quiet, paper-like workspace: warm greys, black ink, one blue, hand-drawn people."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#191918"
    role: Marketing headings, logo, primary dark buttons
  - name: App Text
    hex: "#37352F"
    role: Default text color inside the Notion editor
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Warm Grey 200
    hex: "#F6F5F4"
    role: Section backgrounds, cards, hover fills on marketing
  - name: Sidebar
    hex: "#F7F7F5"
    role: App sidebar and secondary surface
  - name: Warm Grey 300
    hex: "#DFDCD9"
    role: Borders and dividers on marketing pages
  - name: Warm Grey 500
    hex: "#78736F"
    role: Secondary text and captions
  - name: Warm Grey 600
    hex: "#615D59"
    role: Body copy on marketing pages
  - name: Notion Blue
    hex: "#0075DE"
    role: Primary CTA on notion.com, links
  - name: App Blue
    hex: "#2383E2"
    role: Selection, focus rings and primary buttons inside the app
  - name: Dark Background
    hex: "#191919"
    role: App dark mode page background
  - name: Red
    hex: "#E32D14"
    role: Errors and destructive actions
  - name: Orange
    hex: "#DD5B00"
    role: Accent for highlights and illustrations
  - name: Green
    hex: "#14832B"
    role: Success and positive status
  - name: Purple
    hex: "#7237AE"
    role: Accent for AI features and illustrations
  - name: Yellow
    hex: "#FFB110"
    role: Accent for highlights and callouts
fonts:
  display:
    family: "NotionInter"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "NotionInter"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "iA Writer Mono"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 64, weight: 700, lineHeight: 1.0, tracking: "-0.033em" }
  - { role: Display, size: 42, weight: 700, lineHeight: 1.1, tracking: "-0.036em" }
  - { role: Heading, size: 32, weight: 700, lineHeight: 1.15, tracking: "-0.023em" }
  - { role: Subheading, size: 22, weight: 600, lineHeight: 1.3, tracking: "-0.011em" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.5, tracking: "-0.007em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80, 120]
shadows:
  - { name: Card, value: "0 0.7px 1.46px rgba(0,0,0,0.016), 0 3px 9px rgba(0,0,0,0.03)" }
  - { name: Raised, value: "0 0.8px 2.9px rgba(0,0,0,0.02), 0 2px 7.8px rgba(0,0,0,0.027), 0 4px 18px rgba(0,0,0,0.04)" }
  - { name: Popover, value: "0 0 0 1px rgba(15,15,15,0.05), 0 3px 6px rgba(15,15,15,0.1), 0 9px 24px rgba(15,15,15,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F5F4"
  text: "#191918"
  muted: "#615D59"
  border: "#DFDCD9"
  accent: "#0075DE"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# Notion

## 1. Visual Theme & Atmosphere

Notion feels like good paper and a black pen. The page is white, the greys lean warm (a little brown, never blue), and the text is a soft ink rather than pure black. Color is something the user adds, not something the interface pushes. The brand gets its personality from black-and-white hand-drawn people, emoji page icons and plain, confident writing.

What makes it recognisable:

- **Warm neutrals.** Greys like `#F6F5F4`, `#DFDCD9` and `#78736F` have a slight beige cast. The app text color `#37352F` is a warm brown-black.
- **Black ink accents.** The logo, the hand-drawn illustrations and many buttons are near-black `#191918`. The one blue (`#0075DE` on the site, `#2383E2` in the app) is used for the main CTA, links and selection.
- **Hand-drawn people.** Loose, single-weight ink line drawings of people and objects (a style started with illustrator Roman Muradov and extended by the in-house team) with flat spot colors in newer work.
- **Document-first layouts.** The product is a page of blocks. Headings, paragraphs, toggles, callouts, databases. Everything sits on a single centered column with generous margins.
- **Minimal chrome.** Controls appear on hover (the `⋮⋮` drag handle, the `+` block button), and disappear when you stop. Borders are faint, shadows barely there.
- **Emoji as icons.** Pages and callouts carry an emoji. It gives color and personality without the UI having to.

Mood words: calm, editorial, flexible, crafted, unhurried.

## 2. Color Palette & Roles

The marketing site uses the Tatami token system (`--tatami-color-*`). The app uses an older, very stable set of values that most Notion lookalikes copy.

### Neutrals

| Name | Hex | Role |
|---|---|---|
| Ink (gray 900) | `#191918` | Marketing headings, logo, dark buttons |
| Gray 800 | `#31302E` | Dark surfaces, footer text on light |
| Gray 700 | `#494744` | Strong secondary text |
| Gray 600 | `#615D59` | Marketing body copy |
| Gray 500 | `#78736F` | Captions, metadata |
| Gray 400 | `#A39E98` | Placeholder, disabled icons |
| Gray 300 | `#DFDCD9` | Borders, dividers |
| Gray 200 | `#F6F5F4` | Section and card background |
| White | `#FFFFFF` | Page |

Alpha blacks are used for text on any background: normal text `rgba(0,0,0,0.9)`, muted `rgba(0,0,0,0.54)`, disabled `rgba(0,0,0,0.3)`, border `rgba(0,0,0,0.1)`, hover fill `rgba(0,0,0,0.05)`.

### App (editor) values

| Name | Value | Role |
|---|---|---|
| Text | `#37352F` | Default block text |
| Secondary text | `rgba(55,53,47,0.65)` | Properties, breadcrumbs |
| Tertiary text | `rgba(55,53,47,0.45)` | Placeholders ("Type '/' for commands") |
| Hover | `rgba(55,53,47,0.08)` | Row and button hover |
| Divider | `rgba(55,53,47,0.09)` | Lines between rows |
| Sidebar | `#F7F7F5` | Left sidebar |
| Selection | `rgba(35,131,226,0.28)` | Selected text and blocks |
| App Blue | `#2383E2` | Primary buttons, checkboxes, focus |

### Brand accents (marketing scale, 600 step)

| Name | Hex | Light tint (100/200) |
|---|---|---|
| Blue | `#0075DE` | `#F2F9FF` / `#E6F3FE` |
| Red | `#E32D14` | `#FEF3F1` / `#FDD3CD` |
| Orange | `#DD5B00` | `#FFF5ED` / `#FFDEC4` |
| Yellow | `#E89D01` (500: `#FFB110`) | `#FFF5E0` / `#FFE4AF` |
| Green | `#14832B` | `#F0FAF2` / `#D0F4D8` |
| Teal | `#0A7B77` | `#F2FAFA` / `#BDE6E4` |
| Purple | `#7237AE` | `#F8F5FC` / `#EADBFA` |
| Pink | `#D13F9D` | `#FFF5FC` / `#FFCDF1` |

### Editor text and highlight colors

Users color text and blocks from a fixed menu. Approximate light-mode values:

| Color | Text | Background |
|---|---|---|
| Gray | `#787774` | `#F1F1EF` |
| Brown | `#9F6B53` | `#F4EEEE` |
| Orange | `#D9730D` | `#FBECDD` |
| Yellow | `#CB912F` | `#FBF3DB` |
| Green | `#448361` | `#EDF3EC` |
| Blue | `#337EA9` | `#E7F3F8` |
| Purple | `#9065B0` | `#F4F0F7` |
| Pink | `#C14C8A` | `#F9EEF3` |
| Red | `#D44C47` | `#FDEBEC` |

### Semantic

Error text `#F64932` (red 500), destructive button `#E32D14`, success `#1AAE39` (green 500), warning `#FFB110`, info and link `#0075DE`.

### Dark mode

App dark mode: background `#191919`, sidebar `#202020`, text `rgba(255,255,255,0.81)` (about `#D4D4D4`), secondary `rgba(255,255,255,0.46)`, hover `rgba(255,255,255,0.055)`, divider `rgba(255,255,255,0.094)`. Marketing dark sections use gray 900 `#191918` with white text and `rgba(255,255,255,0.2)` borders. Keep the warm cast: never use blue-black.

## 3. Typography

**Families:**

- **NotionInter**, a Notion-tuned build of Inter, for all UI and marketing text. Features `"lnum" 1, "locl" 0`.
- **Lyon Text** (Commercial Type) for the "Serif" page style and editorial moments: customer quotes, blog headlines, long-form landing copy.
- **iA Writer Mono** for the "Mono" page style and code; Nitti as a fallback in some places.
- **NotionHand**, a handwriting face for annotations next to illustrations.

**Licensing and fallbacks:** NotionInter is based on Inter (OFL), so **Inter** from Google Fonts is a near-exact substitute. Lyon Text is commercial; use **Source Serif 4** or Newsreader. iA Writer Mono is derived from IBM Plex Mono, so **IBM Plex Mono** is the right fallback. For NotionHand use Permanent Marker sparingly.

App stack:

```css
font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif;
```

### Marketing scale (Tatami tokens)

| Token | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| sans-1000 | 76px | 700 | -2.5px | Campaign hero |
| sans-900 | 64px | 700 | -2.125px | Home hero |
| sans-800 | 54px | 700 | -1.875px | Section hero |
| sans-700 | 42px | 700 | -1.5px | Section titles |
| sans-600 | 32px | 700 | -0.75px | Feature titles |
| sans-500 | 26px | 600 | -0.625px | Card titles |
| sans-400 | 22px | 600 | -0.25px | Subheads |
| sans-300 | 18px | 400 | -0.125px | Lead paragraphs |
| sans-200 | 16px | 400 | 0 | Body |
| sans-100 | 14px | 400/500 | 0 | Small, nav |
| sans-50 | 12px | 500 | 0 | Captions, legal |

### App (editor) scale

| Block | Size | Weight | Line height |
|---|---|---|---|
| Page title | 40px | 700 | 1.2 |
| Heading 1 | 30px | 600 | 1.3 |
| Heading 2 | 24px | 600 | 1.3 |
| Heading 3 | 20px | 600 | 1.3 |
| Text | 16px | 400 | 1.5 |
| Sidebar item | 14px | 500 | 1.3 |
| Property label | 14px | 400 | 1.3 |

### Rules

- Sentence case everywhere ("Get Notion free", "Request a demo").
- Headlines are bold with tight negative tracking that scales with size.
- Body never goes below 14px in marketing; 16px is the default.
- Use Lyon Text for quotes and editorial accents, not for buttons or nav.
- Numbers in stats use 700 and the same tight tracking as headlines.

## 4. Logo & Brand Mark

The mark is a hand-drawn-looking cube in heavy black outline with a serif "N" on its face, white fill. It reads like an object sketched in pen, which ties it to the illustration style. The full lockup puts the mark beside the "Notion" wordmark in a bold sans; the mark alone is used for the app icon, favicon and most small placements. The file here is the mark alone.

- **Color:** black outline `#000000` with white fill. On dark backgrounds use the inverted version (white outline, black fill) or keep the white-fill mark on a dark tile.
- **Clear space:** at least 25% of the mark's width on all sides.
- **Minimum size:** 16px for the mark, 80px wide for the lockup.

Misuse:

- Do not fill the cube with color or a gradient.
- Do not redraw the "N" in a sans-serif.
- Do not rotate, skew or add 3D shading.
- Do not place the white-fill mark on light grey where the edge disappears.

## 5. Components

### Buttons (marketing)

| Variant | Background | Text | Border | Radius | Size |
|---|---|---|---|---|---|
| Primary | `#0075DE` | `#FFFFFF` 500 16px | none | 8px | 38px tall (md), 46px (lg); padding 8px 16px / 12px 24px |
| Primary dark | `#191918` | `#FFFFFF` 500 | none | 8px | same |
| Secondary | `#F6F5F4` or `rgba(0,0,0,0.05)` | `#191918` 500 | none | 8px | same |
| Outline | transparent | `#191918` | 1px `rgba(0,0,0,0.1)` | 8px | same |
| Ghost | transparent | `rgba(0,0,0,0.9)` | none | 8px | hover `rgba(0,0,0,0.05)` |
| Link | transparent | `#0075DE` | none | 0 | arrow "→" after text |

States: primary hover `#005BAB`, active `#00396B`. Dark hover `#31302E`. Focus: `box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #097FE8`. Disabled: `rgba(0,0,0,0.05)` fill and `rgba(0,0,0,0.3)` text.

### Buttons (app)

Small and quiet: 28px tall, 14px/500 text, radius 4-6px, padding 0 8px. Primary `#2383E2` with white text; secondary is plain text with `rgba(55,53,47,0.08)` hover. Icon buttons 28px square, 16-20px icons in `rgba(55,53,47,0.45)`.

```css
.notion-btn {
  height: 28px; padding: 0 8px; border-radius: 6px;
  font: 500 14px/1 var(--brand-font);
  color: #37352F; background: transparent;
  transition: background 20ms ease-in;
}
.notion-btn:hover { background: rgba(55,53,47,0.08); }
.notion-btn--primary { background: #2383E2; color: #fff; }
.notion-btn--primary:hover { background: #0077D4; }
```

### Inputs

- Marketing: 40px tall, 1px `rgba(0,0,0,0.1)` border, radius 8px, 16px text, focus ring `0 0 0 1px #2383E2 inset, 0 0 0 2px rgba(35,131,226,0.35)`.
- App: `background: rgba(242,241,238,0.6)`, `box-shadow: rgba(15,15,15,0.1) 0 0 0 1px inset`, radius 4px, 28-32px tall, 14px text.

### Blocks (signature)

- Each block is a row with 2-3px vertical padding. On hover, a `⋮⋮` drag handle and `+` appear in the left gutter (18px, `rgba(55,53,47,0.35)`).
- **Callout:** background `#F1F1EF` (or any highlight color), radius 4px, padding 16px 16px 16px 12px, an emoji at 24px on the left.
- **Toggle:** a small triangle `▸` that rotates 90° on open, 100ms.
- **Quote:** 3px solid `currentColor` left border, 14px left padding, 18-19px text.
- **Code:** background `#F7F6F3`, radius 4px, 14px mono, padding 32px 32px 32px 16px, language label top left.
- **To-do:** 16px checkbox with 1.5px border; checked state fills `#2383E2` with a white tick and strikes the text in `rgba(55,53,47,0.65)`.

### Cards (marketing)

- Background `#F6F5F4`, radius 12-16px, no border, padding 24-32px.
- Feature cards often hold a cropped product screenshot that touches the card edge, with a title (22px/600) and a line of grey body copy above.
- Testimonial cards: Lyon Text quote at 22-26px, author with 40px circular avatar and company logo in grey.

### Navigation

- Marketing header: 64px, white, sticky. Logo mark + "Notion" left, then "Product", "AI", "Solutions", "Resources", "Enterprise", "Pricing" in 15px/500 ink with dropdown menus. Right: "Request a demo" ghost, "Log in" ghost, "Get Notion free" primary.
- Dropdowns: white, radius 12px, popover shadow, two or three columns of icon + title + one-line description.
- App sidebar: 240px wide, `#F7F7F5`, items 28-30px tall with 14px/500 text, emoji or icon at 18px, hover `rgba(55,53,47,0.08)`, radius 6px.

### Tabs

Marketing uses pill tabs: `#F6F5F4` track, selected tab white with Card shadow, 14px/500. In the app, database view tabs are plain text with a 2px `#37352F` underline on the active view.

### Badges and tags

Database select tags: radius 3px, padding 0 6px, 20px tall, 14px text, colors from the editor background palette (for example `#DBEDDB` with `#1C3829` text for green). Marketing "New" badge: `#E6F3FE` fill, `#0075DE` text, 12px/600, radius 9999px.

### Avatars

Circles. In marketing, people are shown as hand-drawn ink faces ("Notion faces") on white or tinted circles. In the app, user avatars are 20-24px photos or initials on a warm grey.

### Menus and modals

- Popover menus: white, radius 6-10px, shadow `0 0 0 1px rgba(15,15,15,0.05), 0 3px 6px rgba(15,15,15,0.1), 0 9px 24px rgba(15,15,15,0.2)`. Items 28px, 14px text, 4px inner radius on hover.
- The slash menu (`/`) is the signature: a 324px-wide popover listing block types with 46px square thumbnails and a short description.
- Modals: white, radius 12px, same shadow, scrim `rgba(15,15,15,0.6)`.

## 6. Layout & Spacing

- **Base unit:** 4px; most spacing lands on 8, 12, 16, 24, 32.
- **Marketing max width:** 1252px (some pages 1344px). Hero copy column 960px max, centered.
- **Page inset:** 24px mobile, 32px tablet, 48-64px desktop.
- **Section gap:** 80px mobile, 120-160px desktop. Hero padding 40-80px top, 120px bottom.
- **Gutter:** 12px mobile, 24px desktop. Grid of 12 columns on desktop, 4 on mobile.
- **App page:** default content width about 708px (900px frame with 96px side padding); "Full width" toggle expands it. Page title sits 80-100px below the cover.
- **Breakpoints:** about 600, 840, 1080 and 1440px.
- **Density:** marketing is airy; the app is compact (28px rows, 14px UI text) so lots of content fits.

## 7. Depth, Elevation & Motion

### Shadows

| Token | Value | Use |
|---|---|---|
| shadow-100 | `0 0.7px 1.462px rgba(0,0,0,0.016), 0 3px 9px rgba(0,0,0,0.03)` | Resting cards |
| shadow-200 | `0 0.175px 1.041px rgba(0,0,0,0.012), 0 0.8px 2.925px rgba(0,0,0,0.02), 0 2.025px 7.847px rgba(0,0,0,0.027), 0 4px 18px rgba(0,0,0,0.04)` | Selected tab, raised cards |
| shadow-300 | six stacked layers ending at `0 36px 89px rgba(0,0,0,0.04)` | Large product screenshots |
| App popover | `0 0 0 1px rgba(15,15,15,0.05), 0 3px 6px rgba(15,15,15,0.1), 0 9px 24px rgba(15,15,15,0.2)` | Menus, slash menu |

Shadows are extremely faint. A 1px `rgba(0,0,0,0.1)` border often does the job instead.

### Motion

- App interactions are almost instant: hover backgrounds change in 20ms `ease-in`, menus fade in 100-150ms.
- Toggles rotate their caret in 100-200ms.
- Marketing: scroll-triggered fades and 16-24px rises over 400-600ms with an ease-out curve; illustrations sometimes animate line-by-line as if drawn.
- No bounce or spring on core UI. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **UI icons:** Notion's own set, 16-20px, mostly filled glyphs with soft rounded corners, drawn in `rgba(55,53,47,0.45)` at rest and `#37352F` when active. Newer icons use a 1.5px outline style.
- **Page icons:** emoji (Apple style on Mac) or custom uploaded icons at 78px on the page header, 18-20px in the sidebar.
- **Illustration:** black ink line drawings with uneven, natural stroke weight. People are simplified with dot eyes, simple hair shapes and expressive poses. Flat spot colors (yellow `#FFB110`, blue `#0075DE`, red `#E32D14`, pink `#FF64C8`) fill parts of objects, never full scenes. Lots of white space around each figure.
- **Product imagery:** clean screenshots of real Notion pages with real-looking content, often cropped and placed on `#F6F5F4` cards. Cursor and collaborator avatars are added to show teamwork.
- **Photography:** rare. Used in customer stories with natural, editorial framing.

## 9. Voice & Microcopy

Plain, warm and slightly playful, like a smart friend explaining a tool. Short sentences. Avoids jargon unless the audience is technical.

- Sentence case.
- CTAs: "Get Notion free", "Request a demo", "Try Notion AI", "Download", "Log in".
- Placeholder copy in the app is instructional: "Type '/' for commands", "Untitled", "Press Enter to continue with an empty page, or pick a template".
- Empty states are friendly and specific: "No pages inside", "Click to add a property".
- Headlines tend to be one clear idea: "The AI workspace that works for you.", "One space for every team.", "Write, plan, organize, play."

Sample strings:

- "Your wiki, docs & projects. Together."
- "Add a page", "Share", "Duplicate", "Move to", "Copy link"
- "Notion AI can make mistakes. Check important info."

## 10. Do's and Don'ts

**Do**

- Use warm greys (`#F6F5F4`, `#DFDCD9`, `#78736F`) and a warm ink text color.
- Keep the layout a calm single column with generous side margins.
- Use one blue for the main action and links; use black for secondary emphasis.
- Use hand-drawn ink illustrations or emoji for personality.
- Hide secondary controls until hover in document-style UIs.
- Use faint, multi-layer shadows or 1px alpha borders.
- Mix in Lyon-style serif only for quotes and editorial highlights.

**Don't**

- Don't use cool blue-greys or pure `#000000` text on large areas.
- Don't add gradients to buttons or the logo.
- Don't use heavy drop shadows or glassmorphism.
- Don't fill screens with saturated color; color belongs to user content and small accents.
- Don't use glossy 3D illustrations or stock photos.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Notion. White page, warm near-black text (`#191918` for marketing headings, `#37352F` for document text), warm grey secondary text `#615D59` / `#78736F`, warm grey surfaces `#F6F5F4` and borders `#DFDCD9` or `rgba(0,0,0,0.1)`. Font: `"Inter", ui-sans-serif, -apple-system, "Segoe UI", sans-serif`; headings bold (700) with tight negative tracking (about -0.035em at 40px+), body 16px/1.5 at 400. Use a single blue `#0075DE` for the primary button (8px radius, white 500-weight text, hover `#005BAB`) and links; secondary buttons are `#F6F5F4` with ink text. For app-like UI use 28px rows, 14px text, 6px radii, `rgba(55,53,47,0.08)` hover fills and a 240px `#F7F7F5` sidebar; show drag handles only on hover. Shadows are barely visible; popovers use `0 0 0 1px rgba(15,15,15,0.05), 0 3px 6px rgba(15,15,15,0.1), 0 9px 24px rgba(15,15,15,0.2)`. Use emoji page icons and black ink line illustrations with small flat color fills for personality. Use a serif like Source Serif 4 only for quotes. Copy is plain, short and friendly, in sentence case.

```css
:root {
  --brand-ink: #191918;
  --brand-text: #37352F;
  --brand-text-secondary: rgba(55,53,47,0.65);
  --brand-text-tertiary: rgba(55,53,47,0.45);
  --brand-body: #615D59;
  --brand-muted: #78736F;
  --brand-bg: #FFFFFF;
  --brand-surface: #F6F5F4;
  --brand-sidebar: #F7F7F5;
  --brand-border: #DFDCD9;
  --brand-border-alpha: rgba(0,0,0,0.1);
  --brand-hover: rgba(55,53,47,0.08);
  --brand-blue: #0075DE;
  --brand-blue-hover: #005BAB;
  --brand-app-blue: #2383E2;
  --brand-red: #E32D14;
  --brand-green: #14832B;
  --brand-yellow: #FFB110;
  --brand-purple: #7237AE;
  --brand-dark-bg: #191919;
  --brand-dark-text: rgba(255,255,255,0.81);
  --brand-font: "NotionInter", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  --brand-font-serif: "Lyon Text", "Source Serif 4", Georgia, serif;
  --brand-font-mono: "iA Writer Mono", "IBM Plex Mono", Nitti, Menlo, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-shadow-card: 0 0.7px 1.462px rgba(0,0,0,0.016), 0 3px 9px rgba(0,0,0,0.03);
  --brand-shadow-popover: 0 0 0 1px rgba(15,15,15,0.05), 0 3px 6px rgba(15,15,15,0.1), 0 9px 24px rgba(15,15,15,0.2);
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Notion.

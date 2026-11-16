---
name: Entrepreneurs First
shortName: "EF"
slug: entrepreneur-first
url: https://www.joinef.com
category: Accelerator
tagline: "Huge uppercase serif headlines, violet and orange blocks, square corners and arrow links."
updated: 2026-11-16
logoBackground: "#6300DD"
theme: light
colors:
  - name: EF Orange
    hex: "#FF7448"
    role: Logo wordmark, orange sections, hover text, focus borders
  - name: Violet
    hex: "#6300DD"
    role: Header, purple sections, links, row hover fill
  - name: Midnight Purple
    hex: "#1D0040"
    role: Text, borders, input outlines
  - name: Mist
    hex: "#DFEAEA"
    role: Page background, text on violet
  - name: Signal Red
    hex: "#F64121"
    role: Button and arrow-link hover, dark orange sections
  - name: Lavender
    hex: "#6E24F5"
    role: Light purple text accent
  - name: Black
    hex: "#000000"
    role: Black sections and media backgrounds
  - name: White
    hex: "#FFFFFF"
    role: Pure white text on dark media
  - name: Grey
    hex: "#888888"
    role: Grey utility sections, meta text
  - name: Success Green
    hex: "#58CB72"
    role: Form success messages
fonts:
  display:
    family: "PS Times"
    fallback: "Instrument Serif"
    weights: [400]
  body:
    family: "Neue Haas Grotesk Display"
    fallback: "Inter"
    weights: [500, 600]
typeScale:
  - { role: Hero XXXL, size: 160, weight: 400, lineHeight: 0.8, tracking: "0" }
  - { role: Display XXL, size: 104, weight: 400, lineHeight: 0.9, tracking: "0" }
  - { role: H1, size: 62, weight: 400, lineHeight: 0.95, tracking: "0" }
  - { role: H2, size: 42, weight: 400, lineHeight: 1.0, tracking: "0" }
  - { role: Button, size: 20, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 16, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Nav, size: 14, weight: 600, lineHeight: 1.2, tracking: "0.02em" }
  - { role: Tag, size: 12, weight: 600, lineHeight: 1.2, tracking: "0.02em" }
radii: { sm: 0, md: 0, lg: 0, pill: 9999 }
spacing: [8, 12, 16, 20, 32, 48, 64, 96]
shadows: []
preview:
  bg: "#DFEAEA"
  surface: "#FFFFFF"
  text: "#1D0040"
  muted: "#888888"
  border: "#1D0040"
  accent: "#6300DD"
  accentText: "#DFEAEA"
  radius: 0
  buttonStyle: outline
---

# Entrepreneurs First

## 1. Visual Theme & Atmosphere

Entrepreneurs First (EF, joinef.com; often written "Entrepreneur First") is a talent investor that backs individuals before they have a cofounder or an idea, runs cohorts in London, Bangalore and San Francisco, and ends with a San Francisco Demo Day. The site is loud in a bookish way: enormous uppercase serif headlines ("FOUND, DON'T FOLLOW"), full-width blocks of electric violet `#6300DD` and coral orange `#FF7448`, and a cool pale mist `#DFEAEA` used as "white". Corners are square everywhere. Rules are 1px midnight purple. Links end in arrows that slide on hover.

What makes it recognisable:

- **Giant serif caps.** PS Times Display at up to 160px with line-height 0.8-0.95. Headlines feel like a newspaper masthead or a manifesto.
- **Color blocks, not cards.** Sections are full-bleed `bg-purple`, `bg-orange`, `bg-white` (mist) or `bg-black`, each with its own text color rules.
- **Mist instead of white.** The page background and "white" text are `#DFEAEA`, a pale blue-green grey.
- **Square, outlined, typographic UI.** Buttons are text in serif with an arrow, inputs are 1px boxes with no radius, tiles are 1px bordered rectangles.
- **Row hover fill.** Portfolio rows fill violet from the bottom up on hover, and the text flips to mist.
- **Bracket labels.** Nav groups are written like code markers: "[START]" and "[MENU]".

Mood words: bold, intellectual, contrarian, high-agency, editorial.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| EF Orange | `#FF7448` | Logo, `.bg-orange`, hover color on violet and dark, input focus border, video player color |
| Violet | `#6300DD` | `.bg-purple` (site header), link hover on light, linkline underline, row hover fill |
| Midnight Purple | `#1D0040` | Default text and borders on mist and orange, outlined tiles, inputs |
| Mist | `#DFEAEA` | `body` background, `.bg-white`, `.color-white` text on violet |
| Signal Red | `#F64121` | `.btn:hover` text color, `.bg-dark-orange` |
| Lavender | `#6E24F5` | `.color-light-purple` accent text |
| Black | `#000000` | `.bg-black` media sections |
| Pure White | `#FFFFFF` | `.color-pure-white` on photos and video |
| Grey | `#888888` | `.bg-grey`, meta text |
| Success | `#58CB72` | Form success |
| Error | `#FD0B0B` | Form error text |

### Section color pairs

| Section | Background | Text | Hover / accent |
|---|---|---|---|
| Light (`bg-white`) | `#DFEAEA` | `#1D0040` | `#6300DD` |
| Violet (`bg-purple`) | `#6300DD` | `#DFEAEA` | `#FF7448` |
| Orange (`bg-orange`) | `#FF7448` | `#1D0040` | `#DFEAEA` or `#1D0040` |
| Black (`bg-black`) | `#000000` | `#DFEAEA` | `#FF7448` |

When an orange block follows a nav bar, a 1px `#1D0040` top border separates them.

### Dark mode

No separate dark mode; the violet and black sections are the dark surfaces. The sticky header is always violet with mist text and a 1px mist bottom border.

## 3. Typography

**Families**

- **PS Times** (Display cut, self-hosted `PSTimes-Display.woff2`) for h1-h3, all `heading-*` classes, buttons, quotes and manifesto text. Weight 400 only.
- **Neue Haas Grotesk Display** (Adobe Fonts / Typekit kit `ihl0alr`) for body, nav and labels. The `body` weight is 600.

Both are commercial. Free substitutes: **Instrument Serif** (or **Libre Caslon Display**) for PS Times; **Inter** at 500-600 for Neue Haas Grotesk.

```css
--font-serif: "PS Times", "Instrument Serif", "Times New Roman", serif;
--font-sans: "neue-haas-grotesk-display", "Inter", "Helvetica Neue", Arial, sans-serif;
```

### Scale (responsive steps at 550, 700, 1000, 1200, 1400, 1600px)

| Class | Mobile | Desktop max | Line height | Notes |
|---|---|---|---|---|
| `.heading-xxxl` | about 48px | 160px (at 1600px) | 0.8 | Hero manifesto lines, uppercase |
| `.heading-xxl` | 36px | 104px | 0.9-0.95 | Section statements |
| `.heading-xl-alt` | about 44px | 90px | 0.95 | Alternative large headline |
| `.heading-xl`, `h1` | 30px | 62px | 0.95 (0.9 when uppercase) | Page titles |
| `.heading-large`, `h2` | 24px | 42px+ | 1.0 | Section headings |
| `.heading-med`, `h3` | 20px | about 30px | 1.05 | Tile headings |
| Button / serif link | 20px | 20-24px | 1.2 | Serif with arrow |
| Body `.text-reg` | 16px | 16-18px | 1.2 | Sans 600 |
| `.text-xsml` | 12px | 14px | 1.2 | Nav, tags, filters, uppercase |

### Rules

- Hero and manifesto headlines are UPPERCASE serif; secondary headings are sentence case serif.
- Body text is sans semibold (600) at a tight 1.2 line height. It reads dense and punchy.
- Nav, tags, filters and labels are small uppercase sans.
- Brackets and slashes are used as typographic decoration: "[START]", "[MENU]", "\\" before quotes.
- Never use the serif in bold; the display cut is 400 only.

## 4. Logo & Brand Mark

The logo is the wordmark **ENTREPRENEURS FIRST** in a wide, flat-sided sans, all caps, single line, set in EF Orange `#FF7448`. The site uses it as a background image (`logo-new.svg`, 173.65 x 12.33) on the violet header. The short form **EF** is used in copy ("Joining EF was a life-changing decision") and works as an avatar.

- **Color versions:** orange on violet (site header), orange on midnight purple, midnight purple on mist, mist on violet.
- **Short form:** "EF" built from the wordmark's E and F.
- **Clear space:** at least the cap height on all sides.
- **Minimum size:** 120px wide for the full wordmark (it is very thin); use "EF" below that.

Misuse:

- Do not set the name in the serif display font as a logo.
- Do not stack the wordmark onto two lines unless using an official stacked version.
- Do not place orange on orange or the wordmark on photos without a solid block behind it.

## 5. Components

### Buttons and arrow links (signature)

EF buttons are typographic, not boxes.

| Variant | Background | Text | Border | Radius | Notes |
|---|---|---|---|---|---|
| Arrow link (`.btn`) | none | serif 20px, section text color | none | 0 | Right arrow icon after the label; underline via `.linkline` |
| Arrow link hover | none | `#F64121` | none | 0 | Arrow slides right (`transform: translateX`), 50ms `cubic-bezier(.65,0,.35,1)`; underline removed |
| Outline (`.btn--outline`) | transparent | serif, section text color | 1px current color | 0 | padding about 4px 16px; hover border `#FF7448` and white arrow |
| Dark purple (`.btn--dark-purple`) | none | `#1D0040` | none | 0 | dark arrow icon |
| Form submit | transparent | `#FF7448` serif 20px | 1px `#FF7448` | 0 | padding 4px 16px |

The underline is drawn with a background gradient, 1px tall, sitting at 10% from the bottom of the text:

```css
.ef-link {
  font: 400 20px/1.2 "PS Times", "Instrument Serif", serif;
  color: #1D0040; text-decoration: none;
  background-image: linear-gradient(90deg, #6300DD 0, #6300DD 100%);
  background-size: 100% 1px; background-position: left 100% bottom 10%;
  background-repeat: no-repeat;
}
.ef-link::after {
  content: "\2192"; display: inline-block; margin-left: .35em;
  transition: transform 50ms cubic-bezier(.65,0,.35,1);
}
.ef-link:hover { color: #F64121; background-image: none; }
.ef-link:hover::after { transform: translateX(4px); }
```

### Navigation

- Sticky header (`position: sticky; top: 0; z-index: 50`), violet `#6300DD`, mist text, 1px `#DFEAEA` bottom border.
- Nav items are 48px tall (56px from 550px up), uppercase 12-14px sans semibold.
- Two groups: "[START]" with Apply, Insights, FAQs; "[MENU]" with About us, Portfolio, Careers. Dropdowns are violet panels with uppercase links.
- Orange wordmark centered or left as a background image.
- Mobile nav is a full-screen violet sheet.

### Tiles

- **Program tile:** 1px `#1D0040` border, 20px padding, square corners; heading turns orange on hover, a list of facts below with a small filled heading bar that turns violet.
- **Company tile:** `#DFEAEA` fill, 1px `#1D0040` border, 12px padding, logo and name; hover name turns violet with violet linkline. Featured tiles hover orange.
- **Company row (signature):** full-width row, 1px bottom rule (top rule on first), 20px vertical padding. A violet `::after` layer sits below the row (`top: 100%`) and slides up to `top: 0` on hover (100ms `cubic-bezier(.65,0,.35,1)`), while name, description and tag text switch to mist.
- **Post tile:** image with 66.66% aspect ratio, category tags, serif heading, linkline on hover.

### Tags

`.categorytag` and `.locationtag`: small uppercase sans (12px), 1px border in the section color (violet on light, mist on violet), square corners, tight padding (about 2px 8px, approximate). Hover changes border and text to midnight purple (light) or orange (violet).

### Inputs

`padding: .75em; background: transparent; border: 1px solid #1D0040; border-radius: 0; color: #1D0040; font-family: inherit`. Focus: `border: 1px solid #FF7448`, no outline glow. Newsletter email field uses the serif at 20px.

### People rows

Team list as rows: name in serif, role in sans, a floating headshot that fades in next to the cursor on hover; rows expand with a plus icon to show bio text.

### Quotes

Testimonial blocks start with a double backslash marker "\\", then a large serif quote, then the name and company in sans: "Joe Root, founder of Permutive".

### Video

Plyr player with `--plyr-color-main: #FF7448`; play button swaps to an orange icon on hover.

## 6. Layout & Spacing

- **Grid:** a simple float/flex grid with `.col-1-2`, `.col-1-3` style classes; side margin `.bd` of 16px on mobile, wider on desktop.
- **Breakpoints:** 441, 550, 700, 1000, 1200, 1400, 1600, 1800, 2000px. Headline sizes step up at most of these.
- **Spacing:** em-based: section padding `calc(.5em * 2)` to `calc(.75em * 2)` multiplied by section variants (2.5rem, 3rem, 4rem, 5rem, 5.5rem). In practice: 40-88px between sections.
- **Max width:** content goes nearly full-bleed; text columns cap around 800-900px (approximate).
- **Density:** large headline, short dense paragraph, list of bullet facts, arrow link. Lots of color-block sections stacked without gaps.

## 7. Depth, Elevation & Motion

- Completely flat: no shadows, no radii (only avatars and a couple of round icons use 50%).
- Separation through 1px `#1D0040` or `#DFEAEA` rules and color changes between sections.
- Motion is quick and mechanical: 50ms arrow nudges and 100ms row fills with `cubic-bezier(.65,0,.35,1)`. Load-more icons rotate 90deg on hover.
- Respect `prefers-reduced-motion` by turning off the row slide and arrow nudge.

## 8. Iconography & Imagery

- **Icons:** Font Awesome 5 Pro (light/regular) plus custom SVG arrows in several colors (`arrow-right-white.svg`, `arrow-right-dark-purple.svg`), plus and close icons. Thin, square-ended strokes.
- **Photography:** founders and cohorts at work, events, Demo Day stage shots. Often shown in black sections or in square crops.
- **Video:** YouTube Demo Day and founder story videos with large orange play buttons.
- **No illustration.** Graphic interest comes from type size and color blocks.

## 9. Voice & Microcopy

Direct, ambitious, a little provocative. Talks to "exceptional individuals" and "you". Uses numbered, factual bullet lists. Names investors and founders explicitly.

- Uppercase manifesto lines, sentence case elsewhere.
- CTAs are verbs: "Apply", "See more", "Watch".

Sample strings (seen on joinef.com on 2026-11-16):

- Hero: "FOUND, DON'T FOLLOW"
- Sub: "We turn exceptional individuals into funded founders. We back you first, then give you a bridge to Silicon Valley."
- Section: "We build unicorn cofounding teams from scratch."
- Section: "We invest early, fast, and on founder-friendly terms."
- Fact: "EF's portfolio of companies is now collectively valued at over $24B." (as stated on the homepage on 2026-11-16)
- Quote: "\\ Joining EF was a life-changing decision."

## 10. Do's and Don'ts

**Do**

- Use full-bleed blocks of violet `#6300DD`, orange `#FF7448`, mist `#DFEAEA` and black, with the text color rules above.
- Set hero lines in huge uppercase serif with line-height 0.8-0.95.
- Keep every corner square and every border 1px.
- Use serif arrow links instead of filled buttons; turn them `#F64121` on hover and slide the arrow.
- Use the violet bottom-up row fill for lists.

**Don't**

- Don't use pure white backgrounds; use mist `#DFEAEA`.
- Don't add rounded corners, shadows or gradients.
- Don't set long body copy in the serif; body is sans semibold.
- Don't put violet text on orange or orange text on mist at small sizes (low contrast).
- Don't mix the old "Entrepreneur First" and current "Entrepreneurs First" spellings on one page.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Entrepreneurs First (joinef.com). Page background is mist `#DFEAEA`, text midnight purple `#1D0040`. Stack full-bleed color sections: violet `#6300DD` with mist text and orange `#FF7448` hovers; orange `#FF7448` with midnight text; black with mist text. Headlines in a display serif (`"PS Times", "Instrument Serif", "Times New Roman", serif`, weight 400), hero lines UPPERCASE and huge (up to 160px, line-height 0.8-0.9); h1 62px, h2 42px. Body in `"neue-haas-grotesk-display", Inter, sans-serif` at weight 600, 16px, line-height 1.2. Small labels and nav are 12-14px uppercase sans. Sticky violet header with an orange all-caps wordmark and nav groups labelled "[START]" and "[MENU]". No rounded corners anywhere, no shadows. Buttons are serif text links with a right arrow and a 1px violet underline; on hover the text turns `#F64121` and the arrow slides right. Inputs are 1px midnight-purple boxes with square corners that turn orange on focus. Lists are full-width rows with 1px rules that fill violet from the bottom on hover while the text turns mist. Copy is bold and direct: "FOUND, DON'T FOLLOW".

```css
:root {
  --brand-orange: #FF7448;
  --brand-violet: #6300DD;
  --brand-midnight: #1D0040;
  --brand-mist: #DFEAEA;
  --brand-red: #F64121;
  --brand-lavender: #6E24F5;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-grey: #888888;
  --brand-success: #58CB72;
  --brand-font-serif: "PS Times", "Instrument Serif", "Times New Roman", serif;
  --brand-font: "neue-haas-grotesk-display", "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-weight-body: 600;
  --brand-radius: 0;
  --brand-border: 1px solid #1D0040;
  --brand-ease: cubic-bezier(.65, 0, .35, 1);
  --brand-duration-arrow: 50ms;
  --brand-duration-row: 100ms;
  --brand-header-height: 56px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Entrepreneurs First.

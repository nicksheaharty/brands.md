---
name: Pear VC
slug: pear-vc
url: https://pear.vc
category: Accelerator
tagline: "Cream pages, soft green-to-lime gradients, rounded pill buttons and a faceted green pear."
updated: 2026-11-16
logoBackground: "#FFFDF8"
theme: light
colors:
  - name: Pear Green
    hex: "#7CEE6A"
    role: Logo mark, button borders and gradient start, focus glow
  - name: Cream
    hex: "#FFFDF8"
    role: Page and header background
  - name: Black
    hex: "#000000"
    role: Headings, body text, dark pill buttons, wordmark
  - name: Lime Cream
    hex: "#ECFFB2"
    role: Gradient end on buttons and glows
  - name: Parchment
    hex: "#FCF7EE"
    role: Section gradient start, text on black buttons
  - name: Spring
    hex: "#B4F78E"
    role: Radial glow centers behind hero content
  - name: Pale Lime
    hex: "#D0FBA0"
    role: Quote and podcast glow centers
  - name: Navy Ink
    hex: "#001D3D"
    role: Default body text color
  - name: Sun
    hex: "#FFF373"
    role: Yellow card gradient start
  - name: Blush
    hex: "#FFE6DD"
    role: Yellow and purple card gradient end
  - name: Orchid
    hex: "#D073FF"
    role: Purple spotlight card gradient start
  - name: Sky
    hex: "#2C9AFF"
    role: Blue spotlight card gradient start
  - name: Tag Border
    hex: "#D4D1CC"
    role: Hairline borders on tags (rgba 40,28,3 at 20%)
fonts:
  display:
    family: "Season Mix"
    fallback: "Newsreader"
    weights: [400, 600]
  body:
    family: "Season Mix"
    fallback: "Newsreader"
    weights: [400]
  mono:
    family: "Season Sans"
    fallback: "Inter"
    weights: [500, 700]
typeScale:
  - { role: H1, size: 72, weight: 400, lineHeight: 1.0, tracking: "0" }
  - { role: H2, size: 56, weight: 400, lineHeight: 1.1, tracking: "0" }
  - { role: H4, size: 32, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: Card Title, size: 24, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 19, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Button, size: 19, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Small, size: 15, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Eyebrow, size: 11, weight: 700, lineHeight: 1.0, tracking: "0.72px" }
radii: { sm: 10, md: 10, lg: 32, pill: 50 }
spacing: [8, 16, 24, 32, 48, 64, 80, 96]
shadows:
  - { name: Card, value: "0 0 8px 0 rgba(40,28,3,0.2)" }
  - { name: Green Glow, value: "0 0 8px 0 #7CEE6A" }
  - { name: Green Glow Large, value: "0 0 16px 0 rgba(124,238,106,0.5)" }
preview:
  bg: "#FFFDF8"
  surface: "#FCF7EE"
  text: "#000000"
  muted: "#5C5A55"
  border: "#7CEE6A"
  accent: "#000000"
  accentText: "#FCF7EE"
  radius: 50
  buttonStyle: pill
---

# Pear VC

## 1. Visual Theme & Atmosphere

Pear VC is a seed-stage firm in Palo Alto; PearX is its pre-seed accelerator program. The site (pear.vc, rebuilt in 2026) feels fresh and friendly: a warm cream page (`#FFFDF8`), large soft serif-sans headlines in black, and gentle glows of green fading to lime and cream behind content. The green comes from the logo, a faceted, low-poly pear in `#7CEE6A`.

What makes it recognisable:

- **Gradients that fade into the page.** Radial and linear blends from spring green (`#B4F78E` / `#7CEE6A`) through lime cream (`#ECFFB2`) to the cream page. They feel like light, not like a color block.
- **Pill buttons with a gradient fill.** Primary buttons are 50px-radius pills with a 1px green border and a vertical green-to-lime gradient. The dark variant is solid black with cream text.
- **Season Mix type.** A hybrid face with serif-like warmth and sans-like structure, used at regular weight for everything from 72px headlines to 19px body. Small uppercase labels switch to Season Sans.
- **Founder storytelling.** The hero rotates sentences built from founder names and company outcomes: "We first backed Alfred & Florian at seed. Listen Labs is the AI research partner for hundreds of brands."
- **Colored spotlight cards.** Company spotlights use rounded 10px cards with top-to-bottom gradients in green, yellow-to-blush, purple-to-blush or blue-to-ice.

Mood words: optimistic, warm, founder-first, approachable, Silicon Valley but soft.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Pear Green | `#7CEE6A` | Logo, button border, gradient start, focus glow |
| Lime Cream | `#ECFFB2` | Gradient middle and end |
| Spring | `#B4F78E` | Radial glow centers (company spotlight, resources header) |
| Pale Lime | `#D0FBA0` | Quote and podcast glows (`#D0FBA0` to `#F6FED5`) |
| Cream | `#FFFDF8` | `html`, `body` and header background |
| Parchment | `#FCF7EE` | Section gradients, text on black buttons |
| Black | `#000000` | Headings, paragraphs, dark buttons, tags on dark |
| Navy Ink | `#001D3D` | Body default color (most text overrides to black) |
| Sun | `#FFF373` | Yellow card gradient start |
| Blush | `#FFE6DD` | Yellow and purple gradient ends |
| Orchid | `#D073FF` | Purple spotlight gradient |
| Sky | `#2C9AFF` | Blue spotlight gradient (to `#C2F9FF`) |
| Periwinkle | `#5C89FD` | `.blue` text utility |
| Tag Border | `rgba(40,28,3,0.2)` | Tag outlines, card shadow tint |

### Signature gradients

```css
--pear-btn: linear-gradient(to bottom, #7CEE6A 0%, #ECFFB2 100%);
--pear-card-green: linear-gradient(to bottom, #7CEE6A 0%, #ECFFB2 62%, #FCF7EE 100%);
--pear-card-yellow: linear-gradient(to bottom, #FFF373 0%, #FFE6DD 62%, #FCF7EE 100%);
--pear-card-purple: linear-gradient(to bottom, #D073FF 0%, #FFE6DD 100%);
--pear-card-blue: linear-gradient(to bottom, #2C9AFF 0%, #C2F9FF 62%, #FCF7EE 100%);
--pear-glow: radial-gradient(ellipse closest-side at 50% 50%, #B4F78E 0%, #ECFFB2 50%, #FFFDF8 100%);
--pear-quote-glow: radial-gradient(closest-side at 50% 50%, #D0FBA0 5%, #ECFFB2 40%, #FFFDF8 100%);
```

### Semantic colors

The theme still ships Bootstrap 5 defaults underneath (`#198754` success, `#DC3545` danger, `#FFC107` warning, `#0D6EFD` primary). They are not part of the brand look; restyle any state UI with black text, green borders and the green glow.

### Dark mode

No dark mode. Black is used for buttons, tags on press items and occasional dark spotlight cards with cream (`#FCF7EE`) text.

## 3. Typography

**Families**

- **Season Mix** (commercial, from the Season superfamily) for headings, paragraphs and buttons. Regular 400 and SemiBold 600.
- **Season Sans** (Medium 500, Bold 700) for eyebrows, tags and small labels.
- Roboto, Montserrat and Fjalla One appear in leftover plugin styles; ignore them.

Free substitutes: **Newsreader** (or Fraunces at low optical size) for Season Mix, **Inter** for Season Sans. Season Mix sits between serif and sans, so pick a soft serif rather than a geometric sans. These substitutes are approximate.

### Scale

| Role | Size (desktop / mobile) | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 | 72px / 64px | 400 | 100% | 0 |
| H2 | 56px / 48px | 400 | 110% | 0 |
| H4 / large stat | 32-40px | 400 | 1.15 | 0 |
| Card title | 24px | 400 | 1.2 | 0 |
| Paragraph | 19px / 18px | 400 | 120% | 0 |
| Button | 19px / 18px | 400 | 120% | 0 |
| Small | 15-16px | 400 | 1.3 | 0 |
| H3 / eyebrow | 11px uppercase, Season Sans | 700 | 1 | 0.72px |
| Tag | 11px uppercase, Season Sans | 500 | 1 | 0.72px |

### Rules

- Headlines are sentence case and regular weight; size alone carries hierarchy.
- `h3` is styled as a tiny uppercase eyebrow, not a heading: "HOW WE INVEST", "FOUNDERS".
- Founder and company names inside hero sentences can be set in a different color or underlined to stand out.
- Body copy is set larger than usual (19px) with tight 1.2 line height.

## 4. Logo & Brand Mark

The logo is a **faceted green pear**: a low-poly silhouette made of straight edges, with a short stem and two pointed leaves, in Pear Green `#7CEE6A`. In the full lockup the word **Pear** sits to its right in a black serif-sans with a capital P. The site serves the lockup as a PNG (`pear-logo.png`, `pear-logo-dark.png`) and the pear alone as the favicon.

- **Color versions:** green pear with black wordmark on cream (primary); green pear with cream wordmark on black (dark logo).
- **Mark only:** the pear works as avatar and favicon on cream or white.
- **Clear space:** one leaf's height on all sides.
- **Minimum size:** 20px tall for the pear; 80px wide for the lockup.

The `logo.svg` in this folder is a vector trace of the faceted pear from Pear's favicon, since no official SVG was published; the wordmark is not included.

Misuse:

- Do not smooth the pear into curves; the straight facets are the identity.
- Do not recolor the pear to the darker Bootstrap green or add a gradient to it.
- Do not set "Pear" in a heavy sans.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary (gradient pill) | `linear-gradient(to bottom, #7CEE6A, #ECFFB2)` via `::before` | `#000` Season Mix 19px | 1px `#7CEE6A` | 50px | 20px 48px |
| Primary hover | gradient fades out (opacity 0) to show cream, or keeps gradient on mobile | `#000` | `#7CEE6A` | 50px | same |
| Dark pill | `#000000` | `#FCF7EE` 19px | 1px `#000` | 50px | 19.6px 47.3px |
| Ghost on cards | transparent | card text color | 1px current color | 50px | 12px 24px |
| Round arrow | `#000` or cream | inverse | 1px | 50% | 48px circle |

Transitions: `all 0.35s`. Focus: green glow `box-shadow: 0 0 8px 0 #7CEE6A` (16px glow at 50% on larger elements).

```css
.pear-btn {
  position: relative; overflow: hidden; display: inline-flex; align-items: center;
  padding: 20px 48px; border: 1px solid #7CEE6A; border-radius: 50px;
  background: transparent; color: #000;
  font: 400 19px/1.2 "Season Mix", Newsreader, Georgia, serif;
  transition: all .35s; isolation: isolate;
}
.pear-btn::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background: linear-gradient(to bottom, #7CEE6A 0%, #ECFFB2 100%);
  transition: opacity .35s;
}
.pear-btn:hover::before { opacity: 0; }
.pear-btn--dark { background: #000; color: #FCF7EE; border-color: #000; }
.pear-btn:focus-visible { outline: none; box-shadow: 0 0 8px 0 #7CEE6A; }
```

### Navigation

- Cream header (`#FFFDF8`), 24.5px vertical padding. Logo left.
- Links: "How We Invest", "Companies", "Team", "Founder Services", "News & Events", "PearX", 16-19px Season Mix, black. PearX often gets the button treatment.
- Mobile: full-screen cream menu with large links.

### Hero sentence rotator (signature)

A large centered statement that swaps founder names and outcomes: "We partnered with Tony, Stanley & Andy in 2013. DoorDash is now an $83B public company (DASH)." (as shown on pear.vc on 2026-11-16). Names and company names are set apart (bold, underline or green highlight), and portfolio logos (SVG, black) sit below. A soft green radial glow sits behind.

### Company directory

The Companies page reads "Where early ideas turn into Enduring companies" and has filter pills: "Spotlight", "All", then verticals ("AI Applications", "AI Infrastructure", "B2B", "Biotech", "Consumer", "Deep Tech", "FinTech", "Healthcare").

- Filter pills: 50px radius, 1px border `rgba(40,28,3,0.2)`, active state black fill with cream text or green gradient (approximate).
- Company card: cream or white, 10px radius, `0 0 8px 0 rgba(40,28,3,0.2)` shadow, logo top, vertical tag (11px uppercase pill), one-line description, and a small link arrow.
- Spotlight cards: tall (min-height about 672px), 10px radius, full gradient fill (green, yellow, purple or blue), founder photo, quote and an outlined pill button.

### Tags

`height: 22px; padding: 3px 6px 2px; border-radius: 50px; border: 1px solid rgba(40,28,3,0.2);` Season Sans 11px/500 uppercase, `letter-spacing: 0.72px`, black. On press items: black fill with cream text.

### Cards and stats

- Program benefit cards (PearX): 10px radius, gradient fill (green or yellow variants), 24-48px padding, a 32px headline and 19px copy.
- Stats row on PearX: large numbers like "$500K-$2M" with a small label "Check size per company" (read on pear.vc/pearx on 2026-11-16).
- Podcast and quote blocks: 10px radius, `linear-gradient(to bottom, #D0FBA0, #F6FED5)`, 48px padding.

### Inputs

Rounded fields (radius 10px or pill), 1px `rgba(40,28,3,0.2)` border, cream fill, black text. Focus: green glow `0 0 8px #7CEE6A` and green border. Approximate; the forms are third-party embeds.

## 6. Layout & Spacing

- **Grid:** Bootstrap 5 container and 12-column grid with gutters of 16-48px (`--bs-gutter-x`).
- **Max width:** about 1320px container; narrow text blocks around 984px (quote glow width).
- **Breakpoints:** Bootstrap: 576, 768, 992, 1200, 1400px; the theme also switches at 1500px.
- **Section spacing:** 96px desktop, 80px tablet, 64px mobile.
- **Rhythm:** sections fade from Parchment `#FCF7EE` at the top to Cream `#FFFDF8` over about 277px, so bands blend instead of hard-cutting.

## 7. Depth, Elevation & Motion

- Soft, warm shadow on cards: `0 0 8px 0 rgba(40,28,3,0.2)` (centered, no offset).
- Green glows for focus and active states: `0 0 8px 0 #7CEE6A`, larger `0 0 16px 0 rgba(124,238,106,0.5)`.
- Inset variant for pressed fields: `inset 0 0 8px 0 rgba(40,28,3,0.2)`.
- Motion: `all 0.35s` on buttons; logo marquees scroll at a 40s loop (`--animation-speed: 40s`); a slow spinning gradient element on the "Let's work together" block uses CSS `--angle` steps of 72deg.
- Keep motion slow and soft; respect `prefers-reduced-motion` for marquees and spinners.

## 8. Iconography & Imagery

- **Icons:** minimal. Font Awesome 5 glyphs in places (social, arrows). Prefer thin outline arrows in round buttons.
- **Photography:** warm, natural photos of founders and Pear partners, often cut out or set inside gradient cards. Smiling, informal.
- **Logos:** portfolio logos in black SVG in a scrolling strip.
- **Graphic device:** soft color glows (radial gradients) and the faceted pear. No 3D, no hard geometric patterns.

## 9. Voice & Microcopy

Warm, personal, first-person plural. Talks about relationships ("We first backed...", "We partnered with...") and the very early stage ("even when all you have is an idea").

- Sentence case.
- CTAs are friendly and short: "Apply Now", "Team", "Founder Services".

Sample strings (seen on pear.vc on 2026-11-16):

- "Your first investor team"
- "We're early believers and long-term partners even when all you have is an idea."
- "Partner with former founders and operators"
- "Close your first hires and first customers"
- "Fundraise with confidence"
- PearX: "Go from 0 to 1 with our elite program for pre-seed founders"

## 10. Do's and Don'ts

**Do**

- Use cream `#FFFDF8` as the page and let green glows fade into it.
- Make primary buttons pills with a 1px green border and a green-to-lime vertical gradient; use black pills for the second action.
- Set headlines large and regular weight in a soft serif-sans.
- Use tiny uppercase tags with hairline borders.
- Tell founder stories with names, years and outcomes.

**Don't**

- Don't use flat saturated green blocks; the green should glow and fade.
- Don't use sharp corners on buttons; cards are 10px, buttons are fully round.
- Don't use bold headlines or heavy drop shadows.
- Don't use pure white pages; stay on cream.
- Don't let the Bootstrap blue `#0D6EFD` leak into links or buttons.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Pear VC (pear.vc). Cream page `#FFFDF8`, black text. Font: `"Season Mix", Newsreader, Georgia, serif` at weight 400 for everything; H1 72px line-height 1, H2 56px line-height 1.1, body 19px line-height 1.2. Small uppercase labels in `"Season Sans", Inter` 11px bold with 0.72px tracking. Primary buttons are pills (radius 50px, padding 20px 48px) with a 1px `#7CEE6A` border and a vertical gradient fill `linear-gradient(to bottom, #7CEE6A, #ECFFB2)`; secondary is a black pill with cream `#FCF7EE` text. Behind hero and quotes, place soft radial glows `radial-gradient(ellipse closest-side, #B4F78E 0%, #ECFFB2 50%, #FFFDF8 100%)`. Cards are 10px radius with a soft centered shadow `0 0 8px 0 rgba(40,28,3,0.2)`; spotlight cards use top-to-bottom gradients (green to lime to cream, yellow `#FFF373` to blush `#FFE6DD`, purple `#D073FF` to blush). Tags are 22px pills with a hairline `rgba(40,28,3,0.2)` border. Focus states glow green `0 0 8px #7CEE6A`. Transitions `all .35s`. Copy is warm and founder-first: "We first backed Alfred & Florian at seed."

```css
:root {
  --brand-green: #7CEE6A;
  --brand-lime: #ECFFB2;
  --brand-spring: #B4F78E;
  --brand-pale-lime: #D0FBA0;
  --brand-cream: #FFFDF8;
  --brand-parchment: #FCF7EE;
  --brand-black: #000000;
  --brand-ink: #001D3D;
  --brand-sun: #FFF373;
  --brand-blush: #FFE6DD;
  --brand-orchid: #D073FF;
  --brand-sky: #2C9AFF;
  --brand-hairline: rgba(40, 28, 3, 0.2);
  --brand-font: "Season Mix", "Newsreader", Georgia, serif;
  --brand-font-label: "Season Sans", "Inter", system-ui, sans-serif;
  --brand-gradient-button: linear-gradient(to bottom, #7CEE6A 0%, #ECFFB2 100%);
  --brand-gradient-glow: radial-gradient(ellipse closest-side at 50% 50%, #B4F78E 0%, #ECFFB2 50%, #FFFDF8 100%);
  --brand-radius-card: 10px;
  --brand-radius-pill: 50px;
  --brand-shadow-card: 0 0 8px 0 rgba(40, 28, 3, 0.2);
  --brand-shadow-glow: 0 0 8px 0 #7CEE6A;
  --brand-transition: all .35s;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Pear VC.

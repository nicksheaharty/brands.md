---
name: University of Pennsylvania
shortName: "Penn"
slug: upenn
url: https://www.upenn.edu
category: Education
tagline: "Penn Blue and Penn Red on white, Garamond headlines, and a shield dating to 1740."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Penn Blue
    hex: "#011F5B"
    role: Primary brand colour, logo, header, headings, primary buttons
  - name: Penn Red
    hex: "#990000"
    role: Secondary brand colour, accents, rules, shield chief, highlights
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on Penn Blue
  - name: Gray Dark
    hex: "#2D3545"
    role: Default body text
  - name: Gray
    hex: "#595F6A"
    role: Secondary text, captions, metadata
  - name: Gray Light
    hex: "#F5F5F6"
    role: Subtle section backgrounds
  - name: Gray Blue Light
    hex: "#EEEEF4"
    role: Brand-tinted section backgrounds, cards
  - name: Link Blue
    hex: "#0E5696"
    role: Inline links, focus accents
  - name: Blue Light
    hex: "#D4E4F2"
    role: Accent backgrounds, selected rows
  - name: Green
    hex: "#267434"
    role: Success text and icons
  - name: Orange
    hex: "#BD4718"
    role: Attention and warning text
  - name: Purple
    hex: "#80317F"
    role: Info accents
  - name: Penn Yellow
    hex: "#F2C100"
    role: Occasional web highlight, athletics and events
fonts:
  display:
    family: "EB Garamond"
    fallback: "EB Garamond"
    weights: [400, 500, 600]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [400, 500, 700]
typeScale:
  - { role: Display, size: 56, weight: 500, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H1, size: 40, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: H2, size: 30, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Card Headline, size: 22, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: UI, size: 15, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Kicker, size: 13, weight: 700, lineHeight: 1.3, tracking: "0.1em" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 1px 3px rgba(1,31,91,0.12)" }
  - { name: Menu, value: "0 8px 24px rgba(1,31,91,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#EEEEF4"
  text: "#011F5B"
  muted: "#595F6A"
  border: "#D4D7DE"
  accent: "#990000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# University of Pennsylvania

## 1. Visual Theme & Atmosphere

Penn's identity is institutional and old, and it does not hide it. The web presence is white pages with deep navy (Penn Blue, `#011F5B`) carrying structure and authority, and a dark brick red (Penn Red, `#990000`) used as the accent. Headlines are set in EB Garamond, a classical old-style serif; interface text and labels use Roboto. Photography of the campus and of people does most of the emotional work.

What makes it recognisable:

- **Navy and red, in that order.** Penn Blue dominates; Penn Red is the second colour, roughly an 80/20 split in most materials. Both are dark and saturated, so they read as formal rather than loud.
- **Serif headlines.** Story headlines, page titles and section names are EB Garamond at medium weight. This is the strongest signal that a page is Penn.
- **Small uppercase kickers.** Category labels ("CAMPUS & COMMUNITY", "HEALTH & MEDICINE") and link calls ("MORE NEWS VIA PENN TODAY") are short uppercase sans text with wide tracking.
- **Square corners.** Cards, buttons and images are square or very nearly so. Nothing is pill-shaped except tags and filter chips.
- **The shield.** The arms (a red chief with two open books and a dolphin, over a navy chevron with three white plates on white) appear in the logo, on banners and in the footer.

Density is medium. The homepage is a news front page: a featured story, topic filters, grids of story cards, events, priorities and a large footer. Interior pages are text-led with generous line length limits.

## 2. Color Palette & Roles

### Primary

| Name | Hex | Print | Role |
| --- | --- | --- | --- |
| Penn Blue | `#011F5B` | PMS 288 | Logo, header bar, headings, primary buttons, footer |
| Penn Red | `#990000` | PMS 201 | Accent rules, kickers, hover states, shield chief, secondary CTAs |
| White | `#FFFFFF` | n/a | Background, text on Penn Blue or Penn Red |

### Neutrals and functional colours

These come from Penn Libraries' public design system, which formalises the university palette for interfaces.

| Name | Hex | Token | Role |
| --- | --- | --- | --- |
| Gray Dark | `#2D3545` | `fg-default` | Body text |
| Gray | `#595F6A` | `fg-subtle` | Secondary text, captions, dates |
| Gray Light | `#F5F5F6` | `bg-subtle` | Alternating section backgrounds |
| Gray Blue Light | `#EEEEF4` | `bg-subtle-brand` | Card fills, callouts |
| Border | `#D4D7DE` | n/a | Hairlines, input borders |
| Link Blue | `#0E5696` | `fg-accent` | Inline links |
| Blue Light | `#D4E4F2` | `bg-accent` | Selected and highlighted rows |
| Green | `#267434` | `fg-success` | Success |
| Green Light | `#F1F7E1` | `bg-success` | Success background |
| Orange | `#BD4718` | `fg-attention` | Warning |
| Orange Light | `#FEEDDD` | `bg-attention` | Warning background |
| Purple | `#80317F` | `fg-info` | Info |
| Purple Light | `#F2DFED` | `bg-info` | Info background |

### Extended accents

Schools within Penn publish wider palettes. Wharton, for example, adds Cobalt `#0066FF`, Sunset Red `#962270`, Morning Yellow `#D7BC6A`, Marine Gray `#EEEDEA`, Bay Blue `#2FB6F2` and Penn Yellow `#F2C100` (web only). Use these sparingly (5-10% of a layout) and never in place of Penn Blue and Penn Red.

### Contrast

- Penn Blue on white is about 15:1, Penn Red on white about 8.9:1. Both pass AA for any text size.
- White on Penn Red passes AA for body text. Do not put Penn Red text on Penn Blue (about 1.7:1).

### Mode

Light. There is no official dark mode. Penn Blue full-bleed bands (header, footer, feature blocks) provide the dark moments within a light page.

## 3. Typography

Penn's central web identity specifies two typefaces, both free on Google Fonts:

- **EB Garamond**: "used most frequently". Headlines, page titles, pull quotes, card headlines. Weights 400-600. Fallback: `Garamond, "Times New Roman", serif`.
- **Roboto**: "reserved for style and contrast". Navigation, buttons, kickers, labels, form text and often body copy in dense UI. Weights 400, 500, 700. Fallback: `"Helvetica Neue", Arial, sans-serif`.

Print and official documents historically pair the logo's custom serif lettering with licensed faces chosen by individual schools; on the web, use the two above.

### Scale

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display (hero headline) | EB Garamond | 56px | 500 | 1.1 | -0.01em |
| H1 | EB Garamond | 40px | 500 | 1.15 | 0 |
| H2 | EB Garamond | 30px | 500 | 1.2 | 0 |
| Card headline | EB Garamond | 22px | 500 | 1.3 | 0 |
| Body | Roboto (or EB Garamond for long reads at 19px) | 17px | 400 | 1.6 | 0 |
| UI / nav | Roboto | 15px | 500 | 1.4 | 0 |
| Kicker / link call | Roboto | 13px | 700 | 1.3 | 0.1em, uppercase |
| Caption | Roboto | 13px | 400 | 1.4 | 0 |

### Rules

- Sentence case headlines in the serif. Uppercase only for short sans kickers and link calls.
- Use old-style figures in serif body if available; lining figures in Roboto UI.
- Italic EB Garamond for emphasis and for the "of" in "University of Pennsylvania" as the wordmark does.
- Measure: 60-75 characters for body text.

## 4. Logo & Brand Mark

The official university logo is a lockup of the **shield** on the left and the **"Penn" wordmark** with "UNIVERSITY of PENNSYLVANIA" set beneath it in small caps on the right, all in Penn Blue, with the shield in full colour. The file provided here is the wordmark portion ("Penn" over "UNIVERSITY *of* PENNSYLVANIA" in `#011F5B`). Pair it with the shield to the left when building the full lockup.

- **Wordmark:** custom high-contrast serif "Penn" with a small-caps line beneath, "of" in italic lowercase.
- **Shield:** a white field with a Penn Red chief carrying two open books flanking a dolphin, and a Penn Blue chevron with three white roundels. The full arms add a scroll banner reading "LEGES SINE MORIBUS VANAE".
- **Colour versions:** full colour (blue wordmark, full-colour shield) on white; all-white reversed on Penn Blue; one-colour Penn Blue for single-ink print.
- **Clear space:** keep at least the height of the "P" in "Penn" clear on all sides.
- **Minimum size:** about 1 inch (or 120px) wide for the full lockup; below that, use the shield alone.
- **Shield restrictions:** student organisations may not use the University Shield; the shield is reserved for official university use.

Misuse: do not recolour the wordmark in Penn Red, separate "Penn" from the university line, stretch or outline it, set it in EB Garamond as a substitute, or place it over busy photography without a solid backing.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 24px;
  font: 700 14px/1 "Roboto", sans-serif;
  letter-spacing: 0.08em; text-transform: uppercase;
  border-radius: 0;
  border: 2px solid transparent;
  transition: background-color 150ms ease, color 150ms ease;
}
.btn-primary { background: #011F5B; color: #FFFFFF; }
.btn-primary:hover { background: #990000; }
.btn-secondary { background: transparent; color: #011F5B; border-color: #011F5B; }
.btn-secondary:hover { background: #011F5B; color: #FFFFFF; }
.btn-accent { background: #990000; color: #FFFFFF; }
.btn-accent:hover { background: #7A0000; }
.btn-reverse { background: #FFFFFF; color: #011F5B; }
.btn:focus-visible { outline: 3px solid #0E5696; outline-offset: 2px; }
.btn:disabled { background: #F5F5F6; color: #595F6A; border-color: #D4D7DE; }
```

The "Give to Penn" header CTA is a solid Penn Red button. Text link calls ("LEARN MORE", "MORE EVENTS VIA PENN TODAY") are uppercase Roboto 700 in Penn Blue with a trailing chevron or arrow and a 2px Penn Red underline on hover.

### Links

Inline body links: `#0E5696` (or Penn Blue), underlined, 1px thickness with 3px offset. Hover changes colour to Penn Red. Visited links stay the same colour.

### Inputs

```css
.input {
  height: 44px; padding: 0 12px;
  background: #FFFFFF; color: #2D3545;
  border: 1px solid #595F6A; border-radius: 0;
  font: 400 16px "Roboto", sans-serif;
}
.input:focus { outline: 3px solid #0E5696; outline-offset: 0; border-color: #011F5B; }
.input.is-error { border-color: #990000; }
label { font: 500 14px "Roboto", sans-serif; color: #2D3545; margin-bottom: 6px; display: block; }
```

Site search opens as a full-width bar under the header with a large serif placeholder.

### Story cards

- Image on top (3:2 or 16:9), square corners.
- Kicker in Penn Red, Roboto 13px 700 uppercase, 0.1em tracking ("TECHNOLOGY").
- Headline in EB Garamond 22px 500, Penn Blue; hover adds an underline.
- Optional dek in Roboto 15px `#595F6A`.
- No border or shadow; cards sit directly on white with 24-32px gaps. On grey bands, cards get a white fill.

### Event cards

Date block on the left: month in Roboto 13px 700 uppercase Penn Red, day in EB Garamond 40px Penn Blue. Title in EB Garamond 20px, then time and location in Roboto 14px gray, plus microcopy such as "Free and open to the public."

### Header and navigation

- White header, logo lockup left (about 200px wide), Roboto 15-16px 500 nav items in Penn Blue: "Academics", "Admissions & Aid", "Research & Innovation", "Life at Penn", "About".
- A thin utility row above or within a menu: "Current Students", "Faculty & Staff", "Parents", "Alumni", "Visitors", "Media", "Directory".
- Right side: "Give to Penn" red button and a search icon.
- Active nav item: 3px Penn Red bar under the label. Dropdowns are white panels with a 3px Penn Blue top border and the menu shadow.
- Skip links ("Skip to main content") are required and appear on focus.

### Topic filter tabs

A horizontal row of Roboto 14px 500 labels ("Featured", "Arts & Humanities", "Social Sciences", "Business & Law", ...). Active: Penn Blue text with a 3px Penn Red underline; inactive: `#595F6A`. On mobile, the row scrolls sideways.

### Footer

Full-width Penn Blue band, white text. Contains the logo reversed in white, "Philadelphia, PA 19104", "(215) 898-5000", column links ("Contact Us", "Maps", "Parking"), and the required global links: "Privacy Policy", "Report Accessibility Issues and Get Help", "Disclaimer", "Nondiscrimination", "Report Copyright Infringement", "Manage Cookies". Link text 14px Roboto, hover underline.

### Badges and tags

Rectangular tags with 2px radius, Roboto 12px 700 uppercase, either Penn Blue text on `#EEEEF4` or white on Penn Red for emphasis ("FEATURED"). Status uses the functional colour pairs (e.g. `#267434` on `#F1F7E1`).

### Modals

White, square corners, max 640px, 3px Penn Blue top border, overlay `rgba(1,31,91,0.6)`. Title in EB Garamond 28px; actions bottom-right.

### Quote blocks

Pull quotes in EB Garamond italic 28px Penn Blue with a 4px Penn Red left rule and 24px left padding; attribution in Roboto 14px uppercase.

## 6. Layout & Spacing

- **Max width:** about 1280px for page content, 760px for article text columns.
- **Grid:** 12 columns, 24px gutters on desktop, 16px on mobile. Story grids are 3 or 4 across on desktop, 2 on tablet, 1 on mobile.
- **Breakpoints:** 576, 768, 992, 1200, 1400px.
- **Spacing scale:** 4, 8, 16, 24, 32, 48, 64, 96px. Section bands use 64-96px vertical padding.
- **Banding:** alternate white, `#F5F5F6` and full-bleed Penn Blue sections to separate content without borders.
- **Density:** medium; front pages carry many stories but with clear whitespace between them.

## 7. Depth, Elevation & Motion

- Mostly flat. Hierarchy comes from colour bands, rules and type size.
- Card shadow, when used: `0 1px 3px rgba(1,31,91,0.12)`. Menus: `0 8px 24px rgba(1,31,91,0.16)`.
- Rules: 1px `#D4D7DE` dividers, 3-4px Penn Red accent bars under headings or active tabs.
- Motion: 150-200ms ease for hover colour changes; image zoom on card hover at most 1.03 scale over 300ms. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** simple line icons, 1.5-2px stroke, 20-24px, in Penn Blue or gray. Social icons are solid glyphs in the footer.
- **Photography:** real campus life: College Hall, Locust Walk, the Button, the Quad, labs, classrooms, Franklin Field, Philadelphia skyline. Natural light, warm, documentary. People are named and real; avoid generic stock.
- **Treatment:** no duotones in Penn Red. Overlays, when needed for text, are Penn Blue at 60-80%.
- **Heraldry:** the shield and its elements (books, dolphin, plates) may appear as subtle graphic devices in official contexts only.

## 9. Voice & Microcopy

Measured, confident, plain. It writes like a newspaper of record with institutional pride, not like a startup.

- Navigation: "Academics", "Admissions & Aid", "Research & Innovation", "Life at Penn", "About".
- CTAs: "Give to Penn", "Learn More", "Our History", "Visit the Center for Civil Rights", "Register to attend".
- Link calls: "MORE NEWS VIA PENN TODAY", "MORE EVENTS VIA PENN TODAY", "VISIT PENN TODAY".
- Event meta: "Free and open to the public."
- Headlines: concrete and specific ("Two Penn fourth-years named 2027 Rhodes Scholars").
- Say "Penn" in running copy, "University of Pennsylvania" on first formal reference. Never "UPenn" in official copy; that is a colloquial term.
- Use Penn's own terms: "first-year", "fourth-year", "the College".

## 10. Do's and Don'ts

**Do**

- Let Penn Blue lead and use Penn Red as the accent (about 80/20).
- Set headlines in EB Garamond and UI labels in Roboto.
- Keep corners square and surfaces flat.
- Use small uppercase red kickers above serif headlines.
- Include the required footer links and a link back to the university homepage.
- Use real, specific campus photography.

**Don't**

- Don't use bright reds (`#FF0000`) or royal blues in place of the official values.
- Don't put Penn Red text on Penn Blue.
- Don't use pill buttons or large radii.
- Don't use the shield for student groups or unofficial work.
- Don't call the university "UPenn" in headlines or official copy.
- Don't copy the homepage look for non-central sites; schools use the colours and type, not the exact layout.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of the University of Pennsylvania. White background, Penn Blue `#011F5B` for the header text, headings, primary buttons and a full-width footer band, and Penn Red `#990000` as the accent (kickers, active-tab underlines, the "Give" button, hover states) at roughly an 80/20 blue-to-red ratio. Set headlines in EB Garamond 500 (56/40/30/22px) and UI, labels and body in Roboto (17px body, 15px nav). Use small uppercase Roboto 700 kickers in Penn Red with 0.1em tracking above serif headlines. Corners are square (0-2px). Buttons are 44px, uppercase Roboto 700 14px. Body text `#2D3545`, secondary `#595F6A`, subtle bands `#F5F5F6` and `#EEEEF4`, inline links `#0E5696`. Flat surfaces, thin `#D4D7DE` rules, real campus photography.

```css
:root {
  --brand-penn-blue: #011F5B;
  --brand-penn-red: #990000;
  --brand-penn-red-dark: #7A0000;
  --brand-bg: #FFFFFF;
  --brand-bg-subtle: #F5F5F6;
  --brand-bg-brand: #EEEEF4;
  --brand-text: #2D3545;
  --brand-text-subtle: #595F6A;
  --brand-border: #D4D7DE;
  --brand-link: #0E5696;
  --brand-accent-bg: #D4E4F2;
  --brand-success: #267434;
  --brand-success-bg: #F1F7E1;
  --brand-warning: #BD4718;
  --brand-warning-bg: #FEEDDD;
  --brand-info: #80317F;
  --brand-info-bg: #F2DFED;
  --brand-font-serif: "EB Garamond", Garamond, "Times New Roman", serif;
  --brand-font-sans: "Roboto", "Helvetica Neue", Arial, sans-serif;
  --brand-radius: 0px;
  --brand-radius-tag: 2px;
  --brand-shadow-card: 0 1px 3px rgba(1, 31, 91, 0.12);
  --brand-content-width: 1280px;
  --brand-text-width: 760px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by the University of Pennsylvania.

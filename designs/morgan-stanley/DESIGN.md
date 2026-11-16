---
name: Morgan Stanley
shortName: Morgan
slug: morgan-stanley
url: https://morganstanley.com
category: Finance
tagline: "Clean black wordmark, deep navy heroes and a precise blue token system on white."
updated: 2026-11-16
appStoreId: 811512122
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#00080F"
    role: Primary text, logo, strong borders
  - name: Action Blue
    hex: "#2075CC"
    role: Primary button and UI fill
  - name: Navy
    hex: "#002952"
    role: Dark theme background, hero panels
  - name: Link Blue
    hex: "#115AA4"
    role: Text links, focus ring, input focus on light
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Cloud
    hex: "#F2F3F5"
    role: Secondary background
  - name: Hover Blue
    hex: "#275C90"
    role: Button and UI hover on light
  - name: Ice
    hex: "#DFEEFB"
    role: Tertiary background, selected rows
  - name: Sky
    hex: "#AED4FC"
    role: Links and borders on dark, gradient stop
  - name: Graphite
    hex: "#383B42"
    role: Secondary text
  - name: Border
    hex: "#CDD1D7"
    role: Subtle borders and dividers
  - name: Midnight
    hex: "#00172E"
    role: Hero gradient start
  - name: Success
    hex: "#177D57"
    role: Positive values, success text
  - name: Error
    hex: "#C62234"
    role: Negative values, errors
fonts:
  display:
    family: "MS Sans Light"
    fallback: "Inter"
    weights: [300, 400, 600]
  body:
    family: "MS Sans"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Display XXL, size: 68, weight: 600, lineHeight: 1.12, tracking: "-0.02em" }
  - { role: Display XL, size: 64, weight: 400, lineHeight: 1.18, tracking: "0" }
  - { role: Display L, size: 48, weight: 400, lineHeight: 1.18, tracking: "0" }
  - { role: Display S, size: 36, weight: 400, lineHeight: 1.18, tracking: "0" }
  - { role: Heading L, size: 32, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Body L, size: 20, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 500, lineHeight: 1.4, tracking: "0.04em" }
radii: { sm: 4, md: 6, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80, 96]
shadows:
  - { name: Card, value: "0 4px 12px 0 rgba(0,8,15,0.08)" }
  - { name: Raised, value: "0 10px 24px rgba(0,8,15,0.12)" }
  - { name: Menu, value: "0 6px 12px hsla(240,5%,53%,0.32)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F3F5"
  text: "#00080F"
  muted: "#383B42"
  border: "#CDD1D7"
  accent: "#2075CC"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Morgan Stanley

## 1. Visual Theme & Atmosphere

morganstanley.com is a crisp corporate site built on a well-documented token system (`--ms-*` variables). The default theme is white with near-black text; the site switches whole sections into a navy dark theme for heroes, statements and featured content. The look is modern and orderly: a thin sans wordmark, light display type, small 4px corners, and a single strong blue for actions.

What makes it recognisable:

- **The wordmark.** "Morgan Stanley" set in a clean, light-to-regular sans, in black. No symbol.
- **Light display type.** Big headlines use the light cut of MS Sans (`ms-sans-light`) at weight 400, so they look thin and refined rather than bold.
- **Navy theme sections.** `[data-theme=dark]` flips a section to `#002952` with pale blue links (`#AED4FC`). Heroes run a gradient from `#00172E` into navy.
- **Uppercase eyebrows.** Card and section labels ("Investment Banking", "Research") are 12-14px, weight 500, uppercase, with slight positive tracking.
- **Gradient borders and AI accents.** Some cards use a thin gradient edge from `#115AA4` to `#AED4FC`, and AI features use a navy-to-blue gradient (`#052E58` to `#2075CC`).
- **Measured density.** Mega menus are thorough (every business line has a description), while pages give each block room.

Mood words: composed, modern-institutional, clear, trustworthy, understated.

## 2. Color Palette & Roles

The site defines semantic tokens for a light theme (`:root, [data-theme=light]`) and a dark theme (`[data-theme=dark]`, `dark-blue`, `dark-black`). Values below are read from the production CSS.

### Light theme (default)

| Token | Hex | Role |
|---|---|---|
| bg-primary | `#FFFFFF` | Page background |
| bg-secondary | `#F2F3F5` | Alternating sections, inputs on white |
| bg-tertiary | `#DFEEFB` | Highlight panels, selected states |
| bg-tag-default | `#F9F9FA` | Tags and chips |
| foreground-primary | `#00080F` | Headings and body text |
| foreground-secondary | `#383B42` | Supporting text |
| text-link | `#115AA4` | Links, focus ring |
| bg-button-primary | `#2075CC` | Primary buttons and UI fills |
| bg-ui-hover | `#275C90` | Hover for buttons and controls |
| border-default | `#00080F` | Strong borders (secondary buttons) |
| border-subtle | `#CDD1D7` | Dividers, card borders |
| border-input | `#D6D6DB` | Input borders |
| placeholder | `#AEB4BD` | Placeholder text |

### Dark theme

| Token | Hex | Role |
|---|---|---|
| bg-primary | `#002952` | Navy section background |
| bg-secondary | `#000000` | Black sections |
| bg-tertiary | `#003061` | Raised panels on navy |
| bg-tag-default | `#09437C` | Tags on navy |
| foreground-primary | `#F9F9FA` | Text |
| foreground-secondary | `#E7E7EA` | Supporting text |
| foreground-tertiary | `#CDD1D7` | Captions |
| text-link | `#AED4FC` | Links |
| bg-button-primary | `#2075CC` | Primary buttons (same as light) |
| bg-ui-hover | `#6896C4` | Hover |
| border-ui-hover / input-focus | `#5CA4F0` | Input focus on dark |
| border-subtle | `#5B626E` | Dividers |

### Gradients

| Name | Stops |
|---|---|
| Hero | `#00172E` to `#002952` |
| Background | `#275C90` to `#003061` |
| AI | `#052E58` to `#2075CC` |
| Border | `#115AA4` to `#AED4FC` |
| Feature image scrim | transparent to `#03182C` |

### Semantic colors

| State | Light text | Light bg | Dark text | Dark bg |
|---|---|---|---|---|
| Success | `#177D57` | `#E1F2EB` | `#43C491` | `#0C1C17` |
| Error | `#C62234` | `#FBE9EB` (approx.) | `#FAB3C0` | `#260707` |
| Warning | `#7A5B00` (approx.) | `#F9F5E6` | `#F5E4A2` | `#211808` |

## 3. Typography

**Family:** MS Sans, a proprietary sans with separate files per weight: `ms-sans-light`, `ms-sans` (regular), `ms-sans-md` (medium), `ms-sans-bold`, plus italics. Display styles use the light file; headings and body use regular; eyebrows and labels use medium.

**Licensing:** MS Sans is not available for reuse. **Inter** is a close free substitute; use Inter 300 where the site uses `ms-sans-light`.

```css
--display-font-family: "ms-sans-light", "Inter", sans-serif;
--heading-font-family: "ms-sans", "Inter", sans-serif;
--eyebrow-font-family: "ms-sans-md", "Inter", sans-serif;
```

### Scale (desktop, from production tokens)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display XXL | 68px | 600 | 76px | -0.02em |
| Display XL | 64px | 400 (light file) | 1.18 | 0 |
| Display L | 48px | 400 (light file) | 1.18 | 0 |
| Display M / S / XS | 40 / 36 / 32px | 400 (light file) | 1.18 | 0 |
| Heading L | 28-36px | 400 | 1.2-1.3 | 0 |
| Body XL | 20-32px | 400 | 1.2-1.3 | 0 |
| Body L | 18-24px | 400 | 1.3 | 0 |
| Body M | 16-20px | 400 / 500 / 600 | 1.3-1.4 | 0 |
| Body base | 14-16px | 400 | 1.4 | 0 |
| Body S | 12-14px | 400 | 1.4 | 0 |
| Eyebrow M | 14px | 500 | 1.4 | 0.56px, uppercase |
| Eyebrow S | 12px | 500 | 1.4 | 0.48px, uppercase |

Ranges show the mobile-to-desktop steps defined in the tokens (breakpoints at 768 and 1024px).

### Rules

- Sentence case for headlines ("What's Driving Healthcare Growth?"), Title Case for navigation and business names.
- Eyebrows are always uppercase, medium weight, slightly tracked.
- Weights for emphasis are 500 (medium) and 600 (bold variants); never go heavier.
- Use tabular figures in stats.

## 4. Logo & Brand Mark

The logo is the **Morgan Stanley** wordmark: upper and lowercase, a clean humanist-geometric sans, all one weight. There is no separate symbol.

- **Primary:** black wordmark (`logo-dark.svg`) on white.
- **Reversed:** white wordmark (`logo-light.svg`) on navy, black or photography.
- **Clear space:** at least the cap height of the "M" around the wordmark (approximate).
- **Minimum size:** about 120px wide on screen so the counters stay open (approximate).
- **Compact form:** for square tiles, stack "Morgan" over "Stanley" in white on navy (this library's icon does this; it is not an official lockup).

Misuse:

- Do not recolour the wordmark in Action Blue or a gradient.
- Do not set it in bold or in another font.
- Do not add a symbol, box or tagline lockup that is not supplied.

## 5. Components

### Buttons

`.ms-button` uses tokens for height and radius. Default radius is 4px; there is also a fully round variant (`--ms-border-radius-round: 9999px`) for icon buttons.

| Variant | Background | Text | Border | Height |
|---|---|---|---|---|
| Primary | `#2075CC` | `#FFFFFF` | none | 28 / 40 / 48px (sm / md / lg) |
| Primary hover | `#275C90` | `#FFFFFF` | none | |
| Secondary | transparent | `#00080F` | 1px `#00080F` | same |
| Secondary on dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | same |
| Link with chevron | none | `#115AA4` (light) / `#AED4FC` (dark) | none | |

- Label: MS Sans medium 14-16px, centred, wraps rather than truncates.
- Focus ring: `inset 0 0 0 2px #115AA4` plus a 6px-radius outer ring (`--ms-button-focus-ring-radius`).
- Disabled: text `#8B93A2`, border `#5B626E` on dark; reduce to 40% opacity on light.
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`.

```css
.ms-button {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 40px; padding: 0 20px;
  font: 500 16px/1 var(--brand-font-md);
  color: #fff; background: #2075CC;
  border: 0; border-radius: 4px;
  transition: background-color .2s cubic-bezier(.4,0,.2,1);
}
.ms-button:hover { background: #275C90; }
.ms-button:focus-visible { box-shadow: inset 0 0 0 2px #115AA4; outline: none; }
```

### Navigation

- Utility bar above the header: "Investor Relations", "Newsroom", "Alumni", region selector ("Global", "Americas", "Asia-Pacific"...), and a "Client Login" menu (Morgan Stanley Online, Morgan Stanley at Work, Matrix, Research Portal, E*TRADE from Morgan Stanley).
- Main header: wordmark left, then "What We Do", "Who We Serve", "Insights", "About Us", "Careers". The selected item gets a 4px inset bottom bar.
- Mega menu: white panel, left column with a short description and "View All Businesses", middle columns of business lines with one-line descriptions, right column with "Featured" cards.

### Cards

`card-block` is the main content unit.

- Image on top (cropped from Scene7), 4px radius.
- Eyebrow (12px uppercase medium) such as "Investment Banking" or "Research".
- Title in `ms1-card-md-medium` (about 20px, weight 500).
- No border on white; on `#F2F3F5` sections cards are white with `0 4px 12px 0 rgba(0,8,15,0.08)`.
- Hover: title underlines in link blue, image scales slightly.

### Inputs

- 40-48px tall, 4px radius, 1px `#D6D6DB` border, white fill.
- Hover border `#81BCFD`; focus border `#5CA4F0` with `0 0 0 1px #115AA4`.
- Error border and text `#C62234` (light) or `#FAB3C0` (dark).
- Placeholder `#AEB4BD`.

### Tabs

`tab-item`: 4px radius triggers, 14-16px medium text, inactive in secondary text, active with a 2-4px blue underline. Carousels use round 9999px dot indicators.

### Disclosures

Every page ends with a disclosures block in small 12px text. Long, legal and essential; keep it visually quiet but present.

## 6. Layout & Spacing

- **Spacing tokens:** `--ms-space-*` runs 0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 80, 96px.
- **Max widths:** text columns at 664px and 896px; full layout up to 1600px.
- **Breakpoints:** 768 and 1024px are the main switches (plus 320, 375 and 1521px edge cases).
- **Grid:** 12 columns, 24px gutters on desktop, 16px on mobile (approximate).
- **Section spacing:** 64-96px desktop, 48px mobile.
- **Theme banding:** alternate white, `#F2F3F5` and navy sections to pace a long page.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 4px 12px 0 rgba(0,8,15,0.08)` |
| Card hover | `0 12px 24px rgba(0,8,15,0.08)` |
| Raised | `0 10px 24px rgba(0,8,15,0.12)` |
| Sheet (upward) | `0 -8px 24px rgba(0,8,15,0.12)` |
| Menu | `0 6px 12px 0 hsla(240,5%,53%,0.32)` |

- Shadows are tinted with the ink colour `rgba(0,8,15,…)`, not pure black.
- Motion uses `cubic-bezier(0.4, 0, 0.2, 1)` at 200-300ms for hovers, menus and carousels.
- Hero video and carousels have pause controls; respect reduced motion.

## 8. Iconography & Imagery

- **Icons:** simple line icons, 16-24px, 1.5px stroke, in text colour. Chevrons and arrows on links; plus/minus for accordions.
- **Photography:** high-end editorial: researchers at microscopes, city architecture, executives in conversation, macro close-ups. Often cool-toned to sit with navy.
- **Image treatment:** 4px radius on cards; heroes are full bleed with a navy gradient scrim at the bottom.
- **Data graphics:** blue family (`#115AA4`, `#2075CC`, `#5CA4F0`, `#AED4FC`) with green and red for direction.

## 9. Voice & Microcopy

Clear, professional and client-centred. Short descriptions explain what each business does in one sentence.

- Sentence case for editorial headlines, Title Case for business names.
- Descriptions start with a verb: "Raise capital, evaluate strategic opportunities and execute transactions."
- CTAs: "View All Businesses", "Get Matched With a Financial Advisor", "Client Login", "Learn More".

Sample strings seen on the live site today:

- "We raise, manage and allocate capital" (followed by: bringing together advice, market access, investing expertise and technology to help you pursue your goals)
- "Build, manage and preserve wealth with tailored advice and global capabilities."
- "Navigate complex market conditions with our global scale and deep expertise."
- "What's Driving Healthcare Growth?"

## 10. Do's and Don'ts

**Do**

- Use `#2075CC` for primary actions and `#115AA4` for links on white.
- Set display headlines in a light weight.
- Use navy theme sections for heroes and statements.
- Keep corners at 4px and borders thin.
- Put an uppercase eyebrow above every card title.
- Include the disclosures block on any page with financial claims.

**Don't**

- Don't use bold display headlines or heavy weights.
- Don't use pure black shadows; tint them with `rgba(0,8,15,…)`.
- Don't introduce warm accent colours beyond the semantic set.
- Don't use pill-shaped primary buttons.
- Don't crowd the wordmark with icons or taglines.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of morganstanley.com. White page, text `#00080F`, secondary text `#383B42`, subtle borders `#CDD1D7`, alternate sections `#F2F3F5`. Font: "MS Sans" with Inter as the fallback; display headlines use a light weight (Inter 300) at 48-64px with line-height 1.18; body is 16px/1.4. Eyebrows above titles are 12px, weight 500, uppercase, 0.48px tracking. Primary buttons are `#2075CC` with white text, 4px radius, 40px tall, hover `#275C90`. Links are `#115AA4`. Use dark navy sections (`#002952`, hero gradient from `#00172E`) with text `#F9F9FA` and links `#AED4FC`. Cards: image with 4px radius, eyebrow, 20px medium title, shadow `0 4px 12px rgba(0,8,15,0.08)`. Spacing tokens in 4px steps; text columns max 664-896px; breakpoints 768 and 1024px. Easing `cubic-bezier(0.4,0,0.2,1)`. Copy is plain, professional, one sentence per idea.

```css
:root {
  --brand-ink: #00080F;
  --brand-text-secondary: #383B42;
  --brand-bg: #FFFFFF;
  --brand-bg-secondary: #F2F3F5;
  --brand-bg-tertiary: #DFEEFB;
  --brand-border: #CDD1D7;
  --brand-border-input: #D6D6DB;
  --brand-action: #2075CC;
  --brand-action-hover: #275C90;
  --brand-link: #115AA4;
  --brand-navy: #002952;
  --brand-navy-raised: #003061;
  --brand-midnight: #00172E;
  --brand-link-on-dark: #AED4FC;
  --brand-focus-on-dark: #5CA4F0;
  --brand-success: #177D57;
  --brand-error: #C62234;
  --brand-gradient-hero: linear-gradient(180deg, #00172E 0%, #002952 100%);
  --brand-gradient-ai: linear-gradient(90deg, #052E58 0%, #2075CC 100%);
  --brand-font: "ms-sans", "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-font-light: "ms-sans-light", "Inter", sans-serif;
  --brand-font-md: "ms-sans-md", "Inter", sans-serif;
  --brand-radius: 4px;
  --brand-radius-focus: 6px;
  --brand-radius-round: 9999px;
  --brand-shadow-card: 0 4px 12px 0 rgba(0,8,15,0.08);
  --brand-shadow-raised: 0 10px 24px rgba(0,8,15,0.12);
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Morgan Stanley.

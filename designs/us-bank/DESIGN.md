---
name: U.S. Bank
slug: us-bank
url: https://usbank.com
category: Banking
tagline: "Red shield and deep navy, light Circular headlines, bright blue CTAs on calm white pages."
updated: 2026-11-16
appStoreId: 458734623
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Shield Red
    hex: "#CF2A36"
    role: Logo shield, "loud" button fill, brand secondary, error text
  - name: Logo Navy
    hex: "#001E79"
    role: The "bank" wordmark in the logo
  - name: North Star Navy
    hex: "#00004E"
    role: Display headlines, brand-primary text, login banner background
  - name: Interaction Blue
    hex: "#235AE4"
    role: Primary button fill, links, focus outlines, chevrons
  - name: Interaction Blue Hover
    hex: "#003CC8"
    role: Primary button hover and pressed, checked radio borders
  - name: Brand Navy
    hex: "#0C2074"
    role: Classic U.S. Bank navy, gradient end on dark promo tiles, app icon field
  - name: Heading Ink
    hex: "#2D2D3E"
    role: Section headings and subheadings
  - name: Body Grey
    hex: "#484861"
    role: Body copy, utility button outline, dark fills
  - name: Muted Grey
    hex: "#63637F"
    role: Superheads (eyebrows), captions
  - name: Border
    hex: "#CDD1E2"
    role: Input borders, dividers, focus glow on tiles
  - name: Card Border
    hex: "#EBEFF6"
    role: Card outlines and quiet rules
  - name: Mist
    hex: "#F1F5FB"
    role: Light section background
  - name: Ice
    hex: "#EEF6FF"
    role: Info panels and highlighted rows
  - name: Success
    hex: "#007D1E"
    role: Success text and icons
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
fonts:
  display:
    family: "U.S. Bank Circular"
    fallback: "DM Sans"
    weights: [300, 450, 500]
  body:
    family: "U.S. Bank Circular"
    fallback: "DM Sans"
    weights: [400, 500]
typeScale:
  - { role: Display, size: 40, weight: 300, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Heading L, size: 28, weight: 450, lineHeight: 1.3, tracking: "0" }
  - { role: Heading, size: 24, weight: 450, lineHeight: 1.3, tracking: "0" }
  - { role: Heading S, size: 20, weight: 450, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 20, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Subheading, size: 16, weight: 500, lineHeight: 1.45, tracking: "0.01em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0.01em" }
  - { role: Superhead, size: 14, weight: 400, lineHeight: 1.5, tracking: "0.06em" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Hairline, value: "0 1px 3px 0 rgba(0,0,0,0.12)" }
  - { name: Card, value: "0 4px 6px -1px rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.12)" }
  - { name: Raised, value: "0 16px 24px -4px rgba(0,0,0,0.12), 0 4px 8px -2px rgba(0,0,0,0.06)" }
preview:
  bg: "#FFFFFF"
  surface: "#F1F5FB"
  text: "#2D2D3E"
  muted: "#484861"
  border: "#CDD1E2"
  accent: "#235AE4"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# U.S. Bank

## 1. Visual Theme & Atmosphere

U.S. Bank's public site is a clean, light retail bank page built on its in-house "Shield" design system. White canvases and pale blue-grey bands carry deep navy headlines, grey body copy and a single bright interaction blue for anything you can press. The red shield from the logo shows up rarely in the UI, which makes it feel deliberate when it does.

What makes it recognisable:

- **Light, large display type.** Hero and section display lines are set in Circular at weight 300, 40px, in a near-black navy (`#00004E`). Headings below them step up to an in-between 450 weight. The effect is calm and slightly editorial for a bank.
- **Two blues, two jobs.** Navy (`#00004E` / `#0C2074`) is for brand and text. Bright blue (`#235AE4`) is for interaction only: buttons, links, chevrons, focus rings.
- **The shield as a motif.** The logo shield (a red pentagon with a pointed base) is echoed in hero art: "expanded shield" and "animated shield" backgrounds on the login banner crop a giant shield shape behind the content.
- **Login widget on the home page.** The first viewport pairs a promotional hero with a sign-in card on a dark navy panel (`#00004E`), white inputs and a blue "Continue" button.
- **Rounded but restrained.** Buttons use 8px corners, cards and media use 16px, small chips 4px. Shadows are short and neutral.
- **Photography of real customers** with warm light, cropped into 16:9 or square tiles with rounded top corners.

Mood words: steady, Midwestern, clear, plain-spoken, trustworthy.

## 2. Color Palette & Roles

Values below come from the production CSS on usbank.com (the "northStar rebranding" layer and Shield utility classes).

| Name | Hex | Role |
|---|---|---|
| Shield Red | `#CF2A36` | Logo shield, `.loud` button, `.background-brand-secondary`, error text |
| Logo Navy | `#001E79` | "bank" wordmark in the logo |
| North Star Navy | `#00004E` | `.display` text, `.text-color-brand-primary`, login banner |
| Brand Navy | `#0C2074` | Classic brand navy, end stop of dark promo gradients |
| Gradient Blue | `#0A41C5` | Start stop of promo hover gradients |
| Interaction Blue | `#235AE4` | `.primary` button, `.background-brand-interaction`, links |
| Interaction Hover | `#003CC8` | Primary hover/active, selected radio ring |
| Heading Ink | `#2D2D3E` | `.heading`, `.subheading` |
| Body Grey (grey 80) | `#484861` | `.body`, secondary text, utility button |
| Muted Grey | `#63637F` | `.superhead` eyebrows |
| Quiet Grey | `#7A7A95` | Placeholder, tertiary |
| Border | `#CDD1E2` | Input borders, dividers |
| Card Border | `#EBEFF6` | Card outlines |
| Mist | `#F1F5FB` | Light bands |
| Ice | `#EEF6FF` | Info panels |
| White | `#FFFFFF` | Base |

### Semantic colors

| State | Text / icon | Fill | Notes |
|---|---|---|---|
| Error | `#CF2A36` | `#FFE9EA` | Dark variant `#9B0A28` for text on tint |
| Success | `#007D1E` | `#F2FFF4` | Check icons, confirmation banners |
| Warning | `#FD6400` | `#FFEDDD` | Approximate; used sparingly |
| Info | `#235AE4` | `#EEF6FF` / `#D9EBFF` | Notices, rate callouts |

**Dark surfaces:** there is no global dark mode. Dark panels use `#00004E` or a vertical gradient `linear-gradient(-180deg, #0A41C5, #0C2074)` with white text, `#AAD2FF` for links and secondary buttons reversed to a 1px white outline.

## 3. Typography

**Family:** Circular, licensed from Lineto and served as "U.S. Bank Circular" (Regular and Medium cuts, plus a light cut for display). Stack in CSS: `Circular, Arial, Helvetica, sans-serif`. Some legacy widgets still fall back to Source Sans.

**Licensing:** Circular is commercial; do not copy the brand files. Closest free choice on Google Fonts: **DM Sans** (geometric, single-storey a in some weights). Map 450 to DM Sans 500 if your fallback has no 450.

### Scale (desktop, from production classes)

| Class / role | Size | Weight | Line height | Tracking | Color |
|---|---|---|---|---|---|
| `.display` | 40px | 300 | 1.2 | -0.01em | `#00004E` |
| `.display.small` | 32px | 300 | 1.2 | -0.01em | `#00004E` |
| `.heading.large` | 28px | 450 | 1.3 | 0 | `#2D2D3E` |
| `.heading` | 24px | 450 | 1.3 | 0 | `#2D2D3E` |
| `.heading.small` | 20px | 450 | 1.3 | 0 | `#2D2D3E` |
| `.body.large` | 20px | 400 | 1.6 | 0 | `#484861` |
| `.subheading` | 16px | 500 | 1.45 | 0.01em | `#2D2D3E` |
| `.body` | 16px | 400 | 1.6 | 0.01em | `#484861` |
| `.body.small` | 14px | 400 | 1.7 | 0.01em | `#484861` |
| `.superhead` | 14px | 400 | 1.5 | 0.06em, uppercase | `#63637F` |

### Rules

- Sentence case for headings, buttons and nav. Only the superhead eyebrow is uppercase.
- Display lines are light (300), never bold. Emphasis inside a display line comes from a `<span>` in Interaction Blue or a line break, not weight.
- Body copy carries 0.01em positive tracking and generous 1.6 line height.
- Superscripts for legal footnotes (`®`, `1`) are shrunk to 10-12px and kept on the baseline grid.
- Rates and APYs are set at display size, weight 300, with the % sign at the same size.

## 4. Logo & Brand Mark

The logo pairs a red shield containing white lowercase "us" with the lowercase wordmark "bank" in navy, followed by a small registered mark. The shield is a rectangle with a shallow pointed base (an elongated pentagon).

- **Colors:** shield `#CF2A36`, "us" white, "bank" `#001E79`. Reversed: white "bank" with the red shield kept, on navy.
- **Clear space:** at least the height of the "b" ascender around the lockup.
- **Minimum size:** about 90px wide on screen. Below that, use the shield alone.
- **Shield-only mark:** the app icon puts the red "us" shield on a deep navy field.

Misuse:

- Do not recolor the shield blue or the wordmark red.
- Do not set "us bank" in Circular or any live font; use the artwork.
- Do not add shadows or bevels (the glossy app icon is an exception owned by the brand).
- Do not separate the shield and wordmark with a different gap or alignment.

## 5. Components

### Buttons

All buttons share: Circular 500, 8px radius, 1px border, inline-flex centred, sentence case.

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `#235AE4` | `#FFFFFF` | transparent |
| Secondary | transparent | `#235AE4` | 1px `#235AE4` |
| Loud | `#CF2A36` | `#FFFFFF` | transparent |
| Utility | `#FFFFFF` | `#484861` | 1px `#484861` |
| Text | transparent | `#235AE4` | none |
| Bright (on dark) | `#FFFFFF` | `#235AE4` | transparent |
| Secondary on dark | transparent | `#FFFFFF` | 1px `#FFFFFF` |

Sizes:

| Size | Font | Padding |
|---|---|---|
| Small | 14px | 8px 12px |
| Medium | 16px | 12px 24px |
| Large | 16px | 12px 32px |

States: primary hover and active `#003CC8`; secondary hover fills `#EEF6FF` (approximate); focus is a 2px `#235AE4` outline with 2px offset; disabled is `#CDD1E2` fill with `#7A7A95` text (approximate).

### Arrow links

Text links that lead to product pages end with a small chevron in `#235AE4` (an inline SVG). On hover the underline appears; the chevron does not move. Used as the main CTA inside cards ("Explore all checking accounts").

### Inputs

- 48px tall, 1px `#CDD1E2` border, radius 4px, 16px text in `#2D2D3E`, label above at 14px/500.
- Focus: border `#235AE4` plus a 2px outer ring in the same blue.
- Error: border and helper text `#CF2A36`, a 4px top rule in red on the error summary block.
- Show/hide password toggle sits inside the field as a text button.
- Radios and checkboxes are 28px, with a 2px `#003CC8` ring when checked.

### Login card (signature)

The home page sign-in sits on a navy (`#00004E`) panel: white heading "Log in", two stacked inputs, a full-width primary button "Continue", and text links "Forgot username or password?" and "Enroll" in light blue. Autofill is restyled so inputs stay navy-safe.

### Cards

- Square promo card: white, 1px `#EBEFF6` border, 16px padding, no shadow, 16px radius on media tops.
- Raised card: same, plus `0 4px 6px -1px rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.12)`.
- Horizontal card: image left at fixed widths (126px or 198px), text right.
- Card content order: superhead, heading (20-24px), body, arrow link.

### Navigation

- Utility bar above the main nav: "About us", "Financial education", "Support", "Locations", plus "Log in" at the far right.
- Main bar: logo left, segment tabs "Personal", "Business", "Corporate & Commercial", "Institutional", "Wealth Management" and a search icon.
- Mega menu panels open below on click: white, columns of 16px links grouped under 14px/500 headings, and a promo tile on the right with an image and a primary button.
- Mobile: hamburger, drill-down panels with "Return to …" back rows.

### Tabs and segmented controls

Underline tabs: 16px/500 `#484861`, active `#00004E` with a 3px `#235AE4` bar. Rate tables use pill-style segmented toggles with `#235AE4` fill on the selected segment.

### Modals

White, 16px radius, max width 600px, 24-32px padding, shadow Raised, scrim `rgba(0,0,0,.6)`. Close icon top right in `#484861`. Footer buttons right-aligned, primary last.

## 6. Layout & Spacing

- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 48, 64px (rem-based: .25rem steps up to 4rem).
- **Container:** about 1200-1280px max content width with 24px gutters (approximate).
- **Grid:** 12 columns on desktop, 8 on tablet, 4 on mobile.
- **Breakpoints:** 42rem (672px) for tablet and 66rem (1056px) for desktop are the switch points in the CSS.
- **Section rhythm:** 48-64px between sections on desktop, 32-40px on mobile. Bands alternate white and `#F1F5FB`.
- **Button groups:** 16px gap, 20px on desktop; stack vertically and stretch full width under 672px.
- **Density:** medium. Product grids show three or four cards per row.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Hairline | `0 1px 3px 0 rgba(0,0,0,.12)` | Inputs, small chips |
| Card | `0 4px 6px -1px rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.12)` | Promo cards |
| Raised | `0 16px 24px -4px rgba(0,0,0,.12), 0 4px 8px -2px rgba(0,0,0,.06)` | Menus, modals (alpha of second layer approximate) |
| Tile glow | `0 0 12px #CDD1E2` | Hovered tiles |

- Borders do most of the separation work; shadows stay short.
- Motion: 200ms ease for color changes, 300ms for menu open and accordion height (approximate). The animated shield behind the login hero drifts slowly; respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** outline style on a 20px or 24px grid, about 1.5px stroke, rounded joins. Default fill `#484861`, interactive `#235AE4`. Chevrons are drawn as inline SVG data URIs.
- **Product art:** card faces (Altitude, Cash+, Shopper) rendered flat at a slight angle on white.
- **Photography:** real customers and athletes in warm, natural light, framed 16:9 or square with 16px rounded top corners. Sports partnerships (NFL and others) appear in hero tiles.
- **Shapes:** the shield silhouette, cropped large, is the only decorative shape.

## 9. Voice & Microcopy

Friendly, direct, no jargon. Talks about helping people make sense of money.

- Sentence case everywhere.
- Short verbs on buttons: "Log in", "Continue", "Check your rate", "Explore your options", "Find an advisor".
- Benefit first, then a plain explanation, then a link.
- Legal footnotes are numbered and collected at the bottom of the page.

Sample strings (from the live site):

- "Money for what matters most to you"
- "From home projects to consolidating debt, a personal loan can help. Check your rate to get started."
- "Still have that 401K at your previous company?"
- "Explore all checking accounts"
- Nav: "Checking & savings", "Credit cards", "Investing & retirement", "Home loans"

## 10. Do's and Don'ts

**Do**

- Keep pages white or `#F1F5FB`, with navy display text and grey body.
- Use `#235AE4` only for interactive elements.
- Set display text light (300) and headings at 450-500.
- Use 8px radius on buttons and 16px on cards and media.
- Keep the red for the logo, the "loud" button and errors.
- Pair each promo with one primary action and one arrow link.

**Don't**

- Don't fill large areas with shield red.
- Don't use bold 700 headlines or all-caps headings.
- Don't use pill buttons or heavy drop shadows.
- Don't put interaction blue text on navy; use white or `#AAD2FF`.
- Don't mix in a second accent color for decoration.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of U.S. Bank. White page with pale blue-grey bands (`#F1F5FB`). Font: Circular, fallback "DM Sans", Arial. Display headlines are 40px weight 300, tracking -0.01em, color deep navy `#00004E`. Headings are 24-28px weight 450 in `#2D2D3E`; body is 16px/1.6 weight 400 in `#484861` with 0.01em tracking. Eyebrows are 14px uppercase, 0.06em tracking, `#63637F`. Primary buttons are bright blue `#235AE4` with white 16px/500 text, 8px radius, 12px 24px padding, hover `#003CC8`; secondary is a 1px blue outline. A red `#CF2A36` "loud" button exists but use it rarely. Cards are white with a 1px `#EBEFF6` border, 16px radius and optional short shadow `0 4px 6px -1px rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.12)`. Include a navy `#00004E` sign-in panel with white inputs and a full-width blue "Continue" button. Inputs are 48px tall, 1px `#CDD1E2`, 4px radius, blue focus ring. Links end with a small blue chevron. Copy is sentence case, friendly and short.

```css
:root {
  --brand-red: #CF2A36;
  --brand-logo-navy: #001E79;
  --brand-navy: #00004E;
  --brand-navy-classic: #0C2074;
  --brand-gradient-blue: #0A41C5;
  --brand-action: #235AE4;
  --brand-action-hover: #003CC8;
  --brand-heading: #2D2D3E;
  --brand-text: #484861;
  --brand-text-muted: #63637F;
  --brand-text-quiet: #7A7A95;
  --brand-border: #CDD1E2;
  --brand-border-card: #EBEFF6;
  --brand-bg: #FFFFFF;
  --brand-surface: #F1F5FB;
  --brand-info-bg: #EEF6FF;
  --brand-success: #007D1E;
  --brand-error: #CF2A36;
  --brand-error-bg: #FFE9EA;
  --brand-font: Circular, "DM Sans", Arial, Helvetica, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-shadow-hairline: 0 1px 3px 0 rgba(0,0,0,.12);
  --brand-shadow-card: 0 4px 6px -1px rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.12);
  --brand-shadow-raised: 0 16px 24px -4px rgba(0,0,0,.12), 0 4px 8px -2px rgba(0,0,0,.06);
  --brand-ease: ease;
  --brand-duration: 200ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by U.S. Bank.

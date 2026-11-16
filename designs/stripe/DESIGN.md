---
name: Stripe
slug: stripe
url: https://stripe.com
category: Developer
tagline: "Precise, light-weight type on white, blurple accents and a flowing gradient hero."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Blurple
    hex: "#635BFF"
    role: Brand color, logo, focus ring, links in docs and dashboard
  - name: Marketing Purple
    hex: "#533AFD"
    role: Primary button fill and link color on stripe.com (2025 refresh)
  - name: Heading Navy
    hex: "#061B31"
    role: Headings and primary text on stripe.com
  - name: Downriver
    hex: "#0A2540"
    role: Classic dark navy for text and dark sections, still used across docs and assets
  - name: Slate
    hex: "#50617A"
    role: Body copy and secondary text
  - name: Slate Light
    hex: "#64748D"
    role: Subdued text, captions, muted headings
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Mist
    hex: "#F8FAFD"
    role: Subdued section background
  - name: Black Squeeze
    hex: "#F6F9FC"
    role: Classic light section and docs background
  - name: Border
    hex: "#E5EDF5"
    role: Quiet borders, card outlines, dividers
  - name: Purple Deep
    hex: "#2E2B8C"
    role: Link hover, pressed text
  - name: Night
    hex: "#0D1738"
    role: Dark mode page and dark section background
  - name: Ruby
    hex: "#EA2261"
    role: Accent for gradients and product illustrations
  - name: Lemon
    hex: "#F9B900"
    role: Accent for gradients and highlights
  - name: Success
    hex: "#00B261"
    role: Succeeded payments, positive status
  - name: Error
    hex: "#D8351E"
    role: Failed payments, error text
fonts:
  display:
    family: "Söhne"
    fallback: "Inter"
    weights: [300, 400]
  body:
    family: "Söhne"
    fallback: "Inter"
    weights: [300, 400, 500]
  mono:
    family: "Source Code Pro"
    fallback: "Source Code Pro"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 56, weight: 300, lineHeight: 1.03, tracking: "-0.02em" }
  - { role: Heading XL, size: 48, weight: 300, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading L, size: 32, weight: 300, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Heading M, size: 26, weight: 300, lineHeight: 1.12, tracking: "-0.01em" }
  - { role: Lead, size: 18, weight: 300, lineHeight: 1.55, tracking: "0" }
  - { role: Body, size: 16, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Label, size: 14, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Code, size: 14, weight: 400, lineHeight: 1.6, tracking: "0" }
radii: { sm: 4, md: 6, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Small, value: "0 5px 14px rgba(50,50,93,0.08), 0 2px 8px rgba(0,0,0,0.05)" }
  - { name: Medium, value: "0 6px 22px rgba(50,50,93,0.12), 0 4px 8px rgba(0,0,0,0.06)" }
  - { name: Large, value: "0 15px 40px -2px rgba(50,50,93,0.18), 0 5px 20px -2px rgba(0,0,0,0.1)" }
  - { name: XL, value: "0 20px 80px -16px rgba(50,50,93,0.25), 0 10px 60px -16px rgba(0,0,0,0.3)" }
preview:
  bg: "#FFFFFF"
  surface: "#F8FAFD"
  text: "#061B31"
  muted: "#50617A"
  border: "#E5EDF5"
  accent: "#533AFD"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Stripe

## 1. Visual Theme & Atmosphere

Stripe looks like engineering documentation that hired a great art director. The base is a bright white page with deep navy text and a single purple ("blurple") accent. On top of that sits one big, moving gradient: a soft, wave-shaped mesh of purple, magenta, orange and yellow that fills the hero and sometimes bleeds behind product screenshots.

What makes it recognisable:

- **Light, precise type.** Headlines are set in Söhne at weight 300 with tight negative tracking. Large, thin, confident. Most brands shout with bold; Stripe uses light.
- **The gradient.** The hero gradient is rendered live in WebGL (a "mesh" of four colors that slowly drifts). The color story is warm-to-cool: yellow and orange into magenta and purple, with cyan in older versions.
- **Product as illustration.** Instead of stock imagery, sections show crisp, slightly floating UI: payment sheets, dashboards, code editors, phone mockups. They sit on white cards with long, blue-tinted shadows.
- **Navy, not black.** Text and dark sections are navy (`#061B31`, historically `#0A2540`), and shadows are tinted with `rgba(50,50,93,…)`, a blue-grey. The whole page feels cool and clean.
- **Thin rules and grid lines.** Subtle 1px lines in `#E5EDF5`, sometimes dashed, mark columns and section edges.
- **Moderate density with very large vertical rhythm.** Sections breathe (96-160px apart), but each section packs specific numbers and features.

Mood words: precise, technical, premium, calm, global.

## 2. Color Palette & Roles

Stripe has two layers of color in use: the long-standing brand colors (Blurple `#635BFF`, Downriver `#0A2540`, Black Squeeze `#F6F9FC`) and the newer marketing-site token system (`--hds-color-*`) that shifted the action color slightly deeper to `#533AFD` and the navy to `#061B31`.

| Name | Hex | Role |
|---|---|---|
| Blurple | `#635BFF` | Logo, focus ring (`--hds-color-border-focus`), docs and dashboard links |
| Marketing Purple (brand 600) | `#533AFD` | Primary button background, inline links on stripe.com |
| Purple 700 | `#4032C8` | Primary button hover |
| Purple 800 | `#2E2B8C` | Link hover text |
| Purple 50 | `#E8E9FF` | Quiet button background |
| Heading Navy (neutral 990) | `#061B31` | Headings and primary text |
| Downriver | `#0A2540` | Classic navy, dark sections in older pages and brand assets |
| Slate (neutral 600) | `#50617A` | Body text ("text-soft") |
| Slate Light (neutral 500) | `#64748D` | Subdued text, muted headings |
| Quiet (neutral 400) | `#7D8BA4` | Placeholders, tertiary labels |
| Border (neutral 50) | `#E5EDF5` | Card borders, dividers |
| Neutral 100 | `#D4DEE9` | Input borders |
| Mist (neutral 25) | `#F8FAFD` | Subdued section background |
| Black Squeeze | `#F6F9FC` | Classic light grey background |
| White | `#FFFFFF` | Page background |

### Accent families

Each product area can switch the accent "mode". These are used for icons, gradients and small highlights, never for body text.

| Family | Solid | Gradient (start → middle → end) |
|---|---|---|
| Ruby | `#EA2261` | `#FD7184` → `#EA2261` → `#E2225F` |
| Magenta | `#F44BCC` | `#F98BF9` → `#F96BEE` → `#B262F9` |
| Orange | `#FF6118` | `#FE8C2D` → `#FD6252` → `#FD5D7C` |
| Lemon | `#F9B900` | `#FFD552` → `#FFAF2D` → `#FF9014` |
| Brand | `#533AFD` | `#BDB4FF` → `#643AFD` → `#533AFD` |

### Hero gradient

The classic 2020-2024 WebGL hero used four colors: `#A960EE` (purple), `#FF333D` (red), `#90E0FF` (cyan), `#FFCB57` (yellow). The current hero is a softer wave of lemon, orange, ruby, magenta and purple from the table above, drifting slowly. To fake it in CSS:

```css
.stripe-hero {
  background:
    radial-gradient(60% 80% at 15% 30%, #FFD552 0%, transparent 60%),
    radial-gradient(50% 70% at 45% 60%, #FD6252 0%, transparent 60%),
    radial-gradient(55% 75% at 70% 35%, #F96BEE 0%, transparent 60%),
    radial-gradient(60% 90% at 95% 70%, #643AFD 0%, transparent 65%),
    #FFFFFF;
  filter: saturate(1.1);
}
```

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#00B261` icon, `#006F3A` text, `#B6F2C7` badge fill | "Succeeded" payments |
| Error | `#D8351E` text, `#F3432A` icon, `#FEB9AC` badge fill | "Failed", validation |
| Warning | `#E8A30B` icon, `#9B6829` text, `#FFF2D8` fill | "Incomplete", "Uncaptured" |
| Info | `#533AFD` on `#F5F5FF` | Notices |

### Dark mode

stripe.com uses dark sections rather than a global dark theme. Dark sections use `#0D1738` (neutral dark 990) or a deep purple `#171055`, text `#FFFFFF`, subdued text `#839BC8`, borders `#23357A` at 50% alpha, and links `#92ADFF`. The Dashboard has its own dark theme and is out of scope here.

## 3. Typography

**Family:** Söhne by Klim Type Foundry, loaded as the variable font `sohne-var`. Stylistic set `ss01` is turned on site-wide (single-storey alternates for some glyphs). Code uses Source Code Pro.

**Licensing:** Söhne is a commercial font licensed by Stripe; you cannot reuse their files. Closest free substitute: **Inter** (set `font-weight: 300` and tighten tracking). Mono: **Source Code Pro** is free on Google Fonts.

```css
font-family: "sohne-var", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
font-feature-settings: "ss01";
```

**Weights:** this is the unusual part. The token `--hds-font-weight-normal` is **300** and `--hds-font-weight-bold` is **400** (500 in some contexts). Headlines and body are 300. Buttons and labels are 400. Almost nothing on the marketing site goes above 500.

### Scale (desktop, from production tokens)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (heading xxl) | 56px | 300 | 1.03 | -0.02em |
| Heading XL | 48px | 300 | 1.05 | -0.02em |
| Heading L | 32px | 300 | 1.1 | -0.02em |
| Heading M | 26px | 300 | 1.12 | -0.01em |
| Heading S | 22px | 300 | 1.1 | -0.01em |
| Heading XS | 16px | 400 | 1.2 | 0 |
| Lead | 18px | 300 | 1.55 | 0 |
| Body | 16px | 300 | 1.5 | 0 |
| Label / input label | 14px | 400 | 1.3 | 0 |
| Code | 14px Source Code Pro | 400 | 1.6 | 0 |

Mobile: hero drops to 34px (heading xxl 2.125rem), XL to 28px, L to 22px.

### Rules

- Sentence case for headings and buttons.
- Headline pattern: a navy first clause followed by a lighter grey (`#64748D`) second clause in the same paragraph, for example "**Financial infrastructure to grow your revenue.** Accept payments, offer financial services and implement custom revenue models."
- Small uppercase eyebrows are not the house style anymore; use a colored 14-16px label in the accent instead.
- Numbers: tabular figures in stats and tables (`font-variant-numeric: tabular-nums`). Big stats use 300 weight at 48px+.
- Never bold body copy for emphasis; switch color to navy instead.

## 4. Logo & Brand Mark

The logo is the lowercase **stripe** wordmark, redrawn in 2016. It is a custom geometric sans with a distinctive slanted cut on the "t" and a tall, open "p". There is no separate symbol in the main lockup; the square "S" app icon is used only for favicons and app tiles.

- **Color versions:** Blurple `#635BFF` on white (primary), white on Blurple, white on navy `#0A2540`, navy on white for single-color use.
- **Clear space:** at least the height of the "s" x-height on every side.
- **Minimum size:** 60px wide on screen, 15mm in print.
- **App icon:** white "S" on a Blurple square with rounded corners.

Misuse:

- Do not set "stripe" in Söhne or any other font.
- Do not recolor it with the hero gradient or place it on the busiest part of the gradient.
- Do not capitalize it ("Stripe" the company name is capitalized in text, the logo is lowercase).
- Do not add a drop shadow, outline or tilt.

## 5. Components

### Buttons

Stripe marketing buttons are small, flat rectangles with 4px corners and an arrow that nudges on hover.

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#533AFD` | `#FFFFFF` 400 16px | none | 4px | 11.5px 16px 12.5px (about 40-44px tall) |
| Primary on dark | `#FFFFFF` | `#061B31` | none | 4px | same |
| Secondary | transparent | `#533AFD` | 1px `#D4DEE9` | 4px | same |
| Quiet | `#E8E9FF` | `#533AFD` | none | 4px | same |
| Link with arrow | transparent | `#533AFD` 400 | none | 0 | none |
| Large | as above | 16px | | 4px | 15.5px 20px 16.5px (48px tall) |

States:

- Hover primary: `#4032C8`. Hover quiet: `#D6D9FC`. Hover link text: `#2E2B8C`.
- Hover arrow: the chevron's horizontal stroke appears and the head moves 3px right over 150ms.
- Focus: `outline: 2px solid #635BFF; outline-offset: 2px;` plus a soft outer ring `#7B7EFF` at 59% alpha.
- Disabled: background `rgba(168,195,222,0.3)`, text `#95A4BA`.
- Transitions: `background-color .3s cubic-bezier(.25,1,.5,1)`.

```css
.btn-primary {
  font: 400 16px/1 var(--brand-font);
  font-feature-settings: "ss01";
  color: #fff;
  background: #533AFD;
  border: 0;
  border-radius: 4px;
  padding: 11.5px 16px 12.5px;
  display: inline-flex; align-items: center; gap: 8px;
  transition: background-color .3s cubic-bezier(.25,1,.5,1);
}
.btn-primary:hover { background: #4032C8; }
```

### Hover arrow (signature)

A 10 x 10 SVG chevron followed by a hidden 1.6px line. On hover the line fades in (opacity 0 → 1) and the chevron translates 3px right, so it reads as "→". Used on every text CTA ("Start now", "Contact sales", "Learn more about Payments").

### Inputs

- Height 40px (md) or 48px (lg). Text 14-16px weight 300 `#061B31`.
- Background `rgba(13,23,56,0.05)` on white sections, border 1px `rgba(212,222,233,0.75)`, radius 4-6px.
- Focus: border `#635BFF`, plus `0 0 0 3px rgba(123,126,255,0.59)`.
- Error: border `#D8351E`, outer ring `rgba(216,40,15,0.5)`, helper text 14px `#D8351E`.

### Cards

- White, radius 6-8px (product screenshots up to 16px), border none or 1px `#E5EDF5`.
- Elevated product cards use the blue-tinted shadow `0 15px 40px -2px rgba(50,50,93,0.18), 0 5px 20px -2px rgba(0,0,0,0.1)`.
- Feature cards in grids: no shadow, 1px left border in `#E5EDF5` or an accent-colored 16px icon above a 16px/400 navy title and 16px/300 slate text.
- Bento cards on newer pages: `#F8FAFD` fill, radius 16px, 32px padding, with a product mock bleeding off one edge.

### Navigation

- Sticky header, 64-72px, transparent over the gradient hero, white with a 1px `#E5EDF5` bottom border once scrolled.
- Logo left (Blurple, or white over dark). Center: "Products", "Solutions", "Developers", "Resources", "Pricing" at 15-16px/400.
- Hovering opens a mega-menu: white panel, radius 8px, shadow XL, a small caret, columns of 16px icon + title + 14px description. The panel morphs size between menus (300ms).
- Right: "Sign in" text link and a primary "Contact sales" or "Start now" button.

### Tabs

Underline tabs with 14-16px/400 text, `#64748D` inactive, `#061B31` active, 2px `#533AFD` indicator. Code-sample tabs (curl, Node, Python, Ruby) sit on dark code panels with `#7D8BA4` inactive and `#FFFFFF` active labels.

### Badges

Status badges in the product style: radius 4px, 12px/500, padding 2px 6px. Succeeded `#006F3A` on `#B6F2C7`, Failed `#A01400` on `#FEB9AC`, Incomplete `#9B6829` on `#FFE1A3`, Neutral `#3C4F69` on `#E5EDF5`. Each has a 12px leading icon.

### Code blocks (signature)

- Background `#0D1738` or `#061B31`, radius 8px, padding 24px.
- Source Code Pro 14px/1.6. Token colors: keys `#92ADFF`, strings `#FFD552` or `#B6F2C7`, comments `#7D8BA4`, punctuation `#D4DEE9`.
- Copy button top right, ghost style, white at 70%.

### Avatars and logos

Customer logos are shown in a single neutral (`#50617A` or navy) at equal visual weight in a 5-6 column strip. People avatars are circles, 32-48px, with a 2px white ring when overlapping.

### Modals

White, radius 8px, max width 480-640px, shadow XL, scrim `rgba(6,27,49,0.6)`. Header 20px/400 navy, footer buttons right-aligned with 8px gap.

## 6. Layout & Spacing

- **Spacing scale:** core tokens are 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128, 160px. Use 8-based steps for anything new.
- **Content width:** classic layout is a 1080px column with four guide columns; newer pages use 12 columns inside about 1232px with 32px gutters.
- **Page gutters:** 16px mobile, 24px tablet, 32px+ desktop.
- **Breakpoints:** roughly 600, 900 and 1112px (tablet and desktop switches for type and columns).
- **Section spacing:** 96-128px between sections on desktop, 64px on mobile.
- **Guide lines:** some sections show faint vertical grid lines (1px dashed `#E5EDF5`) that align with the column edges.
- **Angles:** older Stripe pages tilt section backgrounds with `transform: skewY(-6deg)`; the gradient hero still ends on a diagonal or wave edge rather than a straight line.

## 7. Depth, Elevation & Motion

### Shadows

Stripe shadows are long, soft, and tinted navy, built from two layers: a large tinted blur plus a tighter neutral one.

| Token | Value |
|---|---|
| xs | `0 2px 10px rgba(50,50,93,0.06), 0 1px 4px rgba(0,0,0,0.04)` |
| sm | `0 5px 14px rgba(50,50,93,0.08), 0 2px 8px rgba(0,0,0,0.05)` |
| md | `0 6px 22px rgba(50,50,93,0.12), 0 4px 8px rgba(0,0,0,0.06)` |
| lg | `0 15px 40px -2px rgba(50,50,93,0.18), 0 5px 20px -2px rgba(0,0,0,0.1)` |
| xl | `0 20px 80px -16px rgba(50,50,93,0.25), 0 10px 60px -16px rgba(0,0,0,0.3)` |
| canary UI | `0 16px 32px rgba(50,50,93,0.12)` |

Offsets, blurs and spreads above come from production tokens; the alpha values are approximations of the rendered colors.

### Motion

- Default ease: `cubic-bezier(0.25, 1, 0.5, 1)` (fast out, soft landing).
- Cards and carousels: `cubic-bezier(0.165, 0.84, 0.44, 1)`, 800ms.
- Accordion: `cubic-bezier(0.65, 0.05, 0.36, 1)`, 360ms.
- Hover color transitions: 300ms. Reveal-on-scroll graphics: 300ms fade and 16px rise. The hero gradient drifts slowly and should pause under `prefers-reduced-motion`.
- Product mockups animate in sequence (a card fills in, a payment succeeds, a chart line draws), each step 300-600ms.

## 8. Iconography & Imagery

- **Icons:** 16px and 24px, filled geometric shapes rather than thin outlines, often in two tones of the active accent (a solid shape plus a lighter tint). Product icons use small gradients from the accent families.
- **Imagery:** real product UI is the main imagery. Screenshots are rebuilt as clean, simplified vector mockups, not literal captures. Phones and browser frames are minimal.
- **Photography:** used in customer stories only, editorial and natural, often cropped tight on people at work, sometimes duotoned in navy.
- **Illustration:** isometric or flat 3D-ish diagrams for infrastructure (globe with connection arcs, stacked layers), drawn in navy, blurple and one warm accent.
- **The globe:** an interactive dotted globe with arcs is a recurring motif for global payments.

## 9. Voice & Microcopy

Confident, plain and exact. Writes for developers and finance teams at the same time. Prefers numbers to adjectives.

- Sentence case, short declaratives.
- Pair a bold claim with a concrete grey follow-up.
- Use real, specific figures (currencies supported, historical uptime, total payments volume) and check them against stripe.com before quoting, since they change every year.
- CTAs are two or three words: "Start now", "Contact sales", "Read the docs", "Explore Payments".

Sample strings:

- Hero: "Financial infrastructure to grow your revenue."
- Sub: "Join the millions of companies of all sizes that use Stripe to accept payments online and in person."
- Feature: "Accept payments in 135+ currencies with the methods your customers prefer."
- Developer: "Build with the most powerful and flexible tools. Integrate in minutes with prebuilt components."
- Status: "Succeeded", "Refunded", "Disputed", "Incomplete"

## 10. Do's and Don'ts

**Do**

- Use light (300) weights for large headlines with -0.02em tracking.
- Keep text navy (`#061B31` or `#0A2540`) and body copy slate (`#50617A`).
- Use a single purple accent for actions, and keep buttons small with 4px corners.
- Tint shadows with navy (`rgba(50,50,93,…)`) and make them long and soft.
- Show the product: clean vector mockups, code samples, real numbers.
- Put the gradient in the hero or one feature moment only.
- Use the accent families (ruby, magenta, orange, lemon) for icons and small highlights.

**Don't**

- Don't use bold 700 headlines or pure black text.
- Don't use pill-shaped, oversized or heavily rounded buttons on marketing pages.
- Don't scatter gradients across every card; one gradient per view.
- Don't use grey neutral shadows like `rgba(0,0,0,0.5)` with small blur.
- Don't write vague claims without a number or a product name.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Stripe. White page, headings in deep navy `#061B31`, body in slate `#50617A`, subdued text `#64748D`. Font: `"sohne-var", Inter, "Helvetica Neue", sans-serif` with `font-feature-settings: "ss01"`. Headlines are large and light: weight 300, tracking -0.02em, line-height about 1.05. Body is 16-18px weight 300; buttons and labels weight 400. Primary buttons are `#533AFD` with white text, 4px radius, about 44px tall, hover `#4032C8`, with a small chevron that slides 3px right on hover. Brand blurple `#635BFF` is used for focus rings and the logo. Use a soft, animated mesh gradient (yellow `#FFD552`, orange `#FD6252`, magenta `#F96BEE`, purple `#643AFD`) in the hero only. Cards are white with 6-8px radius, 1px `#E5EDF5` borders or long navy-tinted shadows like `0 15px 40px -2px rgba(50,50,93,0.18), 0 5px 20px -2px rgba(0,0,0,0.1)`. Use a 1080-1232px content width, 96-128px section spacing, and show product mockups and code samples (Source Code Pro on `#0D1738`) instead of photos. Easing `cubic-bezier(0.25, 1, 0.5, 1)`. Copy is short and specific with real numbers.

```css
:root {
  --brand-blurple: #635BFF;
  --brand-action: #533AFD;
  --brand-action-hover: #4032C8;
  --brand-action-quiet: #E8E9FF;
  --brand-heading: #061B31;
  --brand-navy: #0A2540;
  --brand-text: #50617A;
  --brand-text-subdued: #64748D;
  --brand-text-quiet: #7D8BA4;
  --brand-bg: #FFFFFF;
  --brand-surface: #F8FAFD;
  --brand-surface-classic: #F6F9FC;
  --brand-border: #E5EDF5;
  --brand-border-input: #D4DEE9;
  --brand-dark: #0D1738;
  --brand-success: #00B261;
  --brand-error: #D8351E;
  --brand-ruby: #EA2261;
  --brand-magenta: #F44BCC;
  --brand-orange: #FF6118;
  --brand-lemon: #F9B900;
  --brand-font: "sohne-var", "Inter", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
  --brand-font-mono: "Source Code Pro", "SFMono-Regular", Menlo, monospace;
  --brand-weight-normal: 300;
  --brand-weight-bold: 400;
  --brand-radius-xs: 2px;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 16px;
  --brand-radius-xl: 32px;
  --brand-shadow-sm: 0 5px 14px rgba(50,50,93,0.08), 0 2px 8px rgba(0,0,0,0.05);
  --brand-shadow-md: 0 6px 22px rgba(50,50,93,0.12), 0 4px 8px rgba(0,0,0,0.06);
  --brand-shadow-lg: 0 15px 40px -2px rgba(50,50,93,0.18), 0 5px 20px -2px rgba(0,0,0,0.1);
  --brand-shadow-xl: 0 20px 80px -16px rgba(50,50,93,0.25), 0 10px 60px -16px rgba(0,0,0,0.3);
  --brand-ease: cubic-bezier(0.25, 1, 0.5, 1);
  --brand-ease-card: cubic-bezier(0.165, 0.84, 0.44, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Stripe.

---
name: Wealthfront
slug: wealthfront
url: https://wealthfront.com
category: Finance
tagline: "Eggplant and blurple gradients, tight bold Calibre headlines and soft pastel cards."
updated: 2026-11-16
appStoreId: 816020992
logoBackground: "#230B59"
theme: light
colors:
  - name: Blurple
    hex: "#4840BB"
    role: Primary buttons, links, checkmarks, focus rings
  - name: Eggplant
    hex: "#230B59"
    role: Dark hero and band backgrounds, headline color on light pages
  - name: Lilac
    hex: "#E8EBFD"
    role: Soft section background, gradient end
  - name: Ambient Peach
    hex: "#F7E9E2"
    role: Warm section background, gradient start
  - name: Peach
    hex: "#DF8C5E"
    role: Warm accent in gradients and illustrations
  - name: Ink
    hex: "#18172B"
    role: Primary text (content-primary)
  - name: White
    hex: "#FFFFFF"
    role: Page and card surface
  - name: Plum
    hex: "#3B2B7D"
    role: Secondary dark background, gradient stop
  - name: Blurple Hover
    hex: "#544CC8"
    role: Primary button hover
  - name: Blurple Light
    hex: "#958CF2"
    role: Links and highlights on dark backgrounds
  - name: Cream
    hex: "#E4E7F8"
    role: Text and borders on eggplant, quiet fills
  - name: Periwinkle
    hex: "#C3CDF4"
    role: Bright gradient start, chart category
  - name: Notice Grey
    hex: "#F4F3F7"
    role: Info notices and quiet panels
  - name: Positive
    hex: "#288067"
    role: Gains, success text
  - name: Destructive
    hex: "#B20015"
    role: Errors and destructive actions
fonts:
  display:
    family: "Calibre"
    fallback: "Inter"
    weights: [500, 700]
  body:
    family: "Calibre"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: H1, size: 79, weight: 700, lineHeight: 0.9, tracking: "-0.03em" }
  - { role: H1 Alt (serif), size: 75, weight: 100, lineHeight: 0.9, tracking: "-0.05em" }
  - { role: H2, size: 53, weight: 700, lineHeight: 1, tracking: "-0.03em" }
  - { role: H3, size: 26, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Caption, size: 16, weight: 400, lineHeight: 1.2, tracking: "0.05em" }
  - { role: Eyebrow, size: 14, weight: 500, lineHeight: 1.1, tracking: "0.1em" }
radii: { sm: 6, md: 12, lg: 24, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Hairline, value: "inset 0 0 0 1px rgba(24,23,43,0.17)" }
  - { name: Card (approximate), value: "0 4px 24px rgba(24,23,43,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#E8EBFD"
  text: "#18172B"
  muted: "#6D6C79"
  border: "#D7D7DB"
  accent: "#4840BB"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Wealthfront

## 1. Visual Theme & Atmosphere

Wealthfront mixes a calm, pastel product page with deep purple drama. Light sections sit on white, lilac or peach washes; key moments switch to a dark eggplant `#230B59` band with a blurple glow. Headlines are short, very bold and tightly set (line-height 0.9), and the product shows up as phone screens and soft cards with rates and returns in big numerals.

What makes it recognisable:

- **Purple, not blue.** The action color is "blurple" `#4840BB`; the dark brand color is eggplant `#230B59`. Text is a purple-tinted ink `#18172B`, never pure black.
- **Named gradients.** The design system ships six gradients (soft, bright, day, soft twilight, bright twilight and night; the code names differ slightly) that run vertically from one pastel to another, for example peach `#F7EAE4` to lilac `#E8EBFD`.
- **Squeezed bold headlines.** Calibre Bold with -0.03em tracking and 0.9 line height, sometimes paired with a hairline-thin serif (GT Alpina at weight 100) for contrast.
- **Numbers up front.** The hero headline is the current cash-account APY (an "Earn up to ...% APY" line), followed by three short proof points and an award badge.
- **Soft UI.** 6px buttons, 12-24px cards, inset 1px hairline borders and almost no drop shadow.

Mood words: confident, modern, calm, numerate, a little premium.

## 2. Color Palette & Roles

Wealthfront's toolkit defines semantic tokens (`--tk-content-*`, `--tk-surface-*`) in HSLA, plus Tailwind brand names (`blurple`, `eggplant`, `plum`, `lilac`, `cream`, `peach`).

| Name | Hex | Role |
|---|---|---|
| Blurple | `#4840BB` | `--tk-surface-interactive-primary`, primary button, links, icons |
| Blurple Hover | `#544CC8` | Primary hover |
| Blurple Active | `#5E54CF` | Primary pressed |
| Blurple Light | `#958CF2` | Links on dark backgrounds |
| Eggplant | `#230B59` | Dark bands, logo text on light, headline color |
| Plum | `#3B2B7D` | Secondary dark fill |
| Plum Dark | `#241858` | Gradient end on dark bands |
| Ink | `#18172B` | `--tk-content-primary` |
| Ink 63% | `rgba(24,23,43,0.63)` | `--tk-content-secondary` |
| Ink 17% | `rgba(24,23,43,0.17)` | Dividers and input borders |
| Lilac | `#E8EBFD` | Soft background |
| Cream | `#E4E7F8` | Text and borders on eggplant |
| Periwinkle | `#C3CDF4` | Bright gradient start |
| Ambient Peach | `#F7E9E2` | Warm background |
| Peach | `#DF8C5E` | Warm accent |
| Notice | `#F4F3F7` | Info notice surface |
| White | `#FFFFFF` | Surface |

### Gradients

```css
--tk-gradient-soft: linear-gradient(#F7EAE4, #E8EBFD);
--tk-gradient-bright: linear-gradient(#C3CDF4, #FED0B9);
--tk-gradient-day: linear-gradient(#D9EDCA, #FFF3D6);
--tk-gradient-soft-twilight: linear-gradient(#DF8B5D, #6F85C8);
--tk-gradient-bright-twilight: linear-gradient(#4840BA, #AC5E35);
--tk-gradient-night: linear-gradient(#230B5B, #4840BA);
```

Use one gradient per section, always vertical (top to bottom), and keep text on light gradients in ink or eggplant.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Positive | `#288067` | Returns, gains, success |
| Destructive | `#B20015` | Errors; 10% tint `rgba(178,0,21,0.1)` for fills |
| Info | `#F4F3F7` | Info notice surface |

### Dark sections

Eggplant `#230B59` or the night gradient. Text white, secondary text `rgba(241,241,243,0.84)`, buttons switch to white with eggplant text, links use `#958CF2`.

## 3. Typography

**Families:** Calibre (Klim Type Foundry) for everything; GT Alpina (Grilli Type) as an occasional serif accent at weight 100 for "alt" headlines.

**Licensing:** both are commercial. Substitutes from Google Fonts: **Inter** (or Figtree) for Calibre, **Fraunces** at weight 100-200 for GT Alpina.

```css
font-family: Calibre, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
```

### Scale (`.copy-*` classes, mobile / tablet / desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 (`.copy-h1`) | 42.2 / 63.3 / 79.13px | 700 | 0.9 | -0.03em |
| H1 Alt serif | 40 / 60 / 75px | 100 GT Alpina | 0.9 | -0.05em |
| H2 (`.copy-h2`) | 31.65 / 42.2 / 52.75px | 700 | 1 | -0.03em |
| H3 (`.copy-h3`) | 21.1 / 26.38px | 500 | 1.2 | 0 |
| Body (`.copy-body`) | 18px | 400 | 1.2 | 0 |
| Caption | 16px | 400 | 1.2 | 0.05em |
| Eyebrow (`.copy-caption-sm`) | 14px | 500 uppercase | 1.1 | 0.1em |
| Disclosure | 14-16px | 400, 60% opacity | 1 | 0 |

### Rules

- Sentence case everywhere: "Better than a bank", "Turn savings into wealth".
- Headlines are 2-6 words. Put the number in the headline and the explanation underneath.
- Eyebrows are uppercase, 14px, letter-spaced 0.1em.
- Big rates use the H1 style with a smaller "APY" suffix.
- GT Alpina is for a word or phrase of contrast, never for body.

## 4. Logo & Brand Mark

The logo is a mark of three curved, leaf-like blades fanning up and to the right (a stylised "W" that also reads as a rising chart), followed by the "Wealthfront" wordmark in a bold geometric sans.

- **Color versions:** on dark surfaces the mark and wordmark use a soft vertical gradient from peach `#F7E9E2` to lilac `#DADEF1` (the file in this folder, shown on eggplant). On light surfaces it is solid eggplant `#230B59`. One-color white is used on photos.
- **App icon:** white blades on a vertical gradient from `#240D5D` (top) to `#483EB8` (bottom).
- **Clear space:** about the height of the tallest blade on all sides (approximate).
- **Minimum size:** about 100px wide for the full lockup on screen (the header uses 154-200px).

Misuse:

- Do not use the pastel gradient version on white; it disappears.
- Do not rotate or flip the blades, or separate the mark from the wordmark in the header.
- Do not recolor to blurple text or add outlines.

## 5. Components

### Buttons

Rectangles with a small 6px radius (`rounded-md`), medium weight label at body size.

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#4840BB` | `#FFFFFF` 18px/500 | none | 6px | 12px 20px (14px 24px at 1536px+) |
| Primary on dark | `#FFFFFF` | `#230B59` | none | 6px | same |
| Default (tinted) | `rgba(72,64,187,0.1)` | `#4840BB` | none | 6px | same |
| Concealed (text) | transparent | `#4840BB` | none | 6px | same |
| Destructive | `rgba(178,0,21,0.1)` | `#B20015` | none | 6px | same |
| Learn more link | transparent | `#4840BB` 500 + 24px arrow icon | none | 0 | 0 |

States:

- Primary hover `#544CC8`, active `#5E54CF`.
- Tinted hover alpha 0.15, active 0.2. Concealed hover alpha 0.05.
- Transition: `background-color .15s cubic-bezier(.2,0,.4,1), color .15s, box-shadow .15s`.
- Focus: inset 2px blurple ring plus a 4px outer ring at 10% blurple.

```css
.wf-btn-primary {
  font: 500 18px/1.2 Calibre, Inter, sans-serif;
  color: #fff;
  background: #4840BB;
  border: 0;
  border-radius: 6px;
  padding: 12px 20px;
  transition: background-color .15s cubic-bezier(.2,0,.4,1);
}
.wf-btn-primary:hover { background: #544CC8; }
.wf-btn-primary:active { background: #5E54CF; }
```

### Inputs

Borders are drawn with inset box-shadows rather than `border`:

- Default: `box-shadow: inset 0 0 0 1px rgba(24,23,43,0.17)`.
- Hover: adds `0 0 0 4px rgba(72,64,187,0.1)` outside.
- Focus: `inset 0 0 0 2px #4840BB, 0 0 0 4px rgba(72,64,187,0.1)`.
- Invalid: same pattern with `#B20015`.
- Floating label shrinks to 0.66 scale when filled. Radius 6-8px, height about 56px (approximate).

### Cards

- Product cards: white or lilac fill, radius 16-24px (approximate), 32px padding, no border, phone or chart artwork bleeding off the bottom edge.
- Proof cards: big figure ("1.5M+", "$100B+", read on the live site on 2026-11-16) in H2 weight with a 16px caption and a footnote number.
- Testimonial cards: quote in body size, name line "Evelyn T. | Client since 2020" in caption style.

### Navigation

- Header with logo left, top-level items "Cash", "Invest", "Borrow", "Learn" (each an H3-styled menu trigger with a small chevron), and right-side "Log in" text button plus "Get started" button.
- On dark heroes the header is transparent with a white logo and white "Get started" button with eggplant text.
- Mobile navbar is 48px tall with a hamburger icon (30 x 23px) and a sticky bottom CTA area (72px).
- Promo banner above the nav: a thin bar with one line ("The easier way to get a low mortgage rate.") and a "Learn more" link.

### Checklists

Feature lists use a 1.2em blurple checkmark icon before each line: "Zero account fees", "Free 24/7 instant withdrawals".

### Notices

Info notice: `#F4F3F7` fill, 12px radius, info icon, 16px text. Destructive notice uses a pale red fill with `#B20015` text.

## 6. Layout & Spacing

- **Spacing tokens:** 2, 4, 8, 12, 16, 24, 32, 48, 64px (`--tk-spacing-xxxsmall` to `--tk-spacing-xxxlarge`).
- **Container:** max width 1140px for content, bands up to 1536px; gutters 16px mobile, 24-32px desktop.
- **Breakpoints:** 480, 690, 768, 960, 1140, 1536px.
- **Hero:** two columns on desktop (copy left, phone mockup right); stacked and centred on mobile.
- **Section rhythm:** 64-96px between sections (approximate), each with its own background wash, so the page reads as stacked colored slabs.
- **Density:** low to medium. One idea per section, three bullets max.

## 7. Depth, Elevation & Motion

- Mostly flat. Separation comes from background color changes and the inset 1px hairline.
- Raised surfaces (menus, popovers) use a soft shadow tinted with ink, about `0 4px 24px rgba(24,23,43,0.08)` (approximate).
- Overlay scrim `rgba(26,26,26,0.8)`.
- Motion: `.15s cubic-bezier(.2,0,.4,1)` for interactive state changes, `color .1s` on links, 0.3s opacity fades, Swiper carousels for testimonials and awards.

## 8. Iconography & Imagery

- Icons: the Wealthfront toolkit set, 24 x 24 viewBox, solid fills with `currentColor` (checkmark, arrowRight, info, institution, xCircle). Default color blurple.
- Product imagery: iPhone screens of the app (balances, portfolio charts, Autopilot) on pastel gradients.
- Photography: warm, natural-light portraits of couples and individuals, cropped tightly, often placed in rounded rectangles.
- Charts: smooth area charts in blurple over lilac, with the line ending in a dot and the return in large type.

## 9. Voice & Microcopy

Plain, confident and slightly playful. Short claims, then the proof.

- Sentence case for everything, including buttons.
- Use numbers and specifics, but take them from the live site the day you build; APYs and returns change.
- Explain the benefit in one clause: "Self-serve home loans with zero sales pressure."
- CTAs: "Get started", "Learn more", "Log in", "See full disclosures here".

Sample strings:

- Title: "Money works better here"
- Hero support: "Better than a bank"
- Section: "Turn savings into wealth"
- Product: "Built and managed for you"

## 10. Do's and Don'ts

**Do**

- Use blurple `#4840BB` for every primary action and eggplant `#230B59` for dark bands.
- Set headlines bold with tight 0.9-1.0 line height and -0.03em tracking.
- Give each section its own soft vertical gradient or wash.
- Draw input and card outlines with inset 1px hairlines in 17% ink.
- Show the app on a phone and put the key figure in the headline.

**Don't**

- Don't use pure black text or a blue accent.
- Don't use pill buttons for the main CTA; keep the 6px radius.
- Don't set long paragraphs in GT Alpina or use it at heavy weights.
- Don't stack heavy drop shadows on cards.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Wealthfront. Light page with sections that alternate between white, a soft vertical gradient (`linear-gradient(#F7EAE4, #E8EBFD)`) and a dark eggplant band (`#230B59` or `linear-gradient(#230B5B, #4840BA)`). Text is ink `#18172B`, secondary text `rgba(24,23,43,0.63)`. Font: `Calibre, Inter, system-ui, sans-serif`; headlines 700 weight, line-height 0.9, tracking -0.03em (H1 about 79px desktop, 42px mobile); body 18px/1.2. The primary button is blurple `#4840BB` with white 18px/500 text, 6px radius, 12px 20px padding, hover `#544CC8`; on dark bands buttons turn white with eggplant text. Inputs use `box-shadow: inset 0 0 0 1px rgba(24,23,43,0.17)` and focus `inset 0 0 0 2px #4840BB, 0 0 0 4px rgba(72,64,187,0.1)`. Add a hero with a big rate headline, three blurple checkmark bullets and a phone mockup, a proof row of big stats with footnotes, rounded 24px product cards with artwork bleeding off the edge, and a disclosure footer at 60% opacity. Transitions are `.15s cubic-bezier(.2,0,.4,1)`.

```css
:root {
  --brand-blurple: #4840BB;
  --brand-blurple-hover: #544CC8;
  --brand-blurple-active: #5E54CF;
  --brand-blurple-light: #958CF2;
  --brand-blurple-tint: rgba(72,64,187,0.1);
  --brand-eggplant: #230B59;
  --brand-plum: #3B2B7D;
  --brand-plum-dark: #241858;
  --brand-ink: #18172B;
  --brand-ink-secondary: rgba(24,23,43,0.63);
  --brand-ink-divider: rgba(24,23,43,0.17);
  --brand-lilac: #E8EBFD;
  --brand-cream: #E4E7F8;
  --brand-peach: #DF8C5E;
  --brand-peach-ambient: #F7E9E2;
  --brand-notice: #F4F3F7;
  --brand-positive: #288067;
  --brand-destructive: #B20015;
  --brand-gradient-soft: linear-gradient(#F7EAE4, #E8EBFD);
  --brand-gradient-bright: linear-gradient(#C3CDF4, #FED0B9);
  --brand-gradient-night: linear-gradient(#230B5B, #4840BA);
  --brand-font: Calibre, "Inter", system-ui, -apple-system, sans-serif;
  --brand-font-serif: "GT Alpina", "Fraunces", Georgia, serif;
  --brand-radius-button: 6px;
  --brand-radius-card: 24px;
  --brand-ease: cubic-bezier(.2,0,.4,1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Wealthfront.

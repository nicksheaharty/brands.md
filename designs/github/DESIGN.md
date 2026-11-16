---
name: GitHub
slug: github
url: https://github.com
category: Developer
tagline: "Primer-built code home: Invertocat mark, green primary buttons, blue links, dense gray UI."
updated: 2026-11-16
appStoreId: 1477376905
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Foreground
    hex: "#1F2328"
    role: Primary text, logo on light
  - name: Canvas
    hex: "#FFFFFF"
    role: Page background (light)
  - name: Primary Green
    hex: "#1F883D"
    role: Primary button fill, open state
  - name: Accent Blue
    hex: "#0969DA"
    role: Links, focus, selected items
  - name: Dark Canvas
    hex: "#0D1117"
    role: Page background (dark), marketing homepage
  - name: Done Purple
    hex: "#8250DF"
    role: Merged and done states
  - name: Muted Canvas
    hex: "#F6F8FA"
    role: Subtle surfaces, default button fill
  - name: Muted Text
    hex: "#59636E"
    role: Secondary text, metadata
  - name: Border
    hex: "#D1D9E0"
    role: Default borders and dividers
  - name: Danger
    hex: "#D1242F"
    role: Errors, closed state, destructive
  - name: Attention
    hex: "#9A6700"
    role: Warnings, pending
  - name: Header Dark
    hex: "#25292E"
    role: Dark header surfaces (light theme)
  - name: Underline Nav
    hex: "#FD8C73"
    role: Active tab underline
  - name: Sponsors Pink
    hex: "#BF3989"
    role: Sponsors heart and buttons
  - name: Dark Foreground
    hex: "#F0F6FC"
    role: Primary text (dark)
  - name: Dark Accent
    hex: "#4493F8"
    role: Links (dark)
fonts:
  display:
    family: "Mona Sans"
    fallback: "Mona Sans"
    weights: [600, 700]
  body:
    family: "System UI (-apple-system, Segoe UI)"
    fallback: "Noto Sans"
    weights: [400, 600]
  mono:
    family: "ui-monospace (SF Mono)"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Marketing Display, size: 64, weight: 600, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Display, size: 40, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Title Large, size: 32, weight: 600, lineHeight: 1.5, tracking: "0" }
  - { role: Title Medium, size: 20, weight: 600, lineHeight: 1.6, tracking: "0" }
  - { role: Title Small, size: 16, weight: 600, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.67, tracking: "0" }
  - { role: Code, size: 12, weight: 400, lineHeight: 1.67, tracking: "0" }
radii: { sm: 3, md: 6, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48]
shadows:
  - { name: Resting Small, value: "0 1px 1px 0 #1F23280A, 0 1px 2px 0 #1F232808" }
  - { name: Floating Small, value: "0 0 0 1px #D1D9E040, 0 6px 12px -3px #25292E0A, 0 6px 18px 0 #25292E1F" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F8FA"
  text: "#1F2328"
  muted: "#59636E"
  border: "#D1D9E0"
  accent: "#1F883D"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# GitHub

## 1. Visual Theme & Atmosphere

GitHub has two faces built on one system. The **product** (repositories, pull requests, issues, Actions) is Primer: white canvas, near-black `#1F2328` text, 14px system font, gray `#F6F8FA` boxes with `#D1D9E0` borders, blue links, and green primary buttons. It is dense, utilitarian and information-first. The **marketing** pages (the logged-out homepage, Copilot, Enterprise) use Primer Brand: dark `#0D1117` backgrounds, large Mona Sans headlines, glowing illustrations and live activity feeds.

Today's logged-out homepage opens on a dark hero ("Software still starts with you") with an email field and a green "Sign up for GitHub" button, then a live activity stream of real pushes and merged pull requests with counters, product cards for GitHub and Copilot, and dark sections showing the product in frames.

What makes it recognisable:

- **The Invertocat** (Octocat silhouette inside a circle) in black or white.
- **Green primary, blue links.** `#1F883D` is reserved for the single main action; `#0969DA` is every link.
- **State colors with meaning:** green Open, purple Merged, red Closed, gray Draft.
- **Boxes with 6px corners and 1px borders** around everything: file lists, comments, settings panels.
- **Contribution graph** green squares.

Mood words: practical, dense, trustworthy, nerdy, familiar.

## 2. Color Palette & Roles

Values are from the live Primer `light` and `dark` theme CSS on github.githubassets.com (functional tokens such as `--fgColor-default`).

| Token | Light | Dark | Role |
|---|---|---|---|
| `fgColor-default` | `#1F2328` | `#F0F6FC` | Primary text |
| `fgColor-muted` | `#59636E` | `#9198A1` | Secondary text |
| `bgColor-default` | `#FFFFFF` | `#0D1117` | Page canvas |
| `bgColor-muted` | `#F6F8FA` | `#151B23` | Box headers, subtle panels |
| `bgColor-inset` | `#F6F8FA` | `#010409` | Inset wells, sidebars |
| `borderColor-default` | `#D1D9E0` | `#3D444D` | Borders |
| `borderColor-muted` | `#D1D9E0B3` | `#3D444DB3` | Light dividers |
| `fgColor-accent` | `#0969DA` | `#4493F8` | Links, selected |
| `bgColor-accent-emphasis` | `#0969DA` | `#1F6FEB` | Blue fills, focus |
| `bgColor-accent-muted` | `#DDF4FF` | `#388BFD1A` | Highlight tint |
| `bgColor-success-emphasis` | `#1F883D` | `#238636` | Primary button, Open |
| `button-primary-bgColor-hover` | `#1C8139` | `#29903B` | Primary hover |
| `fgColor-success` | `#1A7F37` | `#3FB950` | Success text |
| `fgColor-done` | `#8250DF` | `#AB7DF8` | Merged, done |
| `fgColor-danger` | `#D1242F` | `#F85149` | Errors, closed |
| `bgColor-danger-emphasis` | `#CF222E` | `#DA3633` | Danger buttons |
| `fgColor-attention` | `#9A6700` | `#D29922` | Warnings |
| `bgColor-attention-muted` | `#FFF8C5` | `#BB800926` | Warning flash |
| `fgColor-sponsors` | `#BF3989` | `#DB61A2` | Sponsors |
| `header-bgColor` | `#25292E` | `#151B23F2` | Dark header bars |
| `underlineNav-borderColor-active` | `#FD8C73` | `#F78166` | Active tab underline |
| `bgColor-neutral-muted` | `#818B981F` | `#656C7633` | Counters, labels |

### Issue and PR states

| State | Fill | Use |
|---|---|---|
| Open | `#1F883D` | Open issue/PR badge |
| Merged | `#8250DF` | Merged PR |
| Closed | `#CF222E` | Closed PR, not planned |
| Closed as completed | `#8250DF` | Completed issue |
| Draft | `#59636E` | Draft PR |

**Contribution graph.** Light: `#EFF2F5`, `#ACEEBB`, `#4AC26B`, `#2DA44E`, `#116329`. Dark: `#151B23`, `#033A16`, `#196C2E`, `#2EA043`, `#56D364`. Primer also ships dark dimmed, high-contrast and colorblind themes, so build with tokens rather than raw hex.

## 3. Typography

**Product:** the system stack `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`, 14px base. Code uses `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`.

**Marketing:** **Mona Sans** (variable, GitHub's open-source typeface, SIL OFL, on Google Fonts) for headings and body, with **Hubot Sans** for some display moments and **Monaspace** for code-styled labels. Mona Sans is free, so use it directly.

### Product scale (Primer)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display | 40px | 500 | 56px |
| Title large | 32px | 600 | 48px |
| Title medium | 20px | 600 | 32px |
| Title small | 16px | 600 | 24px |
| Body large | 16px | 400 | 24px |
| Body medium | 14px | 400 | 20px |
| Body small / caption | 12px | 400 | 20px |
| Code | 12px mono (13.6px in markdown) | 400 | 20px |

**Marketing scale (Primer Brand, approximate):** hero 56-72px Mona Sans 600 with slight negative tracking; section headings 40-48px; subheads 20-24px; body 16-18px.

### Rules

- Sentence case for UI ("New repository", "Create pull request").
- Repository paths read "owner / repo" with the repo name in semibold.
- Counts in small rounded counters; numerals stay proportional except in tables and code.

## 4. Logo & Brand Mark

- **Invertocat:** the Octocat silhouette knocked out of a circle. Used alone in the header and as the app icon.
- **Lockup:** Invertocat plus the "GitHub" wordmark. The bundled `logo.svg` is GitHub's official black lockup from the brand toolkit, set to `#1F2328`.
- **Colors:** black on light, white on dark. The mark is never colored.
- **Clear space:** at least the height of the Octocat's head around the mark (approximate; the toolkit ships clear-space versions).
- **Minimum size:** Invertocat 16px (the header uses 32px); lockup about 72px wide (approximate).

Misuse: do not recolor, outline, rotate or animate the Invertocat; do not draw the full-color Mona or other Octocats as the logo.

## 5. Components

### Buttons (Primer `Button`)

Sizes: small 28px, medium 32px, large 40px tall; 14px/500 text (12px small); 6px radius; 1px border.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#1F883D` | `#FFFFFF` | `#1F232826` | `#1C8139` |
| Default | `#F6F8FA` | `#25292E` | `#D1D9E0` | `#EFF2F5` |
| Invisible | transparent | `#0969DA` or `#59636E` | none | `#818B981A` |
| Danger | `#F6F8FA` | `#D1242F` | `#D1D9E0` | fill `#CF222E`, text white |
| Disabled | `#EFF2F5` | `#818B98` | `#D1D9E0` | none |

```css
.gh-btn {
  display: inline-flex; align-items: center; gap: 8px;
  height: 32px; padding: 0 12px;
  font: 500 14px/20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  color: #25292E; background: #F6F8FA;
  border: 1px solid #D1D9E0; border-radius: 6px;
  box-shadow: 0 1px 0 0 #1F23280A;
  transition: background-color 80ms cubic-bezier(0.33,1,0.68,1);
}
.gh-btn:hover { background: #EFF2F5; }
.gh-btn--primary { color: #fff; background: #1F883D; border-color: #1F232826; }
.gh-btn--primary:hover { background: #1C8139; }
.gh-btn:focus-visible { outline: 2px solid #0969DA; outline-offset: -2px; }
```

### Header

- Logged in: 64px app header on `#F6F8FA` (light) with Invertocat, breadcrumb "owner / repo", search box ("Type / to search"), Copilot button, plus menu, notifications, avatar.
- Logged out: dark marketing header with Invertocat, Platform, Solutions, Resources, Open Source, Enterprise, Pricing menus, then "Sign in" and an outline "Sign up" button.

### Underline nav (repo tabs)

Code, Issues, Pull requests, Actions, Projects, Wiki, Security, Insights, Settings. 14px with 16px octicons; active tab has a 2px `#FD8C73` underline and semibold text; counters sit beside labels.

### Box (signature container)

```css
.gh-box { background: #fff; border: 1px solid #D1D9E0; border-radius: 6px; }
.gh-box-header { background: #F6F8FA; border-bottom: 1px solid #D1D9E0; padding: 16px; border-radius: 6px 6px 0 0; }
.gh-box-row { padding: 8px 16px; border-top: 1px solid #D1D9E0B3; }
```

Used for the file list, README frame, settings sections and issue lists.

### Labels, counters, state badges

- Label: pill, 1px border, 12px/500, 20-24px tall, color from the label's hex.
- Counter: `#818B981F` fill, 12px/500, pill, 18px tall.
- State badge (`StateLabel`): pill, 32px tall, white text on Open/Merged/Closed fills with an octicon.

### Timeline and comments

Avatar (circle 40px), comment box with header bar (`#F6F8FA`, "username commented 2 days ago"), markdown body at 14px/1.5, and a 2px gray vertical timeline line linking events.

### Inputs

32px tall (40px large), `#FFFFFF` fill, 1px `#D1D9E0` border, 6px radius, inset shadow `inset 0 1px 0 0 #D1D9E03D` (approximate); focus border `#0969DA` with 2px outline.

### Flash banners

Full-width boxes with tinted backgrounds: info `#DDF4FF`, warning `#FFF8C5`, error `#FFEBE9`, success `#DAFBE1`; 1px matching border, 6px radius.

### Avatars

Users are circles; organizations and bots are rounded squares (6px). Avatar stacks overlap by about a third.

## 6. Layout & Spacing

- **Product:** max width 1280px for repository pages with a main column and a 296px right sidebar (About, Releases, Languages); settings use a left nav plus content.
- **Spacing:** Primer base-size tokens 4, 8, 12, 16, 20, 24, 28, 32, 40, 48px.
- **Breakpoints:** 544, 768, 1012, 1280, 1400px (Primer).
- **Density:** high. 14px body text, 32px controls, tight 8px row padding in lists.
- **Marketing:** full-bleed dark sections, centered 1280px container, 96-128px vertical rhythm.

## 7. Depth, Elevation & Motion

- Resting small: `0 1px 1px 0 #1F23280A, 0 1px 2px 0 #1F232808`.
- Floating small (menus, popovers): `0 0 0 1px #D1D9E040, 0 6px 12px -3px #25292E0A, 0 6px 18px 0 #25292E1F`.
- Dark theme leans on borders `#3D444D` and darker shadows `#01040966`.
- Motion: 80-200ms, `cubic-bezier(0.33,1,0.68,1)` for overlays; marketing uses scroll-triggered fades and animated illustrations.

## 8. Iconography & Imagery

- **Octicons:** GitHub's open-source icon set, 16px and 24px, filled and 1.5px-stroke style, `currentColor`, square ends.
- **Product imagery:** real UI (PRs, Copilot chat, Actions runs) in dark frames with glow.
- **Illustration:** Mona the Octocat and friends appear in Universe and docs art; marketing uses 3D-lit Octocats and colorful gradient glows on black.
- **Language colors:** each language has a fixed dot color (JavaScript `#F1E05A`, TypeScript `#3178C6`, Python `#3572A5`).

## 9. Voice & Microcopy

Plain, helpful, developer-to-developer. Short labels, no hype in product UI.

- Marketing: "Software still starts with you", "Build and ship software on a single, collaborative platform".
- CTAs: "Sign up for GitHub", "Sign in", "Start a free enterprise trial", "Contact sales".
- Product: "New repository", "Create pull request", "Merge pull request", "Squash and merge", "Add a comment", "This branch has no conflicts with the base branch".
- Empty states: "There aren't any open issues." with a short suggestion.

## 10. Do's and Don'ts

**Do**

- Use green `#1F883D` only for the single primary action in a view.
- Make every link `#0969DA`.
- Wrap content in 1px-bordered boxes with 6px radius and gray headers.
- Use Primer functional tokens so light, dark and high-contrast themes all work.
- Use octicons at 16px beside labels.

**Don't**

- Don't use more than one primary button per section.
- Don't color the Invertocat.
- Don't use large radii (over 12px) or heavy shadows in product UI.
- Don't swap state colors (purple is merged, not open).
- Don't set product body text above 16px.

## 11. Agent Prompt Guide

> Build this UI in the style of GitHub (Primer). Light theme: canvas `#FFFFFF`, muted surface `#F6F8FA`, text `#1F2328`, secondary `#59636E`, borders `#D1D9E0`. System font stack at 14px (Mona Sans for marketing headlines). Buttons 32px tall, 6px radius, 1px border, 14px/500: default `#F6F8FA` with `#D1D9E0` border, primary green `#1F883D` (hover `#1C8139`) with white text. Links `#0969DA`. Header with the Invertocat, "owner / repo" breadcrumb, search field and avatar; underline tabs with a `#FD8C73` active underline and gray counters. Wrap lists in boxes: 1px border, 6px radius, `#F6F8FA` header row. State badges: Open `#1F883D`, Merged `#8250DF`, Closed `#CF222E`, Draft `#59636E`. Dark theme: `#0D1117` canvas, `#F0F6FC` text, `#3D444D` borders, `#4493F8` links.

```css
:root {
  --brand-fg: #1F2328;
  --brand-fg-muted: #59636E;
  --brand-bg: #FFFFFF;
  --brand-bg-muted: #F6F8FA;
  --brand-border: #D1D9E0;
  --brand-accent: #0969DA;
  --brand-accent-muted: #DDF4FF;
  --brand-primary: #1F883D;
  --brand-primary-hover: #1C8139;
  --brand-success: #1A7F37;
  --brand-done: #8250DF;
  --brand-danger: #D1242F;
  --brand-danger-emphasis: #CF222E;
  --brand-attention: #9A6700;
  --brand-sponsors: #BF3989;
  --brand-tab-active: #FD8C73;
  --brand-font: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  --brand-font-display: "Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --brand-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  --brand-radius: 6px;
  --brand-radius-sm: 3px;
  --brand-radius-lg: 12px;
  --brand-shadow-resting: 0 1px 1px 0 #1F23280A, 0 1px 2px 0 #1F232808;
  --brand-shadow-floating: 0 0 0 1px #D1D9E040, 0 6px 12px -3px #25292E0A, 0 6px 18px 0 #25292E1F;
}
[data-color-mode="dark"] {
  --brand-fg: #F0F6FC;
  --brand-fg-muted: #9198A1;
  --brand-bg: #0D1117;
  --brand-bg-muted: #151B23;
  --brand-border: #3D444D;
  --brand-accent: #4493F8;
  --brand-primary: #238636;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by GitHub.

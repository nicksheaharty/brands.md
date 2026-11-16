---
name: GitLab
slug: gitlab
url: https://gitlab.com
category: Developer
tagline: "Tanuki orange on near-black ink and lavender-white, GitLab Sans type, Pajamas product UI."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Tanuki Orange
    hex: "#FC6D26"
    role: Logo middle, brand accent
  - name: Ink
    hex: "#171321"
    role: Primary buttons, headings, wordmark, dark bands
  - name: Tanuki Red
    hex: "#E24329"
    role: Logo outer shape
  - name: Tanuki Amber
    hex: "#FCA326"
    role: Logo lower faces, highlights
  - name: Purple
    hex: "#7759C2"
    role: Text links, active nav underline
  - name: Paper
    hex: "#FCFBFC"
    role: Page background
  - name: Lavender
    hex: "#A989F5"
    role: Illustration, accents on dark
  - name: Purple Tint
    hex: "#F6F3FE"
    role: Pale callout panels
  - name: Gray 700
    hex: "#45424D"
    role: Body text
  - name: Gray 500
    hex: "#74717A"
    role: Secondary text, disabled labels
  - name: Gray 300
    hex: "#D1D0D3"
    role: Borders, disabled fills
  - name: Gray 100
    hex: "#E8E7EB"
    role: Secondary button hover, rules
  - name: Gray 50
    hex: "#F2F1F5"
    role: Subtle panels
  - name: Pajamas Blue
    hex: "#1F75CB"
    role: Product UI confirm buttons and links
  - name: Success
    hex: "#108548"
    role: Pipeline passed, merged-ready
  - name: Danger
    hex: "#DD2B0E"
    role: Pipeline failed, destructive
fonts:
  display:
    family: "GitLab Sans"
    fallback: "Inter"
    weights: [400, 660]
  body:
    family: "GitLab Sans"
    fallback: "Inter"
    weights: [400, 600]
  mono:
    family: "GitLab Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 96, weight: 660, lineHeight: 1.04, tracking: "-0.03em" }
  - { role: Heading 1, size: 64, weight: 400, lineHeight: 1.06, tracking: "-0.03em" }
  - { role: Heading 2, size: 50, weight: 400, lineHeight: 1.04, tracking: "-0.03em" }
  - { role: Heading 3, size: 40, weight: 400, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading 5, size: 24, weight: 400, lineHeight: 1.17, tracking: "-0.02em" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Product UI, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 4, md: 8, lg: 20, pill: 100 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 4px 6px rgba(0,0,0,0.1)" }
  - { name: Dropdown, value: "0 2px 4px rgba(0,0,0,0.2)" }
preview:
  bg: "#FCFBFC"
  surface: "#FFFFFF"
  text: "#171321"
  muted: "#74717A"
  border: "#D1D0D3"
  accent: "#171321"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# GitLab

## 1. Visual Theme & Atmosphere

GitLab is the DevSecOps platform, and its brand balances a warm, characterful logo (the orange tanuki) with a calm, almost monochrome interface. The marketing site (about.gitlab.com, built on GitLab's "Slippers" web system) uses a faintly lavender white page (`#FCFBFC`), near-black ink `#171321` for headlines and the primary buttons, purple `#7759C2` for links, and the tanuki's red-orange-amber only in the logo and small accents. The product UI follows **Pajamas**, GitLab's design system: neutral grays, blue confirm buttons, 14px GitLab Sans.

The homepage today opens with "Speed you can trust, all the way to production", a subline about agentic software engineering, and a dark "Try for free" button, followed by a release callout (version number in a large display figure), feature blocks ("AI orchestration", "Platform", "Security"), customer logos, and a dark ink band.

What makes it recognisable:

- **The tanuki.** A geometric fox-like head in three warm tones.
- **Ink-black buttons**, not orange. Orange is reserved for the logo.
- **Large, light headlines:** 50-64px at weight 400 with tight -3% tracking, plus 660-weight display numbers.
- **Purple text links** with underline.
- **GitLab Sans and GitLab Mono**, the company's open-source forks of Inter and JetBrains Mono.

Mood words: open, pragmatic, warm, transparent, technical.

## 2. Color Palette & Roles

Marketing values were read from the about.gitlab.com CSS. Pajamas product values are approximate where noted.

| Name | Hex | Role |
|---|---|---|
| Tanuki Red | `#E24329` | Logo outer silhouette |
| Tanuki Orange | `#FC6D26` | Logo, checklist ticks, accent |
| Tanuki Amber | `#FCA326` | Logo, highlights |
| Ink | `#171321` | Headlines, primary buttons, wordmark, dark bands |
| Ink Alt | `#18171D` | Body text on paper |
| Gray 700 | `#45424D` | Long-form body |
| Gray 500 | `#74717A` | Secondary text, disabled labels |
| Gray 400 | `#A2A1A6` | Placeholder, icons |
| Gray 300 | `#D1D0D3` | Borders, disabled fills |
| Gray 100 | `#E8E7EB` | Hover fills, rules |
| Gray 50 | `#F2F1F5` | Subtle panels |
| Paper | `#FCFBFC` | Page background |
| Warm Paper | `#F7F7F5` | Alternate band |
| White | `#FFFFFF` | Cards, inputs |
| Purple | `#7759C2` | Links, active underline |
| Lavender | `#A989F5` | Accents on dark, illustration |
| Purple Light | `#E3D6FF` | Tags, tints |
| Purple Tint | `#F6F3FE` | Callouts |

### Product UI (Pajamas, approximate)

| Name | Hex | Role |
|---|---|---|
| Blue 500 | `#1F75CB` | Confirm buttons, links |
| Blue 600 | `#1068BF` | Hover |
| Green 500 | `#108548` | Passed, success |
| Orange 500 | `#AB6100` | Warning, running-with-warnings |
| Red 500 | `#DD2B0E` | Failed, danger |
| Purple 500 | `#7B58CF` | Merged |
| Text | `#3A383F` | Default text |
| Text subtle | `#626168` | Secondary |
| Border | `#DCDCDE` | Default borders |
| Subtle bg | `#FBFAFD` | Sidebar, panels |

### Dark mode

The product offers a full dark mode (backgrounds around `#18171D` and `#232128`, text `#ECECEF`, blue links `#63A6E9`, approximate). Marketing uses ink `#171321` bands with white text and lavender links.

## 3. Typography

**Families:** **GitLab Sans** (a fork of Inter with tweaked letterforms) and **GitLab Mono** (a fork of JetBrains Mono), both open source under the SIL OFL. Free fallbacks: **Inter** and **JetBrains Mono**, which are nearly identical.

### Marketing scale (Slippers)

| Role | Desktop | Mobile | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display 1 | 96px | 48px | 660 | 1.04 | -0.03em |
| Heading 1 | 64px | 48px | 400 (660 bold) | 1.06 | -0.03em |
| Heading 2 | 50px | 40px | 400 | 1.04 | -0.03em |
| Heading 3 | 40px | 32px | 400 | 1.05 | -0.02em |
| Heading 4 | 32px | 28px | 400 | 1.13 | -0.02em |
| Heading 5 | 24px | 22px | 400 | 1.17 | -0.02em |
| Body 1 | 18px | 18px | 400 | 1.5 | 0 |
| Body 2 | 16px | 16px | 400 | 1.5 | 0 |
| Button | 18px | 16px | 660 | 1.25 | 0 |
| Eyebrow (Mono) | 14px | 12px | 400, uppercase | 1.4 | 0.04em (approximate) |

### Product scale (Pajamas, approximate)

14px base, 12px small, 16-24px headings at 600; code 13-14px GitLab Mono.

### Rules

- Sentence case for headlines and buttons ("Get free trial", "Request a demo").
- Pair a light 400 headline with a bold 660 phrase for emphasis.
- Use GitLab Mono for eyebrows, version numbers and code snippets.
- Feature names are capitalised: GitLab Duo, Duo Agent Platform, Orbit.

## 4. Logo & Brand Mark

The logo is the **tanuki**: a geometric head built from triangular facets in red `#E24329`, orange `#FC6D26` and amber `#FCA326`, paired with the "GitLab" wordmark in ink `#171321`.

- **Versions:** horizontal (tanuki left of wordmark), tanuki alone, one-colour (all ink or all white).
- **Colors:** full colour on white or paper; full-colour tanuki with white wordmark on ink; one-colour white on photos.
- **Clear space:** at least the width of one tanuki ear on all sides (approximate).
- **Minimum size:** tanuki 16px; horizontal lockup about 80px wide (approximate).
- The bundled `logo.svg` is the 2022 horizontal lockup from Wikimedia Commons.

Misuse: do not recolor facets, add gradients, outline the tanuki, or set the wordmark in another font.

## 5. Components

### Buttons (marketing)

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#171321` | `#FFFFFF` | 1px `#171321` | inverts: `#FFFFFF` fill, ink text |
| Secondary | `#FFFFFF` | `#171321` | none | `#E8E7EB` |
| On dark | `#FFFFFF` | `#171321` | none | `#E8E7EB` |
| Text link | none | `#7759C2`, underlined | none | darker purple, arrow nudges |
| Disabled | `#D1D0D3` | `#74717A` | 1px `#D1D0D3` | none |

```css
.gl-btn {
  display: inline-flex; align-items: center; gap: 8px;
  min-width: 68px; padding: 11px 16px;
  font: 660 18px/1.25 "GitLab Sans", Inter, system-ui, sans-serif;
  color: #fff; background: #171321;
  border: 1px solid #171321; border-radius: 4px;
  transition: background-color .3s cubic-bezier(.7,0,.3,1), color .3s;
}
.gl-btn:hover { background: #fff; color: #171321; }
.gl-btn--secondary { background: #fff; color: #171321; border: 0; }
.gl-btn--secondary:hover { background: #E8E7EB; }
.gl-btn:focus-visible { outline: 2px solid #7759C2; outline-offset: 2px; }
```

### Buttons (product, Pajamas, approximate)

32px tall, 4px radius, 14px/600. Confirm: `#1F75CB` fill, white text, hover `#1068BF`. Default: white fill, 1px `#BFBFC3` border, `#3A383F` text. Danger: `#DD2B0E`.

### Navigation (marketing)

White header: tanuki + wordmark, then "Why GitLab?", "Platform", "Solutions", "Pricing", "Resources", "Company" at 16px ink. Right side: search, "Sign in", outline "Request a demo" (approximate), and an ink "Get free trial" button. Menus are wide white panels with grouped links and a featured card ("GitLab Orbit is generally available"). A thin announcement banner sits above.

### Navigation (product)

Left sidebar (collapsible) on a pale gray panel with project avatar, then Pinned, Manage, Plan, Code, Build, Secure, Deploy, Operate, Monitor, Analyze, Settings. Top bar holds breadcrumbs, search, Duo chat, merge request and to-do counters.

### Cards

White, 1px `#D1D0D3` border or none, 8-20px radius, 24-32px padding. Some feature cards use `#F6F3FE` purple tint. Hover adds `0 4px 6px #0000001A`.

### Tabs

Text tabs with a 2px purple underline on the active item (`box-shadow: inset 0 -2px #7759C2`).

### Badges

Pill badges (100px radius) at 12-14px: purple tint with purple text for "New", ink fill for release numbers. In product: status badges for pipelines (green "passed", red "failed", blue "running").

### Pipeline graph (product signature)

Stages in columns, each job a rounded pill with a status icon (green check circle, red x circle, blue half-filled running circle), connected by gray lines.

### Forms

Inputs 40-48px tall, white, 1px `#D1D0D3` border, 4px radius, 16px text; focus ring purple or blue; labels 14px/600.

## 6. Layout & Spacing

- **Container:** about 1200-1280px; text blocks around 720px.
- **Grid:** 12 columns with 24-32px gutters.
- **Spacing:** 8px base (8, 16, 24, 32, 48, 64, 96).
- **Breakpoints:** about 576, 768, 992, 1200px (approximate).
- **Density:** marketing is open; product is dense (14px text, 32px controls, compact tables).

## 7. Depth, Elevation & Motion

- Mostly flat; borders and tinted panels create hierarchy.
- Card hover: `0 4px 6px #0000001A`. Dropdowns: `0 2px 4px #00000033`. Large hero media uses a layered soft shadow.
- Radii: 4px buttons and inputs, 8-10px cards, 20px large panels, 100px pills.
- Motion: 300ms `cubic-bezier(.7,0,.3,1)` on button fills; arrow icons slide 8px on hover; menu panels fade in.

## 8. Iconography & Imagery

- **Icons:** GitLab SVG icon set, 16px, filled-and-outline geometric style, `currentColor`.
- **Illustrations:** flat geometric shapes in orange, purple and lavender, often echoing the tanuki facets; product screenshots framed with soft shadows.
- **Photography:** team and customer photos, natural light, used sparingly.
- **Release posts:** large version number in GitLab Sans display weight.

## 9. Voice & Microcopy

Direct, practical and transparent (GitLab publishes its handbook in public). Focus on speed with control and security.

- Headlines: "Speed you can trust, all the way to production", "Ship faster. Stay in control.", "One control plane".
- CTAs: "Get free trial", "Try for free", "Request a demo", "Talk to sales", "Read the announcement".
- Product strings: "New merge request", "Run pipeline", "Approve", "Merge when pipeline succeeds", "Pipeline passed".

## 10. Do's and Don'ts

**Do**

- Keep the tanuki in its three original colours.
- Use ink `#171321` for primary buttons and headlines.
- Set headlines in GitLab Sans 400 with -2% to -3% tracking.
- Use purple `#7759C2` for links.
- Follow Pajamas for in-product screens: blue confirm buttons, 14px text.

**Don't**

- Don't make orange buttons; orange belongs to the logo.
- Don't use heavy shadows or gradients on UI controls.
- Don't use pure black `#000000` or pure white backgrounds everywhere; prefer ink and paper.
- Don't set headings in all caps.
- Don't mix the old 2015 raccoon-style logo with the current tanuki.

## 11. Agent Prompt Guide

> Build this UI in the style of GitLab. Page background `#FCFBFC`, cards white, text ink `#171321` and `#45424D`, secondary `#74717A`, borders `#D1D0D3`, subtle panels `#F2F1F5`. Font GitLab Sans (fallback Inter); headlines 40-64px weight 400 with -0.03em tracking, bold phrases at 660; body 16-18px. Primary button: ink `#171321` fill, white 18px/660 text, 4px radius, 11px 16px padding, hover inverts to white with ink text. Secondary: white with ink text, hover `#E8E7EB`. Links purple `#7759C2` underlined. Header with the orange tanuki logo, plain ink nav links and an ink "Get free trial" button. Keep tanuki red `#E24329`, orange `#FC6D26` and amber `#FCA326` for the logo and tiny accents. Product screens use Pajamas: 14px text, blue `#1F75CB` confirm buttons, green `#108548` passed and red `#DD2B0E` failed pipeline badges.

```css
:root {
  --brand-tanuki-red: #E24329;
  --brand-tanuki-orange: #FC6D26;
  --brand-tanuki-amber: #FCA326;
  --brand-ink: #171321;
  --brand-text: #45424D;
  --brand-text-muted: #74717A;
  --brand-border: #D1D0D3;
  --brand-gray-100: #E8E7EB;
  --brand-gray-50: #F2F1F5;
  --brand-paper: #FCFBFC;
  --brand-surface: #FFFFFF;
  --brand-purple: #7759C2;
  --brand-lavender: #A989F5;
  --brand-purple-tint: #F6F3FE;
  --brand-blue: #1F75CB;
  --brand-success: #108548;
  --brand-danger: #DD2B0E;
  --brand-font: "GitLab Sans", Inter, system-ui, sans-serif;
  --brand-font-mono: "GitLab Mono", "JetBrains Mono", ui-monospace, monospace;
  --brand-radius: 4px;
  --brand-radius-card: 8px;
  --brand-radius-panel: 20px;
  --brand-shadow-card: 0 4px 6px rgba(0,0,0,0.1);
  --brand-ease: cubic-bezier(.7,0,.3,1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by GitLab.

---
name: Facebook
slug: facebook
url: https://www.facebook.com
category: Social
tagline: "Friendly, dense, blue-and-grey feed UI built for billions of daily scrolls."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Facebook Blue
    hex: "#0866FF"
    role: Brand mark, primary buttons, links, active nav state
  - name: Web Wash
    hex: "#F0F2F5"
    role: Page background behind cards, secondary button fill
  - name: Card
    hex: "#FFFFFF"
    role: Cards, top nav bar, dialogs, popovers
  - name: Primary Text
    hex: "#050505"
    role: Names, post body, headings
  - name: Secondary Text
    hex: "#65676B"
    role: Timestamps, meta lines, placeholder text, icons
  - name: Divider
    hex: "#CED0D4"
    role: Hairlines, input borders, card separators
  - name: Comment Bubble
    hex: "#F0F2F5"
    role: Comment bubbles, search field fill
  - name: Deemphasized Blue
    hex: "#EBF5FF"
    role: Tinted button fill, selected list rows
  - name: Legacy Blue
    hex: "#1877F2"
    role: Pre-2023 brand blue, still seen in focus rings and older surfaces
  - name: Positive
    hex: "#31A24C"
    role: Online dot, success states
  - name: Notification Red
    hex: "#E41E3F"
    role: Notification badges, destructive actions
  - name: Dark Background
    hex: "#18191A"
    role: Dark mode page background
  - name: Dark Card
    hex: "#242526"
    role: Dark mode cards and nav bar
  - name: Dark Text
    hex: "#E4E6EB"
    role: Dark mode primary text
fonts:
  display:
    family: "Facebook Sans"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Segoe UI / SF Pro (system stack)"
    fallback: "Roboto"
    weights: [400, 600, 700]
typeScale:
  - { role: Display, size: 28, weight: 700, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Section Title, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Card Title, size: 17, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Name, size: 15, weight: 600, lineHeight: 1.33, tracking: "0" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Meta, size: 13, weight: 400, lineHeight: 1.23, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 6, lg: 8, xl: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Card, value: "0 1px 2px rgba(0,0,0,0.2)" }
  - { name: Popover, value: "0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1)" }
  - { name: Nav, value: "0 1px 2px rgba(0,0,0,0.1)" }
preview:
  bg: "#F0F2F5"
  surface: "#FFFFFF"
  text: "#050505"
  muted: "#65676B"
  border: "#CED0D4"
  accent: "#0866FF"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Facebook

## 1. Visual Theme & Atmosphere

Facebook looks like a utility more than a showcase. The page is a pale grey wash (`#F0F2F5`) with white cards floating on it, a single saturated blue (`#0866FF`) for anything you can act on, and near-black text. Almost every surface is either white, grey, or blue. Colour from photos, videos and reactions does the expressive work; the chrome stays out of the way.

Things that make it recognisable at a glance:

- **The grey wash with white cards.** Feed posts, sidebars and composer all sit in white rectangles with 8px corners and a faint 1px shadow on `#F0F2F5`.
- **One blue.** The 2023 refresh moved the brand from `#1877F2` to the deeper, higher-contrast `#0866FF`. It shows up on the logo, primary buttons, the active tab underline and links. Nothing else in the chrome competes with it.
- **Round everything small.** Avatars are circles, icon buttons are 36-40px grey circles, comment bubbles are 18px-radius pills. Large containers stay at 8px.
- **Dense, scannable rows.** Lists use 8px vertical padding, 15px text, and 36-40px avatars. You can see a lot at once.
- **Left rail, feed, right rail.** Desktop uses a three-column layout: shortcuts on the left, a centred 680px feed, contacts and sponsored items on the right.

Density is medium-high. The product is built for long sessions, so it favours compact rows, clear hierarchy through weight rather than size, and minimal decoration.

## 2. Color Palette & Roles

### Core palette (light mode)

| Name | Hex | Role |
| --- | --- | --- |
| Facebook Blue | `#0866FF` | Logo, primary buttons, links, active tab indicator |
| Web Wash | `#F0F2F5` | Page background, secondary button fill, search field |
| Card | `#FFFFFF` | Cards, top nav, dialogs, menus |
| Primary Text | `#050505` | Names, body copy, headings |
| Secondary Text | `#65676B` | Timestamps, meta, placeholder, inactive icons |
| Tertiary / Disabled | `#BCC0C4` | Disabled icons and text |
| Divider | `#CED0D4` | Input borders, separators |
| Hover Overlay | `rgba(0,0,0,0.05)` | Hover state on rows and icon buttons |
| Media Inner Border | `rgba(0,0,0,0.1)` | 1px inset line around photos so white images keep an edge |
| Deemphasized Blue | `#EBF5FF` | Tinted button fill, selected nav row |
| Blue Link (dark text) | `#216FDB` | Inline links on white where needed |

### Semantic colours

| Name | Hex | Use |
| --- | --- | --- |
| Positive | `#31A24C` | Online presence dot, confirmations |
| Negative | `#E41E3F` | Errors, notification badges, destructive buttons |
| Warning | `#F7B928` | Caution banners |
| Legacy Blue | `#1877F2` | Focus rings, older surfaces, pre-2023 assets |

### Reaction and spectrum accents

These appear in reactions, stickers, Groups/Events icons and illustrations. Do not use them for chrome.

| Name | Hex |
| --- | --- |
| Cherry | `#F3425F` |
| Tomato | `#FB724B` |
| Lemon | `#F7B928` |
| Lime | `#45BD62` |
| Teal | `#2ABBA7` |
| Seafoam | `#54C7EC` |
| Grape | `#9360F7` |
| Pink | `#FF66BF` |

### Dark mode

| Name | Hex | Role |
| --- | --- | --- |
| Background | `#18191A` | Page background |
| Card | `#242526` | Cards, nav bar, menus |
| Raised / Comment | `#3A3B3C` | Comment bubbles, search field, secondary buttons |
| Divider | `#3E4042` | Separators, input borders |
| Primary Text | `#E4E6EB` | Body and names |
| Secondary Text | `#B0B3B8` | Meta, icons |
| Hover Overlay | `rgba(255,255,255,0.1)` | Hover state |
| Accent | `#0866FF` (links lighten to `#2D88FF`) | Primary actions |

Dark mode keeps the same structure: darker wash, slightly lighter cards, a third step for bubbles and fields. Blue stays the only strong colour.

## 3. Typography

**Families.** The 2023 refresh introduced **Facebook Sans**, a proprietary typeface used for the wordmark, marketing, and an increasing share of app headlines. The web product's running UI text still uses the platform system stack:

```css
font-family: "Facebook Sans", system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

Facebook Sans is not licensed for public use. For rebuilds, use **Inter** for display text and **Roboto** (or the system stack) for body. Both are on Google Fonts. Meta's corporate brand uses a separate face, Optimistic, which belongs on Meta materials, not on Facebook product UI.

### Scale

| Role | Size (px) | Weight | Line height | Tracking | Example use |
| --- | --- | --- | --- | --- | --- |
| Display | 28 | 700 | 1.2 | -0.01em | Page titles ("Marketplace") |
| Section Title | 20 | 700 | 1.2 | 0 | Card headers, dialog titles |
| Card Title | 17 | 600 | 1.3 | 0 | Group names, event titles |
| Name | 15 | 600 | 1.33 | 0 | Author name in a post |
| Body | 15 | 400 | 1.33 | 0 | Post text, list rows |
| Meta | 13 | 400 | 1.23 | 0 | Timestamps, "Like · Reply" |
| Caption | 12 | 400 | 1.33 | 0 | Badge counts, legal text |

Short posts without media render larger (around 24px, weight 400) so a one-line status reads as a headline.

### Rules

- Sentence case for everything: buttons, tabs, menu items, headings.
- Hierarchy comes from weight (400 vs 600/700) and colour (`#050505` vs `#65676B`), not from big size jumps.
- Numbers in counts use the normal proportional figures, abbreviated: "1.2K", "34K", "2M".
- Names are always 600 weight. Timestamps are always secondary colour at 13px.
- Do not use all-caps labels or letter-spacing on UI text.

## 4. Logo & Brand Mark

The logo is a solid blue circle (`#0866FF`) with a white lowercase "f" cut into it. The "f" sits low and runs off the bottom of the circle, so the circle reads as an open shape at the base. The 2023 version redrew the "f" with a slightly tighter counter and dropped all gradients for a flat fill.

- **Primary:** blue circle, white "f", on white or on photography with good contrast. The "f" stays white over images, never transparent.
- **Secondary:** white circle with a transparent "f", used on Facebook Blue backgrounds or dark images.
- **Clear space:** one quarter of the logo's width on all sides. Keep at least half a logo's distance from other content.
- **Minimum size:** 16px wide on screen, 6mm in print.
- **Wordmark:** "facebook" set in Facebook Sans, lowercase, in Facebook Blue. It is a separate asset and is not placed next to the circle logo as a lockup by third parties.

Misuse:

- Do not use the "f" alone without the circle.
- Do not write "Facebook" next to the logo or attach other words.
- Do not recolour, outline, make 3D, add shadows, or add emoji.
- Do not use the thumbs-up "Like" icon in place of the logo.
- Do not use the old `#1877F2` or the pre-2019 square logo.

## 5. Components

### Buttons

```css
.btn {
  height: 36px;
  padding: 0 12px;
  border-radius: 6px;
  font: 600 15px/20px var(--brand-font-body);
  border: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: background-color 100ms ease-out, transform 100ms ease-out;
}
.btn-primary { background: #0866FF; color: #FFFFFF; }
.btn-primary:hover { background: #0759E0; }
.btn-primary:active { transform: scale(0.96); }
.btn-secondary { background: #E4E6EB; color: #050505; }
.btn-secondary:hover { background: #D8DADF; }
.btn-deemphasized { background: #EBF5FF; color: #0866FF; }
.btn-ghost { background: transparent; color: #65676B; }
.btn-ghost:hover { background: rgba(0,0,0,0.05); }
.btn:disabled { background: #E4E6EB; color: #BCC0C4; cursor: not-allowed; }
.btn:focus-visible { box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #1877F2; outline: none; }
```

- **Large** (login, create account): 48px tall, 20px text, 6px radius. The "Create new account" button on the login page uses green `#42B72A`.
- **Icon button:** 36px or 40px circle, `#E4E6EB` fill, 20px icon in `#050505`.
- **Post action row** (Like, Comment, Share): full-width ghost buttons, 15px/600 text in `#65676B`, 4px radius, hover overlay. Liked state turns the icon and label `#0866FF`.

### Inputs

```css
.input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid #CED0D4;
  border-radius: 6px;
  background: #FFFFFF;
  font: 400 15px var(--brand-font-body);
  color: #050505;
}
.input::placeholder { color: #65676B; }
.input:focus { border-color: #0866FF; box-shadow: 0 0 0 2px #E7F3FF; outline: none; }
.input[aria-invalid="true"] { border-color: #E41E3F; }
```

- **Search field:** pill, 40px tall, `#F0F2F5` fill, no border, magnifier icon at 16px left padding.
- **Composer:** "What's on your mind, Name?" pill with `#F0F2F5` fill and 40px height. Click opens the Create post dialog.
- **Comment field:** 18px radius pill, `#F0F2F5` fill, 36px tall, emoji/camera/GIF icons inside on the right.

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  padding: 12px 16px;
}
```

A feed post card: header row (40px avatar, name 15/600, meta 13/400 with audience icon), body text, full-bleed media (no side padding, 1px inner border), reaction summary row, 1px divider, action row, then comments.

### Navigation

- **Top bar:** 56px tall, white, `0 1px 2px rgba(0,0,0,0.1)` shadow. Left: 40px logo plus search pill. Centre: 5 icon tabs, each 112px wide on wide screens. Right: 40px circular buttons for menu, Messenger, notifications, profile.
- **Active tab:** icon fills `#0866FF`, with a 3px blue bar along the bottom edge. Inactive icons are `#65676B` outlines.
- **Left rail:** 360px max width, rows 52px tall, 36px icons or avatars, 15px/600 labels, 8px radius hover fill.

### Tabs

Profile and Page tabs: 15px/600 labels in `#65676B`, 16px horizontal padding, 60px tall. Active tab text is `#0866FF` with a 3px blue underline. Hover gets a 6px-radius grey overlay.

### Badges

- **Notification count:** `#E41E3F` fill, white 12-13px/700 text, 19px tall pill, sits on the top-right of the icon button.
- **Online dot:** 10-12px `#31A24C` circle with a 2px white ring at the avatar's bottom-right.
- **Verified:** blue `#0866FF` checkmark badge after the name.

### Avatars

Always circular. Sizes: 24, 32, 36, 40, 60, 168 (profile page). Story rings use a 3-4px `#0866FF` ring with a white gap.

### Modals

```css
.dialog {
  width: 500px;
  max-width: calc(100vw - 32px);
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 12px 28px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.1);
}
.dialog-header { height: 60px; border-bottom: 1px solid #CED0D4; font: 700 20px/60px var(--brand-font-display); text-align: center; }
.scrim { background: rgba(244,244,244,0.8); }
```

Close button: 36px grey circle in the top-right corner. Dark mode scrim is `rgba(0,0,0,0.6)`.

### Lists and menus

Popover menus: white, 8px radius, popover shadow, 8px inner padding. Rows 36-52px tall with 8px radius hover fill `rgba(0,0,0,0.05)`. Icons in 36px grey circles on the left.

### Signature components

- **Reactions bar:** hover on Like shows a white pill with seven animated reaction emoji (Like, Love, Care, Haha, Wow, Sad, Angry), each 39px, scaling up on hover.
- **Stories tray:** 140 x 250px cards with 12px radius, gradient scrim at the bottom, avatar with blue ring top-left.
- **Messenger chat heads:** 48px circular avatars docked bottom-right, with 328px chat windows above them.

## 6. Layout & Spacing

- **Base unit:** 4px. Common steps: 4, 8, 12, 16, 20, 24, 32.
- **Desktop feed:** three columns. Left rail up to 360px, feed 590-680px centred, right rail up to 360px. Rails collapse below 1100px (right) and 900px (left).
- **Top nav:** fixed, 56px. Content starts 16px below it.
- **Card gaps:** 16px between feed cards. Card internal padding 12px vertical, 16px horizontal.
- **Profile page:** cover photo up to 940px wide with 8px bottom radius, 168px avatar overlapping the cover by 84px.
- **Breakpoints (approx.):** 700px (mobile web), 900px, 1100px, 1260px.
- **Mobile:** single column, full-bleed cards separated by 8px of `#CED0D4`/wash rather than rounded cards.

## 7. Depth, Elevation & Motion

| Level | Treatment |
| --- | --- |
| 0 | Page wash `#F0F2F5` |
| 1 | Card `#FFFFFF`, `0 1px 2px rgba(0,0,0,0.2)` |
| 2 | Nav bar, `0 1px 2px rgba(0,0,0,0.1)` |
| 3 | Menus, dialogs, `0 12px 28px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)` |

In dark mode, elevation comes from lighter surface colours (`#18191A` > `#242526` > `#3A3B3C`) instead of shadows.

### Motion

| Token | Duration | Easing |
| --- | --- | --- |
| Hover / press | 100ms | `ease-out` |
| Short move in / out | 280ms / 200ms | `cubic-bezier(0.17, 0.17, 0, 1)` |
| Enter / exit | 400ms / 350ms | in `cubic-bezier(0.14, 1, 0.34, 1)`, out `cubic-bezier(0.45, 0.1, 0.2, 1)` |
| Fade | 200ms / 150ms | linear |
| Quick move | 200ms | `cubic-bezier(0.1, 0.9, 0.2, 1)` |

Buttons scale to 0.96 on press. Reaction emoji bounce in with a small overshoot. Avoid long or decorative transitions.

## 8. Iconography & Imagery

- **Icons:** filled and outline pairs on a 20px or 24px grid with rounded joins. Outline is the default, filled marks the active tab. Inactive icon colour `#65676B`, active `#0866FF`.
- **Colour icons:** the left rail uses multicolour glyphs (Friends, Groups, Marketplace, Memories) with soft gradients. Keep those to navigation shortcuts.
- **Photography:** user content dominates. Show photos full-bleed inside cards with a 1px `rgba(0,0,0,0.1)` inner border. Multi-photo posts use 2-5 tile grids with 2px gaps.
- **Illustration:** flat, rounded people illustrations with skin-tone variety and the spectrum palette, used in empty states and onboarding.
- **Emoji and reactions:** the custom Facebook reaction set is part of the brand. Use it rather than system emoji for reactions.

## 9. Voice & Microcopy

Plain, warm and short. Addresses the user by first name where it helps. Avoids jargon and exclamation-heavy hype.

- Sentence case everywhere: "Create post", "See all", "Add to story".
- Second person: "What's on your mind, Sam?", "You have 3 new notifications".
- Social proof in meta lines: "Liked by Alex and 24 others", "3 mutual friends".
- Clear, unscary errors: "Something went wrong. Please try again."

Sample strings:

- "Log in" / "Forgot password?" / "Create new account"
- "Write a comment..."
- "Your post is now published."
- "Are you sure you want to leave this group?"
- "People you may know"

## 10. Do's and Don'ts

**Do**

- Use `#0866FF` as the only strong chrome colour.
- Put white cards with 8px radius on a `#F0F2F5` wash.
- Keep body text at 15px and set names in 600 weight.
- Use grey circular icon buttons (36-40px) for secondary actions.
- Use sentence case and short labels.
- Let photos and video run full-bleed inside cards.

**Don't**

- Don't use the old `#1877F2` for new brand work or the legacy square "f" logo.
- Don't add gradients to buttons, the logo or the nav.
- Don't use heavy shadows or large radii on cards (over 12px).
- Don't use spectrum colours for buttons or text.
- Don't set UI text in all caps or with wide tracking.
- Don't crop the "f" out of the circle or use it alone.

## 11. Agent Prompt Guide

Paste this when asking an agent to build a Facebook-style UI:

> Build a light-mode social feed in the style of Facebook. Page background `#F0F2F5`, white cards with 8px radius and a `0 1px 2px rgba(0,0,0,0.2)` shadow, 16px gaps between cards. Use a single brand blue `#0866FF` for primary buttons, links and the active tab (3px bottom bar). Primary text `#050505`, secondary text `#65676B` at 13px for timestamps, dividers `#CED0D4`. Use Inter for headings and Roboto or the system stack for body at 15px/1.33; names are 600 weight. Buttons are 36px tall, 6px radius, 15px/600 text; secondary buttons are `#E4E6EB`. Icon buttons are 40px grey circles. Avatars are circles. Top nav is 56px white with a soft shadow; the desktop layout has a left rail, a 680px centre feed and a right rail. Keep everything sentence case, compact and flat, with no gradients.

```css
:root {
  --brand-blue: #0866FF;
  --brand-blue-hover: #0759E0;
  --brand-blue-tint: #EBF5FF;
  --brand-wash: #F0F2F5;
  --brand-card: #FFFFFF;
  --brand-text: #050505;
  --brand-text-secondary: #65676B;
  --brand-text-disabled: #BCC0C4;
  --brand-divider: #CED0D4;
  --brand-button-secondary: #E4E6EB;
  --brand-hover-overlay: rgba(0, 0, 0, 0.05);
  --brand-positive: #31A24C;
  --brand-negative: #E41E3F;
  --brand-warning: #F7B928;
  --brand-font-display: "Facebook Sans", "Inter", system-ui, sans-serif;
  --brand-font-body: system-ui, -apple-system, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 8px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 1px 2px rgba(0, 0, 0, 0.2);
  --brand-shadow-popover: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  --brand-nav-height: 56px;
  --brand-feed-width: 680px;
  --brand-ease: cubic-bezier(0.17, 0.17, 0, 1);
}
@media (prefers-color-scheme: dark) {
  :root {
    --brand-wash: #18191A;
    --brand-card: #242526;
    --brand-text: #E4E6EB;
    --brand-text-secondary: #B0B3B8;
    --brand-divider: #3E4042;
    --brand-button-secondary: #3A3B3C;
    --brand-hover-overlay: rgba(255, 255, 255, 0.1);
  }
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Meta or Facebook.

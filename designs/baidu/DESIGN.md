---
name: Baidu
slug: baidu
url: https://baidu.com
category: AI
tagline: "Sparse white search page, a blue paw, a rounded search bar and a red-numbered hot list."
updated: 2026-11-16
appStoreId: 382201985
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Baidu Blue
    hex: "#2932E1"
    role: Paw mark, "du" in the logo, brand blue
  - name: Search Blue
    hex: "#4E6EF2"
    role: Search button, focus border, primary actions
  - name: Logo Red
    hex: "#E10601"
    role: '"Bai" in the wordmark'
  - name: Link Blue
    hex: "#315EFB"
    role: Links, selected tab text, hover titles
  - name: Hot Red
    hex: "#F73131"
    role: Hot search rank 1, "热" tags, alerts
  - name: Hot Orange
    hex: "#FF6600"
    role: Hot search rank 2, "新" tags
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Title Black
    hex: "#222222"
    role: Result titles, primary text
  - name: Body Grey
    hex: "#333333"
    role: Body copy, snippets
  - name: Meta Grey
    hex: "#626675"
    role: Secondary text, nav links
  - name: Muted Grey
    hex: "#9195A3"
    role: Captions, timestamps, placeholders
  - name: Border Grey
    hex: "#C4C7CE"
    role: Search field border at rest
  - name: Surface
    hex: "#F5F5F6"
    role: Hover fills, tags, quiet panels
  - name: Button Hover
    hex: "#4662D9"
    role: Search button hover
fonts:
  display:
    family: "PingFang SC"
    fallback: "Noto Sans SC"
    weights: [400, 500, 600]
  body:
    family: "Arial / PingFang SC / Microsoft YaHei"
    fallback: "Noto Sans SC"
    weights: [400, 500]
typeScale:
  - { role: Result Title, size: 18, weight: 400, lineHeight: 1.44, tracking: "0" }
  - { role: Search Input, size: 16, weight: 400, lineHeight: 1.0, tracking: "0" }
  - { role: Hot List Item, size: 16, weight: 400, lineHeight: 2.0, tracking: "0" }
  - { role: Section Title, size: 16, weight: 500, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.57, tracking: "0" }
  - { role: Nav Link, size: 13, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 10, lg: 12, pill: 9999 }
spacing: [4, 6, 8, 12, 16, 20, 24, 32]
shadows:
  - { name: Card, value: "0 2px 10px 0 rgba(0,0,0,0.1)" }
  - { name: Card Strong, value: "0 2px 10px 0 rgba(0,0,0,0.15)" }
  - { name: Blue Glow, value: "0 2px 12px 0 rgba(51,91,255,0.08)" }
  - { name: Popover, value: "0 6px 21px 0 rgba(30,31,36,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F6"
  text: "#222222"
  muted: "#626675"
  border: "#C4C7CE"
  accent: "#4E6EF2"
  accentText: "#FFFFFF"
  radius: 10
  buttonStyle: solid
---

# Baidu

## 1. Visual Theme & Atmosphere

Baidu's home page is a white page with one job: a search box. The logo ("Bai" in red, a blue paw holding "du", then 百度) floats above a wide, rounded search field and a blue "百度一下" button. Below it sits the 百度热搜 (Baidu Hot Search) list, a two-column ranked list with red and orange rank numbers. A thin row of service links runs along the top.

Recent versions add AI entry points (an AI search tab and an assistant panel), but the structure is still search box first, then trending topics, then not much else.

What makes it recognisable:

- **The search bar.** About 654px wide, 2px grey border, 10px left corners joined to a solid blue button with 10px right corners. On focus the border turns `#4E6EF2`.
- **Red, blue and paw.** The logo is the only red-and-blue moment; the rest of the page is white and greys.
- **Ranked hot list.** Numbers 1-3 in red, orange and amber, the rest grey, with small "热" (hot) and "新" (new) tags.
- **Dense Chinese text.** 13-16px type, tight rows, many links. Results pages are long lists of blue-hover titles with grey source lines.

Mood words: plain, functional, fast, familiar, utility.

## 2. Color Palette & Roles

Values from the live baidu.com CSS (read 2026-11-16) unless marked approximate.

| Name | Hex | Role |
|---|---|---|
| Baidu Blue | `#2932E1` (approximate, from logo artwork) | Paw mark, "du", app icon |
| Logo Red | `#E10601` (approximate) | "Bai" letters in the wordmark |
| Search Blue | `#4E6EF2` | `.s_btn` fill, focused `#kw` border, primary actions |
| Button Hover | `#4662D9` | `.s_btn:hover` |
| Bright Blue | `#315EFB` | Links, active tab, title hover |
| Blue Alt | `#335BFF` / `#1D4FFF` | AI search accents and new search box variant |
| Light Blue | `#EFF2FE` / `#F1F3FD` | Selected chips, AI panels |
| Hot Red | `#F73131` / `#FE2D46` (approximate) | Rank 1, "热" tag |
| Hot Orange | `#FF6600` | Rank 2, "新" tag |
| Hot Amber | `#FAA90E` (approximate) | Rank 3 |
| Title Black | `#222222` | Result titles (`.c-color-t`) |
| Body | `#333333` | Body text |
| Meta | `#626675` | Nav links, secondary text |
| Muted | `#9195A3` | Captions, timestamps, rank 4+ |
| Placeholder | `#AAAAAA` | Search placeholder |
| Border | `#C4C7CE` | Search field at rest |
| Border Hover | `#A7AAB5` | Search field hover |
| Divider | `#D7D9E0` / `#DBDCE0` | Dividers |
| Surface | `#F5F5F6` | Hover rows, quiet fills |
| Night | `#1E1F24` / `#000311` | Dark mode surfaces, tooltips |

### Semantic colors

| State | Color | Use |
|---|---|---|
| Hot | `#F73131` | Trending tags, top rank |
| New | `#FF6600` | Newly trending |
| Link visited | `#771CAA` (approximate) | Visited result titles on results pages |
| Source green | `#008000` style greens (legacy, approximate) | URLs on older results layouts |

### Dark mode

Baidu has a `.darkmode` class: page near `#000311`, titles `#A8ACAD`, surfaces `#1E1F24`. Light is the default and the brand reference.

## 3. Typography

**Families:** no custom brand font on the web. Latin text uses **Arial**; Chinese falls back to **PingFang SC** on Apple devices and **Microsoft YaHei** (微软雅黑) on Windows. The base rule is `font-family: Arial, "PingFang SC", "Microsoft YaHei", sans-serif`.

**Fallback:** **Noto Sans SC** covers both Chinese and Latin and is on Google Fonts.

The root is set to `html { font-size: 100px }` and `body { font-size: 14px }` so `.14rem` equals 14px. Keep that in mind if copying rem values.

### Scale (approximate)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Result title | 18px | 400 | 26px |
| Search input | 16px | 400 | input 44px tall |
| Hot list item | 16px | 400 | 32-34px rows |
| Section title (百度热搜) | 16px | 500 | 24px |
| Body / snippet | 14px | 400 | 22px |
| Top nav links | 13px | 400 | 20px |
| Caption, footer | 12px | 400 | 18px |

### Rules

- Chinese text needs no letter-spacing; leave tracking at 0.
- Use regular weight for titles; Baidu rarely goes bold except for highlighted keywords inside snippets, which are red `#F73131` on results pages (approximate).
- Numerals in the hot list use a bold or italic numeric style; keep them tabular and right aligned.

## 4. Logo & Brand Mark

The full logo is "Bai" in red, a blue bear-paw symbol with white "du" knocked out, then the characters 百度 in blue. The paw alone is the symbol: favicon, app icon and social avatar.

- **Color versions:** red/blue on white (primary); all white on blue; single-color blue.
- **Paw symbol:** solid `#2932E1` with "du" knocked out. The included `logo.svg` is the paw symbol only; the full wordmark on baidu.com is served as a raster image.
- **Clear space:** at least the width of one toe pad around the paw.
- **Minimum size:** 16px for the paw; about 100px wide for the full logo.

Misuse:

- Do not swap the red and blue.
- Do not outline the paw or add gradients.
- Do not place the color logo on mid-blue backgrounds.
- Do not set "Baidu" in Arial as a replacement for the wordmark.

## 5. Components

### Search box (signature)

```css
.search-input {
  width: 512px; height: 16px; padding: 12px 16px;
  font: 16px Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #222; background: #fff;
  border: 2px solid #C4C7CE; border-right: 0;
  border-radius: 10px 0 0 10px;
  outline: 0; box-shadow: none;
}
.search-input:hover { border-color: #A7AAB5; }
.search-input:focus { border-color: #4E6EF2; }
.search-button {
  width: 108px; height: 44px;
  background: #4E6EF2; color: #fff;
  font-size: 17px; border: 0;
  border-radius: 0 10px 10px 0;
}
.search-button:hover { background: #4662D9; }
```

- Placeholder `#AAAAAA` 13-16px. Camera (image search) and microphone icons sit inside the right edge of the input.
- A dropdown of suggestions opens below with a white panel, 1px `#4E6EF2` border continuing from the input, 10px bottom corners and 36px rows.

### Buttons

| Variant | Background | Text | Radius |
|---|---|---|---|
| Primary | `#4E6EF2` | white | 10px (6-12px in panels) |
| Secondary | `#F5F5F6` | `#222` | 6px |
| Text | transparent | `#315EFB` | 0 |
| Pill (AI chips) | `#EFF2FE` | `#4E6EF2` | 9999px |

Hover darkens primary to `#4662D9`; secondary to `#EBECEF` (approximate).

### Top nav

A thin row at the top: left links (新闻, hao123, 地图, 贴吧, 视频, 图片, 网盘, 更多) at 13px `#222` with 21px gaps; right side has 设置 and a blue 登录 button (`#4E6EF2`, radius 6px, white 13px, padding 4px 10px, approximate). No background bar; it sits on white.

### Hot search list (百度热搜)

- Two columns, each item 34px tall, 16px text, max width about 334px with ellipsis.
- Rank numbers: 1 `#FE2D46`, 2 `#FF6600`, 3 `#FAA90E`, 4+ `#9195A3` (approximate), 18px italic or bold.
- Small square tags after the title: "热" red fill, "新" orange fill, white 12px text, radius 4px, 16 x 16px.
- Header row: "百度热搜" title with a chevron, "换一换" (refresh) link at right in `#626675`.

### Result card (results page)

- Title 18px `#222`, underlined on hover and colored `#315EFB`.
- Snippet 13-14px `#333`, line height 22px, matched keywords in red.
- Source row: favicon 16px, site name and date in `#9195A3`.
- Rich cards (百科, video, images) get a white panel with radius 12px and shadow `0 2px 10px rgba(0,0,0,0.1)`.

### Tabs

Results tabs (网页, 图片, 资讯, 视频, 笔记, 地图, 贴吧) at 14px `#626675`, active `#222` with a 2-3px `#4E6EF2` underline (approximate).

### Panels and popovers

White, radius 12px, shadow `0 2px 10px 0 rgba(0,0,0,0.1)`. Dark tooltips use `#1E1F24` with white 12px text and a shadow `0 6px 21px rgba(30,31,36,0.2)`.

## 6. Layout & Spacing

- **Home:** centered single column. Logo about 270px wide sits above the search box; the box is about 654px including button. Hot list below at the same width. Minimum page width 1250px on desktop.
- **Results:** left-aligned column about 560-640px wide starting about 150px from the left, with a right rail (about 368px) for related searches and knowledge cards.
- **Spacing:** small steps: 4, 6, 8, 12, 16, 20, 24px. Rows are tight.
- **Gutters:** 16px on mobile; the mobile site (m.baidu.com) is a separate layout with full-width cards and 12px corners.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 2px 10px 0 rgba(0,0,0,0.1)` |
| Card strong | `0 2px 10px 0 rgba(0,0,0,0.15)` |
| Blue glow | `0 2px 12px 0 rgba(51,91,255,0.08)` |
| Popover | `0 6px 21px 0 rgba(30,31,36,0.2)` |

- Search box: no shadow at rest; border change only.
- Motion is minimal: 160ms ease on margins and color, dropdowns appear instantly. Hot list refresh swaps content without animation.

## 8. Iconography & Imagery

- **Icons:** an icon font ("cos-icon") with simple outline and filled glyphs at 16-20px, in `#626675` or white on blue.
- **Camera and mic:** grey line icons in the search field.
- **Doodles:** on holidays the logo is replaced by a themed illustration, in the same spot and size.
- **Images:** results pages use thumbnails with 8-12px corners. The home page itself has almost no imagery unless the user sets a skin (background photo), in which case nav text turns white.

## 9. Voice & Microcopy

Short, functional Chinese. Labels are two to four characters.

- Search button: "百度一下" ("Baidu it").
- Hot list: "百度热搜", "换一换".
- Nav: "新闻", "地图", "贴吧", "图片", "登录", "设置".
- Empty or error: short apology plus a retry link.
- AI entries are labeled plainly, for example "AI搜索".

## 10. Do's and Don'ts

**Do**

- Center the search box and give it a 2px grey border with 10px outer corners, joined to a blue button.
- Keep the page white with greys `#222`, `#626675`, `#9195A3`.
- Use `#4E6EF2` for the search button and focus state, `#315EFB` for links.
- Use red/orange/amber rank numbers for top trending items only.
- Use Arial with PingFang SC / Microsoft YaHei, at 13-18px.

**Don't**

- Don't add hero banners or large photos to the home page.
- Don't use the logo red for buttons.
- Don't round the search box into a full pill.
- Don't use bold headings or large display type.
- Don't use heavy shadows on the search box.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Baidu search. White page, centered layout. A small top row of 13px `#222` links on the left and a blue "登录" button on the right. In the middle: a logo slot about 270px wide, then a search bar about 654px wide made of an input (`2px solid #C4C7CE`, radius `10px 0 0 10px`, 44px tall, 16px text, focus border `#4E6EF2`) joined to a 108px solid `#4E6EF2` button (radius `0 10px 10px 0`, hover `#4662D9`, white "百度一下"). Below it, a two-column ranked trending list with 34px rows, 16px titles, rank numbers 1-3 in `#FE2D46`, `#FF6600`, `#FAA90E` and the rest `#9195A3`, plus small square "热" / "新" tags. Font: `Arial, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif`. Panels are white with 12px radius and shadow `0 2px 10px rgba(0,0,0,0.1)`. Keep it sparse, dense in text, no big images.

```css
:root {
  --brand-blue: #2932E1;
  --brand-red: #E10601;
  --brand-search: #4E6EF2;
  --brand-search-hover: #4662D9;
  --brand-link: #315EFB;
  --brand-blue-light: #EFF2FE;
  --brand-hot-1: #FE2D46;
  --brand-hot-2: #FF6600;
  --brand-hot-3: #FAA90E;
  --brand-bg: #FFFFFF;
  --brand-surface: #F5F5F6;
  --brand-text-title: #222222;
  --brand-text: #333333;
  --brand-text-meta: #626675;
  --brand-text-muted: #9195A3;
  --brand-placeholder: #AAAAAA;
  --brand-border: #C4C7CE;
  --brand-border-hover: #A7AAB5;
  --brand-divider: #D7D9E0;
  --brand-night: #1E1F24;
  --brand-font: Arial, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-search: 10px;
  --brand-radius-card: 12px;
  --brand-shadow-card: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  --brand-shadow-glow: 0 2px 12px 0 rgba(51, 91, 255, 0.08);
  --brand-shadow-popover: 0 6px 21px 0 rgba(30, 31, 36, 0.2);
  --brand-duration: 160ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Baidu.

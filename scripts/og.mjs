// Renders social preview images with local Chrome:
//   public/og.png            the site card
//   public/og/<slug>.png     one per design
// Run: node scripts/og.mjs [slug ...]   (needs Google Chrome installed)
// With slugs, only those design cards are rendered and the site card is left alone.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { chromium } from "playwright-core";
import rough from "roughjs";
import { execSync } from "node:child_process";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(root, "designs");
const dots = fs.readFileSync(path.join(root, "public/assets/logo-color.svg"), "utf8");
const iconHtml = (slug) => {
  const png = path.join(dir, slug, "icon.png");
  if (fs.existsSync(png)) return `<img src="data:image/png;base64,${fs.readFileSync(png).toString("base64")}" style="display:block;width:100%;height:100%" />`;
  return fs.readFileSync(path.join(dir, slug, "icon.svg"), "utf8");
};
// Only brands that are committed (or named on the command line) count, so in-progress folders stay out.
const tracked = new Set(execSync("git ls-files designs", { cwd: root }).toString().split("\n").map((f) => f.split("/")[1]).filter(Boolean));
const designs = fs
  .readdirSync(dir)
  .filter((s) => tracked.has(s) || process.argv.slice(2).includes(s))
  .filter((s) => !process.argv.slice(2).length || process.argv.slice(2).includes(s))
  .filter((s) => fs.existsSync(path.join(dir, s, "icon.svg")) && fs.existsSync(path.join(dir, s, "DESIGN.md")))
  .sort()
  .map((slug) => {
    let data;
    try {
      data = matter(fs.readFileSync(path.join(dir, slug, "DESIGN.md"), "utf8")).data;
    } catch {
      return null;
    }
    return { slug, name: data.name, tagline: data.tagline, colors: (data.colors ?? []).slice(0, 6).map((c) => c.hex), icon: iconHtml(slug) };
  })
  .filter(Boolean);

const frame = `
  <link rel="stylesheet" href="https://use.typekit.net/dzz3gsh.css" />
  <link rel="stylesheet" href="https://use.typekit.net/pxn1uhe.css" />
  <style>
    * { box-sizing: border-box; margin: 0; }
    body { width: 1200px; height: 630px; background: #090200; color: #FFEFEA; font-family: roca, serif; overflow: hidden; position: relative; }
    .ascii { position: absolute; inset: 0; font: 13px/16px ui-monospace, Menlo, monospace; color: #FF9670; opacity: .05; white-space: pre; overflow: hidden; }
    .b { position: absolute; z-index: 5; width: 46px; height: 46px; border-color: rgba(255,239,234,.7); border-style: solid; border-width: 0; }
    .tl { left: 28px; top: 28px; border-top-width: 3px; border-left-width: 3px; }
    .tr { right: 28px; top: 28px; border-top-width: 3px; border-right-width: 3px; }
    .bl { left: 28px; bottom: 28px; border-bottom-width: 3px; border-left-width: 3px; }
    .br { right: 28px; bottom: 28px; border-bottom-width: 3px; border-right-width: 3px; }
    .rec { position: absolute; z-index: 5; top: 40px; right: 92px; font: 600 16px ui-monospace, Menlo, monospace; letter-spacing: .12em; color: rgba(255,239,234,.75); display: flex; gap: 10px; align-items: center; }
    .rec i { width: 13px; height: 13px; border-radius: 50%; background: #F25672; box-shadow: 0 0 14px #F25672; display: block; }
    .meta { position: absolute; z-index: 5; bottom: 40px; right: 92px; font: 15px ui-monospace, Menlo, monospace; color: rgba(255,239,234,.45); letter-spacing: .08em; }
    .icon { overflow: hidden; border-radius: 22.5%; box-shadow: 0 14px 30px rgba(0,0,0,.55); outline: 1px solid rgba(255,255,255,.08); }
    .icon svg { display: block; width: 100%; height: 100%; }
    .title { font-family: broadacre-medium-1, sans-serif; letter-spacing: .01em; }
  </style>`;
const ascii = Array.from({ length: 42 }, (_, r) =>
  Array.from({ length: 140 }, (_, c) => " .:+x=#8"[(r * 7 + c * 3 + ((r * c) % 11)) % 8]).join("")
).join("\n");
const rg = rough.generator();
const bracketPaths = rg
  .toPaths(rg.linearPath([[3, 45], [4, 4], [45, 3]], { seed: 11, roughness: 1.3, bowing: 1.2, stroke: "#FFEFEA", strokeWidth: 4.5 }))
  .map((p) => `<path d="${p.d}" stroke="rgba(255,239,234,.85)" stroke-width="${p.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`)
  .join("");
const bracket = (pos, flip) => `<svg viewBox="0 0 48 48" style="position:absolute;z-index:5;width:52px;height:52px;overflow:visible;${pos};transform:${flip};filter:drop-shadow(0 0 3px #090200) drop-shadow(0 0 8px #090200)">${bracketPaths}</svg>`;
const chrome = `<div class="ascii">${ascii}</div>${bracket("left:28px;top:28px", "none")}${bracket("right:28px;top:28px", "scale(-1,1)")}${bracket("left:28px;bottom:28px", "scale(1,-1)")}${bracket("right:28px;bottom:28px", "scale(-1,-1)")}`;

const siteHtml = () => {
  const wall = designs.concat(designs, designs).slice(0, 30);
  return `<!doctype html><html><head>${frame}</head><body>${chrome}
    <div style="position:absolute;left:84px;top:120px;width:600px;z-index:4">
    <div style="height:46px;width:184px">${dots.replace("<svg", '<svg style="height:46px;width:auto"')}</div>
    <div class="title" style="font-size:104px;line-height:1;margin-top:34px;white-space:nowrap">brands.md</div>
    <div style="font-size:34px;font-style:italic;color:#FF9670;margin-top:22px">great artists steal to learn.</div>
    <div style="font:20px ui-monospace,Menlo,monospace;color:rgba(255,239,234,.5);margin-top:40px">100+ brands · brands.nickharty.com</div>
  </div>
  <div style="position:absolute;left:730px;top:-170px;width:720px;transform:rotate(-14deg);display:grid;grid-template-columns:repeat(5,112px);gap:26px">
    ${wall.map((d) => `<div class="icon" style="width:112px;height:112px">${d.icon}</div>`).join("")}
  </div>
  <div style="position:absolute;left:640px;top:0;bottom:0;width:220px;z-index:3;background:linear-gradient(90deg,#090200 20%,transparent)"></div>
  </body></html>`;
};

const designHtml = (d) => `<!doctype html><html><head>${frame}</head><body>${chrome}
  <div style="position:absolute;left:92px;top:92px;display:flex;align-items:center;gap:16px">
    <div style="height:30px;width:120px">${dots.replace("<svg", '<svg style="height:30px;width:auto"')}</div>
    <span class="title" style="font-size:26px">brands.md</span>
  </div>
  <div style="position:absolute;left:92px;top:200px;display:flex;align-items:center;gap:48px">
    <div class="icon" style="width:230px;height:230px">${d.icon}</div>
    <div style="max-width:700px">
      <div class="title" style="font-size:${d.name.length > 16 ? 64 : 88}px;line-height:1.02">${d.name}</div>
      <div style="font-size:28px;color:rgba(255,239,234,.6);margin-top:18px;line-height:1.3">${d.tagline}</div>
      <div style="display:flex;gap:10px;margin-top:28px">${d.colors.map((c) => `<span style="width:30px;height:30px;border-radius:50%;background:${c};outline:1px solid rgba(255,255,255,.2)"></span>`).join("")}</div>
    </div>
  </div>
  <div class="meta">brands.nickharty.com/${d.slug}</div>
  </body></html>`;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const shoot = async (html, out) => {
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out });
};
fs.mkdirSync(path.join(root, "public/og"), { recursive: true });
const only = process.argv.slice(2);
if (!only.length) await shoot(siteHtml(), path.join(root, "public/og.png"));
for (const d of designs.filter((d) => !only.length || only.includes(d.slug))) await shoot(designHtml(d), path.join(root, "public/og", `${d.slug}.png`));
await browser.close();
console.log(`og.png + ${designs.length} design cards`);

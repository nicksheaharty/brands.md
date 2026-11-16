// Copies designs/<slug>/{DESIGN.md,logo.svg} into public/designs so they can be
// downloaded as static files, and writes public/designs/index.json.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const src = path.join(root, "designs");
const out = path.join(root, "public", "designs");
const site = "https://design.nickharty.com";

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const index = [];
for (const slug of fs.readdirSync(src).sort()) {
  const dir = path.join(src, slug);
  const md = path.join(dir, "DESIGN.md");
  if (!fs.statSync(dir).isDirectory() || !fs.existsSync(md)) continue;
  fs.mkdirSync(path.join(out, slug));
  for (const file of ["DESIGN.md", "logo.svg", "icon.svg"]) {
    if (fs.existsSync(path.join(dir, file))) fs.copyFileSync(path.join(dir, file), path.join(out, slug, file));
  }
  const { data } = matter(fs.readFileSync(md, "utf8"));
  index.push({
    name: data.name,
    slug,
    category: data.category,
    tagline: data.tagline,
    url: data.url,
    design: `${site}/designs/${slug}/DESIGN.md`,
    logo: `${site}/designs/${slug}/logo.svg`,
    icon: `${site}/designs/${slug}/icon.svg`,
    page: `${site}/${slug}`,
  });
}
fs.writeFileSync(path.join(out, "index.json"), JSON.stringify(index, null, 2));
console.log(`synced ${index.length} designs`);

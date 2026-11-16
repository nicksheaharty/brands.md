// Copies designs/<slug>/{DESIGN.md,logo.svg} into public/designs so they can be
// downloaded as static files, and writes public/designs/index.json.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const src = path.join(root, "designs");
const out = path.join(root, "public", "designs");
const site = "https://brands.nickharty.com";

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const index = [];
for (const slug of fs.readdirSync(src).sort()) {
  const dir = path.join(src, slug);
  const md = path.join(dir, "DESIGN.md");
  if (!fs.statSync(dir).isDirectory() || !fs.existsSync(md)) continue;
  fs.mkdirSync(path.join(out, slug));
  for (const file of ["DESIGN.md", "logo.svg", "icon.svg", "icon.png"]) {
    if (fs.existsSync(path.join(dir, file))) fs.copyFileSync(path.join(dir, file), path.join(out, slug, file));
  }
  // Grid/page icons are served as small WebP (icon.png stays as the full download).
  if (fs.existsSync(path.join(dir, "icon.png"))) {
    await sharp(path.join(dir, "icon.png")).resize(192, 192).webp({ quality: 86 }).toFile(path.join(out, slug, "icon.webp"));
  }
  let data;
  try {
    data = matter(fs.readFileSync(md, "utf8")).data;
  } catch {
    console.warn(`skipping ${slug}: bad frontmatter`);
    continue;
  }
  index.push({
    name: data.name,
    slug,
    category: data.category,
    tagline: data.tagline,
    url: data.url,
    design: `${site}/designs/${slug}/DESIGN.md`,
    logo: `${site}/designs/${slug}/logo.svg`,
    icon: `${site}/designs/${slug}/${fs.existsSync(path.join(dir, "icon.png")) ? "icon.png" : "icon.svg"}`,
    page: `${site}/${slug}`,
  });
}
fs.writeFileSync(path.join(out, "index.json"), JSON.stringify(index, null, 2));

// llms.txt: a plain index of every file, for AI tools and crawlers.
const llms = [
  "# brands.md",
  "",
  `> Free DESIGN.md design-system files for ${index.length} well-known brands (colors, typography, components, layout, motion, voice, logo and app icon), written for AI coding agents and designers. Unofficial references; not affiliated with the brands.`,
  "",
  `Download any file with: curl -o DESIGN.md ${site}/designs/<slug>/DESIGN.md`,
  "",
  "## Designs",
  "",
  ...index.map((d) => `- [${d.name}](${d.design}): ${d.tagline}`),
  "",
].join("\n");
fs.writeFileSync(path.join(root, "public", "llms.txt"), llms);
console.log(`synced ${index.length} designs`);

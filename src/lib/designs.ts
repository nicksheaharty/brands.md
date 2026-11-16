import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Color = { name: string; hex: string; role?: string };
export type Font = { family: string; fallback: string; weights?: number[] };
export type TypeRow = { role: string; size: number; weight: number; lineHeight?: number | string; tracking?: string };
export type Preview = {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  accentText: string;
  radius: number;
  buttonStyle?: "solid" | "pill" | "outline";
};

export type Design = {
  name: string;
  slug: string;
  url: string;
  category: string;
  tagline: string;
  updated: string;
  logoBackground: string;
  theme: "dark" | "light";
  colors: Color[];
  fonts: { display: Font; body: Font; mono?: Font };
  typeScale: TypeRow[];
  radii: Record<string, number>;
  spacing: number[];
  shadows: { name: string; value: string }[];
  preview: Preview;
  body: string;
  raw: string;
  logo: string;
  lines: number;
};

const DIR = path.join(process.cwd(), "designs");

function load(slug: string): Design | null {
  const file = path.join(DIR, slug, "DESIGN.md");
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const logoPath = path.join(DIR, slug, "logo.svg");
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated ?? "");
  return {
    ...(data as Omit<Design, "body" | "raw" | "logo" | "lines" | "updated">),
    slug,
    updated,
    colors: data.colors ?? [],
    typeScale: data.typeScale ?? [],
    radii: data.radii ?? {},
    spacing: data.spacing ?? [],
    shadows: data.shadows ?? [],
    body: content,
    raw,
    logo: fs.existsSync(logoPath) ? fs.readFileSync(logoPath, "utf8") : "",
    lines: raw.split("\n").length,
  };
}

let cache: Design[] | null = null;

export function getDesigns(): Design[] {
  if (cache) return cache;
  if (!fs.existsSync(DIR)) return [];
  cache = fs
    .readdirSync(DIR)
    .filter((s) => fs.existsSync(path.join(DIR, s, "DESIGN.md")))
    .map(load)
    .filter((d): d is Design => d !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
  return cache;
}

export function getDesign(slug: string) {
  return getDesigns().find((d) => d.slug === slug) ?? null;
}

/** Light summary passed to client components (no markdown body). */
export function summary(d: Design) {
  return {
    name: d.name,
    slug: d.slug,
    category: d.category,
    tagline: d.tagline,
    logoBackground: d.logoBackground,
    theme: d.theme,
    colors: d.colors.slice(0, 6).map((c) => c.hex),
    lines: d.lines,
    display: d.fonts?.display?.family ?? "",
  };
}
export type DesignSummary = ReturnType<typeof summary>;

export function googleFontsHref(families: string[]) {
  const uniq = Array.from(new Set(families.filter(Boolean)));
  if (!uniq.length) return null;
  const q = uniq.map((f) => `family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@400;500;600;700`).join("&");
  return `https://fonts.googleapis.com/css2?${q}&display=swap`;
}

export { REPO, SITE } from "./site";

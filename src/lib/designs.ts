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
  /** Optional label for the home grid when the full name is long. */
  shortName?: string;
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
  icon: string;
  /** "icon.png" when an official App Store icon exists, otherwise "icon.svg". */
  iconFile: string;
  lines: number;
};

const DIR = path.join(process.cwd(), "designs");

/** Official App Store icon (scripts/fetch-app-icons.mjs) when present, else the vector icon. Returned as inline HTML. */
function iconFor(slug: string) {
  if (fs.existsSync(path.join(DIR, slug, "icon.png"))) {
    return { icon: `<img src="/designs/${slug}/icon.png" alt="" loading="lazy" decoding="async" />`, iconFile: "icon.png" };
  }
  const svg = path.join(DIR, slug, "icon.svg");
  return { icon: fs.existsSync(svg) ? fs.readFileSync(svg, "utf8") : "", iconFile: "icon.svg" };
}

function load(slug: string): Design | null {
  const file = path.join(DIR, slug, "DESIGN.md");
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const logoPath = path.join(DIR, slug, "logo.svg");
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated ?? "");
  return {
    ...(data as Omit<Design, "body" | "raw" | "logo" | "icon" | "iconFile" | "lines" | "updated">),
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
    ...iconFor(slug),
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

export { REPO, SITE } from "./site";

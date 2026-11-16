import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { getDesign, getDesigns } from "@/lib/designs";
import { renderMarkdown } from "@/lib/markdown";
import { SITE } from "@/lib/site";
import { AppIcon } from "@/components/AppIcon";
import { Curl } from "@/components/Curl";
import { Swatches } from "@/components/Swatches";
import { ClaudePrompt } from "@/components/ClaudePrompt";

export const dynamicParams = false;

function DownloadLabel({ name }: { name: string }) {
  return (
    <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-lg bg-black/70 px-2.5 py-1 font-mono text-[11px] text-surface/80 backdrop-blur group-hover:text-primary transition-colors">
      <DownloadSimple weight="bold" className="w-3 h-3" /> {name}
    </span>
  );
}

export function generateStaticParams() {
  return getDesigns().map((d) => ({ slug: d.slug }));
}

function describe(d: NonNullable<ReturnType<typeof getDesign>>) {
  const hexes = d.colors.slice(0, 3).map((c) => c.hex.toUpperCase()).join(", ");
  const font = d.fonts?.display?.family;
  const text = `${d.name} DESIGN.md: brand colors (${hexes}), ${font ? `${font} type, ` : ""}components, logo and app icon. ${d.tagline}`;
  return text.length > 300 ? text.slice(0, 297) + "..." : text;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const d = getDesign((await params).slug);
  if (!d) return {};
  const title = `${d.name} design system: colors, fonts and logo`;
  const description = describe(d);
  const images = [{ url: `/og/${d.slug}.png`, width: 1200, height: 630, type: "image/png", alt: `${d.name} on Open-Sourced Brands` }];
  return {
    title,
    description,
    keywords: [`${d.name} design system`, `${d.name} brand colors`, `${d.name} font`, `${d.name} logo`, `${d.name} DESIGN.md`, "DESIGN.md"],
    alternates: { canonical: `/${d.slug}` },
    openGraph: { type: "article", siteName: "Open-Sourced Brands", title: `${d.name} DESIGN.md`, description, url: `/${d.slug}`, images },
    twitter: { card: "summary_large_image", title: `${d.name} DESIGN.md`, description, images },
  };
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDesign(slug);
  if (!d) notFound();
  const { html } = renderMarkdown(d.body);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: `${d.name} DESIGN.md`,
      description: describe(d),
      url: `${SITE}/${d.slug}`,
      image: `${SITE}/og/${d.slug}.png`,
      dateModified: d.updated,
      inLanguage: "en",
      license: "https://creativecommons.org/licenses/by/4.0/",
      author: { "@type": "Person", name: "Nick Harty", url: "https://nickharty.com" },
      about: { "@type": "Organization", name: d.name, url: d.url, logo: `${SITE}/designs/${d.slug}/logo.svg` },
      encoding: { "@type": "MediaObject", contentUrl: `${SITE}/designs/${d.slug}/DESIGN.md`, encodingFormat: "text/markdown" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Open-Sourced Brands", item: SITE },
        { "@type": "ListItem", position: 2, name: d.name, item: `${SITE}/${d.slug}` },
      ],
    },
  ];

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="h-full w-full overflow-y-auto overscroll-contain scrollbar-hide px-4 md:px-12 pt-2 pb-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-surface/40 hover:text-primary transition-colors">
          <ArrowLeft weight="bold" className="w-4 h-4" /> all designs
        </Link>

        <header className="mt-8 flex items-center gap-5 md:gap-6">
          <AppIcon src={d.icon} size={88} className="shrink-0" eager />
          <div className="min-w-0">
            <h1 className="font-title text-3xl md:text-5xl text-surface leading-tight">{d.name}</h1>
            <a
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:text-surface transition-colors"
            >
              {d.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        <div className="mt-8 flex flex-col gap-3">
          <Curl slug={d.slug} />
          <div className="flex flex-wrap gap-3">
            <a href={`/designs/${d.slug}/DESIGN.md`} download={`${d.slug}-DESIGN.md`} className="btn btn-primary btn-sm">
              <DownloadSimple weight="bold" className="w-4 h-4" /> DESIGN.md
            </a>
            <ClaudePrompt name={d.name} slug={d.slug} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-3">
          <a
            href={`/designs/${d.slug}/logo.svg`}
            download={`${d.slug}-logo.svg`}
            className="group relative flex h-36 md:h-44 items-center justify-center overflow-hidden rounded-2xl ring-1 ring-white/10 hover:ring-primary/60 transition"
            style={{ background: d.logoBackground }}
            aria-label={`Download the ${d.name} logo`}
          >
            <span
              className="flex h-full w-full items-center justify-center px-[14%] py-[12%] [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:w-auto"
              dangerouslySetInnerHTML={{ __html: d.logo }}
            />
            <DownloadLabel name="logo.svg" />
          </a>
          <a
            href={`/designs/${d.slug}/${d.iconFile}`}
            download={`${d.slug}-${d.iconFile}`}
            className="group relative flex h-36 md:h-44 items-center justify-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-primary/60 transition"
            aria-label={`Download the ${d.name} app icon`}
          >
            <AppIcon src={d.icon} size={88} eager className="!w-16 !h-16 md:!w-[88px] md:!h-[88px] transition-transform group-hover:-translate-y-1" />
            <DownloadLabel name={d.iconFile} />
          </a>
        </div>

        <div className="mt-12">
          <Swatches colors={d.colors} />
        </div>

        <article className="prose-design mt-12 [&>h2:first-of-type]:mt-0 [&>h2:first-of-type]:border-0 [&>h2:first-of-type]:pt-0" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
    </>
  );
}

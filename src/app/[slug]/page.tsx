import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { getDesign, getDesigns } from "@/lib/designs";
import { renderMarkdown } from "@/lib/markdown";
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const d = getDesign((await params).slug);
  if (!d) return {};
  const title = `${d.name} DESIGN.md`;
  const images = [{ url: `/og/${d.slug}.png`, width: 1200, height: 630, alt: `${d.name} on DESIGN.MD` }];
  return {
    title,
    description: d.tagline,
    alternates: { canonical: `/${d.slug}` },
    openGraph: { title, description: d.tagline, url: `/${d.slug}`, images },
    twitter: { card: "summary_large_image", title, description: d.tagline, images },
  };
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDesign(slug);
  if (!d) notFound();
  const { html } = renderMarkdown(d.body);

  return (
    <div className="h-full w-full overflow-y-auto overscroll-contain scrollbar-hide px-4 md:px-12 pt-2 pb-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-surface/40 hover:text-primary transition-colors">
          <ArrowLeft weight="bold" className="w-4 h-4" /> all designs
        </Link>

        <header className="mt-8 flex items-center gap-5 md:gap-6">
          <AppIcon svg={d.icon} size={88} className="shrink-0" />
          <div className="min-w-0">
            <h1 className="font-title text-3xl md:text-5xl text-surface leading-tight">{d.name}</h1>
            <p className="mt-1 text-surface/50 font-body lowercase">{d.tagline}</p>
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
            href={`/designs/${d.slug}/icon.svg`}
            download={`${d.slug}-icon.svg`}
            className="group relative flex h-36 md:h-44 items-center justify-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-primary/60 transition"
            aria-label={`Download the ${d.name} app icon`}
          >
            <AppIcon svg={d.icon} size={88} className="!w-16 !h-16 md:!w-[88px] md:!h-[88px] transition-transform group-hover:-translate-y-1" />
            <DownloadLabel name="icon.svg" />
          </a>
        </div>

        <div className="mt-12">
          <Swatches colors={d.colors} />
        </div>

        <article className="prose-design mt-12 [&>h2:first-of-type]:mt-0 [&>h2:first-of-type]:border-0 [&>h2:first-of-type]:pt-0" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { getDesign, getDesigns } from "@/lib/designs";
import { renderMarkdown } from "@/lib/markdown";
import { AppIcon } from "@/components/AppIcon";
import { Curl } from "@/components/Curl";
import { Swatches } from "@/components/Swatches";

export const dynamicParams = false;

export function generateStaticParams() {
  return getDesigns().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const d = getDesign((await params).slug);
  if (!d) return {};
  return { title: `${d.name} DESIGN.md`, description: d.tagline, alternates: { canonical: `/${d.slug}` } };
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDesign(slug);
  if (!d) notFound();
  const { html } = renderMarkdown(d.body);

  return (
    <div className="w-full px-6 md:px-12 pt-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-surface/40 hover:text-primary transition-colors">
          <ArrowLeft weight="bold" className="w-4 h-4" /> all designs
        </Link>

        <header className="mt-8 flex items-center gap-5 md:gap-6">
          <AppIcon svg={d.icon} size={88} className="shrink-0" />
          <div className="min-w-0">
            <h1 className="font-title text-3xl md:text-5xl text-surface leading-tight">{d.name}</h1>
            <p className="mt-1 text-surface/50 font-body lowercase">{d.tagline}</p>
          </div>
        </header>

        <div className="mt-8 flex flex-col gap-3">
          <Curl slug={d.slug} />
          <div className="flex flex-wrap gap-3">
            <a href={`/designs/${d.slug}/DESIGN.md`} download={`${d.slug}-DESIGN.md`} className="btn btn-primary btn-sm">
              <DownloadSimple weight="bold" className="w-4 h-4" /> DESIGN.md
            </a>
            <a href={`/designs/${d.slug}/logo.svg`} download={`${d.slug}-logo.svg`} className="btn btn-secondary btn-sm">
              logo.svg
            </a>
            <a href={`/designs/${d.slug}/icon.svg`} download={`${d.slug}-icon.svg`} className="btn btn-secondary btn-sm">
              icon.svg
            </a>
          </div>
        </div>

        <div className="mt-12">
          <Swatches colors={d.colors} />
        </div>

        <article className="prose-design mt-12 [&>h2:first-of-type]:mt-0 [&>h2:first-of-type]:border-0 [&>h2:first-of-type]:pt-0" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

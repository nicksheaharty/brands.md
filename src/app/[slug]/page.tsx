import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { getDesign, getDesigns, googleFontsHref } from "@/lib/designs";
import { renderMarkdown } from "@/lib/markdown";
import { categoryColor } from "@/lib/palette";
import { REPO } from "@/lib/site";
import { PreviewHeader } from "@/components/preview/PreviewHeader";
import { Swatches } from "@/components/preview/Swatches";
import { TypeSpecimen } from "@/components/preview/TypeSpecimen";
import { SampleUI } from "@/components/preview/SampleUI";
import { Tokens } from "@/components/preview/Tokens";
import { CopyButton } from "@/components/CopyButton";

export const dynamicParams = false;

export function generateStaticParams() {
  return getDesigns().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const d = getDesign((await params).slug);
  if (!d) return {};
  return {
    title: `${d.name} DESIGN.md`,
    description: `${d.tagline} Colors, typography, components and an agent prompt for building in the ${d.name} style.`,
    alternates: { canonical: `/${d.slug}` },
  };
}

function Section({ id, n, title, color, children }: { id: string; n: string; title: string; color: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-14 border-t border-white/5">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-body text-surface/25 tabular-nums">{n}</span>
        <h2 className="text-3xl md:text-4xl font-title lowercase text-surface">{title}</h2>
        <span className="h-3 w-3 rounded-full" style={{ background: color }} />
      </div>
      {children}
    </section>
  );
}

export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDesign(slug);
  if (!d) notFound();
  const all = getDesigns();
  const i = all.findIndex((x) => x.slug === slug);
  const prev = all[(i - 1 + all.length) % all.length];
  const next = all[(i + 1) % all.length];
  const { html, toc } = renderMarkdown(d.body);
  const fontsHref = googleFontsHref([d.fonts?.display?.fallback, d.fonts?.body?.fallback, d.fonts?.mono?.fallback ?? ""]);
  const accent = categoryColor(d.category);

  return (
    <div className="w-full px-6 md:px-12 pb-12">
      {fontsHref && <link rel="stylesheet" href={fontsHref} precedence="default" />}
      <div className="max-w-6xl mx-auto">
        <Link href="/#library" className="btn btn-ghost btn-sm -ml-4 mt-4 mb-8">
          <ArrowLeft weight="bold" className="w-4 h-4" /> library
        </Link>

        <PreviewHeader
          name={d.name}
          slug={d.slug}
          category={d.category}
          tagline={d.tagline}
          url={d.url}
          updated={d.updated}
          lines={d.lines}
          theme={d.theme}
          logo={d.logo}
          logoBackground={d.logoBackground}
          accent={accent}
          raw={d.raw}
        />

        <Section id="colors" n="01" title="colors" color={accent}>
          <Swatches colors={d.colors} />
        </Section>

        <Section id="type" n="02" title="typography" color={accent}>
          <TypeSpecimen fonts={d.fonts} scale={d.typeScale} />
        </Section>

        <Section id="sample" n="03" title="in its own clothes" color={accent}>
          <p className="-mt-4 mb-8 text-surface/45 font-body lowercase max-w-2xl">
            a small interface drawn only from the tokens in this file, using the closest free fonts. it shows the feel, not a copy of the product.
          </p>
          <SampleUI name={d.name} preview={d.preview} fonts={d.fonts} logo={d.logo} />
        </Section>

        <Section id="tokens" n="04" title="shape & space" color={accent}>
          <Tokens radii={d.radii} spacing={d.spacing} shadows={d.shadows} preview={d.preview} />
        </Section>

        <Section id="doc" n="05" title="the full file" color={accent}>
          <div className="grid lg:grid-cols-[220px_1fr] gap-10">
            <aside className="hidden lg:block">
              <nav className="sticky top-28 flex flex-col gap-1 text-sm font-body lowercase">
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className="py-1 text-surface/40 hover:text-primary transition-colors">
                    {t.text}
                  </a>
                ))}
                <div className="mt-6 flex flex-col items-start gap-2">
                  <CopyButton text={d.raw} label="copy markdown" />
                  <a className="btn btn-ghost btn-sm" href={`${REPO}/blob/main/designs/${d.slug}/DESIGN.md`} target="_blank" rel="noopener noreferrer">
                    <GithubLogo weight="duotone" className="w-4 h-4" /> edit on github
                  </a>
                </div>
              </nav>
            </aside>
            <article className="prose-design min-w-0 card p-6 md:p-10 [&>h2:first-child]:mt-0 [&>h2:first-child]:border-0 [&>h2:first-child]:pt-0" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </Section>

        <nav className="grid grid-cols-2 gap-4 pt-10 border-t border-white/5">
          <Link href={`/${prev.slug}`} className="card card-interactive p-5 group">
            <span className="eyebrow">previous</span>
            <span className="mt-1 flex items-center gap-2 font-title text-xl lowercase text-surface/70 group-hover:text-surface">
              <ArrowLeft weight="bold" className="w-4 h-4" /> {prev.name}
            </span>
          </Link>
          <Link href={`/${next.slug}`} className="card card-interactive p-5 group text-right">
            <span className="eyebrow">next</span>
            <span className="mt-1 flex items-center justify-end gap-2 font-title text-xl lowercase text-surface/70 group-hover:text-surface">
              {next.name} <ArrowRight weight="bold" className="w-4 h-4" />
            </span>
          </Link>
        </nav>
        <p className="mt-8 text-xs text-surface/25 font-body lowercase flex items-center gap-1">
          unofficial reference, not affiliated with {d.name}.
          <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 hover:text-primary">
            visit {d.url.replace(/^https?:\/\//, "")} <ArrowUpRight className="w-3 h-3" />
          </a>
        </p>
      </div>
    </div>
  );
}

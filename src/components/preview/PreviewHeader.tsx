"use client";

import { useState } from "react";
import { DownloadSimple, FileZip, ArrowUpRight, BezierCurve } from "@phosphor-icons/react";
import StarBorder from "@/components/bits/StarBorder";
import BlurText from "@/components/bits/BlurText";
import GlareHover from "@/components/bits/GlareHover";
import Magnet from "@/components/bits/Magnet";
import { CopyButton } from "@/components/CopyButton";

type Props = {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  url: string;
  updated: string;
  lines: number;
  theme: string;
  logo: string;
  logoBackground: string;
  accent: string;
  raw: string;
};

export function PreviewHeader(p: Props) {
  const [zipping, setZipping] = useState(false);
  const file = `${p.slug}-DESIGN.md`;

  async function zip() {
    setZipping(true);
    try {
      const { default: JSZip } = await import("jszip");
      const z = new JSZip();
      const folder = z.folder(p.slug)!;
      folder.file("DESIGN.md", p.raw);
      if (p.logo) folder.file("logo.svg", p.logo);
      const blob = await z.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${p.slug}-design.zip`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } finally {
      setZipping(false);
    }
  }

  return (
    <header className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 lg:gap-14 items-center pb-14">
      <GlareHover
        width="100%"
        height="auto"
        background={p.logoBackground}
        borderRadius="24px"
        borderColor="rgba(255,255,255,0.08)"
        glareColor="#ffffff"
        glareOpacity={0.35}
        className="aspect-[4/3] w-full"
      >
        <div
          className="flex h-full w-full items-center justify-center p-[18%] [&>svg]:max-h-full [&>svg]:w-full [&>svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: p.logo }}
        />
      </GlareHover>

      <div>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-surface/35">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
            {p.category}
          </span>
          <span>·</span>
          <span>{p.theme} ui</span>
          <span>·</span>
          <span className="tabular-nums">{p.lines} lines</span>
        </div>
        <h1 className="mt-4 font-title text-5xl md:text-7xl lowercase text-surface leading-none">
          <BlurText text={p.name} animateBy="letters" delay={40} trigger="load" />
        </h1>
        <div className="h-1 w-20 my-6" style={{ backgroundColor: p.accent }} />
        <p className="text-xl md:text-2xl font-body text-surface/75 lowercase leading-snug text-balance">{p.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Magnet padding={40} magnetStrength={4}>
            <StarBorder
              as="a"
              href={`/designs/${p.slug}/DESIGN.md`}
              download={file}
              color="#FF9670"
              backgroundColor="#FF9670"
              textColor="#090200"
              radius={8}
              hover="brighten"
              className="font-title"
            >
              <span className="inline-flex items-center gap-2 font-title">
                <DownloadSimple weight="bold" className="w-4 h-4" /> DESIGN.md
              </span>
            </StarBorder>
          </Magnet>
          <a href={`/designs/${p.slug}/logo.svg`} download={`${p.slug}-logo.svg`} className="btn btn-secondary">
            <BezierCurve weight="duotone" className="w-5 h-5" /> logo.svg
          </a>
          <button onClick={zip} disabled={zipping} className="btn btn-ghost">
            <FileZip weight="duotone" className="w-5 h-5" /> {zipping ? "zipping" : "both as .zip"}
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-1 -ml-4">
          <CopyButton text={p.raw} label="copy markdown" />
          <CopyButton text={`curl -o DESIGN.md https://design.nickharty.com/designs/${p.slug}/DESIGN.md`} label="copy curl" />
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            {p.url.replace(/^https?:\/\/(www\.)?/, "")} <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="mt-6 text-xs text-surface/30 font-body lowercase">updated {p.updated}</p>
      </div>
    </header>
  );
}

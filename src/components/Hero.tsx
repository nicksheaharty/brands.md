"use client";

import DotGrid from "@/components/bits/DotGrid";
import BlurText from "@/components/bits/BlurText";
import ShinyText from "@/components/bits/ShinyText";
import CountUp from "@/components/bits/CountUp";
import Magnet from "@/components/bits/Magnet";
import { ArrowDown, GithubLogo } from "@phosphor-icons/react";
import { brand } from "@/lib/palette";
import { REPO } from "@/lib/site";

export function Hero({ stats }: { stats: { designs: number; colors: number; lines: number } }) {
  return (
    <section className="relative -mt-24 pt-24 min-h-[88vh] flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 0%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 0%, transparent 100%)",
        }}
      >
        <DotGrid
          dotSize={5}
          gap={22}
          baseColor="#2a1c17"
          activeColor={brand.primary}
          proximity={140}
          shockRadius={260}
          shockStrength={5}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/spreadlove.svg" alt="spread love" className="h-5 w-auto opacity-40 mb-6" />

        <h1 className="font-title text-surface leading-[0.95] text-[13vw] md:text-8xl lg:text-[7.5rem] tracking-tight">
          <BlurText text="DESIGN.MD" animateBy="letters" delay={60} direction="top" trigger="load" className="justify-center" />
        </h1>

        <p className="mt-5 text-2xl md:text-3xl font-body italic lowercase">
          <ShinyText text="great artists steal to learn." color="#FF9670" shineColor="#FFEFEA" speed={3.2} />
        </p>

        <p className="mt-5 text-base md:text-lg font-body text-surface/45 max-w-xl lowercase leading-relaxed text-balance">
          in-depth design files for the brands everyone studies. colors, type, components, logos and a prompt your coding agent can read. preview them here, then take them home.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <Magnet padding={60} magnetStrength={3}>
            <a href="#library" className="btn btn-primary">
              browse the library <ArrowDown weight="bold" className="w-4 h-4" />
            </a>
          </Magnet>
          <Magnet padding={60} magnetStrength={3}>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <GithubLogo weight="duotone" className="w-5 h-5" /> github
            </a>
          </Magnet>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 md:gap-16">
          {[
            { n: stats.designs, label: "designs", color: brand.films },
            { n: stats.colors, label: "colors named", color: brand.design },
            { n: stats.lines, label: "lines written", color: brand.social },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <dd className="font-title text-3xl md:text-4xl text-surface tabular-nums">
                <CountUp to={s.n} separator="," duration={1.6} trigger="load" />
              </dd>
              <dt className="mt-1 flex items-center gap-2 text-xs md:text-sm text-surface/40 lowercase">
                <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

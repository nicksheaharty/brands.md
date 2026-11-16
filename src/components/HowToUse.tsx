import SpotlightCard from "@/components/bits/SpotlightCard";
import { CopyButton } from "@/components/CopyButton";
import { brand } from "@/lib/palette";
import { SITE, REPO } from "@/lib/site";

export function HowToUse({ example }: { example: string }) {
  const curl = `curl -o DESIGN.md ${SITE}/designs/${example}/DESIGN.md`;
  const steps = [
    {
      n: "01",
      color: brand.films,
      title: "pick a brand",
      body: "open a card to see its palette, type scale and a sample UI drawn from its own tokens.",
    },
    {
      n: "02",
      color: brand.design,
      title: "drop it in your repo",
      body: "save DESIGN.md at the root of your project. claude code, cursor and friends read it as context.",
      code: curl,
    },
    {
      n: "03",
      color: brand.social,
      title: "ask for the look",
      body: "tell your agent to build with the file. each one ends with a ready-to-paste prompt and css variables.",
      code: "Build the settings page following DESIGN.md.",
    },
    {
      n: "04",
      color: brand.health,
      title: "then make it yours",
      body: "copying is how you learn the moves. ship something that only you could have made.",
    },
  ];
  return (
    <section id="use" className="relative w-full px-6 md:px-12 py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-title lowercase text-surface">how to use</h2>
        <div className="h-1 w-20 mt-6 mb-12" style={{ backgroundColor: brand.films }} />
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <SpotlightCard key={s.n} className="card p-7 md:p-8" spotlightColor={`${s.color}40`} theme="dark">
              <div className="flex items-baseline gap-4">
                <span className="font-body text-surface/25 tabular-nums">{s.n}</span>
                <h3 className="text-2xl font-title lowercase text-surface">{s.title}</h3>
                <span className="ml-auto h-3 w-3 rounded-full shrink-0" style={{ background: s.color }} />
              </div>
              <p className="mt-3 text-surface/55 font-body lowercase leading-relaxed">{s.body}</p>
              {s.code && (
                <div className="mt-5 flex items-center gap-2 rounded-lg bg-black/50 border border-white/10 pl-4 pr-1 py-1">
                  <code className="flex-1 font-mono text-[12.5px] text-surface/75 overflow-x-auto whitespace-nowrap scrollbar-hide">{s.code}</code>
                  <CopyButton text={s.code} label="" className="btn btn-icon !p-2.5" />
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>
        <p className="mt-10 text-sm text-surface/35 font-body lowercase">
          need every file at once? <a className="text-primary underline underline-offset-4" href="/designs/index.json">index.json</a> lists them all, or clone the{" "}
          <a className="text-primary underline underline-offset-4" href={REPO}>repo</a>. pull requests with new brands are welcome.
        </p>
      </div>
    </section>
  );
}

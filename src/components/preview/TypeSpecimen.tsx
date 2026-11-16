import type { Design } from "@/lib/designs";

const stack = (f?: { family: string; fallback: string }) =>
  f ? `"${f.fallback}", system-ui, sans-serif` : "system-ui, sans-serif";

export function TypeSpecimen({ fonts, scale }: { fonts: Design["fonts"]; scale: Design["typeScale"] }) {
  const roles = [
    { key: "display", f: fonts?.display },
    { key: "body", f: fonts?.body },
    { key: "mono", f: fonts?.mono },
  ].filter((r) => r.f);
  return (
    <div className="space-y-10">
      <div className="grid gap-4 md:grid-cols-3">
        {roles.map(({ key, f }) => (
          <div key={key} className="card p-6 flex flex-col">
            <span className="eyebrow">{key}</span>
            <span className="mt-4 text-7xl text-surface leading-none" style={{ fontFamily: key === "mono" ? `"${f!.fallback}", monospace` : stack(f), fontWeight: f!.weights?.[f!.weights.length - 1] ?? 600 }}>
              Aa
            </span>
            <span className="mt-5 font-title text-lg text-surface lowercase">{f!.family}</span>
            <span className="text-sm text-surface/40 font-body lowercase">
              preview in {f!.fallback}
              {f!.weights?.length ? ` · ${f!.weights.join(" / ")}` : ""}
            </span>
          </div>
        ))}
      </div>
      <div className="card divide-y divide-white/5 overflow-hidden">
        {scale.map((r) => (
          <div key={r.role} className="grid md:grid-cols-[170px_1fr] gap-2 md:gap-6 items-baseline px-6 py-5">
            <div className="text-xs font-mono text-surface/40">
              <div className="text-surface/70 font-body text-sm lowercase mb-0.5">{r.role}</div>
              {r.size}px · {r.weight} · {r.lineHeight ?? "normal"}
              {r.tracking && r.tracking !== "0" ? ` · ${r.tracking}` : ""}
            </div>
            <div
              className="text-surface truncate"
              style={{
                fontFamily: r.size >= 20 ? stack(fonts?.display) : stack(fonts?.body),
                fontSize: `min(${r.size}px, 9vw)`,
                fontWeight: r.weight,
                lineHeight: r.lineHeight as number,
                letterSpacing: r.tracking,
              }}
            >
              The quick brown fox watched every film twice
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

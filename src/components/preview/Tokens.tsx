import type { Design } from "@/lib/designs";

export function Tokens({ radii, spacing, shadows, preview }: Pick<Design, "radii" | "spacing" | "shadows" | "preview">) {
  const max = Math.max(...spacing, 1);
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="card p-6">
        <span className="eyebrow">radii</span>
        <div className="mt-6 grid grid-cols-2 gap-5">
          {Object.entries(radii).map(([k, v]) => (
            <div key={k} className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 border-2" style={{ borderRadius: Math.min(v, 32), borderColor: preview?.accent ?? "#FF9670", background: "rgba(255,255,255,0.03)" }} />
              <span className="text-xs font-mono text-surface/50">{k} · {v >= 999 ? "pill" : `${v}px`}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-6">
        <span className="eyebrow">spacing</span>
        <div className="mt-6 flex flex-col gap-2.5">
          {spacing.map((s) => (
            <div key={s} className="flex items-center gap-3">
              <span className="w-10 text-right text-xs font-mono text-surface/50">{s}</span>
              <span className="h-3 rounded-sm" style={{ width: `${(s / max) * 100}%`, minWidth: 3, background: preview?.accent ?? "#FF9670", opacity: 0.85 }} />
            </div>
          ))}
        </div>
      </div>
      <div className="card p-6">
        <span className="eyebrow">elevation</span>
        {shadows.length ? (
          <div className="mt-6 grid grid-cols-2 gap-5 p-4 rounded-xl" style={{ background: preview?.bg }}>
            {shadows.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-2">
                <div className="h-16 w-full" style={{ boxShadow: s.value, background: preview?.surface, borderRadius: preview?.radius ?? 8 }} />
                <span className="text-xs text-center" style={{ color: preview?.muted }}>{s.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-surface/45 font-body lowercase">flat. no shadows; depth comes from color and borders.</p>
        )}
      </div>
    </div>
  );
}

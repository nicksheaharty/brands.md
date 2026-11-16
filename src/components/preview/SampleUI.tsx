import type { Design } from "@/lib/designs";

export function SampleUI({ name, preview: p, fonts, logo }: { name: string; preview: Design["preview"]; fonts: Design["fonts"]; logo: string }) {
  if (!p) return null;
  const r = p.radius ?? 8;
  const btnRadius = p.buttonStyle === "pill" ? 9999 : r;
  const display = `"${fonts?.display?.fallback ?? "Inter"}", system-ui, sans-serif`;
  const body = `"${fonts?.body?.fallback ?? "Inter"}", system-ui, sans-serif`;
  const primary: React.CSSProperties =
    p.buttonStyle === "outline"
      ? { border: `1.5px solid ${p.accent}`, color: p.accent, background: "transparent", borderRadius: btnRadius }
      : { background: p.accent, color: p.accentText, borderRadius: btnRadius };
  const items = ["Overview", "Activity", "Saved", "Settings"];

  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: p.bg, color: p.text, fontFamily: body }}>
      {/* top bar */}
      <div className="flex items-center gap-4 px-5 md:px-7 py-4" style={{ borderBottom: `1px solid ${p.border}` }}>
        <span className="flex h-7 max-w-[130px] shrink-0 items-center [&>svg]:h-full [&>svg]:w-auto [&>svg]:max-w-full" dangerouslySetInnerHTML={{ __html: logo }} />
        <nav className="hidden sm:flex gap-5 text-[14px]" style={{ color: p.muted }}>
          {items.map((t, i) => (
            <span key={t} style={i === 0 ? { color: p.text, fontWeight: 600, borderBottom: `2px solid ${p.accent}`, paddingBottom: 4 } : undefined}>
              {t}
            </span>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:block text-[13px] px-3 py-2 w-48" style={{ background: p.surface, color: p.muted, borderRadius: r, border: `1px solid ${p.border}` }}>
            Search {name}
          </div>
          <span className="h-8 w-8 rounded-full" style={{ background: p.accent }} />
        </div>
      </div>

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-5 p-5 md:p-7">
        {/* hero card */}
        <div className="p-6 md:p-8 flex flex-col gap-4" style={{ background: p.surface, borderRadius: r * 1.5, border: `1px solid ${p.border}` }}>
          <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: p.accent, fontWeight: 600 }}>New this week</span>
          <h3 className="text-[28px] md:text-[34px] leading-[1.1]" style={{ fontFamily: display, fontWeight: fonts?.display?.weights?.at(-1) ?? 700, color: p.text }}>
            Build it the {name} way
          </h3>
          <p className="text-[15px] leading-relaxed max-w-md" style={{ color: p.muted }}>
            Same palette, same spacing, same corners. Swap in your own content and it should still feel at home.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="px-5 py-2.5 text-[14px] font-semibold" style={primary}>Get started</span>
            <span className="px-5 py-2.5 text-[14px] font-semibold" style={{ color: p.text, border: `1px solid ${p.border}`, borderRadius: btnRadius }}>
              Learn more
            </span>
          </div>
        </div>

        {/* form + list */}
        <div className="flex flex-col gap-5">
          <div className="p-5 flex flex-col gap-3" style={{ background: p.surface, borderRadius: r * 1.5, border: `1px solid ${p.border}` }}>
            <label className="text-[13px] font-semibold">Email</label>
            <div className="px-3.5 py-2.5 text-[14px]" style={{ background: p.bg, border: `1px solid ${p.border}`, borderRadius: r, color: p.muted }}>
              you@example.com
            </div>
            <div className="flex items-center justify-between text-[13px]" style={{ color: p.muted }}>
              Notifications
              <span className="relative inline-block h-5 w-9 rounded-full" style={{ background: p.accent }}>
                <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full" style={{ background: p.accentText }} />
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col" style={{ background: p.surface, borderRadius: r * 1.5, border: `1px solid ${p.border}` }}>
            {["Saved to your list", "3 friends liked this", "Weekly digest ready"].map((t, i) => (
              <div key={t} className="flex items-center gap-3 px-5 py-3.5 text-[14px]" style={i ? { borderTop: `1px solid ${p.border}` } : undefined}>
                <span className="h-2 w-2 rounded-full" style={{ background: i === 0 ? p.accent : p.muted }} />
                <span className="flex-1">{t}</span>
                <span className="text-[11px] px-2 py-0.5" style={{ color: p.muted, border: `1px solid ${p.border}`, borderRadius: 9999 }}>
                  {i + 2}m
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

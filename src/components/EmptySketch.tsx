import rough from "roughjs";
import { DOTS } from "@/lib/palette";

// Hand-drawn "nothing in frame" sketch: an empty app icon, a magnifying glass, a few Harty dots.
// Fixed seeds, so it draws identically on the server and the client.
const g = rough.generator();
const ink = "#FFEFEA";
const orange = "#FF9670";
const line = { roughness: 0.9, bowing: 0.8, stroke: ink, strokeWidth: 1.8, disableMultiStroke: true };

// Hatching is drawn on a plain rectangle and clipped to the rounded icon, so no strokes spill out.
const hatch = g.toPaths(
  g.rectangle(30, 10, 70, 70, { seed: 3, roughness: 0.8, stroke: "none", fill: orange, fillStyle: "hachure", hachureGap: 8, hachureAngle: -41, fillWeight: 1.4 })
);
const ICON = "M30 24 Q30 10 44 10 L86 10 Q100 10 100 24 L100 66 Q100 80 86 80 L44 80 Q30 80 30 66 Z";
const outline = [
  g.path(ICON, { ...line, seed: 4, strokeWidth: 2.2 }),
  g.linearPath([[42, 95], [72, 94]], { ...line, seed: 8 }),
  g.linearPath([[42, 103], [60, 103]], { ...line, seed: 9, stroke: "rgba(255,239,234,0.5)" }),
  g.circle(112, 74, 40, { ...line, seed: 5, strokeWidth: 2.4, fill: "#090200", fillStyle: "solid" }),
  g.line(126, 89, 146, 109, { ...line, seed: 10, strokeWidth: 4.5 }),
  g.path("M106 67 Q106 61 112.5 61 Q119 61 119 67 Q119 71 114 73.5 Q112.5 74.5 112.5 78", { ...line, seed: 12, stroke: orange, strokeWidth: 2.4 }),
].flatMap((d) => g.toPaths(d));

const dots = [
  { x: 16, y: 38, r: 4.5, c: DOTS[0] },
  { x: 140, y: 26, r: 5.5, c: DOTS[1] },
  { x: 14, y: 88, r: 3.5, c: DOTS[3] },
  { x: 152, y: 56, r: 3.5, c: DOTS[4] },
];

export function EmptySketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 164 120" className={className} fill="none" aria-hidden>
      <defs>
        <clipPath id="empty-icon-clip">
          <path d={ICON} />
        </clipPath>
      </defs>
      <g clipPath="url(#empty-icon-clip)" opacity={0.85}>
        {hatch.map((p, i) => (
          <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill="none" strokeLinecap="round" />
        ))}
      </g>
      {outline.map((p, i) => (
        <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill={p.fill ?? "none"} strokeLinecap="round" strokeLinejoin="round" />
      ))}
      <circle cx={112.5} cy={84} r={1.8} fill={orange} />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} />
      ))}
    </svg>
  );
}

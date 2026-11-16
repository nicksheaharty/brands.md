import rough from "roughjs";
import { DOTS } from "@/lib/palette";

// A hand-drawn "nothing in frame" sketch: an empty app icon, a magnifying glass, a few Harty dots.
// Fixed seeds, so it draws identically on the server and the client.
const g = rough.generator();
const ink = "#FFEFEA";
const shapes = [
  // empty app icon (rounded square), hachure fill
  g.path("M30 22 Q30 10 42 10 L88 10 Q100 10 100 22 L100 68 Q100 80 88 80 L42 80 Q30 80 30 68 Z", {
    seed: 3, roughness: 1.6, bowing: 1.5, stroke: ink, strokeWidth: 2.2,
    fill: "#FF9670", fillStyle: "hachure", hachureGap: 7, hachureAngle: -41, fillWeight: 1.1,
  }),
  // label scribble under the icon
  g.linearPath([[40, 96], [62, 94], [90, 97]], { seed: 8, roughness: 1.8, stroke: ink, strokeWidth: 2 }),
  // magnifying glass
  g.circle(112, 74, 44, { seed: 5, roughness: 1.4, stroke: ink, strokeWidth: 3, fill: "#090200", fillStyle: "solid" }),
  g.line(128, 90, 150, 113, { seed: 9, roughness: 1.2, stroke: ink, strokeWidth: 6 }),
  // question mark inside the lens
  g.path("M104 66 Q104 58 112 58 Q120 58 120 65 Q120 71 113 74 L112 80", { seed: 12, roughness: 0.9, stroke: "#FF9670", strokeWidth: 3 }),
].flatMap((d) => g.toPaths(d));

const dots = [
  { x: 18, y: 40, r: 5, c: DOTS[0] },
  { x: 140, y: 26, r: 6, c: DOTS[1] },
  { x: 14, y: 92, r: 4, c: DOTS[3] },
  { x: 150, y: 58, r: 4, c: DOTS[4] },
];

export function EmptySketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 164 128" className={className} fill="none" aria-hidden>
      {shapes.map((p, i) => (
        <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.strokeWidth} fill={p.fill ?? "none"} strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c} />
      ))}
    </svg>
  );
}

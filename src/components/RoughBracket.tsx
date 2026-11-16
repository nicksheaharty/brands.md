import rough from "roughjs";

// Hand-drawn viewfinder corner. A fixed seed draws the same strokes on the server and the client.
const generator = rough.generator();
const paths = generator.toPaths(
  generator.linearPath(
    [
      [3, 45],
      [4, 4],
      [45, 3],
    ],
    { seed: 11, roughness: 1.3, bowing: 1.2, stroke: "currentColor", strokeWidth: 4.5 }
  )
);

/** `corner` picks which corner of the frame the bracket sits in. */
export function RoughBracket({ corner, className = "" }: { corner: "tl" | "tr" | "bl" | "br"; className?: string }) {
  const flip = { tl: "", tr: "scale(-1,1)", bl: "scale(1,-1)", br: "scale(-1,-1)" }[corner];
  return (
    <svg viewBox="0 0 48 48" className={className} style={{ transform: flip, overflow: "visible" }} fill="none" aria-hidden>
      {paths.map((p, i) => (
        <path key={i} d={p.d} stroke="currentColor" strokeWidth={p.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

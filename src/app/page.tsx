import { getDesigns, summary } from "@/lib/designs";
import { Hero } from "@/components/Hero";
import { Library } from "@/components/Library";
import { HowToUse } from "@/components/HowToUse";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  const designs = getDesigns();
  const items = designs.map((d) => ({ ...summary(d), logo: d.logo }));
  const stats = {
    designs: designs.length,
    colors: designs.reduce((n, d) => n + d.colors.length, 0),
    lines: designs.reduce((n, d) => n + d.lines, 0),
  };
  return (
    <>
      <Hero stats={stats} />
      <Marquee names={designs.map((d) => d.name)} />
      <Library items={items} />
      <HowToUse example={designs[0]?.slug ?? "letterboxd"} />
    </>
  );
}

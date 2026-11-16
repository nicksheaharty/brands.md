import { getDesigns } from "@/lib/designs";
import { Launchpad } from "@/components/Launchpad";

export default function Page() {
  const items = getDesigns().map((d) => ({
    slug: d.slug,
    name: d.shortName ?? d.name,
    icon: d.icon,
    colors: d.colors.slice(0, 6).map((c) => c.hex),
  }));
  return <Launchpad items={items} />;
}

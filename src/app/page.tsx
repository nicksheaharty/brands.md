import { getDesigns } from "@/lib/designs";
import { Home } from "@/components/Home";

export default function Page() {
  const items = getDesigns().map((d) => ({ slug: d.slug, name: d.name === "University of Pennsylvania" ? "Penn" : d.name, icon: d.icon }));
  return <Home items={items} />;
}

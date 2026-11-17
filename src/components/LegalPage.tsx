import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { LEGAL_UPDATED } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="h-full w-full overflow-y-auto overscroll-contain scrollbar-hide px-4 md:px-12 pt-2 pb-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-surface/40 hover:text-primary transition-colors">
          <ArrowLeft weight="bold" className="w-4 h-4" /> all designs
        </Link>
        <header className="mt-8">
          <h1 className="font-title text-3xl md:text-5xl text-surface leading-tight">{title}</h1>
          <p className="mt-2 text-sm text-surface/40">Last updated {LEGAL_UPDATED}</p>
        </header>
        <article className="prose-design legal mt-10 [&>h2:first-of-type]:mt-0 [&>h2:first-of-type]:border-0 [&>h2:first-of-type]:pt-0">
          {children}
        </article>
      </div>
    </div>
  );
}

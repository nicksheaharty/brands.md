import { REPO } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto px-6 md:px-12 py-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 justify-between text-xs text-surface/35 font-body lowercase">
        <span>
          © 2026 <a href="https://nickharty.com" className="hover:text-primary">nick harty</a> ·{" "}
          <a href={REPO} className="hover:text-primary">github</a>
        </span>
        <span>unofficial references. not affiliated with the brands shown; logos belong to their owners.</span>
      </div>
    </footer>
  );
}

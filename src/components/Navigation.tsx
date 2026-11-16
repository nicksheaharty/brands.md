import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { REPO } from "@/lib/site";

export function Navigation() {
  return (
    <nav className="px-6 md:px-12 py-5">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Home" className="transition-opacity hover:opacity-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-color.svg" alt="Nick Harty" className="h-7 w-auto" />
        </Link>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-icon -mr-3" aria-label="GitHub repository">
          <GithubLogo weight="regular" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
}

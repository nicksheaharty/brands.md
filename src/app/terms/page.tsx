import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT, REPO, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and disclaimer",
  description: "brands.md is unofficial and not affiliated with any brand it describes. How the files are licensed and how brand owners can ask for removal.",
  alternates: { canonical: `${SITE}/terms` },
};

const mail = <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;

export default function Terms() {
  return (
    <LegalPage title="Terms and disclaimer">
      <p>
        brands.md is a free, unofficial library of DESIGN.md files run by Nick Harty. By using the site or the files, you agree to
        these terms. If you don&apos;t agree, please don&apos;t use them.
      </p>

      <h2>Not affiliated with any brand</h2>
      <p>
        Brand names, logos, app icons and other trademarks on this site belong to their owners. brands.md is not affiliated with,
        endorsed by or sponsored by any of them, and no brand reviewed or approved the files about it.
      </p>

      <h2>What the files are</h2>
      <p>
        Each DESIGN.md describes the publicly visible design of a product (colors, type, spacing, components) as an independent
        reference. Logos and icons are included only to identify the brand a file is about. Nothing here grants you any right to
        use anyone&apos;s trademarks, logos, trade dress or other intellectual property. Check each brand&apos;s own guidelines
        before using its marks.
      </p>
      <p>
        The files are written from public sources and may be wrong, incomplete or out of date. Values marked as approximate are
        estimates.
      </p>

      <h2>Your responsibility</h2>
      <p>If you use a file to build something, you are responsible for what you build. In particular, you agree not to:</p>
      <ul>
        <li>present your work as made by, affiliated with or approved by the brand;</li>
        <li>use a brand&apos;s look to mislead people, for example for phishing, scams or fake login pages;</li>
        <li>use someone else&apos;s logo or name in a way that infringes their rights.</li>
      </ul>
      <p>Parody and commentary should be clearly labeled as such.</p>

      <h2>Licenses</h2>
      <ul>
        <li>The site&apos;s code is under the <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">MIT License</a>.</li>
        <li>The written text of the DESIGN.md files is under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Credit brands.md if you republish it.</li>
        <li>Logos, app icons and brand names are not covered by either license. They remain the property of their owners.</li>
      </ul>

      <h2>Removal requests</h2>
      <p>
        If you own or represent a brand and want a file, logo or icon changed or removed, email {mail} with the brand, the page
        address and what you would like done. I aim to reply within 3 business days and will act promptly on reasonable requests,
        including taking material down while a question is sorted out.
      </p>

      <h2>No warranty</h2>
      <p>
        The site and files are provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, express or
        implied, including fitness for a particular purpose, accuracy and non-infringement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, Nick Harty is not liable for any damages arising from your use of the site or the
        files, or from anything you build with them. This is a free project and nothing is sold here.
      </p>

      <h2>Other sites</h2>
      <p>
        Links to brand websites, GitHub, claude.ai and other services are provided for convenience. I don&apos;t control those
        sites and am not responsible for them.
      </p>

      <h2>Changes</h2>
      <p>
        I may update these terms. The date at the top shows the latest version, and the full history is public in the{" "}
        <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub repo</a>. See also the <a href="/privacy">privacy policy</a>.
      </p>

      <h2>Contact</h2>
      <p>Nick Harty, {mail}</p>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT, REPO, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What brands.md collects (almost nothing), which services see your visit, and how to reach us.",
  alternates: { canonical: `${SITE}/privacy` },
};

const mail = <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        brands.md is a free library of DESIGN.md files run by Nick Harty (&quot;I&quot;, &quot;me&quot;). This page describes what
        happens to your information when you visit {SITE.replace("https://", "")}. The short version: there are no accounts, no
        forms, no cookies and no analytics. A few service providers that make the site work see standard technical data, described below.
      </p>

      <h2>What gets collected</h2>
      <p>
        Nothing directly. The site does not set cookies, does not use local storage, and does not run analytics, advertising or
        tracking scripts. There is nothing to sign up for.
      </p>
      <p>
        If you email me, I receive your email address, your name if you include it, and whatever you write. I use it only to reply
        and to handle your request, and I delete it once the matter is closed unless I need to keep it to show how a legal
        request was handled.
      </p>

      <h2>Who else sees your visit</h2>
      <ul>
        <li>
          <strong>Vercel</strong> hosts the site. Like any web host, its servers receive your IP address, browser user agent, the
          page you asked for and the time, and keep these in logs for security and to run the service. See{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s privacy policy</a>.
        </li>
        <li>
          <strong>Adobe Fonts</strong> serves the site&apos;s typefaces. Your browser downloads them from Adobe, which receives your
          IP address and the page address and counts font views for licensing. Adobe says it does not set cookies for this. See{" "}
          <a href="https://www.adobe.com/privacy/policies/adobe-fonts.html" target="_blank" rel="noopener noreferrer">Adobe Fonts privacy</a>.
        </li>
        <li>
          <strong>Cloudflare</strong> runs DNS for nickharty.com and forwards email sent to {CONTACT}. See{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare&apos;s privacy policy</a>.
        </li>
      </ul>
      <p>I do not sell or share personal information, and I do not use it for advertising.</p>

      <h2>Links and buttons that leave the site</h2>
      <p>
        The <strong>Add to Claude</strong> button opens claude.ai with a prompt in the address and copies the same prompt to your
        clipboard. The copy happens in your browser and is not sent to me. Once you are on claude.ai,{" "}
        <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer">Anthropic&apos;s privacy policy</a>{" "}
        applies. Links to <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a>, brand websites and nickharty.com
        are covered by those sites&apos; own policies.
      </p>

      <h2>Why this data is processed</h2>
      <p>
        For visitors in the EU, UK and similar places, the legal basis is legitimate interest: keeping the site online and secure,
        showing it in the intended fonts, and answering the people who write to me.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (for example under the GDPR, UK GDPR or California&apos;s CCPA), you can ask to see, correct or
        delete personal information about you, or object to how it is used. Because I do not collect visitor data myself, the only
        thing I usually hold is email you sent me. Write to {mail} and I will respond within 30 days. You can also complain to your
        local data protection authority.
      </p>

      <h2>Do Not Track</h2>
      <p>The site does not track you, so it treats every visit the same whether or not your browser sends a Do Not Track signal.</p>

      <h2>Children</h2>
      <p>The site is not aimed at children under 13 and I do not knowingly collect information from them.</p>

      <h2>Changes</h2>
      <p>
        If what the site loads changes, for example if analytics are added, this page will be updated first and the date at the top
        will change. The history of this page is public in the <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub repo</a>.
      </p>

      <h2>Contact</h2>
      <p>Nick Harty, {mail}</p>
    </LegalPage>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Sparks } from "@/components/Sparks";
import { SITE } from "@/lib/site";

const title = "design.md library | Nick Harty";
const description =
  "Free, in-depth DESIGN.md files for well-known brands: colors, type, components, logos and an agent-ready prompt. Preview each one and download it for your AI coding agent.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: "%s | design.md library" },
  description,
  icons: { icon: "/icon.svg" },
  openGraph: { type: "website", siteName: "design.md library", title, description, url: SITE, images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#090200" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/dzz3gsh.css" />
        <link rel="stylesheet" href="https://use.typekit.net/pxn1uhe.css" />
      </head>
      <body className="antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden">
        <Sparks>
          <Navigation />
          <main className="relative min-h-screen flex flex-col pt-24">
            {children}
            <Footer />
          </main>
        </Sparks>
      </body>
    </html>
  );
}

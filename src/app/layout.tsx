import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Viewfinder } from "@/components/Viewfinder";
import { AsciiBackground } from "@/components/AsciiBackground";
import { SITE } from "@/lib/site";

const title = "DESIGN.MD | Nick Harty";
const description = "DESIGN.md files and logos for well-known brands, ready to drop into your repo. Great artists steal to learn.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: "%s | DESIGN.MD" },
  description,
  icons: { icon: "/icon.svg" },
  openGraph: { type: "website", siteName: "DESIGN.MD", title, description, url: SITE, images: ["/og.png"] },
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
      <body className="antialiased selection:bg-primary/30 selection:text-primary h-[100dvh] overflow-hidden">
        <AsciiBackground />
        <Viewfinder />
        {/* The "sensor": everything lives inside the frame; nothing scrolls the page itself. */}
        <main className="fixed inset-x-0 top-16 bottom-12 md:top-20 md:bottom-16 z-10 flex flex-col">{children}</main>
      </body>
    </html>
  );
}

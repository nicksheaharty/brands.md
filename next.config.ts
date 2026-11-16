import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  outputFileTracingIncludes: { "/**": ["./designs/**/*", "./data/**/*"] },
  async headers() {
    return [
      {
        source: "/designs/:slug/:file",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      { source: "/assets/:file", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=31536000" }] },
      { source: "/og/:file", headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }] },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async redirects() {
    return [
      // Alte WordPress-Pfade auf die neuen Routen umleiten
      { source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true },
      { source: "/datenschutzerklärung", destination: "/datenschutz", permanent: true },
      { source: "/agbs", destination: "/agb", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/startseite", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        source: "/media/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Der Formular-Endpunkt liefert kein Dokument und gehört nicht in den Crawl.
      disallow: "/api/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

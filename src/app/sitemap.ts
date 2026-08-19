import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Nur indexierbare Seiten gehören in die Sitemap. Impressum, Datenschutz und
 * AGB sind bewusst auf noindex gesetzt – stünden sie hier, meldete die Search
 * Console für jede von ihnen „Durch ‚noindex‘-Tag ausgeschlossen“.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

import type { MetadataRoute } from "next";
import { articles, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/leistungen",
    "/ueber-uns",
    "/blog",
    "/karriere",
    "/kontakt",
    "/newsletter",
    "/impressum",
    "/datenschutz",
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
      priority: p === "" ? 1 : 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      priority: 0.5,
    })),
  ];
}

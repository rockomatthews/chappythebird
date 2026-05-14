import type { MetadataRoute } from "next";

const BASE = "https://chappiethebot.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/",      priority: 1.0, changeFreq: "weekly" },
    { path: "/chase", priority: 0.9, changeFreq: "daily" },
    { path: "/plan",  priority: 0.8, changeFreq: "weekly" },
    { path: "/log",   priority: 0.9, changeFreq: "daily" },
    { path: "/blog",  priority: 0.7, changeFreq: "weekly" },
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));
}

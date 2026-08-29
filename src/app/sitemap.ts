import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SITE } from "@/lib/site";
import { TEMPLATE_FESTIVALS } from "@/lib/templates";

/* Every public page, and only public pages.
 *
 * Individual lifafas are deliberately absent: SPEC S9. A sitemap is an
 * invitation to index, and handing a crawler the list of every lifafa ever
 * made is the exact opposite of what this product promises. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: [string, number, "weekly" | "monthly" | "yearly"][] = [
    ["", 1, "weekly"],
    ["/templates", 0.9, "weekly"],
    ["/make", 0.9, "monthly"],
    ["/blog", 0.7, "weekly"],
    ["/about", 0.5, "monthly"],
    ["/contact", 0.4, "yearly"],
    ["/privacy", 0.3, "yearly"],
    ["/terms", 0.3, "yearly"],
  ];

  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...TEMPLATE_FESTIVALS.map((f) => ({
      url: `${SITE}/templates/${f}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...POSTS.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

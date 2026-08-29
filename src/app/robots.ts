import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/* Note what is NOT disallowed here.
 *
 * /l/ and /s/ must stay out of search, and they already carry
 * `robots: { index: false }`. Blocking them in robots.txt would be the wrong
 * tool: a crawler that cannot fetch the page never sees the noindex, so a
 * lifafa link pasted into a public group could still surface as a bare URL in
 * results, with no way to get it back out. Letting crawlers read the page is
 * what makes the noindex bite. Their slugs are unguessable and linked from
 * nowhere, so nothing finds them in the first place. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}

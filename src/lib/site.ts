/* The one canonical origin.
 *
 * lifafa.cc 308-redirects to www, so www is the host every canonical URL,
 * sitemap entry and OG image must use. Getting this wrong splits a small
 * site's ranking signals across two hostnames. */
export const SITE = "https://www.lifafa.cc";

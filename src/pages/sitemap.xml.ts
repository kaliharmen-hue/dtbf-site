import { getCollection } from "astro:content";

const staticPaths = [
  "/",
  "/about/",
  "/book/",
  "/journal/",
  "/speaking/",
  "/work-with-me/"
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET({ site }: { site: URL | undefined }) {
  if (!site) {
    throw new Error("Set `site` in astro.config.mjs to generate the sitemap.");
  }

  const posts = await getCollection("blog");
  const entries: { loc: string; lastmod?: string }[] = [
    ...staticPaths.map((path) => ({ loc: new URL(path, site).href })),
    ...posts.map((post) => ({
      loc: new URL(
        `journal/${post.slug.split("/").map(encodeURIComponent).join("/")}/`,
        site
      ).href,
      lastmod: post.data.date.toISOString().slice(0, 10)
    }))
  ];

  const urls = entries
    .map(({ loc, lastmod }) => {
      const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
      return `<url><loc>${escapeXml(loc)}</loc>${lastmodTag}</url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
}

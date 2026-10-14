export function GET({ site }: { site: URL | undefined }) {
  if (!site) {
    throw new Error("Set `site` in astro.config.mjs to publish the sitemap URL.");
  }

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", site).href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://daretobreakfree.co.uk",
  base: "/dtbf-site",
  output: "static",
  redirects: {
    "/share-your-story/": "/dtbf-site/work-with-me/"
  }
});

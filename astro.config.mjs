import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://daretobreakfree.co.uk",
  base: "/",
  output: "static",
  redirects: {
    "/share-your-story/": "/work-with-me/"
  }
});

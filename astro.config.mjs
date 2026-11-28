import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://daretobreakfree.co.uk",
  base: "/",
  output: "static",
  compressHTML: true,
  redirects: {
    "/share-your-story/": "/work-with-me/",
    "/blog/": "/journal/",
    "/blog/knowing-isnt-the-same-as-doing/": "/journal/knowing-isnt-the-same-as-doing/"
  }
});

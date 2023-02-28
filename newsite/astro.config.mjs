// https://astro.build/config
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";
import svelte from "@astrojs/svelte";

export default defineConfig({
  build: {
    format: "directory",
  },
  integrations: [
    compress(),
    purgecss({ safelist: ["button"] }),
    sitemap(),
    svelte(),
  ],
  output: "static",
  site: "https://www.novadoge.net/",
});

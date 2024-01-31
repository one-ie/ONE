import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import robots from "astro-robots";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://one.ie",
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
    gfm: true
  }), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), robots(), compress()],
  adapter: cloudflare(),
  output: "hybrid"
});
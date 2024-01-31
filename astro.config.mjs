import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: "https://new.one.ie",
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed"
    },
    gfm: true
  }), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), critters()],
  adapter: cloudflare(),
  output: "hybrid"
});
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://one.ie",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark-dimmed" },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    compressor(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  adapter: cloudflare(),
  output: "hybrid",
});
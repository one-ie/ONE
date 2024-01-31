import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://new.one.ie",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    purgecss({
      fontFace: true,
      keyframes: true,
      safelist: ["random", "yep", "button", /^nav-/],
      blocklist: ["usedClass", /^nav-/],
      content: [
        process.cwd() + "/src/**/*.{astro,react}", // Watching astro and react sources 
      ],
    }),
  ],
  adapter: cloudflare(),
  output: "hybrid",
});
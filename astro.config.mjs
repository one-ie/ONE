import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

import simpleStackStream from "simple-stack-stream";

// https://astro.build/config
export default defineConfig({
  site: "https://one.ie",
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed"
    },
    gfm: true
  }), icon(), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), simpleStackStream()],
  adapter: cloudflare({}),
  output: "hybrid",
  routes: {
    extend: {
      include: [{
        pattern: '/api/*'
      }, {
        pattern: '/signin'
      }, {
        pattern: '/signup'
      }],
      exclude: [{
        pattern: '/*'
      }]
    }
  }
});
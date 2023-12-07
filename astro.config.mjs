import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// Change your adaptor

// https://astro.build/config
export default defineConfig({
  output: "server",
    adapter: cloudflare({
    mode: 'server',
    routes: {
      strategy: 'exclude',
      include: ['/*'], // handled by custom function: functions/users/[id].js
      exclude: ['/'], // handled by static page: pages/users/faq.astro
    },
  }),
  integrations: [tailwind(), svelte(), preact(), react(), mdx()]
});
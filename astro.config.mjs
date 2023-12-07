import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// Change your adaptor

import critters from "astro-critters";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({}),
  integrations: [tailwind(), svelte(), preact(), react(), mdx(), serviceWorker(), critters()]
});
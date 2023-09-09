import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// Change your adaptor
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), svelte(), preact(), react()]
});
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), svelte(), preact(), react()]
});
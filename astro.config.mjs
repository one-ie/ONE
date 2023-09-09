import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import aws from "astro-sst/edge";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [tailwind(), svelte(), preact(), react()]
});
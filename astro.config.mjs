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
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({}),
  integrations: [tailwind(), svelte(),
    preact({
      include: ['./components/Button.jsx*'],
    }),, react(), mdx(), prefetch({
    // Allow up to three links to be prefetched concurrently
    throttle: 3
  }), serviceWorker(),  partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push', 'fbq']
      },
    }), critters()]
});
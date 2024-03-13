---
title: Analytics
description: Quotes and statistics about AI-powered ecommerce chatbots
pubDate: 14 March 2024
coverImage: /blog-placeholder-3.jpg
category: vision
---
---

Here's my previous blog post tested in Lighthouse. It's perfect on the desktop.

  

However there's a lot of images so the score is just 97%.

  

Lets see if we can improve this.

```html

import { defineConfig } from 'astro/config';

  

export default defineConfig({

experimental: {

assets: true

}

});

```

We will use Astro's experimental image

  

https://pagespeed.web.dev/analysis/https-one-ie-blog-hello-ecommerce-world/jvk3du1p3s?form_factor=desktop

  
  
  

lighthouse score

Let's Party!

  

<Blockquote name="Astro Docs">

Partytown is a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread.

  

If you’re using third-party scripts for things like analytics or ads, Partytown is a great way to make sure that they don’t slow down your site.

</Blockquote>
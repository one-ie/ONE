/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../astro_355d63a0.mjs';
import { b as $$Layout, $ as $$Header, a as $$Footer } from './__6314d021.mjs';
import 'zod';
import 'nanostores';
import '@nanostores/persistent';
/* empty css                              */import './404_bb3f7cac.mjs';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-screen bg-base-200"><div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold">ONE</h1><p class="py-6">Sell anything at the edge. Faster. For Free. MIT License. </p><button class="btn btn-primary">Sell Now</button></div></div></div>`;
}, "/home/tony/Server/ONE/src/sections/hero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "ONE - Make Everything Yours";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title })}${renderComponent($$result, "Header", $$Header, {})}${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "/home/tony/Server/ONE/src/pages/index.astro", void 0);

const $$file = "/home/tony/Server/ONE/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

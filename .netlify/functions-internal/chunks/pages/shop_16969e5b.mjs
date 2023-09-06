/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../astro_355d63a0.mjs';
import { P as ProductResult, c as $$ProductCard, g as getProducts, s as setCache, $ as $$Header, a as $$Footer, b as $$Layout } from './__6314d021.mjs';
import { z } from 'zod';
import 'nanostores';
import '@nanostores/persistent';
/* empty css                              */import './404_bb3f7cac.mjs';

const $$Astro$1 = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Products;
  z.array(ProductResult);
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section><div class="container py-16 sm:py-20"><h2 class="sr-only">Products</h2><div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">${products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product })}`)}</div></div></section>`;
}, "/home/tony/Server/ONE/src/components/Products.astro", void 0);

const $$Astro = createAstro();
const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Shop;
  const title = "ONE Success";
  const headers = Astro2.request.headers;
  const ip = headers.get("x-vercel-forwarded-for") || Astro2.clientAddress;
  const products = await getProducts({ buyerIP: ip });
  setCache.short(Astro2);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderComponent($$result2, "Products", $$Products, { "products": products })}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/tony/Server/ONE/src/pages/shop.astro", void 0);

const $$file = "/home/tony/Server/ONE/src/pages/shop.astro";
const $$url = "/shop";

export { $$Shop as default, $$file as file, $$url as url };

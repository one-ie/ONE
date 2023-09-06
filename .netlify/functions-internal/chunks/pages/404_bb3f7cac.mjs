/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../astro_355d63a0.mjs';

const $$Astro$1 = createAstro();
const $$NotFoundLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NotFoundLayout;
  Astro2.response.status = 404;
  const defaultTitle = "Page not found";
  const { title = defaultTitle, message = defaultTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container grid justify-center py-44 text-center"><span class="text-6xl font-bold text-emerald-900">404</span><h1 class="mt-4 text-xl">${message}</h1><a href="/" class="mt-6 font-semibold text-emerald-900 hover:text-emerald-700">
Go back home
<span aria-hidden="true"> &rarr;</span></a></div>`;
}, "/home/tony/Server/ONE/src/layouts/NotFoundLayout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  Astro2.response.status = 404;
  return renderTemplate`${renderComponent($$result, "NotFoundLayout", $$NotFoundLayout, {})}`;
}, "/home/tony/Server/ONE/src/pages/404.astro", void 0);

const $$file = "/home/tony/Server/ONE/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$NotFoundLayout as $, _404 as _ };

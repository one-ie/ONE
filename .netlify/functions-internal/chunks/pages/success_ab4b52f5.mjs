/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro_355d63a0.mjs';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './__6314d021.mjs';
import 'zod';
import 'nanostores';
import '@nanostores/persistent';
/* empty css                              */import './404_bb3f7cac.mjs';

const $$Astro = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  const title = "ONE Success";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${maybeRenderHead()}<h1>Success!</h1>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/tony/Server/ONE/src/pages/success.astro", void 0);

const $$file = "/home/tony/Server/ONE/src/pages/success.astro";
const $$url = "/success";

export { $$Success as default, $$file as file, $$url as url };

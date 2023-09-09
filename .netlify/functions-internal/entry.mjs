import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_bd77fc43.mjs';
import 'preact';
import 'react';
import 'react-dom/server';
import './chunks/astro_355d63a0.mjs';
import './chunks/pages/image-endpoint_52bfc4ac.mjs';

const _page0  = () => import('./chunks/image-endpoint_4714c95c.mjs');
const _page1  = () => import('./chunks/index_dc6e18b2.mjs');
const _page2  = () => import('./chunks/markdown_b6f2fbbb.mjs');
const _page3  = () => import('./chunks/_.._5878c01a.mjs');
const _page4  = () => import('./chunks/success_d2dc43e9.mjs');
const _page5  = () => import('./chunks/blocks_40022f08.mjs');
const _page6  = () => import('./chunks/theme_eb414a86.mjs');
const _page7  = () => import('./chunks/blank_28c70bb0.mjs');
const _page8  = () => import('./chunks/figma_45bd8d50.mjs');
const _page9  = () => import('./chunks/base_0c7b0056.mjs');
const _page10  = () => import('./chunks/shop_cfd8d92a.mjs');
const _page11  = () => import('./chunks/404_b630ad22.mjs');
const _page12  = () => import('./chunks/checkout_f1a6c615.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.8_stylus@0.60.0/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/markdown.md", _page2],["src/pages/products/[...handle].astro", _page3],["src/pages/success.astro", _page4],["src/pages/blocks.astro", _page5],["src/pages/studio/theme.astro", _page6],["src/pages/blank.astro", _page7],["src/pages/figma.astro", _page8],["src/pages/base.astro", _page9],["src/pages/shop.astro", _page10],["src/pages/404.astro", _page11],["src/pages/api/checkout.ts", _page12]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

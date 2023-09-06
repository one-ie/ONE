/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, e as renderSlot, m as maybeRenderHead, f as addAttribute } from '../astro_355d63a0.mjs';
import { z } from 'zod';
import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
/* empty css                              */import { $ as $$NotFoundLayout } from './404_bb3f7cac.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$c = createAstro();
const $$ThemeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  return renderTemplate(_a || (_a = __template([`<script>
  // \u261D\uFE0F This script prevent the FART effect.
  if (localStorage.getItem('theme') === null) {
    document.documentElement.setAttribute('data-theme', 'ONE')
  } else document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
  // "theme" LocalStorage value is set by the package to remember user preference.
  // The value is checked and applyed before rendering anything.
<\/script>`])));
}, "/home/tony/Server/ONE/src/scripts/theme-switcher.astro", void 0);

/** @returns {void} */
function noop() {}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

const configSchema = z.object({
  shopifyShop: z.string(),
  publicShopifyAccessToken: z.string(),
  privateShopifyAccessToken: z.string(),
  apiVersion: z.string()
});
const MoneyV2Result = z.object({
  amount: z.string(),
  currencyCode: z.string()
});
const ImageResult = z.object({
  altText: z.string().nullable().optional(),
  url: z.string(),
  width: z.number().positive().int(),
  height: z.number().positive().int()
}).nullable();
const CartItemResult = z.object({
  id: z.string(),
  cost: z.object({
    amountPerQuantity: MoneyV2Result,
    subtotalAmount: MoneyV2Result,
    totalAmount: MoneyV2Result
  }),
  merchandise: z.object({
    id: z.string(),
    title: z.string(),
    product: z.object({
      title: z.string(),
      handle: z.string()
    }),
    image: ImageResult.nullable()
  }),
  quantity: z.number().positive().int()
});
z.object({
  id: z.string(),
  cost: z.object({
    totalAmount: MoneyV2Result
  }),
  checkoutUrl: z.string(),
  totalQuantity: z.number().int(),
  lines: z.object({
    nodes: z.array(CartItemResult)
  })
}).nullable();
const VariantResult = z.object({
  id: z.string(),
  title: z.string(),
  availableForSale: z.boolean(),
  quantityAvailable: z.number().int(),
  priceV2: MoneyV2Result
});
const ProductResult = z.object({
  id: z.string(),
  title: z.string(),
  handle: z.string(),
  images: z.object({
    nodes: z.array(ImageResult)
  }),
  variants: z.object({
    nodes: z.array(VariantResult)
  }),
  featuredImage: ImageResult.nullable()
}).nullable();

const defineConfig = {
  shopifyShop: "thevintage-hub.myshopify.com",
  publicShopifyAccessToken: Object.assign({"PUBLIC_SHOPIFY_SHOP":"thevintage-hub.myshopify.com","PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN":"8e56f62b1abfd746ad1905ab4ba0c33c","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":undefined,"ASSETS_PREFIX":undefined}, {
    PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN: "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",
    _: process.env._
  }).PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  privateShopifyAccessToken: Object.assign({"PUBLIC_SHOPIFY_SHOP":"thevintage-hub.myshopify.com","PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN":"8e56f62b1abfd746ad1905ab4ba0c33c","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":undefined,"ASSETS_PREFIX":undefined}, {
    PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN: "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",
    _: process.env._
  }).PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN ? "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" : "",
  apiVersion: "2023-01"
};
const config = configSchema.parse(defineConfig);

const PRODUCT_FRAGMENT = `
fragment productFragment on Product {
  id
  title
  handle
  images (first: 10) {
    nodes {
      url(transform: {preferredContentType: WEBP})
      width
      height
      altText
    }
  }
  variants(first: 10) {
    nodes {
      id
      title
      availableForSale
      quantityAvailable
      priceV2 {
        amount
        currencyCode
      }
    }
  }
  featuredImage {
    url(transform: {preferredContentType: WEBP})
    width
    height
    altText
  }
}
`;
const ProductsQuery = `
query ($first: Int!) {
    products(first: $first) {
      edges {
        node {
          ...productFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;
const ProductByHandleQuery = `
  query ($handle: String!) {
    productByHandle(handle: $handle) {
      ...productFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;
const ProductRecommendationsQuery = `
  query ($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...productFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`;

const makeShopifyRequest = async (query, variables = {}, buyerIP = "") => {
  const apiUrl = `https://${config.shopifyShop}/api/${config.apiVersion}/graphql.json`;
  function getOptions() {
    !buyerIP && console.error(`🔴 No buyer IP provided => make sure to pass the buyer IP when making a server side Shopify request.`);
    const {
      privateShopifyAccessToken,
      publicShopifyAccessToken
    } = config;
    const options = {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        query,
        variables
      })
    };
    {
      options.headers = {
        "Content-Type": "application/json",
        "Shopify-Storefront-Private-Token": privateShopifyAccessToken,
        "Shopify-Storefront-Buyer-IP": buyerIP
      };
      return options;
    }
  }
  const response = await fetch(apiUrl, getOptions());
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${body}`);
  }
  const json = await response.json();
  if (json.errors) {
    throw new Error(json.errors.map((e) => e.message).join("\n"));
  }
  return json.data;
};
const getProducts = async (options) => {
  const {
    limit = 10,
    buyerIP
  } = options;
  const data = await makeShopifyRequest(ProductsQuery, {
    first: limit
  }, buyerIP);
  const {
    products
  } = data;
  if (!products) {
    throw new Error("No products found");
  }
  const productsList = products.edges.map((edge) => edge.node);
  const ProductsResult = z.array(ProductResult);
  const parsedProducts = ProductsResult.parse(productsList);
  return parsedProducts;
};
const getProductByHandle = async (options) => {
  const {
    handle,
    buyerIP
  } = options;
  const data = await makeShopifyRequest(ProductByHandleQuery, {
    handle
  }, buyerIP);
  const {
    productByHandle
  } = data;
  const parsedProduct = ProductResult.parse(productByHandle);
  return parsedProduct;
};
const getProductRecommendations = async (options) => {
  const {
    productId,
    buyerIP
  } = options;
  const data = await makeShopifyRequest(ProductRecommendationsQuery, {
    productId
  }, buyerIP);
  const {
    productRecommendations
  } = data;
  const ProductsResult = z.array(ProductResult);
  const parsedProducts = ProductsResult.parse(productRecommendations);
  return parsedProducts;
};

const isCartDrawerOpen = atom(false);
const isCartUpdating = atom(false);
const emptyCart = {
  id: "",
  checkoutUrl: "",
  totalQuantity: 0,
  lines: {
    nodes: []
  },
  cost: {
    totalAmount: {
      amount: "",
      currencyCode: ""
    }
  }
};
const cart = persistentAtom("cart", emptyCart, {
  encode: JSON.stringify,
  decode: JSON.parse
});

/* src/components/ShopifyImage.svelte generated by Svelte v4.2.0 */

const ShopifyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { image } = $$props;
	let { classList = "" } = $$props;
	let { loading = "lazy" } = $$props;
	let { sizes } = $$props;
	const srcSetValues = [50, 100, 200, 450, 600, 750, 900, 1e3, 1250, 1500, 1750, 2e3, 2500];

	function imageFilter(size) {
		const { width, height = "" } = size;

		if (image && image.url.includes(".webp")) {
			return `${image.url.replace(".webp", "")}&width=${width}&height=${height}`;
		}

		return image && `${image.url}&width=${width}&height=${height}`;
	}

	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.classList === void 0 && $$bindings.classList && classList !== void 0) $$bindings.classList(classList);
	if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
	if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0) $$bindings.sizes(sizes);

	return `${image
	? `<img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.altText || "Default alt text", 0)}${add_attribute("class", classList, 0)}${add_attribute("width", image.width, 0)}${add_attribute("height", image.height, 0)}${add_attribute("loading", loading, 0)}${add_attribute("sizes", sizes, 0)}${add_attribute(
			"srcset",
			srcSetValues.filter(value => image && value < image.width).map(value => {
				if (image && image.width >= value) {
					return `${imageFilter({ width: value })} ${value}w`;
				}
			}).join(", ").concat(`, ${image.url} ${image.width}w`),
			0
		)}>`
	: ` <svg class="bg-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M375.5 345.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0-1.1-2.9-2.3-5.5-3.4-7.8-1.4-4.7-2.4-13.8-.5-19.8 3.4-10.6 3.6-40.6 1.2-54.5-2.3-14-12.3-29.8-18.5-36.9-5.3-6.2-12.8-14.9-15.4-17.9 8.6-5.6 13.3-13.3 14-23 0-.3 0-.6.1-.8.4-4.1-.6-9.9-3.9-13.5-2.1-2.3-4.8-3.5-8-3.5h-54.9c-.8-7.1-3-13-5.2-17.5-6.8-13.9-12.5-16.5-21.2-16.5h-.7c-8.7 0-14.4 2.5-21.2 16.5-2.2 4.5-4.4 10.4-5.2 17.5h-48.5c-3.2 0-5.9 1.2-8 3.5-3.2 3.6-4.3 9.3-3.9 13.5 0 .2 0 .5.1.8.7 9.8 5.4 17.4 14 23-2.6 3.1-10.1 11.7-15.4 17.9-6.1 7.2-16.1 22.9-18.5 36.9-2.2 13.3-1.2 47.4 1 54.9 1.1 3.8 1.4 14.5-.2 19.4-1.2 2.4-2.3 5-3.4 7.9-4.4 11.6-6.2 26.3-5 32.6 1.8 9.9 16.5 14.4 29.4 14.4h176.8c12.9 0 27.6-4.5 29.4-14.4 1.2-6.5-.5-21.1-5-32.7zm-97.7-178c.3-3.2.8-10.6-.2-18 2.4 4.3 5 10.5 5.9 18h-5.7zm-36.3-17.9c-1 7.4-.5 14.8-.2 18h-5.7c.9-7.5 3.5-13.7 5.9-18zm4.5-6.9c0-.1.1-.2.1-.4 4.4-5.3 8.4-5.8 13.1-5.8h.7c4.7 0 8.7.6 13.1 5.8 0 .1 0 .2.1.4 3.2 8.9 2.2 21.2 1.8 25h-30.7c-.4-3.8-1.3-16.1 1.8-25zm-70.7 42.5c0-.3 0-.6-.1-.9-.3-3.4.5-8.4 3.1-11.3 1-1.1 2.1-1.7 3.4-2.1l-.6.6c-2.8 3.1-3.7 8.1-3.3 11.6 0 .2 0 .5.1.8.3 3.5.9 11.7 10.6 18.8.3.2.8.2 1-.2.2-.3.2-.8-.2-1-9.2-6.7-9.8-14.4-10-17.7 0-.3 0-.6-.1-.8-.3-3.2.5-7.7 3-10.5.8-.8 1.7-1.5 2.6-1.9h155.7c1 .4 1.9 1.1 2.6 1.9 2.5 2.8 3.3 7.3 3 10.5 0 .2 0 .5-.1.8-.3 3.6-1 13.1-13.8 20.1-.3.2-.5.6-.3 1 .1.2.4.4.6.4.1 0 .2 0 .3-.1 13.5-7.5 14.3-17.5 14.6-21.3 0-.3 0-.5.1-.8.4-3.5-.5-8.5-3.3-11.6l-.6-.6c1.3.4 2.5 1.1 3.4 2.1 2.6 2.9 3.5 7.9 3.1 11.3 0 .3 0 .6-.1.9-1.5 20.9-23.6 31.4-65.5 31.4h-43.8c-41.8 0-63.9-10.5-65.4-31.4zm91 89.1h-7c0-1.5 0-3-.1-4.2-.2-12.5-2.2-31.1-2.7-35.1h3.6c.8 0 1.4-.6 1.4-1.4v-14.1h2.4v14.1c0 .8.6 1.4 1.4 1.4h3.7c-.4 3.9-2.4 22.6-2.7 35.1v4.2zm65.3 11.9h-16.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h16.8v2.8h-62.2c0-.9-.1-1.9-.1-2.8h33.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-33.9c-.1-3.2-.1-6.3-.1-9h62.5v9zm-12.5 24.4h-6.3l.2-1.6h5.9l.2 1.6zm-5.8-4.5l1.6-12.3h2l1.6 12.3h-5.2zm-57-19.9h-62.4v-9h62.5c0 2.7 0 5.8-.1 9zm-62.4 1.4h62.4c0 .9-.1 1.8-.1 2.8H194v-2.8zm65.2 0h7.3c0 .9.1 1.8.1 2.8H259c.1-.9.1-1.8.1-2.8zm7.2-1.4h-7.2c.1-3.2.1-6.3.1-9h7c0 2.7 0 5.8.1 9zm-7.7-66.7v6.8h-9v-6.8h9zm-8.9 8.3h9v.7h-9v-.7zm0 2.1h9v2.3h-9v-2.3zm26-1.4h-9v-.7h9v.7zm-9 3.7v-2.3h9v2.3h-9zm9-5.9h-9v-6.8h9v6.8zm-119.3 91.1c-2.1-7.1-3-40.9-.9-53.6 2.2-13.5 11.9-28.6 17.8-35.6 5.6-6.5 13.5-15.7 15.7-18.3 11.4 6.4 28.7 9.6 51.8 9.6h6v14.1c0 .8.6 1.4 1.4 1.4h5.4c.3 3.1 2.4 22.4 2.7 35.1 0 1.2.1 2.6.1 4.2h-63.9c-.8 0-1.4.6-1.4 1.4v16.1c0 .8.6 1.4 1.4 1.4H256c-.8 11.8-2.8 24.7-8 33.3-2.6 4.4-4.9 8.5-6.9 12.2-.4.7-.1 1.6.6 1.9.2.1.4.2.6.2.5 0 1-.3 1.3-.8 1.9-3.7 4.2-7.7 6.8-12.1 5.4-9.1 7.6-22.5 8.4-34.7h7.8c.7 11.2 2.6 23.5 7.1 32.4.2.5.8.8 1.3.8.2 0 .4 0 .6-.2.7-.4 1-1.2.6-1.9-4.3-8.5-6.1-20.3-6.8-31.1H312l-2.4 18.6c-.1.4.1.8.3 1.1.3.3.7.5 1.1.5h9.6c.4 0 .8-.2 1.1-.5.3-.3.4-.7.3-1.1l-2.4-18.6H333c.8 0 1.4-.6 1.4-1.4v-16.1c0-.8-.6-1.4-1.4-1.4h-63.9c0-1.5 0-2.9.1-4.2.2-12.7 2.3-32 2.7-35.1h5.2c.8 0 1.4-.6 1.4-1.4v-14.1h6.2c23.1 0 40.4-3.2 51.8-9.6 2.3 2.6 10.1 11.8 15.7 18.3 5.9 6.9 15.6 22.1 17.8 35.6 2.2 13.4 2 43.2-1.1 53.1-1.2 3.9-1.4 8.7-1 13-1.7-2.8-2.9-4.4-3-4.6-.2-.3-.6-.5-.9-.6h-.5c-.2 0-.4.1-.5.2-.6.5-.8 1.4-.3 2 0 0 .2.3.5.8 1.4 2.1 5.6 8.4 8.9 16.7h-42.9v-43.8c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v44.9c0 .1-.1.2-.1.3 0 .1 0 .2.1.3v9c-1.1 2-3.9 3.7-10.5 3.7h-7.5c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.5c5 0 8.5-.9 10.5-2.8-.1 3.1-1.5 6.5-10.5 6.5H210.4c-9 0-10.5-3.4-10.5-6.5 2 1.9 5.5 2.8 10.5 2.8h67.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-67.4c-6.7 0-9.4-1.7-10.5-3.7v-54.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v43.8h-43.6c4.2-10.2 9.4-17.4 9.5-17.5.5-.6.3-1.5-.3-2s-1.5-.3-2 .3c-.1.2-1.4 2-3.2 5 .1-4.9-.4-10.2-1.1-12.8zm221.4 60.2c-1.5 8.3-14.9 12-26.6 12H174.4c-11.8 0-25.1-3.8-26.6-12-1-5.7.6-19.3 4.6-30.2H197v9.8c0 6.4 4.5 9.7 13.4 9.7h105.4c8.9 0 13.4-3.3 13.4-9.7v-9.8h44c4 10.9 5.6 24.5 4.6 30.2z"></path><path d="M286.1 359.3c0 .4.3.7.7.7h14.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-14.7c-.3 0-.7.3-.7.7zm5.3-145.6c13.5-.5 24.7-2.3 33.5-5.3.4-.1.6-.5.4-.9-.1-.4-.5-.6-.9-.4-8.6 3-19.7 4.7-33 5.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7zm-11.3.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H242c-19.9 0-35.3-2.5-45.9-7.4-.4-.2-.8 0-.9.3-.2.4 0 .8.3.9 10.8 5 26.4 7.5 46.5 7.5h38.1zm-7.2 116.9c.4.1.9.1 1.4.1 1.7 0 3.4-.7 4.7-1.9 1.4-1.4 1.9-3.2 1.5-5-.2-.8-.9-1.2-1.7-1.1-.8.2-1.2.9-1.1 1.7.3 1.2-.4 2-.7 2.4-.9.9-2.2 1.3-3.4 1-.8-.2-1.5.3-1.7 1.1s.2 1.5 1 1.7z"></path><path d="M275.5 331.6c-.8 0-1.4.6-1.5 1.4 0 .8.6 1.4 1.4 1.5h.3c3.6 0 7-2.8 7.7-6.3.2-.8-.4-1.5-1.1-1.7-.8-.2-1.5.4-1.7 1.1-.4 2.3-2.8 4.2-5.1 4zm5.4 1.6c-.6.5-.6 1.4-.1 2 1.1 1.3 2.5 2.2 4.2 2.8.2.1.3.1.5.1.6 0 1.1-.3 1.3-.9.3-.7-.1-1.6-.8-1.8-1.2-.5-2.2-1.2-3-2.1-.6-.6-1.5-.6-2.1-.1zm-38.2 12.7c.5 0 .9 0 1.4-.1.8-.2 1.3-.9 1.1-1.7-.2-.8-.9-1.3-1.7-1.1-1.2.3-2.5-.1-3.4-1-.4-.4-1-1.2-.8-2.4.2-.8-.3-1.5-1.1-1.7-.8-.2-1.5.3-1.7 1.1-.4 1.8.1 3.7 1.5 5 1.2 1.2 2.9 1.9 4.7 1.9z"></path><path d="M241.2 349.6h.3c.8 0 1.4-.7 1.4-1.5s-.7-1.4-1.5-1.4c-2.3.1-4.6-1.7-5.1-4-.2-.8-.9-1.3-1.7-1.1-.8.2-1.3.9-1.1 1.7.7 3.5 4.1 6.3 7.7 6.3zm-9.7 3.6c.2 0 .3 0 .5-.1 1.6-.6 3-1.6 4.2-2.8.5-.6.5-1.5-.1-2s-1.5-.5-2 .1c-.8.9-1.8 1.6-3 2.1-.7.3-1.1 1.1-.8 1.8 0 .6.6.9 1.2.9z"></path></svg>`}`;
});

/* src/components/Money.svelte generated by Svelte v4.2.0 */

const Money = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let formatPrice;
	let { price } = $$props;
	let { showCurrency = false } = $$props;
	if ($$props.price === void 0 && $$bindings.price && price !== void 0) $$bindings.price(price);
	if ($$props.showCurrency === void 0 && $$bindings.showCurrency && showCurrency !== void 0) $$bindings.showCurrency(showCurrency);

	formatPrice = new Intl.NumberFormat("en-US",
	{
			style: "currency",
			currency: price.currencyCode,
			currencyDisplay: showCurrency ? "symbol" : "narrowSymbol"
		}).format(parseInt(price.amount));

	return `<span>${escape(formatPrice)}</span>`;
});

/* src/components/CartDrawer.svelte generated by Svelte v4.2.0 */

const CartDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let cartIsUpdatingClass;
	let $isCartDrawerOpen, $$unsubscribe_isCartDrawerOpen;
	let $isCartUpdating, $$unsubscribe_isCartUpdating;
	let $cart, $$unsubscribe_cart;
	$$unsubscribe_isCartDrawerOpen = subscribe(isCartDrawerOpen, value => $isCartDrawerOpen = value);
	$$unsubscribe_isCartUpdating = subscribe(isCartUpdating, value => $isCartUpdating = value);
	$$unsubscribe_cart = subscribe(cart, value => $cart = value);
	let cartDrawerEl;

	cartIsUpdatingClass = $isCartUpdating ? "opacity-50 pointer-events-none" : "";

	{
		{
			if ($isCartDrawerOpen) {
				document.querySelector("body")?.classList.add("overflow-hidden");
			}
		}
	}

	$$unsubscribe_isCartDrawerOpen();
	$$unsubscribe_isCartUpdating();
	$$unsubscribe_cart();

	return `${$isCartDrawerOpen
	? `<div class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true"><div class="fixed inset-0 bg-slate-400/50 backdrop-blur-sm transition-opacity"></div> <div class="fixed inset-0 overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-6 focus:outline-none" tabindex="-1"${add_attribute("this", cartDrawerEl, 0)}><div class="pointer-events-auto w-screen max-w-lg max-h-screen bg-white"><div class="flex flex-col min-h-full max-h-screen"><div class="flex items-start justify-between shadow-sm p-5"><h2 class="text-2xl flex gap-4 items-center font-bold text-zinc-800" id="slide-over-title">Your cart
                  ${$isCartUpdating
		? `<svg class="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`
		: ``}</h2> <div class="ml-3 flex h-7 items-center"><button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" data-svelte-h="svelte-1ryphcq"><span class="sr-only">Close panel</span>  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="flex-1 overflow-y-scroll"><div class="px-5">${$cart && $cart.lines?.nodes.length > 0
		? ` <ul role="list" class="${"divide-y divide-zinc-100 " + escape(cartIsUpdatingClass, true)}">${each($cart.lines?.nodes, item => {
				return `<li class="grid py-8 grid-cols-12 gap-3"><div class="overflow-hidden rounded-lg col-span-3 lg:col-span-2">${validate_component(ShopifyImage, "ShopifyImage").$$render(
					$$result,
					{
						image: item.merchandise.image,
						classList: "object-cover h-full object-center aspect-1",
						sizes: "(min-width: 100px) 100px",
						loading: "lazy"
					},
					{},
					{}
				)}</div> <div class="col-span-7 lg:col-span-8 flex flex-col gap-2"><a class="hover:underline w-fit"${add_attribute("href", `/products/${item.merchandise.product.handle}`, 0)}>${escape(item.merchandise.product.title)}</a> <p class="text-xs">${validate_component(Money, "Money").$$render($$result, { price: item.cost.amountPerQuantity }, {}, {})} </p></div> <div class="col-span-2 items-end flex justify-between flex-col"><button type="button" ${$isCartUpdating ? "disabled" : ""}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg></button> <div><p class="font-medium">${validate_component(Money, "Money").$$render($$result, { price: item.cost.totalAmount }, {}, {})}</p> </div></div> </li>`;
			})}</ul>`
		: `<div class="text-center mt-20" data-svelte-h="svelte-dz819y"><p class="text-gray-500">Your cart is empty</p> <a href="/" class="font-semibold text-emerald-900 hover:text-emerald-700">Continue Shopping
                        <span aria-hidden="true">→</span></a></div>`}</div></div> <div class="">${$cart && $cart.lines?.nodes.length > 0
		? `<div class="border-t border-zinc-200 py-6 px-4 sm:px-6"><div class="flex justify-between text-base font-medium text-gray-900"><p data-svelte-h="svelte-1pz2jt4">Subtotal</p> <p>${validate_component(Money, "Money").$$render(
				$$result,
				{
					price: $cart.cost.totalAmount,
					showCurrency: true
				},
				{},
				{}
			)}</p></div> <p class="mt-0.5 text-sm text-gray-500" data-svelte-h="svelte-vnst5u">Shipping and taxes calculated at checkout.</p> <div class="mt-6"><a${add_attribute("href", $cart.checkoutUrl, 0)} class="button">Checkout</a></div></div>`
		: ``}</div></div></div></div></div></div></div>`
	: ``}`;
});

const $$Astro$b = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "ONE" } = Astro2.props.frontmatter || Astro2.props;
  return renderTemplate`<html data-theme="ONE" lang="en" class="scroll-smooth"><head>${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, {})}<meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/fav.png"><title>${title}</title>${renderHead()}</head><body>${renderComponent($$result, "CartDrawer", CartDrawer, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/tony/Server/ONE/src/components/CartDrawer.svelte", "client:component-export": "default" })}<section><container>${renderSlot($$result, $$slots["default"])}</container></section></body></html>`;
}, "/home/tony/Server/ONE/src/layouts/layout.astro", void 0);

/* src/components/CartIcon.svelte generated by Svelte v4.2.0 */

const CartIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $cart, $$unsubscribe_cart;
	$$unsubscribe_cart = subscribe(cart, value => $cart = value);

	$$unsubscribe_cart();

	return `<div><button class="relative"><span class="sr-only" data-svelte-h="svelte-vrbj1o">Open your cart</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg> ${$cart && $cart.totalQuantity > 0
	? `<div class="absolute -right-2 -top-1 sm:-right-1 sm:top-0 bg-black text-white text-[12px] rounded-full"><span class="w-5 h-5 flex justify-center text-center items-center">${escape($cart.totalQuantity)}</span></div>`
	: ``}</button></div>`;
});

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header><div class="navbar bg-base-100"><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label><ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a href="/hilltribe">Product</a></li><li><a>Shop</a><ul class="p-2"><li><a href="/hilltribe">Hilltribe</a></li><li><a href="/shop">Shop</a></li></ul></li><li><a href="/blocks">Blocks</a></li><li><a href="/figma">Figma</a></li><li><a href="/blank">Blank</a></li></ul></div><a href="/"><img alt="ONE" class="logo" src="/images/logos/ONE.svg"></a></div><div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li tabindex="0"><details><summary>Products</summary><ul class="p-2"><li><a href="/buy">Strategy</a></li><li><a href="/shop">Design</a></li></ul></details></li><li tabindex="0"><details><summary>Solutions</summary><ul class="p-2"><li><a href="/solutions/digital">Sell Digital Products</a></li><li><a href="/solutions/subscription">Sell Subscription Products</a></li><li><a href="/solutions/physical">Sell Physical Products</a></li></ul></details></li><li><a href="/demo">Demo</a></li></ul></div><div class="navbar-end">${renderComponent($$result, "CartIcon", CartIcon, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/CartIcon.svelte", "client:component-export": "default" })}</div></div></header>`;
}, "/home/tony/Server/ONE/src/sections/header.astro", void 0);

const $$Astro$9 = createAstro();
const $$ThemeSwitchFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ThemeSwitchFooter;
  return renderTemplate`${maybeRenderHead()}<div><span>Switch Themes</span><button data-act-class="shadow-outline" data-set-theme="ONE" class="btn btn-primary focus:outline-none m-1 rounded p-2">ONE</button><button data-act-class="shadow-outline" data-set-theme="TWO" class="btn btn-primary focus:outline-none m-1 rounded p-2">TWO</button><button data-set-theme="hilltribe" class="btn btn-primary focus:outline-none m-1 rounded p-2">Hilltribe</button></div>`;
}, "/home/tony/Server/ONE/src/blocks/theme-switch-footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer p-10 bg-base-200 text-base-content"><div>${renderComponent($$result, "ThemeSwitch", $$ThemeSwitchFooter, {})}<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.2679 37.7188C20.6983 37.7647 18.2761 37.2242 16.0013 36.0972C13.806 35.0219 11.9704 33.5023 10.4943 31.5383C8.40078 28.7362 7.3253 25.6505 7.26788 22.2813C7.19372 17.9304 8.6644 14.1955 11.68 11.0765C14.6955 7.95748 18.3795 6.35909 22.7321 6.28128C27.0846 6.20347 30.8209 7.66921 33.9409 10.6785C37.0609 13.6879 38.6579 17.3679 38.7321 21.7188C38.8062 26.0697 37.3356 29.8046 34.32 32.9236C31.3045 36.0426 27.6204 37.641 23.2679 37.7188ZM22.7287 31.4789L23.24 31.4697C25.8096 31.4238 27.9897 30.456 29.7804 28.5664C31.5711 26.6767 32.444 24.4187 32.3992 21.7922C32.3545 19.1658 31.4051 16.9403 29.5512 15.1158C27.6972 13.2913 25.4854 12.402 22.9158 12.448L22.4045 12.4571L22.41 12.7755L20.5221 12.8092C19.844 13.0336 19.2319 13.2834 18.6858 13.5586L22.4222 13.4918L22.429 13.8897L18.0633 13.9677C17.7518 14.1591 17.4281 14.4037 17.0922 14.7016L22.4412 14.606L22.4473 14.9642L16.6657 15.0675C16.3565 15.3915 16.1377 15.6342 16.0093 15.7958L22.4595 15.6805L22.4656 16.0386L15.7007 16.1595C15.5208 16.3751 15.3547 16.6301 15.2023 16.9248L22.4785 16.7947L22.4846 17.1529L14.9725 17.2871L14.6307 18.0098L22.4968 17.8692L22.5029 18.2273L14.4795 18.3707C14.4284 18.4513 14.3715 18.5783 14.3089 18.7519C14.2463 18.9256 14.2026 19.0524 14.1777 19.1325L22.5158 18.9834L22.5225 19.3813L14.1058 19.5318C14.081 19.6119 14.0502 19.7318 14.0136 19.8917C13.977 20.0516 13.9463 20.1716 13.9214 20.2516L22.5348 20.0976L22.5409 20.4558L13.8882 20.6105C13.8411 20.9298 13.819 21.169 13.8217 21.3282L22.5531 21.1721L22.5592 21.5303L13.7885 21.687L13.8014 22.4431L22.5721 22.2863L22.5782 22.6445L13.8075 22.8013C13.8088 22.8809 13.8174 23.0001 13.8332 23.1591C13.8491 23.318 13.8708 23.4371 13.8983 23.5162L22.5904 23.3608L22.5965 23.7189L13.9831 23.8729C14.041 24.1903 14.0975 24.4282 14.1526 24.5864L22.6087 24.4353L22.6155 24.8332L14.2774 24.9823L14.5256 25.6943L22.6277 25.5495L22.6338 25.9076L14.689 26.0497L15.0552 26.7596L22.646 26.6239L22.6521 26.9821L15.2973 27.1136C15.4591 27.3761 15.6205 27.612 15.7815 27.8214L22.6643 27.6984L22.6711 28.0963L16.0636 28.2145C16.1436 28.2927 16.2571 28.41 16.404 28.5666C16.5509 28.7232 16.6644 28.8406 16.7444 28.9188L22.6833 28.8126L22.6894 29.1708L17.1438 29.2699C17.463 29.5296 17.7817 29.7627 18.0999 29.9694L22.7016 29.8871L22.7077 30.2453L18.696 30.317C19.1463 30.5743 19.6485 30.8042 20.2028 31.0066L22.7199 30.9616L22.7287 31.4789Z" fill="white"></path></svg><p>ONE<br>Amplify at the edge</p></div><div><span class="footer-title">Products</span><div class="indicator"><span class="indicator-item badge badge-primary">FREE</span><a href="/strategy" class="link link-hover">Play</a></div><a href="/strategy" class="link link-hover">Strategy</a><a href="/design" class="link link-hover">Design</a><a href="/sales" class="link link-hover">Sales</a><a href="/marketing" class="link link-hover">Marketing</a><a href="/service" class="link link-hover">Service</a><a href="/intelligence" class="link link-hover">Intelligence</a></div><div><span class="footer-title">Collective</span><a class="link link-hover">About</a><a class="link link-hover">Jobs</a><a class="link link-hover">Press</a><a class="link link-hover">Contact</a></div><div><span class="footer-title">Legal</span><a href="/terms" class="link link-hover">Terms of use</a><a href="/privacy" class="link link-hover">Privacy policy</a><a href="/cookies" class="link link-hover">Cookie policy</a></div></footer>`;
}, "/home/tony/Server/ONE/src/sections/footer.astro", void 0);

const setCache = {
  long: (Astro) => {
    Astro.response.headers.set("Cache-Control", "public, max-age=60, stale-while-revalidate=120");
  },
  short: (Astro) => {
    Astro.response.headers.set("Cache-Control", "public, max-age=1, stale-while-revalidate=9");
  }
};

/* src/components/AddToCartForm.svelte generated by Svelte v4.2.0 */

const AddToCartForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let variantInCart;
	let noQuantityLeft;
	let $cart, $$unsubscribe_cart;
	let $isCartUpdating, $$unsubscribe_isCartUpdating;
	$$unsubscribe_cart = subscribe(cart, value => $cart = value);
	$$unsubscribe_isCartUpdating = subscribe(isCartUpdating, value => $isCartUpdating = value);
	let { variantId } = $$props;
	let { variantQuantityAvailable } = $$props;
	let { variantAvailableForSale } = $$props;

	if ($$props.variantId === void 0 && $$bindings.variantId && variantId !== void 0) $$bindings.variantId(variantId);
	if ($$props.variantQuantityAvailable === void 0 && $$bindings.variantQuantityAvailable && variantQuantityAvailable !== void 0) $$bindings.variantQuantityAvailable(variantQuantityAvailable);
	if ($$props.variantAvailableForSale === void 0 && $$bindings.variantAvailableForSale && variantAvailableForSale !== void 0) $$bindings.variantAvailableForSale(variantAvailableForSale);
	variantInCart = $cart && $cart.lines?.nodes.filter(item => item.merchandise.id === variantId)[0];
	noQuantityLeft = variantInCart && variantQuantityAvailable <= variantInCart?.quantity;
	$$unsubscribe_cart();
	$$unsubscribe_isCartUpdating();

	return `<form><input type="hidden" name="id"${add_attribute("value", variantId, 0)}> <input type="hidden" name="quantity" value="1"> <button type="submit" class="button mt-10 w-full" ${$isCartUpdating || noQuantityLeft || !variantAvailableForSale
	? "disabled"
	: ""}>${$isCartUpdating
	? `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`
	: ``} ${variantAvailableForSale ? `Add to bag` : `Sold out`}</button> ${noQuantityLeft
	? `<div class="text-center text-red-600" data-svelte-h="svelte-zjpvja"><small>All units left are in your cart</small></div>`
	: ``}</form>`;
});

const $$Astro$7 = createAstro();
const $$ProductImageGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProductImageGallery;
  z.object({
    nodes: z.array(ImageResult)
  });
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-4 md:grid-cols-8 lg:gap-6"><div class="md:order-2 md:col-span-6">${renderComponent($$result, "ShopifyImage", ShopifyImage, { "classList": "overflow-hidden rounded-lg h-full object-cover", "loading": "eager", "image": images.nodes[0], "sizes": `
          (min-width: 1540px) 475px,
          (min-width: 1280px) 389px,
          (min-width: 1040px) 304px,
          (min-width: 780px) 720px,
          (min-width: 680px) 592px,
          calc(94.44vw - 31px)
        ` })}</div><div${addAttribute([
    "grid",
    "grid-cols-4",
    "gap-4",
    "md:order-1",
    "md:col-span-2",
    "md:flex",
    "md:flex-col",
    "md:gap-6",
    { "md:justify-between": images.nodes.length > 2 }
  ], "class:list")}>${images.nodes.map((image, index) => {
    if (index < 3) {
      return renderTemplate`<div class="overflow-hidden rounded-lg">${renderComponent($$result, "ShopifyImage", ShopifyImage, { "classList": "", "loading": "eager", "image": image, "sizes": `
                  (min-width: 1540px) 475px,
                  (min-width: 1280px) 389px,
                  304px
                ` })}</div>`;
    }
  })}</div></div>`;
}, "/home/tony/Server/ONE/src/components/ProductImageGallery.astro", void 0);

const $$Astro$6 = createAstro();
const $$ProductBreadcrumb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ProductBreadcrumb;
  const { title } = Astro2.props;
  return renderTemplate`<!-- This code uses the Breadcrumbs component from HyperUI
(https://www.hyperui.dev/components/application-ui/breadcrumbs#component-1)
Thank you to the HyperUI team for providing this open source component. -->${maybeRenderHead()}<nav aria-label=" Breadcrumb"><ol role="list" class="flex items-center gap-1 text-sm primary-font"><li><a href="/" class="block transition hover:text-gray-200"><span class="sr-only">Home</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></a></li><li><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></li><li><div class="block transition hover:primary">${title}</div></li></ol></nav>`;
}, "/home/tony/Server/ONE/src/components/ProductBreadcrumb.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProductInformations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProductInformations;
  const { price, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-2xl font-bold sm:text-4xl">${title}</h1><p class="mt-4 text-3xl font-bold">${renderComponent($$result, "Money", Money, { "price": price })}</p><!-- Reviews --><div class="mt-4"><div class="flex items-center gap-4"><div class="flex"><svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg class="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div><a href="#reviews" class="text-sm text-emerald-900 hover:underline">42 Reviews</a></div><div class="mt-6"><p class="text-base">
This store is for demo purposes only. No orders will be fulfilled.
</p></div></div>`;
}, "/home/tony/Server/ONE/src/components/ProductInformations.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProductCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/products/${product?.handle}`, "href")} class="group overflow-hidden rounded-lg border-l-orange-100 shadow hover:shadow-md"><div class="relative">${renderComponent($$result, "ShopifyImage", ShopifyImage, { "classList": "", "loading": "eager", "image": product?.featuredImage, "sizes": `
      (min-width: 1540px) 348px,
      (min-width: 1280px) 284px,
      (min-width: 1040px) 309px,
      (min-width: 780px) 348px,
      (min-width: 640px) 284px,
      calc(100vw - 48px)
    ` })}<div class="absolute inset-0 z-10 grid items-end justify-items-center opacity-0 transition-all group-hover:bg-black/10 group-hover:opacity-100"><button class="button w-full gap-3 rounded-none"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg></span>
Shop now
</button></div></div><div class="flex justify-between py-6 px-5 text-zinc-700"><h3 class="group-hover:underline">${product?.title}</h3><p class="font-bold">${renderComponent($$result, "Money", Money, { "price": product?.variants.nodes[0].priceV2 })}</p></div></a>`;
}, "/home/tony/Server/ONE/src/components/ProductCard.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProductRecommendations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductRecommendations;
  const { productId, buyerIP } = Astro2.props;
  const productRecommendations = await getProductRecommendations({
    productId,
    buyerIP
  });
  return renderTemplate`${productRecommendations.length > 0 && renderTemplate`${maybeRenderHead()}<section class="bg-white"><div class="py-16 sm:py-24"><h2 class="text-2xl font-bold tracking-tight text-gray-900">
Recommended for you
</h2><div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">${productRecommendations.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product })}`)}</div></div></section>`}`;
}, "/home/tony/Server/ONE/src/components/ProductRecommendations.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProductReviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductReviews;
  return renderTemplate`<!-- This code uses the Reviews component from HyperUI
(https://www.hyperui.dev/components/ecommerce/reviews#component-1)
Thank you to the HyperUI team for providing this open source component. -->${maybeRenderHead()}<div class="mt-10 mb-20 scroll-mt-20" id="reviews"><h2 class="text-xl font-bold sm:text-2xl">Customer Reviews</h2><div class="mt-4 flex items-center gap-4"><p class="text-3xl font-medium">
3.8
<span class="sr-only"> Average review score</span></p><div><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div><p class="mt-0.5 text-xs text-gray-500">Based on 42 reviews</p></div></div><div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2"><blockquote><header class="sm:flex sm:items-center sm:gap-4"><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div><p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p></header><p class="mt-2 text-gray-700">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus
        fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt
        cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?
</p><footer class="mt-4"><p class="text-xs text-gray-500">John Doe - 12th January, 2024</p></footer></blockquote><blockquote><header class="sm:flex sm:items-center sm:gap-4"><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div><p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p></header><p class="mt-2 text-gray-700">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus
        fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt
        cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?
</p><footer class="mt-4"><p class="text-xs text-gray-500">John Doe - 12th January, 2024</p></footer></blockquote><blockquote><header class="sm:flex sm:items-center sm:gap-4"><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div><p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p></header><p class="mt-2 text-gray-700">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus
        fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt
        cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?
</p><footer class="mt-4"><p class="text-xs text-gray-500">John Doe - 12th January, 2024</p></footer></blockquote><blockquote><header class="sm:flex sm:items-center sm:gap-4"><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div><p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p></header><p class="mt-2 text-gray-700">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus
        fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt
        cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?
</p><footer class="mt-4"><p class="text-xs text-gray-500">John Doe - 12th January, 2024</p></footer></blockquote></div></div>`;
}, "/home/tony/Server/ONE/src/components/ProductReviews.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProductAccordions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductAccordions;
  const accordions = [
    {
      title: "Shipping",
      icon: "truck",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?"
    },
    {
      title: "Care instructions",
      icon: "care",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid">${accordions.map((accordion, index) => renderTemplate`<details${addAttribute([
    "group",
    "border-t",
    { "border-b": index === accordions.length - 1 }
  ], "class:list")}><summary class="flex cursor-pointer items-center justify-between py-3 px-1 font-bold"><div class="flex items-center gap-2">${accordion.icon === "truck" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path></svg>`}${accordion.icon === "care" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path></svg>`}${accordion.title}</div><span class="transition group-open:rotate-180"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span></summary><div class="p-4 text-sm">${accordion.content}</div></details>`)}</div>`;
}, "/home/tony/Server/ONE/src/components/ProductAccordions.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { handle } = Astro2.params;
  const headers = Astro2.request.headers;
  const ip = headers.get("x-vercel-forwarded-for") || Astro2.clientAddress;
  const product = await getProductByHandle({ handle: handle || "", buyerIP: ip });
  if (!product) {
    Astro2.response.status = 404;
  }
  const firstVariant = product?.variants.nodes[0];
  setCache.short(Astro2);
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${!product ? renderTemplate`${renderComponent($$result, "NotFoundLayout", $$NotFoundLayout, { "title": "Product not found", "message": "Product not found" })}` : renderTemplate`${renderComponent($$result, "ShopLayout", $$Layout, { "title": product.title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container pt-6 primary-font">${renderComponent($$result2, "ProductBreadcrumb", $$ProductBreadcrumb, { "title": product.title })}</div><section class="container"><div class="pb-16 pt-6 lg:grid lg:grid-cols-12 lg:gap-20"><div class="lg:col-span-7">${renderComponent($$result2, "ProductImageGallery", $$ProductImageGallery, { "images": product.images })}</div><div class="mt-8 lg:col-span-5 lg:mt-0 primary-font">${renderComponent($$result2, "ProductInformations", $$ProductInformations, { "title": product.title, "price": firstVariant?.priceV2 })}<div>${renderComponent($$result2, "AddToCartForm", AddToCartForm, { "client:load": true, "variantId": firstVariant?.id, "variantQuantityAvailable": firstVariant?.quantityAvailable, "variantAvailableForSale": firstVariant?.availableForSale, "client:component-hydration": "load", "client:component-path": "/home/tony/Server/ONE/src/components/AddToCartForm.svelte", "client:component-export": "default" })}</div><div class="mt-8">${renderComponent($$result2, "ProductAccordions", $$ProductAccordions, {})}</div></div></div></section><section class="container">${renderComponent($$result2, "ProductReviews", $$ProductReviews, {})}</section><section class="container">${renderComponent($$result2, "ProductRecommendations", $$ProductRecommendations, { "productId": product.id, "buyerIP": ip })}</section>` })}`}${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "/home/tony/Server/ONE/src/pages/products/[...handle].astro", void 0);

const $$file = "/home/tony/Server/ONE/src/pages/products/[...handle].astro";
const $$url = "/products/[...handle]";

const ____handle_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, ProductResult as P, ____handle_ as _, $$Footer as a, $$Layout as b, $$ProductCard as c, getProducts as g, setCache as s };

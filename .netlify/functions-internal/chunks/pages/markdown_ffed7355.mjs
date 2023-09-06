/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as renderSlot, s as spreadAttributes, u as unescapeHTML } from '../astro_355d63a0.mjs';
import { b as $$Layout } from './__6314d021.mjs';
import './image-endpoint_52bfc4ac.mjs';
import 'zod';
import 'nanostores';
import '@nanostores/persistent';
/* empty css                              */import './404_bb3f7cac.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "url": frontmatter.url }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1>${frontmatter.title}</h1><h2>Post author: ${frontmatter.author}</h2>${renderSlot($$result2, $$slots["default"])}<a class="btn btn-circle bg-secondary" href="/">home</a>` })}`;
}, "/home/tony/Server/ONE/src/layouts/blog.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h3 id=\"what-is-markdown\">What is Markdown?</h3>\n<blockquote>\n<p>Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read,\neasy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).</p>\n</blockquote>\n<p>For example, this entire page was created using Markdown and HTML!</p>\n<p>Below is a quick reference of all the Markdown syntax that is supported by Stoplight.</p>");

				const frontmatter = {"layout":"../layouts/blog.astro","title":"Markdown + Tailwind","author":"Anthony"};
				const file = "/home/tony/Server/ONE/src/pages/markdown.md";
				const url = "/markdown";
				function rawContent() {
					return "\n### What is Markdown?\n\n> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read,\n> easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).\n\nFor example, this entire page was created using Markdown and HTML!\n\nBelow is a quick reference of all the Markdown syntax that is supported by Stoplight.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"what-is-markdown","text":"What is Markdown?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Blog, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };

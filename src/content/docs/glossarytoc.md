    Adaptors
    API
    Build
    Client Rendering
    Cloudflare
    Collection Entry
    Components
    Configuration
    Content Collections
    CSS
    Data Fetching
    Deployment
    Development Server
    Debugging
    Directory Structure
    Dynamic Routing
    ESLint
    Environment Variables
    Event Handling
    File Exclusion
    Formatting
    Frontmatter
    GitHub
    Gitpod
    Hydration
    Internationalization
    Islands
    JSON
    JSX
    Layout
    Localhost
    Markdoc
    Markdown
    MDX
    Meta Tags
    Multilingual
    Node.js
    NPM
    Package.json
    Page Layout
    Performance Optimization
    Plugins
    PNPN
    Prettier
    Props
    React
    Reusable Components
    RSS
    Routing
    SASS
    Scripts
    SCSS
    SEO
    Server-Side Rendering
    Sitemaps
    Site Showcase
    Slots
    Solid
    SPA Mode
    Svelte
    SSR Adapters
    Starter Templates
    Static Site Generation
    Storyblok
    Stylesheets
    Syntax Highlighting
    Tailwind
    Template Directives
    Terminal
    Themes
    Transition Customization
    TypeScript
    UI Frameworks
    Vercel
    View Transitions
    Viewport
    VS Code
    Vue
    Web Framework
    YAML
    Yarn

here are 100 glossary entries. use the knowlege base to write them using this following format. 


Astro Glossary is designed to provide clear, concise. informative, and keyword-rich glossary entries relevant to Astro developers, responding in markdown format. It focuses on explaining key concepts, features, and terminologies in the Astro ecosystem. When asked about a specific aspect of Astro, it provides a detailed description, including examples and links to the official Astro documentation for further reading. Only put one heading, the rest paragraphs, lists and code examples. The responses include headers for each topic, a description of the concept, a code snippet if applicable, and a 'For more details' section with relevant links. This format helps developers understand Astro's functionalities, best practices, and how to implement them effectively. Important only include a URL if there is a url. do not make up urls. The url is in this format https://docs.astro.build/en/guides/content-collections/

Examples
use this format for glossary entires

 ---
## Async Component

An *async component* in Astro is a technique for lazy loading components. This method reduces the initial download size by splitting the JavaScript into smaller chunks that load only when needed. Similar to Vue Router's lazy loading feature for route components, Astro's async components help optimize performance and loading times.

For more details, see:
- [Guide - Async Components](https://docs.astro.build/en//guide/components/async)
---

## Component

In Astro, a *component* is a fundamental building block for user interfaces. Common across many UI frameworks, a component can be as simple as a button or as complex as an entire app section. Astro components, like those in Vue, are used for dividing UIs into manageable parts and facilitating code reuse. They can be created using simple objects with either a template or render function.

Example:
```js
const ExampleComponent = {
  render() {
    return 'Sample Text'
  }
}
```
For more details see:
- [Component - Props](https://docs.astro.build/en//guide/components/props)
- [Component - Render Functions & JSX](https://docs.astro.build/en//guide/extras/render-function)

## prop 
There are three common uses of the term *prop* in Vue:
- Component props
- VNode props
- Slot props

*Component props* are what most people think of as props. These are explicitly defined by a component using either `defineProps()` or the `props` option.

The term *VNode props* refers to the properties of the object passed as the second argument to `h()`. These can include component props, but they can also include component events, DOM events, DOM attributes, and DOM properties. You'd usually only encounter VNode props if you're working with render functions to manipulate VNodes directly.

*Slot props* are the properties passed to a scoped slot.

In all cases, props are properties that are passed in from elsewhere.

While the word props is derived from the word *properties*, the term props has a much more specific meaning in the context of Vue. You should avoid using it as an abbreviation of properties.

Example:
```js
const ExampleComponent = {
  render() {
    return 'Sample Text'
  }
}
```

For more details see:
- [Guide - Props](https://docs.astro.build/en//guide/components/props)
- [Guide - Render Functions & JSX](https://docs.astro.build/en//guide/extras/render-function)
- [Guide - Slots - Scoped Slots](https://docs.astro.build/en/guide/components/slots#scoped-slots)

## provide / inject 
`provide` and `inject` are a form of inter-component communication.

When a component *provides* a value, all descendants of that component can then choose to grab that value, using `inject`. Unlike with props, the providing component doesn't know precisely which component is receiving the value.

`provide` and `inject` are sometimes used to avoid *prop drilling*. They can also be used as an implicit way for a component to communicate with its slot contents.

`provide` can also be used at the application level, making a value available to all components within that application.

For more details see:
- [Guide - provide / inject](https://docs.astro.build/en/guide/components/provide-inject)

For more details, see:
- [Components in Astro](https://docs.astro.build/en//guide/components)
---
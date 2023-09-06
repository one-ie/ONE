export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/markdown_ffed7355.mjs');

export { page };

export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/theme_2ddf1fa3.mjs');

export { page };

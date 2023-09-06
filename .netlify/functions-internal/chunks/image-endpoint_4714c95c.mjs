export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'preact';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/image-endpoint_52bfc4ac.mjs').then(n => n.i);

export { page };

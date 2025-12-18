
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-DPUV2WFM.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 8443, hash: '7dd61234cce1a7a2f3530ff383112b501ca5bb729e6e8f4a4e868f81185d6f5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4473, hash: '4938badfca3b5d09149e9f839fd269682638ba242078378e05764045c5f3ae8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PF4GQ6TR.css': {size: 11845, hash: 'NHeRBYkt8wY', text: () => import('./assets-chunks/styles-PF4GQ6TR_css.mjs').then(m => m.default)}
  },
};

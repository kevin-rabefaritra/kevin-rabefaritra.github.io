
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-TZDSW4SO.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 8103, hash: '543e1e8138c45da2f6117130f2d0867fe2249ec95946c3c47840431e46fd4847', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1741, hash: '9e3101eadd9cbebd0418e37e3abd115d829031467adf0ccafd2124340378e854', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6BRTL4NL.css': {size: 44689, hash: 'VBDN+yQ872s', text: () => import('./assets-chunks/styles-6BRTL4NL_css.mjs').then(m => m.default)}
  },
};

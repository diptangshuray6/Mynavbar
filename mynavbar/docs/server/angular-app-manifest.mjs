
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Mynavbar/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Mynavbar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23635, hash: '0ddad6e2e2e4a53641c40c49918c7de57b40e448360d0cbf13aad24b0e1dcf71', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17209, hash: '38d9e3b006d1f9ff1df8ebf5d68c7ad4528c927255c0874c6405475387efc37d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57582, hash: 'a60e5594d11f9768f588be76d7d71de5521b9655d1e70e52d4036bf2d4dc1023', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};

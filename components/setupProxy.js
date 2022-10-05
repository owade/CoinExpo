const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/search/trending',
    createProxyMiddleware({
      target: 'https://api.coingecko.com/api/v3',
      secure: false ,
      changeOrigin: true,
    })
  );
  app.use(
    '/coins',
    createProxyMiddleware({
      target: 'https://api.coingecko.com/api/v3',
      secure: false ,
      changeOrigin: true,
    })
  );
  app.use(
    '/markets',
    createProxyMiddleware({
      target: 'https://api.coingecko.com/api/v3',
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    '/asset_platforms',
    createProxyMiddleware({
      target: 'https://api.coingecko.com/api/v3',
      secure: false,
      changeOrigin: true,
    })
  );
};
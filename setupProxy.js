const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'https://jazaelog-jazaelog.cloud.okteto.net',
      changeOrigin: true,
    })
  );
};
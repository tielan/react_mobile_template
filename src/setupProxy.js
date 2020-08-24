const proxy = require('http-proxy-middleware');
const devServer = function (app) {
    app.use(proxy('/proxy', {
        target: 'http://172.16.17.123:8080',
        changeOrigin: false,
        logLevel: 'debug',
    }));
};
module.exports = devServer;
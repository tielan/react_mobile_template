const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
    fixBabelImports("babel-plugin-import", {
        libraryName: "antd-mobile",
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@brand-primary": "#3A84D3" },
    }),
    addWebpackAlias({
        '@': resolve("src")
    })
);
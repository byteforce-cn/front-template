const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const addLessLoader = require("customize-cra-less-loader");
const path = require('path')

const publicPathPlugin = (config, env) => {
    config.output = {
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        chunkFilename: "[name].[hash:8].async.js",
    }
    return config
}
module.exports = override(
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true
            }
        }
    }),
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true
    }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src")
    }),
    publicPathPlugin

)
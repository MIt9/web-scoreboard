const util = require('util')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function override(config, env) {
    config.output = {
        ...config.output,
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
    };

    // console.log(Object.keys(config))
    config.plugins = [
        ...config.plugins.map((item) => {
            if (item.constructor.name === "MiniCssExtractPlugin") {
                return new MiniCssExtractPlugin({

                    filename: '[name].css',
                    chunkFilename: '[name].chunk.css',
                })
            }
            return item
        })
    ]
    return config;
};
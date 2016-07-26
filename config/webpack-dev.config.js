'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const webpack = require('webpack');
const seedConfig = Object.assign({}, require('./seed-config.defaults'), require('../package.json').seedConfig);

module.exports = merge(webpackCommon, {
    entry: {
        main: [
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {
        port: seedConfig.port,
        inline: true,
        hot: true,
        historyApiFallback: true,
        stats: 'minimal'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: 'vendor'
        })
    ]
});

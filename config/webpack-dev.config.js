'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(webpackCommon, {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            './src/main.js'
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {
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
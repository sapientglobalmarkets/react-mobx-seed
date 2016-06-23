'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');

module.exports = merge(webpackCommon, {
    devtool: 'cheap-module-source-map',
    devServer: {
        inline: true,
        historyApiFallback: true,
        stats: 'minimal'
    },

    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
    ]
});
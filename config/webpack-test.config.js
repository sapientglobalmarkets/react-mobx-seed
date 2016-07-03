'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const webpack = require('webpack');

module.exports = merge(webpackCommon, {
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },

    devtool: 'inline-source-map',

    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': false
        }),
    ]
});

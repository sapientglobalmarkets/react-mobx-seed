'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(webpackCommon, {
    entry: {},

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                include: path.join(__dirname, '../src')
            },
        ]
    },

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

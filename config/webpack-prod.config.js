'use strict';

const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(webpackCommon, {
    devtool: 'none',

    plugins: [
        new CopyPlugin([
            {
                from: './src/assets',
            }
        ])
    ]
});
'use strict';

let HtmlPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProvidePlugin = require('webpack').ProvidePlugin;
let webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.js',
        vendor: './src/vendor.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],

        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/
            },

            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },

    plugins: [
        new HtmlPlugin({
            title: 'React + MobX',
            template: './src/index.html',
            inject: true
        }),
        new ExtractTextPlugin('main.css'),
        new ProvidePlugin({
            React: 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: 'vendor'
        })
    ]
};
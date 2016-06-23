'use strict';

const CopyPlugin = require('copy-webpack-plugin');
let HtmlPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProvidePlugin = require('webpack').ProvidePlugin;
let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
        vendor: './src/vendor.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
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
            },

            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[hash].[ext]'
                },
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url',
                query: {
                    name: '[name].[hash].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    plugins: [
        new HtmlPlugin({
            title: 'React + MobX',
            template: './src/index.html',
            inject: true
        }),
        new ExtractTextPlugin('main.css'),
        new CopyPlugin([
            {
                from: './src/assets',
            }
        ]),
        new ProvidePlugin({
            React: 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: 'vendor'
        })
    ]
};
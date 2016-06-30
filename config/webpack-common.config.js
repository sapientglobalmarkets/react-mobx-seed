'use strict';

const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const cssLoader = [
    'css-loader?' + ['localIdentName=[local]__[hash:base64:4]', 'modules', 'importLoaders=1', 'sourceMap'].join('&'),
    'postcss-loader'
].join('!');

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
                include: path.join(__dirname, '../src')
            }
        ],

        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: path.join(__dirname, '../src')
            },

            {
                // Transform our own .css files using PostCSS and CSS-modules
                test: /\.css$/,
                include: path.join(__dirname, '../src'),
                loader: ExtractTextPlugin.extract('style-loader', cssLoader)
            },

            {
                // Do not transform vendor's CSS with CSS-modules
                test: /\.css$/,
                include: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },

            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file',
                include: path.join(__dirname, '../src'),
                query: {
                    name: '[name].[hash].[ext]'
                },
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url',
                include: path.join(__dirname, '../src'),
                query: {
                    name: '[name].[hash].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json']
    },

    // Process the CSS with PostCSS
    postcss: () => [
        require('precss'),
        require('postcss-cssnext')({
            browsers: ['last 2 versions', 'ie > 10']
        }),
        require('postcss-reporter')({ // Posts messages from plugins to the terminal
            clearMessages: true
        })
    ],

    plugins: [
        new HtmlPlugin({
            title: 'React + MobX',
            template: './src/index.html',
            favicon: './src/assets/images/favicon.ico',
            inject: true
        }),
        new ExtractTextPlugin('main.css', {
            allChunks: true
        }),
    ]
};
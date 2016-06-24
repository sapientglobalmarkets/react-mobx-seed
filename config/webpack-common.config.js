'use strict';

const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProvidePlugin = require('webpack').ProvidePlugin;
const webpack = require('webpack');
const path = require('path');

// PostCSS plugins
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

// Load the CSS in a style tag in development
let cssLoaders = 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader?parser=postcss-scss';

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
                // Transform our own .css files using PostCSS and CSS-modules
                test: /\.css$/,
                exclude: /node_modules/,
                loader: cssLoaders
            },

            {
                // Do not transform vendor's CSS with CSS-modules
                // The point is that they remain in global scope.
                // Since we require these CSS files in our JS or CSS files,
                // they will be a part of our compilation either way.
                // So, no need for ExtractTextPlugin here.
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader']
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
        modules: ['src', 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json']
    },

    // Process the CSS with PostCSS
    postcss: () => [
        precss(),
        postcssFocus(), // Add a :focus to every :hover
        cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
            browsers: ['last 2 versions', 'IE > 10'] // ...based on this browser list
        }),
        postcssReporter({ // Posts messages from plugins to the terminal
            clearMessages: true
        })
    ],

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
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: 'vendor'
        })
    ]
};